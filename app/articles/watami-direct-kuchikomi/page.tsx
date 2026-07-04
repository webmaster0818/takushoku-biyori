import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ワタミの宅食ダイレクトの口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "ワタミの宅食ダイレクト(冷凍おかずセット)は「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。お試し割(いつでも三菜10食セット税込3,900円・1食390円)、送料、定期購入の仕組みも解説。最新の料金は公式でご確認ください。【2026年7月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/watami-direct-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ワタミの宅食ダイレクト 口コミ, ワタミの宅食ダイレクト 評判, ワタミの宅食ダイレクト まずい, ワタミの宅食ダイレクト 料金, ワタミの宅食ダイレクト 送料, いつでも三菜, いつでも五菜, 冷凍弁当 口コミ",
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
    question: "ワタミの宅食ダイレクトとワタミの宅食の違いは？",
    answer:
      "「ワタミの宅食ダイレクト」は冷凍のおかずセットを宅配便でまとめて届けるサービス、「ワタミの宅食」は冷蔵のお弁当・お惣菜を自社のまごころスタッフが毎日届けるサービスです。ダイレクトは全国配送・長期ストック可能ですが送料（本州・四国・九州で税込880円）がかかり、冷蔵のワタミの宅食は宅配料込み価格ですが配達エリアが限られます。",
  },
  {
    question: "ワタミの宅食ダイレクトのお試しはいくら？",
    answer:
      "2026年7月4日に公式サイトで確認した時点では、「お試し割」として、いつでも三菜10食セットが税込3,900円（1食あたり390円・通常価格から800円OFF・お一人様1回限り）で提供されています。別途送料がかかります。キャンペーン内容は時期により変わるため、最新は公式サイトでご確認ください。",
  },
  {
    question: "ワタミの宅食ダイレクトの送料はいくら？",
    answer:
      "1注文あたり税込で、本州・四国・九州880円、北海道1,210円、沖縄2,420円です（冷凍便・2026年7月4日に公式サイトで確認）。送料は注文ごとにかかるため、1回あたりの注文食数を増やして配送回数を減らすと、1食あたりの実質負担を抑えられます。",
  },
  {
    question: "ワタミの宅食ダイレクトに定期縛りはある？",
    answer:
      "都度購入と定期購入の両方があります。定期購入はおまかせセット5%OFF・選べるセット3%OFFの割引付きです。初回から3回分が各800円OFFになる「継続割」を使う場合は3回以上の受け取りが条件になります。通常定期の解約条件・締め切りは公式サイトのFAQ・マイページでご確認ください。",
  },
  {
    question: "ワタミの宅食ダイレクトはまずい？味の評判は？",
    answer:
      "公開レビューを調査すると、「決してまずくはない」「味・コスパ的に良い」という評価が中心で、塩分管理食とは思えないしっかりした味付けを評価する声が目立ちます。一方「まずい」と感じる原因として、電子レンジの温めムラで一部食材が固いままになるケースや、見た目の地味さが指摘されています。温め時間の調整でかなり改善できる性質の不満です。",
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
          <span className="text-foreground">ワタミの宅食ダイレクトの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ワタミの宅食ダイレクトとは？基本情報まとめ" },
    { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "ワタミの宅食ダイレクトはまずい？味の評判を検証" },
    { id: "price", label: "料金・送料・お試し割を徹底解説" },
    { id: "merits", label: "口コミから分かるメリット4つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
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
    title: "塩分管理食なのに味がしっかりしている",
    reviews: [
      {
        text: "今夜は“ワタミの宅食” 塩分2.0g 薄くもなくめちゃ美味しいです。",
        meta: "記事内掲載のSNS投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku-direct/",
      },
      {
        text: "本当に塩分管理されてるのか？と疑うほどのしっかり味付け。",
        meta: "記事内掲載のSNS投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku-direct/",
      },
      {
        text: "香ばしい焼き目と甘じょっぱさ控えめのタレで食欲を刺激します。",
        meta: "照り焼きチキンの実食レビュー",
        sourceName: "LiPro（IID運営）",
        sourceUrl: "https://meals.iid.co.jp/watami-direct/",
      },
    ],
  },
  {
    title: "コスパが良い・魚料理の完成度が高い",
    reviews: [
      {
        text: "宅食あれこれ試してるけど、ワタミの宅食ダイレクトが味・コスパ的に良いかもしれない",
        meta: "記事内掲載のSNS投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku-direct/",
      },
      {
        text: "メインの鯖の味噌煮は味が染み込んでいて、骨の処理も済んでいました。副菜の2食も出しがきいた美味しいおかずでありました",
        meta: "利用歴1年の実食レポ記事に掲載されたSNS投稿",
        sourceName: "つむぎのシングルデリBlog",
        sourceUrl: "https://tsumugi-freelife.com/watami_direct_repo/",
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
    title: "量が物足りない（特に三菜・男性）",
    reviews: [
      {
        text: "内容量がおおく見えるけど男性には少ないかなー。",
        meta: "記事内掲載のSNS投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku-direct/",
      },
      {
        text: "セブンイレブンレトルトおかずに慣れてしまうと物足りない感じがします。",
        meta: "記事内掲載のSNS投稿",
        sourceName: "HonNe（EXIDEA運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku-direct/",
      },
    ],
    comment:
      "いつでも三菜は主菜1品＋副菜2品のおかずのみ構成で、ご飯は付きません。LiProの口コミ調査でも「三菜コースだと物足りない」という声がまとめられており、しっかり食べたい人は品数の多い「いつでも五菜」を選ぶか、ご飯・汁物を組み合わせる前提で考えるのが現実的です。",
  },
  {
    title: "電子レンジの温めムラ",
    reviews: [
      {
        text: "ワタミの宅食ダイレクト、いつでも三菜 白身フライ タルタルソース。いつもブロッコリーが解凍出来ずカチカチなのだが。",
        meta: "記事内掲載のSNS投稿",
        sourceName: "つむぎのシングルデリBlog",
        sourceUrl: "https://tsumugi-freelife.com/watami_direct_repo/",
      },
    ],
    comment:
      "冷凍弁当共通の弱点ですが、表示時間どおりでも食材によって温まり方に差が出ることがあります。凍ったままの部分があれば10〜20秒ずつ追加加熱するのが基本の対処法です。温めムラは「まずい」評価の主要因の一つなので、次のセクションで詳しく検証します。",
  },
];

/* ---------- Page Component ---------- */

export default function WatamiDirectKuchikomiPage() {
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
        name: "ワタミの宅食ダイレクトの口コミ・評判",
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
            「ワタミの宅食ダイレクトって実際どうなの？」「まずいって口コミは本当？」——ワタミの宅食ダイレクトは、宅配弁当最大手ワタミグループの<strong>冷凍おかずセット</strong>。管理栄養士が設計した塩分・カロリー配慮のメニューを、全国に宅配便でまとめて届けてくれます。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー記事を出典付きで整理</strong>し、良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>お試し割（いつでも三菜10食3,900円）・送料・定期購入の仕組み</strong>まで、2026年7月4日に公式サイトで確認した情報をもとに解説します。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：ワタミの宅食ダイレクトはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            ワタミの宅食ダイレクトは、<strong>「低価格帯で塩分・カロリーに配慮した冷凍おかずをストックしたい人」</strong>に向いたサービスです。口コミでは「塩分管理食とは思えないしっかりした味付け」「味・コスパの良さ」が評価される一方、三菜コースの量の少なさ・温めムラ・送料は注意点として挙がっています。「まずい」という強い酷評は少数派です（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>お試し割なら三菜10食で1食390円と手頃</li>
                <li>塩分配慮でも味がしっかりしている</li>
                <li>業界最大手グループの実績と全国配送</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>送料880円〜（本州・四国・九州）が毎回かかる</li>
                <li>三菜はおかず3品でボリューム控えめ</li>
                <li>温めムラで一部食材が固いことがある</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://www.watami-takushoku-direct.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            ワタミの宅食ダイレクト公式サイトでお試し割を見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">ワタミの宅食ダイレクトとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食ダイレクトは、ワタミ株式会社が運営する<strong>冷凍おかずセットの宅配サービス</strong>です。冷蔵弁当を毎日届ける「
          <Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark underline">
            ワタミの宅食
          </Link>
          」の冷凍版という位置づけで、宅配便によるまとめ配送のため<strong>全国どこでも利用でき、冷凍庫にストックして好きなタイミングで食べられる</strong>のが特徴。看板商品は主菜1品＋副菜2品の「いつでも三菜」、主菜1品＋副菜4品の「いつでも五菜」です。
        </p>

        <SubHeading>基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "ワタミ株式会社"],
            ["サービス形態", "冷凍おかずセットの宅配（都度購入・定期購入の両方あり）"],
            ["主なコース", "いつでも三菜（おかず3品） / いつでも五菜（おかず5品）"],
            ["設計", "管理栄養士がメニューを設計・塩分やカロリーに配慮"],
            ["配送", "冷凍便で全国配送（一部離島など除く）"],
            ["送料", "本州・四国・九州880円 / 北海道1,210円 / 沖縄2,420円（税込・1注文あたり）"],
            ["定期割引", "おまかせセット5%OFF / 選べるセット3%OFF"],
            ["初回特典", "お試し割: いつでも三菜10食3,900円（1食390円・1回限り）ほか"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: ワタミの宅食ダイレクト公式サイト（2026年7月4日確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>冷蔵の「ワタミの宅食」との違い</SubHeading>
        <ComparisonTable
          headers={["比較項目", "ワタミの宅食ダイレクト（冷凍）", "ワタミの宅食（冷蔵）"]}
          rows={[
            ["お届け", "宅配便でまとめて配送", "まごころスタッフが毎日お届け"],
            ["エリア", "全国（一部離島除く）", "一部エリア限定"],
            ["送料", "880円〜（地域別）", "宅配料込み価格（別途送料なし）"],
            ["保存", "冷凍で長期ストック可", "冷蔵・当日〜翌日"],
            ["メニュー", "自分のタイミングで選んで食べる", "日替わり（選択不可）"],
          ]}
        />

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">ワタミの宅食ダイレクトの良い口コミ・評判（出典付き）</SectionHeading>

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
        <SectionHeading id="bad-reviews">ワタミの宅食ダイレクトの悪い口コミ・評判（出典付き）</SectionHeading>

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
        <SectionHeading id="mazui">ワタミの宅食ダイレクトはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「ワタミの宅食ダイレクト まずい」と検索されることがあります。実食レビューを確認すると、<strong>味そのものへの酷評は少なく、不満はボリューム・送料などサービス面に集中している</strong>のが実態でした。
        </p>

        <SubHeading>「まずい」と言われる主な理由2つ</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 電子レンジの温めムラで一部食材が固くなる</p>
            <p className="mb-1.5">
              利用歴1年の実食レポ（つむぎのシングルデリBlog）は、「まずい」と言われる原因として<strong>「温めムラで食材がカチカチになっている」「見た目が地味で食欲が湧かない」</strong>の2点を挙げています。掲載SNS投稿にも「いつもブロッコリーが解凍出来ずカチカチなのだが」という声があり、味付け以前の加熱の問題が「まずい」体験の主要因です。同記事の結論は「全体的に濃いめの味付けでご飯が進む宅配食サービスで、決してまずくはありません。」と好意的です。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://tsumugi-freelife.com/watami_direct_repo/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                つむぎのシングルデリBlog
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. ボリューム不足を「物足りない＝おいしくない」と感じるケース</p>
            <p className="mb-1.5">
              LiProの口コミ調査は「『ひどい』と感じる理由はボリュームや送料などサービス面に集中。味や品質に関しては高評価が大半！」と結論づけています。「内容量がおおく見えるけど男性には少ないかなー。」（HonNe掲載SNS投稿）のように、<strong>三菜コースの量の少なさが満足度を下げている</strong>構図で、味の評価とは切り分けて考える必要があります。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://meals.iid.co.jp/watami-direct/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                LiPro
              </a>
              ・
              <a
                href="https://exidea.co.jp/blog/meal/home-meal/watami-takushoku-direct/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                HonNe
              </a>
            </p>
          </div>
        </div>

        <SubHeading>一方で「美味しい」という評価も多い</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "本当に塩分管理されてるのか？と疑うほどのしっかり味付け。",
              meta: "記事内掲載のSNS投稿",
              sourceName: "HonNe（EXIDEA運営）",
              sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku-direct/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "メインの鯖の味噌煮は味が染み込んでいて、骨の処理も済んでいました。",
              meta: "記事内掲載のSNS投稿",
              sourceName: "つむぎのシングルデリBlog",
              sourceUrl: "https://tsumugi-freelife.com/watami_direct_repo/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は①温めムラ②量の物足りなさが主因で、味自体の評価は高め</p>
          <p>
            介護食・給食で実績のあるワタミグループの設計だけに、塩分配慮食としての味の完成度を評価する声が目立ちます。温めムラは追加加熱で対処でき、量は五菜を選ぶかご飯を足すことで解決できるため、「まずい」の多くは使い方でカバーできる性質の不満です。まずは<strong>お試し割（1食390円・1回限り）</strong>で味との相性を確かめるのが合理的です。
          </p>
        </div>

        {/* ===== 料金・送料 ===== */}
        <SectionHeading id="price">料金・送料・お試し割を徹底解説</SectionHeading>

        <SubHeading>料金の目安（税込）</SubHeading>
        <ComparisonTable
          headers={["コース", "価格の目安", "備考"]}
          rows={[
            ["お試し割: いつでも三菜10食", "3,900円（1食390円）", "通常価格から800円OFF・1回限り"],
            ["いつでも三菜（通常/定期）", "1食あたり399円〜（公式参考表記）", "食数別の価格は公式サイトで確認"],
            ["いつでも五菜（通常/定期）", "1食あたり499円〜（公式参考表記）", "食数別の価格は公式サイトで確認"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: ワタミの宅食ダイレクト公式サイト（2026年7月4日確認）。食数・セットにより単価が変わるため、正確な金額は公式サイトでご確認ください。
        </p>

        <SubHeading>送料（税込・1注文あたり）</SubHeading>
        <ComparisonTable
          headers={["配送エリア", "送料"]}
          rows={[
            ["本州・四国・九州", "880円"],
            ["北海道", "1,210円"],
            ["沖縄", "2,420円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          送料は注文ごとにかかるため、<strong>1回の注文食数を増やして配送回数を減らす</strong>のが実質単価を下げるコツです。定期購入は「継続割」（初回から3回分が各800円OFF・3回以上の受け取りが条件）が実施されていることもあります。送料込みの実質単価は、編集部が18社の公式サイトを一次調査した
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">
            宅食料金白書2026
          </Link>
          で他社と比較できます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: ワタミの宅食ダイレクト公式サイト・ご利用ガイド（2026年7月4日確認）。キャンペーン条件は時期により変わります。
        </p>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット4つ</SectionHeading>

        {[
          {
            num: 1,
            title: "低価格帯×塩分配慮の両立",
            text: "お試し割なら1食390円、通常でも三菜1食399円〜（公式参考表記）と冷凍宅配弁当では低価格帯です。それでいて「本当に塩分管理されてるのか？と疑うほどのしっかり味付け」という口コミの通り、健康配慮食にありがちな物足りなさを感じにくい設計です。",
          },
          {
            num: 2,
            title: "業界最大手グループの管理栄養士設計",
            text: "宅配弁当売上最大手クラスのワタミグループが運営し、管理栄養士がメニューを設計。病院・介護施設向け給食で培ったノウハウが土台にあるため、継続的に食べる健康食としての信頼材料が揃っています。",
          },
          {
            num: 3,
            title: "全国配送×冷凍ストックの自由度",
            text: "冷蔵の「ワタミの宅食」はエリア限定ですが、ダイレクトは冷凍便で全国に届きます。長期保存できるので、忙しい日や体調不良の日の備えとして冷凍庫にストックしておく使い方ができます。",
          },
          {
            num: 4,
            title: "お試し割で気軽に始められる",
            text: "いつでも三菜10食セットが3,900円（1食390円・1回限り）で試せるお試し割があり、合わなければそこでやめられます。定期は割引（おまかせ5%/選べる3%）付きで、都度購入も選べる柔軟な設計です。",
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
            title: "送料が毎回かかる（880円〜）",
            text: "1注文あたり本州・四国・九州880円、北海道1,210円、沖縄2,420円（税込）の送料がかかります。10食注文なら1食あたり88円の上乗せです。送料無料の低価格サービス（まごころケア食の定期など）と比べる際は送料込みで計算しましょう。",
          },
          {
            num: 2,
            title: "三菜コースはボリューム控えめ",
            text: "おかず3品・ご飯なしの構成のため、「男性には少ないかなー」という口コミの通り、しっかり食べたい人には物足りません。五菜を選ぶ・ご飯や汁物を足すなど、満腹感は組み立てる前提で考えましょう。",
          },
          {
            num: 3,
            title: "温めムラが起きることがある",
            text: "「ブロッコリーが解凍出来ずカチカチ」という口コミの通り、食材によって温まりにくい部分が出ることがあります。表示時間で足りなければ10〜20秒ずつ追加加熱するひと手間は必要です。",
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

        <SubHeading>ワタミの宅食ダイレクトがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "塩分・カロリーに配慮した食事を低価格で続けたい人",
              "冷凍庫にストックして自分のペースで食べたい人",
              "冷蔵の「ワタミの宅食」のエリア外に住んでいる人",
              "大手の実績・管理栄養士設計に安心感を求める人",
              "まずはお試し割で1回だけ試したい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>ワタミの宅食ダイレクトをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "がっつりボリューム重視の人 → 筋肉食堂DELIなど高たんぱく系がおすすめ",
              "送料を一切払いたくない人 → 送料無料条件のあるサービスがおすすめ",
              "濃い味・外食系の味付けが好きな人",
              "毎日できたての冷蔵弁当を受け取りたい人 → ワタミの宅食（冷蔵）がおすすめ",
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
        <SectionHeading id="summary">まとめ：ワタミの宅食ダイレクトはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            ワタミの宅食ダイレクトは、<strong>「低価格帯」「塩分・カロリー配慮」「全国配送・冷凍ストック」</strong>を兼ね備えた冷凍おかずセットです。公開レビューでは「塩分管理食とは思えないしっかり味」「味・コスパが良い」という評価が目立ち、味そのものへの酷評は少数派でした。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            「まずい」という口コミは、温めムラと三菜コースの量の物足りなさに分解でき、追加加熱・五菜の選択・ご飯の用意でおおむね対処可能です。一方、<strong>送料880円〜が毎回かかる点は事実</strong>なので、実質単価は送料込みで比較しましょう。
          </p>
          <p className="text-sm leading-relaxed">
            1回限りのお試し割（いつでも三菜10食3,900円・1食390円）から始めて、味と量が自分に合うか確かめるのが失敗しない始め方です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/watami-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ワタミの宅食（冷蔵）の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/watami-direct-otameshi/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ワタミの宅食ダイレクトお試しセット完全ガイド
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
              <Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                ワタミの宅食の口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/watami-direct-otameshi/" className="text-accent hover:text-accent-dark transition-colors">
                ワタミの宅食ダイレクト お試しセット完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/articles/nosh-vs-watami/" className="text-accent hover:text-accent-dark transition-colors">
                nosh（ナッシュ）とワタミの宅食を徹底比較
              </Link>
            </li>
            <li>
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の実質単価を一次調査
              </Link>
            </li>
            <li>
              <Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                高齢者向け宅配弁当おすすめランキング
              </Link>
            </li>
            <li>
              <Link href="/articles/reitou-bento-atatame-kata/" className="text-accent hover:text-accent-dark transition-colors">
                冷凍弁当の上手な温め方（温めムラ対策）
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
