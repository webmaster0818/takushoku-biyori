import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "三ツ星ファームのおすすめメニュー｜公式の人気順と目的別（高たんぱく・低糖質・減塩）を全129品の栄養成分で集計【2026年11月】";
const ARTICLE_DESCRIPTION =
  "三ツ星ファームのメニュー一覧（2026年11月17日時点で注文できるおかず129品）を、公式の並べ替え「人気順」と栄養成分の掲載値で整理しました。人気順の上位15品、たんぱく質の多いメニュー、糖質・塩分の少ないメニュー、三ツ星基準を満たすメニューの数を当サイトで集計しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mitsuboshi-osusume-menu/";
const OFFICIAL_URL = "https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "三ツ星ファーム おすすめメニュー, 三ツ星ファーム 人気メニュー, 三ツ星ファーム メニュー, 三ツ星ファーム ランキング, 三ツ星ファーム 高たんぱく, 三ツ星ファーム 低糖質, 三ツ星基準",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-17T00:00:00+09:00",
    modifiedTime: "2026-11-17T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "三ツ星ファームで人気のメニューは？", answer: "2026年11月17日時点の公式メニュー一覧の「人気順」では、とろけるチーズの王道デミグラスハンバーグ、生姜香る甘辛タレ 豚肉のやみつき生姜焼き、たっぷりタルタル 国産鶏肉のチキン南蛮が上位でした（注文できるおかずのみ）。" },
  { question: "三ツ星基準とは何ですか？", answer: "公式のメニュー一覧の注記で「350kcal以下/糖質25g以下/タンパク質15g以上の3つすべてを満たしている商品」と説明されている分類です。" },
  { question: "メニューは何種類ありますか？", answer: "2026年11月17日に取得したデータでは、定期便のメニューが159品あり、注文できるものは144品でした。そのうちミールキット・スイーツ・パン・ドリンクを除くおかずは129品です。" },
  { question: "たんぱく質が多いメニューは？", answer: "9ヶ月熟成生ハム フランス産ジャンボンセック（25.7g）が最も多く、たんぱく質20g以上のメニューは18品でした（当サイト集計）。" },
  { question: "塩分が気になる場合はどう選べばよいですか？", answer: "注文できるおかず129品の食塩相当量の中央値は2.2gで、2.0g以下が47品、3gを超えるものが11品ありました。記事内の「塩分が少ないメニュー」の表を参考にし、各メニューの掲載値で確認してください。" },
  { question: "追加料金がかかるメニューはありますか？", answer: "あります。カナダ産 鮮馬刺し 桜うまトロタレ袋入り 袋入り・たれ付きは＋100円（税込）、香ばし炭火焼き ジューシーチキンレッグは＋270円（税込）でした（2026年11月17日確認）。" },
];

const sections = [
  { id: "ranking", label: "公式の「人気順」上位15品" },
  { id: "standard", label: "三ツ星基準を満たすメニュー" },
  { id: "purpose", label: "目的別のおすすめ（当サイト集計）" },
  { id: "category", label: "ジャンル別の品数と人気順の最上位" },
  { id: "big", label: "量が多いメニュー（400kcal以上）" },
  { id: "notes", label: "追加料金・新メニュー・数値の注意" },
  { id: "list", label: "注文できるおかず129品の一覧" },
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
          <span className="text-foreground">三ツ星ファームのおすすめメニュー</span>
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
      <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-[10px] text-gray-400 mt-2">PR・本記事はアフィリエイト広告を含みます</p>
    </div>
  );
}


export default function MitsuboshiOsusumeMenuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-17T00:00:00+09:00",
    dateModified: "2026-11-17T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "三ツ星ファームのおすすめメニュー" },
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
            <time dateTime="2026-11-17">公開: 2026年11月17日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※PR・本記事はアフィリエイト広告を含みます。メニュー・栄養成分・人気順は公式サイトの掲載にもとづいています。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            三ツ星ファームは、料理人が監修した冷凍のおかずを定期便で届ける宅配食です。メニューは毎回自分で選べるため、「どれを頼めばよいか」で迷う方も多いサービスです。
          </p>
          <p className="mb-3">
            この記事では、2026年11月17日に公式のメニュー一覧ページが読み込むメニューデータを取得し、<strong>注文できるおかず129品</strong>について、公式の並べ替え「人気順」の順位と、各メニューの栄養成分（エネルギー・たんぱく質・糖質・食塩相当量など）を当サイトで集計しました。「おすすめ」は当サイトの好みではなく、<strong>公式の人気順と、公式の掲載値から計算できる条件</strong>だけで選んでいます。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">三ツ星ファームのおすすめメニューの要点</p>
          <p className="text-sm leading-relaxed mb-4">公式の人気順で上位に並ぶのは、チーズのデミグラスハンバーグ・豚の生姜焼き・チキン南蛮などの定番のおかずです。上位15品のうち13品が「三ツ星基準」（350kcal以下・糖質25g以下・たんぱく質15g以上）を満たしています。注文できるおかず129品全体では78品が三ツ星基準を満たし、たんぱく質20g以上は18品、食塩相当量2.0g以下は47品でした（2026年11月17日・当サイト集計）。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 集計でわかったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>人気順の上位15品中13品が三ツ星基準を満たす</li><li>全メニューの栄養成分が公式に掲載されている</li><li>高たんぱく・低糖質・減塩の条件で選び分けられる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>食塩相当量3g超のメニューが11品ある</li><li>糖質の記載がないメニューが30品ある</li><li>人気順の算出方法は公式に記載がない</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">三ツ星ファーム 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="ranking">公式の「人気順」上位15品</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式のメニュー一覧には「人気順」「新着順」「カロリー順」「タンパク質順」などの並べ替えがあります。人気順の順位データから、現在注文できるおかずだけを上から並べると次のとおりです（ミールキット・スイーツ・パン・ドリンクは除いています）。</p>
        <ComparisonTable
          headers={["公式の人気順", "メニュー名", "エネルギー", "たんぱく質", "糖質", "食塩相当量", "三ツ星基準"]}
          rows={[
            ["1位", "とろけるチーズの王道デミグラスハンバーグ", "348kcal", "15.8g", "19.3g", "2.5g", "○"],
            ["2位", "生姜香る甘辛タレ 豚肉のやみつき生姜焼き", "333kcal", "18.2g", "23.2g", "2.3g", "○"],
            ["4位", "たっぷりタルタル 国産鶏肉のチキン南蛮", "321kcal", "23.9g", "19.2g", "1.7g", "○"],
            ["5位", "心温まる 海老とチキンのマカロニグラタン", "292kcal", "19.3g", "16.8g", "1.5g", "○"],
            ["6位", "黒酢と香酢 ごろごろ野菜の特製酢豚", "264kcal", "16.1g", "24.9g", "2.3g", "○"],
            ["7位", "豚肉とかぼちゃのやみつきニンニク白味噌だれ", "286kcal", "20g", "18.3g", "2.1g", "○"],
            ["8位", "幸せタルタルの国産サーモンフライ", "328kcal", "15.8g", "22.2g", "1.7g", "○"],
            ["9位", "ミートボール はちみつ甘酢あんかけ", "307kcal", "15.4g", "25g", "2.5g", "○"],
            ["10位", "とろ～り卵を添えた豚肉とキクラゲの中華あん", "224kcal", "16.5g", "14.5g", "2g", "○"],
            ["11位", "ねぎ塩うまだれチキン竜田揚げ", "315kcal", "15.2g", "18.6g", "2.2g", "○"],
            ["13位", "メガ盛り メンチカツと懐かしのナポリタン", "493kcal", "14.3g", "54.4g", "3.9g", "−"],
            ["15位", "旨々ホイコーローと 定番中華の味セット", "319kcal", "15g", "17.3g", "2.6g", "○"],
            ["16位", "蝦醤香る特製エビのチリソース煮", "268kcal", "15.8g", "17.3g", "1.7g", "○"],
            ["17位", "和だし染みる コリコリ軟骨鶏団子の生姜スープ", "273kcal", "20.6g", "15.8g", "2.4g", "−"],
            ["18位", "ごろごろ野菜と香味タレの贅沢油淋鶏", "316kcal", "17.3g", "14.2g", "1.9g", "○"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧（並べ替え「人気順」）</a>（2026年11月17日取得）。順位は公式の人気順のままで、品切れ等で注文できないメニューとおかず以外の商品を除いたため欠番があります。公式は人気順の算出方法（期間・件数）を公開していません。</p>
        <p className="text-sm mb-6 leading-relaxed">上位15品のたんぱく質は14.3〜23.9gで、ハンバーグ・生姜焼き・チキン南蛮・酢豚といった定番のおかずが中心です。初めて頼む場合の目安になりますが、人気順は味の評価を直接示すものではありません。味の評判は<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファームの口コミ・評判</Link>で、出典付きで整理しています。</p>
        <SectionHeading id="standard">三ツ星基準を満たすメニュー</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式のメニュー一覧には「三ツ星基準」という分類があり、一覧の注記で「350kcal以下/糖質25g以下/タンパク質15g以上の3つすべてを満たしている商品です」と説明されています。</p>
        <ComparisonTable
          headers={["項目", "結果（当サイト集計）"]}
          rows={[
            ["注文できるおかず", "129品"],
            ["三ツ星基準の分類がついているメニュー", "78品"],
            ["そのうち掲載値で3条件を満たすもの", "78品"],
            ["三ツ星基準以外（パスタ・丼・メガ盛り・副菜など）", "51品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>の注記「三ツ星基準とは…」と各メニューの栄養成分（2026年11月17日取得）。当サイトが掲載値で3条件を照合しました。</p>
        <p className="text-sm mb-6 leading-relaxed">三ツ星基準の分類がついたメニューは、掲載値でもすべて3つの条件を満たしていました。カロリーや糖質を抑えたい方は、一覧で「三ツ星基準」に絞り込んでから選ぶと、条件に合わないメニューを避けられます。糖質を基準に宅配食を比べたい場合は<Link href="/articles/toushitsu-seigen-osusume/" className="text-accent underline">糖質制限向けの宅配弁当の比較</Link>も参考になります。</p>
        <SectionHeading id="purpose">目的別のおすすめ（当サイト集計）</SectionHeading>
        <SubHeading>たんぱく質が多いメニュー（多い順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "たんぱく質", "エネルギー", "食塩相当量", "人気順"]}
          rows={[
            ["9ヶ月熟成生ハム フランス産ジャンボンセック", "25.7g", "253kcal", "5.6g", "208位"],
            ["タンドリー風スパイスチキン", "25.6g", "327kcal", "1.8g", "23位"],
            ["ナポリの風香る チーズをまとったトマトチキン", "24.9g", "302kcal", "1.7g", "20位"],
            ["たっぷりタルタル 国産鶏肉のチキン南蛮", "23.9g", "321kcal", "1.7g", "4位"],
            ["メガ盛り 旨味絡むよくばりマッケンチーズ", "23.4g", "555kcal", "2.8g", "112位"],
            ["香ばし炭火焼き ジューシーチキンレッグ", "23g", "171kcal", "0.9g", "−"],
            ["ホッと一息 2種の麦と鶏もも肉の生姜参鶏湯", "22.8g", "273kcal", "2g", "89位"],
            ["コク旨ペッパーチキン", "22.6g", "269kcal", "1.8g", "50位"],
          ]}
        />
        <SubHeading>糖質が少ないメニュー（200kcal以上から少ない順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "糖質", "たんぱく質", "エネルギー", "人気順"]}
          rows={[
            ["柚子風味 ジューシー豚しゃぶ", "7.6g", "16.5g", "263kcal", "161位"],
            ["ローストチキン スパイスバターのカリー仕立て", "11g", "22g", "297kcal", "75位"],
            ["彩り野菜とスパイシーケイジャンチキン", "11.1g", "20.9g", "338kcal", "25位"],
            ["ほっこり旨み広がる 3種のソーセージポトフ", "11.3g", "15.6g", "281kcal", "73位"],
            ["ほっこり味わい 赤魚と豆腐の寄せ煮", "11.5g", "18.5g", "210kcal", "76位"],
            ["コク旨 やわらか豚肉の濃厚中華みそ仕立て", "11.6g", "16.5g", "262kcal", "66位"],
            ["ロールキャベツのやさしさ豆乳スープ仕立て", "12g", "15.3g", "271kcal", "107位"],
            ["旨みあふれる 豚肉のクリーミー粒マスタード", "12.5g", "18.7g", "253kcal", "59位"],
          ]}
        />
        <SubHeading>塩分が少ないメニュー（200kcal以上・たんぱく質15g以上から少ない順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "食塩相当量", "たんぱく質", "エネルギー", "人気順"]}
          rows={[
            ["三ツ星朝ごはん 鮭の香ばしごま味噌西京焼き", "1.1g", "15.4g", "337kcal", "61位"],
            ["肉厚サバの ピーナッツ味噌焼き仕立て", "1.4g", "16.3g", "327kcal", "21位"],
            ["ほっこり味わい 赤魚と豆腐の寄せ煮", "1.4g", "18.5g", "210kcal", "76位"],
            ["ピリッとスパイス コク旨チキンスープカレー", "1.4g", "16.3g", "250kcal", "82位"],
            ["心温まる 海老とチキンのマカロニグラタン", "1.5g", "19.3g", "292kcal", "5位"],
            ["丹波の西京味噌の銀鮭焼き弁当", "1.5g", "18.6g", "295kcal", "19位"],
            ["カレイの天ぷらと出汁染みる揚げ出し豆腐", "1.5g", "15.2g", "308kcal", "51位"],
            ["ローストチキン スパイスバターのカリー仕立て", "1.6g", "22g", "297kcal", "75位"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>の掲載値（2026年11月17日取得）を当サイトが並べ替え。同じ値のときは人気順の上位を先にしています。人気順の「−」は順位データに含まれていないメニューです。</p>
        <p className="text-sm mb-6 leading-relaxed">注文できるおかず全体の中央値は、たんぱく質15.8g・糖質20g・食塩相当量2.2gでした。糖質と塩分の表は、副菜や丼の具のような小さいメニューが並ばないように、200kcal以上（塩分はたんぱく質15g以上も）に絞っています。</p>
        <SectionHeading id="category">ジャンル別の品数と人気順の最上位</SectionHeading>
        <ComparisonTable
          headers={["ジャンル（公式の分類）", "品数", "うち三ツ星基準", "人気順の最上位"]}
          rows={[
            ["お肉系", "65品", "58品", "とろけるチーズの王道デミグラスハンバーグ"],
            ["魚介系", "22品", "18品", "心温まる 海老とチキンのマカロニグラタン"],
            ["洋食系", "36品", "28品", "とろけるチーズの王道デミグラスハンバーグ"],
            ["和食系", "29品", "23品", "生姜香る甘辛タレ 豚肉のやみつき生姜焼き"],
            ["中華系", "15品", "13品", "黒酢と香酢 ごろごろ野菜の特製酢豚"],
            ["エスニック", "11品", "11品", "タンドリー風スパイスチキン"],
            ["韓国料理", "3品", "3品", "特製醤油だれで引き立つ 牛の香ばしチャプチェ"],
            ["パスタ", "10品", "0品", "【割烹鈴なり監修】もちもち生パスタのあさりの和風たらこクリーム"],
            ["スープ系", "4品", "0品", "【数量限定】お鍋で簡単 ぷりぷり牛もつ鍋キット"],
            ["野菜", "6品", "6品", "黒酢と香酢 ごろごろ野菜の特製酢豚"],
            ["その他", "17品", "2品", "メガ盛り とろっと卵の王道オムライス"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>の分類（2026年11月17日取得）を当サイトが集計。1つのメニューが複数の分類に入るため、品数の合計は129品を超えます。</p>
        <SectionHeading id="big">量が多いメニュー（400kcal以上）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">三ツ星ファームは低カロリーのおかずが中心ですが、パスタ・丼・「メガ盛り」など、1食で400kcalを超えるメニューも19品あります。ご飯を用意せずに1食を済ませたい日や、量が欲しい方向けの選択肢です。</p>
        <ComparisonTable
          headers={["メニュー名", "エネルギー", "糖質", "食塩相当量"]}
          rows={[
            ["専門店級のしびれと香り 具沢山麻辣湯キット", "811kcal", "記載なし", "4.9g"],
            ["メガ盛り 旨味絡むよくばりマッケンチーズ", "555kcal", "46.5g", "2.8g"],
            ["満腹ソーセージと鱈フライ 特製タルタル乗せ", "554kcal", "33.6g", "3g"],
            ["メガ盛り とろっと卵の王道オムライス", "551kcal", "70.3g", "3.2g"],
            ["メガ盛り ガッツリ豚肉の生姜焼き丼", "535kcal", "65.2g", "2.6g"],
            ["【割烹鈴なり監修】もちもち生パスタのあさりの和風たらこクリーム", "515kcal", "記載なし", "3.2g"],
            ["ガッツリ満足 背徳のペペロンチーノ", "495kcal", "45.3g", "3g"],
            ["メガ盛り メンチカツと懐かしのナポリタン", "493kcal", "54.4g", "3.9g"],
            ["三ツ星ナポリ風ピッツァ 照り焼きチキン", "481kcal", "記載なし", "3.2g"],
            ["もちもち生パスタの揚げなすの和ナポリタン", "454kcal", "記載なし", "1.9g"],
            ["もちもち生パスタの濃厚カルボナーラ", "452kcal", "64.1g", "2.6g"],
            ["お子さまプレート えがお咲くチキンライス", "445kcal", "68.1g", "3.1g"],
            ["満腹310g超 かき込め旨辛麻婆丼", "441kcal", "60.5g", "2.7g"],
            ["メガ盛り 屋台風マヨチャーシュー焼きそば", "422kcal", "43.9g", "5g"],
            ["もちもち生パスタの濃厚海老トマトクリーム", "421kcal", "57g", "2.4g"],
            ["メガ盛り 魚介味わう海老イカＷフライパスタ", "419kcal", "38.6g", "2.8g"],
            ["三ツ星ナポリ風ピッツァ マルゲリータ", "417kcal", "記載なし", "2.2g"],
            ["スパイス香る 野菜ともち麦ごはんの欧風チーズカレー", "413kcal", "記載なし", "2.1g"],
            ["もちもち生パスタの海老の和風レモンクリーム", "409kcal", "記載なし", "1.7g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>の掲載値（2026年11月17日取得）。「記載なし」は公式に糖質の掲載がないメニューです。</p>
        <SectionHeading id="notes">追加料金・新メニュー・数値の注意</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>追加料金のあるメニュー: カナダ産 鮮馬刺し 桜うまトロタレ袋入り 袋入り・たれ付き（＋100円・税込）、香ばし炭火焼き ジューシーチキンレッグ（＋270円・税込）</li><li>新メニューの表示があるもの（12品）: 海老とほっくりじゃがいものビストロアヒージョ、満腹310g超 かき込め旨辛麻婆丼、やみつき濃厚ソースと絡む ぷりっと海老マヨ、牛豚焼き上げハンバーグ、もちもち生パスタの揚げなすの和ナポリタン、もちもち生パスタの海老の和風レモンクリーム、燻製香る 濃厚サーモンクリームチーズ、肉厚あふれる旨み 骨付きポークフランク、りんごチップ香る しっとり合鴨スモーク、9ヶ月熟成生ハム フランス産ジャンボンセック、カナダ産 鮮馬刺し 桜うまトロタレ袋入り 袋入り・たれ付き、香ばし炭火焼き ジューシーチキンレッグ</li><li>糖質・食物繊維の掲載がないメニューが30品あります（パスタ・カレー・ピッツァ・鍋キット・おつまみ系など）。公式の掲載はエネルギー・たんぱく質・脂質・炭水化物・食塩相当量のみです</li><li>2026年11月17日時点で品切れ等により注文できないメニューが15品ありました（表には含めていません）</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>（2026年11月17日取得）</p>
        <p className="text-sm mb-6 leading-relaxed">料金・送料・解約の締切は<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファームの口コミ・評判</Link>、初回の割引は<Link href="/articles/mitsuboshi-coupon/" className="text-accent underline">三ツ星ファームのクーポン・キャンペーン</Link>で確認できます。</p>
        <SectionHeading id="list">注文できるおかず129品の一覧</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式の人気順に並べています。</p>
        <ComparisonTable
          headers={["人気順", "メニュー名", "エネルギー", "たんぱく質", "糖質", "食塩相当量", "三ツ星基準"]}
          rows={[
            ["1位", "とろけるチーズの王道デミグラスハンバーグ", "348kcal", "15.8g", "19.3g", "2.5g", "○"],
            ["2位", "生姜香る甘辛タレ 豚肉のやみつき生姜焼き", "333kcal", "18.2g", "23.2g", "2.3g", "○"],
            ["4位", "たっぷりタルタル 国産鶏肉のチキン南蛮", "321kcal", "23.9g", "19.2g", "1.7g", "○"],
            ["5位", "心温まる 海老とチキンのマカロニグラタン", "292kcal", "19.3g", "16.8g", "1.5g", "○"],
            ["6位", "黒酢と香酢 ごろごろ野菜の特製酢豚", "264kcal", "16.1g", "24.9g", "2.3g", "○"],
            ["7位", "豚肉とかぼちゃのやみつきニンニク白味噌だれ", "286kcal", "20g", "18.3g", "2.1g", "○"],
            ["8位", "幸せタルタルの国産サーモンフライ", "328kcal", "15.8g", "22.2g", "1.7g", "○"],
            ["9位", "ミートボール はちみつ甘酢あんかけ", "307kcal", "15.4g", "25g", "2.5g", "○"],
            ["10位", "とろ～り卵を添えた豚肉とキクラゲの中華あん", "224kcal", "16.5g", "14.5g", "2g", "○"],
            ["11位", "ねぎ塩うまだれチキン竜田揚げ", "315kcal", "15.2g", "18.6g", "2.2g", "○"],
            ["13位", "メガ盛り メンチカツと懐かしのナポリタン", "493kcal", "14.3g", "54.4g", "3.9g", "−"],
            ["15位", "旨々ホイコーローと 定番中華の味セット", "319kcal", "15g", "17.3g", "2.6g", "○"],
            ["16位", "蝦醤香る特製エビのチリソース煮", "268kcal", "15.8g", "17.3g", "1.7g", "○"],
            ["17位", "和だし染みる コリコリ軟骨鶏団子の生姜スープ", "273kcal", "20.6g", "15.8g", "2.4g", "−"],
            ["18位", "ごろごろ野菜と香味タレの贅沢油淋鶏", "316kcal", "17.3g", "14.2g", "1.9g", "○"],
            ["19位", "丹波の西京味噌の銀鮭焼き弁当", "295kcal", "18.6g", "23.4g", "1.5g", "○"],
            ["20位", "ナポリの風香る チーズをまとったトマトチキン", "302kcal", "24.9g", "20g", "1.7g", "○"],
            ["21位", "肉厚サバの ピーナッツ味噌焼き仕立て", "327kcal", "16.3g", "14.1g", "1.4g", "○"],
            ["22位", "白身魚の甘辛特製黒酢あん", "240kcal", "14.1g", "23.1g", "2.3g", "−"],
            ["23位", "タンドリー風スパイスチキン", "327kcal", "25.6g", "17.2g", "1.8g", "○"],
            ["25位", "彩り野菜とスパイシーケイジャンチキン", "338kcal", "20.9g", "11.1g", "2.5g", "○"],
            ["26位", "レモンバターのやみつきローストチキン", "310kcal", "22.2g", "18.7g", "1.7g", "○"],
            ["27位", "ジューシー鶏唐揚げのさわやかレモンタルタル", "275kcal", "17.3g", "25g", "2.5g", "○"],
            ["28位", "メガ盛り ガッツリ豚肉の生姜焼き丼", "535kcal", "21g", "65.2g", "2.6g", "−"],
            ["29位", "特製醤油だれで引き立つ 牛の香ばしチャプチェ", "299kcal", "15g", "19.7g", "2.5g", "○"],
            ["30位", "溢れる肉感 香ばしニンニク醤油のハンバーグ", "334kcal", "19.6g", "20.5g", "1.9g", "○"],
            ["31位", "特製タレで漬け込んだ やみつき鶏天弁当", "315kcal", "20.4g", "21.3g", "2.5g", "○"],
            ["32位", "メガ盛り とろっと卵の王道オムライス", "551kcal", "16.4g", "70.3g", "3.2g", "−"],
            ["34位", "3種のチーズのカルボナーラ風 ハンバーグ", "342kcal", "19.5g", "21.5g", "2.5g", "○"],
            ["35位", "【割烹鈴なり監修】もちもち生パスタのあさりの和風たらこクリーム", "515kcal", "16.3g", "記載なし", "3.2g", "−"],
            ["36位", "食欲そそる 香味ねぎ塩ダレのやわらか豚肉", "284kcal", "17.4g", "16.5g", "2.4g", "○"],
            ["37位", "メガ盛り 魚介味わう海老イカＷフライパスタ", "419kcal", "14.5g", "38.6g", "2.8g", "−"],
            ["38位", "ふんわり洋風つくねと野菜のラタトゥイユソース", "259kcal", "15g", "16.7g", "2g", "○"],
            ["41位", "パパッと簡単 サーモンたたき丼の具", "95kcal", "7.9g", "3.5g", "2g", "−"],
            ["42位", "じっくり煮込んだ至福の口溶け 八角香る贅沢豚角煮", "236kcal", "15.4g", "記載なし", "1.9g", "−"],
            ["44位", "スパイス引き立つ いろどりタコミート", "227kcal", "15g", "15.6g", "2.1g", "○"],
            ["45位", "海老カツと 濃厚エビトマトクリームのW仕立て", "337kcal", "15.7g", "23.2g", "1.7g", "○"],
            ["46位", "和風だし香る ぷりぷり海老かつ卵とじ", "288kcal", "15.1g", "20.2g", "2.2g", "○"],
            ["47位", "洋食屋さん風 コク旨やわらかポークチャップ", "266kcal", "16.5g", "24.9g", "2g", "○"],
            ["48位", "じっくり香ばしく焼き上げた 牛カルビライスバーガー", "213kcal", "5.6g", "69g※", "1.3g", "−"],
            ["50位", "コク旨ペッパーチキン", "269kcal", "22.6g", "22.9g", "1.8g", "○"],
            ["51位", "カレイの天ぷらと出汁染みる揚げ出し豆腐", "308kcal", "15.2g", "13.2g", "1.5g", "○"],
            ["52位", "やさしい旨み広がる 魚介とゆずの八宝菜", "216kcal", "15.2g", "14.2g", "2.5g", "○"],
            ["53位", "スパイス香る バターチキンカレー", "390kcal", "9.9g", "記載なし", "2g", "−"],
            ["54位", "マッシュルームソースの洋風チキンカツ", "349kcal", "18g", "22.1g", "2.2g", "○"],
            ["55位", "デミ&ホワイト ハンバーグ2種のソース", "349kcal", "15.2g", "25g", "2.2g", "○"],
            ["56位", "とろーりタイ風コク旨ガパオ", "231kcal", "15.2g", "13.2g", "1.8g", "○"],
            ["57位", "瀬戸内産レモン香る ふんわりカツ煮", "266kcal", "15.1g", "23.3g", "2.3g", "○"],
            ["58位", "鶏つくね あおさ香るとろ～りチーズクリーム", "314kcal", "16.1g", "21.9g", "2.5g", "○"],
            ["59位", "旨みあふれる 豚肉のクリーミー粒マスタード", "253kcal", "18.7g", "12.5g", "1.9g", "○"],
            ["61位", "三ツ星朝ごはん 鮭の香ばしごま味噌西京焼き", "337kcal", "15.4g", "44.6g", "1.1g", "−"],
            ["62位", "溢れる肉感 きのこのホワイトソースハンバーグ", "301kcal", "18.7g", "17.9g", "2.2g", "○"],
            ["63位", "香ばしカレイの唐揚げユーリンソース", "323kcal", "19.7g", "20.8g", "2.1g", "○"],
            ["65位", "満腹ソーセージと鱈フライ 特製タルタル乗せ", "554kcal", "20.7g", "33.6g", "3g", "−"],
            ["66位", "コク旨 やわらか豚肉の濃厚中華みそ仕立て", "262kcal", "16.5g", "11.6g", "2.1g", "○"],
            ["67位", "イカと揚げ茄子のピリ辛チリソース", "340kcal", "16.1g", "22.5g", "2.3g", "○"],
            ["69位", "白身フライのつぶつぶたらこマヨソース", "302kcal", "15.1g", "22g", "2.1g", "○"],
            ["70位", "うま辛濃厚ごまダレの 担々風ハンバーグ", "310kcal", "16.2g", "18.8g", "2.1g", "○"],
            ["71位", "ピリ辛 やわらか豚肉の濃厚豆乳ごま味噌仕立て", "295kcal", "16.3g", "14.9g", "2.1g", "○"],
            ["72位", "どこか懐かしい 染みうま味噌おでん", "187kcal", "15.7g", "16g", "2.5g", "○"],
            ["73位", "ほっこり旨み広がる 3種のソーセージポトフ", "281kcal", "15.6g", "11.3g", "2.2g", "○"],
            ["74位", "鶏と味染みナスの さっぱりみぞれあん", "263kcal", "18.8g", "14.4g", "1.8g", "○"],
            ["75位", "ローストチキン スパイスバターのカリー仕立て", "297kcal", "22g", "11g", "1.6g", "○"],
            ["76位", "ほっこり味わい 赤魚と豆腐の寄せ煮", "210kcal", "18.5g", "11.5g", "1.4g", "○"],
            ["77位", "牛の旨味染みわたる キーマカレー", "322kcal", "16.7g", "16.9g", "2.3g", "○"],
            ["78位", "鈴なり 白身魚の和風梅ソースとお野菜のおばんざい", "235kcal", "16.2g", "16g", "2.5g", "○"],
            ["79位", "ポルチーニの芳醇な香り 大人のグラタン", "350kcal", "16.2g", "22.9g", "2.3g", "○"],
            ["80位", "韓国風 やわらか豚肉と厚揚げの旨辛みそ仕立て", "317kcal", "20.5g", "24.2g", "2.4g", "○"],
            ["81位", "三ツ星ナポリ風ピッツァ マルゲリータ", "417kcal", "17.3g", "記載なし", "2.2g", "−"],
            ["82位", "ピリッとスパイス コク旨チキンスープカレー", "250kcal", "16.3g", "16.5g", "1.4g", "○"],
            ["83位", "ガッツリ満足 背徳のペペロンチーノ", "495kcal", "15.4g", "45.3g", "3g", "−"],
            ["84位", "洋食屋さんのハンバーグ 大人のカレーソース", "296kcal", "15.8g", "22.9g", "2g", "○"],
            ["85位", "ジューシー鶏唐揚げの甘辛スイートチリソース", "270kcal", "18g", "24.9g", "2.4g", "○"],
            ["86位", "【割烹鈴なり監修】もちもち生パスタの海老と揚げ玉のきんぴら風", "388kcal", "13.7g", "記載なし", "2.9g", "−"],
            ["87位", "【数量限定】お鍋で簡単 ぷりぷり牛もつ鍋キット", "146kcal", "9.1g", "記載なし", "7.2g", "−"],
            ["88位", "鶏ともち麦の濃厚チーズリゾット", "333kcal", "18.1g", "24.5g", "2.1g", "○"],
            ["89位", "ホッと一息 2種の麦と鶏もも肉の生姜参鶏湯", "273kcal", "22.8g", "記載なし", "2g", "−"],
            ["90位", "【数量限定】お鍋で簡単 餅巾着ちゃんこ鍋キット", "255kcal", "15.3g", "記載なし", "6.2g", "−"],
            ["91位", "三ツ星ナポリ風ピッツァ 照り焼きチキン", "481kcal", "21.2g", "記載なし", "3.2g", "−"],
            ["92位", "スパイス香る 野菜ともち麦ごはんの欧風チーズカレー", "413kcal", "12.1g", "記載なし", "2.1g", "−"],
            ["93位", "印と和のあいがけ ポークビンダルー＆和風キーマ", "394kcal", "13g", "記載なし", "1.7g", "−"],
            ["94位", "メガ盛り 屋台風マヨチャーシュー焼きそば", "422kcal", "12.9g", "43.9g", "5g", "−"],
            ["96位", "ホッと一息 10品目具材と3種味噌の優しい豚汁", "253kcal", "12.4g", "記載なし", "2.7g", "−"],
            ["102位", "ビストロ風トマトが入ったハッシュドビーフ", "290kcal", "15g", "14.8g", "2g", "○"],
            ["104位", "絶妙スパイス仕立ての バターチキンカレー", "345kcal", "16.2g", "13.2g", "1.9g", "○"],
            ["105位", "3種のだしと明太子のふわとろかき玉うどん", "284kcal", "10.7g", "42.8g", "4.2g", "−"],
            ["106位", "しにせの京なま麩 湯葉あんかけ仕立て", "205kcal", "16.7g", "19.7g", "2.1g", "○"],
            ["107位", "ロールキャベツのやさしさ豆乳スープ仕立て", "271kcal", "15.3g", "12g", "2.5g", "○"],
            ["108位", "タイ風春雨の炒めもの", "311kcal", "15g", "24.1g", "2.5g", "○"],
            ["110位", "魚介のコクと旨みの 海鮮チゲ風", "172kcal", "15.2g", "10.6g", "1.8g", "○"],
            ["112位", "メガ盛り 旨味絡むよくばりマッケンチーズ", "555kcal", "23.4g", "46.5g", "2.8g", "−"],
            ["113位", "もち麦入りチリソースたっぷりハンバーグ", "289kcal", "16.2g", "22.1g", "1.9g", "○"],
            ["114位", "華味鳥コロッケ", "157kcal", "8.9g", "記載なし", "0.7g", "−"],
            ["118位", "芳香デミグラスの深いコク 大人の洋風もつ煮", "285kcal", "15.4g", "23.5g", "2.5g", "○"],
            ["119位", "にんにくガツン 背徳のやわらかもつ煮", "268kcal", "17.4g", "14.5g", "2.5g", "○"],
            ["123位", "アスパラと楽しむ 香り立つジェノベーゼパスタ", "395kcal", "12.5g", "記載なし", "2.9g", "−"],
            ["124位", "水菜と豚肉のシャキシャキ鍋仕立て", "267kcal", "15.1g", "14.8g", "2.3g", "○"],
            ["126位", "揚げ茄子のアラビアータ風 トマトソースパスタ", "334kcal", "14.5g", "記載なし", "3g", "−"],
            ["127位", "かぼちゃと味わう とろけるクリームパスタ", "351kcal", "15.3g", "記載なし", "2.8g", "−"],
            ["128位", "ポテトのコンソメ揚げ", "140kcal", "1.8g", "記載なし", "0.7g", "−"],
            ["129位", "お子さまプレート えがお咲くチキンライス", "445kcal", "12.5g", "68.1g", "3.1g", "−"],
            ["130位", "とろとろ卵のきのこソースハンバーグ", "302kcal", "15.6g", "18.3g", "2.2g", "○"],
            ["131位", "クリーミィディップで楽しむ 洋風おでん", "239kcal", "17.5g", "14.8g", "2.5g", "−"],
            ["132位", "パパッと簡単 海鮮マヨ味のシーサラダ", "133kcal", "6.2g", "記載なし", "1.7g", "−"],
            ["134位", "酸味がクセになる ごろっとポークビンダルー", "350kcal", "16.8g", "21.4g", "2.5g", "○"],
            ["135位", "三ツ星朝ごはん とろけるクロックムッシュ", "383kcal", "16.5g", "40.4g", "2.4g", "−"],
            ["136位", "ナンプラー香る やさしい甘酢っパッタイ", "310kcal", "16g", "18.3g", "2.4g", "○"],
            ["137位", "こっくり照りマヨの大豆ミートハンバーグ", "324kcal", "16.4g", "18.2g", "2.5g", "−"],
            ["139位", "ピリ辛にんにくの 食感豊かなペペロンチーノ", "367kcal", "14.1g", "記載なし", "2.9g", "−"],
            ["140位", "鈴なり 割烹の豚肉とめかぶのネバトロあんかけ", "246kcal", "15.6g", "14.3g", "2.3g", "○"],
            ["141位", "魅惑のスパイス ごろごろ野菜のマッサマンカレー", "336kcal", "18.1g", "20g", "2.4g", "○"],
            ["143位", "スペイン風ほっこりブイヤベース", "218kcal", "15.2g", "22g", "2.4g", "○"],
            ["146位", "専門店級のしびれと香り 具沢山麻辣湯キット", "811kcal", "14.7g", "記載なし", "4.9g", "−"],
            ["149位", "海老とほっくりじゃがいものビストロアヒージョ", "71kcal", "5.8g", "記載なし", "1.3g", "−"],
            ["156位", "満腹310g超 かき込め旨辛麻婆丼", "441kcal", "17.2g", "60.5g", "2.7g", "−"],
            ["158位", "やみつき濃厚ソースと絡む ぷりっと海老マヨ", "345kcal", "16.7g", "20.1g", "1.8g", "○"],
            ["159位", "牛豚焼き上げハンバーグ", "173kcal", "13.1g", "記載なし", "1.2g", "−"],
            ["161位", "柚子風味 ジューシー豚しゃぶ", "263kcal", "16.5g", "7.6g", "2.5g", "○"],
            ["162位", "もちもち生パスタの揚げなすの和ナポリタン", "454kcal", "12.8g", "記載なし", "1.9g", "−"],
            ["163位", "もちもち生パスタの海老の和風レモンクリーム", "409kcal", "13.4g", "記載なし", "1.7g", "−"],
            ["165位", "ハーブ仕立ての やわらかバジルチキン", "343kcal", "18.1g", "24g", "2.1g", "○"],
            ["166位", "燻製香る 濃厚サーモンクリームチーズ", "173kcal", "7.5g", "記載なし", "2.1g", "−"],
            ["167位", "肉厚あふれる旨み 骨付きポークフランク", "299kcal", "13.2g", "記載なし", "2g", "−"],
            ["174位", "もちもち生パスタの濃厚カルボナーラ", "452kcal", "12.6g", "64.1g", "2.6g", "−"],
            ["205位", "もちもち生パスタの濃厚海老トマトクリーム", "421kcal", "14.1g", "57g", "2.4g", "−"],
            ["207位", "りんごチップ香る しっとり合鴨スモーク", "261kcal", "15.1g", "記載なし", "2g", "−"],
            ["208位", "9ヶ月熟成生ハム フランス産ジャンボンセック", "253kcal", "25.7g", "記載なし", "5.6g", "−"],
            ["−", "カナダ産 鮮馬刺し 桜うまトロタレ袋入り 袋入り・たれ付き", "190kcal", "11g", "記載なし", "0.9g", "−"],
            ["−", "香ばし炭火焼き ジューシーチキンレッグ", "171kcal", "23g", "記載なし", "0.9g", "−"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>（2026年11月17日取得）。メニューは入れ替わるため、注文の前に公式の一覧でご確認ください。糖質に「※」を付けたメニュー（じっくり香ばしく焼き上げた 牛カルビライスバーガー）は、公式の掲載値で糖質が炭水化物を上回っており、誤記の可能性があります。</p>
        <OfficialButton>三ツ星ファーム 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">三ツ星ファームの公式の人気順では、ハンバーグ・生姜焼き・チキン南蛮などの定番のおかずが上位に並び、上位15品の多くが三ツ星基準を満たしていました。カロリーや糖質を抑えたいなら「三ツ星基準」、量が欲しいならパスタ・丼・メガ盛り、塩分を控えたいなら掲載値の食塩相当量を見て選ぶと、目的に合わせて選びやすくなります。</p>
        <p className="text-sm mb-6 leading-relaxed">メニュー・栄養成分・人気順は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>三ツ星ファーム 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームの口コミ・評判</Link></li>
            <li><Link href="/articles/mitsuboshi-coupon/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのクーポン・キャンペーン</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">nosh・三ツ星ファーム・ウェルネスダイニングの3社比較</Link></li>
            <li><Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">糖質制限向けの宅配弁当の比較</Link></li>
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
