import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ナッシュ（nosh）の賞味期限は？全102メニューの表示を確認｜おかずは製造日から365日・届いてから食べきる目安【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ナッシュの賞味期限を、公式のメニュー詳細102件とよくあるご質問で確認しました。おかず・朝食86品は「製造日から365日」、デザート・パンは詳細ページに記載なし。届いた時点の残り期間、家庭の冷凍庫での保存の目安、定期の食数別の食べきるペースも掲載（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-shoumi-kigen/";
const OFFICIAL_URL = "https://nosh.jp/menu";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ナッシュ 賞味期限, nosh 賞味期限, ナッシュ 保存期間, ナッシュ 冷凍 期限, ナッシュ 日持ち, ナッシュ 解凍",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-25T00:00:00+09:00",
    modifiedTime: "2026-11-25T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "ナッシュの賞味期限はどのくらいですか？", answer: "公式よくあるご質問では、冷凍保存で製造から約6ヵ月～1年程度です。2026年11月25日時点のメニュー詳細ページでは、おかず・朝食86品すべてが「製造日から365日」と表示されていました。" },
  { question: "届いた時点で賞味期限はどのくらい残っていますか？", answer: "公式は「短いものでも賞味期限まで1ヶ月程度余裕のあるものをお届け」としています。正確な期限は商品パッケージに記載されています。" },
  { question: "デザートやパンの賞味期限は？", answer: "デザート・パン・アイス16件は、詳細ページに賞味期限の記載がありませんでした（2026年11月25日確認）。パッケージの表示で確認してください。" },
  { question: "冷蔵庫で保存できますか？", answer: "公式の保存方法はすべて「冷凍・必ず冷凍庫で保管してください」です。デザート・パンの解凍は冷蔵庫で行うものがありますが、解凍後はできるだけ早く食べるよう案内されています。" },
  { question: "賞味期限が切れたら食べられませんか？", answer: "賞味期限はおいしく食べられる期限で、すぐに食べられなくなるわけではありませんが、品質は保証されません。家庭の冷凍室では未開封でも2〜3ヶ月で食べることが勧められています（日本冷凍食品協会）。" },
];

const sections = [
  { id: "answer", label: "ナッシュの賞味期限の結論" },
  { id: "menus", label: "全102メニューの賞味期限の表示" },
  { id: "home", label: "家庭の冷凍庫で保存するときの目安" },
  { id: "pace", label: "定期の食数・間隔別の食べきるペース" },
  { id: "heat", label: "温め時間と解凍方法" },
  { id: "trouble", label: "溶けて届いた・期限が近いとき" },
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
          <Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ナッシュの賞味期限</span>
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


export default function NoshShoumiKigenPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-25T00:00:00+09:00",
    dateModified: "2026-11-25T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      { "@type": "ListItem", position: 3, name: "ナッシュの賞味期限" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-25">公開: 2026年11月25日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ナッシュ（nosh）の冷凍弁当は、公式のよくあるご質問で賞味期限を<strong>「冷凍保存」で「製造から約6ヵ月～1年程度」</strong>と案内しています。短いものでも、賞味期限まで1ヶ月程度の余裕がある商品を届けるとしています。
          </p>
          <p>
            当サイトでは、2026年11月25日に公式のメニュー一覧にある102件の詳細ページを開き、賞味期限の表示を確認しました。メニューの種類ごとの表示の違い、家庭の冷凍庫での保存の目安、定期の食数ごとに食べきるペースをまとめています。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ナッシュの賞味期限（要点）</p>
          <p className="text-sm leading-relaxed mb-4">おかず・朝食メニュー86品の詳細ページは、すべて「賞味期限：製造日から365日」でした。デザート・パン・アイス16件は詳細ページに賞味期限の記載がなく、商品パッケージの表示で確認します。公式は「短いものでも賞味期限まで1ヶ月程度余裕のあるものをお届け」としています。日本冷凍食品協会は、家庭の冷凍室では未開封でも2〜3ヶ月で食べることをすすめています。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式の表示でわかること</p>
              <ul className="space-y-1 list-disc list-inside"><li>おかず・朝食86品は製造日から365日</li><li>届く時点で期限まで1ヶ月程度以上の余裕</li><li>すべて冷凍のまま届き、冷凍庫で保管</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>デザート・パン16件は詳細ページに記載なし</li><li>家庭の冷凍室は2〜3ヶ月で食べるのが目安</li><li>温めは電子レンジのみ（700W以上は不可）</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ナッシュのメニュー一覧（公式）を見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">ナッシュの賞味期限の結論</SectionHeading>
        <ComparisonTable
          headers={["確認したこと", "結果（2026年11月25日）"]}
          rows={[
            ["公式よくあるご質問の案内", "冷凍保存で製造から約6ヵ月～1年程度"],
            ["届く時点の残り期間", "短いものでも賞味期限まで1ヶ月程度の余裕"],
            ["おかず・朝食（詳細ページ）", "86品すべて「製造日から365日」"],
            ["デザート・パン・アイス（詳細ページ）", "16件とも賞味期限の記載なし（保存方法は冷凍）"],
            ["保存方法", "102件すべて「冷凍・必ず冷凍庫で保管してください」"],
            ["実際の期限の確認先", "商品パッケージに記載"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://nosh.jp/faq/answer/27" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「賞味期限について」</a>・<a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧</a>の各メニュー詳細ページ（2026年11月25日確認）。詳細ページの集計は当サイト。</p>
        <p className="text-sm mb-6 leading-relaxed">よくあるご質問の「約6ヵ月～1年程度」に対して、2026年11月25日時点の詳細ページでは、おかずと朝食のすべてが365日（約1年）と表示されていました。賞味期限は製造日から数えるため、届いた日からの残り期間は商品ごとに異なります。手元の商品の期限は、パッケージの表示で確認してください。料金やメニューは<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh（ナッシュ）の口コミ・評判</Link>で解説しています。</p>
        <SectionHeading id="menus">全102メニューの賞味期限の表示</SectionHeading>
        <ComparisonTable
          headers={["メニューの種類", "件数", "詳細ページの賞味期限"]}
          rows={[
            ["おかず", "80件", "製造日から365日"],
            ["朝食", "6件", "製造日から365日"],
            ["デザート", "11件", "記載なし"],
            ["アイス", "3件", "記載なし"],
            ["パン", "2件", "記載なし"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">メニュー一覧</a>に掲載の102件の詳細ページ（2026年11月25日確認・販売休止中の商品を含む）。種類は当サイトがメニュー一覧の分類にもとづいて分けました。</p>
        <p className="text-sm mb-6 leading-relaxed">デザート・パン・アイスは、詳細ページに「保存方法：冷凍」の記載はあるものの、賞味期限の欄がありませんでした。よくあるご質問の「製造から約6ヵ月～1年程度」はすべての商品に向けた案内のため、デザート・パンもこの範囲と考えられますが、商品ごとの期限はパッケージで確認する必要があります。</p>
        <SectionHeading id="home">家庭の冷凍庫で保存するときの目安</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">賞味期限は、-18℃以下で保存したときに品質が保たれる期限です。家庭の冷凍庫はドアの開け閉めで温度が上下するため、表示の期限より早めに食べるのが安全です。</p>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["日本冷凍食品協会の目安", "家庭の冷凍室で保存した冷凍食品は、未開封でも2〜3ヶ月で食べることをすすめる"],
            ["保存温度", "-18℃以下"],
            ["解凍してしまったもの", "冷凍された状態で電子レンジ調理するのが原則（解凍状態での加熱は過加熱の原因）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 一般社団法人日本冷凍食品協会「<a href="https://reishokukyo.or.jp/wp-content/uploads/pdf/claim_06.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline">電子レンジで調理した冷凍食品の調理不良について</a>」（2026年11月25日確認）。</p>
        <p className="text-sm mb-6 leading-relaxed">ナッシュは製造から365日の期限でも、届いてから2〜3ヶ月を目安に食べきる計画にしておくと、冷凍焼けなどで味や食感が落ちるのを避けやすくなります。冷凍庫に入る量は<Link href="/articles/reitouko-chiisai-takuhai-bento/" className="text-accent underline">冷凍庫が小さい人向けの宅配弁当</Link>で整理しています。</p>
        <SectionHeading id="pace">定期の食数・間隔別の食べきるペース</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ナッシュの定期便は6・8・10・12食のプランを、1・2・3週間ごとに届けます。次のお届けまでに食べきるには、1日あたり何食を食べればよいかを計算しました。</p>
        <ComparisonTable
          headers={["プラン", "1週間ごと", "2週間ごと", "3週間ごと"]}
          rows={[
            ["6食", "0.9食/日", "0.4食/日", "0.3食/日"],
            ["8食", "1.1食/日", "0.6食/日", "0.4食/日"],
            ["10食", "1.4食/日", "0.7食/日", "0.5食/日"],
            ["12食", "1.7食/日", "0.9食/日", "0.6食/日"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※食数・配送間隔は公式サイトの注文案内（2026年11月25日確認）。1日あたりの食数は当サイト計算（食数÷日数）。</p>
        <p className="text-sm mb-6 leading-relaxed">たとえば1日1食をナッシュにする場合、6食なら1週間ごと、12食なら2週間ごとがほぼ食べきれるペースです。食べきれない分が続くときは、スキップや配送間隔の変更で在庫が増えすぎないようにできます。</p>
        <SectionHeading id="heat">温め時間と解凍方法</SectionHeading>
        <SubHeading>おかず・朝食（メインプレート）</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">メインプレートは、蓋を左端から5cm程度はがし、電子レンジで蓋に記載の時間温めます。700W以上での加熱は容器が破損するおそれがあるため避け、電子レンジ以外の温めには対応していません。温めムラがあるときは10秒ずつ追加で温めます。詳細ページに載っている600Wの加熱時間（下限）を86品で集計すると、4分00秒〜7分00秒で、もっとも多いのは5分00秒（27品）でした。</p>
        <ComparisonTable
          headers={["600Wの加熱時間（下限）", "品数"]}
          rows={[
            ["4分00秒", "1品"],
            ["4分20秒", "1品"],
            ["4分30秒", "15品"],
            ["4分50秒", "1品"],
            ["5分00秒", "27品"],
            ["5分30秒", "16品"],
            ["6分00秒", "11品"],
            ["6分20秒", "1品"],
            ["6分30秒", "11品"],
            ["7分00秒", "2品"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://nosh.jp/faq/answer/78" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「noshメインプレートのお召し上がり方」</a>・各メニュー詳細ページの調理方法（2026年11月25日確認）。集計は当サイト。</p>
        <SubHeading>デザート・パン</SubHeading>
        <ComparisonTable
          headers={["商品", "解凍方法（公式）"]}
          rows={[
            ["パン", "常温解凍で約45分"],
            ["ドーナツ", "冷蔵解凍で約60分"],
            ["レアチーズケーキ", "冷蔵解凍で約2時間"],
            ["ミルキークリーム カップシフォン", "冷蔵解凍で約20分"],
            ["ティラミス", "半解凍：冷蔵で約30分／全解凍：冷蔵で約2時間"],
            ["フォンダンショコラ", "温め：500W40秒・600W30秒／半解凍：冷蔵で約1時間／全解凍：冷蔵で約2時間"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://nosh.jp/faq/answer/105" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「デザート・パンのお召し上がり方」</a>（2026年11月25日確認）。公式は「解凍後はできるだけお早めにお召しあがりください」としています。</p>
        <SectionHeading id="trouble">溶けて届いた・期限が近いとき</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>配送時の遅延・解凍・段ボール破損などは、配送業者に確認するよう公式が案内している（伝票番号はメールで届く）</li><li>クール便（冷凍）のため置き配・宅配ボックスは使えず、対面での受け取りが必要</li><li>長く受け取れずに保管期限を過ぎて返送された商品は廃棄となり、返金・再送はできない</li><li>賞味期限は「おいしく食べられる期限」で、期限が近い商品から先に食べる</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://nosh.jp/faq/answer/93" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問「配送時にトラブルがあった場合」</a>とその関連項目（2026年11月25日確認）。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ナッシュの賞味期限は、公式の案内で冷凍保存・製造から約6ヵ月～1年程度、2026年11月25日時点の詳細ページではおかず・朝食86品が「製造日から365日」でした。届く時点で期限まで1ヶ月程度以上の余裕があります。家庭の冷凍庫では2〜3ヶ月を目安に食べきれるよう、食数と配送間隔を選ぶと安心です。</p>
        <p className="text-sm mb-6 leading-relaxed">賞味期限・保存方法は商品やリニューアルで変わることがあります。手元の商品はパッケージの表示を確認してください。</p>

        <OfficialButton>ナッシュのメニュー一覧（公式）を見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-tenkabutsu/" className="text-accent hover:text-accent-dark transition-colors">ナッシュの添加物</Link></li>
            <li><Link href="/articles/nosh-ryoukin-souryou/" className="text-accent hover:text-accent-dark transition-colors">ナッシュの料金・送料</Link></li>
            <li><Link href="/articles/reitou-bento-atatame-kata/" className="text-accent hover:text-accent-dark transition-colors">冷凍弁当の温め方</Link></li>
            <li><Link href="/articles/reitouko-chiisai-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">冷凍庫が小さい人向けの宅配弁当</Link></li>
            <li><Link href="/articles/okihai-taiou-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">置き配できる宅配弁当</Link></li>
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
