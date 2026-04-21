import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】Dr.つるかめキッチンの口コミ・評判を徹底調査！制限食5コースの料金・味・送料を解説";
const ARTICLE_DESCRIPTION =
  "Dr.つるかめキッチンの口コミ・評判を徹底調査。専門医・管理栄養士監修の制限食5コース（糖質制限/塩分制限/たんぱく質制限/カロリー制限/バランス栄養）の料金・味・送料を詳しく解説。定期購入で全国送料無料。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/tsurukame-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "つるかめキッチン 口コミ, Dr.つるかめキッチン 評判, つるかめキッチン 料金, つるかめキッチン 糖質制限, つるかめキッチン 塩分制限, 制限食 宅配弁当",
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
    question: "Dr.つるかめキッチンはお試しできる？",
    answer:
      "専用の「お試しセット」は用意されていませんが、定期購入は購入回数の縛りがなく、いつでも解約可能です。実質的に初回1回だけ注文して解約することもできるため、定期購入で7食セットを注文して味を確認し、合わなければ解約するという方法がおすすめです。定期購入なら28%OFFかつ送料無料で試せます。",
  },
  {
    question: "Dr.つるかめキッチンのメニューは選べる？",
    answer:
      "メニューは自分で選ぶことができません。管理栄養士がバランスを考えて選んだメニューがおまかせで届きます。栄養制限値を厳密に管理するためにこのような方式を採用しており、「メニューを選ぶ手間がない」と前向きに捉える利用��も多いです。ただし、届くまで内容がわからない点はデメリットと感じる方もいます。",
  },
  {
    question: "糖尿病の食事療法にDr.つるかめキッチンは使える？",
    answer:
      "Dr.つるかめキッチンの「糖質制限気づかい御膳」は1食あたり糖質15g以下・カロリー240kcal(±10%)・塩分2.0g以下に設定されており、糖尿病の食事療法に活用している方もいます。ただし、あくまで食事の補助であり、医師の指導のもとで利用することが大切です。主治医と相談の上でご利用ください。",
  },
  {
    question: "Dr.つるかめキッチンと食宅便・ウェルネスダイニングの違いは？",
    answer:
      "3社とも制限食を扱っていますが、Dr.つるかめキッチンは「専門医＋管理栄養士のW監修」が最大の特徴。糖尿病専門医、腎臓病専門医などの各分野の専門医が監修しています。食宅便は日清医療食品の大規模な製造体制が強み、ウェルネスダイニングは管理栄養士への電話相談が無料で利用できる点が差別化ポイントです。",
  },
  {
    question: "定期購入の解約方法は？",
    answer:
      "電話で解約できます（0120-666-637）。次回お届け予定日の6日前までに連絡すれば、���入回数に関係なく解約可能で、解約金は一切かかりません。解約ではなく「休止」や「配送間隔の変更」も電話で対応してもらえます。",
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
        <li><span className="text-foreground">Dr.つるかめキッチンの口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "Dr.つるかめキッチンとは？基本情報" },
    { id: "courses", label: "制限食5コースの詳細と料金" },
    { id: "good-reviews", label: "良���口コミ・評判" },
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

export default function TsurukameReviewsPage() {
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
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">口コミ・評判</span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time><span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">「Dr.つるかめキッチンって実際どうなの？」「制限食なのに美味しいって本当？」——糖尿病・腎臓病・高血圧などの食事制限が必要な方に向けた宅配弁当サービス、Dr.つるかめキッチン。</p>
          <p className="mb-3">この記事では、<strong>Dr.つるかめキッチンの口コミ・評判を徹底リサーチ</strong>。専門医・管理栄養士がW監修する5つの制限食コースの内容、料金、そして定期購入で全国送料無料になる仕組みを詳しく解説します。</p>
          <p>「制限食を探しているけど、味が心配」「他社の制限食と何が違うの？」という方は、ぜひ参考にしてください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">Dr.つるかめキッチンとは？基本情報</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">Dr.つるかめキッチンは、株式会社クロスエッジが運営する制限食専門の���凍宅配弁当サービスです。最大の特徴は<strong>各分野の専門医と管理栄養士によるW監修</strong>。糖尿病専門医、ダイエット専門医、腎臓病専門医などがそれぞれのコースの栄養設計を監修しているため、医学的な根拠に基づいた食事管理ができます。</p>

        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社クロスエッジ"],
            ["サービス内容", "制限食専門の冷凍宅配弁当"],
            ["監修", "専門医＋管理栄養士のW監修"],
            ["コース数", "5コース（糖質/塩分/たんぱく質/カロリー/バランス）"],
            ["食数", "7食・14食・21食セットから選択"],
            ["配送", "ヤマト運輸クール宅急便"],
            ["送料", "定期購入：全国送料無料 / 都度購入：770円"],
            ["配送間隔", "1週間/2週間/3週間/1ヶ月から選択"],
            ["解約", "いつでも可（縛りなし・解約金なし）"],
          ]}
        />

        <SectionHeading id="courses">制限食5コースの詳細と料金</SectionHeading>

        <ComparisonTable
          headers={["コース名", "対象", "栄養制限値", "7食定期（税込）", "1食あたり"]}
          rows={[
            ["糖質制限気づかい御膳", "糖尿病・ダイエット", "糖���15g以下・カロリー240kcal(±10%)・塩分2.0g以下", "5,184円", "約741円"],
            ["塩分制限気づかい御膳", "高血圧・心臓病", "塩分2.0g以下", "5,184円", "約741円"],
            ["たんぱく＆塩分制限気づかい御膳", "腎臓病", "たんぱく質10g以下・塩分2.0g以下・カリウム500mg以下", "5,508円", "約787円"],
            ["カロリー制限気づかい御膳", "ダイエット・肥満", "カロリー240kcal(±10%)・塩分2.5g以下", "5,184円", "約741円"],
            ["つるかめバランス栄養御膳", "健康維持", "カロリー300kcal以下・塩分2.5g以下", "4,968円", "約710円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          上記は<strong>定期購入の料金</strong>です。定期購入を選ぶと通常価格から28%OFFになり、送料も全国無料になります。都度購入の場合は28%割引なし＋送料770円がかかるため、定期購入のほうが圧倒的にお得です。定期購入に回数の縛りはないため、1回だけ注文して解約することも可能です。
        </p>

        <SubHeading>各コースの監修医について</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "糖質制限気づかい御膳", text: "糖尿病専門医が監修。糖質を1食15g以下に厳密にコントロールしながら、出汁や香辛料を活かした味付けで満足感を確保しています。" },
            { title: "塩分制限気づかい御膳", text: "循環器専門医が監修。塩分2.0g以下でありながら、減塩を感じさせない味付けの工夫（レモンや酢、香辛料の活用）がされています。" },
            { title: "たんぱく＆塩分制限気づかい御膳", text: "腎臓病専門医が監修。たんぱく質10g以下・カリウム500mg以下と、腎臓への負担を最小限に抑えた設計です。" },
            { title: "カロリー制限気づかい御膳", text: "ダイエット専門医が監修。240kcal(±10%)で食べ応えを出す工夫として、野菜をたっぷり使い、噛む回数が自然に増えるメニュー構成になっています。" },
            { title: "つるかめバランス栄養御膳", text: "管理栄養士が監修。特定の栄養素を制限するのではなく、総合的な栄養バランスを整えたコースです。健康維持目的の方に。" },
          ].map((item) => (
            <div key={item.title} className="bg-blue-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="good-reviews">良い口コミ・評判</SectionHeading>
        {[
          { title: "制限食なのに美味しい", reviews: ["「糖質制限食とは思えない味。しっかり味がついていて満足感がある」（50代男性・糖��病）", "「塩分2.0g以下なのに薄味と感じない。出汁と香辛料の使い方がうまい」（60代女性・高血圧）", "「制限食＝まずいというイメージが覆った。毎日の食事が楽しみになった」（70代男性）"] },
          { title: "専門医監修の安心感", reviews: ["「医師が監修しているという安心感で選んだ。数値も改善傾向にある」（60代男性）", "「腎臓病の食事制限は自分で計算するのが大変だったが、つるかめキッチンなら安心」（50代女性）"] },
          { title: "定期購入で全国送料無料", reviews: ["「送料無料は本当にありがたい。他の制限食サービスは送料だけで月1,500〜2,000円かかる」��50代男性）", "「北海道在住だが送料無料。他社だと北海道は2,000円近い送料がかかるので大きい」（60代女性）"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">{cat.reviews.map((r) => (<div key={r} className="bg-green-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>))}</div>
          </div>
        ))}

        <SectionHeading id="bad-reviews">悪い口コミ・評判</SectionHeading>
        {[
          { title: "メニューが選べない", reviews: ["「何が届くかわからないのがストレス。苦手な食材が入っていることもある」（40代女性）", "「noshのように自分で選べるサービスと比べると、自由度が低い」（50代男性）"] },
          { title: "価格がやや高い", reviews: ["「1食約741円は他の冷凍弁当と比べて高め。制限食の品質を考えれば妥当かもしれないが」（50代男性）", "「7食で5,184円。月4回注文すると約20,000円になる」（60代女性）"] },
          { title: "量が少なく感じる", reviews: ["「男性にはやや物足りない量。ご飯を多めに用意する必要がある」（40代男性）", "「カロリー制限だから仕方ないが、最初は空腹感があった。1週間ほどで慣れた」（50代男性）"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">{cat.reviews.map((r) => (<div key={r} className="bg-red-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>))}</div>
          </div>
        ))}

        <SectionHeading id="price">料金・送料を徹底解説</SectionHeading>
        <SubHeading>定期購入 vs 都度購入</SubHeading>
        <ComparisonTable
          headers={["項目", "定期購入", "都度購入"]}
          rows={[
            ["価格", "28%OFF", "通常価格"],
            ["送料", "全国送料無料", "全国一律770円"],
            ["7食セット（糖質制限）", "5,184円（741円/食）", "7,228円＋770円＝7,998円（1,143円/食）"],
            ["解約", "いつでも可（縛りなし）", "—"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          <strong>定期購入が圧倒的にお得</strong>です。7食セットの糖質制限コースの場合、定期購入なら5,184円（送料無料）、都度購入なら7,998円（送料込み）と、<strong>1回の注文で2,814円の差</strong>になります。定期購入に縛りはないため、まず定期で注文し、合わなければ次回配送前に解約するのが賢い方法です。
        </p>

        <SubHeading>食数による1食あたりコストの違い</SubHeading>
        <ComparisonTable
          headers={["食数", "糖質制��コース（定期）", "1食あたり"]}
          rows={[
            ["7食セット", "5,184円", "約741円"],
            ["14食セット", "9,828円", "約702円"],
            ["21食セット", "14,364円", "約684円"],
          ]}
        />

        <SectionHeading id="merits">メリット4つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "専門医＋管理栄養士のW監修", text: "糖尿病専門医、腎臓病専門医など各分野の専門医が栄養設計を監修。医学的根拠に基づいた制限食は他社にない強みです。" },
            { title: "定期購入で全国送料無料", text: "北海道・沖縄を含む全国どこでも送料無料。送料が高い地域にお住まいの方には特に大きなメリットです。" },
            { title: "定期購入の縛りなし", text: "購入回数の条件や解約金は一切なし。1回だけ注文して解約することも可能なため、実質お試し感覚で利用できます。" },
            { title: "制限食でも美味しい味付け", text: "出汁・香辛料・酢・レモンなどを活用し、減塩・低糖質でも満足感のある味付け。「制限食＝まず��」のイメ��ジを覆す品質です。" },
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
            { title: "メニューが選べない（完全おまかせ）", text: "栄養制限値を厳���に管理するため、メニューは全ておまかせ。苦手な食材が含まれる可能性があり、好き嫌いが多い方には不向きです。" },
            { title: "1食あたりの価格がやや高め", text: "定期購入でも1食684〜787円と、nosh（499〜698円）やまごころケア食（約470円）と比較するとやや高め。ただし制限食の品質と送料無料を考慮すると妥当な価格帯です。" },
            { title: "解約が電話のみ", text: "解約・休止・変更は電話連絡の���。noshのようにマイページから解約できるサービスと比較すると、やや不便です。" },
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
          {["糖尿病・腎臓病・高血圧などで食事制限が必要な方", "専門医監修の安心感を求める方", "送料無料で制限食を利用したい方（特に北海道・沖縄）", "自分で栄養計算する手間を省き���い方", "制限食でも美味しい食事を求める方"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-accent mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>
        <SubHeading>おすすめしない人</SubHeading>
        <div className="space-y-2 mb-6">
          {["自分でメニューを選びたい方", "1食500円以下のコスパ重視の方", "制限食が不要な健康な方（バランス栄養御膳は例外）"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>

        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/wellness-dining-reviews/", label: "ウェルネスダイニングの口コミ・評判" },
            { href: "/articles/shokutakubin-reviews/", label: "食宅便の口コミ・評判" },
            { href: "/articles/koureisha-osusume/", label: "高齢者向け宅配弁���おすすめランキング" },
            { href: "/articles/toushitsu-seigen-osusume/", label: "糖質制限におすすめの宅配弁当ランキング" },
            { href: "/articles/souryou-yasui-ranking/", label: "送料が安い宅配弁当ランキング" },
          ].map((link) => (
            <div key={link.href}><Link href={link.href} className="text-accent hover:text-accent-dark text-sm transition-colors">→ {link.label}</Link></div>
          ))}
        </div>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        {faqData.map((faq) => (<FAQ key={faq.question} question={faq.question} answer={faq.answer} />))}

        <SectionHeading id="summary">まとめ</SectionHeading>
        <div className="bg-cream rounded-xl p-5 mb-6">
          <p className="font-bold text-sm mb-3">Dr.つるかめキッチン まとめ</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>Dr.つるかめキッチンは<strong>専門医＋管理栄養士のW監修</strong>による制限食専門の冷凍宅配弁当サービスです。</p>
            <p>糖質制限・塩分制限・たんぱく質制限・カロリー制限・バランス栄養の5コースを展開。定期購入なら28%OFFかつ全国送料無料で、1食あたり684〜787円で利用できます。</p>
            <p>「制限食なのに美味しい」という口コミが多数。定期購入に縛りがないため、実質お試し感覚で始められます。食事制限が必要な方や、ご家族の健康管理をサポートしたい方におすすめのサービスです。</p>
          </div>
        </div>
      </article>
    </>
  );
}
