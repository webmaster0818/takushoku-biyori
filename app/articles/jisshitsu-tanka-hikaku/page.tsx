import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "冷凍弁当は「実質単価」で比較しないと損する｜送料込み1食コストの考え方【2026年版】";
const ARTICLE_DESCRIPTION =
  "冷凍弁当・宅配弁当は本体価格だけを見ると失敗します。送料・定期割を含めた『実質単価＝(本体+送料)÷食数』で比較する方法を解説。比較の物差しと確認すべきチェック項目を整理します。料金・キャンペーンは変動するため、最新は各公式サイトでご確認ください。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/jisshitsu-tanka-hikaku/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "冷凍弁当 実質単価, 宅配弁当 送料込み 比較, 冷凍弁当 1食あたり, 宅配弁当 安い 比較, 冷凍弁当 送料, 定期 割引, 宅配弁当 コスト 計算, 冷凍宅配弁当 比較",
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
    question: "実質単価とは何ですか？",
    answer:
      "本記事でいう「実質単価」とは、本体価格だけでなく送料も含めた1食あたりの実際のコストを指します。計算式は『実質単価＝(本体価格＋送料)÷食数』です。たとえば本体価格が同じでも、送料が高い・1回に届く食数が少ないサービスは1食あたりの負担が大きくなります。商品の表示価格(本体価格)だけで比べると、支払総額では割高になっていることがあるため、送料込みで比べるのがポイントです。",
  },
  {
    question: "なぜ本体価格だけで比較すると損するのですか？",
    answer:
      "冷凍弁当は冷凍便で届くため、本体価格とは別に送料がかかるのが一般的です。1食あたりの本体価格が安くても、送料が高かったり、まとめ買いで送料が薄まる設計だったりすると、少食数で頼んだときの実質単価は高くなります。逆に、本体価格はやや高めでも送料が抑えられている・定期割が効くケースもあります。表示価格の安さだけで判断せず、支払総額を食数で割って比べることが大切です。具体的な金額は変動するため、各公式サイトの最新表示でご確認ください。",
  },
  {
    question: "定期便にすると本当に安くなりますか？",
    answer:
      "多くのサービスで定期購入(定期便)向けの割引が用意されていることがありますが、割引率・適用条件・回数しばりの有無はサービスや時期によって異なります。定期割が大きくても、続けられる頻度・量でなければ食べきれずに無駄になることもあります。割引後の実質単価だけでなく、配送間隔の変更やスキップ・解約のしやすさも合わせて確認しましょう。最新の割引内容は各公式サイトでご確認ください。",
  },
  {
    question: "送料を安くするコツはありますか？",
    answer:
      "一般論として、1回あたりの注文食数を増やすと、1食あたりにかかる送料(送料を食数で割った金額)は下がりやすくなります。また、地域によって送料が変わる設計のサービスもあります。ただし、食べきれない量をまとめて買うと冷凍庫を圧迫したり、結局食べ残したりして本末転倒になることもあります。自分の消費ペースに合う食数で、実質単価が許容範囲に収まるかを確認するのがおすすめです。送料の具体額・無料条件は各公式サイトでご確認ください。",
  },
  {
    question: "結局どのサービスが一番お得ですか？",
    answer:
      "「一番お得」は、注文する食数・配送頻度・お住まいの地域・キャンペーンの有無によって変わるため、一律には決められません。本記事では具体的な金額やランキング順位を断定していません。本体価格・送料・定期割の3点を、自分が実際に頼む条件にあてはめて『実質単価』を計算し、味やボリュームも含めて比較するのが失敗しにくい方法です。最新の料金・送料・キャンペーンは、必ず各公式サイトでご確認ください。",
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
          <span className="text-foreground">冷凍弁当の実質単価で比較</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "結論：送料込みの「実質単価」で比べる" },
    { id: "naze", label: "本体価格だけで比べると損する理由" },
    { id: "keisan", label: "実質単価の計算式と使い方" },
    { id: "souryou", label: "送料の見方・1食あたりへの影響" },
    { id: "teiki", label: "定期割・まとめ買いの考え方" },
    { id: "check", label: "比較前に確認したいチェック項目" },
    { id: "rei", label: "計算例（金額は仮の数字での考え方）" },
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

export default function JisshitsuTankaHikakuPage() {
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
      { "@type": "ListItem", position: 3, name: "冷凍弁当の実質単価で比較" },
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
          <strong>本記事はプロモーションを含みます。</strong>当ページにはアフィリエイトリンクが含まれます。料金・送料・キャンペーン・割引内容は変動するため、<strong>最新・正確な情報は必ず各公式サイトでご確認ください</strong>。本記事では具体的な金額・割引額は断定せず、比較の考え方(計算枠組み)のみを解説します。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「この冷凍弁当、1食◯◯円って書いてあるから安い！」——その判断、<strong>送料を入れ忘れていませんか？</strong>
          </p>
          <p className="mb-3">
            冷凍弁当・宅配弁当は冷凍便で届くため、<strong>本体価格とは別に送料がかかる</strong>のが一般的です。表示されている本体価格だけで比べると、支払総額では割高になっていた、ということが起こります。
          </p>
          <p>
            この記事では、<strong>送料込みの「実質単価」で比べる考え方</strong>を、計算式とチェック項目つきで解説します。具体的な金額は時期・地域で変動するため断定せず、最新は各公式サイトでご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">結論：送料込みの「実質単価」で比べる</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍弁当を比較するときに見るべきなのは、商品ページに大きく書かれている本体価格ではなく、<strong>送料まで含めて1食あたりに換算した「実質単価」</strong>です。物差しをそろえないと、安いはずが高くついてしまいます。
        </p>

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の結論</p>
          <ul className="list-disc list-inside space-y-1">
            <li>比べるべきは本体価格ではなく<strong>実質単価＝(本体＋送料)÷食数</strong></li>
            <li>送料は<strong>1回の食数で割って</strong>1食あたりに換算する</li>
            <li><strong>定期割</strong>は割引後の実質単価＋続けやすさで判断</li>
            <li>具体的な金額・送料・割引は<strong>時期・地域で変動</strong>。公式で要確認</li>
          </ul>
        </div>

        {/* ===== なぜ損するか ===== */}
        <SectionHeading id="naze">本体価格だけで比べると損する理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍弁当の広告やランキングでは、しばしば「1食◯◯円〜」という<strong>本体価格(商品代金)</strong>が前面に出ます。これは比較しやすい一方で、実際に支払う金額のすべてではありません。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍弁当はクール便(冷凍便)で配送されるため、<strong>送料が別途かかることが多い</strong>のが実情です。さらに、1回に届く食数(注文単位)もサービスごとに異なります。本体価格が同じでも、送料が高い・1回に届く食数が少ないサービスは、<strong>1食あたりで見ると割高</strong>になりがちです。
        </p>

        <SubHeading>「安く見える」のに高くつくパターン</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>本体価格は安いが、送料が高めに設定されている</li>
          <li>少ない食数だと送料が薄まらず、1食あたりの送料負担が大きい</li>
          <li>「初回だけ安い」価格で、2回目以降は通常価格になる</li>
          <li>地域によって送料が変わり、自分の地域では割高になる</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          こうした見落としを防ぐ唯一の方法が、<strong>支払総額を食数で割って「実質単価」をそろえて比べる</strong>ことです。送料が安い冷凍弁当の選び方は<Link href="/articles/souryou-yasui-ranking/" className="text-accent underline">送料が安い冷凍弁当の比較記事</Link>でも整理しています。
        </p>

        {/* ===== 計算式 ===== */}
        <SectionHeading id="keisan">実質単価の計算式と使い方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          実質単価の考え方はとてもシンプルです。次の式に、自分が<strong>実際に注文する条件</strong>をあてはめて計算します。
        </p>

        <div className="bg-accent/10 rounded-lg p-4 mb-6 text-sm leading-relaxed text-center">
          <p className="font-bold text-base">実質単価 ＝（本体価格 ＋ 送料）÷ 食数</p>
        </div>

        <p className="text-sm mb-6 leading-relaxed">
          ポイントは、<strong>「自分が頼む食数」で計算する</strong>ことです。サービスが推す最大食数ではなく、現実に食べきれる食数で計算しないと、絵に描いた餅になります。
        </p>

        <SubHeading>使い方の手順</SubHeading>
        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>① 比べたいサービスを2〜3つに絞る</li>
          <li>② それぞれの<strong>本体価格・送料・食数</strong>を公式サイトで確認</li>
          <li>③ 上の式に入れて<strong>1食あたりの実質単価</strong>を出す</li>
          <li>④ 定期割が使えるなら、割引後でも計算してみる</li>
          <li>⑤ 味・量・ジャンルも踏まえて総合判断する</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">数字は必ず公式の最新表示で</p>
          <p>本体価格・送料・割引は時期や地域で変わります。当サイトでは正確性を優先し、具体的な金額は断定しません。計算に使う数字は、<strong>必ず各公式サイトの最新表示</strong>から取ってください。</p>
        </div>

        {/* ===== 送料 ===== */}
        <SectionHeading id="souryou">送料の見方・1食あたりへの影響</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          実質単価で差がつきやすいのが<strong>送料</strong>です。送料は「1回いくら」で表示されることが多いため、<strong>その回に届く食数で割る</strong>と、1食あたりの送料負担が見えてきます。
        </p>

        <div className="bg-accent/10 rounded-lg p-4 mb-6 text-sm leading-relaxed text-center">
          <p className="font-bold text-base">1食あたりの送料 ＝ 送料 ÷ 食数</p>
        </div>

        <p className="text-sm mb-6 leading-relaxed">
          同じ送料でも、<strong>多くの食数をまとめて頼むほど1食あたりの送料は下がります</strong>。逆に少食数だと、送料が1食ごとに重くのしかかります。送料の確認では、次の観点をチェックしましょう。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>送料は固定か、地域(エリア)で変わるか</li>
          <li>注文食数によって送料が変わるか</li>
          <li>一定条件で送料無料・割引になる仕組みがあるか</li>
          <li>定期便と都度購入で送料が違うか</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          送料の扱いはサービスごとに大きく異なります。送料が無料・抑えめのサービスを探したい場合は<Link href="/articles/souryou-muryou-reitou-bento/" className="text-accent underline">送料無料の冷凍弁当の解説</Link>も参考にしてください。送料の具体額・無料条件は変動するため、最新は各公式サイトでご確認ください。
        </p>

        {/* ===== 定期割 ===== */}
        <SectionHeading id="teiki">定期割・まとめ買いの考え方</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          多くのサービスで、<strong>定期購入(定期便)向けの割引</strong>や、まとめ買いによる単価メリットが用意されていることがあります。実質単価を下げるうえで効果が大きい一方、注意点もあります。
        </p>

        <SubHeading>定期割を見るときのポイント</SubHeading>
        <ComparisonTable
          headers={["確認したいこと", "なぜ大事か"]}
          rows={[
            ["割引率・適用条件", "条件次第で実質単価が大きく変わるため"],
            ["回数しばりの有無", "途中でやめにくいと続けるリスクがある"],
            ["スキップ・配送間隔変更", "食べきれない時に調整できると無駄が出にくい"],
            ["解約のしやすさ", "合わなかった時にやめやすいか"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          定期割が大きくても、<strong>続けられる頻度・量でなければ食べきれず無駄</strong>になります。冷凍庫の容量も意外な落とし穴です。割引後の実質単価だけでなく、<strong>スキップや解約のしやすさ</strong>まで含めて判断しましょう。配送のスキップについては<Link href="/articles/super-vs-takuhai-reitou-bento/" className="text-accent underline">スーパーの冷凍食品と宅配冷凍弁当の比較</Link>も合わせて読むと、自分の生活に合うかを判断しやすくなります。
        </p>

        {/* ===== チェック項目 ===== */}
        <SectionHeading id="check">比較前に確認したいチェック項目</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          実質単価を正しく出すために、各公式サイトで以下を確認しておくと失敗しにくくなります。
        </p>

        <ComparisonTable
          headers={["項目", "確認するポイント"]}
          rows={[
            ["本体価格", "1食あたり/1セットあたりのどちらの表示か"],
            ["送料", "固定か地域別か、無料条件があるか"],
            ["注文食数", "自分が食べきれる食数で計算しているか"],
            ["定期割", "割引率・しばり・解約条件"],
            ["初回価格", "2回目以降は通常価格に戻るか"],
            ["味・量・ジャンル", "安くても続けられる内容か"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          数字だけでなく、<strong>味やボリューム、メニューのジャンル</strong>も大切な判断材料です。いくら実質単価が安くても、口に合わなければ続きません。たとえば人気サービスの実食レビューは<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh（ナッシュ）の口コミ・評判</Link>で確認できます。価格と内容の両面で見比べましょう。
        </p>

        {/* ===== 計算例 ===== */}
        <SectionHeading id="rei">計算例（金額は仮の数字での考え方）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          考え方を掴むための<strong>仮の数字</strong>での例です。実在のサービスの料金ではなく、計算の流れを示すためのサンプルなので、実際の比較では必ず公式の最新金額を使ってください。
        </p>

        <ComparisonTable
          headers={["", "プランA(仮)", "プランB(仮)"]}
          rows={[
            ["本体価格(合計)", "安め", "やや高め"],
            ["送料", "高め", "抑えめ"],
            ["食数", "少なめ", "多め"],
            ["1食あたり送料", "高くなりがち", "薄まって低い"],
            ["実質単価", "意外と高い", "意外と安い"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          このように、<strong>本体価格が安いプランAが、送料と少食数のせいで実質単価では割高</strong>になることがあります。逆に本体価格が高めでも、送料が抑えめで食数が多いプランBの方が、1食あたりでは安く収まる場合もあります。<strong>表示価格の印象に流されず、必ず実質単価で並べて比べる</strong>のがコツです。
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
        <SectionHeading id="summary">まとめ：物差しは「実質単価」にそろえる</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            冷凍弁当・宅配弁当の比較で損をしないコツは、本体価格の安さに飛びつかず、<strong>送料を含めた実質単価＝(本体＋送料)÷食数</strong>で物差しをそろえることです。送料は1回の食数で割って1食あたりに換算し、定期割は割引後の単価と続けやすさの両方で判断しましょう。
          </p>
          <p className="mb-3">
            料金・送料・割引・キャンペーンは<strong>時期や地域で変動</strong>します。当サイトでは正確性を優先し、具体的な金額は断定しません。計算に使う数字は必ず各公式サイトの最新表示から取ってください。
          </p>
          <p>
            「自分が実際に頼む食数」で実質単価を出し、味・量も踏まえて比べれば、納得して選べます。最新・正確な情報は、必ず各公式サイトでご確認ください。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            送料が安い冷凍弁当の比較
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/souryou-muryou-reitou-bento/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            送料無料の冷凍弁当
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/super-vs-takuhai-reitou-bento/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            スーパー vs 宅配の冷凍弁当
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
