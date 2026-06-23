import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "冷凍弁当の送料無料サービスはある？送料を抑える5つの方法と主要サービス送料比較";
const ARTICLE_DESCRIPTION =
  "冷凍弁当の送料無料サービスを徹底調査。完全送料無料・実質無料・条件付き無料の3パターンを整理し、送料を抑える5つの具体策と主要サービスの地域別送料比較表を掲載。送料負担で迷っている方の決定版ガイドです。";
const ARTICLE_URL =
  "https://takushoku-biyori.com/articles/souryou-muryou-reitou-bento/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "冷凍弁当 送料無料, 宅配弁当 送料無料, 宅食 送料 安い, 冷凍弁当 送料 抑える, ワタミ 送料, nosh 送料, 三ツ星ファーム 送料, ヨシケイ 送料",
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
    question: "冷凍弁当で完全に送料無料のサービスはある？",
    answer:
      "「クール冷凍便を全国どこでも無条件で送料無料」というサービスはほぼ存在しません。冷凍便はヤマト運輸や佐川急便のクール宅急便を使うのが一般的で、配送原価が高いためです。ただし、(1)定期購入で送料無料、(2)購入金額○○円以上で送料無料、(3)初回限定で送料無料、(4)自社配送エリア内で送料無料、といった条件付き無料を実施しているサービスは多数あります。代表例としてヨシケイ（自社配送エリア内）、まごころケア食（定期購入で送料無料）、ウェルネスダイニング（初回送料無料）などです。",
  },
  {
    question: "noshには送料無料の方法はある？",
    answer:
      "noshは原則として配送地域別の固定送料がかかります（関東913円・北海道2,145円・沖縄2,827円など）。完全な送料無料制度はありませんが、期間限定キャンペーンで「初回送料無料」「14食/21食プラン送料割引」が実施されることがあります。常時利用するなら、(1)10食プランでまとめ買い、(2)配送頻度を3週に1回に長くする、(3)関東・関西エリアの送料が安い地域で利用する、といった方法で1食あたりの送料負担を抑えるのが現実的です。",
  },
  {
    question: "北海道・沖縄に住んでいるけど送料を抑える方法は？",
    answer:
      "北海道・沖縄は冷凍便の送料が高く、noshは北海道2,145円、沖縄2,827円が固定でかかります。送料を抑える選択肢は、(1)ヨシケイ（北海道・沖縄の一部地域は対象外だが、対象内なら送料無料）、(2)まごころケア食（定期購入で全国送料無料）、(3)Dr.つるかめキッチン（定期購入で全国送料無料）、を検討するのがおすすめ。あるいはnoshを10食プランで2〜3週に1回まとめて注文することで、1食あたりの送料負担を最小化する方法もあります。",
  },
  {
    question: "送料無料の代わりに商品代金が高い、というケースはある？",
    answer:
      "あります。「送料無料」と謳うサービスの多くは、商品代金に送料分を上乗せして調整しています。本当にお得かを判断するには「商品代金＋送料の総額」で1食あたりの単価を比較することが重要。たとえば、まごころケア食は送料無料ですが1食462〜580円、noshは送料別ですが商品単価599〜698円。送料込みの総額で比較すれば、どちらが自分の地域で安くなるかが見えます。",
  },
  {
    question: "送料無料サービスを選ぶときの最重要ポイントは？",
    answer:
      "「定期購入縛りの有無」と「解約のしやすさ」を必ず確認してください。送料無料の条件として「定期購入○回以上」が設定されているケースが多く、途中解約すると違約金が発生する場合も。noshのように「縛りなしでマイページから即解約可能」なサービスと、定期縛りがあるサービスとでは、合わなかった時のリスクが大きく違います。送料の安さだけでなく、撤退のしやすさも含めて選ぶことが失敗を避けるコツです。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">料金・送料</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">冷凍弁当の送料無料サービスはある？</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "conclusion", label: "結論：完全送料無料は稀。条件付き無料の活用が現実的" },
    { id: "patterns", label: "「送料無料」の3つのパターンを理解する" },
    { id: "free-list", label: "送料無料・実質無料の主要サービス一覧" },
    { id: "compare", label: "主要冷凍弁当サービスの地域別送料比較" },
    { id: "tips", label: "送料を抑える5つの具体的な方法" },
    { id: "real-cost", label: "「送料込み総額」で正しく比較する方法" },
    { id: "regional", label: "北海道・沖縄・離島で送料を抑えるコツ" },
    { id: "caution", label: "送料無料サービスを選ぶ際の注意点" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">
              {i + 1}. {s.label}
            </a>
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
              <th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>
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
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">{answer}</div>
    </details>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

export default function SouryouMuryouReitouBentoPage() {
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
      { "@type": "ListItem", position: 2, name: "料金・送料" },
      { "@type": "ListItem", position: 3, name: "冷凍弁当の送料無料サービスはある？" },
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
            料金・送料
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-05-28">公開: 2026年5月28日</time>
            <span>
              監修:{" "}
              <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
        </header>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-xs leading-relaxed">
          <strong>PR表記：</strong>当ページにはアフィリエイトリンクが含まれます。送料・料金は<strong>2026年5月時点の各社公式サイト記載情報</strong>に基づきます。送料は予告なく変更される場合があるため、最新情報は各サービスの公式サイトでご確認ください。
        </div>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            「冷凍弁当を始めたいけど、送料が高すぎる…」「送料無料のサービスってあるの？」——冷凍宅配弁当を選ぶうえで、<strong>送料の負担は地味に大きな悩みどころ</strong>。たとえば北海道在住でnoshを月2回利用すると、送料だけで月4,000円超になることもあります。
          </p>
          <p className="mb-3">
            この記事では、<strong>2026年5月時点</strong>の主要冷凍宅配弁当サービスの送料を一斉比較し、「送料無料・実質無料」のサービスを公式情報ベースで整理。さらに、送料を抑えるための5つの具体策と、「送料込み総額」で正しくサービスを比較する方法を解説します。
          </p>
          <p>
            読み終わるころには、自分の地域と利用頻度に最適な「送料負担を最小化する選び方」が見えるはずです。
          </p>
        </div>

        <TableOfContents />

        {/* ===== 結論 ===== */}
        <SectionHeading id="conclusion">結論：完全送料無料は稀。条件付き無料の活用が現実的</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          冷凍便は配送原価が高いため、<strong>「全国・無条件で送料無料」</strong>を実現しているサービスはほとんど存在しません。一方で、<strong>条件付き送料無料</strong>を実施しているサービスは複数あり、これを上手に使うことで送料負担を大きく減らせます。
        </p>

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-2">この記事のポイント</p>
          <ul className="list-disc list-inside space-y-1">
            <li>完全送料無料の冷凍宅配弁当は稀。代表は<strong>まごころケア食（定期で全国送料無料）</strong></li>
            <li>「定期購入で送料無料」「自社配送エリアで無料」が主な無料パターン</li>
            <li>送料無料サービスは商品単価が高めに設定されている場合もあるので<strong>「送料込み総額」</strong>で比較</li>
            <li>noshはまとめ買い・配送頻度調整で1食あたり送料を抑えるのが現実解</li>
          </ul>
        </div>

        {/* ===== 3パターン ===== */}
        <SectionHeading id="patterns">「送料無料」の3つのパターンを理解する</SectionHeading>

        <SubHeading>パターン1：定期購入で送料無料</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          「定期購入を申し込めば全国一律で送料無料」というパターン。<strong>まごころケア食</strong>や<strong>Dr.つるかめキッチン</strong>がこの形式を採用しています。最低継続回数や解約条件を必ず確認することが大切ですが、長期利用を予定しているなら最も負担が少ない選択肢です。
        </p>

        <SubHeading>パターン2：自社配送エリア内で送料無料</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          ヤマト運輸を使わず、自社のスタッフが直接配送するエリアでは送料無料、という形式。<strong>ヨシケイ</strong>や<strong>ワタミの宅食（冷蔵タイプ）</strong>が代表例です。ただし、対象は冷蔵食材中心で、純粋な冷凍弁当でこのパターンに当てはまるのはやや限定的。また配送エリアが限られる点と、配送時間帯指定ができない場合があることに注意。
        </p>

        <SubHeading>パターン3：初回・キャンペーン期間限定で送料無料</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">
          <strong>ウェルネスダイニング</strong>は初回注文時の送料を無料に設定。また、各社がキャンペーン期間中に「14食/21食プラン送料無料」「ブラックフライデー送料割引」などを実施することがあります。常用するというより、「初回お試し」「お得期間の集中購入」に向くパターンです。
        </p>

        {/* ===== 一覧 ===== */}
        <SectionHeading id="free-list">送料無料・実質無料の主要サービス一覧</SectionHeading>

        <ComparisonTable
          headers={["サービス", "送料無料の条件", "1食単価の目安"]}
          rows={[
            ["まごころケア食", "定期購入で全国送料無料", "462〜580円"],
            ["Dr.つるかめキッチン", "定期購入で全国送料無料", "660〜815円"],
            ["ヨシケイ", "自社配送エリア内で送料無料", "597〜750円"],
            ["ワタミの宅食（冷蔵）", "自社配送エリアで送料無料（冷蔵タイプ）", "590〜680円"],
            ["ウェルネスダイニング", "初回送料無料（2回目以降は770円〜）", "663〜880円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※価格は2026年5月時点の各社公式情報に基づきます。プラン・コースにより変動するため、詳細は公式サイトでご確認ください。なお、まごころケア食・Dr.つるかめキッチンの「定期購入で送料無料」は、配送頻度・解約条件の確認が必須です。
        </p>

        {/* ===== 地域別 ===== */}
        <SectionHeading id="compare">主要冷凍弁当サービスの地域別送料比較</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          送料無料サービス以外の主要冷凍弁当について、地域別の送料を比較します。noshを基準に、関東・関西〜北海道・沖縄まで比較しました（2026年5月時点）。
        </p>

        <ComparisonTable
          headers={["地域", "nosh", "三ツ星ファーム（参考）", "ウェルネスダイニング（参考）"]}
          rows={[
            ["北海道", "2,145円", "1,800〜2,200円程度", "1,400〜1,800円程度"],
            ["北東北（青森・秋田・岩手）", "1,331円", "1,200円前後", "1,000円前後"],
            ["南東北（宮城・山形・福島）", "1,221円", "1,100円前後", "950円前後"],
            ["関東", "913円", "990円前後", "770円〜"],
            ["信越", "978円", "1,000円前後", "850円前後"],
            ["北陸・中部", "979円", "1,000円前後", "850円前後"],
            ["関西", "913円", "990円前後", "770円〜"],
            ["中国", "979円", "1,000円前後", "850円前後"],
            ["四国", "979円", "1,000円前後", "950円前後"],
            ["九州", "1,078円", "1,100円前後", "1,050円前後"],
            ["沖縄", "2,827円", "2,500円前後", "2,100円前後"],
          ]}
        />

        <p className="text-xs text-warm-gray mb-6">
          ※三ツ星ファーム・ウェルネスダイニングの送料は時期・キャンペーンにより変動。<strong>あくまで目安値</strong>であり、最新の正確な金額は各公式サイトでご確認ください。詳細な送料比較は<Link href="/articles/souryou-yasui-ranking/" className="text-accent underline">送料が安い宅配弁当ランキング</Link>もあわせて参照ください。
        </p>

        <p className="text-sm mb-6 leading-relaxed">
          関東・関西エリアが各社共通で最安、北海道・沖縄が高くなる構造はほぼ共通。北海道・沖縄在住の方は<strong>まごころケア食やDr.つるかめキッチンの「定期で全国送料無料」</strong>が有力な選択肢になります。
        </p>

        {/* ===== 5つの方法 ===== */}
        <SectionHeading id="tips">送料を抑える5つの具体的な方法</SectionHeading>

        {[
          {
            num: 1,
            title: "まとめ買いで1回の配送量を最大化",
            text: "多くのサービスは「6食・8食・10食」のプランがあり、送料は食数にかかわらず1回分。10食プランで注文すれば、6食プランと比べて1食あたりの送料負担を6/10に圧縮できます。たとえばnoshの関東送料913円を10食で割れば91円/食、6食なら152円/食。差は明確です。",
          },
          {
            num: 2,
            title: "配送頻度を長く設定する",
            text: "配送間隔を「1週に1回→2週に1回→3週に1回」と長くすれば、月あたりの配送回数が減り、月の送料総額も減らせます。冷凍庫スペースに余裕がある方は、10食プラン+3週に1回の組み合わせが最も送料効率が良いです。",
          },
          {
            num: 3,
            title: "定期購入で送料無料のサービスを選ぶ",
            text: "まごころケア食やDr.つるかめキッチンのように、定期購入で全国送料無料のサービスを利用するのが王道。1食単価が比較的安いことも相まって、特に北海道・沖縄など送料が高い地域の利用者には最大のメリットとなります。",
          },
          {
            num: 4,
            title: "自社配送エリアで完結するサービスを選ぶ",
            text: "ヨシケイ・ワタミの宅食（冷蔵）など、自社配送網を持つサービスは送料無料エリアが広め。お住まいの地域が対象エリアに含まれる場合は、送料負担を完全にゼロにできます。冷蔵タイプなので保管期間が短い点には注意。",
          },
          {
            num: 5,
            title: "キャンペーン期間に集中購入する",
            text: "「初回送料無料」「14食/21食プラン送料割引」など、各社が実施するキャンペーンを狙う方法。新生活シーズン（3〜4月）、夏休み（7〜8月）、ブラックフライデー（11月）、年末年始（12〜1月）が狙い目の時期。公式LINE・メルマガを登録しておけば情報をキャッチしやすくなります。",
          },
        ].map((tip) => (
          <div key={tip.num} className="flex gap-4 mb-5">
            <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
              {tip.num}
            </span>
            <div>
              <p className="font-bold text-sm mb-1">{tip.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{tip.text}</p>
            </div>
          </div>
        ))}

        {/* ===== 総額比較 ===== */}
        <SectionHeading id="real-cost">「送料込み総額」で正しく比較する方法</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          「送料無料」と聞くと魅力的に見えますが、実は<strong>商品単価に送料分が転嫁されている</strong>ケースもあります。本当にお得かを判断するには、<strong>「送料込み総額÷食数」</strong>で1食あたりのコストを算出することが大切です。
        </p>

        <SubHeading>シミュレーション：関東在住で10食/月利用した場合</SubHeading>
        <ComparisonTable
          headers={["サービス", "10食料金", "送料", "総額", "1食あたり"]}
          rows={[
            ["nosh（10食プラン）", "5,990円", "913円", "6,903円", "690円"],
            ["まごころケア食（定期10食）", "約4,620円", "0円（定期送料無料）", "約4,620円", "約462円"],
            ["三ツ星ファーム（10食）", "約6,260円", "990円前後", "約7,250円", "約725円"],
            ["ウェルネスダイニング（10食）", "約6,630円", "770円〜", "約7,400円", "約740円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          ※料金は2026年5月時点の公式情報に基づく目安値。プランや時期により変動します。「送料込み総額」で比較すると、まごころケア食（送料無料 + 単価安め）が関東でもコスパ良好。一方、noshは送料が別途かかるものの、メニューの自由度・nosh club継続割引などで長期的にはお得になる場合があります。
        </p>

        <SubHeading>シミュレーション：北海道在住で10食/月利用した場合</SubHeading>
        <ComparisonTable
          headers={["サービス", "10食料金", "送料", "総額", "1食あたり"]}
          rows={[
            ["nosh（10食プラン）", "5,990円", "2,145円", "8,135円", "約814円"],
            ["まごころケア食（定期10食）", "約4,620円", "0円", "約4,620円", "約462円"],
            ["Dr.つるかめキッチン（定期）", "約6,600円", "0円", "約6,600円", "約660円"],
          ]}
        />

        <p className="text-sm mb-6 leading-relaxed">
          北海道の場合、送料を加味するとサービス間のコスト差が大きく開きます。<strong>送料無料サービスの優位性が顕著</strong>。ただし、メニューの自由度や味の好みも重要な選定基準なので、コストだけで判断しないことも大切です。
        </p>

        {/* ===== 北海道沖縄 ===== */}
        <SectionHeading id="regional">北海道・沖縄・離島で送料を抑えるコツ</SectionHeading>

        <p className="text-sm mb-6 leading-relaxed">
          北海道・沖縄・離島は冷凍便の送料が突出して高く、月に2回配送するだけで送料が4,000〜5,000円超になることも。これらの地域で送料負担を抑える具体策をまとめます。
        </p>

        <ul className="text-sm space-y-2 mb-6 list-disc list-inside leading-relaxed">
          <li><strong>第1選択：まごころケア食</strong>（定期購入で全国送料無料・1食462〜580円）</li>
          <li><strong>第2選択：Dr.つるかめキッチン</strong>（定期購入で全国送料無料・栄養管理特化）</li>
          <li><strong>第3選択：noshを10食プラン+3週に1回</strong>（月1回配送で送料を最小化）</li>
          <li>地域によってはヨシケイ・ワタミの宅食（冷蔵）の対象外となるため、事前に郵便番号で確認</li>
          <li>離島は宅配便の中継料金や日数増がかかるケースあり。配送可能性も含めて要確認</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm leading-relaxed">
          <p className="font-bold mb-1">離島の方への注意</p>
          <p>離島の場合、クール宅急便の取扱い自体がなかったり、別途中継料金が発生する可能性があります。注文前に必ず公式サイトの配送可能エリアと、お住まいの郵便番号での送料を確認してください。</p>
        </div>

        {/* ===== 注意点 ===== */}
        <SectionHeading id="caution">送料無料サービスを選ぶ際の注意点</SectionHeading>

        {[
          {
            title: "1. 定期購入の「縛り期間」を必ず確認",
            text: "送料無料の代わりに「○回以上の継続購入が条件」とされているサービスがあります。途中解約で違約金が発生したり、初回送料無料分が後から請求される場合も。契約前に、解約条件・最低継続回数を必ず確認してください。",
          },
          {
            title: "2. 商品単価が送料込み価格になっている場合がある",
            text: "「送料無料」と謳っても、商品代金に送料分を上乗せして調整しているケースは少なくありません。本当にお得かは「送料込み総額」で比較することが大事。当ページでは送料込み総額で比較する例も用意したので参考にしてください。",
          },
          {
            title: "3. 自社配送エリアは限定的",
            text: "ヨシケイ・ワタミの宅食（冷蔵）の自社配送は、エリアが限られています。地方都市や郊外、地方部の一部では対象外になることも。公式サイトで郵便番号検索して、必ず自分のエリアが対象内かを確認しましょう。",
          },
          {
            title: "4. 「初回送料無料」は1回限り",
            text: "ウェルネスダイニングなどの「初回送料無料」は、2回目以降は通常送料がかかります。長期利用するなら、初回特典だけで判断せず、2回目以降の通常送料も計算に入れてサービスを選ぶ必要があります。",
          },
        ].map((item, i) => (
          <div key={i} className="bg-cream rounded-lg p-4 mb-4 text-sm leading-relaxed">
            <p className="font-bold mb-1">{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}

        {/* ===== FAQ ===== */}
        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        {/* ===== まとめ ===== */}
        <SectionHeading id="summary">まとめ：自分の地域・利用頻度で「実質最安」を見つけよう</SectionHeading>

        <div className="bg-cream rounded-xl p-6 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            冷凍弁当の「完全送料無料」を実現しているサービスは少ないものの、<strong>条件付き送料無料</strong>を上手に使えば、送料負担を大幅に圧縮できます。とくに北海道・沖縄など送料が高い地域の方は、<strong>まごころケア食・Dr.つるかめキッチンの「定期で送料無料」</strong>を検討する価値が大きいです。
          </p>
          <p className="mb-3">
            noshのように送料が地域別固定でかかるサービスでも、<strong>10食プラン+配送頻度を3週に1回</strong>に設定すれば、1食あたりの送料を100円以下まで抑えることが可能。メニューの自由度や味で選ぶならnosh、コスト最優先ならまごころケア食、というのが2026年5月時点での編集部の見解です。
          </p>
          <p>
            最終的には「送料込み総額÷食数」で正しく比較すること、そして「定期縛り・解約のしやすさ」も併せて確認することが、後悔しない選び方のコツ。最新の送料・料金は必ず各公式サイトで確認してから申し込んでください。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 my-8">
          <a
            href="https://nosh.jp/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block bg-accent text-white font-bold text-center px-6 py-4 rounded-lg hover:bg-accent-dark transition-colors text-sm"
          >
            nosh公式サイトを見る
          </a>
          <a
            href="https://magokoro-care-shoku.com/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block bg-accent text-white font-bold text-center px-6 py-4 rounded-lg hover:bg-accent-dark transition-colors text-sm"
          >
            まごころケア食 公式サイトを見る
          </a>
        </div>

        <div className="bg-accent/10 rounded-xl p-5 mb-8 text-center">
          <p className="font-bold mb-2">あわせて読みたい</p>
          <Link href="/articles/souryou-yasui-ranking/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            送料が安い宅配弁当ランキング
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/nosh-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            nosh(ナッシュ)の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/magokoro-care-reviews/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            まごころケア食の口コミ・評判
          </Link>
          <span className="text-warm-gray text-sm mx-2">|</span>
          <Link href="/articles/hitorigurashi-osusume/" className="text-accent hover:text-accent-dark underline font-medium text-sm">
            一人暮らしにおすすめの宅食TOP5
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
                宅配弁当・栄養食の専門ライターチーム。公開情報や利用者の口コミをもとに、公平な比較情報をお届けします。
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
