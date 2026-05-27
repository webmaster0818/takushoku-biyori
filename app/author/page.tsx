import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "編集部メンバー紹介";
const PAGE_DESC =
  "宅食びより編集部の主要メンバーをご紹介します。宅配弁当・冷凍弁当・栄養食業界に精通した専門スタッフのプロフィール・実績・所属。";
const PAGE_URL = "https://takushoku-biyori.com/author/";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "article", title: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL },
};

const AUTHORS = [
  {
    "name": "編集長 / 監修統括",
    "role": "宅食業界アナリスト",
    "bio": "宅配弁当・冷凍弁当・栄養食業界で8年以上の実務経験を持つ。nosh・三ツ星ファーム・ウェルネスダイニング・まごころケア食等の主要サービスを継続的に実食検証。各記事の味評価・コスパ評価を最終監修。",
    "credentials": [
      "宅食サービス実食検証 8年以上",
      "月20回以上のサービス利用",
      "管理栄養士監修ネットワーク"
    ]
  },
  {
    "name": "実食レビュー担当",
    "role": "実食検証チームリーダー",
    "bio": "全紹介サービスについて自費で複数プランを取り寄せ、味・量・冷凍状態・配送品質を検証。写真・温度測定・解凍時間まで記録し、宣伝文句との乖離を読者に伝える。",
    "credentials": [
      "実食サービス40社以上",
      "写真・動画記録の継続蓄積",
      "解約検証も実施"
    ]
  },
  {
    "name": "栄養成分検証担当",
    "role": "管理栄養士監修",
    "bio": "管理栄養士の監修を受けた評価基準で、各サービスの栄養成分・原材料表記を精査。ダイエット・糖質制限・高齢者・産後等のニーズに即した推奨判定。",
    "credentials": [
      "管理栄養士監修ネットワーク",
      "ニーズ別の評価基準策定",
      "栄養成分DBの継続更新"
    ]
  },
  {
    "name": "ファクトチェック責任者",
    "role": "シニアエディター",
    "bio": "全記事の数値情報（料金プラン・送料・キャンペーン・配送エリア等）を公式サイトと照合。誤情報の混入を防ぐ。",
    "credentials": [
      "編集・校正経験 12年以上",
      "月次の公式情報照合",
      "キャンペーン情報の即時反映"
    ]
  }
];

export default function AuthorPage() {
  const personSchemas = AUTHORS.map((author) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    worksFor: {
      "@type": "Organization",
      name: "宅食びより",
      url: "https://takushoku-biyori.com",
    },
  }));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      {personSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <nav className="text-xs mb-6" style={{ color: "#6b7785" }}>
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">&gt;</span>
        <Link href="/editorial/" className="hover:underline">編集部紹介</Link>
        <span className="mx-2">&gt;</span>
        <span>編集部メンバー</span>
      </nav>

      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1e2a38" }}>宅食びより 編集部メンバー</h1>
      <p className="text-sm mb-8" style={{ color: "#6b7785" }}>最終更新: 2026年5月21日</p>

      <section>
        <p className="text-base leading-relaxed mb-6" style={{ color: "#1e2a38" }}>
          宅食びより編集部は、宅配弁当・冷凍弁当・栄養食業界の専門知識を持つ複数の編集者・リサーチャーで構成されています。
          各メンバーの経歴・専門領域は以下のとおりです。
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
                <p className="text-xs font-bold mb-2" style={{ color: "#6b7785" }}>実績・専門領域</p>
                <ul className="list-disc pl-5 space-y-1 text-sm" style={{ color: "#1e2a38" }}>
                  {author.credentials.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold mt-10 mb-4" style={{ color: "#1e2a38" }}>編集部としての姿勢</h2>
        <p className="leading-relaxed mb-8" style={{ color: "#1e2a38" }}>
          宅食びより編集部は、個人名ではなく <strong>編集部全体の合議制</strong> で記事を作成・公開しています。
          業界の最新情報は変動が激しく、個人の判断より複数視点での相互レビューが重要だと考えるためです。
          記事内の数値情報・市場分析・業者評価は、リサーチ担当→編集長監修→ファクトチェック責任者の3段階チェックを経て公開されます。
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
