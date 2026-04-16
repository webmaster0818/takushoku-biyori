import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】ダイエット向け宅配弁当おすすめランキングTOP5｜低糖質・低カロリーで無理なく痩せる";
const ARTICLE_DESCRIPTION =
  "ダイエットにおすすめの宅配弁当を管理栄養士監修で徹底比較。nosh・三ツ星ファーム・ウェルネスダイニングなど人気5社を糖質・カロリー・価格で比較し、低糖質・低カロリーの宅食ランキングTOP5を発表。置き換えダイエットの成功のコツも解説。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/diet-osusume/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅配弁当 ダイエット おすすめ, ダイエット 宅食, 低糖質 宅配弁当, ダイエット弁当 宅配, 低カロリー 宅配弁当, 糖質制限 弁当 宅配, 冷凍弁当 ダイエット, 宅配弁当 痩せる",
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
    question: "宅配弁当だけで本当に痩せますか？",
    answer:
      "宅配弁当を夕食に置き換えることで、1日の摂取カロリーを無理なく200〜400kcal削減できます。例えばnoshの平均カロリーは約350kcalで、コンビニ弁当（約700〜800kcal）の約半分。1ヶ月続ければ約6,000〜12,000kcalの削減となり、体脂肪約0.8〜1.7kgの減少に相当します。ただし、宅配弁当以外の食事で食べ過ぎると効果が薄れるため、朝食・昼食もバランスを意識することが大切です。",
  },
  {
    question: "糖質制限と脂質制限、どちらが向いていますか？",
    answer:
      "短期間で結果を出したい方には糖質制限がおすすめ。糖質を減らすと体内のグリコーゲンと水分が減り、1〜2週間で体重が1〜3kg落ちやすくなります。一方、長期的に無理なく続けたい方には脂質制限が向いています。宅配弁当では、noshが糖質制限（全メニュー糖質30g以下）、食宅便の低糖質セレクトが厳密な糖質制限（糖質10g以下）に対応しています。",
  },
  {
    question: "ダイエット中、宅配弁当にご飯は付けるべきですか？",
    answer:
      "ダイエット目的なら、ご飯なし（おかずのみ）で食べるか、低糖質のご飯に置き換えるのがおすすめです。白米150gは糖質約55g・約250kcal。これをカットするだけで大幅なカロリー削減になります。どうしてもご飯が食べたい場合は、100g（糖質約37g）に減らすか、こんにゃく米やカリフラワーライスで代替するのが効果的です。",
  },
  {
    question: "宅配弁当ダイエットでリバウンドしないコツは？",
    answer:
      "リバウンドを防ぐ最大のコツは「極端な食事制限をしないこと」です。1日の摂取カロリーを基礎代謝（女性約1,200kcal、男性約1,500kcal）以下に落とすと、筋肉量が減り代謝が低下してリバウンドしやすくなります。宅配弁当を1日1〜2食取り入れ、残りの食事もバランスよく食べる「ゆるやかなカロリー制限」が長期的に最も効果的です。目標減量ペースは月1〜2kgが理想的。",
  },
  {
    question: "運動なしでも宅配弁当ダイエットは効果がありますか？",
    answer:
      "運動なしでもカロリー収支がマイナスになれば体重は減ります。ただし、運動を組み合わせた方が効率的です。特にウォーキングや軽い筋トレを週3回程度取り入れると、基礎代謝が上がり痩せやすい体質になります。宅配弁当で食事管理をしながら、まずは1日8,000歩のウォーキングから始めるのがおすすめ。食事8割・運動2割のバランスが、無理なく続けられるダイエットの黄金比率です。",
  },
];

/* ---------- Helper Components ---------- */

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
          <span className="text-foreground/70">目的別ガイド</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ダイエット向け宅配弁当おすすめ</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "why", label: "ダイエットに宅配弁当がおすすめな理由" },
    { id: "how-to-choose", label: "ダイエット向け宅食の選び方4つのポイント" },
    { id: "ranking", label: "【ランキング】ダイエットにおすすめの宅配弁当TOP5" },
    { id: "detail-review", label: "各サービスの詳細レビュー" },
    { id: "price-compare", label: "料金比較表" },
    { id: "menu-example", label: "ダイエット向けメニューの実例紹介" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav
      aria-label="目次"
      className="bg-cream border border-warm-border rounded-xl p-5 mb-10"
    >
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-accent hover:text-accent-dark transition-colors"
            >
              {i + 1}. {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent/10">
            {headers.map((h) => (
              <th
                key={h}
                className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="border border-warm-border rounded-lg mb-3 group">
      <summary className="flex items-center justify-between p-4 font-medium text-sm hover:bg-cream/50 transition-colors">
        <span>{question}</span>
        <span className="faq-arrow text-warm-gray ml-2">&#9660;</span>
      </summary>
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">
      {children}
    </h3>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>
          &#9733;
        </span>
      ))}
    </span>
  );
}

function RankingCard({
  rank,
  name,
  tagline,
  color,
  features,
  price,
  shipping,
  pros,
  cons,
}: {
  rank: number;
  name: string;
  tagline: string;
  color: string;
  features: string[];
  price: string;
  shipping: string;
  pros: string[];
  cons: string[];
}) {
  const rankColors: Record<number, string> = {
    1: "bg-yellow-500",
    2: "bg-gray-400",
    3: "bg-amber-600",
    4: "bg-accent",
    5: "bg-accent",
  };
  return (
    <div className={`${color} rounded-xl p-6 mb-6 border border-warm-border`}>
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`${rankColors[rank] || "bg-accent"} text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center`}
        >
          {rank}
        </span>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-warm-gray">{tagline}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
        <div>
          <p className="font-medium mb-1">1食あたり: {price}</p>
          <p className="font-medium">送料: {shipping}</p>
        </div>
        <div>
          <ul className="space-y-1">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-1.5">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-medium text-accent mb-1">メリット</p>
          <ul className="space-y-1">
            {pros.map((p) => (
              <li key={p} className="leading-relaxed">{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium text-red-600 mb-1">デメリット</p>
          <ul className="space-y-1">
            {cons.map((c) => (
              <li key={c} className="leading-relaxed text-foreground/70">{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- Page Component ---------- */

export default function DietOsusumePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-16T00:00:00+09:00",
    dateModified: "2026-04-16T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: {
      "@type": "Organization",
      name: "宅食びより",
      url: "https://takushoku-biyori.com",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ダイエットにおすすめの宅配弁当ランキングTOP5",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "nosh（ナッシュ）",
        description:
          "全メニュー糖質30g以下・塩分2.5g以下。60種類以上から自由に選べてアプリでPFC管理も簡単。ダイエッターに最も支持される宅配弁当。",
        url: "https://nosh.jp/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "三ツ星ファーム",
        description:
          "350kcal以下・糖質25g以下・たんぱく質15g以上の三ツ星基準。プロの料理人監修で美味しくダイエット。",
        url: "https://mitsuboshifarm.jp/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "食宅便（低糖質セレクト）",
        description:
          "糖質10g以下の本格糖質制限メニュー。日清医療食品の管理栄養士が設計。厳密な糖質管理に最適。",
        url: "https://shokutakubin.com/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "ウェルネスダイニング",
        description:
          "糖質制限食（糖質15g以下）・カロリー制限食を用意。管理栄養士に無料相談可。健康数値が気になる方に。",
        url: "https://www.wellness-dining.com/",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "筋肉食堂DELI",
        description:
          "高たんぱく・低脂質・低カロリー。ボディメイク・筋トレとの併用に最適。PFCバランスを重視する方に。",
        url: "https://kinnikushokudo-ec.jp/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        {/* Title */}
        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            目的別ガイド
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-16">公開: 2026年4月16日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「ダイエットしたいけど、自分でカロリー計算するのが面倒...」「糖質制限を始めたいけど、何を食べればいいかわからない」——そんなダイエットの悩みを解決するのが<strong>低糖質・低カロリーの宅配弁当</strong>です。
          </p>
          <p className="mb-3">
            最近の宅配弁当は管理栄養士がカロリー・糖質・塩分を計算して設計しているため、メニューを選ぶだけで自動的にカロリーコントロールが可能。面倒な栄養計算や食材の買い出しは一切不要で、レンジで温めるだけの手軽さです。
          </p>
          <p>
            この記事では、<strong>ダイエットに最適な宅配弁当5社を糖質量・カロリー・価格で徹底比較</strong>し、おすすめランキングTOP5を発表。さらに<strong>置き換えダイエットの成功のコツ</strong>や<strong>目的別（糖質制限・脂質制限・筋トレ）のおすすめメニュー</strong>まで、ダイエット宅食選びに必要な情報をすべてまとめました。
          </p>
        </div>

        <TableOfContents />

        {/* ===== おすすめな理由 ===== */}
        <SectionHeading id="why">ダイエットに宅配弁当がおすすめな5つの理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ダイエットの成功率は食事管理が8割と言われています。宅配弁当がダイエットに効果的な理由を5つの観点から解説します。
        </p>

        {[
          {
            icon: "&#128200;",
            title: "カロリー・糖質が計算済みで「食べるだけダイエット」が可能",
            text: "宅配弁当は1食あたりのカロリー・糖質・たんぱく質・脂質・塩分がすべて計算済み。noshなら全メニュー糖質30g以下・平均350kcal、三ツ星ファームなら350kcal以下・糖質25g以下。自分で栄養素を計算する手間がゼロで、「メニューを選んで食べるだけ」で自動的にカロリーコントロールができます。これは自炊やコンビニ弁当では絶対に実現できない、宅配弁当最大のダイエットメリットです。",
          },
          {
            icon: "&#127860;",
            title: "管理栄養士が設計した栄養バランスで、健康的に痩せられる",
            text: "極端な食事制限ダイエットは、筋肉量の低下・基礎代謝の低下・リバウンドを引き起こします。宅配弁当は管理栄養士が栄養バランスを設計しているため、必要な栄養素を確保しながらカロリーだけを適切に削減。たんぱく質はしっかり確保（nosh平均20g以上、三ツ星ファーム15g以上）しつつ糖質を抑えることで、筋肉を維持しながら体脂肪を落とす「健康的なダイエット」が可能です。",
          },
          {
            icon: "&#128337;",
            title: "調理不要だから「ダイエット疲れ」が起きにくい",
            text: "ダイエット挫折の最大の原因は「面倒になる」こと。自炊でダイエット食を作ると、食材の買い出し・計量・調理・後片付けで1食あたり40〜60分かかります。宅配弁当ならレンジで5分。毎日の食事準備がストレスにならないから、3ヶ月・6ヶ月と長期間続けやすいのです。ダイエットは「続けること」が最も重要。手軽さは最大の武器です。",
          },
          {
            icon: "&#127869;",
            title: "メニューが豊富で飽きない。ダイエットなのに「美味しい」",
            text: "「ダイエット食＝まずい・味気ない」は過去の話。noshは60種類以上、三ツ星ファームは80種類以上のメニューから自由に選べ、毎週新メニューが追加されます。プロの料理人が監修したレストラン品質のメニューもあり、「ダイエット中なのにこんなに美味しいものが食べられるの？」という驚きがあります。低糖質のスイーツ（ドーナツ・ロールケーキ等）もあり、甘いもの好きの方も無理なく続けられます。",
          },
          {
            icon: "&#128176;",
            title: "コンビニダイエット食より実はコスパが良い",
            text: "コンビニのサラダチキン+サラダ+低糖質パンを組み合わせると1食600〜800円。しかも栄養バランスは自分で考える必要があります。宅配弁当なら1食500〜700円で、管理栄養士が設計した完璧な栄養バランス付き。nosh clubの継続割引を使えば最安1食499円まで下がります。「安い・美味しい・栄養バランス完璧」の三拍子が揃っています。",
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
        <SectionHeading id="how-to-choose">ダイエット向け宅食の選び方4つのポイント</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ダイエット向け宅配弁当は各社で糖質量・カロリー・価格が異なります。自分のダイエットスタイルに合ったサービスを選ぶための4つのポイントを解説します。
        </p>

        {[
          {
            num: 1,
            title: "糖質量で選ぶ（ゆるい糖質制限 or 厳密な糖質制限）",
            text: "糖質制限ダイエットには3つのレベルがあります。プチ糖質制限（1食40g以下）、スタンダード糖質制限（1食30g以下）、スーパー糖質制限（1食20g以下）。noshは全メニュー糖質30g以下でスタンダード糖質制限に対応。食宅便の低糖質セレクトは糖質10g以下でスーパー糖質制限レベル。自分の目標に合った糖質量のサービスを選びましょう。初めて糖質制限をする方は、noshの30g以下からスタートするのがおすすめです。",
          },
          {
            num: 2,
            title: "カロリーで選ぶ（1食300〜500kcalが目安）",
            text: "ダイエット中の夕食は300〜500kcalが理想。これにご飯なし（または少量）で食べれば、1日の総摂取カロリーを1,200〜1,800kcalに抑えやすくなります。noshの平均カロリーは約350kcal、三ツ星ファームは350kcal以下、ウェルネスダイニングのカロリー制限食は240kcal±10%。ただし、カロリーが低すぎるメニューは量が少なく満足感に欠けることがあるため、たんぱく質量もチェックして「低カロリーでも満腹感がある」メニューを選びましょう。",
          },
          {
            num: 3,
            title: "たんぱく質量で選ぶ（1食15g以上が理想）",
            text: "ダイエット中に最も重要な栄養素がたんぱく質。筋肉量を維持して基礎代謝を保つために、1食あたり15〜25gのたんぱく質が必要です。noshの平均たんぱく質は約20g、三ツ星ファームは15g以上、筋肉食堂DELIは30g以上。運動を併用している方は、たんぱく質25g以上のメニューを選ぶとより効果的。noshはアプリでたんぱく質量をフィルタリングして選べるので便利です。",
          },
          {
            num: 4,
            title: "継続コスト（3ヶ月以上続けられる価格か）",
            text: "ダイエットは最低3ヶ月は続ける必要があります。週5回利用した場合の月額は、nosh（10食プラン）約13,800円、三ツ星ファーム約14,980円、まごころケア食約9,870円。この金額を3ヶ月以上無理なく払えるかを確認しましょう。nosh clubの継続割引（最大16.55%OFF）を活用すれば、3ヶ月目以降は月額がさらに下がります。",
          },
        ].map((point) => (
          <div key={point.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {point.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{point.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{point.text}</p>
            </div>
          </div>
        ))}

        {/* ===== ランキング ===== */}
        <SectionHeading id="ranking">【ランキング】ダイエットにおすすめの宅配弁当TOP5</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          糖質量・カロリー・たんぱく質・メニューの豊富さ・価格の5項目で総合評価し、ダイエットにおすすめの宅配弁当TOP5を選出しました。
        </p>

        <RankingCard
          rank={1}
          name="nosh（ナッシュ）"
          tagline="糖質30g以下 × 60種類以上。ダイエッターNo.1支持"
          color="bg-yellow-50"
          features={[
            "全メニュー糖質30g以下・塩分2.5g以下",
            "平均カロリー約350kcal",
            "たんぱく質平均約20g",
            "アプリでPFC管理が簡単",
          ]}
          price="599円〜（10食プラン）"
          shipping="913円〜（関東）"
          pros={[
            "糖質・カロリー・PFCをアプリで確認して選べる",
            "低糖質スイーツ（ドーナツ等）もあり甘いもの我慢不要",
            "60種類以上で飽きにくい。毎週新メニュー追加",
            "nosh club割引で最安1食499円まで下がる",
          ]}
          cons={[
            "送料が地域差大（北海道2,145円）",
            "おかずのみ（ご飯なし）",
            "メニューによってカロリーが200〜450kcalとばらつきあり",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          ダイエット向け宅配弁当で最もおすすめなのがnosh。全メニュー糖質30g以下で、アプリで糖質・カロリー・たんぱく質を確認しながらメニューを選べるのが最大の強み。「低糖質なのに美味しい」と口コミでも高評価です。初回3,000円OFFキャンペーンで10食2,990円（1食299円）から始められます。詳しくは<Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline">nosh(ナッシュ)の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={2}
          name="三ツ星ファーム"
          tagline="350kcal以下 × レストラン品質。美味しくダイエット"
          color="bg-amber-50"
          features={[
            "全メニュー350kcal以下",
            "糖質25g以下・たんぱく質15g以上",
            "プロの料理人監修",
            "化学調味料・合成着色料不使用",
          ]}
          price="626円〜（14食プラン）"
          shipping="990円〜（関東）"
          pros={[
            "カロリー350kcal以下が保証されている",
            "味のクオリティが業界トップクラス",
            "ダイエット中でも「食べる楽しみ」を維持できる",
          ]}
          cons={[
            "noshより1食あたり少し高い",
            "アプリがない（Web注文のみ）",
            "メニュー変更の自由度がnoshほど高くない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          「ダイエット食でも妥協なく美味しいものが食べたい」方には三ツ星ファーム。350kcal以下・糖質25g以下・たんぱく質15g以上の三ツ星基準で、プロの料理人が監修したメニューは「ダイエット食とは思えない」クオリティ。詳しくは<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline">三ツ星ファームの口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={3}
          name="食宅便（低糖質セレクト）"
          tagline="糖質10g以下。本格的な糖質制限ダイエットに"
          color="bg-blue-50"
          features={[
            "1食あたり糖質10g以下",
            "日清医療食品の管理栄養士が設計",
            "約160種類のメニュー",
            "お試しセット4食1,980円",
          ]}
          price="560円〜（7食プラン）"
          shipping="780円"
          pros={[
            "糖質10g以下は業界最厳のストイックさ",
            "医療食品メーカーの信頼性",
            "1食560円〜のコスパ",
          ]}
          cons={[
            "メニューが自分で選べない（セット制）",
            "味は素朴（レストラン品質ではない）",
            "アプリがない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          短期集中で体重を落としたい方、厳密な糖質管理が必要な方には食宅便の低糖質セレクトがおすすめ。1食あたり糖質10g以下はnosh（30g以下）の3分の1以下で、スーパー糖質制限に対応。日清医療食品の管理栄養士が設計しているため栄養バランスも安心。詳しくは<Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark underline">食宅便の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={4}
          name="ウェルネスダイニング"
          tagline="糖質制限食 × カロリー制限食。管理栄養士に無料相談"
          color="bg-green-50"
          features={[
            "糖質制限食（糖質15g以下）",
            "カロリー制限食（240kcal±10%）",
            "管理栄養士に無料で栄養相談",
            "定期便で送料半額（385円）",
          ]}
          price="663円〜（7食プラン）"
          shipping="770円〜（定期便385円）"
          pros={[
            "糖質制限食とカロリー制限食の2コースが選べる",
            "管理栄養士に個別の食事相談ができる",
            "送料が良心的（定期便385円）",
          ]}
          cons={[
            "メニューが自分で選べない（コース制）",
            "味が素朴でダイエットのモチベーションが上がりにくい",
            "解約が電話のみ",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          糖尿病予備群などで医師から食事制限を指示されている方、プロに相談しながらダイエットしたい方にはウェルネスダイニング。管理栄養士に無料で「自分に合った糖質量やカロリー量」を相談できるのは他社にない強み。詳しくは<Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark underline">ウェルネスダイニングの口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={5}
          name="筋肉食堂DELI"
          tagline="高たんぱく × 低脂質。筋トレ＋ダイエットに最適"
          color="bg-purple-50"
          features={[
            "たんぱく質30g以上のメニューが豊富",
            "PFCバランスに特化した設計",
            "ダイエット・バルクアップ・メンテナンスの3コース",
            "アスリートやトレーナーも利用",
          ]}
          price="748円〜（ダイエットコース）"
          shipping="860円〜"
          pros={[
            "高たんぱく×低脂質で筋肉を維持しながらダイエット",
            "PFCバランスが徹底されている",
            "ボリュームがあり満足感が高い",
          ]}
          cons={[
            "1食あたりの価格がやや高い",
            "味の好みが分かれる（筋トレ飯感が強い）",
            "メニュー数がnoshほど多くない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          筋トレやジム通いをしながらダイエットしている方には筋肉食堂DELI。たんぱく質30g以上の高たんぱくメニューで、ダイエット中の筋肉量維持をサポート。PFCバランスに特化した設計はアスリートやパーソナルトレーナーからも高評価です。
        </p>

        {/* ===== 詳細レビュー ===== */}
        <SectionHeading id="detail-review">各サービスの詳細レビュー</SectionHeading>

        <SubHeading>nosh（ナッシュ） - ダイエット総合力No.1</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          noshがダイエット宅配弁当で1位の理由は「糖質管理の手軽さ」。アプリのフィルター機能で「糖質の低い順」「カロリーの低い順」「たんぱく質の高い順」にメニューをソートでき、自分のダイエット目標に合ったメニューを簡単に見つけられます。低糖質スイーツ（ロールケーキ・ドーナツ・チーズケーキ等）もすべて糖質30g以下で、「甘いものが食べたい」欲求もヘルシーに満たせます。nosh clubの継続割引で最大16.55%OFF（1食499円）まで下がるため、長期のダイエットにもコスパ良好。初回3,000円OFFキャンペーンで気軽に始められます。
        </p>

        <SubHeading>三ツ星ファーム - 美味しさ最優先のダイエット食</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          三ツ星ファームの最大の特徴は「ダイエット食なのにレストラン品質」。一流シェフが監修したメニューは彩りも味も妥協なし。カロリー350kcal以下・糖質25g以下・たんぱく質15g以上の「三ツ星基準」を全メニューがクリアしており、数値面でもダイエットに最適。化学調味料・合成着色料不使用で体にも優しい。初回7食1,980円（1食283円）のお試しプランで味を確認してからスタートできます。
        </p>

        <SubHeading>食宅便（低糖質セレクト） - 厳密な糖質制限に</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          食宅便の低糖質セレクトは、1食あたり糖質10g以下という業界最厳の糖質制限を実現。noshの糖質30g以下、三ツ星ファームの25g以下と比べて圧倒的にストイック。短期集中のケトジェニックダイエットや、医師から糖質制限を指示された方に最適です。日清医療食品が病院や介護施設に食事を提供してきた実績があり、医療レベルの栄養管理が強み。
        </p>

        <SubHeading>ウェルネスダイニング - プロに相談しながらダイエット</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          ウェルネスダイニングは糖質制限食（糖質15g以下）とカロリー制限食（240kcal±10%）の2コースがダイエットに対応。最大の特徴は管理栄養士への無料電話相談。「自分にはどのコースが合う？」「糖質制限とカロリー制限、どちらが効果的？」といった個別の相談ができるのは、ダイエット初心者にとって大きな安心材料です。
        </p>

        <SubHeading>筋肉食堂DELI - 筋トレ×ダイエットの最適解</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          筋肉食堂DELIは渋谷・六本木のレストラン「筋肉食堂」が運営する宅配弁当。ダイエットコースはカロリーを抑えながらたんぱく質30g以上を確保し、筋肉量を維持しながら体脂肪を落とすことに特化。PFCバランス（たんぱく質・脂質・炭水化物）が細かく設計されており、ジム通い中の方やボディメイク中の方に特に人気。価格は1食748円〜とやや高めですが、パーソナルジムの食事指導（月2〜3万円）を考えれば十分コスパ良好です。
        </p>

        {/* ===== 料金比較 ===== */}
        <SectionHeading id="price-compare">料金比較表</SectionHeading>

        <SubHeading>5社の料金・栄養素比較一覧</SubHeading>
        <ComparisonTable
          headers={["サービス", "1食あたり", "送料", "糖質", "カロリー", "たんぱく質"]}
          rows={[
            ["nosh", "599円〜", "913円〜", "30g以下", "平均350kcal", "平均20g"],
            ["三ツ星ファーム", "626円〜", "990円〜", "25g以下", "350kcal以下", "15g以上"],
            ["食宅便", "560円〜", "780円", "10g以下", "約250kcal", "約15g"],
            ["ウェルネスダイニング", "663円〜", "770円〜", "15g以下", "240kcal±10%", "約15g"],
            ["筋肉食堂DELI", "748円〜", "860円〜", "約15g", "約400kcal", "30g以上"],
          ]}
        />

        <SubHeading>月額コストシミュレーション（週5回夕食利用・関東在住）</SubHeading>
        <ComparisonTable
          headers={["サービス", "食材費/月", "送料/月", "月額合計", "1食あたり実質"]}
          rows={[
            ["nosh（10食×2回）", "11,980円", "1,826円", "13,806円", "690円"],
            ["三ツ星ファーム（14食+7食）", "13,000円", "1,980円", "14,980円", "713円"],
            ["食宅便（7食×3回）", "11,760円", "2,340円", "14,100円", "671円"],
            ["ウェルネスダイニング（14食+7食）", "13,716円", "770円", "14,486円", "690円"],
            ["筋肉食堂DELI（10食×2回）", "14,960円", "1,720円", "16,680円", "834円"],
          ]}
        />

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">コスパの結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>コスパ最強：食宅便</strong>（月14,100円/1食671円）——最も安く本格的な糖質制限が可能</li>
            <li><strong>バランス良好：nosh</strong>（月13,806円/1食690円）——コスパと自由度の両立。継続割引でさらに安くなる</li>
            <li><strong>味重視：三ツ星ファーム</strong>（月14,980円/1食713円）——美味しさと栄養管理の両立</li>
            <li><strong>ボディメイク：筋肉食堂DELI</strong>（月16,680円/1食834円）——高たんぱくの付加価値を考えれば妥当</li>
          </ul>
        </div>

        {/* ===== メニュー実例 ===== */}
        <SectionHeading id="menu-example">ダイエット向けメニューの実例紹介</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          各サービスの具体的なダイエット向けメニューを、栄養素付きで紹介します。「実際にどんなメニューが届くのか」をイメージしていただけます。
        </p>

        <SubHeading>nosh - 低糖質メニューの例</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "カロリー", "糖質", "たんぱく質", "脂質"]}
          rows={[
            ["チリハンバーグステーキ", "360kcal", "17.9g", "21.6g", "21.3g"],
            ["鮭のマッシュポテトアヒージョ", "285kcal", "15.8g", "18.2g", "16.1g"],
            ["旨だれペッパーチキン", "402kcal", "14.3g", "25.2g", "27.5g"],
            ["ロールケーキ（プレーン）", "161kcal", "4.7g", "3.2g", "14.6g"],
          ]}
        />

        <SubHeading>三ツ星ファーム - 三ツ星基準メニューの例</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "カロリー", "糖質", "たんぱく質"]}
          rows={[
            ["濃厚トマトソースとチーズの贅沢ハンバーグ", "312kcal", "17.3g", "18.5g"],
            ["タルタル南蛮 若鶏のもも肉揚げ", "348kcal", "22.1g", "21.3g"],
            ["回鍋肉風 豚と野菜の味噌炒め", "290kcal", "18.5g", "16.8g"],
          ]}
        />

        <SubHeading>1日のダイエット食事プラン例（1日1,400kcal目標）</SubHeading>
        <ComparisonTable
          headers={["食事", "メニュー例", "カロリー", "糖質"]}
          rows={[
            ["朝食", "ギリシャヨーグルト200g+グラノーラ30g+バナナ1本", "約350kcal", "約50g"],
            ["昼食", "コンビニサラダ+サラダチキン+おにぎり1個", "約500kcal", "約60g"],
            ["夕食", "nosh「チリハンバーグステーキ」（ご飯なし）", "360kcal", "17.9g"],
            ["間食", "nosh「ロールケーキ」", "161kcal", "4.7g"],
            ["合計", "", "約1,371kcal", "約132.6g"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          上記プランは1日の糖質を約130gに抑えた「スタンダード糖質制限」レベル。夕食をnoshに置き換えるだけで、面倒な糖質計算をせずに適切な糖質量に収められます。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ
              key={i}
              question={`Q${i + 1}. ${faq.question}`}
              answer={faq.answer}
            />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：ダイエットの宅食選び、迷ったらまずnoshから</SectionHeading>

        <SubHeading>目的別おすすめ早見表</SubHeading>
        <ComparisonTable
          headers={["あなたのダイエット目的", "おすすめサービス"]}
          rows={[
            ["迷ったらこれ（万能型）", "nosh（ナッシュ）"],
            ["美味しさ重視でダイエット", "三ツ星ファーム"],
            ["本格的な糖質制限", "食宅便（低糖質セレクト）"],
            ["プロに相談しながら管理", "ウェルネスダイニング"],
            ["筋トレ+ダイエット", "筋肉食堂DELI"],
            ["コスパ最優先", "nosh（継続割引活用） or 食宅便"],
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
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">食宅便</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネス</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">筋肉食堂</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ダイエットおすすめ度", 5, 4, 4, 4, 3],
                  ["糖質制限", 4, 4, 5, 5, 4],
                  ["味", 4, 5, 3, 3, 3],
                  ["コスパ", 5, 3, 4, 3, 2],
                  ["続けやすさ", 5, 4, 3, 3, 3],
                ].map(([label, ...scores], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium text-xs">{label as string}</td>
                    {(scores as number[]).map((score, j) => (
                      <td key={j} className="border border-warm-border px-3 py-2">
                        <StarRating count={score} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            ダイエット向け宅配弁当で迷ったら、まずは<strong>nosh</strong>から始めるのがおすすめです。全メニュー糖質30g以下のスタンダード糖質制限に対応し、アプリで栄養素を確認しながらメニューを選べる自由度、低糖質スイーツまである豊富なラインナップが魅力。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            初回3,000円OFFキャンペーンを利用すれば10食プランが2,990円（1食299円）でスタートできます。合わなければマイページから即解約OK。
          </p>
          <p className="text-sm leading-relaxed">
            「カロリー計算が面倒」「糖質制限を始めたいけど何を食べればいいかわからない」——そんなダイエットの悩み、宅配弁当で一気に解決してみませんか。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            nosh(ナッシュ)の口コミ・評判を徹底調査
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/toushitsu-seigen-osusume/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            糖質制限におすすめの宅配弁当ランキング
          </Link>
        </div>

        {/* Author info */}
        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">
              編
            </div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">
                宅配弁当・栄養食の専門ライターチーム。実際にサービスを利用し、公平な比較情報をお届けします。
              </p>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】三ツ星ファームの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">
                【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
              </Link>
            </li>
            <li>
              <Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】糖質制限におすすめの宅配弁当ランキングTOP5
              </Link>
            </li>
            <li>
              <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
