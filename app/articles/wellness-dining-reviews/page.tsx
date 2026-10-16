import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ウェルネスダイニングの口コミ・評判は？まずいって本当？制限食6コースの料金・解約を公式で確認【2026年10月最新】";
const ARTICLE_DESCRIPTION =
  "ウェルネスダイニングの口コミ・評判を、みん評・第三者メディアの実食レビュー・App Storeなど出典付きで整理します。「まずい」の声の中身、制限食6コースの料金・送料・解約の締切、添加物やお届け日数まで公式FAQで確認しました。【2026年10月更新】";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/wellness-dining-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ウェルネスダイニング 口コミ, ウェルネスダイニング 評判, ウェルネスダイニング まずい, ウェルネスダイニング 料金, ウェルネスダイニング 送料, 制限食 宅配, 宅配弁当 口コミ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-16T00:00:00+09:00",
    modifiedTime: "2026-10-16T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

/* ---------- FAQ data ---------- */

const faqData = [
  {
    question: "ウェルネスダイニングはお試し注文できる？",
    answer:
      "はい、初めての方はどのコースでも1回限りのお試し注文が可能です。お試し注文（初回）は、通常880円（北海道・沖縄は1,870円）の都度注文の送料が無料になります。さらに「お試し定期注文」を選ぶと、毎週1回×8回のお届けが8回すべて送料無料です（2026年10月10日・公式確認）。味や量を確認してから本契約できるので、まずは7食セットのお試しから始めるのがおすすめです。",
  },
  {
    question: "ウェルネスダイニングの賞味期限はどれくらい？",
    answer:
      "公式FAQでは、賞味期限は「商品到着後、冷凍保存（-18℃以下）で3ヵ月以上」、加熱後はすぐに食べるよう案内されています（2026年10月10日・公式確認）。3ヶ月以上の余裕があるので、まとめ買いしてストックしておくことも可能です。",
  },
  {
    question: "ウェルネスダイニングの解約方法は？",
    answer:
      "公式サイトの「定期注文の変更・停止」ページ（2026年10月8日確認）によると、休止（解約）・配送ペースや食数の変更はWebフォームで、一時休止はマイページの「定期注文変更手続き」からも手続きできます。電話（フリーダイヤル）での変更も受け付けており、受付は月〜金曜の9:30〜12:30・14:00〜17:00（土日祝を除く）です。1回だけの休止はマイページ、複数回の休止や解約はフォーム、電話は0120-503-999で、いずれもお届け予定日の7日前までに連絡が必要です。契約期間の縛りや解約金はありません（2026年10月10日・公式確認）。noshの締切（お届け予定日の4〜5日前）と比べると、少し早めに手続きする必要があります。",
  },
  {
    question: "ウェルネスダイニングとnoshの違いは？",
    answer:
      "ウェルネスダイニングは「制限食の専門サービス」で、たんぱく＆塩分調整・糖質＆カロリー制限・塩分制限・脂質制限など目的別のコースが充実しています。管理栄養士に無料で食事相談できるのも強みです。一方、noshは「メニューの自由度」「アプリの使いやすさ」「コスパ」で優れています。医師から食事制限を指示されている方はウェルネスダイニング、それ以外の方はnoshがおすすめです。",
  },
  {
    question: "ウェルネスダイニングは管理栄養士に相談できる？",
    answer:
      "はい、ウェルネスダイニングでは管理栄養士への無料相談が可能です。公式サイトでは管理栄養士23名が対応し、購入の有無を問わず予約不要・回数制限なしで相談無料と案内されています（2026年10月8日確認）。自分にどのコースが合うか、食数や配送ペースをどうするかも相談しながら決められます。",
  },
  {
    question: "ウェルネスダイニングにご飯は付いている？量は足りる？",
    answer:
      "ご飯は付いておらず、おかずのみです（主菜1品＋副菜3品）。公式では栄養コントロールされたパックごはんを別売りで用意しています（公式FAQ・2026年10月14日確認）。第三者メディアの実食レビューでは、成人男性にはボリュームがやや控えめという評価があるため、量が気になる方は主食を足す前提で考えましょう。",
  },
  {
    question: "ウェルネスダイニングに添加物は入っている？",
    answer:
      "公式FAQでは、製造段階で品質を保つ目的で最小限の日持ち向上剤を使用しており、ハムやベーコンなどの加工品に由来する添加物が含まれる場合があると案内されています。検査と国内の安全基準で安全が確認されたものを最小限に留めて使用しているとのことです（2026年10月14日確認）。",
  },
  {
    question: "注文してから何日で届く？時間指定や宅配BOXは？",
    answer:
      "公式FAQでは、注文からおよそ1週間前後でヤマト運輸のクール宅急便（冷凍）で届きます。時間指定は8〜12時・14〜16時・16〜18時・18〜20時・19〜21時の5枠から選べます。食品のため宅配BOXへの配達はできず、不在時は不在票から再配達の手配が必要です（2026年10月14日確認）。",
  },
  {
    question: "ウェルネスダイニングにアプリはある？",
    answer:
      "あります。App Storeに公式アプリ（販売元 WELLNESS DINING CORPORATION.）があり、配送カレンダー、管理栄養士への相談窓口、定期注文の配送スキップ、再注文、お知らせのプッシュ通知の機能があると説明されています（2026年10月14日確認）。なお、アプリの評価は3件（平均1.7）と少なく、使い勝手の評判を判断できる件数ではありません。解約や複数回の休止はWebフォームまたは電話で手続きします。",
  },
  {
    question: "離れて暮らす親に贈ることはできる？",
    answer:
      "できます。注文時に別のお届け先を指定でき、注文者が支払うことも可能です。熨斗やラッピングはありませんが、金額を記載したパンフレットや請求書を同梱せずに送ってもらえます（ネット注文の場合は「その他お問い合わせ」欄に記入）。郵便局・コンビニ後払いの場合、請求書は請求先に別途郵送されます（公式FAQ・2026年10月14日確認）。",
  },
  {
    question: "無料サンプルはある？食材は国産？",
    answer:
      "無料サンプルは用意されていません。お試しは、7食・14食・21食のどれでも初回送料無料の「お試し注文」です。食材はできる限り国産を使い、食材や時期によって一部外国産を使うメニューがあると案内されています。厳選栄養バランス気配り宅配食は国産食材を使用しています（加工品は国内加工、調味料は一部外国産を含む・公式FAQ・2026年10月14日確認）。",
  },
];

/* ---------- Helper Components ---------- */

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">
            ホーム
          </Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ウェルネスダイニングの口コミ・評判</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ウェルネスダイニングとは？基本情報まとめ" },
    { id: "good-reviews", label: "ウェルネスダイニングの良い口コミ・評判" },
    { id: "bad-reviews", label: "ウェルネスダイニングの悪い口コミ・評判" },
    { id: "third-party", label: "第三者メディアの実食レビューでの評価" },
    { id: "merits", label: "口コミと公式情報からわかったメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "price", label: "ウェルネスダイニングの料金・送料を解説" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "他社との簡易比較" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav
      aria-label="目次"
      className="bg-cream border border-warm-border rounded-xl p-5 mb-10"
    >
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-accent hover:text-accent-dark transition-colors"
            >
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

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>&#9733;</span>
      ))}
    </span>
  );
}

/* ---------- Page Component ---------- */

export default function WellnessDiningReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-16T00:00:00+09:00",
    dateModified: "2026-10-16T00:00:00+09:00",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"\u30a6\u30a7\u30eb\u30cd\u30b9\u30c0\u30a4\u30cb\u30f3\u30b0\u306e\u53e3\u30b3\u30df\u30fb\u8a55\u5224\"}]}" }}
      />
      

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-16">公開: 2026年4月16日</time>
            <time dateTime="2026-10-14">更新: 2026年10月14日（料金・送料・コースは10月10日、アプリ・お届け・添加物は10月14日に公式で確認）</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「ウェルネスダイニングの制限食って美味しいの？」「他の宅配弁当と何が違うの？」——ウェルネスダイニングは、糖質制限・塩分制限・たんぱく質調整など、<strong>制限食の専門サービス</strong>として知られています。管理栄養士が設計した栄養バランスが特徴ですが、実際の味や使い勝手はどうなのでしょうか。
          </p>
          <p className="mb-3">
            この記事では、<strong>ウェルネスダイニングの口コミ・評判を調査しました</strong>。公開されている利用者の口コミや公式情報をもとに、良い口コミ・悪い口コミの両方を整理して検証しました。
          </p>
          <p>
            <strong>全6コースの料金・送料・特徴</strong>まで詳しく解説します。ウェルネスダイニングが自分に合うかどうか、この記事で判断できます。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ウェルネスダイニングが向いている方</p>
          <p className="text-sm leading-relaxed mb-4">ウェルネスダイニングは、<strong>「塩分・糖質・たんぱく質などを制限・管理したい人」</strong>に向いた制限食専門の宅配弁当です。口コミでは管理栄養士監修の制限食や無料相談を評価する声が多い一方、価格はやや高めで送料もかかる点は注意が必要です。味やボリュームの感じ方には個人差があります。健康上の制限がある場合は、医師の指導もあわせてご確認ください。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>塩分・糖質・たんぱく質などの制限食に強い</li><li>管理栄養士への相談ができるという口コミ</li><li>やわらかさ等で選べるコースがある</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1食あたりの価格はやや高め</li><li>送料が別途かかる</li><li>制限の度合いは医師の指示に合わせて要確認</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ウェルネスダイニング 公式サイトで最新の料金・お試しを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        {/* ===== 基本情報 ===== */}
        <SectionHeading id="about">ウェルネスダイニングとは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ウェルネスダイニングは、ウェルネスダイニング株式会社が運営する<strong>制限食専門の冷凍宅配弁当サービス</strong>です。たんぱく＆塩分調整・糖質＆カロリー制限・塩分制限・脂質制限・栄養バランス・厳選栄養バランスの6コースを用意しています（2026年10月10日・公式確認）。管理栄養士が栄養バランスを設計し、無料で食事相談ができるのも大きな特徴です。糖尿病・腎臓病・高血圧など、医師から食事制限を指示されている方や高齢者に特に支持されています。
        </p>

        <SubHeading>ウェルネスダイニングの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営会社", "ウェルネスダイニング株式会社"],
            ["コース数", "6コース（たんぱく＆塩分調整／糖質＆カロリー制限／塩分制限／脂質制限／栄養バランス／厳選栄養バランス）"],
            ["メニュー構成", "主菜1品＋副菜3品（ご飯なし。栄養コントロールされたパックごはんを別売り）"],
            ["メニュー", "100種類（FAQでは100種類以上。脂質制限・厳選栄養バランスは35種類）・内容は管理栄養士のお任せで選べない"],
            ["セット", "7食・14食・21食"],
            ["配送", "ヤマト運輸クール宅急便（冷凍）。注文から1週間前後でお届け・時間指定5枠（8-12時／14-16時／16-18時／18-20時／19-21時）・宅配BOXへの配達は不可"],
            ["アプリ", "公式アプリあり（App Store・販売元 WELLNESS DINING CORPORATION.）。配送カレンダー・管理栄養士への相談窓口・定期注文の配送スキップ・再注文・プッシュ通知"],
            ["添加物", "品質保持のため最小限の日持ち向上剤を使用。ハム・ベーコン等の加工品由来の添加物を含む場合あり（公式FAQ）"],
            ["食材の産地", "できる限り国産。食材・時期により一部外国産（厳選栄養バランスは国産食材。加工品は国内加工、調味料は一部外国産を含む）"],
            ["配送間隔", "毎週1回・2週間に1回・毎月1回など（10日に1回・2ヶ月に1回も相談可）"],
            ["支払い方法", "クレジットカード・AmazonPay・代金引換（手数料330円）・後払い（手数料330円）"],
            ["変更・休止・解約", "お届け予定日の7日前まで。1回休止はマイページ、複数回休止・解約はフォーム、電話0120-503-999。解約金・回数縛りなし"],
            ["賞味期限", "商品到着後、冷凍（-18℃以下）で3ヵ月以上"],
            ["温め方・容器", "電子レンジ600Wで約5分。容器は使い捨て・15×20×3cm"],
            ["特徴", "管理栄養士への無料相談 / 制限食の専門性 / 定期14・21食は送料無料"],
          ]}
        />

        <SubHeading>全6コースの概要</SubHeading>
        <ComparisonTable
          headers={["コース", "主な基準（1食あたり・公式表記）", "7食セット（税込）", "1食あたり（算出）"]}
          rows={[
            ["たんぱく＆塩分調整 気配り宅配食", "たんぱく質10g以下・塩分2.0g以下・カリウム500mg以下", "6,058円", "約865円"],
            ["糖質＆カロリー制限 気配り宅配食", "糖質15g以下・240kcal（±10％）・塩分2.0g以下", "5,767円", "約824円"],
            ["塩分制限 気配り宅配食", "塩分2.0g以下・300kcal以下", "5,702円", "約815円"],
            ["栄養バランス 気配り宅配食", "300kcal以下・塩分2.5g以下", "5,529円", "約790円"],
            ["厳選栄養バランス 気配り宅配食", "300kcal（±20％）・塩分2.5g以下", "8,154円", "約1,165円"],
            ["脂質制限 気配り宅配食", "脂質10g以下・塩分2.0g以下・コレステロール70mg以下・330kcal以下", "7,009円", "約1,001円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-3">※基本スペックの配送・アプリ・添加物・産地・温め方は公式FAQ「気配り宅配食 よくあるご質問」とApp Storeの公式アプリ説明です（2026年10月14日確認）。価格・基準は公式の各コースページです（2026年10月10日・公式確認）。「1食あたり」は公式表記ではなく、税込価格÷食数で当サイトが算出した目安です。2026年10月時点の公式サイトのコースは上記6つで、以前掲載していた旧コース名のコースはありません。</p>
        <p className="text-sm mb-6 leading-relaxed">
          最も安いのは「栄養バランス 気配り宅配食」の21食セット（税込15,800円）で、<strong>1食あたり約752円</strong>（税込価格÷食数で算出）。塩分制限・糖質＆カロリー制限の21食セット（税込16,178円）は1食あたり約770円です。
        </p>

        <SubHeading>ウェルネスダイニングの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            {
              title: "制限食の専門性が業界トップクラス",
              text: "糖質＆カロリー制限（糖質15g以下・240kcal±10％）、塩分制限（塩分2.0g以下）、たんぱく＆塩分調整（たんぱく質10g以下・塩分2.0g以下）、脂質制限（脂質10g以下）など、目的別の基準で栄養管理されています（公式の各コースページ・2026年10月10日確認）。一般的な宅配弁当サービスでは対応できない厳しい制限値を実現しています。",
            },
            {
              title: "管理栄養士への無料電話相談",
              text: "ウェルネスダイニング最大の強みは、管理栄養士への無料相談サービスです。「自分にどのコースが合うかわからない」「医師からの指示をどう反映すればいいか」など、専門家に直接相談できます。公式サイトでは管理栄養士23名が対応し、購入の有無を問わず予約不要・回数制限なしで無料と案内されています（2026年10月8日確認）。App Storeの公式アプリ説明では「カスタマーサポートチームの7割が管理栄養士」とされています（2026年10月14日確認）。",
            },
            {
              title: "定期購入で送料無料（14食・21食セット）",
              text: "定期注文の14食・21食セットは送料無料です。7食セットの定期注文は送料440円（北海道・沖縄935円）で、都度注文の送料880円（北海道・沖縄1,870円）の半額です。初回のお試し注文も送料無料です（公式FAQ・2026年10月10日確認）。",
            },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== 良い口コミ ===== */}
        <SectionHeading id="good-reviews">ウェルネスダイニングの良い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミサイト「みん評」のウェルネスダイニングのページ、比較メディアに掲載された利用者投稿、公式サイトの案内（いずれも2026年10月8日確認）を読み、好意的な意見に多いテーマを5つに整理しました。口コミ本文の転載や、当サイトが独自に聞き取った声ではありません。件数は媒体により差があり（みん評は20件台）、全体の傾向を断定できるほどの母数ではない点にご注意ください。
        </p>
        <ComparisonTable
          headers={["出典", "件数・評価（確認日）", "内容の傾向"]}
          rows={[
            ["みん評", "20件台（2026年10月8日）", "制限食の味を評価する声と、腎臓病食が期待外れだったという低評価の両方"],
            ["App Store 公式アプリ", "評価1.7（3件・2026年10月14日）", "件数が少なく参考にならない"],
            ["第三者メディアの実食レビュー", "3媒体（下の「第三者メディアの実食レビュー」参照）", "味は「薄すぎない」、量・価格・メニューを選べない点が注意点"],
          ]}
        />
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          参考にした媒体: <a href="https://minhyo.jp/wellness-dining" target="_blank" rel="noopener noreferrer nofollow" className="underline">みん評「ウェルネスダイニング」</a>／<a href="https://www.wellness-dining.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ウェルネスダイニング公式サイト</a>／<a href="https://www.wellness-dining.com/modification/" target="_blank" rel="noopener noreferrer nofollow" className="underline">公式「定期注文の変更・停止」</a>（2026年10月8日確認）
        </p>

        {[
          {
            title: "制限食なのにしっかり味がある",
            reviews: [
              "塩分制限・糖質制限の食事でも、出汁や香辛料を使った味付けで「薄すぎない」「病院食のような味気なさとは違う」という趣旨の投稿が複数の媒体に見られます。",
              "公式サイトも「だしや香辛料、調理方法に手間をかけてしっかりとした味付けに仕上げている」と説明しており、口コミの傾向と一致しています。",
            ],
          },
          {
            title: "管理栄養士に無料相談できて安心",
            reviews: [
              "電話でコース選びや食事制限の相談ができ、健康状態や検査数値に合わせた提案を受けられたという趣旨の投稿があります。",
              "公式サイトでは、国家資格を持つ管理栄養士23名が対応し、購入の有無を問わず予約不要・回数制限なしで相談無料と案内されています（2026年10月8日確認）。",
            ],
          },
          {
            title: "食事管理の負担が大幅に減った",
            reviews: [
              "仕事や育児で栄養バランスの良い食事を作れなかった人が、電子レンジで温めるだけで済む点を評価する投稿があります。",
              "高齢の家族の食事管理や、糖尿病・腎臓病の食事療法を自分で計算する負担が減ったという趣旨の声も見られます。",
            ],
          },
          {
            title: "品数が多く栄養バランスが良い",
            reviews: [
              "主菜1品＋副菜3品の構成で、自炊では摂りにくい品目数を確保できるという趣旨の投稿があります。",
              "制限食でありながら彩りや品数があり「ちゃんとした食事」という満足感を挙げる声が見られます。",
            ],
          },
          {
            title: "初回送料無料でお試ししやすい",
            reviews: [
              "初回は送料無料でお試し注文ができるため、味や量を確認してから続けるか決められたという趣旨の投稿があります。",
              "定期購入では14食・21食セットが送料無料になる点を、長く続ける前提での評価として挙げる声が見られます。",
            ],
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2">
              {category.reviews.map((review, i) => (
                <div key={i} className="bg-green-50 rounded-lg p-3 text-sm leading-relaxed">{review}</div>
              ))}
            </div>
          </div>
        ))}

        {/* ===== 悪い口コミ ===== */}
        <SectionHeading id="bad-reviews">ウェルネスダイニングの悪い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          良い口コミだけでなく、ネガティブな意見も同じ媒体（みん評・比較メディア・公式サイト）から整理して紹介します。みん評には腎臓病食を注文して期待外れだったという低評価の投稿もあり、評価は分かれています。
        </p>

        {[
          {
            title: "メニューを自分で選べない（コース制・おまかせ）",
            reviews: [
              "noshのように好きなメニューを選べず、おまかせで届く点を残念がる趣旨の投稿があります。",
              "苦手な食材が入っていることがあるという声も見られます。",
            ],
            comment: "ウェルネスダイニングはコース制でメニューはおまかせです。noshや三ツ星ファームのように自分でメニューを選べないのは不便ですが、栄養バランスを管理栄養士が最適化するためにこの方式を採用しています。なお公式FAQでは、苦手な食材のお除きはできず、アレルギーにも完全対応はしていないと案内されています（2026年10月10日確認）。",
          },
          {
            title: "味が薄いと感じる人もいる",
            reviews: [
              "塩分制限食という性質上、濃い味に慣れていると最初は物足りないという趣旨の投稿があります。",
              "「まずい」かどうかを検証した比較メディアの記事もあり、味の評価は制限の種類や個人の好みで分かれています。",
            ],
            comment: "制限食という性質上、一般的な宅配弁当と比べると味付けは控えめです。ただし、出汁やスパイスを活用した味付けで「薄くて食べられない」というレベルではないという投稿が多く、続けるうちに素材の味を感じられるようになったという声も見られます。",
          },
          {
            title: "解約・変更の手続きに手間がかかる（7日前締切）",
            reviews: [
              "Webで即時に完了せず、締切も早めで手続きに手間がかかるという趣旨の投稿があります。",
              "電話の受付時間が平日の日中に限られ、働いている人には連絡しにくいという声も見られます。",
            ],
            comment: "公式サイトの「定期注文の変更・停止」ページ（2026年10月8日確認）では、休止（解約）・配送ペースや食数の変更はWebフォーム、一時休止はマイページ、電話（フリーダイヤル）のいずれでも受け付けると案内されています。電話受付は月〜金曜の9:30〜12:30・14:00〜17:00（土日祝を除く）、いずれもお届け予定日の7日前までの連絡が必要です。「電話のみ」ではありませんが、即時に完了しない点は把握しておきましょう。",
          },
        ].map((category) => (
          <div key={category.title} className="mb-6">
            <SubHeading>{category.title}</SubHeading>
            <div className="space-y-2 mb-3">
              {category.reviews.map((review, i) => (
                <div key={i} className="bg-red-50 rounded-lg p-3 text-sm leading-relaxed">{review}</div>
              ))}
            </div>
            <div className="bg-cream rounded-lg p-4 text-sm leading-relaxed">
              <p className="font-bold mb-1">編集部の見解</p>
              <p>{category.comment}</p>
            </div>
          </div>
        ))}

        {/* ===== 第三者メディアの実食レビュー ===== */}
        <SectionHeading id="third-party">第三者メディアの実食レビューでの評価</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          当サイトはウェルネスダイニングを実食していません。そのため、実際に注文して食べた第三者メディアの記事（2026年10月14日確認）から、評価をそのまま整理しました。いずれもアフィリエイト広告を含む記事で、評価は各メディアの主観です。
        </p>
        <ComparisonTable
          headers={["メディア（更新日）", "実食の内容", "評価が高かった点", "注意点として挙げた点"]}
          rows={[
            ["HonNe（EXIDEA・2026年10月2日更新）", "男女15名で冷凍弁当7種類を実食＋X（旧Twitter）の投稿を引用", "減塩なのに味がしっかりしている・栄養バランス・おかずの品数", "「まずい」との口コミは見られなかったが、味付けが薄めに感じる人も・料金が少し高め"],
            ["にこにこ食材宅配サービスCLUB（2026年9月26日）", "栄養バランス気配り宅配食の7食セットを注文", "主菜は出汁や香辛料が効いて「制限食感」はなく「健康的でちょうどいい」味", "成人男性にはボリュームがやや控えめ・値段がやや高い"],
            ["宅食レビュー通信 byわんまいる（2026年1月13日）", "筆者の実食＋利用者321人へのアンケート（2025年10月）", "制限食なのに美味しい・塩分や糖質の管理がしやすい・やわらかさを選べる", "量が少ない・定期便の料金がやや高め・メニューを選べない・解約やスキップの仕組みが分かりづらい"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-4 leading-relaxed">
          出典: <a href="https://exidea.co.jp/blog/meal/home-meal/wellness-dining/" target="_blank" rel="noopener noreferrer nofollow" className="underline">HonNe「ウェルネスダイニングの口コミは？実食とSNS調査でまずいとの評判を徹底検証！」</a>／<a href="https://takuhai-jitan.com/wellnessdining-review/" target="_blank" rel="noopener noreferrer nofollow" className="underline">にこにこ食材宅配サービスCLUB「ウェルネスダイニングのお試しレビュー」</a>／<a href="https://www.onemile.jp/column/wellness-dining-reputation/" target="_blank" rel="noopener noreferrer nofollow" className="underline">宅食レビュー通信 byわんまいる「ウェルネスダイニングの口コミ・評判は？」</a>（いずれも2026年10月14日確認）。宅食レビュー通信は宅食サービス「わんまいる」の運営元のメディアです。また、記事内の料金表は公式の現行価格と異なる場合があります（料金は下の「料金・送料」を参照）。
        </p>
        <div className="bg-cream rounded-lg p-4 text-sm leading-relaxed mb-6">
          <p className="font-bold mb-1">編集部の整理</p>
          <p>3媒体とも、味は「制限食としては薄すぎない」という評価で一致しています。注意点として共通するのは<strong>量（特に成人男性）・価格・メニューを選べないこと</strong>で、当サイトの悪い口コミの整理とも重なります。量が気になる方は、公式FAQのとおりご飯は付かないので主食を足す前提で考えると安心です。</p>
        </div>

        {/* ===== メリット ===== */}
        <SectionHeading id="merits">口コミと公式情報からわかったメリット5つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          口コミや公開情報から見えてくるウェルネスダイニングのメリットを5つにまとめました。
        </p>

        {[
          { num: 1, title: "制限食の専門性が圧倒的", text: "糖質15g以下、塩分2.0g以下、たんぱく質10g以下、カロリー240kcal（±10％）——これらの厳しい制限値を実現できるのは、制限食の専門サービスならではの特徴です。nosh（糖質30g以下）や三ツ星ファーム（糖質25g以下）では到達できない数値です。医師から「塩分は1日6g以下に」と指示された方も、ウェルネスダイニングなら1食2.0g以下に抑えられるので、残り2食で4g以内に収めれば指示を守れます。" },
          { num: 2, title: "管理栄養士への無料相談が心強い", text: "口コミによると、電話相談ではこちらの健康状態や検査数値を伝えた上で、最適なコースと食べ方のアドバイスをもらえたという声があります。公式FAQでも「自分に合う食数やペースが決められない」場合は常駐の管理栄養士に相談しながら決められると案内されており、お届け開始後の食数・ペースの変更も受け付けています（2026年10月14日確認）。" },
          { num: 3, title: "定期購入14食・21食で送料完全無料", text: "定期注文の14食・21食セットは送料無料です。noshは4〜12食の送料が関西1,023円・関東1,166円（2026年7月27日改訂・税込）かかるため、月2回配送なら年間で関西24,552円・関東27,984円の送料差になります（算出）。ただし食事代はnoshの方が安く、送料込みの1食あたり（算出）でもnosh 12食・関東は約709円、ウェルネスダイニング栄養バランス14食の定期注文は約770円と、noshの方が安い計算です。送料無料は差を縮める要素と考えてください。" },
          { num: 4, title: "品数4品で食事の満足感が高い", text: "ウェルネスダイニングは主菜1品＋副菜3品の計4品構成です。公式FAQでは「肉や魚、野菜などをバランスよく取り入れた献立」を管理栄養士が組むと案内されています。口コミでも、制限食でありながら品数と彩りがあり「ちゃんとした食事」という満足感を挙げる声が見られます。" },
          { num: 5, title: "初回送料無料でお試ししやすい", text: "初めての方はどのコースでも送料無料でお試し注文が可能です。さらに「お試し定期注文」は毎週×8回のお届けが8回すべて送料無料です（公式・2026年10月10日確認）。味や量を十分に確認してから本契約に移行できるので、失敗のリスクが極めて低い設計です。" },
        ].map((merit) => (
          <div key={merit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">{merit.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{merit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{merit.text}</p>
            </div>
          </div>
        ))}

        {/* ===== デメリット ===== */}
        <SectionHeading id="demerits">注意すべきデメリット3つ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          メリットだけでなく、口コミと公式情報から見える注意点もお伝えします（当サイトは実食していません）。
        </p>

        {[
          { num: 1, title: "メニューの自由度がない（おまかせ制）", text: "ウェルネスダイニング最大のデメリットは、メニューを自分で選べないことです。noshのように「今日はハンバーグ」「明日はチキン南蛮」と選ぶ楽しみはありません。何が届くかは届くまで分かりません。苦手な食材が入っていることもあります。食事の自由度・楽しさを重視する方にはnoshや三ツ星ファームの方が向いています。" },
          { num: 2, title: "味のインパクトは控えめ", text: "制限食の性質上、noshや三ツ星ファームと比べると味のインパクトは弱めです。特に20代〜30代の若い方、濃い味付けが好きな方は物足りなさを感じる可能性があります。ただし「まずい」というレベルではなく、出汁やスパイスを活用した丁寧な味付けです。続けるうちに慣れたという声も見られます。" },
          { num: 3, title: "解約・変更は7日前までの手続きが必要", text: "休止（解約）や配送ペース・食数の変更はWebフォーム・マイページ（一時休止）・電話で受け付けていますが、お届け予定日の7日前までに連絡が必要です。noshもお届け予定日の4〜5日前が締切ですが、ウェルネスダイニングはそれより早い7日前です。電話受付は月〜金曜の9:30〜12:30・14:00〜17:00（土日祝を除く）で、仕事をしている方は昼休みかWebフォームを使うのが現実的です（公式「定期注文の変更・停止」ページ・2026年10月8日確認）。" },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{demerit.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{demerit.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 料金・送料 ===== */}
        <SectionHeading id="price">ウェルネスダイニングの料金・送料を解説</SectionHeading>

        <SubHeading>コース別料金表（7食・14食・21食）</SubHeading>
        <ComparisonTable
          headers={["コース", "7食", "14食", "21食", "21食の1食あたり（算出）"]}
          rows={[
            ["たんぱく＆塩分調整", "6,058円", "11,858円", "17,258円", "約822円"],
            ["糖質＆カロリー制限", "5,767円", "11,232円", "16,178円", "約770円"],
            ["塩分制限", "5,702円", "11,232円", "16,178円", "約770円"],
            ["栄養バランス", "5,529円", "10,778円", "15,800円", "約752円"],
            ["厳選栄養バランス", "8,154円", "15,800円", "23,122円", "約1,101円"],
            ["脂質制限", "7,009円", "13,305円", "19,418円", "約925円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※すべて税込（公式の各コースページ・2026年10月10日確認）。1食あたりは税込価格÷食数で当サイトが算出しています（公式表記ではありません）。</p>

        <SubHeading>送料</SubHeading>
        <ComparisonTable
          headers={["注文方法", "7食", "14食", "21食"]}
          rows={[
            ["都度注文", "880円（北海道・沖縄1,870円）", "880円（北海道・沖縄1,870円）", "880円（北海道・沖縄1,870円）"],
            ["定期注文", "440円（北海道・沖縄935円）", "無料", "無料"],
            ["お試し注文（初回）", "無料", "無料", "無料"],
            ["お試し定期注文（毎週×8回）", "8回すべて無料", "8回すべて無料", "8回すべて無料"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※送料は税込（公式FAQ「気配り宅配食」・2026年10月10日確認）。</p>

        <p className="text-sm mb-6 leading-relaxed">
          <strong>送料のポイント：</strong>定期注文の14食・21食セットは送料無料です。noshは4〜12食で関西1,023円〜北海道1,713円の送料が毎回かかります（2026年7月27日改訂・税込）。ただし食事代はnoshの方が安いため、送料込みの1食あたり（算出）でもnosh 12食・関東 約709円に対し、ウェルネスダイニング栄養バランス14食の定期注文は約770円で、送料を含めてもnoshの方が安い計算です。送料込みの1食実質単価で18社を比較した<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark underline">宅食料金白書2026</Link>（編集部の公式サイト一次調査）もあわせてご覧ください。
        </p>

        <SubHeading>月額コストシミュレーション</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          最も安い栄養バランスコースを定期注文（北海道・沖縄以外）で1ヶ月利用した場合のコストを、利用頻度別に試算しました（2026年10月10日確認の公式価格・送料から算出）。
        </p>
        <ComparisonTable
          headers={["利用パターン", "食数/月", "食事代", "送料", "月額合計", "1食あたり（算出）"]}
          rows={[
            ["月1回（7食×1回）", "7食", "5,529円", "440円", "5,969円", "約853円"],
            ["月1回（14食×1回）", "14食", "10,778円", "0円", "10,778円", "約770円"],
            ["2週間に1回（14食×2回）", "28食", "21,556円", "0円", "21,556円", "約770円"],
            ["月1回（21食×1回）", "21食", "15,800円", "0円", "15,800円", "約752円"],
          ]}
        />

        {/* ===== おすすめな人・おすすめしない人 ===== */}
        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>ウェルネスダイニングがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "医師から糖質制限・塩分制限・カロリー制限を指示されている人",
              "糖尿病・腎臓病・高血圧の食事管理が必要な人",
              "高齢のご家族の栄養管理を任せたい人",
              "管理栄養士に食事相談したい人",
              "毎日の栄養計算・カロリー計算から解放されたい人",
              "定期注文（14食・21食は送料無料）で続けたい人",
              "制限食でも「美味しく食べたい」人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>ウェルネスダイニングをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "自分でメニューを選びたい人 → nosh・三ツ星ファームがおすすめ",
              "味のインパクトやグルメ体験を求める人 → 三ツ星ファームがおすすめ",
              "アプリで手軽にすべて管理したい人 → noshがおすすめ",
              "特に食事制限が不要な健康な20〜30代",
              "コスパ最優先の人 → noshがおすすめ",
              "解約のしやすさを重視する人 → noshがおすすめ",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== 簡易比較 ===== */}
        <SectionHeading id="comparison">他社との簡易比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ウェルネスダイニングと主要な競合サービスを簡単に比較します。より詳しい比較は
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline">【3社比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link>
          の記事で解説しています。
        </p>

        <ComparisonTable
          headers={["項目", "ウェルネスダイニング", "nosh", "三ツ星ファーム"]}
          rows={[
            ["1食あたり最安（税込÷食数）", "約752円〜（栄養バランス21食）", "612円〜（12食・20食）", "711円〜（21食）"],
            ["制限食対応", "◎（6コース）", "△（糖質30g以下のみ）", "△（糖質25g以下のみ）"],
            ["味の評価", "★★★☆☆", "★★★★☆", "★★★★★"],
            ["メニュー選択", "おまかせ", "自由に選べる", "自由に選べる"],
            ["送料（税込）", "定期14・21食 無料（定期7食440円・都度880円）", "4〜12食 1,023円〜（毎回・地域別）", "990円（毎回）"],
            ["管理栄養士への相談窓口", "◎（無料・公式で案内）", "公式に記載なし", "公式に記載なし"],
            ["アプリ", "あり（iOS・配送スキップ等。2026年10月14日確認）", "あり", "あり"],
            ["向いている人", "食事制限・高齢者", "コスパ・自由度重視", "味・クオリティ重視"],
          ]}
        />

        <p className="text-xs text-warm-gray -mt-4 mb-6">※ウェルネスダイニング・noshの料金と送料は2026年10月10日、三ツ星ファームは2026年10月9日に各公式サイトで確認しています。1食あたりは税込価格÷食数です（noshは公式表記の1食単価）。nosh・三ツ星ファームの送料は北海道・沖縄などで高くなります。星の評価は編集部の整理で、実食評価ではありません。管理栄養士への相談窓口は2026年10月14日に各公式サイトで確認しています（nosh・三ツ星ファームは相談窓口の案内が見つかりませんでした）。</p>

        <div className="table-wrapper mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/10">
                <th className="border border-warm-border px-3 py-2 text-left font-bold">項目</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">ウェルネスダイニング</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">nosh</th>
                <th className="border border-warm-border px-3 py-2 text-left font-bold">三ツ星ファーム</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["総合おすすめ度", 4, 5, 4],
                ["制限食の専門性", 5, 2, 2],
                ["味", 3, 4, 5],
                ["コスパ（送料込み）", 3, 4, 3],
                ["使いやすさ", 3, 5, 3],
                ["サポート体制", 5, 3, 3],
              ].map(([label, w, n, m], i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
                  <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={w as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={n as number} /></td>
                  <td className="border border-warm-border px-3 py-2"><StarRating count={m as number} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：ウェルネスダイニングはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">ウェルネスダイニングの総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度", 4],
                  ["制限食の専門性", 5],
                  ["味", 3],
                  ["コスパ（送料込み）", 3],
                  ["栄養管理", 5],
                  ["サポート体制", 5],
                  ["使いやすさ", 3],
                ].map(([label, count], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-white/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                    <td className="border border-warm-border px-3 py-2"><StarRating count={count as number} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            ウェルネスダイニングは<strong>「制限食の専門性」「管理栄養士の無料サポート」「定期購入の送料無料」</strong>の3つで他社にない独自の価値を提供しています。糖尿病・腎臓病・高血圧などで食事制限が必要な方、高齢のご家族の栄養管理を任せたい方には、ウェルネスダイニングが最適な選択肢です。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一方、食事制限が不要な方、メニューの自由度や味のインパクトを求める方は、noshや三ツ星ファームの方が満足度は高いでしょう。
          </p>
          <p className="text-sm leading-relaxed">
            まずは<strong>初回送料無料のお試し注文</strong>で7食セットを体験してみるのがおすすめです。味や量に納得できた場合は、14食以上の定期購入に切り替えると送料無料の対象になります。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">関連記事</p>
          <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            【3社比較】nosh・三ツ星ファーム・ウェルネスダイニング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            三ツ星ファームの口コミ・評判
          </Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食を専門とする編集チームです。公開情報や利用者の口コミをもとに、公平な比較情報の提供に努めます。</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">【3社比較】nosh・三ツ星ファーム・ウェルネスダイニング</Link></li>
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】nosh(ナッシュ)の口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">【2026年最新】三ツ星ファームの口コミ・評判を徹底調査</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">【2026年】一人暮らしにおすすめの宅食・宅配弁当ランキングTOP5</Link></li>
            <li><Link href="/articles/taihei-family-set-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">タイヘイファミリーセットの口コミ・評判は？まずいって本当？</Link></li>
          </ul>
        </div>
      
        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約しています。1食あたりの栄養基準を公式に明記している社はその基準値（「以下」「以上」・コース別の場合は範囲）、メニューごとの値だけを公開している社（nosh・FIT FOOD HOME）は公式メニュー一覧の主菜の中央50%（四分位）の範囲を記載しています。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link>をご参照ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-warm-border bg-white rounded-lg overflow-hidden">
              <thead className="bg-cream">
                <tr>
                  <th className="border-b border-warm-border px-3 py-2 text-left text-xs font-bold text-foreground">サービス</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">kcal</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">糖質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">タンパク質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">塩分(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">1食(円)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">nosh（ナッシュ）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">260-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">612-719</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">三ツ星ファーム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">25以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">711-927</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウェルネスダイニング</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-330</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-24（平均）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">9-13（平均）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">752-1,165</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://magokoro-care-shoku.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">まごころケア食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以下（糖質制限食のみ）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10以下（たんぱく調整食のみ）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">394-426</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワタミの宅食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">250-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.5-4.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">470-790</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://shokutakubin.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">食宅便</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0未満（ケア系）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">690-740</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">Muscle Deli</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-750</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-75以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-50以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,109-1,557</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">597-750</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.5</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">550-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.pal-system.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">パルシステム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">580-720</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ナッシュclub（割引）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">260-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">492〜（最高ランク）</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">つるかめキッチン</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-300</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">13</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">663-787</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://1meal.life/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワンミール</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">770-840</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://store.tavenal.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">FIT FOOD HOME</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">310-420</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">16-27</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">18-28</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.4-2.1</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,188-1,308</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://gofood.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">GOFOOD</a>（2025年6月30日にサービス終了）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">サービス終了</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※2026年5月時点の公開データです。以下の項目は各社の公式サイトで再確認しています。1食価格のMuscle Deli・FIT FOOD HOME・つるかめキッチンは2026年10月14日に再確認しました（Muscle Deliは4プランの単品価格（税込）÷食数（LEAN 15食〜GAIN 5食）、FIT FOOD HOMEは1人前の単品価格（税込1,188円・角煮など一部1,308円。10個まとめ割は1,129円〜）、つるかめキッチンは定期コースの税込価格÷食数（送料無料・バランス栄養御膳21食663円〜たんぱく＆塩分制限7食787円））。栄養値は2026年10月14日に再確認しました（noshは公式基準「糖質30g・塩分2.5g以下」と公式メニュー一覧の主菜88品、まごころケア食は全6コースの基準（健康バランス300kcal以下・カロリー調整240kcal±10%ほか。たんぱく調整食のみ300kcal以上）、ワタミの宅食は各商品の基準（熱量250〜500kcal基準・糖質は手鞠20g/おかず30g/ダブル35g以下・食塩相当量1.5〜4.0g以下）、Muscle Deliは4プランの基準（LOW CARB〜GAIN）、つるかめキッチンは5コースの基準（糖質15g以下は糖質制限気づかい御膳）、FIT FOOD HOMEは公式ストアの主菜19品（複数人前のパックを除く））。2026年10月15日には、ウェルネスダイニングの糖質・たんぱく質（各コースの公式公表の平均値の範囲。基準があるのは糖質＆カロリー制限の糖質15g以下、たんぱく＆塩分調整のたんぱく質10g以下、脂質制限の糖質27g以下・たんぱく質9g以上。厳選栄養バランスは糖質の公表なし）と塩分（6コースの基準：2.0〜2.5g以下）、まごころケア食の塩分（6コースの基準。健康バランス・カロリー調整は2.5g以下、ほかは2.0g以下）を再確認しました。2026年10月16日に公式サイト（6コースの商品ページの栄養表示）で再確認したところ、まごころケア食は1食あたりの平均値を公表しておらず、コース別の基準のみを公表しています。糖質の基準があるのは糖質制限食（15g以下）、たんぱく質の基準があるのはたんぱく調整食（10g以下）のみで、ほかのコースは公表がないため、この2つのみをコース名付きで記載しています（以前の「30-40」「15-20」は公式で確認できない値のため削除しました）。食宅便の塩分の基準はケア系（塩分&カロリーケア・たんぱくケア）の2.0g未満のみで、おまかせコースには基準がありません（10月15日掲載の7品で1.5〜2.4g）。食宅便のkcal・糖質・たんぱく質（公式の基準は低糖質セレクトの糖質10g以下・たんぱくケアのたんぱく質10.2g程度のみ）、Muscle Deliの塩分、つるかめキッチンのたんぱく質、ヨシケイ・コープデリ・パルシステム・ワンミール・GOFOODの栄養値は公式で確認できず、5月時点の値のままです。ワタミの宅食の1食価格は2026年10月13日に再確認しました（冷蔵7商品の5日間コースで宅配料込み470〜790円）。食宅便とまごころケア食の1食価格は2026年10月12日に再確認しました（食宅便は7食セット690〜740円、まごころケア食はお得便394〜426円、いずれも送料別）。三ツ星ファームの行は2026年10月9日に再確認し、kcal・糖質・タンパク質を三ツ星基準に、価格を通常の定期便の1食単価に更新しました。塩分は公式に基準の記載が見当たらないため「−」としています。nosh・ナッシュclub・ウェルネスダイニングの価格は2026年10月10日に再確認しました。noshは公式表記の1食単価、ウェルネスダイニングは全6コース・7〜21食の税込価格÷食数で算出し、kcal・塩分は各コースの公式基準に更新しています。最新情報は各公式サイトでご確認ください。</p>
        </section>

                {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>
      {/* coop-link-202609: クリックが出ている生協系の記事へ寄せる（GSC実測にもとづく内部リンクの配分見直し） */}
      <div className="my-8 rounded-lg border border-gray-200 bg-white p-5">
        <p className="mb-2 text-xs font-medium text-gray-500">生協の宅配弁当を個別に読む</p>
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="/articles/ouchi-coop-kuchikomi/" className="text-emerald-700 underline hover:opacity-80">
              おうちコープ「マイシィ」の口コミ・評判は？まずいって本当？
            </Link>
          </li>
          <li>
            <Link href="/articles/coopdeli-kuchikomi/" className="text-emerald-700 underline hover:opacity-80">
              コープデリ夕食宅配「舞菜」の口コミ・評判と料金
            </Link>
          </li>
          <li>
            <Link href="/articles/reitou-bento-mazui/" className="text-emerald-700 underline hover:opacity-80">
              冷凍宅配弁当は本当にまずい？主要15社を数値で比較
            </Link>
          </li>
        </ul>
      </div>


      </article>
    </>
  );
}
