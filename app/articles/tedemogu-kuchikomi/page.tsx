import type { Metadata } from "next";
import Link from "next/link";
import ServiceCapture from "@/components/ServiceCapture";

const ARTICLE_TITLE =
  "TEDEMOGU（てでもぐ）の口コミ・評判は？手づかみ離乳食の冷凍宅配の料金・対象月齢を公式で確認【2026年10月】";
const ARTICLE_DESCRIPTION =
  "手づかみ離乳食の冷凍宅配「TEDEMOGU（てでもぐ）」の口コミ・評判を、赤ちゃんが実食した家庭のレビューから出典付きで紹介します。9か月頃〜の豆腐ハンバーグ・12か月頃〜の軟飯おにぎり、1袋1,580円〜、送料全国一律1,100円、定期10%OFF、アレルゲン表示まで2026年10月23日の公式情報で確認しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/tedemogu-kuchikomi/";
const OFFICIAL_URL = "https://shop.eatbyhand.co.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "TEDEMOGU 口コミ, てでもぐ 口コミ, てでもぐ 評判, 手づかみ食べ 離乳食 宅配, 手づかみ 離乳食 冷凍, 離乳食 宅配 冷凍, 離乳食後期 宅配",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-10-23T00:00:00+09:00",
    modifiedTime: "2026-10-23T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "TEDEMOGUは何か月から食べられますか？", answer: "公式FAQは手づかみ食べを「生後9か月頃からを目安」とし、「歯が5～8本で離乳食後期のメニューを噛んで飲み込むことができれば」としています。ぶた肉の豆腐ハンバーグとおやきは9か月頃から、とり肉・お魚の豆腐ハンバーグと軟飯おにぎりは12か月頃からが目安です（2026年10月23日確認）。" },
  { question: "TEDEMOGUは定期便の縛りがありますか？", answer: "通常は都度購入で、回数の縛りはありません。毎月届く定期購入を選ぶと10%OFFになり、公式は「スキップやキャンセルはいつでも可能です」としています。定期購入のスキップ・解約の締切日は公式に記載がありませんでした。退会はマイページからはできず、問い合わせフォームから依頼します。" },
  { question: "送料はいくらですか？", answer: "全国一律1,100円で、商品代金10,000円以上は無料です（2026年10月23日の公式配送ポリシー）。一部の離島（青ヶ島・利島・御蔵島・式根島・小笠原村）には配送できません。" },
  { question: "初回の割引はありますか？", answer: "公式FAQに初回500円OFFのクーポンが案内されています。ほかにレビュー投稿で500円OFF、誕生月500円OFF、LINE友だち登録で5%OFFのクーポンがあります（2026年10月23日確認）。" },
  { question: "アレルギーがあっても食べられますか？", answer: "そうざいは7大アレルゲン不使用の表示ですが、全商品に「同工場では、乳成分、卵、小麦、そば、落花生、えび、かにを使用」と表示されています。豆腐ハンバーグには大豆、きな粉おにぎりにはごま・大豆が含まれます。重いアレルギーがある場合は、医師に相談のうえ各商品ページの表示をご確認ください。" },
  { question: "注文をキャンセルできますか？", answer: "注文の翌朝10時までに、問い合わせフォームかLINEで注文番号と名前を連絡すればキャンセルできます。それ以降は、不良品・品違い（到着から7日以内）を除き受け付けていません。食品のため返品はできません。" },
];

const sections = [
  { id: "about", label: "TEDEMOGU（てでもぐ）とは？基本情報" },
  { id: "age", label: "何か月から？商品別の対象月齢" },
  { id: "price", label: "料金・送料・定期購入" },
  { id: "good-reviews", label: "TEDEMOGUの良い口コミ・評判（出典付き）" },
  { id: "bad-reviews", label: "TEDEMOGUの悪い口コミ・評判（出典付き）" },
  { id: "allergy", label: "アレルゲン・温め方・保存" },
  { id: "comparison", label: "ほかの冷凍離乳食との比較" },
  { id: "recommend", label: "向いている家庭・向いていない家庭" },
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
          <span className="text-foreground">TEDEMOGU（てでもぐ）の口コミ・評判</span>
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

type SourcedReviewItem = { text: string; meta?: string; sourceName: string; sourceUrl: string };

function SourcedReview({ review, tone }: { review: SourcedReviewItem; tone: "good" | "bad" }) {
  return (
    <div className={`${tone === "good" ? "bg-green-50" : "bg-red-50"} rounded-lg p-3 text-sm leading-relaxed`}>
      <p className="mb-1.5">「{review.text}」{review.meta ? `（${review.meta}）` : ""}</p>
      <p className="text-xs text-warm-gray">
        出典:{" "}
        <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">{review.sourceName}</a>
      </p>
    </div>
  );
}

function OfficialButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 text-center">
      <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-[10px] text-gray-400 mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
    </div>
  );
}

/* ---------- 口コミ（公開レビューからの引用・原文ママ・出典明記） ---------- */

const goodReviewCategories: { title: string; reviews: SourcedReviewItem[] }[] = [
  {
    title: "手に持っても崩れにくい形・硬さ",
    reviews: [
      { text: "赤ちゃんが握ってもすぐにぼろぼろくずれません。", meta: "10か月児が実食", sourceName: "らく食", sourceUrl: "https://www.rakusyoku.kintapi.com/tedemogu-review/" },
      { text: "手に持ってみました。大きすぎず、小さすぎず、やわらかすぎず、絶妙な形状です。", meta: "商品提供によるレビュー", sourceName: "ままとごはん", sourceUrl: "https://mamatogohan.net/tedemogu-review/" },
      { text: "ベタつきすぎず、ポロポロ崩れにくい設計。", meta: "離乳食・幼児食コーディネーター／1歳児が実食", sourceName: "さぶじの育児飯", sourceUrl: "https://sabuji-otokoikuji.com/tedemogu/" },
    ],
  },
  {
    title: "子どもが自分から食べる・準備が早い",
    reviews: [
      { text: "自ら積極的に食べていて嬉しかったです。", meta: "1歳児が実食", sourceName: "さぶじの育児飯", sourceUrl: "https://sabuji-otokoikuji.com/tedemogu/" },
      { text: "1分もかからず、あっという間に作れちゃいました！", meta: "商品提供によるレビュー", sourceName: "ままとごはん", sourceUrl: "https://mamatogohan.net/tedemogu-review/" },
    ],
  },
];

const badReviewCategories: { title: string; reviews: SourcedReviewItem[]; comment: string }[] = [
  {
    title: "送料・価格の負担",
    reviews: [
      { text: "正直、毎食これにするのは我が家には厳しいかな、と感じました。", meta: "1歳児の家庭", sourceName: "さぶじの育児飯", sourceUrl: "https://sabuji-otokoikuji.com/tedemogu/" },
      { text: "送料無料になる金額がもう少し安いとより買いやすくなります。", meta: "公式サイト掲載の購入者レビュー", sourceName: "TEDEMOGU公式 商品ページ", sourceUrl: "https://shop.eatbyhand.co.jp/products/assortment" },
    ],
    comment: "送料は全国一律1,100円で、無料になるのは商品代金1万円以上です。そうざい・おにぎりの全種セット（通常9,890円）では届かないため、送料を抑えるなら5袋まとめ買い2つ分など、1回の注文をまとめるのが現実的です。毎食ではなく、外出の日や作り置きが切れた日の分として使う家庭が多い価格帯です。",
  },
  {
    title: "メニューが少ない・冷凍庫のスペース",
    reviews: [
      { text: "冷凍庫にかなりのスペース", meta: "1歳児の家庭", sourceName: "さぶじの育児飯", sourceUrl: "https://sabuji-otokoikuji.com/tedemogu/" },
    ],
    comment: "単品は7種類です（2026年10月23日）。パッケージの大きさは公式の商品ページでも記載が分かれています（約24×6.5×2cm／約30×21×3cm）。冷凍庫に余裕がない場合は、1〜2袋から始めてください。",
  },
  {
    title: "表示が分かりにくい・置き配不可",
    reviews: [
      { text: "パッケージ表記が分かりにくいところがあったところがイマイチでした。", meta: "10か月児の家庭", sourceName: "らく食", sourceUrl: "https://www.rakusyoku.kintapi.com/tedemogu-review/" },
      { text: "冷凍商品のため置き配が使えません", meta: "10か月児の家庭", sourceName: "らく食", sourceUrl: "https://www.rakusyoku.kintapi.com/tedemogu-review/" },
    ],
    comment: "パッケージの「加熱しておりません」という表示について、公式FAQは加熱調理済みであると説明しています。対象月齢は商品ページで確認できます。お届け日時は発送後に伝票番号から指定できます。",
  },
];

export default function TedemoguKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-10-23T00:00:00+09:00",
    dateModified: "2026-10-23T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "TEDEMOGU（てでもぐ）の口コミ・評判" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-sango.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-sango-m.webp)" }}>
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-10-23">公開: 2026年10月23日（公式サイトで確認）</time>
            <span>
              監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / 
              <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>
        </div>{/* /subhead */}

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            TEDEMOGU（てでもぐ）は、株式会社ハーシー（東京都目黒区）が販売する<strong>手づかみ食べ用の冷凍離乳食</strong>です。ひと口大の豆腐ハンバーグや軟飯おにぎりを、電子レンジで温めるだけで出せます。
          </p>
          <p className="mb-3">
            この記事では、赤ちゃんが実際に食べた家庭のレビュー記事から<strong>良い口コミ・悪い口コミを出典付きで</strong>紹介し、対象月齢・料金・送料・アレルゲン表示を、2026年10月23日に公式サイトで確認した値で整理しました。
          </p>
          <p>当サイトでは実食・試用はしていません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">この記事の要点</p>
          <p className="text-sm leading-relaxed mb-4">TEDEMOGUは、離乳食後期から「自分で持って食べる」練習をさせたい家庭向けの冷凍離乳食です。口コミでは「握ってもすぐに崩れない」「子どもが自分から食べた」という評価が多く、気になる点としては「毎回送料がかかる」「メニューが少ない」が挙がっています。1袋1,580〜1,690円（10個または9個入り）で、送料は全国一律1,100円（1万円以上で無料）です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>握ってもすぐ崩れない形・硬さ</li><li>子どもが自分から手を伸ばして食べたという声</li><li>電子レンジで1個40秒と手早い</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>送料1,100円（1万円未満の注文）</li><li>単品は7種類とメニューが少なめ</li><li>置き配不可・冷凍庫のスペースが要る</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・在庫は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">TEDEMOGU 公式サイトで最新の料金・商品を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">TEDEMOGU（てでもぐ）とは？基本情報</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          公式サイトは「離乳食後期から楽しめる宅配ベビーフード」「0歳から安心して与えられる固形タイプ」と紹介しています。レシピは創業者が作り、「保育園で10年以上活躍されていて、乳幼児の食事に知見・経験のある管理栄養士の方に試作・監修いただきました」（公式FAQ）とのことです。
        </p>
        <ServiceCapture id="tedemogu" />
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["販売会社", "株式会社ハーシー（東京都目黒区）。2022〜23年のプレスリリースでは株式会社Eatbyhand"],
            ["商品", "単品7種（豆腐ハンバーグ3種・おやき・軟飯おにぎり3種）とセット"],
            ["表示", "そうざいは「調味料不使用」「7大アレルゲンフリー」、おにぎりは「卵不使用」など（商品ごとに異なる）"],
            ["製造", "マルヒ食品（宮城県・そうざい）、テイスティフーズ（佐賀県・おにぎり・JFS-B規格に適合）"],
            ["サイズ", "ハンバーグは1個 約3×3×1.5cm、おにぎりは1個35g"],
            ["購入方法", "都度購入が基本。毎月届く定期購入（10%OFF）も選べる"],
            ["配送", "冷凍・ヤマト運輸のクール便"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: TEDEMOGU公式サイト（会社概要・製造環境・よくある質問・各商品ページ、2026年10月23日確認）</p>

        <SectionHeading id="age">何か月から？商品別の対象月齢</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          公式FAQは、手づかみ食べを「生後9か月頃からを目安」とし、「歯が5～8本で離乳食後期のメニューを噛んで飲み込むことができれば」としています。商品ごとの目安は次のとおりです。
        </p>
        <ComparisonTable
          headers={["商品", "対象の目安"]}
          rows={[
            ["ぶた肉と野菜入り豆腐ハンバーグ・おやき（つかみ食べスタート2種セット）", "9か月頃〜"],
            ["とり肉と野菜入り豆腐ハンバーグ・お魚入り豆腐ハンバーグ", "12か月頃〜"],
            ["軟飯おにぎり3種（あおさとしらす／小松菜とかつおぶし／きな粉とすりごま）", "12か月頃〜"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          月齢の上限はなく、公式は「大人の方が召し上がっても問題ございません」としています。初めての方には、9か月頃からの2種が入った「つかみ食べスタート2種セット」が用意されています。
        </p>

        <SectionHeading id="price">料金・送料・定期購入</SectionHeading>
        <ComparisonTable
          headers={["商品", "内容量", "1袋", "3袋", "5袋", "定期（1袋）"]}
          rows={[
            ["豆腐ハンバーグ（ぶた肉・とり肉・お魚 各）", "10個（220g）", "1,690円", "4,550円", "7,080円", "1,521円"],
            ["軟飯おにぎり（3種 各）", "9個（315g）", "1,580円", "4,130円", "6,370円", "1,422円"],
            ["つかみ食べスタート2種セット", "2袋・20個", "3,130円", "−", "−", "2,817円"],
            ["手づかみそうざい4種セット", "4袋・40個", "6,210円", "−", "−", "5,589円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-4">
          ※税込・各商品ページの表示（2026年10月23日確認）。トップページには一部に旧価格の表示が残っていたため、商品ページの価格を掲載しています。1個あたりはハンバーグ約169円、おにぎり約176円（当サイト計算）。
        </p>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["送料", "全国一律1,100円。商品代金10,000円以上で無料（一部離島は配送不可）"],
            ["定期購入", "1か月ごとのお届けで10%OFF。「スキップやキャンセルはいつでも可能です」"],
            ["初回特典", "初回500円OFFクーポン（公式FAQ）"],
            ["キャンセル", "注文の翌朝10時までにフォームかLINEで連絡（以降は不良品・品違いのみ）"],
            ["支払い", "クレジットカード・Apple Pay/Google Pay・PayPay/LINE Pay・コンビニ前払い・銀行振込"],
            ["お届け日時", "注文時の指定は不可。発送後に伝票番号から指定"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 配送ポリシー・返金ポリシー・よくある質問・商品ページ（2026年10月23日確認）。定期購入のスキップ・解約の締切日は公式に記載がありませんでした。</p>
        <OfficialButton>TEDEMOGU 公式サイトで料金を確認する</OfficialButton>


        <SectionHeading id="good-reviews">TEDEMOGUの良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">赤ちゃんが実際に食べた家庭のレビュー記事から、良い評判を出典付きで紹介します（引用は原文ママ・各記事には広告・商品提供の表記があります・2026年10月23日確認）。</p>
        {goodReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="good" />
              ))}
            </div>
          </div>
        ))}

        <SectionHeading id="bad-reviews">TEDEMOGUの悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">否定的な意見も出典付きで掲載しています。購入前にご確認いただきたい点です。</p>
        {badReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="bad" />
              ))}
            </div>
            <div className="bg-cream rounded-lg p-3 text-sm leading-relaxed">
              <p className="font-bold text-xs text-warm-gray mb-1">編集部の補足</p>
              <p>{category.comment}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="allergy">アレルゲン・温め方・保存</SectionHeading>
        <ComparisonTable
          headers={["商品", "特定原材料（商品ページの表示）"]}
          rows={[
            ["お魚入り豆腐ハンバーグ", "大豆"],
            ["ぶた肉と野菜入り豆腐ハンバーグ", "豚肉・大豆"],
            ["とり肉と野菜入り豆腐ハンバーグ", "鶏肉・大豆"],
            ["きな粉とすりごまおにぎり", "ごま・大豆"],
            ["あおさとしらす／小松菜とかつおぶしおにぎり", "なし（しらす・あおさには、ごく小さなえび・かに等が混ざる可能性の表示あり）"],
          ]}
        />
        <p className="text-sm mb-4 leading-relaxed">
          全商品に「同工場では、乳成分、卵、小麦、そば、落花生、えび、かにを使用」と表示されています。重いアレルギーがある場合は、医師に相談するよう公式も案内しています。
        </p>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["温め方", "凍ったまま皿に移し、ラップをして電子レンジ。そうざいは600Wで1個40秒、おにぎりは1個50秒（3個で2分）"],
            ["1食の目安", "おにぎり2〜3個、そうざい1〜2個"],
            ["保存・賞味期限", "−18℃以下で冷凍保存・製造から1年。解凍後は冷蔵で2〜3日以内、再冷凍は不可"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: TEDEMOGU公式 よくある質問・各商品ページ（2026年10月23日確認）</p>

        <SectionHeading id="comparison">ほかの冷凍離乳食との比較</SectionHeading>
        <ComparisonTable
          headers={["サービス", "対象", "料金の例（税込）", "購入方法"]}
          rows={[
            ["TEDEMOGU", "9か月頃〜（手づかみ食べ）", "1袋1,580〜1,690円（9〜10個）", "都度購入（定期10%OFFも可）"],
            ["the kindest", "かみかみ期（9〜11か月）など", "スターターセット5パウチ2,960円（初回15%OFFで2,516円）", "都度・定期"],
            ["First Spoon 赤ちゃんの給食 定期便", "5〜10か月", "4,500円（初回50%OFFで2,250円）", "月1回の定期便"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※各社公式サイトの表示（2026年10月23日確認）。First Spoon は税込・税抜の表記がありませんでした。TEDEMOGU は「手に持って食べる固形」、ほかの2社はスプーンで与えるパウチ・カップ型が中心で、用途が異なります。
        </p>

        <SectionHeading id="recommend">向いている家庭・向いていない家庭</SectionHeading>
        <SubHeading>TEDEMOGUが向いている家庭</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            <li>✓ 離乳食後期に、手づかみ食べの練習を始めたい</li>
            <li>✓ 手づかみ用のおやき・ハンバーグを作る時間がない</li>
            <li>✓ 調味料を使っていない、少量ずつ出せる冷凍ストックがほしい</li>
          </ul>
        </div>
        <SubHeading>TEDEMOGUが向いていない家庭</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            <li>✗ 離乳食初期・中期（ペースト状）のものを探している</li>
            <li>✗ 1回の注文が少量で、送料1,100円の負担が大きい</li>
            <li>✗ 卵・乳・小麦の重いアレルギーがあり、同じ工場での製造が気になる</li>
          </ul>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          1歳半を過ぎて幼児食に移ったら、<Link href="/articles/mogumo-kuchikomi/" className="text-accent hover:text-accent-dark underline">冷凍幼児食モグモの口コミ・評判</Link>もご覧ください。歯固め用のおやつは<Link href="/articles/mogumoguimo-kuchikomi/" className="text-accent hover:text-accent-dark underline">MOGUMOGUいもの記事</Link>で紹介しています。
        </p>


        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            TEDEMOGUは、<strong>手づかみ食べの練習に合わせて作られた冷凍離乳食</strong>です。実食した家庭の記事では「握っても崩れない」「自分から積極的に食べた」「1分もかからず準備できる」と評価されています。
          </p>
          <p>
            気になるのは、1万円未満の注文にかかる送料1,100円と、単品7種類というメニューの少なさです。まずは9か月頃からの「つかみ食べスタート2種セット」で子どもの反応を見て、続けるならまとめ買いや定期購入（10%OFF）で送料と単価を抑える流れが始めやすい方法です。
          </p>
        </div>

        <OfficialButton>TEDEMOGU 公式サイトで最新の料金・商品を見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mogumo-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">モグモ（冷凍幼児食）の口コミ・評判</Link></li>
            <li><Link href="/articles/mogumoguimo-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">MOGUMOGUいも（歯固め干し芋）の口コミ・評判</Link></li>
            <li><Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark transition-colors">産後におすすめの宅配弁当ランキング</Link></li>
            <li><Link href="/articles/mamano-kyushoku-reviews/" className="text-accent hover:text-accent-dark transition-colors">ママの休食の口コミ・評判</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
