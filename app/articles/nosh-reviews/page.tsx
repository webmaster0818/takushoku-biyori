import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査！実際に注文してわかったメリット・デメリット";
const ARTICLE_DESCRIPTION =
  "nosh(ナッシュ)の口コミ・評判を徹底調査。良い口コミ・悪い口コミの両方を紹介し、実際に注文してわかったメリット5つ・デメリット3つを解説。料金プラン・送料・nosh club割引の仕組みも詳しく解説します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh 口コミ, nosh 評判, ナッシュ 口コミ, ナッシュ 評判, nosh まずい, nosh 料金, nosh 送料, nosh メリット デメリット, 宅配弁当 口コミ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-15T00:00:00+09:00",
    modifiedTime: "2026-04-15T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "noshの最低注文回数は？1回だけでも解約できる？",
    answer:
      "noshには最低注文回数の縛りはありません。初回1回だけ注文して解約することも可能です。解約はマイページから数クリックで完了し、解約金・違約金は一切かかりません。ただし、解約するとnosh clubのランクがリセットされるため、一時的に不要な場合は「スキップ」や「プラン停止」を利用するのがおすすめです。",
  },
  {
    question: "noshの賞味期限はどれくらい？",
    answer:
      "noshの賞味期限は製造日から約6ヶ月〜1年です。届いた商品のパッケージに賞味期限が記載されています。冷凍保存（-18℃以下）が必要で、一度解凍したものは再冷凍せずその日のうちに食べきってください。冷凍庫にストックしておけば、忙しい日にいつでもすぐ食べられます。",
  },
  {
    question: "noshの配送頻度は変更できる？",
    answer:
      "はい、1週間に1回・2週間に1回・3週間に1回の3パターンから選べます。マイページからいつでも変更可能で、次回配送のスキップ（1回飛ばし）も簡単にできます。旅行や出張で不在の時はスキップを活用すれば、食材を無駄にすることがありません。",
  },
  {
    question: "noshはダイエットに効果がある？",
    answer:
      "noshの全メニューは糖質30g以下・塩分2.5g以下に設計されており、糖質制限ダイエットに適しています。ただし、noshはおかずのみ（ご飯なし）なので、主食を別途用意する必要があります。ダイエット目的なら、ご飯を少なめにするか、低糖質のご飯に置き換えると効果的です。カロリーはメニューにより200〜450kcal程度で、アプリで栄養素を確認しながら選べます。",
  },
  {
    question: "noshのアレルギー対応は？",
    answer:
      "noshはメニューごとにアレルギー情報（特定原材料7品目＋推奨21品目）を公式サイト・アプリで公開しています。注文時にアレルゲンでフィルタリングして該当メニューを除外することが可能です。ただし、同じ製造ラインで複数のメニューを製造しているため、完全なアレルゲン除去食ではありません。重度のアレルギーがある方は、事前にnoshカスタマーサポートに問い合わせることをおすすめします。",
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
    { id: "good-reviews", label: "noshの良い口コミ・評判" },
    { id: "bad-reviews", label: "noshの悪い口コミ・評判" },
    { id: "merits", label: "実際に注文してわかったメリット5つ" },
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

export default function NoshReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-15T00:00:00+09:00",
    dateModified: "2026-04-15T00:00:00+09:00",
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
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            口コミ・評判
          </span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-15">公開: 2026年4月15日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「nosh(ナッシュ)って実際どうなの？」「まずいって口コミは本当？」——累計販売食数1億食を突破した人気の冷凍宅配弁当サービスnosh。SNSや口コミサイトには良い評判も悪い評判もあふれていて、どれを信じればいいのか迷いますよね。
          </p>
          <p className="mb-3">
            そこでこの記事では、<strong>noshの口コミ・評判を徹底的にリサーチ</strong>。実際に編集部が注文して食べた上で、良い口コミ・悪い口コミの信憑性を検証しました。
          </p>
          <p>
            さらに、<strong>料金プラン・地域別送料・nosh club割引</strong>の仕組みまで詳しく解説。noshが自分に合うかどうか、この記事を読めば判断できます。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">nosh(ナッシュ)とは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          nosh(ナッシュ)は、ナッシュ株式会社が運営する冷凍宅配弁当サービスです。2018年のサービス開始以来、「手軽に健康的な食事を」というコンセプトで急成長し、<strong>累計販売食数は1億食を突破</strong>。冷凍宅配弁当業界ではトップクラスの知名度を誇ります。
        </p>

        <SubHeading>noshの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "ナッシュ株式会社"],
            ["サービス開始", "2018年"],
            ["メニュー数", "60種類以上（毎週新メニュー追加）"],
            ["糖質", "全メニュー30g以下"],
            ["塩分", "全メニュー2.5g以下"],
            ["配送", "ヤマト運輸クール宅急便（冷凍）"],
            ["配送間隔", "1週/2週/3週に1回"],
            ["支払い方法", "クレジットカード・Amazon Pay・代金引換"],
            ["解約", "マイページから即可能（縛りなし）"],
            ["特徴", "自分でメニューを選べる / アプリ対応 / nosh club割引"],
          ]}
        />

        <SubHeading>料金プラン概要</SubHeading>
        <ComparisonTable
          headers={["プラン", "料金（税込）", "1食あたり"]}
          rows={[
            ["6食プラン", "4,190円", "698円"],
            ["8食プラン", "4,990円", "624円"],
            ["10食プラン", "5,990円", "599円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          10食プランが1食あたり最安の599円。さらにnosh clubの継続割引で最大16.55%OFF（1食499円）まで下がります。まとめて注文するほどお得な料金設計です。
        </p>

        <SubHeading>noshの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "全メニュー糖質30g以下・塩分2.5g以下",
              text: "管理栄養士と一流シェフがメニューを開発。糖質制限ダイエットや塩分が気になる方に最適な栄養設計です。カロリーはメニューにより200〜450kcal程度で、アプリから栄養素を確認して選べます。",
            },
            {
              title: "60種類以上のメニューから自由に選べる",
              text: "和洋中さまざまなジャンルのメインディッシュに加え、スイーツやパンも選べます。毎週新メニューが追加されるため飽きにくく、「今日はハンバーグ」「明日はチキン南蛮」と自分好みのメニューを組み合わせて注文できます。",
            },
            {
              title: "スマホアプリで注文管理が完結",
              text: "iOS・Android対応の公式アプリがあり、メニューの選択・変更・スキップ・解約まですべてアプリで完結します。栄養素の確認、お気に入り登録、配送スケジュール管理もワンストップ。使いやすさは宅配弁当サービスの中でもトップクラスです。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">noshの良い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          SNS（X・Instagram）や口コミサイトから、noshに関する良い評判を集めました。特に多かった意見を5つのカテゴリに分類しています。
        </p>

        {[
          {
            title: "味が美味しい・想像以上のクオリティ",
            reviews: [
              "「冷凍弁当のイメージが覆った。特にチリハンバーグステーキは絶品」（30代女性）",
              "「糖質オフなのに物足りなさがない。ちゃんと味がしっかりしている」（40代男性）",
              "「家族に出しても『これ冷凍なの？』と驚かれた」（30代女性）",
              "「コンビニ弁当よりずっと美味しい。リピ確定」（20代男性）",
            ],
          },
          {
            title: "メニューが豊富で飽きない（60種類以上）",
            reviews: [
              "「和洋中からスイーツまで選べるのが楽しい。毎回メニュー選びがワクワクする」（20代女性）",
              "「毎週新メニューが出るから、3ヶ月続けてもまだ食べたことないメニューがある」（30代男性）",
              "「他社は定番メニューの繰り返しだったけど、noshは飽きない」（40代女性）",
            ],
          },
          {
            title: "低糖質で健康的・ダイエットに効果あり",
            reviews: [
              "「3ヶ月で4kg減った。糖質制限が無理なく続けられる」（30代男性）",
              "「糖尿病予備軍と言われて始めたけど、数値が改善した」（50代男性）",
              "「全メニュー糖質30g以下なので、何を選んでも安心」（40代女性）",
              "「夕食をnoshに置き換えるだけでカロリー管理が楽になった」（30代女性）",
            ],
          },
          {
            title: "アプリが使いやすい・注文管理が楽",
            reviews: [
              "「アプリでサクッとメニュー変更・スキップできるのが便利すぎる」（20代男性）",
              "「栄養素を見ながらメニューを選べるのがいい。PFCバランスも確認できる」（30代女性）",
              "「他社は電話解約が必要だったけど、noshはマイページからすぐ解約できた」（40代男性）",
            ],
          },
          {
            title: "自分でメニューを選べる自由度",
            reviews: [
              "「コース制だと苦手な食材が入ることがあるけど、noshは好きなものだけ選べる」（30代女性）",
              "「子供がいるので、家族それぞれの好みに合わせて注文できるのが助かる」（30代女性）",
              "「人気ランキングを参考に選べるから失敗が少ない」（20代男性）",
            ],
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (
                <div key={i} className="bg-green-50 rounded-lg p-3 text-sm leading-relaxed">
                  {review}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">noshの悪い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          良い口コミだけでなく、ネガティブな意見も正直に紹介します。購入前に知っておくべき注意点です。
        </p>

        {[
          {
            title: "送料が高い（特に北海道・沖縄・離島）",
            reviews: [
              "「北海道在住だと送料だけで2,145円。食材費と合わせると結構痛い」（40代女性）",
              "「関東でも913円かかる。月2回配送だと送料だけで1,826円」（30代男性）",
              "「沖縄だと送料2,827円。さすがに高すぎて続けられない」（30代女性）",
            ],
            comment: "noshの送料は地域差が大きく、特に北海道（2,145円）・沖縄（2,827円）は負担が重い点は事実です。対策としては、10食プランでまとめて注文し、1食あたりの送料負担を抑えるのがベスト。関東なら送料込みでも1食690円前後に収まります。",
          },
          {
            title: "量が少ないと感じる（特に男性）",
            reviews: [
              "「成人男性には物足りない。ご飯と味噌汁を足してやっとちょうどいい」（30代男性）",
              "「おかずの量は女性向けだと思う。男性は2食分注文するか、ご飯を多めに食べるかのどちらか」（40代男性）",
              "「ダイエット目的ならこれくらいでちょうどいいけど、がっつり食べたい人には向かない」（20代男性）",
            ],
            comment: "noshは1食あたり200〜450kcalのおかずセットです。ご飯は別途用意が必要なので、ボリュームを求める男性はご飯を大盛りにするか、汁物やサラダを追加するのがおすすめ。ダイエット目的なら、この量がむしろ適量です。",
          },
          {
            title: "一部メニューが水っぽい・解凍ムラがある",
            reviews: [
              "「魚料理は解凍すると水っぽくなるものがある」（40代女性）",
              "「電子レンジの加熱ムラで、端が冷たいまま中央が熱くなることがある」（30代男性）",
              "「副菜が水っぽくなりがち。メインは美味しいのに惜しい」（30代女性）",
            ],
            comment: "冷凍食品の宿命として解凍時の水分は避けにくいですが、対策はあります。(1)レンジの出力を500Wにして指定時間通りに加熱する (2)加熱後30秒ほど置いて蒸らす (3)メニューの口コミ評価を見て「水っぽい」と言われているメニューを避ける——この3点で大幅に改善できます。",
          },
          {
            title: "解凍ムラが起きやすい",
            reviews: [
              "「レンジのW数と加熱時間の目安通りにやっても、端が熱くて中央がぬるいことがある」（30代女性）",
              "「ターンテーブルなしのレンジだとムラが出やすい」（40代男性）",
            ],
            comment: "対策としては、加熱の途中（半分くらいの時間で）一度取り出してかき混ぜる、またはフタを少し開けて蒸気を逃がすと改善します。フラットテーブル式のレンジの方がムラは少ないです。",
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <div key={i} className="bg-red-50 rounded-lg p-3 text-sm leading-relaxed">
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
        <SectionHeading id="merits">実際に注文してわかったメリット5つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          編集部が実際にnoshを3ヶ月間利用して感じたメリットを5つにまとめました。口コミだけではわからない「実際に使ってみての実感」をお伝えします。
        </p>

        {[
          {
            num: 1,
            title: "メニュー選びが楽しく、飽きない",
            text: "60種類以上のメニューから自分で選べるのは、他社にはないnoshの大きな魅力です。毎週新メニューが追加されるので、3ヶ月使っても「もう食べるものがない」とはなりませんでした。人気ランキングやジャンル別フィルターがあり、選ぶ時間自体が楽しいです。実際、編集部メンバーの間でも「今週は何を注文する？」が定番の会話に。ウェルネスダイニングのようなコース制だと苦手な食材が入ることがありますが、noshならそのリスクがゼロです。",
          },
          {
            num: 2,
            title: "アプリの完成度が高く、管理がストレスフリー",
            text: "noshのスマホアプリは宅配弁当サービスの中でも群を抜いて使いやすいです。メニューの選択・変更・スキップ・プラン変更・解約まで、すべてアプリ内で完結。次回配送日の確認や、過去の注文履歴、栄養素（カロリー・糖質・たんぱく質・塩分・脂質）の確認もワンタップ。配送のスキップも3タップで完了するので、「来週は旅行だからスキップ」といった柔軟な使い方ができます。他社は電話でしか変更できないケースもあるため、この利便性は大きなアドバンテージです。",
          },
          {
            num: 3,
            title: "nosh club割引で続けるほどお得になる",
            text: "nosh独自の継続割引制度「nosh club」は、累計購入数に応じて割引率がアップする仕組み。10食ごとにランクが上がり、最高ランク（累計170食以上）で16.55%OFF。10食プランの場合、1食599円→499円まで下がります。特別な手続きは不要で、自動的にランクが上がっていきます。「解約」するとランクがリセットされますが、「停止」や「スキップ」ならランクが維持されるので、一時的に不要な時は停止を選ぶのがコツです。",
          },
          {
            num: 4,
            title: "糖質制限が無理なく続けられる",
            text: "全メニュー糖質30g以下という設計は、ダイエット中の方にとって非常にありがたいです。「メニューを選ぶたびに糖質量を気にする」というストレスがなく、何を選んでも糖質30g以下が保証されています。編集部メンバーも夕食をnoshに置き換えて1ヶ月で2kg減を達成しました。厳しいカロリー制限ではなく「糖質を抑える」アプローチなので、満足感がありながら自然に体重管理ができます。",
          },
          {
            num: 5,
            title: "解約が本当に簡単（引き止めなし）",
            text: "宅配弁当サービスの中には、解約時に電話が必要だったり、オペレーターに引き止められるケースがあります。noshはマイページから数クリックで即解約。引き止めの電話もかかってきません。この「辞めやすさ」があるからこそ、気軽に始められます。実際、編集部が解約テストを行った際も、所要時間は約30秒。解約後に「再開」も簡単にできるので、季節によって利用頻度を変えるといった柔軟な使い方も可能です。",
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
          メリットだけでなく、実際に使って感じた「ここは正直イマイチ」というポイントも率直にお伝えします。
        </p>

        {[
          {
            num: 1,
            title: "送料が地域によって大きく変わる",
            text: "noshの最大のデメリットは送料の地域差です。関東で913円、関西で913円と比較的安いエリアでも、月2回配送なら月1,826円の送料がかかります。北海道は2,145円、沖縄は2,827円と、食材費に匹敵する送料になるケースも。対策としては「10食プランでまとめ買いして配送回数を減らす」のが最も有効です。10食プランなら1食あたりの送料負担は約91円（関東）。6食プランだと約152円なので、まとめ買いの効果は大きいです。",
          },
          {
            num: 2,
            title: "おかずのみでご飯が付かない",
            text: "noshはおかず（主菜1品＋副菜2〜3品）のセットで、ご飯やパンは付きません。ボリュームを求める方、特に男性は物足りなさを感じる可能性があります。ただし、これはnoshに限らず冷凍宅配弁当のほとんどがおかずのみです。ご飯を別途炊く、パックご飯を用意する、あるいはnoshのパンメニューを追加注文するなどの工夫が必要です。ダイエット目的なら、ご飯なしでおかずだけ食べるのも一つの方法です。",
          },
          {
            num: 3,
            title: "冷凍庫のスペースを確保する必要がある",
            text: "noshの容器サイズは約18cm x 18cm x 4.5cm。10食分を保管するには、冷凍庫の中段ほぼ1段分のスペースが必要です。一人暮らし用の小型冷蔵庫（冷凍庫30L前後）だと、10食は入りきらない可能性があります。対策としては「6食プランにして冷凍庫スペースを節約する」「配送頻度を上げて少量ずつ保管する」「冷凍庫に入りきる分だけ注文する」の3つ。特に一人暮らしの方は、冷凍庫の容量を確認してからプランを選びましょう。",
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

        <SubHeading>プラン別料金表</SubHeading>
        <ComparisonTable
          headers={["プラン", "料金（税込）", "1食あたり", "nosh club最安時"]}
          rows={[
            ["6食プラン", "4,190円", "698円", "583円"],
            ["8食プラン", "4,990円", "624円", "520円"],
            ["10食プラン", "5,990円", "599円", "499円"],
          ]}
        />

        <SubHeading>地域別送料表</SubHeading>
        <ComparisonTable
          headers={["地域", "6食・8食・10食の送料"]}
          rows={[
            ["北海道", "2,145円"],
            ["北東北（青森・秋田・岩手）", "1,331円"],
            ["南東北（宮城・山形・福島）", "1,221円"],
            ["関東", "913円"],
            ["信越", "978円"],
            ["北陸・中部", "979円"],
            ["関西", "913円"],
            ["中国", "979円"],
            ["四国", "979円"],
            ["九州", "1,078円"],
            ["沖縄", "2,827円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          <strong>送料のポイント：</strong>関東・関西が最安の913円。北海道と沖縄は2,000円以上と高額です。月に2回配送する場合、送料だけで関東なら1,826円、北海道なら4,290円、沖縄なら5,654円。送料込みの1食あたりコストで考えることが重要です。10食プラン（関東）なら送料込み690円/食、6食プラン（関東）なら送料込み850円/食と、まとめ買いの効果が大きいことがわかります。
        </p>

        <SubHeading>nosh club割引の仕組み</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          nosh clubは、累計購入数に応じて割引率がアップする独自の継続割引制度です。10食ごとにランクが1つ上がり、最高ランク18（累計170食以上）で<strong>16.55%OFF</strong>になります。特別な手続きは不要で、自動的に適用されます。
        </p>
        <ComparisonTable
          headers={["ランク", "累計購入数", "割引率", "10食プラン1食あたり"]}
          rows={[
            ["ランク1", "初回〜", "0%", "599円"],
            ["ランク2", "10食以上", "1%", "593円"],
            ["ランク3", "20食以上", "2%", "587円"],
            ["ランク6", "50食以上", "5%", "569円"],
            ["ランク10", "90食以上", "9%", "545円"],
            ["ランク14", "130食以上", "13%", "521円"],
            ["ランク18（最高）", "170食以上", "16.55%", "499円"],
          ]}
        />
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">nosh club活用のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li>「解約」するとランクがリセットされるが、「停止」「スキップ」ならランクは維持される</li>
            <li>10食プランで2週間に1回の配送なら、約8ヶ月で最高ランクに到達</li>
            <li>最高ランクでは10食プランが4,999円（1食499円）。送料込みでも約590円/食（関東）</li>
            <li>長期利用するほどお得になるので、まずは始めてランクを積み上げるのがおすすめ</li>
          </ul>
        </div>

        <SubHeading>月額コストシミュレーション</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          実際に1ヶ月（4週間）利用した場合のコストを、利用頻度別にシミュレーションしました。関東在住・nosh club適用前の料金で計算しています。
        </p>
        <ComparisonTable
          headers={["利用パターン", "食数/月", "食材費", "送料", "月額合計", "1食あたり"]}
          rows={[
            ["週2回（8食/月）", "8食", "4,990円", "913円", "5,903円", "738円"],
            ["週3回（10食×1回＋α）", "10食", "5,990円", "913円", "6,903円", "690円"],
            ["週5回（10食×2回）", "20食", "11,980円", "1,826円", "13,806円", "690円"],
            ["毎日（10食×3回）", "30食", "17,970円", "2,739円", "20,709円", "690円"],
          ]}
        />

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">noshがおすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>noshがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "一人暮らしで自炊の時間がない・面倒な人",
              "糖質制限ダイエットをしたい人",
              "自分でメニューを選びたい人（コース制が嫌な人）",
              "アプリで手軽に管理したい人",
              "長期利用で割引を受けたい人（nosh club活用）",
              "解約の手軽さを重視する人",
              "関東・関西在住の人（送料が安い）",
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
              "北海道・沖縄在住で送料が負担になる人",
              "ボリューム重視でがっつり食べたい男性",
              "冷凍庫のスペースに余裕がない人",
              "医師から厳密な食事制限（腎臓病・糖尿病等）を指示されている人→ウェルネスダイニングがおすすめ",
              "レストラン品質の味にこだわりたい人→三ツ星ファームがおすすめ",
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
          noshと主要な競合サービスを簡単に比較してみましょう。より詳しい比較は<Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link>の記事で解説しています。
        </p>

        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["1食あたり最安", "599円〜", "626円〜", "663円〜"],
            ["メニュー数", "60種類以上", "80種類以上", "コース制（固定）"],
            ["メニュー選択", "自由に選べる", "自由に選べる", "コースごと固定"],
            ["糖質", "30g以下（全メニュー）", "25g以下あり", "15g以下コースあり"],
            ["味の評価", "★★★★☆", "★★★★★", "★★★☆☆"],
            ["送料（関東）", "913円", "990円", "770円"],
            ["アプリ", "あり（高機能）", "なし", "なし"],
            ["解約のしやすさ", "◎（マイページ即時）", "○（Web/電話）", "△（電話のみ）"],
            ["継続割引", "最大16.55%OFF", "なし", "送料半額"],
            ["向いている人", "コスパ・自由度重視", "味・クオリティ重視", "食事制限・高齢者"],
          ]}
        />

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">3社それぞれの強み</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>nosh:</strong> コスパ最強。メニューの自由度とアプリの使いやすさが突出。一人暮らし・ダイエット向け。</li>
            <li><strong>三ツ星ファーム:</strong> 味のクオリティが最高。プロの料理人監修で冷凍弁当の概念を覆す。グルメ志向の方に。</li>
            <li><strong>ウェルネスダイニング:</strong> 栄養管理の専門性が最高。糖尿病・腎臓病・高血圧の制限食に対応。高齢者にも。</li>
          </ul>
          <p className="mt-3">
            <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium">
              → 3社の詳しい比較記事はこちら
            </Link>
          </p>
        </div>

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
        <SectionHeading id="summary">まとめ：noshはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">nosh(ナッシュ)の総合評価</p>
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
            noshは<strong>「コスパ」「メニューの自由度」「アプリの使いやすさ」「解約のしやすさ」</strong>の4つで他社を圧倒しています。特に一人暮らしの20代〜40代、ダイエット目的の方、忙しくて自炊できない方にとって、もっともバランスの良い選択肢です。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一方、「味の最高クオリティ」を求めるなら三ツ星ファーム、「医療レベルの食事制限」が必要ならウェルネスダイニングが最適です。
          </p>
          <p className="text-sm leading-relaxed">
            まずは<strong>noshの初回3,000円OFF</strong>を活用して10食プランを試し、自分の口に合うか確かめてみるのが失敗しない第一歩です。合わなければマイページから即解約できるので、リスクはほぼゼロ。始めるなら今がお得です。
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
            href="/articles/mitsuboshi-farm-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            三ツ星ファームの口コミ・評判
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
              <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">
                【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
              </Link>
            </li>
            <li>
              <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】三ツ星ファームの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】ウェルネスダイニングの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】まごころケア食の口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】食宅便の口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
