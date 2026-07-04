import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ダイエティシャン(Dietician)の口コミ・評判は？まずいって本当？販売終了の事実と代替サービスまで解説【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "ダイエティシャン(Dietician)は「まずい」って本当？——結論、Dieticianは2025年11月28日出荷分をもって販売終了しています。本記事では公開レビューの良い口コミ・悪い口コミを出典付きで振り返り、高タンパク・低糖質という特徴を引き継げる代替サービスを中立に解説します。【2026年7月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/dietician-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ダイエティシャン 口コミ, Dietician 口コミ, ダイエティシャン 評判, ダイエティシャン まずい, ダイエティシャン 販売終了, ダイエティシャン 代わり, 高タンパク 宅配弁当, ダイエット 宅配弁当",
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
    question: "ダイエティシャン(Dietician)は本当に販売終了した？",
    answer:
      "はい。公式サイトに「Dieticianは11月28日出荷をもちまして、終売させて頂きました」という告知が掲載され（2025年10月31日付お知らせ）、2026年7月4日時点で公式サイト自体も閉鎖されています。新規注文はできません。",
  },
  {
    question: "ダイエティシャンの運営会社はどこだった？",
    answer:
      "メディカルフードサービス株式会社（2004年創業・神奈川県横浜市）です。病態食・健康食の専門メーカーで、製造は自社グループ工場（株式会社メディカルフードファクトリー・石川県小松市）が担っていました。マッスルデリ（株式会社YOUR MEAL）とは別の会社です。",
  },
  {
    question: "SMALLプランとMEDIUMプランは何が違った？",
    answer:
      "SMALL PLANは350〜450kcal・タンパク質30g以上・脂質15g以下・糖質35g以下で「脂肪を減らしてダイエットしたい人」向け、MEDIUM PLANは450〜550kcal・タンパク質40〜50g・脂質20g以下・糖質45g以下で「体の引き締め・筋肉維持」向けという設計でした（公式サイトのアーカイブより）。",
  },
  {
    question: "ダイエティシャンの料金は送料込みだった？",
    answer:
      "はい。公式FAQに「商品本体代金に含まれております。別途送料がかかるという事はございません」と明記されていました。販売当時の価格は10食コースで1食968円（SMALL初回）〜。お届け回数に応じて割引される「myランク」制度があり、6回目以降は1食100円引きでした。",
  },
  {
    question: "ダイエティシャンの代わりになる宅配弁当は？",
    answer:
      "高タンパク・PFC管理という特徴が近いのはマッスルデリ（タンパク質30g以上のプランあり）です。糖質を抑えつつ価格重視ならGOFOOD（全品糖質20g以下・タンパク質20g以上）、手軽な低糖質管理ならnosh（全品糖質30g以下）も選択肢になります。当サイトの高タンパク宅配弁当ランキングもあわせてご覧ください。",
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
          <span className="text-foreground">ダイエティシャンの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "closed", label: "【最重要】ダイエティシャンは2025年11月に販売終了" },
    { id: "about", label: "ダイエティシャン(Dietician)とはどんなサービスだったか" },
    { id: "good-reviews", label: "ダイエティシャンの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "ダイエティシャンの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "ダイエティシャンはまずかった？味の評判を検証" },
    { id: "price", label: "販売当時の料金・送料（参考）" },
    { id: "alternatives", label: "ダイエティシャンの代替サービス3選" },
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
    title: "PFCバランスと満足感の両立が高評価だった",
    reviews: [
      {
        text: "PFCが優秀で特に一食でたんぱく質が40グラム強摂れるのが素晴らしいです",
        meta: "宅食まにあ掲載のX（旧Twitter）投稿",
        sourceName: "宅食まにあ",
        sourceUrl: "https://home-gohan.net/dietician/",
      },
      {
        text: "PFCが書いてあって且つちょうどいい量で美味しいとか最高でした",
        meta: "宅食まにあ掲載のX（旧Twitter）投稿",
        sourceName: "宅食まにあ",
        sourceUrl: "https://home-gohan.net/dietician/",
      },
      {
        text: "副菜のおかげで普通にお腹膨らむし、楽だし、何より旨い",
        meta: "LiPro掲載のX（旧Twitter）投稿",
        sourceName: "LiPro（ライプロ）",
        sourceUrl: "https://meals.iid.co.jp/dietician/",
      },
    ],
  },
  {
    title: "味・食材の質への評価",
    reviews: [
      {
        text: "マジで美味しい。チキンも柔らかくてニンジンとかブロッコリーも普通の冷凍みたいな嫌な風味もない",
        meta: "幸せ冷凍宅配弁当掲載のX（旧Twitter）投稿",
        sourceName: "幸せ冷凍宅配弁当",
        sourceUrl: "https://yoibento.bex.jp/takuhai-bento-reputation-dietician/",
      },
      {
        text: "ご飯もお肉もしっかり食べられて、お腹いっぱいになり、大満足でした",
        meta: "筆者実食レビュー",
        sourceName: "食事宅配",
        sourceUrl: "https://shokuji-takuhai.com/dietician-review/",
      },
      {
        text: "脂質6.6gでボリュームもあり美味しくて好きー",
        meta: "LiPro掲載のX（旧Twitter）投稿",
        sourceName: "LiPro（ライプロ）",
        sourceUrl: "https://meals.iid.co.jp/dietician/",
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
    title: "低脂質設計ゆえの肉のパサつき・薄味",
    reviews: [
      {
        text: "個人的にはこれはハズレかな。美味しいんですけど、油分が少なくて肉がパサつくのとご飯の量が少ないのがマイナスポイント",
        meta: "幸せ冷凍宅配弁当掲載のX（旧Twitter）投稿",
        sourceName: "幸せ冷凍宅配弁当",
        sourceUrl: "https://yoibento.bex.jp/takuhai-bento-reputation-dietician/",
      },
    ],
    comment:
      "脂質15〜20g以下という設計のため、鶏肉を中心に「パサつき」を指摘する声がありました。宅食まにあの筆者実食でも鶏肉について「ちょっと水っ気が足りなくてパサパサ感あるな」、和え物について「味があんまりしない」という率直な評価があります。低脂質としっとり感のトレードオフは、この種のボディメイク食共通の課題です。",
  },
  {
    title: "メニューが選べない・支払い方法が限定的",
    reviews: [
      {
        text: "メニュー選べないのとカード決済しかないのが欠点",
        meta: "LiPro掲載のX（旧Twitter）投稿",
        sourceName: "LiPro（ライプロ）",
        sourceUrl: "https://meals.iid.co.jp/dietician/",
      },
      {
        text: "ちょっと値段設定高めだけど",
        meta: "LiPro掲載のX（旧Twitter）投稿",
        sourceName: "LiPro（ライプロ）",
        sourceUrl: "https://meals.iid.co.jp/dietician/",
      },
    ],
    comment:
      "メニューはおまかせ（全37〜40種から自動で構成）でカスタム不可、支払いはクレジットカードのみでした。1食968円〜（送料込）という価格も、一般的な冷凍弁当と比べると高めの部類。「PFC設計をプロに丸投げできる対価」と捉えられるかで評価が分かれていました。",
  },
];

/* ---------- Page Component ---------- */

export default function DieticianKuchikomiPage() {
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
        name: "ダイエティシャンの口コミ・評判",
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
            「ダイエティシャン(Dietician)って実際どうだったの？」「まずいって口コミは本当？」——高タンパク・低糖質のPFC設計で、ダイエット・ボディメイク層に支持された冷凍宅配弁当Dietician。検索する前に知っておくべき最重要事実があります。
          </p>
          <p className="mb-3">
            <strong>Dieticianは2025年11月28日出荷分をもって販売終了しており、現在は新規注文できません。</strong>この記事では、販売終了の事実関係を一次情報で整理したうえで、<strong>公開されている実在のレビュー・口コミを出典付きで振り返り</strong>、「まずい」と言われた理由も正面から検証します。
          </p>
          <p>
            さらに、Dieticianの「高タンパク・PFC管理・送料込み」という特徴を引き継げる<strong>代替サービス3つ</strong>を中立に紹介。乗り換え先の判断までこの記事で完結できます。
          </p>
        </div>

        {/* ===== 販売終了（結論ボックス） ===== */}
        <SectionHeading id="closed">【最重要】ダイエティシャンは2025年11月に販売終了</SectionHeading>

        <div className="border-2 border-red-300 rounded-xl p-5 mb-8 bg-red-50">
          <p className="font-bold text-base mb-3">結論：Dieticianは終売済み。現在は注文できません</p>
          <p className="text-sm leading-relaxed mb-3">
            公式サイトには2025年10月31日付で<strong>「＜重要＞商品終売のお知らせ　Dieticianは11月28日出荷をもちまして、終売させて頂きました。」</strong>という告知が掲載されました（公式サイトのインターネットアーカイブで確認）。2026年7月4日時点では公式サイト自体が閉鎖されており、新規注文・再開の告知はありません。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            運営していたのは病態食・健康食の専門メーカーである<strong>メディカルフードサービス株式会社</strong>（2004年創業・横浜市）。2021年9月のサービス開始から約4年での終売でした。口コミの評価は決して低くなかったため、「気になっていたのに終わっていた」という人は、後半の<a href="#alternatives" className="text-accent underline">代替サービス3選</a>を参考にしてください。
          </p>
          <p className="text-xs text-warm-gray mb-4">
            ※出典: Dietician公式サイト（dietician-family.jp）2025年12月10日時点のインターネットアーカイブ（2026年7月4日確認）
          </p>
          <Link
            href="/articles/kou-tanpaku-ranking/"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            代わりの高タンパク宅配弁当をランキングで見る →
          </Link>
          <p className="text-[10px] text-gray-400 text-center mt-2">※当サイト内の比較記事に移動します</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">ダイエティシャン(Dietician)とはどんなサービスだったか</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          Dieticianは、メディカルフードサービス株式会社が2021年9月に開始した<strong>ダイエット・ボディメイク特化の冷凍宅配弁当</strong>です。管理栄養士監修のもと、三大栄養素（PFC）バランスを設計した2プラン制で、自社グループ工場（石川県小松市）で製造。「最新調理機器＋急速凍結」を掲げ、公式には2カ月で−5〜8kgの減量モニター事例も掲載されていました。以下は販売当時の情報です（公式サイトのアーカイブ・2026年7月4日確認）。
        </p>

        <SubHeading>Dieticianの基本スペック（販売当時）</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "メディカルフードサービス株式会社（2004年創業・横浜市）"],
            ["サービス期間", "2021年9月10日開始〜2025年11月28日出荷分で終売"],
            ["SMALL PLAN", "350〜450kcal・タンパク質30g以上・脂質15g以下・糖質35g以下"],
            ["MEDIUM PLAN", "450〜550kcal・タンパク質40〜50g・脂質20g以下・糖質45g以下"],
            ["メニュー数", "全37〜40種類（時期による）・メニューはおまかせで選択不可"],
            ["監修", "管理栄養士監修"],
            ["送料", "商品代金に込み（別途不要）"],
            ["支払い", "クレジットカードのみ"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: Dietician公式サイトのインターネットアーカイブ（2026年7月4日確認）
        </p>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">ダイエティシャンの良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          販売当時に公開された第三者メディアの実食レビュー・口コミから、良い評判を出典付きで振り返ります（引用は原文ママ。省略箇所は「（略）」で明示）。
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
        <SectionHeading id="bad-reviews">ダイエティシャンの悪い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ネガティブな意見も出典付きで正直に紹介します。代替サービス選びの判断材料にもなる注意点です。
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
        <SectionHeading id="mazui">ダイエティシャンはまずかった？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「ダイエティシャン まずい」と検索されることがあります。販売当時の公開レビューを確認すると、<strong>確認できた実食メディア4媒体すべてが総評は「まずくない・むしろ美味しい部類」</strong>で、「まずい」評の実態は低脂質設計に由来する2点に集約されていました。
        </p>

        <SubHeading>「まずい」と言われた主な理由2つ</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 低脂質設計による肉（特に鶏）のパサつき</p>
            <p className="mb-1.5">
              「油分が少なくて肉がパサつくのとご飯の量が少ないのがマイナスポイント」（幸せ冷凍宅配弁当掲載のX投稿）が典型例です。脂質15〜20g以下の設計上、油のコクでカバーできない分、鶏肉系メニューでパサつきを感じる人がいました。同じ投稿者も「美味しいんですけど」と前置きしており、味の完成度そのものへの酷評ではありません。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://yoibento.bex.jp/takuhai-bento-reputation-dietician/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                幸せ冷凍宅配弁当
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 副菜・和え物の薄味</p>
            <p className="mb-1.5">
              実食した宅食まにあの筆者は、鶏肉について「ちょっと水っ気が足りなくてパサパサ感あるな」、和え物について「味があんまりしない」と率直に評価しています。減塩・低脂質のボディメイク食に共通する副菜の薄味が、濃い味に慣れた人には物足りなく感じられていました。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://home-gohan.net/dietician/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                宅食まにあ
              </a>
            </p>
          </div>
        </div>

        <SubHeading>一方で「美味しい」という評価が多数派だった</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "マジで美味しい。チキンも柔らかくてニンジンとかブロッコリーも普通の冷凍みたいな嫌な風味もない",
              meta: "幸せ冷凍宅配弁当掲載のX（旧Twitter）投稿",
              sourceName: "幸せ冷凍宅配弁当",
              sourceUrl: "https://yoibento.bex.jp/takuhai-bento-reputation-dietician/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "ご飯もお肉もしっかり食べられて、お腹いっぱいになり、大満足でした",
              meta: "筆者実食レビュー",
              sourceName: "食事宅配",
              sourceUrl: "https://shokuji-takuhai.com/dietician-review/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は少数派。低脂質設計のパサつき・薄味が実態だった</p>
          <p>
            確認した4媒体の総評はいずれも肯定的で、「まずい」が多数派という根拠はありませんでした。むしろ「PFCが優秀」「ちょうどいい量で美味しい」と、<strong>栄養設計と味の両立が評価されていたサービス</strong>です。だからこそ、代替サービスを選ぶ際も「高タンパク×低脂質の食事は多少のパサつき・薄味とトレードオフ」という前提を持っておくと、乗り換え後のギャップが小さくなります。
          </p>
        </div>

        {/* ===== 料金（参考） ===== */}
        <SectionHeading id="price">販売当時の料金・送料（参考）</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          以下は販売当時の料金です（<strong>現在は注文できません</strong>）。代替サービスとの価格比較の参考としてください。価格はすべて<strong>送料込み</strong>で、公式FAQに「商品本体代金に含まれております。別途送料がかかるという事はございません」と明記されていました。
        </p>

        <SubHeading>プラン別料金（1食あたり・送料込・販売当時）</SubHeading>
        <ComparisonTable
          headers={["プラン", "5食コース", "10食コース"]}
          rows={[
            ["SMALL 初回", "1,066円", "968円"],
            ["SMALL 6回目以降（myランク5）", "966円", "868円"],
            ["MEDIUM 初回", "1,166円", "1,068円"],
            ["MEDIUM 6回目以降（myランク5）", "1,066円", "968円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          定期割引は「myランク」制度で、お届け回数ごとに1食20円ずつ下がり、6回目以降は1食100円引きで固定という仕組みでした。現行サービスを含む冷凍宅配弁当18社の送料込み実質単価は、編集部が公式サイトを一次調査した
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>
          で比較できます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: Dietician公式サイト「商品価格一覧」のインターネットアーカイブ（2023年6月価格改定後・2026年7月4日確認）
        </p>

        {/* ===== 代替サービス ===== */}
        <SectionHeading id="alternatives">ダイエティシャンの代替サービス3選</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          Dieticianの「高タンパク・PFC管理・送料込みの分かりやすさ」をどこで引き継ぐかで、おすすめは変わります。目的別に3つ紹介します。
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">① PFC設計・ボディメイク特化を引き継ぐなら → マッスルデリ</p>
            <p className="mb-2">
              目的別プランでタンパク質30g以上の食事を管理栄養士監修で提供する、Dieticianに最も設計思想が近いサービスです。メニュー数も50種類以上と豊富。
            </p>
            <Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark underline font-medium">
              マッスルデリの口コミ・評判を見る →
            </Link>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">② 糖質制限×価格重視なら → GOFOOD</p>
            <p className="mb-2">
              全メニュー糖質20g以下・タンパク質20g以上で、10食セットなら1食税込598円〜。Dieticianより1食300円以上安く、数値基準の明確さも共通しています（販売状況は公式で要確認）。
            </p>
            <Link href="/articles/gofood-kuchikomi/" className="text-accent hover:text-accent-dark underline font-medium">
              GOFOODの口コミ・評判を見る →
            </Link>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">③ 続けやすさ・メニューの豊富さなら → nosh</p>
            <p className="mb-2">
              全品糖質30g以下・100種類以上のメニューで、アプリからの管理も手軽。厳密なPFC管理より「ゆるく長く」続けたい人に向きます。
            </p>
            <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium">
              noshの口コミ・評判を見る →
            </Link>
          </div>
        </div>

        <ComparisonTable
          headers={["項目", "Dietician（終売）", "マッスルデリ", "GOFOOD", "nosh"]}
          rows={[
            ["タンパク質", "30〜50g", "30g以上（プランによる）", "20g以上", "基準なし"],
            ["糖質", "35〜45g以下", "プランによる", "20g以下", "30g以下"],
            ["1食あたり目安（税込）", "968円〜（送料込・当時）", "約1,000円〜", "598円〜＋送料", "620円〜＋送料"],
            ["メニュー選択", "不可（おまかせ）", "可", "可", "可"],
            ["現在の販売", "終売", "販売中", "公式で要確認", "販売中"],
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
        <SectionHeading id="summary">まとめ：Dieticianは終売。評価されていた点を代替サービスで引き継ごう</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            ダイエティシャン(Dietician)は、<strong>2025年11月28日出荷分をもって販売終了</strong>しました。病態食メーカーのメディカルフードサービス社が手がけた「タンパク質30〜50g・送料込み・管理栄養士監修」という設計は、公開口コミでも「PFCが優秀」「ちょうどいい量で美味しい」と評価されており、惜しまれる終売でした。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            「まずい」という検索の実態は、低脂質設計に由来する肉のパサつき・副菜の薄味への声が中心で、確認できた実食メディア4媒体の総評はすべて肯定的でした。この「高タンパク×低脂質のトレードオフ」は代替サービスでも共通するので、乗り換え時の前提として覚えておきましょう。
          </p>
          <p className="text-sm leading-relaxed">
            PFC管理重視なら<strong>マッスルデリ</strong>、糖質制限×価格なら<strong>GOFOOD</strong>、続けやすさなら<strong>nosh</strong>——目的に合わせて、当サイトの各口コミ記事から比較検討してください。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/muscle-deli-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            マッスルデリの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/kou-tanpaku-ranking/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            高タンパク宅配弁当ランキング
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
                マッスルデリの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/gofood-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                GOFOOD(ゴーフード)の口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                nosh(ナッシュ)の口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">
                高タンパク宅配弁当ランキング
              </Link>
            </li>
            <li>
              <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                ダイエット向け宅配弁当のおすすめ
              </Link>
            </li>
            <li>
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の送料込み実質単価を一次調査
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
