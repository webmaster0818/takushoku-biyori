import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "食宅便の解約・退会方法【2026年版】定期便の停止手順と注意点";
const ARTICLE_DESCRIPTION =
  "食宅便（日清医療食品）の解約・退会方法を2026年6月時点の公式情報に基づき解説。定期便（らくらく定期便）の停止・お休みと退会の違い、締め日（次回お届け前の手続き期限）の考え方、マイページ・電話など手続き窓口の注意点までまとめています。最新の手続きは必ず公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/shokutakubin-cancel/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "食宅便 解約, 食宅便 退会, 食宅便 解約方法, 食宅便 定期便 停止, 食宅便 らくらく定期便 解約, 食宅便 やめ方, 食宅便 お休み",
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
    question: "食宅便の解約・退会に解約金はかかる？",
    answer:
      "宅配弁当の定期便は「いつでも停止・解約できる」かたちが一般的とされていますが、最低継続回数や手数料の有無などの細かな規定は時期やコースによって異なる可能性があり、断定はできません。必ず最新の利用規約・公式サイトの案内でご確認ください。",
  },
  {
    question: "「定期便の解約（停止）」と「退会」はどう違う？",
    answer:
      "一般的に、「定期便の解約（停止）」は定期配送を止める手続きで、会員登録自体は残るケースがあります。一方「退会」は会員登録（アカウント）そのものを削除する手続きです。「配送を止めたいだけ」なら定期便の停止、「登録情報も含めて完全にやめたい」なら退会、という使い分けになります。実際の区分は公式の案内でご確認ください。",
  },
  {
    question: "解約はマイページからできる？電話が必要？",
    answer:
      "食宅便はマイページからの手続きに加え、電話やお問い合わせ窓口での対応が案内される場合があります。最新の手続き方法・受付窓口は、公式サイトのヘルプやマイページの案内でご確認ください。電話の場合は受付時間にも注意しましょう。",
  },
  {
    question: "解約の締め日（手続き期限）はいつまで？",
    answer:
      "多くの定期便では「次回お届け予定日の数日前まで」に手続きを完了する必要があり、これを過ぎると次回分は確定・発送されます。食宅便の具体的な締め日は公式の規定によります。次回お届け予定日を確認し、余裕をもって手続きしてください。",
  },
  {
    question: "定期便を止めても都度購入（単発）は続けられる？",
    answer:
      "定期便を停止しても、会員登録が残っていれば都度購入（単発注文）を利用できるケースが一般的です。「毎回届くのは負担だが、たまに買いたい」という場合は、退会ではなく定期便の停止にとどめておく選択肢もあります。詳細は公式サイトでご確認ください。",
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
          <span className="text-foreground/70">解約・手続き</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">食宅便の解約・退会方法</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：「定期便の停止」と「退会」を使い分けよう" },
    { id: "diff", label: "定期便の停止・お休み・退会の違い" },
    { id: "cancel-step", label: "食宅便の解約・退会手順（一般的な流れ）" },
    { id: "deadline", label: "解約の締め日｜次回お届け前の手続き期限" },
    { id: "channel", label: "手続き窓口（マイページ・電話）の注意点" },
    { id: "warnings", label: "解約・退会前に確認したい注意点" },
    { id: "alt", label: "解約以外の選択肢｜「合わない」を解決する方法" },
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

export default function ShokutakubinCancelPage() {
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
      { "@type": "ListItem", position: 2, name: "解約・手続き" },
      { "@type": "ListItem", position: 3, name: "食宅便の解約・退会方法" },
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
            解約・手続き
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の各社公式情報</strong>に基づき記述。最新の解約フロー等は各公式サイトでご確認ください。食宅便の最新情報は<a href="https://shokutakubin.com/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">食宅便公式サイト</a>をご覧ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「食宅便の定期便をやめたい」「解約と退会の違いが分からない」「次回お届けが迫っているけど間に合う？」——食宅便の解約は、一般的にはマイページ（会員ページ）やお問い合わせ窓口を通じて、定期便の停止・退会を申し出るかたちで行います。
          </p>
          <p className="mb-3">
            ただし、<strong>具体的な手順・締め日・手続き窓口はサービスの規定によって変わる</strong>ため、本記事では一般的な流れと注意点を中立的に解説します。最新の正確な情報は必ず公式サイトでご確認ください。
          </p>
          <p>
            食宅便では「<strong>定期便の停止</strong>」と「<strong>退会</strong>」が別の手続きになっている場合があります。本記事ではその違いも整理します。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：「定期便の停止」と「退会」を使い分けよう</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「やめたい」と感じた理由によって、最適な手続きは変わります。完全に退会する前に、目的に合った選択肢を確認しましょう。
        </p>

        <ComparisonTable
          headers={["やめたい理由", "検討したい手続き"]}
          rows={[
            ["今は在庫がある / 一時的に不要", "次回お届けのスキップ・お休み"],
            ["定期配送は止めたいが、たまに買いたい", "定期便の停止（会員登録は残す）"],
            ["完全にやめたい / 登録情報も削除したい", "退会"],
            ["メニューや味が合わない", "コース・メニューの変更を検討"],
            ["料金が負担", "コース・お届け頻度の見直しを検討"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論（一般的な傾向）</p>
          <ul className="list-disc list-inside space-y-1">
            <li>「<strong>定期便の停止</strong>」と「<strong>退会</strong>」は別の手続きの場合がある</li>
            <li>手続きは<strong>マイページまたは電話・問い合わせ窓口</strong>から行うのが一般的</li>
            <li>「次回お届け予定日の数日前まで」という<strong>締め日</strong>がある場合が多い</li>
            <li>細かな規定はサービス・時期で異なるため<strong>公式サイトで要確認</strong></li>
          </ul>
        </div>

        {/* ===== 違い ===== */}
        <SectionHeading id="diff">定期便の停止・お休み・退会の違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          食宅便のような定期便サービスでは、「配送を止める」手段と「登録自体を削除する」手段が分かれていることがあります。一般的には次のように整理できます。
        </p>

        <ComparisonTable
          headers={["手続き", "効果", "会員登録の状態", "向いているケース"]}
          rows={[
            ["スキップ・お休み", "次回お届け分だけを飛ばす/休む", "登録は残る", "1回だけ休みたい"],
            ["定期便の停止（解約）", "定期配送を止める", "登録は残る（都度購入は可能なことも）", "定期配送は不要だが登録は残したい"],
            ["退会", "会員登録（アカウント）を削除", "登録も削除される", "完全にやめる"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※上記は宅配弁当サービス全般の一般的な分類です。食宅便で実際に用意されている機能名・区分は、マイページや公式ヘルプの表記でご確認ください。
        </p>

        {/* ===== 解約手順 ===== */}
        <SectionHeading id="cancel-step">食宅便の解約・退会手順（一般的な流れ）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ここでは、宅配弁当の定期便でよく見られる<strong>一般的な解約・退会の流れ</strong>を解説します。実際の手続き方法や窓口は食宅便の仕様によって異なるため、参考としてご覧ください。
        </p>

        {[
          {
            num: 1,
            title: "次回お届け予定日を確認する",
            text: "まずはマイページやお届け案内から次回お届け予定日を確認します。締め日に間に合うかどうかが手続きの前提になります。",
          },
          {
            num: 2,
            title: "「定期便の停止」か「退会」かを決める",
            text: "定期配送だけ止めたいのか、会員登録ごと削除したいのかで手続きが変わります。たまに買う可能性があるなら、まずは定期便の停止にとどめる選択肢もあります。",
          },
          {
            num: 3,
            title: "手続き窓口を確認する（マイページ／電話）",
            text: "公式サイトのヘルプやよくある質問で、停止・退会をどの窓口で受け付けているかを確認します。マイページで完結する場合もあれば、電話・問い合わせでの申し出が必要な場合もあります。",
          },
          {
            num: 4,
            title: "案内に従って手続きを進める",
            text: "会員情報の確認や、解約理由の確認が行われる場合があります。案内に従って必要事項を入力・申告します。",
          },
          {
            num: 5,
            title: "手続きの完了を確認する",
            text: "手続き完了の通知やマイページのステータスを確認します。反映されていない場合は次回分が届く可能性があるため、確実に完了したか確認してください。",
          },
        ].map((step) => (
          <div key={step.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {step.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{step.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">「定期便の停止」と「退会」は別手続きのことがある</p>
          <p>定期便を停止しただけでは会員登録が残る場合があり、登録情報も削除したい場合は別途「退会」手続きが必要なことがあります。逆に、退会すると都度購入もできなくなることがあります。どちらが自分の目的に合うか、<strong>公式サイトの案内で確認</strong>してから進めましょう。</p>
        </div>

        {/* ===== 締め日 ===== */}
        <SectionHeading id="deadline">解約の締め日｜次回お届け前の手続き期限</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          多くの宅配弁当サービスには「<strong>次回お届け予定日の数日前まで</strong>」に手続きを完了する必要がある、という締め日（変更・停止期限）が設けられています。これを過ぎると次回分の注文が確定し、解約しても次回分は発送・請求されることがあります。
        </p>

        <ComparisonTable
          headers={["手続きのタイミング（一般例）", "次回お届け分の扱い"]}
          rows={[
            ["締め日より前", "次回分を止められる可能性が高い"],
            ["締め日を過ぎた後", "次回分は確定・発送される可能性が高い"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          食宅便の<strong>具体的な締め日（何日前までか）は公式の規定によります</strong>。電話での手続きの場合は受付時間にも左右されるため、余裕をもって早めに連絡するのが安心です。
        </p>

        {/* ===== 窓口 ===== */}
        <SectionHeading id="channel">手続き窓口（マイページ・電話）の注意点</SectionHeading>

        <SubHeading>マイページで手続きする場合</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          マイページから定期便の停止・お休み・退会ができる場合は、画面の案内に従って進めます。手続き後は、完了通知やステータス表示で確実に反映されたかを確認してください。
        </p>

        <SubHeading>電話・お問い合わせで手続きする場合</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>電話は受付時間が限られていることが多いので、時間に注意する</li>
          <li>会員番号・登録情報を手元に用意しておくとスムーズ</li>
          <li>締め日に間に合うよう、余裕をもって連絡する</li>
          <li>「定期便の停止」か「退会」か、希望をはっきり伝える</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          受付窓口・受付時間・必要情報はサービスの案内によって異なります。手続き前に必ず公式サイトで最新の情報を確認してください。
        </p>

        {/* ===== 注意点 ===== */}
        <SectionHeading id="warnings">解約・退会前に確認したい注意点</SectionHeading>

        {[
          {
            title: "1. 締め日を過ぎると次回分は止められない",
            text: "次回お届け予定日の直前に手続きしても、すでに確定済みの注文は止められないのが一般的です。確実に止めたいなら、締め日に余裕をもって手続きしましょう。",
          },
          {
            title: "2. 退会すると都度購入もできなくなることがある",
            text: "退会で会員登録を削除すると、単発の都度購入も利用できなくなる場合があります。「たまに買うかも」という方は、退会ではなく定期便の停止にとどめる選択肢も検討しましょう。",
          },
          {
            title: "3. 特典・ポイントの扱いを確認する",
            text: "ポイントやキャンペーン特典は退会によって失効する場合があります。残っている特典がある場合は、手続き前に確認しておきましょう。",
          },
          {
            title: "4. 規定は変更されることがある",
            text: "締め日・手続き窓口・手数料などの規定は、時期によって変更される可能性があります。本記事は一般的な流れの解説であり、最新かつ正確な情報は必ず公式サイトでご確認ください。",
          },
        ].map((item, i) => (
          <div key={i} className="bg-cream rounded-lg p-4 mb-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}

        {/* ===== 代替案 ===== */}
        <SectionHeading id="alt">解約以外の選択肢｜「合わない」を解決する方法</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「解約しよう」と思った理由が、実は<strong>設定変更で解決できる</strong>こともあります。よくある理由別に、解約以外の選択肢を整理しました。
        </p>

        <ComparisonTable
          headers={["やめたい理由", "解決策（解約せずに済む方法の例）"]}
          rows={[
            ["メニューに飽きた", "コース・メニューの変更を試す"],
            ["お届け頻度が多い", "お届け間隔を長く変更する"],
            ["料金が負担", "コース・食数の見直しを検討する"],
            ["在庫がたまる", "次回お届けのスキップ・お休みを活用する"],
            ["毎回届くのが負担", "定期便を停止し、必要なときだけ都度購入する"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          食宅便が自分に合っているか不安な方は、<Link href="/articles/shokutakubin-reviews/" className="text-accent underline">食宅便の口コミ・評判レビュー</Link>もあわせてご覧ください。他社のお試しから比較したい場合は<Link href="/articles/otameshi-set-osusume/" className="text-accent underline">お試しセットおすすめ比較</Link>が参考になります。
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
        <SectionHeading id="summary">まとめ：「停止」か「退会」かを決めて、締め日前に手続きを</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            食宅便の解約は、まず「<strong>定期便の停止</strong>」で済むのか「<strong>退会</strong>」まで必要なのかを決めることがポイントです。定期便を止めても会員登録が残り、都度購入を続けられるケースもあります。
          </p>
          <p className="mb-3">
            手続きはマイページや電話・お問い合わせ窓口を通じて行うのが一般的です。<strong>「次回お届け前の締め日」</strong>を過ぎると次回分が確定してしまうため、余裕をもって手続きしましょう。
          </p>
          <p>
            締め日・手続き窓口・手数料などの細かな規定は、時期やコースによって変わる可能性があります。本記事は一般的な流れの解説です。<strong>最新かつ正確な情報は、必ず公式サイトでご確認ください。</strong>
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://shokutakubin.com/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            食宅便公式サイトで確認する
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の解約フローは公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            食宅便の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-cancel/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の解約方法
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            お試しセットおすすめ比較
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            送料が安い宅配弁当ランキング
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
                宅配弁当・栄養食の専門ライターチーム。実際にサービスを利用し、公平な比較情報をお届けします。
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
