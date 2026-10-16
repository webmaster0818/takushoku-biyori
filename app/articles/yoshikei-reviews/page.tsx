import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ヨシケイの口コミ・評判｜弁当はまずい？冷凍弁当シンプルミールとミールキットの料金・新コースを公式で確認【2026年10月最新】";
const ARTICLE_DESCRIPTION =
  "ヨシケイの弁当はまずい？冷凍弁当シンプルミール・ミールキットの口コミを出典付きで整理します。量が少ない・薄味などの声と公式の対策、2025年9月の新コース（Smile & table）の料金、お試し5days、配達条件を公式で確認しています。【2026年10月更新】";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/yoshikei-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ヨシケイ 口コミ, ヨシケイ 評判, ヨシケイ 弁当 まずい, ヨシケイ 冷凍 弁当 口コミ, ヨシケイ シンプルミール, ヨシケイ カットミール, ヨシケイ 料金, ヨシケイ お試し",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-21T00:00:00+09:00",
    modifiedTime: "2026-10-16T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "ヨシケイの弁当はまずい？",
    answer:
      "公開レビューでは「まずい」とはっきり書く声は少なく、冷凍弁当シンプルミールには「ごく普通においしい」（美味しい♪ホームデリ専門サイト）、ミールキットには「ヨシケイのおかずは無難に美味しいです」（ryourigakirai.com）などの評価があります。不満で多いのは味より量で、シンプルミールを実食したプロの宅食さがし（meal-navi.com）は「ボリュームが少ないのが正直なところ」としています。味は献立による差があり、「全体的に薄味」という実食評価と、ソース付きメニューは「全体的に味が濃い」というオリコンの利用者コメントの両方があります。",
  },
  {
    question: "ヨシケイの冷凍弁当はどれ？いくら？",
    answer:
      "ヨシケイの冷凍弁当は「シンプルミール」（ワンプレートにおかず3品）と「ベジミール」（おかず4品・1食で1日の野菜目標量の約2/3）です。ヨシケイ東京の公式サイトではシンプルミール1回3食セット1,290円、ベジミール1回2食セット1,490円です（2026年10月16日確認）。ヨシケイの通販サイト「夕食ネット」のシンプルミールは3食セット1,290円〜1,350円（販売期間・セットにより異なる）で、初回注文は10セットまで半額です。電子レンジ約4分（500W）で温めます。",
  },
  {
    question: "ヨシケイはお試しできる？定期購入になる？",
    answer:
      "初めての方限定の「お試し5days」があり、1食（税込）はコースにより約280〜670円（通常価格の約30〜50%OFF）です（2026年10月16日・公式確認）。公式は「お支払いは注文したメニュー分だけ！定期縛りもなく」としており、お試し後に自動で定期購入にはなりません。申込・キャンセルの締切は配達日の前週の水曜17時までです。",
  },
  {
    question: "ヨシケイは毎日注文しないとダメ？締切は？",
    answer:
      "いいえ。公式FAQでは「１日単位でご注文頂けるメニューと１週間おまかせのメニュー」があるとされ、ヨシケイ東京は「週１日からでもご注文可能」です。注文の締切は地域の会社で異なり、ヨシケイ東京は基本的に前週の水曜17時です。夕食ネットのシンプルミールはお届け当日の朝5時が締切です。",
  },
  {
    question: "ヨシケイの配達料・支払い方法は？",
    answer:
      "公式FAQは「入会金や食材の配達料はいただいておりません」としています（夕食ネットは東京23区の一部で送料110円の場合あり）。支払い方法は地域の会社ごとに違い、たとえばヨシケイ東京は口座振替かヨシケイNICOSカードのみ（ほかのクレジットカードは不可）、ヨシケイ埼玉は現金払い不可です。申し込む地域の公式サイトで確認してください。",
  },
  {
    question: "プチママやLovyuは現在も注文できる？",
    answer:
      "2025年9月29日号でメニューが全面リニューアルされ、メニューブック名は「すまいるごはん」から「Smile & table」に変わりました。現在の公式メニュー紹介にプチママ・定番のコース名はなく、プチママとカットミールの離乳食とりわけレシピ・プチママのレシピ動画は2025年9月27日で終了しています（離乳食レシピは公式の検索サイトで提供）。Lovyuのバリエーションダイニングは2026年9月28日号で販売を終了し、現在はクイックダイニングのみです。",
  },
  {
    question: "ヨシケイとnoshはどう違う？",
    answer:
      "ヨシケイの主力はミールキット（食材とレシピが届き自分で調理）で、配達料は無料です。ヨシケイ東京の通常価格目安では2人用5日分 約6,830〜9,200円（1人前あたり約683〜920円）です。noshは調理済みの冷凍弁当で1食612〜719円、送料は1回1,023〜1,992円です（地域・食数による）。「少し料理したい・配達料をかけたくない」ならヨシケイ、「調理せず好きなメニューを選んでストックしたい」ならnoshが合います。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">ヨシケイの口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ヨシケイとは？基本情報まとめ" },
    { id: "courses", label: "現在のコースと料金（2025年9月リニューアル後）" },
    { id: "good-reviews", label: "良い口コミ・評判" },
    { id: "bad-reviews", label: "悪い口コミ・評判" },
    { id: "mazui", label: "ヨシケイの弁当は「まずい」？言われる理由と対策" },
    { id: "price", label: "料金・送料を解説" },
    { id: "merits", label: "メリット5つ" },
    { id: "demerits", label: "デメリット4つ" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (<li key={s.id}><a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a></li>))}
      </ol>
    </nav>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead><tr className="bg-accent/10">{headers.map((h) => (<th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>))}</tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>{row.map((cell, j) => (<td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>))}</tr>))}</tbody>
      </table>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-warm-border rounded-lg mb-3 group">
      <summary className="flex items-center justify-between p-4 font-medium text-sm hover:bg-cream/50 transition-colors"><span>{question}</span><span className="faq-arrow text-warm-gray ml-2">&#9660;</span></summary>
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

export default function YoshikeiReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: ARTICLE_TITLE, description: ARTICLE_DESCRIPTION, url: ARTICLE_URL,
    datePublished: "2026-04-21T00:00:00+09:00", dateModified: "2026-10-16T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: { "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"\u30e8\u30b7\u30b1\u30a4\u306e\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}]}" }}
      />
      

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time><time dateTime="2026-10-16">更新: 2026年10月16日（公式で再確認）</time><span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">「ヨシケイの弁当はまずい？」「冷凍弁当の口コミは？」「評判はどう？」——ヨシケイは1975年創業（2025年に50周年）の食材宅配で、公式によると全国64社・292営業所（2026年4月現在）で約50万世帯に届けています。主力はミールキット（食材＋レシピ）ですが、レンジで温めるだけの<strong>冷凍弁当「シンプルミール」「ベジミール」</strong>もあります。</p>
          <p className="mb-3">この記事では、<strong>オリコン・App Store・第三者メディアの実食レビューを出典付きで整理</strong>し、「まずい」と言われる理由と公式の対策をまとめました。当サイトは実食をしておらず、味の評価はすべて出典付きの第三者レビューです。</p>
          <p>あわせて、<strong>2025年9月のメニュー全面リニューアル（Smile &amp; table）後のコースと料金</strong>、お試し5days、配達・支払いの条件を2026年10月16日に公式サイトで確認しました。</p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ヨシケイが向いている方</p>
          <p className="text-sm leading-relaxed mb-4">ヨシケイは、<strong>「配達料をかけずに、献立と買い物の手間を減らしたい人」</strong>に向いたサービスです。口コミでは「献立を考えなくてよい」「食材の無駄が減った」という声が多く、味は「無難においしい」という評価が中心です。冷凍弁当のシンプルミールは1食430円前後と手頃な一方、<strong>「量が少ない」という声が最も多い不満</strong>です。料金・支払い方法・締切は地域の会社ごとに違います。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>献立・買い物の手間が減る</li><li>配達料・入会金が無料</li><li>冷凍弁当は1食430円前後と手頃</li><li>お試し5daysは約30〜50%OFF・定期縛りなし</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>量が少ないという声が多い</li><li>時間指定・再配達はできない地域が多い</li><li>ミールキットは自分で調理が必要</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・キャンペーンは地域・注文週により変わります。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ヨシケイ 公式サイトで最新の料金・お試しを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ヨシケイとは？基本情報まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ヨシケイは、1975年に静岡県で生まれた食材宅配で、ヨシケイ開発株式会社（1978年創業）を本部に、全国の地域の会社がフランチャイズで運営しています。<strong>スマイルスタッフが毎日、保冷BOXで届ける</strong>のが特徴で、公式FAQは「入会金や食材の配達料はいただいておりません」としています。メニューは管理栄養士20名を含む29名の栄養士が作成しています（公式）。</p>

        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営", "ヨシケイ開発株式会社（本部）＋全国64社のフランチャイズ・292営業所（2026年4月現在）"],
            ["創業", "1975年（ヨシケイグループ。2025年に50周年）"],
            ["サービス内容", "ミールキット（食材＋レシピ）・調理済みメニュー・冷凍弁当"],
            ["配送方法", "スマイルスタッフが配達（クールBOX・鍵付きのあんしんBOXの貸し出しあり）。配達は午前10時〜午後5時頃に順次"],
            ["時間指定・再配達", "基本的に不可（ヨシケイ東京は「時間指定・再配達は行っておりません」）"],
            ["配達料・入会金", "無料（夕食ネットは東京23区の一部で送料110円の場合あり）"],
            ["注文方法", "ネット・電話・FAXなど（ヨシケイ東京はスマホアプリ・OCR注文用紙も）"],
            ["支払い方法", "地域の会社ごとに異なる（例: ヨシケイ東京は口座振替かヨシケイNICOSカードのみ、ヨシケイ埼玉は現金不可）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://corporate.yoshikei-dvlp.co.jp/corporate/company/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヨシケイ開発 会社概要</a>・<a href="https://yoshikei-dvlp.co.jp/faq/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヨシケイ公式FAQ</a>・<a href="https://yoshikei-tokyo.co.jp/faq.php" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヨシケイ東京 よくある質問</a>・<a href="https://yoshikei-sai.jp/faq/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヨシケイ埼玉 FAQ</a>（2026年10月16日確認）</p>

        <SectionHeading id="courses">現在のコースと料金（2025年9月リニューアル後）</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">ヨシケイは<strong>2025年9月29日号でメニューを全面リニューアル</strong>し、メニューブック名を「すまいるごはん」から「Smile &amp; table（スマイルテーブル）」に変えました。以前の記事や口コミに出てくる「プチママ」「定番」は現在の公式メニュー紹介になく、Lovyuのバリエーションダイニングも2026年9月28日号で販売を終了しています。下の表は、ヨシケイ東京の公式サイトに載っている通常価格の目安です（地域・注文週で変わります）。</p>
        <ComparisonTable
          headers={["コース", "タイプ", "2人用5日分（通常価格目安）", "1人前あたり", "公式の説明"]}
          rows={[
            ["スマイリーミール", "ミールキット", "6,880円", "約688円", "メニューブックの基本コース"],
            ["スタンダードミール", "ミールキット", "約7,400円", "約740円", "バランスよくしっかり食べられる定番コース"],
            ["バランスミール", "ミールキット", "約6,850円", "約685円", "1食400kcal以下・1日の野菜目標量の約1/2"],
            ["カットミール", "ミールキット", "約7,460円", "約746円", "カット野菜で15分で2品"],
            ["ファンミール", "ミールキット", "約9,200円", "約920円", "名店・シェフ監修やコラボメニュー"],
            ["タイムリーミール", "調理済み（個食）", "約8,810円", "約881円", "電子レンジや湯せんでできる調理済みメニュー（1人用 約4,740円）"],
            ["クイックダイニング（Lovyu）", "ミールキット＋惣菜", "約6,830円", "約683円", "手作り1品＋レンジ・湯せんの惣菜1品"],
            ["シンプルミール", "冷凍弁当", "1回3食セット1,290円", "430円", "ワンプレートにおかず3品"],
            ["ベジミール", "冷凍弁当", "1回2食セット1,490円", "745円", "おかず4品・1食で1日の野菜目標量の約2/3"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://yoshikei-tokyo.co.jp/service.php" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヨシケイ東京 サービス概要</a>（2026年10月16日確認。1人前あたりは2人用5日分÷10食で当サイトが算出）、<a href="https://yoshikei-dvlp.co.jp/news/press/2025/929_2.php" target="_blank" rel="noopener noreferrer nofollow" className="underline">公式リリース（2025年9月リニューアル）</a>、<a href="https://yoshikei-dvlp.co.jp/news/info/2026/lovyu_1.php" target="_blank" rel="noopener noreferrer nofollow" className="underline">公式お知らせ（Lovyu販売終了）</a>、<a href="https://yoshikei-dvlp.co.jp/news/info/2025/post_350.php" target="_blank" rel="noopener noreferrer nofollow" className="underline">公式お知らせ（離乳食とりわけレシピ終了）</a>。公式本部のお試しページでは「お住まいの地域・ご注文週によって価格が異なる」とされています。</p>

        <SubHeading>冷凍弁当「シンプルミール」は2か所で買える</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">「ヨシケイの弁当」「ヨシケイの冷凍弁当」として口コミが多いのはシンプルミールです。買い方は2つあり、<strong>地域のヨシケイで他のメニューと一緒に頼む</strong>方法（ヨシケイ東京は月・水・金のお届けで1回3食セット1,290円）と、<strong>ヨシケイの通販サイト「夕食ネット」で頼む</strong>方法があります。夕食ネットのシンプルミールは販売期間ごとの3食セット（1,290円〜1,350円）から選ぶ方式で、1品ずつは選べません。初回注文は10セットまで半額、電子レンジ約4分（500W）で温めます。夕食ネットの対象は埼玉・千葉・東京・大阪・奈良・兵庫・徳島の7都府県です（2026年10月16日・公式確認）。夕食ネット側の口コミは<Link href="/articles/yushoku-net-kuchikomi/" className="text-accent underline">夕食ネット（ヨシケイ）の口コミ・評判</Link>にまとめています。</p>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.you-shoku.net/" target="_blank" rel="noopener noreferrer nofollow" className="underline">夕食ネット</a>・<a href="https://yoshikei-dvlp.co.jp/menu/one/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヨシケイ公式 冷凍弁当</a>（2026年10月16日確認）</p>

        <SectionHeading id="good-reviews">良い口コミ・評判</SectionHeading>
        <p className="text-sm mb-2 leading-relaxed">オリコン顧客満足度ランキングの利用者コメント、App Storeの公式アプリレビュー、第三者メディアの実食・SNS調査から、多い意見をテーマ別に整理しました。口コミ本文の創作や、当サイトが独自に聞き取った声ではありません。</p>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">参考にした媒体: <a href="https://life.oricon.co.jp/rank-food-delivery/meal-kit/kinki/company/yoshikei-dvlp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">オリコン顧客満足度ランキング ヨシケイ（ミールキット 近畿・調査2,381人・コメント18件）</a>／<a href="https://apps.apple.com/jp/app/id867325589" target="_blank" rel="noopener noreferrer nofollow" className="underline">App Store「ヨシケイ」公式アプリ（評価4.45・12,789件）</a>／<a href="https://exidea.co.jp/blog/meal/home-meal/yoshikei/" target="_blank" rel="noopener noreferrer nofollow" className="underline">HonNe（カットミール5日間の実食・2026年10月2日更新）</a>／<a href="https://moov.ooo/article/5fb0f0e1304fca656c6206ef" target="_blank" rel="noopener noreferrer nofollow" className="underline">Moovoo（X投稿501件の分析・2023年）</a>／<a href="https://moov.ooo/article/60e7a7c396675a483c8fc974" target="_blank" rel="noopener noreferrer nofollow" className="underline">Moovoo（5日間のお試しレビュー・2023年）</a>／<a href="https://meal-navi.com/yoshikei-simple-meal-review/" target="_blank" rel="noopener noreferrer nofollow" className="underline">プロの宅食さがし（シンプルミール5品の実食・2026年10月12日公開）</a>／<a href="https://home-deli.net/simple-meal/not-tasty.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">美味しい♪ホームデリ専門サイト（シンプルミールの実食）</a>／<a href="https://meal.app-liv.jp/archive/143125/" target="_blank" rel="noopener noreferrer nofollow" className="underline">アプリブ（カットミール5日間の実食）</a>／<a href="https://ryourigakirai.com/yoshikei-kuchikomi/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ryourigakirai.com（ミールキットの実食）</a>／<a href="https://www.okagekk.com/column/column-4296/" target="_blank" rel="noopener noreferrer nofollow" className="underline">okagekk.com（カットミール3日間の実食・X投稿の紹介）</a>。宅食・ミールキットの比較サイトにはアフィリエイト広告を掲載する媒体を含みます。みん評は当サイトから閲覧できず、引用していません。</p>
        {[
          { title: "献立を考えなくて済む", reviews: ["オリコンの利用者コメントに「献立を考えなくてよい。買い物に行かなくて良い。」「献立に悩まなくてよいので助かっています」という声があります。", "MoovooのX投稿の分析では「7割程度が「買い物の手間が省けた」「献立を考えなくてすむのは便利」」とされています。App Storeのレビューにも「献立を考えることが苦痛なので、それをやってくれて」という声があります。"] },
          { title: "味は「無難においしい」という評価が中心", reviews: ["ミールキットを実食したアプリブ（meal.app-liv.jp）は「味は濃すぎず薄すぎず、文句なしに美味しかった」、ryourigakirai.com は「ヨシケイのおかずは無難に美味しいです」と書いています。", "冷凍弁当のシンプルミールも、美味しい♪ホームデリ専門サイトの実食で「ごく普通においしい」、紹介されたX投稿には「味がしょっぱくないの助かった」という声があります。"] },
          { title: "余計な買い物が減る（配達料は無料）", reviews: ["App Storeのレビューに「余分な買い物してしまう事がなくなり、経済的」、Moovooの分析にも「買いすぎや食べ過ぎを防げる」という声があります。食材の配達料はかかりません（公式FAQ）。", "一方で、オリコンの利用者コメントやMoovooの分析には「割高」と感じる声もあります。"] },
          { title: "食材の無駄が出ない", reviews: ["オリコンの利用者コメントに「食材の無駄が減った。」「食材のロスがなくなった」という声があります。", "Moovooが紹介したX投稿にも「その日使う分だけ届くから食材が溜まらない、余らない」という声があります。"] },
          { title: "シンプルミールは「量は少なめでも価格は手頃」", reviews: ["プロの宅食さがし（meal-navi.com）は5品を実食して重さを量り、平均内容量165.6gで、比べた3社（食のそよ風 プチデリカ146.2g・ワタミの宅食ダイレクト138.8g）の中で一番多かったとしています。", "同じ記事は「シンプルミールは送料込みで430円とリーズナブル」とし、量の不満には100円以内のちょい足しを提案しています。"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">{cat.reviews.map((r) => (<div key={r} className="bg-green-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>))}</div>
          </div>
        ))}

        <SectionHeading id="bad-reviews">悪い口コミ・評判</SectionHeading>
        {[
          { title: "量が少ない・割高", reviews: ["オリコンの利用者コメントに「ボリュームが少ない。割高。」という声があります（逆に「同じメニューでも量少なめがあれば助かる。」と量を減らしたい声もあります）。", "シンプルミールを実食したプロの宅食さがしも「ボリュームが少ないのが正直なところ」としています。"] },
          { title: "調理の手間はゼロではない", reviews: ["カットミールを5日間実食したHonNeは「意外と包丁が必要」とし、紹介したX投稿にも「全部カットされてるわけじゃない衝撃」という声があります。", "App Storeのレビューにも「表示されている時間内に作れた事がなく」という声があります。"] },
          { title: "配送時間帯が選べない", reviews: ["HonNeは「時間指定や再配達ができません」とし、オートロックの建物で「受け取りに苦労しました」と書いています。App Storeのレビューにも「難点は夜配達がない事」という声があります。", "一方、5日間試したMoovooの筆者は、無料の鍵付きボックスで「留守でも夕食までにちゃんと受け取ることが可能」としています。"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">{cat.reviews.map((r) => (<div key={r} className="bg-red-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>))}</div>
          </div>
        ))}

        <SectionHeading id="mazui">ヨシケイの弁当は「まずい」？言われる理由と対策</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">「ヨシケイ 弁当 まずい」と検索されることがありますが、確認した公開レビュー（オリコン・App Store・実食した比較メディアなど）では、<strong>「まずい」とはっきり書く声はほとんどなく、強い否定でも「いまいち」「たまにハズレもある」程度</strong>でした。不満の中心は味より量です。評価が分かれるポイントは次の3つです。</p>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 量が少なく、物足りなさが「おいしくない」につながる</p>
            <p className="mb-1.5">いちばん多い不満です（上の「量が少ない・割高」参照）。<strong>対策:</strong> プロの宅食さがしは、ご飯と味噌汁に加えて「100円以内のちょい足し」で満足感を上げる方法を提案しています。公式の冷凍弁当では、ベジミールがおかず4品で「ごはん（150g）と合わせても約500kcal」とされています。</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 薄味と感じる人、濃いと感じる人がいる（献立による差）</p>
            <p className="mb-1.5">シンプルミールの実食では「全体的に薄味で、食材そのものの味を感じやすい仕上がりでした」と評価されています（プロの宅食さがし）。一方、ミールキットについてはオリコンの利用者コメントに「ソースが一緒に入っているメニューは全体的に味が濃い。」という声もあります。<strong>公式の案内:</strong> ヨシケイ東京の公式FAQは、カット野菜を「煮物など汁気のあるメニューにご使用の際は味が濃くなってしまう場合がございますので、一度水にさらしてからのご使用をおすすめします」としています。ミールキットは自分で仕上げるので、ソースや調味料の量で好みに寄せられます。</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">3. 献立による当たり外れ</p>
            <p className="mb-1.5">X投稿には「だいたい美味しいけど、たまにハズレもある」（okagekk.comで紹介）、シンプルミールでは「彩り野菜の生姜焼きはベチャとしていまいち！」（美味しい♪ホームデリ専門サイトで紹介）という声があります。<strong>対策:</strong> 公式FAQによると1日単位で注文できるメニューがあるので、好みのメニューの日だけ頼めます。お試し5days（1食約280〜670円・定期縛りなし）で複数コースを比べてから決める方法もあります。</p>
          </div>
        </div>
        <div className="bg-cream rounded-lg p-4 mb-4 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部のまとめ</p>
          <p>ヨシケイの「まずい」は、味そのものより<strong>量の少なさと献立による当たり外れ</strong>から来る声が中心です。味は「無難においしい」「ごく普通においしい」という評価が多く、冷凍弁当のシンプルミールは1食430円前後という価格を考えると、量を足す前提で使うのが現実的です。</p>
        </div>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://meal-navi.com/yoshikei-simple-meal-review/" target="_blank" rel="noopener noreferrer nofollow" className="underline">プロの宅食さがし（シンプルミール5品の実食・2026年10月12日公開）</a>・<a href="https://life.oricon.co.jp/rank-food-delivery/meal-kit/kinki/company/yoshikei-dvlp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">オリコン顧客満足度ランキング ヨシケイ（ミールキット 近畿・調査2,381人・コメント18件）</a>・<a href="https://home-deli.net/simple-meal/not-tasty.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">美味しい♪ホームデリ専門サイト（シンプルミールの実食）</a>・<a href="https://www.okagekk.com/column/column-4296/" target="_blank" rel="noopener noreferrer nofollow" className="underline">okagekk.com（カットミール3日間の実食・X投稿の紹介）</a>・<a href="https://yoshikei-tokyo.co.jp/faq.php" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヨシケイ東京 よくある質問</a>・<a href="https://yoshikei-dvlp.co.jp/menu/one/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ヨシケイ公式 冷凍弁当</a>（2026年10月16日確認）</p>

        <SectionHeading id="price">料金・送料を解説</SectionHeading>
        <SubHeading>ミールキットの1ヶ月コスト目安（2人分・週5日・ヨシケイ東京の通常価格目安）</SubHeading>
        <ComparisonTable
          headers={["コース", "1週間（2人用5日分）", "月額（4週間）"]}
          rows={[
            ["バランスミール", "約6,850円", "約27,400円"],
            ["スマイリーミール", "6,880円", "27,520円"],
            ["スタンダードミール", "約7,400円", "約29,600円"],
            ["カットミール", "約7,460円", "約29,840円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">ヨシケイ東京は3人用・4人用の価格も公開しています（例: スマイリーミール3人用8,610円・4人用11,000円）。配達料はかからないため、上記がそのまま食材の費用になります。初めての方はお試し5days（1食約280〜670円）で始められます。冷凍宅配弁当を含む18社の送料込み実質単価は、編集部が公式サイトを一次調査した<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>で比較できます。</p>

        <SectionHeading id="merits">メリット5つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "配達料・入会金が無料", text: "公式FAQは「入会金や食材の配達料はいただいておりません」としています。冷凍弁当のnoshは1回1,023〜1,992円の送料がかかる（地域・食数による）ので、毎週頼むほど差が出ます。" },
            { title: "献立を考える手間が減る", text: "メニューブックから選ぶだけです。メニューは管理栄養士20名を含む29名の栄養士が、栄養バランスや季節感、ボリュームを考えて作っています（公式）。" },
            { title: "食材の無駄が出にくい", text: "その日使う分だけ届くため、「食材のロスがなくなった」（オリコン利用者コメント）という声があります。" },
            { title: "お試しが割安で定期縛りなし", text: "お試し5daysは1食約280〜670円です（コースにより約30〜50%OFF）。公式は「定期縛りもなく」としています。夕食ネットのシンプルミールは初回10セットまで半額です。" },
            { title: "冷凍弁当が手頃", text: "シンプルミールは3食セット1,290円です（1食430円）。ベジミールは1食で1日の野菜目標量の約2/3がとれます。" },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="demerits">デメリット4つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "ミールキットは調理が必要", text: "カットミールでも約10〜15分の調理が必要です。完全に調理不要がよければ、調理済みのタイムリーミールや冷凍弁当、noshや三ツ星ファームのほうが向いています。" },
            { title: "量が少ないと感じる人が多い", text: "口コミで最も多い不満です。ご飯・汁物や一品を足す前提で考えておくと安心です。" },
            { title: "時間指定・再配達ができない", text: "配達は午前10時〜午後5時頃に順次で、ヨシケイ東京は「時間指定・再配達は行っておりません」としています。鍵付きのあんしんBOXの貸し出しがあります。" },
            { title: "料金・支払い方法・締切が地域で違う", text: "地域の会社ごとに価格や支払い方法（例: ヨシケイ東京は一般のクレジットカード不可）、注文締切が異なります。夕食ネットの冷凍弁当も対象は7都府県です。" },
          ].map((item) => (
            <div key={item.title} className="bg-red-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>
        <SubHeading>おすすめな人</SubHeading>
        <div className="space-y-2 mb-6">
          {["毎日の献立を考えるのが面倒な方", "配達料をかけたくない方", "食材の無駄をなくしたい方", "料理の時短はしたいが、全く料理しないのは嫌な方", "お試し5daysで割安に試してから決めたい方"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-accent mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>
        <SubHeading>おすすめしない人</SubHeading>
        <div className="space-y-2 mb-6">
          {["1食でしっかりお腹いっぱいになる量がほしい方", "配送時間帯を自由に選びたい方", "好きなクレジットカードで払いたい方（地域による）"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>

        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/yushoku-net-kuchikomi/", label: "夕食ネット(ヨシケイ)の口コミ・評判" },
            { href: "/articles/yoshikei-vs-watami/", label: "ヨシケイ vs ワタミの宅食 比較" },
            { href: "/articles/mealkit-vs-reitou-bento/", label: "ミールキットと冷凍弁当の違い" },
            { href: "/articles/reitou-bento-mazui/", label: "冷凍弁当はまずい？おいしく食べるコツ" },
            { href: "/articles/coopdeli-kuchikomi/", label: "コープ（生協）の宅配弁当の口コミ・評判" },
            { href: "/articles/nosh-reviews/", label: "nosh(ナッシュ)の口コミ・評判" },
            { href: "/articles/souryou-yasui-ranking/", label: "送料が安い宅配弁当ランキング" },
          ].map((link) => (
            <div key={link.href}><Link href={link.href} className="text-accent hover:text-accent-dark text-sm transition-colors">→ {link.label}</Link></div>
          ))}
        </div>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        {faqData.map((faq) => (<FAQ key={faq.question} question={faq.question} answer={faq.answer} />))}

        <SectionHeading id="summary">まとめ</SectionHeading>
        <div className="bg-cream rounded-xl p-5 mb-6">
          <p className="font-bold text-sm mb-3">ヨシケイ まとめ</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>ヨシケイは<strong>配達料・入会金無料</strong>でミールキットと冷凍弁当を届ける食材宅配です。口コミでは「献立を考えなくてよい」「食材の無駄が減った」という声が多く、味は「無難においしい」という評価が中心です。</p>
            <p>「まずい」という声は少なく、多い不満は量の少なさです。冷凍弁当のシンプルミールは1食430円前後と手頃なので、ご飯や一品を足す前提で使うと満足度が上がります。2025年9月にコースが変わっているため、プチママなど旧コース名の口コミは古い情報として読むのがおすすめです。</p>
            <p>まずはお試し5days（1食約280〜670円・定期縛りなし）か、夕食ネットのシンプルミール初回半額で、味と量を確かめてみてください。</p>
          </div>
        </div>

        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約しています。1食あたりの栄養基準を公式に明記している社はその基準値（「以下」「以上」・コース別の場合は範囲）、メニューごとの値だけを公開している社（nosh・FIT FOOD HOME）は公式メニュー一覧の主菜の中央50%（四分位）の範囲を記載しています。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link>をご参照ください。
          </p>
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
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">597-750</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.5</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">550-700</td></tr>
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
