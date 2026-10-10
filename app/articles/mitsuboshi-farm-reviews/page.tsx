import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "三ツ星ファームの口コミ・評判は？まずいって本当？料金・解約条件を公式で確認【2026年10月最新】";
const ARTICLE_DESCRIPTION =
  "三ツ星ファームの口コミ・評判を楽天・Yahoo!ショッピング・第三者の実食レビューなど出典付きで整理。「まずい」の声の中身、料金（1食711円〜）・送料・解約手数料・停止の締切を公式サイトで確認しました。【2026年10月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/mitsuboshi-farm-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "三ツ星ファーム 口コミ, 三ツ星ファーム 評判, 三ツ星ファーム まずい, 三ツ星ファーム 料金, 三ツ星ファーム 送料, 三ツ星ファーム メニュー, 宅配弁当 口コミ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-16T00:00:00+09:00",
    modifiedTime: "2026-10-10T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "三ツ星ファームの最低注文回数は？すぐ解約できる？",
    answer:
      "通常の定期便（よりどりプラン）には受け取り回数の約束や解約手数料の記載はなく、2回目以降は停止できます。ただし初回分は解約・キャンセル・変更ができません。お得な「長期継続応援プラン」は合計6回の受け取りが条件で途中解約は7,700円（税込）、「冷凍庫プレゼントプラン」は合計12回が条件で途中解約は16,500円（税込）の手数料がかかり、どちらも途中解約は電話のみです（公式サイト・各プランページ、2026年10月9日確認）。まずはよりどりプランで味と量を確かめてから切り替えるのが安全です。",
  },
  {
    question: "定期便の停止・解約はどこから？締切はいつ？",
    answer:
      "公式FAQ「定期プランの停止について」によると、停止は公式アプリ（24時間）、公式LINE（24時間）、電話（0120-39-3244・9:00〜18:00・年末年始除く）で受け付けています。次回お届け予定日の7日前（遠方地域は8日前）に注文が確定して出荷手配に入るため、それまでにマイページに表示される「変更締切日」までの手続きが必要です。長期継続応援プラン・冷凍庫プレゼントプラン契約中は、アプリ・LINEでの停止はできず電話になります（2026年10月9日確認）。",
  },
  {
    question: "三ツ星ファームの賞味期限はどれくらい？",
    answer:
      "公式FAQによると、冷凍弁当の賞味期限は製造から1年です。お届け後1ヶ月以内に食べる想定で、発送時に賞味期限が1ヶ月以上残っている商品が届きます。詳しい日付はパッケージのラベルで確認でき、解凍後・調理後は早めに食べるよう案内されています（2026年10月9日確認）。",
  },
  {
    question: "三ツ星ファームとnoshの違いは？どっちがおすすめ？",
    answer:
      "三ツ星ファームはミシュラン1つ星の和食店店主などの料理人監修メニューと、カロリー・糖質に加えてたんぱく質の下限（15g以上）まで決めた「三ツ星基準」が特徴です。noshは1食612円〜（通常時）とやや安く、継続割引のnosh clubで最安492円まで下がります。価格を重視するならnosh、味の評判とたんぱく質量を重視するなら三ツ星ファームが候補です。詳しくは3社比較記事をご覧ください。",
  },
  {
    question: "三ツ星ファームはダイエット向き？",
    answer:
      "公式サイトによると、おかずプレートはカロリー350kcal以下・糖質25g以下・たんぱく質15g以上の「三ツ星基準」で作られています（一部商品を除く）。カロリーと糖質を抑えつつたんぱく質を確保したい人には向いた設計です。ただしおかずのみ（ご飯なし）なので、主食は別に用意する必要があり、量が少なめと感じる口コミもあります。",
  },
  {
    question: "三ツ星ファームの送料はいくら？",
    answer:
      "送料は990円（税込）、北海道・沖縄は2,500円（税込）です。14食・21食コースは初回のみ送料無料、7食コースは初回から送料がかかります。長期継続応援プラン・冷凍庫プレゼントプランは初回から送料がかかります（公式サイト・特定商取引法に基づく表記、2026年10月9日確認）。",
  },
  {
    question: "三ツ星ファームにアプリはある？",
    answer:
      "あります。公式サイトでは「WEB・アプリから注文」と案内されており、iOS・Android向けの公式アプリからメニュー変更・お届け日の変更・定期便の停止ができます。公式LINEとID連携すると、LINEから停止の手続きもできます（2026年10月9日確認）。",
  },
  {
    question: "定期便を契約せずに試せる？",
    answer:
      "公式サイトでは、定期便とは別に1回限りの「都度購入」で好きな商品を1個から注文できると案内されています（1回の注文ごとに送料がかかります）。定期便の初回分はキャンセルできないため、味が不安な人は都度購入で数個試してから定期便を始める方法もあります（2026年10月9日確認）。",
  },
  {
    question: "支払い方法は？",
    answer:
      "特定商取引法に基づく表記では、クレジットカード（VISA・Mastercard・JCB・AMEX・Diners、一括払いのみ）と後払い（NP後払い・手数料248円）の2種類です（2026年10月9日確認）。",
  },
  {
    question: "アレルギーには対応している？",
    answer:
      "公式サイトによると、三ツ星ファームの商品はアレルギーに完全対応していません。全商品を同じラインで製造しているため、該当食材を確実に除くことはできないと案内されています。公式アプリには苦手・アレルギー食材の登録機能がありますが、公式FAQでは「アレルギーによって重篤な症状が出る方は、ご利用をお控えください」と案内されています（2026年10月9日確認）。",
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
          <Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">三ツ星ファームの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "三ツ星ファームとは？基本情報まとめ" },
    { id: "good-reviews", label: "三ツ星ファームの良い口コミ・評判" },
    { id: "bad-reviews", label: "三ツ星ファームの悪い口コミ・評判" },
    { id: "caution", label: "口コミを読むときの注意点（消費者庁の確約計画認定）" },
    { id: "merits", label: "口コミと公式情報からわかったメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "三ツ星ファームの料金・送料を徹底解説" },
    { id: "cancel", label: "解約・停止の方法と締切（公式で確認）" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "他社との簡易比較" },
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

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
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

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>
          &#9733;
        </span>
      ))}
    </span>
  );
}

/* ---------- Page Component ---------- */

export default function MitsuboshiFarmReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-16T00:00:00+09:00",
    dateModified: "2026-10-10T00:00:00+09:00",
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"\u4e09\u30c4\u661f\u30d5\u30a1\u30fc\u30e0\u306e\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}]}" }}
      />
      

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        {/* Title */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            口コミ・評判
          </span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-16">公開: 2026年4月16日</time>
            <time dateTime="2026-10-09">更新: 2026年10月9日（公式で再確認）</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        {/* Lead */}
        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「三ツ星ファームって本当に美味しいの？」「まずいって口コミがあるけど大丈夫？」——一流シェフ監修の冷凍宅配弁当として注目を集める三ツ星ファーム。口コミでは味やメニューの多さを評価する声が目立つ一方、「値段が高い」「量が少ない」「解約の条件がわかりにくい」という不満も見られます。
          </p>
          <p className="mb-3">
            そこでこの記事では、<strong>三ツ星ファームの口コミ・評判を徹底的にリサーチ</strong>。楽天・Yahoo!ショッピングの公開レビューや第三者メディアの実食レビューを出典付きで整理し、料金・送料・解約条件は公式サイトで確認しました（2026年10月9日）。
          </p>
          <p>
            さらに、<strong>料金プラン・送料・メニューの特徴</strong>まで詳しく解説。三ツ星ファームが自分に合うかどうか、この記事を読めば判断できます。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：三ツ星ファームはこんな人に向いています</p>
          <p className="text-sm leading-relaxed mb-4">三ツ星ファームは、<strong>「価格よりも味とメニューの満足度を重視したい人」</strong>に向いた宅配弁当です。口コミでは味のレベルの高さやメニューの豊富さを評価する声が多い一方、1食あたりの価格は他の低価格サービスより高めで、送料も別途かかる点は押さえておきたいポイントです。「まずい」という声もありますが、価格帯を踏まえた評価は分かれており、味の感じ方には個人差があります。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>味・メニューの満足度を評価する口コミが多い</li><li>糖質・カロリーに配慮したコース設計</li><li>容器やパッケージがきれい</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1食あたりの価格は低価格系より高め</li><li>送料が別途かかる</li><li>定期コースの縛り・解約条件は要確認</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">三ツ星ファーム 公式サイトで最新の料金・お試しを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">三ツ星ファームとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          三ツ星ファームは、株式会社イングリウッド（東京都渋谷区）が運営する冷凍宅配食サービスです。公式サイトでは、ミシュラン1つ星を7年連続獲得した和食割烹「鈴なり」店主・村田明彦氏の監修メニューや、<strong>おかずプレートをカロリー350kcal以下・糖質25g以下・たんぱく質15g以上にそろえる「三ツ星基準」</strong>（一部商品を除く）を打ち出しています。電子レンジで約5分温めるだけで食べられ、メニューは125種類以上から選べます（いずれも公式サイト・2026年10月9日確認）。
        </p>

        <SubHeading>三ツ星ファームの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "株式会社イングリウッド（東京都渋谷区道玄坂）"],
            ["メニュー数", "125種類以上（公式サイト表記）"],
            ["栄養基準", "おかずプレートは350kcal以下・糖質25g以下・たんぱく質15g以上（三ツ星基準・一部商品を除く）"],
            ["監修", "料理人監修（和食割烹「鈴なり」村田明彦氏など）＋管理栄養士監修"],
            ["コース", "定期便は7食／14食／21食。単品1個からの「都度購入」も可"],
            ["配送", "ヤマト運輸のクール宅急便（冷凍）"],
            ["お届け周期", "1週間／2週間／3週間／4週間ごと"],
            ["支払い方法", "クレジットカード（VISA・Mastercard・JCB・AMEX・Diners）、NP後払い（手数料248円）"],
            ["停止・解約", "公式アプリ・公式LINE（24時間）、電話 0120-39-3244（9:00〜18:00）"],
            ["賞味期限", "製造から1年（届いてから1ヶ月以内に食べる想定）"],
            ["トレイのサイズ", "縦17.7cm×横18cm×高さ4cm"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6 leading-relaxed">
          出典: <a href="https://mitsuboshifarm.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">三ツ星ファーム公式サイト</a>／<a href="https://terms.inglewood.co.jp/n09mnby078/commercial-transactions/" target="_blank" rel="noopener noreferrer nofollow" className="underline">特定商取引法に基づく表記</a>／<a href="https://faq.mitsuboshifarm.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">公式よくある質問</a>（2026年10月9日確認）
        </p>

        <SubHeading>料金プラン概要</SubHeading>
        <ComparisonTable
          headers={["プラン", "料金（税込）", "1食あたり"]}
          rows={[
            ["7食コース", "6,485円", "927円"],
            ["14食コース", "11,458円", "819円"],
            ["21食コース", "14,918円", "711円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          通常の定期便（よりどりプラン）は21食コースが1食あたり最安の711円です。14食・21食コースは初回のみ送料無料で、7食コースは初回から送料がかかります。受け取り回数を約束する「長期継続応援プラン」なら1食あたり約603円まで下がりますが、途中解約に手数料がかかります（下の料金セクションで詳しく解説）。
        </p>

        <SubHeading>三ツ星ファームの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "料理人が監修した125種類以上のメニュー",
              text: "公式サイトでは、ミシュラン1つ星を7年連続獲得した和食割烹「鈴なり」店主・村田明彦氏の監修を紹介し、メインだけでなく副菜までこだわったと説明しています。メニューは125種類以上あり、和洋中から季節限定商品まで、定期便でも毎回自分で選べます。選ぶのが面倒な人向けに、人気順やおすすめで自動選択する「おまかせ選択」機能もあります。",
            },
            {
              title: "カロリー・糖質・たんぱく質の3つに基準がある",
              text: "おかずプレートはカロリー350kcal以下・糖質25g以下・たんぱく質15g以上の「三ツ星基準」で作られています（一部商品を除く）。カロリーや糖質の上限だけでなく、たんぱく質の下限まで決めているのが特徴で、公式サイトでは管理栄養士が「糖質やエネルギーを抑えつつ、たんぱく質をしっかり確保し、不足しがちな野菜を多品目取り入れる」設計だとコメントしています。",
            },
            {
              title: "急速冷凍で、レンジ約5分で食べられる",
              text: "公式サイトでは「素材の味をそのまま、急速冷凍」と説明しており、具材感や彩りにこだわった仕上がりをうたっています。食べるときは電子レンジで約5分温めるだけ。冷凍で届き、賞味期限は製造から1年なので、忙しい日のストックとして置いておけます。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">
          三ツ星ファームの良い口コミ・評判
        </SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          楽天市場・Yahoo!ショッピングの公開レビュー、第三者メディアの実食レビュー、複数媒体の口コミを集計した記事（いずれも2026年10月9日確認）を読み、好意的な意見に多いテーマを整理しました。口コミ本文の転載や、当サイトが独自に聞き取った声ではありません。
        </p>
        <ComparisonTable
          headers={["公開レビュー", "評価・件数", "内容の傾向"]}
          rows={[
            ["楽天市場（ショップレビュー）", "4.68（907件）", "配送の早さ・梱包・対応への評価が中心"],
            ["Yahoo!ショッピング（ストアレビュー）", "4.50（16件：星5が10件・星4が4件・星3が2件）", "件数が少なく参考程度"],
            ["みん評", "件数・平均点は未確認", "当サイトからは閲覧できず、数値は記載していません"],
          ]}
        />
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          参考にした媒体: <a href="https://review.rakuten.co.jp/shop/4/400530_400530/" target="_blank" rel="noopener noreferrer nofollow" className="underline">楽天市場「三ツ星ファーム」ショップレビュー</a>／<a href="https://shopping.yahoo.co.jp/store_rating/mitsuboshifarm/store/review/" target="_blank" rel="noopener noreferrer nofollow" className="underline">Yahoo!ショッピング ストアレビュー</a>／<a href="https://tokyolucci.jp/food/mitsuboshi-farm-kuchikomi" target="_blank" rel="noopener noreferrer nofollow" className="underline">tokyolucci「三ツ星ファームの評価を48件調べてわかった事実」</a>／<a href="https://www.single-meallife.com/mitsuboshifarm-introduction/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ひとり暮らしの宅配食生活（126食の実食レポ）</a>／<a href="https://meal-navi.com/mitsuboshi-farm-report/" target="_blank" rel="noopener noreferrer nofollow" className="underline">プロの宅食さがし（料理家の実食レビュー）</a>／<a href="https://meal.app-liv.jp/archive/138866/" target="_blank" rel="noopener noreferrer nofollow" className="underline">宅食グルメ（家族3人で6日間の実食）</a>（2026年10月9日確認）。ショップレビューは商品の味よりも配送・対応への評価が多い点にご注意ください。
        </p>

        {[
          {
            title: "冷凍弁当としては味のレベルが高い",
            reviews: [
              "126食を食べたという個人ブログ「ひとり暮らしの宅配食生活」は、メリットの1つ目に「味が安定しておいしい」を挙げています。",
              "料理家による実食レビュー（プロの宅食さがし）は14食を食べて「期待以上においしい」と評価し、同時に「おいしくないと感じている人がいるのも事実」と両面を書いています。",
              "48件の口コミを集計した tokyolucci の記事では、外食より美味しく感じたという趣旨の声が紹介されています。",
            ],
          },
          {
            title: "メニューが多く、自分で選べる",
            reviews: [
              "125種類以上から毎回自分で選べる点を評価する声が、複数の比較メディアで紹介されています。",
              "第三者機関の2025年顧客満足度調査で、三ツ星ファームの「品揃え」の項目が76.02点で1位だったと tokyolucci の記事が紹介しています（同記事の総合は3位・62.07点）。",
            ],
          },
          {
            title: "温めるだけで食事の準備が減る",
            reviews: [
              "家族3人で6日間食べた宅食グルメの記事では、「献立を考える手間が減った」という利用者の声を紹介しています。",
              "共働きで夕食を用意できない日に頼っているという趣旨の声も、集計記事（tokyolucci）に掲載されています。",
            ],
          },
          {
            title: "カロリー・糖質を抑えつつたんぱく質がとれる",
            reviews: [
              "350kcal以下・糖質25g以下・たんぱく質15g以上という基準を、食事管理のしやすさとして評価する比較記事が多く見られます。",
              "この基準は公式サイトの表記どおりで（一部商品を除く）、口コミの評価と公式情報が一致しています。",
            ],
          },
          {
            title: "配送・梱包の対応が丁寧",
            reviews: [
              "楽天市場のショップレビュー（907件・平均4.68）は、「予定通り届く」「梱包も問題ない」「配送時期を随時知らせてくれる」といった配送・対応への評価が中心です。",
            ],
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-green-50 rounded-lg p-3 text-sm leading-relaxed"
                >
                  {review}
                </div>
              ))}
            </div>
          </div>
        ))}

        <SubHeading>第三者の実食レビューで評価が高かったポイント</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          当サイトは実食レビューを行っていないため、実際に食べた第三者メディアの評価を出典付きで紹介します（2026年10月9日確認）。
        </p>
        <ComparisonTable
          headers={["レビュー", "評価されていた点"]}
          rows={[
            ["プロの宅食さがし（料理家が14食を実食）", "総合4.1／5。見た目5／5（盛り付けが丁寧）、ボリューム4.6／5（200g超えのおかずが多く満足感が高い）。野菜のカットが丁寧で、メインと副菜の味付けに統一感があると評価"],
            ["同上・おいしかったメニュー", "1位「香ばし醤油の特製豚肉の生姜焼き」、2位「濃厚トマトチーズソースの蟹クリームコロッケ」、3位「とろーりタイ風コク旨ガパオ」"],
            ["ひとり暮らしの宅配食生活（126食を実食）", "「どのメニューもかなりおいしかった」「だれもが食べやすい味付け」。糖質に配慮したスイーツも選べる点、スマホで注文管理できる点をメリットに挙げている"],
            ["宅食グルメ（家族3人で14食を実食）", "献立を考える手間が減った、温めるだけで食べられる手軽さを評価する利用者の声を掲載"],
          ]}
        />
        <p className="text-sm mb-8 leading-relaxed">
          量については「少ない」という声がある一方、料理家のレビューは「200g超えのおかずが多く満足感が高い」と評価しており、ご飯を別に用意するかどうかで感じ方が分かれるようです。味付けは「食べやすい」「やや甘めで刺激が少ない」という評価が多く、濃い味が好きな人より、食べやすさを求める人に合いやすいと言えます。
        </p>

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">
          三ツ星ファームの悪い口コミ・評判
        </SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ネガティブな意見も同じ媒体から整理しました。48件を論点別に数え直した tokyolucci の記事では、口コミ投稿サイトの不満のうち約4割が「やめ方（電話・回数の約束・違約金）」、約3割が「味・量と料金の釣り合い」、約3割が「売り切れと差し替え」だったとしています。「まずい」という声の多くは、全部ではなく一部のメニュー（特に副菜）に向けられています。
        </p>

        {[
          {
            title: "値段が高い（1食711円〜927円＋送料）",
            reviews: [
              "味は認めつつ「この量でこの値段なら続かない」という趣旨の声が、集計記事（tokyolucci）で不満の約3割を占めています。",
              "宅食グルメの記事は、家族3人で14食を食べたうえで、継続を見送った理由を正直に書いています。",
            ],
            comment:
              "通常の定期便は1食711円〜927円で、2回目以降は毎回送料990円がかかります。noshの通常価格（1食612円〜）より高めです。費用を抑えるなら21食コース（送料込みで1食約758円）か、回数の約束がある長期継続応援プラン（21食で1食約603円）が選択肢ですが、長期継続応援プランは6回未満で解約すると7,700円の手数料がかかる点に注意しましょう。",
          },
          {
            title: "量が少ないと感じる（おかずのみ）",
            reviews: [
              "量が少なく、結局もう1〜2品を作るか買うことになるという声が集計記事（tokyolucci）に掲載されています。",
              "宅食グルメの記事は量について「大戸屋の定食・コンビニ弁当とほぼ同量」と書いており、感じ方は人によって分かれます。",
            ],
            comment:
              "三ツ星ファームはご飯が付かないおかずのみの構成で、カロリー350kcal以下の基準で作られているため、しっかり食べたい人には物足りない可能性があります。ご飯や汁物を足す前提で考えると、量の不満は起きにくくなります。",
          },
          {
            title: "副菜やメニューによって当たり外れがある",
            reviews: [
              "「メインはしっかり美味しいが、副菜に当たり外れがある」という書き方が別々の媒体で並んでいた、と tokyolucci の記事は指摘しています。",
              "21食を7か月続けた人の「だいたい6割くらいが美味しいという感覚」という声も同記事に掲載されています。",
            ],
            comment:
              "メニューは毎回自分で選べるので、合わなかった商品を次から外していけば当たり外れは減らせます。公式アプリには苦手な食材を登録しておける機能もあります。",
          },
          {
            title: "売り切れで別の商品に差し替えられる",
            reviews: [
              "人気の商品を選んでいても売り切れで届かず、別の商品に差し替えられたという声が集計記事（tokyolucci）で不満の約3割を占めています。",
            ],
            comment:
              "公式アプリでは、欠品したときの代替商品を事前に設定できます（Webでは設定不可）。苦手・アレルギー食材を登録しておくと、差し替え対象からも除外されると公式FAQで案内されています。",
          },
          {
            title: "解約・停止の手続きがわかりにくい",
            reviews: [
              "電話でしか手続きできない、回数の約束や違約金がある、といった「やめ方」への不満が、口コミ投稿サイトの不満の約4割を占めていたと tokyolucci の記事は集計しています。",
            ],
            comment:
              "通常の定期便（よりどりプラン）なら公式アプリ・公式LINEから24時間停止でき、回数の約束もありません。電話が必要になるのは、長期継続応援プラン・冷凍庫プレゼントプランを契約中の場合などです。どのプランかで手続きが変わるので、契約前に下の「解約・停止の方法と締切」を確認してください。",
          },
          {
            title: "冷凍庫のスペースが必要",
            reviews: [
              "ひとり暮らしの宅配食生活の記事は、デメリットに「冷凍庫の空きが必要」を挙げています。",
            ],
            comment:
              "トレイのサイズは縦17.7cm×横18cm×高さ4cm（公式FAQ）。14食・21食をまとめて受け取るとかなりの場所をとるので、小型の冷凍庫なら7食コースか、お届け周期を短くして1回の食数を減らす方法があります。冷凍庫プレゼントプラン（合計12回の受け取りが条件）では幅474×奥行447×高さ496mmの冷凍庫が届きます。",
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-red-50 rounded-lg p-3 text-sm leading-relaxed"
                >
                  {review}
                </div>
              ))}
            </div>
            <div className="bg-cream rounded-lg p-4 text-sm leading-relaxed">
              <p className="font-bold mb-1">編集部の見解</p>
              <p>{category.comment}</p>
            </div>
          </div>
        ))}

        {/* ===== 口コミを読むときの注意 ===== */}
        <SectionHeading id="caution">口コミを読むときの注意点（消費者庁の確約計画認定）</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          消費者庁は2025年9月19日、三ツ星ファームを運営する株式会社イングリウッドが申請した景品表示法上の「確約計画」を認定しました。公表資料によると、対象となったのは、客観的な調査に基づかない「No.1」等の表示（2021年6月16日〜2024年8月9日）と、対価を提供して依頼したInstagram投稿を自社サイトに抜粋して表示していた行為（例として2023年10月1日〜2024年8月19日）です。確約計画には、2021年6月16日〜2025年2月9日の購入者への購入金額の一部返金などが含まれています。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          なお、この認定は消費者庁が違反を認定したものではないと明記されています。当サイトでは、公式サイトに掲載された利用者の声ではなく、楽天・Yahoo!ショッピングの公開レビューや第三者メディアの記事を出典として口コミを整理しています。
        </p>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          出典: <a href="https://www.caa.go.jp/notice/entry/043618/" target="_blank" rel="noopener noreferrer nofollow" className="underline">消費者庁「株式会社イングリウッドから申請があった確約計画の認定について」</a>（2025年9月19日公表・2026年10月9日確認）
        </p>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">
          口コミと公式情報からわかったメリット5つ
        </SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミや公開情報から見えてくる三ツ星ファームのメリットを5つにまとめました（当サイトは実食レビューを行っていません）。
        </p>

        {[
          {
            num: 1,
            title: "味の評価が高い冷凍弁当",
            text: "実食した第三者メディアや個人ブログでは「味が安定しておいしい」「期待以上においしい」という評価が目立ちます。料理人監修のメインに加えて副菜も作り込んでいると公式サイトは説明しています。一方で副菜やメニューによる当たり外れを指摘する声もあるため、好みの商品を見つけて選び直していくのが満足度を上げるコツです。",
          },
          {
            num: 2,
            title: "125種類以上から毎回自分で選べる",
            text: "メニューはコース固定ではなく、毎回125種類以上から選べます。選ぶのが面倒なら人気順・おすすめで自動選択する「おまかせ選択」機能、欠品に備えた代替商品の設定、苦手食材の登録もアプリでできます。顧客満足度調査で「品揃え」の項目が1位だったという紹介もあります。",
          },
          {
            num: 3,
            title: "たんぱく質の下限まで決めた栄養基準",
            text: "おかずプレートは350kcal以下・糖質25g以下・たんぱく質15g以上（一部商品を除く）。noshは糖質30g以下・塩分2.5g以下の基準ですが、たんぱく質の下限は設けていません。カロリーと糖質を抑えながらたんぱく質もとりたい人には、三ツ星ファームの基準が合います。",
          },
          {
            num: 4,
            title: "アプリ・LINEで変更や停止ができる",
            text: "公式アプリからメニュー変更・お届け日の変更（最大2週間先まで）・定期便の停止ができ、公式LINEからも停止の手続きができます。通常の定期便（よりどりプラン）は受け取り回数の約束がないので、合わなければ2回目以降に止められます。",
          },
          {
            num: 5,
            title: "続けるほど安くなるプランがある",
            text: "合計6回の受け取りを約束する長期継続応援プランなら、21食で1食約603円、14食で1食約711円まで下がり、6回以降も同じ価格で続けられます。さらに過去12ヶ月の購入金額に応じた5段階の会員ランク制度があり、メルマガ購読者にはランク別のクーポンが毎月5日に案内されます。",
          },
        ].map((merit) => (
          <div key={merit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {merit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{merit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {merit.text}
              </p>
            </div>
          </div>
        ))}

        {/* ===== デメリット ===== */}
        <SectionHeading id="demerits">注意すべきデメリット3つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミと公式情報から見えた、契約前に知っておきたい注意点です。
        </p>

        {[
          {
            num: 1,
            title: "送料込みだと1食あたりの単価は高め",
            text: "通常の定期便で最も安い21食コースでも、送料990円を加えると1食あたり約758円。7食コースは送料込みで約1,068円です。noshの10食プラン（関東）は送料込みで約737円なので、通常の定期便同士では三ツ星ファームがやや高くなります。毎日使うより、平日の夕食など回数を決めて使うほうが費用は読みやすくなります。",
          },
          {
            num: 2,
            title: "初回分はキャンセル・変更ができない",
            text: "公式サイトによると、定期便の初回分は解約・キャンセル・決済などの変更を受け付けていません。2回目以降も、次回お届け予定日の7日前（遠方は8日前）に注文が確定するため、それまでに手続きが必要です。メニューを選んだら「メニューを保存する」を押さないと前回と同じメニューが届く、と公式FAQが注意しています。",
          },
          {
            num: 3,
            title: "お得なプランは途中解約に手数料がかかる",
            text: "長期継続応援プランは合計6回の受け取りが条件で途中解約は7,700円（税込）、冷凍庫プレゼントプランは合計12回が条件で途中解約は16,500円（税込）です。どちらも途中解約は電話のみで、アプリ・LINEからは停止できません。まずは通常の定期便（よりどりプラン）で味と量を確認してから切り替えましょう。",
          },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {demerit.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {demerit.text}
              </p>
            </div>
          </div>
        ))}

        {/* ===== 料金・送料 ===== */}
        <SectionHeading id="price">
          三ツ星ファームの料金・送料を徹底解説
        </SectionHeading>

        <SubHeading>プラン別料金表（通常の定期便＝よりどりプラン）</SubHeading>
        <ComparisonTable
          headers={["コース", "料金（税込）", "1食あたり", "送料込み1食あたり（2回目以降）"]}
          rows={[
            ["7食コース", "6,485円", "927円", "約1,068円"],
            ["14食コース", "11,458円", "819円", "約889円"],
            ["21食コース", "14,918円", "711円", "約758円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6 leading-relaxed">
          ※料金・1食あたりは公式サイト表記（2026年10月9日確認）。送料込みは本州の送料990円を加えて編集部が計算。14食・21食コースの初回は送料無料です。
        </p>

        <SubHeading>長期継続応援プラン・冷凍庫プレゼントプラン</SubHeading>
        <ComparisonTable
          headers={["プラン", "料金（税込）", "1食あたり", "条件", "途中解約"]}
          rows={[
            ["長期継続応援プラン 14食", "9,946円＋送料", "約711円", "合計6回の受け取り", "7,700円"],
            ["長期継続応援プラン 21食", "12,650円＋送料", "約603円", "合計6回の受け取り", "7,700円"],
            ["冷凍庫プレゼントプラン 14食", "9,946円＋送料", "約711円", "合計12回の受け取り", "16,500円"],
            ["冷凍庫プレゼントプラン 21食", "12,650円＋送料", "約603円", "合計12回の受け取り", "16,500円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">
          どちらのプランも初回から送料がかかり、規定回数のあとも同じ価格で続けられます。冷凍庫プレゼントプランは12回目の決済が終わると冷凍庫（幅474×奥行447×高さ496mm）がそのままもらえますが、途中で解約すると16,500円を支払い、冷凍庫の回収・処分は行われません。途中解約はどちらも電話のみです（公式
          <a href="https://mitsuboshifarm.jp/page/longtermplan/04/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">長期継続応援プラン</a>・
          <a href="https://mitsuboshifarm.jp/page/freezer/02/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">冷凍庫プレゼントプラン</a>
          ページ、2026年10月9日確認）。1食あたりは料金÷食数で編集部が計算しています。
        </p>

        <SubHeading>送料</SubHeading>
        <ComparisonTable
          headers={["地域・条件", "送料（税込）"]}
          rows={[
            ["北海道・沖縄以外", "990円"],
            ["北海道・沖縄", "2,500円"],
            ["14食・21食コースの初回", "無料"],
            ["7食コース・長期継続応援／冷凍庫プレゼントプラン", "初回からかかる"],
            ["都度購入（単品）", "1回の注文ごとにかかる"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          <strong>送料のポイント：</strong>
          三ツ星ファームの送料は北海道・沖縄以外なら一律990円（北海道・沖縄は2,500円）。noshは地域別で、4〜12食なら最安の関西でも1,023円・関東1,166円なので、北海道・沖縄以外では1回あたりの送料は三ツ星ファームのほうが安くなります。ただし1食あたりの料金はnoshのほうが安いため、送料込みの総額で比べるのが確実です。送料込みの1食実質単価で18社を横並び比較した<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>（編集部の公式サイト一次調査）も参考にしてください。
        </p>

        <SubHeading>会員ランク制度の仕組み</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          公式の<a href="https://mitsuboshifarm.jp/page/rank/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">会員ランク制度</a>ページによると、過去12ヶ月間の購入金額に応じて5つの会員ランクがあり、毎月1日に判定されます。ランク別の特別クーポンは、メルマガを購読している人に毎月5日に案内されます。ランクごとの条件や割引額は画像で掲載されており、変更される場合もあるため、最新の内容は公式ページで確認してください（2026年10月9日確認）。
        </p>

        <SubHeading>月額コストシミュレーション</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          1ヶ月利用した場合のコストを利用頻度別に試算しました（本州在住・通常の定期便・2回目以降で初回送料無料なし）。
        </p>
        <ComparisonTable
          headers={[
            "利用パターン",
            "食数/月",
            "食材費",
            "送料",
            "月額合計",
            "1食あたり",
          ]}
          rows={[
            [
              "週1〜2回（7食×1回）",
              "7食",
              "6,485円",
              "990円",
              "7,475円",
              "約1,068円",
            ],
            [
              "週3〜4回（14食×1回）",
              "14食",
              "11,458円",
              "990円",
              "12,448円",
              "約889円",
            ],
            [
              "毎日（21食×1回）",
              "21食",
              "14,918円",
              "990円",
              "15,908円",
              "約758円",
            ],
            [
              "毎日（21食×1回＋7食×1回）",
              "28食",
              "21,403円",
              "1,980円",
              "23,383円",
              "約835円",
            ],
          ]}
        />

        {/* ===== 解約・停止 ===== */}
        <SectionHeading id="cancel">解約・停止の方法と締切（公式で確認）</SectionHeading>
        <p className="text-sm mb-4 leading-relaxed">
          口コミの不満で最も多いのが「やめ方」です。公式FAQと特定商取引法に基づく表記（2026年10月9日確認）をもとに、プラン別に整理しました。
        </p>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["停止の窓口", "公式アプリ（24時間）／公式LINE（24時間・ID連携が必要）／電話 0120-39-3244（9:00〜18:00・年末年始除く）"],
            ["締切", "マイページの「変更締切日」まで。次回お届け予定日の7日前（遠方地域は8日前）に注文が確定"],
            ["初回分", "解約・キャンセル・変更はできない"],
            ["通常の定期便（よりどりプラン）", "回数の約束なし。2回目以降はアプリ・LINE・電話で停止可"],
            ["長期継続応援プラン", "合計6回の受け取りが条件。途中解約は電話のみ・手数料7,700円"],
            ["冷凍庫プレゼントプラン", "合計12回の受け取りが条件。途中解約は電話のみ・手数料16,500円"],
            ["LINEで停止できない主なケース", "定期プランが複数／次回お届けが7日以内／お届け周期が毎週・2週・3週・4週以外／上の2プランを契約中"],
            ["一時的に休みたいとき", "停止せずに、お届け日を最大2週間先まで延ばせる（4週ごとの人は受け取り日から最大42日先まで）"],
          ]}
        />
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          出典: <a href="https://faq.mitsuboshifarm.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">公式よくある質問</a>（「定期プランの停止について」「注文情報の変更期限について」「お届けを一時的に休止したい」）／<a href="https://terms.inglewood.co.jp/n09mnby078/commercial-transactions/" target="_blank" rel="noopener noreferrer nofollow" className="underline">特定商取引法に基づく表記</a>（2026年7月24日改定版）。公式トップページの注記では「次回出荷予定日の4日前まで」と表現されています。
        </p>

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">
          三ツ星ファームがおすすめな人・おすすめしない人
        </SectionHeading>

        <SubHeading>三ツ星ファームがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "味のクオリティを最重視する人",
              "レストラン品質の食事を自宅で手軽に楽しみたい人",
              "高たんぱく・低糖質の食事で筋トレ・ボディメイクしたい人",
              "見た目の美しさ・食事の楽しさを大切にしたい人",
              "125種類以上から毎回メニューを選びたい人",
              "週2〜3回の「ご褒美ごはん」として活用したい人",
              "アプリ・LINEで変更や停止を済ませたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>三ツ星ファームをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "コスパ最優先で1食でも安く抑えたい人 → noshがおすすめ",
              "ボリューム重視でがっつり食べたい人（おかずのみ・350kcal以下の設計）",
              "医師から厳密な食事制限を指示されている人 → ウェルネスダイニングがおすすめ",
              "重い食物アレルギーがある人（アレルギーに完全対応していないと公式が案内）",
              "北海道・沖縄在住で送料が負担になる人",
              "毎日3食すべてを宅配弁当で済ませたい人（コスト面）",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">他社との簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          三ツ星ファームと主要な競合サービスを簡単に比較してみましょう。より詳しい比較は
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="text-accent hover:text-accent-dark underline"
          >
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
          の記事で解説しています。
        </p>

        <ComparisonTable
          headers={["項目", "三ツ星ファーム", "nosh", "ウェルネスダイニング"]}
          rows={[
            ["1食あたり最安（通常時）", "711円〜（長期継続応援プランで約603円）", "612円〜（nosh clubで最安492円）", "約752円〜（税込÷食数）"],
            ["メニュー数", "125種類以上", "100種類以上", "コース制（固定）"],
            ["口コミでの味の評価", "高い（副菜に当たり外れの声あり）", "おおむね良好", "制限食として評価"],
            ["カロリー", "350kcal以下（一部除く）", "メニューにより異なる", "コースにより異なる"],
            ["糖質", "25g以下（一部除く）", "30g以下", "15g以下コースあり"],
            ["たんぱく質", "15g以上（一部除く）", "下限の設定なし", "コースにより異なる"],
            ["送料（本州）", "990円", "1,023円〜（地域別）", "都度880円（定期14・21食無料・7食440円）"],
            ["アプリ", "あり（iOS・Android）", "あり", "なし"],
            ["向いている人", "味・クオリティ重視", "コスパ・自由度重視", "食事制限・高齢者"],
          ]}
        />

        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold">
                  項目
                </th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">
                  三ツ星ファーム
                </th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">
                  nosh
                </th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">
                  ウェルネスダイニング
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["総合おすすめ度", 4, 5, 4],
                ["味", 5, 4, 3],
                ["コスパ", 3, 5, 3],
                ["メニュー自由度", 4, 5, 2],
                ["健康管理", 4, 4, 5],
                ["使いやすさ", 4, 5, 3],
              ].map(([label, m, n, w], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium">
                    {label as string}
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={m as number} />
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={n as number} />
                  </td>
                  <td className="border border-warm-border px-3 py-2">
                    <StarRating count={w as number} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray mb-6 leading-relaxed">
          ※星の数は、公式情報と出典付きの口コミをもとにした編集部の整理です（実食による評価ではありません）。料金・送料は各社公式サイトで2026年10月に確認した値です。
        </p>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ
              key={i}
              question={`Q${i + 1}. ${faq.question}`}
              answer={faq.answer}
            />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">
          まとめ：三ツ星ファームはこんな人におすすめ
        </SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">三ツ星ファームの総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度", 4],
                  ["味", 5],
                  ["コスパ", 3],
                  ["メニュー自由度", 4],
                  ["栄養バランス", 5],
                  ["使いやすさ", 4],
                ].map(([label, count], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-white/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium">
                      {label as string}
                    </td>
                    <td className="border border-warm-border px-3 py-2">
                      <StarRating count={count as number} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            三ツ星ファームは<strong>「味の評判」「メニューの多さ」「たんぱく質まで決めた栄養基準」</strong>
            が強みの冷凍宅配食です。楽天のショップレビューは907件で平均4.68、実食した第三者メディアでも味を評価する声が目立ちます。一方で、量の少なさ・価格・副菜の当たり外れ・お得なプランの解約手数料を指摘する声もあります。食事の質を重視する人、筋トレやダイエットでたんぱく質を確保したい人に向いています。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一方、コスパを重視するならnosh、医療レベルの食事制限が必要ならウェルネスダイニングが向いています。
          </p>
          <p className="text-sm leading-relaxed">
            始めるなら、<strong>初回送料無料の14食・21食コース（通常の定期便）</strong>
            で味と量を確かめ、合えば長期継続応援プランへ切り替える順番が安全です。定期便に抵抗がある人は、1個から買える都度購入で数品試す方法もあります。初回分はキャンセルできないので、注文前にメニューと食数を確認しましょう。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
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
            href="/articles/wellness-dining-reviews/"
            className="text-accent hover:text-accent-dark underline font-medium text-sm"
          >
            ウェルネスダイニングの口コミ・評判
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
              <Link
                href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
                className="text-accent hover:text-accent-dark transition-colors"
              >
                【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
              </Link>
            </li>
            <li>
              <Link
                href="/articles/nosh-reviews/"
                className="text-accent hover:text-accent-dark transition-colors"
              >
                【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link
                href="/articles/wellness-dining-reviews/"
                className="text-accent hover:text-accent-dark transition-colors"
              >
                【2026年最新】ウェルネスダイニングの口コミ・評判を徹底調査
              </Link>
            </li>
            <li>
              <Link
                href="/articles/hitorigurashi-osusume/"
                className="text-accent hover:text-accent-dark transition-colors"
              >
                【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5
              </Link>
            </li>
            <li><Link href="/articles/mitsuboshi-coupon/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのクーポン・キャンペーン｜初回割引の探し方と注意点</Link></li>
          </ul>
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
                <tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">nosh（ナッシュ）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">612-719</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">三ツ星ファーム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">25以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">711-927</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウェルネスダイニング</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-330</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">12-18</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">752-1,165</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://magokoro-care-shoku.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">まごころケア食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-350</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">462-580</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワタミの宅食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">40-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">3.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">590-680</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://shoutakubin.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">食宅便</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">560-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">Muscle Deli</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-60</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,098-1,490</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">597-750</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.5</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">550-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.pal-system.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">パルシステム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">580-720</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ナッシュclub（割引）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">492〜（最高ランク）</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">つるかめキッチン</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">13</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">660-815</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://1meal.life/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワンミール</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">770-840</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://fitfoodhome.tabeyoukai.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">FIT FOOD HOME</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">750-1,080</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://gofood.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">GOFOOD</a>（2025年6月30日にサービス終了）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">サービス終了</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※2026年5月時点の公開データ（三ツ星ファームの行は2026年10月9日に公式サイトで再確認し、kcal・糖質・タンパク質を三ツ星基準、価格を通常の定期便の1食単価に更新。塩分は公式に基準の記載が見当たらないため「−」。nosh・ナッシュclub・ウェルネスダイニングの価格は2026年10月10日に公式サイトで再確認し、noshは公式表記の1食単価、ウェルネスダイニングは全6コース・7〜21食の税込価格÷食数で算出、kcal・塩分は各コースの公式基準に更新）。最新情報は各公式サイトでご確認ください。</p>
        </section>

                {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
