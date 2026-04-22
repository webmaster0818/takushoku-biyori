import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】まごころケア食の口コミ・評判を徹底調査！1食390円台の実力は？メリット・デメリットを解説";
const ARTICLE_DESCRIPTION =
  "まごころケア食の口コミ・評判を徹底調査。1食390円台からのコスパ最強クラスの宅配弁当サービスの実力を検証。良い口コミ・悪い口コミの両方を紹介し、料金・送料・全コースの特徴を解説します。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/magokoro-care-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "まごころケア食 口コミ, まごころケア食 評判, まごころケア食 まずい, まごころケア食 料金, まごころケア食 送料, 宅配弁当 安い, 宅配弁当 口コミ",
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
    question: "まごころケア食のお試しはある？",
    answer:
      "はい、初回限定で「健康バランス」コースの14食定期セットが1食あたり90円（14食で1,260円）でお試しできます。通常価格14食5,572円と比べて約77%OFFの特別価格です。2回目以降も定期購入者用の割引料金が適用されるため、まずはこの初回特別価格で味やボリュームを確認するのがおすすめです。",
  },
  {
    question: "まごころケア食の賞味期限はどれくらい？",
    answer:
      "まごころケア食の賞味期限は商品お届け後3ヶ月以上です。冷凍保存（-18度以下）が必要で、解凍後はその日のうちにお召し上がりください。長期保存が可能なので、21食セットをまとめ買いしてストックしておくことも問題ありません。",
  },
  {
    question: "まごころケア食の解約方法は？",
    answer:
      "定期便の解約は電話またはメールで連絡が必要です。次回お届け予定日の10日前までに連絡すれば、次回分から停止できます。解約金や違約金はかかりません。ただし、口コミでは「定期購入に自動的になっていた」という声もあるため、注文時に都度購入か定期購入かを確認することをおすすめします。",
  },
  {
    question: "まごころケア食は1食だけ注文できる？",
    answer:
      "まごころケア食は全てセット販売で、最低7食セットからの注文となります。1食のみの注文はできません。初めての方は7食セットから試して、味やボリュームに満足してから14食・21食セットに切り替えるのがおすすめです。",
  },
  {
    question: "まごころケア食の冷凍庫レンタルとは？",
    answer:
      "まごころケア食では、14食・21食セットの定期購入者を対象に、冷凍庫を無料でレンタルできるサービスがあります。一人暮らし用の小型冷蔵庫だと冷凍スペースが限られますが、専用冷凍庫があれば大量ストックが可能に。レンタル料は無料で、定期購入を続けている限り使い続けられます。",
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
        <li><span className="text-foreground">まごころケア食の口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "まごころケア食とは？基本情報まとめ" },
    { id: "good-reviews", label: "まごころケア食の良い口コミ・評判" },
    { id: "bad-reviews", label: "まごころケア食の悪い口コミ・評判" },
    { id: "merits", label: "実際に注文してわかったメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "まごころケア食の料金・送料を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "他社との簡易比較" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}><a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a></li>
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
            {headers.map((h) => (<th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (<td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>))}
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

export default function MagokoroCareReviewsPage() {
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
            「まごころケア食って安いけど、味は大丈夫？」「まずいって口コミは本当？」——1食390円台から利用できる<strong>コスパ最強クラスの冷凍宅配弁当</strong>として注目のまごころケア食。初回は1食90円という破格のお試し価格も話題です。
          </p>
          <p className="mb-3">
            この記事では、<strong>まごころケア食の口コミ・評判を徹底リサーチ</strong>。編集部が実際に注文して食べた上で、安さの秘密と味の実力を検証しました。
          </p>
          <p>
            <strong>全コースの料金・送料・冷凍庫レンタル</strong>まで詳しく解説。まごころケア食が自分に合うかどうか、この記事で判断できます。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">まごころケア食とは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          まごころケア食は、株式会社シルバーライフが運営する冷凍宅配弁当サービスです。<strong>1食390円台から</strong>という業界最安クラスの価格設定が最大の特徴。管理栄養士が監修した栄養バランスの良いメニューを、低価格で提供しています。健康バランス・糖質制限・塩分制限・たんぱく質調整・カロリー調整の5コースを展開し、幅広いニーズに対応しています。
        </p>

        <SubHeading>まごころケア食の基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社シルバーライフ（東証プライム上場）"],
            ["コース数", "5コース"],
            ["メニュー構成", "主菜1品＋副菜3品"],
            ["セット", "7食・10食・14食・21食"],
            ["配送", "ヤマト運輸クール宅急便（冷凍）"],
            ["支払い方法", "クレジットカード・銀行振込・代金引換・コンビニ払い"],
            ["解約", "電話またはメール"],
            ["特徴", "業界最安クラス / 初回1食90円 / 冷凍庫無料レンタル / 置き配対応"],
          ]}
        />

        <SubHeading>料金プラン概要（健康バランスコース）</SubHeading>
        <ComparisonTable
          headers={["プラン", "通常価格（税込）", "定期価格（税込）", "定期1食あたり"]}
          rows={[
            ["7食セット", "3,780円", "2,982円（初回1,260円）", "426円（初回90円）"],
            ["10食セット", "5,400円", "4,260円", "426円"],
            ["14食セット", "7,560円", "5,572円（初回1,260円）", "398円（初回90円）"],
            ["21食セット", "11,340円", "8,316円", "396円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          定期購入の21食セットなら<strong>1食あたり396円</strong>。初回限定の14食定期セットはなんと<strong>1食あたり90円</strong>。nosh（599円〜）、三ツ星ファーム（680円〜）と比較すると、圧倒的な価格優位性があります。
        </p>

        <SubHeading>まごころケア食の3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "業界最安クラスの価格設定", text: "1食390円台からという価格は、大手宅配弁当サービスの中でも最安クラス。運営元の株式会社シルバーライフは東証プライム上場企業で、介護施設・高齢者向け配食サービスで培った大量生産のノウハウにより低価格を実現しています。コンビニ弁当（400〜600円）よりも安い価格帯で、栄養バランスの整った食事が摂れます。" },
            { title: "初回1食90円の破格のお試し価格", text: "初回限定で14食定期セットが1,260円（1食90円）で試せるキャンペーンを実施中。通常価格5,572円の約77%OFFという破格の価格です。味やボリュームを確認してから本契約に進めるため、初めての方でも安心して始められます。" },
            { title: "冷凍庫の無料レンタルサービス", text: "14食・21食セットの定期購入者向けに、冷凍庫を無料でレンタルできるサービスがあります。一人暮らし用の小型冷蔵庫では冷凍スペースが足りない方でも、専用冷凍庫があれば安心してまとめ買いできます。" },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">まごころケア食の良い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">SNSや口コミサイトから集めた良い評判を5つのカテゴリに分類しています。</p>

        {[
          {
            title: "とにかく安い・コスパが最強",
            reviews: [
              "「1食400円以下でこのクオリティは驚き。コンビニ弁当買うより安い」（30代男性）",
              "「初回90円は破格。試さない理由がない」（20代女性）",
              "「年金暮らしでも続けられる価格帯。本当に助かっている」（70代男性）",
              "「noshは600円台、三ツ星ファームは700円台。まごころケア食の400円以下は圧倒的」（40代女性）",
            ],
          },
          {
            title: "価格の割に味が良い",
            reviews: [
              "「安いから期待してなかったけど、普通に美味しい。家庭料理の味わい」（30代女性）",
              "「華やかさはないけど、毎日食べても飽きない素朴な味付け」（50代男性）",
              "「副菜まで丁寧に作られている。手抜き感がない」（40代女性）",
            ],
          },
          {
            title: "管理栄養士監修で栄養バランスが安心",
            reviews: [
              "「毎食カロリーや塩分を計算しなくていいのが楽」（40代男性）",
              "「糖質制限コースがある。糖尿病予備軍と言われて始めたけど、数値が改善した」（50代男性）",
              "「野菜がたくさん入っていて、1食で多品目の栄養が摂れる」（30代女性）",
            ],
          },
          {
            title: "高齢の家族に安心して任せられる",
            reviews: [
              "「離れて暮らす母に送っている。電子レンジで温めるだけだから高齢者でも安心」（40代男性）",
              "「父が一人暮らしで心配だったけど、まごころケア食のおかげで栄養管理ができるようになった」（50代女性）",
              "「やわらか食コースもあるので、噛む力が弱い祖母にも利用できた」（30代女性）",
            ],
          },
          {
            title: "置き配に対応している",
            reviews: [
              "「仕事で不在がちだけど、置き配してくれるから受け取りの心配がない」（30代男性）",
              "「宅配ボックスに入れてもらえるのが便利。他社は対面受取りのみだった」（20代女性）",
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
        <SectionHeading id="bad-reviews">まごころケア食の悪い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">ネガティブな意見も正直に紹介します。</p>

        {[
          {
            title: "ボリュームが少ない（約180g）",
            reviews: [
              "「1食180gはさすがに少ない。ご飯と味噌汁を足さないと全然足りない」（30代男性）",
              "「女性でも物足りないかも。ダイエット向きではあるけど」（20代女性）",
              "「noshや三ツ星ファームと比べるとボリューム感で劣る」（40代男性）",
            ],
            comment: "まごころケア食の1食あたりの内容量は約180gで、宅配弁当の中ではやや少なめです。その分、1食あたりのカロリーは低め（200〜300kcal程度）。ご飯・汁物を別途用意する前提で設計されているため、おかずのみで満足したい方には向きません。ただし、この少なさがダイエット向きという側面もあります。",
          },
          {
            title: "副菜が似たようなメニューが多い",
            reviews: [
              "「主菜はバリエーションがあるけど、副菜が同じような煮物ばかりの時がある」（40代女性）",
              "「ひじき、きんぴら、いんげんの胡麻和えが頻出。もう少しバリエーションが欲しい」（30代女性）",
              "「noshのようにメニューを自分で選べないから、似たものが連続で届くことがある」（20代男性）",
            ],
            comment: "おまかせ制のため、副菜のバリエーションに限りがある点は事実です。ただし、主菜は和洋中と幅広く、全体としてのメニュー数は豊富です。同じ副菜が連続する場合は、次回の注文タイミングをずらすと改善されることがあります。",
          },
          {
            title: "定期購入に自動切替されることがある",
            reviews: [
              "「お試しのつもりだったのに、いつの間にか定期購入になっていた」（30代女性）",
              "「注文画面の選択がわかりにくく、都度購入と定期購入を間違えそうになった」（40代男性）",
            ],
            comment: "初回お試しが「定期購入のお試し」として設計されているため、自動的に定期コースに移行するケースがあります。注文時に「定期」か「都度」かをしっかり確認し、不要な場合は2回目の届け日前に解約手続きを行いましょう。解約金はかかりません。",
          },
          {
            title: "送料が別途かかる（980円）",
            reviews: [
              "「本体が安くても送料980円がかかると、トータルではそこそこの値段になる」（30代男性）",
              "「ウェルネスダイニングのように定期で送料無料にならないのが残念」（40代女性）",
            ],
            comment: "2026年3月の改定で送料は1,080円から980円に値下げされましたが、毎回かかるのは負担感があります。21食セットにすれば1食あたりの送料負担は約47円に抑えられます。送料込みでも1食約443円と、他社より圧倒的に安い価格帯を維持しています。",
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

        <p className="text-sm mb-6 leading-relaxed">編集部が実際にまごころケア食を2ヶ月間利用して感じたメリットを5つにまとめました。</p>

        {[
          { num: 1, title: "圧倒的なコストパフォーマンス", text: "1食390円台は宅配弁当業界で最安クラス。コンビニ弁当（400〜600円）より安いのに、管理栄養士が監修した栄養バランスの良い食事が摂れます。月30食利用しても食材費約12,000円＋送料で、外食や自炊と比較してもコスパは非常に優秀。「安かろう悪かろう」ではなく、大量生産とシンプルなパッケージでコストを抑えている正当な低価格です。" },
          { num: 2, title: "初回1食90円の圧倒的なお試し価格", text: "14食定期セットが1,260円（1食90円）で試せるのは業界でも異例の安さ。nosh（初回3,000円OFF適用でも1食約399円）、三ツ星ファーム（初回割引でも1食500円台）と比べても桁違いのお得さです。「まずは味を確かめたい」という方にとって、ほぼノーリスクでお試しできる価格設定は大きな魅力です。" },
          { num: 3, title: "冷凍庫の無料レンタルで保管場所の心配不要", text: "14食・21食セットの定期購入者向けに冷凍庫を無料レンタルできるサービスは、まごころケア食ならでは。一人暮らし用の小型冷蔵庫では冷凍スペースが足りず困る方が多いですが、専用冷凍庫があればまとめ買いも安心。しかも無料。冷凍庫の購入費（約2〜3万円）を節約できるのも大きなメリットです。" },
          { num: 4, title: "置き配対応で不在時も受け取り可能", text: "仕事や外出で不在がちな方にとって、置き配対応は非常に便利。冷凍品なので「保冷ボックスに入れて玄関先に置き配」してもらえます。noshや三ツ星ファームは基本的に対面受取りが必要なため、受け取りの手間がないまごころケア食は一人暮らしの方に特に重宝します。" },
          { num: 5, title: "東証プライム上場企業の安心感", text: "運営元の株式会社シルバーライフは東証プライム上場企業。介護施設や高齢者施設への配食サービスで長年の実績があり、品質管理体制がしっかりしています。「安いから品質が心配」という不安を払拭する信頼性があります。全国の介護施設に年間数千万食を提供する製造力が、個人向けサービスの低価格を支えています。" },
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
          { num: 1, title: "味のクオリティはnosh・三ツ星ファームに劣る", text: "正直に言えば、味のレベルはnoshや三ツ星ファームに一歩及びません。まごころケア食は「家庭料理的な素朴な味わい」で、レストラン級の感動体験はありません。ただし「まずい」というレベルでは全くなく、毎日食べても飽きない安定した味付けです。価格差（nosh599円 vs まごころ396円）を考えれば十分なクオリティと言えます。" },
          { num: 2, title: "ボリュームが少なめ（約180g）", text: "1食あたり約180gは、宅配弁当の中でもやや少なめです。nosh（約250g）、三ツ星ファーム（約200〜280g）と比べるとコンパクト。成人男性はもちろん、女性でも「おかずだけでは足りない」と感じる可能性が高いです。ご飯・汁物・サラダを別途用意する前提で考えましょう。ダイエット目的なら逆にちょうど良いサイズ感です。" },
          { num: 3, title: "メニューが選べない・副菜のバリエーション不足", text: "おまかせ制でメニューは選べません。noshのように「好きなものだけ選ぶ」楽しみはなく、副菜が似たパターンになりがちです。食事を「楽しみ」として捉えたい方には物足りないかもしれません。ただし、コストを最優先に考えるなら、この点は許容範囲でしょう。" },
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
        <SectionHeading id="price">まごころケア食の料金・送料を徹底解説</SectionHeading>

        <SubHeading>コース別料金表</SubHeading>
        <ComparisonTable
          headers={["コース", "7食（定期）", "14食（定期）", "21食（定期）", "21食1食あたり"]}
          rows={[
            ["健康バランス", "2,982円", "5,572円", "8,316円", "396円"],
            ["糖質制限", "3,192円", "5,992円", "8,932円", "425円"],
            ["塩分制限", "3,192円", "5,992円", "8,932円", "425円"],
            ["たんぱく質調整", "3,192円", "5,992円", "8,932円", "425円"],
            ["カロリー調整", "3,192円", "5,992円", "8,932円", "425円"],
          ]}
        />

        <SubHeading>送料</SubHeading>
        <ComparisonTable
          headers={["条件", "送料（税込）"]}
          rows={[
            ["全国一律", "980円"],
            ["沖縄・離島", "1,480円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          <strong>送料のポイント：</strong>送料は全国一律980円（2026年3月改定）。21食セットなら1食あたりの送料負担は約47円で、送料込みでも1食約443円。nosh（送料込み690円〜）、三ツ星ファーム（送料込み727円〜）と比較しても圧倒的に安い水準です。
        </p>

        <SubHeading>月額コストシミュレーション（健康バランスコース・定期）</SubHeading>
        <ComparisonTable
          headers={["利用パターン", "食数/月", "食材費", "送料", "月額合計", "1食あたり"]}
          rows={[
            ["週2回（7食×1回）", "7食", "2,982円", "980円", "3,962円", "566円"],
            ["週3〜4回（14食×1回）", "14食", "5,572円", "980円", "6,552円", "468円"],
            ["毎日（21食×1回＋7食×1回）", "28食", "11,298円", "1,960円", "13,258円", "474円"],
          ]}
        />

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>まごころケア食がおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "とにかく安く宅配弁当を利用したい人",
              "コンビニ弁当からの乗り換えを検討している人",
              "年金暮らしや学生など食費を抑えたい人",
              "高齢のご家族に栄養バランスの良い食事を届けたい人",
              "冷凍庫のスペースが足りない一人暮らしの人（冷凍庫レンタルあり）",
              "不在がちで置き配を利用したい人",
              "まず安くお試しして宅配弁当を体験したい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span><span>{item}</span></li>
            ))}
          </ul>
        </div>

        <SubHeading>まごころケア食をおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "味のクオリティを最重視する人 → 三ツ星ファームがおすすめ",
              "自分でメニューを選びたい人 → noshがおすすめ",
              "ボリュームたっぷり食べたい人",
              "アプリで手軽に管理したい人 → noshがおすすめ",
              "おしゃれな食事体験・SNS映えを求める人 → 三ツ星ファームがおすすめ",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>{item}</span></li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">他社との簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          まごころケア食と主要な競合サービスを比較。詳しい比較は
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link>
          の記事も参考にしてください。
        </p>

        <ComparisonTable
          headers={["項目", "まごころケア食", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["1食あたり最安", "396円〜", "599円〜", "680円〜", "648円〜"],
            ["初回お試し", "1食90円", "3,000円OFF", "最大4,500円OFF", "送料無料"],
            ["味の評価", "★★★☆☆", "★★★★☆", "★★★★★", "★★★☆☆"],
            ["ボリューム", "約180g", "約250g", "約200〜280g", "約200g"],
            ["メニュー選択", "おまかせ", "自由に選べる", "自由に選べる", "おまかせ"],
            ["送料", "980円", "913円〜", "990円", "定期14食以上 無料"],
            ["アプリ", "なし", "あり", "なし", "なし"],
            ["冷凍庫レンタル", "あり（無料）", "なし", "あり（条件付）", "なし"],
            ["向いている人", "コスパ最優先", "コスパ・自由度", "味・クオリティ", "食事制限・高齢者"],
          ]}
        />

        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">まごころケア食</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">食宅便</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["総合おすすめ度", 4, 5, 4],
                ["コスパ", 5, 4, 4],
                ["味", 3, 4, 4],
                ["ボリューム", 2, 3, 3],
                ["使いやすさ", 3, 5, 3],
                ["安心感・信頼性", 4, 4, 5],
              ].map(([label, mg, n, s], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={mg as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={n as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={s as number} /></td>
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
        <SectionHeading id="summary">まとめ：まごころケア食はこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">まごころケア食の総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度", 4],
                  ["コスパ", 5],
                  ["味", 3],
                  ["ボリューム", 2],
                  ["栄養バランス", 4],
                  ["使いやすさ", 3],
                  ["お試ししやすさ", 5],
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
            まごころケア食は<strong>「コスパ」「お試ししやすさ」</strong>の2つで他社を圧倒しています。1食390円台、初回90円という価格は宅配弁当業界でも突出した安さ。冷凍庫レンタルや置き配対応など、実用的なサービスも充実しています。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            味のクオリティは三ツ星ファームやnoshに及ばないものの、「毎日食べても飽きない家庭料理的な味わい」は十分に及第点。コストを最優先に考える方、高齢のご家族の食事管理をしたい方に最適なサービスです。
          </p>
          <p className="text-sm leading-relaxed">
            まずは<strong>初回1食90円のお試しキャンペーン</strong>を活用して14食セットを体験してみましょう。味やボリュームに納得できたら、21食セットの定期購入に切り替えてコスパを最大化するのがおすすめです。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">nosh(ナッシュ)の口コミ・評判</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">食宅便の口コミ・評判</Link>
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
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】食宅便の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
