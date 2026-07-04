import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "わんまいるの口コミ・評判は？まずいって本当？国産食材100%・湯煎解凍の実力を出典付きで検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "わんまいるは「まずい」って本当？公開レビューの良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。国産食材100%の冷凍おかず「健幸ディナー」の料金（定期5食6,280円・2026年7月4日公式確認）・送料・湯煎解凍の手間も詳しく解説します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/wanmairu-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "わんまいる 口コミ, わんまいる 評判, わんまいる まずい, わんまいる 料金, わんまいる 健幸ディナー, 国産食材 宅配, 湯煎 冷凍弁当",
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
    question: "わんまいるはまずいって本当？",
    answer:
      "公開レビューを確認すると、「がんもの煮付けは、正直まずいと思いました」（宅食グルメ掲載の口コミ）のような特定メニューへの否定評価は実在しますが、同じ調査でも「まずいと感じたメニューはなかった」という声があり、実食メディアの総評は「上品な味」「ほっこりする美味しさ」が優勢です。健康志向の控えめな塩加減のため、濃い味が好きな人には物足りない可能性があります。感じ方には個人差があるため、まずは少量で試すのが確実です。",
  },
  {
    question: "わんまいるはお試しできる？",
    answer:
      "初回向けのお試しセット・割引は時期によって実施内容が変わります。2026年7月4日の編集部確認時点では、公式サイト上でお試しセットの現行価格を確認できなかったため、最新のお試し・キャンペーン情報は公式サイト（onemile.jp）で直接ご確認ください。まずは1回分で味を確認してから定期購入を検討するのがおすすめです。",
  },
  {
    question: "わんまいるは電子レンジで温められる？",
    answer:
      "メインの「健幸ディナー」は湯煎解凍または流水解凍が基本です（公式サイトにも湯せん・流水解凍と表記）。湯煎のほうが食材の味や食感が良く仕上がるためです。一方、電子レンジ調理（最短5分）に対応した「美食弁当（トレータイプ）」も別商品として用意されています（2026年7月4日公式確認）。レンジ完結を優先する場合はトレータイプを検討しましょう。",
  },
  {
    question: "わんまいるの賞味期限は？",
    answer:
      "冷凍保存で約6ヶ月です。個食パックで届くため、必要な分だけ取り出して解凍できます。一度解凍したものは再冷凍せず、当日中に食べきってください。",
  },
  {
    question: "わんまいるの配送エリアは？",
    answer:
      "全国配送可能です（一部離島を除く）。ヤマト運輸のクール宅急便で届きます。送料は本州・四国・九州で1,080円、北海道・沖縄で2,645円です（税込・2026年7月4日公式確認）。北海道・沖縄は送料が高いため、まとめ注文で1回あたりの負担を減らすことをおすすめします。",
  },
  {
    question: "わんまいるは解約金やペナルティはある？",
    answer:
      "ありません。定期購入はいつでも解約・休止・変更が可能です。次回お届け予定日の1週間前までに連絡すれば、ペナルティなく手続きできます。解約後の再開も自由にできるため、気軽に始められます。",
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
        <li><span className="text-foreground">わんまいるの口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "わんまいるとは？基本情報まとめ" },
    { id: "features", label: "3つの特徴（国産食材・手作り・湯煎）" },
    { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "わんまいるはまずい？味の評判を検証" },
    { id: "price", label: "料金・送料を徹底解説" },
    { id: "howto", label: "湯煎解凍の手順と美味しく食べるコツ" },
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
    title: "手作り感のある家庭料理の味わい",
    reviews: [
      {
        text: "わんまいるはおばあちゃんやお母さんに作ってもらったお惣菜のようなほっこりする美味しさがあります",
        meta: "女性・35歳・主婦",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/140336/",
      },
      {
        text: "しっかりとした味付けで、とっても美味しかったです。ご飯がすすむお味でした。",
        meta: "編集長のお試しセット実食レビュー",
        sourceName: "食卓リスト",
        sourceUrl: "https://takusyokulist.com/wanmairu-review/",
      },
      {
        text: "健康のことを考えた控えめの塩加減ながらも、この美味しさを実現できているのは本当にすごいと思いました。",
        meta: "20代女性の実食レビュー",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40181/",
      },
    ],
  },
  {
    title: "湯煎解凍の仕上がりが良い・上品な味",
    reviews: [
      {
        text: "鮭はパサついておらずホロホロとしていて、冷凍ではなかなか食べられない食感だと思いました",
        meta: "編集部実食レビュー・湯煎解凍の仕上がり評",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/140336/",
      },
      {
        text: "あまり濃すぎずに、全体として上品な味という印象でした",
        meta: "女性・36歳・主婦",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/140336/",
      },
      {
        text: "ジューシーな鶏肉と甘酸っぱい南蛮ソースが絶妙で、ボリュームも満点でとても美味しかったです。",
        meta: "20代女性の実食レビュー・チキン南蛮",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40181/",
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
    title: "価格が高め・自炊よりコストがかかる",
    reviews: [
      {
        text: "やはり、自分で食材を買って作る方が断然安いです",
        meta: "女性・35歳・主婦",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/140336/",
      },
    ],
    comment:
      "健幸ディナー5食セットは定期6,280円（1食約1,256円）＋送料1,080円と、冷凍宅配食の中では高価格帯です（2026年7月4日の公式サイト確認時点）。国産食材100%・手作り調理のコストを「健康への投資」と捉えられるかで評価が分かれます。食費最優先なら低価格帯サービスの方が向いています。",
  },
  {
    title: "湯煎解凍の手間がかかる",
    reviews: [
      {
        text: "湯煎での解凍調理は意外と面倒という印象です",
        meta: "女性・39歳・会社員",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/140336/",
      },
      {
        text: "食べる際には湯煎か流水で解凍する手間がかかる。",
        meta: "編集部によるデメリット評",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40181/",
      },
      {
        text: "電子レンジでチンするだけの冷凍宅配弁当と比較すると、どうしても致し方ない部分です。",
        meta: "編集長・湯煎と後片付けの手間について",
        sourceName: "食卓リスト",
        sourceUrl: "https://takusyokulist.com/wanmairu-review/",
      },
    ],
    comment:
      "湯煎・流水解凍は「味の仕上がり」とトレードオフの手間です。慣れれば主菜・副菜同時湯煎で10〜15分程度ですが、レンジ完結を求める人には不向きです。なお公式にはレンジ調理対応の「美食弁当（トレータイプ）」も別商品として用意されています（2026年7月4日確認）。",
  },
];

export default function WanmairuReviewsPage() {
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"\u308f\u3093\u307e\u3044\u308b\u306e\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}]}" }}
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
          <p className="mb-3">「わんまいるって美味しいの？」「国産食材100%って本当？」「湯煎って面倒じゃない？」——冷凍宅食の中でも「味」と「素材」にとことんこだわるわんまいる。</p>
          <p className="mb-3">この記事では、<strong>わんまいるの口コミ・評判を徹底リサーチ</strong>。国産食材100%・手作り調理の実力、湯煎解凍の手間、そして気になる料金まで詳しく解説します。</p>
          <p>「冷凍弁当の味に妥協したくない」「安心できる食材の宅食を探している」という方は、ぜひ参考にしてください。</p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：わんまいるはこんな人に向いています</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm leading-relaxed mb-4">
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p><ul className="space-y-1 list-disc list-inside"><li>国産食材100%・無添加で安心感がある</li><li>手作り調理で家庭料理のような味わい（煮魚・煮物が特に好評）</li><li>湯煎解凍でしっとり美味しく仕上がる</li></ul></div>
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-warm-gray mb-2">△ 注意したい点</p><ul className="space-y-1 list-disc list-inside"><li>1食約1,256円〜（定期5食6,280円）と価格が高め</li><li>湯煎の手間がかかる（レンジで完結しない）</li><li>送料が高め（本州1,080円・北海道/沖縄2,645円）</li></ul></div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://www.onemile.jp/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">わんまいる 公式サイトで最新の料金・お試しを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">わんまいるとは？基本情報まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">わんまいるは、株式会社ファミリーネットワークシステムズが運営する冷凍おかず宅配サービスです。大阪に本社を置き、<strong>国産食材100%</strong>を掲げる数少ないサービスの1つ。宮崎県産黒毛和牛や大山豚、日南どりなど、地域のブランド食材を積極的に使用しています。</p>

        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社ファミリーネットワークシステムズ"],
            ["設立", "1988年"],
            ["メイン商品", "健幸ディナー（冷凍おかずセット）"],
            ["食材", "国産食材100%"],
            ["調理方法", "湯煎解凍 or 流水解凍"],
            ["配送", "ヤマト運輸クール宅急便"],
            ["送料", "本州・四国・九州1,080円、北海道・沖縄2,645円（2026年7月4日公式確認）"],
            ["定期購入", "あり（1週間/2週間ごと選択可）"],
            ["解約", "いつでも可（ペナルティなし）"],
          ]}
        />

        <SectionHeading id="features">3つの特徴</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "国産食材100%のこだわり", text: "すべての食材を国産に限定。産地や生産者まで確認できるトレーサビリティを確保しています。宮崎県産黒毛和牛、鳥取県大山豚、宮崎県日南どりなど、ご当地ブランド食材を使ったメニューも特徴です。添加物も極力排除し、合成保存料・合成着色料は不使用です。", color: "bg-green-50" },
            { title: "手作り調理で出来立ての美味しさ", text: "社内調理場と提携先の調理センターで、一つひとつ手作りで調理。大量生産の工場ラインとは異なる「家庭料理の温かみ」が口コミで高評価を得ています。煮物や煮魚など、手間のかかる和食メニューが特に美味しいと評判です。", color: "bg-amber-50" },
            { title: "湯煎・流水解凍で素材の味を活かす", text: "電子レンジではなく湯煎で解凍するのがわんまいるの特徴。お鍋でお湯を沸かし、袋のまま5〜10分温めるだけ。湯煎のほうが食材に均一に熱が伝わり、パサつきや加熱ムラが起きにくいため、出来立てのような味わいを楽しめます。副菜は流水解凍のものも多いです。", color: "bg-blue-50" },
          ].map((item) => (
            <div key={item.title} className={`${item.color} rounded-lg p-4`}>
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="good-reviews">良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          公開されている第三者メディアの実食レビュー・口コミ調査から、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示）。
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

        <SectionHeading id="mazui">わんまいるはまずい？味の評判を検証</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          「わんまいる まずい」と検索されることがあります。公開レビューを確認すると、<strong>「まずい」という声は特定メニューへの評価が中心で、全体の味評価はおおむね良好</strong>という構図でした。実例で検証します。
        </p>
        <SubHeading>「まずい」と言われた実例（特定メニュー）</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "がんもの煮付けは、正直まずいと思いました。",
              meta: "女性・39歳・会社員",
              sourceName: "宅食グルメ（Appliv）",
              sourceUrl: "https://meal.app-liv.jp/archive/140336/",
            }}
            tone="bad"
          />
        </div>
        <SubHeading>一方で「まずくない」とする実食評価が多数</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "それほど多くのメニューを口にはしていませんが、まずいと感じたメニューはなかったです",
              meta: "女性・30歳・主婦",
              sourceName: "宅食グルメ（Appliv）",
              sourceUrl: "https://meal.app-liv.jp/archive/140336/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "『まずい』だなんて、そんなことは決してありません！",
              meta: "編集長の実食による検証結論",
              sourceName: "食卓リスト",
              sourceUrl: "https://takusyokulist.com/wanmairu-review/",
            }}
            tone="good"
          />
        </div>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は一部メニューの外れ体験と薄味の好みに分解できる</p>
          <p>
            酷評は「がんもの煮付け」のような特定メニューへの外れ体験が中心で、同じ調査内でも全体評価は「上品な味」「ほっこりする美味しさ」が優勢です。健康志向の控えめな塩加減のため、濃い味・こってり系が好きな人には物足りない可能性があります。和食・煮物・魚料理を好む人ほど満足度が高い傾向です。感じ方には個人差があるため、まずは少量セットで試すのが確実です。
          </p>
        </div>

        <SectionHeading id="price">料金・送料を徹底解説</SectionHeading>
        <p className="text-xs text-warm-gray mb-4">
          ※本セクションの料金・送料は2026年7月4日に編集部がわんまいる公式サイト（onemile.jp）で直接確認した金額（税込）です。最新の金額・キャンペーンは公式サイトでご確認ください。
        </p>
        <SubHeading>健幸ディナーの料金（2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["プラン", "セット内容", "価格（税込）", "1食あたり"]}
          rows={[
            ["定期お届けコース", "5食セット（主菜1品＋副菜2品）", "6,280円", "約1,256円"],
            ["都度注文", "5食セット", "6,780円", "約1,356円"],
            ["初回お試し", "5食セット", "公式サイトでご確認ください（時期により実施内容が変動）", "—"],
          ]}
        />
        <SubHeading>送料（2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["エリア", "送料（税込）"]}
          rows={[["本州・四国・九州", "1,080円"], ["北海道", "2,645円"], ["沖縄", "2,645円"]]}
        />
        <p className="text-sm mb-6 leading-relaxed">送料込みの実質1食単価は、定期購入の場合<strong>本州で約1,472円、北海道・沖縄で約1,785円</strong>です。冷凍宅配食の中でも明確に高価格帯ですが、国産食材100%・手作り調理というクオリティを「健康への投資」として選ぶ層に支持されています。なお、編集部が主要18社の料金・送料を公式サイトで直接確認して送料込み1食実質単価に正規化した<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>も公開しているので、他社との価格感の比較に活用してください。</p>

        <SectionHeading id="howto">湯煎解凍の手順と美味しく食べるコツ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { step: "1", text: "大きめの鍋にたっぷりのお湯を沸かす。袋が浸かる量が目安です。" },
            { step: "2", text: "沸騰したら火を弱め、冷凍パックをそのまま入れる。主菜は5〜10分、副菜は3〜5分が目安です。" },
            { step: "3", text: "時間になったらパックを取り出し、お皿に盛り付ける。副菜は流水解凍のものもあるため、パッケージの表示を確認してください。" },
            { step: "4", text: "盛り付けたら完成。湯煎後すぐに食べるのが最も美味しいタイミングです。" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 text-sm">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent font-bold flex-shrink-0">{item.step}</span>
              <p className="leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="font-bold text-sm mb-2">時短のコツ</p>
          <p className="text-sm text-foreground/80 leading-relaxed">主菜と副菜を同時に湯煎すれば、1回のお湯で完結します。電気ケトルで先にお湯を沸かしてから鍋に移すと、沸騰までの時間を短縮できます。トータル10〜15分で食事の準備が完了します。</p>
        </div>

        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>
        <SubHeading>おすすめな人</SubHeading>
        <div className="space-y-2 mb-6">
          {["国産食材・無添加にこだわりたい方", "冷凍弁当でも「味」を最重視する方", "家庭料理のような温かい味わいを求める方", "湯煎の手間が気にならない方（10〜15分程度）", "高齢のご両親への贈り物として"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-accent mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>
        <SubHeading>おすすめしない人</SubHeading>
        <div className="space-y-2 mb-6">
          {["コスパ重視の方（1食1,000円前後は高い）", "電子レンジだけで完結させたい方", "北海道在住の方（送料が高額）", "メニューを自分で自由に選びたい方"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>

        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/nosh-reviews/", label: "nosh(ナッシュ)の口コミ・評判" },
            { href: "/articles/mitsuboshi-farm-reviews/", label: "三ツ星ファームの口コミ・評判" },
            { href: "/articles/reitou-bento-mazui/", label: "冷凍弁当がまずい？美味しく食べるコツ" },
            { href: "/articles/souryou-yasui-ranking/", label: "送料が安い宅配弁当ランキング" },
            { href: "/articles/koureisha-osusume/", label: "高齢者におすすめの宅配弁当" },
            { href: "/articles/jisshitsu-tanka-hikaku/", label: "実質単価で比較する宅配弁当" },
          ].map((link) => (
            <div key={link.href}><Link href={link.href} className="text-accent hover:text-accent-dark text-sm transition-colors">→ {link.label}</Link></div>
          ))}
        </div>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        {faqData.map((faq) => (<FAQ key={faq.question} question={faq.question} answer={faq.answer} />))}

        <SectionHeading id="summary">まとめ</SectionHeading>
        <div className="bg-cream rounded-xl p-5 mb-6">
          <p className="font-bold text-sm mb-3">わんまいる まとめ</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>わんまいるは<strong>国産食材100%・手作り調理</strong>にこだわった、冷凍宅食の中でもプレミアムなサービスです。</p>
            <p>1食約1,256円〜（定期5食6,280円・2026年7月4日公式確認）と価格は高めですが、「ほっこりする美味しさ」「上品な味」といった出典付きの実食評価は他社にない魅力。特に煮魚や煮物などの和食は、口コミで高い評価を得ています。</p>
            <p>湯煎解凍は慣れれば10〜15分で完了。レンジ加熱とは仕上がりの差を実感できるはずです。最新のお試し・キャンペーン情報は公式サイトで確認のうえ、まずは1回分でその味を確かめてみてください。</p>
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
