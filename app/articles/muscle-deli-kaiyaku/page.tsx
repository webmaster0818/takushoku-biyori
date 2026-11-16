import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "マッスルデリ（Muscle Deli）の解約方法｜締切はお届け5日前、継続割プランの違約金と一時停止の条件を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "マッスルデリ（Muscle Deli）の定期購入を解約する方法を、公式のよくあるご質問と定期継続割プランのページで整理しました。解約は「定期購入解約申込フォーム」からお届け予定日の5日前まで。6回・12回・24回の継続割プランは回数未満の解約で違約金（直近1回分の商品代金）がかかり、一時停止は通常定期だけが使えます。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/muscle-deli-kaiyaku/";
const OFFICIAL_URL = "https://muscledeli.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "マッスルデリ 解約, Muscle Deli 解約, マッスルデリ 解約方法, マッスルデリ 違約金, マッスルデリ 継続割 解約, マッスルデリ スキップ, マッスルデリ 一時停止",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-15T00:00:00+09:00",
    modifiedTime: "2026-11-15T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "マッスルデリの解約はどこからできますか？", answer: "公式のよくあるご質問にある「定期購入解約申込フォーム」から申し込みます。継続割プランはマイページからも手続きできます。解約後、マイページの「定期管理」で該当の定期が「停止」表示になっていれば完了です。" },
  { question: "解約の締切はいつですか？", answer: "お届け予定日の5日前までです。期日を過ぎた申請分は変更できません。" },
  { question: "解約に違約金はかかりますか？", answer: "定期継続割プラン（6回・12回・24回）で契約回数に満たずに解約すると、直近でお届けした商品の送料を除いた1回分の商品代金が違約金になります。通常定期の解約手順には違約金の記載はありません（2026年11月15日確認）。" },
  { question: "継続割プランは回数を満了したら自動で終わりますか？", answer: "終わりません。契約回数を受け取った後は、解約の手続きがない限り同じ契約内容で自動更新され、通算の回数に応じて割引率が上がります。" },
  { question: "継続割プランを一時停止できますか？", answer: "できません。一時停止は通常定期プランのみのサービスで、配送日の8日前までにお問い合わせフォームから申請します。継続割プランはスキップで1回お休みすることはできます。" },
  { question: "解約したあと、同じ割引率で再開できますか？", answer: "できません。解約すると累計回数はリセットされ、再度申し込む場合は新規契約として1回目からのカウントになります。2026年8月31日までの改定前価格の継続割プランは販売終了しており、同じ条件では再開できません。" },
  { question: "6回プランから12回プランに変えられますか？", answer: "契約後の回数変更はできません。回数の異なるプランへの変更は、現在のプランを解約して新しいプランに申し込む形になり、規定回数前なら1回分の違約金がかかります。" },
];

const sections = [
  { id: "plans", label: "まず確認：通常定期か、継続割プランか" },
  { id: "steps", label: "解約の手順と締切" },
  { id: "penalty", label: "継続割プランの違約金と自動更新" },
  { id: "example", label: "違約金はいくら？公式の料金例で計算" },
  { id: "alt", label: "解約の前に：スキップ・一時停止・プラン変更" },
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
          <Link href="/articles/#guide" className="text-foreground/70 hover:text-accent transition-colors">選び方・使い方・サービス紹介</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">マッスルデリの解約方法</span>
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


export default function MuscleDeliKaiyakuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-15T00:00:00+09:00",
    dateModified: "2026-11-15T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介" },
      { "@type": "ListItem", position: 3, name: "マッスルデリの解約方法" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">選び方・使い方・サービス紹介</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-15">公開: 2026年11月15日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            マッスルデリ（Muscle Deli）は、目的別（LEAN・MAINTAIN・GAIN・LOW CARB）の高たんぱくな冷凍弁当を届ける定期便です。定期購入の解約は、公式サイトの<strong>「定期購入解約申込フォーム」</strong>から、お届け予定日の5日前までに申し込みます。
          </p>
          <p className="mb-3">
            注意したいのは、割引率の高い<strong>「定期継続割プラン（6回・12回・24回）」</strong>です。約束した回数に満たずに解約すると違約金がかかり、一時停止も使えません。この記事では、通常定期と継続割プランの違い、解約の手順・締切、違約金の条件を、2026年11月15日に公式のよくあるご質問と定期継続割プランのページで確認した内容で整理しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">マッスルデリの解約の要点</p>
          <p className="text-sm leading-relaxed mb-4">解約は定期購入解約申込フォーム（または継続割プランはマイページ）から、お届け予定日の5日前までに行います。解約後はマイページの「定期管理」で「停止」表示になっていれば完了です。継続割プラン（6回・12回・24回）は契約回数に満たない解約で、直近1回分の商品代金（送料を除く）が違約金としてかかります。通常定期は一時停止（8日前までに申請）が使えますが、継続割プランは使えず、解約すると累計回数がリセットされます。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>解約フォームから申し込める</li><li>通常定期は一時停止・スキップを使える</li><li>契約回数を満了すれば違約金なしで解約できる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>締切はお届け予定日の5日前</li><li>継続割は回数未満で1回分の違約金</li><li>継続割は一時停止なし・解約で回数リセット</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">マッスルデリ 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="plans">まず確認：通常定期か、継続割プランか</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">マッスルデリの定期購入には、回数の約束がない「通常定期」と、回数を約束して割引率を上げる「定期継続割プラン」があります。どちらで契約しているかによって、解約の条件が大きく変わります。</p>
        <ComparisonTable
          headers={["項目", "通常定期", "定期6回継続割", "定期12回継続割", "定期24回継続割"]}
          rows={[
            ["割引率", "初回25%OFF・2回目以降10%OFF", "初回25%OFF・2〜6回目13%・7〜18回目15%・19回目以降20%OFF", "初回25%OFF・2〜12回目15%・13回目以降20%OFF", "初回25%OFF・2回目からずっと20%OFF"],
            ["約束の回数", "なし（解約手順に違約金の記載なし）", "6回", "12回", "24回"],
            ["回数未満の解約", "−", "違約金（直近1回分の商品代金）", "違約金（同左）", "違約金（同左）"],
            ["一時停止", "可（8日前までに申請）", "不可", "不可", "不可"],
            ["スキップ", "可（次回1回分）", "可（1回お休み）", "可", "可"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ よくあるご質問</a>（定期購入について・継続割引プランについて）・<a href="https://muscledeli.jp/shop/pages/subscription-discount" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期継続割プラン</a>（2026年11月15日確認）。割引率はお届けごとの商品代金（税抜）に適用され、割引のもとになる価格は現行の単品価格です。</p>
        <p className="text-sm mb-6 leading-relaxed">契約中のプランは、マイページの「お買いもの情報」→「定期管理」で確認できます。継続割プランは、契約後に回数を変更（例：12回→6回）することはできません。</p>
        <SectionHeading id="steps">解約の手順と締切</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["申込み先", "定期購入解約申込フォーム（公式FAQ内のリンク）。継続割プランはマイページからも手続き可能"],
            ["締切", "お届け予定日の5日前まで（期日を過ぎた申請分は変更できない）"],
            ["完了の確認", "マイページ内「定期管理」で、該当の定期が「停止」表示になっていれば解約完了"],
            ["継続割プランの更新期間", "6回・12回・24回目の配送日の4日前の朝10時〜その次の配送日の5日前の23:59"],
            ["解約後の再開", "同じ定期購入は再開できない。再度申し込む場合は新規契約（回数は1回目から）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「定期購入を解約するにはどうすればよいですか？」「継続割引プランは自動更新されますか？」「『解約』と『一時停止』の違いは何ですか？」</a>・<a href="https://muscledeli.jp/shop/pages/chat-cancel" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期購入解約申込フォーム</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">配送日・プラン・メニューなどの変更はマイページからお届け予定日の5日前まで、お問い合わせフォームや電話での変更は8日前までと、窓口によって締切が異なります。解約は5日前が締切ですが、<strong>一時停止や「おまかせ⇔お好き」のプラン変更は8日前まで</strong>なので、解約以外の方法も検討する場合は8日前を目安に動くと選択肢が残ります。</p>
        <SectionHeading id="penalty">継続割プランの違約金と自動更新</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>契約回数（6回・12回・24回）に満たずに解約すると、<strong>違約金として直近でお届けした商品の送料を除いた1回分の商品代金</strong>がかかります</li><li>回数の異なるプランへ変更する場合も、現在のプランの解約と新規申込みの扱いになり、規定回数に達する前なら商品代金1回分の違約金がかかります</li><li>契約回数を受け取った後は、解約の手続きがない限り同じ契約内容で<strong>自動で更新</strong>され、通算の回数に応じて割引率が上がります（例：6回プランは7回目から15%OFF、19回目から20%OFF）</li><li>解約すると、それまでの累計受け取り回数はリセットされます。継続割プランの割引率は、契約中のみの特典です</li><li>2026年8月31日までに契約した改定前の価格の継続割プランは販売を終了しており、解約すると同じ条件では再開できません</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問（継続割引プランについて）</a>・<a href="https://muscledeli.jp/shop/pages/subscription-discount" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期継続割プラン「お届け回数のお約束」「解約について」</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">自動更新の後にどの時点で解約すれば違約金がかからないかは、公式ページに「お約束のお届け回数を完了後、次回発送の5日前までに解約フォームよりお手続きください」と書かれています。更新後の回数の扱いに不安がある場合は、解約の前に公式のお問い合わせフォームで確認すると確実です。</p>
        <SectionHeading id="example">違約金はいくら？公式の料金例で計算</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式の定期継続割プランのページには、MAINTAINプラン5食セットを隔週で6回受け取る場合の料金例が載っています。この例で、違約金の目安を計算しました。</p>
        <ComparisonTable
          headers={["プラン（MAINTAIN 5食・隔週）", "1回のお届け（税込・公式の例）", "1食あたり", "3か月の合計（公式の例）", "回数未満で解約した場合の違約金の目安"]}
          rows={[
            ["通常定期（10%OFF）", "5,821円", "1,164円", "33,954円", "違約金なし"],
            ["定期6回継続割（13%OFF）", "5,627円", "1,125円", "32,984円", "約5,627円"],
            ["定期12回継続割（15%OFF）", "5,497円", "1,099円", "32,334円", "約5,497円"],
            ["定期24回継続割（20%OFF）", "5,173円", "1,035円", "30,714円", "約5,173円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/pages/subscription-discount" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ 定期継続割プラン「割引額比較」</a>（2026年11月15日確認）。3か月の合計は公式の例で、初回25%OFFの金額を含みます。違約金の目安は「直近1回分の商品代金（送料抜き）」の規定を公式の1回分の金額に当てはめた当サイトの計算で、実際は直近のお届け内容（プラン・食数・割引率）で変わります。</p>
        <p className="text-sm mb-6 leading-relaxed">公式の例では、6回継続割と通常定期の3か月の差は970円です。<strong>6回継続割を2回目で解約すると、違約金（約5,627円）が割引で得をした額を上回る</strong>計算になります（当サイト計算）。続けられるか分からない場合は、まず通常定期で始めるほうが解約のリスクを抑えられます。</p>
        <SectionHeading id="alt">解約の前に：スキップ・一時停止・プラン変更</SectionHeading>
        <ComparisonTable
          headers={["したいこと", "方法", "締切", "継続割プラン"]}
          rows={[
            ["1回だけ休む", "マイページ「定期管理」→「詳細を見る」→「編集する」→「配送をスキップする」", "確定前（確定・発送済みは不可）", "可（スキップ後は次回配送まで再スキップ不可）"],
            ["一定期間止める", "お問い合わせフォームから一時停止を申請", "配送日の8日前まで", "不可"],
            ["食数・目的を変える", "マイページでプラン変更（MAINTAIN→LEANなど）", "お届け予定日の5日前まで", "可（回数の変更は不可）"],
            ["苦手なメニューを外す", "おまかせ：「苦手メニュー」で3個まで除外／お好き：選択画面で削除", "配送日の5日前まで", "可"],
            ["届く間隔を変える", "マイページで配送周期の変更（7日ごと・14日ごと）", "お届け予定日の5日前まで", "可"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://muscledeli.jp/shop/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ よくあるご質問（定期購入について・継続割引プランについて・苦手メニューについて）</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">味や量が合わないことが理由なら、メニューの除外やプラン変更で続けやすくなる場合があります。口コミの傾向は<Link href="/articles/muscle-deli-reviews/" className="text-accent underline">マッスルデリの口コミ・評判</Link>で、ほかの高たんぱく宅食との比較は<Link href="/articles/kou-tanpaku-ranking/" className="text-accent underline">高たんぱくの宅配弁当ランキング</Link>で確認できます。</p>
        <OfficialButton>マッスルデリ 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">マッスルデリの解約は、定期購入解約申込フォームからお届け予定日の5日前までに申し込みます。継続割プランは回数未満の解約で1回分の商品代金が違約金になり、一時停止も使えないため、契約中のプランを最初に確認することが大切です。休みたいだけならスキップ、目的が変わったならプラン変更と、解約以外の方法も比べてから手続きすると無駄な費用を避けられます。</p>
        <p className="text-sm mb-6 leading-relaxed">手続きの方法や条件は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>マッスルデリ 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/muscle-deli-reviews/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリの口コミ・評判</Link></li>
            <li><Link href="/articles/muscle-deli-menu/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリのメニュー一覧（全品の栄養成分）</Link></li>
            <li><Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">高たんぱくの宅配弁当ランキング</Link></li>
            <li><Link href="/articles/kinnikushokudo-deli-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">筋肉食堂DELIの口コミ・評判</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
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
