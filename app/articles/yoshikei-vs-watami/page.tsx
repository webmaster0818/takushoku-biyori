import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ヨシケイ vs ワタミの宅食 徹底比較【2026年版】料金・宅配方式・向いている人";
const ARTICLE_DESCRIPTION =
  "ヨシケイとワタミの宅食を、宅配方式・メニュータイプ・向いている人の観点で徹底比較。ミールキット中心のヨシケイと、おかず宅配のワタミの宅食、どちらが自分に合うかを整理します。料金・キャンペーンは変動するため、最新は各公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/yoshikei-vs-watami/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ヨシケイ ワタミ 比較, ヨシケイ vs ワタミ, ヨシケイ 宅配, ワタミの宅食, 宅食 比較, ミールキット 比較, ワタミ ヨシケイ どっち, 宅配弁当 比較",
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
    question: "ヨシケイとワタミの宅食、どっちが安い？",
    answer:
      "料金はコース・地域・キャンペーンによって変動するため、本記事では具体的な金額を断定しません。一般に、ヨシケイは食材とレシピが届くミールキット系から完成おかずまで幅広いコースがあり、ワタミの宅食は調理済みのおかず・弁当が中心です。1食あたりの感覚的な負担はコース選び次第で変わります。最新・正確な金額は、必ず各公式サイトでご確認ください。",
  },
  {
    question: "宅配方式はどう違う？",
    answer:
      "おおまかな違いとして、ヨシケイは曜日ごとに食材・ミールキットを宅配し、自分で調理するコースが中心(完成品コースもあり)です。ワタミの宅食は調理済みのおかず・弁当を届けるスタイルで、地域によっては自社スタッフ(まごころスタッフ)による手渡し・置き配対応があります。どちらも地域で対応状況が異なるため、エリア対応は公式で確認してください。",
  },
  {
    question: "料理が苦手でも使える？",
    answer:
      "料理をできるだけしたくない場合は、調理済みのおかず・弁当が中心のワタミの宅食、またはヨシケイの完成品(温めるだけ・盛り付けるだけ)系のコースが向いています。逆に「食材は届けてほしいが調理は自分でしたい」「作る楽しさも欲しい」という方は、ヨシケイのミールキット系コースが合います。目的に合わせて選びましょう。",
  },
  {
    question: "高齢者や一人暮らしにはどっちが向いている？",
    answer:
      "調理の手間を最小限にしたい高齢者・一人暮らしの方には、温めるだけ・そのまま食べられる調理済みおかずが中心のワタミの宅食が候補になりやすいです。一方、自炊の習慣があり献立を考える手間だけ省きたい方にはヨシケイのミールキットが向きます。安否確認的に毎日手渡しを希望する場合は、地域の対応状況を公式で確認してください。",
  },
  {
    question: "お試しはできる？",
    answer:
      "両社とも、新規向けにお試し・初回キャンペーンを実施することがあります。内容(対象コース・割引・期間)は時期によって変動するため、本記事では断定しません。まずは少ない日数・食数から試して、味・量・配送の使い勝手を確認するのがおすすめです。最新のお試し情報は各公式サイトでご確認ください。",
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
          <span className="text-foreground">ヨシケイ vs ワタミの宅食</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：調理したいかどうかで選ぶ" },
    { id: "overview", label: "ヨシケイとワタミの宅食の基本" },
    { id: "houshiki", label: "宅配方式の違い" },
    { id: "menu", label: "メニュー・コースタイプの違い" },
    { id: "ryoukin", label: "料金の考え方（具体額は公式で確認）" },
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

export default function YoshikeiVsWatamiPage() {
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
      { "@type": "ListItem", position: 2, name: "比較" },
      { "@type": "ListItem", position: 3, name: "ヨシケイ vs ワタミの宅食" },
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の各社公式情報に基づき記述</strong>しています。料金・キャンペーンは変動するため、最新は<a href="https://www.yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ヨシケイ公式サイト</a>・<a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ワタミの宅食公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「ヨシケイとワタミの宅食、どっちがいいの？」——同じ宅食サービスでも、この2社は<strong>そもそものスタイルが大きく違います</strong>。
          </p>
          <p className="mb-3">
            ざっくり言うと、ヨシケイは<strong>食材・ミールキットが届いて自分で調理する</strong>コースが中心(完成品コースもあり)、ワタミの宅食は<strong>調理済みのおかず・弁当が届く</strong>スタイルです。
          </p>
          <p>
            この記事では、宅配方式・メニュー・向いている人の観点で両者を比較します。<strong>料金・キャンペーンは時期で変動</strong>するため具体額は断定せず、最新は各公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：調理したいかどうかで選ぶ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ヨシケイとワタミの宅食を選ぶときの最大の分かれ目は、<strong>「自分で調理したいか/したくないか」</strong>です。ここがはっきりすると、迷わず選べます。
        </p>

        <ComparisonTable
          headers={["あなたの希望", "向いているサービス"]}
          rows={[
            ["食材は届けてほしいが調理は自分でしたい", "ヨシケイ(ミールキット系)"],
            ["できるだけ調理したくない／温めるだけがいい", "ワタミの宅食(調理済みおかず)"],
            ["献立を考える手間だけ省きたい", "ヨシケイ(ミールキット系)"],
            ["高齢の家族に手渡しで届けてほしい", "ワタミの宅食(地域による)"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>ヨシケイは<strong>ミールキット・食材宅配が中心</strong>(完成品コースもあり)</li>
            <li>ワタミの宅食は<strong>調理済みのおかず・弁当が中心</strong></li>
            <li>「調理したいか」で選ぶのが一番わかりやすい</li>
            <li>料金・お試しは<strong>時期で変動</strong>するため公式で要確認</li>
          </ul>
        </div>

        {/* ===== 基本 ===== */}
        <SectionHeading id="overview">ヨシケイとワタミの宅食の基本</SectionHeading>

        <SubHeading>ヨシケイとは</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ヨシケイは、<strong>食材とレシピをセットで届けるミールキット(料理キット)を中心に展開する宅配サービス</strong>です。献立を考える手間や買い物の手間を省きつつ、自分で調理する楽しさを残せるのが特徴。手間を抑えたい人向けに、カットや下ごしらえ済みの時短コース、温めるだけ・盛り付けるだけの完成品コースなど、幅広いコースが用意されています。
        </p>

        <SubHeading>ワタミの宅食とは</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食は、<strong>調理済みのおかず・弁当を届ける宅食サービス</strong>です。栄養バランスに配慮した日替わりの献立が中心で、基本的に温めるだけ・そのまま食べられる手軽さが魅力。地域によっては自社スタッフ(まごころスタッフ)による手渡し・置き配の対応があり、毎日の食事を手間なく整えたい層に支持されています。
        </p>

        {/* ===== 宅配方式 ===== */}
        <SectionHeading id="houshiki">宅配方式の違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          配送のスタイルにも違いがあります。ライフスタイルに合うかどうかは、ここも重要なポイントです。
        </p>

        <ComparisonTable
          headers={["項目", "ヨシケイ", "ワタミの宅食"]}
          rows={[
            ["届くもの", "食材・ミールキット中心(完成品コースもあり)", "調理済みおかず・弁当中心"],
            ["調理の必要", "自分で調理するコースが中心", "基本は温めるだけ"],
            ["配送スタイル", "曜日ごとに宅配(地域による)", "自社スタッフ手渡し・置き配など(地域による)"],
            ["保存タイプ", "コースにより冷蔵など", "コースにより冷蔵・冷凍など"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※配送スタイル・対応地域・保存タイプはコースやエリアで異なります。実際の対応状況は各公式サイトでご確認ください。
        </p>

        {/* ===== メニュー ===== */}
        <SectionHeading id="menu">メニュー・コースタイプの違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          メニューの考え方も異なります。ヨシケイは「自分で作る前提のキット」、ワタミの宅食は「そのまま食べられるおかず」が軸です。
        </p>

        <ComparisonTable
          headers={["観点", "ヨシケイ", "ワタミの宅食"]}
          rows={[
            ["メニューの軸", "日替わりの献立キット", "日替わりの調理済みおかず"],
            ["調理の自由度", "高い(自分で仕上げる)", "低い(完成品)"],
            ["時短コース", "カット済み・完成品など複数", "そもそも調理不要が中心"],
            ["向く食シーン", "家族の夕食づくりなど", "手軽な昼食・夕食、高齢者の食事など"],
          ]}
        />

        {/* ===== 料金 ===== */}
        <SectionHeading id="ryoukin">料金の考え方（具体額は公式で確認）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          料金はコース・地域・頼む日数(食数)・キャンペーンによって変わるため、本記事では<strong>具体的な金額は断定しません</strong>。比較の際は、次のポイントを各公式サイトで確認すると失敗しにくいです。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>1食(1人前)あたりの目安価格</li>
          <li>注文する日数・食数による単価の変化</li>
          <li>配送料・地域による違い</li>
          <li>初回お試し・キャンペーンの有無</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">料金は時期・地域で変動します</p>
          <p>当サイトでは正確性を優先し、価格を断定しません。<strong>最新・正確な料金は各公式サイトの表示</strong>でご確認ください。同じ「宅食」でも、調理の有無によって手間や満足ポイントが異なる点も踏まえて比較しましょう。</p>
        </div>

        {/* ===== 向いている人 ===== */}
        <SectionHeading id="muki">向いている人・向いていない人</SectionHeading>

        <SubHeading>ヨシケイが向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>調理はするが、献立決め・買い物の手間を省きたい</li>
          <li>できたての温かい料理を家族で食べたい</li>
          <li>食材ロスを減らしたい(使い切り分が届く)</li>
          <li>料理のレパートリーを増やしたい</li>
        </ul>

        <SubHeading>ワタミの宅食が向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>とにかく調理の手間を減らしたい</li>
          <li>温めるだけ・そのまま食べたい</li>
          <li>高齢の家族の食事を手軽に整えたい</li>
          <li>毎日の手渡し配送(地域による)を希望する</li>
        </ul>

        <SubHeading>注意したい人</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          調理する時間がまったく取れない人にはヨシケイのミールキット系は負担になることがあります。逆に、自炊が好きで作る楽しみを大事にしたい人には、調理済みおかず中心のワタミの宅食は物足りなく感じる場合があります。どちらも<strong>対応地域が限られる</strong>ことがあるため、まずは自宅が配送エリアかを確認しましょう。
        </p>

        {/* ===== 選び方 ===== */}
        <SectionHeading id="choose">タイプ別おすすめの選び方</SectionHeading>

        <ComparisonTable
          headers={["ライフスタイル", "おすすめ", "理由"]}
          rows={[
            ["共働きで夕食を時短したい", "ヨシケイ(時短コース)", "下ごしらえ済みで短時間調理"],
            ["料理が苦手・したくない", "ワタミの宅食", "調理不要のおかず中心"],
            ["高齢の親に届けたい", "ワタミの宅食", "手渡し対応(地域)+調理不要"],
            ["作る楽しみも残したい", "ヨシケイ(キット)", "自分で仕上げられる"],
            ["まず試して決めたい", "両社のお試し", "味・量・配送を比較できる"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          実際の味や使い勝手は、利用者の評判もチェックしておくと安心です。ワタミの宅食については<Link href="/articles/watami-reviews/" className="text-accent underline">ワタミの宅食の口コミ・評判</Link>、ヨシケイについては<Link href="/articles/yoshikei-reviews/" className="text-accent underline">ヨシケイの口コミ・評判</Link>で詳しく解説しています。
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
        <SectionHeading id="summary">まとめ：スタイルが違うので「目的」で選ぶ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ヨシケイとワタミの宅食は、同じ宅食でも<strong>スタイルが大きく異なる</strong>サービスです。ヨシケイはミールキット・食材宅配が中心で「調理したい人」向け、ワタミの宅食は調理済みおかず中心で「調理したくない人」向け、と捉えると選びやすくなります。
          </p>
          <p className="mb-3">
            料金・お試し・対応地域は<strong>時期や地域で変動</strong>します。当サイトでは正確性を優先し、価格は断定しません。
          </p>
          <p>
            迷ったら、まずは少ない日数・食数のお試しで、味・量・配送の使い勝手を比べてみるのがおすすめ。最新・正確な情報は、必ず各公式サイトでご確認ください。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://www.watami-takushoku.co.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            ワタミの宅食 公式サイトを見る
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の料金・お試し・対応地域は公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ワタミの宅食の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/yoshikei-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ヨシケイの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/watami-direct-otameshi/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ワタミの宅食ダイレクトのお試し
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            高齢者向け宅配弁当のおすすめ
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
