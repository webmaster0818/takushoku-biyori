import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ワタミの宅食ダイレクトのメニュー一覧｜いつでも三菜95品・五菜91品・満足ディッシュ18品の栄養成分と人気ランキング【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ワタミの宅食ダイレクトの定期「選べるセット」で選べるメニューを、公式のメニュー画面から一覧にしました（2026年11月18日時点・いつでも三菜95品・いつでも五菜91品・満足ディッシュ18品）。シリーズ別のカロリー・塩分、同じ主菜の三菜と五菜の違い、公式の10月ランキング上位5品を集計しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/watami-direct-menu/";
const OFFICIAL_URL = "https://www.watami-takushoku-direct.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ワタミの宅食ダイレクト メニュー, ワタミの宅食ダイレクト メニュー一覧, ワタミの宅食ダイレクト 人気メニュー, ワタミの宅食ダイレクト 選べるセット, いつでも三菜 メニュー, いつでも五菜 メニュー, 満足ディッシュ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-18T00:00:00+09:00",
    modifiedTime: "2026-11-18T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "ワタミの宅食ダイレクトのメニューは何種類ありますか？", answer: "2026年11月18日時点の定期「選べるセット」のメニュー画面では、いつでも三菜95品・いつでも五菜91品・満足ディッシュ18品で、ほかにスープ・鍋・カレー・アイスなど16品がありました。" },
  { question: "人気のメニューは？", answer: "公式の「【10月】選べるセットランキングトップ5」（2026年11月6日掲載）では、1位 佐瀬さんたちのピーマン肉詰め、2位 手仕込みヒレカツ、3位 銀鮭の塩焼き、4位 肉じゃが、5位 霧島黒豚の手ごねハンバーグでした。" },
  { question: "三菜と五菜はどう違いますか？", answer: "三菜は主菜1品＋副菜2品、五菜は主菜1品＋副菜4品です。主菜名が同じ89品で比べると、五菜はエネルギーが中央値で56kcal、塩分が0.5g多くなっていました（当サイト集計）。" },
  { question: "満足ディッシュとは？", answer: "公式の説明では「全体量200g以上＆主菜サイズUP、450kcal以下・食塩相当量2.5g以下」のシリーズです。2026年11月18日時点で18品あり、掲載値はすべてこの条件内でした。" },
  { question: "メニューは自分で選べますか？", answer: "定期・都度とも「選べるセット」なら10食（定期は20食も）を自分で選べます。メニューを選べない「おまかせセット」もあります。定期の選べるセットは2回目以降のメニュー変更をマイページから行えます。" },
];

const sections = [
  { id: "series", label: "シリーズ別の品数と栄養成分の範囲" },
  { id: "ranking", label: "公式の人気ランキング（10月）上位5品" },
  { id: "diff", label: "同じ主菜でも三菜と五菜で違う：カロリー・塩分の差" },
  { id: "purpose", label: "目的別に選ぶ（当サイト集計）" },
  { id: "other", label: "スープ・鍋・カレー・アイスなど" },
  { id: "price", label: "選べるセットの料金" },
  { id: "list3", label: "いつでも三菜 95品の一覧" },
  { id: "list5", label: "いつでも五菜 91品の一覧" },
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
          <span className="text-foreground">ワタミの宅食ダイレクトのメニュー</span>
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


export default function WatamiDirectMenuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-18T00:00:00+09:00",
    dateModified: "2026-11-18T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "ワタミの宅食ダイレクトのメニュー" },
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
            <time dateTime="2026-11-18">公開: 2026年11月18日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ワタミの宅食ダイレクトは、ワタミの冷凍惣菜を全国に宅配するサービスです。主菜1品＋副菜2品の「いつでも三菜」、主菜1品＋副菜4品の「いつでも五菜」、量を増やした「満足ディッシュ」などのシリーズがあり、定期の「選べるセット」ではメニューを自分で選べます。
          </p>
          <p className="mb-3">
            この記事では、2026年11月18日に公式の「選べるセット」のメニュー画面に掲載されている全メニューの栄養成分（エネルギー・たんぱく質・脂質・炭水化物・塩分）を取得し、シリーズごとに当サイトで集計しました。公式の人気ランキングもあわせて確認しています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ワタミの宅食ダイレクトのメニューの要点</p>
          <p className="text-sm leading-relaxed mb-4">2026年11月18日時点の選べるセットのメニューは、いつでも三菜95品・いつでも五菜91品・満足ディッシュ18品でした。三菜と五菜は89品で主菜名が同じで、同じ主菜でも五菜のほうがエネルギーは中央値で56kcal、塩分は0.5g多くなっています（副菜が2品多いため）。公式の10月の選べるセットランキングは、1位 佐瀬さんたちのピーマン肉詰め、2位 手仕込みヒレカツ、3位 銀鮭の塩焼きでした。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 集計でわかったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>全メニューの栄養成分が公式のメニュー画面に掲載されている</li><li>三菜は塩分の中央値1.7g・エネルギー中央値250kcal</li><li>満足ディッシュ18品はすべて450kcal以下・塩分2.5g以下</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>五菜には塩分3g以上のメニューが2品ある</li><li>鍋・スープカレーなどは塩分が3〜4g台</li><li>選べるセットはセットあたりの熱量・塩分の基準がない（公式の注記）</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ワタミの宅食ダイレクト 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="series">シリーズ別の品数と栄養成分の範囲</SectionHeading>
        <ComparisonTable
          headers={["シリーズ", "品数", "エネルギー", "たんぱく質", "食塩相当量", "newの表示"]}
          rows={[
            ["三菜", "95品", "144〜348kcal（中央値250）", "6.7〜21.6g（中央値11.6）", "0.9〜2.6g（中央値1.7）", "5品"],
            ["五菜", "91品", "200〜425kcal（中央値303）", "7.8〜23g（中央値13.9）", "1.2〜3.2g（中央値2.1）", "3品"],
            ["満足ディッシュ", "18品", "289〜446kcal（中央値384）", "12.7〜25.6g（中央値17.9）", "1.3〜2.5g（中央値2.2）", "0品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/sets/2?menu_view=true" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクト 選べるセット（いつでも三菜）</a>・<a href="https://www.watami-takushoku-direct.jp/shop/sets/3?menu_view=true" target="_blank" rel="noopener noreferrer" className="text-accent underline">同（いつでも五菜）</a>のメニュー画面（2026年11月18日取得）を当サイトが集計。満足ディッシュは五菜の選べるセットの画面に掲載されているメニューです。栄養成分値は公式の注記どおり「献立作成時の計算値」で、目安の数値です。</p>
        <p className="text-sm mb-6 leading-relaxed">いつでも三菜は主菜1品＋副菜2品、いつでも五菜は主菜1品＋副菜4品です。満足ディッシュは公式の説明で「全体量200g以上＆主菜サイズUP、450kcal以下・食塩相当量2.5g以下」とされ、掲載値でも18品中18品がこの条件を満たしていました。公式は、おまかせセットについて「熱量の基準値は1セット平均で±50kcalの範囲」とする一方、定期購入「選べるセット」は「セットあたりの熱量と食塩相当量の基準はありません」と注記しています。</p>
        <SectionHeading id="ranking">公式の人気ランキング（10月）上位5品</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式サイトのトピックスでは、選べるセットで多く選ばれたメニューのランキングが毎月公開されています。2026年11月6日掲載の「【10月】選べるセットランキングトップ5」の上位5品と、三菜・五菜それぞれの栄養成分は次のとおりです。</p>
        <ComparisonTable
          headers={["順位（公式）", "メニュー（主菜名）", "いつでも三菜", "いつでも五菜"]}
          rows={[
            ["第1位", "佐瀬さんたちのピーマン肉詰め", "257kcal・塩分1.8g", "308kcal・塩分2.3g"],
            ["第2位", "手仕込みヒレカツ", "218kcal・塩分1.7g", "255kcal・塩分2.2g"],
            ["第3位", "銀鮭の塩焼き〜ワタミファームの大根おろし添え〜", "178kcal・塩分2.1g", "231kcal・塩分2.4g"],
            ["第4位", "肉じゃが（群馬県産こんにゃくいもを使ったしらたき使用）", "249kcal・塩分2.6g", "311kcal・塩分3.1g"],
            ["第5位", "霧島黒豚の手ごねハンバーグ", "283kcal・塩分2.0g", "336kcal・塩分2.3g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/information/topic261106" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクト「【10月】選べるセットランキングトップ5」（2026年11月6日）</a>・選べるセットのメニュー画面（2026年11月18日取得）。ランキングの集計方法（件数など）は公開されていません。</p>
        <p className="text-sm mb-6 leading-relaxed">上位5品はいずれも三菜・五菜の両方で選べます。料金や味の評判は<Link href="/articles/watami-direct-kuchikomi/" className="text-accent underline">ワタミの宅食ダイレクトの口コミ・評判</Link>で整理しています。</p>
        <SectionHeading id="diff">同じ主菜でも三菜と五菜で違う：カロリー・塩分の差</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">三菜と五菜の両方にある主菜は89品でした。同じ主菜名どうしで比べると、五菜はすべてのメニューで三菜よりエネルギーと塩分が多くなっていました（当サイト集計）。</p>
        <ComparisonTable
          headers={["項目（五菜−三菜）", "中央値", "範囲"]}
          rows={[
            ["エネルギー", "＋56kcal", "＋4〜＋123kcal"],
            ["食塩相当量", "＋0.5g", "＋0.1〜＋0.9g"],
            ["たんぱく質", "＋1.7g", "0.5〜＋4.3g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※選べるセットのメニュー画面の掲載値（2026年11月18日取得）で、主菜名が同じ89品を当サイトが比較。</p>
        <p className="text-sm mb-6 leading-relaxed">副菜が2品多い分、五菜は量と品目数が増えますが、塩分も増えます。塩分を抑えたい場合は三菜、1食でおかずの品数を増やしたい場合は五菜、と目的で選び分けるのが合理的です。</p>
        <SectionHeading id="purpose">目的別に選ぶ（当サイト集計）</SectionHeading>
        <SubHeading>たんぱく質が多いメニュー（五菜・満足ディッシュから8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー（主菜名）", "シリーズ", "たんぱく質", "エネルギー", "食塩相当量"]}
          rows={[
            ["ヤンニョムチキン", "満足ディッシュ", "25.6g", "442kcal", "2.1g"],
            ["照り焼きチキン", "満足ディッシュ", "24.6g", "409kcal", "2.2g"],
            ["直火で焼いた照り焼きチキン", "五菜", "23.0g", "391kcal", "2.6g"],
            ["筑前煮（加賀屋総料理長監修白だし使用）", "満足ディッシュ", "23.0g", "352kcal", "2.4g"],
            ["自家製タルタルのチキン南蛮", "満足ディッシュ", "21.9g", "405kcal", "2.0g"],
            ["長州どりの三種盛り合わせ", "五菜", "21.8g", "331kcal", "1.9g"],
            ["長州どりのヤンニョムチキン", "五菜", "21.7g", "360kcal", "2.2g"],
            ["サバの味噌煮", "五菜", "19.5g", "283kcal", "1.5g"],
          ]}
        />
        <SubHeading>塩分が少ないメニュー（三菜・200kcal以上から8品）</SubHeading>
        <ComparisonTable
          headers={["メニュー（主菜名）", "食塩相当量", "エネルギー", "たんぱく質"]}
          rows={[
            ["かねふく明太子乗せ 豚バラと豆腐の豆乳煮込み", "0.9g", "248kcal", "11.0g"],
            ["ワタミファームのさつまいもシチュー", "1.1g", "240kcal", "10.6g"],
            ["焼津港水揚げカツオの竜田揚げ", "1.1g", "233kcal", "16.3g"],
            ["豆腐ハンバーグ（ワタミファームの有機きく芋入り）", "1.1g", "236kcal", "8.5g"],
            ["ワタミファームのなすと豚しゃぶのおろしソース", "1.2g", "206kcal", "9.9g"],
            ["気仙沼産マグロカツと松川浦産アオサちぎり揚げ", "1.2g", "216kcal", "9.5g"],
            ["鶏の唐揚げ ワタミファームのロメインレタス添え", "1.2g", "310kcal", "10.8g"],
            ["サバの味噌煮", "1.3g", "250kcal", "17.5g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※選べるセットのメニュー画面の掲載値（2026年11月18日取得）を当サイトが並べ替え。</p>
        <p className="text-sm mb-6 leading-relaxed">五菜で塩分3.0g以上のメニューは2品（手ごねつくねと国産ほうれん草 黄身添え、肉じゃが（群馬県産こんにゃくいもを使ったしらたき使用））でした。</p>
        <SectionHeading id="other">スープ・鍋・カレー・アイスなど</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">選べるセットの画面には、三菜・五菜・満足ディッシュのほかに、スープ・鍋・カレー・アイスなど16品も並んでいます。</p>
        <ComparisonTable
          headers={["メニュー", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["北海道産かぼちゃのクリームスープ", "167kcal", "3.3g", "0.8g"],
            ["有機トマトジュースのミネストローネ", "112kcal", "5.6g", "1.4g"],
            ["ごろごろ野菜のポトフ", "133kcal", "7.0g", "2.0g"],
            ["豚汁（ワタミファームの有機きく芋使用）", "122kcal", "5.0g", "2.2g"],
            ["美幌峠牧場グラスフェッドミルクのクラムチャウダー", "177kcal", "7.8g", "1.3g"],
            ["さつま芋ポタージュ（焼き芋風） 1個", "218kcal", "2.9g", "0.9g"],
            ["さつま芋ポタージュ（プレーン） 1個", "202kcal", "3.0g", "0.9g"],
            ["美幌グラスフェッドアイス 有機紅はるか 1個", "129kcal", "2.6g", "0.08g"],
            ["美幌グラスフェッドアイス はちみつ 1個", "156kcal", "3.4g", "0.15g"],
            ["美幌グラスフェッドアイス リッチミルク 1個", "147kcal", "3.6g", "0.16g"],
            ["旨辛チゲ鍋", "295kcal", "10.2g", "4.2g"],
            ["生姜香る白湯鍋（ワタミファームの有機白菜使用）", "228kcal", "15.6g", "3.1g"],
            ["国産牛モツ鍋", "258kcal", "9.2g", "3.4g"],
            ["ごろごろ野菜のスープカレー", "377kcal", "17.6g", "3.9g"],
            ["バターチキンカレー", "395kcal", "16.9g", "3.0g"],
            ["国産真鯛カマ煮つけ", "297kcal", "23.9g", "2.6g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 選べるセットのメニュー画面（2026年11月18日取得）</p>
        <p className="text-sm mb-6 leading-relaxed">鍋やスープカレーは塩分が3〜4g台と、ほかのメニューより多めです。汁物を毎食足す場合は、主菜側の塩分と合わせて確認してください。</p>
        <SectionHeading id="price">選べるセットの料金</SectionHeading>
        <ComparisonTable
          headers={["シリーズ", "定期・選べるセット（税込）", "都度・選べるセット（税込）"]}
          rows={[
            ["いつでも三菜", "10食4,744円・20食9,488円（1食475円）", "10食5,190円（1食519円）"],
            ["いつでも五菜", "10食5,753円・20食11,506円（1食576円）", "10食6,230円（1食623円）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/pages/prices" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクトの料金・値段一覧</a>（2026年11月18日確認）。送料は本州・四国・九州990円、北海道1,320円、沖縄2,420円。メニューを選べない「おまかせセット」は選べるセットより安く、継続割・お試し割もあります。</p>
        <p className="text-sm mb-6 leading-relaxed">おまかせセット・継続割・お試し割を含む料金と定期の条件は<Link href="/articles/watami-direct-kuchikomi/" className="text-accent underline">ワタミの宅食ダイレクトの口コミ・評判</Link>、お試しの内容は<Link href="/articles/watami-direct-otameshi/" className="text-accent underline">ワタミの宅食ダイレクトのお試しセット</Link>で確認できます。</p>
        <SectionHeading id="list3">いつでも三菜 95品の一覧</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式のメニュー画面の並び順です。「new」は公式のメニュー画面で新メニューの表示があるものです。</p>
        <ComparisonTable
          headers={["メニュー（主菜名）", "エネルギー", "たんぱく質", "脂質", "炭水化物", "食塩相当量"]}
          rows={[
            ["豚バラとレンコンの甘辛炒め（new）", "232kcal", "7.7g", "17.0g", "13.8g", "1.4g"],
            ["ロールキャベツ（ワタミファームの有機キャベツ使用）（new）", "211kcal", "9.8g", "13.6g", "14.9g", "1.4g"],
            ["トマト煮込みハンバーグ（new）", "234kcal", "11.5g", "14.7g", "14.2g", "1.9g"],
            ["北海道産とうもろこしをたっぷり使用した手作りさつまあげ（new）", "236kcal", "7.4g", "15.9g", "17.7g", "1.4g"],
            ["金目鯛の煮つけ（new）", "185kcal", "12.3g", "11.0g", "10.7g", "1.2g"],
            ["香味野菜仕立てのカツカレー", "277kcal", "10.5g", "20.7g", "13.6g", "1.5g"],
            ["黄金カレイの煮つけ", "259kcal", "15.0g", "12.4g", "21.3g", "1.8g"],
            ["清流どりの唐揚げ ワタミファームの塩生姜ソース", "296kcal", "14.1g", "20.0g", "16.3g", "1.6g"],
            ["ワタミファームの有機きく芋入りミートボール", "286kcal", "10.6g", "17.0g", "25.1g", "1.7g"],
            ["佐瀬さんたちのピーマン肉詰め", "257kcal", "11.5g", "17.4g", "17.1g", "1.8g"],
            ["みちのく清流どりの油淋鶏", "302kcal", "15.3g", "21.4g", "13.4g", "1.8g"],
            ["タラと豆腐の揚げびたしワタミファームの大根おろし添え", "268kcal", "10.1g", "17.4g", "18.7g", "1.7g"],
            ["霧島黒豚の手ごねハンバーグ", "283kcal", "12.3g", "18.7g", "16.6g", "2.0g"],
            ["マグロハンバーグ ワタミファームの大根おろしソース", "226kcal", "11.7g", "12.0g", "20.1g", "1.9g"],
            ["国産黒毛和牛のコロッケ", "265kcal", "6.8g", "17.1g", "23.5g", "1.4g"],
            ["鶏肉のチーズピカタ トマトソース", "238kcal", "14.0g", "14.1g", "13.3g", "1.6g"],
            ["サバのごま照焼き", "261kcal", "17.6g", "14.7g", "18.4g", "1.6g"],
            ["とり天 ワタミファームの大根おろし添え", "214kcal", "16.1g", "9.6g", "16.7g", "1.9g"],
            ["牛すき煮 卵黄添え", "243kcal", "8.2g", "16.3g", "15.8g", "1.3g"],
            ["サバの味噌煮", "250kcal", "17.5g", "17.5g", "10.1g", "1.3g"],
            ["佐瀬さんたちの丸ごと焼きピーマンと豚バラのオイスターソース", "203kcal", "13.2g", "12.3g", "10.3g", "1.8g"],
            ["エビカツ", "223kcal", "10.4g", "11.6g", "20.6g", "1.5g"],
            ["オニオンソースの和風ハンバーグ", "322kcal", "13.8g", "20.1g", "20.5g", "1.8g"],
            ["赤魚の煮付け", "167kcal", "16.0g", "6.6g", "10.8g", "1.3g"],
            ["粗挽きハンバーグのトマトソース", "311kcal", "13.8g", "21.4g", "16.3g", "2.1g"],
            ["ミナミカゴカマスの柚庵焼き〜ワタミファームの大根おろし添え〜", "194kcal", "11.3g", "10.6g", "13.3g", "1.2g"],
            ["ヨコシマサワラの中華ソース", "296kcal", "15.7g", "19.3g", "15.5g", "2.0g"],
            ["白身魚フライ 自家製タルタルソース", "254kcal", "10.7g", "16.1g", "18.1g", "1.8g"],
            ["長州どりのヤンニョムチキン", "304kcal", "20.6g", "16.2g", "20.8g", "1.5g"],
            ["五島列島産キビナゴの甘酢ソースかけ", "215kcal", "12.2g", "13.6g", "11.9g", "1.5g"],
            ["カレイの和風あん", "188kcal", "9.8g", "8.1g", "19.3g", "1.7g"],
            ["美幌峠牧場グラスフェッドミルクのクラムチャウダー", "245kcal", "10.9g", "14.2g", "19.6g", "1.7g"],
            ["肉じゃが（群馬県産こんにゃくいもを使ったしらたき使用）", "249kcal", "7.1g", "12.3g", "26.0g", "2.6g"],
            ["銚子港水揚げ真イワシのフライ", "266kcal", "10.8g", "14.6g", "24.4g", "1.3g"],
            ["ホクトエリンギと牛バラのバター醤油炒め", "276kcal", "9.9g", "19.3g", "16.1g", "2.1g"],
            ["ワタミオーガニックランドのジビエカレー", "248kcal", "10.6g", "15.4g", "17.2g", "1.6g"],
            ["ブリの生姜あん", "276kcal", "13.0g", "17.4g", "17.8g", "1.7g"],
            ["長州どりの三種盛り合わせ", "274kcal", "20.0g", "16.7g", "11.4g", "1.5g"],
            ["低温調理 長州どりレバーの野菜炒め", "206kcal", "14.8g", "9.3g", "17.4g", "2.2g"],
            ["ワタミファームのなすと豚しゃぶのおろしソース", "206kcal", "9.9g", "13.7g", "12.6g", "1.2g"],
            ["カレイのグリル タルタルソース", "203kcal", "13.5g", "10.7g", "13.8g", "2.0g"],
            ["手仕込みヒレカツ", "218kcal", "11.5g", "9.7g", "29.2g", "1.7g"],
            ["プルコギ", "333kcal", "9.9g", "22.5g", "21.9g", "1.4g"],
            ["麻婆茄子（ワタミファームの長なす使用）", "238kcal", "7.8g", "16.8g", "15.5g", "2.0g"],
            ["JAやさと野菜と美明豚のスタミナ焼き", "289kcal", "14.4g", "17.4g", "20.8g", "2.5g"],
            ["牛カルビ焼肉", "340kcal", "10.5g", "24.7g", "17.7g", "1.9g"],
            ["鶏肉とじゃが芋のカレーグリル", "263kcal", "14.0g", "18.9g", "10.4g", "1.6g"],
            ["カレイの唐揚げ〜ワタミファームの大根おろしソース〜", "282kcal", "13.0g", "15.1g", "24.3g", "1.9g"],
            ["鶏の唐揚げ ワタミファームのロメインレタス添え", "310kcal", "10.8g", "20.1g", "20.7g", "1.2g"],
            ["ワタミファームのさつまいもシチュー", "240kcal", "10.6g", "14.9g", "17.7g", "1.1g"],
            ["筑前煮（加賀屋総料理長監修白だし使用）", "216kcal", "13.1g", "10.5g", "17.4g", "1.8g"],
            ["タラと野菜の黒酢あん", "241kcal", "14.7g", "8.2g", "27.8g", "2.0g"],
            ["陸前高田サーモンハラミの西京焼き", "225kcal", "16.4g", "12.6g", "13.0g", "2.0g"],
            ["清流どりのブロッコリーチキンごまマヨソース", "254kcal", "11.7g", "15.4g", "18.5g", "1.6g"],
            ["焼津港水揚げカツオの竜田揚げ", "233kcal", "16.3g", "11.5g", "16.6g", "1.1g"],
            ["まるごと小魚の南蛮だれ", "234kcal", "10.9g", "13.6g", "19.0g", "1.6g"],
            ["豆腐ハンバーグ（ワタミファームの有機きく芋入り）", "236kcal", "8.5g", "11.6g", "24.9g", "1.1g"],
            ["みちのく清流どりのチキン南蛮", "348kcal", "16.9g", "24.1g", "16.6g", "1.7g"],
            ["ハンバーグデミグラスソース", "278kcal", "12.3g", "19.4g", "14.2g", "1.5g"],
            ["直火で焼いた照り焼きチキン", "329kcal", "21.6g", "18.2g", "19.7g", "2.1g"],
            ["タラの香草パン粉焼き", "242kcal", "15.0g", "13.0g", "17.8g", "1.7g"],
            ["かねふく明太子乗せ 豚バラと豆腐の豆乳煮込み", "248kcal", "11.0g", "15.2g", "18.5g", "0.9g"],
            ["鶏肉のフォー", "250kcal", "14.7g", "13.5g", "19.2g", "1.4g"],
            ["ロースカツ玉子あん", "283kcal", "12.7g", "19.6g", "14.9g", "1.9g"],
            ["牛肉とたけのことアスパラのオイスターソース炒め", "241kcal", "7.5g", "15.1g", "17.2g", "1.7g"],
            ["６種野菜のキーマカレーとワタミファームの人参ドレッシング", "215kcal", "7.3g", "11.6g", "22.3g", "1.5g"],
            ["八宝菜（ワタミファームのきく芋使用）", "251kcal", "10.9g", "16.2g", "19.1g", "1.7g"],
            ["ポトフ（銚子産山口さんのキャベツ使用）", "236kcal", "8.7g", "15.6g", "15.9g", "1.8g"],
            ["ガパオ", "203kcal", "11.8g", "10.6g", "17.3g", "2.1g"],
            ["アジの塩焼きと国産ほうれん草ごま和え", "173kcal", "15.0g", "7.1g", "14.6g", "1.7g"],
            ["赤魚のグリル バジルトマトソース", "168kcal", "14.4g", "9.1g", "7.3g", "2.0g"],
            ["酢豚（四元豚 ゆめの大地使用）", "293kcal", "10.2g", "13.5g", "32.5g", "1.7g"],
            ["鶏唐と鳥取白ねぎのピリ辛ソース", "333kcal", "16.6g", "21.0g", "21.5g", "2.0g"],
            ["牛肉と焼き豆腐の煮物", "273kcal", "11.2g", "18.2g", "15.8g", "1.4g"],
            ["天然ブリと大根の照り焼き", "273kcal", "14.7g", "13.3g", "21.8g", "1.9g"],
            ["なすとチーズのミートソース", "290kcal", "11.1g", "16.7g", "25.4g", "2.2g"],
            ["青椒肉絲（四元豚 ゆめの大地使用）", "201kcal", "11.1g", "10.1g", "17.8g", "2.0g"],
            ["グリルチキンのガーリックトマトソース", "312kcal", "15.5g", "19.7g", "17.4g", "2.1g"],
            ["ナンコツ入り肉団子の甘酢あん", "307kcal", "11.0g", "15.5g", "29.3g", "2.2g"],
            ["銀鮭の塩焼き〜ワタミファームの大根おろし添え〜", "178kcal", "11.7g", "13.9g", "7.5g", "2.1g"],
            ["手ごねつくねと国産ほうれん草 黄身添え", "261kcal", "11.5g", "12.4g", "23.8g", "2.3g"],
            ["サワラの西京焼き", "211kcal", "12.4g", "12.2g", "13.3g", "1.5g"],
            ["気仙沼産マグロカツと松川浦産アオサちぎり揚げ", "216kcal", "9.5g", "11.1g", "19.0g", "1.2g"],
            ["エビマヨ", "252kcal", "10.9g", "16.6g", "15.5g", "1.7g"],
            ["サーモンのアヒージョ", "257kcal", "10.7g", "17.3g", "17.0g", "1.8g"],
            ["サーモンのホワイトソース（美幌峠牧場グラスフェッドミルク使用）", "227kcal", "11.1g", "12.6g", "18.7g", "1.8g"],
            ["ねぎ香るエビチリ", "228kcal", "14.3g", "11.0g", "19.2g", "2.1g"],
            ["牛肉と里芋の煮物", "265kcal", "9.9g", "15.6g", "20.5g", "1.7g"],
            ["鶏肉と豆腐の玉子あん", "213kcal", "11.6g", "10.5g", "19.0g", "1.5g"],
            ["鶏肉の味噌焼き", "317kcal", "16.8g", "19.0g", "17.9g", "2.4g"],
            ["四元豚 ゆめの大地の回鍋肉", "254kcal", "14.3g", "16.9g", "13.3g", "1.9g"],
            ["豚肉ときくらげの中華炒め", "287kcal", "9.0g", "19.9g", "20.8g", "2.1g"],
            ["鍋仕込みの麻婆豆腐", "144kcal", "6.7g", "8.2g", "11.5g", "1.5g"],
            ["ビーフストロガノフ", "273kcal", "6.8g", "20.4g", "14.9g", "1.4g"],
            ["清流若どりのねぎ塩チキングリル", "295kcal", "16.6g", "22.0g", "9.2g", "1.9g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/sets/2?menu_view=true" target="_blank" rel="noopener noreferrer" className="text-accent underline">選べるセット（いつでも三菜）のメニュー画面</a>（2026年11月18日取得）</p>
        <SectionHeading id="list5">いつでも五菜 91品の一覧</SectionHeading>
        <ComparisonTable
          headers={["メニュー（主菜名）", "エネルギー", "たんぱく質", "脂質", "炭水化物", "食塩相当量"]}
          rows={[
            ["豚バラとレンコンの甘辛炒め（new）", "286kcal", "11.1g", "19.2g", "19.5g", "1.8g"],
            ["トマト煮込みハンバーグ（new）", "293kcal", "12.9g", "18.1g", "20.3g", "2.2g"],
            ["北海道産とうもろこしをたっぷり使用した手作りさつまあげ（new）", "293kcal", "9.2g", "18.7g", "24.4g", "1.8g"],
            ["香味野菜仕立てのカツカレー", "318kcal", "11.8g", "23.0g", "18.2g", "2.0g"],
            ["黄金カレイの煮つけ", "308kcal", "16.1g", "15.2g", "27.6g", "2.4g"],
            ["清流どりの唐揚げ ワタミファームの塩生姜ソース", "355kcal", "16.6g", "24.3g", "19.4g", "2.0g"],
            ["ワタミファームの有機きく芋入りミートボール", "347kcal", "12.1g", "21.2g", "29.6g", "2.1g"],
            ["佐瀬さんたちのピーマン肉詰め", "308kcal", "12.8g", "20.1g", "23.1g", "2.3g"],
            ["みちのく清流どりの油淋鶏", "345kcal", "16.4g", "24.1g", "17.8g", "2.1g"],
            ["タラと豆腐の揚げびたしワタミファームの大根おろし添え", "307kcal", "10.8g", "19.0g", "25.2g", "1.8g"],
            ["マグロハンバーグ ワタミファームの大根おろしソース", "277kcal", "13.3g", "14.5g", "25.5g", "2.5g"],
            ["霧島黒豚の手ごねハンバーグ", "336kcal", "14.0g", "21.3g", "23.1g", "2.3g"],
            ["手ごねつくねと国産ほうれん草 黄身添え", "273kcal", "13.1g", "12.9g", "26.1g", "3.2g"],
            ["気仙沼産マグロカツと松川浦産アオサちぎり揚げ", "264kcal", "10.5g", "12.5g", "27.4g", "1.7g"],
            ["国産黒毛和牛のコロッケ", "317kcal", "10.4g", "20.5g", "26.8g", "2.1g"],
            ["サバのごま照焼き", "303kcal", "19.2g", "15.9g", "24.6g", "2.0g"],
            ["鶏肉のチーズピカタ トマトソース", "272kcal", "16.0g", "15.3g", "18.2g", "2.1g"],
            ["とり天 ワタミファームの大根おろし添え", "279kcal", "18.4g", "11.7g", "26.3g", "2.6g"],
            ["サバの味噌煮", "283kcal", "19.5g", "18.8g", "13.7g", "1.5g"],
            ["牛すき煮 卵黄添え", "290kcal", "9.7g", "18.1g", "21.8g", "1.5g"],
            ["佐瀬さんたちの丸ごと焼きピーマンと豚バラのオイスターソース", "290kcal", "15.3g", "18.3g", "16.6g", "2.3g"],
            ["エビカツ", "276kcal", "12.3g", "14.4g", "26.4g", "1.8g"],
            ["オニオンソースの和風ハンバーグ", "385kcal", "17.0g", "24.6g", "23.7g", "2.3g"],
            ["赤魚の煮付け", "219kcal", "16.5g", "6.6g", "23.5g", "1.6g"],
            ["粗挽きハンバーグのトマトソース", "346kcal", "14.5g", "23.4g", "20.4g", "2.5g"],
            ["ミナミカゴカマスの柚庵焼き〜ワタミファームの大根おろし添え〜", "286kcal", "13.4g", "16.5g", "21.6g", "1.9g"],
            ["ヨコシマサワラの中華ソース", "351kcal", "16.6g", "21.4g", "24.5g", "2.6g"],
            ["白身魚フライ 自家製タルタルソース", "299kcal", "11.7g", "16.3g", "28.8g", "2.4g"],
            ["長州どりのヤンニョムチキン", "360kcal", "21.7g", "17.9g", "30.5g", "2.2g"],
            ["五島列島産キビナゴの甘酢ソースかけ", "265kcal", "14.0g", "16.5g", "16.7g", "1.8g"],
            ["カレイの和風あん", "253kcal", "11.6g", "11.4g", "27.2g", "2.2g"],
            ["肉じゃが（群馬県産こんにゃくいもを使ったしらたき使用）", "311kcal", "9.1g", "14.8g", "34.3g", "3.1g"],
            ["銚子港水揚げ真イワシのフライ", "314kcal", "13.0g", "17.1g", "29.1g", "2.1g"],
            ["ホクトエリンギと牛バラのバター醤油炒め", "344kcal", "11.4g", "22.0g", "26.1g", "2.5g"],
            ["ブリの生姜あん", "327kcal", "14.7g", "19.1g", "25.3g", "2.2g"],
            ["長州どりの三種盛り合わせ", "331kcal", "21.8g", "21.1g", "14.2g", "1.9g"],
            ["低温調理 長州どりレバーの野菜炒め", "329kcal", "17.2g", "16.8g", "29.5g", "2.6g"],
            ["ワタミファームのなすと豚しゃぶのおろしソース", "283kcal", "11.5g", "17.6g", "21.8g", "1.6g"],
            ["カレイのグリル タルタルソース", "262kcal", "14.9g", "12.9g", "22.7g", "2.6g"],
            ["タラと野菜の黒酢あん", "294kcal", "16.8g", "11.2g", "32.5g", "2.3g"],
            ["手仕込みヒレカツ", "255kcal", "12.8g", "12.4g", "31.5g", "2.2g"],
            ["酢豚（四元豚 ゆめの大地使用）", "355kcal", "12.5g", "15.4g", "41.2g", "2.5g"],
            ["豚肉ときくらげの中華炒め", "351kcal", "12.2g", "22.9g", "27.3g", "2.7g"],
            ["牛カルビ焼肉", "398kcal", "12.5g", "28.7g", "22.4g", "2.8g"],
            ["プルコギ", "393kcal", "11.9g", "25.6g", "28.2g", "1.9g"],
            ["麻婆茄子（ワタミファームの長なす使用）", "301kcal", "10.8g", "21.7g", "17.8g", "2.4g"],
            ["JAやさと野菜と美明豚のスタミナ焼き", "338kcal", "15.7g", "18.9g", "28.7g", "2.9g"],
            ["鶏肉とじゃが芋のカレーグリル", "309kcal", "15.8g", "22.4g", "13.3g", "2.0g"],
            ["カレイの唐揚げ〜ワタミファームの大根おろしソース〜", "286kcal", "13.9g", "15.0g", "24.4g", "2.2g"],
            ["鶏の唐揚げ ワタミファームのロメインレタス添え", "361kcal", "13.7g", "22.4g", "26.0g", "1.8g"],
            ["ワタミファームのさつまいもシチュー", "311kcal", "12.8g", "17.9g", "26.9g", "1.9g"],
            ["筑前煮（加賀屋総料理長監修白だし使用）", "253kcal", "14.0g", "12.5g", "22.0g", "2.1g"],
            ["ポトフ（銚子産山口さんのキャベツ使用）", "297kcal", "11.6g", "19.2g", "20.2g", "2.7g"],
            ["ガパオ", "266kcal", "14.8g", "11.8g", "27.7g", "2.9g"],
            ["アジの塩焼きと国産ほうれん草ごま和え", "217kcal", "17.5g", "9.6g", "18.1g", "2.0g"],
            ["かねふく明太子乗せ 豚バラと豆腐の豆乳煮込み", "317kcal", "12.5g", "20.7g", "22.2g", "1.2g"],
            ["直火で焼いた照り焼きチキン", "391kcal", "23.0g", "20.1g", "29.9g", "2.6g"],
            ["タラの香草パン粉焼き", "308kcal", "16.0g", "18.3g", "22.3g", "2.1g"],
            ["陸前高田サーモンハラミの西京焼き", "291kcal", "18.0g", "17.6g", "17.4g", "2.6g"],
            ["鶏肉のフォー", "289kcal", "16.4g", "15.3g", "23.8g", "1.6g"],
            ["ロースカツ玉子あん", "348kcal", "16.4g", "21.2g", "24.2g", "2.4g"],
            ["牛肉とたけのことアスパラのオイスターソース炒め", "301kcal", "8.7g", "18.6g", "24.5g", "2.1g"],
            ["６種野菜のキーマカレーとワタミファームの人参ドレッシング", "269kcal", "9.3g", "13.6g", "30.3g", "1.9g"],
            ["八宝菜（ワタミファームのきく芋使用）", "263kcal", "12.9g", "14.0g", "23.1g", "2.1g"],
            ["清流どりのブロッコリーチキンごまマヨソース", "320kcal", "14.5g", "19.7g", "23.1g", "1.9g"],
            ["まるごと小魚の南蛮だれ", "301kcal", "12.7g", "15.7g", "29.5g", "2.0g"],
            ["焼津港水揚げカツオの竜田揚げ", "273kcal", "17.0g", "11.8g", "25.7g", "1.8g"],
            ["豚の生姜焼き", "301kcal", "16.6g", "17.6g", "19.1g", "2.4g"],
            ["ハンバーグデミグラスソース", "329kcal", "14.4g", "21.5g", "21.0g", "2.0g"],
            ["豆腐ハンバーグ（ワタミファームの有機きく芋入り）", "324kcal", "10.2g", "16.3g", "35.2g", "1.4g"],
            ["みちのく清流どりのチキン南蛮", "380kcal", "18.6g", "24.2g", "23.1g", "2.4g"],
            ["グリルチキンのガーリックトマトソース", "425kcal", "16.1g", "23.4g", "37.7g", "2.6g"],
            ["ナンコツ入り肉団子の甘酢あん", "367kcal", "12.8g", "19.6g", "33.6g", "2.8g"],
            ["銀鮭の塩焼き〜ワタミファームの大根おろし添え〜", "231kcal", "12.6g", "13.9g", "13.2g", "2.4g"],
            ["サワラの西京焼き", "272kcal", "13.0g", "14.3g", "23.5g", "2.0g"],
            ["肉野菜炒め（銚子産山口さんのキャベツ使用）", "297kcal", "8.4g", "21.8g", "19.7g", "2.1g"],
            ["ビーフストロガノフ", "327kcal", "7.8g", "25.0g", "17.4g", "1.9g"],
            ["赤魚のグリル バジルトマトソース", "233kcal", "16.2g", "12.9g", "13.2g", "2.7g"],
            ["鶏唐と鳥取白ねぎのピリ辛ソース", "354kcal", "18.0g", "21.5g", "24.6g", "2.5g"],
            ["牛肉と焼き豆腐の煮物", "346kcal", "13.8g", "21.9g", "23.2g", "1.9g"],
            ["天然ブリと大根の照り焼き", "300kcal", "16.7g", "13.8g", "25.7g", "2.3g"],
            ["なすとチーズのミートソース", "357kcal", "12.6g", "18.3g", "37.3g", "2.7g"],
            ["青椒肉絲（四元豚 ゆめの大地使用）", "301kcal", "15.4g", "13.2g", "31.6g", "2.9g"],
            ["牛肉と里芋の煮物", "341kcal", "13.8g", "20.4g", "24.9g", "1.9g"],
            ["鶏肉と豆腐の玉子あん", "302kcal", "14.1g", "17.0g", "24.5g", "2.1g"],
            ["鶏肉の味噌焼き", "352kcal", "18.9g", "19.4g", "25.6g", "2.8g"],
            ["四元豚 ゆめの大地の回鍋肉", "299kcal", "16.0g", "18.1g", "21.0g", "2.1g"],
            ["ねぎ香るエビチリ", "274kcal", "15.6g", "14.0g", "23.3g", "2.4g"],
            ["鍋仕込みの麻婆豆腐", "200kcal", "8.8g", "10.7g", "17.8g", "1.8g"],
            ["エビマヨ", "328kcal", "12.1g", "18.9g", "28.8g", "1.8g"],
            ["清流若どりのねぎ塩チキングリル", "376kcal", "17.8g", "29.1g", "12.9g", "2.5g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/sets/3?menu_view=true" target="_blank" rel="noopener noreferrer" className="text-accent underline">選べるセット（いつでも五菜）のメニュー画面</a>（2026年11月18日取得）。メニューは毎月入れ替わるため、注文の前に公式のメニュー画面でご確認ください。</p>
        <OfficialButton>ワタミの宅食ダイレクト 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ワタミの宅食ダイレクトの選べるセットでは、2026年11月18日時点で三菜95品・五菜91品・満足ディッシュ18品から選べ、全メニューの栄養成分が公式のメニュー画面で確認できます。同じ主菜でも五菜は三菜よりカロリーと塩分が多いため、塩分を控えるなら三菜、品数を増やしたいなら五菜、量を重視するなら満足ディッシュ、と選び分けると目的に合わせやすくなります。迷ったら公式の月間ランキングの上位から試すのも一つの方法です。</p>
        <p className="text-sm mb-6 leading-relaxed">メニュー・栄養成分・料金は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>ワタミの宅食ダイレクト 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/watami-direct-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食ダイレクトの口コミ・評判</Link></li>
            <li><Link href="/articles/watami-direct-otameshi/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食ダイレクトのお試しセット</Link></li>
            <li><Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食の口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-vs-watami/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）とワタミの宅食の比較</Link></li>
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
