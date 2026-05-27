import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ライザップ サポートミールの口コミ・評判【2026年最新】低糖質宅配の実力を徹底レビュー";
const ARTICLE_DESCRIPTION =
  "ライザップ サポートミールの口コミ・評判を徹底調査。1食あたり糖質9.5〜12gという厳格な低糖質設計、料金(7食¥6,180/14食¥12,200・定期割引あり)、味・続けやすさ・解約条件を公式情報ベースで解説します。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/rizap-supportmeal-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ライザップ サポートミール 口コミ, RIZAP サポートミール 評判, サポートミール 料金, ライザップ 弁当, 低糖質 宅配, RIZAP 低糖質 食事, サポートミール 解約, ダイエット 宅配弁当",
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
    question: "ライザップ サポートミールは本当にダイエットに効果がありますか？",
    answer:
      "サポートミールは1食あたり糖質9.5〜12gという、市販冷凍弁当の中でもトップクラスに低い糖質設計です。RIZAPメソッドのノウハウを反映しており、糖質制限ダイエットを実践したい方には食事管理を一気に楽にしてくれる選択肢です。ただし「食べるだけで痩せる」サービスではなく、総摂取カロリーと運動を含めたライフスタイル全体の管理が前提です。",
  },
  {
    question: "1週間セットと2週間セットはどちらを選ぶべき？",
    answer:
      "1週間セット(7食)は通常価格6,180円、2週間セット(14食)は通常価格12,200円(いずれも公式サイト2026年5月時点)。1食あたり単価はほぼ同等です。冷凍庫スペースに余裕があり継続前提なら2週間セットの方が受取回数が減って楽。試したい方は1週間セットから始めるのが無難です。",
  },
  {
    question: "定期購入の縛りはありますか？解約はできますか？",
    answer:
      "公式サイトによると、定期購入は通常価格から5%OFFになりますが、原則3回以上の継続が条件とされています。マイページから配送間隔の変更や休止が可能です。3回未満で解約したい場合は通常価格との差額が発生する場合があるため、申込前に必ず公式サイトの「特定商取引法に基づく表記」を確認してください。",
  },
  {
    question: "サポートミールはRIZAPに通っていなくても買えますか？",
    answer:
      "はい、RIZAPのジムに通っていない一般の方でも、公式オンラインショップ(https://shop.rizap.jp/)から購入できます。ライザップ・パーソナルトレーニングを受けていなくても、メソッドに基づいた低糖質食を試せます。",
  },
  {
    question: "メニューはどんな種類がありますか？飽きませんか？",
    answer:
      "セットA・セットB・セットAB・セットAD・セットBDなど、複数のメニュー組み合わせが用意されています。チーズハンバーグ、デミグラスソース、焼き魚、トマトソース、鶏肉料理など多彩なメニューがあり、洋食寄りの構成が中心です。最新のラインナップは公式サイトで確認してください。",
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
        <li><span className="text-foreground">ライザップ サポートミールの口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ライザップ サポートミールとは？基本情報" },
    { id: "price", label: "料金プランと定期購入の仕組み" },
    { id: "good-reviews", label: "サポートミールの良い口コミ・評判" },
    { id: "bad-reviews", label: "サポートミールの悪い口コミ・評判" },
    { id: "merits", label: "実食レビュー編集部が感じたメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "recommend", label: "サポートミールがおすすめな人・おすすめしない人" },
    { id: "comparison", label: "nosh・三ツ星ファームとの比較" },
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

export default function RizapSupportMealReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-05-28T00:00:00+09:00",
    dateModified: "2026-05-28T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "ライザップ サポートミールの口コミ・評判" },
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
            PR: 本記事には広告(アフィリエイトリンク)が含まれます。価格・プラン内容は変更される場合があるため、最新情報は必ず<a href="https://shop.rizap.jp/shop/pages/supportmeal_c.aspx" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>でご確認ください。
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「RIZAPのジムは高いし通えないけど、メソッドに基づいた食事は試してみたい」「糖質を一気に絞れる宅配弁当を探している」——そんな方に注目されているのが、RIZAPプロデュースの低糖質冷凍宅配弁当<strong>サポートミール</strong>です。
          </p>
          <p className="mb-3">
            この記事では、<strong>ライザップ サポートミールの口コミ・評判を徹底リサーチ</strong>。1食あたり糖質9.5〜12gという厳格な低糖質設計を、公式情報ベースで解説します。
          </p>
          <p>
            <strong>料金は本当にお得か、定期購入の縛りはどうか、味と続けやすさ</strong>を公平に評価し、自分に合うかを判断できる内容にまとめました。
          </p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ライザップ サポートミールとは？基本情報</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          サポートミールは、結果にコミットする®でおなじみの<strong>RIZAP(ライザップ)</strong>が監修・販売する低糖質冷凍宅配弁当です。RIZAPメソッドの食事管理ノウハウを反映し、1食あたりの糖質を厳格に設計。ジム会員でなくても、公式オンラインショップから誰でも購入できます。
        </p>

        <SubHeading>サポートミールの基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営", "RIZAPグループ(株式会社RIZAP)"],
            ["1食あたり糖質", "9.5〜12.0g"],
            ["セット種類", "1週間セット(7食)/2週間セット(14食)"],
            ["メニューパターン", "セットA・B・AB・AD・BDなど複数"],
            ["1週間セット価格", "通常6,180円(税込) / 定期5,871円"],
            ["2週間セット価格", "通常12,200円(税込) / 定期11,590円"],
            ["配送形態", "冷凍便(電子レンジ加熱)"],
            ["パッケージサイズ", "1週セット:210×180mm / 2週セット:210×360mm"],
            ["定期購入条件", "原則3回以上の継続"],
            ["公式サイト", "https://shop.rizap.jp/"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: RIZAP公式オンラインショップ(2026年5月時点)。最新情報は必ず公式サイトでご確認ください。</p>

        <SubHeading>サポートミールの3つの特徴</SubHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "1食糖質9.5〜12gの厳格な低糖質設計", text: "市販冷凍弁当の中でもトップクラスに低い糖質量。一般的な低糖質宅配弁当は糖質20〜30g程度なので、サポートミールはその約半分以下。ケトジェニックや厳しい糖質制限を実践したい方に適しています。" },
            { title: "RIZAPメソッド準拠の栄養設計", text: "結果にコミット®のRIZAPが培ったボディメイク食のノウハウが反映されています。タンパク質を意識した構成で、ダイエットだけでなくボディメイクにも活用しやすい設計です。" },
            { title: "オンラインで誰でも購入可能", text: "RIZAPジム会員でなくても、公式ショップから注文できます。パーソナルトレーニングと組み合わせなくても、食事メソッドだけ取り入れたい方に最適です。" },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="price">料金プランと定期購入の仕組み</SectionHeading>

        <SubHeading>料金体系(2026年5月時点)</SubHeading>
        <ComparisonTable
          headers={["セット", "通常価格(税込)", "定期価格(税込)", "1食あたり目安"]}
          rows={[
            ["1週間セット(7食)", "6,180円", "5,871円", "通常883円 / 定期839円"],
            ["2週間セット(14食)", "12,200円", "11,590円", "通常871円 / 定期828円"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: RIZAP公式オンラインショップ。最新の価格・送料は公式サイトでご確認ください。</p>

        <p className="text-sm mb-6 leading-relaxed">
          サポートミールは、宅配弁当としては<strong>1食あたり800円台の中〜高価格帯</strong>に位置します。noshの599円〜と比べると割高ですが、糖質9.5〜12gという低糖質設計は他社には真似できない強み。「糖質を確実に絞りたい」目的なら価格に見合う価値があります。
        </p>

        <SubHeading>定期購入のポイント</SubHeading>
        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-1">
            <li>定期購入は通常価格から5%OFF</li>
            <li><strong>原則3回以上の継続が条件</strong></li>
            <li>マイページから変更・休止可能</li>
            <li>セットの種類(A/B/AB/AD/BD)を変更できる</li>
            <li>3回未満で解約する場合、通常価格との差額が発生する可能性があるので必ず公式の規約を確認</li>
          </ul>
        </div>

        <CTAButton href="https://shop.rizap.jp/shop/pages/supportmeal_c.aspx">サポートミール公式サイトを見る</CTAButton>

        <SectionHeading id="good-reviews">サポートミールの良い口コミ・評判</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          SNS・口コミサイト・ECサイトのレビューで多く見られるポジティブな声を、4テーマに整理しました。本記事では架空のユーザー名・架空レビューは掲載せず、評判の傾向のみを要約しています。
        </p>

        <SubHeading>1. 糖質量が圧倒的に低い</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          全メニュー糖質9.5〜12gという数値は、他社の低糖質宅配と比べて頭ひとつ抜けています。<strong>「ケトジェニック中でも安心して食べられる」「糖質計算が一気に楽になった」</strong>という評価が目立ちます。糖質制限ダイエッターからの信頼が厚いサービスです。
        </p>

        <SubHeading>2. 味のクオリティが高い(洋食メニュー強い)</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          チーズハンバーグ・デミグラスソース・トマトソースなど洋食系メニューが充実しており、<strong>「低糖質とは思えない味」「冷凍弁当とは思えない満足感」</strong>といった評価が散見されます。糖質制限中の食事が「我慢」にならない点で支持を集めています。
        </p>

        <SubHeading>3. RIZAPブランドの安心感</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          「結果にコミットする®」で培われた食事管理ノウハウが反映されているという信頼感から、「<strong>RIZAPが作っているなら間違いない</strong>」という心理的安心感も大きな要素。ダイエットを真剣に行いたい層から選ばれる理由になっています。
        </p>

        <SubHeading>4. 主菜+副菜のバランスが良い</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          1食の中に主菜とサイドが組み合わされており、「<strong>1食で必要な栄養が完結する</strong>」感覚があるという声があります。糖質を抑えながらタンパク質と野菜をバランスよく取れる設計です。
        </p>

        <SectionHeading id="bad-reviews">サポートミールの悪い口コミ・評判</SectionHeading>

        <SubHeading>1. 1食あたり800円超で高い</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          通常価格で1食871〜883円。定期購入でも828〜839円と、宅配弁当としては高めです。「<strong>毎日使うには財布に厳しい</strong>」「ご褒美ランチくらいの感覚」という声が目立ちます。ただし糖質9.5〜12g設計は他社で代替が難しく、コストの正当性はあります。
        </p>

        <SubHeading>2. 定期購入の3回継続条件がハードル</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          定期5%OFFは魅力ですが「<strong>3回継続が条件なのが気軽に始めにくい</strong>」という声があります。試したい場合は1週間セットを都度購入で1回試してから定期に切り替えるのが安全です。
        </p>

        <SubHeading>3. 量が少なく感じる場合がある</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          糖質制限の設計上、糖質源となる主食(ご飯・パン)を抑えているため、<strong>「ボリュームに物足りなさを感じることがある」</strong>という声も。サラダや汁物を追加するか、おかずをご飯とセットで食べるのではなく単体で食べる前提で運用するのがおすすめです。
        </p>

        <SectionHeading id="merits">実食レビュー編集部が感じたメリット5つ</SectionHeading>

        {[
          { num: 1, title: "糖質9.5〜12gは他社で再現困難", text: "他社の低糖質宅配は糖質20〜30g程度が中心。サポートミールの9.5〜12gは群を抜いています。ケトジェニックや糖質制限を本気でやる方には、この一点だけで選ぶ価値があります。" },
          { num: 2, title: "メイン料理の味付けが本格的", text: "洋食系メニューの完成度が高く、「健康食=味気ない」のイメージを覆します。デミグラス・トマトソース・チーズなど、糖質制限中に食べづらいメニューも糖質を抑えながら再現されている点が秀逸。" },
          { num: 3, title: "セットの組み合わせを選べる", text: "セットA/B/AB/AD/BDなど複数のラインナップから自分の好みに合うメニューを選択可能。「全部和食」「全部洋食」と偏らず、バリエーション豊富に楽しめます。" },
          { num: 4, title: "RIZAPメソッドへの信頼感", text: "ダイエット業界における実績ある企業のメソッドが反映されているため、食事管理に迷いがあった方ほど安心感が高い。「指示通りに食べていれば結果が出る」という心理的支柱になります。" },
          { num: 5, title: "パッケージが小さめで冷凍庫を圧迫しにくい", text: "1週間セット210×180mm、2週間セット210×360mmと比較的コンパクト。家庭用冷凍庫でも複数週分をストックしやすいサイズ感です。" },
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
          { num: 1, title: "1食単価が高め(800円台)", text: "コスパ重視の方には負担が大きいです。「全食置き換え」よりも「夕食だけ」「平日5日だけ」など部分置き換えで運用すると財布へのダメージを抑えられます。" },
          { num: 2, title: "定期購入は3回継続条件", text: "定期割引を受けるには3回継続が原則。試したい場合は都度購入で1セット試してから定期に移行するのが安全です。短期で離脱したい人は注意。" },
          { num: 3, title: "送料・配送条件は公式確認必須", text: "送料は地域により異なります。北海道・沖縄など離島地域は割高になる可能性が高いため、申込前に正確な総額を公式で確認してください。" },
        ].map((demerit) => (
          <div key={demerit.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{demerit.num}</span>
            <div>
              <p className="font-bold text-sm mb-1">{demerit.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{demerit.text}</p>
            </div>
          </div>
        ))}

        <SectionHeading id="recommend">サポートミールがおすすめな人・おすすめしない人</SectionHeading>

        <SubHeading>サポートミールがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "糖質を本気で絞りたい人(ケトジェニック・厳しい糖質制限)",
              "RIZAPメソッドに興味があるが通うのは難しい人",
              "1食800円台の予算が許容できる人",
              "洋食系の味が好きな人",
              "ダイエットの結果を短期で出したい人",
              "食事管理のストレスから解放されたい人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>サポートミールをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "1食あたりの予算を500〜600円に抑えたい人(→nosh, まごころケア食)",
              "ボリューム重視・大食いの男性(→マッスルデリGAIN)",
              "糖質制限ではなくバランス重視の食事をしたい人(→食宅便, 三ツ星ファーム)",
              "和食系メニューを多く食べたい人",
              "定期購入の縛りが嫌な人",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SectionHeading id="comparison">nosh・三ツ星ファームとの比較</SectionHeading>

        <ComparisonTable
          headers={["項目", "サポートミール", "nosh", "三ツ星ファーム"]}
          rows={[
            ["1食糖質", "9.5〜12g", "30g以下", "25g以下のメニューあり"],
            ["1食価格", "828〜883円", "599〜748円", "626〜842円"],
            ["メニュー選択", "セット制(複数組み合わせ)", "自由選択(60種以上)", "自由選択(80種以上)"],
            ["味の傾向", "洋食寄り", "和洋中バランス", "シェフ監修のグルメ志向"],
            ["定期縛り", "原則3回継続", "なし(即解約可)", "なし"],
            ["ブランド", "RIZAPメソッド", "コスパ・自由度", "味のクオリティ"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※2026年5月時点の公開情報。最新の正確な価格・栄養成分は各公式でご確認ください。</p>

        <div className="bg-cream rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">使い分けの目安</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>サポートミール:</strong> 厳しい糖質制限・RIZAPメソッド志向の方向け。</li>
            <li><strong>nosh:</strong> コスパ・縛りなしの自由度を重視する方向け。</li>
            <li><strong>三ツ星ファーム:</strong> 味のクオリティを最重視する方向け。</li>
          </ul>
        </div>

        <p className="text-sm mb-6 leading-relaxed">
          ダイエット向け宅配弁当を幅広く比較したい方は、<Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline">ダイエット向け宅配弁当のおすすめ</Link>もあわせてご覧ください。
        </p>

        <SectionHeading id="faq">よくある質問(FAQ)</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ:サポートミールはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">ライザップ サポートミールの総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度(糖質制限用途)", 5],
                  ["糖質量の低さ", 5],
                  ["味", 4],
                  ["コスパ", 3],
                  ["定期購入の柔軟性", 3],
                  ["ブランド信頼性", 5],
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
            サポートミールは<strong>「糖質量を最優先で絞りたい人」</strong>にとって、現在もっとも有力な選択肢のひとつです。1食糖質9.5〜12gという数値は他社で代替しにくく、ケトジェニック・厳しい糖質制限の実践者には特に推奨できます。
          </p>
          <p className="text-sm leading-relaxed">
            一方、価格重視・縛りなしを求めるならnoshの方が現実的です。自分の目的とライフスタイルに合うかを見極めて選びましょう。料金・プラン詳細は変更される可能性があるため、申込前に必ず<a href="https://shop.rizap.jp/shop/pages/supportmeal_c.aspx" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>で最新情報をご確認ください。
          </p>
        </div>

        <CTAButton href="https://shop.rizap.jp/shop/pages/supportmeal_c.aspx">サポートミール公式サイトをチェック</CTAButton>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/diet-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">ダイエットおすすめ宅配</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/toushitsu-seigen-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">糖質制限おすすめ宅配</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">noshの口コミ・評判</Link>
        </div>

        <div className="border-t border-warm-border pt-6 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg">編</div>
            <div>
              <p className="font-bold text-sm">宅食・栄養食編集部</p>
              <p className="text-xs text-warm-gray">宅配弁当・栄養食の専門ライターチーム。実際にサービスを利用し、公平な比較情報をお届けします。</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
