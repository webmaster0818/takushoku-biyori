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
    href: "/articles/diet-osusume/",
  },
  {
    title: "栄養食",
    description: "糖質制限・塩分制限・たんぱく質調整の専門食",
    image: "/images/category-nutrition.png",
    href: "/articles/toushitsu-seigen-osusume/",
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
          注目の記事
        </h2>
        <div className="space-y-5">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link
              href="/articles/nosh-reviews/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  nosh(ナッシュ)の口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  良い口コミ・悪い口コミの両方を紹介。実際に注文してわかったメリット5つ・デメリット3つ、料金・送料・nosh
                  club割引まで徹底解説。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["nosh", "口コミ", "評判", "料金"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/hitorigurashi-osusume/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  一人暮らしにおすすめの宅食・宅配弁当TOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  一人暮らし向けの宅食を総合ランキング。女性向け・男性向け・シニア向けの目的別おすすめや月額コストシミュレーションも。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["一人暮らし", "ランキング", "コスパ", "宅食"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/mitsuboshi-farm-reviews/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  三ツ星ファームの口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  一流シェフ監修の冷凍弁当の実力は？まずいは本当？料金プラン・送料・メニューの特徴を実食レビューで解説。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["三ツ星ファーム", "口コミ", "評判", "実食"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/wellness-dining-reviews/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ウェルネスダイニングの口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  制限食の専門サービスの実力とは？管理栄養士への無料相談、全6コースの料金・送料を徹底解説。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ウェルネスダイニング", "口コミ", "制限食", "料金"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/magokoro-care-reviews/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  まごころケア食の口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  1食390円台のコスパ最強サービスの実力は？初回90円のお試しや冷凍庫レンタルなど特徴を解説。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["まごころケア食", "口コミ", "コスパ", "安い"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/shokutakubin-reviews/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  食宅便の口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  日清医療食品が手がける宅配弁当の実力とは？管理栄養士1万人のノウハウが詰まった全コースを解説。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["食宅便", "口コミ", "日清医療食品", "品数"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          {/* Phase 4B: 目的特化記事 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/diet-osusume/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ダイエット向け宅配弁当おすすめランキングTOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  低糖質・低カロリーの宅配弁当を徹底比較。置き換えダイエットの成功のコツも解説。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ダイエット", "低糖質", "カロリー制限", "ランキング"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/koureisha-osusume/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  高齢者向け宅配弁当おすすめランキングTOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  やわらか食・制限食も徹底比較。離れて暮らすご家族からの注文方法も解説。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["高齢者", "シニア", "やわらか食", "制限食"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/sango-osusume/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  産後におすすめの宅配弁当ランキングTOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  産褥期の栄養管理と時短を両立。授乳中の栄養補給や出産前ストックも解説。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["産後", "授乳中", "産褥期", "ママ向け"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/toushitsu-seigen-osusume/"
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  糖質制限におすすめの宅配弁当ランキングTOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  低糖質・糖質オフの宅食を徹底比較。ロカボからケトジェニックまで対応。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["糖質制限", "低糖質", "ケトジェニック", "ロカボ"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
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

      {/* 目的別で探す */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
          目的別で探す
        </h2>
        <p className="text-warm-gray text-sm text-center mb-8">
          あなたの目的に合った宅食サービスがすぐに見つかります
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {[
            {
              title: "ダイエット目的",
              desc: "全メニュー糖質30g以下。noshの低糖質メニューで無理なく続けるダイエット。",
              image: "/images/icon-diet.png",
              color: "bg-green-50 border-green-200",
              href: "/articles/diet-osusume/",
            },
            {
              title: "一人暮らし向け",
              desc: "1食499円〜のコスパとアプリで完結する手軽さ。一人暮らしの強い味方。",
              image: "/images/icon-single.png",
              color: "bg-amber-50 border-amber-200",
              href: "/articles/hitorigurashi-osusume/",
            },
            {
              title: "高齢者向け",
              desc: "やわらか食・塩分制限・たんぱく質調整。ウェルネスダイニングの専門コース。",
              image: "/images/icon-elderly.png",
              color: "bg-blue-50 border-blue-200",
              href: "/articles/koureisha-osusume/",
            },
            {
              title: "産後・授乳中",
              desc: "栄養バランスと手軽さを両立。添加物の少ない安心メニューで産後ケア。",
              image: "/images/icon-postpartum.png",
              color: "bg-pink-50 border-pink-200",
              href: "/articles/sango-osusume/",
            },
            {
              title: "糖質制限",
              desc: "糖質10g〜30g以下の専門コース。ロカボからケトジェニックまで対応。",
              image: "/images/icon-muscle.png",
              color: "bg-purple-50 border-purple-200",
              href: "/articles/toushitsu-seigen-osusume/",
            },
            {
              title: "グルメ・味重視",
              desc: "プロの料理人監修のレストラン品質。三ツ星ファームで自宅がレストランに。",
              image: "/images/icon-gourmet.png",
              color: "bg-orange-50 border-orange-200",
              href: "/articles/nosh-vs-mitsuboshi-vs-wellness/#purpose",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`${item.color} border rounded-xl p-5 hover:shadow-md transition-all group block`}
            >
              <div className="w-16 h-16 mb-3 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-sm mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-warm-gray text-xs leading-relaxed">
                {item.desc}
              </p>
            </Link>
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
