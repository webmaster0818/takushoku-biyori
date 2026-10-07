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
  id: string;
  label: string;
  /** この表示グループに束ねる、記事側のカテゴリ名。空配列は「どこにも属さない記事」の受け皿 */
  categories: string[];
};

/** 記事側のカテゴリ名は表記ゆれがあるため、一覧では表示グループに束ねる */
export const CATEGORY_GROUPS: CategoryGroup[] = [
  { id: "kuchikomi", label: "口コミ・評判", categories: ["口コミ・評判"] },
  {
    id: "hikaku",
    label: "比較・料金データ",
    categories: ["比較", "比較記事", "サービス比較", "比較・データ"],
  },
  {
    id: "mokuteki",
    label: "目的別ガイド・ランキング",
    categories: ["目的別ガイド", "ランキング", "おすすめ"],
  },
  {
    id: "otoku",
    label: "クーポン・お試しセット",
    categories: ["クーポン・割引", "クーポン・キャンペーン", "お試しセット"],
  },
  { id: "guide", label: "選び方・使い方・サービス紹介", categories: [] },
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
    const category = nav ? pick(nav, /text-foreground\/70">([^<]+)</).trim() : "";

    if (!title || !description || !publishedTime) {
      throw new Error(`[lib/articles] metadata missing in app/articles/${slug}/page.tsx`);
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
  const known = new Set(CATEGORY_GROUPS.flatMap((g) => g.categories));
  const byDateDesc = (a: ArticleMeta, b: ArticleMeta) =>
    b.modifiedTime.localeCompare(a.modifiedTime) || b.publishedTime.localeCompare(a.publishedTime);
  return CATEGORY_GROUPS.map((g) => ({
    ...g,
    articles: articles
      .filter((a) =>
        g.categories.length === 0 ? !known.has(a.category) : g.categories.includes(a.category)
      )
      .sort(byDateDesc),
  }));
}

export function formatJaDate(iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return iso;
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}
