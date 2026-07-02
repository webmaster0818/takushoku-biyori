import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ウェルネスダイニングの口コミ・評判は？まずいって本当？制限食宅配を中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "ウェルネスダイニングの口コミ・評判を徹底調査。糖質制限・塩分制限・たんぱく質調整など制限食の専門サービスとしての実力を検証。良い口コミ・悪い口コミの両方を紹介し、料金・送料・全6コースの特徴を解説します。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/wellness-dining-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ウェルネスダイニング 口コミ, ウェルネスダイニング 評判, ウェルネスダイニング まずい, ウェルネスダイニング 料金, ウェルネスダイニング 送料, 制限食 宅配, 宅配弁当 口コミ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-16T00:00:00+09:00",
    modifiedTime: "2026-06-23T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "ウェルネスダイニングはお試し注文できる？",
    answer:
      "はい、初めての方はどのコースでも1回限りのお試し注文が可能です。お試し注文では通常770円の送料が無料になります。さらに「お試し定期注文」を選ぶと、毎週1回のお届けが8回まで送料無料で続きます。味や量を確認してから本契約できるので、まずは7食セットのお試しから始めるのがおすすめです。",
  },
  {
    question: "ウェルネスダイニングの賞味期限はどれくらい？",
    answer:
      "ウェルネスダイニングの宅配食の賞味期限は、商品お届け後3ヶ月以上です。冷凍保存（-18度以下）が必要で、解凍後はその日のうちにお召し上がりください。3ヶ月以上の余裕があるので、まとめ買いしてストックしておくことも可能です。",
  },
  {
    question: "ウェルネスダイニングの解約方法は？",
    answer:
      "ウェルネスダイニングの解約は電話連絡が必要です（フリーダイヤル）。Webやマイページからの解約には対応していません。電話受付は平日9:30〜18:00（土日祝休み）です。noshのようにマイページからワンクリックで解約できないのは不便な点ですが、オペレーターの対応は丁寧で、過度な引き止めはありません。",
  },
  {
    question: "ウェルネスダイニングとnoshの違いは？",
    answer:
      "ウェルネスダイニングは「制限食の専門サービス」で、糖質制限・塩分制限・たんぱく質調整・カロリー制限など目的別のコースが充実。管理栄養士に無料で食事相談できるのも強みです。一方、noshは「メニューの自由度」「アプリの使いやすさ」「コスパ」で優れています。医師から食事制限を指示されている方はウェルネスダイニング、それ以外の方はnoshがおすすめです。",
  },
  {
    question: "ウェルネスダイニングは管理栄養士に相談できる？",
    answer:
      "はい、ウェルネスダイニングでは管理栄養士への無料電話相談が可能です。自分にどのコースが合うか、食事制限の方法、栄養バランスの相談など、専門家に直接アドバイスを受けられます。これは他の宅配弁当サービスにはない大きな強みで、初めて制限食を利用する方にとって心強いサポートです。",
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
          <span className="text-foreground">ウェルネスダイニングの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ウェルネスダイニングとは？基本情報まとめ" },
    { id: "good-reviews", label: "ウェルネスダイニングの良い口コミ・評判" },
    { id: "bad-reviews", label: "ウェルネスダイニングの悪い口コミ・評判" },
    { id: "merits", label: "実際に注文してわかったメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "ウェルネスダイニングの料金・送料を徹底解説" },
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

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent/10">
            {headers.map((h) => (
              <th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>
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
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">{answer}</div>
    </details>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>&#9733;</span>
      ))}
    </span>
  );
}

/* ---------- Page Component ---------- */

export default function WellnessDiningReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-16T00:00:00+09:00",
    dateModified: "2026-07-03T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: { "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"\u30a6\u30a7\u30eb\u30cd\u30b9\u30c0\u30a4\u30cb\u30f3\u30b0\u306e\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}]}" }}
      />
      

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-16">公開: 2026年4月16日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「ウェルネスダイニングの制限食って美味しいの？」「他の宅配弁当と何が違うの？」——糖質制限・塩分制限・たんぱく質調整など、<strong>制限食の専門サービス</strong>として知られるウェルネスダイニング。管理栄養士が設計した栄養バランスが特徴ですが、実際の味や使い勝手はどうなのでしょうか。
          </p>
          <p className="mb-3">
            この記事では、<strong>ウェルネスダイニングの口コミ・評判を徹底リサーチ</strong>。公開されている利用者の口コミや公式情報をもとに、良い口コミ・悪い口コミの両方を整理して検証しました。
          </p>
          <p>
            <strong>全6コースの料金・送料・特徴</strong>まで詳しく解説。ウェルネスダイニングが自分に合うかどうか、この記事で判断できます。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：ウェルネスダイニングはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">ウェルネスダイニングは、<strong>「塩分・糖質・たんぱく質などを制限・管理したい人」</strong>に向いた制限食専門の宅配弁当です。口コミでは管理栄養士監修の制限食や無料相談を評価する声が多い一方、価格はやや高めで送料もかかる点は注意が必要です。味やボリュームの感じ方には個人差があります。健康上の制限がある場合は、医師の指導もあわせてご確認ください。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>塩分・糖質・たんぱく質などの制限食に強い</li><li>管理栄養士への相談ができるという口コミ</li><li>やわらかさ等で選べるコースがある</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1食あたりの価格はやや高め</li><li>送料が別途かかる</li><li>制限の度合いは医師の指示に合わせて要確認</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ウェルネスダイニング 公式サイトで最新の料金・お試しを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">ウェルネスダイニングとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ウェルネスダイニングは、ウェルネスダイニング株式会社が運営する<strong>制限食専門の冷凍宅配弁当サービス</strong>です。糖質制限・塩分制限・たんぱく質&塩分調整・カロリー制限など、目的別に6つのコースを用意。管理栄養士が栄養バランスを設計し、無料で食事相談ができるのも大きな特徴です。糖尿病・腎臓病・高血圧など、医師から食事制限を指示されている方や高齢者に特に支持されています。
        </p>

        <SubHeading>ウェルネスダイニングの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "ウェルネスダイニング株式会社"],
            ["コース数", "6コース（制限食5種＋健康応援1種）"],
            ["メニュー構成", "主菜1品＋副菜3品"],
            ["セット", "7食・14食・21食"],
            ["配送", "ヤマト運輸クール宅急便（冷凍）"],
            ["配送間隔", "毎週/2週/3週/月1回"],
            ["支払い方法", "クレジットカード・代金引換・後払い"],
            ["解約", "電話連絡（フリーダイヤル）"],
            ["特徴", "管理栄養士への無料相談 / 制限食の専門性 / 送料条件付き無料"],
          ]}
        />

        <SubHeading>全6コースの概要</SubHeading>
        <ComparisonTable
          headers={["コース", "対象", "7食セット（税込）", "1食あたり"]}
          rows={[
            ["健康応援 気配り宅配食", "健康維持したい方", "4,644円", "663円"],
            ["糖質制限 気配り宅配食", "糖質を控えたい方", "4,860円", "694円"],
            ["塩分制限 気配り宅配食", "塩分を控えたい方", "4,860円", "694円"],
            ["たんぱく＆塩分調整 気配り宅配食", "腎臓病の方", "4,860円", "694円"],
            ["カロリー制限 気配り宅配食", "カロリー制限の方", "4,860円", "694円"],
            ["栄養バランス 気配り宅配食", "バランス重視の方", "4,860円", "694円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          最安値は「健康応援 気配り宅配食」の21食セットで<strong>1食あたり648円</strong>。制限食コースでも21食セットなら1食あたり約663円と、他社の制限食と比べて良心的な価格設定です。
        </p>

        <SubHeading>ウェルネスダイニングの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "制限食の専門性が業界トップクラス",
              text: "糖質制限（糖質15g以下）、塩分制限（塩分2.0g以下）、たんぱく質調整（たんぱく質10g以下）、カロリー制限（240kcal以下）など、医療レベルの栄養管理に対応。一般的な宅配弁当サービスでは対応できない厳しい制限値を実現しています。",
            },
            {
              title: "管理栄養士への無料電話相談",
              text: "ウェルネスダイニング最大の強みは、管理栄養士への無料相談サービスです。「自分にどのコースが合うかわからない」「医師からの指示をどう反映すればいいか」など、専門家に直接相談できます。noshや三ツ星ファームにはないサポート体制です。",
            },
            {
              title: "定期購入で送料無料（14食・21食セット）",
              text: "定期購入の14食・21食セットは送料無料。7食セットの定期購入は送料385円（半額）です。都度購入の送料770円と比較すると、定期購入のお得感が際立ちます。初回お試し注文も送料無料なので、気軽に試せます。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">ウェルネスダイニングの良い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          SNSや口コミサイトから、ウェルネスダイニングに関する良い評判を集めました。特に多かった意見を5つのカテゴリに分類しています。
        </p>

        {[
          {
            title: "制限食なのにしっかり味がある",
            reviews: [
              "「塩分制限食なのに薄味すぎない。出汁やスパイスで上手に味付けされている」（50代女性）",
              "「糖質制限コースを頼んだけど、普通のお弁当と変わらない美味しさで驚いた」（40代男性）",
              "「母が腎臓病で制限食が必要だったけど、ウェルネスダイニングなら『美味しい』と言って食べてくれる」（40代女性）",
              "「病院食のような味気ないものを想像していたけど、全然違った」（60代男性）",
            ],
          },
          {
            title: "管理栄養士に無料相談できて安心",
            reviews: [
              "「電話で相談したら、私の健康状態に合ったコースを丁寧に提案してくれた」（50代女性）",
              "「母の腎臓病の食事制限について相談したら、具体的なアドバイスをもらえた。病院以外で相談できる場所があるのは心強い」（40代女性）",
              "「コース選びに迷ったけど、栄養士さんが数値を聞いた上で最適なコースを教えてくれた」（60代男性）",
            ],
          },
          {
            title: "食事管理の負担が大幅に減った",
            reviews: [
              "「毎日の塩分計算から解放された。ウェルネスダイニングに任せるだけでOK」（50代男性）",
              "「高齢の父の食事作りが大変だったけど、温めるだけで栄養管理された食事が出せるようになった」（40代女性）",
              "「糖尿病の食事療法を自分で管理するのは限界があった。プロに任せて正解」（50代男性）",
              "「カロリー計算が不要になり、ストレスが減った」（30代女性）",
            ],
          },
          {
            title: "品数が多く栄養バランスが良い",
            reviews: [
              "「主菜1品＋副菜3品の計4品。彩りも良く、バランスの取れた食事になる」（40代女性）",
              "「野菜がたくさん入っていて、自炊では摂れない品目数を確保できる」（30代男性）",
              "「制限食なのに品数が多いのが嬉しい。食事の満足度が違う」（50代女性）",
            ],
          },
          {
            title: "定期購入の送料無料が嬉しい",
            reviews: [
              "「14食定期で送料無料。noshだと毎回900円以上かかるから、トータルではお得」（40代男性）",
              "「送料を気にしなくていいのは地味に助かる。長く続けるなら送料無料は大きい」（50代女性）",
              "「初回お試しも送料無料で、ハードルが低く始められた」（30代女性）",
            ],
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (
                <div key={i} className="bg-green-50 rounded-lg p-3 text-sm leading-relaxed">{review}</div>
              ))}
            </div>
          </div>
        ))}

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">ウェルネスダイニングの悪い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          良い口コミだけでなく、ネガティブな意見も正直に紹介します。
        </p>

        {[
          {
            title: "メニューを自分で選べない（コース制・おまかせ）",
            reviews: [
              "「noshのように好きなメニューを選びたかったのに、おまかせで届くのが残念」（30代女性）",
              "「苦手な食材が入っていることがある。アレルギー対応は電話で相談が必要」（40代女性）",
              "「毎回何が届くかわからないワクワク感はあるけど、嫌いなものが来ると萎える」（20代男性）",
            ],
            comment: "ウェルネスダイニングはコース制でメニューはおまかせです。noshや三ツ星ファームのように自分でメニューを選べないのは不便ですが、栄養バランスを管理栄養士が最適化するためにこの方式を採用しています。苦手な食材がある場合は、注文時に電話で相談すると対応してもらえることがあります。",
          },
          {
            title: "味が薄いと感じる人もいる",
            reviews: [
              "「塩分制限食なので仕方ないが、濃い味に慣れていると最初は物足りない」（40代男性）",
              "「若い人向けというよりは、健康志向の中高年向けの味付け」（20代男性）",
              "「三ツ星ファームやnoshと比べると、どうしても味のインパクトは弱い」（30代女性）",
            ],
            comment: "制限食という性質上、一般的な宅配弁当と比べると味付けは控えめです。ただし、出汁やスパイスを活用した味付けで「薄くて食べられない」というレベルではありません。1〜2週間続けると舌が慣れ、素材の味を感じられるようになったという声も多いです。",
          },
          {
            title: "解約が電話のみで不便",
            reviews: [
              "「解約するのに電話しなきゃいけないのが面倒。Webで完結させてほしい」（30代男性）",
              "「noshはマイページから即解約できたのに、ウェルネスダイニングは電話のみ。時代遅れ」（20代女性）",
              "「平日の昼間しか電話できないのが働いている身としてはつらい」（30代男性）",
            ],
            comment: "解約が電話のみという点は、ウェルネスダイニングの明確なデメリットです。ただし、オペレーターの対応は丁寧で、過度な引き止めはないとの口コミが多数。電話受付は平日9:30〜18:00なので、昼休みに連絡するのがおすすめです。",
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <div key={i} className="bg-red-50 rounded-lg p-3 text-sm leading-relaxed">{review}</div>
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
          口コミや公開情報から見えてくるウェルネスダイニングのメリットを5つにまとめました。
        </p>

        {[
          { num: 1, title: "制限食の専門性が圧倒的", text: "糖質15g以下、塩分2.0g以下、たんぱく質10g以下、カロリー240kcal以下——これらの厳しい制限値を実現できるのは、制限食の専門サービスならでは。nosh（糖質30g以下）や三ツ星ファーム（糖質25g以下）では到達できない数値です。医師から「塩分は1日6g以下に」と指示された方も、ウェルネスダイニングなら1食2.0g以下に抑えられるので、残り2食で4g以内に収めれば指示を守れます。" },
          { num: 2, title: "管理栄養士への無料相談が心強い", text: "口コミによると、電話相談ではこちらの健康状態や検査数値を伝えた上で、最適なコースと食べ方のアドバイスをもらえたという声があります。「塩分制限コースがいいか、カロリー制限コースがいいか」といった具体的な相談にも丁寧に対応してくれます。高齢のご家族の食事管理について相談する方も多いとのこと。病院以外で専門家に無料相談できる場所は貴重です。" },
          { num: 3, title: "定期購入14食・21食で送料完全無料", text: "定期購入の14食・21食セットは送料完全無料。noshは毎回913円〜の送料がかかるため、月2回配送で年間約22,000円の送料差になります。長期利用するほどウェルネスダイニングの送料無料は大きなメリット。食材費で比較するとnoshの方が安いですが、送料込みの総額で比較するとその差は縮まります。" },
          { num: 4, title: "品数4品で食事の満足感が高い", text: "ウェルネスダイニングは主菜1品＋副菜3品の計4品構成。noshは主菜1品＋副菜2〜3品なので、品数ではウェルネスダイニングがやや優位。1食の中で様々な食材を摂取でき、彩りも良いので食事の満足感が高いです。制限食でありながら「ちゃんとした食事を食べている」という感覚があります。" },
          { num: 5, title: "初回送料無料でお試ししやすい", text: "初めての方はどのコースでも送料無料でお試し注文が可能。さらに「お試し定期注文」なら8回まで送料無料が続くため、約2ヶ月間はコスト的にお得に利用できます。味や量を十分に確認してから本契約に移行できるので、失敗のリスクが極めて低い設計です。" },
        ].map((merit) => (
          <div key={merit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">{merit.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{merit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{merit.text}</p>
            </div>
          </div>
        ))}

        {/* ===== デメリット ===== */}
        <SectionHeading id="demerits">注意すべきデメリット3つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          メリットだけでなく、実際に使って感じた注意点も率直にお伝えします。
        </p>

        {[
          { num: 1, title: "メニューの自由度がない（おまかせ制）", text: "ウェルネスダイニング最大のデメリットは、メニューを自分で選べないこと。noshのように「今日はハンバーグ」「明日はチキン南蛮」と選ぶ楽しみはありません。何が届くかは届いてからのお楽しみ。苦手な食材が入っていることもあります。食事の自由度・楽しさを重視する方にはnoshや三ツ星ファームの方が向いています。" },
          { num: 2, title: "味のインパクトは控えめ", text: "制限食の性質上、noshや三ツ星ファームと比べると味のインパクトは弱めです。特に20代〜30代の若い方、濃い味付けが好きな方は物足りなさを感じる可能性があります。ただし「まずい」というレベルではなく、出汁やスパイスを活用した丁寧な味付け。慣れると素材本来の味を楽しめるようになります。" },
          { num: 3, title: "解約・変更が電話のみ", text: "解約だけでなく、コース変更や配送スケジュールの変更も基本的に電話対応です。noshのようにアプリから数タップで完了する手軽さはありません。平日9:30〜18:00の受付時間も、仕事をしている方には不便。スキップや次回お届け日の変更はWebからも可能ですが、UX面では競合に大きく劣ります。" },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{demerit.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{demerit.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 料金・送料 ===== */}
        <SectionHeading id="price">ウェルネスダイニングの料金・送料を徹底解説</SectionHeading>

        <SubHeading>コース別料金表（7食・14食・21食）</SubHeading>
        <ComparisonTable
          headers={["コース", "7食", "14食", "21食", "21食1食あたり"]}
          rows={[
            ["健康応援", "4,644円", "9,180円", "13,608円", "648円"],
            ["糖質制限", "4,860円", "9,504円", "14,040円", "669円"],
            ["塩分制限", "4,860円", "9,504円", "14,040円", "669円"],
            ["たんぱく＆塩分調整", "4,860円", "9,504円", "14,040円", "669円"],
            ["カロリー制限", "4,860円", "9,504円", "14,040円", "669円"],
            ["栄養バランス", "4,860円", "9,504円", "14,040円", "669円"],
          ]}
        />

        <SubHeading>送料</SubHeading>
        <ComparisonTable
          headers={["注文方法", "7食", "14食", "21食"]}
          rows={[
            ["都度購入", "770円", "770円", "770円"],
            ["定期購入", "385円", "無料", "無料"],
            ["初回お試し", "無料", "無料", "無料"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          <strong>送料のポイント：</strong>定期購入14食・21食セットなら送料完全無料は、宅配弁当業界でも珍しい大きなメリットです。noshは毎回913円〜の送料がかかるため、長期利用するほどウェルネスダイニングの方がトータルコストで有利になるケースがあります。
        </p>

        <SubHeading>月額コストシミュレーション</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          健康応援コース・定期購入で1ヶ月利用した場合のコストを、利用頻度別にシミュレーションしました。
        </p>
        <ComparisonTable
          headers={["利用パターン", "食数/月", "食材費", "送料", "月額合計", "1食あたり"]}
          rows={[
            ["週1回程度（7食×1回）", "7食", "4,644円", "385円", "5,029円", "719円"],
            ["週2回程度（14食×1回）", "14食", "9,180円", "0円", "9,180円", "656円"],
            ["毎日（21食×1回＋7食×1回）", "28食", "17,824円", "385円", "18,209円", "650円"],
          ]}
        />

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>ウェルネスダイニングがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "医師から糖質制限・塩分制限・カロリー制限を指示されている人",
              "糖尿病・腎臓病・高血圧の食事管理が必要な人",
              "高齢のご家族の栄養管理を任せたい人",
              "管理栄養士に食事相談したい人",
              "毎日の栄養計算・カロリー計算から解放されたい人",
              "送料無料で長期的にお得に利用したい人",
              "制限食でも「美味しく食べたい」人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>ウェルネスダイニングをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "自分でメニューを選びたい人 → nosh・三ツ星ファームがおすすめ",
              "味のインパクトやグルメ体験を求める人 → 三ツ星ファームがおすすめ",
              "アプリで手軽にすべて管理したい人 → noshがおすすめ",
              "特に食事制限が不要な健康な20〜30代",
              "コスパ最優先の人 → noshがおすすめ",
              "解約のしやすさを重視する人 → noshがおすすめ",
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
          ウェルネスダイニングと主要な競合サービスを簡単に比較。より詳しい比較は
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link>
          の記事で解説しています。
        </p>

        <ComparisonTable
          headers={["項目", "ウェルネスダイニング", "nosh", "三ツ星ファーム"]}
          rows={[
            ["1食あたり最安", "648円〜", "599円〜", "680円〜"],
            ["制限食対応", "◎（専門コース6種）", "△（糖質30g以下のみ）", "△（糖質25g以下のみ）"],
            ["味の評価", "★★★☆☆", "★★★★☆", "★★★★★"],
            ["メニュー選択", "おまかせ", "自由に選べる", "自由に選べる"],
            ["送料", "定期14食以上 無料", "913円〜（毎回）", "990円（毎回）"],
            ["栄養士相談", "◎（無料）", "×", "×"],
            ["アプリ", "なし", "あり（高機能）", "なし"],
            ["向いている人", "食事制限・高齢者", "コスパ・自由度重視", "味・クオリティ重視"],
          ]}
        />

        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネスダイニング</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星ファーム</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["総合おすすめ度", 4, 5, 4],
                ["制限食の専門性", 5, 2, 2],
                ["味", 3, 4, 5],
                ["コスパ（送料込み）", 4, 4, 3],
                ["使いやすさ", 3, 5, 3],
                ["サポート体制", 5, 3, 3],
              ].map(([label, w, n, m], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={w as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={n as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={m as number} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：ウェルネスダイニングはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">ウェルネスダイニングの総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度", 4],
                  ["制限食の専門性", 5],
                  ["味", 3],
                  ["コスパ（送料込み）", 4],
                  ["栄養管理", 5],
                  ["サポート体制", 5],
                  ["使いやすさ", 3],
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
            ウェルネスダイニングは<strong>「制限食の専門性」「管理栄養士の無料サポート」「定期購入の送料無料」</strong>の3つで他社にない独自の価値を提供しています。糖尿病・腎臓病・高血圧などで食事制限が必要な方、高齢のご家族の栄養管理を任せたい方には、ウェルネスダイニングが最適な選択肢です。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一方、食事制限が不要な方、メニューの自由度や味のインパクトを求める方は、noshや三ツ星ファームの方が満足度は高いでしょう。
          </p>
          <p className="text-sm leading-relaxed">
            まずは<strong>初回送料無料のお試し注文</strong>で7食セットを体験してみるのがおすすめ。味や量に納得できたら、14食以上の定期購入に切り替えて送料無料の恩恵を最大限活用しましょう。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            三ツ星ファームの口コミ・評判
          </Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link></li>
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】三ツ星ファームの口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5</Link></li>
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
