import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "GREEN SPOON(グリーンスプーン)の口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "GREEN SPOON(グリーンスプーン)は「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。野菜ゴロゴロの冷凍宅配食の料金（定期初回1食税込724円〜）、送料、メニューカテゴリも解説。最新の料金は公式でご確認ください。【2026年7月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/green-spoon-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "GREEN SPOON 口コミ, グリーンスプーン 口コミ, グリーンスプーン 評判, GREEN SPOON まずい, グリーンスプーン まずい, GREEN SPOON 料金, グリーンスプーン 値段, 宅配食 口コミ, スープ 宅配",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-07-04T00:00:00+09:00",
    modifiedTime: "2026-07-04T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "GREEN SPOONに注文回数の縛りはある？1回だけ試せる？",
    answer:
      "公式サイトによると「1回だけのお試しOK！注文回数縛りなし」です。定期プラン（サブスク）が基本ですが、初回受け取り後にスキップや解約が可能で、違約金はありません。また「スタート応援プラン」のように、100日間で3回以上の注文を約束する代わりに特典（初回2食無料＋期間中5%OFF）が付く選択制のプランもあります。条件は加入前に公式サイトで確認しましょう。",
  },
  {
    question: "GREEN SPOONの送料はいくら？",
    answer:
      "2025年9月の改定以降、北海道・沖縄を除く全国は全プラン一律税込1,089円です（北海道はS・M BOX税込1,573円/L BOX税込1,859円、沖縄はS・M税込2,541円/L税込3,289円）。送料は毎回かかるため、1回あたりの注文数を増やして配送回数を減らすと実質単価を抑えられます。最新の送料は公式サイトでご確認ください。",
  },
  {
    question: "GREEN SPOONは添加物を使っていない？",
    answer:
      "GREEN SPOONは独自ガイドライン「GREEN PROMISE」に基づき、保存料・甘味料・着色料・発色剤・漂白剤といった特定の添加物を使用しない方針を公表しています。また、HACCPやFSSC22000/JFS-B認証を取得した工場で製造されています。詳細な基準は公式サイトの記載をご確認ください。",
  },
  {
    question: "GREEN SPOONにご飯（主食）は付く？",
    answer:
      "メインディッシュやデリ弁当はおかず中心の構成で、白ご飯は基本的に付きません（ライス&パスタカテゴリを除く）。別売でオーツ麦ブレッドやおにぎりの主食セットが用意されています。1食で満腹感を求める場合は、主食を別途用意するか、ライス&パスタ系メニューを組み合わせるのがおすすめです。",
  },
  {
    question: "GREEN SPOONのメニューカテゴリは？",
    answer:
      "デリ弁当・メインディッシュ・ライス&パスタ・スープ・サラダ・スムージーの6カテゴリで、公式サイトでは「全80種以上のメニュー」と案内されています（ページにより「40種以上」の表記もあり、時期・対象で変動します）。管理栄養士が栄養の組み合わせを考えたオリジナルレシピで、120種類以上の素材が使われています。",
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
          <span className="text-foreground/70">口コミ・評判</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">GREEN SPOONの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "GREEN SPOON(グリーンスプーン)とは？基本情報まとめ" },
    { id: "good-reviews", label: "GREEN SPOONの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "GREEN SPOONの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "GREEN SPOONはまずい？味の評判を検証" },
    { id: "merits", label: "口コミから分かるメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "GREEN SPOONの料金・送料を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "nosh・三ツ星ファームとの簡易比較" },
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

function FAQ({ question, answer }: { question: string; answer: string }) {
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
    title: "野菜がゴロゴロで食べ応えがある・健康的",
    reviews: [
      {
        text: "ゴロゴロとたっぷり入った野菜がとてもうれしいです。食べ応えがあり、メインのおかずとしてしっかりと活躍しました。",
        meta: "編集部実食レビュー",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40172/",
      },
      {
        text: "今のところ2種類食べて割とおいしいし野菜ゴロゴロしてる感じも健康的でいい。",
        meta: "宅食レビューブログ掲載のX（旧Twitter）投稿",
        sourceName: "日仏家族の宅食レビュー",
        sourceUrl: "https://takushoku-repo.com/greenspoon/",
      },
      {
        text: "風邪をひいたとき、冷凍庫にグリーンスプーンの野菜スープがあって大変幸せな気持ちに…",
        meta: "宅食レビューブログ掲載のX（旧Twitter）投稿",
        sourceName: "日仏家族の宅食レビュー",
        sourceUrl: "https://takushoku-repo.com/greenspoon/",
      },
    ],
  },
  {
    title: "味が本格的・見た目がおしゃれで気分が上がる",
    reviews: [
      {
        text: "ハンバーグは肉汁がジューシーでお肉がおいしい！ 最近の冷凍弁当にありがちな「つくね感」はないです。",
        meta: "40社実食ブログのレビュー",
        sourceName: "日仏家族の宅食レビュー",
        sourceUrl: "https://takushoku-repo.com/greenspoon/",
      },
      {
        text: "新登場のメインディッシュシリーズはどれも色鮮やかで見栄えが良く、味も本格的で非常に美味しいです",
        meta: "実食レビュー",
        sourceName: "LIVING SUPPLY（フードサプライ運営）",
        sourceUrl: "https://www.foodsupply.co.jp/media/green-spoon",
      },
      {
        text: "おしゃれなパッケージで、冷凍庫を開けるたびに「今日はどれにしようかな」と気分が盛り上がります。",
        meta: "編集部実食レビュー",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40172/",
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
    title: "値段が高め・コスパ重視には向かない",
    reviews: [
      {
        text: "割引率が最も高い20食プランでも、1食あたりの通常価格は811円。（略）金額重視の人にはミスマッチ。",
        meta: "編集部実食レビュー",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40172/",
      },
      {
        text: "おかず1品のみの提供で副菜がつかないため、1食トータルで考えるとボリューム・コスパはやや控えめ",
        meta: "料理家による8品実食レビュー",
        sourceName: "meal-navi",
        sourceUrl: "https://meal-navi.com/green-spoon-review/",
      },
    ],
    comment:
      "GREEN SPOONは1食税込724円〜（定期初回L BOX）と、冷凍宅配食の中では中〜高価格帯です。副菜付きの「弁当型」ではなく、ゴロゴロ野菜のおかず・スープ1品型が中心なので、価格を「1食の完成度」で見るか「野菜量と素材品質」で見るかで評価が変わります。食費最優先なら低価格帯サービスの方が向いています。",
  },
  {
    title: "量が控えめ・がっつり派には物足りない",
    reviews: [
      {
        text: "1食あたりの量が200～250g程度と控えめ。食べ盛りの10代やガッツリ食べたい人には物足りないと感じられる可能性が。",
        meta: "編集部実食レビュー",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40172/",
      },
    ],
    comment:
      "主食が付かないメニューが中心のため、成人男性や食べ盛りの世代は主食セット（オーツ麦ブレッド・おにぎり）やご飯を組み合わせる前提で考えましょう。逆に、軽めの夕食や置き換えを狙う人にはちょうど良い量という評価もあります。",
  },
  {
    title: "冷凍庫のスペースを取る",
    reviews: [
      {
        text: "一人暮らし用の冷蔵庫なら8食分と主食セットだけでも半分程度はスペースを取る",
        meta: "実食レビュー",
        sourceName: "LIVING SUPPLY（フードサプライ運営）",
        sourceUrl: "https://www.foodsupply.co.jp/media/green-spoon",
      },
    ],
    comment:
      "パウチ型（スープ・スムージー）は比較的かさばりにくいものの、8食以上をまとめて受け取ると小型冷凍庫では圧迫感があります。冷凍庫が小さい場合は、S BOX（8食）から始めて収納量を確認するのが安全です。",
  },
];

/* ---------- Page Component ---------- */

export default function GreenSpoonKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-07-04T00:00:00+09:00",
    dateModified: "2026-07-04T00:00:00+09:00",
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
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://takushoku-biyori.com/",
      },
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      {
        "@type": "ListItem",
        position: 3,
        name: "GREEN SPOONの口コミ・評判",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        {/* Title */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
              口コミ・評判
            </span>
            <span className="text-[10px] text-gray-400">PR掲載も含みます</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-07-04">公開: 2026年7月4日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>{" "}
              /{" "}
              <Link href="/author/" className="text-accent hover:underline">
                編集部メンバー
              </Link>
            </span>
          </div>
        </header>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「GREEN SPOON(グリーンスプーン)って実際どうなの？」「まずいって口コミは本当？」——ゴロゴロ野菜のスープやメインディッシュで人気の冷凍宅配食GREEN SPOON。2024年に江崎グリコのグループ入りし、コンビニ販売も始まるなど注目度が高まっています。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー記事を出典付きで整理</strong>し、GREEN SPOONの良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>料金体系・送料・メニューカテゴリ・無添加方針</strong>まで詳しく解説。GREEN SPOONが自分に合うかどうか、この記事で判断できます。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：GREEN SPOONはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            GREEN SPOONは、<strong>「野菜量と素材の質を重視して、健康的な食事を手軽に続けたい人」</strong>に向いた冷凍宅配食です。口コミでは「野菜ゴロゴロで食べ応えがある」「見た目がおしゃれで気分が上がる」という評価が目立つ一方、価格の高さ・量の控えめさ・冷凍庫スペースは注意点として挙がっています。「まずい」という声は一部メニューへの評価が中心で、感じ方には個人差があります（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>ゴロゴロ野菜で食べ応え・彩りがある</li>
                <li>管理栄養士監修＋特定添加物不使用の方針</li>
                <li>スープ/サラダ/スムージー等カテゴリが豊富</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>1食税込724円〜＋送料で価格は高め</li>
                <li>おかず1品型が中心で主食は付かない</li>
                <li>まとめ買い前提で冷凍庫スペースが要る</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://green-spoon.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            GREEN SPOON公式サイトで最新の料金・メニューを見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">GREEN SPOON(グリーンスプーン)とは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          GREEN SPOON(グリーンスプーン)は、株式会社Greenspoon（2019年設立・東京都渋谷区）が運営する冷凍宅配食サービスです。パーソナルスムージーからスタートし、現在は<strong>デリ弁当・メインディッシュ・ライス&パスタ・スープ・サラダ・スムージーの6カテゴリ</strong>を展開。2024年6月に江崎グリコのグループ入りし（累計会員数15万人突破・当時の公式発表）、2025年11月にはセブン-イレブン約300店でのスープ販売も始まりました。
        </p>

        <SubHeading>GREEN SPOONの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社Greenspoon（2019年設立・江崎グリコのグループ会社）"],
            ["サービス形態", "冷凍宅配食（サブスク・回数縛りなし）"],
            ["カテゴリ", "デリ弁当 / メインディッシュ / ライス&パスタ / スープ / サラダ / スムージー"],
            ["メニュー数", "全80種以上（公式表記に幅あり）・素材120種類以上"],
            ["監修", "管理栄養士監修のオリジナルレシピ"],
            ["添加物", "独自基準で保存料・甘味料・着色料・発色剤・漂白剤 不使用"],
            ["調理", "電子レンジ約5分（メニューによる）"],
            ["解約", "回数縛りなし・1回だけのお試しOK（公式サイトより）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: GREEN SPOON公式サイト・公式FAQ（2026年7月時点）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>料金プラン概要（定期・初回BOX）</SubHeading>
        <ComparisonTable
          headers={["プラン", "食数", "1食あたり（税込）"]}
          rows={[
            ["S BOX", "8食", "810円"],
            ["M BOX", "12食", "745円"],
            ["L BOX", "20食", "724円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          定期プランは<strong>注文数が増えるほど1食単価が下がる仕組み</strong>で、2回目以降は8〜28食の範囲で自由に変更できます。初回はS/M/L BOXが特別価格で提供されるキャンペーンが実施されることがあります（時期により内容が変わるため、具体額は公式サイトでご確認ください）。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: GREEN SPOON公式FAQ「商品の価格」（2026年7月時点）。カテゴリごとの単品価格・最新のキャンペーンは公式サイトでご確認ください。
        </p>

        <SubHeading>GREEN SPOONの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "ゴロゴロ野菜×管理栄養士監修のレシピ",
              text: "公式サイトによると「カラダにいい栄養の組み合わせを管理栄養士がとことん考え抜いたオリジナルレシピ」で、急速冷凍した120種類以上の素材を使用。一般的な冷凍弁当と比べて野菜の存在感が強く、「野菜不足の解消」を軸に選ばれています。",
            },
            {
              title: "特定添加物不使用の「GREEN PROMISE」",
              text: "独自ガイドラインに基づき、保存料・甘味料・着色料・発色剤・漂白剤を使用しない方針を公表。HACCP・FSSC22000/JFS-B認証工場での製造など、素材と製造品質へのこだわりが明確です。",
            },
            {
              title: "弁当型に縛られない6カテゴリ構成",
              text: "「今日はスープだけ」「朝はスムージー」など、弁当型サービスではできない使い方が可能。デリ弁当・メインディッシュからサラダ・スムージーまで、生活シーンに合わせて組み合わせられるのが独自の強みです。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">GREEN SPOONの良い口コミ・評判（出典付き）</SectionHeading>

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

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">GREEN SPOONの悪い口コミ・評判（出典付き）</SectionHeading>

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

        {/* ===== まずい検証 ===== */}
        <SectionHeading id="mazui">GREEN SPOONはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「GREEN SPOON まずい」と検索されることがあります。公開レビューを確認すると、<strong>「まずい」という強い評価は一部メニューに対するもので、全体評価はおおむね良好</strong>という構図でした。実例で検証します。
        </p>

        <SubHeading>「まずい」と言われる主な理由3つ</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. メニューによる当たり外れ（特に魚系の一部）</p>
            <p className="mb-1.5">
              1年以上利用しているブロガーは、魚系メニュー「太刀魚とブロッコリーのレモンバターソテー」について「初めて美味しくないを通り越してまずいと思ってしまいました」と率直に書いています。ただし同じ筆者は直後に「あくまで、私の味覚なので（略）合わなかっただけかもしれません」と留保し、<strong>通常のメニューは「冷凍されていたことを一瞬にして忘れてしまうような美味しさ」</strong>と評価しています。つまり「まずい」は特定メニューの外れ体験でした。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://ameblo.jp/kappameal/entry-12862203037.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                Amebaブログ「かっぱごはん」
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 素材活かしの薄味設計が濃い味好みに合わない</p>
            <p className="mb-1.5">
              「味つけが薄めなので好みが分かれるかも」（LIVING SUPPLYの口コミまとめ）という指摘があります。特定添加物不使用・素材重視の設計のため、濃い味・ジャンクな味を期待すると物足りなく感じる可能性があります。エスニック系など個性的な味付けのメニューも、好みが分かれる要素です。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://www.foodsupply.co.jp/media/green-spoon"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                LIVING SUPPLY
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">3. 電子レンジの加熱ムラ</p>
            <p className="mb-1.5">
              料理家による8品実食レビュー（meal-navi）は、スープの調味料のかたまりが具材になじまない加熱ムラが「味が薄い」と感じる一因になると指摘。利用者からも「美味しいのとまずいのの差が激しいんだけど、（略）鍋に水分追加して煮るか、炊飯器で調理モードでほっておくとすっごく美味くなった」（meal-navi掲載のX投稿）と、<strong>加熱方法の工夫で改善した</strong>報告があります。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://meal-navi.com/green-spoon-review/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                meal-navi
              </a>
            </p>
          </div>
        </div>

        <SubHeading>一方で「美味しい」という評価も多い</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "味付けは確かにあっさり目になっていますが、ヘルシーで食べやすく、決して薄いとは感じませんでした",
              meta: "実食レビュー",
              sourceName: "LIVING SUPPLY（フードサプライ運営）",
              sourceUrl: "https://www.foodsupply.co.jp/media/green-spoon",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "これまで40社の冷凍弁当を食べてきた自分たちもちょっと感動するレベル。",
              meta: "40社実食ブログのレビュー",
              sourceName: "日仏家族の宅食レビュー",
              sourceUrl: "https://takushoku-repo.com/greenspoon/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は①一部メニュー②薄味の好み③加熱ムラの3因に分解できる</p>
          <p>
            強い酷評は特定メニュー（魚系など）への外れ体験が中心で、同じレビュアーが他メニューを高く評価しているケースが目立ちます。<strong>濃い味・大盛り志向の人には合いにくい</strong>一方、素材の味・野菜量を重視する人の満足度は高い傾向です。スープ系は加熱後によく混ぜる・鍋で温めるなどの工夫でムラが解消できるというレビューもあるため、初回は評判の良い定番メニューから試すのが失敗しにくい方法です。
          </p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット5つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミや公開情報から見えてくるGREEN SPOONのメリットを5つにまとめました。
        </p>

        {[
          {
            num: 1,
            title: "野菜量の多さは冷凍宅配食でも屈指",
            text: "「ゴロゴロとたっぷり入った野菜」（OZmall）という評価に代表される通り、野菜の存在感が最大の強みです。急速冷凍した素材を使い、一般的な冷凍弁当で不足しがちな野菜をしっかり摂れる設計。野菜不足を自覚している一人暮らし・共働き世帯に選ばれています。",
          },
          {
            num: 2,
            title: "特定添加物不使用×認証工場製造の安心感",
            text: "保存料・甘味料・着色料・発色剤・漂白剤を使わない独自基準「GREEN PROMISE」を公表し、HACCP・FSSC22000/JFS-B認証工場で製造。素材や添加物が気になる人にとって、方針が明文化されているのは選びやすいポイントです。",
          },
          {
            num: 3,
            title: "スープ・スムージーなど使い方の自由度が高い",
            text: "弁当型に限定されず、「夜はメインディッシュ、朝はスムージー、小腹にスープ」という使い分けが可能。「風邪をひいたとき、冷凍庫にグリーンスプーンの野菜スープがあって大変幸せな気持ちに」（掲載X投稿）のように、体調が悪い時の備えとしても評価されています。",
          },
          {
            num: 4,
            title: "見た目・パッケージの楽しさで続けやすい",
            text: "「冷凍庫を開けるたびに『今日はどれにしようかな』と気分が盛り上がります」（OZmall）という声の通り、デザイン性の高さは継続のモチベーションになります。健康食の「我慢感」が薄いのは、食事管理を続けたい人には実利です。",
          },
          {
            num: 5,
            title: "回数縛りなしで試しやすい",
            text: "公式サイトに「1回だけのお試しOK！注文回数縛りなし」と明記されており、初回BOXを受け取ってから継続判断ができます。スタート応援プラン（100日3回注文の約束で初回2食無料＋5%OFF）のような選択制の特典もあり、自分のペースで始められます。",
          },
        ].map((merit) => (
          <div key={merit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {merit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{merit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{merit.text}</p>
            </div>
          </div>
        ))}

        {/* ===== デメリット ===== */}
        <SectionHeading id="demerits">注意すべきデメリット3つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          メリットだけでなく、「ここは正直イマイチ」というポイントも率直にお伝えします。
        </p>

        {[
          {
            num: 1,
            title: "価格は高め＋送料が毎回かかる",
            text: "1食税込724円〜（定期初回L BOX）に加え、送料が全国一律税込1,089円（北海道・沖縄除く・2025年9月改定）かかります。L BOX（20食）なら送料負担は1食あたり約54円に抑えられますが、少量注文だと割高です。「金額重視の人にはミスマッチ」（OZmall）という指摘は妥当で、コスパ優先ならまごころケア食などの低価格帯が向きます。",
          },
          {
            num: 2,
            title: "主食なし・おかず1品型なので満腹感は組み立て式",
            text: "副菜付き弁当型ではないため、1袋で「定食」にはなりません。ご飯やパンを足す、スープを組み合わせるなど、満腹感は自分で組み立てる必要があります。量を重視する男性は物足りなさを感じやすい点は口コミの通りです。",
          },
          {
            num: 3,
            title: "冷凍庫スペースの確保が必要",
            text: "「一人暮らし用の冷蔵庫なら8食分と主食セットだけでも半分程度はスペースを取る」（LIVING SUPPLY）という報告の通り、まとめ買いには冷凍庫の空きが必須です。最初はS BOX（8食）で収納感覚を確かめてから増やすのが現実的です。",
          },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {demerit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{demerit.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 料金・送料 ===== */}
        <SectionHeading id="price">GREEN SPOONの料金・送料を徹底解説</SectionHeading>

        <SubHeading>定期プラン（初回BOX・税込）</SubHeading>
        <ComparisonTable
          headers={["プラン", "食数", "1食あたり", "送料込み1食あたり（全国・試算）"]}
          rows={[
            ["S BOX", "8食", "810円", "約946円"],
            ["M BOX", "12食", "745円", "約836円"],
            ["L BOX", "20食", "724円", "約778円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: GREEN SPOON公式FAQ（2026年7月時点）。送料込み単価は全国送料（税込1,089円）で編集部が試算。2回目以降は8〜28食で変更可能・カテゴリごとの単価制です。最新は公式サイトでご確認ください。
        </p>

        <SubHeading>送料（2025年9月改定後・税込）</SubHeading>
        <ComparisonTable
          headers={["地域", "S・M BOX", "L BOX"]}
          rows={[
            ["全国（北海道・沖縄除く）", "1,089円", "1,089円"],
            ["北海道", "1,573円", "1,859円"],
            ["沖縄", "2,541円", "3,289円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          <strong>送料のポイント：</strong>送料は注文ごとにかかるため、<strong>1回の食数を増やして配送回数を減らす</strong>のが実質単価を下げるコツです。L BOX（20食）なら送料負担は1食あたり約54円。S BOX（8食）だと約136円になります。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: GREEN SPOON公式お知らせ（送料改定・2026年7月確認）。最新の送料は公式サイトでご確認ください。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>GREEN SPOONがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "野菜不足を手軽に解消したい人",
              "添加物・素材の質にこだわりたい人",
              "スープ・スムージーなど弁当以外の形も使いたい人",
              "食事の見た目・気分の上がる体験も重視する人",
              "軽めの夕食・置き換えで体調管理をしたい人",
              "回数縛りなしでまず1回試したい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>GREEN SPOONをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "食費を最優先で抑えたい人 → まごころケア食などがおすすめ",
              "ご飯付き・副菜付きの「1食完結型」が欲しい人 → nosh・食宅便がおすすめ",
              "がっつりボリューム重視の人",
              "濃い味・こってり系が好きな人",
              "冷凍庫のスペースに余裕がない人",
              "北海道・沖縄在住で送料負担を抑えたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">nosh・三ツ星ファームとの簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          GREEN SPOONと人気の冷凍宅配弁当2社を比較しました。詳しくは
          <Link
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline"
          >
            noshの口コミ・評判
          </Link>
          もあわせてご覧ください。
        </p>

        <ComparisonTable
          headers={["項目", "GREEN SPOON", "nosh", "三ツ星ファーム"]}
          rows={[
            ["1食あたり最安（税込）", "724円〜（定期初回L BOX）", "620円〜", "626円〜"],
            ["形態", "おかず/スープ/スムージー等1品型", "副菜付き弁当型", "副菜付き弁当型"],
            ["強み", "野菜量・素材・無添加方針", "低糖質設計・アプリ・自由度", "味のクオリティ"],
            ["主食", "なし（主食セット別売）", "なし", "なし"],
            ["送料（全国・税込）", "1,089円（北海道・沖縄除く）", "地域別913円〜", "990円"],
            ["回数縛り", "なし", "なし", "プランによる"],
            ["向いている人", "野菜・素材重視", "手軽さ・食事管理", "味重視"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※各社公式サイトの公開情報をもとに編集部作成（2026年7月時点）。最新情報は各公式サイトでご確認ください。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：GREEN SPOONはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            GREEN SPOONは、<strong>「野菜量」「素材・無添加方針」「カテゴリの自由度」</strong>で独自の強みを持つ冷凍宅配食です。公開レビューでは「野菜ゴロゴロで食べ応えがある」「冷凍と思えない美味しさ」という評価が目立ち、江崎グリコグループ入り・コンビニ展開など事業面の信頼材料も揃っています。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            「まずい」という口コミは、一部メニューの当たり外れ・薄味設計・加熱ムラに分解でき、多くは加熱の工夫やメニュー選びで対処可能です。一方、<strong>価格の高さと主食なしの構成は事実</strong>なので、コスパ・ボリューム最優先の人には向きません。
          </p>
          <p className="text-sm leading-relaxed">
            回数縛りはないので、まずは初回BOXを1回試し、野菜量と味が自分に合うかを確かめるのが失敗しない始め方です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/tsukurioki-jp-kuchikomi/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            つくりおき.jpの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/diet-osusume/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ダイエット向け宅配弁当のおすすめ
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
                宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。
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
                nosh(ナッシュ)の口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/tsukurioki-jp-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                つくりおき.jp(現ツクリオ)の口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】三ツ星ファームの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                ダイエット向け宅配弁当のおすすめ
              </Link>
            </li>
            <li>
              <Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent hover:text-accent-dark transition-colors">
                冷凍弁当の栄養バランスの考え方
              </Link>
            </li>
            <li>
              <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
