import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "共働き世帯の平日夕食に宅配弁当を使う：選び方とラクになる運用術【2026年版】";
const ARTICLE_DESCRIPTION =
  "共働きで平日の夕食づくりがしんどい——そんな世帯に宅配弁当を取り入れるコツを解説。時短・作り置き不要・冷凍ストック・置き配・子どもと食べる場合の注意まで、実用視点で選び方と運用方法を整理します。料金・キャンペーンは変動するため、最新は各公式サイトでご確認ください。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/kyoudoki-yushoku-takuhai/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "共働き 夕食 宅配弁当, 共働き 平日 夕食, 宅配弁当 時短, 共働き 作り置き 不要, 冷凍 宅配弁当 ストック, 置き配 宅配弁当, 子ども 宅配弁当, 宅食 共働き",
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
    question: "共働きの夕食に宅配弁当を使うと、毎週どれくらいラクになる？",
    answer:
      "感じ方には個人差がありますが、宅配弁当を取り入れると「献立を考える」「買い物に行く」「調理する」「後片付けをする」という一連の負担を大きく圧縮できます。特に平日の中で疲れがたまりやすい曜日だけ宅配弁当に置き換えるだけでも、夕方以降の時間と気持ちに余裕が生まれやすくなります。まずは週2〜3日など無理のない頻度から始め、自分たちの生活リズムに合う使い方を探すのがおすすめです。",
  },
  {
    question: "冷凍と冷蔵（常温）の宅配弁当、共働きにはどっちが向いている？",
    answer:
      "受け取りや消費のタイミングが読みにくい共働き世帯には、まとめて届いて好きな日に温めて食べられる冷凍タイプがストックしやすく扱いやすい傾向があります。一方、毎日決まった時間に受け取れる体制があり、できるだけ作りたての食感に近い食事をとりたい場合は冷蔵(日替わり)タイプも候補になります。冷凍庫の空き容量、受け取り時間の確保しやすさを踏まえて選びましょう。対応エリアやお届け方法は各公式サイトでご確認ください。",
  },
  {
    question: "受け取れない時間に届く場合はどうすればいい？",
    answer:
      "サービスによっては、宅配ボックスや玄関前への置き配に対応している場合があります。冷凍タイプは宅配便で届くものが多く、再配達や日時指定を活用できることもあります。冷蔵・常温タイプは食品の性質上、受け取り方法に制約があることもあるため、置き配や留め置きの可否は事前に確認が必要です。受け取り方法の詳細は時期・地域・サービスで異なるため、最新は各公式サイトでご確認ください。",
  },
  {
    question: "子どもと一緒に食べても大丈夫？",
    answer:
      "大人向けの宅配弁当は、味付けの濃さ・量・食材(辛味や硬さなど)が小さな子どもには合わないことがあります。取り分ける、薄味のおかずを選ぶ、子ども用に別の主食を用意するなどの工夫をすると食べやすくなります。アレルギー対応の有無や原材料表示は必ず確認し、必要に応じてかかりつけ医に相談してください。家族の人数や好みに合わせ、宅配弁当はあくまで「夕食の一部をラクにする手段」と位置づけると運用しやすくなります。",
  },
  {
    question: "毎日頼まないと損？必要な週だけ使ってもいい？",
    answer:
      "宅配弁当は必ずしも毎日利用する必要はありません。サービスによっては、頼まない週をスキップしたり、配送頻度を調整したりできる場合があります。残業が多い週や体調がすぐれない時期だけ活用し、余裕がある週は自炊に戻す、といった柔軟な使い方も可能です。スキップや停止のルールはサービスごとに異なるため、申し込み前に条件を確認しておくと安心です。",
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
          <span className="text-foreground/70">使い方・運用</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">共働き世帯の平日夕食</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：平日全部ではなく「しんどい曜日」から置き換える" },
    { id: "why", label: "共働きの平日夕食が大変な理由" },
    { id: "merit", label: "宅配弁当で減らせる4つの手間" },
    { id: "type", label: "冷凍・冷蔵どっち？タイプの選び方" },
    { id: "okihai", label: "受け取り・置き配の工夫" },
    { id: "kosodate", label: "子どもと食べる場合の注意点" },
    { id: "operation", label: "ラクになる運用のコツ" },
    { id: "ryoukin", label: "料金の考え方（具体額は公式で確認）" },
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

export default function KyoudokiYushokuTakuhaiPage() {
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
      { "@type": "ListItem", position: 2, name: "使い方・運用" },
      { "@type": "ListItem", position: 3, name: "共働き世帯の平日夕食" },
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
            使い方・運用
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。本記事は宅配弁当の一般的な選び方・運用方法を解説するものです。<strong>料金・キャンペーン・配送方法・対応エリアは時期や地域で変動</strong>するため、具体的な内容は断定せず、最新・正確な情報は各サービスの公式サイトでご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「仕事から帰ってきて、これから夕食づくり……正直もう限界」——共働き世帯にとって、<strong>平日の夕食は一日の中でもっとも負担が集中する家事</strong>のひとつです。
          </p>
          <p className="mb-3">
            買い物・献立決め・調理・後片付けまでをこなすには、想像以上の時間とエネルギーが必要。だからこそ、<strong>宅配弁当をうまく取り入れて「平日の夕食を仕組みでラクにする」</strong>という選択が注目されています。
          </p>
          <p>
            この記事では、共働き世帯が宅配弁当を平日夕食に活用するための<strong>選び方・受け取りの工夫・子どもと食べる場合の注意・ラクになる運用</strong>を、実用目線で整理します。料金は変動するため断定せず、最新は各公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：平日全部ではなく「しんどい曜日」から置き換える</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          共働き世帯が宅配弁当を導入するときのコツは、いきなり毎日に切り替えるのではなく、<strong>「特にしんどい曜日」だけを宅配弁当に置き換える</strong>ことです。すべてを完璧にやろうとせず、負担の山を平らにするイメージで取り入れると失敗しにくくなります。
        </p>

        <ComparisonTable
          headers={["あなたの状況", "おすすめの取り入れ方"]}
          rows={[
            ["残業や保育園のお迎えで疲れる曜日がある", "その曜日だけ宅配弁当に固定する"],
            ["受け取り時間が読めない", "まとめて届く冷凍タイプをストックする"],
            ["とにかく調理も後片付けも減らしたい", "温めるだけ・容器のまま食べられるタイプ"],
            ["子どもの食事も同時に整えたい", "薄味おかず＋家庭で主食や副菜を補う"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>平日全部ではなく「しんどい曜日」から</strong>始めると続けやすい</li>
            <li>受け取り時間が読めないなら<strong>冷凍ストック型</strong>が扱いやすい</li>
            <li><strong>置き配・宅配ボックス</strong>の活用で受け取りストレスを減らす</li>
            <li>子どもと食べるなら<strong>味付け・量・アレルギー表示</strong>を要確認</li>
            <li>料金・配送・エリアは<strong>時期で変動</strong>するため公式で要確認</li>
          </ul>
        </div>

        {/* ===== 理由 ===== */}
        <SectionHeading id="why">共働きの平日夕食が大変な理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          そもそも、なぜ共働きの平日夕食はこれほど負担になるのでしょうか。原因を分解すると、宅配弁当でどこをラクにできるかが見えてきます。
        </p>

        <SubHeading>「調理」だけが家事ではない</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          夕食づくりは、調理だけを指すわけではありません。実際には<strong>「今日何を作るか考える」「足りない食材を買い足す」「下ごしらえ・調理する」「配膳する」「洗い物・片付けをする」</strong>という複数の工程の積み重ねです。仕事を終えた後にこれらをまとめてこなすのは、心身ともに負担が大きいものです。
        </p>

        <SubHeading>「決める」疲れが地味に重い</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          毎日の献立を考える「意思決定」も、見落とされがちな負担です。冷蔵庫の中身を確認し、栄養バランスや家族の好みを考えながらメニューを決める作業は、毎日続くと消耗につながります。宅配弁当は、この<strong>「決める手間」をまるごと肩代わり</strong>してくれる点でも価値があります。
        </p>

        {/* ===== メリット ===== */}
        <SectionHeading id="merit">宅配弁当で減らせる4つの手間</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当を平日夕食に取り入れると、具体的に次のような手間を減らせます。
        </p>

        <ComparisonTable
          headers={["減らせる手間", "宅配弁当を使うとどうなるか"]}
          rows={[
            ["献立を考える", "届いたものを食べるだけで完結する"],
            ["買い物に行く", "玄関まで届くため買い出しが不要になる"],
            ["調理する", "温めるだけ・盛り付けるだけが中心になる"],
            ["後片付け", "容器のまま食べられるタイプは洗い物が減る"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          すべてを宅配弁当に置き換えなくても、<strong>「考える・買う・作る・片付ける」のうち複数を同時に削れる</strong>のが大きな魅力です。平日の貴重な時間を、子どもとの時間や休息に回しやすくなります。作り置きのために週末をつぶす必要がなくなる点も、共働き世帯には嬉しいポイントです。
        </p>

        {/* ===== タイプ ===== */}
        <SectionHeading id="type">冷凍・冷蔵どっち？タイプの選び方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当には大きく分けて、まとめて届いて好きな日に食べる<strong>冷凍タイプ</strong>と、日替わりで届く<strong>冷蔵・常温タイプ</strong>があります。共働き世帯の生活リズムに合うのはどちらかを整理しましょう。
        </p>

        <ComparisonTable
          headers={["観点", "冷凍タイプ", "冷蔵・常温タイプ"]}
          rows={[
            ["届き方", "まとめて宅配便で届くことが多い", "日替わりで届くことが多い"],
            ["受け取り", "日時指定・置き配を使いやすい", "受け取りに制約があることも"],
            ["ストック性", "高い(好きな日に温める)", "低い(基本はその日に消費)"],
            ["向く共働き世帯", "帰宅時間が不規則・読めない", "受け取り時間が安定している"],
          ]}
        />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">迷ったら「冷凍ストック型」が無難</p>
          <p>帰宅時間が読めない共働き世帯は、まとめて届いて<strong>食べたい日にレンジで温めるだけ</strong>の冷凍タイプが扱いやすい傾向があります。冷凍庫の空き容量を事前に確認しておくと、届いてから慌てずに済みます。各サービスの保存方法・容器サイズは公式サイトでご確認ください。</p>
        </div>

        <p className="text-sm mb-6 leading-relaxed">
          送料も判断材料になります。冷凍宅配は送料がかかるサービスもあれば、条件付きで送料がかからないサービスもあります。送料無料の選択肢を知りたい方は<Link href="/articles/souryou-muryou-reitou-bento/" className="text-accent underline">送料無料の冷凍宅配弁当のまとめ</Link>もあわせてご覧ください(条件は時期で変わるため最新は公式で確認)。
        </p>

        {/* ===== 受け取り ===== */}
        <SectionHeading id="okihai">受け取り・置き配の工夫</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          共働き世帯にとって、配送物の受け取りは意外と大きなハードルです。日中は家にいないことが多く、再配達のやり取りが負担になりがちです。
        </p>

        <SubHeading>置き配・宅配ボックスを活用する</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          サービスによっては、宅配ボックスや玄関前への<strong>置き配に対応</strong>している場合があります。冷凍タイプは宅配便で届くことが多く、日時指定や置き配指定を組み合わせると受け取りのストレスを減らせます。ただし、食品の性質上、置き配の可否や条件はサービス・地域によって異なります。詳しくは<Link href="/articles/okihai-taiou-takuhai-bento/" className="text-accent underline">置き配対応の宅配弁当の解説</Link>も参考にしてください。
        </p>

        <SubHeading>受け取り日時をコントロールする</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          休日にまとめて受け取れる冷凍タイプなら、平日の受け取りそのものを避けられます。配送曜日や時間帯を選べるサービスもあるため、<strong>自分たちが確実に受け取れるタイミングに合わせて設定</strong>しておくと運用が安定します。受け取り方法の詳細は時期・地域で変わるため、申し込み前に各公式サイトで確認しましょう。
        </p>

        {/* ===== 子育て ===== */}
        <SectionHeading id="kosodate">子どもと食べる場合の注意点</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          子どものいる共働き世帯では、宅配弁当を家族で食べる場面も多くなります。大人向けの宅配弁当をそのまま子どもに出す際は、いくつか気をつけたい点があります。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li><strong>味付けの濃さ</strong>：大人向けは塩分・味が濃いことがある。薄味おかずを選ぶ・取り分ける工夫を</li>
          <li><strong>量とサイズ</strong>：1食が大人基準のことが多い。子どもには取り分けや小分けを検討</li>
          <li><strong>食べにくい食材</strong>：辛味・硬さ・骨など、小さな子に向かない食材に注意</li>
          <li><strong>アレルギー表示</strong>：原材料・アレルゲン表示を必ず確認する</li>
          <li><strong>主食・副菜の補い</strong>：ごはんや汁物、野菜を家庭で足すとバランスが整いやすい</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">アレルギー・体調への配慮</p>
          <p>食物アレルギーがある場合は、原材料表示を必ず確認し、不安があればかかりつけ医に相談してください。宅配弁当は<strong>「夕食の一部をラクにする手段」</strong>と位置づけ、子どもの様子に合わせて柔軟に取り入れるのが安心です。</p>
        </div>

        {/* ===== 運用 ===== */}
        <SectionHeading id="operation">ラクになる運用のコツ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当は「導入して終わり」ではなく、生活に合わせて運用してこそラクになります。続けやすくするためのコツを紹介します。
        </p>

        <SubHeading>曜日を固定して「考えない」仕組みに</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          「水曜と金曜は宅配弁当の日」のように<strong>曜日を固定</strong>すると、その日は献立を考えなくて済みます。ルール化することで、毎日の意思決定の負担を減らせます。残業が多い曜日や、習い事で帰宅が遅くなる曜日に合わせると効果的です。
        </p>

        <SubHeading>冷凍ストックで「保険」をつくる</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍タイプを常に数食ストックしておくと、<strong>「今日はもう無理」という日</strong>の保険になります。体調がすぐれない日や急な残業の日に、冷凍庫を開ければ夕食が確保できる安心感は大きいものです。
        </p>

        <SubHeading>頼まない週はスキップする</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          余裕のある週は自炊に戻し、忙しい週だけ利用する——そんな柔軟な使い方も可能です。サービスによっては配送のスキップや停止ができます。スキップの手順や締め日はサービスごとに異なるため、<Link href="/articles/takuhai-skip/" className="text-accent underline">宅配弁当のスキップ方法の解説</Link>も参考に、申し込み前に条件を確認しておきましょう。
        </p>

        {/* ===== 料金 ===== */}
        <SectionHeading id="ryoukin">料金の考え方（具体額は公式で確認）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          料金はサービス・コース・食数・配送頻度・地域・キャンペーンによって変わるため、本記事では<strong>具体的な金額は断定しません</strong>。共働き世帯がコストを判断するときは、次のポイントを各公式サイトで確認すると失敗しにくいです。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>1食(1人前)あたりの目安価格</li>
          <li>注文する食数による単価の変化</li>
          <li>送料・地域による違い(冷凍は送料が乗ることも)</li>
          <li>初回お試し・キャンペーンの有無</li>
          <li>スキップ・停止のしやすさ(無駄な出費を避けられるか)</li>
        </ul>

        <div className="bg-cream rounded-xl p-5 mb-6 text-sm leading-relaxed">
          <p>外食やコンビニ・総菜と比べる際は、<strong>単純な金額だけでなく「削減できる時間と手間」も含めて</strong>判断すると納得感が出ます。当サイトでは正確性を優先し価格は断定しません。最新・正確な料金は各サービスの公式サイトでご確認ください。</p>
        </div>

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
        <SectionHeading id="summary">まとめ：完璧を目指さず「仕組み」でラクにする</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            共働き世帯が宅配弁当を平日夕食に取り入れるコツは、<strong>すべてを置き換えようとせず、しんどい曜日から仕組みでラクにする</strong>ことです。献立・買い物・調理・片付けという複数の手間を一度に削れるのが、宅配弁当の大きな価値です。
          </p>
          <p className="mb-3">
            帰宅時間が読めないなら<strong>冷凍ストック型＋置き配</strong>が扱いやすく、子どもと食べるなら<strong>味付け・量・アレルギー表示</strong>に配慮を。頼まない週はスキップして、無理なく続けられる形を探しましょう。
          </p>
          <p>
            料金・配送・対応エリアは<strong>時期や地域で変動</strong>します。当サイトでは正確性を優先し、価格は断定しません。最新・正確な情報は、必ず各サービスの公式サイトでご確認ください。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            一人暮らしにおすすめの宅配弁当
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/souryou-muryou-reitou-bento/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            送料無料の冷凍宅配弁当
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/okihai-taiou-takuhai-bento/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            置き配対応の宅配弁当
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/takuhai-skip/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            宅配弁当のスキップ方法
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
