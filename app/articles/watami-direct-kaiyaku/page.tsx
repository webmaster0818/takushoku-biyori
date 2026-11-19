import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ワタミの宅食ダイレクトの解約方法｜マイページの「お届けを停止」と継続割の3回条件を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ワタミの宅食ダイレクトの定期購入を止める方法を公式のよくあるご質問・ご利用ガイド・料金一覧で整理しました。停止はマイページの「お届けを停止」から、お届け予定日の4〜6日前まで。継続割は3回目まで停止できない点と、3回分の合計額を当サイトで計算しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/watami-direct-kaiyaku/";
const OFFICIAL_URL = "https://www.watami-takushoku-direct.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ワタミの宅食ダイレクト 解約, ワタミの宅食ダイレクト 停止, ワタミの宅食ダイレクト 解約方法, ワタミの宅食ダイレクト 退会, ワタミの宅食ダイレクト スキップ, ワタミの宅食ダイレクト 継続割 解約",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-19T00:00:00+09:00",
    modifiedTime: "2026-11-19T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "ワタミの宅食ダイレクトの定期購入はいつでも解約できますか？", answer: "公式の料金一覧のよくある質問では「手数料・解約金なしでいつでも可能」とされています。ただし、継続割を含む定期便は3回目のお届けまで停止できません（2026年11月19日確認）。" },
  { question: "解約はどこから手続きしますか？", answer: "マイページの「定期コース詳細」ページで「お届けを停止」を押し、表示されるチャットの指示に沿って入力します。お客さまセンター（0120-934-751・午前9時〜午後6時）にも連絡できます。" },
  { question: "締切はいつですか？", answer: "お届け予定日の4〜6日前までで、お届け先の地域によって異なります。6日前までに手続きすれば、どの地域でも間に合います。注文確定後の変更・キャンセルはできません。" },
  { question: "継続割で申し込んだら何回受け取る必要がありますか？", answer: "継続割を含む定期便は3回目のお届けまで停止できません。三菜10食なら継続割は1回3,845円で、送料990円を含めた3回分の合計は14,505円です（本州・四国・九州・当サイト計算）。" },
  { question: "1回だけお休みできますか？", answer: "できます。注文確定前の定期購入は、マイページの「定期コース詳細」で次回のお届けをスキップでき、再開日は最大70日先まで選べます。" },
  { question: "退会（会員登録の削除）はどうすればいいですか？", answer: "定期の停止とは別に、お客さまセンター（0120-934-751）へ連絡します。削除後に再び利用する場合は改めて会員登録が必要です。" },
];

const sections = [
  { id: "rule", label: "解約（定期の停止）の条件" },
  { id: "steps", label: "手順：マイページの「お届けを停止」から" },
  { id: "keizoku", label: "継続割で始めた場合：3回目まで止められない" },
  { id: "deadline", label: "お届け曜日別の手続きの目安（当サイト計算）" },
  { id: "alt", label: "止める前に：スキップ・お届け日・頻度の変更" },
  { id: "member", label: "会員登録の削除（退会）と注意点" },
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
          <span className="text-foreground">ワタミの宅食ダイレクトの解約方法</span>
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


export default function WatamiDirectKaiyakuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-19T00:00:00+09:00",
    dateModified: "2026-11-19T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "ワタミの宅食ダイレクトの解約方法" },
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
            <time dateTime="2026-11-19">公開: 2026年11月19日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ワタミの宅食ダイレクトは、ワタミが運営する冷凍弁当の通販サービスです（毎日届く冷蔵の「ワタミの宅食」とは別のサービスです）。定期購入は、マイページの「定期コース詳細」から自分で停止できます。
          </p>
          <p className="mb-3">
            ただし、<strong>初回に「継続割」を使った定期便は3回目のお届けまで停止できません</strong>。また、公式のよくあるご質問では「定期購入は3回以上のお届けが条件」とも案内されています。この記事では、2026年11月19日に公式のよくあるご質問・ご利用ガイド・料金一覧で確認した内容をもとに、停止の手順と締切、継続割で3回受け取る場合の金額を整理しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ワタミの宅食ダイレクトの解約の要点</p>
          <p className="text-sm leading-relaxed mb-4">定期購入の停止は、マイページの「定期コース詳細」で「お届けを停止」を押し、表示されるチャットの指示に沿って入力します。締切はお届け予定日の4〜6日前（お届け先の地域により異なる）で、注文確定後の変更・キャンセルはできません。料金一覧のよくある質問では解約・停止に手数料・解約金はかからない一方、継続割を含む定期便は3回目まで停止できません。会員登録そのものの削除はお客さまセンター（0120-934-751）への連絡が必要です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>定期の停止はマイページで手続きできる</li><li>解約・停止に手数料・解約金はかからない（料金一覧のよくある質問）</li><li>スキップや最大70日先までのお届け日変更もできる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>継続割を含む定期便は3回目まで停止できない</li><li>締切は地域により4〜6日前で、確定後は変更不可</li><li>会員登録の削除は電話でのみ案内されている</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ワタミの宅食ダイレクト 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="rule">解約（定期の停止）の条件</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["停止の方法", "マイページの「定期コース詳細」ページで「お届けを停止」（お客さまセンターへの連絡も可）"],
            ["締切", "お届け予定日の4〜6日前まで（お届け先の都道府県により前後）"],
            ["手数料・解約金", "なし（料金一覧のよくある質問「手数料・解約金なしでいつでも可能」）"],
            ["継続割の定期便", "3回目のお届けまでは停止できない"],
            ["回数の条件", "よくあるご質問では「定期購入は3回以上のお届けが条件」"],
            ["注文確定後", "定期購入・都度購入とも、確定後の変更・キャンセルは不可"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクト よくあるご質問「定期購入を停止したいのですが」「注文後のキャンセル、数量変更はできますか？」</a>・<a href="https://www.watami-takushoku-direct.jp/shop/guide" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご利用ガイド「2回目以降のお届けについて」</a>・<a href="https://www.watami-takushoku-direct.jp/shop/pages/prices" target="_blank" rel="noopener noreferrer" className="text-accent underline">料金一覧「料金に関するよくある質問」</a>（2026年11月19日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">回数の条件は、公式内で書き方が分かれています。料金一覧のよくある質問は「手数料・解約金なしでいつでも可能です。ただし、継続割を含む定期便は、3回目までは停止できません」、よくあるご質問は「定期購入は3回以上のお届けが条件となります。4回目以降の変更や停止はお届け予定日の4～6日前までに」としています。継続割を使わずに始めた定期便で3回目より前に止めたい場合は、お客さまセンターで扱いを確認すると確実です。</p>
        <SectionHeading id="steps">手順：マイページの「お届けを停止」から</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式サイトにログインし、マイページの「変更可能な定期コース」で「ご注文確認・変更」を押す</li><li>「定期コース詳細」ページで「お届けを停止」を押す</li><li>表示されるチャットの指示に沿って入力する</li><li>マイページの「近日お届け商品（注文確定済み・変更不可）」に表示されている回は止められないため、その次の回からの停止になる</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/guide" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご利用ガイド「マイページTOPの見方」「2回目以降のお届けについて」</a>（2026年11月19日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">マイページで操作できない場合は、お客さまセンター（0120-934-751・受付時間 午前9時〜午後6時）にも連絡できます。公式のよくあるご質問は、4回目以降の変更・停止について「マイページから、またはお客さまセンターまでご連絡ください」と案内しています。</p>
        <SectionHeading id="keizoku">継続割で始めた場合：3回目まで止められない</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">継続割は「いつでも三菜」「いつでも五菜」のおまかせ定期で、初回の注文時にだけ選べる割引です。初回から3回目まで各800円引きになる代わりに、3回目のお届けまでは定期を停止できません。継続割で始めて最短で止める場合に支払う3回分の合計は次のとおりです。</p>
        <ComparisonTable
          headers={["コース・食数", "継続割（1回・税込）", "3回分の合計（送料990円×3を含む）", "4回目以降の定期料金（1回・税込）"]}
          rows={[
            ["いつでも三菜 7食", "3,021円", "12,033円", "3,821円"],
            ["いつでも三菜 10食", "3,845円", "14,505円", "4,645円"],
            ["いつでも三菜 14食", "5,711円", "20,103円", "6,511円"],
            ["いつでも三菜 20食", "8,490円", "28,440円", "9,290円"],
            ["いつでも五菜 7食", "3,786円", "14,328円", "4,586円"],
            ["いつでも五菜 10食", "4,833円", "17,469円", "5,633円"],
            ["いつでも五菜 14食", "7,096円", "24,258円", "7,896円"],
            ["いつでも五菜 20食", "10,466円", "34,368円", "11,266円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/pages/prices" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクト 料金一覧</a>の継続割（初回〜3回）と定期・おまかせの価格、<a href="https://www.watami-takushoku-direct.jp/shop/guide" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご利用ガイド</a>の送料（1回のご注文につき本州・四国・九州990円、北海道1,320円、沖縄2,420円）（2026年11月19日確認）。合計は本州・四国・九州の送料で当サイトが計算しています。後払い（手数料220円）・代金引換では継続割を利用できません。</p>
        <p className="text-sm mb-6 leading-relaxed">たとえば三菜10食なら、3回分で14,505円です。3回受け取ったあとに停止しない場合、4回目からは通常の定期料金（三菜10食4,645円）に切り替わります。3回目で止めるつもりなら、3回目のお届けが済んだあと、4回目のお届け予定日の4〜6日前までに停止の手続きをします。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・メニューの詳細は<Link href="/articles/watami-direct-menu/" className="text-accent underline">ワタミの宅食ダイレクトのメニュー</Link>、初回の割引は<Link href="/articles/watami-direct-otameshi/" className="text-accent underline">ワタミの宅食ダイレクトのお試しセット</Link>で整理しています。</p>
        <SectionHeading id="deadline">お届け曜日別の手続きの目安（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式の締切は「お届け予定日の4〜6日前まで（地域により異なる）」で、どの地域が何日前かの一覧は公式ページに掲載されていません。6日前までに手続きすれば、どの地域でも締切に間に合います。正確な締切日は、事前に届く「定期購入次回お届け予定及び変更可能期日のお知らせ」メールに記載されています。</p>
        <ComparisonTable
          headers={["次回のお届け曜日", "どの地域でも間に合う日", "地域によって最も遅い日"]}
          rows={[
            ["月曜日", "火曜日（6日前）", "木曜日（4日前）"],
            ["火曜日", "水曜日（6日前）", "金曜日（4日前）"],
            ["水曜日", "木曜日（6日前）", "土曜日（4日前）"],
            ["木曜日", "金曜日（6日前）", "日曜日（4日前）"],
            ["金曜日", "土曜日（6日前）", "月曜日（4日前）"],
            ["土曜日", "日曜日（6日前）", "火曜日（4日前）"],
            ["日曜日", "月曜日（6日前）", "水曜日（4日前）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式の「お届け予定日の4〜6日前まで」をもとにした当サイトの計算です（2026年11月19日確認）。注文確定日（クーポンの使用期限の基準日）はメールでの案内と、<a href="https://www.watami-takushoku-direct.jp/shop/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>に記載があります。</p>
        <SectionHeading id="alt">止める前に：スキップ・お届け日・頻度の変更</SectionHeading>
        <ComparisonTable
          headers={["したいこと", "方法（マイページの「定期コース詳細」）", "条件"]}
          rows={[
            ["1回だけ休む", "「この定期のお届けをスキップする」", "注文確定前の回。お休み後の再開日は最大70日先まで選べる"],
            ["お届け日をずらす", "「お届け予定日を編集する」", "最大70日先まで。4〜6日前までの変更は次回分から反映"],
            ["届く間隔を変える", "お届けサイクルの「変更」", "変更後は「現在の次回お届け日」が変わったかを確認"],
            ["食数を変える", "「ご注文確認・変更」から数量変更", "注文確定前まで"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「定期購入のお届けを1回お休みしたいのですが」「定期購入の今後の支払い方法・お届け日を変更したいのですが」</a>・<a href="https://www.watami-takushoku-direct.jp/shop/guide" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご利用ガイド</a>（2026年11月19日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">「冷凍庫がいっぱい」「しばらく家を空ける」といった理由なら、スキップやお届け日の変更で調整できます。お届け日は最大70日先まで動かせるため、2か月程度の休止なら停止しなくても対応できます。</p>
        <SectionHeading id="member">会員登録の削除（退会）と注意点</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>定期の停止と会員登録の削除は別の手続きです。会員登録の削除（解約）はお客さまセンター（0120-934-751）への連絡で受け付けています</li><li>会員登録を削除すると、再び利用するときは改めて会員登録が必要です</li><li>お友だち紹介のクーポンは定期購入にのみ使え、定期購入を停止した場合は再度利用できないと案内されています</li><li>ポイントの有効期限は120日、1回に使えるのは2,000ポイントまでです。停止・退会の前に残高を確認しておくと無駄がありません</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「会員登録を削除したいのですが」</a>・<a href="https://www.watami-takushoku-direct.jp/shop/guide" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご利用ガイド「お友だち紹介プログラムについて」</a>（2026年11月19日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">冷蔵で毎日届く「ワタミの宅食」は別のサービスで、手続きの窓口も異なります。違いは<Link href="/articles/watami-reviews/" className="text-accent underline">ワタミの宅食の口コミ・評判</Link>で整理しています。</p>
        <OfficialButton>ワタミの宅食ダイレクト 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ワタミの宅食ダイレクトの定期購入は、マイページの「お届けを停止」から自分で止められ、手数料・解約金はかかりません。締切はお届け予定日の4〜6日前で、6日前までに手続きすればどの地域でも間に合います。継続割で始めた場合は3回目のお届けまで止められないため、3回分の金額を確認してから申し込むと安心です。</p>
        <p className="text-sm mb-6 leading-relaxed">手続きの方法や条件は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>ワタミの宅食ダイレクト 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/watami-direct-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食ダイレクトの口コミ・評判</Link></li>
            <li><Link href="/articles/watami-direct-menu/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食ダイレクトのメニュー</Link></li>
            <li><Link href="/articles/watami-direct-otameshi/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食ダイレクトのお試しセット</Link></li>
            <li><Link href="/articles/wanmairu-kaiyaku/" className="text-accent hover:text-accent-dark transition-colors">わんまいるの解約方法</Link></li>
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
