import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "nosh（ナッシュ）の支払い方法は3つ｜クレジットカード・コンビニ後払い・Apple Pay、決済のタイミングと手数料【2026年11月】";
const ARTICLE_DESCRIPTION =
  "nosh（ナッシュ）の支払い方法を公式FAQと特定商取引法に基づく表記で確認。クレジットカード・コンビニ後払い（手数料249円）・Apple Payの3つで、代引き・Amazon Pay等は新規受付終了。決済のタイミングや決済エラー時の扱いもまとめました（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/nosh-shiharai-houhou/";
const OFFICIAL_URL = "https://t.felmat.net/fmcl?ak=B6814F.1.5108619M.B1357443";
const OFFICIAL_IMP = "https://t.felmat.net/fmimp/B6814F.5108619M.B1357443";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "ナッシュ 支払い方法, nosh 支払い方法, ナッシュ コンビニ払い, ナッシュ 後払い, ナッシュ 代引き, ナッシュ Apple Pay, ナッシュ 決済 タイミング, ナッシュ 領収書",
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
  { question: "ナッシュは代引きで払えますか？", answer: "代金引換は現在、新規の申し込みを受け付けていません（2026年11月25日時点の特定商取引法に基づく表記）。これから始める場合は、クレジットカード・コンビニ後払い・Apple Payのいずれかです。" },
  { question: "クレジットカードがなくても注文できますか？", answer: "コンビニ後払いを選べば注文できます。手数料は1決済ごとに249円（税込）で、払込票の発行日から14日以内にコンビニで支払います。お届けのたびに後払い会社の審査があります。" },
  { question: "Amazon PayやPayPayは使えますか？", answer: "Amazon Pay・PayPal・d払いは新規の申し込みを受け付けていません。PayPayは公式の支払い方法に記載がありません。なお、コンビニ後払いの払込票は、ファミペイや楽天ペイなどのアプリでも支払えます。" },
  { question: "お金はいつ引き落とされますか？", answer: "初回（新規注文）は注文と同時に決済されます。2回目以降の定期便は、お届け日の3〜4日前の注文確定時（締切日の翌日早朝）に決済され、実際の引き落とし日はカード会社の規定によります。" },
  { question: "何週分かまとめて払えますか？", answer: "できません。公式FAQは、配送ごとに決済すると案内しています。" },
];

const sections = [
  { id: "answer", label: "nosh（ナッシュ）で使える支払い方法" },
  { id: "timing", label: "決済のタイミング" },
  { id: "konbini", label: "コンビニ後払いの使い方と条件" },
  { id: "fee", label: "コンビニ後払いの手数料は1食あたりいくらか" },
  { id: "change", label: "支払い方法の変更・決済エラーのとき" },
  { id: "receipt", label: "領収書の発行" },
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
          <span className="text-foreground">nosh（ナッシュ）の支払い方法</span>
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
      <a href={OFFICIAL_URL} target="_blank" rel="nofollow noopener sponsored" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a><img src={OFFICIAL_IMP} width={1} height={1} alt="" style={{ border: "none" }} />
      <p className="text-[10px] text-gray-400 mt-2">PR・本記事はアフィリエイト広告を含みます</p>
    </div>
  );
}


export default function NoshShiharaiHouhouPage() {
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
      { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介" },
      { "@type": "ListItem", position: 3, name: "nosh（ナッシュ）の支払い方法" },
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
            <time dateTime="2026-11-25">公開: 2026年11月25日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※PR・本記事はアフィリエイト広告を含みます。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            冷凍弁当の定期配送<strong>nosh（ナッシュ）</strong>で新しく使える支払い方法は、<strong>クレジットカード・コンビニ後払い・Apple Payの3つ</strong>です。代金引換・d払い・PayPal・Amazon Payは、現在新規の申し込みを受け付けていません。
          </p>
          <p className="mb-3">
            この記事では、公式の「よくあるご質問」と「特定商取引法に基づく表記」を2026年11月25日に確認し、支払い方法ごとの手数料・決済のタイミング・使えない条件を整理しました。コンビニ後払いの手数料が1食あたりいくらになるかは、当サイトで食数プランごとに計算しています。
          </p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">nosh（ナッシュ）の支払い方法（要点）</p>
          <p className="text-sm leading-relaxed mb-4">使えるのはクレジットカード（VISA・Mastercard・American Express・JCB・Diners Club）・コンビニ後払い・Apple Payです。手数料がかかるのはコンビニ後払いだけで、1決済ごとに249円（税込）です。決済は配送ごとで、定期便はお届け日の3〜4日前の注文確定時に行われます。複数週分をまとめて払うことはできません。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 支払いで便利な点</p>
              <ul className="space-y-1 list-disc list-inside"><li>クレジットカードとApple Payは手数料0円</li><li>カードがなくてもコンビニ後払いで注文できる</li><li>領収書はマイページからいつでも発行できる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>コンビニ後払いは1決済ごとに249円</li><li>代引き・d払い・PayPal・Amazon Payは新規受付終了</li><li>決済が通らないとその回の配送はスキップ（再決済不可）</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="nofollow noopener sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">nosh 公式サイトを見る →</a><img src={OFFICIAL_IMP} width={1} height={1} alt="" style={{ border: "none" }} />
          <p className="text-[10px] text-gray-400 text-center mt-2">PR・本記事はアフィリエイト広告を含みます</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">nosh（ナッシュ）で使える支払い方法</SectionHeading>
        <ComparisonTable
          headers={["支払い方法", "手数料（税込）", "新規の申し込み", "支払いの時期"]}
          rows={[
            ["クレジットカード（VISA・Mastercard・American Express・JCB・Diners Club）", "なし", "可", "注文確定時にカード会社へ請求（引き落とし日はカード会社による）"],
            ["Apple Pay", "なし", "可", "注文確定時にApple Payに登録したカードへ請求"],
            ["コンビニ後払い（株式会社SCORE）", "249円／1決済", "可", "払込票の発行日から14日以内にコンビニで支払う"],
            ["代金引換", "572円", "受付終了", "—"],
            ["d払い・PayPal・Amazon Pay", "—", "受付終了", "既存の登録者のみ"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式FAQ <a href="https://nosh.jp/faq/answer/40" target="_blank" rel="noopener noreferrer" className="text-accent underline">支払い方法について</a>・<a href="https://nosh.jp/tradelaw" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月25日確認）。公式FAQは「上記以外のお支払方法については対応いたしかねます」としています。銀行振込・口座振替の案内はありません。</p>
        <p className="text-sm mb-6 leading-relaxed">d払いはマイページの変更画面に選択肢として残っていますが、「新規申し込みは現在受付終了」と表示されています。これから始める方は、上の3つから選ぶことになります。</p>
        <SectionHeading id="timing">決済のタイミング</SectionHeading>
        <ComparisonTable
          headers={["注文の種類", "決済されるとき"]}
          rows={[
            ["新規注文・再開の注文", "注文と同時"],
            ["2回目以降の定期便", "締切日の翌日早朝（お届け日の3〜4日前に注文が確定）"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式FAQ「決済が行われるタイミングについて」・<a href="https://nosh.jp/tradelaw" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月25日確認）。変更の締切は配送地域によりお届け日の4〜5日前です。</p>
        <p className="text-sm mb-6 leading-relaxed">決済は配送1回ごとに行われ、公式FAQでは「複数週分を一括決済はできません」と案内されています。締切日を過ぎると、その回の内容変更やキャンセルはできません。</p>
        <SectionHeading id="konbini">コンビニ後払いの使い方と条件</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>請求書（払込票）のハガキは商品に同梱されず、商品の発送から1週間ほど後に郵送される</li><li>払込票の発行日から14日以内に、コンビニのレジで支払う</li><li>楽天銀行コンビニ支払サービス・d払い請求書払い・ファミペイ請求書支払い・楽天ペイのアプリでも支払える</li><li>請求書は商品を届けた住所にだけ送られる（別の住所には送れない）</li><li>利用限度額は他店を含めた後払いの合計で55,000円（税込）</li><li>お届けのたびに株式会社SCOREの与信審査があり、結果によっては使えない</li></ul>
        <SubHeading>コンビニ後払いが使えない届け方</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>郵便局留め・運送会社の営業所留め</li><li>商品の転送を指定した発送</li><li>病院・ホテル・学校あてで、受取人がその施設の職員ではない場合</li><li>駅前など公共の場所にある宅配・集荷ボックス（集合住宅や一軒家の住人用の宅配ボックスは除く）</li><li>コンビニ店頭での受け取り</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: 公式FAQ「コンビニ後払いでの支払い方法について」・<a href="https://nosh.jp/tradelaw" target="_blank" rel="noopener noreferrer" className="text-accent underline">特定商取引法に基づく表記</a>（2026年11月25日確認）。請求書の再発行は後払い決済代行会社の株式会社SCOREが受け付けています。</p>
        <SectionHeading id="fee">コンビニ後払いの手数料は1食あたりいくらか</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">手数料は食数に関係なく1決済ごとに249円です。食数プランの価格（送料別）で割ると、少ない食数ほど負担の割合が大きくなります。</p>
        <ComparisonTable
          headers={["食数プラン", "プラン価格（税込・送料別）", "1食あたりの手数料（当サイト計算）", "プラン価格に対する割合（当サイト計算）"]}
          rows={[
            ["6食", "4,318円", "41.5円", "5.8%"],
            ["8食", "5,157円", "31.1円", "4.8%"],
            ["10食", "6,206円", "24.9円", "4.0%"],
            ["12食", "7,344円", "20.8円", "3.4%"],
            ["20食", "12,240円", "12.4円", "2.0%"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※プラン価格は公式FAQ <a href="https://nosh.jp/faq/answer/23" target="_blank" rel="noopener noreferrer" className="text-accent underline">noshの費用について</a>（2026年11月25日確認）。20食プランは2回目から選べます。nosh clubの割引・初回割引は含めていません。送料は配送先によって異なり、別途かかります。</p>
        <p className="text-sm mb-6 leading-relaxed">6食プランを毎週コンビニ後払いで受け取ると、手数料だけで4週996円になります。毎回の手数料を避けたい場合は、クレジットカードかApple Payにすると手数料はかかりません。送料を含めた料金の仕組みは<Link href="/articles/nosh-ryoukin-souryou/" className="text-accent underline">nosh（ナッシュ）の料金・送料の仕組み</Link>で扱っています。</p>
        <SectionHeading id="change">支払い方法の変更・決済エラーのとき</SectionHeading>
        <SubHeading>支払い方法の変更</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">マイページにログインし、「お届け設定」→「お支払い情報」の右側の「変更する」から、クレジットカード・コンビニ後払い・Apple Payに切り替えられます。クレジットカードは2枚以上登録している場合に限り、使っていないカードを削除できます。解約すると、登録したカード情報はすべて削除されます。</p>
        <SubHeading>決済が通らなかったとき</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">設定した支払い方法で決済が完了しないと、その回の配送は自動的にスキップ（キャンセル）され、その分を後から決済し直すことはできません。早く受け取りたい場合は、定期配送とは別に単発で注文できる「配送追加」（最短5日後から）を使います。</p>
        <ComparisonTable
          headers={["支払い方法", "公式FAQが挙げる主な原因"]}
          rows={[
            ["クレジットカード", "有効期限切れ・利用限度額の超過・カード会社による不正利用検知（セキュリティロック）。詳しい原因はカード会社に問い合わせる"],
            ["コンビニ後払い", "他店を含めた後払いの合計が55,000円を超えている・前回分が未払い（入金確認待ち）・住所や電話番号の登録不備"],
            ["Apple Pay", "Apple Pay内でカードを削除・変更した場合は、マイページでApple Payを登録し直す必要がある"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: 公式FAQ「お支払い方法の変更方法」「決済が通らなかったことにより配送がスキップになった」「決済エラーの主な原因と解消方法」「Apple Pay内のカード削除・変更」（2026年11月25日確認）。</p>
        <SectionHeading id="receipt">領収書の発行</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">領収書は、ブラウザでマイページにログインし、「注文履歴」→「領収書」から自分で発行します。スマートフォンアプリからは発行できず、紙の領収書の郵送もありません。解約すると注文履歴の確認や領収書の発行ができなくなるため、必要な分は解約の前にダウンロードしておきます。</p>
        <p className="text-xs text-warm-gray mb-6">※出典: 公式FAQ「領収書の発行方法について」（2026年11月25日確認）。</p>
        <p className="text-sm mb-6 leading-relaxed">解約・停止の手順や締切は<Link href="/articles/nosh-reviews/" className="text-accent underline">nosh（ナッシュ）の口コミ・評判</Link>、割引の使い方は<Link href="/articles/nosh-coupon/" className="text-accent underline">nosh（ナッシュ）のクーポン・割引</Link>で扱っています。</p>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">nosh（ナッシュ）の支払い方法は、クレジットカード・コンビニ後払い・Apple Payの3つです。手数料がかかるのはコンビニ後払いだけで、1決済ごとに249円（6食プランなら1食あたり約42円）です。決済は配送ごとで、定期便はお届け日の3〜4日前に確定します。</p>
        <p className="text-sm mb-6 leading-relaxed">支払い方法や手数料は変わることがあります。ご注文前に、公式サイトのよくあるご質問と特定商取引法に基づく表記で最新の内容をご確認ください。</p>

        <OfficialButton>nosh 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の口コミ・評判</Link></li>
            <li><Link href="/articles/nosh-ryoukin-souryou/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）の料金・送料の仕組み</Link></li>
            <li><Link href="/articles/nosh-coupon/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）のクーポン・割引</Link></li>
            <li><Link href="/articles/nosh-osusume-menu/" className="text-accent hover:text-accent-dark transition-colors">nosh（ナッシュ）のおすすめメニュー</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">nosh・三ツ星ファーム・ウェルネスダイニングを比較</Link></li>
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
