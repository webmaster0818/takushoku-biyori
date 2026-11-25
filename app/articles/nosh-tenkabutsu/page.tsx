import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ナッシュ（nosh）の添加物は？おかず79品の原材料表示を集計｜保存料34品・甘味料44品【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ナッシュは無添加なのか。公式のメニュー詳細102件の原材料表示を当サイトで集計し、販売中のおかず79品の添加物ごとの品数、公式の「使用しない食品添加物リスト」28成分との照合、三ツ星ファーム・食宅便との比較を掲載しています（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-tenkabutsu/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ナッシュ 添加物, nosh 添加物, ナッシュ 保存料, ナッシュ 無添加, ナッシュ 原材料, ナッシュ 甘味料, ナッシュ 人工甘味料",
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
  { question: "ナッシュは無添加ですか？", answer: "無添加をうたうサービスではありません。販売中のおかず79品すべてに添加物の表示がありました（2026年11月25日・当サイト集計）。一方で、使用しない食品添加物28成分を公式に公開しています。" },
  { question: "ナッシュに保存料は入っていますか？", answer: "おかず79品中34品に保存料の表示があり、主にソルビン酸・ソルビン酸Kでした。公式が使用しないとしているソルビン酸カルシウムは表示されていません。" },
  { question: "人工甘味料は使われていますか？", answer: "おかず79品中44品に甘味料の表示があり、スクラロース・ステビア・甘草でした。アセスルファムカリウム・サッカリン・ネオテームは公式の使用しない一覧に入っており、表示もありませんでした。" },
  { question: "化学調味料は使われていますか？", answer: "「化学調味料」は食品表示で使われる名称ではありません。うま味調味料などは「調味料（アミノ酸等）」と表示され、おかず79品すべてにありました。" },
  { question: "原材料はどこで確認できますか？", answer: "公式サイトのメニュー一覧で各メニューを開くと、栄養成分・原材料・アレルギーが表示されます。届いた商品のパッケージにも記載があり、そちらが最終的な情報です。" },
];

const sections = [
  { id: "answer", label: "ナッシュの添加物の結論" },
  { id: "count", label: "添加物ごとの品数（おかず79品の集計）" },
  { id: "ng-list", label: "公式の「使用しない食品添加物リスト」との照合" },
  { id: "sweet", label: "甘味料・保存料の中身" },
  { id: "compare", label: "三ツ星ファーム・食宅便との比較" },
  { id: "other", label: "デザート・パン・朝食メニュー" },
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
          <span className="text-foreground">ナッシュの添加物</span>
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



export default function NoshTenkabutsuPage() {
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
      { "@type": "ListItem", position: 3, name: "ナッシュの添加物" },
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
            ナッシュ（nosh）は「無添加」をうたうサービスではありません。公式の「お客さまへの約束」では、<strong>独自の添加物リストで原材料を管理し、使用しない食品添加物を一覧で公開</strong>しています。
          </p>
          <p className="mb-3">
            当サイトでは、2026年11月25日に公式のメニュー一覧にある102件の詳細ページを開き、原材料表示を書き出しました。そのうち販売中のおかず（メインプレート）79品で、どの添加物が何品に表示されているかを数えています。
          </p>
          <p>添加物の安全性や良し悪しを判断するものではありません。原材料表示の事実を並べています。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ナッシュの添加物（要点）</p>
          <p className="text-sm leading-relaxed mb-4">販売中のおかず79品すべてに調味料（アミノ酸等）と加工でん粉の表示がありました。甘味料は44品（56%）、保存料は34品（43%）です。公式が「使用しない」と公開している28成分は、102件の原材料表示に1つも見当たりませんでした。同じ日に集計した三ツ星ファームと比べると、甘味料と保存料が表示されているメニューの割合が高い結果です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 集計でわかったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>使用しない添加物28成分を公式に公開</li><li>その28成分は102件の表示に0件</li><li>全メニューの原材料を公式サイトで公開</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>「無添加」をうたうサービスではない</li><li>甘味料は79品中44品、保存料は34品</li><li>届いた商品のパッケージの表示が優先</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">ナッシュの添加物の結論</SectionHeading>
        <ComparisonTable
          headers={["確認したこと", "結果（2026年11月25日）"]}
          rows={[
            ["公式の「無添加」の表記", "なし（「独自の添加物リストによる厳しい原材料管理」と記載）"],
            ["使用しない添加物の公開", "「ナッシュが使用しない食品添加物リスト」に28成分"],
            ["その28成分の表示", "メニュー詳細102件の原材料に0件（当サイト照合）"],
            ["原材料の公開", "メニュー詳細ページに全件掲載（102件）"],
            ["販売中のおかず79品の添加物", "全79品に添加物の表示あり"],
            ["甘味料", "44品（56%）"],
            ["保存料", "34品（43%）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://nosh.jp/promise" target="_blank" rel="noopener noreferrer" className="text-accent underline">お客さまへの約束</a>・<a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧</a>の各メニュー詳細ページ・<a href="https://nosh.jp/faq/answer/25" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「原材料や栄養価の確認方法について」</a>（2026年11月25日確認）。原材料表示の「／」より後ろを添加物の欄として、当サイトが表示名で数えました。</p>
        <p className="text-sm mb-6 leading-relaxed">結論として、ナッシュのおかずには調味料（アミノ酸等）・加工でん粉・増粘剤などの一般的な食品添加物が表示されています。一方で、使わない添加物を公式に一覧で示し、その一覧の成分は実際の原材料表示にも出てきませんでした。料金や口コミは<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh（ナッシュ）の口コミ・評判</Link>で解説しています。</p>
        <SectionHeading id="count">添加物ごとの品数（おかず79品の集計）</SectionHeading>
        <ComparisonTable
          headers={["添加物（表示名）", "販売中のおかず（79品）"]}
          rows={[
            ["調味料（アミノ酸等）", "79品（100%）"],
            ["加工でん粉", "79品（100%）"],
            ["増粘剤（増粘多糖類・糊料）", "78品（99%）"],
            ["香料", "62品（78%）"],
            ["着色料", "58品（73%）"],
            ["pH調整剤", "58品（73%）"],
            ["乳化剤", "49品（62%）"],
            ["酸化防止剤", "44品（56%）"],
            ["甘味料", "44品（56%）"],
            ["保存料", "34品（43%）"],
            ["リン酸塩", "31品（39%）"],
            ["発色剤（亜硝酸Na）", "0品（0%）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※1品に複数の添加物が表示されるため、合計は品数を超えます。集計は当サイト。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>調味料（アミノ酸等）と加工でん粉は79品すべて、増粘剤も78品に表示がありました</li><li>香料・着色料・pH調整剤は、それぞれ7割台のメニューに表示されています</li><li>ハム・ベーコンなどで使われることの多い発色剤（亜硝酸Na）は0品でした</li></ul>
        <SectionHeading id="ng-list">公式の「使用しない食品添加物リスト」との照合</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式の「お客さまへの約束」には、ナッシュが使用しない食品添加物として次の28成分が掲載されています。メニュー詳細102件（おかず・デザート・パン・朝食・アイス）の原材料表示をこの一覧で検索したところ、該当は0件でした。</p>
        <p className="text-sm mb-6 leading-relaxed">サッカリン・アゾキシストロビン・パラオキシ安息香酸イソブチル・パラオキシ安息香酸イソプロピル・パラオキシ安息香酸プロピル・パラオキシ安息香酸エチル・デヒドロ酢酸ナトリウム・ブチルヒドロキシアニソール（BHA）・オルトフェニルフェノール及びOPP-ナトリウム・チアベンダゾール（TBZ）・ソルビン酸カルシウム・トラガントガム・臭素酸カリウム・ナイシン・ナタマイシン・二酸化チタン・ネオテーム・ヒドロキシプロピルメチルセルロース・ピペロニルブトキシド・ピリメタニル・ピロ亜硫酸カリウム・ピロ亜硫酸ナトリウム・フルジオキソニル・プロピコナゾール・没食子酸プロピル・アセスルファムカリウム・二酸化硫黄・亜硝酸ナトリウム</p>
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://nosh.jp/promise" target="_blank" rel="noopener noreferrer" className="text-accent underline">お客さまへの約束</a>の「ナッシュが使用しない食品添加物リスト」（2026年11月25日確認）。表の1行目は「二酸化硫黄亜硝酸ナトリウム」と続けて表示されており、別の行にある二酸化硫黄・亜硝酸ナトリウムと同じ成分として数えました。照合は当サイト。</p>
        <p className="text-sm mb-6 leading-relaxed">一覧には、保存料のソルビン酸カルシウムや甘味料のアセスルファムカリウム・サッカリン・ネオテームが含まれます。ナッシュのおかずに表示されている保存料・甘味料は、これらとは別の成分でした（次の節）。</p>
        <SectionHeading id="sweet">甘味料・保存料の中身</SectionHeading>
        <SubHeading>甘味料（44品）</SubHeading>
        <ComparisonTable
          headers={["表示されている甘味料", "品数"]}
          rows={[
            ["スクラロース", "34品"],
            ["ステビア", "18品"],
            ["甘草", "13品"],
          ]}
        />
        <SubHeading>保存料（34品）</SubHeading>
        <ComparisonTable
          headers={["表示されている保存料", "品数"]}
          rows={[
            ["ソルビン酸K", "21品"],
            ["ソルビン酸", "11品"],
            ["しらこたん白", "2品"],
            ["安息香酸Na", "1品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※1品に複数の甘味料が表示される場合は、それぞれに数えています。表示名は原材料表示のまま（ソルビン酸K＝ソルビン酸カリウム）。集計は当サイト。</p>
        <p className="text-sm mb-6 leading-relaxed">ナッシュは全メニューを「糖質30g以下・塩分2.5g以下」に設計しており、甘味料にはスクラロースとステビア・甘草が使われていました。保存料はソルビン酸とその塩（カリウム塩）が中心です。保存料が表示されているおかずは、おろしソースのハンバーグ・懐かしの和風チーズデミカツ・【増量】鶏もも肉の炭火焼き・クリームコロッケグラタン・特製みそカツ・満腹御膳！具沢山そぼろの揚げ出し豆腐など34品です。</p>
        <SectionHeading id="compare">三ツ星ファーム・食宅便との比較</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">同じ日に、三ツ星ファーム（注文できて原材料が載っている137品）と食宅便の「塩分&カロリーケア」「たんぱくケア」（69品）の原材料表示も同じ方法で数えています。</p>
        <ComparisonTable
          headers={["添加物（表示名）", "ナッシュ（おかず79品）", "三ツ星ファーム（137品）", "食宅便（69品）"]}
          rows={[
            ["調味料（アミノ酸等）", "79品（100%）", "115品（84%）", "64品（93%）"],
            ["加工でん粉", "79品（100%）", "113品（82%）", "69品（100%）"],
            ["香料", "62品（78%）", "63品（46%）", "43品（62%）"],
            ["着色料", "58品（73%）", "86品（63%）", "50品（72%）"],
            ["甘味料", "44品（56%）", "8品（6%）", "18品（26%）"],
            ["保存料", "34品（43%）", "8品（6%）", "2品（3%）"],
            ["発色剤（亜硝酸Na）", "0品（0%）", "33品（24%）", "5品（7%）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※三ツ星ファーム・食宅便の集計方法と出典は<Link href="/articles/mitsuboshi-tenkabutsu/" className="text-accent underline">三ツ星ファームの添加物</Link>をご覧ください（いずれも2026年11月25日取得）。集計は当サイト。</p>
        <p className="text-sm mb-6 leading-relaxed">調味料（アミノ酸等）と加工でん粉が大半のメニューに表示されている点は3社で共通しています。ナッシュは甘味料と保存料が表示されているメニューの割合が、三ツ星ファーム・食宅便より高い結果でした。不使用の範囲を公式に示している宅配弁当は<Link href="/articles/mutenka-takuhai-bento/" className="text-accent underline">無添加の宅配弁当・冷凍宅食5社</Link>で比べられます。</p>
        <SectionHeading id="other">デザート・パン・朝食メニュー</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">おかず以外の22件（デザート・パン・朝食・アイス）も原材料を確認しました。甘味料の表示は14件、保存料の表示は5件です。アイス3件は2026年11月25日時点で販売休止中でした。</p>
        <SectionHeading id="howto">原材料表示の読み方</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>食品表示基準では、原材料と添加物を「／」などで区切り、それぞれ重量の多い順に表示します</li><li>「調味料（アミノ酸等）」は、うま味調味料などの添加物を一括名で表示したものです</li><li>ナッシュは、メニュー一覧の各メニューと商品パッケージに原材料・栄養価を記載しています（公式よくあるご質問）</li><li>「無添加」「不使用」の表示については、消費者庁が<a href="https://www.caa.go.jp/policies/policy/food_labeling/food_labeling_act/assets/food_labeling_cms201_220330_25.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline">食品添加物の不使用表示に関するガイドライン</a>を定めています</li></ul>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ナッシュは無添加をうたっておらず、販売中のおかず79品すべてに調味料（アミノ酸等）・加工でん粉の表示がありました。甘味料は44品、保存料は34品です。一方、公式が使用しないとして公開している28成分は、102件の原材料表示に見当たりませんでした。</p>
        <p className="text-sm mb-6 leading-relaxed">気になる添加物がある場合は、注文前に公式サイトの各メニューの原材料表示を確認し、届いた商品のパッケージの表示もご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-osusume-menu/" className="text-accent hover:text-accent-dark transition-colors">ナッシュのおすすめメニュー</Link></li>
            <li><Link href="/articles/nosh-shoumi-kigen/" className="text-accent hover:text-accent-dark transition-colors">ナッシュの賞味期限</Link></li>
            <li><Link href="/articles/mitsuboshi-tenkabutsu/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームの添加物</Link></li>
            <li><Link href="/articles/mutenka-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">無添加の宅配弁当・冷凍宅食5社</Link></li>
            <li><Link href="/articles/nosh-niteru-takushoku/" className="text-accent hover:text-accent-dark transition-colors">ナッシュに似てる宅食</Link></li>
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
