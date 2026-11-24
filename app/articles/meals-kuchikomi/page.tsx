import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ミールズ（Meals）の口コミ・評判は？デリッシュキッチンの冷凍弁当の料金・送料と全63メニューの栄養値を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "デリッシュキッチンの冷凍宅配弁当「ミールズ（Meals）」の口コミ・評判を調べる前に、公式で確認できる事実をまとめました。7〜28食の料金と送料込みの1食あたり（当サイト計算）、販売中63メニューの栄養値の集計、解約・1回だけの利用の条件を掲載しています（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/meals-kuchikomi/";
const OFFICIAL_URL = "https://meals.delishkitchen.tv/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ミールズ 口コミ, Meals 口コミ, ミールズ 評判, デリッシュキッチン 冷凍弁当, デリッシュキッチン ミールズ, ミールズ 料金, ミールズ 送料, ミールズ 解約",
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
  { question: "ミールズは1回だけでやめられますか？", answer: "定期回数の縛りはなく、2回目のお届け分の注文確定（発送予定日の4日前 午前7:00）までにマイページで停止すれば、1回だけの利用もできます（一部キャンペーンの条件を除く）。" },
  { question: "ミールズの送料はいくらですか？", answer: "7・10・14食セットは990円、21食セットは1,190円、28食セットは1,690円です（税込・北海道と沖縄県を除く）。北海道は2,490〜3,490円、沖縄県は1,890〜3,490円です。" },
  { question: "1食あたりはいくらですか？", answer: "公式の表示は7食928円〜28食697円（税込・送料別）です。送料を含めると、当サイトの計算で約1,069円〜756円です。" },
  { question: "どんな支払い方法がありますか？", answer: "クレジットカード（Visa・Mastercard・AMEX・JCB・Diners Club・Discover）、Amazon Pay、auかんたん決済・d払い・ソフトバンクまとめて支払いです。" },
  { question: "賞味期限はどのくらいですか？", answer: "公式は、製造から1年間で、お届けから3ヶ月以内に食べる想定で届けているとしています（一部の商品を除く）。" },
];

const sections = [
  { id: "about", label: "ミールズ（Meals）とは" },
  { id: "voices", label: "口コミの掲載状況（公式に掲載の利用者の声3件）" },
  { id: "price", label: "料金と送料込みの1食あたり" },
  { id: "nutrition", label: "全63メニューの栄養値を集計" },
  { id: "cancel", label: "停止・スキップ・解約と1回だけの利用" },
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
          <span className="text-foreground">ミールズ（Meals）の口コミ・評判</span>
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


export default function MealsKuchikomiPage() {
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
      { "@type": "ListItem", position: 3, name: "ミールズ（Meals）の口コミ・評判" },
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
            <strong>ミールズ（Meals）</strong>は、レシピ動画サービス「デリッシュキッチン」の株式会社エブリーが販売する、冷凍宅配弁当の定期便です。主菜1品と副菜3〜4品のお弁当を、7〜28食のセットで届けます。
          </p>
          <p className="mb-3">
            口コミを調べたところ、2026年11月25日時点で公式サイトに掲載されている利用者の声は3件（「個人の感想です」と表示）でした。この記事では、その3件を原文で紹介したうえで、料金・送料と送料込みの1食あたりを計算し、公式のメニュー一覧に載っている63品の栄養値を当サイトで集計しています。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ミールズの口コミの要点</p>
          <p className="text-sm leading-relaxed mb-4">公式サイトの利用者の声は3件で、見た目・味と献立を考える手間が省けることを挙げています。料金は7食6,490円〜28食19,490円（税込）で、送料（990〜1,690円）を含めると1食あたり約756〜1069円です。お弁当60品は、公式が示す基準のうちカロリー350kcal以下・たんぱく質20g以上・塩分2.5g以下を60品すべてが満たしていました。定期回数の縛りはなく、1回だけの利用もできます（一部キャンペーンを除く）。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式情報から分かる良い点</p>
              <ul className="space-y-1 list-disc list-inside"><li>お弁当60品すべてがたんぱく質20g以上</li><li>定期回数の縛りがなく、1回だけの利用もできる</li><li>支払いにAmazon Pay・キャリア決済も使える</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>7食セットは送料込みで1食1,000円を超える</li><li>北海道・沖縄県は送料が高い（1,890〜3,490円）</li><li>注文確定後のキャンセル・変更はできない</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ミールズ 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ミールズ（Meals）とは</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容（2026年11月25日確認）"]}
          rows={[
            ["販売業者", "株式会社エブリー（東京都港区）"],
            ["形態", "冷凍宅配弁当の定期便（主菜1品・副菜3〜4品）。真空パックで冷凍のまま届く"],
            ["メニュー", "メニュー一覧に販売中63種（トップの表記は「約60種類」）"],
            ["栄養基準（1食）", "カロリー350kcal以下・たんぱく質20g以上・糖質25g以下・炭水化物35g以下・脂質20g以下・塩分2.5g以下・16品目以上・野菜120g以上（満たすことを目指す基準）"],
            ["食数・間隔", "7・10・14・21・28食。1週間〜4週間（1ヶ月）おき（4週間おきは2回目以降に選択）"],
            ["配送", "ヤマト運輸のクール便。お届け日と時間帯を選べる"],
            ["賞味期限", "製造から1年間（お届けから3ヶ月以内に食べる想定・一部商品を除く）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://meals.delishkitchen.tv/" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップページ</a>・<a href="https://meals.delishkitchen.tv/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧</a>・<a href="https://meals.delishkitchen.tv/info/law_info" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月25日確認）。</p>
        <SectionHeading id="voices">口コミの掲載状況（公式に掲載の利用者の声3件）</SectionHeading>
        <ComparisonTable
          headers={["利用状況（公式の表示）", "本文（原文）"]}
          rows={[
            ["二人暮らし（14食／1ヶ月おき）", "「見た目が彩りよくスゴくおいしそう。もちろん味も良いです！パッケージ外から中身が見えるのが気に入ってます。」"],
            ["一人暮らし（14食／1ヶ月おき）", "「献立を考える時間を他の時間に活用できるようになった！バランスもカロリーもいいので、安心して食べられます！」"],
            ["子育て家庭（7食／1ヶ月おき）", "「どれもおいしくて“はずれ”がほとんどなく、素朴な味が良いです。タンパク質がメイン以外の料理にも使われているのが嬉しい。」"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://meals.delishkitchen.tv/" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップページ</a>の「お客様の声」（2026年11月25日確認）。公式は「※個人の感想です」と表示しています。販売元が選んで掲載したもので、投稿の時期は記載がありません。</p>
        <p className="text-sm mb-6 leading-relaxed">3件とも、見た目や味、献立を考える手間が減ったこと、栄養のバランスを評価する内容です。不満や改善点を述べた声は掲載されていません。当サイトでは、口コミサイトや個人のレビューは引用していないため、満足度の全体像はこの3件からは判断できません。以下では、注文前に確認できる料金・栄養値・解約の条件を整理します。</p>
        <SectionHeading id="price">料金と送料込みの1食あたり</SectionHeading>
        <ComparisonTable
          headers={["セット", "価格（税込・定期便の通常価格）", "公式表示の1食あたり", "送料（北海道・沖縄県を除く）", "送料込みの1食あたり（当サイト計算）"]}
          rows={[
            ["7食", "6,490円", "928円", "990円", "1069円"],
            ["10食", "7,990円", "799円", "990円", "898円"],
            ["14食", "10,489円", "750円", "990円", "820円"],
            ["21食", "14,990円", "714円", "1,190円", "770円"],
            ["28食", "19,490円", "697円", "1,690円", "756円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://meals.delishkitchen.tv/" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップページ</a>の料金・<a href="https://meals.delishkitchen.tv/info/law_info" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>の配送料（2026年11月25日確認）。送料は北海道が2,490〜3,490円、沖縄県が1,890〜3,490円です。</p>
        <p className="text-sm mb-6 leading-relaxed">食数が増えるほど1食あたりは下がり、送料込みでは7食セットが約1,069円、28食セットが約756円です。送料は7〜14食が同じ990円のため、7食より14食のほうが送料の負担は半分になります。ほかの宅配弁当との料金の比較は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>で扱っています。</p>
        <SectionHeading id="nutrition">全63メニューの栄養値を集計</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式のメニュー一覧には、メニューごとにカロリー・たんぱく質・塩分が表示されています。2026年11月25日時点の63品を書き出し、主菜と副菜のお弁当60品（蜜焼き芋・麻辣湯・温野菜サラダ(ごまドレッシング)の3品を除く）を当サイトで集計しました。</p>
        <ComparisonTable
          headers={["項目", "公式の基準（1食）", "お弁当60品の範囲（中央値）", "基準を満たす品数"]}
          rows={[
            ["カロリー", "350kcal以下", "276〜350kcal（332kcal）", "60品"],
            ["たんぱく質", "20g以上", "20.0〜28.6g（21.4g）", "60品"],
            ["塩分", "2.5g以下", "1.1〜2.5g（2.3g）", "60品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://meals.delishkitchen.tv/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧</a>（2026年11月25日確認）。範囲・中央値・品数は当サイトの集計です。糖質・脂質・品目数・野菜量は一覧に表示がないため、集計していません。</p>
        <p className="text-sm mb-6 leading-relaxed">お弁当60品は、表示されている3項目の基準をすべて満たしていました。ただし塩分の中央値は2.3gで、上限の2.5gに近いメニューが多くあります。除いた3品のうち麻辣湯は403kcal・塩分3.2gで、基準の対象外の商品と考えられます。減塩を重視する場合は<Link href="/articles/genenshoku-takuhai/" className="text-accent underline">減塩食の宅配</Link>も比べてみてください。</p>
        <SectionHeading id="cancel">停止・スキップ・解約と1回だけの利用</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>定期便はマイページからいつでも停止（解約）・再開できる。停止の手続きは初回のお届け後から</li><li>次回だけ休むときは「1回おやすみ」</li><li>手続きの締切は次回発送予定日の4日前 午前7:00</li><li>定期回数の縛りはない（一部キャンペーンの条件を除く）。2回目の注文確定までに停止すれば1回だけの利用もできる</li><li>注文確定後は、客都合のキャンセルや内容の変更はできない</li><li>支払いはクレジットカード（Visa・Mastercard・AMEX・JCB・Diners Club・Discover）・Amazon Pay・auかんたん決済・d払い・ソフトバンクまとめて支払い</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://meals.delishkitchen.tv/" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップページ</a>の「停止・スキップ・解約」「よくあるご質問」・<a href="https://meals.delishkitchen.tv/info/law_info" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月25日確認）。</p>
        <SectionHeading id="fit">向いている人・向いていない人</SectionHeading>
        <SubHeading>向いている人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>たんぱく質をとりつつ、カロリーを350kcal以内に抑えたい人</li><li>定期便の縛りがないサービスで、まず1回試したい人</li><li>14食以上をまとめて冷凍庫に置ける人</li></ul>
        <SubHeading>向いていない人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>7食だけを毎回頼みたい人（送料込みで1食1,000円を超える）</li><li>塩分を1食2g未満に抑えたい人（中央値2.3g）</li><li>北海道・沖縄県にお住まいで送料を抑えたい人</li></ul>
        <p className="text-sm mb-6 leading-relaxed">ほかの冷凍弁当のお試しは<Link href="/articles/otameshi-set-osusume/" className="text-accent underline">宅配弁当のお試しセットおすすめ</Link>、高たんぱくの冷凍弁当は<Link href="/articles/kou-tanpaku-ranking/" className="text-accent underline">高たんぱくの宅配弁当</Link>で比べています。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ミールズの公式サイトに掲載されている利用者の声は3件で、味・見た目と、献立を考える手間が減ったことを評価しています。料金は7食6,490円〜28食19,490円（税込）、送料込みの1食あたりは約756〜1,069円です。お弁当60品はすべて、カロリー350kcal以下・たんぱく質20g以上・塩分2.5g以下の基準を満たしていました。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・メニュー・送料は変わることがあります。ご注文前に公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>ミールズ 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">高たんぱくの宅配弁当</Link></li>
            <li><Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark transition-colors">宅配弁当のお試しセットおすすめ</Link></li>
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の口コミ・評判</Link></li>
            <li><Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームの口コミ・評判</Link></li>
            <li><Link href="/articles/genenshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">減塩食の宅配</Link></li>
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
