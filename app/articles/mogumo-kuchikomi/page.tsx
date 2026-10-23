import type { Metadata } from "next";
import Link from "next/link";
import ServiceCapture from "@/components/ServiceCapture";

const ARTICLE_TITLE =
  "モグモの口コミ・評判は？冷凍幼児食の料金・送料・解約を公式で確認【2026年10月】";
const ARTICLE_DESCRIPTION =
  "冷凍幼児食の宅配「モグモ（mogumo）」の口コミ・評判を、子どもが実食した家庭のレビューから出典付きで紹介します。1歳6ヵ月〜6歳向け・管理栄養士監修、定期便8食5,110円〜（2026年6月改定後）、地域別送料、10日前の変更締切、6回のお約束がある送料無料コースまで公式情報で確認しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mogumo-kuchikomi/";
const OFFICIAL_URL = "https://mogumo.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "モグモ 口コミ, モグモ 評判, mogumo 口コミ, モグモ 料金, モグモ 解約, 冷凍幼児食 宅配, 幼児食 宅配 冷凍, 幼児食 宅配 おすすめ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-10-23T00:00:00+09:00",
    modifiedTime: "2026-10-23T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "モグモは何歳から食べられますか？", answer: "公式の対象は「離乳食が完了する 1歳6ヵ月〜6歳の幼児期のお子さま」で、商品ページには「1歳6ヶ月ごろから食べられます」と表示されています。年齢は目安で、対象外の年齢でも食べられるメニューなら利用できます（公式FAQ・2026年10月23日確認）。" },
  { question: "モグモの料金はいくらですか？", answer: "定期便は8食5,110円・12食7,260円・18食9,810円・24食12,410円（税込・送料別）で、2026年6月1日の改定後の価格です。初回は300円引きです。送料は関東で8食・12食1,100円、18食・24食1,190円です（2026年10月23日の公式サイト確認）。" },
  { question: "モグモは送料無料にできますか？", answer: "18食・24食の「がんばる家族応援コース」は送料無料です。ただし6回のお約束回数があり、6回受け取るまで休止・解約はできません（スキップは可）。クーポンとの併用もできません。" },
  { question: "解約やスキップはいつまでにすればいいですか？", answer: "次回お届け予定日の10日前までに、マイページの「お問い合わせチャット」から手続きします（24時間受付）。通常の定期便に回数の縛りや解約金はありません。スキップは1回ずつ（連続不可）、休止は最大3か月です。初回注文はキャンセルできません。" },
  { question: "モグモは無添加ですか？", answer: "公式は「不要な添加物は使いません」とし、合成保存料（安息香酸・ソルビン酸など）と合成着色料は不使用と明記しています。2026年10月23日の商品一覧では63品中60品に「無添加」の表示がありました。商品ごとの原材料は各商品ページでご確認ください。" },
  { question: "食物アレルギーがあっても使えますか？", answer: "特定原材料等28品目を表示しており、一覧でアレルゲンを除外して探せます。ただし公式は「製造工場では共通の設備を使用して調理しており、予期しないアレルギー物質の混入を完全に防ぐことはできません」としています。症状が重いお子さまは、医師にご相談のうえ商品ページの表記をご確認ください。" },
];

const sections = [
  { id: "about", label: "モグモとは？基本情報" },
  { id: "price", label: "料金・送料（2026年6月改定後）" },
  { id: "cancel", label: "定期便の変更・解約の締切" },
  { id: "good-reviews", label: "モグモの良い口コミ・評判（出典付き）" },
  { id: "bad-reviews", label: "モグモの悪い口コミ・評判（出典付き）" },
  { id: "allergy", label: "アレルギー・加熱方法・保存" },
  { id: "comparison", label: "ほかの冷凍幼児食との比較" },
  { id: "recommend", label: "向いている家庭・向いていない家庭" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">ホーム</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">モグモの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">
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

type SourcedReviewItem = { text: string; meta?: string; sourceName: string; sourceUrl: string };

function SourcedReview({ review, tone }: { review: SourcedReviewItem; tone: "good" | "bad" }) {
  return (
    <div className={`${tone === "good" ? "bg-green-50" : "bg-red-50"} rounded-lg p-3 text-sm leading-relaxed`}>
      <p className="mb-1.5">「{review.text}」{review.meta ? `（${review.meta}）` : ""}</p>
      <p className="text-xs text-warm-gray">
        出典:{" "}
        <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">{review.sourceName}</a>
      </p>
    </div>
  );
}

function OfficialButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 text-center">
      <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-[10px] text-gray-400 mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
    </div>
  );
}

/* ---------- 口コミ（公開レビューからの引用・原文ママ・出典明記） ---------- */

const goodReviewCategories: { title: string; reviews: SourcedReviewItem[] }[] = [
  {
    title: "子どもの食いつきが良い",
    reviews: [
      { text: "全体的な食いつきは良好で、6品中4品を完食", meta: "2歳児に6品を実食", sourceName: "こぬしの宅食", sourceUrl: "https://konushi.com/mogumo-review/" },
      { text: "いつもなら一口二口食べたら飽きたり遊び出してしまうのが、このナポリタンはペロリと完食！", meta: "食べムラのある3歳児が8品を実食", sourceName: "かたさんち", sourceUrl: "https://katasanchi.com/mogumo-review/" },
      { text: "娘も気に入り、「もう1個！」とリクエスト。", meta: "6歳児が実食・さつまいもパン", sourceName: "ぶちうま！", sourceUrl: "https://takafuji-ben10.com/buchiuma/archives/130" },
    ],
  },
  {
    title: "大人が食べてもおいしい・献立を考える手間が減る",
    reviews: [
      { text: "冷凍食品とは思えないクオリティで、大人も美味しく食べられるご飯ばかり", meta: "3歳児の家庭", sourceName: "かたさんち", sourceUrl: "https://katasanchi.com/mogumo-review/" },
      { text: "調理時間より「子どものご飯どうしよう」と考える時間を減らせること", meta: "6歳児の家庭・利用の価値について", sourceName: "ぶちうま！", sourceUrl: "https://takafuji-ben10.com/buchiuma/archives/130" },
    ],
  },
  {
    title: "薄型で冷凍庫に入れやすい",
    reviews: [
      { text: "薄型で冷凍庫の限られたスペースにも収納しやすく、", meta: "2歳児の家庭", sourceName: "こぬしの宅食", sourceUrl: "https://konushi.com/mogumo-review/" },
      { text: "一般的な家庭用の冷凍庫の上段スペースに、十分収まりました", meta: "3歳児の家庭", sourceName: "罪なき宅食", sourceUrl: "https://blog-funl-ife-29.com/mogumo/" },
    ],
  },
];

const badReviewCategories: { title: string; reviews: SourcedReviewItem[]; comment: string }[] = [
  {
    title: "年齢によっては量が合わない",
    reviews: [
      { text: "6歳くらいになると、モグモの商品だけでは量が足りないメニューもあるでしょう。", meta: "6歳児の家庭", sourceName: "ぶちうま！", sourceUrl: "https://takafuji-ben10.com/buchiuma/archives/130" },
      { text: "3歳息子の場合、パスタはちょうどいいサイズなのに対し、コロッケ2つは多かったなど、おかずによってはやや調整が必要でした。", meta: "3歳児の家庭", sourceName: "かたさんち", sourceUrl: "https://katasanchi.com/mogumo-review/" },
    ],
    comment: "内容量は商品ごとに45〜200gと幅があります（多くは100g）。主菜だけの商品が多いため、ごはん・汁物・果物を足して1食にする使い方が一般的です。5歳以降には量の多い姉妹ライン「モグモデリ」（8食7,950円〜）もあります。",
  },
  {
    title: "毎日使うには価格が高い",
    reviews: [
      { text: "そのため「毎日使うには高い」と感じる家庭があるのは自然です。", meta: "6歳児の家庭", sourceName: "ぶちうま！", sourceUrl: "https://takafuji-ben10.com/buchiuma/archives/130" },
    ],
    comment: "関東の送料込みで1食約567〜776円です（当サイト計算）。毎日の全食ではなく、忙しい日の夕食や作り置きが切れた日の分として使う家庭が多い価格帯です。",
  },
  {
    title: "変更・解約の締切が早い",
    reviews: [
      { text: "これは他の多くの定期サービスと比較しても、早めに設定されています。", meta: "10日前の変更締切について", sourceName: "こぬしの宅食", sourceUrl: "https://konushi.com/mogumo-review/" },
    ],
    comment: "締切は次回お届け予定日の10日前です（公式）。スキップの連続はできないため、使い切れないときは休止（最大3か月）を使います。初回注文はキャンセルできません。",
  },
];

export default function MogumoKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-10-23T00:00:00+09:00",
    dateModified: "2026-10-23T00:00:00+09:00",
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      { "@type": "ListItem", position: 3, name: "モグモの口コミ・評判" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-sango.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-sango-m.webp)" }}>
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-10-23">公開: 2026年10月23日（公式サイトで確認）</time>
            <span>
              監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / 
              <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>
        </div>{/* /subhead */}

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            モグモ（mogumo）は、株式会社Oxxx（福岡市）が運営する<strong>1歳6ヵ月〜6歳向けの冷凍幼児食の宅配</strong>です。管理栄養士が監修したおかず・ごはん・パンを、電子レンジや湯煎で温めるだけで出せます。
          </p>
          <p className="mb-3">
            この記事では、子どもが実際に食べた家庭のレビュー記事から<strong>良い口コミ・悪い口コミを出典付きで</strong>紹介し、2026年6月の価格改定後の料金・送料・解約の締切を、2026年10月23日に公式サイトで確認した値で整理しました。
          </p>
          <p>当サイトでは実食・試用はしていません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">この記事の要点</p>
          <p className="text-sm leading-relaxed mb-4">モグモは「子どものごはんを考える時間を減らしたい」家庭に向いた冷凍幼児食です。口コミでは「食いつきが良い」「薄型で冷凍庫に入れやすい」という評価が多く、気になる点としては「量が足りないメニューがある」「変更締切が10日前と早い」が挙がっています。定期便は8食5,110円（1食639円）〜で、送料は関東で1,100円からです。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>子どもの食いつきが良いという声が多い</li><li>薄型パウチで冷凍庫に収めやすい</li><li>管理栄養士監修・合成保存料と合成着色料は不使用</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>送料込みで1食約570〜780円（関東）</li><li>変更・解約の締切は10日前と早め</li><li>年長になると量が足りないメニューもある</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・在庫は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">モグモ 公式サイトで最新の料金・メニューを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">モグモとは？基本情報</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          公式サイトは「1歳半〜6歳の心と体が大きく育つ大切な幼児期の成長に寄り添う、冷凍幼児食の宅配サービス」と説明しています。対象は「離乳食が完了する 1歳6ヵ月〜6歳の幼児期のお子さま」で、全商品ページに「1歳6ヶ月ごろから食べられます」と表示されています。
        </p>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社Oxxx（福岡市中央区）"],
            ["対象年齢", "1歳6ヵ月〜6歳（目安）"],
            ["監修", "「すべての商品は、専任の管理栄養士が監修しています」"],
            ["塩分", "100gあたり食塩相当量1.0g以下を目標に開発"],
            ["添加物", "合成保存料・合成着色料は不使用。商品一覧63品のうち60品に「無添加」の表示"],
            ["食材", "主原料が中国産の食材は扱わない・主原料はできる限り国産"],
            ["製造", "全国20か所以上の提携工場（HACCPに基づく管理・製造後に微生物検査）"],
            ["内容量", "商品ごとに45〜200g（多くは100g）"],
            ["お届け間隔", "2週間／3週間／4週間"],
            ["配送", "ヤマト運輸のクール宅急便または佐川急便・全国"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: モグモ公式サイト（トップ・私たちのお約束・原材料ポリシー・商品一覧）と公式FAQ（2026年10月23日確認）。メニュー数は公式内でも「40種類」「50種類以上」と表記が分かれており、10月23日の商品一覧の掲載は63品でした。
        </p>
        <ServiceCapture id="mogumo" />

        <SectionHeading id="price">料金・送料（2026年6月改定後）</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          モグモは<strong>2026年6月1日に約10%値上げ</strong>しています（公式お知らせ）。現在の定期便の料金は次のとおりです。
        </p>
        <ComparisonTable
          headers={["定期便", "料金（税込・送料別）", "1食あたり", "送料込み1食（関東）"]}
          rows={[
            ["8食", "5,110円", "639円", "約776円"],
            ["12食", "7,260円", "605円", "約697円"],
            ["18食", "9,810円", "545円", "約611円"],
            ["24食", "12,410円", "約517円", "約567円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-4">
          ※料金・1食あたり（24食を除く）は公式表示。24食の1食あたりと送料込みの値は、当サイトが（料金＋関東の送料）÷食数で計算しました。初回は定期便が300円引きです（公式のセット選択ページ）。
        </p>
        <SubHeading>地域別の送料（税込・クール便込み）</SubHeading>
        <ComparisonTable
          headers={["地域", "8食・12食", "18食・24食"]}
          rows={[
            ["北海道", "1,500円", "1,600円"],
            ["北東北", "1,190円", "1,290円"],
            ["南東北・関東・信越・北陸・中部", "1,100円", "1,190円"],
            ["関西", "1,190円", "1,290円"],
            ["中国", "1,170円", "1,290円"],
            ["四国", "1,190円", "1,290円"],
            ["九州", "1,150円", "1,290円"],
            ["沖縄", "1,750円", "2,200円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-4">※公式FAQ「送料」（2026年6月以降の料金・10月23日確認）</p>
        <SubHeading>送料無料の「がんばる家族応援コース」</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          18食（9,810円）・24食（12,410円）で<strong>送料が無料</strong>になるコースです。ただし<strong>6回のお約束回数</strong>があり、6回受け取るまで休止・解約はできません（スキップは可）。クーポンとの併用もできません。毎回18食以上を使い切れる家庭なら、24食で1食約517円まで下がります。まずは通常の定期便で量と好みを確かめてから切り替えるのが無難です。
        </p>
        <OfficialButton>モグモ 公式サイトで料金を確認する</OfficialButton>

        <SectionHeading id="cancel">定期便の変更・解約の締切</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["回数の縛り・解約金", "通常の定期便はなし（「継続回数の制限や、解約金はございません」）"],
            ["例外", "がんばる家族応援コース・VIPコース等は所定回数まで解約不可"],
            ["変更・解約の締切", "次回お届け予定日の10日前（過ぎると次々回から適用）"],
            ["手続き", "マイページ →「お問い合わせチャット」（24時間受付）"],
            ["スキップ・休止", "スキップは1回ずつ（連続不可）・休止は最大3か月（過ぎると自動再開）"],
            ["初回注文", "注文後のキャンセル不可"],
            ["支払い", "クレジットカード・NP後払い（手数料277円）・楽天ペイ（新規はAmazon Pay・Paidy不可）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 特定商取引法に基づく表記・利用規約・公式FAQ（2026年10月23日確認）</p>


        <SectionHeading id="good-reviews">モグモの良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">子どもが実際に食べた家庭のレビュー記事から、良い評判を出典付きで紹介します（引用は原文ママ・各記事には広告表記があります・2026年10月23日確認）。</p>
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

        <SectionHeading id="bad-reviews">モグモの悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">否定的な意見も出典付きで掲載しています。購入前にご確認いただきたい点です。</p>
        {badReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="bad" />
              ))}
            </div>
            <div className="bg-cream rounded-lg p-3 text-sm leading-relaxed">
              <p className="font-bold text-xs text-warm-gray mb-1">編集部の補足</p>
              <p>{category.comment}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="allergy">アレルギー・加熱方法・保存</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["アレルギー表示", "特定原材料等28品目を表示。一覧で除外して絞り込める"],
            ["混入の可能性", "「製造工場では共通の設備を使用して調理しており、予期しないアレルギー物質の混入を完全に防ぐことはできません」"],
            ["加熱", "電子レンジ（例: 500Wで約2分）または湯煎（約10分）。パン類はトースター、魚6品はレンジの前に解凍が必要"],
            ["保存・賞味期限", "冷凍庫（-18℃以下）・製造日から6か月〜1年"],
            ["箱のサイズ", "8食・12食は60サイズ、18食以上は80サイズ"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: モグモ公式FAQ・商品ページ（2026年10月23日確認）。食物アレルギーのあるお子さまは、各商品ページの原材料とコンタミネーション表記をご確認ください。</p>

        <SectionHeading id="comparison">ほかの冷凍幼児食との比較</SectionHeading>
        <ComparisonTable
          headers={["サービス", "対象", "料金の例（税込）", "送料"]}
          rows={[
            ["モグモ", "1歳6ヵ月〜6歳", "定期8食5,110円（1食639円）〜", "関東1,100円〜（応援コースは無料）"],
            ["the kindest キッズフード", "18か月頃〜", "定期便の初回5パウチ1,980円", "初回は送料無料"],
            ["Kidslation（キッズレーション）", "幼児", "定期便の商品 各598円", "全国一律990円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※各社公式サイトの表示（2026年10月23日確認）。the kindest の2回目以降の価格、Kidslation の価格の税込・税抜は確認できていません。比較の前に各公式サイトで最新の条件をご確認ください。
        </p>

        <SectionHeading id="recommend">向いている家庭・向いていない家庭</SectionHeading>
        <SubHeading>モグモが向いている家庭</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            <li>✓ 共働きなどで、子ども用の食事を毎日別に作る時間がない</li>
            <li>✓ 大人と同じ味付けを与えるのが気になる（塩分100gあたり1.0g以下が目標）</li>
            <li>✓ 2〜4週間ごとに一定量を使い切れる</li>
          </ul>
        </div>
        <SubHeading>モグモが向いていない家庭</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            <li>✗ 離乳食期（1歳半未満）の子ども向けを探している（手づかみ離乳食は<Link href="/articles/tedemogu-kuchikomi/" className="text-accent underline">TEDEMOGUの記事</Link>へ）</li>
            <li>✗ 1食の値段を家庭料理並みに抑えたい</li>
            <li>✗ 予定が読めず、10日前までに変更を決めるのが難しい</li>
          </ul>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          ママ・パパの食事の手間も減らしたい場合は、<Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark underline">産後におすすめの宅配弁当</Link>や<Link href="/articles/mamano-kyushoku-reviews/" className="text-accent hover:text-accent-dark underline">ママの休食の口コミ・評判</Link>もあわせてご覧ください。
        </p>


        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            モグモは、1歳6ヵ月〜6歳向けに<strong>管理栄養士が監修し、塩分と添加物に配慮した冷凍幼児食</strong>です。実食した家庭の記事では「食いつきが良い」「大人が食べてもおいしい」「冷凍庫に収めやすい」と評価されています。
          </p>
          <p>
            注意したいのは、送料込みで1食約570〜780円（関東）という価格と、10日前という変更締切です。まずは8食か12食の通常の定期便で子どもの好みと量を確かめ、毎回使い切れるようなら送料無料の応援コースを検討する流れが無理のない始め方です。
          </p>
        </div>

        <OfficialButton>モグモ 公式サイトで最新の料金・メニューを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/tedemogu-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">TEDEMOGU（てでもぐ）手づかみ離乳食の口コミ・評判</Link></li>
            <li><Link href="/articles/mogumoguimo-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">MOGUMOGUいも（歯固め干し芋）の口コミ・評判</Link></li>
            <li><Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark transition-colors">産後におすすめの宅配弁当ランキング</Link></li>
            <li><Link href="/articles/mamano-kyushoku-reviews/" className="text-accent hover:text-accent-dark transition-colors">ママの休食の口コミ・評判</Link></li>
            <li><Link href="/articles/reitouko-chiisai-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">冷凍庫が小さくても使える宅配弁当</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
