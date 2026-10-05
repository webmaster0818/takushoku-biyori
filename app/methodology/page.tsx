import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "評価方法・データ源";
const PAGE_DESC =
  "宅食びよりの宅配弁当・冷凍弁当サービス評価方法を全公開。公式データの一次確認手順、実質単価の計算方法、口コミ集約の基準、利益相反の管理について解説します。";
const PAGE_URL = "https://takushoku-biyori.com/methodology/";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630 }], type: "article", title: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL },
};

const criteria = [
  { name: "味の傾向", weight: "25%", detail: "公開されている利用者口コミを出典付きで定性集約（複数プラットフォームで一致する傾向のみ採用）。編集部による実食評価は現在未実施・導入準備中" },
  { name: "栄養", weight: "20%", detail: "栄養成分表示の充実度・低糖質/高タンパク等の特化対応・原材料の透明性を評価" },
  { name: "コスパ", weight: "20%", detail: "1食あたり総額（送料込み）と他社比較、長期利用時の割引適用後価格" },
  { name: "配送条件", weight: "15%", detail: "公式サイト記載の配送方法・配送エリア・送料・不在時対応（置き配等）の比較" },
  { name: "継続のしやすさ", weight: "20%", detail: "解約難易度、スキップ機能、プラン変更柔軟性、最低契約期間" },
];

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">&gt;</span>
        <span>評価方法</span>
      </nav>

      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">評価方法・データ源</h1>
      <p className="text-gray-500 text-sm mb-8">最終更新: 2026年5月21日</p>

      <section className="prose max-w-none">
        <h2 className="font-display text-2xl font-bold mb-4">5項目評価基準</h2>
        <p className="mb-6">
          宅食びよりは、宅配弁当・冷凍弁当・栄養食サービスを以下の5項目で総合評価します。重み付けは編集部の議論を経て決定したものです。
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-50">
                <th className="border px-4 py-2 text-left">項目</th>
                <th className="border px-4 py-2 text-left">重み</th>
                <th className="border px-4 py-2 text-left">評価内容</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c) => (
                <tr key={c.name}>
                  <td className="border px-4 py-2 font-bold">{c.name}</td>
                  <td className="border px-4 py-2">{c.weight}</td>
                  <td className="border px-4 py-2 text-sm">{c.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-2xl font-bold mb-4">データ取得源</h2>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li><strong>料金・送料・キャンペーン:</strong> 各社公式サイトを月次以上で確認、変更があれば即時反映</li>
          <li><strong>栄養成分:</strong> 公式公開資料・パッケージ表示を照合</li>
          <li><strong>味の傾向:</strong> 公開されている利用者口コミの出典付き定性集約（編集部による実食レビューは現在未実施・導入準備中）</li>
          <li><strong>口コミ・評判:</strong> Twitter（X）・Instagram・楽天・Amazon の口コミを定性集約。複数プラットフォームで一致する内容のみ採用</li>
          <li><strong>解約条件:</strong> 各社公式サイトの解約規定・締め日を一次確認して整理（実際の解約手続きの検証は未実施）</li>
        </ul>

        <h2 className="font-display text-2xl font-bold mb-4">利益相反の管理</h2>
        <p className="mb-6">
          宅食びよりは複数のアフィリエイトプログラムに参加していますが、紹介料の有無で評価・ランキング順位が変わることはありません。
          評価項目はすべて事前に定義されており、編集部内で複数名のレビューを経て決定します。
          アフィリエイト関係のある記事には冒頭にPR表示を明記しています。
        </p>

        <h2 className="font-display text-2xl font-bold mb-4">情報の更新サイクル</h2>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>料金・キャンペーン: 月1回以上</li>
          <li>口コミ傾向・配送条件の見直し: 6ヶ月に1回（メニュー一新時は随時）</li>
          <li>ランキング更新: 四半期ごと</li>
        </ul>

        <h2 className="font-display text-2xl font-bold mb-4">読者からのフィードバック</h2>
        <p className="mb-6">
          記事内容に誤りや古い情報がある場合、お問い合わせフォームよりご連絡ください。
          確認の上、3営業日以内に修正対応いたします。
        </p>

        <h2 className="font-display text-2xl font-bold mb-4">関連ページ</h2>
        <ul className="list-disc pl-6 space-y-1 mb-10">
          <li><Link href="/editorial/" className="text-orange-600 underline">編集部紹介</Link></li>
          <li><Link href="/content-policy/" className="text-orange-600 underline">記事制作ポリシー</Link></li>
        </ul>
      </section>
    </div>
  );
}
