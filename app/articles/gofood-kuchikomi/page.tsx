import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "GOFOOD(ゴーフード)の口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "GOFOOD(ゴーフード)は「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。全メニュー糖質20g以下・タンパク質20g以上の低糖質冷凍弁当の料金（10食セット1食税込598円〜）、送料、回数縛りなしの仕組みも解説。最新の販売状況・料金は公式でご確認ください。【2026年7月更新】";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/gofood-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "GOFOOD 口コミ, ゴーフード 口コミ, ゴーフード 評判, GOFOOD まずい, ゴーフード まずい, GOFOOD 料金, ゴーフード 送料, 低糖質 宅配弁当, 糖質制限 冷凍弁当",
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
    question: "GOFOODの糖質制限の基準は？",
    answer:
      "全メニューが「糖質20g以下・タンパク質20g以上」で統一されています。最も糖質が低いメニューは看板商品の「ブロチキ」（ブロッコリー＆チキン）で糖質2.5g・たんぱく質35.1g。白米の代わりに大豆食品「ダイズライス」を使ったメニューがあるのも特徴です（2026年7月4日公式サイト確認）。",
  },
  {
    question: "GOFOODの送料はいくら？",
    answer:
      "5食・10食セットは地域別で税込940円（関西）〜2,170円（北海道・沖縄）です。関東は1,080円、九州は1,100円など。20食セットなら北海道・沖縄（980円）を除く都府県は送料無料になります（2026年7月4日公式FAQ確認）。最新の送料は公式サイトでご確認ください。",
  },
  {
    question: "GOFOODに回数縛りはある？解約は簡単？",
    answer:
      "回数縛りはありません。公式FAQに「いつでも停止可能です。ご購入の回数や期間の制約はございません」と明記されています。停止・変更はマイページからお届け日の6日前まで可能です。ただし初回購入分のみキャンセル不可なので注意してください。",
  },
  {
    question: "GOFOODの賞味期限はどのくらい？",
    answer:
      "公式FAQによると「賞味期限は製造から約半年間です」。全商品のラベルに期限が表記されています。冷凍庫でまとめてストックしておき、好きなタイミングで食べられます。",
  },
  {
    question: "GOFOODの支払い方法は？",
    answer:
      "クレジットカード（VISA/Mastercard/AMEX/JCB/Diners）、Amazon Pay、NP後払い（コンビニ・郵便局・銀行など）が利用できます。後払いは手数料がかかり、請求書発行から14日以内の支払いが必要です。詳細は公式サイトの特定商取引法ページでご確認ください。",
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
          <span className="text-foreground">GOFOODの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "GOFOOD(ゴーフード)とは？基本情報まとめ" },
    { id: "good-reviews", label: "GOFOODの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "GOFOODの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "GOFOODはまずい？味の評判を検証" },
    { id: "merits", label: "口コミから分かるメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "GOFOODの料金・送料を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "nosh・マッスルデリとの簡易比較" },
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
    title: "低糖質なのに美味しい・肉系メニューの評価が高い",
    reviews: [
      {
        text: "美味しいな、これ",
        meta: "大豆ミートラボ掲載のX（旧Twitter）投稿",
        sourceName: "大豆ミートラボ",
        sourceUrl: "https://soymeat-lab.com/gofood-review/",
      },
      {
        text: "ガパオライスが好きな妹が美味しいと絶賛",
        meta: "大豆ミートラボ掲載のX（旧Twitter）投稿",
        sourceName: "大豆ミートラボ",
        sourceUrl: "https://soymeat-lab.com/gofood-review/",
      },
      {
        text: "塩だれチキンハンバーグ（略）ゴーフードのメニュー中で一番おいしかった",
        meta: "35食実食した筆者のレビュー",
        sourceName: "ひとり暮らしの宅配食生活",
        sourceUrl: "https://www.single-meallife.com/gofood-delivery/",
      },
    ],
  },
  {
    title: "実食メディアの総合評価も高め",
    reviews: [
      {
        text: "ご飯が進む味で箸が止まらない",
        meta: "鶏チンジャオロースへの筆者実食評",
        sourceName: "大豆ミートラボ",
        sourceUrl: "https://soymeat-lab.com/gofood-review/",
      },
      {
        text: "想像の5億倍美味しかった",
        meta: "低糖質スイーツへの利用者口コミ",
        sourceName: "キチナビ",
        sourceUrl: "https://kichinavi.net/gofood/",
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
    title: "味付けが薄め・副菜の物足りなさ",
    reviews: [
      {
        text: "味付けなどはコンビニ弁当などよりも薄め",
        meta: "大豆ミートラボ掲載のX（旧Twitter）投稿",
        sourceName: "大豆ミートラボ",
        sourceUrl: "https://soymeat-lab.com/gofood-review/",
      },
      {
        text: "副菜は味が薄い",
        meta: "大豆ミートラボ掲載のX（旧Twitter）投稿",
        sourceName: "大豆ミートラボ",
        sourceUrl: "https://soymeat-lab.com/gofood-review/",
      },
    ],
    comment:
      "全メニュー糖質20g以下・減塩寄りの設計なので、コンビニ弁当や外食の濃い味と比べると薄く感じるのは構造的な問題です。食品開発経験者による実食記事（大豆ミートラボ）も「味は薄めベースだけど、バランスよくおいしい」と、薄味と味の完成度は別問題であると整理しています。",
  },
  {
    title: "メニューによる当たり外れ・飽き",
    reviews: [
      {
        text: "魚系メニューはイマイチ",
        meta: "35食実食した筆者のレビュー",
        sourceName: "ひとり暮らしの宅配食生活",
        sourceUrl: "https://www.single-meallife.com/gofood-delivery/",
      },
      {
        text: "副菜の種類が少ないので飽きる",
        meta: "35食実食した筆者のレビュー",
        sourceName: "ひとり暮らしの宅配食生活",
        sourceUrl: "https://www.single-meallife.com/gofood-delivery/",
      },
      {
        text: "この値段ならスーパーの弁当の方がいい",
        meta: "キチナビ掲載の利用者口コミ",
        sourceName: "キチナビ",
        sourceUrl: "https://kichinavi.net/gofood/",
      },
    ],
    comment:
      "実食系レビューでは肉系（チキン・ハンバーグ）の評価が高く、魚系・副菜の評価が相対的に低い傾向がはっきりしています。メニュー数は25品前後（2026年7月時点の公式商品一覧）と大手より少なめなので、長期利用では飽き対策としてメニュー構成をよく見て選ぶのが現実的です。",
  },
];

/* ---------- Page Component ---------- */

export default function GofoodKuchikomiPage() {
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
        name: "GOFOODの口コミ・評判",
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
            「GOFOOD(ゴーフード)って実際どうなの？」「まずいって口コミは本当？」——全メニューが<strong>糖質20g以下・タンパク質20g以上</strong>という明確な基準で作られた低糖質冷凍宅配弁当GOFOOD。糖質制限・ボディメイク中の食事管理で名前が挙がるサービスです。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー・口コミを出典付きで整理</strong>し、GOFOODの良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>プラン別の料金・地域別送料・回数縛りなしの仕組み</strong>まで詳しく解説。GOFOODが自分に合うかどうか、この記事で判断できます。
          </p>
        </div>

        {/* 販売状況の注記 */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mb-8 text-sm leading-relaxed">
          <p className="font-bold mb-1">【2026年7月4日時点の販売状況について】</p>
          <p>
            編集部確認時点で公式サイト（gofood.jp）は稼働しており、5食〜20食セットの購入ページも表示されます。ただし2025年5月に一部メニューの終売が公式発表されているほか、運営会社は新ブランド「goodeli（グーデリ）」の展開も始めており、一部の比較サイトでは販売停止と紹介されています。<strong>注文前に必ず公式サイトで最新の販売状況をご確認ください。</strong>
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：GOFOODはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            GOFOODは、<strong>「糖質制限を数値基準で徹底しつつ、1食600円前後に抑えたい人」</strong>に向いた低糖質冷凍宅配弁当です。口コミでは「低糖質なのに美味しい」「チキン系が特に美味い」という評価が目立つ一方、減塩・低糖質設計ゆえの薄味、魚系メニューや副菜の物足りなさは注意点として挙がっています。「まずい」という声の実態は薄味への評価が中心で、感じ方には個人差があります（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>全メニュー糖質20g以下・タンパク質20g以上</li>
                <li>10食セットなら1食税込598円〜と手頃</li>
                <li>回数縛りなし・20食は送料無料（一部地域除く）</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>減塩・低糖質設計で薄味に感じる人も</li>
                <li>魚系・副菜の評価は肉系より低め</li>
                <li>販売状況は注文前に公式で要確認</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・販売状況は時期により変動します。最新の正確な情報は公式サイトでご確認ください。
          </p>
          <a
            href="https://gofood.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            GOFOOD公式サイトで最新の販売状況・料金を見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">GOFOOD(ゴーフード)とは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          GOFOOD(ゴーフード)は、ゴーフード株式会社（2019年設立・東京都港区）が運営する低糖質冷凍宅配弁当です。最大の特徴は<strong>全メニューが「糖質20g以下・タンパク質20g以上」で統一</strong>されていること。白米の代わりに大豆食品「ダイズライス」を使うメニューや、糖質2.5g・たんぱく質35.1gの看板商品「ブロチキ」（ブロッコリー＆チキン）など、糖質制限・ボディメイク特化の設計です。
        </p>

        <SubHeading>GOFOODの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "ゴーフード株式会社（2019年設立・東京都港区）"],
            ["サービス形態", "低糖質冷凍宅配弁当（定期便が基本・都度購入も可）"],
            ["栄養基準", "全メニュー糖質20g以下・タンパク質20g以上"],
            ["メニュー数", "25品前後（2026年7月4日時点の公式商品一覧）"],
            ["特徴", "ダイズライス使用メニュー・チキン系中心のラインナップ"],
            ["調理", "電子レンジで温めるだけ（最短約2分〜）"],
            ["配送周期", "7日/14日/21日/28日から選択"],
            ["回数縛り", "なし（「ご購入の回数や期間の制約はございません」と公式FAQに明記）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: GOFOOD公式サイト・公式FAQ（2026年7月4日確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>料金プラン概要（税込・2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["プラン", "1食あたり", "備考"]}
          rows={[
            ["5食セット", "656円〜（一部メニュー756円）", "送料は地域別"],
            ["10食セット", "598円〜（一部メニュー698円）", "送料は地域別"],
            ["20食セット", "598円〜（一部メニュー698円）", "北海道・沖縄以外は送料無料"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          <strong>まとめ買いするほど1食単価と送料負担が下がる</strong>構造です。友達紹介の招待クーポン（初回1,000円割引）が用意されている時期もあります。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: GOFOOD公式購入ページ（2026年7月4日確認）。セット合計金額・最新のキャンペーンは公式サイトでご確認ください。
        </p>

        <SubHeading>GOFOODの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "「糖質20g以下・タンパク質20g以上」の全品統一基準",
              text: "メニューごとに糖質量を調べる必要がなく、どれを選んでも基準内という分かりやすさが強みです。糖質制限中の食事管理で「選ぶストレス」をなくしたい人に向いています。",
            },
            {
              title: "白米の代わりに「ダイズライス」",
              text: "米の代わりに大豆食品を使うことで、ご飯もの風のメニューでも低糖質を実現。ガパオライスなどライス系メニューを糖質制限中でも楽しめる構成です（大豆特有の風味は好みが分かれます）。",
            },
            {
              title: "回数縛りなし・停止はマイページから",
              text: "公式FAQに「いつでも停止可能です。ご購入の回数や期間の制約はございません」と明記。停止・変更はお届け日の6日前までマイページから操作できます（初回分のみキャンセル不可）。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">GOFOODの良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公開されている第三者メディアの実食レビュー・口コミから、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示）。
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
        <SectionHeading id="bad-reviews">GOFOODの悪い口コミ・評判（出典付き）</SectionHeading>

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
        <SectionHeading id="mazui">GOFOODはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「GOFOOD まずい」と検索されることがあります。公開レビューを確認すると、<strong>「まずい」が多数派という根拠は見つからず、低糖質・減塩設計ゆえの「薄味」への評価が実態</strong>という構図でした。実例で検証します。
        </p>

        <SubHeading>「まずい」と言われる主な理由3つ</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. SNSで最も多い声は「味がうすい」</p>
            <p className="mb-1.5">
              食品開発経験10年の筆者による実食記事（大豆ミートラボ）は、SNS口コミで「最も多いのが、『味がうすい』との声」と分析。筆者自身も「味はうすめです」としつつ、<strong>「味は薄めベースだけど、バランスよくおいしい」</strong>と、糖質20g以下・減塩設計とのトレードオフとして妥当と結論づけています。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://soymeat-lab.com/gofood-review/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                大豆ミートラボ
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 魚系・野菜系メニューの評価が肉系より低い</p>
            <p className="mb-1.5">
              35食を実食した筆者は「魚系メニューはイマイチ」と率直に評価（ひとり暮らしの宅配食生活）。キチナビ掲載の利用者口コミにも野菜について「味がしない」という声があります。一方、<strong>チキンハンバーグ・ガパオライスなど肉系の評価は一貫して高く</strong>、メニュー選びで印象が大きく変わります。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://www.single-meallife.com/gofood-delivery/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                ひとり暮らしの宅配食生活
              </a>
              {" / "}
              <a
                href="https://kichinavi.net/gofood/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                キチナビ
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">3. ダイズライスの独特の風味は好みが分かれる</p>
            <p className="mb-1.5">
              白米の代わりに使われる大豆食品「ダイズライス」は、低糖質化の要である一方、大豆特有の風味と食感があります。白米と同じものを期待すると違和感につながるため、<strong>最初はダイズライスなしのおかず型メニューから試す</strong>のが無難です。
            </p>
            <p className="text-xs text-warm-gray">
              ※ダイズライスの仕様はGOFOOD公式サイトより（2026年7月4日確認）
            </p>
          </div>
        </div>

        <SubHeading>一方で「美味しい」という評価も多い</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "ご飯が進む味で箸が止まらない",
              meta: "鶏チンジャオロースへの筆者実食評",
              sourceName: "大豆ミートラボ",
              sourceUrl: "https://soymeat-lab.com/gofood-review/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "美味しいな、これ",
              meta: "大豆ミートラボ掲載のX（旧Twitter）投稿",
              sourceName: "大豆ミートラボ",
              sourceUrl: "https://soymeat-lab.com/gofood-review/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は①減塩の薄味②魚系・副菜の弱さ③ダイズライスの風味の3因に分解できる</p>
          <p>
            実食メディアの総合評価は「宅食まにあ」が味92/100の高評価、キチナビも「ポジティブ評価が大多数」としており、「まずい」が多数派という根拠は確認できませんでした。<strong>濃い味好き・魚メニュー重視の人には合いにくい</strong>一方、糖質制限を数値で管理したい人にとっては、肉系メニュー中心に選べば満足度の高いサービスです。
          </p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット5つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミや公開情報から見えてくるGOFOODのメリットを5つにまとめました。
        </p>

        {[
          {
            num: 1,
            title: "糖質20g以下・タンパク質20g以上を「選ばずに」達成できる",
            text: "全メニュー統一基準なので、どれを頼んでも糖質制限の枠内に収まります。「PFCを毎食計算するのが面倒」という人にとって、この分かりやすさは実利です。看板のブロチキは糖質2.5g・たんぱく質35.1gと、コンビニのサラダチキンより本格的な構成です。",
          },
          {
            num: 2,
            title: "低糖質帯では手頃な1食598円〜",
            text: "10食・20食セットなら1食税込598円〜（一部メニュー698円）。糖質制限特化の宅配弁当は1食900〜1,000円台のサービスも多い中、低糖質×この価格帯は口コミでもコスパ面で評価されています。",
          },
          {
            num: 3,
            title: "肉系メニューの味の評価が高い",
            text: "「塩だれチキンハンバーグ（略）ゴーフードのメニュー中で一番おいしかった」（ひとり暮らしの宅配食生活）、「ガパオライスが好きな妹が美味しいと絶賛」（大豆ミートラボ掲載のX投稿）など、チキン系・ハンバーグ系の満足度が目立ちます。",
          },
          {
            num: 4,
            title: "回数縛りなし・配送周期も4パターンから選べる",
            text: "「いつでも停止可能です。ご購入の回数や期間の制約はございません」（公式FAQ）と明記されており、7/14/21/28日周期から生活ペースに合わせて選べます。冷凍庫の在庫に合わせた調整がしやすい設計です。",
          },
          {
            num: 5,
            title: "20食まとめ買いで送料無料（北海道・沖縄除く）",
            text: "冷凍宅配弁当のコストを押し上げる送料が、20食セットなら北海道・沖縄（980円）を除いて無料になります。冷凍庫に余裕があるなら、20食一択でまとめるのが実質単価を最小化する買い方です。",
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
            title: "販売状況・メニュー構成の変動が大きい",
            text: "2025年5月に8品の終売が公式発表されるなど、ラインナップの入れ替わりが大きめです。運営会社は新ブランド「goodeli」の展開も始めており、一部比較サイトでは販売停止と紹介されています。注文前に公式サイトで最新の販売状況を必ず確認してください。",
          },
          {
            num: 2,
            title: "5食・10食では送料が地域別940〜2,170円かかる",
            text: "関西940円・関東1,080円・北海道と沖縄は2,170円と、少量注文では送料負担が重くなります。1食単価が安くても、5食セット＋送料だと実質単価は700円台後半〜になる地域もあるため、まとめ買い前提で考えましょう。",
          },
          {
            num: 3,
            title: "メニュー数25品前後で長期利用は飽きやすい",
            text: "「副菜の種類が少ないので飽きる」（ひとり暮らしの宅配食生活）という35食実食者の指摘の通り、nosh（100種類以上）などと比べるとラインナップは小規模です。毎日3食置き換えるより、糖質を抑えたい夕食だけなど部分利用が現実的です。",
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
        <SectionHeading id="price">GOFOODの料金・送料を徹底解説</SectionHeading>

        <SubHeading>プラン別料金（税込・2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["プラン", "1食あたり", "セット金額の目安"]}
          rows={[
            ["5食セット", "656円〜（一部756円）", "3,280円〜＋送料"],
            ["10食セット", "598円〜（一部698円）", "5,980円〜＋送料"],
            ["20食セット", "598円〜（一部698円）", "11,960円〜（送料無料※）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: GOFOOD公式購入ページ（2026年7月4日確認）。セット金額はカート内で確定します。※20食の送料無料は北海道・沖縄（980円）を除く。最新価格は公式サイトでご確認ください。
        </p>

        <SubHeading>送料（税込・5食/10食セット・2026年7月4日公式FAQ確認）</SubHeading>
        <ComparisonTable
          headers={["地域", "送料"]}
          rows={[
            ["関西", "940円"],
            ["北陸・中部・中国・四国", "1,000円"],
            ["関東（1都7県・山梨含む）", "1,080円"],
            ["信越・九州", "1,100円"],
            ["南東北", "1,240円"],
            ["北東北", "1,350円"],
            ["北海道・沖縄", "2,170円（20食セットは980円）"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          <strong>送料のポイント：</strong>10食セット＋関東送料の場合、実質単価は1食約706円〜。<strong>20食セット（北海道・沖縄以外送料無料）なら1食598円〜のまま</strong>です。冷凍宅配弁当18社の送料込み実質単価は、編集部が公式サイトを一次調査した
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>
          で比較できます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: GOFOOD公式FAQ（2026年7月4日確認）。最新の送料は公式サイトでご確認ください。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>GOFOODがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "糖質制限を数値基準（20g以下）で徹底したい人",
              "高タンパクな食事でボディメイクを進めたい人",
              "チキン系・ハンバーグ系の肉メニューが好きな人",
              "低糖質帯で1食600円前後に抑えたい人",
              "回数縛りなしで気軽に始めたい人",
              "冷凍庫に余裕があり20食まとめ買いできる人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>GOFOODをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "濃い味・しっかり味付け派の人 → nosh・三ツ星ファームがおすすめ",
              "魚メニューを重視する人",
              "メニューの豊富さ・飽きにくさを重視する人",
              "白米と同じ感覚でご飯ものを食べたい人（ダイズライスは風味が異なる）",
              "5食だけ試したい北海道・沖縄の人（送料2,170円が重い）",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">nosh・マッスルデリとの簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          GOFOODと、糖質・栄養管理系で比較されやすい2社を並べました。詳しくは
          <Link
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline"
          >
            noshの口コミ・評判
          </Link>
          、
          <Link
            href="/articles/muscle-deli-reviews/"
            className="text-accent hover:text-accent-dark underline"
          >
            マッスルデリの口コミ・評判
          </Link>
          もあわせてご覧ください。
        </p>

        <ComparisonTable
          headers={["項目", "GOFOOD", "nosh", "マッスルデリ"]}
          rows={[
            ["糖質基準", "全品20g以下", "全品30g以下", "プランによる"],
            ["タンパク質", "全品20g以上", "基準なし", "30g以上（プランによる）"],
            ["1食あたり目安（税込）", "598円〜", "620円〜", "約1,000円〜"],
            ["メニュー数", "25品前後", "100種類以上", "50種類以上"],
            ["送料", "地域別940円〜/20食は無料※", "地域別913円〜", "本州無料（プラン・時期による）"],
            ["回数縛り", "なし", "なし", "定期は条件による"],
            ["向いている人", "厳格な糖質制限×コスパ", "ゆるい糖質管理×豊富さ", "本格ボディメイク"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※各社公式サイトの公開情報をもとに編集部作成（2026年7月時点）。※20食の送料無料は北海道・沖縄を除く。最新情報は各公式サイトでご確認ください。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：GOFOODはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            GOFOODは、<strong>「全メニュー糖質20g以下・タンパク質20g以上」という明確な基準と、低糖質帯では手頃な1食598円〜の価格</strong>が強みの冷凍宅配弁当です。公開レビューでは肉系メニューの味への評価が高く、実食メディアの総合評価もおおむね良好でした。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            「まずい」という検索の実態は、減塩・低糖質設計による薄味と、魚系・副菜の相対的な弱さへの評価が中心で、「まずい」が多数派という根拠は確認できませんでした。一方、<strong>メニュー数の少なさと販売状況・ラインナップの変動</strong>は事実なので、注文前に公式サイトで最新状況を確認するのが安全です。
          </p>
          <p className="text-sm leading-relaxed">
            回数縛りはないので、まずは評価の高いチキン系メニュー中心のセットを1回試し、薄味設計が自分に合うかを確かめるのが失敗しない始め方です。
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
            href="/articles/muscle-deli-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            マッスルデリの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/toushitsu-seigen-osusume/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            糖質制限向け宅配弁当のおすすめ
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
              <Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                糖質制限向け宅配弁当のおすすめ
              </Link>
            </li>
            <li>
              <Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                マッスルデリの口コミ・評判を徹底調査
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
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の送料込み実質単価を一次調査
              </Link>
            </li>
            <li>
              <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                ダイエット向け宅配弁当のおすすめ
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
