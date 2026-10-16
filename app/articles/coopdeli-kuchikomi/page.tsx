import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "コープ（生協）の宅配弁当の口コミ・評判｜まずいって本当？コープデリ夕食宅配「舞菜」の料金・カロリーを公式で確認【2026年10月最新】";
const ARTICLE_DESCRIPTION =
  "コープの宅配弁当（コープデリ夕食宅配・舞菜）はまずい？薄味・量・飽きなど言われる理由を出典付きで整理します。1食464〜842円の料金、コース別kcal・塩分、24円引きの対象、届くエリア、他地域の生協の夕食宅配も公式で確認しています。【2026年10月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/coopdeli-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "コープ 宅配弁当 口コミ, 生協 弁当 まずい, コープデリ 夕食宅配 口コミ, コープデリ 弁当 評判, 舞菜 口コミ, 舞菜弁当 まずい, デイリーコープ 口コミ, コープデリ 夕食宅配 料金, 生協 夕食宅配 口コミ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-07-04T00:00:00+09:00",
    modifiedTime: "2026-10-16T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "コープデリの夕食宅配（デイリーコープ）とは？",
    answer:
      "コープデリ連合会（関東信越の生協）が運営する夕食宅配サービスです。「舞菜」シリーズのお弁当・おかずを、月〜金曜（祝日も配達・土日は休み）のうち希望の曜日に、週3日以上・冷蔵で届けます。利用には生協への加入（出資金・脱退時返還）と利用登録が必要で、利用は自動継続です。お届けは東京都全域（離島を除く）と、千葉・埼玉・茨城・栃木・群馬・長野の一部の市区町村です。新潟県はコープデリにいがたの別サービスです（2026年10月16日・公式確認）。",
  },
  {
    question: "コープデリの夕食宅配の料金はいくら？",
    answer:
      "2026年10月16日に公式サイトで確認した1食あたりの税込価格は、舞菜ミニ弁当464円・舞菜弁当680円・舞菜おかず702円・舞菜しっかりおかず756円・舞菜御膳842円・エネルギー塩分調整食（おかずのみ）842円です。1回のお届けで2食以上頼むと、舞菜おかず・舞菜弁当・舞菜しっかりおかず・舞菜御膳は1食24円（税抜）引きになります。ミニ弁当とエネルギー塩分調整食は割引の対象外です。",
  },
  {
    question: "コープデリの夕食宅配に配達料はかかる？",
    answer:
      "夕食宅配デイリーコープは配達手数料無料と公式に明記されています（2026年10月16日確認）。なお、通常の週1回宅配「ウイークリーコープ」は別体系で、東京都の場合は基本手数料88円＋配達手数料110円＝週198円（税込・1回6,000円税抜以上で無料など減免条件あり）です。",
  },
  {
    question: "コープデリの夕食宅配は途中でやめられる？",
    answer:
      "週3日以上・1週間単位の定期利用で自動継続ですが、中止（お休み）は可能です。インターネット（コープデリeフレンズ）での休止・再開の締め切りは配達前週の水曜日午前2時、曜日別の注文変更はお届け曜日の5日前の午前2時（例: 月曜お届け分は前週水曜午前2時）です。電話受付は月〜金曜9時〜19時30分・土曜9時〜17時で、お届け週に入ってからのキャンセルは受け付けていません。eフレンズで休止できるのは翌週・翌々週のお届け分で、利用そのものの中止は電話での受付です（2026年10月16日確認の公式FAQ）。旅行や帰省の週だけ休む使い方もできます。",
  },
  {
    question: "コープデリの夕食宅配はまずい？味の評判は？",
    answer:
      "公開レビューでは「やさしい味で美味しい」「冷凍じゃないから味落ちない」という好意的な声が多く、宅配弁当の比較メディアも「「まずい」と言い切る声は多くありません」（LiPro）とまとめています。不満は①薄味②献立のローテーションによる飽き③量④苦手なメニューも届く、に集中しています。公式の基準は週平均でお弁当500kcal・塩分3g以下、おかず400kcal・塩分4g以下で、塩分を控えた設計です。濃い味が好みなら「しっかりとした味付け」の舞菜しっかりおかずを選ぶ手があります。",
  },
  {
    question: "コープデリの宅配弁当の消費期限は？",
    answer:
      "冷蔵庫（10℃以下）で保管して、お届け当日の午後10時までです（公式FAQ）。冷凍弁当のように作り置きはできないため、その日の夕食で食べる前提のサービスです。お召し上がりの際はレンジで温めると一層おいしい、と公式も案内しています。",
  },
  {
    question: "コープデリの夕食宅配にお試しはある？",
    answer:
      "2026年10月16日時点で、夕食宅配（舞菜）専用のお試しは公式サイトで見つかりませんでした。現在案内されている「おためしセット」は、週1回の宅配（ウイークリーコープ）向けの冷凍食品10品のセット（税込1,980円・送料無料・1世帯1回限り）で、舞菜のお弁当ではありません。夕食宅配は週3日・1週間だけの利用もできる（公式FAQ）ため、まず1週間試す方法があります。",
  },
  {
    question: "支払い方法は？クレジットカードは使える？",
    answer:
      "登録口座からの引き落とし（口座振替）のみで、クレジットカード・デビットカードは使えません（公式FAQ）。週1回の宅配（ウイークリーコープ）と同じ口座でまとめて支払います。",
  },
  {
    question: "コープデリ以外の生協にも宅配弁当はある？",
    answer:
      "あります。神奈川・静岡・山梨のユーコープ「夕食宅配Maici（マイシィ）」は1食740〜898円、CO・OPさっぽろの夕食宅配は674〜956円（おかずのみ）、福岡のエフコープは590〜730円です（いずれも税込・配達料無料・2026年10月16日に各公式サイトで確認）。生協ごとに献立・価格・条件が違うため、「コープの宅配弁当」の口コミはどの生協の話かを確かめて読むのがおすすめです。",
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
          <Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">コープデリ夕食宅配の口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "コープデリの夕食宅配（デイリーコープ）とは？基本情報" },
    { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "コープ（生協）の宅配弁当はまずい？言われる理由5つと対策" },
    { id: "price", label: "料金・手数料・利用条件を解説" },
    { id: "other-coops", label: "コープデリ以外の生協の宅配弁当（地域別）" },
    { id: "merits", label: "口コミから分かるメリット4つ" },
    { id: "demerits", label: "注意すべきデメリット4つ" },
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
    title: "冷蔵で毎日届く安心感・栄養バランス",
    reviews: [
      {
        text: "コープデリにはまじでお世話になってる。お弁当冷蔵で毎日届けてくれるのがありがたい…栄養バランスいいし冷凍じゃないから味落ちないし。",
        meta: "記事内掲載のSNS投稿",
        sourceName: "LiPro（IID運営）",
        sourceUrl: "https://meals.iid.co.jp/coop-bento/",
      },
      {
        text: "デイリーコープのオカズのみ弁当🍱始めました！買い物行く手間なくなり、オカズも8種類位入って、カロリー低め",
        meta: "記事内掲載のSNS投稿",
        sourceName: "ミールキットガイド",
        sourceUrl: "https://meal-kit.net/coop/coopdeli/coopdeli-obento",
      },
    ],
  },
  {
    title: "やさしい味・品数の多さ・コスパ",
    reviews: [
      {
        text: "コープデリの舞菜弁当は普段は白飯なんですが、週に１回、混ぜご飯や炊き込みご飯が出ます。それが、やさしい味で美味しいんですよ😆",
        meta: "記事内掲載のSNS投稿",
        sourceName: "ミールキットガイド",
        sourceUrl: "https://meal-kit.net/coop/coopdeli/coopdeli-obento",
      },
      {
        text: "こんなにおかずが入っていたのは始めてです。え？いいの？ってくらい安いと思います",
        meta: "実食体験談・原文ママ",
        sourceName: "食材宅配サービスの暮らし",
        sourceUrl: "https://hotoke.xyz/coop-deli-maisai/",
      },
      {
        text: "僕はコープデリの夕食宅配の中では、この舞菜御膳が一番好きです",
        meta: "宅配弁当専門レビュアーの実食レビュー",
        sourceName: "こせたん宅配弁当",
        sourceUrl: "https://coop-bento.com/maisai-photos/",
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
    title: "味が単調・薄味で物足りない",
    reviews: [
      {
        text: "が、実際はどれも似たような味で変化がありません・・・。薄味と言うのと、お年寄りが食べやすいように？",
        meta: "ミールキットガイド編集部の実食レビュー（当サイトの実食ではありません）",
        sourceName: "ミールキットガイド",
        sourceUrl: "https://meal-kit.net/coop/coopdeli/coopdeli-obento",
      },
      {
        text: "どうにかならないのか？コープデリの宅配弁当の舞菜おかずに定期的に来る「カレー」が超まずい。",
        meta: "記事内掲載のSNS投稿",
        sourceName: "ミールキットガイド",
        sourceUrl: "https://meal-kit.net/coop/coopdeli/coopdeli-obento",
      },
    ],
    comment:
      "舞菜シリーズは高齢者にも食べやすい薄味・和食中心の設計のため、「似たような味」「薄味」と感じる人がいるのは構造的な特徴です。日替わり献立で自分でメニューを選べないため、不評メニュー（口コミではカレー）に当たる週もあります。濃い味・バリエーション重視ならnoshのような選択型冷凍弁当の方が向いています。",
  },
  {
    title: "量が少なめ・配達日時を指定できない",
    reviews: [
      {
        text: "コープデリ頼んでみだけど、噂通り量が少ない。大食い夫婦には難しいねと、すぐに休止してしまった。",
        meta: "記事内掲載のSNS投稿・原文ママ",
        sourceName: "LiPro（IID運営）",
        sourceUrl: "https://meals.iid.co.jp/coop-bento/",
      },
      {
        text: "日時指定できれば最強なのにね。バラバラで冷凍されてる豚コマとか、ひき肉とか、スゴイ便利なのに。",
        meta: "記事内掲載のSNS投稿",
        sourceName: "日仏家族の宅食レビュー",
        sourceUrl: "https://takushoku-repo.com/coopdelirepu/",
      },
    ],
    comment:
      "公式の献立表サンプル（2026年3月の1週間）では、舞菜弁当は1食431〜496kcal（ご飯約150g込み）、舞菜おかずは342〜415kcalで、よく食べる人には物足りない可能性があります。公式で「ボリューム感のあるおかず」とされる舞菜しっかりおかず（税込756円）や、別売りのご飯150g（税込140円）・生野菜サラダ（税込116円）を足す方法があります。配達はルート配送のため時間指定はできませんが、留守の場合は保冷剤を入れた保冷容器で指定の場所に届けてくれます（公式FAQ）。",
  },
];

/* ---------- Page Component ---------- */

export default function CoopdeliKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-07-04T00:00:00+09:00",
    dateModified: "2026-10-16T00:00:00+09:00",
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
        name: "コープデリ夕食宅配の口コミ・評判",
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
            <time dateTime="2026-10-16">更新: 2026年10月16日（公式で再確認）</time>
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
            「コープの宅配弁当って実際どうなの？」「生協の弁当はまずいって本当？」——関東でいちばん多く検索されるコープの宅配弁当が、コープデリの夕食宅配（デイリーコープ）です。関東信越の生協が運営し、<strong>冷蔵のお弁当・おかず「舞菜」を平日、週3日から届けてくれる</strong>サービスで、基本は手渡し（留守の場合は保冷容器で指定の場所）で届きます。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー記事を出典付きで整理</strong>し、良い口コミ・悪い口コミの両方を中立に検証します。「まずい」と言われる理由についても解説します。
          </p>
          <p>
            さらに、<strong>1食あたりの料金・コース別のカロリーと塩分・届くエリア・週3日以上という利用条件</strong>を2026年10月16日に公式サイトで確認し、コープデリ以外の生協（ユーコープ・コープさっぽろ・エフコープ）の宅配弁当の料金も並べました。なお当サイトは実食をしておらず、味の評価はすべて出典付きの第三者レビューです。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">コープの宅配弁当（コープデリ）が向いている方</p>
          <p className="text-sm leading-relaxed mb-4">
            コープデリの夕食宅配は、<strong>「東京都や千葉・埼玉など対象エリアで、冷蔵のお弁当を配達料なしで平日に届けてほしい人」</strong>に向いたサービスです。口コミでは「冷凍じゃないから味が落ちない」「品数が多くて安い」という評価が目立つ一方、薄味・味の単調さ・量の少なさは注意点として挙がっています。「まずい」という声は特定メニューへの不満が中心です（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>冷蔵×毎日配達で作りたてに近い味</li>
                <li>配達手数料無料・1食464円〜と手頃</li>
                <li>品数が多く栄養バランスが良い</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>薄味・和食中心で味が単調に感じる場合も</li>
                <li>週3日以上の定期利用・生協加入が必要</li>
                <li>日替わり献立でメニューは選べない</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://daily.coopdeli.jp/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            コープデリ夕食宅配公式サイトで最新のメニュー・料金を見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">コープデリの夕食宅配（デイリーコープ）とは？基本情報</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          コープデリの夕食宅配は、コープデリ連合会（コープみらい等・関東信越の生協）が運営する<strong>平日毎日お届け型の夕食宅配</strong>です。日替わりの「舞菜」シリーズ（お弁当・おかず）を月〜金に冷蔵で届けます。公式は<strong>「管理栄養士がカロリーや塩分を管理し、栄養バランスを考えた」</strong>献立と説明しており、それを配達手数料無料で自宅で受け取れるのが特徴です。利用には生協への加入（出資金・脱退時返還）が必要です。
        </p>

        <SubHeading>基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営", "コープデリ連合会（関東信越の生協）"],
            ["サービス名", "夕食宅配（デイリーコープ）・舞菜シリーズ"],
            ["お届け", "月〜金のうち希望の曜日（週3日以上）・冷蔵。祝日も配達、土日は休み。時間指定不可（ルート配送）"],
            ["不在時", "保冷剤を入れた保冷容器で指定の場所へ（基本は手渡し）"],
            ["配達手数料", "無料"],
            ["利用条件", "生協加入＋週3日以上・1週間単位の定期利用"],
            ["エリア", "東京都全域（離島を除く）＋千葉・埼玉・茨城・栃木・群馬・長野の一部の市区町村。新潟県はコープデリにいがたの別サービス"],
            ["献立", "日替わり（管理栄養士がカロリー・塩分を管理）。翌週の献立はeフレンズか毎週最初のお届け時の献立表で確認"],
            ["消費期限", "お届け当日の午後10時まで（10℃以下で保管）"],
            ["容器", "次回配達時に返却（軽くすすぐ）。しっかりおかずは使い捨て容器"],
            ["中止・お休み", "eフレンズでは配達前週の水曜午前2時まで（お届け週のキャンセルは不可）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: コープデリ夕食宅配公式サイト・お届けエリア・公式FAQ（2026年10月16日確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>コース一覧と1食のカロリー・塩分（2026年10月16日確認）</SubHeading>
        <ComparisonTable
          headers={["コース", "1食（税込）", "2食以上の24円引き", "熱量（kcal）", "食塩相当量（g）", "公式の説明"]}
          rows={[
            ["舞菜ミニ弁当", "464円", "対象外", "291〜341", "1.2〜1.6", "小食の方に向けたお弁当"],
            ["舞菜弁当", "680円", "対象", "431〜496", "1.7〜2.7", "ご飯と5種類のお惣菜（ご飯約150g）"],
            ["舞菜おかず", "702円", "対象", "342〜415", "2.8〜3.0", "おかずのみの定番コース"],
            ["舞菜しっかりおかず", "756円", "対象", "312〜476", "3.1〜3.8", "ボリューム感のあるおかず・しっかりとした味付け"],
            ["舞菜御膳", "842円", "対象", "364〜443", "3.3〜3.6", "多品種でボリューム感のあるおかず"],
            ["エネルギー塩分調整食", "842円", "対象外", "229〜263", "1.6〜2.0", "おかずのみ（食事療法で使う場合は主治医・栄養士に相談）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-4">
          ※価格・割引の対象: デイリーコープ公式サイト（2026年10月16日確認）。熱量・食塩相当量は公式の献立表サンプル（2026年3月4回＝3月23日〜27日の5日分）の最小〜最大で、週ごとに変わります（公式注記「栄養表示は献立作成時の計算値」）。公式の献立基準は週平均の1食あたり「お弁当：500kcal・塩分3g以下／おかず：400kcal・塩分4g以下／御膳：500kcal・塩分4g以下」（公式FAQ）。
        </p>
        <p className="text-sm mb-2 leading-relaxed">
          1回のお届けで2食以上注文すると、対象の4コース（舞菜おかず・舞菜弁当・舞菜しっかりおかず・舞菜御膳）は<strong>1食24円（税抜）引き</strong>になります。夫婦2人での利用なら実質単価がさらに下がる仕組みです。18社の送料込み実質単価は
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">
            宅食料金白書2026
          </Link>
          で比較できます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: コープデリ夕食宅配公式サイト・公式FAQ（2026年10月16日確認）。パルシステムとの違いは
          <Link href="/articles/coopdeli-vs-palsystem/" className="underline hover:text-accent">コープデリとパルシステムの比較記事</Link>
          をご覧ください。
        </p>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">コープデリ夕食宅配の良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公開されている第三者メディアの実食レビュー・掲載SNS投稿から、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示）。
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
        <SectionHeading id="bad-reviews">コープデリ夕食宅配の悪い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          否定的な意見も出典付きで掲載しています。加入前にご確認いただきたい注意点です。
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
        <SectionHeading id="mazui">コープ（生協）の宅配弁当はまずい？言われる理由5つと対策</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「コープ 宅配弁当 まずい」「生協 弁当 まずい」と検索されることがあります。公開レビューを確認すると、<strong>「まずい」と言い切る声は少なく、不満の中身は薄味・飽き・量・冷蔵ゆえの温め・献立を選べないことの5つにほぼ分けられます</strong>。宅配弁当の比較メディアLiProも「結論から言うと、「まずい」と言い切る声は多くありません」と書いています。以下は第三者メディア（いずれも宅配弁当の比較・紹介サイト）の記述と、コープデリ公式の情報を並べたものです。
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 塩分を控えた設計で、濃い味に慣れた人には薄く感じる</p>
            <p className="mb-1.5">
              「舞菜は塩分控えめの健康志向で設計されているため、濃い味に慣れている人には薄味に感じられることがあります。」（LiPro）。公式の献立基準も週平均で<strong>お弁当は塩分3g以下</strong>です。一方で「味がうすいことは「まずい」ことではないです。」（こせたん宅配弁当）という見方もあり、好みで評価が割れるポイントです。
            </p>
            <p className="mb-1.5"><strong>公式の対策:</strong> 濃いめが好みなら、公式が「しっかりとした味付け」「ごはんに合う味付け」と説明する<strong>舞菜しっかりおかず</strong>（税込756円）を選ぶ方法があります。</p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a href="https://meals.iid.co.jp/coop-bento/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">LiPro（IID運営）</a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 似た味・同じおかずのローテーションで飽きる</p>
            <p className="mb-1.5">
              「「まずい！」というよりは、同じおかずがローテーションされることと、ヘルシーな薄味に物足りなさを感じてしまう、という意見が多かったです。」（こせたん宅配弁当）。産後に利用した体験記にも「お弁当の小さいおかずに飽きてきた」とあります（キッチンおたすけ隊）。
            </p>
            <p className="mb-1.5"><strong>公式の対策:</strong> コース・曜日・数量は変更できるので、舞菜おかずと舞菜御膳を曜日で分ける、週3日にして残りは自炊や外食にする、という使い方ができます。</p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a href="https://coop-bento.com/mazuino-01/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">こせたん宅配弁当</a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">3. 量が少ない</p>
            <p className="mb-1.5">
              「「量が足りない」という声は、口コミでも見られる数少ない不満のひとつです。」（LiPro）。公式の献立表サンプルでは舞菜おかずが1食342〜415kcal、舞菜弁当がご飯約150g込みで431〜496kcalです。
            </p>
            <p className="mb-1.5"><strong>公式の対策:</strong> 別売りのご飯150g（税込140円）・もち麦入りご飯（税込162円）・生野菜サラダ（税込116円）を足せます。</p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a href="https://meals.iid.co.jp/coop-bento/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">LiPro（IID運営）</a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">4. 冷蔵でその日に届くので、温め方で味が変わる</p>
            <p className="mb-1.5">
              「朝に作って夕方に届くため、ナッシュや三ツ星ファームのような冷凍弁当と比べると油が固まりやすく、温め直しでの風味復活が必須になります。」（生協のへや）。
            </p>
            <p className="mb-1.5"><strong>公式の案内:</strong> 「お召し上がりの際はレンジで温めると一層おいしいです。」。消費期限はお届け当日の午後10時までなので、届いた日の夕食で温めて食べるのが前提です。</p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a href="https://manga-yomeru-blog.com/coop-takuhai-bento-mazui/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">生協のへや</a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">5. 献立を選べず、苦手なメニューの日も届く</p>
            <p className="mb-1.5">
              「にがてな食材が多いときは、まずいと感じてしまうかも」（おいしい宅食）。SNSでも「舞菜おかずに定期的に来る「カレー」が超まずい。」という特定メニューへの不満が紹介されています（ミールキットガイド掲載の投稿）。
            </p>
            <p className="mb-1.5"><strong>公式の案内:</strong> 翌週の献立は、eフレンズにログインするか、毎週最初のお届け時に届く献立表で事前に確認できます。苦手なメニューが多い週は休止（配達前週の水曜午前2時まで）で調整できます。</p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a href="https://oishi-takushoku.com/coop-mazui/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">おいしい宅食</a>
            </p>
          </div>
        </div>

        <SubHeading>一方で「美味しい」という評価も多い</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "栄養バランスいいし冷凍じゃないから味落ちないし。",
              meta: "記事内掲載のSNS投稿・一部",
              sourceName: "LiPro（IID運営）",
              sourceUrl: "https://meals.iid.co.jp/coop-bento/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "僕はコープデリの夕食宅配の中では、この舞菜御膳が一番好きです",
              meta: "宅配弁当専門レビュアーの実食レビュー",
              sourceName: "こせたん宅配弁当",
              sourceUrl: "https://coop-bento.com/maisai-photos/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部のまとめ：「まずい」の中身は味そのものより「設計と仕組み」</p>
          <p>
            冷蔵・当日配達という形式は「冷凍じゃないから味落ちない」と評価される一方、温め方で味が変わります。「まずい」の中身は、塩分を控えた設計・日替わりで選べない献立・量の3つが中心で、コース選び（しっかりおかず・御膳）、ご飯やサラダの追加、休止の使い方である程度調整できます。濃い味・メニュー選択重視ならnosh等の選択型冷凍弁当、やさしい味の日替わり弁当を配達料なしで受け取りたいならコープデリ、という選び分けが妥当です。
          </p>
        </div>

        {/* ===== 料金・手数料 ===== */}
        <SectionHeading id="price">料金・手数料・利用条件を解説</SectionHeading>

        <SubHeading>かかる費用は「商品代のみ」</SubHeading>
        <p className="text-sm mb-2 leading-relaxed">
          夕食宅配デイリーコープは<strong>配達手数料が無料</strong>のため、支払いは商品代のみです（2026年10月16日公式確認）。舞菜弁当（680円）を週5日×4週利用した場合の月額目安は約13,600円です。2食以上の同時注文で対象コースは1食24円（税抜）引きになるため、舞菜弁当を2人分・週5日×4週なら月あたり約1,000円の割引です。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※参考: 通常宅配のウイークリーコープは別体系（東京都の場合、基本手数料88円＋配達手数料110円＝週198円税込。1回6,000円税抜以上で無料等の減免あり）。夕食宅配のみの利用なら手数料はかかりません。
        </p>

        <SubHeading>利用条件・始め方</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["加入", "生協への加入が必要（出資金は脱退時に返還）"],
            ["最低利用", "週3日以上・1週間単位の定期"],
            ["開始", "利用登録の翌々週の月曜日から配達可能。利用は自動継続（1週間だけの利用も可）"],
            ["お試し", "夕食宅配（舞菜）専用のお試しは公式で見つからず（2026年10月16日）。案内中の「おためしセット」はウイークリーコープ向けの冷凍食品10品・税込1,980円"],
            ["中止・休み", "eフレンズでの休止・再開は配達前週の水曜午前2時まで（翌週・翌々週分）。注文変更はお届け曜日の5日前の午前2時まで。お届け週のキャンセルは不可。利用の中止は電話（0120-155-216・月〜金9:00〜19:30／土9:00〜17:00）"],
            ["支払い", "登録口座からの引き落としのみ（クレジットカード・デビットカード不可）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: コープデリ公式「デイリーコープ ご利用の流れ」・公式FAQ・おためしセット申込ページ（2026年10月16日確認）。
        </p>

        {/* ===== 他の生協 ===== */}
        <SectionHeading id="other-coops">コープデリ以外の生協の宅配弁当（地域別）</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          「コープの宅配弁当」は生協ごとに別のサービスで、献立・価格・条件が違います。口コミを読むときは<strong>どの生協の話か</strong>を確かめるのがおすすめです。2026年10月16日に各生協の公式サイトで確認できた料金は次のとおりです。
        </p>
        <ComparisonTable
          headers={["生協（サービス名）", "主なエリア", "1食（税込）", "配達料", "公式で確認できた条件"]}
          rows={[
            ["コープデリ（デイリーコープ・舞菜）", "東京都全域＋千葉・埼玉・茨城・栃木・群馬・長野の一部", "464〜842円", "無料", "週3日以上・2食以上で24円（税抜）引き（4コース）"],
            ["コープデリにいがた（舞菜）", "新潟市・新発田市・三条市など新潟県の一部", "680〜842円", "−", "お弁当680円・おかず702円・しっかりおかず756円・御膳842円。現金払い不可"],
            ["ユーコープ（夕食宅配Maici）", "神奈川・静岡・山梨", "740〜898円", "無料", "2食以上で1食20円引き"],
            ["CO・OPさっぽろ（夕食宅配）", "北海道の一部", "674〜956円", "無料", "松竹梅の3コース・おかずのみ・全コース管理栄養士が監修"],
            ["エフコープ（夕食宅配）", "福岡県", "590〜730円", "−", "4コース（お弁当590円・おかず630円・こだわり/ボリューム730円）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-4">
          ※出典: <a href="https://daily.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">デイリーコープ</a>／<a href="https://efriends.coopdeli.jp/docreq/kuruco-d/index.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">コープデリにいがた 夕食宅配</a>／<a href="https://www.maici.coop/course/" target="_blank" rel="noopener noreferrer nofollow" className="underline">夕食宅配Maici コース紹介</a>／<a href="https://www.sapporo.coop/service/dinner-delivery/" target="_blank" rel="noopener noreferrer nofollow" className="underline">コープさっぽろ 夕食宅配サービス</a>／<a href="https://www.fcoop.or.jp/shopping/service/dinner-delivery/" target="_blank" rel="noopener noreferrer nofollow" className="underline">エフコープ 夕食宅配</a>（いずれも2026年10月16日確認）。「−」は今回の確認範囲で配達料の記載を確かめられなかったものです。パルシステム・コープこうべ・みやぎ生協などは今回、公式ページで料金を確認しきれなかったため掲載していません。
        </p>
        <p className="text-sm mb-6 leading-relaxed">
          神奈川・静岡・山梨にお住まいなら<Link href="/articles/ouchi-coop-kuchikomi/" className="text-accent hover:text-accent-dark underline">おうちコープ（ユーコープ）マイシィの口コミ・評判</Link>、エリア外なら全国配送の冷凍弁当（<Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline">nosh</Link>や<Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark underline">まごころケア食</Link>など）が比較先になります。冷蔵で毎日届く民間サービスなら<Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark underline">ワタミの宅食</Link>も候補です。
        </p>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット4つ</SectionHeading>

        {[
          {
            num: 1,
            title: "冷蔵×毎日配達で「冷凍嫌い」でも続けやすい",
            text: "「冷凍じゃないから味落ちないし」という口コミの通り、当日調理された冷蔵弁当が毎日届く形式は、冷凍弁当の食感が苦手な人に最大の強みです。レンジ加熱も短時間で済みます。",
          },
          {
            num: 2,
            title: "配達手数料無料で1食464円〜のコスパ",
            text: "毎日届けてもらえるのに配達手数料は無料です。「え？いいの？ってくらい安いと思います」という実食者の声の通り、品数対比の価格満足度は高めです。2食以上の同時注文で1食24円（税抜）引きになるコースもあります。",
          },
          {
            num: 3,
            title: "管理栄養士がカロリー・塩分を管理した日替わり献立",
            text: "「栄養バランスいいし」「オカズも8種類位入って、カロリー低め」という声の通り、品目数の多さは舞菜シリーズの特徴です。公式も「管理栄養士がカロリーや塩分を管理し、栄養バランスを考えた」献立と説明しており、献立を考える負担なく食事を整えられます。",
          },
          {
            num: 4,
            title: "手渡しが基本で、留守でも受け取れる",
            text: "公式FAQでは「基本的に手渡しでのお届け」とされ、留守の場合は保冷剤を入れた保冷容器でご指定の場所に届けてくれます。ひとり暮らしの高齢の家族向けに頼む場合も、受け取りの心配が少ない仕組みです。",
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
        <SectionHeading id="demerits">注意すべきデメリット4つ</SectionHeading>

        {[
          {
            num: 1,
            title: "生協加入＋週3日以上の定期が前提",
            text: "スポットで1日だけ頼む使い方はできません。生協加入（出資金）も必要なため、「たまに使いたい」人には向きません。単発利用なら夕食ネットやnoshのような都度注文型が合っています。",
          },
          {
            num: 2,
            title: "メニューが選べない・薄味が合わない人もいる",
            text: "日替わり献立のため、苦手なメニューの日も届きます。「どれも似たような味」という指摘の通り、和食中心・薄味の献立が単調に感じられる可能性は事前に理解しておきましょう。",
          },
          {
            num: 3,
            title: "量が少なめ・配達時間の指定不可",
            text: "「噂通り量が少ない」という口コミの通り、標準コースはよく食べる人には物足りません（しっかりおかずや別売りのご飯で緩和可）。また配達はルート配送のため時間指定はできません。",
          },
          {
            num: 4,
            title: "作り置きできない・エリアが限られる",
            text: "消費期限はお届け当日の午後10時までで、冷凍弁当のようにストックはできません。また東京都以外は一部の市区町村だけが対象なので、申し込む前に公式のお届けエリアで確認が必要です。",
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

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>コープデリの夕食宅配がおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "東京都や千葉・埼玉などコープデリの対象エリアで冷蔵の夕食宅配を探している人",
              "冷凍弁当の食感・味が苦手な人",
              "配達料なしで毎日届けてほしい人",
              "高齢の家族の食事＋ゆるやかな見守りを兼ねたい人",
              "献立を考える負担をなくして栄養バランスを整えたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>コープデリの夕食宅配をおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "エリア外の人 → 地元の生協の夕食宅配か、全国配送の冷凍弁当がおすすめ",
              "自分でメニューを選びたい人 → nosh・食宅便がおすすめ",
              "濃い味・ボリューム重視の人",
              "週3日未満・不定期で使いたい人 → 夕食ネット等の都度注文型がおすすめ",
              "クレジットカードで払いたい人（口座引き落としのみ）",
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
        <SectionHeading id="summary">まとめ：コープデリの夕食宅配はこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            コープデリの夕食宅配（デイリーコープ・舞菜シリーズ）は、<strong>「冷蔵×毎日配達×配達手数料無料」</strong>という生協ならではの形が強みの夕食宅配です。口コミでは「冷凍じゃないから味が落ちない」「品数が多くて安い」という評価が目立ちます。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            「まずい」という口コミは、塩分を控えた設計（お弁当は週平均で塩分3g以下）・日替わりで選べない献立・量への不満に分解でき、全体としては「やさしい味」を評価する声が優勢です。一方、<strong>週3日以上の定期・生協加入・メニュー選択不可という条件は事実</strong>なので、自由度重視の人には向きません。
          </p>
          <p className="text-sm leading-relaxed">
            エリア内にお住まいなら、まず週3日・1週間から始めて、味と生活リズムに合うか確かめるのがおすすめです（夕食宅配専用のお試しは2026年10月16日時点で公式に見当たりません）。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">関連記事</p>
          <Link
            href="/articles/ouchi-coop-kuchikomi/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            おうちコープ（マイシィ）の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/coopdeli-vs-palsystem/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            コープデリとパルシステムの比較
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/takushoku-ryokin-hakusho/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            宅食料金白書2026
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
                宅配弁当・栄養食を専門とする編集チームです。公開情報や利用者の口コミをもとに、公平な比較情報の提供に努めます。
              </p>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/articles/ouchi-coop-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                おうちコープ夕食宅配マイシィの口コミ・評判
              </Link>
            </li>
            <li>
              <Link href="/articles/coopdeli-vs-palsystem/" className="text-accent hover:text-accent-dark transition-colors">
                コープデリとパルシステムの違いを徹底比較
              </Link>
            </li>
            <li>
              <Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                高齢者向け宅配弁当おすすめランキング
              </Link>
            </li>
            <li>
              <Link href="/articles/kyoudoki-yushoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">
                共働き世帯向けの夕食宅配ガイド
              </Link>
            </li>
            <li>
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の実質単価を一次調査
              </Link>
            </li>
            <li>
              <Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                ワタミの宅食の口コミ・評判（冷蔵・毎日配達の比較先）
              </Link>
            </li>
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
