import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "マッスルデリのクーポンは？10周年20%OFFコード（12/8まで）・定期初回25%OFF・紹介クーポンの条件を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "マッスルデリの公式サイトで使える割引を確認しました。10周年記念クーポン（コードYMMD20・全商品20%OFF・12月8日23:59まで）、定期の初回25%OFFと継続割（最大20%OFF）、紹介クーポンとポイントの条件をまとめています（2026年11月28日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/muscle-deli-coupon/";
const OFFICIAL_URL = "https://muscledeli.jp/shop/information/md10th-anniversary_info";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "マッスルデリ クーポン, マッスルデリ クーポンコード, マッスルデリ 割引, マッスルデリ キャンペーン, マッスルデリ 初回, マッスルデリ 紹介",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-28T00:00:00+09:00",
    modifiedTime: "2026-11-28T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "マッスルデリのクーポンコードはありますか？", answer: "2026年11月28日時点で、創業10周年記念のクーポンコード「YMMD20」が公式に告知されています。全商品20%OFFで、2026年12月8日（火）23:59までの注文が対象です。公式ショップ限定で、セール品には使えません。" },
  { question: "初回の割引はありますか？", answer: "定期購入の1回目は、初回お届け特典として一律25%OFFです（通常定期・継続割プランとも）。" },
  { question: "クーポンと定期の割引は併用できますか？", answer: "10周年クーポンの告知には、定期の割引との併用について記載がありません。注文画面でご確認ください。紹介クーポンは「他のクーポンと併用できません」「既に他の割引が適用されているプラン・サービスで使用することはできません」と公式FAQに記載されています。" },
  { question: "いちばん割引率が高いのはどれですか？", answer: "割引率の最大は20%で、10周年クーポン（12月8日まで）と、定期の継続割（24回継続割は2回目から、6回・12回継続割は回数を重ねると20%）が同じ率です。定期の1回目だけは25%OFFです。" },
  { question: "継続割を途中でやめるとどうなりますか？", answer: "契約回数（6回・12回・24回）に満たずに解約すると、直近でお届けした商品の送料を除いた1回分の商品代金が違約金として発生します（公式FAQ）。" },
];

const sections = [
  { id: "coupon", label: "いま使えるクーポンコード（10周年記念）" },
  { id: "list", label: "マッスルデリの割引の一覧" },
  { id: "teiki", label: "定期の初回25%OFFと継続割" },
  { id: "compare", label: "クーポン20%OFFと継続割の比較（当サイト計算）" },
  { id: "shoukai", label: "紹介クーポンとポイント" },
  { id: "chuui", label: "使う前に確認したいこと" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">ホーム</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <Link href="/articles/#otoku" className="text-foreground/70 hover:text-accent transition-colors">クーポン・お試しセット</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">マッスルデリのクーポン・割引</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">
              {i + 1}. {s.label}
            </a>
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

function OfficialButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 text-center">
      <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-[10px] text-gray-400 mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
    </div>
  );
}


export default function MuscleDeliCouponPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-28T00:00:00+09:00",
    dateModified: "2026-11-28T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "クーポン・お試しセット" },
      { "@type": "ListItem", position: 3, name: "マッスルデリのクーポン・割引" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">クーポン・お試しセット</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-28">公開: 2026年11月28日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            マッスルデリの公式サイトでは、2026年11月28日時点で<strong>創業10周年記念のクーポンコード「YMMD20」（全商品20%OFF・2026年12月8日23:59までの注文が対象）</strong>が告知されています。これとは別に、定期購入の初回25%OFF、続けるほど割引率が上がる定期継続割、会員が発行する紹介クーポンがあります。
          </p>
          <p>
            このページでは、公式のお知らせ・定期継続割プランのページ・よくあるご質問をもとに、それぞれの条件をまとめました。クーポンの20%OFFと継続割の割引の大きさも、公式の料金例から当サイトで比べています。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">マッスルデリの割引の要点</p>
          <p className="text-sm leading-relaxed mb-4">今使えるクーポンコードは10周年記念の「YMMD20」で、全商品20%OFF・2026年11月25日〜12月8日23:59の注文が対象です（公式ショップ限定・セール品は対象外）。定期購入は1回目が一律25%OFF、2回目以降は通常定期10%OFF・継続割13〜20%OFF。紹介クーポンは他のクーポンと併用できません。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 使える割引</p>
              <ul className="space-y-1 list-disc list-inside"><li>10周年クーポン YMMD20（全商品20%OFF・12月8日まで）</li><li>定期の1回目は一律25%OFF</li><li>定期24回継続割は2回目からずっと20%OFF</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>セール品にはクーポンを使えない</li><li>クーポンと定期の割引を重ねられるかは告知に記載がない</li><li>継続割は契約回数に満たずに解約すると違約金がかかる</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">マッスルデリ公式のキャンペーン告知を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="coupon">いま使えるクーポンコード（10周年記念）</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の告知（2026年11月25日掲載）"]}
          rows={[
            ["クーポンコード", "YMMD20"],
            ["割引", "マッスルデリの商品が20%OFF（新発売のトルティーヤも含む・全ブランド対象）"],
            ["対象期間", "2026年11月25日（水）〜12月8日（火）23:59までの注文"],
            ["使える場所", "マッスルデリ公式ショップ限定"],
            ["対象外", "セール品（すでに特別価格のため）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/information/md10th-anniversary_info" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ公式 お知らせ「おかげさまで創業10周年」</a>（2026年11月28日確認）。運営会社の株式会社YOUR MEALが2026年11月29日に創業10周年を迎えることを記念したキャンペーンです。</p>
        <p className="text-sm mb-6 leading-relaxed">同じ告知では、2026年内にMuscle Deli／YOUR MEAL／YOUR BREAD／YOUR COFFEEのいずれかで購入履歴がある方を対象に、抽選で100名に記念グッズ（書き込める保存容器）が当たるキャンペーン（応募は12月15日23:59まで・マイページの専用フォーム）も案内されています。過去のキャンペーンは<a href="https://muscledeli.jp/shop/information_categories/md_campaign" target="_blank" rel="noopener noreferrer" className="text-accent underline">キャンペーン一覧</a>で確認できます（2025年11月の創業9周年、2025年5月のサービス開始8周年など）。</p>
        <SectionHeading id="list">マッスルデリの割引の一覧</SectionHeading>
        <ComparisonTable
          headers={["割引", "内容", "条件・注意（公式）"]}
          rows={[
            ["10周年記念クーポン", "全商品20%OFF（コード YMMD20）", "12月8日23:59までの注文・公式ショップ限定・セール品は対象外"],
            ["定期の初回特典", "1回目のお届けが一律25%OFF", "通常定期・継続割プランとも"],
            ["通常定期", "2回目以降も毎回10%OFF", "縛りなし（初回利用後の解約も可能）"],
            ["定期6回継続割", "2〜6回目13%OFF → 7〜18回目15%OFF → 19回目以降20%OFF", "6回の受け取りが条件"],
            ["定期12回継続割", "2〜12回目15%OFF → 13回目以降20%OFF", "12回の受け取りが条件"],
            ["定期24回継続割", "2回目からずっと20%OFF", "24回の受け取りが条件"],
            ["紹介クーポン", "会員が家族・友人に配布できる割引クーポン", "他のクーポンと併用不可・既に他の割引が適用されているプランでは使えない"],
            ["ポイント", "1ポイント＝1円（紹介1人につき紹介者に2,500円分）", "1回の上限2,000ポイント・有効期限は最終付与日から60日"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/information/md10th-anniversary_info" target="_blank" rel="noopener noreferrer" className="text-accent underline">10周年のお知らせ</a>・<a href="https://muscledeli.jp/shop/pages/subscription-discount" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期継続割プラン</a>・<a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>・各プランの商品ページ（2026年11月28日確認）。割引率はお届けごとの商品代金（税抜）に適用されます（公式）。</p>
        <SectionHeading id="teiki">定期の初回25%OFFと継続割</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">定期購入の1回目は、どのプランでも初回お届け特典として一律25%OFFです。2回目以降の割引率は、契約するプランで変わります。</p>
        <ComparisonTable
          headers={["プラン（公式の割引額比較）", "1食あたり", "1回のお届け", "3か月合計（6回）", "通常定期との差"]}
          rows={[
            ["通常定期（10%OFF）", "1,164円", "5,821円", "33,954円", "−"],
            ["定期6回継続割（13%OFFスタート）", "1,125円", "5,627円", "32,984円", "−970円"],
            ["定期12回継続割（15%OFFスタート）", "1,099円", "5,497円", "32,334円", "−1,620円"],
            ["定期24回継続割（ずっと20%OFF）", "1,035円", "5,173円", "30,714円", "−3,240円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/pages/subscription-discount" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 定期継続割プラン「割引額比較」</a>。MAINTAINプラン5食セット・隔週お届け×6回（約3か月）・税込。3か月合計は初回25%OFFの金額で計算されたもの（公式の注記）。送料は含みません。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>継続割の契約回数を受け取り終えると、同じ契約内容で自動更新されます</li><li>契約回数（6回・12回・24回）に満たずに解約すると、違約金（直近でお届けした商品の送料を除いた1回分の商品代金）が発生します</li><li>継続割プランを解約したあとに通常定期を始めても、継続割の割引率は引き継がれません</li><li>解約・違約金の詳しい条件は<Link href="/articles/muscle-deli-kaiyaku/" className="text-accent underline">マッスルデリの解約方法</Link>にまとめています</li></ul>
        <SectionHeading id="compare">クーポン20%OFFと継続割の比較（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式の割引額比較で、通常定期（10%OFF）の1回分は5,821円です。ここから逆算すると、MAINTAIN 5食セットの単品価格は約6,468円（税込・目安）になります。</p>
        <ComparisonTable
          headers={["買い方（MAINTAIN 5食セット1回分）", "割引", "1回分（税込・目安）", "回数の条件"]}
          rows={[
            ["単品（割引なし）", "なし", "約6,468円", "なし"],
            ["単品＋10周年クーポン YMMD20", "20%OFF", "約5,174円", "なし（12月8日までの注文）"],
            ["通常定期の2回目以降", "10%OFF", "5,821円", "なし"],
            ["定期24回継続割の2回目以降", "20%OFF", "5,173円", "24回の受け取り"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※当サイトの計算。単品価格は公式の通常定期の金額÷0.9で逆算した目安で、実際の請求額は税抜価格への割引と端数処理で数円ずれることがあります。送料は含みません。クーポンを定期購入と組み合わせられるかは、告知に記載がないため注文画面でご確認ください。</p>
        <p className="text-sm mb-6 leading-relaxed">12月8日までに単品でクーポンを使う場合、割引率は定期24回継続割と同じ20%で、回数の条件はありません。続ける回数が決まっていない場合の比較材料になります。</p>
        <SectionHeading id="shoukai">紹介クーポンとポイント</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>紹介クーポン: マッスルデリに会員登録した方が、家族や友人に配布できる割引クーポン。マイページの＜お客様情報＞→＜紹介クーポン＞から発行（有効期限あり）</li><li>使う側の注意: 他のクーポンと併用できない。特定の会員割引制度など、既に他の割引が適用されているプラン・サービスでは使えない。紹介者本人は使えない</li><li>紹介した側: クーポンが使われると、1人につき2,500円分のポイント（被紹介者の決済確定時に付与・今後変更の場合あり）</li><li>ポイント: 1ポイント1円。お試し購入・定期購入のどちらにも使えるが、1回の上限は2,000ポイント。有効期限は最終の付与日から60日間</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 よくあるご質問（紹介クーポン・ポイント）</a>（2026年11月28日確認）。紹介クーポンの割引額は公式FAQに記載がありません。</p>
        <SectionHeading id="chuui">使う前に確認したいこと</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>送料は別: 5食1,200円・10食1,420円・15食1,420円（税込）、北海道・沖縄県は1,530円〜（公式FAQ）</li><li>定期1回目の変更: マイページからは変更できず、お届け予定日の8日前までの連絡が必要（公式FAQ）</li><li>配送日まで8日未満の注文は、注文時点で出荷準備に入るため変更・キャンセルできない（公式FAQ）</li><li>プランの違い（LEAN・MAINTAIN・GAIN・LOW CARB）は<Link href="/articles/muscle-deli-menu/" className="text-accent underline">マッスルデリのメニュー一覧</Link>で比べています</li></ul>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">マッスルデリで2026年11月28日時点に使えるクーポンコードは、10周年記念の「YMMD20」（全商品20%OFF・12月8日23:59まで・セール品は対象外）です。定期購入なら1回目は一律25%OFF、2回目以降は通常定期10%OFFか、回数の条件がある継続割（最大20%OFF）を選べます。</p>
        <p className="text-sm mb-6 leading-relaxed">クーポンの期間・条件は変わることがあります。ご利用前に、マッスルデリの公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>マッスルデリ公式のキャンペーン告知を見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリの口コミ・評判</Link></li>
            <li><Link href="/articles/muscle-deli-kaiyaku/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリの解約方法・違約金</Link></li>
            <li><Link href="/articles/muscle-deli-menu/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリのメニュー一覧</Link></li>
            <li><Link href="/articles/muscle-deli-nosh-hikaku/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリとnoshの比較</Link></li>
            <li><Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">高たんぱくの宅配弁当ランキング</Link></li>
            <li><Link href="/articles/nosh-coupon/" className="text-accent hover:text-accent-dark transition-colors">noshのクーポン・割引</Link></li>
            <li><Link href="/articles/wellness-dining-coupon/" className="text-accent hover:text-accent-dark transition-colors">ウェルネスダイニングのクーポン</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（試食にもとづくレビューは現在行っておらず、導入を準備しています）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
