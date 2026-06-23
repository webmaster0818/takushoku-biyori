import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "nosh(ナッシュ)初回5,000円オフキャンペーンは本当？2026年最新の公式割引と適用条件・申込手順";
const ARTICLE_DESCRIPTION =
  "「nosh初回5,000円オフ」の真相を公式情報ベースで徹底解説。実際にはどんな割引が用意されているのか、適用条件、申込手順、注意点まで完全網羅。誤情報に惑わされず公式の最大値で安全にお得に始めるためのガイドです。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-5000yen-off/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh 5000円オフ, ナッシュ 5000円割引, nosh 初回 5000円, nosh キャンペーン 真相, nosh 初回割引, ナッシュ 初回 いくら, nosh お得 始め方",
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
    question: "nosh初回5,000円オフは本当に存在する？",
    answer:
      "2026年5月時点のnosh公式が提供する常設の新規割引は「初回〜3回目で合計3,000円OFF（1,500円+1,000円+500円）」です。「5,000円オフ」と謳う情報には、(1)期間限定の特別キャンペーンが過去に実施された名残、(2)他社キャンペーンとの混同、(3)誤情報の3パターンがあり、現在の常設プランで5,000円OFFは確認できません。最新情報は必ずnosh公式サイトでご確認ください。",
  },
  {
    question: "過去に5,000円オフキャンペーンはあった？",
    answer:
      "noshは時期によって期間限定で割引額を上乗せした特別キャンペーンを実施することがあります。その中で「初回○○円OFF」と通常より大きな割引が出る場合もありますが、開催時期・条件・割引額は都度変わります。現時点（2026年5月）で常時提供されているのは「3回分割引の合計3,000円OFF」です。期間限定企画は公式LINE・メルマガ・X公式アカウントで告知されます。",
  },
  {
    question: "noshで5,000円相当お得に始める方法は？",
    answer:
      "公式の3,000円OFFに加えて、(1)10食プランで1食あたりの単価を最安水準にする、(2)既存利用者からの友達紹介リンクを併用する、(3)期間限定キャンペーンを狙う、の3つを組み合わせることで、実質5,000円前後お得になるケースがあります。ただし友達紹介の特典額・併用可否は時期により異なるため、公式情報を確認のうえ判断してください。",
  },
  {
    question: "クーポンコードを入力する欄はある？",
    answer:
      "通常の新規割引（3回分の3,000円OFF）はクーポンコードの入力不要で自動適用されます。友達紹介リンクから登録した場合も、リンク経由でアクセスすれば自動的に紹介特典が反映される設計です。「クーポンコードを入力すれば5,000円オフ」と謳うサイトの多くは、公式情報ではない可能性が高いため利用を避けてください。",
  },
  {
    question: "5,000円オフ情報が古かった場合、損する？",
    answer:
      "損するというより、「期待した割引が受けられない」可能性があります。古いキャンペーン情報を見て5,000円割引を期待し、実際は3,000円OFFだったというパターンが典型例です。記事の更新日と「2026年○月時点の情報」明記を必ず確認し、最終的にはnosh公式サイトの注文確認画面で実際の割引額を必ずチェックしてから注文を確定してください。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">クーポン・キャンペーン</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">nosh初回5,000円オフキャンペーンは本当？</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "conclusion", label: "結論：常設の公式割引は「合計3,000円OFF」が現行最大" },
    { id: "truth", label: "「5,000円オフ」情報の正体｜3つのパターン" },
    { id: "official", label: "公式の常設キャンペーン｜3回分3,000円OFFの全貌" },
    { id: "limited", label: "期間限定キャンペーンを狙う方法" },
    { id: "stacking", label: "実質5,000円相当お得にする組み合わせ" },
    { id: "apply", label: "適用条件と申込手順（6ステップ）" },
    { id: "compare", label: "他社の初回キャンペーンとの比較" },
    { id: "warning", label: "誤情報・古い情報に惑わされない3つのコツ" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
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
              <th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>
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
    <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

export default function Nosh5000yenOffPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-05-28T00:00:00+09:00",
    dateModified: "2026-05-28T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "クーポン・キャンペーン" },
      { "@type": "ListItem", position: 3, name: "nosh初回5,000円オフキャンペーンは本当？" },
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
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            クーポン・キャンペーン
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年5月時点のnosh公式サイト掲載情報</strong>に基づき記述しています。料金・キャンペーンは変動するため、最新の正確な情報は必ず<a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">nosh公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「nosh(ナッシュ)で初回5,000円オフのキャンペーンがあるって本当？」「適用条件は？」——SNSや古いブログ記事で「5,000円割引」を見かけて、気になっている方は多いはず。
          </p>
          <p className="mb-3">
            結論からお伝えすると、<strong>2026年5月時点でnosh公式が常時提供している新規割引は「合計3,000円OFF（1,500円+1,000円+500円の3回分割引）」</strong>です。「5,000円オフ」と謳う情報の多くは、過去の特別キャンペーンの名残や、複数の特典を合算した広告表現、あるいは誤情報の可能性があります。
          </p>
          <p>
            この記事では、「5,000円オフ」情報の真相を解明しつつ、現行の公式割引を最大限活用して「<strong>実質5,000円相当お得</strong>」に始めるための組み合わせ術もまとめます。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="conclusion">結論：常設の公式割引は「合計3,000円OFF」が現行最大</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          2026年5月時点でnosh公式サイトに掲載されている常設の新規割引は、以下の<strong>3回分割引（合計3,000円OFF）</strong>です。
        </p>

        <ComparisonTable
          headers={["回数", "割引額"]}
          rows={[
            ["初回（1回目）", "1,500円OFF"],
            ["2回目", "1,000円OFF"],
            ["3回目", "500円OFF"],
            ["合計", "3,000円OFF"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li>nosh公式の常設新規割引は<strong>合計3,000円OFF</strong>（2026年5月時点）</li>
            <li>「5,000円オフ」は期間限定キャンペーンか誤情報の可能性が高い</li>
            <li>公式3,000円OFF + 友達紹介 + 期間限定企画で<strong>実質5,000円前後お得</strong>になる場合あり</li>
            <li>クーポン情報は<strong>必ず更新日と「○年○月時点」表記をチェック</strong></li>
          </ul>
        </div>

        {/* ===== 真相 ===== */}
        <SectionHeading id="truth">「5,000円オフ」情報の正体｜3つのパターン</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ネット上で見かける「nosh初回5,000円オフ」情報は、主に以下の3つのいずれかに該当します。
        </p>

        <SubHeading>パターン1：過去の期間限定キャンペーンの古い情報</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          noshは過去に新生活シーズン・年末年始など、季節要因で<strong>期間限定の上乗せキャンペーン</strong>を実施することがあります。その中に「合計5,000円OFF相当」のものが含まれていた可能性はゼロではありませんが、開催期間が過ぎているケースが大半です。「2024年」「2025年」など過去の年号が記載された記事を見たら要注意。<strong>必ず最新の公式サイト</strong>で現行のキャンペーン内容を確認してください。
        </p>

        <SubHeading>パターン2：友達紹介・初回割引・継続割引を合算した表現</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          「初回3,000円OFF + 友達紹介○○円 + 継続でさらに○○円」を合計して「5,000円オフ相当」と表現するケースがあります。間違いではないものの、「初回1回で5,000円安くなる」と受け取ると認識違いになります。実態は<strong>段階的な合計値</strong>であることを理解しておくと、過剰な期待を避けられます。
        </p>

        <SubHeading>パターン3：他社キャンペーンとの混同・誤情報</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          別の宅食サービスのキャンペーン情報を、誤って「nosh」と表記している記事も散見されます。たとえば三ツ星ファームやウェルネスダイニングが行う初回特典が、検索結果でnosh関連と混在して表示されることがあるため、必ず<strong>サービス名と公式ドメイン</strong>を一致させて確認しましょう。
        </p>

        {/* ===== 公式キャンペーン ===== */}
        <SectionHeading id="official">公式の常設キャンペーン｜3回分3,000円OFFの全貌</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          現行のnosh公式新規割引は、<strong>「分散型の3回割引」</strong>が特徴です。初回1回で全額が引かれるのではなく、3回分の購入を通じて累計3,000円分の割引が適用されます。これによりnosh側は「継続利用を促す」設計、ユーザー側は「3回分試せる」というメリットがあります。
        </p>

        <SubHeading>10食プランで適用した場合の実質料金</SubHeading>
        <ComparisonTable
          headers={["回数", "通常料金（税込）", "割引額", "支払額"]}
          rows={[
            ["1回目（初回）", "5,990円", "1,500円OFF", "4,490円"],
            ["2回目", "5,990円", "1,000円OFF", "4,990円"],
            ["3回目", "5,990円", "500円OFF", "5,490円"],
            ["3回合計", "17,970円", "3,000円OFF", "14,970円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※送料は別途必要です。地域別送料は<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh口コミ・評判記事</Link>を参照してください。
        </p>

        <SubHeading>1食あたりの実質単価（初回適用後）</SubHeading>
        <ComparisonTable
          headers={["プラン", "通常1食", "初回1,500円OFF適用後"]}
          rows={[
            ["6食プラン", "698円", "約448円"],
            ["8食プラン", "624円", "約499円"],
            ["10食プラン", "599円", "約449円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          初回1回だけで見ると、10食プランの1食あたりは<strong>約449円まで下がります</strong>。これは三ツ星ファームやウェルネスダイニングを含めた主要サービスの初回価格と比べてもトップクラスのコスパです。
        </p>

        {/* ===== 期間限定 ===== */}
        <SectionHeading id="limited">期間限定キャンペーンを狙う方法</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshが行う期間限定キャンペーンは、通常の3,000円OFFに上乗せされる形で実施されることがあります。これを確実にキャッチするには、以下の情報源をフォローしておきましょう。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>nosh公式LINE（友だち追加でクーポン配布の告知）</li>
          <li>nosh公式X（旧Twitter）アカウント</li>
          <li>noshメールマガジン（新規登録時に自動配信）</li>
          <li>nosh公式アプリのプッシュ通知</li>
          <li>キャンペーン時期：新生活（3〜4月）/ 夏休み（7〜8月）/ ブラックフライデー（11月）/ 年末年始（12〜1月）</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">期間限定キャンペーンの注意点</p>
          <ul className="list-disc list-inside space-y-1">
            <li>常設の3,000円OFFとの併用可否は、キャンペーン毎に異なる</li>
            <li>適用条件（特定プランのみ、初回限定など）が細かく設定されることがある</li>
            <li>「過去にあった」情報を現行のように記載するブログに注意</li>
          </ul>
        </div>

        {/* ===== 実質5000円 ===== */}
        <SectionHeading id="stacking">実質5,000円相当お得にする組み合わせ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公式の3,000円OFFをベースに、以下の3つを組み合わせると、<strong>実質5,000円前後お得</strong>に始められる可能性があります。
        </p>

        <SubHeading>組み合わせ1：3,000円OFF + 友達紹介リンク</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          既存利用者の友達紹介リンクから登録すると、新規割引に加えて紹介特典がつくケースがあります。具体的な特典額・併用可否は時期により異なりますが、過去には<strong>合計4,000〜5,000円相当</strong>の組み合わせ事例も。信頼できる知人にリンクを共有してもらうのが安全です。
        </p>

        <SubHeading>組み合わせ2：10食プラン + nosh club継続割引</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          初回〜3回目の合計3,000円OFFが終わった後も、<strong>nosh clubで自動的に最大16.55%OFF</strong>まで割引率が上がります。3回分の新規割引と合わせて1年間の総支出で比較すると、結果的に5,000円どころか<strong>1〜2万円規模の節約</strong>になるケースもあります。
        </p>

        <SubHeading>組み合わせ3：期間限定キャンペーン期にスタート</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ブラックフライデー（11月）や新生活シーズン（3〜4月）など、特別キャンペーン時に申し込むと、通常の3,000円OFFを超える割引が適用される可能性があります。緊急で始める必要がなければ、これらの時期を狙うのも賢い選択です。
        </p>

        {/* ===== 申込手順 ===== */}
        <SectionHeading id="apply">適用条件と申込手順（6ステップ）</SectionHeading>

        <SubHeading>適用条件</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li><strong>新規アカウント</strong>での登録（過去に利用歴のあるアカウントは対象外）</li>
          <li>公式サイト（nosh.jp）または公式アプリから注文</li>
          <li>定期購入プラン（6食/8食/10食のいずれか）に申し込み</li>
          <li>クーポンコード入力は<strong>不要</strong>（自動適用）</li>
        </ul>

        <SubHeading>申込手順</SubHeading>
        {[
          { num: 1, title: "nosh公式サイト（nosh.jp）にアクセス", text: "ブラウザまたは公式アプリから直接アクセス。怪しいリンクは避け、公式ドメインを必ず確認。" },
          { num: 2, title: "プランを選択", text: "おすすめは10食プラン。冷凍庫スペースに不安があれば6食プランから。" },
          { num: 3, title: "好きなメニューを選ぶ", text: "60種類以上から自由選択。「人気ランキング」「新メニュー」フィルタで失敗を回避。" },
          { num: 4, title: "配送頻度・支払い方法を設定", text: "1週/2週/3週に1回から選択。最初は2週に1回が無難。" },
          { num: 5, title: "注文確認画面で割引額を確認", text: "「1,500円OFF」または相当の割引が金額欄に表示されるか必ずチェック。" },
          { num: 6, title: "注文確定 → メール受信を確認", text: "確定後、注文確認メールが届く。届かない場合は迷惑メールフォルダも確認。" },
        ].map((step) => (
          <div key={step.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {step.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{step.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 他社比較 ===== */}
        <SectionHeading id="compare">他社の初回キャンペーンとの比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          他社の初回キャンペーンと比較しても、noshの3,000円OFFは業界水準でトップクラスです。下表は2026年5月時点の公式情報に基づきます。
        </p>

        <ComparisonTable
          headers={["サービス", "初回特典（概要）", "通常1食価格"]}
          rows={[
            ["nosh", "3回分の合計3,000円OFF（自動適用）", "599〜698円"],
            ["三ツ星ファーム", "初回限定セット価格を提供", "626〜842円"],
            ["ウェルネスダイニング", "初回送料無料", "663〜880円"],
            ["まごころケア食", "初回セット限定価格", "462〜580円"],
            ["食宅便", "セット価格・送料無料キャンペーンあり", "560〜700円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          総合的なサービス比較は<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh口コミ・評判の徹底レビュー</Link>もあわせてご確認ください。
        </p>

        {/* ===== 警告 ===== */}
        <SectionHeading id="warning">誤情報・古い情報に惑わされない3つのコツ</SectionHeading>

        {[
          {
            num: 1,
            title: "記事の「更新日」と「○年○月時点」表記を確認",
            text: "宅食サービスのキャンペーンは数ヶ月単位で変わります。記事公開日が1年以上前のものは、現行のキャンペーンと食い違っている可能性が高いです。本記事のように「2026年5月時点」と明記している記事を優先しましょう。",
          },
          {
            num: 2,
            title: "クーポンコード入力を強要するサイトを避ける",
            text: "noshの常設新規割引はクーポンコード入力が不要です。「コード入力で5,000円オフ」と謳うサイトは、(1)古いキャンペーンを参照、(2)アフィリエイト誘導、(3)詐欺的な情報、のいずれかの可能性があります。",
          },
          {
            num: 3,
            title: "公式サイトの注文確認画面で必ず最終チェック",
            text: "どの情報源を信じるにせよ、最終的には注文確認画面に表示される割引額が真実です。「思っていた金額と違う」場合は、その時点で注文を中断し、サポートに問い合わせるのが安全策です。",
          },
        ].map((item) => (
          <div key={item.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {item.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：公式情報の最大値を使えば十分お得に始められる</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「nosh初回5,000円オフ」の真相は、<strong>「常設で5,000円オフは現在存在しない。公式の最大は3,000円OFF」</strong>です。「5,000円」を見たら、古い記事・期間限定企画・他社との混同のどれかと考えてOKです。
          </p>
          <p className="mb-3">
            ただし、悲観する必要はありません。公式の<strong>3,000円OFF + nosh club + 友達紹介 + 期間限定企画</strong>を組み合わせれば、長期で見れば実質5,000円どころか<strong>1〜2万円規模の節約</strong>も可能。「分散して長期で割引を受ける」のがnoshの設計思想です。
          </p>
          <p>
            最終的なキャンペーン内容は変動するため、必ず公式サイトの最新情報を確認のうえ、注文確認画面で割引額を確認してから確定してください。安全にお得に始めるなら、公式情報のとおりに進めるのが結局いちばんの近道です。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            nosh公式サイトで最新キャンペーンを確認
          </a>
          <p className="text-xs text-warm-gray mt-2">※キャンペーン内容・料金は変更される場合があります</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-coupon/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshクーポン・割引コード完全ガイド
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-cancel/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh解約方法を画像付きで解説
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            一人暮らしにおすすめの宅食TOP5
          </Link>
        </div>

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
      </article>
    </>
  );
}
