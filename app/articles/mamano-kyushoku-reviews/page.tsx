import type { Metadata } from "next";
import Link from "next/link";
import ServiceCapture from "@/components/ServiceCapture";

const ARTICLE_TITLE =
  "ママの休食の口コミ・評判｜まずい・高い？2026年10月改定後の料金・送料を公式で確認";
const ARTICLE_DESCRIPTION =
  "ママの休食の口コミ・評判を、みん評の投稿と第三者メディアの実食レビューから出典付きで紹介します。2026年10月1日の価格改定後の料金（4食5,480円・1食1,310〜1,370円）、送料858円〜、定期便の割引、妊娠中・育児中など4つのプランの平均栄養価を公式サイトで確認しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mamano-kyushoku-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ママの休食, ママの休食 口コミ, ママの休食 評判, ママの休食 まずい, ママの休食 料金, ママの休食 送料, 産後 宅配弁当, 妊娠中 宅配弁当, 授乳中 冷凍弁当",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-05-28T00:00:00+09:00",
    modifiedTime: "2026-10-24T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const MINHYO_URL = "https://minhyo.jp/mamakyu";
const HONNE_URL = "https://exidea.co.jp/blog/meal/home-meal/mamakyu/";

const faqData = [
  {
    question: "ママの休食は妊娠中でも食べられますか？",
    answer:
      "妊娠中・妊活中向けの「プレママ向け」プランがあります。公式サイトによると、プレママ向けのメニューには非加熱のチーズやハム、水銀量の多い魚などは使用しておらず、使用しているチーズ（プロセスチーズ・ナチュラルチーズ）はいずれも加熱殺菌処理済みです。ただし食物アレルギーへの対応はしていないため、アレルギーのある方や医師から食事指導を受けている方は、原材料表示を確認のうえ担当医にご相談ください（2026年10月24日・公式サイトで確認）。",
  },
  {
    question: "料金はいくらですか？noshより高いですか？",
    answer:
      "2026年10月1日決済分から価格が改定され、通常購入は4食5,480円・8食10,720円・12食15,720円（税込・1食1,310〜1,370円）です。送料は別途かかり、関東・中部で858円〜です。定期便は初回25%OFF（4食4,110円〜）、2回目以降は10%OFFです。noshの1食612円〜（2026年10月21日・公式確認）と比べると、1食あたりの価格は2倍以上です。",
  },
  {
    question: "送料はいくらですか？",
    answer:
      "ヤマト運輸のクール宅急便で届き、送料は地域と箱のサイズで決まります（4食は60サイズ、8食は80サイズ、12食は100サイズ）。関東・中部は858円・913円・1,144円、北海道は1,430円・1,485円・1,650円、沖縄は1,650円・2,090円・2,860円です（税込・2026年10月24日・公式の配送ポリシーで確認）。",
  },
  {
    question: "お試しはありますか？メニューは選べますか？",
    answer:
      "お試し専用のセットは公式サイトの商品一覧にはありません（2026年10月24日時点）。定期便の初回が25%OFFになるため、4食の定期便（4,110円）が最も安く始められる方法です。初回のメニューは選べず、プランごとの候補からランダムに届きます。定期便の2回目以降はマイページからメニューを選べます。",
  },
  {
    question: "定期便の解約・休止はいつまでに手続きが必要ですか？",
    answer:
      "定期便に回数の縛りはありません。停止・解約・内容の変更は、次回配送日の6営業日前までにマイページまたは公式LINEで手続きします。初回の注文はすぐに出荷作業が始まるためキャンセルできません。定期便2回目以降の決済は、次回配送予定日の4日前に行われます（2026年10月24日・特定商取引法に基づく表記で確認）。",
  },
  {
    question: "賞味期限と容器のサイズは？",
    answer:
      "賞味期限は3ヶ月から最大1年間です（商品ごとの期限はパッケージの表示で確認）。容器は20.5cm×15.5cm×3.6cmで、冷凍状態で届くため、冷凍庫の空きを事前に確認してください。温め時間は容器ごと電子レンジで約5分です（2026年10月24日・公式FAQで確認）。",
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
        <li><span className="text-foreground">ママの休食の口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ママの休食とは？基本情報まとめ" },
    { id: "plans", label: "4つのプランと平均栄養価" },
    { id: "price", label: "料金・送料（2026年10月改定後）" },
    { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
    { id: "merits", label: "公式情報と口コミから分かるメリット" },
    { id: "demerits", label: "注意すべきデメリット" },
    { id: "target", label: "妊娠中・産後・授乳期の使い方" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "他の宅配弁当との比較" },
    { id: "faq", label: "よくある質問(FAQ)" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a>
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

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="my-6 text-center">
      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-xs text-warm-gray mt-2">※公式サイトへ移動します</p>
    </div>
  );
}

type SourcedReviewItem = { text: string; meta?: string; sourceName: string; sourceUrl: string };

function SourcedReview({ review, tone }: { review: SourcedReviewItem; tone: "good" | "bad" }) {
  return (
    <div className={`${tone === "good" ? "bg-green-50" : "bg-red-50"} rounded-lg p-3 text-sm leading-relaxed`}>
      <p className="mb-1.5">「{review.text}」{review.meta ? `（${review.meta}）` : ""}</p>
      <p className="text-xs text-warm-gray">
        出典:{" "}
        <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">{review.sourceName}</a>
      </p>
    </div>
  );
}

/* ---------- 口コミ（公開レビューからの引用・原文ママ・出典明記・2026年10月24日確認） ---------- */

const goodReviewCategories: { title: string; reviews: SourcedReviewItem[] }[] = [
  {
    title: "味：「冷凍食品のイメージと違う」という声",
    reviews: [
      { text: "注文した料理は美味しくて栄養バランスも考えられていて、本当に驚きました。", meta: "★5・2022年12月11日の投稿", sourceName: "みん評", sourceUrl: MINHYO_URL },
      { text: "以前の冷凍食品のイメージとは異なり、かなり美味しかったです。", meta: "★4・2023年3月23日の投稿", sourceName: "みん評", sourceUrl: MINHYO_URL },
      { text: "マカロニグラタンは、クリーミーながらしつこくなく、とても美味しかったです。", meta: "編集部の実食レビュー", sourceName: "HonNe（株式会社EXIDEA）", sourceUrl: HONNE_URL },
      { text: "左上の切り干し大根は、大根がシャキシャキとしていて、野菜の旨みを感じられて美味しかったです。", meta: "編集部の実食レビュー", sourceName: "HonNe（株式会社EXIDEA）", sourceUrl: HONNE_URL },
    ],
  },
  {
    title: "手軽さと栄養バランス：育児中でも食事を整えられる",
    reviews: [
      { text: "レンジ一つですぐにバランスの良い食事が食べられるというのは、非常にありがたく感じます。", meta: "★4・2023年5月23日の投稿・貧血を指摘されたことがきっかけ", sourceName: "みん評", sourceUrl: MINHYO_URL },
      { text: "在宅の日のお昼、冷食とか麺ばっかりになっちゃうから、ママの休食を頼んでみたんだけど期待以上に美味しかった…", meta: "X（旧Twitter）の投稿", sourceName: "HonNe（株式会社EXIDEA）掲載の引用", sourceUrl: HONNE_URL },
    ],
  },
  {
    title: "贈り物：家族から届いて利用を始めた例",
    reviews: [
      { text: "育児に奮闘中の私を気遣って、義母が宅食弁当を送ってくれたのがこのサービスを知るきっかけになりました。", meta: "★4・2023年5月10日の投稿", sourceName: "みん評", sourceUrl: MINHYO_URL },
      { text: "自分ではなかなか作らないような凝ったメニューも多くて、毎食色んな発見をしながら食べられて満足しています。", meta: "同じ投稿", sourceName: "みん評", sourceUrl: MINHYO_URL },
    ],
  },
];

const badReviewCategories: { title: string; reviews: SourcedReviewItem[]; note: string }[] = [
  {
    title: "価格：「高い」という声が最も多い",
    reviews: [
      { text: "ただしお値段は自炊に比べると割高なので、我が家では定期的な利用はちょっと難しいです。", meta: "★4・2023年3月23日の投稿", sourceName: "みん評", sourceUrl: MINHYO_URL },
      { text: "ママの休食の宅配弁当は、他社と比較して安い値段とは言えません。", meta: "編集部の実食レビュー", sourceName: "HonNe（株式会社EXIDEA）", sourceUrl: HONNE_URL },
    ],
    note: "2026年10月1日の改定で、通常購入の1食は1,310〜1,370円（送料別）になりました。上記の投稿は改定前のものです。費用を抑える場合は、定期便（初回25%OFF・2回目以降10%OFF）と12食セットの組み合わせが最も1食あたりの負担が小さくなります（料金表を参照）。",
  },
  {
    title: "量と冷凍庫のスペース",
    reviews: [
      { text: "夫も食べたんだけど、ボリュームが少し物足りないとのこと", meta: "X（旧Twitter）の投稿", sourceName: "HonNe（株式会社EXIDEA）掲載の引用", sourceUrl: HONNE_URL },
      { text: "あと何よりも冷凍庫のスペース確保が大変だね…", meta: "同じ投稿", sourceName: "HonNe（株式会社EXIDEA）掲載の引用", sourceUrl: HONNE_URL },
    ],
    note: "平均エネルギー量はプランごとに485〜509kcalです（公式・2026年4月時点の平均栄養価）。容器は20.5cm×15.5cm×3.6cmで、12食セットは100サイズの箱で届きます。",
  },
  {
    title: "副菜の食感・見た目",
    reviews: [
      { text: "副菜の野菜がベチャッとしてる", meta: "X（旧Twitter）の投稿", sourceName: "HonNe（株式会社EXIDEA）掲載の引用", sourceUrl: HONNE_URL },
      { text: "正直なところ、見た目はあまり自分好みではありません。", meta: "★4・2023年5月23日の投稿", sourceName: "みん評", sourceUrl: MINHYO_URL },
    ],
    note: "公式FAQでは、加熱ムラがある場合は商品の向きを変えて数十秒ずつ追加で温める、またはお皿に移してラップをかけて温める方法が案内されています。",
  },
];

export default function MamanoKyushokuReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-05-28T00:00:00+09:00",
    dateModified: "2026-10-24T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      { "@type": "ListItem", position: 3, name: "ママの休食の口コミ・評判" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-sango.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-sango-m.webp)" }}>
        <Breadcrumbs />

        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">口コミ・評判</span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <time dateTime="2026-10-24" className="font-medium text-foreground/70">最終更新: 2026年10月24日（料金・送料・プラン・栄養価・解約条件を公式サイトで再確認）</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link></span>
          </div>
          <div className="mt-3 text-xs text-warm-gray bg-yellow-50 border border-yellow-200 rounded p-2">
            PR: 本記事には広告(アフィリエイトリンク)が含まれます。価格・プラン内容は変更される場合があるため、最新情報は必ず<a href="https://t.felmat.net/fmcl?ak=R4568K.1.O82687A.B1357443" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>でご確認ください。
          </div>
        </header>
        </div>{/* /subhead */}

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            <strong>ママの休食</strong>は、株式会社MYPLATEが運営する、妊娠中・育児中のママ向けの冷凍宅配弁当です。管理栄養士と産婦人科医がメニューを監修し、ごはんとおかずのワンプレートを容器ごと電子レンジで約5分温めて食べます。
          </p>
          <p className="mb-3">
            この記事では、<strong>ママの休食の口コミ・評判</strong>を、口コミサイト「みん評」の投稿（全4件）と、第三者メディアの実食レビューから<strong>出典付きで</strong>紹介します。あわせて、<strong>2026年10月1日の価格改定後の料金・送料</strong>、4つのプランの平均栄養価、解約の条件を2026年10月24日に公式サイトで確認しました。
          </p>
          <p className="text-xs text-warm-gray">
            ※当サイトの編集部は実食していません。味の評価は出典元の記載です。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ママの休食の口コミ・評判の要点</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm leading-relaxed mb-4">
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-accent mb-2">◎ 良い評判と公式の特長</p><ul className="space-y-1 list-disc list-inside"><li>「冷凍食品のイメージと違う」と味を評価する口コミが多い</li><li>1食で1日分の約1/3の葉酸と鉄がとれる設計（公式）</li><li>管理栄養士・産婦人科医の監修、着色料・香料・保存料・人工甘味料・化学調味料不使用</li><li>定期便の回数縛りなし・管理栄養士へのLINE栄養相談が無料</li></ul></div>
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-warm-gray mb-2">△ 悪い評判と注意点</p><ul className="space-y-1 list-disc list-inside"><li>通常購入で1食1,310〜1,370円＋送料858円〜（2026年10月改定後）</li><li>初回はメニューを選べない（ランダム）</li><li>食物アレルギーには非対応</li></ul></div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料は2026年10月24日に公式サイトで確認した税込価格です。最新の金額は公式サイトでご確認ください。</p>
          <a href="https://t.felmat.net/fmcl?ak=R4568K.1.O82687A.B1357443" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ママの休食 公式サイトで最新の料金・お試しを見る →</a>
        </div>

        {/* felmat-mamano-202610 */}
        <div className="my-8 text-center">
          <a href="https://t.felmat.net/fmcl?ak=R4568K.1.T82814Q.B1357443" target="_blank" rel="nofollow noopener sponsored"><img src="https://t.felmat.net/fmimg/R4568K.T82814Q.B1357443" width={300} height={250} alt="ママの休食" style={{ border: 0, maxWidth: "100%", height: "auto" }} /></a>
          <p className="text-[10px] text-gray-400 mt-1">PR</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ママの休食とは？基本情報まとめ</SectionHeading>
        <ServiceCapture id="mamano" />{/* svc-cap-202610 */}

        <p className="text-sm mb-6 leading-relaxed">
          ママの休食は、「ママとご家族に休養と栄養を」をコンセプトにした冷凍宅配食です。1食は国産ごはん・主菜1品・副菜3品のワンプレートで、妊娠中・育児中など、ライフステージ別に4つのプランから選びます。公式サイトでは提携産院が多数あること、産科病院での提供実績があることも紹介されています。
        </p>

        <SubHeading>ママの休食の基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社MYPLATE"],
            ["公式サイト", "shop.mamakyu.com（旧 mamanokyushoku.com は現在アクセスできません）"],
            ["プラン", "プレママ向け／育児ママ向け／お子さま向け／からだづくり"],
            ["セット", "4食・8食・12食（お子さま向け・からだづくりは4食のみ）"],
            ["1食の内容", "国産ごはん＋主菜1品＋副菜3品"],
            ["監修", "管理栄養士・産婦人科医"],
            ["添加物", "着色料・香料・保存料・人工甘味料・化学調味料不使用"],
            ["製造", "国際規格「FSSC22000」等の取得工場"],
            ["温め方", "容器ごと電子レンジで約5分"],
            ["賞味期限", "3ヶ月〜最大1年間"],
            ["容器サイズ", "20.5cm×15.5cm×3.6cm"],
            ["配送", "ヤマト運輸のクール宅急便（全国）"],
            ["アレルギー対応", "なし"],
            ["栄養相談", "会員は公式LINE「ママ休ほけんしつ」で管理栄養士に無料で何度でも相談可"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: ママの休食 公式サイト（トップ・お弁当の商品ページ・お弁当へのこだわり・よくあるご質問・特定商取引法に基づく表記。2026年10月24日確認）</p>

        <SubHeading>ママの休食の3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "1食で1日分の約1/3の葉酸と鉄", text: "公式サイトでは「一皿で1/3分の葉酸と鉄がとれる」「緑黄色野菜は最大1/2日分」と案内されています。妊娠中・授乳中に意識したい栄養素を、プランごとに重点を変えて設計しています。" },
            { title: "管理栄養士・産婦人科医の監修と、元ホテルシェフ・元パティシエのレシピ", text: "メニューは管理栄養士と産婦人科医が監修し、大手食品会社で開発責任者の経験がある元ホテルシェフ・元パティシエがレシピを開発しています。1食に15種類以上の食材を使うと公式サイトに記載されています。" },
            { title: "5つの添加物不使用と国際規格の工場", text: "着色料・香料・保存料・人工甘味料・化学調味料を使わず、FSSC22000の取得工場で製造しています。公式サイトには「今までの冷凍食品と比べて約90%のママが『おいしい』と回答」との記載があります（調査の条件は記載なし）。" },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <CTAButton href="https://t.felmat.net/fmcl?ak=R4568K.1.O82687A.B1357443">ママの休食 公式サイトを見る</CTAButton>

        <SectionHeading id="plans">4つのプランと平均栄養価</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          プランごとに意識している栄養素が異なります。妊娠中・妊活中はプレママ向け、授乳中・子育て中は育児ママ向けが対象です。
        </p>

        <ComparisonTable
          headers={["プラン", "対象", "平均エネルギー", "たんぱく質", "重点の栄養素（平均）", "食塩相当量"]}
          rows={[
            ["プレママ向け", "妊娠中・妊活中", "509kcal", "22.4g", "葉酸160.2μg・鉄5.2mg・食物繊維5.9g", "1.8g"],
            ["育児ママ向け", "授乳中・子育て中", "507kcal", "22.0g", "鉄5.1mg・亜鉛3.1mg・ビタミンC56.6mg・食物繊維5.8g", "1.7g"],
            ["お子さま向け", "成長期の子ども", "485kcal", "19.4g", "カルシウム127.7mg・鉄5.0mg・食物繊維6.1g", "1.4g"],
            ["からだづくり", "健康・体力づくり", "504kcal", "23.1g", "糖質56.5g・鉄5.5mg・食物繊維5.9g", "1.7g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: ママの休食 公式サイト お弁当の商品ページ（2026年10月24日確認）。プレママ向け・育児ママ向け・お子さま向けは2026年4月時点、からだづくりは2024年2月時点の平均栄養価です。プレママ向けのメニューには、非加熱のチーズやハム、水銀量の多い魚などは使用していません。</p>

        <SectionHeading id="price">料金・送料（2026年10月改定後）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ママの休食は<strong>2026年10月1日決済分から価格を改定</strong>しました（公式のお知らせ「商品の価格改定に関する大切なお知らせ」）。改定前の通常価格は4食5,280円・8食10,320円・12食15,120円で、他サイトの記事にはこの改定前の価格が残っている場合があります。
        </p>

        <SubHeading>セット別の料金（税込）</SubHeading>
        <ComparisonTable
          headers={["セット", "通常購入", "定期便 初回（25%OFF）", "定期便 2回目以降（10%OFF）"]}
          rows={[
            ["4食", "5,480円（1食1,370円）", "4,110円（1食1,028円）", "4,932円（1食1,233円）"],
            ["8食", "10,720円（1食1,340円）", "8,040円（1食1,005円）", "9,648円（1食1,206円）"],
            ["12食", "15,720円（1食1,310円）", "11,790円（1食983円）", "14,148円（1食1,179円）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式サイト お弁当の商品ページ（通常購入・定期便初回の価格は購入画面の表示。2回目以降は通常価格の10%OFFで当サイトが計算。1食は円未満四捨五入）。2026年10月24日確認。送料は別途かかります。お子さま向け・からだづくりは4食セットのみです。⚠️公式トップには「定期購入4食セット 3,960円〜」の表示が残っていますが、これは改定前の価格（5,280円）の25%OFFで、商品ページの定期便初回は4,110円です。</p>

        <SubHeading>送料（クール宅急便・税込）</SubHeading>
        <ComparisonTable
          headers={["地域", "4食（60サイズ）", "8食（80サイズ）", "12食（100サイズ）"]}
          rows={[
            ["関東・中部", "858円", "913円", "1,144円"],
            ["信越・北陸・関西", "880円", "913円", "1,144円"],
            ["南東北・中国・四国", "935円", "979円", "1,199円"],
            ["北東北・九州", "990円", "1,089円", "1,298円"],
            ["北海道", "1,430円", "1,485円", "1,650円"],
            ["沖縄", "1,650円", "2,090円", "2,860円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式サイト 配送ポリシー（2026年10月24日確認）。ドーナツ・パンなど他の冷凍商品を同時に購入すると箱のサイズが変わります。</p>

        <SubHeading>送料込みの1食あたり（関東・中部の場合）</SubHeading>
        <ComparisonTable
          headers={["セット", "通常購入", "定期便 初回", "定期便 2回目以降"]}
          rows={[
            ["4食", "約1,585円", "約1,242円", "約1,448円"],
            ["8食", "約1,454円", "約1,119円", "約1,320円"],
            ["12食", "約1,405円", "約1,078円", "約1,274円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※（セット価格＋送料）÷食数で当サイトが計算（円未満四捨五入）。他の地域は上の送料表の値で計算してください。</p>

        <div className="bg-cream rounded-lg p-4 text-sm leading-relaxed mb-6">
          <p className="font-bold mb-2">定期便の条件（特定商取引法に基づく表記・2026年10月24日確認）</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>お届け間隔は7日おき・14日おき・1ヶ月に1回から選択</li>
            <li>回数の縛りはなし。停止・解約・変更は次回配送日の6営業日前までにマイページまたは公式LINEで手続き</li>
            <li>初回の注文はキャンセル不可。2回目以降は次回配送予定日の4日前に決済</li>
            <li>初回のメニューはプランごとの候補からランダム。2回目以降はマイページで選択、または「おまかせ」</li>
            <li>支払いはクレジットカード（VISA・Mastercard・JCB・AMEX）とShop Pay</li>
          </ul>
        </div>

        <SectionHeading id="good-reviews">ママの休食の良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミサイト「みん評」に投稿されたママの休食の口コミは<strong>4件</strong>（2022年12月〜2023年5月・★4が3件、★5が1件）です。これに、第三者メディア「HonNe」（株式会社EXIDEA・2026年10月2日更新）の実食レビューと、同記事が引用しているX（旧Twitter）の投稿を加えて紹介します（引用は原文ママ・2026年10月24日確認。架空の口コミは掲載していません）。
        </p>
        {goodReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="good" />
              ))}
            </div>
          </div>
        ))}

        <SubHeading>「まずい」という評判はある？</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          2026年10月24日に確認した範囲では、みん評の4件とHonNeの引用に「まずい」という投稿はありませんでした。味に関する否定的な声は「副菜の野菜がベチャッとしている」「見た目が好みではない」といった食感・見た目についてのものです（下記）。HonNeの実食レビューでは「他社と比較しても特に美味しいと感じました」と評価されています。
        </p>

        <SectionHeading id="bad-reviews">ママの休食の悪い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          否定的な意見も出典付きで掲載します。購入前に確認しておきたい点です。
        </p>
        {badReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="bad" />
              ))}
            </div>
            <div className="bg-cream rounded-lg p-3 text-sm leading-relaxed">
              <p><strong>補足：</strong>{category.note}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="merits">公式情報と口コミから分かるメリット</SectionHeading>

        {[
          { num: 1, title: "妊娠中・授乳中に意識したい栄養素をプラン別にとれる", text: "プレママ向けは平均で葉酸160.2μg・鉄5.2mg、育児ママ向けは鉄5.1mg・亜鉛3.1mg・ビタミンC56.6mgです（公式・2026年4月時点の平均）。献立を考えずに、時期に合った栄養の食事をとれます。" },
          { num: 2, title: "買い物・調理・片付けが不要", text: "容器ごと電子レンジで約5分温めるだけで、食べた後は容器を捨てるだけです。口コミでも「レンジ一つですぐにバランスの良い食事が食べられる」点が評価されています。" },
          { num: 3, title: "味の評価が高い", text: "みん評の4件はすべて★4以上で、第三者メディアの実食レビューでも「他社と比較しても特に美味しいと感じました」と評価されています。" },
          { num: 4, title: "妊娠中に避けたい食材への配慮", text: "プレママ向けは非加熱のチーズやハム、水銀量の多い魚などを使わず、チーズはすべて加熱殺菌処理済みのものを使用しています（公式FAQ）。" },
          { num: 5, title: "定期便に回数の縛りがなく、管理栄養士に無料で相談できる", text: "解約は次回配送日の6営業日前までにマイページやLINEで手続きできます。会員は公式LINE「ママ休ほけんしつ」で、管理栄養士に何度でも無料で栄養相談ができます。" },
          { num: 6, title: "出産祝いなどの贈り物にも使える", text: "公式サイトには、メッセージカードを添えたお弁当のギフトセットがあります。みん評にも、義母から贈られて利用を始めたという投稿があります。" },
        ].map((merit) => (
          <div key={merit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">{merit.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{merit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{merit.text}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="demerits">注意すべきデメリット</SectionHeading>

        {[
          { num: 1, title: "1食あたりの価格が一般的な宅配弁当の2倍以上", text: "通常購入で1食1,310〜1,370円、送料を含めると関東でも約1,405〜1,585円です。noshの1食612円〜と比べると2倍以上です。定期便の12食セットなら2回目以降は送料込みで約1,274円（関東）まで下がります。" },
          { num: 2, title: "初回はメニューを選べず、品数も大手より少ない", text: "初回はプランごとの候補からランダムに届きます。公式トップのメニュー一覧は25品（2026年10月24日・パスタやパンなどの単品を含む）で、noshの約90種類と比べると選択肢は少なめです。" },
          { num: 3, title: "食物アレルギーには非対応", text: "公式FAQでは「食物アレルギーへの対応はしておりません」とされ、重篤な症状が出る方は利用を控えるよう案内されています。気になる場合はLINE栄養相談で事前に確認してください。" },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{demerit.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{demerit.text}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="target">妊娠中・産後・授乳期の使い方</SectionHeading>

        <SubHeading>妊娠中（プレママ向け）</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          つわりで料理がつらい時期や、お腹が大きくなりキッチンに立つのが負担になる時期の備えになります。葉酸と鉄を重点にしたプランで、妊娠中に避けたい食材にも配慮されています。賞味期限が3ヶ月〜最大1年間と長いため、出産前に冷凍庫にストックしておく使い方もできます。
        </p>

        <SubHeading>産後〜授乳期（育児ママ向け）</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          育児ママ向けは、たんぱく質・鉄・亜鉛・ビタミン類を重点にしたプランです。授乳や夜泣きの対応で食事の時間が不規則になっても、冷凍のストックがあれば好きな時間に温めて食べられます。家族のサポートが得られにくい時期だけ定期便を利用し、落ち着いたら休止・解約する使い方も可能です。
        </p>

        <SubHeading>子どもと一緒に（お子さま向け）</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          成長期の子ども向けに、たんぱく質・カルシウム・鉄を重点にしたプランもあります（4食セットのみ）。公式FAQでは、咀嚼や嚥下に問題がなければ祖父母（高齢の方）も食べられると案内されています。
        </p>

        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>ママの休食がおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "妊娠中で、つわりや体調の変化で自炊がつらい人",
              "産後・授乳期で、日中ひとりで育児をする時間が長い人",
              "葉酸・鉄など、時期に合った栄養を献立を考えずにとりたい人",
              "添加物（着色料・保存料など）をできるだけ避けたい人",
              "管理栄養士に食事の相談をしながら利用したい人",
              "産後ママへの贈り物を探している家族・友人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>ママの休食をおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "1食を500〜600円台に抑えたい人（→nosh・まごころケア食）",
              "メニュー数の多さを最も重視する人（→nosh・三ツ星ファーム）",
              "食物アレルギーがあり、アレルギー対応食が必要な人",
              "冷凍庫の空きが少ない人（容器は20.5×15.5×3.6cm）",
              "高齢者向けのやわらかい食事が必要な人（→食宅便・まごころケア食）",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SectionHeading id="comparison">他の宅配弁当との比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          産後・授乳期の食事に使われることが多い宅配弁当と比較しました。
        </p>

        <ComparisonTable
          headers={["項目", "ママの休食", "nosh", "ワタミの宅食"]}
          rows={[
            ["主な対象", "妊娠中・育児中のママ", "一般・ダイエット中", "高齢者・健康志向"],
            ["栄養設計", "プラン別に葉酸・鉄・亜鉛などを重点化", "糖質30g・塩分2.5g以下", "商品ごとの基準（熱量250〜500kcal基準など）"],
            ["1食の価格", "1,310〜1,370円（通常購入・送料別）", "612円〜（6食719円〜12食612円・送料別）", "470〜790円（宅配料込み）"],
            ["内容", "ごはん＋主菜＋副菜3品", "おかずのみ", "商品により異なる"],
            ["メニュー数", "公式トップ掲載25品", "約90種類", "コース制"],
            ["冷凍/冷蔵", "冷凍", "冷凍", "冷蔵(主)/冷凍(ダイレクト)"],
            ["配送", "全国（クール宅急便）", "全国", "エリア限定(冷蔵)"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※ママの休食は2026年10月24日、noshは2026年10月21日、ワタミの宅食は2026年10月13日（冷蔵7商品の5日間コース）に各公式サイトで確認した値です。最新の情報は各公式サイトでご確認ください。</p>

        <p className="text-sm mb-6 leading-relaxed">
          産後ママ向けの宅食を幅広く比較したい方は、<Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark underline">産後ママにおすすめの宅食</Link>を、送料を含めた1食単価で比べたい方は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書</Link>をご覧ください。
        </p>

        <SectionHeading id="faq">よくある質問(FAQ)</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ:ママの休食の口コミ・評判</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">ママの休食の要点</p>
          <ComparisonTable
            headers={["項目", "内容"]}
            rows={[
              ["口コミ・評判", "味と手軽さ・栄養バランスを評価する声が中心。否定的な声は価格・量・副菜の食感"],
              ["料金", "通常1食1,310〜1,370円、定期便初回25%OFF・2回目以降10%OFF（2026年10月改定後）"],
              ["送料", "858円〜2,860円（地域・セットにより異なる）"],
              ["栄養", "プラン別。プレママ向けは葉酸160.2μg・鉄5.2mg（平均）"],
              ["解約", "回数縛りなし・次回配送日の6営業日前まで"],
            ]}
          />

          <p className="text-sm leading-relaxed mb-4">
            ママの休食は、<strong>妊娠中・育児中のママを対象に、管理栄養士と産婦人科医が監修した冷凍宅配弁当</strong>です。口コミでは味と手軽さが評価されており、「まずい」という投稿は確認できませんでした。一方で、2026年10月の改定後は通常購入で1食1,310円以上と、一般的な宅配弁当の2倍以上の価格です。
          </p>
          <p className="text-sm leading-relaxed">
            費用を抑えるなら定期便の初回25%OFFで試し、産後の特に忙しい時期だけ続けて、落ち着いたら休止する使い方が現実的です。料金・プラン詳細は変更される可能性があるため、申込前に必ず<a href="https://t.felmat.net/fmcl?ak=R4568K.1.O82687A.B1357443" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>で最新情報をご確認ください。
          </p>
        </div>

        <div className="my-6 text-center">
          <div className="hidden md:block"><a href="https://t.felmat.net/fmcl?ak=R4568K.1.082819I.B1357443" target="_blank" rel="nofollow noopener sponsored"><img src="https://t.felmat.net/fmimg/R4568K.082819I.B1357443" width={468} height={60} alt="ママの休食" style={{ border: 0, maxWidth: "100%", height: "auto" }} /></a></div>
          <div className="md:hidden"><a href="https://t.felmat.net/fmcl?ak=R4568K.1.L82817H.B1357443" target="_blank" rel="nofollow noopener sponsored"><img src="https://t.felmat.net/fmimg/R4568K.L82817H.B1357443" width={320} height={100} alt="ママの休食" style={{ border: 0, maxWidth: "100%", height: "auto" }} /></a></div>
          <p className="text-sm mt-3"><a href="https://t.felmat.net/fmcl?ak=R4568K.1.O82687A.B1357443" target="_blank" rel="nofollow noopener sponsored" className="text-accent underline">ママの休食「妊娠期のママのための冷凍お弁当」</a><img src="https://t.felmat.net/fmimp/R4568K.O82687A.B1357443" width={1} height={1} alt="" style={{ border: "none" }} /></p>
        </div>
        <CTAButton href="https://t.felmat.net/fmcl?ak=R4568K.1.O82687A.B1357443">ママの休食 公式サイトをチェック</CTAButton>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">関連記事</p>
          <Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">産後ママにおすすめの宅食</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">noshの口コミ・評判</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/mogumo-kuchikomi/" className="text-accent hover:text-accent-dark underline font-medium text-sm">モグモ（幼児食）の口コミ・評判</Link>
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

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark underline">産後ママにおすすめの宅食</Link></li>
            <li><Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent hover:text-accent-dark underline">冷凍弁当の栄養バランス</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">実質単価で比較する宅食</Link></li>
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
