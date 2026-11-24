import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ライフデリの口コミ・評判は？公式掲載のお客様の声と、43都道府県の普通食の価格・治療食の料金を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "高齢者向け配食サービス「ライフデリ」の口コミを、公式サイトの「お客様の声」（店舗に届いた手紙）から原文で紹介します。都道府県別ページ43件を集計し、普通食（おかずのみ）は1食税込486〜780円・宅配料無料、治療食の全店共通料金もまとめました（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/lifedeli-kuchikomi/";
const OFFICIAL_URL = "https://www.lifedeli.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ライフデリ 口コミ, ライフデリ 評判, ライフデリ 料金, ライフデリ 値段, ライフデリ 宅配弁当, ライフデリ 試食, 高齢者 配食サービス, ライフデリ 腎臓食",
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
  { question: "ライフデリの料金はいくらですか？", answer: "普通食（おかずのみ）は店舗ごとに価格が違い、43都道府県の公式ページでは1食税込486〜780円でした。宅配料は無料です。カロリー調整食・透析食・腎臓食などは全店共通で、昼食・夕食のおかずのみが680〜870円（税込）です（2026年11月25日確認）。" },
  { question: "1食だけでも届けてもらえますか？", answer: "はい。店舗があるエリアなら1食から配達し、昼食のみ・夕食のみ、週1回・月1回の利用もできます。" },
  { question: "試食はできますか？", answer: "店舗ページの「お申込み・ご試食」から、希望の日付と昼食・夕食を指定して申し込めます。公式サイトのページタイトルでは「初回試食無料」と案内しています。" },
  { question: "土日も配達してくれますか？", answer: "年中無休で、休みはお正月三が日だけです（一部店舗でサービスが異なる場合があります）。" },
  { question: "不在のときはどうなりますか？", answer: "配達員の手渡しが基本で、希望により玄関先に置くなどの対応もできます。不在時の対応は、事前に店舗と取り決めます。" },
];

const sections = [
  { id: "about", label: "ライフデリとは" },
  { id: "reviews", label: "口コミの掲載状況（公式のお客様の声）" },
  { id: "price", label: "普通食の価格（43都道府県を集計）" },
  { id: "menu", label: "治療食・介護食の料金（全店共通）" },
  { id: "order", label: "注文・配達・試食の条件" },
  { id: "fit", label: "向いている人・向いていない人" },
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
          <span className="text-foreground">ライフデリの口コミ・評判</span>
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


export default function LifedeliKuchikomiPage() {
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
      { "@type": "ListItem", position: 3, name: "ライフデリの口コミ・評判" },
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
            <strong>ライフデリ</strong>は、高齢者や糖尿病・腎臓病・透析治療中・嚥下困難の方に向けて、お弁当を毎日届ける配食サービスです。全国の店舗（フランチャイズ）が、担当地域に昼食・夕食を配達員の手渡しで届けます。
          </p>
          <p className="mb-3">
            口コミを調べたところ、公式サイトには各店舗に届いたお客様の手紙を紹介する「お客様の声」が掲載されていました。この記事では、その一部を原文で紹介したうえで、公式の都道府県別ページ43件から普通食の価格と店舗数を当サイトで集計し、全店共通の治療食の料金と注文の条件を公式で確認しています。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ライフデリの口コミの要点</p>
          <p className="text-sm leading-relaxed mb-4">公式の「お客様の声」は、店舗に届いた手紙を紹介する形式で、毎日届くことや味、季節の行事食への感謝が中心です（運営側が選んで掲載したもの）。普通食（おかずのみ）は店舗ごとに価格が違い、43都道府県のページでは1食税込486〜780円、宅配料は無料です。カロリー調整食・透析食・腎臓食などは全店共通の価格で、昼食・夕食のおかずのみが680〜870円（税込）です。1食から注文でき、試食も申し込めます。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式情報から分かる良い点</p>
              <ul className="space-y-1 list-disc list-inside"><li>宅配料無料・1食から注文できる</li><li>配達員の手渡しで、異変時は家族やケアマネジャーに連絡</li><li>アレルギー・おかゆ対応は無料、きざみ食にも対応</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>普通食の価格は店舗ごとに違う</li><li>店舗のない地域には届かない（都道府県ページは43件）</li><li>冷蔵の当日配達なので、作り置きはできない</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ライフデリ 公式サイトで配達店舗を探す →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ライフデリとは</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容（2026年11月25日確認）"]}
          rows={[
            ["形態", "店舗が調理済みのお弁当を毎日配達（昼食・夕食。朝食は前日の配達時に届く）"],
            ["対象", "高齢者、糖尿病・腎臓病・透析治療中・嚥下困難の方など"],
            ["メニュー", "普通食・カロリー調整食・透析食・腎臓食・やわらか食・ムース食（「700種以上の豊富なおかず」の日替わり）"],
            ["配達時間の目安", "昼食10:00〜12:30・夕食15:00〜18:00（店舗により異なる）"],
            ["休業日", "お正月三が日のみ（年中無休）"],
            ["容器", "回収容器。次回の配達時に返す"],
            ["見守り", "配達員が異変を感じた場合、家族やケアマネジャーに連絡"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://www.lifedeli.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップページ</a>（よくある質問を含む）・<a href="https://www.lifedeli.jp/tokyo.minato.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">東京港店のページ</a>（2026年11月25日確認）。サービス内容は店舗により異なる場合があります。</p>
        <SectionHeading id="reviews">口コミの掲載状況（公式のお客様の声）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式サイトの「お客様の声」は、各店舗が受け取ったお客様やご家族の手紙を紹介する記事です。一覧は1ページ10件で、2026年11月25日時点で100ページまで続いていました。直近の掲載から、お弁当についての感想を原文で一部紹介します。</p>
        <ComparisonTable
          headers={["掲載日", "店舗", "手紙の本文（原文の一部）"]}
          rows={[
            ["2026.10.14", "ライフデリ長浜店", "「毎日お昼にお弁当を届くのを楽しみにしています。」"],
            ["2026.10.09", "ライフデリ小郡店", "「おそば久々でおいしかったです。とても助かりました、又よろしくお願いします。」"],
            ["2026.09.23", "ライフデリ扶桑・江南店", "「本日はちらしずし、おまんじゅう、とっても美味しかったです。ごちそうさまでした。」"],
            ["2026.09.10", "ライフデリ高松店", "「貴社のお弁当は、ほんとうにおいしい！その中で特に、お酢の物が良くて、」"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://lifedeli.jp/blog/category/customer/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お客様の声</a>（2026年11月25日確認）。本文は原文のまま、一部だけを引用しています。運営側が選んで掲載したもので、不満の声は掲載されていません。</p>
        <p className="text-sm mb-6 leading-relaxed">手紙では、毎日届くことや味への感謝、ちらしずし・お赤飯など行事のメニューへの感想が目立ちます。ほかに、離れて暮らす家族が配達時の安否確認の連絡に感謝した手紙や、ショートステイの間の配達停止の連絡もありました。口コミサイトや個人のレビューは、当サイトでは引用していません。</p>
        <SectionHeading id="price">普通食の価格（43都道府県を集計）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">普通食の価格は店舗ごとに決まっています。公式の都道府県別ページ43件には、店舗数・配達している市区町村の数・普通食（おかずのみ）の価格帯が載っているため、当サイトで書き出して集計しました。</p>
        <ComparisonTable
          headers={["都道府県（店舗数の多い順）", "店舗数", "配達している市区町村", "普通食（おかずのみ）1食・税込"]}
          rows={[
            ["大阪府", "32店舗", "55", "540〜670円"],
            ["東京都", "29店舗", "48", "550〜700円"],
            ["埼玉県", "27店舗", "50", "544〜610円"],
            ["愛知県", "23店舗", "44", "550〜640円"],
            ["神奈川県", "22店舗", "51", "550〜780円"],
            ["福岡県", "18店舗", "27", "550〜670円"],
            ["千葉県", "16店舗", "32", "550〜640円"],
            ["兵庫県", "13店舗", "21", "550〜630円"],
            ["広島県", "12店舗", "13", "550〜640円"],
            ["京都府", "10店舗", "18", "560〜630円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式の<a href="https://www.lifedeli.jp/area/tokyo/" target="_blank" rel="noopener noreferrer" className="text-accent underline">都道府県別ページ</a>（43件・2026年11月25日確認）。表は店舗数の多い10都府県です。店舗数は各ページの記載で、県をまたいで配達する店舗は複数の県で数えられている可能性があります。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>43都道府県すべてで宅配料は無料</li><li>普通食（おかずのみ）の最安は鳥取県の486円、最高は神奈川県の780円（税込）</li><li>6県は県内の価格が1つ（店舗が少ない県が中心）</li><li>秋田県・島根県・長崎県・沖縄県は都道府県別ページがなかった（島根県安来市は2026年11月18日に出店決定のお知らせあり）</li></ul>
        <p className="text-sm mb-6 leading-relaxed">公式トップは「1食513円〜」と案内していますが、同じページの中に「（税抜）」と「（税込）」の表記が混在していました。都道府県別ページでは鳥取県の店舗に税込486円の記載があります。実際の価格は、配達を担当する店舗のページで確認してください。東京港店の例では、普通食がおかずのみ598円・ごはんセット673円（税込）、日替わりの汁物は+90円（税込）でした。</p>
        <SectionHeading id="menu">治療食・介護食の料金（全店共通）</SectionHeading>
        <ComparisonTable
          headers={["メニュー", "おかずのみ（税込）", "ごはん・おかゆセット（税込）"]}
          rows={[
            ["カロリー調整食（昼食・夕食）", "780円", "860円"],
            ["カロリー調整食（朝食）", "565円", "680円"],
            ["透析食（昼食・夕食）", "870円", "950円"],
            ["透析食（朝食）", "665円", "780円"],
            ["腎臓食（昼食・夕食）", "860円", "940円"],
            ["腎臓食（朝食）", "655円", "770円"],
            ["やわらか食（昼食・夕食）", "750円", "830円（おかゆセット）"],
            ["ムース食（昼食・夕食）", "680円", "760円（おかゆセット）"],
            ["ムース食（朝食）", "400円", "520円（おかゆセット）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://www.lifedeli.jp/tokyo.minato.html" target="_blank" rel="noopener noreferrer" className="text-accent underline">東京港店のページ</a>の「そのほかのメニューの料金（全店共通・1食あたり）」（2026年11月25日確認）。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>普通食: ご飯170gとセットで概ね500〜600kcal、塩分は概ね1〜3g</li><li>カロリー調整食: 間食を含めて1日1,600kcal・塩分6g未満の設定（食事自体は1,400kcal）</li><li>持病のある方は、事前に医師への相談を公式も勧めている</li></ul>
        <p className="text-sm mb-6 leading-relaxed">冷凍で届く腎臓病・減塩向けの宅配と比べたい場合は、<Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent underline">腎臓病向けの宅配弁当</Link>・<Link href="/articles/genenshoku-takuhai/" className="text-accent underline">減塩食の宅配</Link>をご覧ください。</p>
        <SectionHeading id="order">注文・配達・試食の条件</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["注文方法", "店舗検索で配達店舗を探し、店舗ページの「お申込み・ご試食」から、または店舗へ電話・FAX"],
            ["最小注文", "1食から（昼食のみ・夕食のみも可）。月1回・週1回からでも配達"],
            ["開始", "個人は在庫に欠品がなければ注文の翌日から"],
            ["試食", "希望の日付と昼食・夕食を指定して申し込む（公式サイトのページタイトルに「初回試食無料」）"],
            ["受け取り", "配達員の手渡しが基本。希望により玄関先に置くなどの対応も可"],
            ["食べる時間", "配達後なるべく早く。遅くとも昼食は14時まで、夕食は20時まで"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://www.lifedeli.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップページ</a>の「ご注文方法」「よくある質問」（2026年11月25日確認）。介護保険や自治体の配食サービスとの関係は、公式のガイドページで案内されています。</p>
        <SectionHeading id="fit">向いている人・向いていない人</SectionHeading>
        <SubHeading>向いている人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>高齢の家族に毎日の食事と見守りを頼みたい人</li><li>透析食・腎臓食・ムース食などを毎日届けてほしい人</li><li>冷凍庫に余裕がなく、届いた日に食べたい人</li></ul>
        <SubHeading>向いていない人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>店舗の配達エリアの外に住んでいる人</li><li>まとめて届けて冷凍で保存したい人</li><li>受け取りの時間帯に家にいられない人（店舗との取り決めが必要）</li></ul>
        <p className="text-sm mb-6 leading-relaxed">同じく毎日手渡しの冷蔵弁当には<Link href="/articles/watami-reviews/" className="text-accent underline">ワタミの宅食</Link>があります。高齢者向けの宅配全体の比較は<Link href="/articles/koureisha-osusume/" className="text-accent underline">高齢者向けの宅配弁当</Link>で扱っています。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ライフデリの公式「お客様の声」は、店舗に届いた手紙の紹介で、毎日の配達や味、行事のメニューへの感謝が中心でした。普通食は店舗ごとの価格で、43都道府県のページでは1食税込486〜780円・宅配料無料、治療食・介護食は全店共通の価格です。1食から注文でき、試食も申し込めます。</p>
        <p className="text-sm mb-6 leading-relaxed">価格・配達エリアは店舗によって異なります。ご注文前に、公式サイトの店舗検索で担当店舗のページをご確認ください。</p>

        <OfficialButton>ライフデリ 公式サイトで配達店舗を探す</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者向けの宅配弁当</Link></li>
            <li><Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食の口コミ・評判</Link></li>
            <li><Link href="/articles/kaigoshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">介護食の宅配</Link></li>
            <li><Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">腎臓病向けの宅配弁当</Link></li>
            <li><Link href="/articles/genenshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">減塩食の宅配</Link></li>
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
