import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "健康直球便の口コミ・評判は？販売ページのレビュー18,454件と全35セットの料金・栄養設計を確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "宅配クック123の本部が販売する冷凍弁当「健康直球便」の口コミ・評判。楽天市場の公式店に掲載の購入者レビューを原文で紹介し、6種類の調整食・全35セットの料金と1食あたり、栄養の設計値、送料・キャンセル条件をまとめました（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/kenko-chokkyubin-kuchikomi/";
const OFFICIAL_URL = "https://www.rakuten.co.jp/slc-123/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "健康直球便 口コミ, 健康直球便 評判, 健康直球便 楽天, 健康直球便 カロリー塩分調整食, 健康直球便 たんぱく塩分調整食, シニアライフクリエイト 冷凍弁当",
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
  { question: "健康直球便はどこで買えますか？", answer: "2026年11月25日時点では、楽天市場の「健康直球便」店で販売しています。販売者は宅配クック123の本部である株式会社シニアライフクリエイトです。" },
  { question: "送料はかかりますか？", answer: "沖縄県のみ1,000円で、ほかの地域は無料です。離島・一部地域でも追加送料はかからないと記載されています。" },
  { question: "1食あたりはいくらですか？", answer: "10食セットはカロリー・塩分調整食が5,980円（1食598円）、ほかの調整食が6,980円（1食698円）です。20食セットでは1食550〜673円になります（税込・送料無料）。" },
  { question: "定期購入ですか？", answer: "2026年11月25日時点の商品ページに定期購入の設定はなく、必要なときに1回ずつ注文する形です。注文から30分を過ぎると、客都合のキャンセルはできません。" },
  { question: "腎臓病の食事に使えますか？", answer: "たんぱく・塩分調整食は、たんぱく質10.0g以下・カリウム500mg以下・リン170mg以下・塩分2.0g未満に調整されています。ただし特別用途食品ではなく、販売ページでも医師または管理栄養士の指導のもとで利用するよう案内されています。" },
];

const sections = [
  { id: "about", label: "健康直球便とは" },
  { id: "voices", label: "口コミの掲載状況（販売ページの購入者レビュー）" },
  { id: "price", label: "6種類の調整食と料金・1食あたり" },
  { id: "spec", label: "調整食ごとの栄養の設計" },
  { id: "order", label: "送料・支払い・キャンセル" },
  { id: "fit", label: "向いている人・向いていない人" },
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
          <span className="text-foreground">健康直球便の口コミ・評判</span>
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


export default function KenkoChokkyubinKuchikomiPage() {
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
      { "@type": "ListItem", position: 3, name: "健康直球便の口コミ・評判" },
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
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            <strong>健康直球便</strong>は、高齢者向け宅配弁当「宅配クック123」のフランチャイズ本部である株式会社シニアライフクリエイトが販売する冷凍弁当です。2026年11月25日時点で、楽天市場の「健康直球便」店で、カロリー・塩分調整食やたんぱく・塩分調整食など6種類・35セットを販売しています。
          </p>
          <p>
            口コミを調べたところ、販売ページには商品ごとの購入者レビューが掲載されており、35セットの件数を合計すると18,454件でした。この記事では、その一部を原文で紹介し、料金・栄養の設計・注文条件を公式の販売ページで確認した内容とあわせて整理しています。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">健康直球便の口コミの要点</p>
          <p className="text-sm leading-relaxed mb-4">販売ページの購入者レビューは、味や薄味への満足、通院中の家族の食事づくりが楽になったという内容が中心で、量が少ない・カロリーが足りないという声もあります。料金は送料込みで10食5,980〜6,980円（1食598〜698円）、20食では1食550〜673円です。カロリー・塩分調整食は1食240kcal前後・塩分2.0g未満、たんぱく・塩分調整食はたんぱく質10.0g以下に設計されています。注文から30分を過ぎると、客都合のキャンセルはできません。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式情報から分かる良い点</p>
              <ul className="space-y-1 list-disc list-inside"><li>送料無料（沖縄県のみ1,000円）</li><li>治療食に近い6種類を1店で選べる</li><li>商品ページに定期購入の設定はなく、1回ずつ注文</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>カロリー・塩分調整食は240kcal前後で量は控えめ</li><li>注文から30分を過ぎるとキャンセル不可</li><li>特別用途食品ではない（食事療法は医師等の指導のもと）</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">健康直球便（楽天市場の公式店）を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">健康直球便とは</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容（2026年11月25日確認）"]}
          rows={[
            ["販売者", "株式会社シニアライフクリエイト（東京都品川区）"],
            ["事業", "高齢者専門宅配弁当「宅配クック123」のフランチャイズ本部、高齢者施設向け食材供給「特助くん」"],
            ["販売場所", "楽天市場「健康直球便」店"],
            ["商品", "冷凍弁当（おかずのみ）6種類・35セット（5食・10食・20食）"],
            ["保存", "-18℃以下（原材料・内容量・賞味期限は弁当ラベルに記載）"],
            ["配送", "ヤマト運輸のクール宅急便。注文確認後2〜3営業日に発送"],
            ["ショップの評価", "楽天市場の表示で4.79（7,743件）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.rakuten.co.jp/slc-123/" target="_blank" rel="noopener noreferrer" className="text-accent underline">楽天市場 健康直球便</a>のトップ・<a href="https://www.rakuten.co.jp/slc-123/info.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">会社概要</a>・各商品ページ（2026年11月25日確認）。ショップの評価は楽天市場が表示する値です。</p>
        <p className="text-sm mb-6 leading-relaxed">同じ会社の店舗型の宅配弁当は<Link href="/articles/takuhai-cook123-kuchikomi/" className="text-accent underline">宅配クック123の口コミ・評判</Link>で扱っています。健康直球便は店舗からの手渡しではなく、冷凍弁当を宅配便で届ける通販です。</p>
        <SectionHeading id="voices">口コミの掲載状況（販売ページの購入者レビュー）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">2026年11月25日時点で、各セットの販売ページには購入者レビューが掲載されています。件数がもっとも多いのはカロリー・塩分調整食の選べる10食セット（4,951件）でした。以下は、各ページの上部に表示されていたレビューの一部です。</p>
        <ComparisonTable
          headers={["商品", "評価", "投稿日", "年代・性別", "本文（原文）"]}
          rows={[
            ["カロリー・塩分調整食 選べる10食", "★5", "2026年11月25日", "60代・男性", "「薄味で美味です。高齢者にも向いています。」"],
            ["糖質・カロリー調整食 選べる10食", "★5", "2026年11月25日", "60代・女性", "「以前、塩分カロリー控えめのを購入しましたが、少しボリューム感に欠けていたのでこちらを試してみました。医師から指導を受けていた塩分も、自分の目標とする2g前後でしたので満足しています。野菜類がたくさん入っているのも嬉しいです。」"],
            ["カロリー・塩分調整食 選べる10食", "★4", "2026年11月25日", "60代・女性", "「１日の塩分摂取量を控えめにするように医師から指導されたのでこちらの商品を購入してみました。お味はとても美味しかったです。ただやはり全体としてはボリューム感に欠ける気がしたので、他の商品も試してみようと思います。」"],
            ["たんぱく・塩分調整食 選べる10食", "★5", "2026年11月21日", "40代・女性", "「腎臓病の父に少しでも美味しいものを食べてもらいたくて、色々と調べて口コミの良かったこちらの商品を注文しました。父が嬉しそうに選んで食べては、細かな感想を言って美味しかったと完食してました。いつも、低蛋白の食事作りをしている母の負担も少しは減りそうで良かったです。」"],
            ["消化にやさしい食 Aセット", "★5", "2026年11月24日", "記載なし", "「大腸ポリープ切除のあとに食べました。味もしっかりしていて美味しかったです！入院後食事を作るのはしんどいので助かりました。」"],
            ["ムース食 選べる10食", "★4", "2026年10月12日", "50代・女性", "「むせることなく毎食美味しくいただいています。利用者は高齢者ではないので、カロリーがもう少し欲しいところです。」"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.rakuten.co.jp/slc-123/" target="_blank" rel="noopener noreferrer" className="text-accent underline">健康直球便 トップ</a>・<a href="https://item.rakuten.co.jp/slc-123/2330025/" target="_blank" rel="noopener noreferrer" className="text-accent underline">カロリー・塩分調整食</a>・<a href="https://item.rakuten.co.jp/slc-123/2332045/" target="_blank" rel="noopener noreferrer" className="text-accent underline">たんぱく・塩分調整食</a>・<a href="https://item.rakuten.co.jp/slc-123/2720001/" target="_blank" rel="noopener noreferrer" className="text-accent underline">消化にやさしい食</a>・<a href="https://item.rakuten.co.jp/slc-123/2730001/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ムース食</a>の各ページに表示された購入者レビュー（2026年11月25日確認）。投稿者名は省略し、本文は原文のままです。</p>
        <p className="text-sm mb-6 leading-relaxed">味や薄味への満足と、通院中・術後の家族の食事づくりの負担が減ったという内容が目立ちます。一方で、量やカロリーが足りないという声もあり、カロリー・塩分調整食が1食240kcal前後に設計されていることと合っています。当サイトはレビューの一部を抜き出しており、評価の分布を集計したものではありません。</p>
        <SectionHeading id="price">6種類の調整食と料金・1食あたり</SectionHeading>
        <ComparisonTable
          headers={["調整食", "5食", "10食", "20食", "セット数・レビュー件数"]}
          rows={[
            ["カロリー・塩分調整食", "3,630円（1食726円）", "5,980円（1食598円）", "11,000円（1食550円）", "12種・10,781件"],
            ["糖質・カロリー調整食", "—", "6,980円（1食698円）", "13,460円（1食673円）", "4種・1,212件"],
            ["たんぱく・塩分調整食", "4,130円（1食826円）", "6,980円（1食698円）", "12,900円（1食645円）", "6種・2,300件"],
            ["消化にやさしい食", "—", "6,980円（1食698円）", "—", "1種・1,126件"],
            ["やわらか食", "4,130円（1食826円）", "6,980円（1食698円）", "12,900円（1食645円）", "7種・2,479件"],
            ["ムース食", "4,130円（1食826円）", "6,980円（1食698円）", "12,900円（1食645円）", "5種・556件"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.rakuten.co.jp/slc-123/" target="_blank" rel="noopener noreferrer" className="text-accent underline">健康直球便</a>の各カテゴリページの価格（税込・送料無料、2026年11月25日確認）。1食あたりとレビュー件数の合計は当サイト計算。カテゴリページには「検索結果が実際の商品ページの内容と異なる場合がある」との注記があります。</p>
        <p className="text-sm mb-6 leading-relaxed">カロリー・塩分調整食はほかの調整食より安く、10食セットで1,000円、20食セットで1,900〜2,460円の差があります。どの調整食も20食セットにすると1食あたりが下がります。5食の「お手軽」セットはお試し向けですが、1食あたりは10食セットより高くなります。ほかの宅配弁当との料金比較は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>で扱っています。</p>
        <SectionHeading id="spec">調整食ごとの栄養の設計</SectionHeading>
        <ComparisonTable
          headers={["調整食", "販売ページの説明", "確認した商品番号"]}
          rows={[
            ["カロリー・塩分調整食", "エネルギー240kcal前後・塩分2.0g未満（ご飯の量でエネルギーを調整）", "2330025・2330026"],
            ["糖質・カロリー調整食", "糖質10g以下（商品名・見出しの表記。詳しい栄養成分はセット別の画像）", "2330031"],
            ["たんぱく・塩分調整食", "エネルギー310kcal前後・たんぱく質10.0g以下・カリウム500mg以下・リン170mg以下・塩分2.0g未満", "2332045"],
            ["消化にやさしい食", "食物繊維の多い食材（ごぼう・れんこん・きのこ類等）を避け、豚肉はもも・鶏肉は皮なし・白身魚を使用。揚げ物・刺激物を避けた味付け", "2720001"],
            ["やわらか食", "凍結含浸法で、歯茎や舌でつぶせるやわらかさ。形が残る", "2740001"],
            ["ムース食", "噛む力・飲み込む力が弱い方向け。主菜・副菜のセット", "2730001"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 各商品ページの説明文（2026年11月25日確認）。各ページに「特別用途食品ではございません」「治療を目的とした商品ではございません」「食事療法にご利用の際は、医師または管理栄養士の指導のもと、ご利用下さい」と記載されています。メニューはお客様の意見により変更される場合があります。</p>
        <p className="text-sm mb-6 leading-relaxed">減塩やたんぱく質の調整が必要な方向けの宅配弁当は、<Link href="/articles/genenshoku-takuhai/" className="text-accent underline">減塩食の宅配</Link>・<Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent underline">腎臓病の宅配弁当</Link>・<Link href="/articles/kaigoshoku-takuhai/" className="text-accent underline">介護食の宅配</Link>でも比べています。</p>
        <SectionHeading id="order">送料・支払い・キャンセル</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>送料は沖縄県のみ1,000円、ほかの地域は0円。離島・一部地域でも追加送料はかからない</li><li>発送は注文確認後2〜3営業日（前払いは入金確認後）</li><li>支払いはクレジットカード・銀行振込・後払い（手数料250円）・Apple Pay・コンビニ前払いなど</li><li>注文から30分以内は購入履歴からキャンセルできる。30分を過ぎると客都合のキャンセル・返金・交換は不可</li><li>商品の不具合は到着後7日以内に電話かメールで連絡すると、全額返金または交換（送料は店舗負担）</li><li>問い合わせ: 0120-49-0810（平日9:00〜17:00）</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.rakuten.co.jp/slc-123/info.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">健康直球便 会社概要・決済方法・配送方法</a>（2026年11月25日確認）。</p>
        <SectionHeading id="fit">向いている人・向いていない人</SectionHeading>
        <SubHeading>向いている人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>医師から塩分やたんぱく質の調整を指導されている家族の食事を用意したい人</li><li>術後や胃腸の不調で、消化にやさしいおかずを用意したい人</li><li>定期購入ではなく、必要なときに1回ずつ注文したい人</li></ul>
        <SubHeading>向いていない人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>1食でしっかりした量を食べたい人（カロリー・塩分調整食は240kcal前後）</li><li>ご飯付きの弁当を探している人（おかずのみ）</li><li>注文後に内容を変えることが多い人（30分を過ぎるとキャンセル不可）</li></ul>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">健康直球便は、宅配クック123の本部が楽天市場で販売する冷凍弁当です。販売ページの購入者レビュー（35セットで計18,454件）には、味や薄味への満足と家族の食事づくりが楽になったという声が多く、量の少なさを挙げる声もあります。料金は送料込みで1食550〜826円、6種類の調整食から選べます。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・メニュー・栄養値は変わることがあります。ご注文前に販売ページで最新の情報をご確認ください。</p>

        <OfficialButton>健康直球便（楽天市場の公式店）を見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/takuhai-cook123-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">宅配クック123の口コミ・評判</Link></li>
            <li><Link href="/articles/genenshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">減塩食の宅配</Link></li>
            <li><Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">腎臓病の宅配弁当</Link></li>
            <li><Link href="/articles/kaigoshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">介護食の宅配</Link></li>
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者におすすめの宅配弁当</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書</Link></li>
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
