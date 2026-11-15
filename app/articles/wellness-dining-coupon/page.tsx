import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ウェルネスダイニングのクーポンはある？送料無料になる注文方法と秋冬メニュー最大5%OFFを公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ウェルネスダイニングの公式サイトに、入力して使うクーポンコードの案内はありませんでした（2026年11月15日確認）。代わりに使える割引として、お試し注文の初回送料無料、定期注文14食・21食の送料無料、秋・冬メニュー同時注文の最大5%OFF（11月25日まで）を整理し、気配り宅配食6コースの1食あたりを注文方法別に計算しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/wellness-dining-coupon/";
const OFFICIAL_URL = "https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ウェルネスダイニング クーポン, ウェルネスダイニング クーポンコード, ウェルネスダイニング 割引, ウェルネスダイニング キャンペーン, ウェルネスダイニング お試し, ウェルネスダイニング 送料無料",
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
  { question: "ウェルネスダイニングのクーポンコードはありますか？", answer: "2026年11月15日に公式サイトのトップ・商品ページ・よくある質問・お知らせを確認した範囲では、注文時に入力するクーポンコードの案内はありませんでした。割引は、お試し注文・定期注文の送料無料と、期間限定のキャンペーンで受けられます。" },
  { question: "初回の割引はありますか？", answer: "お試し注文は、7食・14食・21食のどの食数でも初回送料無料です（北海道・沖縄も無料）。商品の価格そのものの割引ではありません。" },
  { question: "送料を無料にするにはどうすればいいですか？", answer: "お試し注文（初回）、定期注文の14食・21食、お試し定期注文（8回すべて）が送料無料です。定期注文の7食は440円、都度注文は880円（北海道・沖縄1,870円）です。" },
  { question: "今やっているキャンペーンはありますか？", answer: "2026年11月15日時点で、気配り宅配食4コースの秋・冬メニューを同時に注文すると最大5%OFF・送料無料になるキャンペーンがあります。注文締切は11月25日（水）で、数量限定です。" },
  { question: "お試し注文のあと定期になりますか？", answer: "お試し注文は「まずは1回試したい方」向けの1回の注文です。定期注文を試す「お試し定期注文」（毎週×8回・送料無料）は別のメニューです。" },
  { question: "定期注文に縛りはありますか？", answer: "公式FAQは「契約期間の縛りがない」としています。休止・解約は次回お届け予定日の1週間前までに電話やメールで連絡します。" },
];

const sections = [
  { id: "coupon", label: "クーポンコードはある？（公式の掲載状況）" },
  { id: "list", label: "いま使える割引の一覧" },
  { id: "souryou", label: "送料無料になる注文方法" },
  { id: "price", label: "6コースの1食あたり（注文方法別・当サイト計算）" },
  { id: "seasonal", label: "秋・冬メニュー同時注文で最大5%OFF（11月25日まで）" },
  { id: "notice", label: "割引を使う前に確認したい点" },
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
          <span className="text-foreground">ウェルネスダイニングのクーポン・割引</span>
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
      <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-[10px] text-gray-400 mt-2">PR・本記事はアフィリエイト広告を含みます</p>
    </div>
  );
}


export default function WellnessDiningCouponPage() {
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
      { "@type": "ListItem", position: 2, name: "クーポン・お試しセット" },
      { "@type": "ListItem", position: 3, name: "ウェルネスダイニングのクーポン・割引" },
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
            <time dateTime="2026-11-15">公開: 2026年11月15日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※PR・本記事はアフィリエイト広告を含みます。料金・割引の内容は公式サイトの記載にもとづいています。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ウェルネスダイニングは、糖質・塩分・たんぱく質などを調整した「気配り宅配食」を届ける冷凍宅配食のサービスです。「クーポン」で探す方が多いものの、2026年11月15日に公式サイトのトップ・商品ページ・よくある質問を確認した範囲では、<strong>注文時に入力して使うクーポンコードの案内はありませんでした</strong>。
          </p>
          <p className="mb-3">
            その代わり、<strong>送料が無料になる注文方法</strong>と<strong>期間限定の割引</strong>が用意されています。この記事では、いま使える割引を一覧にし、気配り宅配食6コースの1食あたりの料金を注文方法別に計算しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ウェルネスダイニングの割引の要点</p>
          <p className="text-sm leading-relaxed mb-4">公式サイトに入力式のクーポンコードの掲載はなく、割引は注文方法で決まります。お試し注文は7食・14食・21食どれでも初回送料無料、定期注文は14食・21食で送料無料（7食は440円）、都度注文は送料880円（北海道・沖縄1,870円）です。期間限定で、秋メニューと冬メニューを同時に注文すると最大5%OFF（注文締切11月25日）になります。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 使える割引</p>
              <ul className="space-y-1 list-disc list-inside"><li>お試し注文は食数を問わず初回送料無料</li><li>定期の14食・21食はずっと送料無料</li><li>秋・冬メニュー同時注文で最大5%OFF</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>入力式のクーポンコードの掲載はない</li><li>都度注文は送料880円（北海道・沖縄1,870円）</li><li>秋冬の割引は11月25日注文分まで</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ウェルネスダイニング 公式サイトで最新の料金・お試しを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="coupon">クーポンコードはある？（公式の掲載状況）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">2026年11月15日に、公式サイトのトップページ、気配り宅配食6コースの商品ページ、気配り宅配食のよくある質問、お知らせ、15周年の特設ページを確認しました。いずれにも、<strong>注文時に入力するクーポンコードや割引コードの案内はありませんでした</strong>。</p>
        <ComparisonTable
          headers={["確認したページ", "クーポンコードの記載", "割引に関する記載"]}
          rows={[
            ["<a href=\"https://www.wellness-dining.com/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">公式トップ</a>", "なし", "お試し注文・定期注文の案内"],
            ["<a href=\"https://www.wellness-dining.com/kikubari/products/k140/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">気配り宅配食の商品ページ（6コース）</a>", "なし", "お試し注文 初回送料無料・定期注文 ずっと送料無料・お試し定期注文 8回すべて送料無料"],
            ["<a href=\"https://www.wellness-dining.com/faq/kikubari/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">よくある質問（気配り宅配食）</a>", "なし", "お試し注文・定期注文・都度注文の送料"],
            ["<a href=\"https://www.wellness-dining.com/info/sonota-20261028/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">お知らせ（2026年10月28日）</a>", "なし", "秋・冬メニューの同時注文で最大5%OFF"],
            ["<a href=\"https://www.wellness-dining.com/event/anniversary15th/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">15周年の特設ページ</a>", "なし", "15年の歩みと利用者の声（割引の告知はなし）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※2026年11月15日に当サイトが確認した結果です。メールマガジンや会報誌など、公式サイト以外で配布される割引は確認していません。</p>
        <SectionHeading id="list">いま使える割引の一覧</SectionHeading>
        <ComparisonTable
          headers={["割引", "内容", "条件・期限"]}
          rows={[
            ["お試し注文", "初回送料無料（送料は当社負担）", "7食・14食・21食のどれでも。1回だけの注文"],
            ["お試し定期注文", "8回すべて送料無料", "毎週×8回お届けする定期注文のお試し"],
            ["定期注文", "14食・21食は送料無料、7食は送料半額の440円（北海道・沖縄935円）", "休止・お届け日の変更・解約はいつでも可能（次回お届けの1週間前まで）"],
            ["秋・冬メニュー同時注文", "秋7食＋冬7食は各3%OFF、14食・21食の組み合わせは各5%OFF、送料無料", "注文締切 11月25日（水）・数量限定"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.wellness-dining.com/kikubari/products/k110/" target="_blank" rel="noopener noreferrer" className="text-accent underline">たんぱく＆塩分調整気配り宅配食の商品ページ</a>・<a href="https://www.wellness-dining.com/faq/kikubari/" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問（気配り宅配食）</a>・<a href="https://www.wellness-dining.com/event/autumn-winter-menu/" target="_blank" rel="noopener noreferrer" className="text-accent underline">秋・冬メニュー特設ページ</a>・<a href="https://www.wellness-dining.com/info/sonota-20261028/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お知らせ 2026年10月28日</a>（2026年11月15日確認）</p>
        <SectionHeading id="souryou">送料無料になる注文方法</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ウェルネスダイニングの割引で金額が最も大きいのは送料です。注文方法ごとの送料は次のとおりです。</p>
        <ComparisonTable
          headers={["注文方法", "送料（北海道・沖縄以外）", "送料（北海道・沖縄）"]}
          rows={[
            ["お試し注文（初回）", "無料", "無料"],
            ["定期注文 14食・21食", "無料", "無料"],
            ["定期注文 7食", "440円", "935円"],
            ["都度注文", "880円", "1,870円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.wellness-dining.com/faq/kikubari/" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問「送料はかかりますか。」</a>（2026年11月15日確認）。いずれも税込です。</p>
        <p className="text-sm mb-6 leading-relaxed">たとえば北海道・沖縄で7食を都度注文すると送料は1,870円で、お試し注文や定期注文の14食・21食を選ぶだけで、この分がかかりません。<strong>はじめて利用するならお試し注文、続けるなら定期注文の14食か21食</strong>が、送料の面では最も負担の少ない選び方です。</p>
        <SectionHeading id="price">6コースの1食あたり（注文方法別・当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">気配り宅配食の6コースの価格は次のとおりです（おかずのみ・ご飯は別）。</p>
        <ComparisonTable
          headers={["コース", "7食（税込）", "14食（税込）", "21食（税込）"]}
          rows={[
            ["<a href=\"https://www.wellness-dining.com/kikubari/products/k140/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">栄養バランス</a>", "5,529円", "10,778円", "15,800円"],
            ["<a href=\"https://www.wellness-dining.com/kikubari/products/k120/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">糖質＆カロリー制限</a>", "5,767円", "11,232円", "16,178円"],
            ["<a href=\"https://www.wellness-dining.com/kikubari/products/k130/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">塩分制限</a>", "5,702円", "11,232円", "16,178円"],
            ["<a href=\"https://www.wellness-dining.com/kikubari/products/k110/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">たんぱく＆塩分調整</a>", "6,058円", "11,858円", "17,258円"],
            ["<a href=\"https://www.wellness-dining.com/kikubari/products/k160/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">脂質制限</a>", "7,009円", "13,305円", "19,418円"],
            ["<a href=\"https://www.wellness-dining.com/kikubari/products/k150/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-accent underline\">厳選栄養バランス</a>", "8,154円", "15,800円", "23,122円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 各コースの商品ページ（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">この価格に送料を加えて、注文方法ごとの1食あたりを計算しました（北海道・沖縄以外）。商品の価格は注文方法で変わらず、違いは送料だけです。</p>
        <ComparisonTable
          headers={["コース", "7食・都度（送料880円）", "7食・お試し（送料無料）", "7食・定期（送料440円）", "14食・定期/お試し（送料無料）", "21食・定期/お試し（送料無料）"]}
          rows={[
            ["栄養バランス", "約916円", "約790円", "約853円", "約770円", "約752円"],
            ["糖質＆カロリー制限", "約950円", "約824円", "約887円", "約802円", "約770円"],
            ["塩分制限", "約940円", "約815円", "約877円", "約802円", "約770円"],
            ["たんぱく＆塩分調整", "約991円", "約865円", "約928円", "約847円", "約822円"],
            ["脂質制限", "約1,127円", "約1,001円", "約1,064円", "約950円", "約925円"],
            ["厳選栄養バランス", "約1,291円", "約1,165円", "約1,228円", "約1,129円", "約1,101円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※（価格＋送料）÷食数を当サイトで計算し、1円未満を四捨五入しました。</p>
        <p className="text-sm mb-6 leading-relaxed">同じ栄養バランスのコースでも、7食の都度注文（約916円）と21食の定期注文（約752円）では1食あたり約160円の差があります。差の大部分は、送料の有無と食数による価格の違いです。</p>
        <SectionHeading id="seasonal">秋・冬メニュー同時注文で最大5%OFF（11月25日まで）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">2026年10月28日のお知らせで、気配り宅配食に期間限定の秋・冬メニュー（各7種）が登場しました。対象はたんぱく＆塩分調整・糖質＆カロリー制限・塩分制限・栄養バランスの4コースで、送料無料で届きます。</p>
        <ComparisonTable
          headers={["注文の仕方", "お届け期間", "注文締切", "割引"]}
          rows={[
            ["秋メニューだけ", "10月29日（木）〜11月30日（月）", "11月25日（水）", "なし（送料無料）"],
            ["冬メニューだけ", "1月13日（水）〜2月8日（月）", "2月3日（水）", "なし（送料無料）"],
            ["秋・冬を同時に注文", "秋・冬の2回に分けてお届け", "11月25日（水）", "7食＋7食は各3%OFF、14食＋14食・21食＋21食は各5%OFF"],
          ]}
        />
        <SubHeading>たんぱく＆塩分調整気配り宅配食の例（公式の表示）</SubHeading>
        <ComparisonTable
          headers={["セット", "通常（税抜）", "同時注文の価格（各・税込）", "秋・冬合計（税抜）"]}
          rows={[
            ["秋7食＋冬7食", "5,610円", "5,876円（3%OFF）", "10,882円"],
            ["秋14食＋冬14食", "10,980円", "11,265円（5%OFF）", "20,862円"],
            ["秋21食＋冬21食", "15,980円", "16,395円（5%OFF）", "30,362円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.wellness-dining.com/event/autumn-winter-menu/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ウェルネスダイニング 秋・冬メニュー特設ページ</a>・<a href="https://www.wellness-dining.com/info/sonota-20261028/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お知らせ「気配り宅配食に秋・冬メニューが登場！」</a>（2026年11月15日確認）。数量限定で、なくなり次第終了です。請求は出荷の都度です。</p>
        <p className="text-sm mb-6 leading-relaxed">21食＋21食で同時に注文すると、通常価格の税込17,258円が16,395円になり、<strong>1回あたり863円、2回で1,726円安くなる</strong>計算です（当サイト計算）。ほかの3コースの割引後の価格は、特設ページでご確認ください。</p>
        <SectionHeading id="notice">割引を使う前に確認したい点</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li><strong>メニューは選べない</strong>：管理栄養士が組んだ献立のおまかせです。苦手な食材を除くこともできません</li><li><strong>アレルギーは完全には対応していない</strong>：公式FAQに「アレルギーの完全対応は出来かねます」とあります</li><li><strong>ご飯は付かない</strong>：おかずのみで、栄養を調整したパックごはんは別売りです</li><li><strong>無料サンプルはない</strong>：試す場合はお試し注文（有料・送料無料）になります</li><li><strong>定期注文の休止・解約</strong>：次回お届け予定日の1週間前までに電話・メールなどで連絡します。契約期間の縛りはありません</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.wellness-dining.com/faq/kikubari/" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問（気配り宅配食）</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">味の評判や「まずい」という声の中身は<Link href="/articles/wellness-dining-reviews/" className="text-accent underline">ウェルネスダイニングの口コミ・評判</Link>で、ほかの宅食のお試しとの比較は<Link href="/articles/otameshi-set-osusume/" className="text-accent underline">宅配弁当のお試しセットの比較</Link>で確認できます。</p>
        <OfficialButton>ウェルネスダイニング 公式サイトで最新の料金・お試しを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ウェルネスダイニングには入力式のクーポンコードの案内はなく、割引は注文方法で決まります。はじめてならお試し注文（初回送料無料）、続けるなら定期注文の14食・21食（送料無料）を選ぶと、都度注文より1食あたり数十円〜百円以上安くなります。11月25日までは、秋・冬メニューの同時注文で最大5%OFFも使えます。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・キャンペーンは変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>ウェルネスダイニング 公式サイトで最新の料金・お試しを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">ウェルネスダイニングの口コミ・評判</Link></li>
            <li><Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark transition-colors">宅配弁当のお試しセットの比較</Link></li>
            <li><Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">糖質制限の宅配弁当ランキング</Link></li>
            <li><Link href="/articles/kaigoshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">介護食の宅配サービスの比較</Link></li>
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
