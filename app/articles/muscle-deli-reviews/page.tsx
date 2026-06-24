import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "マッスルデリの口コミ・評判【2026年最新】高タンパク冷凍宅配の実力を徹底レビュー";
const ARTICLE_DESCRIPTION =
  "マッスルデリ(Muscle Deli)の口コミ・評判を徹底調査。LEAN/MAINTAIN/GAIN/LOW CARBの4プランの栄養設計、料金、味、続けやすさを公式情報ベースで解説。筋トレ・ダイエット中の方が本当に選ぶべきかを判定します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/muscle-deli-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "マッスルデリ 口コミ, マッスルデリ 評判, Muscle Deli 口コミ, マッスルデリ 料金, マッスルデリ プラン, 高タンパク 宅配弁当, 筋トレ 弁当, ダイエット 宅配, 高タンパク 冷凍弁当",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-05-28T00:00:00+09:00",
    modifiedTime: "2026-05-28T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "マッスルデリは本当に筋トレやボディメイクに効果ありますか？",
    answer:
      "マッスルデリは「高タンパク・低脂質・栄養バランス」をコンセプトに設計された宅配食です。公式情報によれば、LEANプランは1食あたりタンパク質30g以上、MAINTAINは35g以上、GAINは50g以上を確保しており、PFCバランス(タンパク質・脂質・糖質)管理が必要なトレーニーやダイエッターに向く構成です。ただし「食べるだけで痩せる/筋肉がつく」わけではなく、適切な運動と総摂取カロリーのコントロールが前提です。最新の栄養成分は公式サイト(https://muscledeli.jp/)で必ず確認してください。",
  },
  {
    question: "LEAN/MAINTAIN/GAIN/LOW CARBはどう選べばいい？",
    answer:
      "目的別に4プランが用意されています。【LEAN(350-450kcal/タンパク質30g以上/脂質15g以下/糖質35g以下)】減量したい女性向け。【MAINTAIN(450-550kcal/タンパク質35g以上)】減量したい男性・体型維持したい女性向け。【GAIN(550-750kcal/タンパク質50g以上)】増量・筋肥大が目的の男性向け。【LOW CARB(350kcal以上/タンパク質20g以上/糖質15g以下)】糖質制限を厳しくしたい方向け。基礎代謝や活動量、目的に合わせて選びましょう。",
  },
  {
    question: "マッスルデリの賞味期限と保存方法は？",
    answer:
      "冷凍便で届くため、家庭の冷凍庫(-18℃以下)で保存します。賞味期限は商品により異なりますが、冷凍宅配弁当は一般的に製造日から数ヶ月～1年程度に設定されています。届いた商品のパッケージに記載の期限を必ず確認してください。電子レンジでの加熱方法もパッケージ表記の出力(W数)と時間に従うのが基本です。",
  },
  {
    question: "解約は簡単にできますか？縛りはありますか？",
    answer:
      "マッスルデリには都度購入と定期購入があります。定期購入には継続回数の条件が設定されている場合があるため、申込前に必ず公式サイトの「特定商取引法に基づく表記」と購入画面の規約を確認してください。スキップや配送サイクル変更が可能か、いつまでに連絡が必要かも公式マイページで確認できます。",
  },
  {
    question: "1食あたりの価格はどれくらい？noshより高い？",
    answer:
      "マッスルデリはタンパク質量30g以上(LEAN)～50g以上(GAIN)と高タンパク設計のため、一般的な冷凍宅配弁当より1食あたりの単価は高めです。nosh(599円～)や三ツ星ファーム(626円～)と比べると割高ですが、タンパク質単価(円/g)で見るとプロテイン+鶏むね自炊と同等以上のコスパになるケースもあります。最新の正確な価格・送料は公式サイト(https://muscledeli.jp/)で必ずご確認ください。",
  },
];

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
          <span className="text-foreground/70">口コミ・評判</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">マッスルデリの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "マッスルデリとは？基本情報まとめ" },
    { id: "plans", label: "4つのプラン(LEAN/MAINTAIN/GAIN/LOW CARB)解説" },
    { id: "good-reviews", label: "マッスルデリの良い口コミ・評判" },
    { id: "bad-reviews", label: "マッスルデリの悪い口コミ・評判" },
    { id: "merits", label: "口コミから分かるメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "recommend", label: "マッスルデリがおすすめな人・おすすめしない人" },
    { id: "comparison", label: "他の高タンパク宅配との比較" },
    { id: "faq", label: "よくある質問(FAQ)" },
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

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="my-6 text-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md"
      >
        {children}
      </a>
      <p className="text-xs text-warm-gray mt-2">※公式サイトへ移動します</p>
    </div>
  );
}

export default function MuscleDeliReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-05-28T00:00:00+09:00",
    dateModified: "2026-06-24T00:00:00+09:00",
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      { "@type": "ListItem", position: 3, name: "マッスルデリの口コミ・評判" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            口コミ・評判
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link></span>
          </div>
          <div className="mt-3 text-xs text-warm-gray bg-yellow-50 border border-yellow-200 rounded p-2">
            PR: 本記事には広告(アフィリエイトリンク)が含まれます。価格・プラン内容は変更される場合があるため、最新情報は必ず<a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>でご確認ください。
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「筋トレしてるけど、自炊で高タンパク食を毎日作るのがしんどい…」「鶏むね肉とブロッコリーに飽きた…」そんなトレーニーやダイエッターの強い味方として知られるのがマッスルデリ(Muscle Deli)です。
          </p>
          <p className="mb-3">
            この記事では、<strong>マッスルデリの口コミ・評判を徹底リサーチ</strong>。LEAN/MAINTAIN/GAIN/LOW CARBの4プランの栄養設計を公式情報ベースで整理し、味・コスパ・続けやすさを公平に評価します。
          </p>
          <p>
            「<strong>本当に筋トレ・ダイエットに役立つのか</strong>」「価格に見合う価値があるか」を判断できる内容にまとめました。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：マッスルデリはこんな人に向いています</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm leading-relaxed mb-4">
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p><ul className="space-y-1 list-disc list-inside"><li>1食タンパク質30g以上〜50g以上の高タンパク設計で、PFC計算なしでも食事が整う</li><li>減量・増量・糖質制限など目的別4プランを切り替えられる</li><li>メイン肉・魚料理のボリュームがあり、食べごたえ・満足感が高い</li></ul></div>
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-warm-gray mb-2">△ 注意したい点</p><ul className="space-y-1 list-disc list-inside"><li>1食あたりの単価が一般的な冷凍宅配弁当より高め</li><li>節約目的・栄養を気にしない一般的な用途には不向き</li><li>味の方向性やメニューの好みが分かれる場合がある</li></ul></div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">マッスルデリ 公式サイトで最新の料金・お試しを見る →</a>
        </div>

        <TableOfContents />

        <SectionHeading id="about">マッスルデリとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          マッスルデリ(Muscle Deli)は、株式会社Muscle Deliが運営する、ボディメイク・ダイエット向けの高タンパク冷凍宅配弁当サービスです。「<strong>目的別に栄養設計された食事を、温めるだけで食べられる</strong>」というコンセプトで、トレーニー・モデル・俳優・経営者など、体づくりに本気で取り組む層から支持を集めています。
        </p>

        <SubHeading>マッスルデリの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社Muscle Deli"],
            ["プラン", "LEAN / MAINTAIN / GAIN / LOW CARB の4種類"],
            ["メイン用途", "ダイエット/ボディメイク/筋肥大/糖質制限"],
            ["タンパク質量", "1食 20g〜50g以上(プラン別)"],
            ["配送形態", "冷凍便(温めるだけ)"],
            ["購入形態", "都度購入 / 定期購入"],
            ["対応エリア", "全国(離島など一部除く)"],
            ["公式サイト", "https://muscledeli.jp/"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: マッスルデリ公式サイト(2026年5月時点)。最新情報は公式でご確認ください。</p>

        <SubHeading>マッスルデリの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "目的別に4プランを用意(PFC設計済)",
              text: "LEAN(女性ダイエット)、MAINTAIN(男性ダイエット/女性体型維持)、GAIN(増量)、LOW CARB(糖質制限)の4プラン。それぞれカロリー・タンパク質・脂質・糖質の上下限が明確に設計されており、自分でPFC計算をしなくても目的に合った食事が取れます。",
            },
            {
              title: "メイン料理を中心にした栄養価重視のメニュー",
              text: "鶏肉・牛肉・豚肉・魚介の主菜にサラダや雑穀米などを組み合わせた1ボックス構成。冷凍弁当としては量・タンパク質ともに多めで、トレーニング後の食事や減量中のメインに据えやすい構成です。",
            },
            {
              title: "目的が変わってもプラン変更しやすい",
              text: "減量フェーズではLEAN/MAINTAIN、増量フェーズではGAINに切り替えるなど、トレーニングサイクルに合わせて食事を変えられます。糖質を一気に絞りたいタイミングではLOW CARBという選択肢も。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="plans">4つのプラン(LEAN/MAINTAIN/GAIN/LOW CARB)解説</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          マッスルデリ最大の特徴は、目的別の4プランで栄養設計が明確に分けられている点です。それぞれのカロリー・PFCバランスを表で整理しました。
        </p>

        <ComparisonTable
          headers={["プラン", "カロリー", "タンパク質", "脂質", "糖質", "想定ターゲット"]}
          rows={[
            ["LEAN", "350〜450kcal", "30g以上", "15g以下", "35g以下", "減量したい女性"],
            ["MAINTAIN", "450〜550kcal", "35g以上", "20g以下", "55g以下", "減量したい男性/体型維持の女性"],
            ["GAIN", "550〜750kcal", "50g以上", "25g以下", "75g以下", "増量・筋肥大したい男性"],
            ["LOW CARB", "350kcal以上", "20g以上", "—", "15g以下", "厳しい糖質制限をしたい方"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: マッスルデリ公式サイト掲載のPFC設計値(2026年5月時点)。メニューにより数値は変動します。最新情報は公式でご確認ください。</p>

        <SubHeading>プラン選びの目安</SubHeading>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>ダイエット中の女性(体重50kg前後/活動量普通):</strong> LEAN推奨。1日2〜3食の置き換えで自然にPFCが整います。</li>
            <li><strong>ダイエット中の男性(体重70kg前後):</strong> MAINTAINが基本。脂質と糖質を抑えつつタンパク質35g以上を確保。</li>
            <li><strong>増量・バルクアップ期(男性70〜80kg):</strong> GAIN。1食でタンパク質50g以上、カロリー550kcal以上を確保。</li>
            <li><strong>ケトジェニックや厳しい糖質制限:</strong> LOW CARB。糖質15g以下に抑えながらタンパク質20g以上。</li>
          </ul>
        </div>

        <CTAButton href="https://muscledeli.jp/">マッスルデリ公式サイトを見る</CTAButton>

        <SectionHeading id="good-reviews">マッスルデリの良い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          SNSやレビューサイトで多く見られるマッスルデリへのポジティブな声を、4つのテーマに整理しました。なお、本記事では特定個人の架空レビューは掲載せず、公開されている評判の傾向を要約しています。
        </p>

        <SubHeading>1. タンパク質量が圧倒的に多い</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          1食あたりタンパク質30g以上(LEAN)から50g以上(GAIN)を確保しているサービスは、冷凍宅配弁当業界でも上位クラス。<strong>「鶏むね肉を毎日茹でる手間が消えた」「PFC計算しなくても食事が整う」</strong>といった声が多く、トレーニング中の継続利用者から高い支持を得ています。
        </p>

        <SubHeading>2. メイン肉料理のボリュームが満足度高い</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          チキン・ビーフ・ポーク・シーフードといったメイン料理に重点を置いた構成のため、食べごたえに関する評価が高い傾向です。「<strong>普通の冷凍弁当より一食の満足感が強い</strong>」「ジムの後の補食として満たされる」といったコメントが目立ちます。
        </p>

        <SubHeading>3. メニューの多様性が継続を助ける</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          和洋中・エスニックなど味の方向性が異なるメニューが揃っているため、「<strong>自炊では作らないようなメニューが食べられる</strong>」「飽きずに続けられる」という評価が目立ちます。鶏むねとブロッコリーだけの自炊と比べると食事の楽しさが段違いとの声も。
        </p>

        <SubHeading>4. 目的別プランがあるので「迷わない」</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          「<strong>減量・増量・糖質制限と目的に応じてプランを切り替えられる</strong>」のは他社にない強み。コンテスト出場者やフィジーカーが減量期にLEAN、増量期にGAINを使い分ける運用も見られます。
        </p>

        <SectionHeading id="bad-reviews">マッスルデリの悪い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          一方で、ネガティブな評価も確実に存在します。購入前に知っておくべきポイントとして整理します。
        </p>

        <SubHeading>1. 1食あたりの単価が高い</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          高タンパク・大容量設計のため、1食あたりの価格はnoshや三ツ星ファームと比較して<strong>高めの設定</strong>です。「<strong>続けるには結構な出費</strong>」「コスパは正直微妙」という声が目立ちます。ただしタンパク質単価(円/g)で見ると、プロテイン+鶏むね自炊と同等以上の効率になるケースもあります。<span className="text-xs text-warm-gray">※最新の価格は公式サイトで必ずご確認ください。</span>
        </p>

        <SubHeading>2. 冷凍庫スペースを取る</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          1食のボリュームが大きい分、容器も大きめ。「<strong>冷凍庫に入りきらない</strong>」「10食まとめ買いは家庭用冷蔵庫だと厳しい」という声があります。対策としては配送頻度を上げて少量ずつ受け取るのが現実的です。
        </p>

        <SubHeading>3. 味の好みが分かれるメニューがある</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          全体的に高評価ですが、「エスニック系のスパイスが強いメニューが苦手」「ソースが少し濃いと感じることがある」など、味の方向性が好みに合わないケースも報告されています。初回は少なめ食数で試して相性を確認するのが安全です。
        </p>

        <SectionHeading id="merits">口コミから分かるメリット5つ</SectionHeading>

        {[
          {
            num: 1,
            title: "PFC計算ゼロで筋トレ食が完成する",
            text: "減量中・増量中はマクロ栄養素(P/F/C)の管理が肝。マッスルデリは1食ごとにPFCの範囲が明示されているため、自分で計算する必要がほぼありません。「アプリで食事を記録→マクロが合うか確認→足りなければプロテイン1杯」というシンプルな運用ができます。",
          },
          {
            num: 2,
            title: "減量フェーズと増量フェーズで切り替えられる",
            text: "コンテスト前の減量はLEAN、オフシーズンの増量はGAINと、フェーズに応じてプランを切り替えられるのは他社にない強み。食事の方向性を変える=新しい献立を考える、というストレスが消えます。",
          },
          {
            num: 3,
            title: "メイン料理の満足感が高い",
            text: "肉・魚のメインがしっかりした構成で、噛みごたえ・食べごたえともに充実。減量中でも「我慢している感」が少なく、ストレスフルな食事制限を回避しやすいです。",
          },
          {
            num: 4,
            title: "外食やコンビニ飯より圧倒的に栄養が整う",
            text: "コンビニ弁当やチェーン店の定食は脂質・糖質過多、タンパク質不足になりがち。マッスルデリは1食でタンパク質30g以上が確保されるため、忙しい日のランチ・夕食代替として極めて優秀です。",
          },
          {
            num: 5,
            title: "電子レンジで5〜7分の手間",
            text: "鶏むね茹でる/サラダ作る/タッパー詰めるという自炊フローと比較すると、レンジ加熱だけで完結する時短効果は絶大。可処分時間が増えるという副次効果もあります。",
          },
        ].map((merit) => (
          <div key={merit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {merit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{merit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{merit.text}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="demerits">注意すべきデメリット3つ</SectionHeading>

        {[
          {
            num: 1,
            title: "1食単価が一般的な冷凍宅配弁当より高い",
            text: "noshが599円〜、三ツ星ファームが626円〜なのに対し、マッスルデリはタンパク質量を確保している分、1食単価は高めです。家計に占める割合を計算したうえで導入するのが賢明。長期継続するなら定期購入の割引適用条件を必ず公式で確認してください。",
          },
          {
            num: 2,
            title: "ご飯(雑穀米)が付いてくる=糖質制限派には合わないメニューもある",
            text: "MAINTAIN/GAINには雑穀米などの主食が含まれるメニューがあるため、厳格な糖質制限(ケトジェニック等)をしている方はLOW CARBプラン一択になります。プラン名と栄養成分を必ず確認しましょう。",
          },
          {
            num: 3,
            title: "受取の冷凍便対応が必要",
            text: "ヤマト運輸クール宅急便など冷凍便で届くため、不在時の置き配ができない場合があります。再配達の手間や、まとめ買い時の冷凍庫スペース確保は事前にプランニングが必要です。",
          },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {demerit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{demerit.text}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="recommend">マッスルデリがおすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>マッスルデリがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "筋トレ・ボディメイク中で高タンパク食を続けたい人",
              "減量中で自炊する時間が取れない人",
              "PFCバランスを意識した食事を簡単に取りたい人",
              "コンテスト出場者・モデル・俳優など見た目を作る職業の人",
              "自炊のレパートリーが鶏むねとブロッコリーで限界に達した人",
              "プロテインだけでは満足感が足りない人",
              "増量期と減量期で食事を切り替えたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>マッスルデリをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "1食あたりの単価を最重視する人(→nosh, まごころケア食がおすすめ)",
              "筋トレやダイエットを特にしておらず、栄養バランスを気にしない人",
              "冷凍庫のスペースに余裕がない一人暮らしの人",
              "腎臓病など医療レベルの食事制限が必要な人(→ウェルネスダイニング)",
              "高齢者向けの軟らかい食事が必要な人(→食宅便/まごころケア食)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SectionHeading id="comparison">他の高タンパク宅配との比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          高タンパクをウリにする冷凍宅配サービスは複数あります。代表的な3社を比較してみましょう。
        </p>

        <ComparisonTable
          headers={["項目", "マッスルデリ", "GOFOOD", "nosh"]}
          rows={[
            ["タンパク質(1食)", "20〜50g以上", "20〜40g", "15〜25g"],
            ["糖質(1食)", "15〜75g(プラン別)", "10〜20g", "30g以下"],
            ["プラン分け", "目的別4プラン", "低糖質中心", "なし(自由選択)"],
            ["想定ターゲット", "トレーニー/ボディメイク", "低糖質ダイエッター", "幅広い層"],
            ["1食価格帯", "高め", "中〜高め", "低〜中"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※価格・栄養成分はメニューにより変動。最新情報は各公式サイトでご確認ください。</p>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">使い分けの目安</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>マッスルデリ:</strong> ボディメイク本気組向け。タンパク質量と目的別プランで圧倒。</li>
            <li><strong>GOFOOD:</strong> 低糖質を最重視するダイエッター向け。</li>
            <li><strong>nosh:</strong> 日常使い・ライトダイエット・コスパ重視の人向け。</li>
          </ul>
        </div>

        <p className="text-sm mb-6 leading-relaxed">
          高タンパク質の宅配弁当全体を比較したい方は、当サイトの<Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark underline">高タンパク質 冷凍宅配弁当ランキング</Link>もあわせてご覧ください。ダイエット目的全般は<Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline">ダイエット向け宅配弁当のおすすめ</Link>、糖質制限なら<Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark underline">糖質制限おすすめ宅配</Link>を参考にしてください。
        </p>

        <SectionHeading id="faq">よくある質問(FAQ)</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ
              key={i}
              question={`Q${i + 1}. ${faq.question}`}
              answer={faq.answer}
            />
          ))}
        </div>

        <SectionHeading id="summary">まとめ:マッスルデリはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">マッスルデリの総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度(ボディメイク用途)", 5],
                  ["タンパク質量", 5],
                  ["メニューの多様性", 4],
                  ["コスパ(円/g換算)", 4],
                  ["コスパ(1食単価)", 3],
                  ["プラン設計の分かりやすさ", 5],
                ].map(([label, count], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-white/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                    <td className="border border-warm-border px-3 py-2"><StarRating count={count as number} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            マッスルデリは<strong>「高タンパク×目的別プラン×時短」</strong>を求めるトレーニー・ダイエッターにとって、現状もっともバランスの良い宅配サービスのひとつです。1食単価は高めですが、自炊でPFCを揃える手間とタンパク質コストを考慮すると、十分検討に値します。
          </p>
          <p className="text-sm leading-relaxed">
            まずは少食数の都度購入で味と相性を確認し、続けられそうなら定期購入に切り替えるのがリスクの低い導入方法です。料金・プラン詳細は変更される可能性があるため、申込前に必ず<a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>で最新情報をご確認ください。
          </p>
        </div>

        <CTAButton href="https://muscledeli.jp/">マッスルデリ公式サイトをチェック</CTAButton>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">高タンパク質 冷凍宅配弁当ランキング</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">ダイエットおすすめ宅配</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">糖質制限おすすめ宅配</Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
