import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "惣菜の宅配は冷蔵と冷凍でどう違う？日持ち・届き方・1食の料金を8サービスの公式表記で比較【2026年11月】";
const ARTICLE_DESCRIPTION =
  "おかず・惣菜の宅配を「当日中に食べる冷蔵」「週1回届く作り置き」「冷凍」の3タイプに分け、8サービスの日持ち（公式の表記）、届き方、送料込みの1食の料金を比較しました。1週間の夕食をまかなう場合の受け取り回数も整理しています（2026年11月28日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/souzai-takuhai/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "惣菜 宅配, おかず 宅配, 惣菜 宅配 冷蔵, おかず 宅配 冷凍, お惣菜 宅配サービス, 惣菜 宅配 日持ち",
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
  { question: "惣菜の宅配で、いちばん日持ちするのはどれですか？", answer: "冷凍型です。noshは冷凍で製造から約6か月〜1年程度（短いものでも賞味期限まで1か月程度）と公式FAQに記載しています。冷蔵の作り置き型はお届け日を含め4日間、当日型はその日のうち（商品により翌日午後3時まで）です（2026年11月28日確認）。" },
  { question: "冷蔵の惣菜は冷凍できますか？", answer: "ツクリオは容器のまま冷凍・加熱が可能で、5日目に食べる分は冷凍保存を案内しています。シェフの無添つくりおきは一部のメニューを除き冷凍保存できると公式トップに記載しています。当日型のお弁当は、当日中または翌日午後3時までに食べるよう案内されています。" },
  { question: "1人暮らしで使うならどのタイプですか？", answer: "毎日決まった時間に受け取れるなら当日型（1食から頼めるサービスあり）、食べる日が決まっていないなら冷凍型が使いやすい組み合わせです。作り置き型は2人前からのプランで、4日間で食べ切る前提です。" },
  { question: "送料はかかりますか？", answer: "宅配クック123は配達料なし、ライフデリは宅配料無料、ワタミの宅食は1食の価格に宅配料を含みます。ツクリオはプラン料金に配送料金を含みます。シェフの無添つくりおきは990円、noshは地域と食数で異なり関東の4〜12食は1,166円、ワタミの宅食ダイレクトは990円、食宅便は定期便940円・都度便1,330円です。" },
  { question: "冷蔵と冷凍で味の違いはありますか？", answer: "味の感じ方は人によって異なるため、当サイトでは比較していません。各サービスの第三者の口コミは、それぞれの口コミ記事で出典付きで紹介しています。" },
];

const sections = [
  { id: "answer", label: "3タイプの違い（早見表）" },
  { id: "table", label: "8サービスの日持ち・届き方・1食の料金" },
  { id: "week", label: "1週間の夕食をまかなう場合の受け取り回数" },
  { id: "reizou", label: "冷蔵の惣菜宅配（日替わり・作り置き）" },
  { id: "reitou", label: "冷凍のおかず宅配" },
  { id: "choose", label: "選ぶときの確認ポイント" },
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
          <span className="text-foreground">惣菜の宅配（冷蔵と冷凍の違い）</span>
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



export default function SouzaiTakuhaiPage() {
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
      { "@type": "ListItem", position: 2, name: "比較・料金データ" },
      { "@type": "ListItem", position: 3, name: "惣菜の宅配（冷蔵と冷凍の違い）" },
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
            <time dateTime="2026-11-28">公開: 2026年11月28日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            おかず・惣菜の宅配は、<strong>冷蔵で届いてその日のうちに食べるもの</strong>、<strong>冷蔵で週1回まとめて届く作り置き</strong>、<strong>冷凍で届いてストックできるもの</strong>の3タイプに分かれます。違いがいちばん大きいのは日持ちで、公式の表記では「当日の夜まで」から「製造から約6か月〜1年」まで幅があります。
          </p>
          <p>
            このページでは8サービスの公式サイト（2026年11月28日確認）から、保存できる期間、届き方、送料込みの1食の料金をそろえて比較しました。1週間の夕食をまかなう場合に何回受け取ることになるかも、当サイトで整理しています。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">惣菜の宅配（要点）</p>
          <p className="text-sm leading-relaxed mb-4">当日型（ワタミの宅食・宅配クック123・ライフデリ）は毎日手渡しで届き、当日中（商品により翌日午後3時まで）に食べます。作り置き型（ツクリオ・シェフの無添つくりおき）は週1回まとめて届き、冷蔵で4日間。冷凍型（nosh・ワタミの宅食ダイレクト・食宅便）は賞味期限がパッケージに記載され、noshは製造から約6か月〜1年です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式で確認できた点</p>
              <ul className="space-y-1 list-disc list-inside"><li>当日型は1食から・送料なしで頼めるサービスがある</li><li>作り置き型は家族の人数分が週1回まとめて届く</li><li>冷凍型は食べる日を自分で選べる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>当日型は受け取りの時間に在宅が必要な場合がある（宅配ボックスの貸し出しあり）</li><li>作り置き型は4日間で食べ切る計画が必要</li><li>冷凍型は冷凍庫の空きが要る</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">3タイプの違い（早見表）</SectionHeading>
        <ComparisonTable
          headers={["タイプ", "主なサービス", "日持ち（公式の表記）", "届く頻度", "向いている使い方"]}
          rows={[
            ["当日型（冷蔵・日替わり）", "ワタミの宅食・宅配クック123・ライフデリ", "当日中（夕食は20時頃・22時まで）、商品により翌日午後3時まで", "毎日（平日5日など）", "毎日の1食を決まった時間に任せたい"],
            ["作り置き型（冷蔵・週1回）", "ツクリオ・シェフの無添つくりおき", "お届け日を含め冷蔵4日間", "週1回", "家族の夕食を数日分まとめて減らしたい"],
            ["冷凍型", "nosh・ワタミの宅食ダイレクト・食宅便", "パッケージに記載（noshは製造から約6か月〜1年）", "1〜4週ごと・都度", "食べる日を決めずにストックしたい"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※各社公式サイトで2026年11月28日に確認。出典は下の表と各節に記載しています。</p>
        <SectionHeading id="table">8サービスの日持ち・届き方・1食の料金</SectionHeading>
        <ComparisonTable
          headers={["サービス", "温度帯・届き方", "日持ち（公式の表記）", "代表的な料金（税込）", "1食・1人前あたり（送料込み）"]}
          rows={[
            ["ワタミの宅食", "冷蔵・まごころスタッフが手渡し（平日5日間など）", "「まごころ御膳」「まごころ小箱」は当日午後10時まで、「まごころおかず」「まごころ手鞠」などは翌日午後3時まで", "5日間コース 2,350〜3,950円", "470〜790円（宅配料込）"],
            ["宅配クック123", "地域の店舗が手渡し（毎日または指定日）", "昼食14時頃・夕食20時頃までに食べる", "普通食 ごはん付き685円・おかずのみ577円", "685円／577円（配達料なし）"],
            ["ライフデリ", "地域の店舗が配達", "昼食14時まで・夕食20時までに食べる", "普通食 486〜780円（都道府県による）", "486〜780円（宅配料無料）"],
            ["ツクリオ", "冷蔵・週1回（23区は通常品、全国はパワーシール）", "お届け日を含め冷蔵4日間（一部5日間の商品あり）", "2人前×週3食 7,990円・4人前×週3食 10,690円", "1,332円（2人前）・891円（4人前）"],
            ["シェフの無添つくりおき", "冷蔵・週1回", "冷蔵保存で4日間以内", "食卓サポートプラン 5,173円＋送料990円", "1,027円（3人前×2食分）"],
            ["nosh", "冷凍（クール宅急便）", "製造から約6か月〜1年（短いものでも賞味期限まで1か月程度）", "12食 7,344円（1食612円）", "709円（関東の送料1,166円）"],
            ["ワタミの宅食ダイレクト", "冷凍宅配便", "商品ごとに記載", "いつでも三菜 定期おまかせ10食 4,645円", "564円（送料990円）"],
            ["食宅便", "冷凍宅配便", "パッケージのラベルに記載", "おまかせコース7食 4,830円", "824円（定期便940円）・880円（都度便1,330円）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.watami-takushoku.co.jp/contents/bento-flow" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食 ご注文〜回収まで</a>・<a href="https://www.watami-takushoku.co.jp/category/bento2" target="_blank" rel="noopener noreferrer" className="text-accent underline">お弁当・お惣菜</a>／<a href="https://takuhaicook123.jp/about/order" target="_blank" rel="noopener noreferrer" className="text-accent underline">宅配クック123 ご注文方法</a>／<a href="https://www.lifedeli.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ライフデリ よくある質問</a>（料金は都道府県別ページ43件を2026年11月25日に当サイト集計）／<a href="https://www.tsukurioki.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ツクリオ 公式</a>・<a href="https://www.tsukurioki.jp/help/%E6%96%99%E7%90%86%E3%81%AF%E3%81%A9%E3%82%8C%E3%81%8F%E3%82%89%E3%81%84%E3%81%AE%E6%9C%9F%E9%96%93%E4%BF%9D%E5%AD%98%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B" target="_blank" rel="noopener noreferrer" className="text-accent underline">ヘルプ「料理はどれくらいの期間保存できますか？」</a>／<a href="https://store.tavenal.com/tsukurioki/" target="_blank" rel="noopener noreferrer" className="text-accent underline">シェフの無添つくりおき 公式</a>／<a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh 公式</a>・<a href="https://nosh.jp/faq/answer/111" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問（賞味期限）</a>／<a href="https://www.watami-takushoku-direct.jp/shop/pages/prices" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクト 料金一覧</a>・<a href="https://www.watami-takushoku-direct.jp/shop/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>／<a href="http://shokutakubin.com/shop/pages/faq.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">食宅便 よくあるご質問</a>（いずれも2026年11月28日確認）。1食・1人前あたりは（料金＋送料）÷食数（人前）で当サイトが計算。ツクリオの4人前は「大人2名子供2名」、シェフの無添つくりおきの3人前は「大人2名、小さなお子様1名」の想定（公式）です。</p>
        <p className="text-sm mb-6 leading-relaxed">同じ「惣菜の宅配」でも、作り置き型の1人前は900〜1,300円台と、冷凍型（約560〜880円）より高めです。作り置き型は人数分の主菜・副菜がまとめて届き、取り分けて食べる前提のため、1食ずつ容器に入った冷凍弁当とは料金の単位が異なる点にご注意ください。</p>
        <SectionHeading id="week">1週間の夕食をまかなう場合の受け取り回数</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">1人分の夕食を7日間まかなうと仮定し、公式のお届けの仕組みから受け取り回数を整理しました（当サイトの整理）。</p>
        <ComparisonTable
          headers={["タイプ", "受け取り回数（1週間）", "前提（公式の仕組み）", "注意点"]}
          rows={[
            ["当日型（ワタミの宅食）", "5回（平日のみ）", "日替わり5日間コースは土日祝休み。7日間コースもあり（商品・価格は問い合わせ）", "土日の2食は別に用意する"],
            ["当日型（宅配クック123・ライフデリ）", "最大7回", "お届け日は毎日または指定の日（店舗の配達日による）", "毎回、受け取りまたは置き場所の相談が必要"],
            ["作り置き型（ツクリオ・シェフ）", "1回", "週1回、数日分がまとめて届く", "冷蔵4日間。ツクリオは5日目分の冷凍を公式が案内"],
            ["冷凍型（nosh・食宅便ほか）", "1回（2〜4週に1回も可）", "6〜20食などのセットが冷凍で届く", "冷凍庫に7食分の空きが要る"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※当サイトの整理。ツクリオのヘルプには「5食プラン（5日分のお夕食想定）でも、消費期限は4日間」「5日目にお召し上がりになるものについては、冷凍保存いただけたら幸い」とあります。</p>
        <SectionHeading id="reizou">冷蔵の惣菜宅配（日替わり・作り置き）</SectionHeading>
        <SubHeading>日替わりで当日届く（ワタミの宅食・宅配クック123・ライフデリ）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>ワタミの宅食: まごころスタッフが決まった時間帯に手渡しを基本にお届け。留守がちな方には無料で鍵付き安全ボックスを貸し出し。毎週水曜が翌週分の注文確定日</li><li>宅配クック123: 1食から配達。注文・キャンセルは前日17時まで。配達料はかからない（お弁当代のみ）</li><li>ライフデリ: 1食から配達。締切は前日18時で、在庫に欠品がなければ翌日から開始</li></ul>
        <p className="text-sm mb-6 leading-relaxed">3社の注文から届くまでの日数は<Link href="/articles/gohan-tsukuritakunai-takuhai/" className="text-accent underline">ご飯を作りたくない日の宅配弁当</Link>で曜日ごとに計算しています。高齢の家族向けの使い方は<Link href="/articles/koureisha-osusume/" className="text-accent underline">高齢者向けの宅配弁当</Link>もご覧ください。</p>
        <SubHeading>週1回まとめて届く作り置き（ツクリオ・シェフの無添つくりおき）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>ツクリオ: 4人前・2人前×週3食／週5食のプラン。料金は送料込み。注文・キャンセルは配達日前週の水曜日中まで。容器はそのまま冷凍・加熱が可能</li><li>シェフの無添つくりおき: 食卓サポートプラン（2回目以降5,173円）・食卓おまかせプラン（同13,607円）に送料990円。保存料を使わないため、冷蔵保存で4日間以内に食べるよう案内</li></ul>
        <p className="text-sm mb-6 leading-relaxed">2社のプラン・1人前あたりの比較は<Link href="/articles/tsukurioki-takuhai/" className="text-accent underline">作り置き惣菜の宅配2社の比較</Link>にまとめています。</p>
        <SectionHeading id="reitou">冷凍のおかず宅配</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>nosh: 冷凍（クール宅急便）でお届け。賞味期限は冷凍で製造から約6か月〜1年程度、短いものでも賞味期限まで1か月程度余裕のあるものを届けると公式FAQに記載（詳しくは<Link href="/articles/nosh-shoumi-kigen/" className="text-accent underline">noshの賞味期限</Link>）</li><li>ワタミの宅食ダイレクト: 賞味期限は商品ごとに記載。いつでも三菜の定期おまかせ10食は4,645円（1食465円）＋送料990円（<Link href="/articles/watami-direct-menu/" className="text-accent underline">メニュー一覧</Link>）</li><li>食宅便: 賞味期限は商品パッケージのラベルに記載。おまかせコース7食4,830円（<Link href="/articles/shokutakubin-reviews/" className="text-accent underline">食宅便の口コミ・評判</Link>）</li></ul>
        <p className="text-sm mb-6 leading-relaxed">おかずのみか、ご飯付きかの違いは<Link href="/articles/gohan-tsuki-reitou-bento/" className="text-accent underline">ご飯付きの冷凍弁当</Link>で整理しています。温め方は<Link href="/articles/reitou-bento-atatame-kata/" className="text-accent underline">冷凍弁当の温め方</Link>をご覧ください。</p>
        <SectionHeading id="choose">選ぶときの確認ポイント</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>日持ち: 当日中に食べられるか、4日間で食べ切れるか、冷凍でストックしたいか</li><li>受け取り: 毎日の手渡しに対応できるか（宅配ボックス・置き場所の相談）</li><li>人数: 1人分ずつ容器に入っている方がよいか、家族分を取り分ける方がよいか</li><li>料金の単位: 1食（1容器）あたりか、1人前あたりか</li><li>締切: 前日夕方（店舗配達）・前週水曜（ワタミの宅食・ツクリオ）・数日前（冷凍）</li></ul>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">惣菜の宅配は、当日中に食べる冷蔵の日替わり、週1回届く冷蔵の作り置き、ストックできる冷凍の3タイプで、日持ちと受け取り回数が大きく違います。毎日受け取れるなら当日型、家族の夕食を数日分まとめて減らすなら作り置き型、食べる日を決めずに備えるなら冷凍型が目安です。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・送料・保存期間は変わることがあります。ご利用前に、各社の公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/tsukurioki-takuhai/" className="text-accent hover:text-accent-dark transition-colors">作り置き惣菜の宅配2社を比較</Link></li>
            <li><Link href="/articles/gohan-tsukuritakunai-takuhai/" className="text-accent hover:text-accent-dark transition-colors">ご飯を作りたくない日に頼める宅配弁当</Link></li>
            <li><Link href="/articles/mealkit-vs-reitou-bento/" className="text-accent hover:text-accent-dark transition-colors">ミールキットと冷凍弁当の比較</Link></li>
            <li><Link href="/articles/gohan-tsuki-reitou-bento/" className="text-accent hover:text-accent-dark transition-colors">ご飯付きの冷凍弁当</Link></li>
            <li><Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食の口コミ・評判</Link></li>
            <li><Link href="/articles/takuhai-cook123-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">宅配クック123の口コミ・評判</Link></li>
            <li><Link href="/articles/tsukurioki-jp-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ツクリオの口コミ・評判</Link></li>
            <li><Link href="/articles/chef-mutenka-tsukurioki-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">シェフの無添つくりおきの口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-shoumi-kigen/" className="text-accent hover:text-accent-dark transition-colors">noshの賞味期限</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書</Link></li>
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
