import type { Metadata } from "next";
import Link from "next/link";
import ServiceCapture from "@/components/ServiceCapture";

const ARTICLE_TITLE =
  "三ツ星ファームのクーポン・キャンペーン【2026年版】初回割引の探し方と注意点";
const ARTICLE_DESCRIPTION =
  "三ツ星ファームのクーポン・キャンペーン・初回割引の探し方をわかりやすく解説します。どこで入手できるか、適用条件、申し込みの流れ、損しないための注意点まで網羅しています。割引額・コードは時期で変動するため、最新・正確な情報は公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mitsuboshi-coupon/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "三ツ星ファーム クーポン, 三ツ星ファーム キャンペーン, 三ツ星ファーム 初回割引, 三ツ星ファーム 割引, 三ツ星ファーム お得, ミツボシファーム クーポン, 三ツ星ファーム 初回",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-06-04T00:00:00+09:00",
    modifiedTime: "2026-10-31T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "三ツ星ファームのクーポンはどこで入手できる？",
    answer:
      "公式FAQで案内されている入手経路は、①メールマガジンで配信されるクーポンコード（マイページの配信メール設定で「お得なクーポン等のメール配信」を「希望する」にすると届きます）、②期間限定キャンペーンなどで配布されるクーポン、③ご友人・ご家族紹介制度（紹介URLから申し込んだ人向けの割引）の3つです。配布内容・条件は時期で変わります（2026年10月31日 公式FAQで確認）。",
  },
  {
    question: "三ツ星ファームの初回割引はいくら？",
    answer:
      "公式トップで新規向けに案内されているのは「14食コース・21食コースの初回送料無料」です（7食コースは初回から送料990円、北海道・沖縄は2,500円）。「初回◯円OFF」の常設表示はありません。利用者から紹介URLを受け取って定期コースを申し込んだ場合は、初回〜3回目の支払いが7食コースで各回1,620円OFF、14食・21食コースで各回2,160円OFF（3回合計で最大6,480円OFF）になります（2026年10月31日 公式サイト・公式FAQで確認）。",
  },
  {
    question: "クーポンと初回キャンペーンは併用できる？",
    answer:
      "公式FAQでは「クーポンの併用はできません」「複数のクーポンコードを適用することはできません」と案内されています。すでにクーポンを適用済みの定期プランを選び直すと、適用済みだったクーポンは解除されます。複数持っている場合は、適用後の価格を見比べて1枚を選んでください。",
  },
  {
    question: "クーポンを使うのに条件はある？",
    answer:
      "クーポンごとに有効期限と適用条件があり、条件を満たしていないプランでは使えません（公式FAQ）。紹介特典は三ツ星ファームを初めて利用する人が対象で、定期コースのみ（単品商品は対象外）です。また、注文を確定した後はクーポンの適用・変更ができません。",
  },
  {
    question: "クーポンが適用されないときはどうすればいい？",
    answer:
      "クーポンはマイページの「クーポン」から「次回のお届けにクーポンを使用する」を押して適用します（公式FAQ）。コードをコピーするときに空白が入っていないか、有効期限内か、適用条件を満たすプランかを確認してください。それでも反映されない場合は、注文を確定する前に三ツ星ファームお客様センターへ問い合わせてください。",
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
          <Link href="/articles/#otoku" className="text-foreground/70 hover:text-accent transition-colors">クーポン・お試しセット</Link>
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
    { id: "summary-top", label: "新規は初回送料無料と紹介特典が基本" },
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
    dateModified: "2026-10-31T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "クーポン・お試しセット" },
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
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-otameshi.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-otameshi-m.webp)" }}>
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
            <time dateTime="2026-10-31">更新: 2026年10月31日（料金・送料・クーポンの使い方・紹介特典を公式サイト・公式FAQで確認）</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>
            </span>
          </div>
        </header>
        </div>{/* /subhead */}

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年10月31日時点の公式情報に基づき記述</strong>しています。料金・キャンペーンは変動するため、最新は<a href="https://mitsuboshifarm.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">三ツ星ファーム公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「三ツ星ファームをお得に始めたい」「クーポンってどこで手に入る？」——三ツ星ファームには<strong>14食・21食コースの初回送料無料、メールマガジンのクーポン、紹介特典</strong>があり、上手に使えばお得に始められます。
          </p>
          <p className="mb-3">
            この記事では、<strong>クーポン・キャンペーンの探し方、タイプ、適用条件、申し込みの流れ、注意点</strong>を整理して解説します。
          </p>
          <p>
            なお、<strong>割引額やクーポンの配布内容は時期によって変動</strong>します。本記事の金額は2026年10月31日に公式サイト・公式FAQで確認したものです。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">新規は初回送料無料と紹介特典が基本</SectionHeading>
        <ServiceCapture id="mitsuboshi" />{/* svc-cap-202610 */}

        <p className="text-sm mb-6 leading-relaxed">
          三ツ星ファームをお得に始める方法は、<strong>14食・21食コースを選んで初回送料無料を使うこと</strong>と、知人が利用している場合は<strong>紹介URLから申し込むこと</strong>です。クーポンコードはメールマガジンで配信され、マイページから次回のお届けに適用します。
        </p>

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の要点</p>
          <ul className="list-disc list-inside space-y-1">
            <li>新規向けは<strong>14食・21食コースの初回送料無料</strong>（7食は初回から送料990円）</li>
            <li>クーポンは<strong>メールマガジン・期間限定キャンペーン・紹介制度</strong>で配布</li>
            <li>割引額・コードは<strong>時期により変動</strong>するため公式で要確認</li>
            <li>クーポンは<strong>併用できない</strong>（1回の注文に1枚）</li>
            <li>注文確定前に<strong>クーポン適用後の価格</strong>を確認（確定後は適用・変更できない）</li>
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
            ["メールマガジン", "配信メール設定で「お得なクーポン等のメール配信」を希望するとクーポンコードが届く", "高(公式)"],
            ["期間限定キャンペーン", "受け取ったクーポンがマイページの利用可能クーポンに表示される", "高(公式)"],
            ["ご友人・ご家族紹介", "紹介URLから定期コースを申し込むと初回〜3回目が割引", "高(公式)"],
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
            ["初回送料無料", "14食・21食コースの初回に適用（7食は初回から送料990円）", "新規の定期便"],
            ["紹介特典", "紹介URLから申し込む（7食 各回1,620円OFF／14・21食 各回2,160円OFF×初回〜3回目）", "初めて利用する人（定期コースのみ）"],
            ["クーポン(コード)", "マイページの「クーポン」でコード入力し、次回のお届けに適用", "メールマガジン購読者など"],
            ["お得なプラン", "長期継続応援プラン・冷凍庫プレゼントプランを選ぶ（継続回数の条件あり）", "長く続ける予定の人"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          いずれも内容(金額・対象・有効期限)は時期で更新されます。表の金額は2026年10月31日に公式サイト・公式FAQで確認したものです。お得なプランの継続回数・途中解約の扱いは<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファームの口コミ・評判レビュー</Link>にまとめています。
        </p>

        {/* ===== 初回割引 ===== */}
        <SectionHeading id="shokai">初回割引(初回キャンペーン)の特徴</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公式トップ（2026年10月31日確認）で新規向けに案内されている特典は、<strong>14食コース・21食コースの初回送料無料</strong>です。1食あたりの価格は7食コース927円・14食コース819円・21食コース711円（税込）で、送料は990円（北海道・沖縄2,500円）です。「初回◯円OFF」の常設表示はなく、金額の割引は紹介特典やクーポンで受ける形です。
        </p>

        <SubHeading>初回割引のポイント</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>初回送料無料は14食・21食コースのみ（7食コースは初回から送料がかかる）</li>
          <li>紹介URLから申し込むと、初回〜3回目の支払いが割引（3回合計で最大6,480円OFF）</li>
          <li>定期便の初回分は、解約・キャンセル・決済などの変更ができない</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">初回分はキャンセルできません</p>
          <p>公式サイトでは「初回ご購入分につきましては、解約・キャンセル・決済等その他変更の受付ができかねます」と案内されています（2026年10月31日確認）。味が不安な場合は、1個から買える都度購入（注文ごとに送料がかかります）で数個試してから定期便を始める方法もあります。</p>
        </div>

        {/* ===== 選び方 ===== */}
        <SectionHeading id="compare">状況別・お得な使い方の選び方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「どれが一番お得か」は手元のクーポンや食数で変わります。状況別の選び方の目安は次の通りです。
        </p>

        <ComparisonTable
          headers={["ご利用状況", "おすすめの選び方"]}
          rows={[
            ["まず試してみたい", "14食・21食コースで初回送料無料を使う／都度購入で数個試す"],
            ["知人が三ツ星ファームを利用している", "紹介URLから定期コースを申し込む（初回〜3回目が割引）"],
            ["メールマガジンのクーポンを持っている", "マイページの「クーポン」から次回のお届けに適用"],
            ["長く続ける予定", "長期継続応援プラン・冷凍庫プレゼントプランの条件を確認"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          クーポンは併用できないため、複数ある場合は<strong>適用後の価格を見比べて1枚を選ぶ</strong>のが確実です。
        </p>

        {/* ===== 申し込みの流れ ===== */}
        <SectionHeading id="flow">クーポンを使った申し込みの流れ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初めて三ツ星ファームを申し込む際の流れは次の通りです。クーポンは申し込み画面ではなく、マイページの「クーポン」から適用します（公式FAQ）。
        </p>

        {[
          { num: 1, title: "公式サイト・アプリにアクセス", text: "公式サイトの「定期便を始める」から手続きを開始します。紹介特典を使う場合は、受け取った紹介URLの「メニューを見てみる」から申し込みます。" },
          { num: 2, title: "プラン(食数)を選ぶ", text: "7食・14食・21食コースから選択します。1食あたりは927円・819円・711円（税込）で、初回送料無料は14食・21食コースのみです。" },
          { num: 3, title: "メニューを選択", text: "好みのメニューを選びます。変更期限内で注文確定前であれば、マイページから変更できます。" },
          { num: 4, title: "配送先・支払い情報を登録して注文", text: "配送先と支払い方法を登録し、お届け希望日時を選んで注文します。" },
          { num: 5, title: "クーポンはマイページから適用", text: "マイページの「クーポン」でコードを入力するか利用可能クーポンを選び、「次回のお届けにクーポンを使用する」を押します。注文確定後は適用・変更できないため、確定前に適用後の価格を確認してください。" },
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
            text: "紹介特典は三ツ星ファームを初めて利用する人が対象で、定期コースのみ（単品商品は対象外）です。14食・21食コースの初回送料無料も初回分だけの扱いです。",
          },
          {
            title: "2. 金額・コードは時期で変わる",
            text: "割引額や配布クーポンは予告なく更新されます。古い情報の金額・コードをあてにせず、申込時点の公式表示を基準にしてください。",
          },
          {
            title: "3. クーポンは併用できない",
            text: "公式FAQでは、クーポンの併用と複数コードの適用はできないと案内されています。適用済みクーポンのある定期プランを選び直すと、そのクーポンは解除されます。",
          },
          {
            title: "4. 注文確定の前にクーポンを適用する",
            text: "注文を確定すると、商品内容・お届け日時の変更やクーポンの適用・変更ができなくなります（公式FAQ）。適用後の価格を確認してから確定してください。",
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
        <SectionHeading id="summary">まとめ：公式キャンペーンの確認方法</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            三ツ星ファームをお得に始めるなら、<strong>14食・21食コースの初回送料無料</strong>を使うのが基本です。知人が利用している場合は、<strong>紹介URLから申し込むと初回〜3回目が割引</strong>になります。
          </p>
          <p className="mb-3">
            クーポンコードはメールマガジンで配信され、マイページの「クーポン」から次回のお届けに適用します。<strong>併用はできず、注文確定後は適用・変更できません</strong>。当サイトでは実在を確認できないコードは掲載しません。
          </p>
          <p>
            金額は2026年10月31日に公式サイト・公式FAQで確認したものです。配布内容は時期で変わるため、申し込み前に公式サイトで最新の案内をご確認ください。
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
          <p className="font-bold mb-2">関連記事</p>
          <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            三ツ星ファームの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh vs 三ツ星ファーム vs ウェルネスダイニング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-coupon/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshクーポン・割引コードガイド
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
                宅配弁当・栄養食を専門とする編集チームです。公開情報や利用者の口コミをもとに、公平な比較情報の提供に努めます。
              </p>
            </div>
          </div>
        </div>
              {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
