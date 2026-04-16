import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】産後におすすめの宅配弁当ランキングTOP5｜産褥期の栄養管理と時短を両立";
const ARTICLE_DESCRIPTION =
  "産後・産褥期におすすめの宅配弁当を管理栄養士監修で徹底比較。nosh・ママの休食・ウェルネスダイニングなど人気5社を栄養バランス・添加物・価格で比較。授乳中の栄養管理、上の子も一緒に食べられるサービス、里帰りなしの食事問題まで徹底解説。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/sango-osusume/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅配弁当 産後 おすすめ, 産後 宅食, 産褥期 宅配弁当, 産後 食事 宅配, 授乳中 宅配弁当, 産後ママ 宅食, 産後 冷凍弁当, 妊娠中 宅配弁当",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-16T00:00:00+09:00",
    modifiedTime: "2026-04-16T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "産後いつから宅配弁当を利用するのがベストですか？",
    answer:
      "出産前（妊娠後期）のうちに注文しておき、退院日に届くよう手配するのがベストです。産後1〜2ヶ月の産褥期は体の回復期間で、できるだけ家事を減らすことが推奨されています。冷凍宅配弁当なら賞味期限が6ヶ月〜1年あるため、出産前に20〜30食ストックしておけば、産後1ヶ月はキッチンに立たずに過ごせます。定期便にしておけば自動的に届くので、産後の注文の手間もゼロです。",
  },
  {
    question: "授乳中に食べてはいけないものはありますか？宅配弁当は大丈夫？",
    answer:
      "授乳中は「絶対に食べてはいけないもの」は基本的にありませんが、アルコール・カフェインの大量摂取は避けるべきです。宅配弁当にはアルコール・カフェインは含まれないため安心。添加物が気になる方は、三ツ星ファーム（化学調味料・合成着色料不使用）やわんまいる（国産食材100%）を選ぶと良いでしょう。なお、「脂っこいものを食べると乳腺炎になる」という説は医学的根拠がなく、バランスの良い食事を心がければ問題ありません。",
  },
  {
    question: "上の子（幼児）も一緒に食べられる宅配弁当はありますか？",
    answer:
      "noshや三ツ星ファームのメニューは大人向けの味付けですが、辛くないメニューを選べば2歳以上のお子さんとシェアできます。ただし、幼児には塩分が多い場合があるため、ご飯を多めにして薄味に調整するのがおすすめ。ヨシケイのプチママコースやカットミールは子ども向けに取り分けできるミールキットで、幼児がいる家庭に特に人気です。宅配弁当とミールキットを曜日で使い分けるのも効率的です。",
  },
  {
    question: "産後ダイエットに宅配弁当は使えますか？",
    answer:
      "産後6ヶ月以降で授乳が安定している方なら、宅配弁当を使った緩やかなダイエットは可能です。ただし、産後すぐ（産褥期〜産後3ヶ月）は体の回復と母乳生産が最優先。この時期に過度なカロリー制限をすると母乳の質や量に影響する可能性があります。産後ダイエットを始める場合は、nosh（糖質30g以下）で緩やかな糖質制限から始め、1日の摂取カロリーを1,800kcal以下に落とさないようにしましょう。授乳中は通常より+350kcal必要です。",
  },
  {
    question: "夫婦で利用する場合、どのプランがお得ですか？",
    answer:
      "夫婦で利用するならnoshの20食プランが最もコスパ良好。1食あたり564円で、夫婦2人で10日分。20食プランは10食プランより1食あたり35円安く、月に2回注文すれば40食で夫婦の平日の夕食をカバーできます。送料も1回分で20食届くため、10食×2回より送料が半分に。三ツ星ファームの21食プラン（1食572円）も夫婦利用にお得。「産後のママ用に低カロリーメニュー、パパ用にボリュームメニュー」と分けて選べるのが宅配弁当の利点です。",
  },
];

/* ---------- Helper Components ---------- */

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">目的別ガイド</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">産後向け宅配弁当おすすめ</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "why", label: "産後に宅配弁当がおすすめな理由" },
    { id: "how-to-choose", label: "産後向け宅食の選び方4つのポイント" },
    { id: "ranking", label: "【ランキング】産後におすすめの宅配弁当TOP5" },
    { id: "detail-review", label: "各サービスの詳細レビュー" },
    { id: "price-compare", label: "料金比較表" },
    { id: "menu-example", label: "産後向けメニューの実例紹介" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}><a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a></li>
        ))}
      </ol>
    </nav>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent/10">
            {headers.map((h) => (<th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (<td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-warm-border rounded-lg mb-3 group">
      <summary className="flex items-center justify-between p-4 font-medium text-sm hover:bg-cream/50 transition-colors">
        <span>{question}</span>
        <span className="faq-arrow text-warm-gray ml-2">&#9660;</span>
      </summary>
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">{answer}</div>
    </details>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (<span key={i} className={i <= count ? "star-filled" : "star-empty"}>&#9733;</span>))}
    </span>
  );
}

function RankingCard({ rank, name, tagline, color, features, price, shipping, pros, cons }: {
  rank: number; name: string; tagline: string; color: string; features: string[]; price: string; shipping: string; pros: string[]; cons: string[];
}) {
  const rankColors: Record<number, string> = { 1: "bg-yellow-500", 2: "bg-gray-400", 3: "bg-amber-600", 4: "bg-accent", 5: "bg-accent" };
  return (
    <div className={`${color} rounded-xl p-6 mb-6 border border-warm-border`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`${rankColors[rank] || "bg-accent"} text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center`}>{rank}</span>
        <div><h3 className="text-lg font-bold">{name}</h3><p className="text-sm text-warm-gray">{tagline}</p></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
        <div><p className="font-medium mb-1">1食あたり: {price}</p><p className="font-medium">送料: {shipping}</p></div>
        <div><ul className="space-y-1">{features.map((f) => (<li key={f} className="flex items-start gap-1.5"><span className="text-accent mt-0.5">&#10003;</span><span>{f}</span></li>))}</ul></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div><p className="font-medium text-accent mb-1">メリット</p><ul className="space-y-1">{pros.map((p) => (<li key={p} className="leading-relaxed">{p}</li>))}</ul></div>
        <div><p className="font-medium text-red-600 mb-1">デメリット</p><ul className="space-y-1">{cons.map((c) => (<li key={c} className="leading-relaxed text-foreground/70">{c}</li>))}</ul></div>
      </div>
    </div>
  );
}

/* ---------- Page Component ---------- */

export default function SangoOsusumePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-16T00:00:00+09:00",
    dateModified: "2026-04-16T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: { "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "産後におすすめの宅配弁当ランキングTOP5",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "nosh（ナッシュ）", description: "60種類以上から自由に選べる。糖質30g以下で産後の栄養管理に最適。アプリで簡単注文。", url: "https://nosh.jp/" },
      { "@type": "ListItem", position: 2, name: "三ツ星ファーム", description: "化学調味料・合成着色料不使用。プロの料理人監修で産後のご褒美に。", url: "https://mitsuboshifarm.jp/" },
      { "@type": "ListItem", position: 3, name: "ウェルネスダイニング", description: "管理栄養士に産後の食事を無料相談。栄養バランスの整った7コース。", url: "https://www.wellness-dining.com/" },
      { "@type": "ListItem", position: 4, name: "わんまいる", description: "国産食材100%。湯煎調理で手作り感のある食事。添加物が気になるママに。", url: "https://www.onemile.jp/" },
      { "@type": "ListItem", position: 5, name: "ヨシケイ（シンプルミール）", description: "1食約300円の圧倒的コスパ。毎日届く常温弁当で置き配も可能。", url: "https://yoshikei-dvlp.co.jp/" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">目的別ガイド</span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-16">公開: 2026年4月16日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「産後は体がボロボロで料理する気力がない...」「授乳中の栄養バランスが心配だけど、毎日自炊は無理」——産後のママが直面する食事問題を解決するのが<strong>産後向け宅配弁当</strong>です。
          </p>
          <p className="mb-3">
            産褥期（産後6〜8週間）は体の回復期間。この時期に無理をすると産後うつや体調不良のリスクが高まります。宅配弁当なら、管理栄養士が設計した栄養バランスの食事がレンジ5分で準備完了。赤ちゃんのお世話に集中できます。
          </p>
          <p>
            この記事では、<strong>産後のママにおすすめの宅配弁当5社を栄養バランス・添加物・価格で徹底比較</strong>し、ランキングTOP5を発表。<strong>授乳中の必要栄養素</strong>や<strong>上の子も一緒に食べられるサービス</strong>、<strong>出産前のストック方法</strong>まで、産後の食事の悩みをまるごと解決します。
          </p>
        </div>

        <TableOfContents />

        {/* ===== おすすめな理由 ===== */}
        <SectionHeading id="why">産後に宅配弁当がおすすめな5つの理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          産後のママにとって宅配弁当は「贅沢品」ではなく「必需品」。その理由を5つの観点から解説します。
        </p>

        {[
          {
            icon: "&#128164;",
            title: "産褥期は体の回復が最優先。キッチンに立つ必要なし",
            text: "産褥期（産後6〜8週間）は子宮の回復・会陰や帝王切開の傷の治癒・ホルモンバランスの調整が進む大事な期間。この時期に無理に家事をすると回復が遅れ、産後うつのリスクも高まります。宅配弁当ならレンジで5分温めるだけ。包丁・火・長時間の立ち仕事は一切不要。赤ちゃんが泣いても「冷凍庫から出してレンジに入れるだけ」で食事が完成します。産後の体を労わりながら、しっかり栄養を摂れるのが最大のメリットです。",
          },
          {
            icon: "&#129329;",
            title: "授乳中に必要な栄養素を自動的にカバー",
            text: "授乳中は通常より約350kcal多く摂取する必要があり、鉄分・カルシウム・葉酸・たんぱく質・DHA/EPAの需要が増加します。宅配弁当は管理栄養士がこれらの栄養素を計算して設計しているため、「何を食べればいいか」を考えるストレスがゼロ。特にたんぱく質は母乳の主成分であるため、nosh（平均たんぱく質20g）や三ツ星ファーム（15g以上）は授乳中の栄養補給に最適です。",
          },
          {
            icon: "&#128556;",
            title: "3時間おきの授乳でも「食べたい時にすぐ食べられる」",
            text: "新生児の授乳は3時間おき、1日8〜12回。ママの食事時間は不規則になりがちで、「お腹が空いた時にすぐ食べたい」のが本音。冷凍宅配弁当は冷凍庫から出してレンジで5分。赤ちゃんが寝ている隙に素早く食事ができます。パンやカップ麺で済ませがちな産後の食事を、栄養バランスの整った食事に置き換えられるのは大きな価値です。",
          },
          {
            icon: "&#128106;",
            title: "パパ・上の子の食事も一緒に解決できる",
            text: "産後のママが困るのは「自分の食事」だけでなく「家族の食事」。パパの夕食、上の子の食事まで作る余裕はありません。宅配弁当を20食ストックしておけば、パパの夕食もレンジで5分。上の子（2歳以上）も辛くないメニューを選べばシェアできます。noshの20食プランなら1食564円で、外食やコンビニ弁当より経済的。「産後の食事問題を家族まるごと解決」できるのが宅配弁当の強みです。",
          },
          {
            icon: "&#127873;",
            title: "出産祝い・里帰りなしの強い味方",
            text: "最近は里帰り出産をしない「里帰りなし出産」が増加しています。里帰りなしの場合、産後の食事を自分たちで何とかしなければなりません。宅配弁当は出産前にまとめてストックしておけば、産後1ヶ月の食事問題を一気に解決。また、出産祝いとして友人や親族に宅配弁当のギフトカードを贈る方も増えています。noshやわんまいるはギフト対応もあり、「本当に助かる出産祝い」として喜ばれます。",
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
        <SectionHeading id="how-to-choose">産後向け宅食の選び方4つのポイント</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          産後のママが宅配弁当を選ぶ際は、通常とは異なるポイントがあります。授乳中の栄養・添加物・家族での利用を考慮した4つの選び方を解説します。
        </p>

        {[
          { num: 1, title: "栄養バランス（たんぱく質・鉄分・カルシウムの充実度）", text: "授乳中のママは1日のたんぱく質70g以上、鉄分10.5mg、カルシウム650mgが推奨されています。宅配弁当1食でたんぱく質15〜25gをカバーできれば、残りの食事と合わせて必要量を満たしやすくなります。nosh（平均20g）、三ツ星ファーム（15g以上）はたんぱく質が豊富。鉄分・カルシウムはサプリメントで補うのが現実的ですが、食宅便やウェルネスダイニングはミネラルバランスも考慮した設計です。" },
          { num: 2, title: "添加物の少なさ（授乳中の安心感）", text: "医学的には、宅配弁当に含まれる食品添加物が母乳を通じて赤ちゃんに悪影響を与えるという科学的根拠はありません。しかし、「できるだけ添加物を避けたい」というママの気持ちは大切。三ツ星ファームは化学調味料・合成着色料不使用、わんまいるは国産食材100%で添加物を極力排除。安心感を重視するならこの2社がおすすめです。" },
          { num: 3, title: "注文・受け取りの手軽さ（赤ちゃんを抱えて玄関に出る負担）", text: "産後のママにとって宅配の受け取りは意外と大変。赤ちゃんを抱えて玄関に出たり、授乳中にインターホンが鳴ったり。冷凍宅配弁当はヤマト運輸のクール便が基本で、日時指定可能。土日の午前中に指定してパパに受け取ってもらうのが最も楽です。ヨシケイは玄関前に保冷箱で置き配してくれるため、受け取りの負担がゼロです。" },
          { num: 4, title: "家族での利用しやすさ（パパ・上の子も食べられるか）", text: "産後は「ママの分だけ」でなく「家族全員の食事」が問題になります。noshの20食プランなら夫婦で10日分、三ツ星ファームの21食プランなら家族3人で7日分。上の子（2歳以上）にはハンバーグや魚の煮付けなど、辛くないメニューを選べばシェア可能。1つのサービスで家族全員の食事をカバーできれば、最も効率的です。" },
        ].map((point) => (
          <div key={point.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">{point.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{point.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{point.text}</p>
            </div>
          </div>
        ))}

        {/* ===== ランキング ===== */}
        <SectionHeading id="ranking">【ランキング】産後におすすめの宅配弁当TOP5</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          栄養バランス・添加物の少なさ・価格・家族利用のしやすさの4項目で総合評価し、産後のママにおすすめの宅配弁当TOP5を選出しました。
        </p>

        <RankingCard
          rank={1}
          name="nosh（ナッシュ）"
          tagline="栄養管理 × 家族利用 × コスパ。産後の万能選手"
          color="bg-yellow-50"
          features={[
            "60種類以上から自由に選べる",
            "全メニュー糖質30g以下・塩分2.5g以下",
            "たんぱく質平均約20g",
            "20食プランで家族利用に最適",
          ]}
          price="564円〜（20食プラン）"
          shipping="913円〜（関東）"
          pros={[
            "20食プランで家族全員の食事をカバー",
            "アプリで授乳中でも片手で注文可能",
            "メニューが豊富で飽きにくい",
            "nosh club割引で長期利用がお得",
          ]}
          cons={[
            "化学調味料は使用している",
            "送料が地域差大",
            "上の子向けのキッズメニューはない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          産後のママに最もおすすめなのがnosh。たんぱく質平均20gで授乳中の栄養補給に適し、20食プランなら夫婦で10日分の夕食をカバー。アプリで片手操作できるため、授乳中や赤ちゃんを抱っこしながらでも注文・メニュー選びが可能。初回3,000円OFFで10食2,990円から始められます。詳しくは<Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline">nosh(ナッシュ)の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={2}
          name="三ツ星ファーム"
          tagline="無添加 × レストラン品質。頑張るママへのご褒美"
          color="bg-amber-50"
          features={[
            "化学調味料・合成着色料不使用",
            "プロの料理人監修メニュー",
            "350kcal以下・糖質25g以下",
            "21食プランで家族利用に最適",
          ]}
          price="572円〜（21食プラン）"
          shipping="990円〜（関東）"
          pros={[
            "化学調味料・合成着色料不使用で安心",
            "味のクオリティが高く産後のストレス解消に",
            "21食プランなら1食572円とコスパ良好",
          ]}
          cons={[
            "アプリがない（Web注文のみ）",
            "送料が地域差大",
            "メニュー自由度がnoshほど高くない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          添加物が気になる授乳中のママには三ツ星ファーム。化学調味料・合成着色料不使用で、プロの料理人監修のレストラン品質メニューは「産後の自分へのご褒美」に最適。21食プランなら1食572円とコスパも良好です。詳しくは<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline">三ツ星ファームの口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={3}
          name="ウェルネスダイニング"
          tagline="管理栄養士に産後の食事を無料相談。栄養管理の安心感"
          color="bg-blue-50"
          features={[
            "管理栄養士に無料で栄養相談",
            "7つの専門コース",
            "栄養バランス料理（塩分2.5g以下）",
            "定期便で送料半額（385円）",
          ]}
          price="663円〜（7食プラン）"
          shipping="770円〜（定期便385円）"
          pros={[
            "管理栄養士に産後の栄養を相談できる",
            "栄養バランスが最も整っている",
            "送料が良心的",
          ]}
          cons={[
            "メニューが自分で選べない（コース制）",
            "味は素朴",
            "家族で大量注文するにはやや割高",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          「授乳中の栄養管理が不安」という方にはウェルネスダイニング。管理栄養士に電話で「授乳中におすすめのコースは？」「貧血気味なのですが...」と無料で相談できるのは、初めての出産で食事に不安があるママにとって大きな安心材料。詳しくは<Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark underline">ウェルネスダイニングの口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={4}
          name="わんまいる"
          tagline="国産食材100%。手作り感のある安心メニュー"
          color="bg-green-50"
          features={[
            "国産食材100%使用",
            "湯煎・流水解凍で手作り感のある食事",
            "1食あたり主菜1品+副菜2品",
            "合成保存料・合成着色料不使用",
          ]}
          price="796円〜（5食プラン）"
          shipping="935円（北海道・沖縄2,145円）"
          pros={[
            "国産食材100%で産後の安心感が最高レベル",
            "湯煎調理で冷凍弁当より手作り感がある",
            "副菜2品付きで栄養の偏りが少ない",
          ]}
          cons={[
            "1食あたりの価格が高い（796円〜）",
            "レンジ調理ではなく湯煎が必要（やや手間）",
            "メニュー数がnoshほど多くない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          「添加物ゼロ・国産食材だけ」を最優先するママにはわんまいる。北海道産の鮭、九州産の鶏肉など、全メニュー国産食材100%使用。湯煎で温める手間はありますが、冷凍弁当とは思えない「手作り感」があり、「お惣菜を手作りしたような味」と好評。副菜2品付きで1食の品数が多いのも産後の栄養補給に嬉しいポイントです。
        </p>

        <RankingCard
          rank={5}
          name="ヨシケイ（シンプルミール）"
          tagline="1食約300円の圧倒的コスパ。毎日届く常温弁当"
          color="bg-purple-50"
          features={[
            "3食セット1,190円（1食約397円）",
            "初回お試し半額（3食595円）",
            "送料無料・毎日届く",
            "玄関前に置き配可能",
          ]}
          price="約397円（3食セット）"
          shipping="無料"
          pros={[
            "1食約300円台は業界最安クラス",
            "毎日届くので冷凍庫の容量を気にしなくていい",
            "置き配対応で受け取り不要",
          ]}
          cons={[
            "冷凍弁当ではないため長期保存不可",
            "メニューの自由度が低い（日替わり）",
            "配達エリアが限定される場合がある",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          コスパ最優先の方にはヨシケイのシンプルミール。1食約397円で送料無料は、産後の出費が多い時期に嬉しい価格設定。初回お試しは半額の3食595円（1食約198円）。毎日届くので冷凍庫の容量を気にする必要がなく、置き配対応なので赤ちゃんが寝ている間に玄関前に届けてもらえます。
        </p>

        {/* ===== 詳細レビュー ===== */}
        <SectionHeading id="detail-review">各サービスの詳細レビュー</SectionHeading>

        <SubHeading>nosh - 産後の家族まるごとサポート</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          noshが産後に最もおすすめな理由は「家族全員の食事を1つのサービスでカバーできる」こと。20食プランなら夫婦で10日分の夕食が揃い、1食あたり564円とコスパ良好。パパ用にはボリュームのあるハンバーグやチキン、ママ用にはたんぱく質豊富な魚メニュー、上の子用には辛くない煮物系と、家族それぞれのニーズに合わせてメニューを選び分けられます。アプリは片手操作に対応しているため、授乳中や抱っこ中でもメニュー選び・注文変更が可能。初回3,000円OFFキャンペーンで気軽に始められます。
        </p>

        <SubHeading>三ツ星ファーム - 産後ママのご褒美食</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          三ツ星ファームは化学調味料・合成着色料不使用で、授乳中のママが安心して食べられる宅配弁当。プロの料理人監修のメニューは「冷凍弁当とは思えない」クオリティで、産後の慣れない育児でストレスが溜まりがちなママへの「ご褒美」になります。350kcal以下・糖質25g以下で、産後太りを気にする方にも適した栄養設計。21食プランなら1食572円で、noshの20食プランとほぼ同額のコスパです。
        </p>

        <SubHeading>ウェルネスダイニング - 栄養相談付きで安心</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          ウェルネスダイニングの最大の強みは管理栄養士への無料電話相談。「授乳中は何を食べればいいの？」「鉄分が足りているか心配」「妊娠糖尿病だったのですが産後の食事は？」といった個別の相談に対応してもらえます。栄養バランス料理コースは塩分2.5g以下で、産後の体に優しい設計。初回送料無料でお試し注文できるため、まずは7食プランから始めて味と量を確認するのがおすすめです。
        </p>

        <SubHeading>わんまいる - 国産食材100%の安心感</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          わんまいるは「国産食材100%・合成保存料不使用・合成着色料不使用」という3つの安心を掲げる宅配おかず。冷凍パウチを湯煎で温めるスタイルで、レンジ加熱より食材の食感と風味が活きます。1食あたり主菜1品+副菜2品の3品構成で、品数が多く見た目の満足感も高い。価格は1食796円〜と他社より高めですが、「産後の1〜2ヶ月だけ」と割り切れば、国産食材の安心感は大きな価値です。
        </p>

        <SubHeading>ヨシケイ - 毎日届くコスパ最強弁当</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          ヨシケイのシンプルミールは1食約397円で送料無料という圧倒的コスパ。冷凍弁当ではなく毎日届くスタイルなので、冷凍庫の容量を気にする必要がありません。玄関前の保冷箱に置き配してくれるため、インターホンが鳴らず赤ちゃんが起きることもなし。初回お試しは半額（3食595円）で気軽に試せます。ただし配達エリアが限定される場合があるため、まず公式サイトでエリア確認を。
        </p>

        {/* ===== 料金比較 ===== */}
        <SectionHeading id="price-compare">料金比較表</SectionHeading>

        <SubHeading>5社の料金・特徴比較一覧</SubHeading>
        <ComparisonTable
          headers={["サービス", "1食あたり", "送料", "添加物", "たんぱく質", "家族利用"]}
          rows={[
            ["nosh", "564円〜", "913円〜", "一部使用", "平均20g", "20食プランあり"],
            ["三ツ星ファーム", "572円〜", "990円〜", "不使用", "15g以上", "21食プランあり"],
            ["ウェルネスダイニング", "663円〜", "定期385円", "一部使用", "約15g", "7〜21食"],
            ["わんまいる", "796円〜", "935円", "不使用", "約15g", "5食セット"],
            ["ヨシケイ", "約397円", "無料", "一部使用", "約10g", "毎日配達"],
          ]}
        />

        <SubHeading>産後1ヶ月の食費シミュレーション（夫婦で夕食利用）</SubHeading>
        <ComparisonTable
          headers={["サービス", "プラン", "食材費/月", "送料/月", "月額合計"]}
          rows={[
            ["nosh", "20食×3回", "33,840円", "2,739円", "36,579円"],
            ["三ツ星ファーム", "21食×約2.8回", "33,600円", "2,772円", "36,372円"],
            ["ウェルネスダイニング", "14食×約4.3回", "38,540円", "1,656円", "40,196円"],
            ["わんまいる", "5食×12回", "47,760円", "11,220円", "58,980円"],
            ["ヨシケイ", "3食×約20日", "23,800円", "0円", "23,800円"],
          ]}
        />

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">産後の食費の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>コスパ最強：ヨシケイ</strong>（月約23,800円）——毎日届く・送料無料・置き配で産後に最適</li>
            <li><strong>バランス良好：nosh・三ツ星ファーム</strong>（月約36,000円）——家族利用とコスパの両立</li>
            <li><strong>安心感重視：ウェルネスダイニング</strong>（月約40,000円）——栄養相談付きの安心感</li>
            <li><strong>国産食材：わんまいる</strong>（月約59,000円）——価格は高いが1〜2ヶ月限定ならアリ</li>
          </ul>
        </div>

        {/* ===== メニュー実例 ===== */}
        <SectionHeading id="menu-example">産後向けメニューの実例紹介</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          産後のママにおすすめの「たんぱく質豊富×鉄分補給」メニューを各サービスから紹介します。
        </p>

        <SubHeading>nosh - 高たんぱくメニューの例</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "カロリー", "たんぱく質", "糖質"]}
          rows={[
            ["鮭のマッシュポテトアヒージョ", "285kcal", "18.2g", "15.8g"],
            ["チキンのバジルオイル焼き", "480kcal", "29.1g", "4.3g"],
            ["ハンバーグと温野菜のデミ", "395kcal", "18.5g", "21.4g"],
          ]}
        />

        <SubHeading>産後ママの1日の食事プラン例（授乳中・1日2,100kcal目標）</SubHeading>
        <ComparisonTable
          headers={["食事", "メニュー例", "カロリー", "たんぱく質"]}
          rows={[
            ["朝食", "ご飯+味噌汁+納豆+ほうれん草のおひたし", "約450kcal", "約18g"],
            ["間食", "ヨーグルト+バナナ+ナッツ", "約250kcal", "約8g"],
            ["昼食", "おにぎり2個+nosh「鮭のアヒージョ」", "約635kcal", "約22g"],
            ["夕食", "nosh「チキンのバジルオイル焼き」+ご飯150g", "約730kcal", "約33g"],
            ["合計", "", "約2,065kcal", "約81g"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          授乳中のママは1日約2,100kcal・たんぱく質70g以上が目安。上記プランなら2食をnoshに置き換えるだけで、カロリーもたんぱく質も目標をクリア。鉄分・カルシウムは食事だけでは不足しやすいため、産後用サプリメントの併用をおすすめします。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：産後の宅食選び、出産前にストックしておこう</SectionHeading>

        <SubHeading>目的別おすすめ早見表</SubHeading>
        <ComparisonTable
          headers={["産後の状況", "おすすめサービス"]}
          rows={[
            ["家族全員の食事をカバーしたい", "nosh（20食プラン）"],
            ["添加物が気になる・ご褒美感がほしい", "三ツ星ファーム"],
            ["栄養管理をプロに相談したい", "ウェルネスダイニング"],
            ["国産食材100%にこだわりたい", "わんまいる"],
            ["とにかく安く抑えたい", "ヨシケイ（シンプルミール）"],
            ["里帰りなしで出産前にストック", "nosh or 三ツ星ファーム（大量注文）"],
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
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">わんまいる</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">ヨシケイ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["産後おすすめ度", 5, 5, 4, 3, 4],
                  ["栄養バランス", 4, 4, 5, 4, 3],
                  ["添加物の少なさ", 3, 5, 3, 5, 3],
                  ["コスパ", 4, 4, 3, 2, 5],
                  ["家族利用", 5, 4, 3, 2, 4],
                ].map(([label, ...scores], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium text-xs">{label as string}</td>
                    {(scores as number[]).map((score, j) => (
                      <td key={j} className="border border-warm-border px-3 py-2"><StarRating count={score} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            産後の宅食選びで迷ったら、まずは<strong>nosh</strong>がおすすめ。20食プランで家族全員の食事をカバーでき、アプリの使いやすさ・メニューの豊富さ・コスパのバランスが最も優れています。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            添加物が気になる方は<strong>三ツ星ファーム</strong>（化学調味料・合成着色料不使用）、コスパ最優先なら<strong>ヨシケイ</strong>（1食約397円・送料無料）が最適です。
          </p>
          <p className="text-sm leading-relaxed">
            <strong>出産前のストックがポイント。</strong>産後に「宅配弁当を探す余裕」はありません。妊娠後期のうちに20〜30食をストックしておけば、産後1ヶ月の食事問題をまるごと解決できます。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の口コミ・評判を徹底調査
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            三ツ星ファームの口コミ・評判を徹底調査
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食の専門ライターチーム。実際にサービスを利用し、公平な比較情報をお届けします。</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】三ツ星ファームの口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5</Link></li>
            <li><Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark transition-colors">ダイエット向け宅配弁当おすすめランキングTOP5</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
