import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "マッスルデリ（Muscle Deli）のメニュー一覧｜低脂質59品・低糖質16品の栄養成分を公式の掲載値で集計【2026年11月】";
const ARTICLE_DESCRIPTION =
  "マッスルデリ（Muscle Deli）の公式メニュー一覧に掲載されている全75品（LOW FAT 59品・LOW CARB 16品）の栄養成分を集計しました。たんぱく質・糖質・食塩相当量の幅と中央値、塩分の少ないメニュー、新メニューとPremiumメニューの条件を整理しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/muscle-deli-menu/";
const OFFICIAL_URL = "https://muscledeli.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "マッスルデリ メニュー, Muscle Deli メニュー, マッスルデリ メニュー一覧, マッスルデリ 栄養成分, マッスルデリ 低糖質 メニュー, マッスルデリ 新メニュー, マッスルデリ Premium",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-16T00:00:00+09:00",
    modifiedTime: "2026-11-16T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "マッスルデリのメニューは何種類ありますか？", answer: "2026年11月16日に公式のメニュー一覧を確認したところ、LOW FAT（LEAN・MAINTAIN・GAINプラン）が59品、LOW CARB（LOW CARBプラン）が16品掲載されていました。" },
  { question: "どのメニューもたんぱく質30g以上ですか？", answer: "LOW FATはLEANプランの表示値で59品すべてが30g以上でした。LOW CARBは20.1〜29.4g（中央値 21.6g）で、30g以上のメニューはありませんでした（当サイト集計）。" },
  { question: "塩分の少ないメニューはありますか？", answer: "全75品のうち、食塩相当量2.0g以下は8品でした。一方、LOW FATには3gを超えるメニューも21品あります。記事内の「食塩相当量が少ないメニュー」の表を参考にしてください。" },
  { question: "Premiumメニューはいつから頼めますか？", answer: "全プランで、定期5回目の注文以降から注文できます。スキップや停止をしても条件はリセットされません。" },
  { question: "メニューを自分で選べますか？", answer: "お好きなメニューコースなら選べます。お届け予定日の5日前までにマイページで変更します。おまかせメニューコースでも、苦手なメニューを3個まで除外できます。" },
  { question: "MAINTAINやGAINの栄養成分はどこで確認できますか？", answer: "公式のメニュー一覧でプランを切り替えると確認できます。この記事のLOW FATの数値は、一覧を開いたときに選ばれているLEANプランの値です。" },
];

const sections = [
  { id: "plans", label: "プランとメニューの関係" },
  { id: "summary-data", label: "全メニューの栄養成分の幅（当サイト集計）" },
  { id: "salt", label: "食塩相当量の分布と塩分の少ないメニュー" },
  { id: "new", label: "新メニューとPremiumメニュー" },
  { id: "choose", label: "メニューの選び方：おまかせとお好き" },
  { id: "list-lowfat", label: "LOW FAT（低脂質）59品の一覧" },
  { id: "list-lowcarb", label: "LOW CARB（低糖質）16品の一覧" },
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
          <span className="text-foreground">マッスルデリのメニュー一覧</span>
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


export default function MuscleDeliMenuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-16T00:00:00+09:00",
    dateModified: "2026-11-16T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "マッスルデリのメニュー一覧" },
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
            <time dateTime="2026-11-16">公開: 2026年11月16日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            マッスルデリ（Muscle Deli・運営：株式会社YOUR MEAL）は、目的別のプランに合わせた高たんぱくな冷凍弁当を届ける定期便です。メニューは、LEAN・MAINTAIN・GAINの3プランで届く<strong>LOW FAT（低脂質）</strong>と、LOW CARBプランで届く<strong>LOW CARB（低糖質）</strong>に分かれています。
          </p>
          <p className="mb-3">
            この記事では、2026年11月16日に公式のメニュー一覧ページに掲載されていた<strong>全75品の栄養成分</strong>（エネルギー・たんぱく質・脂質・糖質・食物繊維・食塩相当量）を書き出し、当サイトで幅・中央値・分布を集計しました。メニュー名と数値は公式の掲載値のままで、並べ替えと集計だけを行っています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">マッスルデリのメニューの要点</p>
          <p className="text-sm leading-relaxed mb-4">公式のメニュー一覧には、LOW FAT 59品とLOW CARB 16品が掲載されていました（2026年11月16日確認）。LOW FAT一覧の表示値（LEANプラン選択時）は、59品すべてがたんぱく質30g以上・エネルギー350〜413kcal（中央値 375kcal）です。一方で食塩相当量は1.2〜5.3g（中央値 2.7g）と幅があり、3gを超えるメニューが21品あります。LOW CARBは糖質16.7〜28.6g（中央値 18.8g）で、たんぱく質は30g未満です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 集計でわかったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>LOW FATは59品すべてたんぱく質30g以上</li><li>全品の栄養成分が公式一覧に掲載されている</li><li>お好きなメニューコースなら自分で選べる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>食塩相当量3g超がLOW FATに21品</li><li>Premiumメニューは定期5回目以降</li><li>一覧の表示値はLEANプランのもの</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">マッスルデリ 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="plans">プランとメニューの関係</SectionHeading>
        <ComparisonTable
          headers={["プラン", "公式の説明", "エネルギーの目安（公式）", "届くメニュー"]}
          rows={[
            ["LEAN", "女性ダイエット用", "350〜450kcal", "LOW FAT"],
            ["MAINTAIN", "男性ダイエット用", "450〜550kcal", "LOW FAT"],
            ["GAIN", "増量用", "550〜750kcal", "LOW FAT"],
            ["LOW CARB", "低糖質ダイエット用", "350kcal以上", "LOW CARB"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/products/page-md-lean-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ 各プランの商品ページ</a>・<a href="https://muscledeli.jp/shop/product_categories/md-lowfat" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧（LOW FAT）</a>・<a href="https://muscledeli.jp/shop/product_categories/md-lowcarb" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧（LOW CARB）</a>（2026年11月16日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">LOW FATの同じメニューでも、プランによって量と栄養成分が変わります。公式のメニュー一覧はプランを切り替えて表示する作りで、ページを開いた時点ではLEANが選択されています。<strong>この記事のLOW FATの数値は、その初期表示（LEANプラン）の掲載値</strong>です。MAINTAIN・GAINではエネルギー・たんぱく質とも多くなるため、一覧でプランを切り替えるか、届いた商品のラベルで確認してください。</p>
        <SectionHeading id="summary-data">全メニューの栄養成分の幅（当サイト集計）</SectionHeading>
        <ComparisonTable
          headers={["項目", "LOW FAT（59品・LEAN表示）", "LOW CARB（16品）"]}
          rows={[
            ["品数", "59品", "16品"],
            ["エネルギー", "350〜413kcal（中央値 375kcal）", "351〜485kcal（中央値 357.5kcal）"],
            ["たんぱく質", "30〜35.5g（中央値 30.2g）", "20.1〜29.4g（中央値 21.6g）"],
            ["脂質", "7〜15g（中央値 13.4g）", "18〜38.5g（中央値 21.5g）"],
            ["糖質", "21.1〜41.5g（中央値 36.3g）", "16.7〜28.6g（中央値 18.8g）"],
            ["食物繊維", "2〜6.7g（中央値 3.7g）", "1.9〜13.8g（中央値 4.8g）"],
            ["食塩相当量", "1.2〜5.3g（中央値 2.7g）", "1.4〜3.6g（中央値 2.8g）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式の<a href="https://muscledeli.jp/shop/product_categories/md-lowfat" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧（LOW FAT）</a>・<a href="https://muscledeli.jp/shop/product_categories/md-lowcarb" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧（LOW CARB）</a>に掲載されている各メニューの栄養成分（2026年11月16日確認）を当サイトが集計。中央値は小数第1位まで。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>LOW FATは<strong>59品すべてがたんぱく質30g以上</strong>（最大は35.5g）。脂質は最大15gに抑えられています</li><li>LOW FATの糖質は中央値36.3gで、ご飯や麺を含むセットが中心です</li><li>LOW CARBは糖質の中央値が18.8gと低い代わりに、脂質の中央値が21.5gとLOW FATより多くなっています</li><li>食物繊維はLOW CARBのほうが多く、最大13.8gのメニューがあります</li></ul>
        <SectionHeading id="salt">食塩相当量の分布と塩分の少ないメニュー</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">たんぱく質や脂質がそろっている一方で、食塩相当量はメニューによって差が大きい項目です。</p>
        <ComparisonTable
          headers={["食塩相当量（1食）", "LOW FAT（59品）", "LOW CARB（16品）"]}
          rows={[
            ["2.0g以下", "7品", "1品"],
            ["2.1〜2.5g", "13品", "6品"],
            ["2.6〜3.0g", "18品", "3品"],
            ["3.1〜4.0g", "13品", "6品"],
            ["4.1g以上", "8品", "0品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式メニュー一覧の掲載値（2026年11月16日確認）を当サイトが集計</p>
        <p className="text-sm mb-6 leading-relaxed">LOW FATで食塩相当量が2.5g以下のメニューは20品、3gを超えるメニューは21品でした。全75品のうち2.0g以下は8品です。塩分を控えたい場合は、次のメニューが目安になります。</p>
        <SubHeading>食塩相当量が少ないメニュー（全品から少ない順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "分類", "食塩相当量", "たんぱく質", "エネルギー"]}
          rows={[
            ["豚もも肉のデミトマトソースセット", "LOW FAT", "1.2g", "30.1g", "360kcal"],
            ["豚肉の生姜焼きセット（低糖質）", "LOW CARB", "1.4g", "20.2g", "449kcal"],
            ["鶏肉の柔らか塩麹焼きセット", "LOW FAT", "1.5g", "31.1g", "378kcal"],
            ["鶏肉のマスタード焼きセット", "LOW FAT", "1.7g", "30.7g", "368kcal"],
            ["チキン南蛮セット", "LOW FAT", "1.7g", "30.1g", "408kcal"],
            ["ピリ辛麻辣牛セット", "LOW FAT", "1.7g", "30.1g", "390kcal"],
            ["彩り野菜とローストチキン＆トマト仕立ての白身魚セット", "LOW FAT", "1.9g", "30.2g", "381kcal"],
            ["鶏肉のチリソースセット", "LOW FAT", "1.9g", "30.1g", "375kcal"],
          ]}
        />
        <SubHeading>食物繊維が多いメニュー（全品から多い順に6品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "分類", "食物繊維", "糖質", "エネルギー"]}
          rows={[
            ["ボンゴレビアンコセット（低糖質）", "LOW CARB", "13.8g", "28.6g", "351kcal"],
            ["5種野菜のラタトゥイユセット（低糖質）", "LOW CARB", "7.6g", "22.1g", "366kcal"],
            ["旨辛ビビンバセット", "LOW FAT", "6.7g", "41.5g", "404kcal"],
            ["“おつまみ”焼き鳥セット（塩）", "LOW FAT", "6.1g", "21.1g", "352kcal"],
            ["カオマンガイセット", "LOW FAT", "6g", "38.6g", "377kcal"],
            ["ロールキャベツセット（低糖質）", "LOW CARB", "6g", "20.8g", "351kcal"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式メニュー一覧の掲載値（2026年11月16日確認）を当サイトが並べ替え。LOW FATはLEANプランの値です。</p>
        <SectionHeading id="new">新メニューとPremiumメニュー</SectionHeading>
        <ComparisonTable
          headers={["区分", "メニュー", "条件"]}
          rows={[
            ["新メニュー（一覧に「新メニュー」の表示）", "とろ～り月見の鶏すき焼きセット、“おつまみ”焼き鳥セット（塩）、“おつまみ”焼き鳥セット（タレ）、ふんわりお好み焼きと鶏の辛みそだれセット、生姜香る海鮮だしの鶏塩ラーメンセット、イタリアンハンバーグ＆グリルチキンセット、旨辛！花椒香る汁なし担々麺セット、彩り野菜とローストチキン＆トマト仕立ての白身魚セット、やわらかヒレカツ丼セット、タイの風香るパッタイセット（低糖質）", "おまかせメニューコースは発売日から2週間、新メニューが届くメニューの一つになる（2026年10月1日のお知らせの例）"],
            ["Premium", "とろ～り月見の鶏すき焼きセット、ビーフストロガノフセット", "全プランで、定期5回目の注文以降から注文できる。おまかせメニューも5回目以降はランダムで届く"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/product_categories/md-lowfat" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧</a>・<a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「Premium menuの購入条件について」</a>・<a href="https://muscledeli.jp/shop/information/MDnewmenu_info20261001" target="_blank" rel="noopener noreferrer" className="text-accent underline">新メニュー「ふんわりお好み焼きと鶏の辛みそだれセット」のお知らせ</a>（2026年11月16日確認）。Premiumの条件は、スキップ・停止ではリセットされません。</p>
        <SectionHeading id="choose">メニューの選び方：おまかせとお好き</SectionHeading>
        <ComparisonTable
          headers={["項目", "おまかせメニューコース", "お好きなメニューコース"]}
          rows={[
            ["メニューの決め方", "マッスルデリが毎回おすすめを選ぶ", "自分で選ぶ（お届け予定日の5日前までマイページで変更可）"],
            ["苦手なメニュー", "マイページの「苦手メニュー」で3個まで除外", "メニュー選択画面で削除"],
            ["品切れのとき", "代替メニュー機能の対象外", "「代替メニュー」で最大5個まで登録できる（未登録の場合は選択中のメニューからランダム）"],
            ["アレルギー登録", "購入時に登録でき、登録が適用される", "適用されない（各商品の原材料を確認して選ぶ）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ よくあるご質問（苦手メニューについて・代替メニューについて・アレルギー食材の登録）</a>・<a href="https://muscledeli.jp/shop/products/page-md-lean-base" target="_blank" rel="noopener noreferrer" className="text-accent underline">商品ページの注意事項</a>（2026年11月16日確認）。コースの切り替えはお問い合わせからお届け予定日の8日前までに申請します。</p>
        <p className="text-sm mb-6 leading-relaxed">塩分や糖質など、上の集計で気になる数値があるなら、お好きなメニューコースで選ぶほうが確実です。アレルギーは28品目の表示に対応していますが、公式FAQは完全対応ではないとしています。料金や口コミは<Link href="/articles/muscle-deli-reviews/" className="text-accent underline">マッスルデリの口コミ・評判</Link>、定期の解約条件は<Link href="/articles/muscle-deli-kaiyaku/" className="text-accent underline">マッスルデリの解約方法</Link>で確認できます。</p>
        <SectionHeading id="list-lowfat">LOW FAT（低脂質）59品の一覧</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">たんぱく質の多い順に並べています。数値はLEANプランの掲載値です。</p>
        <ComparisonTable
          headers={["メニュー名", "エネルギー", "たんぱく質", "脂質", "糖質", "食物繊維", "食塩相当量"]}
          rows={[
            ["ふんわりお好み焼きと鶏の辛みそだれセット（新）", "351kcal", "35.5g", "15g", "21.9g", "5.2g", "3.7g"],
            ["“おつまみ”焼き鳥セット（塩）（新）", "352kcal", "35.4g", "14.9g", "21.1g", "6.1g", "4.8g"],
            ["スパイシータンドリーチキンセット", "353kcal", "33g", "13.2g", "30.8g", "5.1g", "2.8g"],
            ["ガパオライスセット", "356kcal", "32.9g", "9.6g", "34.3g", "3.8g", "2.8g"],
            ["サーモンとアスパラのパスタセット", "361kcal", "32.2g", "9.3g", "36.7g", "4.2g", "3.8g"],
            ["イタリアンチキンステーキセット", "368kcal", "32.1g", "13.6g", "32.8g", "2.7g", "2.8g"],
            ["鶏ささみの梅大葉焼きセット", "358kcal", "31.8g", "9.3g", "39.3g", "5g", "2.5g"],
            ["イタリアンハンバーグ＆グリルチキンセット（新）", "383kcal", "31.7g", "14.5g", "32.7g", "3.3g", "2.4g"],
            ["照り焼きチキンセット", "371kcal", "31.4g", "11.8g", "36g", "2.6g", "3.7g"],
            ["“おつまみ”焼き鳥セット（タレ）（新）", "350kcal", "31.3g", "13.4g", "27.6g", "5.5g", "5.3g"],
            ["鶏肉の柔らか塩麹焼きセット", "378kcal", "31.1g", "13.4g", "38.1g", "3.8g", "1.5g"],
            ["コクうま豚の生姜焼きセット", "371kcal", "31g", "9.7g", "37.7g", "3.7g", "2.9g"],
            ["魚介のトマトパスタセット", "362kcal", "30.9g", "9g", "39.9g", "5.3g", "3.1g"],
            ["とろとろ卵のオムライスセット", "389kcal", "30.9g", "14.4g", "35.4g", "2.9g", "3.5g"],
            ["海鮮あんかけ焼きそばセット", "388kcal", "30.8g", "13.7g", "40g", "5.3g", "4.2g"],
            ["レモン風味のローストチキンセット", "356kcal", "30.7g", "12g", "35.6g", "3.9g", "3g"],
            ["鶏肉のマスタード焼きセット", "368kcal", "30.7g", "13g", "29.3g", "2g", "1.7g"],
            ["チーズキーマカレー", "381kcal", "30.7g", "13.2g", "35g", "5.4g", "2.8g"],
            ["ジェノベーゼパスタセット", "361kcal", "30.6g", "13.4g", "34.4g", "4.9g", "2.6g"],
            ["鶏つくねと上海風焼きそばセット", "372kcal", "30.6g", "13.7g", "36.4g", "5.8g", "3.4g"],
            ["ほっけ焼きセット", "350kcal", "30.5g", "11.3g", "32.1g", "3.7g", "2.7g"],
            ["回鍋肉セット", "368kcal", "30.5g", "11.6g", "37.3g", "3.3g", "2.5g"],
            ["赤魚の煮つけセット", "351kcal", "30.4g", "7g", "37g", "2.5g", "2.7g"],
            ["中華そぼろ丼セット", "393kcal", "30.4g", "14.3g", "39g", "5.5g", "3.7g"],
            ["旨辛ビビンバセット", "404kcal", "30.4g", "13.4g", "41.5g", "6.7g", "3.2g"],
            ["香味野菜香るよだれ鶏セット", "356kcal", "30.3g", "10.9g", "36.3g", "2.6g", "2.6g"],
            ["ピリ辛鶏チーズキムチセット", "364kcal", "30.3g", "12.5g", "35.6g", "3.4g", "2.8g"],
            ["カオマンガイセット", "377kcal", "30.3g", "11g", "38.6g", "6g", "3.7g"],
            ["チキンたっぷりカレーセット", "380kcal", "30.2g", "13.4g", "39.3g", "5.3g", "2.7g"],
            ["彩り野菜とローストチキン＆トマト仕立ての白身魚セット（新）", "381kcal", "30.2g", "12.9g", "35.6g", "3.5g", "1.9g"],
            ["鶏肉のオイスターソースがけセット", "389kcal", "30.2g", "13.4g", "35.4g", "3.1g", "2.7g"],
            ["豚もも肉のスタミナ炒めセット", "390kcal", "30.2g", "14g", "37.1g", "2.7g", "2.3g"],
            ["直火炒め炒飯と麻婆豆腐セット", "391kcal", "30.2g", "14.7g", "34.6g", "2.7g", "3.4g"],
            ["オニオンソースハンバーグセット", "393kcal", "30.2g", "14.9g", "35.4g", "4g", "2.5g"],
            ["デミグラス仕立てのボロネーゼセット", "403kcal", "30.2g", "14.8g", "35.3g", "4.1g", "3.2g"],
            ["さばの蒲焼きセット", "354kcal", "30.1g", "13g", "33.5g", "2.8g", "2.1g"],
            ["鶏肉豆腐ハンバーグセット", "354kcal", "30.1g", "10.1g", "37.3g", "4.1g", "2.1g"],
            ["豚もも肉のデミトマトソースセット", "360kcal", "30.1g", "11.1g", "38g", "4.1g", "1.2g"],
            ["とろ～り月見の鶏すき焼きセット（新・Premium）", "367kcal", "30.1g", "10.3g", "38.2g", "3.3g", "2.8g"],
            ["さばのみそ煮セット", "368kcal", "30.1g", "13.2g", "37.2g", "3g", "2.6g"],
            ["鶏肉のチリソースセット", "375kcal", "30.1g", "12.8g", "33.1g", "2.3g", "1.9g"],
            ["チーズとトマトのタコミートセット", "379kcal", "30.1g", "14.9g", "34.2g", "3.4g", "2.3g"],
            ["やわらかヒレカツ丼セット（新）", "380kcal", "30.1g", "12.4g", "39.5g", "4.9g", "2.6g"],
            ["長崎風ちゃんぽんセット", "380kcal", "30.1g", "14.5g", "34.6g", "4.5g", "5.1g"],
            ["彩りチンジャオロースセット", "380kcal", "30.1g", "12.6g", "35.1g", "3.4g", "3.7g"],
            ["とろっと玉子の親子丼セット", "381kcal", "30.1g", "11.6g", "37.5g", "2.6g", "2.1g"],
            ["具だくさんトムヤムセット", "387kcal", "30.1g", "14.1g", "36.2g", "4.9g", "4.2g"],
            ["ピリ辛麻辣牛セット", "390kcal", "30.1g", "14.9g", "36.7g", "2.9g", "1.7g"],
            ["デミグラスハンバーグ＆チキンセット", "397kcal", "30.1g", "15g", "37.1g", "4.1g", "2.3g"],
            ["チキン南蛮セット", "408kcal", "30.1g", "14.2g", "37.7g", "2.8g", "1.7g"],
            ["ルーロー飯セット", "412kcal", "30.1g", "14.4g", "38.2g", "3.2g", "2.7g"],
            ["柚子胡椒かおるツナと竹輪のパスタセット", "413kcal", "30.1g", "14.8g", "39.3g", "5.9g", "4.9g"],
            ["旨辛！花椒香る汁なし担々麺セット（新）", "354kcal", "30g", "15g", "30.4g", "4.8g", "3.3g"],
            ["生姜香る海鮮だしの鶏塩ラーメンセット（新）", "363kcal", "30g", "10.5g", "37.9g", "3.6g", "4.9g"],
            ["ふっくら赤魚の西京焼きセット", "365kcal", "30g", "10.5g", "38.5g", "3.6g", "2.4g"],
            ["ビーフストロガノフセット（Premium）", "372kcal", "30g", "14.9g", "30.7g", "3.1g", "2.3g"],
            ["甘辛ダレの鶏の生姜焼きセット", "390kcal", "30g", "12g", "37g", "2.3g", "2.6g"],
            ["月見照り焼きつくねセット", "395kcal", "30g", "14.7g", "38.1g", "3.1g", "2.1g"],
            ["チンジャオロース焼きそばセット", "401kcal", "30g", "14.9g", "35.7g", "3.9g", "4.2g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/product_categories/md-lowfat" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ メニュー一覧（LOW FAT）</a>（2026年11月16日確認・LEANプラン選択時の表示値）。メニューは入れ替わるため、注文の前に公式の一覧でご確認ください。</p>
        <SectionHeading id="list-lowcarb">LOW CARB（低糖質）16品の一覧</SectionHeading>
        <ComparisonTable
          headers={["メニュー名", "エネルギー", "たんぱく質", "脂質", "糖質", "食物繊維", "食塩相当量"]}
          rows={[
            ["スイートマスタードチキンセット（低糖質）", "353kcal", "29.4g", "18g", "18.3g", "4.9g", "2.7g"],
            ["親子丼セット（低糖質）", "351kcal", "29.1g", "18.2g", "16.7g", "1.9g", "2.2g"],
            ["5種野菜のラタトゥイユセット（低糖質）", "366kcal", "28.3g", "18.7g", "22.1g", "7.6g", "2.5g"],
            ["白身魚と野菜の黒酢あんセット（低糖質）", "355kcal", "26g", "20.2g", "19.6g", "5g", "3.3g"],
            ["ボンゴレビアンコセット（低糖質）", "351kcal", "24.8g", "18.1g", "28.6g", "13.8g", "3.1g"],
            ["ヤンニョムチキンセット（低糖質）", "351kcal", "23.4g", "19.6g", "18.2g", "3.7g", "3.1g"],
            ["ビビンバセット（低糖質）", "360kcal", "22.1g", "21.8g", "19.5g", "5.4g", "2.8g"],
            ["バターチキンカレーセット（低糖質）", "351kcal", "22g", "20.7g", "18.6g", "3.7g", "2.1g"],
            ["タイの風香るパッタイセット（低糖質）（新）", "353kcal", "21.3g", "21.9g", "17.5g", "2.8g", "2.4g"],
            ["中華丼セット（低糖質）", "360kcal", "20.6g", "23.5g", "19.2g", "4.3g", "2.4g"],
            ["ロールキャベツセット（低糖質）", "351kcal", "20.2g", "21.1g", "20.8g", "6g", "3.6g"],
            ["豚肉の生姜焼きセット（低糖質）", "449kcal", "20.2g", "33.6g", "17.4g", "2.4g", "1.4g"],
            ["麻婆なすセット（低糖質）", "369kcal", "20.1g", "23.3g", "18.9g", "4.7g", "3.4g"],
            ["彩り肉野菜炒めセット（低糖質）", "372kcal", "20.1g", "25.5g", "17.7g", "5.6g", "2.5g"],
            ["プルコギセット（低糖質）", "383kcal", "20.1g", "24.6g", "19.2g", "4.3g", "2.8g"],
            ["豚キムチ炒めセット（低糖質）", "485kcal", "20.1g", "38.5g", "18.3g", "5.1g", "3.3g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/product_categories/md-lowcarb" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ メニュー一覧（LOW CARB）</a>（2026年11月16日確認）</p>
        <OfficialButton>マッスルデリ 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">マッスルデリの公式メニュー一覧には、LOW FAT 59品とLOW CARB 16品が掲載されていました。LOW FATはすべてたんぱく質30g以上で、脂質も抑えられています。差が出るのは食塩相当量で、3gを超えるメニューもあるため、塩分を気にする場合はお好きなメニューコースで選ぶのが確実です。数値はプランやメニューの入れ替えで変わるため、注文前に公式の一覧で確認してください。</p>
        <p className="text-sm mb-6 leading-relaxed">メニュー・栄養成分は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>マッスルデリ 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリの口コミ・評判</Link></li>
            <li><Link href="/articles/muscle-deli-kaiyaku/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリの解約方法</Link></li>
            <li><Link href="/articles/muscle-deli-nosh-hikaku/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリとnoshの比較</Link></li>
            <li><Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">高たんぱくの宅配弁当ランキング</Link></li>
            <li><Link href="/articles/delipicks-menu/" className="text-accent hover:text-accent-dark transition-colors">デリピックスのメニュー一覧</Link></li>
            <li><Link href="/articles/muscle-deli-coupon/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリのクーポン・割引</Link></li>
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
