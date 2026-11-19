import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "マッスルデリとnosh（ナッシュ）を比較｜たんぱく質・糖質・塩分を全メニューで集計、送料込み1食の料金も公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "マッスルデリとnosh（ナッシュ）を、公式のメニュー一覧に載っている全メニューの栄養成分（nosh 79品・マッスルデリ 75品）と、公式の料金・送料で比較しました。たんぱく質30g以上のメニュー数、糖質・塩分の幅、送料込みの1食あたりを当サイトで計算しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/muscle-deli-nosh-hikaku/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "マッスルデリ ナッシュ 比較, マッスルデリ nosh 比較, マッスルデリ ナッシュ どっち, nosh マッスルデリ 違い, 高たんぱく 宅配弁当 比較",
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
  { question: "マッスルデリとnoshはどちらがたんぱく質が多いですか？", answer: "マッスルデリです。LOW FAT（LEANプランの表示値）は59品すべてが30g以上でした。noshの主菜のおかず79品の中央値は16.6gで、30g以上は6品でした（当サイト集計）。" },
  { question: "どちらが安いですか？", answer: "noshです。関東の送料込みで、noshは1食681円〜、マッスルデリはLEAN 15食で1,093円でした（定期・2回目以降の通常価格・当サイト計算）。" },
  { question: "糖質が少ないのはどちらですか？", answer: "noshは全メニューが糖質30g以下です。マッスルデリはLOW CARBプランなら糖質16.7〜28.6g（中央値 18.8g）で、LOW FATはご飯などを含むため中央値36.3gでした。" },
  { question: "ご飯は付いていますか？", answer: "公式にすべてのメニューに主食が付くという記載はありません。メニュー名で数えると、マッスルデリのLOW FATは59品中21品が丼・麺・パスタなど主食の入ったメニューで、noshはおかずが中心（炒飯・パスタ・グラタンなどは79品中7品）でした。" },
  { question: "解約しやすいのはどちらですか？", answer: "noshは購入回数や期間の制約、解約金がありません。マッスルデリも通常の定期は縛りなしですが、継続割プラン（6・12・24回）は回数に満たない解約で違約金がかかります。締切はnoshがお届け日の4〜5日前、マッスルデリが5日前です。" },
  { question: "マッスルデリと筋肉食堂DELIは同じですか？", answer: "別のサービスです。この記事で比較しているのはマッスルデリ（Muscle Deli）です。" },
];

const sections = [
  { id: "overview", label: "サービスの違い（早見表）" },
  { id: "nutrition", label: "全メニューの栄養成分の比較（当サイト集計）" },
  { id: "price", label: "料金と送料込みの1食あたり" },
  { id: "rules", label: "メニューの選び方・配送・締切" },
  { id: "which", label: "どちらを選ぶか：目的別の目安" },
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
          <Link href="/articles/#hikaku" className="text-foreground/70 hover:text-accent transition-colors">比較・料金データ</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">マッスルデリとnoshの比較</span>
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



export default function MuscleDeliNoshHikakuPage() {
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
      { "@type": "ListItem", position: 2, name: "比較・料金データ" },
      { "@type": "ListItem", position: 3, name: "マッスルデリとnoshの比較" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">比較・料金データ</span>
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
            マッスルデリ（運営：株式会社YOUR MEAL）とnosh（ナッシュ・運営：ナッシュ株式会社）は、どちらも冷凍の宅配弁当を定期便で届けるサービスです。同じ「体づくり・ダイエット向け」として比べられることが多いものの、<strong>マッスルデリはたんぱく質量を、noshは糖質と塩分の上限を</strong>軸に設計されており、1食の中身と料金の考え方が大きく違います。
          </p>
          <p className="mb-3">
            この記事では、両社の公式メニュー一覧に掲載されている<strong>全メニューの栄養成分</strong>（nosh 100品は2026年11月17日、マッスルデリ 75品は2026年11月16日に取得）を当サイトで集計し、2026年11月17日に公式サイトで確認した料金・送料と合わせて比較しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">マッスルデリとnoshの比較の要点</p>
          <p className="text-sm leading-relaxed mb-4">たんぱく質を重視するならマッスルデリです。LOW FAT（LEAN・MAINTAIN・GAINプラン）の59品はすべてたんぱく質30g以上で、noshの主菜のおかず79品のうち30g以上は6品でした。一方、料金はnoshが低く、関東の送料込みで1食681円〜（20食）、マッスルデリはLEAN 15食でも1,093円です。noshは全メニューが糖質30g以下・塩分2.5g以下で、マッスルデリのLOW FATは丼・麺・パスタなど主食の入ったメニューも多く、糖質の中央値は36.3gでした（当サイト集計）。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ マッスルデリが合う人</p>
              <ul className="space-y-1 list-disc list-inside"><li>毎食たんぱく質30g以上をそろえたい</li><li>丼・麺など主食の入ったメニューも選びたい</li><li>プラン（体重管理・増量）で量を決めたい</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">◎ noshが合う人</p>
              <ul className="space-y-1 list-disc list-inside"><li>1食あたりの料金を抑えたい</li><li>糖質・塩分の上限が全メニューでそろっている方がよい</li><li>約100種類から毎回メニューを選びたい</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="overview">サービスの違い（早見表）</SectionHeading>
        <ComparisonTable
          headers={["項目", "マッスルデリ", "nosh（ナッシュ）"]}
          rows={[
            ["設計の軸", "プラン別のたんぱく質・カロリー・糖質・脂質の目標", "全メニュー糖質30g以下・塩分2.5g以下"],
            ["1食の中身", "LOW FAT 59品中21品は丼・麺・パスタなど主食が入ったメニュー", "おかずが中心（炒飯・パスタ・グラタンなどは7品）"],
            ["プラン", "LEAN・MAINTAIN・GAIN・LOW CARB", "食数で選ぶ（6・8・10・12食、2回目以降は20食も可）"],
            ["1回の食数", "5・10・15食", "6・8・10・12・20食"],
            ["メニュー数（公式の表記）", "「50種類以上」（LEAN・MAINTAIN・GAIN）", "「約100種類」（ページにより約90種類）"],
            ["配送の間隔", "1週間・2週間", "1週間・2週間・3週間"],
            ["変更・解約の締切", "お届け予定日の5日前", "お届け日の4日前（北海道・東北・九州〈福岡除く〉・沖縄などは5日前）"],
            ["続けるほどの割引", "定期は初回25%OFF・2回目以降10%OFF。継続割プラン（6・12・24回）は最大20%OFF", "nosh club：累計購入数に応じて1食最安492円（税込）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: マッスルデリ <a href="https://muscledeli.jp/shop/products/page-md-lean-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">LEAN</a>・<a href="https://muscledeli.jp/shop/products/page-md-maintain-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">MAINTAIN</a>・<a href="https://muscledeli.jp/shop/products/page-md-gain-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">GAIN</a>・<a href="https://muscledeli.jp/shop/products/page-md-low-carb-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">LOW CARB</a>の商品ページ、<a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>／nosh <a href="https://nosh.jp/plan" target="_blank" rel="noopener noreferrer" className="text-accent underline">料金プラン</a>・<a href="https://nosh.jp/use/system" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご利用について</a>・<a href="https://nosh.jp/tradelaw" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>・<a href="https://nosh.jp/nutritional-value" target="_blank" rel="noopener noreferrer" className="text-accent underline">栄養価</a>・<a href="https://nosh.jp/club" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh club</a>（2026年11月17日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">名前の似た「筋肉食堂DELI」は、マッスルデリとは別のサービスです。筋肉食堂DELIの現状は<Link href="/articles/kinnikushokudo-deli-kuchikomi/" className="text-accent underline">筋肉食堂DELIの口コミ・評判</Link>で確認できます。</p>
        <SectionHeading id="nutrition">全メニューの栄養成分の比較（当サイト集計）</SectionHeading>
        <ComparisonTable
          headers={["項目", "nosh", "マッスルデリ LOW FAT", "マッスルデリ LOW CARB"]}
          rows={[
            ["対象", "主菜のおかず79品", "LOW FAT 59品（LEAN表示）", "LOW CARB 16品"],
            ["エネルギー", "120〜770kcal（中央値 340kcal）", "350〜413kcal（中央値 375kcal）", "351〜485kcal（中央値 357.5kcal）"],
            ["たんぱく質", "5.2〜48.4g（中央値 16.6g）", "30〜35.5g（中央値 30.2g）", "20.1〜29.4g（中央値 21.6g）"],
            ["たんぱく質30g以上", "6品", "59品", "0品"],
            ["たんぱく質20g以上", "20品", "59品", "16品"],
            ["脂質", "1.5〜67.6g（中央値 18.4g）", "7〜15g（中央値 13.4g）", "18〜38.5g（中央値 21.5g）"],
            ["糖質", "7.5〜29.7g（中央値 20.4g）", "21.1〜41.5g（中央値 36.3g）", "16.7〜28.6g（中央値 18.8g）"],
            ["食塩相当量", "1.5〜2.5g（中央値 2.4g）", "1.2〜5.3g（中央値 2.7g）", "1.4〜3.6g（中央値 2.8g）"],
            ["食塩相当量2.5g以下", "79品", "20品", "7品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※主食の入ったメニューの数は、当サイトがメニュー名（丼・炒飯・麺・パスタ・グラタン等）で数えた目安です。nosh：<a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式メニュー一覧</a>の掲載値（2026年11月17日取得・全100品からデザート・パン・朝食・販売休止の表示があるものを除いた79品）。マッスルデリ：<a href="https://muscledeli.jp/shop/product_categories/md-lowfat" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧（LOW FAT）</a>・<a href="https://muscledeli.jp/shop/product_categories/md-lowcarb" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧（LOW CARB）</a>の掲載値（2026年11月16日取得・LOW FATはLEANプラン選択時の表示値）。当サイトが集計し、中央値は小数第1位まで。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li><strong>たんぱく質</strong>：マッスルデリのLOW FATは59品すべてが30g以上（LEANの表示値。MAINTAIN・GAINはさらに多い）。noshの中央値は16.6gで、30g以上は6品です</li><li><strong>糖質</strong>：noshは全品が公式基準の30g以下（掲載値の最大29.7g）。マッスルデリのLOW FATは丼・麺・パスタなど主食の入ったメニューも多く中央値36.3gで、30gを超えるメニューが55品あります</li><li><strong>食塩相当量</strong>：noshは全品2.5g以下（公式基準）。マッスルデリは2.5g以下がLOW FATで20品・LOW CARBで7品にとどまり、最大5.3gのメニューもあります</li><li><strong>脂質</strong>：マッスルデリのLOW FATは最大15g。noshは中央値18.4gで、メニューによる幅が大きくなっています</li></ul>
        <SubHeading>noshでたんぱく質が多いメニュー（多い順に6品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "たんぱく質", "エネルギー", "糖質", "食塩相当量", "追加料金"]}
          rows={[
            ["たっぷり鶏むね肉のピリ辛麻婆あん", "48.4g", "465kcal", "19.9g", "2.5g", "追加料金 ¥130"],
            ["チキンのトマトチーズがけ", "40.5g", "395kcal", "20.6g", "2.1g", "なし"],
            ["ハンバーグ＆チキンのチーズデミ", "40.1g", "452kcal", "22.6g", "2.5g", "追加料金 ¥130"],
            ["鶏むね肉のタンドリーオイル焼き", "39.5g", "344kcal", "7.5g", "2.1g", "なし"],
            ["揚げ鶏と豚バラのにんにくみそだれ", "30g", "349kcal", "18g", "2.3g", "追加料金 ¥130"],
            ["濃厚デミソースのBIGハンバーグ", "30g", "535kcal", "24.1g", "2.5g", "追加料金 ¥350"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh 公式メニュー一覧</a>の掲載値（2026年11月17日取得）。追加料金は一覧の表示（ボリューム・プレミアム）です。</p>
        <p className="text-sm mb-6 leading-relaxed">noshにも高たんぱくのメニューはありますが、公式に「高たんぱく」の分類はなく、一覧の並べ替え（たんぱく質）で探す形です。毎食30g以上をそろえたい場合は、メニュー選びに手間がかかります。</p>
        <SectionHeading id="price">料金と送料込みの1食あたり</SectionHeading>
        <SubHeading>nosh（通常価格・税込）</SubHeading>
        <ComparisonTable
          headers={["プラン", "1回の料金", "1食あたり", "送料込み1食（関東）"]}
          rows={[
            ["6食", "4,318円", "719円", "914円"],
            ["8食", "5,157円", "644円", "790円"],
            ["10食", "6,206円", "620円", "737円"],
            ["12食", "7,344円", "612円", "709円"],
            ["20食（2回目以降）", "12,240円", "612円（当サイト計算）", "681円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://nosh.jp/plan" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh 料金プラン</a>・<a href="https://nosh.jp/lifestyle" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh ライフスタイル別プラン</a>・<a href="https://nosh.jp/shipping" target="_blank" rel="noopener noreferrer" className="text-accent underline">全国送料一覧表（2026年07月27日改訂版）</a>（2026年11月17日確認）。送料は関東で4〜12食1,166円・20食1,386円（関西は1,023円・1,243円、北海道は1,713円・1,992円）。送料込みは当サイト計算。初回は1,500円OFF、nosh clubのランクが上がると1食の料金が下がります。</p>
        <SubHeading>マッスルデリ（定期・2回目以降・税込）</SubHeading>
        <ComparisonTable
          headers={["プラン・食数", "1回の料金", "1食あたり", "送料込み1食"]}
          rows={[
            ["LEAN 5食", "5,216円", "1,043円", "1,283円"],
            ["LEAN 10食", "10,206円", "1,021円", "1,163円"],
            ["LEAN 15食", "14,969円", "998円", "1,093円"],
            ["MAINTAIN 5食", "5,821円", "1,164円", "1,404円"],
            ["MAINTAIN 10食", "11,394円", "1,139円", "1,281円"],
            ["MAINTAIN 15食", "16,740円", "1,116円", "1,211円"],
            ["GAIN 5食", "6,998円", "1,400円", "1,640円"],
            ["GAIN 10食", "13,770円", "1,377円", "1,519円"],
            ["GAIN 15食", "20,304円", "1,354円", "1,448円"],
            ["LOW CARB 5食", "5,508円", "1,102円", "1,342円"],
            ["LOW CARB 10食", "10,800円", "1,080円", "1,222円"],
            ["LOW CARB 15食", "15,854円", "1,057円", "1,152円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: マッスルデリ <a href="https://muscledeli.jp/shop/products/page-md-lean-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">LEAN</a>・<a href="https://muscledeli.jp/shop/products/page-md-maintain-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">MAINTAIN</a>・<a href="https://muscledeli.jp/shop/products/page-md-gain-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">GAIN</a>・<a href="https://muscledeli.jp/shop/products/page-md-low-carb-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">LOW CARB</a>の商品ページ（2026年11月17日確認）。商品ページの税抜価格に、公式サイトの計算方法（×1.08を四捨五入）を当てた税込額です。送料は5食1,200円・10食と15食1,420円（北海道・沖縄は1,530円〜）（<a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>）。初回は25%OFF。送料込みは当サイト計算。</p>
        <p className="text-sm mb-6 leading-relaxed">送料込みの1食あたりは、noshが681円〜914円（関東）、マッスルデリが1,093円〜1,640円でした。マッスルデリはたんぱく質の量が多く、主食の入ったメニューもある分、1食の料金はnoshより高くなります。noshのおかずだけのメニューでは、ご飯を別に用意する手間や費用も含めて比べると判断しやすくなります。</p>
        <SectionHeading id="rules">メニューの選び方・配送・締切</SectionHeading>
        <ComparisonTable
          headers={["項目", "マッスルデリ", "nosh"]}
          rows={[
            ["メニューの決め方", "おまかせメニューコース／お好きなメニューコース", "毎回好きなメニューに変更できる"],
            ["苦手なメニュー", "おまかせは「苦手メニュー」を3個まで除外", "自分で選ぶため外せる"],
            ["スキップ", "1回分スキップ可（次回の配送が終わるまで再スキップ不可）", "マイページでスキップ可"],
            ["解約", "通常定期は縛りなし。継続割プランは回数未満の解約で違約金（直近1回分の商品代金）", "購入回数や期間の制約、解約金なし"],
            ["締切", "お届け予定日の5日前", "お届け日の4日前（一部地域は5日前）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ よくあるご質問</a>・<a href="https://muscledeli.jp/shop/products/page-md-lean-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">商品ページ</a>／<a href="https://nosh.jp/use/system" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh ご利用について</a>・<a href="https://nosh.jp/plan" target="_blank" rel="noopener noreferrer" className="text-accent underline">料金プラン</a>・<a href="https://nosh.jp/tradelaw" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月17日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">解約の細かな条件は<Link href="/articles/muscle-deli-kaiyaku/" className="text-accent underline">マッスルデリの解約方法</Link>、noshの料金と送料の仕組みは<Link href="/articles/nosh-ryoukin-souryou/" className="text-accent underline">noshの料金・送料</Link>で詳しく確認できます。</p>
        <SectionHeading id="which">どちらを選ぶか：目的別の目安</SectionHeading>
        <ComparisonTable
          headers={["目的", "目安", "理由（上の集計・公式の情報から）"]}
          rows={[
            ["毎食たんぱく質30g以上をとりたい", "マッスルデリ（LOW FAT）", "LOW FAT 59品すべてが30g以上。noshは79品中6品"],
            ["増量・筋肉量を増やしたい", "マッスルデリ（GAIN）", "GAINはたんぱく質50g以上・550〜750kcalの目標（公式）"],
            ["糖質を抑えたい", "nosh／マッスルデリ（LOW CARB）", "noshは全品糖質30g以下。LOW CARBは糖質15g以下の目標で、掲載値は16.7〜28.6g（中央値 18.8g）"],
            ["塩分を控えたい", "nosh", "noshは全品2.5g以下。マッスルデリは2.5g超が48品"],
            ["1食の料金を抑えたい", "nosh", "送料込み1食681円〜（関東）。マッスルデリは1,093円〜"],
            ["主食まで含めて1食を済ませたい", "マッスルデリ（LOW FAT）", "丼・麺・パスタなど主食の入ったメニューが21品。noshは7品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※目安は当サイトが上の集計と公式の情報から整理したもので、どちらかを推奨するものではありません。</p>
        <p className="text-sm mb-6 leading-relaxed">たんぱく質を重視する宅配食をほかにも比べたい場合は<Link href="/articles/kou-tanpaku-ranking/" className="text-accent underline">高たんぱくの宅配弁当の比較</Link>、メニュー全品の数値は<Link href="/articles/muscle-deli-menu/" className="text-accent underline">マッスルデリのメニュー一覧</Link>にまとめています。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">マッスルデリは、プランごとのたんぱく質量を軸にしたセットで、毎食30g以上のたんぱく質をそろえたい方に向いています。noshは全メニューが糖質30g以下・塩分2.5g以下のおかずで、1食の料金を抑えながら糖質・塩分を管理したい方に向いています。何を優先するか（たんぱく質・料金・糖質と塩分）で選ぶのが確実です。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・送料・メニューは変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-niteru-takushoku/" className="text-accent hover:text-accent-dark transition-colors">ナッシュに似てる宅食（nosh の基準で6社を集計）</Link></li>
            <li><Link href="/articles/muscle-deli-menu/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリのメニュー一覧</Link></li>
            <li><Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリの口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">noshの口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-osusume-menu/" className="text-accent hover:text-accent-dark transition-colors">ナッシュのおすすめメニュー</Link></li>
            <li><Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">高たんぱくの宅配弁当の比較</Link></li>
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
