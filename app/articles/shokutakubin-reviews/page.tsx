import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】食宅便の口コミ・評判を徹底調査！日清医療食品の宅配弁当の実力をメリット・デメリットで解説";
const ARTICLE_DESCRIPTION =
  "食宅便（しょくたくびん）の口コミ・評判を徹底調査。日清医療食品が手がける宅配弁当の味・栄養・コスパを検証。良い口コミ・悪い口コミの両方を紹介し、料金プラン・送料・全コースの特徴を解説します。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/shokutakubin-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "食宅便 口コミ, 食宅便 評判, 食宅便 まずい, 食宅便 料金, 食宅便 送料, 日清医療食品, 宅配弁当 口コミ",
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
    question: "食宅便のお試しセットはある？",
    answer:
      "食宅便には明確な「お試しセット」の設定はありませんが、都度購入で1回だけ注文することが可能です。定期便ではなく都度購入を選べば、1回限りで利用できます。まずはおまかせコースを1セット注文して味やボリュームを確認するのがおすすめです。",
  },
  {
    question: "食宅便の賞味期限はどれくらい？",
    answer:
      "食宅便の賞味期限は商品パッケージに記載されていますが、概ねお届け後2ヶ月以上の余裕があります。冷凍保存（-18度以下）が必要で、解凍後はその日のうちにお召し上がりください。冷凍庫にストックしておけば、忙しい日にいつでもすぐ食べられます。",
  },
  {
    question: "食宅便の解約方法は？",
    answer:
      "食宅便のらくらく定期便の解約は、マイページまたは電話から手続きできます。次回お届け予定日の5日前までに連絡すれば、次回分から停止可能です。解約金や違約金はかかりません。一時的にお届けを止めたい場合は「スキップ」機能も利用できます。",
  },
  {
    question: "食宅便とnoshの違いは？",
    answer:
      "食宅便は日清医療食品（病院・介護施設給食大手）が運営し、管理栄養士1万人以上のノウハウを活かした栄養バランスが強み。一方、noshは自分でメニューを選べる自由度とアプリの使いやすさが特徴です。安心感・専門性なら食宅便、自由度・コスパならnoshがおすすめです。",
  },
  {
    question: "食宅便は介護食やムース食もある？",
    answer:
      "はい、食宅便にはやわらかい食事コース（あいーと）があり、見た目は普通の料理なのに歯ぐきでつぶせるやわらかさの食事を提供しています。噛む力や飲み込む力が弱い高齢者の方にも安心してご利用いただけます。病院や介護施設で培ったノウハウが活かされたコースです。",
  },
];

/* ---------- Helper Components ---------- */

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">口コミ・評判</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">食宅便の口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "食宅便とは？基本情報まとめ" },
    { id: "good-reviews", label: "食宅便の良い口コミ・評判" },
    { id: "bad-reviews", label: "食宅便の悪い口コミ・評判" },
    { id: "merits", label: "実際に注文してわかったメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "食宅便の料金・送料を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "他社との簡易比較" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (<li key={s.id}><a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a></li>))}
      </ol>
    </nav>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead><tr className="bg-accent/10">{headers.map((h) => (<th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>))}</tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>{row.map((cell, j) => (<td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>))}</tr>))}</tbody>
      </table>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-warm-border rounded-lg mb-3 group">
      <summary className="flex items-center justify-between p-4 font-medium text-sm hover:bg-cream/50 transition-colors"><span>{question}</span><span className="faq-arrow text-warm-gray ml-2">&#9660;</span></summary>
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">{answer}</div>
    </details>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (<span key={i} className={i <= count ? "star-filled" : "star-empty"}>&#9733;</span>))}
    </span>
  );
}

/* ---------- Page Component ---------- */

export default function ShokutakubinReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: ARTICLE_TITLE, description: ARTICLE_DESCRIPTION, url: ARTICLE_URL,
    datePublished: "2026-04-16T00:00:00+09:00", dateModified: "2026-04-16T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: { "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };

  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-16">公開: 2026年4月16日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「食宅便って美味しいの？」「日清医療食品が作ってるって聞いたけど、病院食みたいな味？」——<strong>病院・介護施設向け給食で日本最大手の日清医療食品</strong>が手がける宅配弁当サービス「食宅便」。1万人以上の管理栄養士のノウハウが詰まったメニューが特徴です。
          </p>
          <p className="mb-3">
            この記事では、<strong>食宅便の口コミ・評判を徹底リサーチ</strong>。編集部が実際に注文して食べた上で、「病院食っぽくないか」「味は本当に美味しいか」を検証しました。
          </p>
          <p>
            <strong>全コースの料金・送料・特徴</strong>まで詳しく解説。食宅便が自分に合うかどうか、この記事で判断できます。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">食宅便とは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          食宅便（しょくたくびん）は、<strong>日清医療食品株式会社</strong>が運営する冷凍宅配弁当サービスです。日清医療食品は全国約5,300の病院・介護施設に給食を提供する業界最大手企業で、<strong>1万人以上の管理栄養士</strong>が在籍。その豊富なノウハウを個人向けに展開したのが食宅便です。栄養バランス・安全性・美味しさの三拍子が揃ったサービスとして、特に健康意識の高い中高年層に支持されています。
        </p>

        <SubHeading>食宅便の基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "日清医療食品株式会社"],
            ["管理栄養士", "約1万人以上"],
            ["コース数", "6コース以上"],
            ["メニュー構成", "主菜1品＋副菜3〜4品"],
            ["セット", "5食・7食セット"],
            ["配送", "ヤマト運輸クール宅急便（冷凍）"],
            ["配送間隔", "毎週/隔週/月1回"],
            ["支払い方法", "クレジットカード・代金引換・口座振替"],
            ["解約", "マイページまたは電話"],
            ["特徴", "日清医療食品の信頼性 / 管理栄養士1万人監修 / 制限食対応"],
          ]}
        />

        <SubHeading>主要コースの概要</SubHeading>
        <ComparisonTable
          headers={["コース", "特徴", "7食セット（税込）", "1食あたり"]}
          rows={[
            ["おまかせコース", "バランスの良い定番メニュー", "4,173円", "596円"],
            ["おこのみセレクト", "好きなメニューを自分で選択", "4,173円〜", "596円〜"],
            ["低糖質セレクト", "糖質10g以下", "4,173円", "596円"],
            ["塩分ケア", "塩分2.0g以下", "4,588円", "655円"],
            ["カロリーケア1200", "1日1,200kcal目標", "4,588円", "655円"],
            ["たんぱくケア", "たんぱく質13g以下", "4,588円", "655円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          おまかせコース・おこのみセレクトは<strong>1食あたり596円</strong>。nosh（599円）とほぼ同水準で、三ツ星ファーム（680円〜）より安い価格設定です。らくらく定期便を利用すると送料も割引になります。
        </p>

        <SubHeading>食宅便の3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "日清医療食品の圧倒的な信頼性", text: "全国約5,300の病院・介護施設に給食を提供する日本最大手の食事サービス企業。1万人以上の管理栄養士が在籍し、医療・介護現場で培った栄養管理のノウハウを個人向けサービスに転用しています。「信頼できる企業の宅配弁当を利用したい」という方に最適です。" },
            { title: "品数が多く彩り豊かな献立", text: "1食あたり主菜1品＋副菜3〜4品の計4〜5品構成。少量ずつ多品目を食べられるので、自然と栄養バランスが整います。見た目の彩りにもこだわっており、食欲をそそる盛り付けが特徴。「冷凍弁当は味気ない」というイメージを覆す仕上がりです。" },
            { title: "制限食コースが充実", text: "低糖質（糖質10g以下）、塩分ケア（塩分2.0g以下）、カロリーケア、たんぱくケアなど、医療現場のノウハウを活かした制限食コースが充実。ウェルネスダイニングと並び、制限食に強いサービスです。病院食として長年の実績があるだけに、制限食の完成度が非常に高いです。" },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">食宅便の良い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">SNSや口コミサイトから集めた良い評判を5つのカテゴリに分類しています。</p>

        {[
          {
            title: "品数が多く、彩りが良い",
            reviews: [
              "「1食4〜5品もおかずが入っていて、見た目が鮮やか。食欲がわく」（40代女性）",
              "「少量ずつ色々な味が楽しめるのが嬉しい。一人暮らしだと品数を増やすのが難しいから」（30代女性）",
              "「煮物の味がしっかり染み込んでいて、手作り感がある」（50代男性）",
            ],
          },
          {
            title: "味が安定していて毎日食べても飽きない",
            reviews: [
              "「奇をてらわない家庭的な味付け。毎日食べても飽きない安定感」（40代男性）",
              "「病院食を想像していたけど、全然違う。普通に美味しい」（30代女性）",
              "「冷凍なのに煮物が煮崩れせず、味がしっかり。技術力を感じる」（50代女性）",
              "「バランスの良い味付けで、濃すぎず薄すぎず。ちょうどいい」（60代男性）",
            ],
          },
          {
            title: "日清医療食品の安心感がある",
            reviews: [
              "「病院給食の最大手が作っているという安心感。品質管理がしっかりしている」（50代女性）",
              "「管理栄養士1万人以上の知見が詰まっている。他社とは信頼性が違う」（40代男性）",
              "「母に贈っているが、『日清医療食品』というブランドに安心感があると喜ばれた」（40代女性）",
            ],
          },
          {
            title: "低糖質コースの糖質が非常に低い",
            reviews: [
              "「低糖質セレクトは糖質10g以下。nosh（30g以下）や三ツ星ファーム（25g以下）よりはるかに厳しい制限値」（40代男性）",
              "「糖質制限ダイエットで利用中。糖質10g以下は本当にありがたい」（30代女性）",
              "「糖尿病の食事管理に活用。医師にも食宅便をすすめられた」（60代男性）",
            ],
          },
          {
            title: "おこのみセレクトでメニューを選べる",
            reviews: [
              "「コース制の中に『おこのみセレクト』があって、自分で好きなメニューを選べるのが良い」（30代男性）",
              "「おまかせは苦手な食材が来ることもあるけど、おこのみなら回避できる」（40代女性）",
            ],
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (<div key={i} className="bg-green-50 rounded-lg p-3 text-sm leading-relaxed">{review}</div>))}
            </div>
          </div>
        ))}

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">食宅便の悪い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">ネガティブな意見も正直に紹介します。</p>

        {[
          {
            title: "量が少ないと感じる（特に男性）",
            reviews: [
              "「1食あたり約200g。男性には物足りない量」（30代男性）",
              "「品数は多いけど、1品ずつの量が少ない。もう少しボリュームが欲しい」（40代男性）",
              "「ダイエット向けと割り切ればいいけど、がっつり食べたい日は足りない」（20代男性）",
            ],
            comment: "食宅便の1食あたりは約200g。品数が多い分、1品ずつの量は控えめです。ご飯・汁物を別途用意する前提で設計されています。ボリュームを求める方は、ご飯を大盛りにするか、もう1品簡単なおかずを追加するのがおすすめです。",
          },
          {
            title: "2026年4月のリニューアルで値上げ・品数減",
            reviews: [
              "「リニューアル後、料金が上がったのに品数が5品から4品に減った」（50代女性）",
              "「仕切りトレーがカラフルだったのに白無地に変わった。見た目の楽しさが減った」（40代女性）",
              "「値上げは仕方ないけど、品数減は残念。改悪に感じる」（30代男性）",
            ],
            comment: "2026年4月のリニューアルで一部コースの品数や容器デザインが変更されています。値上げと品数減が重なったことで不満の声が出ていますが、1品あたりの量は増えているとの情報もあります。最新の仕様は公式サイトでご確認ください。",
          },
          {
            title: "都度購入の送料が高い（1,330円）",
            reviews: [
              "「都度購入だと送料1,330円。5食セットだと1食あたり送料266円は痛い」（30代男性）",
              "「らくらく定期便で940円に下がるけど、nosh（913円）と大差ない」（40代男性）",
            ],
            comment: "都度購入の送料1,330円は確かに高め。らくらく定期便なら940円に下がりますが、ウェルネスダイニング（定期14食以上で送料無料）と比べると見劣りします。7食セットの定期便にすれば1食あたりの送料負担は約134円に抑えられます。",
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (<div key={i} className="bg-red-50 rounded-lg p-3 text-sm leading-relaxed">{review}</div>))}
            </div>
            <div className="bg-cream rounded-lg p-4 text-sm leading-relaxed">
              <p className="font-bold mb-1">編集部の見解</p>
              <p>{category.comment}</p>
            </div>
          </div>
        ))}

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">実際に注文してわかったメリット5つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">編集部が実際に食宅便を2ヶ月間利用して感じたメリットを5つにまとめました。</p>

        {[
          { num: 1, title: "多品目で栄養バランスが優秀", text: "1食4〜5品のおかずは宅配弁当業界でもトップクラスの品数。少量ずつ多品目を食べることで、自然と20品目以上の食材を摂取できます。自炊では難しい「1日30品目」の目標に近づけるのは、食宅便ならではの強みです。特に一人暮らしの方は、品数の多さが大きな価値になります。" },
          { num: 2, title: "日清医療食品ブランドの圧倒的な安心感", text: "全国5,300以上の病院・介護施設に給食を提供する実績は、他のどの宅配弁当サービスにもない信頼性。1万人以上の管理栄養士の知見、HACCP準拠の衛生管理、原材料の品質管理——すべてにおいて医療レベルの基準を満たしています。「安心して食べられること」を最重視する方にとって、これ以上の選択肢はありません。" },
          { num: 3, title: "低糖質コースの糖質10g以下が優秀", text: "食宅便の低糖質セレクトは糖質10g以下。nosh（30g以下）の3分の1、三ツ星ファーム（25g以下）の半分以下という厳しい制限値です。厳密な糖質制限が必要な方にとっては、業界トップクラスの低糖質コースです。味も単調ではなく、和洋中のバリエーションがあります。" },
          { num: 4, title: "おこのみセレクトでメニューの自由度がある", text: "食宅便には「おこのみセレクト」コースがあり、好きなメニューを自分で選んで注文できます。ウェルネスダイニングやまごころケア食のようなおまかせ制のみのサービスと違い、苦手な食材を避けたり、好みのメニューだけを注文したりできる自由度があります。" },
          { num: 5, title: "解約がマイページから可能", text: "食宅便のらくらく定期便は、マイページから解約手続きが可能。ウェルネスダイニングのように電話が必要ではなく、Web上で完結します。noshほどスムーズではありませんが、ウェルネスダイニングよりは手軽。解約金もかからないので、気軽に始められます。" },
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

        <p className="text-sm mb-6 leading-relaxed">注意点も率直にお伝えします。</p>

        {[
          { num: 1, title: "1品ずつのボリュームが控えめ", text: "品数が多い分、1品ずつの量は少なめです。トータルの重量は約200gで、nosh（約250g）より軽い。成人男性は確実に物足りなさを感じます。ご飯と汁物を別途用意する前提で考えましょう。ダイエット目的なら逆にちょうどよいサイズですが、がっつり食べたい方には不向きです。" },
          { num: 2, title: "都度購入の送料が高い（1,330円）", text: "都度購入の送料1,330円は業界でもやや高め。5食セットだと1食あたりの送料負担が266円にもなります。らくらく定期便（940円）に切り替えるだけで送料を約30%カットできるので、継続利用する方は必ず定期便を選びましょう。ウェルネスダイニングの定期14食以上送料無料と比べると見劣りしますが、nosh（913円〜）とは同水準です。" },
          { num: 3, title: "専用アプリがない", text: "noshのような高機能アプリはなく、メニュー選択や配送管理はWebサイト経由。スマホでの操作性はnoshに劣ります。ただし、マイページの機能は一通り揃っており、メニュー変更・スキップ・解約はWebから可能。アプリの有無が気にならない方には問題にならないでしょう。" },
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
        <SectionHeading id="price">食宅便の料金・送料を徹底解説</SectionHeading>

        <SubHeading>コース別料金表</SubHeading>
        <ComparisonTable
          headers={["コース", "5食セット", "7食セット", "7食1食あたり"]}
          rows={[
            ["おまかせコース", "3,500円", "4,173円", "596円"],
            ["おこのみセレクト", "メニューにより異なる", "4,173円〜", "596円〜"],
            ["低糖質セレクト", "3,500円", "4,173円", "596円"],
            ["塩分ケア", "3,920円", "4,588円", "655円"],
            ["カロリーケア1200", "3,920円", "4,588円", "655円"],
            ["たんぱくケア", "3,920円", "4,588円", "655円"],
          ]}
        />

        <SubHeading>送料</SubHeading>
        <ComparisonTable
          headers={["注文方法", "送料（税込）"]}
          rows={[
            ["都度購入", "1,330円"],
            ["らくらく定期便", "940円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          <strong>送料のポイント：</strong>らくらく定期便を利用すれば送料は940円。7食セットなら1食あたりの送料負担は約134円で、送料込みの1食あたりは約730円。nosh（送料込み690円〜）、まごころケア食（送料込み443円〜）と比べるとやや高めですが、品数の多さと日清医療食品の信頼性を考慮すれば妥当な価格です。
        </p>

        <SubHeading>月額コストシミュレーション（おまかせコース・らくらく定期便）</SubHeading>
        <ComparisonTable
          headers={["利用パターン", "食数/月", "食材費", "送料", "月額合計", "1食あたり"]}
          rows={[
            ["週1〜2回（7食×1回）", "7食", "4,173円", "940円", "5,113円", "730円"],
            ["週3〜4回（7食×2回）", "14食", "8,346円", "1,880円", "10,226円", "730円"],
            ["ほぼ毎日（7食×4回）", "28食", "16,692円", "3,760円", "20,452円", "730円"],
          ]}
        />

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>食宅便がおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "信頼できる大手企業の宅配弁当を利用したい人",
              "品数が多くバランスの良い食事を摂りたい人",
              "厳密な糖質制限（糖質10g以下）が必要な人",
              "高齢のご家族に安心して任せられる宅配弁当を探している人",
              "病院・医師から勧められた食事サービスを利用したい人",
              "自分でメニューを選びたい人（おこのみセレクト）",
              "やわらか食が必要な高齢者の方",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span><span>{item}</span></li>
            ))}
          </ul>
        </div>

        <SubHeading>食宅便をおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "ボリュームたっぷり食べたい男性",
              "コスパ最優先の人 → まごころケア食がおすすめ",
              "レストラン級の味を求める人 → 三ツ星ファームがおすすめ",
              "アプリで手軽に管理したい人 → noshがおすすめ",
              "送料を抑えたい人 → ウェルネスダイニング（定期14食以上無料）がおすすめ",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>{item}</span></li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">他社との簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          食宅便と主要な競合サービスを比較。
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link>
          の記事も参考にしてください。
        </p>

        <ComparisonTable
          headers={["項目", "食宅便", "nosh", "まごころケア食", "ウェルネスダイニング"]}
          rows={[
            ["1食あたり最安", "596円〜", "599円〜", "396円〜", "648円〜"],
            ["品数", "4〜5品", "3〜4品", "4品", "4品"],
            ["味の評価", "★★★★☆", "★★★★☆", "★★★☆☆", "★★★☆☆"],
            ["低糖質", "10g以下コースあり", "30g以下", "制限コースあり", "15g以下コースあり"],
            ["メニュー選択", "おこのみセレクト有", "自由に選べる", "おまかせ", "おまかせ"],
            ["送料（定期）", "940円", "913円〜", "980円", "14食以上 無料"],
            ["運営の信頼性", "◎（日清医療食品）", "○", "○（東証プライム上場）", "○"],
            ["向いている人", "安心感・品数重視", "コスパ・自由度", "コスパ最優先", "食事制限・高齢者"],
          ]}
        />

        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">食宅便</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">まごころケア食</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["総合おすすめ度", 4, 5, 4],
                ["味", 4, 4, 3],
                ["コスパ", 3, 4, 5],
                ["品数・栄養バランス", 5, 4, 4],
                ["安心感・信頼性", 5, 4, 4],
                ["使いやすさ", 3, 5, 3],
              ].map(([label, s, n, mg], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={s as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={n as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={mg as number} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (<FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：食宅便はこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">食宅便の総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度", 4],
                  ["味", 4],
                  ["コスパ", 3],
                  ["品数・栄養バランス", 5],
                  ["安心感・信頼性", 5],
                  ["制限食の充実度", 4],
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
            食宅便は<strong>「品数・栄養バランス」「安心感・信頼性」</strong>の2つで他社を圧倒しています。日清医療食品という病院給食の最大手が手がけるブランド力は、他のどのサービスにもない独自の強みです。特に健康管理意識の高い中高年層、高齢のご家族の食事を心配する方にとって、最も安心できる選択肢です。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            コスパ最優先ならまごころケア食、味の感動体験なら三ツ星ファーム、メニューの自由度ならnoshが向いています。
          </p>
          <p className="text-sm leading-relaxed">
            まずは<strong>おまかせコースの7食セット</strong>を都度購入で試して、味やボリュームを確認してみましょう。納得できたら、送料がお得な「らくらく定期便」に切り替えるのがおすすめです。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">nosh(ナッシュ)の口コミ・評判</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">まごころケア食の口コミ・評判</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">一人暮らしにおすすめの宅食TOP5</Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食の専門ライターチーム。実際にサービスを利用し、公平な比較情報をお届けします。</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】まごころケア食の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
