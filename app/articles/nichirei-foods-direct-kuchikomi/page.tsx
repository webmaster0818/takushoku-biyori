import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ニチレイフーズダイレクトの口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "ニチレイフーズダイレクトは「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。冷凍食品大手ニチレイフーズの宅配食「きくばりごぜん」の料金（定期8食1食税込800円）、送料（本州・四国7,500円以上で無料）、お試し4食セットも解説。最新の料金は公式でご確認ください。【2026年7月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/nichirei-foods-direct-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ニチレイフーズダイレクト 口コミ, ニチレイフーズダイレクト 評判, ニチレイフーズダイレクト まずい, 気くばり御膳 口コミ, きくばりごぜん 口コミ, ニチレイ 冷凍弁当, ニチレイフーズダイレクト 料金, 宅配弁当 口コミ",
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
    question: "ニチレイフーズダイレクトにお試しセットはある？",
    answer:
      "あります。人気No.1の「きくばりごぜん」お試し4食セットが税込3,300円（1食825円・平均199kcal/塩分1.7g/野菜100g以上）。ほかに、まめなごはん4食3,800円、パワーデリ4食4,320円、糖質・塩分・脂質・たんぱく質を控えたい方向けの栄養成分別お試し4食（各3,550円）もあります（2026年7月4日公式確認）。",
  },
  {
    question: "ニチレイフーズダイレクトの送料は？無料になる条件は？",
    answer:
      "本州・四国は税込7,500円以上の注文で送料無料です（5,000〜7,499円は700円、5,000円未満は1,000円）。北海道・九州は7,500円以上でも400円、沖縄は1,700円〜かかります。定期購入なら全国送料無料です（2026年4月改定・2026年7月4日公式確認）。最新の送料は公式サイトでご確認ください。",
  },
  {
    question: "糖質制限・塩分制限向けのコースはある？",
    answer:
      "「栄養成分別セット」として、糖質・塩分・脂質・たんぱく質を控えたい方向けに管理栄養士がチョイスしたセットがあります。糖質制限お試し4食は平均糖質10.8gです。また公式サイトには栄養成分・アレルギーから商品を検索できる機能があります。",
  },
  {
    question: "ニチレイフーズダイレクトの定期購入に回数縛りはある？",
    answer:
      "公式サイトに回数縛りの記載はなく、定期商品ページには「期限なし（終了連絡をいただくまで）」と明記されています。定期特典は全国送料無料＋ポイント通常の10倍。変更・キャンセルは到着希望日の7日前（土日祝含まず）までに電話または問い合わせフォームで連絡します。",
  },
  {
    question: "ニチレイフーズダイレクトの支払い方法は？",
    answer:
      "クレジットカード（一括のみ）・PayPay・代金引換（手数料会社負担）・銀行振込・コンビニ決済・ネットバンキング・NP後払い・Amazon Payの8通りです。ただし定期購入は代金引換・クレジットカード・後払いの3通りのみとなります（公式ガイドページより）。",
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
          <span className="text-foreground">ニチレイフーズダイレクトの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ニチレイフーズダイレクトとは？基本情報まとめ" },
    { id: "good-reviews", label: "ニチレイフーズダイレクトの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "ニチレイフーズダイレクトの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "ニチレイフーズダイレクトはまずい？味の評判を検証" },
    { id: "merits", label: "口コミから分かるメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "ニチレイフーズダイレクトの料金・送料を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "nosh・食宅便との簡易比較" },
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
    title: "美味しい・手軽・種類が豊富",
    reviews: [
      {
        text: "おいしいし、レンジでチンで楽だし種類結構あるしめちゃくちゃ良い",
        meta: "宅食ラボ掲載のX（旧Twitter）投稿",
        sourceName: "宅食ラボ",
        sourceUrl: "https://takushoku-lab.com/nichirei-foods/",
      },
      {
        text: "ニチレイフーズダイレクトの糖質オフのご飯ほんと美味しい。特にこのサーモンのタルタルは1番美味しかった！",
        meta: "HonNe掲載のX（旧Twitter）投稿",
        sourceName: "HonNe",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/nichirei/",
      },
      {
        text: "子どもがおいしいと言って全部食べてくれたので、味はほぼ満点です",
        meta: "利用者インタビュー",
        sourceName: "宅食グルメ（Appliv）",
        sourceUrl: "https://meal.app-liv.jp/archive/139185/",
      },
    ],
  },
  {
    title: "健康的な栄養設計なのに食べ応えがある",
    reviews: [
      {
        text: "この食べ応えで232Kcal、食塩相当量1.9gとは本当におどろきです",
        meta: "編集部実食レビュー",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40185/",
      },
      {
        text: "銀鮭はしっとり柔らかく、魚本来の甘みをしっかりと感じられます",
        meta: "編集部実食レビュー",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40185/",
      },
      {
        text: "気くばり御膳を頼んでみました。たしかに野菜たっぷりで、味は美味しかったですよ",
        meta: "HonNe掲載のX（旧Twitter）投稿",
        sourceName: "HonNe",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/nichirei/",
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
    title: "薄味が濃い味好みに合わない",
    reviews: [
      {
        text: "塩分少なめなとこが良いけど〔味は〕薄め。夫は濃い味好きなので気に入らなかったもよう",
        meta: "HonNe掲載のX（旧Twitter）投稿",
        sourceName: "HonNe",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/nichirei/",
      },
      {
        text: "体にいい食事は味が物足りなく、冷食のため少し水っぽさ〔がある〕",
        meta: "宅食ラボ掲載のX（旧Twitter）投稿",
        sourceName: "宅食ラボ",
        sourceUrl: "https://takushoku-lab.com/nichirei-foods/",
      },
    ],
    comment:
      "主力の「きくばりごぜん」はカロリー300kcal以下・塩分2.0g以下の健康設計です。外食や市販弁当の濃い味に慣れていると薄く感じるのは構造的な問題で、健康管理を目的に選ぶかどうかで評価が分かれます。「薄味だけど美味い」という肯定派の声もあり、感じ方には個人差があります。",
  },
  {
    title: "価格が高めでコスパ重視には向かない",
    reviews: [
      {
        text: "ニチレイの冷凍弁当は美味しいのだけど高いのよなぁ",
        meta: "HonNe掲載のX（旧Twitter）投稿",
        sourceName: "HonNe",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/nichirei/",
      },
    ],
    comment:
      "きくばりごぜんは8食セットで1食約875〜970円、単品なら1,080円と、冷凍宅配弁当の中では中〜高価格帯です。定期の月替わり8食コース（1食800円・送料無料）を使えば実質単価はかなり抑えられますが、食費最優先なら1食500円台の低価格帯サービスの方が向いています。",
  },
  {
    title: "一部メニューに具材の物足りなさ",
    reviews: [
      {
        text: "お肉感の少なさが残念でした",
        meta: "鶏からあげへの編集部実食レビュー",
        sourceName: "OZmall",
        sourceUrl: "https://www.ozmall.co.jp/healthcare/food/article/40185/",
      },
    ],
    comment:
      "カロリー・塩分を抑えた設計上、揚げ物系など一部メニューでは具材のボリューム感が控えめになる傾向があります。通年48種類以上とメニュー数が多いため、実食レビューで評価の高い魚系・和食系から試すと外れを引きにくくなります。",
  },
];

/* ---------- Page Component ---------- */

export default function NichireiFoodsDirectKuchikomiPage() {
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
        name: "ニチレイフーズダイレクトの口コミ・評判",
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
            「ニチレイフーズダイレクトって実際どうなの？」「まずいって口コミは本当？」——冷凍食品大手・ニチレイフーズが運営する公式通販「ニチレイフーズダイレクト」。管理栄養士監修の冷凍おかずセット「きくばりごぜん」（旧・気くばり御膳）を中心に、健康志向の宅配食として長く選ばれています。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー・口コミを出典付きで整理</strong>し、ニチレイフーズダイレクトの良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>コース別の料金・送料（本州・四国は7,500円以上で無料）・お試し4食セット</strong>まで詳しく解説。ニチレイフーズダイレクトが自分に合うかどうか、この記事で判断できます。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：ニチレイフーズダイレクトはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            ニチレイフーズダイレクトは、<strong>「冷凍食品大手の技術力と健康設計を両立した宅配食を選びたい人」</strong>に向いたサービスです。口コミでは「おいしくてレンジで楽」「この食べ応えで232kcalは驚き」という評価が目立つ一方、健康設計ゆえの薄味・価格の高さは注意点として挙がっています。「まずい」という声の実態は薄味・量への評価が中心で、感じ方には個人差があります（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>冷凍食品大手ならではの味の完成度</li>
                <li>300kcal以下・塩分2.0g以下の健康設計</li>
                <li>通年48種類＋お試し4食3,300円で始めやすい</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>1食約875円〜と価格は中〜高価格帯</li>
                <li>健康設計ゆえ濃い味好みには薄く感じる</li>
                <li>送料無料ラインは7,500円以上（本州・四国）</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。
          </p>
          <a
            href="https://wellness.nichirei.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            ニチレイフーズダイレクト公式サイトで最新の料金・メニューを見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">ニチレイフーズダイレクトとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ニチレイフーズダイレクトは、株式会社ニチレイフーズ（2005年設立・ニチレイグループの冷凍食品事業会社）が運営する公式通販サービスです。主力は管理栄養士監修の冷凍おかずセット<strong>「きくばりごぜん」（旧・気くばり御膳）</strong>で、カロリー300kcal以下・塩分2.0g以下・野菜100g以上（生鮮換算）という設計。ほかに高たんぱくの「パワーデリ」、おかず＋ごはんの「きくばり まめなごはん」、糖質・塩分などを控えたい人向けの栄養成分別セットも展開しています。
        </p>

        <SubHeading>ニチレイフーズダイレクトの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社ニチレイフーズ（2005年設立・冷凍食品大手）"],
            ["サービス形態", "冷凍宅配食（都度購入/定期購入）"],
            ["主要コース", "きくばりごぜん / きくばり まめなごはん / パワーデリ / 栄養成分別セット など"],
            ["栄養設計", "きくばりごぜん: 300kcal以下・塩分2.0g以下・野菜100g以上（生鮮換算）"],
            ["メニュー数", "きくばりごぜんは通年48種類＋期間限定"],
            ["監修", "各コースとも管理栄養士が監修（公式FAQより）"],
            ["調理", "電子レンジ調理専用（湯煎不可）"],
            ["定期の縛り", "回数縛りの記載なし・「期限なし（終了連絡をいただくまで）」と明記"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: ニチレイフーズダイレクト公式サイト・公式FAQ（2026年7月4日確認）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>料金プラン概要（税込・2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["コース", "価格", "1食あたり"]}
          rows={[
            ["きくばりごぜん 8食セット", "7,000〜7,760円", "約875〜970円"],
            ["きくばりごぜん 16食セット", "12,980〜15,020円", "約884円〜"],
            ["【定期】月替わり8食コース", "6,400円（送料無料）", "800円"],
            ["お試し4食セット", "3,300円", "825円"],
            ["パワーデリ 5食セット", "5,400円", "1,080円"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          最安級は<strong>定期の月替わり8食コース（1食800円・全国送料無料）</strong>です。初めてなら、お試し4食セット（3,300円）で味を確かめるのが定石です。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: ニチレイフーズダイレクト公式サイト各カテゴリページ・お試しセットページ（2026年7月4日確認）。最新のキャンペーンは公式サイトでご確認ください。
        </p>

        <SubHeading>ニチレイフーズダイレクトの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "冷凍食品大手ニチレイの技術力",
              text: "本業が冷凍食品の製造販売である大手メーカーの直販サービスなので、冷凍技術・製造品質は業界トップクラス。実食レビューでも「冷凍食品で大手であるニチレイの技術力の高さを随所に感じました」（宅食ラボ）と評価されています。",
            },
            {
              title: "300kcal以下・塩分2.0g以下でも食べ応えのある設計",
              text: "きくばりごぜんはカロリー・塩分を抑えつつ野菜100g以上（生鮮換算）を確保。「この食べ応えで232kcal、食塩相当量1.9gとは本当におどろき」（OZmall）という実食評価の通り、健康設計と満足感の両立が強みです。",
            },
            {
              title: "目的別コースと栄養成分検索で選びやすい",
              text: "高たんぱくのパワーデリ、糖質・塩分・脂質・たんぱく質を控えたい人向けの栄養成分別セットなど目的別に選べるほか、公式サイトには栄養成分・アレルギーから商品を検索できる機能があります。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">ニチレイフーズダイレクトの良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公開されている第三者メディアの実食レビュー・口コミから、良い評判を出典付きで紹介します（引用は原文ママ。省略箇所は「（略）」、補足は〔 〕で明示）。
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
        <SectionHeading id="bad-reviews">ニチレイフーズダイレクトの悪い口コミ・評判（出典付き）</SectionHeading>

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
        <SectionHeading id="mazui">ニチレイフーズダイレクトはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「ニチレイフーズダイレクト まずい」と検索されることがあります。公開レビューを確認すると、<strong>「まずい」と断じる実食レビューは見当たらず、健康設計ゆえの薄味・量・価格への評価が検索の実態</strong>という構図でした。実例で検証します。
        </p>

        <SubHeading>「まずい」と言われる主な理由3つ</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">1. 塩分2.0g以下の設計が濃い味好みに合わない</p>
            <p className="mb-1.5">
              「塩分少なめなとこが良いけど〔味は〕薄め。夫は濃い味好きなので気に入らなかったもよう」（HonNe掲載のX投稿）のように、<strong>健康設計の薄味が家族内でも評価が割れる</strong>典型例があります。一方で「薄味だけど美味い」という肯定派の投稿もあり、健康管理目的かどうかで評価が分かれます。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://exidea.co.jp/blog/meal/home-meal/nichirei/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                HonNe
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">2. ボリュームは「腹七分目」程度</p>
            <p className="mb-1.5">
              実食検証を行った宅食グルメ（Appliv）は、ボリュームを「『腹七分目』程度」と評価しています。おかずのみで300kcal以下の設計なので、<strong>一般食の感覚で食べると量の物足りなさが不満につながりやすい</strong>構図です。同記事の編集部実食判定では「『まずい』『美味しくない』と感じた料理はひとつもありません」と、味自体は高評価でした。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://meal.app-liv.jp/archive/139185/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                宅食グルメ（Appliv）
              </a>
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">3. 価格への不満が味の印象に影響する</p>
            <p className="mb-1.5">
              「1食1000円。300〜500円なら毎日これでいい」（宅食ラボ掲載のX投稿）のように、味は認めつつ価格がネックという声があります。単品1,080円を基準にすると割高感がありますが、<strong>定期の月替わり8食コースなら1食800円・送料無料</strong>まで下がるため、買い方で印象が大きく変わります。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://takushoku-lab.com/nichirei-foods/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                宅食ラボ
              </a>
            </p>
          </div>
        </div>

        <SubHeading>一方で「美味しい」という評価も多い</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "主菜はしっかりと味付けがされていて食べごたえがあり、野菜中心の副菜もおいしく食べられました",
              meta: "実食総評",
              sourceName: "宅食ラボ",
              sourceUrl: "https://takushoku-lab.com/nichirei-foods/",
            }}
            tone="good"
          />
          <SourcedReview
            review={{
              text: "冷凍食品で大手であるニチレイの技術力の高さを随所に感じました",
              meta: "実食総評",
              sourceName: "宅食ラボ",
              sourceUrl: "https://takushoku-lab.com/nichirei-foods/",
            }}
            tone="good"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は①健康設計の薄味②量の設計③価格感の3因に分解できる</p>
          <p>
            「まずい」と正面から断じた実食レビューは今回の調査では確認できませんでした。実態は塩分2.0g以下・300kcal以下という健康設計への感じ方の問題が中心で、冷凍食品大手ならではの味の完成度はレビュー各社で一貫して高評価です。<strong>濃い味・大盛り志向の人には合いにくい</strong>一方、健康管理と味を両立したい人の満足度は高い傾向です。まずはお試し4食セット（3,300円）で自分の好みに合うか確かめるのが失敗しない方法です。
          </p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット5つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミや公開情報から見えてくるニチレイフーズダイレクトのメリットを5つにまとめました。
        </p>

        {[
          {
            num: 1,
            title: "冷凍食品大手の直販ならではの味と品質",
            text: "「冷凍食品で大手であるニチレイの技術力の高さを随所に感じました」（宅食ラボ）という総評に代表される通り、本業メーカーの直販である点が最大の信頼材料です。「銀鮭はしっとり柔らかく、魚本来の甘みをしっかりと感じられます」（OZmall）と、冷凍が苦手とされる魚系の評価が高いのも特徴です。",
          },
          {
            num: 2,
            title: "300kcal以下・塩分2.0g以下でも満足感のある設計",
            text: "きくばりごぜんは健康設計と食べ応えの両立が実食レビューで繰り返し評価されています。野菜100g以上（生鮮換算）が摂れるため、外食続きの人の調整食としても使いやすい構成です。",
          },
          {
            num: 3,
            title: "通年48種類＋目的別コースで飽きにくい",
            text: "きくばりごぜんだけで通年48種類あり、「種類結構あるしめちゃくちゃ良い」（宅食ラボ掲載のX投稿）という声の通り、長期利用でも飽きにくいラインナップです。高たんぱくのパワーデリ、糖質を控えたい人向けセットなど目的別の選択肢も揃います。",
          },
          {
            num: 4,
            title: "定期は1食800円・全国送料無料＋ポイント10倍",
            text: "月替わり8食コース（6,400円・送料無料）なら1食800円で、都度購入よりも実質単価を大きく抑えられます。回数縛りの記載はなく「期限なし（終了連絡をいただくまで）」と明記されているので、始めるハードルは低めです。",
          },
          {
            num: 5,
            title: "お試し4食3,300円＋支払い方法8通りの始めやすさ",
            text: "お試し4食セット（825円/食）で味を確認でき、支払いはクレジットカード・PayPay・代引き・後払い・Amazon Payなど8通り。大手ECに近い使い勝手で、通販に不慣れな家族への贈り先としても選びやすいサービスです。",
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
            title: "都度購入は価格・送料ともに割高になりやすい",
            text: "8食セットで1食約875〜970円に加え、本州・四国でも5,000円未満の注文には送料1,000円がかかります。送料無料ライン（7,500円以上）か定期購入を使わないと、実質単価はさらに上がります。",
          },
          {
            num: 2,
            title: "健康設計ゆえの薄味・腹七分目のボリューム",
            text: "「濃い味好きなので気に入らなかった」（HonNe掲載のX投稿）という声の通り、味の濃さ・量を重視する人には向きません。ご飯を足す、まめなごはん（500kcal以下・たんぱく質20g以上）を選ぶなどの工夫が前提です。",
          },
          {
            num: 3,
            title: "定期の変更・キャンセルは7日前まで・電話またはフォーム",
            text: "定期購入の変更・キャンセルは到着希望日の7日前（土日祝含まず）までに電話または問い合わせフォームでの連絡が必要です。アプリやマイページで直前まで操作できる他社（noshなど）と比べると、手続きの自由度は低めです。",
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
        <SectionHeading id="price">ニチレイフーズダイレクトの料金・送料を徹底解説</SectionHeading>

        <SubHeading>主要コースの料金（税込・2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["コース", "価格", "1食あたり", "栄養設計"]}
          rows={[
            ["きくばりごぜん 8食セット", "7,000〜7,760円", "約875〜970円", "300kcal以下・塩分2.0g以下"],
            ["きくばりごぜん 16食セット", "12,980〜15,020円", "約884円〜", "同上"],
            ["【定期】月替わり8食コース", "6,400円", "800円", "同上・送料無料＋ポイント10倍"],
            ["お試し4食セット", "3,300円", "825円", "平均199kcal・塩分1.7g"],
            ["パワーデリ 5食セット", "5,400円", "1,080円", "たんぱく質25g以上"],
            ["栄養成分別お試し4食", "3,550円", "約888円", "糖質/塩分/脂質等を控えたい方向け"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: ニチレイフーズダイレクト公式サイト（2026年7月4日確認）。単品は1,080円/食。最新価格は公式サイトでご確認ください。
        </p>

        <SubHeading>送料（税込・2026年4月改定・2026年7月4日公式確認）</SubHeading>
        <ComparisonTable
          headers={["配送先", "7,500円以上", "5,000〜7,499円", "5,000円未満", "定期購入"]}
          rows={[
            ["本州・四国", "無料", "700円", "1,000円", "無料"],
            ["北海道・九州", "400円", "1,100円", "1,400円", "無料"],
            ["沖縄", "1,700円", "2,400円", "2,700円", "無料"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          <strong>送料のポイント：</strong>本州・四国なら8食セット（7,000円〜）に単品を1つ足すだけで送料無料ラインに届きます。定期購入は金額にかかわらず全国送料無料なので、続けるなら定期一択です。冷凍宅配弁当18社の送料込み実質単価は、編集部が公式サイトを一次調査した
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>
          で比較できます。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: ニチレイフーズダイレクト公式「送料・配送について」ページ（2026年7月4日確認）。最新の送料は公式サイトでご確認ください。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>ニチレイフーズダイレクトがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "大手メーカーの品質・供給の安定性を重視する人",
              "カロリー・塩分を抑えつつ味も妥協したくない人",
              "魚系メニューが美味しい宅配食を探している人",
              "定期（1食800円・送料無料）でコストを抑えて続けたい人",
              "栄養成分やアレルゲンで商品を検索して選びたい人",
              "まずお試し4食セットで味を確かめたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>ニチレイフーズダイレクトをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "濃い味・こってり系が好きな人 → nosh・三ツ星ファームがおすすめ",
              "がっつりボリューム重視の人 → まめなごはん・パワーデリか他社を検討",
              "食費を最優先で抑えたい人（1食500円台の低価格帯が他社にある）",
              "少量だけ都度買いしたい人（送料負担が大きい）",
              "Web完結で定期の変更まで済ませたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">nosh・食宅便との簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ニチレイフーズダイレクトと人気の冷凍宅配弁当2社を比較しました。詳しくは
          <Link
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline"
          >
            noshの口コミ・評判
          </Link>
          、
          <Link
            href="/articles/shokutakubin-reviews/"
            className="text-accent hover:text-accent-dark underline"
          >
            食宅便の口コミ・評判
          </Link>
          もあわせてご覧ください。
        </p>

        <ComparisonTable
          headers={["項目", "ニチレイフーズダイレクト", "nosh", "食宅便"]}
          rows={[
            ["運営", "ニチレイフーズ（冷凍食品大手）", "ナッシュ", "日清医療食品"],
            ["1食あたり目安（税込）", "800円〜（定期8食）", "620円〜", "約596円〜"],
            ["栄養設計", "300kcal以下・塩分2.0g以下", "糖質30g・塩分2.5g以下", "コースによる（制限食豊富）"],
            ["送料", "7,500円以上で無料（本州・四国）/定期無料", "地域別913円〜", "定期390円/都度780円"],
            ["お試し", "4食3,300円", "初回割引あり", "お試しセットあり"],
            ["回数縛り", "記載なし（期限なし）", "なし", "なし"],
            ["向いている人", "大手品質×健康設計", "手軽さ・食事管理", "制限食の選択肢重視"],
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
        <SectionHeading id="summary">まとめ：ニチレイフーズダイレクトはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            ニチレイフーズダイレクトは、<strong>「冷凍食品大手の味の完成度」と「300kcal以下・塩分2.0g以下の健康設計」の両立</strong>が最大の強みの宅配食です。公開レビューでは「おいしくてレンジで楽」「この食べ応えで232kcalは驚き」という評価が目立ち、実食メディアの味の評価も一貫して高水準でした。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            「まずい」という検索の実態は、健康設計による薄味・腹七分目のボリューム・価格感への感じ方が中心で、味の完成度を正面から酷評する実食レビューは確認できませんでした。一方、<strong>濃い味・大盛り志向に合わないのと、都度購入の送料負担は事実</strong>なので、定期購入（1食800円・送料無料）前提で検討するのが現実的です。
          </p>
          <p className="text-sm leading-relaxed">
            まずはお試し4食セット（税込3,300円）で味と量を確かめ、合えば定期に切り替えるのが失敗しない始め方です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/nichirei-otameshi/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ニチレイフーズダイレクトのお試しセット解説
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/shokutakubin-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            食宅便の口コミ・評判
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
              <Link href="/articles/nichirei-otameshi/" className="text-accent hover:text-accent-dark transition-colors">
                ニチレイフーズダイレクトのお試しセットを徹底解説
              </Link>
            </li>
            <li>
              <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                nosh(ナッシュ)の口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                食宅便の口コミ・評判を徹底調査
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
              <Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                お試しセットがある宅配弁当のおすすめ
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
