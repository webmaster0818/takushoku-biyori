import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "MOGUMOGUいもの口コミ・評判は？赤ちゃん用歯固め干し芋の硬さ・対象月齢・購入先を出典付きで確認";
const ARTICLE_DESCRIPTION =
  "赤ちゃん用の歯固め干し芋「MOGUMOGUいも（もぐもぐいも）」の口コミ・評判を、楽天・Amazonのレビューと実際に与えた家庭の記事から出典付きで紹介します。九州産紅はるかのみ・添加物不使用、生後6ヵ月頃からという公式表示、価格と購入先、与えるときの注意点を2026年10月23日の公式情報で確認しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mogumoguimo-kuchikomi/";
const OFFICIAL_URL = "https://cart.hanna-saku.jp/shop/products/mogumoguimo-01";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "MOGUMOGUいも 口コミ, もぐもぐいも 評判, 歯固め 干し芋, 赤ちゃん 干し芋 何ヶ月から, 歯固め おやつ, 花菜 干し芋, ベビー 干し芋 紅はるか",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-10-23T00:00:00+09:00",
    modifiedTime: "2026-10-23T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "MOGUMOGUいもは何ヶ月から食べられますか？", answer: "パッケージと楽天の商品名は「生後6ヵ月から」です。公式Q&Aでは「歯固めとしてお使いいただく場合は、歯が生え始める6ヵ月頃を目安に」「おやつとしてお使いいただく場合は、離乳食後期〜離乳食完了期である1歳前後から」としています。公式の注記どおり月齢は目安で、つかみ食べができるようになってから、子どもの成長に合わせて始めてください（2026年10月23日確認）。" },
  { question: "なぜこんなに硬いのですか？", answer: "公式Q&Aは「やわらかすぎると赤ちゃんが噛み切ってしまう恐れがございます。わざと噛み切れない硬さにし、しゃぶることでさつまいもが溶け出し長く食べれるようにしております」と説明しています。柔らかい一般的な干し芋とは別物と考えてください。" },
  { question: "添加物は入っていますか？", answer: "原材料は「さつまいも（紅はるか）」のみで、公式は「砂糖などの調味料はもちろん、着色料などの添加物も不使用」としています。九州産の紅はるかを使用しています。" },
  { question: "どこで買えますか？", answer: "公式サイト（1袋799円）、公式の定期便「MOGUMOGUおやつ便」（月2,980円・送料込み・MOGUMOGUいも3つ＋国産おやつ3つ）、楽天とAmazonの公式ショップ「九州マルシェ」（運営は同じ株式会社花菜・楽天3袋1,790円〜・Amazon2袋1,280円〜）で購入できます（2026年10月23日確認）。" },
  { question: "与えるときに気をつけることは？", answer: "公式は「のどに詰まらせないよう与える時は目を離さず、様子を見ながら食べさせてください」としています。座った姿勢で、大人が必ずそばにいるときに与え、泣いている子をあやす目的では与えないでください（こども家庭庁）。口に入りきる大きさになったものは取り上げるのが安全です。" },
  { question: "大人が食べてもいいですか？", answer: "公式Q&Aは「もちろんです…ぜひお子さまに食べさせる際に、ご両親も一度食べてみてください」としています。表面の白い粉は「糖分が表面に出てきているだけですので、品質や味に問題ございません」とのことです。" },
];

const sections = [
  { id: "about", label: "MOGUMOGUいもとは？基本情報" },
  { id: "age", label: "何ヶ月から？公式の対象月齢" },
  { id: "price", label: "価格と購入先（公式・楽天・Amazon）" },
  { id: "good-reviews", label: "MOGUMOGUいもの良い口コミ・評判（出典付き）" },
  { id: "bad-reviews", label: "MOGUMOGUいもの悪い口コミ・評判（出典付き）" },
  { id: "safety", label: "与えるときの注意点（公的機関の指針）" },
  { id: "recommend", label: "向いている家庭・向いていない家庭" },
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
          <span className="text-foreground">MOGUMOGUいもの口コミ・評判</span>
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

/* ---------- 口コミ（公開レビューからの引用・原文ママ・出典明記） ---------- */

const goodReviewCategories: { title: string; reviews: SourcedReviewItem[] }[] = [
  {
    title: "長い時間しゃぶって夢中になる",
    reviews: [
      { text: "1歳過ぎの娘にあげたら1時間ずっと夢中で噛み噛みしてました。", meta: "Amazonレビュー・★5", sourceName: "Amazon MOGUMOGUいも 商品ページ", sourceUrl: "https://www.amazon.co.jp/dp/B0CP1J2NGT" },
      { text: "子供がずーっとおしゃぶり状態に食べてて とっても助かりました。", meta: "楽天レビュー・★5・2026年9月", sourceName: "楽天市場 九州マルシェ", sourceUrl: "https://item.rakuten.co.jp/kyushu-marche/mogumoguimo-03/" },
      { text: "9ヶ月次男も一生懸命カミカミしたりしゃぶったりして、溶かしながら1つ完食します♪", meta: "子どもに与えた家庭の記事", sourceName: "コソダテール", sourceUrl: "https://kosodateeell.com/mogumoguimo/" },
    ],
  },
  {
    title: "少しずつ柔らかくして食べられる・外出時に助かる",
    reviews: [
      { text: "美味しそうに吸って柔らかくして少しづつ噛んでました。", meta: "Amazonレビュー・★5", sourceName: "Amazon MOGUMOGUいも 商品ページ", sourceUrl: "https://www.amazon.co.jp/dp/B0CP1J2NGT" },
      { text: "移動中や外食中など大変助かってます。", meta: "楽天レビュー・★5・2025年11月", sourceName: "楽天市場 九州マルシェ", sourceUrl: "https://item.rakuten.co.jp/kyushu-marche/mogumoguimo-03/" },
    ],
  },
];

const badReviewCategories: { title: string; reviews: SourcedReviewItem[]; comment: string }[] = [
  {
    title: "硬すぎて食べない",
    reviews: [
      { text: "我が子(10か月)は全く食べてくれませんでした", meta: "楽天レビュー・★2・2026年8月", sourceName: "楽天市場 九州マルシェ", sourceUrl: "https://item.rakuten.co.jp/kyushu-marche/mogumoguimo-03/" },
      { text: "想像してる干し芋でなく、硬い歯固めです。", meta: "Amazonレビュー・★2", sourceName: "Amazon MOGUMOGUいも 商品ページ", sourceUrl: "https://www.amazon.co.jp/dp/B0CP1J2NGT" },
    ],
    comment: "硬さは公式が意図した仕様です（「わざと噛み切れない硬さにし、しゃぶることでさつまいもが溶け出し長く食べれるようにしております」公式Q&A）。柔らかい干し芋を想像して買うと期待と違います。合うかどうかは子どもによるため、楽天・Amazonの少量（2〜3袋）から試すのが無難です。",
  },
  {
    title: "角が鋭い・サイズが小さい",
    reviews: [
      { text: "乾燥した芋の角が結構鋭利です。歯茎や口腔内に傷がつく可能性も大いに考えられます。", meta: "Amazonレビュー・★4", sourceName: "Amazon MOGUMOGUいも 商品ページ", sourceUrl: "https://www.amazon.co.jp/dp/B0CP1J2NGT" },
    ],
    comment: "1枚の寸法・枚数は公式に記載がありません。子どもの手と口の大きさに合うかを最初に確かめ、口に入りきってしまう大きさのものは与えないようにしてください。",
  },
  {
    title: "開封後の保管",
    reviews: [
      { text: "開けた後の保管が難しい", meta: "楽天レビュー・★5・2026年8月", sourceName: "楽天市場 九州マルシェ", sourceUrl: "https://item.rakuten.co.jp/kyushu-marche/mogumoguimo-03/" },
    ],
    comment: "楽天の商品ページには「開封後は冷蔵庫にて保存してください」とあります。1袋30gと少量なので、開封後は早めに使い切る前提で考えるのが現実的です。",
  },
];

export default function MogumoguimoKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-10-23T00:00:00+09:00",
    dateModified: "2026-10-23T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "MOGUMOGUいもの口コミ・評判" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-sango.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-sango-m.webp)" }}>
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-10-23">公開: 2026年10月23日（公式サイトで確認）</time>
            <span>
              監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / 
              <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>
        </div>{/* /subhead */}

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            MOGUMOGUいも（もぐもぐいも）は、福岡の株式会社花菜が販売する<strong>赤ちゃん用の歯固め干し芋</strong>です。九州産の紅はるかだけを使い、<strong>わざと噛み切れない硬さ</strong>に仕上げて「しゃぶって溶かしながら食べる」ことを想定しています。
          </p>
          <p className="mb-3">
            この記事では、楽天・Amazonのレビューと、実際に子どもに与えた家庭の記事から<strong>良い口コミ・悪い口コミを出典付きで</strong>紹介し、公式の対象月齢・価格・購入先を2026年10月23日の確認値で整理しました。
          </p>
          <p>
            当サイトは宅配食の比較サイトですが、冷凍幼児食・離乳食とあわせて検討されることの多いベビーおやつとして取り上げています。当サイトでは実食・試用はしていません。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">この記事の要点</p>
          <p className="text-sm leading-relaxed mb-4">MOGUMOGUいもは、「硬くてなかなか噛み切れない」ことが特徴の干し芋です。口コミでは「長い時間しゃぶって集中してくれる」「外出中のぐずり対策に助かる」という評価が多い一方、「硬すぎて食べない」「角が鋭い」という声もあります。公式サイトのほか、楽天・Amazonの公式ショップ（九州マルシェ）や、毎月のおやつと一緒に届く公式の定期便「MOGUMOGUおやつ便」でも購入できます。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>九州産紅はるかのみ・砂糖や添加物は不使用（公式表記）</li><li>長時間しゃぶって過ごせるという声が多い</li><li>外出・移動中のおやつとして使いやすい</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>硬さが合わず食べない子もいる</li><li>角が鋭い・小さいと感じる声がある</li><li>与えるときは必ず大人がそばで見守る</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・在庫は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">MOGUMOGUいも 公式サイトで在庫・価格を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">MOGUMOGUいもとは？基本情報</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          公式の商品説明は「太陽の光をたくさん浴びて育った【九州産紅はるか】のみを使ったお子様用干し芋です。余計な甘さや保存料などの添加物は一切使わず」としています。一般的な干し芋とは違い、<strong>「わざと少し硬めに作っております。お子様が安易に噛みきれない設計」</strong>で、しゃぶることで歯固めにもなる、という位置づけです。
        </p>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["販売会社", "株式会社 花菜（福岡市中央区・健康食品の販売）"],
            ["原材料", "さつまいも（紅はるか）。九州産"],
            ["添加物", "砂糖などの調味料・着色料などの添加物は不使用（公式表記）"],
            ["内容量", "1袋30g"],
            ["規格・製造", "乳児用規格適用食品。JFS-B を取得した工場で製造（公式表記）"],
            ["保存", "開封後は冷蔵庫で保存（楽天の商品ページ）。賞味期限は5カ月以上あるものを発送（同）"],
            ["関連商品", "MOGUMOGUいもスティック（100g・1,380円）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: MOGUMOGUいも公式商品ページ・会社概要、楽天「九州マルシェ」の商品ページ（2026年10月23日確認）。製法について、公式の本文は「1枚1枚天日干し」、商品画像は「機械干しと天日干し両方を使い」と表記が分かれています。
        </p>

        <SectionHeading id="age">何ヶ月から？公式の対象月齢</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          パッケージと楽天の商品名は<strong>「生後6ヵ月から」</strong>です。ただし公式のQ&amp;Aでは、用途によって目安を分けています。
        </p>
        <div className="bg-cream rounded-lg p-4 mb-4 text-sm leading-relaxed">
          「歯固めとしてお使いいただく場合は、歯が生え始める6ヵ月頃を目安に…おやつとしてお使いいただく場合は、離乳食後期〜離乳食完了期である1歳前後からをおすすめしております。」
          <p className="text-xs text-warm-gray mt-2">出典: MOGUMOGUいも公式商品ページのQ&amp;A（2026年10月23日確認）</p>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          公式の注記には「つかみ食べができるようになったころが対象です」「表示している月齢は目安です。お子さまの成長に合わせてお召し上がりください」ともあります。<strong>「食べ物として与える」のは1歳前後から</strong>と読むのが、公式の説明に沿った使い方です。
        </p>

        <SectionHeading id="price">価格と購入先（公式・楽天・Amazon）</SectionHeading>
        <ComparisonTable
          headers={["購入先", "価格（税込）", "備考"]}
          rows={[
            ["公式サイト", "1袋 799円", "送料は1回330円（8,000円以上で無料・購入ガイド）"],
            ["公式 定期便「MOGUMOGUおやつ便」", "月2,980円・送料込み（MOGUMOGUいも3つ＋毎月変わる国産おやつ3つ）", "毎月25日まで変更可"],
            ["楽天（九州マルシェ・運営は花菜）", "3袋 1,790円／5袋 2,982円／10袋 4,720円／15袋 6,750円", "送料込み"],
            ["Amazon（【公式】九州マルシェ）", "2袋 1,280円／3袋 1,780円", "3袋は定期おトク便 1,691円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-4">
          ※2026年10月23日の各ページの表示です。価格・在庫は変動します。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          公式サイトの購入ガイドは「一回のご購入につき送料330円（税込）…8,000円（税込）以上の場合は、送料無料」としています（旧商品ページは「送料無料！」表記）。定期便は「次回お届け分のキャンセルやスキップなどの変更は毎月25日まで可能」（定期便ページ）です。支払いはクレジットカード・GMO後払い（手数料275円）・Amazon Pay・代金引換です。
        </p>
        <p className="text-sm mb-6 leading-relaxed">
          公式サイトの返品規定は「初回購入1袋分のみ、お客さま都合による商品の返品・返金を承っております」（到着後8日以内に電話・返送料は購入者負担）です。
        </p>
        <OfficialButton>MOGUMOGUいも 公式サイトを見る</OfficialButton>


        <SectionHeading id="good-reviews">MOGUMOGUいもの良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">楽天（3袋 4.26・151件／5袋 4.23・40件）とAmazon（3.5・376件）のレビュー、実際に子どもに与えた家庭の記事から、良い評判を出典付きで紹介します（2026年10月23日確認・引用は原文ママ）。</p>
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

        <SectionHeading id="bad-reviews">MOGUMOGUいもの悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">否定的な意見も出典付きで掲載しています。購入前にご確認いただきたい点です。</p>
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

        <SectionHeading id="safety">与えるときの注意点（公的機関の指針）</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          公式の注意書きは「お子さまに与える場合はのどに詰まらせないよう与える時は目を離さず、様子を見ながら食べさせてください」です。あわせて、乳幼児の窒息事故について公的機関が示している内容を紹介します。
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm leading-relaxed">
            「0から5歳までのこどもには…弾力性があり噛み切りにくい食材（いか・こんにゃくなど）は、窒息のリスクがあるため、使用を避けましょう。」「泣いているこどもをあやそうとして、食べ物を与えるのはやめましょう。」
            <p className="text-xs text-warm-gray mt-2">出典: <a href="https://www.cfa.go.jp/policies/child-safety-actions/handbook/content-1" target="_blank" rel="noopener noreferrer" className="underline">こども家庭庁「窒息・誤飲事故」</a></p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm leading-relaxed">
            誤嚥・窒息につながりやすい食べ物の例として「唾液を吸うもの → パン、ゆで卵、さつま芋 など」が挙げられています（保育施設向けのガイドライン）。
            <p className="text-xs text-warm-gray mt-2">出典: <a href="https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/03f45df9-97e1-4016-b0c3-8496712699a3/39b6fd36/20230607_policies_child-safety_effort_guideline_02.pdf" target="_blank" rel="noopener noreferrer" className="underline">こども家庭庁「教育・保育施設等における事故防止及び事故発生時の対応のためのガイドライン」</a></p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm leading-relaxed">
            「食べているときは、姿勢を良くし、食べることに集中させましょう。物を口に入れたままで、走ったり、笑ったり、泣いたり、声を出したりすると、誤って吸引し、窒息・誤嚥するリスクがあります。」
            <p className="text-xs text-warm-gray mt-2">出典: <a href="https://www.caa.go.jp/policies/policy/consumer_safety/caution/caution_047/" target="_blank" rel="noopener noreferrer" className="underline">消費者庁 子どもの事故に関する注意喚起</a></p>
          </div>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          これらは干し芋や歯固めを名指しした指針ではありませんが、<strong>座らせて、大人が目を離さない状態で与える</strong>こと、<strong>泣いているときのあやし目的では与えない</strong>ことは、口コミに多い「ぐずり対策」として使う場合にも当てはまります。歯の生え具合や食べ方に不安がある場合は、かかりつけの小児科・歯科で相談してから始めてください。
        </p>

        <SectionHeading id="recommend">向いている家庭・向いていない家庭</SectionHeading>
        <SubHeading>MOGUMOGUいもが向いている家庭</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            <li>✓ 原材料がさつまいもだけのおやつ・歯固めを探している</li>
            <li>✓ つかみ食べができるようになり、手に持てるおやつを増やしたい</li>
            <li>✓ 移動中や外食中に、座って過ごせるおやつがほしい（大人がそばで見守れる場面）</li>
          </ul>
        </div>
        <SubHeading>MOGUMOGUいもが向いていない家庭</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            <li>✗ 柔らかくてすぐ食べられる干し芋を探している（一般的なベビー用干し芋や蒸し芋のほうが合います）</li>
            <li>✗ 大人が目を離す時間（車の運転中など）に持たせたい</li>
            <li>✗ 食事そのもの（主食・おかず）の手間を減らしたい（冷凍幼児食の宅配が向いています）</li>
          </ul>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          食事の準備そのものを減らしたい場合は、1歳半からの冷凍幼児食<Link href="/articles/mogumo-kuchikomi/" className="text-accent hover:text-accent-dark underline">モグモの口コミ・評判</Link>や、手づかみ離乳食の<Link href="/articles/tedemogu-kuchikomi/" className="text-accent hover:text-accent-dark underline">TEDEMOGU（てでもぐ）の口コミ・評判</Link>もご覧ください。
        </p>


        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            MOGUMOGUいもは、<strong>さつまいもだけで作った、わざと硬い歯固め干し芋</strong>です。「1時間夢中でしゃぶっていた」「外出中に助かる」という声が多く、楽天では4点台の評価が付いています。一方で、硬さが合わずに食べない子や、角の鋭さを気にする声もあります。
          </p>
          <p>
            食べ物として与えるのは公式の目安どおり1歳前後から、座らせて大人が見守る状態で使うのが前提です。まず試すなら楽天・Amazonの公式ショップの少量パック、ほかの無添加おやつと一緒に続けるなら定期便「MOGUMOGUおやつ便」が選択肢になります。
          </p>
        </div>

        <OfficialButton>MOGUMOGUいも 公式サイトで在庫・価格を見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mogumogu-oyatsubin-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">MOGUMOGUおやつ便（おやつの定期便）の口コミ・評判</Link></li>
            <li><Link href="/articles/mogumo-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">モグモ（冷凍幼児食）の口コミ・評判</Link></li>
            <li><Link href="/articles/tedemogu-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">TEDEMOGU（てでもぐ）手づかみ離乳食の口コミ・評判</Link></li>
            <li><Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark transition-colors">産後におすすめの宅配弁当ランキング</Link></li>
            <li><Link href="/articles/mamano-kyushoku-reviews/" className="text-accent hover:text-accent-dark transition-colors">ママの休食の口コミ・評判</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
