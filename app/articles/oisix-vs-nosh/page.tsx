import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "オイシックス vs nosh(ナッシュ)徹底比較｜ミールキットと冷凍弁当はどっちが向いている？";
const ARTICLE_DESCRIPTION =
  "オイシックス（Oisix）とnosh(ナッシュ)を料金・送料・調理時間・栄養・ライフスタイル適性で徹底比較。ミールキット型と冷凍弁当型のサービス特性の違いを整理し、独身・夫婦・子育て世帯それぞれにおすすめの選び方を解説します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/oisix-vs-nosh/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "オイシックス nosh 比較, oisix ナッシュ 違い, ミールキット 冷凍弁当 比較, オイシックス 料金, nosh 料金, 一人暮らし 宅食 比較, 共働き 宅食",
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
    question: "オイシックスとnoshはどちらが安い？",
    answer:
      "1食あたりで比較するなら、nosh(ナッシュ)の方が安い傾向です。noshは10食プランで1食599円〜（nosh club最高ランクで499円〜）。一方、オイシックスはミールキット中心で1セット2人分1,500〜2,500円程度（1人前換算で750〜1,250円程度）が一般的です。ただし、オイシックスは生鮮食材・ミールキットの「材料込み」料金で、栄養価や鮮度の質の違いがあるため、単純な価格比較だけで判断するのは避けたいところ。お試しセットは初回限定で大幅割引が用意されているので、両方試してみるのも一案です（2026年5月時点の公式情報による）。",
  },
  {
    question: "オイシックスとnoshはどう違う？一言で言うと？",
    answer:
      "ひと言で言うと「ミールキット（オイシックス）」と「冷凍弁当（nosh）」の違いです。オイシックスはレシピ+生鮮食材のセットで、自分で調理する必要があります（10〜20分程度）。noshは電子レンジで温めるだけですぐ食べられる冷凍弁当。「料理を楽しみたい・家族で食事を作りたい」ならオイシックス、「とにかく時短・面倒な調理は避けたい」ならnoshが向いています。",
  },
  {
    question: "一人暮らしならどちらが向いている？",
    answer:
      "一人暮らしには基本的にnosh(ナッシュ)の方が相性が良いです。noshは1食ずつ個包装で、レンジで温めるだけ。自炊のハードルがゼロなので、忙しい社会人や料理が苦手な方に最適です。オイシックスは2人前単位のセットが基本で、1人で消費するには量が多く食材を持て余すケースも。料理が好きな一人暮らしの方は、オイシックスの「Kit Oisix」を1食2人分→2食分として食べる方法もあります。",
  },
  {
    question: "子育て世帯ならどちらが良い？",
    answer:
      "子育て世帯にはオイシックスがおすすめです。Kit Oisixは子供向けレシピが豊富で、化学調味料・合成保存料不使用にこだわった食材が中心。「子供に手作り感のあるごはんを食べさせたいけど、時間がない」というニーズに合います。一方、noshは糖質・塩分制限があるため、成長期の子供には栄養設計が必ずしも最適ではありません。子供がいる家庭はオイシックス中心+大人の昼食noshという併用が現実的です。",
  },
  {
    question: "両方併用するのはあり？",
    answer:
      "あります。むしろ「平日の夜はオイシックスのミールキットで家族そろって食卓を囲み、忙しい平日昼や夕食を作る余裕がない日はnoshで時短」という併用パターンが、実は最も実用的です。両者は競合というより補完関係にあるサービス。月1〜2回ずつ使い分ければ、自炊負担を大幅に減らしつつ食生活の質を保てます。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">サービス比較</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">オイシックス vs nosh(ナッシュ)</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：「料理する派」はオイシックス、「時短派」はnosh" },
    { id: "service-type", label: "サービスタイプの根本的違い" },
    { id: "price", label: "料金・送料を徹底比較" },
    { id: "time", label: "調理時間・手間の比較" },
    { id: "nutrition", label: "栄養・健康志向の比較" },
    { id: "menu", label: "メニュー数・バリエーション" },
    { id: "lifestyle", label: "ライフスタイル別のおすすめ" },
    { id: "combine", label: "両方を併用する賢い使い方" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
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
              <th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>
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
    <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

export default function OisixVsNoshPage() {
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
      { "@type": "ListItem", position: 2, name: "サービス比較" },
      { "@type": "ListItem", position: 3, name: "オイシックス vs nosh(ナッシュ)" },
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
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            サービス比較
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。料金・キャンペーン情報は<strong>2026年5月時点の公式サイト記載情報</strong>に基づきます。最新情報は<a href="https://www.oisix.com/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">Oisix公式</a>・<a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">nosh公式</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「オイシックスとnoshって、どっちがいいの？」——どちらも有名な宅食サービスですが、実は<strong>サービスタイプが根本的に違います</strong>。同じ「食材を届けてくれる」サービスでも、オイシックスは<strong>ミールキット（生鮮食材+レシピ）</strong>、noshは<strong>冷凍弁当（温めるだけ）</strong>。
          </p>
          <p className="mb-3">
            この記事では、両者を料金・調理時間・栄養・ライフスタイル適性の4つの軸で徹底比較します。一人暮らし・共働き夫婦・子育て世帯ごとに、どちらが自分に合うかを判断できる情報を整理しました。
          </p>
          <p>
            結論を先に言うと、<strong>「料理する派」はオイシックス、「時短重視派」はnosh、両方使いも実は最強</strong>。読み終わるころには、自分の生活パターンにフィットするサービスがはっきり見えるはずです。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：「料理する派」はオイシックス、「時短派」はnosh</SectionHeading>

        <ComparisonTable
          headers={["こんな人には", "おすすめ"]}
          rows={[
            ["料理を楽しみたい・家族で食卓を囲みたい", "オイシックス"],
            ["完全時短・調理ゼロにしたい", "nosh(ナッシュ)"],
            ["糖質制限・ダイエット中", "nosh(ナッシュ)"],
            ["小さな子どもがいる", "オイシックス"],
            ["共働き・たまに自炊もしたい", "両方併用"],
            ["一人暮らし社会人で忙しい", "nosh(ナッシュ)"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li>オイシックスは<strong>ミールキット</strong>、noshは<strong>冷凍弁当</strong>でサービス形態が異なる</li>
            <li>1食コスパで見るとnoshの方が安い傾向。ただし内容物の質は別軸</li>
            <li>調理時間：オイシックス10〜20分、nosh電子レンジ約6〜7分</li>
            <li>子育て世帯はオイシックス、独身時短はnosh、共働きは併用</li>
          </ul>
        </div>

        {/* ===== サービスタイプ ===== */}
        <SectionHeading id="service-type">サービスタイプの根本的違い</SectionHeading>

        <SubHeading>オイシックス｜ミールキット型</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          オイシックスは<strong>「主菜＋副菜のレシピと食材」をセットで宅配</strong>するサービスです。代表商品「Kit Oisix」は、必要な食材がカット済みで届き、添付レシピ通りに10〜20分調理すれば家庭料理が完成します。生鮮野菜・肉・魚・牛乳・卵・調味料といった単品食材も購入可能で、<strong>食材宅配スーパー</strong>としての利用もできます。
        </p>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">オイシックスのコアバリュー</p>
          <ul className="list-disc list-inside space-y-1">
            <li>生鮮食材の鮮度・品質（産直、有機・特別栽培野菜）</li>
            <li>合成保存料・合成着色料不使用にこだわった商品設計</li>
            <li>家庭料理の手間を「材料カット済み」で時短</li>
            <li>家族で食事を作る・食べる体験</li>
          </ul>
        </div>

        <SubHeading>nosh(ナッシュ)｜冷凍弁当型</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          noshは<strong>「主菜+副菜の完成済み弁当を冷凍配送」</strong>するサービスです。電子レンジで6〜7分温めるだけで完成。糖質30g以下・塩分2.5g以下の栄養設計が全メニューに適用されており、ダイエットや健康管理を意識する人に向いています。
        </p>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">noshのコアバリュー</p>
          <ul className="list-disc list-inside space-y-1">
            <li>調理ゼロ（電子レンジで6〜7分）</li>
            <li>全メニュー糖質30g以下・塩分2.5g以下</li>
            <li>60種類以上から自由にメニュー選択</li>
            <li>nosh clubで継続するほど安くなる</li>
          </ul>
        </div>

        {/* ===== 料金 ===== */}
        <SectionHeading id="price">料金・送料を徹底比較</SectionHeading>

        <SubHeading>1食あたりの料金（参考レンジ）</SubHeading>
        <ComparisonTable
          headers={["サービス", "1食あたり目安", "備考"]}
          rows={[
            ["オイシックス（Kit Oisix）", "750〜1,250円/人前（2人前1,500〜2,500円ベース）", "ミールキット中心の単価感"],
            ["nosh(ナッシュ)", "599〜698円（nosh club最高ランクで499円）", "10食プラン基準・税込"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          1食あたりの単価だけで見ると、noshの方が安いケースが多いです。ただし、オイシックスは<strong>生鮮食材を含む</strong>料金で、料理のジャンルや量も家庭料理ベース。noshは1人前完結の冷凍弁当。質と量の構造が違うため、単純な数値比較ではなく「自分のニーズに合うか」で判断するのが適切です。
        </p>

        <SubHeading>送料・配送料の比較</SubHeading>
        <ComparisonTable
          headers={["サービス", "配送方法", "送料の目安"]}
          rows={[
            ["オイシックス", "ヤマト運輸クール便（冷蔵+冷凍）+ 自社便（一部エリア）", "通常800円〜1,800円程度（地域・購入金額により変動）"],
            ["nosh", "ヤマト運輸クール宅急便（冷凍）", "関東913円〜沖縄2,827円（地域別固定）"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※送料は購入金額や地域、定期会員ステータスにより変動します。最新の正確な金額は両サービスの公式サイトをご確認ください。送料を抑えるには、両サービスとも<strong>1回の購入量を増やす</strong>のが定石です。
        </p>

        <SubHeading>お試し・初回キャンペーン</SubHeading>
        <ComparisonTable
          headers={["サービス", "初回特典の傾向（2026年5月時点）"]}
          rows={[
            ["オイシックス", "「お試しセット」を期間限定で大幅割引価格で提供。初回限定。"],
            ["nosh", "初回〜3回目で合計3,000円OFFの自動割引。クーポンコード不要。"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          初回特典の構造も対照的。オイシックスは「お試しセット1回分を大幅値引き」、noshは「3回に分散して合計値引き」。お試しセットは初回限定で<strong>家庭で実物を試せる</strong>のが最大のメリットなので、迷ったら両方の初回特典を活用するのが賢明です。
        </p>

        {/* ===== 時間 ===== */}
        <SectionHeading id="time">調理時間・手間の比較</SectionHeading>

        <ComparisonTable
          headers={["工程", "オイシックス（Kit Oisix）", "nosh"]}
          rows={[
            ["食材カット", "一部カット済み（追加カットあり）", "不要（完成済み）"],
            ["加熱・調理", "コンロ・鍋・フライパン使用（10〜20分）", "電子レンジ約6〜7分"],
            ["盛り付け", "皿に盛る", "そのままレンジから食卓へ"],
            ["後片付け", "鍋・フライパン・調理器具の洗い物あり", "容器を捨てるだけ"],
            ["平日夜の現実的所要時間", "20〜30分（準備〜片付け）", "10分以内"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          時間で見れば<strong>noshの圧勝</strong>。一方、オイシックスは「料理を楽しむ・家族で作る・できたて食べる」体験そのものに価値があるため、所要時間で優劣を判断するのは適切ではありません。残業続きの平日はnosh、休日にゆっくり料理するならオイシックス、という使い分けが理想的です。
        </p>

        {/* ===== 栄養 ===== */}
        <SectionHeading id="nutrition">栄養・健康志向の比較</SectionHeading>

        <ComparisonTable
          headers={["項目", "オイシックス", "nosh"]}
          rows={[
            ["糖質管理", "通常メニューは特に制限なし", "全メニュー糖質30g以下"],
            ["塩分管理", "通常メニューは特に制限なし", "全メニュー塩分2.5g以下"],
            ["カロリー表示", "メニューごとに表示あり", "メニューごとに表示あり（アプリで詳細確認）"],
            ["食材の質", "産直・有機・特別栽培野菜が豊富", "冷凍加工食品（食材の鮮度は冷凍時点）"],
            ["合成保存料・着色料", "原則不使用にこだわり", "メニューにより使用の場合あり"],
            ["子どもの食事適性", "○（ファミリー向け設計）", "△（糖質・塩分制限あり、量も大人向け）"],
            ["ダイエット適性", "△（料理次第）", "◎（糖質制限が容易）"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ダイエット・糖質制限を目的とするならnoshが圧倒的に有利。一方、<strong>食材の質と安全性</strong>を重視するならオイシックス。「子どもに添加物の少ないご飯を食べさせたい」という親心からはオイシックスが選ばれやすく、「忙しい中で太らない食事を確保したい」社会人にはnoshが選ばれやすいです。
        </p>

        {/* ===== メニュー ===== */}
        <SectionHeading id="menu">メニュー数・バリエーション</SectionHeading>

        <SubHeading>オイシックスのバリエーション</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          Kit Oisixは毎週20種類以上のミールキットラインナップを更新。和洋中の家庭料理〜本格レシピまで幅広く、家族の好みに合わせて選べます。ミールキット以外にも、単品の野菜・肉・魚・卵・牛乳・調味料・冷凍食品・スイーツなど取扱い品目は<strong>数千点</strong>規模。<strong>ネットスーパーとして1回の注文で食卓全体をカバーできる</strong>のが強みです。
        </p>

        <SubHeading>noshのバリエーション</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          noshは常時<strong>60種類以上のメニュー</strong>から選択可能で、毎週新メニューが追加されます。和洋中の主菜に加えて、低糖質のスイーツやパンもラインナップ。すべて<strong>1人前完結</strong>の弁当形式なので、家族で違うメニューを楽しめる一方、ボリュームのある食事を求める人や食材の購入をしたい人には別途食材調達が必要です。
        </p>

        {/* ===== ライフスタイル ===== */}
        <SectionHeading id="lifestyle">ライフスタイル別のおすすめ</SectionHeading>

        <SubHeading>一人暮らし（社会人・学生）</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          一人暮らしには基本的に<strong>nosh</strong>が向きます。1食ずつ個包装で、レンジで温めるだけ。料理スキル不要、片付け不要。オイシックスは2人前単位が基本のため、1人で消費するには量が多く食材ロスのリスクあり。料理が好きな一人暮らしなら、Kit Oisix 1食2人分を「2食分のお弁当」として活用するのも一案です。一人暮らし向けの宅食選びは<Link href="/articles/hitorigurashi-osusume/" className="text-accent underline">一人暮らしにおすすめの宅食ランキング</Link>もあわせて参考にしてみてください。
        </p>

        <SubHeading>共働き夫婦（子なし）</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          共働き夫婦には<strong>両方併用</strong>が現実的なベストプラクティス。「平日の夜は時間がない日が多い→nosh中心、週末はオイシックスでゆっくり料理」というローテーションで、自炊負担を最小化しつつ食生活の質を保てます。月の食費総額で見ると、外食を減らせる分むしろお得になるケースも。
        </p>

        <SubHeading>子育て世帯</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          子育て世帯には<strong>オイシックス</strong>がおすすめ。Kit Oisixは家族向けレシピが充実しており、化学調味料・合成保存料不使用へのこだわりが子どもの食事に安心感を与えます。子どもの偏食対応や、栄養バランスを家庭でコントロールしたい場合にも適しています。noshは大人の昼食や、忙しい日の自分用ストックとして併用するのが現実的です。
        </p>

        <SubHeading>シニア・高齢者世帯</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          シニア世帯はオイシックスとnosh以外にも、栄養管理に特化した宅食サービスを検討する価値があります。具体的には、ウェルネスダイニング（医療連携の食事制限食）、まごころケア食、ヨシケイなどが向いています。ただし、料理を楽しみたい元気なシニアにはオイシックス、温めるだけで済ませたい場合はnoshも選択肢になります。
        </p>

        {/* ===== 併用 ===== */}
        <SectionHeading id="combine">両方を併用する賢い使い方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          オイシックスとnoshは競合するというより、<strong>補完関係</strong>にあるサービスです。両方を月に1〜2回ずつ使い分けるパターンを以下に紹介します。
        </p>

        <ComparisonTable
          headers={["シーン", "おすすめ", "理由"]}
          rows={[
            ["平日昼の在宅勤務ランチ", "nosh", "5分で食べられる時短"],
            ["平日夜の残業日", "nosh", "帰宅後即食卓へ"],
            ["平日夜の家族そろう日", "オイシックス", "家庭料理感で家族の食卓"],
            ["週末ブランチ", "オイシックス", "ゆっくり料理を楽しむ"],
            ["休日のホームパーティー", "オイシックス", "見た目も良い家庭料理"],
            ["ダイエット中の昼食", "nosh", "糖質管理が確実"],
            ["来客時の手料理", "オイシックス", "「手作り感」を演出"],
          ]}
        />

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">月額の併用予算イメージ（共働き夫婦の例）</p>
          <ul className="list-disc list-inside space-y-1">
            <li>オイシックス：月2〜3回 × ミールキット2人前 = 約8,000〜15,000円</li>
            <li>nosh（10食プラン）：月1回 × 5,990円 = 約5,990円（送料別）</li>
            <li>合計：約14,000〜21,000円/月（外食月3万円超を回避できれば実質トータルで節約）</li>
          </ul>
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：自分の「料理する余裕」で選ぶ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            オイシックスとnoshは、<strong>同じ「宅食」カテゴリでも目的が異なる</strong>サービスです。比較すべきは「どちらが優れているか」ではなく、「自分のライフスタイルにどちらが必要か」。
          </p>
          <p className="mb-3">
            <strong>料理する余裕がある日が週に何日あるか</strong>——この質問に答えれば、答えは自然と見えてきます。週3日以上料理できるならオイシックス、週1日もままならないならnosh、その間なら両方併用が正解です。
          </p>
          <p>
            両サービスとも初回特典が用意されているので、まずは1回ずつ試してみて、自分の生活リズムにフィットする方を選ぶのが失敗しない始め方です。最新のキャンペーン情報・料金は必ず公式サイトでご確認ください。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 my-8">
          <a
            href="https://www.oisix.com/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block bg-accent text-white font-bold text-center px-6 py-4 rounded-lg hover:bg-accent-dark transition-colors text-sm"
          >
            Oisix公式サイトを見る
          </a>
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block bg-accent text-white font-bold text-center px-6 py-4 rounded-lg hover:bg-accent-dark transition-colors text-sm"
          >
            nosh公式サイトを見る
          </a>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            一人暮らしにおすすめの宅食TOP5
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/coopdeli-vs-palsystem/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            コープデリ vs パルシステム
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ダイエット向け宅食ランキング
          </Link>
        </div>

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
      </article>
    </>
  );
}
