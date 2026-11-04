import type { Metadata } from "next";
import Link from "next/link";

/*
  ミールタイム（株式会社ファンデリー）の受け皿ページ。
  ⚠️ 作った理由: 中小ブランド×口コミ面が当サイトの勝ち型。
     「食事療法（腎臓病・糖尿病）× 管理栄養士に無料相談」という軸は既存58記事に無い。
  ⚠️ 数値は 2026-11-04 に公式（www.mealtime.jp。mealtime.jp は証明書切れ）で確認したもののみ。
  ⚠️ 1食の価格は商品ページ（/shop/items/<番号>）の通常価格・インターネット価格。区分ごとの先頭10商品で同額を確認。
     トップのプラン例の月額は「通常価格×食数」と一致し、送料を含まない。
  ⚠️ 送料は /shop/freight・/shop/law に記載（冷凍950円・常温740円。各4,980円以上で無料）。
  ⚠️ 公式の販売ページに税込・税別の明記が見当たらないため「税込」と書かない。
  ⚠️ 口コミはこせたん宅配弁当（coop-bento.com）が引用したSNS投稿。みん評は403で本文未確認のため引用しない。
*/

const ARTICLE_TITLE =
  "ミールタイムの口コミ・評判と料金｜1食646円〜・送料950円（4,980円以上で無料）【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ミールタイム（ファンデリー）の料金を公式の商品ページで確認しました。1食646〜862円（区分別）、送料は冷凍950円・常温740円で各4,980円以上は無料です。「薄味」「量が少ない」「温めムラ」など口コミの傾向も出典付きで整理しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mealtime-kuchikomi/";
const CHECKED = "2026年11月4日";
const REVIEW_SOURCE = "https://coop-bento.com/mealtime-all/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ミールタイム, ミールタイム 料金, ミールタイム 送料, ミールタイム 口コミ, ミールタイム 評判, 腎臓病食 宅配, 低たんぱく食 宅配, 糖尿病食 宅配, ファンデリー",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-09-18T00:00:00+09:00",
    modifiedTime: "2026-11-04T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "ミールタイムの料金はいくらですか？",
    answer:
      "公式の商品ページの通常価格は1食646〜862円です。ヘルシー食はおかず646円・ごはん付700円、低たんぱく食はおかず646円・ごはん付862円などで、インターネット注文は3%引きになります。定期便のプラン例は毎週7食で月約19,600円、毎週14食で月約36,176円などです（2026年11月4日 公式サイト確認）。",
  },
  {
    question: "送料はいくらかかりますか？",
    answer:
      "冷凍は950円、常温は740円です。温度帯ごとの商品合計が4,980円以上なら、その温度帯の送料は無料になります。インターネット注文はインターネット価格で判定されます。代金引換の場合は手数料330円がかかります（2026年11月4日 公式サイト確認）。",
  },
  {
    question: "ミールタイムの口コミ・評判はどうですか？",
    answer:
      "第三者ブログがまとめたSNS投稿（2020〜2022年の日付が確認できるものを含む）では「普通に美味しい」という声がある一方、不満は「薄味」「量が少ない」「温めムラ」が中心です。そのブログの筆者は、ストレートに「まずい」とする口コミはほとんどなかったと書いています。当サイトは実食していません。",
  },
  {
    question: "どんな食事療法に対応していますか？",
    answer:
      "公式によると、ヘルシー食（糖尿病・脂質異常症・高血圧・痛風の方向け、メタボ対策、ダイエット）、ヘルシー食多め、低たんぱく食（腎臓病・糖尿病性腎症）、やわらか食（咀嚼・嚥下が難しい方向け）などがあります（2026年11月4日 公式サイト確認）。",
  },
  {
    question: "栄養士に相談できますか？費用は？",
    answer:
      "できます。公式に「栄養相談の費用は無料です」と明記され、追加料金は不要、回数の制限もないとされています。公式のオンラインショップには「管理栄養士もしくは栄養士がお電話でご注文を承ります」とあります。電話の受付は平日9時〜17時15分です（2026年11月4日 公式サイト確認）。",
  },
  {
    question: "何食から頼めますか？",
    answer:
      "商品番号が赤色のマークの商品は7商品以上の組み合わせで、緑色のマークの商品は1商品から注文できます。定期便（栄養士おまかせ定期便）は毎週または隔週で、1回7食以上です（2026年11月4日 公式サイト確認）。",
  },
];

const PRICES = [
  { type: "ヘルシー食", item: "おかず", normal: "646円", net: "626円", spec: "塩分2.0g未満・300kcal未満" },
  { type: "ヘルシー食", item: "ごはん付", normal: "700円", net: "679円", spec: "塩分2.0g未満・500kcal未満" },
  { type: "ヘルシー食多め", item: "おかず", normal: "744円", net: "721円", spec: "塩分2.0g未満・350kcal程度・300g以上" },
  { type: "ヘルシー食多め", item: "ごはん付", normal: "808円", net: "783円", spec: "塩分2.0g未満・600kcal程度・400g以上" },
  { type: "低たんぱく食", item: "おかず", normal: "646円", net: "626円", spec: "たんぱく質10.0g未満・塩分2.0g未満" },
  { type: "低たんぱく食", item: "ごはん付", normal: "862円", net: "836円", spec: "たんぱく質10.0g未満・塩分2.0g未満" },
  { type: "やわらか食", item: "おかず", normal: "690円", net: "669円", spec: "咀嚼・嚥下が難しい方向け" },
  { type: "やわらか食", item: "ごはん付", normal: "733円", net: "711円", spec: "塩分2.0g未満・500kcal未満" },
  { type: "パワーアップ食", item: "ごはん付", normal: "830円", net: "805円", spec: "たんぱく質22.7g以上・塩分2.0g未満" },
];

const PLANS = [
  { cycle: "毎週7食（夜のみ）", type: "ヘルシー食・ごはん付", month: "約19,600円", unit: "700円" },
  { cycle: "毎週14食（昼・夜）", type: "低たんぱく食・おかず", month: "約36,176円", unit: "646円" },
  { cycle: "隔週14食（昼のみ）", type: "低たんぱく食・ごはん付", month: "約24,136円", unit: "862円" },
  { cycle: "毎週21食（朝・昼・夜）", type: "ヘルシー食・おかず", month: "約54,264円", unit: "646円" },
];

const REVIEW_TRENDS = [
  {
    topic: "味",
    good: "透析患者向けの宅配弁当が届いたけど普通に美味しい。これやったら苦痛なく続けていけそうや",
    goodMeta: "SNS投稿・2021年1月",
    bad: "ミールタイムさんから頂いたサンプルを試食しました。1食2g以下の塩分量なんですが、味の薄さに無言になっていくスタッフもいました",
    badMeta: "クリニックのSNS投稿・2021年6月",
    note: "公式の基準は全商品で塩分2.0g未満です。薄いと感じるかどうかは、普段の食事の塩分で変わります。",
  },
  {
    topic: "量",
    good: "量は少ないですが慣れるとこれで十分。",
    goodMeta: "SNS投稿",
    bad: "お夕飯はミールタイムの冷凍低カロリー弁当をチンして食べたんやけど、物足りひん。",
    badMeta: "SNS投稿",
    note: "ヘルシー食はおかず300kcal未満です。量が気になる場合は、おかず300g以上・ごはん付400g以上のヘルシー食多めがあります。",
  },
  {
    topic: "温め",
    good: "全然薄味に思えない味付けでめちゃくちゃ美味しかったです！",
    goodMeta: "管理栄養士のSNS投稿・2020年12月",
    bad: "主菜は規程の時間温めても冷たいので別で長めに温めた方がいいと思いました！",
    badMeta: "同じ投稿の続き",
    note: "容器が大きく端まで温まりにくいという投稿もあります。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: ARTICLE_TITLE,
      description: ARTICLE_DESCRIPTION,
      url: ARTICLE_URL,
      datePublished: "2026-09-18T00:00:00+09:00",
      dateModified: "2026-11-04T00:00:00+09:00",
      author: { "@type": "Organization", name: "宅食びより編集部" },
      publisher: { "@type": "Organization", name: "宅食びより" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqData.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
        { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介" },
        { "@type": "ListItem", position: 3, name: "ミールタイムの口コミ・料金", item: ARTICLE_URL },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-3xl px-5 py-10">
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-seigen.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-seigen-m.webp)" }}>
        <nav aria-label="パンくずリスト" className="text-xs text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><Link href="/articles/#guide" className="text-foreground/70 hover:underline">選び方・使い方・サービス紹介</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">ミールタイムの口コミ・料金</span></li>
          </ol>
        </nav>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold leading-relaxed">
          ミールタイムの口コミ・評判と料金｜1食646円〜、送料と栄養相談を公式で確認
        </h1>
        <p className="mt-3 text-xs text-gray-500">最終更新：{CHECKED}／料金は公式サイトで確認。口コミは出典を明記</p>
        </div>{/* /subhead */}

        <div className="mt-6 rounded-xl border-l-4 border-accent bg-cream p-5">
          <p className="text-sm font-bold mb-2">料金の早見表（1食あたり）</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white">
              <thead>
                <tr>
                  <th className="border p-2 text-left whitespace-nowrap">区分</th>
                  <th className="border p-2 text-left whitespace-nowrap">通常価格</th>
                  <th className="border p-2 text-left whitespace-nowrap">ネット価格</th>
                  <th className="border p-2 text-left">公式の基準</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.map((p) => (
                  <tr key={`${p.type}${p.item}`}>
                    <th className="border p-2 text-left font-bold whitespace-nowrap">{p.type} {p.item}</th>
                    <td className="border p-2 whitespace-nowrap font-bold">{p.normal}</td>
                    <td className="border p-2 whitespace-nowrap">{p.net}</td>
                    <td className="border p-2">{p.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            <li>・<strong>送料</strong>：冷凍950円・常温740円。温度帯ごとの合計が<strong>4,980円以上で無料</strong>です。</li>
            <li>・<strong>口コミ</strong>：「普通に美味しい」という声がある一方、不満は<strong>薄味・量・温めムラ</strong>に集まっています（<a href="#kuchikomi" className="text-accent underline">口コミの傾向へ</a>）。</li>
            <li>・<strong>栄養相談</strong>：無料で、回数の制限もありません。</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">
            出典：<a href="https://www.mealtime.jp/shop" target="_blank" rel="noopener noreferrer" className="underline">ミールタイム オンラインショップ</a>の商品ページ・<a href="https://www.mealtime.jp/shop/freight" target="_blank" rel="noopener noreferrer" className="underline">送料について</a>・<a href="https://www.mealtime.jp/service" target="_blank" rel="noopener noreferrer" className="underline">サービス</a>（{CHECKED} 確認）。価格は区分ごとの先頭10商品で同額であることを確認しました。公式の販売ページに税込・税別の記載は見当たりませんでした。最新の価格は公式サイトでご確認ください。
          </p>
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">どんな人向けのサービスか</h2>
        <p className="mt-4 text-sm leading-relaxed">
          当サイトで扱っている多くの宅配弁当は、「手軽さ」「低糖質」「価格」で選ばれます。
          ミールタイムはそこではなく、<strong>医師から食事制限を指示された人</strong>が主な対象です。
          公式が挙げている主な区分は次のとおりです。
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          <li>・<strong>ヘルシー食</strong>：糖尿病、脂質異常症、高血圧、痛風の方向け、メタボ対策、ダイエット</li>
          <li>・<strong>ヘルシー食多め</strong>：上記の分量を増やしたもの</li>
          <li>・<strong>低たんぱく食</strong>：腎臓病食、糖尿病性腎症食向け</li>
          <li>・<strong>やわらか食</strong>：咀嚼・嚥下が難しい方向け</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed">
          とくに<strong>低たんぱく食を扱っている点</strong>は、宅配弁当全体のなかでは多数派ではありません。
          腎臓病の食事管理は自炊の負担が大きく、たんぱく質・塩分・カリウムを同時に見る必要があるため、
          既製品で条件を満たせること自体に価値があります。
        </p>

        <h2 id="price" className="mt-10 text-xl font-bold border-b pb-2 scroll-mt-20">定期便の料金（公式サイトのプラン例）</h2>
        <p className="mt-4 text-sm leading-relaxed">
          担当の栄養士がメニューを選ぶ<strong>「栄養士おまかせ定期便」</strong>について、公式は利用パターンごとの月額を例示しています。
          自分で商品を選ぶ場合は、冒頭の早見表の価格で注文します。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cream">
                <th className="border p-2 text-left">利用パターン</th>
                <th className="border p-2 text-left">種類</th>
                <th className="border p-2 text-left whitespace-nowrap">月額の目安</th>
                <th className="border p-2 text-left whitespace-nowrap">1食あたり</th>
              </tr>
            </thead>
            <tbody>
              {PLANS.map((p) => (
                <tr key={p.cycle}>
                  <th className="border p-2 text-left font-bold">{p.cycle}</th>
                  <td className="border p-2">{p.type}</td>
                  <td className="border p-2 whitespace-nowrap">{p.month}</td>
                  <td className="border p-2 whitespace-nowrap font-bold">{p.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">出典：ミールタイム 公式サイト（{CHECKED} 確認）</p>
        <p className="mt-4 text-sm leading-relaxed">
          4例とも<strong>「1食の通常価格×食数」の計算と一致</strong>するため、月額の目安に送料は含まれていないと読めます。
          1食の価格は区分で決まり、食数を増やしても下がりません。
          毎週7食・ごはん付は1回4,900円で4,980円に届きません。定期便に同じ送料の規定が適用されるかは公式に明記が見当たらなかったため、申込時に確認してください。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          定期便の開始には電話または連絡フォームから連絡します。公式の流れでは、疾病や検査結果の聞き取り、申込書の返送、担当栄養士の確認を経てお届けが始まり、各段階の間隔は約1週間と案内されています。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">栄養士の相談が無料、という点</h2>
        <p className="mt-4 text-sm leading-relaxed">
          公式に「栄養相談の費用は無料です」と明記され、追加料金は不要、回数の制限もないとされています。オンラインショップには「管理栄養士もしくは栄養士がお電話でご注文を承ります」とあります。受付は平日9時〜17時15分です。運営は<strong>株式会社ファンデリー</strong>です。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          食事療法は、<strong>指示された数値をどう日常に落とすか</strong>で迷うことが多い領域です。
          「たんぱく質1日◯g」と言われても、弁当を選ぶときに何を見ればよいのかは別の知識が要ります。
          そこを相談できる窓口が料金の中にあるかどうかは、味や価格とは別の軸で効いてきます。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          ただし、<strong>相談は医師の指示に代わるものではありません</strong>。
          制限の数値そのものは主治医の指示に従ってください。
        </p>

        <h2 id="shipping" className="mt-10 text-xl font-bold border-b pb-2 scroll-mt-20">送料と注文単位</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cream">
                <th className="border p-2 text-left whitespace-nowrap">温度帯</th>
                <th className="border p-2 text-left">4,980円未満</th>
                <th className="border p-2 text-left">4,980円以上</th>
              </tr>
            </thead>
            <tbody>
              <tr><th className="border p-2 text-left font-bold">冷凍</th><td className="border p-2">950円</td><td className="border p-2">無料</td></tr>
              <tr><th className="border p-2 text-left font-bold">常温</th><td className="border p-2">740円</td><td className="border p-2">無料</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed">
          判定は<strong>温度帯ごと</strong>です。冷凍3,000円分と常温3,000円分を同時に頼むと、両方に送料がかかり計1,690円になります（公式の例）。
          インターネット注文はインターネット価格で判定されます。
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          ヘルシー食おかず（ネット626円）で計算すると、7食は4,382円＋送料950円で5,332円、8食は5,008円で送料無料です。<strong>8食のほうが総額は安くなります</strong>（公式の価格からの当サイトの計算）。
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          <li>・<strong>注文単位</strong>：商品番号が赤色のマークの商品は7商品以上の組み合わせ、緑色のマークの商品は1商品から</li>
          <li>・<strong>定期便</strong>：毎週または隔週、1回7食以上</li>
          <li>・<strong>お届け</strong>：ヤマト運輸。平日13時までの注文は最短で翌日午前（地域により異なります）</li>
          <li>・<strong>支払い</strong>：代金引換（手数料330円・現金のみ）、クレジットカード（一括）、PayPay（インターネット注文のみ）</li>
        </ul>
        <p className="mt-3 text-xs text-gray-500">
          出典：ミールタイム <a href="https://www.mealtime.jp/shop/freight" target="_blank" rel="noopener noreferrer" className="underline">送料について</a>・<a href="https://www.mealtime.jp/shop/guide/item" target="_blank" rel="noopener noreferrer" className="underline">商品の補足情報</a>・<a href="https://www.mealtime.jp/shop/guide/deliver" target="_blank" rel="noopener noreferrer" className="underline">お届けについて</a>・<a href="https://www.mealtime.jp/shop/guide" target="_blank" rel="noopener noreferrer" className="underline">お支払いについて</a>（{CHECKED} 確認）。
          送料まで含めた他社との比べ方は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">料金白書</Link>にまとめています。
        </p>

        <h2 id="kuchikomi" className="mt-10 text-xl font-bold border-b pb-2 scroll-mt-20">口コミ・評判の傾向（出典付き）</h2>
        <p className="mt-4 text-sm leading-relaxed">
          第三者ブログ「こせたん宅配弁当」が引用しているSNS投稿から、味・量・温めの声を整理しました。
          同ブログの筆者は「ミールタイムはまずい！」といったストレートに悪い口コミは、探した限りほとんどなかったと書いています。
        </p>
        <div className="mt-4 space-y-3">
          {REVIEW_TRENDS.map((r) => (
            <div key={r.topic} className="rounded-lg border p-4 text-sm leading-relaxed">
              <p className="font-bold mb-2">{r.topic}</p>
              <p className="mb-1">良い声：「{r.good}」（{r.goodMeta}）</p>
              <p className="mb-2">気になる声：「{r.bad}」（{r.badMeta}）</p>
              <p className="text-gray-700">{r.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-500">
          出典：<a href={REVIEW_SOURCE} target="_blank" rel="noopener noreferrer nofollow" className="underline">こせたん宅配弁当「ミールタイムがまずい理由と美味しい理由」</a>（2023年6月掲載・{CHECKED} 閲覧）に引用された投稿。投稿の時点は表記のとおりで、現在のメニューとは異なる場合があります。同記事の価格・送料は当時のものです。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          公式サイトの「数値改善レポート」は運営側が掲載している事例で、同じ結果を保証するものではありません。
          当サイトは実食をしておらず、味の評価は上記の出典の範囲にとどめています。
          方針は<Link href="/methodology/" className="text-accent underline">評価方法</Link>に記載しています。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">よくある質問</h2>
        <div className="mt-4 space-y-4">
          {faqData.map((f) => (
            <div key={f.question} className="rounded-lg border p-4">
              <p className="font-bold text-sm">{f.question}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{f.answer}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">関連記事</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>・<Link href="/articles/takuhai-cook123-kuchikomi/" className="text-accent underline">宅配クック123（高齢者向け・配達料無料・安否確認つき）</Link></li>
          <li>・<Link href="/articles/medimeal-kuchikomi/" className="text-accent underline">メディミールの評判（食事制限向け）</Link></li>
          <li>・<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅配弁当の料金白書（送料込みで比較）</Link></li>
        </ul>
      </article>
    </>
  );
}
