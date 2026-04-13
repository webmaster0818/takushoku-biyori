import Link from "next/link";

const categories = [
  {
    title: "宅食比較",
    description: "人気サービスを価格・味・栄養で徹底比較",
    icon: "📊",
  },
  {
    title: "目的別ガイド",
    description: "ダイエット・高齢者・産後など目的に合った選び方",
    icon: "🎯",
  },
  {
    title: "栄養食",
    description: "糖質制限・塩分制限・たんぱく質調整の専門食",
    icon: "🥗",
  },
  {
    title: "口コミ・評判",
    description: "実際のユーザーのリアルな声を集約",
    icon: "💬",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-background">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <p className="text-accent font-medium text-sm mb-4 tracking-wider">
            宅配弁当・栄養食の比較ガイド
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            あなたに最適な
            <br className="md:hidden" />
            宅配弁当が見つかる
          </h1>
          <p className="text-warm-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            nosh・三ツ星ファーム・ウェルネスダイニングなど
            <br className="hidden md:block" />
            人気の宅食サービスを価格・味・栄養で徹底比較。
            <br className="hidden md:block" />
            忙しい毎日でも、健康でおいしい食事を。
          </p>
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors shadow-md"
          >
            人気3社の比較を見る
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-6 text-center">
          注目の比較記事
        </h2>
        <Link
          href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
          className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="bg-gradient-to-r from-accent/10 to-accent-light/10 p-6 md:p-10">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              比較記事
            </span>
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
              【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
            </h3>
            <p className="text-warm-gray text-sm md:text-base leading-relaxed mb-4">
              価格・味・メニュー数・栄養・目的別コース・キャンペーン・継続しやすさの7項目で徹底比較。
              あなたに最適な宅配弁当はどれ？
            </p>
            <div className="flex flex-wrap gap-2">
              {["nosh", "三ツ星ファーム", "ウェルネスダイニング", "価格比較"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </Link>
      </section>

      {/* Categories */}
      <section className="bg-cream py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-8 text-center">
            カテゴリから探す
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl p-5 text-center border border-warm-border hover:border-accent/30 transition-colors"
              >
                <span className="text-3xl block mb-3" role="img">
                  {cat.icon}
                </span>
                <h3 className="font-bold text-sm mb-1">{cat.title}</h3>
                <p className="text-warm-gray text-xs leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
          まずは人気3社の比較から
        </h2>
        <p className="text-warm-gray mb-6 text-sm md:text-base">
          nosh・三ツ星ファーム・ウェルネスダイニングの違いを
          <br className="md:hidden" />
          7項目で徹底解説しています。
        </p>
        <Link
          href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
          className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark transition-colors shadow-md"
        >
          比較記事を読む
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </section>
    </>
  );
}
