import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "夕食ネット(ヨシケイ)の口コミ・評判は？まずいって本当？シンプルミールの料金・配達エリアを出典付きで検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "夕食ネット(ヨシケイのネット注文専用サービス)は「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、冷凍弁当シンプルミール(3食セット税込1,290円・初回半額)の味の評判を正面から検証。送料無料・当日朝5時締切の仕組みと配達エリア(7都府県)も解説。【2026年7月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/yushoku-net-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "夕食ネット 口コミ, 夕食ネット 評判, 夕食ネット まずい, シンプルミール 口コミ, シンプルミール まずい, 夕食ネット 料金, 夕食ネット エリア, ヨシケイ 夕食ネット, 夕食.net",
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
    question: "夕食ネットとヨシケイの違いは？",
    answer:
      "夕食ネットは、ヨシケイ開発株式会社が運営するネット注文限定・地域限定の宅配サービスです。通常のヨシケイが週単位のカタログ注文を基本とするのに対し、夕食ネットは1食（1セット）から当日朝5時までネットで注文でき、注文した日だけ届けてもらえるのが特徴です。取扱商品は冷凍弁当「シンプルミール」とミールキット（日替わりメニュー・キットde楽）に絞られています。",
  },
  {
    question: "夕食ネットの配達エリアは？",
    answer:
      "2026年7月時点の公式サイトでは、埼玉県・千葉県・東京都・大阪府・奈良県・兵庫県・徳島県が対象と案内されています（エリア拡大中・各県内でも取り扱いのない地域あり）。過去には取り扱いを終了した地域もあるため、正確には公式サイトで郵便番号を入力して確認するのが確実です。",
  },
  {
    question: "夕食ネットのシンプルミールはいくら？",
    answer:
      "冷凍弁当「シンプルミール」は3食セットで税込1,290円（1食あたり430円）です（2026年7月4日に公式サイトで確認）。初めての方は初回10セットまで半額の645円（1食あたり約215円）で試せます。配達料は無料です。最新の価格・キャンペーンは公式サイトでご確認ください。",
  },
  {
    question: "夕食ネットに定期縛りや解約金はある？",
    answer:
      "夕食ネットは都度注文型のサービスで、定期契約の縛りはありません。注文・キャンセルは当日朝5時まで受け付けられているため、必要な日だけスポットで利用できます。逆に「毎回注文する必要があるのが手間」という口コミもあり、定期的に届けてほしい人には通常のヨシケイの方が向いています。",
  },
  {
    question: "夕食ネットはまずい？味の評判は？",
    answer:
      "実食レビューやアンケート型の口コミを確認すると、「めっちゃおいしい」「ハンバーグが柔らかい」という好意的な声がある一方、「冷凍がいまいち」「味付けが濃すぎた」という声もあり、評価は分かれます。1食430円（初回約215円）という低価格帯であることを踏まえた「価格対比では十分」という評価が多数派です。初回半額で少量から試して判断するのがおすすめです。",
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
          <span className="text-foreground">夕食ネットの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "夕食ネットとは？ヨシケイとの違いと基本情報" },
    { id: "good-reviews", label: "夕食ネットの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "夕食ネットの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "夕食ネット（シンプルミール）はまずい？味の評判を検証" },
    { id: "price", label: "料金・送料・配達エリアを徹底解説" },
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
    title: "手軽さ・使い勝手が良い（都度注文・当日キャンセル可）",
    reviews: [
      {
        text: "仕事が忙しいときに食事を作るのが手間で、週に2〜3回の頻度で約2年ほど利用しています。注文時にある程度メニューを選べるのが高評価でした",
        meta: "30代女性・利用者アンケート",
        sourceName: "宅食グルメ（Appliv運営）",
        sourceUrl: "https://meal.app-liv.jp/archive/138857/",
      },
      {
        text: "簡単に注文・キャンセルができるので、必要な時にすぐ弁当を配達してもらえるのは、大変ありがたいサービスだと思いました",
        meta: "30代男性・利用者アンケート",
        sourceName: "宅食グルメ（Appliv運営）",
        sourceUrl: "https://meal.app-liv.jp/archive/138857/",
      },
      {
        text: "調理時間不要、洗い物ほぼないから仕事の後、寝るまで自分の時間がかなり取れて【QOL爆上がり】な感じする。しかも普通に作るよりいろんな食材食べれるし",
        meta: "記事内掲載のSNS投稿",
        sourceName: "ミールキットガイド",
        sourceUrl: "https://meal-kit.net/yoshikei/yoshikei-bento-simplemeal",
      },
    ],
  },
  {
    title: "味が想像以上に良い・薄味で食べやすい",
    reviews: [
      {
        text: "夢のヨシケイお弁当生活に突入したんだけれども、めっちゃおいしい！！！特に副菜が私のツボ！！！メニューも油っぽくないのあるし、コンビニ弁当に比べて薄味だし、QOL上がった",
        meta: "記事内掲載のSNS投稿",
        sourceName: "ミールキットガイド",
        sourceUrl: "https://meal-kit.net/yoshikei/yoshikei-bento-simplemeal",
      },
      {
        text: "ハンバーグは柔らかく、めちゃめちゃおいしかったです。",
        meta: "36種実食レビュー",
        sourceName: "かってにランキング堂",
        sourceUrl: "https://kattade.com/yushoku-net/",
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
    title: "冷凍弁当としての限界・味付けが合わないことがある",
    reviews: [
      {
        text: "ヨシケイの冷凍弁当いまいちだな…ヨシケイが、というより、冷凍がいまいちなんだと思う。",
        meta: "記事内掲載のSNS投稿",
        sourceName: "ミールキットガイド",
        sourceUrl: "https://meal-kit.net/yoshikei/yoshikei-bento-simplemeal",
      },
      {
        text: "味付けが濃すぎて家庭の味とは程遠く、食べ慣れませんでした。肉料理系はイマイチでした",
        meta: "20代女性・利用者アンケート",
        sourceName: "宅食グルメ（Appliv運営）",
        sourceUrl: "https://meal.app-liv.jp/archive/138857/",
      },
    ],
    comment:
      "シンプルミールは1食430円（税込・2026年7月4日確認）という業界最安クラスの冷凍弁当です。「薄味で食べやすい」という声と「味付けが濃すぎた」という声が混在しており、メニューや個人の好みによる差が大きいのが実態です。価格を考えれば妥当という評価が多く、初回半額（1食約215円）で味の相性を確かめてから続けるのが失敗しにくい方法です。",
  },
  {
    title: "量が少なめ・毎回注文する手間がかかる",
    reviews: [
      {
        text: "ヨシケイの冷凍弁当頼んでみた。３食セットで1050円だからかなり安い気がする。成人男性だと若干物足りない感じ。",
        meta: "記事内掲載のSNS投稿・価格は投稿当時のもの",
        sourceName: "ミールキットガイド",
        sourceUrl: "https://meal-kit.net/yoshikei/yoshikei-bento-simplemeal",
      },
      {
        text: "毎回注文しないといけないのが手間でした。定期配送にも対応してほしいです",
        meta: "20代女性・利用者アンケート",
        sourceName: "宅食グルメ（Appliv運営）",
        sourceUrl: "https://meal.app-liv.jp/archive/138857/",
      },
    ],
    comment:
      "シンプルミールはおかず3品構成でご飯は付かないため、成人男性がこれ1つで満腹になるのは難しいという声は妥当です。また夕食ネットは都度注文型で定期配送がないため、「注文の手間なく毎週届いてほしい」人には通常のヨシケイ（週単位注文）の方が合っています。裏を返せば縛りゼロで必要な日だけ使えるということでもあります。",
  },
];

/* ---------- Page Component ---------- */

export default function YushokuNetKuchikomiPage() {
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
        name: "夕食ネットの口コミ・評判",
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
            「夕食ネットって実際どうなの？」「シンプルミールはまずいって本当？」——夕食ネットは、食材宅配大手ヨシケイ（ヨシケイ開発株式会社）が運営する<strong>ネット注文限定・地域限定</strong>の宅配サービス。当日朝5時までの注文で当日届く冷凍弁当「シンプルミール」が看板商品です。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー・利用者アンケートを出典付きで整理</strong>し、夕食ネットの良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>料金（3食税込1,290円・初回半額）・送料無料の仕組み・配達エリア（7都府県）</strong>まで、2026年7月4日に公式サイトで確認した情報をもとに解説します。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：夕食ネットはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            夕食ネットは、<strong>「対象エリア内で、必要な日だけ低価格の冷凍弁当・ミールキットを使いたい人」</strong>に向いたサービスです。口コミでは「当日朝5時まで注文・キャンセルできる手軽さ」「1食430円（初回約215円）の安さ」が高く評価される一方、量の少なさ・冷凍弁当ゆえの味の個人差・都度注文の手間は注意点として挙がっています。「まずい」という声は一部で、価格対比の満足度は高めです（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>1食430円・送料無料の業界最安クラス</li>
                <li>当日朝5時まで注文・キャンセル可能</li>
                <li>定期縛りなし・必要な日だけ使える</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>配達エリアが7都府県に限定</li>
                <li>おかず3品でご飯なし・量は控えめ</li>
                <li>定期配送がなく毎回注文が必要</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://www.you-shoku.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            夕食ネット公式サイトで配達エリア・最新料金を確認する →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">夕食ネットとは？ヨシケイとの違いと基本情報</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          夕食ネットは、ヨシケイ開発株式会社が運営する<strong>ネット限定・地域限定</strong>の食材宅配サービスです。通常の
          <Link href="/articles/yoshikei-reviews/" className="text-accent hover:text-accent-dark underline">
            ヨシケイ
          </Link>
          が週単位のカタログ注文を基本とするのに対し、夕食ネットは<strong>当日朝5時までのネット注文で当日配達（無料）</strong>という即時性が最大の特徴。取扱商品は冷凍弁当「シンプルミール」、ミールキットの「日替わりメニュー」「キットde楽！」の3ラインに絞られています。
        </p>

        <SubHeading>夕食ネットの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "ヨシケイ開発株式会社（ヨシケイグループ）"],
            ["サービス形態", "ネット注文限定の宅配（都度注文・定期縛りなし）"],
            ["取扱商品", "シンプルミール（冷凍弁当3食セット） / 日替わりメニュー / キットde楽！"],
            ["注文締切", "当日朝5時まで（注文・キャンセルとも）"],
            ["配達", "自社スタッフが当日配達・不在時は留め置き対応"],
            ["送料", "無料（一部地域を除く）"],
            ["配達エリア", "埼玉・千葉・東京・大阪・奈良・兵庫・徳島（一部地域除く・拡大中）"],
            ["定期縛り", "なし（必要な日だけ注文可能）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: 夕食ネット公式サイト（2026年7月4日確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>ヨシケイ本体との違い</SubHeading>
        <ComparisonTable
          headers={["比較項目", "夕食ネット", "ヨシケイ（通常）"]}
          rows={[
            ["注文方法", "ネットのみ・当日朝5時まで", "カタログ・Web・アプリ（週単位が基本）"],
            ["注文単位", "1日・1セットからスポット注文", "週単位のまとめ注文が基本"],
            ["商品数", "3ライン（シンプルミール等）に限定", "すまいるごはん・Lovyu等コース多数"],
            ["エリア", "7都府県（一部地域除く）", "ほぼ全国（地域法人による）"],
            ["送料", "無料", "無料"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          「毎週決まって使う」ならヨシケイ本体、「忙しい日だけ単発で頼みたい」なら夕食ネット、という住み分けです。ヨシケイ本体の口コミ・評判は
          <Link href="/articles/yoshikei-reviews/" className="text-accent hover:text-accent-dark underline">
            ヨシケイの口コミ・評判
          </Link>
          で詳しく解説しています。
        </p>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">夕食ネットの良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公開されている第三者メディアの実食レビュー・利用者アンケートから、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示）。
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
        <SectionHeading id="bad-reviews">夕食ネットの悪い口コミ・評判（出典付き）</SectionHeading>

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
        <SectionHeading id="mazui">夕食ネット（シンプルミール）はまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「夕食ネット まずい」「シンプルミール まずい」と検索されることがあります。公開レビューを確認すると、<strong>強い酷評は少数派で、「価格を考えれば十分」という評価が中心</strong>という構図でした。
        </p>

        <SubHeading>「まずい」と言われる主な理由2つ</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 冷凍弁当というカテゴリ自体への物足りなさ</p>
            <p className="mb-1.5">
              「ヨシケイの冷凍弁当いまいちだな…ヨシケイが、というより、冷凍がいまいちなんだと思う。」という投稿が象徴的で、<strong>夕食ネット固有の問題というより、冷凍おかず全般に対する期待値のズレ</strong>が「まずい」評価の一因です。11食を実食検証したミールキットガイドは「まずい」の噂を検証する構成で、全体としては価格対比で妥当という結論を示しています。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://meal-kit.net/yoshikei/yoshikei-bento-simplemeal"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                ミールキットガイド
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 味付けの好みが分かれる（薄味派・濃い味派の両評価）</p>
            <p className="mb-1.5">
              「コンビニ弁当に比べて薄味だし、QOL上がった」と薄味を評価する声がある一方、「味付けが濃すぎて家庭の味とは程遠く、食べ慣れませんでした」という真逆の声もあります。日替わりメニューのため<strong>当たり外れ・好みとの相性がメニューごとに出やすい</strong>のが実態です。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://meal-kit.net/yoshikei/yoshikei-bento-simplemeal"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                ミールキットガイド
              </a>
              ・
              <a
                href="https://meal.app-liv.jp/archive/138857/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                宅食グルメ
              </a>
            </p>
          </div>
        </div>

        <SubHeading>一方で「美味しい」という評価も多い</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "夢のヨシケイお弁当生活に突入したんだけれども、めっちゃおいしい！！！特に副菜が私のツボ！！！",
              meta: "記事内掲載のSNS投稿",
              sourceName: "ミールキットガイド",
              sourceUrl: "https://meal-kit.net/yoshikei/yoshikei-bento-simplemeal",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "ハンバーグは柔らかく、めちゃめちゃおいしかったです。",
              meta: "36種実食レビュー",
              sourceName: "かってにランキング堂",
              sourceUrl: "https://kattade.com/yushoku-net/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は①冷凍への期待値②好みの相性に分解できる</p>
          <p>
            シンプルミールは1食430円（初回約215円）という価格帯であり、高価格帯の冷凍弁当（nosh・三ツ星ファーム等）と同じ土俵で味を比べるのはフェアではありません。「価格の割においしい」という評価が多数派で、強い酷評は冷凍おかず全般への期待値のズレが中心です。<strong>初回10セットまで半額</strong>なので、まず3食だけ試して自分の好みに合うか確かめるのが合理的です。
          </p>
        </div>

        {/* ===== 料金・送料 ===== */}
        <SectionHeading id="price">料金・送料・配達エリアを徹底解説</SectionHeading>

        <SubHeading>シンプルミール（冷凍弁当）の料金</SubHeading>
        <ComparisonTable
          headers={["項目", "内容（税込）"]}
          rows={[
            ["通常価格", "3食セット 1,290円（1食あたり430円）"],
            ["初回特典", "初回10セットまで半額 645円（1食あたり約215円）"],
            ["送料", "無料（一部地域を除く）"],
            ["注文締切", "当日朝5時まで（当日配送）"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          <strong>送料無料で1食430円</strong>は、送料込みの実質単価で見ると宅配冷凍弁当の中でも最安クラスです。冷凍宅配弁当を含む18社の送料込み実質単価は、編集部が公式サイトを一次調査した
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">
            宅食料金白書2026
          </Link>
          で比較できます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: 夕食ネット公式サイト（2026年7月4日確認）。ミールキット（日替わりメニュー・キットde楽）の価格は人数・メニューにより異なるため公式サイトでご確認ください。
        </p>

        <SubHeading>配達エリア（2026年7月時点）</SubHeading>
        <p className="text-sm mb-2 leading-relaxed">
          公式サイトでは<strong>埼玉県・千葉県・東京都・大阪府・奈良県・兵庫県・徳島県</strong>が対象と案内されています（エリア拡大中）。ただし各県内でも取り扱いのない地域があり、過去に取り扱いを終了した地域もあるため、<strong>公式サイトの郵便番号検索で確認するのが確実</strong>です。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: 夕食ネット公式サイト（2026年7月4日確認）。
        </p>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット4つ</SectionHeading>

        {[
          {
            num: 1,
            title: "送料込み1食430円の業界最安クラス",
            text: "シンプルミールは3食1,290円（税込）・送料無料。初回は10セットまで半額の1食約215円で試せます。「３食セットで（略）かなり安い気がする」という口コミの通り、価格面の満足度は高めです。",
          },
          {
            num: 2,
            title: "当日朝5時まで注文・キャンセルできる即時性",
            text: "「簡単に注文・キャンセルができるので、必要な時にすぐ弁当を配達してもらえるのは、大変ありがたい」（宅食グルメ掲載アンケート）という声の通り、当日の予定に合わせて使える柔軟さは他の宅配弁当にない強みです。",
          },
          {
            num: 3,
            title: "定期縛りゼロ・必要な日だけスポット利用できる",
            text: "定期契約がないため、解約金や回数縛りの心配がありません。「週に2〜3回の頻度で約2年ほど利用しています」という長期利用者もおり、自分のペースで続けやすい設計です。",
          },
          {
            num: 4,
            title: "自社スタッフ配達・不在時は留め置き対応",
            text: "ヨシケイグループの自社配達網を使うため、日中不在の共働き世帯でも保冷ボックスでの留め置きで受け取れます。再配達の調整が不要なのは毎日使うサービスとして実用的です。",
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
            title: "配達エリアが7都府県に限定",
            text: "埼玉・千葉・東京・大阪・奈良・兵庫・徳島以外では利用できません（各県内にも対象外地域あり）。エリア外の方は、全国配送の冷凍弁当（nosh・まごころケア食など）か、ほぼ全国対応のヨシケイ本体が選択肢になります。",
          },
          {
            num: 2,
            title: "おかず3品・ご飯なしで量は控えめ",
            text: "「成人男性だと若干物足りない感じ」という口コミの通り、シンプルミールはおかずのみの構成です。ご飯や汁物を自分で用意する前提で考えましょう。しっかり食べたい人は2食併用やミールキットとの使い分けが現実的です。",
          },
          {
            num: 3,
            title: "定期配送がなく毎回注文が必要",
            text: "「毎回注文しないといけないのが手間でした」という声の通り、自動で届く仕組みはありません。都度注文の自由さとトレードオフなので、定期的に届けてほしい人はヨシケイ本体やnoshのような定期型サービスが向いています。",
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

        <SubHeading>夕食ネットがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "対象7都府県に住んでいて、低価格の冷凍弁当を探している人",
              "忙しい日だけスポットで夕食を宅配してほしい人",
              "定期縛り・解約手続きのないサービスがいい人",
              "当日の朝に「今日は無理」と判断してから頼みたい人",
              "送料無料で実質単価を抑えたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>夕食ネットをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "配達エリア外の人 → 全国配送のnosh・まごころケア食などがおすすめ",
              "自分でメニューを選び込みたい人（日替わり中心のため）",
              "ボリューム重視・ご飯付き弁当が欲しい人",
              "注文の手間なく定期的に届いてほしい人 → ヨシケイ本体がおすすめ",
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
        <SectionHeading id="summary">まとめ：夕食ネットはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            夕食ネットは、ヨシケイグループが運営する<strong>「当日朝5時まで注文OK・送料無料・定期縛りなし」</strong>のネット限定宅配サービスです。冷凍弁当シンプルミールは3食1,290円（1食430円・初回半額）と業界最安クラスで、口コミでは手軽さとコスパへの評価が目立ちます。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            「まずい」という口コミは、冷凍おかず全般への期待値のズレと味の好みの相性に分解でき、価格対比では「十分おいしい」という評価が多数派です。一方、<strong>エリア限定・量控えめ・都度注文の手間は事実</strong>なので、全国どこでも・ボリューム重視・自動配送を求める人には向きません。
          </p>
          <p className="text-sm leading-relaxed">
            対象エリアにお住まいなら、まず初回半額（1食約215円）でシンプルミールを試し、味と使い勝手が生活に合うか確かめるのが失敗しない始め方です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/yoshikei-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ヨシケイの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/takushoku-ryokin-hakusho/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            宅食料金白書2026
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/souryou-muryou-reitou-bento/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            送料無料の冷凍弁当まとめ
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
              <Link href="/articles/yoshikei-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                ヨシケイの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/yoshikei-vs-watami/" className="text-accent hover:text-accent-dark transition-colors">
                ヨシケイとワタミの宅食を徹底比較
              </Link>
            </li>
            <li>
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の実質単価を一次調査
              </Link>
            </li>
            <li>
              <Link href="/articles/souryou-muryou-reitou-bento/" className="text-accent hover:text-accent-dark transition-colors">
                送料無料で使える冷凍宅配弁当まとめ
              </Link>
            </li>
            <li>
              <Link href="/articles/1shoku-200yen-dai/" className="text-accent hover:text-accent-dark transition-colors">
                1食200円台から使える宅配弁当はある？
              </Link>
            </li>
            <li>
              <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                一人暮らしにおすすめの宅食・宅配弁当ランキング
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
