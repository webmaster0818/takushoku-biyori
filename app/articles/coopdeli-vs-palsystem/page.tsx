import type { Metadata } from "next";
import Link from "next/link";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";

const ARTICLE_TITLE =
  "【2026年最新】コープデリとパルシステムの違いを比較｜料金・安全性・品揃え・配送エリアで選ぶならどっち？";
const ARTICLE_DESCRIPTION =
  "コープデリとパルシステムの違いを7項目で比較します。料金・配送手数料・品揃え・安全基準・離乳食・ミールキット・注文方法を表で分かりやすく解説します。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/coopdeli-vs-palsystem/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "コープデリ パルシステム 比較, コープデリ パルシステム 違い, 生協 宅配 比較, コープデリ 手数料, パルシステム 手数料, 生協 どっち",
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
          <Link href="/articles/#hikaku" className="text-foreground/70 hover:text-accent transition-colors">比較・料金データ</Link>
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
    { id: "comparison", label: "7項目で比較" },
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
    dateModified: "2026-10-21T00:00:00+09:00",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u6bd4\u8f03\u30fb\u6599\u91d1\u30c7\u30fc\u30bf\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"\u30b3\u30fc\u30d7\u30c7\u30ea vs \u30d1\u30eb\u30b7\u30b9\u30c6\u30e0 \u6bd4\u8f03\"}]}" }}
      />
      

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-coop.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-coop-m.webp)" }}>
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            比較・料金データ
          </span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>
        </div>{/* /subhead */}

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「コープデリとパルシステム、どっちにすればいいの？」——どちらも関東圏で人気の生協宅配サービスですが、料金・品揃え・安全基準など、実は大きな違いがあります。
          </p>
          <p className="mb-3">
            この記事では、<strong>コープデリとパルシステムの違いを7つの項目</strong>で比較します。配送エリア・手数料・商品数・安全基準・離乳食・ミールキット・注文方法まで、両サービスの公式情報をもとに解説します。
          </p>
          <p>
            さらに、子育て世帯・共働き世帯・品質重視派など<strong>タイプ別のおすすめ</strong>もお伝えしますので、生協選びの参考にしてください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="overview">コープデリ・パルシステムとは？基本情報</SectionHeading>
        <ServiceCaptureGrid ids={["coopdeli", "palsystem"]} />{/* svc-cap-202610 */}

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
        <SectionHeading id="comparison">7項目で比較</SectionHeading>

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
          商品価格はコープデリのほうが全体的に安い傾向にあります。コープデリはスーパーに近い価格設定で、PB商品（CO-OPブランド）も充実しています。パルシステムは産直食材や有機野菜が中心のため、一般的なスーパーより1〜2割ほど高めの価格帯です。ただし、「安全性に対する投資」と考えれば、パルシステムのコストパフォーマンスは決して悪くありません。
        </p>

        <SubHeading>入会特典の比較（2026年10月17日 公式サイトで確認）</SubHeading>
        <ComparisonTable
          headers={["特典", "コープデリ", "パルシステム"]}
          rows={[
            ["お買い物クーポン", "WEBからの新規加入で最大3,000円分（秋のご加入キャンペーンの最大5,000円分の表示もあり）", "合計3,000円分"],
            ["配送手数料の特典", "公式サイトでご確認ください", "秋の加入特典で最大5ヵ月の配送料（手数料）0円（12月1日10:00まで）"],
            ["お試しセット", "冷凍食品10品のおためしセット 1,980円・送料無料（1世帯1回）", "おためし宅配（3週間・手数料無料）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※加入特典・お試しセットの内容は時期により変わります。お申し込み前に各公式サイトで最新の内容をご確認ください。</p>

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
            コープデリも国の安全基準をクリアした商品のみを取り扱っており、安全性に問題があるわけではありません。「国の基準で十分」と考えるならコープデリで品揃え・価格の恩恵を受けるのがお得です。「より厳しい基準で選びたい」「小さな子どもに安心なものを食べさせたい」という方はパルシステムがおすすめです。
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
          コープデリの「きらきらステップ」は品数が豊富で価格も手頃です。月齢ごとに細かく対応しているため、離乳食初期から完了期まで幅広く使えます。パルシステムの「yumyum」は産直素材にこだわった安全性の高さが魅力で、「赤ちゃんに安心なものを」という方に支持されています。
        </p>

        <SubHeading>子育て特典の比較</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="font-bold text-sm mb-1">コープデリの子育て割引</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              赤ちゃん割引（母子手帳交付〜1歳未満）で基本手数料・配達手数料が無料です。子育て割引（1歳〜小学校入学前）では、注文金額3,000円以上で配達手数料が無料になります（地域により異なる）。さらに、妊娠中から利用できるマタニティ割引を設けている地域もあります。
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
          コープデリは毎週40種類以上のミールキットを展開しており、和洋中のバリエーションが豊富です。10分で主菜1品が完成する手軽さが魅力です。パルシステムのミールキットは種類こそ少なめですが、産直食材を使用した品質の高さがポイントです。「手軽さ優先」ならコープデリ、「食材の品質も重視」ならパルシステムがおすすめです。
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
            コープデリ・パルシステムともにお試しセットや加入特典を用意しています。どちらも出資金は退会時に返金されるため、利用してみてから決めると確実です。併用も可能なので、最初は両方使ってみて、自分に合うほうに絞るという方法もあります。
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
              <strong>コープデリ</strong>は約6,000品目の豊富な品揃えとスーパー並みの低価格が魅力です。ミールキットも毎週40種類以上と充実しており、「生協でまとめ買いして食費を節約したい」「日用品もまとめて注文したい」という方に最適です。
            </p>
            <p>
              <strong>パルシステム</strong>は国の基準より厳しい独自の安全基準と産直食材へのこだわりが特徴です。品数は約1,000品目と厳選型ですが、「安心・安全な食材を家族に食べさせたい」「品質重視で選びたい」という方に支持されています。
            </p>
            <p>
              どちらも子育て世帯への手数料割引や離乳食商品が充実しており、出資金は退会時に返金されます。迷ったら両方のお試しセットを利用してみてから決めるのがおすすめです。
            </p>
          </div>
        </div>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍宅配弁当に興味がある方は、<Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark">nosh・三ツ星ファーム・ウェルネスダイニングの3社比較記事</Link>もあわせてご覧ください。忙しい日の食事は冷凍弁当、普段の買い物は生協宅配と使い分けるのも賢い方法です。
        </p>
      
        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約しています。1食あたりの栄養基準を公式に明記している社はその基準値（「以下」「以上」・コース別の場合は範囲）、メニューごとの値だけを公開している社（nosh・FIT FOOD HOME）は公式メニュー一覧の主菜の中央50%（四分位）の範囲を記載しています。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link>をご参照ください。
          </p>
          <p className="text-xs text-warm-gray mb-3">※ヨシケイ・コープデリの行は2026年10月16日に公式サイトで再確認した値です（表の下の注記にある両社の栄養値の記述より新しい情報です）。ヨシケイの1食はヨシケイ東京の冷凍弁当（シンプルミール3食1,290円＝430円・ベジミール2食1,490円＝745円）と、2025年9月のコース刷新後のミールキット等（2人用5日分の通常価格目安6,830〜9,200円÷10食＝約683〜920円）の範囲です。kcalの基準はバランスミール（1食400kcal以下）のみ公表されており、糖質・タンパク質・塩分は1食あたりの公表がないため「−」としています。コープデリは夕食宅配（舞菜）6コースの税込価格（舞菜ミニ弁当464円〜舞菜御膳・エネルギー塩分調整食842円）で、2食以上の同時注文で1食24円（税抜）引きになるのは舞菜弁当・舞菜おかず・舞菜しっかりおかず・舞菜御膳の4コースのみです。kcal・塩分は公式の献立表サンプル（2026年3月の1週間）の範囲で、糖質・タンパク質は公表がないため「−」としています。</p>
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
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://magokoro-care-shoku.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">まごころケア食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300以下（たんぱく調整食は300以上）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以下（糖質制限食のみ）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10以下（たんぱく調整食のみ）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">394-426</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワタミの宅食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">250-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.5-4.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">470-790</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://shokutakubin.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">食宅便</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">245-310</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">9-24</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0未満（ケア系）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">690-740</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">Muscle Deli</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-750</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-75以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-50以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,109-1,557</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">400以下（バランスミールのみ）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">430-920</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">229-496</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.2-3.8</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">464-842</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.pal-system.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">パルシステム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">580-720</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ナッシュclub（割引）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">260-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">492〜（最高ランク）</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">つるかめキッチン</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-300</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">13</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">663-787</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://store.tavenal.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">FIT FOOD HOME</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">310-420</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">16-27</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">18-28</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.4-2.1</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,188-1,308</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://gofood.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">GOFOOD</a>（2025年6月30日にサービス終了）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">サービス終了</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※表の値は、以下の日付に各社の公式サイトで再確認したものです（再確認できなかった値は、後述のとおり2026年5月時点の公開データのままです）。1食価格のMuscle Deli・FIT FOOD HOME・つるかめキッチンは2026年10月14日に再確認しました（Muscle Deliは4プランの単品価格（税込）÷食数（LEAN 15食〜GAIN 5食）、FIT FOOD HOMEは1人前の単品価格（税込1,188円・角煮など一部1,308円。10個まとめ割は1,129円〜）、つるかめキッチンは定期コースの税込価格÷食数（送料無料・バランス栄養御膳21食663円〜たんぱく＆塩分制限7食787円））。栄養値は2026年10月14日に再確認しました（noshは公式基準「糖質30g・塩分2.5g以下」と公式メニュー一覧の主菜88品、まごころケア食は全6コースの基準（健康バランス300kcal以下・カロリー調整240kcal±10%ほか。たんぱく調整食のみ300kcal以上）、ワタミの宅食は各商品の基準（熱量250〜500kcal基準・糖質は手鞠20g/おかず30g/ダブル35g以下・食塩相当量1.5〜4.0g以下）、Muscle Deliは4プランの基準（LOW CARB〜GAIN）、つるかめキッチンは5コースの基準（糖質15g以下は糖質制限気づかい御膳）、FIT FOOD HOMEは公式ストアの主菜19品（複数人前のパックを除く））。2026年10月15日には、ウェルネスダイニングの糖質・たんぱく質（各コースの公式公表の平均値の範囲。基準があるのは糖質＆カロリー制限の糖質15g以下、たんぱく＆塩分調整のたんぱく質10g以下、脂質制限の糖質27g以下・たんぱく質9g以上。厳選栄養バランスは糖質の公表なし）と塩分（6コースの基準：2.0〜2.5g以下）、まごころケア食の塩分（6コースの基準。健康バランス・カロリー調整は2.5g以下、ほかは2.0g以下）を再確認しました。2026年10月16日に公式サイト（6コースの商品ページの栄養表示）で再確認したところ、まごころケア食は1食あたりの平均値を公表しておらず、コース別の基準のみを公表しています。糖質の基準があるのは糖質制限食（15g以下）、たんぱく質の基準があるのはたんぱく調整食（10g以下）のみで、ほかのコースは公表がないため、この2つのみをコース名付きで記載しています（以前の「30-40」「15-20」は公式で確認できない値のため削除しました）。食宅便の塩分の基準はケア系（塩分&カロリーケア・たんぱくケア）の2.0g未満のみで、おまかせコースには基準がありません（10月15日掲載の7品で1.5〜2.4g）。食宅便の糖質（公式の基準は低糖質セレクトの糖質10g以下のみ）、Muscle Deliの塩分、つるかめキッチンのたんぱく質、パルシステム・GOFOODの栄養値は公式で確認できず、5月時点の値のままです。2026年10月19日には、食宅便のkcal・たんぱく質を公式の定期便メニュー一覧（6コース・39品の栄養成分。kcalの基準を公表しているコースはなく、たんぱく質の基準はたんぱくケアの10.2g程度のみ）の最小〜最大に、ワタミの宅食のたんぱく質を各商品の公表値（まごころおかず15g基準・ワタミdeおいしい健康16.2g以上・まごころダブル20g以上。まごころ御膳・まごころ手鞠・まごころ小箱は公表なし）に更新しました。ワタミの宅食の1食価格は2026年10月13日に再確認しました（冷蔵7商品の5日間コースで宅配料込み470〜790円）。食宅便とまごころケア食の1食価格は2026年10月12日に再確認しました（食宅便は7食セット690〜740円、まごころケア食はお得便394〜426円、いずれも送料別）。三ツ星ファームの行は2026年10月9日に再確認し、kcal・糖質・タンパク質を三ツ星基準に、価格を通常の定期便の1食単価に更新しました。塩分は公式に基準の記載が見当たらないため「−」としています。nosh・ナッシュclub・ウェルネスダイニングの価格は2026年10月10日に再確認しました。noshは公式表記の1食単価、ウェルネスダイニングは全6コース・7〜21食の税込価格÷食数で算出し、kcal・塩分は各コースの公式基準に更新しています。2026年10月21日には、noshの1食価格（6食719円〜12食612円）、ナッシュclubの最安価格（税込492円）、公式メニュー一覧の主菜85品のkcal・タンパク質（中央50%：259〜396kcal・13.6〜19.3g）を再確認し、表の値と一致しています。最新情報は各公式サイトでご確認ください。</p>
        </section>

                {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>
      {/* coop-link-202609: クリックが出ている生協系の記事へ寄せる（GSC実測にもとづく内部リンクの配分見直し） */}
      <div className="my-8 rounded-lg border border-gray-200 bg-white p-5">
        <p className="mb-2 text-xs font-medium text-gray-500">生協の宅配弁当を個別に読む</p>
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="/articles/ouchi-coop-kuchikomi/" className="text-emerald-700 underline hover:opacity-80">
              おうちコープ「マイシィ」の口コミ・評判は？まずいって本当？
            </Link>
          </li>
          <li>
            <Link href="/articles/coopdeli-kuchikomi/" className="text-emerald-700 underline hover:opacity-80">
              コープデリ夕食宅配「舞菜」の口コミ・評判と料金
            </Link>
          </li>
          <li>
            <Link href="/articles/reitou-bento-mazui/" className="text-emerald-700 underline hover:opacity-80">
              冷凍宅配弁当は本当にまずい？主要15社を数値で比較
            </Link>
          </li>
        </ul>
      </div>


      </article>
    </>
  );
}
