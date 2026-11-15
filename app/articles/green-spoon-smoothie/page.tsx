import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "GREEN SPOON（グリーンスプーン）のスムージー全13種｜カロリー・糖質の一覧と1杯あたりの料金、作り方を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "GREEN SPOON（グリーンスプーン）の冷凍スムージー全13種のカロリー・糖質・食物繊維を、公式の商品ページの栄養成分表示から一覧にしました。1杯110〜229kcal（中央値158kcal）。単品・定期BOX別の1杯あたりの価格と送料込みの目安、ミキサーでの作り方、子どもが飲む場合の注意も公式で確認しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/green-spoon-smoothie/";
const OFFICIAL_URL = "https://green-spoon.jp/products/smoothie";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "グリーンスプーン スムージー, GREEN SPOON スムージー, グリーンスプーン スムージー カロリー, グリーンスプーン スムージー 値段, グリーンスプーン スムージー 作り方, グリーンスプーン スムージー おすすめ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-15T00:00:00+09:00",
    modifiedTime: "2026-11-15T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "GREEN SPOONのスムージーは何種類ありますか？", answer: "2026年11月15日時点で、公式サイトのスムージー一覧に13種が掲載されています（うちToconutは期間限定）。" },
  { question: "スムージーのカロリーはどのくらいですか？", answer: "1杯（約175〜209g）あたり110〜229kcalで、13種の中央値は158kcalです。最も低いのはVery Berry（110kcal）、最も高いのはToconut（229kcal・推定値）です。水以外で作る場合は、加えた飲み物の分が増えます。" },
  { question: "スムージーの値段はいくらですか？", answer: "2回目以降の定期便でS BOX 818円・M BOX 752円・L BOX 724円、単品は4個で940円・8個で912円（いずれも1杯・税込）です。別途送料がかかり、定期便は全国一律1,089円（税込・北海道と沖縄を除く）です。" },
  { question: "スムージーだけ注文できますか？", answer: "できます。定期便はデリ弁当・スープ・スムージーなど全カテゴリから自由に組み合わせられ、単品（4個・8個）でも購入できます。" },
  { question: "ミキサーがなくても作れますか？", answer: "作り方はミキサーにかける手順で、公式FAQはハンドブレンダーでも利用できるとしています。どちらもない場合は作れません。" },
  { question: "温めて飲めますか？", answer: "できます。ミキサーにかけたあと耐熱カップに移し、ラップをせずに600Wで1分30秒程度温めるHOTの作り方が公式で案内されています。" },
  { question: "子どもも飲めますか？", answer: "公式FAQは年齢制限なく食べられるとしたうえで、はちみつを使った商品は1歳未満の乳児に与えないこと、小さな子どもはアレルギーの有無などを確認することを案内しています。" },
];

const sections = [
  { id: "about", label: "GREEN SPOONのスムージーとは" },
  { id: "list", label: "全13種のカロリー・糖質・食物繊維一覧" },
  { id: "price", label: "1杯あたりの料金（単品・定期BOX・送料込み）" },
  { id: "howto", label: "作り方（COLD・HOT）と必要な道具" },
  { id: "choose", label: "目的別の選び方" },
  { id: "notice", label: "注意したい点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">ホーム</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <Link href="/articles/#guide" className="text-foreground/70 hover:text-accent transition-colors">選び方・使い方・サービス紹介</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">GREEN SPOONのスムージー</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">
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

function OfficialButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 text-center">
      <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-[10px] text-gray-400 mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
    </div>
  );
}


export default function GreenSpoonSmoothiePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-15T00:00:00+09:00",
    dateModified: "2026-11-15T00:00:00+09:00",
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介" },
      { "@type": "ListItem", position: 3, name: "GREEN SPOONのスムージー" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">選び方・使い方・サービス紹介</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-15">公開: 2026年11月15日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            GREEN SPOON（グリーンスプーン）のスムージーは、カットした果物や野菜を<strong>パウチのまま冷凍して届ける</strong>商品です。飲む前に水や牛乳を加えてミキサーにかけます。デリ弁当やスープと同じ定期便のボックスに組み合わせて注文できます。
          </p>
          <p className="mb-3">
            この記事では、2026年11月15日時点で公式サイトに掲載されているスムージー13種の栄養成分表示を<strong>1つの表にまとめ</strong>、単品・定期BOXごとの1杯あたりの価格を送料込みで計算しました。作り方や子どもが飲む場合の注意も、公式FAQの記載で整理しています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">GREEN SPOONのスムージーの要点</p>
          <p className="text-sm leading-relaxed mb-4">掲載中のスムージーは13種（うち1種は期間限定）で、1杯あたり110〜229kcal（中央値158kcal）、糖質22.5〜42.7g、食物繊維1.6〜4.5gです。13種中10種は植物由来の原材料のみです。価格は2回目以降の定期L BOX（20〜28個）で1杯724円（税込）、単品4個では940円（税込）で、定期便の送料は全国一律1,089円（税込・北海道と沖縄を除く）です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良い点</p>
              <ul className="space-y-1 list-disc list-inside"><li>13種から選べ、果物・野菜の組み合わせが多い</li><li>10種は植物由来の原材料のみ</li><li>定期BOXなら弁当・スープと同じ箱で届く</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>ミキサーかハンドブレンダーが必要</li><li>糖質は1杯22〜43gと幅がある</li><li>単品は送料込みで1杯1,000円を超えやすい</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">GREEN SPOON 公式サイトでスムージーを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">GREEN SPOONのスムージーとは</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["販売", "株式会社Greenspoon（GREEN SPOON）"],
            ["形状", "カットした果物・野菜などをパウチで冷凍（容器 約15×20.8×4cm）"],
            ["内容量", "約180g前後（水・牛乳などを加えて約330g）"],
            ["公式の説明", "商品一覧「1/2日分の野菜とフルーツがとれるスムージー」、FAQ「1/2日分以上のフルーツがとれるスムージー」"],
            ["掲載数", "13種（うち「Toconut」は期間限定）"],
            ["保存", "-18℃以下で冷凍。賞味期限まで1ヶ月以上の商品を出荷"],
            ["購入方法", "定期便（他のカテゴリと組み合わせ自由）または単品（4個・8個）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://green-spoon.jp/products/smoothie" target="_blank" rel="noopener noreferrer" className="text-accent underline">GREEN SPOON スムージー一覧</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14161202934807" target="_blank" rel="noopener noreferrer" className="text-accent underline">スムージーの内容量を教えてください。</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14159944187799" target="_blank" rel="noopener noreferrer" className="text-accent underline">容器のサイズを教えてください。</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14160155368727" target="_blank" rel="noopener noreferrer" className="text-accent underline">賞味期限を教えてください。</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14159943471383" target="_blank" rel="noopener noreferrer" className="text-accent underline">どんな商品がありますか？</a>（2026年11月15日確認）</p>
        <SectionHeading id="list">全13種のカロリー・糖質・食物繊維一覧</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">各商品ページの栄養成分表示（1食分あたり）を、カロリーの低い順に並べました。主な素材は公式の一覧ページの表記です。</p>
        <ComparisonTable
          headers={["商品", "主な素材", "内容量", "エネルギー", "たんぱく質(g)", "脂質(g)", "糖質(g)", "食物繊維(g)", "植物由来のみ"]}
          rows={[
            ["<a href=\"https://green-spoon.jp/products/smoothie/veryberry\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Very Berry</a>", "ブルーベリー・いちご・チェリートマト・りんご", "180g", "110kcal", "1.5", "0.8", "22.5", "4.5", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/sunskip\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Sun Skip</a>", "グレープフルーツ・オレンジ・レモン・パイナップル", "188g", "124kcal", "1.2", "0.2", "28.2", "2.6", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/akogare\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Akogare</a>", "いちご・バナナ・ドラゴンフルーツ・ケール・甘酒", "181g", "137kcal", "2.2", "0.3", "29.1", "2.2", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/singgirl\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Sing Girl</a>", "アサイー・バナナ・ブルーベリー・いちご・オートミール", "180g", "137kcal", "2.3", "0.5", "27.4", "3.3", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/4571559282668\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Wake Me Up</a>", "パッションフルーツ・パイナップル・りんご・マンゴー", "186g", "141kcal", "0.6", "0.2", "34.9", "2.1", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/4571559281937\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Sweet Green</a>", "りんご・バナナ・ケール・マンゴー・パイナップル", "184g", "147kcal", "1.1", "0.2", "34", "2.7", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/cheerup\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Cheer up</a>", "レモン・マンゴー・りんご・グレープフルーツ", "185g", "158kcal", "2", "0.8", "34.2", "3.4", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/4571559282033\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Good Luck</a>", "キウイフルーツ・グリーンレーズン・アガベシロップ・抹茶", "175g", "164kcal", "1.9", "0.2", "37.8", "3.7", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/behero\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Be HERO</a>", "バナナ・オレンジ・りんご・パイナップル", "184g", "173kcal", "2.3", "1.5", "38.3", "3.3", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/4571559282026\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">mango morning</a>", "マンゴー・バナナ・オレンジ・かぼちゃパウダー", "181g", "178kcal", "2.1", "0.6", "40", "2.8", "○"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/4571559281975\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">CocoNana</a>", "バナナ・マンゴー・ココナッツミルクパウダー・カカオニブ", "181g", "223kcal", "2.6", "6.9", "35.7", "2.3", "−"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/4571559282651\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Life goes on</a>", "バナナ・オレンジ・豆乳・コーヒー粉・ロマネスコ", "195g", "223kcal", "3.8", "3.3", "42.7", "1.6", "−"],
            ["<a href=\"https://green-spoon.jp/products/smoothie/4571559282804\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">Toconut（期間限定）</a>", "パイナップル・ナタデココ・ドラゴンフルーツ・マンゴー", "209g", "229kcal", "2.3", "10", "30.4", "2.9", "−"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 各商品ページの栄養成分表示（2026年11月15日確認）。Toconutのみ公式の表記が「推定値」です。公式は「製造時期により、サイト表記と製品表示に一部相違がある場合がございます」としています。「植物由来のみ」は商品ページに「この商品は植物由来の原材料のみでつくられています」と書かれているものです。</p>
        <SubHeading>13種を集計してわかること（当サイト集計）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>エネルギーは110〜229kcalで、中央値は158kcal（Cheer up）。平均は約165kcalです</li><li>200kcalを超えるのは、ココナッツや豆乳・乳を使う3種（CocoNana・Life goes on・Toconut）でした。脂質もこの3種が3.3〜10.0gと高く、ほかの10種は1.5g以下です</li><li>糖質は22.5〜42.7gで、中央値は34.2g。いちごやベリー系（Very Berry・Sing Girl・Akogare）とかんきつ系（Sun Skip）が30g未満です</li><li>食物繊維が最も多いのはVery Berry（4.5g）、最も少ないのはLife goes on（1.6g）でした</li><li>たんぱく質は0.6〜3.8gで、どの商品もたんぱく質の補給を目的とする飲み物ではありません</li></ul>
        <p className="text-sm mb-6 leading-relaxed">牛乳や豆乳で作る場合は、加えた飲み物（約150cc）の分だけエネルギー・たんぱく質・脂質が上の表より増えます。表の値は水で作った場合の商品そのものの値です。</p>
        <SectionHeading id="price">1杯あたりの料金（単品・定期BOX・送料込み）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">スムージーは、GREEN SPOONの6カテゴリの中で<strong>最も単価が低いカテゴリ</strong>です。2回目以降の1杯あたりの価格は次のとおりです。</p>
        <ComparisonTable
          headers={["購入方法", "1杯（税込）", "送料（税込）", "送料込みの1杯（当サイト計算）"]}
          rows={[
            ["単品4個", "940円", "1,144円〜2,519円（地域・個数による）", "約1,226円（関東・4個）"],
            ["単品8個（3%オフ）", "912円", "1,144円〜2,519円", "約1,055円（関東・8個）"],
            ["定期 S BOX（8〜11個）", "818円", "1,089円（北海道・沖縄を除く全国一律）", "約954円（8個）"],
            ["定期 M BOX（12〜19個）", "752円", "1,089円", "約843円（12個）"],
            ["定期 L BOX（20〜28個）", "724円", "1,089円", "約778円（20個）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://faq.green-spoon.jp/hc/ja/articles/14159862817943" target="_blank" rel="noopener noreferrer" className="text-accent underline">商品の価格を教えてください。（2026年10月26日更新）</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14159861117335" target="_blank" rel="noopener noreferrer" className="text-accent underline">単品でも買えますか？</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14159856148631" target="_blank" rel="noopener noreferrer" className="text-accent underline">送料はいくらですか？（2026年10月30日更新）</a>（2026年11月15日確認）。送料込みの1杯は「1杯の税込価格×個数＋送料」÷個数で当サイトが計算した目安です。北海道・沖縄の定期便の送料は1,573円〜3,289円（税込）です。</p>
        <p className="text-sm mb-6 leading-relaxed">初めての定期便は、カテゴリにかかわらず1食あたり S BOX 810円・M BOX 745円・L BOX 724円（税込）の初回価格です。スムージーは2回目以降の価格（818円・752円・724円）とほとんど差がなく、<strong>初回価格の割引の恩恵が大きいのは、単価の高いデリ弁当などを選んだ場合</strong>です（当サイトの比較）。スムージーだけで定期便を組む場合は、初回と2回目以降で1杯あたりの価格がほぼ変わらないと考えてよい計算です。</p>
        <p className="text-sm mb-6 leading-relaxed">弁当やスープと組み合わせた1食あたりの料金は<Link href="/articles/green-spoon-kuchikomi/" className="text-accent underline">GREEN SPOONの口コミ・評判と料金</Link>で整理しています。</p>
        <SectionHeading id="howto">作り方（COLD・HOT）と必要な道具</SectionHeading>
        <ComparisonTable
          headers={["手順", "COLD（冷たいまま）", "HOT（温める）"]}
          rows={[
            ["1", "パウチに水・牛乳・豆乳などを、食材が浸る程度（150cc）入れる", "同左"],
            ["2", "パウチを軽くもみほぐし、ミキサーに移す", "同左"],
            ["3", "60秒程度ミキサーにかけて完成", "耐熱カップに移し、ラップをせずに600Wで1分30秒程度温める"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://faq.green-spoon.jp/hc/ja/articles/14159868642967" target="_blank" rel="noopener noreferrer" className="text-accent underline">スムージーの作り方を教えてください。</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">公式FAQは、ミキサーより<strong>ハンドブレンダーをすすめています</strong>。上から押しつけられるため、推奨の水分量（150〜200ml）ですぐに液体にできるためです。ミキサーを使う場合の推奨条件は次のとおりです。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>凍った食材を粉砕できる（氷を砕けるもの）</li><li>刃が波刃</li><li>パワーは最低200W程度</li><li>容量は400〜500ml以上</li><li>食材を入れる口が大きい</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://faq.green-spoon.jp/hc/ja/articles/14160184936215" target="_blank" rel="noopener noreferrer" className="text-accent underline">おすすめのブレンダーはありますか？</a>（2026年11月15日確認）。公式は「メーカーやミキサーの規格により攪拌しにくい可能性」があるとしています。</p>
        <SectionHeading id="choose">目的別の選び方</SectionHeading>
        <ComparisonTable
          headers={["目的", "候補（上の表から当サイトが抽出）", "理由"]}
          rows={[
            ["カロリーを抑えたい", "Very Berry（110kcal）・Sun Skip（124kcal）", "13種で最も低い2種"],
            ["糖質を抑えたい", "Very Berry（22.5g）・Sing Girl（27.4g）・Sun Skip（28.2g）", "糖質30g未満"],
            ["食物繊維を多くとりたい", "Very Berry（4.5g）・Good Luck（3.7g）・Cheer up（3.4g）", "食物繊維の多い順"],
            ["満足感・コクがほしい", "CocoNana・Life goes on・Toconut", "ココナッツ・豆乳・乳を使い200kcal超"],
            ["乳・大豆を避けたい", "Very Berry・Sun Skip・Sweet Green など（アレルギー表示を各商品ページで確認）", "植物由来のみで、表示に乳成分・大豆がない商品"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">アレルギー表示は商品ごとに異なります。たとえばCheer upは植物由来のみですが、枝豆を使うため表示に大豆が含まれます。選ぶ前に各商品ページのアレルギー欄をご確認ください。</p>
        <SectionHeading id="notice">注意したい点</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li><strong>道具が必要</strong>：ミキサーかハンドブレンダーがないと作れません</li><li><strong>1歳未満の乳児には与えない</strong>：はちみつを使う商品（Toconutの原材料にはちみつ）について、公式FAQはボツリヌス菌による食中毒予防のため1歳未満の乳児に与えないよう注意を呼びかけています</li><li><strong>小さな子ども</strong>：離乳食・幼児食の進み具合やアレルギーの有無を確認し、初めての食品は単品で体調のよいときに試すよう案内されています</li><li><strong>糖質</strong>：果物が主体のため、糖質は1杯22.5〜42.7gです。糖質を管理している場合は表の値を確認してから選ぶ必要があります</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://faq.green-spoon.jp/hc/ja/articles/14161299913879" target="_blank" rel="noopener noreferrer" className="text-accent underline">赤ちゃんや子供は食べられますか？</a>・<a href="https://green-spoon.jp/products/smoothie/4571559282804" target="_blank" rel="noopener noreferrer" className="text-accent underline">Toconut 商品ページ（原材料）</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">定期便をやめるときの手順と締切は<Link href="/articles/green-spoon-kaiyaku/" className="text-accent underline">GREEN SPOONの解約方法</Link>で確認できます。</p>
        <OfficialButton>GREEN SPOON 公式サイトでスムージーを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">GREEN SPOONのスムージーは13種で、1杯110〜229kcal・糖質22.5〜42.7gと商品ごとの差が大きいため、目的に合わせて上の一覧から選ぶと失敗が少なくなります。定期便ならL BOXで1杯724円（税込）と、GREEN SPOONの中で最も低い単価で続けられます。ミキサーかハンドブレンダーの用意が前提です。</p>
        <p className="text-sm mb-6 leading-relaxed">商品・価格は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>GREEN SPOON 公式サイトでスムージーを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/green-spoon-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">GREEN SPOON（グリーンスプーン）の口コミ・評判</Link></li>
            <li><Link href="/articles/green-spoon-kaiyaku/" className="text-accent hover:text-accent-dark transition-colors">GREEN SPOONの解約方法</Link></li>
            <li><Link href="/articles/mutenka-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">無添加の宅配弁当の比較</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（試食にもとづくレビューは現在行っておらず、導入を準備しています）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
