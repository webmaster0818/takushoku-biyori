import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ニチレイフーズダイレクトのお試しセット【2026年版】内容・送料・申し込みの流れ";
const ARTICLE_DESCRIPTION =
  "ニチレイフーズダイレクトのお試しセットについて、内容のタイプ・送料の考え方・申し込みの流れ・注意点をわかりやすく解説。冷凍弁当を初めて試す人向けに選び方も紹介します。価格・送料・キャンペーンは変動するため、最新は公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nichirei-otameshi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ニチレイフーズダイレクト お試しセット, ニチレイ お試し, ニチレイフーズダイレクト 送料, ニチレイ 冷凍弁当, ニチレイ 宅配, ニチレイフーズダイレクト 申し込み, 冷凍弁当 お試し",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-06-04T00:00:00+09:00",
    modifiedTime: "2026-06-04T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "ニチレイフーズダイレクトのお試しセットはいくら？",
    answer:
      "お試しセットの価格・内容はキャンペーンや時期によって変動するため、本記事では断定しません。ニチレイフーズダイレクトは、初めての方向けにお試ししやすいセットや特典を用意していることがありますが、対象商品・価格・送料の条件は更新されることがあります。最新かつ正確な金額は、必ず公式サイトでご確認ください。",
  },
  {
    question: "送料はかかる？",
    answer:
      "送料の有無や金額は、商品・購入金額・地域・キャンペーンによって変わります。冷凍商品はクール便で届くため、通常配送に加えてクール料金がかかる場合もあります。お試しセットでは送料込み・送料無料の扱いになることもありますが、条件は時期で変動します。実際の送料は申し込み画面・公式サイトの表示でご確認ください。",
  },
  {
    question: "お試しセットの中身はどんな内容？",
    answer:
      "ニチレイフーズダイレクトは冷凍食品・冷凍弁当を扱っており、お試しセットには栄養バランスや塩分・カロリーに配慮したシリーズの商品が含まれることがあります。具体的な品目・食数はセットや時期によって異なるため、申し込み時に公式サイトで内容を確認してください。冷凍で届くため、受け取り時に冷凍庫の空きが必要です。",
  },
  {
    question: "お試しだけで終わらせることはできる？(定期縛りはある？)",
    answer:
      "お試しセットが単発購入なのか、定期コースの初回扱いなのかは商品によって異なります。定期コースの場合は継続条件や次回配送のタイミングがあるため、申し込み前に「単発か定期か」「解約・停止の方法」を必ず確認しましょう。条件は公式サイトの各商品ページに記載されています。",
  },
  {
    question: "申し込みから到着までどれくらい？",
    answer:
      "到着までの日数は、申し込みのタイミング・在庫・配送地域によって変わります。冷凍便のため受け取り日時の指定ができる場合が多いので、冷凍庫の空きを確保したうえで都合のよい日時を指定するとスムーズです。正確な配送目安は申し込み画面でご確認ください。",
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
          <span className="text-foreground/70">お試しセット</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ニチレイフーズダイレクト お試しセット</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：まずは公式のお試しセットで味を確認" },
    { id: "what", label: "ニチレイフーズダイレクトとは" },
    { id: "naiyo", label: "お試しセットの内容タイプ" },
    { id: "souryo", label: "送料の考え方（具体額は公式で確認）" },
    { id: "flow", label: "お試しセット申し込みの流れ" },
    { id: "warnings", label: "申し込み前に確認したい注意点" },
    { id: "muki", label: "ニチレイのお試しが向いている人" },
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

export default function NichireiOtameshiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-06-04T00:00:00+09:00",
    dateModified: "2026-06-04T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "お試しセット" },
      { "@type": "ListItem", position: 3, name: "ニチレイフーズダイレクト お試しセット" },
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
            お試しセット
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-06-04">公開: 2026年6月4日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の各社公式情報に基づき記述</strong>しています。料金・キャンペーンは変動するため、最新は<a href="https://www.nichireifoods.co.jp/npd/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ニチレイフーズダイレクト公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「ニチレイの冷凍弁当を試してみたいけど、いきなり定期はちょっと…」——そんなときに役立つのが<strong>お試しセット</strong>です。まずは少量から味・量・使い勝手を確かめられます。
          </p>
          <p className="mb-3">
            この記事では、ニチレイフーズダイレクトのお試しセットについて、<strong>内容のタイプ・送料の考え方・申し込みの流れ・注意点</strong>を整理して解説します。
          </p>
          <p>
            なお、<strong>価格・送料・お試しの内容は時期によって変動</strong>します。本記事では断定せず、最新・正確な情報は必ず公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：まずは公式のお試しセットで味を確認</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍弁当・冷凍食品は、味や量の好みが分かれやすいジャンルです。だからこそ、<strong>いきなり定期購入する前にお試しセットで確かめる</strong>のが失敗しにくい進め方です。
        </p>

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>お試しセットは<strong>味・量を確かめる入口</strong>として便利</li>
            <li>価格・送料・内容は<strong>時期により変動</strong>するため公式で要確認</li>
            <li>冷凍で届くため<strong>冷凍庫の空き</strong>を確保しておく</li>
            <li>「単発か定期か」を申込前に必ずチェック</li>
          </ul>
        </div>

        {/* ===== ニチレイとは ===== */}
        <SectionHeading id="what">ニチレイフーズダイレクトとは</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ニチレイフーズダイレクトは、冷凍食品で知られる<strong>ニチレイグループの直販(通販)サービス</strong>です。冷凍弁当・冷凍おかずなどを扱っており、栄養バランスやカロリー・塩分に配慮したシリーズも展開しています。冷凍で届くため、<strong>電子レンジで温めるだけ</strong>で手軽に食べられるのが特徴です。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          長期保存がきく冷凍タイプなので、ストックしておけば「今日は作りたくない」というときの備えにもなります。健康面に配慮したメニューを探している人や、買い物・調理の手間を減らしたい人に向いています。
        </p>

        {/* ===== 内容 ===== */}
        <SectionHeading id="naiyo">お試しセットの内容タイプ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          お試しセットの中身は時期や商品によって異なりますが、一般的に次のようなタイプが考えられます。どのタイプが用意されているかは公式サイトで確認してください。
        </p>

        <ComparisonTable
          headers={["タイプ", "特徴", "こんな人に"]}
          rows={[
            ["栄養バランス配慮シリーズ", "カロリー・塩分などに配慮した献立", "健康を意識したい人"],
            ["主菜+副菜のセット", "おかず中心で組み合わせやすい", "ごはんは自分で用意したい人"],
            ["少量お試しパック", "少ない食数で味を確認できる", "まず試してから決めたい人"],
          ]}
        />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">内容・価格は断定できません</p>
          <p>お試しセットの品目・食数・価格は時期で変わります。当サイトでは正確性を優先し、具体的な内容・金額を断定しません。<strong>最新・正確な内容は公式サイトの表示</strong>でご確認ください。</p>
        </div>

        {/* ===== 送料 ===== */}
        <SectionHeading id="souryo">送料の考え方（具体額は公式で確認）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍商品はクール便で届くため、送料は通常の宅配と考え方が少し異なります。比較の際は次のポイントを確認しましょう。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>送料が「商品価格に含まれる」か「別途加算」か</li>
          <li>購入金額による送料無料ラインの有無</li>
          <li>冷凍(クール)料金が加算されるか</li>
          <li>配送地域による送料の違い(離島など)</li>
        </ul>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">送料込みかどうかをチェック</p>
          <p>お試しセットでは「送料込み」「送料無料」の扱いになることもありますが、条件は時期で変動します。総額がいくらになるかは、<strong>申し込み確認画面の合計金額</strong>で必ず確認してください。送料の負担を抑えたい人は、<Link href="/articles/souryou-yasui-ranking/" className="text-accent underline">送料が安い冷凍弁当ランキング</Link>もあわせて参考にできます。</p>
        </div>

        {/* ===== 申し込みの流れ ===== */}
        <SectionHeading id="flow">お試しセット申し込みの流れ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初めてニチレイフーズダイレクトのお試しセットを申し込む際の一般的な流れは次の通りです。
        </p>

        {[
          { num: 1, title: "公式サイトにアクセス", text: "ニチレイフーズダイレクトの公式サイトで、お試し対象のセット・商品ページを開きます。" },
          { num: 2, title: "お試しセット・商品を選ぶ", text: "内容(品目・食数)・価格・送料の条件を確認し、目的に合うセットを選択します。" },
          { num: 3, title: "「単発か定期か」を確認", text: "単発購入なのか、定期コースの初回扱いなのかを必ず確認します。定期の場合は継続条件・解約方法もチェック。" },
          { num: 4, title: "配送先・受け取り日時を指定", text: "冷凍便のため、冷凍庫の空きを確保できる日時を指定するとスムーズです。" },
          { num: 5, title: "支払い情報を登録し、合計金額を確認して確定", text: "確認画面で送料込みの合計金額を確認してから注文を確定します。" },
        ].map((step) => (
          <div key={step.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {step.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{step.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 注意点 ===== */}
        <SectionHeading id="warnings">申し込み前に確認したい注意点</SectionHeading>

        {[
          {
            title: "1. 冷凍庫の空きを確保する",
            text: "冷凍弁当はかさばるため、届く前に冷凍庫のスペースを空けておきましょう。受け取り日時を指定して、保管できるタイミングで届くようにするのがおすすめです。",
          },
          {
            title: "2. 「単発」か「定期」かを確認する",
            text: "お試しが定期コースの初回扱いの場合、継続条件や次回配送があります。お試しだけで終えたい場合は、解約・停止の方法を申込前に確認しておくと安心です。",
          },
          {
            title: "3. 価格・送料は時期で変わる",
            text: "お試しの価格・送料・特典は予告なく更新されます。古い情報の金額をあてにせず、申込時点の公式表示と合計金額を基準にしてください。",
          },
          {
            title: "4. アレルギー・原材料を確認する",
            text: "アレルギーや食事制限がある場合は、各商品の原材料・栄養成分表示を必ず確認しましょう。栄養バランス配慮シリーズでも、含まれる原材料は商品ごとに異なります。",
          },
        ].map((item, i) => (
          <div key={i} className="bg-cream rounded-lg p-4 mb-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}

        {/* ===== 向いている人 ===== */}
        <SectionHeading id="muki">ニチレイのお試しが向いている人</SectionHeading>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>冷凍弁当を初めて試すので、まず味・量を確かめたい</li>
          <li>カロリー・塩分など健康面に配慮したメニューを探している</li>
          <li>温めるだけの手軽な食事をストックしておきたい</li>
          <li>いきなり定期購入するのは不安なので、単発で試したい</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          他社のお試しセットと比較して選びたい場合は、<Link href="/articles/otameshi-set-osusume/" className="text-accent underline">お試しセットおすすめ</Link>もあわせて読むと、自分に合うサービスを選びやすくなります。
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
        <SectionHeading id="summary">まとめ：お試しで味と使い勝手を確かめよう</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ニチレイフーズダイレクトのお試しセットは、<strong>冷凍弁当を初めて試す入口</strong>として便利です。温めるだけの手軽さと、健康面に配慮したシリーズが特徴で、定期購入の前に味・量・使い勝手を確かめられます。
          </p>
          <p className="mb-3">
            価格・送料・お試しの内容は<strong>時期によって変動</strong>します。当サイトでは正確性を優先し、具体的な金額・内容は断定しません。
          </p>
          <p>
            申し込み時は「単発か定期か」「冷凍庫の空き」「合計金額(送料込み)」を必ず確認しましょう。最新・正確な情報は、必ずニチレイフーズダイレクト公式サイトでご確認ください。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://www.nichireifoods.co.jp/npd/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            ニチレイフーズダイレクト公式サイトでお試しを見る
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の内容・価格・送料は公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            お試しセットおすすめ
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            送料が安い冷凍弁当ランキング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/reitou-bento-atatame-kata/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            冷凍弁当の温め方
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            高齢者向け宅配弁当のおすすめ
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
