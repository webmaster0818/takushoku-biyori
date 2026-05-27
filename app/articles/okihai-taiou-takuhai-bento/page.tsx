import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "置き配対応の冷凍宅配弁当 — 不在時受け取りの方法と各社対応一覧【2026年版】";
const ARTICLE_DESCRIPTION =
  "冷凍宅配弁当の置き配対応状況を徹底調査。冷凍便（クール宅急便）の置き配可否、不在票・再配達の対応、宅配ボックスや指定場所での受け取り方法まで、各社公式情報をもとに解説します。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/okihai-taiou-takuhai-bento/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅配弁当 置き配, 冷凍弁当 置き配, 宅食 置き配 対応, クール便 置き配, 宅配ボックス 冷凍, nosh 置き配, 三ツ星ファーム 置き配, 不在 宅配弁当",
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
    question: "冷凍宅配弁当は置き配できる？",
    answer:
      "冷凍便（クール宅急便など）は、原則として置き配の対象外となるケースが多いです。これは温度管理（冷凍状態の維持）が必要なため、対面または宅配ボックス受け取りが基本ルールとなっているからです。一部のサービスでは「対面受取必須」と明記しており、不在時は再配達となります。最新の対応状況は各サービスの公式サイト・配送業者（ヤマト運輸など）の公式ページで必ず確認してください。",
  },
  {
    question: "不在時はどう受け取ればいい？",
    answer:
      "(1)配送日時を指定して在宅日に届けてもらう、(2)ヤマト運輸の場合は不在票が入るので24時間以内に再配達を依頼する、(3)サービスによっては時間帯指定が細かくできる（朝・午前・午後・夕方・夜など）、(4)ヤマトの「宅急便受取場所変更サービス」を活用してコンビニや営業所留めにする、などの方法があります。冷凍便は温度管理が必要なため、できるだけ初回配達で受け取るのが安全です。",
  },
  {
    question: "宅配ボックスに冷凍便は入れてもらえる？",
    answer:
      "原則として冷凍便は宅配ボックスへの投函対象外です。これは温度管理ができないため、品質保持の観点から配送業者が対応していないケースが多いためです。一部、冷凍対応の宅配ボックス（保冷機能付き）を備えたマンションでは対応可能な場合もありますが、配送業者・サービスごとに方針が異なります。お住まいの環境で対応可能か事前に確認することをおすすめします。",
  },
  {
    question: "配送日時の変更はできる？",
    answer:
      "多くのサービスでマイページから「次回配送日時の変更」「配送スキップ」「お届け曜日・時間帯の変更」が可能です。たとえばnoshはマイページから配送日と時間帯を指定でき、ヤマト運輸の場合は時間帯を細かく選べます（午前中、14-16時、16-18時、18-20時、19-21時など)。具体的な時間帯指定の選択肢は各サービス・配送業者により異なるため、申し込み時に確認してください。",
  },
  {
    question: "再配達の依頼方法は？",
    answer:
      "ヤマト運輸を利用するサービスの場合、不在票に記載されたQRコードまたはURL、もしくはクロネコメンバーズのアプリ・サイトから再配達を依頼できます。電話での再配達依頼も可能です。再配達の指定は当日中の早めの時間帯が望ましいですが、最長で再配達期限（通常7日間）まで対応しています。期限を過ぎると差出人に返送されてしまうため注意しましょう。",
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
          <span className="text-foreground/70">使い方ガイド</span>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">置き配・不在時受け取り</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "intro", label: "冷凍宅配弁当と置き配の関係" },
    { id: "rule", label: "冷凍便（クール宅急便）の基本ルール" },
    { id: "services", label: "主要サービスの置き配・不在時対応一覧" },
    { id: "receive-tips", label: "不在時でも確実に受け取る5つの方法" },
    { id: "delivery-box", label: "宅配ボックス・指定場所配達の活用" },
    { id: "redelivery", label: "再配達の依頼手順と期限" },
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

export default function OkihaiTaiouTakuhaiBentoPage() {
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
      { "@type": "ListItem", position: 2, name: "使い方ガイド" },
      { "@type": "ListItem", position: 3, name: "置き配・不在時受け取り" },
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
            使い方ガイド
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
            置き配対応・配送方針は各社・各配送業者により異なります。本記事は2026年5月時点で公式情報を整理したものですが、最新の方針は<strong>必ず各サービス公式サイトおよびヤマト運輸など配送業者の公式ページで確認</strong>してください。
          </p>
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「日中は仕事で家にいないので置き配したい」「冷凍便って置き配できるの？」——共働き・一人暮らしユーザーから多く寄せられる質問です。
          </p>
          <p className="mb-3">
            結論から言うと、<strong>冷凍宅配弁当は温度管理が必要なため、置き配対応は基本的に対象外となるケースが多い</strong>のが現状です。一方で、配送時間帯の細かい指定や、ヤマト運輸の各種サービス（営業所留め・コンビニ受け取り・宅急便受取場所変更）を活用すれば、不在時でも確実に受け取る方法はあります。
          </p>
          <p>
            この記事では、各社の公式情報をもとに置き配対応の現状をまとめ、不在時に確実に受け取るための実践テクニックを解説します。
          </p>
        </div>

        <TableOfContents />

        <SectionHeading id="intro">冷凍宅配弁当と置き配の関係</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          近年、Amazon・楽天など通販の置き配が一般化したことで、「冷凍宅配弁当も置き配で受け取りたい」というニーズが高まっています。しかし、冷凍便には独自のルールがあります。
        </p>

        <SubHeading>そもそも置き配とは？</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          置き配とは「指定の場所（玄関・宅配ボックス・物置など）に商品を置いて配達を完了する」配送方法です。常温・冷蔵・冷凍便で扱いが異なり、特に温度管理が必要な冷凍便は厳しいルールがあります。
        </p>

        <SubHeading>なぜ冷凍便は置き配が難しいのか</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍食品は<strong>−15℃以下の温度を維持する必要があり</strong>、玄関先に置くと夏場は数時間で品質が劣化します。そのため配送業者は、品質保持と食品衛生の観点から、冷凍便を「対面または宅配ボックスでの受け取り」に限定しているケースが多いです。
        </p>

        <SectionHeading id="rule">冷凍便（クール宅急便）の基本ルール</SectionHeading>

        <SubHeading>ヤマト運輸のクール宅急便</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          多くの冷凍宅配弁当サービスが利用しているヤマト運輸のクール宅急便は、<strong>原則として置き配の対象外</strong>です。これは温度管理上の理由によるもので、対面受取・宅配ボックス（保冷対応の場合のみ）・営業所留めなどでの受け取りが基本となります。最新の方針はヤマト運輸公式サイトでご確認ください。
        </p>

        <SubHeading>佐川急便の飛脚クール便</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          佐川急便のクール便も同様の方針で、置き配は対象外となるケースが多いです。各配送業者の最新の対応方針は公式サイトでご確認ください。
        </p>

        <SubHeading>例外:冷凍対応宅配ボックス</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          一部のマンションや戸建てに設置されている「保冷機能付き宅配ボックス」を利用する場合は、配送業者と事前合意があれば冷凍便を投函してもらえることもあります。お住まいの設備で対応可能か、配送業者と事前に確認するのがおすすめです。
        </p>

        <SectionHeading id="services">主要サービスの置き配・不在時対応一覧</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          以下は編集部が2026年5月時点で各社公式サイトを調査した内容です。<strong>最新の対応状況は必ず各社公式サイト・FAQで確認してください</strong>。
        </p>

        <ComparisonTable
          headers={["サービス", "配送業者", "置き配対応（公式案内）"]}
          rows={[
            ["nosh", "ヤマト運輸クール宅急便", "対面受取が基本（公式FAQ参照）"],
            ["三ツ星ファーム", "ヤマト運輸クール宅急便", "対面受取が基本（公式FAQ参照）"],
            ["食宅便", "ヤマト運輸/佐川急便等", "対面受取が基本（公式FAQ参照）"],
            ["ワタミの宅食ダイレクト", "ヤマト運輸クール宅急便", "対面受取が基本（公式FAQ参照）"],
            ["DELIPICKS", "ヤマト運輸クール宅急便", "対面受取が基本（公式FAQ参照）"],
            ["ウェルネスダイニング", "ヤマト運輸クール宅急便", "対面受取が基本（公式FAQ参照）"],
            ["まごころケア食", "ヤマト運輸クール宅急便", "対面受取が基本（公式FAQ参照）"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          上記は一般的な傾向であり、サービスごとの細かい運用方針や、自治体・住居形態（マンション・戸建て）による違い、配送業者の運用変更により対応が異なる場合があります。各社の最新情報をご確認ください。
        </p>

        <SectionHeading id="receive-tips">不在時でも確実に受け取る5つの方法</SectionHeading>

        <SubHeading>方法1: 配送時間帯を細かく指定する</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ヤマト運輸では時間帯指定が細かく選べます（午前中、14-16時、16-18時、18-20時、19-21時など)。在宅時間に合わせて時間帯を指定すれば、不在問題は大幅に軽減されます。マイページから配送時間帯を変更可能なサービスがほとんどです。
        </p>

        <SubHeading>方法2: クロネコメンバーズの「お届け予定通知」を活用</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ヤマト運輸の<strong>クロネコメンバーズ</strong>に登録すると、配達予定日・時間帯がLINEまたはメールで事前通知されます。届く前に再配達依頼や受取場所変更が可能で、「気づいたら不在票が入っていた」というトラブルを防げます。
        </p>

        <SubHeading>方法3: 宅急便受取場所変更サービスを利用</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ヤマト運輸では、発送後でも「営業所留め」「コンビニ受け取り」などに受取場所を変更できる<strong>「宅急便受取場所変更サービス」</strong>があります（一部条件あり）。仕事帰りに最寄り営業所で受け取るなど、柔軟な対応が可能です。
        </p>

        <SubHeading>方法4: 配送日を在宅日に指定する</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          多くのサービスでは、マイページから次回配送日を変更できます。在宅が確実な日（土日、休日、リモートワーク日など）を指定すれば、不在問題そのものを回避できます。
        </p>

        <SubHeading>方法5: 配送スキップを活用する</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          長期不在（出張・旅行など）の場合は、次回配送のスキップ機能を活用しましょう。多くのサービスでは「次回配送○日前まで」がスキップの締切となっています。詳しくは<Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline">一人暮らしにおすすめの宅食ランキング</Link>でも解説しています。
        </p>

        <SectionHeading id="delivery-box">宅配ボックス・指定場所配達の活用</SectionHeading>

        <SubHeading>常温品の場合は宅配ボックス利用可</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          冷凍宅配弁当本体は対面受取が基本ですが、<strong>同梱されるパンフレット類などの常温品</strong>であれば宅配ボックス対応の場合があります。本体（冷凍便）は別途で受け取る形になることが多いです。
        </p>

        <SubHeading>冷凍対応宅配ボックス（保冷タイプ）</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          一部の新築マンションや、戸建て向けに販売されている<strong>保冷機能付き宅配ボックス</strong>を導入すれば、冷凍便も置き配できる可能性が広がります。ただし、配送業者・サービスとの事前合意が必要なため、お住まいの設備や条件で対応可能かを事前に確認してください。
        </p>

        <SubHeading>指定場所配達（メーターボックス・玄関先など）</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ヤマト運輸では一部の通常便で「指定場所配達」（玄関前・メーターボックス内など）に対応していますが、<strong>クール便は原則として対象外</strong>です。冷凍宅配弁当ではこのサービスを利用できないと考えるのが安全です。
        </p>

        <SectionHeading id="redelivery">再配達の依頼手順と期限</SectionHeading>

        <SubHeading>不在票が入っていた場合の対応</SubHeading>
        <ol className="list-decimal list-inside space-y-1 text-sm mb-6">
          <li>不在票のQRコードまたはURLにアクセス</li>
          <li>再配達希望日・時間帯を選択</li>
          <li>または配送業者のコールセンターに電話</li>
          <li>クロネコメンバーズアプリからも依頼可能</li>
        </ol>

        <SubHeading>再配達依頼の期限</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ヤマト運輸の場合、再配達依頼の期限は<strong>初回配達日から原則7日間</strong>です（最新の規定は公式サイトで確認）。期限を過ぎると差出人（宅配弁当サービス側）に返送され、再配送には別途料金が発生することもあります。
        </p>

        <SubHeading>確実に受け取るための事前対策</SubHeading>
        <ul className="list-disc list-inside space-y-1 text-sm mb-6">
          <li>クロネコメンバーズに事前登録しておく</li>
          <li>マイページから配送日時を在宅日に変更する</li>
          <li>長期不在時はスキップ機能を使う</li>
          <li>同居家族や友人に代理受取を依頼する</li>
        </ul>

        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ：冷凍便は置き配より時間帯指定で対応</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <p className="text-sm leading-relaxed mb-4">
            冷凍宅配弁当の置き配対応は、品質保持の観点から<strong>基本的に対象外</strong>と考えるのが現状です。各サービス・配送業者ともに、対面受取または宅配ボックス（保冷対応の場合のみ）での受け取りを推奨しています。
          </p>
          <p className="text-sm leading-relaxed mb-4">
            ただし、不在時の対応として<strong>(1)時間帯指定の細分化、(2)クロネコメンバーズの活用、(3)受取場所変更サービス、(4)配送日の在宅日指定、(5)スキップ機能</strong>の5つを組み合わせれば、共働き家庭でも一人暮らしでも問題なく受け取れます。
          </p>
          <p className="text-sm leading-relaxed">
            申し込み前に必ず<strong>各サービスの配送FAQ・ヤマト運輸公式サイト</strong>で最新の方針を確認してください。万が一受け取れない場合の対応もあらかじめ理解しておくと、安心して長期利用できます。
          </p>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            一人暮らしにおすすめの宅食ランキング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            送料が安い宅配弁当ランキング
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
