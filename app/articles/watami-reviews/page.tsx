import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ワタミの宅食の口コミ・評判は？まずいって本当？まごころ商品の料金・配送を出典付きで検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "ワタミの宅食は「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。冷蔵（まごころおかず/手鞠/御膳/ダブル）の料金（1食税込470円〜・宅配料込み）と冷凍（ワタミの宅食ダイレクト）の違いも解説。最新の料金は公式でご確認ください。【2026年7月更新】";
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
    modifiedTime: "2026-07-04T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "ワタミの宅食とワタミの宅食ダイレクトの違いは？",
    answer:
      "「ワタミの宅食」は冷蔵のお弁当・お惣菜を毎日自社スタッフが届けるサービスです。「ワタミの宅食ダイレクト」は冷凍のおかずセットを宅配便で届けるサービスです。冷蔵タイプは宅配料込み価格・毎日届く温かみがありますが、配送エリアが限定されます。冷凍タイプは全国配送可能でストックできますが、送料（本州・四国・九州で税込880円〜）がかかります。",
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
      "冷蔵タイプ（ワタミの宅食）は週単位の注文で定期縛りがなく、追加・変更・キャンセルはお届け日2日前の17時まで受け付けられています（2026年7月4日公式確認）。冷凍タイプ（ダイレクト）は都度購入と定期購入があり、継続割などのキャンペーン適用時は受け取り回数の条件が付く場合があります。正確な解約条件は公式サイトでご確認ください。",
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
    { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "ワタミの宅食はまずい？味の評判を検証" },
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

type SourcedReviewItem = {
  text: string;
  meta?: string;
  sourceName: string;
  sourceUrl: string;
};

function SourcedReview({ review, tone }: { review: SourcedReviewItem; tone: "good" | "bad" }) {
  return (
    <div className={`${tone === "good" ? "bg-green-50" : "bg-red-50"} rounded-lg p-3 text-sm leading-relaxed`}>
      <p className="mb-1.5">
        「{review.text}」{review.meta ? `（${review.meta}）` : ""}
      </p>
      <p className="text-xs text-warm-gray">
        出典:{" "}
        <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">
          {review.sourceName}
        </a>
      </p>
    </div>
  );
}

export default function WatamiReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: ARTICLE_TITLE, description: ARTICLE_DESCRIPTION, url: ARTICLE_URL,
    datePublished: "2026-04-21T00:00:00+09:00", dateModified: "2026-07-04T00:00:00+09:00",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"\u30ef\u30bf\u30df\u306e\u5b85\u98df\u306e\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}]}" }}
      />
      

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time>
            <time dateTime="2026-07-04">更新: 2026年7月4日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">「ワタミの宅食って実際どうなの？」「ひどいって口コミは本当？」——病院・介護施設向け給食で培ったノウハウを活かし、一般家庭にも宅配弁当を届けるワタミの宅食。</p>
          <p className="mb-3">この記事では、<strong>ワタミの宅食の口コミ・評判を徹底リサーチ</strong>。冷蔵タイプ（まごころおかず・手鞠・ダブル）と冷凍タイプ（ワタミの宅食ダイレクト）の違いも詳しく解説します。</p>
          <p>料金プラン・送料・配送方法・メリット・デメリットまで、<strong>この記事を読めばワタミの宅食が自分に合うかどうか判断できます</strong>。</p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：ワタミの宅食はこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            ワタミの宅食は、<strong>「宅配料込みの価格で、冷蔵のお弁当・お惣菜を毎日届けてほしい人」「高齢の家族の見守りを兼ねたい人」</strong>に向いたサービスです。口コミでは「出汁が染みて美味しい」「塩分控えめでも味がしっかり」という評価が目立つ一方、薄味・量の少なさは好みが分かれます。「まずい」という評判の実態も出典付きで検証します（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm leading-relaxed mb-4">
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p><ul className="space-y-1 list-disc list-inside"><li>業界最大手ならではの安心感と豊富な実績</li><li>まごころスタッフの毎日手渡し配達＋見守り</li><li>1食470円〜（宅配料込み）と手頃な価格</li></ul></div>
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-warm-gray mb-2">△ 注意したい点</p><ul className="space-y-1 list-disc list-inside"><li>日替わり献立でメニューは選べない</li><li>配達エリアが一部地域に限定される</li><li>味は控えめで、好みによっては薄いと感じることも</li></ul></div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ワタミの宅食 公式サイトで最新の料金・初回割引を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
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
            ["配送", "冷蔵：自社スタッフが毎日お届け / 冷凍：宅配便"],
            ["送料", "冷蔵：宅配料込み価格 / 冷凍：本州・四国・九州880円（税込）"],
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
            ["配送方法", "自社スタッフ（まごころスタッフ）", "宅配便（冷凍便）"],
            ["配送頻度", "毎日（月〜金 or 月〜土）", "まとめて1回配送"],
            ["送料", "宅配料込み価格", "本州・四国・九州880円、北海道1,210円、沖縄2,420円（税込）"],
            ["ご飯の有無", "ご飯付きコースあり", "おかずのみ"],
            ["保存期間", "当日〜翌日", "冷凍で約10ヶ月"],
            ["配送エリア", "一部エリア限定", "全国（離島除く）"],
            ["安否確認", "あり（まごころスタッフが毎日訪問）", "なし"],
          ]}
        />

        <SubHeading>冷蔵タイプのコース一覧（週5日コース・税込・宅配料込み）</SubHeading>
        <ComparisonTable
          headers={["コース名", "週5日コース料金", "1食あたり"]}
          rows={[
            ["まごころ小箱（小）", "2,350円", "470円"],
            ["まごころ手鞠", "2,950円", "590円"],
            ["まごころ小箱", "3,100円", "620円"],
            ["まごころおかず", "3,450円", "690円"],
            ["まごころ御膳", "3,550円", "710円"],
            ["まごころダブル", "3,950円", "790円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-4">※出典: ワタミの宅食公式サイト（2026年7月4日確認）。価格には宅配料を含みます。週7日間コース・曜日指定コース（週1〜4日は1食＋40円）もあり、地域により価格が異なる場合があります。</p>

        <p className="text-sm mb-6 leading-relaxed">冷蔵タイプの最大の特徴は<strong>まごころスタッフによる毎日配送</strong>です。配送時に安否確認も行ってくれるため、一人暮らしの高齢者のご家族が「見守り」目的で利用するケースも多いです。初めての方・6ヵ月以上お休みした方向けに<strong>初回1週分の割引（例: まごころおかず3,450円→2,760円）</strong>が実施されています（2026年7月4日確認・1世帯1回限り・土日祝分対象外）。正確な料金は公式サイトで郵便番号を入力して確認してください。</p>

        <SubHeading>冷凍タイプ（ダイレクト）の料金目安</SubHeading>
        <ComparisonTable
          headers={["コース名", "内容", "価格の目安（税込）"]}
          rows={[
            ["お試し割: いつでも三菜10食", "主菜1品＋副菜2品", "3,900円（1食390円・1回限り）"],
            ["いつでも三菜（通常/定期）", "主菜1品＋副菜2品", "1食あたり399円〜（公式参考表記）"],
            ["いつでも五菜（通常/定期）", "主菜1品＋副菜4品", "1食あたり499円〜（公式参考表記）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: ワタミの宅食ダイレクト公式サイト（2026年7月4日確認）。詳しくは<Link href="/articles/watami-direct-kuchikomi/" className="underline hover:text-accent">ワタミの宅食ダイレクトの口コミ・評判</Link>で解説しています。</p>

        <SectionHeading id="good-reviews">良い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公開されている第三者メディアの実食レビュー・利用者アンケート・掲載SNS投稿から、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示）。</p>
        {[
          {
            title: "味が美味しい・やさしい味付け",
            reviews: [
              { text: "出汁が染みていて美味しかったです", meta: "編集部が「まごころおかず」5食を実食したレビュー", sourceName: "HonNe（EXIDEA運営）", sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku/" },
              { text: "塩分控えめなのに味はしっかり付いてて夫『美味しいよ〜』", meta: "記事内掲載のSNS投稿", sourceName: "HonNe（EXIDEA運営）", sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku/" },
              { text: "お試しでワタミの宅食頼んでみたけど、すっごく美味しい", meta: "記事内掲載のSNS投稿", sourceName: "HonNe（EXIDEA運営）", sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku/" },
            ] as SourcedReviewItem[],
          },
          {
            title: "手軽さ・栄養バランス・生活の変化",
            reviews: [
              { text: "手軽に利用でき、美味しくて栄養のある食事がとれるところが魅力的。メニューの種類が豊富。", meta: "利用者アンケート・20代女性", sourceName: "OZmall", sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40175/" },
              { text: "野菜や魚など健康的なメニューで量も丁度よく、ゴミ類が減った。", meta: "利用者アンケート・60代男性", sourceName: "OZmall", sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40175/" },
            ] as SourcedReviewItem[],
          },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">
              {cat.reviews.map((r, i) => (
                <SourcedReview key={i} review={r} tone="good" />
              ))}
            </div>
          </div>
        ))}

        <SectionHeading id="bad-reviews">悪い口コミ・評判（出典付き）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ネガティブな意見も出典付きで正直に紹介します。申し込み前に知っておくべき注意点です。</p>
        {[
          {
            title: "味が薄い・高齢者向けの味付けに感じる",
            reviews: [
              { text: "味薄すぎて美味しくない", meta: "記事内掲載のSNS投稿", sourceName: "HonNe（EXIDEA運営）", sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku/" },
              { text: "主に高齢者向けと言うのもあってか、量は少なく味は薄い", meta: "記事内掲載のSNS投稿", sourceName: "HonNe（EXIDEA運営）", sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/watami-takushoku/" },
            ] as SourcedReviewItem[],
          },
          {
            title: "価格・ボリュームへの不満",
            reviews: [
              { text: "価格が高めで、ボリュームが物足りない。", meta: "利用者アンケート・20代女性", sourceName: "OZmall", sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40175/" },
              { text: "唯一苦手なおかずです(笑)味付けはおいしいですが、冷凍ごぼうと人参の食感は独特のものがあり、いつまでたっても慣れません。。", meta: "「まごころおかず」金平ごぼうの実食レビュー", sourceName: "mituhosi.com（実食レビューブログ）", sourceUrl: "https://mituhosi.com/blogs/home-delivery/wataminotakusyoku-magokorookazu" },
            ] as SourcedReviewItem[],
          },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">
              {cat.reviews.map((r, i) => (
                <SourcedReview key={i} review={r} tone="bad" />
              ))}
            </div>
          </div>
        ))}

        <SectionHeading id="mazui">ワタミの宅食はまずい？味の評判を検証</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">「ワタミの宅食 まずい」と検索されることがあります。公開レビューを確認すると、<strong>「まずい」という強い酷評は少数派で、実体は「薄味の好み」と「一部食材の食感」に分解できる</strong>のが実態でした。</p>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 「まずい」の噂と実食のギャップ</p>
            <p className="mb-1.5">
              まごころおかずを実食したレビューブログは「ところが世間の口コミ評価は「まずい」「ひどい」がとても多く、これでは注文するのが不安になります。」と噂に触れた上で、結論として<strong>「世間の口コミや評価には「まずい」「ひどい」というものが多いですが、このコスパでこれだけのおかずが食べられたら大満足できます。」</strong>と評価しています。具体的に苦手とされたのは冷凍ごぼう・人参の食感（金平ごぼう）という特定食材でした。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a href="https://mituhosi.com/blogs/home-delivery/wataminotakusyoku-magokorookazu" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">mituhosi.com</a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 塩分控えめの設計が濃い味好みには「薄い」と感じられる</p>
            <p className="mb-1.5">
              「味薄すぎて美味しくない」という投稿がある一方、「塩分控えめなのに味はしっかり付いてて夫『美味しいよ〜』」という真逆の声もあります。病院・介護施設向け給食のノウハウを土台にした<strong>健康配慮の薄味設計そのものが、評価の分かれ目</strong>です。濃い味・ジャンクな味を求める人には合いません。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a href="https://exidea.co.jp/blog/meal/home-meal/watami-takushoku/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-accent">HonNe</a>
            </p>
          </div>
        </div>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は①薄味の好み②特定食材の食感が主因</p>
          <p>実食レビューでは「出汁が染みていて美味しかった」という評価が中心で、酷評は薄味の好みと一部食材（冷凍根菜の食感など）に集中しています。塩分控えめのやさしい味付けを求める人・高齢の家族向けなら満足度は高く、濃い味重視なら他サービスが向いています。初回1週分の割引で実際に味を確かめてから続けるのが確実です。</p>
        </div>

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
            { href: "/articles/nosh-vs-watami/", label: "nosh（ナッシュ）とワタミの宅食を徹底比較" },
            { href: "/articles/yoshikei-vs-watami/", label: "ヨシケイとワタミの宅食を徹底比較" },
            { href: "/articles/jisshitsu-tanka-hikaku/", label: "実質単価で比較！宅配弁当のコスパ" },
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
      
        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約。メニューにより変動があるため、各サービスの平均的レンジを記載。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link> 参照。
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
                <tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">nosh（ナッシュ）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">599-748</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">三ツ星ファーム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">25以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">626-842</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウェルネスダイニング</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-300</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">12-18</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">663-880</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://magokoro-care-shoku.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">まごころケア食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-350</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">462-580</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワタミの宅食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">40-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">3.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">590-680</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://shoutakubin.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">食宅便</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">560-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">Muscle Deli</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-60</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,098-1,490</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">597-750</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.5</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">550-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.pal-system.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">パルシステム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">580-720</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ナッシュclub（割引）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">499-624</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">つるかめキッチン</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">13</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">660-815</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://1meal.life/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワンミール</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">770-840</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://fitfoodhome.tabeyoukai.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">FIT FOOD HOME</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">750-1,080</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://gofood.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">GOFOOD</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">898-1,148</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※2026年5月時点の公開データ。最新情報は各公式サイトでご確認ください。</p>
        </section>

        </article>
    </>
  );
}
