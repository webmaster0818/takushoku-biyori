#!/usr/bin/env python3
"""幼児食・離乳食・ベビーおやつの新規記事（2026-10-23 MediaXAI「未掲載のものあれば作成して」）。

記事ごとのデータ（scripts/kids-articles/<slug>.py の ARTICLE）から app/articles/<slug>/page.tsx を生成する。
構成は kinnikushokudo-deli-kuchikomi（出典付き口コミ・3種 JSON-LD・信頼性ブロック）と同じ。
3社とも未提携のため、公式リンクは rel="noopener noreferrer"（sponsored なし）＋「広告ではありません」注記。
usage: python3 scripts/gen-kids-articles-202610.py [slug ...]
"""
import importlib.util
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = Path(__file__).resolve().parent / "kids-articles"


def js(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


HELPERS = r'''
function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">ホーム</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <Link href="/articles/#__CATID__" className="text-foreground/70 hover:text-accent transition-colors">__CAT__</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">__CRUMB__</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">
              {i + 1}. {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent/10">
            {headers.map((h) => (
              <th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-warm-border rounded-lg mb-3 group">
      <summary className="flex items-center justify-between p-4 font-medium text-sm hover:bg-cream/50 transition-colors">
        <span>{question}</span>
        <span className="faq-arrow text-warm-gray ml-2">&#9660;</span>
      </summary>
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">{answer}</div>
    </details>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

type SourcedReviewItem = { text: string; meta?: string; sourceName: string; sourceUrl: string };

function SourcedReview({ review, tone }: { review: SourcedReviewItem; tone: "good" | "bad" }) {
  return (
    <div className={`${tone === "good" ? "bg-green-50" : "bg-red-50"} rounded-lg p-3 text-sm leading-relaxed`}>
      <p className="mb-1.5">「{review.text}」{review.meta ? `（${review.meta}）` : ""}</p>
      <p className="text-xs text-warm-gray">
        出典:{" "}
        <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">{review.sourceName}</a>
      </p>
    </div>
  );
}

function OfficialButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 text-center">
      <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-[10px] text-gray-400 mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
    </div>
  );
}
'''

FOOTER = r'''
        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>
'''


def reviews_ts(name, cats, with_comment):
    out = [f"const {name}: {{ title: string; reviews: SourcedReviewItem[]{'; comment: string' if with_comment else ''} }}[] = ["]
    for c in cats:
        out.append("  {")
        out.append(f"    title: {js(c['title'])},")
        out.append("    reviews: [")
        for r in c["reviews"]:
            meta = f", meta: {js(r['meta'])}" if r.get("meta") else ""
            out.append(f"      {{ text: {js(r['text'])}{meta}, sourceName: {js(r['sourceName'])}, sourceUrl: {js(r['sourceUrl'])} }},")
        out.append("    ],")
        if with_comment:
            out.append(f"    comment: {js(c['comment'])},")
        out.append("  },")
    out.append("];")
    return "\n".join(out)


def build(a):
    published = a["published"]
    pub_iso = f"{published}T00:00:00+09:00"
    y, m, d = published.split("-")
    pub_ja = f"{int(y)}年{int(m)}月{int(d)}日"
    sections = "const sections = [\n" + "".join(f"  {{ id: {js(i)}, label: {js(l)} }},\n" for i, l in a["toc"]) + "];"
    faq = "const faqData = [\n" + "".join(f"  {{ question: {js(q)}, answer: {js(ans)} }},\n" for q, ans in a["faq"]) + "];"
    helpers = HELPERS.replace("__CATID__", a["cat_id"]).replace("__CAT__", a["cat"]).replace("__CRUMB__", a["crumb"])
    good_list = "".join(f"<li>{x}</li>" for x in a["good_points"])
    bad_list = "".join(f"<li>{x}</li>" for x in a["caution_points"])
    related = "\n".join(
        f'            <li><Link href="{h}" className="text-accent hover:text-accent-dark transition-colors">{t}</Link></li>'
        for h, t in a["related"]
    )
    comp = a["component"]
    capture_import = 'import ServiceCapture from "@/components/ServiceCapture";\n' if "<ServiceCapture" in a["body_before_reviews"] else ""
    src = f'''import type {{ Metadata }} from "next";
import Link from "next/link";
{capture_import}
const ARTICLE_TITLE =
  {js(a["title"])};
const ARTICLE_DESCRIPTION =
  {js(a["description"])};
const ARTICLE_URL = "https://takushoku-biyori.com/articles/{a["slug"]}/";
const OFFICIAL_URL = {js(a["official_url"])};

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
/* ---------- 口コミ（公開レビューからの引用・原文ママ・出典明記） ---------- */

{reviews_ts("goodReviewCategories", a["good_reviews"], False)}

{reviews_ts("badReviewCategories", a["bad_reviews"], True)}

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
              監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> /{" "}
              <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
{a["lead"]}
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">この記事の要点</p>
          <p className="text-sm leading-relaxed mb-4">{a["summary_box"]}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">{good_list}</ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">{bad_list}</ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・在庫は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={{OFFICIAL_URL}} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">{a["cta"]} →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

{a["body_before_reviews"]}

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
        <p className="text-sm mb-6 leading-relaxed">否定的な意見も出典付きで掲載しています。購入前にご確認いただきたい点です。</p>
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

{a["body_after_reviews"]}

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {{faqData.map((faq, i) => (
            <FAQ key={{i}} question={{`Q${{i + 1}}. ${{faq.question}}`}} answer={{faq.answer}} />
          ))}}
        </div>

{a["summary"]}

        <OfficialButton>{a["cta"]}</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
{related}
          </ul>
        </div>
{FOOTER}
      </article>
    </>
  );
}}
'''
    return src


def load(path):
    spec = importlib.util.spec_from_file_location(path.stem, path)
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
