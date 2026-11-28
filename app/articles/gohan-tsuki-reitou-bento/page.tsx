import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ご飯付きの冷凍弁当がある宅配食｜全食ご飯付きの4社と、ご飯を追加できる・一部だけのサービスを公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "冷凍の宅配弁当で、ご飯（主食）まで付いて届くサービスを各社の公式サイトで確認しました。全食ご飯付きはまごころケア食・ニチレイフーズダイレクト・ママの休食・ライフミールの4社。料金・送料込みの1食あたり、ご飯付きにすると変わる糖質と送料、おかずのみのサービスも整理しています（2026年11月17日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/gohan-tsuki-reitou-bento/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ご飯付き 冷凍弁当, ご飯付き 宅配弁当, 冷凍弁当 ご飯付き 宅配, ごはん付き 冷凍弁当, 主食付き 冷凍弁当, ご飯付き 宅食",
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
  { question: "ご飯付きの冷凍弁当を届けてくれる宅配食は？", answer: "全食にご飯が付くのは、まごころケア食「ご飯付きセット」、ニチレイフーズダイレクト「きくばり まめなごはん」、ママの休食、ライフミール「ご飯付きセット」でした（2026年11月17日確認）。" },
  { question: "ご飯付きで一番安いのは？", answer: "今回確認した中では、まごころケア食のお得便14食が送料込みで1食約538円、ライフミールの20食（ご飯付きを含む）が約552円でした（当サイト計算・初回限定価格を除く）。" },
  { question: "noshや三ツ星ファームにご飯は付きますか？", answer: "基本はおかずのみですが、メニューの一部に炒飯・丼・リゾットなどのご飯ものがあります（三ツ星ファーム7品・nosh 2品・メニュー名で数えた当サイト集計）。" },
  { question: "ワタミの宅食ダイレクトや食宅便はご飯付きですか？", answer: "どちらもおかずのみです。ワタミの宅食ダイレクトはご飯を単品で販売しており、食宅便は冷凍白飯を一緒に注文できます。" },
  { question: "ご飯の量はどのくらいですか？", answer: "今回確認した公式ページには、ご飯の重さの記載がありませんでした。ニチレイは1食の内容量（例：255g）、ライフミールは1食のエネルギー・糖質を掲載しています。" },
  { question: "糖質制限中でもご飯付きを選んでよいですか？", answer: "ご飯付きは糖質が多くなります。ライフミールの例では、ご飯付きセットの糖質中央値が58.6gでした。糖質を控えている場合は、医師・管理栄養士の指示に合わせて選んでください。" },
];

const sections = [
  { id: "full", label: "全食ご飯付きで届く4社" },
  { id: "price", label: "送料込みの1食あたり（当サイト計算）" },
  { id: "partial", label: "ご飯を追加できる・一部のメニューだけご飯入りのサービス" },
  { id: "okazu", label: "おかずのみ（ご飯は付かない）のサービス" },
  { id: "points", label: "ご飯付きを選ぶときに確かめたいこと" },
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
          <Link href="/articles/#mokuteki" className="text-foreground/70 hover:text-accent transition-colors">目的別ガイド・ランキング</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ご飯付きの冷凍弁当</span>
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



export default function GohanTsukiReitouBentoPage() {
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
      { "@type": "ListItem", position: 2, name: "目的別ガイド・ランキング" },
      { "@type": "ListItem", position: 3, name: "ご飯付きの冷凍弁当" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">目的別ガイド・ランキング</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-17">公開: 2026年11月17日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            冷凍の宅配弁当の多くは「おかずのみ」で、ご飯は自分で用意する前提です。炊飯の手間を省きたい方や、1食をまるごと任せたい方にとっては、<strong>ご飯まで付いて届くかどうか</strong>が選ぶときの大きな分かれ目になります。
          </p>
          <p className="mb-3">
            この記事では、2026年11月17日に各社の公式サイトで、ご飯（主食）付きの冷凍弁当があるかを確認しました。全食にご飯が付くサービス、ご飯を追加できるサービス、メニューの一部だけご飯入りのサービス、おかずのみのサービスに分けて整理し、送料込みの1食あたりは当サイトで計算しています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ご飯付きの冷凍弁当の要点</p>
          <p className="text-sm leading-relaxed mb-4">全食にご飯が付いて届くのは、まごころケア食「ご飯付きセット」、ニチレイフーズダイレクト「きくばり まめなごはん」、ママの休食、ライフミール「ご飯付きセット」の4社でした。送料込みの1食あたりは、まごころケア食（お得便14食）が約538円、ライフミール（20食）が約552円です（当サイト計算）。DELIPICKSはご飯を追加でき、三ツ星ファーム・nosh・マッスルデリはメニューの一部が丼・炒飯などのご飯もの、ワタミの宅食ダイレクト・食宅便・ウェルネスダイニング・Dr.つるかめキッチンはおかずのみです（2026年11月17日確認）。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 全食ご飯付きで届く</p>
              <ul className="space-y-1 list-disc list-inside"><li>まごころケア食（ご飯付きセット）</li><li>ニチレイ（きくばり まめなごはん）</li><li>ママの休食</li><li>ライフミール（ご飯付きセット）</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ ご飯は追加・一部のみ／おかずのみ</p>
              <ul className="space-y-1 list-disc list-inside"><li>DELIPICKS：ご飯を追加（別料金）</li><li>三ツ星ファーム・nosh・マッスルデリ：一部のみ</li><li>ワタミ・食宅便・ウェルネス・つるかめ：おかずのみ</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="full">全食ご飯付きで届く4社</SectionHeading>
        <ComparisonTable
          headers={["サービス", "公式の説明（抜粋）", "料金の例（税込）", "送料（税込）"]}
          rows={[
            ["まごころケア食「ご飯付きセット」", "「主菜1品・副菜2品・麦ご飯がついた、食べごたえのある構成」", "定期（お得便）7食3,556円・10食4,881円・14食6,552円／都度10食6,670円", "980円（沖縄県・離島1,480円）"],
            ["ニチレイフーズダイレクト「きくばり まめなごはん」", "「ごはん付きのタンパク質が摂れるメニュー」（主食・主菜・副菜のワンプレート）", "単品970円／10食セット9,700円／3回定期12食9,900円", "本州・四国は7,500円以上で無料（5,000円未満は1,000円）。定期購入は全地域無料"],
            ["ママの休食", "「1食の内容は、メイン1品、サイド3～4品、国産ごはんです」", "4食定期便 初回3,920円・2回目以降4,703円", "780〜1,500円（地域別・消費税別）"],
            ["ライフミール「ご飯付きセット」", "「主菜・副菜に加え、麦ごはんをセットにしたメニュー」", "定期10食5,100円・20食9,800円（ご飯付き以外と同額）", "ご飯付きを含むと1,230円（沖縄県1,730円）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://magokoro-care-shoku.com/products/detail/84" target="_blank" rel="noopener noreferrer" className="text-accent underline">まごころケア食 ご飯付きセット</a>・<a href="https://magokoro-care-shoku.com/products/detail/89" target="_blank" rel="noopener noreferrer" className="text-accent underline">お得便</a>・<a href="https://magokoro-care-shoku.com/faq.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>／<a href="https://wellness.nichirei.co.jp/shop/c/c1014/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ニチレイフーズダイレクト きくばり まめなごはん</a>・<a href="https://wellness.nichirei.co.jp/shop/g/gc2609003/" target="_blank" rel="noopener noreferrer" className="text-accent underline">10食セット</a>・<a href="https://wellness.nichirei.co.jp/shop/pages/guide02.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">送料</a>／<a href="https://mamakyu.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ママの休食</a>／<a href="https://l-meal.com/products/list" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール メニュー一覧</a>・<a href="https://l-meal.com/shopping/plan" target="_blank" rel="noopener noreferrer" className="text-accent underline">料金プラン</a>・<a href="https://l-meal.com/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>（2026年11月17日確認）</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>まごころケア食のご飯付きセットはメニューを選べないおまかせです。容器は縦17.8cm×横19.8cm×高さ3.5cmで、電子レンジ600Wで5分30秒と案内されています。ご飯の量（g）とカロリーは商品ページに記載がありません</li><li>ニチレイの「きくばり まめなごはん」は、味付きのご飯と主菜・副菜のワンプレートです。例として「えびカツとチキンライス」は1食255gで426kcal・たんぱく質20.4g・食塩相当量2.5gと表示されています</li><li>ママの休食は妊娠中・産後の方向けで、定期便のみ（毎週・2週に1回・月に1回）です。公式は「定期便の回数の縛りや制限はありません」としています</li><li>ライフミールのご飯付きセットは40品から選べ、掲載値はエネルギー353〜515kcal（中央値 420kcal）・食塩相当量1〜2.1g（中央値 1.6g）でした（当サイト集計）。ご飯付きセットを1つでも選ぶと、送料が250円上がります</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://magokoro-care-shoku.com/faq.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">まごころケア食 よくある質問</a>・<a href="https://wellness.nichirei.co.jp/shop/g/g1302200/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ニチレイ えびカツとチキンライス</a>・<a href="https://mamakyu.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ママの休食</a>・<a href="https://l-meal.com/products/list" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール メニュー一覧</a>（2026年11月17日確認）</p>
        <SectionHeading id="price">送料込みの1食あたり（当サイト計算）</SectionHeading>
        <ComparisonTable
          headers={["サービス・プラン", "計算", "送料込みの1食あたり"]}
          rows={[
            ["まごころケア食 お得便14食", "（6,552円＋980円）÷14食", "約538円"],
            ["ライフミール 20食（ご飯付きを含む）", "（9,800円＋1,230円）÷20食", "約552円"],
            ["ライフミール 10食（ご飯付きを含む）", "（5,100円＋1,230円）÷10食", "約633円"],
            ["ニチレイ 3回定期12食", "9,900円÷12食（定期は送料無料）", "約825円"],
            ["ママの休食 4食（2回目以降・関東）", "（4,703円＋送料780円の税込858円）÷4食", "約1,390円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※各社公式の料金・送料（2026年11月17日確認）から当サイトが計算。本州の通常地域の場合で、初回限定価格・キャンペーンは含めていません。ママの休食の送料は公式表記が消費税別のため10%を加えています。</p>
        <p className="text-sm mb-6 leading-relaxed">同じ「ご飯付き」でも、1食の料金は500円台から1,000円台まで開きがあります。まごころケア食とライフミールは同じ株式会社シルバーライフの運営で、価格帯が近いサービスです。ニチレイはたんぱく質20g以上をうたうメニュー、ママの休食は妊娠中・産後向けと、対象がはっきりしたサービスです。</p>
        <SectionHeading id="partial">ご飯を追加できる・一部のメニューだけご飯入りのサービス</SectionHeading>
        <ComparisonTable
          headers={["サービス", "ご飯の扱い", "確認できたこと"]}
          rows={[
            ["DELIPICKS", "ご飯を追加できる（別料金）", "「お好みでご飯つきに。」ご飯は定価313円、お弁当は定価994円（まとめ買いで最大20%OFF）。お試しセットはおかず5食＋雑穀ごはんとブロッコリー1食で3,218円"],
            ["三ツ星ファーム", "一部のメニューがご飯もの", "注文できるメニュー143品のうち、メニュー名にご飯・丼などが入るものは7品"],
            ["nosh（ナッシュ）", "一部のメニューがご飯もの", "メニュー98品のうち、メニュー名にご飯ものが入るものは2品（チャーシュー炒飯・ベーコンとチーズの濃厚リゾット）"],
            ["マッスルデリ", "一部のメニューがご飯もの", "メニュー75品のうち、メニュー名に丼・炒飯・ライスなどが入るものは12品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://deli-picks.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">DELIPICKS 公式</a>・<a href="https://deli-picks.com/trial/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お試しセット</a>（2026年11月17日確認）。三ツ星ファーム・nosh・マッスルデリは各社の公式メニュー一覧（<a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム</a>・<a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh</a> は2026年11月17日、<a href="https://muscledeli.jp/shop/product_categories/md-lowfat" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ</a>は2026年11月16日に取得）のメニュー名から、丼・ライス・炒飯・ごはん・リゾットなどを含むものを当サイトが数えた目安です。DELIPICKSの定期便の配送手数料は、公式ヘルプが表示できず確認できていません。</p>
        <SubHeading>三ツ星ファームのご飯もののメニュー（7品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "エネルギー", "糖質", "食塩相当量"]}
          rows={[
            ["メガ盛り ガッツリ豚肉の生姜焼き丼", "535kcal", "65.2g", "2.6g"],
            ["メガ盛り とろっと卵の王道オムライス", "551kcal", "70.3g", "3.2g"],
            ["じっくり香ばしく焼き上げた 牛カルビライスバーガー", "213kcal", "69g※", "1.3g"],
            ["鶏ともち麦の濃厚チーズリゾット", "333kcal", "24.5g", "2.1g"],
            ["スパイス香る 野菜ともち麦ごはんの欧風チーズカレー", "413kcal", "記載なし", "2.1g"],
            ["お子さまプレート えがお咲くチキンライス", "445kcal", "68.1g", "3.1g"],
            ["満腹310g超 かき込め旨辛麻婆丼", "441kcal", "60.5g", "2.7g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>の掲載値（2026年11月17日取得）。糖質の「※」は、公式の掲載値で糖質（69g）が炭水化物（41.1g）を上回っており、誤記の可能性があるものです。メニューの詳しい集計は<Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent underline">三ツ星ファームのおすすめメニュー</Link>にまとめています。</p>
        <SectionHeading id="okazu">おかずのみ（ご飯は付かない）のサービス</SectionHeading>
        <ComparisonTable
          headers={["サービス", "公式の案内（抜粋）", "ご飯の用意"]}
          rows={[
            ["ワタミの宅食ダイレクト", "「ごはんとお味噌汁を準備すれば、簡単に「一汁三菜」の食卓を実現できます。」", "アラカルトで「ごはん」を単品販売（160円）"],
            ["食宅便", "「基本ご飯はつきませんが、ご一緒にパックの冷凍白飯やフリーズドライのみそ汁を付けることができます。」", "冷凍白飯を一緒に注文できる"],
            ["ウェルネスダイニング（気配り宅配食）", "「おかずのみのお届けですので、お客様でご用意いただくご飯とともにお召し上がりください。」", "常温のご飯を別に販売"],
            ["Dr.つるかめキッチン", "「ご飯はつきません。おかずのみでお届けとなります。」", "自分で用意"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/product_categories/3dishes" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクト いつでも三菜</a>・<a href="https://www.watami-takushoku-direct.jp/shop/product_categories/alacarte" target="_blank" rel="noopener noreferrer" className="text-accent underline">アラカルト</a>・<a href="https://shokutakubin.com/shop/pages/faq.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">食宅便 よくあるご質問</a>・<a href="https://www.wellness-dining.com/kikubari/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ウェルネスダイニング 気配り宅配食</a>・<a href="https://tsurukame-kitchen.com/faq/" target="_blank" rel="noopener noreferrer" className="text-accent underline">Dr.つるかめキッチン よくあるご質問</a>（2026年11月17日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">おかずのみのサービスでも、食宅便のように冷凍の白飯を同時に注文できるものがあります。ご飯の量や種類（白米・雑穀米など）を自分で決めたい方は、おかずのみのサービスとパックご飯を組み合わせる方法もあります。</p>
        <SectionHeading id="points">ご飯付きを選ぶときに確かめたいこと</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li><strong>糖質とカロリーが増える</strong>：ライフミールの掲載値では、ご飯付きセットの糖質が52.6〜67.6g（中央値 58.6g）、ご飯の付かない糖質30g基準は6.1〜26.1g（中央値 12.2g）でした（当サイト集計）。糖質を控えている方は、ご飯付きにするかを分けて考える必要があります</li><li><strong>送料が変わることがある</strong>：ライフミールはご飯付きセットを1つでも選ぶと送料が250円上がります</li><li><strong>メニューを選べるか</strong>：まごころケア食のご飯付きセットはおまかせ、ライフミールは選択式です</li><li><strong>冷凍庫の容量</strong>：ご飯付きは容器に高さが出ます。まごころケア食は1食あたり高さ3.5cmの容器と案内されています</li><li><strong>ご飯の量が書かれていないことが多い</strong>：今回確認した公式ページでは、ご飯の重さ（g）の記載は見つかりませんでした。量を重視する方は、1食の内容量やカロリーで比べてください</li></ul>
        <p className="text-sm mb-6 leading-relaxed">各社の口コミは<Link href="/articles/magokoro-care-reviews/" className="text-accent underline">まごころケア食の口コミ・評判</Link>・<Link href="/articles/nichirei-foods-direct-kuchikomi/" className="text-accent underline">ニチレイフーズダイレクトの口コミ・評判</Link>・<Link href="/articles/mamano-kyushoku-reviews/" className="text-accent underline">ママの休食の口コミ・評判</Link>、ライフミールのメニュー全品は<Link href="/articles/lifemeal-menu/" className="text-accent underline">ライフミールのメニュー一覧</Link>で確認できます。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">冷凍の宅配弁当でご飯まで届くのは、まごころケア食・ニチレイフーズダイレクト・ママの休食・ライフミールの4社でした。料金を抑えたいならまごころケア食やライフミール、たんぱく質を重視するならニチレイ、妊娠中・産後ならママの休食と、目的で選び分けられます。ご飯付きは糖質が増え、送料が変わるサービスもあるため、料金表と栄養成分をあわせて確認してください。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・送料・メニューは変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/lifemeal-menu/" className="text-accent hover:text-accent-dark transition-colors">ライフミールのメニュー一覧</Link></li>
            <li><Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark transition-colors">まごころケア食の口コミ・評判</Link></li>
            <li><Link href="/articles/nichirei-foods-direct-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ニチレイフーズダイレクトの口コミ・評判</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
            <li><Link href="/articles/souzai-takuhai/" className="text-accent hover:text-accent-dark transition-colors">惣菜の宅配は冷蔵と冷凍でどう違う？</Link></li>
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
