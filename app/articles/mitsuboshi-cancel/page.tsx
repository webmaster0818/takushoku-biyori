import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "三ツ星ファームの解約方法【2026年版】手順・締め日・スキップとの違いを解説";
const ARTICLE_DESCRIPTION =
  "三ツ星ファームの解約方法を2026年6月時点の公式情報に基づき解説。マイページからの定期便停止・退会の一般的な流れ、締め日（次回お届け前の手続き期限）の考え方、スキップとの違い、解約前の注意点までまとめています。最新の解約フローは必ず公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mitsuboshi-cancel/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "三ツ星ファーム 解約, 三ツ星ファーム 解約方法, 三ツ星ファーム やめ方, 三ツ星ファーム スキップ, 三ツ星ファーム 退会, 三ツ星ファーム 定期便 停止, 三ツ星ファーム 締め日",
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
    question: "三ツ星ファームの解約に解約金や違約金はかかる？",
    answer:
      "一般的な宅配弁当の定期便と同様、三ツ星ファームの定期便も「いつでも停止・解約できる」かたちが基本とされています。ただし、最低継続回数や手数料の有無などの細かな規定は時期やプランによって異なる可能性があるため、断定はできません。必ず最新の利用規約・公式サイトの案内でご確認ください。",
  },
  {
    question: "解約とスキップ（お届け予定の変更）の違いは？",
    answer:
      "解約は定期便そのものを止めて契約を終了する手続きです。一方スキップは、次回お届け分だけを飛ばして定期便は継続する機能です。「今回は不要だが今後も続けたい」ならスキップ、「当面・完全にやめたい」なら解約や定期便停止を選ぶ、という使い分けが一般的です。機能名や挙動は各社で異なります。",
  },
  {
    question: "解約の締め日（手続き期限）はいつ？",
    answer:
      "多くの宅配弁当サービスでは「次回お届け予定日の数日前まで」に手続きを完了する必要があり、これを過ぎると次回分は確定・発送されます。三ツ星ファームの具体的な締め日（何日前までか）は公式の規定によります。マイページのお届け予定日を確認し、余裕をもって手続きしてください。",
  },
  {
    question: "解約はマイページからできる？電話が必要？",
    answer:
      "近年の宅配弁当サービスはマイページ（会員ページ）から定期便の停止・解約手続きができる場合が多いですが、サービスによっては問い合わせフォームや電話での対応となることもあります。三ツ星ファームの最新の手続き窓口は公式サイトのヘルプ・マイページの案内でご確認ください。",
  },
  {
    question: "解約後に再開したい場合は？",
    answer:
      "解約後でも、同じアカウントで再ログインして再注文すれば再開できるケースが一般的です。ただし、キャンペーンや割引の再適用可否、ポイント・特典の扱いはサービスごとに異なります。再開の可能性があるなら、完全な解約ではなく「スキップ」や「定期便の一時停止」を検討するのがおすすめです。",
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
          <span className="text-foreground">三ツ星ファーム解約方法</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：解約の前に「スキップ」「一時停止」も検討しよう" },
    { id: "diff", label: "解約・スキップ・定期便停止の違い" },
    { id: "cancel-step", label: "三ツ星ファームの解約手順（一般的な流れ）" },
    { id: "deadline", label: "解約の締め日｜次回お届け前の手続き期限" },
    { id: "skip-step", label: "スキップ（お届けの一時的な変更）のやり方" },
    { id: "warnings", label: "解約前に確認したい注意点" },
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

export default function MitsuboshiCancelPage() {
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
      { "@type": "ListItem", position: 3, name: "三ツ星ファーム解約方法" },
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の各社公式情報</strong>に基づき記述。最新の解約フロー等は各公式サイトでご確認ください。三ツ星ファームの最新情報は<a href="https://mitsuboshifarm.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">三ツ星ファーム公式サイト</a>をご覧ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「三ツ星ファームをやめたい」「解約方法が分からない」「次回お届けが迫っているけど間に合う？」——三ツ星ファームの解約は、一般的にはマイページ（会員ページ）からの定期便停止・退会手続き、もしくは問い合わせ窓口を通じて行います。
          </p>
          <p className="mb-3">
            ただし、<strong>具体的な手順・締め日・手数料の有無はサービスの規定によって変わる</strong>ため、本記事では一般的な流れと注意点を中立的に解説します。最新の正確な情報は必ず公式サイトでご確認ください。
          </p>
          <p>
            また、「一時的に休みたいだけ」なら、完全な解約ではなく「<strong>スキップ</strong>」や「<strong>定期便の一時停止</strong>」が向いているケースもあります。本記事ではその違いも整理します。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：解約の前に「スキップ」「一時停止」も検討しよう</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「やめたい」と感じた理由によって、最適な手続きは変わります。完全にやめる前に、目的に合った選択肢を確認しましょう。
        </p>

        <ComparisonTable
          headers={["やめたい理由", "検討したい手続き"]}
          rows={[
            ["今は在庫がある / 一時的に不要", "スキップ（次回分を飛ばす）"],
            ["数週間〜数ヶ月休みたい", "定期便の一時停止"],
            ["完全にやめたい / 今後使う予定なし", "解約・退会"],
            ["メニューや味が合わない", "まずはメニュー変更やスキップを検討"],
            ["料金が負担", "プラン・お届け頻度の見直しを検討"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論（一般的な傾向）</p>
          <ul className="list-disc list-inside space-y-1">
            <li>解約は<strong>マイページまたは問い合わせ窓口</strong>から手続きするのが一般的</li>
            <li>「次回お届け予定日の数日前まで」という<strong>締め日</strong>がある場合が多い</li>
            <li>一時的に休むだけなら「スキップ」「一時停止」が便利なことも</li>
            <li>細かな規定はサービス・時期で異なるため<strong>公式サイトで要確認</strong></li>
          </ul>
        </div>

        {/* ===== 違い ===== */}
        <SectionHeading id="diff">解約・スキップ・定期便停止の違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当の定期便には「配送を止める」ための手段がいくつかあります。名称や挙動は各社で異なりますが、一般的には次のように整理できます。
        </p>

        <ComparisonTable
          headers={["手続き", "効果", "契約の状態", "向いているケース"]}
          rows={[
            ["スキップ", "次回お届け分だけを飛ばす", "定期便は継続", "1回だけ休みたい"],
            ["一時停止", "再開指示まで配送を止める", "定期便は継続（休止状態）", "数週間〜数ヶ月休みたい"],
            ["解約・退会", "定期便・契約を終了する", "契約終了", "完全にやめる"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※上記は宅配弁当サービス全般の一般的な分類です。三ツ星ファームで実際に用意されている機能名・挙動は、マイページや公式ヘルプの表記でご確認ください。
        </p>

        {/* ===== 解約手順 ===== */}
        <SectionHeading id="cancel-step">三ツ星ファームの解約手順（一般的な流れ）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ここでは、宅配弁当の定期便でよく見られる<strong>一般的な解約の流れ</strong>を解説します。実際の画面遷移やボタン名は三ツ星ファームの仕様によって異なるため、参考としてご覧ください。
        </p>

        {[
          {
            num: 1,
            title: "公式サイトにログインしてマイページを開く",
            text: "三ツ星ファーム公式サイトにアクセスし、登録済みのメールアドレス・パスワードでログインします。会員ページ（マイページ）から各種設定にアクセスします。",
          },
          {
            num: 2,
            title: "定期便・契約に関する設定メニューを探す",
            text: "「定期便の設定」「お届け設定」「契約状況」などのメニュー内に、停止・解約に関する項目があることが一般的です。見つからない場合はヘルプやよくある質問を確認しましょう。",
          },
          {
            num: 3,
            title: "「停止」または「解約・退会」を選択する",
            text: "まず「一時停止」が案内される場合があります。完全にやめたい場合は、さらに進んで「解約」「退会」に該当する手続きへ進みます。",
          },
          {
            num: 4,
            title: "アンケート・確認画面に回答する",
            text: "解約理由を尋ねるアンケートが表示されることがあります。案内に従って必要事項を選択・入力します。",
          },
          {
            num: 5,
            title: "手続きを確定し、完了の通知を確認する",
            text: "最終確認画面で確定すると手続き完了です。登録メールアドレス宛に完了通知が届く場合は、必ず受信を確認してください。届かない・反映されない場合は手続きが正常に終わっていない可能性があります。",
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
          <p className="font-bold mb-1">手続き窓口は公式の案内に従ってください</p>
          <p>マイページで完結する場合もあれば、問い合わせフォームや電話が必要な場合もあります。手続き方法は時期によって変更されることがあるため、<strong>最新の案内を公式サイトで確認</strong>してから進めるのが確実です。</p>
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
          三ツ星ファームの<strong>具体的な締め日（何日前までか）は公式の規定によります</strong>。マイページの「お届け予定日」を確認し、余裕をもって手続きしてください。すでに確定済みの注文はキャンセルできないことが一般的です。
        </p>

        {/* ===== スキップ ===== */}
        <SectionHeading id="skip-step">スキップ（お届けの一時的な変更）のやり方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「今回は不要だが、今後も続けたい」という場合は、解約よりも<strong>スキップ</strong>が便利です。スキップは次回お届け分だけを飛ばし、定期便自体は継続する機能です。
        </p>

        {[
          { num: 1, title: "マイページのお届け予定（スケジュール）を開く", text: "次回お届け予定日が表示されている画面まで進みます。" },
          { num: 2, title: "対象のお届け回に対して「スキップ」を選ぶ", text: "スキップに相当するボタン・メニューを選択します（名称は仕様により異なります）。" },
          { num: 3, title: "確認画面で確定する", text: "反映後、次回分がスキップされた状態になります。締め日前に手続きする必要があります。" },
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

        <p className="text-sm mb-6 leading-relaxed">
          スキップ機能の有無・回数の上限・操作手順はサービスによって異なります。三ツ星ファームでの正確な仕様は、マイページや公式ヘルプでご確認ください。
        </p>

        {/* ===== 注意点 ===== */}
        <SectionHeading id="warnings">解約前に確認したい注意点</SectionHeading>

        {[
          {
            title: "1. 締め日を過ぎると次回分は止められない",
            text: "次回お届け予定日の直前に手続きしても、すでに確定済みの注文は止められないのが一般的です。確実に止めたいなら、締め日に余裕をもって手続きしましょう。",
          },
          {
            title: "2. 特典・割引・ポイントの扱いを確認する",
            text: "キャンペーン特典や割引、ポイントなどは解約によって失効・リセットされる場合があります。再開予定があるなら、解約ではなく一時停止やスキップを検討するのも一つの手です。",
          },
          {
            title: "3. 完了通知・ステータスを必ず確認する",
            text: "「手続きしたつもり」でも反映されていないと、次回分が届いてしまいます。完了通知やマイページのステータスで、確実に手続きが完了したか確認してください。",
          },
          {
            title: "4. 規定は変更されることがある",
            text: "締め日・手数料・手続き窓口などの規定は、時期によって変更される可能性があります。本記事は一般的な流れの解説であり、最新かつ正確な情報は必ず公式サイトでご確認ください。",
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
            ["メニューに飽きた", "メニューの選び直し・新メニューを試す"],
            ["お届け頻度が多い", "お届け間隔を長く変更する"],
            ["料金が負担", "プラン・食数の見直しを検討する"],
            ["在庫がたまる", "スキップを活用してペースを調整する"],
            ["他社が気になる", "一時停止して他社を試す → 合わなければ再開"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          三ツ星ファーム自体の特徴やメニューが自分に合っているか不安な方は、<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファームの口コミ・評判レビュー</Link>もあわせてご覧ください。他社と比較したい場合は<Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent underline">nosh・三ツ星ファーム・ウェルネスダイニングの比較</Link>が参考になります。
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
        <SectionHeading id="summary">まとめ：解約は手順を押さえれば難しくない。締め日に注意</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            三ツ星ファームの解約は、一般的にはマイページからの定期便停止・退会手続き、または問い合わせ窓口を通じて行います。手順自体は難しくありませんが、<strong>「次回お届け前の締め日」</strong>を過ぎると次回分が確定してしまう点に注意が必要です。
          </p>
          <p className="mb-3">
            「一時的に休みたいだけ」なら、完全な解約ではなく「<strong>スキップ</strong>」や「<strong>一時停止</strong>」を選ぶことで、特典を温存しながら柔軟に調整できる場合があります。
          </p>
          <p>
            締め日・手数料・手続き窓口などの細かな規定は、時期やプランによって変わる可能性があります。本記事は一般的な流れの解説です。<strong>最新かつ正確な情報は、必ず公式サイトでご確認ください。</strong>
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://mitsuboshifarm.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            三ツ星ファーム公式サイトで確認する
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の解約フローは公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            三ツ星ファームの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-cancel/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の解約方法
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh vs 三ツ星ファーム vs ウェルネスダイニング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            お試しセットおすすめ比較
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
