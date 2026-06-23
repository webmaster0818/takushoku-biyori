import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "ワタミの宅食ダイレクト お試しセット完全ガイド【2026年版】内容・送料・申込手順を解説";
const ARTICLE_DESCRIPTION =
  "ワタミの宅食ダイレクトのお試しセットを徹底解説。いつでも三菜/五菜/二菜の内容、料金、送料、申込手順、定期購入(三菜5%OFF/五菜3%OFF)の仕組みを公式情報ベースで丁寧に紹介。初めての方が迷わず始められる完全ガイドです。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/watami-direct-otameshi/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ワタミの宅食ダイレクト お試し, ワタミ 宅食 ダイレクト, ワタミ 冷凍 宅配, ワタミ いつでも三菜, ワタミ 五菜, ワタミ ダイレクト 申込, ワタミ ダイレクト 送料, ワタミ ダイレクト 定期",
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
    question: "ワタミの宅食とワタミの宅食ダイレクトの違いは？",
    answer:
      "「ワタミの宅食」は冷蔵の日替わり弁当を地域限定で配達するサービスで、専任スタッフが手渡し配達します。一方「ワタミの宅食ダイレクト」は冷凍弁当を全国にヤマト運輸クール宅急便で配送するECサービスです。配達地域・配送方式・メニュー構成が異なります。冷凍庫があれば全国どこでも注文できるのがダイレクトの強みです。",
  },
  {
    question: "お試しセットは何回まで購入できますか？",
    answer:
      "公式サイトでは「はじめての方限定」として継続割引/お試し割引が案内されています。お試し価格での購入回数や条件は時期によって変更される可能性があるため、申込前に必ず公式サイト(https://www.watami-takushoku-direct.jp/)の最新情報を確認してください。",
  },
  {
    question: "定期購入の割引はどれくらい？",
    answer:
      "公式サイトによれば、定期購入「おまかせセット」は都度購入価格から5%OFF、定期購入「選べるセット」は3%OFFとなっています。1食あたりの単価が下がるだけでなく、毎回注文する手間も省けます。継続予定なら定期購入が圧倒的にお得です。",
  },
  {
    question: "送料はいくらかかりますか？",
    answer:
      "ワタミの宅食ダイレクトはヤマト運輸クール宅急便での全国配送のため、地域により送料が異なります。北海道・沖縄など離島は割高になる可能性があります。注文画面で配送先住所を入力すると正確な送料が表示されるので、申込前に必ず最終総額を確認してください。",
  },
  {
    question: "解約・休止は簡単にできますか？",
    answer:
      "定期購入はマイページからスキップ・休止・解約手続きが可能とされています。具体的な締切日(次回お届け日の何日前まで)については公式サイトの「ご利用ガイド」や「よくあるご質問」を確認してください。電話での対応も用意されている場合があります。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">サービスガイド</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">ワタミの宅食ダイレクト お試しセット完全ガイド</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ワタミの宅食ダイレクトとは" },
    { id: "menu", label: "選べる3つのコース(三菜/五菜/二菜)" },
    { id: "price", label: "料金・定期割引の仕組み" },
    { id: "shipping", label: "送料と配送について" },
    { id: "howto-order", label: "お試しセットの申込手順" },
    { id: "merits", label: "ワタミの宅食ダイレクトのメリット5つ" },
    { id: "demerits", label: "注意すべきデメリット3つ" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
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

export default function WatamiDirectOtameshiPage() {
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
      { "@type": "ListItem", position: 2, name: "サービスガイド" },
      { "@type": "ListItem", position: 3, name: "ワタミの宅食ダイレクト お試しセット完全ガイド" },
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
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">サービスガイド</span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link></span>
          </div>
          <div className="mt-3 text-xs text-warm-gray bg-yellow-50 border border-yellow-200 rounded p-2">
            PR: 本記事には広告(アフィリエイトリンク)が含まれます。価格・お試しセット内容は変更される場合があるため、最新情報は必ず<a href="https://www.watami-takushoku-direct.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>でご確認ください。
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「ワタミの宅食ダイレクトを試してみたいけど、お試しセットって何が届くの？」「定期購入と都度購入はどう違う？」「送料はいくらかかる？」——初めての方が抱きがちな疑問を、このガイドで全部解決します。
          </p>
          <p className="mb-3">
            この記事では、<strong>ワタミの宅食ダイレクトのお試しセット・申込手順・料金・送料</strong>を公式情報ベースで完全解説。<strong>「いつでも三菜」「いつでも五菜」「いつでも二菜」</strong>の3つのコース比較から、定期購入の割引(三菜5%OFF / 五菜3%OFF)の仕組みまで詳しく紹介します。
          </p>
          <p>
            初めて宅配冷凍弁当を頼む方が、<strong>失敗せずに最適なセットを選べる</strong>内容にまとめました。
          </p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ワタミの宅食ダイレクトとは</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食ダイレクトは、居酒屋「ワタミ」でおなじみのワタミグループが運営する<strong>冷凍宅配弁当のECサービス</strong>です。地域限定で日替わり冷蔵弁当を配達する「ワタミの宅食」とは別ブランドで、ヤマト運輸のクール宅急便で<strong>全国どこでも</strong>注文可能。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          「<strong>管理栄養士が設計した献立を、チンするだけで簡単・便利に</strong>」というコンセプト。健康的な食事を、冷凍庫にストックしておけばいつでも食べられる手軽さが特徴です。
        </p>

        <SubHeading>基本スペック</SubHeading>
        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営", "ワタミ株式会社"],
            ["配送方法", "ヤマト運輸クール宅急便(冷凍)"],
            ["対応エリア", "全国"],
            ["献立設計", "管理栄養士監修"],
            ["コース", "いつでも三菜 / いつでも五菜 / いつでも二菜"],
            ["1食価格", "二菜360円〜 / 三菜399円〜 / 五菜499円〜"],
            ["定期割引", "おまかせセット5%OFF / 選べるセット3%OFF"],
            ["公式サイト", "https://www.watami-takushoku-direct.jp/"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: ワタミの宅食ダイレクト公式サイト(2026年5月時点)。最新情報は公式サイトでご確認ください。</p>

        <CTAButton href="https://www.watami-takushoku-direct.jp/">ワタミの宅食ダイレクト 公式サイトを見る</CTAButton>

        <SectionHeading id="menu">選べる3つのコース(三菜/五菜/二菜)</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食ダイレクトは3種類のコースから選べます。それぞれの特徴を整理しました。
        </p>

        <SubHeading>いつでも二菜(1食360円〜)</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          主菜1品+副菜1品のシンプルな構成。<strong>ライトな食事や朝食用・少食の方</strong>におすすめ。価格が最安なので「とりあえず試したい」「ちょい足し用にストック」したい方に向く構成です。
        </p>

        <SubHeading>いつでも三菜(1食399円〜)</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          主菜1品+副菜2品の<strong>標準コース</strong>。熱量は約150〜220kcal、食塩相当量は約1.0〜2.1g、たんぱく質は約8〜12g前後の設計(メニューにより変動)。塩分・カロリーが抑えめなので、健康志向の方や高齢者に支持される構成です。
        </p>

        <SubHeading>いつでも五菜(1食499円〜)</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          主菜1品+副菜4品の<strong>充実コース</strong>。熱量は約300〜400kcal程度で、三菜より食べごたえがあります。「副菜が多いほうが嬉しい」「栄養素のバリエーションが欲しい」方におすすめ。
        </p>

        <ComparisonTable
          headers={["コース", "構成", "1食価格", "熱量目安", "向いている人"]}
          rows={[
            ["いつでも二菜", "主菜1+副菜1", "360円〜", "比較的軽め", "朝食/少食/ちょい足し"],
            ["いつでも三菜", "主菜1+副菜2", "399円〜", "約150〜220kcal", "標準・健康志向"],
            ["いつでも五菜", "主菜1+副菜4", "499円〜", "約300〜400kcal", "充実型・食べごたえ重視"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※2026年5月時点の公開情報。栄養成分・価格はメニューにより変動。最新情報は公式でご確認ください。</p>

        <SectionHeading id="price">料金・定期割引の仕組み</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食ダイレクトは<strong>都度購入と定期購入</strong>の2種類の購入方式があります。定期購入のほうが割引が効いてお得です。
        </p>

        <SubHeading>都度購入 vs 定期購入</SubHeading>
        <ComparisonTable
          headers={["購入方式", "割引", "メリット", "デメリット"]}
          rows={[
            ["都度購入", "なし", "縛りなし・好きなときだけ", "毎回注文する手間 / 割引なし"],
            ["定期おまかせセット", "5%OFF", "毎回届く・割引最大", "メニューが選べない"],
            ["定期選べるセット", "3%OFF", "メニューを毎回選べる", "割引はおまかせより少ない"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          続けるつもりがあるなら<strong>定期購入のおまかせセット(5%OFF)</strong>が最もお得。メニュー選びに迷うのが嫌な人や、変化を楽しみたい人に向く運用です。「自分でメニューを選びたい」なら定期選べるセット(3%OFF)、「とりあえず試す」なら都度購入から始めるのが安全です。
        </p>

        <SubHeading>定期購入のスキップ・休止</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          公式サイトには「都合にあわせてまとめて受け取り」可能との記載があり、配送間隔の変更・スキップ・休止に対応している模様です。具体的な締切日や手続き方法は、申込前に公式サイトの「ご利用ガイド」や「よくあるご質問」を必ず確認してください。
        </p>

        <SectionHeading id="shipping">送料と配送について</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食ダイレクトはヤマト運輸クール宅急便で全国配送します。送料は配送地域により異なるため、注文画面で配送先住所を入力した時点で正確な送料が表示されます。
        </p>

        <SubHeading>送料の傾向(参考)</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          冷凍便の一般的な相場として、本州・四国・九州エリアは送料が安め、北海道・沖縄・離島は割高になる傾向があります。<strong>送料は1食あたり単価に大きく影響する</strong>ので、必ず申込前に総額を確認してください。
        </p>

        <SubHeading>送料を抑えるコツ</SubHeading>
        <ul className="text-sm mb-6 list-disc list-inside space-y-1">
          <li>1回の注文をまとめて多めに買い、配送回数を減らす</li>
          <li>定期購入の隔週・月1配送など、間隔を空けて受取頻度を下げる</li>
          <li>家族や同居人と共同注文する</li>
        </ul>

        <p className="text-sm mb-6 leading-relaxed">
          送料が安い宅配を全体比較したい方は、<Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline">送料が安い宅配ランキング</Link>もあわせてご覧ください。
        </p>

        <SectionHeading id="howto-order">お試しセットの申込手順</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ワタミの宅食ダイレクトを初めて注文する方向けに、申込の流れを説明します。
        </p>

        <SubHeading>Step 1: 公式サイトへアクセス</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          <a href="https://www.watami-takushoku-direct.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">ワタミの宅食ダイレクト公式サイト</a>を開きます。「はじめての方限定」のお試し割/継続割の案内バナーが目立つ位置に表示されているはずです。
        </p>

        <SubHeading>Step 2: コースを選ぶ(三菜/五菜/二菜)</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          自分の食事スタイルに合うコースを選びます。初めての方は、まず<strong>「いつでも三菜」の都度購入</strong>か<strong>「お試しセット」</strong>から試すのが無難。
        </p>

        <SubHeading>Step 3: 都度/定期を選ぶ</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          試したいだけなら都度購入、続ける前提なら定期購入(おまかせ5%OFF / 選べる3%OFF)を選択。定期の場合は配送間隔(週/隔週など)も指定します。
        </p>

        <SubHeading>Step 4: 住所・支払い情報を入力</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          配送先・連絡先・支払い方法(クレジットカード等)を入力。この段階で正確な送料が表示されるので、<strong>総額を必ず確認</strong>してから次へ進みます。
        </p>

        <SubHeading>Step 5: 注文確定→配送</SubHeading>
        <p className="text-sm mb-4 leading-relaxed">
          注文確定後、数日以内に冷凍便で発送されます。受取時には不在票対応や日時指定もヤマト運輸の通常サービスで利用可能です。
        </p>

        <CTAButton href="https://www.watami-takushoku-direct.jp/">公式サイトで申込みを進める</CTAButton>

        <SectionHeading id="merits">ワタミの宅食ダイレクトのメリット5つ</SectionHeading>

        {[
          { num: 1, title: "1食360円〜と業界トップクラスの安さ", text: "「いつでも二菜」は1食360円から、標準の「いつでも三菜」も399円〜と、宅配冷凍弁当の中でもトップクラスのコスパ。毎日の食事代として現実的な価格帯です。" },
          { num: 2, title: "ワタミグループの管理栄養士監修で安心感が高い", text: "外食大手として長年食品事業を展開してきたワタミの管理栄養士が献立を設計。塩分・カロリーが抑えめで、健康志向の方や高齢者にも適した設計です。" },
          { num: 3, title: "全国どこでも注文可能", text: "ヤマト運輸クール宅急便での全国配送に対応。「ワタミの宅食」が冷蔵で地域限定なのに対し、ダイレクトは冷凍で全国カバー。地方在住でも問題ありません。" },
          { num: 4, title: "定期購入で最大5%OFF+受取が楽", text: "定期おまかせセットなら5%OFFで毎回自動配送。注文の手間も省け、メニュー選びに迷うこともありません。「とにかく続けたい」人に最適です。" },
          { num: 5, title: "3コースから自分の食事量に合わせて選べる", text: "二菜・三菜・五菜の3コースがあり、食事量や健康状態に合わせて柔軟に選択可能。同じワタミブランド内で切り替えられるのは継続性が高い。" },
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
          { num: 1, title: "1食あたりの量はやや少なめ", text: "三菜の熱量は約150〜220kcal、五菜でも約300〜400kcal程度と、ボリューム重視の男性には物足りない可能性があります。ご飯や汁物の追加が前提と考えるのが現実的です。" },
          { num: 2, title: "メニュー選択の自由度はnoshより低い", text: "noshのような60種類以上から好きに選ぶスタイルではなく、コース制+おまかせ/選べるという構造。「好きな主菜だけ選びたい」ニーズには合いません。" },
          { num: 3, title: "送料込みの実質単価は地域差あり", text: "本州は安いものの、北海道・沖縄は送料が高くなる可能性があります。1食360〜499円の安さに惹かれて注文しても、送料込みだと割高になるケースもあるので必ず総額を確認しましょう。" },
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

        <SubHeading>ワタミの宅食ダイレクトがおすすめな人</SubHeading>
        <div className="bg-green-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "1食あたりの価格を最優先したい人",
              "管理栄養士監修の塩分・カロリー控えめの食事を取りたい人",
              "高齢者・健康志向のご家族にプレゼントしたい人",
              "ワタミブランドの安心感を重視する人",
              "全国どこでも注文できる冷凍弁当を探している人",
              "メニュー選びに迷いたくない人(おまかせ定期)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SubHeading>ワタミの宅食ダイレクトをおすすめしない人</SubHeading>
        <div className="bg-red-50 rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-sm">
            {[
              "ガッツリ食べたい男性(→マッスルデリ, nosh)",
              "メニューを毎回自由に選びたい人(→nosh, 三ツ星ファーム)",
              "高タンパク質を最重視する人(→マッスルデリ)",
              "厳しい糖質制限を実践している人(→サポートミール, GOFOOD)",
              "味のグルメ志向を最優先する人(→三ツ星ファーム)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#10007;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <SectionHeading id="faq">よくある質問(FAQ)</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ:ワタミの宅食ダイレクトはこんな人におすすめ</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="font-bold mb-3">ワタミの宅食ダイレクトの総合評価</p>
          <div className="table-wrapper mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["総合おすすめ度", 4],
                  ["コスパ(1食価格)", 5],
                  ["味", 4],
                  ["メニュー自由度", 3],
                  ["ブランド信頼性", 5],
                  ["健康配慮(塩分・カロリー)", 5],
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
            ワタミの宅食ダイレクトは<strong>「コスパ」「ブランド信頼性」「健康配慮」</strong>の3点で他社を圧倒する宅配サービスです。1食360〜499円という業界トップクラスの安さに加え、管理栄養士監修の献立で塩分・カロリーが適切に管理されています。
          </p>
          <p className="text-sm leading-relaxed">
            <strong>初めての方は「いつでも三菜」の都度購入から始め、合えば定期おまかせセット(5%OFF)に切り替える</strong>のが失敗しない王道ルートです。料金・お試しセット内容は変更される可能性があるため、申込前に必ず<a href="https://www.watami-takushoku-direct.jp/" target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline">公式サイト</a>で最新情報をご確認ください。
          </p>
        </div>

        <CTAButton href="https://www.watami-takushoku-direct.jp/">ワタミの宅食ダイレクト公式サイトをチェック</CTAButton>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/watami-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">ワタミの宅食 口コミ・評判</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">送料が安い宅配ランキング</Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">nosh口コミ・評判</Link>
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
      </article>
    </>
  );
}
