#!/usr/bin/env python3
"""競合ベンチマーク型ページ拡張（kwexp・2026-11-14〜）の新規記事を生成する。

記事ごとのデータ（scripts/kwexp-202611/<slug>.py の ARTICLE）から app/articles/<slug>/page.tsx を書く。
部品（パンくず・目次・表・FAQ・出典付き口コミ・公式ボタン・信頼性ブロック）は gen-kids-articles-202610.py と共通。
違い:
  - 口コミ節は任意（good_reviews が無い記事は口コミ節を出さない＝比較・メニュー一覧型）
  - ヘッダーは「監修」ではなく「編集」表記（当サイトに監修者はいない）
  - 公式リンクは提携なし前提（sponsored なし＋「広告ではありません」）。ASP の計測リンクは使わない
usage: python3 scripts/gen-kwexp-202611.py [slug ...]
"""
import importlib.util
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = Path(__file__).resolve().parent / "kwexp-202611"

_spec = importlib.util.spec_from_file_location("gk", Path(__file__).resolve().parent / "gen-kids-articles-202610.py")
gk = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(gk)

js = gk.js


def table(headers, rows, indent=8):
    pad = " " * indent
    out = [f"{pad}<ComparisonTable", f"{pad}  headers={{[{', '.join(js(h) for h in headers)}]}}", f"{pad}  rows={{["]
    for r in rows:
        out.append(f"{pad}    [{', '.join(js(str(c)) for c in r)}],")
    out.append(f"{pad}  ]}}")
    out.append(f"{pad}/>")
    return "\n".join(out)


def build(a):
    has_reviews = bool(a.get("good_reviews"))
    published = a["published"]
    pub_iso = f"{published}T00:00:00+09:00"
    y, m, d = published.split("-")
    pub_ja = f"{int(y)}年{int(m)}月{int(d)}日"
    sections = "const sections = [\n" + "".join(f"  {{ id: {js(i)}, label: {js(l)} }},\n" for i, l in a["toc"]) + "];"
    faq = "const faqData = [\n" + "".join(f"  {{ question: {js(q)}, answer: {js(ans)} }},\n" for q, ans in a["faq"]) + "];"
    helpers = gk.HELPERS.replace("__CATID__", a["cat_id"]).replace("__CAT__", a["cat"]).replace("__CRUMB__", a["crumb"])
    if not has_reviews:
        # SourcedReview は口コミ節の無い記事では使わない（未使用の関数・型を残さない）
        start = helpers.index("type SourcedReviewItem")
        end = helpers.index("function OfficialButton")
        helpers = helpers[:start] + helpers[end:]
    good_list = "".join(f"<li>{x}</li>" for x in a["good_points"])
    bad_list = "".join(f"<li>{x}</li>" for x in a["caution_points"])
    related = "\n".join(
        f'            <li><Link href="{h}" className="text-accent hover:text-accent-dark transition-colors">{t}</Link></li>'
        for h, t in a["related"]
    )
    comp = a["component"]
    reviews_ts = ""
    reviews_jsx = ""
    if has_reviews:
        reviews_ts = (
            "/* ---------- 口コミ（公開レビュー・投稿からの引用・原文ママ・出典明記） ---------- */\n\n"
            + gk.reviews_ts("goodReviewCategories", a["good_reviews"], False)
            + "\n\n"
            + gk.reviews_ts("badReviewCategories", a["bad_reviews"], True)
            + "\n"
        )
        reviews_jsx = f'''
        <SectionHeading id="good-reviews">{a["name"]}の良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">{a["good_intro"]}</p>
        {{goodReviewCategories.map((category) => (
          <div key={{category.title}} className="mb-6">
            <SubHeading>{{category.title}}</SubHeading>
            <div className="space-y-2">
              {{category.reviews.map((review, i) => (
                <SourcedReview key={{i}} review={{review}} tone="good" />
              ))}}
            </div>
          </div>
        ))}}

        <SectionHeading id="bad-reviews">{a["name"]}の悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">{a["bad_intro"]}</p>
        {{badReviewCategories.map((category) => (
          <div key={{category.title}} className="mb-6">
            <SubHeading>{{category.title}}</SubHeading>
            <div className="space-y-2 mb-3">
              {{category.reviews.map((review, i) => (
                <SourcedReview key={{i}} review={{review}} tone="bad" />
              ))}}
            </div>
            <div className="bg-cream rounded-lg p-3 text-sm leading-relaxed">
              <p className="font-bold text-xs text-warm-gray mb-1">編集部の補足</p>
              <p>{{category.comment}}</p>
            </div>
          </div>
        ))}}
'''
    point_labels = a.get("point_labels", ("◎ 良いと評価されやすい点", "△ 注意したい点"))
    official = a.get("official_url")
    official_const = f"const OFFICIAL_URL = {js(official)};\n" if official else ""
    cta_box = ""
    cta_bottom = ""
    if official:
        cta_box = f'''
          <a href={{OFFICIAL_URL}} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">{a["cta"]} →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>'''
        cta_bottom = f"\n        <OfficialButton>{a['cta']}</OfficialButton>\n"
    else:
        start = helpers.index("function OfficialButton")
        helpers = helpers[:start]
    src = f'''import type {{ Metadata }} from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  {js(a["title"])};
const ARTICLE_DESCRIPTION =
  {js(a["description"])};
const ARTICLE_URL = "https://takushoku-biyori.com/articles/{a["slug"]}/";
{official_const}
export const metadata: Metadata = {{
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: {js(a["keywords"])},
  alternates: {{ canonical: ARTICLE_URL }},
  openGraph: {{
    images: [{{ url: "/og-image.png", width: 1200, height: 630 }}],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "{pub_iso}",
    modifiedTime: "{pub_iso}",
    authors: ["宅食・栄養食編集部"],
  }},
}};

{faq}

{sections}
{helpers}
{reviews_ts}
export default function {comp}() {{
  const articleJsonLd = {{
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "{pub_iso}",
    dateModified: "{pub_iso}",
    author: {{ "@type": "Organization", name: "宅食・栄養食編集部" }},
    publisher: {{ "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" }},
    mainEntityOfPage: {{ "@type": "WebPage", "@id": ARTICLE_URL }},
  }};

  const faqJsonLd = {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({{
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {{ "@type": "Answer", text: faq.answer }},
    }})),
  }};

  const breadcrumbJsonLd = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {{ "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" }},
      {{ "@type": "ListItem", position: 2, name: {js(a["cat"])} }},
      {{ "@type": "ListItem", position: 3, name: {js(a["crumb"])} }},
    ],
  }};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(articleJsonLd) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(faqJsonLd) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbJsonLd) }}}} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">{a["cat"]}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{{ARTICLE_TITLE}}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="{published}">公開: {pub_ja}（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
{a["lead"]}
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">{a.get("summary_title", "この記事の要点")}</p>
          <p className="text-sm leading-relaxed mb-4">{a["summary_box"]}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">{point_labels[0]}</p>
              <ul className="space-y-1 list-disc list-inside">{good_list}</ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">{point_labels[1]}</p>
              <ul className="space-y-1 list-disc list-inside">{bad_list}</ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>{cta_box}
        </div>

        <TableOfContents />

{a["body_before_reviews"]}
{reviews_jsx}
{a.get("body_after_reviews", "")}

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {{faqData.map((faq, i) => (
            <FAQ key={{i}} question={{`Q${{i + 1}}. ${{faq.question}}`}} answer={{faq.answer}} />
          ))}}
        </div>

{a["summary"]}
{cta_bottom}
        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
{related}
          </ul>
        </div>
{gk.FOOTER}
      </article>
    </>
  );
}}
'''
    return src


def load(path):
    sys.path.insert(0, str(Path(__file__).resolve().parent))
    spec = importlib.util.spec_from_file_location(path.stem.replace("-", "_"), path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.ARTICLE


def main():
    only = set(sys.argv[1:])
    for p in sorted(DATA.glob("*.py")):
        a = load(p)
        if only and a["slug"] not in only:
            continue
        out = ROOT / "app" / "articles" / a["slug"] / "page.tsx"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(build(a), encoding="utf-8")
        print("wrote", out.relative_to(ROOT))


if __name__ == "__main__":
    main()
