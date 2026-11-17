import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ライフミールのメニュー一覧｜糖質30g・糖質15g・ご飯付きの全119品の栄養成分を公式の掲載値で集計【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ライフミール（LifeMeal）の公式メニュー一覧に掲載されているお弁当119品（糖質30g基準39品・糖質15g基準40品・ご飯付きセット40品）の栄養成分を集計しました。規格ごとのカロリー・たんぱく質・糖質・塩分の幅、たんぱく質の多いメニュー、料金と送料を整理しています（2026年11月17日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/lifemeal-menu/";
const OFFICIAL_URL = "https://l-meal.com/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ライフミール メニュー, ライフミール メニュー一覧, ライフミール 糖質15g, ライフミール ご飯付き, ライフミール 栄養成分, LifeMeal メニュー",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-17T00:00:00+09:00",
    modifiedTime: "2026-11-17T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "ライフミールのメニューは何種類ありますか？", answer: "2026年11月17日に公式のメニュー一覧を確認したところ、お弁当が119品（糖質30g基準39品・糖質15g基準40品・ご飯付きセット40品）と、スイーツが2品掲載されていました。" },
  { question: "糖質30g基準と糖質15g基準の違いは？", answer: "公式は、30g基準を栄養バランス重視、15g基準をより厳密に糖質を管理したい方向けとしています。掲載値では、30g基準の糖質が6.1〜26.1g（中央値 12.2g）、15g基準が6.6〜14.7g（中央値 11.4g）でした。" },
  { question: "ご飯付きのメニューはありますか？", answer: "あります。麦ごはんをセットにした「ご飯付きセット」が40品で、エネルギーは353〜515kcal（中央値 420kcal）でした。ご飯付きセットを1つでも選ぶと送料が250円増えます。" },
  { question: "塩分はどのくらいですか？", answer: "公式は全メニューの食塩相当量を2.5g以下に調整しているとしており、掲載値でも全品2.5g以下（中央値1.8g）でした。" },
  { question: "メニューは自分で選べますか？", answer: "選べます。人気メニューのおまかせが選ばれた状態から、お届け日の5日前まで自由に変更できます。苦手な食材は食材フィルタで選択肢から外せます。" },
  { question: "たんぱく質が多いメニューはありますか？", answer: "最も多いのはサバの味噌だれがけ弁当（ごはん付き）（21.6g）で、15g以上のメニューは26品でした（当サイト集計）。" },
];

const sections = [
  { id: "standards", label: "3つの規格と栄養成分の幅（当サイト集計）" },
  { id: "ingredients", label: "食材別の品数" },
  { id: "purpose", label: "目的別に見るメニュー" },
  { id: "new", label: "新メニューとリニューアル" },
  { id: "price", label: "料金・送料とメニューの選び方" },
  { id: "list-30", label: "糖質30g基準39品の一覧" },
  { id: "list-15", label: "糖質15g基準40品の一覧" },
  { id: "list-rice", label: "ご飯付きセット40品の一覧" },
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
          <span className="text-foreground">ライフミールのメニュー一覧</span>
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


export default function LifemealMenuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-17T00:00:00+09:00",
    dateModified: "2026-11-17T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "ライフミールのメニュー一覧" },
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
            <time dateTime="2026-11-17">公開: 2026年11月17日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクは公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ライフミール（LifeMeal）は、高齢者向けの配食サービスを運営する株式会社シルバーライフが販売する冷凍弁当の定期便です。メニューは<strong>「糖質30g基準」「糖質15g基準」</strong>の2つの規格と、麦ごはんをセットにした<strong>「ご飯付きセット」</strong>に分かれており、毎回好きなメニューを選べます。
          </p>
          <p className="mb-3">
            この記事では、2026年11月17日に公式のメニュー一覧と各メニューの詳細ページを確認し、掲載されていたお弁当119品（ほかにスイーツ2品）の栄養成分を書き出して、規格ごとの幅と中央値を当サイトで集計しました。メニュー名と数値は公式の掲載値のままです。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ライフミールのメニューの要点</p>
          <p className="text-sm leading-relaxed mb-4">公式のメニュー一覧には、お弁当が119品（糖質30g基準39品・糖質15g基準40品・ご飯付きセット40品）掲載されていました（2026年11月17日確認）。公式の案内どおり、全品の食塩相当量は2.5g以下でした。糖質15g基準は216〜251kcal（中央値 222.5kcal）と量が控えめで、ご飯付きセットは353〜515kcal（中央値 420kcal）・糖質52.6〜67.6g（中央値 58.6g）です。たんぱく質は最大21.6gで、15g以上のメニューは26品でした（当サイト集計）。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 集計でわかったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>全品の食塩相当量が2.5g以下</li><li>糖質の規格を2つから選べる</li><li>ご飯付きセットで主食まで届く</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>たんぱく質は中央値12.6gと多くない</li><li>ご飯付きセットは送料が250円上がる</li><li>初回分は解約・キャンセルできない</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ライフミール 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="standards">3つの規格と栄養成分の幅（当サイト集計）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式は、糖質30g基準を「糖質をコントロールしつつ栄養のバランスを重視したい方向け」、糖質15g基準を「より厳密に糖質を管理したい方向け」と説明しています。ご飯付きセットは「主菜・副菜に加え、麦ごはんをセットにしたメニュー」です。</p>
        <ComparisonTable
          headers={["項目", "糖質30g基準", "糖質15g基準", "ご飯付きセット"]}
          rows={[
            ["品数", "39品", "40品", "40品"],
            ["エネルギー", "169〜394kcal（中央値 278kcal）", "216〜251kcal（中央値 222.5kcal）", "353〜515kcal（中央値 420kcal）"],
            ["たんぱく質", "7.4〜20.8g（中央値 13.3g）", "6.7〜17.3g（中央値 10.8g）", "9.7〜21.6g（中央値 13.4g）"],
            ["脂質", "7.5〜31.2g（中央値 16.6g）", "10.8〜17.6g（中央値 14.6g）", "5.2〜22.1g（中央値 13.7g）"],
            ["糖質", "6.1〜26.1g（中央値 12.2g）", "6.6〜14.7g（中央値 11.4g）", "52.6〜67.6g（中央値 58.6g）"],
            ["食塩相当量", "1〜2.5g（中央値 2g）", "1.4〜2g（中央値 1.9g）", "1〜2.1g（中央値 1.6g）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://l-meal.com/products/list" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール メニュー一覧</a>と各メニューの詳細ページの「お弁当１個あたりの栄養価」（2026年11月17日確認）を当サイトが集計。糖質30g基準はスイーツ（ベルギーワッフル2品）を除いています。規格の説明は<a href="https://l-meal.com/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>・<a href="https://l-meal.com/feature" target="_blank" rel="noopener noreferrer" className="text-accent underline">特長</a>。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式の「全メニュー食塩相当量を2.5g以下に調整」のとおり、掲載値の最大は2.5gでした</li><li>公式トップの「430kcal以下のメニュー（ご飯付きセットは対象外）」のとおり、ご飯付き以外の最大は394kcalでした</li><li>糖質15g基準は糖質が14.7g以下にそろい、エネルギーも216〜251kcalと幅が小さい規格です</li><li>ご飯付きセットの糖質は中央値58.6gで、麦ごはんの分だけ他の規格より大きくなります</li></ul>
        <SectionHeading id="ingredients">食材別の品数</SectionHeading>
        <ComparisonTable
          headers={["主な食材（公式の分類）", "糖質30g基準", "糖質15g基準", "ご飯付きセット"]}
          rows={[
            ["鶏肉", "16品", "9品", "10品"],
            ["豚肉", "8品", "9品", "12品"],
            ["牛肉", "4品", "4品", "6品"],
            ["魚介", "7品", "14品", "9品"],
            ["その他", "4品", "4品", "3品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://l-meal.com/products/list" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧</a>の食材の絞り込み（牛肉・豚肉・鶏肉・魚介・その他）にもとづく当サイト集計（2026年11月17日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">糖質15g基準は魚介のメニューが多く、糖質30g基準は鶏肉、ご飯付きセットは豚肉のメニューが多い構成でした。メニュー選択の画面では食材フィルタで苦手な食材を外して選べます（公式FAQ）。</p>
        <SectionHeading id="purpose">目的別に見るメニュー</SectionHeading>
        <SubHeading>たんぱく質が多いメニュー（多い順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "規格", "たんぱく質", "エネルギー", "食塩相当量"]}
          rows={[
            ["サバの味噌だれがけ弁当（ごはん付き）", "ご飯付きセット", "21.6g", "475kcal", "1.7g"],
            ["タラのアクアパッツァ風弁当", "糖質30g基準", "20.8g", "210kcal", "2g"],
            ["鶏むね肉と白菜の豆乳カレー煮弁当", "糖質30g基準", "20.5g", "294kcal", "2.4g"],
            ["豚肉と茄子のカレーミートソース弁当", "糖質30g基準", "20.3g", "394kcal", "2.1g"],
            ["鶏肉の山賊焼き弁当（ごはん付き）", "ご飯付きセット", "19.7g", "390kcal", "1.7g"],
            ["タラのトマトソース弁当（ごはん付き）", "ご飯付きセット", "19g", "405kcal", "1.3g"],
            ["鶏むね肉と白菜の豆乳カレー煮弁当（ごはん付き）", "ご飯付きセット", "18.4g", "374kcal", "1.9g"],
            ["アジの塩焼き弁当（ごはん付き）", "ご飯付きセット", "17.8g", "414kcal", "1.6g"],
          ]}
        />
        <SubHeading>塩分が少ないメニュー（200kcal以上から少ない順に8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "規格", "食塩相当量", "たんぱく質", "エネルギー"]}
          rows={[
            ["鶏肉のレモンクリーム弁当", "糖質30g基準", "1g", "13.3g", "257kcal"],
            ["鶏の唐揚げ弁当（ごはん付き）", "ご飯付きセット", "1g", "12.5g", "437kcal"],
            ["鶏肉のレモンクリーム弁当（ごはん付き）", "ご飯付きセット", "1.1g", "14g", "402kcal"],
            ["豚ロース肉と長葱のコチュジャン炒め弁当（ごはん付き）", "ご飯付きセット", "1.2g", "13.8g", "515kcal"],
            ["家常豆腐弁当（ごはん付き）", "ご飯付きセット", "1.2g", "10.8g", "427kcal"],
            ["チーズタッカルビ弁当", "糖質30g基準", "1.3g", "14g", "236kcal"],
            ["タラのトマトソース弁当（ごはん付き）", "ご飯付きセット", "1.3g", "19g", "405kcal"],
            ["チーズタッカルビ弁当（ごはん付き）", "ご飯付きセット", "1.3g", "13.3g", "396kcal"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://l-meal.com/products/list" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール メニュー一覧</a>・各メニューの詳細ページの掲載値（2026年11月17日確認）を当サイトが並べ替え</p>
        <p className="text-sm mb-6 leading-relaxed">ライフミールはたんぱく質を多くとる設計のサービスではなく、全119品の中央値は12.6gでした。たんぱく質を重視する場合は、上の表のメニューを選ぶか、<Link href="/articles/kou-tanpaku-ranking/" className="text-accent underline">高たんぱくの宅配弁当の比較</Link>も参考にしてください。</p>
        <SectionHeading id="new">新メニューとリニューアル</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">2026年11月17日時点のメニュー一覧では、次の9品などに「NEW」の表示がありました。ご飯付きセットに新しいメニューが多く追加されています。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>糖15)タラの白醤油焼き弁当</li><li>タンドリーチキン弁当（ごはん付き）</li><li>チーズタッカルビ弁当（ごはん付き）</li><li>麻婆豆腐弁当（ごはん付き）</li><li>豚と野菜の塩麹炒め弁当（ごはん付き）</li><li>青椒肉絲弁当（ごはん付き）</li><li>ボルシチ風弁当（ごはん付き）</li><li>ハンバーグデミグラスソース弁当（ごはん付き）</li><li>真あじのしそ巻き天ぷら弁当（ごはん付き）</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://l-meal.com/products/list" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール メニュー一覧</a>（2026年11月17日確認）。このほか「RENEWAL」表示のメニューも多数あります。公式のお知らせでは「2026年8月31日製造分（2027年6月27日賞味期限分）より、献立変更など一部変更」と案内されています（<a href="https://l-meal.com/news/40" target="_blank" rel="noopener noreferrer" className="text-accent underline">商品リニューアルに伴う規格変更のご案内</a>）。</p>
        <SectionHeading id="price">料金・送料とメニューの選び方</SectionHeading>
        <ComparisonTable
          headers={["プラン（定期購入）", "1回の料金（税込）", "1食あたり"]}
          rows={[
            ["7食", "3,640円", "520円"],
            ["10食", "5,100円", "510円"],
            ["10食（初回限定）", "1,900円", "190円"],
            ["20食", "9,800円", "490円"],
            ["8回まとめ買い 10食", "34,188円", "427円"],
            ["8回まとめ買い 20食", "63,200円", "395円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://l-meal.com/shopping/plan" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール 料金プラン</a>（2026年11月17日確認）。送料は1回980円（沖縄県1,480円）、ご飯付きセットを1つでも選んだ場合は250円増しの1,230円（沖縄県1,730円）（<a href="https://l-meal.com/help/tradelaw" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>・<a href="https://l-meal.com/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>）。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>メニューは、人気メニューのおまかせが選ばれた状態から自由に変更できます。変更はお届け日の5日前まで</li><li>料理の一部を抜く対応は行っていません。食材フィルタで対象の食材を含むメニューを選択肢から外せます</li><li>おすすめメニュー機能では、ご飯付きセットは自動で選ばれません</li><li>配送の間隔は1〜4週間に1回。購入の回数・期間の制約はなく、初回分を除いて解約できます</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://l-meal.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール 公式トップ</a>・<a href="https://l-meal.com/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>（2026年11月17日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">10食プランを送料込みで計算すると、ご飯付きセットを含まない場合は（5,100円＋980円）÷10食＝608円、含む場合は（5,100円＋1,230円）÷10食＝633円です（当サイト計算・沖縄県を除く）。口コミや味の評判は<Link href="/articles/lifemeal-kuchikomi/" className="text-accent underline">ライフミールの口コミ・評判</Link>で整理しています。</p>
        <SectionHeading id="list-30">糖質30g基準39品の一覧</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">食材ごとに、たんぱく質の多い順に並べています。</p>
        <ComparisonTable
          headers={["メニュー名", "食材", "エネルギー", "たんぱく質", "脂質", "糖質", "食塩相当量"]}
          rows={[
            ["鶏むね肉と白菜の豆乳カレー煮弁当", "鶏肉", "294kcal", "20.5g", "18.6g", "10.4g", "2.4g"],
            ["鶏の唐揚げの黒酢葱ソース弁当", "鶏肉", "327kcal", "15.8g", "21.1g", "18.3g", "2.4g"],
            ["鶏の唐揚げみぞれ仕立て弁当", "鶏肉", "308kcal", "14.7g", "20.2g", "16.1g", "2g"],
            ["鶏肉のトマトすき焼き弁当", "鶏肉", "238kcal", "14.5g", "15.3g", "9.4g", "1.8g"],
            ["鶏肉とブロッコリーの濃厚ごまクリーム弁当", "鶏肉", "300kcal", "14.2g", "21.1g", "11.2g", "1.6g"],
            ["チーズタッカルビ弁当", "鶏肉", "236kcal", "14g", "15.4g", "8.7g", "1.3g"],
            ["チキンステーキハニーマスタードソース弁当", "鶏肉", "213kcal", "13.8g", "10.4g", "14.2g", "2.2g"],
            ["タンドリーチキン弁当", "鶏肉", "250kcal", "13.7g", "16.9g", "8.5g", "1.8g"],
            ["鶏肉と菜の花のアーリオ・オーリオ弁当", "鶏肉", "358kcal", "13.7g", "28.5g", "9.1g", "1.9g"],
            ["鶏肉のレモンクリーム弁当", "鶏肉", "257kcal", "13.3g", "14.2g", "17.9g", "1g"],
            ["デミグラスチキン弁当", "鶏肉", "253kcal", "12.9g", "16.6g", "10.8g", "1.6g"],
            ["鶏肉の照焼弁当", "鶏肉", "192kcal", "12.7g", "7.9g", "15.7g", "2.2g"],
            ["ローストチキン赤ワインソース弁当", "鶏肉", "305kcal", "12.6g", "21.5g", "11.1g", "1.8g"],
            ["鶏肉と玉子のチリソース炒め弁当", "鶏肉", "239kcal", "12.5g", "14.4g", "14.3g", "1.9g"],
            ["チキンのバジル炒め弁当", "鶏肉", "205kcal", "11.8g", "13.2g", "8.5g", "1.7g"],
            ["酢鶏弁当", "鶏肉", "279kcal", "11.2g", "14.9g", "24.4g", "2g"],
            ["豚肉と茄子のカレーミートソース弁当", "豚肉", "394kcal", "20.3g", "28.6g", "9.9g", "2.1g"],
            ["豚と野菜の塩麹炒め弁当", "豚肉", "356kcal", "15.6g", "25.5g", "11.9g", "2g"],
            ["豚ロース肉と長葱のコチュジャン炒め弁当", "豚肉", "352kcal", "15.2g", "22.5g", "18.5g", "1.7g"],
            ["ヒレカツトマトチーズかけ弁当", "豚肉", "290kcal", "12.6g", "16.4g", "21.4g", "2.2g"],
            ["ヒレカツの玉子とじ弁当", "豚肉", "292kcal", "12.5g", "16.4g", "21.8g", "1.9g"],
            ["回鍋肉弁当", "豚肉", "310kcal", "11.5g", "23.9g", "11.7g", "1.7g"],
            ["レバニラ炒め弁当", "豚肉", "217kcal", "10.6g", "10.9g", "17.5g", "2.2g"],
            ["野菜たっぷりキーマカレー弁当", "豚肉", "229kcal", "10.5g", "14.3g", "10.8g", "2g"],
            ["ビーフシチューチーズのせ弁当", "牛肉", "323kcal", "14.4g", "23.3g", "12.2g", "1.6g"],
            ["牛肉ときのこの甘辛炒め弁当", "牛肉", "267kcal", "9.5g", "18.5g", "14.1g", "1.9g"],
            ["牛肉と茄子の麻婆ソース弁当", "牛肉", "245kcal", "9.4g", "17.4g", "10.5g", "2.3g"],
            ["ビーフストロガノフ弁当", "牛肉", "310kcal", "9g", "23.8g", "12g", "2.1g"],
            ["タラのアクアパッツァ風弁当", "魚介", "210kcal", "20.8g", "10.3g", "6.1g", "2g"],
            ["サバの香味野菜ソース弁当", "魚介", "278kcal", "17.7g", "18.2g", "14.2g", "1.5g"],
            ["マスのちゃんちゃん焼き弁当", "魚介", "239kcal", "16.8g", "13.3g", "11.1g", "2g"],
            ["シーフードパエリア弁当", "魚介", "244kcal", "13g", "8.3g", "26.1g", "2.1g"],
            ["赤魚のみぞれあんかけ弁当", "魚介", "169kcal", "12.7g", "7.5g", "10.4g", "2.2g"],
            ["海老のトマトチリソース弁当", "魚介", "224kcal", "10.5g", "10.3g", "19.5g", "2.1g"],
            ["フィッシュアンドチップス弁当", "魚介", "394kcal", "7.4g", "31.2g", "16.5g", "2g"],
            ["厚揚げのネギ味噌チーズ弁当", "その他", "289kcal", "15.6g", "21.2g", "7.8g", "2.2g"],
            ["ハンバーグおろしソース弁当", "その他", "291kcal", "15.2g", "16.2g", "16.1g", "2.2g"],
            ["チーズデミハンバーグ弁当", "その他", "313kcal", "14.7g", "20.5g", "15.1g", "1.6g"],
            ["とろける卵のデミオムライス弁当", "その他", "241kcal", "7.6g", "12g", "24.4g", "2.5g"],
          ]}
        />
        <SectionHeading id="list-15">糖質15g基準40品の一覧</SectionHeading>
        <ComparisonTable
          headers={["メニュー名", "食材", "エネルギー", "たんぱく質", "脂質", "糖質", "食塩相当量"]}
          rows={[
            ["糖15)ズッキーニとチキンのトマト煮弁当", "鶏肉", "244kcal", "16.4g", "13.3g", "12.3g", "2g"],
            ["糖15)鶏肉とブロッコリーの濃厚ごまクリーム弁当", "鶏肉", "229kcal", "11.5g", "14.2g", "11.4g", "1.5g"],
            ["糖15)鶏の照焼き弁当", "鶏肉", "242kcal", "11.3g", "14.8g", "13.3g", "2g"],
            ["糖15)鶏肉の赤ワインソース弁当", "鶏肉", "218kcal", "11.2g", "12.8g", "11.4g", "2g"],
            ["糖15)デミグラスチキン弁当", "鶏肉", "218kcal", "10.8g", "15.2g", "7.1g", "1.8g"],
            ["糖15)若鶏の利休焼き弁当", "鶏肉", "216kcal", "10.7g", "13.1g", "12g", "1.9g"],
            ["糖15)炭火焼チキン（醤油ソース）弁当", "鶏肉", "217kcal", "10.3g", "14.2g", "10.3g", "1.9g"],
            ["糖15)チーズタッカルビ弁当", "鶏肉", "219kcal", "10.2g", "14.2g", "11.1g", "1.5g"],
            ["糖15)鶏の柚子胡椒焼き弁当", "鶏肉", "218kcal", "10g", "14.3g", "11.1g", "1.9g"],
            ["糖15)家常豆腐弁当", "豚肉", "222kcal", "12.5g", "12.6g", "11.3g", "2g"],
            ["糖15)豚肉と茄子のカレーミートソース弁当", "豚肉", "235kcal", "11.5g", "16.4g", "9.1g", "1.9g"],
            ["糖15)豚と野菜の塩麹炒め弁当", "豚肉", "216kcal", "10.8g", "12.7g", "11.9g", "1.9g"],
            ["糖15)ヒレカツトマトチーズかけ弁当", "豚肉", "227kcal", "10.8g", "14.6g", "13g", "1.9g"],
            ["糖15)青椒肉絲弁当", "豚肉", "219kcal", "10.4g", "13.5g", "10.5g", "2g"],
            ["糖15)ヒレカツの玉子とじ弁当", "豚肉", "237kcal", "9.1g", "15.8g", "13.8g", "1.7g"],
            ["糖15)ゴボウと豚肉の柳川風弁当", "豚肉", "222kcal", "8.8g", "15.3g", "9g", "1.8g"],
            ["糖15)回鍋肉弁当", "豚肉", "221kcal", "8.8g", "15g", "12.6g", "1.4g"],
            ["糖15)豚肉の生姜焼き弁当", "豚肉", "221kcal", "8g", "14.7g", "14g", "2g"],
            ["糖15)牛肉と茄子の麻婆ソース弁当", "牛肉", "231kcal", "13.8g", "14.4g", "8.9g", "1.9g"],
            ["糖15)牛肉のケイジャンソース炒め弁当", "牛肉", "226kcal", "9.6g", "14.7g", "11g", "2g"],
            ["糖15)ボルシチ風弁当", "牛肉", "216kcal", "7.2g", "13.8g", "13.1g", "1.9g"],
            ["糖15)牛肉のトマト煮弁当", "牛肉", "223kcal", "6.7g", "17.6g", "6.6g", "1.7g"],
            ["糖15)赤魚の塩焼き弁当", "魚介", "236kcal", "17.3g", "11.3g", "14g", "1.9g"],
            ["糖15)マスのちゃんちゃん焼き弁当", "魚介", "219kcal", "16.5g", "10.8g", "11.6g", "1.8g"],
            ["糖15)タラのトマトソース弁当", "魚介", "217kcal", "16.2g", "12.3g", "9.4g", "1.8g"],
            ["糖15)サバの味噌だれがけ弁当", "魚介", "234kcal", "15.6g", "12.6g", "11.5g", "1.9g"],
            ["糖15)アジと茄子の胡麻味噌だれ弁当", "魚介", "246kcal", "14g", "15.2g", "13.8g", "1.8g"],
            ["糖15)サバの香味野菜ソース弁当", "魚介", "220kcal", "13.7g", "13.3g", "8.8g", "1.6g"],
            ["糖15)サーモンフライ弁当", "魚介", "234kcal", "11.8g", "16.1g", "12.9g", "1.9g"],
            ["糖15)真あじのしそ巻き天ぷら弁当", "魚介", "219kcal", "11.5g", "11.4g", "14.1g", "2g"],
            ["糖15)タラの西京焼き弁当", "魚介", "223kcal", "11.3g", "16.1g", "6.6g", "1.7g"],
            ["糖15)タラの白醤油焼き弁当", "魚介", "235kcal", "11.2g", "16g", "10.3g", "2g"],
            ["糖15)白身魚の和風あんかけ弁当", "魚介", "221kcal", "10.7g", "12.3g", "14.4g", "1.9g"],
            ["糖15)あじメンチカツ弁当", "魚介", "251kcal", "9.5g", "16.6g", "13.1g", "2g"],
            ["糖15)野菜たっぷりエビマヨ弁当", "魚介", "239kcal", "9.5g", "15g", "14.7g", "2g"],
            ["糖15)アジの南蛮漬け弁当", "魚介", "218kcal", "7g", "14.5g", "13.5g", "1.8g"],
            ["糖15)厚揚げのネギ味噌チーズ弁当", "その他", "223kcal", "9.7g", "15.5g", "9.5g", "1.7g"],
            ["糖15)和風ハンバーグ弁当", "その他", "226kcal", "9.6g", "15.2g", "11.4g", "2g"],
            ["糖15)豆腐おろしハンバーグ弁当", "その他", "228kcal", "8.2g", "15.3g", "11.4g", "2g"],
            ["糖15)ハンバーグデミグラスソース弁当", "その他", "219kcal", "7.2g", "15.9g", "9.9g", "2g"],
          ]}
        />
        <SectionHeading id="list-rice">ご飯付きセット40品の一覧</SectionHeading>
        <ComparisonTable
          headers={["メニュー名", "食材", "エネルギー", "たんぱく質", "脂質", "糖質", "食塩相当量"]}
          rows={[
            ["鶏肉の山賊焼き弁当（ごはん付き）", "鶏肉", "390kcal", "19.7g", "8.9g", "52.6g", "1.7g"],
            ["鶏むね肉と白菜の豆乳カレー煮弁当（ごはん付き）", "鶏肉", "374kcal", "18.4g", "7.9g", "55.3g", "1.9g"],
            ["鶏の照焼き弁当（ごはん付き）", "鶏肉", "444kcal", "16.4g", "16.3g", "55.7g", "1.6g"],
            ["タンドリーチキン弁当（ごはん付き）", "鶏肉", "446kcal", "16.2g", "18g", "52.8g", "1.7g"],
            ["ズッキーニとチキンのトマト煮込み弁当（ごはん付き）", "鶏肉", "455kcal", "16g", "17.8g", "55.6g", "2.1g"],
            ["若鶏の利休焼き弁当（ごはん付き）", "鶏肉", "449kcal", "14.3g", "15.4g", "60.7g", "1.8g"],
            ["鶏肉のレモンクリーム弁当（ごはん付き）", "鶏肉", "402kcal", "14g", "11.3g", "58.8g", "1.1g"],
            ["鶏肉とインゲンの味噌ダレ焼き弁当（ごはん付き）", "鶏肉", "440kcal", "13.5g", "16.3g", "56.6g", "1.5g"],
            ["チーズタッカルビ弁当（ごはん付き）", "鶏肉", "396kcal", "13.3g", "12.6g", "53.9g", "1.3g"],
            ["鶏の唐揚げ弁当（ごはん付き）", "鶏肉", "437kcal", "12.5g", "11.8g", "67.6g", "1g"],
            ["豚肉と茄子のカレーミートソース弁当（ごはん付き）", "豚肉", "441kcal", "15.1g", "17g", "54.8g", "1.9g"],
            ["豚と野菜の塩麹炒め弁当（ごはん付き）", "豚肉", "434kcal", "15.1g", "14.7g", "56.9g", "1.6g"],
            ["ポークトマト煮弁当（ごはん付き）", "豚肉", "483kcal", "14g", "21.2g", "54.6g", "1.6g"],
            ["豚ロース肉と長葱のコチュジャン炒め弁当（ごはん付き）", "豚肉", "515kcal", "13.8g", "22.1g", "61g", "1.2g"],
            ["豚肉とチンゲン菜の塩ダレ炒め弁当（ごはん付き）", "豚肉", "409kcal", "13.5g", "13.8g", "54.2g", "1.6g"],
            ["回鍋肉弁当（ごはん付き）", "豚肉", "442kcal", "13.2g", "16.4g", "57.3g", "1.3g"],
            ["野菜たっぷりキーマカレー弁当（ごはん付き）", "豚肉", "434kcal", "12.9g", "15.3g", "58.4g", "1.8g"],
            ["レバニラ炒め弁当（ごはん付き）", "豚肉", "405kcal", "12.8g", "13.1g", "56.3g", "1.7g"],
            ["豚肉の甘辛炒め弁当（ごはん付き）", "豚肉", "424kcal", "12.8g", "13.9g", "60.6g", "1.4g"],
            ["豚肉の生姜焼き弁当（ごはん付き）", "豚肉", "411kcal", "12g", "13g", "59.3g", "1.7g"],
            ["家常豆腐弁当（ごはん付き）", "豚肉", "427kcal", "10.8g", "13.5g", "63.5g", "1.2g"],
            ["青椒肉絲弁当（ごはん付き）", "豚肉", "386kcal", "10.6g", "10.5g", "58.8g", "1.3g"],
            ["牛肉ときのこの甘辛炒め弁当（ごはん付き）", "牛肉", "489kcal", "15.4g", "18.2g", "62.9g", "1.9g"],
            ["牛肉のオイスター炒め弁当（ごはん付き）", "牛肉", "413kcal", "13.2g", "12.7g", "58.4g", "1.6g"],
            ["すき焼き風煮弁当（ごはん付き）", "牛肉", "383kcal", "11.6g", "10.2g", "57.8g", "1.7g"],
            ["ボルシチ風弁当（ごはん付き）", "牛肉", "433kcal", "10.5g", "15.9g", "58.9g", "1.7g"],
            ["牛肉と茄子の麻婆ソース弁当（ごはん付き）", "牛肉", "444kcal", "10.3g", "16.2g", "61.1g", "1.5g"],
            ["韓国風焼肉炒め弁当（ごはん付き）", "牛肉", "454kcal", "9.7g", "17.7g", "60.5g", "1.8g"],
            ["サバの味噌だれがけ弁当（ごはん付き）", "魚介", "475kcal", "21.6g", "15g", "60.3g", "1.7g"],
            ["タラのトマトソース弁当（ごはん付き）", "魚介", "405kcal", "19g", "12.2g", "52.7g", "1.3g"],
            ["アジの塩焼き弁当（ごはん付き）", "魚介", "414kcal", "17.8g", "8g", "64.6g", "1.6g"],
            ["タラの白醤油焼き弁当（ごはん付き）", "魚介", "402kcal", "13.7g", "11.8g", "56.6g", "1.4g"],
            ["ホッケのみりん焼き弁当（ごはん付き）", "魚介", "416kcal", "13.4g", "10.2g", "65g", "1.7g"],
            ["アジの南蛮漬け弁当（ごはん付き）", "魚介", "411kcal", "13g", "13g", "58.3g", "2g"],
            ["海老としめじの玉子とじ弁当（ごはん付き）", "魚介", "408kcal", "12.5g", "11.7g", "60.9g", "1.6g"],
            ["真あじのしそ巻き天ぷら弁当（ごはん付き）", "魚介", "353kcal", "11.6g", "5.2g", "61.8g", "1.6g"],
            ["野菜たっぷりエビマヨ弁当（ごはん付き）", "魚介", "433kcal", "10.7g", "15.3g", "60.8g", "1.9g"],
            ["麻婆豆腐弁当（ごはん付き）", "その他", "409kcal", "14.4g", "13.8g", "54.6g", "1.7g"],
            ["チリソースミートボール弁当（ごはん付き）", "その他", "395kcal", "11.9g", "10.9g", "59.8g", "1.8g"],
            ["ハンバーグデミグラスソース弁当（ごはん付き）", "その他", "398kcal", "11.5g", "11.6g", "59g", "2g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://l-meal.com/products/list" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール メニュー一覧</a>・各メニューの詳細ページ（2026年11月17日確認）。メニューは入れ替わるため、注文の前に公式の一覧でご確認ください。</p>
        <OfficialButton>ライフミール 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ライフミールの公式メニュー一覧には、糖質30g基準・糖質15g基準・ご飯付きセットの3つで計119品のお弁当が掲載されていました。全品の食塩相当量は2.5g以下で、糖質を厳しく抑えたいなら15g基準、主食まで任せたいならご飯付きセットというように、規格で選び分けられます。たんぱく質は多めではないため、重視する場合はメニューごとの値を確認して選んでください。</p>
        <p className="text-sm mb-6 leading-relaxed">メニュー・栄養成分・料金は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>ライフミール 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/lifemeal-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ライフミールの口コミ・評判</Link></li>
            <li><Link href="/articles/gohan-tsuki-reitou-bento/" className="text-accent hover:text-accent-dark transition-colors">ご飯付きの冷凍弁当がある宅配食</Link></li>
            <li><Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">糖質制限向けの宅配弁当の比較</Link></li>
            <li><Link href="/articles/1shoku-200yen-dai/" className="text-accent hover:text-accent-dark transition-colors">1食200円台から始められる宅配弁当</Link></li>
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
