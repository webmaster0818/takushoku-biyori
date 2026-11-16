import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ビビッドテーブル（Vivid TABLE）の口コミ・評判｜実食レビューの評価と、11月時点の注文できる11品・料金を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "食べチョク発の冷凍食「ビビッドテーブル（Vivid TABLE）」の口コミ・評判を、第三者の実食レビュー2本から出典付きで紹介します。あわせて2026年11月16日時点の公式の注文画面で注文できる11品（オリジナル1品・生産者商品10品）と、1品1,204〜1,301円の料金、送料込みの目安を整理しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/vividtable-kuchikomi/";
const OFFICIAL_URL = "https://vivid-table.com/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ビビッドテーブル 口コミ, Vivid TABLE 口コミ, ビビッドテーブル 評判, ビビッドテーブル まずい, ビビッドテーブル 料金, ビビッドテーブル メニュー, 食べチョク 冷凍食品",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-16T00:00:00+09:00",
    modifiedTime: "2026-11-16T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "ビビッドテーブルはまずいですか？", answer: "当サイトが確認した第三者の実食レビュー2本では、ハンバーグや牡蠣ごはんの味の評価が高く、「まずい」という評価は見当たりませんでした。ローストチキンのソースは「少し複雑すぎる印象」という感想がありました。" },
  { question: "ビビッドテーブルの料金はいくらですか？", answer: "2026年11月16日時点の公式の注文画面では、6食セットが1品1,301円、12食セットが1品1,204円（税込）、送料は990円です。送料込みの1品あたりは約1,287〜1,466円です（当サイト計算）。" },
  { question: "いま注文できるメニューは何ですか？", answer: "11月16日時点の注文画面には11品があり、オリジナル商品は「セリ香る旨み出汁の牡蠣ごはん」、ほかの10品は食べチョクの生産者商品（唐揚げ・ハンバーグ・丼の具・焼売など）です。" },
  { question: "1回だけ注文できますか？", answer: "定期便のみですが、回数の縛りはなく、1度受け取った後に解約しても違約金はかかりません。お届け日の6日前までにマイページから解約します。" },
  { question: "北海道・沖縄にも届きますか？", answer: "届きますが、送料が別途かかります。一部の離島は配送地域外です。" },
];

const sections = [
  { id: "about", label: "ビビッドテーブルとは：料金と仕組み" },
  { id: "lineup", label: "11月16日時点で注文できる11品" },
  { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
  { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
  { id: "note", label: "口コミを読むときの注意：レビューされたメニューの多くは現在の注文画面にない" },
  { id: "cancel", label: "解約・スキップの条件" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">ホーム</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ビビッドテーブルの口コミ・評判</span>
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

/* ---------- 口コミ（公開レビュー・投稿からの引用・原文ママ・出典明記） ---------- */

const goodReviewCategories: { title: string; reviews: SourcedReviewItem[] }[] = [
  {
    title: "ハンバーグの評価が高い",
    reviews: [
      { text: "ハンバーグは肉感がありながらジューシーで、肉と脂のバランスがとてもよく感じました。", sourceName: "プロの宅食さがし（2026年10月22日の記事）", sourceUrl: "https://meal-navi.com/vivid-table-review/" },
      { text: "個人的には今まで食べた宅配食のハンバーグの中で一番おいしいと感じました。", sourceName: "プロの宅食さがし（2026年10月22日の記事）", sourceUrl: "https://meal-navi.com/vivid-table-review/" },
      { text: "重すぎずヘルシーだけど満足感もしっかり得られる、バランスの取れた一皿", meta: "野菜たっぷりデミグラスハンバーグの感想", sourceName: "宅食ノート（2025年2月時点の情報の記事）", sourceUrl: "https://takushoku.soraclock.net/vivid_table_review/" },
    ],
  },
  {
    title: "素材の味が生きている",
    reviews: [
      { text: "そんな私でも、この牡蠣はおいしくいただけました。", meta: "セリ香る旨み出汁の牡蠣ごはんの感想", sourceName: "プロの宅食さがし（2026年10月22日の記事）", sourceUrl: "https://meal-navi.com/vivid-table-review/" },
      { text: "シンプルながらも素材の美味しさを最大限に活かした、満足感のある一皿", meta: "チキンステーキポモドーロソースの感想", sourceName: "宅食ノート（2025年2月時点の情報の記事）", sourceUrl: "https://takushoku.soraclock.net/vivid_table_review/" },
    ],
  },
  {
    title: "国産食材・生産者がわかる",
    reviews: [
      { text: "主要な食材は、生産者の名前や産地まで確認できます。どこで作られた食材なのかがわかるので、安心して食べられます。", sourceName: "プロの宅食さがし（2026年10月22日の記事）", sourceUrl: "https://meal-navi.com/vivid-table-review/" },
    ],
  },
];

const badReviewCategories: { title: string; reviews: SourcedReviewItem[]; comment: string }[] = [
  {
    title: "価格が高い",
    reviews: [
      { text: "価格が1食あたり1,000円以上で、一般的な冷凍宅配弁当と比べると高いので、価格を抑えたい人には向いていません。", sourceName: "プロの宅食さがし（2026年10月22日の記事）", sourceUrl: "https://meal-navi.com/vivid-table-review/" },
      { text: "ビビッドテーブルの料金は、外食よりは安価ですが、自炊と比較するとやや割高感が否めません。", sourceName: "宅食ノート（2025年2月時点の情報の記事）", sourceUrl: "https://takushoku.soraclock.net/vivid_table_review/" },
    ],
    comment: "11月16日時点の公式価格は1品1,204〜1,301円（税込）で、送料990円を含めると1品あたり約1,287〜1,466円です（当サイト計算）。12食セットのほうが1品あたり約180円安くなります。",
  },
  {
    title: "メニューが少ない",
    reviews: [
      { text: "選べる料理が3種類しかないため、毎日のように利用するには向いていません。", sourceName: "プロの宅食さがし（2026年10月22日の記事）", sourceUrl: "https://meal-navi.com/vivid-table-review/" },
    ],
    comment: "11月16日時点の注文画面には11品が並んでいますが、オリジナル商品は牡蠣ごはんの1品で、ほかは食べチョクの生産者商品です。",
  },
  {
    title: "味の好みが分かれるメニューもある",
    reviews: [
      { text: "ソースそのものは味わい深く、ひとつひとつの風味は感じられるのですが、全体としては少し複雑すぎる印象でした。", meta: "爽やか柑橘で仕上げたローストチキンの感想", sourceName: "プロの宅食さがし（2026年10月22日の記事）", sourceUrl: "https://meal-navi.com/vivid-table-review/" },
    ],
    comment: "このメニューは11月16日時点の公式の注文画面には掲載されていません。",
  },
  {
    title: "お皿を洗う必要がある",
    reviews: [
      { text: "ビビッドテーブルはお皿に移し替えてから温めるので、どうしても食べ終えた後にお皿を洗う必要があります。", sourceName: "宅食ノート（2025年2月時点の情報の記事）", sourceUrl: "https://takushoku.soraclock.net/vivid_table_review/" },
    ],
    comment: "公式の食べ方も「外袋からお皿に取り出す→電子レンジで加熱→袋から取り出して盛り付け」です。容器のまま食べる冷凍弁当とは使い方が異なります。",
  },
];

export default function VividtableKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-16T00:00:00+09:00",
    dateModified: "2026-11-16T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: { "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      { "@type": "ListItem", position: 3, name: "ビビッドテーブルの口コミ・評判" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-16">公開: 2026年11月16日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ビビッドテーブル（Vivid TABLE）は、産直通販サイト「食べチョク」を運営する株式会社ビビッドガーデンの冷凍食の定期便です。国産食材を使い、ミシュラン掲載店「LA BONNE TABLE」の中村和成シェフが監修したオリジナル商品と、食べチョクの生産者の冷凍商品を、6食・12食のセットで届けます。
          </p>
          <p className="mb-3">
            この記事では、公式サイトのお知らせで紹介されている<strong>第三者の実食レビュー2本</strong>から良い評価・気になる評価を原文のまま引用し、2026年11月16日に公式の注文画面で確認した<strong>現在注文できる商品と料金</strong>をあわせて整理しました。口コミで評価されているメニューと、いま注文できるメニューが大きく違う点にも触れています。
          </p>
          <p>本記事の口コミは第三者のレビュー記事からの引用で、当サイトの試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ビビッドテーブルの口コミ・評判の要点</p>
          <p className="text-sm leading-relaxed mb-4">実食レビューでは「ハンバーグは宅配食で一番おいしい」「牡蠣ごはんの牡蠣がおいしい」など味の評価が高く、気になる点は「1食1,000円を超える価格」「メニューが少ない」でした。ただし、レビューで評価されたデミグラスハンバーグやローストチキンは、11月16日時点の公式の注文画面にはありません。現在注文できるのはオリジナルの牡蠣ごはん1品と、食べチョク生産者商品10品の計11品で、1品1,301円（6食セット）・1,204円（12食セット）、送料990円です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>国産食材・シェフ監修の味の評価が高い</li><li>回数の縛りがなく、1回で解約しても違約金なし</li><li>主要な食材の生産者・産地がわかる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1品1,204〜1,301円＋送料990円と高め</li><li>オリジナル商品は現在1品のみ</li><li>お皿に移して温めるので洗い物が出る</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ビビッドテーブル 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ビビッドテーブルとは：料金と仕組み</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内（2026年11月16日確認）"]}
          rows={[
            ["運営", "株式会社ビビッドガーデン（食べチョク）"],
            ["購入方法", "定期便のみ（1食だけの購入は不可・6食分からの定期購入プラン）"],
            ["セットと価格", "6食セット：1品1,301円（税込）／12食セット：1品1,204円（税込）"],
            ["送料", "全国一律990円（税込）。北海道・沖縄は別途。一部の離島は配送地域外"],
            ["配送頻度", "月1〜4回から選択"],
            ["回数の縛り", "なし（1度受け取った後の解約も違約金なし）"],
            ["食べ方", "冷凍のまま外袋からお皿に出して電子レンジで加熱し、袋から取り出して盛り付ける"],
            ["パッケージ", "1食分 横幅17cm×高さ27cm×奥行き4.4cm"],
            ["支払い", "クレジットカード（VISA・Mastercard・American Express・JCB・Diners Club）、d払い、ソフトバンクまとめて支払い"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://vivid-table.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ビビッドテーブル 公式トップ（料金体系・よくある質問）</a>・<a href="https://vivid-table.com/shop/sets/42" target="_blank" rel="noopener noreferrer" className="text-accent underline">6食セットの注文画面</a>・<a href="https://vivid-table.com/shop/sets/43" target="_blank" rel="noopener noreferrer" className="text-accent underline">12食セットの注文画面</a>・<a href="https://vivid-table.com/shop/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>（2026年11月16日確認）</p>
        <ComparisonTable
          headers={["セット", "商品代（1品×品数・税込）", "送料", "合計", "1品あたり（送料込み）"]}
          rows={[
            ["6食セット", "1,301円×6＝7,806円", "990円", "8,796円", "約1,466円"],
            ["12食セット", "1,204円×12＝14,448円", "990円", "15,438円", "約1,287円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式の注文画面の1品あたりの価格に、セットの食数を掛けて送料を足した当サイトの計算です（北海道・沖縄を除く）。初回の割引について、第三者の記事には「初回10％OFF」とありますが、当サイトが確認した公式ページの本文には記載がなかったため、この表には反映していません。</p>
        <SectionHeading id="lineup">11月16日時点で注文できる11品</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式の6食セット・12食セットの注文画面には、同じ11品が並んでいました。オリジナル商品は1品で、残りの10品は食べチョクの生産者の商品です。</p>
        <ComparisonTable
          headers={["商品名（公式の表記）", "区分", "内容量", "栄養成分（100gあたり・公式の表示）"]}
          rows={[
            ["セリ香る旨み出汁の牡蠣ごはん", "Vivid TABLEオリジナル", "250g", "116kcal・たんぱく質3.6g・食塩相当量0.9g"],
            ["みつせ蓮根かさね揚げ（あおさ入・189g×2パック）", "食べチョク生産者商品", "189g（7個入り）×2", "207kcal・たんぱく質10.3g・食塩相当量1.1g（推定値）"],
            ["みつせ鶏塩こうじ唐揚げ（200g×2パック）", "食べチョク生産者商品", "200g×2", "207kcal・たんぱく質16.6g・食塩相当量1.4g（推定値）"],
            ["国分牛ハンバーグ（トマトソース）", "食べチョク生産者商品", "140g（固形量100g）", "297kcal・たんぱく質9.5g・食塩相当量1.0g（推定値）"],
            ["きらほ玄米おにぎり（1パック5個入）", "食べチョク生産者商品", "5個入", "−"],
            ["玄米ベーグル プレーン（3個セット）", "食べチョク生産者商品", "3個", "−"],
            ["元気豚 大粒肉焼売 300g（50g×6個入）", "食べチョク生産者商品", "300g", "−"],
            ["元気豚 バラ生姜焼丼の具（1P2食入り）", "食べチョク生産者商品", "1パック2食入り", "−"],
            ["元気豚 焼肉丼の具（1P2食入り）", "食べチョク生産者商品", "1パック2食入り", "−"],
            ["元気豚 豚丼の具（1P2食入り）", "食べチョク生産者商品", "1パック2食入り", "−"],
            ["真鯛のカルパッチョ【Firesh】約100g", "食べチョク生産者商品", "約100g", "−"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://vivid-table.com/shop/sets/42" target="_blank" rel="noopener noreferrer" className="text-accent underline">ビビッドテーブル 6食セットの注文画面</a>・<a href="https://vivid-table.com/shop/sets/43" target="_blank" rel="noopener noreferrer" className="text-accent underline">12食セットの注文画面</a>（2026年11月16日確認）。栄養成分は商品説明に記載のある4品のみ掲載し、記載のない商品は「−」としています。商品は入れ替わることがあります。</p>
        <p className="text-sm mb-6 leading-relaxed">生産者商品には「丼の具（1パック2食入り）」「玄米おにぎり（5個入）」など、1品に複数食分が入るものがあります。1品あたりの価格だけで比べず、内容量も見て選ぶと割高感を避けやすくなります。</p>

        <SectionHeading id="good-reviews">ビビッドテーブルの良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式サイトのお知らせで紹介されている第三者の実食レビュー2本から、原文のまま引用しています（2026年11月16日に各ページで原文を確認）。</p>
        {goodReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="good" />
              ))}
            </div>
          </div>
        ))}

        <SectionHeading id="bad-reviews">ビビッドテーブルの悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">気になる点も出典付きで掲載しています。申し込む前に確認しておきたい点です。</p>
        {badReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="bad" />
              ))}
            </div>
            <div className="bg-cream rounded-lg p-3 text-sm leading-relaxed">
              <p className="font-bold text-xs text-warm-gray mb-1">編集部の補足</p>
              <p>{category.comment}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="note">口コミを読むときの注意：レビューされたメニューの多くは現在の注文画面にない</SectionHeading>
        <ComparisonTable
          headers={["レビューされたメニュー", "レビュー", "11月16日の公式の注文画面"]}
          rows={[
            ["野菜たっぷりデミグラスハンバーグ", "プロの宅食さがし・宅食ノート", "掲載なし（生産者商品の「国分牛ハンバーグ（トマトソース）」は別の商品）"],
            ["爽やか柑橘で仕上げたローストチキン", "プロの宅食さがし", "掲載なし"],
            ["チキンステーキポモドーロソース", "宅食ノート", "掲載なし"],
            ["豚バラと季節野菜のパピヨット", "宅食ノート（メニュー紹介のみ）", "掲載なし"],
            ["セリ香る旨み出汁の牡蠣ごはん", "プロの宅食さがし", "掲載あり（オリジナル商品）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://meal-navi.com/vivid-table-review/" target="_blank" rel="noopener noreferrer" className="text-accent underline">プロの宅食さがし（2026年10月22日の記事）</a>・<a href="https://takushoku.soraclock.net/vivid_table_review/" target="_blank" rel="noopener noreferrer" className="text-accent underline">宅食ノート（2025年2月時点の情報の記事）</a>の掲載メニューと、<a href="https://vivid-table.com/shop/sets/42" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式の注文画面</a>（2026年11月16日確認）を当サイトが照合</p>
        <p className="text-sm mb-6 leading-relaxed">口コミで特に評価の高いハンバーグは、現在の注文画面にはありません。<strong>いま注文できる商品で口コミが確認できたのは牡蠣ごはんだけ</strong>です。生産者商品については、まとまった実食レビューを確認できませんでした。申し込む前に、公式の注文画面で現在の商品を確かめてください。</p>
        <SectionHeading id="cancel">解約・スキップの条件</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>購入の回数・期間の制約はなく、1度受け取った後に解約しても違約金はかかりません</li><li>解約はマイページの「定期注文を解約する」から。お届け日の6日前までに手続きが完了していれば、次回の注文もかかりません</li><li>締切を過ぎた場合は、その回のお届け後の解約になります</li><li>お届けパス（スキップ）はお届け日の6日前までマイページから。パスした回はすべての商品が届きません</li><li>プランの変更は、現在のコースを停止して新しいプランを契約する形です</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://vivid-table.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ビビッドテーブル 公式トップのよくある質問</a>・<a href="https://vivid-table.com/shop/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>（2026年11月16日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">国産食材やシェフ監修の宅配食をほかと比べる場合は、<Link href="/articles/mutenka-takuhai-bento/" className="text-accent underline">無添加の宅配弁当の比較</Link>や<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>が参考になります。</p>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ビビッドテーブルは、第三者の実食レビューで味の評価が高い一方、1品1,000円を超える価格とメニューの少なさが気になる点として挙げられています。11月16日時点では、オリジナル商品は牡蠣ごはんの1品で、レビューで評価されたハンバーグなどは注文画面にありません。回数の縛りはないので、現在の商品を確認したうえで、まず6食セットで試す使い方が考えられます。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・商品は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>ビビッドテーブル 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mutenka-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">無添加の宅配弁当・冷凍宅食を公式の表記で比較</Link></li>
            <li><Link href="/articles/green-spoon-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">GREEN SPOONの口コミ・評判</Link></li>
            <li><Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark transition-colors">宅配弁当のお試しセットまとめ</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（試食にもとづくレビューは現在行っておらず、導入を準備しています）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
