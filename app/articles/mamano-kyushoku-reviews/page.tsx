import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ママの休食の口コミ・評判は？産後・授乳期向け冷凍宅配を中立検証【2026年最新】";
const ARTICLE_DESCRIPTION =
  "ママの休食の口コミ・評判を徹底調査。産後・授乳期・妊娠中の女性をターゲットにした冷凍宅配弁当の栄養設計、メニュー、料金、続けやすさを公式情報ベースで解説。本当に産後ママに役立つかを判定します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mamano-kyushoku-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ママの休食 口コミ, ママの休食 評判, ママの休食 産後, ママの休食 授乳期, 産後 宅配弁当, 授乳中 宅配, 妊娠中 宅配弁当, 産前産後 冷凍 宅配, 産後 食事",
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
    question: "ママの休食は妊娠中でも食べられますか？",
    answer:
      "ママの休食は、妊娠中・産後・授乳期の女性をメインターゲットに設計された冷凍宅配弁当です。葉酸・鉄・カルシウム・タンパク質といった、妊娠期〜授乳期に不足しやすい栄養素を意識したメニュー構成が特徴です。ただし個別のアレルギーや医師からの食事指導がある場合は、必ず担当医に相談してから利用してください。最新の栄養設計と原材料は公式サイト(https://mamanokyushoku.com/)でご確認ください。",
  },
  {
    question: "産後すぐ・退院直後でも届けてもらえる？",
    answer:
      "ママの休食は冷凍便で全国配送に対応しているため、産後の退院直後でも自宅で受け取り可能です。実家への発送や、配送日時の指定にも対応している場合があります。「実家に頼れない」「夫の在宅時間が限られている」核家族世帯の産後ママには特に重宝されています。具体的な配送条件・日時指定の可否は公式サイトで最新情報をご確認ください。",
  },
  {
    question: "料金はどれくらい？noshより高い？",
    answer:
      "ママの休食は管理栄養士監修・産後特化型のため、一般的なコスパ重視型の冷凍宅配弁当(noshの599円〜など)より1食単価は高めの設計です。具体的な料金プランは食数や定期/都度購入で変動するため、最新の正確な価格は公式サイト(https://mamanokyushoku.com/)でご確認ください。栄養設計の専門性に価値を感じるかで判断するのが妥当です。",
  },
  {
    question: "解約は簡単にできますか？",
    answer:
      "定期購入の場合、マイページからスキップ・休止・解約手続きが可能です。継続回数の条件が設定されている場合があるため、申込前に「特定商取引法に基づく表記」と購入画面の規約を必ず確認してください。短期で試したい場合は、定期ではなく都度購入で1セット試すのが安全です。",
  },
  {
    question: "授乳中に飲酒・カフェイン・添加物の心配は？",
    answer:
      "ママの休食は、授乳期に配慮した食材選定・調理を心がけているとアピールしているサービスです。具体的な添加物・原材料の使用方針については公式サイトの記載をご確認ください。重度のアレルギーや特定の食材回避が必要な場合は、メニュー詳細・原材料表示を必ず確認のうえ、必要に応じて事前に問い合わせるのが安全です。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">口コミ・評判</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">ママの休食の口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ママの休食とは？基本情報まとめ" },
    { id: "target", label: "想定ターゲット(妊娠中・産後・授乳期)" },
    { id: "good-reviews", label: "良い口コミ・評判" },
    { id: "bad-reviews", label: "悪い口コミ・評判" },
    { id: "merits", label: "口コミから分かるメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "comparison", label: "他の産後向け宅食との比較" },
    { id: "faq", label: "よくある質問(FAQ)" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a>
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

function StarRating({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "star-filled" : "star-empty"}>&#9733;</span>
      ))}
    </span>
  );
}

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="my-6 text-center">
      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-xs text-warm-gray mt-2">※公式サイトへ移動します</p>
    </div>
  );
}

export default function MamanoKyushokuReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-05-28T00:00:00+09:00",
    dateModified: "2026-06-24T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      { "@type": "ListItem", position: 3, name: "ママの休食の口コミ・評判" },
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
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">口コミ・評判</span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link></span>
          </div>
          <div className="mt-3 text-xs text-warm-gray bg-yellow-50 border border-yellow-200 rounded p-2">
            PR: 本記事には広告(アフィリエイトリンク)が含まれます。価格・プラン内容は変更される場合があるため、最新情報は必ず<a href="https://mamanokyushoku.com/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>でご確認ください。
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            産後の体は満身創痍。育児に追われて自分の食事は後回し、コンビニやインスタント食品でしのぐ日々——そんな現代の産後ママを救うサービスとして注目を集めるのが<strong>ママの休食</strong>です。
          </p>
          <p className="mb-3">
            この記事では、<strong>ママの休食の口コミ・評判を徹底リサーチ</strong>。妊娠中・産後・授乳期の女性に必要な栄養設計を、公式情報ベースで整理しました。
          </p>
          <p>
            <strong>「本当に産後ママの負担を減らしてくれるサービスなのか」</strong>を判断できる内容にまとめています。
          </p>
        </div>

        {/* 結論ボックス（ファーストビュー） */}
        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">結論：ママの休食はこんな人に向いています</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm leading-relaxed mb-4">
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-accent mb-2">◎ 良いと評価されやすい点</p><ul className="space-y-1 list-disc list-inside"><li>妊娠〜授乳期に不足しやすい葉酸・鉄・カルシウムを意識した管理栄養士監修の栄養設計</li><li>レンジ加熱だけで完結し、産後・授乳期の「料理する時間がない」時に助かる</li><li>家庭的で優しい味付け。出産祝い・産後ギフトとしても喜ばれる</li></ul></div>
            <div className="bg-cream rounded-lg p-3"><p className="font-bold text-warm-gray mb-2">△ 注意したい点</p><ul className="space-y-1 list-disc list-inside"><li>特化型のため1食単価が一般的な宅配弁当より高め</li><li>メニュー数は大手(nosh・三ツ星ファーム)より少なめ</li><li>量は女性向けで、アレルギー・原材料は事前確認が必要</li></ul></div>
          </div>
          <p className="text-xs text-warm-gray mb-4">※料金・送料・キャンペーンは時期により変動します。最新の正確な金額は公式サイトでご確認ください。</p>
          <a href="https://mamanokyushoku.com/" target="_blank" rel="noopener noreferrer sponsored" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">ママの休食 公式サイトで最新の料金・お試しを見る →</a>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ママの休食とは？基本情報まとめ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ママの休食は、<strong>妊娠中・産後・授乳期の女性向けに特化した冷凍宅配弁当</strong>サービスです。「ママに休む時間と栄養を」というコンセプトで、管理栄養士が監修したメニューを電子レンジで温めるだけで食べられます。一般的な宅配弁当が「ダイエット」「健康全般」をターゲットにする中、ママの休食は<strong>「ライフステージ特化型」</strong>という独自ポジションを取っています。
        </p>

        <SubHeading>ママの休食の基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["ターゲット", "妊娠中・産後・授乳期の女性(プレママ/ママ全般)"],
            ["メニュー監修", "管理栄養士"],
            ["重視している栄養素", "葉酸・鉄・カルシウム・タンパク質など"],
            ["配送形態", "冷凍便(電子レンジ加熱)"],
            ["購入形態", "都度購入 / 定期購入"],
            ["公式サイト", "https://mamanokyushoku.com/"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: ママの休食公式サイト(2026年5月時点)。最新情報・正確な栄養成分・料金は公式サイトでご確認ください。</p>

        <SubHeading>ママの休食の3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "妊娠〜授乳期の栄養設計に特化", text: "葉酸(胎児の発育に重要)、鉄(産後の貧血対策)、カルシウム(授乳で消耗)、タンパク質(母体の回復)など、ライフステージ特有の栄養素を意識したメニュー構成。一般的な宅配弁当ではここまで特化した設計は見られません。" },
            { title: "管理栄養士監修で安心感が高い", text: "プロの管理栄養士が献立を設計しているため、「これを食べていれば栄養バランスは整う」という安心感があります。育児で疲弊している産後ママには、この精神的負担軽減効果も大きい。" },
            { title: "電子レンジで温めるだけの時短設計", text: "産後直後・授乳期はとにかく時間がない。冷凍庫から出してレンジで温めるだけで完成する手軽さは、抱っこ紐から手を離せないママには圧倒的な価値。" },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <CTAButton href="https://mamanokyushoku.com/">ママの休食 公式サイトを見る</CTAButton>

        <SectionHeading id="target">想定ターゲット(妊娠中・産後・授乳期)</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ママの休食は、女性のライフステージごとに異なる栄養ニーズに応えるサービスです。それぞれのフェーズで何が嬉しいかを整理しました。
        </p>

        <SubHeading>妊娠中(妊婦)の方</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          つわりで料理が辛い時期や、後期に入ってお腹が大きくキッチンに立つのがきつい時期に強い味方です。葉酸を意識した献立は、特に妊娠初期〜中期に重要。冷凍ストックがあれば「食べたくないから抜く」という事態を回避できます。
        </p>

        <SubHeading>産後直後〜入院明け</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          産褥期は身体の回復が最優先。実家のサポートが受けられない核家族世帯では、夫が仕事に出ている時間帯の食事確保が大きな課題になります。レンジ加熱だけで完結するママの休食は、この時期の救世主と言える存在です。
        </p>

        <SubHeading>授乳期(0〜1歳)</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          授乳でカルシウム・鉄・タンパク質を多く消耗する時期。両手が塞がる育児中は「料理する時間」がそもそも捻出困難です。冷凍弁当のストックがあれば、夜泣き対応で寝不足の朝でも、片手で温めれば食事にありつけます。
        </p>

        <SubHeading>離乳食準備〜卒乳期(1〜2歳)</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          ママの食事を作る余裕があれば子どもの離乳食づくりに集中できる、というメリットも。「自分の食事は冷凍ストック、子どもの食事は手作り」という分担運用も現実的です。
        </p>

        <SectionHeading id="good-reviews">良い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          SNS・口コミサイトで多く見られるポジティブな声を、4テーマに整理しました。本記事では架空のユーザー名や架空体験談は掲載せず、評判の傾向のみを要約しています。
        </p>

        <SubHeading>1. 産後の体力回復期にとにかく助かる</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          産褥期や授乳期は、体力的にキッチンに立つこと自体がしんどい時期。<strong>「冷凍庫を開ければ栄養バランスの整った食事がある」</strong>という安心感は、産後ママの精神的な救いになるという声が目立ちます。
        </p>

        <SubHeading>2. 葉酸・鉄・カルシウムを意識した設計が信頼できる</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          妊娠期〜授乳期に不足しやすい栄養素を踏まえた設計に対し、<strong>「サプリで補うより自然な形で栄養が取れる」</strong>「他社にはない特化型」と評価する声が見られます。管理栄養士監修の信頼性も高評価のポイント。
        </p>

        <SubHeading>3. 産後ギフト・出産祝いとして喜ばれる</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          自分用だけでなく、<strong>友人・家族への出産祝いとして贈るパターン</strong>も増えているとの評判。「物よりも実用的で本当に助かるギフト」として支持されています。
        </p>

        <SubHeading>4. 味も家庭的で食べやすい</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          一般的な冷凍弁当のような「健康食=味気ない」という印象とは異なり、家庭的で優しい味付けという声が目立ちます。授乳期は刺激物を避けたいので、この味の方向性が逆にニーズに合致しています。
        </p>

        <SectionHeading id="bad-reviews">悪い口コミ・評判</SectionHeading>

        <SubHeading>1. 1食単価が高め</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          特化型サービスのため、コスパ重視のnoshやまごころケア食と比べると<strong>1食あたりの単価は高め</strong>に設定されています。「育休中の家計には厳しい」「全食置き換えは難しい」という声が見られます。対策としては、産後の特に大変な時期(退院後1〜2ヶ月)だけ集中利用するなどメリハリをつけるのがおすすめ。
        </p>

        <SubHeading>2. メニューのバリエーションが大手より少ない</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          nosh(60種類以上)や三ツ星ファーム(80種類以上)と比べると、選択肢の幅は限られます。長期で毎日利用すると<strong>「同じメニューに当たることが増える」</strong>感覚を持つ方もいます。短期集中型の利用と相性が良いと言えます。
        </p>

        <SubHeading>3. 量は女性向けで男性には少ない</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          女性ターゲットに最適化されているため、夫婦で食べると<strong>男性側がボリュームに物足りなさを感じる</strong>ケースがあります。ご飯やサラダを追加する、男性は別途主菜を増やすなどの工夫が必要。
        </p>

        <SectionHeading id="merits">口コミから分かるメリット5つ</SectionHeading>

        {[
          { num: 1, title: "「料理しなきゃ」という呪縛から解放される", text: "産後ママの最大の苦痛のひとつは「自分の食事は適当でいい」と感じて栄養が偏ること。ママの休食を冷凍庫に常備すれば「ちゃんと食べてる」という自己肯定感が保てます。これは食べ物以上の心理的価値。" },
          { num: 2, title: "産婦人科の食事指導と矛盾しにくい", text: "栄養バランス・塩分・カルシウムなどを意識した設計のため、医師や助産師から受ける一般的な食事指導と方向性が一致しやすい。「これを食べていいの？」という不安が少ない設計です。" },
          { num: 3, title: "出産祝い・お見舞いとしても喜ばれる", text: "贈答用として送る人が増えているのは、「実用的で本当に助かる」という産後ママの実感がベース。お祝い金やベビー服より、産後ママの体を直接救うギフトとして評価されています。" },
          { num: 4, title: "夫婦で食事タイミングがズレても柔軟に対応", text: "産後は夜中授乳・昼寝・育児で食事リズムがバラバラ。冷凍ストックがあれば、夫婦それぞれが好きなタイミングで温めて食べられます。「夫の帰りを待って一緒に食べる」「先に冷めた食事を取っておく」というストレスが消えます。" },
          { num: 5, title: "断乳・卒乳後もダイエット用に転用できる", text: "授乳期が終わったあとも、産後ダイエット用として継続できる栄養設計。「授乳中だから食べる」だけでなく、「産後の体型戻し」のフェーズでも役立ちます。" },
        ].map((merit) => (
          <div key={merit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">{merit.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{merit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{merit.text}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="demerits">注意すべきデメリット3つ</SectionHeading>

        {[
          { num: 1, title: "1食単価が一般的な宅配弁当より高め", text: "ライフステージ特化型の栄養設計の対価として、価格は高めに設定されています。育休中の家計負担が気になる場合は、夕食だけ・週3日だけなど部分置き換えで運用するのがおすすめ。" },
          { num: 2, title: "メニュー数は大手より少ない", text: "noshや三ツ星ファームのような豊富なラインナップは期待できません。1〜2ヶ月の集中利用、または「平日昼食だけ」など部分利用での運用が現実的です。" },
          { num: 3, title: "アレルギー・原材料は要確認", text: "妊娠期・授乳期は特定の食材を避けたいケースが多々あります。アレルギーや特定食材の回避が必要な方は、メニュー詳細・原材料表示を必ず確認してから注文してください。心配な場合は事前にカスタマーサポートに問い合わせるのが安全。" },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{demerit.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{demerit.text}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="recommend">おすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>ママの休食がおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "妊娠中で自炊が辛い・つわりがある人",
              "産後すぐ〜授乳期の女性で実家サポートがない人",
              "夫が仕事で日中ワンオペになる核家族世帯",
              "産後ママへのギフトを探している家族・友人",
              "管理栄養士監修の安心感を重視する人",
              "産後ダイエット・栄養補給を意識した食事をしたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>ママの休食をおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "1食単価を500〜600円に抑えたい人(→nosh, まごころケア食)",
              "メニュー数の豊富さを最重視する人(→三ツ星ファーム, nosh)",
              "夫婦で同じ宅配を共有したい場合(男性にはボリューム不足の可能性)",
              "妊娠・出産・授乳と関係ない一般のダイエット目的の人",
              "高齢者向けの軟らかい食事が必要な人(→食宅便/まごころケア食)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SectionHeading id="comparison">他の産後向け宅食との比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          産後・授乳期の食事サポートには、ママの休食以外にも選択肢があります。代表的な選択肢を比較しました。
        </p>

        <ComparisonTable
          headers={["項目", "ママの休食", "nosh", "ワタミの宅食"]}
          rows={[
            ["主なターゲット", "妊娠・産後・授乳期女性", "一般・ダイエット中", "高齢者・健康志向"],
            ["栄養設計の方向性", "葉酸・鉄・カルシウム・タンパク質重視", "糖質30g以下・塩分2.5g以下", "管理栄養士監修・塩分配慮"],
            ["1食単価", "高め", "599円〜", "590〜680円"],
            ["メニュー数", "中(産後特化)", "60種類以上", "コース制"],
            ["冷凍/冷蔵", "冷凍", "冷凍", "冷蔵(主)/冷凍(ダイレクト)"],
            ["配送", "全国", "全国", "エリア限定(冷蔵)"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※2026年5月時点の公開情報。最新の正確な情報は各公式サイトでご確認ください。</p>

        <p className="text-sm mb-6 leading-relaxed">
          産後ママ向けの宅食を幅広く比較したい方は、<Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark underline">産後ママにおすすめの宅食</Link>もあわせてご覧ください。
        </p>

        <SectionHeading id="faq">よくある質問(FAQ)</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ:ママの休食はこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">ママの休食の総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度(産後ママ向け)", 5],
                  ["栄養設計(妊娠/授乳期向け)", 5],
                  ["味", 4],
                  ["コスパ", 3],
                  ["メニュー数", 3],
                  ["ギフト適性", 5],
                ].map(([label, count], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-white/50" : ""}>
                    <td className="border border-warm-border px-3 py-2 font-medium">{label as string}</td>
                    <td className="border border-warm-border px-3 py-2"><StarRating count={count as number} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            ママの休食は、<strong>「妊娠中・産後・授乳期の女性」という明確なターゲットに最適化された、唯一無二の宅配サービス</strong>です。一般的なコスパ重視の宅配と比べると価格は高めですが、その特化性に対価を払う価値は十分あります。
          </p>
          <p className="text-sm leading-relaxed">
            産後の特に大変な時期(退院後1〜2ヶ月)に集中利用、または出産祝いギフトとしての贈答利用が特におすすめ。料金・プラン詳細は変更される可能性があるため、申込前に必ず<a href="https://mamanokyushoku.com/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>で最新情報をご確認ください。
          </p>
        </div>

        <CTAButton href="https://mamanokyushoku.com/">ママの休食 公式サイトをチェック</CTAButton>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">産後ママにおすすめの宅食</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">noshの口コミ・評判</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">一人暮らしにおすすめの宅食</Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。</p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/sango-osusume/" className="text-accent hover:text-accent-dark underline">産後ママにおすすめの宅食</Link></li>
            <li><Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline">ダイエットにおすすめの宅食</Link></li>
            <li><Link href="/articles/jisshitsu-tanka-hikaku/" className="text-accent hover:text-accent-dark underline">実質単価で比較する宅食</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
