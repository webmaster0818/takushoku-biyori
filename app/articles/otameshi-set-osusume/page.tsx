import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "宅配弁当のお試しセットおすすめ7選【2026年版】初回限定価格・送料無料を徹底比較";
const ARTICLE_DESCRIPTION =
  "宅配弁当のお試しセットを徹底比較。nosh・三ツ星ファーム・食宅便・ワタミの宅食ダイレクト・DELIPICKS・ウェルネスダイニング・まごころケア食の初回限定価格、送料、食数、解約条件まで2026年最新情報をまとめました。失敗しない選び方も解説。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/otameshi-set-osusume/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅配弁当 お試しセット, 宅食 お試し, 冷凍弁当 初回限定, nosh お試し, 三ツ星ファーム お試し, 食宅便 お試し, ワタミ お試し, 宅配弁当 送料無料, 宅食 初回 安い",
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
    question: "宅配弁当のお試しセットは1回だけで解約できますか？",
    answer:
      "多くのサービスで「最低注文回数の縛りなし」となっており、お試し1回で解約できます。たとえばnoshはマイページから即解約可能、三ツ星ファームも初回1回で解約OKです。一方で、定期コース申し込み型のサービス（食宅便の定期コースなど）は、解約タイミングに次回お届け日の○日前までという条件があるため、申し込み前に必ず公式サイトの解約規約を確認してください。最新の解約条件は各社公式サイトでの確認が必須です。",
  },
  {
    question: "お試しセットは送料無料ですか？",
    answer:
      "サービスによって異なります。たとえばDELIPICKSは初回送料無料キャンペーンを実施することが多く、ワタミの宅食ダイレクトも「いきなり3食セット」などで送料無料の場合があります。一方、noshや三ツ星ファームは初回でも通常の地域別送料がかかります。送料の有無・金額は時期によりキャンペーン内容が変わるため、申し込み時点で公式サイトの「送料」欄を必ず確認してください。",
  },
  {
    question: "お試しセットだけ買って継続しないことは可能？",
    answer:
      "可能です。ただしサービスにより方法が違います。(1)単発購入型（ワタミの宅食ダイレクトの「いきなり○食セット」など）は、最初から定期申し込みではないため自動継続されません。(2)定期申し込み型（nosh・三ツ星ファーム・DELIPICKSなど）は、初回お試し価格で申し込んだあと2回目以降が通常価格で自動継続されるため、不要なら次回配送のスキップまたは解約手続きが必要です。継続を希望しない場合は、初回到着後すぐにマイページから停止・解約手続きをしましょう。",
  },
  {
    question: "お試しセットの食数はどれくらい？",
    answer:
      "サービスによって3食〜10食と幅があります。少食数（3〜4食）のお試しは「とりあえず味だけ確認したい」人向け、6〜10食は「メニューの幅も確かめたい」人向けです。一人暮らしで冷凍庫が小さい方は3〜6食のお試しから、家族で味見したい方や本格的に検討している方は8〜10食のお試しがおすすめです。具体的な食数・料金は各社で頻繁にキャンペーン変更があるため、本記事のリンクから最新情報をチェックしてください。",
  },
  {
    question: "複数のお試しセットを同時に頼んでも大丈夫？",
    answer:
      "問題ありません。むしろ「2〜3社を同時に試して味とサイズ感を比較する」のは最も失敗が少ない選び方です。ただし冷凍庫のスペースには注意が必要で、1社あたり6食でも2社頼むと12食分の冷凍スペース（容器サイズ約18×18×4.5cmが目安）が必要になります。冷凍庫が小さい方は、配送日を1週間ずつずらして頼むなどの工夫をしましょう。詳しくは関連記事「冷凍庫が小さい家庭でも続けられる冷凍宅配弁当の選び方」も参照してください。",
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
          <span className="text-foreground/70">おすすめ</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">お試しセットおすすめ7選</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "intro", label: "お試しセットを賢く使うメリット" },
    { id: "how-to-choose", label: "失敗しないお試しセットの選び方5つ" },
    { id: "ranking", label: "お試しセットおすすめ7選【2026年版】" },
    { id: "comparison", label: "7社のお試しセット比較表" },
    { id: "caution", label: "申し込み前に必ず確認すべき3つの注意点" },
    { id: "tips", label: "お試しで失敗しないための裏ワザ" },
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

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
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

function CTAButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="inline-block bg-accent text-white font-bold text-sm px-5 py-3 rounded-lg hover:bg-accent-dark transition-colors"
    >
      {label} &rarr;
    </a>
  );
}

export default function OtameshiSetOsusumePage() {
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
      { "@type": "ListItem", position: 2, name: "おすすめ" },
      { "@type": "ListItem", position: 3, name: "お試しセットおすすめ7選" },
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
            おすすめ
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {ARTICLE_TITLE}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>
              監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-xs leading-relaxed">
          <p className="font-bold mb-1">広告・PR表示について</p>
          <p>
            本記事には各社サービスへのアフィリエイトリンクを含みます。掲載順位・選定はキャンペーン提供有無に左右されず、編集部の独自基準で決定しています。価格・送料・キャンペーン内容は変動するため、申し込み前に必ず各社公式サイトで最新情報をご確認ください。
          </p>
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「宅配弁当を始めたいけど、自分の口に合うかわからない」「いきなり定期購入は不安」——そんな方にこそ活用してほしいのが<strong>お試しセット</strong>です。
          </p>
          <p className="mb-3">
            お試しセットは、通常価格よりも安く・少食数から始められる初回限定の特別プラン。<strong>失敗しても損失が小さく、複数社を比較できる</strong>のが最大のメリットです。
          </p>
          <p>
            この記事では、編集部が2026年5月時点で各社公式サイトを調査し、お試しセットを提供している主要7社を厳選。料金・食数・送料・解約条件まで一覧で比較できる形にまとめました。
          </p>
        </div>

        <TableOfContents />

        <SectionHeading id="intro">お試しセットを賢く使うメリット</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当のお試しセットには、以下のような他にはない利点があります。
        </p>

        <SubHeading>1. 通常購入よりも安く始められる</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          各社とも初回限定で1食あたり数十円〜数百円の割引が設定されているケースが多く、「とりあえず1回試したい」というニーズにマッチします。たとえば通常1食700円のサービスが、お試しなら1食500円台で食べられることも珍しくありません。なお、具体的な値引き額は時期によりキャンペーンが頻繁に変わるため、本記事の各社リンクから最新の公式キャンペーン情報を確認してください。
        </p>

        <SubHeading>2. 少食数から始められて冷凍庫を圧迫しない</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          通常の定期プランは6食〜10食が主流ですが、お試しセットは3食〜6食から選べるサービスもあります。一人暮らしで冷凍庫が小さい方や、「とにかく味だけ先に試したい」方にとって少食数オプションは非常に重要なポイントです。
        </p>

        <SubHeading>3. 複数社を同時に比較できる</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          同じ「冷凍宅配弁当」でも、味の方向性・量・容器サイズ・温め方は各社まったく違います。文字情報や口コミだけでは比較しきれない部分を、お試しセットを2〜3社並行で頼むことで実食比較できるのが大きな利点です。
        </p>

        <SubHeading>4. 解約しやすいサービスを見極められる</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          実際にお試しで申し込んでみると、「マイページから即解約できるか」「電話必須か」「次回配送のスキップ操作はわかりやすいか」など、長く付き合えるサービスかどうかが体感できます。これは事前情報だけでは絶対にわからない要素です。
        </p>

        <SectionHeading id="how-to-choose">失敗しないお試しセットの選び方5つ</SectionHeading>

        <SubHeading>選び方1: 目的を明確にする</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          「ダイエット目的」「健康管理（糖質・塩分制限）」「時短」「グルメ志向」など、自分のニーズを最初にはっきりさせましょう。ダイエットならnoshやDELIPICKS、健康管理ならウェルネスダイニング、グルメ志向なら三ツ星ファームのように、サービスの強みは異なります。
        </p>

        <SubHeading>選び方2: 「単発購入型」か「定期申し込み型」かを確認</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食ダイレクトの「いきなり○食セット」のような<strong>単発購入型</strong>は、お試しを頼んでも自動継続されません。一方、nosh・三ツ星ファーム・DELIPICKSなどは<strong>定期申し込み型</strong>で、初回お試し価格で頼んだあと2回目以降が自動的に通常価格で配送されます。継続するつもりがない場合は、初回到着後すぐに次回配送のスキップ・解約手続きを忘れずに。
        </p>

        <SubHeading>選び方3: 送料込みの「実質1食あたり価格」で比較</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          表面的な「お試し価格」だけでなく、送料を加算した「実質1食あたり価格」で比較するのが鉄則です。送料が安いサービスを選ぶ視点は、関連記事の<Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline">送料が安い宅配弁当ランキング</Link>でも詳しく解説しています。
        </p>

        <SubHeading>選び方4: 冷凍庫のスペースを事前確認</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          サービスごとに容器サイズが異なります。一般的には18×18×4.5cm前後ですが、サービスによってもう少し大きいものもあります。一人暮らしの30L冷凍庫だと、10食分は入りきらないことも。冷凍庫の容量に不安がある方は、3〜6食の少食数お試しから始めましょう。
        </p>

        <SubHeading>選び方5: 解約条件は必ず申し込み前に確認</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          「次回お届け日の何日前までに連絡が必要か」「マイページからできるか・電話必須か」は、サービスにより大きく異なります。お試しのつもりが解約手続きを忘れて自動的に2回目が届いてしまうトラブルは少なくありません。申し込み前に必ず公式サイトの「解約・スキップ方法」を確認してください。
        </p>

        <SectionHeading id="ranking">お試しセットおすすめ7選【2026年版】</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ここからは、編集部が2026年5月時点で各社公式サイトを調査し、お試しセット・初回限定キャンペーンを実施している主要7社を順に紹介します。なお、価格やキャンペーン内容は変動しますので、申し込み前に必ず公式サイトで最新情報をご確認ください。
        </p>

        <SubHeading>1位: nosh（ナッシュ） — メニュー自由度No.1の定番</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          冷凍宅配弁当の業界最大手の一つ。60種類以上のメニューから自分で選べる自由度の高さと、全メニュー糖質30g以下・塩分2.5g以下という栄養設計が強みです。初回限定の割引クーポンが提供されることが多く、6食・8食・10食プランから選べます。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          <strong>こんな人におすすめ:</strong> 自分でメニューを選びたい人、糖質制限ダイエット中の人、アプリでサクッと管理したい人。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          <strong>注意点:</strong> 定期申し込み型のため、お試しのみで終了したい場合は初回到着後にマイページから解約手続きを忘れずに。最新の初回キャンペーン内容は公式サイトで確認を。
        </p>
        <div className="mb-6">
          <CTAButton href="https://nosh.jp/" label="noshの公式サイトで詳細を見る" />
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          詳しいレビューは <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline">noshの口コミ・評判記事</Link> をご覧ください。
        </p>

        <SubHeading>2位: 三ツ星ファーム — 味のクオリティ重視派に</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          一流シェフ監修のメニューが特徴で、「冷凍弁当のイメージが変わった」という口コミが多いサービス。糖質25g以下・カロリー350〜500kcal・塩分2.5g以下という栄養設計です。お試し的に少食数から始められるプランがあるため、まずは味のレベル感を確かめたい方に向きます。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          <strong>こんな人におすすめ:</strong> 味のクオリティを最優先したい人、グルメ志向の人、外食が多くて自宅でもレストラン品質を求める人。
        </p>
        <div className="mb-6">
          <CTAButton href="https://mitsuboshi-farm.jp/" label="三ツ星ファームの公式サイトで詳細を見る" />
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          詳しいレビューは <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline">三ツ星ファームの口コミ・評判記事</Link> をご覧ください。
        </p>

        <SubHeading>3位: 食宅便 — コースの種類が豊富</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          日清医療食品が運営する宅配弁当。コースの種類が非常に多く、「低糖質セレクト」「塩分ケア」「たんぱくケア」など健康目的別に選べます。お試し的に1回だけ単発で頼めるコースもあり、自分の健康課題に合った1コースから試せます。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          <strong>こんな人におすすめ:</strong> 具体的な健康課題（糖質・塩分・たんぱく質）がある人、和食中心の落ち着いた味が好みの人。
        </p>
        <div className="mb-6">
          <CTAButton href="https://shokutakubin.com/" label="食宅便の公式サイトで詳細を見る" />
        </div>

        <SubHeading>4位: ワタミの宅食ダイレクト — 単発購入できる安心感</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          ワタミグループの宅配弁当サービス。「いきなり○食セット」など<strong>定期申し込みではない単発購入型</strong>のお試しプランがあり、自動継続されない安心感があります。和食寄りの優しい味付けで、シニア層やご家族用にも選びやすいラインナップです。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          <strong>こんな人におすすめ:</strong> 「定期に自動でつながってしまうのが不安」という初めての方、和食派の方、家族や両親と一緒に試したい方。
        </p>
        <div className="mb-6">
          <CTAButton href="https://www.watami-takushoku-direct.jp/" label="ワタミの宅食ダイレクトの公式サイトで詳細を見る" />
        </div>

        <SubHeading>5位: DELIPICKS（旧CHEFBOX）— 主菜2品の満足感</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          一流シェフ監修のメイン2品が特徴のサービス。野菜の品目数が多く、満足感のある一食を求める方に支持されています。初回限定キャンペーンが用意されることが多く、お試し用の少食数プランから始められます。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          <strong>こんな人におすすめ:</strong> ボリュームと野菜量を両立させたい人、シェフ品質のメニューを求める人。
        </p>
        <div className="mb-6">
          <CTAButton href="https://deli-picks.com/" label="DELIPICKSの公式サイトで詳細を見る" />
        </div>

        <SubHeading>6位: ウェルネスダイニング — 制限食特化のお試し</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          管理栄養士監修の制限食特化サービス。「糖質制限」「塩分制限」「たんぱく質制限」など、医師から食事制限を指示されている方や高齢の家族に頼みたい方向けです。お試し的に1セットだけ単発で頼めるプランがあるのも特徴です。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          <strong>こんな人におすすめ:</strong> 糖尿病・腎臓病・高血圧などで医師から食事制限を指示されている人、栄養管理の専門性を最優先したい人。
        </p>
        <div className="mb-6">
          <CTAButton href="https://www.wellness-dining.com/" label="ウェルネスダイニングの公式サイトで詳細を見る" />
        </div>

        <SubHeading>7位: まごころケア食 — コスパ最強のシニア向け</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          1食あたりの価格が業界最安水準で、シニア・高齢者世帯にも人気のサービス。お試し的に少食数プランから始められ、栄養面では塩分・糖質・たんぱく質などのケアコースが用意されています。
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          <strong>こんな人におすすめ:</strong> とにかくコスパを重視する人、シニア・高齢者の家族向け、続けやすい価格帯を求める人。
        </p>
        <div className="mb-6">
          <CTAButton href="https://magokoro-care-shoku.com/" label="まごころケア食の公式サイトで詳細を見る" />
        </div>

        <SectionHeading id="comparison">7社のお試しセット比較表</SectionHeading>

        <p className="text-sm mb-4 leading-relaxed">
          各社のお試し的に頼めるプランの特徴を一覧化しました。具体的な価格・送料は公式サイトのキャンペーン状況により頻繁に変動するため、必ず公式サイトで最新情報を確認してください。
        </p>

        <ComparisonTable
          headers={["サービス", "申込みタイプ", "向いている人", "解約難易度"]}
          rows={[
            ["nosh", "定期申し込み型", "メニュー自由度・ダイエット", "◎（マイページ即時）"],
            ["三ツ星ファーム", "定期申し込み型", "味のクオリティ重視", "○（Web/電話）"],
            ["食宅便", "定期/単発両方あり", "健康課題別の制限食", "○（Web/電話）"],
            ["ワタミの宅食ダイレクト", "単発購入も可", "和食派・シニア層", "◎（単発なら自動継続なし）"],
            ["DELIPICKS", "定期申し込み型", "ボリューム・シェフ品質", "○（Web/電話）"],
            ["ウェルネスダイニング", "定期/単発両方あり", "制限食特化", "○（Web/電話）"],
            ["まごころケア食", "定期/単発両方あり", "コスパ・シニア向け", "○（Web/電話）"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          上記の「向いている人」「解約難易度」は編集部が公式情報をもとに整理したものです。各社の細かい価格・キャンペーン・解約規約は変更されることがあるため、申し込み前に必ず公式サイトでご確認ください。
        </p>

        <SectionHeading id="caution">申し込み前に必ず確認すべき3つの注意点</SectionHeading>

        <SubHeading>注意1: 定期申し込み型は2回目から自動継続</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          先述のとおり、多くのお試しセットは「初回限定価格の定期申し込み」です。お試しのみで終了したい場合は、初回到着後に必ずマイページから次回配送のスキップまたは解約手続きを行いましょう。手続きを忘れると、2回目以降は通常価格で配送される点に注意してください。
        </p>

        <SubHeading>注意2: 解約・スキップの締切日に余裕を持つ</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          各社とも「次回お届け日の○日前まで」という締切があります。サービスにより4日前〜10日前と幅があるため、初回お試し品が届いた当日にマイページで次回配送日を確認し、必要なら即座にスキップ・解約手続きを進めるのが安全です。
        </p>

        <SubHeading>注意3: 送料・支払い手数料の確認</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          お試し価格は割引されていても、送料が別途かかるケースがほとんどです。北海道・沖縄は他地域より送料が高い設定のサービスが多いため、お住まいの地域の送料を必ず確認してください。代金引換を選ぶと手数料が加算されるサービスもあります。
        </p>

        <SectionHeading id="tips">お試しで失敗しないための裏ワザ</SectionHeading>

        <SubHeading>裏ワザ1: 2社並行でお試しして比較する</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          1社だけ試すと「他のサービスと比べてどうなのか」がわかりません。冷凍庫スペースに余裕があれば、対極にある2社（例: noshと三ツ星ファーム、ワタミとnosh）を同時にお試しして実食比較するのが最も失敗が少ない方法です。
        </p>

        <SubHeading>裏ワザ2: 同居家族と分けて食べる</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          お試し10食を1人で消費するのは時間がかかるため、家族と分け合うのもおすすめです。「自分の味覚」と「家族の味覚」両方の評価が得られるので、継続判断の精度が上がります。
        </p>

        <SubHeading>裏ワザ3: 同じカテゴリで複数試す</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          「ダイエット用」を探しているなら、ダイエット系3社（nosh・DELIPICKS・Muscle Deliなど）をお試し比較するのが効率的です。同じカテゴリ内で比較するほうが、味・量・コスパの違いが鮮明にわかります。
        </p>

        <SubHeading>裏ワザ4: SNSで最新キャンペーンをチェック</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          各社の公式X（旧Twitter）アカウントでは、期間限定の追加割引クーポンを配布することがあります。申し込み直前にSNSで「nosh クーポン」「三ツ星ファーム キャンペーン」など検索してみると、公式サイトに載っていないお得情報が見つかることも。最終的な価格は公式申込画面に表示されるものが正となります。
        </p>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ：自分に合うお試しセットの選び方</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            お試しセットは、宅配弁当を始める前の「失敗しない試金石」として最強の手段です。最後にもう一度、選び方のポイントを整理しておきます。
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm mb-4">
            <li><strong>メニュー自由度 + コスパ重視</strong> → nosh</li>
            <li><strong>味のクオリティ重視</strong> → 三ツ星ファーム</li>
            <li><strong>具体的な健康課題あり</strong> → 食宅便、ウェルネスダイニング</li>
            <li><strong>自動継続が不安</strong> → ワタミの宅食ダイレクト（単発購入）、まごころケア食</li>
            <li><strong>ボリューム + シェフ品質</strong> → DELIPICKS</li>
            <li><strong>シニア・コスパ最優先</strong> → まごころケア食</li>
          </ul>
          <p className="text-sm leading-relaxed">
            <strong>迷ったら、対極の2社を同時にお試し</strong>するのが最も失敗が少ない選び方です。例: 「メニュー自由度のnosh」と「品質重視の三ツ星ファーム」を並行して試せば、自分が何を重視するかが明確になります。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            送料が安い宅配弁当ランキング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            noshの口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            三ツ星ファームの口コミ・評判
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
