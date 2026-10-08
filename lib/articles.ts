import fs from "node:fs";
import path from "node:path";

/**
 * 記事一覧のデータ源。
 * app/articles/<slug>/page.tsx が各自持っているメタデータ
 * (ARTICLE_TITLE / ARTICLE_DESCRIPTION / openGraph.publishedTime / modifiedTime /
 *  パンくずのカテゴリ表示) をビルド時に読み取って一覧を生成する。
 * 手書きリストは持たない（記事を追加・削除すれば一覧も自動で追従する）。
 */

export type ArticleMeta = {
  slug: string;
  url: string;
  title: string;
  description: string;
  /** 記事ページのパンくずに表示しているカテゴリ名。無い記事は空文字 */
  category: string;
  publishedTime: string;
  modifiedTime: string;
};

export type CategoryGroup = {
  /** 一覧ページのアンカー id（記事パンくずの href="/articles/#id" と一致させる） */
  id: string;
  /** 表示名。記事側のパンくず・BreadcrumbList・ヘッダーバッジもこの文字列をそのまま使う */
  label: string;
};

/**
 * サイトのカテゴリ定義（2026-10-08 に記事側の表記ゆれをこの5つに統一済み）。
 * 記事のカテゴリ名はここの label と完全一致でなければビルドを落とす（表記ゆれ・カテゴリ欠落の再発防止）。
 */
export const CATEGORY_GROUPS: CategoryGroup[] = [
  { id: "kuchikomi", label: "口コミ・評判" },
  { id: "hikaku", label: "比較・料金データ" },
  { id: "mokuteki", label: "目的別ガイド・ランキング" },
  { id: "otoku", label: "クーポン・お試しセット" },
  { id: "guide", label: "選び方・使い方・サービス紹介" },
];

const ARTICLES_DIR = path.join(process.cwd(), "app", "articles");
const SITE_URL = "https://takushoku-biyori.com";

function pick(src: string, re: RegExp): string {
  const m = src.match(re);
  return m ? m[1] : "";
}

function unescapeJsString(s: string): string {
  return s.replace(/\\(["\\])/g, "$1");
}

let cache: ArticleMeta[] | null = null;

export function getAllArticles(): ArticleMeta[] {
  if (cache) return cache;
  const entries = fs
    .readdirSync(ARTICLES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith("["))
    .map((e) => e.name)
    .sort();

  const list: ArticleMeta[] = [];
  for (const slug of entries) {
    const file = path.join(ARTICLES_DIR, slug, "page.tsx");
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, "utf8");

    const title = unescapeJsString(pick(src, /const ARTICLE_TITLE\s*=\s*"((?:[^"\\]|\\.)*)"/));
    const description = unescapeJsString(
      pick(src, /const ARTICLE_DESCRIPTION\s*=\s*"((?:[^"\\]|\\.)*)"/)
    );
    const publishedTime = pick(src, /publishedTime:\s*"([^"]+)"/);
    const modifiedTime = pick(src, /modifiedTime:\s*"([^"]+)"/) || publishedTime;
    const nav = pick(src, /aria-label="パンくずリスト"([\s\S]*?)<\/nav>/);
    const category = nav ? pick(nav, /text-foreground\/70[^"]*">([^<]+)</).trim() : "";

    if (!title || !description || !publishedTime) {
      throw new Error(`[lib/articles] metadata missing in app/articles/${slug}/page.tsx`);
    }
    const group = CATEGORY_GROUPS.find((g) => g.label === category);
    if (!group) {
      throw new Error(
        `[lib/articles] app/articles/${slug}/page.tsx のパンくずカテゴリ「${category}」は未定義。CATEGORY_GROUPS のいずれかの label と完全一致させること`
      );
    }
    const navHref = pick(nav, /href="\/articles\/#([a-z]+)"/);
    if (navHref !== group.id) {
      throw new Error(
        `[lib/articles] app/articles/${slug}/page.tsx のパンくずリンク先 #${navHref} がカテゴリ「${category}」(#${group.id}) と不一致`
      );
    }
    list.push({
      slug,
      url: `${SITE_URL}/articles/${slug}/`,
      title,
      description,
      category,
      publishedTime,
      modifiedTime,
    });
  }
  cache = list;
  return list;
}

export function groupArticles(articles: ArticleMeta[]) {
  const byDateDesc = (a: ArticleMeta, b: ArticleMeta) =>
    b.modifiedTime.localeCompare(a.modifiedTime) || b.publishedTime.localeCompare(a.publishedTime);
  return CATEGORY_GROUPS.map((g) => ({
    ...g,
    articles: articles.filter((a) => a.category === g.label).sort(byDateDesc),
  }));
}

export function formatJaDate(iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return iso;
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}
