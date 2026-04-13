import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "宅食比較",
    description: "人気サービスを価格・味・栄養で徹底比較",
    image: "/images/category-compare.png",
    href: "/articles/nosh-vs-mitsuboshi-vs-wellness/",
  },
  {
    title: "目的別ガイド",
    description: "ダイエット・高齢者・産後など目的に合った選び方",
    image: "/images/category-guide.png",
    href: "/articles/nosh-vs-mitsuboshi-vs-wellness/",
  },
  {
    title: "栄養食",
    description: "糖質制限・塩分制限・たんぱく質調整の専門食",
    image: "/images/category-nutrition.png",
    href: "/articles/nosh-vs-mitsuboshi-vs-wellness/",
  },
  {
    title: "口コミ・評判",
    description: "実際のユーザーのリアルな声を集約",
    image: "/images/category-review.png",
    href: "/articles/nosh-vs-mitsuboshi-vs-wellness/",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-background to-background">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-accent font-medium text-sm mb-3 tracking-wider">
                宅配弁当・栄養食の比較ガイド
              </p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
                毎日の食卓を、
                <br />
                もっと豊かに。
              </h1>
              <p className="text-warm-gray text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                管理栄養士監修のもと、nosh・三ツ星ファーム・ウェルネスダイニングなど
                人気の宅食サービスを本音で比較。
                忙しいあなたにぴったりの一食が見つかります。
              </p>
              <Link
                href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
                className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full hover:bg-accent-dark transition-colors shadow-md hover:shadow-lg"
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
            {/* Hero Image */}
            <div className="flex-1 max-w-md md:max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero.png"
                  alt="管理栄養士が笑顔で宅配弁当を紹介するイラスト"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Decorative watercolor blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-light/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      </section>

      {/* Trust Badges */}
      <section className="border-y border-warm-border bg-white">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm text-warm-gray">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              管理栄養士監修
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              全サービス実食レビュー
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              2026年最新情報
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              利用者の声300件以上
            </span>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-8 text-center">
          注目の比較記事
        </h2>
        <Link
          href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
          className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <Image
                src="/images/article-thumb.png"
                alt="nosh・三ツ星ファーム・ウェルネスダイニング 3社比較"
                width={500}
                height={500}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
              <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                比較記事
              </span>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                【3社徹底比較】nosh・三ツ星ファーム・ウェルネスダイニング
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">
                価格・味・メニュー数・栄養・目的別コース・キャンペーン・継続しやすさの7項目で徹底比較。
                あなたに最適な宅配弁当が見つかります。
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
          </div>
        </Link>
      </section>

      {/* Categories */}
      <section className="bg-cream py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
            カテゴリから探す
          </h2>
          <p className="text-warm-gray text-sm text-center mb-8">
            あなたの目的に合わせて、最適な宅食情報をお届けします
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-white rounded-xl overflow-hidden border border-warm-border hover:border-accent/30 hover:shadow-md transition-all group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-sm mb-1 group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-warm-gray text-xs leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
          宅食びよりの使い方
        </h2>
        <p className="text-warm-gray text-sm text-center mb-10">
          3ステップであなたにぴったりの宅食が見つかります
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "比較記事を読む", desc: "プロが厳選した人気サービスを料金・味・栄養で比較。違いがひと目でわかります。" },
            { step: "02", title: "目的で絞り込む", desc: "ダイエット・一人暮らし・高齢者向けなど、あなたの目的に合ったサービスが見つかります。" },
            { step: "03", title: "体験を申し込む", desc: "気になるサービスの初回お試しセットで、味と量を実際に確認。納得してから本契約。" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent font-display font-bold text-lg mb-4">
                {item.step}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-cream to-background py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
            まずは人気3社の比較から
          </h2>
          <p className="text-warm-gray mb-8 text-sm md:text-base leading-relaxed">
            nosh・三ツ星ファーム・ウェルネスダイニングの違いを
            <br className="md:hidden" />
            7項目で徹底解説。読めば自分に合う宅食がわかります。
          </p>
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full hover:bg-accent-dark transition-colors shadow-md hover:shadow-lg"
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
        </div>
      </section>
    </>
  );
}
