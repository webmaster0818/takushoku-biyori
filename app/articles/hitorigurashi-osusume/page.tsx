import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5｜コスパ・味・栄養で徹底比較";
const ARTICLE_DESCRIPTION =
  "一人暮らしにおすすめの宅食・宅配弁当を目的別にランキング。nosh・三ツ星ファーム・ウェルネスダイニングなど人気5社を比較。女性向けダイエット食、男性向けボリューム食、シニア向けやわらか食も紹介。月額コストシミュレーション付き。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/hitorigurashi-osusume/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅食 一人暮らし おすすめ, 宅配弁当 一人暮らし, 宅食 一人暮らし ランキング, 宅配弁当 コスパ, 宅食 安い, 一人暮らし 食事, 冷凍弁当 おすすめ, 宅配弁当 ダイエット",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-15T00:00:00+09:00",
    modifiedTime: "2026-04-15T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "一人暮らしで冷凍庫が小さいのですが、宅配弁当は利用できますか？",
    answer:
      "一人暮らし用の小型冷蔵庫（冷凍庫30L前後）でも、6食分程度なら保管可能です。noshなら6食プランがあり、容器サイズも18×18×4.5cmとコンパクト。食宅便やまごころケア食はさらに容器が小さいので、冷凍庫の容量に不安がある方はこちらもおすすめです。配送頻度を1週間に1回にして少量ずつ受け取る方法もあります。",
  },
  {
    question: "宅配弁当だけで1日の栄養は足りますか？",
    answer:
      "宅配弁当（おかずのみ）は1食あたり300〜500kcal程度で、1日3食すべてを宅配弁当にすると栄養が偏る可能性があります。おすすめの使い方は「1日1〜2食を宅配弁当にして、残りは自炊やコンビニで補う」というスタイル。朝食に果物やヨーグルト、昼食にサラダを追加するなど、ビタミン・食物繊維・カルシウムを意識して補うと良いでしょう。",
  },
  {
    question: "一人暮らしで留守が多いのですが、受け取りは大丈夫ですか？",
    answer:
      "宅配弁当はヤマト運輸のクール宅急便で届くため、日時指定が可能です。不在の場合は不在票が入り、再配達を依頼できます。ただし、冷凍品なので宅配ボックスには入れてもらえません。確実に受け取れる日時を指定するか、コンビニ受け取り対応のサービス（一部のみ）を利用しましょう。平日不在の方は土日の午前中指定がおすすめです。",
  },
  {
    question: "宅配弁当は自炊より高くつきますか？",
    answer:
      "一人暮らしの自炊の食費は月2〜3万円が一般的。宅配弁当を週5回利用した場合の月額は約1.4〜1.8万円（nosh 10食プラン基準）で、これにご飯代（月2,000円程度）を加えても自炊とほぼ同額か少し安い水準です。さらに自炊の場合は食材を余らせるロスや調理時間のコストもあるため、時間対効果を考えると宅配弁当の方がコスパが良いケースも多いです。",
  },
  {
    question: "途中で解約やプラン変更はできますか？",
    answer:
      "今回紹介した5社はすべて最低継続回数の縛りがなく、1回だけの利用で解約可能です。解約金・違約金もかかりません。プラン変更（食数や配送頻度の変更）もマイページやアプリから簡単にできます（ウェルネスダイニングは電話のみ）。「まずは1回試してみて、合わなければ解約」という気軽な使い方ができるのが、最近の宅配弁当サービスの良いところです。",
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
          <span className="text-foreground/70">目的別ガイド</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">一人暮らしにおすすめの宅食</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "why", label: "一人暮らしに宅配弁当がおすすめな理由" },
    { id: "how-to-choose", label: "一人暮らし向け宅食の選び方5つのポイント" },
    { id: "ranking", label: "【総合ランキング】一人暮らしにおすすめの宅食TOP5" },
    { id: "women", label: "【女性向け】ダイエット・美容におすすめの宅食3選" },
    { id: "men", label: "【男性向け】ボリューム重視の宅食3選" },
    { id: "senior", label: "【シニア向け】やわらか食・制限食の宅食3選" },
    { id: "cost", label: "一人暮らしの宅食 月額コストシミュレーション" },
    { id: "vs-compare", label: "宅配弁当 vs コンビニ弁当 vs 自炊 コスト・栄養比較" },
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

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>
          &#9733;
        </span>
      ))}
    </span>
  );
}

function RankingCard({
  rank,
  name,
  tagline,
  color,
  features,
  price,
  shipping,
  pros,
  cons,
}: {
  rank: number;
  name: string;
  tagline: string;
  color: string;
  features: string[];
  price: string;
  shipping: string;
  pros: string[];
  cons: string[];
}) {
  const rankColors: Record<number, string> = {
    1: "bg-yellow-500",
    2: "bg-gray-400",
    3: "bg-amber-600",
    4: "bg-accent",
    5: "bg-accent",
  };
  return (
    <div className={`${color} rounded-xl p-6 mb-6 border border-warm-border`}>
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`${rankColors[rank] || "bg-accent"} text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center`}
        >
          {rank}
        </span>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-warm-gray">{tagline}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
        <div>
          <p className="font-medium mb-1">1食あたり: {price}</p>
          <p className="font-medium">送料: {shipping}</p>
        </div>
        <div>
          <ul className="space-y-1">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-1.5">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-medium text-accent mb-1">メリット</p>
          <ul className="space-y-1">
            {pros.map((p) => (
              <li key={p} className="leading-relaxed">{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium text-red-600 mb-1">デメリット</p>
          <ul className="space-y-1">
            {cons.map((c) => (
              <li key={c} className="leading-relaxed text-foreground/70">{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- Page Component ---------- */

export default function HitorigurashiOsusumePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-15T00:00:00+09:00",
    dateModified: "2026-04-15T00:00:00+09:00",
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "nosh（ナッシュ）",
        description:
          "1食599円〜。60種類以上のメニューから自由に選べる高コスパ宅配弁当。全メニュー糖質30g以下。アプリ対応。nosh club割引で最大16.55%OFF。",
        url: "https://nosh.jp/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "三ツ星ファーム",
        description:
          "プロの料理人監修のレストラン品質。化学調味料・合成着色料不使用。味のクオリティは冷凍宅配弁当業界トップクラス。",
        url: "https://mitsuboshifarm.jp/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "ウェルネスダイニング",
        description:
          "管理栄養士監修の7つの専門コース。糖質制限・塩分制限・たんぱく質調整・やわらか食対応。栄養相談無料。",
        url: "https://www.wellness-dining.com/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "まごころケア食",
        description:
          "1食あたり470円〜の圧倒的コスパ。全国送料無料。シニア一人暮らしにも安心の優しい味付け。",
        url: "https://magokoro-care-shoku.com/",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "食宅便",
        description:
          "日清医療食品が運営。管理栄養士監修の約160種類のメニュー。バランス重視のオールラウンダー。",
        url: "https://shokutakubin.com/",
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        {/* Title */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            目的別ガイド
          </span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-15">公開: 2026年4月15日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「一人暮らしの食事、毎日コンビニ弁当やカップ麺ばかり...」「自炊は面倒だけど栄養バランスは気になる」——そんな一人暮らしの食事問題を解決するのが<strong>宅食・宅配弁当サービス</strong>です。
          </p>
          <p className="mb-3">
            最近の宅配弁当は、1食500〜700円で栄養バランスの取れた食事がレンジで温めるだけで食べられます。食材の買い出し・調理・後片付けの手間がゼロ。一人暮らしの「食」の悩みをまるごと解決してくれます。
          </p>
          <p>
            この記事では、<strong>一人暮らし向けの宅食サービスを5つの評価基準で比較</strong>し、総合ランキングTOP5を発表。さらに<strong>女性向け・男性向け・シニア向け</strong>の目的別おすすめや、<strong>コンビニ弁当・自炊との月額コスト比較</strong>まで、一人暮らしの宅食選びに必要な情報をすべてまとめました。
          </p>
        </div>

        <TableOfContents />

        {/* ===== おすすめな理由 ===== */}
        <SectionHeading id="why">一人暮らしに宅配弁当がおすすめな理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          一人暮らしで宅配弁当を利用するメリットは、単に「楽だから」だけではありません。時間・お金・健康の3つの観点から、一人暮らしにこそ宅配弁当がおすすめな理由を解説します。
        </p>

        {[
          {
            icon: "&#9200;",
            title: "圧倒的な時短：調理0分、片付け1分",
            text: "宅配弁当は冷凍のまま電子レンジで4〜6分温めるだけ。買い物・下ごしらえ・調理・後片付けの時間がすべてゼロになります。自炊にかかる時間は1食あたり30〜60分。宅配弁当なら1日1食利用するだけでも、年間180〜360時間の時間を節約できます。仕事や趣味、自己投資に使える時間が増えるのは、一人暮らし最大のメリットです。容器はそのまま捨てられるので洗い物もほぼゼロです。",
          },
          {
            icon: "&#127860;",
            title: "栄養バランスが自動的に整う",
            text: "一人暮らしの自炊は「作れるもの」が偏りがちで、炭水化物や脂質が多くなりがち。宅配弁当は管理栄養士が設計したメニューなので、カロリー・糖質・塩分・たんぱく質・食物繊維のバランスが最適化されています。特にnoshは全メニュー糖質30g以下・塩分2.5g以下で設計されており、「何を選んでも健康的」という安心感があります。栄養素を自分で計算する必要がないので、意識しなくても健康的な食事が取れます。",
          },
          {
            icon: "&#128176;",
            title: "食費管理がしやすい（食材ロスなし）",
            text: "一人暮らしの自炊で最大の問題は「食材ロス」。キャベツ1玉、牛乳1パック、豆腐1丁——一人暮らしでは使い切れずに捨ててしまうことが多く、農林水産省の調査では一人暮らし世帯の食品ロスは年間約3〜5万円分と言われています。宅配弁当なら1食ずつ個包装で冷凍保存されているため、食材ロスはゼロ。食費が「1食◯◯円×食数」で計算できるので、月の食費が予測しやすく家計管理にも役立ちます。",
          },
          {
            icon: "&#10052;",
            title: "冷凍保存でいつでも食べられる",
            text: "冷凍宅配弁当の賞味期限は6ヶ月〜1年と長期保存が可能。帰宅が遅くなった日、体調が悪い日、「今日は何も作りたくない」日にも、冷凍庫を開けてレンジで温めるだけで食事が用意できます。一人暮らしは「今日の晩ご飯どうしよう」問題が毎日発生しますが、冷凍庫にストックがあるだけで精神的な余裕が生まれます。災害時の非常食としても機能する安心感もあります。",
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-xl" dangerouslySetInnerHTML={{ __html: item.icon }} />
            <div>
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 選び方 ===== */}
        <SectionHeading id="how-to-choose">一人暮らし向け宅食の選び方5つのポイント</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          宅食サービスは10社以上あり、それぞれ特徴が異なります。一人暮らしの方が宅食を選ぶ際に、特に重視すべき5つのポイントを解説します。
        </p>

        {[
          {
            num: 1,
            title: "1食あたりのコスト（送料込みで計算する）",
            text: "宅食を選ぶ際、まず見るべきは「1食あたりの実質コスト」です。食材費だけでなく送料も含めて計算しましょう。例えば、noshの10食プランは1食599円ですが、送料913円（関東）を含めると実質690円/食。一方、まごころケア食は1食470円で送料無料なので、送料込みでも470円/食。見かけの価格に惑わされず、「送料込み1食あたり」で比較することが重要です。一人暮らしの食費の目安は月3万円前後。宅配弁当を夕食に使う場合、1食700円以下なら月2.1万円（30日）で食費の大部分をカバーできます。",
          },
          {
            num: 2,
            title: "送料（地域差が大きいサービスに注意）",
            text: "宅配弁当の送料は、サービスによって大きく異なります。noshや三ツ星ファームは地域によって913円〜2,970円と差が大きく、北海道・沖縄在住だと送料だけで月5,000円以上になることも。一方、まごころケア食は全国送料無料、ウェルネスダイニングは定期便で送料385円と良心的。一人暮らしは支出管理が重要なので、送料は必ずチェックしましょう。",
          },
          {
            num: 3,
            title: "冷凍庫のサイズ（一人暮らし用冷蔵庫の限界を把握する）",
            text: "一人暮らし用の冷蔵庫は冷凍庫が30L前後のものが多く、宅配弁当を10食保管するのは厳しい場合があります。noshの容器は18×18×4.5cmで、10食分は冷凍庫の中段ほぼ1段分。まごころケア食や食宅便は容器がやや小さめで省スペース。「自分の冷凍庫に何食入るか」を事前に確認してからプランを選びましょう。6食プランにして配送頻度を上げる方法もあります。",
          },
          {
            num: 4,
            title: "メニューの自由度（飽きずに続けられるか）",
            text: "宅配弁当で最も多い解約理由は「飽きた」。一人暮らしで毎日利用するなら、メニューの豊富さと選択の自由度は非常に重要です。noshは60種類以上から自分で選べ、毎週新メニューが追加。三ツ星ファームも80種類以上。一方、ウェルネスダイニングやまごころケア食はコース制で、メニューを自分で選べません。「飽きやすいタイプ」の方は、メニュー数が多く自分で選べるサービスを選びましょう。",
          },
          {
            num: 5,
            title: "解約のしやすさ（気軽に始めて気軽に辞められるか）",
            text: "一人暮らしは生活スタイルが変わりやすいもの。転職、引っ越し、同棲など、環境の変化に合わせて柔軟に利用できるかが重要です。noshはマイページから数クリックで即解約、スキップも簡単。三ツ星ファームはWeb・電話で解約可能。ウェルネスダイニングは電話のみ。「いつでも辞められる」という安心感があるサービスの方が、気軽に始められます。",
          },
        ].map((point) => (
          <div key={point.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {point.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{point.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{point.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 総合ランキング ===== */}
        <SectionHeading id="ranking">【総合ランキング】一人暮らしにおすすめの宅食TOP5</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          上記の5つの選び方ポイント（コスト・送料・冷凍庫サイズ・メニュー自由度・解約しやすさ）を総合的に評価し、一人暮らしにおすすめの宅食TOP5を選出しました。
        </p>

        <RankingCard
          rank={1}
          name="nosh（ナッシュ）"
          tagline="コスパ × 自由度 No.1。一人暮らしの定番"
          color="bg-yellow-50"
          features={[
            "全メニュー糖質30g以下・塩分2.5g以下",
            "60種類以上から自由に選べる",
            "スマホアプリ対応",
            "nosh club割引で最大16.55%OFF",
          ]}
          price="599円〜（10食プラン）"
          shipping="913円〜（関東）"
          pros={[
            "メニューの自由度が業界No.1",
            "アプリで注文・管理がストレスフリー",
            "継続割引で1食499円まで下がる",
            "解約がマイページから即可能",
          ]}
          cons={[
            "送料が地域差大（北海道2,145円）",
            "おかずのみ（ご飯なし）",
            "メニューによって当たり外れあり",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          一人暮らしに最もおすすめなのがnosh。1食599円〜のコスパの良さ、60種類以上のメニューから自分で選べる自由度、アプリの使いやすさ、解約の簡単さ——一人暮らしに必要な要素をすべて高水準で満たしています。初回3,000円OFFのキャンペーンを利用すれば、さらにお得に始められます。詳しくは<Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline">nosh(ナッシュ)の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={2}
          name="三ツ星ファーム"
          tagline="味重視。自宅でレストラン品質を楽しみたい方に"
          color="bg-amber-50"
          features={[
            "プロの料理人監修メニュー",
            "化学調味料・合成着色料不使用",
            "80種類以上のメニュー",
            "初回7食1,980円のお試しプラン",
          ]}
          price="626円〜（14食プラン）"
          shipping="990円〜（関東）"
          pros={[
            "味のクオリティが冷凍弁当No.1",
            "食へのこだわりが強い方も満足",
            "初回お試し1,980円で始めやすい",
          ]}
          cons={[
            "noshより1食あたり少し高い",
            "送料も地域差が大きい",
            "アプリがない（Web注文のみ）",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          「冷凍弁当でもおいしさは妥協したくない」という方には三ツ星ファーム。プロの料理人が監修したメニューは、「冷凍弁当とは思えない」と口コミで高評価。初回7食1,980円（1食283円）のお試しプランがあるので、まずは味を確認してから判断できます。
        </p>

        <RankingCard
          rank={3}
          name="ウェルネスダイニング"
          tagline="健康管理が必要な方に。管理栄養士に無料相談可"
          color="bg-blue-50"
          features={[
            "7つの専門コース（糖質制限・塩分制限等）",
            "管理栄養士に無料で栄養相談",
            "やわらか食・ムース食にも対応",
            "定期便で送料半額（385円）",
          ]}
          price="663円〜（7食プラン）"
          shipping="770円〜（定期便385円）"
          pros={[
            "医療レベルの食事制限食に対応",
            "管理栄養士に無料相談できる安心感",
            "送料が良心的（定期便385円）",
          ]}
          cons={[
            "メニューが自分で選べない",
            "味が素朴（レストラン品質ではない）",
            "解約が電話のみ",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          糖尿病・高血圧・腎臓病などで食事制限が必要な一人暮らしの方には、ウェルネスダイニングが最適です。管理栄養士に電話で無料相談できるのは、一人暮らしで食事管理に不安がある方にとって大きな安心感。3社の詳しい比較は<Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link>をご覧ください。
        </p>

        <RankingCard
          rank={4}
          name="まごころケア食"
          tagline="送料無料×圧倒的コスパ。シニア一人暮らしにも"
          color="bg-green-50"
          features={[
            "1食あたり470円〜の業界最安水準",
            "全国送料無料",
            "やわらか食・たんぱく調整食あり",
            "14食・21食のまとめ買いでさらにお得",
          ]}
          price="470円〜（14食プラン）"
          shipping="無料"
          pros={[
            "送料無料で実質コスト最安クラス",
            "シニア向けのやわらか食がある",
            "容器がコンパクトで冷凍庫にやさしい",
          ]}
          cons={[
            "メニューが自分で選べない（コース制）",
            "味は家庭的（グルメ志向には物足りない）",
            "若い世代向けのメニューが少ない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          コスパ最重視の一人暮らし、特にシニアの一人暮らしにおすすめなのがまごころケア食。1食470円〜で全国送料無料という圧倒的なコストパフォーマンスが魅力。やわらか食やたんぱく調整食もあり、高齢の一人暮らしの食事サポートに最適です。味は素朴で家庭的ですが、「毎日食べても飽きない安心感のある味」と評価されています。
        </p>

        <RankingCard
          rank={5}
          name="食宅便"
          tagline="バランス型。メニュー160種類以上の安定感"
          color="bg-purple-50"
          features={[
            "日清医療食品が運営する信頼性",
            "約160種類のメニュー",
            "管理栄養士監修",
            "お試しセット4食1,980円",
          ]}
          price="560円〜（7食プラン）"
          shipping="780円"
          pros={[
            "メニュー数160種類以上で飽きにくい",
            "日清医療食品の安心ブランド",
            "コースの種類が豊富（低糖質・塩分ケア等）",
          ]}
          cons={[
            "noshほどコスパが良くない",
            "三ツ星ファームほど味が突出していない",
            "アプリがない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          「突出した強みはないが、弱点もない」というバランス型が食宅便。日清医療食品が運営しているため信頼性が高く、管理栄養士監修の約160種類のメニューは業界トップクラスの豊富さ。「とりあえず宅配弁当を試してみたい」という方のエントリーモデルとしておすすめです。
        </p>

        <SubHeading>5社の比較一覧表</SubHeading>
        <ComparisonTable
          headers={["サービス", "1食あたり", "送料", "メニュー数", "解約", "おすすめ度"]}
          rows={[
            ["nosh", "599円〜", "913円〜", "60種類以上", "◎", "★★★★★"],
            ["三ツ星ファーム", "626円〜", "990円〜", "80種類以上", "○", "★★★★☆"],
            ["ウェルネスダイニング", "663円〜", "770円〜", "コース制", "△", "★★★★☆"],
            ["まごころケア食", "470円〜", "無料", "コース制", "○", "★★★★☆"],
            ["食宅便", "560円〜", "780円", "160種類以上", "○", "★★★☆☆"],
          ]}
        />

        {/* ===== 女性向け ===== */}
        <SectionHeading id="women">【女性向け】ダイエット・美容におすすめの宅食3選</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          一人暮らしの女性に多い「ダイエットしたい」「美容のために栄養バランスを整えたい」というニーズに合った宅食サービスを3つ厳選しました。
        </p>

        {[
          {
            name: "1位：nosh（ナッシュ）",
            reason: "全メニュー糖質30g以下。糖質制限ダイエットに最適",
            detail: "noshは全メニュー糖質30g以下・塩分2.5g以下で設計されており、糖質制限ダイエットに最適です。カロリーは200〜450kcalと控えめで、夕食をnoshに置き換えるだけで無理なくカロリーカット。アプリで糖質・カロリー・たんぱく質を確認しながらメニューを選べるので、PFC管理も簡単です。スイーツメニュー（ドーナツ・ロールケーキ等）も糖質オフで、甘いもの好きの方にも嬉しいラインナップ。",
          },
          {
            name: "2位：三ツ星ファーム",
            reason: "低カロリー×高クオリティ。満足感のあるダイエット食",
            detail: "三ツ星ファームのメニューは350kcal以下・糖質25g以下・たんぱく質15g以上で設計。カロリーを抑えながらもプロの料理人監修で味のクオリティが高いため、「ダイエット中でも美味しいものが食べたい」という女性に最適。化学調味料・合成着色料不使用なので、添加物が気になる方にも安心です。",
          },
          {
            name: "3位：食宅便（低糖質セレクト）",
            reason: "1食あたり糖質10g以下のコースあり。本格的な糖質制限に",
            detail: "食宅便の「低糖質セレクト」は1食あたり糖質10g以下と、nosh（30g以下）よりさらに厳しい糖質制限に対応。短期集中でダイエットしたい方、厳密な糖質管理が必要な方におすすめ。日清医療食品の管理栄養士が設計しているため、栄養バランスも安心です。",
          },
        ].map((item) => (
          <div key={item.name} className="bg-pink-50 rounded-lg p-5 mb-4">
            <p className="font-bold mb-1">{item.name}</p>
            <p className="text-sm text-accent font-medium mb-2">{item.reason}</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{item.detail}</p>
          </div>
        ))}

        {/* ===== 男性向け ===== */}
        <SectionHeading id="men">【男性向け】ボリューム重視の宅食3選</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          一人暮らしの男性に多い「量が足りるか心配」「ガッツリ食べたい」というニーズに合った宅食サービスを3つ厳選しました。
        </p>

        {[
          {
            name: "1位：nosh（ナッシュ）",
            reason: "10食プランでまとめ買い＋ご飯大盛りで満足度UP",
            detail: "noshはおかずのみですが、メニューの中にはハンバーグやチキン南蛮など、ボリュームのあるメニューも多数。10食プランで注文してご飯を大盛りにすれば、成人男性でも十分な満足感が得られます。アプリでたんぱく質量をチェックして高たんぱくメニューを選ぶと、筋トレやボディメイク中の方にも最適。1食599円〜のコスパで量と質を両立できます。",
          },
          {
            name: "2位：食宅便（まんぷく亭）",
            reason: "ご飯付きの大容量メニュー。男性の満腹感を重視",
            detail: "食宅便の「まんぷく亭」はご飯付きで1食のボリュームが多い男性向けコース。通常の宅配弁当では物足りないという男性の声に応えた大容量設計。1食あたりのカロリーも500kcal以上としっかりあり、「宅配弁当は量が少ない」という不満を解消します。日清医療食品の管理栄養士が設計しているため、ボリュームがありながらも栄養バランスは整っています。",
          },
          {
            name: "3位：三ツ星ファーム",
            reason: "質でカバー。量より味の満足感で選ぶ",
            detail: "三ツ星ファームは量は標準的ですが、味のクオリティが圧倒的に高いため「量は普通だけど満足度が高い」という評価が多いです。プロの料理人監修のレストラン品質メニューは、「仕事帰りのご褒美」感覚で楽しめます。ご飯を別途用意して、おかずの質で勝負するスタイルの方におすすめ。",
          },
        ].map((item) => (
          <div key={item.name} className="bg-blue-50 rounded-lg p-5 mb-4">
            <p className="font-bold mb-1">{item.name}</p>
            <p className="text-sm text-accent font-medium mb-2">{item.reason}</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{item.detail}</p>
          </div>
        ))}

        {/* ===== シニア向け ===== */}
        <SectionHeading id="senior">【シニア向け】やわらか食・制限食の宅食3選</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          シニアの一人暮らしでは「噛む力・飲み込む力の衰え」「持病による食事制限」「買い物の負担」が大きな課題。これらを解決できるシニア向け宅食サービスを3つ厳選しました。離れて暮らすご家族が注文して送る使い方もおすすめです。
        </p>

        {[
          {
            name: "1位：ウェルネスダイニング",
            reason: "糖尿病・腎臓病・高血圧の制限食に完全対応。栄養相談無料",
            detail: "ウェルネスダイニングは糖質制限食（糖質15g以下）、塩分制限食（塩分2.0g以下）、たんぱく質調整食、カロリー制限食、やわらか食など7つの専門コースを用意。管理栄養士に電話で無料相談でき、「自分にはどのコースが合うか」をプロに聞けるのが最大の強み。高齢の方やそのご家族が安心して利用できるサービスです。定期便なら送料385円と良心的。",
          },
          {
            name: "2位：まごころケア食",
            reason: "1食470円〜で送料無料。年金生活の方にも続けやすい価格",
            detail: "まごころケア食は1食470円〜で全国送料無料と、シニアの一人暮らしでも無理なく続けられる価格設定。やわらか食・たんぱく調整食・糖質制限食などのコースがあり、優しい味付けでシニアの方にも食べやすいと好評。容器もコンパクトで冷凍庫の場所を取りにくいのもポイントです。",
          },
          {
            name: "3位：食宅便（やわらかい食事）",
            reason: "日清医療食品の信頼感。歯ぐきでつぶせるやわらかさ",
            detail: "食宅便は日清医療食品が運営しており、病院や介護施設にも食事を提供している実績があります。「やわらかい食事」コースは、歯ぐきでつぶせるやわらかさに調理されており、噛む力が弱くなった方でも安心。見た目は普通の食事と変わらず、食べる楽しみを損なわない工夫がされています。",
          },
        ].map((item) => (
          <div key={item.name} className="bg-amber-50 rounded-lg p-5 mb-4">
            <p className="font-bold mb-1">{item.name}</p>
            <p className="text-sm text-accent font-medium mb-2">{item.reason}</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{item.detail}</p>
          </div>
        ))}

        {/* ===== 月額コスト ===== */}
        <SectionHeading id="cost">一人暮らしの宅食 月額コストシミュレーション</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          一人暮らしで宅配弁当を利用した場合の月額コストを、利用頻度別にシミュレーションしました。「週に何回利用するか」で月額がどう変わるか、具体的な数字で確認しましょう。noshの10食プラン（関東在住）を基準に計算しています。
        </p>

        <SubHeading>利用頻度別の月額コスト（nosh 10食プラン基準・関東在住）</SubHeading>
        <ComparisonTable
          headers={["利用パターン", "利用頻度", "月の食数", "食材費+送料", "月額合計", "1食あたり"]}
          rows={[
            ["軽め利用", "週3回", "約12食", "5,990円+913円", "6,903円", "575円"],
            ["平日夕食", "週5回", "約20食", "11,980円+1,826円", "13,806円", "690円"],
            ["毎日利用", "毎日", "約30食", "17,970円+2,739円", "20,709円", "690円"],
          ]}
        />

        <SubHeading>サービス別月額比較（週5回利用・関東在住）</SubHeading>
        <ComparisonTable
          headers={["サービス", "プラン", "食材費/月", "送料/月", "月額合計", "1食あたり"]}
          rows={[
            ["nosh", "10食×2回", "11,980円", "1,826円", "13,806円", "690円"],
            ["三ツ星ファーム", "14食+7食", "13,000円", "1,980円", "14,980円", "713円"],
            ["ウェルネスダイニング", "14食+7食", "13,716円", "770円", "14,486円", "690円"],
            ["まごころケア食", "21食", "9,870円", "0円", "9,870円", "470円"],
            ["食宅便", "7食×3回", "11,760円", "2,340円", "14,100円", "671円"],
          ]}
        />
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">コスト比較のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>最安：まごころケア食</strong>（月9,870円/1食470円）——送料無料の効果が大きい</li>
            <li><strong>コスパ良好：nosh・食宅便</strong>（月1.3〜1.4万円/1食670〜690円）——品質と価格のバランス◎</li>
            <li><strong>やや高め：三ツ星ファーム</strong>（月1.5万円/1食713円）——味のクオリティを考えれば妥当</li>
            <li>nosh clubの継続割引で、noshは最安時1食499円（月9,980円）まで下がる可能性あり</li>
          </ul>
        </div>

        {/* ===== vs比較 ===== */}
        <SectionHeading id="vs-compare">宅配弁当 vs コンビニ弁当 vs 自炊 コスト・栄養比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「結局、宅配弁当・コンビニ弁当・自炊のどれが一番いいの？」という疑問にお答えします。コスト・栄養・時間の3軸で比較しました。
        </p>

        <ComparisonTable
          headers={["項目", "宅配弁当（nosh）", "コンビニ弁当", "自炊"]}
          rows={[
            ["1食あたりコスト", "599〜690円", "500〜800円", "200〜400円"],
            ["月額コスト（夕食のみ）", "約13,800円", "約15,000〜24,000円", "約6,000〜12,000円"],
            ["調理時間", "レンジ5分", "0分（購入のみ）", "30〜60分"],
            ["買い物時間", "0分（配送）", "10〜20分/回", "30〜60分/回"],
            ["後片付け", "容器を捨てるだけ", "容器を捨てるだけ", "20〜30分"],
            ["栄養バランス", "◎（管理栄養士設計）", "△（偏りがち）", "○（作り手次第）"],
            ["糖質管理", "◎（30g以下保証）", "×（表示なし多い）", "△（自分で計算）"],
            ["塩分管理", "◎（2.5g以下保証）", "×（高塩分が多い）", "○（調整可能）"],
            ["食材ロス", "なし", "なし", "多い（年3〜5万円分）"],
            ["メニューの自由度", "○（60種類+）", "◎（無限）", "◎（無限）"],
            ["続けやすさ", "◎（自動配送）", "○（毎回買い物）", "△（疲れると挫折）"],
          ]}
        />

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="font-bold mb-2">結論：一人暮らしには「宅配弁当＋軽い自炊」のハイブリッドが最強</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>夕食：宅配弁当</strong>——仕事帰りで疲れている日もレンジで5分。栄養バランスも保証。</li>
            <li><strong>朝食：シリアル・ヨーグルト・果物</strong>——調理不要で栄養補給。食物繊維とビタミンを補完。</li>
            <li><strong>昼食：コンビニ or 社食 or 軽い自炊</strong>——状況に応じて柔軟に対応。</li>
            <li><strong>月額の目安：</strong>宅配弁当（夕食）約14,000円 + 朝食・昼食 約15,000円 = 月29,000円。一人暮らしの平均食費（約3万円）とほぼ同額で、栄養バランスは格段に向上します。</li>
          </ul>
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
        <SectionHeading id="summary">まとめ：一人暮らしの宅食選び、迷ったらまずnoshから</SectionHeading>

        <SubHeading>目的別おすすめ早見表</SubHeading>
        <ComparisonTable
          headers={["あなたの目的", "おすすめサービス"]}
          rows={[
            ["コスパ重視・迷ったらこれ", "nosh（ナッシュ）"],
            ["味のクオリティ最優先", "三ツ星ファーム"],
            ["食事制限・健康管理が必要", "ウェルネスダイニング"],
            ["とにかく安く抑えたい", "まごころケア食"],
            ["メニュー数重視・バランス型", "食宅便"],
            ["ダイエット（女性）", "nosh or 三ツ星ファーム"],
            ["ボリューム重視（男性）", "nosh + ご飯大盛り or 食宅便まんぷく亭"],
            ["シニア一人暮らし", "ウェルネスダイニング or まごころケア食"],
          ]}
        />

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/10">
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネス</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">まごころ</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">食宅便</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["一人暮らしおすすめ度", 5, 4, 4, 4, 3],
                  ["コスパ", 5, 3, 3, 5, 4],
                  ["味", 4, 5, 3, 3, 4],
                  ["メニュー自由度", 5, 4, 2, 2, 3],
                  ["使いやすさ", 5, 3, 3, 3, 3],
                ].map(([label, ...scores], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium text-xs">{label as string}</td>
                    {(scores as number[]).map((score, j) => (
                      <td key={j} className="border border-warm-border px-3 py-2">
                        <StarRating count={score} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            一人暮らしの宅食選びで迷ったら、まずは<strong>nosh</strong>から始めるのがおすすめです。コスパ・メニューの自由度・アプリの使いやすさ・解約の簡単さと、一人暮らしに必要な要素をすべて高水準で満たしています。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            初回3,000円OFFのキャンペーンを利用すれば10食プランが2,990円（1食299円）でスタートできます。合わなければマイページから即解約できるので、リスクはほぼゼロ。
          </p>
          <p className="text-sm leading-relaxed">
            「毎日のコンビニ弁当やカップ麺を卒業したい」「自炊は面倒だけど健康は気になる」——そんな一人暮らしの食事問題、宅配弁当でスマートに解決してみませんか。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            nosh(ナッシュ)の口コミ・評判を徹底調査
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
        </div>

        {/* Author info */}
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

        {/* Related articles */}
        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">
                【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
