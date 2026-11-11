import type { Metadata } from "next";
import Link from "next/link";
import ServiceCapture from "@/components/ServiceCapture";

/*
  宅配クック123（株式会社シニアライフクリエイト）の受け皿ページ。
  ⚠️ 作った理由: 中小ブランド×口コミ面が当サイトの勝ち型（マイシィ pos7.6 CTR18.8%）。
     高齢者向け・安否確認つきという軸は既存58記事に無く、食い合わない。
  ⚠️ 数値は 2026-11-01 に公式（takuhaicook123.jp の /menu・/menu/<各メニュー>・/faq・/law・
     /about/order・/about/3minutes・/voice）で確認したもののみ（初版 2026-09-18）。
     当サイトは実食レビュー未実施。口コミは出典（サイト名・件数・URL）付きの第三者掲載分と、
     公式掲載の「お客様の声」（広告的な性格があると明記）だけを載せる。
  ⚠️ 価格は公式「お弁当の種類」に税込の一律表示（特商法も同ページを参照）。店舗別の価格表は無い。
     透析食は「一部取扱いの無い店舗」あり。支払い方法・自治体補助は店舗・地域で異なる。
  ⚠️ 対応エリア・店舗数は公式が「HP検索で」としており、数は「約350店舗（2023年7月現在）」の公式表記のみ。
  ⚠️ みん評（minhyo.jp/takuhaicook123）は 403 で読めず＝件数・評価は書かない。
*/

const ARTICLE_TITLE =
  "宅配クック123の料金はいくら？全9メニューの価格表（1食577円〜・配達料無料）と口コミ【2026年11月】";
const ARTICLE_H1 = "宅配クック123の料金はいくら？全9メニューの価格表と口コミ・安否確認";
const ARTICLE_DESCRIPTION =
  "宅配クック123の料金は普通食がごはん付き685円・おかずのみ577円、制限食は885円・777円（税込）です。2025年12月にごはんだけ値上げ（おかずは据え置き）。配達料・会費は無料で1食から注文可。全9メニューの価格、月額の目安、出典付きの口コミを2026年11月11日に公式で確認しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/takuhai-cook123-kuchikomi/";
const CHECKED = "2026年11月1日";
const PRICE_CHECKED = "2026年11月11日"; /* 料金表・価格改定は 11/11 に公式で再確認 */
const OFFICIAL = "https://takuhaicook123.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅配クック123, 宅配クック123 料金, 宅配クック123 値段, 宅配クック123 口コミ, 宅配クック123 評判, 宅配クック123 配達料, 高齢者 宅配弁当, 安否確認 弁当, 透析食 宅配",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-09-18T00:00:00+09:00",
    modifiedTime: "2026-11-11T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "宅配クック123の料金はいくらですか？",
    answer:
      "普通食がごはん付き685円・おかずのみ577円（税込）です。幸たんぱく食は724円／616円、健康ボリューム食は788円／680円です。カロリー・塩分調整食、たんぱく・塩分調整食、透析食、消化にやさしい食、やわらか食、ムースセット食は885円／777円です（2026年11月1日 公式サイト確認）。",
  },
  {
    question: "宅配クック123は値上げしましたか？",
    answer:
      "公式の新着情報（2025年12月23日掲載）によると、2025年12月1日お届け分から、ごはん・おかゆの単品価格を65円（税抜）から100円（税抜）に改定しています。おかずの価格は変わっておらず、ごはん付きの価格が普通食で648円から685円になるなど、各メニューで37〜38円上がりました。これ以外の価格改定のお知らせは公式に掲載されていません（2026年11月11日 公式サイト確認）。",
  },
  {
    question: "店舗によって料金は違いますか？",
    answer:
      "公式サイトの価格は全国共通の税込表示で、特定商取引法に基づく表示も「販売価格は『お弁当の種類』ページに税込価格で表示」としています。店舗別の価格表は掲載されていません。ただし透析食は「一部取扱いの無い店舗」があり、支払い方法や市区町村の補助の扱いは店舗・地域によって異なります（2026年11月1日 公式サイト確認）。",
  },
  {
    question: "配達料や年会費はかかりますか？",
    answer:
      "かかりません。公式のよくある質問に「会費とか配達料とかかかるの？ いいえ。お弁当代のみです。」と記載されており、特定商取引法に基づく表示でも送料は「無料」です。支払額は弁当代のみで、送料を別途加算する冷凍宅配弁当と比べて費用の見通しが立てやすい仕組みです（2026年11月1日 公式サイト確認）。",
  },
  {
    question: "1食だけ頼めますか？",
    answer:
      "頼めます。公式に「1食から配達可能でございます」「年齢制限や最低注文数等…特にございません」と記載されています。毎日・曜日指定・日にち指定のいずれでも注文できます（2026年11月1日 公式サイト確認）。",
  },
  {
    question: "無料試食はありますか？",
    answer:
      "あります。「65歳以上の方で初めてご注文の方のみ普通食を1食無料でご試食いただけます」と記載されており、Web注文ではキャンペーンコード欄に「初回無料試食希望」と入力します。年齢と初回の2つの条件があります（2026年11月1日 公式サイト確認）。",
  },
  {
    question: "支払い方法は？",
    answer:
      "公式の注文方法ページでは、毎回の現金払い、月1回または2回の現金まとめ払い、月1回の振込、口座振替（一部店舗）が案内されています。請求は各店舗から行われるため、Web注文の画面には支払い方法の選択がありません。弁当の届け先と請求先を別にすることも可能です（2026年11月1日 公式サイト確認）。",
  },
  {
    question: "何時に届きますか？いつまでに食べればいいですか？",
    answer:
      "時間指定はできず、昼食は12時まで、夕食は18時までに届けると公式に記載されています。常温で届き、昼食は14時頃まで、夕食は20時頃までに食べるよう案内されています。温める場合は蓋を外して電子レンジで40〜60秒程度です（やわらか食・ムースセット食は温め不可）（2026年11月1日 公式サイト確認）。",
  },
  {
    question: "安否確認（見守り）はしてもらえますか？",
    answer:
      "手渡しが基本で、公式には「もしチャイムを鳴らしても反応がない場合には事前に取決めた緊急連絡先へご連絡いたします」と記載されています。毎回の声かけで変化に気付いた場合はケアマネジャーや家族に連絡するとも書かれています。ただし外出の習慣や利用者の要望などで履行できない場合がある、との注記があります（2026年11月1日 公式サイト確認）。",
  },
  {
    question: "土日祝も届きますか？キャンセルはいつまで？",
    answer:
      "土日祝日も配達し、休みは正月3が日（1月1日〜3日）のみです。注文・キャンセル・変更は「前日の17時まで担当店舗にて受付」と記載されています。電話・FAX・Webで受け付けています（2026年11月1日 公式サイト確認）。",
  },
  {
    question: "宅配クック123の口コミ・評判はどうですか？",
    answer:
      "みんなのランキングには3件（3人の評価・最高評価56.5点、2026年11月1日確認）の口コミがあり、「高齢者にとってちょうどいい量、味付けで食べやすい」「送料が無料」「土日も対応」が評価され、薄味・やわらかめが好みに合わないという声もあります。ROOMIEは口コミを「ポジティブな意見が大半」とまとめています。当サイトは実食レビューを実施していません。",
  },
];

const MENU = [
  { name: "普通食", rice: "685円", okazu: "577円", spec: "塩分3.0g以下。ごはん170g付きで430〜600kcal", note: "主菜＋4種類のおかず。無料試食の対象" },
  { name: "幸（しあわせ）たんぱく食", rice: "724円", okazu: "616円", spec: "たんぱく質20g以上（ごはん170g含む）・塩分3.0g以下", note: "たんぱく質をしっかり摂りたい方向け" },
  { name: "健康ボリューム食", rice: "788円", okazu: "680円", spec: "塩分3.0g以下（1か月平均）", note: "普通食では物足りない方向け" },
  { name: "カロリー・塩分調整食", rice: "885円", okazu: "777円", spec: "おかずのみ約240kcal・塩分2g未満", note: "エネルギー・塩分の調整が必要な方向け" },
  { name: "たんぱく・塩分調整食", rice: "885円", okazu: "777円", spec: "たんぱく質14.3g以下・塩分2.0g未満。カリウム・リンも調整", note: "たんぱく質・塩分の制限がある方向け" },
  { name: "透析食", rice: "885円", okazu: "777円", spec: "塩分2.0g未満。リン・カリウムを調整", note: "透析治療中の方向け。一部取扱いの無い店舗あり" },
  { name: "消化にやさしい食", rice: "885円", okazu: "777円", spec: "塩分2.0g未満", note: "消化機能が弱っている方・術後の自宅療養向け" },
  { name: "やわらか食", rice: "885円", okazu: "777円", spec: "塩分3.0g以下。歯茎と舌でつぶせるやわらかさ", note: "かむ力が弱ってきた方向け" },
  { name: "ムースセット食", rice: "885円", okazu: "777円", spec: "おかずのみ280kcal以上・たんぱく質14g以上・塩分2.0g未満", note: "かむ力・飲み込む力が弱ってきた方向け" },
];

/* 2025-12-01 の「ごはん・おかゆ」価格改定（公式 /topic/detail/256）。改定前は Wayback 20251009230139 の /menu、
   現在は 2026-11-11 の公式 /menu。おかずのみは据え置き（Wayback と現在で同額）。 */
const PRICE_REVISION = [
  { name: "普通食", before: "648円", after: "685円", okazu: "577円（変更なし）" },
  { name: "幸たんぱく食", before: "686円", after: "724円", okazu: "616円（変更なし）" },
  { name: "健康ボリューム食", before: "750円", after: "788円", okazu: "680円（変更なし）" },
  { name: "制限食など6メニュー", before: "847円", after: "885円", okazu: "777円（変更なし）" },
];

/* 月額の目安（当サイトの算出。公式価格×食数。配達料・会費は無料なので加算なし） */
const MONTHLY = [
  { plan: "普通食・おかずのみ／夕食を週5日（4週）", calc: "577円×20食", total: "11,540円" },
  { plan: "普通食・ごはん付き／夕食を週5日（4週）", calc: "685円×20食", total: "13,700円" },
  { plan: "普通食・ごはん付き／夕食を毎日（30日）", calc: "685円×30食", total: "20,550円" },
  { plan: "普通食・ごはん付き／昼食と夕食を毎日（30日）", calc: "685円×60食", total: "41,100円" },
  { plan: "幸たんぱく食・ごはん付き／夕食を週5日（4週）", calc: "724円×20食", total: "14,480円" },
  { plan: "制限食（885円の6メニュー）・ごはん付き／夕食を週5日（4週）", calc: "885円×20食", total: "17,700円" },
];

type Review = { title: string; text: string; who: string; source: string; url: string; date?: string };

const REVIEWS_GOOD: Review[] = [
  {
    title: "食べやすさ抜群",
    text: "高齢者に配慮された食事内容になっており、高齢者にとってちょうどいい量、味付けで食べやすいと思います。また栄養もしっかり考えられていることも有り難いです。土日も対応されていてるので、頼みたいときに頼めるところもよいです。",
    who: "いぬこさん",
    source: "みんなのランキング「宅配クック123」",
    url: "https://ranking.net/items/4401e9",
  },
  {
    title: "口コミのまとめ（専門家監修のランキング記事）",
    text: "口コミでは「彩りがよく、毎日食べても飽きない」「イカフライもやわらかくて食べやすい」「制限食でも旬の味が楽しめる」など、ポジティブな意見が大半でした。",
    who: "ROOMIE編集部（高齢者向け宅配弁当ランキングで1位）",
    source: "ROOMIE",
    url: "https://www.roomie.jp/2024/04/1202236/",
    date: "2024年8月29日更新",
  },
];

const REVIEWS_MIXED: Review[] = [
  {
    title: "高齢者向け専用？の宅配弁当",
    text: "味付けは高齢者向けのうす味。おかずは全体的にやわらかめ。うすめ/やわらかめが好きな人でないと、ちと不満に感じるかもしれません。ただ、味付けの好みが合えば、とてもありがたいお弁当屋さんです。",
    who: "こせたんさん（宅配弁当ライター・食生活アドバイザー）",
    source: "みんなのランキング「宅配クック123」",
    url: "https://ranking.net/items/4401e9",
  },
  {
    title: "味はちょっと... 値段は良い‼",
    text: "全体的に柔らかめだし、味も薄かったです。（略）送料が無料で、全国に宅配されているところはとても良いところ！他のお弁当と比べてもお安い方ですしね。",
    who: "りあさん（ひいおばあさまの利用について）",
    source: "みんなのランキング「宅配クック123」",
    url: "https://ranking.net/items/4401e9",
  },
  {
    title: "ランキング記事の評価",
    text: "高齢者向けとはいえ、少し味が薄すぎる印象。量も少なめなので、量と味にこだわりがある人は物足りないかも。",
    who: "ciatr編集部",
    source: "ciatr",
    url: "https://ciatr.jp/topics/322387",
    date: "2022年12月25日更新",
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
      dateModified: "2026-11-11T00:00:00+09:00",
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
        { "@type": "ListItem", position: 3, name: "宅配クック123の料金と安否確認", item: ARTICLE_URL },
      ],
    },
  ],
};

function ReviewCard({ r, tone }: { r: Review; tone: "good" | "mixed" }) {
  return (
    <div className={`${tone === "good" ? "bg-green-50" : "bg-amber-50"} rounded-lg p-4 text-sm leading-relaxed`}>
      <p className="font-bold mb-1">{r.title}</p>
      <p className="mb-1.5">「{r.text}」</p>
      <p className="text-xs text-gray-500">
        {r.who}／出典:{" "}
        <a href={r.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">{r.source}</a>
        {r.date ? `（${r.date}）` : ""}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-3xl px-5 py-10">
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-koureisha-a.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-koureisha-a-m.webp)" }}>
        <nav aria-label="パンくずリスト" className="text-xs text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><Link href="/articles/#guide" className="text-foreground/70 hover:underline">選び方・使い方・サービス紹介</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">宅配クック123の料金と安否確認</span></li>
          </ol>
        </nav>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold leading-relaxed">
          {ARTICLE_H1}
        </h1>
        <p className="mt-3 text-xs text-gray-500">
          公開：<time dateTime="2026-09-18">2026年9月18日</time>／更新：<time dateTime="2026-11-11">{PRICE_CHECKED}</time>（料金と2025年12月の価格改定を公式サイトで再確認）
        </p>
        </div>{/* /subhead */}

        {/* 料金の答え（ファーストビュー） */}
        <section id="price" className="mt-6 rounded-xl border-2 border-accent/30 bg-white p-5">
          <h2 className="text-lg font-bold">結論：宅配クック123の料金は1食577円〜885円（税込）</h2>
          <p className="mt-2 text-sm leading-relaxed">
            普通食は<strong>ごはん付き685円／おかずのみ577円</strong>です。配達料・会費はかからず、<strong>支払いは弁当代のみ</strong>です。
            価格は公式サイトに<strong>全国共通の税込価格</strong>で表示されており、店舗別の価格表はありません（{PRICE_CHECKED} 確認）。2025年12月1日に<a href="#price-revision" className="underline">ごはんの価格だけ改定</a>されています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cream">
                  <th className="border p-2 text-left">メニュー</th>
                  <th className="border p-2 text-left whitespace-nowrap">ごはん付き</th>
                  <th className="border p-2 text-left whitespace-nowrap">おかずのみ</th>
                  <th className="border p-2 text-left">公式の栄養基準（要点）</th>
                </tr>
              </thead>
              <tbody>
                {MENU.map((m) => (
                  <tr key={m.name}>
                    <th className="border p-2 text-left font-bold">{m.name}<span className="block text-xs font-normal text-gray-600">{m.note}</span></th>
                    <td className="border p-2 whitespace-nowrap">{m.rice}</td>
                    <td className="border p-2 whitespace-nowrap">{m.okazu}</td>
                    <td className="border p-2 text-gray-700">{m.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-3 space-y-1 text-xs text-gray-600 leading-relaxed">
            <li>※出典: <a href="https://takuhaicook123.jp/menu" target="_blank" rel="noopener noreferrer" className="underline">宅配クック123「お弁当の種類」</a>と各メニューのページ（{PRICE_CHECKED} 確認・税込）。特定商取引法に基づく表示も「販売価格は『お弁当の種類』ページに税込価格で表示」「送料 無料」としています。</li>
            <li>※店舗で違うもの: 透析食は「一部取扱いの無い店舗」があります。支払い方法（口座振替は一部店舗）と市区町村の補助の扱いは、店舗・地域ごとに異なります。</li>
            <li>※制限食は特別用途食品ではなく、公式は「医師または管理栄養士にご相談の上」の利用を案内しています。</li>
            <li>※他サイトには「普通食おかずのみ540円」「491円（税抜き）」の記載がありますが、{PRICE_CHECKED}時点の公式表示は577円（税込）です。</li>
          </ul>

          <div id="price-revision" className="mt-5 rounded-lg bg-cream p-4">
            <h3 className="text-base font-bold">値上げはあった？ 2025年12月1日に「ごはん・おかゆ」が改定（おかずは据え置き）</h3>
            <p className="mt-2 text-sm leading-relaxed">
              公式の新着情報（2025年12月23日掲載）によると、米価格の高騰を理由に<strong>2025年12月1日お届け分から、ごはん・おかゆの単品価格を65円（税抜）→100円（税抜）</strong>に改定しています。
              公式は「お弁当の『おかず』の価格に変更はございません」としており、<strong>値上がりしたのは「ごはん付き」の価格だけ</strong>です。
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-cream">
                    <th className="border p-2 text-left">メニュー（ごはん付き・税込）</th>
                    <th className="border p-2 text-left whitespace-nowrap">改定前</th>
                    <th className="border p-2 text-left whitespace-nowrap">現在</th>
                    <th className="border p-2 text-left whitespace-nowrap">おかずのみ</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_REVISION.map((r) => (
                    <tr key={r.name}>
                      <th className="border p-2 text-left font-bold">{r.name}</th>
                      <td className="border p-2 whitespace-nowrap">{r.before}</td>
                      <td className="border p-2 whitespace-nowrap font-bold">{r.after}</td>
                      <td className="border p-2 whitespace-nowrap">{r.okazu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-3 space-y-1 text-xs text-gray-600 leading-relaxed">
              <li>※出典: <a href="https://takuhaicook123.jp/topic/detail/256" target="_blank" rel="noopener noreferrer" className="underline">宅配クック123「『ごはん・おかゆ』の価格改定について」</a>（2025年12月23日掲載・{PRICE_CHECKED} 確認）。「改定前」は公式「お弁当の種類」ページのインターネットアーカイブ（2025年10月9日取得）の表示、「現在」は{PRICE_CHECKED}の公式表示です。</li>
              <li>※公式の新着情報（{PRICE_CHECKED}時点で2025年8月〜2026年11月分）に、これ以外の価格改定のお知らせはありません。公式は詳細を「各店舗へお問い合わせください」としています。</li>
            </ul>
          </div>
        </section>

        <div className="mt-6 rounded-xl border-l-4 border-accent bg-cream p-5">
          <p className="text-sm font-bold mb-2">この記事の要点</p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>・<strong>配達料・年会費が無料</strong>。弁当代だけで完結するので、送料を足して計算する必要がありません。</li>
            <li>・<strong>1食から頼めます</strong>。毎日・曜日指定・日にち指定のいずれでも注文できます。</li>
            <li>・常温の作りたてを<strong>手渡しで届け、応答がなければ事前に決めた緊急連絡先に連絡</strong>する仕組みです。見守りを兼ねたい場合の判断材料になります。</li>
            <li>・月額の目安は、普通食ごはん付きを夕食に週5日で<strong>約13,700円</strong>です（当サイトの算出）。</li>
            <li>・無料試食は<strong>65歳以上かつ初回の方のみ</strong>、普通食1食です。</li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">まず、他社と何が違うのか</h2>
        <ServiceCapture id="cook123" />{/* svc-cap-202610 */}
        <p className="mt-4 text-sm leading-relaxed">
          当サイトで扱っている宅配食の多くは、<strong>冷凍でまとめて届き、送料が別にかかる</strong>タイプです。
          宅配クック123はそこが違います。地域の担当店舗が昼食・夕食をその日に<strong>常温で</strong>手渡しする形で、
          <strong>配達料がかからず、1食から頼めます</strong>。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          公式によると、1999年から高齢者専門の宅配弁当として展開し、<strong>国内約350店舗・月間約300万食の配食実績・約450以上の行政から配食業務を受託</strong>しています（いずれも公式表記・2023年7月現在）。
          冷凍庫にストックして好きなときに食べたい人には冷凍タイプが向き、
          毎日決まった時間に届けてほしい、冷凍庫に空きがない、という場合はこちらが向きます。
        </p>

        <h2 id="monthly" className="mt-10 text-xl font-bold border-b pb-2">月額はいくらかかる？利用パターン別の目安</h2>
        <p className="mt-4 text-sm leading-relaxed">
          配達料・会費がないため、<strong>月額は「1食の価格×食数」</strong>で決まります。公式価格から当サイトで算出した目安は次のとおりです。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cream">
                <th className="border p-2 text-left">利用パターン</th>
                <th className="border p-2 text-left whitespace-nowrap">計算</th>
                <th className="border p-2 text-left whitespace-nowrap">月額の目安（税込）</th>
              </tr>
            </thead>
            <tbody>
              {MONTHLY.map((m) => (
                <tr key={m.plan}>
                  <td className="border p-2">{m.plan}</td>
                  <td className="border p-2 whitespace-nowrap">{m.calc}</td>
                  <td className="border p-2 whitespace-nowrap font-bold">{m.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          ※公式価格（{CHECKED} 確認）に食数を掛けた当サイトの算出値で、公式の試算ではありません。市区町村の配食サービスの補助が使える場合は負担が変わります（公式FAQ「お住まいの地域により条件等が異なりますので、まずは配達店舗までご相談ください」）。
          送料まで含めた他社との比べ方は
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">料金白書</Link>
          で整理しています。
        </p>

        <h3 className="mt-6 text-lg font-bold">朝食・追加メニューの料金</h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed">
          <li>・朝食のパン単品<strong>205円</strong>、ドリンク単品<strong>160円</strong>、パン＋ドリンクのセット<strong>355円</strong>（単品合計より10円安い・税込）</li>
          <li>・朝食と栄養補助食品は「昼食・夕食をご利用の方が対象」で、朝食は昼食・夕食と一緒に届くため単品の注文はできません</li>
          <li>・アレルギー食材を含む献立の差し替え、おかゆ・刻みへの対応は無料です（一部対応できない場合あり）</li>
        </ul>
        <p className="mt-3 text-xs text-gray-500">※出典: 宅配クック123「朝食」・よくあるご質問・3分でわかる123（{CHECKED} 確認）</p>

        <h2 id="reviews" className="mt-10 text-xl font-bold border-b pb-2">宅配クック123の口コミ・評判（出典付き）</h2>
        <p className="mt-4 text-sm leading-relaxed">
          第三者サイトに掲載されている口コミと評価を、出典付きで整理しました（引用は原文ママ。省略箇所は「（略）」）。
          当サイトは実食レビューを実施していません。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cream">
                <th className="border p-2 text-left">出典</th>
                <th className="border p-2 text-left">件数・評価</th>
                <th className="border p-2 text-left">評価されている点</th>
                <th className="border p-2 text-left">不満・注意点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2"><a href="https://ranking.net/items/4401e9" target="_blank" rel="noopener noreferrer nofollow" className="underline">みんなのランキング</a></td>
                <td className="border p-2">口コミ3件・3人の評価（最高評価56.5点）</td>
                <td className="border p-2">ちょうどいい量と味付けで食べやすい・栄養・送料無料・土日も対応・価格が安い方</td>
                <td className="border p-2">薄味・やわらかめが好みに合わない場合がある（3件中2件が言及）</td>
              </tr>
              <tr>
                <td className="border p-2"><a href="https://www.roomie.jp/2024/04/1202236/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ROOMIE</a>（2024年8月29日更新）</td>
                <td className="border p-2">高齢者向け宅配弁当ランキング1位（件数の記載なし）</td>
                <td className="border p-2">彩り・食べやすさ・制限食でも旬の味・手渡しの見守り・アレルギーや刻みへの個別対応</td>
                <td className="border p-2">記載なし</td>
              </tr>
              <tr>
                <td className="border p-2"><a href="https://ciatr.jp/topics/322387" target="_blank" rel="noopener noreferrer nofollow" className="underline">ciatr</a>（2022年12月25日更新）</td>
                <td className="border p-2">ランキング記事内の評価（件数の記載なし）</td>
                <td className="border p-2">作りたてが常温で届く・手渡しの安否確認</td>
                <td className="border p-2">味が薄すぎる印象・量が少なめ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          ※{CHECKED}に各ページで確認。口コミサイト「みん評」の宅配クック123のページは閲覧できなかったため（アクセス制限）、件数・評価は掲載していません。
        </p>

        <h3 className="mt-6 text-lg font-bold">良い口コミ</h3>
        <div className="mt-3 space-y-3">
          {REVIEWS_GOOD.map((r) => <ReviewCard key={r.title} r={r} tone="good" />)}
        </div>

        <h3 className="mt-6 text-lg font-bold">好みが分かれる点（薄味・やわらかめ・量）</h3>
        <div className="mt-3 space-y-3">
          {REVIEWS_MIXED.map((r) => <ReviewCard key={r.title} r={r} tone="mixed" />)}
        </div>
        <div className="mt-4 rounded-lg bg-cream p-4 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の見解</p>
          <p>
            薄味・やわらかめという指摘は、公式が「70歳以上の在宅のご高齢者の方を想定した栄養基準」「食べ残さない、ちょうどいい量目で食感、大きさ、味付けに工夫」と説明している設計どおりの特徴です。
            同じ点を「食べやすい」と評価する声もあり、評価は食べる人の年齢と好みで分かれます。量が気になる場合は<strong>健康ボリューム食（ごはん付き788円）</strong>、たんぱく質を補いたい場合は<strong>幸たんぱく食（724円）</strong>が公式の選択肢です。
          </p>
        </div>

        <h3 className="mt-6 text-lg font-bold">公式サイトに掲載されている「お客様の声」</h3>
        <p className="mt-3 text-sm leading-relaxed">
          公式の<a href="https://takuhaicook123.jp/voice" target="_blank" rel="noopener noreferrer" className="text-accent underline">お客様の声</a>には5件（うち1件はご家族）が掲載されています。運営会社が選んで載せている声のため、第三者の口コミとは分けて紹介します。
          内容は「配達員全員とてもはつらつとして元気な声で挨拶して下さる」「地震でガスが止まった時も調理して配達して下さって、とても助かりました」「前日までの急な注文、急な取り消しにも応じて下さるのは、助かります」など、<strong>配達時の声かけと見守り</strong>に関するものが中心です（{CHECKED} 確認）。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">安否確認の仕組み</h2>
        <p className="mt-4 text-sm leading-relaxed">
          公式には、弁当を<strong>手渡しで届けるのが基本</strong>であること、
          <strong>チャイムを鳴らしても反応がない場合は事前に取り決めた緊急連絡先へ連絡する</strong>こと、
          毎回の声かけで変化に気付いた際は必要に応じてケアマネジャーや家族に連絡することが記載されています。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          離れて暮らす家族の食事を用意したい、というときに求められるのは味や価格だけではありません。
          「当日に確実に受け取れたか」が分かる仕組みがあるかどうかで選ぶ場合、ここが判断材料になります。
          なお公式は、事前に店舗と打ち合わせれば不在時も配達できるとしており、外出の習慣や利用者の要望で安否確認が履行できない場合がある、とも注記しています。
          <strong>見守りを目的にするなら「手渡し」で依頼することを伝えておく</strong>必要があります。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">注文・お届け・支払いの条件</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">注文単位</th><td className="border p-2">1食から。毎日・曜日指定・日にち指定が可能。年齢制限・最低注文数なし</td></tr>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">注文方法</th><td className="border p-2">Web（郵便番号で担当店舗を検索して注文）・電話・FAX</td></tr>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">締切</th><td className="border p-2">注文・キャンセル・変更は前日17時まで（担当店舗）</td></tr>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">お届け時刻</th><td className="border p-2">時間指定不可。昼食は12時まで、夕食は18時まで</td></tr>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">温度帯・期限</th><td className="border p-2">常温。昼食は14時頃まで、夕食は20時頃までに食べる。持ち越しは不可</td></tr>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">温め</th><td className="border p-2">蓋を外して電子レンジで40〜60秒程度（やわらか食・ムースセット食は温め不可）</td></tr>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">容器</th><td className="border p-2">使い捨て（返却不要）</td></tr>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">休業日</th><td className="border p-2">正月3が日（1月1日〜3日）のみ。土日祝も配達</td></tr>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">支払い</th><td className="border p-2">毎回の現金払い・月1〜2回の現金まとめ払い・月1回の振込・口座振替（一部店舗）。請求は各店舗から。届け先と請求先を分けることも可能</td></tr>
              <tr><th className="border p-2 text-left bg-cream whitespace-nowrap">無料試食</th><td className="border p-2">65歳以上かつ初めての注文の方のみ、普通食1食（Webはキャンペーンコード欄に「初回無料試食希望」）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          ※出典: 宅配クック123「注文方法」・よくあるご質問・特定商取引法に基づく表示（{CHECKED} 確認）
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          前日17時という締切は、冷凍宅配弁当の「次回お届けの◯日前まで」と比べると短く、
          予定が変わりやすい人にも使いやすい条件です。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">⚠️ 公式で確認できなかったこと</h2>
        <p className="mt-4 text-sm leading-relaxed">
          <strong>お住まいの地域が対象かどうかは、この記事では断定していません。</strong>
          公式は郵便番号での店舗検索（またはフリーダイヤル 0120-288-120・受付10時〜17時）で調べる形をとっているためです。
          運営は株式会社シニアライフクリエイトで、地域ごとの担当店舗が配達を行います。
          普通食以外の献立表や月ごとの献立表は各店舗で用意している、と公式FAQにあります。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          口コミは出典を確認できるものだけを掲載しています。方針は<Link href="/methodology/" className="text-accent underline">評価方法</Link>に記載しています。
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

        <div className="mt-8 rounded-xl bg-accent/10 p-5 text-center">
          <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white hover:opacity-90">
            宅配クック123の公式サイトで配達エリア（店舗）を調べる →
          </a>
          <p className="mt-2 text-[10px] text-gray-500">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">関連記事</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>・<Link href="/articles/koureisha-osusume/" className="text-accent underline">高齢者向け宅配弁当おすすめランキング</Link></li>
          <li>・<Link href="/articles/watami-reviews/" className="text-accent underline">ワタミの宅食の口コミ・評判（冷蔵・手渡しの比較先）</Link></li>
          <li>・<Link href="/articles/coopdeli-kuchikomi/" className="text-accent underline">コープデリ夕食宅配（舞菜）の口コミ・料金</Link></li>
          <li>・<Link href="/articles/mealtime-kuchikomi/" className="text-accent underline">ミールタイム（食事療法向け・管理栄養士に無料相談）</Link></li>
          <li>・<Link href="/articles/ouchi-coop-kuchikomi/" className="text-accent underline">おうちコープ（マイシィ）の評判</Link></li>
          <li>・<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅配弁当の料金白書（送料込みで比較）</Link></li>
        </ul>
      </article>
    </>
  );
}
