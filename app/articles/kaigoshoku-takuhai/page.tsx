import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "介護食の宅配7社を比較｜やわらか食・ムース食の段階と1食の料金・送料を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "介護食（やわらか食・ムース食）を宅配する7社を、やわらかさの段階・UDF区分の表示・送料込みの1食あたり・冷凍か常温かで比較しました。まごころケア食、ウェルネスダイニング、食宅便、ワタミ、ベネッセ、宅配クック123、ミールタイムの公式情報（2026年11月14日確認）にもとづきます。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/kaigoshoku-takuhai/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "介護食 宅配, 介護食 宅配 冷凍, やわらか食 宅配, ムース食 宅配, 嚥下食 宅配, 介護食 通販, ユニバーサルデザインフード",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-14T00:00:00+09:00",
    modifiedTime: "2026-11-14T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "介護食の宅配で、いちばん安いのはどこですか？", answer: "今回比較した7社では、まごころケア食のムース食（まごころお得便21食8,274円＋送料980円）が送料込み1食約441円で最も低い計算でした（2026年11月14日の公式価格で当サイトが計算）。初回限定のムース14食定期セット（2,660円）もあります。" },
  { question: "ムース食（舌でつぶせる）を宅配で頼めるのはどこですか？", answer: "ムース食を扱っているのは、まごころケア食・ウェルネスダイニング（ムースやわらか）・ワタミの宅食ダイレクト・ベネッセのおうちごはん・宅配クック123です。UDF区分の「舌でつぶせる」を公式に明記しているのは、ワタミの宅食ダイレクトのムース食とベネッセのムースのおかずでした。" },
  { question: "UDF区分とスマイルケア食は何が違いますか？", answer: "UDF（ユニバーサルデザインフード）は日本介護食品協議会の自主規格で、かたさ・粘度で4区分に分けています。スマイルケア食は農林水産省の枠組みで、栄養補給（青）・噛むことに配慮（黄）・飲み込むことに配慮（赤）の3つのマークがあります。" },
  { question: "冷凍ではなく、毎日届けてくれる介護食はありますか？", answer: "宅配クック123のやわらか食・ムースセット食は、常温で店舗スタッフが手渡しします。1食から注文でき、会費・配達料はかからずお弁当代（ごはん付き885円・おかずのみ777円）のみです。配達エリアは店舗ごとに異なります。" },
  { question: "嚥下障害がある家族に使っても大丈夫ですか？", answer: "各社とも医療用の食事として販売しているわけではありません。ベネッセは主治医や言語聴覚士・管理栄養士への相談を、宅配クック123は医師または管理栄養士の指導のもとでの利用を求めています。食形態は専門職の判断に合わせてお選びください。" },
  { question: "やわらかさを比べてから決める方法はありますか？", answer: "ウェルネスダイニングには、ほどよくやわらか4食とかなりやわらか3食を組み合わせた比較セット（税込6,458円）があります。ほかの社は、7食や4食など少ない単位で一度注文して確かめる方法になります。" },
];

const sections = [
  { id: "answer", label: "介護食の宅配7社の早見表" },
  { id: "kubun", label: "やわらかさの区分（UDF・スマイルケア食）" },
  { id: "price", label: "送料込みの1食あたり（当サイト計算）" },
  { id: "services", label: "7社の内容と注意点" },
  { id: "choose", label: "選ぶときの確認ポイント" },
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
          <span className="text-foreground">介護食の宅配7社比較</span>
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



export default function KaigoshokuTakuhaiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-14T00:00:00+09:00",
    dateModified: "2026-11-14T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "目的別ガイド・ランキング", item: "https://takushoku-biyori.com/articles/#mokuteki" },
      { "@type": "ListItem", position: 3, name: "介護食の宅配7社比較" },
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
            <time dateTime="2026-11-14">公開: 2026年11月14日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            かむ力や飲み込む力が弱くなった家族の食事を、毎回刻んだりミキサーにかけたりするのは大きな負担です。介護食（やわらか食・ムース食）を冷凍などで届けてくれる宅配サービスを使うと、その手間を減らせます。
          </p>
          <p className="mb-3">
            この記事では、介護食の区分がある宅配7社を、<strong>やわらかさの段階・公式に書かれた区分・送料込みの1食あたり・届き方</strong>でそろえて比較しました。数値はすべて2026年11月14日に各社の公式サイトで確認したもので、送料込みの1食あたりは当サイトが計算しています。
          </p>
          <p>当サイトでは実食・試用はしていません。食形態の判断は、医師・言語聴覚士・管理栄養士などの専門職にご相談ください。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">介護食の宅配の選び方（要点）</p>
          <p className="text-sm leading-relaxed mb-4">まず確認したいのは「どのやわらかさが必要か」です。歯ぐきでつぶせる程度なら選択肢が多く、舌でつぶせるムース食まで必要な場合は、まごころケア食・ウェルネスダイニング・ワタミの宅食ダイレクト・ベネッセのおうちごはん・宅配クック123が候補です。送料込みの1食あたりは、まごころケア食のムース食（定期21食で約441円）が7社の中で最も低く、段階を3つから選べるのはウェルネスダイニングだけでした。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 宅配の介護食で助かる点</p>
              <ul className="space-y-1 list-disc list-inside"><li>刻む・つぶす・とろみをつける手間が減る</li><li>冷凍なら電子レンジで温めるだけ（クック123は常温の手渡し）</li><li>塩分2.0g以下など、栄養の基準を公式に示す社が多い</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>各社の「やわらか」の基準はそろっていない</li><li>UDF区分を明記しているのは7社中2社のみ</li><li>送料の有無で1食あたりが大きく変わる</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">介護食の宅配7社の早見表</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">やわらかさの表現は各社の公式表記のまま載せています。「UDF区分」の欄は、公式がユニバーサルデザインフードの区分を明記している場合だけ記入しました。</p>
        <ComparisonTable
          headers={["サービス", "介護食の種類", "公式のやわらかさ表記", "UDF区分の表示", "届き方"]}
          rows={[
            ["まごころケア食", "ムース食", "「咀嚼・嚥下のしやすい舌触りとのどごし」", "記載なし", "冷凍・宅配便"],
            ["ウェルネスダイニング", "やわらか宅配食（3段階）", "レベル1 容易にかめる／2 歯ぐきでつぶせる／3 舌でつぶせる（自社の段階）", "記載なし（UDF認定とは書かれていない）", "冷凍・ヤマト運輸"],
            ["食宅便", "やわらかい食事", "「歯茎でつぶせる硬さを目安」", "記載なし", "冷凍・宅配便"],
            ["ワタミの宅食ダイレクト", "やわらかおかず／ムース食", "ムース食は「UDF『舌でつぶせる』に適合するかたさ」", "ムース食＝舌でつぶせる", "冷凍・宅配便"],
            ["ベネッセのおうちごはん", "冷凍やわらか食／ムースのおかず", "やわらか食は「はぐきでつぶせるやわらかさ」", "ムースのおかず＝舌でつぶせる", "冷凍・クール便"],
            ["宅配クック123", "やわらか食／ムースセット食", "「歯茎や舌でつぶせるやわらかさ」（やわらか食）", "記載なし（スマイルケア食と表記）", "常温・店舗スタッフが手渡し"],
            ["ミールタイム", "やわらか食", "「咀嚼・嚥下が困難な方におすすめ」", "記載なし", "冷凍・ヤマト運輸"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典は各社の公式サイト（2026年11月14日確認。URLは「7社の内容と注意点」に記載）。</p>
        <SectionHeading id="kubun">やわらかさの区分（UDF・スマイルケア食）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">介護食のやわらかさには、業界の自主規格「ユニバーサルデザインフード（UDF）」と、農林水産省の「スマイルケア食」という2つの目安があります。宅配各社の表記を読むときの物差しになります。</p>
        <SubHeading>ユニバーサルデザインフード（日本介護食品協議会）の4区分</SubHeading>
        <ComparisonTable
          headers={["区分", "かむ力の目安", "飲み込む力の目安", "食べ物の例"]}
          rows={[
            ["区分1 容易にかめる", "かたいものや大きいものはやや食べづらい", "普通に飲み込める", "ごはん〜やわらかごはん・厚焼き卵"],
            ["区分2 歯ぐきでつぶせる", "かたいものや大きいものは食べづらい", "ものによっては飲み込みづらいことがある", "やわらかごはん〜全がゆ・だし巻き卵"],
            ["区分3 舌でつぶせる", "細かくやわらかければ食べられる", "水やお茶が飲み込みづらいことがある", "全がゆ・スクランブルエッグ"],
            ["区分4 かまなくてよい", "固形物は小さくても食べづらい", "水やお茶が飲み込みづらい", "ペーストがゆ・やわらかい茶わん蒸し（具なし）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.udf.jp/outline/udf.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">日本介護食品協議会「ユニバーサルデザインフードとは」</a>（区分表・2026年11月14日確認）。同協議会は「かむことや飲み込むことに重要な障がいがある、または、それが疑われる場合は医療機関の専門家にご相談ください」としています。</p>
        <SubHeading>スマイルケア食（農林水産省）の3つのマーク</SubHeading>
        <ComparisonTable
          headers={["マーク", "対象"]}
          rows={[
            ["青マーク", "噛むこと・飲み込むことに問題はないものの、健康維持上栄養補給を必要とする方向け"],
            ["黄マーク", "噛むことに問題がある方向け（そしゃく配慮食品のJASマークが付いたものに限る）"],
            ["赤マーク", "飲み込むことに問題がある方向け（えん下困難者用食品の表示許可を得たものに限る）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.maff.go.jp/j/shokusan/seizo/kaigo.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">農林水産省「スマイルケア食（新しい介護食品）」</a>（2026年11月14日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">今回の7社で、商品にUDF区分を明記していたのは、ワタミの宅食ダイレクトのムース食とベネッセのムースのおかず（いずれも「舌でつぶせる」）でした。ウェルネスダイニングの「レベル1〜3」はUDFと同じ言葉を使っていますが、公式ページにUDF認定の記載はなく、自社の段階として扱っています。</p>
        <SectionHeading id="price">送料込みの1食あたり（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">宅配の介護食は、商品代が安くても送料で1食あたりが変わります。各社の公式の価格と送料から、同じ計算方法（（商品の税込価格＋送料）÷食数）で並べました。</p>
        <ComparisonTable
          headers={["サービス・商品", "注文の単位", "商品代（税込）", "送料", "送料込み1食"]}
          rows={[
            ["まごころケア食 ムース食（まごころお得便）", "21食", "8,274円", "980円", "約441円"],
            ["まごころケア食 ムース食（まごころお得便）", "7食", "2,982円", "980円", "約566円"],
            ["ベネッセ ムースのおかずFセット", "8食", "4,720円", "790円", "約689円"],
            ["ミールタイム やわらか食（おかず）", "7品", "4,683円（669円×7）", "950円（4,980円以上で無料）", "約805円"],
            ["ワタミの宅食ダイレクト ムース食ミックスセット", "7食", "4,901円", "990円", "約842円"],
            ["ワタミの宅食ダイレクト やわらかおかずミックスセット", "7食", "5,040円", "990円", "約861円"],
            ["食宅便 やわらかい食事（らくらく定期便）", "7食", "5,180円", "940円", "約874円"],
            ["食宅便 やわらかい食事（らくらく定期便・2セット）", "14食", "10,360円", "940円（1梱包2セットまで）", "約807円"],
            ["ウェルネスダイニング やわらか宅配食（定期）", "21食", "18,338円", "無料", "約873円"],
            ["ウェルネスダイニング やわらか宅配食（定期）", "7食", "6,771円", "440円", "約1030円"],
            ["ベネッセ 冷凍やわらか食（定期便）", "14食", "12,096円", "790円", "約920円"],
            ["ベネッセ 冷凍やわらか食（定期便）", "7食", "6,090円", "790円", "約983円"],
            ["宅配クック123 やわらか食・ムースセット食", "1食から", "ごはん付き885円／おかずのみ777円", "なし（お弁当代のみ）", "777〜885円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※まごころケア食・ミールタイムの送料は、公式に税込・税抜の記載がありません。ミールタイムの商品価格（インターネット価格）も税込・税抜の記載を確認できませんでした。北海道・沖縄・離島は送料が上がる社があります（各社の欄を参照）。ウェルネスダイニングの定期7食の送料は、公式FAQの「7食セットは通常送料半額の440円（税込）」によります（商品ページは「ずっと送料無料」と表記）。</p>
        <p className="text-sm mb-6 leading-relaxed">同じ「ムース食」でも、まごころケア食の定期21食（約441円）とワタミの宅食ダイレクト7食（約842円）では、1食あたり約401円の差があります。一方で、少量から試したい場合や、毎日の手渡しで安否確認も兼ねたい場合は、1食から頼める宅配クック123が使いやすい形です。</p>
        <SectionHeading id="services">7社の内容と注意点</SectionHeading>
        <SubHeading>まごころケア食（ムース食）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>内容: 主菜1品＋副菜3品・塩分相当量2.0g以下</li><li>料金（税込）: まごころお得便 7食2,982円・14食5,572円・21食8,274円（1食426〜394円）／都度 7食4,137円〜</li><li>初回限定: ムース14食定期セット 2,660円（1食190円）</li><li>送料: 980円（沖縄県・離島1,480円）。ムース食は42食ごとに1箱</li><li>定期の変更・キャンセル: 次回お届け日の6日前16時まで</li><li>出典: <a href="https://magokoro-care-shoku.com/products/detail/53" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 商品ページ</a>・<a href="https://magokoro-care-shoku.com/help/guide.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご利用ガイド</a>・<a href="https://magokoro-care-shoku.com/faq.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">FAQ</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">保存期間は商品ページが「冷凍で6ヶ月以上」、FAQが「冷凍保存で3か月以上」と公式内で表記が分かれています。サービス全体の口コミは<Link href="/articles/magokoro-care-reviews/" className="text-accent underline">まごころケア食の口コミ・評判</Link>をご覧ください。</p>
        <SubHeading>ウェルネスダイニング（やわらか宅配食）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>段階: ほどよくやわらか（お箸ですっと切れる）／かなりやわらか（歯ぐきでつぶせる・とろみでまとまりやすい）／ムースやわらか（歯ぐきや舌で楽につぶせる）</li><li>料金（税込・3段階とも同額）: 7食6,771円・14食12,592円・21食18,338円。ほどよく4食＋かなり3食の比較セット 6,458円</li><li>送料（税込）: 都度880円（北海道・沖縄1,870円）／定期は無料（7食のみ440円・北海道沖縄935円）／お試しは無料</li><li>出典: <a href="https://www.wellness-dining.com/yawaraka/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 やわらか宅配食</a>・<a href="https://www.wellness-dining.com/faq/yawaraka/" target="_blank" rel="noopener noreferrer" className="text-accent underline">FAQ</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">3段階から選べるのは7社の中でウェルネスダイニングだけです。比較セットで2段階を試してから決められます。サービス全体については<Link href="/articles/wellness-dining-reviews/" className="text-accent underline">ウェルネスダイニングの口コミ・評判</Link>で解説しています。</p>
        <SubHeading>食宅便（やわらかい食事）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>内容: 「見た目はそのままで歯茎でつぶせる硬さを目安に」やわらかく調整・全商品塩分2g以下</li><li>料金（税込）: 7食5,180円・5食3,700円（1食740円）。らくらく定期便と通常便は同額</li><li>送料（税込・1梱包）: らくらく定期便940円・通常便1,330円（1梱包2セットまで）</li><li>定期: スキップは配達日の5日前まで・解約は電話で次回お届け予定日の5日前まで</li><li>出典: <a href="https://shokutakubin.com/shop/c/c32/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 やわらかい食事</a>・<a href="https://shokutakubin.com/shop/pages/guide_03.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">配送ガイド</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">公式は「原料由来の骨等が残っている可能性がございます」と注意を書いています。詳しくは<Link href="/articles/shokutakubin-reviews/" className="text-accent underline">食宅便の口コミ・評判</Link>へ。</p>
        <SubHeading>ワタミの宅食ダイレクト（介護食）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>内容: やわらかおかず（見た目は普通食のまま・口の中でまとまりやすく）／ムース食（UDF「舌でつぶせる」に適合するかたさ）</li><li>料金（税込）: やわらかおかずミックスセット7食5,040円（1食720円）／ムース食ミックスセット7食4,901円（1食701円）。なめらかパン・なめらかゼリーがゆもあり</li><li>送料（税込）: 本州・四国・九州990円・北海道1,320円・沖縄2,420円</li><li>注文: 介護食は都度購入（定期の表記なし）</li><li>出典: <a href="https://www.watami-takushoku-direct.jp/shop/product_categories/nursing" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 介護食カテゴリ</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">ワタミの宅食ダイレクト全体の特徴は<Link href="/articles/watami-direct-kuchikomi/" className="text-accent underline">ワタミの宅食ダイレクトの口コミ</Link>にまとめています。</p>
        <SubHeading>ベネッセのおうちごはん（冷凍）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>冷凍やわらか食: 「はぐきでつぶせるやわらかさ」・325kcal以上・塩分2.2g以下・たんぱく質18g以上</li><li>ムースのおかず: UDF「舌でつぶせる」（マルハニチロのやさしいおかずセット）</li><li>料金: やわらか食 定期便 6食5,244円・7食6,090円・14食12,096円（セット便は6食5,520円〜）／ムースのおかず Aセット4食2,640円・Fセット8食4,720円</li><li>送料: クール便・1セット全国一律790円（伊豆諸島の一部・小笠原村は配送不可）</li><li>定期: 変更・スキップ・休止・解約は次回発送予定日の7日前まで・解約料なし</li><li>出典: <a href="https://shop.benesse-palette.co.jp/Form/Product/ProductList.aspx?cat=100102" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 商品一覧</a>・<a href="https://shop.benesse-palette.co.jp/Page/subscription.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期便の案内</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">公式は「飲込む力や噛む力が弱い方がお召し上がりになる場合、主治医または、言語聴覚士・管理栄養士などの専門家に ご相談の上ご利用下さい」と明記しています。料金は商品一覧に「円(税込)～」と表示されています。</p>
        <SubHeading>宅配クック123（やわらか食・ムースセット食）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>内容: やわらか食（凍結含浸法・歯茎や舌でつぶせるやわらかさ）／ムースセット食（噛む力・飲み込む力が弱っている方向け）</li><li>区分: 「特別用途食品（えん下困難者用食品）ではありません」「スマイルケア食（新しい介護食品）です」</li><li>料金（税込）: ごはん付き885円・おかずのみ777円。会費・配達料なし</li><li>届き方: 常温で店舗スタッフが手渡し。やわらか食・ムースセット食は温め不可</li><li>注文: 1食から・注文とキャンセルは前日17時まで（配達エリアは店舗検索で確認）</li><li>出典: <a href="https://takuhaicook123.jp/menu/yawaraka" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 やわらか食</a>・<a href="https://takuhaicook123.jp/menu/mousse" target="_blank" rel="noopener noreferrer" className="text-accent underline">ムースセット食</a>・<a href="https://takuhaicook123.jp/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">FAQ</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">冷凍庫の空きを気にせず、毎回手渡しで受け取れる点が他の6社と異なります。料金改定の経緯などは<Link href="/articles/takuhai-cook123-kuchikomi/" className="text-accent underline">宅配クック123の料金・配達料</Link>で解説しています。</p>
        <SubHeading>ミールタイム（やわらか食）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>内容: 「咀嚼・嚥下が困難な方におすすめ」・おかずは290〜350kcal未満・塩分2.0g未満</li><li>料金: おかず669円（インターネット価格・通常690円）・ごはん付き711円</li><li>送料: 冷凍商品は合計4,980円以上で無料・未満は950円（ヤマト運輸 クール宅急便）</li><li>出典: <a href="https://www.mealtime.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 メニュー紹介</a>・<a href="https://www.mealtime.jp/shop/freight" target="_blank" rel="noopener noreferrer" className="text-accent underline">送料</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">ミールタイムは電話注文で栄養士に相談できるサービスです。注文方法は<Link href="/articles/mealtime-kuchikomi/" className="text-accent underline">ミールタイムの評判・口コミと料金</Link>にまとめています。</p>
        <SectionHeading id="choose">選ぶときの確認ポイント</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>必要なやわらかさ: 専門職から指示された食形態（UDF区分・学会分類など）と、各社の表記が合っているか</li><li>UDF区分の明記: 区分の表示があるのはワタミのムース食とベネッセのムースのおかず。他社は自社の表現なので、試してから判断する</li><li>冷凍庫の空き: 冷凍の6社はまとめて届く。冷凍庫が小さい場合はクック123（常温・毎日手渡し）が選択肢</li><li>送料込みで比べる: 7食単位では送料の比率が大きい。続ける場合は14〜21食の定期で1食あたりが下がる社が多い</li><li>締切: まごころは6日前16時、食宅便は5日前、ベネッセは7日前。入院などで止めるときに間に合うか</li></ul>
        <p className="text-sm mb-6 leading-relaxed">高齢の家族向けに、制限食や普通食も含めて比べたい場合は<Link href="/articles/koureisha-osusume/" className="text-accent underline">高齢者向け宅配弁当の比較</Link>もあわせてご覧ください。冷凍庫の容量が気になる場合は<Link href="/articles/reitouko-chiisai-takuhai-bento/" className="text-accent underline">冷凍庫が小さい家庭向けの宅配弁当</Link>が参考になります。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">介護食の宅配は、必要なやわらかさで候補が決まり、続けやすさは送料込みの1食あたりと届き方で決まります。費用を抑えるならまごころケア食のムース食（定期21食で約441円）、段階を細かく選ぶならウェルネスダイニング、UDF区分の表示で選ぶならワタミの宅食ダイレクトかベネッセ、毎日の手渡しを重視するなら宅配クック123が候補です。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・送料・商品は変わることがあります。ご利用前に、各社の公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者向け宅配弁当の比較｜やわらか食・制限食も</Link></li>
            <li><Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark transition-colors">まごころケア食の口コミ・評判</Link></li>
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">ウェルネスダイニングの口コミ・評判</Link></li>
            <li><Link href="/articles/takuhai-cook123-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">宅配クック123の料金・配達料・安否確認</Link></li>
            <li><Link href="/articles/mutenka-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">無添加の宅配弁当・冷凍宅食を公式の表記で比較</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
