import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "MOGUMOGUおやつ便の口コミ・評判は？子どものおやつ定期便の中身・料金・解約を公式で確認【2026年10月】";
const ARTICLE_DESCRIPTION =
  "子どものための無添加おやつ定期便「MOGUMOGUおやつ便（もぐもぐおやつ便）」の中身・料金・解約方法を、2026年10月23日の公式情報で確認しました。月2,980円（税込・送料込み）でMOGUMOGUいも3つと毎月変わる国産おやつ3つが届きます。口コミ・注意点・向いている家庭も出典付きで解説します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mogumogu-oyatsubin-kuchikomi/";
const OFFICIAL_URL = "https://cart.hanna-saku.jp/shop/products/mogumoguoyatsu-002_first";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "MOGUMOGUおやつ便 口コミ, もぐもぐおやつ便 評判, 子ども おやつ 定期便, 無添加 おやつ サブスク, 幼児 おやつ 定期便, MOGUMOGUいも 定期便",
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
  { question: "MOGUMOGUおやつ便の料金はいくらですか？", answer: "毎月2,980円（税込）で、送料は全国どこでも込みです。2回目以降も同じ金額です（2026年10月23日の公式商品ページ）。" },
  { question: "毎月何が届きますか？", answer: "MOGUMOGUいも（30g）3つと、毎月変わる国産のおやつ3つ、「今月の無添加おやつ紹介ブック」が届きます。過去には「ふっくりんこJAPON プレーン」（北海道）、「おこめボーノ ほうれん草」（香川県）、「玄米ぽん きなこ」（栃木県）が届いています。2回目からはMOGUMOGUいもをスティック（100g×1袋）に変更することもできます。" },
  { question: "届くおやつを選べますか？", answer: "選べません。公式は「お届け商品のご指定は致しかねます」とし、「一度届いた商品が、数ヶ月後再度届く場合がございます」としています。" },
  { question: "スキップや解約はいつまでにできますか？", answer: "公式商品ページは「1回目お届け以降、次回お届け分のキャンセルやスキップなどの変更は毎月25日まで可能」（25日が土日祝の場合は前営業日）としています。株式会社花菜の共通FAQには「解約は次回お届け予定日の10日前まで」とあり、ご購入ガイドでは定期コースの停止は電話で受け付けています。表記が分かれているため、早めに電話で確認するのが確実です。" },
  { question: "何歳から使えますか？", answer: "定期便ページに対象年齢の記載はありません。毎月入るMOGUMOGUいもは、公式Q&Aで歯固めとして6ヵ月頃、おやつとして1歳前後からが目安とされています。ほかの3品は商品ごとに表示を確認してください。" },
  { question: "アレルギーがあっても大丈夫ですか？", answer: "定期便ページには、毎月のおやつのアレルゲンを事前に案内するかの記載がありません。届いた商品の原材料表示を確認してから与え、心配な場合は購入前に販売元（株式会社花菜）へ問い合わせてください。" },
];

const sections = [
  { id: "about", label: "MOGUMOGUおやつ便とは？基本情報" },
  { id: "contents", label: "毎月届く中身（過去のお届け例）" },
  { id: "price", label: "料金・送料・締切・解約" },
  { id: "good-reviews", label: "MOGUMOGUおやつ便の良い口コミ・評判（出典付き）" },
  { id: "bad-reviews", label: "MOGUMOGUおやつ便の悪い口コミ・評判（出典付き）" },
  { id: "caution", label: "与えるときの注意点" },
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
          <span className="text-foreground">MOGUMOGUおやつ便の口コミ・評判</span>
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
    title: "毎月届くので選ぶ手間が省ける",
    reviews: [
      { text: "毎月送られてくるのが助かってます。どれも無添加で安心で食べさせられ、重宝しています。", meta: "公式サイト掲載の利用者の声・2025年3月", sourceName: "MOGUMOGUおやつ便 公式商品ページ", sourceUrl: "https://cart.hanna-saku.jp/shop/products/mogumoguoyatsu-002_first" },
    ],
  },
  {
    title: "毎月入るMOGUMOGUいもは「長く夢中で食べる」",
    reviews: [
      { text: "1歳過ぎの娘にあげたら1時間ずっと夢中で噛み噛みしてました。", meta: "MOGUMOGUいものAmazonレビュー・★5", sourceName: "Amazon MOGUMOGUいも 商品ページ", sourceUrl: "https://www.amazon.co.jp/dp/B0CP1J2NGT" },
      { text: "移動中や外食中など大変助かってます。", meta: "MOGUMOGUいもの楽天レビュー・★5", sourceName: "楽天市場 九州マルシェ", sourceUrl: "https://item.rakuten.co.jp/kyushu-marche/mogumoguimo-03/" },
    ],
  },
];

const badReviewCategories: { title: string; reviews: SourcedReviewItem[]; comment: string }[] = [
  {
    title: "おやつを選べない・同じものが届くことがある",
    reviews: [
      { text: "自分でおやつを細かく選べない", meta: "解説記事の注意点（利用体験ではありません）", sourceName: "たのたのごはん", sourceUrl: "https://tanotanogohan.com/mogumoguoyatsubin/" },
    ],
    comment: "公式も「お届け商品のご指定は致しかねます」「一度届いた商品が、数ヶ月後再度届く場合がございます」としています。好き嫌いがはっきりしている子や、食べられる食材が限られている子には向きにくい仕組みです。",
  },
  {
    title: "MOGUMOGUいもの硬さが合わない子もいる",
    reviews: [
      { text: "我が子(10か月)は全く食べてくれませんでした", meta: "MOGUMOGUいもの楽天レビュー・★2", sourceName: "楽天市場 九州マルシェ", sourceUrl: "https://item.rakuten.co.jp/kyushu-marche/mogumoguimo-03/" },
    ],
    comment: "MOGUMOGUいもは「わざと噛み切れない硬さ」に作られています（公式Q&A）。毎月3袋入るため、まずは楽天・Amazonの単品で子どもの反応を確かめてから定期便を始めると無駄がありません。",
  },
  {
    title: "市販のおやつより割高に感じる",
    reviews: [
      { text: "市販のお菓子より高く感じることもある", meta: "解説記事の注意点（利用体験ではありません）", sourceName: "たのたのごはん", sourceUrl: "https://tanotanogohan.com/mogumoguoyatsubin/" },
    ],
    comment: "1回2,980円で6点（＋紹介ブック）、送料込みです。無添加・国産のおやつを自分で探して取り寄せる手間と送料を考えると、その手間を省く費用と考える家庭向けの価格設定です。",
  },
];

export default function MogumoguOyatsubinKuchikomiPage() {
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
      { "@type": "ListItem", position: 3, name: "MOGUMOGUおやつ便の口コミ・評判" },
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
            MOGUMOGUおやつ便は、歯固め干し芋「MOGUMOGUいも」を販売する株式会社花菜（福岡市）の<strong>子ども向けおやつの定期便</strong>です。毎月、MOGUMOGUいも3つと、全国から選んだ国産の無添加おやつ3つが届きます。
          </p>
          <p className="mb-3">
            この記事では、料金・中身・締切・解約の方法を<strong>2026年10月23日に公式サイトで確認した内容</strong>で整理し、口コミと注意点を出典付きで紹介します。
          </p>
          <p>当サイトでは実食・試用はしていません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">この記事の要点</p>
          <p className="text-sm leading-relaxed mb-4">MOGUMOGUおやつ便は、月2,980円（税込・送料込み）で、さつまいもだけで作ったMOGUMOGUいも3つと、毎月変わる国産のおやつ3つが届く定期便です。公式サイトには「毎月送られてくるのが助かってます」「どれも無添加で安心」という声が掲載されています。おやつは選べないこと、変更・スキップの締切が毎月25日であることは事前に確認しておきたい点です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>保存料・着色料不使用の国産おやつを選ぶ手間が省ける</li><li>送料込み2,980円で毎月の金額が一定</li><li>3回ごとのお届けでプレゼントあり（公式）</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>届くおやつは選べない（同じ商品が再び届く場合あり）</li><li>変更・スキップの締切は毎月25日</li><li>アレルゲンの事前案内は公式に記載なし</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・在庫は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">MOGUMOGUおやつ便 公式サイトで内容を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">MOGUMOGUおやつ便とは？基本情報</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          公式サイトは「日本全国から厳選して集めた安心で無添加こだわりおやつを毎月お届けする定期便です」と紹介しています。売りにしているのは<strong>「国産」「保存料・着色料不使用」「毎月何が届くかお楽しみ」</strong>の3点です。
        </p>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["販売会社", "株式会社 花菜（福岡市中央区）"],
            ["料金", "毎月2,980円（税込）・全国送料込み。「次回以降もずーっと2,980円」"],
            ["1回の中身", "MOGUMOGUいも（30g）3つ＋毎月変わる国産おやつ3つ＋「今月の無添加おやつ紹介ブック」"],
            ["いもの変更", "2回目からはMOGUMOGUいもスティック（100g×1袋）への変更も可能"],
            ["特典", "3回ごとのお届けでプレゼント（無添加食品や日常で使えるグッズなど）"],
            ["お届け", "毎月初旬ごろ（毎月25日前後に翌月分を締め切り）"],
            ["おやつの指定", "不可（「お届け商品のご指定は致しかねます」）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: MOGUMOGUおやつ便の公式商品ページ（本文・商品説明画像・Q&amp;A、2026年10月23日確認）</p>

        <SectionHeading id="contents">毎月届く中身（過去のお届け例）</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          毎月入るのは、九州産の紅はるかだけで作った歯固め干し芋<Link href="/articles/mogumoguimo-kuchikomi/" className="text-accent underline">MOGUMOGUいも</Link>（30g×3袋）です。公式は「着色料・保存料無添加で製造」「原材料はさつまいものみ」としています。残りの3品は毎月入れ替わり、公式ページでは過去のお届け例として次のおやつが紹介されています。
        </p>
        <ComparisonTable
          headers={["過去のお届け例", "産地"]}
          rows={[
            ["ふっくりんこJAPON プレーン", "北海道"],
            ["おこめボーノ ほうれん草", "香川県"],
            ["玄米ぽん きなこ", "栃木県"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※公式商品ページの「過去のお届け内容」（2026年10月23日確認）。何月にどのおやつが届いたかの一覧は公開されていません。公式は「一度届いた商品が、数ヶ月後再度届く場合がございます」としています。
        </p>
        <OfficialButton>MOGUMOGUおやつ便 公式サイトを見る</OfficialButton>

        <SectionHeading id="price">料金・送料・締切・解約</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["料金", "1回2,980円（税込・送料込み）。2回目以降も同額"],
            ["注文の締切", "「原則として毎月25日前後に翌月のご注文を締め切らせていただき、翌月頭に発送予定」"],
            ["変更・スキップ・キャンセル", "「1回目お届け以降、次回お届け分のキャンセルやスキップなどの変更は毎月25日まで可能」（25日が土日祝の場合は前営業日）"],
            ["定期コース共通のルール", "解約は次回お届け予定日の10日前まで、お休みは最大で半年間（公式FAQ）。購入ガイドでは定期コースの停止は電話で受付"],
            ["2セット購入", "可能（公式Q&A）"],
            ["支払い", "クレジットカード・後払い（手数料275円）・Amazon Pay・代金引換（全商品共通）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: 公式商品ページ、株式会社花菜「よくある質問」「ご購入ガイド」（2026年10月23日確認）。締切は商品ページ（毎月25日）と共通FAQ（10日前）で表記が分かれているため、変更・解約は余裕をもって電話で確認するのが確実です。最低継続回数・解約金の記載は公式に見当たりませんでした。
        </p>


        <SectionHeading id="good-reviews">MOGUMOGUおやつ便の良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">この定期便そのものを実際に利用した第三者のブログ記事は、2026年10月23日時点で見つかりませんでした。公式サイトに掲載されている利用者の声と、毎月入るMOGUMOGUいもの購入者レビュー（楽天・Amazon）を、出典付きで紹介します（引用は原文ママ）。</p>
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

        <SectionHeading id="bad-reviews">MOGUMOGUおやつ便の悪い口コミ・評判（出典付き）</SectionHeading>
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

        <SectionHeading id="caution">与えるときの注意点</SectionHeading>
        <ul className="space-y-2 text-sm mb-4 list-disc list-inside leading-relaxed">
          <li>MOGUMOGUいもの目安は、公式Q&amp;Aで「歯固めとして…6ヵ月頃を目安に」「おやつとして…1歳前後から」です。毎月替わる3品の対象月齢は、届いた商品の表示をご確認ください。</li>
          <li>定期便ページには、毎月のおやつのアレルゲンを事前に案内するかどうかの記載がありません。食物アレルギーのある子は、届いた商品の原材料表示を必ず確認してから与えてください。</li>
          <li>こども家庭庁は、0〜5歳の子に「弾力性があり噛み切りにくい食材」を避けること、泣いている子をあやすために食べ物を与えないことを呼びかけています。干し芋やせんべいも、座らせて大人が見守る中で与えてください（詳しくは<Link href="/articles/mogumoguimo-kuchikomi/" className="text-accent underline">MOGUMOGUいもの記事</Link>の「与えるときの注意点」）。</li>
        </ul>

        <SectionHeading id="recommend">向いている家庭・向いていない家庭</SectionHeading>
        <SubHeading>MOGUMOGUおやつ便が向いている家庭</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            <li>✓ 保存料・着色料を使っていない国産のおやつを、自分で探す時間がない</li>
            <li>✓ MOGUMOGUいもを毎月使っていて、ほかのおやつも試してみたい</li>
            <li>✓ 何が届くか分からない「お楽しみ」を子どもと一緒に楽しめる</li>
          </ul>
        </div>
        <SubHeading>MOGUMOGUおやつ便が向いていない家庭</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            <li>✗ 食物アレルギーがあり、届く食品を事前に確認したい</li>
            <li>✗ 子どもの好きなおやつだけを選んで買いたい</li>
            <li>✗ MOGUMOGUいもの硬さが子どもに合わなかった</li>
          </ul>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          おやつではなく毎日の食事の手間を減らしたい場合は、<Link href="/articles/tedemogu-kuchikomi/" className="text-accent hover:text-accent-dark underline">手づかみ離乳食のTEDEMOGU</Link>や、1歳半からの<Link href="/articles/mogumo-kuchikomi/" className="text-accent hover:text-accent-dark underline">冷凍幼児食モグモ</Link>もご覧ください。
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
            MOGUMOGUおやつ便は、<strong>月2,980円（送料込み）で、MOGUMOGUいもと全国の国産無添加おやつが毎月届く定期便</strong>です。公式サイトには「毎月送られてくるのが助かってます」という声が掲載されており、おやつ選びの手間を省きたい家庭に向いています。
          </p>
          <p>
            おやつを選べないこと、アレルゲンの事前案内がないこと、締切が毎月25日であることは事前に確認しておきたい点です。MOGUMOGUいもの硬さが子どもに合うかを単品で確かめてから始めると、無駄なく続けられます。
          </p>
        </div>

        <OfficialButton>MOGUMOGUおやつ便 公式サイトで内容を見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mogumoguimo-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">MOGUMOGUいも（歯固め干し芋）の口コミ・評判</Link></li>
            <li><Link href="/articles/tedemogu-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">TEDEMOGU（てでもぐ）手づかみ離乳食の口コミ・評判</Link></li>
            <li><Link href="/articles/mogumo-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">モグモ（冷凍幼児食）の口コミ・評判</Link></li>
            <li><Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark transition-colors">産後におすすめの宅配弁当ランキング</Link></li>
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
