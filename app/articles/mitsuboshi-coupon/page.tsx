import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "三ツ星ファームのクーポン・キャンペーン【2026年版】初回割引の探し方と注意点";
const ARTICLE_DESCRIPTION =
  "三ツ星ファームのクーポン・キャンペーン・初回割引の探し方をわかりやすく解説。どこで入手できるか、適用条件、申し込みの流れ、損しないための注意点まで網羅。割引額・コードは時期で変動するため、最新・正確な情報は公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mitsuboshi-coupon/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "三ツ星ファーム クーポン, 三ツ星ファーム キャンペーン, 三ツ星ファーム 初回割引, 三ツ星ファーム 割引, 三ツ星ファーム お得, ミツボシファーム クーポン, 三ツ星ファーム 初回",
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
    question: "三ツ星ファームのクーポンはどこで入手できる？",
    answer:
      "もっとも確実なのは公式サイトのキャンペーンページです。公式の新規申し込み導線では、初回向けの割引が用意されていることが多く、コード不要で適用されるケースもあります。このほか、提携メディアやキャンペーン特設ページで配布される場合もあります。配布内容・条件は時期で変わるため、最新情報は三ツ星ファーム公式サイトでご確認ください。",
  },
  {
    question: "三ツ星ファームの初回割引はいくら？",
    answer:
      "割引額はキャンペーンの切り替えによって変動するため、本記事では断定しません。三ツ星ファームは新規ユーザー向けに初回割引や定期初回特典を提供してきましたが、金額・対象プランは更新されることがあります。最新かつ正確な金額は、必ず公式サイトの表示でご確認ください。",
  },
  {
    question: "クーポンと初回キャンペーンは併用できる？",
    answer:
      "併用できるかどうかは、その時のキャンペーン規約によって異なります。自動適用される初回特典とコード入力型クーポンが同時に使えない場合もあれば、組み合わせられる場合もあります。確実なのは、申し込み確認画面で割引が反映されているかをチェックすること。併用ルールや最も得になる組み合わせは、申込前に公式の表示で必ず確認してください。",
  },
  {
    question: "クーポンを使うのに条件はある？",
    answer:
      "初回向け特典は「三ツ星ファームを初めて利用する新規ユーザー」が対象となることが多いです。過去に利用したことがある場合や再登録では対象外になることがあります。また、対象プラン・最低注文条件・有効期限が設定される場合もあります。適用条件は公式の案内でご確認ください。",
  },
  {
    question: "クーポンが適用されないときはどうすればいい？",
    answer:
      "まず申し込み確認画面・注文明細で割引が反映されているかを確認します。コード入力型の場合は、コードが正しく入力されているか、有効期限内か、対象条件を満たしているかをチェックしてください。それでも反映されない場合は、注文を確定する前に三ツ星ファームのカスタマーサポートへ問い合わせるのが安全です。",
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
          <span className="text-foreground">三ツ星ファーム クーポン</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：クーポンは公式キャンペーンページが基本" },
    { id: "where", label: "三ツ星ファームのクーポン・キャンペーンの探し方" },
    { id: "types", label: "クーポン・割引のタイプを整理" },
    { id: "shokai", label: "初回割引(初回キャンペーン)の特徴" },
    { id: "compare", label: "状況別・お得な使い方の選び方" },
    { id: "flow", label: "クーポンを使った申し込みの流れ" },
    { id: "warnings", label: "クーポンで損しないための注意点" },
    { id: "feature", label: "そもそも三ツ星ファームってどんなサービス？" },
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

export default function MitsuboshiCouponPage() {
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
      { "@type": "ListItem", position: 3, name: "三ツ星ファーム クーポン" },
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の各社公式情報に基づき記述</strong>しています。料金・キャンペーンは変動するため、最新は<a href="https://mitsuboshifarm.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">三ツ星ファーム公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「三ツ星ファームをお得に始めたい」「クーポンってどこで手に入る？」——三ツ星ファームには<strong>新規向けのキャンペーンや初回割引</strong>が用意されることが多く、上手に使えばお得に始められます。
          </p>
          <p className="mb-3">
            この記事では、<strong>クーポン・キャンペーンの探し方、タイプ、適用条件、申し込みの流れ、注意点</strong>を整理して解説します。
          </p>
          <p>
            なお、<strong>割引額やクーポンコードは時期によって変動</strong>します。本記事では断定せず、最新・正確な情報は必ず三ツ星ファーム公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：クーポンは公式キャンペーンページが基本</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          三ツ星ファームをお得に始める一番確実な方法は、<strong>公式サイトのキャンペーンページから新規申し込みすること</strong>です。初回向けの割引はコード不要で適用されることも多く、まずは公式の最新案内を確認するのが近道です。
        </p>

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>クーポン・割引は<strong>公式キャンペーンページが基本の入手先</strong></li>
            <li>割引額・コードは<strong>時期により変動</strong>するため公式で要確認</li>
            <li>初回特典は<strong>「初めての利用」が条件</strong>のことが多い</li>
            <li>申し込み画面で<strong>割引が反映されているか</strong>を必ず確認</li>
          </ul>
        </div>

        {/* ===== 探し方 ===== */}
        <SectionHeading id="where">三ツ星ファームのクーポン・キャンペーンの探し方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          クーポンやキャンペーンを探すときの基本は、以下の優先順位で確認することです。
        </p>

        <ComparisonTable
          headers={["確認先", "特徴", "信頼度の目安"]}
          rows={[
            ["公式サイトのキャンペーンページ", "最新の初回割引・特典がまとまっている", "高"],
            ["公式の新規申し込み導線", "コード不要で自動適用されることがある", "高"],
            ["提携メディア・特設ページ", "限定コードが配布される場合がある", "中(正規経路か要確認)"],
            ["真偽不明なコード情報", "期限切れ・虚偽の可能性", "低(利用は非推奨)"],
          ]}
        />

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">実在しないコードに注意</p>
          <p>ネット上には真偽不明・期限切れのクーポンコードが出回ることがあります。当サイトでは<strong>実在を確認できないコードは掲載しません</strong>。クーポンを使う際は、必ず公式または正規のキャンペーン経路で入手したコードをご利用ください。</p>
        </div>

        {/* ===== タイプ ===== */}
        <SectionHeading id="types">クーポン・割引のタイプを整理</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          三ツ星ファームのお得施策は、性質ごとに次のように整理できます。タイプによって適用方法が異なります。
        </p>

        <ComparisonTable
          headers={["タイプ", "適用方法", "おもな対象"]}
          rows={[
            ["初回割引(初回キャンペーン)", "新規申込時に自動適用が多い", "新規ユーザー全般"],
            ["クーポン(コード)", "コードを入力", "コード入手者"],
            ["まとめ買い・プラン割引", "対象プラン選択で適用", "食数の多いプラン利用者"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          いずれも内容(金額・対象・有効期限)は時期で更新されます。具体的な数字は本記事では断定せず、公式の最新案内を確認してください。
        </p>

        {/* ===== 初回割引 ===== */}
        <SectionHeading id="shokai">初回割引(初回キャンペーン)の特徴</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初回割引は、三ツ星ファームが新規ユーザー向けに用意している値引き施策です。公式サイトの新規申し込み導線から手続きすると、<strong>コード入力なしで自動的に適用されるケース</strong>が多いのが特徴です。
        </p>

        <SubHeading>初回割引のポイント</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>公式の新規申し込みから手続きすると適用されることが多い</li>
          <li>対象プランや値引き額・対象回数は時期で変動</li>
          <li>申し込み確認画面で割引が反映されているか確認できる</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">金額は断定できません</p>
          <p>「初回◯円OFF」「◯%OFF」といった具体値はキャンペーンの切り替えで変わります。当サイトでは正確性を優先し金額を断定しません。<strong>最新・正確な割引額は公式サイトの表示</strong>でご確認ください。</p>
        </div>

        {/* ===== 選び方 ===== */}
        <SectionHeading id="compare">状況別・お得な使い方の選び方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「どれが一番お得か」は時期のキャンペーン内容で変わりますが、状況別の選び方の目安は次の通りです。
        </p>

        <ComparisonTable
          headers={["あなたの状況", "おすすめの選び方"]}
          rows={[
            ["まず試してみたい", "公式キャンペーンの初回割引を活用"],
            ["正規のクーポンコードを持っている", "コードと自動割引のどちらが得か申込画面で比較"],
            ["継続して多めに頼みたい", "まとめ買い・プラン割引もあわせて検討"],
            ["とにかく一番安く始めたい", "申込画面で各特典の反映額を見比べて選ぶ"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          最終的には、<strong>申し込み画面に表示される実際の値引き額を見比べる</strong>のが確実です。
        </p>

        {/* ===== 申し込みの流れ ===== */}
        <SectionHeading id="flow">クーポンを使った申し込みの流れ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初めて三ツ星ファームを申し込む際の一般的な流れは次の通りです。コードを使う場合は、途中の入力欄でコードを入力します。
        </p>

        {[
          { num: 1, title: "公式サイトのキャンペーンページにアクセス", text: "公式サイトの新規申し込み・キャンペーン導線から手続きを開始します。" },
          { num: 2, title: "プラン(食数)を選ぶ", text: "食数プランから選択します。プランによって1食あたりの価格が変わります。" },
          { num: 3, title: "メニューを選択", text: "好みのメニューを選びます。あとから変更できることが多いです。" },
          { num: 4, title: "クーポンコードがあれば入力", text: "正規に入手したコードを所定の入力欄に入力します。自動割引の場合はこの工程が不要なことが多いです。" },
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
        <SectionHeading id="warnings">クーポンで損しないための注意点</SectionHeading>

        {[
          {
            title: "1. 「初めての利用」が条件のことが多い",
            text: "初回特典は新規ユーザー向けです。過去に利用したことがある場合や再登録では対象外になることがあります。対象になるか不明なときは公式で確認しましょう。",
          },
          {
            title: "2. 金額・コードは時期で変わる",
            text: "割引額や配布クーポンは予告なく更新されます。古い情報の金額・コードをあてにせず、申込時点の公式表示を基準にしてください。",
          },
          {
            title: "3. 併用ルールは規約次第",
            text: "自動割引とクーポン、プラン割引を同時に使えるかは時期の規約によります。申込画面で実際に反映される金額を見て、最も得な方法を選ぶのが確実です。",
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

        {/* ===== サービス特徴 ===== */}
        <SectionHeading id="feature">そもそも三ツ星ファームってどんなサービス？</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          三ツ星ファームは、<strong>冷凍タイプの宅配弁当(宅食)サービス</strong>です。電子レンジで温めるだけで食べられる手軽さと、メニューのバリエーションが特徴として知られています。カロリーや栄養バランスに配慮したメニュー設計を打ち出している点も、健康志向の利用者から支持されています。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍弁当なので冷凍庫のスペースが必要になる点や、配送頻度・プランの選び方は、利用前に押さえておきたいポイントです。サービス全体の使い勝手や評判は、<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファームの口コミ・評判レビュー</Link>で詳しく解説しています。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          他社と迷っている場合は、<Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent underline">nosh vs 三ツ星ファーム vs ウェルネスダイニングの比較</Link>もあわせて読むと、自分に合うサービスを選びやすくなります。
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
        <SectionHeading id="summary">まとめ：まずは公式キャンペーンを確認しよう</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            三ツ星ファームをお得に始めるなら、まずは<strong>公式サイトのキャンペーンページ</strong>を確認するのが基本です。初回割引はコード不要で適用されることも多く、確実にお得を取りこぼしません。
          </p>
          <p className="mb-3">
            割引額やクーポンコードは<strong>時期によって変動</strong>します。当サイトでは正確性を優先し、具体的な金額やコードは断定しません。
          </p>
          <p>
            一番お得な方法を選ぶコツは、<strong>申し込み画面に表示される実際の反映額を見比べる</strong>こと。最新・正確な情報は、必ず三ツ星ファーム公式サイトでご確認ください。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://mitsuboshifarm.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            三ツ星ファーム公式サイトで最新キャンペーンを確認
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の割引額・キャンペーンは公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            三ツ星ファームの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh vs 三ツ星ファーム vs ウェルネスダイニング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-coupon/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshクーポン・割引コード完全ガイド
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            お試しセットおすすめ
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
