import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ナッシュ（nosh）のおすすめメニュー｜公式の人気No.1〜20と目的別（高たんぱく・低糖質・減塩）を79品の栄養成分で集計【2026年11月】";
const ARTICLE_DESCRIPTION =
  "nosh（ナッシュ）の公式メニュー一覧（2026年11月18日時点で注文できるおかず79品）を、一覧に表示される「人気No.」と栄養成分の掲載値で整理しました。人気No.1〜20の全品、たんぱく質の多いメニュー、糖質・塩分・カロリーの少ないメニュー、追加料金のあるメニューを当サイトで集計しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-osusume-menu/";
const OFFICIAL_URL = "https://nosh.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ナッシュ おすすめメニュー, nosh おすすめメニュー, ナッシュ 人気メニュー, ナッシュ メニュー ランキング, ナッシュ 高たんぱく, ナッシュ 低糖質, ナッシュ メニュー",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-18T00:00:00+09:00",
    modifiedTime: "2026-11-18T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "ナッシュで人気のメニューは？", answer: "2026年11月18日時点の公式メニュー一覧では、オニオングリルハンバーグが人気No.1、チキンのトマトチーズがけがNo.2、たらフライの特製タルタルソースがNo.3と表示されていました。" },
  { question: "ナッシュのメニューは何種類ありますか？", answer: "2026年11月18日に取得した公式のメニュー一覧には100品が掲載され、そのうち販売休止の表示がなく注文できるおかずは79品でした（ほかにデザート11品・朝食6品・パン2品）。" },
  { question: "たんぱく質が多いメニューは？", answer: "たっぷり鶏むね肉のピリ辛麻婆あん（48.4g）が最も多く、たんぱく質20g以上のメニューは20品でした（当サイト集計）。" },
  { question: "塩分が少ないメニューはどう選べばよいですか？", answer: "全メニューが塩分2.5g以下ですが、中央値は2.4gで上限に近い値です。2.0g以下のメニューは7品あり、記事内の「塩分が少ないメニュー」の表から選ぶと差が出ます。" },
  { question: "追加料金がかかるメニューはありますか？", answer: "あります。2026年11月18日時点でプレミアム12品（＋250円・＋500円）とボリューム9品（＋130円・＋350円）の計21品です。人気No.1〜20には追加料金のあるメニューは含まれていませんでした。" },
  { question: "1食あたりの料金はいくらですか？", answer: "6食プラン719円・8食プラン644円・10食プラン620円・12食プラン612円（税込・送料別）です。nosh club会員は累計購入数に応じて1食最安492円（税込）になります。" },
];

const sections = [
  { id: "ranking", label: "公式の「人気No.」1〜20" },
  { id: "standard", label: "全品「糖質30g・塩分2.5g以下」の基準と実際の値" },
  { id: "purpose", label: "目的別のおすすめ（当サイト集計）" },
  { id: "ingredient", label: "食材別の品数と人気の最上位" },
  { id: "extra", label: "追加料金のあるメニュー（プレミアム・ボリューム）" },
  { id: "price", label: "料金：1食612円〜（12食プラン）" },
  { id: "list", label: "注文できるおかず79品の一覧" },
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
          <span className="text-foreground">ナッシュのおすすめメニュー</span>
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


export default function NoshOsusumeMenuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-18T00:00:00+09:00",
    dateModified: "2026-11-18T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "ナッシュのおすすめメニュー" },
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
            <time dateTime="2026-11-18">公開: 2026年11月18日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            nosh（ナッシュ）は、冷凍のおかずを好きな組み合わせで定期配送する宅配食です。メニューを自分で選ぶ仕組みのため、初めての注文では「どれを選べばよいか」で迷いやすいサービスです。
          </p>
          <p className="mb-3">
            この記事では、2026年11月18日に公式のメニュー一覧ページを取得し、<strong>注文できるおかず79品</strong>について、一覧に表示される「人気No.」と、各メニューの栄養成分（エネルギー・たんぱく質・糖質・食塩相当量など）を当サイトで集計しました。「おすすめ」は当サイトの好みではなく、<strong>公式の人気表示と、公式の掲載値から計算できる条件</strong>だけで選んでいます。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ナッシュのおすすめメニューの要点</p>
          <p className="text-sm leading-relaxed mb-4">公式のメニュー一覧で人気No.1〜3として表示されているのは、オニオングリルハンバーグ・チキンのトマトチーズがけ・たらフライの特製タルタルソースです。人気No.1〜20のうち7品がハンバーグ系でした。注文できるおかず79品はすべて公式基準の「糖質30g以下・塩分2.5g以下」に収まっており、たんぱく質20g以上は20品、食塩相当量2.0g以下は7品でした（2026年11月18日・当サイト集計）。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 集計でわかったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>おかず79品すべてが糖質30g・塩分2.5g以下</li><li>全メニューの栄養成分が一覧に掲載されている</li><li>高たんぱく・低糖質・減塩の条件で選び分けられる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>追加料金のあるメニューが21品ある</li><li>食塩相当量の中央値は2.4gで、基準の上限に近い</li><li>人気No.の算出方法は公式に記載がない</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">nosh 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="ranking">公式の「人気No.」1〜20</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式のメニュー一覧では、一部のメニューの写真に「人気No.1」〜「人気No.20」の表示が付いています。2026年11月18日時点の表示をそのまま並べると次のとおりです。</p>
        <ComparisonTable
          headers={["人気", "メニュー名", "食材", "エネルギー", "たんぱく質", "糖質", "食塩相当量"]}
          rows={[
            ["No.1", "オニオングリルハンバーグ", "牛肉", "400kcal", "17.4g", "18.7g", "2.5g"],
            ["No.2", "チキンのトマトチーズがけ", "鶏肉", "395kcal", "40.5g", "20.6g", "2.1g"],
            ["No.3", "たらフライの特製タルタルソース", "魚", "418kcal", "19g", "22.6g", "2.4g"],
            ["No.4", "チリハンバーグステーキ", "牛肉", "380kcal", "16g", "18.8g", "2.4g"],
            ["No.5", "きのことチーズのトマトハンバーグ", "鶏肉", "366kcal", "19.5g", "17g", "2.2g"],
            ["No.6", "たっぷり挽肉の麻婆茄子", "その他", "363kcal", "13.5g", "19.1g", "2.4g"],
            ["No.7", "回鍋肉", "豚肉", "388kcal", "14.1g", "18.6g", "2.2g"],
            ["No.8", "油淋鶏", "鶏肉", "384kcal", "23.4g", "22.5g", "2.4g"],
            ["No.9", "おろしソースのハンバーグ", "鶏肉", "300kcal", "14.3g", "21.9g", "2.5g"],
            ["No.10", "半熟卵とチーズのデミハンバーグ", "豚肉", "370kcal", "19.1g", "22.8g", "2.5g"],
            ["No.11", "とろけるポテトミートグラタン", "牛肉", "345kcal", "16.8g", "19.4g", "2.2g"],
            ["No.12", "揚げじゃがのほくほく肉じゃが", "牛肉", "378kcal", "13.5g", "21.4g", "2.1g"],
            ["No.13", "CoCo壱番屋ハンバーグチーズのビーフカレー", "牛肉", "269kcal", "13.1g", "21.8g", "2.2g"],
            ["No.14", "旨だれペッパーチキン", "鶏肉", "382kcal", "25.1g", "21.9g", "2.5g"],
            ["No.15", "特製みそカツ", "豚肉", "288kcal", "13.9g", "29.5g", "2.3g"],
            ["No.16", "クリームコロッケグラタン", "その他", "350kcal", "12g", "21.8g", "2.3g"],
            ["No.17", "たっぷり野菜の旨辛プルコギ", "牛肉", "384kcal", "15.2g", "14.7g", "2.5g"],
            ["No.18", "ハンバーグと彩り温野菜のデミ", "鶏肉", "362kcal", "17g", "20.2g", "2.4g"],
            ["No.19", "チャーシュー炒飯", "その他", "323kcal", "11.6g", "29.7g", "2.5g"],
            ["No.20", "ふんわり卵のカツとじ", "豚肉", "256kcal", "11.8g", "24.3g", "2.5g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh メニュー一覧</a>（2026年11月18日取得）。食材は一覧の絞り込み（牛肉・豚肉・鶏肉・魚・その他）の分類です。公式は人気No.の算出方法（期間・件数）を公開していません。</p>
        <p className="text-sm mb-6 leading-relaxed">人気No.1〜20のうち7品がハンバーグ系で、食材別では牛肉6品・鶏肉6品・豚肉4品・魚1品・その他3品でした。たんぱく質は11.6〜40.5gと幅があり、人気上位でも栄養の性格はメニューごとに違います。人気No.は味の評価を直接示すものではないため、味の評判は<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh（ナッシュ）の口コミ・評判</Link>もあわせて確認してください。</p>
        <SectionHeading id="standard">全品「糖質30g・塩分2.5g以下」の基準と実際の値</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">nosh は公式サイトで、全てのメニューを「糖質30g以下」「塩分2.5g以下」で生産していると説明しています。一覧の掲載値で照合した結果は次のとおりです。</p>
        <ComparisonTable
          headers={["項目", "結果（当サイト集計）"]}
          rows={[
            ["注文できるおかず", "79品"],
            ["糖質30g以下", "79品（最大29.7g）"],
            ["食塩相当量2.5g以下", "79品（最大2.5g）"],
            ["糖質の中央値", "20.4g"],
            ["食塩相当量の中央値", "2.4g"],
            ["食塩相当量2.0g以下", "7品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://nosh.jp/nutritional-value" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh 糖質30g・塩分2.5g以下へのこだわり</a>・<a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh メニュー一覧</a>（2026年11月18日確認）。当サイトが掲載値で照合しました。</p>
        <p className="text-sm mb-6 leading-relaxed">基準はすべてのメニューで守られていましたが、食塩相当量は中央値が2.4gで、多くのメニューが上限の2.5gに近い値です。塩分を控えたい方は、下の「塩分が少ないメニュー」の表のように、2.0g前後のメニューを意識して選ぶと差が出ます。</p>
        <SectionHeading id="purpose">目的別のおすすめ（当サイト集計）</SectionHeading>
        <SubHeading>たんぱく質が多いメニュー（多い順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "たんぱく質", "エネルギー", "食塩相当量", "追加料金", "人気"]}
          rows={[
            ["たっぷり鶏むね肉のピリ辛麻婆あん", "48.4g", "465kcal", "2.5g", "＋130円（ボリューム）", "−"],
            ["チキンのトマトチーズがけ", "40.5g", "395kcal", "2.1g", "−", "No.2"],
            ["ハンバーグ＆チキンのチーズデミ", "40.1g", "452kcal", "2.5g", "＋130円（ボリューム）", "−"],
            ["鶏むね肉のタンドリーオイル焼き", "39.5g", "344kcal", "2.1g", "−", "−"],
            ["揚げ鶏と豚バラのにんにくみそだれ", "30g", "349kcal", "2.3g", "＋130円（ボリューム）", "−"],
            ["濃厚デミソースのBIGハンバーグ", "30g", "535kcal", "2.5g", "＋350円（ボリューム）", "−"],
            ["牛肉あふれるハッシュドビーフ", "28.1g", "770kcal", "2.5g", "＋500円（プレミアム）", "−"],
            ["【増量】オニオングリルハンバーグ", "27.5g", "549kcal", "2.5g", "＋350円（ボリューム）", "−"],
          ]}
        />
        <SubHeading>糖質が少ないメニュー（250kcal以上から少ない順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "糖質", "たんぱく質", "エネルギー", "追加料金", "人気"]}
          rows={[
            ["鶏むね肉のタンドリーオイル焼き", "7.5g", "39.5g", "344kcal", "−", "−"],
            ["シビれる辛味のスタミナ豚しゃぶ", "7.7g", "10.4g", "253kcal", "−", "−"],
            ["鶏もも肉の炭火焼き〜極〜", "8.7g", "17.4g", "266kcal", "−", "−"],
            ["痺れる旨辛よだれ鶏", "10.2g", "18.3g", "329kcal", "−", "−"],
            ["銀鮭と彩り野菜のガーリックトマト", "10.8g", "16.6g", "289kcal", "＋250円（プレミアム）", "−"],
            ["鴨肉ときのこのレモンチーズソース", "11.5g", "15.1g", "306kcal", "＋250円（プレミアム）", "−"],
            ["とろけるチーズのシュクメルリ", "11.9g", "17.4g", "278kcal", "−", "−"],
            ["豚バラ肉の麻辣ソース", "12g", "14.8g", "486kcal", "−", "−"],
          ]}
        />
        <SubHeading>塩分が少ないメニュー（250kcal以上・たんぱく質15g以上から少ない順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "食塩相当量", "たんぱく質", "エネルギー", "追加料金", "人気"]}
          rows={[
            ["コクと旨味のスイートチリカラアゲ", "1.9g", "23.7g", "386kcal", "−", "−"],
            ["とろけるチーズのシュクメルリ", "2g", "17.4g", "278kcal", "−", "−"],
            ["たらのレモンあん", "2g", "17.4g", "271kcal", "−", "−"],
            ["ガリバタチキンのチーズパスタ", "2g", "20g", "319kcal", "−", "−"],
            ["チキンのトマトチーズがけ", "2.1g", "40.5g", "395kcal", "−", "No.2"],
            ["聖夜を彩る海老と小柱のホワイトパスタ", "2.1g", "27g", "322kcal", "＋250円（プレミアム）", "−"],
            ["鶏むね肉のタンドリーオイル焼き", "2.1g", "39.5g", "344kcal", "−", "−"],
            ["牛バラ＆チキンの甘酢ソース", "2.1g", "18.9g", "386kcal", "−", "−"],
          ]}
        />
        <SubHeading>カロリーが低いメニュー（たんぱく質15g以上から低い順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "エネルギー", "たんぱく質", "糖質", "追加料金", "人気"]}
          rows={[
            ["香りポン酢のふぐ鍋仕立て", "120kcal", "16.6g", "8.8g", "＋500円（プレミアム）", "−"],
            ["鶏もも肉の柚子胡椒焼き", "246kcal", "15.7g", "12.6g", "−", "−"],
            ["ふっくら鶏もも肉の甘辛てりだれ", "250kcal", "20.9g", "13.8g", "−", "−"],
            ["鶏もも肉の炭火焼き〜極〜", "266kcal", "17.4g", "8.7g", "−", "−"],
            ["たらのレモンあん", "271kcal", "17.4g", "22.1g", "−", "−"],
            ["とろけるチーズのシュクメルリ", "278kcal", "17.4g", "11.9g", "−", "−"],
            ["魚介のごちそうトマトブイヤベース", "281kcal", "27.4g", "14.6g", "＋250円（プレミアム）", "−"],
            ["銀鮭と彩り野菜のガーリックトマト", "289kcal", "16.6g", "10.8g", "＋250円（プレミアム）", "−"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh メニュー一覧</a>の掲載値（2026年11月18日取得）を当サイトが並べ替え。同じ値のときは人気No.の上位を先にしています。「人気」の「−」は人気No.の表示がないメニューです。</p>
        <p className="text-sm mb-6 leading-relaxed">注文できるおかず全体の中央値は、エネルギー340kcal・たんぱく質16.6g・糖質20.4g・食塩相当量2.4gでした。糖質と塩分の表は、副菜のような小さいメニューが並ばないよう250kcal以上（塩分はたんぱく質15g以上も）に絞っています。高たんぱくのメニューには追加料金のある「ボリューム」系も含まれるため、料金も合わせて確認してください。</p>
        <SectionHeading id="ingredient">食材別の品数と人気の最上位</SectionHeading>
        <ComparisonTable
          headers={["食材（公式の分類）", "品数", "うち人気No.表示", "人気の最上位", "たんぱく質の中央値"]}
          rows={[
            ["鶏肉", "22品", "6品", "チキンのトマトチーズがけ（No.2）", "18.9g"],
            ["牛肉", "14品", "6品", "オニオングリルハンバーグ（No.1）", "17.5g"],
            ["豚肉", "13品", "4品", "回鍋肉（No.7）", "14.8g"],
            ["魚", "14品", "1品", "たらフライの特製タルタルソース（No.3）", "16.9g"],
            ["その他", "16品", "3品", "たっぷり挽肉の麻婆茄子（No.6）", "13.8g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh メニュー一覧</a>の絞り込みの分類（2026年11月18日取得）を当サイトが集計。</p>
        <p className="text-sm mb-6 leading-relaxed">品数がいちばん多いのは鶏肉で、たんぱく質の中央値も高めです。魚は14品のうち5品が追加料金のある「プレミアム」で、人気No.の表示があるのは1品でした。牛肉が苦手な方は「食材フィルタ」で除外してから選ぶと効率的です。</p>
        <SectionHeading id="extra">追加料金のあるメニュー（プレミアム・ボリューム）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">2026年11月18日時点で、注文できるおかず79品のうち21品に追加料金があります。プレミアム12品（＋250円・＋500円）と、量を増やしたボリューム9品（＋130円・＋350円）です。</p>
        <ComparisonTable
          headers={["メニュー名", "区分", "追加料金", "エネルギー", "たんぱく質"]}
          rows={[
            ["香りポン酢のふぐ鍋仕立て", "プレミアム", "＋500円", "120kcal", "16.6g"],
            ["牛肉あふれるハッシュドビーフ", "プレミアム", "＋500円", "770kcal", "28.1g"],
            ["黒毛和牛のやみつきガーリックソース", "プレミアム", "＋500円", "422kcal", "13.2g"],
            ["ザ・プレミアムハンバーグステーキ", "プレミアム", "＋500円", "489kcal", "21.9g"],
            ["聖夜を彩る牛肉のグーラッシュ", "プレミアム", "＋250円", "562kcal", "17.6g"],
            ["聖夜を彩る海老と小柱のホワイトパスタ", "プレミアム", "＋250円", "322kcal", "27g"],
            ["鴨肉ときのこのレモンチーズソース", "プレミアム", "＋250円", "306kcal", "15.1g"],
            ["銀鮭と彩り野菜のガーリックトマト", "プレミアム", "＋250円", "289kcal", "16.6g"],
            ["魚介のごちそうトマトブイヤベース", "プレミアム", "＋250円", "281kcal", "27.4g"],
            ["ふっくらうなぎのひつまぶし", "プレミアム", "＋250円", "330kcal", "19g"],
            ["海老満喫！チリディッシュ", "プレミアム", "＋250円", "379kcal", "24.2g"],
            ["銀鮭のマッシュポテトアヒージョ", "プレミアム", "＋250円", "485kcal", "17.2g"],
            ["欧風カレーのごちそうハンバーグ", "ボリューム", "＋350円", "472kcal", "24.1g"],
            ["濃厚デミソースのBIGハンバーグ", "ボリューム", "＋350円", "535kcal", "30g"],
            ["【増量】オニオングリルハンバーグ", "ボリューム", "＋350円", "549kcal", "27.5g"],
            ["揚げ鶏と豚バラのにんにくみそだれ", "ボリューム", "＋130円", "349kcal", "30g"],
            ["たっぷり鶏むね肉のピリ辛麻婆あん", "ボリューム", "＋130円", "465kcal", "48.4g"],
            ["ハンバーグ＆チキンのチーズデミ", "ボリューム", "＋130円", "452kcal", "40.1g"],
            ["満腹御膳！具沢山そぼろの揚げ出し豆腐", "ボリューム", "＋130円", "291kcal", "12.6g"],
            ["【増量】鶏もも肉の炭火焼き", "ボリューム", "＋130円", "354kcal", "21.4g"],
            ["懐かしの和風チーズデミカツ", "ボリューム", "＋130円", "391kcal", "17.7g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh メニュー一覧</a>（2026年11月18日取得）の追加料金の表示。期間限定の表示があるメニューも含みます。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>人気No.1〜20には追加料金のあるメニューは含まれていません（2026年11月18日時点）</li><li>一覧には、おかずのほかにデザート11品・朝食6品・パン2品も並んでいます（この記事の集計からは除外）</li><li>販売休止の表示があるメニュー（こってりソースのとんぺい焼き、濃厚タルタルチキン南蛮）は集計から除いています</li></ul>
        <SectionHeading id="price">料金：1食612円〜（12食プラン）</SectionHeading>
        <ComparisonTable
          headers={["プラン（1回のお届け）", "料金（税込）", "1食あたり（公式）"]}
          rows={[
            ["6食プラン", "4,318円", "719円"],
            ["8食プラン", "5,157円", "644円"],
            ["10食プラン", "6,206円", "620円"],
            ["12食プラン", "7,344円", "612円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://nosh.jp/plan" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh プラン（食数）選択</a>（2026年11月18日確認）。送料は別途かかり、地域と食数で異なります。nosh club会員は累計購入数に応じて1食最安492円（税込）になります。</p>
        <p className="text-sm mb-6 leading-relaxed">追加料金のあるメニューを選んだ場合は、上の1食あたりの料金に追加料金が加わります。送料・初回割引・nosh clubの仕組みは<Link href="/articles/nosh-ryoukin-souryou/" className="text-accent underline">nosh（ナッシュ）の料金・送料の仕組み</Link>と<Link href="/articles/nosh-coupon/" className="text-accent underline">nosh（ナッシュ）のクーポン・割引</Link>で整理しています。</p>
        <SectionHeading id="list">注文できるおかず79品の一覧</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">人気No.の表示があるメニューを先に、その後は公式の一覧の並び順で並べています。</p>
        <ComparisonTable
          headers={["人気", "メニュー名", "食材", "エネルギー", "たんぱく質", "糖質", "食塩相当量", "追加料金"]}
          rows={[
            ["No.1", "オニオングリルハンバーグ", "牛肉", "400kcal", "17.4g", "18.7g", "2.5g", "−"],
            ["No.2", "チキンのトマトチーズがけ", "鶏肉", "395kcal", "40.5g", "20.6g", "2.1g", "−"],
            ["No.3", "たらフライの特製タルタルソース", "魚", "418kcal", "19g", "22.6g", "2.4g", "−"],
            ["No.4", "チリハンバーグステーキ", "牛肉", "380kcal", "16g", "18.8g", "2.4g", "−"],
            ["No.5", "きのことチーズのトマトハンバーグ", "鶏肉", "366kcal", "19.5g", "17g", "2.2g", "−"],
            ["No.6", "たっぷり挽肉の麻婆茄子", "その他", "363kcal", "13.5g", "19.1g", "2.4g", "−"],
            ["No.7", "回鍋肉", "豚肉", "388kcal", "14.1g", "18.6g", "2.2g", "−"],
            ["No.8", "油淋鶏", "鶏肉", "384kcal", "23.4g", "22.5g", "2.4g", "−"],
            ["No.9", "おろしソースのハンバーグ", "鶏肉", "300kcal", "14.3g", "21.9g", "2.5g", "−"],
            ["No.10", "半熟卵とチーズのデミハンバーグ", "豚肉", "370kcal", "19.1g", "22.8g", "2.5g", "−"],
            ["No.11", "とろけるポテトミートグラタン", "牛肉", "345kcal", "16.8g", "19.4g", "2.2g", "−"],
            ["No.12", "揚げじゃがのほくほく肉じゃが", "牛肉", "378kcal", "13.5g", "21.4g", "2.1g", "−"],
            ["No.13", "CoCo壱番屋ハンバーグチーズのビーフカレー", "牛肉", "269kcal", "13.1g", "21.8g", "2.2g", "−"],
            ["No.14", "旨だれペッパーチキン", "鶏肉", "382kcal", "25.1g", "21.9g", "2.5g", "−"],
            ["No.15", "特製みそカツ", "豚肉", "288kcal", "13.9g", "29.5g", "2.3g", "−"],
            ["No.16", "クリームコロッケグラタン", "その他", "350kcal", "12g", "21.8g", "2.3g", "−"],
            ["No.17", "たっぷり野菜の旨辛プルコギ", "牛肉", "384kcal", "15.2g", "14.7g", "2.5g", "−"],
            ["No.18", "ハンバーグと彩り温野菜のデミ", "鶏肉", "362kcal", "17g", "20.2g", "2.4g", "−"],
            ["No.19", "チャーシュー炒飯", "その他", "323kcal", "11.6g", "29.7g", "2.5g", "−"],
            ["No.20", "ふんわり卵のカツとじ", "豚肉", "256kcal", "11.8g", "24.3g", "2.5g", "−"],
            ["−", "聖夜を彩る牛肉のグーラッシュ", "牛肉", "562kcal", "17.6g", "22.5g", "2.5g", "＋250円（プレミアム）"],
            ["−", "聖夜を彩る海老と小柱のホワイトパスタ", "その他", "322kcal", "27g", "28.2g", "2.1g", "＋250円（プレミアム）"],
            ["−", "香りポン酢のふぐ鍋仕立て", "魚", "120kcal", "16.6g", "8.8g", "2.5g", "＋500円（プレミアム）"],
            ["−", "牛肉あふれるハッシュドビーフ", "牛肉", "770kcal", "28.1g", "17.2g", "2.5g", "＋500円（プレミアム）"],
            ["−", "鴨肉ときのこのレモンチーズソース", "その他", "306kcal", "15.1g", "11.5g", "2.5g", "＋250円（プレミアム）"],
            ["−", "銀鮭と彩り野菜のガーリックトマト", "魚", "289kcal", "16.6g", "10.8g", "2.3g", "＋250円（プレミアム）"],
            ["−", "魚介のごちそうトマトブイヤベース", "魚", "281kcal", "27.4g", "14.6g", "2.5g", "＋250円（プレミアム）"],
            ["−", "ふっくらうなぎのひつまぶし", "魚", "330kcal", "19g", "29.2g", "2.5g", "＋250円（プレミアム）"],
            ["−", "黒毛和牛のやみつきガーリックソース", "牛肉", "422kcal", "13.2g", "24.2g", "2.5g", "＋500円（プレミアム）"],
            ["−", "ザ・プレミアムハンバーグステーキ", "牛肉", "489kcal", "21.9g", "21.7g", "2.5g", "＋500円（プレミアム）"],
            ["−", "海老満喫！チリディッシュ", "その他", "379kcal", "24.2g", "27.5g", "2.5g", "＋250円（プレミアム）"],
            ["−", "銀鮭のマッシュポテトアヒージョ", "魚", "485kcal", "17.2g", "16.9g", "2.2g", "＋250円（プレミアム）"],
            ["−", "揚げ鶏と豚バラのにんにくみそだれ", "鶏肉", "349kcal", "30g", "18g", "2.3g", "＋130円（ボリューム）"],
            ["−", "たっぷり鶏むね肉のピリ辛麻婆あん", "鶏肉", "465kcal", "48.4g", "19.9g", "2.5g", "＋130円（ボリューム）"],
            ["−", "欧風カレーのごちそうハンバーグ", "牛肉", "472kcal", "24.1g", "21g", "2.5g", "＋350円（ボリューム）"],
            ["−", "ハンバーグ＆チキンのチーズデミ", "鶏肉", "452kcal", "40.1g", "22.6g", "2.5g", "＋130円（ボリューム）"],
            ["−", "濃厚デミソースのBIGハンバーグ", "牛肉", "535kcal", "30g", "24.1g", "2.5g", "＋350円（ボリューム）"],
            ["−", "満腹御膳！具沢山そぼろの揚げ出し豆腐", "その他", "291kcal", "12.6g", "26.2g", "2.4g", "＋130円（ボリューム）"],
            ["−", "【増量】鶏もも肉の炭火焼き", "鶏肉", "354kcal", "21.4g", "12.4g", "2.5g", "＋130円（ボリューム）"],
            ["−", "【増量】オニオングリルハンバーグ", "牛肉", "549kcal", "27.5g", "24.3g", "2.5g", "＋350円（ボリューム）"],
            ["−", "懐かしの和風チーズデミカツ", "豚肉", "391kcal", "17.7g", "28.3g", "2.4g", "＋130円（ボリューム）"],
            ["−", "ナッシュチキン-とろみレモンだれ-", "鶏肉", "261kcal", "14.7g", "24.9g", "2.5g", "−"],
            ["−", "ふんわり白身魚のガーリックソース", "魚", "174kcal", "14.2g", "12.2g", "2.3g", "−"],
            ["−", "鶏むね肉のタンドリーオイル焼き", "鶏肉", "344kcal", "39.5g", "7.5g", "2.1g", "−"],
            ["−", "牛バラ＆チキンの甘酢ソース", "牛肉", "386kcal", "18.9g", "19.6g", "2.1g", "−"],
            ["−", "アジのピリ辛南蛮", "魚", "350kcal", "22.4g", "21.7g", "2.5g", "−"],
            ["−", "豚バラ肉の麻辣ソース", "豚肉", "486kcal", "14.8g", "12g", "2.5g", "−"],
            ["−", "とろり卵とにんにくあんの蒸し豚", "豚肉", "457kcal", "17.6g", "14g", "2.4g", "−"],
            ["−", "シビれる辛味のスタミナ豚しゃぶ", "その他", "253kcal", "10.4g", "7.7g", "2.4g", "−"],
            ["−", "鶏もも肉の炭火焼き〜極〜", "鶏肉", "266kcal", "17.4g", "8.7g", "2.2g", "−"],
            ["−", "痺れる旨辛よだれ鶏", "鶏肉", "329kcal", "18.3g", "10.2g", "2.4g", "−"],
            ["−", "とろけるチーズのシュクメルリ", "鶏肉", "278kcal", "17.4g", "11.9g", "2g", "−"],
            ["−", "鶏もも肉の柚子胡椒焼き", "鶏肉", "246kcal", "15.7g", "12.6g", "2.5g", "−"],
            ["−", "鶏ハツとねぎもやしのやみつきだれ", "鶏肉", "221kcal", "11.5g", "13.2g", "2.3g", "−"],
            ["−", "ふっくら鶏もも肉の甘辛てりだれ", "鶏肉", "250kcal", "20.9g", "13.8g", "2.5g", "−"],
            ["−", "ジューシー豚の洋風オニオンソース", "豚肉", "615kcal", "16.4g", "14.6g", "2.2g", "−"],
            ["−", "シビ辛四川麻婆豆腐", "その他", "253kcal", "14.1g", "16.3g", "2.5g", "−"],
            ["−", "鯛つみれの生姜あん", "魚", "252kcal", "13.8g", "16.3g", "2.5g", "−"],
            ["−", "ピリ辛ごま担々スープ", "その他", "238kcal", "12.7g", "16.7g", "2.5g", "−"],
            ["−", "なすと豚バラの甘辛中華だれ", "豚肉", "489kcal", "15g", "16.8g", "2.5g", "−"],
            ["−", "フライドフィッシュ", "魚", "340kcal", "14.6g", "16.9g", "2.5g", "−"],
            ["−", "鶏つくねのピリ辛ニンニクみそ", "鶏肉", "273kcal", "11.5g", "17.2g", "2.5g", "−"],
            ["−", "しっとり豚肉の特製うまみそだれ", "豚肉", "438kcal", "14.8g", "17.5g", "2.4g", "−"],
            ["−", "やわらか鶏肉と小松菜の中華粥", "その他", "199kcal", "14.8g", "17.8g", "1.8g", "−"],
            ["−", "黄金がれいと揚げ出し豆腐の甘だれ", "魚", "207kcal", "12.5g", "19.1g", "2.3g", "−"],
            ["−", "白身魚の揚げ出し生姜醤油", "魚", "257kcal", "14.5g", "20.4g", "2.5g", "−"],
            ["−", "お豆腐仕立ての和風ハンバーグ", "その他", "292kcal", "14.8g", "21.7g", "2.2g", "−"],
            ["−", "たらのレモンあん", "魚", "271kcal", "17.4g", "22.1g", "2g", "−"],
            ["−", "ピリ辛トマトソースの豚バラグリル", "豚肉", "473kcal", "15.4g", "22.3g", "2.5g", "−"],
            ["−", "ガリバタチキンのチーズパスタ", "その他", "319kcal", "20g", "22.3g", "2g", "−"],
            ["−", "ガーリックトマトのシーフードパスタ", "その他", "232kcal", "14.7g", "22.5g", "1.5g", "−"],
            ["−", "CoCo壱番屋カレーソースとんかつ", "豚肉", "306kcal", "13.1g", "23.3g", "1.9g", "−"],
            ["−", "もちもち水餃子の酸辣湯", "その他", "223kcal", "5.2g", "23.6g", "2.5g", "−"],
            ["−", "半熟卵のカルボナーラショートパスタ", "その他", "258kcal", "9g", "25g", "2.3g", "−"],
            ["−", "たっぷり野菜と鯵の甘酢あん", "魚", "307kcal", "17.7g", "27.1g", "2.3g", "−"],
            ["−", "水餃子のチーズコチュジャン", "豚肉", "316kcal", "11.5g", "27.6g", "2.5g", "−"],
            ["−", "ナッシュチキン-ブラックカレー-", "鶏肉", "315kcal", "16.2g", "28.4g", "2.5g", "−"],
            ["−", "コクと旨味のスイートチリカラアゲ", "鶏肉", "386kcal", "23.7g", "28.5g", "1.9g", "−"],
            ["−", "ナッシュチキン-赤味噌だれ-", "鶏肉", "330kcal", "17g", "29.7g", "2.5g", "−"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh メニュー一覧</a>（2026年11月18日取得）。メニューは入れ替わるため、注文の前に公式の一覧でご確認ください。</p>
        <OfficialButton>nosh 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">nosh の公式の人気No.では、ハンバーグ系を中心とした定番のおかずが上位に並び、人気No.1〜20はすべて追加料金なしで選べました。おかず79品はすべて糖質30g・塩分2.5g以下に収まっているため、基準を気にせず選べる一方、塩分は上限に近いメニューが多めです。量やたんぱく質を重視するなら鶏肉やボリューム系、塩分を控えたいなら食塩相当量2.0g前後のメニュー、と目的に合わせて選ぶと失敗が減ります。</p>
        <p className="text-sm mb-6 leading-relaxed">メニュー・栄養成分・人気の表示・料金は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>nosh 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-niteru-takushoku/" className="text-accent hover:text-accent-dark transition-colors">ナッシュに似てる宅食（nosh の基準で6社を集計）</Link></li>
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-ryoukin-souryou/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の料金・送料の仕組み</Link></li>
            <li><Link href="/articles/nosh-shiharai-houhou/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の支払い方法</Link></li>
            <li><Link href="/articles/muscle-deli-nosh-hikaku/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリとナッシュの比較</Link></li>
            <li><Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのおすすめメニュー</Link></li>
            <li><Link href="/articles/nosh-tenkabutsu/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の添加物（おかず79品の原材料表示を集計）</Link></li>
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
