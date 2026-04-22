import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】宅配弁当の送料が安いランキングTOP10！送料無料・送料込み総額で徹底比較";
const ARTICLE_DESCRIPTION =
  "宅配弁当の送料を10社で徹底比較。送料無料のサービスや送料込み総額ランキングを掲載。地域別の送料一覧表や、送料を安く抑えるコツも解説します。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/souryou-yasui-ranking/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "宅配弁当 送料 安い, 宅食 送料無料, 宅配弁当 送料 比較, 冷凍弁当 送料, 宅食 送料込み 安い, 宅配弁当 コスパ",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-21T00:00:00+09:00",
    modifiedTime: "2026-04-21T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "宅配弁当で完全に送料無料のサービスはある？",
    answer:
      "はい、あります。ヨシケイは自社配送で全国送料無料、まごころケア食は定期購入で送料無料、ワタミの宅食（冷蔵タイプ）も自社配送で送料無料です。Dr.つるかめキッチンも定期購入なら全国送料無料です。ただし「送料無料」でも商品価格に送料分が含まれている場合があるため、1食あたりの総額で比較することが大切です。",
  },
  {
    question: "北海道・沖縄でも安く利用できるサービスは？",
    answer:
      "北海道・沖縄は送料が高くなりがちですが、ヨシケイ（自社配送エリア内なら送料無料）、まごころケア食（全国送料無料）、Dr.つるかめキッチン（定期購入で全国送料無料）が比較的安く利用できます。noshは北海道で1,815円、沖縄で2,365円の送料がかかるため、まとめ注文（20食プラン）で1食あたりの送料負担を減らすのがおすすめです。",
  },
  {
    question: "送料を安くするコツは？",
    answer:
      "3つのコツがあります。(1)まとめ注文（10食・14食・20食プランにすると1食あたりの送料負担が下がる）。(2)定期購入（送料割引や送料無料になるサービスが多い）。(3)配送間隔を長くする（3〜4週間に1回にして、1回の配送食数を増やす）。地域によって送料が大きく変わるため、自分の地域の送料を確認してからサービスを選びましょう。",
  },
  {
    question: "ヤマト運輸と自社配送、どちらが安い？",
    answer:
      "自社配送のほうが安い傾向があります。ヨシケイやワタミの宅食（冷蔵タイプ）は自社配送で送料無料です。ただし、自社配送は配送エリアが限定されることが多く、配送時間帯の指定ができない場合もあります。ヤマト運輸の場合は全国配送可能で時間帯指定もできますが、クール宅急便の料金がかかります。",
  },
  {
    question: "初回送料無料のサービスはどこ？",
    answer:
      "ウェルネスダイニングは初回注文時の送料が無料です。noshは初回14食・21食コースで送料無料になるキャンペーンを実施することがあります。三ツ星ファームは初回限定セットで送料無料のキャンペーンを行うことがあります。各サービスの公式サイトで最新のキャンペーン情報を確認してください。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">ランキング</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">送料が安い宅配弁当ランキング</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "why", label: "宅配弁当の送料が重要な理由" },
    { id: "ranking", label: "送料込み総額ランキングTOP10" },
    { id: "free", label: "送料無料で利用できるサービス一覧" },
    { id: "area", label: "地域別の送料比較（関東・関西・北海道・沖縄）" },
    { id: "tips", label: "送料を安く抑える5つのコツ" },
    { id: "recommend", label: "タイプ別おすすめ" },
    { id: "faq", label: "よくある質問（FAQ）" },
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
  return <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

export default function SouryouYasuiRankingPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-04-21T00:00:00+09:00",
    dateModified: "2026-04-21T00:00:00+09:00",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">ランキング</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time>
            <span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「宅配弁当を始めたいけど、送料が高くて躊躇している」「1食あたりは安いのに、送料を含めると結構な金額になる」——宅配弁当選びで見落としがちなのが<strong>送料</strong>の存在です。
          </p>
          <p className="mb-3">
            この記事では、人気の宅配弁当10社の<strong>送料を徹底��較</strong>。送料込みの実質1食単価でランキングを作成しました。
          </p>
          <p>
            送料無料のサービス一覧や、地域別の送料比較表、送料を安く抑えるコツまで、<strong>「送料で損しない」</strong>ための情報をお届けします。
          </p>
        </div>

        <TableOfContents />

        {/* ===== なぜ送料が重要か ===== */}
        <SectionHeading id="why">宅配弁当の送料が重要な理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当の広告では「1食499円〜」などの価格が目立ちますが、実際には<strong>送料を加算した総額</strong>が本当のコストです。特に冷凍弁当はヤマト運輸のクール宅急便を使うため、通常の宅配便より送料が高くなります。
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="font-bold text-sm mb-2">具体例：nosh 10食プランの場合</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            商品価格5,990円（1食599円）＋ 送料1,056円（関東）= 合計7,046円（<strong>実質1食705円</strong>）。広告の「599円」と実際の「705円」では、1食あたり106円の差。月20食利用すると<strong>月2,120円の差額</strong>が生じます。送料込みで比較しないと、本当のコスパは見えません。
          </p>
        </div>

        {/* ===== ランキング ===== */}
        <SectionHeading id="ranking">送料込み総額ランキングTOP10</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          各サービスの送料込み1食単価を算出し、安い順にランキングしました。送料は関東エリアの料金で統一しています（自社配送のサービスは全国共通）。
        </p>

        <ComparisonTable
          headers={["順位", "サービス名", "1食価格", "送料（関東）", "送料込み1食単価"]}
          rows={[
            ["1位", "ヨシケイ シンプルミール", "約350円", "無料（自社配送）", "約350円"],
            ["2位", "まごころケア食（7食）", "約470円", "無料（定期）", "約470円"],
            ["3位", "ワタミの宅食（冷蔵・手鞠）", "約530円", "無料（自社配送）", "約530円"],
            ["4位", "ワタミの宅食ダイレクト（冷凍10食）", "約390円", "800円", "約470円"],
            ["5位", "食宅便（7食・定期）", "約560円", "390円（定期半額）", "約616円"],
            ["6位", "Dr.つるかめキッチン（7食・定期）", "約663円", "無料（定期）", "約663円"],
            ["7位", "nosh（10食プラン）", "599円", "1,056円（関東）", "約705円"],
            ["8位", "ウェルネスダイニング（7食・定期）", "約670円", "385円（定期半額）", "約725円"],
            ["9位", "三ツ星ファーム（14食）", "626円", "990円", "約697円"],
            ["10位", "わんまいる（5食）", "約1,050円", "935円（北海道2,145円）", "約1,237円"],
          ]}
        />

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="font-bold text-sm mb-2">コスパ最強はヨシケイ シンプルミール</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            1食約350円で送料無料。自社配送のため全国どこでも送料がかかりません（一部エリアを除く）。ただし、配送エリアが限定されている点と、メニューが選べない（日替わり3食セット）点は注意が必要です。初回は半額（1食約170円）で試せるため、対象エリアにお住まいの方はぜひ一度お試しを。
          </p>
        </div>

        {/* ===== 送料無料一覧 ===== */}
        <SectionHeading id="free">送料無料で利用できるサービス一覧</SectionHeading>

        <ComparisonTable
          headers={["サービス", "送料無料の条件", "配送方法", "注意点"]}
          rows={[
            ["ヨシケイ", "常時無料", "自社配送", "配送エリア限定"],
            ["ワタミの宅食（冷蔵）", "常時無料", "自社配送", "冷蔵弁当のみ（冷凍ダイレクトは有料）"],
            ["まごころケア食", "定期購入で無料", "ヤマト運輸", "都度購入は送料あり"],
            ["Dr.つるかめキッチン", "定期購入で無料", "ヤマト運輸", "都度購入は全国一律770円"],
            ["ウェルネスダイニング", "初回無料", "ヤマト運輸", "2回目以降は770円（定期385円）"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          「送料無料」には大きく2つのパターンがあります。(1)<strong>自社配送で常時無料</strong>（ヨシケイ・ワタミの宅食）と、(2)<strong>定期購入を条件に無料</strong>（まごころケア食・Dr.つるかめキッチン）です。自社配送は配送エリアが限定される代わりに、地域による送料差がありません。定期購入条件のサービスは全国対応ですが、都度購入だと送料がかかります。
        </p>

        {/* ===== 地域別比較 ===== */}
        <SectionHeading id="area">地域別の送料比較（関東・関西・北海道・沖縄）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ヤマト運輸のクール宅急便を利用するサービスは、配送元からの距離によって送料が変わります。主要サービスの地域別送料を比較します。
        </p>

        <ComparisonTable
          headers={["サービス", "関東", "関西", "北海道", "沖縄"]}
          rows={[
            ["nosh（6〜10食）", "1,056円", "913円", "1,705円", "2,167円"],
            ["三ツ星ファーム", "990円（一律）", "990円", "990円", "990円"],
            ["食宅便（通常）", "780円", "780円", "780円", "780円"],
            ["食宅便（定期）", "390円", "390円", "390円", "390円"],
            ["ウェルネスダイニング（定期）", "385円", "385円", "385円", "385円"],
            ["ワタミの宅食ダイレクト", "800円", "800円", "1,100円", "2,200円"],
            ["Dr.つるかめキッチン（定期）", "無料", "無料", "無料", "無料"],
            ["まごころケア食（定期）", "無料", "無料", "無料", "無料"],
          ]}
        />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="font-bold text-sm mb-2">北海道・沖縄にお住まいの方へ</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            北海道・沖縄はヤマト運輸の送料が高くなるため、<strong>全国送料無料のサービス</strong>（まごころケア食・Dr.つるかめキッチン）が特にお得です。noshは北海道1,705円（6〜10食）と高額ですが、20食プランにすると1食あたりの送料負担が下がります。三ツ星ファームは全国一律990円のため、遠方でも送料が安定しています。
          </p>
        </div>

        {/* ===== コツ ===== */}
        <SectionHeading id="tips">送料を安く抑える5つのコツ</SectionHeading>

        <div className="space-y-3 mb-6">
          {[
            { title: "まとめ注文で1食あたりの送料を下げる", text: "noshの場合、6食プラン（送料1,056円→1食176円）より10食プラン（送料1,056円→1食106円）のほうが1食あたりの送料負担が40%ダウン。三ツ星ファームは14食・21食プランで1食あたりの送料がさらに下がります。" },
            { title: "定期購入の送料割引を活用する", text: "食宅便は通常780円→定期390円（半額）、ウェルネスダイニングは通常770円→定期385円（半額）、Dr.つるかめキッチンは定期で送料無料。定期購入はいつでも解約可能なサービスがほとんどなので、気軽に始められます。" },
            { title: "配送間隔を長くして配送回数を減らす", text: "2週間に1回→3���4週間に1回にすると、月の配送回数が半分に。noshなら月2回配送（送料2,112円）→月1回配送（送料1,056円）で、月1,056円の節約になります。冷凍弁当なら保存がきくため、まとめて受け取って問題ありません。" },
            { title: "初回送料無料キャンペーンを活用する", text: "ウェルネスダイニングは初回送料無料。各サービスの公式サイトやSNSで送料無料キャンペーンを確認しましょう。特に初回注文時はキャンペーンが充実しているため、複数サービスの初回お試しを順番に利用するのも賢い方法です。" },
            { title: "自社配送サービスを選ぶ", text: "ヨシケイ・ワタミの宅食（冷蔵）は自社配送で送料完全無料。「送料を一切払いたくない」という方はこの2サービスが最適。ただし配送エリアと配送時間帯に制約がある点は確認してください。" },
          ].map((item, i) => (
            <div key={item.title} className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{i + 1}. {item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== タイプ別おすすめ ===== */}
        <SectionHeading id="recommend">タイプ別おすすめ</SectionHeading>

        <ComparisonTable
          headers={["タイプ", "おすすめサービス", "理由"]}
          rows={[
            ["とにかく安さ重視", "ヨシケイ シンプルミール", "1食350円＋送料無料で業界最安クラス"],
            ["送料無料で栄養管理", "まごころケア食", "定期購入で送料無料・1食470円程度"],
            ["北海道・沖縄在住", "Dr.つるかめキッチン / まごころケア食", "定期購入で全国送料無料"],
            ["味重視で送料も抑えたい", "三ツ星ファーム（14食）", "全国一律990円・14食以上で送料効率UP"],
            ["制限食が必要", "Dr.つるかめキッチン", "定期で送料無料・専門医監修の制限食"],
          ]}
        />

        {/* ===== 関連記事 ===== */}
        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/nosh-vs-mitsuboshi-vs-wellness/", label: "nosh・三ツ星ファーム・ウェルネスダイニング 3社比較" },
            { href: "/articles/nosh-reviews/", label: "nosh(ナッシュ)の口コミ・評判" },
            { href: "/articles/magokoro-care-reviews/", label: "まごころケア食の口コミ・評判" },
            { href: "/articles/tsurukame-reviews/", label: "Dr.つるかめキッチンの口コミ・評判" },
            { href: "/articles/takuhai-vs-conveni/", label: "宅配弁当 vs コンビニ弁当 どっちがお得？" },
          ].map((link) => (
            <div key={link.href}>
              <Link href={link.href} className="text-accent hover:text-accent-dark text-sm transition-colors">→ {link.label}</Link>
            </div>
          ))}
        </div>

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        {faqData.map((faq) => (
          <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
        ))}

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <div className="bg-cream rounded-xl p-5 mb-6">
          <p className="font-bold text-sm mb-3">送料で損しないためのポイント</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>
              宅配弁当選びでは<strong>「1食あたり価格＋送料」の総額</strong>で比較することが最も重要です。1食単価が安くても送料が高ければ意味がありません。
            </p>
            <p>
              送料込み最安はヨシケイ シンプルミール（1食約350円・送料無料）。送料無料で選ぶならまごころケア食、Dr.つるかめキッチン、ワタミの宅食が候補です。
            </p>
            <p>
              送料を安く抑えるコツは<strong>「まとめ注文」「定期購入の割引活用」「配送間隔を長くする」</strong>の3つ。特に北海道・沖縄にお住まいの方は、全国送料無料のサービスを優先的に検討してください。
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
