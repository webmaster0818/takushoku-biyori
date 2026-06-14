import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "nosh（ナッシュ）の料金・送料の仕組みをわかりやすく解説【2026年版】";
const ARTICLE_DESCRIPTION =
  "nosh（ナッシュ）の料金と送料の仕組みを、プラン食数による1食単価の変化・地域や食数で変わる送料・継続割引（nosh club）の考え方からわかりやすく解説。具体的な金額は変動するため、最新・正確な料金は公式サイトでご確認ください。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/nosh-ryoukin-souryou/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "nosh 料金, ナッシュ 料金, nosh 送料, ナッシュ 送料, nosh 1食 いくら, nosh club, nosh 継続割引, ナッシュ 値段, 宅配弁当 料金 仕組み",
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
    question: "noshは結局1食いくらになるの？",
    answer:
      "1食あたりの単価は「選ぶプランの食数」「継続割引（nosh club）の進み具合」によって変わるため、本記事では具体的な金額を断定しません。一般的な傾向として、1回に届く食数が多いプランほど1食あたりの単価は下がりやすく、継続して利用するほど割引が進む仕組みになっています。最新・正確な1食単価は、必ず公式サイトの料金表示でご確認ください。",
  },
  {
    question: "送料はいくらかかる？",
    answer:
      "noshの送料は、お届け先の地域や選ぶ食数によって変動する仕組みです。冷凍便で全国に配送されるため、地域によって送料の目安が異なります。送料は本体価格とは別にかかるため、1食単価だけでなく「送料込みの総額」で比較するのがおすすめです。具体的な送料の金額は地域・時期で変わるため、注文画面や公式サイトでご確認ください。",
  },
  {
    question: "nosh club（継続割引）とは？",
    answer:
      "nosh clubは、累計の購入食数に応じて割引率が上がっていく継続割引の仕組みです。利用を続けるほど1食あたりの単価が下がっていく設計で、長く使う人ほどお得になりやすいのが特徴です。割引率や適用条件の詳細は変更されることがあるため、最新の内容は公式サイトでご確認ください。",
  },
  {
    question: "食数が多いほど安くなるって本当？",
    answer:
      "noshでは、1回のお届けで選べる食数のプランが複数あり、一般に食数が多いプランほど1食あたりの単価が下がりやすい傾向があります。まとめて頼むほど割安になりやすい一方、冷凍庫のスペースや食べきれるペースとのバランスも大切です。単価だけでなく自分の生活に合う食数を選びましょう。",
  },
  {
    question: "途中でプランや食数は変えられる？",
    answer:
      "noshは配送のスキップやお届け間隔・食数の変更に対応しているのが一般的です。たとえば「今週は多いから一旦スキップ」「来月から食数を増やす」といった調整がしやすい設計です。変更の締め切りや具体的な操作手順は時期によって異なることがあるため、マイページや公式サイトの案内を確認してください。",
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
          <span className="text-foreground/70">nosh（ナッシュ）</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">料金・送料の仕組み</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：noshの料金は「食数×継続割引×送料」で決まる" },
    { id: "kihon", label: "noshの料金の基本構造" },
    { id: "tansa", label: "1食単価が変わる仕組み（プラン食数）" },
    { id: "souryou", label: "送料の仕組み（地域・食数で変動）" },
    { id: "noshclub", label: "nosh club（継続割引）の考え方" },
    { id: "hikaku", label: "総額で比較するときのチェックポイント" },
    { id: "tips", label: "料金を抑えるための考え方" },
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

export default function NoshRyoukinSouryouPage() {
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
      { "@type": "ListItem", position: 2, name: "nosh（ナッシュ）" },
      { "@type": "ListItem", position: 3, name: "料金・送料の仕組み" },
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
            料金ガイド
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
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年6月時点の公式情報に基づき記述</strong>しています。料金・送料・割引の内容は変動するため、最新・正確な金額は<a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">nosh（ナッシュ）公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「noshって結局1食いくらなの？」「送料はどれくらいかかる？」——nosh（ナッシュ）の料金は、<strong>いくつかの要素が組み合わさって決まる</strong>ため、単純な定価だけでは把握しづらいのが正直なところです。
          </p>
          <p className="mb-3">
            ポイントは、<strong>①プランの食数で1食単価が変わる</strong>、<strong>②送料は地域・食数で変わる</strong>、<strong>③継続割引（nosh club）で長く使うほど安くなる</strong>——この3つの「仕組み」を理解すること。
          </p>
          <p>
            この記事では、具体的な金額ではなく<strong>料金の仕組み・考え方</strong>をわかりやすく整理します。<strong>金額は時期・地域で変動</strong>するため、最新・正確な料金は必ず公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：noshの料金は「食数×継続割引×送料」で決まる</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshの料金を理解するうえで一番大事なのは、<strong>「1食単価＝固定ではない」</strong>という点です。次の3つの要素が組み合わさって、最終的に支払う金額が決まります。
        </p>

        <ComparisonTable
          headers={["決まる要素", "料金への影響（傾向）"]}
          rows={[
            ["プランの食数", "食数が多いほど1食単価が下がりやすい"],
            ["継続割引（nosh club）", "使い続けるほど割引が進みやすい"],
            ["送料", "地域・食数で変動。本体価格とは別にかかる"],
          ]}
        />

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>1食単価は<strong>選ぶ食数で変わる</strong>（多いほど安くなりやすい）</li>
            <li><strong>nosh club</strong>で継続するほど割引が進む仕組み</li>
            <li>送料は<strong>地域・食数で変動</strong>し、本体とは別計算</li>
            <li>比較は<strong>「送料込みの総額」</strong>で見るのがコツ</li>
            <li>具体額は変動するため<strong>公式で要確認</strong></li>
          </ul>
        </div>

        {/* ===== 基本構造 ===== */}
        <SectionHeading id="kihon">noshの料金の基本構造</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshの支払い総額は、大きく分けると<strong>「商品代金（メニュー本体）」＋「送料」</strong>で構成されます。そして商品代金は、<strong>1食あたりの単価 × 食数</strong>で決まります。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          ここで重要なのが、1食あたりの単価が<strong>「選ぶプランの食数」</strong>と<strong>「nosh clubの割引ランク」</strong>の2つで変動するという点です。つまり、同じメニューでも人によって・タイミングによって実質的な1食単価は変わります。
        </p>

        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["商品代金", "1食単価 × 食数（プランで単価が変動）"],
            ["送料", "地域・食数で変動（本体価格とは別）"],
            ["割引", "nosh club（継続利用で割引率が上がる）"],
            ["支払総額の目安", "商品代金 − 割引 ＋ 送料"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※上記は料金の「考え方（構造）」を示したものです。実際の金額・計算方法は時期や地域で異なるため、必ず公式サイトの表示でご確認ください。
        </p>

        {/* ===== 1食単価 ===== */}
        <SectionHeading id="tansa">1食単価が変わる仕組み（プラン食数）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshでは、1回のお届けで受け取る<strong>食数のプラン</strong>を選べます。そして一般的な傾向として、<strong>1回に届く食数が多いプランほど、1食あたりの単価が下がりやすい</strong>設計になっています。
        </p>

        <SubHeading>「まとめて頼むほど割安」になりやすい</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          多くの宅配弁当サービスと同じく、noshも<strong>まとめて注文するほど1食あたりが割安になりやすい</strong>傾向があります。少ない食数だと1食単価は高めになりやすく、食数を増やすと単価が下がりやすい、というイメージです。
        </p>

        <SubHeading>ただし「食べきれる量」とのバランスも大切</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          単価だけを見て多めのプランを選ぶと、<strong>冷凍庫に入りきらない</strong>・<strong>消費が追いつかない</strong>ということもあります。noshは冷凍弁当のため、ある程度の冷凍庫スペースが必要です。1食単価の安さと、自分のペースで食べきれる量のバランスで食数を選ぶのがおすすめです。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>食数が多いプランほど1食単価が下がりやすい（傾向）</li>
          <li>少食数は単価が高めになりやすい</li>
          <li>冷凍庫の容量・消費ペースとのバランスも考慮</li>
        </ul>

        {/* ===== 送料 ===== */}
        <SectionHeading id="souryou">送料の仕組み（地域・食数で変動）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshは冷凍便で全国に配送されるため、<strong>送料が本体価格とは別にかかります</strong>。この送料は、<strong>お届け先の地域</strong>と<strong>選ぶ食数</strong>によって変動するのが基本です。
        </p>

        <SubHeading>地域によって送料の目安が異なる</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          配送拠点からの距離などにより、<strong>地域ごとに送料の目安が異なります</strong>。一般に遠方の地域ほど送料は高くなりやすい傾向があります。自分の住んでいる地域の送料は、注文画面や公式サイトで確認できます。
        </p>

        <SubHeading>1食単価だけでなく「送料込みの総額」で見る</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          送料は1食単価とは別にかかるため、<strong>実際の負担は「商品代金＋送料」の総額</strong>で考える必要があります。とくに少ない食数だと、1食あたりに占める送料の割合が相対的に大きくなりやすい点には注意しましょう。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>送料は本体価格とは別途かかる</li>
          <li>地域によって送料の目安が異なる</li>
          <li>食数によっても送料は変わることがある</li>
          <li>比較は「送料込みの総額」で行うのが安全</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">送料の金額は地域・時期で変動します</p>
          <p>当サイトでは正確性を優先し、送料の具体額は断定しません。<strong>お住まいの地域の送料は、注文時の画面や公式サイトの表示</strong>で必ずご確認ください。</p>
        </div>

        {/* ===== nosh club ===== */}
        <SectionHeading id="noshclub">nosh club（継続割引）の考え方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshには、<strong>継続して利用するほどお得になる「nosh club」という継続割引の仕組み</strong>があります。これは、<strong>累計の購入食数が増えるほど割引率が上がっていく</strong>という考え方の制度です。
        </p>

        <SubHeading>使い続けるほど1食単価が下がる設計</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          nosh clubは、利用を続けることで<strong>1食あたりの実質単価が少しずつ下がっていく</strong>仕組みです。つまり、初回よりも継続利用時のほうが割安になりやすく、<strong>長く使う人ほどメリットが大きい</strong>制度と言えます。
        </p>

        <SubHeading>割引率・条件は変わることがある</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          割引率の段階や適用条件などの詳細は、<strong>時期によって変更されることがあります</strong>。「どのくらい続けるとどの程度割引になるか」は、最新の内容を公式サイトで確認するのが確実です。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>累計購入食数に応じて割引率が上がる仕組み</li>
          <li>継続するほど1食単価が下がりやすい</li>
          <li>割引率・条件の詳細は変更される場合あり（公式で確認）</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          初回利用時の割引やクーポンについては、<Link href="/articles/nosh-shokai-wari/" className="text-accent underline">noshの初回割引の使い方</Link>や<Link href="/articles/nosh-coupon/" className="text-accent underline">noshのクーポン情報</Link>もあわせて確認すると、トータルでお得に始めやすくなります。
        </p>

        {/* ===== 比較ポイント ===== */}
        <SectionHeading id="hikaku">総額で比較するときのチェックポイント</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          noshの料金を他サービスや他プランと比べるときは、<strong>1食単価という一点だけでなく、総額で見る</strong>ことが失敗しないコツです。次のポイントを公式サイトで確認しながら比較しましょう。
        </p>

        <ComparisonTable
          headers={["確認ポイント", "見るべき理由"]}
          rows={[
            ["プラン食数ごとの1食単価", "食数で単価が変わるため"],
            ["お住まいの地域の送料", "地域で送料が変動するため"],
            ["nosh clubの割引段階", "継続で単価が下がるため"],
            ["初回割引・クーポンの有無", "スタート時の総額に影響"],
            ["送料込みの実質総額", "本当の負担額を把握するため"],
          ]}
        />

        {/* ===== 抑える考え方 ===== */}
        <SectionHeading id="tips">料金を抑えるための考え方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          仕組みを踏まえると、noshの料金を抑えるための「考え方」が見えてきます。いずれも具体額ではなく方向性として参考にしてください。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li><strong>食べきれる範囲で食数を多めに</strong>：単価が下がりやすい（冷凍庫容量とのバランスは必須）</li>
          <li><strong>継続利用でnosh clubを進める</strong>：長く使うほど割引が効きやすい</li>
          <li><strong>初回割引・クーポンを活用</strong>：スタート時の総額を抑えやすい</li>
          <li><strong>送料の安い注文設計を考える</strong>：地域・食数で送料が変わる点を踏まえる</li>
          <li><strong>不要な週はスキップ</strong>：消費しきれない注文を避けて無駄を減らす</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          実際の味や量、続けやすさが気になる場合は、<Link href="/articles/nosh-reviews/" className="text-accent underline">noshの口コミ・評判</Link>もチェックしておくと、料金とのバランスで判断しやすくなります。
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
        <SectionHeading id="summary">まとめ：仕組みを押さえて「総額」で判断する</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            noshの料金は、<strong>「プランの食数」「nosh club（継続割引）」「送料」</strong>の3つの仕組みが組み合わさって決まります。1食単価は固定ではなく、<strong>食数を増やすほど・継続するほど下がりやすい</strong>のが基本的な考え方です。
          </p>
          <p className="mb-3">
            一方、送料は地域・食数で変動し本体価格とは別にかかるため、比較するときは<strong>「送料込みの総額」</strong>で見るのが失敗しないコツです。
          </p>
          <p>
            具体的な金額・割引率・送料は<strong>時期や地域で変動</strong>します。当サイトでは正確性を優先し、価格は断定しません。最新・正確な料金は、必ず公式サイトの表示でご確認ください。
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
          <p className="text-xs text-warm-gray mt-2">※最新の料金・送料・割引は公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-coupon/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshのクーポン情報
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-shokai-wari/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshの初回割引の使い方
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-cancel/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshの解約・停止の方法
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
