import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ライフミールの口コミ・評判は？まずいって本当？料金と実力を中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "ライフミール（LifeMeal）の口コミ・評判を出典付きで検証。「まずい」という噂は本当か、実食レビューメディアの評価を引用しながら中立に解説。1食490円台からの料金体系、初回割引、冷凍庫無料レンタルの条件も整理。最新の料金・キャンペーンは公式サイトでご確認ください。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/lifemeal-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ライフミール 口コミ, ライフミール 評判, ライフミール まずい, ライフミール 料金, LifeMeal 冷凍弁当, 宅配弁当 安い, 宅配弁当 口コミ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-07-04T00:00:00+09:00",
    modifiedTime: "2026-07-04T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "ライフミールの運営会社はどこ？信頼できる？",
    answer:
      "ライフミールは、高齢者向け配食「まごころ弁当」や冷凍宅配弁当「まごころケア食」を手がける株式会社シルバーライフが運営しています。配食事業で長年の実績がある上場企業グループのサービスで、国内の自社工場で製造されています。運営基盤の面では安心感のあるサービスです。",
  },
  {
    question: "ライフミールの初回割引はどれくらいお得？",
    answer:
      "時期により内容は変わりますが、初回限定で10食セットが大幅割引になるキャンペーンが実施されており、過去には1食あたり190円程度になる例もありました。初回価格・適用条件は変動するため、注文前に必ず公式サイトで最新のキャンペーン内容を確認してください。",
  },
  {
    question: "冷凍庫の無料レンタルって本当？",
    answer:
      "はい、ライフミールには専用冷凍庫の無料レンタルキャンペーンがあります。ただし対象は10食・20食セットの定期利用者で、クレジットカード払い・月1回以上の継続などの条件が設定されています。また解約時の冷凍庫返却送料は自己負担となる場合があります。条件の詳細は公式サイトでご確認ください。",
  },
  {
    question: "ライフミールとまごころケア食の違いは？",
    answer:
      "どちらも株式会社シルバーライフのサービスですが、まごころケア食は塩分制限・糖質制限など健康管理コースが充実した中高年向け色が強いのに対し、ライフミールは若い世代でも続けやすい価格とメニュー展開が特徴です。価格帯は近いので、制限食が必要ならまごころケア食、日常使いのコスパ重視ならライフミールという選び方が目安になります。",
  },
  {
    question: "ライフミールの賞味期限・保存方法は？",
    answer:
      "冷凍弁当のため冷凍庫（-18℃以下）で保存します。賞味期限は商品ごとにパッケージへ記載されており、冷凍弁当としては数ヶ月単位の余裕があるのが一般的です。電子レンジで温めるだけで食べられるので、忙しい日のストックに向いています。",
  },
];

/* ---------- Helper Components ---------- */

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">口コミ・評判</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">ライフミールの口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ライフミールとは？基本情報まとめ" },
    { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "「まずい」って本当？味の評判を検証" },
    { id: "price", label: "料金・送料を徹底解説" },
    { id: "merits", label: "メリット5つ" },
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

export default function LifemealKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: ARTICLE_TITLE, description: ARTICLE_DESCRIPTION, url: ARTICLE_URL,
    datePublished: "2026-07-04T00:00:00+09:00", dateModified: "2026-07-04T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "ライフミールの口コミ・評判" },
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
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-07-04">公開: 2026年7月4日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">「ライフミールって安いけど味は大丈夫？」「まずいって噂は本当？」——1食490円台からという<strong>業界最安クラスの価格</strong>で注目される冷凍宅配弁当「ライフミール（LifeMeal）」。まごころケア食と同じ株式会社シルバーライフが手がける、若い世代向けのサービスです。</p>
          <p className="mb-3">この記事では、<strong>第三者メディアの実食レビューを出典付きで引用</strong>しながら、良い評判・悪い評判の両方を中立に検証。「まずい」という検索候補が出る理由にも正面から答えます。</p>
          <p>料金体系・初回割引・冷凍庫無料レンタルの条件まで整理したので、自分に合うかどうかをこの記事で判断できます。</p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：ライフミールはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">ライフミールは、<strong>「1食500円前後の低価格で、栄養バランスの整った冷凍弁当を日常的に続けたい人」</strong>に向いたサービスです。実食レビューでは「冷凍とは思えないクオリティ」「水っぽさは感じなかった」と味も一定の評価を得ています。一方、ボリュームは控えめで、メニューによって好みが分かれるという指摘もあります。「まずい」という強い不満は当サイトが確認した範囲では主流ではありません。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p><ul className="space-y-1 list-disc list-inside"><li>1食490円台〜の業界最安クラスの価格</li><li>「冷凍とは思えないクオリティ」という実食評価</li><li>冷凍庫無料レンタルなど継続支援の仕組み</li></ul></div>
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-warm-gray mb-2">△ 注意したい点</p><ul className="space-y-1 list-disc list-inside"><li>ボリュームは腹八分目程度と控えめ</li><li>魚メニューなどで好みが分かれる声</li><li>送料が毎回かかる（地域により変動）</li></ul></div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://l-meal.com/" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ライフミール 公式サイトで最新の料金・初回割引を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ライフミールとは？基本情報まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ライフミール（LifeMeal）は、<strong>株式会社シルバーライフ</strong>が運営する冷凍宅配弁当サービスです。シルバーライフは高齢者向け配食「まごころ弁当」や冷凍弁当「<Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark underline">まごころケア食</Link>」を長年手がけてきた配食の専門企業で、そのノウハウを<strong>忙しい20〜40代でも続けやすい価格・メニュー</strong>に落とし込んだのがライフミールです。国内の自社工場で製造され、管理栄養士監修のメニューは100種類以上。レンジで温めるだけで主菜＋副菜の食事が完成します。
        </p>

        <SubHeading>ライフミールの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社シルバーライフ（まごころケア食と同じ運営元）"],
            ["商品形態", "冷凍宅配弁当（主菜＋副菜）"],
            ["メニュー数", "100種類以上"],
            ["監修", "管理栄養士（塩分・糖質・脂質に配慮した設計）"],
            ["製造", "国内の自社工場"],
            ["調理", "電子レンジで約5分温めるだけ"],
            ["セット", "7食・10食・20食（定期）"],
            ["特典", "冷凍庫無料レンタル（条件あり）/ 継続割引のクラブ制度 / 専用アプリ"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※2026年7月時点の公式サイト等の公開情報に基づく整理です。最新仕様は公式サイトでご確認ください。</p>

        <SectionHeading id="good-reviews">ライフミールの良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">第三者メディアの実食レビューから、味・コスパに関する評価を出典付きで紹介します（引用は各記事の原文より）。</p>

        <SubHeading>味への評価：「冷凍とは思えないクオリティ」</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            text="「どれも食材が自然な柔らかさで手作りに近い食感だった」「食べていてコンビニ弁当のような罪悪感がない温かみのあるクオリティ」（実食レビュー）"
            sourceLabel="宅食グルメ（Appliv） 実食レビュー"
            sourceUrl="https://meal.app-liv.jp/archive/149700/"
          />
          <SourcedReview
            text="冷凍弁当は「野菜メニューが水っぽくなり、全体的に味がぼんやりしてしまう」イメージがあったが、実食では「水っぽさは感じませんでした」（実食レビュー）"
            sourceLabel="HAPPINESS! magazine（ティップネス運営）実食レビュー"
            sourceUrl="https://online.tipness.co.jp/feature/home_meal/lifemeal/"
          />
          <SourcedReview
            text="「彩りも味付けもいい」「冷凍とは思えないクオリティ」「低カロリーで食べやすい」（同記事で紹介されている利用者の声）"
            sourceLabel="宅食グルメ（Appliv）掲載の口コミ紹介"
            sourceUrl="https://meal.app-liv.jp/archive/149700/"
          />
        </div>

        <SubHeading>コスパへの評価</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            text="「1食あたり約500円」で「コンビニで数種類のおかずを購入すると、1,000円近くになるため、非常にお得な気分」（実食レビュー）"
            sourceLabel="HAPPINESS! magazine 実食レビュー"
            sourceUrl="https://online.tipness.co.jp/feature/home_meal/lifemeal/"
          />
        </div>

        <SectionHeading id="bad-reviews">ライフミールの悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ネガティブな評価も正直に紹介します。主に「量」と「メニューごとの当たり外れ」に集中しています。</p>

        <div className="space-y-2 mb-3">
          <SourcedReview
            negative
            text="「1食のボリュームは腹八分目ほどとやや少なめ」（実食レビュー）"
            sourceLabel="宅食グルメ（Appliv） 実食レビュー"
            sourceUrl="https://meal.app-liv.jp/archive/149700/"
          />
          <SourcedReview
            negative
            text="「男性からすると少し物足りないボリュームですが、女性や子どもには十分な量です」（実食レビュー）"
            sourceLabel="HAPPINESS! magazine 実食レビュー"
            sourceUrl="https://online.tipness.co.jp/feature/home_meal/lifemeal/"
          />
          <SourcedReview
            negative
            text="「PFCバランスが気になる」「脂質が高い（多い）」（同記事で紹介されている利用者の声）"
            sourceLabel="宅食グルメ（Appliv）掲載の口コミ紹介"
            sourceUrl="https://meal.app-liv.jp/archive/149700/"
          />
        </div>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の見解</p>
          <p>悪い評価は「ボリューム控えめ」に集中しています。これは1食500円前後・430kcal以下目安という設計の裏返しで、ダイエット・健康管理目的ならむしろ適量です。がっつり食べたい方はご飯や汁物を足す前提で考えましょう。脂質などの栄養素はメニューごとに公開されているので、気になる方は注文時に数値を確認して選ぶのがおすすめです。</p>
        </div>

        <SectionHeading id="mazui">ライフミールは「まずい」って本当？味の評判を検証</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          「ライフミール まずい」という検索候補が表示されることがありますが、<strong>当サイトが確認した範囲では、「まずい」という強い不満は実食レビューでも利用者の声でも主流ではありません</strong>。むしろ「冷凍とは思えないクオリティ」「水っぽさは感じなかった」（<a href="https://online.tipness.co.jp/feature/home_meal/lifemeal/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">HAPPINESS! magazine</a>）、「手作りに近い食感」（<a href="https://meal.app-liv.jp/archive/149700/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">宅食グルメ</a>）と、冷凍弁当としては良好な評価が並びます。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          ただし注意点もあります。全メニューが塩分に配慮した設計のため、<strong>濃い味に慣れている人には薄めに感じるメニューがある</strong>こと、そして<strong>魚メニューの匂いなどで好みが分かれる</strong>という声があることです。100種類以上あるメニューには当たり外れの感じ方に個人差があるので、初回割引で10食程度をまとめて試し、自分の口に合う系統を見つけるのが現実的な判断方法です。
        </p>

        <SectionHeading id="price">ライフミールの料金・送料を徹底解説</SectionHeading>
        <SubHeading>セット別料金の目安（定期・税込）</SubHeading>
        <ComparisonTable
          headers={["セット", "価格の目安", "1食あたり"]}
          rows={[
            ["7食セット", "約3,640円", "約520円"],
            ["10食セット", "約5,100円", "約510円"],
            ["20食セット", "約9,800円", "約490円"],
            ["初回キャンペーン（10食）", "大幅割引の実施例あり（例: 1食190円相当）", "時期により変動"],
          ]}
        />
        <p className="text-sm mb-4 leading-relaxed">
          <strong>価格のポイント：</strong>通常価格でも1食490〜520円と、nosh（599円〜）より安く、まごころケア食（396円〜）に近い最安クラスです。さらに<strong>まとめ買い割引や、累計購入数に応じて単価が下がるクラブ制度</strong>があり、継続すると1食430円台まで下がる設計になっています。送料は別途かかり（本州で1,000円前後・沖縄等は割増の情報あり）、地域・時期で変わるため注文画面で確認してください。
        </p>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">冷凍庫無料レンタルについて</p>
          <p>ライフミール独自の特典として、10食・20食セットの定期利用者向けに<strong>専用冷凍庫の無料レンタル</strong>があります（クレジットカード払い・月1回以上の継続などの条件あり）。「冷凍庫がいっぱいで宅配弁当を諦めていた」人には大きなメリットですが、解約時の返却送料が自己負担になる場合がある点は事前に確認しましょう。</p>
        </div>
        <p className="text-xs text-warm-gray mb-6">※上記は2026年7月時点の公開情報に基づく目安です。正確な最新価格・送料・キャンペーンは必ず公式サイトでご確認ください。</p>

        <SectionHeading id="merits">メリット5つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "1食490円台〜の業界最安クラス価格", text: "20食セットなら1食約490円。クラブ制度やまとめ買いでさらに下がり、宅配弁当の中でもトップクラスの安さです。毎日続ける前提のコスパで設計されています。" },
            { title: "配食専門企業シルバーライフの製造ノウハウ", text: "まごころ弁当・まごころケア食で培った大量調理と栄養管理のノウハウをベースに、国内自社工場で製造。低価格でも運営基盤がしっかりしている安心感があります。" },
            { title: "実食レビューで味の評価が良好", text: "「冷凍とは思えないクオリティ」「水っぽさを感じない」など、第三者メディアの実食評価は価格を考えると良好。低価格帯サービスの中では味のバランスが取れています。" },
            { title: "冷凍庫無料レンタルで置き場所問題を解決", text: "宅配弁当最大の障壁である「冷凍庫スペース」を、専用冷凍庫の無料レンタル（条件あり）で解決できるのは業界でも珍しい特典です。" },
            { title: "管理栄養士監修・カロリー控えめ設計", text: "塩分・糖質・脂質に配慮した設計で、430kcal以下目安のメニューが用意されています。ダイエットや健康管理目的の置き換えにも使いやすい栄養設計です。" },
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
            { title: "ボリュームは控えめ", text: "実食レビューでも「腹八分目」「男性には物足りない」という評価が一致しています。がっつり食べたい方はご飯・汁物を足すか、ボリューム系のサービスを検討しましょう。" },
            { title: "送料が毎回かかる", text: "送料は無料ではなく、注文のたびにかかります。1食単価が安くても送料込みの実質単価で比較することが重要です。20食セットでまとめ買いすると1食あたりの送料負担を最小化できます。" },
            { title: "メニューは日替わり系で選択の自由度が低め", text: "noshのように1食ずつ自由に選ぶスタイルではなく、セット中心の構成です。苦手な食材が多い方は、メニュー内容を事前に公式サイトで確認してから注文しましょう。" },
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
              "1食500円前後で冷凍弁当を毎日続けたい人",
              "コンビニ弁当・カップ麺からの置き換えでコスパ重視の人",
              "冷凍庫スペースがなくて宅配弁当を諦めていた人（無料レンタル活用）",
              "カロリー・塩分控えめの食事で体型管理したい人",
              "運営基盤のしっかりした会社のサービスを選びたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <SubHeading>おすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "ボリューム重視でがっつり食べたい人",
              "毎回メニューを1食ずつ自由に選びたい人 → noshがおすすめ",
              "塩分制限・糖質制限など本格的な制限食が必要な人 → まごころケア食・ウェルネスダイニングがおすすめ",
              "レストラン級の味を求める人 → 三ツ星ファームがおすすめ",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#10007;</span><span>{item}</span></li>
            ))}
          </ul>
        </div>

        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/magokoro-care-reviews/", label: "まごころケア食の口コミ・評判（同じシルバーライフ運営）" },
            { href: "/articles/chef-mutenka-tsukurioki-kuchikomi/", label: "シェフの無添つくりおきの口コミ・評判" },
            { href: "/articles/jisshitsu-tanka-hikaku/", label: "冷凍弁当は「送料込みの実質単価」で比較" },
            { href: "/articles/souryou-yasui-ranking/", label: "送料が安い宅配弁当ランキング" },
            { href: "/articles/hitorigurashi-osusume/", label: "一人暮らしにおすすめの宅食TOP5" },
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
          <p className="font-bold mb-3">ライフミール まとめ</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>ライフミールは、配食専門企業シルバーライフが手がける<strong>1食490円台からの低価格冷凍弁当</strong>です。実食レビューでは「冷凍とは思えないクオリティ」と味も良好な評価で、「まずい」という強い不満は主流ではありません。</p>
            <p>弱点はボリュームの控えめさと毎回かかる送料。ご飯を足す前提で、20食まとめ買い＋クラブ制度を活用すれば、送料込みでも業界最安クラスの実質単価で続けられます。</p>
            <p>まずは<strong>初回割引キャンペーン</strong>で10食程度を試し、味と量が自分に合うか確かめるのが失敗しない始め方です。</p>
          </div>
          <a href="https://l-meal.com/" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition mt-4">ライフミール 公式サイトで初回割引を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark transition-colors">まごころケア食の口コミ・評判は？まずいって本当？</Link></li>
            <li><Link href="/articles/chef-mutenka-tsukurioki-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">シェフの無添つくりおきの口コミ・評判は？まずいって本当？</Link></li>
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/1shoku-200yen-dai/" className="text-accent hover:text-accent-dark transition-colors">1食200円台で買える宅配弁当はある？</Link></li>
            <li><Link href="/articles/jisshitsu-tanka-hikaku/" className="text-accent hover:text-accent-dark transition-colors">実質単価で比較！宅配弁当のコスパ徹底比較</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
