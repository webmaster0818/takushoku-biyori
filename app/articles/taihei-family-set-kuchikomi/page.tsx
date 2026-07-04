import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "タイヘイファミリーセットの口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "タイヘイファミリーセットは「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。1880年創業の老舗タイヘイの宅配健康食の料金（ヘルシー御膳1食税込775円〜）、送料（定期は全国無料）、制限食コースも解説。最新の料金は公式でご確認ください。【2026年7月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/taihei-family-set-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "タイヘイ ファミリーセット 口コミ, タイヘイ 宅配弁当 評判, タイヘイ ファミリーセット まずい, ヘルシー御膳 口コミ, タイヘイ 料金, タイヘイ 送料, 制限食 宅配, 宅配弁当 口コミ",
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
    question: "タイヘイファミリーセットに糖質・塩分制限のコースはある？",
    answer:
      "あります。糖質を抑えた「ヘルシー御膳 糖質少なめセット」（1食税込783円〜）のほか、塩分はヘルシー御膳が2.2g以下、彩ごころが1.3g以下、たんぱく調整食が2.0g以下という設計です。ヘルシー御膳は糖尿病専門医による設計と管理栄養士の献立作成で作られています。数値基準の最新情報は公式サイトでご確認ください。",
  },
  {
    question: "タイヘイファミリーセットの送料は？無料になる条件は？",
    answer:
      "定期・継続購入なら全国どこでも配送料無料です。都度購入の場合は地域により冷凍・冷蔵で税込715円〜1,760円（関東715円/関西825円/九州1,155円/沖縄1,760円など）かかりますが、同一温度帯のみ・本体価格合計5,400円以上（常温は3,240円以上）・同日時指定などの条件を満たすと都度でも送料無料になります。最新の条件は公式サイトでご確認ください。",
  },
  {
    question: "タイヘイファミリーセットにお試しセットはある？",
    answer:
      "公式サイトのヘルシー御膳ページに、ヘルシー御膳おかず3食＋彩ごころ3食の「お試しセット6食4,280円（税込・1食あたり約713円）」が用意されています（2026年7月確認時点）。定期契約なしで味とボリュームを確かめられるので、初めての方はここから始めるのが安心です。",
  },
  {
    question: "タイヘイファミリーセットの支払い方法は？",
    answer:
      "クレジットカード（VISA/MASTER/JCB/AMEX/Diners、手数料無料・一括のみ）またはヤマト便の代金引換（手数料330円）が利用できます。公式サイトのお支払い方法ページに詳細が記載されています。",
  },
  {
    question: "タイヘイファミリーセットの配達方法は？解約はどうする？",
    answer:
      "ヤマト運輸での配送で、冷凍・冷蔵商品はクール便で届きます。時間帯指定が可能で、不在時は再配達を依頼できます。定期購入はマイページからスキップでき、変更・キャンセルは次回お届け日の5営業日前までです。完全な解約は電話（フリーダイヤル）での手続きになります。",
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
          <span className="text-foreground">タイヘイファミリーセットの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "タイヘイファミリーセットとは？基本情報まとめ" },
    { id: "good-reviews", label: "タイヘイファミリーセットの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "タイヘイファミリーセットの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "タイヘイファミリーセットはまずい？味の評判を検証" },
    { id: "merits", label: "口コミから分かるメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "タイヘイファミリーセットの料金・送料を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "ウェルネスダイニング・Dr.つるかめキッチンとの簡易比較" },
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
    title: "味付け・ボリュームに満足という声",
    reviews: [
      {
        text: "チキンが柔らかく、香ばしい醤油のタレ味がしっかりと聞いていて美味しかった",
        meta: "40代女性の口コミ",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/138918/",
      },
      {
        text: "思いのほか使いやすく、味も美味しくて、ボリュームも満足しています",
        meta: "20代男性の口コミ",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/138918/",
      },
      {
        text: "肉じゃがが印象的で、味つけや、ボリュームに非常に満足",
        meta: "30代男性の口コミ",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/138918/",
      },
    ],
  },
  {
    title: "栄養バランス・冷凍のストック性が便利",
    reviews: [
      {
        text: "色どり、栄養にも考えられていて、頼みたいときに気軽に頼める",
        meta: "利用者の口コミ",
        sourceName: "シニアのあんしん相談室 宅配ごはん案内",
        sourceUrl: "https://gohan.soudan-anshin.com/service/691/review/",
      },
      {
        text: "冷凍で持ってきてくださるので、急に外出したときも腐らせることがないので安心",
        meta: "利用者の口コミ",
        sourceName: "シニアのあんしん相談室 宅配ごはん案内",
        sourceUrl: "https://gohan.soudan-anshin.com/service/691/review/",
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
    title: "薄味・健康的な味付けが濃い味好みに合わない",
    reviews: [
      {
        text: "全体的に健康的な味で濃い目が好きな私には合わなかった",
        meta: "20代男性の口コミ",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/138918/",
      },
    ],
    comment:
      "ヘルシー御膳は塩分2.2g以下、彩ごころは1.3g以下という制限食設計のため、外食や市販弁当の濃い味に慣れていると薄く感じやすいのは事実です。健康管理が目的のサービスなので、味の濃さを求める人には構造的に合いません。逆に「減塩なのにしっかり味」という実食評価もあり、感じ方には個人差があります。",
  },
  {
    title: "価格の割に量が物足りないという声",
    reviews: [
      {
        text: "お値段の割には味は相応とは言い難く、量も物足りない",
        meta: "利用者の口コミ",
        sourceName: "シニアのあんしん相談室 宅配ごはん案内",
        sourceUrl: "https://gohan.soudan-anshin.com/service/691/review/",
      },
      {
        text: "お試しセットの方が美味しかった",
        meta: "定期利用者の口コミ",
        sourceName: "シニアのあんしん相談室 宅配ごはん案内",
        sourceUrl: "https://gohan.soudan-anshin.com/service/691/review/",
      },
    ],
    comment:
      "ヘルシー御膳はおかずのみで200kcal前後の設計なので、食べ盛りの世代や男性にはご飯を足す前提で考える必要があります。実食レビューでも「20代男性にはご飯が欲しい」という評価があり、カロリー制限食としては標準的な量ですが、ボリューム重視なら「ごはん付き御膳」（440kcal前後）を選ぶか、他社の一般食を検討しましょう。",
  },
];

/* ---------- Page Component ---------- */

export default function TaiheiFamilySetKuchikomiPage() {
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
        name: "タイヘイファミリーセットの口コミ・評判",
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
            「タイヘイファミリーセットって実際どうなの？」「まずいって口コミは本当？」——1880年（明治13年）創業の老舗タイヘイが手がける宅配健康食「ファミリーセット」。1972年に企画が始まり、1974年から全国展開してきた宅配食の草分け的存在です。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー・口コミを出典付きで整理</strong>し、タイヘイファミリーセットの良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>ヘルシー御膳・彩ごころなどコース別の料金・送料（定期は全国無料）・制限食の設計</strong>まで詳しく解説。タイヘイファミリーセットが自分や家族に合うかどうか、この記事で判断できます。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：タイヘイファミリーセットはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            タイヘイファミリーセットは、<strong>「医師・管理栄養士監修の制限食を、定期の送料無料で続けたい人」</strong>に向いた宅配健康食です。口コミでは「味付けやボリュームに満足」「栄養が考えられていて気軽に頼める」という評価がある一方、制限食設計ゆえの薄味・量の控えめさは注意点として挙がっています。「まずい」という声の実態は薄味・量への評価が中心で、感じ方には個人差があります（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>糖尿病専門医設計＋管理栄養士献立の制限食</li>
                <li>定期・継続購入は全国送料無料</li>
                <li>ソフト食・たんぱく調整など7系統のコース</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>制限食設計で薄味・量控えめに感じる人も</li>
                <li>都度購入は送料715円〜（地域別）</li>
                <li>完全解約は電話手続きのみ</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://www.familyset.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            タイヘイファミリーセット公式サイトで最新の料金・コースを見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">タイヘイファミリーセットとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          タイヘイファミリーセットは、タイヘイ株式会社（1880年創業・本社千葉県匝瑳市）が運営する宅配健康食サービスです。醤油醸造から始まった食品の老舗で、公式沿革によると1972年に「ファミリーセット」の企画を開始し、1974年に全国展開をスタート。<strong>50年以上の歴史を持つ宅配食の草分け</strong>です。現在はカロリー・塩分を抑えた冷凍弁当「ヘルシー御膳」を中心に、ソフト御膳・たんぱく調整食など<strong>介護食・制限食まで7系統のコース</strong>を展開しています。
        </p>

        <SubHeading>タイヘイファミリーセットの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "タイヘイ株式会社（1880年創業・千葉県匝瑳市）"],
            ["サービス形態", "宅配健康食（冷凍中心・都度/定期どちらも可）"],
            ["主要コース", "ヘルシー御膳 / 彩ごころ / たのしみ御膳 / ソフト御膳 / たんぱく調整食 / ごはん付き御膳 / 糖質少なめセット"],
            ["監修", "ヘルシー御膳は糖尿病専門医の設計＋管理栄養士の献立作成"],
            ["栄養設計", "ヘルシー御膳: 約200kcal・塩分2.2g以下 / 彩ごころ: 約150kcal・塩分1.3g以下 など"],
            ["調理", "電子レンジ約6分（冷凍・メニューによる）"],
            ["配送", "ヤマト運輸（冷凍・冷蔵はクール便）・時間帯指定可"],
            ["定期の変更", "マイページからスキップ可・変更は次回お届け日の5営業日前まで・完全解約は電話"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: タイヘイファミリーセット公式サイト・タイヘイグループ公式サイト（2026年7月4日確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>料金プラン概要（税込・2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["コース", "1食あたり（税込）", "特徴"]}
          rows={[
            ["ヘルシー御膳 おかずA/B", "775円〜", "約200kcal・塩分2.2g以下"],
            ["ヘルシー御膳 糖質少なめ", "783円〜", "糖質を抑えた設計"],
            ["彩ごころ", "約607円（7食4,250円）", "約150kcal・塩分1.3g以下・骨抜き魚"],
            ["たのしみ御膳", "874円〜", "楽しみ重視の一般食寄りメニュー"],
            ["お試しセット", "約713円（6食4,280円）", "ヘルシー御膳3食＋彩ごころ3食"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          ソフト御膳・たんぱく調整食など介護食系コースの詳細価格は、注文画面でのみ表示される場合があります。<strong>定期・継続購入は全国送料無料</strong>になるため、続けるなら定期が基本です。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: タイヘイファミリーセット公式サイト各商品ページ（2026年7月4日確認）。上記に記載のない価格・最新のキャンペーンは公式サイトでご確認ください。
        </p>

        <SubHeading>タイヘイファミリーセットの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "医師×管理栄養士による本格的な制限食設計",
              text: "主力のヘルシー御膳は、糖尿病専門医による設計と管理栄養士による献立作成で、約200kcal・塩分2.2g以下に統一。カロリー・塩分・糖質・たんぱく質など、健康状態に合わせてコースを選べるのが最大の強みです。",
            },
            {
              title: "定期・継続購入は全国送料無料",
              text: "冷凍宅配弁当は送料が実質コストを押し上げがちですが、タイヘイは定期・継続購入なら全国どこでも配送料無料。長く続けるほど他社との差が出やすい料金構造です。",
            },
            {
              title: "1974年から続く宅配食の草分けの実績",
              text: "1880年創業の食品老舗タイヘイが、1972年の企画開始・1974年の全国展開以来50年以上続けてきたサービス。介護食（ソフト御膳）やたんぱく調整食まで揃うラインナップの広さは、歴史の長さゆえです。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">タイヘイファミリーセットの良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公開されている第三者メディアの口コミ・レビューから、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」で明示）。
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

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">タイヘイファミリーセットの悪い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ネガティブな意見も出典付きで正直に紹介します。購入前に知っておくべき注意点です。
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
        <SectionHeading id="mazui">タイヘイファミリーセットはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「タイヘイ ファミリーセット まずい」と検索されることがあります。公開レビューを確認すると、<strong>「まずい」と断じる実食レビューは見当たらず、制限食設計ゆえの「薄味」「量が控えめ」への評価が検索の実態</strong>という構図でした。実例で検証します。
        </p>

        <SubHeading>「まずい」と言われる主な理由3つ</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 塩分制限による薄味が濃い味好みに合わない</p>
            <p className="mb-1.5">
              「まずい？」をタイトルに掲げて検証した宅食グルメ（Appliv）の記事では、「薄味気味」という口コミを紹介しつつ、編集部の実食では「冷凍とは思えない」クオリティで魚は「ふっくらジューシー」と高評価でした。塩分2.2g以下（ヘルシー御膳）の設計上、<strong>濃い味に慣れた人が最初に薄いと感じるのは構造的な問題</strong>で、味の完成度そのものへの酷評ではありません。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://meal.app-liv.jp/archive/138918/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                宅食グルメ（Appliv）
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. 冷凍ゆえの食感の弱点がメニューによってはある</p>
            <p className="mb-1.5">
              管理栄養士が実食したレビュー（おいしい宅食）では、ビーフカレーについて「冷凍じゃがいも特有のパサパサ感がありました」と具体的な弱点を指摘。一方で同じレビューはハンバーグについて「思わず『おいしい！』の声がでました」と評価しており、<strong>メニューによる当たり外れ</strong>が「まずい」印象の一因になっています。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://oishi-takushoku.com/taihei/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                おいしい宅食
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">3. おかずのみ約200kcalの量が「物足りない」に直結</p>
            <p className="mb-1.5">
              宅食グルメの実食では「20代男性には足りず、ご飯が欲しい」という率直な評価がありました。ヘルシー御膳はカロリー制限食として約200kcalに設計されているため、<strong>一般食の感覚で食べると量の物足りなさが「まずい（満足できない）」評価につながりやすい</strong>構図です。ボリュームが必要ならごはん付き御膳（約440kcal）を選ぶ手があります。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://meal.app-liv.jp/archive/138918/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                宅食グルメ（Appliv）
              </a>
            </p>
          </div>
        </div>

        <SubHeading>一方で「美味しい」という評価も多い</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "チキンが柔らかく、香ばしい醤油のタレ味がしっかりと聞いていて美味しかった",
              meta: "40代女性の口コミ",
              sourceName: "宅食グルメ（Appliv）",
              sourceUrl: "https://meal.app-liv.jp/archive/138918/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "肉じゃがが印象的で、味つけや、ボリュームに非常に満足",
              meta: "30代男性の口コミ",
              sourceName: "宅食グルメ（Appliv）",
              sourceUrl: "https://meal.app-liv.jp/archive/138918/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は①制限食の薄味②冷凍の食感③量の設計の3因に分解できる</p>
          <p>
            「まずい」と正面から断じた実食レビューは今回の調査では確認できず、実態は制限食設計（塩分・カロリー）への感じ方の問題が中心です。<strong>健康管理目的で「薄味に慣れたい」人には設計通りの味</strong>であり、濃い味・大盛り志向の人には合いません。初めてならお試しセット（6食4,280円）で味と量を確かめてから定期に進むのが失敗しない方法です。
          </p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット5つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミや公開情報から見えてくるタイヘイファミリーセットのメリットを5つにまとめました。
        </p>

        {[
          {
            num: 1,
            title: "定期・継続購入なら全国送料無料",
            text: "冷凍宅配弁当は毎回の送料が実質コストを大きく押し上げますが、タイヘイは定期・継続購入で全国どこでも配送料無料。都度購入でも冷凍のみ・本体5,400円以上・同日時指定などの条件で無料にできます。長期利用ほど効くメリットです。",
          },
          {
            num: 2,
            title: "糖尿病専門医設計の制限食を1食775円〜で続けられる",
            text: "ヘルシー御膳は糖尿病専門医の設計＋管理栄養士の献立作成で、約200kcal・塩分2.2g以下。医療的な配慮が必要な食事管理を、外注できる価格帯で提供しているのが本質的な価値です。",
          },
          {
            num: 3,
            title: "介護食までカバーする7系統のコース幅",
            text: "ソフト御膳（噛む力・飲み込む力が弱い方向け）、たんぱく調整食（たんぱく質10g以下・塩分2.0g以下）、骨抜き魚を使う彩ごころなど、家族の状態が変わってもコースを切り替えて使い続けられます。高齢の家族向けに選ばれる理由です。",
          },
          {
            num: 4,
            title: "1974年から50年以上の運営実績と老舗の信頼感",
            text: "1880年創業のタイヘイグループが半世紀運営してきたサービスで、事業の継続性・供給の安定性という面での安心材料が豊富です。「栄養にも考えられていて、頼みたいときに気軽に頼める」（シニアのあんしん相談室）という口コミの通り、都度注文の柔軟さも支持されています。",
          },
          {
            num: 5,
            title: "お試しセットで定期契約なしに味を確認できる",
            text: "ヘルシー御膳おかず3食＋彩ごころ3食のお試しセット（6食税込4,280円）があり、2コースの味・量・食感を定期契約なしで比較できます。「お試しセットの方が美味しかった」という口コミがあるほどお試しの満足度は高いので、まずここから始めるのが定石です。",
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

        <p className="text-sm mb-6 leading-relaxed">
          メリットだけでなく、「ここは正直イマイチ」というポイントも率直にお伝えします。
        </p>

        {[
          {
            num: 1,
            title: "制限食設計ゆえに薄味・量控えめと感じやすい",
            text: "塩分2.2g以下・約200kcalの設計は健康管理には利点ですが、「濃い目が好きな私には合わなかった」（宅食グルメ掲載の口コミ）の通り、味の濃さ・ボリューム重視の人には向きません。一般食感覚で選ぶとギャップが生まれます。",
          },
          {
            num: 2,
            title: "都度購入は送料715円〜かかり割高",
            text: "都度購入の送料は関東715円・関西825円・九州1,155円・沖縄1,760円（冷凍・冷蔵、税込）と地域差があります。送料無料の恩恵を受けるには定期・継続購入にするか、冷凍のみ5,400円以上などの条件を満たす必要があり、単発少量の利用では割高です。",
          },
          {
            num: 3,
            title: "完全解約は電話のみ・変更期限は5営業日前",
            text: "定期のスキップはマイページからできますが、完全な解約は電話手続きが必要です。また変更・キャンセルは次回お届け日の5営業日前までと、他社（noshなど4〜5日前・Web完結）と比べて手続きの自由度はやや低めです。",
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

        {/* ===== 料金・送料 ===== */}
        <SectionHeading id="price">タイヘイファミリーセットの料金・送料を徹底解説</SectionHeading>

        <SubHeading>主要コースの料金（税込・2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["コース", "1食あたり", "栄養設計"]}
          rows={[
            ["ヘルシー御膳 おかずA/B", "775円〜", "約200kcal・塩分2.2g以下"],
            ["ヘルシー御膳 糖質少なめ", "783円〜", "糖質を抑えた設計"],
            ["ヘルシー御膳 よりどりセット", "843円〜", "好きなメニューを選択"],
            ["彩ごころ", "約607円（7食4,250円）", "約150kcal・塩分1.3g以下"],
            ["たのしみ御膳", "874円〜（よりどりは909円）", "一般食寄りの楽しみ重視"],
            ["お試しセット", "約713円（6食4,280円）", "ヘルシー御膳3食＋彩ごころ3食"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: タイヘイファミリーセット公式サイト各商品ページ（2026年7月4日確認）。ソフト御膳・たんぱく調整食・ごはん付き御膳の詳細価格は公式サイトでご確認ください。
        </p>

        <SubHeading>送料（税込・2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["購入方法", "送料", "無料になる条件"]}
          rows={[
            ["定期・継続購入", "全国無料", "—（常に無料）"],
            ["都度購入（冷凍・冷蔵）", "715円〜1,760円（関東715円/関西825円/九州1,155円/沖縄1,760円）", "同一温度帯のみ・本体合計5,400円以上・同日時指定"],
            ["都度購入（常温）", "495円〜1,540円", "本体合計3,240円以上"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          <strong>送料のポイント：</strong>続けるつもりなら最初から定期・継続購入にするのが合理的です。都度で試す場合も、冷凍商品だけで5,400円以上まとめれば送料無料にできます。冷凍宅配弁当18社の送料込み実質単価は、編集部が公式サイトを一次調査した
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>
          で比較できます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: タイヘイファミリーセット公式「お支払い方法・送料」ページ（2026年7月4日確認）。最新の送料は公式サイトでご確認ください。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>タイヘイファミリーセットがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "カロリー・塩分・糖質制限を医師監修の食事で続けたい人",
              "定期利用で送料を完全にゼロにしたい人",
              "高齢の家族向けにソフト食・骨抜き魚など介護食も検討したい人",
              "老舗の運営実績・供給の安定性を重視する人",
              "薄味に慣れて健康的な食生活に切り替えたい人",
              "まずお試しセットで味を確かめてから決めたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>タイヘイファミリーセットをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "濃い味・こってり系が好きな人 → nosh・三ツ星ファームがおすすめ",
              "がっつりボリューム重視の人 → ごはん付き御膳か他社一般食を検討",
              "単発・少量だけ使いたい人（都度送料が割高）",
              "Web完結で解約まで済ませたい人（完全解約は電話のみ）",
              "制限のない普通のおかずを安く食べたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">ウェルネスダイニング・Dr.つるかめキッチンとの簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          タイヘイファミリーセットと、同じ制限食系の人気2社を比較しました。詳しくは
          <Link
            href="/articles/wellness-dining-reviews/"
            className="text-accent hover:text-accent-dark underline"
          >
            ウェルネスダイニングの口コミ・評判
          </Link>
          、
          <Link
            href="/articles/tsurukame-reviews/"
            className="text-accent hover:text-accent-dark underline"
          >
            Dr.つるかめキッチンの口コミ・評判
          </Link>
          もあわせてご覧ください。
        </p>

        <ComparisonTable
          headers={["項目", "タイヘイファミリーセット", "ウェルネスダイニング", "Dr.つるかめキッチン"]}
          rows={[
            ["監修", "糖尿病専門医＋管理栄養士", "管理栄養士", "専門医＋管理栄養士のW監修"],
            ["制限食コース", "塩分・糖質・たんぱく・ソフト食など7系統", "気配り宅配食など制限食中心", "制限食5コース"],
            ["送料", "定期は全国無料", "定期は半額（385円〜）", "定期は全国無料"],
            ["介護食対応", "ソフト御膳あり", "やわらか宅配食あり", "—"],
            ["お試し", "6食4,280円のお試しセット", "初回送料無料", "—"],
            ["運営の歴史", "1974年全国展開・50年以上", "2011年設立", "2016年頃開始"],
            ["向いている人", "老舗の実績・介護食まで視野", "制限食を手軽に", "医師監修を重視"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※各社公式サイトの公開情報をもとに編集部作成（2026年7月時点）。最新情報は各公式サイトでご確認ください。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：タイヘイファミリーセットはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            タイヘイファミリーセットは、<strong>「医師監修の制限食」「定期の全国送料無料」「介護食までのコース幅」</strong>で独自の強みを持つ、50年以上の歴史がある宅配健康食です。公開口コミでは「味付けやボリュームに満足」「栄養が考えられていて気軽に頼める」という評価があり、老舗ならではの安定感が支持されています。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            「まずい」という検索の実態は、制限食設計による薄味・量の控えめさへの感じ方が中心で、味の完成度を正面から酷評する実食レビューは確認できませんでした。一方、<strong>濃い味・ボリューム志向の人に合わないのは事実</strong>なので、目的が健康管理かどうかで判断が分かれます。
          </p>
          <p className="text-sm leading-relaxed">
            まずはお試しセット（6食税込4,280円）でヘルシー御膳と彩ごころの味を確かめ、合えば送料無料の定期に切り替えるのが失敗しない始め方です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/wellness-dining-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ウェルネスダイニングの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/tsurukame-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            Dr.つるかめキッチンの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/koureisha-osusume/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            高齢者向け宅配弁当のおすすめ
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
              <Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                ウェルネスダイニングの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/tsurukame-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                Dr.つるかめキッチンの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                高齢者向け宅配弁当のおすすめ
              </Link>
            </li>
            <li>
              <Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                糖質制限向け宅配弁当のおすすめ
              </Link>
            </li>
            <li>
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の送料込み実質単価を一次調査
              </Link>
            </li>
            <li>
              <Link href="/articles/reitou-bento-mazui/" className="text-accent hover:text-accent-dark transition-colors">
                冷凍弁当はまずい？おいしく食べるコツ
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
