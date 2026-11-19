import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "おいしいプラスの口コミ・評判は？公式掲載の利用者の声6件と、2026年4月再開後の全10品の価格・栄養を公式で確認";
const ARTICLE_DESCRIPTION =
  "ミシュラン三つ星の江﨑新太郎シェフが手がける冷凍弁当「おいしいプラス」の口コミを、公式サイト掲載の利用者の声6件で整理しました。2025年の一時停止から2026年4月の再開までの経緯、全10品の価格（1品1,450〜3,500円）と栄養成分、送料を公式で確認しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/oishiiplus-kuchikomi/";
const OFFICIAL_URL = "https://shop.oishiiplus.com/shop/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "おいしいプラス 口コミ, おいしいプラス 評判, おいしいプラス 冷凍弁当, おいしいプラス 江﨑, OISHII PLUS 口コミ, おいしいプラス 料金, おいしいプラス 送料",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-19T00:00:00+09:00",
    modifiedTime: "2026-11-19T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "おいしいプラスの口コミはどこで見られますか？", answer: "2026年11月19日時点で確認できたのは、公式サイトの「お客様の声」に掲載されている6件です。口コミサイトや第三者の実食レビューは、当サイトが検索した範囲では見つかりませんでした。" },
  { question: "おいしいプラスはまずいですか？", answer: "公式掲載の6件は、いずれも味や満足感を評価する内容でした。「まずい」とする声は確認できませんでしたが、第三者の評価が確認できないため、味の評判を判断する材料は限られています。" },
  { question: "おいしいプラスの値段はいくらですか？", answer: "2026年11月19日時点の公式の商品は10品で、1品1,450〜3,500円（税込）です。送料は1〜5個で1,300円、6個以上で900円（沖縄は別料金）です。" },
  { question: "おいしいプラスは終了したのですか？", answer: "2025年9月に新規受付、11月30日に定期のお届けを一時停止しましたが、2026年4月1日にECサイトを再オープンし、4月15日から一般販売しています。" },
  { question: "定期便はありますか？", answer: "公式トップに「定期購入を基本としております」との記載が残っていますが、11月19日時点の全商品一覧は1品ずつ数量を選んで購入する形式で、定期の申込画面は確認できませんでした。" },
  { question: "賞味期限はどれくらいですか？", answer: "製造日から12か月で、賞味期限の残りが1か月以上ある状態で届きます。冷凍庫（-18℃以下）で保存します。" },
];

const sections = [
  { id: "voices", label: "公式サイトに掲載されている利用者の声（6件）" },
  { id: "history", label: "2025年の一時停止と2026年4月の再開" },
  { id: "menu", label: "いま注文できる10品の価格・栄養成分（当サイト集計）" },
  { id: "price", label: "送料と、送料込みの1食あたり（当サイト計算）" },
  { id: "check", label: "公式ページ内で記載が食い違っている点" },
  { id: "rules", label: "キャンセル・支払い・保存のルール" },
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
          <span className="text-foreground">おいしいプラスの口コミ・評判</span>
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


export default function OishiiplusKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-19T00:00:00+09:00",
    dateModified: "2026-11-19T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "おいしいプラスの口コミ・評判" },
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
            <time dateTime="2026-11-19">公開: 2026年11月19日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクは公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            おいしいプラスは、「ミシュランガイド東京」で7年連続三つ星の江﨑新太郎シェフが手がける冷凍弁当の通販です（運営は株式会社おいしいプラス、2014年創業）。ご飯にこんにゃく米をブレンドし、保存料・着色料・香料を使わないことを特長にしています。
          </p>
          <p className="mb-3">
            口コミを調べたところ、<strong>2026年11月19日時点で確認できた利用者の声は、公式サイトの「お客様の声」に掲載されている6件だけ</strong>でした。口コミサイトや第三者の実食レビューは、検索した範囲では見つかりませんでした。この記事では、その6件を原文で紹介したうえで、2026年4月の再開後に注文できる全10品の価格・栄養成分、送料を公式ページで確認し、当サイトで集計しています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">おいしいプラスの口コミの要点</p>
          <p className="text-sm leading-relaxed mb-4">公式サイト掲載の利用者の声は6件で、味付け・低糖質でも物足りなさがないこと・ボリュームを評価する内容です（運営会社が選んで掲載したもので、掲載時期は記載がありません）。第三者の口コミは確認できませんでした。サービスは2025年9月に新規受付、11月30日に定期のお届けを一時停止し、2026年4月1日に再開しています。2026年11月19日時点の商品は10品で、1品1,450〜3,500円（税込）、送料は1〜5個で1,300円です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式掲載の声・公式情報で確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>公式掲載の声は味・満足感の評価が中心</li><li>全品に発色剤・保存料・着色料・香料を使っていない（公式）</li><li>賞味期限は製造日から12か月で、ストックしやすい</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1品1,450円からと、一般的な冷凍弁当より高い</li><li>第三者の口コミ・レビューは確認できなかった</li><li>公式ページ内で栄養成分やこんにゃく米の割合の記載が食い違う</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">おいしいプラス 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="voices">公式サイトに掲載されている利用者の声（6件）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式サイトのトップには「おいしいプラスを実際にご利用された方にお話を伺いました」として、6件の声が掲載されています。原文のまま紹介します（投稿者名は省略しています）。</p>
        <ComparisonTable
          headers={["公式サイト掲載の声（原文）", "内容"]}
          rows={[
            ["味付けが１つ１つしっかりしていて大満足なお弁当！", "味の満足感"],
            ["低糖質や低カロリーの食事って ちょっと物足りなさがあるけど... 全く物足りなさを感じないお弁当でした どれを食べても美味しくて満足", "低糖質でも物足りなさがない"],
            ["主食、主菜、副菜のバランスが良くてすごいなー！ 味は勿論美味しいです。 鮭が柔らかく、骨が取り除いてあるので食べやすい。 ４割程のこんにゃくが入ったご飯はそんなことは気にならないご飯でした。", "こんにゃく米が気にならない"],
            ["ダイエットや健康をサポートするお弁当、色々食べてきたけど、味はここが一番美味しいと思う。", "他の健康弁当との比較"],
            ["作るのが面倒なとき本当助かります", "手軽さ"],
            ["味もしっかりして、お肉も柔らかくとても冷凍弁当とは思えないクオリティでした❗️ （中略）他社のロカボ弁当と比べてボリュームがあり、セットで届きます。 冷凍庫に十分余裕を持たせてから注文してくださいね。", "ボリューム・冷凍庫の空き"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shop.oishiiplus.com/shop/" target="_blank" rel="noopener noreferrer" className="text-accent underline">おいしいプラス 公式サイト「CUSTOMER VOICE お客様の声」</a>（2026年11月19日確認）。運営会社が選んで掲載したもので、投稿の時期や、どのメニューを食べた感想かは記載されていません。2026年4月のリニューアル前の商品についての声である可能性があります。</p>
        <p className="text-sm mb-6 leading-relaxed">6件はいずれも味や満足感を評価する内容で、「低糖質なのに物足りなさがない」「こんにゃく入りのご飯が気にならない」という声が目立ちます。一方、価格や送料、冷凍庫の容量について触れた声は「冷凍庫に十分余裕を持たせてから注文してくださいね」の1件だけでした。</p>
        <p className="text-sm mb-6 leading-relaxed">当サイトでは、口コミサイト（みん評など）や個人ブログ・メディアの実食レビューも検索しましたが、おいしいプラスを取り上げたものは見つかりませんでした。悪い口コミが無いのではなく、<strong>第三者の評価そのものが確認できない</strong>状態です。</p>
        <SectionHeading id="history">2025年の一時停止と2026年4月の再開</SectionHeading>
        <ComparisonTable
          headers={["日付", "公式のお知らせ"]}
          rows={[
            ["2025年8月29日", "冷凍弁当の全面リニューアルのため、2025年9月1日から新規のお申し込みを一時停止すると告知"],
            ["2025年9月25日", "定期で購入しているお客様のご利用も停止。11月30日以降は発送できないと告知"],
            ["2026年4月1日", "ECサイトを再オープン。4月1日〜14日は既存会員の先行予約、一般販売は4月15日から"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shop.oishiiplus.com/shop/information/20250829" target="_blank" rel="noopener noreferrer" className="text-accent underline">新規申し込み停止のお知らせ（2025.08.29）</a>・<a href="https://shop.oishiiplus.com/shop/information/20250925" target="_blank" rel="noopener noreferrer" className="text-accent underline">リニューアルに伴う定期申し込み停止のお知らせ（2025.09.25）</a>・<a href="https://shop.oishiiplus.com/shop/information/20260401" target="_blank" rel="noopener noreferrer" className="text-accent underline">ECサイト再オープン（4月1日）のお知らせ（2026.04.01）</a>（2026年11月19日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">再開のお知らせでは「素材選びから味わい、仕立てに至るまで丁寧に見直し」たとしています。2025年以前の口コミやレビューを読む場合は、リニューアル前の商品についての評価である点に注意が必要です。</p>
        <SectionHeading id="menu">いま注文できる10品の価格・栄養成分（当サイト集計）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">2026年11月19日時点で、公式の全商品一覧に並んでいた10品を、各商品ページの表示で集計しました。価格は1品1,450〜3,500円（税込）、中央値は1,830円です。調理は全品「600W 約5分」です。</p>
        <ComparisonTable
          headers={["商品名", "価格（税込）", "内容量", "エネルギー", "糖質", "たんぱく質", "食塩相当量"]}
          rows={[
            ["三元豚とキャベツの香ばし味噌炒め弁当", "1,450円", "360g", "551kcal", "32.3g", "21.4g", "0.8g"],
            ["大山鶏の甘酢香味たれ焼き弁当", "1,450円", "345g", "495kcal", "32.8g", "30.1g", "3.5g"],
            ["大山鶏ノンフライ唐揚げ 完熟トマトソース弁当", "1,450円", "350g", "465kcal", "43.6g", "24.2g", "2.5g"],
            ["銀だらの旨み煮付け弁当", "1,780円", "383g", "378kcal", "44.2g", "26.9g", "3.5g"],
            ["ふっくら鰆(サワラ）の甘酢あんかけ弁当", "1,780円", "380g", "369kcal", "34.8g", "24.0g", "2.4g"],
            ["三元豚と白いんげん豆のほっこり煮込み弁当", "1,880円", "395g", "507kcal", "46.4g", "16.0g", "2.5g"],
            ["気仙沼贅沢フカヒレとじ卵弁当", "2,300円", "466g", "362kcal", "32.9g", "15.8g", "2.9g"],
            ["厳選国産銀鮭の西京味噌焼き弁当", "2,300円", "356g", "379kcal", "31.5g", "26.9g", "2.1g"],
            ["国産黒毛和牛特製たれ すき焼き重", "2,500円", "356g", "542kcal", "64.2g", "19.1g", "1.4g"],
            ["浜名湖産炭火焼き鰻重 特製たれご飯", "3,500円", "290.2g", "553kcal", "55g", "21.4g", "3.5g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shop.oishiiplus.com/shop/products/" target="_blank" rel="noopener noreferrer" className="text-accent underline">おいしいプラス 全商品一覧</a>と各商品ページ（2026年11月19日確認）。栄養成分は各商品ページ上部の表示（内容量の横の値）です。同じページ内の「栄養素」欄と値が異なる品があります（下の「食い違っている点」を参照）。</p>
        <p className="text-sm mb-6 leading-relaxed">公式トップには「糖質40g以下でも、しっかり食べごたえのある一食」とありますが、上部の表示で糖質が40gを超える品が5品ありました（浜名湖産炭火焼き鰻重 特製たれご飯・大山鶏ノンフライ唐揚げ 完熟トマトソース弁当・三元豚と白いんげん豆のほっこり煮込み弁当・銀だらの旨み煮付け弁当・国産黒毛和牛特製たれ すき焼き重）。糖質を重視して選ぶ場合は、商品ごとの値を確認してください。</p>
        <SectionHeading id="price">送料と、送料込みの1食あたり（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">送料は個数で2段階に分かれ、6個以上のほうが安くなります。1,450円の品を組み合わせた場合の、送料込みの1食あたりは次のとおりです。</p>
        <ComparisonTable
          headers={["個数", "商品代金（1,450円×個数）", "送料（沖縄以外）", "合計", "送料込みの1食あたり"]}
          rows={[
            ["1個", "1,450円", "1,300円", "2,750円", "2,750円"],
            ["3個", "4,350円", "1,300円", "5,650円", "1,883円"],
            ["5個", "7,250円", "1,300円", "8,550円", "1,710円"],
            ["6個", "8,700円", "900円", "9,600円", "1,600円"],
            ["10個", "14,500円", "900円", "15,400円", "1,540円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※送料は<a href="https://shop.oishiiplus.com/shop/law_info" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記「送料・配送について」</a>の「1個～5個：沖縄以外全ての地域 1300円（沖縄 2300円）、6個以上：900円（沖縄 1900円）」（2026年11月19日確認）。合計・1食あたりは当サイトの計算です。箱は5食まで80サイズ、6〜10食は100サイズ、10食を超えると2箱です（よくある質問）。</p>
        <p className="text-sm mb-6 leading-relaxed">5個と6個では、6個のほうが合計の差は1,050円にとどまり、1食あたりは約110円安くなります。まとめて注文するなら6個以上が送料の面で有利です。冷凍庫に入る量は、弁当1つの大きさ（20.5cm×20.5cm×4.7cm）から確認できます。</p>
        <p className="text-sm mb-6 leading-relaxed">会員ランクに応じたポイント還元（最大10%）もありますが、ランクごとの条件は公式ページの文字情報では確認できませんでした。ほかの宅食との料金の比較は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>で整理しています。</p>
        <SectionHeading id="check">公式ページ内で記載が食い違っている点</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式サイトを確認したところ、次の点で同じサイト内の記載が一致していませんでした。注文の前に、届いた商品の帯（ラベル）の表示も確認すると確実です。</p>
        <ComparisonTable
          headers={["商品名", "商品ページ上部の表示／「栄養素」欄の表示"]}
          rows={[
            ["三元豚とキャベツの香ばし味噌炒め弁当", "エネルギー 551kcal／542kcal・たんぱく質 21.4g／19.1g・食塩相当量 0.8g／1.4g"],
            ["浜名湖産炭火焼き鰻重 特製たれご飯", "たんぱく質 21.4g／25.5g"],
            ["大山鶏の甘酢香味たれ焼き弁当", "食塩相当量 3.5g／2.2g"],
            ["気仙沼贅沢フカヒレとじ卵弁当", "エネルギー 362kcal／553kcal・たんぱく質 15.8g／25.5g・食塩相当量 2.9g／3.5g"],
            ["銀だらの旨み煮付け弁当", "たんぱく質 26.9g／10.8g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※各商品ページ（2026年11月19日確認）を当サイトが照合。「栄養素」欄には「1食当たりの栄養成分（推定値）」と注記されています。三元豚とキャベツの香ばし味噌炒め弁当の「栄養素」欄の値は、国産黒毛和牛特製たれ すき焼き重と同じでした。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>こんにゃく米の割合：トップの「素材へのこだわり」は「ご飯の30％をこんにゃく米にすることで、糖質30％オフ」、同じページの別の欄は「オンラインのお弁当は40％」「糖質40％カット」としています（店舗のチルド弁当は30％）</li><li>プランの欄：トップには「5食セット・10食セット 1食あたり1,296円（税込）」「本サービスは定期購入を基本としております」と旧メニューのプランが残っていますが、プランの商品ページは404で、全商品一覧は1品ずつ数量を選んで買う形式でした</li><li>支払い方法：よくある質問はクレジットカードのみ、特定商取引法に基づく表記はNP後払い（手数料200円）・atone 翌月払いも記載</li><li>キャンセル：よくある質問は「お客様のご都合によるキャンセル返品・交換はお受けできません」、特定商取引法に基づく表記は「配送日の3日前までキャンセルをお受けいたします」</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shop.oishiiplus.com/shop/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式トップ</a>・<a href="https://shop.oishiiplus.com/shop/pages/faqs" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>・<a href="https://shop.oishiiplus.com/shop/law_info" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月19日確認）</p>
        <SectionHeading id="rules">キャンセル・支払い・保存のルール</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["配送", "ヤマト運輸の冷凍便。日本全国（一部離島を除く）。宅配ボックスでの受け取り不可"],
            ["お届け日", "代金決済日の翌々日を起算点に、最短5日後以降で受取日時を指定"],
            ["保存・賞味期限", "冷凍庫（-18℃以下）。製造日から12か月（賞味期限の残り1か月以上でお届け）"],
            ["アレルギー", "個別対応なし。原材料・アレルギー表記は商品ページと弁当の帯で確認"],
            ["返品", "食品のためお客様都合の返品・交換不可。破損は写真を添えて問い合わせ"],
            ["問い合わせ", "support@oishiiplus.jp・お問い合わせフォーム（平日10:00〜17:00）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shop.oishiiplus.com/shop/pages/faqs" target="_blank" rel="noopener noreferrer" className="text-accent underline">おいしいプラス よくある質問</a>・<a href="https://shop.oishiiplus.com/shop/law_info" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月19日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">こんにゃく米を使った低糖質の冷凍弁当をほかと比べる場合は、<Link href="/articles/toushitsu-seigen-osusume/" className="text-accent underline">糖質制限向けの宅配弁当</Link>や<Link href="/articles/mutenka-takuhai-bento/" className="text-accent underline">無添加の宅配弁当の比較</Link>も参考になります。</p>
        <OfficialButton>おいしいプラス 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">おいしいプラスの口コミは、公式サイト掲載の6件が確認できるだけで、いずれも味や満足感を評価する内容でした。第三者の評価は見つからず、2026年4月のリニューアル後の商品についての声かどうかも分かりません。2026年11月19日時点の商品は10品・1品1,450〜3,500円で、6個以上で送料が下がります。公式ページ内で栄養成分の記載が食い違う品があるため、糖質や塩分を重視する場合は届いた商品の帯の表示もあわせて確認してください。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・商品は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>おいしいプラス 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">糖質制限におすすめの宅配弁当</Link></li>
            <li><Link href="/articles/mutenka-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">無添加の宅配弁当・冷凍宅食を公式の表記で比較</Link></li>
            <li><Link href="/articles/vividtable-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ビビッドテーブルの口コミ・評判</Link></li>
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
