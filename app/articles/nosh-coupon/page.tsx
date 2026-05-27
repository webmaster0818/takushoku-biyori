import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】nosh(ナッシュ)クーポン・割引コード完全ガイド｜初回最大3,000円OFFの全手順";
const ARTICLE_DESCRIPTION =
  "nosh(ナッシュ)で使えるクーポン・割引コード・キャンペーンを公式情報ベースで整理。初回最大3,000円OFFの内訳、nosh club継続割引、友達紹介の仕組みと申込手順、注意点まで丁寧に解説します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-coupon/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh クーポン, ナッシュ クーポン, nosh 割引コード, ナッシュ 初回割引, nosh キャンペーン, nosh 3000円オフ, nosh 友達紹介, nosh club, 宅配弁当 クーポン",
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

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "noshのクーポンコードはどこで入手できる？",
    answer:
      "nosh公式サイト経由で新規登録すると、3回分の自動割引（初回1,500円OFF、2回目1,000円OFF、3回目500円OFFの合計3,000円OFF）が自動適用されます。クーポンコードを手入力する必要はありません。また、既存利用者からの友達紹介リンクを経由した場合は、友達紹介限定の割引（紹介された側にもクーポン）が付与されます。怪しいクーポンコード掲載サイトは公式情報ではないため、必ず公式サイトから確認してください。",
  },
  {
    question: "初回3,000円OFFは10食プランにも適用される？",
    answer:
      "はい、6食・8食・10食のすべてのプランに適用されます。割引額は1,500円OFF（初回）+ 1,000円OFF（2回目）+ 500円OFF（3回目）の合計3,000円分で、対象食数に関わらず固定です。10食プランで活用すると1食あたりの割引効果が最も大きくなります（2026年5月時点の公式情報）。",
  },
  {
    question: "クーポンが使えない・適用されない時は？",
    answer:
      "考えられる原因は3つあります。(1)過去にnoshを利用したアカウントで再登録した（初回割引は新規アカウントのみ）。(2)既にキャンペーン期間が終了している。(3)別のキャンペーンと併用できない。クーポンが反映されない場合は、注文確定前に「ご注文確認画面」で割引額を確認し、適用されていない場合はnoshカスタマーサポートに問い合わせるのが確実です。",
  },
  {
    question: "nosh clubと初回割引は併用できる？",
    answer:
      "nosh clubは累計購入数に応じて自動的に割引率が上がる仕組みで、初回からは適用されません。初回〜3回目までは「新規割引（合計3,000円OFF）」、4回目以降は購入実績に応じて「nosh club（最大16.55%OFF）」が自動適用されます。新規割引終了後もnosh clubで継続的に割引が受けられる設計です。",
  },
  {
    question: "noshのクーポンに有効期限はある？",
    answer:
      "初回〜3回目の自動割引は、新規登録後に注文した3回分まで有効です。注文を行わない期間が長く続いてもクーポンが消失することは公式には案内されていませんが、キャンペーン内容自体が変更される可能性があります。最新の割引内容はnosh公式サイトでご確認ください。なお、友達紹介クーポンには有効期限が設定されていることがあるため、付与後は早めの利用がおすすめです。",
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
          <span className="text-foreground/70">クーポン・キャンペーン</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">nosh(ナッシュ)クーポン完全ガイド</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：noshの現行クーポン早見表（2026年5月時点）" },
    { id: "initial", label: "初回〜3回目の自動割引｜合計3,000円OFFの内訳" },
    { id: "how-to", label: "クーポン適用の申込手順（5ステップ）" },
    { id: "nosh-club", label: "nosh club｜継続するほど安くなる仕組み" },
    { id: "referral", label: "友達紹介クーポンの仕組みと注意点" },
    { id: "notes", label: "クーポン利用の注意点・併用ルール" },
    { id: "fake", label: "「裏ワザクーポンコード」「裏技」に要注意" },
    { id: "compare", label: "他社の初回割引キャンペーンとの比較" },
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

/* ---------- Page Component ---------- */

export default function NoshCouponPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-05-28T00:00:00+09:00",
    dateModified: "2026-05-28T00:00:00+09:00",
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
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://takushoku-biyori.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "クーポン・キャンペーン",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "nosh(ナッシュ)クーポン完全ガイド",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        {/* Title */}
        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            クーポン・キャンペーン
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>{" "}
              /{" "}
              <Link href="/author/" className="text-accent hover:underline">
                編集部メンバー
              </Link>
            </span>
          </div>
        </header>

        {/* PR Disclosure */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。リンク経由でのお申込みにより当サイトに収益が発生する場合がありますが、評価・記載内容は公平を期しています。料金・キャンペーン情報は本記事公開時点の<strong>2026年5月時点の公式情報</strong>に基づきます。最新情報は必ず<a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">nosh公式サイト</a>でご確認ください。
        </div>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「nosh(ナッシュ)を始めたいけど、クーポンや割引コードはあるの？」「初回いくら安くなる？」——人気の冷凍宅配弁当noshには複数の割引制度があり、上手に使えば<strong>初回最大3,000円OFF</strong>で始められます。
          </p>
          <p className="mb-3">
            この記事では、<strong>2026年5月時点のnosh公式キャンペーン情報</strong>をもとに、自動割引・nosh club・友達紹介の3つの仕組みを丁寧に整理。クーポンコードの真偽、適用手順、注意点まで初心者にもわかりやすく解説します。
          </p>
          <p>
            「裏技クーポンコード」「秘密の割引」といった怪しい情報に惑わされず、公式の最大値で安心してお得に始めるための完全ガイドです。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論早見表 ===== */}
        <SectionHeading id="summary-top">結論：noshの現行クーポン早見表（2026年5月時点）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          まず結論から。2026年5月時点でnosh公式が提供している割引制度は<strong>3種類</strong>あります。クーポンコードを手入力する必要はなく、公式サイト経由で新規登録すれば自動的に適用されるのが基本です。
        </p>

        <ComparisonTable
          headers={["割引制度", "対象", "割引額/率", "適用方法"]}
          rows={[
            ["初回〜3回目の新規割引", "新規登録者", "合計3,000円OFF（1,500+1,000+500）", "自動適用"],
            ["nosh club", "全利用者", "累計購入数に応じ最大16.55%OFF", "自動適用（ランク制）"],
            ["友達紹介クーポン", "紹介する側・される側", "公式案内に準ずる（時期により変動）", "紹介リンク経由で登録"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li>クーポンコードの手入力は<strong>不要</strong>。公式サイト経由なら自動適用</li>
            <li>初回〜3回目で<strong>合計3,000円OFF</strong>（1回目1,500円・2回目1,000円・3回目500円）</li>
            <li>長期利用なら<strong>nosh club</strong>で1食最安499円まで下がる</li>
            <li>「秘密のクーポンコード」「裏技」を謳うサイトは公式情報ではない</li>
          </ul>
        </div>

        <div className="text-center my-6">
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors text-sm"
          >
            nosh公式サイトでクーポン詳細を見る
          </a>
          <p className="text-xs text-warm-gray mt-2">※キャンペーン内容は予告なく変更される場合があります</p>
        </div>

        {/* ===== 初回〜3回目割引 ===== */}
        <SectionHeading id="initial">初回〜3回目の自動割引｜合計3,000円OFFの内訳</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshの新規登録者向け割引は、<strong>3回に分けて段階的に適用</strong>される仕組みです。「初回だけ大きく割引」ではなく、合計3,000円分を3回に分散させているのが特徴で、継続利用しないと割引の総額を受け取れない設計になっています。
        </p>

        <SubHeading>3回分の割引内訳</SubHeading>
        <ComparisonTable
          headers={["回数", "割引額", "適用イメージ（10食プラン税込5,990円の場合）"]}
          rows={[
            ["1回目（初回）", "1,500円OFF", "5,990円 → 4,490円"],
            ["2回目", "1,000円OFF", "5,990円 → 4,990円"],
            ["3回目", "500円OFF", "5,990円 → 5,490円"],
            ["合計", "3,000円OFF", "3回合計で約16.7%相当の値引き"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※上記は税込料金で計算。送料は別途かかります（地域別送料は<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh口コミ・評判記事</Link>で詳しく解説）。
        </p>

        <SubHeading>10食プランで使うのが最もお得な理由</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          割引額は3回分とも<strong>食数に関わらず一律</strong>です。つまり、6食プラン（698円/食）に1,500円OFFを使うより、10食プラン（599円/食）に同額を使ったほうが「実質単価」のインパクトが大きくなります。初回1回あたりの1食単価でみると以下のとおりです。
        </p>

        <ComparisonTable
          headers={["プラン", "通常1食", "初回1,500円OFF適用時"]}
          rows={[
            ["6食プラン", "698円", "約448円"],
            ["8食プラン", "624円", "約499円"],
            ["10食プラン", "599円", "約449円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          1食あたりで考えると、6食プランと10食プランは初回ほぼ同水準（449円前後）まで下がります。<strong>「食数のお得感+冷凍庫の余裕」</strong>を両立できる10食プランが、初回のおすすめです。
        </p>

        {/* ===== 申込手順 ===== */}
        <SectionHeading id="how-to">クーポン適用の申込手順（5ステップ）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初回3,000円OFFを確実に適用するための手順を、画面の流れに沿って解説します。最も大事なのは「<strong>公式サイトを経由すること</strong>」。比較サイトや個人ブログのリンクからでも同じ割引が適用されますが、信頼できる公式ドメイン（nosh.jp）を踏むことが重要です。
        </p>

        {[
          {
            num: 1,
            title: "nosh公式サイト（nosh.jp）にアクセス",
            text: "ブラウザで「nosh 公式」と検索するか、当ページのCTAボタンから直接遷移します。「nosh.jp」のドメインであることを確認しましょう。",
          },
          {
            num: 2,
            title: "プランを選択（6食/8食/10食）",
            text: "おすすめは10食プラン。冷凍庫スペースが厳しい場合は6食プランから始めて、慣れたら増やすのも選択肢です。",
          },
          {
            num: 3,
            title: "好きなメニューを選ぶ",
            text: "60種類以上のメニューから、糖質・カロリーを見ながら自由に選択。「初心者ランキング」「人気TOP10」などのフィルタも使えます。",
          },
          {
            num: 4,
            title: "配送頻度・配送先・支払い方法を入力",
            text: "配送間隔は1週/2週/3週から選択。冷凍庫の在庫状況に合わせて2週間に1回が無難。支払いはクレジットカード、Amazon Pay、代金引換が利用できます。",
          },
          {
            num: 5,
            title: "注文確認画面で割引額を確認",
            text: "「初回1,500円OFF」が金額欄に表示されているかを必ずチェック。表示されていれば適用済みです。表示されない場合はカスタマーサポートに問い合わせを。",
          },
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

        {/* ===== nosh club ===== */}
        <SectionHeading id="nosh-club">nosh club｜継続するほど安くなる仕組み</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初回3回分の新規割引が終わった後も、noshには「<strong>nosh club</strong>」という<strong>累計購入数に応じた自動割引制度</strong>があります。10食ごとにランクが1つ上がり、最高ランク（累計170食以上）で<strong>16.55%OFF</strong>。クーポン入力は不要で、購入を重ねるだけで自動的に割引率が上がります。
        </p>

        <ComparisonTable
          headers={["ランク", "累計購入数の目安", "割引率", "10食プラン1食あたり"]}
          rows={[
            ["ランク1", "初回〜", "0%", "599円"],
            ["ランク2", "10食以上", "1%", "約593円"],
            ["ランク3", "20食以上", "2%", "約587円"],
            ["ランク6", "50食以上", "5%", "約569円"],
            ["ランク10", "90食以上", "9%", "約545円"],
            ["ランク14", "130食以上", "13%", "約521円"],
            ["ランク18（最高）", "170食以上", "16.55%", "約499円"],
          ]}
        />

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">nosh club活用のコツ</p>
          <ul className="list-disc list-inside space-y-1">
            <li>「解約」するとランクがリセットされる。一時休止したい時は<strong>「スキップ」や「プラン停止」</strong>を選ぶ</li>
            <li>10食プランで2週間に1回配送 → 約8〜9ヶ月で最高ランクに到達</li>
            <li>最高ランク（1食499円）+ 関東送料913円なら、送料込みで約590円/食</li>
            <li>新規割引（初回〜3回目）とnosh clubは時系列で順に適用される</li>
          </ul>
        </div>

        {/* ===== 友達紹介 ===== */}
        <SectionHeading id="referral">友達紹介クーポンの仕組みと注意点</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          既にnoshを利用している知人がいる場合、その人の<strong>「友達紹介リンク」</strong>から登録すると、新規割引に加えて紹介特典が付与される仕組みがあります。具体的な割引額・特典内容はキャンペーン時期により変動するため、最新情報は公式サイトおよび紹介者から共有されるリンクに記載された内容をご確認ください。
        </p>

        <SubHeading>友達紹介の流れ</SubHeading>
        <ol className="text-sm space-y-2 mb-6 list-decimal list-inside leading-relaxed">
          <li>既存利用者がマイページから「友達紹介リンク」を発行</li>
          <li>紹介リンクを共有（LINE・X・メール等）</li>
          <li>紹介された人がリンク経由で登録 → 紹介特典が自動付与</li>
          <li>紹介した側にもクーポン（ポイント）が付与される</li>
        </ol>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">友達紹介の注意点</p>
          <ul className="list-disc list-inside space-y-1">
            <li>紹介リンク経由 + 通常の新規割引の<strong>併用可否</strong>はキャンペーン時期により異なる。公式案内を確認</li>
            <li>SNSで赤の他人の紹介リンクを使うとトラブルの元。信頼できる知人のリンクのみを利用</li>
            <li>紹介クーポンには<strong>有効期限</strong>が設定されていることが多い</li>
          </ul>
        </div>

        {/* ===== 注意点 ===== */}
        <SectionHeading id="notes">クーポン利用の注意点・併用ルール</SectionHeading>

        {[
          {
            title: "1. 過去にnoshを利用したアカウントでは新規割引が使えない",
            text: "「初回〜3回目の3,000円OFF」は新規アカウントが対象。過去に登録歴があると、メールアドレスを変えても利用できないケースがあります。家族で利用する場合は、利用者ごとに別アカウントで登録するのが原則ですが、世帯単位で見ると新規割引は1度きりと考えておくのが安全です。",
          },
          {
            title: "2. 送料は割引対象外",
            text: "クーポンは商品代金にかかる割引で、送料には適用されません。関東なら913円、北海道なら2,145円、沖縄なら2,827円が別途必要です。送料込みの総額で考えるなら、まとめ買い（10食プラン）で1食あたりの送料負担を抑えるのが定石です。",
          },
          {
            title: "3. キャンペーン期間限定の上乗せ割引が出ることがある",
            text: "noshは時期によって「初回〇〇円OFFキャンペーン」など、通常の新規割引に上乗せされる期間限定企画を実施することがあります。公式LINEやメルマガ、X（旧Twitter）の公式アカウントをフォローしておくと、開催情報を最速でキャッチできます。",
          },
          {
            title: "4. クーポンが反映されない時の対処",
            text: "注文確認画面で割引額が表示されない場合、(1)別ブラウザのシークレットモードで再アクセス、(2)Cookieを削除して再試行、(3)それでも解決しない場合はnoshカスタマーサポートに問い合わせ、の順で対処を。注文確定後の事後適用は基本的に難しいため、必ず確定前に確認してください。",
          },
        ].map((item, i) => (
          <div key={i} className="bg-cream rounded-lg p-4 mb-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}

        {/* ===== 偽クーポン警告 ===== */}
        <SectionHeading id="fake">「裏ワザクーポンコード」「裏技」に要注意</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ネット上には「nosh限定クーポンコード」「秘密の裏技で5,000円オフ」といった煽り文句のブログやSNS投稿が散見されます。しかし、<strong>2026年5月時点のnosh公式が提供している新規割引は「合計3,000円OFF（1,500+1,000+500）」のみ</strong>です。
        </p>

        <SubHeading>注意すべきパターン</SubHeading>
        <ul className="text-sm space-y-2 mb-6 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">&#10007;</span>
            <span>「クーポンコード入力で5,000円OFF」と謳うサイト（公式に該当キャンペーンなし）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">&#10007;</span>
            <span>「裏技で永久10%OFF」（実態はnosh clubの仕組みを誇張しただけ）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">&#10007;</span>
            <span>公式ドメイン以外で個人情報入力を求めるサイト</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">&#10007;</span>
            <span>古いキャンペーン情報を「現行」のように見せている記事（更新日チェック必須）</span>
          </li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          安全に最大限の割引を受けるなら、<strong>公式サイト（nosh.jp）から直接登録</strong>するのが鉄則です。当サイトのリンクも公式サイトに直接遷移する設計になっています。
        </p>

        {/* ===== 他社比較 ===== */}
        <SectionHeading id="compare">他社の初回割引キャンペーンとの比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshの3,000円OFFが他社と比べてどの程度お得なのか、主要冷凍宅配弁当サービスの初回キャンペーンを比較しました。表中の金額は2026年5月時点の公式情報で、変動の可能性があります。
        </p>

        <ComparisonTable
          headers={["サービス", "初回割引（概要）", "1食通常価格", "適用方法"]}
          rows={[
            ["nosh", "3回分割引 計3,000円OFF", "599〜698円", "公式サイト自動適用"],
            ["三ツ星ファーム", "初回限定セット価格あり", "626〜842円", "公式キャンペーンページ経由"],
            ["ウェルネスダイニング", "初回送料無料", "663〜880円", "公式申込フォーム"],
            ["まごころケア食", "初回限定セット価格あり", "462〜580円", "公式サイトから定期申込"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          noshの「3,000円OFF」は割引額単体では業界トップクラス。とくに10食プランで使うと1食あたりの実質単価がぐっと下がるため、コスパ重視ならまずnoshを候補に入れるのがおすすめです。サービス全体の比較は<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh口コミ・評判の徹底レビュー</Link>もあわせてご確認ください。
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
        <SectionHeading id="summary">まとめ：公式の最大値で安心してお得に始めよう</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            nosh(ナッシュ)のクーポン・割引コードは、<strong>2026年5月時点で公式が提供する「初回〜3回目の合計3,000円OFF」</strong>が最大値です。クーポンコードの手入力は不要で、公式サイト経由で新規登録するだけで自動的に適用されます。
          </p>
          <p className="mb-3">
            さらに、3回分の新規割引終了後は<strong>nosh club</strong>が引き継ぎ、累計購入数に応じて最大16.55%OFFまで自動で割引率が上がっていく仕組み。継続利用する人ほどお得になる設計なので、「合うかどうか」をまず初回3,000円OFFで試して、合えば長期で続けるのが最適解です。
          </p>
          <p>
            「秘密のクーポンコード」「裏技5,000円オフ」といった怪しい情報は無視して、公式情報のとおりに進めるのが結果的に最もお得かつ安全です。最新のキャンペーン情報は必ず公式サイトで確認してから申し込んでください。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            nosh公式サイトで最新クーポンを見る
          </a>
          <p className="text-xs text-warm-gray mt-2">※キャンペーン内容・料金は変更される場合があります</p>
        </div>

        {/* ===== 関連記事 ===== */}
        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/nosh-5000yen-off/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            nosh初回5,000円オフキャンペーンは本当？
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/nosh-cancel/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            nosh解約方法を画像付きで解説
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/souryou-yasui-ranking/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            送料が安い宅配弁当ランキング
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
      </article>
    </>
  );
}
