import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ワタミの宅食のお試しは初回割引で20%OFF｜7商品の割引価格と対象・注文の締切【2026年11月】";
const ARTICLE_DESCRIPTION =
  "冷蔵のお弁当を毎日届ける「ワタミの宅食」のお試し（初回割引）を公式で確認。対象の7商品は5日間コースが通常価格の20%OFF（例: まごころ手鞠 2,950円→2,360円）。対象者・対象コース・除外週、注文の締切、冷凍の「ワタミの宅食ダイレクト」との違いをまとめました（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/watami-takushoku-otameshi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ワタミの宅食 お試し, ワタミの宅食 初回割引, ワタミの宅食 初回, ワタミの宅食 お試し 1週間, まごころ手鞠 お試し",
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
  { question: "ワタミの宅食に無料のお試しはありますか？", answer: "2026年11月25日時点で公式に案内されているのは、最初の1週間が20%OFFになる「初回割引」です。無料の試食セットの案内は見当たりませんでした。" },
  { question: "お試しだけで解約できますか？", answer: "ワタミの宅食は週ごとの注文です。次週分を注文しなければ、2週目以降のお届けはありません。「定期注文」や「リピート注文」を設定した場合は、お届け開始日の前週水曜日までにマイページまたはまごころスタッフに中止を伝えます。" },
  { question: "初回割引は何回使えますか？", answer: "1世帯1回限りです。6ヵ月以上利用をお休みしている方も対象になります。" },
  { question: "土日も割引になりますか？", answer: "土日祝日分は割引の対象外です。日替わり5日間コースは土日祝日がお休みです。" },
  { question: "お届けエリアの外でも頼めますか？", answer: "冷蔵のお弁当はまごころスタッフが届けるため、お届けエリアの確認が必要です。公式サイトは郵便番号でのエリア検索を案内しています。エリア外の場合は、宅配便で届く冷凍の「ワタミの宅食ダイレクト」が選択肢になります。" },
];

const sections = [
  { id: "answer", label: "ワタミの宅食のお試しの結論" },
  { id: "price", label: "対象7商品の初回割引価格" },
  { id: "conditions", label: "対象者・対象コース・除外される週" },
  { id: "order", label: "注文の締切と届き方" },
  { id: "direct", label: "「ワタミの宅食ダイレクト」のお試しとの違い" },
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
          <Link href="/articles/#otoku" className="text-foreground/70 hover:text-accent transition-colors">クーポン・お試しセット</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">ワタミの宅食のお試し（初回割引）</span>
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



export default function WatamiTakushokuOtameshiPage() {
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
      { "@type": "ListItem", position: 2, name: "クーポン・お試しセット" },
      { "@type": "ListItem", position: 3, name: "ワタミの宅食のお試し（初回割引）" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">クーポン・お試しセット</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-25">公開: 2026年11月25日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            冷蔵のお弁当・お惣菜を「まごころスタッフ」が毎日届ける<strong>ワタミの宅食</strong>には、無料の試食セットではなく、<strong>最初の1週間が通常価格の20%OFFになる「初回割引」</strong>があります。対象は7商品の日替わり5日間・7日間コースです。
          </p>
          <p className="mb-3">
            この記事では、公式の初回割引ページとよくある質問・ご注文の流れのページを2026年11月25日に確認し、7商品の割引価格を一覧にしました。1食あたりの金額は当サイトの計算です。
          </p>
          <p>公式は「お届け先により商品や価格が異なります」としています。お届け先の郵便番号を入力して、実際の価格をご確認ください。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ワタミの宅食のお試し（要点）</p>
          <p className="text-sm leading-relaxed mb-4">初回割引は、初めて利用する方（または6ヵ月以上休んでいる方）が対象で、最初の1週間だけ5日間コースが20%OFFになります。もっとも安いのはまごころ小箱（小）の1,880円（1食376円）、定番のまごころおかずは2,760円（1食552円）です。宅配料は価格に含まれ、2週目以降は通常価格です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 初回割引のよいところ</p>
              <ul className="space-y-1 list-disc list-inside"><li>7商品すべてで最初の1週間が20%OFF</li><li>宅配料は商品価格に含まれる</li><li>スタッフの手渡しで毎日届く（冷蔵）</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>1世帯1回限り・2週目以降は通常価格</li><li>土日祝日分は割引の対象外</li><li>注文はお届け開始日の前週水曜日まで</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">ワタミの宅食のお試しの結論</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容（2026年11月25日確認）"]}
          rows={[
            ["お試しの形", "初回割引（最初の1週間が通常価格の20%OFF）。無料の試食セットの案内はなし"],
            ["対象者", "「ワタミの宅食」を初めて利用される方、または6ヵ月以上利用をお休みされている方"],
            ["対象コース", "日替わり5日間コース・日替わり7日間コース（曜日を選べるコースは週5日間以上の注文のみ）"],
            ["最安", "まごころ小箱（小） 5日間 1,880円（通常2,350円）"],
            ["宅配料", "商品価格に含まれる"],
            ["回数", "1世帯1回限り。2週目以降は通常価格"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://www.watami-takushoku.co.jp/category/firstfree" target="_blank" rel="noopener noreferrer" className="text-accent underline">初回割引</a>・<a href="https://www.watami-takushoku.co.jp/contents/bento-faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>（2026年11月25日確認）。</p>
        <SectionHeading id="price">対象7商品の初回割引価格</SectionHeading>
        <ComparisonTable
          headers={["商品（日替わり5日間コース）", "通常価格（税込）", "初回割引価格（税込）", "割引額", "1食あたり（当サイト計算）"]}
          rows={[
            ["まごころ手鞠", "2,950円", "2,360円", "590円", "472円（通常590円）"],
            ["まごころおかず", "3,450円", "2,760円", "690円", "552円（通常690円）"],
            ["まごころ御膳", "3,550円", "2,840円", "710円", "568円（通常710円）"],
            ["まごころダブル", "3,950円", "3,160円", "790円", "632円（通常790円）"],
            ["まごころ小箱", "3,100円", "2,480円", "620円", "496円（通常620円）"],
            ["まごころ小箱（小）", "2,350円", "1,880円", "470円", "376円（通常470円）"],
            ["ワタミdeおいしい健康", "3,450円", "2,760円", "690円", "552円（通常690円）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://www.watami-takushoku.co.jp/category/firstfree" target="_blank" rel="noopener noreferrer" className="text-accent underline">初回割引</a>に表示の〈5日間コース〉の通常価格・割引価格（2026年11月25日確認）。7商品とも割引率は20%（当サイト計算）。祝日がある週は価格が異なります。7日間コースの割引価格はページに表示がありません。</p>
        <SubHeading>商品の選び方（公式の紹介文）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>まごころ手鞠: 毎日にうれしい、お手頃価格でお手軽サイズ</li><li>まごころおかず: 「ワタミの宅食」ロングセラー</li><li>まごころ御膳: これ一食で食事が完結。健康的な毎日の基本に</li><li>まごころダブル: 主菜が2つ、バランスも量もよくばりさんに</li><li>まごころ小箱: 食が細くなった方向け・小さくてもしっかり15品目</li><li>まごころ小箱（小）: 「まごころ小箱」でも多いという方に</li><li>ワタミdeおいしい健康: 食事管理が必要な方向け・糖尿病診療ガイドラインに配慮したお惣菜</li></ul>
        <p className="text-sm mb-6 leading-relaxed">商品ごとの量や評判は<Link href="/articles/watami-reviews/" className="text-accent underline">ワタミの宅食の口コミ・評判</Link>で詳しく扱っています。</p>
        <SectionHeading id="conditions">対象者・対象コース・除外される週</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>対象: 「ワタミの宅食」を初めて利用される方、または6ヵ月以上利用をお休みされている方</li><li>対象商品: まごころおかず・まごころ手鞠・まごころダブル・まごころ御膳・まごころ小箱・まごころ小箱（小）・ワタミdeおいしい健康（5日コースのみ）</li><li>対象コース: 日替わり5日間コース・日替わり7日間コース。「曜日を選べるコース」は週5日間以上の注文に限る</li><li>2週目以降は通常価格。1世帯1回限り。他のキャンペーンや割引との併用は不可</li><li>土日祝日分は割引の対象外。2026年5月4日週・9月21日週は対象外</li><li>予告なく中止する場合がある</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://www.watami-takushoku.co.jp/category/firstfree" target="_blank" rel="noopener noreferrer" className="text-accent underline">初回割引</a>（2026年11月25日確認）。</p>
        <SectionHeading id="order">注文の締切と届き方</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["注文の締切", "お届け開始日の前週水曜日まで（大型連休・年末年始は変更あり）"],
            ["締切後の変更・キャンセル", "お届け日2日前の午後5時までに、担当の「まごころスタッフ」または受付センターへ連絡"],
            ["届き方", "担当の「まごころスタッフ」が決まった時間帯に手渡しを基本にお届け。不在時は保冷ボックス"],
            ["保存", "冷蔵でお届け。召し上がるまで冷蔵庫で保管（御膳・小箱・小箱（小）は当日午後10時まで）"],
            ["支払い", "現金・口座引落し・クレジットカード（クレジットカードは公式サイトからの注文のみ）"],
            ["容器", "食べ終わった容器は水洗いしてまごころスタッフへ（回収してリサイクル）"],
            ["お休みの日", "5日間コースは土日祝日休み。7日間コースは土日祝日もお届け（日曜日分は土曜日にお届け）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式 <a href="https://www.watami-takushoku.co.jp/contents/bento-faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>・<a href="https://www.watami-takushoku.co.jp/contents/bento-flow" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご注文〜回収まで</a>（2026年11月25日確認）。</p>
        <p className="text-sm mb-6 leading-relaxed">注文後、ご注文確定日までに担当者から電話で内容の確認や集金の案内があります。お試しの1週間だけで終える場合は、次週分の注文をしなければ継続はしません（定期注文・リピート注文を設定した場合は、前週水曜日までに中止の連絡が必要です）。</p>
        <SectionHeading id="direct">「ワタミの宅食ダイレクト」のお試しとの違い</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">同じワタミグループの「ワタミの宅食ダイレクト」は冷凍弁当の通販で、お試しの形も違います。</p>
        <ComparisonTable
          headers={["項目", "ワタミの宅食（冷蔵・毎日お届け）", "ワタミの宅食ダイレクト（冷凍・宅配便）"]}
          rows={[
            ["お試しの形", "初回割引（1週間20%OFF）", "お試し割（いつでも三菜10食セット・初回のみ）"],
            ["価格（税込）", "5食 1,880円〜（まごころ小箱（小））", "10食 3,990円"],
            ["送料・宅配料", "価格に含む", "1注文 990円（本州・四国・九州）"],
            ["1食あたり（当サイト計算）", "376円〜", "498円（送料込み）"],
            ["届き方", "まごころスタッフが毎日手渡し", "冷凍でまとめて届く"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※ワタミの宅食ダイレクトの価格は公式の料金一覧（2026年10月30日確認）・送料は2026年10月1日改定後の額。詳しくは<Link href="/articles/watami-direct-otameshi/" className="text-accent underline">ワタミの宅食ダイレクトのお試しセット</Link>をご覧ください。</p>
        <p className="text-sm mb-6 leading-relaxed">毎日決まった時間に受け取れる方や、高齢の家族の見守りも兼ねたい方は冷蔵の「ワタミの宅食」、食べる日を自分で決めたい方は冷凍の「ダイレクト」が向いています。ほかの宅配弁当のお試しは<Link href="/articles/otameshi-set-osusume/" className="text-accent underline">宅配弁当のお試しセットおすすめ</Link>で比べられます。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ワタミの宅食のお試しは、初めて利用する方（または6ヵ月以上休んでいる方）向けの初回割引で、最初の1週間の5日間・7日間コースが20%OFFになります。もっとも安いのはまごころ小箱（小）の5日間1,880円で、宅配料は価格に含まれます。</p>
        <p className="text-sm mb-6 leading-relaxed">価格はお届け先や祝日の有無で変わります。ご注文前に、公式サイトで郵便番号を入力し、最新の価格と対象週をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食の口コミ・評判</Link></li>
            <li><Link href="/articles/watami-direct-otameshi/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食ダイレクトのお試しセット</Link></li>
            <li><Link href="/articles/watami-direct-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食ダイレクトの口コミ・評判</Link></li>
            <li><Link href="/articles/yoshikei-vs-watami/" className="text-accent hover:text-accent-dark transition-colors">ヨシケイとワタミの宅食を比較</Link></li>
            <li><Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark transition-colors">宅配弁当のお試しセットおすすめ</Link></li>
            <li><Link href="/articles/koureisha-osusume/" className="text-accent hover:text-accent-dark transition-colors">高齢者向けの宅配弁当</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書</Link></li>
            <li><Link href="/articles/gohan-tsukuritakunai-takuhai/" className="text-accent hover:text-accent-dark transition-colors">ご飯を作りたくない日に頼める宅配弁当（最短で届く日）</Link></li>
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
