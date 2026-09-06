import type { Metadata } from "next";
import Link from "next/link";

/*
  goodeli（グーデリ）の受け皿ページ。
  ⚠️ 作った理由: GSCで「グーデリ」20表示・平均5.6位・0クリックが
     /articles/gofood-kuchikomi/（GOFOOD＝別会社の低糖質弁当）に着地していた。
     goodeli.jp を確認して別サービスと確定したため、専用の受け皿を新設する。
  ⚠️ 数値は 2026-09-06 に公式（goodeli.jp）で確認したもののみ。
     当サイトは実食レビュー未実施・出典付きの口コミも未収集のため、
     「口コミが多い」等の書き方はしない。無いものは無いと書く。
*/

const ARTICLE_TITLE =
  "goodeli(グーデリ)とは？料金・送料・GOFOOD(ゴーフード)との違いを公式情報で整理【2026年9月最新】";
const ARTICLE_DESCRIPTION =
  "goodeli(グーデリ)は主菜＋副菜が入った冷凍宅配食。14食1食896円・21食1食842円（税込）、送料1,100円（北海道・沖縄2,750円）を公式で確認しました。名前が似ているGOFOOD(ゴーフード)とは別サービスです。両者の違いと、申し込み前に確認したい解約条件をまとめます。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/goodeli-kuchikomi/";
const CHECKED = "2026年9月6日";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "goodeli, グーデリ, グーデリ 料金, グーデリ 送料, グーデリ 解約, goodeli 口コミ, グーデリ ゴーフード 違い, 冷凍宅配弁当",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-09-06T00:00:00+09:00",
    modifiedTime: "2026-09-06T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "goodeli（グーデリ）とGOFOOD（ゴーフード）は同じサービスですか？",
    answer:
      "別のサービスです。goodeliは goodeli.jp が運営する冷凍宅配食で、主菜に副菜が付く構成です。GOFOOD（ゴーフード）は全メニュー糖質20g以下を掲げる低糖質の冷凍弁当で、運営会社も価格体系も異なります。名前が似ているため検索時に混同されやすいので、公式サイトのドメインで見分けてください。",
  },
  {
    question: "goodeliの料金はいくらですか？",
    answer:
      "公式サイトの表示では、14食セットが1食830円（税抜）／896円（税込）、21食セットが1食780円（税抜）／842円（税込）です。金額の例として「14食コース（弁当10食・ソース4食の場合）1回目11,548円（税込）＋送料」と記載されています（2026年9月6日 公式サイト確認）。",
  },
  {
    question: "goodeliの送料はいくらですか？",
    answer:
      "通常地域が1,100円（税込）、北海道・沖縄が2,750円（税込）です。1食あたりの実質負担は、この送料を食数で割って足したうえで比較してください（2026年9月6日 公式サイト確認）。",
  },
  {
    question: "goodeliは解約できますか？",
    answer:
      "公式サイトには「初回購入分は解約・キャンセル受付不可」「2回目以降は次回出荷予定日の6日前までに停止・解約が可能」と記載されています。初回だけは止められない点が、他社と比べて注意が必要なところです（2026年9月6日 公式サイト確認）。",
  },
  {
    question: "goodeliの弁当の栄養基準は？",
    answer:
      "公式サイトによると、弁当シリーズは1食あたりたんぱく質14g以上・糖質30g以下・350kcal以下を基準としています。冷凍にはCAS凍結を採用していると記載されています（2026年9月6日 公式サイト確認）。",
  },
  {
    question: "goodeliの口コミ・評判はどうですか？",
    answer:
      "当サイトでは、出典を確認できるgoodeliの口コミをまだ収集できていません。編集部による実食レビューも実施していないため、味や満足度についての評価は掲載していません。確認できた事実だけを掲載する方針のため、口コミが集まり次第このページに追記します。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: ARTICLE_TITLE,
      description: ARTICLE_DESCRIPTION,
      url: ARTICLE_URL,
      datePublished: "2026-09-06T00:00:00+09:00",
      dateModified: "2026-09-06T00:00:00+09:00",
      author: { "@type": "Organization", name: "宅食びより編集部" },
      publisher: { "@type": "Organization", name: "宅食びより" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqData.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
        { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://takushoku-biyori.com/articles/" },
        { "@type": "ListItem", position: 3, name: "goodeli(グーデリ)とは", item: ARTICLE_URL },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-3xl px-5 py-10">
        <nav className="text-xs text-gray-500">
          <Link href="/" className="hover:underline">ホーム</Link>
          <span> ／ </span>
          <Link href="/articles/" className="hover:underline">記事一覧</Link>
        </nav>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold leading-relaxed">
          goodeli(グーデリ)とは？料金・送料・GOFOOD(ゴーフード)との違いを公式情報で整理
        </h1>
        <p className="mt-3 text-xs text-gray-500">最終更新：{CHECKED}／公式サイトで確認した情報のみ掲載</p>

        {/* 結論ファースト */}
        <div className="mt-6 rounded-xl border-l-4 border-accent bg-cream p-5">
          <p className="text-sm font-bold mb-2">先に結論</p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>・goodeli（グーデリ）と GOFOOD（ゴーフード）は<strong>別のサービス</strong>です。名前が似ているだけで、運営も価格体系も違います。</li>
            <li>・料金は<strong>14食で1食896円（税込）、21食で1食842円（税込）</strong>。まとめ買いほど1食あたりが下がります。</li>
            <li>・送料は<strong>通常1,100円・北海道と沖縄は2,750円（税込）</strong>。1食あたりで比べるときはここを足してください。</li>
            <li>・<strong>初回購入分は解約・キャンセルができません</strong>。ここは申し込み前に必ず確認してください。</li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">GOFOOD（ゴーフード）と混同されやすい</h2>
        <p className="mt-4 text-sm leading-relaxed">
          「グーデリ」と検索する人の多くが、名前の近い GOFOOD（ゴーフード）のページにたどり着いています。
          読み方が似ているうえ、どちらも冷凍の宅配食だからです。ただし中身は別物です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cream">
                <th className="border p-2 text-left w-1/3"></th>
                <th className="border p-2 text-left">goodeli（グーデリ）</th>
                <th className="border p-2 text-left">GOFOOD（ゴーフード）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border p-2 text-left font-normal text-gray-600">公式サイト</th>
                <td className="border p-2">goodeli.jp</td>
                <td className="border p-2">gofood.jp</td>
              </tr>
              <tr>
                <th className="border p-2 text-left font-normal text-gray-600">主な特徴</th>
                <td className="border p-2">主菜に副菜が付く構成。CAS凍結を採用</td>
                <td className="border p-2">全メニュー糖質20g以下・たんぱく質20g以上の低糖質</td>
              </tr>
              <tr>
                <th className="border p-2 text-left font-normal text-gray-600">1食あたり（税込）</th>
                <td className="border p-2">896円（14食）／842円（21食）</td>
                <td className="border p-2">598円〜（10食セット）</td>
              </tr>
              <tr>
                <th className="border p-2 text-left font-normal text-gray-600">送料（税込）</th>
                <td className="border p-2">1,100円／北海道・沖縄 2,750円</td>
                <td className="border p-2">地域別 940円〜2,170円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          goodeliの数値は公式サイト（goodeli.jp）で{CHECKED}に確認。GOFOODの数値は
          <Link href="/articles/gofood-kuchikomi/" className="text-accent underline">GOFOODの記事</Link>
          に記載の公式確認値です。最新の料金は各公式サイトでご確認ください。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">goodeliの料金と送料</h2>
        <p className="mt-4 text-sm leading-relaxed">
          公式サイトに掲載されている料金は次のとおりです。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cream">
                <th className="border p-2 text-left">セット</th>
                <th className="border p-2 text-left">1食あたり（税抜）</th>
                <th className="border p-2 text-left">1食あたり（税込）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">14食セット</td><td className="border p-2">830円</td><td className="border p-2">896円</td></tr>
              <tr><td className="border p-2">21食セット</td><td className="border p-2">780円</td><td className="border p-2">842円</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed">
          金額の例として、公式サイトには「14食コース（弁当10食・ソース4食の場合）1回目11,548円（税込）＋送料」と記載されています。
          送料は通常地域が1,100円（税込）、北海道・沖縄が2,750円（税込）です。
        </p>
        <div className="mt-4 rounded-lg bg-cream p-4 text-sm leading-relaxed">
          <p className="font-bold mb-1">1食あたりで比べるときの注意</p>
          <p>
            表示されている1食あたりの金額に送料は含まれていません。14食セットに通常送料1,100円が加わる場合、
            送料込みの1食あたりは約975円になります（1,100円 ÷ 14食 ≒ 79円を加算）。
            他社と比べるときは、どのサービスも同じ条件（送料込み・同じ食数）で並べてください。
          </p>
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">申し込み前に確認したい解約の条件</h2>
        <p className="mt-4 text-sm leading-relaxed">
          公式サイトには、初回購入分は解約・キャンセルを受け付けないと記載されています。
          2回目以降は、次回出荷予定日の6日前までであれば停止・解約ができます。
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          「合わなければすぐ止められる」タイプのサービスではないため、
          <strong>最初の1回は必ず届く前提で申し込むかどうかを判断してください。</strong>
          決済方法によっては手数料もかかります（NP後払い248円、atoneは口座振替99円・その他209円／いずれも税込）。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">弁当の栄養基準</h2>
        <p className="mt-4 text-sm leading-relaxed">
          公式サイトによると、弁当シリーズは1食あたり<strong>たんぱく質14g以上・糖質30g以下・350kcal以下</strong>を基準としています。
          冷凍にはCAS凍結を採用していると記載があります。糖質を厳しく抑えたい場合は、
          糖質20g以下を全メニューで統一しているGOFOODなど、基準そのものが違うサービスと比べるのが分かりやすいです。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">口コミ・評判について（現時点で書けること）</h2>
        <div className="mt-4 rounded-lg border p-4 text-sm leading-relaxed" style={{ borderColor: "#dde3eb" }}>
          <p>
            <strong>当サイトは、goodeliについて出典を確認できる口コミをまだ収集できていません。</strong>
            編集部による実食レビューも実施していないため、味や満足度の評価は掲載していません。
          </p>
          <p className="mt-2">
            出所の分からない感想を「口コミ」として並べることはしない方針です。確認できた口コミが集まり次第、
            出典付きでこのページに追記します。現時点では、公式サイトで確認できた料金・送料・解約条件・栄養基準のみを掲載しています。
          </p>
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">よくある質問</h2>
        <div className="mt-4 space-y-4">
          {faqData.map((f) => (
            <div key={f.question} className="rounded-lg bg-cream p-4">
              <p className="font-bold text-sm">Q. {f.question}</p>
              <p className="mt-2 text-sm leading-relaxed">A. {f.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-cream rounded-xl p-6">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/articles/gofood-kuchikomi/" className="text-accent hover:text-accent-dark transition-colors">
                GOFOOD(ゴーフード)の口コミ・評判は？まずいって本当？
              </Link>
            </li>
            <li>
              <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">
                宅食料金白書2026｜18社の送料込み実質単価を一次調査
              </Link>
            </li>
            <li>
              <Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark transition-colors">
                糖質制限向け宅配弁当のおすすめ
              </Link>
            </li>
            <li>
              <Link href="/articles/kou-tanpaku-ranking/" className="text-accent hover:text-accent-dark transition-colors">
                高タンパク宅配弁当ランキング
              </Link>
            </li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>
      </article>
    </>
  );
}
