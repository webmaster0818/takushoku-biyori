import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "スギサポdeliの口コミ・評判は？公式のレビューは9件、料金・送料と全154食の栄養成分を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "スギ薬局の冷凍宅配食「スギサポdeli」の口コミ・評判を調べる前に、公式で確認できる事実をまとめました。公式サイトの商品レビューは9件（2026年11月25日時点）。1セット7食5,193円（税込）・送料917円、定期コースやおためしセットはありません。5シリーズ全154食の栄養成分を当サイトで集計しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/sugisapo-deli-kuchikomi/";
const OFFICIAL_URL = "https://sugisapodeli.sugi-net.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "スギサポdeli 口コミ, スギサポデリ 口コミ, スギサポdeli 評判, スギサポdeli 料金, スギサポdeli 送料, スギ薬局 宅配弁当, スギサポdeli たんぱく調整食, スギサポdeli やわらか食",
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
  { question: "スギサポdeliにお試しセットはありますか？", answer: "公式のよくあるご質問で「おためしセットはございません」と案内されています。単品の注文もできないため、最小は7食のセット1つ（5,193円・送料917円、税込）です。" },
  { question: "スギサポdeliは定期便ですか？解約は必要ですか？", answer: "定期コースはありません。注文ごとの購入なので、解約の手続きは不要です。ただし注文後のキャンセルはできません。" },
  { question: "送料はいくらですか？", answer: "1配送（2セットまで）あたり全国一律917円（税込）です。3セット以上は2セットごとに送料がかかります。" },
  { question: "ご飯は付いていますか？", answer: "冷凍のおかずのみのセットです（2026年11月25日確認）。" },
  { question: "スギ薬局の店頭で受け取れますか？", answer: "店頭での受け取りはできません。ヤマト運輸の営業所での受け取りは、注文時に営業所の住所と店番を書けば可能です。" },
];

const sections = [
  { id: "about", label: "スギサポdeliとは" },
  { id: "reviews", label: "公式サイトのレビュー件数と評価" },
  { id: "price", label: "料金・送料と1食あたりの金額" },
  { id: "nutrition", label: "シリーズ別の栄養成分（全154食を集計）" },
  { id: "order", label: "注文・お届け・キャンセルの条件" },
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
          <span className="text-foreground">スギサポdeliの口コミ・評判</span>
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


export default function SugisapoDeliKuchikomiPage() {
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
      { "@type": "ListItem", position: 3, name: "スギサポdeliの口コミ・評判" },
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
            <strong>スギサポdeli（スギサポデリ）</strong>は、スギ薬局が運営する冷凍のおかずセットの宅配サービスです。塩分・カロリーやたんぱく質を調整したセットを中心に、やわらか食とスープのセットがあります。
          </p>
          <p className="mb-3">
            口コミを調べたところ、2026年11月25日時点で公式サイトの商品一覧に表示されている利用者のレビューは9件でした。この記事では、その件数と評価をセットごとに示したうえで、料金・送料、全22セット・154食の栄養成分、注文の条件を公式ページで確認し、当サイトで集計しています。
          </p>
          <p>当サイトはスギサポdeliと提携しておらず、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">スギサポdeliの口コミの要点</p>
          <p className="text-sm leading-relaxed mb-4">公式サイトのレビューは9件で、5段階の評価は2.0〜5.0です。料金は7食セットが5,193円（税込）、送料は2セットまで917円で、1セットだけ頼むと送料込みで1食約873円です。定期コース・おためしセット・単品注文はなく、支払いはクレジットカード（Shop Pay含む）のみ、注文後のキャンセルはできません。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式情報から分かる特徴</p>
              <ul className="space-y-1 list-disc list-inside"><li>定期コースがなく、必要なときだけ注文できる</li><li>全セットの栄養成分が商品ページで公開されている</li><li>スギ薬局のポイントが貯まる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>おためしセット・単品注文がない</li><li>お届けは注文の6日後から・宅配ボックス不可</li><li>注文後のキャンセル・返品は受け付けない</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">スギサポdeli 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">スギサポdeliとは</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容（2026年11月25日確認）"]}
          rows={[
            ["販売業者", "株式会社スギ薬局（愛知県大府市）"],
            ["製造・発送", "株式会社武蔵野フーズ（製造元）から直送"],
            ["形態", "冷凍のおかずセット（ご飯は付かない）。電子レンジ500Wで約4〜6分"],
            ["シリーズ", "塩分カロリー調整食・同ライトプラス・たんぱく調整食・やわらか食・具だくさん食べるスープセット（ほかにHAKKOおかずセット・健康おせち・冷凍ラーメン）"],
            ["定期コース", "なし（都度注文のみ）"],
            ["おためしセット", "なし"],
            ["配送", "ヤマト運輸のクール宅急便（冷凍）。全国（離島・沖縄県は日数がかかる地域あり）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://sugisapodeli.sugi-net.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップページ</a>・<a href="https://sugisapodeli.sugi-net.jp/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>・<a href="https://sugisapodeli.sugi-net.jp/policies/shipping-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">配送ポリシー</a>・<a href="https://sugisapodeli.sugi-net.jp/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表示</a>・各商品ページ（2026年11月25日確認）。</p>
        <SectionHeading id="reviews">公式サイトのレビュー件数と評価</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式サイトの商品一覧では、セットごとにレビューの件数と5段階の評価が表示されます。2026年11月25日時点で表示されていたのは、次の9件（各セット1件ずつ）です。ライトプラス・やわらか食・N-3・N-4・N-6・P-6・SU-2は「レビューなし」でした。</p>
        <ComparisonTable
          headers={["セット", "レビュー件数", "評価（5段階）"]}
          rows={[
            ["N-1 和のおかずセット", "1件", "5.0"],
            ["N-2 おまかせ和洋中セット", "1件", "4.0"],
            ["N-5 バラエティセット", "1件", "4.0"],
            ["P-1 たんぱく調整食 おすすめセット", "1件", "2.0"],
            ["P-2 たんぱく調整食 和洋中セット", "1件", "2.0"],
            ["P-3 たんぱく調整食 いろどりセット", "1件", "5.0"],
            ["P-4 たんぱく調整食 バラエティセット", "1件", "4.0"],
            ["P-5 たんぱく調整食 肉のおかずセット", "1件", "4.0"],
            ["SU-1 具だくさんスープAセット", "1件", "5.0"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://sugisapodeli.sugi-net.jp/collections/n-series" target="_blank" rel="noopener noreferrer" className="text-accent underline">塩分カロリー調整食</a>・<a href="https://sugisapodeli.sugi-net.jp/collections/p-series" target="_blank" rel="noopener noreferrer" className="text-accent underline">たんぱく調整食</a>・<a href="https://sugisapodeli.sugi-net.jp/collections/soup-set" target="_blank" rel="noopener noreferrer" className="text-accent underline">スープセット</a>の一覧表示（2026年11月25日確認）。レビュー本文はページの読み込み後に表示される仕組みで、当サイトでは本文を確認できていないため、内容は紹介していません。</p>
        <p className="text-sm mb-6 leading-relaxed">件数が少ないため、この評価から全体の満足度を判断することはできません。たんぱく調整食の2件が2.0、ほかは4.0〜5.0です。口コミサイトや個人のレビューについては、当サイトでは引用していません。以下では、注文前に確認できる料金・量・栄養成分・注文条件を公式の情報で整理します。</p>
        <SectionHeading id="price">料金・送料と1食あたりの金額</SectionHeading>
        <ComparisonTable
          headers={["シリーズ", "7食セットの価格（税込）", "1食あたり（送料別）", "1セット注文・送料込みの1食", "2セット注文・送料込みの1食"]}
          rows={[
            ["塩分カロリー調整食", "5,193円", "742円", "873円", "807円"],
            ["塩分カロリー調整食ライトプラス", "3,853円", "550円", "681円", "616円"],
            ["たんぱく調整食", "5,193円", "742円", "873円", "807円"],
            ["やわらか食", "5,193円", "742円", "873円", "807円"],
            ["具だくさん食べるスープセット", "3,318円", "474円", "605円", "540円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※価格は公式の各商品一覧（2026年11月25日確認）。送料は1配送（2セットまで）あたり全国一律917円（税込・<a href="https://sugisapodeli.sugi-net.jp/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表示</a>では834円＋消費税）で、3セット目以降は2セットごとに追加でかかります。1食あたりの金額は当サイトの計算です。</p>
        <p className="text-sm mb-6 leading-relaxed">送料は2セットまで同じ額のため、2セットまとめると1食あたり約66円下がります。1回の注文は20セット（10個口）までです。ほかの宅配弁当との比較は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>をご覧ください。</p>
        <SectionHeading id="nutrition">シリーズ別の栄養成分（全154食を集計）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">各商品ページに1食ごとの栄養成分（日本食品標準成分表による値）が載っています。22セット・154食分を当サイトで書き出し、シリーズごとに範囲と中央値を出しました。</p>
        <ComparisonTable
          headers={["シリーズ", "食数", "エネルギー", "たんぱく質", "食塩相当量"]}
          rows={[
            ["塩分カロリー調整食", "42食", "232〜320kcal（中央値270kcal）", "10.3〜18.1g（中央値12.8g）", "1.7〜2.0g（中央値2.0g）"],
            ["塩分カロリー調整食ライトプラス", "28食", "149〜220kcal（中央値204kcal）", "11.3〜15.1g（中央値13.6g）", "1.1〜2.0g（中央値1.6g）"],
            ["たんぱく調整食", "42食", "257〜334kcal（中央値292kcal）", "8.0〜10.0g（中央値9.7g）", "1.5〜2.0g（中央値1.9g）"],
            ["やわらか食", "28食", "240〜341kcal（中央値296kcal）", "10.7〜20.0g（中央値14.1g）", "2.1〜3.5g（中央値2.7g）"],
            ["具だくさん食べるスープセット", "14食", "113〜243kcal（中央値207kcal）", "4.8〜12.2g（中央値7.8g）", "1.5〜1.9g（中央値1.8g）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式の各商品ページ（N-1〜N-6・LP-1〜LP-4・P-1〜P-6・F-1〜F-4・SU-1・SU-2、2026年11月25日確認）。LP-1の「味噌ごま炒り豆腐」は食塩相当量の記載がなく、ライトプラスの食塩は27食で集計しています。</p>
        <SubHeading>集計して分かったこと</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>塩分カロリー調整食は42食すべてが食塩相当量2.0g以下。エネルギーは「目安270kcal」に対して232〜320kcalで、300kcalを超えるのは5食</li><li>たんぱく調整食は42食すべてがたんぱく質10.0g以下（8.0〜10.0g）</li><li>やわらか食は28食すべてが食塩相当量2.0gを超える（2.1〜3.5g）。塩分を控えたい場合は、塩分カロリー調整食との違いに注意が必要</li><li>ライトプラスはエネルギーが149〜220kcalと少なめで、たんぱく質は塩分カロリー調整食と同程度</li></ul>
        <p className="text-sm mb-6 leading-relaxed">減塩やたんぱく質の調整が必要な方は、かかりつけの医師・管理栄養士に相談したうえで選んでください（公式も各商品ページで同じ注意を表示しています）。ほかの会社の減塩食・腎臓病向けの食事は<Link href="/articles/genenshoku-takuhai/" className="text-accent underline">減塩食の宅配</Link>・<Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent underline">腎臓病向けの宅配弁当</Link>で比べています。</p>
        <SectionHeading id="order">注文・お届け・キャンセルの条件</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["注文方法", "公式サイトからのオンライン注文のみ（紙のカタログなし）。スギIDでログイン、またはゲスト購入"],
            ["注文単位", "セットのみ（単品メニューの注文は不可）。1回20セット（10個口）まで"],
            ["お届け日", "注文日の6日後〜30日後から指定。前倒しは不可"],
            ["時間帯", "午前中・14〜16時・16〜18時・18〜20時・19〜21時"],
            ["受け取り", "宅配ボックスへの配達は不可。ヤマト運輸の営業所受け取りは可。店頭受け取りは不可"],
            ["支払い", "クレジットカード（VISA・Mastercard・JCB・Diners・American Express）の一括払い。決済方法の表示はShop Payも含む"],
            ["キャンセル・返品", "注文後のキャンセル、客都合の返品は不可。劣化・破損などの不備は問い合わせフォームから連絡し、代品を提供"],
            ["賞味期限", "出荷状況により1〜6か月程度"],
            ["ポイント", "スギ薬局のポイントが貯まる（お届け後1か月程度で付与）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://sugisapodeli.sugi-net.jp/pages/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>・<a href="https://sugisapodeli.sugi-net.jp/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表示</a>・<a href="https://sugisapodeli.sugi-net.jp/policies/shipping-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">配送ポリシー</a>（2026年11月25日確認）。</p>
        <p className="text-sm mb-6 leading-relaxed">定期コースがないため、解約の手続きはありません。一方で、注文した後は取り消せないので、お届け日と数量は注文前に確認しておく必要があります。</p>
        <SectionHeading id="fit">向いている人・向いていない人</SectionHeading>
        <SubHeading>向いている人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>定期便の縛りなく、必要な分だけ注文したい人</li><li>塩分・カロリーやたんぱく質の数値をメニューごとに確認したい人</li><li>スギ薬局のポイントを貯めている人</li></ul>
        <SubHeading>向いていない人</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>まず1〜2食だけ試したい人（おためし・単品がない）</li><li>急いで受け取りたい人（お届けは注文の6日後から）</li><li>宅配ボックスで受け取りたい人、カード以外で支払いたい人</li></ul>
        <p className="text-sm mb-6 leading-relaxed">お試しから始めたい場合は<Link href="/articles/otameshi-set-osusume/" className="text-accent underline">宅配弁当のお試しセットおすすめ</Link>、やわらかい食事を探している場合は<Link href="/articles/kaigoshoku-takuhai/" className="text-accent underline">介護食の宅配</Link>も参考になります。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">スギサポdeliの公式サイトに表示されているレビューは9件で、件数が少なく評価の傾向は判断できません。公式で確認できる事実としては、7食セット5,193円（税込）・送料917円（2セットまで）、定期コースとおためしセットはなく、注文後のキャンセルは不可です。全154食の栄養成分を集計すると、塩分カロリー調整食は全食が食塩相当量2.0g以下、たんぱく調整食は全食がたんぱく質10.0g以下でした。</p>
        <p className="text-sm mb-6 leading-relaxed">価格・メニュー・栄養成分は変わることがあります。ご注文前に公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>スギサポdeli 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/genenshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">減塩食の宅配</Link></li>
            <li><Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">腎臓病向けの宅配弁当</Link></li>
            <li><Link href="/articles/kaigoshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">介護食の宅配</Link></li>
            <li><Link href="/articles/reitou-soup-takuhai/" className="text-accent hover:text-accent-dark transition-colors">冷凍スープの宅配</Link></li>
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者向けの宅配弁当</Link></li>
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
