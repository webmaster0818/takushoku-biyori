import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "つくりおき.jp(現ツクリオ)の口コミ・評判は？まずいって本当？良い・悪い評価を出典付きで中立検証【2026年7月最新】";
const ARTICLE_DESCRIPTION =
  "つくりおき.jp（2026年3月に「ツクリオ」へ名称変更）は「まずい」って本当？公開レビューから良い口コミ・悪い口コミを出典付きで紹介し、味の評判を正面から検証。冷蔵の手作りおかず宅配の料金（週3食9,990円〜・送料込）、対応エリア、LINE注文の仕組みも解説。最新の料金は公式でご確認ください。【2026年7月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/tsukurioki-jp-kuchikomi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "つくりおき.jp 口コミ, つくりおき.jp 評判, つくりおき.jp まずい, ツクリオ 口コミ, ツクリオ 評判, つくりおき.jp 料金, つくりおき.jp エリア, 作り置き 宅配, 宅食 口コミ",
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
    question: "つくりおき.jp（ツクリオ）の料理はどれくらい日持ちする？",
    answer:
      "公式サイトによると、通常品は「お届け日を含み、冷蔵で4日間の保存が可能」です。冷凍ではなく冷蔵でのお届けなので、冷凍弁当のような長期ストックはできません。パワーシール（窒素充填包装）でのお届けも、配達当日の受け取りで4日間が目安です。週の前半で食べきる使い方が基本になります。",
  },
  {
    question: "つくりおき.jpの対応エリアは？",
    answer:
      "4人前プランは日本全国（沖縄・離島など一部地域を除く）で利用できます（公式サイトより・2026年7月時点）。2026年2月に追加された2人前週3食プランは、東日本〜関西を中心とした29都府県限定です。お住まいの地域が対象かどうかは、公式サイト・LINEでの登録時に確認できます。",
  },
  {
    question: "つくりおき.jpの注文方法は？アプリはある？",
    answer:
      "注文はLINEで完結します。公式サイトからLINEの友だち登録をし、LINE上でプラン選択・お届け日の管理・お休み設定などの手続きを行う仕組みです。専用アプリはなく、普段使っているLINEで管理できる手軽さが特徴です。",
  },
  {
    question: "つくりおき.jpはスキップ（お休み）や解約はできる？",
    answer:
      "はい。公式サイトによると「お休み週の設定もできます」「休会や解約は無料」とされています。週単位のサービスなので、帰省や旅行の週はお休みに設定する、といった柔軟な使い方が可能です。1週間から試せるため、まず1回試して合うか確認するのがおすすめです。",
  },
  {
    question: "パワーシールとは何ですか？",
    answer:
      "パワーシールは、窒素充填によって食材の酸化を抑える密閉包装です。東京23区内などの自社配送エリア外では、パワーシール包装のうえヤマト運輸のクール便（冷蔵）で届きます。公式サイトは「密閉包装で衛生的」「運搬時の異物混入や汁漏れの心配は不要」と説明しています。保存期間の目安は配達当日受け取りで冷蔵4日間です。",
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
          <span className="text-foreground">つくりおき.jpの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "つくりおき.jp（ツクリオ）とは？基本情報まとめ" },
    { id: "good-reviews", label: "つくりおき.jpの良い口コミ・評判（出典付き）" },
    { id: "bad-reviews", label: "つくりおき.jpの悪い口コミ・評判（出典付き）" },
    { id: "mazui", label: "つくりおき.jpはまずい？味の評判を検証" },
    { id: "merits", label: "口コミから分かるメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "つくりおき.jpの料金・配送を徹底解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "冷凍宅配弁当との違い（簡易比較）" },
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
    title: "味が家庭的で美味しい・ハズレがない",
    reviews: [
      {
        text: "え、全然美味しいやん！",
        meta: "3人家族・福岡在住の利用者インタビュー",
        sourceName: "つくりおき.jp公式 お客様インタビュー",
        sourceUrl: "https://www.tsukurioki.jp/interview/page4",
      },
      {
        text: "めちゃくちゃ美味しくてハズレがない",
        meta: "HonNe掲載のX（旧Twitter）投稿",
        sourceName: "HonNe（エキサイト運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/tsukurioki-jp/",
      },
      {
        text: "どのおかずもおいしくて、捨ておかずみたいのがなく最高",
        meta: "高校生男子のいる家庭の声",
        sourceName: "HAPPINESS! magazine（ティップネス）",
        sourceUrl: "https://online.tipness.co.jp/feature/home_meal/ready-made/",
      },
    ],
  },
  {
    title: "家事の負担が減り、時間と気持ちの余裕が生まれる",
    reviews: [
      {
        text: "メイン作らなくていいってかなり楽",
        meta: "HonNe掲載のX（旧Twitter）投稿",
        sourceName: "HonNe（エキサイト運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/tsukurioki-jp/",
      },
      {
        text: "これは“食事だけじゃなく、時間や気持ちの余裕も買っている”という感覚",
        meta: "利用者インタビュー",
        sourceName: "つくりおき.jp公式 お客様インタビュー",
        sourceUrl: "https://www.tsukurioki.jp/interview/page4",
      },
      {
        text: "どれ食べてもおいしい。自炊より遥かに多いレパートリー",
        meta: "利用経験者の声",
        sourceName: "LiPro（イード運営）",
        sourceUrl: "https://meals.iid.co.jp/tsukuriokijp-yameta/",
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
    title: "値段が高い・毎週の出費が気になる",
    reviews: [
      {
        text: "毎回の出費が痛い",
        meta: "1年利用レビュー",
        sourceName: "note（カッパパ）",
        sourceUrl: "https://note.com/kappapa_meallife/n/nb4a82d97eef3",
      },
    ],
    comment:
      "4人前・週3食で9,990円（税込・送料込）は、1人前あたり約833円。冷凍弁当の最安クラス（400円前後）と比べると高めです。ただし「調理済みの手作りおかずが冷蔵で届き、買い物・調理・献立決めが丸ごと不要になる」対価と考えるかで評価が分かれます。外食や惣菜購入との比較なら妥当な価格帯です。",
  },
  {
    title: "子どもの好みに合うかは分かれる・量の使い勝手",
    reviews: [
      {
        text: "子どもが副菜をほぼ食べない、分量も多い",
        meta: "やめた理由の声",
        sourceName: "LiPro（イード運営）",
        sourceUrl: "https://meals.iid.co.jp/tsukuriokijp-yameta/",
      },
      {
        text: "シンプルな味が好きな子供には当たり外れある",
        meta: "HonNe掲載のX（旧Twitter）投稿",
        sourceName: "HonNe（エキサイト運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/tsukurioki-jp/",
      },
      {
        text: "余った分をお弁当に回したいという点では少し足りない",
        meta: "利用者インタビュー内の正直な感想",
        sourceName: "つくりおき.jp公式 お客様インタビュー",
        sourceUrl: "https://www.tsukurioki.jp/interview/page4",
      },
    ],
    comment:
      "メニューはおまかせ（週替わり）なので、子どもの好き嫌いが多い家庭では食べムラが出ることがあります。一方で「量が多い」という声は大人には利点にもなり、家族構成によって評価が変わるポイントです。4人前の内訳は「大人2名＋子供2名」想定と公式が明記しています。",
  },
  {
    title: "配送枠・曜日の融通が利きにくいことがある",
    reviews: [
      {
        text: "空きがない😭人気なのねぇ",
        meta: "配送枠についてのHonNe掲載X投稿",
        sourceName: "HonNe（エキサイト運営）",
        sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/tsukurioki-jp/",
      },
      {
        text: "配達曜日が変えたい曜日に変えられない",
        meta: "やめた理由の声",
        sourceName: "LiPro（イード運営）",
        sourceUrl: "https://meals.iid.co.jp/tsukuriokijp-yameta/",
      },
    ],
    comment:
      "人気エリアでは希望の配送枠が埋まっていることがあります。冷蔵配送のため受け取りの制約が冷凍弁当より大きい点は、共働きで帰宅が遅い家庭では要確認です。パワーシール便（ヤマトのクール便）エリアでは時間帯指定の選択肢が変わるため、登録時に自宅エリアの配送条件を確認しましょう。",
  },
];

/* ---------- Page Component ---------- */

export default function TsukuriokiJpKuchikomiPage() {
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
        name: "つくりおき.jpの口コミ・評判",
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
            「つくりおき.jpって実際どうなの？」「まずいって口コミは本当？」——プロが手作りした<strong>冷蔵の作り置きおかず</strong>を週1回届けてくれる人気サービス、つくりおき.jp。累計提供食数は3,000万食を突破し（2026年1月時点・公式発表）、<strong>2026年3月には「ツクリオ（Tsuklio）」へ名称変更</strong>されました。本記事では検索されることの多い旧名称「つくりおき.jp」で表記します。
          </p>
          <p className="mb-3">
            この記事では、<strong>公開されている実在のレビュー・利用者インタビューを出典付きで整理</strong>し、良い口コミ・悪い口コミの両方を中立に検証。「まずい」と言われる理由にも正面から答えます。
          </p>
          <p>
            さらに、<strong>料金プラン・対応エリア・冷蔵配送の仕組み（パワーシール）</strong>まで詳しく解説。つくりおき.jpが自分の家庭に合うかどうか、この記事で判断できます。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：つくりおき.jpはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">
            つくりおき.jpは、<strong>「家族分の夕食作りを丸ごと手放したい共働き・子育て家庭」</strong>に向いたサービスです。冷凍弁当と違い、プロが手作りした家庭料理が冷蔵で届き、大皿に盛り替えて食卓に出せるのが最大の特徴。口コミでは「ハズレがない美味しさ」「メインを作らなくていい楽さ」が高評価の一方、価格の高さ・子どもの好み・配送枠は注意点として挙がっています。「まずい」という声は少数派ですが、味の感じ方には個人差があります（<a href="#mazui" className="text-accent underline">検証セクションへ</a>）。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>手作りの家庭料理が冷蔵で届く（レンジ数分）</li>
                <li>買い物・献立決め・調理が丸ごと不要になる</li>
                <li>LINEだけで注文・お休み設定が完結</li>
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>週9,990円〜（4人前3食）と出費は大きめ</li>
                <li>冷蔵4日間なので長期ストック不可</li>
                <li>メニューはおまかせ・配送枠に限りあり</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">
            ※料金・キャンペーン・対応エリアは時期により変動します。最新の正確な情報は公式サイトでご確認ください。
          </p>
          <a
            href="https://www.tsukurioki.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition"
          >
            つくりおき.jp（ツクリオ）公式サイトで最新の料金・エリアを見る →
          </a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">つくりおき.jp（ツクリオ）とは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          つくりおき.jp（現ツクリオ）は、株式会社Antway（2018年創業・東京都千代田区）が運営する<strong>手作りおかずの週次宅配サービス</strong>です。栄養士が監修したレシピをプロの調理スタッフが手作りし、<strong>冷凍せず冷蔵のまま</strong>週1回届けるのが最大の特徴。2026年1月時点で累計提供食数3,000万食を突破し、2026年3月17日にサービス名を「ツクリオ」へ変更しました（公式プレスリリースより）。
        </p>

        <SubHeading>つくりおき.jpの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社Antway（2018年創業・東京都千代田区）"],
            ["サービス形態", "手作りおかずの週1回宅配（冷蔵・冷凍ではない）"],
            ["メニュー", "栄養士監修の週替わりおまかせ（主菜＋副菜）"],
            ["プラン", "2人前週3食 / 4人前週3食 / 4人前週5食"],
            ["保存期間", "お届け日を含み冷蔵4日間"],
            ["配送", "自社配送（東京23区など）またはパワーシール＋ヤマトクール便"],
            ["注文方法", "LINEで完結（友だち登録→注文・お休み設定）"],
            ["解約・休会", "無料（お休み週の設定も可能）"],
            ["対応エリア", "4人前プランは全国（沖縄・離島など除く）/ 2人前プランは29都府県"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: つくりおき.jp公式サイト・公式ヘルプ（2026年7月時点）。最新情報は公式サイトでご確認ください。
        </p>

        <SubHeading>料金プラン概要（税込・送料込）</SubHeading>
        <ComparisonTable
          headers={["プラン", "週あたり料金", "1食（人前）あたり目安"]}
          rows={[
            ["2人前×週3食", "7,990円", "約1,332円/食（約666円/人前×2）"],
            ["4人前×週3食", "9,990円", "3,330円/食（1人前約833円）"],
            ["4人前×週5食", "15,960円", "3,192円/食（1人前約798円）"],
          ]}
        />
        <p className="text-sm mb-2 leading-relaxed">
          公式ヘルプによると「料金は税込み、送料込みの価格です」「4人前の内訳は、大人2名子供2名です」。<strong>1人前あたり約800円前後</strong>で、買い物も調理も不要の手作りおかずが揃う計算です。初回割引が実施されている場合もあります。
        </p>
        <p className="text-xs text-warm-gray mb-6">
          ※出典: つくりおき.jp公式ヘルプ（2026年7月時点）。価格・キャンペーンは変更される場合があるため、最新は公式サイトでご確認ください。
        </p>

        <SubHeading>つくりおき.jpの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "冷凍ではなく「冷蔵」の手作りおかず",
              text: "配達日当日（一部配送枠を除く）に調理された料理が冷蔵のまま届くため、冷凍弁当特有の解凍ムラや水っぽさとは無縁です。食卓では大皿や食器に盛り替えて出せるので、「宅配感」が出にくく、家庭の夕食としてそのまま成立します。",
            },
            {
              title: "献立決め・買い物・調理・洗い物が丸ごと不要",
              text: "週3食または週5食分の主菜・副菜がまとめて届くため、平日の「今日の夕飯どうしよう」から解放されます。栄養士監修のレシピで、家庭では手間のかかる多品目のおかずが揃うのも利点です。",
            },
            {
              title: "LINEだけで注文からお休み設定まで完結",
              text: "専用アプリのインストールは不要で、LINEの友だち登録だけで注文・変更・お休み週の設定ができます。休会・解約も無料なので、「1週間だけ試す」「忙しい月だけ使う」という柔軟な使い方が可能です。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">つくりおき.jpの良い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公式の利用者インタビューと第三者メディアのレビュー記事から、良い評判を出典付きで紹介します（引用は原文ママ）。
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

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">補足：継続利用者の評価</p>
          <p>
            1年間利用したレビュー（
            <a
              href="https://note.com/kappapa_meallife/n/nb4a82d97eef3"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline hover:text-accent"
            >
              note・カッパパ
            </a>
            ）では「手作り感のある美味しい惣菜が冷蔵庫から取り出して温めるだけで食べられる」「一度使うと便利過ぎてやめられなくなる」と、利便性への評価が続いています。
          </p>
        </div>

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">つくりおき.jpの悪い口コミ・評判（出典付き）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ネガティブな意見も出典付きで正直に紹介します。契約前に知っておくべき注意点です。
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
        <SectionHeading id="mazui">つくりおき.jpはまずい？味の評判を検証</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          「つくりおき.jp まずい」と検索されることがありますが、今回確認した複数の公開レビューでは、<strong>「まずい」という直球の評価はほとんど見つからず、味の評価はおおむね良好</strong>でした。実態を整理します。
        </p>

        <SubHeading>味の傾向：だし中心の「家庭料理」路線</SubHeading>
        <div className="space-y-3 mb-6">
          <div className="bg-cream rounded-lg p-4 text-sm leading-relaxed">
            <p className="mb-1.5">
              ティップネス運営のHAPPINESS! magazineは、つくりおき.jpの味を「だしを中心とした優しい味付け」「子どもでも食べられるくらいの薄味」と評しています。また1年利用者のレビューでは「めちゃくちゃ手が込んだ高級そうな料理はありません」（note・カッパパ）と、レストラン系ではなく<strong>家庭料理路線</strong>であることが指摘されています。
            </p>
            <p className="text-xs text-warm-gray">
              出典:{" "}
              <a
                href="https://online.tipness.co.jp/feature/home_meal/ready-made/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                HAPPINESS! magazine
              </a>
              ・
              <a
                href="https://note.com/kappapa_meallife/n/nb4a82d97eef3"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-accent"
              >
                note（カッパパ）
              </a>
            </p>
          </div>
        </div>

        <SubHeading>「合わない」と感じる人の特徴</SubHeading>
        <div className="space-y-2 mb-6">
          <SourcedReview
            review={{
              text: "ちょっと子供には味が濃いな〜",
              meta: "HonNe掲載のX（旧Twitter）投稿",
              sourceName: "HonNe（エキサイト運営）",
              sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/tsukurioki-jp/",
            }}
            tone="bad"
          />
          <SourcedReview
            review={{
              text: "シンプルな味が好きな子供には当たり外れある",
              meta: "HonNe掲載のX（旧Twitter）投稿",
              sourceName: "HonNe（エキサイト運営）",
              sourceUrl: "https://exidea.co.jp/blog/meal/home-meal/tsukurioki-jp/",
            }}
            tone="bad"
          />
        </div>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">編集部の結論：「まずい」は少数派。分かれ目は「家庭の味の基準」</p>
          <p className="mb-2">
            興味深いのは、同じ子育て家庭でも「薄味」と感じる声と「子供には濃い」と感じる声の<strong>両方が実在する</strong>ことです。つくりおき.jpは大人も子どもも食べられる中間的な家庭料理の味付けのため、各家庭の普段の味の濃さを基準に、濃くも薄くも感じられるということです。
          </p>
          <p>
            また、退会理由を分析したLiProの記事でも、離脱の主因は味ではなく<strong>配送の融通性・受け取り制約</strong>と報告されています。「まずいから続かない」サービスではなく、「美味しいが、価格と受け取りの都合が合うか」で判断すべきサービスと言えます。
          </p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミから分かるメリット5つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミや公開情報から見えてくるつくりおき.jpのメリットを5つにまとめました。
        </p>

        {[
          {
            num: 1,
            title: "「手作りの家庭料理」がそのまま食卓に出せる",
            text: "冷凍弁当と違い、プロが手作りした冷蔵のおかずが届くため、盛り替えれば家庭の夕食としてそのまま成立します。「え、全然美味しいやん！」（公式インタビュー）のように、宅配惣菜への先入観が覆されたという声が目立ちます。",
          },
          {
            num: 2,
            title: "夕食作りの工程が丸ごと消える",
            text: "献立決め・買い物・調理・(大部分の)洗い物が不要になります。「メイン作らなくていいってかなり楽」（HonNe掲載のX投稿）、「時間や気持ちの余裕も買っている」（公式インタビュー）と、時短を超えた精神的な余裕への評価が多いのが特徴です。",
          },
          {
            num: 3,
            title: "栄養士監修×週替わりで自炊よりレパートリーが広い",
            text: "「自炊より遥かに多いレパートリー」（LiPro掲載の声）という評価の通り、家庭では作りにくい多品目の主菜・副菜が毎週替わりで届きます。栄養士監修のため、栄養バランスを考える負担も減らせます。",
          },
          {
            num: 4,
            title: "LINE完結・休会解約無料で始めやすい",
            text: "LINEの友だち登録だけで始められ、「LINEポチで無限に休める。ほっといても勝手に届く」（LiPro掲載の声）という手軽さ。休会・解約は無料で、1週間から試せるため、お試しのハードルが低いサービスです。",
          },
          {
            num: 5,
            title: "パワーシールで全国配送に対応（4人前プラン）",
            text: "窒素充填のパワーシール包装＋ヤマトのクール便により、4人前プランは沖縄・離島などを除く全国で利用可能です。公式は「密閉包装で衛生的」「汁漏れの心配は不要」と説明しており、自社配送エリア外でも品質を保った配送が受けられます。",
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
            title: "冷蔵4日間なので「ストック」はできない",
            text: "保存期間はお届け日を含み冷蔵4日間。冷凍弁当のように「1ヶ月分ストックして好きな時に食べる」使い方はできません。週の前半で計画的に食べきる必要があり、外食が多い週はお休み設定を活用することになります。",
          },
          {
            num: 2,
            title: "1人暮らし・少人数世帯には量too much＆割高",
            text: "基本は4人前プラン（大人2名＋子供2名想定）で、2人前プランは29都府県限定です。1人暮らしなら、1食単位で管理できる冷凍宅配弁当（noshなど）の方が量・価格とも合理的です。世帯人数でサービスを選び分けましょう。",
          },
          {
            num: 3,
            title: "メニューは選べない（週替わりおまかせ）",
            text: "メニューは週替わりのおまかせで、noshのように1品ずつ選ぶことはできません。好き嫌いが多い家庭・アレルギー対応を細かくしたい家庭では、事前に週のメニュー公開を確認する運用が必要です。",
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

        {/* ===== 料金・配送 ===== */}
        <SectionHeading id="price">つくりおき.jpの料金・配送を徹底解説</SectionHeading>

        <SubHeading>プラン別料金表（税込・送料込）</SubHeading>
        <ComparisonTable
          headers={["プラン", "週あたり", "月4週利用時", "1人前あたり目安"]}
          rows={[
            ["2人前×週3食", "7,990円", "31,960円", "約1,332円/食（2人分）"],
            ["4人前×週3食", "9,990円", "39,960円", "約833円"],
            ["4人前×週5食", "15,960円", "63,840円", "約798円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">
          ※出典: つくりおき.jp公式ヘルプ「料金はいくらですか」（2026年7月時点）。初回割引が実施される場合があります。最新は公式サイトでご確認ください。
        </p>

        <SubHeading>配送方法は2種類（エリアで自動決定）</SubHeading>
        <ComparisonTable
          headers={["配送方法", "対象", "特徴"]}
          rows={[
            ["自社配送", "東京23区内など", "配達パートナーが保冷バッグで配送"],
            ["パワーシール便", "上記以外の対応エリア", "窒素充填の密閉包装＋ヤマトクール便（冷蔵）"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          いずれも<strong>冷蔵での配送</strong>で、保存期間はお届け日を含み4日間です。パワーシールは食材の酸化を抑える窒素充填包装で、公式は「運搬時の異物混入や汁漏れの心配は不要」と説明しています。再配達になると保存期間がその分短くなる点には注意しましょう。
        </p>

        <SubHeading>コストの考え方</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          4人前×週3食（9,990円）を「食材費」として見ると高く感じますが、<strong>大人2人＋子供2人の3日分の夕食おかず（12人前）が調理済みで届く</strong>と考えると1人前約833円。惣菜の購入や外食（1人1,000円超）と比べれば妥当な水準です。一方、食費を最優先するなら自炊や冷凍弁当（
          <Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark underline">
            まごころケア食
          </Link>
          など1食400円前後〜）に軍配が上がります。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>つくりおき.jpがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "共働きで平日の夕食作りが負担になっている家庭",
              "子育て中で買い物・調理の時間を捻出しにくい家庭",
              "冷凍弁当の食感・解凍ムラが苦手な人",
              "「家庭料理の味」を宅配で再現したい人",
              "献立を考えること自体から解放されたい人",
              "LINEで手軽に管理したい人",
              "週単位でお休みしながら柔軟に使いたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>つくりおき.jpをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "1人暮らし・少食の2人世帯 → noshなど冷凍宅配弁当がおすすめ",
              "長期ストックできる食事を求める人 → 冷凍弁当がおすすめ",
              "食費を最優先で抑えたい人 → まごころケア食など低価格帯がおすすめ",
              "メニューを1品ずつ自分で選びたい人 → noshがおすすめ",
              "受け取り曜日・時間の自由度を最重視する人（配送枠に限りあり）",
              "糖質制限など数値基準の食事管理をしたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">冷凍宅配弁当との違い（簡易比較）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          つくりおき.jpは「冷蔵の家族向けおかず宅配」で、1人前ずつの冷凍宅配弁当とは設計思想が異なります。代表的な冷凍宅配弁当と比較しました。
        </p>

        <ComparisonTable
          headers={["項目", "つくりおき.jp", "nosh", "まごころケア食"]}
          rows={[
            ["形態", "冷蔵の手作りおかず（家族向け）", "冷凍弁当（1人前）", "冷凍弁当（1人前）"],
            ["1人前あたり目安", "約798円〜（送料込）", "620円〜＋送料", "396円〜＋送料"],
            ["保存", "冷蔵4日間", "冷凍（数ヶ月）", "冷凍（3ヶ月以上）"],
            ["メニュー選択", "おまかせ（週替わり）", "自由に選べる", "おまかせ"],
            ["向く世帯", "3〜4人家族", "1〜2人", "1〜2人・シニア"],
            ["注文", "LINE", "アプリ/Web", "Web/電話"],
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
        <SectionHeading id="summary">まとめ：つくりおき.jpはこんな家庭におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            つくりおき.jp（現ツクリオ）は、<strong>「手作りの家庭料理を、作らずに食卓へ出す」</strong>という独自ポジションのサービスです。公開レビューでは「ハズレがない美味しさ」「夕食作りからの解放」への評価が一貫しており、「まずい」という評価は少数派でした。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一方で、週9,990円〜（4人前3食・税込送料込）という出費、冷蔵4日間の計画消費、おまかせメニューは合う・合わないが分かれるポイント。<strong>3〜4人家族の共働き・子育て世帯なら価値を実感しやすく、1人暮らしなら冷凍宅配弁当の方が合理的</strong>です。
          </p>
          <p className="text-sm leading-relaxed">
            休会・解約は無料で1週間から試せるので、まずは1週間分を注文して、家族の口に合うか・受け取りが回るかを確認するのが失敗しない始め方です。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/nosh-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/green-spoon-kuchikomi/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            GREEN SPOONの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link
            href="/articles/mealkit-vs-reitou-bento/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ミールキット vs 冷凍弁当の選び方
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
              <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                nosh(ナッシュ)の口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/green-spoon-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                GREEN SPOON(グリーンスプーン)の口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/mealkit-vs-reitou-bento/" className="text-accent hover:text-accent-dark transition-colors">
                ミールキット vs 冷凍弁当｜違いと選び方
              </Link>
            </li>
            <li>
              <Link href="/articles/yoshikei-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】ヨシケイの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link href="/articles/kyoudoki-yushoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">
                共働き家庭の夕食宅配の選び方
              </Link>
            </li>
            <li>
              <Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark transition-colors">
                【2026年最新】まごころケア食の口コミ・評判を徹底調査
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
