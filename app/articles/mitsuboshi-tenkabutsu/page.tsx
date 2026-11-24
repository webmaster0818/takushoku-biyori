import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "三ツ星ファームの添加物は？全137メニューの原材料表示を集計｜保存料8品・甘味料8品【2026年11月】";
const ARTICLE_DESCRIPTION =
  "三ツ星ファームは無添加をうたっているのか、公式のメニューデータに載る原材料表示137品を当サイトで集計しました。調味料（アミノ酸等）115品・着色料86品・保存料8品など、添加物ごとの品数と食宅便との比較を掲載（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mitsuboshi-tenkabutsu/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "三ツ星ファーム 添加物, 三ツ星ファーム 保存料, 三ツ星ファーム 無添加, 三ツ星ファーム 原材料, 三ツ星ファーム 化学調味料",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-25T00:00:00+09:00",
    modifiedTime: "2026-11-25T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "三ツ星ファームは無添加ですか？", answer: "無添加をうたうサービスではありません。公式のメニューデータで原材料を確認できた137品のうち、126品に添加物の欄がありました（2026年11月25日・当サイト集計）。" },
  { question: "三ツ星ファームに保存料は入っていますか？", answer: "保存料の表示があったのは137品中8品で、ポリリジンやソルビン酸でした。メニュー名は本文の一覧に載せています。" },
  { question: "化学調味料は使われていますか？", answer: "「化学調味料」は食品表示で使われる名称ではありません。うま味調味料などは「調味料（アミノ酸等）」と表示され、137品中115品にありました。" },
  { question: "人工甘味料は入っていますか？", answer: "甘味料の表示は8品で、スクラロース・ステビア・カンゾウなどでした。" },
  { question: "原材料はどこで確認できますか？", answer: "公式サイトのメニュー一覧で各メニューを開くと、原材料・アレルゲン・栄養成分が表示されます。届いた商品のパッケージの表示が最終的な情報です。" },
];

const sections = [
  { id: "answer", label: "三ツ星ファームの添加物の結論" },
  { id: "count", label: "添加物ごとの品数（137品の集計）" },
  { id: "compare", label: "食宅便との比較" },
  { id: "list", label: "保存料・甘味料が表示されているメニュー" },
  { id: "howto", label: "原材料表示の読み方" },
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
          <Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">三ツ星ファームの添加物</span>
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



export default function MitsuboshiTenkabutsuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-25T00:00:00+09:00",
    dateModified: "2026-11-25T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      { "@type": "ListItem", position: 3, name: "三ツ星ファームの添加物" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-25">公開: 2026年11月25日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            三ツ星ファームは「無添加」や「保存料不使用」をうたうサービスではありません。2026年11月25日に公式サイトのトップとメニュー一覧のプログラムに含まれる表記を検索しましたが、無添加・保存料不使用の記載は見当たりませんでした。
          </p>
          <p className="mb-3">
            そこで、公式のメニュー一覧が読み込むメニューデータ（全159品）から、注文できて原材料が載っている<strong>137品の【原材料】表示</strong>を当サイトで集計し、どの添加物が何品に使われているかを数えました。
          </p>
          <p>添加物の安全性や良し悪しを判断するものではありません。原材料表示の事実を並べています。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">三ツ星ファームの添加物（要点）</p>
          <p className="text-sm leading-relaxed mb-4">集計した137品のうち、調味料（アミノ酸等）は115品（84%）、着色料は86品（63%）、保存料は8品（6%）、甘味料は8品（6%）に表示がありました。添加物の欄が分かれていないメニューは11品で、多くはミールキット・焼きいもなど素材に近い商品です。同じ冷凍弁当の食宅便（69品）も、調味料（アミノ酸等）64品・加工でん粉69品と、使われ方は近い傾向でした。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 集計でわかったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>保存料の表示は8品（137品中）</li><li>全メニューの原材料を公式サイトで公開</li><li>素材に近いミールキット等は添加物の欄なし</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>「無添加」をうたうサービスではない</li><li>調味料（アミノ酸等）は137品中115品</li><li>原材料は仕入れで変わる（届いた商品の表示が優先）</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">三ツ星ファームの添加物の結論</SectionHeading>
        <ComparisonTable
          headers={["確認したこと", "結果（2026年11月25日）"]}
          rows={[
            ["公式の「無添加」「保存料不使用」の表記", "トップ・メニュー一覧に見当たらず"],
            ["原材料を公開しているか", "メニューデータの各商品に【原材料】を掲載（159品中150品）"],
            ["添加物を使っているメニュー", "137品中126品（添加物の欄があるもの）"],
            ["保存料", "8品"],
            ["甘味料", "8品"],
            ["三ツ星基準のメニュー", "76品中 調味料（アミノ酸等）73品・着色料56品・保存料3品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧</a>が読み込む公開データ（<a href="https://mitsuboshi-web-api.mitsuboshifarm.workers.dev/api/regular_menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">regular_menus</a>）の各メニューの【原材料】（2026年11月25日取得）。原材料表示の「／」（または「/」）より後ろを添加物の欄として、当サイトが品名で数えました。注文できない商品と原材料の記載がない商品（菓子・ドリンクのセット等）は除いています。</p>
        <p className="text-sm mb-6 leading-relaxed">結論として、三ツ星ファームのお弁当の大半には、調味料（アミノ酸等）・加工でん粉・増粘剤などの一般的な食品添加物が表示されています。一方、保存料が表示されているのは8品だけでした。料金やメニューは<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファームの口コミ・評判</Link>・<Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent underline">三ツ星ファームのおすすめメニュー</Link>で解説しています。</p>
        <SectionHeading id="count">添加物ごとの品数（137品の集計）</SectionHeading>
        <ComparisonTable
          headers={["添加物（表示名）", "全メニュー（137品）", "うち三ツ星基準（76品）"]}
          rows={[
            ["調味料（アミノ酸等）", "115品（84%）", "73品（96%）"],
            ["加工でん粉", "113品（82%）", "73品（96%）"],
            ["増粘剤（増粘多糖類・糊料）", "103品（75%）", "64品（84%）"],
            ["着色料", "86品（63%）", "56品（74%）"],
            ["香料", "63品（46%）", "43品（57%）"],
            ["pH調整剤", "47品（34%）", "28品（37%）"],
            ["リン酸塩", "41品（30%）", "18品（24%）"],
            ["発色剤（亜硝酸Na）", "33品（24%）", "14品（18%）"],
            ["酸化防止剤", "30品（22%）", "13品（17%）"],
            ["乳化剤", "29品（21%）", "11品（14%）"],
            ["甘味料", "8品（6%）", "4品（5%）"],
            ["保存料", "8品（6%）", "3品（4%）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※1品に複数の添加物が表示されるため、合計は品数を超えます。「三ツ星基準」は公式のメニュー一覧のカテゴリ名で、糖質・たんぱく質などの栄養の基準です（添加物の基準ではありません）。集計は当サイト。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>もっとも多いのは調味料（アミノ酸等）と加工でん粉で、どちらも8割以上のメニューに表示がありました</li><li>発色剤（亜硝酸Na）は33品</li><li>添加物の欄がないのは11品で、うちミールキット4品（かんたん炒めキット 牛肉ペッパー炒め・かんたん炒めキット 牛肉とごぼうのすき焼き風・かんたん炒めキット 玉ねぎと豚の甘旨生姜焼き・かんたん炒めキット 豚腕肉のシャキ旨彩椒肉絲）は肉と野菜のみの原材料でした</li></ul>
        <SectionHeading id="compare">食宅便との比較</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">冷凍弁当で同じように原材料を公開している食宅便の「塩分&カロリーケア」「たんぱくケア」（69品）を、同じ方法で数えました。</p>
        <ComparisonTable
          headers={["添加物（表示名）", "三ツ星ファーム（137品）", "食宅便（69品）"]}
          rows={[
            ["調味料（アミノ酸等）", "115品（84%）", "64品（93%）"],
            ["加工でん粉", "113品（82%）", "69品（100%）"],
            ["着色料", "86品（63%）", "50品（72%）"],
            ["香料", "63品（46%）", "43品（62%）"],
            ["発色剤（亜硝酸Na）", "33品（24%）", "5品（7%）"],
            ["甘味料", "8品（6%）", "18品（26%）"],
            ["保存料", "8品（6%）", "2品（3%）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="http://shokutakubin.com/shop/c/c30/" target="_blank" rel="noopener noreferrer" className="text-accent underline">食宅便 塩分&カロリーケア</a>・<a href="http://shokutakubin.com/shop/c/c31/" target="_blank" rel="noopener noreferrer" className="text-accent underline">たんぱくケア</a>のコースページに掲載の原材料（2026年11月25日取得）。集計は当サイト。</p>
        <p className="text-sm mb-6 leading-relaxed">調味料（アミノ酸等）・加工でん粉が大半のメニューに表示されている点は、2社で共通していました。保存料は両社とも少数です。添加物をできるだけ避けたい方は、不使用の範囲を公式に示しているサービスを<Link href="/articles/mutenka-takuhai-bento/" className="text-accent underline">無添加の宅配弁当・冷凍宅食5社</Link>で比べられます。</p>
        <SectionHeading id="list">保存料・甘味料が表示されているメニュー</SectionHeading>
        <SubHeading>保存料（8品）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>丹波の西京味噌の銀鮭焼き弁当（保存料（ポリリジン））</li><li>グラハムサンド とろけるチーズ（保存料(ソルビン酸)）</li><li>グラハムサンド タコミートチーズ（保存料(ソルビン酸)）</li><li>クリーミィディップで楽しむ 洋風おでん（保存料(ソルビン酸)）</li><li>水菜と豚肉のシャキシャキ鍋仕立て（保存料（ポリリジン））</li><li>黒酢と香酢 ごろごろ野菜の特製酢豚（保存料（ソルビン酸））</li><li>3種のだしと明太子のふわとろかき玉うどん（保存料（ポリリジン））</li><li>肉厚あふれる旨み 骨付きポークフランク（保存料（ソルビン酸K））</li></ul>
        <SubHeading>甘味料（8品）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>コク旨ペッパーチキン（甘味料（スクラロース））</li><li>タンドリー風スパイスチキン（甘味料（カンゾウ））</li><li>鈴なり 白身魚の和風梅ソースとお野菜のおばんざい（甘味料（ステビア））</li><li>3種のだしと明太子のふわとろかき玉うどん（甘味料（グリチルリチン酸Na、ステビア））</li><li>じゅわっと 豚肉の旨みが染みた肉うどん（甘味料（ステビア））</li><li>どこか懐かしい 染みうま味噌おでん（甘味料（カンゾウ））</li><li>【数量限定】お鍋で簡単 餅巾着ちゃんこ鍋キット（甘味料（ソルビット））</li><li>香ばし炭火焼き ジューシーチキンレッグ（甘味料（キシロース））</li></ul>
        <p className="text-xs text-warm-gray mb-6">※かっこ内は原材料表示の記載のまま。メニューの入れ替えや仕入れで変わることがあります。</p>
        <SectionHeading id="howto">原材料表示の読み方</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>食品表示基準では、原材料と添加物を「／」などで区切るか、別の欄に分けて、それぞれ重量の多い順に表示します</li><li>「調味料（アミノ酸等）」は、うま味調味料などの添加物を一括名で表示したものです</li><li>三ツ星ファームの各メニューには「原材料の仕入れ状況により栄養成分表示の数値は変動いたします。お手元に届いた商品に記載されている内容をご確認ください」との注記があります</li><li>「無添加」「不使用」の表示については、消費者庁が<a href="https://www.caa.go.jp/policies/policy/food_labeling/food_labeling_act/assets/food_labeling_cms201_220330_25.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline">食品添加物の不使用表示に関するガイドライン</a>を定めています</li></ul>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">三ツ星ファームは無添加をうたっておらず、原材料表示を集計すると、大半のメニューに調味料（アミノ酸等）・加工でん粉などが使われていました。保存料は137品中8品、甘味料は8品と少数です。同じ冷凍弁当の食宅便と比べても、添加物の使われ方は近い傾向でした。</p>
        <p className="text-sm mb-6 leading-relaxed">気になる添加物がある場合は、注文前に公式サイトの各メニューの原材料表示を確認し、届いた商品のパッケージの表示もご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームの口コミ・評判</Link></li>
            <li><Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのおすすめメニュー</Link></li>
            <li><Link href="/articles/mitsuboshi-coupon/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのクーポン</Link></li>
            <li><Link href="/articles/mutenka-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">無添加の宅配弁当・冷凍宅食5社</Link></li>
            <li><Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent hover:text-accent-dark transition-colors">冷凍弁当の栄養バランス・添加物の見方</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">nosh・三ツ星ファーム・ウェルネスダイニングを比較</Link></li>
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
