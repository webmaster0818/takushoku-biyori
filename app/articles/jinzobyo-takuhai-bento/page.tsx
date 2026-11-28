import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "腎臓病向けの宅配弁当4社｜たんぱく質・塩分・カリウムの基準と料金を公式で比較【2026年11月】";
const ARTICLE_DESCRIPTION =
  "たんぱく質を制限した宅配弁当4社（ウェルネスダイニング・Dr.つるかめキッチン・メディミール・食宅便）を、1食のたんぱく質・塩分・カリウム・リン・カロリーの公式基準と料金で比較。食宅便のたんぱくケア35品と減塩コース34品の栄養成分も集計しました（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/jinzobyo-takuhai-bento/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "腎臓病 宅配弁当, 腎臓病食 宅配, たんぱく質制限 宅配弁当, 低たんぱく 宅配, カリウム制限 宅配弁当, 腎臓病 冷凍弁当",
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
  { question: "腎臓病向けの宅配弁当はたんぱく質何gですか？", answer: "今回比較した4社は、1食のたんぱく質を10g以下（食宅便は10.2g目安）に調整しています。食宅便のたんぱくケア35品を集計すると、8.9〜10.7gでした。必要な制限量は人によって異なるため、主治医・管理栄養士にご確認ください。" },
  { question: "減塩コースと腎臓病向けのコースは何が違いますか？", answer: "塩分の上限は同じ2.0gでも、減塩コースはたんぱく質・カリウムを制限していません。食宅便では、減塩コースのたんぱく質は中央値18.4g、たんぱくケアは10.6gで、カリウムも減塩コースのほうが多い傾向でした。" },
  { question: "透析中でも使えますか？", answer: "透析の有無や病期によって制限の内容は変わります。4社とも公式ページは腎臓病の方向けとしていますが、使えるかどうかは主治医・管理栄養士にご相談ください。" },
  { question: "いちばん安いのはどこですか？", answer: "定期7食の税込料金は、食宅便5,180円（送料940円別）・メディミール5,270円（送料無料）・Dr.つるかめキッチン5,508円（送料無料）・ウェルネスダイニング6,058円（送料440円）でした。送料込みではメディミールが最も低くなります（2026年11月25日確認）。" },
  { question: "リンも制限されていますか？", answer: "Dr.つるかめキッチンは200mg以下、食宅便は約200mg以下と数値で示しています。ウェルネスダイニングは平均113mg、メディミールはリンを制限の対象としていますが、上限の数値は記載がありませんでした。" },
];

const sections = [
  { id: "answer", label: "腎臓病向け宅配弁当4社の早見表" },
  { id: "data", label: "たんぱくケアと減塩コースの違い（食宅便の掲載メニューを集計）" },
  { id: "services", label: "4社のたんぱく制限コース" },
  { id: "before", label: "使う前に確認したいこと" },
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
          <Link href="/articles/#mokuteki" className="text-foreground/70 hover:text-accent transition-colors">目的別ガイド・ランキング</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">腎臓病向けの宅配弁当4社</span>
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



export default function JinzobyoTakuhaiBentoPage() {
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
      { "@type": "ListItem", position: 2, name: "目的別ガイド・ランキング" },
      { "@type": "ListItem", position: 3, name: "腎臓病向けの宅配弁当4社" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">目的別ガイド・ランキング</span>
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
            腎臓病の食事でよく求められるたんぱく質・塩分・カリウムの調整に対応した宅配弁当のうち、<strong>1食あたりの基準を公式に数値で示している4社</strong>を比較しました。4社とも1食のたんぱく質は約10g、塩分は2.0g以下（未満）です。
          </p>
          <p className="mb-3">
            数値は各社の公式ページで2026年11月25日に確認したものです。食宅便は掲載メニューの栄養成分を当サイトで集計し、<strong>減塩コースとたんぱくコースでカリウム・リンがどれだけ違うか</strong>も比べました。
          </p>
          <p>制限の内容と量は、病期や透析の有無、検査値によって人ごとに異なります。宅配弁当を使う前に、主治医・管理栄養士にご相談ください。当サイトは医療上の助言を行うものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">腎臓病向けの宅配弁当（要点）</p>
          <p className="text-sm leading-relaxed mb-4">4社とも1食のたんぱく質は10g以下（食宅便は10.2g目安）・塩分2.0g以下（未満）で、カリウムは500mg以下（食宅便は約450mg以下）です。定期7食の料金（税込）はメディミール5,270円・食宅便5,180円（送料940円別）・Dr.つるかめキッチン5,508円・ウェルネスダイニング6,058円。食宅便のたんぱくケア35品はたんぱく質8.9〜10.7g（中央値10.6g）でした。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式で確認できた点</p>
              <ul className="space-y-1 list-disc list-inside"><li>たんぱく質・塩分・カリウムの上限を4社とも数値で公開</li><li>リンの基準または平均値を示す社もある</li><li>メニューごとの栄養成分を公開している社がある</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>必要な制限は人によって違う（主治医・管理栄養士の指示が優先）</li><li>減塩コースはカリウム・たんぱく質を制限していない</li><li>食宅便は1食のエネルギーが250kcal前後と他社より低め</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">腎臓病向け宅配弁当4社の早見表</SectionHeading>
        <ComparisonTable
          headers={["サービス・コース", "たんぱく質", "塩分", "カリウム", "リン", "カロリー", "定期7食（税込）"]}
          rows={[
            ["ウェルネスダイニング たんぱく＆塩分調整気配り宅配食", "10g以下（平均9.1g）", "2.0g以下（平均1.9g）", "500mg以下（平均387mg）", "平均113mg", "300kcal以上（平均307kcal）", "6,058円（送料440円）"],
            ["Dr.つるかめキッチン たんぱく＆塩分制限気づかい御膳", "10g以下", "2.0g以下", "500mg以下", "200mg以下", "300kcal以上", "5,508円（送料無料）"],
            ["メディミール たんぱく質＆塩分制限食", "10g以下", "2g以下", "500mg以下", "制限の対象（数値の記載なし）", "300kcal以上", "5,270円（送料無料）"],
            ["食宅便 たんぱくケア", "約10.2g目安（超えるメニューあり）", "2.0g未満", "約450mg以下", "約200mg以下", "中央値249kcal（当サイト集計）", "5,180円＋送料940円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※各社公式のコースページで2026年11月25日に確認（出典URLは「4社のたんぱく制限コース」）。ウェルネスダイニングの平均値は公式の「栄養価の目安（1食あたり）」。食宅便のカロリーは掲載35品の当サイト集計。メディミールの料金は2026年11月18日・24日にも同額を確認。</p>
        <p className="text-sm mb-6 leading-relaxed">上限はほぼ同じ水準です。違いが大きいのは、<strong>1食のエネルギー（300kcal以上を基準にするか）</strong>、<strong>リンの基準を示しているか</strong>、<strong>送料の条件</strong>の3点でした。たんぱく質を減らすとエネルギーが不足しやすいため、ウェルネスダイニング・Dr.つるかめキッチン・メディミールは「300kcal以上」を基準に入れています。</p>
        <SectionHeading id="data">たんぱくケアと減塩コースの違い（食宅便の掲載メニューを集計）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">食宅便は、同じ価格（らくらく定期便7食5,180円）で「たんぱくケア」と「塩分&カロリーケア」を販売しています。どちらも塩分は2.0g未満ですが、ほかの栄養素は大きく違います。2026年11月25日に各コースページに掲載されていたメニューの栄養成分（公式は検査機関での分析値が原則と記載）を当サイトで集計しました。</p>
        <ComparisonTable
          headers={["1食あたり", "たんぱくケア（35品）", "塩分&カロリーケア（34品）"]}
          rows={[
            ["たんぱく質", "8.9〜10.7g（中央値10.6g）", "18.2〜20.1g（中央値18.4g）"],
            ["カリウム", "253〜444mg（中央値380mg）", "327〜699mg（中央値516.5mg）"],
            ["リン", "100〜190mg（中央値129mg）", "139〜318mg（中央値219mg）"],
            ["食塩相当量", "1.5〜1.9g（中央値1.9g）", "1.5〜1.9g（中央値1.9g）"],
            ["エネルギー", "245〜263kcal（中央値249kcal）", "271〜304kcal（中央値279kcal）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="http://shokutakubin.com/shop/c/c31/" target="_blank" rel="noopener noreferrer" className="text-accent underline">食宅便「たんぱくケア」</a>・<a href="http://shokutakubin.com/shop/c/c30/" target="_blank" rel="noopener noreferrer" className="text-accent underline">「塩分&カロリーケア」</a>のコースページ（2026年11月25日取得）。同じ名前の重複は1品として数えています。集計は当サイト。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>たんぱくケアは全35品でカリウム444mg以下・リン190mg以下と、公式の目安（約450mg・約200mg）に収まっていました</li><li>減塩コースは塩分こそ同じ水準ですが、たんぱく質は中央値で約1.7倍、カリウムは21品が450mgを超えていました。たんぱく質・カリウムの制限がある方が「減塩」だけで選ぶと、制限から外れることがあります</li><li>たんぱくケアのたんぱく質は22品が公式の目安10.2gを上回っていました（最大10.7g）。公式も「たんぱく質量が10.2gを超えるメニューもございます」と注記しています</li></ul>
        <p className="text-sm mb-6 leading-relaxed">塩分だけを控えたい方向けの比較は<Link href="/articles/genenshoku-takuhai/" className="text-accent underline">減塩食の宅配4社</Link>にまとめています。</p>
        <SectionHeading id="services">4社のたんぱく制限コース</SectionHeading>
        <SubHeading>ウェルネスダイニング「たんぱく＆塩分調整気配り宅配食」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「たんぱく質の制限が必要な腎臓病の方向けの宅配弁当です」「1食あたりたんぱく質10ｇ以下に調整しながら、塩分とカリウムも制限しています」</li><li>基準: たんぱく質10g以下・塩分2.0g以下・カリウム500mg以下・カロリー300kcal以上</li><li>栄養価の目安（1食あたり・公式）: 平均307kcal・たんぱく質9.1g・食塩相当量1.9g・リン113mg・カリウム387mg</li><li>調理の工夫（公式）: 野菜は茹でこぼし・水さらしでカリウムを減らす、リンの多い乳製品・ナッツ類・練りものは使用量を調整</li><li>料金（税込）: 7食6,058円・14食11,858円・21食17,258円</li><li>送料（税込・公式FAQ）: 初回無料・定期は14食・21食が無料で7食のみ440円・都度880円</li><li>出典: <a href="https://www.wellness-dining.com/kikubari/products/k110/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 たんぱく＆塩分調整気配り宅配食</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">4社の中では価格が最も高い一方、リンとカリウムの平均値まで公開しています。サービス全体は<Link href="/articles/wellness-dining-reviews/" className="text-accent underline">ウェルネスダイニングの口コミ・評判</Link>をご覧ください。</p>
        <SubHeading>Dr.つるかめキッチン「たんぱく＆塩分制限気づかい御膳」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「たんぱく質10g以下、塩分2.0g以下、カリウム500mg以下、リン200mg以下、カロリー300kcal以上です」</li><li>料金（税込）: 定期7食5,508円・14食10,476円・21食15,336円（2回目以降も同額）／都度7食7,682円</li><li>送料: 定期は無料</li><li>定期の変更・解約: 次回お届け予定日の6日前まで</li><li>出典: <a href="https://tsurukame-kitchen.com/menu/post-108" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 たんぱく＆塩分制限気づかい御膳</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">4社のうち、リンの上限（200mg以下）を数値で示しているのはDr.つるかめキッチンと食宅便（約200mg以下）でした。詳しくは<Link href="/articles/tsurukame-reviews/" className="text-accent underline">Dr.つるかめキッチンの口コミ・評判</Link>へ。</p>
        <SubHeading>メディミール「たんぱく質＆塩分制限食」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「たんぱく質の制限が必要な腎臓病の方におすすめ」「たんぱく質・カリウム・リン・塩分を制限し、たんぱく質10g以下、塩分2g以下、カリウム500mg以下、カロリー300kcal以上に調整しています」</li><li>料金（税込）: 7食5,270円・14食9,698円・21食14,018円</li><li>送料: 初回無料・定期無料（同じページのFAQ）。同じページ内に「定期お届けは送料800円(税別)がずっと半額」という別の表記もあり、注文時に確認が必要</li><li>関連商品: 低たんぱくパスタ、たんぱく質調整ご飯・食パンなどの単品も販売</li><li>出典: <a href="https://medimeal.net/restricted/protein/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 たんぱく質＆塩分制限食</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">定期7食の料金は4社で最も低い水準です（送料込みで比べた場合）。<Link href="/articles/medimeal-kuchikomi/" className="text-accent underline">メディミールの口コミ・評判</Link>もあわせてご覧ください。</p>
        <SubHeading>食宅便「たんぱくケア」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「1食あたりのたんぱく質量が10.2g＊目安、塩分2.0g未満、カリウム約450mg以下、リン約200mg以下に抑えた7食1セットのメニューです」（＊10.2gを超えるメニューあり）</li><li>エネルギー: 公式の基準値の記載はなく、掲載35品は245〜263kcal（中央値249kcal）（当サイト集計）</li><li>料金（税込）: らくらく定期便7食5,180円</li><li>送料（税込）: 1梱包につき らくらく定期便940円・都度便1,330円</li><li>出典: <a href="http://shokutakubin.com/shop/default.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式トップ</a>・<a href="http://shokutakubin.com/shop/c/c31/" target="_blank" rel="noopener noreferrer" className="text-accent underline">たんぱくケア</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">1食のエネルギーが他3社の基準（300kcal以上）より低いため、エネルギーを補う必要がある方は、主食や補食の取り方を管理栄養士にご確認ください。<Link href="/articles/shokutakubin-reviews/" className="text-accent underline">食宅便の口コミ・評判</Link>も参考になります。</p>
        <SectionHeading id="before">使う前に確認したいこと</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>制限の内容と量: たんぱく質・塩分・カリウム・リン・水分のどれを、どの程度制限するかは人によって違います。主治医・管理栄養士の指示を確認する</li><li>1日の合計: 宅配弁当は1食分です。ほかの食事・主食・間食を合わせた1日の量で考える</li><li>エネルギー: たんぱく質を減らすとエネルギーが不足しやすいため、各社はカロリーの下限（300kcal以上）を設けています</li><li>主食: 公式の栄養値にご飯が含まれるかをコースページで確認し、たんぱく質を調整したご飯などを使うかは指示に合わせる</li><li>相談窓口: メディミールは管理栄養士によるヒアリングを案内しています</li></ul>
        <p className="text-sm mb-6 leading-relaxed">高齢の家族の食事を探している場合は<Link href="/articles/koureisha-osusume/" className="text-accent underline">高齢者向けの宅配弁当</Link>・<Link href="/articles/kaigoshoku-takuhai/" className="text-accent underline">介護食の宅配</Link>もご覧ください。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">腎臓病向けの宅配弁当は、ウェルネスダイニング・Dr.つるかめキッチン・メディミール・食宅便の4社が、たんぱく質約10g・塩分2.0g以下・カリウム500mg以下（食宅便は約450mg以下）の基準を公式に示しています。違いはエネルギーの下限、リンの基準、送料の条件です。</p>
        <p className="text-sm mb-6 leading-relaxed">塩分だけを制限した減塩コースは、たんぱく質やカリウムの制限には対応していません。制限の内容は人によって異なるため、主治医・管理栄養士にご相談のうえ、各社の公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/genenshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">減塩食の宅配4社を比較</Link></li>
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者向けの宅配弁当</Link></li>
            <li><Link href="/articles/kaigoshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">介護食の宅配7社を比較</Link></li>
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">ウェルネスダイニングの口コミ・評判</Link></li>
            <li><Link href="/articles/tsurukame-reviews/" className="text-accent hover:text-accent-dark transition-colors">Dr.つるかめキッチンの口コミ・評判</Link></li>
            <li><Link href="/articles/medimeal-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">メディミールの口コミ・評判</Link></li>
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">食宅便の口コミ・評判</Link></li>
            <li><Link href="/articles/sugisapo-deli-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">スギサポdeliの口コミ・評判（スギ薬局の冷凍宅配食）</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書</Link></li>
            <li><Link href="/articles/kenko-chokkyubin-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">健康直球便の口コミ・評判（たんぱく・塩分調整食ほか）</Link></li>
            <li><Link href="/articles/tounyoubyou-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">糖尿病の方向けの宅配弁当（7コースの栄養基準）</Link></li>
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
