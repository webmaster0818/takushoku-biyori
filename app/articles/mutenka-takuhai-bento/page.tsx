import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "無添加の宅配弁当・冷凍宅食5社｜「何を使っていないか」を公式の表記で比較【2026年11月】";
const ARTICLE_DESCRIPTION =
  "「無添加」をうたう宅配弁当・宅食5社（シェフの無添つくりおき・FIT FOOD HOME・わんまいる・GREEN SPOON・モグモ）を、公式が何を不使用としているか、公式が使用を開示している添加物、冷蔵・冷凍の別、料金で比較しました。消費者庁の不使用表示ガイドラインの要点も紹介します（2026年11月14日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mutenka-takuhai-bento/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "無添加 宅配弁当, 無添加 宅食, 無添加 冷凍弁当, 添加物不使用 宅配, 保存料不使用 宅配弁当, 化学調味料不使用 宅配",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-14T00:00:00+09:00",
    modifiedTime: "2026-11-14T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "完全無添加の宅配弁当はありますか？", answer: "今回確認した中で、食材・調味料まで食品添加物を使わない自社基準を公式が掲げているのは、わんまいるの「美食弁当」でした。シェフの無添つくりおきも「保存料などの添加物は一切不使用」と書いています。ただし「完全無添加」という言い方は各社とも使っておらず、範囲は公式の表記でご確認ください。" },
  { question: "「化学調味料不使用」と「無添加」は同じ意味ですか？", answer: "同じではありません。消費者庁のガイドラインは、「化学調味料」は食品表示基準で使われたことのない用語だとしています。化学調味料不使用でも、調味料（アミノ酸等）や酵母エキスの扱いは別に確認が必要です。" },
  { question: "冷凍弁当に保存料は必要ないのですか？", answer: "冷凍は低温で保存するため、保存料を使わない商品が多く見られます。今回の5社のうち4社は冷凍、シェフの無添つくりおきは冷蔵（消費期限はお届けから4日）です。" },
  { question: "FIT FOOD HOMEは添加物を使っているのですか？", answer: "公式FAQで、塩化マグネシウム（にがり）と水酸化カルシウムを使用していると開示しています。豆腐を作るためのにがりのような添加物以外は使わない、という基準です。着色料（天然着色料を含む）と人工甘味料は使っていないとしています。" },
  { question: "子ども向けの無添加の宅食はありますか？", answer: "冷凍幼児食のモグモ（1歳6ヵ月〜6歳）が、合成保存料・合成着色料を使わないことを公式に掲げています。家族全員で食べるなら、シェフの無添つくりおきの食卓サポートプラン（大人2名＋幼児1名の2日分）も候補です。" },
];

const sections = [
  { id: "answer", label: "無添加をうたう宅食5社の早見表" },
  { id: "guideline", label: "「無添加」の読み方（消費者庁ガイドライン）" },
  { id: "services", label: "5社の公式表記と料金" },
  { id: "not-listed", label: "今回の表に入れなかったサービス" },
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
          <Link href="/articles/#mokuteki" className="text-foreground/70 hover:text-accent transition-colors">目的別ガイド・ランキング</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">無添加の宅配弁当・宅食5社</span>
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



export default function MutenkaTakuhaiBentoPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-14T00:00:00+09:00",
    dateModified: "2026-11-14T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "目的別ガイド・ランキング" },
      { "@type": "ListItem", position: 3, name: "無添加の宅配弁当・宅食5社" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">目的別ガイド・ランキング</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-14">公開: 2026年11月14日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「無添加」と書かれた宅配弁当でも、<strong>何を使っていないか</strong>はサービスごとに違います。保存料と着色料だけを使わない社もあれば、調味料まで含めて食品添加物を使わない自社基準を掲げる商品もあります。
          </p>
          <p className="mb-3">
            この記事では、公式サイトで「無添加」「添加物不使用」などをうたう宅食5社について、<strong>公式が不使用としているもの・公式が使用を開示しているもの</strong>を原文のまま並べました。確認日は2026年11月14日です。
          </p>
          <p>当サイトは各社の表示の当否を判断する立場にはありません。原材料は各商品の表示でご確認ください。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">無添加の宅配弁当の選び方（要点）</p>
          <p className="text-sm leading-relaxed mb-4">不使用の範囲が最も広いのは、わんまいるの「美食弁当」（食材・調味料まで食品添加物無添加を掲げる自社基準）とシェフの無添つくりおき（保存料・化学調味料などの添加物は不使用）でした。FIT FOOD HOME は「添加物不使用」を掲げつつ、にがり（塩化マグネシウム）と水酸化カルシウムの使用を公式FAQで開示しています。GREEN SPOON は保存料・甘味料・着色料などを使わない基準で、調味料（核酸）を含む商品もあります。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式が具体的に開示している点</p>
              <ul className="space-y-1 list-disc list-inside"><li>不使用の対象を具体的に書いている社が多い</li><li>FIT FOOD HOME・わんまいるは使用している添加物も開示</li><li>冷蔵（つくりおき）と冷凍（弁当・おかず）から選べる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 読むときに注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>「無添加」の範囲は社ごと・商品ごとに違う</li><li>冷蔵のつくりおきは消費期限が短い（お届けから4日）</li><li>アレルギー対応とは別の話</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">無添加をうたう宅食5社の早見表</SectionHeading>
        <ComparisonTable
          headers={["サービス", "公式が不使用としているもの（要約）", "公式が使用を開示しているもの", "保存", "料金の目安（税込）"]}
          rows={[
            ["シェフの無添つくりおき", "保存料・化学調味料などの添加物", "記載なし", "冷蔵（消費期限はお届けから4日）", "食卓サポートプラン 5,173円＋送料990円"],
            ["わんまいる（美食弁当）", "食材・調味料まで食品添加物（自社基準）", "記載なし", "冷凍", "公式で価格を確認できず"],
            ["わんまいる（健幸ディナー）", "調理工程での合成保存料・合成着色料", "ニガリ・調味料の一部にアミノ酸等を使う料理あり", "冷凍", "定期5食 6,280円＋送料1,080円"],
            ["FIT FOOD HOME", "添加物・着色料（天然着色料も含む）・人工甘味料", "塩化マグネシウム（にがり）・水酸化カルシウム", "冷凍", "1個1,188円〜＋送料990円（定期は無料）"],
            ["GREEN SPOON", "保存料・甘味料・着色料・発色剤・漂白剤（自社ガイドライン）", "調味料（核酸）・加工でん粉を含む商品あり", "冷凍", "初回 1食724〜810円＋送料1,089円"],
            ["モグモ（幼児食）", "合成保存料・合成着色料", "化学調味料の記載なし", "冷凍", "定期8食 5,110円＋送料"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式サイトの表記を当サイトが要約したもの（2026年11月14日確認）。原文と出典URLは「5社の公式表記と料金」に記載しています。わんまいるは商品により基準が異なるため2行に分けています。</p>
        <SectionHeading id="guideline">「無添加」の読み方（消費者庁ガイドライン）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">消費者庁は2022年3月30日に「食品添加物の不使用表示に関するガイドライン」を策定し、誤解を招くおそれのある不使用表示を10の類型で示しました。対象は加工食品の容器包装の表示で、不使用表示を一律に禁止するものではありません。2024年3月末までに表示の見直しを行うことが求められていました。</p>
        <p className="text-sm mb-6 leading-relaxed">宅配弁当の説明を読むときにも役立つ類型を、ガイドラインの例とあわせて紹介します。</p>
        <ComparisonTable
          headers={["類型", "ガイドラインの考え方・例（要約）", "宅配弁当を選ぶときの見方"]}
          rows={[
            ["1 単なる「無添加」", "何を添加していないのかが不明確な表示", "何が不使用なのか、具体的な記載を探す"],
            ["2 基準に無い用語", "「人工」「合成」「化学」「天然」と組み合わせた不使用表示。「化学調味料」は食品表示基準で使われたことのない用語", "「化学調味料不使用」でも、調味料（アミノ酸等）や酵母エキスの扱いは別に確認する"],
            ["4 同じ機能の添加物", "日持ち向上目的で保存料以外の添加物を使いながら「保存料不使用」", "保存料不使用でも、日持ちの理由（冷凍・加熱殺菌など）を確認する"],
            ["9 キャリーオーバー", "原材料の一部に保存料を使いながら最終製品に「保存料不使用」", "調味料など原材料側の扱いを書いているか"],
            ["10 過度な強調", "大きく「無添加」、小さく対象を表示", "見出しと注記の両方を読む"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.caa.go.jp/policies/policy/food_labeling/food_labeling_act/assets/food_labeling_cms201_220330_25.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline">消費者庁「食品添加物の不使用表示に関するガイドライン」（令和4年3月30日）</a>（2026年11月14日確認）。宅配サービスのWebページへの適用はガイドラインに書かれていないため、当サイトは各社の表記の当否を判断していません。</p>
        <SectionHeading id="services">5社の公式表記と料金</SectionHeading>
        <SubHeading>シェフの無添つくりおき（冷蔵のつくりおき）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「化学調味料を一切使わず」「保存料などの添加物は一切不使用」「保存料はもちろん、化学調味料など添加物は不使用」</li><li>保存: 冷蔵でお届け・消費期限はお届けから4日（一部メニューを除き家庭で冷凍可）</li><li>料金（2回目以降・税込）: 食卓サポートプラン（主菜2種＋副菜3種・大人2名＋幼児1名の2日分）5,173円／食卓おまかせプラン（大人2名＋子ども2名の3日分）13,607円</li><li>送料: 990円（税込）</li><li>出典: <a href="https://store.tavenal.com/tsukurioki" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 シェフの無添つくりおき</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">冷蔵で届く家族向けのつくりおきです。口コミと料金の詳細は<Link href="/articles/chef-mutenka-tsukurioki-kuchikomi/" className="text-accent underline">シェフの無添つくりおきの口コミ・評判</Link>をご覧ください。</p>
        <SubHeading>わんまいる（健幸ディナー・美食弁当）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「わんまいるでは、商品ごとに「無添加」の範囲を明確に定めております」</li><li>健幸ディナー: 「調理工程で合成保存料・合成着色料は使用しておりません」。ただし「必要最低限の成分（ニガリ・調味料の一部にアミノ酸等）を使用している料理もございます」</li><li>美食弁当: 「食材・調味料に至るまで食品添加物無添加を貫いた最も厳しい自社基準の商品」</li><li>料金（税込）: 健幸ディナー定期お届けコース（5食分・主菜5品＋副菜10品）6,280円（会員特典として6,780円から割引の表記）</li><li>送料（税込）: 1,080円（北海道・沖縄2,645円）。同じ申込ページ内に935円（北海道・沖縄2,500円）の表記もあり</li><li>出典: <a href="https://www.onemile.jp/fs/q_a" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 Q&A</a>・<a href="https://www.onemile.jp/product-buy-form/teiki-dinner" target="_blank" rel="noopener noreferrer" className="text-accent underline">健幸ディナー定期の申込ページ</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">同じ「無添加」でも、健幸ディナーと美食弁当で範囲が違う点を公式自身が説明しています。サービス全体は<Link href="/articles/wanmairu-reviews/" className="text-accent underline">わんまいるの口コミ・評判</Link>で解説しています。</p>
        <SubHeading>FIT FOOD HOME（冷凍のおかず）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「添加物不使用、中国産不使用」（お試しページの見出し）</li><li>開示している添加物: 「現在使用している「添加物」は以下のとおりです。【塩化マグネシウム（にがり）・水酸化カルシウム】」（豆腐を作るためのにがりのような添加物以外は使用しない基準）</li><li>着色料・甘味料: 「人工甘味料・着色料…弊社ではどちらも一切使用しておりません」「天然着色料(パプリカ色素、紅麴色素など)も無添加」</li><li>保存: 冷凍・賞味期限は半年〜1年程度</li><li>料金（税込）: おかず1個1,188円（角煮等1,308円）・10個まとめ割で1,129円〜。都度購入は5個から</li><li>送料（税込）: 都度990円・定期無料（北海道+550円・沖縄+1,100円）</li><li>出典: <a href="https://store.tavenal.com/question-answer" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 よくある質問</a>・<a href="https://fitfoodhome.life/otameshi" target="_blank" rel="noopener noreferrer" className="text-accent underline">お試しページ</a>・<a href="https://store.tavenal.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式ストア</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">「添加物不使用」と掲げたうえで、使っている2つを具体名で開示している点は、5社の中でいちばん具体的な書き方でした。詳しくは<Link href="/articles/fitfoodhome-kuchikomi/" className="text-accent underline">FIT FOOD HOMEの口コミ・評判</Link>へ。</p>
        <SubHeading>GREEN SPOON（冷凍のスープ・おかず等）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「必要以上の食品添加物は使用しません」「GREEN SPOONの商品には、ガイドラインに定める食品添加物を一切使用しません」</li><li>自社ガイドラインで不使用の対象: 保存料（安息香酸・ソルビン酸ほか）・甘味料（アスパルテーム等）・着色料（タール色素・二酸化チタン等）・発色剤・漂白剤</li><li>対象外: 調味料（アミノ酸等）は不使用リストに含まれず、FAQの原材料表に「調味料(核酸)」「加工でん粉」を含む商品あり</li><li>料金（税込）: 初回の1食 S BOX（8食）810円・M BOX（12食）745円・L BOX（20食）724円／2回目以降は上限 S963円・M886円・L852円</li><li>送料: 定期 全国一律990円（税込1,089円・北海道/沖縄を除く）</li><li>出典: <a href="https://green-spoon.jp/green-promise" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 GREEN SPOONの約束</a>・<a href="https://green-spoon.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式トップ</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">「無添加」という語は現在のサービスサイトのトップには無く、運営会社サイトに「無添加の スープ、サラダ、スムージー」とあります。口コミは<Link href="/articles/green-spoon-kuchikomi/" className="text-accent underline">GREEN SPOONの口コミ・評判</Link>をご覧ください。</p>
        <SubHeading>モグモ（冷凍幼児食・1歳6ヵ月〜6歳）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「不要な添加物は使いません」。具体的な未使用添加物として合成保存料（安息香酸・ソルビン酸ほか）と合成着色料（食用赤色2号ほか）を挙げる</li><li>一部商品に「無添加」の表記（例: 2026年9月30日のお知らせ「無添加の新メニュー2品が仲間入り」）。化学調味料についての記載はなし</li><li>料金（税込・送料別）: 定期 8食5,110円・12食7,260円・18食9,810円・24食12,410円</li><li>送料: 地域別（公式FAQ）。がんばる家族応援コースは送料無料（6回のお約束あり）</li><li>出典: <a href="https://mogumo.jp/shop/pages/promise" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 私たちのお約束</a>・<a href="https://mogumo.jp/shop/pages/ingredients-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">原材料ポリシー</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">子ども向けの冷凍幼児食です。料金・解約の締切は<Link href="/articles/mogumo-kuchikomi/" className="text-accent underline">モグモの口コミ・評判</Link>で詳しく扱っています。</p>
        <SectionHeading id="not-listed">今回の表に入れなかったサービス</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">nosh・ツクリオ・三ツ星ファーム・ワタミの宅食は、2026年11月14日に確認した公式ページ（トップ・FAQ）に「無添加」や「保存料不使用」の記載が見当たらなかったため、表に入れていません（三ツ星ファームはページの多くがJavaScriptで描画されるため、本文まで確認できていません）。ママの休食は個別商品に「化学調味料・香料・着色料・増粘剤・保存料などの食品添加物は使用せずに」とありますが、主力のお弁当全体の表記を確認できなかったため外しました。</p>
        <SectionHeading id="choose">選ぶときの確認ポイント</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>何が不使用か: 保存料・着色料だけか、調味料（アミノ酸等）まで含むか</li><li>使用している添加物の開示: FIT FOOD HOME・わんまいるのように具体名を開示しているか</li><li>冷蔵か冷凍か: 冷蔵のつくりおきは消費期限が短く、受け取り後の予定に合わせる必要がある</li><li>原材料表示: 最終的には商品パッケージの原材料表示で確認する</li><li>アレルギー: 無添加とアレルギー対応は別。アレルゲンは各社の表示・FAQで確認する</li></ul>
        <p className="text-sm mb-6 leading-relaxed">料金・送料をまとめて比べたい場合は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>、栄養面の見方は<Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent underline">冷凍弁当の栄養バランス</Link>もご覧ください。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">無添加の宅配弁当を選ぶときは、「無添加」という言葉ではなく、公式が何を不使用としていて、何を使っているかを確認するのが確実です。範囲が広いのはわんまいるの美食弁当とシェフの無添つくりおき、使用している添加物まで開示しているのはFIT FOOD HOMEとわんまいる、保存料・着色料などを使わない基準で冷凍のメニューが多いのはGREEN SPOONでした。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・送料・表記は変わることがあります。ご利用前に、各社の公式サイトと商品の原材料表示で最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/chef-mutenka-tsukurioki-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">シェフの無添つくりおきの口コミ・評判</Link></li>
            <li><Link href="/articles/fitfoodhome-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">FIT FOOD HOMEの口コミ・評判</Link></li>
            <li><Link href="/articles/wanmairu-reviews/" className="text-accent hover:text-accent-dark transition-colors">わんまいるの口コミ・評判</Link></li>
            <li><Link href="/articles/green-spoon-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">GREEN SPOONの口コミ・評判</Link></li>
            <li><Link href="/articles/kaigoshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">介護食の宅配7社を比較</Link></li>
            <li><Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent hover:text-accent-dark transition-colors">冷凍弁当の栄養バランス</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
