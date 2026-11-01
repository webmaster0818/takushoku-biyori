import type { Metadata } from "next";
import Link from "next/link";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";

const ARTICLE_TITLE =
  "ヨシケイ vs ワタミの宅食 比較【2026年版】料金・宅配方式・向いている人";
const ARTICLE_DESCRIPTION =
  "ヨシケイとワタミの宅食を、宅配方式・メニュータイプ・向いている人の観点で比較します。ミールキット中心のヨシケイと、おかず宅配のワタミの宅食、どちらが自分に合うかを整理します。料金・キャンペーンは変動するため、最新は各公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/yoshikei-vs-watami/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ヨシケイ ワタミ 比較, ヨシケイ vs ワタミ, ヨシケイ 宅配, ワタミの宅食, 宅食 比較, ミールキット 比較, ワタミ ヨシケイ どっち, 宅配弁当 比較",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-06-04T00:00:00+09:00",
    modifiedTime: "2026-11-01T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "ヨシケイとワタミの宅食、どっちが安い？",
    answer:
      "公式の表示どおりに1食あたりで比べると、ワタミの宅食のほうが低めです。ヨシケイの通常価格は5日間・人数分の「程度」の金額で示されており、2人用5日分（10食）で6,900〜9,000円程度＝1食約690〜900円です（お試し5daysの各コースの通常価格。地域・週で変わります）。ワタミの宅食のお弁当・お惣菜は5日間コースで2,350〜3,950円＝1食470〜790円（税込・宅配料込み）です（いずれも2026年11月1日公式で確認）。配達料は、ヨシケイは無料、ワタミの宅食は商品価格に含まれています。なお、ワタミの宅食の「まごころおかず」「まごころ手鞠」などはおかずのみで、ごはんは自分で用意します。",
  },
  {
    question: "宅配方式はどう違う？",
    answer:
      "ヨシケイは、スマイルスタッフが夕食の食材を毎日（月〜金）届けます。午前10時〜午後5時ごろの決まった時間帯で、時間指定はできません。クールBOXに食材と保冷剤を入れて届け、置き配もでき、希望すれば鍵付きあんしんBOXを借りられます。ワタミの宅食は、まごころスタッフが決まった時間帯に手渡しを基本に届け、不在時は保冷ボックスに入れます。希望すれば鍵付き安全ボックスを無料で借りられ、時間指定はできません（いずれも2026年11月1日公式で確認）。どちらも配達できない地域があるため、エリアは郵便番号で公式サイトから確認してください。",
  },
  {
    question: "料理が苦手でも使える？",
    answer:
      "料理をできるだけしたくない場合は、調理済みのおかず・弁当を電子レンジで温めるだけのワタミの宅食が向いています。ヨシケイにも、電子レンジ・湯煎で調理するメニューが中心の「タイムリーミール」や、単品・冷凍弁当があります。逆に「食材は届けてほしいが調理は自分でしたい」「作る楽しさも欲しい」という方は、ヨシケイのミールキット系コースが合います。目的に合わせて選びましょう。",
  },
  {
    question: "高齢者や一人暮らしにはどっちが向いている？",
    answer:
      "調理の手間を最小限にしたい高齢者・一人暮らしの方には、温めるだけ・そのまま食べられる調理済みおかずが中心のワタミの宅食が候補に挙がります。一方、自炊の習慣があり献立を考える手間だけ省きたい方にはヨシケイのミールキットが向きます。安否確認的に毎日手渡しを希望する場合は、地域の対応状況を公式で確認してください。",
  },
  {
    question: "お試しはできる？",
    answer:
      "できます。ヨシケイは初めての方限定の「お試し5days」で、7コースから1つを選び、5日分（月〜金）のミールキットを通常価格の約30〜50%OFF（1人1食あたり約280〜670円程度・税込・配達料無料）で試せます。キャンセルは配達日の前週水曜17時までです。ワタミの宅食は、初めての方か6か月以上休んでいる方向けの「2週間おためしセット」（10日分・1日1食）が3,700〜6,300円（税込）で、11月16日週お届け分まで（最終注文締切11月11日）です。1世帯1回限り・他の割引と併用不可・3週目以降は通常価格です（いずれも2026年11月1日公式で確認）。",
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
          <Link href="/articles/#hikaku" className="text-foreground/70 hover:text-accent transition-colors">比較・料金データ</Link>
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
    { id: "summary-top", label: "調理したいかどうかで選ぶ" },
    { id: "overview", label: "ヨシケイとワタミの宅食の基本" },
    { id: "houshiki", label: "宅配方式の違い" },
    { id: "menu", label: "メニュー・コースタイプの違い" },
    { id: "ryoukin", label: "料金・お試し・栄養値（公式で確認）" },
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
    dateModified: "2026-11-01T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "比較・料金データ" },
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
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-compare.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-compare-m.webp)" }}>
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
            <time dateTime="2026-11-01">更新: 2026年11月1日（料金・お試し・配送・栄養値を公式で確認）</time>
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年11月1日時点の各社公式情報に基づき記述</strong>しています。料金・キャンペーンは変動するため、最新は<a href="https://www.yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ヨシケイ公式サイト</a>・<a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ワタミの宅食公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「ヨシケイとワタミの宅食、どっちがいいの？」——同じ宅食サービスでも、この2社は<strong>そもそものスタイルが大きく違います</strong>。
          </p>
          <p className="mb-3">
            概要としては、ヨシケイは<strong>食材・ミールキットが届いて自分で調理する</strong>コースが中心(単品・冷凍弁当もあり)、ワタミの宅食は<strong>調理済みのおかず・弁当が届く</strong>スタイルです。
          </p>
          <p>
            この記事では、宅配方式・メニュー・料金・向いている人の観点で両者を比較します。料金・お試し・配送・栄養値は<strong>2026年11月1日に各社公式サイトで確認</strong>したものです。地域や週で変わるため、申し込み前に公式サイトでもご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">調理したいかどうかで選ぶ</SectionHeading>
        <ServiceCaptureGrid ids={["yoshikei", "watami"]} />{/* svc-cap-202610 */}

        <p className="text-sm mb-6 leading-relaxed">
          ヨシケイとワタミの宅食を選ぶときの最大の分かれ目は、<strong>「自分で調理したいか/したくないか」</strong>です。ここがはっきりすると、迷わず選べます。
        </p>

        <ComparisonTable
          headers={["ご希望", "向いているサービス"]}
          rows={[
            ["食材は届けてほしいが調理は自分でしたい", "ヨシケイ(ミールキット系)"],
            ["できるだけ調理したくない／温めるだけがいい", "ワタミの宅食(調理済みおかず)"],
            ["献立を考える手間だけ省きたい", "ヨシケイ(ミールキット系)"],
            ["高齢の家族に手渡しで届けてほしい", "ワタミの宅食(手渡しが基本・宅配エリア内)"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の要点</p>
          <ul className="list-disc list-inside space-y-1">
            <li>ヨシケイは<strong>ミールキット・食材宅配が中心</strong>(単品・冷凍弁当もあり)</li>
            <li>ワタミの宅食は<strong>調理済みのおかず・弁当が中心</strong></li>
            <li>「調理したいか」で選ぶのが一番わかりやすい</li>
            <li>料金・お試しは<strong>地域・週で変わる</strong>ため、申し込み前に公式でも確認</li>
          </ul>
        </div>

        {/* ===== 基本 ===== */}
        <SectionHeading id="overview">ヨシケイとワタミの宅食の基本</SectionHeading>

        <SubHeading>ヨシケイとは</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ヨシケイは、<strong>食材とレシピをセットで届けるミールキット(料理キット)を中心に展開する宅配サービス</strong>です。献立を考える手間や買い物の手間を省きつつ、自分で調理する楽しさを残せるのが特徴です。お試し5daysで選べるコースは、時短メニュー4つ（カット済み食材で約10〜15分の「カットミール」、有名店・シェフ監修の「ファンミール」、電子レンジ・湯煎が中心で1人用もある「タイムリーミール」、手作り1品＋お惣菜1品の「クイックダイニング」）と、手作りメニュー3つ（「スマイリーミール」「スタンダードミール」「バランスミール」）です。ミールキットのほかに単品・冷凍弁当もあります（2026年11月1日公式で確認。一部コースは取り扱いのない地域があります）。
        </p>

        <SubHeading>ワタミの宅食とは</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食は、<strong>調理済みのおかず・弁当を届ける宅食サービス</strong>です。専任の管理栄養士が塩分やカロリーに配慮して設計した日替わりの献立で、冷蔵で届き、電子レンジで温めて食べます。宅配エリア内では、地域に住む「まごころスタッフ」が決まった時間帯に手渡しを基本に届けます（2026年11月1日公式で確認）。冷凍のお惣菜を宅配便で届ける「ワタミの宅食ダイレクト」と、食材を届ける「ワタミのミールキット」は別のサービスです。この記事の「ワタミの宅食」は冷蔵のお弁当・お惣菜を指します。
        </p>

        {/* ===== 宅配方式 ===== */}
        <SectionHeading id="houshiki">宅配方式の違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          配送のスタイルにも違いがあります。ライフスタイルに合うかどうかは、ここも重要なポイントです。
        </p>

        <ComparisonTable
          headers={["項目", "ヨシケイ", "ワタミの宅食"]}
          rows={[
            ["届くもの", "食材・ミールキット中心(単品・冷凍弁当もあり)", "調理済みおかず・弁当中心"],
            ["調理の必要", "自分で調理するコースが中心", "基本は温めるだけ"],
            ["配送スタイル", "スマイルスタッフが毎日（月〜金）配達・置き配可", "まごころスタッフが手渡しが基本（不在時は保冷ボックス）"],
            ["配達時間", "午前10時〜午後5時ごろの決まった時間帯（時間指定不可）", "午前中〜夕方5時の決まった時間帯（時間指定不可）"],
            ["留守のとき", "鍵付きあんしんBOXの貸し出しあり", "鍵付き安全ボックスを無料で貸し出し"],
            ["保存タイプ", "クールBOXに食材と保冷剤を入れて届く（冷蔵）", "冷蔵（当日夜〜翌日午後3時までに食べる）"],
            ["配達料", "無料（入会金・年会費もなし）", "商品価格に含む（入会金・年会費なし）"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※2026年11月1日に各社公式サイト（ヨシケイ「お試し5days」・よくあるご質問、ワタミの宅食「ご注文〜回収まで」・よくある質問）で確認しました。どちらも配達できない地域があります。冷凍のワタミの宅食ダイレクトは冷凍宅配便（佐川急便）で届き、手渡しのみ・送料は本州・四国・九州990円、北海道1,320円、沖縄2,420円です（同日公式で確認）。
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
            ["時短コース", "時短メニュー4コース（カット済み・レンジ調理など）", "そもそも調理不要が中心"],
            ["向く食シーン", "家族の夕食づくりなど", "手軽な昼食・夕食、高齢者の食事など"],
          ]}
        />

        {/* ===== 料金 ===== */}
        <SectionHeading id="ryoukin">料金・お試し・栄養値（公式で確認）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          2026年11月1日に各社公式サイトで確認した料金・お試し・栄養値です。ヨシケイは地域・注文週で、ワタミの宅食はお届け先で価格が変わるため、<strong>申し込み画面の金額</strong>もご確認ください。
        </p>

        <ComparisonTable
          headers={["項目", "ヨシケイ", "ワタミの宅食（お弁当・お惣菜）"]}
          rows={[
            ["通常価格", "2人用5日分（10食）6,900〜9,000円程度（お試し5days対象コースの通常価格）", "5日間コース 2,350〜3,950円（1食470〜790円・税込）"],
            ["お試し", "お試し5days：通常価格の約30〜50%OFF・1人1食約280〜670円程度（税込）", "2週間おためしセット（10日分）：3,700〜6,300円（税込）・11月16日週お届け分まで"],
            ["お試しの対象", "ヨシケイを初めて利用する方", "初めての方、または6か月以上利用を休んでいる方（1世帯1回限り）"],
            ["申し込み・締切", "キャンセルは配達日の前週水曜17時まで", "毎週水曜が翌週分のご注文確定日"],
            ["栄養値の例", "バランスミール：1食400kcal以下・週平均の食塩相当量3.2g以下", "まごころおかず：熱量400kcal基準・食塩相当量3.0g以下・たんぱく質15g基準／まごころ手鞠：250kcal基準・食塩相当量2.0g以下"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※出典：ヨシケイ「お試し5days」（時短メニュー・手作りメニュー）、ワタミの宅食「お弁当・お惣菜」「2週間おためしセット」、各商品ページ（いずれも2026年11月1日確認）。ワタミの宅食の価格はおかずのみのコースを含み、「まごころおかず」「まごころ手鞠」はごはんを別に用意します（公式では、ごはん約150gと合わせて約650kcal・約500kcal）。栄養値は1食あたり・5日間コース平均などの公式の基準値です。比較の際は、次の点も確認してください。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>1食(1人前)あたりの目安価格</li>
          <li>注文する日数・食数による単価の変化</li>
          <li>配送料・地域による違い</li>
          <li>初回お試し・キャンペーンの有無</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">料金は時期・地域で変動します</p>
          <p>上の金額は2026年11月1日の公式表示です。<strong>実際の金額は申し込み画面の表示</strong>でご確認ください。同じ「宅食」でも、調理の有無によって手間や満足ポイントが異なる点も踏まえて比較することをおすすめします。</p>
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
          <li>まごころスタッフによる手渡し配送（宅配エリア内）を希望する</li>
        </ul>

        <SubHeading>注意したい人</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          調理する時間がまったく取れない人にはヨシケイのミールキット系は負担になることがあります。逆に、自炊が好きで作る楽しみを大事にしたい人には、調理済みおかず中心のワタミの宅食は物足りなく感じる場合があります。どちらも<strong>対応地域が限られる</strong>ことがあるため、まずは自宅が配送エリアかをご確認ください。
        </p>

        {/* ===== 選び方 ===== */}
        <SectionHeading id="choose">タイプ別おすすめの選び方</SectionHeading>

        <ComparisonTable
          headers={["ライフスタイル", "おすすめ", "理由"]}
          rows={[
            ["共働きで夕食を時短したい", "ヨシケイ(時短コース)", "下ごしらえ済みで短時間調理"],
            ["料理が苦手・したくない", "ワタミの宅食", "調理不要のおかず中心"],
            ["高齢の親に届けたい", "ワタミの宅食", "手渡しが基本（宅配エリア内）+調理不要"],
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
            料金・お試し・対応地域は<strong>時期や地域で変わります</strong>。本記事の金額は2026年11月1日に公式サイトで確認したものです。
          </p>
          <p>
            迷ったら、まずは少ない日数・食数のお試しで、味・量・配送の使い勝手を比べてみるのがおすすめです。最新・正確な情報は、必ず各公式サイトでご確認ください。
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
          <p className="font-bold mb-2">関連記事</p>
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
