import type { Metadata } from "next";
import Link from "next/link";

/*
  宅配クック123（株式会社シニアライフクリエイト）の受け皿ページ。
  ⚠️ 作った理由: 中小ブランド×口コミ面が当サイトの勝ち型（マイシィ pos7.6 CTR18.8%）。
     高齢者向け・安否確認つきという軸は既存58記事に無く、食い合わない。
  ⚠️ 数値は 2026-09-18 に公式（takuhaicook123.jp）で確認したもののみ。
     当サイトは実食レビュー未実施・出典付きの口コミも未収集なので、
     味や満足度の評価は書かない。無いものは無いと書く。
  ⚠️ 対応エリア・店舗数は公式が「HP検索で」としており数を出していない。
     こちらで数えて断定しない。
*/

const ARTICLE_TITLE =
  "宅配クック123の料金・配達料・安否確認を公式情報で整理｜1食から頼める高齢者向け宅配弁当【2026年9月最新】";
const ARTICLE_DESCRIPTION =
  "宅配クック123は普通食がごはん付き685円・おかずのみ577円（税込）、配達料は無料で1食から注文できます。65歳以上の初回は普通食1食を無料試食可。手渡しが基本で、応答がないときは事前に決めた緊急連絡先へ連絡する仕組みです。公式サイトで確認した料金と条件をまとめました。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/takuhai-cook123-kuchikomi/";
const CHECKED = "2026年9月18日";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅配クック123, 宅配クック123 料金, 宅配クック123 口コミ, 宅配クック123 評判, 宅配クック123 配達料, 高齢者 宅配弁当, 安否確認 弁当, 透析食 宅配",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-09-18T00:00:00+09:00",
    modifiedTime: "2026-09-18T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "宅配クック123の料金はいくらですか？",
    answer:
      "普通食がごはん付き685円・おかずのみ577円（税込）です。幸たんぱく食は724円／616円、健康ボリューム食は788円／680円。カロリー・塩分調整食、たんぱく・塩分調整食、透析食、消化にやさしい食、やわらか食、ムースセット食は885円／777円です（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "配達料や年会費はかかりますか？",
    answer:
      "かかりません。公式のよくある質問に「会費とか配達料とかかかるの？ いいえ。お弁当代のみです。」と明記されています。1食あたりの負担が弁当代だけで済むのは、送料が別途かかる冷凍宅配弁当と比べたときの大きな違いです（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "1食だけ頼めますか？",
    answer:
      "頼めます。公式に「1食から配達可能でございます」と記載されています。まとめ買いが前提の冷凍宅配弁当と違い、必要な日だけ使えます（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "無料試食はありますか？",
    answer:
      "あります。ただし条件があり、「65歳以上の方で初めてご注文の方のみ普通食を1食無料でご試食いただけます」と記載されています。年齢と初回という2つの条件が付く点に注意してください（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "安否確認（見守り）はしてもらえますか？",
    answer:
      "手渡しが基本で、公式には「もしチャイムを鳴らしても反応がない場合には事前に取決めた緊急連絡先へご連絡いたします」と記載されています。離れて暮らす家族の見守りを兼ねたい場合、この仕組みがあるかどうかは選定の分かれ目になります（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "土日祝も届きますか？キャンセルはいつまで？",
    answer:
      "公式によると土日祝日も配達可能で、休みは正月3が日のみです。キャンセル・変更は「前日の17時まで担当店舗にて受付」と記載されています（2026年9月18日 公式サイト確認）。",
  },
  {
    question: "宅配クック123の口コミ・評判はどうですか？",
    answer:
      "当サイトでは、出典を確認できる宅配クック123の口コミをまだ収集できていません。編集部による実食レビューも実施していないため、味や満足度についての評価は掲載していません。確認できた事実だけを載せる方針のため、口コミが集まり次第このページに追記します。",
  },
];

const MENU = [
  { name: "普通食", rice: "685円", okazu: "577円", note: "標準的な一食。無料試食の対象はこのメニュー" },
  { name: "幸たんぱく食", rice: "724円", okazu: "616円", note: "たんぱく質を補いたい方向け" },
  { name: "健康ボリューム食", rice: "788円", okazu: "680円", note: "量を確保したい方向け" },
  { name: "カロリー・塩分調整食", rice: "885円", okazu: "777円", note: "カロリーと塩分の調整が必要な方向け" },
  { name: "たんぱく・塩分調整食", rice: "885円", okazu: "777円", note: "たんぱく質と塩分の制限がある方向け" },
  { name: "透析食", rice: "885円", okazu: "777円", note: "透析治療を受けている方向け" },
  { name: "消化にやさしい食", rice: "885円", okazu: "777円", note: "消化に配慮が必要な方向け" },
  { name: "やわらか食", rice: "885円", okazu: "777円", note: "かたいものが食べにくい方向け" },
  { name: "ムースセット食", rice: "885円", okazu: "777円", note: "咀嚼・嚥下に配慮が必要な方向け" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: ARTICLE_TITLE,
      description: ARTICLE_DESCRIPTION,
      url: ARTICLE_URL,
      datePublished: "2026-09-18T00:00:00+09:00",
      dateModified: "2026-09-18T00:00:00+09:00",
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
        { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介" },
        { "@type": "ListItem", position: 3, name: "宅配クック123の料金と安否確認", item: ARTICLE_URL },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-3xl px-5 py-10">
        <nav aria-label="パンくずリスト" className="text-xs text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:underline">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><Link href="/articles/#guide" className="text-foreground/70 hover:underline">選び方・使い方・サービス紹介</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">宅配クック123の料金と安否確認</span></li>
          </ol>
        </nav>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold leading-relaxed">
          宅配クック123の料金・配達料・安否確認を公式情報で整理
        </h1>
        <p className="mt-3 text-xs text-gray-500">最終更新：{CHECKED}／公式サイトで確認した情報のみ掲載</p>

        <div className="mt-6 rounded-xl border-l-4 border-accent bg-cream p-5">
          <p className="text-sm font-bold mb-2">先に結論</p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>・普通食は<strong>ごはん付き685円／おかずのみ577円（税込）</strong>。冷凍宅配弁当の中では中位の価格帯です。</li>
            <li>・<strong>配達料・年会費が無料</strong>。弁当代だけで完結するので、送料を足して計算する必要がありません。</li>
            <li>・<strong>1食から頼めます</strong>。7食・10食単位が前提の冷凍宅配とはここが根本的に違います。</li>
            <li>・<strong>手渡しが基本で、応答がなければ事前に決めた緊急連絡先に連絡</strong>が入ります。見守りを兼ねたい場合の決め手になります。</li>
            <li>・無料試食は<strong>65歳以上かつ初回の方のみ</strong>、普通食1食です。</li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">まず、他社と何が違うのか</h2>
        <p className="mt-4 text-sm leading-relaxed">
          当サイトで扱っている宅配食の多くは、<strong>冷凍でまとめて届き、送料が別にかかる</strong>タイプです。
          宅配クック123はそこが違います。毎日その日のぶんを手渡しで届ける形で、
          <strong>配達料がかからず、1食から頼めます</strong>。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          この違いは「安いか高いか」より先に、<strong>使い方が合うかどうか</strong>を決めます。
          冷凍庫にストックして好きなときに食べたい人には冷凍タイプが向きますし、
          毎日決まった時間に届けてほしい、冷凍庫に空きがない、という場合はこちらが向きます。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">料金（税込・公式サイトの表示）</h2>
        <p className="mt-4 text-sm leading-relaxed">
          メニューは9種類で、それぞれ「ごはん付き」と「おかずのみ」が選べます。
          食事制限が必要なメニュー（カロリー・塩分調整食から下）は一律の価格です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-cream">
                <th className="border p-2 text-left">メニュー</th>
                <th className="border p-2 text-left whitespace-nowrap">ごはん付き</th>
                <th className="border p-2 text-left whitespace-nowrap">おかずのみ</th>
                <th className="border p-2 text-left">どんな人向けか</th>
              </tr>
            </thead>
            <tbody>
              {MENU.map((m) => (
                <tr key={m.name}>
                  <th className="border p-2 text-left font-bold">{m.name}</th>
                  <td className="border p-2 whitespace-nowrap">{m.rice}</td>
                  <td className="border p-2 whitespace-nowrap">{m.okazu}</td>
                  <td className="border p-2 text-gray-600">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          出典：宅配クック123 公式サイト（{CHECKED} 確認）。朝食と栄養補助食品もありますが、
          公式に「昼食・夕食をご利用の方が対象」と記載されています。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">配達料がかからない、という意味</h2>
        <p className="mt-4 text-sm leading-relaxed">
          公式のよくある質問には「会費とか配達料とかかかるの？ いいえ。お弁当代のみです。」とあります。
          冷凍宅配弁当は<strong>1食あたりの表示価格に送料を足して比べる</strong>必要がありますが、
          宅配クック123は表示額がそのまま支払額になります。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          たとえば普通食のおかずのみ577円を週5日で使うと、1週間で2,885円です。
          ここに追加でかかるものがないので、予算の見通しが立てやすいのは実務上のメリットです。
          送料まで含めた他社との比べ方は
          <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">料金白書</Link>
          で整理しています。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">安否確認の仕組み</h2>
        <p className="mt-4 text-sm leading-relaxed">
          公式には、弁当を<strong>手渡しで届けるのが基本</strong>であること、
          <strong>チャイムを鳴らしても反応がない場合は事前に取り決めた緊急連絡先へ連絡する</strong>ことが
          記載されています。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          離れて暮らす家族の食事を用意したい、というときに求められるのは味や価格だけではありません。
          「今日ちゃんと受け取れたか」が分かる仕組みがあるかどうかで選ぶ場合、ここが判断材料になります。
          なお事前の打ち合わせで不在時の置き配にも対応するとされているため、
          <strong>見守りを目的にするなら「手渡し」で依頼することを伝えておく</strong>必要があります。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">注文・キャンセルの条件</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          <li>・<strong>1食から</strong>注文可能</li>
          <li>・土日祝も配達。休みは<strong>正月3が日のみ</strong></li>
          <li>・キャンセル・変更は<strong>前日17時まで</strong>、担当店舗での受付</li>
          <li>・無料試食は<strong>65歳以上かつ初めての注文の方のみ</strong>、普通食1食</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed">
          前日17時という締切は、冷凍宅配弁当の「次回お届けの◯日前まで」と比べると短く、
          予定が変わりやすい人には使いやすい条件です。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">⚠️ 公式で確認できなかったこと</h2>
        <p className="mt-4 text-sm leading-relaxed">
          <strong>対応エリアと店舗数は、この記事では断定していません。</strong>
          公式は店舗検索で調べる形をとっており、一覧の数字を掲載していないためです。
          運営は株式会社シニアライフクリエイトで、地域ごとの担当店舗が配達を行う仕組みです。
          お住まいの地域が対象かどうかは、公式の店舗検索で確認してください。
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          また<strong>口コミ・評判は掲載していません</strong>。当サイトは出典を確認できる口コミだけを扱う方針で、
          宅配クック123については未収集です。編集部による実食レビューも実施していません。
          方針は<Link href="/methodology/" className="text-accent underline">評価方法</Link>に記載しています。
        </p>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">よくある質問</h2>
        <div className="mt-4 space-y-4">
          {faqData.map((f) => (
            <div key={f.question} className="rounded-lg border p-4">
              <p className="font-bold text-sm">{f.question}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{f.answer}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-bold border-b pb-2">関連記事</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>・<Link href="/articles/mealtime-kuchikomi/" className="text-accent underline">ミールタイム（食事療法向け・管理栄養士に無料相談）</Link></li>
          <li>・<Link href="/articles/ouchi-coop-kuchikomi/" className="text-accent underline">おうちコープ（マイシィ）の評判</Link></li>
          <li>・<Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent underline">宅配弁当の料金白書（送料込みで比較）</Link></li>
        </ul>
      </article>
    </>
  );
}
