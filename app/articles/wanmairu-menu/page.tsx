import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "わんまいるのメニュー｜健幸ディナーと美食弁当の5週分50食の献立・カロリー・糖質・塩分を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "わんまいるの公式献立ページに掲載されている、健幸ディナー（湯せん・流水解凍）と美食弁当（レンジ）の5週分・計50食のメニューを一覧にしました。週ごとの平均カロリー・糖質・塩分を当サイトで計算し、公式の栄養基準と照らし合わせています。メニューは選べず週替わりです（2026年11月17日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/wanmairu-menu/";
const OFFICIAL_URL = "https://t.felmat.net/fmcl?ak=H928D.1.V161884Z.B1357443";
const OFFICIAL_IMP = "https://t.felmat.net/fmimp/H928D.V161884Z.B1357443";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "わんまいる メニュー, わんまいる 献立, わんまいる 健幸ディナー メニュー, わんまいる 美食弁当 メニュー, わんまいる 今週のメニュー, わんまいる カロリー",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-17T00:00:00+09:00",
    modifiedTime: "2026-11-17T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "わんまいるのメニューは選べますか？", answer: "選べません。公式FAQは「1週間に1種類のみのご用意となります」と案内しています。メニューは週替わりで、8週間は同じメニューが届かない組み立てです。" },
  { question: "今週・来週のメニューはどこで確認できますか？", answer: "公式サイトの献立ページ（健幸ディナー・美食弁当それぞれ）に、今週を含む5週分が掲載されています。2026年11月17日時点では11月14日〜12月18日のお届け分でした。" },
  { question: "健幸ディナーと美食弁当の違いは？", answer: "健幸ディナーは袋入りで湯せん・流水解凍、美食弁当はトレー入りで電子レンジで温めます。料金は同じで、定期1週間分（5食）6,280円・都度購入6,780円（税込・送料別）です。" },
  { question: "1食のカロリーはどのくらいですか？", answer: "2026年11月17日に確認した5週分では、健幸ディナーが182〜493kcal（中央値 308kcal）、美食弁当が123〜367kcal（中央値 280kcal）でした（当サイト集計）。" },
  { question: "塩分は多いですか？", answer: "健幸ディナーは1食0.9〜5.7g（中央値 2.2g）、美食弁当は0.5〜2.7g（中央値 1.6g）でした。週ごとの平均は2商品とも公式の基準（健幸ディナー3.5g未満・美食弁当2.5g未満）の範囲内です。" },
  { question: "たんぱく質の量はわかりますか？", answer: "献立ページにはたんぱく質・脂質の掲載がありません。公式は健幸ディナーを「5食平均 たんぱく質20g以上」、美食弁当を「1か月分の1食平均 たんぱく質15g以上」と案内しています。" },
];

const sections = [
  { id: "lineup", label: "2つの商品と料金" },
  { id: "rule", label: "メニューの決まり方：週替わり・選択不可" },
  { id: "nutrition", label: "週ごとの平均と公式の栄養基準（当サイト計算）" },
  { id: "kenko", label: "健幸ディナーの献立（5週分）" },
  { id: "bishoku", label: "美食弁当の献立（5週分）" },
  { id: "notes", label: "アレルゲン・賞味期限・調理方法" },
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
          <span className="text-foreground">わんまいるのメニュー</span>
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


export default function WanmairuMenuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-17T00:00:00+09:00",
    dateModified: "2026-11-17T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "わんまいるのメニュー" },
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
            <time dateTime="2026-11-17">公開: 2026年11月17日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※PR・本記事はアフィリエイト広告を含みます。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            わんまいるは、国産食材を使った冷凍のおかずを届ける宅配食です。商品は、湯せん・流水解凍で温める袋入りの<strong>健幸ディナー</strong>と、電子レンジで温めるトレー入りの<strong>美食弁当</strong>の2つで、どちらも「主菜1品＋副菜2品」を1食として、5食分が週替わりのメニューで届きます。
          </p>
          <p className="mb-3">
            この記事では、2026年11月17日に公式の献立ページに掲載されていた<strong>2商品×5週分＝50食のメニュー</strong>と、各食のエネルギー・糖質・塩分を書き出しました。週ごとの平均は当サイトが計算し、公式が示す栄養基準と照らし合わせています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">わんまいるのメニューの要点</p>
          <p className="text-sm leading-relaxed mb-4">わんまいるのメニューは週替わりで、自分で選ぶことはできません（公式FAQ）。公式の献立ページには11月14日〜11月20日から5週分が掲載されており、健幸ディナーは1食182〜493kcal（中央値 308kcal）、美食弁当は123〜367kcal（中央値 280kcal）でした。週ごとの5食平均は、2商品とも全5週で公式の栄養基準（健幸ディナー＝糖質30g以下・塩分3.5g未満・400kcal以下）の範囲内でした（当サイト計算）。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>5週先までの献立とカロリー・糖質・塩分が公開されている</li><li>週ごとの平均は全週で公式の栄養基準の範囲内</li><li>8週間は同じメニューが届かない（公式）</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>メニューは選べない（1週間に1種類）</li><li>たんぱく質・脂質は献立ページに掲載なし</li><li>1食で塩分3.5g以上の日もある（5食）</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="nofollow noopener sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">わんまいる 公式サイトを見る →</a><img src={OFFICIAL_IMP} width={1} height={1} alt="" style={{ border: "none" }} />
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="lineup">2つの商品と料金</SectionHeading>
        <ComparisonTable
          headers={["商品", "形態・温め方", "1回のお届け", "定期（税込）", "都度購入（税込）"]}
          rows={[
            ["健幸ディナー", "袋入り・湯せん または 流水解凍", "主菜1品＋副菜2品×5食（計15袋）", "1週間分 6,280円／2週間分 12,560円", "5食 6,780円"],
            ["美食弁当", "トレー入り・電子レンジ", "1トレー（主菜1品＋副菜2品）×5種類", "1週間分 6,280円／2週間分 12,560円", "5食 6,780円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: わんまいる 商品ページ（<a href="https://www.onemile.jp/product/370" target="_blank" rel="noopener noreferrer" className="text-accent underline">健幸ディナー 定期1週間分</a>・<a href="https://www.onemile.jp/product/371" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期2週間分</a>・<a href="https://www.onemile.jp/product/3360" target="_blank" rel="noopener noreferrer" className="text-accent underline">都度購入</a>・<a href="https://www.onemile.jp/product/1706" target="_blank" rel="noopener noreferrer" className="text-accent underline">美食弁当 定期1週間分</a>・<a href="https://www.onemile.jp/product/1707" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期2週間分</a>・<a href="https://www.onemile.jp/product/3363" target="_blank" rel="noopener noreferrer" className="text-accent underline">都度購入</a>）（2026年11月17日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">送料は商品ページとよくある質問で「本州・四国・九州は送料1,080円（税込）」「北海道・沖縄県は特別配送料金：2,645円（税込）」と案内されています。定期1週間分の場合、送料を含めた1食あたりは（6,280円＋1,080円）÷5食＝<strong>1,472円</strong>です（当サイト計算）。なお、申込フォーム内のご利用ガイドには送料935円（北海道・沖縄2,500円）の記載が残っており、公式内で表記が食い違っています。ここでは商品ページとFAQの1,080円で計算しました。</p>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/product/370" target="_blank" rel="noopener noreferrer" className="text-accent underline">わんまいる 商品ページ</a>・<a href="https://www.onemile.jp/fs/q_a" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>・<a href="https://www.onemile.jp/product-buy-form/teiki" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期申込フォームのご利用ガイド</a>（2026年11月17日確認）</p>
        <SectionHeading id="rule">メニューの決まり方：週替わり・選択不可</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["メニューの選択", "選べない（「1週間に1種類のみのご用意となります」）"],
            ["入れ替わり", "週替わり。「8週間、同じメニューは一切ありません」"],
            ["定番の料理", "人気の惣菜（さばの味噌煮・ハンバーグ・麻婆豆腐など）は年間定番として毎月1回登場"],
            ["メニューの種類", "健幸ディナーは「主菜だけで数十種類、副菜も入れると100種類以上」"],
            ["食事制限への対応", "糖尿病・腎臓病に対応した料理はない"],
            ["お届けの週", "土曜〜金曜（北海道・東北・九州〈福岡除く〉は日曜〜土曜）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/fs/q_a" target="_blank" rel="noopener noreferrer" className="text-accent underline">わんまいる よくある質問「メニューは選べるのですか。」</a>・<a href="https://www.onemile.jp/fs/kenko-dinner-menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">健幸ディナーの献立</a>・<a href="https://www.onemile.jp/fs/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー紹介</a>（2026年11月17日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">苦手な料理だけを外す仕組みは公式に案内がありません。気になる料理がある週は、献立を見てからスキップ（休止）するのが現実的な方法です。休止や再開は回数・期間の制限がなく、次回お届けの6日前までに連絡します（公式FAQ）。</p>
        <SectionHeading id="nutrition">週ごとの平均と公式の栄養基準（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式は、健幸ディナーを「5食平均 糖質30g以下、塩分3.5g未満、400kcal以下」、美食弁当を「1か月分の1食平均 たんぱく質15g以上、糖質30g以下、塩分2.5g未満、300kcal以下、脂質20g以下、炭水化物30g以下」と案内しています。献立ページに掲載されている値で、週ごとの5食平均を計算しました。</p>
        <SubHeading>健幸ディナー（基準：糖質30g以下・塩分3.5g未満・400kcal以下）</SubHeading>
        <ComparisonTable
          headers={["お届けの週", "平均エネルギー", "平均糖質", "平均塩分"]}
          rows={[
            ["11月14日〜11月20日", "286.6kcal", "19.6g", "2.1g"],
            ["11月21日〜11月27日", "278.6kcal", "18.3g", "2.5g"],
            ["11月28日〜12月4日", "373.4kcal", "26.2g", "2.7g"],
            ["12月5日〜12月11日", "307kcal", "19.7g", "2.3g"],
            ["12月12日〜12月18日", "306.8kcal", "23g", "3g"],
          ]}
        />
        <SubHeading>美食弁当（基準：糖質30g以下・塩分2.5g未満・300kcal以下）</SubHeading>
        <ComparisonTable
          headers={["お届けの週", "平均エネルギー", "平均糖質", "平均塩分"]}
          rows={[
            ["11月14日〜11月20日", "291.8kcal", "12.7g", "1.6g"],
            ["11月21日〜11月27日", "256.4kcal", "20.5g", "1.9g"],
            ["11月28日〜12月4日", "288.8kcal", "16.4g", "2.1g"],
            ["12月5日〜12月11日", "245.8kcal", "16.9g", "1.4g"],
            ["12月12日〜12月18日", "256.2kcal", "19.3g", "1.8g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※<a href="https://www.onemile.jp/fs/kenko-dinner-menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">健幸ディナーの献立</a>・<a href="https://www.onemile.jp/fs/bishoku-bento-menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">美食弁当の献立</a>の各食の掲載値（2026年11月17日確認）を当サイトが平均（小数第1位）。基準の出典は<a href="https://www.onemile.jp/fs/q_a" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>・<a href="https://www.onemile.jp/product-buy-form/tray-type" target="_blank" rel="noopener noreferrer" className="text-accent underline">美食弁当の申込フォーム</a>。美食弁当の基準は「1か月分の平均」のため、週ごとの平均は参考値です。</p>
        <p className="text-sm mb-6 leading-relaxed">2商品とも、掲載されている5週すべてで週平均が公式の基準の範囲内でした。ただし基準は平均なので、1食ごとには幅があります。健幸ディナーで塩分が最も多いのは島根県産石見ポークの豚丼の具セットの5.7gで、3.5g以上の食事は25食中5食でした。塩分を控えている方は、献立ページで各食の値を確認しておくと安心です。たんぱく質と脂質は献立ページに掲載がなく、確認できたのはエネルギー・糖質・塩分の3項目です。</p>
        <SectionHeading id="kenko">健幸ディナーの献立（5週分）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">袋入りで、料理ごとに湯せん・流水解凍を使い分けます。各食は「主菜1品＋副菜2品」です。</p>
        <SubHeading>健幸ディナー：11月14日〜11月20日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "青森県産いか、大根と厚揚げの炊き合せセット", "白菜としらすの煮浸し・五目厚焼玉子", "205kcal", "12.6g", "1.8g"],
            ["2食目", "天然まぐろの ど旨い漬けセット", "かぼちゃとしめじの煮物・きんぴらごぼう", "202kcal", "20.5g", "1.7g"],
            ["3食目", "大分郷土料理 鶏肉と白ねぎのがめ煮セット", "青梗菜とうす揚げのお浸し・茄子の揚げ味噌浸し", "335kcal", "14.8g", "2.1g"],
            ["4食目", "広島県産ぶちうまポークのメンチカツセット", "ミニオムレツ・洋風温野菜(ブロッコリー・人参・かぼちゃ)", "394kcal", "23.7g", "2.9g"],
            ["5食目", "島根県産石見ポークの酢豚セット", "茄子と白ねぎの中華煮込み・ほうれん草ともやしのナムル", "297kcal", "26.5g", "2.2g"],
          ]}
        />
        <SubHeading>健幸ディナー：11月21日〜11月27日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "長崎県産さばの塩焼きセット", "ほうれん草、人参、厚揚げの炊き合わせ・なめこ入り味付け大根おろし", "208kcal", "7.3g", "1.9g"],
            ["2食目", "北海道産 天然ぶりの照り焼きセット", "高野豆腐といんげんと人参の炊き合わせ・大根とみかんの和サラダ", "186kcal", "16.7g", "1.6g"],
            ["3食目", "島根県産石見ポークの豚丼の具セット", "山形県最上郡特産秘伝豆の塩茹で・白菜の昆布漬け", "318kcal", "20.8g", "5.7g"],
            ["4食目", "高知県産よさこい尾どりのチキンカツセット", "キャベツと豆もやしのカレー煮込み・さつまいものポテトサラダ", "340kcal", "21.9g", "0.9g"],
            ["5食目", "島根石見ポークと北海道ホタテと山形最上椎茸の八宝菜セット", "揚げ春巻き餃子・もやしと人参のナムル", "341kcal", "24.7g", "2.4g"],
          ]}
        />
        <SubHeading>健幸ディナー：11月28日〜12月4日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "三陸産さくら真鱈フライ カレー風味セット", "コーン、玉ねぎとしめじのスープ煮・キャベツと枝豆のコールスロー", "235kcal", "13.2g", "1.2g"],
            ["2食目", "岩手県産さんまの塩こうじ焼きセット", "切干大根の煮物・秘伝豆と大豆の旨煮", "493kcal", "22.6g", "3g"],
            ["3食目", "高知県産四万十ポークと淡路島産玉ねぎの肉じゃがセット", "北海道産切り昆布と大豆煮・青梗菜としめじのお浸し", "308kcal", "30.4g", "4.6g"],
            ["4食目", "宮崎県産黒毛和牛と黒豚のデミグラスソースハンバーグセット", "卵とブロッコリーの炒めもの・北海道産じゃが芋ポテトフライ", "477kcal", "33.2g", "2.4g"],
            ["5食目", "島根県産石見ポークの挽肉の麻婆茄子セット", "大分とり天・ブロッコリーの中華風おひたし", "354kcal", "31.5g", "2.2g"],
          ]}
        />
        <SubHeading>健幸ディナー：12月5日〜12月11日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "北海道産 天然ぶりと大根の旨煮セット", "揚げ出し豆腐(プレーン）・茄子、人参とかぼちゃの揚げびたし", "280kcal", "17.4g", "1.8g"],
            ["2食目", "北海道産カレイ一夜干しの塩焼きセット", "人参しりしり・かぼちゃと青梗菜のあんかけ", "227kcal", "15g", "2g"],
            ["3食目", "みやぎ森林鶏の筑前煮セット", "ほうれん草と人参のお浸し・茄子、人参、こんにゃくの味噌炒め", "267kcal", "25g", "3.7g"],
            ["4食目", "国産若鶏モモ肉のローストチキンセット", "フレンチポテト・キャベツと人参のコールスロー", "449kcal", "18.7g", "1.7g"],
            ["5食目", "鳥取県産大山豚とキャベツの味噌炒め(回鍋肉)セット", "大分のからあげ・味付け三日とろろ", "312kcal", "22.6g", "2.3g"],
          ]}
        />
        <SubHeading>健幸ディナー：12月12日〜12月18日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "北海道産 天然秋鮭の塩焼きセット", "白菜としらすの煮浸し・かぼちゃとしめじの煮物", "182kcal", "13.8g", "1g"],
            ["2食目", "北海道産カレイと厚揚げの煮物セット", "青梗菜としめじのおかか和え・きんぴらごぼう", "277kcal", "23.1g", "3g"],
            ["3食目", "高知県産四万十つくねと野菜の卵とじセット", "じゃが芋といんげんの煮物・青梗菜とうす揚げのお浸し", "337kcal", "25.3g", "3.7g"],
            ["4食目", "宮崎ご当地グルメ 国産鶏肉のチキン南蛮セット", "洋風温野菜（ブロッコリー、人参、かぼちゃ）・キャベツとコーンのコールスロー", "432kcal", "35.8g", "5g"],
            ["5食目", "島根県産 石見ポークのロース生姜焼きセット", "茄子と白ねぎの中華煮込み・もやしとほうれん草のナムル", "306kcal", "17g", "2.4g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/fs/kenko-dinner-menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">わんまいる 健幸ディナーの献立</a>（2026年11月17日確認）。お届けの週は土曜〜金曜（北海道・東北・九州〈福岡除く〉は日曜〜土曜）。物価高・品不足の影響でメニューが変わる場合があると公式に記載があります。</p>
        <SectionHeading id="bishoku">美食弁当の献立（5週分）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">トレー入りで、電子レンジで温めます。公式は「食材・調味料に至るまで食品添加物無添加」としています。</p>
        <SubHeading>美食弁当：11月14日〜11月20日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "北海道産秋鮭と彩野菜のソテーセット", "マカロニナポリタン風・ほうれん草ともやしのソテー", "284kcal", "11.3g", "2g"],
            ["2食目", "長崎県産 さばの煮つけセット", "きんぴらごぼう・大根と人参のなます", "343kcal", "17.8g", "2.1g"],
            ["3食目", "国産牛肉、ごぼう、人参の炊き合わせセット", "ほうれん草と人参のちりめん和え・黒豆煮", "340kcal", "8.5g", "0.9g"],
            ["4食目", "宮崎県産日南どりのチキンカツキャベツ添えセット", "ブロッコリーと人参の温野菜・アスパラと玉ねぎのバター炒め", "222kcal", "10.3g", "1.2g"],
            ["5食目", "島根県産石見ポークと野菜のオイスター炒めセット", "じゃが芋カレー炒め・小松菜と豆苗のにんにく炒め", "270kcal", "15.7g", "1.6g"],
          ]}
        />
        <SubHeading>美食弁当：11月21日〜11月27日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "北海道礼文島真ホッケの開き干しセット", "ひじきの煮物・小松菜と人参のお浸し", "177kcal", "15.8g", "1.6g"],
            ["2食目", "三陸産さくら真鱈のエスカベッシュセット", "じゃが芋バター・キャベツと蒸し鶏のサラダ", "301kcal", "18.2g", "1.6g"],
            ["3食目", "宮崎県産日南どりの筑前煮セット", "ほうれん草と春雨の酢の物・大豆の五目煮", "252kcal", "22.6g", "2.6g"],
            ["4食目", "ロールキャベツトマトソース煮込みセット", "玉ねぎとピーマンのソテー・スイートコーン入りポテトサラダ", "280kcal", "28.9g", "1.6g"],
            ["5食目", "宮崎県産日南どりのチリソースセット", "ニラ玉・キャベツのナムル", "272kcal", "17.1g", "2.1g"],
          ]}
        />
        <SubHeading>美食弁当：11月28日〜12月4日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "北海道産秋鮭とじゃが玉の醤油バターセット", "もやしのニラ炒め・大豆と根菜のごった煮", "297kcal", "13.8g", "2g"],
            ["2食目", "大分県津久見ぶりの照り焼き煮セット", "大豆とひじきの煮物・小松菜と平天の炒め物", "318kcal", "14.5g", "2.5g"],
            ["3食目", "島根県産石見ポークの生姜焼きセット", "ほうれん草のお浸し・炒り卵", "256kcal", "17.6g", "2.7g"],
            ["4食目", "宮崎県産日南どりのローストチキンキャベツ添えセット", "じゃが芋とキノコのバター風味・茄子のトマトソース", "206kcal", "3.9g", "1.4g"],
            ["5食目", "宮崎県産日南どりと野菜の甘酢あんかけセット", "ニラとキャベツの炒め物・かぼちゃのクリーム", "367kcal", "32.2g", "2g"],
          ]}
        />
        <SubHeading>美食弁当：12月5日〜12月11日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "三陸産さくら真鱈のバター焼きセット", "白菜と人参とさつま揚げのソテー・小松菜のにんにく炒め", "123kcal", "5.7g", "1.5g"],
            ["2食目", "青森県産アカイカと野菜のオリーブオイル炒めセット", "ブロッコリーとエリンギのバター炒め・じゃが芋と人参のソテー", "158kcal", "5g", "1g"],
            ["3食目", "宮崎県産日南どりの照り焼きセット", "揚げじゃが・玉ねぎとしめじのバター醤油", "319kcal", "25.5g", "2g"],
            ["4食目", "広島県ぶちうまポークハンバーグトマトソースセット", "ブロッコリーと人参のボイル・北海道産スイートコーンバター", "320kcal", "27.7g", "0.5g"],
            ["5食目", "島根県産石見ポークのニラ豚セット", "キャベツと春雨の中華炒め・かぼちゃと鶏そぼろの中華あんかけ", "309kcal", "20.8g", "1.9g"],
          ]}
        />
        <SubHeading>美食弁当：12月12日〜12月18日のお届け</SubHeading>
        <ComparisonTable
          headers={["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"]}
          rows={[
            ["1食目", "北海道産秋鮭の塩焼きセット", "小松菜のお浸し・根菜の炊き合せ", "166kcal", "8.6g", "1.5g"],
            ["2食目", "三陸産さくら真鱈と彩野菜の醤油バター炒めセット", "さつま芋のレモン煮・大豆のスパイシー炒め", "290kcal", "19.9g", "1.6g"],
            ["3食目", "国産牛のすき焼きセット", "五目厚焼き玉子・黒豆煮", "296kcal", "30.1g", "2.1g"],
            ["4食目", "広島県ぶちうまポークの手作りメンチカツセット", "もやしのカレー炒め・ほうれん草の卵とじ", "277kcal", "13.8g", "1.3g"],
            ["5食目", "島根県産石見ポークの酢豚セット", "キャベツとニラの炒め物・ほうれん草のナムル", "252kcal", "24.3g", "2.3g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/fs/bishoku-bento-menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">わんまいる 美食弁当の献立</a>（2026年11月17日確認）。お届けの週は土曜〜金曜（北海道・東北・九州〈福岡除く〉は日曜〜土曜）。物価高・品不足の影響でメニューが変わる場合があると公式に記載があります。</p>
        <SectionHeading id="notes">アレルゲン・賞味期限・調理方法</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>アレルゲン：献立ページに週ごとの含有品目が掲載されています（例：11月14日〜20日の健幸ディナーは「卵・乳成分・小麦・いか・ごま・牛肉・さば・大豆・鶏肉・豚肉・りんごを含みます」）。商品ページには料理ごとの原材料も掲載されています</li><li>賞味期限：日数の記載はなく、「賞味期限から30日以上前の商品をお届けしています」と案内されています。解凍後の再冷凍はできません</li><li>健幸ディナーの温め方：「そのまま湯せん、又は、流水解凍」。料理ごとに方法が異なります。袋のサイズは縦25cm×横20cm×厚み1.5cm</li><li>美食弁当の温め方：電子レンジ（時間はトレーによって異なる）。1トレーのサイズは縦15cm×横20cm×厚み3.5cm</li><li>国産食材：国産食材100%としつつ、調味料やハム・チーズなどの原料の一部に海外のものが含まれる場合があると案内されています</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.onemile.jp/fs/kenko-dinner-menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">健幸ディナーの献立</a>・<a href="https://www.onemile.jp/fs/q_a" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>・<a href="https://www.onemile.jp/product/370" target="_blank" rel="noopener noreferrer" className="text-accent underline">商品ページ</a>・<a href="https://www.onemile.jp/product/1706" target="_blank" rel="noopener noreferrer" className="text-accent underline">美食弁当 商品ページ</a>・<a href="https://www.onemile.jp/product-buy-form/teiki" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期申込フォーム</a>（2026年11月17日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">味や量の評判は<Link href="/articles/wanmairu-reviews/" className="text-accent underline">わんまいるの口コミ・評判</Link>で、出典付きで整理しています。</p>
        <OfficialButton>わんまいる 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">わんまいるのメニューは週替わりで選べませんが、公式の献立ページで5週先までの料理とエネルギー・糖質・塩分を確認できます。掲載されていた50食では、週ごとの平均はどの週も公式の栄養基準の範囲内でした。1食ごとの塩分には幅があるため、気になる方は献立を見て、合わない週はスキップする使い方ができます。</p>
        <p className="text-sm mb-6 leading-relaxed">メニュー・料金・送料は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>わんまいる 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/wanmairu-reviews/" className="text-accent hover:text-accent-dark transition-colors">わんまいるの口コミ・評判</Link></li>
            <li><Link href="/articles/wanmairu-kaiyaku/" className="text-accent hover:text-accent-dark transition-colors">わんまいるの解約方法</Link></li>
            <li><Link href="/articles/mutenka-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">無添加の宅配弁当の比較</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者向けの宅配弁当の選び方</Link></li>
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
