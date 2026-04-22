import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】コープデリとパルシステムの違いを徹底比較！料金・安全性・品揃え・配送エリアで選ぶならどっち？";
const ARTICLE_DESCRIPTION =
  "コープデリとパルシステムの違いを7項目で徹底比較。料金・配送手数料・品揃え・安全基準・離乳食・ミールキット・注文方法を表で分かりやすく解説。あなたに合った生協宅配が見つかります。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/coopdeli-vs-palsystem/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "コープデリ パルシステム 比較, コープデリ パルシステム 違い, 生協 宅配 比較, コープデリ 手数料, パルシステム 手数料, 生協 どっち",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-21T00:00:00+09:00",
    modifiedTime: "2026-04-21T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "コープデリとパルシステムは併用できる？",
    answer:
      "はい、併用可能です。どちらも生活協同組合ですが運営母体が異なるため、両方に加入して利用できます。ただし、それぞれに出資金（コープデリ500〜1,000円、パルシステム1,000円）が必要で、注文しない週にも基本手数料がかかる場合があるため、使い分けを明確にしておくのがおすすめです。",
  },
  {
    question: "コープデリとパルシステムの出資金は退会時に返金される？",
    answer:
      "はい、どちらも脱退（退会）手続きをすれば出資金は全額返金されます。コープデリは500〜1,000円程度、パルシステムは1,000円の出資金が必要ですが、増資分も含めて退会時に返還されます。返金までに1〜2ヶ月程度かかる場合があります。",
  },
  {
    question: "子育て世帯はどちらがお得？",
    answer:
      "どちらも子育て割引制度がありますが、内容が異なります。コープデリは赤ちゃん割引（母子手帳交付〜1歳未満）で基本手数料・配達手数料が無料、子育て割引（1歳〜小学校入学前）で一定金額以上の注文で手数料無料になります。パルシステムはベイビー特典（母子手帳交付〜1歳）で手数料無料、キッズ特典（1歳〜小学校入学前）で一定金額以上の注文で手数料無料です。地域によって条件が異なるため、公式サイトで確認してください。",
  },
  {
    question: "どちらが配送日時を選べる？",
    answer:
      "どちらも週1回の固定曜日・時間帯での配送が基本で、自分で配送日時を自由に指定することはできません。ルート配送のため、エリアごとに曜日が決まっています。不在時は玄関先に保冷箱で留め置きしてもらえるため、在宅していなくても受け取り可能です。",
  },
  {
    question: "コープデリとパルシステム、離乳食はどちらが充実している？",
    answer:
      "どちらも離乳食向け商品を充実させていますが、特徴が異なります。コープデリは「きらきらステップ」シリーズで月齢別の離乳食素材を豊富に取り揃えており、価格も手頃です。パルシステムは「yumyum」シリーズで産直素材を使った離乳食を展開し、原材料の安全性にこだわっています。品数の多さではコープデリ、安全性重視ならパルシステムがおすすめです。",
  },
];

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
          <span className="text-foreground">コープデリ vs パルシステム 比較</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "overview", label: "コープデリ・パルシステムとは？基本情報" },
    { id: "comparison", label: "7項目で徹底比較" },
    { id: "price", label: "料金・手数料を詳しく比較" },
    { id: "safety", label: "安全基準の違い" },
    { id: "baby", label: "離乳食・子育て向けサービスの比較" },
    { id: "mealkit", label: "ミールキット・時短商品の比較" },
    { id: "recommend", label: "タイプ別おすすめ" },
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

function FAQ({ question, answer }: { question: string; answer: string }) {
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

export default function CoopdeliVsPalsystemPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-21T00:00:00+09:00",
    dateModified: "2026-04-21T00:00:00+09:00",
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
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
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

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            比較記事
          </span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「コープデリとパルシステム、どっちにすればいいの？」——どちらも関東圏で人気の生協宅配サービスですが、料金・品揃え・安全基準など、実は大きな違いがあります。
          </p>
          <p className="mb-3">
            この記事では、<strong>コープデリとパルシステムの違いを7つの項目</strong>で徹底比較。配送エリア・手数料・商品数・安全基準・離乳食・ミールキット・注文方法まで、両サービスの公式情報をもとに解説します。
          </p>
          <p>
            さらに、子育て世帯・共働き世帯・品質重視派など<strong>タイプ別のおすすめ</strong>もお伝えしますので、自分に合った生協がきっと見つかります。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="overview">コープデリ・パルシステムとは？基本情報</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          コープデリとパルシステムは、どちらも生活協同組合（生協）が運営する食材宅配サービスです。週1回、決まった曜日に自宅まで届けてくれる仕組みは同じですが、運営母体が異なるため、商品の方向性や価格帯に違いがあります。
        </p>

        <SubHeading>基本スペック比較</SubHeading>
        <ComparisonTable
          headers={["項目", "コープデリ", "パルシステム"]}
          rows={[
            ["運営", "コープネット事業連合（コープみらい等）", "パルシステム生活協同組合連合会"],
            ["配送エリア", "東京・埼玉・千葉・茨城・栃木・群馬・長野・新潟（1都7県）", "東京・神奈川・千葉・埼玉・茨城・栃木・群馬・福島・山梨・長野・静岡・新潟（1都11県）"],
            ["商品数", "約6,000品目", "約1,000品目（厳選型）"],
            ["出資金", "500〜1,000円（地域による）", "1,000円"],
            ["配送頻度", "週1回（固定曜日）", "週1回（固定曜日）"],
            ["注文方法", "ネット・アプリ・注文書・電話", "ネット・アプリ・注文書"],
            ["支払い方法", "口座引落", "口座引落・クレジットカード"],
            ["不在時対応", "玄関先に保冷箱で留め置き", "玄関先に保冷箱で留め置き"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          コープデリは<strong>約6,000品目</strong>と圧倒的な品揃えが特徴。スーパーの代わりに日用品まで揃えたい方に向いています。一方、パルシステムは約1,000品目と品数を絞り、<strong>産直食材や無添加商品</strong>を中心に厳選した品質重視のラインナップです。
        </p>

        {/* ===== 7項目比較 ===== */}
        <SectionHeading id="comparison">7項目で徹底比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          コープデリとパルシステムを選ぶ上で重要な7つの項目を比較します。どちらが自分に合っているか、この表を見れば一目瞭然です。
        </p>

        <ComparisonTable
          headers={["比較項目", "コープデリ", "パルシステム", "おすすめ"]}
          rows={[
            ["価格の安さ", "スーパー並みの低価格", "やや割高だが品質相応", "コープデリ"],
            ["配送手数料", "198円（6,000円以上で無料）", "198〜270円（地域差あり）", "コープデリ"],
            ["品揃え・品数", "約6,000品目（日用品も充実）", "約1,000品目（厳選型）", "コープデリ"],
            ["安全基準", "国の基準に準拠", "国より厳しい独自基準", "パルシステム"],
            ["離乳食・ベビー", "きらきらステップ（品数豊富・安い）", "yumyum（産直素材・安全性重視）", "引き分け"],
            ["ミールキット", "種類豊富・10分調理", "こだわり食材・簡単調理", "コープデリ"],
            ["注文の手軽さ", "アプリ・ネット・注文書・電話", "アプリ・ネット・注文書", "コープデリ"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          総合的に見ると、<strong>価格と品揃え重視ならコープデリ、安全性と品質重視ならパルシステム</strong>という棲み分けです。どちらも生協ならではの安心感があり、不在時の留め置きや子育て割引など、共通するメリットも多くあります。
        </p>

        {/* ===== 料金・手数料 ===== */}
        <SectionHeading id="price">料金・手数料を詳しく比較</SectionHeading>

        <SubHeading>配送手数料の仕組み</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          生協宅配では「送料」ではなく「手数料」という名目で配送コストがかかります。注文しない週にも基本手数料がかかる場合がある点に注意が必要です。
        </p>

        <ComparisonTable
          headers={["条件", "コープデリ（東京）", "パルシステム（東京）"]}
          rows={[
            ["基本手数料（注文なし週）", "88円（税込）", "198〜248円（税込）"],
            ["注文あり（6,000円未満）", "198円（税込）", "198〜248円（税込）"],
            ["注文あり（6,000円以上）", "無料", "無料（地域により異なる）"],
            ["赤ちゃん割引", "手数料無料（1歳未満）", "手数料無料（1歳未満）"],
            ["子育て割引", "一定金額以上で無料（小学校入学前）", "一定金額以上で無料（小学校入学前）"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          注文しない週の手数料は、コープデリが88円に対しパルシステムは198〜248円と差があります。毎週必ず注文するなら大きな差ではありませんが、隔週利用やお休みが多い方にはコープデリのほうが経済的です。なお、コープデリは2026年6月に手数料体系の変更を予定しており、「基本手数料」と「配達手数料」が「コープデリ手数料」に一本化される見込みです。
        </p>

        <SubHeading>商品価格の違い</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          商品価格はコープデリのほうが全体的に安い傾向にあります。コープデリはスーパーに近い価格設定で、PB商品（CO-OPブランド）も充実。パルシステムは産直食材や有機野菜が中心のため、一般的なスーパーより1〜2割ほど高めの価格帯です。ただし、「安全性に対する投資」と考えれば、パルシステムのコストパフォーマンスは決して悪くありません。
        </p>

        <SubHeading>入会特典の比較（2026年時点）</SubHeading>
        <ComparisonTable
          headers={["特典", "コープデリ", "パルシステム"]}
          rows={[
            ["お買い物クーポン", "3,000円分", "3,000円分"],
            ["割引特典", "加入後5週間おすすめ商品50%OFF", "最大20週分の手数料無料"],
            ["お試しセット", "あり（時期により内容変動）", "あり（おためし宅配）"],
          ]}
        />

        {/* ===== 安全基準 ===== */}
        <SectionHeading id="safety">安全基準の違い</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          コープデリとパルシステムの最大の違いは<strong>安全基準へのこだわり</strong>です。パルシステムは国が定める基準よりさらに厳しい独自基準を設けており、食の安全性を最重視する方に選ばれています。
        </p>

        <ComparisonTable
          headers={["安全基準", "コープデリ", "パルシステム"]}
          rows={[
            ["農薬基準", "国の基準に準拠", "国の基準より厳しい独自基準"],
            ["添加物", "国の基準に準拠", "不要な添加物を極力排除"],
            ["放射能検査", "国の基準値に準拠", "国より厳しい自主基準で検査"],
            ["遺伝子組み換え", "表示義務に準拠", "できる限り不使用"],
            ["産地表示", "原産地表示あり", "産直が基本・生産者の顔が見える"],
            ["アレルギー対応", "7大アレルゲン表示", "7大アレルゲン表示＋独自の配慮"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          パルシステムは「コア・フード」（有機JAS認証・それに準ずる農産物）と「エコ・チャレンジ」（化学合成農薬・化学肥料を削減した農産物）という独自の産直基準を設けています。生産者との顔の見える関係を重視し、農薬や添加物をできるだけ使わない商品作りが特徴です。
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="font-bold text-sm mb-2">安全基準の選び方ポイント</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            コープデリも国の安全基準をクリアした商品のみを取り扱っており、安全性に問題があるわけではありません。「国の基準で十分」と考えるならコープデリで品揃え・価格の恩恵を受けるのがお得。「より厳しい基準で選びたい」「小さな子どもに安心なものを食べさせたい」という方はパルシステムがおすすめです。
          </p>
        </div>

        {/* ===== 離乳食 ===== */}
        <SectionHeading id="baby">離乳食・子育て向けサービスの比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          子育て世帯から特に注目されるのが離乳食向け商品です。コープデリ・パルシステムともに力を入れていますが、方向性が異なります。
        </p>

        <SubHeading>離乳食向け商品ラインナップ</SubHeading>
        <ComparisonTable
          headers={["項目", "コープデリ「きらきらステップ」", "パルシステム「yumyum」"]}
          rows={[
            ["対象月齢", "5ヶ月頃〜幼児食まで段階別", "5ヶ月頃〜幼児食まで段階別"],
            ["品数", "30品目以上（豊富）", "20品目程度（厳選型）"],
            ["価格帯", "100〜400円程度（手頃）", "200〜500円程度"],
            ["原材料の特徴", "国産素材中心", "産直素材100%・添加物不使用"],
            ["人気商品例", "国産野菜で作ったなめらかキューブ", "yumyum産直うらごしコーン"],
            ["離乳食レシピ", "アプリ・Webで公開", "カタログ・Webで公開"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          コープデリの「きらきらステップ」は品数が豊富で価格も手頃。月齢ごとに細かく対応しているため、離乳食初期から完了期まで幅広く使えます。パルシステムの「yumyum」は産直素材にこだわった安全性の高さが魅力で、「赤ちゃんに安心なものを」という方に支持されています。
        </p>

        <SubHeading>子育て特典の比較</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="font-bold text-sm mb-1">コープデリの子育て割引</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              赤ちゃん割引（母子手帳交付〜1歳未満）で基本手数料・配達手数料が無料。子育て割引（1歳〜小学校入学前）では、注文金額3,000円以上で配達手数料が無料になります（地域により異なる）。さらに、妊娠中から利用できるマタニティ割引を設けている地域もあります。
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="font-bold text-sm mb-1">パルシステムの子育て特典</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              ベイビー特典（母子手帳交付〜1歳）で手数料無料。キッズ特典（1歳〜小学校入学前）で5,000円以上の注文で手数料無料（地域により金額・条件が異なる）。加入時に3,000円分のクーポンがもらえるため、離乳食のお試しにも使えます。
            </p>
          </div>
        </div>

        {/* ===== ミールキット ===== */}
        <SectionHeading id="mealkit">ミールキット・時短商品の比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          共働き世帯に人気のミールキット。コープデリ・パルシステムともに充実していますが、種類やこだわりに違いがあります。
        </p>

        <ComparisonTable
          headers={["項目", "コープデリ", "パルシステム"]}
          rows={[
            ["ミールキット種類", "40種類以上/週", "10〜15種類/週"],
            ["調理時間", "約10分", "約10〜20分"],
            ["特徴", "カット済み野菜＋たれ付き", "こだわり食材・産直野菜使用"],
            ["価格帯（2〜3人前）", "750〜1,000円程度", "900〜1,300円程度"],
            ["冷凍ミールキット", "あり（ストック可能）", "あり（一部商品）"],
            ["消費期限", "配達日含め2日程度", "配達日含め2日程度"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          コープデリは毎週40種類以上のミールキットを展開しており、和洋中のバリエーションが豊富。10分で主菜1品が完成する手軽さが魅力です。パルシステムのミールキットは種類こそ少なめですが、産直食材を使用した品質の高さがポイント。「手軽さ優先」ならコープデリ、「食材の品質も重視」ならパルシステムがおすすめです。
        </p>

        {/* ===== タイプ別おすすめ ===== */}
        <SectionHeading id="recommend">タイプ別おすすめ</SectionHeading>

        <SubHeading>コープデリがおすすめな人</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            "食費を抑えたい・スーパーの代わりに使いたい方",
            "日用品もまとめて注文したい方",
            "ミールキットの種類が多いほうが嬉しい方",
            "離乳食は品数と手頃さを重視する方",
            "注文しない週も手数料を最小限にしたい方",
          ].map((text) => (
            <div key={text} className="flex items-start gap-2 text-sm">
              <span className="text-accent mt-0.5">●</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <SubHeading>パルシステムがおすすめな人</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            "食の安全性・無添加・有機食材にこだわりたい方",
            "小さな子どもに安全なものを食べさせたい方",
            "産直食材・生産者の顔が見える商品を選びたい方",
            "品数は少なくても厳選された商品から選びたい方",
            "神奈川・福島・山梨・静岡にお住まいの方（コープデリ非対応エリア）",
          ].map((text) => (
            <div key={text} className="flex items-start gap-2 text-sm">
              <span className="text-accent mt-0.5">●</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="bg-cream rounded-xl p-5 mb-6">
          <p className="font-bold text-sm mb-2">迷ったらお試しセットで比較がおすすめ</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            コープデリ・パルシステムともにお試しセットや加入特典を用意しています。どちらも出資金は退会時に返金されるため、実際に試してみてから決めるのが一番確実です。併用も可能なので、最初は両方使ってみて、自分に合うほうに絞るという方法もあります。
          </p>
        </div>

        {/* ===== 関連記事 ===== */}
        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/nosh-vs-mitsuboshi-vs-wellness/", label: "nosh・三ツ星ファーム・ウェルネスダイニング 3社比較" },
            { href: "/articles/hitorigurashi-osusume/", label: "一人暮らしにおすすめの宅食TOP5" },
            { href: "/articles/sango-osusume/", label: "産後におすすめの宅配弁当ランキング" },
            { href: "/articles/takuhai-vs-conveni/", label: "宅配弁当 vs コンビニ弁当 どっちがお得？" },
          ].map((link) => (
            <div key={link.href}>
              <Link href={link.href} className="text-accent hover:text-accent-dark text-sm transition-colors">
                → {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        {faqData.map((faq) => (
          <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
        ))}

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <div className="bg-cream rounded-xl p-5 mb-6">
          <p className="font-bold text-sm mb-3">コープデリ vs パルシステム まとめ</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>
              <strong>コープデリ</strong>は約6,000品目の豊富な品揃えとスーパー並みの低価格が魅力。ミールキットも毎週40種類以上と充実しており、「生協でまとめ買いして食費を節約したい」「日用品もまとめて注文したい」という方に最適です。
            </p>
            <p>
              <strong>パルシステム</strong>は国の基準より厳しい独自の安全基準と産直食材へのこだわりが特徴。品数は約1,000品目と厳選型ですが、「安心・安全な食材を家族に食べさせたい」「品質重視で選びたい」という方に支持されています。
            </p>
            <p>
              どちらも子育て世帯への手数料割引や離乳食商品が充実しており、出資金は退会時に返金されます。迷ったら両方のお試しセットを利用してみてから決めるのがおすすめです。
            </p>
          </div>
        </div>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍宅配弁当に興味がある方は、<Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark">nosh・三ツ星ファーム・ウェルネスダイニングの3社比較記事</Link>もあわせてご覧ください。忙しい日の食事は冷凍弁当、普段の買い物は生協宅配と使い分けるのも賢い方法です。
        </p>
      </article>
    </>
  );
}
