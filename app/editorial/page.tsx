import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "編集部紹介・編集ポリシー";
const PAGE_DESC =
  "宅食びより編集部の体制と編集方針をご紹介します。公式サイトの一次確認・出典付きの口コミ集約・料金データの機械計算に基づき、宅配弁当・冷凍弁当・栄養食サービスを公平に比較しています。";
const PAGE_URL = "https://takushoku-biyori.com/editorial/";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
  },
};

const editorRoles = [
  {
    role: "編集長 / コンテンツ責任者",
    description:
      "宅配食・冷凍弁当業界の公開情報を継続的に追い、記事の品質基準・編集方針の策定責任を負います。掲載サービスの選定と既存記事の定期見直しを統括しています。",
  },
  {
    role: "口コミ・評判リサーチ担当",
    description:
      "SNS・ECサイト等で公開されている利用者の口コミを出典リンク付きで集約し、複数プラットフォームで一致する傾向のみを記事に反映します。良い評判だけでなく「まずい」等の否定的な声も出典付きで正直に紹介します。※編集部による実食レビューは現在未実施（導入準備中）です。",
  },
  {
    role: "栄養成分検証担当",
    description:
      "公式サイトで公開されている栄養成分表示・原材料表記を照合し、ダイエット・糖質制限・高齢者・産後等のニーズ別の整理を行っています。判定は公開データの比較に基づくもので、医学的・栄養学的な効果を保証するものではありません。",
  },
  {
    role: "ファクトチェック担当",
    description:
      "記事公開前に、料金プラン・送料・キャンペーン・配送エリア等の数値情報を公式サイトと照合。誤情報の混入を防ぐ最後の砦として機能しています。",
  },
];

const policies = [
  {
    title: "一次情報に基づく情報提供",
    body: "全ての記事は、各社公式サイトで一次確認した事実情報（料金・送料・プラン等・確認日明記）と、出典リンク付きで集約した利用者の口コミのみを情報源としています。編集部が体験を装った記述や架空の口コミは掲載しません。実食レビューは現在未実施で、導入時は注文プラン・写真・実測データを明記します。",
  },
  {
    title: "中立性の維持",
    body: "宅食びよりはアフィリエイト広告（PR）を含むメディアですが、紹介料の有無でサービスランキング・評価が変わることはありません。すべての宅食サービスは、公開データに基づく同一の観点（料金・実質単価・栄養成分表示・配送条件・解約条件）で整理しています。",
  },
  {
    title: "鮮度の確保",
    body: "料金プラン・キャンペーンは定期的に公式サイトで見直し、確認できた変更を反映します。各記事には情報の時点・最終更新日を明記し、最新情報は公式サイトでの確認を案内しています。",
  },
  {
    title: "透明性の確保",
    body: "アフィリエイト関係（PR表記）、データの取得方法・計算方法、引用の出典をすべて公開しています。読者が情報の信頼性を自身で判断できる材料を提供することを最重視しています。",
  },
  {
    title: "推奨対象者の明示",
    body: "宅食サービスは、用途（ダイエット・糖質制限・産後・高齢者・一人暮らし等）により最適な選択肢が異なります。各サービスの「向く人・向かない人」を明確に分け、合わない読者には別サービスを案内しています。",
  },
];

export default function EditorialPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "宅食びより編集部",
    url: PAGE_URL,
    description: PAGE_DESC,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">&gt;</span>
        <span>編集部紹介</span>
      </nav>

      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">宅食びより 編集部紹介</h1>
      <p className="text-gray-500 text-sm mb-8">最終更新: 2026年7月28日</p>

      <section className="prose max-w-none">
        <p className="text-base leading-relaxed mb-6">
          宅食びよりは、宅配弁当・冷凍弁当・栄養食サービスの公開情報を一次確認し、データで比較することに特化した情報メディアです。
          編集部は公式情報の確認とデータ整理を担当する複数のスタッフで構成され、ダイエット中の方・産後ママ・一人暮らし・シニア層など、
          様々なライフスタイルに合うサービス選びをサポートすることをミッションとしています。
        </p>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4">編集部の体制</h2>
        <p className="text-base leading-relaxed mb-4">
          宅食びよりは個人名ではなく <strong>編集部全体の合議制</strong> で記事を作成・公開しています。
          理由は、宅食市場が刻一刻と変動する性質を持ち、単一の編集者では追いきれないためです。
          各担当が連携し、相互レビューを経て公開する体制を取っています。
        </p>

        <div className="space-y-4 mb-10">
          {editorRoles.map((r) => (
            <div key={r.role} className="border rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">{r.role}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4">編集方針（5つの原則）</h2>
        <div className="space-y-4 mb-10">
          {policies.map((p) => (
            <div key={p.title} className="border-l-4 border-orange-400 pl-5 py-2">
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4">記事制作プロセス</h2>
        <ol className="list-decimal pl-6 space-y-2 mb-10 text-base leading-relaxed">
          <li>編集部内でレビュー対象サービスを選定（読者ニーズ・市場シェアを基準）</li>
          <li>料金プラン・送料・キャンペーンを各社公式サイトで一次確認（確認日を記録）</li>
          <li>公開されている利用者の口コミを出典付きで集約（複数一致の傾向のみ採用）</li>
          <li>栄養成分・料金プラン・送料を公式サイトと照合し、実質単価を機械計算</li>
          <li>初稿作成 → 相互レビュー → ファクトチェック → 公開</li>
          <li>3-6ヶ月に1回の定期レビューで情報を最新化</li>
        </ol>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4">関連ページ</h2>
        <ul className="list-disc pl-6 space-y-1 mb-10">
          <li><Link href="/methodology/" className="text-orange-600 underline">評価方法・データ源</Link></li>
          <li><Link href="/content-policy/" className="text-orange-600 underline">記事制作ポリシー</Link></li>
          <li><Link href="/privacy-policy/" className="text-orange-600 underline">プライバシーポリシー</Link></li>
        </ul>
      </section>
    </div>
  );
}
