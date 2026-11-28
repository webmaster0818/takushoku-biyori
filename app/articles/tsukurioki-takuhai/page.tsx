import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "作り置き惣菜の宅配2社を比較｜ツクリオとシェフの無添つくりおきの1人前の料金・日持ち・締切【2026年11月】";
const ARTICLE_DESCRIPTION =
  "冷蔵の作り置き惣菜を週1回届けるツクリオとシェフの無添つくりおきを、プランごとの料金と1人前あたり（送料込み）、日持ち、注文・休止の締切、届くエリアで比較しました。同じ4人前×3食で比べた差も当サイトで計算しています（2026年11月28日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/tsukurioki-takuhai/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "つくりおき 宅配, 作り置き 宅配, 手作り惣菜 宅配, 作り置き 宅配 比較, つくりおき 宅配 料金, 作り置き惣菜 冷蔵 宅配",
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
  { question: "作り置きの宅配は何日もちますか？", answer: "ツクリオはお届け日を含み冷蔵で4日間（一部5日間の商品あり）、シェフの無添つくりおきはお届け日を含めた4日間（一部地域は3日間）です（2026年11月28日 公式）。" },
  { question: "1人前あたりはいくらですか？", answer: "2回目以降・送料込みで、ツクリオは848〜1,332円、シェフの無添つくりおきは1,027〜1,216円でした（当サイト計算）。ツクリオは料金に送料を含み、シェフの無添つくりおきは送料990円が別にかかります。" },
  { question: "2人暮らしでも使えますか？", answer: "ツクリオには2人前（大人2人分）×週3食・週5食のプランがあります。シェフの無添つくりおきのプランは3人前×2食分と4人前×3食分の2種類です。" },
  { question: "北海道や沖縄に届きますか？", answer: "ツクリオのパワーシールは日本全国（沖縄・離島など一部地域を除く）、シェフの無添つくりおきは北海道・沖縄を含む一部地域や離島には配送できないと公式に記載しています。郵便番号での確認をおすすめします。" },
  { question: "途中でやめられますか？", answer: "シェフの無添つくりおきは2回目以降いつでも休止（解約）でき、違約金はありません（手続きは次回お届け日の6日前まで）。ツクリオは注文・キャンセルの締切が配達日前週の水曜日中までで、お休み週の設定もできます。" },
];

const sections = [
  { id: "answer", label: "2社の違い（早見表）" },
  { id: "price", label: "プラン別の料金と1人前あたり（当サイト計算）" },
  { id: "same", label: "同じ4人前×3食で比べた場合" },
  { id: "keep", label: "日持ちと食べ切り方" },
  { id: "rule", label: "注文・休止の締切と届くエリア" },
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
          <Link href="/articles/#hikaku" className="text-foreground/70 hover:text-accent transition-colors">比較・料金データ</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">作り置き惣菜の宅配2社</span>
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



export default function TsukuriokiTakuhaiPage() {
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
      { "@type": "ListItem", position: 2, name: "比較・料金データ" },
      { "@type": "ListItem", position: 3, name: "作り置き惣菜の宅配2社" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">比較・料金データ</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-28">公開: 2026年11月28日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            作り置き惣菜の宅配は、調理済みの主菜・副菜が<strong>冷蔵で週1回まとめて届き</strong>、数日に分けて食べる仕組みです。1食ずつ容器に入った冷凍弁当とは違い、家族の人数分を取り分けて食べることを前提にしています。
          </p>
          <p>
            このページでは、全国（一部地域を除く）に届ける2社、ツクリオ（旧つくりおき.jp）とシェフの無添つくりおきを、公式サイトの料金・日持ち・締切（2026年11月28日確認）で比較しました。1人前あたりの金額は、送料を含めて当サイトで計算しています。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">作り置き惣菜の宅配（要点）</p>
          <p className="text-sm leading-relaxed mb-4">1人前あたり（2回目以降・送料込み）は、ツクリオが891円〜1,332円、シェフの無添つくりおきが1,027円〜1,216円です。同じ4人前×3食では、ツクリオ10,690円（送料込み）とシェフの無添つくりおき14,597円（送料990円込み）で、1回あたり3,907円の差でした。日持ちはどちらもお届け日を含めて4日間です。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 公式で確認できた点</p>
              <ul className="space-y-1 list-disc list-inside"><li>どちらも主菜・副菜が人数分まとめて届き、温めるだけ</li><li>ツクリオは料金に送料を含み、2人前のプランがある</li><li>シェフの無添つくりおきは初回26%OFF・送料無料</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>日持ちはお届け日を含め4日間（シェフは一部地域3日間）</li><li>どちらもメニューはおまかせで、アレルギー対応の確認が必要</li><li>初回分はキャンセルできない（シェフ）・前週水曜締切（ツクリオ）</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">2社の違い（早見表）</SectionHeading>
        <ComparisonTable
          headers={["項目", "ツクリオ", "シェフの無添つくりおき"]}
          rows={[
            ["プラン", "2人前・4人前 × 週3食・週5食（4種類）", "3人前×2食分・4人前×3食分（2種類）"],
            ["人数の想定（公式）", "4人前＝大人2名子供2名、2人前＝大人2人分", "3人前＝大人2名・小さなお子様1名、4人前＝大人2名・小人2名"],
            ["料金（2回目以降・税込）", "7,990〜16,960円（送料込み）", "5,173円・13,607円＋送料990円"],
            ["初回", "4人前プランに初回価格（6,690円・12,960円）", "26%OFF（3,799円・9,980円）・送料無料"],
            ["日持ち（公式）", "お届け日を含み冷蔵で4日間（一部5日間の商品あり）", "お届け日を含めた4日間（一部地域は3日間）"],
            ["注文・休止の締切", "配達日前週の水曜日中まで", "次回お届け日の6日前まで（九州・島根県・青森県は7日前）"],
            ["届くエリア", "通常品＝東京23区、パワーシール＝日本全国（沖縄・離島など一部地域を除く）", "北海道・沖縄を含む一部地域や離島は配送不可"],
            ["注文方法", "LINEで友だち登録して注文", "公式サイトで定期購入"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.tsukurioki.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ツクリオ 公式</a>（料金欄・よくあるご質問）・<a href="https://www.tsukurioki.jp/help/%E6%96%99%E7%90%86%E3%81%AF%E3%81%A9%E3%82%8C%E3%81%8F%E3%82%89%E3%81%84%E3%81%AE%E6%9C%9F%E9%96%93%E4%BF%9D%E5%AD%98%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B" target="_blank" rel="noopener noreferrer" className="text-accent underline">ヘルプ（保存期間）</a>・<a href="https://www.tsukurioki.jp/help/%E9%85%8D%E9%80%81%E6%96%99%E9%87%91%E3%81%AF%E3%81%8B%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%99%E3%81%8B" target="_blank" rel="noopener noreferrer" className="text-accent underline">ヘルプ（配送料金）</a>／<a href="https://store.tavenal.com/tsukurioki/" target="_blank" rel="noopener noreferrer" className="text-accent underline">シェフの無添つくりおき 公式</a>・<a href="https://store.tavenal.com/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">よくある質問</a>（いずれも2026年11月28日確認・税込）。</p>
        <SectionHeading id="price">プラン別の料金と1人前あたり（当サイト計算）</SectionHeading>
        <ComparisonTable
          headers={["プラン", "初回（税込）", "2回目以降（税込）", "送料", "1人前あたり（2回目以降・送料込み）"]}
          rows={[
            ["ツクリオ 2人前×週3食", "初回価格の掲載なし", "7,990円", "込み", "1,332円"],
            ["ツクリオ 2人前×週5食", "初回価格の掲載なし", "11,990円", "込み", "1,199円"],
            ["ツクリオ 4人前×週3食", "6,690円（初回）", "10,690円", "込み", "891円"],
            ["ツクリオ 4人前×週5食", "12,960円（初回）", "16,960円", "込み", "848円"],
            ["シェフの無添つくりおき 食卓サポートプラン（3人前×2食分）", "3,799円（初回・送料無料）", "5,173円", "990円", "1,027円"],
            ["シェフの無添つくりおき 食卓おまかせプラン（4人前×3食分）", "9,980円（初回・送料無料）", "13,607円", "990円", "1,216円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※1人前あたり＝（2回目以降の料金＋送料）÷（人前×食数）で当サイトが計算し、1円未満を四捨五入。ツクリオは「プラン料金に配送料金も含んでおります」（公式ヘルプ）。ツクリオの公式表示の「1食あたり」（2人前×週3食 1,332円 など）も同じ計算です。</p>
        <p className="text-sm mb-6 leading-relaxed">ツクリオは人数が多く食数が多いプランほど1人前が安くなり、4人前×週5食では848円です。シェフの無添つくりおきは送料990円が毎回かかるため、食数の少ない食卓サポートプランでは送料の比重が大きくなります（6人前で1人前あたり165円分）。</p>
        <SectionHeading id="same">同じ4人前×3食で比べた場合</SectionHeading>
        <ComparisonTable
          headers={["項目", "ツクリオ 4人前×週3食", "シェフの無添つくりおき 食卓おまかせプラン"]}
          rows={[
            ["届く量（公式）", "4人前×3食分", "4人前×3食分（主菜3種〈各2パック〉＋副菜6種）"],
            ["2回目以降の1回（送料込み）", "10,690円", "14,597円"],
            ["1人前あたり", "891円", "1,216円"],
            ["4週間（4回）の合計", "42,760円", "58,388円"],
            ["初回", "6,690円（送料込み）", "9,980円（送料無料）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※当サイトの計算。4週間の合計は2回目以降の料金で4回分を計算した参考値です（初回価格・クーポンは含めていません）。ツクリオの4人前は大人2名子供2名、シェフの無添つくりおきの4人前は大人2名・小人2名の想定です。</p>
        <p className="text-sm mb-6 leading-relaxed">同じ人数・食数では、2回目以降の1回あたりでシェフの無添つくりおきが3,907円高く、4週間では15,628円の差になります。シェフの無添つくりおきは保存料などの添加物を使わない調理を特徴にしています（公式FAQ）。料金だけでなく、こうした方針や届くエリアもあわせて比べてください。各社の詳しい内容は<Link href="/articles/tsukurioki-jp-kuchikomi/" className="text-accent underline">ツクリオの口コミ・評判</Link>・<Link href="/articles/chef-mutenka-tsukurioki-kuchikomi/" className="text-accent underline">シェフの無添つくりおきの口コミ・評判</Link>で解説しています。</p>
        <SectionHeading id="keep">日持ちと食べ切り方</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>ツクリオ: 通常品・パワーシールとも、お届け日を含み冷蔵で4日間（パワーシールは配達当日に受け取った場合）。一部「お届け日を含めて5日間」の商品が届く場合がある</li><li>ツクリオの5食プラン: 消費期限は4日間。公式ヘルプは「5日目にお召し上がりになるものについては、冷凍保存いただけたら幸い」と案内。容器はそのまま冷凍・加熱が可能</li><li>シェフの無添つくりおき: お届け日を含めた4日間（一部地域は3日間）。窒素充填と急速冷却で日持ちさせていると公式FAQに記載。一部のメニューを除き冷凍保存も可能（公式トップ）</li></ul>
        <ComparisonTable
          headers={["受け取り日", "4日間で食べ切る最終日", "週5食プランの5日目"]}
          rows={[
            ["月曜", "木曜", "金曜分は冷凍しておく"],
            ["水曜", "土曜", "日曜分は冷凍しておく"],
            ["土曜", "火曜", "水曜分は冷凍しておく"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※当サイトの整理（お届け日を含めて4日間の場合）。シェフの無添つくりおきの一部地域（3日間）では最終日が1日早くなります。</p>
        <p className="text-sm mb-6 leading-relaxed">冷蔵の作り置きと、冷凍弁当・当日届くお弁当の日持ちの違いは<Link href="/articles/souzai-takuhai/" className="text-accent underline">惣菜の宅配（冷蔵と冷凍の違い）</Link>で比べています。</p>
        <SectionHeading id="rule">注文・休止の締切と届くエリア</SectionHeading>
        <SubHeading>ツクリオ</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>注文・キャンセル: 配達日前週の水曜日中まで。決済は毎週木曜日の朝7時〜8時（クレジットカード）で、決済完了後のキャンセルはできない</li><li>初回注文以降は、キャンセルや退会をしない限り毎週同じ時間に配達。お休み週の設定ができる</li><li>エリア: 通常品は東京都（23区）、パワーシールは日本全国（沖縄・離島など一部地域を除く）。パッケージが変わる場合は配達週の前週金曜日にLINEで案内</li><li>出典: <a href="https://www.tsukurioki.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 よくあるご質問</a></li></ul>
        <p className="text-sm mb-6 leading-relaxed">初回のクーポンは<Link href="/articles/tsukurio-coupon/" className="text-accent underline">ツクリオのクーポン</Link>にまとめています。</p>
        <SubHeading>シェフの無添つくりおき</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>毎週の定期購入で、購入回数の制限なし。初回のお届け分はキャンセル不可、2回目以降はいつでも休止（解約）でき、違約金はない</li><li>スキップ・休止の手続き: 次回お届け日の6日前まで（九州地方・島根県・青森県は7日前まで）</li><li>エリア: 北海道・沖縄を含む一部地域や離島は配送できない。郵便番号で事前に確認できる</li><li>アレルギー対応は行っておらず、メニューの変更や食材の除去・代替もできない。マイページで3〜4週分のメニュー・原材料を確認できる</li><li>出典: <a href="https://store.tavenal.com/faq" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式 よくある質問</a></li></ul>
        <SectionHeading id="choose">選ぶときの確認ポイント</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>人数: 2人暮らしならツクリオの2人前プラン、子どもがいる3人家族ならシェフの食卓サポートプランが想定に近い</li><li>食数: 週5食はツクリオのみ（5日目分は冷凍が前提）</li><li>送料: ツクリオは料金に含む・シェフは毎回990円</li><li>エリア: 北海道はシェフの配送不可、沖縄・離島はどちらも一部不可</li><li>受け取り: お届け日を含め4日間で食べ切れる曜日に受け取れるか</li></ul>
        <p className="text-sm mb-6 leading-relaxed">1食ずつ容器に入った冷凍弁当と比べたい場合は<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅食料金白書</Link>、共働き家庭の使い方は<Link href="/articles/kyoudoki-yushoku-takuhai/" className="text-accent underline">共働き世帯の宅配弁当の使い方</Link>をご覧ください。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">作り置き惣菜の宅配は、冷蔵の主菜・副菜が週1回まとめて届き、お届け日を含めて4日間で食べる仕組みです。料金は送料込みで比べると、同じ4人前×3食ではツクリオの方が1回あたり約3,900円安く、シェフの無添つくりおきは保存料などの添加物を使わない調理（公式FAQ）と初回26%OFFが特徴です。2人暮らしや週5食ならツクリオ、北海道ではどちらも条件の確認が必要です。</p>
        <p className="text-sm mb-6 leading-relaxed">料金・エリア・締切は変わることがあります。ご利用前に、各社の公式サイトで最新の情報をご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/tsukurioki-jp-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ツクリオ（旧つくりおき.jp）の口コミ・評判</Link></li>
            <li><Link href="/articles/chef-mutenka-tsukurioki-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">シェフの無添つくりおきの口コミ・評判</Link></li>
            <li><Link href="/articles/tsukurio-coupon/" className="text-accent hover:text-accent-dark transition-colors">ツクリオのクーポン</Link></li>
            <li><Link href="/articles/souzai-takuhai/" className="text-accent hover:text-accent-dark transition-colors">惣菜の宅配は冷蔵と冷凍でどう違う？</Link></li>
            <li><Link href="/articles/gohan-tsukuritakunai-takuhai/" className="text-accent hover:text-accent-dark transition-colors">ご飯を作りたくない日に頼める宅配弁当</Link></li>
            <li><Link href="/articles/kyoudoki-yushoku-takuhai/" className="text-accent hover:text-accent-dark transition-colors">共働き世帯の平日夕食に宅配弁当を使う</Link></li>
            <li><Link href="/articles/mutenka-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">無添加の宅配弁当</Link></li>
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
