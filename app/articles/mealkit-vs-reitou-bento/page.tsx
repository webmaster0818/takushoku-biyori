import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ミールキット vs 冷凍弁当 徹底比較【2026年版】調理の手間・日持ち・価格感・栄養で選ぶ";
const ARTICLE_DESCRIPTION =
  "ミールキットと冷凍弁当の違いを、調理の手間・日持ち・価格感・栄養・向いている人の観点でフラットに比較。どちらが自分のライフスタイルに合うかを整理します。料金・キャンペーンは変動するため、最新は各公式サイトでご確認ください。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/mealkit-vs-reitou-bento/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ミールキット 冷凍弁当 比較, ミールキット 違い, 冷凍弁当 違い, ミールキット 冷凍 どっち, ミールキット デメリット, 冷凍弁当 メリット, 宅配弁当 比較, ミールキット 一人暮らし",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-06-14T00:00:00+09:00",
    modifiedTime: "2026-06-14T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "ミールキットと冷凍弁当、結局どっちが楽？",
    answer:
      "「楽さ」の基準によって変わります。とにかく調理の手間をゼロに近づけたいなら、電子レンジで温めるだけ・そのまま食べられる冷凍弁当のほうが手軽です。一方、簡単な調理は苦にならず、できたての温かい料理を食べたい・作る満足感も欲しいという場合は、下ごしらえ済みの食材が届くミールキットが向きます。包丁や火を使いたくない日が多いかどうかで判断すると選びやすいです。",
  },
  {
    question: "日持ちはどのくらい違う？",
    answer:
      "一般に、冷凍弁当は冷凍保存のため賞味期限が数週間〜数か月と長めで、ストックしておきやすいのが特徴です。ミールキットは生鮮食材を使うものが多く、冷蔵タイプだと消費期限が数日程度と短い傾向があります(冷凍タイプのミールキットもあります)。まとめ買いして好きなタイミングで使いたいなら冷凍弁当、届いたら早めに使い切る前提ならミールキット、と捉えると分かりやすいです。具体的な日持ちは商品・コースで異なるため、各公式サイトの表示でご確認ください。",
  },
  {
    question: "栄養バランスはどっちが良い？",
    answer:
      "どちらが一律に優れているとは言えません。冷凍弁当は管理栄養士監修で主菜・副菜の品数やカロリー・塩分・たんぱく質などを設計した商品が多く、栄養バランスを数値で管理しやすいのが強みです。ミールキットは自分で仕上げるぶん野菜の量や味付けを調整しやすく、できたての食事をとれる点がメリット。栄養を数値で把握したいなら冷凍弁当、自分でコントロールしたいならミールキットが向きます。",
  },
  {
    question: "一人暮らしにはどっちが向いている？",
    answer:
      "自炊の習慣があまりなく、洗い物も最小限にしたい一人暮らしの方には、温めるだけで完結する冷凍弁当が候補になりやすいです。冷凍庫にストックしておけば、好きなときに1食ずつ食べられます。一方、ある程度は料理をしたい・野菜をしっかり食べたい・作る楽しさも欲しいという方にはミールキットが向きます。冷凍庫や冷蔵庫の空き容量も選ぶ際のポイントです。",
  },
  {
    question: "価格はどっちが安い？",
    answer:
      "価格はサービス・コース・食数・地域・キャンペーンによって変動するため、本記事では具体的な金額を断定しません。比較するときは『1食あたりの目安価格』『送料』『まとめ買い時の単価』『初回お試しの有無』を各公式サイトで確認するのがおすすめです。なお、ミールキットは食材費が中心、冷凍弁当は調理・加工済みの完成品という違いがあるため、単純な金額だけでなく『手間をどれだけ省けるか』も含めて比べると納得しやすいです。",
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
          <span className="text-foreground/70">比較</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ミールキット vs 冷凍弁当</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：調理したいかどうかで選ぶ" },
    { id: "overview", label: "ミールキットと冷凍弁当の基本" },
    { id: "tema", label: "調理の手間の違い" },
    { id: "himochi", label: "日持ち・保存のしやすさの違い" },
    { id: "kakaku", label: "価格感の考え方（具体額は公式で確認）" },
    { id: "eiyou", label: "栄養バランスの違い" },
    { id: "muki", label: "向いている人・向いていない人" },
    { id: "choose", label: "タイプ別おすすめの選び方" },
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

export default function MealkitVsReitouBentoPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-06-14T00:00:00+09:00",
    dateModified: "2026-06-14T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "比較" },
      { "@type": "ListItem", position: 3, name: "ミールキット vs 冷凍弁当" },
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
            比較
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-06-14">公開: 2026年6月14日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の一般的なサービス特徴に基づき記述</strong>しています。料金・キャンペーン・賞味期限などの具体的な内容は変動するため、最新は各サービスの公式サイトでご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「ミールキットと冷凍弁当、どっちが自分に合うんだろう？」——どちらも食事の負担を減らせる便利なサービスですが、<strong>そもそもの仕組みが違います</strong>。
          </p>
          <p className="mb-3">
            ざっくり言うと、ミールキットは<strong>下ごしらえ済みの食材とレシピが届いて、自分で簡単に調理する</strong>もの。冷凍弁当は<strong>調理済みのおかずが冷凍で届き、温めるだけで食べられる</strong>ものです。
          </p>
          <p>
            この記事では、調理の手間・日持ち・価格感・栄養・向いている人の観点で両者をフラットに比較します。<strong>料金・キャンペーンは時期で変動</strong>するため具体額は断定せず、最新は各公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：調理したいかどうかで選ぶ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ミールキットと冷凍弁当を選ぶときの最大の分かれ目は、<strong>「自分で少しでも調理したいか/まったくしたくないか」</strong>です。ここがはっきりすると、迷わず選べます。
        </p>

        <ComparisonTable
          headers={["あなたの希望", "向いているタイプ"]}
          rows={[
            ["簡単でいいから自分で作りたい／温かい料理がいい", "ミールキット"],
            ["とにかく温めるだけで完結させたい", "冷凍弁当"],
            ["食材をまとめてストックしておきたい", "冷凍弁当"],
            ["野菜の量や味付けを自分で調整したい", "ミールキット"],
            ["洗い物・後片付けを最小限にしたい", "冷凍弁当"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>ミールキットは<strong>下ごしらえ済み食材を自分で調理</strong>するタイプ</li>
            <li>冷凍弁当は<strong>調理済みおかずを温めるだけ</strong>のタイプ</li>
            <li>「少しでも調理したいか」で選ぶのが一番わかりやすい</li>
            <li>料金・お試し・賞味期限は<strong>商品で変動</strong>するため公式で要確認</li>
          </ul>
        </div>

        {/* ===== 基本 ===== */}
        <SectionHeading id="overview">ミールキットと冷凍弁当の基本</SectionHeading>

        <SubHeading>ミールキットとは</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ミールキット(料理キット)は、<strong>カット・下ごしらえ済みの食材とレシピがセットで届き、自分で短時間調理して仕上げる</strong>サービスです。献立を考える手間や買い物の手間を省きつつ、できたての温かい料理を食べられるのが特徴。野菜の量を増やしたり味付けを調整したりと、自分好みにアレンジできる自由度も魅力です。冷蔵で届くタイプが多いですが、冷凍タイプのミールキットもあります。
        </p>

        <SubHeading>冷凍弁当とは</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍弁当(冷凍宅配弁当)は、<strong>主菜・副菜が調理済みの状態で1食ずつ冷凍されて届き、電子レンジで温めるだけで食べられる</strong>サービスです。包丁も火も使わず、後片付けも最小限。冷凍庫にストックしておけば、好きなタイミングで1食ずつ食べられます。管理栄養士監修でカロリーや塩分、たんぱく質などを設計した商品が多く、栄養バランスを数値で管理しやすいのも特徴です。
        </p>

        {/* ===== 調理の手間 ===== */}
        <SectionHeading id="tema">調理の手間の違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          毎日続けられるかどうかを左右するのが、調理の手間です。同じ「時短」でも、両者では負担のかかり方が大きく異なります。
        </p>

        <ComparisonTable
          headers={["項目", "ミールキット", "冷凍弁当"]}
          rows={[
            ["基本の流れ", "炒める・煮るなど簡単調理", "電子レンジで温めるだけ"],
            ["包丁・火の使用", "使うことが多い(下ごしらえ済み)", "基本は不要"],
            ["後片付け", "調理器具の洗い物あり", "容器を捨てるだけが中心"],
            ["できたて感", "できたての温かい料理", "温め直しの完成品"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          調理する時間が少しでも取れて、できたてを食べたいならミールキット。忙しくて手間をゼロに近づけたい、洗い物も減らしたいなら冷凍弁当が向きます。<Link href="/articles/reitou-bento-atatame-kata/" className="text-accent underline">冷凍弁当の上手な温め方</Link>もあわせて知っておくと、より手軽に活用できます。
        </p>

        {/* ===== 日持ち ===== */}
        <SectionHeading id="himochi">日持ち・保存のしやすさの違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ストックして計画的に使いたいか、届いたら早めに食べきるかで、選ぶべきタイプが変わります。
        </p>

        <ComparisonTable
          headers={["観点", "ミールキット", "冷凍弁当"]}
          rows={[
            ["保存方法", "冷蔵が中心(冷凍タイプもあり)", "冷凍保存"],
            ["日持ちの目安", "短め(数日が中心)", "長め(数週間〜数か月)"],
            ["まとめ買い", "使い切り前提で計画が必要", "ストックしやすい"],
            ["必要な収納", "冷蔵庫スペース", "冷凍庫スペース"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※日持ちは商品・コースによって異なります。賞味期限・消費期限の正確な情報は各公式サイトの表示でご確認ください。なお、スーパーの惣菜と冷凍宅配弁当の違いが気になる方は、<Link href="/articles/super-vs-takuhai-reitou-bento/" className="text-accent underline">スーパー惣菜 vs 宅配冷凍弁当の比較</Link>も参考になります。
        </p>

        {/* ===== 価格感 ===== */}
        <SectionHeading id="kakaku">価格感の考え方（具体額は公式で確認）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          価格はサービス・コース・食数・地域・キャンペーンによって変わるため、本記事では<strong>具体的な金額は断定しません</strong>。比較の際は、次のポイントを各公式サイトで確認すると失敗しにくいです。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>1食(1人前)あたりの目安価格</li>
          <li>まとめ買い・定期注文による単価の変化</li>
          <li>送料・地域による違い</li>
          <li>初回お試し・キャンペーンの有無</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          考え方として、ミールキットは<strong>食材費が中心で、自分の調理という手間が加わる</strong>もの。冷凍弁当は<strong>調理・加工まで済んだ完成品</strong>です。同じ「1食いくら」でも、省ける手間の量が違うため、金額だけでなく<strong>手間をどれだけ減らせるか</strong>もあわせて比べると納得しやすくなります。
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">料金は時期・商品で変動します</p>
          <p>当サイトでは正確性を優先し、価格を断定しません。<strong>最新・正確な料金は各公式サイトの表示</strong>でご確認ください。お試しセットがある場合は、まず少量から試して味・量・使い勝手を確認するのがおすすめです。</p>
        </div>

        {/* ===== 栄養 ===== */}
        <SectionHeading id="eiyou">栄養バランスの違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          栄養面は「どちらが優れている」と一律には言えません。それぞれ強みの方向性が異なります。
        </p>

        <ComparisonTable
          headers={["観点", "ミールキット", "冷凍弁当"]}
          rows={[
            ["栄養設計", "レシピに沿いつつ自分で調整", "管理栄養士監修の商品が多い"],
            ["数値の管理", "把握しづらいこともある", "カロリー・塩分など表示が多い"],
            ["味付け・量の調整", "自分でしやすい", "完成品のため固定"],
            ["野菜の摂りやすさ", "量を増やすなど調整可", "商品の設計に依存"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          カロリーや塩分・たんぱく質を<strong>数値でしっかり管理したい</strong>なら、栄養設計された冷凍弁当が向きます。一方、<strong>野菜を多めにしたい・薄味にしたいなど自分でコントロールしたい</strong>なら、ミールキットのほうが調整の自由度が高いです。健康目的や食事制限がある場合は、各商品の栄養成分表示を確認したうえで選びましょう。
        </p>

        {/* ===== 向いている人 ===== */}
        <SectionHeading id="muki">向いている人・向いていない人</SectionHeading>

        <SubHeading>ミールキットが向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>簡単な調理は苦にならず、できたてを食べたい</li>
          <li>献立決め・買い物の手間だけ省きたい</li>
          <li>野菜の量や味付けを自分で調整したい</li>
          <li>料理のレパートリーを増やしたい・作る満足感も欲しい</li>
        </ul>

        <SubHeading>冷凍弁当が向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>とにかく調理の手間をゼロに近づけたい</li>
          <li>温めるだけ・後片付けを最小限にしたい</li>
          <li>食事をまとめてストックしておきたい</li>
          <li>カロリーや塩分など栄養を数値で管理したい</li>
        </ul>

        <SubHeading>注意したい人</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          まったく調理時間が取れない・火を使いたくない人にとって、ミールキットはやや負担になることがあります。逆に、自炊が好きで作る過程も楽しみたい人には、完成品の冷凍弁当は物足りなく感じる場合があります。また、冷凍弁当は<strong>冷凍庫の空き容量</strong>、ミールキット(冷蔵タイプ)は<strong>早めに使い切る計画</strong>が必要な点も、選ぶ前に確認しておきましょう。
        </p>

        {/* ===== 選び方 ===== */}
        <SectionHeading id="choose">タイプ別おすすめの選び方</SectionHeading>

        <ComparisonTable
          headers={["ライフスタイル", "おすすめ", "理由"]}
          rows={[
            ["共働きで夕食を時短したい", "ミールキット", "下ごしらえ済みで短時間調理"],
            ["料理をしたくない・忙しい", "冷凍弁当", "温めるだけで完結"],
            ["まとめてストックしたい", "冷凍弁当", "冷凍で日持ちする"],
            ["野菜をしっかり摂りたい", "ミールキット", "量を自分で調整できる"],
            ["栄養を数値で管理したい", "冷凍弁当", "栄養成分の表示が多い"],
            ["まず試して決めたい", "両方のお試し", "味・量・手間を比較できる"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ミールキット中心のサービスと、おかず・弁当宅配の違いをもっと具体的に知りたい方は、<Link href="/articles/yoshikei-vs-watami/" className="text-accent underline">ヨシケイ vs ワタミの宅食の比較</Link>もチェックしてみてください。ミールキット系サービスの使い勝手は、<Link href="/articles/yoshikei-reviews/" className="text-accent underline">ヨシケイの口コミ・評判</Link>でも詳しく解説しています。
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
        <SectionHeading id="summary">まとめ：仕組みが違うので「目的」で選ぶ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ミールキットと冷凍弁当は、どちらも食事の負担を減らせる便利なサービスですが、<strong>仕組みが大きく異なります</strong>。ミールキットは下ごしらえ済み食材を自分で調理する「少しは作りたい人」向け、冷凍弁当は温めるだけの完成品で「調理したくない・ストックしたい人」向け、と捉えると選びやすくなります。
          </p>
          <p className="mb-3">
            日持ち・栄養設計・必要な収納スペースにも違いがあり、料金・お試しは<strong>時期や商品で変動</strong>します。当サイトでは正確性を優先し、価格は断定しません。
          </p>
          <p>
            迷ったら、まずは少量のお試しで、味・量・手間の感覚を比べてみるのがおすすめ。最新・正確な情報は、必ず各公式サイトでご確認ください。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/yoshikei-vs-watami/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ヨシケイ vs ワタミの宅食 徹底比較
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/super-vs-takuhai-reitou-bento/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            スーパー惣菜 vs 宅配冷凍弁当
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/reitou-bento-atatame-kata/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            冷凍弁当の上手な温め方
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/yoshikei-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ヨシケイの口コミ・評判
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
