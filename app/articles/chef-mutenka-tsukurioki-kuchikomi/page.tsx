import type { Metadata } from "next";
import Link from "next/link";
import ServiceCapture from "@/components/ServiceCapture";

const ARTICLE_TITLE =
  "シェフの無添つくりおきの口コミ・評判は？まずいって本当？料金と注意点を検証";
const ARTICLE_DESCRIPTION =
  "シェフの無添つくりおき（AIVICK）の口コミ・評判を出典付きで検証します。「まずい」「味が薄い」という声は本当か、実食レビューメディアの評価を引用しながら中立に解説します。プラン内容・料金の目安・冷蔵ならではの注意点も整理しました。最新の料金は公式サイトでご確認ください。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/chef-mutenka-tsukurioki-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "シェフの無添つくりおき 口コミ, シェフの無添つくりおき 評判, シェフの無添つくりおき まずい, シェフの無添つくりおき 料金, 無添加 つくりおき 宅配, 宅配惣菜 口コミ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-07-04T00:00:00+09:00",
    modifiedTime: "2026-11-28T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "シェフの無添つくりおきは冷凍？冷蔵？日持ちはどれくらい？",
    answer:
      "シェフの無添つくりおきは冷凍弁当ではなく、調理済みのおかずが「冷蔵」で届くサービスです。保存料を使わない無添加調理のため、消費期限はお届け日を含めて4日間（一部地域は3日間）です（公式）。余った分は一部のメニューを除き家庭で冷凍保存できると公式に案内されていますが、基本は届いた週に食べるおかずとして使うサービスです。",
  },
  {
    question: "シェフの無添つくりおきの「無添加」はどこまで無添加？",
    answer:
      "公式サイトでは、化学調味料や保存料などを使わない「無添加調理」を掲げています。ただし食品添加物をまったく使わないわけではなく、公式FAQでは「豆腐を作るために必要なにがり」のような食品添加物以外は使用しない基準とし、現在使用している添加物は塩化マグネシウム（にがり）・水酸化カルシウムと案内されています。各メニューの原材料・アレルギー・添加物は、注文内容の確認ページやマイページで確認できます（公式FAQ）。",
  },
  {
    question: "メニューは自分で選べる？",
    answer:
      "メニューは管理栄養士監修の週替わり献立で、基本的に自分で選ぶことはできません。「献立を考えなくていい」のがメリットである一方、苦手な食材が届く可能性はあります。noshのように毎回メニューを選びたい方には不向きです。なお公式FAQでは、アレルギー対応や特定の食材の除去・代替は受け付けていないとされています。",
  },
  {
    question: "一人暮らしでも使える？",
    answer:
      "利用自体は可能です。プランは「大人2名＋子ども」の世帯を想定した量ですが、公式FAQでは、1人で2〜3日に分けて食べている利用者もおり、食卓サポートプランは単身者の利用も多いと案内されています。一方でスマートフードナビの実食レビューでは1人1食換算では割高になるという指摘があり、1食あたりの価格を重視する場合は冷凍弁当（nosh・まごころケア食・ライフミールなど）のほうが向いています。",
  },
  {
    question: "解約・スキップはできる？",
    answer:
      "定期便は契約回数の制限がなく、2回目以降はいつでも休止（解約）でき、違約金はかかりません（公式FAQ）。ただし初回のお届け分はキャンセル・スキップできません。スキップ・休止の手続きは次回お届け日の6日前まで（九州地方・島根県・青森県は7日前まで）で、マイページから行います。最新の手続き方法は公式サイトでご確認ください。",
  },
];

/* ---------- Helper Components ---------- */

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">シェフの無添つくりおきの口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "シェフの無添つくりおきとは？基本情報まとめ" },
    { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "「まずい」って本当？味の評判を検証" },
    { id: "price", label: "料金・送料の目安" },
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

function SourcedReview({
  text,
  sourceLabel,
  sourceUrl,
  negative,
}: {
  text: string;
  sourceLabel: string;
  sourceUrl: string;
  negative?: boolean;
}) {
  return (
    <div className={`${negative ? "bg-red-50" : "bg-green-50"} rounded-lg p-3 text-sm leading-relaxed`}>
      <p className="mb-1">{text}</p>
      <p className="text-xs text-warm-gray">
        出典: <a href={sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">{sourceLabel}</a>
      </p>
    </div>
  );
}

/* ---------- Page Component ---------- */

export default function ChefMutenkaTsukuriokiKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: ARTICLE_TITLE, description: ARTICLE_DESCRIPTION, url: ARTICLE_URL,
    datePublished: "2026-07-04T00:00:00+09:00", dateModified: "2026-11-28T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: { "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      { "@type": "ListItem", position: 3, name: "シェフの無添つくりおきの口コミ・評判" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-tsukurioki.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-tsukurioki-m.webp)" }}>
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-07-04">公開: 2026年7月4日</time>
            <time dateTime="2026-11-28">更新: 2026年11月28日（料金・送料・FAQを公式で再確認）</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>
        </div>{/* /subhead */}

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">「シェフの無添つくりおきって美味しいの？」「無添加＝味が薄くてまずいのでは？」——「シェフの無添つくりおき」は、冷蔵で届く手作りおかずの宅配サービスです。化学調味料などを使わない<strong>無添加調理</strong>を掲げ、家族の夕食を想定した2つのプランを用意しています。</p>
          <p className="mb-3">この記事では、<strong>第三者メディアの実食レビューを出典付きで引用</strong>しながら、良い評判・悪い評判の両方を中立に検証します。「まずい」という検索候補が出る理由にも正面から答えます。</p>
          <p>プラン内容・料金の目安・冷蔵ならではの注意点まで整理したので、自分の家庭に合うかどうかをこの記事で判断できます。</p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">シェフの無添つくりおきが向いている方</p>
          <p className="text-sm leading-relaxed mb-4">シェフの無添つくりおきは、<strong>「子どもに安心して食べさせられる夕食を、調理なしで用意したい共働き・子育て世帯」</strong>に向いた冷蔵おかず宅配です。HAPPINESS! magazineの実食レビューでは「無添加とは思えないほどちょうど良い味付け」という評価がある一方、優しい味付けゆえに「物足りない」と感じる声や、1人1食換算では割高という指摘もあります。冷蔵のため消費期限が短い点も要注意です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p><ul className="space-y-1 list-disc list-inside"><li>無添加調理でも、引用した実食レビュー2媒体（HAPPINESS! magazine・スマートフードナビ）はいずれも味を評価</li><li>温めるだけで家族の夕食が完成する時短効果</li><li>管理栄養士監修の週替わり献立で栄養バランスが整う</li></ul></div>
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-warm-gray mb-2">△ 注意したい点</p><ul className="space-y-1 list-disc list-inside"><li>薄味が物足りないと感じる人もいる</li><li>1人1食換算では冷凍弁当より割高</li><li>冷蔵配送のため消費期限が短い（お届け日を含めて4日間）</li></ul></div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・プラン・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://store.tavenal.com/tsukurioki/" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">シェフの無添つくりおき 公式サイトで最新の料金・初回特典を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">シェフの無添つくりおきとは？基本情報まとめ</SectionHeading>
        <ServiceCapture id="chef-mutenka" />{/* svc-cap-202610 */}
        <p className="text-sm mb-6 leading-relaxed">
          シェフの無添つくりおきは、<strong>株式会社AIVICK</strong>（宅配食「FIT FOOD HOME」の運営元）が手がける、<strong>冷蔵で届く手作りおかずの定期宅配サービス</strong>です。冷凍弁当ではなく「つくりおきおかず」が週単位で届くスタイルで、化学調味料や保存料などを使わない<strong>無添加調理</strong>が最大の特徴。献立は管理栄養士監修の週替わりで、温めるだけで家族分の夕食が完成します。
        </p>

        <SubHeading>基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社AIVICK（FIT FOOD HOME運営元）"],
            ["商品形態", "調理済みのつくりおきおかず（冷蔵配送）"],
            ["調理", "電子レンジ等で温めるだけ"],
            ["味付け", "化学調味料・保存料などを使わない無添加調理"],
            ["献立", "管理栄養士監修・週替わり（メニュー選択は不可）"],
            ["消費期限", "お届け日を含めて4日間（一部地域は3日間・冷蔵・公式）"],
            ["プラン", "食卓サポートプラン / 食卓おまかせプランの2種"],
            ["定期縛り", "契約回数の制限なし・2回目以降はスキップ・休止可（お届け日の6日前まで）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※2026年11月28日に公式サイト（トップ・よくある質問）で確認しました。配送エリア・お届け曜日は公式サイトでご確認ください。</p>

        <SubHeading>2つのプランの違い</SubHeading>
        <ComparisonTable
          headers={["プラン", "内容", "想定量の目安"]}
          rows={[
            ["食卓サポートプラン", "主菜2品＋副菜3品（計5品）", "大人2人＋幼児1人の約2日分"],
            ["食卓おまかせプラン", "主菜3種×2パック＋副菜6品（計9品）", "大人2人＋小中学生2人の約3日分"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          どちらも「1食のお弁当」ではなく<strong>数日分の食卓のおかずをまとめて届ける</strong>設計です。1人暮らし向けの少量プランはなく、ファミリー向けの設計です（公式FAQでは、食卓サポートプランを単身で2〜3日に分けて利用している例も紹介されています）。
        </p>

        <SectionHeading id="good-reviews">シェフの無添つくりおきの良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">第三者メディアの実食レビューから、味・時短効果に関する評価を出典付きで紹介します（引用は各記事の原文より）。</p>

        <SubHeading>味への評価：「無添加とは思えないほどちょうど良い味付け」</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            text="「無添加とは思えないほどちょうど良い味付けです。一口目は薄く感じても、噛むほどに素材の旨みがじんわり広がり、食べ終わる頃には満足できる美味しさでした」（実食レビュー）"
            sourceLabel="HAPPINESS! magazine（ティップネス運営）実食レビュー"
            sourceUrl="https://online.tipness.co.jp/feature/home_meal/tsukurioki_home-asp/"
          />
          <SourcedReview
            text="「全体的に薄味ですが、バランスの良い味付けで美味しかったです」（実食レビュー）"
            sourceLabel="スマートフードナビ 実食レビュー"
            sourceUrl="https://smart-food-navi.jp/food-delivery/chef-muten-testing-review/"
          />
          <SourcedReview
            text="「無添加＝味が薄いと思ってたけど、想像以上に美味しい」「子どもも喜んで食べてくれる」（同記事で紹介されている利用者の声）"
            sourceLabel="HAPPINESS! magazine掲載の口コミ紹介"
            sourceUrl="https://online.tipness.co.jp/feature/home_meal/tsukurioki_home-asp/"
          />
        </div>

        <SubHeading>時短・量への評価</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            text="「温めるだけで夕飯が完成して助かる」「家族との時間が増えた」（同記事で紹介されている利用者の声）"
            sourceLabel="HAPPINESS! magazine掲載の口コミ紹介"
            sourceUrl="https://online.tipness.co.jp/feature/home_meal/tsukurioki_home-asp/"
          />
          <SourcedReview
            text="「全体のボリュームでは多いので、ファミリー層にピッタリだと思います」（実食レビュー）"
            sourceLabel="スマートフードナビ 実食レビュー"
            sourceUrl="https://smart-food-navi.jp/food-delivery/chef-muten-testing-review/"
          />
        </div>

        <SectionHeading id="bad-reviews">シェフの無添つくりおきの悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">否定的な評価も掲載しています。主に「味の薄さ」と「価格」に集中しています。</p>

        <div className="space-y-2 mb-3">
          <SourcedReview
            negative
            text="「味が優しすぎて、少し物足りなかった」（同記事で紹介されている利用者の声）"
            sourceLabel="HAPPINESS! magazine掲載の口コミ紹介"
            sourceUrl="https://online.tipness.co.jp/feature/home_meal/tsukurioki_home-asp/"
          />
          <SourcedReview
            negative
            text="「美味しくて便利だけど、もう少し安ければ続けやすい」（同記事で紹介されている利用者の声）"
            sourceLabel="HAPPINESS! magazine掲載の口コミ紹介"
            sourceUrl="https://online.tipness.co.jp/feature/home_meal/tsukurioki_home-asp/"
          />
          <SourcedReview
            negative
            text="「ボリュームは一人換算だと、少し物足りなく感じた」「1人1食換算すれば972円となり、宅食の平均相場（750〜900円）と比べれば少し高いでしょう」（実食レビュー）"
            sourceLabel="スマートフードナビ 実食レビュー"
            sourceUrl="https://smart-food-navi.jp/food-delivery/chef-muten-testing-review/"
          />
        </div>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の見解</p>
          <p>悪い評価は「濃い味に慣れた人には薄く感じる」「冷凍弁当と比べると1食あたりが高い」という2点に集約されます。いずれも無添加調理・冷蔵手作りというサービス設計の裏返しであり、欠陥というより「何を優先するか」の問題です。濃い味・低価格を優先するなら冷凍弁当、無添加・家族の食卓を優先するならこのサービス、と、優先する条件で選ぶことをおすすめします。</p>
        </div>

        <SectionHeading id="mazui">シェフの無添つくりおきは「まずい」って本当？味の評判を検証</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          「シェフの無添つくりおき まずい」という検索候補が表示されることがありますが、<strong>当サイトが引用した実食レビュー2媒体（HAPPINESS! magazine・スマートフードナビ）は、いずれも味を評価しています</strong>。実食したHAPPINESS! magazineは記事の結論として<strong>「『まずい』どころか、無添加の常識を覆すプロの味でした」</strong>（<a href="https://online.tipness.co.jp/feature/home_meal/tsukurioki_home-asp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">出典</a>）と述べています。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          一方で「まずい」と感じる可能性があるのは、<strong>ふだん外食やコンビニの濃い味に慣れている人</strong>です。化学調味料を使わない設計上、第一印象は薄味に感じられやすく、実食レビューでも「一口目は薄く感じる」と明記されています。素材の旨みを活かした味付けを「優しい・美味しい」と取るか「物足りない」と取るかで評価が分かれる、というのが実態です。味の許容範囲は個人差が大きいため、まずは初回特典のある1回分で試し、家族の口に合うか確かめるのが確実です。
        </p>

        <SectionHeading id="price">料金・送料の目安</SectionHeading>
        <ComparisonTable
          headers={["プラン", "価格（税込・1回）", "送料（税込）"]}
          rows={[
            ["食卓サポートプラン（3人前×2食分）", "初回 3,799円／2回目以降 5,173円", "990円（初回は送料無料）"],
            ["食卓おまかせプラン（4人前×3食分）", "初回 9,980円／2回目以降 13,607円", "990円（初回は送料無料）"],
          ]}
        />
        <p className="text-sm mb-4 leading-relaxed">
          <strong>価格の考え方：</strong>食卓サポートプランは公式表記で「3人前×2食分」（大人2名＋幼児1名の2日分）なので、2回目以降は送料込み6,163円÷6で<strong>1人前あたり約1,027円</strong>、食卓おまかせプラン（4人前×3食分）は14,597円÷12で約1,216円です（当サイト計算）。nosh（612円〜・2026年10月10日公式確認）やまごころケア食（394円〜・送料別）などの冷凍弁当と比べると割高ですが、「冷蔵の手作りおかず」「無添加調理」「家族全員分」という条件を踏まえた価格です。2026年11月28日時点では、初回限定価格（26%OFF）と初回送料無料が案内されています（初回割引は契約者の1回目のお届け分のみ）。なお公式FAQでは、初回のお届け分はキャンセルできず、2回目以降はいつでも解約でき違約金はないとされています。
        </p>
        <p className="text-xs text-warm-gray mb-6">※価格・送料は2026年11月28日に公式サイト（トップの料金欄・よくある質問「商品の値段はいくらですか？」）で確認した税込額です。初回価格は公式で「今なら！初回26%OFF」と表示されているため、申し込み前に公式サイトでご確認ください。</p>

        <SectionHeading id="merits">メリット4つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "無添加調理でも「美味しい」という実食評価", text: "HAPPINESS! magazineの実食レビューは「無添加とは思えないほどちょうど良い味付け」、スマートフードナビの実食レビューも「バランスの良い味付けで美味しかった」と評価しています。公式は「無添加でお子様でも安心して食べられる」ことを特長に挙げています。" },
            { title: "夕食づくりの時間がほぼゼロになる", text: "献立決め・買い物・調理・片付けが「温めるだけ」に短縮されます。「家族との時間が増えた」という声が象徴的で、共働き世帯の平日の負担軽減効果は大きいと考えられます。" },
            { title: "管理栄養士監修の週替わり献立", text: "主菜＋副菜の組み合わせで自然と品目数が増え、栄養バランスが整います。献立を考える精神的な負担がなくなるのも隠れたメリットです。" },
            { title: "回数縛りなしで始めやすい", text: "定期便ですが契約回数の制限はなく、2回目以降はいつでも休止でき違約金もかかりません（公式FAQ）。初回分はキャンセルできないため、初回特典で1回試し、続けない場合は次回お届け日の6日前までに休止する使い方になります。" },
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
            { title: "消費期限が短い（冷蔵・お届け日を含めて4日間）", text: "保存料を使わない冷蔵配送のため、消費期限はお届け日を含めて4日間（一部地域は3日間）です（公式）。余った分は一部のメニューを除き冷凍保存できると公式に案内されていますが、冷凍弁当のように届いた分をまとめてストックする使い方には向きません。外食が多い週はスキップするなどの運用が必要です。" },
            { title: "1人1食換算では割高", text: "スマートフードナビの実食レビューでは1人1食換算で972円という試算があり、2026年11月28日の公式料金では送料込みで1人前約1,027円（当サイト計算）と、冷凍弁当の相場より高めです。一人暮らしのコスパ重視には不向きで、家族の食卓まるごとの時短に価値を感じられるかが分かれ目です。" },
            { title: "メニューが選べない・薄味が合わない人もいる", text: "週替わりのおまかせ献立で、アレルギー対応や食材の除去・代替は受け付けていないため（公式FAQ）、苦手な食材が届く可能性があります。また化学調味料を使わない優しい味付けは、濃い味に慣れた人には物足りなく感じられることがあります。" },
          ].map((item) => (
            <div key={item.title} className="bg-red-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>
        <SubHeading>おすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "子どもに添加物の少ない食事を食べさせたい家庭",
              "共働きで平日の夕食づくりを丸ごと時短したい世帯",
              "冷凍弁当の食感や味が苦手で「手作りのおかず」を求める人",
              "献立を考えるのが精神的な負担になっている人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <SubHeading>おすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "一人暮らしでコスパ重視の人 → ライフミールやまごころケア食がおすすめ",
              "長期ストックできる冷凍弁当が欲しい人 → noshがおすすめ",
              "濃いめの味付けが好きな人",
              "メニューを自分で選びたい人 → nosh・食宅便（おこのみセレクト）がおすすめ",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>{item}</span></li>
            ))}
          </ul>
        </div>

        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/lifemeal-kuchikomi/", label: "ライフミールの口コミ・評判は？まずいって本当？" },
            { href: "/articles/shokutakubin-reviews/", label: "食宅便の口コミ・評判は？まずいって本当?" },
            { href: "/articles/mealkit-vs-reitou-bento/", label: "ミールキット vs 冷凍弁当 どっちを選ぶ？" },
            { href: "/articles/wanmairu-reviews/", label: "わんまいるの口コミ・評判（国産食材・手作り系）" },
            { href: "/articles/sango-osusume/", label: "産後ママにおすすめの宅配弁当・宅食" },
          ].map((link) => (
            <div key={link.href}><Link href={link.href} className="text-accent hover:text-accent-dark text-sm transition-colors">→ {link.label}</Link></div>
          ))}
        </div>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (<FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">シェフの無添つくりおき まとめ</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>シェフの無添つくりおきは、<strong>無添加調理×冷蔵手作りおかず</strong>という独自ポジションの宅配サービスです。HAPPINESS! magazineの実食レビューでは「無添加の常識を覆すプロの味」と評価される一方、優しい味付けと価格には好みが分かれます。</p>
            <p>冷凍弁当の代替ではなく、家族の夕食のおかずをまとめて届けるサービスのため、共働き・子育て世帯に向いています。1食あたりの価格を重視する場合は冷凍弁当が適しています。</p>
            <p>初回は<strong>26%OFF＋送料無料</strong>の限定価格が案内されています（2026年11月28日 公式）。初回分はキャンセルできないため、内容を確認したうえでお申し込みください。</p>
          </div>
          <a href="https://store.tavenal.com/tsukurioki/" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition mt-4">シェフの無添つくりおき 公式サイトで初回特典を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食を専門とする編集チームです。公開情報や利用者の口コミをもとに、公平な比較情報の提供に努めます。</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mutenka-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">無添加の宅配弁当・冷凍宅食5社を公式の表記で比較</Link></li>
            <li><Link href="/articles/lifemeal-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ライフミールの口コミ・評判は？まずいって本当？</Link></li>
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">食宅便の口コミ・評判は？まずいって本当？</Link></li>
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/mealkit-vs-reitou-bento/" className="text-accent hover:text-accent-dark transition-colors">ミールキット vs 冷凍弁当 どっちを選ぶ？</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5</Link></li>
            <li><Link href="/articles/fitfoodhome-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">FIT FOOD HOME(フィットフードホーム)の口コミ・評判は？まずいって本当？</Link></li>
            <li><Link href="/articles/tsukurioki-takuhai/" className="text-accent hover:text-accent-dark transition-colors">作り置き惣菜の宅配2社を比較（ツクリオ・シェフの無添つくりおき）</Link></li>
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
