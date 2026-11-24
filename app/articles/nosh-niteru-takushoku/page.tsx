import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ナッシュに似てる宅食はどこ？nosh の「糖質30g・塩分2.5g以下」を6社のメニューに当てはめて集計【2026年11月】";
const ARTICLE_DESCRIPTION =
  "nosh（ナッシュ）に似た宅食を探す方向けに、nosh の公式基準「全メニュー糖質30g以下・塩分2.5g以下」を、三ツ星ファーム・ライフミール・マッスルデリなど6社の公式メニュー一覧の栄養成分に当てはめ、基準を満たすメニューの割合を当サイトで集計しました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-niteru-takushoku/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ナッシュ 似てる, nosh 似てる, ナッシュ みたいな宅食, ナッシュ 似たサービス, ナッシュ 代わり, ナッシュ 他社, nosh 比較",
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
  { question: "ナッシュに一番似ている宅食はどこですか？", answer: "nosh の基準（糖質30g以下・塩分2.5g以下）で数えると、ライフミールの糖質30g基準・15g基準のお弁当が100%、三ツ星ファームが83%（糖質掲載品のうち）で、基準の面では最も近い結果でした（当サイト集計・2026年11月）。" },
  { question: "nosh の基準とは何ですか？", answer: "nosh は公式サイトで、全てのメニューを糖質30g以下・塩分2.5g以下で生産していると説明しています。2026年11月18日に当サイトが確認したおかずは全品が基準内でした。" },
  { question: "マッスルデリは nosh に似ていますか？", answer: "冷凍の宅配弁当という点は同じですが、マッスルデリはたんぱく質を軸にした設計です。LOW CARB は全品が糖質30g以下ですが、塩分2.5g以下は7品／16品でした。" },
  { question: "糖質が書かれていない会社はどう比べればいいですか？", answer: "炭水化物は糖質に食物繊維を加えた値なので、炭水化物が30g以下なら糖質も30g以下です。この記事では炭水化物30g以下で数えた参考値を示しています。" },
  { question: "集計はいつのデータですか？", answer: "各社の公式メニュー一覧を2026年11月14日〜18日に当サイトが取得したデータです。メニューは入れ替わるため、注文前に公式サイトで確認してください。" },
];

const sections = [
  { id: "rule", label: "nosh の基準：全メニュー糖質30g・塩分2.5g以下" },
  { id: "sugar", label: "糖質を掲載している5社の集計" },
  { id: "carb", label: "炭水化物で掲載している2社の集計（参考）" },
  { id: "closest", label: "基準で見て nosh に近いのは：ライフミール・三ツ星ファーム" },
  { id: "diff", label: "似ていない点：設計の軸が違うサービス" },
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
          <Link href="/articles/#hikaku" className="text-foreground/70 hover:text-accent transition-colors">比較・料金データ</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ナッシュに似てる宅食</span>
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



export default function NoshNiteruTakushokuPage() {
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
      { "@type": "ListItem", position: 2, name: "比較・料金データ" },
      { "@type": "ListItem", position: 3, name: "ナッシュに似てる宅食" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">比較・料金データ</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-19">公開: 2026年11月19日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            nosh（ナッシュ）に似た宅食を探すとき、多くの人が気にするのは「冷凍でレンジ調理」「メニューを選べる」に加えて、<strong>糖質と塩分が抑えられているか</strong>です。nosh は公式サイトで、全てのメニューを「糖質30g以下」「塩分2.5g以下」で生産していると説明しています。
          </p>
          <p className="mb-3">
            そこでこの記事では、nosh の基準を物差しにして、当サイトが各社の公式メニュー一覧から書き出した全メニューの栄養成分（2026年11月14日〜18日取得）に当てはめ、<strong>基準を満たすメニューが何割あるか</strong>を、nosh と他社6社で集計しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ナッシュに似てる宅食の要点</p>
          <p className="text-sm leading-relaxed mb-4">nosh の基準（糖質30g以下・塩分2.5g以下）を満たすメニューの割合は、ライフミールの糖質30g基準・15g基準のお弁当で100%、三ツ星ファームのお弁当類で83%（糖質を掲載している品のうち）でした。マッスルデリは低脂質・高たんぱくを軸にしており、LOW FATで基準を満たすのは1品でした。ワタミの宅食ダイレクトとDELIPICKSは糖質を掲載していないため、炭水化物30g以下で数えた参考値を示しています。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 集計で分かったこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>ライフミールの糖質基準のお弁当は100%が nosh の基準を満たす</li><li>三ツ星ファームは糖質掲載品の83%が基準内</li><li>ワタミの宅食ダイレクト三菜は炭水化物で数えても98%が基準内</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>マッスルデリは塩分2.5g超のメニューが多い</li><li>糖質を掲載していない会社は炭水化物での参考値</li><li>メニューは毎週〜毎月入れ替わる</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="rule">nosh の基準：全メニュー糖質30g・塩分2.5g以下</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">nosh の公式ページ「糖質30g・塩分2.5g以下へのこだわり」には「全てのメニューが糖質30g以下で生産されています」「全てのメニューが塩分2.5g以下で生産されています」とあります（2026年11月19日確認）。当サイトが11月18日に公式メニュー一覧から書き出したおかず79品でも、全品が両方の基準を満たしていました。</p>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://nosh.jp/nutritional-value" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh 糖質30g・塩分2.5g以下へのこだわり</a>（2026年11月19日確認）・<a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh メニュー一覧</a>（2026年11月18日取得）</p>
        <p className="text-sm mb-6 leading-relaxed">同じ物差しで他社のメニューを数えれば、「どこまで nosh に近い食事になるか」を数字で比べられます。メニューの詳しい内容は<Link href="/articles/nosh-osusume-menu/" className="text-accent underline">nosh のおすすめメニュー</Link>で整理しています。</p>
        <SectionHeading id="sugar">糖質を掲載している5社の集計</SectionHeading>
        <ComparisonTable
          headers={["サービス（対象）", "集計した品数", "糖質30g以下", "塩分2.5g以下", "両方を満たす", "取得日"]}
          rows={[
            ["nosh（おかず）", "79品", "79品（100%）", "79品（100%）", "79品（100%）", "11月18日"],
            ["三ツ星ファーム（お弁当・丼の具・スープ等）", "99品", "83品（84%）", "86品（87%）", "82品（83%）", "11月17日"],
            ["　うち「三ツ星基準」の分類", "78品", "78品（100%）", "77品（99%）", "77品（99%）", "11月17日"],
            ["ライフミール（糖質30g基準・15g基準）", "81品", "81品（100%）", "81品（100%）", "81品（100%）", "11月17日"],
            ["　ライフミール（ご飯付きセット）", "40品", "0品（0%）", "40品（100%）", "0品（0%）", "11月17日"],
            ["マッスルデリ（LOW CARB）", "16品", "16品（100%）", "7品（44%）", "7品（44%）", "11月16日"],
            ["マッスルデリ（LOW FAT）", "59品", "4品（7%）", "20品（34%）", "1品（2%）", "11月16日"],
            ["わんまいる（健幸ディナー・美食弁当の5週分）", "50品", "44品（88%）", "40品（80%）", "36品（72%）", "11月17日"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://nosh.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh メニュー一覧</a>・<a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>・<a href="https://l-meal.com/products/list" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフミール 商品一覧</a>・<a href="https://muscledeli.jp/shop/product_categories/md-lowcarb" target="_blank" rel="noopener noreferrer" className="text-accent underline">マッスルデリ LOW CARB</a>・<a href="https://muscledeli.jp/shop/product_categories/md-lowfat" target="_blank" rel="noopener noreferrer" className="text-accent underline">LOW FAT</a>・<a href="https://www.onemile.jp/fs/kenko-dinner-menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">わんまいる 献立ページ</a>の各メニューの栄養成分（取得日は表のとおり・2026年）を当サイトが集計。三ツ星ファームは注文できる品のうちドリンク・スイーツ・パン・ミールキットを除いた129品のうち、糖質の掲載がある99品で数えています（30品は糖質の掲載なし）。nosh はデザート・パン・朝食・販売休止を除いたおかずです。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>ライフミールは「糖質30g基準」「糖質15g基準」という規格名のとおり、該当81品のうち81品が両方を満たしていました。ご飯付きセットは糖質30g以下が0品で、主食込みの別の使い方です</li><li>三ツ星ファームは独自の「三ツ星基準」（350kcal以下・糖質25g以下・たんぱく質15g以上）を持ち、その分類の78品では77品が nosh の基準も満たしていました。分類外にはパスタ・丼の具など糖質の多い品もあります</li><li>マッスルデリは LOW CARB の16品すべてが糖質30g以下ですが、塩分2.5g以下は7品でした。LOW FAT は主食を含むメニューが多く、糖質30g以下は4品です</li></ul>
        <SectionHeading id="carb">炭水化物で掲載している2社の集計（参考）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">次の2社は公式の一覧に糖質ではなく炭水化物を掲載しています。炭水化物は糖質に食物繊維を加えた値で、糖質より必ず大きくなります。そのため「炭水化物30g以下」で数えた品数は、糖質30g以下の品数より少なく出る（厳しめの）参考値です。</p>
        <ComparisonTable
          headers={["サービス（対象）", "集計した品数", "炭水化物30g以下", "塩分2.5g以下", "両方を満たす", "取得日"]}
          rows={[
            ["ワタミの宅食ダイレクト（いつでも三菜）", "95品", "94品（99%）", "94品（99%）", "93品（98%）", "11月18日"],
            ["ワタミの宅食ダイレクト（いつでも五菜）", "91品", "80品（88%）", "72品（79%）", "66品（73%）", "11月18日"],
            ["DELIPICKS（掲載メニュー）", "180品", "135品（75%）", "89品（49%）", "70品（39%）", "11月14日"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku-direct.jp/shop/sets/2?menu_view=true" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクト いつでも三菜</a>・<a href="https://www.watami-takushoku-direct.jp/shop/sets/3?menu_view=true" target="_blank" rel="noopener noreferrer" className="text-accent underline">いつでも五菜</a>のメニュー画面・<a href="https://deli-picks.com/collection/" target="_blank" rel="noopener noreferrer" className="text-accent underline">DELIPICKS 公式メニュー一覧</a>の栄養成分（取得日は表のとおり・2026年）を当サイトが集計。</p>
        <p className="text-sm mb-6 leading-relaxed">ワタミの宅食ダイレクトのいつでも三菜は、炭水化物で数えても93品が基準内でした。いつでも三菜はおかずのみのセットで、主食は付きません。DELIPICKS はパスタ・ご飯ものやグラタンなど主食を含むメニューがあり、両方を満たすのは70品でした。</p>
        <SectionHeading id="closest">基準で見て nosh に近いのは：ライフミール・三ツ星ファーム</SectionHeading>
        <ComparisonTable
          headers={["サービス", "nosh と似ている点（集計から）", "違う点"]}
          rows={[
            ["ライフミール", "糖質30g・15g基準の81品が全品 nosh の基準内", "規格（糖質30g・15g・ご飯付き）を選んで注文する"],
            ["三ツ星ファーム", "糖質掲載品の83%が基準内。独自の「三ツ星基準」はさらに厳しい糖質25g以下", "パスタ・丼の具など基準外の品も同じ一覧に並ぶ"],
            ["ワタミの宅食ダイレクト", "三菜は炭水化物で数えても98%が基準内", "糖質の掲載がない。五菜は塩分2.5g超の品が増える"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※当サイトの集計にもとづく比較です。料金・送料・定期の条件は各社で異なるため、下の関連記事や各社の公式サイトで確認してください。</p>
        <p className="text-sm mb-6 leading-relaxed">料金と送料込みの1食あたりは<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>、nosh と三ツ星ファーム・ウェルネスダイニングの比較は<Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent underline">3社比較</Link>で整理しています。メニューごとの値は<Link href="/articles/lifemeal-menu/" className="text-accent underline">ライフミールのメニュー</Link>・<Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent underline">三ツ星ファームのおすすめメニュー</Link>・<Link href="/articles/watami-direct-menu/" className="text-accent underline">ワタミの宅食ダイレクトのメニュー</Link>にあります。</p>
        <SectionHeading id="diff">似ていない点：設計の軸が違うサービス</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>マッスルデリは糖質・塩分ではなく、たんぱく質量と脂質を軸に設計されています。LOW FAT で nosh の基準を両方満たすのは1品でした（<Link href="/articles/muscle-deli-nosh-hikaku/" className="text-accent underline">マッスルデリと nosh の比較</Link>）</li><li>わんまいるはメニューが週替わりで決まり、自分で選ぶことはできません（公式FAQ）。基準を満たすのは36食／50食でした</li><li>nosh の基準は「上限」です。たとえば塩分は2.5g以下でも、上限に近い値のメニューが多くあります。塩分を控えたい方は、どのサービスでも個々のメニューの値を見て選ぶ必要があります</li></ul>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">nosh に似た宅食を「糖質30g以下・塩分2.5g以下」という nosh 自身の基準で比べると、ライフミールの糖質基準のお弁当（100%）と三ツ星ファーム（83%）が最も近い結果でした。ワタミの宅食ダイレクトのいつでも三菜も、炭水化物で数えて98%が基準内です。マッスルデリやわんまいるは設計の軸が異なり、基準を満たすメニューは一部です。味や料金も含めて選ぶ場合は、各社の口コミ・料金の記事もあわせて確認してください。</p>
        <p className="text-sm mb-6 leading-relaxed">メニュー・栄養成分は変わることがあります。ご利用前に、各社の公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">nosh・三ツ星ファーム・ウェルネスダイニング 3社比較</Link></li>
            <li><Link href="/articles/muscle-deli-nosh-hikaku/" className="text-accent hover:text-accent-dark transition-colors">マッスルデリと nosh の比較</Link></li>
            <li><Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">糖質制限におすすめの宅配弁当</Link></li>
            <li><Link href="/articles/meals-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ミールズ（Meals）の口コミ・評判</Link></li>
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
