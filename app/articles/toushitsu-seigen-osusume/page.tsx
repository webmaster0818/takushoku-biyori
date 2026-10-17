import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "糖質制限の宅配弁当ランキングTOP5【2026年10月】｜9社の糖質制限コースの糖質量を公式値で比較";
const ARTICLE_DESCRIPTION =
  "糖質制限向けの宅配弁当を、各社が公式に公表する1食あたりの糖質の基準と税込価格で比較します。食宅便・ウェルネスダイニング・つるかめ・まごころケア食・nosh・三ツ星ファームなど9社の糖質制限コースの比較表、選定基準、送料込み1食単価の計算方法、ランキングTOP5を掲載します（2026年10月17日更新）。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/toushitsu-seigen-osusume/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "糖質制限 宅配弁当 おすすめ, 低糖質 弁当 宅配, 糖質オフ 宅食, 糖質制限 冷凍弁当, 低糖質 宅食, ケトジェニック 宅配弁当, 糖質制限食 宅配, ロカボ 宅配弁当",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-16T00:00:00+09:00",
    modifiedTime: "2026-10-17T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "糖質制限は1日何g以下にすればいいですか？",
    answer:
      "よく使われる目安は、一般社団法人 食・楽・健康協会が提唱する「ロカボ」で、1食20〜40g・デザート10g以下・1日70〜130gです（locabo.net「ロカボとは」・2026年10月17日確認）。これより厳しい制限は、持病の有無や体質によって適切な量が変わるため、医師や管理栄養士に相談して決めてください。noshの全メニュー糖質30g以下は、ロカボの1食の範囲に収まる基準です。",
  },
  {
    question: "糖質制限の宅配弁当は美味しいですか？味が薄くないですか？",
    answer:
      "糖質制限の宅配弁当は「低糖質＝味が薄い」というイメージと異なり、むしろ味付けがしっかりしている商品が多い傾向があります。糖質を減らす代わりに脂質やたんぱく質で旨味を出すため、満足感があります。低糖質セレクトを実食したROOMIEは「品数が多くて、どれもボリュームがあること」を評価しています。味の感じ方には個人差があるため、各社のお試しや少ない食数のセットで確かめるのがおすすめです。",
  },
  {
    question: "糖質制限で頭がぼーっとするのは大丈夫ですか？",
    answer:
      "糖質制限を始めて1〜2週間は、脳のエネルギー源が糖質から脂質（ケトン体）に切り替わる過程で、頭がぼーっとする・倦怠感・頭痛などの症状（ケトフル）が出ることがあります。これは一時的な症状で、多くの場合2〜3週間で改善します。対策としては、水分と塩分を十分に摂ること（1日2L以上の水+塩分6g程度）、急激に糖質を減らさず徐々に減らすことです。症状が長引く場合は医師に相談してください。",
  },
  {
    question: "糖尿病で糖質制限が必要な場合、宅配弁当は使えますか？",
    answer:
      "はい、糖尿病の食事管理に宅配弁当は非常に有効です。ウェルネスダイニングの糖質＆カロリー制限食（糖質15g以下）やDr.つるかめキッチンの糖尿病食は、医師・管理栄養士が監修しており安心です。食宅便の低糖質セレクト（糖質10g以下）は最も厳密な糖質管理が可能です。ただし、糖尿病の食事管理は個人差が大きいため、必ずかかりつけ医や管理栄養士の指導のもとでご利用ください。インスリン使用中の方は特に注意が必要です。",
  },
  {
    question: "糖質制限の宅配弁当にご飯は付けるべきですか？",
    answer:
      "糖質制限のレベルによります。ロカボ（1食40g以下）ならご飯70g（糖質約26g）を付けてもOKです。スタンダード糖質制限（1食30g以下）なら、ご飯なしかこんにゃく米（糖質約50%カット）がおすすめです。スーパー糖質制限（ケトジェニック）ならご飯は完全にカットです。noshの全メニューはご飯なし（おかずのみ）なので、糖質制限レベルに応じてご飯を調整できます。カリフラワーライスやオートミールに置き換えるのも効果的です。",
  },
];

/* ---------- Helper Components ---------- */

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><Link href="/articles/#mokuteki" className="text-foreground/70 hover:text-accent transition-colors">目的別ガイド・ランキング</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">糖質制限向け宅配弁当おすすめ</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "why", label: "糖質制限に宅配弁当がおすすめな理由" },
    { id: "how-to-choose", label: "糖質制限向け宅食の選び方4つのポイント" },
    { id: "ranking", label: "【ランキング】糖質制限におすすめの宅配弁当TOP5" },
    { id: "detail-review", label: "各サービスの詳細レビュー" },
    { id: "price-compare", label: "料金比較表" },
    { id: "menu-example", label: "糖質制限向けメニューの実例紹介" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}><a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a></li>
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
            {headers.map((h) => (<th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (<td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>))}
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
  return <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (<span key={i} className={i <= count ? "star-filled" : "star-empty"}>&#9733;</span>))}
    </span>
  );
}

function RankingCard({ rank, name, tagline, color, features, price, shipping, pros, cons }: {
  rank: number; name: string; tagline: string; color: string; features: string[]; price: string; shipping: string; pros: string[]; cons: string[];
}) {
  const rankColors: Record<number, string> = { 1: "bg-yellow-500", 2: "bg-gray-400", 3: "bg-amber-600", 4: "bg-accent", 5: "bg-accent" };
  return (
    <div className={`${color} rounded-xl p-6 mb-6 border border-warm-border`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`${rankColors[rank] || "bg-accent"} text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center`}>{rank}</span>
        <div><h3 className="text-lg font-bold">{name}</h3><p className="text-sm text-warm-gray">{tagline}</p></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
        <div><p className="font-medium mb-1">1食あたり: {price}</p><p className="font-medium">送料: {shipping}</p></div>
        <div><ul className="space-y-1">{features.map((f) => (<li key={f} className="flex items-start gap-1.5"><span className="text-accent mt-0.5">&#10003;</span><span>{f}</span></li>))}</ul></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div><p className="font-medium text-accent mb-1">メリット</p><ul className="space-y-1">{pros.map((p) => (<li key={p} className="leading-relaxed">{p}</li>))}</ul></div>
        <div><p className="font-medium text-red-600 mb-1">デメリット</p><ul className="space-y-1">{cons.map((c) => (<li key={c} className="leading-relaxed text-foreground/70">{c}</li>))}</ul></div>
      </div>
    </div>
  );
}

/* ---------- Page Component ---------- */

export default function ToushitsuSeigenOsusumePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-16T00:00:00+09:00",
    dateModified: "2026-10-17T00:00:00+09:00",
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "糖質制限におすすめの宅配弁当ランキングTOP5",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "nosh（ナッシュ）", description: "全メニュー糖質30g以下。約100種類から自由に選べ、公式メニュー一覧で各メニューの糖質量を確認できます。", url: "https://nosh.jp/" },
      { "@type": "ListItem", position: 2, name: "食宅便（低糖質セレクト）", description: "低糖質セレクトは糖質10g以下。日清医療食品が運営。", url: "https://shokutakubin.com/" },
      { "@type": "ListItem", position: 3, name: "三ツ星ファーム", description: "糖質25g以下・たんぱく質15g以上。プロの料理人が監修し、低糖質と味の両立を図っています。", url: "https://mitsuboshifarm.jp/" },
      { "@type": "ListItem", position: 4, name: "ウェルネスダイニング", description: "糖質＆カロリー制限気配り宅配食（糖質15g以下）。管理栄養士への無料相談があります。糖尿病の方にも。", url: "https://www.wellness-dining.com/" },
      { "@type": "ListItem", position: 5, name: "まごころケア食", description: "糖質制限食（糖質15g以下）を1食394円〜（21食・お得便）で提供。送料980円込みでも1食約441円です。", url: "https://magokoro-care-shoku.com/" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u76ee\u7684\u5225\u30ac\u30a4\u30c9\u30fb\u30e9\u30f3\u30ad\u30f3\u30b0\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"\u7cd6\u8cea\u5236\u9650\u5411\u3051\u5b85\u914d\u5f01\u5f53\u304a\u3059\u3059\u3081\"}]}" }}
      />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">目的別ガイド・ランキング</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-16">公開: 2026年4月16日</time>
            <time dateTime="2026-10-17">更新: 2026年10月17日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「糖質制限を始めたいけど、毎食の糖質量を計算するのが面倒...」「低糖質のメニューを自分で考えるのが大変」——そんな糖質制限の悩みを一発で解決するのが<strong>低糖質の宅配弁当</strong>です。
          </p>
          <p className="mb-3">
            糖質制限の最大のハードルは「何を食べればいいかわからない」ことです。宅配弁当なら管理栄養士が糖質量を計算済みなので、メニューを選んで食べるだけで糖質制限が完了します。自分で計算・調理する必要は一切ありません。
          </p>
          <p>
            この記事では、<strong>糖質制限に対応した宅配弁当5社を糖質量・味・価格で比較</strong>し、おすすめランキングTOP5を紹介します。<strong>糖質制限のレベル別（ロカボ・スタンダード・ケトジェニック）のおすすめ</strong>や<strong>1日の食事プラン例</strong>まで、糖質制限を宅配弁当で成功させるための情報を網羅しました。
          </p>
        </div>

        <TableOfContents />

        {/* ===== おすすめな理由 ===== */}
        <SectionHeading id="why">糖質制限に宅配弁当がおすすめな4つの理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          糖質制限ダイエットや糖尿病の食事管理に、宅配弁当が適している理由をご説明します。4つの理由を解説します。
        </p>

        {[
          {
            icon: "&#128200;",
            title: "糖質量が「保証」されている安心感",
            text: "自炊で糖質制限をする場合、食材ごとの糖質量を調べ、調味料の糖質も計算し、合計値を出す——これを毎食行うのは非常に面倒です。宅配弁当なら「全メニュー糖質30g以下」（nosh）、「糖質10g以下」（食宅便）と数値が保証されているため、メニューを選ぶだけで確実に糖質を制限できます。「つい食べすぎてしまった」「計算を間違えた」といった失敗がゼロになるのは、糖質制限の成功率を大きく上げる要因です。",
          },
          {
            icon: "&#127860;",
            title: "低糖質なのに美味しい。糖質制限の「我慢」が減る",
            text: "自分で低糖質料理を作ると、味が単調になりがちで飽きて挫折するケースが少なくありません。宅配弁当はプロの料理人や管理栄養士が「低糖質でも美味しい」レシピを開発しており、60〜160種類以上のメニューから選べます。noshにはスイーツもあり、たとえば「しっとりかぼちゃケーキ(3個)」は糖質8.3gです（nosh公式メニュー一覧・2026年10月17日確認）。「我慢しないで糖質制限」が実現できます。",
          },
          {
            icon: "&#9201;",
            title: "糖質制限食の自炊は時間がかかる。宅配弁当ならレンジ5分",
            text: "糖質制限の自炊は、通常の自炊より手間がかかります。米・パン・パスタなどの主食を使えないため、代替食材（こんにゃく麺・カリフラワーライス等）を用意する必要があり、レシピの幅も限られます。宅配弁当ならレンジで5分温めるだけです。糖質量の計算も調理も不要で、浮いた時間を仕事・運動・趣味に使えます。特に忙しい方にとって、「糖質制限のための調理時間ゼロ」は大きなメリットです。",
          },
          {
            icon: "&#128202;",
            title: "PFCバランスが最適化されており、筋肉を落とさずに糖質制限できる",
            text: "糖質制限で最も注意すべきは「糖質を減らした分のカロリーをどこで補うか」です。たんぱく質と良質な脂質で補わないと、筋肉量が減り基礎代謝が下がってリバウンドします。宅配弁当はPFC（たんぱく質・脂質・炭水化物）のバランスが計算されており、noshの主菜87品のたんぱく質は平均17.9g（nosh公式メニュー一覧・2026年10月17日確認）、三ツ星ファームは基準が15g以上です。糖質を抑えながらたんぱく質をしっかり確保する設計で、「筋肉を維持しながら体脂肪を減らす」理想的な糖質制限をサポートします。",
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-xl" dangerouslySetInnerHTML={{ __html: item.icon }} />
            <div>
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 選び方 ===== */}
        <SectionHeading id="how-to-choose">糖質制限向け宅食の選び方4つのポイント</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          糖質制限の宅配弁当は、サービスごとに糖質量の基準が大きく異なります。自分の糖質制限レベルに合ったサービスを選ぶための4つのポイントを解説します。
        </p>

        {[
          { num: 1, title: "1食あたりの糖質量（自分の制限レベルに合っているか）", text: "宅配弁当の糖質量は、nosh（30g以下）、三ツ星ファーム（25g以下）、ウェルネスダイニング（15g以下）、食宅便の低糖質セレクト（10g以下）と大きく異なります。ロカボ（緩やかな糖質制限）ならnoshで対応できます。スタンダード糖質制限なら三ツ星ファームかウェルネスダイニングが適しています。ケトジェニック（スーパー糖質制限）なら食宅便の低糖質セレクトが適しています。自分の糖質制限レベルに合った糖質量のサービスを選ぶことが最も重要です。" },
          { num: 2, title: "たんぱく質量（糖質を減らした分、たんぱく質で補えるか）", text: "糖質制限では、糖質を減らした分のカロリーをたんぱく質と脂質で補う必要があります。1食あたりたんぱく質15g以上を確保することをおすすめします。nosh（主菜87品の平均17.9g）、三ツ星ファーム（基準15g以上）は公式の値で確認できます。食宅便の低糖質セレクト・ウェルネスダイニングの糖質＆カロリー制限は、たんぱく質の基準を公表していないため、商品ごとの栄養表示で確認してください。たんぱく質が不足すると筋肉量が減るため、必ずご確認ください。" },
          { num: 3, title: "メニューの豊富さ（糖質制限でも飽きずに続けられるか）", text: "同じものばかりでは続けにくいため、メニュー数と選べるかどうかを確認します。noshは約100種類（主菜87品＋スイーツ等・2026年10月17日・公式確認）、三ツ星ファームは125種類以上（2026年10月9日・公式確認）から自分で選べます。食宅便の低糖質セレクト・ウェルネスダイニング・まごころケア食はおまかせのセットです。" },
          { num: 4, title: "価格（糖質制限は長期戦。続けられるコストか）", text: "糖質制限は続けることが前提になるため、月額で考えることが大切です。1食あたりnosh 612円〜（12食・2026年10月10日・公式確認）、食宅便 740円（低糖質セレクト7食・2026年10月12日・公式確認）、まごころケア食 394円〜（21食・お得便・送料980円別）。週5回利用で月額は9,254円（まごころケア食・送料込み）〜18,360円です（食宅便 低糖質セレクト7食×3回・定期送料込み）。3ヶ月で約2.8〜5.5万円。この金額を無理なく続けられるかをご確認ください。nosh clubは累計購入数に応じた割引で、最高ランク（累計280食）なら12食で1食492円まで下がります。" },
        ].map((point) => (
          <div key={point.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">{point.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{point.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{point.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 糖質制限レベル別おすすめ ===== */}
        <SubHeading>糖質制限レベル別おすすめサービス</SubHeading>
        <ComparisonTable
          headers={["制限レベル", "1食の糖質量", "1日の目安", "おすすめサービス"]}
          rows={[
            ["ロカボ（緩やか）", "20〜40g", "70〜130g", "nosh（30g以下）"],
            ["スタンダード", "10〜30g", "50〜100g", "三ツ星ファーム（25g以下）"],
            ["厳格な糖質制限", "10〜15g", "30〜60g", "ウェルネスダイニング（15g以下）"],
            ["ケトジェニック", "10g以下", "20〜50g", "食宅便 低糖質セレクト（10g以下）"],
          ]}
        />

        {/* ===== ランキング ===== */}
        <SectionHeading id="ranking">【ランキング】糖質制限におすすめの宅配弁当TOP5</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          糖質量・たんぱく質・メニューの選びやすさ・価格の4項目で総合評価し、糖質制限におすすめの宅配弁当TOP5を選出しました。
        </p>

        <div className="border border-warm-border rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="font-bold mb-2">選定基準と調査方法</p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li><strong>対象:</strong> 全国に配送する冷凍の宅配弁当のうち、1食あたりの糖質の基準（「○g以下」）を公式サイトで公表しているコースがあるサービス</li>
            <li><strong>糖質量:</strong> 各社の公式表記をそのまま掲載します。「以下」は上限値、「平均」は平均値で、意味が違うため並べて比べる際は注意してください</li>
            <li><strong>価格:</strong> 公式サイトの税込価格。送料込みの1食単価は「（セット価格＋定期便の送料）÷食数」で計算しています</li>
            <li><strong>確認日:</strong> 各数値の横または表の注記に、公式サイトで確認した日付を記載しています</li>
          </ul>
          <p className="text-xs text-warm-gray">順位は宅食びより編集部が上記の項目で評価したもので、広告掲載の有無は順位に影響させていません。実食による評価は行っていないため、味については出典を明記した第三者の実食レビューを参照しています。</p>
        </div>

        <RankingCard
          rank={1}
          name="nosh（ナッシュ）"
          tagline="糖質30g以下 × 100種類以上。糖質制限の定番中の定番"
          color="bg-yellow-50"
          features={[
            "全メニュー糖質30g以下・塩分2.5g以下",
            "100種類以上（スイーツ含む）から自由に選択",
            "公式メニュー一覧で全メニューの糖質量を確認できる",
            "nosh club割引（最高ランクで12食1食492円）",
          ]}
          price="612円〜（12食プラン）"
          shipping="1,166円（関東・4〜12食）"
          pros={[
            "メニューを自分で選べる（主菜87品の糖質7.7〜29.7g）",
            "低糖質スイーツあり（しっとりかぼちゃケーキ(3個) 糖質8.3g など）",
            "約100種類（主菜87品＋スイーツ等）から選べて飽きにくい",
            "nosh club最高ランクで1食492円（12食）",
          ]}
          cons={[
            "糖質30g以下は「ロカボ」レベルです。厳密な制限には物足りない場合も",
            "メニューによって糖質量に差がある（主菜87品で7.7〜29.7g・中央値20.2g）",
            "送料が地域差大",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          noshは全メニュー糖質30g以下で、ロカボ（1食20〜40g）の範囲に収まります。メニューを自分で選べるため、公式メニュー一覧で糖質量を見て低いものを選べば、さらに抑えられます。2026年10月17日の公式メニュー一覧では、主菜87品の糖質は7.7〜29.7g（中央値20.2g）で、最も低いのは「シビれる辛味のスタミナ豚しゃぶ」の7.7gです。詳しくは<Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline">nosh(ナッシュ)の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={2}
          name="食宅便（低糖質セレクト）"
          tagline="糖質10g以下。ケトジェニック対応の最厳糖質制限"
          color="bg-amber-50"
          features={[
            "全メニュー糖質10g以下",
            "日清医療食品の管理栄養士設計",
            "7食5,180円（1食740円）",
            "らくらく定期便は送料940円（都度便1,330円）",
          ]}
          price="740円（低糖質セレクト7食5,180円）"
          shipping="940円（定期）／1,330円（都度）"
          pros={[
            "糖質10g以下は、この記事で比べたコースで最も低い上限",
            "日清医療食品の医療レベル栄養管理",
            "公式アプリで注文・配送スケジュール変更ができる",
            "7食単位で頼める",
          ]}
          cons={[
            "メニューが自分で選べない（セット制）",
            "たんぱく質の基準は公表されていない",
            "送料込みでは1食約874円（定期）とnoshより高め",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          1食の糖質をできるだけ低く抑えたい方には食宅便の低糖質セレクトです。糖質10g以下は、nosh（30g以下）の3分の1の上限です。運営は施設給食大手の日清医療食品です。詳しくは<Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark underline">食宅便の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={3}
          name="三ツ星ファーム"
          tagline="糖質25g以下 × レストラン品質。美味しい糖質制限"
          color="bg-blue-50"
          features={[
            "糖質25g以下（一部商品を除く）",
            "たんぱく質15g以上",
            "プロの料理人監修",
            "メニュー125種類以上",
          ]}
          price="711円〜（21食・通常の定期便）"
          shipping="990円（北海道・沖縄2,500円）"
          pros={[
            "プロの料理人が監修したメニュー",
            "糖質25g以下はスタンダード糖質制限に最適",
            "たんぱく質15g以上の基準で食事管理しやすい",
          ]}
          cons={[
            "noshより1食あたりやや高い",
            "お得なプランは途中解約に手数料（7,700円〜）",
            "糖質量のフィルタリング機能がない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          「糖質制限でも美味しさは妥協したくない」方には三ツ星ファームです。糖質25g以下・たんぱく質15g以上・350kcal以下の三ツ星基準で、プロの料理人監修メニューは「低糖質とは思えない」クオリティです。メニューは125種類以上から毎回選べます。詳しくは<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline">三ツ星ファームの口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={4}
          name="ウェルネスダイニング"
          tagline="糖質15g以下 × 管理栄養士相談。糖尿病の方にも安心"
          color="bg-green-50"
          features={[
            "糖質＆カロリー制限食（糖質15g以下・240kcal±10％・塩分2.0g以下）",
            "管理栄養士に無料で栄養相談",
            "献立は管理栄養士のお任せ（メニューは選べない）",
            "定期14・21食は送料無料（7食は440円）",
          ]}
          price="約770円〜（糖質＆カロリー制限21食・税込÷食数）"
          shipping="都度880円／定期7食440円・14食以上無料"
          pros={[
            "糖質15g以下はnoshより厳密な制限が可能",
            "管理栄養士に「自分に合った糖質量」を相談できる",
            "糖尿病の方も安心して利用できる",
          ]}
          cons={[
            "メニューが自分で選べない",
            "味は素朴（レストラン品質ではない）",
            "休止・解約の締切がお届け予定日の7日前と早め",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          糖尿病の食事管理や、医師から糖質制限を指示された方にはウェルネスダイニングです。糖質15g以下・塩分2.0g以下で、管理栄養士に無料で相談できる点も安心材料です。詳しくは<Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark underline">ウェルネスダイニングの口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        <RankingCard
          rank={5}
          name="まごころケア食"
          tagline="糖質15g以下。送料込みでも21食で1食約441円"
          color="bg-purple-50"
          features={[
            "糖質制限食（糖質15g以下）",
            "1食394〜426円（お得便・送料別）",
            "送料は全国一律980円（沖縄・離島1,480円）",
            "14食・21食のまとめ買いでさらにお得",
          ]}
          price="398円（14食・お得便5,572円）"
          shipping="980円（沖縄・離島1,480円）"
          pros={[
            "送料込みでも21食なら1食約441円",
            "糖質15g以下はウェルネスダイニングと同レベル",
            "コンパクト容器で冷凍庫にやさしい",
          ]}
          cons={[
            "メニューが自分で選べない（コース制）",
            "味は家庭的（グルメ志向には物足りない）",
            "栄養相談はウェルネスダイニングほど手厚くない",
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          糖質制限を最安コストで続けたい方にはまごころケア食です。糖質15g以下の糖質制限食が1食394円〜（21食・お得便）で、送料980円を含めても月約9,254円です（21食）。この記事で比べた5社の中で最も安い計算です（2026年10月12日・公式確認）。詳しくは<Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark underline">まごころケア食の口コミ・評判を徹底調査</Link>をご覧ください。
        </p>

        {/* ===== 詳細レビュー ===== */}
        <SectionHeading id="detail-review">各サービスの詳細レビュー</SectionHeading>

        <SubHeading>nosh - 糖質制限の総合力No.1</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          noshが糖質制限で1位の理由は「選ぶ楽しさ」と「続けやすさ」です。公式メニュー一覧に全メニューの糖質量が載っているため、自分の制限レベルに合ったメニューを選べます。糖質が10g未満の主菜もあります（例：シビれる辛味のスタミナ豚しゃぶ 7.7g・2026年10月17日確認）。スイーツも糖質30g以下の基準で作られており、「甘いものが食べたい」ときの選択肢になります。nosh clubの継続割引で長期利用ほどお得になるため、「3ヶ月以上の糖質制限」を計画している方に最適です。
        </p>

        <SubHeading>食宅便 - ケトジェニックの最適解</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          食宅便の低糖質セレクトは、全メニュー糖質10g以下で、この記事で比べた糖質制限コースの中で最も低い上限です。1食の糖質を確実に10g以下に抑えたい方に向いています。価格は7食5,180円（1食740円）で、らくらく定期便の送料940円を含めると1食約874円です（2026年10月12日・公式確認）。糖尿病などで食事の指示を受けている方は、主治医や管理栄養士に相談したうえでご利用ください。
        </p>

        <SubHeading>三ツ星ファーム - 美味しさNo.1の糖質制限</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          三ツ星ファームは「低糖質でも美味しさを犠牲にしない」をコンセプトに、プロの料理人が監修しています。糖質25g以下・たんぱく質15g以上・350kcal以下の三ツ星基準（一部商品を除く）で作られており、「ダイエット中でも外食レベルの食事がしたい」という方に最適です。125種類以上のメニュー（2026年10月9日・公式確認）で飽きにくく、長期の糖質制限でもモチベーションを維持しやすくなります。
        </p>

        <SubHeading>ウェルネスダイニング - 糖尿病対応の安心感</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          ウェルネスダイニングの糖質＆カロリー制限気配り宅配食は、糖質15g以下・塩分2.0g以下・カロリー240kcal±10%。管理栄養士に無料で相談でき、コース選びの相談にも使えます。休止・解約はWebフォーム・マイページ・電話で、お届け予定日の7日前までに手続きします（2026年10月10日・公式確認）。送料は定期注文の14食・21食なら無料、7食は440円です（2026年10月10日・公式確認）。
        </p>

        <SubHeading>まごころケア食 - 低コストで続ける糖質制限</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          まごころケア食の糖質制限食は、糖質15g以下が1食394円〜です（21食・お得便）。定期でも送料980円（沖縄・離島1,480円）がかかりますが、21食なら送料込みで1食約441円です。ウェルネスダイニングの糖質＆カロリー制限（21食定期は送料無料で1食約770円・税込価格÷食数で算出）と同じ糖質15g以下の基準ながら、1食あたり約330円安い計算です。月21食なら約6,900円（9,254円 vs 16,178円）の差になります。味は家庭的で素朴ですが、「毎日食べても飽きない安心感のある味」という評価が多く、長期利用に向いています。
        </p>

        {/* ===== 料金比較 ===== */}
        <SectionHeading id="price-compare">料金比較表</SectionHeading>

        <SubHeading>糖質制限コースの公式基準 9社比較（糖質の低い順）</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">ランキングの5社以外も含め、糖質制限向けのコースを持つ9社の公式の基準を並べました。</p>
        <ComparisonTable
          headers={["サービス・コース", "1食の糖質", "熱量", "塩分", "1食（税込）", "送料", "確認日"]}
          rows={[
            ["食宅便 低糖質セレクト", "10g以下", "−", "−", "740円（7食5,180円）", "定期940円／都度1,330円", "2026/10/12"],
            ["筋肉食堂DELI ローカーボ", "平均12.2g", "平均269kcal", "−", "994〜1,048円（定期21〜7食）", "関東1,640〜1,840円", "2026/10/17"],
            ["ウェルネスダイニング 糖質＆カロリー制限", "15g以下", "240kcal±10%", "2.0g以下", "約770円〜（定期21食）", "定期14・21食無料（7食440円）", "2026/10/10・10/15"],
            ["Dr.つるかめキッチン 糖質制限気づかい御膳", "15g以下", "240kcal±10%", "2.0g以下", "約741円（定期7食5,184円）", "定期は無料", "2026/10/14"],
            ["まごころケア食 糖質制限食", "15g以下", "−", "2.0g以下", "394〜426円（お得便）", "980円（沖縄・離島1,480円）", "2026/10/12・10/16"],
            ["Muscle Deli LOW CARB", "15g以下", "350kcal以上", "−", "−（4プランで1,109〜1,557円）", "−", "2026/10/14"],
            ["タイヘイ ヘルシー御膳 糖質少なめ", "17.0g以下", "−", "2.2g以下", "783円〜", "条件を満たすと無料", "2026/10/10"],
            ["三ツ星ファーム", "25g以下（一部除く）", "350kcal以下", "−", "711円〜（21食・定期）", "990円", "2026/10/9"],
            ["nosh（ナッシュ）", "30g以下（主菜87品は7.7〜29.7g）", "−", "2.5g以下", "612〜719円", "1,023円〜（地域・食数別）", "2026/10/10・10/17"],
          ]}
        />
        <p className="text-xs text-warm-gray -mt-4 mb-4">※「−」は公式サイトでそのコースの基準を確認できなかった項目です。筋肉食堂DELIは上限ではなく公式のコース平均値です。Muscle Deliは4プランの単品価格（税込）÷食数の範囲で、LOW CARB単独の価格は記載していません。</p>
        <p className="text-sm mb-6 leading-relaxed">各社の詳しい料金・口コミは<Link href="/articles/shokutakubin-reviews/" className="text-accent underline">食宅便</Link>・<Link href="/articles/kinnikushokudo-deli-kuchikomi/" className="text-accent underline">筋肉食堂DELI</Link>・<Link href="/articles/wellness-dining-reviews/" className="text-accent underline">ウェルネスダイニング</Link>・<Link href="/articles/tsurukame-reviews/" className="text-accent underline">Dr.つるかめキッチン</Link>・<Link href="/articles/magokoro-care-reviews/" className="text-accent underline">まごころケア食</Link>・<Link href="/articles/muscle-deli-reviews/" className="text-accent underline">Muscle Deli</Link>・<Link href="/articles/taihei-family-set-kuchikomi/" className="text-accent underline">タイヘイ</Link>・<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファーム</Link>・<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh</Link>の各記事にまとめています。</p>

        <SubHeading>ランキング5社の糖質量・料金比較一覧</SubHeading>
        <ComparisonTable
          headers={["サービス", "1食あたり", "送料", "糖質量", "たんぱく質", "メニュー数"]}
          rows={[
            ["nosh", "612円〜", "1,023円〜（地域別）", "30g以下", "主菜87品の平均17.9g", "主菜87品＋スイーツ等"],
            ["食宅便（低糖質セレクト）", "740円", "940円（定期）／1,330円（都度）", "10g以下", "基準の公表なし", "おまかせ（7食単位）"],
            ["三ツ星ファーム", "711円〜", "990円", "25g以下（一部除く）", "15g以上（一部除く）", "125種類以上"],
            ["ウェルネスダイニング", "約770円〜", "定期14・21食無料（7食440円）", "15g以下", "基準の公表なし", "お任せ（選べない）"],
            ["まごころケア食", "394円〜（21食・お得便）", "980円（沖縄・離島1,480円）", "15g以下", "基準の公表なし", "コース制"],
          ]}
        />

        <SubHeading>月額コストシミュレーション（週5回夕食利用・関東在住）</SubHeading>
        <ComparisonTable
          headers={["サービス", "プラン", "食材費/月", "送料/月", "月額合計"]}
          rows={[
            ["nosh", "10食×2回", "12,412円", "2,332円", "14,744円"],
            ["食宅便（低糖質セレクト・定期）", "7食×3回", "15,540円", "2,820円", "18,360円"],
            ["三ツ星ファーム", "14食+7食", "17,943円", "1,980円", "19,923円"],
            ["ウェルネスダイニング（糖質＆カロリー制限）", "21食×1回", "16,178円", "0円", "16,178円"],
            ["まごころケア食（お得便）", "21食", "8,274円", "980円", "9,254円"],
          ]}
        />

        <p className="text-xs text-warm-gray -mt-4 mb-6">※nosh・ウェルネスダイニングの料金・送料は2026年10月10日に公式サイトで確認しています（税込・noshの送料は関東1,166円で計算）。三ツ星ファームは2026年10月9日に確認しています。まごころケア食（お得便21食8,274円・送料980円）と食宅便（低糖質セレクト7食5,180円・らくらく定期便送料940円）は2026年10月12日に確認しています。その他は記事作成時の公開データです。</p>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">糖質制限のコスパの比較結果</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>最安：まごころケア食</strong>（月9,254円）——送料980円を含めてもこの5社で最安です。糖質15g以下で長期の糖質制限に向く</li>
            <li><strong>バランス型：nosh</strong>（月14,744円）——コスパと自由度の両立。スイーツも低糖質</li>
            <li><strong>厳密制限：食宅便</strong>（月18,360円）——糖質10g以下でケトジェニック対応。送料込みではnoshより月約3,600円高い</li>
            <li><strong>味重視：三ツ星ファーム</strong>（月19,923円）——美味しく糖質制限したい方に</li>
          </ul>
        </div>

        {/* ===== メニュー実例 ===== */}
        <SectionHeading id="menu-example">糖質制限向けメニューの実例紹介</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          各サービスの低糖質メニューを具体的に紹介します。「実際にどの程度の糖質量で、どんなメニューが食べられるのか」をイメージしていただけます。
        </p>

        <SubHeading>nosh - 糖質の低い主菜TOP5（2026年10月17日・公式メニュー一覧）</SubHeading>
        <ComparisonTable
          headers={["メニュー名", "糖質", "カロリー", "たんぱく質", "塩分"]}
          rows={[
            ["シビれる辛味のスタミナ豚しゃぶ", "7.7g", "253kcal", "10.4g", "2.4g"],
            ["鶏もも肉の炭火焼き〜極〜", "8.7g", "266kcal", "17.4g", "2.2g"],
            ["鶏もも肉のとろみ白湯スープ", "9.4g", "254kcal", "17.1g", "2.5g"],
            ["ふっくら白身魚のトマトチーズかけ", "9.7g", "220kcal", "18.8g", "2.2g"],
            ["痺れる旨辛よだれ鶏", "10.2g", "329kcal", "18.3g", "2.4g"],
          ]}
        />
        <p className="text-xs text-warm-gray -mt-4 mb-6">※nosh公式メニュー一覧（nosh.jp/menu）に掲載の主菜87品の栄養成分から、糖質の低い順に5品を掲載しています。メニューは入れ替わるため、注文時に公式サイトでご確認ください。</p>

        <SubHeading>糖質制限レベル別1日食事プラン例</SubHeading>

        <p className="font-bold text-sm mt-6 mb-2">ロカボ（1日70〜130g）- nosh利用</p>
        <ComparisonTable
          headers={["食事", "メニュー例", "糖質"]}
          rows={[
            ["朝食", "トースト1枚+チーズ+サラダ", "約30g"],
            ["昼食", "おにぎり1個+サラダチキン+味噌汁", "約40g"],
            ["夕食", "nosh「チリハンバーグステーキ」（ご飯なし）", "18.8g"],
            ["間食", "nosh「しっとりかぼちゃケーキ(3個)」", "8.3g"],
            ["合計", "", "約97.1g"],
          ]}
        />

        <p className="font-bold text-sm mt-6 mb-2">ケトジェニック（1日50g以下）- 食宅便利用</p>
        <ComparisonTable
          headers={["食事", "メニュー例", "糖質"]}
          rows={[
            ["朝食", "スクランブルエッグ+アボカド+チーズ", "約5g"],
            ["昼食", "サラダチキン+ナッツ+オリーブオイルサラダ", "約8g"],
            ["夕食", "食宅便 低糖質セレクト", "約10g"],
            ["間食", "チーズ+くるみ", "約3g"],
            ["合計", "", "約26g"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          1日50g以下のような厳しい糖質制限は、体調や持病によって向き不向きがあるため、医師に相談してから行ってください。食宅便の低糖質セレクト（10g以下）を夕食に使えば、残りの食事の糖質の枠を広く取れます。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：糖質制限の宅食選び、自分のレベルに合ったサービスを</SectionHeading>

        <SubHeading>糖質制限レベル別おすすめ早見表</SubHeading>
        <ComparisonTable
          headers={["糖質制限のレベル", "おすすめサービス"]}
          rows={[
            ["初めての糖質制限（ロカボ）", "nosh（糖質30g以下）"],
            ["スタンダード糖質制限", "三ツ星ファーム（糖質25g以下）"],
            ["厳格な糖質制限", "ウェルネスダイニング（糖質15g以下）"],
            ["ケトジェニック", "食宅便 低糖質セレクト（糖質10g以下）"],
            ["コスパ最優先", "まごころケア食（糖質15g以下・21食で送料込み1食約441円）"],
            ["美味しさ最優先", "三ツ星ファーム or nosh"],
            ["糖尿病の食事管理", "ウェルネスダイニング or 食宅便"],
          ]}
        />

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/10">
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">食宅便</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネス</th>
                  <th className="border border-warm-border px-3 py-2 text-left font-bold">まごころ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["糖質制限おすすめ度", 5, 5, 4, 4, 4],
                  ["糖質量の低さ", 3, 5, 4, 4, 4],
                  ["味", 4, 3, 5, 3, 3],
                  ["コスパ", 4, 4, 3, 3, 5],
                  ["メニュー自由度", 5, 2, 3, 2, 2],
                ].map(([label, ...scores], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium text-xs">{label as string}</td>
                    {(scores as number[]).map((score, j) => (
                      <td key={j} className="border border-warm-border px-3 py-2"><StarRating count={score} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            糖質制限初心者は<strong>nosh</strong>からスタートするのがおすすめです。全メニュー糖質30g以下でロカボ（1食20〜40g）の範囲に収まり、公式メニュー一覧で糖質量を確認しながらメニューを選べます。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            厳密な糖質制限やケトジェニックを実践する方は<strong>食宅便の低糖質セレクト</strong>（糖質10g以下）。糖尿病の食事管理なら<strong>ウェルネスダイニング</strong>（管理栄養士に相談可能）が安心です。
          </p>
          <p className="text-sm leading-relaxed">
            「糖質制限はしたいけど、何を食べればいいかわからない」——その悩み、宅配弁当を選ぶだけで解決です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">関連記事</p>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の口コミ・評判を徹底調査
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ダイエット向け宅配弁当おすすめランキング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            【3社比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食を専門とする編集チームです。公開情報や利用者の口コミをもとに、公平な比較情報の提供に努めます。</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】食宅便の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】ウェルネスダイニングの口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark transition-colors">ダイエット向け宅配弁当おすすめランキングTOP5</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">【3社比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link></li>
            <li><Link href="/articles/goodeli-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">goodeli(グーデリ)とは？料金・送料・GOFOODとの違い</Link></li>
            <li><Link href="/articles/rizap-supportmeal-reviews/" className="text-accent hover:text-accent-dark transition-colors">ライザップ サポートミールの口コミ・評判</Link></li>
          </ul>
        </div>
      
        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約しています。1食あたりの栄養基準を公式に明記している社はその基準値（「以下」「以上」・コース別の場合は範囲）、メニューごとの値だけを公開している社（nosh・FIT FOOD HOME）は公式メニュー一覧の主菜の中央50%（四分位）の範囲を記載しています。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link>をご参照ください。
          </p>
          <p className="text-xs text-warm-gray mb-3">※ヨシケイ・コープデリの行は2026年10月16日に公式サイトで再確認した値です（表の下の注記にある両社の栄養値の記述より新しい情報です）。ヨシケイの1食はヨシケイ東京の冷凍弁当（シンプルミール3食1,290円＝430円・ベジミール2食1,490円＝745円）と、2025年9月のコース刷新後のミールキット等（2人用5日分の通常価格目安6,830〜9,200円÷10食＝約683〜920円）の範囲です。kcalの基準はバランスミール（1食400kcal以下）のみ公表されており、糖質・タンパク質・塩分は1食あたりの公表がないため「−」としています。コープデリは夕食宅配（舞菜）6コースの税込価格（舞菜ミニ弁当464円〜舞菜御膳・エネルギー塩分調整食842円）で、2食以上の同時注文で1食24円（税抜）引きになるのは舞菜弁当・舞菜おかず・舞菜しっかりおかず・舞菜御膳の4コースのみです。kcal・塩分は公式の献立表サンプル（2026年3月の1週間）の範囲で、糖質・タンパク質は公表がないため「−」としています。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-warm-border bg-white rounded-lg overflow-hidden">
              <thead className="bg-cream">
                <tr>
                  <th className="border-b border-warm-border px-3 py-2 text-left text-xs font-bold text-foreground">サービス</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">kcal</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">糖質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">タンパク質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">塩分(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">1食(円)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">nosh（ナッシュ）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">260-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">612-719</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">三ツ星ファーム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">25以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">711-927</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウェルネスダイニング</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-330</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-24（平均）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">9-13（平均）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">752-1,165</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://magokoro-care-shoku.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">まごころケア食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以下（糖質制限食のみ）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10以下（たんぱく調整食のみ）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">394-426</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワタミの宅食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">250-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.5-4.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">470-790</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://shokutakubin.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">食宅便</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0未満（ケア系）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">690-740</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">Muscle Deli</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-750</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-75以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-50以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,109-1,557</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">400以下（バランスミールのみ）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">430-920</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">229-496</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.2-3.8</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">464-842</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.pal-system.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">パルシステム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">580-720</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ナッシュclub（割引）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">260-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">492〜（最高ランク）</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">つるかめキッチン</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-300</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">13</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">663-787</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://1meal.life/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワンミール</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">770-840</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://store.tavenal.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">FIT FOOD HOME</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">310-420</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">16-27</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">18-28</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.4-2.1</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,188-1,308</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://gofood.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">GOFOOD</a>（2025年6月30日にサービス終了）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">サービス終了</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※2026年5月時点の公開データです。以下の項目は各社の公式サイトで再確認しています。1食価格のMuscle Deli・FIT FOOD HOME・つるかめキッチンは2026年10月14日に再確認しました（Muscle Deliは4プランの単品価格（税込）÷食数（LEAN 15食〜GAIN 5食）、FIT FOOD HOMEは1人前の単品価格（税込1,188円・角煮など一部1,308円。10個まとめ割は1,129円〜）、つるかめキッチンは定期コースの税込価格÷食数（送料無料・バランス栄養御膳21食663円〜たんぱく＆塩分制限7食787円））。栄養値は2026年10月14日に再確認しました（noshは公式基準「糖質30g・塩分2.5g以下」と公式メニュー一覧の主菜88品、まごころケア食は全6コースの基準（健康バランス300kcal以下・カロリー調整240kcal±10%ほか。たんぱく調整食のみ300kcal以上）、ワタミの宅食は各商品の基準（熱量250〜500kcal基準・糖質は手鞠20g/おかず30g/ダブル35g以下・食塩相当量1.5〜4.0g以下）、Muscle Deliは4プランの基準（LOW CARB〜GAIN）、つるかめキッチンは5コースの基準（糖質15g以下は糖質制限気づかい御膳）、FIT FOOD HOMEは公式ストアの主菜19品（複数人前のパックを除く））。2026年10月15日には、ウェルネスダイニングの糖質・たんぱく質（各コースの公式公表の平均値の範囲。基準があるのは糖質＆カロリー制限の糖質15g以下、たんぱく＆塩分調整のたんぱく質10g以下、脂質制限の糖質27g以下・たんぱく質9g以上。厳選栄養バランスは糖質の公表なし）と塩分（6コースの基準：2.0〜2.5g以下）、まごころケア食の塩分（6コースの基準。健康バランス・カロリー調整は2.5g以下、ほかは2.0g以下）を再確認しました。2026年10月16日に公式サイト（6コースの商品ページの栄養表示）で再確認したところ、まごころケア食は1食あたりの平均値を公表しておらず、コース別の基準のみを公表しています。糖質の基準があるのは糖質制限食（15g以下）、たんぱく質の基準があるのはたんぱく調整食（10g以下）のみで、ほかのコースは公表がないため、この2つのみをコース名付きで記載しています（以前の「30-40」「15-20」は公式で確認できない値のため削除しました）。食宅便の塩分の基準はケア系（塩分&カロリーケア・たんぱくケア）の2.0g未満のみで、おまかせコースには基準がありません（10月15日掲載の7品で1.5〜2.4g）。食宅便のkcal・糖質・たんぱく質（公式の基準は低糖質セレクトの糖質10g以下・たんぱくケアのたんぱく質10.2g程度のみ）、Muscle Deliの塩分、つるかめキッチンのたんぱく質、ヨシケイ・コープデリ・パルシステム・ワンミール・GOFOODの栄養値は公式で確認できず、5月時点の値のままです。ワタミの宅食の1食価格は2026年10月13日に再確認しました（冷蔵7商品の5日間コースで宅配料込み470〜790円）。食宅便とまごころケア食の1食価格は2026年10月12日に再確認しました（食宅便は7食セット690〜740円、まごころケア食はお得便394〜426円、いずれも送料別）。三ツ星ファームの行は2026年10月9日に再確認し、kcal・糖質・タンパク質を三ツ星基準に、価格を通常の定期便の1食単価に更新しました。塩分は公式に基準の記載が見当たらないため「−」としています。nosh・ナッシュclub・ウェルネスダイニングの価格は2026年10月10日に再確認しました。noshは公式表記の1食単価、ウェルネスダイニングは全6コース・7〜21食の税込価格÷食数で算出し、kcal・塩分は各コースの公式基準に更新しています。最新情報は各公式サイトでご確認ください。</p>
        </section>

                {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
