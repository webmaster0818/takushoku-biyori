import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ホーミール（homeal）の口コミ・評判は？公式レビュー74件の内容と、幼児食の料金・送料・解約を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "幼児食の冷凍宅配「ホーミール（homeal）」の口コミを、公式サイトのカスタマーレビュー74件（平均4.9）から原文で紹介します。単品60品の対象年齢と価格（120gは中央値583円）を当サイトで集計し、継続コースの送料・初回特典・解約方法を公式で確認しました（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/homeal-kuchikomi/";
const OFFICIAL_URL = "https://homeal.co.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ホーミール 口コミ, homeal 口コミ, ホーミール 評判, ホーミール 幼児食, ホーミール 料金, ホーミール 送料, ホーミール 解約, 幼児食 冷凍 宅配",
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
  { question: "ホーミールは何歳から食べられますか？", answer: "公式は、離乳食完了期の「1歳〜1歳6ヵ月」から食べられるとしています。ただしメニューごとに対象年齢があり、2026年11月25日の一覧では単品60品のうち1歳からが31品、2歳からが27品、4歳からが2品でした。" },
  { question: "ホーミールにお試しはありますか？", answer: "継続コースの初回注文は1,000円OFFで、初回〜3回目は送料が無料です（LINE連携ユーザーに送料無料クーポンを配布）。1〜3歳向けの「11品のおためしセット」（初回2,980円・税込）もあります。" },
  { question: "解約はいつでもできますか？", answer: "継続コースに期間や回数の縛りはなく、マイページからいつでも解約できます。ただし、変更締切日を過ぎて注文が確定した分は、原則キャンセルできません。" },
  { question: "送料はいくらですか？", answer: "継続コースは初回〜3回目が無料、4回目以降は小計3,100円以上で800円、8,000円以上で650円です。単品購入は一律950円です（沖縄・離島は別料金）。" },
  { question: "口コミは信頼できますか？", answer: "公式サイトのレビューは74件・平均4.9で、運営会社のサイトに掲載されたものです。投稿者は匿名で「購入済み」の表示があります。第三者のサイトの評価とあわせて判断することをおすすめします。" },
];

const sections = [
  { id: "about", label: "ホーミール（homeal）とは" },
  { id: "reviews", label: "口コミの掲載状況（公式サイトのレビュー74件）" },
  { id: "menu", label: "メニューの対象年齢と価格（単品60品を集計）" },
  { id: "price", label: "継続コースと単品購入の送料・初回特典" },
  { id: "cancel", label: "解約・スキップの方法" },
  { id: "fit", label: "向いている家庭・向いていない家庭" },
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
          <span className="text-foreground">ホーミール（homeal）の口コミ・評判</span>
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


export default function HomealKuchikomiPage() {
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
      { "@type": "ListItem", position: 3, name: "ホーミール（homeal）の口コミ・評判" },
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
            <strong>ホーミール（homeal）</strong>は、homeal株式会社（東京都渋谷区）が運営する冷凍の幼児食・家族向けおかずの宅配サービスです。公式は、離乳食完了期の「1歳〜1歳6ヵ月」から食べられるとしています。
          </p>
          <p className="mb-3">
            口コミを調べたところ、2026年11月25日時点で確認できた利用者の声の中心は、公式サイトの「カスタマーレビュー」に掲載された74件でした。この記事では、そのレビューを原文で一部紹介したうえで、全商品一覧の対象年齢・価格を当サイトで集計し、送料・初回特典・解約の条件を公式のページとよくあるご質問で確認しています。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ホーミールの口コミの要点</p>
          <p className="text-sm leading-relaxed mb-4">公式サイトのカスタマーレビューは74件・平均4.9（5段階）で、手軽さと子どもが食べたことを評価する内容が中心です（運営会社のサイトに掲載されたもので、確認できた投稿は2023〜2024年）。単品は60品で、1歳からが31品・2歳からが27品。120gのおかずは511〜954円（中央値583円・税込）です。継続コースは初回〜3回目の送料が無料（LINE連携が条件）、4回目以降は800円または650円で、マイページからいつでも解約できます。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式情報・レビューから分かる良い点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1歳から食べられるメニューが単品60品中31品</li><li>継続コースに回数の縛りがない</li><li>大人も一緒に食べられる量・味付けのメニューがある</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>120gのおかずは1品500円台が中心</li><li>4回目以降の送料は800円（8,000円以上で650円）</li><li>クール便のため置き配ができない</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ホーミール 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ホーミール（homeal）とは</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容（2026年11月25日確認）"]}
          rows={[
            ["運営", "homeal株式会社（東京都渋谷区円山町）"],
            ["対象", "離乳食完了期の1歳〜1歳6ヵ月頃から大人まで（メニューごとに対象年齢の表示あり）"],
            ["公式の基準", "塩分控えめ（0.1g〜）・カロリー100kcal〜・管理栄養士監修・国産食材中心・特定保存料と合成着色料は不使用"],
            ["買い方", "継続コース（数週ごとに自動で注文）または単品購入（1回のみ）"],
            ["配送", "ヤマト運輸のクール宅急便（冷凍）。注文・決済後、通常1〜2営業日で発送"],
            ["保存", "お届けから原則30日の「おいしさ保証」。解凍後は冷蔵で2〜3日以内が目安"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://homeal.co.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップページ</a>・<a href="https://homeal.co.jp/pages/specific-trade-law" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>・よくあるご質問「<a href="https://docs.channel.io/homeal-faq/ja/articles/%E5%95%86%E5%93%81%E3%81%AE%E5%9F%BA%E6%9C%AC%E6%83%85%E5%A0%B1-9eb9256d" target="_blank" rel="noopener noreferrer" className="text-accent underline">商品の基本情報</a>」「<a href="https://docs.channel.io/homeal-faq/ja/articles/%E9%85%8D%E9%80%81%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8-90d6a282" target="_blank" rel="noopener noreferrer" className="text-accent underline">配送に関すること</a>」（2026年11月25日確認）。</p>
        <SectionHeading id="reviews">口コミの掲載状況（公式サイトのレビュー74件）</SectionHeading>
        <ComparisonTable
          headers={["5段階の評価", "割合"]}
          rows={[
            ["5", "88%"],
            ["4", "9%"],
            ["3", "3%"],
            ["2", "0%"],
            ["1", "0%"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://homeal.co.jp/pages/customer-reviews" target="_blank" rel="noopener noreferrer" className="text-accent underline">カスタマーレビュー</a>の集計表示（全74件・平均4.9、2026年11月25日確認）。運営会社のサイトに掲載されたレビューで、投稿者は匿名、各レビューに「購入済み」と表示されています。</p>
        <SubHeading>レビューの原文（抜粋）</SubHeading>
        <ComparisonTable
          headers={["商品", "評価", "投稿日", "本文（原文の一部）"]}
          rows={[
            ["保育園で人気のドライカレー（1歳から・120g）", "5", "2024/8/12", "「とっても簡単なのに本格的で美味しくて、私も子供も大満足でした」"],
            ["7種野菜と豚肉の中華丼風の具（2歳から・120g）", "5", "2024/4/21", "「中華丼、野菜嫌いの子供が美味しいといってたべてくれました。」"],
            ["やさいぱん 3種セット（1歳から）", "5", "2024/4/19", "「材料もシンプルで安心してあげられます。そしてふわっふわ。」"],
            ["フレンチ風 3種のきのこと若鶏のクリームシチュー（2歳から・120g）", "5", "2023/9/18", "「少なめなのでちょい足しの一品にちょうどいいです！」"],
            ["レバー入りミートボールのトマト煮（1歳から・120g）", "5", "2023/7/24", "「2歳の娘、初回は食わず嫌いで全く手を付けませんでしたが、2回目は「これおいしいね」と納得の表情で完食。」"],
            ["レバー入りミートボールのトマト煮（1歳から・120g）", "3", "2023/6/1", "「レバー感がしっかりとあって身体にいい感じがしました。」"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://homeal.co.jp/pages/customer-reviews" target="_blank" rel="noopener noreferrer" className="text-accent underline">カスタマーレビュー</a>（2026年11月25日確認）。本文は原文のまま、長いものは一部だけを引用しています。</p>
        <p className="text-sm mb-6 leading-relaxed">ページで読める範囲のレビューは、子どもが食べたこと・温めるだけで出せること・大人も一緒に食べられることを挙げる内容が中心でした。評価3のレビューは、レバーの風味がしっかりあるという感想です。表示されていた投稿は2023〜2024年のもので、最近の利用者の評価はこのページからは分かりません。また、運営会社のサイトに掲載されたレビューである点にも留意が必要です。</p>
        <SectionHeading id="menu">メニューの対象年齢と価格（単品60品を集計）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式の全商品一覧には2026年11月25日時点で77品が並んでいました。このうちギフト・セット商品を除く単品60品について、対象年齢と税込価格を当サイトで集計しました。</p>
        <ComparisonTable
          headers={["対象年齢の表示", "品数"]}
          rows={[
            ["1歳から", "31品"],
            ["2歳から", "27品"],
            ["4歳から", "2品"],
          ]}
        />
        <ComparisonTable
          headers={["区分", "税込価格"]}
          rows={[
            ["120gのおかず（24品）", "511〜954円（中央値583円）"],
            ["80gの副菜（ごま和え・土佐煮など）", "499〜520円"],
            ["パン（3個入）", "499〜673円"],
            ["やさいぱん（30g・1個）", "149円"],
            ["ぐんぐんうどん（栄養機能食品）", "3玉 583円／9玉 1,762円／12玉 2,347円／18玉 3,517円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://homeal.co.jp/collections/all" target="_blank" rel="noopener noreferrer" className="text-accent underline">全商品一覧</a>（2026年11月25日確認）。品数・中央値は当サイトの集計です。公式トップは「常時80種類以上」と案内していますが、2026年11月25日の一覧はギフト・セットを含めて77品でした。</p>
        <p className="text-sm mb-6 leading-relaxed">120gのおかずは、ほとんどが583円です。もっとも高い954円は「切り落とし牛肉のシェリー煮込み」（4歳から）で、もっとも安いのはアルポルト監修のポタージュ4種（511円・2歳から）でした。1歳の子どもに出す場合は、メニューごとの「1歳から」「2歳から」の表示を確認してください。</p>
        <SectionHeading id="price">継続コースと単品購入の送料・初回特典</SectionHeading>
        <ComparisonTable
          headers={["項目", "継続コース", "単品購入（1回のみ）"]}
          rows={[
            ["送料（本州・四国・九州・北海道）", "初回〜3回目: 無料（LINE連携ユーザーに送料無料クーポンを配布）／4回目以降: 3,100円以上 800円・8,000円以上 650円", "一律950円"],
            ["沖縄・離島", "沖縄本島 1,800円・沖縄の離島 2,350円・沖縄以外の離島 +550円", "同左"],
            ["初回特典", "初回の注文が1,000円OFF", "—"],
            ["支払い方法", "クレジットカードのみ", "クレジットカード・Amazon Pay・PayPay・Paidy・楽天ペイ"],
            ["最低注文金額", "あり（購入方法により異なる・税抜の合計で判定）", "あり"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://homeal.co.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップページ</a>・よくあるご質問「<a href="https://docs.channel.io/homeal-faq/ja/articles/%E9%85%8D%E9%80%81%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8-90d6a282" target="_blank" rel="noopener noreferrer" className="text-accent underline">配送に関すること</a>」・<a href="https://homeal.co.jp/pages/specific-trade-law" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月25日確認）。4回目以降の送料の判定は小計（税込・クーポン適用後）です。最低注文金額の具体額は、確認したページには記載がありませんでした。</p>
        <p className="text-sm mb-6 leading-relaxed">公式トップは、初回〜3回の購入で「総額3,850円おトク」（初回1,000円割引＋3回分の送料2,850円相当）と案内しています。送料無料はLINE連携が条件のため、注文の前後に連携しておく必要があります。初回向けには1〜3歳の「11品のおためしセット」（税込3,980円・初回割引後2,980円）もあります。ほかの幼児食の宅配は<Link href="/articles/mogumo-kuchikomi/" className="text-accent underline">モグモの口コミ・評判</Link>で扱っています。</p>
        <SectionHeading id="cancel">解約・スキップの方法</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>継続コースはマイページから解約できる（ログイン後、画面右下の「メニュー」→「解約する」）</li><li>期間や回数の縛りはない</li><li>次回だけ見送るときは「次回ご注文内容を確認する」→「スキップする」</li><li>2回目以降は、マイページに表示される変更締切日を過ぎると自動で注文確定（決済）。確定後の変更・キャンセルは原則できない</li><li>お届けの頻度は決済日から数える「◯週ごと」。日付や曜日の固定ではない</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: 公式よくあるご質問「<a href="https://docs.channel.io/homeal-faq/ja/articles/%E7%B6%99%E7%B6%9A%E3%82%B3%E3%83%BC%E3%82%B9%E3%81%AE%E8%A7%A3%E7%B4%84%E5%81%9C%E6%AD%A2-50e6a192" target="_blank" rel="noopener noreferrer" className="text-accent underline">継続コースの解約・停止</a>」「<a href="https://docs.channel.io/homeal-faq/ja/articles/%E7%B6%99%E7%B6%9A%E3%82%B3%E3%83%BC%E3%82%B9%E3%81%AE%E3%81%8A%E5%B1%8A%E3%81%91%E3%81%AE%E6%B5%81%E3%82%8C-8b57cf9e" target="_blank" rel="noopener noreferrer" className="text-accent underline">継続コースのお届けの流れ</a>」（2026年11月25日確認）。</p>
        <SectionHeading id="fit">向いている家庭・向いていない家庭</SectionHeading>
        <SubHeading>向いている家庭</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>1〜2歳の子どもと大人が同じメニューを食べたい家庭</li><li>保育園帰りなど、温めるだけで出せる夕食を冷凍庫に置いておきたい家庭</li><li>回数の縛りがない定期便で、まず3回試したい家庭</li></ul>
        <SubHeading>向いていない家庭</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>離乳食の初期・中期（1歳より前）のものを探している家庭</li><li>1食あたりの費用をできるだけ抑えたい家庭（120gで500円台が中心）</li><li>置き配で受け取りたい家庭</li></ul>
        <p className="text-sm mb-6 leading-relaxed">離乳食後期の手づかみ食べなら<Link href="/articles/tedemogu-kuchikomi/" className="text-accent underline">TEDEMOGU（てでもぐ）</Link>、産後の家族の食事なら<Link href="/articles/sango-osusume/" className="text-accent underline">産後におすすめの宅食</Link>も参考になります。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ホーミールの口コミは、公式サイトのカスタマーレビュー74件（平均4.9）が中心で、子どもが食べたこと・温めるだけで出せることを評価する内容が多く見られました。単品60品のうち1歳から食べられるのは31品、120gのおかずは中央値583円（税込）です。継続コースは初回〜3回目の送料が無料（LINE連携が条件）で、回数の縛りなくマイページから解約できます。</p>
        <p className="text-sm mb-6 leading-relaxed">価格・送料・特典は変わることがあります。ご注文前に公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>ホーミール 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mogumo-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">モグモの口コミ・評判</Link></li>
            <li><Link href="/articles/tedemogu-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">TEDEMOGU（てでもぐ）の口コミ・評判</Link></li>
            <li><Link href="/articles/mogumogu-oyatsubin-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">MOGUMOGUおやつ便の口コミ・評判</Link></li>
            <li><Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark transition-colors">産後におすすめの宅食</Link></li>
            <li><Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark transition-colors">宅配弁当のお試しセットおすすめ</Link></li>
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
