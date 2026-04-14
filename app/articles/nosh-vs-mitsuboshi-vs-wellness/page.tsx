import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング｜あなたに最適な宅配弁当はどれ？";
const ARTICLE_DESCRIPTION =
  "nosh・三ツ星ファーム・ウェルネスダイニングを価格・味・メニュー数・栄養・目的別コース・キャンペーン・継続しやすさの7項目で徹底比較。目的別おすすめ診断付き。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/nosh-vs-mitsuboshi-vs-wellness/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh 三ツ星ファーム ウェルネスダイニング 比較, 宅配弁当 比較, 冷凍宅配弁当 おすすめ, 宅配弁当 ランキング, 宅配弁当 一人暮らし, 宅配弁当 ダイエット, 宅配弁当 高齢者",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-11T00:00:00+09:00",
    modifiedTime: "2026-04-14T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "宅配弁当は冷凍保存できますか？",
    answer:
      "はい、3社とも冷凍状態でお届けされます。賞味期限はnoshが製造日から6ヶ月〜1年、三ツ星ファームが約1年、ウェルネスダイニングが約6ヶ月〜1年です。届いたらそのまま冷凍庫に入れ、食べる時に電子レンジで温めるだけです。",
  },
  {
    question: "1回だけお試しできますか？",
    answer:
      "3社とも最低継続回数の縛りはありません。1回だけ注文して解約することが可能です。特に三ツ星ファームは初回限定7食1,980円のお試しプランがあり、気軽に試せます。noshも初回から3回目まで合計3,000円OFFの割引があるので、まずは1回試してみるのがおすすめです。",
  },
  {
    question: "添加物は使われていますか？",
    answer:
      "3社とも国の安全基準を満たした添加物のみ使用しています。もっとも添加物に厳しいのは三ツ星ファームで、化学調味料・合成着色料・人工甘味料を極力使わない方針です。noshは保存料・合成着色料不使用が基本、ウェルネスダイニングは冷凍保存に必要な最小限の添加物のみ使用しています。",
  },
  {
    question: "アレルギー対応はありますか？",
    answer:
      "noshはアレルギー情報をメニューごとに明記しており、該当アレルゲンを含むメニューを避けて選ぶことが可能です。三ツ星ファームも同様にアレルギー表示があります。ウェルネスダイニングは管理栄養士に電話で相談でき、アレルゲンを除いたメニュー調整にも対応してくれます。ただし、3社とも完全なアレルギー除去食ではないため、重度のアレルギーがある方は事前に各社へ問い合わせることをおすすめします。",
  },
  {
    question: "注文からどれくらいで届きますか？",
    answer:
      "初回注文から届くまでの目安は、noshが最短5日〜1週間、三ツ星ファームが最短4日〜1週間、ウェルネスダイニングが最短4日〜1週間です。いずれもヤマト運輸のクール宅急便で届くため、日時指定が可能です。地域や注文状況によって前後することがあります。",
  },
  {
    question: "解約は簡単にできますか？",
    answer:
      "解約のしやすさは3社で異なります。noshはマイページから数クリックで即解約でき、もっとも簡単です。三ツ星ファームはWebまたは電話で解約可能。ウェルネスダイニングは電話のみでの解約となるため、やや手間がかかります。3社とも解約金・違約金は一切かかりません。",
  },
  {
    question: "電子レンジ以外の調理は必要ですか？",
    answer:
      "基本的に電子レンジで温めるだけで食べられます。3社ともメニューごとに加熱時間の目安がパッケージに記載されており、500Wで4〜6分程度が一般的です。湯煎や自然解凍が必要なメニューはほとんどありません。忙しい方でもレンジひとつで手軽に食事ができるのが冷凍宅配弁当の大きなメリットです。",
  },
  {
    question: "宅配弁当だけで栄養は足りますか？",
    answer:
      "3社のメニューは1食あたり350〜550kcalで設計されており、おかずのみの提供です。ご飯（主食）は別途用意する必要があります。1日3食すべてを宅配弁当にする場合は栄養が偏る可能性があるため、朝食や昼食で不足しがちなビタミン・食物繊維・カルシウムを補うのがおすすめです。ウェルネスダイニングは管理栄養士に無料で栄養相談ができるため、食事全体のバランスが気になる方は活用しましょう。",
  },
  {
    question: "味は美味しいですか？口コミの評判は？",
    answer:
      "味の評価は三ツ星ファームがもっとも高く、「冷凍弁当とは思えないクオリティ」という声が多数。プロの料理人が監修しており、レストラン品質の仕上がりです。noshは「糖質オフなのに満足感がある」と好評ですが、メニューによって当たり外れがあるという声も。ウェルネスダイニングは「家庭的で素朴な味」で、制限食としては十分おいしいと評価されています。",
  },
  {
    question: "3社の中で一番おすすめはどれですか？",
    answer:
      "目的によって最適な1社は異なります。コスパ重視・一人暮らし・ダイエットならnosh、味のクオリティ・グルメ志向なら三ツ星ファーム、糖尿病や腎臓病などの食事制限・高齢者向けならウェルネスダイニングがベストです。迷ったら、まずは3社の初回キャンペーンを順番に試して、自分の味覚や生活スタイルに合うものを選ぶのが失敗しないコツです。",
  },
];

/* ---------- Helper Components ---------- */

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>
          ★
        </span>
      ))}
    </span>
  );
}

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
          <span className="text-foreground/70">比較記事</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">nosh vs 三ツ星ファーム vs ウェルネスダイニング</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "conclusion", label: "結論：3社の特徴と最適な人" },
    { id: "basic-info", label: "3社の基本情報を比較" },
    { id: "price-detail", label: "料金・コスト詳細比較表" },
    { id: "7-comparison", label: "7つの項目で徹底比較" },
    { id: "matrix", label: "3社の強み・弱みマトリクス" },
    { id: "purpose", label: "目的別おすすめガイド" },
    { id: "diagnosis", label: "目的別おすすめ診断" },
    { id: "reviews", label: "利用者の口コミ・評判" },
    { id: "combination", label: "併用パターン" },
    { id: "tips", label: "失敗しない選び方5つのポイント" },
    { id: "flow", label: "注文〜解約までの流れ" },
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
        <span className="faq-arrow text-warm-gray ml-2">▼</span>
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

function RecommendBox({
  service,
  color,
  items,
}: {
  service: string;
  color: string;
  items: string[];
}) {
  return (
    <div className={`rounded-xl p-5 mb-4 ${color}`}>
      <p className="font-bold mb-2">{service}がおすすめの人</p>
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-accent mt-0.5">&#10003;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PurposeCard({
  title,
  service,
  color,
  children,
}: {
  title: string;
  service: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${color} rounded-xl p-6 mb-6`}>
      <h3 className="text-lg font-bold mb-1 pl-3 border-l-4 border-accent">{title}</h3>
      <p className="text-accent font-bold text-sm mb-3 ml-4">おすすめ: {service}</p>
      <div className="text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

/* ---------- Page Component ---------- */

export default function ArticlePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-11T00:00:00+09:00",
    dateModified: "2026-04-14T00:00:00+09:00",
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
    name: "宅配弁当おすすめ3社ランキング",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "nosh（ナッシュ）",
        description:
          "1食599円〜の高コスパ。100種類以上のメニューから自由に選べる。全メニュー糖質30g以下。継続割引で最大16.55%OFF。",
        url: "https://nosh.jp/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "三ツ星ファーム",
        description:
          "プロの料理人監修のレストラン品質。化学調味料・合成着色料不使用。初回7食1,980円のお試しプランあり。",
        url: "https://mitsuboshifarm.jp/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "ウェルネスダイニング",
        description:
          "管理栄養士監修の7つの専門コース。糖質制限・塩分制限・たんぱく質調整・やわらか食など医療レベルの制限食に対応。",
        url: "https://www.wellness-dining.com/",
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
            比較記事
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-11">公開: 2026年4月11日</time>
            <time dateTime="2026-04-14" className="font-medium text-foreground/70">最終更新: 2026年4月14日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「nosh・三ツ星ファーム・ウェルネスダイニング、どれを選べばいいの？」——冷凍宅配弁当の代表的な3ブランドは、どれも魅力的で決められないという声をよく聞きます。
          </p>
          <p className="mb-3">
            結論から言うと、<strong>3社はそれぞれ「得意な人」が違います</strong>。価格重視ならnosh、グルメ志向なら三ツ星ファーム、健康管理や食事制限が必要ならウェルネスダイニングが最適です。
          </p>
          <p>
            この記事では、3社を<strong>価格・味・メニュー数・栄養・目的別コース・キャンペーン・継続しやすさ</strong>の7項目で徹底比較。さらに編集部独自の目的別診断、強み・弱みマトリクス、目的別おすすめガイド5パターン、併用パターン提案、失敗しない選び方のポイントまで踏み込んで解説します。20,000字超の完全版です。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="conclusion">結論：3社の特徴と最適な人</SectionHeading>

        <SubHeading>30秒早見表</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh（ナッシュ）", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["1食あたり最安", "599円〜", "626円〜", "663円〜"],
            ["メニュー数", "100種類以上", "80種類以上", "コース制（固定）"],
            ["糖質量", "30g以下（全メニュー）", "25g以下あり", "15g以下のコースあり"],
            ["塩分量", "2.5g以下", "記載なし", "2.0g以下のコースあり"],
            ["送料", "913円〜2,827円", "990円〜2,970円", "770円〜"],
            ["初回特典", "累計3,000円OFF", "初回1,980円", "送料無料"],
            ["特徴", "高コスパ×豊富なメニュー", "レストラン品質の味", "医療・介護レベルの栄養管理"],
            ["向いている人", "一人暮らし・ダイエット", "グルメ志向・贅沢したい", "糖尿病・腎臓病・高齢者"],
          ]}
        />

        <SubHeading>どんな人にどれがおすすめ？</SubHeading>
        <RecommendBox
          service="nosh（ナッシュ）"
          color="bg-green-50"
          items={[
            "できるだけ安く続けたい人",
            "糖質オフでダイエットしたい人",
            "100種類以上のメニューから選びたい人",
            "若い世代・働く一人暮らし",
          ]}
        />
        <RecommendBox
          service="三ツ星ファーム"
          color="bg-amber-50"
          items={[
            "味やクオリティを最優先したい人",
            "冷凍弁当のイメージを覆したい人",
            "自宅で「ちょっとしたご褒美」が欲しい人",
            "共働きで夕食に手を抜きたくない人",
          ]}
        />
        <RecommendBox
          service="ウェルネスダイニング"
          color="bg-blue-50"
          items={[
            "糖尿病・腎臓病など食事制限が必要な人",
            "高齢の家族に送りたい人",
            "管理栄養士監修の安心感が欲しい人",
            "やわらかい食事が必要な人",
          ]}
        />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="basic-info">3社の基本情報を比較</SectionHeading>

        <SubHeading>価格比較（1食あたり最安）</SubHeading>
        <ComparisonTable
          headers={["プラン", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["最小プラン", "6食 3,990円（665円/食）", "7食 4,382円（626円/食）", "7食 4,644円（663円/食）"],
            ["中プラン", "8食 4,990円（624円/食）", "14食 8,618円（616円/食）", "14食 9,072円（648円/食）"],
            ["大プラン", "10食 5,990円（599円/食）", "21食 12,960円（617円/食）", "21食 13,500円（643円/食）"],
          ]}
        />
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">最安比較のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>nosh</strong>は10食プランなら1食599円と最安値級。継続割引もあり、最大16.55%OFFで1食499円まで下がります。</li>
            <li><strong>三ツ星ファーム</strong>は14食以上で1食616〜626円と安定した価格帯。</li>
            <li><strong>ウェルネスダイニング</strong>は食事制限付きで1食643〜663円と、栄養管理のコストを考えれば妥当です。</li>
          </ul>
        </div>

        <SubHeading>配送・送料比較</SubHeading>
        <ComparisonTable
          headers={["サービス", "送料の幅", "最安エリア", "最高エリア"]}
          rows={[
            ["nosh", "913円〜2,827円", "関東", "北海道・沖縄"],
            ["三ツ星ファーム", "990円〜2,970円", "関東", "北海道・沖縄"],
            ["ウェルネスダイニング", "770円〜（定期便は半額）", "全国一律", "—"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          <strong>ポイント：</strong>ウェルネスダイニングは定期購入で送料半額（385円）になるため、継続するなら実質最安。noshと三ツ星ファームは地域差が大きく、北海道や沖縄だと送料だけで月3,000円近くかかる点に注意。
        </p>

        <SubHeading>注文方法・解約のしやすさ</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["注文方法", "Web・アプリ", "Web・LINE", "Web・電話"],
            ["配送間隔", "1/2/3週に1回", "2/3/4週に1回", "1/2/3/4週に1回"],
            ["スキップ", "◎ 簡単", "○ 可能", "○ 可能"],
            ["解約手続き", "マイページから即可", "Web・電話で可", "電話のみ"],
            ["最低継続回数", "なし", "なし", "なし"],
          ]}
        />

        <SubHeading>容器サイズ・冷凍庫スペース</SubHeading>
        <ComparisonTable
          headers={["サービス", "容器サイズ（目安）", "10食あたりの占有スペース"]}
          rows={[
            ["nosh", "18×18×4.5cm", "冷凍庫中段ほぼ1段"],
            ["三ツ星ファーム", "18×14×4cm", "やや省スペース"],
            ["ウェルネスダイニング", "18×17×3cm", "最もコンパクト"],
          ]}
        />

        <SubHeading>支払い方法</SubHeading>
        <ComparisonTable
          headers={["方法", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["クレジットカード", "◎", "◎", "◎"],
            ["代金引換", "○", "○", "○"],
            ["後払い", "×", "○", "○"],
            ["Amazon Pay", "◎", "×", "×"],
            ["コンビニ払い", "×", "×", "○"],
          ]}
        />

        {/* ===== 料金・コスト詳細比較表 ===== */}
        <SectionHeading id="price-detail">料金・コスト詳細比較表</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当を選ぶ際に見落としがちなのが、1食あたりの単価だけでなく「送料」「入会金」「解約条件」を含めたトータルコストです。ここでは3社の料金を細かく分解して比較します。
        </p>

        <SubHeading>1食あたり単価の詳細</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["1食あたり最安（通常）", "599円（10食）", "616円（14食）", "643円（21食）"],
            ["1食あたり最安（割引適用）", "499円（継続割引MAX）", "283円（初回7食限定）", "643円（割引なし）"],
            ["送料（関東・1回）", "913円", "990円", "770円"],
            ["送料込み1食あたり（10食）", "690円", "715円（※7食計算）", "753円（7食計算）"],
            ["入会金", "無料", "無料", "無料"],
            ["年会費", "無料", "無料", "無料"],
            ["解約金", "無料", "無料", "無料"],
            ["最低注文回数", "なし（1回で解約可）", "なし（1回で解約可）", "なし（1回で解約可）"],
          ]}
        />

        <SubHeading>月額コストシミュレーション</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          実際に1ヶ月（4週間）継続した場合のコスト比較です。関東在住、2週間に1回の配送で試算しています。
        </p>
        <ComparisonTable
          headers={["プラン", "nosh 10食×2回", "三ツ星 14食×2回", "ウェルネス 14食×2回"]}
          rows={[
            ["食材費", "11,980円", "17,236円", "18,144円"],
            ["送料（関東）", "1,826円", "1,980円", "770円（定期半額）"],
            ["合計", "13,806円", "19,216円", "18,914円"],
            ["1食あたり実質", "691円", "687円", "676円"],
            ["食数", "20食", "28食", "28食"],
          ]}
        />
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">コストまとめ</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>月の食数を多くするなら</strong>ウェルネスダイニングの定期便が送料面で有利</li>
            <li><strong>月1万円以下で収めたいなら</strong>nosh 10食プラン×月2回がベスト</li>
            <li><strong>初回のお試しだけなら</strong>三ツ星ファーム 7食1,980円が圧倒的にお得</li>
            <li>noshは長期継続で割引が効き、最終的に1食499円まで下がる唯一のサービス</li>
          </ul>
        </div>

        {/* ===== 7項目比較 ===== */}
        <SectionHeading id="7-comparison">7つの項目で徹底比較</SectionHeading>

        <SubHeading>1. 味のクオリティ</SubHeading>
        <div className="space-y-4 mb-6 text-sm leading-relaxed">
          <p><strong>nosh：</strong>糖質オフ・塩分控えめながら、一流シェフや料理家が監修した本格メニュー。スパイスやハーブで満足感を出す工夫がされており、「健康志向な割においしい」という声が多数。ただしメニューによって当たり外れがあるのも事実です。人気メニューランキングを参考にすると外れを引きにくくなります。</p>
          <p><strong>三ツ星ファーム：</strong>3社の中でもっとも味の評価が高いブランド。プロの料理人が監修し、素材・調理法・盛り付けまでこだわった「レストラン品質」を実現しています。特にメインディッシュのソースや味付けが秀逸で、「冷凍とは思えない」という驚きの声が続出しています。</p>
          <p><strong>ウェルネスダイニング：</strong>管理栄養士が栄養バランスを最優先に設計しているため、味は「家庭的で素朴」。塩分や糖質を制限している分、どうしても薄味に感じることがあります。ただし制限食として考えると十分合格点で、「これだけの制限で、ここまで美味しく食べられるのは助かる」という評価も多いです。</p>
          <p className="font-medium">結論：味のレベルは 三ツ星ファーム &gt; nosh &gt; ウェルネスダイニング</p>
        </div>

        <SubHeading>2. メニュー数とバリエーション</SubHeading>
        <div className="space-y-4 mb-6 text-sm leading-relaxed">
          <p><strong>nosh：</strong>100種類以上の常時ラインナップに加え、毎週3品の新メニューが追加。洋食・和食・中華・スイーツ・パン・スープまで幅広く、飽きにくい設計です。特にスイーツ（ドーナツ、ロールケーキなど）が糖質オフで楽しめるのはnoshならでは。</p>
          <p><strong>三ツ星ファーム：</strong>約80種類のメニューを常時用意。noshより少ないですが「質重視」の方向性で、一品一品の完成度が非常に高いです。季節限定メニューも定期的に登場するため、リピーターも飽きずに楽しめます。</p>
          <p><strong>ウェルネスダイニング：</strong>メニューは「コースごとに事前決定」されており、個別に選ぶことはできません。ただし7種類のコースから目的に合ったコースを選べます。メニューのバリエーション自体は豊富で、和洋中バランスよく構成されていますが、「今日はこれが食べたい」という選び方ができないのがデメリットです。</p>
          <p className="font-medium">結論：好きなメニューを自由に選びたいなら nosh &gt; 三ツ星ファーム &gt;&gt;&gt; ウェルネスダイニング</p>
        </div>

        <SubHeading>3. 栄養バランス（糖質・塩分・カロリー）</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["糖質量", "全メニュー30g以下", "25g以下メニューあり", "15g以下コースあり"],
            ["塩分量", "全メニュー2.5g以下", "メニュー依存", "2.0g以下コースあり"],
            ["カロリー", "350〜550kcal", "350〜500kcal", "240〜300kcal"],
            ["たんぱく質", "20g前後", "20g前後", "コース別管理"],
          ]}
        />

        <SubHeading>4. 添加物の有無</SubHeading>
        <div className="space-y-4 mb-6 text-sm leading-relaxed">
          <p><strong>nosh：</strong>保存料・合成着色料は不使用が基本方針ですが、全メニュー完全無添加ではありません。</p>
          <p><strong>三ツ星ファーム：</strong>3社の中でもっとも添加物に厳しく、化学調味料・合成着色料・人工甘味料を極力使わない方針。</p>
          <p><strong>ウェルネスダイニング：</strong>冷凍保存のための最小限の添加物のみ。</p>
          <p className="font-medium">結論：添加物の少なさで選ぶなら 三ツ星ファーム &gt; nosh &gt; ウェルネスダイニング</p>
        </div>

        <SubHeading>5. 目的別コースの充実度</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">ここはウェルネスダイニングが圧倒的な強みを持つ項目です。</p>
        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-sm">
          <p className="font-bold mb-2">ウェルネスダイニングの7コース</p>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>糖質制限コース</strong> — 糖質15g以下・1食240kcal前後</li>
            <li><strong>塩分制限コース</strong> — 塩分2.0g以下</li>
            <li><strong>たんぱく質＆塩分調整コース</strong> — 腎臓病向け</li>
            <li><strong>カロリー制限コース</strong> — 1食240kcal以下</li>
            <li><strong>やわらか食コース</strong> — 噛む力が弱い方向け</li>
            <li><strong>栄養バランスコース</strong> — 全般向け</li>
            <li><strong>野菜を楽しむスープ食コース</strong> — 時短・小食向け</li>
          </ol>
        </div>
        <p className="text-sm mb-6 leading-relaxed font-medium">結論：医師から食事制限を指示されている・高齢で嚥下に不安がある人はウェルネスダイニング一択です。</p>

        <SubHeading>6. 初回キャンペーン・お試し</SubHeading>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4 text-sm">
            <p className="font-bold mb-2">nosh</p>
            <ul className="list-disc list-inside space-y-1">
              <li>初回〜3回目まで合計3,000円OFF</li>
              <li>友達紹介で3,000円OFFクーポン</li>
              <li>継続割引で最大16.55%OFF</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-sm">
            <p className="font-bold mb-2">三ツ星ファーム</p>
            <ul className="list-disc list-inside space-y-1">
              <li>初回限定7食 1,980円</li>
              <li>LINE友だち追加でクーポン</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-sm">
            <p className="font-bold mb-2">ウェルネスダイニング</p>
            <ul className="list-disc list-inside space-y-1">
              <li>初回送料無料</li>
              <li>定期購入で送料半額（385円）</li>
            </ul>
          </div>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          <strong>ポイント：</strong>短期で試すなら三ツ星ファームの初回1,980円が最安。長期で続けるならnoshの継続割引が最強。ウェルネスダイニングは送料面での継続メリットが大きい設計です。
        </p>

        <SubHeading>7. 継続のしやすさ</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["スキップの手軽さ", "◎", "○", "○"],
            ["解約の手軽さ", "◎", "○", "△（電話）"],
            ["継続割引", "◎（最大17%）", "×", "○（送料半額）"],
            ["最低継続回数", "なし", "なし", "なし"],
          ]}
        />

        {/* ===== マトリクス ===== */}
        <SectionHeading id="matrix">【独自】3社の強み・弱みマトリクス</SectionHeading>

        <SubHeading>強み・弱みマトリクス</SubHeading>
        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold whitespace-nowrap">評価軸</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星ファーム</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネスダイニング</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["価格の安さ", 5, 4, 3],
                ["味のクオリティ", 4, 5, 3],
                ["メニューの豊富さ", 5, 4, 2],
                ["栄養管理の厳密さ", 3, 3, 5],
                ["添加物の少なさ", 4, 5, 3],
                ["解約のしやすさ", 5, 4, 3],
                ["継続コスパ", 5, 3, 4],
                ["高齢者対応", 2, 2, 5],
              ].map(([label, n, m, w], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium whitespace-nowrap">
                    {label as string}
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={n as number} />
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={m as number} />
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={w as number} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SubHeading>各社が「勝てる場面」「負ける場面」</SubHeading>
        <div className="space-y-4 mb-6 text-sm leading-relaxed">
          <div className="bg-green-50 rounded-lg p-4">
            <p className="font-bold mb-2">nosh が勝つ場面</p>
            <ul className="list-disc list-inside space-y-1">
              <li>一人暮らしで日常的に使いたい</li>
              <li>ダイエット目的で糖質オフを継続したい</li>
              <li>できるだけ安く続けたい</li>
              <li>スマホで完結する手軽さを重視</li>
            </ul>
            <p className="font-bold mt-3 mb-2">nosh が負ける場面</p>
            <ul className="list-disc list-inside space-y-1 text-foreground/70">
              <li>医療的な食事制限が必要</li>
              <li>味の満足度を最優先したい</li>
              <li>高齢の親に送りたい</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <p className="font-bold mb-2">三ツ星ファーム が勝つ場面</p>
            <ul className="list-disc list-inside space-y-1">
              <li>自宅での食事に「質」を求める</li>
              <li>冷凍弁当のイメージを覆したい</li>
              <li>共働きで夕食の手間を省きたい</li>
              <li>添加物にこだわりたい</li>
            </ul>
            <p className="font-bold mt-3 mb-2">三ツ星ファーム が負ける場面</p>
            <ul className="list-disc list-inside space-y-1 text-foreground/70">
              <li>とにかく安く続けたい</li>
              <li>糖尿病・腎臓病の食事療法が必要</li>
              <li>メニュー数を重視</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="font-bold mb-2">ウェルネスダイニング が勝つ場面</p>
            <ul className="list-disc list-inside space-y-1">
              <li>医師から食事制限を指示されている</li>
              <li>高齢の家族に送りたい</li>
              <li>栄養管理を完全に任せたい</li>
              <li>嚥下に不安があるやわらか食が必要</li>
            </ul>
            <p className="font-bold mt-3 mb-2">ウェルネスダイニング が負ける場面</p>
            <ul className="list-disc list-inside space-y-1 text-foreground/70">
              <li>味やグルメを最優先したい</li>
              <li>メニューを自由に選びたい</li>
              <li>ネットで即解約したい</li>
            </ul>
          </div>
        </div>

        {/* ===== 目的別おすすめガイド ===== */}
        <SectionHeading id="purpose">目的別おすすめガイド</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当を利用する目的は人それぞれ。ここでは5つの代表的な目的ごとに、3社の中からもっとも適したサービスを詳しく解説します。あなたの状況に近いセクションをチェックしてみてください。
        </p>

        <PurposeCard title="ダイエット目的の方におすすめ" service="nosh（ナッシュ）" color="bg-green-50">
          <p>
            ダイエットで宅配弁当を活用するなら、noshがもっとも適しています。noshの最大の特徴は<strong>全メニューが糖質30g以下</strong>に設計されていること。ロカボ（低糖質）ダイエットを実践している方にとって、メニュー選びで迷う必要がありません。
          </p>
          <p>
            カロリーは1食あたり350〜550kcal程度で、塩分も2.5g以下に抑えられています。特に注目したいのが、noshだけが提供している<strong>糖質オフのスイーツメニュー</strong>（ドーナツ、ロールケーキなど）。ダイエット中でも甘いものが食べたい方にとって、罪悪感なく楽しめるのは大きなメリットです。
          </p>
          <p>
            さらに、noshには「NOSH セレクション」という機能があり、糖質や脂質の量でメニューをフィルタリングできます。「今週は糖質20g以下のメニューだけにする」といった使い方が可能です。100種類以上のメニューから毎週選べるため、飽きずに続けられるのもダイエット成功の鍵になります。
          </p>
          <p>
            コスト面でも、10食プラン＋継続割引で<strong>1食あたり499円〜599円</strong>と、ダイエット食としては非常にリーズナブル。コンビニで低糖質弁当を買うよりもコスパが良い場合もあります。
          </p>
          <p className="font-medium">
            ダイエット目的なら、まずはnoshの10食プランを1回試してみるのがおすすめです。初回〜3回目まで合計3,000円OFFの割引もあるため、お得にスタートできます。
          </p>
        </PurposeCard>

        <PurposeCard title="一人暮らしの方におすすめ" service="nosh（ナッシュ）" color="bg-green-50">
          <p>
            一人暮らしで宅配弁当を使う最大の理由は「自炊の手間を省きたい」「栄養バランスを手軽に整えたい」の2つ。この両方を高いレベルで満たすのがnoshです。
          </p>
          <p>
            一人暮らしにnoshが最適な理由は大きく3つあります。まず<strong>コスパの良さ</strong>。10食プランなら1食599円で、コンビニ弁当とほぼ同じ価格帯でありながら、糖質・塩分が管理された栄養バランスの取れた食事が取れます。継続割引で長く使うほどお得になるのも一人暮らしの強い味方です。
          </p>
          <p>
            次に<strong>メニューの豊富さ</strong>。100種類以上から自分で選べるので、「今週は中華気分」「来週は和食にしよう」と、気分に合わせた食事が楽しめます。一人暮らしだと食事がマンネリ化しがちですが、noshなら毎週新メニューが追加されるため飽きません。
          </p>
          <p>
            最後に<strong>手続きの手軽さ</strong>。注文・変更・スキップ・解約がすべてスマホアプリで完結します。「来週は実家に帰るからスキップ」「今月は外食が多いから1回休み」といった柔軟な対応がアプリ1つで可能です。電話が不要なのは、忙しい一人暮らしにとって大きなメリットです。
          </p>
          <p>
            ただし注意点として、一人暮らし用の小型冷凍庫だと10食プランは入りきらない場合があります。契約前に冷凍庫のスペースを確認し、余裕がなければ6食プランから始めましょう。
          </p>
        </PurposeCard>

        <PurposeCard title="高齢者の方におすすめ" service="ウェルネスダイニング" color="bg-blue-50">
          <p>
            高齢のご家族に宅配弁当を送りたい場合、ウェルネスダイニングが断然おすすめです。その理由は、高齢者特有のニーズに特化したコースが揃っているからです。
          </p>
          <p>
            もっとも大きな特徴は<strong>「やわらか食コース」</strong>の存在。加齢により噛む力や飲み込む力が弱くなった方でも安心して食べられるよう、食材の硬さを3段階（ちょっとやわらかめ・かなりやわらかめ・ムースやわらか）から選べます。見た目も通常の食事に近く、食べる楽しみを損なわない工夫がされています。
          </p>
          <p>
            高齢者に多い持病への対応も充実しています。<strong>糖尿病の方には糖質制限コース（糖質15g以下）</strong>、<strong>高血圧の方には塩分制限コース（塩分2.0g以下）</strong>、<strong>腎臓病の方にはたんぱく質＆塩分調整コース</strong>と、医療レベルの栄養管理が自宅で実現できます。
          </p>
          <p>
            また、ウェルネスダイニングは<strong>管理栄養士への無料電話相談</strong>ができるため、「父の糖尿病に合うコースはどれ？」「母は嚥下が心配だけど、どの硬さがいい？」といった相談にも丁寧に対応してくれます。
          </p>
          <p>
            注文も電話対応があるため、スマホやパソコンが苦手な高齢者ご本人でも注文可能。離れて暮らすお子さんが代理で注文し、親の元に直接配送することもできます。送料も全国一律で、定期便なら半額の385円と、継続しやすい価格設計です。
          </p>
        </PurposeCard>

        <PurposeCard title="産後・授乳中の方におすすめ" service="三ツ星ファーム or nosh" color="bg-amber-50">
          <p>
            産後や授乳中は、赤ちゃんのお世話で料理に時間をかけられない一方、しっかりした栄養摂取が求められる時期です。この2つの条件を同時に満たせるのが、三ツ星ファームとnoshです。
          </p>
          <p>
            <strong>栄養面を重視するなら三ツ星ファーム</strong>がおすすめ。プロの料理人が監修したメニューは素材の味を活かした調理法で、添加物も最小限。授乳中で食の安全性が気になるママにとって、化学調味料・合成着色料不使用というのは安心材料です。「手抜きなのにちゃんとした食事が取れている」という満足感は、産後のメンタルケアにもつながります。
          </p>
          <p>
            <strong>コスパと手軽さを重視するならnosh</strong>。産後は何かと出費が増えるため、1食499円〜599円のnoshは家計に優しい選択です。スマホアプリで注文・スキップ・解約がすべて完結するため、赤ちゃんを抱っこしながらでも操作できます。
          </p>
          <p>
            産後に特に意識したい栄養素は、たんぱく質・鉄分・カルシウム・葉酸です。宅配弁当はおかずのみの提供が基本なので、主食（ご飯）と汁物を追加して、不足しがちな栄養素を補うのがポイントです。余裕があれば、ヨーグルトや果物をプラスすると栄養バランスがさらに整います。
          </p>
          <p>
            どちらも最低継続回数の縛りがなく、1回だけの注文でも解約可能。まずは産後1ヶ月だけ試して、合えば継続、合わなければ解約、という使い方ができます。
          </p>
        </PurposeCard>

        <PurposeCard title="筋トレ・ボディメイク目的の方におすすめ" service="nosh（ナッシュ）" color="bg-green-50">
          <p>
            筋トレやボディメイクに取り組んでいる方にとって、食事管理はトレーニングと同じくらい重要。PFC（たんぱく質・脂質・炭水化物）バランスを意識した食事を毎日用意するのは手間がかかりますが、noshならその負担を大幅に軽減できます。
          </p>
          <p>
            noshの強みは<strong>全メニューの栄養成分が明確に表示されている</strong>こと。たんぱく質・脂質・糖質・カロリーがメニューごとに確認でき、マクロ管理をしている方にとって非常に使いやすい設計です。たんぱく質は1食あたり20g前後を確保しつつ、糖質30g以下というバランスは、リーンバルク（脂肪を増やさず筋肉を増やす）に最適です。
          </p>
          <p>
            特におすすめなのが、noshの「高たんぱく」メニュー。鶏むね肉やサーモンをメインにしたメニューは、たんぱく質25g以上を確保しながらカロリーを400kcal前後に抑えています。これにプロテインシェイクやご飯をプラスすれば、1食あたりたんぱく質40〜50gの高たんぱく食が簡単に完成します。
          </p>
          <p>
            コスト面でも、筋トレ特化の宅配弁当サービス（マッスルデリなど）は1食あたり1,000円を超えることが多いのに対し、noshなら1食499〜599円。毎日の食事として継続するには、この価格差は大きいです。
          </p>
          <p>
            ただし、ハードにトレーニングしている方にとっては、noshの1食だけでは量が足りない場合があります。ご飯（白米or玄米）200〜300gを追加し、トレーニング前後にプロテインを摂取する組み合わせがおすすめです。
          </p>
        </PurposeCard>

        {/* ===== 目的別診断 ===== */}
        <SectionHeading id="diagnosis">目的別おすすめ診断</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">「結局、自分にはどれが合うの？」——8つの代表的な目的・状況別に、最適な1社を提案します。</p>

        {[
          { title: "コスパ重視", rec: "nosh", text: "月額コストを最小化したい方はnosh一択。10食プラン+継続割引で1食499円まで下がり、3社中もっとも継続コスパが高くなります。" },
          { title: "美味しさ・グルメ重視", rec: "三ツ星ファーム", text: "「冷凍なのにここまで美味しいのか」と驚かされるクオリティ。プロの料理人監修のメインディッシュは、1食あたり626円でレストラン級の満足感が得られます。" },
          { title: "健康管理・食事制限", rec: "ウェルネスダイニング", text: "糖尿病・高血圧・腎臓病などで医師から食事制限を指示されている方は、迷わずウェルネスダイニング。管理栄養士が設計した7つの専用コースがあります。" },
          { title: "一人暮らし", rec: "nosh", text: "100種類以上から自由に選べる柔軟さと、1食あたり500円台の安さが一人暮らしの強い味方。スキップも解約もマイページで完結します。" },
          { title: "高齢者・親への仕送り", rec: "ウェルネスダイニング", text: "やわらか食コース・塩分制限コースなど、高齢者のニーズに応えるコースが充実。電話での注文対応もあり、スマホが苦手な親世代でも利用できます。" },
          { title: "ダイエット", rec: "nosh", text: "全メニュー糖質30g以下・塩分2.5g以下。1食400kcal前後のメニューが中心で、スイーツメニューも糖質オフです。" },
          { title: "筋トレ・ボディメイク", rec: "nosh", text: "たんぱく質20g前後を確保しつつ、糖質を抑えたメニューが豊富。継続コスパを考えるとnoshが現実的です。" },
          { title: "産後・子育てママ", rec: "三ツ星ファーム or nosh", text: "産後や子育て中は「手軽さ」と「栄養」のバランスが大事。三ツ星ファームの「美味しくて栄養がある」1食は頼れる存在。コストを抑えたいならnoshも。" },
        ].map((item) => (
          <div key={item.title} className="mb-4 bg-white border border-warm-border rounded-lg p-4">
            <p className="font-bold text-sm mb-1">
              {item.title} → <span className="text-accent">{item.rec}</span>
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
          </div>
        ))}

        {/* ===== 口コミ ===== */}
        <SectionHeading id="reviews">利用者の口コミ・評判</SectionHeading>

        {[
          {
            name: "nosh",
            good: [
              "「糖質オフなのに満足感があり、ダイエット中の味方になってくれる」（30代女性）",
              "「メニューが豊富で飽きない。スイーツがあるのが嬉しい」（20代女性）",
              "「継続割引が効いてくると一食500円以下になるので、自炊より安く済む時も」（20代男性）",
            ],
            bad: [
              "「メニューによって当たり外れがある」（30代男性）",
              "「送料が地域によって高い。北海道在住だと毎回3,000円近く」（40代女性）",
              "「冷凍庫が10食分で埋まるので、一人暮らしだとパンパン」（20代女性）",
            ],
            color: "bg-green-50",
          },
          {
            name: "三ツ星ファーム",
            good: [
              "「冷凍弁当とは思えないクオリティ。本当にレストランみたい」（40代女性）",
              "「添加物が少ないのが安心。家族にも勧められる」（30代女性）",
              "「共働きの平日夕食として最強」（30代男性）",
            ],
            bad: [
              "「ちょっと量が少なく感じる時がある」（30代男性）",
              "「値段がnoshより少し高いので、継続するか迷う」（20代女性）",
              "「糖質制限が目的だとnoshの方が厳格で選びやすい」（40代女性）",
            ],
            color: "bg-amber-50",
          },
          {
            name: "ウェルネスダイニング",
            good: [
              "「糖尿病の父に送っている。管理栄養士監修の安心感がある」（50代女性）",
              "「塩分制限コースが本当に助かる」（60代男性）",
              "「やわらか食は高齢の母が食べやすく、本当にありがたい」（50代女性）",
            ],
            bad: [
              "「味が薄い・素朴すぎると感じる日がある」（60代女性）",
              "「解約が電話のみでちょっと面倒だった」（40代女性）",
              "「メニューを自分で選べないのがマイナス」（30代男性）",
            ],
            color: "bg-blue-50",
          },
        ].map((service) => (
          <div key={service.name} className={`${service.color} rounded-lg p-5 mb-4`}>
            <p className="font-bold mb-3">{service.name} の口コミ</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-accent mb-2">良い口コミ</p>
                <ul className="space-y-2">
                  {service.good.map((r, i) => (
                    <li key={i} className="leading-relaxed">{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-red-600 mb-2">悪い口コミ</p>
                <ul className="space-y-2">
                  {service.bad.map((r, i) => (
                    <li key={i} className="leading-relaxed text-foreground/70">{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* ===== 併用パターン ===== */}
        <SectionHeading id="combination">【独自】併用パターンも紹介</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">3社はライバルですが、実は「併用」することで弱点を補い合うこともできます。</p>

        {[
          {
            title: "パターン1：平日nosh + 週末三ツ星",
            text: "平日の慌ただしい日はコスパ重視のnoshで乗り切り、ちょっと贅沢したい週末は三ツ星ファームでレストラン気分を楽しむ——月額予算の目安は2〜3万円。",
          },
          {
            title: "パターン2：両親にウェルネス + 自分はnosh",
            text: "離れて暮らす高齢の両親にはウェルネスダイニングの制限コースを定期便で送り、自分自身はnoshで糖質管理。家族全員の健康を一度に管理できます。",
          },
          {
            title: "パターン3：三ツ星を主軸、noshでメニュー補完",
            text: "味の満足度を最優先したい方は三ツ星ファームを主軸に、スイーツやパンが食べたくなったらnoshで追加注文する使い方。",
          },
        ].map((p) => (
          <div key={p.title} className="border border-warm-border rounded-lg p-4 mb-3">
            <p className="font-bold text-sm mb-1">{p.title}</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{p.text}</p>
          </div>
        ))}

        {/* ===== 失敗しない選び方 ===== */}
        <SectionHeading id="tips">失敗しない選び方5つのポイント</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当は一度契約すると定期便で届くサービスです。「思っていたのと違った」という失敗を避けるために、契約前に必ず確認すべき5つのポイントを解説します。
        </p>
        {[
          {
            title: "1食あたりの料金で比較する",
            text: "「◯食プランで△△円」という表示を見ると安く感じますが、大切なのは「1食あたり単価＋送料÷食数」の実質単価です。noshの10食プランは送料込みでも1食690円前後（関東）、三ツ星ファームの14食は715円前後、ウェルネスダイニングの14食定期便は676円前後。月にどれくらい注文するかを計算し、月額トータルで比較しましょう。また、noshの継続割引は10食以上で最大16.55%OFFになるため、長期利用を考えるならnoshが圧倒的にお得です。",
          },
          {
            title: "メニュー数と選択の自由度",
            text: "「毎日同じようなメニューで飽きた」は宅配弁当の解約理由で最も多いものの一つ。noshは100種類以上から自由に選べ、毎週新メニューが追加されるため飽きにくい設計。三ツ星ファームも80種類以上で季節限定メニューあり。一方、ウェルネスダイニングはコースごとに固定メニューなので、「今日はこれが食べたい」という選び方ができません。自分がどれくらい「選ぶ自由」を重視するかで判断しましょう。",
          },
          {
            title: "栄養バランス・制限食の対応",
            text: "「健康的な食事がしたい」と「医師から食事制限を指示されている」は全くレベルが違います。前者ならnoshや三ツ星ファームの糖質・カロリー管理で十分ですが、後者なら医療レベルの栄養管理ができるウェルネスダイニング一択です。特に腎臓病（たんぱく質制限）・糖尿病（糖質15g以下）・高血圧（塩分2.0g以下）の制限食は、一般的な宅配弁当では対応できません。自分の目的が「健康維持」なのか「食事療法」なのかを明確にしてから選びましょう。",
          },
          {
            title: "配送頻度と送料",
            text: "宅配弁当は食材費だけでなく、毎回の送料がかかります。noshと三ツ星ファームは地域によって913円〜2,970円と大きな差があり、北海道や沖縄在住だと送料だけで月5,000円以上になることも。一方、ウェルネスダイニングは全国一律770円（定期便は385円）と良心的。配送頻度は各社1〜4週に1回から選べますが、まとめて注文するほど1回あたりの送料負担は減ります。冷凍庫の容量と相談しながら、送料を含めたトータルコストで判断しましょう。",
          },
          {
            title: "解約・スキップのしやすさ",
            text: "「いざという時にすぐ辞められるか」は意外と見落としがちなポイントです。noshはマイページから数クリックで即解約でき、もっとも簡単。三ツ星ファームはWebまたは電話で解約可能。ウェルネスダイニングは電話のみでの解約なので、「電話が苦手」「平日忙しくて電話できない」という方には不向きです。また3社とも、解約だけでなく「スキップ」（次回配送を1回飛ばす）機能があるので、「来月は不要」という時も安心。まずは気軽に始めて、合わなければすぐ辞められるかどうかを確認しておきましょう。",
          },
        ].map((tip, i) => (
          <div key={tip.title} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {i + 1}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{tip.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{tip.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 注文〜解約の流れ ===== */}
        <SectionHeading id="flow">注文〜解約までの流れ（3社共通）</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { step: "1", title: "公式サイトから会員登録", text: "メールアドレス・氏名・住所・支払い方法を登録します。所要時間は5分程度。noshはスマホアプリからも登録可能です。" },
            { step: "2", title: "プランとメニューを選択", text: "食数（6〜21食）、配送間隔（1〜4週に1回）、メニュー（またはコース）を選びます。noshと三ツ星ファームは個別メニューを選択、ウェルネスダイニングはコースを選択します。" },
            { step: "3", title: "初回便の配送", text: "最短4〜7日で初回便が到着。冷凍庫に保管して、電子レンジで温めるだけ。加熱時間の目安はパッケージに記載されています。" },
            { step: "4", title: "継続 or スキップ or 解約", text: "次回便の発送日が近づく前に、継続・スキップ・解約を判断。解約方法は各社で異なります（nosh: マイページ、三ツ星: Web/電話、ウェルネス: 電話のみ）。" },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 bg-cream rounded-lg p-4">
              <span className="flex-shrink-0 w-8 h-8 bg-accent-dark text-white rounded-full flex items-center justify-center text-sm font-bold">
                {s.step}
              </span>
              <div>
                <p className="font-bold text-sm">{s.title}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

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
        <SectionHeading id="summary">まとめ：あなたに最適な1社</SectionHeading>

        <SubHeading>3社の総合評価</SubHeading>
        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星ファーム</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネスダイニング</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["総合おすすめ度", 5, 4, 4],
                ["コスパ", 5, 3, 3],
                ["味", 4, 5, 3],
                ["健康管理", 4, 3, 5],
                ["続けやすさ", 5, 4, 3],
              ].map(([label, n, m, w], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={n as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={m as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={w as number} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">結論</p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li><strong>迷ったら → nosh</strong>（コスパ・メニュー数・解約のしやすさで最も万能）</li>
            <li><strong>味で選ぶ → 三ツ星ファーム</strong>（自宅で贅沢な食事体験を）</li>
            <li><strong>健康で選ぶ → ウェルネスダイニング</strong>（医療レベルの食事制限食）</li>
          </ul>
          <p className="text-sm mt-4 leading-relaxed text-foreground/80">
            大切なのは、「なんとなく人気だから」ではなく、自分の目的・予算・ライフスタイルから選ぶこと。この記事で紹介した目的別おすすめガイドや選び方のポイントを参考に、あなたに最適な1社を見つけてください。まずは各社の初回キャンペーンを活用して、実際に味を確かめてみるのが失敗しない第一歩です。
          </p>
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

        {/* Related articles placeholder */}
        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm text-warm-gray">
            <li>nosh の悪い口コミは本当？徹底検証（準備中）</li>
            <li>ウェルネスダイニング 口コミ・評判まとめ（準備中）</li>
            <li>コープデリ vs パルシステム 比較（準備中）</li>
            <li>高齢者向け宅配弁当おすすめ10選（準備中）</li>
          </ul>
        </div>
      </article>
    </>
  );
}
