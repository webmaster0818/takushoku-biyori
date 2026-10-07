import type { Metadata } from "next";
import Link from "next/link";
import { formatJaDate, getAllArticles, groupArticles } from "@/lib/articles";

const PAGE_TITLE = "記事一覧";
const PAGE_DESC =
  "宅食びよりの記事一覧です。宅配弁当・宅食サービスの口コミ・評判、料金・送料の比較データ、目的別の選び方ガイド、クーポン・お試しセット情報をカテゴリ別にまとめています。";
const PAGE_URL = "https://takushoku-biyori.com/articles/";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
  },
};

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">
            ホーム
          </Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">記事一覧</span>
        </li>
      </ol>
    </nav>
  );
}

export default function ArticlesIndexPage() {
  const articles = getAllArticles();
  const groups = groupArticles(articles).filter((g) => g.articles.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${PAGE_TITLE} | 宅食びより`,
        description: PAGE_DESC,
        url: PAGE_URL,
        isPartOf: { "@type": "WebSite", name: "宅食びより", url: "https://takushoku-biyori.com" },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: articles.length,
          itemListElement: articles.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: a.title,
            url: a.url,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
          { "@type": "ListItem", position: 2, name: "記事一覧", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-gray-50 border-b border-gray-200 py-1">
        <p className="max-w-5xl mx-auto px-4 text-[10px] text-gray-400">PR掲載も含みます</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <Breadcrumbs />

        <header className="mb-8">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            記事一覧
          </h1>
          <p className="text-warm-gray text-sm md:text-base leading-relaxed">
            宅食びよりで公開中の全{articles.length}記事をカテゴリ別にまとめています。各記事の料金・送料は各社の公式サイトで一次確認し、口コミは出典付きのものだけを掲載しています。
          </p>
        </header>

        {/* カテゴリ絞り込み（ページ内ジャンプ） */}
        <nav aria-label="カテゴリ" className="mb-10">
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-warm-border rounded-full px-4 py-1.5 text-sm font-medium text-foreground/80 hover:border-accent/40 hover:text-accent transition-colors"
                >
                  {g.label}
                  <span className="text-xs text-warm-gray">{g.articles.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {groups.map((g) => (
          <section key={g.id} id={g.id} className="mb-14 scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-5 flex items-baseline gap-2">
              {g.label}
              <span className="text-sm font-normal text-warm-gray">{g.articles.length}記事</span>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {g.articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/articles/${a.slug}/`}
                    className="block h-full bg-white border border-warm-border rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all group"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                      {a.category && (
                        <span className="inline-block bg-accent/10 text-accent font-bold px-2.5 py-0.5 rounded-full">
                          {a.category}
                        </span>
                      )}
                      <time dateTime={a.publishedTime} className="text-warm-gray">
                        公開 {formatJaDate(a.publishedTime)}
                      </time>
                      {a.modifiedTime !== a.publishedTime && (
                        <time dateTime={a.modifiedTime} className="text-warm-gray">
                          更新 {formatJaDate(a.modifiedTime)}
                        </time>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-foreground leading-snug mb-2 group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed line-clamp-3">
                      {a.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="text-xs text-warm-gray border-t border-warm-border pt-6">
          記事の評価方法は「<Link href="/methodology/" className="underline hover:text-accent">評価方法・データ源</Link>」、編集体制は「<Link href="/author/" className="underline hover:text-accent">編集部の体制と役割</Link>」をご覧ください。
        </p>
      </div>
    </>
  );
}
