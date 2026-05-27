import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "冷凍庫が小さい家庭でも続けられる冷凍宅配弁当の選び方【2026年版】";
const ARTICLE_DESCRIPTION =
  "冷凍庫が小さい一人暮らし・共働き家庭でも無理なく続けられる冷凍宅配弁当の選び方を解説。容器サイズの目安・少食数プランの活用・配送間隔の最適化まで、冷凍庫スペース問題を解決する実践ノウハウをまとめました。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/reitouko-chiisai-takuhai-bento/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "冷凍宅配弁当 冷凍庫 小さい, 宅食 一人暮らし 冷凍庫, 冷凍庫 容量 弁当, 冷凍弁当 サイズ, 宅配弁当 6食 おすすめ, 冷凍庫 入らない 宅食",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-05-28T00:00:00+09:00",
    modifiedTime: "2026-05-28T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "30L前後の冷凍庫でも冷凍宅配弁当は使える？",
    answer:
      "使えますが、選び方と運用に工夫が必要です。一般的な冷凍宅配弁当の容器サイズは約18×18×4.5cm前後で、30L冷凍庫の場合は他の冷凍食品や保冷剤と共存させると、6食〜10食程度がギリギリ収まる目安です。本記事のポイントを押さえれば、冷凍庫が小さくても無理なく続けられます。具体的な容器サイズは各社で異なるため、申し込み前に公式サイトで確認しましょう。",
  },
  {
    question: "弁当を保管するスペースの目安は？",
    answer:
      "1食あたり容器のサイズは目安で約18×18×4.5cmなので、10食を平積みで重ねた場合、約18×18×45cmのスペースが必要です。実際には冷凍庫の引き出しのレイアウト次第で、平置きできなかったり立てかける必要が出るため、購入前に「縦に積めるか」「立てて入るか」を確認しておきましょう。容器の正確なサイズは商品により異なるため、各社公式サイトでの確認をおすすめします。",
  },
  {
    question: "冷凍庫が空かない時の対処法は？",
    answer:
      "(1)配送日の前日に冷凍庫を整理する習慣をつける、(2)6食プランや3食プランなど少食数プランを選ぶ、(3)配送頻度を週1にして少量ずつ届けてもらう、(4)冷凍庫内で立てて収納できるか試す、(5)市販の冷凍食品を一時的に減らす、の5つが有効です。それでも空かない場合は、家庭用のサブ冷凍庫（30L〜60L程度）を別途用意するという選択肢もあります。",
  },
  {
    question: "ご飯付きとおかずのみ、どちらが省スペース？",
    answer:
      "おかずのみの宅配弁当のほうが省スペースです。ご飯付き弁当はその分容器サイズが大きい・あるいは別容器でご飯が付属するため、冷凍庫を多く占有します。冷凍庫が小さい家庭は、おかずのみのサービス（nosh、三ツ星ファーム、DELIPICKSなど）を選び、ご飯は自宅で炊くかパックご飯を冷蔵で備える運用が省スペース・経済的です。",
  },
  {
    question: "配送をスキップしても料金は発生する？",
    answer:
      "定期申し込み型のサービスは、配送日の○日前までにマイページからスキップ操作をすれば料金は発生しません。多くのサービスで「次回配送4〜10日前まで」というスキップ締切が設定されています。締切を過ぎると自動的に発送されてしまうため、冷凍庫に余裕がない時は早めにスキップ操作を行いましょう。スキップ操作の手順や締切日は各社公式サイトの「ご利用ガイド」を確認してください。",
  },
];

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
          <span className="text-foreground/70">選び方ガイド</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">冷凍庫が小さい家庭の選び方</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "problem", label: "冷凍庫が小さいと起きる3つの問題" },
    { id: "size-guide", label: "容器サイズの目安と必要スペース" },
    { id: "rules", label: "冷凍庫が小さくても続けるための6つのルール" },
    { id: "service-tips", label: "サービス選びで重視すべき3ポイント" },
    { id: "storage", label: "冷凍庫の整理術（収納テクニック）" },
    { id: "alternatives", label: "それでも難しい場合の代替案" },
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

function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent/10">
            {headers.map((h) => (
              <th
                key={h}
                className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}
                >
                  {cell}
                </td>
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
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">
      {children}
    </h3>
  );
}

export default function ReitoukoChiisaiTakuhaiBentoPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-05-28T00:00:00+09:00",
    dateModified: "2026-05-28T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: {
      "@type": "Organization",
      name: "宅食びより",
      url: "https://takushoku-biyori.com",
    },
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
      { "@type": "ListItem", position: 2, name: "選び方ガイド" },
      { "@type": "ListItem", position: 3, name: "冷凍庫が小さい家庭の選び方" },
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
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            選び方ガイド
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>
              監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-xs leading-relaxed">
          <p className="font-bold mb-1">本記事の注意点</p>
          <p>
            容器サイズや配送間隔は各社で異なります。本記事の数値は一般的な目安であり、正確な仕様は申し込み前に各社公式サイトで必ずご確認ください。
          </p>
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「冷凍宅配弁当を始めたいけど、冷凍庫が小さくて入らない」「10食頼んだら冷凍庫がパンパンになった」——一人暮らしや、共働きで冷凍食品を多く備える家庭でよくある悩みです。
          </p>
          <p className="mb-3">
            実は<strong>「冷凍庫が小さくても冷凍宅配弁当を続ける方法」</strong>は確立しています。容器サイズの把握・少食数プランの活用・配送間隔の調整など、ちょっとした工夫で問題は解決します。
          </p>
          <p>
            この記事では、編集部が実際に試した運用ノウハウをもとに、冷凍庫スペース問題を乗り越えるための実践ガイドをまとめました。
          </p>
        </div>

        <TableOfContents />

        <SectionHeading id="problem">冷凍庫が小さいと起きる3つの問題</SectionHeading>

        <SubHeading>問題1: 10食プランが入らない</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          多くのサービスは10食プランが1食あたり最安に設計されています。しかし<strong>冷凍庫が30L前後の小型冷蔵庫</strong>だと、10食分の容器（容器サイズの目安: 約18×18×4.5cm × 10個）はそのままでは入りきりません。
        </p>

        <SubHeading>問題2: 既存の冷凍食品と共存できない</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍ご飯のストック、市販冷凍食品、保冷剤、アイスなど、冷凍庫はすでに使われていることが多いです。宅配弁当を10食追加すると、他の食材を圧迫し、結局どちらかを諦める羽目になります。
        </p>

        <SubHeading>問題3: 配送日に整理が間に合わない</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ヤマト運輸のクール便などで届くと、すぐ冷凍庫に入れる必要があります。あらかじめスペースを空けておかないと、慌てて既存の冷凍食品を処分することに。<strong>冷凍庫が小さい家庭ほど「事前整理」が必須</strong>です。
        </p>

        <SectionHeading id="size-guide">容器サイズの目安と必要スペース</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          一般的な冷凍宅配弁当の容器サイズは<strong>1食あたり約18×18×4.5cm前後</strong>が多いです。これを基準に、食数別の必要スペースを計算しました。実際のサイズはサービスにより異なるため、申し込み前に必ず公式サイトの「容器サイズ」記載を確認してください。
        </p>

        <ComparisonTable
          headers={["食数", "平積みした場合のスペース目安", "推奨される冷凍庫"]}
          rows={[
            ["3食", "約18×18×13.5cm", "30L冷凍庫でも余裕あり"],
            ["6食", "約18×18×27cm", "30L冷凍庫だと整理必要"],
            ["8食", "約18×18×36cm", "50L以上を推奨"],
            ["10食", "約18×18×45cm", "60L以上を推奨"],
            ["20食（10食×2回）", "約18×18×90cm", "100L以上または小分け配送"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          <strong>ポイント:</strong> 上記はあくまで平積みした場合の目安です。冷凍庫の引き出し型・観音開き型などレイアウトによっては、縦置きできるサービスを選ぶと省スペース化できます。
        </p>

        <SectionHeading id="rules">冷凍庫が小さくても続けるための6つのルール</SectionHeading>

        <SubHeading>ルール1: 少食数プラン（3食〜6食）を選ぶ</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          まず最初に検討すべきは「10食プラン → 6食プランへの切り替え」。1食あたりの単価は少し上がりますが、冷凍庫スペースの問題を一気に解決できます。各社とも3〜6食の少食数プランを用意しているケースが多いため、まずは小さく始めるのがコスト的にも安全です。
        </p>

        <SubHeading>ルール2: 配送頻度を週1にする</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          多くのサービスでは「週1・隔週・3週に1回」など配送頻度を選べます。<strong>週1配送に設定すれば、1回あたり届く量を最小化できます</strong>。たとえば6食プランの週1配送なら、常に冷凍庫に6食以下しか入っていない状態を保てます。
        </p>

        <SubHeading>ルール3: おかずのみのサービスを選ぶ</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍庫が小さい家庭は、ご飯付き弁当よりも<strong>おかずのみのサービス</strong>のほうが圧倒的に省スペースです。ご飯は自宅で炊いて冷凍する、または常温保存のパックご飯を備えるほうが、冷凍庫の節約になります。
        </p>

        <SubHeading>ルール4: 配送日に必ず冷凍庫を整理</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          配送日（前日でもOK）に必ず冷凍庫の整理タイムを取る習慣をつけましょう。古いアイスや冷凍ご飯を片付ける、保冷剤を入れすぎていれば減らす、など小さな積み重ねで5〜10cmのスペースが生まれます。
        </p>

        <SubHeading>ルール5: 配送をスキップする習慣をつける</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍庫に余裕がないと感じたら、次回配送のスキップを活用しましょう。スキップは「次回配送○日前まで」が締切のサービスが多いため、配送予定日が近づいたらマイページで冷凍庫の状態と照らして判断する習慣をつけます。
        </p>

        <SubHeading>ルール6: 容器サイズが小さいサービスを選ぶ</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          サービスによっては容器サイズが標準より大きい（深め・横長など）ケースがあります。申し込み前に公式サイトの「容器サイズ」を確認し、自宅の冷凍庫レイアウトに合うものを選びましょう。
        </p>

        <SectionHeading id="service-tips">サービス選びで重視すべき3ポイント</SectionHeading>

        <SubHeading>ポイント1: 少食数プランがあるか</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          まず確認すべきは「6食以下のプランがあるか」。多くの主要サービスは6食〜10食プランが基本ですが、サービスによっては3〜4食の少食数オプションを用意していることもあります。一人暮らしや冷凍庫が小さい家庭は、まずこのプランの有無で候補を絞りましょう。
        </p>

        <SubHeading>ポイント2: 配送頻度を細かく選べるか</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          「週1・隔週・3週に1回・月1」など、配送頻度の選択肢が多いサービスのほうが、冷凍庫の余裕に応じて柔軟に運用できます。配送頻度の変更がマイページで簡単にできることも重要です。
        </p>

        <SubHeading>ポイント3: 解約・スキップが手軽か</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍庫がいっぱいで次回配送を止めたい時、電話対応のみのサービスだと営業時間内に連絡しなければなりません。マイページから24時間スキップできるサービス（nosh等）は、冷凍庫が小さい家庭の強い味方です。
        </p>

        <SectionHeading id="storage">冷凍庫の整理術（収納テクニック）</SectionHeading>

        <SubHeading>テクニック1: 縦置き収納を活用</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          引き出し型の冷凍庫であれば、宅配弁当の容器を<strong>横向きに並べるのではなく縦に立てて並べる</strong>と、見やすく省スペースになります。書類ボックスのように立てて並べると、上から一覧でき取り出しやすいです（ただし、凍結が安定するまでは平置きが必要な場合あり）。
        </p>

        <SubHeading>テクニック2: 100均のブックスタンドで仕切る</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          100円ショップで売られている金属製のブックスタンドを冷凍庫内に入れて、仕切り代わりに使うと整理しやすくなります。「宅配弁当ゾーン」「冷凍ご飯ゾーン」「アイスゾーン」など分けると、配送日に「宅配弁当ゾーン」だけ空ければOKになります。
        </p>

        <SubHeading>テクニック3: 平らな保冷剤・ジップ袋を活用</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          かさばる保冷剤を平らなタイプに変える、冷凍ご飯はジップ袋で平らに冷凍するなど、既存の冷凍食品を「平たく」収納するだけで5〜10cmの隙間ができることがあります。
        </p>

        <SubHeading>テクニック4: 配送前日のチェックを習慣化</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          配送予定日の前日に冷凍庫をチェックし、消費期限が近い冷凍食品から食べる、不要なものを処分する、というルーチンを作ると、配送日にスムーズに収納できます。
        </p>

        <SectionHeading id="alternatives">それでも難しい場合の代替案</SectionHeading>

        <SubHeading>代替案1: 単発購入できるサービスを選ぶ</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食ダイレクトのような「いきなり○食セット」は、定期申し込みではなく単発で頼める単発購入型のお試しプランがあります。<strong>冷凍庫が空いたタイミングで都度頼める</strong>ので、定期配送のプレッシャーがありません。
        </p>

        <SubHeading>代替案2: 冷蔵タイプ（常温）の宅配弁当を検討</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食（冷蔵タイプ）など、毎日届く冷蔵宅配弁当を活用するのも一つの方法です。冷凍庫を一切使わないため、スペース問題が解決します。ただし「その日に食べきる」必要があり、冷凍宅配弁当のような自由度はありません。
        </p>

        <SubHeading>代替案3: サブ冷凍庫の導入</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          長期的に冷凍宅配弁当を活用したい場合、家庭用のサブ冷凍庫（30L〜60Lの小型タイプ）を別途導入する選択肢もあります。コストは初期投資としてかかりますが、冷凍宅配弁当に限らず冷凍食品全般の収納問題が解消します。月の食費削減効果と合わせれば、1年以内に元が取れるケースもあります。
        </p>

        <SubHeading>代替案4: 冷凍庫を見直して買い替え</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          一人暮らしを長く続ける見込みがあるなら、冷蔵庫を大型化することも検討の余地があります。冷凍庫が80L〜100Lある冷蔵庫なら、10食プランも余裕で収まり、運用が格段に楽になります。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          関連記事として、<Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline">一人暮らしにおすすめの宅食ランキング</Link>でも冷凍庫サイズを考慮した選び方を解説しています。
        </p>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ：冷凍庫が小さくても工夫次第で続けられる</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            冷凍庫が小さい家庭でも、本記事で紹介した6つのルール（少食数プラン・週1配送・おかずのみ・整理習慣・スキップ活用・容器サイズ確認）を実践すれば、無理なく冷凍宅配弁当を続けられます。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            一人暮らしで30L前後の小型冷凍庫であっても、<strong>「6食プラン × 週1配送 × おかずのみ」</strong>の組み合わせなら、常時6食以下の収納で運用できます。これなら冷凍庫を圧迫せず、他の食材とも共存可能です。
          </p>
          <p className="text-sm leading-relaxed">
            「どうしても冷凍庫が足りない」という場合は、冷蔵タイプ宅配弁当の併用やサブ冷凍庫の導入も検討してみてください。あなたの暮らしに合った宅配弁当との付き合い方が、きっと見つかるはずです。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/reitou-bento-mazui/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            冷凍弁当がまずい？原因と美味しく食べる7つのコツ
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            一人暮らしにおすすめの宅食ランキング
          </Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">
              編
            </div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">
                宅配弁当・栄養食の専門ライターチーム。各社公式情報をもとに、公平な比較情報をお届けします。
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
