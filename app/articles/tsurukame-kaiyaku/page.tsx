import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "Dr.つるかめキッチンの解約方法｜締切はお届け6日前・電話は平日のみ、締切を過ぎたときの金額を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "Dr.つるかめキッチンの定期コースを解約する方法を、公式のよくあるご質問とお問い合わせページで整理しました。解約は回数の制限なく、お届け予定日の6日前までに電話（平日9時〜17時）で連絡します。お届け曜日ごとの電話の期限と、締切を過ぎて届く1回分の金額を当サイトで計算しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/tsurukame-kaiyaku/";
const OFFICIAL_URL = "https://tsurukame-kitchen.com/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "つるかめキッチン 解約, Dr.つるかめキッチン 解約, つるかめキッチン 解約方法, つるかめキッチン 休止, つるかめキッチン スキップ, つるかめキッチン 定期 解約",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-16T00:00:00+09:00",
    modifiedTime: "2026-11-16T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "Dr.つるかめキッチンの解約はどこからできますか？", answer: "公式のお問い合わせページでは、定期コースの変更等はフリーダイヤル 0120-666-637（平日9時〜17時）への電話を案内しています。お問い合わせフォームもありますが、公式FAQにマイページから解約する手順の記載はありません（2026年11月16日確認）。" },
  { question: "解約の締切はいつですか？", answer: "お届け予定日の6日前までです。締切を過ぎた場合は、次回配送から解約となります（締切後の次回分は届きます）。" },
  { question: "何回か受け取らないと解約できませんか？", answer: "できます。公式FAQは「配送回数や期間に制限はなく」いつでも解約できると案内しています。" },
  { question: "解約に違約金や手数料はかかりますか？", answer: "公式FAQと特定商取引法に基づく表記に、解約の違約金・手数料の記載はありません（2026年11月16日確認）。" },
  { question: "土日に解約の連絡はできますか？", answer: "電話の受付は平日9時〜17時です。6日前が土日に当たる金曜日・土曜日のお届けは、その前の金曜日17時が電話できる最後の日になります（当サイト計算）。" },
  { question: "解約せずに一時的に止めることはできますか？", answer: "できます。スキップ（1回分）と一時休止があり、一時休止はお客様ご自身が再開するまで決済とお届けが止まります。" },
  { question: "届いたお弁当を返品できますか？", answer: "食品のため、お客様都合による返品・交換は原則できません。開封時に破損等があった場合はお取替えの対象です。" },
];

const sections = [
  { id: "rule", label: "解約の条件：回数の制限なし・お届け6日前まで" },
  { id: "steps", label: "解約の手順と連絡先" },
  { id: "deadline", label: "お届け曜日ごとの電話の期限（当サイト計算）" },
  { id: "late", label: "締切を過ぎると届く1回分の金額" },
  { id: "alt", label: "解約の前に：スキップ・一時休止・食数変更" },
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
          <span className="text-foreground">Dr.つるかめキッチンの解約方法</span>
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


export default function TsurukameKaiyakuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-16T00:00:00+09:00",
    dateModified: "2026-11-16T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "Dr.つるかめキッチンの解約方法" },
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
            <time dateTime="2026-11-16">公開: 2026年11月16日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            Dr.つるかめキッチンは、カロリー・塩分・糖質・たんぱく質を調整した冷凍のおかずを届ける宅配食です（運営：株式会社クロスエッジ）。定期コースは<strong>配送回数や期間の制限がなく、お届け予定日の6日前までに連絡すればいつでも解約できます</strong>。
          </p>
          <p className="mb-3">
            気をつけたいのは連絡の方法です。公式のお問い合わせページでは、定期コースの変更等はフリーダイヤル（平日9時〜17時）への電話を案内しています。土日に締切が重なるお届け曜日では、電話できる日が実質的に前倒しになります。この記事では、2026年11月16日に公式のよくあるご質問・お問い合わせ・各コースの商品ページで確認した内容をもとに、解約の手順と、お届け曜日ごとの電話の期限、締切を過ぎた場合に届く1回分の金額を整理しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">Dr.つるかめキッチンの解約の要点</p>
          <p className="text-sm leading-relaxed mb-4">定期コースの解約は回数・期間の制限がなく、お届け予定日の6日前までに連絡します。連絡先はフリーダイヤル 0120-666-637（平日9時〜17時）で、公式FAQにはマイページから解約する手順の記載はありません。締切を過ぎると次回分は届き、その次のお届けからの解約になります。1回だけ止めたい場合はスキップ、しばらく止めたい場合は一時休止（再開するまで決済・お届けが止まる）も使えます。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>回数・期間の縛りがなく、いつでも解約できる</li><li>スキップと一時休止を選べる</li><li>食数・お届け頻度の変更もできる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>締切はお届け予定日の6日前</li><li>電話の受付は平日9時〜17時のみ</li><li>締切後は次回分が届き、次々回からの解約</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">Dr.つるかめキッチン 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="rule">解約の条件：回数の制限なし・お届け6日前まで</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["回数・期間の縛り", "なし（「配送回数や期間に制限はなく」）"],
            ["解約の締切", "お届け予定日の6日前まで"],
            ["締切を過ぎた場合", "次回配送から解約（＝締切後の次回分は届く）"],
            ["解約の手数料・違約金", "公式FAQ・特定商取引法に基づく表記に記載なし"],
            ["お客様都合の返品", "食品のため原則不可（破損等はお取替え）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://tsurukame-kitchen.com/faq/" target="_blank" rel="noopener noreferrer" className="text-accent underline">Dr.つるかめキッチン よくあるご質問「定期配送の解約はできますか？」「お弁当の返品はできますか」</a>・<a href="https://tsurukame-kitchen.com/tokutei/" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月16日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">各コースの商品ページにも「お届け日変更や解約は、次回お届け予定日の6日前までにご連絡ください」「いつでも解約できる」と書かれており、締切の日数はFAQと一致しています。</p>
        <SectionHeading id="steps">解約の手順と連絡先</SectionHeading>
        <ComparisonTable
          headers={["窓口", "内容", "受付"]}
          rows={[
            ["フリーダイヤル", "0120-666-637（公式のお問い合わせページで「定期コースの変更等」の窓口として案内）", "平日9時〜17時"],
            ["お問い合わせフォーム", "公式サイトのフォーム（問い合わせ項目は「商品について」「ショップについて」「その他」の3つ）", "送信は随時。返答は営業時間内"],
            ["マイページ", "公式FAQに、マイページから解約する手順の記載はない", "−"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://tsurukame-kitchen.com/contact/" target="_blank" rel="noopener noreferrer" className="text-accent underline">Dr.つるかめキッチン お問い合わせ</a>・<a href="https://cart.tsurukame-kitchen.com/contact/index" target="_blank" rel="noopener noreferrer" className="text-accent underline">お問い合わせフォーム</a>・<a href="https://tsurukame-kitchen.com/faq/" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>（2026年11月16日確認）</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>電話では、ご注文番号・お名前・ご登録の電話番号を伝えるとスムーズです（公式FAQの「商品が届かない場合」の案内で、確認に使う情報として挙げられているもの）</li><li>フォームで連絡する場合、項目に「解約」はないため「その他」を選び、本文に定期コースの解約希望と次回お届け予定日を書く形になります</li><li>フォームの送信日が締切に間に合っていても、受付の確認が営業日になる可能性があります。締切が近いときは電話のほうが確実です</li></ul>
        <p className="text-sm mb-6 leading-relaxed">公式ページには、フォームの受付が何日付で扱われるかの記載はありません。締切ぎりぎりの場合は、電話で解約を伝えて受付を確認しておくと安心です。</p>
        <SectionHeading id="deadline">お届け曜日ごとの電話の期限（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">「お届け予定日の6日前まで」をお届けの曜日ごとに当てはめると、次のようになります。電話の受付は平日のみなので、6日前が土日に当たる場合は、その前の金曜日が電話できる最後の日です（祝日・年末年始は考慮していません）。</p>
        <ComparisonTable
          headers={["お届けの曜日", "6日前（締切日）", "電話できる最後の日", "お届けの何日前か"]}
          rows={[
            ["月曜日", "前週の火曜日", "前週の火曜日 17時", "6日前"],
            ["火曜日", "前週の水曜日", "前週の水曜日 17時", "6日前"],
            ["水曜日", "前週の木曜日", "前週の木曜日 17時", "6日前"],
            ["木曜日", "前週の金曜日", "前週の金曜日 17時", "6日前"],
            ["金曜日", "前週の土曜日", "前週の金曜日 17時", "7日前"],
            ["土曜日", "前週の日曜日", "前週の金曜日 17時", "8日前"],
            ["日曜日", "前週の月曜日", "前週の月曜日 17時", "6日前"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式の「お届け予定日の6日前まで」（<a href="https://tsurukame-kitchen.com/faq/" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>）と電話の受付時間「平日9時〜17時」（<a href="https://tsurukame-kitchen.com/contact/" target="_blank" rel="noopener noreferrer" className="text-accent underline">お問い合わせ</a>）をもとにした当サイトの計算です。「6日前」の数え方（当日を含むか）は公式に明記がないため、余裕を持って連絡してください。</p>
        <p className="text-sm mb-6 leading-relaxed">たとえば<strong>土曜日にお届けの方は、8日前の金曜日17時が電話の最終受付</strong>になります。次回のお届け予定日はお届けの周期（1週間・2週間・3週間・1ヶ月ごと）で変わるため、解約を決めたら次回の予定日を先に確かめておきましょう。</p>
        <SectionHeading id="late">締切を過ぎると届く1回分の金額</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">締切を過ぎた場合は、次回の1回分が届いてからの解約になります。返品は原則できないため、その1回分の代金はかかると考えておく必要があります。定期コースの1回分の金額は次のとおりです。</p>
        <ComparisonTable
          headers={["コース", "定期7食", "定期14食", "定期21食", "1食あたり（定期）"]}
          rows={[
            ["つるかめバランス栄養御膳", "4,968円", "9,504円", "13,932円", "663〜710円"],
            ["カロリー制限気づかい御膳", "5,184円", "9,828円", "14,364円", "684〜741円"],
            ["塩分制限気づかい御膳", "5,184円", "9,828円", "14,364円", "684〜741円"],
            ["糖質制限気づかい御膳", "5,184円", "9,828円", "14,364円", "684〜741円"],
            ["たんぱく＆塩分制限気づかい御膳", "5,508円", "10,476円", "15,336円", "730〜787円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://tsurukame-kitchen.com/menu/" target="_blank" rel="noopener noreferrer" className="text-accent underline">Dr.つるかめキッチン 各コースの商品ページ</a>（2026年11月16日確認）。定期コースは送料無料（<a href="https://tsurukame-kitchen.com/souryo/" target="_blank" rel="noopener noreferrer" className="text-accent underline">送料と配送について</a>）。商品ページの料金表は「税込み」、価格欄の一部は「税抜」と表示されており表記が食い違っています。本表は料金表の「税込み」の表記に合わせました。1食あたりは当サイトが食数で割った値（1円未満四捨五入）です。</p>
        <p className="text-sm mb-6 leading-relaxed">14食・21食で契約している場合、締切を過ぎると<strong>1回で1万円を超える</strong>ことがあります。解約を迷っている間に締切が来そうなときは、先に次回分だけスキップしておくと、届く前に考える時間をつくれます。</p>
        <SectionHeading id="alt">解約の前に：スキップ・一時休止・食数変更</SectionHeading>
        <ComparisonTable
          headers={["したいこと", "公式の案内", "向いている場合"]}
          rows={[
            ["1回だけ休む", "配送のスキップが可能", "旅行・入院などで1回分受け取れない"],
            ["しばらく止める", "一時休止：お客様ご自身が再開するまで、決済とお届けが止まる", "再開の時期が決まっていない"],
            ["量を減らす", "次回のお届け食数（7・14・21食）や頻度を変更できる", "食べきれずに冷凍庫が埋まる"],
            ["苦手な食材を外す", "主菜の食材のみ変更可能（副菜・調味料は不可）", "特定の食材が理由で続けにくい"],
            ["コースを変える", "5コース（カロリー・塩分・糖質・たんぱく＆塩分・バランス）", "食事制限の内容が変わった"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://tsurukame-kitchen.com/faq/" target="_blank" rel="noopener noreferrer" className="text-accent underline">Dr.つるかめキッチン よくあるご質問「配送を一度スキップしたり、一定期間停止することはできますか？」「食数が多く食べきれないです。」「食材を選ぶことはできますか？」「定期配送の解約はできますか？」</a>（2026年11月16日確認）。変更の締切も、お届け予定日の6日前までです（「定期購入コースのお届けタイミングの変更はいつまでに連絡すればよいですか？」）。</p>
        <p className="text-sm mb-6 leading-relaxed">公式FAQは「一旦配送を止めたい場合は『一時休止』サービスをご利用ください」と案内しています。一時休止は再開するまで決済もお届けも止まるため、また使う可能性があるなら解約より手続きが少なく済みます。味や価格の評判は<Link href="/articles/tsurukame-reviews/" className="text-accent underline">Dr.つるかめキッチンの口コミ・評判</Link>で、ほかの制限食の宅配との比較は<Link href="/articles/koureisha-osusume/" className="text-accent underline">高齢者向けの宅配弁当の選び方</Link>で確認できます。</p>
        <OfficialButton>Dr.つるかめキッチン 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">Dr.つるかめキッチンの定期コースは回数の縛りがなく、お届け予定日の6日前までに連絡すれば解約できます。連絡はフリーダイヤル（平日9時〜17時）が基本で、金曜日・土曜日のお届けは電話の期限が7〜8日前に早まる点に注意が必要です。しばらく使わないだけなら、スキップや一時休止で止める方法もあります。</p>
        <p className="text-sm mb-6 leading-relaxed">手続きの方法や条件は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>Dr.つるかめキッチン 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/tsurukame-reviews/" className="text-accent hover:text-accent-dark transition-colors">Dr.つるかめキッチンの口コミ・評判</Link></li>
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者向けの宅配弁当の選び方</Link></li>
            <li><Link href="/articles/medimeal-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">メディミールの口コミ・評判</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
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
