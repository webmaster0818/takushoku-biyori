import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "食のそよ風の解約方法｜6回未満はお問い合わせフォーム、送料の差額500円/回と締切1週間前を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "食のそよ風（株式会社SOYOKAZE）の定期購入を解約する方法を、公式のよくあるご質問と特定商取引法に関する表記で整理しました。受け取り6回未満はお問い合わせフォーム、6回以上はマイページの「解約する」から、お届け予定日の1週間前までに手続きします。6回未満の解約で請求される送料の差額を回数別に計算しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/shokunosoyokaze-kaiyaku/";
const OFFICIAL_URL = "https://shokunosoyokaze.com/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "食のそよ風 解約, 食のそよ風 解約方法, 食のそよ風 定期 解約, 食のそよ風 退会, 食のそよ風 スキップ, 食のそよ風 送料",
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
  { question: "食のそよ風の定期購入はいつでも解約できますか？", answer: "いつでも解約でき、解約手数料はありません。ただし受け取りが6回未満の場合は、届いた回数分の都度購入送料との差額（500円/回）が別途請求されます（2026年11月16日確認）。" },
  { question: "解約の締切はいつですか？", answer: "お届け予定日の1週間前までです。注文確定後の変更・キャンセルは受け付けていないため、締切を過ぎると次回分は届きます。" },
  { question: "マイページから解約できますか？", answer: "受け取りが6回以上の場合は、マイページの【定期購入商品の確認】→【定期購入番号】→【解約する】で解約できます。6回未満の場合は、マイページにログインしてお問い合わせフォームから解約の旨を連絡します。" },
  { question: "3回受け取って解約すると、いくら請求されますか？", answer: "500円×3回＝1,500円が別途請求される計算です（当サイト計算）。定期で払った送料780円×3回と合わせると3,840円で、都度購入の送料1,280円×3回と同じ額になります。" },
  { question: "定期を解約すれば退会したことになりますか？", answer: "なりません。退会はマイページの【お問い合わせ】から件名「その他」を選び、退会の旨を記入して連絡する別の手続きです。" },
  { question: "スキップは何回でもできますか？", answer: "マイページからは次のお届け1回分のスキップができ、連続してスキップすることはできません。2回以上続けて休みたい場合はお問い合わせフォームから連絡します。" },
  { question: "解約したあと、また定期購入を始めるとどうなりますか？", answer: "お届け回数は1回からのカウントになります。6回未満の解約の条件や、回数に応じた送料の割引も最初から数え直しになります。" },
];

const sections = [
  { id: "rule", label: "解約の条件：いつでも可・6回未満は送料の差額" },
  { id: "steps", label: "解約の手順：受け取り回数で窓口が違う" },
  { id: "cost", label: "6回未満で解約すると請求される金額（当サイト計算）" },
  { id: "taikai", label: "定期の解約と「退会」は別の手続き" },
  { id: "alt", label: "解約の前に：スキップ・サイクル変更・数量変更" },
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
          <span className="text-foreground">食のそよ風の解約方法</span>
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


export default function ShokunosoyokazeKaiyakuPage() {
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
      { "@type": "ListItem", position: 3, name: "食のそよ風の解約方法" },
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
            食のそよ風は、介護事業などを手がける株式会社SOYOKAZEの冷凍弁当です。「プチデリカ」「国産プレミアム」「kanau」「そよ風のやさしい食感」のシリーズがあり、定期購入では送料が都度購入より500円安くなります。
          </p>
          <p className="mb-3">
            定期購入はいつでも解約でき、解約手数料はありません。ただし<strong>受け取りが6回未満で解約すると、届いた回数分の送料の差額（500円/回）が別途請求</strong>されます。また、受け取り回数によって解約の窓口が変わります。この記事では、2026年11月16日に公式のよくあるご質問・お得な定期購入・特定商取引法に関する表記で確認した内容をもとに、解約の手順と、回数ごとに請求される金額を整理しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">食のそよ風の解約の要点</p>
          <p className="text-sm leading-relaxed mb-4">定期購入はいつでも解約でき、解約手数料はありません。締切はお届け予定日の1週間前までです。受け取り6回未満はマイページにログインしてお問い合わせフォームから連絡し、6回以上はマイページの「定期購入商品の確認」→定期購入番号→「解約する」で手続きします。6回未満の解約では、届いた回数×500円（都度購入送料との差額）が別途請求されます。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>いつでも解約でき、解約手数料はない</li><li>6回以上はマイページのボタンで解約できる</li><li>スキップ・サイクル変更・数量変更もできる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>6回未満は送料の差額500円×届いた回数</li><li>6回未満はフォームでの連絡が必要</li><li>締切はお届け予定日の1週間前</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">食のそよ風 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="rule">解約の条件：いつでも可・6回未満は送料の差額</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["縛り・解約手数料", "いつでも解約可能・解約手数料なし"],
            ["解約の締切", "お届け予定日の1週間前まで（次回お届けの1週間前まで）"],
            ["6回未満で解約した場合", "定期購入特典の対象外となり、届いた回数分の都度購入送料との差額（500円/回）を別途請求"],
            ["送料（特定商取引法に関する表記）", "通常：全国一律1,280円（税込・一部地域・離島除く・1梱包2セットまで）／定期購入：2セットまで780円"],
            ["解約後に再び定期購入する場合", "お届け回数は1回からのカウント"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shokunosoyokaze.com/shop/pages/faq.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">食のそよ風 よくあるご質問「定期購入の解約に、縛りや制限はありますか？」「定期購入の解約の仕方を教えてください。」</a>・<a href="https://shokunosoyokaze.com/shop/pages/about_buy.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">お得な定期購入</a>・<a href="https://shokunosoyokaze.com/shop/pages/law.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に関する表記「配送方法・送料について」</a>（2026年11月16日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">公式サイトの中で、条件の書き方が少しずつ違う箇所があります。よくあるご質問・お得な定期購入・特定商取引法に関する表記は「6回未満」ですが、「ご注文からお召し上がりまで」のページは「お届け回数が６回以下で途中解約の場合」と書いています。また、よくあるご質問の一部は「お届けした回数分の送料について、別途ご請求」としか書いていませんが、ほかのページは「都度購入送料との差額（500円/回）」と金額まで書いています。<strong>ちょうど6回目で解約する場合</strong>の扱いは、手続きの前にお問い合わせフォームで確認すると確実です。</p>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shokunosoyokaze.com/shop/pages/delivery.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">食のそよ風 ご注文からお召し上がりまで「定期購入、途中解約について」</a>（2026年11月16日確認）</p>
        <SectionHeading id="steps">解約の手順：受け取り回数で窓口が違う</SectionHeading>
        <ComparisonTable
          headers={["受け取り回数", "手続きの方法", "締切"]}
          rows={[
            ["6回未満", "マイページにログイン →【お問い合わせ】から解約の旨を連絡（件名「定期のお届け日変更/解約に関するお問い合わせ」が用意されている）", "お届け予定日の1週間前まで"],
            ["6回以上", "マイページにログイン →【定期購入商品の確認】→【定期購入番号】→ 画面下部の【解約する】", "お届け予定日の1週間前まで"],
            ["マイページにログインできない", "お問い合わせフォームから、登録の氏名・電話番号・メールアドレスと解約希望を連絡", "お届け予定日の1週間前まで"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shokunosoyokaze.com/shop/pages/faq.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">食のそよ風 よくあるご質問「定期購入の解約の仕方を教えてください。」「定期購入の次回お届け日の前倒しはできますか？」</a>（2026年11月16日確認）</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>マイページで解約した場合は、定期購入商品の一覧から【定期購入番号】が削除されたことを必ず確認します（公式FAQの手順5）</li><li>注文確定後の商品の変更・キャンセルは受け付けていないため、締切を過ぎると次回分は届きます</li><li>カスタマーサポートの電話（0120-253-831・10時〜17時）もありますが、公式FAQの解約手順はマイページとお問い合わせフォームで案内されています</li></ul>
        <p className="text-sm mb-6 leading-relaxed">フォームで連絡する場合は、返信や受付の確認に時間がかかることも考えて、締切より余裕を持って送るのが安全です。</p>
        <SectionHeading id="cost">6回未満で解約すると請求される金額（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">特定商取引法に関する表記の「お届けした回数分の都度購入送料との差額（500円/回）」を、解約までに受け取った回数に当てはめると次のとおりです（1梱包2セットまでの場合）。</p>
        <ComparisonTable
          headers={["解約までの受け取り回数", "定期で払った送料（780円×回数）", "別途請求（500円×回数）", "送料の合計", "都度購入で同じ回数買った場合（1,280円×回数）"]}
          rows={[
            ["1回", "780円", "500円", "1,280円", "1,280円"],
            ["2回", "1,560円", "1,000円", "2,560円", "2,560円"],
            ["3回", "2,340円", "1,500円", "3,840円", "3,840円"],
            ["4回", "3,120円", "2,000円", "5,120円", "5,120円"],
            ["5回", "3,900円", "2,500円", "6,400円", "6,400円"],
            ["6回以上", "780円×回数（回数に応じた割引あり）", "なし", "−", "−"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※送料は<a href="https://shokunosoyokaze.com/shop/pages/law.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に関する表記</a>の通常1,280円・定期780円（2026年11月16日確認・一部地域・離島を除く）をもとにした当サイトの計算です。お得な定期購入のページには、2025年4月1日以降のお届け回数に応じて送料が割引される（最大25%OFF）との記載がありますが、回数ごとの割引率は画像で示されており本文で確認できなかったため、この表には反映していません。</p>
        <p className="text-sm mb-6 leading-relaxed">表のとおり、<strong>6回未満で解約すると送料は都度購入と同じ額になる</strong>だけで、それ以上の違約金はかかりません（当サイト計算）。言いかえると、6回受け取るまでは定期の送料の割引が確定しない仕組みです。商品代金そのものに追加の請求がある旨の記載は、公式ページにはありません。</p>
        <SectionHeading id="taikai">定期の解約と「退会」は別の手続き</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">定期購入をやめても、会員登録はそのまま残ります。会員情報も削除したい場合は、定期の解約とは別に退会の連絡が必要です。</p>
        <ComparisonTable
          headers={["手続き", "方法"]}
          rows={[
            ["定期購入の解約", "上の「解約の手順」のとおり（6回未満はフォーム・6回以上はマイページの【解約する】）"],
            ["退会（会員情報の削除）", "マイページにログイン →【お問い合わせ】→ 件名「その他」を選び、内容に退会の旨を記入して送信"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shokunosoyokaze.com/shop/pages/faq.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">食のそよ風 よくあるご質問「退会したいのですが」</a>（2026年11月16日確認）</p>
        <SectionHeading id="alt">解約の前に：スキップ・サイクル変更・数量変更</SectionHeading>
        <ComparisonTable
          headers={["したいこと", "方法", "締切・条件"]}
          rows={[
            ["1回だけ休む", "マイページ【定期購入商品の確認】→【定期購入番号】→【スキップする】", "お届け予定日1週間前まで・次の1回分のみ・連続スキップは不可（2回以上続けて休む場合はフォームで相談）"],
            ["届く間隔を変える", "マイページで【サイクル情報を変更する】（10日毎・2週間毎・1か月毎）", "お届け予定日1週間前まで"],
            ["商品・数量を変える", "マイページ【お問い合わせ】から件名「その他」で連絡", "お届け予定日の1週間前まで"],
            ["お届け日を変える・前倒しする", "マイページ【お問い合わせ】から件名「定期のお届け日変更/解約に関するお問い合わせ」で連絡", "直前の連絡は希望に添えない場合あり"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shokunosoyokaze.com/shop/pages/faq.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">食のそよ風 よくあるご質問（定期購入について）</a>（2026年11月16日確認）。スキップの締切は、ご注文からお召し上がりまでのページでは「お届け予定日の7日前まで」と書かれています。</p>
        <p className="text-sm mb-6 leading-relaxed">受け取りが5回目までで「量が多い」「間隔が短い」ことが理由なら、サイクルを1か月毎にする・数量を減らすといった変更で6回目まで続けると、送料の差額の請求を避けられます。ほかの宅配弁当と料金を比べる場合は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>を、介護向けのやわらかい食事を探している場合は<Link href="/articles/kaigoshoku-takuhai/" className="text-accent underline">介護食の宅配サービスの比較</Link>を参考にしてください。</p>
        <OfficialButton>食のそよ風 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">食のそよ風の定期購入は、いつでも解約でき解約手数料もかかりません。手続きはお届け予定日の1週間前までで、受け取り6回未満はお問い合わせフォーム、6回以上はマイページの「解約する」から行います。6回未満で解約すると届いた回数×500円が請求され、送料の合計は都度購入と同じ額になります。続ける余地があるなら、サイクルや数量の変更も比べてから決めると無駄がありません。</p>
        <p className="text-sm mb-6 leading-relaxed">手続きの方法や条件は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>食のそよ風 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/kaigoshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">介護食の宅配サービスの比較</Link></li>
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者向けの宅配弁当の選び方</Link></li>
            <li><Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark transition-colors">送料が安い宅配弁当ランキング</Link></li>
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
