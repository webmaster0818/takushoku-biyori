import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "GREEN SPOON（グリーンスプーン）の解約方法｜締切はお届け4〜8日前、停止との違いと精算金がかかるプランを公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "GREEN SPOON（グリーンスプーン）の定期便を解約する方法を、公式FAQと特定商取引法に基づく表示で整理しました。解約ページは初回お届けの翌日から使え、締切はお届け4〜8日前の変更締切日。通常の定期便は解約金なしですが、スタート応援・お得に継続・冷凍庫プレゼントの3プランは途中解約で精算金がかかります。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/green-spoon-kaiyaku/";
const OFFICIAL_URL = "https://t.felmat.net/fmcl?ak=T11644V.1.Q160106K.B1357443";
const OFFICIAL_IMP = "https://t.felmat.net/fmimp/T11644V.Q160106K.B1357443";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "グリーンスプーン 解約, GREEN SPOON 解約, グリーンスプーン 解約方法, グリーンスプーン 停止, グリーンスプーン スキップ, グリーンスプーン 退会, グリーンスプーン 解約金",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-15T00:00:00+09:00",
    modifiedTime: "2026-11-15T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "GREEN SPOONの解約はどこからできますか？", answer: "公式FAQ「アカウントを解約できますか？」にある解約ページ（green-spoon.jp/cancellation）から手続きします。マイページ→HELP→FAQ→「スキップ・停止・解約はこちらから」からもたどれます。初回お届け日の翌日から操作できます。" },
  { question: "解約の締切はいつですか？", answer: "次回お届けの変更締切日までです。変更締切日はお届け先の地域により、次回お届け日の4日前〜8日前です。自分の締切日はマイページTOPの「変更●●月●●日まで」で確認できます。" },
  { question: "解約金はかかりますか？", answer: "通常の定期便は解約金がかかりません（公式FAQ）。ただし、スタート応援プラン（差額）・お得に継続プラン（8,000円）・冷凍庫プレゼントプラン（17,800円）は、条件に届かずに途中解約すると精算金がかかります。" },
  { question: "1回だけで解約できますか？", answer: "できます。公式サイトは「1回だけのお試しOK」「注文回数縛りなし」としています。初回分は注文確定後にキャンセルできないため、初回お届けの翌日以降、2回目の変更締切日までに解約や停止を行います。" },
  { question: "解約と停止はどちらがよいですか？", answer: "再開の可能性がある場合、公式FAQは無期限の停止をすすめています。停止ならアカウントと特典が残り、停止前の情報を引き継いで再開できます。解約はアカウント削除のため、継続特典が失われます。" },
  { question: "締切後に解約したらどうなりますか？", answer: "次回分は届き、解約は次々回のお届けから反映されます。届いた商品はお客様都合で返品できません。" },
  { question: "電話で解約できますか？", answer: "電話の窓口は常設されていません。お問い合わせフォームに電話希望と書くと、受付の電話番号がメールで案内され、折り返しの連絡になります（特定商取引法に基づく表示）。" },
];

const sections = [
  { id: "kinds", label: "スキップ・停止・解約の違い" },
  { id: "steps", label: "解約・停止の手順" },
  { id: "deadline", label: "締切は「変更締切日」（お届け4〜8日前）" },
  { id: "plans", label: "途中解約で精算金がかかる3つのプラン" },
  { id: "notice", label: "解約前に確認したい注意点" },
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
          <span className="text-foreground">GREEN SPOONの解約方法</span>
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
      <a href={OFFICIAL_URL} target="_blank" rel="nofollow noopener sponsored" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a><img src={OFFICIAL_IMP} width={1} height={1} alt="" style={{ border: "none" }} />
      <p className="text-[10px] text-gray-400 mt-2">PR・本記事はアフィリエイト広告を含みます</p>
    </div>
  );
}


export default function GreenSpoonKaiyakuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-15T00:00:00+09:00",
    dateModified: "2026-11-15T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "GREEN SPOONの解約方法" },
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
            <time dateTime="2026-11-15">公開: 2026年11月15日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※PR・本記事はアフィリエイト広告を含みます。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            GREEN SPOON（グリーンスプーン）は、デリ弁当・メインディッシュ・スープ・スムージーなどの冷凍食品を組み合わせて届ける定期便です。公式サイトでは<strong>「注文回数縛りなし」「1回だけのお試しOK」</strong>と案内されており、通常の定期便は解約金なしで止められます。
          </p>
          <p className="mb-3">
            一方で、初回購入の直後などに加入できる<strong>割引プラン（スタート応援・お得に継続・冷凍庫プレゼント）</strong>には回数・食数の約束があり、途中で解約すると精算金がかかります。この記事では、解約・停止・スキップの手順と締切、精算金の条件を2026年11月15日に公式FAQと特定商取引法に基づく表示で確認した内容で整理しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">GREEN SPOONの解約の要点</p>
          <p className="text-sm leading-relaxed mb-4">GREEN SPOONの解約は、マイページから解約ページ（green-spoon.jp/cancellation）で手続きします。使えるのは初回お届け日の翌日からで、締切は次回お届けの変更締切日（お届け日の4〜8日前・地域により異なる）です。初回分は注文確定後にキャンセルできません。再開の可能性があるなら、アカウントを残せる「無期限の停止」を公式はすすめています。割引プランに加入している場合は、解約前に精算金の条件を確認する必要があります。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 解約しやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>通常の定期便は回数縛り・解約金なし</li><li>マイページで解約・停止・スキップができる</li><li>停止なら特典を引き継いで再開できる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>初回分は注文確定後のキャンセル不可</li><li>締切後の手続きは次々回から反映</li><li>割引プランは途中解約で精算金</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="nofollow noopener sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">GREEN SPOON 公式サイトを見る →</a><img src={OFFICIAL_IMP} width={1} height={1} alt="" style={{ border: "none" }} />
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="kinds">スキップ・停止・解約の違い</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">GREEN SPOONの定期便には、1回ごとのスキップ、再開日を指定できる停止、無期限の停止、解約（アカウント削除）があります。公式FAQの説明を表にまとめました。</p>
        <ComparisonTable
          headers={["手続き", "内容", "アカウント・特典", "操作場所"]}
          rows={[
            ["スキップ", "次回1回分のお届けを休む。その次からは継続", "残る", "マイページTOP＞その他＞スキップ"],
            ["停止（再開日を指定）", "指定した日まで配送を止める", "残る（停止前の情報・キャンペーンを引き継いで再開）", "停止ページ（green-spoon.jp/suspend）"],
            ["停止（無期限）", "期限を決めずに配送を止める", "残る", "停止ページ（green-spoon.jp/suspend）"],
            ["解約（アカウント削除）", "定期便を終了し、アカウントを削除", "継続特典が失われ、解約前の情報は引き継げない", "解約ページ（green-spoon.jp/cancellation）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: GREEN SPOON よくある質問 <a href="https://faq.green-spoon.jp/hc/ja/articles/14063103357847" target="_blank" rel="noopener noreferrer" className="text-accent underline">「スキップ・停止・解約はこちらから」</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14063053285399" target="_blank" rel="noopener noreferrer" className="text-accent underline">「定期を一定期間止めることはできますか？」</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/15265632967959" target="_blank" rel="noopener noreferrer" className="text-accent underline">「アカウントを解約できますか？」</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">公式FAQは、<strong>再開の可能性がある場合は無期限の停止をおすすめ</strong>するとしています。停止中も単品の購入はできます（<a href="https://faq.green-spoon.jp/hc/ja/articles/14063155269143" target="_blank" rel="noopener noreferrer" className="text-accent underline">停止していても単品の購入は出来ますか？</a>）。</p>
        <SectionHeading id="steps">解約・停止の手順</SectionHeading>
        <SubHeading>解約（アカウント削除）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式FAQ「アカウントを解約できますか？」にある解約ページ（green-spoon.jp/cancellation）を開く</li><li>ログインして解約の手続きを進める（初回お届け日の翌日から操作可能）</li><li>マイページ → HELP → FAQ →「スキップ・停止・解約はこちらから」からも同じ案内にたどり着けます</li></ul>
        <p className="text-sm mb-6 leading-relaxed">特定商取引法に基づく表示では、マイページの「お問い合わせフォーム」から解約を申し出る方法も案内されています。電話を希望する場合はフォームにその旨を書くと、受付の電話番号がメールで案内され、折り返しの連絡になります。</p>
        <SubHeading>停止（再開日の指定・無期限）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>停止ページ（green-spoon.jp/suspend）から「再開日を指定して停止」または「無期限で停止」を選ぶ</li><li>初回お届け日の翌日から操作可能</li></ul>
        <SubHeading>スキップ（1回お休み）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>マイページTOPの「その他」をクリック</li><li>「スキップ」ボタンを押して完了</li><li>スキップ期間中は次回注文の変更操作ができない</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://faq.green-spoon.jp/hc/ja/articles/15265632967959" target="_blank" rel="noopener noreferrer" className="text-accent underline">アカウントを解約できますか？</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14108831943831" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期を1回お休みしたいです。</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14160239609623" target="_blank" rel="noopener noreferrer" className="text-accent underline">次回お届けをスキップできません。</a>・<a href="https://green-spoon.jp/tokusho" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表示「7 解約に関する条件」</a>（2026年11月15日確認）</p>
        <SectionHeading id="deadline">締切は「変更締切日」（お届け4〜8日前）</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["締切", "次回お届けの変更締切日まで"],
            ["変更締切日", "お届け先の地域により異なり、次回お届け日の4日前〜8日前（はじめてガイドでは「お届け日の4日前の23:59・配送に3日以上かかる地域はさらに早くなる」）。自分の締切日はマイページTOPの「変更●●月●●日まで」で確認"],
            ["締切を過ぎた場合", "スキップ・停止・解約は次々回のお届けから反映。最終の商品お届けが発生する"],
            ["初回分", "注文確定後の解約・キャンセルは不可"],
            ["2回目以降の決済日", "変更締切日の翌日"],
            ["仮決済", "カードの有効性確認のため変更締切日より前に行われる。締切までにスキップ・解約すれば請求はなく、通常は変更締切日の2日後に返金"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://green-spoon.jp/tokusho" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表示</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14160200079383" target="_blank" rel="noopener noreferrer" className="text-accent underline">変更期間とは何ですか？</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14063105985431" target="_blank" rel="noopener noreferrer" className="text-accent underline">解約金がかかりますか？</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14161140308759" target="_blank" rel="noopener noreferrer" className="text-accent underline">決済日はいつですか？</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14161268422039" target="_blank" rel="noopener noreferrer" className="text-accent underline">変更締切日までにスキップしたのに決済が発生しています。</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14159768371863" target="_blank" rel="noopener noreferrer" className="text-accent underline">GREEN SPOONのはじめてガイド</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">締切が地域で4〜8日前と幅があるため、<strong>お届け日から逆算するのではなく、マイページの「変更●●月●●日まで」の表示で確認する</strong>のが確実です。締切直前に手続きした場合、明細に仮決済の金額が出ることがありますが、公式FAQによると実際の請求はありません。</p>
        <SectionHeading id="plans">途中解約で精算金がかかる3つのプラン</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">通常の定期便は解約金がかかりません。ただし、次の3つのプランは、約束した回数・食数に届かずに解約すると精算金を請求されます。加入しているかどうかは、マイページトップの「PLAN プラン」で確認できます。</p>
        <ComparisonTable
          headers={["プラン", "条件", "特典", "途中解約・未達の場合"]}
          rows={[
            ["スタート応援プラン", "加入後100日間で3回以上の定期注文（初回は数えない）", "初回に特典商品2食を無料・2回目以降5%OFF", "通常プランとの差額（初回の特典商品代金＋5%OFF分の合計）"],
            ["お得に継続プラン", "加入後14ヶ月で140食の定期注文", "定期便ずっと5%OFF・3,000円OFFクーポン", "割引特典精算金 8,000円（税込）"],
            ["冷凍庫プレゼントプラン", "加入後14ヶ月で140食の定期注文", "冷凍庫（通常17,800円・税込）を無料・定期便ずっと5%OFF", "割引特典精算金 17,800円（税込）・冷凍庫の返品不可"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://faq.green-spoon.jp/hc/ja/articles/39008646490263" target="_blank" rel="noopener noreferrer" className="text-accent underline">スタート応援プランとは何ですか？</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/39008682768407" target="_blank" rel="noopener noreferrer" className="text-accent underline">お得に継続プランとは何ですか？</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/39008697412375" target="_blank" rel="noopener noreferrer" className="text-accent underline">冷凍庫プレゼントプランとは何ですか？</a>（2026年11月15日確認）。回数・食数はすべて「お届け日」を基準に数えます。</p>
        <p className="text-sm mb-6 leading-relaxed">「14ヶ月で140食」は、<strong>月あたり平均10食</strong>の計算です。1回8食（2回目以降の最小食数）で注文する場合、140食に届くには18回のお届けが必要になります（当サイト計算）。停止やスキップが多いと食数が減るため、解約や長期の停止を考えるときは、残りの食数を先に確認しておくと精算金を避けやすくなります。</p>
        <p className="text-sm mb-6 leading-relaxed">スタート応援プランは、3回目の注文のお届け日が100日以内に収まらない場合も、プラン終了日の翌日に差額が請求されます。初回購入の直後の専用画面からのみ加入できるプランです。</p>
        <SectionHeading id="notice">解約前に確認したい注意点</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li><strong>解約するとアカウントが削除される</strong>：継続特典（定期の累計食数に応じた特典。80食から毎回5%OFF、200食から注文ごとに1食プレゼントなど）が失われ、再開時に解約前の情報を引き継げません</li><li><strong>返品は不可</strong>：締切までに手続きしなかった分が届いた場合も、お客様都合の返品は受け付けていません（特定商取引法に基づく表示）</li><li><strong>受け取らずに返送された場合</strong>：理由を問わず再配送は受け付けていません</li><li><strong>手続きは初回お届け日の翌日から</strong>：初回の注文直後には解約・停止の操作ができません</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://faq.green-spoon.jp/hc/ja/articles/15265632967959" target="_blank" rel="noopener noreferrer" className="text-accent underline">アカウントを解約できますか？</a>・<a href="https://green-spoon.jp/tokusho" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表示「6 返品の条件」</a>・<a href="https://faq.green-spoon.jp/hc/ja/articles/14159768371863" target="_blank" rel="noopener noreferrer" className="text-accent underline">はじめてガイド</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">料金や口コミを確認したうえで続けるか決めたい場合は、<Link href="/articles/green-spoon-kuchikomi/" className="text-accent underline">GREEN SPOONの口コミ・評判と料金</Link>もあわせてご覧ください。スムージーだけを続けたい場合は、<Link href="/articles/green-spoon-smoothie/" className="text-accent underline">GREEN SPOONのスムージーの種類と料金</Link>で1食あたりの価格を整理しています。</p>
        <OfficialButton>GREEN SPOON 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">GREEN SPOONの通常の定期便は、回数の縛りも解約金もなく、マイページから解約・停止・スキップができます。締切はお届け4〜8日前の変更締切日で、初回分は確定後にキャンセルできません。割引プランに加入している場合は、残りの回数・食数と精算金の額を確認してから手続きすると、思わぬ請求を避けられます。</p>
        <p className="text-sm mb-6 leading-relaxed">手続きの方法や条件は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>GREEN SPOON 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/green-spoon-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">GREEN SPOON（グリーンスプーン）の口コミ・評判</Link></li>
            <li><Link href="/articles/green-spoon-smoothie/" className="text-accent hover:text-accent-dark transition-colors">GREEN SPOONのスムージーの種類と料金</Link></li>
            <li><Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark transition-colors">宅配弁当のお試しセットの比較</Link></li>
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
