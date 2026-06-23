import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "nosh(ナッシュ)の初回割引まとめ【2026年版】クーポン・友達紹介との違いと使い方";
const ARTICLE_DESCRIPTION =
  "nosh(ナッシュ)の初回割引・初回クーポン・友達紹介の違いをわかりやすく整理。どれが一番お得か、併用できるのか、適用条件と申し込みの流れまで解説します。割引額は時期で変動するため、最新・正確な金額は公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-shokai-wari/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh 初回 割引, ナッシュ 初回割引, nosh 初回クーポン, nosh 友達紹介, nosh クーポン, nosh 初回 お得, ナッシュ 初めて, nosh キャンペーン",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-06-04T00:00:00+09:00",
    modifiedTime: "2026-06-04T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "noshの初回割引はいくらお得になる？",
    answer:
      "割引額は時期やキャンペーンによって変動するため、本記事では断定しません。noshは過去に「初回〜数回分の合計値引き」や「友達紹介によるクーポン」など複数の特典を提供してきましたが、金額・対象回数は更新されることがあります。最新かつ正確な割引額は、必ずnosh公式サイトの案内でご確認ください。",
  },
  {
    question: "初回割引・初回クーポン・友達紹介の違いは？",
    answer:
      "おおまかには次のように整理できます。【初回割引(初回キャンペーン)】は新規登録者向けにnoshが公式に用意している値引きで、申し込み時に自動適用されることが多い特典です。【初回クーポン】は特定の経路(キャンペーンページや提携先)で配布されるコードで、入力して使うタイプ。【友達紹介】は既存ユーザーから紹介リンク・コードを受け取って登録すると、紹介する側・される側の双方に特典が付く仕組みです。詳細条件は時期で変わるため公式で確認してください。",
  },
  {
    question: "初回割引と友達紹介は併用できる？",
    answer:
      "併用可否はキャンペーンの規約によって異なり、時期により変わります。一般に「自動適用の初回特典」と「クーポンコード」は同時に使えないケースがある一方、組み合わせられる場合もあります。確実なのは、申し込み画面で割引が反映されているかを最終確認すること。最も得になる組み合わせや併用ルールは、申込前にnosh公式の表示で必ずチェックしてください。",
  },
  {
    question: "初回割引を使うのに必要な条件は？",
    answer:
      "多くの場合、初回特典は「nosh(ナッシュ)を初めて利用する新規アカウント」が条件です。過去に登録・利用したことがあるメールアドレスや、解約後の再登録では対象外になることがあります。クーポンには有効期限・最低注文条件が設定される場合もあるため、適用条件は公式の案内をご確認ください。",
  },
  {
    question: "初回割引が適用されなかった場合はどうすればいい？",
    answer:
      "まず申し込み確認画面・注文明細で割引が反映されているかを確認します。クーポンコードを入力するタイプの場合は、コードの入力欄に正しく入力できているか、有効期限内か、対象条件を満たしているかをチェックしてください。それでも反映されない場合は、注文を確定する前にnoshのカスタマーサポートへ問い合わせるのが安全です。",
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
          <span className="text-foreground/70">クーポン・割引</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">nosh(ナッシュ)初回割引</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：初回特典は「自動適用」か「コード入力」かを見極める" },
    { id: "types", label: "noshの初回お得施策は3タイプある" },
    { id: "shokai-wari", label: "初回割引(初回キャンペーン)の特徴と使い方" },
    { id: "coupon", label: "初回クーポン(コード)の特徴と使い方" },
    { id: "shoukai", label: "友達紹介の仕組みと注意点" },
    { id: "compare", label: "どれが一番お得？タイプ別の選び方" },
    { id: "flow", label: "初回割引を使った申し込みの流れ" },
    { id: "warnings", label: "初回割引で損しないための注意点" },
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

export default function NoshShokaiWariPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-06-04T00:00:00+09:00",
    dateModified: "2026-06-04T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "クーポン・割引" },
      { "@type": "ListItem", position: 3, name: "nosh(ナッシュ)初回割引" },
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
            クーポン・割引
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-06-04">公開: 2026年6月4日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の各社公式情報に基づき記述</strong>しています。料金・キャンペーンは変動するため、最新は<a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">nosh公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「noshを初めて使うなら、どの割引が一番お得？」「初回クーポンと友達紹介はどう違う？」——nosh(ナッシュ)には<strong>新規向けのお得な施策が複数</strong>あり、初めてだとどれを使えばいいか迷いがちです。
          </p>
          <p className="mb-3">
            この記事では、<strong>初回割引(初回キャンペーン)・初回クーポン(コード)・友達紹介</strong>の3タイプを整理し、それぞれの仕組み・使い方・選び方を解説します。
          </p>
          <p>
            なお、<strong>割引額やクーポンの具体的な金額・コードは時期によって変動</strong>します。本記事では断定せず、最新・正確な金額は必ずnosh公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：初回特典は「自動適用」か「コード入力」かを見極める</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshの初回お得施策は、ざっくり言うと「申し込み時に自動で反映されるもの」と「コードを入力して使うもの」に分かれます。まずはこの違いを押さえると、迷わず一番お得な方法を選べます。
        </p>

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>初回のお得施策は大きく<strong>3タイプ</strong>（初回割引・初回クーポン・友達紹介）</li>
            <li>割引額・コードは<strong>時期により変動</strong>するため公式で要確認</li>
            <li>申し込み画面で<strong>割引が反映されているか</strong>を必ずチェック</li>
            <li>多くの初回特典は<strong>「初めての利用」が条件</strong>（再登録は対象外のことも）</li>
          </ul>
        </div>

        {/* ===== 3タイプ ===== */}
        <SectionHeading id="types">noshの初回お得施策は3タイプある</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshが新規ユーザー向けに提供してきたお得施策は、性質ごとに次の3タイプに整理できます。それぞれ入手経路と適用方法が異なります。
        </p>

        <ComparisonTable
          headers={["タイプ", "入手経路", "適用方法", "おもな対象"]}
          rows={[
            ["初回割引(初回キャンペーン)", "公式サイトの新規申し込み", "申込時に自動適用が多い", "新規ユーザー全般"],
            ["初回クーポン(コード)", "キャンペーンページ・提携先など", "コードを入力", "コード入手者"],
            ["友達紹介", "既存ユーザーからの紹介リンク・コード", "紹介経由で登録", "紹介された新規ユーザー"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          いずれも<strong>「初めてのnosh利用」が前提</strong>になっていることが多く、内容(金額・対象回数・有効期限)は時期で更新されます。具体的な数字は本記事では断定せず、公式の最新案内を確認してください。
        </p>

        {/* ===== 初回割引 ===== */}
        <SectionHeading id="shokai-wari">初回割引(初回キャンペーン)の特徴と使い方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初回割引は、noshが新規登録者向けに公式で用意している値引き施策です。多くの場合、特別なコード入力が不要で、<strong>公式サイトから新規申し込みをすると自動的に反映</strong>されるのが特徴です。
        </p>

        <SubHeading>初回割引のポイント</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>公式の新規申し込み導線から手続きすると適用されることが多い</li>
          <li>対象回数(初回のみ／数回分など)や値引き額は時期で変動</li>
          <li>申し込み確認画面で割引が反映されているかを確認できる</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">金額は断定できません</p>
          <p>「初回◯円OFF」といった具体的な金額は、キャンペーンの切り替えで変わります。当サイトでは正確性を優先し金額を断定しません。<strong>最新・正確な割引額は公式サイトの表示</strong>でご確認ください。</p>
        </div>

        {/* ===== クーポン ===== */}
        <SectionHeading id="coupon">初回クーポン(コード)の特徴と使い方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初回クーポンは、キャンペーンページや提携メディアなどで配布される<strong>コードを入力して使うタイプ</strong>です。コードを持っている場合は、申し込み時の所定の入力欄に入力します。
        </p>

        <SubHeading>クーポン利用時のチェックポイント</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>有効期限があるか（期限切れだと使えない）</li>
          <li>最低注文条件やプラン条件が付いていないか</li>
          <li>自動適用の初回割引と併用できるか（規約による）</li>
          <li>コードが正しく入力され、金額に反映されているか</li>
        </ul>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">実在しないコードに注意</p>
          <p>ネット上には真偽不明・期限切れのクーポンコード情報が出回ることがあります。当サイトでは<strong>実在を確認できないコードは掲載しません</strong>。クーポンを使う際は、必ず公式または正規のキャンペーン経路で入手したコードをご利用ください。</p>
        </div>

        <p className="text-sm mb-6 leading-relaxed">
          現在使えるクーポンの探し方や注意点は、<Link href="/articles/nosh-coupon/" className="text-accent underline">noshクーポン・割引コード完全ガイド</Link>でも詳しくまとめています。
        </p>

        {/* ===== 友達紹介 ===== */}
        <SectionHeading id="shoukai">友達紹介の仕組みと注意点</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          友達紹介は、すでにnoshを使っている人から<strong>紹介リンク・紹介コードを受け取って登録</strong>すると、紹介する側・される側の双方に特典が付くことが多い仕組みです。周りにnoshユーザーがいる場合は選択肢になります。
        </p>

        <SubHeading>友達紹介のポイント</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>既存ユーザーの紹介リンク・コード経由で新規登録する</li>
          <li>双方に特典が付与される形式が一般的（内容は時期で変動）</li>
          <li>他の初回特典と併用できるかは規約次第</li>
          <li>紹介特典の付与タイミング（初回購入後など）に条件がある場合あり</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          紹介特典の金額・付与条件も変動するため、本記事では断定しません。紹介を受ける場合は、紹介者と一緒に公式の最新条件を確認しておくと安心です。
        </p>

        {/* ===== どれが得 ===== */}
        <SectionHeading id="compare">どれが一番お得？タイプ別の選び方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「どれが一番お得か」は時期のキャンペーン内容で変わるため一概には言えませんが、状況別の選び方の目安は次の通りです。
        </p>

        <ComparisonTable
          headers={["あなたの状況", "おすすめの選び方"]}
          rows={[
            ["周りにnoshユーザーがいない", "公式の初回割引(初回キャンペーン)を活用"],
            ["正規のクーポンコードを持っている", "コードと自動割引のどちらが得か申込画面で比較"],
            ["友達・家族がnoshを使っている", "友達紹介と初回割引のどちらが得か確認"],
            ["とにかく一番安く始めたい", "申込画面で各特典の反映額を見比べて選ぶ"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          最終的には、<strong>申し込み画面に表示される実際の値引き額を見比べる</strong>のが確実です。表示金額がそのまま「あなたが受けられる割引」になります。
        </p>

        {/* ===== 申し込みの流れ ===== */}
        <SectionHeading id="flow">初回割引を使った申し込みの流れ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初めてnoshを申し込む際の一般的な流れは次の通りです。コードを使う場合は、途中の入力欄でコードを入力します。
        </p>

        {[
          { num: 1, title: "nosh公式サイトにアクセス", text: "公式サイト(nosh.jp)の新規申し込み・お試し導線から手続きを開始します。" },
          { num: 2, title: "プラン(食数)を選ぶ", text: "6食・8食・10食などのプランから選択します。プランによって1食あたりの価格が変わります。" },
          { num: 3, title: "メニューを選択", text: "好きなメニューを選びます。あとから変更・選び直しも可能です。" },
          { num: 4, title: "クーポンコードがあれば入力", text: "正規に入手したコードを所定の入力欄に入力します。自動割引の場合はこの工程は不要なことが多いです。" },
          { num: 5, title: "配送先・支払い情報を登録し、割引反映を確認", text: "最終確認画面で割引が金額に反映されているかを必ずチェックしてから注文を確定します。" },
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

        {/* ===== 注意点 ===== */}
        <SectionHeading id="warnings">初回割引で損しないための注意点</SectionHeading>

        {[
          {
            title: "1. 「初めての利用」が条件のことが多い",
            text: "初回特典は新規アカウント向けです。過去に登録・利用したメールアドレスや、解約後の再登録では対象外になる場合があります。再開を検討中の方は、対象になるか公式で確認しましょう。",
          },
          {
            title: "2. 金額・コードは時期で変わる",
            text: "割引額や配布クーポンは予告なく更新されます。古い情報の金額・コードをあてにせず、申込時点の公式表示を基準にしてください。",
          },
          {
            title: "3. 併用ルールは規約次第",
            text: "自動割引とクーポン、友達紹介を同時に使えるかは時期の規約によります。申込画面で実際に反映される金額を見て、最も得な方法を選ぶのが確実です。",
          },
          {
            title: "4. 申込前に必ず割引反映を確認",
            text: "注文を確定する前に、確認画面で割引額が反映されているかをチェック。反映されていない場合は確定せず、原因(期限切れ・条件未達など)を確認しましょう。",
          },
        ].map((item, i) => (
          <div key={i} className="bg-cream rounded-lg p-4 mb-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}

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
        <SectionHeading id="summary">まとめ：迷ったら申込画面の「反映額」で判断</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            noshの初回お得施策は、<strong>初回割引(自動適用)・初回クーポン(コード)・友達紹介</strong>の3タイプ。それぞれ入手経路と使い方が違いますが、いずれも「初めての利用」が前提のことが多い点は共通です。
          </p>
          <p className="mb-3">
            割引額やクーポンコードは<strong>時期によって変動</strong>します。当サイトでは正確性を優先し、具体的な金額やコードは断定しません。
          </p>
          <p>
            一番お得な方法を選ぶコツは、<strong>申し込み画面に表示される実際の反映額を見比べる</strong>こと。最新・正確な情報は、必ずnosh公式サイトでご確認ください。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            nosh公式サイトで最新の初回特典を確認
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の割引額・キャンペーンは公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-coupon/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshクーポン・割引コード完全ガイド
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-cancel/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)解約方法を完全解説
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh vs 三ツ星ファーム vs ウェルネスダイニング
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
