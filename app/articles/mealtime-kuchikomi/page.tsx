import type { Metadata } from "next";
import Link from "next/link";

/*
  ミールタイム（株式会社ファンデリー）の受け皿ページ。
  ⚠️ 作った理由: 中小ブランド×口コミ面が当サイトの勝ち型。
     「食事療法（腎臓病・糖尿病）× 管理栄養士に無料相談」という軸は既存58記事に無い。
  ⚠️ 数値は 2026-09-18 に公式（mealtime.jp）で確認したもののみ。
  🚨 公式に「1食いくら」の単価表が無く、掲載されているのは**プラン例の月額と1食あたり**。
     そこで単価表を作らず、**公式の例示をそのまま**載せる。表を自作すると事実でなくなる。
  ⚠️ 送料は「4,980円以上（温度帯別）で送料無料」とあるが、**無料でない場合の金額が公式に無い**。
     金額を推測で書かない。
*/

const ARTICLE_TITLE =
  "ミールタイムの料金・送料・管理栄養士の無料相談を公式情報で整理｜腎臓病食と糖尿病食の宅配【2026年9月最新】";
const ARTICLE_DESCRIPTION =
  "ミールタイム（株式会社ファンデリー）は、ヘルシー食・低たんぱく食・やわらか食を扱う食事療法向けの宅配食です。公式のプラン例では1食646〜862円（税込）。管理栄養士への栄養相談が無料で、4,980円以上で送料無料と記載されています。公式で確認できた内容と、確認できなかった点をそのまま整理しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mealtime-kuchikomi/";
const CHECKED = "2026年9月18日";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ミールタイム, ミールタイム 料金, ミールタイム 口コミ, ミールタイム 評判, 腎臓病食 宅配, 低たんぱく食 宅配, 糖尿病食 宅配, ファンデリー",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-09-18T00:00:00+09:00",
    modifiedTime: "2026-09-18T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "ミールタイムの料金はいくらですか？",
    answer:
      "公式サイトはプラン例の形で料金を示しています。毎週7食（夜のみ・ヘルシー食ごはん付）で月約19,600円＝1食700円、毎週14食（昼夜・低たんぱく食おかず）で月約36,176円＝1食646円、隔週14食（昼のみ・低たんぱく食ごはん付）で月約24,136円＝1食862円、毎週21食（朝昼夜・ヘルシー食おかず）で月約54,264円＝1食646円です（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "どんな食事療法に対応していますか？",
    answer:
      "公式によると、ヘルシー食（糖尿病食・脂質異常食・高血圧食・痛風・メタボ対策・ダイエット向け）、ヘルシー食多め、低たんぱく食（腎臓病食・糖尿病性腎症食向け）、やわらか食（咀嚼や嚥下が難しい方向け）の4系統です（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "管理栄養士に相談できますか？費用は？",
    answer:
      "できます。公式に「栄養相談の費用は無料です」と明記されています。食事療法は自己判断で進めにくい領域なので、相談窓口が料金に含まれているかどうかは他社と比べる際のポイントになります（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "送料はいくらかかりますか？",
    answer:
      "公式には「4,980円以上（温度帯別）で送料無料」と記載されています。ただし、この金額に満たない場合の送料がいくらなのかは公式サイト上に見当たりませんでした。当サイトでは推測で金額を書かないため、注文時に確認してください（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "何食から頼めますか？",
    answer:
      "公式のプラン例は7食・14食・21食の週単位（毎週または隔週）で構成されています。また一部の商品には「7食以上」という条件が付くと記載されています。最小単位の詳細は注文ページで確認してください（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "ミールタイムの口コミ・評判はどうですか？",
    answer:
      "当サイトでは、出典を確認できるミールタイムの口コミをまだ収集できていません。編集部による実食レビューも実施していないため、味や満足度についての評価は掲載していません。確認できた事実だけを載せる方針のため、口コミが集まり次第このページに追記します。",
  },
];

const PLANS = [
  { cycle: "毎週7食（夜のみ）", type: "ヘルシー食・ごはん付", month: "約19,600円", unit: "700円" },
  { cycle: "毎週14食（昼・夜）", type: "低たんぱく食・おかず", month: "約36,176円", unit: "646円" },
  { cycle: "隔週14食（昼のみ）", type: "低たんぱく食・ごはん付", month: "約24,136円", unit: "862円" },
  { cycle: "毎週21食（朝・昼・夜）", type: "ヘルシー食・おかず", month: "約54,264円", unit: "646円" },
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
      dateModified: "2026-09-18T00:00:00+09:00",
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
        { "@type": "ListItem", position: 2, name: "ミールタイムの料金と栄養相談", item: ARTICLE_URL },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-3xl px-5 py-10">
        <nav className="text-xs text-gray-500">
          <Link href="/" className="hover:underline">ホーム</Link>
        </nav>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold leading-relaxed">
          ミールタイムの料金・送料・管理栄養士の無料相談を公式情報で整理
        </h1>
        <p className="mt-3 text-xs text-gray-500">最終更新：{CHECKED}／公式サイトで確認した情報のみ掲載</p>

        <div className="mt-6 rounded-xl border-l-4 border-accent bg-cream p-5">
          <p className="text-sm font-bold mb-2">先に結論</p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>・<strong>食事療法に振り切ったサービス</strong>です。糖尿病食・腎臓病食（低たんぱく食）・やわらか食が主軸で、一般的な「おいしい冷凍弁当」とは目的が違います。</li>
            <li>・公式のプラン例では<strong>1食646〜862円（税込）</strong>。おかずのみか、ごはん付きかで差が出ます。</li>
            <li>・<strong>管理栄養士への栄養相談が無料</strong>と明記されています。ここが最大の特徴です。</li>
            <li>・送料は<strong>4,980円以上（温度帯別）で無料</strong>。それ未満の送料額は公式に記載が見つかりませんでした。</li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">どんな人向けのサービスか</h2>
        <p className="mt-4 text-sm leading-relaxed">
          当サイトで扱っている多くの宅配弁当は、「手軽さ」「低糖質」「価格」で選ばれます。
          ミールタイムはそこではなく、<strong>医師から食事制限を指示された人</strong>が主な対象です。
          公式が挙げている対応領域は次のとおりです。
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          <li>・<strong>ヘルシー食</strong>：糖尿病食、脂質異常食、高血圧食、痛風、メタボ対策、ダイエット向け</li>
          <li>・<strong>ヘルシー食多め</strong>：上記の分量を増やしたもの</li>
          <li>・<strong>低たんぱく食</strong>：腎臓病食、糖尿病性腎症食向け</li>
          <li>・<strong>やわらか食</strong>：咀嚼・嚥下が難しい方向け</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed">
          とくに<strong>低たんぱく食を扱っている点</strong>は、宅配弁当全体のなかでは多数派ではありません。
          腎臓病の食事管理は自炊の負担が大きく、たんぱく質・塩分・カリウムを同時に見る必要があるため、
          既製品で条件を満たせること自体に価値があります。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">料金（公式サイトのプラン例）</h2>
        <p className="mt-4 text-sm leading-relaxed">
          🚨 <strong>公式サイトには「1食いくら」の単価表がありません。</strong>
          掲載されているのは、利用パターンごとの月額と1食あたりの例です。
          当サイトで単価表を作ると公式にない数字を提示することになるため、
          <strong>公式の例示をそのまま</strong>載せます。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cream">
                <th className="border p-2 text-left">利用パターン</th>
                <th className="border p-2 text-left">種類</th>
                <th className="border p-2 text-left whitespace-nowrap">月額（税込）</th>
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
          読み取れるのは、<strong>おかずのみ（646円）とごはん付き（700〜862円）で差が出る</strong>ことと、
          <strong>食数が増えるほど1食あたりが下がるわけではない</strong>ことです。
          隔週14食・昼のみ・ごはん付きの862円が最も高く、配送頻度と構成の組み合わせで単価が決まります。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">管理栄養士の相談が無料、という点</h2>
        <p className="mt-4 text-sm leading-relaxed">
          公式に「栄養相談の費用は無料です」と明記されています。運営は<strong>株式会社ファンデリー</strong>です。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          食事療法は、<strong>指示された数値をどう日常に落とすか</strong>で迷うことが多い領域です。
          「たんぱく質1日◯g」と言われても、弁当を選ぶときに何を見ればよいのかは別の知識が要ります。
          そこを相談できる窓口が料金の中にあるかどうかは、味や価格とは別の軸で効いてきます。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          ⚠️ ただし、<strong>相談は医師の指示に代わるものではありません</strong>。
          制限の数値そのものは主治医の指示に従ってください。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">送料と注文単位</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          <li>・送料は<strong>4,980円以上（温度帯別）で無料</strong>と記載</li>
          <li>・プランは<strong>7食・14食・21食</strong>の週単位（毎週／隔週）</li>
          <li>・一部商品に<strong>「7食以上」</strong>の条件あり</li>
          <li>・<strong>最短翌日配達</strong>、冷凍での保存に言及あり</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed">
          🚨 <strong>4,980円に満たない場合の送料額は、公式サイト上で見つけられませんでした。</strong>
          当サイトは金額を推測で書かない方針のため、ここは空欄のままにしています。
          注文前にご自身で確認してください。
          送料まで含めた他社との比べ方は
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">料金白書</Link>
          にまとめています。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">⚠️ 口コミを載せていない理由</h2>
        <p className="mt-4 text-sm leading-relaxed">
          当サイトは<strong>出典を確認できる口コミだけ</strong>を扱っています。
          ミールタイムについては未収集で、編集部による実食レビューも実施していません。
          そのため味や満足度の評価はこのページにありません。出所の分からない感想を並べることはしません。
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
