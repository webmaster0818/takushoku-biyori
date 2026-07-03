import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "nosh(ナッシュ)の口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "nosh(ナッシュ)は「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。1食あたりの料金（税込620円〜・club最安499円）、地域別送料、nosh club割引の仕組みも解説します。最新の料金は公式でご確認ください。【2026年7月更新】";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh 口コミ, nosh 評判, ナッシュ 口コミ, ナッシュ 評判, nosh まずい, ナッシュ まずい, nosh 料金, nosh 送料, nosh メリット デメリット, 宅配弁当 口コミ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-15T00:00:00+09:00",
    modifiedTime: "2026-07-04T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "noshの最低注文回数は？1回だけでも解約できる？",
    answer:
      "noshには最低注文回数の縛りはありません。初回1回だけ注文して解約することも可能です。解約はマイページから完了し、解約金・違約金はかかりません。ただし、解約するとnosh clubのランクが失効するため、一時的に不要な場合は「スキップ」や「停止」を利用するのがおすすめです（公式サイトによると、スキップ・停止は何回行ってもランクは保持されます）。",
  },
  {
    question: "noshの賞味期限はどれくらい？",
    answer:
      "noshは冷凍でのお届けで、賞味期限は商品パッケージに記載されています（おおむね製造から半年〜1年程度が目安）。冷凍保存（-18℃以下）が必要で、一度解凍したものは再冷凍せずその日のうちに食べきってください。冷凍庫にストックしておけば、忙しい日にいつでもすぐ食べられます。正確な期限は届いた商品の表示をご確認ください。",
  },
  {
    question: "noshの配送頻度は変更できる？",
    answer:
      "はい、1週間に1回・2週間に1回・3週間に1回のパターンから選べます。マイページからいつでも変更可能で、次回配送のスキップ（1回飛ばし）も簡単にできます。旅行や出張で不在の時はスキップを活用すれば、食材を無駄にすることがありません。",
  },
  {
    question: "noshはダイエットに効果がある？",
    answer:
      "noshの全メニューは糖質30g以下・塩分2.5g以下に設計されており、糖質を抑えた食事管理に向いています。ただし、noshはおかずのみ（ご飯なし）なので、主食を別途用意する必要があります。ダイエット目的なら、ご飯を少なめにするか、低糖質のご飯に置き換えると管理しやすくなります。効果には個人差があるため、体調に合わせて利用してください。",
  },
  {
    question: "noshのアレルギー対応は？",
    answer:
      "noshはメニューごとにアレルギー情報を公式サイト・アプリで公開しています。注文時にアレルゲンでフィルタリングして該当メニューを除外することが可能です。ただし、同じ製造ラインで複数のメニューを製造しているため、完全なアレルゲン除去食ではありません。重度のアレルギーがある方は、事前にnoshカスタマーサポートに問い合わせることをおすすめします。",
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
          <span className="text-foreground">nosh(ナッシュ)の口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "nosh(ナッシュ)とは？基本情報まとめ" },
    { id: "good-reviews", label: "noshの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "noshの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "noshはまずい？味の評判を検証" },
    { id: "merits", label: "口コミから分かるメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "noshの料金・送料を徹底解説" },
    { id: "recommend", label: "noshがおすすめな人・おすすめしない人" },
    { id: "comparison", label: "nosh vs 三ツ星ファーム vs ウェルネスダイニング 簡易比較" },
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

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>
          &#9733;
        </span>
      ))}
    </span>
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
    title: "温めるだけで手軽・生活の負担が減った",
    reviews: [
      {
        text: "温めるだけなので簡単だし、お昼ご飯をしっかり摂れるようになったので、体のだるさが軽減しました。",
        meta: "49歳・会社員",
        sourceName: "アシタマガジン（マイナビ出版）",
        sourceUrl: "https://book.mynavi.jp/ashita_magazine/nosh-review/",
      },
      {
        text: "レンジで温めるだけというのはすごく便利ですね。（略）ナッシュにしてから負担感が大幅に減りました。",
        meta: "2年間利用者インタビュー",
        sourceName: "マイナビ農業",
        sourceUrl: "https://agri.mynavi.jp/2025_02_05_297732/",
      },
      {
        text: "何より食べた後の洗い物をしなくて良いのがありがたいです。",
        meta: "2年間利用者インタビュー",
        sourceName: "マイナビ農業",
        sourceUrl: "https://agri.mynavi.jp/2025_02_05_297732/",
      },
    ],
  },
  {
    title: "糖質・塩分控えめなのに味がしっかりしている",
    reviews: [
      {
        text: "自炊よりも簡単で美味しい手軽に糖質制限ができるのが良かったと思います。",
        meta: "32歳・会社員",
        sourceName: "アシタマガジン（マイナビ出版）",
        sourceUrl: "https://book.mynavi.jp/ashita_magazine/nosh-review/",
      },
      {
        text: "塩分が控えめなのに料理の味付けがしっかりしていて、味気無さを感じたことが一度もありませんでした。",
        meta: "40歳・会社員",
        sourceName: "アシタマガジン（マイナビ出版）",
        sourceUrl: "https://book.mynavi.jp/ashita_magazine/nosh-review/",
      },
      {
        text: "ちゃんとおいしくて、糖質＆塩分控えめとは思えない",
        meta: "実食レビュー",
        sourceName: "ROOMIE",
        sourceUrl: "https://www.roomie.jp/2023/06/1006852/",
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
    title: "メニューによって当たり外れがある",
    reviews: [
      {
        text: "副菜に関しては苦手なものが多く、残すことも多々あった。",
        meta: "30歳・会社員",
        sourceName: "アシタマガジン（マイナビ出版）",
        sourceUrl: "https://book.mynavi.jp/ashita_magazine/nosh-review/",
      },
      {
        text: "白湯ソースのベチャベチャ感が苦手で、リピートはしないと決めました。",
        meta: "31歳・自営業",
        sourceName: "アシタマガジン（マイナビ出版）",
        sourceUrl: "https://book.mynavi.jp/ashita_magazine/nosh-review/",
      },
      {
        text: "バターチキンカレーのライスはベタっとしていて、苦手な人もいると思われました",
        meta: "実食レビュー",
        sourceName: "ROOMIE",
        sourceUrl: "https://www.roomie.jp/2023/06/1006852/",
      },
    ],
    comment:
      "noshは100種類以上のメニューがあるため、口に合うもの・合わないものの差は出やすい構造です。対策としては、アプリの人気ランキングやレビューを参考に評価の高いメニューから試し、合わなかったメニューは次回から外すのが現実的です。メニューを自分で選べるのはnoshの強みなので、「外れを繰り返し引く」ことは避けやすいサービスと言えます。",
  },
  {
    title: "冷凍庫のスペースを圧迫する",
    reviews: [
      {
        text: "冷凍庫のスペースをある程度確保しておかなければならないので、他の冷凍食品やアイスクリームを購入するのを控えるようにしていました。",
        meta: "44歳・自営業",
        sourceName: "アシタマガジン（マイナビ出版）",
        sourceUrl: "https://book.mynavi.jp/ashita_magazine/nosh-review/",
      },
    ],
    comment:
      "noshの容器はおおむね横18cm×縦16.5cm×高さ4.5cm前後で、10食分を保管するには冷凍庫の1段分近いスペースが必要です。一人暮らし用の小型冷蔵庫の場合は、6食プランを選ぶ・配送間隔を短くして少量ずつ受け取る、といった工夫で対応できます。",
  },
  {
    title: "自炊と比べるとコストはかかる",
    reviews: [
      {
        text: "自炊と比較してしまうと、やはりコストパフォーマンスはあまり良くありません。",
        meta: "2年間利用者インタビュー",
        sourceName: "マイナビ農業",
        sourceUrl: "https://agri.mynavi.jp/2025_02_05_297732/",
      },
    ],
    comment:
      "1食あたり税込620円〜（10食プラン・通常時）に加えて送料がかかるため、自炊よりは確実に高くつきます。比較対象を「自炊」ではなく「コンビニ弁当＋栄養面の手間」「外食」に置くと評価が変わる価格帯です。継続利用ならnosh clubの割引（最安で1食税込499円）で差は縮まります。",
  },
];

/* ---------- Page Component ---------- */

export default function NoshReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-15T00:00:00+09:00",
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
        name: "nosh(ナッシュ)の口コミ・評判",
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
            <time dateTime="2026-04-15">公開: 2026年4月15日</time>
            <time dateTime="2026-07-04">更新: 2026年7月4日</time>
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
            「nosh(ナッシュ)って実際どうなの？」「まずいって口コミは本当？」——累計販売食数1.5億食を突破した人気の冷凍宅配弁当サービスnosh。ネット上には良い評判も悪い評判もあふれていて、どれを信じればいいのか迷いますよね。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー記事・公式情報を出典付きで整理</strong>し、noshの良い口コミ・悪い口コミの両方を中立に検証しました。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>料金プラン・地域別送料・nosh club割引</strong>の仕組みまで詳しく解説。noshが自分に合うかどうか、この記事で判断できます。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：noshはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            noshは、<strong>「メニューの豊富さと、低糖質・低塩分の設計を手軽に続けたい人」</strong>に向いた冷凍宅配弁当です。口コミでは「温めるだけの手軽さ」「糖質・塩分控えめなのに味がしっかりしている」という評価が目立つ一方、メニューによる当たり外れ・冷凍庫スペース・自炊比のコストは注意点として挙がっています。「まずい」という声もありますが評価は分かれており、味の感じ方には個人差があります（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>メニュー100種類以上で飽きにくい</li>
                <li>全メニュー糖質30g・塩分2.5g以下の設計</li>
                <li>アプリで注文・スキップ・解約まで完結</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>送料が地域・プランで変わる</li>
                <li>メニューによって味の当たり外れがある</li>
                <li>まとめ買い前提で冷凍庫スペースが要る</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            nosh（ナッシュ）公式サイトで最新の料金・お試しを見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">nosh(ナッシュ)とは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          nosh(ナッシュ)は、ナッシュ株式会社（大阪市北区）が運営する冷凍宅配弁当サービスです。「手軽に健康的な食事を」というコンセプトで急成長し、<strong>累計販売食数は1.5億食を突破</strong>（2025年12月時点・公式発表）。冷凍宅配弁当業界ではトップクラスの知名度を誇ります。
        </p>

        <SubHeading>noshの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "ナッシュ株式会社（2016年設立・大阪市北区）"],
            ["メニュー数", "100種類以上（新メニューが継続的に追加）"],
            ["糖質", "全メニュー30g以下"],
            ["塩分", "全メニュー2.5g以下"],
            ["配送", "クール宅急便（冷凍）"],
            ["配送間隔", "1週/2週/3週に1回"],
            ["解約", "マイページから可能（回数縛りなし）"],
            ["特徴", "自分でメニューを選べる / アプリ対応 / nosh club割引"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: nosh公式サイト（2026年7月時点）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>料金プラン概要（1食あたり・税込）</SubHeading>
        <ComparisonTable
          headers={["プラン", "1食あたり（税込）", "初回クーポン適用時（税込）"]}
          rows={[
            ["6食プラン", "719円", "470円"],
            ["8食プラン", "644円", "457円"],
            ["10食プラン", "620円", "471円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          10食プランが1食あたり最安の<strong>税込620円</strong>。初回は1,500円OFF・2回目1,000円OFF・3回目500円OFFの<strong>合計3,000円OFFクーポン</strong>が用意されています。さらにnosh clubの継続割引で、最安<strong>1食税込499円</strong>まで下がります。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: nosh公式サイトの表示価格（2026年7月時点）。価格・クーポン内容は変更される場合があります。最新の合計金額は公式サイトでご確認ください。
        </p>

        <SubHeading>noshの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "全メニュー糖質30g以下・塩分2.5g以下",
              text: "公式サイトによると、全メニューが糖質30g以下・塩分2.5g以下で設計されています。糖質や塩分が気になる方でも、メニュー選びでいちいち数値を気にせず注文できるのが強みです。栄養素はアプリ・公式サイトでメニューごとに確認できます。",
            },
            {
              title: "100種類以上のメニューから自由に選べる",
              text: "和洋中のメインディッシュに加え、スイーツやパンも選べます。新メニューが継続的に追加されるため飽きにくく、「今日はハンバーグ」「明日はチキン南蛮」と自分好みのメニューを組み合わせて注文できます。コース固定型のサービスと違い、苦手な食材を避けやすいのも利点です。",
            },
            {
              title: "スマホアプリで注文管理が完結",
              text: "iOS・Android対応の公式アプリがあり、メニューの選択・変更・スキップ・解約まですべてアプリで完結します。栄養素の確認、お気に入り登録、配送スケジュール管理もワンストップ。「来週は旅行だからスキップ」といった柔軟な使い方ができます。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">noshの良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公開されている第三者メディアのレビュー記事・利用者インタビューから、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示）。
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
        <SectionHeading id="bad-reviews">noshの悪い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          良い口コミだけでなく、ネガティブな意見も出典付きで正直に紹介します。購入前に知っておくべき注意点です。
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
        <SectionHeading id="mazui">noshはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「nosh まずい」と検索されることがありますが、公開レビューを確認する限り、<strong>「まずい」という評価と「美味しい」という評価は両方実在し、感じ方が分かれている</strong>のが実態です。両方の声と、まずいと言われる理由を整理します。
        </p>

        <SubHeading>「まずい」と言われる主な理由3つ</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 解凍時の水っぽさ</p>
            <p className="mb-1.5">
              180食以上を実食したレビューサイトfood
              lineは「チンしたら水溜りにどっぷり食材が浸かっているメニューもありました」と報告しています。冷凍食品の宿命として、解凍時に水分（ドリップ）が出やすいメニューがあるのは事実です。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://foodline.jp/nosh-how-to-make-bad_watery-taste-delicious"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                food line
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 薄味に感じる人がいる</p>
            <p className="mb-1.5">
              全メニューが塩分2.5g以下の設計のため、「普段から濃い味に慣れていると、ナッシュは薄味に感じやすいみたいですね」（food
              line）という指摘があります。濃い味・こってり系が好きな人には物足りない可能性があります。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://foodline.jp/nosh-how-to-make-bad_watery-taste-delicious"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                food line
              </a>
              ・
              <a
                href="https://nosh.jp/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                nosh公式（栄養設計）
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">3. メニューによる当たり外れ・食感の変化</p>
            <p className="mb-1.5">
              フィットネスクラブ・ティップネス運営のHAPPINESS!
              magazineは「副菜が水っぽい」「冷凍解凍で食感が落ちる」といった指摘が散見されるとまとめています。100種類以上あるため、口に合わないメニューに当たることは避けられません。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://online.tipness.co.jp/feature/home_meal/nosh/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                HAPPINESS! magazine
              </a>
            </p>
          </div>
        </div>

        <SubHeading>一方で「美味しい」という評価も多い</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "ちゃんとおいしくて、糖質＆塩分控えめとは思えない",
              meta: "実食レビュー",
              sourceName: "ROOMIE",
              sourceUrl: "https://www.roomie.jp/2023/06/1006852/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "副菜は多種多彩。味付けもメリハリがあって、食べていて楽しい",
              meta: "実食レビュー",
              sourceName: "ROOMIE",
              sourceUrl: "https://www.roomie.jp/2023/06/1006852/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：noshが「まずい」は一部メニュー・一部の人の感想</p>
          <p className="mb-2">
            水っぽさや薄味の指摘は実在しますが、「冷凍とは思えない」という好意的な評価も同じだけ実在します。<strong>濃い味が好きな人・ご飯付きのがっつり弁当を求める人には合いにくく</strong>、糖質・塩分控えめの食事を手軽に続けたい人には評価が高い、という傾向です。
          </p>
          <p>
            なお、水っぽさは「表示時間より30秒ほど短めに温める」「冷蔵庫で半解凍してから温める」ことで軽減できるというレビュー（
            <a
              href="https://foodline.jp/nosh-how-to-make-bad_watery-taste-delicious"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline hover:text-accent"
            >
              food line
            </a>
            ）もあります。まずは初回クーポンで評価の高い人気メニューから試すのが失敗しにくい方法です。
          </p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット5つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミや公開情報から見えてくるnoshのメリットを5つにまとめました。
        </p>

        {[
          {
            num: 1,
            title: "メニュー選びが楽しく、飽きない",
            text: "100種類以上のメニューから自分で選べるのは、コース固定型のサービスにはないnoshの大きな魅力です。新メニューが継続的に追加されるため、長く続けても選択肢が尽きにくい構造です。人気ランキングやジャンル別フィルターがあり、苦手な食材を避けて注文できます。",
          },
          {
            num: 2,
            title: "アプリの完成度が高く、管理がストレスフリー",
            text: "noshのスマホアプリは宅配弁当サービスの中でも使いやすさに定評があります。メニューの選択・変更・スキップ・プラン変更・解約まで、すべてアプリ内で完結。栄養素（カロリー・糖質・たんぱく質・塩分・脂質）の確認もワンタップです。他社は電話でしか変更できないケースもあるため、この利便性は大きなアドバンテージです。",
          },
          {
            num: 3,
            title: "nosh club割引で続けるほどお得になる",
            text: "nosh独自の継続割引制度「nosh club」は、累計購入数に応じて割引率がアップする仕組み。10食ごとにランクが上がり、最高ランクでは10食プランが1食あたり税込499円まで下がります。特別な手続きは不要で自動適用。公式サイトによると、スキップ・停止は何回行ってもランクは保持されるため、一時的に不要な時は解約ではなく停止を選ぶのがコツです。",
          },
          {
            num: 4,
            title: "糖質・塩分管理が無理なく続けられる",
            text: "全メニュー糖質30g以下・塩分2.5g以下という設計は、食事管理をしたい方にとって大きな安心材料です。「メニューを選ぶたびに数値を気にする」というストレスがなく、何を選んでも設計基準内。口コミでも「手軽に糖質制限ができる」（アシタマガジン掲載の利用者の声）という評価が見られます。",
          },
          {
            num: 5,
            title: "解約・スキップが簡単で始めやすい",
            text: "noshは回数縛りがなく、解約もマイページ・アプリから手続きできます。この「辞めやすさ」があるからこそ気軽に始められます。スキップ・停止ならnosh clubランクも維持されるので、生活リズムに合わせた柔軟な使い方が可能です。",
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
            title: "送料が地域によって大きく変わる",
            text: "noshの製造拠点は関西のため、送料は関西が最安（10食で1,243円）、関東は1,386円、北海道は1,992円と地域差があります（2026年7月時点・公式送料一覧より）。月2回配送なら送料だけで2,500〜4,000円になるケースも。対策としては「10食プランでまとめ買いして配送回数を減らす」のが最も有効です。",
          },
          {
            num: 2,
            title: "おかずのみでご飯が付かない",
            text: "noshはおかず（主菜1品＋副菜3品）のセットで、ご飯やパンは付きません。ボリュームを求める方、特に男性は物足りなさを感じる可能性があります。ただし、これはnoshに限らず冷凍宅配弁当のほとんどがおかずのみです。ご飯を別途炊く、パックご飯を用意するなどの工夫が必要です。糖質を抑えたい方には、むしろおかずのみの方が管理しやすい面もあります。",
          },
          {
            num: 3,
            title: "冷凍庫のスペースを確保する必要がある",
            text: "10食分を保管するには、冷凍庫の1段分近いスペースが必要です。口コミでも「他の冷凍食品やアイスクリームを購入するのを控えるようにしていた」（アシタマガジン掲載の利用者の声）という指摘がありました。一人暮らし用の小型冷蔵庫の方は、6食プランにする・配送頻度を調整するなど、冷凍庫の容量を確認してからプランを選びましょう。",
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
        <SectionHeading id="price">noshの料金・送料を徹底解説</SectionHeading>

        <SubHeading>プラン別料金表（1食あたり・税込）</SubHeading>
        <ComparisonTable
          headers={["プラン", "通常時", "備考"]}
          rows={[
            ["6食プラン", "719円", "少量から試したい人向け"],
            ["8食プラン", "644円", "バランス型"],
            ["10食プラン", "620円", "nosh club最安時499円"],
            ["20食プラン", "—", "2回目以降の配送で選択可"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: nosh公式サイト（2026年7月時点）。価格は変更される場合があるため、最新の合計金額は公式サイトでご確認ください。
        </p>

        <SubHeading>地域別送料の例（税込）</SubHeading>
        <ComparisonTable
          headers={["地域", "6食", "8食・10食"]}
          rows={[
            ["関西", "1,023円", "1,243円"],
            ["関東", "1,166円", "1,386円"],
            ["北海道", "1,713円", "1,992円"],
            ["沖縄", "1,623円", "1,918円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          <strong>送料のポイント：</strong>製造拠点が関西にあるため、関西が最安です。送料は毎回かかるので、<strong>「送料込みの1食あたり」で考えることが重要</strong>。10食プラン（関東）なら送料込みで1食あたり約759円、関西なら約744円です。まとめ買いで配送回数を減らすほど送料負担は下がります。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: nosh公式サイト「全国送料一覧」（2026年7月時点・クール便料金込み）。上記以外の地域は公式サイトの送料一覧をご確認ください。
        </p>

        <SubHeading>nosh club割引の仕組み</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          nosh clubは、累計購入数に応じて割引率がアップする継続割引制度です。10食ごとにランクが上がり、最高ランク（累計280食以上）で<strong>10食プランが1食あたり税込499円</strong>になります。会費・申込手続きは不要で、自動的に適用されます。
        </p>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">nosh club活用のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li>「解約」するとランクが失効するが、「停止」「スキップ」は何回行ってもランクは保持される（公式サイトより）</li>
            <li>10食プランを続ければ着実にランクが上がり、長期利用ほど1食単価が下がる</li>
            <li>最安時は1食税込499円。送料込みでも関東で約640円/食の水準</li>
          </ul>
        </div>

        <SubHeading>月額コストシミュレーション（関東・通常価格）</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          公式の1食あたり価格と送料をもとに、編集部が利用頻度別に試算しました。
        </p>
        <ComparisonTable
          headers={["利用パターン", "食数/月", "食材費（試算）", "送料", "月額合計", "1食あたり"]}
          rows={[
            ["月1回（8食）", "8食", "5,152円", "1,386円", "6,538円", "817円"],
            ["月1回（10食）", "10食", "6,200円", "1,386円", "7,586円", "759円"],
            ["月2回（10食×2）", "20食", "12,400円", "2,772円", "15,172円", "759円"],
            ["月3回（10食×3）", "30食", "18,600円", "4,158円", "22,758円", "759円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※1食あたり税込価格（8食644円・10食620円）×食数で編集部が試算（2026年7月時点）。nosh club割引適用で下がります。正確な請求額は公式サイトでご確認ください。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">noshがおすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>noshがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "一人暮らしで自炊の時間がない・面倒な人",
              "糖質・塩分を抑えた食事を手軽に続けたい人",
              "自分でメニューを選びたい人（コース制が嫌な人）",
              "アプリで手軽に管理したい人",
              "長期利用で割引を受けたい人（nosh club活用）",
              "解約・スキップの手軽さを重視する人",
              "関西・関東在住の人（送料が比較的安い）",
              "コンビニ弁当やカップ麺から卒業したい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>noshをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "北海道・沖縄など送料が高い地域で、送料負担を抑えたい人",
              "濃い味・こってり系が好きで、薄味だと物足りない人",
              "ボリューム重視でご飯付きのがっつり弁当を求める人",
              "冷凍庫のスペースに余裕がない人",
              "医師から厳密な食事制限（腎臓病・糖尿病等）を指示されている人 → ウェルネスダイニングがおすすめ",
              "メニューを選ぶのが面倒で「おまかせ」がいい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">nosh vs 三ツ星ファーム vs ウェルネスダイニング 簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshと主要な競合サービスを簡単に比較してみましょう。より詳しい比較は
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="text-accent hover:text-accent-dark underline"
          >
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
          の記事で解説しています。
        </p>

        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["1食あたり最安（税込）", "620円〜（club最安499円）", "626円〜", "663円〜"],
            ["メニュー数", "100種類以上", "80種類以上", "コース制（固定）"],
            ["メニュー選択", "自由に選べる", "自由に選べる", "コースごと固定"],
            ["糖質", "30g以下（全メニュー）", "25g以下あり", "15g以下コースあり"],
            ["アプリ", "あり（高機能）", "なし", "なし"],
            ["解約のしやすさ", "◎（マイページ）", "○（Web/電話）", "△（電話のみ）"],
            ["継続割引", "nosh club（最安499円/食）", "なし", "送料優遇"],
            ["向いている人", "自由度・手軽さ重視", "味・クオリティ重視", "食事制限・高齢者"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※各社公式サイトの公開情報をもとに編集部作成（2026年7月時点）。最新情報は各公式サイトでご確認ください。
        </p>

        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星ファーム</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネスダイニング</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["総合おすすめ度", 5, 4, 4],
                ["コスパ", 5, 3, 3],
                ["味", 4, 5, 3],
                ["メニュー自由度", 5, 4, 2],
                ["健康管理", 4, 3, 5],
                ["使いやすさ", 5, 3, 3],
              ].map(([label, n, m, w], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={n as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={m as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={w as number} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-6">※星評価は編集部の独自評価です。</p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：noshはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">nosh(ナッシュ)の総合評価（編集部独自評価）</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度", 5],
                  ["味", 4],
                  ["コスパ", 5],
                  ["メニュー自由度", 5],
                  ["使いやすさ（アプリ）", 5],
                  ["健康管理", 4],
                  ["解約のしやすさ", 5],
                ].map(([label, count], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-white/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                    <td className="border border-warm-border px-3 py-2"><StarRating count={count as number} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            noshは<strong>「メニューの自由度」「アプリの使いやすさ」「解約のしやすさ」「継続割引」</strong>のバランスが良い冷凍宅配弁当です。特に一人暮らしの20代〜40代、糖質・塩分を抑えたい方、忙しくて自炊できない方に向いています。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            「まずい」という口コミは一部メニューの水っぽさや薄味設計に起因するもので、評価は分かれています。濃い味・大盛り志向の方には合いにくい一方、「糖質＆塩分控えめとは思えない」という好意的なレビューも実在します。
          </p>
          <p className="text-sm leading-relaxed">
            まずは<strong>初回からの合計3,000円OFFクーポン</strong>を活用して、人気メニュー中心に試してみるのが失敗しない第一歩です。合わなければマイページから解約でき、回数縛りもありません。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/hitorigurashi-osusume/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            一人暮らしにおすすめの宅食TOP5
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
            href="/articles/green-spoon-kuchikomi/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            GREEN SPOONの口コミ・評判
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
              <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">
                【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
              </Link>
            </li>
            <li>
              <Link href="/articles/jisshitsu-tanka-hikaku/" className="text-accent hover:text-accent-dark transition-colors">
                冷凍弁当は「送料込みの実質単価」で比較
              </Link>
            </li>
            <li>
              <Link href="/articles/nosh-vs-watami/" className="text-accent hover:text-accent-dark transition-colors">
                nosh vs ワタミの宅食｜違いと選び方
              </Link>
            </li>
            <li>
              <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                ダイエット向け宅配弁当のおすすめ
              </Link>
            </li>
            <li>
              <Link href="/articles/tsukurioki-jp-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                つくりおき.jpの口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/green-spoon-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                GREEN SPOON(グリーンスプーン)の口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】三ツ星ファームの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】まごころケア食の口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5
              </Link>
            </li>
          </ul>
        </div>

        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約。メニューにより変動があるため、各サービスの平均的レンジを記載。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link> 参照。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-warm-border bg-white rounded-lg overflow-hidden">
              <thead className="bg-cream">
                <tr>
                  <th className="border-b border-warm-border px-3 py-2 text-left text-xs font-bold text-foreground">サービス</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">kcal</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">糖質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">タンパク質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">塩分(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">1食(円)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">nosh（ナッシュ）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">599-748</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">三ツ星ファーム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">25以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">626-842</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウェルネスダイニング</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-300</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">12-18</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">663-880</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://magokoro-care-shoku.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">まごころケア食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-350</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">462-580</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワタミの宅食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">40-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">3.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">590-680</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://shoutakubin.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">食宅便</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">560-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">Muscle Deli</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-60</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,098-1,490</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">597-750</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.5</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">550-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.pal-system.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">パルシステム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">580-720</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ナッシュclub（割引）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">499-624</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">つるかめキッチン</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">13</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">660-815</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://1meal.life/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワンミール</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">770-840</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://fitfoodhome.tabeyoukai.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">FIT FOOD HOME</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">750-1,080</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://gofood.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">GOFOOD</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">898-1,148</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※2026年5月時点の公開データ。最新情報は各公式サイトでご確認ください。</p>
        </section>

        </article>
    </>
  );
}
