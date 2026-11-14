import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ANAの機内食は通販で買える？冷凍セットの価格・中身・送料と1食あたりを公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ANAの国際線エコノミークラスの機内食は、ANA Mall（ANA公式ギフトショップ）や楽天市場で冷凍のまま購入できます。現在販売中のセットの中身と価格、1食あたり（約874〜1,147円）、送料表記、賞味期限、マイルの貯まり方を2026年11月14日に公式で確認しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/ana-kinaishoku-tsuhan/";
const OFFICIAL_URL = "https://anamall.ana.co.jp/shop/c/c0016-00160004/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ANA 機内食 通販, ANA 機内食 購入, ANA 機内食 冷凍, ANA's Sky Kitchen, 機内食 通販, 機内食 お取り寄せ",
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
  { question: "ANAの機内食はどこで買えますか？", answer: "ANA Mall（ANA公式ギフトショップ ANA Mall店）の「ANA機内関連販売品」と、楽天市場の「ANA公式ギフトショップ 楽天市場店」で販売されています（2026年11月14日確認）。" },
  { question: "1食あたりいくらですか？", answer: "機内食だけのセットで、24個入り20,980円が約874円、12個入り10,980円が約915円、6個入りのお試し便6,880円が約1,147円です（価格÷個数で当サイトが計算）。" },
  { question: "送料はかかりますか？", answer: "各商品ページには「送料無料」と表示されています。一方、ショップガイドの料金表にはクール冷凍便 全国一律900円と書かれているため、注文画面で表示される金額をご確認ください。" },
  { question: "賞味期限はどのくらいですか？", answer: "冷凍（-18℃以下）で、出荷時に賞味期限が120日以上のものが届くと商品ページに書かれています。" },
  { question: "定期便はありますか？", answer: "2026年11月14日に確認したANA Mallの商品ページには、定期便の記載はありませんでした。セットを単発で購入する形です。" },
  { question: "マイルは貯まりますか？", answer: "ANA Mallでは通常100円（税込）につき1マイルが貯まり、ANAカードで支払うと100円につきさらに1マイルが加算されます。送料・手数料は対象外で、ゲスト購入ではマイルが貯まりません。" },
];

const sections = [
  { id: "answer", label: "ANAの機内食は通販で買える？" },
  { id: "lineup", label: "販売中のセットと1食あたり" },
  { id: "detail", label: "送料・賞味期限・温め方" },
  { id: "miles", label: "マイルの貯まり方・使い方" },
  { id: "history", label: "通販が始まった経緯" },
  { id: "compare", label: "冷凍の宅配弁当とのちがい" },
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
          <span className="text-foreground">ANAの機内食の通販</span>
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


export default function AnaKinaishokuTsuhanPage() {
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
      { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介" },
      { "@type": "ListItem", position: 3, name: "ANAの機内食の通販" },
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
            ANAの国際線エコノミークラスで出される機内食のメインディッシュは、<strong>冷凍のまま自宅に届く通販商品</strong>として販売されています。販売者は株式会社ANAケータリングサービスで、「ANA's Sky Kitchen」のシリーズ名で電子レンジで温めるだけのセットになっています。
          </p>
          <p className="mb-3">
            この記事では、2026年11月14日にANA Mall（ANA公式ギフトショップ ANA Mall店）で販売中だったセットの中身と価格、1食あたりの金額、送料・賞味期限の表記を整理しました。1食あたりは当サイトが価格÷個数で計算しています。
          </p>
          <p>本記事は公式情報と公開されている口コミ・データにもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ANAの機内食の通販（要点）</p>
          <p className="text-sm leading-relaxed mb-4">ANA Mall の「ANA機内関連販売品」カテゴリで、冷凍の機内食セットが販売されています（2026年11月14日時点で機内食を含む商品10件）。6個入りのお試し便が6,880円（1食約1,147円）、12個入りが10,980円（約915円）、24個入りが20,980円（約874円）で、各商品ページには「送料無料」と表示されています。定期便の記載はなく、セットを単発で買う形です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式で確認できた点</p>
              <ul className="space-y-1 list-disc list-inside"><li>国際線エコノミークラスで提供実績のあるメニュー</li><li>冷凍・電子レンジで温めるだけ・出荷時に賞味期限120日以上</li><li>ANA Mallならマイルが貯まる・使える</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1食あたり約874〜1,147円と冷凍宅食より高め</li><li>定期便の記載はなく、セット内容は固定</li><li>送料は商品ページ「送料無料」、ショップガイドはクール冷凍便900円と表記が分かれる</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ANA Mall の機内食の商品一覧を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">ANAの機内食は通販で買える？</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">買えます。2026年11月14日時点で、次の販路で冷凍の機内食セットが販売されていました。</p>
        <ComparisonTable
          headers={["販路", "内容"]}
          rows={[
            ["ANA Mall（ANA公式ギフトショップ ANA Mall店）", "「ANA機内関連販売品」カテゴリ11件のうち10件が冷凍の機内食・機内食を含むセット"],
            ["楽天市場（ANA公式ギフトショップ 楽天市場店）", "同じシリーズのセットを販売"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://anamall.ana.co.jp/shop/c/c0016-00160004/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ANA Mall「ANA機内関連販売品」</a>・<a href="https://www.rakuten.co.jp/ana-findelish/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ANA公式ギフトショップ 楽天市場店</a>（2026年11月14日確認）</p>
        <SectionHeading id="lineup">販売中のセットと1食あたり</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">機内食だけのセットを、1食あたりの安い順に並べました。商品名はANA Mallの表記を短くしています。</p>
        <ComparisonTable
          headers={["セット", "内容", "価格（税込）", "1食あたり（当サイト計算）"]}
          rows={[
            ["ブルーリストランテ 24個入り 第3弾", "8種×各3個", "20,980円", "約874円"],
            ["機内食和食セット 第2弾", "親子丼・天丼・鮭の彩りご飯・鶏てりやき丼 各3個", "10,980円", "約915円"],
            ["福袋2027 12個入り", "12種×各1個", "10,980円", "約915円"],
            ["お試し便 6個入り", "ハンバーグステーキ・天丼など6種×各1個", "6,880円", "約1,147円"],
            ["お試し便 第2弾 6個入り", "オムライス・パエリアなど6種×各1個", "6,880円", "約1,147円"],
            ["お試し便 第3弾 6個入り", "オムライス・鶏てりやき丼など6個", "6,880円", "約1,147円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: ANA Mall の各商品ページ（<a href="https://anamall.ana.co.jp/shop/g/g0016-801302/" target="_blank" rel="noopener noreferrer" className="text-accent underline">機内食和食セット 第2弾</a>・<a href="https://anamall.ana.co.jp/shop/g/g0016-801392/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ブルーリストランテ 24個入り 第3弾</a>・<a href="https://anamall.ana.co.jp/shop/g/g0016-801532/" target="_blank" rel="noopener noreferrer" className="text-accent underline">福袋2027 12個入り</a>・<a href="https://anamall.ana.co.jp/shop/g/g0016-800472/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お試し便 6個入り</a>・<a href="https://anamall.ana.co.jp/shop/g/g0016-800532/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お試し便 第2弾 6個入り</a>・<a href="https://anamall.ana.co.jp/shop/g/g0016-800842/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お試し便 第3弾 6個入り</a>）。2026年11月14日確認。価格はすべて税込で、各商品ページに「送料無料」と表示されています。</p>
        <SubHeading>機内食とほかの商品を組み合わせたセット</SubHeading>
        <ComparisonTable
          headers={["セット", "内容", "価格（税込）"]}
          rows={[
            ["ANA機内満喫シリーズ 機内食4個＋コンソメスープ", "機内食4種×1個＋ANAオリジナルビーフコンソメスープ（2.6g×20袋）", "5,380円"],
            ["ANA機内満喫シリーズ 機内食10個＋コンソメスープ", "5種×2個＋スープ1箱", "10,280円"],
            ["300万食突破記念 第3弾 おでかけテイクオフセット", "機内食8個（4種×2個）＋オリジナル保冷バッグ", "9,000円"],
            ["ANA FINDELISH 機内食から厳選された魚の切り身詰め合わせ", "5種×1個（おかずのみ・ご飯なし）", "5,400円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://anamall.ana.co.jp/shop/g/g0016-801002/" target="_blank" rel="noopener noreferrer" className="text-accent underline">機内食4個＋スープ</a>・<a href="https://anamall.ana.co.jp/shop/g/g0016-801012/" target="_blank" rel="noopener noreferrer" className="text-accent underline">機内食10個＋スープ</a>・<a href="https://anamall.ana.co.jp/shop/g/g0016-801192/" target="_blank" rel="noopener noreferrer" className="text-accent underline">おでかけテイクオフセット</a>・<a href="https://anamall.ana.co.jp/shop/g/g0016-300192/" target="_blank" rel="noopener noreferrer" className="text-accent underline">魚の切り身詰め合わせ</a>（2026年11月14日確認）。販売終了の商品（以前の第◯弾など）はページに「販売終了か、ただ今お取り扱いできない商品です」と表示されます。</p>
        <p className="text-sm mb-6 leading-relaxed">中身は丼もの・オムライス・ハンバーグ・パエリアなど、ごはんとおかずが一体になった1食完結のメニューが中心です。どの商品も「この機内食シリーズは機内でご提供実績がある商品です」と書かれています。</p>
        <SectionHeading id="detail">送料・賞味期限・温め方</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の表記"]}
          rows={[
            ["保存", "冷凍（-18℃以下）"],
            ["賞味期限", "出荷時に120日以上のものをお届け（機内食とスープのセットは「製造から1年」）"],
            ["温め方", "電子レンジで加熱。外装パッケージを外して温める"],
            ["発送", "商品ページ「在庫有、2営業日以降に発送」／ショップガイド「通常注文確定の2営業日から4営業日で発送」"],
            ["送料", "商品ページは「送料無料」／ショップガイドの料金表はクール冷凍便 全国一律900円（離島・一部地域は追加の場合あり）"],
            ["同梱", "冷凍品は単品配送（冷凍品同士・冷凍品と常温品の同梱は不可）"],
            ["配送業者", "ヤマト運輸（クール宅急便）"],
            ["定期便", "商品ページに定期便の記載なし"],
            ["販売者", "株式会社ANAケータリングサービス"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 各商品ページ・<a href="https://anamall.ana.co.jp/shop/shop/guide.aspx?shop=0016" target="_blank" rel="noopener noreferrer" className="text-accent underline">ANA公式ギフトショップ ショップガイド</a>（2026年11月14日確認）。送料は、注文画面で表示される金額をご確認ください。</p>
        <p className="text-sm mb-6 leading-relaxed">公式は「冷凍で保存可能ですので、一人暮らしの方や単身赴任の方、リモートワークの方などにもおすすめです」と、日常の食事としての使い方も案内しています。</p>
        <SectionHeading id="miles">マイルの貯まり方・使い方</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>貯まる: ANA Mallでは通常100円（税込）につき1マイル（送料・手数料などは対象外・ゲスト購入は対象外）</li><li>上乗せ: ANAカードで支払うとANAカードマイルプラスで100円につきさらに1マイル（Apple Payは対象外）</li><li>使う: マイル支払いで、送料・消費税を含む支払い総額に使える</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://anamall.ana.co.jp/shop/pages/miles.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">ANA Mall マイルについて</a>・各商品ページ・ショップガイド（2026年11月14日確認）。たとえば和食セット第2弾（10,980円）は、商品ページの表示で通常109マイルです。</p>
        <SectionHeading id="history">通販が始まった経緯</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ANAは2020年12月11日に、国際線エコノミークラスの機内食のメインディッシュを「ANA's Sky Kitchen」として販売すると発表しました。当時のリリースは、新型コロナウイルスの感染拡大で海外旅行を楽しめない状況が続くなか、「ANAの機内食が食べたい！」という声を受けたものと説明しています。当時は和食・洋食・お子様向けの各12食（3種×4食）で、税込・送料込み9,000円（年内の一部商品は7,200円）でした。</p>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.anahd.co.jp/group/pr/202012/20201211-2.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">ANAホールディングス プレスリリース（2020年12月11日）</a>（2026年11月14日確認）。ANA Mallの商品ページには「300万食を突破いたしました」との記載があります。</p>
        <SectionHeading id="compare">冷凍の宅配弁当とのちがい</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ANAの機内食も「冷凍の調理済みの食事が自宅に届く」点は冷凍の宅配弁当と同じですが、使い方は次のように異なります。</p>
        <ComparisonTable
          headers={["項目", "ANAの機内食（ANA Mall）", "冷凍の宅配弁当（一般的な定期便）"]}
          rows={[
            ["買い方", "セットを単発で購入（定期便の記載なし）", "定期便が中心（都度購入できる社もある）"],
            ["メニュー", "セットごとに固定", "選べる社・おまかせの社がある"],
            ["1食あたり", "約874〜1,147円（送料無料表示）", "送料込みで400円台〜1,000円台（社・食数による）"],
            ["栄養の基準", "公式に記載なし", "糖質・塩分などの基準を掲げる社が多い"],
            ["向いている使い方", "旅行気分を楽しむ・贈り物・ストック", "毎日の食事を置き換える"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※冷凍の宅配弁当の1食あたりは、当サイトの<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>と<Link href="/articles/souryou-yasui-ranking/" className="text-accent underline">送料込みの安さランキング</Link>の確認値にもとづく目安です。</p>
        <p className="text-sm mb-6 leading-relaxed">毎日の食事として続けるなら、定期便で1食あたりが下がる冷凍宅食のほうが費用を抑えやすい計算です。一人暮らしで冷凍の食事をストックしたい場合は<Link href="/articles/hitorigurashi-osusume/" className="text-accent underline">一人暮らし向けの宅食の比較</Link>もご覧ください。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ANAの国際線エコノミークラスの機内食は、ANA Mallや楽天市場で冷凍のセットとして購入できます。1食あたりは約874〜1,147円で、毎日の食事として続ける冷凍宅食より高めですが、機内で提供実績のあるメニューを自宅で楽しめる点が特徴です。まず試すなら6個入りのお試し便、ストックするなら24個入りが1食あたりを抑えられます。</p>
        <p className="text-sm mb-6 leading-relaxed">価格・送料・商品は変わることがあります。ご購入前に、ANA Mallで最新の情報をご確認ください。</p>

        <OfficialButton>ANA Mall の機内食の商品一覧を見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">一人暮らしにおすすめの宅食・宅配弁当</Link></li>
            <li><Link href="/articles/super-vs-takuhai-reitou-bento/" className="text-accent hover:text-accent-dark transition-colors">スーパーの冷凍弁当と宅配の冷凍弁当の比較</Link></li>
            <li><Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark transition-colors">送料込みで安い宅配弁当ランキング</Link></li>
            <li><Link href="/articles/fitdish-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">FitDish（フィットディッシュ）の口コミ・評判</Link></li>
            <li><Link href="/articles/delipicks-menu/" className="text-accent hover:text-accent-dark transition-colors">デリピックス（DELIPICKS）のメニュー一覧</Link></li>
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
