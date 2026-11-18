import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "三ツ星ファームのタピオカは？黒糖・抹茶の2種類と作り方・栄養成分・1袋あたりの料金を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "三ツ星ファームの定期便メニューにあるタピオカドリンクの素（黒糖・抹茶の2袋セット）を、公式のメニューデータで確認しました。2026年11月18日時点で注文できるのは黒糖のみで、抹茶は品切れ等で注文できない状態です。作り方・原材料・栄養成分と、コース別の1袋あたりの料金の目安を整理しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mitsuboshi-tapioca/";
const OFFICIAL_URL = "https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "三ツ星ファーム タピオカ, 三ツ星ファーム ドリンク, 三ツ星ファーム タピオカ 作り方, 三ツ星ファーム 黒糖タピオカ, 三ツ星ファーム 抹茶タピオカ, 三ツ星ファーム スイーツ",
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
  { question: "三ツ星ファームにタピオカはありますか？", answer: "あります。定期便のメニューに「タピオカ（黒糖）2袋セット」と「タピオカ（抹茶）2袋セット」があり、2026年11月18日時点で注文できるのは黒糖のみでした（抹茶は品切れ等で注文できない状態）。" },
  { question: "タピオカの作り方は？", answer: "凍ったドリンクの素を袋のまま沸騰させたお湯で3分加熱し、カップに入れてお好みのドリンク200mlを注ぎ、よくかき混ぜます。公式は牛乳や豆乳をすすめています。" },
  { question: "電子レンジで温められますか？", answer: "公式の作り方は袋のままの湯せん（沸騰したお湯で3分）のみで、電子レンジでの温め方は案内されていません。" },
  { question: "タピオカのカロリーは？", answer: "公式の掲載値は黒糖209kcal・抹茶179kcalで、「1包装分の表示」と注記されています。割る牛乳などの分は含みません。" },
  { question: "タピオカに追加料金はかかりますか？", answer: "2026年11月18日時点では追加料金の設定はなく、7・14・21食のコースで選ぶメニューの1品として並んでいます。1セット＝1食分として選ぶと、1袋あたりの目安は約355〜463円です（送料別・当サイト計算）。" },
  { question: "日持ちはどのくらいですか？", answer: "公式の表記は「製造日より2年」で、要冷凍（-18℃以下）です。公式は、家庭の冷凍庫は温度変動が大きいため期限内でも早めに食べるよう案内しています。" },
];

const sections = [
  { id: "lineup", label: "タピオカは黒糖・抹茶の2種類（11月18日時点）" },
  { id: "howto", label: "作り方：袋ごと湯せん3分→ドリンク200mlで割る" },
  { id: "nutrition", label: "原材料と栄養成分" },
  { id: "price", label: "料金：コース別の1セット・1袋あたりの目安（当サイト計算）" },
  { id: "drinks", label: "タピオカ以外のドリンク3品" },
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
          <span className="text-foreground">三ツ星ファームのタピオカ</span>
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


export default function MitsuboshiTapiocaPage() {
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
      { "@type": "ListItem", position: 3, name: "三ツ星ファームのタピオカ" },
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
          <p className="mt-3 text-xs text-warm-gray">※PR・本記事はアフィリエイト広告を含みます。商品の内容・栄養成分・料金は公式サイトの掲載にもとづいています。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            三ツ星ファームは冷凍のおかずを定期便で届ける宅配食ですが、定期便のメニュー一覧にはおかずのほかにスイーツやドリンクも並んでいます。その中に、凍った「ドリンクの素」を湯せんして牛乳などで割る<strong>タピオカドリンク（黒糖・抹茶）</strong>があります。
          </p>
          <p className="mb-3">
            この記事では、2026年11月18日に公式のメニュー一覧が読み込むメニューデータ（商品説明・原材料・内容量・栄養成分・注文できるかどうか）と料金プランのページを確認し、タピオカの中身と作り方、コースごとの料金の目安を整理しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">三ツ星ファームのタピオカの要点</p>
          <p className="text-sm leading-relaxed mb-4">三ツ星ファームのタピオカは「タピオカ（黒糖）2袋セット」と「タピオカ（抹茶）2袋セット」の2種類で、どちらも1袋95g・カップ/フタ/ストロー付きです。2026年11月18日時点で注文できるのは黒糖のみで、抹茶は品切れ等で注文できない状態でした。凍ったドリンクの素を袋のまま沸騰したお湯で3分温め、カップに入れて牛乳や豆乳など200mlを注いで作ります。定期便のメニューに追加料金なしで並んでおり、1セットを1食分として選ぶと、1袋あたりの目安は約355〜463円です（当サイト計算）。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式で確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>定期便のメニューに追加料金なしで並んでいる</li><li>カップ・フタ・ストローが付いている</li><li>賞味期間は製造日より2年（公式の表記）</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>抹茶は2026年11月18日時点で注文できない</li><li>黒糖は1包装あたり糖質51.6g（公式の掲載値）</li><li>牛乳などの割り材は別に用意が必要</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">三ツ星ファーム 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="lineup">タピオカは黒糖・抹茶の2種類（11月18日時点）</SectionHeading>
        <ComparisonTable
          headers={["項目", "タピオカ（黒糖）2袋セット", "タピオカ（抹茶）2袋セット"]}
          rows={[
            ["2026年11月18日の状態", "注文できる", "品切れ等で注文できない"],
            ["内容量", "2袋（95g×2袋）・カップ2個／フタ2個／ストロー2個付き", "2袋（95g×2袋）・カップ2個／フタ2個／ストロー2個付き"],
            ["名称", "タピオカ加工食品", "タピオカ加工食品"],
            ["保存方法", "要冷凍（-18℃以下）", "要冷凍（-18℃以下）"],
            ["期限（公式の表記）", "製造日より2年", "製造日より2年"],
            ["追加料金", "なし", "なし"],
            ["公式の人気順の順位データ", "101番目", "133番目"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>が読み込む定期便メニューのデータと人気順の順位データ（2026年11月18日取得）。人気順の順位データには現在注文できないメニューも含まれます。公式は人気順の算出方法を公開していません。</p>
        <p className="text-sm mb-6 leading-relaxed">どちらも、商品説明では「湯煎で温めて頂いた本品を牛乳で割るだけで」作るタピオカドリンクの素と案内されています。おかずと同じ定期便のメニュー一覧に並んでおり、追加料金の設定はありません（追加料金のあるメニューは、一覧上で金額が別に表示されます）。</p>
        <p className="text-sm mb-6 leading-relaxed">抹茶は品切れ等で注文できない状態のため、時期によって選べる種類が変わります。注文の前に、公式のメニュー一覧で「ドリンク」に絞り込んで確認してください。</p>
        <SectionHeading id="howto">作り方：袋ごと湯せん3分→ドリンク200mlで割る</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式の商品説明にある作り方は、黒糖・抹茶とも同じです。</p>
        <ComparisonTable
          headers={["手順", "公式の説明"]}
          rows={[
            ["① ドリンクの素を解凍する", "凍ったドリンクの素を袋のまま沸騰させたお湯に入れ、3分加熱する（大変熱くなるため火傷に注意）"],
            ["② カップに入れて割る", "①をカップに入れ、お好みのドリンク200mlを注ぐ。牛乳や豆乳がおすすめ。お好みの量の氷も一緒にカップへ"],
            ["③ 混ぜる", "よくかき混ぜて完成"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>の商品説明「ドリンクの作り方」（2026年11月18日取得）</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>おかずと違い、温めは電子レンジではなく<strong>袋ごとの湯せん</strong>です</li><li>公式の注意事項には「冷凍のままご使用ください」「解凍後はお早めに」「一度解凍したものは再冷凍はお控えください」とあります</li><li>「本品を勢い良く吸い込むとのどに詰まる可能性があります。とくに小さいお子様やお年寄りがお召し上がる際には十分にご注意ください」との注意書きもあります</li></ul>
        <SectionHeading id="nutrition">原材料と栄養成分</SectionHeading>
        <ComparisonTable
          headers={["項目", "黒糖", "抹茶"]}
          rows={[
            ["原材料（公式の表記）", "タピオカでん粉、砂糖、麦芽糖／カラメル色素、香料、増粘剤（キサンタンガム）", "タピオカでん粉、ショ糖型液糖、抹茶／カラメル色素、増粘剤（キサンタンガム）、香料"],
            ["エネルギー", "209kcal", "179kcal"],
            ["たんぱく質", "0.2g", "0.5g"],
            ["脂質", "0g", "0g"],
            ["炭水化物", "52.1g", "44.3g"],
            ["糖質", "51.6g", "43.1g"],
            ["食物繊維", "0.5g", "1.1g"],
            ["食塩相当量", "0.03g", "0.01g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>の商品説明と栄養成分（2026年11月18日取得）。公式は「成分表示（カロリー表示）は1包装分の表示になります」「原材料の仕入れ状況により栄養成分表示の数値は変動いたします」と注記しています。割り材（牛乳・豆乳など）の分は含みません。</p>
        <p className="text-sm mb-6 leading-relaxed">黒糖の原材料表示には「黒糖」の文字はなく、砂糖・麦芽糖とカラメル色素で構成されています（公式の表記のまま）。黒糖そのものを使っているかどうかを重視する場合は、届いた商品のパッケージの表示も確認してください。</p>
        <p className="text-sm mb-6 leading-relaxed">三ツ星ファームのおかずには「三ツ星基準」（350kcal以下・糖質25g以下・たんぱく質15g以上）という分類がありますが、タピオカは糖質が43.1〜51.6g、たんぱく質が1g未満で、この基準の対象となる食事のメニューとは性格が異なります。おかずの栄養成分は<Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent underline">三ツ星ファームのおすすめメニュー</Link>で集計しています。</p>
        <SectionHeading id="price">料金：コース別の1セット・1袋あたりの目安（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">タピオカは単品で値段が付いているのではなく、7・14・21食のコースで選ぶメニューの1品として並んでいます。1セット（2袋）を1食分として選んだ場合の目安は次のとおりです。</p>
        <ComparisonTable
          headers={["コース（通常の定期便）", "1回の料金（税込）", "1食＝1セットあたり", "1袋あたり", "送料（税込）"]}
          rows={[
            ["7食コース", "6,485円", "約926円", "約463円", "初回から990円"],
            ["14食コース", "11,458円", "約818円", "約409円", "初回無料・2回目以降990円"],
            ["21食コース", "14,918円", "約710円", "約355円", "初回無料・2回目以降990円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/plans" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム 料金プラン「定期購入契約の注意点」</a>（2026年11月18日確認）。送料は990円（北海道・沖縄2,500円）。1セット・1袋あたりはコースの料金を食数で割った当サイトの計算で、送料は含みません。</p>
        <p className="text-sm mb-6 leading-relaxed">受け取り回数を約束する<a href="https://mitsuboshifarm.jp/page/longtermplan/04/" target="_blank" rel="noopener noreferrer" className="text-accent underline">長期継続応援プラン</a>では、14食9,946円・21食12,650円（税込・送料別）で、1セットあたり約710円・約602円になります（当サイト計算）。ただし途中で解約すると手数料がかかります。料金・送料・解約の条件は<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファームの口コミ・評判</Link>で詳しく整理しています。</p>
        <p className="text-sm mb-6 leading-relaxed">タピオカを入れると、その分おかずの食数が減ります。食事の置き換えを目的に使っている場合は、何食分をおかずに残すかを決めてから選ぶと、冷凍庫の中身と食事の回数がずれにくくなります。</p>
        <SectionHeading id="drinks">タピオカ以外のドリンク3品</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">2026年11月18日時点の定期便メニューには、タピオカ2品を含めてドリンクが5品あります。フルーツ系の3品は、凍ったドリンクの素を揉みほぐしてカップに入れ、炭酸水・無糖の紅茶・牛乳などで割るタイプです（湯せんは不要）。</p>
        <ComparisonTable
          headers={["メニュー名", "2026年11月18日の状態", "エネルギー", "糖質", "炭水化物", "人気順の順位データ"]}
          rows={[
            ["タピオカ（黒糖）2袋セット", "注文できる", "209kcal", "51.6g", "52.1g", "101番目"],
            ["タピオカ（抹茶）2袋セット", "品切れ等で注文できない", "179kcal", "43.1g", "44.3g", "133番目"],
            ["台湾レモン&ナタデココ 2袋セット", "注文できる", "175kcal", "記載なし", "42.4g", "117番目"],
            ["ストロベリー＆ナタデココ 2袋セット", "注文できる", "122kcal", "29g", "29.4g", "122番目"],
            ["パイナップル&パッション&ナタデココ 2袋セット", "品切れ等で注文できない", "138kcal", "32.8g", "33.2g", "138番目"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/menus" target="_blank" rel="noopener noreferrer" className="text-accent underline">三ツ星ファーム メニュー一覧</a>（2026年11月18日取得）。台湾レモン&ナタデココは糖質・食物繊維の掲載がなく、割るドリンクの量は180mlと案内されています（ほかは200ml）。</p>
        <OfficialButton>三ツ星ファーム 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">三ツ星ファームのタピオカは黒糖・抹茶の2種類で、2026年11月18日時点で注文できるのは黒糖のみでした。袋ごと湯せん3分→牛乳などで割るだけで作れ、カップとストローも付いています。おかずと同じコースの1品として選ぶため、1袋あたりの目安は約355〜463円（送料別）です。糖質は1包装あたり43.1〜51.6gあるため、食事の置き換えではなく、おやつとして食数の一部に入れる使い方が向いています。</p>
        <p className="text-sm mb-6 leading-relaxed">メニュー・在庫・料金は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>三ツ星ファーム 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのおすすめメニュー</Link></li>
            <li><Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームの口コミ・評判</Link></li>
            <li><Link href="/articles/mitsuboshi-coupon/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのクーポン・キャンペーン</Link></li>
            <li><Link href="/articles/green-spoon-smoothie/" className="text-accent hover:text-accent-dark transition-colors">グリーンスプーンのスムージー</Link></li>
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
