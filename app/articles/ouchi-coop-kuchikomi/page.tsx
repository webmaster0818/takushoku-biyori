import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "おうちコープ夕食宅配マイシィの口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "おうちコープの夕食宅配「マイシィ」(神奈川・静岡・山梨)は「まずい」って本当？公式の利用者の声と公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。きらくコース1食税込740円〜の料金と配達料無料の仕組みも解説。最新の料金は公式でご確認ください。【2026年7月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/ouchi-coop-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "おうちコープ 夕食宅配 口コミ, マイシィ 口コミ, マイシィ 評判, おうちコープ 弁当 まずい, おうちコープ 夕食宅配 料金, 生協 夕食宅配 神奈川, ユーコープ マイシィ",
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
    question: "おうちコープの夕食宅配「マイシィ」とは？",
    answer:
      "生活協同組合ユーコープが神奈川・静岡・山梨で展開する夕食宅配サービスです。日替わりの夕食（弁当・おかず）を冷蔵で自宅まで届けてくれます。利用にはユーコープへの加入（出資金・脱退時返還）が必要です。コースは「にぎわい」「おかず」「きらく」の3種類です。",
  },
  {
    question: "マイシィの料金はいくら？",
    answer:
      "2026年7月4日に公式サイトで確認した1食あたりの税込価格は、にぎわいコース898円（おかず7〜8種）・おかずコース785円（おかず6〜7種）・きらくコース740円（おかず5〜6種＋ご飯付き）です。2食以上の注文で1食20円引きになります。最新の価格は公式サイトでご確認ください。",
  },
  {
    question: "マイシィの配達料はかかる？",
    answer:
      "夕食宅配マイシィは「配達料無料」と公式に明記されています（2026年7月4日確認）。なお、通常の週1回宅配「おうちコープ」は別体系で、神奈川県の場合は週110〜198円（利用額により変動・14,000円以上で0円、子育て割0円など減免あり）です。",
  },
  {
    question: "おうちコープのおためしはある？",
    answer:
      "夕食宅配とは別に、神奈川・静岡・山梨在住の未利用者限定で「おためしワンコイン！時短料理」セット（6品・約2,000円相当が税込500円・1世帯1回限り）が提供されています（2026年7月4日確認）。マイシィ自体の最低利用日数や休止条件は公開ページで確認できなかったため、加入前に問い合わせで確認するのが確実です。",
  },
  {
    question: "マイシィはまずい？味の評判は？",
    answer:
      "公開レビューを調査した範囲では「まずい」と断じる声は確認できず、「味付けが工夫されていて飽きない」「品数が多くヘルシー」という好意的な評価が中心でした。一方で「かなりの薄味だった」（春雨サラダ）「魚だけはイマイチ」という率直な指摘もあり、薄味設計が合うかどうかで評価が分かれます。",
  },
];

/* ---------- Helper Components ---------- */

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
          <span className="text-foreground/70">口コミ・評判</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">おうちコープ夕食宅配マイシィの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "おうちコープの夕食宅配「マイシィ」とは？基本情報" },
    { id: "good-reviews", label: "良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "マイシィはまずい？味の評判を検証" },
    { id: "price", label: "料金・配達料・利用条件を徹底解説" },
    { id: "merits", label: "口コミから分かるメリット4つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
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

type SourcedReviewItem = {
  text: string;
  meta?: string;
  sourceName: string;
  sourceUrl: string;
};

function SourcedReview({
  review,
  tone,
}: {
  review: SourcedReviewItem;
  tone: "good" | "bad";
}) {
  return (
    <div
      className={`${tone === "good" ? "bg-green-50" : "bg-red-50"} rounded-lg p-3 text-sm leading-relaxed`}
    >
      <p className="mb-1.5">
        「{review.text}」{review.meta ? `（${review.meta}）` : ""}
      </p>
      <p className="text-xs text-warm-gray">
        出典:{" "}
        <a
          href={review.sourceUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline hover:text-accent"
        >
          {review.sourceName}
        </a>
      </p>
    </div>
  );
}

/* ---------- Review data（公開レビューからの引用・出典明記） ---------- */

const goodReviewCategories: {
  title: string;
  reviews: SourcedReviewItem[];
}[] = [
  {
    title: "品数が多くヘルシー・産後や一人暮らしの支えに（公式の利用者の声）",
    reviews: [
      {
        text: "品数が多く、バランスが良くて野菜がたっぷりで、ヘルシーな夕食ですね。おかげで、母乳の出が良く、ベビーは母乳のみで1日約40グラム増えて、発育も順調で大助かりです。",
        meta: "マイシィ公式サイト掲載の利用者の声・神奈川県30代女性",
        sourceName: "マイシィ公式サイト",
        sourceUrl: "https://www.maici.coop/",
      },
      {
        text: "副菜も自分では作れないようなバラエティー豊かなものばかり。お魚を食べていると、においに誘われて猫達が寄ってきて、一人の晩御飯もマイシィのおかげで楽しくいただいています。",
        meta: "マイシィ公式サイト掲載の利用者の声・神奈川県40代女性",
        sourceName: "マイシィ公式サイト",
        sourceUrl: "https://www.maici.coop/",
      },
    ],
  },
  {
    title: "味・栄養バランスへの評価（第三者レビュー）",
    reviews: [
      {
        text: "楽だしうまいし栄養バランスも考えられてるし本当助かります",
        meta: "記事内掲載のSNS投稿",
        sourceName: "宅食まにあ",
        sourceUrl: "https://home-gohan.net/maici/",
      },
      {
        text: "７～８品目のおかずの味付けが工夫されていて飽きない",
        meta: "管理栄養士による実食レビュー",
        sourceName: "食材宅配ナビ",
        sourceUrl: "https://syokutaku-navi.com/maici/",
      },
      {
        text: "黒胡椒がピリッと効いていて、美味しいです。",
        meta: "実食レビュー",
        sourceName: "宅食まにあ",
        sourceUrl: "https://home-gohan.net/maici/",
      },
    ],
  },
];

const badReviewCategories: {
  title: string;
  reviews: SourcedReviewItem[];
  comment: string;
}[] = [
  {
    title: "薄味・メニューによる当たり外れ",
    reviews: [
      {
        text: "味は可もなく不可もなく、普通に美味しいというのが正直な感想です。ただ唯一魚だけは、イマイチかなという思いがしました",
        meta: "記事掲載の利用者口コミ",
        sourceName: "全力宅食",
        sourceUrl: "https://shoku.zenhp.co.jp/maisii.html",
      },
      {
        text: "かなりの薄味でした。",
        meta: "春雨サラダについての実食レビュー",
        sourceName: "宅食まにあ",
        sourceUrl: "https://home-gohan.net/maici/",
      },
      {
        text: "ドレッシングが付いていないのは、少し残念でしたね。",
        meta: "実食レビュー",
        sourceName: "宅食まにあ",
        sourceUrl: "https://home-gohan.net/maici/",
      },
    ],
    comment:
      "マイシィは高齢者を含む幅広い世代向けの薄味・家庭的な献立設計です。「味付けが工夫されていて飽きない」という評価と「かなりの薄味」という指摘が併存しており、メニューや個人の好みによる差があります。濃い味に慣れている人は、物足りなさを感じる可能性を織り込んでおきましょう。",
  },
];

/* ---------- Page Component ---------- */

export default function OuchiCoopKuchikomiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-07-04T00:00:00+09:00",
    dateModified: "2026-07-04T00:00:00+09:00",
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
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://takushoku-biyori.com/",
      },
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      {
        "@type": "ListItem",
        position: 3,
        name: "おうちコープ夕食宅配マイシィの口コミ・評判",
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        {/* Title */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
              口コミ・評判
            </span>
            <span className="text-[10px] text-gray-400">PR掲載も含みます</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-07-04">公開: 2026年7月4日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>{" "}
              /{" "}
              <Link href="/author/" className="text-accent hover:underline">
                編集部メンバー
              </Link>
            </span>
          </div>
        </header>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「おうちコープの夕食宅配って実際どうなの？」「マイシィはまずいって本当？」——マイシィは、生協ユーコープが<strong>神奈川・静岡・山梨</strong>で展開する夕食宅配サービス。日替わりの夕食を<strong>配達料無料</strong>で自宅まで届けてくれます。
          </p>
          <p className="mb-3">
            この記事では、<strong>公式サイトの利用者の声と、公開されている第三者レビューを出典付きで整理</strong>し、良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>3コースの料金（1食税込740円〜）・配達料無料の仕組み・おためし情報</strong>まで、2026年7月4日に公式サイトで確認した情報をもとに解説します。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：マイシィはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            マイシィは、<strong>「神奈川・静岡・山梨で、冷蔵の夕食を配達料なしで毎日届けてほしい人」</strong>に向いたサービスです。口コミでは「品数が多くヘルシー」「味付けが工夫されていて飽きない」という評価が目立つ一方、薄味・魚メニューの好みなどの指摘もあります。「まずい」と断じる声は調査した範囲では確認できませんでした（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>おかず5〜8種の品数と栄養バランス</li>
                <li>配達料無料・2食以上で1食20円引き</li>
                <li>産後・高齢世帯・一人暮らしの支えになる</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>エリアが神奈川・静岡・山梨のみ</li>
                <li>薄味設計で濃い味好みには物足りない場合も</li>
                <li>生協（ユーコープ）への加入が必要</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://www.maici.coop/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            マイシィ公式サイトで最新のコース・料金を見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">おうちコープの夕食宅配「マイシィ」とは？基本情報</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          マイシィ（Maici）は、生活協同組合ユーコープが運営する<strong>夕食宅配サービス</strong>です。おうちコープ（週1回の食材宅配）と同じユーコープのサービスですが、マイシィは<strong>日替わりの夕食（おかず・弁当）を冷蔵で毎日届ける</strong>のが特徴。神奈川・静岡・山梨の3県で展開されており、利用にはユーコープへの加入（出資金・脱退時返還）が必要です。
        </p>

        <SubHeading>基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営", "生活協同組合ユーコープ"],
            ["サービス名", "夕食宅配マイシィ（Maici）"],
            ["エリア", "神奈川県・静岡県・山梨県"],
            ["お届け", "日替わりの夕食を冷蔵で配達（不在時は保冷ボックス等で対応）"],
            ["配達料", "無料"],
            ["利用条件", "ユーコープへの加入（出資金・脱退時返還）"],
            ["割引", "2食以上の注文で1食20円引き"],
            ["献立", "日替わり（メニュー選択は不可）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: マイシィ公式サイト・おうちコープ公式サイト（2026年7月4日確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>コース一覧（1食あたり税込・2026年7月4日確認）</SubHeading>
        <ComparisonTable
          headers={["コース", "1食あたり（税込）", "内容"]}
          rows={[
            ["にぎわいコース", "898円", "おかず7〜8種の充実コース"],
            ["おかずコース", "785円", "おかず6〜7種の定番コース"],
            ["きらくコース", "740円", "おかず5〜6種＋ご飯付き"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          いずれも2食以上の同時注文で<strong>1食20円引き</strong>になります。夫婦2人での利用や、家族の分をまとめて頼む場合に単価が下がる仕組みです。18社の送料込み実質単価は
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">
            宅食料金白書2026
          </Link>
          で比較できます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: マイシィ公式サイト（2026年7月4日確認）。
        </p>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">マイシィの良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          マイシィ公式サイトの「利用者の声」と、第三者メディアの実食レビューから、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示。公式掲載の声はその旨を明記しています）。
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
        <p className="text-xs text-warm-gray mb-6">
          ※公式サイト掲載の「利用者の声」は運営側が選んで掲載しているため、好意的な内容に偏る点は割り引いてお読みください。
        </p>

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">マイシィの悪い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ネガティブな意見も出典付きで正直に紹介します。加入前に知っておくべき注意点です。
        </p>

        {badReviewCategories.map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <SourcedReview key={i} review={review} tone="bad" />
              ))}
            </div>
            <div className="bg-cream rounded-lg p-4 text-sm leading-relaxed">
              <p className="font-bold mb-1">編集部の見解</p>
              <p>{category.comment}</p>
            </div>
          </div>
        ))}

        {/* ===== まずい検証 ===== */}
        <SectionHeading id="mazui">マイシィはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「おうちコープ 弁当 まずい」「マイシィ まずい」と検索されることがあります。編集部が取得できた公開レビューの範囲では、<strong>マイシィを「まずい」と断じる引用は確認できませんでした</strong>。実際に見つかった否定的評価は次の2系統です。
        </p>

        <SubHeading>否定的評価の実体は「薄味」と「魚メニューの好み」</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 薄味設計が物足りなく感じられる</p>
            <p className="mb-1.5">
              実食レビューでは春雨サラダについて「かなりの薄味でした。」という率直な指摘があります。幅広い世代向けの<strong>塩分・健康配慮の薄味設計</strong>のため、濃い味に慣れた人は最初は物足りなく感じる可能性があります。同じレビュアーは別メニューについて「黒胡椒がピリッと効いていて、美味しいです。」とも書いており、メニューによる差があるのが実態です。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://home-gohan.net/maici/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                宅食まにあ
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 全体は「普通に美味しい」で、魚メニューに好みが分かれる</p>
            <p className="mb-1.5">
              利用者口コミには「味は可もなく不可もなく、普通に美味しいというのが正直な感想です。ただ唯一魚だけは、イマイチかなという思いがしました」という声があります。<strong>全体評価は「普通に美味しい」で、特定ジャンル（魚）に好みの差が出る</strong>という、日替わり型宅配食に典型的なパターンです。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://shoku.zenhp.co.jp/maisii.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                全力宅食
              </a>
            </p>
          </div>
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」という強い酷評は確認できず。薄味への好みが評価の分かれ目</p>
          <p>
            管理栄養士の実食レビューが「７～８品目のおかずの味付けが工夫されていて飽きない」と評価する通り、品数と味付けの工夫はマイシィの強みです。一方で薄味・家庭的な献立という性格上、外食系の濃い味を求める人には合いません。冷蔵で毎日届く形式は味の劣化が少なく、「冷凍弁当の食感が苦手」な人にはむしろ有力な選択肢です。
          </p>
        </div>

        {/* ===== 料金・配達料 ===== */}
        <SectionHeading id="price">料金・配達料・利用条件を徹底解説</SectionHeading>

        <SubHeading>かかる費用は「商品代のみ」</SubHeading>
        <p className="text-sm mb-2 leading-relaxed">
          マイシィは<strong>配達料無料</strong>と公式に明記されているため（2026年7月4日確認）、支払いは商品代のみです。きらくコース（740円・ご飯付き）を週5日×4週利用した場合の月額目安は約14,800円。2食以上の注文なら1食20円引きが毎回効きます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※参考: 週1回宅配の「おうちコープ」は別体系（神奈川県の宅配サービス料は週110円〜198円・利用額による減免、子育て割0円等あり）。マイシィのみの利用なら配達料はかかりません。
        </p>

        <SubHeading>利用条件・おためし</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["加入", "ユーコープへの加入が必要（出資金・脱退時返還）"],
            ["対象", "神奈川・静岡・山梨在住の組合員"],
            ["おためし", "「おためしワンコイン！時短料理」6品・税込500円（1世帯1回・未利用者限定）※夕食宅配とは別商品"],
            ["休止・解約", "公開ページに詳細記載なし。加入前に問い合わせで確認を推奨"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: マイシィ公式サイト・おうちコープ公式サイト（2026年7月4日確認）。最低利用日数・休止条件は公開ページで確認できなかったため、正確な条件は加入前にユーコープへご確認ください。
        </p>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット4つ</SectionHeading>

        {[
          {
            num: 1,
            title: "おかず5〜8種の品数の多さと栄養バランス",
            text: "「品数が多く、バランスが良くて野菜がたっぷりで、ヘルシー」（公式利用者の声）、「副菜も自分では作れないようなバラエティー豊かなものばかり」という評価の通り、自炊では揃えにくい品目数が最大の強みです。",
          },
          {
            num: 2,
            title: "配達料無料で1食740円〜・2食以上で割引",
            text: "毎日届けてもらえるのに配達料は無料。にぎわい898円・おかず785円・きらく740円（税込・2026年7月4日確認）で、2食以上なら1食20円引き。冷蔵の毎日配達型としては手頃な水準です。",
          },
          {
            num: 3,
            title: "産後・高齢世帯・一人暮らしの食事の支えになる",
            text: "公式の利用者の声には産後の母親の「発育も順調で大助かり」という声や、一人暮らしの「マイシィのおかげで楽しくいただいています」という声が掲載されており、調理が難しい時期・世帯の支えとして機能しています。",
          },
          {
            num: 4,
            title: "冷蔵配達で冷凍弁当が苦手な人にも合う",
            text: "冷凍ではなく冷蔵の日替わり夕食のため、解凍による食感の変化がありません。「楽だしうまいし栄養バランスも考えられてる」という声の通り、味と手軽さの両立を評価する口コミが目立ちます。",
          },
        ].map((merit) => (
          <div key={merit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {merit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{merit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{merit.text}</p>
            </div>
          </div>
        ))}

        {/* ===== デメリット ===== */}
        <SectionHeading id="demerits">注意すべきデメリット3つ</SectionHeading>

        {[
          {
            num: 1,
            title: "エリアが神奈川・静岡・山梨に限定",
            text: "ユーコープの事業エリア外では利用できません。関東の他県ならコープデリの夕食宅配（デイリーコープ）、全国なら冷凍宅配弁当が代替になります。",
          },
          {
            num: 2,
            title: "生協加入が必要・メニューは選べない",
            text: "利用にはユーコープへの加入（出資金）が必要です。献立は日替わりでメニュー選択はできないため、好き嫌いが多い人には向きません。",
          },
          {
            num: 3,
            title: "薄味設計が合わない人もいる",
            text: "「かなりの薄味でした」という実食の指摘の通り、健康配慮の薄味が物足りない人もいます。濃い味重視ならnoshのような選択型冷凍弁当の方が満足度が高いでしょう。",
          },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {demerit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{demerit.text}</p>
            </div>
          </div>
        ))}

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>マイシィがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "神奈川・静岡・山梨在住で冷蔵の夕食宅配を探している人",
              "産後・子育て中で夕食作りの負担を減らしたい人",
              "高齢の家族に栄養バランスの良い夕食を届けたい人",
              "冷凍弁当の食感が苦手な人",
              "配達料なしで毎日届けてほしい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>マイシィをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "神奈川・静岡・山梨以外に住んでいる人 → コープデリ（関東信越）や全国配送の冷凍弁当がおすすめ",
              "自分でメニューを選びたい人 → nosh・食宅便がおすすめ",
              "濃い味・ボリューム重視の人",
              "生協加入の手続きを避けたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：マイシィはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            おうちコープの夕食宅配マイシィは、<strong>「冷蔵×毎日配達×配達料無料」</strong>を神奈川・静岡・山梨で提供する、生協ならではの夕食宅配です。口コミでは品数の多さ・栄養バランス・「飽きない味付け」への評価が目立ち、「まずい」と断じる声は調査した範囲では確認できませんでした。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            否定的評価の実体は薄味への好みと魚メニューの当たり外れで、健康配慮設計とのトレードオフです。<strong>エリア限定・生協加入・メニュー選択不可という条件</strong>は事前に理解しておきましょう。
          </p>
          <p className="text-sm leading-relaxed">
            エリア内にお住まいなら、公式サイトでコースと配達可否を確認し、まずは少ない日数から試して生活リズムに合うか確かめるのがおすすめです。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/coopdeli-kuchikomi/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            コープデリ夕食宅配の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/sango-osusume/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            産後ママ向け宅配弁当のおすすめ
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/takushoku-ryokin-hakusho/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            宅食料金白書2026
          </Link>
        </div>

        {/* Author info */}
        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">
              編
            </div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">
                宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。
              </p>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/articles/coopdeli-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                コープデリ夕食宅配(舞菜)の口コミ・評判
              </Link>
            </li>
            <li>
              <Link href="/articles/coopdeli-vs-palsystem/" className="text-accent hover:text-accent-dark transition-colors">
                コープデリとパルシステムの違いを徹底比較
              </Link>
            </li>
            <li>
              <Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                産後ママにおすすめの宅配弁当・宅食
              </Link>
            </li>
            <li>
              <Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                高齢者向け宅配弁当おすすめランキング
              </Link>
            </li>
            <li>
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の実質単価を一次調査
              </Link>
            </li>
            <li>
              <Link href="/articles/kyoudoki-yushoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">
                共働き世帯向けの夕食宅配ガイド
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
