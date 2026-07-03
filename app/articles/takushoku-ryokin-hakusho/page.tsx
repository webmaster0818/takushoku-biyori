import type { Metadata } from "next";
import Link from "next/link";
import hakusho from "@/data/ryokin-hakusho-2026-07.json";

const ARTICLE_TITLE =
  "宅食料金白書2026｜18社の料金・送料・1食あたり実質単価を正規化比較【7月調査】";
const ARTICLE_DESCRIPTION =
  "宅配弁当・宅食18社の料金・送料・初回割引・解約条件を全て公式サイトで直接確認し、「(料金+送料)÷食数」の1食実質単価に正規化して比較した独自調査データ（2026年7月4日確認）。送料の地域差・定期縛り・違約金も一覧化。出典明記での引用歓迎。最新の金額は各公式サイトでご確認ください。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/takushoku-ryokin-hakusho/";
const VERIFIED_DATE = "2026年7月4日";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅食 料金 比較, 宅配弁当 料金 一覧, 宅配弁当 送料 比較, 宅食 1食あたり 値段, 宅配弁当 実質単価, 宅食 白書, 宅配弁当 解約金, 宅配弁当 定期縛り",
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

/* ---------- 料金データ（data/ryokin-hakusho-2026-07.json から機械計算） ---------- */

type Plan = {
  plan_name: string;
  meals: number | null;
  price_jpy: number | null;
  note?: string;
};
type Shipping = {
  type: string;
  representative_jpy: number | null;
  temperature: string;
  note: string;
};
type Brand = {
  slug: string;
  name: string;
  plans: Plan[];
  shipping: Shipping;
  first_discount: string | null;
  subscription: string;
  cancel_note: string | null;
  verified_at: string;
  verified: boolean;
  notes?: string;
};

const BRANDS = hakusho.brands as unknown as Brand[];

// 代表プラン = 各ブランドの基準プラン（原則 plans[0]）。
// ワタミの宅食ダイレクトのみ、plans[0] が1回限りのお試し価格のため通常プラン（plans[1]）を採用。
const REP_PLAN_INDEX: Record<string, number> = { "watami-direct": 1 };

// 実質単価を「−」表示にするブランドと、その理由（欠損の推測埋めはしない）
const MISSING_REASON: Record<string, string> = {
  yoshikei:
    "通常コースが週替わりメニュー・地域会社別価格のため、全国共通の税込価格が公式サイトに非掲載。お試し5daysは1食300円（配達料無料）",
  "green-spoon":
    "食数別の税込合計額が公式サイトで直接確認できず（メニュー単品ごとの価格制のため）",
  "chef-muten-tsukurioki":
    "プラン料金は確認済み（食卓サポートプラン5,173円・送料990円）だが、人数×食数の内訳が公式サイトで画像掲載のため1食換算が不可",
  "watami-direct":
    "通常セットの食数別税込価格が公式サイトのJS描画のため未取得。お試し割（10食3,900円）は1回限りの特別価格のため比較対象外",
  "fit-food-home":
    "単品×個数割引方式で固定セット価格がなく、送料全額を単品1個に負担させる計算は実態と乖離するため対象外（単品1,129円〜＋都度送料990円）",
};

// 表示用の短縮ラベル（数値はすべて上記JSONの記載から。要約のみ）
const DISPLAY: Record<
  string,
  {
    reviewHref?: string;
    shippingLabel: string;
    discountLabel: string;
    lockLabel: string;
    unitNote?: string;
  }
> = {
  nosh: {
    reviewHref: "/articles/nosh-reviews/",
    shippingLabel: "1,166円（関東・6食）",
    discountLabel: "初回〜3回目で計3,000円OFF",
    lockLabel: "なし",
    unitNote: "全国11エリア別送料。関東の8・10食は1,386円",
  },
  "mitsuboshi-farm": {
    reviewHref: "/articles/mitsuboshi-farm-reviews/",
    shippingLabel: "990円（全国一律）",
    discountLabel: "14食・21食は初回送料無料",
    lockLabel: "プランによる（最大12回）",
    unitNote: "北海道・沖縄・一部離島は2,500円",
  },
  "magokoro-care-shoku": {
    reviewHref: "/articles/magokoro-care-reviews/",
    shippingLabel: "980円（全国一律）",
    discountLabel: "初回限定1食190円（対象セット）",
    lockLabel: "明記なし",
    unitNote: "沖縄・離島は1,480円",
  },
  "wellness-dining": {
    reviewHref: "/articles/wellness-dining-reviews/",
    shippingLabel: "880円（都度）",
    discountLabel: "初回はどの食数でも送料無料",
    lockLabel: "なし",
    unitNote: "定期は14食・21食送料無料／7食440円",
  },
  yoshikei: {
    reviewHref: "/articles/yoshikei-reviews/",
    shippingLabel: "0円（自社配達）",
    discountLabel: "お試し5days＝1食300円",
    lockLabel: "なし（週単位の都度注文）",
  },
  shokutakubin: {
    reviewHref: "/articles/shokutakubin-reviews/",
    shippingLabel: "940円（定期）",
    discountLabel: "現行の初回割引表記なし",
    lockLabel: "明記なし",
    unitNote: "都度便は1,330円",
  },
  "tsukurioki-jp": {
    shippingLabel: "0円（送料込み価格）",
    discountLabel: "クーポンで初回4,000円OFF（4人前×週3食）",
    lockLabel: "なし",
    unitNote: "冷蔵配送・2人前×3食分＝6食として換算",
  },
  "green-spoon": {
    shippingLabel: "990円（北海道・沖縄除く）",
    discountLabel: "12食セットお試し最大33%OFF",
    lockLabel: "なし（初回分キャンセル不可）",
  },
  "chef-muten-tsukurioki": {
    reviewHref: "/articles/chef-mutenka-tsukurioki-kuchikomi/",
    shippingLabel: "990円（全プラン共通）",
    discountLabel: "初回割引＋初回送料無料",
    lockLabel: "なし",
  },
  lifemeal: {
    reviewHref: "/articles/lifemeal-kuchikomi/",
    shippingLabel: "980円（沖縄以外）",
    discountLabel: "初回10食1,900円（1食190円）",
    lockLabel: "なし（初回分キャンセル不可）",
    unitNote: "沖縄は1,480円",
  },
  "watami-takushoku": {
    reviewHref: "/articles/watami-reviews/",
    shippingLabel: "0円（宅配料込み）",
    discountLabel: "初回1週分割引（例: おかず3,450円→2,760円）",
    lockLabel: "なし（週単位注文）",
  },
  "watami-direct": {
    reviewHref: "/articles/watami-direct-otameshi/",
    shippingLabel: "880円（本州・四国・九州）",
    discountLabel: "お試し割10食3,900円／継続割 計2,400円OFF",
    lockLabel: "継続割は定期3回以上",
    unitNote: "北海道1,210円・沖縄2,420円",
  },
  coopdeli: {
    shippingLabel: "0円（配達手数料無料）",
    discountLabel: "おためしセットあり（金額は申込フォーム内のみ）",
    lockLabel: "週3日以上・自動継続",
  },
  "ouchi-coop": {
    shippingLabel: "0円（配達料無料）",
    discountLabel: "おためし500円（対象地域・1世帯1回）",
    lockLabel: "−（公式公開ページで確認できず）",
  },
  "tsurukame-kitchen": {
    reviewHref: "/articles/tsurukame-reviews/",
    shippingLabel: "770円（都度）",
    discountLabel: "定期28%OFF（初回から適用）",
    lockLabel: "なし",
    unitNote: "定期コースは送料無料",
  },
  medimeal: {
    shippingLabel: "880円（都度）",
    discountLabel: "初回送料無料",
    lockLabel: "なし",
    unitNote: "初回・定期便は送料無料",
  },
  // 注: マッスルデリ（muscle-deli-reviews）は別サービスのため口コミ記事リンクなし
  "kinnikushokudo-deli": {
    shippingLabel: "1,640円（関東・7食）",
    discountLabel: "公式サイト上の初回割引表記なし",
    lockLabel: "なし",
    unitNote: "地域・食数で変動。沖縄は3,190円〜",
  },
  "fit-food-home": {
    shippingLabel: "990円（都度）",
    discountLabel: "−（公式で数値確認できず）",
    lockLabel: "なし（定期初回キャンセル不可）",
    unitNote: "定期は送料無料。北海道+550円・沖縄+1,100円",
  },
};

const yen = (n: number) => n.toLocaleString("ja-JP");
const calcUnit = (price: number, ship: number, meals: number) =>
  Math.round((price + ship) / meals);

type Row = {
  brand: Brand;
  plan: Plan;
  unit: number | null;
  missingReason?: string;
};

const rows: Row[] = BRANDS.map((brand) => {
  const plan = brand.plans[REP_PLAN_INDEX[brand.slug] ?? 0];
  const ship = brand.shipping.representative_jpy;
  const missingReason = MISSING_REASON[brand.slug];
  const unit =
    !missingReason && plan.price_jpy != null && plan.meals != null && ship != null
      ? calcUnit(plan.price_jpy, ship, plan.meals)
      : null;
  return { brand, plan, unit, missingReason };
});

// 実質単価の昇順（計算不能な社は末尾・JSON掲載順）
const ranked = [...rows].sort(
  (a, b) => (a.unit ?? Infinity) - (b.unit ?? Infinity)
);

const unitOf = (slug: string): number | null =>
  rows.find((r) => r.brand.slug === slug)?.unit ?? null;
const brandOf = (slug: string): Brand =>
  BRANDS.find((b) => b.slug === slug) as Brand;

// 大容量プラン（食数を増やした場合）の実質単価。plans のインデックスは JSON 掲載順
const BULK_PLANS: { slug: string; planIndex: number; note: string }[] = [
  {
    slug: "magokoro-care-shoku",
    planIndex: 2,
    note: "21食セット（定期・お得便）",
  },
  { slug: "mitsuboshi-farm", planIndex: 2, note: "よりどりプラン21食コース" },
  { slug: "tsurukame-kitchen", planIndex: 2, note: "21食（定期コース価格）" },
  { slug: "lifemeal", planIndex: 2, note: "20食セット（定期）" },
  { slug: "nosh", planIndex: 2, note: "10食プラン" },
];

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "「1食実質単価」とはどんな指標？",
    answer:
      "「(代表プランの税込料金＋代表送料)÷食数」で計算した、送料込みの1食あたり負担額です。宅配弁当は本体価格が安く見えても送料で逆転することが多いため、送料を含めて正規化しています。数値はすべて2026年7月4日に各社公式サイトで直接確認した金額から機械的に計算しており、比較サイトからの転記はありません。料金・送料は改定されることがあるため、最新は各公式サイトでご確認ください。",
  },
  {
    question: "送料込みで一番安い宅配弁当はどこ？",
    answer:
      "今回計算できた13社の中では、まごころケア食（7食・定期）が送料込み1食566円で最安でした。次いでワタミの宅食のまごころ手鞠が1食590円（宅配料込み）、ライフミール（7食・定期）が1食660円です。ただしまごころケア食は21食セットにすると1食441円まで下がるなど、食数によって順位は変わります。2026年7月4日確認時点の計算であり、最新の価格は各公式サイトでご確認ください。",
  },
  {
    question: "送料無料（送料込み）の宅食サービスはどこ？",
    answer:
      "自社配送で送料がかからないのは、ワタミの宅食・ヨシケイ・コープデリ（夕食宅配）・おうちコープ（夕食宅配マイシィ）です。ツクリオ（旧つくりおき.jp）は表示価格が送料込みです。また、Dr.つるかめキッチンとメディミールは定期便なら送料無料、ウェルネスダイニングは定期の14食・21食で送料無料になります（2026年7月4日確認時点）。",
  },
  {
    question: "定期縛りや解約金がある宅食サービスは？",
    answer:
      "今回調査した18社の大半は回数縛り・解約金なしですが、例外があります。三ツ星ファームの長期継続応援プランは合計6回未満の解約で手数料7,700円、冷凍庫プレゼントプランは12回縛りで途中解約16,500円がかかります（通常のよりどりプランは縛りなし）。ワタミの宅食ダイレクトの継続割は定期3回以上の受け取りが条件です。また、GREEN SPOON・ライフミール・FIT FOOD HOME（定期）は初回購入分のキャンセルができません。契約前に各公式サイトで最新の解約条件をご確認ください。",
  },
];

/* ---------- Helper Components ---------- */

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">比較・データ</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">宅食料金白書2026</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "methodology", label: "調査方法（全18社を公式サイトで直接確認）" },
    { id: "main-table", label: "18社比較表：料金・送料・1食実質単価" },
    { id: "distribution", label: "実質単価の分布と読み方" },
    { id: "bulk", label: "食数を増やすと単価はどこまで下がるか" },
    { id: "shipping-trap", label: "送料の罠：地域差・冷凍冷蔵・定期条件" },
    { id: "cancel-lock", label: "解約縛り・違約金の注意まとめ" },
    { id: "rebrand", label: "2026年のリブランド・名称変更情報" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "citation", label: "本白書の引用について" },
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
        <thead>
          <tr className="bg-accent/10">
            {headers.map((h) => (<th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (<td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>))}
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

/* ---------- Page Component ---------- */

export default function TakushokuRyokinHakushoPage() {
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
      { "@type": "ListItem", position: 2, name: "比較・データ" },
      { "@type": "ListItem", position: 3, name: "宅食料金白書2026" },
    ],
  };

  const magokoro21 = brandOf("magokoro-care-shoku").plans[2];
  const mitsuboshiChoki21 = brandOf("mitsuboshi-farm").plans[4];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">独自調査データ</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-07-04">公開: 2026年7月4日</time>
            <time dateTime="2026-07-04">更新: 2026年7月4日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            宅配弁当の料金比較で一番よくある失敗は、<strong>「本体価格だけを見て選ぶ」</strong>ことです。1食500円台に見えても、送料を足すと900円を超えるサービスは珍しくありません。
          </p>
          <p className="mb-3">
            本白書では、宅食・宅配弁当<strong>18社の料金・送料・初回割引・解約条件を、すべて各社公式サイトで直接確認</strong>（確認日: {VERIFIED_DATE}）。「(代表プラン料金＋送料)÷食数」で<strong>1食あたりの実質単価に正規化</strong>して横並び比較しました。
          </p>
          <p>
            公式サイトから確認できなかった数値は、推測で埋めずに「−」として理由を明記しています。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 調査方法 ===== */}
        <SectionHeading id="methodology">調査方法（全18社を公式サイトで直接確認）</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-2">
          <li><strong>調査対象:</strong> 宅配弁当・宅食（冷凍弁当・冷蔵惣菜・夕食宅配・ミールキット）18ブランド</li>
          <li><strong>確認日:</strong> {VERIFIED_DATE}（本ページの全数値はこの日の公式サイト掲載額・税込）</li>
          <li><strong>情報源:</strong> 各社公式サイトのみを直接確認。<strong>比較サイト・まとめ記事からの転記は一切していません</strong></li>
          <li><strong>実質単価の計算式:</strong> (代表プランの税込料金＋代表送料)÷食数。送料は各社の代表値（地域別の場合は関東など公式の代表表記）を採用し、送料無料・配達料込みのサービスは0円として計算</li>
          <li><strong>代表プラン:</strong> 各社の基準となる最小〜標準プラン（1回限りのお試し特価は比較対象から除外）</li>
          <li><strong>欠損の扱い:</strong> 公式サイトで直接確認できなかった数値は推測せず「−」とし、理由を明記</li>
        </ul>
        <p className="text-xs text-warm-gray mb-6">
          ※料金・送料・キャンペーンは改定されることがあります。契約前には必ず各公式サイトで最新の金額をご確認ください。評価の考え方は<Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link>もご覧ください。
        </p>

        {/* ===== メイン比較表 ===== */}
        <SectionHeading id="main-table">18社比較表：料金・送料・1食実質単価（安い順）</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          1食実質単価（送料込み）の安い順に並べています。ブランド名のリンクから各社の詳細記事に移動できます。
        </p>
        <div className="table-wrapper mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                {["サービス", "代表プラン（税込）", "食数", "送料（代表）", "1食実質単価", "初回割引", "定期縛り"].map((h) => (
                  <th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ranked.map((row, i) => {
                const d = DISPLAY[row.brand.slug];
                return (
                  <tr key={row.brand.slug} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium whitespace-nowrap">
                      {d?.reviewHref ? (
                        <Link href={d.reviewHref} className="text-accent hover:text-accent-dark underline">{row.brand.name}</Link>
                      ) : (
                        row.brand.name
                      )}
                    </td>
                    <td className="border border-warm-border px-3 py-2">
                      {row.plan.plan_name}
                      {row.plan.price_jpy != null && <span className="whitespace-nowrap"> {yen(row.plan.price_jpy)}円</span>}
                      {row.plan.price_jpy == null && <span className="text-warm-gray"> 価格未掲載</span>}
                    </td>
                    <td className="border border-warm-border px-3 py-2 whitespace-nowrap">{row.plan.meals != null ? `${row.plan.meals}食` : "−"}</td>
                    <td className="border border-warm-border px-3 py-2">{d?.shippingLabel ?? "−"}</td>
                    <td className="border border-warm-border px-3 py-2 whitespace-nowrap">
                      {row.unit != null ? (
                        <strong className="text-accent">{yen(row.unit)}円</strong>
                      ) : (
                        <span className="text-warm-gray">−<span className="text-[10px] align-super">※</span></span>
                      )}
                    </td>
                    <td className="border border-warm-border px-3 py-2">{d?.discountLabel ?? "−"}</td>
                    <td className="border border-warm-border px-3 py-2">{d?.lockLabel ?? "−"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          ※全数値は{VERIFIED_DATE}に各社公式サイトで直接確認した税込価格です。料金・送料は改定されることがあるため、最新は各公式サイトでご確認ください。送料は地域により異なる場合があります（詳細は「送料の罠」参照）。
        </p>
        <div className="bg-cream rounded-lg p-4 text-xs text-warm-gray leading-relaxed mb-6">
          <p className="font-bold text-foreground mb-2">※「−」（実質単価を計算していない5社）の理由</p>
          <ul className="space-y-1.5 list-disc list-inside">
            {rows.filter((r) => r.missingReason).map((r) => (
              <li key={r.brand.slug}><strong className="text-foreground">{r.brand.name}:</strong> {r.missingReason}</li>
            ))}
          </ul>
        </div>
        <div className="bg-cream rounded-lg p-4 text-xs text-warm-gray leading-relaxed mb-6">
          <p className="font-bold text-foreground mb-2">補足（表の実質単価が変わる条件）</p>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>Dr.つるかめキッチンは定期コースなら送料無料のため、定期継続時は1食{yen(Math.round((brandOf("tsurukame-kitchen").plans[0].price_jpy as number) / 7))}円になります（表は都度送料770円で計算）。</li>
            <li>メディミールは初回・定期便が送料無料のため、その場合は1食{yen(Math.round((brandOf("medimeal").plans[0].price_jpy as number) / 7))}円になります（表は都度送料880円で計算）。</li>
            <li>ウェルネスダイニングの定期は7食で送料440円（1食{yen(calcUnit(brandOf("wellness-dining").plans[0].price_jpy as number, 440, 7))}円）、14食・21食は送料無料になります。</li>
            <li>ツクリオは2人前×3食＝6食分として換算しています（おかずのセットで1人前1食分あたりの価格）。</li>
            <li>コープデリ・おうちコープの夕食宅配は1食単位の定期（週3日以上等の条件あり）で、2食以上の注文で1食あたり割引があります。</li>
          </ul>
        </div>

        {/* ===== 分布と読み方 ===== */}
        <SectionHeading id="distribution">実質単価の分布と読み方</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          計算できた13社の送料込み実質単価は、<strong>1食{yen(unitOf("magokoro-care-shoku") as number)}円〜{yen(unitOf("tsukurioki-jp") as number)}円</strong>と2倍以上の開きがありました。価格帯ごとに整理すると次のようになります。
        </p>
        <ComparisonTable
          headers={["価格帯", "サービス（実質単価）", "傾向"]}
          rows={[
            [
              "500円台",
              `まごころケア食（${yen(unitOf("magokoro-care-shoku") as number)}円）、ワタミの宅食・まごころ手鞠（${yen(unitOf("watami-takushoku") as number)}円）`,
              "量産型の健康弁当・自社配送。コンビニ弁当と同水準",
            ],
            [
              "600〜700円台",
              `ライフミール（${yen(unitOf("lifemeal") as number)}円）、コープデリ舞菜おかず（${yen(unitOf("coopdeli") as number)}円）`,
              "低価格帯。生協は配達手数料無料が効く",
            ],
            [
              "800円台",
              `食宅便（${yen(unitOf("shokutakubin") as number)}円）、ウェルネスダイニング（${yen(unitOf("wellness-dining") as number)}円）、Dr.つるかめキッチン（${yen(unitOf("tsurukame-kitchen") as number)}円）、メディミール（${yen(unitOf("medimeal") as number)}円）、おうちコープ（${yen(unitOf("ouchi-coop") as number)}円）`,
              "制限食・栄養管理系の主戦場",
            ],
            [
              "900円〜1,000円台",
              `nosh（${yen(unitOf("nosh") as number)}円）、三ツ星ファーム（${yen(unitOf("mitsuboshi-farm") as number)}円）`,
              "味・メニュー選択重視の人気2強。少食数だと送料負担が重い",
            ],
            [
              "1,300円超",
              `筋肉食堂DELI（${yen(unitOf("kinnikushokudo-deli") as number)}円）、ツクリオ（${yen(unitOf("tsukurioki-jp") as number)}円）`,
              "高タンパク特化・冷蔵の手作り惣菜など付加価値特化型",
            ],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          読み方の注意点は2つあります。第一に、この表は<strong>各社の「最小〜標準プラン」での比較</strong>です。多くのサービスは食数を増やすと単価が下がるため、順位は食数によって入れ替わります（次のセクション参照）。第二に、価格帯が違うサービスは<strong>提供価値も違います</strong>。たとえばツクリオは冷凍弁当ではなく冷蔵の手作り惣菜（2〜4人前）、筋肉食堂DELIは高タンパク特化で、500円台の弁当と同じ土俵の商品ではありません。「安い順＝おすすめ順」ではない点にご注意ください。
        </p>

        {/* ===== 食数と単価 ===== */}
        <SectionHeading id="bulk">食数を増やすと単価はどこまで下がるか</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          送料は食数が増えてもほぼ一定のため、まとめ買いするほど1食あたりの送料負担が薄まります。代表例を最小プランと大容量プランで比較しました（いずれも送料込み・{VERIFIED_DATE}確認）。
        </p>
        <div className="table-wrapper mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                {["サービス", "最小プラン実質単価", "大容量プラン", "大容量時の実質単価"].map((h) => (
                  <th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BULK_PLANS.map((bp, i) => {
                const brand = brandOf(bp.slug);
                const plan = brand.plans[bp.planIndex];
                const unit =
                  plan.price_jpy != null && plan.meals != null && brand.shipping.representative_jpy != null
                    ? calcUnit(plan.price_jpy, brand.shipping.representative_jpy, plan.meals)
                    : null;
                return (
                  <tr key={bp.slug} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium whitespace-nowrap">{brand.name}</td>
                    <td className="border border-warm-border px-3 py-2 whitespace-nowrap">{unitOf(bp.slug) != null ? `${yen(unitOf(bp.slug) as number)}円` : "−"}</td>
                    <td className="border border-warm-border px-3 py-2">{bp.note}（{plan.price_jpy != null ? `${yen(plan.price_jpy)}円` : "−"}）</td>
                    <td className="border border-warm-border px-3 py-2 whitespace-nowrap">{unit != null ? <strong className="text-accent">{yen(unit)}円</strong> : "−"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-4">
          ※noshの関東送料は8・10食で1,386円のため、10食の実質単価は{yen(calcUnit(brandOf("nosh").plans[2].price_jpy as number, 1386, 10))}円になります（表は代表送料1,166円で計算）。Dr.つるかめキッチンは定期なら送料無料でさらに下がります。三ツ星ファームの14食・21食は初回送料無料です。
        </p>
        <p className="text-sm mb-6 leading-relaxed">
          まごころケア食は21食セットで<strong>1食{yen(calcUnit(magokoro21.price_jpy as number, 980, magokoro21.meals as number))}円</strong>まで下がり、今回の調査で最も安い水準でした。また三ツ星ファームには長期継続応援プラン21食（{yen(mitsuboshiChoki21.price_jpy as number)}円＋送料）という選択肢もありますが、後述の<a href="#cancel-lock" className="text-accent hover:underline">解約縛り</a>とセットなので注意が必要です。冷凍庫の容量が許すなら、大容量プランを選ぶのが送料負担を下げる最短ルートです。
        </p>

        {/* ===== 送料の罠 ===== */}
        <SectionHeading id="shipping-trap">送料の罠：地域差・冷凍冷蔵・定期条件で大きく変わる</SectionHeading>

        <SubHeading>罠1: 「地域別送料」は北海道・沖縄で跳ね上がる</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          冷凍宅配弁当はクール便で届くため送料が高く、しかも地域差が大きいのが特徴です。{VERIFIED_DATE}確認時点の公式表記では次の通りです。
        </p>
        <ComparisonTable
          headers={["サービス", "本州（代表）", "北海道・沖縄など"]}
          rows={[
            ["nosh", "1,166円（関東・6食）", "全国11エリア別（8・10食の関東は1,386円）"],
            ["三ツ星ファーム", "990円（全国一律）", "北海道・沖縄・一部離島 2,500円"],
            ["まごころケア食", "980円（全国一律）", "沖縄・離島 1,480円"],
            ["ライフミール", "980円（沖縄以外）", "沖縄 1,480円"],
            ["ワタミの宅食ダイレクト", "880円（本州・四国・九州）", "北海道 1,210円／沖縄 2,420円"],
            ["筋肉食堂DELI", "1,640円（関東・7食）", "沖縄 3,190円〜4,180円"],
            ["FIT FOOD HOME", "990円（都度）", "北海道 +550円／沖縄 +1,100円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          特に沖縄・北海道にお住まいの場合、送料だけで1回2,000円を超えるサービスがあります。たとえば三ツ星ファーム7食を沖縄で頼むと、送料2,500円を含めて1食あたり{yen(calcUnit(brandOf("mitsuboshi-farm").plans[0].price_jpy as number, 2500, 7))}円になり、関東（{yen(unitOf("mitsuboshi-farm") as number)}円）より1食200円以上高くなります。
        </p>

        <SubHeading>罠2: 冷蔵・自社配送型は「送料0円」だがエリアと条件が限られる</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          ワタミの宅食（宅配料込み）・ヨシケイ（配達料無料）・コープデリ／おうちコープの夕食宅配（手数料無料）は、自社スタッフが冷蔵で毎日届けるため送料がかかりません。ただし、<strong>対応エリアが限られる・週単位や「週3日以上」等の注文条件がある・毎日受け取りが発生する</strong>という制約とセットです。おうちコープの夕食宅配は神奈川・静岡・山梨限定です。「送料無料だから安い」だけでなく、生活スタイルに合うかで選ぶ必要があります。
        </p>

        <SubHeading>罠3: 「定期なら送料無料」の条件を見落とさない</SubHeading>
        <ComparisonTable
          headers={["サービス", "都度注文の送料", "定期の送料"]}
          rows={[
            ["Dr.つるかめキッチン", "770円（全国一律）", "無料（定期コース）"],
            ["メディミール", "880円", "無料（初回・定期便）"],
            ["ウェルネスダイニング", "880円", "14食・21食は無料／7食は440円"],
            ["FIT FOOD HOME", "990円", "無料（定期配送）"],
            ["食宅便", "1,330円（都度便）", "940円（らくらく定期便）"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          制限食系のサービスは「定期にすると送料が消える」設計が多く、都度注文と定期で実質単価が1食100円前後変わります。逆にnosh・三ツ星ファーム・筋肉食堂DELIは<strong>定期でも送料がなくなりません</strong>。送料を含めた総額で比較しないと、本体価格の安さに騙されることになります。
        </p>

        {/* ===== 解約縛り ===== */}
        <SectionHeading id="cancel-lock">解約縛り・違約金の注意まとめ</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          今回調査した18社の大半は「回数縛りなし・解約金なし」ですが、<strong>割引と引き換えに縛りが発生するプラン</strong>がいくつかあります。{VERIFIED_DATE}時点の公式表記で特に注意したいのは次の5つです。
        </p>
        <ComparisonTable
          headers={["サービス・プラン", "縛りの内容", "違約金・条件"]}
          rows={[
            ["三ツ星ファーム 長期継続応援プラン", "合計6回以上の継続約束", "6回未満の途中解約で手数料7,700円"],
            ["三ツ星ファーム 冷凍庫プレゼントプラン", "12回縛り", "途中解約16,500円"],
            ["ワタミの宅食ダイレクト 継続割", "定期3回以上の受け取り", "初回から3回分 各800円OFF（計2,400円OFF）の適用条件"],
            ["GREEN SPOON／ライフミール", "縛りなし", "ただし初回購入分の解約・キャンセルは不可"],
            ["FIT FOOD HOME（定期）", "縛りなし", "定期の初回キャンセル不可（2回目以降は違約金なし）"],
          ]}
        />
        <p className="text-sm mb-4 leading-relaxed">
          三ツ星ファームの通常の「よりどりプラン」には縛りはありません。縛りがあるのは、単価を下げる代わりに継続を約束する長期継続応援プラン・冷凍庫プレゼントプランだけです。<strong>「1食603円」など安い方の表示価格はこの縛り付きプランの価格</strong>であることが多いので、申込前にどのプランかを必ず確認しましょう。詳細は<Link href="/articles/mitsuboshi-cancel/" className="text-accent hover:underline">三ツ星ファームの解約方法まとめ</Link>も参考にしてください。
        </p>
        <SubHeading>縛りはなくても「解約期限」はある</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          解約金がないサービスでも、手続き期限を過ぎると次回分が発送されてしまいます。公式表記のある主な期限は以下の通りです。
        </p>
        <ComparisonTable
          headers={["サービス", "解約・変更の期限（公式表記）"]}
          rows={[
            ["まごころケア食", "次回お届け6日前の16時までにマイページで手続き"],
            ["Dr.つるかめキッチン", "次回お届け予定日の6日前までに連絡"],
            ["メディミール", "お届け7日前までの連絡"],
            ["筋肉食堂DELI", "次回お届け予定日の7日前までにマイページから停止"],
            ["ウェルネスダイニング", "お届け予定日の1週間前までに連絡"],
            ["ワタミの宅食", "お届け日2日前の17時まで（受付は平日9〜17時）"],
            ["ツクリオ", "配達前週の水曜日中までにLINEでキャンセル"],
            ["コープデリ（夕食宅配）", "前週の火曜19時30分まで（期限後キャンセルは原則不可）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※おうちコープ（夕食宅配マイシィ）の解約期限は公式公開ページで確認できませんでした。ワタミの宅食ダイレクトの通常定期の解約期限も公式FAQから取得できていません。いずれも申込前に各公式サイト・窓口でご確認ください。
        </p>

        {/* ===== リブランド情報 ===== */}
        <SectionHeading id="rebrand">2026年のリブランド・名称変更情報</SectionHeading>
        <div className="bg-cream rounded-xl p-5 mb-6 text-sm leading-relaxed">
          <p className="mb-3">
            <strong>「つくりおき.jp」は2026年3月16日に「ツクリオ（Tsuklio）」へ名称変更</strong>されました（運営: Antway社。プレスリリースおよび新旧両公式サイトで確認済み）。本白書では新名称「ツクリオ」で掲載しています。旧名称で検索した場合も同一サービスです。
          </p>
          <p className="text-xs text-warm-gray">
            このほか、noshの送料表は2025年5月1日改訂版、GREEN SPOONの送料は2025年9月改定後の金額を採用しています（いずれも{VERIFIED_DATE}時点の公式掲載）。
          </p>
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (<FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />))}
        </div>

        {/* ===== 引用について ===== */}
        <SectionHeading id="citation">本白書の引用について</SectionHeading>
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white text-sm leading-relaxed">
          <p className="mb-3">
            本白書のデータ・図表は、<strong>出典を明記していただければ、メディア・ブログ・SNS等で自由に引用いただけます</strong>（連絡不要）。すべて公式サイト一次確認のデータのため、二次情報の孫引きよりも正確な引用元としてご活用ください。
          </p>
          <div className="bg-cream rounded-lg p-4 text-xs mb-3">
            <p className="font-bold mb-1">引用時の出典表記例</p>
            <p>出典: 宅食びより「宅食料金白書2026」（{ARTICLE_URL}）</p>
          </div>
          <p className="text-xs text-warm-gray">
            ※数値は{VERIFIED_DATE}時点の各社公式サイト確認値です。引用の際は確認日の併記をおすすめします。データに関するお問い合わせ・訂正のご指摘も歓迎します。
          </p>
        </div>

        {/* ===== 関連記事 ===== */}
        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">各サービスの詳細記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark transition-colors">まごころケア食の口コミ・評判（実質単価最安）</Link></li>
            <li><Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食の口コミ・評判（宅配料込み1食590円〜）</Link></li>
            <li><Link href="/articles/lifemeal-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ライフミールの口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の口コミ・評判</Link></li>
            <li><Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームの口コミ・評判</Link></li>
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">ウェルネスダイニングの口コミ・評判</Link></li>
            <li><Link href="/articles/yoshikei-reviews/" className="text-accent hover:text-accent-dark transition-colors">ヨシケイの口コミ・評判</Link></li>
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">食宅便の口コミ・評判</Link></li>
            <li><Link href="/articles/tsurukame-reviews/" className="text-accent hover:text-accent-dark transition-colors">Dr.つるかめキッチンの口コミ・評判</Link></li>
            <li><Link href="/articles/watami-direct-otameshi/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食ダイレクトのお試し割まとめ</Link></li>
            <li><Link href="/articles/chef-mutenka-tsukurioki-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">シェフの無添つくりおきの口コミ・評判</Link></li>
            <li><Link href="/articles/jisshitsu-tanka-hikaku/" className="text-accent hover:text-accent-dark transition-colors">送料込みの実質単価比較（考え方の解説）</Link></li>
            <li><Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark transition-colors">送料が安い宅配弁当ランキングTOP10</Link></li>
          </ul>
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
      </article>
    </>
  );
}
