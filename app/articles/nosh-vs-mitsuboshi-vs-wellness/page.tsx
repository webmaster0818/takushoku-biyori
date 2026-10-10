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
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-11T00:00:00+09:00",
    modifiedTime: "2026-10-10T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "宅配弁当は冷凍保存できますか？",
    answer:
      "はい、3社とも冷凍状態でお届けされます。ウェルネスダイニングの賞味期限は公式FAQで「商品到着後、冷凍保存（-18℃以下）で3ヵ月以上」（2026年10月10日・公式確認）。noshと三ツ星ファームは商品ごとにパッケージに記載されているので、届いたら確認してください。届いたらそのまま冷凍庫に入れ、食べる時に電子レンジで温めるだけです。",
  },
  {
    question: "1回だけお試しできますか？",
    answer:
      "通常の定期便なら3社とも最低継続回数の縛りはありません。ただし三ツ星ファームは初回分のキャンセル・変更ができず、お得な長期継続応援プラン（合計6回）・冷凍庫プレゼントプラン（合計12回）は途中解約に手数料がかかります。三ツ星ファームは定期便とは別に、1個から買える「都度購入」でも試せます（公式サイト・2026年10月9日確認）。noshは初回1,500円・2回目1,000円・3回目500円OFF（合計3,000円）の割引があります。ただしnoshの初回分はキャンセルできません（2026年10月10日・公式確認）。",
  },
  {
    question: "添加物は使われていますか？",
    answer:
      "3社とも国の安全基準を満たした添加物のみ使用しています。三ツ星ファームは、公式サイトで添加物に関する方針の記載が見当たりませんでした（2026年10月9日確認）。noshは保存料・合成着色料不使用が基本、ウェルネスダイニングは冷凍保存に必要な最小限の添加物のみ使用しています。",
  },
  {
    question: "アレルギー対応はありますか？",
    answer:
      "noshはアレルギー情報をメニューごとに明記しており、該当アレルゲンを含むメニューを避けて選ぶことが可能です。三ツ星ファームはアプリで苦手・アレルギー食材を登録できますが、公式に「アレルギーに完全対応はしていない」と案内されています。ウェルネスダイニングは管理栄養士に電話で相談できますが、公式FAQでは「苦手な食材のお除きはできない」「アレルギーの完全対応はできない」と案内されています（2026年10月10日・公式確認）。ただし、3社とも完全なアレルギー除去食ではないため、重度のアレルギーがある方は事前に各社へ問い合わせることをおすすめします。",
  },
  {
    question: "注文からどれくらいで届きますか？",
    answer:
      "初回注文から届くまでの目安は、noshが最短5日〜1週間、三ツ星ファームが最短4日〜1週間、ウェルネスダイニングが最短4日〜1週間です。いずれもヤマト運輸のクール宅急便で届くため、日時指定が可能です。地域や注文状況によって前後することがあります。",
  },
  {
    question: "解約は簡単にできますか？",
    answer:
      "解約のしやすさは3社で異なります。noshはマイページ（電話・フォームも可）で手続きでき、締切はお届け予定日の4〜5日前（地域により異なる）、初回分はキャンセル不可です（2026年10月10日・公式確認）。三ツ星ファームは公式アプリ・公式LINE（24時間）または電話（9:00〜18:00）で停止でき、次回お届け予定日の7日前までの手続きが必要です。ウェルネスダイニングは1回休止がマイページ、複数回休止・解約がフォーム、電話（0120-503-999）で、お届け予定日の7日前までに連絡が必要です。nosh・ウェルネスダイニングと三ツ星ファームの通常の定期便に解約金はありませんが、三ツ星ファームの長期継続応援プランは途中解約7,700円、冷凍庫プレゼントプランは16,500円かかります。",
  },
  {
    question: "電子レンジ以外の調理は必要ですか？",
    answer:
      "基本的に電子レンジで温めるだけで食べられます。3社ともメニューごとに加熱時間の目安がパッケージに記載されており、500Wで4〜6分程度が一般的です。湯煎や自然解凍が必要なメニューはほとんどありません。忙しい方でもレンジひとつで手軽に食事ができるのが冷凍宅配弁当の大きなメリットです。",
  },
  {
    question: "宅配弁当だけで栄養は足りますか？",
    answer:
      "1食あたりのカロリーはnoshが350〜550kcal程度、三ツ星ファームは350kcal以下（一部商品を除く）、ウェルネスダイニングは240〜330kcal（コース別の公式基準）で、いずれもおかずのみの提供です。ご飯（主食）は別途用意する必要があります。1日3食すべてを宅配弁当にする場合は栄養が偏る可能性があるため、朝食や昼食で不足しがちなビタミン・食物繊維・カルシウムを補うのがおすすめです。ウェルネスダイニングは管理栄養士に無料で栄養相談ができるため、食事全体のバランスが気になる方は活用しましょう。",
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
          <Link href="/articles/#hikaku" className="text-foreground/70 hover:text-accent transition-colors">比較・料金データ</Link>
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
    dateModified: "2026-10-10T00:00:00+09:00",
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
          "通常価格は1食612円〜（12食・税込）。100種類以上のメニューから自由に選べる。全メニュー糖質30g・塩分2.5g以下。nosh club最高ランク（累計280食）なら12食で1食492円。",
        url: "https://nosh.jp/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "三ツ星ファーム",
        description:
          "料理人監修のメニュー125種類以上。おかずプレートは350kcal以下・糖質25g以下・たんぱく質15g以上（一部商品を除く）。通常の定期便は1食711円〜。",
        url: "https://mitsuboshifarm.jp/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "ウェルネスダイニング",
        description:
          "気配り宅配食は6コース（たんぱく＆塩分調整・糖質＆カロリー制限・塩分制限・脂質制限・栄養バランス・厳選栄養バランス）。献立は管理栄養士のお任せ。1食約752円〜（税込価格÷食数で算出）。",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u6bd4\u8f03\u30fb\u6599\u91d1\u30c7\u30fc\u30bf\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"nosh vs \u4e09\u30c4\u661f\u30d5\u30a1\u30fc\u30e0 vs \u30a6\u30a7\u30eb\u30cd\u30b9\u30c0\u30a4\u30cb\u30f3\u30b0\"}]}" }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        {/* Title */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            比較・料金データ
          </span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-11">公開: 2026年4月11日</time>
            <time dateTime="2026-10-10" className="font-medium text-foreground/70">最終更新: 2026年10月10日（nosh・ウェルネスダイニングの料金・送料・コース・締切を公式で再確認。三ツ星ファームは2026年10月9日確認）</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
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
            ["1食あたり最安（税込）", "612円〜（12食・20食）", "711円〜（通常の定期便）", "約752円〜（栄養バランス21食・税込÷食数）"],
            ["メニュー数", "100種類以上", "125種類以上（2026年10月9日確認）", "100種類（お任せで選べない）"],
            ["糖質量", "30g以下（全メニュー）", "25g以下（一部商品を除く）", "15g以下のコースあり"],
            ["塩分量", "2.5g以下", "記載なし", "2.0g以下のコースあり"],
            ["送料（税込）", "1,023円〜1,992円（地域・食数別）", "990円（北海道・沖縄2,500円）", "定期14・21食 無料／定期7食440円／都度880円"],
            ["初回特典", "初回1,500円・2回目1,000円・3回目500円OFF", "14食・21食は初回送料無料", "お試し注文は送料無料"],
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
          headers={["プラン（税込）", "nosh", "三ツ星ファーム", "ウェルネスダイニング（栄養バランス）"]}
          rows={[
            ["最小プラン", "6食 4,318円（719円/食）", "7食 6,485円（927円/食）", "7食 5,529円（約790円/食）"],
            ["中プラン", "8食 5,157円（644円/食）／10食 6,206円（620円/食）／12食 7,344円（612円/食）", "14食 11,458円（819円/食）", "14食 10,778円（約770円/食）"],
            ["大プラン", "20食 12,240円（612円/食・2回目以降のみ）", "21食 14,918円（711円/食）", "21食 15,800円（約752円/食）"],
          ]}
        />
        <p className="text-xs text-warm-gray -mt-4 mb-6">※nosh・ウェルネスダイニングは2026年10月10日、三ツ星ファームは2026年10月9日に公式サイトで確認。noshの1食単価は公式表記、ウェルネスダイニングは税込価格÷食数で算出。ウェルネスダイニングは6コースで価格が異なり、上は最も安い栄養バランスコース（制限食の塩分制限・糖質＆カロリー制限は21食16,178円＝約770円/食）。</p>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">最安比較のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>nosh</strong>は通常価格だと12食プラン（20食も同額）の1食612円が最安。累計購入数で割引されるnosh clubの最高ランク（累計280食）なら、10食で1食499円・12食で1食492円まで下がります（2026年10月10日・公式確認）。</li>
            <li><strong>三ツ星ファーム</strong>は通常の定期便で1食711〜927円（2026年10月9日・公式確認）。合計6回の受け取りを約束する長期継続応援プランなら21食で1食約603円まで下がりますが、途中解約は7,700円です。</li>
            <li><strong>ウェルネスダイニング</strong>は最も安い栄養バランスコースの21食で1食約752円、制限食（塩分制限・糖質＆カロリー制限）の21食で約770円です（税込価格÷食数で算出）。</li>
          </ul>
        </div>

        <SubHeading>配送・送料比較</SubHeading>
        <ComparisonTable
          headers={["サービス", "送料の幅", "最安エリア", "最高エリア"]}
          rows={[
            ["nosh", "4〜12食 1,023円〜1,713円／20食 1,243円〜1,992円", "関西", "北海道"],
            ["三ツ星ファーム", "990円／北海道・沖縄2,500円", "全国一律（北海道・沖縄以外）", "北海道・沖縄"],
            ["ウェルネスダイニング", "都度880円／定期7食440円／定期14・21食 無料", "全国一律（北海道・沖縄以外）", "北海道・沖縄（都度1,870円・定期7食935円）"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          <strong>ポイント：</strong>送料だけを見ると、ウェルネスダイニングの定期注文（14食・21食は無料、7食は440円）が3社で最も軽くなります。noshは2026年7月27日改訂の送料表で地域差があり（4〜12食は関西1,023円〜北海道1,713円）、三ツ星ファームは北海道・沖縄以外なら一律990円です（nosh・ウェルネスは2026年10月10日・公式確認）。ただし食事代を含めた1食あたりではnoshが最も安くなります（下の試算参照）。
        </p>

        <SubHeading>注文方法・解約のしやすさ</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["注文方法", "Web・アプリ", "Web・アプリ", "Web・電話"],
            ["配送間隔", "1/2/3週に1回", "1/2/3/4週に1回", "毎週・2週間に1回・毎月1回など（相談可）"],
            ["スキップ", "◎ 簡単", "○ 可能", "○ 可能"],
            ["解約手続き", "マイページ（電話・フォームも可）・お届け予定日の4〜5日前まで", "アプリ・LINE・電話（7日前まで）", "フォーム・電話（1回休止はマイページ）・7日前まで"],
            ["最低継続回数", "なし（初回分はキャンセル不可）", "通常なし（長期継続応援6回・冷凍庫プレゼント12回）", "なし"],
          ]}
        />

        <SubHeading>容器サイズ・冷凍庫スペース</SubHeading>
        <ComparisonTable
          headers={["サービス", "容器サイズ（目安）", "10食あたりの占有スペース"]}
          rows={[
            ["nosh", "18×18×4.5cm", "冷凍庫中段ほぼ1段"],
            ["三ツ星ファーム", "17.7×18×4cm（公式FAQ）", "noshとほぼ同等"],
            ["ウェルネスダイニング", "縦15×横20×高さ3cm（公式FAQ）", "最もコンパクト"],
          ]}
        />

        <SubHeading>支払い方法</SubHeading>
        <ComparisonTable
          headers={["方法", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["クレジットカード", "◎", "◎", "◎"],
            ["代金引換", "○", "×（カードエラー時の自動切替のみ）", "○（手数料330円）"],
            ["後払い", "×", "○（NP後払い・248円）", "○（コンビニ・郵便局等・手数料330円）"],
            ["Amazon Pay", "◎", "×", "○"],
            ["コンビニ払い", "×", "×", "○（後払い）"],
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
            ["1食あたり最安（通常）", "612円（12食・20食）", "711円（21食）", "約752円（栄養バランス21食・算出）"],
            ["1食あたり最安（割引適用）", "492円（nosh club最高ランク・12食）", "約603円（長期継続応援21食・6回約束）", "割引なし（定期14・21食は送料無料）"],
            ["送料（関東・1回）", "1,166円（4〜12食）", "990円", "定期14・21食 0円／定期7食440円／都度880円"],
            ["送料込み1食あたり（算出）", "約709円（12食）", "約758円（21食）", "約752円（21食定期）"],
            ["入会金", "無料", "無料", "無料"],
            ["年会費", "無料", "無料", "無料"],
            ["解約金", "無料", "通常無料（長期継続応援7,700円・冷凍庫プレゼント16,500円）", "無料"],
            ["最低注文回数", "なし（初回分はキャンセル不可）", "通常なし（初回分はキャンセル不可）", "なし（回数縛り・解約金なし）"],
          ]}
        />

        <SubHeading>月額コストシミュレーション</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          実際に1ヶ月（4週間）継続した場合のコスト比較です。関東在住、2週間に1回の配送で試算しています。
        </p>
        <ComparisonTable
          headers={["プラン", "nosh 10食×2回", "三ツ星 14食×2回", "ウェルネス（栄養バランス）14食×2回"]}
          rows={[
            ["食材費", "12,412円", "22,916円", "21,556円"],
            ["送料（関東）", "2,332円", "1,980円", "0円（定期14食は無料）"],
            ["合計", "14,744円", "24,896円", "21,556円"],
            ["1食あたり実質", "約737円", "約889円", "約770円"],
            ["食数", "20食", "28食", "28食"],
          ]}
        />
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">コストまとめ</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>送料だけなら</strong>ウェルネスダイニングの定期14・21食（送料無料）が最も軽いが、食事代込みの1食あたりはnoshの方が安い（nosh 10食×2回 約737円／ウェルネス 約770円）</li>
            <li><strong>月1万円以下で収めたいなら</strong>nosh 12食×月1回（7,344円＋関東送料1,166円＝8,510円・1食約709円）</li>
            <li><strong>三ツ星ファームを安く続けるなら</strong>長期継続応援プラン（21食で1食約603円・6回約束・途中解約7,700円）。定期便なしで試すなら1個からの都度購入も可</li>
            <li>noshはnosh clubで累計購入数に応じて割引が効き、最高ランク（累計280食）なら12食で1食492円まで下がる</li>
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
          <p><strong>三ツ星ファーム：</strong>公式サイトの表記で125種類以上（2026年10月9日確認）。毎回自分で選べ、人気順やおすすめで自動選択する「おまかせ選択」機能もあります。季節限定メニューも登場します。</p>
          <p><strong>ウェルネスダイニング：</strong>メニューは「コースごとに事前決定」されており、個別に選ぶことはできません。ただし気配り宅配食の6コースから目的に合ったコースを選べます（メニューは100種類・2026年10月10日・公式確認）。メニューのバリエーション自体は豊富で、和洋中バランスよく構成されていますが、「今日はこれが食べたい」という選び方ができないのがデメリットです。</p>
          <p className="font-medium">結論：好きなメニューを自由に選びたいなら nosh・三ツ星ファーム &gt;&gt;&gt; ウェルネスダイニング</p>
        </div>

        <SubHeading>3. 栄養バランス（糖質・塩分・カロリー）</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["糖質量", "全メニュー30g以下", "25g以下（一部商品を除く）", "15g以下コースあり"],
            ["塩分量", "全メニュー2.5g以下", "メニュー依存", "2.0g以下コースあり"],
            ["カロリー", "350〜550kcal", "350kcal以下（一部商品を除く）", "240〜330kcal（コース別基準）"],
            ["たんぱく質", "20g前後", "15g以上（一部商品を除く）", "コース別管理"],
          ]}
        />

        <SubHeading>4. 添加物の有無</SubHeading>
        <div className="space-y-4 mb-6 text-sm leading-relaxed">
          <p><strong>nosh：</strong>保存料・合成着色料は不使用が基本方針ですが、全メニュー完全無添加ではありません。</p>
          <p><strong>三ツ星ファーム：</strong>公式サイトに添加物に関する方針の記載は見当たりませんでした（2026年10月9日確認）。気になる場合は商品ごとの原材料表示を確認してください。</p>
          <p><strong>ウェルネスダイニング：</strong>冷凍保存のための最小限の添加物のみ。</p>
          <p className="font-medium">結論：添加物を重視する場合は、各社の公式サイトで商品ごとの原材料表示を確認するのが確実です。</p>
        </div>

        <SubHeading>5. 目的別コースの充実度</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">ここはウェルネスダイニングが圧倒的な強みを持つ項目です。</p>
        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-sm">
          <p className="font-bold mb-2">ウェルネスダイニング「気配り宅配食」の6コース（2026年10月10日・公式確認）</p>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>たんぱく＆塩分調整</strong> — たんぱく質10g以下・塩分2.0g以下・カリウム500mg以下（腎臓病の方向け）</li>
            <li><strong>糖質＆カロリー制限</strong> — 糖質15g以下・240kcal（±10％）・塩分2.0g以下</li>
            <li><strong>塩分制限</strong> — 塩分2.0g以下・300kcal以下</li>
            <li><strong>脂質制限</strong> — 脂質10g以下・塩分2.0g以下・コレステロール70mg以下・330kcal以下</li>
            <li><strong>栄養バランス</strong> — 300kcal以下・塩分2.5g以下</li>
            <li><strong>厳選栄養バランス</strong> — 300kcal（±20％）・塩分2.5g以下（産地にこだわりたい方向け）</li>
          </ol>
          <p className="text-xs mt-2">※噛む力が弱い方向けの「やわらか宅配食」（ほどよくやわらか・かなりやわらか・ムースやわらかの3段階）や「野菜を楽しむスープ食」は、気配り宅配食とは別のシリーズとして販売されています。</p>
        </div>
        <p className="text-sm mb-6 leading-relaxed font-medium">結論：医師から食事制限を指示されている・高齢で嚥下に不安がある人はウェルネスダイニング一択です。</p>

        <SubHeading>6. 初回キャンペーン・お試し</SubHeading>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4 text-sm">
            <p className="font-bold mb-2">nosh</p>
            <ul className="list-disc list-inside space-y-1">
              <li>初回1,500円・2回目1,000円・3回目500円OFF（合計3,000円）</li>
              <li>友達紹介で3,000円OFFクーポン</li>
              <li>nosh club（最高ランクで12食1食492円）</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-sm">
            <p className="font-bold mb-2">三ツ星ファーム</p>
            <ul className="list-disc list-inside space-y-1">
              <li>14食・21食コースは初回送料無料</li>
              <li>1個から買える都度購入あり</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-sm">
            <p className="font-bold mb-2">ウェルネスダイニング</p>
            <ul className="list-disc list-inside space-y-1">
              <li>お試し注文（初回）は送料無料</li>
              <li>お試し定期注文（毎週×8回）は8回すべて送料無料</li>
              <li>定期注文は14食・21食が送料無料、7食は440円</li>
            </ul>
          </div>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          <strong>ポイント：</strong>三ツ星ファームは14食・21食コースの初回送料無料、または1個からの都度購入で試せます（初回分はキャンセル不可）。長期で続けるならnoshのnosh club（累計購入数で割引）が効きます。ウェルネスダイニングは定期14・21食の送料無料が継続メリットです。
        </p>

        <SubHeading>7. 継続のしやすさ</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["スキップの手軽さ", "◎", "○", "○"],
            ["解約の手軽さ", "◎（マイページ・4〜5日前まで）", "○", "○（7日前まで）"],
            ["継続割引", "◎（nosh club・最高ランクで12食492円/食）", "○（長期継続応援プラン・6回約束）", "△（割引なし・定期14・21食は送料無料）"],
            ["最低継続回数", "なし", "通常なし（お得プランは6回・12回）", "なし"],
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
                ["メニューの豊富さ", 5, 5, 2],
                ["栄養管理の厳密さ", 3, 3, 5],
                ["解約のしやすさ", 5, 4, 3],
                ["継続コスパ", 5, 3, 3],
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
              <li>たんぱく質15g以上の基準で選びたい</li>
            </ul>
            <p className="font-bold mt-3 mb-2">三ツ星ファーム が負ける場面</p>
            <ul className="list-disc list-inside space-y-1 text-foreground/70">
              <li>とにかく安く続けたい</li>
              <li>糖尿病・腎臓病の食事療法が必要</li>
              <li>途中解約手数料のあるプランは避けたい（お得に続けるプランは回数約束あり）</li>
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
              <li>締切ぎりぎりまで変更・休止したい（7日前締切）</li>
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
            コスト面でも、通常価格で<strong>1食あたり612円〜</strong>（12食プラン）、nosh clubの最高ランクなら492円〜（2026年10月10日・公式確認）と、ダイエット食としてはリーズナブル。コンビニで低糖質弁当を買うよりもコスパが良い場合もあります。
          </p>
          <p className="font-medium">
            ダイエット目的なら、まずはnoshの10食プランを試してみるのがおすすめです。初回1,500円・2回目1,000円・3回目500円OFFの割引があります（初回分はキャンセル不可なので、2回目以降の変更・停止はお届け予定日の4〜5日前までに）。
          </p>
        </PurposeCard>

        <PurposeCard title="一人暮らしの方におすすめ" service="nosh（ナッシュ）" color="bg-green-50">
          <p>
            一人暮らしで宅配弁当を使う最大の理由は「自炊の手間を省きたい」「栄養バランスを手軽に整えたい」の2つ。この両方を高いレベルで満たすのがnoshです。
          </p>
          <p>
            一人暮らしにnoshが最適な理由は大きく3つあります。まず<strong>コスパの良さ</strong>。10食プランなら1食620円（12食なら612円）で、糖質・塩分が管理された栄養バランスの取れた食事が取れます。継続割引で長く使うほどお得になるのも一人暮らしの強い味方です。
          </p>
          <p>
            次に<strong>メニューの豊富さ</strong>。100種類以上から自分で選べるので、「今週は中華気分」「来週は和食にしよう」と、気分に合わせた食事が楽しめます。一人暮らしだと食事がマンネリ化しがちですが、noshなら毎週新メニューが追加されるため飽きません。
          </p>
          <p>
            最後に<strong>手続きの手軽さ</strong>。注文・変更・スキップ・解約がスマホアプリやマイページで完結します（締切はお届け予定日の4〜5日前）。「来週は実家に帰るからスキップ」「今月は外食が多いから1回休み」といった柔軟な対応がアプリ1つで可能です。電話が不要なのは、忙しい一人暮らしにとって大きなメリットです。
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
            もっとも大きな特徴は<strong>「やわらか食コース」</strong>の存在。加齢により噛む力や飲み込む力が弱くなった方でも安心して食べられるよう、別シリーズの「やわらか宅配食」で、食材の硬さを3段階（ほどよくやわらか・かなりやわらか・ムースやわらか）から選べます（2026年10月10日・公式確認）。見た目も通常の食事に近く、食べる楽しみを損なわない工夫がされています。
          </p>
          <p>
            高齢者に多い持病への対応も充実しています。<strong>糖尿病の方には糖質＆カロリー制限コース（糖質15g以下）</strong>、<strong>高血圧の方には塩分制限コース（塩分2.0g以下）</strong>、<strong>腎臓病の方にはたんぱく質＆塩分調整コース</strong>と、医療レベルの栄養管理が自宅で実現できます。
          </p>
          <p>
            また、ウェルネスダイニングは<strong>管理栄養士への無料電話相談</strong>ができるため、「父の糖尿病に合うコースはどれ？」「母は嚥下が心配だけど、どの硬さがいい？」といった相談にも丁寧に対応してくれます。
          </p>
          <p>
            注文も電話対応があるため、スマホやパソコンが苦手な高齢者ご本人でも注文可能。離れて暮らすお子さんが代理で注文し、親の元に直接配送することもできます。気配り宅配食の送料は都度注文880円（北海道・沖縄1,870円）、定期注文なら7食440円・14食と21食は無料です（2026年10月10日・公式確認）。
          </p>
        </PurposeCard>

        <PurposeCard title="産後・授乳中の方におすすめ" service="三ツ星ファーム or nosh" color="bg-amber-50">
          <p>
            産後や授乳中は、赤ちゃんのお世話で料理に時間をかけられない一方、しっかりした栄養摂取が求められる時期です。この2つの条件を同時に満たせるのが、三ツ星ファームとnoshです。
          </p>
          <p>
            <strong>栄養面を重視するなら三ツ星ファーム</strong>がおすすめ。料理人監修のメニューで、おかずプレートはたんぱく質15g以上（一部商品を除く）の基準があり、たんぱく質を確保しやすい設計です。「手抜きなのにちゃんとした食事が取れている」という満足感は、産後のメンタルケアにもつながります。
          </p>
          <p>
            <strong>コスパと手軽さを重視するならnosh</strong>。産後は何かと出費が増えるため、通常価格で1食612円〜（nosh clubの最高ランクなら492円〜）のnoshは家計に優しい選択です。スマホアプリで注文・スキップ・解約がすべて完結するため、赤ちゃんを抱っこしながらでも操作できます。
          </p>
          <p>
            産後に特に意識したい栄養素は、たんぱく質・鉄分・カルシウム・葉酸です。宅配弁当はおかずのみの提供が基本なので、主食（ご飯）と汁物を追加して、不足しがちな栄養素を補うのがポイントです。余裕があれば、ヨーグルトや果物をプラスすると栄養バランスがさらに整います。
          </p>
          <p>
            どちらも通常の定期便に最低継続回数の縛りはなく、1回だけの注文でも解約可能（どちらも初回分はキャンセル不可）。まずは産後1ヶ月だけ試して、合えば継続、合わなければ解約、という使い方ができます。
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
            コスト面でも、筋トレ特化の宅配弁当サービス（マッスルデリなど）は1食あたり1,000円を超えることが多いのに対し、noshなら通常価格で1食612円〜（nosh club最高ランクで492円〜）。毎日の食事として継続するには、この価格差は大きいです。
          </p>
          <p>
            ただし、ハードにトレーニングしている方にとっては、noshの1食だけでは量が足りない場合があります。ご飯（白米or玄米）200〜300gを追加し、トレーニング前後にプロテインを摂取する組み合わせがおすすめです。
          </p>
        </PurposeCard>

        {/* ===== 目的別診断 ===== */}
        <SectionHeading id="diagnosis">目的別おすすめ診断</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">「結局、自分にはどれが合うの？」——8つの代表的な目的・状況別に、最適な1社を提案します。</p>

        {[
          { title: "コスパ重視", rec: "nosh", text: "月額コストを最小化したい方はnosh。通常価格でも12食で1食612円、nosh clubの最高ランク（累計280食）なら1食492円まで下がり、3社中もっとも継続コスパが高くなります。" },
          { title: "美味しさ・グルメ重視", rec: "三ツ星ファーム", text: "「冷凍なのにここまで美味しいのか」と驚かされるクオリティ。料理人監修のメニューを、通常の定期便なら1食711円〜で選べます。" },
          { title: "健康管理・食事制限", rec: "ウェルネスダイニング", text: "糖尿病・高血圧・腎臓病などで医師から食事制限を指示されている方は、迷わずウェルネスダイニング。管理栄養士が献立を組む気配り宅配食の6コースがあります。" },
          { title: "一人暮らし", rec: "nosh", text: "100種類以上から自由に選べる柔軟さと、1食612円〜（通常価格）の安さが一人暮らしの強い味方。スキップも解約もマイページで完結します（お届け予定日の4〜5日前まで）。" },
          { title: "高齢者・親への仕送り", rec: "ウェルネスダイニング", text: "塩分制限・たんぱく＆塩分調整などのコースに加え、別シリーズのやわらか宅配食もあり、高齢者のニーズに応える品ぞろえ。電話での注文対応もあり、スマホが苦手な親世代でも利用できます。" },
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
        <p className="text-sm mb-4 leading-relaxed">
          各社の口コミの傾向を要約しています（口コミ本文の転載や、当サイトが独自に聞き取った声ではありません）。出典は各社の個別記事に掲載しています：<Link href="/articles/nosh-reviews/" className="text-accent underline">noshの口コミ</Link>／<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファームの口コミ</Link>／<Link href="/articles/wellness-dining-reviews/" className="text-accent underline">ウェルネスダイニングの口コミ</Link>。
        </p>

        {[
          {
            name: "nosh",
            good: [
              "糖質を抑えながら満足感があるという趣旨の声が見られる",
              "メニューが多く、スイーツも選べる点を評価する声がある",
              "nosh clubの継続割引で1食の価格が下がる点を評価する声がある",
            ],
            bad: [
              "メニューによって当たり外れがあるという声がある",
              "送料が地域によって高く、北海道などは負担が大きいという声がある",
              "10食単位だと冷凍庫が埋まりやすいという声がある",
            ],
            color: "bg-green-50",
          },
          {
            name: "三ツ星ファーム",
            good: [
              "実食した第三者メディアでは「味が安定しておいしい」「期待以上においしい」という評価が目立つ",
              "125種類以上から毎回選べる点を評価する声が多い",
              "楽天のショップレビューは907件で平均4.68（配送・対応への評価が中心）",
            ],
            bad: [
              "おかずのみで量が少なめと感じる声がある",
              "通常の定期便は1食711円〜で、価格と量の釣り合いを指摘する声がある",
              "お得なプランの回数約束・途中解約手数料など、やめ方への不満が多い",
            ],
            color: "bg-amber-50",
          },
          {
            name: "ウェルネスダイニング",
            good: [
              "家族の食事制限に使い、管理栄養士の相談窓口があることに安心感を挙げる声がある",
              "塩分制限・糖質制限でも出汁や香辛料で味がしっかりしているという声がある",
              "高齢の家族の食事管理の負担が減ったという声がある",
            ],
            bad: [
              "制限食のため味が薄いと感じる人もいる",
              "変更・休止は7日前までの手続きが必要で、手間に感じる声がある",
              "メニューを自分で選べない（おまかせ制）のが残念という声がある",
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
            text: "「◯食プランで△△円」という表示を見ると安く感じますが、大切なのは「1食あたり単価＋送料÷食数」の実質単価です。noshの10食プランは送料込みで1食約737円（関東・送料1,166円）、12食なら約709円、三ツ星ファームの14食は約889円（送料990円込み）、ウェルネスダイニングの14食定期注文は栄養バランスコースで約770円（送料無料）です（いずれも税込価格から算出・nosh・ウェルネスは2026年10月10日に公式確認）。月にどれくらい注文するかを計算し、月額トータルで比較しましょう。また、noshはnosh club（累計購入数で割引）の最高ランクなら12食で1食492円まで下がるため、長期利用を考えるならnoshが有利です。",
          },
          {
            title: "メニュー数と選択の自由度",
            text: "「毎日同じようなメニューで飽きた」は宅配弁当の解約理由で最も多いものの一つ。noshは100種類以上から自由に選べ、毎週新メニューが追加されるため飽きにくい設計。三ツ星ファームも125種類以上（2026年10月9日・公式確認）で季節限定メニューあり。一方、ウェルネスダイニングは献立が管理栄養士のお任せなので、「今日はこれが食べたい」という選び方ができません。自分がどれくらい「選ぶ自由」を重視するかで判断しましょう。",
          },
          {
            title: "栄養バランス・制限食の対応",
            text: "「健康的な食事がしたい」と「医師から食事制限を指示されている」は全くレベルが違います。前者ならnoshや三ツ星ファームの糖質・カロリー管理で十分ですが、後者なら医療レベルの栄養管理ができるウェルネスダイニング一択です。特に腎臓病（たんぱく質制限）・糖尿病（糖質15g以下）・高血圧（塩分2.0g以下）の制限食は、一般的な宅配弁当では対応できません。自分の目的が「健康維持」なのか「食事療法」なのかを明確にしてから選びましょう。",
          },
          {
            title: "配送頻度と送料",
            text: "宅配弁当は食材費だけでなく、毎回の送料がかかります。noshは2026年7月27日改訂の送料表で4〜12食1,023円（関西）〜1,713円（北海道）、20食1,243円〜1,992円と地域差があり、三ツ星ファームは990円（北海道・沖縄2,500円）。北海道在住でnoshを月3回受け取ると送料だけで5,139円になります。一方、ウェルネスダイニングは都度注文880円（北海道・沖縄1,870円）、定期注文なら7食440円・14食と21食は無料です（2026年10月10日・公式確認）。配送頻度は各社1〜4週に1回から選べますが、まとめて注文するほど1回あたりの送料負担は減ります。冷凍庫の容量と相談しながら、送料を含めたトータルコストで判断しましょう。",
          },
          {
            title: "解約・スキップのしやすさ",
            text: "「いざという時にすぐ辞められるか」は意外と見落としがちなポイントです。noshはマイページ（電話・フォームも可）から手続きでき、締切はお届け予定日の4〜5日前（地域により異なる）、初回分はキャンセル不可です（2026年10月10日・公式確認）。三ツ星ファームは公式アプリ・LINE・電話で停止可能（お得プランの途中解約は電話のみ・手数料あり）。ウェルネスダイニングは1回休止がマイページ、複数回休止・解約がフォーム、電話（0120-503-999）で受け付けており、お届け予定日の7日前までの連絡が必要です（2026年10月10日・公式確認）。また3社とも、解約だけでなく「スキップ」（次回配送を1回飛ばす）機能があるので、「来月は不要」という時も安心。まずは気軽に始めて、合わなければすぐ辞められるかどうかを確認しておきましょう。",
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
            { step: "4", title: "継続 or スキップ or 解約", text: "次回便の発送日が近づく前に、継続・スキップ・解約を判断。解約方法と締切は各社で異なります（nosh: マイページ・4〜5日前、三ツ星: アプリ・LINE・電話・7日前、ウェルネス: フォーム・電話・7日前）。" },
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
            <li><strong>迷ったら → nosh</strong>（コスパ・メニュー数・手続きのしやすさで最も万能）</li>
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
                宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。
              </p>
            </div>
          </div>
        </div>

        {/* Related articles placeholder */}
        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5
              </Link>
            </li>
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">ウェルネスダイニングの口コミ・評判は？まずいって本当？制限食宅配を中立検証</Link></li>
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】高齢者向け宅配弁当おすすめランキングTOP5｜やわらか食・制限食も徹底比較</Link></li>
            <li><Link href="/articles/mitsuboshi-coupon/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのクーポン・キャンペーン｜初回割引の探し方と注意点</Link></li>
            <li><Link href="/articles/nosh-ryoukin-souryou/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の料金・送料の仕組みをわかりやすく解説</Link></li>
          </ul>
        </div>
      
        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約。メニューにより変動があるため、各サービスの平均的レンジを記載。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link> 参照。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-warm-border bg-white rounded-lg overflow-hidden">
              <thead className="bg-cream">
                <tr>
                  <th className="border-b border-warm-border px-3 py-2 text-left text-xs font-bold text-foreground">サービス</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">kcal</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">糖質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">タンパク質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">塩分(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">1食(円)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">nosh（ナッシュ）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">612-719</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">三ツ星ファーム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">25以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">711-927</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウェルネスダイニング</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-330</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">12-18</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">752-1,165</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://magokoro-care-shoku.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">まごころケア食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-350</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">462-580</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワタミの宅食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">40-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">3.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">590-680</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://shoutakubin.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">食宅便</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">560-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">Muscle Deli</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-60</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,098-1,490</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">597-750</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.5</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">550-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.pal-system.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">パルシステム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">580-720</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ナッシュclub（割引）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">492〜（最高ランク）</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">つるかめキッチン</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">13</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">660-815</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://1meal.life/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワンミール</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">770-840</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://fitfoodhome.tabeyoukai.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">FIT FOOD HOME</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">750-1,080</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://gofood.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">GOFOOD</a>（2025年6月30日にサービス終了）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">サービス終了</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※2026年5月時点の公開データ（三ツ星ファームの行は2026年10月9日に公式サイトで再確認し、kcal・糖質・タンパク質を三ツ星基準、価格を通常の定期便の1食単価に更新。塩分は公式に基準の記載が見当たらないため「−」。nosh・ナッシュclub・ウェルネスダイニングの価格は2026年10月10日に公式サイトで再確認し、noshは公式表記の1食単価、ウェルネスダイニングは全6コース・7〜21食の税込価格÷食数で算出、kcal・塩分は各コースの公式基準に更新）。最新情報は各公式サイトでご確認ください。</p>
        </section>

                {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
