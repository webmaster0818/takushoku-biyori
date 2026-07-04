import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "メディミールの口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "メディミールは「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。管理栄養士チームが手がける制限食6コースの料金（カロリー制限食7食5,270円・定期送料無料）・送料・解約条件も2026年7月4日確認の公式データで解説します。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/medimeal-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "メディミール 口コミ, メディミール 評判, メディミール まずい, メディミール 料金, メディミール 制限食, 制限食 宅配弁当, カロリー制限食 宅配, たんぱく質制限 宅配弁当",
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
    question: "メディミールはまずいって本当？",
    answer:
      "公開されている実食レビューを確認すると、「想像以上に味がしっかりついていて、おいしく食べられた」（リーミー）「糖質制限食とは思えないほどの美味しさでした」（HAPPINESS! magazine）など、「制限食は薄味でまずい」という予想を覆す評価が目立ちます。編集部が確認できた範囲では「まずい」と明言する口コミの実例は見つからず、不満は主に「量が少ない」「メニューが選べない」に集中していました。ただし味の感じ方には個人差があります。",
  },
  {
    question: "メディミールに定期縛りや解約金はある？",
    answer:
      "最低利用回数の縛りはなく、解約金もありません。次回お届けの7日前までに連絡すれば、いつでも解約・一時休止が可能です（2026年7月4日の公式サイト確認時点）。定期便は送料無料になるため、まず定期で1回試して合わなければ解約する方法も取れます。",
  },
  {
    question: "メディミールの送料はいくら？",
    answer:
      "都度注文は880円（税込）ですが、初回および定期便は送料無料です（2026年7月4日の公式サイト確認時点）。商品価格自体は初回・定期・都度とも同一のため、実質的な差は送料の有無のみです。継続するなら定期便が明確にお得です。最新の送料条件は公式サイトでご確認ください。",
  },
  {
    question: "メディミールのコースは何種類？",
    answer:
      "カロリー制限食・たんぱく質＆塩分制限食・糖質制限食・塩分制限食・バランス健康食・ムースやわらか食の6コースです。制限の目的別にコースが分かれており、各コースとも7食・14食・21食セットから選べます。詳しい栄養基準は公式サイトの各コースページでご確認ください。",
  },
  {
    question: "メディミールは管理栄養士に相談できる？",
    answer:
      "公式サイトによると、メディミールは「管理栄養士『監修』ではなく、商品開発から調理まですべて管理栄養士が担当」しており、電話オペレーターもすべて管理栄養士と明記されています。食事制限に関する疑問を注文窓口でそのまま相談できる体制は、制限食サービスの中でも特徴的です。相談サービスの詳細条件は公式サイトでご確認ください。",
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
          <span className="text-foreground">メディミールの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "メディミールとは？基本情報まとめ" },
    { id: "good-reviews", label: "メディミールの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "メディミールの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "メディミールはまずい？味の評判を検証" },
    { id: "merits", label: "口コミから分かるメリット4つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "メディミールの料金・送料を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "Dr.つるかめキッチン・ウェルネスダイニングとの簡易比較" },
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
    title: "制限食なのに味がしっかりしている",
    reviews: [
      {
        text: "塩分などが控えめになっているのにもかかわらず、味付けがしっかりしていて美味しい",
        meta: "40代男性",
        sourceName: "宅食マルシェ",
        sourceUrl: "https://www.takushoku-marche.com/medimeal-kuchikomi/",
      },
      {
        text: "バランスの良い食事を手軽にとることができるのでとても助かっています",
        meta: "週1回ペースで利用する家庭の口コミ",
        sourceName: "リーミー",
        sourceUrl: "https://leemea.wpx.jp/medimeal-review/",
      },
    ],
  },
  {
    title: "医療系専門チームによる開発・相談体制の安心感",
    reviews: [
      {
        text: "管理栄養士が監修しているのは宅食サービスではよくありますが、看護師や理学療法士など医療のスペシャリストたちが一緒に監修しているところに魅力を感じました",
        meta: "60代女性",
        sourceName: "宅食マルシェ",
        sourceUrl: "https://www.takushoku-marche.com/medimeal-kuchikomi/",
      },
      {
        text: "電話で管理栄養士さんにアドバイスを聞けるのが良い。（略）糖尿病なので、プロのサポートを受けられるのはとてもありがたい。",
        meta: "埼玉県・38歳・男性",
        sourceName: "スマートフードナビ",
        sourceUrl:
          "https://smart-food-navi.jp/food-delivery/medimeal-testing-review/",
      },
      {
        text: "食事制限が必要でも、毎食の栄養計算をしなくてよくなり気持ちが楽になった",
        meta: "掲載口コミ",
        sourceName: "HAPPINESS! magazine（ティップネス運営）",
        sourceUrl: "https://online.tipness.co.jp/feature/home_meal/medimeal/",
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
    title: "量が少なめ・もう一品欲しくなる",
    reviews: [
      {
        text: "お試しで注文しましたが、量が少な過ぎてうーんって感じでした。",
        meta: "東京都・29歳・男性",
        sourceName: "スマートフードナビ",
        sourceUrl:
          "https://smart-food-navi.jp/food-delivery/medimeal-testing-review/",
      },
      {
        text: "高齢者や女性には良いのだろうが、ボリュームが少なく結局もう一品増やしたので、経済的とは言えない。",
        meta: "掲載口コミ",
        sourceName: "リーミー",
        sourceUrl: "https://leemea.wpx.jp/medimeal-review/",
      },
    ],
    comment:
      "カロリーや塩分を制限値内に収める設計上、量は控えめです。よく食べる男性は、ご飯や汁物を足して満腹感を組み立てる前提で考えましょう。逆に食事量を管理したい人・高齢の方にはちょうど良いという評価もあります。",
  },
  {
    title: "価格が高め・継続コストが気になる",
    reviews: [
      {
        text: "健康面は魅力だが、1食あたり700円前後となると継続しづらい",
        meta: "掲載口コミ",
        sourceName: "HAPPINESS! magazine（ティップネス運営）",
        sourceUrl: "https://online.tipness.co.jp/feature/home_meal/medimeal/",
      },
      {
        text: "初回の注文は送料無料でしたが、2回目以降から880円かかってしまう",
        meta: "40代男性・都度注文の場合",
        sourceName: "宅食マルシェ",
        sourceUrl: "https://www.takushoku-marche.com/medimeal-kuchikomi/",
      },
    ],
    comment:
      "カロリー制限食は7食5,270円＝1食約753円（2026年7月4日の公式サイト確認時点）と、一般的な冷凍弁当より高めの価格帯です。ただし送料は定期便なら無料になるため、「都度注文で送料880円を払い続ける」使い方は損です。継続するなら定期便を選びましょう。",
  },
  {
    title: "メニューは選べない（おまかせ制）",
    reviews: [
      {
        text: "メニューを自由に選べないのは合わないと感じました。",
        meta: "群馬県・31歳・女性",
        sourceName: "スマートフードナビ",
        sourceUrl:
          "https://smart-food-navi.jp/food-delivery/medimeal-testing-review/",
      },
    ],
    comment:
      "栄養基準を厳密に管理する制限食サービスに共通する仕様で、メニューは管理栄養士のおまかせ制です。「選ぶ手間がない」と前向きに捉える利用者もいますが、好き嫌いが多い方は注意が必要です。",
  },
];

/* ---------- Page Component ---------- */

export default function MedimealKuchikomiPage() {
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
        name: "メディミールの口コミ・評判",
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
            「メディミールって実際どうなの？」「制限食だから薄味でまずいんじゃない？」——カロリー制限・たんぱく質＆塩分制限などの制限食6コースを展開する冷凍宅配食メディミール。商品開発から調理、電話対応まで管理栄養士が担当する体制が特徴です。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー記事を出典付きで整理</strong>し、メディミールの良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>料金体系・送料・解約条件</strong>を2026年7月4日確認の公式データで解説。メディミールが自分（またはご家族）に合うかどうか、この記事で判断できます。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：メディミールはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            メディミールは、<strong>「食事制限が必要で、栄養計算を専門家に任せたい人」</strong>に向いた制限食宅配サービスです。口コミでは「制限食なのに味がしっかりしている」「電話で管理栄養士に相談できる」という評価が目立つ一方、量の控えめさと価格は注意点として挙がっています。「まずい」と明言する口コミの実例は編集部の確認範囲では見つかりませんでした（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>制限食なのに味がしっかりという実食評価</li>
                <li>開発〜調理〜電話対応まで管理栄養士が担当</li>
                <li>定期便は送料無料・回数縛りなし</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>1食約753円〜と価格は高め</li>
                <li>量は控えめで、よく食べる人には物足りない</li>
                <li>メニューはおまかせ制で選べない</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://medimeal.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            メディミール公式サイトで最新の料金・コースを見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">メディミールとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          メディミールは、介護・リハビリ事業を手がけるベストリハ株式会社（東京都荒川区）が運営する制限食専門の冷凍宅配食サービスです。公式サイトによると、管理栄養士による「監修」にとどまらず、<strong>商品開発から調理まですべて管理栄養士が担当し、電話オペレーターもすべて管理栄養士</strong>という体制が最大の特徴。カロリー制限食・たんぱく質＆塩分制限食など6コースを展開しています。
        </p>

        <SubHeading>メディミールの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "ベストリハ株式会社（東京都荒川区）"],
            ["サービス形態", "制限食専門の冷凍宅配弁当（定期・都度どちらも可）"],
            ["コース", "カロリー制限食 / たんぱく質＆塩分制限食 / 糖質制限食 / 塩分制限食 / バランス健康食 / ムースやわらか食"],
            ["食数", "7食・14食・21食セットから選択"],
            ["開発・調理", "管理栄養士がすべて担当（公式サイトより）"],
            ["電話相談", "電話オペレーターはすべて管理栄養士（公式サイトより）"],
            ["送料", "都度注文880円 / 初回・定期便は送料無料"],
            ["解約", "最低利用回数なし・お届け7日前までの連絡でいつでも解約/休止可"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: メディミール公式サイト（2026年7月4日時点の編集部確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>メディミールの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "商品開発〜調理〜電話対応まで管理栄養士が担当",
              text: "多くの宅配食は「管理栄養士監修」ですが、メディミールは公式サイトで「監修ではなく、商品開発から調理まですべて管理栄養士が担当」と明記。注文窓口の電話対応もすべて管理栄養士のため、食事制限の疑問をその場で相談しやすい体制です。",
            },
            {
              title: "制限の目的別に6コース",
              text: "カロリー制限・たんぱく質＆塩分制限・糖質制限・塩分制限の4つの制限食に加え、健康維持向けのバランス健康食、噛む力が弱い方向けのムースやわらか食まで用意。持病や介護など、家庭ごとの事情に合わせて選べます。",
            },
            {
              title: "商品価格は初回・定期・都度で同一、差は送料のみ",
              text: "公式ページには初回・定期・都度とも同一価格と記載されており、割引条件が複雑な他社と比べて料金体系がシンプルです。定期便と初回は送料無料になるため、実質的には「定期便が最安」という分かりやすい構造です。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">メディミールの良い口コミ・評判（出典付き）</SectionHeading>

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
        <SectionHeading id="bad-reviews">メディミールの悪い口コミ・評判（出典付き）</SectionHeading>

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
        <SectionHeading id="mazui">メディミールはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「メディミール まずい」と検索されることがあります。編集部が公開レビューを確認した範囲では、<strong>「まずい」と明言する口コミの実例は見つからず、実食メディアの結論は「薄味を予想したが、想像より味がしっかりしている」型で一致</strong>していました。味への不満よりも「量」「メニューが選べない」への不満が中心です。
        </p>

        <SubHeading>実食レビューの味評価（出典付き）</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "想像以上に味がしっかりついていて、おいしく食べられた",
              meta: "記事筆者の実食感想・白身魚の明太マヨ焼き弁当",
              sourceName: "リーミー",
              sourceUrl: "https://leemea.wpx.jp/medimeal-review/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "7食すべて食べ終えてみて感じたのは、糖質制限食とは思えないほどの美味しさでした。",
              meta: "糖質制限食7食の実食レビュー",
              sourceName: "HAPPINESS! magazine（ティップネス運営）",
              sourceUrl: "https://online.tipness.co.jp/feature/home_meal/medimeal/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "制限食というのを忘れるくらい味付けがしっかり",
              meta: "編集部の実食感想",
              sourceName: "スマートフードナビ",
              sourceUrl:
                "https://smart-food-navi.jp/food-delivery/medimeal-testing-review/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」実例は確認できず。不満は味より「量」に集中</p>
          <p>
            制限食は「薄味でまずい」という先入観を持たれやすいジャンルですが、メディミールについては複数の実食メディアが「味はしっかりしている」で一致しています。一方で「量が少ない」という不満は実在するため、<strong>がっつり食べたい人は主食や汁物を足す前提</strong>で考えましょう。味の感じ方には個人差があるため、回数縛りのない定期便でまず1回試すのが確実です。
          </p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット4つ</SectionHeading>

        {[
          {
            num: 1,
            title: "制限食なのに「味がしっかり」という実食評価",
            text: "「塩分などが控えめになっているのにもかかわらず、味付けがしっかりしていて美味しい」（宅食マルシェ）など、複数媒体の実食評価が味の面で一致しています。制限食を長く続ける上で、味の満足度は最重要ポイントです。",
          },
          {
            num: 2,
            title: "管理栄養士に電話で相談できる体制",
            text: "「電話で管理栄養士さんにアドバイスを聞けるのが良い」（スマートフードナビ掲載口コミ）という声の通り、注文窓口＝管理栄養士という体制は持病のある方・ご家族の食事管理をする方に心強い仕組みです。",
          },
          {
            num: 3,
            title: "定期便は送料無料＆回数縛りなし",
            text: "商品価格は初回・定期・都度で同一のため、送料無料の定期便が実質最安です。最低利用回数の縛りや解約金はなく、7日前までの連絡でいつでも解約・休止できます（2026年7月4日の公式確認時点）。",
          },
          {
            num: 4,
            title: "ムースやわらか食まで揃う6コース構成",
            text: "制限食4種に加えてバランス健康食・ムースやわらか食があり、高齢の家族の状態変化に合わせてコースを切り替えられます。介護事業を持つ運営会社ならではのラインナップです。",
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
            title: "量は控えめで、よく食べる人には物足りない",
            text: "「量が少な過ぎてうーんって感じでした」（スマートフードナビ掲載口コミ）という声の通り、制限食の設計上、量は控えめです。ご飯・汁物を足して調整する前提で考えましょう。",
          },
          {
            num: 2,
            title: "1食約753円〜と価格は高め",
            text: "カロリー制限食7食5,270円（1食約753円・2026年7月4日公式確認）は、低価格帯の冷凍弁当（1食400円台〜）と比べると高めです。ただし定期便なら送料無料のため、送料込みで比較すると差は縮まります。",
          },
          {
            num: 3,
            title: "メニューが選べない（おまかせ制）",
            text: "栄養基準を守るため、メニューは管理栄養士のおまかせです。苦手食材が多い方、自分で選びたい方には不向きです。",
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
        <SectionHeading id="price">メディミールの料金・送料を徹底解説</SectionHeading>

        <p className="text-xs text-warm-gray mb-4">
          ※本セクションの料金・送料は、編集部が2026年7月4日にメディミール公式サイトで直接確認した金額（税込）です。最新の金額は公式サイトでご確認ください。
        </p>

        <SubHeading>コース別料金（税込・初回/定期/都度とも同一価格）</SubHeading>
        <ComparisonTable
          headers={["コース", "7食", "14食", "21食", "定期1食あたり"]}
          rows={[
            ["カロリー制限食", "5,270円", "9,698円", "14,018円", "約668〜753円"],
            ["たんぱく質＆塩分制限食", "5,270円", "9,698円", "14,018円", "約668〜753円"],
            ["バランス健康食", "4,622円", "9,158円", "13,478円", "約642〜660円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          糖質制限食・塩分制限食・ムースやわらか食の価格は公式サイトの各コースページでご確認ください。<strong>商品価格は注文方法によらず同一で、差が出るのは送料のみ</strong>です。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: メディミール公式サイト各コースページ（2026年7月4日確認）。
        </p>

        <SubHeading>送料</SubHeading>
        <ComparisonTable
          headers={["注文方法", "送料（税込）"]}
          rows={[
            ["初回注文", "無料"],
            ["定期便", "無料"],
            ["都度注文（2回目以降）", "880円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          <strong>送料のポイント：</strong>定期便なら送料が毎回無料になるため、カロリー制限食7食の場合、定期は1食約753円、都度は送料込みで1食約879円と、<strong>1食あたり約126円の差</strong>になります。回数縛りがないので、継続するなら定期一択です。
        </p>
        <p className="text-sm mb-6 leading-relaxed">
          編集部が18社の料金・送料を公式サイトで直接確認し、送料込みの1食実質単価に正規化して比較した<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>（2026年7月4日調査）では、メディミールの他社との横並び比較ができます。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>メディミールがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "カロリー・塩分・たんぱく質などの食事制限が必要な人",
              "栄養計算を専門家に任せて負担を減らしたい人",
              "管理栄養士に電話で相談しながら選びたい人",
              "高齢の家族用にやわらか食も視野に入れたい人",
              "回数縛りなしの定期便で気軽に試したい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>メディミールをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "食費を最優先で抑えたい人 → まごころケア食などがおすすめ",
              "がっつりボリューム重視の人",
              "自分でメニューを選びたい人 → noshなどがおすすめ",
              "食事制限が不要で味の自由度を求める人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">Dr.つるかめキッチン・ウェルネスダイニングとの簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          メディミールと同じ制限食ジャンルの2社を比較しました。詳しくは
          <Link
            href="/articles/tsurukame-reviews/"
            className="text-accent hover:text-accent-dark underline"
          >
            Dr.つるかめキッチンの口コミ・評判
          </Link>
          、
          <Link
            href="/articles/wellness-dining-reviews/"
            className="text-accent hover:text-accent-dark underline"
          >
            ウェルネスダイニングの口コミ・評判
          </Link>
          もあわせてご覧ください。
        </p>

        <ComparisonTable
          headers={["項目", "メディミール", "Dr.つるかめキッチン", "ウェルネスダイニング"]}
          rows={[
            ["制限食7食（税込）", "5,270円（カロリー制限）", "5,184円（糖質制限・定期）", "5,238円（糖質&カロリー・都度〜）"],
            ["送料", "都度880円 / 初回・定期無料", "都度770円 / 定期無料", "都度880円 / 定期14・21食無料"],
            ["専門家体制", "開発〜調理〜電話まで管理栄養士", "専門医＋管理栄養士のW監修", "管理栄養士監修・相談窓口あり"],
            ["回数縛り", "なし", "なし", "なし"],
            ["向いている人", "相談しながら制限食を選びたい人", "医学的根拠を重視する人", "初回送料無料で試したい人"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※各社公式サイトの公開情報をもとに編集部作成（2026年7月4日確認）。最新情報は各公式サイトでご確認ください。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：メディミールはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            メディミールは、<strong>「管理栄養士がすべてを担当する体制」と「制限食なのにしっかりした味」</strong>が強みの制限食宅配サービスです。公開レビューでは味への評価が安定しており、「まずい」と明言する口コミの実例は編集部の確認範囲では見つかりませんでした。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一方で、<strong>量の控えめさと1食約753円〜という価格</strong>は事実なので、ボリュームやコスパを最優先する人には向きません。食事制限が必要な本人やご家族が、専門家に相談しながら安全に続けられる制限食を探しているなら、有力な選択肢です。
          </p>
          <p className="text-sm leading-relaxed">
            回数縛りはないので、送料無料の定期便で7食セットを1回試し、味と量が合うかを確かめるのが失敗しない始め方です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/tsurukame-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            Dr.つるかめキッチンの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/wellness-dining-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ウェルネスダイニングの口コミ・評判
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
              <Link href="/articles/tsurukame-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                Dr.つるかめキッチンの口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                ウェルネスダイニングの口コミ・評判
              </Link>
            </li>
            <li>
              <Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                高齢者におすすめの宅配弁当
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
              <Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent hover:text-accent-dark transition-colors">
                冷凍弁当の栄養バランスの考え方
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
