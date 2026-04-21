import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】わんまいるの口コミ・評判を徹底調査！国産食材100%の味・料金・湯煎解凍の手間を解説";
const ARTICLE_DESCRIPTION =
  "わんまいるの口コミ・評判を徹底調査。国産食材100%・手作りにこだわった冷凍おかず「健幸ディナー」の味・料金・湯煎解凍の手間を解説。良い口コミ・悪い口コミの両方を紹介します。";
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
    modifiedTime: "2026-04-21T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "わんまいるはお試しできる？",
    answer:
      "はい、初回限定のお試しセットがあります。「健幸ディナー」5食セットを通常価格より約20〜30%OFFの特別価格で購入できます（時期によって割引率は異なります）。初回限定1回のみで、2回目以降は通常価格になります。まずは味を確認してから定期購入を検討するのがおすすめです。",
  },
  {
    question: "わんまいるは電子レンジで温められる？",
    answer:
      "わんまいるの「健幸ディナー」は基本的に湯煎解凍または流水解凍です。電子レンジ対応の商品もありますが、メインの健幸ディナーは湯煎が推奨されています。湯煎のほうが食材の味や食感が良く仕上がるためです。お鍋にお湯を沸かして袋のまま5〜10分温めるだけなので、手間としては電子レンジと大きく変わりません。",
  },
  {
    question: "わんまいるの賞味期限は？",
    answer:
      "冷凍保存で約6ヶ月です。個食パックで届くため、必要な分だけ取り出して解凍できます。一度解凍したものは再冷凍せず、当日中に食べきってください。",
  },
  {
    question: "わんまいるの配送エリアは？",
    answer:
      "全国配送可能です（一部離島を除く）。ヤマト運輸のクール宅急便で届きます。送料は本州・四国・九州で935円、北海道で2,145円です。北海道は送料が高いため、まとめ注文で1食あたりの負担を減らすことをおすすめします。",
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
    { id: "good-reviews", label: "良い口コミ・評判" },
    { id: "bad-reviews", label: "悪い口コミ・評判" },
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

export default function WanmairuReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: ARTICLE_TITLE, description: ARTICLE_DESCRIPTION, url: ARTICLE_URL,
    datePublished: "2026-04-21T00:00:00+09:00", dateModified: "2026-04-21T00:00:00+09:00",
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

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />
        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">口コミ・評判</span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time><span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">「わんまいるって美味しいの？」「国産食材100%って本当？」「湯煎って面倒じゃない？」——冷凍宅食の中でも「味」と「素材」にとことんこだわるわんまいる。</p>
          <p className="mb-3">この記事では、<strong>わんまいるの口コミ・評判を徹底リサーチ</strong>。国産食材100%・手作り調理の実力、湯煎解凍の手間、そして気になる料金まで詳しく解説します。</p>
          <p>「冷凍弁当の味に妥協したくない」「安心できる食材の宅食を探している」という方は、ぜひ参考にしてください。</p>
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
            ["送料", "本州・四国・九州935円、北海道2,145円"],
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

        <SectionHeading id="good-reviews">良い口コミ・評判</SectionHeading>
        {[
          { title: "味が美味しい・手作り感がある", reviews: ["「冷凍とは思えないクオリティ。特に煮魚と肉じゃがが絶品」（50代女性）", "「家庭料理の味がする。他の冷凍弁当にはない温かみを感じる」（60代男性）", "「素材の味がしっかり活きている。国産食材の安心感もある」（40代女性）"] },
          { title: "国産食材・安心感", reviews: ["「食材が全て国産なのが決め手になった。子どもにも安心して食べさせられる」（30代女性）", "「産地が明記されているので信頼できる。宮崎県産の鶏肉は特に美味しかった」（50代男性）"] },
          { title: "湯煎解凍の仕上がりが良い", reviews: ["「湯煎だとレンジよりもしっとり仕上がる。最初は面倒かと思ったけど、慣れれば苦にならない」（40代女性）", "「魚料理は湯煎のほうが断然美味しい。身がふっくらして崩れない」（60代男性）"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">{cat.reviews.map((r) => (<div key={r} className="bg-green-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>))}</div>
          </div>
        ))}

        <SectionHeading id="bad-reviews">悪い口コミ・評判</SectionHeading>
        {[
          { title: "価格が高い", reviews: ["「1食1,200円以上はさすがに高い。毎日の食事にするにはキツい」（30代男性）", "「品質は良いけど、nosh（1食500円台）と比べると2倍以上の価格差」（40代女性）"] },
          { title: "湯煎が面倒", reviews: ["「疲れた日にお鍋を出して湯煎するのが正直面倒。レンジ対応してほしい」（30代女性）", "「一人暮らしだと主菜と副菜で2〜3回湯煎が必要。洗い物も増える」（20代男性）"] },
          { title: "送料が高い（特に北海道）", reviews: ["「本州でも935円、北海道だと2,145円。送料込みだとかなり高額になる」（50代男性）", "「月2回注文すると送料だけで2,000円近く。送料無料のサービスと比べると痛い」（40代女性）"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">{cat.reviews.map((r) => (<div key={r} className="bg-red-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>))}</div>
          </div>
        ))}

        <SectionHeading id="price">料金・送料を徹底解説</SectionHeading>
        <SubHeading>健幸ディナーの料金</SubHeading>
        <ComparisonTable
          headers={["プラン", "セット内容", "価格（税込）", "1食あたり"]}
          rows={[
            ["定期お届けコース", "5食セット（主菜1品＋副菜2品）", "4,480円", "約896円"],
            ["都度注文", "5食セット", "5,280円", "約1,056円"],
            ["初回お試し", "5食セット", "3,980円程度（時期により変動）", "約796円"],
          ]}
        />
        <SubHeading>送料</SubHeading>
        <ComparisonTable
          headers={["エリア", "送料（税込）"]}
          rows={[["本州・四国・九州", "935円"], ["北海道", "2,145円"]]}
        />
        <p className="text-sm mb-6 leading-relaxed">送料込みの実質1食単価は、定期購入の場合<strong>本州で約1,083円、北海道で約1,325円</strong>です。nosh（送料込み約700円）や三ツ星ファーム（約697円）と比較するとかなり高額ですが、国産食材100%・手作り調理というクオリティを考えると、「健康への投資」として納得する方も多いです。</p>

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
            <p>1食約900〜1,050円と価格は高めですが、「冷凍とは思えない美味しさ」「家庭料理の温かみ」は他社にない魅力。特に煮魚や煮物などの和食は、口コミで非常に高い評価を得ています。</p>
            <p>湯煎解凍は慣れれば10〜15分で完了。レンジ加熱とは仕上がりの差を実感できるはずです。まずは初回お試しセットで、その味を確かめてみてください。</p>
          </div>
        </div>
      </article>
    </>
  );
}
