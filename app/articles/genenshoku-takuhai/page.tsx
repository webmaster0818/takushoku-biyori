import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "減塩食の宅配4社を比較｜1食の塩分2.0g以下のコースと料金・食宅便34品の実測値【2026年11月】";
const ARTICLE_DESCRIPTION =
  "減塩食を宅配で頼める4社（ウェルネスダイニング・Dr.つるかめキッチン・メディミール・食宅便）の塩分制限コースを、1食の塩分・カロリーの基準と7食の料金・送料で比較。食宅便の塩分ケア全34品の栄養成分も集計しました（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/genenshoku-takuhai/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "減塩食 宅配, 減塩 宅配弁当, 塩分制限 宅配食, 減塩 冷凍弁当, 高血圧 宅配弁当, 塩分2g 宅配",
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
  { question: "減塩食の宅配弁当は1食で塩分何gですか？", answer: "今回比較した4社の塩分制限コースは、1食2.0g以下（食宅便は2.0g未満）です。食宅便の塩分&カロリーケア34品を集計すると、1.5〜1.9gで中央値は1.9gでした。" },
  { question: "いちばん安い減塩食の宅配はどこですか？", answer: "定期7食の料金（税込）は、食宅便5,180円・Dr.つるかめキッチン5,184円・メディミール5,270円・ウェルネスダイニング5,702円でした。ただし定期の送料は、つるかめとメディミールが無料、ウェルネスダイニングは7食のみ440円、食宅便は940円です（2026年11月25日確認）。" },
  { question: "腎臓病でも減塩コースを使えますか？", answer: "減塩コースは塩分を制限していますが、たんぱく質やカリウムは制限していません。食宅便の塩分ケアでは34品中21品がカリウム500mgを超えていました。たんぱく質・カリウムの制限がある方は、各社のたんぱく制限コースを主治医の指示とあわせてご確認ください。" },
  { question: "ご飯は付いていますか？", answer: "ウェルネスダイニング（主菜1品＋副菜3品）と食宅便（商品名「塩分ケア おかず7食」）はおかずのみです。白米は食塩をほとんど含みませんが、ふりかけや漬物を足すと塩分が増えます。ほかの2社はコースページでご確認ください。" },
  { question: "メニューは選べますか？", answer: "ウェルネスダイニングは管理栄養士のお任せで選べません。食宅便は週替わりのセットです。各社の選べる範囲は公式サイトでご確認ください。" },
];

const sections = [
  { id: "answer", label: "減塩食の宅配4社の早見表" },
  { id: "data", label: "食宅便 塩分ケア34品の塩分・カロリー（当サイト集計）" },
  { id: "services", label: "4社の塩分制限コース" },
  { id: "day", label: "1日の塩分と宅配弁当の位置づけ" },
  { id: "choose", label: "選ぶときの確認ポイント" },
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
          <span className="text-foreground">減塩食の宅配4社</span>
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



export default function GenenshokuTakuhaiPage() {
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
      { "@type": "ListItem", position: 3, name: "減塩食の宅配4社" },
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
            減塩食を宅配で頼めるサービスのうち、<strong>1食の塩分の上限を公式に示している冷凍弁当4社</strong>を比較しました。4社とも上限は1食2.0g（食宅便は2.0g未満）で、違いはカロリーの基準、料金、送料、メニューを選べるかどうかです。
          </p>
          <p className="mb-3">
            表の数値は各社の公式ページで2026年11月25日に確認したものです。食宅便は、コースページに掲載された全34品の栄養成分を当サイトで集計し、上限に対して実際の値がどう分布しているかも載せました。
          </p>
          <p>減塩の目標量は人によって異なります。治療中の方は、主治医・管理栄養士の指示を優先してください。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">減塩食の宅配の選び方（要点）</p>
          <p className="text-sm leading-relaxed mb-4">4社とも1食の塩分は2.0g以下（食宅便は2.0g未満）で、上限そのものに差はありません。定期7食の料金はDr.つるかめキッチン5,184円・食宅便5,180円・メディミール5,270円・ウェルネスダイニング5,702円（いずれも税込）。食宅便の塩分ケア34品を集計すると、塩分は1.5〜1.9g（中央値1.9g）でした。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式で確認できた点</p>
              <ul className="space-y-1 list-disc list-inside"><li>4社とも1食の塩分の上限（2.0g）を公式に明記</li><li>1食あたりの栄養成分をメニューごとに公開している社がある</li><li>冷凍で届き、食べたい日に温めるだけ</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>減塩コースはたんぱく質・カリウムを制限していない（腎臓病の方は別コース）</li><li>ご飯やみそ汁を足すと、その分の塩分は別に数える</li><li>送料の条件（定期・都度・食数）が社ごとに違う</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">減塩食の宅配4社の早見表</SectionHeading>
        <ComparisonTable
          headers={["サービス・コース", "塩分（1食）", "カロリー（1食）", "定期7食の料金（税込）", "送料（税込）"]}
          rows={[
            ["ウェルネスダイニング 塩分制限気配り宅配食", "2.0g以下（平均1.9g）", "300kcal以下（平均275kcal）", "5,702円（14食11,232円・21食16,178円）", "初回無料・定期14/21食無料・定期7食440円・都度880円"],
            ["Dr.つるかめキッチン 塩分制限気づかい御膳", "2.0g以下", "300kcal以下", "5,184円（14食9,828円・21食14,364円）", "定期無料・都度770円"],
            ["メディミール 塩分制限食", "2g以下", "300kcal以下", "5,270円（14食9,698円・21食14,018円）", "初回・定期無料・都度880円"],
            ["食宅便 塩分&カロリーケア", "2.0g未満", "301.0kcal目安", "5,180円（らくらく定期便）", "1梱包 定期940円・都度1,330円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※各社公式のコースページ・トップページで2026年11月25日に確認。出典URLは「4社の塩分制限コース」に記載しています。メディミールの料金は2026年11月18日・24日にも同額を確認。料金・送料は変わることがあります。</p>
        <p className="text-sm mb-6 leading-relaxed">1食の塩分の上限は4社ともほぼ同じです。比べるべきなのは、<strong>料金と送料の条件</strong>、<strong>メニューを自分で選べるか</strong>、そして<strong>1日の残りの食事をどう組み合わせるか</strong>です。料金・送料を他の宅食も含めて比べる場合は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>をご覧ください。</p>
        <SectionHeading id="data">食宅便 塩分ケア34品の塩分・カロリー（当サイト集計）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">食宅便の「塩分&カロリーケア」のコースページには、メニューごとの栄養成分（検査機関での分析値が原則と公式に記載）が掲載されています。2026年11月25日に掲載されていた34品を当サイトで集計しました。</p>
        <ComparisonTable
          headers={["項目", "最小", "中央値", "最大", "平均"]}
          rows={[
            ["食塩相当量", "1.5g", "1.9g", "1.9g", "1.84g"],
            ["エネルギー", "271kcal", "279kcal", "304kcal", "281kcal"],
            ["たんぱく質", "18.2g", "18.4g", "20.1g", "18.7g"],
            ["カリウム", "327mg", "516.5mg", "699mg", "497mg"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="http://shokutakubin.com/shop/c/c30/" target="_blank" rel="noopener noreferrer" className="text-accent underline">食宅便「塩分&カロリーケア」コースページ</a>（2026年11月25日取得・掲載34品）。同じ名前の重複は1品として数えています。集計は当サイト。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>塩分の分布: 1.5g＝2品・1.7g＝3品・1.8g＝5品・1.9g＝24品。すべて上限の2.0g未満で、24品が1.9gでした（上限ぎりぎりに合わせた設計）</li><li>たんぱく質は全品18.2g以上。減塩コースはたんぱく質を制限していません</li><li>カリウムは327〜699mgで、19品が500mgを超えていました。カリウムの制限がある方は、減塩コースではなくたんぱく・カリウムを調整したコースを確認してください（<Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent underline">腎臓病向けの宅配弁当</Link>）</li></ul>
        <SectionHeading id="services">4社の塩分制限コース</SectionHeading>
        <SubHeading>ウェルネスダイニング「塩分制限気配り宅配食」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「1食あたり食塩相当量2ｇ以下に調整しています」・カロリー制限300kcal以下</li><li>栄養価の目安（1食あたり・公式）: 平均275kcal・たんぱく質平均12.5g・食塩相当量平均1.9g・カリウム平均484mg・リン平均165mg</li><li>内容: 主菜1品＋副菜3品。メニューは選べない（管理栄養士のお任せ）</li><li>料金（税込）: 7食5,702円・14食11,232円・21食16,178円</li><li>送料（税込・公式FAQ）: 初回無料・定期は14食・21食が無料で7食のみ440円・都度880円（北海道・沖縄は別料金）。商品ページには定期注文について「ずっと送料無料」の表記もあります</li><li>出典: <a href="https://www.wellness-dining.com/kikubari/products/k130/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 塩分制限気配り宅配食</a>・<a href="https://www.wellness-dining.com/faq/kikubari/" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">公式ページには「1食あたり2.5gの減塩食もありますが…塩分2.0g以下のため、1日3食召し上がっても塩分摂取量を6.0gに控えることができます」とあります。サービス全体は<Link href="/articles/wellness-dining-reviews/" className="text-accent underline">ウェルネスダイニングの口コミ・評判</Link>で解説しています。</p>
        <SubHeading>Dr.つるかめキッチン「塩分制限気づかい御膳」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 【カロリー】300kcal以下・【塩分】2.0g以下。対象は「高血圧・心疾患が心配な方、腎臓病などで塩分を制限したい方」</li><li>掲載メニュー例（公式）: 塩分1.7〜2.0g・216〜248kcal（5品）</li><li>料金（税込）: 定期7食5,184円・14食9,828円・21食14,364円／都度7食7,228円（送料込み）</li><li>送料: 定期は無料・都度770円</li><li>定期の変更・解約: 次回お届け予定日の6日前まで</li><li>出典: <a href="https://tsurukame-kitchen.com/menu/post-93" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 塩分制限気づかい御膳</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">コースページの料金表には「税抜」の表記もありますが、同じページの本文に「5,184円（税込）」とあり、当サイトは税込として扱っています。詳しくは<Link href="/articles/tsurukame-reviews/" className="text-accent underline">Dr.つるかめキッチンの口コミ・評判</Link>へ。</p>
        <SubHeading>メディミール「塩分制限食」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「塩分やむくみが気になる方向けに開発したお食事です。カロリー300㎉以下、塩分を2g以下に調整しています」</li><li>料金（税込）: 7食5,270円・14食9,698円・21食14,018円（初回・定期・都度で同じ価格）</li><li>送料: 初回無料・定期無料。都度880円（税抜10,000円以上で無料＝21食は無料）</li><li>管理栄養士によるヒアリング（公式の案内）</li><li>出典: <a href="https://medimeal.net/restricted/lowsalt/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 塩分制限食</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">同じ価格体系で、たんぱく質＆塩分制限食やカロリー制限食もあります。<Link href="/articles/medimeal-kuchikomi/" className="text-accent underline">メディミールの口コミ・評判</Link>もあわせてご覧ください。</p>
        <SubHeading>食宅便「塩分&カロリーケア」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「1食あたりの塩分2.0g未満。エネルギー301.0kcal目安」</li><li>メニュー: コースページに34品の栄養成分を掲載（上の集計）。7食セットは毎週・隔週などから選択</li><li>料金（税込）: らくらく定期便7食5,180円</li><li>送料（税込）: 1梱包につき らくらく定期便940円・都度便1,330円（1梱包2セットまで）</li><li>出典: <a href="http://shokutakubin.com/shop/default.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式トップ</a>・<a href="http://shokutakubin.com/shop/c/c30/" target="_blank" rel="noopener noreferrer" className="text-accent underline">塩分&カロリーケア</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">日清医療食品が運営しています。送料が定期でもかかるため、7食あたりの支払いは6,120円（5,180円＋940円・当サイト計算）です。<Link href="/articles/shokutakubin-reviews/" className="text-accent underline">食宅便の口コミ・評判</Link>も参考にしてください。</p>
        <SectionHeading id="day">1日の塩分と宅配弁当の位置づけ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">厚生労働省「日本人の食事摂取基準（2025年版）」では、食塩相当量の目標量は18歳以上の男性7.5g未満・女性6.5g未満です（詳しくは<Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent underline">冷凍弁当の栄養バランス</Link>）。ウェルネスダイニングとDr.つるかめキッチンの公式ページは、高血圧の方の目安として1日6g未満を挙げています。</p>
        <ComparisonTable
          headers={["組み合わせ（1日）", "宅配弁当の塩分", "残りの食事に使える塩分（1日6g未満とした場合）"]}
          rows={[
            ["3食とも塩分2.0gの宅配弁当", "6.0g", "0g（ご飯・飲み物以外は足せない）"],
            ["2食を宅配弁当（1.9g×2）", "3.8g", "約2.2g（1食分）"],
            ["1食を宅配弁当（1.9g）", "1.9g", "約4.1g（2食分）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※当サイトの計算。1.9gは食宅便 塩分ケアの中央値・ウェルネスダイニングの公式平均。ご飯（白米）は食塩をほとんど含みませんが、みそ汁・漬物・ふりかけなどを足すと塩分が増えます。実際の目標量は主治医・管理栄養士の指示に従ってください。</p>
        <SectionHeading id="choose">選ぶときの確認ポイント</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>1食の塩分の上限: 4社とも2.0g（以下・未満）。メニューごとの実際の値を公開しているか</li><li>カロリー: 4社とも300kcal前後。体重を落としたくない方は量が足りるかも確認</li><li>ほかの制限: たんぱく質・カリウムの制限がある方は、減塩コースではなく専用コースを選ぶ</li><li>送料: 定期無料（つるかめ・メディミール）／定期7食のみ440円（ウェルネスダイニング）／定期でも1梱包940円（食宅便）</li><li>続け方: 定期の変更・解約の締切（つるかめは6日前まで）</li></ul>
        <p className="text-sm mb-6 leading-relaxed">高齢の家族向けなら<Link href="/articles/koureisha-osusume/" className="text-accent underline">高齢者向けの宅配弁当</Link>、かむ・飲み込む力に合わせるなら<Link href="/articles/kaigoshoku-takuhai/" className="text-accent underline">介護食の宅配</Link>も参考になります。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">減塩食の宅配は、ウェルネスダイニング・Dr.つるかめキッチン・メディミール・食宅便の4社が、1食の塩分2.0g以下（未満）のコースを公式に用意しています。上限は同じなので、料金と送料の条件、メニューを選べるか、1日の残りの食事との組み合わせで選ぶのが現実的です。</p>
        <p className="text-sm mb-6 leading-relaxed">たんぱく質やカリウムの制限もある方は、減塩コースではなく専用のコースを確認してください。料金・送料・基準は変わることがあります。ご利用前に、各社の公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">腎臓病向けの宅配弁当4社を比較</Link></li>
            <li><Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent hover:text-accent-dark transition-colors">冷凍弁当の栄養バランス</Link></li>
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者向けの宅配弁当</Link></li>
            <li><Link href="/articles/kaigoshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">介護食の宅配7社を比較</Link></li>
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">ウェルネスダイニングの口コミ・評判</Link></li>
            <li><Link href="/articles/tsurukame-reviews/" className="text-accent hover:text-accent-dark transition-colors">Dr.つるかめキッチンの口コミ・評判</Link></li>
            <li><Link href="/articles/medimeal-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">メディミールの口コミ・評判</Link></li>
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">食宅便の口コミ・評判</Link></li>
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
