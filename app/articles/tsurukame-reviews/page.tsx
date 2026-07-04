import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "Dr.つるかめキッチンの口コミ・評判は？まずいって本当？制限食5コースの料金・味を出典付きで検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "Dr.つるかめキッチンは「まずい」って本当？公開レビューの良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。専門医・管理栄養士W監修の制限食5コース（糖質制限/塩分制限/たんぱく質制限/カロリー制限/バランス栄養）の料金・送料も2026年7月4日確認の公式データで解説します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/tsurukame-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "つるかめキッチン 口コミ, Dr.つるかめキッチン 評判, つるかめキッチン 料金, つるかめキッチン 糖質制限, つるかめキッチン 塩分制限, 制限食 宅配弁当",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-21T00:00:00+09:00",
    modifiedTime: "2026-07-04T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "Dr.つるかめキッチンはまずいって本当？",
    answer:
      "公開レビューを確認すると、実食メディアの評価は「制限食としては味がしっかりしていて美味しい」でおおむね一致しています。一方で「正直あんまり美味しくない」というX投稿や酷評のAmazonレビューも実在します。糖質15g以下・塩分2.0g以下という制約の中の味付けのため、一般の弁当と同じ物差しで見ると物足りなく感じる人がいるのは事実です。感じ方には個人差があるため、回数縛りのない定期購入で1回試して判断するのが確実です。",
  },
  {
    question: "Dr.つるかめキッチンはお試しできる？",
    answer:
      "専用の「お試しセット」は用意されていませんが、定期購入は購入回数の縛りがなく、いつでも解約可能です。実質的に初回1回だけ注文して解約することもできるため、定期購入で7食セットを注文して味を確認し、合わなければ解約するという方法がおすすめです。定期購入なら28%OFFかつ送料無料で試せます。",
  },
  {
    question: "Dr.つるかめキッチンのメニューは選べる？",
    answer:
      "メニューは自分で選ぶことができません。管理栄養士がバランスを考えて選んだメニューがおまかせで届きます。栄養制限値を厳密に管理するためにこのような方式を採用しており、「メニューを選ぶ手間がない」と前向きに捉える利用者も多いです。ただし、届くまで内容がわからない点はデメリットと感じる方もいます。",
  },
  {
    question: "糖尿病の食事療法にDr.つるかめキッチンは使える？",
    answer:
      "Dr.つるかめキッチンの「糖質制限気づかい御膳」は1食あたり糖質15g以下・カロリー240kcal(±10%)・塩分2.0g以下に設定されており、糖尿病の食事療法に活用している方もいます。ただし、あくまで食事の補助であり、医師の指導のもとで利用することが大切です。主治医と相談の上でご利用ください。",
  },
  {
    question: "Dr.つるかめキッチンと食宅便・ウェルネスダイニングの違いは？",
    answer:
      "3社とも制限食を扱っていますが、Dr.つるかめキッチンは「専門医＋管理栄養士のW監修」が最大の特徴。糖尿病専門医、腎臓病専門医などの各分野の専門医が監修しています。食宅便は日清医療食品の大規模な製造体制が強み、ウェルネスダイニングは管理栄養士への電話相談が無料で利用できる点が差別化ポイントです。",
  },
  {
    question: "定期購入の解約方法は？",
    answer:
      "電話で解約できます（0120-666-637）。次回お届け予定日の6日前までに連絡すれば、購入回数に関係なく解約可能で、解約金は一切かかりません。解約ではなく「休止」や「配送間隔の変更」も電話で対応してもらえます。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">口コミ・評判</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">Dr.つるかめキッチンの口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "Dr.つるかめキッチンとは？基本情報" },
    { id: "courses", label: "制限食5コースの詳細と料金" },
    { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "Dr.つるかめキッチンはまずい？味の評判を検証" },
    { id: "price", label: "料金・送料を徹底解説" },
    { id: "merits", label: "メリット4つ" },
    { id: "demerits", label: "デメリット3つ" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (<li key={s.id}><a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a></li>))}
      </ol>
    </nav>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead><tr className="bg-accent/10">{headers.map((h) => (<th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>))}</tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>{row.map((cell, j) => (<td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>))}</tr>))}</tbody>
      </table>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-warm-border rounded-lg mb-3 group">
      <summary className="flex items-center justify-between p-4 font-medium text-sm hover:bg-cream/50 transition-colors"><span>{question}</span><span className="faq-arrow text-warm-gray ml-2">&#9660;</span></summary>
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

type SourcedReviewItem = {
  text: string;
  meta?: string;
  sourceName: string;
  sourceUrl: string;
};

function SourcedReview({
  review,
  tone,
}: {
  review: SourcedReviewItem;
  tone: "good" | "bad";
}) {
  return (
    <div
      className={`${tone === "good" ? "bg-green-50" : "bg-red-50"} rounded-lg p-3 text-sm leading-relaxed`}
    >
      <p className="mb-1.5">
        「{review.text}」{review.meta ? `（${review.meta}）` : ""}
      </p>
      <p className="text-xs text-warm-gray">
        出典:{" "}
        <a
          href={review.sourceUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline hover:text-accent"
        >
          {review.sourceName}
        </a>
      </p>
    </div>
  );
}

/* ---------- Review data（公開レビューからの引用・出典明記） ---------- */

const goodReviewCategories: {
  title: string;
  reviews: SourcedReviewItem[];
}[] = [
  {
    title: "制限食なのに味がしっかりしている",
    reviews: [
      {
        text: "しっかりとした味付けで、ご飯がすすみました",
        meta: "宅食比較サイト編集長の実食レビュー",
        sourceName: "宅食リスト",
        sourceUrl: "https://takusyokulist.com/tsurukame/",
      },
      {
        text: "塩分控えめですが、ソースを使った味付けが上手でした",
        meta: "1,000食以上を実食した会社員ブロガー",
        sourceName: "ひとり暮らしの宅配食生活",
        sourceUrl: "https://www.single-meallife.com/tsurukame-kitchen-review/",
      },
      {
        text: "健康的な食事だから期待してなかったけど、普通に美味しい",
        meta: "記事掲載のX（旧Twitter）投稿",
        sourceName: "おうちごはん研究所",
        sourceUrl: "https://home-gohan.net/tsurukame-kitchen/",
      },
    ],
  },
  {
    title: "専門医監修の安心感",
    reviews: [
      {
        text: "専門医監修で安心して食べられるのもよかったです",
        meta: "宅食比較サイト編集長の実食レビュー",
        sourceName: "宅食リスト",
        sourceUrl: "https://takusyokulist.com/tsurukame/",
      },
      {
        text: "制限食と考えれば充分おいしいです",
        meta: "記事筆者の実食総評",
        sourceName: "宅食ラボ",
        sourceUrl: "https://takushoku-lab.com/tsurukame-kitchen-isnt-tasty/",
      },
    ],
  },
];

const badReviewCategories: {
  title: string;
  reviews: SourcedReviewItem[];
  comment: string;
}[] = [
  {
    title: "メニューが選べない（完全おまかせ）",
    reviews: [
      {
        text: "つるかめキッチンのメニューの内容は自分で選ぶことができません",
        meta: "42食実食の会社員ブロガー",
        sourceName: "ひとり暮らしの宅配食生活",
        sourceUrl: "https://www.single-meallife.com/tsurukame-kitchen-review/",
      },
    ],
    comment:
      "栄養制限値を厳密に管理するため、メニューは管理栄養士のおまかせ制です。「選ぶ手間がない」と前向きに捉える利用者もいますが、好き嫌いが多い方には不向きです。noshのように自分で選びたい方は他社を検討しましょう。",
  },
  {
    title: "価格がやや高め（特に都度購入）",
    reviews: [
      {
        text: "ただ一食700円くらいなので、自炊に比べたらまあまあなお値段しました",
        meta: "記事掲載のX（旧Twitter）投稿",
        sourceName: "宅食ラボ",
        sourceUrl: "https://takushoku-lab.com/tsurukame-kitchen-isnt-tasty/",
      },
      {
        text: "つるかめキッチンのデメリットは、単品で購入するとやや高めなことです",
        meta: "年間300食の宅配弁当を食べる記事筆者の実食評",
        sourceName: "おいしい宅食",
        sourceUrl: "https://oishi-takushoku.com/tsurukame-kitchen/",
      },
    ],
    comment:
      "定期コース（28%OFF・送料無料）なら7食5,184円＝1食約741円ですが、都度購入は7食7,228円＋送料770円＝1食約1,143円と割高です。回数縛りのない定期で注文するのが前提のサービスと考えましょう（料金は2026年7月4日の公式サイト確認時点）。",
  },
  {
    title: "量が控えめで男性には物足りないことも",
    reviews: [
      {
        text: "成人男性だとボリュームが足りないと感じるかもしれません",
        meta: "42食実食の会社員ブロガー",
        sourceName: "ひとり暮らしの宅配食生活",
        sourceUrl: "https://www.single-meallife.com/tsurukame-kitchen-review/",
      },
    ],
    comment:
      "カロリー・糖質を制限値内に収める設計のため、量はどうしても控えめです。ご飯や汁物を組み合わせて満腹感を調整するのが現実的な使い方です。",
  },
];

export default function TsurukameReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: ARTICLE_TITLE, description: ARTICLE_DESCRIPTION, url: ARTICLE_URL,
    datePublished: "2026-04-21T00:00:00+09:00", dateModified: "2026-07-04T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: { "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Dr.\u3064\u308b\u304b\u3081\u30ad\u30c3\u30c1\u30f3\u306e\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}]}" }}
      />
      

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time><span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">「Dr.つるかめキッチンって実際どうなの？」「制限食なのに美味しいって本当？」——糖尿病・腎臓病・高血圧などの食事制限が必要な方に向けた宅配弁当サービス、Dr.つるかめキッチン。</p>
          <p className="mb-3">この記事では、<strong>Dr.つるかめキッチンの口コミ・評判を徹底リサーチ</strong>。専門医・管理栄養士がW監修する5つの制限食コースの内容、料金、そして定期購入で全国送料無料になる仕組みを詳しく解説します。</p>
          <p>「制限食を探しているけど、味が心配」「他社の制限食と何が違うの？」という方は、ぜひ参考にしてください。</p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：Dr.つるかめキッチンはこんな人に向いています</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm leading-relaxed mb-4">
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p><ul className="space-y-1 list-disc list-inside"><li>専門医＋管理栄養士のW監修で、医学的根拠に基づいた制限食という安心感</li><li>糖質・塩分・たんぱく質・カロリー・バランスの制限食コースから選べる</li><li>「制限食なのに美味しい」との口コミが多く、持病・健康管理層に向く</li></ul></div>
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-warm-gray mb-2">△ 注意したい点</p><ul className="space-y-1 list-disc list-inside"><li>1食あたりの単価が他社よりやや高めと感じる声がある</li><li>都度購入は送料がかかる（定期購入は全国送料無料）</li><li>メニューは選べず完全おまかせのため、好き嫌い・味の好み差が出る</li></ul></div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">Dr.つるかめキッチン 公式サイトで最新の料金・お試しを見る →</a>
        </div>

        <TableOfContents />

        <SectionHeading id="about">Dr.つるかめキッチンとは？基本情報</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">Dr.つるかめキッチンは、株式会社クロスエッジが運営する制限食専門の冷凍宅配弁当サービスです。最大の特徴は<strong>各分野の専門医と管理栄養士によるW監修</strong>。糖尿病専門医、ダイエット専門医、腎臓病専門医などがそれぞれのコースの栄養設計を監修しているため、医学的な根拠に基づいた食事管理ができます。</p>

        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社クロスエッジ"],
            ["サービス内容", "制限食専門の冷凍宅配弁当"],
            ["監修", "専門医＋管理栄養士のW監修"],
            ["コース数", "5コース（糖質/塩分/たんぱく質/カロリー/バランス）"],
            ["食数", "7食・14食・21食セットから選択"],
            ["配送", "ヤマト運輸クール宅急便"],
            ["送料", "定期購入：全国送料無料 / 都度購入：770円"],
            ["配送間隔", "1週間/2週間/3週間/1ヶ月から選択"],
            ["解約", "いつでも可（縛りなし・解約金なし）"],
          ]}
        />

        <SectionHeading id="courses">制限食5コースの詳細と料金</SectionHeading>

        <ComparisonTable
          headers={["コース名", "対象", "栄養制限値", "7食定期（税込）", "1食あたり"]}
          rows={[
            ["糖質制限気づかい御膳", "糖尿病・ダイエット", "糖質15g以下・カロリー240kcal(±10%)・塩分2.0g以下", "5,184円", "約741円"],
            ["塩分制限気づかい御膳", "高血圧・心臓病", "塩分2.0g以下", "5,184円", "約741円"],
            ["たんぱく＆塩分制限気づかい御膳", "腎臓病", "たんぱく質10g以下・塩分2.0g以下・カリウム500mg以下", "5,508円", "約787円"],
            ["カロリー制限気づかい御膳", "ダイエット・肥満", "カロリー240kcal(±10%)・塩分2.5g以下", "5,184円", "約741円"],
            ["つるかめバランス栄養御膳", "健康維持", "カロリー300kcal以下・塩分2.5g以下", "4,968円", "約710円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          上記は<strong>定期購入の料金</strong>です。定期購入を選ぶと通常価格から28%OFFになり、送料も全国無料になります。都度購入の場合は28%割引なし＋送料770円がかかるため、定期購入のほうが圧倒的にお得です。定期購入に回数の縛りはないため、1回だけ注文して解約することも可能です。
        </p>

        <SubHeading>各コースの監修医について</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "糖質制限気づかい御膳", text: "糖尿病専門医が監修。糖質を1食15g以下に厳密にコントロールしながら、出汁や香辛料を活かした味付けで満足感を確保しています。" },
            { title: "塩分制限気づかい御膳", text: "循環器専門医が監修。塩分2.0g以下でありながら、減塩を感じさせない味付けの工夫（レモンや酢、香辛料の活用）がされています。" },
            { title: "たんぱく＆塩分制限気づかい御膳", text: "腎臓病専門医が監修。たんぱく質10g以下・カリウム500mg以下と、腎臓への負担を最小限に抑えた設計です。" },
            { title: "カロリー制限気づかい御膳", text: "ダイエット専門医が監修。240kcal(±10%)で食べ応えを出す工夫として、野菜をたっぷり使い、噛む回数が自然に増えるメニュー構成になっています。" },
            { title: "つるかめバランス栄養御膳", text: "管理栄養士が監修。特定の栄養素を制限するのではなく、総合的な栄養バランスを整えたコースです。健康維持目的の方に。" },
          ].map((item) => (
            <div key={item.title} className="bg-blue-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="good-reviews">良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          公開されている第三者メディアの実食レビューから、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示）。
        </p>
        {goodReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="good" />
              ))}
            </div>
          </div>
        ))}

        <SectionHeading id="bad-reviews">悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ネガティブな意見も出典付きで正直に紹介します。購入前に知っておくべき注意点です。
        </p>
        {badReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="bad" />
              ))}
            </div>
            <div className="bg-cream rounded-lg p-4 text-sm leading-relaxed">
              <p className="font-bold mb-1">編集部の見解</p>
              <p>{category.comment}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="mazui">Dr.つるかめキッチンはまずい？味の評判を検証</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          「つるかめキッチン まずい」と検索されることがあります。公開レビューを確認すると、<strong>実食メディアの評価はおおむね良好な一方、「まずい」という強い酷評も実在する</strong>という構図でした。両方を隠さず紹介します。
        </p>
        <SubHeading>「まずい」という声の実例</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "Dr.つるかめキッチン、毎日食べてるけど、正直、あんまり美味しくない。。。やはり、冷凍のお弁当というのは限界があるのかもと思う。続けるか迷うな。安くはないし。",
              meta: "記事掲載のX（旧Twitter）投稿・毎日利用者",
              sourceName: "宅食ラボ",
              sourceUrl: "https://takushoku-lab.com/tsurukame-kitchen-isnt-tasty/",
            }}
            tone="bad"
          />
          <SourcedReview
            review={{
              text: "びっくりするほど不味い。めったにレビューは書かないが、書かざるを得ないレベル。",
              meta: "記事掲載のAmazonカスタマーレビュー",
              sourceName: "おいしい宅食",
              sourceUrl: "https://oishi-takushoku.com/tsurukame-kitchen/",
            }}
            tone="bad"
          />
        </div>
        <SubHeading>一方で「まずくない・おいしい」という実食評価も</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "まずいなんてことはなく、とってもおいしかったです",
              meta: "編集長実食による「まずい」検証の結論",
              sourceName: "宅食リスト",
              sourceUrl: "https://takusyokulist.com/tsurukame/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "制限食と考えれば充分おいしいです",
              meta: "記事筆者の実食総評",
              sourceName: "宅食ラボ",
              sourceUrl: "https://takushoku-lab.com/tsurukame-kitchen-isnt-tasty/",
            }}
            tone="good"
          />
        </div>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：評価は「制限食としての期待値」で分かれる</p>
          <p>
            酷評は「一般の弁当と同じ物差し」で見た場合に出やすく、実食メディアの多くは「塩分・糖質制限下の食事としては味がしっかりしている」という評価で一致しています。糖質15g以下・塩分2.0g以下という制約の中の味付けである以上、濃い味・ボリューム重視の人には合いません。逆に、制限食を自炊してきた人ほど満足度が高い傾向です。感じ方には個人差があるため、回数縛りのない定期（1回で解約可）でまず7食を試すのが現実的です。
          </p>
        </div>

        <SectionHeading id="price">料金・送料を徹底解説</SectionHeading>
        <p className="text-xs text-warm-gray mb-4">
          ※本セクションの料金・送料は2026年7月4日に編集部が公式サイトで直接確認した金額（税込）です。最新の金額は公式サイトでご確認ください。
        </p>
        <SubHeading>定期購入 vs 都度購入</SubHeading>
        <ComparisonTable
          headers={["項目", "定期購入", "都度購入"]}
          rows={[
            ["価格", "28%OFF", "通常価格"],
            ["送料", "全国送料無料", "全国一律770円"],
            ["7食セット（糖質制限）", "5,184円（741円/食）", "7,228円＋770円＝7,998円（1,143円/食）"],
            ["解約", "いつでも可（縛りなし）", "—"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          <strong>定期購入が圧倒的にお得</strong>です。7食セットの糖質制限コースの場合、定期購入なら5,184円（送料無料）、都度購入なら7,998円（送料込み）と、<strong>1回の注文で2,814円の差</strong>になります。定期購入に縛りはないため、まず定期で注文し、合わなければ次回配送前に解約するのが賢い方法です。
        </p>

        <SubHeading>食数による1食あたりコストの違い</SubHeading>
        <ComparisonTable
          headers={["食数", "糖質制限コース（定期）", "1食あたり"]}
          rows={[
            ["7食セット", "5,184円", "約741円"],
            ["14食セット", "9,828円", "約702円"],
            ["21食セット", "14,364円", "約684円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          編集部が18社の料金・送料を公式サイトで直接確認し、送料込みの1食実質単価に正規化して比較した<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>（2026年7月4日調査）も公開しています。Dr.つるかめキッチンは都度購入だと送料770円が加算される一方、定期コースは送料無料のため、定期前提なら制限食の中では標準的な価格帯です。他社との横並び比較はそちらをご覧ください。
        </p>

        <SectionHeading id="merits">メリット4つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "専門医＋管理栄養士のW監修", text: "糖尿病専門医、腎臓病専門医など各分野の専門医が栄養設計を監修。医学的根拠に基づいた制限食は他社にない強みです。" },
            { title: "定期購入で全国送料無料", text: "北海道・沖縄を含む全国どこでも送料無料。送料が高い地域にお住まいの方には特に大きなメリットです。" },
            { title: "定期購入の縛りなし", text: "購入回数の条件や解約金は一切なし。1回だけ注文して解約することも可能なため、実質お試し感覚で利用できます。" },
            { title: "制限食でも美味しい味付け", text: "出汁・香辛料・酢・レモンなどを活用し、減塩・低糖質でも満足感のある味付け。「制限食＝まずい」のイメージを覆す品質です。" },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="demerits">デメリット3つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "メニューが選べない（完全おまかせ）", text: "栄養制限値を厳密に管理するため、メニューは全ておまかせ。苦手な食材が含まれる可能性があり、好き嫌いが多い方には不向きです。" },
            { title: "1食あたりの価格がやや高め", text: "定期購入でも1食684〜787円と、nosh（499〜698円）やまごころケア食（約470円）と比較するとやや高め。ただし制限食の品質と送料無料を考慮すると妥当な価格帯です。" },
            { title: "解約が電話のみ", text: "解約・休止・変更は電話連絡のみ。noshのようにマイページから解約できるサービスと比較すると、やや不便です。" },
          ].map((item) => (
            <div key={item.title} className="bg-red-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>
        <SubHeading>おすすめな人</SubHeading>
        <div className="space-y-2 mb-6">
          {["糖尿病・腎臓病・高血圧などで食事制限が必要な方", "専門医監修の安心感を求める方", "送料無料で制限食を利用したい方（特に北海道・沖縄）", "自分で栄養計算する手間を省きたい方", "制限食でも美味しい食事を求める方"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-accent mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>
        <SubHeading>おすすめしない人</SubHeading>
        <div className="space-y-2 mb-6">
          {["自分でメニューを選びたい方", "1食500円以下のコスパ重視の方", "制限食が不要な健康な方（バランス栄養御膳は例外）"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>

        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/wellness-dining-reviews/", label: "ウェルネスダイニングの口コミ・評判" },
            { href: "/articles/shokutakubin-reviews/", label: "食宅便の口コミ・評判" },
            { href: "/articles/koureisha-osusume/", label: "高齢者向け宅配弁当おすすめランキング" },
            { href: "/articles/toushitsu-seigen-osusume/", label: "糖質制限におすすめの宅配弁当ランキング" },
            { href: "/articles/jisshitsu-tanka-hikaku/", label: "実質単価で比較！宅配弁当の本当のコスパ" },
            { href: "/articles/souryou-yasui-ranking/", label: "送料が安い宅配弁当ランキング" },
          ].map((link) => (
            <div key={link.href}><Link href={link.href} className="text-accent hover:text-accent-dark text-sm transition-colors">→ {link.label}</Link></div>
          ))}
        </div>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        {faqData.map((faq) => (<FAQ key={faq.question} question={faq.question} answer={faq.answer} />))}

        <SectionHeading id="summary">まとめ</SectionHeading>
        <div className="bg-cream rounded-xl p-5 mb-6">
          <p className="font-bold text-sm mb-3">Dr.つるかめキッチン まとめ</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>Dr.つるかめキッチンは<strong>専門医＋管理栄養士のW監修</strong>による制限食専門の冷凍宅配弁当サービスです。</p>
            <p>糖質制限・塩分制限・たんぱく質制限・カロリー制限・バランス栄養の5コースを展開。定期購入なら28%OFFかつ全国送料無料で、1食あたり684〜787円で利用できます。</p>
            <p>「制限食なのに美味しい」という口コミが多数。定期購入に縛りがないため、実質お試し感覚で始められます。食事制限が必要な方や、ご家族の健康管理をサポートしたい方におすすめのサービスです。</p>
          </div>
        </div>
      
        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約。メニューにより変動があるため、各サービスの平均的レンジを記載。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link> 参照。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-warm-border bg-white rounded-lg overflow-hidden">
              <thead className="bg-cream">
                <tr>
                  <th className="border-b border-warm-border px-3 py-2 text-left text-xs font-bold text-foreground">サービス</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">kcal</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">糖質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">タンパク質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">塩分(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">1食(円)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">nosh（ナッシュ）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">599-748</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">三ツ星ファーム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">25以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">626-842</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウェルネスダイニング</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-300</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">12-18</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">663-880</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://magokoro-care-shoku.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">まごころケア食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-350</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">462-580</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワタミの宅食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">40-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">3.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">590-680</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://shoutakubin.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">食宅便</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">560-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">Muscle Deli</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-60</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,098-1,490</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">597-750</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.5</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">550-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.pal-system.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">パルシステム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">580-720</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ナッシュclub（割引）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">499-624</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">つるかめキッチン</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">13</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">660-815</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://1meal.life/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワンミール</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">770-840</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://fitfoodhome.tabeyoukai.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">FIT FOOD HOME</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">750-1,080</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://gofood.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">GOFOOD</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">898-1,148</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※2026年5月時点の公開データ。最新情報は各公式サイトでご確認ください。</p>
        </section>

        </article>
    </>
  );
}
