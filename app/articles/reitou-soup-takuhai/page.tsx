import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "冷凍スープの宅配を比較｜スープストックトーキョーの定期便・GREEN SPOON 18品・三ツ星ファームの料金と栄養を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "冷凍スープを宅配で届けるサービスを公式情報で比較しました。Soup Stock Tokyoの「選べるスープの定期便」は送料込みで1個567〜725円、GREEN SPOONのスープ18品は1食172〜237g、三ツ星ファームはおかずの定期便でスープ系を選べます（2026年11月18日確認・当サイト計算）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/reitou-soup-takuhai/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "冷凍スープ 宅配, 冷凍スープ 定期便, スープ 宅配, スープストックトーキョー 定期便, グリーンスプーン スープ, 冷凍スープ 通販",
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
  { question: "冷凍スープだけを定期便で届けてくれるサービスはありますか？", answer: "Soup Stock Tokyoの公式オンラインショップに「選べるスープの定期便」があり、6・8・10・16個入りのプランから選べます（2026年11月18日確認）。" },
  { question: "冷凍スープの宅配の料金はいくらくらいですか？", answer: "Soup Stock Tokyoの定期便は送料込みで1個567〜725円、GREEN SPOONのスープは定期の2回目以降で1食782〜883円（税込）＋送料、三ツ星ファームはコースの1食711〜927円（税込）＋送料です（当サイト計算を含む）。" },
  { question: "GREEN SPOONのスープのカロリーは？", answer: "2026年11月18日時点の18品で81〜288kcal（中央値 178.5kcal）でした（各商品ページの栄養成分表示・当サイト集計）。" },
  { question: "Soup Stock Tokyoの定期便はいつでも解約できますか？", answer: "注文回数の縛りはなく、次回お届け予定日の7日前までにマイページの「定期便の管理」から一時停止・解約の手続きができます。初回注文分はキャンセルできません。" },
  { question: "冷凍スープはどうやって温めますか？", answer: "Soup Stock Tokyoは電子レンジや湯煎、三ツ星ファームのスープ系は外袋に切り込みを入れて電子レンジ（600W 約5分30秒）です。GREEN SPOONは商品ごとの表示に従います。" },
];

const sections = [
  { id: "compare", label: "3社の比較表" },
  { id: "sst", label: "Soup Stock Tokyo：スープだけの定期便（送料込み）" },
  { id: "gs", label: "GREEN SPOON：野菜中心のスープ18品" },
  { id: "mitsuboshi", label: "三ツ星ファーム：おかずと一緒にスープ系を選ぶ" },
  { id: "choose", label: "目的別の選び方" },
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
          <span className="text-foreground">冷凍スープの宅配の比較</span>
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



export default function ReitouSoupTakuhaiPage() {
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
      { "@type": "ListItem", position: 2, name: "目的別ガイド・ランキング" },
      { "@type": "ListItem", position: 3, name: "冷凍スープの宅配の比較" },
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
            <time dateTime="2026-11-18">公開: 2026年11月18日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            冷凍スープの宅配は、スープだけを定期便で届けるサービスと、宅配弁当やおかずの定期便の中でスープを選べるサービスに分かれます。料金の数え方（送料込みか別か）や1食の量も各社で違うため、表示価格だけでは比べにくいのが実情です。
          </p>
          <p className="mb-3">
            この記事では、2026年11月18日に<strong>Soup Stock Tokyo・GREEN SPOON・三ツ星ファーム</strong>の公式ページを確認し、料金・送料・量・栄養成分をそろえて比較しました。GREEN SPOONのスープ18品は、各商品ページの栄養成分表示を当サイトで一覧にしています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">冷凍スープの宅配の要点</p>
          <p className="text-sm leading-relaxed mb-4">スープだけを届けてほしいなら、送料込みで1個567〜725円のSoup Stock Tokyo「選べるスープの定期便」が分かりやすい選択肢です。野菜の量や栄養成分で選びたいなら、全18品の栄養成分が公開されているGREEN SPOONのスープ（定期の2回目以降で1食782〜883円＋送料）が比べやすくなっています。おかずの宅配と一緒に汁物を足したい場合は、三ツ星ファームの定期便でスープ系（豚汁・参鶏湯）を選ぶ方法もあります（料金は当サイト計算を含む）。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 比べてわかったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>Soup Stock Tokyoは送料込みの価格表示</li><li>GREEN SPOONは全18品の栄養成分を掲載</li><li>3社とも回数の縛りなしで始められる（通常プラン）</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>送料込み・別の違いで1食の価格が変わる</li><li>1食の量（g）が各社で違う</li><li>初回分のキャンセルはできない社がある</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="compare">3社の比較表</SectionHeading>
        <ComparisonTable
          headers={["項目", "Soup Stock Tokyo", "GREEN SPOON", "三ツ星ファーム"]}
          rows={[
            ["スープの種類", "40種類以上（季節のスープ・カレーを含む）", "18品（期間限定を含む）", "スープ系2品（豚汁・参鶏湯）＋おかず"],
            ["買い方", "スープだけの定期便（6・8・10・16個）", "スープをほかのカテゴリと組み合わせて8食から（定期）／単品4・8食", "7・14・21食のコースでおかずと組み合わせる"],
            ["1個（1食）あたり", "567〜725円（送料込み）", "782〜883円＋送料（定期・2回目以降）", "711〜927円＋送料（コースの1食単価）"],
            ["送料（税込）", "価格に含む", "定期1,089円（北海道・沖縄は別）", "990円（北海道・沖縄2,500円）"],
            ["1食の量", "公式の定期便ページに記載なし", "172〜237g", "306g"],
            ["温め方", "電子レンジ・湯煎（5分で簡単調理）", "商品ごとに記載", "電子レンジ（600W 約5分30秒）"],
            ["停止・解約の締切", "次回お届け予定日の7日前（マイページ）", "変更期限内（初回分は解約不可）", "マイページの変更締切日（原則7日前）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://ec.soup-stock-tokyo.com/pages/subscription" target="_blank" rel="noopener noreferrer" className="text-accent underline">Soup Stock Tokyo 選べるスープの定期便</a>・<a href="https://green-spoon.jp/products/soup" target="_blank" rel="noopener noreferrer" className="text-accent underline">GREEN SPOON SOUP</a>と各商品ページ・<a href="https://faq.green-spoon.jp/hc/ja/articles/14159862817943" target="_blank" rel="noopener noreferrer" className="text-accent underline">GREEN SPOON よくある質問（商品の価格）</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14159856148631" target="_blank" rel="noopener noreferrer" className="text-accent underline">同（送料）</a>・<a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>・<a href="https://mitsuboshifarm.jp/plans" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム 料金プラン</a>（2026年11月18日確認）。1個（1食）あたりは当サイトの計算です。</p>
        <p className="text-sm mb-6 leading-relaxed">同じ「1食」でも、Soup Stock Tokyoは送料込み、GREEN SPOONと三ツ星ファームは送料が別にかかります。また、GREEN SPOONと三ツ星ファームはスープだけでなく、ほかのメニューと組み合わせて食数を満たす仕組みです。</p>
        <SectionHeading id="sst">Soup Stock Tokyo：スープだけの定期便（送料込み）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">Soup Stock Tokyo（スープストックトーキョー）の公式オンラインショップには、店舗のスープを冷凍で届ける「選べるスープの定期便」があります。季節のスープやカレーなど40種類以上から毎月選べると案内されています。</p>
        <ComparisonTable
          headers={["プラン", "価格（送料・税込）", "1個あたり（当サイト計算）"]}
          rows={[
            ["6個入りプラン", "4,350円", "725円"],
            ["8個入りプラン", "5,530円", "691円"],
            ["10個入りプラン", "6,120円", "612円"],
            ["16個入りプラン", "9,070円", "567円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://ec.soup-stock-tokyo.com/pages/subscription" target="_blank" rel="noopener noreferrer" className="text-accent underline">Soup Stock Tokyo 選べるスープの定期便</a>（2026年11月18日確認）。1個あたりは価格を個数で割った当サイトの計算です。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>注文回数の縛りはなく、1回のお試しでも可。お届け予定日やプランの変更もできる</li><li>一時停止・解約は、次回お届け予定日の7日前までにマイページの「定期便の管理」から手続きする</li><li>初回注文分はお届け日時の指定・キャンセルができない（初回はご注文から2〜4日以内に出荷・お届け）</li><li>パッケージは縦約15.8cm・横14.5cm・厚さ約1.2cm。電子レンジや湯煎で温める</li><li>ポイントが180貯まると、店舗・オンラインショップで使える1,000円分のクーポンと交換できる</li></ul>
        <p className="text-sm mb-6 leading-relaxed">3社の中で唯一、価格が送料込みで表示されており、個数が多いプランほど1個あたりが下がります（6個725円→16個567円）。スープそのものを主役にしたい方、店舗の味を家で食べたい方に向いています。</p>
        <SectionHeading id="gs">GREEN SPOON：野菜中心のスープ18品</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">GREEN SPOON（グリーンスプーン）は、野菜を多く使った冷凍の宅配食で、スープは2026年11月18日時点で18品（期間限定を含む）が掲載されています。各商品ページの栄養成分表示を一覧にすると次のとおりです（たんぱく質の多い順）。</p>
        <ComparisonTable
          headers={["メニュー名", "1食分", "エネルギー", "たんぱく質", "糖質", "食塩相当量"]}
          rows={[
            ["徳島県産なると金時と鶏むね肉のホワイトシチュー", "237g", "288kcal", "14.5g", "32.2g", "1.7g"],
            ["北海道産かぼちゃと鶏もも肉のゴールドシチュー", "204g", "244kcal", "12.1g", "24.1g", "1.5g"],
            ["野菜たっぷり和風だしのスープカレー", "184g", "177kcal", "8.4g", "15.1g", "1.6g"],
            ["たっぷり根菜の貝だし鶏白湯粥", "229g", "167kcal", "8.1g", "18.8g", "1.6g"],
            ["バジル香るごろごろ野菜のグリーンポトフ", "208g", "141kcal", "7.9g", "10.7g", "2g"],
            ["温野菜たっぷり濃厚トマトのビスクポタージュ", "188g", "229kcal", "7.2g", "16.3g", "1.3g"],
            ["さつまいもとスウィートコーンのリッチポタージュ", "220g", "254kcal", "7.1g", "29.7g", "1.5g"],
            ["クリームチーズとろけるほうれん草のミルクチャウダー", "182g", "203kcal", "6.7g", "18.5g", "1.5g"],
            ["あさりと菜の花の濃厚クラムチャウダー", "201g", "185kcal", "6.3g", "13.3g", "2.0g"],
            ["西京味噌の野菜たっぷり豚汁", "188g", "217kcal", "5.3g", "18.7g", "1.4g"],
            ["牛肉と白ねぎの韓国風旨辛ユッケジャン粥", "228g", "180kcal", "4.9g", "19.8g", "2.0g"],
            ["オレガノ香る彩り野菜のスパイススープカレー", "185g", "132kcal", "4.6g", "13.0g", "1.6g"],
            ["牛肉とビーツの野菜たっぷりボルシチ", "181g", "103kcal", "4.3g", "12.6g", "1.7g"],
            ["ポルチーニと飴色玉ねぎの洋風コンソメ", "172g", "146kcal", "3.8g", "11.2g", "1.6g"],
            ["菜の花と豆腐のピリ辛台湾豆乳鍋", "204g", "184kcal", "3.4g", "14.1g", "2.0g"],
            ["桜海老とヤングコーンの特製トムヤムクン", "191g", "81kcal", "3.1g", "8.6g", "3.2g"],
            ["濃厚トマトと野菜がおいしい特製ミネストローネ", "191g", "134kcal", "3.1g", "12g", "1.5g"],
            ["切り干し大根と熟成香酢のピリ辛酸辣湯", "173g", "120kcal", "2.6g", "13.2g", "1.9g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://green-spoon.jp/products/soup" target="_blank" rel="noopener noreferrer" className="text-accent underline">GREEN SPOON SOUP</a>の各商品ページの栄養成分表示（2026年11月18日確認）。5品は公式の表示が「推定値」です。</p>
        <p className="text-sm mb-6 leading-relaxed">18品のエネルギーは81〜288kcal（中央値 178.5kcal）、たんぱく質は2.6〜14.5g（中央値 5.8g）、食塩相当量は1.3〜3.2g（中央値 1.6g）でした（当サイト集計）。たんぱく質10g以上はシチュー系の2品だけで、多くは主菜というより野菜を足す一品の位置づけです。食塩相当量はトムヤムクン（3.2g）が突出しています。</p>
        <SubHeading>スープの料金（2回目以降・税込）</SubHeading>
        <ComparisonTable
          headers={["定期プラン", "スープ1食", "最少の食数", "送料込みの1食（最少の食数で計算）"]}
          rows={[
            ["S BOX（8〜11食）", "883円", "8食", "1,019円"],
            ["M BOX（12〜19食）", "812円", "12食", "903円"],
            ["L BOX（20〜28食）", "782円", "20食", "836円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://faq.green-spoon.jp/hc/ja/articles/14159862817943" target="_blank" rel="noopener noreferrer" className="text-accent underline">GREEN SPOON よくある質問「商品の価格を教えてください。」</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14159856148631" target="_blank" rel="noopener noreferrer" className="text-accent underline">「送料はいくらですか？」</a>（2026年11月18日確認）。単品4食は1食1,015円（税込）。定期の送料は全国一律1,089円（税込・北海道・沖縄を除く）。送料込みの1食は、各BOXの最少の食数をすべてスープにした場合の当サイト計算です。</p>
        <p className="text-sm mb-6 leading-relaxed">スープだけで8食頼むとS BOXの価格になり、ほかのカテゴリ（デリ弁当・サラダ・スムージーなど）と組み合わせて食数を増やすと1食の価格が下がります。GREEN SPOONの料金や解約の条件は<Link href="/articles/green-spoon-kuchikomi/" className="text-accent underline">GREEN SPOONの口コミ・評判</Link>と<Link href="/articles/green-spoon-kaiyaku/" className="text-accent underline">GREEN SPOONの解約方法</Link>で整理しています。</p>
        <SectionHeading id="mitsuboshi">三ツ星ファーム：おかずと一緒にスープ系を選ぶ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">三ツ星ファームは冷凍のおかずの定期便ですが、メニュー一覧の「スープ系」に汁物があります。スープだけの定期便ではなく、7・14・21食のコースの中でおかずと組み合わせて選ぶ形です。</p>
        <ComparisonTable
          headers={["メニュー名", "内容量", "エネルギー", "たんぱく質", "食塩相当量", "温め方"]}
          rows={[
            ["ホッと一息 10品目具材と3種味噌の優しい豚汁", "306g（1食分）", "253kcal", "12.4g", "2.7g", "外袋に切り込み→電子レンジ 600W 約5分30秒"],
            ["ホッと一息 2種の麦と鶏もも肉の生姜参鶏湯", "306g（1食分）", "273kcal", "22.8g", "2.0g", "外袋に切り込み→電子レンジ 600W 約5分30秒"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>の商品説明・栄養成分（2026年11月18日取得）。スープ系にはほかに数量限定の鍋キット2品があります（表には含めていません）。</p>
        <ComparisonTable
          headers={["コース（通常の定期便）", "1回の料金（税込）", "1食あたり", "送料990円込みの1食"]}
          rows={[
            ["7食コース", "6,485円", "926円", "1,068円"],
            ["14食コース", "11,458円", "818円", "889円"],
            ["21食コース", "14,918円", "710円", "758円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/plans" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム 料金プラン「定期購入契約の注意点」</a>（2026年11月18日確認）。1食あたりは当サイトの計算です。14・21食コースは初回のみ送料無料。</p>
        <p className="text-sm mb-6 leading-relaxed">三ツ星ファームのスープ系は306gと3社の中で量が多く、参鶏湯はたんぱく質22.8gで主菜の代わりにもなる値です。おかずのメニューは<Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent underline">三ツ星ファームのおすすめメニュー</Link>で集計しています。</p>
        <SectionHeading id="choose">目的別の選び方</SectionHeading>
        <ComparisonTable
          headers={["目的", "向いているサービス", "理由（公式情報から）"]}
          rows={[
            ["スープだけを定期的に届けてほしい", "Soup Stock Tokyo", "スープ専用の定期便で、価格が送料込み。40種類以上から選べる"],
            ["野菜を足したい・栄養成分で選びたい", "GREEN SPOON", "全18品の栄養成分が商品ページに掲載。サラダ・スムージーとも組み合わせられる"],
            ["主菜の宅配に汁物を足したい", "三ツ星ファーム", "おかずと同じコースで豚汁・参鶏湯を選べる。1食306g"],
            ["1食あたりの費用を抑えたい", "Soup Stock Tokyo（16個入り）", "送料込みで1個567円（当サイト計算）"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">食事全体の宅配サービスを料金で比べたい場合は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>、送料の安さで比べたい場合は<Link href="/articles/souryou-yasui-ranking/" className="text-accent underline">送料が安い宅配弁当ランキング</Link>も参考にしてください。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">冷凍スープの宅配は、スープだけの定期便（Soup Stock Tokyo）と、宅配食の中でスープを選ぶ形（GREEN SPOON・三ツ星ファーム）に分かれます。送料込みかどうか、1食の量、ほかのメニューと組み合わせる必要があるかで、実際の負担は変わります。スープを主役にするのか、食事に汁物を足すのかを決めてから選ぶと比べやすくなります。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・送料・メニューは変わることがあります。ご利用前に、各社の公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/green-spoon-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">GREEN SPOONの口コミ・評判</Link></li>
            <li><Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのおすすめメニュー</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
            <li><Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark transition-colors">送料が安い宅配弁当ランキング</Link></li>
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
