import type { Metadata } from "next";
import Link from "next/link";
import ServiceCapture from "@/components/ServiceCapture";

const ARTICLE_TITLE =
  "ニチレイフーズダイレクトのお試しセット【2026年版】内容・送料・申し込みの流れ";
const ARTICLE_DESCRIPTION =
  "ニチレイフーズダイレクトのお試しセットについて、内容のタイプ・送料の考え方・申し込みの流れ・注意点をわかりやすく解説します。冷凍弁当を初めて試す人向けに選び方も紹介します。価格・送料・キャンペーンは変動するため、最新は公式サイトでご確認ください。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nichirei-otameshi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ニチレイフーズダイレクト お試しセット, ニチレイ お試し, ニチレイフーズダイレクト 送料, ニチレイ 冷凍弁当, ニチレイ 宅配, ニチレイフーズダイレクト 申し込み, 冷凍弁当 お試し",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-06-04T00:00:00+09:00",
    modifiedTime: "2026-10-31T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "ニチレイフーズダイレクトのお試しセットはいくら？",
    answer:
      "公式のお試しセット特集では6種類が販売されています。人気No.1の「きくばりごぜん」お試し4食セットが3,300円、まめなごはん お試し4食セット（おかず＋主食）が3,800円、パワーデリ お試し4食セットが4,320円、きくばりごぜん 栄養成分別セット（糖質・塩分・脂質を控えたい方向け）が各3,550円です（いずれも税込・2026年10月31日公式で確認）。別途送料がかかります。",
  },
  {
    question: "送料はかかる？",
    answer:
      "通常購入（お試しセットを含む）の送料は、注文金額と配送先で決まります。本州・四国は7,500円以上0円・5,000〜7,499円700円・5,000円未満1,000円、北海道・九州は400円・1,100円・1,400円、沖縄は1,700円・2,400円・2,700円です。定期購入は全国0円です（2026年10月31日 公式「送料・配送について」で確認）。お試しセット1つ（3,300〜4,320円）だけなら、本州・四国で送料1,000円がかかります。",
  },
  {
    question: "お試しセットの中身はどんな内容？",
    answer:
      "どのセットも冷凍の4食入りです。きくばりごぜんのお試しセットは、たまねぎソースの和風ハンバーグ・デミグラスのポークソテー・鶏もも肉の治部煮風・赤魚の粕漬け焼きの4品で、4品平均は192kcal・塩分1.7g・野菜使用量100g以上です。まめなごはんは主食つきで4品平均たんぱく質22.6g・400kcal・塩分2.3g、パワーデリは4品平均たんぱく質29.0g・370kcalです（2026年10月31日公式で確認。商品内容は予告なく変更されることがあります）。",
  },
  {
    question: "お試しだけで終わらせることはできる？(定期縛りはある？)",
    answer:
      "できます。公式のお試しセット特集に「定期便ではありません。ご注文の都度、お好きなメニューを必要な数量だけお届けします。1回限りのご注文もお受けします」と明記されています（2026年10月31日確認）。定期購入を希望する場合は、別に定期商品を申し込みます。",
  },
  {
    question: "申し込みから到着までどれくらい？",
    answer:
      "配送日は注文画面に表示される期間から指定でき、配送希望時間も選べます。指定しない場合は最短でのお届けです。配送会社は佐川急便・ヤマト運輸から選べます（公式「送料・配送について」）。天候や配送状況で日数がかかる場合があります。",
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
          <Link href="/articles/#otoku" className="text-foreground/70 hover:text-accent transition-colors">クーポン・お試しセット</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ニチレイフーズダイレクト お試しセット</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "summary-top", label: "まずは公式のお試しセットで味を確認" },
    { id: "what", label: "ニチレイフーズダイレクトとは" },
    { id: "naiyo", label: "お試しセットの内容タイプ" },
    { id: "souryo", label: "送料（注文金額と配送先で決まる）" },
    { id: "flow", label: "お試しセット申し込みの流れ" },
    { id: "warnings", label: "申し込み前に確認したい注意点" },
    { id: "muki", label: "ニチレイのお試しが向いている人" },
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

/* ---------- Page Component ---------- */

export default function NichireiOtameshiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-06-04T00:00:00+09:00",
    dateModified: "2026-10-31T00:00:00+09:00",
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
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "クーポン・お試しセット" },
      { "@type": "ListItem", position: 3, name: "ニチレイフーズダイレクト お試しセット" },
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
        <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/topic-otameshi.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-otameshi-m.webp)" }}>
        <Breadcrumbs />

        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            お試しセット
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-06-04">公開: 2026年6月4日</time>
            <time dateTime="2026-10-31">更新: 2026年10月31日（お試しセットの種類・価格・送料・配送を公式で確認）</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">
                宅食びより編集部
              </Link>
            </span>
          </div>
        </header>
        </div>{/* /subhead */}

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。<strong>2026年10月31日時点の公式情報に基づき記述</strong>しています。料金・キャンペーンは変動するため、最新は<a href="https://wellness.nichirei.co.jp/shop/pages/trial_2010.aspx" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ニチレイフーズダイレクト公式サイト</a>でご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「ニチレイの冷凍弁当を試してみたいけど、いきなり定期はちょっと…」——そんなときに役立つのが<strong>お試しセット</strong>です。まずは少量から味・量・使い勝手を確かめられます。
          </p>
          <p className="mb-3">
            この記事では、ニチレイフーズダイレクトのお試しセットについて、<strong>内容のタイプ・送料の考え方・申し込みの流れ・注意点</strong>を整理して解説します。
          </p>
          <p>
            本記事の価格・送料・セット内容は2026年10月31日に公式サイトで確認したものです。内容は予告なく変わることがあるため、申し込み前に公式サイトでもご確認ください。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="summary-top">まずは公式のお試しセットで味を確認</SectionHeading>
        <ServiceCapture id="nichirei" />{/* svc-cap-202610 */}

        <p className="text-sm mb-6 leading-relaxed">
          冷凍弁当・冷凍食品は、味や量の好みが分かれやすいジャンルです。だからこそ、<strong>いきなり定期購入する前にお試しセットで確かめる</strong>のが失敗しにくい進め方です。
        </p>

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事の要点</p>
          <ul className="list-disc list-inside space-y-1">
            <li>お試しセットは<strong>味・量を確かめる入口</strong>として便利</li>
            <li>お試しセットは<strong>6種類・各4食で3,300〜4,320円</strong>（税込・送料別）</li>
            <li>冷凍で届くため<strong>冷凍庫の空き</strong>を確保しておく</li>
            <li>お試しセットは<strong>定期便ではなく1回限りの注文</strong>（本州・四国は5,000円未満で送料1,000円）</li>
          </ul>
        </div>

        {/* ===== ニチレイとは ===== */}
        <SectionHeading id="what">ニチレイフーズダイレクトとは</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ニチレイフーズダイレクトは、冷凍食品で知られる<strong>ニチレイグループの直販(通販)サービス</strong>です。冷凍弁当・冷凍おかずなどを扱っており、栄養バランスやカロリー・塩分に配慮したシリーズも展開しています。冷凍で届くため、<strong>電子レンジで温めるだけ</strong>で手軽に食べられるのが特徴です。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          長期保存がきく冷凍タイプなので、ストックしておけば「今日は作りたくない」というときの備えにもなります。健康面に配慮したメニューを探している人や、買い物・調理の手間を減らしたい人に向いています。
        </p>

        {/* ===== 内容 ===== */}
        <SectionHeading id="naiyo">お試しセットの内容タイプ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          公式の「お試しセット特集」（2026年10月31日確認）で販売されているのは次の6種類で、どれも冷凍の4食入りです。
        </p>

        <ComparisonTable
          headers={["セット（税込）", "特徴", "こんな人に"]}
          rows={[
            ["きくばりごぜん お試し4食（3,300円）", "人気No.1のおかずセット。4品平均192kcal・塩分1.7g・野菜100g以上", "カロリー・塩分に配慮したい人"],
            ["まめなごはん お試し4食（3,800円）", "主食とおかずのワンプレート。4品平均たんぱく質22.6g・400kcal・塩分2.3g", "ごはんまで用意したくない人"],
            ["パワーデリ お試し4食（4,320円）", "ボリュームのあるおかず。4品平均たんぱく質29.0g・370kcal・糖質16.8g", "たんぱく質をしっかりとりたい人"],
            ["栄養成分別セット 各4食（各3,550円）", "糖質／塩分／脂質を控えたい方向けに管理栄養士が選んだおかず", "特定の栄養素を控えたい人"],
          ]}
        />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">お試しセットは定期便ではありません</p>
          <p>公式サイトには「定期便ではありません。ご注文の都度、お好きなメニューを必要な数量だけお届けします。1回限りのご注文もお受けします」と書かれています。商品内容は予告なく変更されることがあるため、申し込み時に「セット内容を見る」で品目をご確認ください。</p>
        </div>

        {/* ===== 送料 ===== */}
        <SectionHeading id="souryo">送料（注文金額と配送先で決まる）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          送料は注文金額と配送先エリアで決まります（2026年10月31日 公式「送料・配送について」の送料一覧で確認）。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>本州・四国：7,500円以上 0円／5,000〜7,499円 700円／5,000円未満 1,000円</li>
          <li>北海道・九州：7,500円以上 400円／5,000〜7,499円 1,100円／5,000円未満 1,400円</li>
          <li>沖縄：7,500円以上 1,700円／5,000〜7,499円 2,400円／5,000円未満 2,700円</li>
          <li>定期購入：全国 0円</li>
        </ul>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">お試しセット1つだけなら送料1,000円（本州・四国）</p>
          <p>お試しセットは3,300〜4,320円なので、1つだけの注文は5,000円未満の送料（本州・四国1,000円）がかかります。たとえば、きくばりごぜんのお試し4食セットは3,300円＋送料1,000円＝4,300円です。2セット以上や単品を合わせて5,000円・7,500円を超えると送料が下がります。送料の負担を抑えたい人は、<Link href="/articles/souryou-yasui-ranking/" className="text-accent underline">送料が安い冷凍弁当ランキング</Link>もあわせて参考にできます。</p>
        </div>

        {/* ===== 申し込みの流れ ===== */}
        <SectionHeading id="flow">お試しセット申し込みの流れ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          初めてニチレイフーズダイレクトのお試しセットを申し込む際の流れは次の通りです。
        </p>

        {[
          { num: 1, title: "公式サイトのお試しセット特集を開く", text: "ニチレイフーズダイレクト公式サイトの「まずはお試し」から、お試しセット特集を開きます。" },
          { num: 2, title: "お試しセット・商品を選ぶ", text: "内容(品目・食数)・価格・送料の条件を確認し、目的に合うセットを選択します。" },
          { num: 3, title: "合計金額と送料を確認", text: "お試しセットは定期便ではなく1回限りの注文です。注文金額によって送料が変わるため、送料を含めた合計を確認します。" },
          { num: 4, title: "配送先・受け取り日時を指定", text: "配送日は表示される期間から、配送希望時間も選べます。配送会社は佐川急便・ヤマト運輸から選べます。冷凍庫の空きを確保できる日時を指定するとスムーズです。" },
          { num: 5, title: "支払い情報を登録し、合計金額を確認して確定", text: "確認画面で送料込みの合計金額を確認してから注文を確定します。" },
        ].map((step) => (
          <div key={step.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {step.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{step.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 注意点 ===== */}
        <SectionHeading id="warnings">申し込み前に確認したい注意点</SectionHeading>

        {[
          {
            title: "1. 冷凍庫の空きを確保する",
            text: "冷凍弁当はかさばるため、届く前に冷凍庫のスペースを空けておきましょう。受け取り日時を指定して、保管できるタイミングで届くようにするのがおすすめです。",
          },
          {
            title: "2. お試しセットと定期購入は別の商品",
            text: "お試しセットは1回限りの注文で、次回の配送はありません。続けて届けてほしい場合は、送料が全国無料になる定期購入の商品を別に申し込みます（なお「冷凍商品」と「冷凍商品（定期）」は同時に注文できません・公式FAQ）。",
          },
          {
            title: "3. 送料は注文金額で変わる",
            text: "本州・四国の場合、5,000円未満は送料1,000円、5,000〜7,499円は700円、7,500円以上は0円です。価格や特典は予告なく更新されることがあるため、申込時点の公式表示と合計金額を基準にしてください。",
          },
          {
            title: "4. アレルギー・原材料を確認する",
            text: "アレルギーや食事制限がある場合は、各商品の原材料・栄養成分表示を必ずご確認ください。栄養バランス配慮シリーズでも、含まれる原材料は商品ごとに異なります。",
          },
        ].map((item, i) => (
          <div key={i} className="bg-cream rounded-lg p-4 mb-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}

        {/* ===== 向いている人 ===== */}
        <SectionHeading id="muki">ニチレイのお試しが向いている人</SectionHeading>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li>冷凍弁当を初めて試すので、まず味・量を確かめたい</li>
          <li>カロリー・塩分など健康面に配慮したメニューを探している</li>
          <li>温めるだけの手軽な食事をストックしておきたい</li>
          <li>いきなり定期購入するのは不安なので、単発で試したい</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          他社のお試しセットと比較して選びたい場合は、<Link href="/articles/otameshi-set-osusume/" className="text-accent underline">お試しセットおすすめ</Link>もあわせて読むと、自分に合うサービスを選びやすくなります。
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
        <SectionHeading id="summary">まとめ：お試しで味と使い勝手を確かめよう</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ニチレイフーズダイレクトのお試しセットは、<strong>冷凍弁当を初めて試す入口</strong>として便利です。温めるだけの手軽さと、健康面に配慮したシリーズが特徴で、定期購入の前に味・量・使い勝手を確かめられます。
          </p>
          <p className="mb-3">
            お試しセットは<strong>6種類・各4食で3,300〜4,320円</strong>（税込・送料別）で、定期便ではなく1回限りの注文です（2026年10月31日公式で確認）。
          </p>
          <p>
            申し込み時に確認しておきたい点は「どのセットにするか」「冷凍庫の空き」「合計金額(送料込み)」の3点です。最新・正確な情報は、必ずニチレイフーズダイレクト公式サイトでご確認ください。
          </p>
        </div>

        <div className="text-center my-8">
          <a
            href="https://wellness.nichirei.co.jp/shop/pages/trial_2010.aspx"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            ニチレイフーズダイレクト公式サイトでお試しを見る
          </a>
          <p className="text-xs text-warm-gray mt-2">※最新の内容・価格・送料は公式サイトの案内をご確認ください</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">関連記事</p>
          <Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            お試しセットおすすめ
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            送料が安い冷凍弁当ランキング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/reitou-bento-atatame-kata/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            冷凍弁当の温め方
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            高齢者向け宅配弁当のおすすめ
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nichirei-foods-direct-kuchikomi/" className="text-accent hover:text-accent-dark underline font-medium text-sm">ニチレイフーズダイレクトの口コミ・評判</Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">
              編
            </div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">
                宅配弁当・栄養食を専門とする編集チームです。公開情報や利用者の口コミをもとに、公平な比較情報の提供に努めます。
              </p>
            </div>
          </div>
        </div>
              {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
