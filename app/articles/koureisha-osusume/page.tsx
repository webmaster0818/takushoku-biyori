import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】高齢者向け宅配弁当おすすめランキングTOP5｜やわらか食・制限食も徹底比較";
const ARTICLE_DESCRIPTION =
  "高齢者におすすめの宅配弁当を管理栄養士監修で徹底比較。やわらか食・塩分制限・たんぱく調整・ムース食対応の宅食サービスTOP5を発表。離れて暮らすご家族からの注文方法、介護食との違い、見守りサービスまで、シニアの宅食選びに必要な情報を網羅。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/koureisha-osusume/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅配弁当 高齢者 おすすめ, 高齢者 宅食, シニア 宅配弁当, 高齢者 食事 宅配, やわらか食 宅配弁当, 制限食 宅配, 高齢者 冷凍弁当, 介護食 宅配",
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
    question: "高齢の親に宅配弁当を送りたいのですが、離れた場所から注文できますか？",
    answer:
      "はい、ほとんどの宅配弁当サービスは「注文者の住所」と「届け先の住所」を別々に設定できます。ウェルネスダイニング・まごころケア食・食宅便はいずれも対応。注文はお子様がWebや電話で行い、届け先をご両親の住所にすれば、離れて暮らしていても定期的に食事を届けられます。ウェルネスダイニングは管理栄養士への電話相談もできるので、ご両親の健康状態に合ったコースを相談してから注文できます。",
  },
  {
    question: "「やわらか食」と「ムース食」の違いは何ですか？",
    answer:
      "やわらか食は通常の食事に近い見た目で、歯ぐきでつぶせる程度のやわらかさに調理したもの。噛む力がやや弱くなった方向けです。ムース食は食材をペースト状にして再形成したもので、噛む力・飲み込む力がかなり弱くなった方向け。見た目は食材の形を再現していますが、舌でつぶせる柔らかさです。ウェルネスダイニングは「やわらかさ3段階」で選べ、食宅便は「やわらかい食事」、まごころケア食は「ムース食」に対応しています。",
  },
  {
    question: "宅配弁当は毎日届けてもらえますか？配達頻度を選べますか？",
    answer:
      "冷凍宅配弁当は7食・14食・21食セットをまとめて配送するスタイルが基本で、毎日届くわけではありません。配送頻度は1週間に1回・2週間に1回・3週間に1回・月1回などから選べます。一方、常温・冷蔵の宅配弁当（ワタミの宅食、配食のふれ愛など）は毎日届けてくれるサービスもあり、見守り機能を兼ねる場合もあります。高齢者の状況に合わせて選びましょう。",
  },
  {
    question: "宅配弁当で塩分制限や糖質制限はどの程度対応していますか？",
    answer:
      "ウェルネスダイニングは塩分制限食（塩分2.0g以下）、糖質制限食（糖質15g以下）、たんぱく質調整食（たんぱく質10g以下）、カロリー制限食（240kcal±10%）と4つの制限食コースを用意。まごころケア食も塩分制限食・糖質制限食・たんぱく調整食・カロリー調整食の4コースがあります。食宅便も低糖質セレクト（糖質10g以下）、塩分ケア（塩分2.0g以下）など充実。持病による食事制限がある方は、これらのサービスから選ぶのが安心です。",
  },
  {
    question: "介護保険で宅配弁当の費用は補助されますか？",
    answer:
      "冷凍宅配弁当サービス（nosh・ウェルネスダイニング等）は介護保険の対象外です。ただし、市区町村が独自に実施する「配食サービス」は、要介護・要支援認定を受けた方に食事代の一部を助成する制度がある場合があります。補助金額は自治体によって異なり、1食あたり200〜400円の補助が出るケースが多いです。お住まいの市区町村の高齢福祉課や地域包括支援センターに問い合わせると、利用可能な制度がわかります。",
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
          <span className="text-foreground">高齢者向け宅配弁当おすすめ</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "why", label: "高齢者に宅配弁当がおすすめな理由" },
    { id: "how-to-choose", label: "高齢者向け宅食の選び方5つのポイント" },
    { id: "ranking", label: "【ランキング】高齢者におすすめの宅配弁当TOP5" },
    { id: "detail-review", label: "各サービスの詳細レビュー" },
    { id: "price-compare", label: "料金比較表" },
    { id: "menu-example", label: "高齢者向けメニューの実例紹介" },
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

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent/10">
            {headers.map((h) => (
              <th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>
              ))}
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
  return (
    <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>&#9733;</span>
      ))}
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
              <li key={f} className="flex items-start gap-1.5"><span className="text-accent mt-0.5">&#10003;</span><span>{f}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-medium text-accent mb-1">メリット</p>
          <ul className="space-y-1">{pros.map((p) => (<li key={p} className="leading-relaxed">{p}</li>))}</ul>
        </div>
        <div>
          <p className="font-medium text-red-600 mb-1">デメリット</p>
          <ul className="space-y-1">{cons.map((c) => (<li key={c} className="leading-relaxed text-foreground/70">{c}</li>))}</ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- Page Component ---------- */

export default function KoureishaOsusumePage() {
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
    name: "高齢者におすすめの宅配弁当ランキングTOP5",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ウェルネスダイニング", description: "7つの専門コース（やわらか食・塩分制限・たんぱく調整等）。管理栄養士に無料相談可。高齢者の食事制限に最も幅広く対応。", url: "https://www.wellness-dining.com/" },
      { "@type": "ListItem", position: 2, name: "まごころケア食", description: "1食470円〜で送料無料。シルバーライフ運営の高齢者特化サービス。やわらか食・ムース食対応。", url: "https://magokoro-care-shoku.com/" },
      { "@type": "ListItem", position: 3, name: "食宅便", description: "日清医療食品が運営。病院・介護施設への給食実績あり。やわらかい食事コース完備。約160種類のメニュー。", url: "https://shokutakubin.com/" },
      { "@type": "ListItem", position: 4, name: "nosh（ナッシュ）", description: "60種類以上のメニューから自由に選べる。全メニュー糖質30g以下。元気なシニアのバランス食に。", url: "https://nosh.jp/" },
      { "@type": "ListItem", position: 5, name: "Dr.つるかめキッチン", description: "専門医・管理栄養士のダブル監修。糖尿病食・腎臓病食・高血圧食に特化した制限食専門サービス。", url: "https://tsurukame-kitchen.com/" },
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
            「高齢の親が一人暮らしで栄養が偏っていないか心配...」「糖尿病や高血圧で食事制限が必要だけど、自炊が難しくなってきた」——そんな高齢者の食事の悩みを解決するのが<strong>シニア向け宅配弁当</strong>です。
          </p>
          <p className="mb-3">
            最近の宅配弁当は、やわらか食・ムース食・塩分制限・たんぱく調整など、高齢者特有のニーズに細かく対応。管理栄養士が設計した栄養バランスの取れた食事が、レンジで温めるだけで毎日食べられます。
          </p>
          <p>
            この記事では、<strong>高齢者向け宅配弁当5社をやわらか食対応・制限食・価格で徹底比較</strong>し、おすすめランキングTOP5を発表。さらに<strong>離れて暮らすご家族からの注文方法</strong>や<strong>介護保険の活用法</strong>まで、シニアの宅食選びに必要な情報をすべてまとめました。
          </p>
        </div>

        <TableOfContents />

        {/* ===== おすすめな理由 ===== */}
        <SectionHeading id="why">高齢者に宅配弁当がおすすめな5つの理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          高齢者の食事問題は「栄養の偏り」「買い物の負担」「調理の危険性」など多岐にわたります。宅配弁当が高齢者の食生活をどう改善するのか、5つの観点から解説します。
        </p>

        {[
          {
            icon: "&#127860;",
            title: "管理栄養士が設計した栄養バランスで低栄養を防ぐ",
            text: "高齢者の約15〜20%が低栄養状態と言われています。一人暮らしの高齢者は「お茶漬けだけ」「パンとお茶だけ」のような食事になりがちで、たんぱく質・ビタミン・ミネラルが不足しやすい状況。宅配弁当は管理栄養士が1食の栄養バランスを計算して設計しているため、「食べるだけ」で必要な栄養素をまんべんなく摂取できます。特にたんぱく質は筋肉量の維持に不可欠で、フレイル（要介護の前段階）予防に直結します。",
          },
          {
            icon: "&#128293;",
            title: "火を使わないから安全。コンロの消し忘れリスクがゼロ",
            text: "高齢者の住宅火災の主な原因は「コンロの消し忘れ」。宅配弁当は電子レンジで4〜6分温めるだけなので、コンロを一切使いません。認知機能が低下し始めた高齢者でも安全に食事の準備ができます。包丁も使わないため、手指の力や視力が衰えた方でもケガのリスクがありません。ご家族にとっても「親が安全に食事できている」という安心感は大きなメリットです。",
          },
          {
            icon: "&#128717;",
            title: "買い物の負担がゼロ。重い食材を運ぶ必要なし",
            text: "高齢者にとってスーパーへの買い物は大きな負担です。重い食材を持って歩く、バスに乗る、天候の悪い日も出かける——これらの負担が宅配弁当なら完全にゼロに。冷凍弁当は7食〜21食まとめて届くので、週に1〜2回の受け取りだけ。定期便にすれば自動的に届くので、注文の手間すら不要です。足腰が弱くなった方、車の運転をやめた方に特におすすめです。",
          },
          {
            icon: "&#129657;",
            title: "やわらか食・ムース食など咀嚼力に合わせた食事が選べる",
            text: "加齢により噛む力・飲み込む力が弱くなると、通常の食事が食べにくくなります。宅配弁当のやわらか食は「歯ぐきでつぶせる」柔らかさに調理されており、見た目は普通の食事と変わらないのに食べやすい。さらに柔らかいムース食は「舌でつぶせる」レベルで、嚥下機能が低下した方にも対応。食べやすさのレベルを段階的に選べるのは、介護食専門サービスならではです。",
          },
          {
            icon: "&#128105;",
            title: "離れて暮らすご家族が注文して届けられる安心感",
            text: "宅配弁当は「注文者」と「届け先」を別々に設定できるサービスがほとんど。お子様が東京から注文し、実家の親御さんに直接届けることが可能です。定期便にすれば自動的に届くため「毎週の安否確認」の役割も果たします。ウェルネスダイニングは管理栄養士への電話相談が無料なので、親御さんの健康状態を伝えて最適なコースを選んでもらうこともできます。",
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
        <SectionHeading id="how-to-choose">高齢者向け宅食の選び方5つのポイント</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          高齢者向け宅配弁当は「やわらかさ」「制限食対応」「価格」など、若い世代とは異なるポイントで選ぶ必要があります。
        </p>

        {[
          { num: 1, title: "食事制限への対応（塩分・糖質・たんぱく質）", text: "高血圧なら塩分2.0g以下、糖尿病なら糖質制限食、腎臓病ならたんぱく質調整食が必要です。ウェルネスダイニングは7つの専門コース、まごころケア食は6つのコースで幅広い制限食に対応。まずはかかりつけ医に「どの栄養素を制限すべきか」を確認し、対応するコースがあるサービスを選びましょう。" },
          { num: 2, title: "やわらかさのレベル（通常→やわらか→ムース）", text: "噛む力・飲み込む力に合わせて選ぶことが重要。ウェルネスダイニングの「やわらかダイニング」は3段階（ちょっとやわらかめ・かなりやわらかめ・ムースやわらか）から選べます。食宅便の「やわらかい食事」は歯ぐきでつぶせるレベル。まごころケア食の「ムース食」は舌でつぶせるレベル。迷ったらウェルネスダイニングの管理栄養士に相談するのがおすすめです。" },
          { num: 3, title: "価格と送料（年金生活でも続けられるか）", text: "高齢者の宅配弁当は長期利用が前提。月額1万円〜1.5万円が無理のない目安です。まごころケア食は1食470円〜で送料無料、月額約9,870円（21食）と最も経済的。ウェルネスダイニングは定期便で送料385円。年金収入で毎月続けられる価格かを必ず確認しましょう。" },
          { num: 4, title: "注文方法の簡単さ（電話注文対応があるか）", text: "高齢者本人が注文する場合、スマホやPCの操作が難しいケースがあります。ウェルネスダイニングとまごころケア食は電話注文に対応しており、オペレーターと話しながら注文できます。食宅便もカタログからの電話注文が可能。ご家族が代わりに注文する場合はWeb注文で問題ありませんが、本人が注文する場合は電話対応の有無を確認しましょう。" },
          { num: 5, title: "味付けの優しさ（塩分控えめでも美味しいか）", text: "高齢者向けの宅配弁当は塩分を控えめにする必要がありますが、味が薄すぎると食欲が落ちて低栄養を招きます。ウェルネスダイニングは出汁や香辛料を活用して減塩でも美味しさを保つ工夫がされており、「薄味だけど美味しい」と高齢者の利用者から好評。まごころケア食も家庭的な優しい味付けで「毎日食べても飽きない」と評価されています。" },
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
        <SectionHeading id="ranking">【ランキング】高齢者におすすめの宅配弁当TOP5</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          制限食対応・やわらか食・価格・味・注文のしやすさの5項目で総合評価し、高齢者におすすめの宅配弁当TOP5を選出しました。
        </p>

        <RankingCard
          rank={1}
          name="ウェルネスダイニング"
          tagline="制限食の種類No.1。管理栄養士に無料相談できる安心感"
          color="bg-yellow-50"
          features={[
            "7つの専門コース（制限食+やわらか食）",
            "管理栄養士に電話で無料栄養相談",
            "やわらかさ3段階から選べる",
            "定期便で送料半額（385円）",
          ]}
          price="663円〜（7食プラン）"
          shipping="770円〜（定期便385円）"
          pros={[
            "制限食の種類が業界最多",
            "管理栄養士に個別相談できる唯一のサービス",
            "やわらか食3段階で細かく選べる",
            "離れた家族からの注文にも対応",
          ]}
          cons={[
            "メニューが自分で選べない（コース制）",
            "味は素朴（レストラン品質ではない）",
            "解約は電話のみ",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          高齢者に最もおすすめなのがウェルネスダイニング。塩分制限・糖質制限・たんぱく調整・カロリー制限・やわらか食と、高齢者に必要な制限食を網羅。管理栄養士への無料電話相談で「父は糖尿病で腎臓も悪いのですが、どのコースがいい？」といった複雑な相談もできます。詳しくは<Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark underline">ウェルネスダイニングの口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={2}
          name="まごころケア食"
          tagline="送料無料×圧倒的コスパ。年金生活でも安心の価格"
          color="bg-amber-50"
          features={[
            "1食あたり470円〜の業界最安水準",
            "全国送料無料",
            "6つの制限食コース（ムース食含む）",
            "冷凍庫無料レンタルあり",
          ]}
          price="470円〜（14食プラン）"
          shipping="無料"
          pros={[
            "送料無料で実質コスト最安クラス",
            "シルバーライフ運営で高齢者に特化",
            "ムース食まで対応",
            "冷凍庫を無料で借りられる（条件あり）",
          ]}
          cons={[
            "メニューが自分で選べない（コース制）",
            "味は家庭的（グルメ志向には物足りない）",
            "栄養相談はウェルネスダイニングほど手厚くない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          コストを最優先する高齢者にはまごころケア食。1食470円〜で全国送料無料は、年金生活の方でも無理なく続けられる価格設定。高齢者向け配食サービスを専門とするシルバーライフが運営しており、優しい味付けと食べやすさに定評があります。冷凍庫が小さい方向けに冷凍庫の無料レンタル（条件あり）もあるのは高齢者に嬉しいサービスです。詳しくは<Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark underline">まごころケア食の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={3}
          name="食宅便"
          tagline="日清医療食品の信頼感。病院給食レベルの安心品質"
          color="bg-blue-50"
          features={[
            "日清医療食品が運営（病院・介護施設の給食実績）",
            "約160種類のメニュー",
            "やわらかい食事コース完備",
            "低糖質セレクト・塩分ケアコースあり",
          ]}
          price="560円〜（7食プラン）"
          shipping="780円"
          pros={[
            "病院や介護施設への給食実績がある信頼性",
            "メニュー160種類以上で飽きにくい",
            "やわらかい食事コースの品質が高い",
          ]}
          cons={[
            "送料がまごころケア食より高い",
            "注文がWebメイン（高齢者本人には難しい場合も）",
            "アプリがない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          医療食品メーカーの信頼感を重視する方には食宅便。日清医療食品は全国約5,300の病院・介護施設に給食を提供しており、医療レベルの栄養管理ノウハウが冷凍弁当にも活かされています。詳しくは<Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark underline">食宅便の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={4}
          name="nosh（ナッシュ）"
          tagline="元気なシニアに。メニュー自由度No.1の宅配弁当"
          color="bg-green-50"
          features={[
            "60種類以上から自由に選べる",
            "全メニュー糖質30g以下・塩分2.5g以下",
            "スマホアプリ対応",
            "nosh club割引で最大16.55%OFF",
          ]}
          price="599円〜（10食プラン）"
          shipping="913円〜（関東）"
          pros={[
            "メニューの自由度が業界No.1",
            "糖質・塩分が自動的に制限される",
            "お孫さんと一緒にアプリで選ぶ楽しさ",
          ]}
          cons={[
            "やわらか食やムース食がない",
            "送料が地域差大",
            "アプリ操作が高齢者には難しい場合がある",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          噛む力・飲み込む力に問題のない元気なシニアにはnoshもおすすめ。全メニュー糖質30g以下・塩分2.5g以下で、意識しなくても糖質・塩分制限ができます。メニューを自分で選べる楽しさがあり、「食の自由」を大切にしたいアクティブシニアに人気。詳しくは<Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline">nosh(ナッシュ)の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={5}
          name="Dr.つるかめキッチン"
          tagline="専門医+管理栄養士のダブル監修。持病がある方に"
          color="bg-purple-50"
          features={[
            "専門医が監修した制限食",
            "糖尿病食・腎臓病食・高血圧食に特化",
            "管理栄養士による栄養相談",
            "定期便で送料無料",
          ]}
          price="684円〜（7食プラン）"
          shipping="770円〜（定期便無料）"
          pros={[
            "専門医監修の制限食は高齢者に安心",
            "定期便で送料無料はコスパ良好",
            "持病に特化したきめ細かいメニュー設計",
          ]}
          cons={[
            "メニューが自分で選べない",
            "知名度がウェルネスダイニングより低い",
            "メニュー数がやや少ない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          糖尿病・腎臓病・高血圧などの持病があり、医師の指導のもと食事管理が必要な方にはDr.つるかめキッチン。糖尿病専門医や腎臓病専門医が監修しており、医療レベルの制限食を自宅で手軽に食べられます。定期便で送料無料なのもコスパが良い。
        </p>

        {/* ===== 詳細レビュー ===== */}
        <SectionHeading id="detail-review">各サービスの詳細レビュー</SectionHeading>

        <SubHeading>ウェルネスダイニング - 高齢者対応力No.1</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          ウェルネスダイニングが高齢者に最もおすすめな理由は「対応力の広さ」。糖質制限食（糖質15g以下）、塩分制限食（塩分2.0g以下）、たんぱく質調整食（たんぱく質10g以下）、カロリー制限食（240kcal±10%）、やわらかダイニング（3段階）と、高齢者に必要な制限食をほぼすべてカバー。管理栄養士への電話相談で「母は糖尿病と腎臓病を併発しているのですが...」といった複雑なケースにも対応してもらえます。出汁や香辛料を活用した減塩調理で、「塩分が少なくても美味しい」と利用者から好評。定期便なら送料385円と良心的です。
        </p>

        <SubHeading>まごころケア食 - 高齢者専門のコスパ王</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          まごころケア食は、高齢者向け配食サービスを専門とするシルバーライフが運営。高齢者の味覚や食べやすさを熟知した上でメニューを開発しており、「優しい味付けで毎日食べても飽きない」という評価が多い。1食470円〜で全国送料無料という圧倒的なコスパは、年金生活の高齢者にとって大きな魅力。冷凍庫無料レンタル（定期便で14食以上注文の場合）もあり、冷凍庫が小さい高齢者世帯にも対応できます。ムース食にも対応しており、嚥下機能が低下した方でも利用可能です。
        </p>

        <SubHeading>食宅便 - 病院給食レベルの安心品質</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          食宅便を運営する日清医療食品は、全国約5,300の病院・介護施設に給食を提供している国内最大の医療食品メーカー。この実績に基づく栄養管理ノウハウが冷凍宅配弁当にも活かされており、「やわらかい食事」コースは見た目は普通の食事なのに歯ぐきでつぶせる柔らかさ。約160種類のメニューは業界トップクラスの豊富さで、長期利用しても飽きにくいのが強み。低糖質セレクト（糖質10g以下）、塩分ケア（塩分2.0g以下）など、制限食のバリエーションも充実しています。
        </p>

        <SubHeading>nosh - アクティブシニアの自由な食生活に</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          noshは「やわらか食」「ムース食」がないため、咀嚼・嚥下機能に問題のある方には向きません。しかし、元気なシニアにとっては60種類以上のメニューから自由に選べる楽しさが最大の魅力。全メニュー糖質30g以下・塩分2.5g以下で、意識しなくても生活習慣病予防に適した食事が取れます。お孫さんと一緒にアプリでメニューを選ぶ楽しみがあり、「食を通じた家族のコミュニケーション」にもなります。
        </p>

        <SubHeading>Dr.つるかめキッチン - 専門医監修の安心感</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          Dr.つるかめキッチンは、糖尿病専門医・腎臓病専門医・生活習慣病専門医が監修する制限食専門サービス。「医師が監修している」という安心感は、持病のある高齢者やそのご家族にとって大きな判断材料です。糖尿病食は糖質15g以下・塩分2.0g以下・カロリー240kcal±10%、腎臓病食はたんぱく質10g以下・カリウム500mg以下・塩分2.0g以下と、細かい栄養制限に対応。定期便で送料無料になるのもコスパ面で優秀です。
        </p>

        {/* ===== 料金比較 ===== */}
        <SectionHeading id="price-compare">料金比較表</SectionHeading>

        <SubHeading>5社の料金・対応食比較一覧</SubHeading>
        <ComparisonTable
          headers={["サービス", "1食あたり", "送料", "やわらか食", "制限食", "栄養相談"]}
          rows={[
            ["ウェルネスダイニング", "663円〜", "定期385円", "3段階", "7コース", "無料"],
            ["まごころケア食", "470円〜", "無料", "ムース食あり", "6コース", "なし"],
            ["食宅便", "560円〜", "780円", "あり", "5コース以上", "なし"],
            ["nosh", "599円〜", "913円〜", "なし", "糖質30g以下のみ", "なし"],
            ["Dr.つるかめキッチン", "684円〜", "定期無料", "なし", "4コース", "あり"],
          ]}
        />

        <SubHeading>月額コストシミュレーション（毎日夕食利用）</SubHeading>
        <ComparisonTable
          headers={["サービス", "プラン", "食材費/月", "送料/月", "月額合計"]}
          rows={[
            ["ウェルネスダイニング", "21食×約1.4回", "約18,500円", "約540円", "約19,040円"],
            ["まごころケア食", "21食×約1.4回", "約13,200円", "0円", "約13,200円"],
            ["食宅便", "7食×約4.3回", "約16,800円", "約3,350円", "約20,150円"],
            ["nosh", "10食×3回", "約17,970円", "約2,739円", "約20,709円"],
            ["Dr.つるかめキッチン", "21食×約1.4回", "約20,060円", "0円", "約20,060円"],
          ]}
        />

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">高齢者のコスパの結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>最安：まごころケア食</strong>（月約13,200円）——送料無料の効果が非常に大きい</li>
            <li><strong>相談付き：ウェルネスダイニング</strong>（月約19,040円）——管理栄養士の相談料込みと考えれば妥当</li>
            <li><strong>信頼感：食宅便</strong>（月約20,150円）——病院給食メーカーの安心品質</li>
            <li><strong>持病重視：Dr.つるかめキッチン</strong>（月約20,060円）——専門医監修で定期便送料無料</li>
          </ul>
        </div>

        {/* ===== メニュー実例 ===== */}
        <SectionHeading id="menu-example">高齢者向けメニューの実例紹介</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「実際にどんなメニューが届くのか」をイメージしていただくため、各サービスの高齢者向けメニューの例を紹介します。
        </p>

        <SubHeading>ウェルネスダイニング - 塩分制限食の例</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "カロリー", "塩分", "たんぱく質"]}
          rows={[
            ["鶏肉の照り焼き風", "約270kcal", "1.8g", "16.5g"],
            ["さわらの西京焼き", "約240kcal", "1.5g", "14.2g"],
            ["豚肉の生姜焼き風", "約290kcal", "1.9g", "17.8g"],
          ]}
        />

        <SubHeading>まごころケア食 - 健康バランス食の例</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "カロリー", "塩分", "たんぱく質"]}
          rows={[
            ["さばの味噌煮", "約280kcal", "2.0g", "15.3g"],
            ["肉じゃが", "約260kcal", "1.8g", "12.5g"],
            ["鮭の塩焼きと煮物", "約250kcal", "1.9g", "16.1g"],
          ]}
        />

        <SubHeading>高齢者の1日の食事プラン例（1日1,600kcal目標）</SubHeading>
        <ComparisonTable
          headers={["食事", "メニュー例", "カロリー", "塩分"]}
          rows={[
            ["朝食", "ご飯150g+味噌汁+卵焼き+漬物少量", "約450kcal", "約2.0g"],
            ["昼食", "うどん+野菜の煮物", "約500kcal", "約2.5g"],
            ["夕食", "ウェルネスダイニング塩分制限食+ご飯100g", "約430kcal", "約1.8g"],
            ["合計", "", "約1,380kcal", "約6.3g"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          高齢者の1日の塩分目標は6.5g以下（日本高血圧学会推奨）。夕食をウェルネスダイニングの塩分制限食にすれば、1日の塩分を6g台に抑えることが可能です。朝食・昼食の塩分も意識すると、さらに効果的です。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：高齢者の宅食選び、迷ったらウェルネスダイニングから</SectionHeading>

        <SubHeading>目的別おすすめ早見表</SubHeading>
        <ComparisonTable
          headers={["ご高齢者の状況", "おすすめサービス"]}
          rows={[
            ["食事制限あり（糖尿・高血圧等）", "ウェルネスダイニング"],
            ["コスパ最優先（年金生活）", "まごころケア食"],
            ["やわらか食・ムース食が必要", "ウェルネスダイニング or まごころケア食"],
            ["医療食品メーカーの安心感重視", "食宅便"],
            ["元気でメニューを自分で選びたい", "nosh（ナッシュ）"],
            ["専門医監修の制限食が必要", "Dr.つるかめキッチン"],
          ]}
        />

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/10">
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネス</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">まごころ</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">食宅便</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">つるかめ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["高齢者おすすめ度", 5, 5, 4, 3, 4],
                  ["制限食対応", 5, 4, 4, 2, 5],
                  ["やわらか食", 5, 4, 4, 1, 1],
                  ["コスパ", 3, 5, 3, 3, 3],
                  ["相談サポート", 5, 2, 2, 1, 4],
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
            高齢者の宅食選びで迷ったら、まずは<strong>ウェルネスダイニング</strong>がおすすめです。制限食の種類が最も多く、管理栄養士への無料相談で「自分（または親御さん）に合ったコース」を一緒に選んでもらえます。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            コスト重視の方は<strong>まごころケア食</strong>（1食470円〜・送料無料）が最適。年金生活でも無理なく続けられる価格で、高齢者に特化した優しい味付けが好評です。
          </p>
          <p className="text-sm leading-relaxed">
            「親がちゃんと食べているか心配」「火を使った料理が危なくなってきた」——そんな高齢者の食事の悩み、宅配弁当で安全に解決してみませんか。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ウェルネスダイニングの口コミ・評判を徹底調査
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            まごころケア食の口コミ・評判を徹底調査
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
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】ウェルネスダイニングの口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】まごころケア食の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】食宅便の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
