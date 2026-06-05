import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "宅配弁当のスキップ・一時停止のやり方【2026年版】nosh・三ツ星・ワタミ等の停止方法まとめ";
const ARTICLE_DESCRIPTION =
  "宅配弁当の定期便を「解約せずに休む」スキップ・一時停止のやり方を2026年6月時点の各社公式情報に基づき解説。nosh・三ツ星ファーム・ワタミの宅食・ウェルネスダイニング・食宅便などの停止方法の一般的な流れ、締め日（次回お届け前の期限）、スキップと解約の違いをまとめています。最新の手続きは各公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/takuhai-skip/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅配弁当 スキップ, 宅配弁当 一時停止, 宅配弁当 休む, nosh スキップ, 三ツ星ファーム スキップ, ワタミの宅食 停止, 宅配弁当 定期便 停止, 宅食 スキップ やり方",
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
    question: "スキップと一時停止と解約は何が違う？",
    answer:
      "【スキップ】は次回お届け1回分だけを飛ばす機能で、定期便は継続します。【一時停止（お休み）】は再開指示まで配送を止める手続きで、これも定期便は継続します。【解約】は定期便そのものを終了する手続きです。「1回だけ休む」ならスキップ、「数週間〜数ヶ月休む」なら一時停止、「完全にやめる」なら解約、と使い分けます。",
  },
  {
    question: "スキップにも締め日（期限）はある？",
    answer:
      "はい。多くのサービスでは「次回お届け予定日の数日前まで」にスキップ手続きを完了する必要があります。これを過ぎると次回分は確定し、スキップできずに発送・請求されます。具体的な締め日は各社の規定によるため、マイページのお届け予定日を確認し、余裕をもって手続きしてください。",
  },
  {
    question: "スキップすると特典やランクは消える？",
    answer:
      "一般的に、スキップや一時停止は定期便を継続したままの手続きのため、解約とは異なり特典やランクが維持されるケースが多いです。ただし、特典の扱いはサービスごとに異なります。長期利用の特典を温存したい場合は、解約よりもスキップ・一時停止を選ぶのが無難です。詳細は各公式サイトでご確認ください。",
  },
  {
    question: "スキップは何回まで連続でできる？",
    answer:
      "連続スキップの可否や回数の上限はサービスによって異なります。回数制限なくスキップできるサービスもあれば、上限が設けられている場合もあります。長く休みたい場合は、スキップを繰り返すより「一時停止（お休み）」を選んだ方がスムーズなこともあります。",
  },
  {
    question: "スキップではなく解約した方が良いケースは？",
    answer:
      "「今後まったく使う予定がない」「他社に完全に乗り換える」「会員情報も含めて整理したい」といった場合は、スキップ・一時停止ではなく解約が適しています。一方、「また使うかもしれない」程度なら、特典を維持できるスキップ・一時停止のほうが損をしにくいでしょう。",
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
          <span className="text-foreground">宅配弁当のスキップ・一時停止</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：解約せず「スキップ・一時停止」で十分なケースは多い" },
    { id: "diff", label: "スキップ・一時停止・解約の違い" },
    { id: "common-step", label: "スキップ・一時停止の基本手順（共通の流れ）" },
    { id: "deadline", label: "締め日｜次回お届け前の手続き期限に注意" },
    { id: "by-service", label: "主要サービス別｜停止方法の傾向（nosh・三ツ星・ワタミ等）" },
    { id: "warnings", label: "スキップ・一時停止の注意点" },
    { id: "choose", label: "スキップ・一時停止・解約の選び方" },
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

export default function TakuhaiSkipPage() {
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
      { "@type": "ListItem", position: 3, name: "宅配弁当のスキップ・一時停止" },
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の各社公式情報</strong>に基づき記述。最新の解約・停止フロー等は各公式サイトでご確認ください。各社公式：<a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">nosh</a> ／ <a href="https://mitsuboshifarm.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">三ツ星ファーム</a> ／ <a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ワタミの宅食</a> ／ <a href="https://www.wellness-dining.com/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ウェルネスダイニング</a> ／ <a href="https://shokutakubin.com/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">食宅便</a>
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「旅行で受け取れない」「冷凍庫がいっぱい」「来月は外食が多い」——そんなときに便利なのが、宅配弁当の<strong>スキップ・一時停止</strong>です。解約しなくても、次回分だけ飛ばしたり、しばらく配送を止めたりできます。
          </p>
          <p className="mb-3">
            この記事では、スキップ・一時停止・解約の違いと、手続きの<strong>一般的な流れ</strong>、締め日（手続き期限）の考え方を解説。さらに、nosh・三ツ星ファーム・ワタミの宅食・ウェルネスダイニング・食宅便など主要サービスの停止方法の傾向もまとめます。
          </p>
          <p>
            ただし、<strong>具体的な手順・締め日・機能名は各社の規定によって変わる</strong>ため、最新の正確な情報は必ず各公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：解約せず「スキップ・一時停止」で十分なケースは多い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「やめたい」と思っても、理由が一時的なものなら、解約せずスキップや一時停止で対応できることがほとんどです。理由別の最適な手続きは次の通りです。
        </p>

        <ComparisonTable
          headers={["休みたい理由", "おすすめの手続き"]}
          rows={[
            ["来週は旅行・出張で受け取れない", "スキップ（1回飛ばす）"],
            ["冷凍庫に在庫が残っている", "スキップ（1回飛ばす）"],
            ["1ヶ月以上使う予定がない", "一時停止（お休み）"],
            ["引っ越し・長期不在の予定がある", "一時停止（お休み）"],
            ["完全にやめる / 二度と使わない", "解約"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論（一般的な傾向）</p>
          <ul className="list-disc list-inside space-y-1">
            <li>一時的に休むだけなら<strong>スキップ・一時停止で十分</strong>なことが多い</li>
            <li>スキップ・一時停止は<strong>特典・ランクを維持できる</strong>ケースが多い</li>
            <li>スキップにも「次回お届け前の<strong>締め日</strong>」がある</li>
            <li>機能名・手順は各社で異なるため<strong>各公式サイトで要確認</strong></li>
          </ul>
        </div>

        {/* ===== 違い ===== */}
        <SectionHeading id="diff">スキップ・一時停止・解約の違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          まずは3つの手続きの違いを整理しましょう。名称は各社で異なりますが、目的と効果で見分けられます。
        </p>

        <ComparisonTable
          headers={["手続き", "効果", "契約・特典の状態", "向いているケース"]}
          rows={[
            ["スキップ", "次回お届け1回分を飛ばす", "定期便は継続／特典維持されることが多い", "1回だけ休みたい"],
            ["一時停止（お休み）", "再開まで配送を止める", "定期便は継続（休止）／特典維持されることが多い", "数週間〜数ヶ月休みたい"],
            ["解約", "定期便・契約を終了する", "契約終了／特典がリセットされることがある", "完全にやめる"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ポイントは、<strong>スキップ・一時停止は定期便を続けたままの「お休み」</strong>であるのに対し、<strong>解約は契約そのものの終了</strong>だという点です。「また使うかも」と思うなら、まずはスキップ・一時停止を選ぶのが安全です。
        </p>

        {/* ===== 共通手順 ===== */}
        <SectionHeading id="common-step">スキップ・一時停止の基本手順（共通の流れ）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          サービスによって画面や機能名は違いますが、スキップ・一時停止の流れはおおむね共通しています。
        </p>

        {[
          {
            num: 1,
            title: "公式サイト/アプリにログインしてマイページを開く",
            text: "登録済みのアカウントでログインし、会員ページ（マイページ）にアクセスします。",
          },
          {
            num: 2,
            title: "お届け予定（配送スケジュール）を確認する",
            text: "次回お届け予定日を確認します。締め日に間に合うかどうかが手続きの前提です。",
          },
          {
            num: 3,
            title: "「スキップ」または「お休み（一時停止）」を選ぶ",
            text: "次回分だけ休むならスキップ、しばらく休むなら一時停止を選びます。サービスによっては問い合わせ窓口での申し出が必要な場合もあります。",
          },
          {
            num: 4,
            title: "確認画面で確定する",
            text: "内容を確認して確定します。締め日前であれば次回分が止まります。",
          },
          {
            num: 5,
            title: "反映（ステータス）を確認する",
            text: "スキップ済み・休止中などのステータスを確認します。反映されていないと次回分が届く可能性があります。",
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

        {/* ===== 締め日 ===== */}
        <SectionHeading id="deadline">締め日｜次回お届け前の手続き期限に注意</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          スキップ・一時停止には、解約と同じく「<strong>次回お届け予定日の数日前まで</strong>」という締め日（手続き期限）があるのが一般的です。これを過ぎると次回分の注文が確定し、スキップしても次回分は発送・請求されます。
        </p>

        <ComparisonTable
          headers={["手続きのタイミング（一般例）", "次回お届け分の扱い"]}
          rows={[
            ["締め日より前", "スキップ・停止が反映される可能性が高い"],
            ["締め日を過ぎた後", "次回分は確定・発送される可能性が高い"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          締め日が「<strong>何日前まで</strong>」かは各社の規定によって異なります。マイページのお届け予定日を確認し、余裕をもって手続きするのが確実です。
        </p>

        {/* ===== サービス別 ===== */}
        <SectionHeading id="by-service">主要サービス別｜停止方法の傾向（nosh・三ツ星・ワタミ等）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          主要サービスごとの停止方法の<strong>一般的な傾向</strong>を整理します。実際の機能名・手順・締め日は変更されることがあるため、必ず各公式サイトの最新情報をご確認ください。
        </p>

        <ComparisonTable
          headers={["サービス", "停止方法の傾向", "詳しい解説記事"]}
          rows={[
            ["nosh（ナッシュ）", "マイページからスキップ・プラン停止・解約が選べる", "解約方法ガイドあり"],
            ["三ツ星ファーム", "マイページ等から定期便の停止・スキップが可能", "解約方法ガイドあり"],
            ["ワタミの宅食", "コースにより締め日・申し込み方法が異なる場合がある", "口コミレビューあり"],
            ["ウェルネスダイニング", "マイページ・電話などでお休み・解約を受付", "解約方法ガイドあり"],
            ["食宅便", "マイページ・電話などで定期便の停止・退会を受付", "解約方法ガイドあり"],
          ]}
        />

        <SubHeading>冷凍タイプと冷蔵（当日配送）タイプで違いがある</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          noshや三ツ星ファーム、食宅便のような<strong>冷凍タイプ</strong>は、まとめて届くためスキップ・一時停止で在庫調整しやすいのが特徴です。一方、ワタミの宅食のような<strong>日替わり・短サイクルで届くタイプ</strong>は、週ごと・コースごとに締め日や停止方法が設定されていることがあり、手続きのタイミングがより重要になります。
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">機能名・手順は変わることがあります</p>
          <p>「スキップ」「お休み」「プラン停止」などの名称や、操作手順・締め日は、サービスのアップデートや時期によって変更されることがあります。手続き前に必ず各公式サイトの最新の案内をご確認ください。</p>
        </div>

        {/* ===== 注意点 ===== */}
        <SectionHeading id="warnings">スキップ・一時停止の注意点</SectionHeading>

        {[
          {
            title: "1. 締め日を過ぎると次回分は止められない",
            text: "スキップ・一時停止にも締め日があります。確定済みの注文は止められないのが一般的なので、締め日に余裕をもって手続きしましょう。",
          },
          {
            title: "2. 連続スキップの上限がある場合がある",
            text: "スキップを繰り返せる回数に上限があるサービスもあります。長く休みたい場合は、スキップを繰り返すより「一時停止（お休み）」を選んだ方がスムーズなことがあります。",
          },
          {
            title: "3. 反映を必ず確認する",
            text: "手続きしたつもりでも反映されていないと、次回分が届いてしまいます。スキップ済み・休止中などのステータスを必ず確認しましょう。",
          },
          {
            title: "4. 再開のタイミングにも締め日がある",
            text: "一時停止からの再開時も、希望のお届け日に間に合うよう早めに手続きする必要がある場合があります。再開予定日が決まったら早めに操作しましょう。",
          },
        ].map((item, i) => (
          <div key={i} className="bg-cream rounded-lg p-4 mb-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}

        {/* ===== 選び方 ===== */}
        <SectionHeading id="choose">スキップ・一時停止・解約の選び方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          迷ったときは、「<strong>どのくらい休みたいか</strong>」「<strong>また使う可能性があるか</strong>」で選ぶのがおすすめです。
        </p>

        <ComparisonTable
          headers={["状況", "おすすめの手続き", "理由"]}
          rows={[
            ["1回だけ受け取れない", "スキップ", "手軽で特典も維持しやすい"],
            ["数ヶ月休むが、また使うかも", "一時停止（お休み）", "特典を維持したまま休める"],
            ["他社を試したい", "一時停止（お休み）", "合わなければすぐ戻れる"],
            ["完全にやめる", "解約", "契約・登録を整理できる"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          各サービスの具体的な解約手順を知りたい場合は、<Link href="/articles/nosh-cancel/" className="text-accent underline">noshの解約方法</Link>、<Link href="/articles/mitsuboshi-cancel/" className="text-accent underline">三ツ星ファームの解約方法</Link>、<Link href="/articles/wellness-cancel/" className="text-accent underline">ウェルネスダイニングの解約方法</Link>、<Link href="/articles/shokutakubin-cancel/" className="text-accent underline">食宅便の解約・退会方法</Link>の各記事もあわせてご覧ください。
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
        <SectionHeading id="summary">まとめ：一時的に休むなら「スキップ・一時停止」が便利</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            旅行や在庫過多など、休む理由が一時的なものなら、解約せずに<strong>スキップ・一時停止</strong>で対応できることがほとんどです。これらは定期便を継続したままの「お休み」なので、特典やランクを維持できるケースが多いのもメリットです。
          </p>
          <p className="mb-3">
            ただし、スキップ・一時停止にも「<strong>次回お届け前の締め日</strong>」があります。締め日を過ぎると次回分は止められないため、マイページのお届け予定日を確認し、余裕をもって手続きしましょう。
          </p>
          <p>
            機能名・手順・締め日は各社で異なり、変更されることもあります。本記事は一般的な流れの解説です。<strong>最新かつ正確な情報は、必ず各公式サイトでご確認ください。</strong>
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            各サービスのスキップ・停止方法を公式で確認する
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新のスキップ・停止フローは各公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-cancel/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の解約方法
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/mitsuboshi-cancel/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            三ツ星ファームの解約方法
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/wellness-cancel/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ウェルネスダイニングの解約方法
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/shokutakubin-cancel/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            食宅便の解約・退会方法
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
