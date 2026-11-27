import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "わんまいるの解約方法｜サポートセンターへ電話・メールで次回お届けの6日前まで、お届け曜日別の締切を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "わんまいる（健幸ディナー・美食弁当）の定期購入を解約する方法を、公式のよくあるご質問と定期商品ページで整理しました。解約・休止はマイページではなくサポートセンター（電話は平日10〜16時・メール・フォーム）で受け付け、締切は次回お届け予定日の6日前です。お届け曜日ごとの電話の最終日を当サイトで計算しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/wanmairu-kaiyaku/";
const OFFICIAL_URL = "https://t.felmat.net/fmcl?ak=H928D.1.V161884Z.B1357443";
const OFFICIAL_IMP = "https://t.felmat.net/fmimp/H928D.V161884Z.B1357443";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "わんまいる 解約, わんまいる 解約方法, わんまいる 定期 解約, わんまいる 休止, わんまいる 退会, わんまいる スキップ, わんまいる 健幸ディナー 解約",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-18T00:00:00+09:00",
    modifiedTime: "2026-11-18T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "わんまいるの定期購入はいつでも解約できますか？", answer: "できます。公式は「定期期間の縛りは一切有りません」「初回購入して次回キャンセルOK」と案内しています。解約金の記載もありません（2026年11月18日確認）。" },
  { question: "マイページから解約できますか？", answer: "公式のよくあるご質問では、休止・解約はサポートセンター（電話・メール・お問い合わせフォーム）で受け付けると案内されています。マイページで操作できるのは次回お届け予定日の変更です。" },
  { question: "解約の締切はいつですか？", answer: "次回お届け予定日の6日前までです。5日前に次回分の注文が自動で確定し、確定後の変更は受け付けていません。" },
  { question: "電話の受付時間は？", answer: "わんまいるサポートセンター（0120-548-113）は月〜金の10:00〜16:00で、土日祝は休みです。6日前が土日にあたる場合は、その前の金曜日までに電話する必要があります。" },
  { question: "休止は何回までできますか？", answer: "公式は「休止回数、期間、再開には制限はございません」としています。再開は再開希望日の6日前までにサポートセンターへ連絡します。" },
  { question: "締切を過ぎてしまったらどうなりますか？", answer: "次回分は確定しているため届きます。健幸ディナーの1週間分なら6,280円＋送料1,080円＝7,360円（本州・四国・九州・当サイト計算）です。" },
];

const sections = [
  { id: "rule", label: "解約の条件：回数の縛りなし・締切は6日前" },
  { id: "steps", label: "解約の手順：マイページではなくサポートセンターへ" },
  { id: "deadline", label: "お届け曜日別の締切（当サイト計算）" },
  { id: "cost", label: "締切を過ぎた場合に届く1回分の金額" },
  { id: "alt", label: "解約の前に：休止・お届け日の変更・頻度の変更" },
  { id: "notes", label: "支払い方法の変更・初回分のキャンセル・再開時の注意" },
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
          <span className="text-foreground">わんまいるの解約方法</span>
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
      <a href={OFFICIAL_URL} target="_blank" rel="nofollow noopener sponsored" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a><img src={OFFICIAL_IMP} width={1} height={1} alt="" style={{ border: "none" }} />
      <p className="text-[10px] text-gray-400 mt-2">PR・本記事はアフィリエイト広告を含みます</p>
    </div>
  );
}


export default function WanmairuKaiyakuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-18T00:00:00+09:00",
    dateModified: "2026-11-18T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "わんまいるの解約方法" },
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
            <time dateTime="2026-11-18">公開: 2026年11月18日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※PR・本記事はアフィリエイト広告を含みます。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            わんまいるは、国産食材100%の冷凍おかずセット「健幸ディナー」などを定期で届ける宅配サービスです（運営は株式会社ファミリーネットワークシステムズ）。定期購入には回数の縛りがなく、初回のあとに次回をキャンセルすることもできます。
          </p>
          <p className="mb-3">
            ただし、<strong>解約・休止はマイページから手続きできず、サポートセンターへの連絡が必要</strong>です。サポートセンターの電話は平日10〜16時のみのため、お届け曜日によっては実質の締切が早まります。この記事では、2026年11月18日に公式のよくあるご質問・定期商品ページで確認した内容をもとに、解約の手順とお届け曜日別の締切を整理しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">わんまいるの解約の要点</p>
          <p className="text-sm leading-relaxed mb-4">定期購入は回数の縛りがなく、解約金の記載もありません。解約・休止は、次回お届け予定日の6日前までに、わんまいるサポートセンター（電話0120-548-113・月〜金10〜16時／メール support@onemile.jp／お問い合わせフォーム）へ連絡します。お届け日の変更はマイページからもできますが、解約・休止はサポートセンターでの受付です。6日前を過ぎると次回分は確定し、1週間分なら6,280円＋送料1,080円が請求されます。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>定期期間の縛りはなく、初回のあと次回キャンセルも可</li><li>休止の回数・期間・再開に制限なし</li><li>電話・メール・フォームの3つの窓口がある</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>解約・休止はマイページから手続きできない</li><li>電話は平日10〜16時のみ（土日祝休み）</li><li>締切を過ぎると次回分は変更できない</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="nofollow noopener sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">わんまいる 公式サイトを見る →</a><img src={OFFICIAL_IMP} width={1} height={1} alt="" style={{ border: "none" }} />
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="rule">解約の条件：回数の縛りなし・締切は6日前</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["回数の縛り", "定期期間の縛りは一切なし。初回購入して次回キャンセルも可"],
            ["解約金", "公式ページに解約金・違約金の記載なし"],
            ["解約・休止の窓口", "わんまいるサポートセンター（電話・メール・お問い合わせフォーム）"],
            ["締切", "次回お届け予定日の6日前まで（確定後の変更は一切受け付けない）"],
            ["次回分の確定", "次回お届け予定の5日前に自動で注文が確定し、登録のメールアドレスに通知"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">わんまいる 公式トップ「わんまいるのはじめ方」</a>・<a href="https://www.onemile.jp/fs/q_a" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「定期購入について」</a>・<a href="https://www.onemile.jp/product/370" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期商品ページ（1週間に1回・1週間分）</a>（2026年11月18日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">公式の定期商品ページには「お休み、解約、登録情報等のご変更は、次回お届けデータが確定します６日前までにお願いします。確定後のご変更は、一切お受けすることはいたしかねます」と書かれています。よくあるご質問の「２回目以降のお届け日の連絡や確認方法」では「次回お届け予定の５日前に自動的にご注文が確定」とあり、6日前が手続きの最終日、5日前が確定日という関係です。</p>
        <SectionHeading id="steps">解約の手順：マイページではなくサポートセンターへ</SectionHeading>
        <ComparisonTable
          headers={["窓口", "連絡先", "受付"]}
          rows={[
            ["電話", "0120-548-113（わんまいるサポートセンター）", "月〜金 10:00〜16:00（土日祝休み）。非通知の電話は着信拒否"],
            ["メール", "support@onemile.jp", "公式は「メール・お問合せフォームよりお申し付けください」と案内"],
            ["お問い合わせフォーム", "公式サイトのお問い合わせフォーム", "同上"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/fs/q_a" target="_blank" rel="noopener noreferrer" className="text-accent underline">わんまいる よくあるご質問</a>・<a href="https://www.onemile.jp/product/370" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期商品ページ「定期：解約手続き・変更手続き」</a>（2026年11月18日確認）</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>連絡の際は、登録の氏名・電話番号と「定期購入を解約したい」旨を伝えると手続きが進みやすくなります</li><li>公式のよくあるご質問は「休止、解約はサポートセンターで承ります」としており、マイページで操作できるのは次回お届け予定日の変更です</li><li>メール・フォームで連絡した場合は、受付の返信が届いたかを確認しておくと安心です</li></ul>
        <SectionHeading id="deadline">お届け曜日別の締切（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">締切は「次回お届け予定日の6日前」です。電話は平日のみのため、6日前が土日にあたる場合は、その前の金曜日の16時までに電話する必要があります（祝日は考慮していません）。</p>
        <ComparisonTable
          headers={["次回のお届け曜日", "公式の締切（6日前）", "電話で連絡する場合の最終日"]}
          rows={[
            ["月曜日", "火曜日（6日前）", "火曜日（6日前）の16時まで"],
            ["火曜日", "水曜日（6日前）", "水曜日（6日前）の16時まで"],
            ["水曜日", "木曜日（6日前）", "木曜日（6日前）の16時まで"],
            ["木曜日", "金曜日（6日前）", "金曜日（6日前）の16時まで"],
            ["金曜日", "土曜日（6日前）", "金曜日（7日前）の16時まで"],
            ["土曜日", "日曜日（6日前）", "金曜日（8日前）の16時まで"],
            ["日曜日", "月曜日（6日前）", "月曜日（6日前）の16時まで"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式の「6日前まで」と、サポートセンターの営業時間（月〜金10〜16時・土日祝休み）をもとにした当サイトの計算です（2026年11月18日確認）。祝日をはさむ場合はさらに早まります。メール・フォームの受付時刻の扱いは公式に記載がないため、余裕を持って送ることをおすすめします。</p>
        <p className="text-sm mb-6 leading-relaxed">金曜日・土曜日にお届けがある方は、電話だと7〜8日前が最終日になります。お届け曜日を確認してから、早めに連絡するのが確実です。</p>
        <SectionHeading id="cost">締切を過ぎた場合に届く1回分の金額</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">6日前を過ぎると次回分は確定し、変更・キャンセルはできません。健幸ディナーの定期で、締切後に届く1回分の金額は次のとおりです（本州・四国・九州の場合）。</p>
        <ComparisonTable
          headers={["コース", "商品代金（税込）", "送料（税込）", "合計"]}
          rows={[
            ["1週間に1回・1週間分（5食セット×1）", "6,280円", "1,080円", "7,360円"],
            ["2週間に1回・2週間分（5食セット×2）", "12,560円", "1,080円", "13,640円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/product/370" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期商品ページ（1週間分）</a>・<a href="https://www.onemile.jp/product/371" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期商品ページ（2週間分）</a>の価格と送料（2026年11月18日確認）。北海道・沖縄県の送料は2,645円（税込）。合計は当サイトの計算です。申込フォーム内のご利用ガイドには送料935円（北海道・沖縄2,500円）という別の記載も残っており、公式内で表記が食い違っています（ここでは商品ページとよくある質問の1,080円で計算）。</p>
        <p className="text-sm mb-6 leading-relaxed">健幸ディナーの献立と1食ごとの栄養成分は<Link href="/articles/wanmairu-menu/" className="text-accent underline">わんまいるのメニュー</Link>で、料金・送料・味の評判は<Link href="/articles/wanmairu-reviews/" className="text-accent underline">わんまいるの口コミ・評判</Link>で整理しています。</p>
        <SectionHeading id="alt">解約の前に：休止・お届け日の変更・頻度の変更</SectionHeading>
        <ComparisonTable
          headers={["したいこと", "方法", "条件"]}
          rows={[
            ["しばらく休む（休止）", "サポートセンターへ電話・メール", "次回お届け予定日の6日前まで。休止回数・期間・再開に制限なし"],
            ["休止から再開する", "サポートセンターへ電話・メール", "再開希望日の6日前まで"],
            ["次回のお届け日を変える", "マイページ、またはサポートセンター", "次回お届け予定日の6日前まで"],
            ["届く頻度を変える（7日毎⇔14日毎）", "サポートセンターへ連絡", "1週分メニューは7日毎・14日毎、2週分メニューは14日毎のみ"],
            ["数量を変える", "サポートセンターへ連絡", "次回お届け予定日の6日前まで"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/fs/q_a" target="_blank" rel="noopener noreferrer" className="text-accent underline">わんまいる よくあるご質問「定期購入について」</a>・<a href="https://www.onemile.jp/product/370" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期商品ページ</a>（2026年11月18日確認）。申込フォームの配送ペースの選択肢には1週間ごと〜1年ごとまでの項目がありますが、商品ページでは7日ごと・14日ごとの条件が案内されています。</p>
        <p className="text-sm mb-6 leading-relaxed">「冷凍庫に入りきらない」「量が多い」といった理由なら、休止や頻度の変更で調整できます。休止には回数・期間の制限がないため、解約せずに休止しておけば、再開時に申し込み直す必要はありません。</p>
        <SectionHeading id="notes">支払い方法の変更・初回分のキャンセル・再開時の注意</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>支払い方法を「Amazon Pay」「atone 翌月払い」へ変更する場合は、一旦解約してから改めて定期購入に申し込む必要があります（よくあるご質問）</li><li>定期便の初回お届け分のキャンセルは、ご注文当日のサポートセンター営業時間内（15時まで）であれば可能と案内されています</li><li>定期商品ページには「過去にご利用履歴のあるお客様は、初回割引の対象外」との注記があります。解約後に申し込み直す場合は初回割引が使えない可能性があります</li><li>イメージと違った・量が少ない・味が好みではない等の理由での返品・返金は受け付けていません（よくあるご質問）</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/fs/q_a" target="_blank" rel="noopener noreferrer" className="text-accent underline">わんまいる よくあるご質問</a>・<a href="https://www.onemile.jp/product/370" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期商品ページ</a>（2026年11月18日確認）</p>
        <OfficialButton>わんまいる 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">わんまいるの定期購入は縛りがなく、初回のあとでも解約できます。手続きはマイページではなくサポートセンターへの連絡で、締切は次回お届け予定日の6日前です。電話は平日10〜16時のみのため、金曜・土曜にお届けがある場合は実質7〜8日前が電話の最終日になります。続ける余地があるなら、制限のない休止や頻度の変更も比べてから決めると無駄がありません。</p>
        <p className="text-sm mb-6 leading-relaxed">手続きの方法や条件は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>わんまいる 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/wanmairu-reviews/" className="text-accent hover:text-accent-dark transition-colors">わんまいるの口コミ・評判</Link></li>
            <li><Link href="/articles/wanmairu-menu/" className="text-accent hover:text-accent-dark transition-colors">わんまいるのメニュー</Link></li>
            <li><Link href="/articles/shokunosoyokaze-kaiyaku/" className="text-accent hover:text-accent-dark transition-colors">食のそよ風の解約方法</Link></li>
            <li><Link href="/articles/tsurukame-kaiyaku/" className="text-accent hover:text-accent-dark transition-colors">つるかめキッチンの解約方法</Link></li>
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
