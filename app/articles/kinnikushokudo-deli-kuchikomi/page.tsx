import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "筋肉食堂DELIの口コミ・評判は？まずいって本当？高たんぱく宅配食の味・料金を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "筋肉食堂DELIは「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。レストラン「筋肉食堂」発の高たんぱく冷凍宅配食の料金（ベーシック7食7,560円・2026年7月4日公式確認）・送料・マッスルデリとの違いも解説します。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/kinnikushokudo-deli-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "筋肉食堂DELI 口コミ, 筋肉食堂DELI 評判, 筋肉食堂DELI まずい, 筋肉食堂DELI 料金, 筋肉食堂 宅配, 高たんぱく 宅配弁当, 筋トレ 宅配食, ボディメイク 冷凍弁当",
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
    question: "筋肉食堂DELIはまずいって本当？",
    answer:
      "公開レビューを確認すると、「『まずい』と口コミしている人は今のところ見当たらず、これは冷凍宅配弁当サービスの中でもかなり珍しい光景」（マイナビニュース）、「味付けに関して好みは別れましたが、まずいとの声はなかったです」（HonNe）と、複数媒体の調査で「まずい」の声が確認されていません。レストラン運営で培った調理ノウハウが背景にあると考えられます。ただし鶏肉のクセなど好みが分かれる部分はあり、感じ方には個人差があります。",
  },
  {
    question: "筋肉食堂DELIとマッスルデリの違いは？",
    answer:
      "両方とも高たんぱく宅配食ですが、別会社の別サービスです。筋肉食堂DELI（deli.kinnikushokudo.jp）はTANPAC株式会社が運営し、都内で高たんぱくレストラン「筋肉食堂」を展開する外食企業の宅配版。マッスルデリ（muscledeli.jp）は株式会社Muscle Deliが運営する宅配専業サービスです。名前が似ているため検索時は注意してください。",
  },
  {
    question: "筋肉食堂DELIに初回割引やお試しセットはある？",
    answer:
      "2026年7月4日に編集部が公式サイトを確認した時点では、初回限定割引の表記は見当たりませんでした（定期購入が単品比15%オフになる常設の仕組みはあり）。比較サイトに掲載されている「初回50%OFF」等の情報は公式で確認できなかったため、最新のキャンペーンは必ず公式サイトでご確認ください。",
  },
  {
    question: "筋肉食堂DELIの送料は高い？",
    answer:
      "送料は地域・食数・箱サイズで変動し、目安は関東で7食1,640円・14食1,780円、沖縄は3,190円〜4,180円です（税込・2026年7月4日公式確認）。定期購入でも送料無料にはならないため、送料を含めた実質単価で判断するのが重要です。1回の注文数を増やして配送回数を減らすと、1食あたりの送料負担を下げられます。",
  },
  {
    question: "筋肉食堂DELIの解約・スキップは簡単？",
    answer:
      "定期購入に回数縛り・解約金はなく、次回お届け予定日の7日前までにマイページから停止手続きをすれば解約できます（2026年7月4日の公式サイト確認時点）。電話が必要なサービスと比べて手続きは簡単な部類です。",
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
          <span className="text-foreground">筋肉食堂DELIの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "筋肉食堂DELIとは？基本情報まとめ" },
    { id: "difference", label: "マッスルデリとの違い（混同注意）" },
    { id: "good-reviews", label: "筋肉食堂DELIの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "筋肉食堂DELIの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "筋肉食堂DELIはまずい？味の評判を検証" },
    { id: "merits", label: "口コミから分かるメリット4つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "筋肉食堂DELIの料金・送料を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
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
    title: "高たんぱくなのに美味しい・冷凍を感じさせない",
    reviews: [
      {
        text: "お肉やお魚も臭みがなく、全体的に冷凍弁当を感じさせないおいしさがあります！",
        meta: "記事執筆者の実食レビュー",
        sourceName: "マイナビニュース 宅配弁当・宅食比較",
        sourceUrl: "https://delivery-lunch.news.mynavi.jp/kinnikushokudo/",
      },
      {
        text: "低脂肪高タンパクで美味しいので気に入りました",
        meta: "記事掲載のX（旧Twitter）投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/kinnikushokudo/",
      },
      {
        text: "つくねはお肉がギュッと詰まっており、軟骨入りで噛むほどに美味しく感じました",
        meta: "編集部実食レビュー・つくねと鶏もも肉の特製W照り焼き",
        sourceName: "HAPPINESS! magazine（ティップネス運営）",
        sourceUrl:
          "https://online.tipness.co.jp/feature/home_meal/muscle-restaurant/",
      },
    ],
  },
  {
    title: "ボリューム・満足感がありボディメイクに向く",
    reviews: [
      {
        text: "お肉や魚が量もしっかり入っており満足感があることが一番おすすめしたいポイント",
        meta: "20代女性・アンケート回答",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/kinnikushokudo/",
      },
      {
        text: "栄養バランスが良く、カロリーも低く、痩せるためにもってこいの献立ばかりです",
        meta: "20代男性・アンケート回答",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/kinnikushokudo/",
      },
      {
        text: "ダイエット食とは思えない満足度でした",
        meta: "料理家（調理師・野菜ソムリエ）の実食レビュー",
        sourceName: "プロの宅食さがし（meal-navi）",
        sourceUrl: "https://meal-navi.com/kinnikushokudo-deli-review/",
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
    title: "価格・送料が高い",
    reviews: [
      {
        text: "送料も考えると値段が少し高いと感じました",
        meta: "20代男性・アンケート回答",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/kinnikushokudo/",
      },
      {
        text: "筋肉食堂DELIは、お弁当としてはやや高めの料金だと感じました。",
        meta: "28食を実食した個人ブロガーの感想",
        sourceName: "ひとり暮らしの宅配食生活",
        sourceUrl:
          "https://www.single-meallife.com/kinnikushokudo-deli-review/",
      },
    ],
    comment:
      "ベーシックコース7食は定期7,560円＝1食1,080円で、送料（関東7食1,640円）を含めると1食あたり約1,314円です（2026年7月4日の公式サイト確認時点）。一般的な冷凍弁当の約2倍の価格帯で、定期でも送料は無料になりません。「たんぱく質量あたりの単価」で見るか「1食の値段」で見るかで評価が分かれるサービスです。",
  },
  {
    title: "冷凍庫のスペースを取る",
    reviews: [
      {
        text: "どうしても冷凍庫で幅をとるので、きれいに重ねられてコンパクトに収納できるともっと嬉しいです。",
        meta: "20代女性・アンケート回答",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/kinnikushokudo/",
      },
    ],
    comment:
      "ボリュームがある分、容器も大きめです。一人暮らし用の冷凍庫なら、まず7食から始めて収納感覚を確かめるのが安全です。",
  },
  {
    title: "メニューのラインナップに変化が少ないと感じる声",
    reviews: [
      {
        text: "先週とラインナップ同じw 種類これだけなん？",
        meta: "記事掲載のX（旧Twitter）投稿・2024年10月",
        sourceName: "マイナビニュース 宅配弁当・宅食比較",
        sourceUrl: "https://delivery-lunch.news.mynavi.jp/kinnikushokudo/",
      },
    ],
    comment:
      "コース内のメニュー構成は時期により入れ替わりますが、60種以上を掲げる大手（noshなど）と比べると選択肢の幅は狭めです。長期間続ける場合は飽き対策として、コースの切り替えや他社との併用も検討しましょう。",
  },
];

/* ---------- Page Component ---------- */

export default function KinnikushokudoDeliKuchikomiPage() {
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
        name: "筋肉食堂DELIの口コミ・評判",
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
            「筋肉食堂DELIって実際どうなの？」「高たんぱくの宅配食ってまずいんじゃない？」——都内で高たんぱくレストラン「筋肉食堂」を運営するTANPAC株式会社が手がける冷凍宅配食、筋肉食堂DELI。トレーニング民やダイエット中の人から注目を集めています。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー記事を出典付きで整理</strong>し、筋肉食堂DELIの良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われていないかも正面から調べました。
          </p>
          <p>
            さらに、<strong>料金体系・送料・よく混同されるマッスルデリとの違い</strong>まで、2026年7月4日確認の公式データで解説します。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：筋肉食堂DELIはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            筋肉食堂DELIは、<strong>「たんぱく質量を最優先しつつ、味にも妥協したくない人」</strong>に向いた高たんぱく宅配食です。口コミでは「冷凍弁当を感じさせない美味しさ」「満足感がある」という評価が目立ち、複数媒体の調査で「まずい」の声が確認されていない珍しいサービスです（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。一方、1食1,000円超＋送料という価格は明確な注意点です。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>レストラン品質の味・肉魚の臭みのなさ</li>
                <li>高たんぱくでボリューム・満足感がある</li>
                <li>回数縛りなし・マイページで解約可</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>1食約1,080円〜＋送料で価格は高め</li>
                <li>定期でも送料無料にならない</li>
                <li>容器が大きく冷凍庫スペースが要る</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://deli.kinnikushokudo.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            筋肉食堂DELI公式サイトで最新の料金・メニューを見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">筋肉食堂DELIとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          筋肉食堂DELIは、TANPAC株式会社が運営する高たんぱく冷凍宅配食サービスです。同社は都内で高たんぱくグリルダイニング「筋肉食堂」を3店舗（六本木・渋谷・銀座）展開しており、<strong>実店舗レストランの調理ノウハウをそのまま宅配食に落とし込んでいる</strong>のが最大の特徴。目的別にベーシック・ローカーボ・バルクアップなどのコースが用意されています。
        </p>

        <SubHeading>筋肉食堂DELIの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "TANPAC株式会社（外食・中食・宅食通販・アスリートサポート事業）"],
            ["サービス形態", "高たんぱく冷凍宅配食（定期・都度どちらも可）"],
            ["実店舗", "高たんぱくレストラン「筋肉食堂」都内3店舗＋テイクアウト店"],
            ["主なコース", "ベーシック / ローカーボ / バルクアップ ほか単品セットあり"],
            ["食数", "7食・14食・21食から選択"],
            ["定期割引", "単品購入よりいつでも15%オフ（公式表記）"],
            ["送料", "地域・食数で変動（関東7食1,640円〜）。定期でも送料無料にならず"],
            ["解約", "回数縛り・解約金なし。7日前までにマイページから停止"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: 筋肉食堂DELI公式サイト（2026年7月4日時点の編集部確認）。最新情報は公式サイトでご確認ください。
        </p>

        {/* ===== マッスルデリとの違い ===== */}
        <SectionHeading id="difference">マッスルデリとの違い（混同注意）</SectionHeading>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="font-bold text-sm mb-2">⚠️ 「筋肉食堂DELI」と「マッスルデリ」は別サービスです</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            どちらも高たんぱく宅配食で名前が似ていますが、<strong>筋肉食堂DELI（TANPAC株式会社・deli.kinnikushokudo.jp）</strong>と<strong>マッスルデリ（株式会社Muscle Deli・muscledeli.jp）</strong>は運営会社も商品も異なる別サービスです。本記事は筋肉食堂DELIについての記事です。マッスルデリについては
            <Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark underline">
              マッスルデリの口コミ・評判
            </Link>
            をご覧ください。
          </p>
        </div>

        <ComparisonTable
          headers={["項目", "筋肉食堂DELI", "マッスルデリ"]}
          rows={[
            ["運営会社", "TANPAC株式会社", "株式会社Muscle Deli"],
            ["公式サイト", "deli.kinnikushokudo.jp", "muscledeli.jp"],
            ["出自", "実店舗レストラン「筋肉食堂」の宅配版", "宅配専業の高たんぱく食サービス"],
            ["コース例", "ベーシック / ローカーボ / バルクアップ", "LEAN / MAINTAIN / GAIN / LOW CARB"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※両社公式サイトの公開情報をもとに編集部作成（2026年7月時点）。
        </p>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">筋肉食堂DELIの良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公開されている第三者メディアの実食レビュー・アンケート調査から、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示）。
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
        <SectionHeading id="bad-reviews">筋肉食堂DELIの悪い口コミ・評判（出典付き）</SectionHeading>

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
        <SectionHeading id="mazui">筋肉食堂DELIはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「筋肉食堂DELI まずい」と検索されることがあります。公開レビューを確認すると、<strong>複数の媒体が独立に「まずいという声が見当たらない」と報告している</strong>、宅配食としては珍しい結果でした。
        </p>

        <SubHeading>「まずい」の声を探した調査結果（出典付き）</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "結論、味付けに関して好みは別れましたが、まずいとの声はなかったです",
              meta: "独自アンケートに基づく検証結論",
              sourceName: "HonNe（EXIDEA運営）",
              sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/kinnikushokudo/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "『まずい』と口コミしている人は今のところ見当たらず、これは冷凍宅配弁当サービスの中でもかなり珍しい光景だと感じました。",
              meta: "記事執筆者による口コミ調査の結論",
              sourceName: "マイナビニュース 宅配弁当・宅食比較",
              sourceUrl: "https://delivery-lunch.news.mynavi.jp/kinnikushokudo/",
            }}
            tone="good"
          />
        </div>

        <SubHeading>ただし「好みが分かれる」部分はある</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "味付けはかなり本格的で満足度は高い一方、鶏肉のクセが気になる人には合わないと感じる部分もありました。",
              meta: "料理家の7食実食による留保付き評価",
              sourceName: "プロの宅食さがし（meal-navi）",
              sourceUrl: "https://meal-navi.com/kinnikushokudo-deli-review/",
            }}
            tone="bad"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：味の評価は高水準で安定。不満は「価格」に集中</p>
          <p>
            レストラン運営で培った調理が背景にあるためか、味に関する酷評は編集部の確認範囲では見つかりませんでした。高たんぱく食にありがちな「パサつき」への不満が少ないのも特徴です。一方で、鶏肉中心のメニューが続くとクセや飽きを感じる人はいます。<strong>実質的な検討ポイントは味よりも「1食1,300円前後（送料込み）を継続できるか」</strong>です。
          </p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット4つ</SectionHeading>

        {[
          {
            num: 1,
            title: "レストラン品質の味で「まずい」の声が見当たらない",
            text: "複数媒体の口コミ調査が独立に「まずいという声がない」と報告。実店舗「筋肉食堂」の調理ノウハウを持つ外食企業の宅配版という出自が、味の安定感につながっています。",
          },
          {
            num: 2,
            title: "高たんぱくでボリューム・満足感がある",
            text: "「お肉や魚が量もしっかり入っており満足感がある」（HonNe掲載口コミ）と、量への満足度が高いのが特徴。減量中でも食べた感を重視したい人に向きます。",
          },
          {
            num: 3,
            title: "目的別コースでPFC管理がしやすい",
            text: "ダイエット向けのローカーボ、日常使いのベーシック、増量期のバルクアップと目的別にコースが分かれており、たんぱく質量基準で食事を組み立てたい人に選びやすい構成です。各メニューの栄養成分は公式サイトでご確認ください。",
          },
          {
            num: 4,
            title: "回数縛りなし・マイページで解約完結",
            text: "定期購入に回数縛り・解約金はなく、7日前までにマイページから停止すれば解約できます。電話必須のサービスと比べて始めやすく、やめやすい設計です。",
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

        {[
          {
            num: 1,
            title: "価格＋送料で1食1,300円前後と高額",
            text: "ベーシック7食定期7,560円＋関東送料1,640円で、送料込み1食約1,314円（2026年7月4日公式確認）。しかも定期でも送料は無料になりません。食費を抑えたい人には不向きで、「たんぱく質への投資」と割り切れる人向けです。",
          },
          {
            num: 2,
            title: "初回割引が（確認時点で）公式に見当たらない",
            text: "2026年7月4日の編集部確認時点で、公式サイトに初回限定割引の表記は見当たりませんでした。比較サイトの「初回50%OFF」等の記載は公式で確認できなかったため、鵜呑みにせず公式サイトで最新のキャンペーンを確認してください。",
          },
          {
            num: 3,
            title: "冷凍庫スペースとメニューの飽きに注意",
            text: "容器が大きめで冷凍庫を圧迫しやすく、ラインナップの変化が少ないという声もあります。まず7食で収納と味を確かめ、長期継続時はコース切り替えで変化をつけるのがおすすめです。",
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
        <SectionHeading id="price">筋肉食堂DELIの料金・送料を徹底解説</SectionHeading>

        <p className="text-xs text-warm-gray mb-4">
          ※本セクションの料金・送料は、編集部が2026年7月4日に筋肉食堂DELI公式サイトで直接確認した金額（税込）です。最新の金額は公式サイトでご確認ください。
        </p>

        <SubHeading>コース別料金（税込）</SubHeading>
        <ComparisonTable
          headers={["コース", "7食（定期）", "14食（定期）", "21食（定期）", "7食（都度）"]}
          rows={[
            ["ベーシック", "7,560円", "14,818円", "21,546円", "8,694円"],
            ["ローカーボ", "7,333円", "14,364円", "20,866円", "8,424円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          定期購入は単品購入より<strong>いつでも15%オフ</strong>（公式表記）。バルクアップコースなど他コースの価格は公式サイトでご確認ください。
        </p>

        <SubHeading>送料（地域・食数で変動）</SubHeading>
        <ComparisonTable
          headers={["地域", "7食", "14食"]}
          rows={[
            ["関東", "1,640円", "1,780円"],
            ["沖縄", "3,190円", "（食数により〜4,180円）"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          <strong>送料のポイント：</strong>定期購入でも送料は無料になりません。ベーシック7食（定期・関東）の場合、送料込みで1食あたり約1,314円。14食にまとめると送料負担が半減し、1食あたり約1,186円まで下がります。<strong>まとめ注文で配送回数を減らすのが実質単価を下げるコツ</strong>です。
        </p>
        <p className="text-sm mb-6 leading-relaxed">
          編集部が18社の料金・送料を公式サイトで直接確認し、送料込みの1食実質単価に正規化して比較した<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>（2026年7月4日調査）では、筋肉食堂DELIと他社の横並び比較ができます。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>筋肉食堂DELIがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "筋トレ・ボディメイク中でたんぱく質量を最優先したい人",
              "高たんぱく食でも味に妥協したくない人",
              "減量中でも食べ応え・満足感が欲しい人",
              "自炊でのPFC管理が続かなかった人",
              "回数縛りなしで始めたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>筋肉食堂DELIをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "食費を最優先で抑えたい人 → まごころケア食・ライフミールなどがおすすめ",
              "送料無料のサービスを求める人",
              "メニューの豊富さ・入れ替わりを重視する人 → noshなどがおすすめ",
              "鶏肉中心のメニューが苦手な人",
              "冷凍庫のスペースに余裕がない人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：筋肉食堂DELIはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            筋肉食堂DELIは、<strong>実店舗レストラン発の調理品質と高たんぱく設計</strong>を両立した宅配食です。公開レビューでは「冷凍弁当を感じさせない美味しさ」という評価が目立ち、複数媒体の調査で「まずい」の声が確認されていないのは特筆すべき点です。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一方、<strong>1食1,000円超＋送料（定期でも有料）</strong>という価格は最大のハードルです。コスパ最優先の人には向かず、トレーニングやボディメイクの成果を最大化するための「食事への投資」と考えられる人向けのサービスです。
          </p>
          <p className="text-sm leading-relaxed">
            回数縛りはないので、まずは7食を1回試し、味・量・冷凍庫の収まりを確かめるのが失敗しない始め方です。なお、名前の似た「マッスルデリ」は別サービスなので、比較検討時は混同に注意してください。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/muscle-deli-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            マッスルデリの口コミ・評判（※別サービス）
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/kou-tanpaku-ranking/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            高たんぱく宅配弁当ランキング
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
              <Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                マッスルデリの口コミ・評判（※筋肉食堂DELIとは別サービス）
              </Link>
            </li>
            <li>
              <Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">
                高たんぱく宅配弁当ランキング
              </Link>
            </li>
            <li>
              <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                ダイエット向け宅配弁当のおすすめ
              </Link>
            </li>
            <li>
              <Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                糖質制限におすすめの宅配弁当ランキング
              </Link>
            </li>
            <li>
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の1食実質単価を正規化比較
              </Link>
            </li>
            <li>
              <Link href="/articles/reitouko-chiisai-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">
                冷凍庫が小さくても使える宅配弁当
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
