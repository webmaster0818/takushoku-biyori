import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ママの休食の解約方法｜公式LINE・メールで次回配送日の6営業日前まで、窓口の違いと締切を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ママの休食の定期便を解約・停止する方法を、公式の特定商取引法に基づく表記・返金ポリシー・利用規約で整理しました。回数の縛りはなく、締切は次回配送日の6営業日前。窓口の記載が公式内で異なる点と、お届け曜日別の締切の目安を当サイトで計算しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mamano-kyushoku-kaiyaku/";
const OFFICIAL_URL = "https://shop.mamakyu.com/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ママの休食 解約, ママの休食 解約方法, ママの休食 定期 解約, ママの休食 停止, ママの休食 スキップ, ママの休食 退会",
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
  { question: "ママの休食の定期便はいつでも解約できますか？", answer: "できます。公式の特定商取引法に基づく表記に「定期便の回数の縛りや制限はありません」とあります。ただし初回の注文はキャンセルできません（2026年11月19日確認）。" },
  { question: "解約はどこに連絡すればいいですか？", answer: "返金ポリシーでは、配送停止・解約の窓口は公式LINEとメール（support@mamakyu.com）です。特定商取引法に基づく表記はマイページと公式LINEを挙げています。両方に載っている公式LINEが確実です。" },
  { question: "電話で解約できますか？", answer: "できません。特定商取引法に基づく表記に「お電話でのお問い合わせは受け付けておりません」とあります。" },
  { question: "締切はいつですか？", answer: "次回配送日の6営業日前（ママの休食の営業日が基準）までです。土日を休業日として数えると、暦の上では8〜10日前が目安です（月曜日の配送が最も早く10日前）。" },
  { question: "1回だけお休みできますか？", answer: "できます。特定の配送日だけのキャンセルも、次回配送日の6営業日前までにマイページまたは公式LINEで手続きします。" },
  { question: "締切を過ぎたらどうなりますか？", answer: "次回分は出荷準備に入り、停止・解約できません。代金は次回配送予定日の4日前に決済されます。お弁当4食の2回目以降なら4,932円＋送料（関東・中部858円）が目安です（2026年10月24日確認の価格）。" },
];

const sections = [
  { id: "rule", label: "解約の条件：回数の縛りなし・締切は6営業日前" },
  { id: "steps", label: "解約の窓口：公式LINEかメールが確実" },
  { id: "deadline", label: "お届け曜日別の締切の目安（当サイト計算）" },
  { id: "cost", label: "締切を過ぎた場合に届く1回分の金額" },
  { id: "alt", label: "解約の前に：スキップ・内容の変更" },
  { id: "notes", label: "初回のキャンセル・受け取れなかった場合の注意" },
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
          <span className="text-foreground">ママの休食の解約方法</span>
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


export default function MamanoKyushokuKaiyakuPage() {
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
      { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介" },
      { "@type": "ListItem", position: 3, name: "ママの休食の解約方法" },
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
            <time dateTime="2026-11-19">公開: 2026年11月19日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクは公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ママの休食は、妊娠中・産後・授乳期の食事を想定した冷凍弁当の定期便です（運営は株式会社MYPLATE）。定期便には回数の縛りがなく、2回目以降はいつでも解約できます。
          </p>
          <p className="mb-3">
            ただし、<strong>締切は「次回配送日の6営業日前」で、電話での問い合わせは受け付けていません</strong>。また、解約の窓口として案内されている方法が、公式のページによって少しずつ異なります。この記事では、2026年11月19日に公式の特定商取引法に基づく表記・返金ポリシー・利用規約で確認した内容をもとに、解約の窓口と締切を整理しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ママの休食の解約の要点</p>
          <p className="text-sm leading-relaxed mb-4">定期便に回数の縛りはなく、解約・停止は次回配送日の6営業日前（ママの休食の営業日が基準）までに手続きします。返金ポリシーは配送停止・解約の窓口を「公式LINE」「メール（support@mamakyu.com）」としており、特定商取引法に基づく表記は「マイページ」「公式LINE」としています。どちらにも載っている公式LINEで連絡するのが確実です。電話での問い合わせは受け付けていません。初回の注文はキャンセルできず、2回目以降の代金は次回配送予定日の4日前に決済されます。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>定期便の回数の縛りや制限はない</li><li>公式LINE・メールで解約を受け付けている</li><li>特定の配送日だけのキャンセル（スキップ）もできる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>締切は「6営業日前」で、暦日より早まる</li><li>電話での問い合わせは受け付けていない</li><li>初回の注文はキャンセルできない</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ママの休食 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="rule">解約の条件：回数の縛りなし・締切は6営業日前</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["回数の縛り", "定期便の回数の縛りや制限はなし"],
            ["締切", "次回配送日の「6営業日前」まで（ママの休食の営業日が基準）"],
            ["2回目以降の決済", "次回配送予定日の4日前（例：4月27日配送なら4月23日）"],
            ["契約の更新", "停止・解約をしない限り自動的に更新"],
            ["初回の注文", "すぐに出荷作業が始まるためキャンセル不可"],
            ["停止・解約できないとき", "出荷準備期間中、またはお届け済み商品の代金が未払いのとき"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shop.mamakyu.com/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="text-accent underline">ママの休食 特定商取引法に基づく表記</a>・<a href="https://shop.mamakyu.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-accent underline">利用規約 第14条（定期購入）</a>・<a href="https://shop.mamakyu.com/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">返金ポリシー</a>（2026年11月19日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">利用規約の第14条には「出荷準備期間中やお届け済み商品代金の未払いがあるときは、次回お届け分の停止や解約をお受けすることができません。お支払をお済ませの上、出荷準備期間前（次回配送予定日の5営業日前まで）にご連絡いただきますよう」とあります。6営業日前が手続きの最終日、5営業日前からは出荷準備期間という関係です。</p>
        <SectionHeading id="steps">解約の窓口：公式LINEかメールが確実</SectionHeading>
        <ComparisonTable
          headers={["公式のページ", "配送停止・解約の窓口として書かれているもの"]}
          rows={[
            ["返金ポリシー", "公式LINEから連絡／メール（support@mamakyu.com）で連絡"],
            ["特定商取引法に基づく表記", "マイページから手続き／ママの休食公式LINEから連絡"],
            ["利用規約 第14条", "「当社の定める方法」（詳細は返金ポリシーを参照）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shop.mamakyu.com/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">返金ポリシー「ご注文内容の変更・解約」</a>・<a href="https://shop.mamakyu.com/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記「定期便の停止・解約、内容の変更」</a>・<a href="https://shop.mamakyu.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-accent underline">利用規約</a>（2026年11月19日確認）</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>どのページにも載っている窓口は公式LINEです。迷ったら公式LINEで「定期便を解約したい」と連絡するのが確実です</li><li>メールの場合は、お客様相談室 support@mamakyu.com に、登録の氏名・メールアドレスと解約したい旨を書いて送ります</li><li>特定商取引法に基づく表記は電話番号を載せていますが、「お電話でのお問い合わせは受け付けておりません」としています</li><li>連絡したら、受付の返信が届いたかを確認しておくと、締切を過ぎてからの行き違いを防げます</li></ul>
        <p className="text-sm mb-6 leading-relaxed">返金ポリシーでは、マイページで扱えるのは「ご注文内容の変更」で、「配送停止・解約」は公式LINEとメールの2つだけが挙げられています。マイページに停止の操作が見当たらない場合も、公式LINEかメールで手続きできます。</p>
        <SectionHeading id="deadline">お届け曜日別の締切の目安（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式は「6営業日前」の基準を「弊社の営業日」としていますが、営業日のカレンダーは公開していません。配送ポリシーには「土日祝日を除く平日11時までのご注文であれば最短2～3日のお届け」との記載があるため、ここでは土日を休業日として計算しました（祝日・年末年始は考慮していません）。</p>
        <ComparisonTable
          headers={["次回の配送日", "6営業日前（土日を除いて数えた場合）", "参考：次回分の決済日（4日前）"]}
          rows={[
            ["月曜日", "金曜日（10日前）", "木曜日（4日前）"],
            ["火曜日", "月曜日（8日前）", "金曜日（4日前）"],
            ["水曜日", "火曜日（8日前）", "土曜日（4日前）"],
            ["木曜日", "水曜日（8日前）", "日曜日（4日前）"],
            ["金曜日", "木曜日（8日前）", "月曜日（4日前）"],
            ["土曜日", "金曜日（8日前）", "火曜日（4日前）"],
            ["日曜日", "金曜日（9日前）", "水曜日（4日前）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式の「次回配送日の6営業日前」「次回配送予定日の4日前に決済」（<a href="https://shop.mamakyu.com/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>・2026年11月19日確認）をもとにした当サイトの計算です。祝日をはさむ場合はさらに早まります。正確な締切は公式LINEで確認してください。</p>
        <p className="text-sm mb-6 leading-relaxed">土日を除いて数えるため、6営業日前は暦の上では8〜10日前になります。月曜日に届く回は前々週の金曜日が締切の目安で、最も早くなります。</p>
        <SectionHeading id="cost">締切を過ぎた場合に届く1回分の金額</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">締切を過ぎると次回分は出荷準備に入り、停止できません。お弁当の定期便（2回目以降）で、締切後に届く1回分の金額の目安は次のとおりです（関東・中部の場合）。</p>
        <ComparisonTable
          headers={["セット", "定期便 2回目以降（税込）", "送料（関東・中部）", "合計"]}
          rows={[
            ["4食（60サイズ）", "4,932円", "858円", "5,790円"],
            ["8食（80サイズ）", "9,648円", "913円", "10,561円"],
            ["12食（100サイズ）", "14,148円", "1,144円", "15,292円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※価格は2026年10月24日に当サイトが公式のお弁当の商品ページで確認した値（通常購入5,480円・10,720円・15,720円の10%OFFを当サイトが計算）です。11月19日は商品ページの取得が制限され、再確認できていません。送料は<a href="https://shop.mamakyu.com/policies/shipping-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">配送ポリシー</a>（2026年11月19日確認）の関東・中部の額で、北海道は1,430〜1,650円、沖縄は1,650〜2,860円です。合計は当サイトの計算です。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・プラン・口コミは<Link href="/articles/mamano-kyushoku-reviews/" className="text-accent underline">ママの休食の口コミ・評判</Link>で整理しています。</p>
        <SectionHeading id="alt">解約の前に：スキップ・内容の変更</SectionHeading>
        <ComparisonTable
          headers={["したいこと", "窓口", "条件"]}
          rows={[
            ["特定の配送日だけキャンセル（スキップ）", "マイページ、または公式LINE", "次回配送日の6営業日前まで"],
            ["配送の内容（プラン・食数）を変える", "マイページ／公式LINE／メール", "次回配送日の6営業日前まで"],
            ["配送を止める・解約する", "公式LINE／メール（返金ポリシー）", "次回配送日の6営業日前まで"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shop.mamakyu.com/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>・<a href="https://shop.mamakyu.com/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">返金ポリシー</a>・<a href="https://shop.mamakyu.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-accent underline">利用規約 第14条（配送スキップや停止、ご注文内容の変更、解約）</a>（2026年11月19日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">妊娠中・産後の時期だけ使う予定なら、体調や家族のサポートに合わせてスキップや食数の変更で調整し、不要になった時点で解約する使い方もできます。定期便初回の割引は「お一人様1回限り」のため、解約後に申し込み直しても初回割引は使えません。</p>
        <SectionHeading id="notes">初回のキャンセル・受け取れなかった場合の注意</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>初回の注文はすぐに出荷作業が始まるため、キャンセルできません</li><li>お客様の都合による返品・交換は受け付けていません。商品の不備は到着後7日以内に、返送前にお客様相談室へ連絡します</li><li>キャンセルの連絡をせずに長期不在・受取拒否となった場合、往復送料の実費を請求されることがあります</li><li>不在などで返送された商品は再配達されず、商品代金の50%と往復送料を差し引いて返金されます</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://shop.mamakyu.com/policies/legal-notice" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>・<a href="https://shop.mamakyu.com/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">返金ポリシー</a>（2026年11月19日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">解約を決めたら、締切前に連絡を済ませることが大切です。連絡をせずに受け取らない方法は、送料や商品代金の一部を負担することになります。</p>
        <OfficialButton>ママの休食 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ママの休食の定期便は回数の縛りがなく、2回目以降はいつでも解約できます。締切は次回配送日の6営業日前で、土日を除いて数えると暦の上では8〜10日前です。窓口の記載は公式のページで異なるため、どのページにも載っている公式LINEで連絡すると確実です。電話では受け付けていない点にも注意してください。</p>
        <p className="text-sm mb-6 leading-relaxed">手続きの方法や条件は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>ママの休食 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mamano-kyushoku-reviews/" className="text-accent hover:text-accent-dark transition-colors">ママの休食の口コミ・評判</Link></li>
            <li><Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark transition-colors">産後におすすめの宅配弁当</Link></li>
            <li><Link href="/articles/wanmairu-kaiyaku/" className="text-accent hover:text-accent-dark transition-colors">わんまいるの解約方法</Link></li>
            <li><Link href="/articles/green-spoon-kaiyaku/" className="text-accent hover:text-accent-dark transition-colors">GREEN SPOONの解約方法</Link></li>
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
