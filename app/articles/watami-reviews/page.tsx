import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】ワタミの宅食の口コミ・評判を徹底調査！まごころ弁当の料金・メニュー・配送を解説";
const ARTICLE_DESCRIPTION =
  "ワタミの宅食の口コミ・評判を徹底調査。冷蔵（まごころおかず/手鞠/ダブル）と冷凍（ワタミの宅食ダイレクト）の違い、料金・送料・配送方法を詳しく解説。良い口コミ・悪い口コミの両方を紹介します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/watami-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ワタミの宅食 口コミ, ワタミ 宅食 評判, ワタミの宅食 まずい, ワタミの宅食 料金, ワタミの宅食ダイレクト, まごころおかず, まごころ手鞠",
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
    question: "ワタミの宅食とワタミの宅食ダイレクトの違いは？",
    answer:
      "「ワタミの宅食」は冷蔵のお弁当を毎日自社スタッフが届けるサービスです。「ワタミの宅食ダイレクト」は冷凍のおかずセットをヤマト運輸で届けるサービスです。冷蔵タイプは送料無料・毎日届く温かみがありますが、配送エリアが限定されます。冷凍タイプは全国配送可能でストックできますが、送料（800円〜）がかかります。",
  },
  {
    question: "ワタミの宅食は1人分だけでも注文できる？",
    answer:
      "はい、1人分から注文可能です。冷蔵タイプ（ワタミの宅食）は2日間〜1週間の日数で注文でき、1食分ずつ届きます。冷凍タイプ（ダイレクト）は7食セットから注文可能。一人暮らしの方や、家族のうち1人分だけ宅配にしたい場合でも問題なく利用できます。",
  },
  {
    question: "ワタミの宅食の配送エリアは全国対応？",
    answer:
      "冷蔵タイプ（ワタミの宅食）は全国の一部エリアが対象で、配送可能かどうかは公式サイトで郵便番号を入力して確認できます。離島や一部地域は対象外です。冷凍タイプ（ワタミの宅食ダイレクト）はヤマト運輸で全国配送可能です（一部離島を除く）。",
  },
  {
    question: "ワタミの宅食はまずい？味の評判は？",
    answer:
      "口コミを調査した結果、「まずい」という評価はほとんど見られず、「やさしい味付けで美味しい」「栄養バランスが良い」という声が多数です。ただし「味が薄い」と感じる方もおり、普段濃い味付けに慣れている方は最初は物足りなく感じることがあります。塩分を控えた健康的な味付けのため、1〜2週間で慣れてくる方がほとんどです。",
  },
  {
    question: "ワタミの宅食は解約金やペナルティはある？",
    answer:
      "ありません。冷蔵タイプは週単位で注文するため、注文しなければ自動的にお届けが止まります。冷凍タイプ（ダイレクト）の定期購入も、次回お届け予定日の6日前までに連絡すれば、いつでも解約可能で違約金はかかりません。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">口コミ・評判</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">ワタミの宅食の口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ワタミの宅食とは？基本情報まとめ" },
    { id: "types", label: "冷蔵（ワタミの宅食）と冷凍（ダイレクト）の違い" },
    { id: "good-reviews", label: "良い口コミ・評判" },
    { id: "bad-reviews", label: "悪い口コミ・評判" },
    { id: "price", label: "料金・送料を徹底解説" },
    { id: "merits", label: "メリット4つ" },
    { id: "demerits", label: "デメリット3つ" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}><a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a></li>
        ))}
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

export default function WatamiReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: ARTICLE_TITLE, description: ARTICLE_DESCRIPTION, url: ARTICLE_URL,
    datePublished: "2026-04-21T00:00:00+09:00", dateModified: "2026-04-21T00:00:00+09:00",
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

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">「ワタミの宅食って実際どうなの？」「ひどいって口コミは本当？」——病院・介護施設向け給食で培ったノウハウを活かし、一般家庭にも宅配弁当を届けるワタミの宅食。</p>
          <p className="mb-3">この記事では、<strong>ワタミの宅食の口コミ・評判を徹底リサーチ</strong>。冷蔵タイプ（まごころおかず・手鞠・ダブル）と冷凍タイプ（ワタミの宅食ダイレクト）の違いも詳しく解説します。</p>
          <p>料金プラン・送料・配送方法・メリット・デメリットまで、<strong>この記事を読めばワタミの宅食が自分に合うかどうか判断できます</strong>。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ワタミの宅食とは？基本情報まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ワタミの宅食は、ワタミ株式会社が運営する宅配弁当サービスです。外食チェーン「和民」で知られるワタミグループが、病院・介護施設向け給食事業で培ったノウハウを活かし、一般家庭向けに展開。<strong>宅配弁当の売上高は業界トップクラス</strong>で、累計7億食以上を届けた実績があります。</p>

        <SubHeading>基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "ワタミ株式会社"],
            ["サービス開始", "2008年"],
            ["タイプ", "冷蔵（毎日配送）＋冷凍（クール宅配便）"],
            ["配送", "冷蔵：自社スタッフが毎日お届け / 冷凍：ヤマト運輸"],
            ["送料", "冷蔵：無料 / 冷凍：本州・四国・九州800円"],
            ["メニュー数", "冷蔵：週替わり / 冷凍：100種類以上"],
            ["支払い方法", "クレジットカード・口座振替・現金（冷蔵のみ）"],
            ["特徴", "自社スタッフ配送・まごころスタッフによる安否確認"],
          ]}
        />

        <SectionHeading id="types">冷蔵（ワタミの宅食）と冷凍（ダイレクト）の違い</SectionHeading>
        <ComparisonTable
          headers={["比較項目", "ワタミの宅食（冷蔵）", "ワタミの宅食ダイレクト（冷凍）"]}
          rows={[
            ["お届け状態", "冷蔵（チルド）", "冷凍"],
            ["配送方法", "自社スタッフ（まごころスタッフ）", "ヤマト運輸クール宅急便"],
            ["配送頻度", "毎日（月〜金 or 月〜土）", "まとめて1回配送"],
            ["送料", "無料", "本州・四国・九州800円、北海道1,100円、沖縄2,200円"],
            ["ご飯の有無", "ご飯付きコースあり", "おかずのみ"],
            ["保存期間", "当日〜翌日", "冷凍で約10ヶ月"],
            ["配送エリア", "一部エリア限定", "全国（離島除く）"],
            ["安否確認", "あり（まごころスタッフが毎日訪問）", "なし"],
          ]}
        />

        <SubHeading>冷蔵タイプのコース一覧</SubHeading>
        <ComparisonTable
          headers={["コース名", "内容", "5日間コース料金", "1食あたり"]}
          rows={[
            ["まごころ手鞠", "主菜1品＋副菜3品（約250kcal）", "2,950円〜", "約590円"],
            ["まごころおかず", "主菜1品＋副菜4品（約400kcal）", "3,450円〜", "約690円"],
            ["まごころダブル", "主菜2品＋副菜3品（約500kcal）", "3,950円〜", "約790円"],
            ["まごころ御膳（ご飯付き）", "主菜1品＋副菜3品＋ご飯（約500kcal）", "3,080円〜", "約616円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">冷蔵タイプの最大の特徴は<strong>まごころスタッフによる毎日配送</strong>です。配送時に安否確認も行ってくれるため、一人暮らしの高齢者のご家族が「見守り」目的で利用するケースも多いです。地域によって料金が異なる場合があるため、正確な料金は公式サイトで郵便番号を入力して確認してください。</p>

        <SubHeading>冷凍タイプ（ダイレクト）のコース一覧</SubHeading>
        <ComparisonTable
          headers={["コース名", "内容", "7食セット料金", "1食あたり"]}
          rows={[
            ["いつでも二菜", "主菜1品＋副菜1品", "2,520円〜", "約360円"],
            ["いつでも三菜", "主菜1品＋副菜2品", "3,500円〜", "約500円"],
            ["いつでも五菜", "主菜1品＋副菜4品", "4,200円〜", "約600円"],
            ["ロカボリック", "糖質15g以下・たんぱく質20g以上", "4,486円〜", "約641円"],
          ]}
        />

        <SectionHeading id="good-reviews">良い口コミ・評判</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">口コミサイト・SNSからワタミの宅食の良い評判を集めました。</p>
        {[
          { title: "味が美味しい・やさしい味付け", reviews: ["「毎日届くのが楽しみ。味付けがちょうどよく、塩分控えめなのに美味しい」（60代女性）", "「コンビニ弁当と違って、家庭料理のようなやさしい味わいがある」（50代男性）", "「冷凍のダイレクトも試したが、100種類以上あるので飽きない」（40代女性）"] },
          { title: "送料無料・配送が便利（冷蔵タイプ）", reviews: ["「毎日届けてくれるのに送料無料なのが嬉しい」（70代男性）", "「留守でも保冷ボックスに入れておいてくれるので安心」（50代女性）", "「離れて暮らす母のために利用。まごころスタッフの安否確認が安心」（40代女性）"] },
          { title: "リーズナブルな価格", reviews: ["「まごころ手鞠が1食約590円で、コンビニより安くて栄養バランスも良い」（30代男性）", "「冷凍のいつでも二菜は1食約360円。送料を入れても十分安い」（20代女性）", "「外食するよりずっとお得で、しかも健康的」（50代男性）"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">
              {cat.reviews.map((r) => (
                <div key={r} className="bg-green-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>
              ))}
            </div>
          </div>
        ))}

        <SectionHeading id="bad-reviews">悪い口コミ・評判</SectionHeading>
        {[
          { title: "味が薄い・物足りない", reviews: ["「健康的なのはわかるけど、もう少し味が濃くてもいいのでは」（40代男性）", "「若い人には物足りなく感じるかも。高齢者向きの味付け」（30代男性）"] },
          { title: "量が少ない", reviews: ["「まごころ手鞠は小食の人向け。男性には物足りない」（30代男性）", "「おかずのみなのでご飯を別途用意する必要がある」（40代女性）"] },
          { title: "メニューが選べない（冷蔵タイプ）", reviews: ["「冷蔵タイプは日替わりで届くのでメニューを選べない。苦手な食材があると困る」（50代女性）", "「冷凍ダイレクトもお任せコースはメニューが選べない」（40代男性）"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">
              {cat.reviews.map((r) => (
                <div key={r} className="bg-red-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>
              ))}
            </div>
          </div>
        ))}

        <SectionHeading id="price">料金・送料を徹底解説</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ワタミの宅食の料金体系を詳しく見ていきます。冷蔵タイプと冷凍タイプで料金体系が異なります。</p>

        <SubHeading>冷凍タイプ（ダイレクト）の送料</SubHeading>
        <ComparisonTable
          headers={["配送エリア", "送料（税込）"]}
          rows={[
            ["本州・四国・九州", "800円"],
            ["北海道", "1,100円"],
            ["沖縄", "2,200円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">冷蔵タイプは自社配送のため<strong>送料完全無料</strong>です。冷凍タイプは1回の注文につき上記の送料がかかります。定期購入でも送料は変わりませんが、1回の注文食数を増やす（7食→10食→14食）ことで1食あたりの送料負担を下げることができます。</p>

        <SectionHeading id="merits">メリット4つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "冷蔵タイプは送料無料・毎日配送", text: "まごころスタッフが毎日自宅まで届けてくれ、送料は一切かかりません。毎日新鮮なお弁当を受け取れるのは冷蔵タイプならではのメリットです。" },
            { title: "安否確認サービス付き（冷蔵タイプ）", text: "一人暮らしの高齢者の「見守り」としても機能。配達時に挨拶・確認を行い、異変があれば緊急連絡先に通知してくれます。" },
            { title: "冷凍タイプは100種類以上のメニュー", text: "ワタミの宅食ダイレクトは和食・中華・洋食・麺類・丼の具まで100種類以上。冷凍庫にストックしておけば、好きなときに好きなメニューを食べられます。" },
            { title: "業界最安クラスの価格設定", text: "冷凍の「いつでも二菜」は1食約360円、冷蔵の「まごころ手鞠」は1食約590円と、業界内でも手頃な価格帯です。" },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="demerits">デメリット3つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "冷蔵タイプはメニューが選べない", text: "冷蔵タイプは日替わりメニューがそのまま届くため、自分で好きなメニューを選ぶことができません。苦手な食材がある方は事前に確認が必要です。" },
            { title: "冷蔵タイプの配送エリアが限定的", text: "全国対応ではなく、自社配送ができるエリアのみが対象です。対象外の地域にお住まいの場合は、冷凍タイプ（ダイレクト）を利用する必要があります。" },
            { title: "冷凍タイプは送料がかかる", text: "冷凍タイプは1回800円〜の送料がかかります。noshやまごころケア食（定期購入で送料無料）と比較すると、送料面ではやや不利です。" },
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
          {["毎日届く冷蔵弁当で新鮮さを重視したい方", "一人暮らしの高齢者（安否確認サービスが便利）", "送料無料で宅配弁当を利用したい方（冷蔵タイプ）", "低価格で栄養バランスの良い食事をしたい方", "冷凍庫にストックして好きな時に食べたい方（ダイレクト）"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-accent mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>
        <SubHeading>おすすめしない人</SubHeading>
        <div className="space-y-2 mb-6">
          {["自分でメニューを選びたい方", "味が濃いめの弁当が好みの方", "配送エリア対象外の方（冷蔵タイプの場合）"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>

        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/nosh-vs-mitsuboshi-vs-wellness/", label: "nosh・三ツ星ファーム・ウェルネスダイニング 3社比較" },
            { href: "/articles/koureisha-osusume/", label: "高齢者向け宅配弁当おすすめランキング" },
            { href: "/articles/souryou-yasui-ranking/", label: "送料が安い宅配弁当ランキング" },
            { href: "/articles/yoshikei-reviews/", label: "ヨシケイの口コミ・評判" },
          ].map((link) => (
            <div key={link.href}><Link href={link.href} className="text-accent hover:text-accent-dark text-sm transition-colors">→ {link.label}</Link></div>
          ))}
        </div>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        {faqData.map((faq) => (<FAQ key={faq.question} question={faq.question} answer={faq.answer} />))}

        <SectionHeading id="summary">まとめ</SectionHeading>
        <div className="bg-cream rounded-xl p-5 mb-6">
          <p className="font-bold text-sm mb-3">ワタミの宅食 まとめ</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>ワタミの宅食は<strong>冷蔵（毎日配送・送料無料）と冷凍（全国配送・ストック可能）</strong>の2つのタイプを持つ、業界最大手の宅配弁当サービスです。</p>
            <p>冷蔵タイプは送料無料・安否確認サービス付きで、特に高齢者やそのご家族から高い支持を得ています。冷凍タイプ（ダイレクト）は100種類以上のメニューと1食約360円〜の低価格が魅力です。</p>
            <p>「味が薄い」「メニューが選べない」という声もありますが、健康的な味付けと栄養バランスの良さは口コミで高評価。まずは気になるコースを1週間試してみることをおすすめします。</p>
          </div>
        </div>
      </article>
    </>
  );
}
