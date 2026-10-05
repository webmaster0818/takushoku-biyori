import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "編集部の体制と役割";
const PAGE_DESC =
  "宅食びより編集部の体制と各担当の役割をご紹介します。公式サイトの一次確認・出典付きの口コミ集約・料金データの機械計算という調査手法で、宅配弁当・冷凍弁当サービスを比較しています。";
const PAGE_URL = "https://takushoku-biyori.com/author/";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630 }], type: "article", title: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL },
};

const AUTHORS = [
  {
    name: "リサーチ担当",
    role: "公式情報の一次確認",
    bio: "各サービスの料金プラン・送料・キャンペーン・配送エリアを各社の公式サイトで直接確認し、確認日とあわせて記録します。公式サイトで確認できない項目は推測で埋めず「記載なし」「要確認」と明記します。",
    credentials: [
      "全掲載サービスの公式サイト直接確認（確認日を記事・白書に明記）",
      "確認できない項目は推測しない運用",
    ],
  },
  {
    name: "データ検証担当",
    role: "料金白書・実質単価の計算",
    bio: "料金白書の「実質単価＝（プラン料金＋代表送料）÷食数」を、公式確認済みデータからビルド時に機械計算しています。手計算による転記ミスを排除し、データが欠けているサービスは順位に含めず理由を明記します。",
    credentials: [
      "実質単価のビルド時機械計算（転記ゼロ）",
      "欠損データは非表示＋理由明記",
    ],
  },
  {
    name: "口コミ集約担当",
    role: "出典付きの評判整理",
    bio: "SNS・ECサイト等で公開されている利用者の口コミを、出典リンク付きで定性的に集約します。複数のプラットフォームで一致する傾向のみを「傾向」として記載し、編集部が体験を装った口コミの創作は行いません。",
    credentials: [
      "引用はすべて出典リンク付き",
      "複数プラットフォームで一致する内容のみ採用",
    ],
  },
  {
    name: "ファクトチェック担当",
    role: "公開前の数値照合",
    bio: "公開前の記事について、料金・送料・キャンペーン等の数値情報を公式サイトと照合します。時間の経過で情報が変わり得るため、記事には情報の時点を明記し、最新情報は公式サイトへの確認を案内しています。",
    credentials: [
      "公開前の公式サイト照合",
      "情報時点の明記・公式確認への誘導",
    ],
  },
];

export default function AuthorPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "宅食びより編集部",
    url: "https://takushoku-biyori.com",
    description: PAGE_DESC,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <nav className="text-xs mb-6" style={{ color: "#6b7785" }}>
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">&gt;</span>
        <Link href="/editorial/" className="hover:underline">編集部紹介</Link>
        <span className="mx-2">&gt;</span>
        <span>編集部の体制</span>
      </nav>

      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1e2a38" }}>宅食びより 編集部の体制と役割</h1>
      <p className="text-sm mb-8" style={{ color: "#6b7785" }}>最終更新: 2026年7月28日</p>

      <section>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#1e2a38" }}>
          宅食びより編集部は、公開情報の一次確認とデータ整理を担当する複数の編集者・リサーチャーで構成されています。
          当サイトの記事は「公式サイトで確認できた事実」と「出典付きで集約した利用者の声」のみを情報源とし、
          編集部が体験を装った記述は行いません。各担当の役割は以下のとおりです。
        </p>

        <div className="space-y-6 mb-10">
          {AUTHORS.map((author) => (
            <div key={author.name} className="bg-white border rounded-2xl p-6" style={{ borderColor: "#dde3eb" }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl" style={{ background: "#fff5eb", color: "#d97737" }}>
                  {author.name.charAt(0)}
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold mb-1" style={{ color: "#1e2a38" }}>{author.name}</h2>
                  <p className="text-sm" style={{ color: "#d97737" }}>{author.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#1e2a38" }}>{author.bio}</p>
              <div className="rounded-lg p-4" style={{ background: "#fff5eb" }}>
                <p className="text-xs font-bold mb-2" style={{ color: "#6b7785" }}>運用ルール</p>
                <ul className="list-disc pl-5 space-y-1 text-sm" style={{ color: "#1e2a38" }}>
                  {author.credentials.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4" style={{ color: "#1e2a38" }}>実食レビューについて（正直なお知らせ）</h2>
        <p className="leading-relaxed mb-8" style={{ color: "#1e2a38" }}>
          現時点で、編集部による実食レビューは実施していません。記事中の味に関する記述は、出典付きで集約した利用者の口コミの傾向であり、編集部の実食体験ではありません。
          実食検証の導入を準備中で、開始した際は注文プラン・写真・実測データ（量・解凍時間など）を記事に明記します。
        </p>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4" style={{ color: "#1e2a38" }}>編集部としての姿勢</h2>
        <p className="leading-relaxed mb-8" style={{ color: "#1e2a38" }}>
          宅食びより編集部は、個人名ではなく<strong>編集部全体の合議制</strong>で記事を作成・公開しています。
          記事内の数値情報は、リサーチ担当の一次確認とファクトチェック担当の照合を経て公開され、情報の時点を明記します。
          誤りを見つけた場合は<Link href="/editorial/" className="underline" style={{ color: "#d97737" }}>編集部紹介ページ</Link>記載の窓口までご指摘ください。確認のうえ速やかに訂正します。
        </p>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4" style={{ color: "#1e2a38" }}>関連ページ</h2>
        <ul className="list-disc pl-6 space-y-1 mb-10">
          <li><Link href="/editorial/" className="underline" style={{ color: "#d97737" }}>編集部紹介・編集ポリシー</Link></li>
          <li><Link href="/methodology/" className="underline" style={{ color: "#d97737" }}>評価方法・データ源</Link></li>
        </ul>
      </section>
    </div>
  );
}
