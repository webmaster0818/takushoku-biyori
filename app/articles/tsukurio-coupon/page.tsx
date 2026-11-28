import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ツクリオ（旧つくりおき.jp）のクーポン・初回割引｜公式掲載のクーポンコード、友人紹介の特典、ポイントの使い方を確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "ツクリオ（旧つくりおき.jp）のクーポンと割引を、公式トップと公式ヘルプで整理しました。公式トップに初回用のクーポンコードと4人前プランの初回限定価格（4,000円引き）、ヘルプに友人紹介の特典（キャッシュバック4,000円・1,500ポイント）が掲載されています。プラン別の初回の金額を当サイトで計算しています。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/tsukurio-coupon/";
const OFFICIAL_URL = "https://www.tsukurioki.jp/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ツクリオ クーポン, ツクリオ クーポンコード, つくりおき.jp クーポン, ツクリオ 初回 割引, ツクリオ 紹介コード, ツクリオ 友人紹介, ツクリオ ポイント",
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
  { question: "ツクリオのクーポンコードはどこにありますか？", answer: "公式トップに、初回申し込み時に入力するクーポンコード「RC-2026WELCOME」が掲載されています（2026年11月16日確認）。コードは時期により変わることがあるため、申し込みの際は公式トップの表示をご確認ください。" },
  { question: "初回はいくら安くなりますか？", answer: "公式トップでは、4人前×週3食が初回6,690円（2回目以降10,690円）、4人前×週5食が初回12,960円（同16,960円）で、どちらも4,000円安くなっています。2人前プランには初回限定価格の表示はありません。" },
  { question: "友人紹介の特典は何ですか？", answer: "紹介された人に、初回キャッシュバック4,000円とツクリオポイント1,500ポイントが付与されます。紹介した人への特典はありません。" },
  { question: "紹介コードはだれでも発行できますか？", answer: "できません。公式ヘルプによると、不定期に開催されるキャンペーンに参加した会員か、特定の条件を満たした会員だけが紹介コードをシェアできます。" },
  { question: "つくりおき.jpのころに使ったことがあっても紹介コードは使えますか？", answer: "使えません。紹介コードは初回登録時のみ利用でき、過去にツクリオ（つくりおき.jp）に登録したことがある場合は対象外です。" },
  { question: "クーポンと紹介コードは併用できますか？", answer: "公式ヘルプに併用の可否は記載されていません（2026年11月16日確認）。申し込みの前にLINEのサポートで確認してください。" },
  { question: "初回だけで解約できますか？", answer: "できます。初回配達週の水曜日までに注文のキャンセルまたは退会（解約）をします。退会・入会の手数料はかかりません。" },
];

const sections = [
  { id: "list", label: "ツクリオで使える割引の一覧" },
  { id: "first", label: "初回のクーポンコードと初回限定価格" },
  { id: "calc", label: "プラン別：初回と2回目以降の金額（当サイト計算）" },
  { id: "referral", label: "友人紹介の特典と紹介コードの条件" },
  { id: "point", label: "ツクリオポイントの使い方と注意点" },
  { id: "once", label: "初回だけ試す場合の締切" },
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
          <span className="text-foreground">ツクリオのクーポン・初回割引</span>
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


export default function TsukurioCouponPage() {
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
      { "@type": "ListItem", position: 2, name: "クーポン・お試しセット" },
      { "@type": "ListItem", position: 3, name: "ツクリオのクーポン・初回割引" },
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
            <time dateTime="2026-11-16">公開: 2026年11月16日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            ツクリオ（2026年3月に「つくりおき.jp」から名称変更）は、調理済みの冷蔵おかずを毎週届けるサービスです（運営：株式会社Antway）。注文や変更はLINEで行います。
          </p>
          <p className="mb-3">
            割引は大きく3つあります。<strong>公式トップに掲載されている初回用のクーポンコード</strong>と4人前プランの初回限定価格、既存会員から紹介コードを受け取った場合の<strong>友人紹介の特典</strong>、キャンペーンで付与される<strong>ツクリオポイント</strong>です。この記事では、2026年11月16日に公式トップと公式ヘルプで確認した内容をもとに、それぞれの条件と、プラン別の初回の金額を整理しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">ツクリオのクーポン・割引の要点</p>
          <p className="text-sm leading-relaxed mb-4">公式トップには初回申し込み時に入力するクーポンコード「RC-2026WELCOME」と、4人前プランの初回限定価格（週3食 6,690円・週5食 12,960円＝通常より各4,000円安い）が掲載されています（2026年11月16日確認）。2人前プランには初回限定価格の表示はありません。友人紹介では、紹介された人に初回キャッシュバック4,000円と1,500ポイントが付与されます。ただし紹介コードを発行できるのはキャンペーン参加など条件を満たした会員だけです。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 確認できたこと</p>
              <ul className="space-y-1 list-disc list-inside"><li>公式トップに初回用のクーポンコードを掲載</li><li>4人前プランは初回が4,000円安い</li><li>退会・入会の手数料はかからない</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>2人前プランは初回限定価格の表示なし</li><li>紹介コードは発行できる会員が限られる</li><li>ポイントは有効期限あり・退会月末に消失</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ツクリオ 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="list">ツクリオで使える割引の一覧</SectionHeading>
        <ComparisonTable
          headers={["割引", "内容", "対象", "入手方法"]}
          rows={[
            ["初回クーポンコード", "公式トップに「初回お申し込み時に以下のクーポンコードをご入力ください」として「RC-2026WELCOME」を掲載", "初回申し込み", "公式トップでコピー"],
            ["初回限定特別価格", "4人前×週3食 6,690円／4人前×週5食 12,960円（2回目以降は10,690円／16,960円）", "4人前プランの初回", "公式トップに表示"],
            ["友人紹介", "初回キャッシュバック4,000円＋ツクリオポイント1,500ポイント（紹介された人のみ）", "新規登録・初回注文まで完了した人", "既存会員から紹介コード（英数字6桁）を受け取る"],
            ["ツクリオポイント", "1ポイント＝1円として注文金額から割引（決済後に返金）", "ポイントを持っている会員", "不定期のキャンペーン参加・条件達成"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.tsukurioki.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ツクリオ 公式トップ</a>・公式ヘルプ「<a href="https://www.tsukurioki.jp/help/%E5%8F%8B%E4%BA%BA%E7%B4%B9%E4%BB%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" target="_blank" rel="noopener noreferrer" className="text-accent underline">友人紹介について</a>」「<a href="https://www.tsukurioki.jp/help/%E3%83%84%E3%82%AF%E3%83%AA%E3%82%AA%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" target="_blank" rel="noopener noreferrer" className="text-accent underline">ツクリオポイントについて</a>」（2026年11月16日確認）。料金はすべて税込・送料込み（公式ヘルプ「料金はいくらですか？」）。</p>
        <p className="text-sm mb-6 leading-relaxed">公式ヘルプには、クーポンコードと友人紹介の特典を同時に使えるかどうかの記載はありません。両方を使いたい場合は、申し込みの前にLINEのサポートで確認すると確実です。</p>
        <SectionHeading id="first">初回のクーポンコードと初回限定価格</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>公式トップの申し込みボタンの近くに「初回お申し込み時に以下のクーポンコードをご入力ください」と書かれ、コード「RC-2026WELCOME」がタップでコピーできるようになっています</li><li>同じ公式トップの料金表では、4人前×週3食・週5食の2プランに「初回限定 特別価格」が表示されています</li><li>2人前×週3食（7,990円）・2人前×週5食（11,990円）には、初回限定価格の表示がありません</li><li>注文は公式LINEの友だち登録後に、LINE上で手続きします</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.tsukurioki.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ツクリオ 公式トップ</a>（2026年11月16日確認）。クーポンコードは時期により変わることがあります。申し込みの際は公式トップに表示されているコードをお使いください。</p>
        <p className="text-sm mb-6 leading-relaxed">公式トップには、クーポンコードの割引額や、コードと初回限定価格の関係（コードを入れると初回限定価格になるのか）までは書かれていません。初回の金額は、LINEで決済する前の注文確認画面で確かめてください。</p>
        <SectionHeading id="calc">プラン別：初回と2回目以降の金額（当サイト計算）</SectionHeading>
        <ComparisonTable
          headers={["プラン", "量", "初回（公式）", "2回目以降（公式）", "初回の差額", "1人前あたり（2回目以降）"]}
          rows={[
            ["4人前×週3食", "12食分", "6,690円", "10,690円", "4,000円安い", "約891円"],
            ["4人前×週5食", "20食分", "12,960円", "16,960円", "4,000円安い", "約848円"],
            ["2人前×週3食", "6食分", "表示なし", "7,990円", "−", "約1,332円"],
            ["2人前×週5食", "10食分", "表示なし", "11,990円", "−", "約1,199円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://www.tsukurioki.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">ツクリオ 公式トップ</a>（2026年11月16日確認・税込・送料込み）。4人前の内訳は大人2名・子ども2名、2人前は大人2人分です。差額と1人前あたりは公式の金額をもとにした当サイトの計算です。</p>
        <p className="text-sm mb-6 leading-relaxed">4人前は週3食でも週5食でも、初回の割引額は同じ4,000円です。そのため<strong>割引率で見ると週3食（約37%引き）のほうが大きく</strong>、週5食は約24%引きになります（当サイト計算）。初回で味や量を確かめてから週5食に増やす、という順番も選べます。</p>
        <SectionHeading id="referral">友人紹介の特典と紹介コードの条件</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式ヘルプの案内"]}
          rows={[
            ["紹介された人の特典", "初回キャッシュバック4,000円（初回の定額決済の完了後1週間以内）＋ツクリオポイント1,500ポイント（初回決済後の翌金曜日に付与）"],
            ["紹介した人の特典", "なし（「紹介したお客さまへの特典はございません」）"],
            ["コードの入力場所", "新規登録時の注文確認画面の下部"],
            ["コードを発行できる人", "不定期のキャンペーンに参加した会員、または特定の条件を満たした会員のみ"],
            ["使えない主な理由", "過去に登録したことがある／紹介者が退会している／有効期限切れ／入力間違い／他の人が使用済み（1コード1名）"],
            ["特典ポイントの有効期限", "付与からおよそ3ヶ月"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式ヘルプ「<a href="https://www.tsukurioki.jp/help/%E5%8F%8B%E4%BA%BA%E7%B4%B9%E4%BB%8B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" target="_blank" rel="noopener noreferrer" className="text-accent underline">友人紹介について</a>」（知人に紹介したいです。なにか特典はありますか？／紹介コードが使えません。なぜですか？／紹介コードはどこで手に入りますか？／特典で付与されたポイントの有効期限を教えてください）（2026年11月16日確認）。特典内容や付与タイミングはキャンペーン等により変更される場合があります。</p>
        <p className="text-sm mb-6 leading-relaxed">紹介コードは<strong>初回登録のときだけ</strong>使えます。旧「つくりおき.jp」の時代に一度でも登録したことがある場合は対象外です。知人に会員がいても、その人がコードを発行できる状態でなければ紹介は受けられません。</p>
        <SectionHeading id="point">ツクリオポイントの使い方と注意点</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>1ポイント＝1円として、注文金額の割引に使えます</li><li>割引は「決済後に返金」の形で、毎週木曜日の決済完了後にポイント利用数に応じて返金されます。明細への反映は1〜2ヶ月かかる場合があります</li><li>利用設定はLINEメニューの「注文内容の変更」→「ポイント利用設定」から。設定は毎週木曜0時に初期化されるため、決済週ごとに設定が必要です</li><li>ポイントには有効期限があり、期限を過ぎると自動で消えます</li><li>退会（解約）すると、その月末に保有ポイントが消えます。同じ月内に同じLINEアカウントで再登録した場合は、有効期限内のポイントを引き継げます</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: 公式ヘルプ「<a href="https://www.tsukurioki.jp/help/%E3%83%84%E3%82%AF%E3%83%AA%E3%82%AA%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" target="_blank" rel="noopener noreferrer" className="text-accent underline">ツクリオポイントについて</a>」（2026年11月16日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">友人紹介の1,500ポイントは付与からおよそ3ヶ月が期限です。毎週の設定を忘れると使わないまま期限が来るため、付与された週から設定しておくのが確実です。</p>
        <SectionHeading id="once">初回だけ試す場合の締切</SectionHeading>
        <ComparisonTable
          headers={["項目", "公式の案内"]}
          rows={[
            ["1回だけ注文したい場合", "初回配達週の水曜日までに、注文のキャンセルまたは退会（解約）をする"],
            ["注文・キャンセルの締切", "配達日の前週の水曜日中まで"],
            ["決済", "木曜日の朝。決済完了後のキャンセルは不可"],
            ["締切を過ぎた場合", "キャンセルできず、受け取れなかった場合も代金は全額かかる"],
            ["退会・入会の手数料", "かからない"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式ヘルプ「<a href="https://www.tsukurioki.jp/help/%E3%81%8A%E8%A9%A6%E3%81%97%E3%81%A7%E4%B8%80%E5%9B%9E%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E3%81%84" target="_blank" rel="noopener noreferrer" className="text-accent underline">お試しで一回利用したい</a>」・「<a href="https://www.tsukurioki.jp/help/%E3%81%8A%E6%94%AF%E6%89%95%E3%81%84%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" target="_blank" rel="noopener noreferrer" className="text-accent underline">お支払いについて</a>」（キャンセル期限が過ぎている場合、通常料金が全額かかりますか？／退会や入会に手数料はかかりますか？）・<a href="https://www.tsukurioki.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式トップのよくある質問</a>（2026年11月16日確認）。お盆や年末年始などは注文期限が変わる場合があります。</p>
        <p className="text-sm mb-6 leading-relaxed">初回のあとは、キャンセルや退会をしない限り毎週同じ時間帯に届きます。初回の割引で試すだけのつもりなら、<strong>初回配達週の水曜日</strong>を忘れないようにしてください。味や量の評判は<Link href="/articles/tsukurioki-jp-kuchikomi/" className="text-accent underline">ツクリオ（旧つくりおき.jp）の口コミ・評判</Link>で、ほかのサービスのお試しは<Link href="/articles/otameshi-set-osusume/" className="text-accent underline">宅配弁当のお試しセットまとめ</Link>で確認できます。</p>
        <OfficialButton>ツクリオ 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ツクリオの割引は、公式トップの初回クーポンコードと4人前プランの初回限定価格（4,000円引き）、条件を満たした会員からの友人紹介（キャッシュバック4,000円・1,500ポイント）、キャンペーンで付与されるポイントの3つです。2人前プランは初回限定価格の表示がなく、紹介コードはだれでも発行できるわけではない点に注意が必要です。初回だけ試す場合は、初回配達週の水曜日までに手続きを済ませてください。</p>
        <p className="text-sm mb-6 leading-relaxed">クーポン・特典の内容は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>ツクリオ 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/tsukurioki-jp-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">ツクリオ（旧つくりおき.jp）の口コミ・評判</Link></li>
            <li><Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark transition-colors">宅配弁当のお試しセットまとめ</Link></li>
            <li><Link href="/articles/chef-mutenka-tsukurioki-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">シェフの無添つくりおきの口コミ・評判</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
            <li><Link href="/articles/tsukurioki-takuhai/" className="text-accent hover:text-accent-dark transition-colors">作り置き惣菜の宅配2社を比較（ツクリオ・シェフの無添つくりおき）</Link></li>
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
