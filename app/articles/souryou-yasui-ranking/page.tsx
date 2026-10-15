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
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-21T00:00:00+09:00",
    modifiedTime: "2026-10-14T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "宅配弁当で完全に送料無料のサービスはある？",
    answer:
      "はい、あります。ヨシケイは自社配達で配達料無料（対応エリア内）、ワタミの宅食（冷蔵タイプ）は宅配料込みの価格です。まごころケア食は定期（お得便）でも送料980円がかかります（2026年10月12日・公式確認）。Dr.つるかめキッチンも定期購入なら全国送料無料です。ただし「送料無料」でも商品価格に送料分が含まれている場合があるため、1食あたりの総額で比較することが大切です。",
  },
  {
    question: "北海道・沖縄でも安く利用できるサービスは？",
    answer:
      "北海道・沖縄は送料が高くなりがちですが、ヨシケイ（自社配達エリア内なら配達料無料）、Dr.つるかめキッチン（定期購入で全国送料無料）、全国一律料金のまごころケア食（沖縄・離島は1,480円）が比較的安く利用できます。noshは4〜12食で北海道1,713円・沖縄1,623円、20食で北海道1,992円・沖縄1,918円の送料がかかるため（2026年10月10日・公式確認）、まとめ注文（20食プラン）で1食あたりの送料負担を減らすのがおすすめです。",
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
      "ウェルネスダイニングはお試し注文（初回）の送料が無料で、お試し定期注文（毎週×8回）は8回すべて送料無料です。noshの初回特典は商品代の1,500円OFF（2回目1,000円・3回目500円OFF）です（2026年10月10日・公式確認）。三ツ星ファームは14食・21食コースの初回送料が無料です（2026年10月9日・公式確認）。各サービスの公式サイトで最新のキャンペーン情報を確認してください。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><Link href="/articles/#mokuteki" className="text-foreground/70 hover:text-accent transition-colors">目的別ガイド・ランキング</Link></li>
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
    dateModified: "2026-10-14T00:00:00+09:00",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"\u30db\u30fc\u30e0\", \"item\": \"https://takushoku-biyori.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"\u76ee\u7684\u5225\u30ac\u30a4\u30c9\u30fb\u30e9\u30f3\u30ad\u30f3\u30b0\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"\u9001\u6599\u304c\u5b89\u3044\u5b85\u914d\u5f01\u5f53\u30e9\u30f3\u30ad\u30f3\u30b0\"}]}" }}
      />
      

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">目的別ガイド・ランキング</span><span className="text-[10px] text-gray-400">PR掲載も含みます</span></div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time>
            <span>監修: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link> / <Link href="/author/" className="text-accent hover:underline">編集部メンバー</Link></span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「宅配弁当を始めたいけど、送料が高くて躊躇している」「1食あたりは安いのに、送料を含めると結構な金額になる」——宅配弁当選びで見落としがちなのが<strong>送料</strong>の存在です。
          </p>
          <p className="mb-3">
            この記事では、人気の宅配弁当10社の<strong>送料を徹底比較</strong>。送料込みの実質1食単価でランキングを作成しました。
          </p>
          <p>
            送料無料のサービス一覧や、地域別の送料比較表、送料を安く抑えるコツまで、<strong>「送料で損しない」</strong>ための情報をお届けします。
          </p>
        </div>

        <TableOfContents />

        {/* ===== なぜ送料が重要か ===== */}
        <SectionHeading id="why">宅配弁当の送料が重要な理由</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          宅配弁当の広告では「1食499円〜」などの価格が目立ちますが、実際には<strong>送料を加算した総額</strong>が本当のコストです。特に冷凍弁当はクール便（多くはヤマト運輸のクール宅急便。ワタミの宅食ダイレクトは佐川急便の冷凍宅配便、まごころケア食は佐川急便またはヤマト運輸）で届くため、通常の宅配便より送料が高くなります。
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="font-bold text-sm mb-2">具体例：nosh 10食プランの場合</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            商品価格6,206円（1食620円）＋ 送料1,166円（関東）= 合計7,372円（<strong>実質1食約737円</strong>）。表示の「620円」と実際の「約737円」では、1食あたり約117円の差。10食×月2回なら<strong>送料だけで月2,332円</strong>かかります（2026年10月10日・公式確認）。送料込みで比較しないと、本当のコスパは見えません。
          </p>
        </div>

        {/* ===== ランキング ===== */}
        <SectionHeading id="ranking">送料込み総額ランキングTOP10</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          各サービスの送料込み1食単価を算出し、安い順にランキングしました。送料は関東エリアの料金で統一しています（自社配送のサービスは全国共通）。nosh・ウェルネスダイニングは2026年10月10日、三ツ星ファームは2026年10月9日、夕食ネット・ワタミの宅食・ワタミの宅食ダイレクト・まごころケア食・食宅便は2026年10月12日に公式サイトで確認した税込価格です。ワタミの宅食ダイレクトの2位は1回限りのお試し価格で、通常価格は公式の参考表記で1食399円〜です。
        </p>

        <ComparisonTable
          headers={["順位", "サービス名", "1食価格", "送料（関東）", "送料込み1食単価"]}
          rows={[
            ["1位", "ヨシケイ（夕食ネット）シンプルミール（3食1,290円）", "430円", "無料（自社配達・一部地域を除く）", "430円"],
            ["2位", "ワタミの宅食ダイレクト（お試し10食3,900円・1回限り）", "390円", "990円", "約489円"],
            ["3位", "まごころケア食（7食・お得便）", "約426円", "980円", "約566円"],
            ["4位", "ワタミの宅食（冷蔵・まごころ手鞠）", "590円", "無料（宅配料込み）", "590円"],
            ["5位", "Dr.つるかめキッチン（21食・定期・バランス栄養御膳）", "約663円", "無料（定期）", "約663円"],
            ["6位", "nosh（10食プラン）", "620円", "1,166円（関東）", "約737円"],
            ["7位", "ウェルネスダイニング（栄養バランス14食・定期）", "約770円", "無料（定期14・21食）", "約770円"],
            ["8位", "食宅便（おまかせ7食・らくらく定期便）", "690円", "940円", "約824円"],
            ["9位", "三ツ星ファーム（14食）", "819円", "990円", "約889円"],
            ["10位", "わんまいる（5食）", "約1,050円", "1,080円（北海道・沖縄2,645円）", "約1,266円"],
          ]}
        />

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="font-bold text-sm mb-2">送料込みで最も安いのはヨシケイ（夕食ネット）のシンプルミール（今回の10サービス中）</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            冷凍弁当3食セットが1,290円（1食430円・税込）で、配達料は原則無料です（一部地域を除く。東京23区の一部地域は110円の場合あり）。ただし配達エリアは7都府県に限られ、3食の中身はセットごとに決まっています。初めての方は初回10セットまで半額（3食645円・1食約215円）で試せます（2026年10月12日・公式確認）。
          </p>
        </div>

        {/* ===== 送料無料一覧 ===== */}
        <SectionHeading id="free">送料無料で利用できるサービス一覧</SectionHeading>

        <ComparisonTable
          headers={["サービス", "送料無料の条件", "配送方法", "注意点"]}
          rows={[
            ["ヨシケイ", "常時無料", "自社配送", "配送エリア限定"],
            ["ワタミの宅食（冷蔵）", "常時無料", "自社配送", "冷蔵弁当のみ（冷凍ダイレクトは有料）"],
            ["Dr.つるかめキッチン", "定期購入で無料", "ヤマト運輸", "都度購入は全国一律770円"],
            ["ウェルネスダイニング", "お試し注文（初回）・定期14・21食は無料", "ヤマト運輸", "都度880円・定期7食440円（北海道・沖縄は1,870円・935円）"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          「送料無料」には大きく2つのパターンがあります。(1)<strong>自社配送で常時無料</strong>（ヨシケイ・ワタミの宅食）と、(2)<strong>定期購入を条件に無料</strong>（Dr.つるかめキッチン・ウェルネスダイニングの14食・21食）です。まごころケア食は定期（お得便）でも送料980円（沖縄・離島1,480円）がかかります（2026年10月12日・公式確認）。自社配送は配送エリアが限定される代わりに、地域による送料差がありません。定期購入条件のサービスは全国対応ですが、都度購入だと送料がかかります。
        </p>

        {/* ===== 地域別比較 ===== */}
        <SectionHeading id="area">地域別の送料比較（関東・関西・北海道・沖縄）</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          ヤマト運輸のクール宅急便を利用するサービスは、配送元からの距離によって送料が変わります。主要サービスの地域別送料を比較します。
        </p>

        <ComparisonTable
          headers={["サービス", "関東", "関西", "北海道", "沖縄"]}
          rows={[
            ["nosh（4〜12食）", "1,166円", "1,023円", "1,713円", "1,623円"],
            ["nosh（20食）", "1,386円", "1,243円", "1,992円", "1,918円"],
            ["三ツ星ファーム", "990円（一律）", "990円", "990円", "990円"],
            ["食宅便（都度便）", "1,330円", "1,330円", "1,330円", "1,330円"],
            ["食宅便（らくらく定期便）", "940円", "940円", "940円", "940円"],
            ["ウェルネスダイニング（都度）", "880円", "880円", "1,870円", "1,870円"],
            ["ウェルネスダイニング（定期7食）", "440円", "440円", "935円", "935円"],
            ["ウェルネスダイニング（定期14・21食）", "無料", "無料", "無料", "無料"],
            ["ワタミの宅食ダイレクト", "990円", "990円", "1,320円", "2,420円"],
            ["Dr.つるかめキッチン（定期）", "無料", "無料", "無料", "無料"],
            ["まごころケア食", "980円", "980円", "980円", "1,480円"],
          ]}
        />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="font-bold text-sm mb-2">北海道・沖縄にお住まいの方へ</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            北海道・沖縄は冷凍便の送料が高くなるため、<strong>定期なら全国送料無料のDr.つるかめキッチン</strong>や、全国一律料金のサービス（まごころケア食980円・沖縄と離島は1,480円／食宅便 らくらく定期便940円）が有利です。noshは北海道1,713円（4〜12食）と高額ですが、20食プラン（1,992円・2回目以降）にすると1食あたりの送料負担が下がります。ウェルネスダイニングは定期14・21食なら北海道・沖縄でも送料無料です（nosh・ウェルネスは2026年10月10日・公式確認）。三ツ星ファームは全国一律990円のため、遠方でも送料が安定しています。
          </p>
        </div>

        {/* ===== コツ ===== */}
        <SectionHeading id="tips">送料を安く抑える5つのコツ</SectionHeading>

        <div className="space-y-3 mb-6">
          {[
            { title: "まとめ注文で1食あたりの送料を下げる", text: "noshの場合、送料は4〜12食で同額なので、6食プラン（関東1,166円→1食約194円）より12食プラン（1,166円→1食約97円）のほうが1食あたりの送料負担が半分になります。三ツ星ファームは14食・21食プランで1食あたりの送料がさらに下がります。" },
            { title: "定期購入の送料割引を活用する", text: "食宅便は都度便1,330円→らくらく定期便940円（約3割減）、ウェルネスダイニングは都度880円→定期7食440円（半額）・14食と21食は無料、Dr.つるかめキッチンは定期で送料無料。定期購入はいつでも解約可能なサービスがほとんどなので、気軽に始められます。" },
            { title: "配送間隔を長くして配送回数を減らす", text: "2週間に1回→3〜4週間に1回にすると、月の配送回数が半分に。noshなら月2回配送（関東の送料2,332円）→月1回配送（1,166円）で、月1,166円の節約になります。冷凍弁当なら保存がきくため、まとめて受け取って問題ありません。" },
            { title: "初回送料無料キャンペーンを活用する", text: "ウェルネスダイニングはお試し注文（初回）の送料が無料で、お試し定期注文なら8回すべて送料無料。各サービスの公式サイトやSNSで送料無料キャンペーンを確認しましょう。特に初回注文時はキャンペーンが充実しているため、複数サービスの初回お試しを順番に利用するのも賢い方法です。" },
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
            ["とにかく安さ重視", "ヨシケイ（夕食ネット）シンプルミール", "1食430円・配達料原則無料（対象は7都府県）"],
            ["送料込みで安く栄養管理", "まごころケア食", "21食（お得便）なら送料980円込みで1食約441円"],
            ["北海道・沖縄在住", "Dr.つるかめキッチン", "定期購入で全国送料無料"],
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
            { href: "/articles/mitsuboshi-farm-reviews/", label: "三ツ星ファームの口コミ・評判" },
            { href: "/articles/wellness-dining-reviews/", label: "ウェルネスダイニングの口コミ・評判" },
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
              今回の10サービスで送料込み最安はヨシケイ（夕食ネット）のシンプルミール（1食430円・配達料原則無料・対象7都府県）。送料無料で選ぶならDr.つるかめキッチン（定期）、ワタミの宅食（宅配料込み）が候補です。
            </p>
            <p>
              送料を安く抑えるコツは<strong>「まとめ注文」「定期購入の割引活用」「配送間隔を長くする」</strong>の3つ。特に北海道・沖縄にお住まいの方は、定期で全国送料無料のサービスや全国一律料金のサービスを優先的に検討してください。
            </p>
          </div>
        </div>
      
        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約。1食あたりの栄養基準を公式に明記している社はその基準値（「以下」「以上」・コース別の場合は範囲）、メニューごとの値だけを公開している社（nosh・FIT FOOD HOME）は公式メニュー一覧の主菜の中央50%（四分位）の範囲を記載。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link> 参照。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-warm-border bg-white rounded-lg overflow-hidden">
              <thead className="bg-cream">
                <tr>
                  <th className="border-b border-warm-border px-3 py-2 text-left text-xs font-bold text-foreground">サービス</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">kcal</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">糖質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">タンパク質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">塩分(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">1食(円)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">nosh（ナッシュ）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">260-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">612-719</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">三ツ星ファーム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">25以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">−</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">711-927</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウェルネスダイニング</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-330</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-24（平均）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">9-13（平均）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">752-1,165</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://magokoro-care-shoku.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">まごころケア食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">394-426</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.watami-takushoku.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワタミの宅食</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">250-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-35以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.5-4.0以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">470-790</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://shokutakubin.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">食宅便</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0未満（ケア系）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">690-740</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://muscledeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">Muscle Deli</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-750</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-75以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-50以上</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,109-1,557</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://yoshikei-dvlp.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヨシケイ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.0</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">597-750</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.coopdeli.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">コープデリ</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">350-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-3.5</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">550-700</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://www.pal-system.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">パルシステム</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-500</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30-50</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15-25</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">580-720</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://nosh.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ナッシュclub（割引）</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">260-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">30以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">14-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">492〜（最高ランク）</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://tsurukame-kitchen.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">つるかめキッチン</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">240-300</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">15以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">13</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.0-2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">663-787</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://1meal.life/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ワンミール</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">300-450</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-30</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">770-840</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://store.tavenal.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">FIT FOOD HOME</a></td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">310-420</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">16-27</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">18-28</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">1.4-2.1</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">1,188-1,308</td></tr>
<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap"><a href="https://gofood.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">GOFOOD</a>（2025年6月30日にサービス終了）</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">200-400</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">10-20</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">20-40</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center">2.5以下</td><td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">サービス終了</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※2026年5月時点の公開データ（1食価格のMuscle Deli・FIT FOOD HOME・つるかめキッチンは2026年10月14日に公式サイトで再確認＝Muscle Deliは4プランの単品価格（税込）÷食数（LEAN 15食〜GAIN 5食）、FIT FOOD HOMEは1人前の単品価格（税込1,188円・角煮など一部1,308円。10個まとめ割は1,129円〜）、つるかめキッチンは定期コースの税込価格÷食数（送料無料・バランス栄養御膳21食663円〜たんぱく＆塩分制限7食787円）。栄養値は2026年10月14日に公式サイトで再確認＝noshは公式基準「糖質30g・塩分2.5g以下」と公式メニュー一覧の主菜88品、まごころケア食は全6コースの基準（健康バランス300kcal以下・カロリー調整240kcal±10%ほか。たんぱく調整食のみ300kcal以上）、ワタミの宅食は各商品の基準（熱量250〜500kcal基準・糖質は手鞠20g/おかず30g/ダブル35g以下・食塩相当量1.5〜4.0g以下）、Muscle Deliは4プランの基準（LOW CARB〜GAIN）、つるかめキッチンは5コースの基準（糖質15g以下は糖質制限気づかい御膳）、FIT FOOD HOMEは公式ストアの主菜19品（複数人前のパックを除く）。2026年10月15日に公式サイトで再確認＝ウェルネスダイニングの糖質・たんぱく質は各コースの公式公表の平均値の範囲（基準があるのは糖質＆カロリー制限の糖質15g以下、たんぱく＆塩分調整のたんぱく質10g以下、脂質制限の糖質27g以下・たんぱく質9g以上。厳選栄養バランスは糖質の公表なし）、塩分は6コースの基準（2.0〜2.5g以下）。まごころケア食の塩分は6コースの基準（健康バランス・カロリー調整は2.5g以下、ほかは2.0g以下）。食宅便の塩分の基準はケア系（塩分&カロリーケア・たんぱくケア）の2.0g未満だけで、おまかせコースには基準がない（10月15日掲載の7品で1.5〜2.4g）。まごころケア食の糖質・たんぱく質（公式の基準は糖質制限食の糖質15g以下・たんぱく調整食のたんぱく質10g以下のみ）、食宅便のkcal・糖質・たんぱく質（公式の基準は低糖質セレクトの糖質10g以下・たんぱくケアのたんぱく質10.2g程度のみ）、Muscle Deliの塩分、つるかめキッチンのたんぱく質、ヨシケイ・コープデリ・パルシステム・ワンミール・GOFOODの栄養値は公式で確認できず5月時点の値のまま。ワタミの宅食の1食価格は2026年10月13日に公式サイトで再確認＝冷蔵7商品の5日間コースで宅配料込み470〜790円。食宅便とまごころケア食の1食価格は2026年10月12日に公式サイトで再確認＝食宅便は7食セット690〜740円、まごころケア食はお得便394〜426円、いずれも送料別。三ツ星ファームの行は2026年10月9日に公式サイトで再確認し、kcal・糖質・タンパク質を三ツ星基準、価格を通常の定期便の1食単価に更新。塩分は公式に基準の記載が見当たらないため「−」。nosh・ナッシュclub・ウェルネスダイニングの価格は2026年10月10日に公式サイトで再確認し、noshは公式表記の1食単価、ウェルネスダイニングは全6コース・7〜21食の税込価格÷食数で算出、kcal・塩分は各コースの公式基準に更新）。最新情報は各公式サイトでご確認ください。</p>
        </section>

                {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（編集部による実食レビューは現在未実施・導入準備中）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
