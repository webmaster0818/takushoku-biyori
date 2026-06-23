import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "高タンパク質 冷凍宅配弁当ランキング【2026年版】筋トレ・ダイエット向け7選";
const ARTICLE_DESCRIPTION =
  "高タンパク質の冷凍宅配弁当を徹底比較。筋トレ・ダイエット・ボディメイク向けに1食タンパク質20g以上の宅配弁当7社をランキング。マッスルデリ・GOFOOD・nosh・三ツ星ファームなどをタンパク質量・価格・PFCバランスで評価します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/kou-tanpaku-ranking/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "高タンパク 宅配弁当, 高タンパク質 冷凍弁当, 筋トレ 宅配, ボディメイク 宅配弁当, タンパク質 多い 弁当, ダイエット 高タンパク, プロテイン 弁当, マッスルデリ ランキング, ナッシュ タンパク質",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-05-28T00:00:00+09:00",
    modifiedTime: "2026-05-28T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "1食あたりタンパク質はどれくらい必要ですか？",
    answer:
      "厚生労働省の食事摂取基準では、成人男性で1日65g、成人女性で50gが推奨量とされています。筋トレやボディメイクを行っている場合は、体重1kgあたり1.5〜2.0g(体重60kgなら90〜120g/日)が一般的な目安です。1日3食で割ると1食あたり25〜40g前後が必要。高タンパク宅配弁当では1食20g以上を確保しているものを選ぶのが効率的です。",
  },
  {
    question: "プロテインだけでは不十分ですか？",
    answer:
      "プロテインは手軽にタンパク質を補えますが、咀嚼を伴わず満腹感が得にくいこと、必須アミノ酸以外の栄養素(食物繊維・ビタミン・ミネラル)が不足することがデメリットです。高タンパク宅配弁当は、固形物としての満足感と他の栄養素を同時に取れるため、プロテインと併用するのが理想的な運用です。",
  },
  {
    question: "ランキングはどう作成されていますか？",
    answer:
      "本ランキングは、(1)1食あたりのタンパク質量、(2)PFCバランス(脂質・糖質も適切か)、(3)1食あたりの価格、(4)メニューの豊富さ、(5)継続のしやすさ(縛り・解約条件)、(6)送料を含む実質コスト、の6軸で総合評価しています。公式サイトの公開情報を基にしており、栄養成分・価格は2026年5月時点。最新情報は各公式でご確認ください。",
  },
  {
    question: "1食タンパク質30g以上のおすすめは？",
    answer:
      "30g以上を安定して確保したいなら【マッスルデリLEAN(30g以上)】【マッスルデリMAINTAIN(35g以上)】【マッスルデリGAIN(50g以上)】が筆頭候補。GOFOODやFIT FOOD HOMEのプロテイン特化メニューも20〜40g前後を確保しています。noshや三ツ星ファームはメニューにより15〜25gが多く、30g以上の確保が難しい場合があります。",
  },
  {
    question: "コスパ重視で高タンパクなのは？",
    answer:
      "高タンパク+コスパの両立を求めるなら【nosh(1食599円〜・タンパク質15-25g)】が最も現実的。タンパク質量はマッスルデリほど多くありませんが、価格は約半額。複数食を組み合わせれば必要量を確保できます。「マッスルデリは高すぎる、でも普通の冷凍弁当ではタンパク不足」という方の落としどころとしておすすめです。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">ランキング</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">高タンパク質 冷凍宅配弁当ランキング</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "why", label: "なぜ「高タンパク宅配弁当」が選ばれるのか" },
    { id: "criteria", label: "ランキング評価基準" },
    { id: "ranking", label: "高タンパク冷凍宅配弁当ランキングTOP7" },
    { id: "compare-table", label: "主要7社の数値比較表" },
    { id: "howto-choose", label: "目的別の選び方ガイド" },
    { id: "cost-tip", label: "高タンパク宅配のコスパ最適化テク" },
    { id: "faq", label: "よくある質問(FAQ)" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a>
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

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>&#9733;</span>
      ))}
    </span>
  );
}

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="my-4 text-center">
      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-2.5 px-6 rounded-full text-sm transition-colors shadow-md">{children}</a>
    </div>
  );
}

const rankingItems = [
  {
    rank: 1,
    name: "マッスルデリ(Muscle Deli)",
    url: "https://muscledeli.jp/",
    protein: "30〜50g以上(プラン別)",
    price: "高め",
    score: 5,
    summary: "ボディメイク特化型。LEAN/MAINTAIN/GAIN/LOW CARBの4プランで目的別にPFCを最適化。タンパク質量・栄養設計の精度では他社を圧倒する。",
    pros: ["1食タンパク質30g以上を安定確保", "目的別4プランで減量・増量・糖質制限に対応", "メイン肉料理が満足感高い"],
    cons: ["1食単価が高め", "冷凍庫スペースを取る"],
    target: "本気でボディメイクするトレーニー / モデル / 俳優",
    reviewLink: "/articles/muscle-deli-reviews/",
  },
  {
    rank: 2,
    name: "GOFOOD(ゴーフード)",
    url: "https://gofood.jp/",
    protein: "20〜40g",
    price: "高め",
    score: 4,
    summary: "低糖質(10〜20g)×高タンパクを両立。糖質制限と筋トレを並行している層に支持される。",
    pros: ["1食糖質10〜20gと低い", "タンパク質20〜40g確保", "ケトジェニックにも使える"],
    cons: ["価格は高め", "メニュー選択が限られる"],
    target: "糖質制限+筋トレを並行する層",
  },
  {
    rank: 3,
    name: "FIT FOOD HOME",
    url: "https://fitfoodhome.tabeyoukai.com/",
    protein: "20〜35g",
    price: "中〜高",
    score: 4,
    summary: "管理栄養士監修。プロテインタイプ・低糖質タイプなど目的別メニューがあり、健康志向の高タンパク食として支持される。",
    pros: ["管理栄養士監修で安心", "添加物への配慮あり", "メニュー目的別に選べる"],
    cons: ["価格はnoshより高め", "メニュー数は中規模"],
    target: "添加物配慮+高タンパクを両立したい人",
  },
  {
    rank: 4,
    name: "ライザップ サポートミール",
    url: "https://shop.rizap.jp/shop/pages/supportmeal_c.aspx",
    protein: "1食あたりタンパク質を意識した設計",
    price: "高め(1食828〜883円)",
    score: 4,
    summary: "糖質9.5〜12gという厳格な低糖質設計。RIZAPメソッドに基づくダイエット食。",
    pros: ["糖質量は他社で代替不可", "RIZAPブランドの信頼性", "洋食メニューが本格的"],
    cons: ["定期は3回継続条件", "1食単価が高い"],
    target: "厳しい糖質制限+ダイエット結果重視の人",
    reviewLink: "/articles/rizap-supportmeal-reviews/",
  },
  {
    rank: 5,
    name: "nosh(ナッシュ)",
    url: "https://nosh.jp/",
    protein: "15〜25g",
    price: "低〜中(1食599円〜)",
    score: 4,
    summary: "コスパと自由度のバランスが最高。タンパク質量はマッスルデリほどではないが、価格が約半額で続けやすい。",
    pros: ["1食599円〜の低単価", "メニュー60種類以上", "アプリ管理が高機能", "解約縛りなし"],
    cons: ["タンパク質はメニュー次第", "30g超は希少"],
    target: "コスパ最重視+ライトな筋トレ・ダイエット",
    reviewLink: "/articles/nosh-reviews/",
  },
  {
    rank: 6,
    name: "三ツ星ファーム",
    url: "https://mitsuboshi-farm.jp/",
    protein: "20〜30g",
    price: "中〜高(626円〜)",
    score: 3,
    summary: "シェフ監修で味のクオリティ最高。タンパク質量も十分。「健康食=味気ない」を覆すグルメ志向。",
    pros: ["味のクオリティが業界トップクラス", "80種類以上のメニュー", "解約縛りなし"],
    cons: ["タンパク質30g超は少なめ", "価格はnoshより高い"],
    target: "味のクオリティを最優先する筋トレ層",
    reviewLink: "/articles/mitsuboshi-farm-reviews/",
  },
  {
    rank: 7,
    name: "ワンミール",
    url: "https://1meal.life/",
    protein: "20〜30g",
    price: "中〜高(770〜840円)",
    score: 3,
    summary: "タンパク質20〜30g×糖質20〜30gのバランス型。低糖質と高タンパクの両立を目指す中庸路線。",
    pros: ["PFCバランスが安定", "コンパクトな容器"],
    cons: ["価格はやや高め", "メニュー数は中規模"],
    target: "バランス重視+続けやすさ重視の人",
  },
];

export default function KouTanpakuRankingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-05-28T00:00:00+09:00",
    dateModified: "2026-05-28T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "ランキング" },
      { "@type": "ListItem", position: 3, name: "高タンパク質 冷凍宅配弁当ランキング" },
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
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">ランキング</span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link></span>
          </div>
          <div className="mt-3 text-xs text-warm-gray bg-yellow-50 border border-yellow-200 rounded p-2">
            PR: 本記事には広告(アフィリエイトリンク)が含まれます。価格・栄養成分は変更される場合があるため、最新情報は必ず各公式サイトでご確認ください。
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「筋トレしてるけど、毎日鶏むね茹でるのに飽きた」「ダイエット中だけどプロテインだけじゃ物足りない」——そんな筋トレ・ボディメイク中のあなたに役立つのが、<strong>高タンパク冷凍宅配弁当</strong>です。
          </p>
          <p className="mb-3">
            この記事では、<strong>1食あたりタンパク質20g以上を確保している宅配弁当7社をランキング</strong>。マッスルデリ・GOFOOD・nosh・三ツ星ファームなどを、タンパク質量・PFCバランス・価格・続けやすさで総合評価しました。
          </p>
          <p>
            数値はすべて公式情報ベース。<strong>「自分の目的・予算で最適なのはどれか」</strong>を判断できる内容にまとめています。
          </p>
        </div>

        <TableOfContents />

        <SectionHeading id="why">なぜ「高タンパク宅配弁当」が選ばれるのか</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          タンパク質は筋肉・髪・爪・皮膚・酵素などを構成する、人体に必須の栄養素です。トレーニングをしている人は<strong>体重1kgあたり1.5〜2.0g</strong>(体重60kgなら90〜120g/日)が一般的な目安。これを1日3食で割ると1食あたり25〜40gが必要になります。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          しかし現実問題、1食でこれだけタンパク質を確保するのは大変です。
        </p>

        <ul className="text-sm mb-6 list-disc list-inside space-y-1">
          <li>鶏むね肉100gあたりタンパク質約23g。30g摂るには約130g必要。</li>
          <li>サラダチキン1個あたりタンパク質約20〜25g。</li>
          <li>卵1個あたりタンパク質約6g。30gなら卵5個分。</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          自炊で毎日これを実現するのは時間的・金銭的に厳しい。だからこそ<strong>「温めるだけで1食タンパク質20〜50gが確保できる」高タンパク宅配弁当</strong>が、筋トレ・ダイエット層で人気を集めているわけです。
        </p>

        <SectionHeading id="criteria">ランキング評価基準</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          本ランキングは以下の6つの軸で総合評価しています。
        </p>

        <ComparisonTable
          headers={["評価軸", "内容"]}
          rows={[
            ["タンパク質量", "1食あたりの平均/最大値。20g未満は対象外"],
            ["PFCバランス", "タンパク質に対して脂質・糖質も適切か"],
            ["価格(1食単価)", "通常購入時・定期購入時の両方"],
            ["メニュー数", "豊富さと飽きにくさ"],
            ["継続性", "解約縛り・スキップ柔軟性"],
            ["送料込み実質コスト", "地域別送料を含めた総額"],
          ]}
        />

        <SectionHeading id="ranking">高タンパク冷凍宅配弁当ランキングTOP7</SectionHeading>

        {rankingItems.map((item) => (
          <div key={item.rank} className="border border-warm-border rounded-xl p-5 mb-6 bg-white">
            <div className="flex items-start gap-3 mb-3">
              <span className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center text-base font-bold">{item.rank}位</span>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                <StarRating count={item.score} />
              </div>
            </div>
            <p className="text-sm mb-3 leading-relaxed">{item.summary}</p>
            <div className="text-sm mb-3 grid grid-cols-2 gap-2">
              <div><strong>タンパク質:</strong> {item.protein}</div>
              <div><strong>価格帯:</strong> {item.price}</div>
            </div>
            <div className="bg-green-50 rounded p-3 mb-2 text-sm">
              <p className="font-bold mb-1">良い点</p>
              <ul className="list-disc list-inside space-y-0.5">
                {item.pros.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="bg-red-50 rounded p-3 mb-2 text-sm">
              <p className="font-bold mb-1">気になる点</p>
              <ul className="list-disc list-inside space-y-0.5">
                {item.cons.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <p className="text-sm mb-2"><strong>こんな人におすすめ:</strong> {item.target}</p>
            {item.reviewLink && (
              <p className="text-sm mb-2">
                <Link href={item.reviewLink} className="text-accent hover:text-accent-dark underline">→ 詳しい口コミ・評判はこちら</Link>
              </p>
            )}
            <CTAButton href={item.url}>{item.name}の公式サイトを見る</CTAButton>
          </div>
        ))}

        <SectionHeading id="compare-table">主要7社の数値比較表</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          一目で比較できるよう、主要7社の数値を表にまとめました。
        </p>

        <ComparisonTable
          headers={["サービス", "タンパク質(1食)", "糖質(1食)", "1食価格", "PFCプラン分け"]}
          rows={[
            ["マッスルデリ", "30〜50g以上", "15〜75g(プラン別)", "高め", "目的別4プラン"],
            ["GOFOOD", "20〜40g", "10〜20g", "高め", "低糖質中心"],
            ["FIT FOOD HOME", "20〜35g", "20〜40g", "中〜高", "目的別あり"],
            ["サポートミール", "意識した設計", "9.5〜12g", "828〜883円", "セット制"],
            ["nosh", "15〜25g", "30g以下", "599〜748円", "自由選択"],
            ["三ツ星ファーム", "20〜30g", "25g以下のメニューあり", "626〜842円", "自由選択"],
            ["ワンミール", "20〜30g", "20〜30g", "770〜840円", "バランス型"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※2026年5月時点の公開情報。栄養成分・価格はメニューにより変動。最新情報は各公式サイトでご確認ください。</p>

        <SectionHeading id="howto-choose">目的別の選び方ガイド</SectionHeading>

        <SubHeading>増量・筋肥大したい男性</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          増量期は<strong>1食タンパク質40g以上+カロリー600kcal前後</strong>を確保したい。【マッスルデリGAIN】が最有力候補。プロテイン併用で1日150g以上のタンパク質摂取も現実的になります。
        </p>

        <SubHeading>減量・ダイエット中の女性</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          <strong>カロリーを抑えつつタンパク質30g以上</strong>を確保したいなら【マッスルデリLEAN】。価格を抑えたい場合は【nosh】を複数食組み合わせる方法も。<Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline">ダイエット向け宅配弁当のおすすめ</Link>もあわせて参考にしてください。
        </p>

        <SubHeading>糖質制限+筋トレ並行</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          糖質15g以下を維持しながら高タンパクを取りたいなら【マッスルデリLOW CARB】【GOFOOD】【サポートミール】が候補。<Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark underline">糖質制限おすすめ宅配</Link>も参考に。
        </p>

        <SubHeading>コスパ重視・続けやすさ重視</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          1食600円台で続けたいなら【nosh】が現実解。タンパク質量はマッスルデリほどではないですが、プロテイン併用や複数食組み合わせで十分対応可能。
        </p>

        <SectionHeading id="cost-tip">高タンパク宅配のコスパ最適化テク</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          高タンパク宅配弁当は単価が高めなので、続けるための工夫をいくつか紹介します。
        </p>

        <SubHeading>1. 「全食置き換え」せず「1日1食」だけ宅配にする</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          全食を高タンパク宅配にすると月額負担が大きい。<strong>最も栄養が偏りやすい1食(夕食 or 昼食)だけを宅配に置き換え</strong>、残りはプロテイン・サラダチキン・卵などでタンパク質補給するのが最もコスパが良い運用です。
        </p>

        <SubHeading>2. プロテインと併用してタンパク質単価を下げる</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          宅配弁当でタンパク質30g、プロテイン1杯で20gという組み合わせなら、1食でタンパク質50gを確保しつつ単価を抑えられます。プロテインのタンパク質単価(円/g)は宅配弁当より圧倒的に安いため、ハイブリッド運用が王道。
        </p>

        <SubHeading>3. 定期購入の継続割引を活用する</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          多くのサービスが定期購入で5〜16%割引を提供しています。noshの「nosh club」は累計購入数に応じて最大16.55%OFF。長期で続けるなら継続割引制度のあるサービスを選ぶのが有利です。
        </p>

        <SubHeading>4. 送料を含めた「実質1食単価」で比較する</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          送料は地域差が大きく、北海道・沖縄は2,000円超になるケースも。<strong>10食プランで送料を希薄化する</strong>のが効果的。1食単価+送料/食数で実質コストを計算する習慣をつけましょう。送料の安い宅配は<Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline">送料が安い宅配ランキング</Link>も参考に。
        </p>

        <SectionHeading id="faq">よくある質問(FAQ)</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ:目的別に最適な1社を選ぼう</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">本記事の結論</p>
          <ul className="text-sm space-y-2 mb-4">
            <li><strong>1位 マッスルデリ</strong>: ボディメイクガチ勢の本命。タンパク質量・プラン設計は他社を圧倒。</li>
            <li><strong>2位 GOFOOD</strong>: 糖質制限+筋トレ並行勢に最適。</li>
            <li><strong>3位 FIT FOOD HOME</strong>: 添加物配慮+高タンパクのバランス型。</li>
            <li><strong>4位 サポートミール</strong>: 糖質9.5〜12gの厳格設計。RIZAPメソッド志向。</li>
            <li><strong>5位 nosh</strong>: コスパ最重視で続けるなら間違いない選択肢。</li>
            <li><strong>6位 三ツ星ファーム</strong>: 味のクオリティ+高タンパクを両立。</li>
            <li><strong>7位 ワンミール</strong>: バランス型の中庸路線。</li>
          </ul>
          <p className="text-sm leading-relaxed">
            目的・予算・続けやすさを踏まえて、自分にもっとも合う1社を選びましょう。タンパク質量や価格は変更される可能性があるため、申込前に必ず各公式サイトで最新情報をご確認ください。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">マッスルデリ口コミ・評判</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">ダイエットおすすめ宅配</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">糖質制限おすすめ宅配</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">nosh口コミ・評判</Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
