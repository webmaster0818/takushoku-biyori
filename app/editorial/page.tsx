import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "編集部紹介・編集ポリシー";
const PAGE_DESC =
  "宅食びより編集部の体制・専門性・編集方針をご紹介します。実食レビュー・栄養成分検証・配送実証に基づき、宅配弁当・冷凍弁当・栄養食サービスを公平に比較しています。";
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
      "宅配食・冷凍弁当業界の最新動向を統括。記事の品質基準・編集方針の策定責任を負います。新サービスの実食テスト・既存サービスの定期レビューを統括しています。",
  },
  {
    role: "実食レビューチーム",
    description:
      "全紹介サービスについて、自費で複数プランを取り寄せ、実際の味・量・冷凍状態・配送品質を検証。写真・動画記録を残し、宣伝文句との乖離を読者に伝えています。",
  },
  {
    role: "栄養成分検証担当",
    description:
      "公開されている栄養成分表示・原材料表記を照合し、ダイエット・糖質制限・高齢者・産後等のニーズに即した推奨判定を行っています。管理栄養士の監修を受けた評価基準を採用。",
  },
  {
    role: "ファクトチェック担当",
    description:
      "記事公開前に、料金プラン・送料・キャンペーン・配送エリア等の数値情報を公式サイトと照合。誤情報の混入を防ぐ最後の砦として機能しています。",
  },
];

const policies = [
  {
    title: "実体験に基づく情報提供",
    body: "全ての宅食サービスは、編集部が自費で実際に注文し、味・量・配送品質を検証した上で記事を作成しています。試食なしの紹介、メーカー資料のコピペ、AI生成だけのレビューは公開しません。",
  },
  {
    title: "中立性の維持",
    body: "宅食びよりはアフィリエイト広告（PR）を含むメディアですが、紹介料の有無でサービスランキング・評価が変わることはありません。すべての宅食サービスは、編集部独自の5項目基準（味・栄養・コスパ・配送・継続のしやすさ）で評価しています。",
  },
  {
    title: "鮮度の確保",
    body: "料金プラン・キャンペーンは月次以上の頻度で見直し、価格改定・サービス変更があった場合は即座に反映します。各記事には最終更新日を明記しています。",
  },
  {
    title: "透明性の確保",
    body: "アフィリエイト関係、評価基準、実食条件（注文プラン・回数）すべて公開しています。読者が情報の信頼性を自身で判断できる材料を提供することを最重視しています。",
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
      <p className="text-gray-500 text-sm mb-8">最終更新: 2026年5月21日</p>

      <section className="prose max-w-none">
        <p className="text-base leading-relaxed mb-6">
          宅食びよりは、宅配弁当・冷凍弁当・栄養食サービスを「実際に食べて検証する」ことに特化した情報メディアです。
          編集部は宅食サービスを月20回以上利用するスタッフで構成され、ダイエット中の方・産後ママ・一人暮らし・シニア層など、
          様々なライフスタイルに合うサービス選びをサポートすることをミッションとしています。
        </p>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4">編集部の体制</h2>
        <p className="text-base leading-relaxed mb-4">
          宅食びよりは個人名ではなく <strong>編集部全体の合議制</strong> で記事を作成・公開しています。
          理由は、宅食市場が刻一刻と変動する性質を持ち、単一の編集者では追いきれないためです。
          各セクションの専門家が連携し、相互レビューを経て公開する体制を取っています。
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
          <li>編集部が自費で複数プランを注文（送料・キャンペーンを含めた実費を記録）</li>
          <li>味・量・冷凍状態・配送タイミングを記録（写真・温度測定含む）</li>
          <li>栄養成分・料金プラン・送料を公式サイトと照合</li>
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
