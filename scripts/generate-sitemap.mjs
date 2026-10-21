#!/usr/bin/env node
/**
 * sitemap.xml generator for takushoku-biyori.com
 * Enumerates app/articles/* + static pages and writes sitemap.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const BASE = 'https://takushoku-biyori.com'
const OUT = path.join(ROOT, 'public', 'sitemap.xml')
// ローカル（JST）基準の日付。toISOString()はUTCのため深夜〜朝は前日になる
const TODAY = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)

// ⚠️ lastmod は「そのページの中身が最後に変わった日」（2026-10-12 成長ルーチン）。
//    以前は生成日を全URLに入れていたうえ、記事修正のデプロイで再生成されず、
//    10/9〜10/11 に直した三ツ星・ウェルネスの口コミ記事も 10/07 のままだった（最終クロール 9/17・9/26）。
//    ページのディレクトリと、そのページが import する @/data の最終コミット日の最大値。未コミットの変更があれば当日。
const FILE_DATES = (() => {
  const m = new Map()
  let date = ''
  // 件名に [no-lastmod] を含むコミット（デザインだけの変更＝本文は不変）は日付に数えない。
  // 2026-10-21 デザイン刷新で67ページ全部の lastmod がマージ日になるのを避けるため（見せかけの鮮度にしない）。
  const log = execFileSync('git', ['log', '--format=@%cs %s', '--name-only', '--', 'app', 'data', 'lib'], { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 28 })
  for (const line of log.split('\n')) {
    if (line.startsWith('@')) date = line.includes('[no-lastmod]') ? '' : line.slice(1, 11)
    else if (line && date && !m.has(line)) m.set(line, date)
  }
  const dirty = execFileSync('git', ['status', '--porcelain', '--', 'app', 'data', 'lib'], { cwd: ROOT, encoding: 'utf8' })
  for (const line of dirty.split('\n')) if (line) m.set(line.slice(3).trim(), TODAY)
  return m
})()

function lastmodOf(dir, pageFile) {
  const rels = [dir]
  try {
    const src = fs.readFileSync(path.join(ROOT, pageFile), 'utf8')
    for (const m of src.matchAll(/from\s+["']@\/data\/([^"']+)["']/g)) rels.push(`data/${m[1]}`)
  } catch { /* no page file */ }
  let best = ''
  for (const rel of rels) {
    for (const [f, d] of FILE_DATES) {
      if ((f === rel || f.startsWith(rel + '/') || f === rel + '.ts' || f === rel + '.json') && d > best) best = d
    }
  }
  return best || TODAY
}

const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/articles/', priority: '0.8', changefreq: 'weekly' },
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'monthly' },
  { path: '/terms-of-service/', priority: '0.3', changefreq: 'monthly' },
  { path: '/content-policy/', priority: '0.3', changefreq: 'monthly' },
  { path: '/editorial/', priority: '0.5', changefreq: 'monthly' },
  { path: '/author/', priority: '0.5', changefreq: 'monthly' },
  { path: '/methodology/', priority: '0.5', changefreq: 'monthly' },
]

function articleSlugs() {
  const dir = path.join(ROOT, 'app', 'articles')
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('['))
    .map((e) => e.name)
    .sort()
}

function priorityFor(slug) {
  // ハブ・ランキング系は priority 高め
  if (slug.includes('osusume') || slug.includes('ranking')) return '0.8'
  // Buy系（クーポン・お試し・割引）も高め
  if (slug.includes('coupon') || slug.includes('otameshi') || slug.includes('off') || slug.includes('souryou-muryou')) return '0.8'
  // 比較系
  if (slug.includes('-vs-') || slug.includes('hikaku')) return '0.7'
  return '0.6'
}

function build() {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ]

  const articles = articleSlugs()
  const articleDates = new Map(articles.map((slug) => [slug, lastmodOf(`app/articles/${slug}`, `app/articles/${slug}/page.tsx`)]))
  // TOP と記事一覧は記事のリストを載せるので、いちばん新しい記事の日付（記事一覧の元データ lib/articles.ts も見る）
  const newestArticle = [...articleDates.values(), lastmodOf('lib/articles.ts', '')].sort().at(-1) || TODAY

  for (const p of STATIC_PAGES) {
    const isTop = p.path === '/'
    const dir = isTop ? 'app/page.tsx' : `app${p.path.replace(/\/$/, '')}`
    const own = isTop ? lastmodOf(dir, dir) : lastmodOf(dir, `${dir}/page.tsx`)
    const lastmod = (isTop || p.path === '/articles/') && newestArticle > own ? newestArticle : own
    lines.push(
      `  <url><loc>${BASE}${p.path}</loc><lastmod>${lastmod}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`
    )
  }

  for (const slug of articles) {
    const p = priorityFor(slug)
    const cf = p >= '0.8' ? 'weekly' : 'monthly'
    lines.push(
      `  <url><loc>${BASE}/articles/${slug}/</loc><lastmod>${articleDates.get(slug)}</lastmod><changefreq>${cf}</changefreq><priority>${p}</priority></url>`
    )
  }

  lines.push('</urlset>', '')
  return { xml: lines.join('\n'), total: STATIC_PAGES.length + articles.length, articles: articles.length }
}

const result = build()
fs.writeFileSync(OUT, result.xml)
console.log(`✓ Wrote ${OUT}`)
console.log(`  ${result.total} URLs (${STATIC_PAGES.length} static + ${result.articles} articles)`)
