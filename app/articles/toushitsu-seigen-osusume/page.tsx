import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】糖質制限におすすめの宅配弁当ランキングTOP5｜低糖質・糖質オフの宅食を徹底比較";
const ARTICLE_DESCRIPTION =
  "糖質制限におすすめの宅配弁当を管理栄養士監修で徹底比較。nosh・食宅便・ウェルネスダイニングなど人気5社を糖質量・価格・味で比較し、ランキングTOP5を発表。糖質制限のレベル別おすすめ、1日の糖質量の目安、ケトジェニック向けメニューまで解説。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/toushitsu-seigen-osusume/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "糖質制限 宅配弁当 おすすめ, 低糖質 弁当 宅配, 糖質オフ 宅食, 糖質制限 冷凍弁当, 低糖質 宅食, ケトジェニック 宅配弁当, 糖質制限食 宅配, ロカボ 宅配弁当",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-16T00:00:00+09:00",
    modifiedTime: "2026-04-16T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "糖質制限は1日何g以下にすればいいですか？",
    answer:
      "糖質制限には3つのレベルがあります。ロカボ（緩やかな糖質制限）は1日70〜130g、スタンダード糖質制限は1日50〜100g、スーパー糖質制限（ケトジェニック）は1日20〜50gが目安。初めて糖質制限をする方はロカボ（1食20〜40g）からスタートし、体調を見ながら徐々に減らすのがおすすめ。noshの全メニュー糖質30g以下はスタンダード糖質制限レベルで、無理なく続けられます。",
  },
  {
    question: "糖質制限の宅配弁当は美味しいですか？味が薄くないですか？",
    answer:
      "糖質制限の宅配弁当は「低糖質＝味が薄い」というイメージと異なり、むしろ味付けがしっかりしているものが多いです。糖質を減らす代わりに脂質やたんぱく質で旨味を出すため、満足感があります。特にnoshや三ツ星ファームはプロの料理人が監修しており、「低糖質とは思えない美味しさ」という口コミが多数。食宅便の低糖質セレクトも日清医療食品の調理技術で、糖質10g以下ながら物足りなさを感じにくい工夫がされています。",
  },
  {
    question: "糖質制限で頭がぼーっとするのは大丈夫ですか？",
    answer:
      "糖質制限を始めて1〜2週間は、脳のエネルギー源が糖質から脂質（ケトン体）に切り替わる過程で、頭がぼーっとする・倦怠感・頭痛などの症状（ケトフル）が出ることがあります。これは一時的な症状で、多くの場合2〜3週間で改善します。対策としては、水分と塩分を十分に摂ること（1日2L以上の水+塩分6g程度）、急激に糖質を減らさず徐々に減らすこと。症状が長引く場合は医師に相談してください。",
  },
  {
    question: "糖尿病で糖質制限が必要な場合、宅配弁当は使えますか？",
    answer:
      "はい、糖尿病の食事管理に宅配弁当は非常に有効です。ウェルネスダイニングの糖質制限食（糖質15g以下）やDr.つるかめキッチンの糖尿病食は、医師・管理栄養士が監修しており安心。食宅便の低糖質セレクト（糖質10g以下）は最も厳密な糖質管理が可能。ただし、糖尿病の食事管理は個人差が大きいため、必ずかかりつけ医や管理栄養士の指導のもとで利用しましょう。インスリン使用中の方は特に注意が必要です。",
  },
  {
    question: "糖質制限の宅配弁当にご飯は付けるべきですか？",
    answer:
      "糖質制限のレベルによります。ロカボ（1食40g以下）ならご飯70g（糖質約26g）を付けてもOK。スタンダード糖質制限（1食30g以下）なら、ご飯なしかこんにゃく米（糖質約50%カット）がおすすめ。スーパー糖質制限（ケトジェニック）ならご飯は完全にカット。noshの全メニューはご飯なし（おかずのみ）なので、糖質制限レベルに応じてご飯を調整できます。カリフラワーライスやオートミールに置き換えるのも効果的です。",
  },
];

/* ---------- Helper Components ---------- */

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">目的別ガイド</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">糖質制限向け宅配弁当おすすめ</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "why", label: "糖質制限に宅配弁当がおすすめな理由" },
    { id: "how-to-choose", label: "糖質制限向け宅食の選び方4つのポイント" },
    { id: "ranking", label: "【ランキング】糖質制限におすすめの宅配弁当TOP5" },
    { id: "detail-review", label: "各サービスの詳細レビュー" },
    { id: "price-compare", label: "料金比較表" },
    { id: "menu-example", label: "糖質制限向けメニューの実例紹介" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}><a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a></li>
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
            {headers.map((h) => (<th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (<td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>))}
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
  return <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (<span key={i} className={i <= count ? "star-filled" : "star-empty"}>&#9733;</span>))}
    </span>
  );
}

function RankingCard({ rank, name, tagline, color, features, price, shipping, pros, cons }: {
  rank: number; name: string; tagline: string; color: string; features: string[]; price: string; shipping: string; pros: string[]; cons: string[];
}) {
  const rankColors: Record<number, string> = { 1: "bg-yellow-500", 2: "bg-gray-400", 3: "bg-amber-600", 4: "bg-accent", 5: "bg-accent" };
  return (
    <div className={`${color} rounded-xl p-6 mb-6 border border-warm-border`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`${rankColors[rank] || "bg-accent"} text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center`}>{rank}</span>
        <div><h3 className="text-lg font-bold">{name}</h3><p className="text-sm text-warm-gray">{tagline}</p></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
        <div><p className="font-medium mb-1">1食あたり: {price}</p><p className="font-medium">送料: {shipping}</p></div>
        <div><ul className="space-y-1">{features.map((f) => (<li key={f} className="flex items-start gap-1.5"><span className="text-accent mt-0.5">&#10003;</span><span>{f}</span></li>))}</ul></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div><p className="font-medium text-accent mb-1">メリット</p><ul className="space-y-1">{pros.map((p) => (<li key={p} className="leading-relaxed">{p}</li>))}</ul></div>
        <div><p className="font-medium text-red-600 mb-1">デメリット</p><ul className="space-y-1">{cons.map((c) => (<li key={c} className="leading-relaxed text-foreground/70">{c}</li>))}</ul></div>
      </div>
    </div>
  );
}

/* ---------- Page Component ---------- */

export default function ToushitsuSeigenOsusumePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-16T00:00:00+09:00",
    dateModified: "2026-04-16T00:00:00+09:00",
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "糖質制限におすすめの宅配弁当ランキングTOP5",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "nosh（ナッシュ）", description: "全メニュー糖質30g以下。60種類以上から自由に選べてアプリで糖質量を確認しながら注文可能。", url: "https://nosh.jp/" },
      { "@type": "ListItem", position: 2, name: "食宅便（低糖質セレクト）", description: "糖質10g以下の業界最厳の糖質制限。日清医療食品の管理栄養士設計。ケトジェニックにも対応。", url: "https://shokutakubin.com/" },
      { "@type": "ListItem", position: 3, name: "三ツ星ファーム", description: "糖質25g以下・たんぱく質15g以上。プロの料理人監修で低糖質なのに美味しい。", url: "https://mitsuboshifarm.jp/" },
      { "@type": "ListItem", position: 4, name: "ウェルネスダイニング", description: "糖質制限気配り宅配食（糖質15g以下）。管理栄養士への無料相談あり。糖尿病の方にも。", url: "https://www.wellness-dining.com/" },
      { "@type": "ListItem", position: 5, name: "まごころケア食", description: "糖質制限食（糖質15g以下）を1食470円〜で提供。送料無料でコスパ最強の糖質制限。", url: "https://magokoro-care-shoku.com/" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">目的別ガイド</span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-16">公開: 2026年4月16日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「糖質制限を始めたいけど、毎食の糖質量を計算するのが面倒...」「低糖質のメニューを自分で考えるのが大変」——そんな糖質制限の悩みを一発で解決するのが<strong>低糖質の宅配弁当</strong>です。
          </p>
          <p className="mb-3">
            糖質制限の最大のハードルは「何を食べればいいかわからない」こと。宅配弁当なら管理栄養士が糖質量を計算済みなので、メニューを選んで食べるだけで糖質制限が完了。自分で計算・調理する必要は一切ありません。
          </p>
          <p>
            この記事では、<strong>糖質制限に対応した宅配弁当5社を糖質量・味・価格で徹底比較</strong>し、おすすめランキングTOP5を発表。<strong>糖質制限のレベル別（ロカボ・スタンダード・ケトジェニック）のおすすめ</strong>や<strong>1日の食事プラン例</strong>まで、糖質制限を宅配弁当で成功させるための情報を網羅しました。
          </p>
        </div>

        <TableOfContents />

        {/* ===== おすすめな理由 ===== */}
        <SectionHeading id="why">糖質制限に宅配弁当がおすすめな4つの理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          糖質制限ダイエットや糖尿病の食事管理に、なぜ宅配弁当が最適なのか。4つの理由を解説します。
        </p>

        {[
          {
            icon: "&#128200;",
            title: "糖質量が「保証」されている安心感",
            text: "自炊で糖質制限をする場合、食材ごとの糖質量を調べ、調味料の糖質も計算し、合計値を出す——これを毎食行うのは非常に面倒です。宅配弁当なら「全メニュー糖質30g以下」（nosh）、「糖質10g以下」（食宅便）と数値が保証されているため、メニューを選ぶだけで確実に糖質を制限できます。「つい食べすぎてしまった」「計算を間違えた」といった失敗がゼロになるのは、糖質制限の成功率を大きく上げる要因です。",
          },
          {
            icon: "&#127860;",
            title: "低糖質なのに美味しい。糖質制限の「我慢」が減る",
            text: "自分で低糖質料理を作ると、味が単調になりがちで飽きて挫折するケースが多い。宅配弁当はプロの料理人や管理栄養士が「低糖質でも美味しい」レシピを開発しており、60〜160種類以上のメニューから選べます。noshの低糖質ドーナツ（糖質13.4g）やロールケーキ（糖質4.7g）など、スイーツまで低糖質で楽しめるのは宅配弁当ならでは。「我慢しないで糖質制限」が実現できます。",
          },
          {
            icon: "&#9201;",
            title: "糖質制限食の自炊は時間がかかる。宅配弁当ならレンジ5分",
            text: "糖質制限の自炊は、通常の自炊より手間がかかります。米・パン・パスタなどの主食を使えないため、代替食材（こんにゃく麺・カリフラワーライス等）を用意する必要があり、レシピの幅も限られます。宅配弁当ならレンジで5分温めるだけ。糖質量の計算も調理も不要で、浮いた時間を仕事・運動・趣味に使えます。特に忙しい方にとって、「糖質制限のための調理時間ゼロ」は大きなメリットです。",
          },
          {
            icon: "&#128202;",
            title: "PFCバランスが最適化されており、筋肉を落とさずに糖質制限できる",
            text: "糖質制限で最も注意すべきは「糖質を減らした分のカロリーをどこで補うか」。たんぱく質と良質な脂質で補わないと、筋肉量が減り基礎代謝が下がってリバウンドします。宅配弁当はPFC（たんぱく質・脂質・炭水化物）のバランスが計算されており、noshの平均たんぱく質は約20g、三ツ星ファームは15g以上。糖質を抑えながらたんぱく質をしっかり確保する設計で、「筋肉を維持しながら体脂肪を減らす」理想的な糖質制限をサポートします。",
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-xl" dangerouslySetInnerHTML={{ __html: item.icon }} />
            <div>
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 選び方 ===== */}
        <SectionHeading id="how-to-choose">糖質制限向け宅食の選び方4つのポイント</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          糖質制限の宅配弁当は、サービスごとに糖質量の基準が大きく異なります。自分の糖質制限レベルに合ったサービスを選ぶための4つのポイントを解説します。
        </p>

        {[
          { num: 1, title: "1食あたりの糖質量（自分の制限レベルに合っているか）", text: "宅配弁当の糖質量は、nosh（30g以下）、三ツ星ファーム（25g以下）、ウェルネスダイニング（15g以下）、食宅便の低糖質セレクト（10g以下）と大きく異なります。ロカボ（緩やかな糖質制限）ならnoshで十分。スタンダード糖質制限なら三ツ星ファームかウェルネスダイニング。ケトジェニック（スーパー糖質制限）なら食宅便の低糖質セレクト一択。自分の糖質制限レベルに合った糖質量のサービスを選ぶことが最も重要です。" },
          { num: 2, title: "たんぱく質量（糖質を減らした分、たんぱく質で補えるか）", text: "糖質制限では、糖質を減らした分のカロリーをたんぱく質と脂質で補う必要があります。1食あたりたんぱく質15g以上は確保したいところ。nosh（平均20g）、三ツ星ファーム（15g以上）は十分。食宅便の低糖質セレクトは糖質10g以下のストイックさですが、たんぱく質は約15gで合格ライン。ウェルネスダイニングは約15gとバランス型。たんぱく質が不足すると筋肉量が減るため、必ずチェックしましょう。" },
          { num: 3, title: "メニューの豊富さ（糖質制限でも飽きずに続けられるか）", text: "糖質制限の挫折理由No.1は「飽きる」。毎日サラダチキンとゆで卵では続きません。noshは60種類以上（低糖質スイーツ含む）、三ツ星ファームは80種類以上、食宅便は160種類以上とメニューが豊富。毎週新メニューが追加されるnoshは、長期の糖質制限でも飽きにくい。低糖質のドーナツやロールケーキがあるのも、甘いもの好きの方には嬉しいポイントです。" },
          { num: 4, title: "価格（糖質制限は長期戦。続けられるコストか）", text: "糖質制限は最低3ヶ月、理想的には6ヶ月以上続けて初めて効果が定着します。1食あたりnosh 599円〜、食宅便 560円〜、まごころケア食 470円〜。週5回利用で月額は9,870円（まごころケア食）〜13,806円（nosh）。3ヶ月で約3〜4万円。この金額を無理なく続けられるか確認しましょう。nosh clubの継続割引は最大16.55%OFFで、長期利用するほどお得になります。" },
        ].map((point) => (
          <div key={point.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">{point.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{point.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{point.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 糖質制限レベル別おすすめ ===== */}
        <SubHeading>糖質制限レベル別おすすめサービス</SubHeading>
        <ComparisonTable
          headers={["制限レベル", "1食の糖質量", "1日の目安", "おすすめサービス"]}
          rows={[
            ["ロカボ（緩やか）", "20〜40g", "70〜130g", "nosh（30g以下）"],
            ["スタンダード", "10〜30g", "50〜100g", "三ツ星ファーム（25g以下）"],
            ["厳格な糖質制限", "10〜15g", "30〜60g", "ウェルネスダイニング（15g以下）"],
            ["ケトジェニック", "10g以下", "20〜50g", "食宅便 低糖質セレクト（10g以下）"],
          ]}
        />

        {/* ===== ランキング ===== */}
        <SectionHeading id="ranking">【ランキング】糖質制限におすすめの宅配弁当TOP5</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          糖質量・たんぱく質・味・メニューの豊富さ・価格の5項目で総合評価し、糖質制限におすすめの宅配弁当TOP5を選出しました。
        </p>

        <RankingCard
          rank={1}
          name="nosh（ナッシュ）"
          tagline="糖質30g以下 × 60種類以上。糖質制限の定番中の定番"
          color="bg-yellow-50"
          features={[
            "全メニュー糖質30g以下・塩分2.5g以下",
            "60種類以上（スイーツ含む）から自由に選択",
            "アプリで糖質量をフィルタリング",
            "nosh club割引で最大16.55%OFF",
          ]}
          price="599円〜（10食プラン）"
          shipping="913円〜（関東）"
          pros={[
            "アプリで「糖質の低い順」にソートして選べる",
            "低糖質スイーツ（ドーナツ・ロールケーキ等）あり",
            "60種類以上で飽きにくい。毎週新メニュー追加",
            "継続割引で最安1食499円",
          ]}
          cons={[
            "糖質30g以下は「ロカボ」レベル。厳密な制限には物足りない場合も",
            "メニューによって糖質量にばらつき（5g〜30g）",
            "送料が地域差大",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          糖質制限で最もおすすめなのがnosh。全メニュー糖質30g以下のロカボ〜スタンダード糖質制限に対応し、アプリの糖質フィルター機能で「糖質の低い順」にメニューをソートできるのが圧倒的に便利。糖質5g台の超低糖質メニューもあり、選び方次第でケトジェニックレベルの糖質制限も可能です。低糖質ドーナツ（糖質13.4g）やロールケーキ（糖質4.7g）など、スイーツまで低糖質なのは他社にない強み。詳しくは<Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline">nosh(ナッシュ)の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={2}
          name="食宅便（低糖質セレクト）"
          tagline="糖質10g以下。ケトジェニック対応の最厳糖質制限"
          color="bg-amber-50"
          features={[
            "全メニュー糖質10g以下",
            "日清医療食品の管理栄養士設計",
            "約160種類以上のメニュー",
            "お試しセット4食1,980円",
          ]}
          price="560円〜（7食プラン）"
          shipping="780円"
          pros={[
            "糖質10g以下は業界最厳。ケトジェニックに最適",
            "日清医療食品の医療レベル栄養管理",
            "1食560円〜のコスパ",
            "メニュー数160種類以上で飽きにくい",
          ]}
          cons={[
            "メニューが自分で選べない（セット制）",
            "味はnosh・三ツ星ファームに劣る",
            "アプリがない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          本格的なケトジェニックダイエットや、糖尿病で厳密な糖質管理が必要な方には食宅便の低糖質セレクト。糖質10g以下はnosh（30g以下）の3分の1で、1食のご飯なし＋低糖質セレクトなら糖質10g以下の超低糖質食が実現。医療食品メーカーの信頼感も安心材料。詳しくは<Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark underline">食宅便の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={3}
          name="三ツ星ファーム"
          tagline="糖質25g以下 × レストラン品質。美味しい糖質制限"
          color="bg-blue-50"
          features={[
            "全メニュー糖質25g以下",
            "たんぱく質15g以上",
            "プロの料理人監修",
            "化学調味料・合成着色料不使用",
          ]}
          price="626円〜（14食プラン）"
          shipping="990円〜（関東）"
          pros={[
            "低糖質なのに味のクオリティが業界トップ",
            "糖質25g以下はスタンダード糖質制限に最適",
            "化学調味料不使用で体にも優しい",
          ]}
          cons={[
            "noshより1食あたりやや高い",
            "アプリがない",
            "糖質量のフィルタリング機能がない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          「糖質制限でも美味しさは妥協したくない」方には三ツ星ファーム。糖質25g以下・たんぱく質15g以上・350kcal以下の三ツ星基準で、プロの料理人監修メニューは「低糖質とは思えない」クオリティ。化学調味料・合成着色料不使用も健康意識の高い方に嬉しいポイント。詳しくは<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline">三ツ星ファームの口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={4}
          name="ウェルネスダイニング"
          tagline="糖質15g以下 × 管理栄養士相談。糖尿病の方にも安心"
          color="bg-green-50"
          features={[
            "糖質制限食（糖質15g以下・塩分2.0g以下）",
            "管理栄養士に無料で栄養相談",
            "カロリー制限食との組み合わせも可能",
            "定期便で送料半額（385円）",
          ]}
          price="663円〜（7食プラン）"
          shipping="770円〜（定期便385円）"
          pros={[
            "糖質15g以下はnoshより厳密な制限が可能",
            "管理栄養士に「自分に合った糖質量」を相談できる",
            "糖尿病の方も安心して利用できる",
          ]}
          cons={[
            "メニューが自分で選べない",
            "味は素朴（レストラン品質ではない）",
            "解約が電話のみ",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          糖尿病の食事管理や、医師から糖質制限を指示された方にはウェルネスダイニング。糖質15g以下・塩分2.0g以下で、管理栄養士に「自分のHbA1cの数値に合った食事量」を無料で相談できるのは他社にない安心感。詳しくは<Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark underline">ウェルネスダイニングの口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={5}
          name="まごころケア食"
          tagline="糖質15g以下 × 送料無料。コスパ最強の糖質制限"
          color="bg-purple-50"
          features={[
            "糖質制限食（糖質15g以下）",
            "1食あたり470円〜の業界最安水準",
            "全国送料無料",
            "14食・21食のまとめ買いでさらにお得",
          ]}
          price="470円〜（14食プラン）"
          shipping="無料"
          pros={[
            "送料無料で実質コスト最安クラス",
            "糖質15g以下はウェルネスダイニングと同レベル",
            "コンパクト容器で冷凍庫にやさしい",
          ]}
          cons={[
            "メニューが自分で選べない（コース制）",
            "味は家庭的（グルメ志向には物足りない）",
            "栄養相談はウェルネスダイニングほど手厚くない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          糖質制限を最安コストで続けたい方にはまごころケア食。糖質15g以下の糖質制限食が1食470円〜で全国送料無料。月額約9,870円（21食）は糖質制限宅配弁当で最も経済的。詳しくは<Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark underline">まごころケア食の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        {/* ===== 詳細レビュー ===== */}
        <SectionHeading id="detail-review">各サービスの詳細レビュー</SectionHeading>

        <SubHeading>nosh - 糖質制限の総合力No.1</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          noshが糖質制限で1位の理由は「選ぶ楽しさ」と「続けやすさ」。アプリの糖質フィルター機能で、自分の制限レベルに合ったメニューだけを表示して選べます。糖質5g台の超低糖質メニュー（例：チキンのバジルオイル焼き 糖質4.3g）を選べばケトジェニックにも対応可能。低糖質スイーツまであるのはnoshだけの特権で、「甘いものが食べたい」ストレスを低糖質で解消できます。nosh clubの継続割引で長期利用ほどお得になるため、「3ヶ月以上の糖質制限」を計画している方に最適です。
        </p>

        <SubHeading>食宅便 - ケトジェニックの最適解</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          食宅便の低糖質セレクトは、全メニュー糖質10g以下という業界最厳の糖質制限。ケトジェニックダイエット（1日の糖質20〜50g）を実践する方にとって、1食の糖質を10g以下に確実に抑えられるのは非常に心強い。日清医療食品の管理栄養士が設計しており、糖質を極限まで抑えながらも必要な栄養素はしっかり確保。1食560円〜のコスパも良好。糖尿病で医師から厳密な糖質管理を指示されている方にも安心して利用できます。
        </p>

        <SubHeading>三ツ星ファーム - 美味しさNo.1の糖質制限</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          三ツ星ファームは「低糖質でも美味しさを犠牲にしない」をコンセプトに、プロの料理人が監修。糖質25g以下・たんぱく質15g以上・350kcal以下の三ツ星基準を全メニューがクリアしており、「ダイエット中でも外食レベルの食事がしたい」という方に最適。化学調味料・合成着色料不使用で体にも優しい。80種類以上のメニューで飽きにくく、長期の糖質制限でもモチベーションを維持しやすい。
        </p>

        <SubHeading>ウェルネスダイニング - 糖尿病対応の安心感</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          ウェルネスダイニングの糖質制限気配り宅配食は、糖質15g以下・塩分2.0g以下・カロリー240kcal±10%。管理栄養士への無料電話相談で「HbA1cが7.0なのですが、どのコースがいい？」といった医療レベルの相談にも対応。糖尿病の食事管理で「病院の栄養指導に近い品質」を自宅で受けられるのは、ウェルネスダイニングならではの強みです。定期便なら送料385円と良心的。
        </p>

        <SubHeading>まごころケア食 - コスパ最強の糖質制限</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          まごころケア食の糖質制限食は、糖質15g以下が1食470円〜で全国送料無料。ウェルネスダイニングと同じ糖質15g以下の基準ながら、価格は約200円安い。長期の糖質制限ではこの差が大きく、月額で約4,000〜5,000円の差に。味は家庭的で素朴ですが、「毎日食べても飽きない安心感のある味」という評価が多く、長期利用に向いています。
        </p>

        {/* ===== 料金比較 ===== */}
        <SectionHeading id="price-compare">料金比較表</SectionHeading>

        <SubHeading>5社の糖質量・料金比較一覧</SubHeading>
        <ComparisonTable
          headers={["サービス", "1食あたり", "送料", "糖質量", "たんぱく質", "メニュー数"]}
          rows={[
            ["nosh", "599円〜", "913円〜", "30g以下", "平均20g", "60種類以上"],
            ["食宅便", "560円〜", "780円", "10g以下", "約15g", "160種類以上"],
            ["三ツ星ファーム", "626円〜", "990円〜", "25g以下", "15g以上", "80種類以上"],
            ["ウェルネスダイニング", "663円〜", "定期385円", "15g以下", "約15g", "コース制"],
            ["まごころケア食", "470円〜", "無料", "15g以下", "約12g", "コース制"],
          ]}
        />

        <SubHeading>月額コストシミュレーション（週5回夕食利用・関東在住）</SubHeading>
        <ComparisonTable
          headers={["サービス", "プラン", "食材費/月", "送料/月", "月額合計"]}
          rows={[
            ["nosh", "10食×2回", "11,980円", "1,826円", "13,806円"],
            ["食宅便", "7食×3回", "11,760円", "2,340円", "14,100円"],
            ["三ツ星ファーム", "14食+7食", "13,000円", "1,980円", "14,980円"],
            ["ウェルネスダイニング", "14食+7食", "13,716円", "770円", "14,486円"],
            ["まごころケア食", "21食", "9,870円", "0円", "9,870円"],
          ]}
        />

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">糖質制限のコスパ結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>最安：まごころケア食</strong>（月9,870円）——糖質15g以下で業界最安。長期の糖質制限に最適</li>
            <li><strong>バランス型：nosh</strong>（月13,806円）——コスパと自由度の両立。スイーツも低糖質</li>
            <li><strong>厳密制限：食宅便</strong>（月14,100円）——糖質10g以下でケトジェニック対応。コスパも良好</li>
            <li><strong>味重視：三ツ星ファーム</strong>（月14,980円）——美味しく糖質制限したい方に</li>
          </ul>
        </div>

        {/* ===== メニュー実例 ===== */}
        <SectionHeading id="menu-example">糖質制限向けメニューの実例紹介</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          各サービスの低糖質メニューを具体的に紹介。「実際にどの程度の糖質量で、どんなメニューが食べられるのか」をイメージしていただけます。
        </p>

        <SubHeading>nosh - 超低糖質メニューTOP5</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "糖質", "カロリー", "たんぱく質"]}
          rows={[
            ["チキンのバジルオイル焼き", "4.3g", "480kcal", "29.1g"],
            ["焼き鳥の柚子胡椒", "5.4g", "429kcal", "25.8g"],
            ["鮭の南蛮漬け", "8.2g", "198kcal", "16.8g"],
            ["ロールケーキ（プレーン）", "4.7g", "161kcal", "3.2g"],
            ["チョコレートドーナツ", "13.4g", "155kcal", "3.1g"],
          ]}
        />

        <SubHeading>糖質制限レベル別1日食事プラン例</SubHeading>

        <p className="font-bold text-sm mt-6 mb-2">ロカボ（1日130g以下）- nosh利用</p>
        <ComparisonTable
          headers={["食事", "メニュー例", "糖質"]}
          rows={[
            ["朝食", "トースト1枚+チーズ+サラダ", "約30g"],
            ["昼食", "おにぎり1個+サラダチキン+味噌汁", "約40g"],
            ["夕食", "nosh「チリハンバーグ」（ご飯なし）", "17.9g"],
            ["間食", "nosh「ロールケーキ」", "4.7g"],
            ["合計", "", "約92.6g"],
          ]}
        />

        <p className="font-bold text-sm mt-6 mb-2">ケトジェニック（1日50g以下）- 食宅便利用</p>
        <ComparisonTable
          headers={["食事", "メニュー例", "糖質"]}
          rows={[
            ["朝食", "スクランブルエッグ+アボカド+チーズ", "約5g"],
            ["昼食", "サラダチキン+ナッツ+オリーブオイルサラダ", "約8g"],
            ["夕食", "食宅便 低糖質セレクト", "約10g"],
            ["間食", "チーズ+くるみ", "約3g"],
            ["合計", "", "約26g"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          ケトジェニックは1日の糖質を50g以下に抑える高レベルの糖質制限。食宅便の低糖質セレクト（10g以下）を夕食に使えば、残りの食事で40gの糖質枠があり、比較的余裕を持ってケトジェニックを実践できます。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：糖質制限の宅食選び、自分のレベルに合ったサービスを</SectionHeading>

        <SubHeading>糖質制限レベル別おすすめ早見表</SubHeading>
        <ComparisonTable
          headers={["あなたの糖質制限レベル", "おすすめサービス"]}
          rows={[
            ["初めての糖質制限（ロカボ）", "nosh（糖質30g以下）"],
            ["スタンダード糖質制限", "三ツ星ファーム（糖質25g以下）"],
            ["厳格な糖質制限", "ウェルネスダイニング（糖質15g以下）"],
            ["ケトジェニック", "食宅便 低糖質セレクト（糖質10g以下）"],
            ["コスパ最優先", "まごころケア食（糖質15g以下・送料無料）"],
            ["美味しさ最優先", "三ツ星ファーム or nosh"],
            ["糖尿病の食事管理", "ウェルネスダイニング or 食宅便"],
          ]}
        />

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/10">
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">食宅便</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネス</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">まごころ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["糖質制限おすすめ度", 5, 5, 4, 4, 4],
                  ["糖質量の低さ", 3, 5, 4, 4, 4],
                  ["味", 4, 3, 5, 3, 3],
                  ["コスパ", 4, 4, 3, 3, 5],
                  ["メニュー自由度", 5, 2, 3, 2, 2],
                ].map(([label, ...scores], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium text-xs">{label as string}</td>
                    {(scores as number[]).map((score, j) => (
                      <td key={j} className="border border-warm-border px-3 py-2"><StarRating count={score} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            糖質制限初心者は<strong>nosh</strong>からスタートするのがおすすめ。全メニュー糖質30g以下のロカボレベルで無理なく始められ、アプリで糖質量を確認しながらメニューを選べます。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            厳密な糖質制限やケトジェニックを実践する方は<strong>食宅便の低糖質セレクト</strong>（糖質10g以下）。糖尿病の食事管理なら<strong>ウェルネスダイニング</strong>（管理栄養士に相談可能）が安心です。
          </p>
          <p className="text-sm leading-relaxed">
            「糖質制限はしたいけど、何を食べればいいかわからない」——その悩み、宅配弁当を選ぶだけで解決です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の口コミ・評判を徹底調査
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ダイエット向け宅配弁当おすすめランキング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食の専門ライターチーム。実際にサービスを利用し、公平な比較情報をお届けします。</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】食宅便の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】ウェルネスダイニングの口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark transition-colors">ダイエット向け宅配弁当おすすめランキングTOP5</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
