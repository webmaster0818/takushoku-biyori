import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "FIT FOOD HOME(フィットフードホーム)の口コミ・評判は？まずいって本当？無添加調理の実力を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "FIT FOOD HOME(フィットフードホーム)は「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。無添加調理の冷凍おかずの料金（単品1,129円〜・2026年7月4日公式確認）、送料、定期の割引条件も解説します。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/fitfoodhome-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "FIT FOOD HOME 口コミ, フィットフードホーム 口コミ, フィットフードホーム 評判, FIT FOOD HOME まずい, フィットフードホーム 料金, 無添加 宅配弁当, 無添加 冷凍おかず, tavenal",
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
    question: "FIT FOOD HOMEはまずいって本当？",
    answer:
      "公開レビューを確認すると、「とにかく、美味しい。手作りのような味がする」（HonNe掲載口コミ）、「フィットフードホームが別格にウマい」（宅食ラボ掲載のX投稿）など味への高評価が目立ち、「SNSを調べた範囲で『まずい』という意見はありませんでした」（宅食ラボ）という調査報告もあります。無添加調理のため味付けは比較的やさしめで、濃い味好みだと物足りない可能性はありますが、「素材の味がする」と好意的に受け取る声が多数派です。",
  },
  {
    question: "FIT FOOD HOMEのセット価格はいくら？",
    answer:
      "FIT FOOD HOMEは「固定価格のセット」ではなく、選んだ商品の合計金額から個数に応じて割引される方式です（10個で最大5%OFF・14個で最大8%OFF・20個で最大12%OFF、2026年7月4日公式確認）。単品はおかず1個1,129円〜などですが、組み合わせで総額が変わるため、正確なセット金額は公式ストアのカートでご確認ください。",
  },
  {
    question: "FIT FOOD HOMEの送料はいくら？",
    answer:
      "都度購入は1回990円（税込）、定期購入は送料無料です（2026年7月4日公式確認）。北海道は+550円、沖縄は+1,100円（税込）の追加送料がかかります。クロネコヤマトのクール便で届きます。最新の送料条件は公式ストアでご確認ください。",
  },
  {
    question: "FIT FOOD HOMEの無添加はどこまで本当？",
    answer:
      "公式サイトでは「“カラダに不必要な成分は一切使用しない”という考え方」のもと、リスクが考えられる食品添加物を使用しない「無添加調理」を掲げています。ただし、にがり等の一部（4つ）は例外として使用を認めると明記されており、「完全無添加」ではなく方針が具体的に開示されているタイプです。詳細な基準は公式サイトの記載をご確認ください。",
  },
  {
    question: "FIT FOOD HOMEの定期購入はすぐ解約できる？",
    answer:
      "定期購入は初回分のキャンセルができない点に注意が必要です。2回目以降は解約・休止が可能で、違約金はありません。スキップは注文確定メール受け取り後、翌水曜14時までに手続きが必要です（2026年7月4日の公式確認時点）。申し込み前に公式ストアの最新規約をご確認ください。",
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
          <span className="text-foreground">FIT FOOD HOMEの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "FIT FOOD HOME(フィットフードホーム)とは？基本情報まとめ" },
    { id: "good-reviews", label: "FIT FOOD HOMEの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "FIT FOOD HOMEの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "FIT FOOD HOMEはまずい？味の評判を検証" },
    { id: "merits", label: "口コミから分かるメリット4つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "FIT FOOD HOMEの料金・送料を徹底解説" },
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
    title: "手作りのような味・冷凍とは思えない美味しさ",
    reviews: [
      {
        text: "とにかく、美味しい。手作りのような味がする",
        meta: "記事掲載のX（旧Twitter）投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/fitfoodhome/",
      },
      {
        text: "フィットフードホームが別格にウマい……！！！評判の洋食屋さんが丁寧に手作りしてくれてるようなお味",
        meta: "記事掲載のX（旧Twitter）投稿・2022年10月",
        sourceName: "宅食ラボ",
        sourceUrl: "https://takushoku-lab.com/fit-food-home/",
      },
      {
        text: "冷凍宅配ちょこちょこ試してたんだけど、fit food homeさんどちゃくそ美味しいぞ…びっくりした…",
        meta: "記事掲載のX（旧Twitter）投稿・2021年4月",
        sourceName: "宅食ラボ",
        sourceUrl: "https://takushoku-lab.com/fit-food-home/",
      },
    ],
  },
  {
    title: "実食レビューでも味の評価が高い",
    reviews: [
      {
        text: "牛肉の旨味に極上のみりんの甘みが上品な味でした",
        meta: "25食を実食した宅配弁当ブロガーのレビュー",
        sourceName: "ひとり暮らしの宅配食生活",
        sourceUrl: "https://www.single-meallife.com/fitfoodhome-review/",
      },
      {
        text: "お惣菜レベルも超えてる！",
        meta: "記事掲載のX（旧Twitter）投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/fitfoodhome/",
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
    title: "価格が高め・継続コストが気になる",
    reviews: [
      {
        text: "高いので継続は無理でした",
        meta: "記事掲載のX（旧Twitter）投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/fitfoodhome/",
      },
      {
        text: "けど、続けて買うにはちょっと高い、、かも。",
        meta: "記事掲載のX（旧Twitter）投稿・2022年9月",
        sourceName: "宅食ラボ",
        sourceUrl: "https://takushoku-lab.com/fit-food-home/",
      },
    ],
    comment:
      "おかず単品は1個1,129円〜（2026年7月4日の公式ストア確認時点の代表価格帯）と、低価格帯の冷凍弁当の2倍前後の水準です。国産食材・無添加調理・自社工場製造のコストが乗っているため、「安さ」ではなく「素材と調理の質」を買うサービスと考えるのが適切です。",
  },
  {
    title: "量が控えめで男性には物足りないことも",
    reviews: [
      {
        text: "お値段の割に量が少ないかな",
        meta: "記事掲載のX（旧Twitter）投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/fitfoodhome/",
      },
      {
        text: "量は少ないから男の人は足りないと思うけど…よく噛めば、私はOK。",
        meta: "記事掲載のX（旧Twitter）投稿・2020年8月",
        sourceName: "宅食ラボ",
        sourceUrl: "https://takushoku-lab.com/fit-food-home/",
      },
    ],
    comment:
      "おかず単品型が中心のため、1品で「定食」にはなりません。主食や汁物を足して組み立てる前提で考えましょう。大容量サイズの商品ラインもあるので、量重視の方はそちらも確認を。",
  },
  {
    title: "人気メニューの売り切れがある",
    reviews: [
      {
        text: "人気メニューの売り切れがある",
        meta: "25食実食ブロガーのデメリット評",
        sourceName: "ひとり暮らしの宅配食生活",
        sourceUrl: "https://www.single-meallife.com/fitfoodhome-review/",
      },
    ],
    comment:
      "自社工場での製造量に限りがあるためか、人気商品はSOLD OUTになることがあります。お目当てのメニューがある場合は、在庫があるうちの注文・定期化を検討しましょう。",
  },
];

/* ---------- Page Component ---------- */

export default function FitFoodHomeKuchikomiPage() {
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
        name: "FIT FOOD HOMEの口コミ・評判",
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
            「FIT FOOD HOME(フィットフードホーム)って実際どうなの？」「無添加って本当？まずくない？」——京都の自社工場で「無添加調理」の冷凍おかずを製造・直販するFIT FOOD HOME。添加物が気になる家庭を中心に支持を集めています。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー記事を出典付きで整理</strong>し、FIT FOOD HOMEの良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われていないかも正面から調べました。
          </p>
          <p>
            さらに、<strong>単品×個数割引という独特な料金体系・送料・定期の注意点</strong>を2026年7月4日確認の公式データで解説します。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：FIT FOOD HOMEはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            FIT FOOD HOMEは、<strong>「添加物を避けたい、かつ味も妥協したくない人」</strong>に向いた無添加調理の冷凍おかず宅配です。口コミでは「手作りのような味」「別格にウマい」という強い高評価が目立ち、「SNS調査で『まずい』の意見なし」という報告もあります（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。一方、単品1,129円〜という価格と量の控えめさは注意点です。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>手作りのような味という口コミ多数</li>
                <li>方針が明文化された「無添加調理」</li>
                <li>定期購入は送料無料</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>単品1,129円〜と価格は高め</li>
                <li>量は控えめ・おかず単品型が中心</li>
                <li>定期は初回分のキャンセル不可</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://store.tavenal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            FIT FOOD HOME公式ストアで最新の料金・メニューを見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">FIT FOOD HOME(フィットフードホーム)とは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          FIT FOOD HOME(フィットフードホーム)は、株式会社AIVICK（京都市南区）が運営する冷凍おかず・お弁当の宅配サービスです。公式ストア「tavenal」で販売され、<strong>「“カラダに不必要な成分は一切使用しない”という考え方」に基づく無添加調理</strong>を掲げているのが最大の特徴。国産無添加シリーズや冷凍おかずシリーズ、大容量サイズなどを展開しています。
        </p>

        <SubHeading>FIT FOOD HOMEの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社AIVICK（京都府京都市南区）"],
            ["サービス形態", "冷凍おかず・弁当の宅配（都度・定期どちらも可）"],
            ["商品ライン", "国産無添加シリーズ / 冷凍おかずシリーズ / 大容量サイズ ほか"],
            ["無添加方針", "リスクが考えられる食品添加物は不使用（にがり等4つのみ例外として使用）"],
            ["料金方式", "単品価格×個数割引（固定セット価格なし）"],
            ["送料", "都度990円/回・定期は送料無料（北海道+550円・沖縄+1,100円）"],
            ["配送", "クロネコヤマト クール便（冷凍）"],
            ["解約", "定期は初回キャンセル不可・2回目以降は解約/休止可・違約金なし"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: FIT FOOD HOME公式ストア（store.tavenal.com・2026年7月4日時点の編集部確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>FIT FOOD HOMEの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "方針が明文化された「無添加調理」",
              text: "公式サイトには「極力不必要な添加物を使わない『無添加調理』」と明記され、例外的に使用を認める成分（にがり等4つ）まで開示されています。「無添加」の中身が曖昧なサービスが多い中、基準の透明性は高い部類です。",
            },
            {
              title: "「手作りのような味」という口コミが集まる調理品質",
              text: "X（旧Twitter）では「評判の洋食屋さんが丁寧に手作りしてくれてるようなお味」という投稿が紹介されるなど、冷凍らしくない味の評価が特徴的です。素材の味を活かすやさしい味付けが基本です。",
            },
            {
              title: "単品×個数割引の自由な組み立て方式",
              text: "固定セットではなく、好きな商品を選んで10個で最大5%OFF・14個で最大8%OFF・20個で最大12%OFFになる方式（2026年7月4日公式確認）。定期購入にすると送料も無料になります。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">FIT FOOD HOMEの良い口コミ・評判（出典付き）</SectionHeading>

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

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">FIT FOOD HOMEの悪い口コミ・評判（出典付き）</SectionHeading>

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
        <SectionHeading id="mazui">FIT FOOD HOMEはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「FIT FOOD HOME まずい」と検索されることがあります。公開レビューを確認すると、<strong>「まずい」という声は確認されず、むしろ味は最大の強みとして評価されている</strong>結果でした。
        </p>

        <SubHeading>「まずい」の声を探した調査結果（出典付き）</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "SNSを調べた範囲で「まずい」という意見はありませんでした。",
              meta: "口コミ調査の所見",
              sourceName: "宅食ラボ",
              sourceUrl: "https://takushoku-lab.com/fit-food-home/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "FIT FOOD HOMEのメニューは、おいしくてボリュームがあり、満足感のあるものが多かったです。",
              meta: "「まずい」評判を実食検証した記事の結論",
              sourceName: "HonNe（EXIDEA運営）",
              sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/fitfoodhome/",
            }}
            tone="good"
          />
        </div>

        <SubHeading>「薄味」という声はあるが、否定的とは限らない</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "味が薄い！！！悪い意味ではなくてきちんと素材の味がする",
              meta: "記事掲載のX（旧Twitter）投稿",
              sourceName: "HonNe（EXIDEA運営）",
              sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/fitfoodhome/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：味の酷評は確認できず。「薄味＝素材の味」をどう受け取るか</p>
          <p>
            無添加調理のため、濃い味・ジャンクな味を期待すると物足りない可能性はありますが、その「薄味」すら「素材の味がする」と好意的に語られているのが実態です。編集部の確認範囲で「まずい」という口コミの実例は見つかりませんでした。<strong>検討のボトルネックは味ではなく価格と量</strong>です。味の感じ方には個人差があるため、まずは少数個の都度購入で試すのが安全です。
          </p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット4つ</SectionHeading>

        {[
          {
            num: 1,
            title: "「手作りのような味」という強い高評価",
            text: "「別格にウマい」「お惣菜レベルも超えてる」など、他社ではあまり見ない強度の褒め言葉が口コミに並びます。冷凍おかずの味に妥協したくない人の第一候補になり得ます。",
          },
          {
            num: 2,
            title: "無添加方針の透明性が高い",
            text: "「使わない」だけでなく「例外的に使う4つ」まで開示する姿勢は、添加物を本気で気にする層への誠実さの表れです。小さな子どものいる家庭や妊娠中の方に選ばれています。",
          },
          {
            num: 3,
            title: "単品から買えて組み合わせ自由",
            text: "固定セット縛りがなく、好きなおかずを好きな数だけ選べます。10個・14個・20個と増やすほど割引率が上がり、定期にすれば送料も無料です。",
          },
          {
            num: 4,
            title: "定期購入は送料無料＋違約金なし",
            text: "定期は送料990円が毎回無料になり、2回目以降はいつでも解約・休止可能で違約金もありません（初回分のキャンセルのみ不可）。",
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
            title: "価格は高め（単品1,129円〜）",
            text: "おかず単品の代表価格帯は1個1,129円〜、デミグラスハンバーグや国産豚の角煮は1,243円です（2026年7月4日公式確認）。まとめ買い割引と定期送料無料を使っても、低価格帯サービスの約2倍の水準は変わりません。",
          },
          {
            num: 2,
            title: "セットの固定価格がなく、総額が分かりにくい",
            text: "選んだ商品×個数割引方式のため、「◯食セット◯◯円」という固定価格が存在しません。正確な総額は公式ストアのカートで確認する必要があります。本記事でも憶測の金額は記載していません。",
          },
          {
            num: 3,
            title: "定期は初回キャンセル不可・スキップ期限が短い",
            text: "定期購入は初回分のキャンセルができず、スキップは注文確定メール受け取り後の翌水曜14時までと期限が短めです。初回は都度購入で味を確かめてから定期に切り替えるのが安全です。",
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
        <SectionHeading id="price">FIT FOOD HOMEの料金・送料を徹底解説</SectionHeading>

        <p className="text-xs text-warm-gray mb-4">
          ※本セクションの料金・送料は、編集部が2026年7月4日にFIT FOOD HOME公式ストア（store.tavenal.com）で直接確認した金額（税込）です。最新の金額は公式サイトでご確認ください。
        </p>

        <SubHeading>料金体系（単品×個数割引方式）</SubHeading>
        <ComparisonTable
          headers={["項目", "内容（税込）"]}
          rows={[
            ["おかず単品", "1,129円〜（例: 本格回鍋肉）。デミグラスハンバーグ・国産豚の角煮は1,243円"],
            ["まとめ買い 10個", "商品合計から最大5%OFF"],
            ["まとめ買い 14個", "商品合計から最大8%OFF"],
            ["まとめ買い 20個", "商品合計から最大12%OFF"],
            ["定期購入", "送料無料（割引率は選んだ個数・商品による）"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          <strong>固定の「セット価格」は存在しない</strong>ため、注文総額は選ぶ商品の組み合わせで変わります。編集部が公式ストアを確認した時点でも食数別の固定価格は掲載されていなかったため、<strong>正確な総額は公式ストアのカート画面でご確認ください</strong>。憶測での金額比較は避けるべきサービスです。
        </p>

        <SubHeading>送料</SubHeading>
        <ComparisonTable
          headers={["注文方法", "送料（税込）"]}
          rows={[
            ["都度購入", "990円/回"],
            ["定期購入", "無料"],
            ["北海道への配送", "+550円/回"],
            ["沖縄への配送", "+1,100円/回"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          <strong>送料のポイント：</strong>都度は毎回990円かかるため、継続するなら定期購入（送料無料）が明確に有利です。ただし定期は初回キャンセル不可のため、<strong>初回だけ都度で味見→2回目から定期</strong>という順番が失敗しにくい始め方です。なお、編集部が18社の料金・送料を公式サイトで直接確認して比較した<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>（2026年7月4日調査）では、FIT FOOD HOMEは固定セット価格がないため実質単価の算出対象外としていますが、他社の価格感の把握に活用できます。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>FIT FOOD HOMEがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "食品添加物をできるだけ避けたい人",
              "冷凍でも手作りに近い味を求める人",
              "小さな子どもや妊娠中の家族の食事に使いたい人",
              "固定セットではなく好きなおかずを選びたい人",
              "素材の味を活かしたやさしい味付けが好きな人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>FIT FOOD HOMEをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "食費を最優先で抑えたい人 → まごころケア食・ライフミールなどがおすすめ",
              "がっつりボリューム重視の人",
              "濃い味・こってり系が好きな人",
              "「セット◯◯円」の分かりやすい料金を求める人",
              "注文前に総額を細かく比較したい人（カートでの確認が必須）",
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
        <SectionHeading id="summary">まとめ：FIT FOOD HOMEはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            FIT FOOD HOMEは、<strong>透明性の高い無添加方針と「手作りのような味」</strong>を両立した冷凍おかず宅配です。公開レビューでは味への強い高評価が目立ち、「まずい」という声は編集部の確認範囲では見つかりませんでした。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一方で、<strong>単品1,129円〜という価格と量の控えめさ、固定セット価格がない分かりにくさ</strong>は事実です。コスパやボリュームを最優先する人には向かず、「家族に安心して出せる質」を優先する人向けのサービスです。
          </p>
          <p className="text-sm leading-relaxed">
            定期は初回キャンセル不可のため、まずは都度購入で数品を味見し、気に入ったら送料無料の定期に切り替えるのが失敗しない始め方です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/chef-mutenka-tsukurioki-kuchikomi/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            シェフの無添つくりおきの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/wanmairu-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            わんまいるの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/takushoku-ryokin-hakusho/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            宅食料金白書2026（18社実質単価比較）
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
              <Link href="/articles/chef-mutenka-tsukurioki-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                シェフの無添つくりおきの口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/wanmairu-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                わんまいるの口コミ・評判は？まずいって本当？（国産食材100%）
              </Link>
            </li>
            <li>
              <Link href="/articles/green-spoon-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                GREEN SPOONの口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent hover:text-accent-dark transition-colors">
                冷凍弁当の栄養バランスの考え方
              </Link>
            </li>
            <li>
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の1食実質単価を正規化比較
              </Link>
            </li>
            <li>
              <Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                産後・子育て世帯におすすめの宅食
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
