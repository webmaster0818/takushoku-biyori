import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "冷凍の宅配弁当は栄養バランス・添加物が心配？正しい見方と上手な使い方";
const ARTICLE_DESCRIPTION =
  "冷凍の宅配弁当は栄養が落ちる・添加物が心配と思われがちですが、誤解も多いのが実情です。冷凍保存と栄養の関係、栄養成分表示(PFC・塩分・カロリー)の見方、添加物との付き合い方、上手に使うコツを中立・正確に解説します。具体的な成分値は各商品の栄養成分表示でご確認ください。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/reitou-bento-eiyou-baransu/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "冷凍 宅配弁当 栄養, 冷凍弁当 添加物, 宅配弁当 栄養バランス, 冷凍 栄養 落ちる, 栄養成分表示 見方, PFCバランス, 宅配弁当 塩分, 冷凍弁当 健康",
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
    question: "冷凍すると栄養は落ちるの？",
    answer:
      "「冷凍＝栄養が大きく失われる」というのは多くの場合、誤解です。たんぱく質・脂質・炭水化物といった主要な栄養素は冷凍でほとんど変化しません。一部のビタミン(熱や水に弱いビタミンC、葉酸など)は調理や保存の過程で減ることがありますが、これは冷凍に限った話ではなく、常温・冷蔵での時間経過や加熱調理でも起こります。むしろ急速冷凍は、調理直後の状態に近いタイミングで栄養や鮮度を閉じ込められるため、長期保存の手段としては理にかなっています。",
  },
  {
    question: "栄養成分表示はどこを見ればいい？",
    answer:
      "まずはエネルギー(kcal)、たんぱく質、脂質、炭水化物(糖質・食物繊維)、食塩相当量の5項目を確認しましょう。目的に応じて見る順番を変えると分かりやすくなります。たとえば体重管理ならカロリーと脂質、筋肉量の維持ならたんぱく質、塩分が気になるなら食塩相当量、というように。表示は「1食(1包装)あたり」か「100gあたり」かで数値の意味が変わるため、どちらの基準かも必ず確認してください。具体的な数値は各商品の栄養成分表示でご確認ください。",
  },
  {
    question: "塩分はどのくらいが目安？",
    answer:
      "食塩の摂取目安は、厚生労働省「日本人の食事摂取基準(2020年版)」で成人男性7.5g未満／成人女性6.5g未満(1日)とされています。高血圧などで医師から指導を受けている場合は、より厳しい目標が示されることもあります。宅配弁当を1食として捉え、1日の合計が目安の範囲に収まるよう、他の食事とのバランスで考えるのが現実的です。減塩タイプを用意しているサービスもあるため、塩分が気になる方は食塩相当量の表示を比較して選ぶとよいでしょう。",
  },
  {
    question: "添加物が入っていると体に悪いの？",
    answer:
      "食品添加物は、日本では食品安全委員会の評価を経て厚生労働省が使用を認めたものだけが、品目ごとに使用基準(使ってよい食品・上限量)を定めて使われています。基準の範囲内であれば、通常の食生活で健康に影響が出ないように設計されています。「無添加だから安全／添加物入りだから危険」と単純に二分できるものではありません。気になる場合は原材料名(食品添加物は『／』以降にまとめて表示)を確認し、無添加・保存料不使用をうたう商品を選ぶこともできます。特定の成分の健康影響が心配な方は、かかりつけ医や管理栄養士に相談してください。",
  },
  {
    question: "冷凍の宅配弁当だけで栄養は足りる？",
    answer:
      "1食を栄養バランスに配慮して設計している商品が多く、忙しい日の食事を整える手段としては有効です。ただし、どんな食事でも「これだけ食べていれば完璧」というものはありません。野菜・果物・乳製品・主食量などは生活全体で調整し、水分や食物繊維も意識すると安心です。持病がある方、妊娠中・授乳中の方、栄養指導を受けている方は、自己判断せず医師・管理栄養士の助言に沿って利用してください。本記事は一般的な情報提供であり、診断・治療を目的としたものではありません。",
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
          <span className="text-foreground/70">知識・コラム</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">冷凍宅配弁当の栄養バランス</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：正しく選べば心配しすぎなくてよい" },
    { id: "reitou-eiyou", label: "「冷凍＝栄養が落ちる」は本当か" },
    { id: "hyouji", label: "栄養成分表示の見方（PFC・塩分・カロリー）" },
    { id: "tenkabutsu", label: "添加物との付き合い方" },
    { id: "kotsu", label: "上手に使うコツ" },
    { id: "erabikata", label: "目的別の選び方" },
    { id: "chuui", label: "注意したい点・向かない人" },
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

export default function ReitouBentoEiyouBaransuPage() {
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
      { "@type": "ListItem", position: 2, name: "知識・コラム" },
      { "@type": "ListItem", position: 3, name: "冷凍宅配弁当の栄養バランス" },
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
            知識・コラム
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。本記事は一般的な栄養に関する情報提供を目的としており、特定商品の効果や健康効果を保証・断定するものではありません。<strong>具体的な栄養成分値は各商品の栄養成分表示</strong>を、健康上の不安がある場合は医師・管理栄養士にご相談ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「冷凍の宅配弁当って、栄養が落ちていそう」「添加物がたくさん入っていそうで心配」——そんなイメージを持つ人は少なくありません。
          </p>
          <p className="mb-3">
            結論から言うと、その多くは<strong>誤解や思い込みが含まれた不安</strong>です。一方で、塩分やカロリーなど「自分で見ておくべきポイント」も確かにあります。
          </p>
          <p>
            この記事では、冷凍と栄養の関係、栄養成分表示(PFC・塩分・カロリー)の見方、添加物との付き合い方を中立・正確に整理します。特定商品の成分は断定せず、<strong>各商品の栄養成分表示で確認する</strong>視点を持てるよう解説します。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：正しく選べば心配しすぎなくてよい</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍の宅配弁当に対する不安は、<strong>「冷凍＝栄養が落ちる」「添加物＝危険」という思い込み</strong>が大きな割合を占めています。実際には、押さえるべきポイントを知っておけば、過度に心配する必要はありません。
        </p>

        <ComparisonTable
          headers={["よくある不安", "正しい見方"]}
          rows={[
            ["冷凍だと栄養が大きく失われる", "主要栄養素はほぼ変化しない。一部ビタミンの減少は冷凍特有ではない"],
            ["添加物が入っていて危険", "国の基準内で使用。無添加表示の商品を選ぶこともできる"],
            ["塩分・カロリーが高そう", "商品差が大きいので栄養成分表示を比較して選ぶ"],
            ["手軽な分だけ栄養が劣る", "1食を栄養設計した商品も多い。生活全体のバランスが大事"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>冷凍で<strong>たんぱく質・脂質・炭水化物はほぼ減らない</strong></li>
            <li>添加物は<strong>国の基準内で使用</strong>され、表示で確認できる</li>
            <li>見るべきは<strong>カロリー・PFC・食塩相当量</strong></li>
            <li>不安より<strong>「自分で表示を読む力」</strong>を持つのが近道</li>
          </ul>
        </div>

        {/* ===== 冷凍と栄養 ===== */}
        <SectionHeading id="reitou-eiyou">「冷凍＝栄養が落ちる」は本当か</SectionHeading>

        <SubHeading>主要な栄養素は冷凍でほとんど変わらない</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          三大栄養素である<strong>たんぱく質・脂質・炭水化物は、冷凍しても基本的にほとんど変化しません</strong>。冷凍は微生物の活動や酸化・劣化の進行を抑えるための保存方法であり、栄養そのものを「破壊」するわけではないからです。とくに調理直後に急速冷凍する手法は、できたてに近い状態で品質を保ちやすいとされています。
        </p>

        <SubHeading>減ることがあるのは一部のビタミン</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          注意したいのは、<strong>熱や水、光、時間に弱い一部のビタミン</strong>(ビタミンC、葉酸など水溶性のもの)です。これらは加熱調理や下処理、長期保存の過程で減ることがあります。ただし、これは<strong>冷凍に限った現象ではなく</strong>、常温・冷蔵で時間が経った食材や、家庭での加熱調理でも同様に起こります。「冷凍だから栄養が劣る」という単純な図式は成り立ちません。
        </p>

        <ComparisonTable
          headers={["栄養素", "冷凍による影響の傾向"]}
          rows={[
            ["たんぱく質", "ほとんど変化しない"],
            ["脂質", "ほとんど変化しない（長期は酸化に注意）"],
            ["炭水化物", "ほとんど変化しない"],
            ["ビタミンC・葉酸など", "調理・保存の過程で減ることがある（冷凍特有ではない）"],
            ["ミネラル", "基本的に安定している"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※上記は一般的な傾向です。実際の含有量は食材・調理法・商品によって異なります。気になる栄養素がある場合は、各商品の栄養成分表示を確認してください。
        </p>

        {/* ===== 表示の見方 ===== */}
        <SectionHeading id="hyouji">栄養成分表示の見方（PFC・塩分・カロリー）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          不安を減らす一番の方法は、<strong>自分で栄養成分表示を読めるようになること</strong>です。難しく考える必要はなく、見るべきは次の5項目です。
        </p>

        <SubHeading>まず見る5項目</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li><strong>エネルギー(kcal)</strong>：1食あたりのカロリー。体重管理の基本指標</li>
          <li><strong>たんぱく質(P)</strong>：筋肉・体づくりに関わる。高齢者は不足に注意</li>
          <li><strong>脂質(F)</strong>：エネルギー源。摂りすぎはカロリー過多につながる</li>
          <li><strong>炭水化物(C)</strong>：糖質＋食物繊維。糖質制限中は内訳を確認</li>
          <li><strong>食塩相当量</strong>：塩分の指標。1日合計でバランスを見る</li>
        </ul>

        <SubHeading>PFCバランスとは</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          PFCとは、たんぱく質(Protein)・脂質(Fat)・炭水化物(Carbohydrate)の頭文字をとった言葉で、この3つのエネルギー比率を「PFCバランス」と呼びます。厚生労働省の食事摂取基準では、エネルギー比率の目安として<strong>たんぱく質13〜20%、脂質20〜30%、炭水化物50〜65%</strong>程度(成人の例)が示されています。目的(減量・筋力維持・糖質制限など)によって意識する比率は変わるため、自分の目的に合った商品を選ぶのがコツです。
        </p>

        <SubHeading>塩分・カロリーの目安</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          食塩相当量の1日の目安は、食事摂取基準(2020年版)で<strong>成人男性7.5g未満／成人女性6.5g未満</strong>とされています。1食の宅配弁当をこの枠のなかに位置づけ、ほかの食事と合わせて1日合計で考えましょう。カロリーは「1食あたり」か「100gあたり」かで意味が変わるため、<strong>どちらを基準にした数値か</strong>を必ず確認してください。減塩・低カロリーをうたうコースを用意しているサービスもあります。
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">商品ごとの数値は断定しません</p>
          <p>当サイトでは正確性を優先し、特定商品のカロリー・塩分・PFCの数値を断定しません。<strong>最新・正確な値は各商品の栄養成分表示や公式サイト</strong>でご確認ください。減塩・低糖質などの基準値も、サービスによって定義が異なります。</p>
        </div>

        {/* ===== 添加物 ===== */}
        <SectionHeading id="tenkabutsu">添加物との付き合い方</SectionHeading>

        <SubHeading>添加物は基準内で使われている</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          日本で使用される食品添加物は、<strong>食品安全委員会による安全性評価を経て、厚生労働省が使用を認めたもの</strong>に限られます。品目ごとに「どの食品に、どのくらいまで使ってよいか」という使用基準が定められており、その範囲内であれば通常の食生活で健康に影響が出ないように設計されています。「添加物が入っている＝危険」と単純に決めつけられるものではありません。
        </p>

        <SubHeading>気になるなら原材料名を見る</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          それでも気になる場合は、<strong>原材料名の表示</strong>を確認しましょう。原材料は使用量の多い順に書かれ、<strong>食品添加物は「／(スラッシュ)」以降にまとめて表示</strong>されるのが一般的です。保存料・着色料などをできるだけ避けたい人は、「保存料不使用」「無添加」をうたう商品を選ぶこともできます。なお「無添加」の定義はメーカーによって異なるため、何が不使用なのかを表示で確認するのが確実です。
        </p>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">添加物を冷静に見るポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li>国の基準内で使われているかが前提（市販品は基準内）</li>
            <li>「無添加」の中身は商品ごとに違う → 表示で確認</li>
            <li>添加物の有無だけでなく、栄養全体のバランスも見る</li>
            <li>特定成分が心配な人は医師・管理栄養士に相談</li>
          </ul>
        </div>

        {/* ===== 上手に使うコツ ===== */}
        <SectionHeading id="kotsu">上手に使うコツ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍の宅配弁当は、知識を持って使えば日々の食事を支える心強い選択肢になります。上手に活用するためのコツを整理します。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li><strong>1日合計で考える</strong>：1食の塩分・カロリーは、他の食事と合わせて調整する</li>
          <li><strong>不足しがちな要素を足す</strong>：野菜・果物・乳製品・水分・食物繊維を意識する</li>
          <li><strong>目的に合うコースを選ぶ</strong>：減量・筋力維持・減塩など、目的別コースを活用</li>
          <li><strong>表示の基準を確認</strong>：「1食あたり」か「100gあたり」かで数値の意味が変わる</li>
          <li><strong>表示どおりに加熱する</strong>：加熱不足は安全面でも食感・風味の面でも避ける</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          なお「冷凍弁当はおいしくない」という不安については、解凍・加熱方法や商品選びで印象が大きく変わります。味の観点は<Link href="/articles/reitou-bento-mazui/" className="text-accent underline">冷凍の宅配弁当はまずい？の検証記事</Link>でも整理しています。
        </p>

        {/* ===== 目的別の選び方 ===== */}
        <SectionHeading id="erabikata">目的別の選び方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「栄養バランス」と一口に言っても、重視すべき点は目的によって変わります。代表的なケースを整理しました。
        </p>

        <ComparisonTable
          headers={["目的", "特に見たい項目", "考え方"]}
          rows={[
            ["体重を管理したい", "カロリー・脂質", "1食のkcalを把握し、1日合計で調整"],
            ["糖質を抑えたい", "炭水化物（糖質）", "糖質量・糖質オフ系コースを確認"],
            ["筋肉量を保ちたい", "たんぱく質", "高たんぱく設計の商品を選ぶ"],
            ["塩分を控えたい", "食塩相当量", "減塩コース・表示の塩分を比較"],
            ["高齢の家族の食事", "たんぱく質・やわらかさ", "栄養と食べやすさの両立を確認"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          目的別の具体的なサービス選びについては、用途ごとの解説記事も参考になります。ダイエット目的なら<Link href="/articles/diet-osusume/" className="text-accent underline">ダイエット向け宅配弁当のおすすめ</Link>、糖質を抑えたいなら<Link href="/articles/toushitsu-seigen-osusume/" className="text-accent underline">糖質制限向け宅配弁当のおすすめ</Link>、高齢の家族向けなら<Link href="/articles/koureisha-osusume/" className="text-accent underline">高齢者向け宅配弁当のおすすめ</Link>を合わせてご覧ください。
        </p>

        {/* ===== 注意点 ===== */}
        <SectionHeading id="chuui">注意したい点・向かない人</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          メリットが多い一方で、注意しておきたい点もあります。次のような場合は、利用前に確認・相談しておくと安心です。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li><strong>持病・治療中の方</strong>：腎臓病・糖尿病などで食事制限がある場合は、医師・管理栄養士の指導に沿って選ぶ</li>
          <li><strong>妊娠中・授乳中の方</strong>：必要な栄養が増えるため、不足しないよう全体で調整する</li>
          <li><strong>アレルギーがある方</strong>：原材料名・アレルゲン表示を必ず確認する</li>
          <li><strong>「これだけ」で済ませがちな方</strong>：1商品に頼りきらず、生活全体で栄養を整える</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          本記事は一般的な情報提供であり、診断・治療・特定の健康効果を約束するものではありません。<strong>健康上の不安がある場合は、自己判断せず専門家に相談</strong>してください。
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
        <SectionHeading id="summary">まとめ：不安より「表示を読む力」を</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            冷凍の宅配弁当に対する「栄養が落ちる」「添加物が心配」という不安は、<strong>多くが誤解や思い込みに基づくもの</strong>です。三大栄養素は冷凍でほとんど変化せず、添加物も国の基準内で使われています。
          </p>
          <p className="mb-3">
            大切なのは、漠然と不安に思うことより、<strong>カロリー・PFC・食塩相当量といった栄養成分表示を自分で読み、目的に合った商品を選ぶ力</strong>を持つことです。1食の数値は1日合計のなかで捉え、不足しがちな野菜や水分を補えば、忙しい毎日の食事をしっかり支えてくれます。
          </p>
          <p>
            具体的な成分値はサービス・商品ごとに異なります。当サイトでは正確性を優先し、数値は断定しません。<strong>最新・正確な情報は各商品の栄養成分表示や公式サイトでご確認ください。</strong>
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ダイエット向け宅配弁当のおすすめ
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            糖質制限向け宅配弁当のおすすめ
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            高齢者向け宅配弁当のおすすめ
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/reitou-bento-mazui/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            冷凍の宅配弁当はまずい？
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
