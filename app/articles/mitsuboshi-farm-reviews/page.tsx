import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】三ツ星ファームの口コミ・評判を徹底調査！まずいは本当？実食レビューでわかったメリット・デメリット";
const ARTICLE_DESCRIPTION =
  "三ツ星ファームの口コミ・評判を徹底調査。「まずい」の真相を実食検証し、良い口コミ・悪い口コミの両方を紹介。料金プラン・送料・メニューの特徴を解説。nosh・ウェルネスダイニングとの違いもわかります。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/mitsuboshi-farm-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "三ツ星ファーム 口コミ, 三ツ星ファーム 評判, 三ツ星ファーム まずい, 三ツ星ファーム 料金, 三ツ星ファーム 送料, 三ツ星ファーム メニュー, 宅配弁当 口コミ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-16T00:00:00+09:00",
    modifiedTime: "2026-04-16T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "三ツ星ファームの最低注文回数は？すぐ解約できる？",
    answer:
      "三ツ星ファームの長期継続プランには回数の縛りがあり、途中解約するとキャンセル料が発生する場合があります。一方、通常の定期購入プランであれば、マイページからいつでもスキップ・停止・解約が可能です。初めての方はまず通常プランで試して、味やボリュームに満足してから長期プランへ切り替えるのがおすすめです。",
  },
  {
    question: "三ツ星ファームの賞味期限はどれくらい？",
    answer:
      "三ツ星ファームの賞味期限は製造日から約1年間です。届いた商品のパッケージに記載されています。冷凍保存（-18度以下）が必要で、解凍後は当日中にお召し上がりください。長期保存が可能なので、まとめ買いしてストックしておけば忙しい日にすぐ食べられます。",
  },
  {
    question: "三ツ星ファームとnoshの違いは？どっちがおすすめ？",
    answer:
      "三ツ星ファームは「味のクオリティ」が最大の強みで、一流シェフが監修した本格的な味わいが特徴です。一方、noshは「コスパ」「メニュー自由度」「アプリの使いやすさ」で優れています。味にこだわるなら三ツ星ファーム、総合的なバランスとコスパを重視するならnoshがおすすめです。詳しくは3社比較記事をご覧ください。",
  },
  {
    question: "三ツ星ファームはダイエット向き？",
    answer:
      "三ツ星ファームの全メニューは350kcal以下・糖質25g以下・たんぱく質15g以上に設計されており、ダイエットに適しています。特にたんぱく質が豊富なので、筋トレやボディメイクと組み合わせたい方にもおすすめです。ただし、おかずのみ（ご飯なし）なので、主食は別途用意する必要があります。",
  },
  {
    question: "三ツ星ファームの送料はいくら？",
    answer:
      "送料は全国一律990円（税込）です。ただし、北海道・沖縄は2,500円かかります。初回注文は送料無料のキャンペーンが適用される場合があります。14食・21食プランでまとめて注文すると1食あたりの送料負担を抑えられます。",
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
          <span className="text-foreground">三ツ星ファームの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "三ツ星ファームとは？基本情報まとめ" },
    { id: "good-reviews", label: "三ツ星ファームの良い口コミ・評判" },
    { id: "bad-reviews", label: "三ツ星ファームの悪い口コミ・評判" },
    { id: "merits", label: "実際に注文してわかったメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "三ツ星ファームの料金・送料を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "他社との簡易比較" },
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

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
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

/* ---------- Page Component ---------- */

export default function MitsuboshiFarmReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-16T00:00:00+09:00",
    dateModified: "2026-04-16T00:00:00+09:00",
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

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        {/* Title */}
        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            口コミ・評判
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-16">公開: 2026年4月16日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「三ツ星ファームって本当に美味しいの？」「まずいって口コミがあるけど大丈夫？」——一流シェフ監修の冷凍宅配弁当として注目を集める三ツ星ファーム。SNSでは「レストランみたい」と絶賛する声がある一方、「値段が高い」「量が少ない」という不満も。
          </p>
          <p className="mb-3">
            そこでこの記事では、<strong>三ツ星ファームの口コミ・評判を徹底的にリサーチ</strong>。編集部が実際に注文して食べた上で、良い口コミ・悪い口コミの信憑性を検証しました。
          </p>
          <p>
            さらに、<strong>料金プラン・送料・メニューの特徴</strong>まで詳しく解説。三ツ星ファームが自分に合うかどうか、この記事を読めば判断できます。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">三ツ星ファームとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          三ツ星ファームは、株式会社イングリウッドが運営する冷凍宅配弁当サービスです。有名店の料理人やシェフが監修したメニューが最大の特徴で、<strong>「自宅で本格レストランの味が楽しめる」</strong>と口コミで評判を集めています。全メニュー350kcal以下・糖質25g以下・たんぱく質15g以上という栄養バランスも魅力です。
        </p>

        <SubHeading>三ツ星ファームの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社イングリウッド"],
            ["メニュー数", "80種類以上（定期的に新メニュー追加）"],
            ["カロリー", "全メニュー350kcal以下"],
            ["糖質", "全メニュー25g以下"],
            ["たんぱく質", "全メニュー15g以上"],
            ["配送", "ヤマト運輸クール宅急便（冷凍）"],
            ["配送間隔", "毎週/2週/3週/月1回"],
            ["支払い方法", "クレジットカード・Amazon Pay・NP後払い"],
            ["解約", "マイページから可能"],
            ["特徴", "一流シェフ監修 / 独自の急速冷凍技術 / 会員ランク制度"],
          ]}
        />

        <SubHeading>料金プラン概要</SubHeading>
        <ComparisonTable
          headers={["プラン", "料金（税込）", "1食あたり"]}
          rows={[
            ["7食プラン", "6,489円", "927円"],
            ["14食プラン", "11,038円", "788円"],
            ["21食プラン", "14,288円", "680円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          21食プランが1食あたり最安の680円。初回は最大4,500円OFFのキャンペーンが適用される場合があり、さらにお得に始められます。まとめ買いするほど1食あたりのコストが下がる料金設計です。
        </p>

        <SubHeading>三ツ星ファームの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "一流シェフ・料理人が監修した本格メニュー",
              text: "ミシュラン経験のあるシェフや有名レストランの料理人がメニューを監修。冷凍弁当とは思えないクオリティの味わいが最大の特徴です。和洋中からエスニックまで80種類以上のバリエーションがあり、「今日はビストロ風」「明日は和食」と気分に合わせて選べます。",
            },
            {
              title: "全メニュー350kcal以下・糖質25g以下・たんぱく質15g以上",
              text: "管理栄養士が栄養バランスを設計。カロリー・糖質が控えめでありながら、たんぱく質はしっかり摂れる設計です。ダイエット中の方はもちろん、筋トレやボディメイクに取り組む方にも適した栄養バランスが特徴です。",
            },
            {
              title: "独自の急速冷凍技術で素材の食感を保持",
              text: "三ツ星ファーム独自の急速冷凍技術により、調理直後の風味と食感を最大限キープ。解凍後も野菜のシャキシャキ感やお肉のジューシーさが残ります。一般的な冷凍弁当にありがちな「水っぽさ」が少ないと口コミでも高評価です。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">
          三ツ星ファームの良い口コミ・評判
        </SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          SNS（X・Instagram）や口コミサイトから、三ツ星ファームに関する良い評判を集めました。特に多かった意見を5つのカテゴリに分類しています。
        </p>

        {[
          {
            title: "味がレストラン級で冷凍弁当の概念が変わった",
            reviews: [
              "「正直、冷凍弁当でここまで美味しいとは思わなかった。特にデミグラスハンバーグは絶品」（30代女性）",
              "「家族に出したら『これどこのお店？』と聞かれた。冷凍弁当と言ったら驚かれた」（40代女性）",
              "「noshから乗り換えたけど、味は確実にワンランク上。値段の差は味の差」（30代男性）",
              "「副菜まで丁寧に味付けされていて、手抜き感がゼロ。プロの仕事を感じる」（40代男性）",
            ],
          },
          {
            title: "メニューが豊富で飽きない（80種類以上）",
            reviews: [
              "「和洋中からエスニックまで揃っていて、毎回新しい発見がある」（20代女性）",
              "「定期的に新メニューが追加されるから、半年続けてもまだ食べたことないメニューがたくさん」（30代男性）",
              "「写真映えするメニューが多くて、思わずSNSに投稿したくなる」（20代女性）",
            ],
          },
          {
            title: "高たんぱく質で筋トレ・ダイエットに最適",
            reviews: [
              "「全メニューたんぱく質15g以上なのが嬉しい。ジム通いの食事管理が楽になった」（30代男性）",
              "「350kcal以下なのに満足感がある。2ヶ月で3kg減った」（30代女性）",
              "「PFCバランスを考えると、三ツ星ファームが一番理想に近い」（20代男性）",
              "「糖質25g以下で味もしっかり。ダイエットしてる感覚がない」（40代女性）",
            ],
          },
          {
            title: "盛り付け・見た目が美しく食事が楽しい",
            reviews: [
              "「彩りが綺麗で、お皿に移すと本当にレストランの一皿みたい」（30代女性）",
              "「他の冷凍弁当は茶色一色だったけど、三ツ星ファームは緑・赤・黄色と彩り豊か」（40代女性）",
              "「見た目が美しいと食欲も出る。食事の時間が楽しみになった」（50代女性）",
            ],
          },
          {
            title: "解凍しても水っぽくならない",
            reviews: [
              "「他社の冷凍弁当は解凍すると水浸しになることがあったけど、三ツ星ファームはそれがない」（30代女性）",
              "「野菜がシャキシャキで、冷凍とは思えない食感」（40代男性）",
              "「お肉がジューシーで、パサパサしない。急速冷凍の技術は本物だと感じた」（30代男性）",
            ],
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-green-50 rounded-lg p-3 text-sm leading-relaxed"
                >
                  {review}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">
          三ツ星ファームの悪い口コミ・評判
        </SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          良い口コミだけでなく、ネガティブな意見も正直に紹介します。購入前に知っておくべき注意点です。
        </p>

        {[
          {
            title: "値段が高い（1食680円〜927円＋送料）",
            reviews: [
              "「味は最高だけど、送料込みだと1食1,000円近くなる。毎日は厳しい」（30代男性）",
              "「noshと比べると1食あたり100〜200円高い。味の差に見合うかは人による」（40代男性）",
              "「初回割引は嬉しいけど、2回目以降の価格がネック」（20代女性）",
            ],
            comment:
              "三ツ星ファームの1食あたり価格はnosh（599円〜）より高めですが、味のクオリティを考えると妥当という声も多いです。コストを抑えるには21食プラン（1食680円）がおすすめ。送料込みでも1食約750円に収まります。週2〜3回の「ご褒美ごはん」として活用するのも賢い使い方です。",
          },
          {
            title: "量が少ないと感じる（特に男性）",
            reviews: [
              "「成人男性には物足りない。おかずとしてはいいけど、これだけでは足りない」（30代男性）",
              "「女性やダイエット中の方にはちょうどいいサイズ。がっつり派には不向き」（40代男性）",
              "「ご飯と汁物を足してやっと一食分。おかずのみなので注意」（20代男性）",
            ],
            comment:
              "三ツ星ファームは1食あたり約200〜280gのおかずセットです。350kcal以下の設計上、ボリュームは控えめ。ただし、ダイエット目的ならこの量がむしろ適量です。男性やボリュームを求める方は、ご飯・汁物・サラダを別途用意しましょう。",
          },
          {
            title: "冷凍庫のスペースを圧迫する",
            reviews: [
              "「14食プランで注文したら冷凍庫がパンパンに。一人暮らし用の小型冷蔵庫だと厳しい」（20代女性）",
              "「21食プランはお得だけど、保管場所に困る」（30代男性）",
            ],
            comment:
              "三ツ星ファームの容器サイズは約18cm x 18cm x 4cm。一人暮らし用の小型冷凍庫だと7食が限界の場合もあります。まずは7食プランから始めて、冷凍庫のスペースを確認してからプランをアップグレードするのがおすすめです。長期継続プランでは冷凍庫を無料でレンタルできる特典もあります。",
          },
          {
            title: "アプリがなくWeb操作のみ",
            reviews: [
              "「noshのように専用アプリがあると便利なのに」（20代男性）",
              "「スマホのブラウザだとメニュー選びが少し面倒」（30代女性）",
            ],
            comment:
              "現状、三ツ星ファームにはnoshのような専用アプリはありません。メニュー選択や配送管理はWebサイトのマイページから行います。ブラウザのブックマークに登録しておけば、操作自体はスムーズに行えます。",
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-red-50 rounded-lg p-3 text-sm leading-relaxed"
                >
                  {review}
                </div>
              ))}
            </div>
            <div className="bg-cream rounded-lg p-4 text-sm leading-relaxed">
              <p className="font-bold mb-1">編集部の見解</p>
              <p>{category.comment}</p>
            </div>
          </div>
        ))}

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">
          実際に注文してわかったメリット5つ
        </SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          編集部が実際に三ツ星ファームを3ヶ月間利用して感じたメリットを5つにまとめました。
        </p>

        {[
          {
            num: 1,
            title: "味のクオリティが冷凍弁当業界トップクラス",
            text: "実際に食べてみて最も感動したのが味のレベルです。特にデミグラスハンバーグ、チキン南蛮、エビのチリソースなどの人気メニューは、レストランで食べても遜色ないクオリティ。副菜も一品一品丁寧に味付けされており、「作り置きのおかず」感がありません。noshやウェルネスダイニングと比較しても、味の面では三ツ星ファームが頭一つ抜けていると感じました。",
          },
          {
            num: 2,
            title: "急速冷凍技術で解凍後の食感が優れている",
            text: "三ツ星ファーム独自の急速冷凍技術は、他社と明らかに差を感じるポイントです。野菜のシャキシャキ感、お肉のジューシーさ、魚のふっくらした食感——冷凍弁当でありがちな「水っぽさ」「べちゃっと感」がほとんどありません。解凍ムラも少なく、電子レンジの加熱だけで安定した仕上がりになります。",
          },
          {
            num: 3,
            title: "栄養バランスが優秀（高たんぱく・低糖質・低カロリー）",
            text: "全メニュー350kcal以下・糖質25g以下・たんぱく質15g以上という設計は、宅配弁当サービスの中でもトップクラスの栄養バランスです。noshは糖質30g以下ですが、たんぱく質の下限値は設定されていません。三ツ星ファームは「高たんぱく」が保証されているので、筋トレやボディメイクとの相性が抜群です。",
          },
          {
            num: 4,
            title: "見た目が美しく食事の満足度が高い",
            text: "三ツ星ファームのメニューは見た目の美しさにもこだわっています。彩り豊かな盛り付け、ソースのかけ方、食材の配置まで計算されており、お皿に移すとまるでレストランの一皿。「冷凍弁当を食べている」という罪悪感がなく、むしろ食事の時間が楽しみになりました。SNS映えするメニューも多く、Instagram投稿するユーザーも多いです。",
          },
          {
            num: 5,
            title: "会員ランク制度で継続するほどお得に",
            text: "三ツ星ファームの会員ランク制度では、購入回数に応じて「1つ星」から「5つ星」までランクアップ。ランクが上がるごとに毎月最大500円の割引クーポンがもらえます。noshのnosh clubほど割引率は大きくありませんが、継続利用のモチベーションになります。",
          },
        ].map((merit) => (
          <div key={merit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {merit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{merit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {merit.text}
              </p>
            </div>
          </div>
        ))}

        {/* ===== デメリット ===== */}
        <SectionHeading id="demerits">注意すべきデメリット3つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          メリットだけでなく、実際に使って感じた「ここは正直イマイチ」というポイントも率直にお伝えします。
        </p>

        {[
          {
            num: 1,
            title: "1食あたりの単価がやや高め",
            text: "三ツ星ファームの最安値は21食プランの1食680円ですが、送料（990円）を加味すると1食あたり約727円。noshの最安値（10食プラン599円＋送料91円＝690円）と比べると1食あたり約40円高くなります。7食プランだと1食1,068円（送料込み）と1,000円超え。毎日利用するにはコスト面で負担が大きく、「週2〜3回のご褒美ごはん」として使うか、21食プランでまとめ買いするのが現実的です。",
          },
          {
            num: 2,
            title: "専用アプリがなく操作性でnoshに劣る",
            text: "noshはiOS・Android対応の高機能アプリがあり、メニュー選び・スキップ・解約まで快適に操作できます。三ツ星ファームにはアプリがなく、Webブラウザからの操作のみ。メニュー選択やスケジュール管理はできますが、アプリに慣れている方には不便に感じる場面があります。特にスマホでの操作時に画面の使い勝手でnoshとの差を感じました。",
          },
          {
            num: 3,
            title: "長期継続プランの解約に注意が必要",
            text: "三ツ星ファームの長期継続プラン（年間プラン等）は1食あたりの価格が安くなる一方、途中解約するとキャンセル料が発生する場合があります。noshは縛りなしで即解約できるため、この点ではnoshの方が気軽に始められます。三ツ星ファームを初めて利用する方は、まず通常の定期購入プランで味やボリュームを確認してから、長期プランを検討しましょう。",
          },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {demerit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {demerit.text}
              </p>
            </div>
          </div>
        ))}

        {/* ===== 料金・送料 ===== */}
        <SectionHeading id="price">
          三ツ星ファームの料金・送料を徹底解説
        </SectionHeading>

        <SubHeading>プラン別料金表</SubHeading>
        <ComparisonTable
          headers={["プラン", "料金（税込）", "1食あたり", "送料込み1食あたり"]}
          rows={[
            ["7食プラン", "6,489円", "927円", "約1,068円"],
            ["14食プラン", "11,038円", "788円", "約859円"],
            ["21食プラン", "14,288円", "680円", "約727円"],
          ]}
        />

        <SubHeading>送料</SubHeading>
        <ComparisonTable
          headers={["地域", "送料（税込）"]}
          rows={[
            ["全国一律（北海道・沖縄除く）", "990円"],
            ["北海道", "2,500円"],
            ["沖縄", "2,500円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          <strong>送料のポイント：</strong>
          三ツ星ファームの送料は全国一律990円（北海道・沖縄は2,500円）。noshの地域別送料と比較すると、関東・関西ではnosh（913円）の方がわずかに安く、東北・九州では三ツ星ファーム（990円）の方が安くなるケースもあります。初回は送料無料キャンペーンが適用されることが多いので、初回注文は実質的にかなりお得です。
        </p>

        <SubHeading>会員ランク制度の仕組み</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          三ツ星ファームでは購入回数に応じて「1つ星」から「5つ星」まで会員ランクがアップ。ランクに応じて毎月割引クーポン（最大500円）が配布されます。
        </p>
        <ComparisonTable
          headers={["ランク", "条件", "特典"]}
          rows={[
            ["1つ星", "初回購入", "限定クーポン"],
            ["2つ星", "3回以上購入", "毎月100円OFFクーポン"],
            ["3つ星", "6回以上購入", "毎月200円OFFクーポン"],
            ["4つ星", "12回以上購入", "毎月300円OFFクーポン"],
            ["5つ星", "24回以上購入", "毎月500円OFFクーポン"],
          ]}
        />

        <SubHeading>月額コストシミュレーション</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          実際に1ヶ月利用した場合のコストを利用頻度別にシミュレーションしました（本州在住・初回割引なし）。
        </p>
        <ComparisonTable
          headers={[
            "利用パターン",
            "食数/月",
            "食材費",
            "送料",
            "月額合計",
            "1食あたり",
          ]}
          rows={[
            [
              "週1〜2回（7食×1回）",
              "7食",
              "6,489円",
              "990円",
              "7,479円",
              "1,068円",
            ],
            [
              "週3〜4回（14食×1回）",
              "14食",
              "11,038円",
              "990円",
              "12,028円",
              "859円",
            ],
            [
              "毎日（21食×1回）",
              "21食",
              "14,288円",
              "990円",
              "15,278円",
              "727円",
            ],
            [
              "毎日（21食×1回＋7食×1回）",
              "28食",
              "20,777円",
              "1,980円",
              "22,757円",
              "813円",
            ],
          ]}
        />

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">
          三ツ星ファームがおすすめな人・おすすめしない人
        </SectionHeading>

        <SubHeading>三ツ星ファームがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "味のクオリティを最重視する人",
              "レストラン品質の食事を自宅で手軽に楽しみたい人",
              "高たんぱく・低糖質の食事で筋トレ・ボディメイクしたい人",
              "見た目の美しさ・食事の楽しさを大切にしたい人",
              "冷凍弁当の「水っぽさ」「べちゃっと感」が苦手な人",
              "週2〜3回の「ご褒美ごはん」として活用したい人",
              "SNS映えする食事を手軽に準備したい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>三ツ星ファームをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "コスパ最優先で1食でも安く抑えたい人 → noshがおすすめ",
              "ボリューム重視でがっつり食べたい男性",
              "アプリで手軽にすべて管理したい人 → noshがおすすめ",
              "医師から厳密な食事制限を指示されている人 → ウェルネスダイニングがおすすめ",
              "北海道・沖縄在住で送料が負担になる人",
              "毎日3食すべてを宅配弁当で済ませたい人（コスト面）",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">他社との簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          三ツ星ファームと主要な競合サービスを簡単に比較してみましょう。より詳しい比較は
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="text-accent hover:text-accent-dark underline"
          >
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
          の記事で解説しています。
        </p>

        <ComparisonTable
          headers={["項目", "三ツ星ファーム", "nosh", "ウェルネスダイニング"]}
          rows={[
            ["1食あたり最安", "680円〜", "599円〜", "648円〜"],
            ["メニュー数", "80種類以上", "60種類以上", "コース制（固定）"],
            ["味の評価", "★★★★★", "★★★★☆", "★★★☆☆"],
            ["カロリー", "350kcal以下", "200〜450kcal", "コースにより異なる"],
            ["糖質", "25g以下", "30g以下", "15g以下コースあり"],
            ["たんぱく質", "15g以上", "メニューにより異なる", "コースにより異なる"],
            ["送料（本州）", "990円", "913円〜", "770円（定期は条件付き無料）"],
            ["アプリ", "なし", "あり（高機能）", "なし"],
            ["向いている人", "味・クオリティ重視", "コスパ・自由度重視", "食事制限・高齢者"],
          ]}
        />

        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold">
                  項目
                </th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">
                  三ツ星ファーム
                </th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">
                  nosh
                </th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">
                  ウェルネスダイニング
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["総合おすすめ度", 4, 5, 4],
                ["味", 5, 4, 3],
                ["コスパ", 3, 5, 3],
                ["メニュー自由度", 4, 5, 2],
                ["健康管理", 4, 4, 5],
                ["使いやすさ", 3, 5, 3],
              ].map(([label, m, n, w], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium">
                    {label as string}
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={m as number} />
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={n as number} />
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={w as number} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ
              key={i}
              question={`Q${i + 1}. ${faq.question}`}
              answer={faq.answer}
            />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">
          まとめ：三ツ星ファームはこんな人におすすめ
        </SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">三ツ星ファームの総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度", 4],
                  ["味", 5],
                  ["コスパ", 3],
                  ["メニュー自由度", 4],
                  ["栄養バランス", 5],
                  ["使いやすさ", 3],
                  ["見た目・満足感", 5],
                ].map(([label, count], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-white/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium">
                      {label as string}
                    </td>
                    <td className="border border-warm-border px-3 py-2">
                      <StarRating count={count as number} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            三ツ星ファームは<strong>「味」「栄養バランス」「見た目の美しさ」</strong>
            の3つで他社を圧倒しています。一流シェフ監修の本格的な味わいは、冷凍弁当の概念を覆すレベル。グルメ志向の方、筋トレ・ボディメイク中の方、食事の質にこだわる方に最適です。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一方、コスパを重視するならnosh、医療レベルの食事制限が必要ならウェルネスダイニングが向いています。
          </p>
          <p className="text-sm leading-relaxed">
            まずは<strong>初回割引キャンペーン</strong>
            を活用して14食プランを試してみるのがおすすめ。味に納得できたら21食プランに切り替えてコストを抑えましょう。
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
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/wellness-dining-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ウェルネスダイニングの口コミ・評判
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
                宅配弁当・栄養食の専門ライターチーム。実際にサービスを利用し、公平な比較情報をお届けします。
              </p>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
                className="text-accent hover:text-accent-dark transition-colors"
              >
                【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
              </Link>
            </li>
            <li>
              <Link
                href="/articles/nosh-reviews/"
                className="text-accent hover:text-accent-dark transition-colors"
              >
                【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link
                href="/articles/wellness-dining-reviews/"
                className="text-accent hover:text-accent-dark transition-colors"
              >
                【2026年最新】ウェルネスダイニングの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link
                href="/articles/hitorigurashi-osusume/"
                className="text-accent hover:text-accent-dark transition-colors"
              >
                【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
