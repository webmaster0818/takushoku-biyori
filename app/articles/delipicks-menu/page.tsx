import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "デリピックス（DELIPICKS）のメニュー一覧｜掲載180品をジャンル・たんぱく質・塩分で集計【2026年11月】";
const ARTICLE_DESCRIPTION =
  "デリピックス（DELIPICKS）の公式メニュー一覧に掲載されている180品を、料理の分類・ジャンル・たんぱく質・食塩相当量で集計しました。たんぱく質20g以上は54品。人気ランキング、毎月の新メニュー、メニューの選び方、お弁当1品994円（税込）の料金も公式で確認しています（2026年11月14日）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/delipicks-menu/";
const OFFICIAL_URL = "https://deli-picks.com/collection/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "デリピックス メニュー, DELIPICKS メニュー, デリピックス メニュー一覧, デリピックス 人気メニュー, デリピックス たんぱく質, デリピックス 新メニュー",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-14T00:00:00+09:00",
    modifiedTime: "2026-11-14T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "デリピックスのメニューは何種類ありますか？", answer: "公式は「100種類以上」と案内しています。2026年11月14日に公式メニュー一覧の掲載データを数えると180品でした。ただし、実際に入れ替えで選べる品数は時期により限られる場合があると公式ヘルプに書かれています。" },
  { question: "人気のメニューは何ですか？", answer: "公式トップの人気ランキングの1位は「ハンバーグ 飴色玉ねぎのシャリアピンソース」、2位「味わいほっこり 牛肉とごぼうの時雨煮」、3位「魚介だしが効いた 濃厚シーフードグラタン」でした（2026年11月14日確認）。" },
  { question: "たんぱく質が多いメニューはどれですか？", answer: "掲載180品のうち、たんぱく質20g以上は54品でした。通常価格のお弁当では「鶏のロースト 濃厚バター醤油ソース」（27.1g）が最も多く、料理の分類では鶏肉料理の中央値が22.7gと最も高い値です。" },
  { question: "メニューは自分で選べますか？", answer: "選べます。初回はアンケートをもとにおすすめが選ばれ、そこから入れ替えできます。2回目以降も注文確定（毎週月曜0時）の前であれば入れ替え可能です。お試しセットは内容が固定で選べません。" },
  { question: "新メニューはどのくらいの頻度で出ますか？", answer: "公式ヘルプのお知らせでは、毎月2〜3品の新商品が追加されています（2026年11月は2品）。" },
  { question: "糖質の量はわかりますか？", answer: "商品ページの栄養成分はエネルギー・たんぱく質・脂質・炭水化物・食塩相当量で、糖質の個別値は掲載されていません。公式の表記は「糖質平均30g以下」（全冷凍弁当の平均値）です。" },
];

const sections = [
  { id: "answer", label: "デリピックスのメニューはいくつある？" },
  { id: "groups", label: "料理の分類・ジャンル別の品数" },
  { id: "protein", label: "たんぱく質・塩分で見るメニュー" },
  { id: "ranking", label: "人気ランキングと新メニュー" },
  { id: "choose", label: "メニューの選び方と注文のルール" },
  { id: "price", label: "メニューの料金・送料" },
  { id: "list", label: "掲載180品の一覧（栄養成分つき）" },
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
          <span className="text-foreground">デリピックスのメニュー一覧</span>
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


export default function DelipicksMenuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-14T00:00:00+09:00",
    dateModified: "2026-11-14T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介", item: "https://takushoku-biyori.com/articles/#guide" },
      { "@type": "ListItem", position: 3, name: "デリピックスのメニュー一覧" },
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
            <time dateTime="2026-11-14">公開: 2026年11月14日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            デリピックス（DELIPICKS）は、株式会社DELIPICKS（横浜市）が運営する冷凍弁当の宅配です。2023年12月12日に「CHEFBOX」から「DELIPICKSサブスクリプション」へ名称が変わり、公式サイトは deli-picks.com です。
          </p>
          <p className="mb-3">
            公式は「100種類以上のラインナップ」と案内しています。この記事では、2026年11月14日に公式のメニュー一覧（/collection/）に掲載されていた<strong>180品の栄養成分を当サイトで集計</strong>し、料理の分類・たんぱく質・塩分の分布を整理しました。
          </p>
          <p>当サイトでは実食・試用はしていません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">デリピックスのメニュー（要点）</p>
          <p className="text-sm leading-relaxed mb-4">2026年11月14日の公式メニュー一覧の掲載は180品でした（公式表記は「100種類以上」）。料理の分類では豚肉料理38品・魚介料理37品・鶏肉料理33品が多く、ジャンルでは洋食63品・和食42品が中心です。たんぱく質は中央値16.7g・20g以上が54品で、鶏肉料理（中央値22.7g）が最も多く含みます。お弁当は1品994円（税込）で、まとめ買いで最大20%OFFになります。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ メニューの特徴</p>
              <ul className="space-y-1 list-disc list-inside"><li>フレンチ出身のシェフ監修で、洋食・フレンチの品数が多い</li><li>毎月2〜3品の新メニューを追加（公式ヘルプのお知らせ）</li><li>全品の栄養成分（たんぱく質・食塩相当量など）を公開</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>掲載された全品がいつも選べるとは限らない</li><li>糖質の個別値は公開されていない</li><li>食塩相当量3gを超える品が53品ある</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">デリピックス公式のメニュー一覧を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">デリピックスのメニューはいくつある？</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式サイトは「ハンバーグ、カレー、グラタン、洋食、中華料理など100種類以上のラインナップ。毎月新メニューが続々登場」と案内しています。2026年11月14日に公式のメニュー一覧の掲載データを数えると<strong>180品</strong>で、そのうち通常価格のお弁当（1品920円・税抜）が169品、増量・特別メニューやスープ・パウチ商品が11品でした。</p>
        <p className="text-sm mb-6 leading-relaxed">ただし公式ヘルプには、実際に入れ替えできるメニューとして表示される商品数が限られている場合がある、との記載があります。掲載数は「選べる品数」と同じではない点にご注意ください。</p>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://deli-picks.com/collection/" target="_blank" rel="noopener noreferrer" className="text-accent underline">DELIPICKS 公式メニュー一覧</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/48775075009305" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式ヘルプ</a>（2026年11月14日確認）。品数は当サイトが掲載データを数えたものです。</p>
        <p className="text-sm mb-6 leading-relaxed">監修は公式表記で「星付きレストラン出身・中村シェフ」（CHEF GENKI NAKAMURA・フランスの星付きレストラン勤務、六本木「L’ESSOR」でメインシェフ経験など）です。</p>
        <SectionHeading id="groups">料理の分類・ジャンル別の品数</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式のメニュー一覧にある「料理の分類」と「ジャンル」の2つで集計しました。栄養値は各分類の中央値です。</p>
        <ComparisonTable
          headers={["料理の分類", "品数", "たんぱく質（中央値）", "エネルギー（中央値）", "食塩相当量（中央値）"]}
          rows={[
            ["豚肉料理", "38品", "16.4g", "385.5kcal", "2.5g"],
            ["魚介料理", "37品", "16.2g", "266kcal", "2g"],
            ["鶏肉料理", "33品", "22.7g", "417kcal", "3g"],
            ["牛肉料理", "19品", "13.9g", "382kcal", "2.4g"],
            ["ハンバーグ", "15品", "16.6g", "343kcal", "2.8g"],
            ["カレー", "13品", "19.4g", "354kcal", "2.8g"],
            ["パスタ・ご飯もの", "13品", "21.3g", "424kcal", "3.3g"],
            ["グラタン", "6品", "13.6g", "334kcal", "2.2g"],
            ["その他（公式の分類外）", "6品", "6.6g", "117kcal", "2.2g"],
          ]}
        />
        <ComparisonTable
          headers={["ジャンル", "品数"]}
          rows={[
            ["洋食", "63品"],
            ["和食", "42品"],
            ["中華・韓国料理", "30品"],
            ["フレンチ", "29品"],
            ["エスニック", "16品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※2026年11月14日の公式メニュー一覧の掲載180品を当サイトが集計。「公式の分類外」はスープなど、どの分類にも入っていない品です。</p>
        <p className="text-sm mb-6 leading-relaxed">フレンチ（29品）とエスニック（16品）を合わせると約4分の1を占め、ブイヤベースやコック・オ・ヴァンなど、他の冷凍宅食では見かけにくい料理が並ぶのが特徴です。魚介料理は37品とほぼ豚肉料理と同じ数があり、エネルギーの中央値（266kcal）と食塩相当量の中央値（2.0g）は分類の中で最も低い値でした。</p>
        <SectionHeading id="protein">たんぱく質・塩分で見るメニュー</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式は「タンパク質平均15g以上」（全冷凍弁当の平均値）と案内しています。掲載180品のたんぱく質を当サイトで集計すると、平均17.7g・中央値16.7gでした。</p>
        <ComparisonTable
          headers={["たんぱく質（1食）", "品数"]}
          rows={[
            ["10g未満", "10品"],
            ["10〜15g未満", "50品"],
            ["15〜20g未満", "66品"],
            ["20〜25g未満", "38品"],
            ["25〜30g未満", "13品"],
            ["30g以上", "3品"],
          ]}
        />
        <SubHeading>たんぱく質が多い通常価格のメニュー（上位8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "たんぱく質", "エネルギー", "食塩相当量"]}
          rows={[
            ["鶏のロースト 濃厚バター醤油ソース", "27.1g", "473kcal", "3.2g"],
            ["甘辛タオチオソースのカオマンガイ〈ジャスミンライス使用〉", "26.8g", "573kcal", "2.7g"],
            ["揚げない豚ヒレカツ フルーツチャツネ香る自家製ソース", "26.7g", "313kcal", "2g"],
            ["アメリカ南部の郷土料理 鶏と野菜のジャンバラヤ", "26.6g", "550kcal", "3.8g"],
            ["チーズタッカルビ オレンジジャムのアクセント", "26.6g", "439kcal", "3.2g"],
            ["豚肉のクリーム煮 粒マスタードのアクセント", "26.5g", "433kcal", "3.3g"],
            ["北海道産鹿肉ハンバーグ 黒胡椒と白ワインのソース-ポワヴラード-", "25.8g", "318kcal", "5.2g"],
            ["バターの旨味あふれる やみつきガリバタチキン", "25.4g", "604kcal", "4.7g"],
          ]}
        />
        <SubHeading>食塩相当量1.5g以下の通常価格のメニュー</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "食塩相当量", "たんぱく質", "エネルギー"]}
          rows={[
            ["赤魚醤油漬け焼き", "0.9g", "14.6g", "234kcal"],
            ["白身魚のムニエル バターソース", "1.4g", "16.9g", "254kcal"],
            ["ほおばるロールキャベツ", "1.4g", "11g", "262kcal"],
            ["2種のパスタ -イカのフリットとジェノベーゼ＆鶏のアラビアータ トスカーナ風-", "1.5g", "21.3g", "487kcal"],
            ["サーモンフライ フレンチ仕立ての具だくさんタルタルソース", "1.5g", "18.1g", "386kcal"],
            ["2種の御膳-鮭のきのこあんかけ&山椒香る豚と根菜の甘辛煮-", "1.5g", "14.9g", "317kcal"],
            ["赤魚のオーブン焼き 夏みかんとオレンジリキュールのソース", "1.5g", "14g", "210kcal"],
            ["パッションフルーツ香るニース風サラダ", "1.5g", "12g", "219kcal"],
            ["スパイス香る 揚げ茄子の入ったラムキーマカレー", "1.5g", "10g", "314kcal"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式メニュー一覧の掲載データ（2026年11月14日）から当サイトが抽出。通常価格＝1品920円（税抜）のお弁当。増量メニュー（たんぱく質27.6g〜）や豚頬肉の白ワイン煮込み（48.1g）など高価格のメニューは除いています。</p>
        <p className="text-sm mb-6 leading-relaxed">塩分の中央値は2.6gで、3gを超える品も53品あります。塩分を控えたい場合は、魚介料理を中心に選ぶと抑えやすい計算です。糖質の個別値は公開されておらず、公式の表記は「糖質平均30g以下」（全冷凍弁当の平均値）のみでした。</p>
        <SectionHeading id="ranking">人気ランキングと新メニュー</SectionHeading>
        <SubHeading>公式トップの人気ランキング（上位5品）</SubHeading>
        <ComparisonTable
          headers={["順位", "メニュー名"]}
          rows={[
            ["1位", "ハンバーグ 飴色玉ねぎのシャリアピンソース"],
            ["2位", "味わいほっこり 牛肉とごぼうの時雨煮"],
            ["3位", "魚介だしが効いた 濃厚シーフードグラタン"],
            ["4位", "ハンバーグ 自家製赤ワインソース-ヴァンルージュ-"],
            ["5位", "じっくり煮込んだビーフシチュー 赤ワイン仕立て"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://deli-picks.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">DELIPICKS 公式トップ</a>（2026年11月14日確認）</p>
        <SubHeading>毎月の新メニュー</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">公式ヘルプでは毎月「新商品」のお知らせが出ており、2026年は1月3品・2月2品・3月3品・6月2品・7月3品・8月3品（ほかにタイ料理2品）・9月2品・10月3品・11月2品でした。11月の新商品は「豚肉とカブのほっこりはちみつ生姜あん」「サーモンと茄子のほっこりみぞれあん」です。公式は「季節感や食材のバランスを見ながら、週替わりでメニューを入れ替え」としています。</p>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://delipicks.zendesk.com/hc/ja/articles/63865975264665" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式ヘルプ「11月新商品」</a>ほか各月のお知らせ（2026年11月14日確認）。2025年12月1日には一部メニューの名称変更（例: フレンチシェフの秋サバの味噌煮→サバの味噌煮込み 赤ワイン風味）も告知されています。</p>
        <SectionHeading id="choose">メニューの選び方と注文のルール</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>初回: 申込み時のアンケートをもとにおすすめが選ばれ、そこから入れ替えできる</li><li>2回目以降: 注文確定の約3〜4週間前から、確定前なら自由に入れ替えできる</li><li>締切: 毎週日曜23:59に、その1週間後以降に届く分の変更受付が締め切られ、月曜0時に注文が確定</li><li>お試しセット: 内容は公式が選んだ固定のセット（選べない）</li><li>定期便の初回分とお試しセット: 申込み時点で確定するためキャンセル不可</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://delipicks.zendesk.com/hc/ja/articles/11620599380633" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式ヘルプ（メニューの入れ替え）</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11619265490585" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式ヘルプ（締切）</a>（2026年11月14日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">アレルギーについて公式は「アレルゲン原材料を取り除いたお料理を提供しておりません」とし、アレルギーのある人には原則として利用を控えるよう案内しています。特定原材料7品目は各料理のパッケージと商品ページに表示されています。</p>
        <SectionHeading id="price">メニューの料金・送料</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容（税込）"]}
          rows={[
            ["お弁当（通常）", "1品994円（税抜920円）。2026年7月13日決済分から950円→994円に改定"],
            ["まとめ買い割引", "税抜7,000円以上で10%OFF（894円）・10,000円以上で15%OFF（845円）・15,000円以上で20%OFF（795円）"],
            ["最低注文額", "DELIPICKSオリジナル商品を税抜5,000円以上"],
            ["お試しセット", "おかず5食＋雑穀ごはんとブロッコリー1食 3,218円（初回限定・送料無料・1人1セットまで）"],
            ["送料（1回）", "関東1,089円・関西1,177円・北海道と九州1,386円など地域別（沖縄・離島などは配送不可）"],
            ["配送", "ヤマト運輸のクール便（冷凍）・宅配ボックス不可"],
            ["支払い", "クレジットカード・Amazon Pay・コンビニ後払い（手数料297円）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://deli-picks.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式トップ</a>・<a href="https://deli-picks.com/trial/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お試しセット</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11618731677465" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式ヘルプ（送料）</a>（2026年11月14日確認）。公式ヘルプ「費用を教えて下さい」は改定前の税抜880円（税込950円）のままで、公式内で表記が食い違っています。</p>
        <p className="text-sm mb-6 leading-relaxed">たとえば関東で通常のお弁当を12品（15%OFF）頼むと、（845円×12＋送料1,089円）÷12＝1品約936円の計算です（当サイト計算・端数の扱いで実際の請求額と異なる場合があります）。お試しセットの中身と特徴は<Link href="/articles/delipicks-otameshi/" className="text-accent underline">DELIPICKSのお試し・特徴まとめ</Link>で解説しています。</p>
        <OfficialButton>デリピックス公式で現在のメニューを見る</OfficialButton>
        <SectionHeading id="list">掲載180品の一覧（栄養成分つき）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">2026年11月14日に公式メニュー一覧に掲載されていた全180品です。数値は1食あたりの公式の栄養成分表示です。同じ名前で別の商品として掲載されているものは、そのまま載せています。</p>
        <SubHeading>豚肉料理（38品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "ジャンル", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["きのこたっぷり！白ワインビネガー香るポークチャップ", "洋食", "334kcal", "16g", "2.5g"],
            ["ほおばるロールキャベツ", "洋食", "262kcal", "11g", "1.4g"],
            ["オレガノ香るミラノ風カツレツ", "洋食", "339kcal", "18.3g", "2.3g"],
            ["オーブンで仕立てたポークカツレツ　彩り野菜のサルサソース", "洋食", "389kcal", "14.6g", "1.8g"],
            ["キャトルエピス香る豚のデミグラスソース煮込み", "洋食", "398kcal", "18.7g", "3g"],
            ["ハーブ香るミートボール フランス産濃厚粒マスタードソース", "洋食", "437kcal", "21.2g", "2.8g"],
            ["ミートボールのナポリ風トマト煮込み -ポルペッティ-", "洋食", "402kcal", "21.7g", "2.3g"],
            ["白ワインを使った豚肉とキャベツと豆のシチュー仕立て", "洋食", "451kcal", "20.2g", "3.1g"],
            ["米油で仕上げた洋風味噌カツ", "洋食", "400kcal", "18g", "2.9g"],
            ["豚ひき肉と茄子のケチャップ炒め バジル風味", "洋食", "268kcal", "14.2g", "2.7g"],
            ["豚ひき肉と茄子のケチャップ炒め バジル風味", "洋食", "421kcal", "16g", "2.7g"],
            ["豚バラ肉ときのこのストロガノフ風", "洋食", "303kcal", "10.6g", "2.5g"],
            ["さっぱりレモンの豚しゃぶ ネギ塩だれ", "和食", "373kcal", "13.3g", "2.2g"],
            ["とろ旨玉ねぎと豚バラ肉の生姜焼き", "和食", "368kcal", "10.9g", "2.5g"],
            ["彩り野菜と豚バラ肉のレモン塩麹炒め", "和食", "420kcal", "14.8g", "2.2g"],
            ["揚げない豚ヒレカツ フルーツチャツネ香る自家製ソース", "和食", "313kcal", "26.7g", "2g"],
            ["豚の煮込みの沖縄風あんかけ ゴーヤとポレンタと共に", "和食", "398kcal", "20.9g", "2.6g"],
            ["豚肉とカブのほっこりはちみつ生姜あん", "和食", "366kcal", "13.5g", "1.8g"],
            ["豚肉と彩り野菜の煮浸し", "和食", "330kcal", "22g", "2.1g"],
            ["豚肉のさっぱりおろしポン酢 柚子胡椒風味", "和食", "341kcal", "12.3g", "1.8g"],
            ["11種の野菜がとれる クリーミー豆乳坦々鍋", "中華・韓国料理", "405kcal", "17g", "2.5g"],
            ["きび砂糖を使ったオトナの黒酢豚", "中華・韓国料理", "412kcal", "16.5g", "3g"],
            ["ごろっと野菜の回鍋肉", "中華・韓国料理", "378kcal", "13.1g", "2g"],
            ["ご飯がすすむ豚しゃぶビビンバ風", "中華・韓国料理", "390kcal", "14.4g", "2.2g"],
            ["スタミナ満点！ピリ辛豚キムチ", "中華・韓国料理", "293kcal", "18.5g", "3g"],
            ["ピリ辛味噌ダレでご飯がすすむ 回鍋肉", "中華・韓国料理", "387kcal", "14.4g", "2.2g"],
            ["八角香る台湾ルーローハン", "中華・韓国料理", "526kcal", "19.4g", "2.5g"],
            ["山椒香る とろウマ麻婆茄子", "中華・韓国料理", "294kcal", "14.3g", "2.6g"],
            ["痺れる辛さ！鮮烈な旨さ！ 四川風麻婆豆腐", "中華・韓国料理", "355kcal", "15g", "3.7g"],
            ["豚と春雨の具だくさん酸辣湯風", "中華・韓国料理", "328kcal", "10.6g", "2.4g"],
            ["野菜たっぷり豚バラ肉とイカの八宝菜", "中華・韓国料理", "395kcal", "12.9g", "2.7g"],
            ["18時間仕込んだ 豚頬肉の白ワイン煮込み", "フレンチ", "535kcal", "48.1g", "3.3g"],
            ["豚の赤ワイン煮込み オレンジマーマレード風味", "フレンチ", "396kcal", "18g", "3.3g"],
            ["豚肉のクリーム煮 粒マスタードのアクセント", "フレンチ", "433kcal", "26.5g", "3.3g"],
            ["豚肉の塩漬け-プティ・サレ- 緑レンズ豆の煮込みと共に", "フレンチ", "389kcal", "19.8g", "4.8g"],
            ["飴色玉ねぎと豚のビール煮込み フランドル風", "フレンチ", "357kcal", "19.5g", "2.9g"],
            ["とろ～り半熟たまごの旨辛ガパオ", "エスニック", "384kcal", "19.2g", "3.4g"],
            ["彩り野菜のタコスミート", "エスニック", "345kcal", "16.3g", "2g"],
          ]}
        />
        <SubHeading>魚介料理（37品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "ジャンル", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["こっくり甘いソースがとろりと絡む 海老マヨ", "洋食", "493kcal", "14g", "2.1g"],
            ["ふっくら蒸し焼き 白身魚のレモンバター醤油ソース", "洋食", "233kcal", "21.1g", "2.5g"],
            ["サーモンとホク旨じゃがいものオーブン焼き", "洋食", "269kcal", "15g", "1.7g"],
            ["サーモンフライ フレンチ仕立ての具だくさんタルタルソース", "洋食", "386kcal", "18.1g", "1.5g"],
            ["白身魚のフライ たっぷり野菜と甘酢あん", "洋食", "273kcal", "8.1g", "1.9g"],
            ["白身魚の蒸し焼き アンチョビとキャベツのトマトクリームソース", "洋食", "236kcal", "16.2g", "3.1g"],
            ["魚介のチリコンカン", "洋食", "309kcal", "16.7g", "3.2g"],
            ["魚介の旨味じゅわっと弾けるアクアパッツァ", "洋食", "221kcal", "21g", "2g"],
            ["2種の御膳-鮭のきのこあんかけ&山椒香る豚と根菜の甘辛煮-", "和食", "317kcal", "14.9g", "1.5g"],
            ["さんまの醤油漬け焼き とろとろ卵とじ", "和食", "400kcal", "13.7g", "4.3g"],
            ["ふっくらジューシー！やみつきアジの竜田揚げ", "和食", "221kcal", "14.4g", "1.7g"],
            ["サバの味噌煮込み 赤ワイン風味", "和食", "325kcal", "17.1g", "2.7g"],
            ["サーモンと茄子のほっこりみぞれあん", "和食", "293kcal", "16.4g", "2.1g"],
            ["柚子香る鰆の西京味噌漬け焼き", "和食", "290kcal", "23.7g", "2.4g"],
            ["白身魚の揚げ物 はまぐり出汁香るあんかけ仕立て", "和食", "193kcal", "11.2g", "2g"],
            ["白身魚の煮付け", "和食", "178kcal", "19.4g", "1.8g"],
            ["赤魚醤油漬け焼き", "和食", "234kcal", "14.6g", "0.9g"],
            ["鯖の西京漬け焼き", "和食", "287kcal", "19.9g", "2g"],
            ["鰆の昆布醤油焼き", "和食", "266kcal", "18.5g", "2g"],
            ["鰆の赤味噌漬け焼き", "和食", "280kcal", "19.6g", "2.4g"],
            ["12種具材の海鮮八宝菜 牡蠣醤油仕立て", "中華・韓国料理", "226kcal", "14.6g", "2.9g"],
            ["お酒がすすむ あさりとしらすのチャプチェ", "中華・韓国料理", "362kcal", "6.5g", "2.2g"],
            ["お酒がすすむ あさりとしらすの焼きビーフン", "中華・韓国料理", "349kcal", "9.6g", "2g"],
            ["パッションフルーツ香るニース風サラダ", "フレンチ", "219kcal", "12g", "1.5g"],
            ["メバルのオーブン焼き 桜海老香るトマトソース", "フレンチ", "276kcal", "16.3g", "1.6g"],
            ["白身魚のオーブン焼き アンチョビバターソース", "フレンチ", "205kcal", "14.3g", "2.1g"],
            ["白身魚のムニエル バターソース", "フレンチ", "254kcal", "16.9g", "1.4g"],
            ["白身魚の蒸し焼き 魚介香るマッシュルームのソースと共に", "フレンチ", "160kcal", "15g", "2.4g"],
            ["赤魚とあおさのスープ仕立て -ア・ラ・ナージュ-", "フレンチ", "177kcal", "14.6g", "1.6g"],
            ["赤魚のオーブン焼き ソースタップナードと共に", "フレンチ", "267kcal", "16.4g", "2.6g"],
            ["赤魚のオーブン焼き 夏みかんとオレンジリキュールのソース", "フレンチ", "210kcal", "14g", "1.5g"],
            ["赤魚のオーブン焼き 魚だし香る自家製白ワインソース", "フレンチ", "320kcal", "16.6g", "2.4g"],
            ["赤魚のキヌア焼き 赤ワインソース", "フレンチ", "210kcal", "14.4g", "2g"],
            ["魚介のブイヤベース ルイユと共に", "フレンチ", "230kcal", "16.9g", "2.1g"],
            ["アメリカ南部の郷土料理 シーフードシチュー-ガンボ-", "エスニック", "266kcal", "13.8g", "3.1g"],
            ["セモリナ粉で揚げたカレイのフライ 南米チミチュリソース", "エスニック", "287kcal", "16.5g", "1.9g"],
            ["白身魚のハーブカレー焼き アジアントマトソース", "エスニック", "204kcal", "17g", "3.9g"],
          ]}
        />
        <SubHeading>鶏肉料理（33品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "ジャンル", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["しっとりジューシー照り焼きチキン 彩り野菜を添えて", "洋食", "453kcal", "24.7g", "2g"],
            ["キャトルエピス香るフライドチキンと玉葱のフォンダン", "洋食", "411kcal", "18.3g", "2.4g"],
            ["ゴロゴロ食材を味わう とろ～りチーズフォンデュ", "洋食", "273kcal", "18g", "2.8g"],
            ["スペインバルで味わう 鶏と彩り野菜のアヒージョ", "洋食", "567kcal", "21.6g", "3.5g"],
            ["ハーブ香る鶏のピカタ トマトバジルソースと共に", "洋食", "326kcal", "16.2g", "2.7g"],
            ["ハーブ香る鶏モモ肉のロースト", "洋食", "461kcal", "24.8g", "3.6g"],
            ["バターの旨味あふれる やみつきガリバタチキン", "洋食", "604kcal", "25.4g", "4.7g"],
            ["ヨシダソースを使ったスモーキーBBQチキン", "洋食", "374kcal", "21.5g", "3.3g"],
            ["米油で揚げた鶏の唐揚げ やみつきハニーマスタード", "洋食", "455kcal", "20.9g", "2.6g"],
            ["鶏のロースト 松茸香る贅沢クリーミーソース", "洋食", "517kcal", "23.8g", "2.8g"],
            ["山椒香る鶏肉の甘辛焼きとほっこり里芋煮", "和食", "428kcal", "19.3g", "2.3g"],
            ["彩り野菜と鶏肉 バルサミコを使った洋風甘酢あん", "和食", "417kcal", "16.7g", "2.6g"],
            ["米油で揚げたチキン南蛮 具だくさんタルタルソース", "和食", "494kcal", "22.7g", "2.6g"],
            ["鶏のロースト ジンジャーソース", "和食", "414kcal", "25.2g", "3.2g"],
            ["鶏のロースト 濃厚バター醤油ソース", "和食", "473kcal", "27.1g", "3.2g"],
            ["チーズタッカルビ オレンジジャムのアクセント", "中華・韓国料理", "439kcal", "26.6g", "3.2g"],
            ["揚げないで仕上げた油淋鶏 葱とパセリ香るソース", "中華・韓国料理", "406kcal", "23g", "2.9g"],
            ["柔らかジューシー鶏のチリソース", "中華・韓国料理", "453kcal", "22.5g", "3g"],
            ["油淋鶏 葱とパセリ香るソース", "中華・韓国料理", "417kcal", "20.3g", "2.5g"],
            ["米油で揚げた甘辛ヤンニョムチキン", "中華・韓国料理", "534kcal", "20.3g", "4.4g"],
            ["鶏肉とカシューナッツ炒め", "中華・韓国料理", "395kcal", "17.5g", "2.9g"],
            ["鶏肉と生姜の薬膳スープ仕立て", "中華・韓国料理", "302kcal", "25.3g", "3.9g"],
            ["鶏のクリーム煮込み-グラン・メール風-", "フレンチ", "318kcal", "18.9g", "3.1g"],
            ["鶏のパプリカとトマト煮込み-バスク風-", "フレンチ", "396kcal", "23.4g", "2.4g"],
            ["鶏のロースト 苺のコンフィチュールとバルサミコソース", "フレンチ", "390kcal", "24.2g", "2.5g"],
            ["鶏の赤ワイン煮込み-コック・オ・ヴァン-（1.5人前）", "フレンチ", "635kcal", "38.8g", "3.5g"],
            ["鶏団子と野菜のア・ラ・クレーム", "フレンチ", "280kcal", "14.5g", "3.1g"],
            ["鶏肉の白ワインビネガー煮込み トマト風味-プーレ・オ・ヴィネーグル-", "フレンチ", "423kcal", "24.7g", "2.7g"],
            ["お家でBBQ気分★ 10種スパイスのケイジャンチキン", "エスニック", "296kcal", "22.7g", "3.2g"],
            ["インド風タンドリーチキン ガーリックのアクセント", "エスニック", "389kcal", "25.2g", "3.1g"],
            ["ジャマイカ風ジャークチキン ハラペーニョマヨを添えて", "エスニック", "404kcal", "24.8g", "2.7g"],
            ["タイ風カオマンガイ", "エスニック", "334kcal", "15.7g", "4.5g"],
            ["梅香るタイ風焼き鳥-ガイヤーン-スイートチリソース", "エスニック", "428kcal", "23.8g", "4.1g"],
          ]}
        />
        <SubHeading>牛肉料理（19品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "ジャンル", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["じっくり煮込んだビーフシチュー 赤ワイン仕立て", "洋食", "458kcal", "15g", "3g"],
            ["ホロリととろける牛肉の本格欧風ビーフカレー", "洋食", "402kcal", "11.9g", "2g"],
            ["甘さ引き立つ完熟トマトのハッシュドビーフ", "洋食", "329kcal", "12.2g", "2.3g"],
            ["赤ワインで煮込んだビーフストロガノフ", "洋食", "333kcal", "10g", "2g"],
            ["2種の御膳-北海道産じゃが芋を使った肉じゃが＆レモン香る鱈のみぞれ煮-", "和食", "362kcal", "15.5g", "2.1g"],
            ["3種の出汁しみわたる 大阪名物「肉吸い」", "和食", "353kcal", "15.4g", "2.8g"],
            ["ご飯がすすむ牛の時雨煮", "和食", "488kcal", "19.8g", "3.6g"],
            ["コク旨さっぱり 牛肉のトマトすき焼き", "和食", "393kcal", "19.3g", "3.3g"],
            ["トロトロ牛すじ煮込み 白味噌仕立て", "和食", "438kcal", "16.3g", "2.2g"],
            ["味わいほっこり 牛肉とごぼうの時雨煮", "和食", "490kcal", "17.4g", "3.7g"],
            ["定番人気！旨みタレを絡めた牛バラ焼肉", "和食", "424kcal", "13.9g", "2.4g"],
            ["牛肉のとろ玉すき焼き トマト仕立て", "和食", "448kcal", "21.8g", "3.7g"],
            ["【パウチ商品】牛ホルモンと海鮮の韓国風辛口チゲ-ナッコプセ-", "中華・韓国料理", "174kcal", "15.6g", "2.9g"],
            ["ご飯がすすむ 五香粉香る牛肉と野菜のあんかけ", "中華・韓国料理", "374kcal", "12.3g", "2.1g"],
            ["ご飯がすすむ 牛バラ肉とにんにくの芽のオイスター炒め", "中華・韓国料理", "370kcal", "12.4g", "2.2g"],
            ["彩り野菜のプルコギビビンバ風", "中華・韓国料理", "307kcal", "11.4g", "1.7g"],
            ["花椒香る牛バラ肉と厚揚げの炒め物", "中華・韓国料理", "394kcal", "13.7g", "2.6g"],
            ["野菜たっぷり 牛バラ肉の中華炒め", "中華・韓国料理", "382kcal", "13g", "2.2g"],
            ["牛肉とピクルスの煮込み-ミロトン風-", "フレンチ", "371kcal", "10.6g", "3g"],
          ]}
        />
        <SubHeading>ハンバーグ（15品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "ジャンル", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["【数量限定 増量】ハンバーグ 飴色玉ねぎのシャリアピンソース", "洋食", "476kcal", "23.2g", "2.8g"],
            ["おうちで常夏気分♪ハワイアンロコモコ", "洋食", "405kcal", "19.5g", "3.5g"],
            ["ごろっと野菜 満腹ハンバーグカレー", "洋食", "401kcal", "15.7g", "3.4g"],
            ["アメリカンチーズハンバーグ", "洋食", "373kcal", "21.9g", "2.2g"],
            ["ハンバーグ  オレガノ香るトマトソース", "洋食", "319kcal", "16.3g", "2.4g"],
            ["ハンバーグ 濃厚ポルチーニ香るクリーミーソース", "洋食", "334kcal", "17.2g", "5g"],
            ["ハンバーグ 飴色玉ねぎのシャリアピンソース", "洋食", "359kcal", "16.6g", "2.1g"],
            ["鶏のハンバーグ にんにくトマトソース", "洋食", "343kcal", "17.5g", "3.1g"],
            ["鶏のハンバーグ 和風おろしソース", "和食", "263kcal", "15.1g", "2.5g"],
            ["鶏のハンバーグ 山椒香る和風ソース", "和食", "238kcal", "14.2g", "3.3g"],
            ["鹿肉と豆腐のがんもどき風 椎茸香るあんかけ", "和食", "293kcal", "19.4g", "3.3g"],
            ["ハンバーグ 白ワイン香るデミグラスソース-シャスール-", "フレンチ", "347kcal", "15.3g", "2.3g"],
            ["ハンバーグ 自家製赤ワインソース-ヴァンルージュ-", "フレンチ", "342kcal", "15.3g", "2.4g"],
            ["ハンバーグ　にんにく香るオニオンのコンポテ", "フレンチ", "356kcal", "15.2g", "2.1g"],
            ["北海道産鹿肉ハンバーグ 黒胡椒と白ワインのソース-ポワヴラード-", "フレンチ", "318kcal", "25.8g", "5.2g"],
          ]}
        />
        <SubHeading>カレー（13品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "ジャンル", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["12種スパイスのマイルドカレー-バターチキン＆ポークジンジャー-", "洋食", "558kcal", "22.6g", "2.7g"],
            ["【数量限定 増量】豚とグリル野菜の具だくさんキーマカレー", "洋食", "494kcal", "27.6g", "2.9g"],
            ["サバのマイルドカレー", "洋食", "299kcal", "9.6g", "4g"],
            ["シーフードとビーツのピンクスパイスカレー", "洋食", "276kcal", "12.2g", "2.2g"],
            ["スパイシーチキンラグーカレー", "洋食", "455kcal", "24.2g", "5.4g"],
            ["ハーブチキンカレーとチャツネのアクセント", "洋食", "417kcal", "23.8g", "3.3g"],
            ["豚とグリル野菜の具だくさんキーマカレー", "洋食", "354kcal", "19.4g", "2.1g"],
            ["魚介のラグーカレー", "洋食", "245kcal", "15.3g", "4.5g"],
            ["魚介の本格ホワイトカレー 濃厚クリーミー仕立て", "洋食", "283kcal", "12.5g", "2.7g"],
            ["鶏ひき肉のキーマカレー タイム風味", "洋食", "282kcal", "24.5g", "2.1g"],
            ["ココナッツミルクでまろやか チキンレッドカレー", "エスニック", "427kcal", "20.4g", "3.7g"],
            ["スパイス香る 揚げ茄子の入ったラムキーマカレー", "エスニック", "314kcal", "10g", "1.5g"],
            ["鶏と旬野菜のグリーンカレー", "エスニック", "417kcal", "19.4g", "2.8g"],
          ]}
        />
        <SubHeading>パスタ・ご飯もの（13品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "ジャンル", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["2種のパスタ -イカのフリットとジェノベーゼ＆鶏のアラビアータ トスカーナ風-", "洋食", "487kcal", "21.3g", "1.5g"],
            ["2種のパスタ -桜海老とたらこのソース&濃厚バジルクリームソース-", "洋食", "381kcal", "14.4g", "2.2g"],
            ["フレンチ仕立てのオムライス -2種のソースを添えて-", "洋食", "351kcal", "12.8g", "3.8g"],
            ["レモンでさっぱり ローストチキンと彩り野菜のパエリア", "洋食", "375kcal", "17.1g", "2.4g"],
            ["有頭海老と魚介の旨みあふれる シーフードパエリア", "洋食", "450kcal", "30.8g", "3.5g"],
            ["２種のパスタ-白ワイン香る魚介のペスカトーレ＆ポルチーニ香る鶏のクリームソース-", "洋食", "385kcal", "25.3g", "1.9g"],
            ["出汁で温まる 京風カレーのオムライス", "和食", "329kcal", "14.3g", "3.7g"],
            ["鶏の照り焼きと根菜の炊き込みご飯", "和食", "533kcal", "24.3g", "2.9g"],
            ["XO醤仕立ての本格炒飯 黒胡椒唐揚げ添え", "中華・韓国料理", "658kcal", "24.3g", "4.2g"],
            ["太麺中華焼きそば 海老の旨塩あん仕立て", "中華・韓国料理", "310kcal", "12.9g", "3.3g"],
            ["太麺中華焼きそば 紹興酒香る牛肉のオイスターソース仕立て ", "中華・韓国料理", "424kcal", "13g", "3.7g"],
            ["アメリカ南部の郷土料理 鶏と野菜のジャンバラヤ", "エスニック", "550kcal", "26.6g", "3.8g"],
            ["甘辛タオチオソースのカオマンガイ〈ジャスミンライス使用〉", "エスニック", "573kcal", "26.8g", "2.7g"],
          ]}
        />
        <SubHeading>グラタン（6品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "ジャンル", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["北海道産鹿肉を使った自家製ミートグラタン", "洋食", "307kcal", "13.8g", "2.1g"],
            ["大豆ミートを使ったギリシャ風グラタン -ムサカ-", "洋食", "313kcal", "7.2g", "2.3g"],
            ["魚介だしが効いた 濃厚シーフードグラタン", "洋食", "355kcal", "18.6g", "2.2g"],
            ["牡蠣ときのこの贅沢味噌グラタン", "和食", "367kcal", "15.2g", "3g"],
            ["大豆ミートを使ったフランス風グラタン-アッシェ・パルマンティエ-", "フレンチ", "310kcal", "8.6g", "2.3g"],
            ["鶏と南瓜のグラタン-ドフィノワ風-", "フレンチ", "357kcal", "13.3g", "2.1g"],
          ]}
        />
        <SubHeading>その他（公式の分類外）（6品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "ジャンル", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["ハーブ香る12種野菜のミネストローネ（もち麦入り）／170g", "洋食", "91kcal", "3.6g", "1.4g"],
            ["飴色玉葱を使った食べるオニオングラタンスープ", "洋食", "135kcal", "6.9g", "2.3g"],
            ["かつお出汁香る6種具材の豚汁／180g", "和食", "99kcal", "6.3g", "1.9g"],
            ["ハンバーグ 和風おろしソース", "和食", "375kcal", "20.7g", "3.5g"],
            ["柚子香る太刀魚の大根おろし煮", "和食", "235kcal", "22.9g", "3.2g"],
            ["レモングラス香るトムヤムクン", "エスニック", "97kcal", "6.2g", "2.2g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://deli-picks.com/collection/" target="_blank" rel="noopener noreferrer" className="text-accent underline">DELIPICKS 公式メニュー一覧</a>の掲載データ（2026年11月14日確認）。販売状況・メニュー名・栄養成分は変わることがあります。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">デリピックスのメニューは、2026年11月14日の公式一覧で180品が掲載され、豚肉・魚介・鶏肉料理と洋食・フレンチが中心でした。たんぱく質を重視するなら鶏肉料理、塩分を控えたいなら魚介料理から選ぶと条件に合う品を見つけやすくなります。毎月新メニューが加わるため、最新の掲載は公式サイトでご確認ください。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・送料・メニューは変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>デリピックス公式のメニュー一覧を見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/delipicks-otameshi/" className="text-accent hover:text-accent-dark transition-colors">DELIPICKS（デリピックス）のお試し・特徴まとめ</Link></li>
            <li><Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">高たんぱくの宅配弁当ランキング</Link></li>
            <li><Link href="/articles/fitdish-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">FitDish（フィットディッシュ）の口コミ・評判</Link></li>
            <li><Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリの口コミ・評判</Link></li>
            <li><Link href="/articles/ana-kinaishoku-tsuhan/" className="text-accent hover:text-accent-dark transition-colors">ANAの機内食は通販で買える？</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
