import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "FitDish（フィットディッシュ）の口コミ・評判｜味と量の声、12月17日からの新料金、解約の締切を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "大阪ガスの冷蔵パウチおかず定期便「FitDish（フィットディッシュ）」の口コミ・評判を、利用者のブログとX投稿から出典付きで紹介します。2026年12月17日注文分からの新料金（基本コース10パック5,750円〜）、送料込みの料金体系、休会・解約の締切（次回お届け日の10日〜2週間前）も公式で確認しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/fitdish-kuchikomi/";
const OFFICIAL_URL = "https://www.fitdish.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "フィットディッシュ 口コミ, FitDish 口コミ, フィットディッシュ 評判, FitDish 評判, フィットディッシュ まずい, フィットディッシュ 料金, フィットディッシュ 解約",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-14T00:00:00+09:00",
    modifiedTime: "2026-11-14T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "FitDishの料金はいくらですか？", answer: "送料込みで、基本コースは10パック4,850円（1パック485円）から、たんぱく質コースは14パック7,850円から（12月16日注文分まで）。12月17日注文分からは基本コース10パック5,750円・たんぱく質コース14パック9,170円などに改定されます。" },
  { question: "送料はかかりますか？", answer: "かかりません。公式FAQは「販売価格に含まれております。別途送料が必要となることはございません」としています。一部離島は配送対象外です。" },
  { question: "FitDishはまずいですか？", answer: "確認した範囲で「まずい」とする投稿は2件で、理由の記載が無いものと、温めずに食べた場合のものでした。ブログやXでは「優しい味」「おいしい」という声のほうが多く、不満は量の少なさとメニューを選べない点が目立ちました。" },
  { question: "冷凍ですか？冷蔵ですか？", answer: "冷蔵のパウチです（一部常温保存可能な商品を含む）。冷蔵庫で約1か月保存でき、お届け時の賞味期限が30日以上の商品が中心ですが、最短18日の場合もあると公式に記載されています。" },
  { question: "解約はいつまでにすればいいですか？", answer: "次回お届け日の10日〜2週間前までに、マイページで本人が手続きします。事務局では受け付けていません。締切を過ぎると次回分は確定し、次々回からの反映になります。回数の縛りと解約金はありません。" },
  { question: "メニューは選べますか？", answer: "選べません。初回のおまかせ診断（家族人数・好み・アレルギー・苦手な食材）をもとに自動で選ばれます。届いた商品はマイページで4段階評価でき、次回以降の選定に反映されます。" },
  { question: "初回の割引はありますか？", answer: "基本コースは初回申込みで1,000円OFF、たんぱく質コースは2,000円OFFのクーポンがあります。キャンペーンページのクーポンコードを申込画面で入力する方式で、FitDishを初めて利用する人に限られます。" },
];

const sections = [
  { id: "about", label: "FitDishとは？基本情報" },
  { id: "price", label: "料金（送料込み）と12月17日からの新料金" },
  { id: "good-reviews", label: "FitDishの良い口コミ・評判（出典付き）" },
  { id: "bad-reviews", label: "FitDishの悪い口コミ・評判（出典付き）" },
  { id: "mazui", label: "FitDishはまずい？味の評判" },
  { id: "cancel", label: "休会・解約の方法と締切" },
  { id: "recommend", label: "向いている人・向いていない人" },
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
          <span className="text-foreground">FitDishの口コミ・評判</span>
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
    title: "味がやさしく、おいしい",
    reviews: [
      { text: "コクや旨みのある優しい味で、コンセプト通りでした。", sourceName: "風前の灯日", sourceUrl: "https://www.fuuzenno.com/fitdish-review/" },
      { text: "パウチおかずとは思えないほど、予想以上においしくてびっくり", sourceName: "お気楽グルメノート", sourceUrl: "https://takuhaireitoubentou.com/fitdish-taste-review/" },
      { text: "FitDishはレトルトとは思えない美味しさでビックリでした✨", meta: "2025年1月28日の投稿", sourceName: "X（@lovebirdshino）", sourceUrl: "https://x.com/lovebirdshino/status/1884355354202628156" },
      { text: "しっかり味付けされている印象 / ちょっとお値段お高めなだけはあるね / 来月も続ける🎵", meta: "2025年12月2日の投稿", sourceName: "X（@DBYJOIyutYHzVAO）", sourceUrl: "https://x.com/DBYJOIyutYHzVAO/status/1995796551340556341" },
    ],
  },
  {
    title: "冷蔵・パウチで使いやすい",
    reviews: [
      { text: "冷凍じゃなくて日持ちする冷蔵で届くの神だし。", meta: "2025年6月6日の投稿", sourceName: "X（@akislog）", sourceUrl: "https://x.com/akislog/status/1930945661920489811" },
      { text: "メインと副菜両方届きどれも美味しい普段お肉料理しかしないからお魚が嬉しいレンチンで良いのが楽最高", meta: "2025年1月8日の投稿", sourceName: "X（@snosnomariko）", sourceUrl: "https://x.com/snosnomariko/status/1876896640029843475" },
      { text: "１月11日に到着して、一番短い賞味期限で2月19日、一番長くて3月21日でした。", sourceName: "hachiko85ライフ", sourceUrl: "https://hachiko85.com/fitdish/" },
    ],
  },
  {
    title: "家族で食べやすい・苦手を除ける",
    reviews: [
      { text: "骨なしなので、子どもたちもパクパク食べてくれました。", sourceName: "hachiko85ライフ", sourceUrl: "https://hachiko85.com/fitdish/" },
      { text: "特にマカロニサラダはドレッシングがさらりとしていて、市販のものよりとてもおいしく、家族にも好評でした。", sourceName: "風前の灯日", sourceUrl: "https://www.fuuzenno.com/fitdish-review/" },
      { text: "メニューはおまかせしか頼めないんやけど、嫌いなものは除いてもらえるからありがたい。", meta: "2025年8月17日の投稿", sourceName: "X（@Iam_naminami）", sourceUrl: "https://x.com/Iam_naminami/status/1956887975616462951" },
    ],
  },
];

const badReviewCategories: { title: string; reviews: SourcedReviewItem[]; comment: string }[] = [
  {
    title: "量が少ない",
    reviews: [
      { text: "上品な味で美味しいんだけどメインにするにはちょっと量が少ないような…結局自前でも副菜作らないとお腹いっぱいにならない", meta: "2024年1月18日の投稿", sourceName: "X（@Ax623D）", sourceUrl: "https://x.com/Ax623D/status/1747979245631184897" },
      { text: "わが家はみんなよく食べるので、特に主菜は少なく感じてしまいました。", sourceName: "風前の灯日", sourceUrl: "https://www.fuuzenno.com/fitdish-review/" },
    ],
    comment: "FitDishは1パックがおかず1品です。主菜だけでは足りない場合は、主菜と副菜を組み合わせる・パック数を増やすなどで調整することになります。",
  },
  {
    title: "メニューを自分で選べない",
    reviews: [
      { text: "fitdishだとおまかせ選択しか選べないせいで、小麦を避けることができない", meta: "2025年8月16日の投稿", sourceName: "X（@ServiceHyper）", sourceUrl: "https://x.com/ServiceHyper/status/1956787494122656003" },
    ],
    comment: "公式FAQも「メニューのセレクトはおまかせ診断を基に自動的に行います」としています。届いた商品は翌日からマイページで4段階評価でき、次回以降の選定に反映されます。",
  },
  {
    title: "締切を過ぎると止められない",
    reviews: [
      { text: "FitDish今月分止めなきゃとなったタイミングで既に発送止められない(来月分も)の辛い。。。", meta: "2025年10月17日の投稿", sourceName: "X（@kurenai_taka）", sourceUrl: "https://x.com/kurenai_taka/status/1979166048613220519" },
    ],
    comment: "休会・解約は次回お届け日の10日〜2週間前までにマイページで手続きします。締切を過ぎると次回分は確定し、次々回からの反映になります（下の「休会・解約の方法と締切」を参照）。",
  },
];

export default function FitdishKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-14T00:00:00+09:00",
    dateModified: "2026-11-14T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "FitDishの口コミ・評判" },
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
            <time dateTime="2026-11-14">公開: 2026年11月14日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            FitDish（フィットディッシュ）は、大阪瓦斯株式会社が運営する<strong>冷蔵パウチのおかずの定期便</strong>です。冷凍弁当ではなく、冷蔵庫で約1か月保存できるパウチのおかずが月1回まとめて届き、電子レンジで約1分温めて食べられます。
          </p>
          <p className="mb-3">
            この記事では、利用者のブログとX（旧Twitter）の投稿から<strong>良い口コミ・悪い口コミを出典付きで</strong>紹介し、料金・送料・解約の締切を2026年11月14日に公式サイトで確認した値で整理しました。2026年12月17日の注文分から料金が改定されるため、新旧の料金を並べています。
          </p>
          <p>当サイトでは実食・試用はしていません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">この記事の要点</p>
          <p className="text-sm leading-relaxed mb-4">口コミでは「優しい味でおいしい」「冷凍ではなく冷蔵で届くのが便利」「骨なしで子どもも食べやすい」という声が多く、気になる点としては「量が少ない」「メニューを自分で選べない」が挙がっています。料金は送料込みで、基本コースは10パック4,850円（12月17日注文分から5,750円）からです。回数の縛りと解約金はありません。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>優しい味でおいしいという声が多い</li><li>冷蔵で届き、冷凍庫を使わない（約1か月保存）</li><li>送料込みの料金・回数縛りと解約金なし</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1パックの量が少ないという声がある</li><li>メニューは選べない（おまかせ診断で自動）</li><li>12月17日注文分から値上げ</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">FitDish 公式サイトで最新の料金を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">FitDishとは？基本情報</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "大阪瓦斯株式会社（FitDish事務局 0120-609-048・9:00〜18:00）"],
            ["商品", "冷蔵パウチのおかず（一部常温保存可能な商品を含む）"],
            ["コース", "基本コース（主菜・副菜／約100種類から）・たんぱく質コース（主菜のみ／たんぱく質量の多い約50種類から）"],
            ["メニューの選び方", "初回の「おまかせ診断」（家族人数・好み・アレルギー・苦手な食材）をもとに自動で選定。自分では選べない"],
            ["保存", "冷蔵庫で約1か月（お届け時の賞味期限が30日以上の商品が中心・最短18日の場合あり）"],
            ["温め", "電子レンジで約1分（商品により湯煎・温め不要のものもあり）"],
            ["お届け", "4週間ごとが目安・ヤマト運輸のクール宅急便・手渡しのみ（宅配ボックス不可）"],
            ["初回到着", "サービス登録完了後10日〜20日"],
            ["支払い", "クレジットカード・Amazon Pay・キャリア決済"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.fitdish.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">FitDish公式トップ</a>・<a href="https://www.fitdish.jp/ask/" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>・<a href="https://www.fitdish.jp/static/specificTransactionsLaw.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月14日確認）。商品の種類は、2026年10月のお知らせで「約40品から約100品（2026年10月現在）に拡充」と案内されています。</p>
        <p className="text-sm mb-6 leading-relaxed">冷凍の宅食とちがい、届いたパウチを冷蔵庫に入れておけるのが特徴です。アレルギーや苦手な食材は診断で登録でき、その食材を含む商品は除いて選ばれます。ただし利用規約には、アレルゲンとなる食材を完全に排除したものではない旨の記載があります。</p>
        <SectionHeading id="price">料金（送料込み）と12月17日からの新料金</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">FitDishの料金は<strong>すべて消費税・送料込み</strong>です（一部離島は配送対象外）。2026年10月28日のお知らせで、<strong>12月17日以降の注文分から価格を改定</strong>すると発表されています。</p>
        <SubHeading>基本コース（主菜・副菜・10〜40パック）</SubHeading>
        <ComparisonTable
          headers={["パック数", "現行（12月16日注文分まで）", "1パック", "新料金（12月17日注文分から）", "1パック"]}
          rows={[
            ["10パック", "4,850円", "485円", "5,750円", "575円"],
            ["15パック", "6,750円", "450円", "7,950円", "530円"],
            ["20パック", "8,400円", "420円", "9,900円", "495円"],
            ["25パック", "10,250円", "410円", "12,250円", "490円"],
            ["30パック", "12,150円", "405円", "14,550円", "485円"],
            ["35パック", "14,000円", "400円", "16,800円", "480円"],
            ["40パック", "15,800円", "395円", "18,960円", "474円"],
          ]}
        />
        <SubHeading>たんぱく質コース（主菜のみ・14〜56パック）</SubHeading>
        <ComparisonTable
          headers={["パック数", "現行（12月16日注文分まで）", "1パック", "新料金（12月17日注文分から）", "1パック"]}
          rows={[
            ["14パック", "7,850円", "561円", "9,170円", "655円"],
            ["28パック", "14,000円", "500円", "16,800円", "600円"],
            ["42パック", "20,000円", "477円", "23,940円", "570円"],
            ["56パック", "25,900円", "463円", "29,960円", "535円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.fitdish.jp/news/b4e601835d598bd583889bb5ea7aaa1ad075a271.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">FitDish「価格改定のお知らせ」（2026年10月28日）</a>・<a href="https://www.fitdish.jp/ask/cat-107.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>（2026年11月14日確認）。1パックあたりは公式の表示（小数点以下切り上げ）。「注文日」は初回申込日・直前のお届け日の翌日・休会からの再開日・コースやパック数の変更日のいずれかです。</p>
        <p className="text-sm mb-6 leading-relaxed">12月16日までに新規で申し込んだ場合、<strong>初回のお届けは現行価格、2回目以降は新料金</strong>になります。12月17日以降の申込みは初回から新料金です。</p>
        <SubHeading>初回特典</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>基本コース: 初回申込みで1,000円OFF（現行価格で10パック3,850円・20パック7,400円など）</li><li>たんぱく質コース: 初回申込みで2,000円OFF（現行価格で14パック5,850円など）</li><li>条件: キャンペーンページのクーポンコードを申込画面で入力・1回のみ・他のクーポンと併用不可・FitDishを初めて利用する人に限る</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.fitdish.jp/static/campaign-basic.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">基本コースのキャンペーンページ</a>・<a href="https://www.fitdish.jp/static/campaign-protein.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">たんぱく質コースのキャンペーンページ</a>（2026年11月14日確認）。新料金に特典を適用した額は、公式に記載がありませんでした。</p>
        <p className="text-sm mb-6 leading-relaxed">冷凍の宅配弁当は「主菜＋副菜」で1食のことが多い一方、FitDishは<strong>1パック＝おかず1品</strong>です。主菜と副菜を1つずつ組み合わせると、現行の基本コース20パック（1パック420円）で1食あたり約840円の計算になります（当サイト計算）。冷凍宅食の料金と比べる場合は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>もご覧ください。</p>
        <OfficialButton>FitDish 公式サイトで料金を確認する</OfficialButton>

        <SectionHeading id="good-reviews">FitDishの良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">利用者の個人ブログとXの投稿から、原文のまま引用しています（2026年11月14日に各ページで原文を確認）。</p>
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

        <SectionHeading id="bad-reviews">FitDishの悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">否定的な意見も出典付きで掲載しています。申し込む前に確認しておきたい点です。</p>
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

        <SectionHeading id="mazui">FitDishはまずい？味の評判</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">確認した範囲で「まずい」という言葉を使った投稿は2件でした。1件は理由が書かれていない投稿、もう1件は「温めずに食べた場合」に限った言い方です。</p>
        <ComparisonTable
          headers={["投稿・記事", "内容（原文）", "読み取れること"]}
          rows={[
            ["X（@Meeeeeeee86）2025年2月20日", "フィットディッシュまじでまずいから覚悟した方がいい", "理由の記載なし"],
            ["X（@yakiu_tanoshi）2024年3月4日", "肉の油多いやつは温めないと不味いけど、魚は冷たいままでも全然食える", "温めずに食べた場合の話。投稿者は利用を続けている"],
            ["X（@noalisky）2024年1月30日", "鯖味噌と副菜は美味しかったけど、あと2種は正直そんなにだったな…。カレークリーム煮は味が薄すぎて、塩胡椒足した😇", "商品による好みの差"],
            ["お気楽グルメノート", "それがFitDish（フィットディッシュ）の冷蔵パウチおかずは、ハズレと思うものがなかったです。", "肯定的な実食レビュー"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://x.com/Meeeeeeee86/status/1892449023162012013" target="_blank" rel="noopener noreferrer" className="text-accent underline">X @Meeeeeeee86</a>・<a href="https://x.com/yakiu_tanoshi/status/1764618943132819943" target="_blank" rel="noopener noreferrer" className="text-accent underline">X @yakiu_tanoshi</a>・<a href="https://x.com/noalisky/status/1752183534624903249" target="_blank" rel="noopener noreferrer" className="text-accent underline">X @noalisky</a>・<a href="https://takuhaireitoubentou.com/fitdish-taste-review/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お気楽グルメノート</a>（2026年11月14日に原文を確認）</p>
        <p className="text-sm mb-6 leading-relaxed">味への不満は「味が薄い」など商品ごとの好みの差が中心で、全体としては「優しい味」「おいしい」という評価のほうが多く見られました。不満で目立つのは、味よりも量とメニューを選べない点です。</p>
        <SectionHeading id="cancel">休会・解約の方法と締切</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["回数の縛り・解約金", "なし（「回数の縛りや解約金は発生いたしません」）"],
            ["手続き", "マイページで本人が操作（「定期を休止する」「退会する」）。事務局では受け付けない"],
            ["締切", "次回お届け日の10日〜2週間前まで（例: 12/11お届けなら12/2まで）"],
            ["締切を過ぎた場合", "出荷準備中・出荷後の次回分は確定し、次々回からの反映"],
            ["お届けの前倒し・延期", "可能（最大約1か月半）"],
            ["返品", "欠陥がある場合を除き不可（欠陥品は到着から14日以内に連絡）"],
            ["受け取れなかった場合", "お届け予定日を含む3日間に渡せないと処分されることがあり、その場合も料金がかかる（利用規約）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.fitdish.jp/ask/cat-109.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問（お支払い・変更）</a>・<a href="https://www.fitdish.jp/ask/cat-108.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問（サービス）</a>・<a href="https://www.fitdish.jp/static/specificTransactionsLaw.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>・<a href="https://www.fitdish.jp/static/terms.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">利用規約</a>（2026年11月14日確認）</p>
        <SectionHeading id="recommend">向いている人・向いていない人</SectionHeading>
        <SubHeading>向いている人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>冷凍庫が小さく、冷蔵庫で保存できるおかずがほしい人</li><li>献立を考える手間を減らしたい人（メニュー選びもおまかせ）</li><li>ごはんは自分で用意し、おかずだけを足したい人</li><li>離れて暮らす家族への仕送りに使いたい人（お届け先を別住所に設定可能）</li></ul>
        <SubHeading>向いていない人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>1品でしっかりお腹を満たしたい人（量が少ないという声あり）</li><li>メニューを自分で選びたい人</li><li>宅配ボックスで受け取りたい人（手渡しのみ）</li></ul>
        <p className="text-sm mb-6 leading-relaxed">メニューを自分で選べる冷凍の宅食と比べたい場合は、<Link href="/articles/delipicks-menu/" className="text-accent underline">デリピックスのメニュー一覧</Link>や<Link href="/articles/hitorigurashi-osusume/" className="text-accent underline">一人暮らし向けの宅食の比較</Link>が参考になります。</p>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">FitDishは、冷蔵で約1か月もつパウチのおかずが送料込みで届く定期便です。口コミでは味と使いやすさの評価が高く、量の少なさとメニューを選べない点が主な不満でした。12月17日の注文分から料金が上がるため、申し込むなら時期による価格の違いを確認してから決めるのがおすすめです。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・キャンペーンは変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>FitDish 公式サイトで最新の料金を見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/delipicks-menu/" className="text-accent hover:text-accent-dark transition-colors">デリピックス（DELIPICKS）のメニュー一覧</Link></li>
            <li><Link href="/articles/reitouko-chiisai-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">冷凍庫が小さい家庭向けの宅配弁当</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">一人暮らしにおすすめの宅食・宅配弁当</Link></li>
            <li><Link href="/articles/tsukurioki-jp-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ツクリオの口コミ・評判</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
            <li><Link href="/articles/ana-kinaishoku-tsuhan/" className="text-accent hover:text-accent-dark transition-colors">ANAの機内食は通販で買える？</Link></li>
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
