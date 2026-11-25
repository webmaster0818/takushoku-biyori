import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "妊娠中の宅配弁当の選び方｜食事摂取基準2025の塩分・たんぱく質で7社791メニューを集計【2026年11月】";
const ARTICLE_DESCRIPTION =
  "妊娠中に宅配弁当を使うときの目安を、厚生労働省「日本人の食事摂取基準（2025年版）」の妊婦の値から1食あたりに換算し、冷凍宅配弁当7社・791メニューの塩分とたんぱく質を当サイトで集計しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/ninshinchu-takuhai-bento/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "妊娠中 宅配弁当, 妊婦 宅配弁当, 妊娠中 冷凍弁当, 妊婦 宅食, 妊娠中 宅食 おすすめ, 妊娠後期 たんぱく質",
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
  { question: "妊娠中に宅配弁当を食べても大丈夫ですか？", answer: "食事摂取基準は食品の種類ではなく、栄養素の量の目安を示しています。宅配弁当は塩分やたんぱく質の量がメニューによって差があるため、栄養成分を確認して選び、医師・助産師から指導を受けている場合はその指示を優先してください。" },
  { question: "妊娠中の塩分は1食何gまでが目安ですか？", answer: "食事摂取基準2025の妊婦の食塩相当量の目標量は1日6.5g未満です。3食で等分すると1食2.1g以下が目安になります（当サイトの換算）。" },
  { question: "妊娠後期のたんぱく質はどのくらい必要ですか？", answer: "18〜49歳女性の推奨量50gに、妊娠後期は25gが付加され、1日75gです。1食あたりでは25g以上が目安です。" },
  { question: "葉酸は宅配弁当で摂れますか？", answer: "宅配弁当の多くは葉酸の量を表示していません。食事摂取基準では、妊娠を計画している女性と妊娠初期の女性は、通常の食品以外の食品（サプリメント等）から1日400µgの葉酸を摂ることが望まれるとされています。" },
  { question: "どのサービスがおすすめですか？", answer: "当サイトの集計では、塩分の少ないメニューの割合はライフミール、たんぱく質の多いメニューの割合はマッスルデリが高い結果でした。重視する項目で選び、足りない分は他の食事で補ってください。" },
];

const sections = [
  { id: "answer", label: "妊娠中の宅配弁当で確かめたいこと" },
  { id: "standard", label: "食事摂取基準2025の妊婦の値" },
  { id: "per-meal", label: "1食あたりの目安（当サイトの換算）" },
  { id: "data", label: "7社791メニューの塩分・たんぱく質" },
  { id: "howto", label: "選び方と使い方の注意" },
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
          <span className="text-foreground">妊娠中の宅配弁当</span>
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



export default function NinshinchuTakuhaiBentoPage() {
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
      { "@type": "ListItem", position: 3, name: "妊娠中の宅配弁当" },
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
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイトと公的機関の資料で、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            妊娠中は、つわりや体調の変化で料理がつらい時期があります。宅配弁当は温めるだけで食べられる一方、メニューによって塩分やたんぱく質の量に差があります。
          </p>
          <p className="mb-3">
            この記事では、厚生労働省「日本人の食事摂取基準（2025年版）」の妊婦の値を確認し、1食あたりの目安に換算しました。そのうえで、当サイトが各社の公式ページから書き出した冷凍宅配弁当7社・791メニューの栄養成分を、その目安で集計しています。
          </p>
          <p>体重や血圧、血糖などの状態で必要な量は変わります。医師・助産師・管理栄養士から指導を受けている場合は、その指示を優先してください。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">妊娠中の宅配弁当（要点）</p>
          <p className="text-sm leading-relaxed mb-4">食事摂取基準2025では、妊婦の食塩相当量の目標量は1日6.5g未満（妊娠前と同じ）、たんぱく質の推奨量は妊娠後期に1日25gの付加があり、18〜49歳では75gです。1食を1日の3分の1とすると、塩分2.1g以下・たんぱく質25g以上（後期）が目安になります。7社791メニューを集計すると、塩分2.1g以下の割合はサービスで大きく異なり、後期のたんぱく質の目安を1食で満たすメニューは少数でした。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 集計でわかったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>塩分2.1g以下が多いのはライフミール（91%）</li><li>たんぱく質25g以上が多いのはマッスルデリ（84%）</li><li>栄養成分は各社の公式ページで確認できる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>塩分とたんぱく質を両方満たすメニューは少ない</li><li>おかずのみの弁当はご飯の分を別に考える</li><li>必要量は個人差が大きい（指導を優先）</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">妊娠中の宅配弁当で確かめたいこと</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>塩分（食塩相当量）：妊婦の目標量は1日6.5g未満。1食あたり2.1g以下が目安</li><li>たんぱく質：妊娠中期は1日5g、後期は25gの付加。後期は1食あたり25g以上が目安</li><li>エネルギー：妊娠初期50kcal・中期250kcal・後期450kcalの付加。弁当だけでなく1日の合計で考える</li><li>葉酸：妊娠中期・後期は1日240µgの付加。妊娠を計画している女性と妊娠初期は、サプリメント等から1日400µgが望まれる</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: 厚生労働省「<a href="https://www.mhlw.go.jp/content/10904750/001734207.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline">日本人の食事摂取基準（2025年版）の策定ポイント</a>」のエネルギー・たんぱく質・葉酸・ナトリウムの表（2026年11月25日確認）。1食あたりの目安は当サイトの換算です。</p>
        <p className="text-sm mb-6 leading-relaxed">宅配弁当のメニューには栄養成分が表示されているため、塩分とたんぱく質は注文前に確かめられます。エネルギーと葉酸は、弁当以外の食事と合わせて1日で調整する項目です。</p>
        <SectionHeading id="standard">食事摂取基準2025の妊婦の値</SectionHeading>
        <ComparisonTable
          headers={["項目", "妊娠前（18〜49歳女性）", "妊娠初期", "妊娠中期", "妊娠後期"]}
          rows={[
            ["エネルギー（身体活動レベル ふつう）", "18〜29歳 1,950kcal／30〜49歳 2,050kcal", "+50kcal", "+250kcal", "+450kcal"],
            ["たんぱく質（推奨量）", "50g", "+0g", "+5g", "+25g"],
            ["葉酸（推奨量）", "240µg", "+0µg", "+240µg", "+240µg"],
            ["食塩相当量（目標量）", "6.5g未満", "6.5g未満", "6.5g未満", "6.5g未満"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 厚生労働省「<a href="https://www.mhlw.go.jp/content/10904750/001734207.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline">日本人の食事摂取基準（2025年版）の策定ポイント</a>」（2025年2月）の各表（2026年11月25日確認）。資料は、妊婦個々の体格や妊娠中の体重増加量、胎児の発育状況の評価を行うことが必要としています。</p>
        <p className="text-sm mb-6 leading-relaxed">塩分の目標量は妊娠前と変わらず、たんぱく質は妊娠後期に大きく増えます。妊娠を計画している女性・妊娠の可能性がある女性・妊娠初期の女性は、通常の食品以外から葉酸を1日400µg摂ることが望まれるとされています。</p>
        <SectionHeading id="per-meal">1食あたりの目安（当サイトの換算）</SectionHeading>
        <ComparisonTable
          headers={["項目", "1日の値", "1食あたりの目安（1日÷3）"]}
          rows={[
            ["食塩相当量", "6.5g未満", "2.1g以下"],
            ["たんぱく質（妊娠前・初期）", "50g", "17g以上"],
            ["たんぱく質（妊娠後期）", "75g", "25g以上"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※18〜49歳女性の推奨量・目標量を3食で等分した当サイトの目安です（6.5÷3＝2.17gは0.1g単位で切り捨て、50÷3＝16.7gは切り上げ）。間食を含めた配分は人によって異なります。</p>
        <SectionHeading id="data">7社791メニューの塩分・たんぱく質</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">当サイトがこれまでに各社の公式メニュー一覧・商品ページから書き出した栄養成分を、上の目安で数え直しました。</p>
        <ComparisonTable
          headers={["サービス", "対象", "たんぱく質の中央値", "塩分の中央値", "塩分2.1g以下", "たんぱく質17g以上", "たんぱく質25g以上", "両方（25g以上・2.1g以下）"]}
          rows={[
            ["nosh（ナッシュ）", "販売中のおかず（79品）", "16.6g", "2.4g", "12品（15%）", "37品（47%）", "11品（14%）", "3品（4%）"],
            ["三ツ星ファーム", "三ツ星基準のメニュー（78品）", "16.3g", "2.2g", "39品（50%）", "29品（37%）", "1品（1%）", "1品（1%）"],
            ["ミールズ（Meals）", "主菜と副菜のお弁当（60品）", "21.4g", "2.3g", "19品（32%）", "60品（100%）", "2品（3%）", "1品（2%）"],
            ["ライフミール", "全メニュー（ご飯付きを含む）（121品）", "12.6g", "1.8g", "110品（91%）", "10品（8%）", "0品（0%）", "0品（0%）"],
            ["ワタミの宅食ダイレクト", "三菜・五菜・満足ディッシュ（204品）", "13.1g", "2.0g", "142品（70%）", "32品（16%）", "1品（0%）", "1品（0%）"],
            ["マッスルデリ", "全メニュー（75品）", "30.1g", "2.7g", "13品（17%）", "75品（100%）", "63品（84%）", "11品（15%）"],
            ["DELIPICKS（デリピックス）", "主菜の料理（汁物などを除く）（174品）", "16.8g", "2.6g", "46品（26%）", "85品（49%）", "16品（9%）", "2品（1%）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh（ナッシュ）</a>（2026年11月18日取得）・<a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム</a>（2026年11月17日取得）・<a href="https://meals.delishkitchen.tv/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">ミールズ（Meals）</a>（2026年11月25日取得）・<a href="https://l-meal.com/products/list" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール</a>（2026年11月17日取得）・<a href="https://www.watami-takushoku-direct.jp/shop/sets/2?menu_view=true" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクト</a>（2026年11月18日取得）・<a href="https://muscledeli.jp/shop/product_categories/md-lowfat" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ</a>（2026年11月16日取得）・<a href="https://deli-picks.com/collection/" target="_blank" rel="noopener noreferrer" className="text-accent underline">DELIPICKS（デリピックス）</a>（2026年11月14日取得）。メニュー数・中央値・割合は当サイト集計です。ライフミールはご飯付きセットを含み、ほかは主におかずのみの値です。メニューは入れ替わるため、現在の内容は各社の公式サイトでご確認ください。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>塩分2.1g以下の割合は、ライフミールが91%でもっとも高く、ワタミの宅食ダイレクトも7割前後でした</li><li>たんぱく質25g以上はマッスルデリが84%と突出していますが、塩分の中央値は2.7gで目安を超えています</li><li>塩分とたんぱく質（後期）の両方を1食で満たすメニューは、791品中19品でした</li></ul>
        <p className="text-sm mb-6 leading-relaxed">1食で両方を満たすメニューは少ないため、塩分の少ない弁当を選び、たんぱく質は牛乳・卵・豆腐などを足して補う、あるいはたんぱく質の多い弁当を選んで他の食事の塩分を控える、という組み合わせが現実的です。各社のメニューは<Link href="/articles/nosh-osusume-menu/" className="text-accent underline">ナッシュ</Link>・<Link href="/articles/lifemeal-menu/" className="text-accent underline">ライフミール</Link>・<Link href="/articles/muscle-deli-menu/" className="text-accent underline">マッスルデリ</Link>のメニュー記事で詳しく集計しています。</p>
        <SectionHeading id="howto">選び方と使い方の注意</SectionHeading>
        <SubHeading>選ぶとき</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>メニューごとの栄養成分（食塩相当量・たんぱく質）が公式サイトで確認できるサービスを選ぶ</li><li>おかずのみの弁当は、ご飯の量でエネルギーを調整する</li><li>定期便は、スキップや食数の変更ができるかを確認しておく（体調で食べられない週がある）</li></ul>
        <SubHeading>食べるとき</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>冷凍弁当は表示どおりに電子レンジで加熱する（中心まで温まらないときは追加で加熱する）</li><li>賞味期限と冷凍庫の容量に合わせて食数を選ぶ</li><li>医師から塩分やエネルギーの制限を指示されている場合は、その値に合うメニューだけを選ぶ</li></ul>
        <p className="text-sm mb-6 leading-relaxed">出産後の食事の準備は<Link href="/articles/sango-osusume/" className="text-accent underline">産後におすすめの宅配弁当</Link>、冷凍弁当の加熱は<Link href="/articles/reitou-bento-atatame-kata/" className="text-accent underline">冷凍弁当の温め方</Link>、減塩を重視する場合は<Link href="/articles/genenshoku-takuhai/" className="text-accent underline">減塩食の宅配</Link>も参考にしてください。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">妊娠中の宅配弁当は、食事摂取基準2025の値から、1食あたり塩分2.1g以下・たんぱく質17g以上（後期は25g以上）を目安に選ぶと比べやすくなります。7社791メニューを集計すると、両方を満たすメニューは少なく、弁当と他の食事を組み合わせて1日で調整するのが現実的です。</p>
        <p className="text-sm mb-6 leading-relaxed">栄養成分は各社の公式サイトで最新の値をご確認ください。体調や検査の結果で必要な量が変わるため、医師・助産師・管理栄養士の指導を優先してください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark transition-colors">産後におすすめの宅配弁当</Link></li>
            <li><Link href="/articles/mamano-kyushoku-reviews/" className="text-accent hover:text-accent-dark transition-colors">ママの休食の口コミ・評判</Link></li>
            <li><Link href="/articles/genenshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">減塩食の宅配</Link></li>
            <li><Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">高たんぱくの宅配弁当</Link></li>
            <li><Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent hover:text-accent-dark transition-colors">冷凍弁当の栄養バランス</Link></li>
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
