import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "nosh（ナッシュ）vs ワタミの宅食 徹底比較【2026年版】メニュー・配達方式・向いている人";
const ARTICLE_DESCRIPTION =
  "nosh（ナッシュ）とワタミの宅食を、メニュー傾向・配達方式・向いている人の観点で徹底比較。低糖質でおしゃれな冷凍弁当のnoshと、調理済みおかず中心で手渡し配達もあるワタミの宅食、どちらが自分に合うかを整理します。料金・キャンペーンは変動するため、最新は各公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-vs-watami/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh ワタミ 比較, ナッシュ ワタミ, nosh vs ワタミの宅食, ナッシュ ワタミ どっち, nosh 低糖質, ワタミの宅食, 冷凍弁当 比較, 宅配弁当 比較",
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
    question: "noshとワタミの宅食、どっちが安い？",
    answer:
      "料金はプラン・地域・注文数・キャンペーンによって変動するため、本記事では具体的な金額を断定しません。一般に、noshは1食ごとにメニューを選んで購入する冷凍宅配弁当で、まとめて頼むほど1食あたりの単価が下がる仕組みが採られることが多いです。ワタミの宅食は調理済みおかず・弁当を日替わりや定期で届けるスタイルです。1食あたりの感覚的な負担はプラン選び次第で変わります。最新・正確な金額は、必ず各公式サイトでご確認ください。",
  },
  {
    question: "配達方式はどう違う？",
    answer:
      "おおまかな違いとして、noshは冷凍弁当を宅配便で全国に届けるスタイルで、冷凍庫にストックして好きなときに食べられます。ワタミの宅食は地域によって自社スタッフ（まごころスタッフ）による手渡し・置き配で届けるコースがあり、毎日や週ごとのペースで受け取るスタイルが中心です。どちらも対応状況は地域で異なるため、エリア対応は公式で確認してください。",
  },
  {
    question: "低糖質・ダイエット目的ならどっち？",
    answer:
      "noshは糖質や塩分に配慮したメニュー設計を掲げており、低糖質を意識した食事管理をしたい人に選ばれやすいサービスです。栄養成分が各メニューに表示されているため、糖質・カロリーを見ながら選びたい方に向きます。ワタミの宅食も栄養バランスに配慮した献立を提供していますが、コンセプトはやや異なります。目的に合った数値が公開されているかを各公式で確認しましょう。",
  },
  {
    question: "高齢者や一人暮らしにはどっちが向いている？",
    answer:
      "毎日の手渡しや安否確認的な受け取りを重視する高齢者・一人暮らしの方には、地域によって手渡し対応があるワタミの宅食が候補になりやすいです。一方、自分のペースでまとめてストックし、好きなときに温めて食べたい方には、冷凍でストックできるnoshが向きます。冷凍庫の空き容量や受け取りの都合も踏まえて選びましょう。",
  },
  {
    question: "お試しはできる？",
    answer:
      "両社とも、新規向けに割引や初回キャンペーンを実施することがあります。内容（対象プラン・割引・期間）は時期によって変動するため、本記事では断定しません。まずは少ない食数から試して、味・量・配送の使い勝手を確認するのがおすすめです。最新のお試し情報は各公式サイトでご確認ください。",
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
          <span className="text-foreground/70">比較</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">nosh vs ワタミの宅食</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：食事管理かラクさかで選ぶ" },
    { id: "overview", label: "noshとワタミの宅食の基本" },
    { id: "houshiki", label: "配達方式の違い" },
    { id: "menu", label: "メニュー傾向の違い" },
    { id: "ryoukin", label: "料金の考え方（具体額は公式で確認）" },
    { id: "muki", label: "向いている人・向いていない人" },
    { id: "choose", label: "タイプ別おすすめの選び方" },
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

export default function NoshVsWatamiPage() {
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
      { "@type": "ListItem", position: 2, name: "比較" },
      { "@type": "ListItem", position: 3, name: "nosh vs ワタミの宅食" },
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
            比較
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の各社公式情報に基づき記述</strong>しています。料金・キャンペーンは変動するため、最新は<a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">nosh（ナッシュ）公式サイト</a>・<a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ワタミの宅食公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「noshとワタミの宅食、どっちが合うの？」——どちらも人気の宅食サービスですが、この2社は<strong>コンセプトとスタイルがかなり違います</strong>。
          </p>
          <p className="mb-3">
            ざっくり言うと、noshは<strong>低糖質を意識したおしゃれな冷凍弁当を選んでストックする</strong>サービス、ワタミの宅食は<strong>調理済みおかず・弁当を届け、地域によって手渡し配達もある</strong>サービスです。
          </p>
          <p>
            この記事では、メニュー傾向・配達方式・向いている人の観点で両者を比較します。<strong>料金・キャンペーンは時期で変動</strong>するため具体額は断定せず、最新は各公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：食事管理かラクさかで選ぶ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshとワタミの宅食を選ぶときの分かれ目は、<strong>「低糖質などの食事管理を重視したいか」</strong>と<strong>「受け取りやすさ・手間の少なさを重視したいか」</strong>です。ここがはっきりすると、迷わず選べます。
        </p>

        <ComparisonTable
          headers={["あなたの希望", "向いているサービス"]}
          rows={[
            ["低糖質・栄養成分を見ながら選びたい", "nosh（ナッシュ）"],
            ["冷凍でストックして好きなときに食べたい", "nosh（ナッシュ）"],
            ["毎日や週ごとに手渡しで受け取りたい", "ワタミの宅食（地域による）"],
            ["高齢の家族に届けてほしい", "ワタミの宅食（地域による）"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>noshは<strong>低糖質を意識した冷凍弁当</strong>を選んでストックするスタイル</li>
            <li>ワタミの宅食は<strong>調理済みおかず・弁当中心で手渡し配達もあり（地域による）</strong></li>
            <li>「食事管理を重視するか／受け取りやすさを重視するか」で選ぶとわかりやすい</li>
            <li>料金・お試しは<strong>時期で変動</strong>するため公式で要確認</li>
          </ul>
        </div>

        {/* ===== 基本 ===== */}
        <SectionHeading id="overview">noshとワタミの宅食の基本</SectionHeading>

        <SubHeading>nosh（ナッシュ）とは</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          noshは、<strong>糖質や塩分に配慮したメニュー設計を掲げる冷凍宅配弁当サービス</strong>です。主菜＋副菜がワンプレートにまとまった冷凍弁当を、メニューから自分で選んで注文するスタイル。電子レンジで温めるだけで食べられ、冷凍庫にストックしておけるのが特徴です。メニューが豊富で見た目もおしゃれ、各メニューに糖質・カロリーなどの栄養成分が表示されており、<strong>低糖質を意識した食事管理をしたい人</strong>に選ばれています。
        </p>

        <SubHeading>ワタミの宅食とは</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食は、<strong>調理済みのおかず・弁当を届ける宅食サービス</strong>です。栄養バランスに配慮した日替わりの献立が中心で、基本的に温めるだけ・そのまま食べられる手軽さが魅力。地域によっては自社スタッフ（まごころスタッフ）による手渡し・置き配の対応があり、<strong>毎日の食事を手間なく整えたい層や高齢者世帯</strong>に支持されています。なお、冷凍弁当を全国へ宅配便で届ける「ワタミの宅食ダイレクト」もあります。
        </p>

        {/* ===== 配達方式 ===== */}
        <SectionHeading id="houshiki">配達方式の違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          受け取り方のスタイルにも違いがあります。ライフスタイルに合うかどうかは、ここも重要なポイントです。
        </p>

        <ComparisonTable
          headers={["項目", "nosh（ナッシュ）", "ワタミの宅食"]}
          rows={[
            ["届くもの", "冷凍弁当（ワンプレート）", "調理済みおかず・弁当中心"],
            ["保存タイプ", "冷凍", "コースにより冷蔵・冷凍など"],
            ["配達方法", "宅配便で全国に配送", "自社スタッフ手渡し・置き配など（地域による）"],
            ["受け取りペース", "まとめて届きストック", "毎日・週ごとなど（コースによる）"],
            ["調理の必要", "電子レンジで温めるだけ", "基本は温めるだけ"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※配達方法・対応地域・保存タイプはプランやエリアで異なります。実際の対応状況は各公式サイトでご確認ください。冷凍弁当をストックするには冷凍庫の空き容量も確認しておくと安心です。
        </p>

        {/* ===== メニュー ===== */}
        <SectionHeading id="menu">メニュー傾向の違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          メニューの考え方も異なります。noshは「低糖質を意識して自分で選ぶ冷凍弁当」、ワタミの宅食は「栄養バランスに配慮した日替わりのおかず」が軸です。
        </p>

        <ComparisonTable
          headers={["観点", "nosh（ナッシュ）", "ワタミの宅食"]}
          rows={[
            ["メニューの軸", "低糖質を意識したワンプレート弁当", "日替わりの調理済みおかず"],
            ["選び方", "自分でメニューを選ぶ", "コースの献立を受け取る"],
            ["栄養成分の表示", "糖質・カロリーなどを各メニューに表示", "栄養バランスに配慮した献立"],
            ["見た目・雰囲気", "おしゃれでカフェ風の盛り付け", "和食中心の家庭的な惣菜"],
            ["向く食シーン", "在宅ワークの昼食・夜食、食事管理など", "手軽な昼食・夕食、高齢者の食事など"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          どちらも栄養に配慮していますが、noshは数値を見ながら自分で選ぶ自由度が高く、ワタミの宅食は届く献立にお任せできる手軽さが強みと言えます。
        </p>

        {/* ===== 料金 ===== */}
        <SectionHeading id="ryoukin">料金の考え方（具体額は公式で確認）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          料金はプラン・地域・頼む食数・キャンペーンによって変わるため、本記事では<strong>具体的な金額は断定しません</strong>。比較の際は、次のポイントを各公式サイトで確認すると失敗しにくいです。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>1食（1人前）あたりの目安価格</li>
          <li>注文する食数による単価の変化（noshはまとめ買いで単価が下がる仕組みが採られることが多い）</li>
          <li>配送料・地域による違い</li>
          <li>初回お試し・キャンペーン・割引の有無</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">料金は時期・地域で変動します</p>
          <p>当サイトでは正確性を優先し、価格を断定しません。<strong>最新・正確な料金は各公式サイトの表示</strong>でご確認ください。同じ「宅食」でも、冷凍ストック型か手渡し型かによって、受け取りの手間や満足ポイントが異なる点も踏まえて比較しましょう。</p>
        </div>

        {/* ===== 向いている人 ===== */}
        <SectionHeading id="muki">向いている人・向いていない人</SectionHeading>

        <SubHeading>noshが向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>低糖質・栄養成分を意識して食事管理をしたい</li>
          <li>冷凍庫にストックして、好きなときに食べたい</li>
          <li>メニューを自分で選ぶ楽しさが欲しい</li>
          <li>在宅ワークの昼食など、手早くおしゃれな食事を取りたい</li>
        </ul>

        <SubHeading>ワタミの宅食が向いている人</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>とにかく手間を減らし、届いた献立にお任せしたい</li>
          <li>毎日や週ごとに手渡しで受け取りたい（地域による）</li>
          <li>高齢の家族の食事を手軽に整えたい</li>
          <li>和食中心の家庭的なおかずが好み</li>
        </ul>

        <SubHeading>注意したい人</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍庫の空きが少ない人は、まとめて届くnoshのストックに困ることがあります。逆に、自分で細かく食事管理をしたい人には、献立お任せのワタミの宅食はやや物足りなく感じる場合があります。どちらも<strong>対応地域や配達方法が限られる</strong>ことがあるため、まずは自宅が対応エリアかを確認しましょう。
        </p>

        {/* ===== 選び方 ===== */}
        <SectionHeading id="choose">タイプ別おすすめの選び方</SectionHeading>

        <ComparisonTable
          headers={["ライフスタイル", "おすすめ", "理由"]}
          rows={[
            ["低糖質・ダイエットを意識したい", "nosh", "糖質などの栄養成分を見て選べる"],
            ["在宅ワークでサッと昼食を取りたい", "nosh", "冷凍ストックを温めるだけ"],
            ["毎日の食事を手間なく整えたい", "ワタミの宅食", "届いた献立にお任せできる"],
            ["高齢の親に届けたい", "ワタミの宅食", "手渡し対応（地域）+調理不要"],
            ["まず試して決めたい", "両社のお試し", "味・量・配送を比較できる"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          実際の味や使い勝手は、利用者の評判もチェックしておくと安心です。noshについては<Link href="/articles/nosh-reviews/" className="text-accent underline">noshの口コミ・評判</Link>、ワタミの宅食については<Link href="/articles/watami-reviews/" className="text-accent underline">ワタミの宅食の口コミ・評判</Link>で詳しく解説しています。冷凍弁当同士を比べたい方は<Link href="/articles/oisix-vs-nosh/" className="text-accent underline">オイシックス vs nosh</Link>や<Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent underline">nosh・三ツ星ファーム・ウェルネスダイニング比較</Link>も参考になります。
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
        <SectionHeading id="summary">まとめ：コンセプトが違うので「目的」で選ぶ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            noshとワタミの宅食は、同じ宅食でも<strong>コンセプトが大きく異なる</strong>サービスです。noshは低糖質を意識した冷凍弁当を自分で選んでストックするスタイルで「食事管理をしたい人」向け、ワタミの宅食は調理済みおかず中心で手渡し配達もある（地域による）スタイルで「手間なく毎日の食事を整えたい人」向け、と捉えると選びやすくなります。
          </p>
          <p className="mb-3">
            料金・お試し・対応地域は<strong>時期や地域で変動</strong>します。当サイトでは正確性を優先し、価格は断定しません。
          </p>
          <p>
            迷ったら、まずは少ない食数のお試しで、味・量・配送の使い勝手を比べてみるのがおすすめ。最新・正確な情報は、必ず各公式サイトでご確認ください。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            nosh（ナッシュ）公式サイトを見る
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の料金・お試し・対応地域は公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            ワタミの宅食の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/oisix-vs-nosh/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            オイシックス vs nosh
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh・三ツ星ファーム・ウェルネスダイニング比較
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
