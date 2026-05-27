#!/usr/bin/env node
/**
 * sitemap.xml generator for takushoku-biyori.com
 * Enumerates app/articles/* + static pages and writes sitemap.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const BASE = 'https://takushoku-biyori.com'
const OUT = path.join(ROOT, 'public', 'sitemap.xml')
const TODAY = new Date().toISOString().slice(0, 10)

const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'monthly' },
  { path: '/terms-of-service/', priority: '0.3', changefreq: 'monthly' },
  { path: '/content-policy/', priority: '0.3', changefreq: 'monthly' },
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

  for (const p of STATIC_PAGES) {
    lines.push(
      `  <url><loc>${BASE}${p.path}</loc><lastmod>${TODAY}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`
    )
  }

  const articles = articleSlugs()
  for (const slug of articles) {
    const p = priorityFor(slug)
    const cf = p >= '0.8' ? 'weekly' : 'monthly'
    lines.push(
      `  <url><loc>${BASE}/articles/${slug}/</loc><lastmod>${TODAY}</lastmod><changefreq>${cf}</changefreq><priority>${p}</priority></url>`
    )
  }

  lines.push('</urlset>', '')
  return { xml: lines.join('\n'), total: STATIC_PAGES.length + articles.length, articles: articles.length }
}

const result = build()
fs.writeFileSync(OUT, result.xml)
console.log(`✓ Wrote ${OUT}`)
console.log(`  ${result.total} URLs (${STATIC_PAGES.length} static + ${result.articles} articles)`)
