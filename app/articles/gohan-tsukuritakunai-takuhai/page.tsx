import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ご飯を作りたくない日に頼める宅配弁当｜注文から最短で届く日と1食の料金を5社の公式ルールで比較【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ご飯を作りたくないときに頼める宅配弁当5社（宅配クック123・ライフデリ・ワタミの宅食・ワタミの宅食ダイレクト・食宅便）を、注文の締切と最短で届く日、送料込みの1食の料金で比較しました。注文した曜日ごとの最短お届け日も計算しています（2026年11月28日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/gohan-tsukuritakunai-takuhai/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ご飯作りたくない, ご飯 作りたくない 宅配, 夕飯 作りたくない 宅配弁当, 料理したくない 宅配, 宅配弁当 すぐ届く, 宅配弁当 翌日",
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
  { question: "今日注文して今日届く宅配弁当はありますか？", answer: "今回確認した5社（宅配クック123・ライフデリ・ワタミの宅食・ワタミの宅食ダイレクト・食宅便）には、当日の注文で当日に届くサービスはありませんでした。最短は、前日17時（宅配クック123）・前日18時（ライフデリ）までの注文で翌日からです（2026年11月28日確認）。" },
  { question: "1食だけ頼むことはできますか？", answer: "宅配クック123とライフデリは1食から配達しています。冷凍弁当のワタミの宅食ダイレクト・食宅便はセット単位（7食・10食など）での注文です。" },
  { question: "土曜日に注文すると、いつから届きますか？", answer: "当サイトの計算では、11月28日（土）の注文で、宅配クック123・ライフデリは翌日（店舗の配達日による）、ワタミの宅食ダイレクトは12月1日〜3日、食宅便は12月2日以降、ワタミの宅食は12月2日（水）の確定を経て12月7日（月）からです。" },
  { question: "店舗配達のお弁当は翌日まで取っておけますか？", answer: "宅配クック123とライフデリは、昼食は14時頃まで・夕食は20時頃までに食べるよう案内しています。ワタミの宅食は商品によって当日午後10時まで、または翌日午後3時までです。取っておきたい場合は冷凍弁当が向いています。" },
  { question: "送料はかかりますか？", answer: "宅配クック123は配達料なし（お弁当代のみ）、ライフデリは宅配料無料、ワタミの宅食は1食の価格に宅配料を含みます。冷凍弁当はワタミの宅食ダイレクトが990円（北海道1,320円・沖縄2,420円）、食宅便が都度便1,330円・定期便940円です。" },
];

const sections = [
  { id: "answer", label: "最短で届く日と1食の料金（5社の早見表）" },
  { id: "week", label: "注文した曜日ごとの最短お届け日（当サイト計算）" },
  { id: "price", label: "送料込みの1食の料金" },
  { id: "services", label: "5社の注文ルール" },
  { id: "choose", label: "作りたくない日が続くときの組み合わせ方" },
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
          <span className="text-foreground">ご飯を作りたくない日の宅配弁当</span>
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



export default function GohanTsukuritakunaiTakuhaiPage() {
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
      { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介" },
      { "@type": "ListItem", position: 3, name: "ご飯を作りたくない日の宅配弁当" },
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
            <time dateTime="2026-11-28">公開: 2026年11月28日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ご飯を作りたくないときに宅配弁当を頼む場合、いちばん差が出るのは<strong>注文してから何日で届くか</strong>です。地域の店舗が毎日届けるお弁当は前日夕方までの注文で翌日から届き、冷凍弁当の宅配は最短で3〜4日後、ワタミの宅食は翌週の月曜からになります。
          </p>
          <p className="mb-3">
            このページでは、5社の公式サイトに書かれた注文の締切と最短のお届け日（2026年11月28日確認）をそろえ、注文した曜日ごとに最短でいつ届くかを当サイトで計算しました。送料込みの1食の料金もあわせて載せています。
          </p>
          <p>お届けできる地域・曜日は店舗や住所によって異なります。実際のお届け日は、各社の注文画面でご確認ください。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ご飯を作りたくない日の宅配弁当（要点）</p>
          <p className="text-sm leading-relaxed mb-4">翌日に届くのは、地域の店舗が配達する宅配クック123（前日17時締切）とライフデリ（前日18時締切）です。冷凍弁当はワタミの宅食ダイレクトが最短3〜5日後、食宅便が最短4日後。ワタミの宅食は毎週水曜が翌週分の注文確定日で、11月28日（土）に注文すると12月7日（月）からのお届けです。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式で確認できた点</p>
              <ul className="space-y-1 list-disc list-inside"><li>宅配クック123・ライフデリは1食から、翌日から届く</li><li>冷凍弁当は届いた後に冷凍庫でストックできる</li><li>送料込みの1食は470〜890円の範囲（今回の商品）</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>当日の注文で当日に届くサービスは、今回の5社にはない</li><li>店舗配達のお弁当は当日中（夕食は20時頃まで）に食べる</li><li>配達できる地域・曜日は店舗・住所で異なる</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">最短で届く日と1食の料金（5社の早見表）</SectionHeading>
        <ComparisonTable
          headers={["サービス", "届き方", "注文の締切・最短のお届け", "最低注文", "1食の料金（税込・送料込）"]}
          rows={[
            ["宅配クック123", "地域の店舗が手渡し", "前日17時まで → 翌日から", "1食から", "685円（普通食・ごはん付き）"],
            ["ライフデリ", "地域の店舗が配達", "前日18時まで → 翌日から（在庫に欠品がなければ）", "1食から", "486〜780円（普通食・地域による）"],
            ["ワタミの宅食", "まごころスタッフが手渡し（冷蔵）", "毎週水曜が翌週分の確定日 → 翌週月曜から", "1人用から（5日間コース等）", "470〜790円（5日間コース）"],
            ["ワタミの宅食ダイレクト", "冷凍宅配便", "最短3〜5日後（都道府県による）", "7食・10食セット等", "498円〜（お試し割10食＋送料）"],
            ["食宅便", "冷凍宅配便", "最短4日後〜最長7日後で指定", "5食・7食セット", "824円〜（7食定期＋送料）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※各社公式サイトで2026年11月28日に確認。料金の内訳は「送料込みの1食の料金」に記載しています。ライフデリの料金は都道府県別ページ43件を当サイトが2026年11月25日に集計した普通食の範囲です。</p>
        <p className="text-sm mb-6 leading-relaxed">「今日はもう作りたくない」という日に間に合うサービスは、今回確認した5社にはありません。翌日以降に作らずに済ませたい場合は、前日の夕方までに店舗配達のお弁当を頼むのが最短です。届くまでの日数を気にせず使いたい場合は、冷凍弁当を数食ストックしておく方法があります（<Link href="/articles/reitouko-chiisai-takuhai-bento/" className="text-accent underline">冷凍庫が小さい場合の宅配弁当</Link>も参考になります）。</p>
        <SectionHeading id="week">注文した曜日ごとの最短お届け日（当サイト計算）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">各社の公式ルールをカレンダーに当てはめ、2026年11月30日（月）〜12月6日（日）の各曜日に注文した場合の最短のお届け日を計算しました。</p>
        <ComparisonTable
          headers={["注文した日", "宅配クック123・ライフデリ", "ワタミの宅食ダイレクト", "食宅便", "ワタミの宅食"]}
          rows={[
            ["11/30（月）", "12/1（火）", "12/3（木）〜12/5（土）", "12/4（金）", "12/7（月）"],
            ["12/1（火）", "12/2（水）", "12/4（金）〜12/6（日）", "12/5（土）", "12/7（月）"],
            ["12/2（水）", "12/3（木）", "12/5（土）〜12/7（月）", "12/6（日）", "12/7（月）（水曜の確定に間に合った場合）"],
            ["12/3（木）", "12/4（金）", "12/6（日）〜12/8（火）", "12/7（月）", "12/14（月）"],
            ["12/4（金）", "12/5（土）", "12/7（月）〜12/9（水）", "12/8（火）", "12/14（月）"],
            ["12/5（土）", "12/6（日）", "12/8（火）〜12/10（木）", "12/9（水）", "12/14（月）"],
            ["12/6（日）", "12/7（月）", "12/9（水）〜12/11（金）", "12/10（木）", "12/14（月）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※当サイトの計算。宅配クック123は前日17時、ライフデリは前日18時までの注文を前提にしています。店舗の配達日（日曜・祝日など）によっては翌日に届かない場合があります。ワタミの宅食ダイレクトは公式FAQの「最短で3～5日後」、食宅便は「ご注文日より最短4日後」を当てはめました。ワタミの宅食は「毎週水曜日が翌週分のご注文確定日」「ご注文確定日（お届け開始日の前週の水曜日）」から計算しています（水曜当日の締切時刻は公式に記載がありません）。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>ワタミの宅食は、木曜〜日曜に注文すると最初のお届けまで8〜11日かかります。月曜・火曜の注文がいちばん早く始まります</li><li>冷凍弁当の2社は、注文の曜日に関係なく3〜5日後です。週末に注文すると、翌週の半ばに届きます</li><li>宅配クック123・ライフデリは、配達する曜日（毎日または指定の日）を店舗と相談して決めます</li></ul>
        <SectionHeading id="price">送料込みの1食の料金</SectionHeading>
        <ComparisonTable
          headers={["サービス・商品", "料金（税込）", "送料・配達料", "1食あたり（送料込み）"]}
          rows={[
            ["宅配クック123 普通食", "ごはん付き685円・おかずのみ577円", "なし（お弁当代のみ）", "685円／577円"],
            ["宅配クック123 カロリー・塩分調整食", "ごはん付き885円・おかずのみ777円", "なし", "885円／777円"],
            ["ライフデリ 普通食", "486〜780円（都道府県による）", "宅配料無料", "486〜780円"],
            ["ワタミの宅食 5日間コース（7商品）", "2,350〜3,950円（1食470〜790円）", "1食の価格に宅配料を含む", "470〜790円"],
            ["ワタミの宅食ダイレクト いつでも三菜 お試し割", "10食3,990円", "990円（北海道1,320円・沖縄2,420円）", "498円"],
            ["ワタミの宅食ダイレクト いつでも三菜 都度", "7食4,023円・10食4,890円", "990円", "716円（7食）・588円（10食）"],
            ["食宅便 おまかせコース", "7食4,830円", "都度便1,330円・らくらく定期便940円", "880円（都度）・824円（定期）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://takuhaicook123.jp/menu" target="_blank" rel="noopener noreferrer" className="text-accent underline">宅配クック123 お弁当の種類</a>・<a href="https://takuhaicook123.jp/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a>（「会費とか配達料とかかかるの？」→「いいえ。お弁当代のみです。」）、<a href="https://www.watami-takushoku.co.jp/category/bento2" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食 お弁当・お惣菜</a>、<a href="https://www.watami-takushoku-direct.jp/shop/pages/prices" target="_blank" rel="noopener noreferrer" className="text-accent underline">ワタミの宅食ダイレクト 料金一覧</a>、<a href="http://shokutakubin.com/shop/pages/guide_03.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">食宅便 ご利用ガイド</a>・<a href="http://shokutakubin.com/shop/default.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">トップ</a>（いずれも2026年11月28日確認）、ライフデリは都道府県別ページ（2026年11月25日に当サイト集計）。1食あたりは（料金＋送料）÷食数で当サイトが計算し、1円未満を四捨五入しています。</p>
        <p className="text-sm mb-6 leading-relaxed">送料込みで比べると、今回の商品の1食は470〜890円の範囲でした。店舗配達の2社は送料がかからず1食から頼めるため、作りたくない日だけ頼む使い方にも向いています。ワタミの宅食ダイレクトのお試し割は初めての方限定です（詳しくは<Link href="/articles/watami-direct-kuchikomi/" className="text-accent underline">ワタミの宅食ダイレクトの口コミ・評判</Link>）。</p>
        <SectionHeading id="services">5社の注文ルール</SectionHeading>
        <SubHeading>宅配クック123（店舗が手渡し）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>注文・キャンセルは前日17時まで（電話は「前日の夕方までに」と案内）</li><li>年齢制限・最低注文数なし、1食から配達</li><li>お届け日は「毎日」または「指定の日」から選ぶ</li><li>お弁当は昼食14時頃まで・夕食20時頃までに食べる（翌日に持ち越さない）</li><li>出典: <a href="https://takuhaicook123.jp/about/order" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 ご注文方法</a>・<a href="https://takuhaicook123.jp/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくあるご質問</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">料金や店舗ごとの違いは<Link href="/articles/takuhai-cook123-kuchikomi/" className="text-accent underline">宅配クック123の口コミ・評判</Link>で解説しています。</p>
        <SubHeading>ライフデリ（店舗が配達）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>個人の場合、在庫に欠品がなければ注文の翌日から開始できる。締切は前日18時</li><li>お店があるエリアなら1食から配達</li><li>キャンセルは利用前日の18時まで無料</li><li>昼食は14時まで・夕食は20時までに食べる</li><li>出典: <a href="https://www.lifedeli.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式トップ（よくある質問）</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">都道府県ごとの料金は<Link href="/articles/lifedeli-kuchikomi/" className="text-accent underline">ライフデリの口コミ・評判</Link>にまとめています。</p>
        <SubHeading>ワタミの宅食（冷蔵・手渡し）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>毎週水曜日が翌週分の注文確定日。確定日までに注文内容の確認と集金の案内が電話で届く</li><li>1人用から注文可。日替わり5日間コース（土日祝休み）・7日間コース・曜日を選べるコース</li><li>締切後の追加・変更・キャンセルは、お届け日2日前の午後5時まで（平日9〜17時受付）</li><li>「まごころ御膳」「まごころ小箱」は当日午後10時まで、「まごころおかず」「まごころ手鞠」などは翌日午後3時までに食べる</li><li>出典: <a href="https://www.watami-takushoku.co.jp/contents/bento-flow" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 ご注文〜回収まで</a>・<a href="https://www.watami-takushoku.co.jp/category/bento2" target="_blank" rel="noopener noreferrer" className="text-accent underline">お弁当・お惣菜</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">初めての方向けの割引は<Link href="/articles/watami-takushoku-otameshi/" className="text-accent underline">ワタミの宅食のお試し</Link>、サービス全体は<Link href="/articles/watami-reviews/" className="text-accent underline">ワタミの宅食の口コミ・評判</Link>をご覧ください。</p>
        <SubHeading>ワタミの宅食ダイレクト（冷凍）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>最短のお届けは、都道府県によって3〜5日後（離島等はさらに日数を要する場合あり）</li><li>お届け日時の指定は最短3日後から</li><li>定期購入の初回分は、注文完了と同時に確定（変更不可）</li><li>出典: <a href="https://www.watami-takushoku-direct.jp/shop/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 よくあるご質問</a></li></ul>
        <SubHeading>食宅便（冷凍）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>注文日から最短4日後〜最長7日後までのお届け日時を指定できる</li><li>配送料は1梱包につき都度便1,330円・らくらく定期便940円（1梱包2セットまで）</li><li>出典: <a href="http://shokutakubin.com/shop/pages/guide_03.aspx" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 ご利用ガイド</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">コースの違いは<Link href="/articles/shokutakubin-reviews/" className="text-accent underline">食宅便の口コミ・評判</Link>で解説しています。</p>
        <SectionHeading id="choose">作りたくない日が続くときの組み合わせ方</SectionHeading>
        <ComparisonTable
          headers={["状況", "向いている頼み方", "理由（公式のルール）"]}
          rows={[
            ["明日の夕食から作りたくない", "宅配クック123・ライフデリ", "前日17時・18時までの注文で翌日から届く"],
            ["来週の平日を作らずに済ませたい", "ワタミの宅食（水曜までに注文）", "水曜が翌週分の確定日。平日5日間のコースがある"],
            ["作りたくない日がいつ来るか分からない", "冷凍弁当をストック", "届いた後は冷凍庫で保存でき、食べる日を選べる"],
            ["家族の分もまとめて減らしたい", "作り置き惣菜の宅配", "冷蔵の惣菜が週1回まとめて届く（お届け日を含め4日間など）"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">冷蔵と冷凍の違いは<Link href="/articles/souzai-takuhai/" className="text-accent underline">惣菜の宅配（冷蔵と冷凍の違い）</Link>、家族向けの作り置きは<Link href="/articles/tsukurioki-takuhai/" className="text-accent underline">作り置き惣菜の宅配2社の比較</Link>で詳しく比べています。共働きで平日の夕食を減らしたい場合は<Link href="/articles/kyoudoki-yushoku-takuhai/" className="text-accent underline">共働き世帯の宅配弁当の使い方</Link>もあわせてご覧ください。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ご飯を作りたくない日に宅配弁当を頼むなら、まず「いつから届くか」で選ぶのが現実的です。翌日から作らずに済ませたい場合は、前日の夕方までに宅配クック123かライフデリへ。来週の平日をまとめて任せたい場合は、水曜日までにワタミの宅食へ。いつ作りたくなくなるか分からない場合は、冷凍弁当を数食ストックしておく方法があります。</p>
        <p className="text-sm mb-6 leading-relaxed">配達できる地域・曜日、料金は店舗や住所によって異なり、変わることもあります。ご利用前に、各社の公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/souzai-takuhai/" className="text-accent hover:text-accent-dark transition-colors">惣菜の宅配は冷蔵と冷凍でどう違う？</Link></li>
            <li><Link href="/articles/tsukurioki-takuhai/" className="text-accent hover:text-accent-dark transition-colors">作り置き惣菜の宅配2社を比較</Link></li>
            <li><Link href="/articles/kyoudoki-yushoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">共働き世帯の平日夕食に宅配弁当を使う</Link></li>
            <li><Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark transition-colors">一人暮らしにおすすめの宅食・宅配弁当</Link></li>
            <li><Link href="/articles/takuhai-cook123-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">宅配クック123の口コミ・評判</Link></li>
            <li><Link href="/articles/lifedeli-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ライフデリの口コミ・評判</Link></li>
            <li><Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食の口コミ・評判</Link></li>
            <li><Link href="/articles/watami-direct-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ワタミの宅食ダイレクトの口コミ・評判</Link></li>
            <li><Link href="/articles/shokutakubin-reviews/" className="text-accent hover:text-accent-dark transition-colors">食宅便の口コミ・評判</Link></li>
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
