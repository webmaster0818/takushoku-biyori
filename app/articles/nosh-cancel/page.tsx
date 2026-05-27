import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "nosh(ナッシュ)解約方法を完全解説｜スキップ・プラン停止との違いと損しない選び方";
const ARTICLE_DESCRIPTION =
  "nosh(ナッシュ)の解約手順をステップごとに丁寧に解説。「解約」「スキップ」「プラン停止」の違い、nosh clubランクへの影響、解約金・違約金の有無、再開方法まで網羅。やめる前に必ず読みたい完全ガイドです。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-cancel/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh 解約, ナッシュ 解約, nosh 解約方法, nosh やめ方, nosh スキップ, nosh 停止, nosh 配送停止, nosh 違約金, ナッシュ 解約 引き止め",
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
    question: "noshの解約に違約金や解約金はかかる？",
    answer:
      "いいえ、一切かかりません。noshは「いつでもマイページから解約可能」と公式に明記しており、最低継続回数や違約金の縛りはありません。初回注文1回だけで解約することも可能です。電話での引き止めもなく、マイページから数クリックで完了します。",
  },
  {
    question: "解約とスキップ・プラン停止の違いは？",
    answer:
      "目的が異なります。【解約】はサービスから完全に退会する手続きで、nosh clubのランクと購入履歴がリセットされます。【スキップ】は次回1回分の配送だけを飛ばす機能で、ランクは維持。【プラン停止】は配送を当面止める機能で、こちらもランク維持。一時的に休みたいだけならスキップか停止、完全にやめるなら解約、と使い分けます。",
  },
  {
    question: "解約するとnosh clubのランクはどうなる？",
    answer:
      "解約するとnosh clubのランクはリセットされ、再開時はランク1（割引率0%）からのスタートになります。長期利用で高ランク（16.55%OFFなど）に到達している方が解約すると、再開時に大きく損するため注意が必要です。再開予定があるなら、解約ではなく「プラン停止」を選びましょう。プラン停止ならランクは維持されます。",
  },
  {
    question: "次回配送の何日前までに解約すれば請求が止まる？",
    answer:
      "次回配送予定日の5日前までに解約手続きを完了する必要があります。これを過ぎると次回分の注文確定処理に入ってしまい、解約しても次回分の請求と発送が行われます。配送予定日はマイページの「スケジュール」から確認できるので、解約前に必ずチェックしてください。",
  },
  {
    question: "解約後に再開したい場合はどうすればいい？",
    answer:
      "解約後でも、同じメールアドレス・アカウントでログインし直して再注文することで再開できます。ただし、nosh clubのランクはリセットされており、新規割引（初回〜3回目の3,000円OFF）も適用されません。再開の可能性があるなら「解約」ではなく「プラン停止」を選ぶのがおすすめ。停止ならランクが維持され、いつでも再開できます。",
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
          <span className="text-foreground">nosh(ナッシュ)解約方法</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：解約の前に「スキップ」「停止」を検討しよう" },
    { id: "diff", label: "解約・スキップ・プラン停止の3つの違い" },
    { id: "cancel-step", label: "noshの解約手順（マイページから5ステップ）" },
    { id: "deadline", label: "解約のタイミング｜次回配送5日前ルール" },
    { id: "skip-step", label: "スキップの手順（解約より簡単）" },
    { id: "stop-step", label: "プラン停止の手順とランク維持の仕組み" },
    { id: "warnings", label: "解約前に確認したい4つの注意点" },
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

export default function NoshCancelPage() {
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
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "解約・手続き" },
      { "@type": "ListItem", position: 3, name: "nosh(ナッシュ)解約方法" },
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
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年5月時点のnosh公式情報</strong>に基づき記述しています。最新の解約フロー・キャンペーン情報は<a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">nosh公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「noshをやめたい」「解約方法がわからない」「次回配送が迫っているけど間に合う？」——nosh(ナッシュ)の解約は、結論からいうと<strong>マイページから数クリックで完了</strong>します。違約金や電話による引き止めは一切ありません。
          </p>
          <p className="mb-3">
            ただし、知らずに「解約」を選ぶと<strong>nosh clubのランクがリセット</strong>されて損するケースもあります。「一時的に休みたいだけ」なら、解約ではなく「<strong>スキップ</strong>」や「<strong>プラン停止</strong>」が正解。
          </p>
          <p>
            この記事では、解約手順を5ステップで具体的に解説し、スキップ・プラン停止との違い、解約金の有無、次回配送5日前ルール、再開時の注意点まで丁寧にまとめています。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：解約の前に「スキップ」「停止」を検討しよう</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshを「やめたい」と感じた理由が次のどれに当てはまるかで、最適な手続きは変わります。
        </p>

        <ComparisonTable
          headers={["やめたい理由", "おすすめの手続き", "ランク維持"]}
          rows={[
            ["今は冷凍庫がいっぱい / 一時的に不要", "スキップ（1回飛ばす）", "○ 維持"],
            ["数ヶ月休みたい / 出張・旅行が長い", "プラン停止", "○ 維持"],
            ["完全にやめたい / 二度と使う予定がない", "解約", "× リセット"],
            ["メニューが合わない", "まずはスキップ + メニュー選び直し", "○ 維持"],
            ["料金が負担", "10食プラン+配送頻度を3週に変更", "○ 維持"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>解約は<strong>マイページから完結</strong>。電話・違約金・引き止めなし</li>
            <li>解約すると<strong>nosh clubランクがリセット</strong>される</li>
            <li>一時休止なら「スキップ」「プラン停止」の方が損しない</li>
            <li>次回配送の<strong>5日前まで</strong>に手続きを完了する必要がある</li>
          </ul>
        </div>

        {/* ===== 3つの違い ===== */}
        <SectionHeading id="diff">解約・スキップ・プラン停止の3つの違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshには「配送を止める」ための機能が<strong>3種類</strong>用意されています。それぞれ効果と影響範囲が異なるため、目的に合った機能を選ぶことが大切です。
        </p>

        <ComparisonTable
          headers={["機能", "効果", "ランクへの影響", "再開方法", "おすすめのケース"]}
          rows={[
            ["スキップ", "次回1回だけ配送をスキップ", "影響なし", "自動で次々回から再開", "1回だけ休みたい"],
            ["プラン停止", "再開指示まで配送を停止", "影響なし", "マイページから「再開」", "数週間〜数ヶ月休みたい"],
            ["解約", "アカウントを退会扱いに", "リセット（ランク1へ）", "再注文で復活（割引なし）", "完全にやめる"],
          ]}
        />

        <SubHeading>「スキップ」が向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>来週は旅行・出張で家にいない</li>
          <li>冷凍庫にまだストックが残っている</li>
          <li>来月は別の食事の予定が多い</li>
        </ul>

        <SubHeading>「プラン停止」が向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>1ヶ月以上noshを使う予定がない</li>
          <li>季節的に外食が増える期間がある</li>
          <li>引っ越し・転居の準備期間中</li>
          <li>nosh clubのランクを維持しておきたい</li>
        </ul>

        <SubHeading>「解約」が向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>味やボリュームが合わなかった</li>
          <li>送料の負担が大きすぎた（北海道・沖縄など）</li>
          <li>他社（三ツ星ファーム・ウェルネスダイニング等）に切り替える</li>
          <li>今後も再開予定がない</li>
        </ul>

        {/* ===== 解約手順 ===== */}
        <SectionHeading id="cancel-step">noshの解約手順（マイページから5ステップ）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          解約はパソコン・スマホブラウザ・公式アプリのいずれからでも可能です。ここではブラウザ（公式サイト）からの手順を解説します。<strong>所要時間は約1〜2分</strong>。
        </p>

        {[
          {
            num: 1,
            title: "nosh公式サイトにログイン",
            text: "nosh公式サイト（nosh.jp）にアクセスし、画面右上の「ログイン」から登録済みのメールアドレス・パスワードでログインします。アプリの場合はアプリ起動後にログイン状態を確認してください。",
          },
          {
            num: 2,
            title: "マイページから「お問い合わせ」または「サービス停止」へ",
            text: "マイページの設定メニュー内に、サービス停止に関する項目があります。表示位置は時期によって変わりますが、「契約状況」「サブスクリプション設定」「ヘルプ」配下に解約導線が用意されています。",
          },
          {
            num: 3,
            title: "「プランを停止する」→「サービスを解約する」を選択",
            text: "停止画面では、まず「プラン停止」が案内されます。プラン停止で十分な場合はここで完了。完全に解約したい場合は、さらに進んで「サービスを解約する」「退会する」のリンクをクリックします。",
          },
          {
            num: 4,
            title: "解約理由をアンケート選択",
            text: "「料金が高い」「味が合わなかった」「冷凍庫の問題」など、解約理由を選択するアンケートが表示されます。必須項目ですが、選択するだけで自由記述は任意です。",
          },
          {
            num: 5,
            title: "「解約する」ボタンで確定 → 完了メール確認",
            text: "最終確認画面で「解約する」を押すと手続き完了。登録メールアドレス宛に解約完了メールが届くので、必ず受信を確認してください。完了メールが届かない場合は手続きが正常に終わっていない可能性があります。",
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

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">解約完了の確認ポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li>登録メールアドレスに「解約完了」のメールが届く</li>
            <li>マイページのステータスが「解約済み」または「退会済み」に変わる</li>
            <li>次回配送予定がスケジュールから消える</li>
          </ul>
        </div>

        {/* ===== 5日前ルール ===== */}
        <SectionHeading id="deadline">解約のタイミング｜次回配送5日前ルール</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshの解約・スキップ・プラン停止には、共通の「<strong>次回配送予定日の5日前まで</strong>」というタイミングルールがあります。これを過ぎてしまうと、次回配送分の注文が確定処理に入り、解約手続きをしても次回分の請求と発送が行われます。
        </p>

        <ComparisonTable
          headers={["手続きを行ったタイミング", "次回配送分の扱い"]}
          rows={[
            ["次回配送予定日の6日前以前", "次回配送を止められる（請求も止まる）"],
            ["次回配送予定日の5日前", "次回配送を止められる（ギリギリOK）"],
            ["次回配送予定日の4日前以降", "次回配送は予定通り発送・請求される"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          次回配送予定日はマイページの「<strong>配送スケジュール</strong>」「<strong>お届け予定</strong>」から確認できます。解約・停止を決めたら、まず予定日を確認してから手続きを進めてください。
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">注意：「キャンセル」と「解約」は別物</p>
          <p>すでに注文確定済みの分は、キャンセル不可です。解約をしても、確定済みの注文分は発送・請求されます。次回分を確実に止めたい場合は、必ず<strong>次回配送予定日の5日前まで</strong>に手続きを完了してください。</p>
        </div>

        {/* ===== スキップ手順 ===== */}
        <SectionHeading id="skip-step">スキップの手順（解約より簡単）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          スキップは<strong>次回配送1回分だけを飛ばす機能</strong>で、解約より圧倒的に簡単です。「今週はもうストックがいっぱい」「来週旅行で受け取れない」といった一時的な事情に最適。
        </p>

        {[
          { num: 1, title: "マイページの「配送スケジュール」を開く", text: "次回配送予定日が表示されている画面まで進みます。" },
          { num: 2, title: "対象の配送日の「スキップ」ボタンをタップ", text: "ボタン1つでスキップが反映されます。" },
          { num: 3, title: "確認ダイアログで「OK」を選ぶ", text: "確認後、ステータスが「スキップ済み」に変わります。" },
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
          スキップを使ってもnosh clubのランクは維持され、次々回からは通常通り配送が再開されます。スキップは原則として連続使用も可能（時期により上限あり）です。
        </p>

        {/* ===== プラン停止 ===== */}
        <SectionHeading id="stop-step">プラン停止の手順とランク維持の仕組み</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「数ヶ月単位で休みたい」「再開時期は未定」という場合は、解約ではなく<strong>プラン停止</strong>がベストです。プラン停止中はnosh clubのランクが維持され、再開時にも積み上げた割引率がそのまま使えます。
        </p>

        <SubHeading>プラン停止の手順</SubHeading>
        {[
          { num: 1, title: "マイページの「契約状況」または「設定」に移動", text: "サブスクリプション関連のメニュー内に「プラン停止」の項目があります。" },
          { num: 2, title: "「プランを停止する」をタップ", text: "停止理由の選択画面が表示されることがあります。" },
          { num: 3, title: "停止理由を選択して確定", text: "「冷凍庫がいっぱい」「一時的に不要」など該当する理由を選択。" },
          { num: 4, title: "確認ダイアログで「停止する」を選ぶ", text: "ステータスが「停止中」に変わります。" },
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

        <SubHeading>プラン停止からの再開方法</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          再開したくなったら、マイページから「<strong>プランを再開する</strong>」を選択するだけ。メニュー選択画面に進み、配送日を指定すれば再開できます。<strong>nosh clubのランクは停止前のまま</strong>引き継がれるため、長期利用者ほど停止のメリットが大きくなります。
        </p>

        {/* ===== 注意点 ===== */}
        <SectionHeading id="warnings">解約前に確認したい4つの注意点</SectionHeading>

        {[
          {
            title: "1. nosh clubランクは復活しない",
            text: "解約するとランクがリセットされ、再開時はランク1からのスタートになります。たとえばランク10（9%OFF）まで積み上げていた人が解約 → 再開すると、再びランク10に到達するには90食分の購入が必要です。再開予定があるなら必ず「プラン停止」を選びましょう。",
          },
          {
            title: "2. 初回新規割引は再適用されない",
            text: "解約後に再注文しても、初回〜3回目の合計3,000円OFFの新規割引は適用されません。新規割引は「初めての登録1回限り」のため、解約→再登録での再取得はできません。",
          },
          {
            title: "3. 解約後もアカウント情報は一定期間残る",
            text: "解約してもアカウント自体は一定期間サーバーに残ります。同じメールアドレスでログインすれば再開可能です。完全にアカウントを削除したい場合は、カスタマーサポートに別途依頼する必要があります。",
          },
          {
            title: "4. 配送確定済みの分は止められない",
            text: "次回配送予定日の4日前を過ぎると、解約しても次回分は発送・請求されます。冷凍庫の在庫管理と相談して、早めの手続きを心がけましょう。",
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
          「解約しよう」と思った理由が、実は<strong>設定変更で解決できる</strong>ことがあります。よくある理由別に、解約以外の選択肢をまとめました。
        </p>

        <ComparisonTable
          headers={["解約理由", "解決策（解約せずに済む方法）"]}
          rows={[
            ["メニューに飽きた", "「人気ランキング」「新メニュー」フィルタで未試食メニューを選び直す"],
            ["配送頻度が多すぎる", "配送間隔を1週→2週→3週に変更"],
            ["料金が負担", "10食プランに変更（1食あたり最安599円） + nosh club継続でさらに値引き"],
            ["冷凍庫がいつもパンパン", "6食プランに変更 + スキップを併用"],
            ["特定メニューがまずかった", "そのメニューを除外して他のメニューに切り替え"],
            ["旅行・出張が多い", "スキップ機能を積極活用"],
            ["他社が気になる", "プラン停止して他社を試す → 合わなければnosh再開"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          特に「他社が気になる」場合、プラン停止しておけばnosh clubランクを維持したまま他社を試せます。三ツ星ファームやウェルネスダイニングと比べて<strong>「やっぱりnoshが良い」</strong>と感じたら、いつでもランク維持のまま戻れるのが大きなメリットです。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          サービス全体の特徴は<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh口コミ・評判の徹底レビュー</Link>で詳しく解説しています。再開の前に、自分の使い方に合っているかを再確認するのもおすすめです。
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
        <SectionHeading id="summary">まとめ：解約は数分で完了。でも「停止」も検討を</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            noshの解約は、マイページから<strong>数クリック・1〜2分で完了</strong>します。違約金や電話による引き止めは一切なく、安心して手続きできるのが大きな魅力です。
          </p>
          <p className="mb-3">
            ただし、解約するとnosh clubのランクがリセットされる点には注意が必要。長期利用者で「またそのうち使うかも」と思っている方は、解約ではなく「<strong>プラン停止</strong>」を選ぶことで、積み上げた割引率を温存できます。
          </p>
          <p className="mb-3">
            また、次回配送予定日の<strong>5日前まで</strong>に手続きを完了させないと、次回分は止められません。マイページのスケジュールを必ず確認してから進めてください。
          </p>
          <p>
            「合わなかった」と感じた理由次第では、プラン変更・配送間隔調整・メニュー選び直しで解決することも多いです。本当に解約すべきかを最後にもう一度検討してみることをおすすめします。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            nosh公式マイページにログイン
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の解約フローは公式サイトの案内をご確認ください</p>
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
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh vs 三ツ星ファーム vs ウェルネスダイニング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/reitou-bento-mazui/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            冷凍弁当がまずい理由と対策
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
