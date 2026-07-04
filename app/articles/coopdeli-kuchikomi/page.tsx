import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "コープデリ夕食宅配(舞菜)の口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "コープデリの夕食宅配(デイリーコープ・舞菜シリーズ)は「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。舞菜弁当1食税込680円・舞菜おかず702円など料金と配達手数料無料の仕組みも解説。最新の料金は公式でご確認ください。【2026年7月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/coopdeli-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "コープデリ 夕食宅配 口コミ, コープデリ 弁当 評判, 舞菜 口コミ, 舞菜弁当 まずい, デイリーコープ 口コミ, コープデリ 夕食宅配 料金, 生協 夕食宅配 口コミ",
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
    question: "コープデリの夕食宅配（デイリーコープ）とは？",
    answer:
      "コープデリ連合会（関東信越の生協）が運営する夕食宅配サービスです。「舞菜」シリーズのお弁当・おかずを、月〜金の平日に担当スタッフが冷蔵で毎日届けてくれます。利用には生協への加入（出資金・脱退時返還）が必要で、週3日以上・1週間単位の定期利用が基本です。",
  },
  {
    question: "コープデリの夕食宅配の料金はいくら？",
    answer:
      "2026年7月4日に公式サイトで確認した1食あたりの税込価格は、舞菜おかず702円・舞菜弁当680円・舞菜ミニ弁当464円・舞菜しっかりおかず756円・舞菜御膳842円・エネルギー塩分調整食842円です。同じ日に2食以上頼むと対象コースは1食24円引きになります。最新の価格は公式サイトでご確認ください。",
  },
  {
    question: "コープデリの夕食宅配に配達料はかかる？",
    answer:
      "夕食宅配デイリーコープは配達手数料無料と公式に明記されています（2026年7月4日確認）。なお、通常の週1回宅配「ウイークリーコープ」は別体系で、東京都の場合は基本手数料88円＋配達手数料110円＝週198円（税込・1回6,000円税抜以上で無料など減免条件あり）です。",
  },
  {
    question: "コープデリの夕食宅配は途中でやめられる？",
    answer:
      "週3日以上・1週間単位の定期利用で自動継続ですが、中止（お休み）は可能です。お届け前週の火曜19時30分までに連絡が必要で、期限を過ぎたキャンセルは原則できません（2026年7月4日確認時点の公式案内）。旅行や帰省の週だけ休む使い方もできます。",
  },
  {
    question: "コープデリの夕食宅配はまずい？味の評判は？",
    answer:
      "口コミを調査すると「やさしい味で美味しい」「冷凍じゃないから味落ちない」という好意的な声が多い一方、「どれも似たような味」「薄味」という単調さへの指摘や、特定メニュー（カレー）を「まずい」とする声もありました。高齢者にも食べやすい薄味設計のため、濃い味好みの人には物足りない可能性があります。",
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
    { id: "mazui", label: "コープデリの夕食宅配はまずい？味の評判を検証" },
    { id: "price", label: "料金・手数料・利用条件を徹底解説" },
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
        meta: "編集部実食レビュー",
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
      "舞菜弁当・舞菜おかずは400〜500kcal前後の標準的な高齢者・少食向けボリュームで、よく食べる人には物足りません。量重視なら「舞菜しっかりおかず」（1食税込756円）を選ぶ手があります。配達は決まったルートを回る方式のため時間指定はできませんが、不在時は保冷ボックスへの留め置きで対応されます。",
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
            「コープデリの夕食宅配って実際どうなの？」「舞菜はまずいって本当？」——コープデリの夕食宅配（デイリーコープ）は、関東信越の生協が運営する<strong>冷蔵のお弁当・おかずを平日毎日届けてくれる</strong>サービス。「舞菜」シリーズのお弁当を担当スタッフが手渡し（不在時は保冷ボックス）で届けます。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー記事を出典付きで整理</strong>し、良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>1食あたりの料金・配達手数料無料の仕組み・週3日以上という利用条件</strong>まで、2026年7月4日に公式サイトで確認した情報をもとに解説します。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：コープデリの夕食宅配はこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            コープデリの夕食宅配は、<strong>「関東信越エリアで、冷蔵のお弁当を配達料なしで毎日届けてほしい人」</strong>に向いたサービスです。口コミでは「冷凍じゃないから味が落ちない」「品数が多くて安い」という評価が目立つ一方、薄味・味の単調さ・量の少なさは注意点として挙がっています。「まずい」という声は特定メニューへの不満が中心です（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
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
          コープデリの夕食宅配は、コープデリ連合会（コープみらい等・関東信越の生協）が運営する<strong>平日毎日お届け型の夕食宅配</strong>です。日替わりの「舞菜」シリーズ（お弁当・おかず）を月〜金に冷蔵で届けます。スーパー等の弁当と違い、<strong>管理栄養士監修の日替わり献立を配達手数料無料で自宅受け取り</strong>できるのが特徴。利用には生協への加入（出資金・脱退時返還）が必要です。
        </p>

        <SubHeading>基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営", "コープデリ連合会（関東信越の生協）"],
            ["サービス名", "夕食宅配（デイリーコープ）・舞菜シリーズ"],
            ["お届け", "月〜金の平日・冷蔵で毎日配達（不在時は保冷ボックス留め置き）"],
            ["配達手数料", "無料"],
            ["利用条件", "生協加入＋週3日以上・1週間単位の定期利用"],
            ["エリア", "コープデリ対象エリア（東京・埼玉・千葉・茨城・栃木・群馬・長野・新潟）"],
            ["献立", "日替わり（管理栄養士監修・メニュー選択は不可）"],
            ["中止・お休み", "お届け前週の火曜19時30分までに連絡"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: コープデリ夕食宅配公式サイト（2026年7月4日確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>コース一覧（1食あたり税込・2026年7月4日確認）</SubHeading>
        <ComparisonTable
          headers={["コース", "1食あたり（税込）", "特徴"]}
          rows={[
            ["舞菜ミニ弁当", "464円", "少食の方向けの小さめ弁当"],
            ["舞菜弁当", "680円", "ご飯付きの定番弁当"],
            ["舞菜おかず", "702円", "おかずのみの定番コース"],
            ["舞菜しっかりおかず", "756円", "品数・ボリューム多め"],
            ["舞菜御膳", "842円", "上位グレードのおかずコース"],
            ["エネルギー塩分調整食", "842円", "エネルギー・塩分に配慮した制限食"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          同じ日に2食以上注文すると、対象コース（舞菜おかず・舞菜弁当・舞菜しっかりおかず・舞菜御膳）は<strong>1食24円引き</strong>になります。夫婦2人での利用なら実質単価がさらに下がる仕組みです。18社の送料込み実質単価は
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">
            宅食料金白書2026
          </Link>
          で比較できます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: コープデリ夕食宅配公式サイト（2026年7月4日確認）。パルシステムとの違いは
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
          ネガティブな意見も出典付きで正直に紹介します。加入前に知っておくべき注意点です。
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
        <SectionHeading id="mazui">コープデリの夕食宅配はまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「コープデリ 弁当 まずい」「舞菜 まずい」と検索されることがあります。公開レビューを確認すると、<strong>「まずい」は特定メニューや味の単調さへの不満が中心で、全体評価は「やさしい味で美味しい」が優勢</strong>という構図でした。
        </p>

        <SubHeading>「まずい」と言われる主な理由2つ</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 特定メニューの当たり外れ（口コミではカレーが不評）</p>
            <p className="mb-1.5">
              「どうにかならないのか？コープデリの宅配弁当の舞菜おかずに定期的に来る「カレー」が超まずい。」という投稿のように、<strong>強い酷評は特定メニューに向けられたもの</strong>です。日替わり献立でメニューを選べないため、苦手なメニューの日も届くのが不満につながります。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://meal-kit.net/coop/coopdeli/coopdeli-obento"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                ミールキットガイド（掲載SNS投稿）
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 高齢者にも食べやすい薄味設計が「単調」に感じられる</p>
            <p className="mb-1.5">
              実食した編集部レビューには「実際はどれも似たような味で変化がありません・・・。薄味と言うのと、お年寄りが食べやすいように？」という率直な指摘があります。<strong>薄味・和食中心という設計自体が、濃い味に慣れた人には「まずい」と映る</strong>ことがあります。逆に「やさしい味で美味しい」（同記事掲載の別投稿）と、同じ特徴を高く評価する声もあり、味の好みで評価が割れています。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://meal-kit.net/coop/coopdeli/coopdeli-obento"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                ミールキットガイド
              </a>
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
          <p className="font-bold mb-1">編集部の結論：「まずい」は①特定メニュー②薄味の好みに分解できる</p>
          <p>
            冷蔵・当日配達という形式は味の面で冷凍弁当より有利で、「冷凍じゃないから味落ちない」という評価がそれを裏付けています。「まずい」の実体は特定メニューの外れ体験と薄味の好みの問題が中心です。濃い味・メニュー選択重視ならnosh等の選択型冷凍弁当、やさしい味の日替わり弁当を配達料なしで受け取りたいならコープデリ、という選び分けが妥当です。
          </p>
        </div>

        {/* ===== 料金・手数料 ===== */}
        <SectionHeading id="price">料金・手数料・利用条件を徹底解説</SectionHeading>

        <SubHeading>かかる費用は「商品代のみ」</SubHeading>
        <p className="text-sm mb-2 leading-relaxed">
          夕食宅配デイリーコープは<strong>配達手数料が無料</strong>のため、支払いは商品代のみです（2026年7月4日公式確認）。舞菜弁当（680円）を週5日×4週利用した場合の月額目安は約13,600円。2食以上の同時注文で1食24円引きが効くため、2人世帯では月あたり約1,000円の割引になります。
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
            ["お試し", "「選べるおためしセット」あり（内容・価格は申込ページで確認）"],
            ["中止・休み", "お届け前週の火曜19時30分までに連絡（期限後キャンセルは原則不可）"],
            ["支払い", "口座振替等（加入時に設定）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: コープデリ夕食宅配公式サイト・ご利用ガイド（2026年7月4日確認）。WEB加入特典（手数料8週間無料・クーポン等）が実施されている場合があります。
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
            text: "毎日届けてもらえるのに配達手数料は無料。「え？いいの？ってくらい安いと思います」という実食者の声の通り、品数対比の価格満足度は高めです。2食以上で1食24円引きも地味に効きます。",
          },
          {
            num: 3,
            title: "管理栄養士監修の日替わり献立で栄養バランスが整う",
            text: "「栄養バランスいいし」「オカズも8種類位入って、カロリー低め」という声の通り、品目数の多さは舞菜シリーズの特徴です。献立を考える負担なく、自然に野菜や魚が摂れます。",
          },
          {
            num: 4,
            title: "毎日の手渡し配達が見守りを兼ねる",
            text: "担当スタッフが平日毎日届けるため、離れて暮らす高齢の家族の安否確認代わりに使う世帯もあります。不在時は保冷ボックスへの留め置きで受け取りも柔軟です。",
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
            text: "「噂通り量が少ない」という口コミの通り、標準コースはよく食べる人には物足りません（しっかりおかずで緩和可）。また配達はルート順のため時間指定はできません。",
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
              "関東信越エリアで冷蔵の夕食宅配を探している人",
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
              "エリア外（関東信越以外）の人 → 全国配送の冷凍弁当がおすすめ",
              "自分でメニューを選びたい人 → nosh・食宅便がおすすめ",
              "濃い味・ボリューム重視の人",
              "週3日未満・不定期で使いたい人 → 夕食ネット等の都度注文型がおすすめ",
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
            「まずい」という口コミは、特定メニューの外れ体験と薄味・和食中心の設計への好みの問題に分解でき、全体としては「やさしい味」を評価する声が優勢です。一方、<strong>週3日以上の定期・生協加入・メニュー選択不可という条件は事実</strong>なので、自由度重視の人には向きません。
          </p>
          <p className="text-sm leading-relaxed">
            エリア内にお住まいなら、まずおためしセットや週3日から始めて、味と生活リズムに合うか確かめるのがおすすめです。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
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
      </article>
    </>
  );
}
