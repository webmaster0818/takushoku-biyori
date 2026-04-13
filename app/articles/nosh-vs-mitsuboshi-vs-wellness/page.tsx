import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング｜あなたに最適な宅配弁当はどれ？";
const ARTICLE_DESCRIPTION =
  "nosh・三ツ星ファーム・ウェルネスダイニングを価格・味・メニュー数・栄養・目的別コース・キャンペーン・継続しやすさの7項目で徹底比較。目的別おすすめ診断付き。";
const ARTICLE_URL =
  "https://takushoku-biyori.pages.dev/articles/nosh-vs-mitsuboshi-vs-wellness/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh 三ツ星ファーム ウェルネスダイニング 比較, 宅配弁当 比較, 冷凍宅配弁当 おすすめ, 宅配弁当 ランキング",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-11T00:00:00+09:00",
    modifiedTime: "2026-04-11T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- Helper Components ---------- */

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>
          ★
        </span>
      ))}
    </span>
  );
}

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">
            ホーム
          </Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground/70">比較記事</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">nosh vs 三ツ星ファーム vs ウェルネスダイニング</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "conclusion", label: "結論：3社の特徴と最適な人" },
    { id: "basic-info", label: "3社の基本情報を比較" },
    { id: "7-comparison", label: "7つの項目で徹底比較" },
    { id: "matrix", label: "3社の強み・弱みマトリクス" },
    { id: "diagnosis", label: "目的別おすすめ診断" },
    { id: "reviews", label: "利用者の口コミ・評判" },
    { id: "combination", label: "併用パターン" },
    { id: "tips", label: "失敗しない選び方5つのポイント" },
    { id: "flow", label: "注文〜解約までの流れ" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav
      aria-label="目次"
      className="bg-cream border border-warm-border rounded-xl p-5 mb-10"
    >
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-accent hover:text-accent-dark transition-colors"
            >
              {i + 1}. {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent/10">
            {headers.map((h) => (
              <th
                key={h}
                className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="border border-warm-border rounded-lg mb-3 group">
      <summary className="flex items-center justify-between p-4 font-medium text-sm hover:bg-cream/50 transition-colors">
        <span>{question}</span>
        <span className="faq-arrow text-warm-gray ml-2">▼</span>
      </summary>
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">
      {children}
    </h3>
  );
}

function RecommendBox({
  service,
  color,
  items,
}: {
  service: string;
  color: string;
  items: string[];
}) {
  return (
    <div className={`rounded-xl p-5 mb-4 ${color}`}>
      <p className="font-bold mb-2">{service}がおすすめの人</p>
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-accent mt-0.5">&#10003;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Page Component ---------- */

export default function ArticlePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-11T00:00:00+09:00",
    dateModified: "2026-04-11T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: {
      "@type": "Organization",
      name: "宅食びより",
      url: "https://takushoku-biyori.pages.dev",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        {/* Title */}
        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            比較記事
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-11">2026年4月11日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「nosh・三ツ星ファーム・ウェルネスダイニング、どれを選べばいいの？」——冷凍宅配弁当の代表的な3ブランドは、どれも魅力的で決められないという声をよく聞きます。
          </p>
          <p className="mb-3">
            結論から言うと、<strong>3社はそれぞれ「得意な人」が違います</strong>。価格重視ならnosh、グルメ志向なら三ツ星ファーム、健康管理や食事制限が必要ならウェルネスダイニングが最適です。
          </p>
          <p>
            この記事では、3社を<strong>価格・味・メニュー数・栄養・目的別コース・キャンペーン・継続しやすさ</strong>の7項目で徹底比較。さらに編集部独自の目的別診断8パターン、強み・弱みマトリクス、併用パターン提案まで踏み込んで解説します。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="conclusion">結論：3社の特徴と最適な人</SectionHeading>

        <SubHeading>30秒早見表</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh（ナッシュ）", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["1食あたり最安", "599円〜", "626円〜", "663円〜"],
            ["メニュー数", "100種類以上", "80種類以上", "コース制（固定）"],
            ["糖質量", "30g以下（全メニュー）", "25g以下あり", "15g以下のコースあり"],
            ["塩分量", "2.5g以下", "記載なし", "2.0g以下のコースあり"],
            ["送料", "913円〜2,827円", "990円〜2,970円", "770円〜"],
            ["初回特典", "累計3,000円OFF", "初回1,980円", "送料無料"],
            ["特徴", "高コスパ×豊富なメニュー", "レストラン品質の味", "医療・介護レベルの栄養管理"],
            ["向いている人", "一人暮らし・ダイエット", "グルメ志向・贅沢したい", "糖尿病・腎臓病・高齢者"],
          ]}
        />

        <SubHeading>どんな人にどれがおすすめ？</SubHeading>
        <RecommendBox
          service="nosh（ナッシュ）"
          color="bg-green-50"
          items={[
            "できるだけ安く続けたい人",
            "糖質オフでダイエットしたい人",
            "100種類以上のメニューから選びたい人",
            "若い世代・働く一人暮らし",
          ]}
        />
        <RecommendBox
          service="三ツ星ファーム"
          color="bg-amber-50"
          items={[
            "味やクオリティを最優先したい人",
            "冷凍弁当のイメージを覆したい人",
            "自宅で「ちょっとしたご褒美」が欲しい人",
            "共働きで夕食に手を抜きたくない人",
          ]}
        />
        <RecommendBox
          service="ウェルネスダイニング"
          color="bg-blue-50"
          items={[
            "糖尿病・腎臓病など食事制限が必要な人",
            "高齢の家族に送りたい人",
            "管理栄養士監修の安心感が欲しい人",
            "やわらかい食事が必要な人",
          ]}
        />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="basic-info">3社の基本情報を比較</SectionHeading>

        <SubHeading>価格比較（1食あたり最安）</SubHeading>
        <ComparisonTable
          headers={["プラン", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["最小プラン", "6食 3,990円（665円/食）", "7食 4,382円（626円/食）", "7食 4,644円（663円/食）"],
            ["中プラン", "8食 4,990円（624円/食）", "14食 8,618円（616円/食）", "14食 9,072円（648円/食）"],
            ["大プラン", "10食 5,990円（599円/食）", "21食 12,960円（617円/食）", "21食 13,500円（643円/食）"],
          ]}
        />
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">最安比較のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>nosh</strong>は10食プランなら1食599円と最安値級。継続割引もあり、最大16.55%OFFで1食499円まで下がります。</li>
            <li><strong>三ツ星ファーム</strong>は14食以上で1食616〜626円と安定した価格帯。</li>
            <li><strong>ウェルネスダイニング</strong>は食事制限付きで1食643〜663円と、栄養管理のコストを考えれば妥当です。</li>
          </ul>
        </div>

        <SubHeading>配送・送料比較</SubHeading>
        <ComparisonTable
          headers={["サービス", "送料の幅", "最安エリア", "最高エリア"]}
          rows={[
            ["nosh", "913円〜2,827円", "関東", "北海道・沖縄"],
            ["三ツ星ファーム", "990円〜2,970円", "関東", "北海道・沖縄"],
            ["ウェルネスダイニング", "770円〜（定期便は半額）", "全国一律", "—"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          <strong>ポイント：</strong>ウェルネスダイニングは定期購入で送料半額（385円）になるため、継続するなら実質最安。noshと三ツ星ファームは地域差が大きく、北海道や沖縄だと送料だけで月3,000円近くかかる点に注意。
        </p>

        <SubHeading>注文方法・解約のしやすさ</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["注文方法", "Web・アプリ", "Web・LINE", "Web・電話"],
            ["配送間隔", "1/2/3週に1回", "2/3/4週に1回", "1/2/3/4週に1回"],
            ["スキップ", "◎ 簡単", "○ 可能", "○ 可能"],
            ["解約手続き", "マイページから即可", "Web・電話で可", "電話のみ"],
            ["最低継続回数", "なし", "なし", "なし"],
          ]}
        />

        <SubHeading>容器サイズ・冷凍庫スペース</SubHeading>
        <ComparisonTable
          headers={["サービス", "容器サイズ（目安）", "10食あたりの占有スペース"]}
          rows={[
            ["nosh", "18×18×4.5cm", "冷凍庫中段ほぼ1段"],
            ["三ツ星ファーム", "18×14×4cm", "やや省スペース"],
            ["ウェルネスダイニング", "18×17×3cm", "最もコンパクト"],
          ]}
        />

        <SubHeading>支払い方法</SubHeading>
        <ComparisonTable
          headers={["方法", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["クレジットカード", "◎", "◎", "◎"],
            ["代金引換", "○", "○", "○"],
            ["後払い", "×", "○", "○"],
            ["Amazon Pay", "◎", "×", "×"],
            ["コンビニ払い", "×", "×", "○"],
          ]}
        />

        {/* ===== 7項目比較 ===== */}
        <SectionHeading id="7-comparison">7つの項目で徹底比較</SectionHeading>

        <SubHeading>1. 味のクオリティ</SubHeading>
        <div className="space-y-4 mb-6 text-sm leading-relaxed">
          <p><strong>nosh：</strong>糖質オフ・塩分控えめながら、一流シェフや料理家が監修した本格メニュー。スパイスやハーブで満足感を出す工夫がされており、「健康志向な割においしい」という声が多数。ただしメニューによって当たり外れがあるのも事実です。</p>
          <p><strong>三ツ星ファーム：</strong>3社の中でもっとも味の評価が高いブランド。プロの料理人が監修し、素材・調理法・盛り付けまでこだわった「レストラン品質」を実現しています。</p>
          <p><strong>ウェルネスダイニング：</strong>管理栄養士が栄養バランスを最優先に設計しているため、味は「家庭的で素朴」。制限食として考えると十分合格点です。</p>
          <p className="font-medium">結論：味のレベルは 三ツ星ファーム &gt; nosh &gt; ウェルネスダイニング</p>
        </div>

        <SubHeading>2. メニュー数とバリエーション</SubHeading>
        <div className="space-y-4 mb-6 text-sm leading-relaxed">
          <p><strong>nosh：</strong>100種類以上の常時ラインナップに加え、毎週3品の新メニューが追加。洋食・和食・中華・スイーツ・パン・スープまで幅広く、飽きにくい設計です。</p>
          <p><strong>三ツ星ファーム：</strong>約80種類のメニューを常時用意。noshより少ないですが「質重視」の方向性です。</p>
          <p><strong>ウェルネスダイニング：</strong>メニューは「コースごとに事前決定」されており、個別に選ぶことはできません。ただし7種類のコースから目的に合ったコースを選べます。</p>
          <p className="font-medium">結論：好きなメニューを自由に選びたいなら nosh &gt; 三ツ星ファーム &gt;&gt;&gt; ウェルネスダイニング</p>
        </div>

        <SubHeading>3. 栄養バランス（糖質・塩分・カロリー）</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["糖質量", "全メニュー30g以下", "25g以下メニューあり", "15g以下コースあり"],
            ["塩分量", "全メニュー2.5g以下", "メニュー依存", "2.0g以下コースあり"],
            ["カロリー", "350〜550kcal", "350〜500kcal", "240〜300kcal"],
            ["たんぱく質", "20g前後", "20g前後", "コース別管理"],
          ]}
        />

        <SubHeading>4. 添加物の有無</SubHeading>
        <div className="space-y-4 mb-6 text-sm leading-relaxed">
          <p><strong>nosh：</strong>保存料・合成着色料は不使用が基本方針ですが、全メニュー完全無添加ではありません。</p>
          <p><strong>三ツ星ファーム：</strong>3社の中でもっとも添加物に厳しく、化学調味料・合成着色料・人工甘味料を極力使わない方針。</p>
          <p><strong>ウェルネスダイニング：</strong>冷凍保存のための最小限の添加物のみ。</p>
          <p className="font-medium">結論：添加物の少なさで選ぶなら 三ツ星ファーム &gt; nosh &gt; ウェルネスダイニング</p>
        </div>

        <SubHeading>5. 目的別コースの充実度</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">ここはウェルネスダイニングが圧倒的な強みを持つ項目です。</p>
        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-sm">
          <p className="font-bold mb-2">ウェルネスダイニングの7コース</p>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>糖質制限コース</strong> — 糖質15g以下・1食240kcal前後</li>
            <li><strong>塩分制限コース</strong> — 塩分2.0g以下</li>
            <li><strong>たんぱく質＆塩分調整コース</strong> — 腎臓病向け</li>
            <li><strong>カロリー制限コース</strong> — 1食240kcal以下</li>
            <li><strong>やわらか食コース</strong> — 噛む力が弱い方向け</li>
            <li><strong>栄養バランスコース</strong> — 全般向け</li>
            <li><strong>野菜を楽しむスープ食コース</strong> — 時短・小食向け</li>
          </ol>
        </div>
        <p className="text-sm mb-6 leading-relaxed font-medium">結論：医師から食事制限を指示されている・高齢で嚥下に不安がある人はウェルネスダイニング一択です。</p>

        <SubHeading>6. 初回キャンペーン・お試し</SubHeading>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4 text-sm">
            <p className="font-bold mb-2">nosh</p>
            <ul className="list-disc list-inside space-y-1">
              <li>初回〜3回目まで合計3,000円OFF</li>
              <li>友達紹介で3,000円OFFクーポン</li>
              <li>継続割引で最大16.55%OFF</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-sm">
            <p className="font-bold mb-2">三ツ星ファーム</p>
            <ul className="list-disc list-inside space-y-1">
              <li>初回限定7食 1,980円</li>
              <li>LINE友だち追加でクーポン</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-sm">
            <p className="font-bold mb-2">ウェルネスダイニング</p>
            <ul className="list-disc list-inside space-y-1">
              <li>初回送料無料</li>
              <li>定期購入で送料半額（385円）</li>
            </ul>
          </div>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          <strong>ポイント：</strong>短期で試すなら三ツ星ファームの初回1,980円が最安。長期で続けるならnoshの継続割引が最強。ウェルネスダイニングは送料面での継続メリットが大きい設計です。
        </p>

        <SubHeading>7. 継続のしやすさ</SubHeading>
        <ComparisonTable
          headers={["項目", "nosh", "三ツ星ファーム", "ウェルネスダイニング"]}
          rows={[
            ["スキップの手軽さ", "◎", "○", "○"],
            ["解約の手軽さ", "◎", "○", "△（電話）"],
            ["継続割引", "◎（最大17%）", "×", "○（送料半額）"],
            ["最低継続回数", "なし", "なし", "なし"],
          ]}
        />

        {/* ===== マトリクス ===== */}
        <SectionHeading id="matrix">【独自】3社の強み・弱みマトリクス</SectionHeading>

        <SubHeading>強み・弱みマトリクス</SubHeading>
        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold whitespace-nowrap">評価軸</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星ファーム</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネスダイニング</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["価格の安さ", 5, 4, 3],
                ["味のクオリティ", 4, 5, 3],
                ["メニューの豊富さ", 5, 4, 2],
                ["栄養管理の厳密さ", 3, 3, 5],
                ["添加物の少なさ", 4, 5, 3],
                ["解約のしやすさ", 5, 4, 3],
                ["継続コスパ", 5, 3, 4],
                ["高齢者対応", 2, 2, 5],
              ].map(([label, n, m, w], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium whitespace-nowrap">
                    {label as string}
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={n as number} />
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={m as number} />
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={w as number} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SubHeading>各社が「勝てる場面」「負ける場面」</SubHeading>
        <div className="space-y-4 mb-6 text-sm leading-relaxed">
          <div className="bg-green-50 rounded-lg p-4">
            <p className="font-bold mb-2">nosh が勝つ場面</p>
            <ul className="list-disc list-inside space-y-1">
              <li>一人暮らしで日常的に使いたい</li>
              <li>ダイエット目的で糖質オフを継続したい</li>
              <li>できるだけ安く続けたい</li>
              <li>スマホで完結する手軽さを重視</li>
            </ul>
            <p className="font-bold mt-3 mb-2">nosh が負ける場面</p>
            <ul className="list-disc list-inside space-y-1 text-foreground/70">
              <li>医療的な食事制限が必要</li>
              <li>味の満足度を最優先したい</li>
              <li>高齢の親に送りたい</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <p className="font-bold mb-2">三ツ星ファーム が勝つ場面</p>
            <ul className="list-disc list-inside space-y-1">
              <li>自宅での食事に「質」を求める</li>
              <li>冷凍弁当のイメージを覆したい</li>
              <li>共働きで夕食の手間を省きたい</li>
              <li>添加物にこだわりたい</li>
            </ul>
            <p className="font-bold mt-3 mb-2">三ツ星ファーム が負ける場面</p>
            <ul className="list-disc list-inside space-y-1 text-foreground/70">
              <li>とにかく安く続けたい</li>
              <li>糖尿病・腎臓病の食事療法が必要</li>
              <li>メニュー数を重視</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="font-bold mb-2">ウェルネスダイニング が勝つ場面</p>
            <ul className="list-disc list-inside space-y-1">
              <li>医師から食事制限を指示されている</li>
              <li>高齢の家族に送りたい</li>
              <li>栄養管理を完全に任せたい</li>
              <li>嚥下に不安があるやわらか食が必要</li>
            </ul>
            <p className="font-bold mt-3 mb-2">ウェルネスダイニング が負ける場面</p>
            <ul className="list-disc list-inside space-y-1 text-foreground/70">
              <li>味やグルメを最優先したい</li>
              <li>メニューを自由に選びたい</li>
              <li>ネットで即解約したい</li>
            </ul>
          </div>
        </div>

        {/* ===== 目的別診断 ===== */}
        <SectionHeading id="diagnosis">目的別おすすめ診断</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">「結局、自分にはどれが合うの？」——8つの代表的な目的・状況別に、最適な1社を提案します。</p>

        {[
          { title: "コスパ重視", rec: "nosh", text: "月額コストを最小化したい方はnosh一択。10食プラン+継続割引で1食499円まで下がり、3社中もっとも継続コスパが高くなります。" },
          { title: "美味しさ・グルメ重視", rec: "三ツ星ファーム", text: "「冷凍なのにここまで美味しいのか」と驚かされるクオリティ。プロの料理人監修のメインディッシュは、1食あたり626円でレストラン級の満足感が得られます。" },
          { title: "健康管理・食事制限", rec: "ウェルネスダイニング", text: "糖尿病・高血圧・腎臓病などで医師から食事制限を指示されている方は、迷わずウェルネスダイニング。管理栄養士が設計した7つの専用コースがあります。" },
          { title: "一人暮らし", rec: "nosh", text: "100種類以上から自由に選べる柔軟さと、1食あたり500円台の安さが一人暮らしの強い味方。スキップも解約もマイページで完結します。" },
          { title: "高齢者・親への仕送り", rec: "ウェルネスダイニング", text: "やわらか食コース・塩分制限コースなど、高齢者のニーズに応えるコースが充実。電話での注文対応もあり、スマホが苦手な親世代でも利用できます。" },
          { title: "ダイエット", rec: "nosh", text: "全メニュー糖質30g以下・塩分2.5g以下。1食400kcal前後のメニューが中心で、スイーツメニューも糖質オフです。" },
          { title: "筋トレ・ボディメイク", rec: "nosh", text: "たんぱく質20g前後を確保しつつ、糖質を抑えたメニューが豊富。継続コスパを考えるとnoshが現実的です。" },
          { title: "産後・子育てママ", rec: "三ツ星ファーム or nosh", text: "産後や子育て中は「手軽さ」と「栄養」のバランスが大事。三ツ星ファームの「美味しくて栄養がある」1食は頼れる存在。コストを抑えたいならnoshも。" },
        ].map((item) => (
          <div key={item.title} className="mb-4 bg-white border border-warm-border rounded-lg p-4">
            <p className="font-bold text-sm mb-1">
              {item.title} → <span className="text-accent">{item.rec}</span>
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
          </div>
        ))}

        {/* ===== 口コミ ===== */}
        <SectionHeading id="reviews">利用者の口コミ・評判</SectionHeading>

        {[
          {
            name: "nosh",
            good: [
              "「糖質オフなのに満足感があり、ダイエット中の味方になってくれる」（30代女性）",
              "「メニューが豊富で飽きない。スイーツがあるのが嬉しい」（20代女性）",
              "「継続割引が効いてくると一食500円以下になるので、自炊より安く済む時も」（20代男性）",
            ],
            bad: [
              "「メニューによって当たり外れがある」（30代男性）",
              "「送料が地域によって高い。北海道在住だと毎回3,000円近く」（40代女性）",
              "「冷凍庫が10食分で埋まるので、一人暮らしだとパンパン」（20代女性）",
            ],
            color: "bg-green-50",
          },
          {
            name: "三ツ星ファーム",
            good: [
              "「冷凍弁当とは思えないクオリティ。本当にレストランみたい」（40代女性）",
              "「添加物が少ないのが安心。家族にも勧められる」（30代女性）",
              "「共働きの平日夕食として最強」（30代男性）",
            ],
            bad: [
              "「ちょっと量が少なく感じる時がある」（30代男性）",
              "「値段がnoshより少し高いので、継続するか迷う」（20代女性）",
              "「糖質制限が目的だとnoshの方が厳格で選びやすい」（40代女性）",
            ],
            color: "bg-amber-50",
          },
          {
            name: "ウェルネスダイニング",
            good: [
              "「糖尿病の父に送っている。管理栄養士監修の安心感がある」（50代女性）",
              "「塩分制限コースが本当に助かる」（60代男性）",
              "「やわらか食は高齢の母が食べやすく、本当にありがたい」（50代女性）",
            ],
            bad: [
              "「味が薄い・素朴すぎると感じる日がある」（60代女性）",
              "「解約が電話のみでちょっと面倒だった」（40代女性）",
              "「メニューを自分で選べないのがマイナス」（30代男性）",
            ],
            color: "bg-blue-50",
          },
        ].map((service) => (
          <div key={service.name} className={`${service.color} rounded-lg p-5 mb-4`}>
            <p className="font-bold mb-3">{service.name} の口コミ</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-accent mb-2">良い口コミ</p>
                <ul className="space-y-2">
                  {service.good.map((r, i) => (
                    <li key={i} className="leading-relaxed">{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-red-600 mb-2">悪い口コミ</p>
                <ul className="space-y-2">
                  {service.bad.map((r, i) => (
                    <li key={i} className="leading-relaxed text-foreground/70">{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* ===== 併用パターン ===== */}
        <SectionHeading id="combination">【独自】併用パターンも紹介</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">3社はライバルですが、実は「併用」することで弱点を補い合うこともできます。</p>

        {[
          {
            title: "パターン1：平日nosh ＋ 週末三ツ星",
            text: "平日の慌ただしい日はコスパ重視のnoshで乗り切り、ちょっと贅沢したい週末は三ツ星ファームでレストラン気分を楽しむ——月額予算の目安は2〜3万円。",
          },
          {
            title: "パターン2：両親にウェルネス ＋ 自分はnosh",
            text: "離れて暮らす高齢の両親にはウェルネスダイニングの制限コースを定期便で送り、自分自身はnoshで糖質管理。家族全員の健康を一度に管理できます。",
          },
          {
            title: "パターン3：三ツ星を主軸、noshでメニュー補完",
            text: "味の満足度を最優先したい方は三ツ星ファームを主軸に、スイーツやパンが食べたくなったらnoshで追加注文する使い方。",
          },
        ].map((p) => (
          <div key={p.title} className="border border-warm-border rounded-lg p-4 mb-3">
            <p className="font-bold text-sm mb-1">{p.title}</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{p.text}</p>
          </div>
        ))}

        {/* ===== 失敗しない選び方 ===== */}
        <SectionHeading id="tips">失敗しない選び方5つのポイント</SectionHeading>
        {[
          { title: "目的を明確にする", text: "「とにかく楽したい」「ダイエットしたい」「病気で食事制限が必要」——目的によって最適な1社は大きく変わります。" },
          { title: "予算を決める", text: "月1万円以下ならnoshの10食プラン、月1.5〜2万円なら三ツ星ファームの14食プラン、医療的制限食ならウェルネスダイニングの14食+定期便が現実的。" },
          { title: "冷凍庫の容量を確認", text: "一人暮らし用の小型冷凍庫だと、10食プランは入らないことも。契約前に10食分の箱が入るスペースがあるか必ず確認しましょう。" },
          { title: "初回お試しで味を試す", text: "3社とも初回限定の割引があります。本契約の前に、必ず「1回だけ」試してから継続判断を。" },
          { title: "継続条件と解約のしやすさを確認", text: "noshはマイページから即解約、三ツ星ファームはWebと電話、ウェルネスダイニングは電話のみ。「いざという時すぐ辞められるか」が継続判断のカギ。" },
        ].map((tip, i) => (
          <div key={tip.title} className="flex gap-4 mb-4">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {i + 1}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{tip.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{tip.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 注文〜解約の流れ ===== */}
        <SectionHeading id="flow">注文〜解約までの流れ（3社共通）</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { step: "1", title: "公式サイトから会員登録", text: "メールアドレス・氏名・住所・支払い方法を登録します。" },
            { step: "2", title: "プランとメニューを選択", text: "食数（6〜21食）、配送間隔（1〜4週に1回）、メニュー（またはコース）を選びます。" },
            { step: "3", title: "初回便の配送", text: "最短4〜7日で初回便が到着。冷凍庫に保管して、電子レンジで温めるだけ。" },
            { step: "4", title: "継続 or スキップ or 解約", text: "次回便の発送日が近づく前に、継続・スキップ・解約を判断。解約方法は各社で異なります。" },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 bg-cream rounded-lg p-4">
              <span className="flex-shrink-0 w-8 h-8 bg-accent-dark text-white rounded-full flex items-center justify-center text-sm font-bold">
                {s.step}
              </span>
              <div>
                <p className="font-bold text-sm">{s.title}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          <FAQ question="Q1. 賞味期限はどれくらい？" answer="3社とも冷凍状態で6ヶ月〜1年が一般的。noshは製造日から6ヶ月〜1年、三ツ星ファームは約1年、ウェルネスダイニングは約6ヶ月〜1年です。" />
          <FAQ question="Q2. 解約は無料でできますか？" answer="3社とも解約金・違約金は発生しません。ただし解約方法がそれぞれ異なり、noshはマイページ、三ツ星ファームはWebと電話、ウェルネスダイニングは電話のみです。" />
          <FAQ question="Q3. 男性向けはどれ？" answer="量の多さで選ぶならnoshまたは三ツ星ファーム。筋トレ・ボディメイク目的ならnoshの高たんぱくメニューがおすすめ。ウェルネスダイニングはカロリー控えめなので、活動量の多い男性には物足りない可能性があります。" />
          <FAQ question="Q4. 添加物は大丈夫？" answer="3社とも国の基準を守った添加物のみ使用しており、安全性に問題はありません。もっとも添加物に厳しいのは三ツ星ファームで、化学調味料・合成着色料・人工甘味料を極力避けています。" />
          <FAQ question="Q5. 配送頻度はどれくらい選べる？" answer="nosh: 1週・2週・3週に1回。三ツ星ファーム: 2週・3週・4週に1回。ウェルネスダイニング: 1週・2週・3週・4週に1回。" />
          <FAQ question="Q6. スマホアプリはありますか？" answer="noshはiOS/Android両方で公式アプリあり。三ツ星ファームはLINE連携で同等の機能を提供。ウェルネスダイニングは専用アプリはなく、Webまたは電話対応です。" />
          <FAQ question="Q7. 配達エリアは？" answer="3社とも全国配送対応（離島や一部地域を除く）。ヤマト運輸のクール宅急便を利用しているため、北海道から沖縄まで届きます。" />
          <FAQ question="Q8. 支払い方法は？" answer="3社ともクレジットカード・代金引換に対応。後払いはウェルネスダイニングのみ、Amazon Payはnoshのみ、コンビニ払いはウェルネスダイニングのみです。" />
          <FAQ question="Q9. 量は足りますか？" answer="3社とも1食350〜550kcal程度で、女性なら十分・男性はやや物足りない場合あり。足りない場合は、ご飯・味噌汁・副菜を1品足すか、2食同時に食べる工夫がおすすめです。" />
          <FAQ question="Q10. 冷凍庫が圧迫されませんか？" answer="一人暮らし用の小型冷凍庫だと、10食プラン以上は入らない可能性があります。契約前に必ず冷凍庫の空きスペースを測り、余裕がなければ6〜8食プランから始めるのがおすすめです。" />
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：あなたに最適な1社</SectionHeading>

        <SubHeading>3社の総合評価</SubHeading>
        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星ファーム</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネスダイニング</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["総合おすすめ度", 5, 4, 4],
                ["コスパ", 5, 3, 3],
                ["味", 4, 5, 3],
                ["健康管理", 4, 3, 5],
                ["続けやすさ", 5, 4, 3],
              ].map(([label, n, m, w], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={n as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={m as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={w as number} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">結論</p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li><strong>迷ったら → nosh</strong>（コスパ・メニュー数・解約のしやすさで最も万能）</li>
            <li><strong>味で選ぶ → 三ツ星ファーム</strong>（自宅で贅沢な食事体験を）</li>
            <li><strong>健康で選ぶ → ウェルネスダイニング</strong>（医療レベルの食事制限食）</li>
          </ul>
          <p className="text-sm mt-4 leading-relaxed text-foreground/80">
            大切なのは、「なんとなく人気だから」ではなく、自分の目的・予算・ライフスタイルから選ぶこと。まずは各社の初回キャンペーンを活用して、実際に味を確かめてみるのが失敗しない第一歩です。
          </p>
        </div>

        {/* Author info */}
        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">
              編
            </div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">
                宅配弁当・栄養食の専門ライターチーム。実際にサービスを利用し、公平な比較情報をお届けします。
              </p>
            </div>
          </div>
        </div>

        {/* Related articles placeholder */}
        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm text-warm-gray">
            <li>nosh の悪い口コミは本当？徹底検証（準備中）</li>
            <li>ウェルネスダイニング 口コミ・評判まとめ（準備中）</li>
            <li>コープデリ vs パルシステム 比較（準備中）</li>
            <li>高齢者向け宅配弁当おすすめ10選（準備中）</li>
          </ul>
        </div>
      </article>
    </>
  );
}
