import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "糖尿病の方向けの宅配弁当｜7コースの1食のエネルギー・糖質・塩分の基準と料金、特別用途食品の許可状況【2026年11月】";
const ARTICLE_DESCRIPTION =
  "糖尿病の方向けと案内しているコースを中心に、宅配弁当7コースの1食のエネルギー・糖質・塩分の基準と料金を公式表記で比較。特別用途食品「糖尿病用組合せ食品」の許可件数（令和8年9月16日現在0件）と食宅便 低糖質セレクト35品の集計も掲載（2026年11月28日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/tounyoubyou-takuhai-bento/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "糖尿病 宅配弁当, 糖尿病食 宅配, 糖尿病 冷凍弁当, 糖尿病 弁当 宅配 カロリー, 糖尿病用組合せ食品, 血糖値 宅配弁当",
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
  { question: "糖尿病の方向けの宅配弁当は、特別用途食品ですか？", answer: "今回取り上げたコースは、いずれも特別用途食品ではありません。消費者庁の特別用途食品「糖尿病用組合せ食品」の表示許可件数は、令和8年9月16日現在で0件です。宅配クック123は「特別用途食品ではございません」、noshは「あくまで一般食」と公式に明記しています。" },
  { question: "1食の糖質はどのくらいですか？", answer: "公式の基準は、ウェルネスダイニング・Dr.つるかめキッチン・メディミール（糖質制限食）が糖質15g以下、食宅便の低糖質セレクトが10g以下、メディミールのカロリー制限食は炭水化物20g以下です（2026年11月28日確認）。" },
  { question: "毎日届く冷蔵のお弁当はありますか？", answer: "ワタミの宅食「ワタミdeおいしい健康」は平日月〜金の5日間、冷蔵で手渡しされます（1食690円・宅配料込）。宅配クック123の「カロリー・塩分調整食」は地域の店舗が配達し、1食から頼めます（ごはん付き885円）。" },
  { question: "ご飯は付いていますか？", answer: "冷凍のおかずセット（ウェルネスダイニング・Dr.つるかめキッチン・メディミール・食宅便）はおかずのみで、食宅便はご飯（150g×7食）を別売りしています。宅配クック123はごはん付きとおかずのみを選べます。" },
  { question: "どのコースを選べばよいですか？", answer: "必要なエネルギー量や糖質の量は人によって異なるため、当サイトではコースの優劣を判断していません。主治医・管理栄養士の指示と、各コースの公式の基準を照らし合わせて選んでください。" },
];

const sections = [
  { id: "answer", label: "7コースの栄養基準と料金（早見表）" },
  { id: "seido", label: "特別用途食品「糖尿病用組合せ食品」の許可状況" },
  { id: "data", label: "食宅便 低糖質セレクト35品の栄養成分（当サイト集計）" },
  { id: "services", label: "各コースの公式表記" },
  { id: "choose", label: "利用前に確認したいこと" },
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
          <span className="text-foreground">糖尿病の方向けの宅配弁当</span>
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



export default function TounyoubyouTakuhaiBentoPage() {
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
      { "@type": "ListItem", position: 2, name: "目的別ガイド・ランキング" },
      { "@type": "ListItem", position: 3, name: "糖尿病の方向けの宅配弁当" },
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
            <time dateTime="2026-11-28">公開: 2026年11月28日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイト・消費者庁のページで、アフィリエイト広告ではありません。本記事は医療上の助言ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            宅配弁当には、公式サイトで「糖尿病・血糖値が気になる方向け」「【糖尿病食】」などと案内しているコースがあります。ただし、<strong>消費者庁が許可する特別用途食品「糖尿病用組合せ食品」は、令和8年9月16日現在で許可件数が0件</strong>です。今回取り上げるコースはいずれも一般の食品で、治療効果を示すものではありません。
          </p>
          <p className="mb-3">
            このページでは、各社の公式表記（2026年11月28日確認）から、1食のエネルギー・糖質（または炭水化物）・塩分の基準と料金をそろえて並べました。食宅便の低糖質セレクトは、コースページに掲載された35品の栄養成分を当サイトで集計しています。
          </p>
          <p>1日に必要なエネルギー量や糖質の量は人によって異なります。食事療法を受けている方は、利用前に主治医・管理栄養士にご相談ください。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">糖尿病の方向けの宅配弁当（要点）</p>
          <p className="text-sm leading-relaxed mb-4">1食の基準は、エネルギー240〜300kcal前後、糖質15g以下（食宅便は10g以下）、塩分2.0〜2.5g以下が中心です。料金はおかず7食で5,184〜5,767円、日替わりの冷蔵弁当（ワタミdeおいしい健康）は1食690円（宅配料込）。特別用途食品「糖尿病用組合せ食品」の許可品は令和8年9月16日現在ありません。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式で確認できた点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1食のエネルギー・糖質・塩分の基準を公式に示している</li><li>メニューごとの栄養成分を公開している社がある</li><li>冷凍で届くコースは食べたい日に温めるだけ</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>いずれも一般の食品で、特別用途食品の許可は受けていない</li><li>ご飯を足す場合、その分の糖質・エネルギーは別に数える</li><li>糖質の表記（糖質か炭水化物か）が社によって違う</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">7コースの栄養基準と料金（早見表）</SectionHeading>
        <ComparisonTable
          headers={["サービス・コース", "公式の対象表記", "エネルギー（1食）", "糖質・炭水化物（1食）", "塩分（1食）", "料金（税込）"]}
          rows={[
            ["ウェルネスダイニング 糖質＆カロリー制限気配り宅配食", "糖尿病・血糖値が気になる方向け", "240kcal（±10％）", "糖質15g以下", "2.0g以下", "7食5,767円・14食11,232円・21食16,178円"],
            ["Dr.つるかめキッチン 糖質制限気づかい御膳", "【糖尿病食】・糖尿病専門医が監修", "240kcal（±10％）", "糖質15g以下", "2.0g以下", "定期7食5,184円（送料無料）"],
            ["メディミール カロリー制限食", "サイト名に「制限食・糖尿病食」。1日1,600kcalを基準に開発", "250kcal以下", "炭水化物20g以下", "2.5g以下", "7食5,270円・14食9,698円・21食14,018円"],
            ["メディミール 糖質制限食", "糖質を抑えたい方・ダイエットを行いたい方", "300kcal以下", "糖質15g以下", "2.5g以下", "7食5,270円（カロリー制限食と同じ）"],
            ["食宅便 低糖質セレクト", "糖質を控えたい方", "271〜296kcal（35品の実測）", "糖質10g以下", "基準なし（1.5〜2.5g）", "7食5,180円＋送料"],
            ["ワタミの宅食 ワタミdeおいしい健康", "糖尿病などの食事管理に対応・糖尿病診療ガイドラインにも配慮", "300kcal基準（±50kcal）", "（炭水化物のバランスを考慮）", "2.0g以下", "平日5日間・1食690円（宅配料込）"],
            ["宅配クック123 カロリー・塩分調整食", "エネルギーや塩分の調整が必要な方", "おかずのみ約240kcal（ごはん付き514〜538kcal）", "記載なし", "2g未満", "ごはん付き885円・おかずのみ777円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※各社公式のコースページで2026年11月28日に確認（出典は「各コースの公式表記」に記載）。食宅便のエネルギー・塩分はコースの基準ではなく、掲載35品の最小〜最大（当サイト集計）です。料金・基準は変わることがあります。</p>
        <p className="text-sm mb-6 leading-relaxed">冷凍のおかずセット（ウェルネスダイニング・つるかめ・メディミール・食宅便）は、エネルギー240〜300kcal・糖質15g以下（食宅便は10g以下）の範囲に収まります。違いが大きいのは<strong>塩分の基準</strong>（2.0g以下・2.5g以下・基準なし）と、<strong>糖質と炭水化物のどちらで示しているか</strong>です。糖質の量でコースを比べる場合は<Link href="/articles/toushitsu-seigen-osusume/" className="text-accent underline">糖質制限の宅配弁当（9社の糖質量）</Link>もあわせてご覧ください。</p>
        <SectionHeading id="seido">特別用途食品「糖尿病用組合せ食品」の許可状況</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">消費者庁の特別用途食品には、病者用食品の区分の1つとして「糖尿病用組合せ食品」があります。消費者庁の説明資料では「糖尿病の食事療法を実践及び継続するのに適した食品」で、主食・主菜・副菜の組合せを基本に、1食分の栄養成分等の量が調整されたものとされています。</p>
        <ComparisonTable
          headers={["項目", "許可基準（1食当たり）"]}
          rows={[
            ["炭水化物", "50〜60％エネルギー"],
            ["たんぱく質", "20％エネルギー以下"],
            ["食塩相当量", "2.0g未満"],
            ["主食を含まない献立", "想定する主食と合わせたときに上記の基準を満たすもの"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.caa.go.jp/policies/policy/food_labeling/foods_for_special_dietary_uses/assets/food_labeling_cms206_20231023_02.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline">消費者庁「糖尿病用組合せ食品ってなに？」</a>（2026年11月28日確認）。表示には「糖尿病用組合せ食品（1食分）」の文字、1食当たりの熱量・栄養成分、エネルギー産生栄養素バランス、医師・管理栄養士等の相談又は指導を得て使用することが適当である旨などが必要とされています。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>表示許可件数: <strong>糖尿病用組合せ食品は0件</strong>（同じ病者用食品の腎臓病用組合せ食品は1件、特別用途食品全体で110件）。出典: <a href="https://www.caa.go.jp/policies/policy/food_labeling/about/commemorative/assets/food_labeling_cms206_20260916_01.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline">消費者庁「特別用途食品表示許可件数内訳」</a>（令和8年9月16日現在）</li><li>宅配クック123は「カロリー・塩分調整食」などについて「特別用途食品ではございません」と明記</li><li>noshは公式FAQで、糖質30g以内で作っているとしたうえで「あくまで一般食であり、医薬品的な効果・効能を持つものではありません」と案内（<a href="https://nosh.jp/faq/answer/111" target="_blank" rel="noopener noreferrer" className="text-accent underline">nosh よくあるご質問</a>）</li></ul>
        <p className="text-sm mb-6 leading-relaxed">このため、宅配弁当の「糖尿病食」「糖尿病の方向け」という表記は、各社が自社の栄養基準にもとづいて案内しているものです。制度の詳細は<a href="https://www.caa.go.jp/policies/policy/food_labeling/foods_for_special_dietary_uses/" target="_blank" rel="noopener noreferrer" className="text-accent underline">消費者庁「特別用途食品について」</a>をご覧ください。</p>
        <SectionHeading id="data">食宅便 低糖質セレクト35品の栄養成分（当サイト集計）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">食宅便の低糖質セレクトのコースページには、メニューごとの栄養成分（原則として検査機関での分析値と公式に記載）が掲載されています。2026年11月28日に掲載されていた35品を当サイトで集計しました。</p>
        <ComparisonTable
          headers={["項目", "最小", "中央値", "最大", "平均"]}
          rows={[
            ["エネルギー", "271kcal", "275kcal", "296kcal", "276kcal"],
            ["糖質", "1g", "10g", "10g", "9.6g"],
            ["炭水化物", "19.2g", "19.2g", "21g", "19.4g"],
            ["たんぱく質", "19.2g", "19.8g", "24g", "20.4g"],
            ["食塩相当量", "1.5g", "2.2g", "2.5g", "2.17g"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="http://shokutakubin.com/shop/c/c20/" target="_blank" rel="noopener noreferrer" className="text-accent underline">食宅便「低糖質セレクト」コースページ</a>（2026年11月28日取得・掲載35品。同じ名前の重複は1品として数えています）。集計は当サイト。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>糖質は全品10g以下で、中央値は10g（上限に合わせた設計）。寄せ鍋（糖質1.0g・炭水化物19.7g）は、炭水化物に対して糖質の値が小さく、公式の表記のまま載せています</li><li>炭水化物がエネルギーに占める割合は26〜31％（当サイト計算＝炭水化物×4kcal÷エネルギー）。おかずのみの設計で、ご飯などの主食を足すと比率は大きく変わります</li><li>塩分は1.5〜2.5gで、2.0g未満は7品でした。低糖質セレクトは塩分の基準を設けていないコースです</li></ul>
        <p className="text-sm mb-6 leading-relaxed">どのくらい主食を足すか、塩分をどこまで抑えるかは、主治医・管理栄養士の指示に従ってください。</p>
        <SectionHeading id="services">各コースの公式表記</SectionHeading>
        <SubHeading>ウェルネスダイニング「糖質＆カロリー制限気配り宅配食」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「血糖値が気になる・糖質の制限をしたい糖尿病の方向けの宅配弁当です」。糖質制限15g以下・カロリー制限240kcal（±10％）・塩分制限2.0g以下</li><li>料金（税込）: 7食5,767円・14食11,232円・21食16,178円</li><li>送料（税込・公式FAQ）: お試し注文は無料、定期は14食・21食が無料で7食のみ440円、都度880円（北海道・沖縄は別料金）</li><li>出典: <a href="https://www.wellness-dining.com/kikubari/products/k120/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 糖質＆カロリー制限気配り宅配食</a>・<a href="https://www.wellness-dining.com/faq/kikubari/" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">サービス全体は<Link href="/articles/wellness-dining-reviews/" className="text-accent underline">ウェルネスダイニングの口コミ・評判</Link>で解説しています。</p>
        <SubHeading>Dr.つるかめキッチン「糖質制限気づかい御膳」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 【糖尿病食】。1食の糖質15g以下・カロリー240kcal（±10％）・塩分2.0g以下で、糖尿病専門医の原島伸一先生（御所南はらしまクリニック院長）が監修</li><li>料金（税込）: 定期7食5,184円・14食9,828円・21食14,364円（送料無料）／都度7食7,228円（送料込み）</li><li>お届け日の変更・解約は次回お届け予定日の6日前まで</li><li>出典: <a href="https://tsurukame-kitchen.com/menu/post-123" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 糖質制限気づかい御膳</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">5コースの違いは<Link href="/articles/tsurukame-reviews/" className="text-accent underline">Dr.つるかめキッチンの口コミ・評判</Link>へ。</p>
        <SubHeading>メディミール「カロリー制限食」「糖質制限食」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>カロリー制限食: 「エネルギーと塩分を制限し、カロリー250㎉以下、炭水化物20ｇ以下、塩分2.5g以下」「1日摂取エネルギーが1600㎉を基準に開発」</li><li>糖質制限食: 「カロリー300㎉以下、糖質15ｇ以下、塩分2.5ｇ以下」</li><li>料金（税込）: 7食5,270円・14食9,698円・21食14,018円。初回は送料無料、定期便は送料無料</li><li>保存料・合成着色料・合成甘味料などは調理過程で使用していないと公式に記載</li><li>出典: <a href="https://medimeal.net/restricted/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 制限食</a>・<a href="https://medimeal.net/restricted/calorie/" target="_blank" rel="noopener noreferrer" className="text-accent underline">カロリー制限食</a>・<a href="https://medimeal.net/restricted/lowcarbs/" target="_blank" rel="noopener noreferrer" className="text-accent underline">糖質制限食</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">メディミールの詳細は<Link href="/articles/medimeal-kuchikomi/" className="text-accent underline">メディミールの口コミ・評判</Link>をご覧ください。</p>
        <SubHeading>食宅便「低糖質セレクト」</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「糖質を10g以下に抑えたお弁当です」</li><li>料金（税込）: 7食5,180円。配送料は1梱包につき らくらく定期便940円・都度便1,330円</li><li>ご飯（150g×7食）は別売り</li><li>出典: <a href="http://shokutakubin.com/shop/c/c20/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 低糖質セレクト</a></li></ul>
        <SubHeading>ワタミの宅食「ワタミdeおいしい健康」（冷蔵・日替わり）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 糖尿病・高血圧・脂質異常症・ダイエットの食事管理に。「糖尿病診療ガイドラインにも配慮」「日本人の食事摂取基準（2020年度版）をもとに、管理栄養士が設計」</li><li>基準（5日間コース平均）: 300kcal基準（±50kcal）・たんぱく質16.2g以上・食物繊維4.7g以上・食塩相当量2.0g以下・20品目以上</li><li>料金: 平日月〜金の5日間、1食あたり690円（税込・宅配料込）。冷蔵で手渡し</li><li>株式会社おいしい健康との共同開発。同社のサービスは「医療行為を行うものではありません」と注記</li><li>出典: <a href="https://www.watami-takushoku.co.jp/category/oiken" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 ワタミdeおいしい健康</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">注文の締切（毎週水曜が翌週分の確定日）は<Link href="/articles/gohan-tsukuritakunai-takuhai/" className="text-accent underline">ご飯を作りたくない日の宅配弁当</Link>で曜日別に計算しています。</p>
        <SubHeading>宅配クック123「カロリー・塩分調整食」（店舗配達）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式表記: 「エネルギーや塩分の調整が必要な方におすすめ」「1食（おかずのみ）約240kcal、塩分2g未満」「※治療を目的とした商品ではございません」</li><li>ごはん付きのエネルギー514〜538kcal・たんぱく質18.7〜21.9g</li><li>料金（税込）: ごはん付き885円・おかずのみ777円（配達料なし・1食から）</li><li>出典: <a href="https://takuhaicook123.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 お弁当の種類</a></li></ul>
        <SectionHeading id="choose">利用前に確認したいこと</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>指示されているエネルギー量・炭水化物（糖質）の量と、コースの基準が合うか（主治医・管理栄養士に確認）</li><li>ご飯の有無: おかずのみのコースは、主食を足した場合の量を別に考える</li><li>表記の違い: 「糖質」（炭水化物から食物繊維を除いたもの）か「炭水化物」か</li><li>塩分: 基準が2.0g以下・2.5g以下・なしで異なる</li><li>腎臓の機能も気になる場合は、たんぱく質・カリウムの制限があるかどうか</li></ul>
        <p className="text-sm mb-6 leading-relaxed">たんぱく質・カリウムの制限がある方は<Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent underline">腎臓病向けの宅配弁当</Link>、塩分を中心に抑えたい方は<Link href="/articles/genenshoku-takuhai/" className="text-accent underline">減塩食の宅配</Link>も参考にしてください。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式に糖尿病の方向けと案内している宅配弁当は、1食のエネルギー240〜300kcal前後・糖質15g以下（食宅便は10g以下）・塩分2.0〜2.5g以下を基準にしたものが中心です。一方で、特別用途食品「糖尿病用組合せ食品」の許可品は令和8年9月16日現在ありません。いずれも一般の食品として、各社が自社の基準で設計しています。</p>
        <p className="text-sm mb-6 leading-relaxed">食事療法を受けている方は、利用前に主治医・管理栄養士にご相談ください。料金・基準は変わることがあります。ご利用前に、各社の公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">糖質制限の宅配弁当（9社の糖質量を比較）</Link></li>
            <li><Link href="/articles/jinzobyo-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">腎臓病向けの宅配弁当4社を比較</Link></li>
            <li><Link href="/articles/genenshoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">減塩食の宅配4社を比較</Link></li>
            <li><Link href="/articles/wellness-dining-reviews/" className="text-accent hover:text-accent-dark transition-colors">ウェルネスダイニングの口コミ・評判</Link></li>
            <li><Link href="/articles/tsurukame-reviews/" className="text-accent hover:text-accent-dark transition-colors">Dr.つるかめキッチンの口コミ・評判</Link></li>
            <li><Link href="/articles/medimeal-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">メディミールの口コミ・評判</Link></li>
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">食宅便の口コミ・評判</Link></li>
            <li><Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食の口コミ・評判</Link></li>
            <li><Link href="/articles/takuhai-cook123-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">宅配クック123の口コミ・評判</Link></li>
            <li><Link href="/articles/reitou-bento-eiyou-baransu/" className="text-accent hover:text-accent-dark transition-colors">冷凍弁当の栄養バランス</Link></li>
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
