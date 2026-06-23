import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "DELIPICKS（デリピックス）のお試し・特徴まとめ【2026年版】高タンパク冷凍宅配はどんな人向け？";
const ARTICLE_DESCRIPTION =
  "DELIPICKS（デリピックス）はフレンチシェフ監修の冷凍宅配弁当。お試しの考え方・高タンパク低糖質といった特徴・向いている人を整理します。料金やお試し割引は変動するため、最新は公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/delipicks-otameshi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "DELIPICKS, デリピックス, デリピックス お試し, デリピックス 特徴, デリピックス 口コミ, 高タンパク 冷凍弁当, フレンチシェフ 冷凍宅配, 宅配弁当 お試し, 冷凍宅配弁当 ダイエット",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-06-14T00:00:00+09:00",
    modifiedTime: "2026-06-14T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "DELIPICKS（デリピックス）はどんなサービス？",
    answer:
      "DELIPICKS（デリピックス）は、フレンチのミシュラン星付きレストランで経験を積んだシェフ（中村元気シェフ）が監修する冷凍宅配弁当サービスです。電子レンジで温めるだけで食べられる冷凍弁当が中心で、栄養バランスに配慮したメニュー設計が特徴とされています。お弁当のほか、オープンサンドなどの商品展開もあります。詳しい商品ラインナップは公式サイトでご確認ください。",
  },
  {
    question: "お試しはできる？料金はいくら？",
    answer:
      "DELIPICKSは新規向けに「お試しセット」を用意しています。具体的な料金・お試し割引・招待コードなどの内容は時期によって変動するため、本記事では断定しません。まずは少ない食数のお試しで、味・量・冷凍庫の収まり具合・温め方を確認するのがおすすめです。最新・正確な金額やキャンペーンは、必ず公式サイトでご確認ください。",
  },
  {
    question: "高タンパク・低糖質をうたっているの？",
    answer:
      "公式では、メニューの設計目安として「糖質を抑えつつ、たんぱく質をしっかり摂れる」方向性が示されています（具体的な数値はメニューや時期で異なります）。ボディメイクや栄養バランスを意識して食事を選びたい人に向いた設計といえます。各メニューの正確な栄養成分は、公式サイトの商品ページでご確認ください。",
  },
  {
    question: "温め方や保存はどうなっている？",
    answer:
      "DELIPICKSは冷凍で届く宅配弁当で、電子レンジで温めて食べるスタイルです。パッケージはコンパクトな真空パック形状で、冷凍庫のスペースを取りにくいよう配慮されているとされています。温め時間の目安やワット数、保存方法はパッケージや公式の案内に従ってください。",
  },
  {
    question: "どんな人に向いている？",
    answer:
      "「外食やコンビニに偏りがちな食事を整えたい」「調理はしたくないが、味やクオリティにはこだわりたい」「たんぱく質を意識した食事を手軽に続けたい」といった人に向いています。一方、毎日できたての料理を作りたい人や、冷凍庫に空きがない人には合わない場合があります。まずはお試しで自分の生活に合うか確認しましょう。",
  },
];

/* ---------- Helper Components ---------- */

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
          <span className="text-foreground/70">サービス紹介</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">DELIPICKS（デリピックス）のお試し</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：味重視で高タンパクを手軽に続けたい人向け" },
    { id: "overview", label: "DELIPICKS（デリピックス）とは" },
    { id: "tokucho", label: "DELIPICKSの主な特徴" },
    { id: "otameshi", label: "お試しの考え方（料金は公式で確認）" },
    { id: "muki", label: "向いている人・向いていない人" },
    { id: "hikaku", label: "ほかの高タンパク系宅配との位置づけ" },
    { id: "choose", label: "失敗しないお試しのチェックポイント" },
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
        <span className="faq-arrow text-warm-gray ml-2">&#9660;</span>
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

/* ---------- Page Component ---------- */

export default function DelipicksOtameshiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-06-14T00:00:00+09:00",
    dateModified: "2026-06-14T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: {
      "@type": "Organization",
      name: "宅食びより",
      url: "https://takushoku-biyori.com",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "サービス紹介" },
      { "@type": "ListItem", position: 3, name: "DELIPICKS（デリピックス）のお試し" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            サービス紹介
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-06-14">公開: 2026年6月14日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の公式情報に基づき記述</strong>しています。料金・お試し・キャンペーンは変動するため、最新は<a href="https://deli-picks.com/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">DELIPICKS公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「DELIPICKS（デリピックス）って実際どうなの？お試しから始めて大丈夫？」——そんな疑問に答える記事です。
          </p>
          <p className="mb-3">
            DELIPICKSは、<strong>フレンチのミシュラン星付きレストランで経験を積んだシェフが監修する冷凍宅配弁当</strong>。電子レンジで温めるだけで、味にこだわった一皿を手軽に食べられるのが大きな特徴です。
          </p>
          <p>
            この記事では、特徴・お試しの考え方・向いている人を整理します。<strong>料金やお試し割引は時期で変動</strong>するため具体額は断定せず、最新は公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：味重視で高タンパクを手軽に続けたい人向け</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          DELIPICKSが向いているかどうかは、<strong>「味やクオリティを妥協せず、調理の手間なく栄養バランスを整えたいか」</strong>でほぼ決まります。ここがはっきりすると、お試しに進むかどうかを判断しやすくなります。
        </p>

        <ComparisonTable
          headers={["あなたの希望", "DELIPICKSとの相性"]}
          rows={[
            ["味やクオリティにこだわりたい", "◎ シェフ監修メニューが軸"],
            ["調理はせず温めるだけにしたい", "◎ 冷凍をレンジで温めるだけ"],
            ["たんぱく質を意識した食事にしたい", "◯ 高タンパク・糖質オフ志向の設計"],
            ["とにかく1食を最安で済ませたい", "△ 価格より味・質を重視する人向け"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>DELIPICKSは<strong>フレンチシェフ監修の冷凍宅配弁当</strong></li>
            <li><strong>温めるだけ</strong>で、味にこだわった食事を続けやすい</li>
            <li><strong>高タンパク・糖質オフ志向</strong>の栄養設計が特徴</li>
            <li>料金・お試しは<strong>時期で変動</strong>するため公式で要確認</li>
          </ul>
        </div>

        {/* ===== とは ===== */}
        <SectionHeading id="overview">DELIPICKS（デリピックス）とは</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          DELIPICKS（デリピックス）は、<strong>電子レンジで温めるだけで食べられる冷凍宅配弁当のサービス</strong>です。最大の特徴は、<strong>フランスのミシュラン星付きレストランで経験を積んだシェフ（中村元気シェフ）がメニューを監修</strong>している点。レシピの考案から改善検討までシェフが関わっており、家庭で手軽に「お店のような一皿」を再現することをコンセプトにしています。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍弁当のほかに、オープンサンドなどの商品展開もあり、ライフスタイルや食シーンに合わせて選べる構成になっています。具体的なラインナップや組み合わせは時期によって更新されるため、最新のメニューは公式サイトでご確認ください。
        </p>

        {/* ===== 特徴 ===== */}
        <SectionHeading id="tokucho">DELIPICKSの主な特徴</SectionHeading>

        <SubHeading>1. フレンチシェフ監修の本格的な味</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ミシュラン星付きレストランで経験を積んだシェフが監修している点が、DELIPICKS最大の個性です。冷凍宅配弁当は「手軽さ」が魅力の反面、味の満足度がネックになりがちですが、DELIPICKSは<strong>味・クオリティを重視する層に向けた設計</strong>になっています。
        </p>

        <SubHeading>2. 高タンパク・糖質オフ志向の栄養設計</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          公式では、<strong>糖質を抑えつつ、たんぱく質をしっかり摂れる</strong>方向性のメニュー設計が示されています。ボディメイクや栄養バランスを意識する人にとって、選ぶ手間なく「整った食事」を続けやすいのがメリットです。各メニューの正確な栄養成分（たんぱく質量・糖質量など）はメニューや時期で異なるため、公式の商品ページで確認しましょう。
        </p>

        <SubHeading>3. 温めるだけ・コンパクトな冷凍パッケージ</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍で届き、<strong>電子レンジで温めるだけ</strong>で食べられます。パッケージはコンパクトな真空パック形状で、冷凍庫のスペースを取りにくいよう配慮されているとされています。忙しい平日や、料理の時間を取りにくい人でも続けやすい設計です。
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">栄養成分・容量は商品ごとに異なります</p>
          <p>たんぱく質量・糖質量・カロリー・パッケージサイズなどはメニューや時期で変わります。当サイトでは正確性を優先し、具体的な数値は断定しません。<strong>正確な情報は公式サイトの各商品ページ</strong>でご確認ください。</p>
        </div>

        {/* ===== お試し ===== */}
        <SectionHeading id="otameshi">お試しの考え方（料金は公式で確認）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          DELIPICKSは、新規向けに<strong>「お試しセット」</strong>を用意しています。いきなり定期購入を始めるのではなく、まずは少ない食数で味・量・使い勝手を確かめられるのが安心ポイントです。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          ただし、<strong>お試しの料金・割引・招待コード・送料の扱いは時期によって変動</strong>します。本記事では具体的な金額やクーポンは断定しません。比較・検討の際は、次のポイントを公式サイトで確認すると失敗しにくいです。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>お試しセットの食数・内容（和・洋・フレンチなどの組み合わせ）</li>
          <li>お試し価格・送料・適用条件（初回限定かどうか）</li>
          <li>お試し後に定期購入へ自動で移行するか</li>
          <li>定期購入の食数・割引率・スキップや停止の方法</li>
        </ul>

        <div className="bg-cream rounded-xl p-5 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">お試しでまず確かめたい4つ</p>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>味</strong>：自分や家族の好みに合うか</li>
            <li><strong>量</strong>：1食で満足できるか（足りる／多い）</li>
            <li><strong>収納</strong>：自宅の冷凍庫にどれだけ入るか</li>
            <li><strong>手間</strong>：温め時間・後片付けの手軽さ</li>
          </ol>
        </div>

        {/* ===== 向いている人 ===== */}
        <SectionHeading id="muki">向いている人・向いていない人</SectionHeading>

        <SubHeading>DELIPICKSが向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>調理はしたくないが、味やクオリティにはこだわりたい</li>
          <li>外食・コンビニに偏った食事を整えたい</li>
          <li>たんぱく質を意識した食事を手軽に続けたい</li>
          <li>忙しくて自炊の時間が取りにくい一人暮らし・共働き</li>
        </ul>

        <SubHeading>向いていない可能性がある人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>毎日できたての料理を自分で作りたい</li>
          <li>冷凍庫にほとんど空きがない</li>
          <li>1食あたりの価格をとにかく最安にしたい</li>
          <li>大盛り・ボリューム最優先で選びたい</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          DELIPICKSは「価格の安さ」より「味・クオリティ・栄養バランス」を重視するサービスです。コスト最優先の人には割高に感じられる場合があるため、まずは<strong>お試しで満足度を確かめてから</strong>判断するのがおすすめです。
        </p>

        {/* ===== 比較 ===== */}
        <SectionHeading id="hikaku">ほかの高タンパク系宅配との位置づけ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          高タンパク・栄養設計を売りにした冷凍宅配は複数あります。DELIPICKSは、その中でも<strong>「シェフ監修による味の満足度」</strong>を前面に出しているのが特徴です。他サービスとの大まかな住み分けは次の通りです。
        </p>

        <ComparisonTable
          headers={["重視したいこと", "選び方の目安"]}
          rows={[
            ["味・クオリティを最優先", "DELIPICKS（シェフ監修）"],
            ["トレーニング向けの高タンパク管理", "高タンパク系専門サービスを比較"],
            ["メニュー数の多さ・定番の手軽さ", "大手の冷凍宅配弁当を比較"],
            ["まず色々試して相性を見たい", "各社のお試しを順番に利用"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          高タンパク系の選択肢を横断的に知りたい場合は<Link href="/articles/kou-tanpaku-ranking/" className="text-accent underline">高タンパク宅配弁当ランキング</Link>、ボディメイク向けの定番なら<Link href="/articles/muscle-deli-reviews/" className="text-accent underline">マッスルデリの口コミ・評判</Link>、メニュー数や手軽さ重視なら<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh（ナッシュ）の口コミ・評判</Link>もあわせてチェックすると、自分に合うサービスが見えてきます。
        </p>

        {/* ===== 選び方 ===== */}
        <SectionHeading id="choose">失敗しないお試しのチェックポイント</SectionHeading>

        <ComparisonTable
          headers={["チェック項目", "見るべきポイント"]}
          rows={[
            ["お試し価格・送料", "初回限定か、送料込みか"],
            ["食数・メニュー", "和洋など好みのジャンルがあるか"],
            ["定期移行の有無", "お試し後に自動継続になるか"],
            ["停止・スキップ", "次回の停止・変更が簡単か"],
            ["冷凍庫の空き", "届く食数分のスペースがあるか"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          特に「お試し後に定期購入へ自動で移行するか」「停止・スキップの操作が簡単か」は、後悔しないために必ず公式で確認しておきたいポイントです。お試しは、<strong>味と生活への合いやすさを見極めるための投資</strong>と考えると失敗しにくくなります。お試しセット全般の選び方は<Link href="/articles/otameshi-set-osusume/" className="text-accent underline">宅配弁当のお試しセットおすすめ</Link>も参考にしてください。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ
              key={i}
              question={`Q${i + 1}. ${faq.question}`}
              answer={faq.answer}
            />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：味重視ならお試しから始めるのが正解</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            DELIPICKS（デリピックス）は、<strong>フレンチシェフ監修の冷凍宅配弁当</strong>。温めるだけで味にこだわった食事をとれ、<strong>高タンパク・糖質オフ志向の栄養設計</strong>が特徴です。調理の手間をかけずに食事のクオリティを上げたい人に向いています。
          </p>
          <p className="mb-3">
            料金・お試し・キャンペーンは<strong>時期によって変動</strong>します。当サイトでは正確性を優先し、具体額やクーポンは断定しません。
          </p>
          <p>
            迷ったら、まずは<strong>お試しセット</strong>で味・量・冷凍庫の収まり・手軽さを確認するのがおすすめ。最新・正確な情報は、必ず公式サイトでご確認ください。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://deli-picks.com/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            DELIPICKS 公式サイトを見る
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の料金・お試し・メニューは公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            宅配弁当のお試しセットおすすめ
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            高タンパク宅配弁当ランキング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            マッスルデリの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh（ナッシュ）の口コミ・評判
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
                宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
