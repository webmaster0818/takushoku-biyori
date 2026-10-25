import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "https://takushoku-biyori.com/" },
};

const categories = [
  {
    title: "宅食比較",
    description: "主要サービスを価格・味・栄養で比較",
    image: "/images/subhero/topic-compare-m.webp",
    href: "/articles/#hikaku",
  },
  {
    title: "目的別ガイド",
    description: "ダイエット・高齢者・産後など目的別の選び方",
    image: "/images/subhero/topic-diet-m.webp",
    href: "/articles/#mokuteki",
  },
  {
    title: "栄養食",
    description: "糖質制限・塩分制限・たんぱく質調整の専門食",
    image: "/images/subhero/topic-seigen-m.webp",
    href: "/articles/toushitsu-seigen-osusume/",
  },
  {
    title: "口コミ・評判",
    description: "出典付きの利用者の口コミを掲載",
    image: "/images/subhero/topic-reitou-b-m.webp",
    href: "/articles/#kuchikomi",
  },
];

export default function Home() {
  return (
    <>
      <div className="border-b border-rule">
        <p className="max-w-5xl mx-auto px-4 py-1 text-[10px] text-warm-gray">PR掲載も含みます</p>
      </div>
      {/* Hero（2026-10-21 デザイン「食卓」: 左に文字・右に額装の写真。写真は家庭の食卓の情景＝特定サービスの商品ではない） */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="grid md:grid-cols-[1fr_1.08fr] items-center gap-10 md:gap-14">
            <div>
              <p className="text-persimmon-dark text-[13px] font-bold tracking-[0.16em] mb-5 flex items-center gap-3">
                <span aria-hidden="true" className="inline-block w-7 h-[2px] bg-persimmon" />
                宅配弁当・栄養食の比較ガイド
              </p>
              <h1 className="font-display text-[1.95rem] sm:text-[2.3rem] md:text-[2.35rem] lg:text-[2.85rem] leading-[1.42] tracking-[0.04em] md:whitespace-nowrap text-foreground mb-6">
                公式情報にもとづく
                <br />
                宅配弁当の比較
              </h1>
              <p className="text-warm-gray text-[15px] md:text-base leading-[1.95] mb-9 max-w-lg">
                当サイトでは、各社の公式サイトで料金・送料を確認し、出典付きの口コミとあわせて
                nosh・三ツ星ファーム・ウェルネスダイニングなどの宅配弁当を比較しています。
                目的や予算に沿ったサービス選びにご活用ください。
              </p>
              <Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="btn-line btn-line--solid">
                主要3社の比較を見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            {/* Hero Image */}
            <figure className="border border-rule bg-card p-2 md:p-3">
              <picture>
                <source media="(max-width: 767px)" srcSet="/images/hero-shokutaku-m.webp" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-shokutaku.webp"
                  alt="家庭の食卓のイメージ写真"
                  width={1600}
                  height={1200}
                  fetchPriority="high"
                  className="block w-full h-auto"
                />
              </picture>
            </figure>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-rule bg-card">
        <ul className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 text-[12.5px] md:text-[13.5px] tracking-[0.05em] text-foreground/85">
          <li className="py-4 text-center md:border-l border-rule first:md:border-l-0 flex items-center justify-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 bg-persimmon" />
            <span>公式サイトで一次確認</span>
          </li>
          <li className="py-4 text-center md:border-l border-rule first:md:border-l-0 flex items-center justify-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 bg-persimmon" />
            <span>出典付きの口コミのみ</span>
          </li>
          <li className="py-4 text-center md:border-l border-rule first:md:border-l-0 flex items-center justify-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 bg-persimmon" />
            <span>確認日を明記</span>
          </li>
          <li className="py-4 text-center md:border-l border-rule first:md:border-l-0 flex items-center justify-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 bg-persimmon" />
            <span>利用者の声を多数掲載</span>
          </li>
        </ul>
      </section>

      {/* Featured Article */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="rule-mark font-display text-xl md:text-[1.65rem] font-bold tracking-[0.06em] mb-8 text-center">
          注目の記事
        </h2>
        <div className="space-y-5">
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <Image
                  src="/images/subhero/topic-compare-m.webp"
                  alt="nosh・三ツ星ファーム・ウェルネスダイニング 3社比較"
                  width={500}
                  height={500}
                  className="w-full h-48 md:h-full object-cover object-right"
                />
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-4 w-fit">
                  比較記事
                </span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                  【3社比較】nosh・三ツ星ファーム・ウェルネスダイニング
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-4">
                  価格・味・メニュー数・栄養・目的別コース・キャンペーン・継続しやすさの7項目で比較しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["nosh", "三ツ星ファーム", "ウェルネスダイニング", "価格比較"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
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
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  nosh(ナッシュ)の口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  「まずい」という評判は本当か、良い口コミ・悪い口コミを出典付きで検証しています。料金・送料・nosh
                  club割引についても解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["nosh", "口コミ", "評判", "料金"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/hitorigurashi-osusume/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  一人暮らしにおすすめの宅食・宅配弁当TOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  一人暮らし向けの宅食を総合ランキングで紹介しています。女性向け・男性向け・シニア向けの目的別のおすすめや、月額費用の試算も掲載しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["一人暮らし", "ランキング", "コスパ", "宅食"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
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
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  三ツ星ファームの口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  料理人監修の冷凍弁当の特徴と「まずい」という評判について、料金プラン・送料・メニューとあわせて公式情報と出典付きの口コミで解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["三ツ星ファーム", "口コミ", "評判", "料金"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/wellness-dining-reviews/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ウェルネスダイニングの口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  制限食を専門とするサービスの特徴、管理栄養士への無料相談、全6コースの料金・送料を解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ウェルネスダイニング", "口コミ", "制限食", "料金"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
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
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  まごころケア食の口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  1食390円台からの低価格帯のサービスです。初回限定セット（1食190円）や冷凍庫レンタルなどの特徴を解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["まごころケア食", "口コミ", "コスパ", "安い"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/shokutakubin-reviews/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  食宅便の口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  日清医療食品が手がける宅配弁当です。管理栄養士1万人のノウハウを活かした全コースを解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["食宅便", "口コミ", "日清医療食品", "品数"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
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
              href="/articles/tsukurioki-jp-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  つくりおき.jp(ツクリオ)の口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  冷蔵の手作りおかず宅配が「まずい」という評判を、出典付きの口コミで検証しています。料金・対応エリア・LINE注文の仕組みも解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["つくりおき.jp", "口コミ", "冷蔵おかず", "共働き"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/green-spoon-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  GREEN SPOONの口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  具材の大きい野菜が特徴の冷凍宅配食が「まずい」という評判を、出典付きの口コミで検証しています。料金・送料・無添加方針も解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["GREEN SPOON", "口コミ", "野菜", "スープ"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
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
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ダイエット向け宅配弁当おすすめランキングTOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  低糖質・低カロリーの宅配弁当を比較しています。置き換えダイエットを続けるためのポイントも解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ダイエット", "低糖質", "カロリー制限", "ランキング"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/koureisha-osusume/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  高齢者向け宅配弁当おすすめランキングTOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  やわらか食・制限食を比較しています。離れて暮らすご家族からの注文方法も解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["高齢者", "シニア", "やわらか食", "制限食"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
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
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  産後におすすめの宅配弁当ランキングTOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  産褥期の栄養管理と家事負担の軽減に役立つサービスを紹介しています。授乳中の栄養補給や出産前の備え方も解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["産後", "授乳中", "産褥期", "ママ向け"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/toushitsu-seigen-osusume/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  目的別ガイド
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  糖質制限におすすめの宅配弁当ランキングTOP5
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  低糖質・糖質オフの宅食を比較しています。ロカボからケトジェニックまでの目的別に紹介します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["糖質制限", "低糖質", "ケトジェニック", "ロカボ"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-[11px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          {/* Phase 4C: 比較・ハウツー記事 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/coopdeli-vs-palsystem/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  比較記事
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  コープデリ vs パルシステム 比較
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  料金・配送エリア・安全基準・品揃え・離乳食など7項目で比較しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["コープデリ", "パルシステム", "比較", "生協"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/takuhai-vs-conveni/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  比較記事
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  宅配弁当 vs コンビニ弁当 どっちがお得？
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  栄養・価格・手軽さ・添加物の4項目で比較しています。nosh・三ツ星ファームとコンビニ3社を具体的なデータで解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["宅配弁当", "コンビニ", "比較", "栄養"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/reitou-bento-mazui/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  ハウツー
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  冷凍弁当がまずい？美味しく食べる7つのコツ
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  まずいと感じる原因と対策、解凍方法、味の評価が高いサービスのランキングTOP5を紹介しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["冷凍弁当", "解凍方法", "美味しく", "コツ"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/souryou-yasui-ranking/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  ランキング
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  送料が安い宅配弁当ランキングTOP10
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  送料込みの総額で比較しています。送料無料のサービス一覧、地域別の送料比較、送料を抑える方法も解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["送料無料", "ランキング", "コスパ", "比較"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          {/* 宅食料金白書2026 */}
          <div className="grid grid-cols-1 gap-5 mt-5">
            <Link
              href="/articles/takushoku-ryokin-hakusho/"
              className="block bg-card border border-accent overflow-hidden transition-colors hover:border-accent-dark group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  比較・料金データ
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  宅食料金白書2026｜18社の料金・送料・1食実質単価を正規化比較
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  18社の料金・送料・初回割引・解約条件を各社の公式サイトで確認し、送料込みの1食実質単価に換算して比較しています（2026年10月再調査）。送料の地域差や定期購入の継続条件も一覧で掲載しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["料金比較", "送料込み", "実質単価", "18社", "一次データ"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          {/* Phase 5: 新規サービス口コミ記事 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/watami-reviews/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ワタミの宅食の口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  冷蔵（まごころ弁当）と冷凍（ダイレクト）の違い、送料無料の冷蔵タイプの特徴を解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ワタミの宅食", "口コミ", "送料無料", "安否確認"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/yoshikei-reviews/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ヨシケイの口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  ミールキットと冷凍弁当の違い、配達料無料・初回半額などの料金条件を解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ヨシケイ", "口コミ", "ミールキット", "送料無料"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/wanmairu-reviews/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  わんまいるの口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  国産食材100%・手作りの宅配おかずです。湯煎解凍の手間と味の評価を解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["わんまいる", "口コミ", "国産食材", "湯煎"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/tsurukame-reviews/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  Dr.つるかめキッチンの口コミ・評判を徹底調査
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  専門医と管理栄養士がダブル監修する制限食5コースです。定期購入の割引と送料無料の条件を解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["つるかめキッチン", "口コミ", "制限食", "送料無料"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/chef-mutenka-tsukurioki-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  シェフの無添つくりおきの口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  無添加調理の冷蔵手作りおかずです。第三者メディアの実食レビューを出典付きで検証し、料金と注意点を整理しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["シェフの無添つくりおき", "口コミ", "無添加", "つくりおき"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/lifemeal-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ライフミールの口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  1食490円台からの低価格帯の冷凍弁当です。第三者メディアの実食レビューを出典付きで検証し、冷凍庫無料レンタルの条件も解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ライフミール", "口コミ", "コスパ", "冷凍弁当"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/watami-direct-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ワタミの宅食ダイレクトの口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  出典付きの口コミと料金・注意点を中立的な立場で検証しています。
                </p>
              </div>
            </Link>
            <Link
              href="/articles/coopdeli-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  コープデリの宅配弁当の口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  出典付きの口コミと料金・注意点を中立的な立場で検証しています。
                </p>
              </div>
            </Link>
            <Link
              href="/articles/ouchi-coop-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  おうちコープの宅配弁当の口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  出典付きの口コミと料金・注意点を中立的な立場で検証しています。
                </p>
              </div>
            </Link>
            <Link
              href="/articles/yushoku-net-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  夕食ネットの口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  出典付きの口コミと料金・注意点を中立的な立場で検証しています。
                </p>
              </div>
            </Link>
            <Link
              href="/articles/medimeal-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  メディミールの口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  出典付きの口コミと料金・注意点を中立的な立場で検証しています。
                </p>
              </div>
            </Link>
            <Link
              href="/articles/kinnikushokudo-deli-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  筋肉食堂DELIの口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  出典付きの口コミと料金・注意点を中立的な立場で検証しています。
                </p>
              </div>
            </Link>
            <Link
              href="/articles/fitfoodhome-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  FIT FOOD HOMEの口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  出典付きの口コミと料金・注意点を中立的な立場で検証しています。
                </p>
              </div>
            </Link>
            <Link
              href="/articles/nichirei-foods-direct-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ニチレイフーズダイレクトの口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  冷凍食品大手の宅配食「きくばりごぜん」について、第三者メディアの実食レビューを出典付きで検証し、料金と送料無料の条件を整理しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ニチレイ", "口コミ", "きくばりごぜん", "健康設計"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/gofood-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  GOFOOD(ゴーフード)の口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  2025年6月30日にサービスを終了した低糖質弁当です。当時の第三者メディアの実食レビューを出典付きで振り返ります。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["GOFOOD", "口コミ", "低糖質", "高タンパク"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Link
              href="/articles/dietician-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  ダイエティシャンの口コミ・評判は？販売終了の真相も解説
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  2025年11月に販売を終了した高たんぱく宅配食です。当時の口コミを出典付きで振り返り、代替サービスも紹介します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ダイエティシャン", "口コミ", "販売終了", "代替サービス"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            <Link
              href="/articles/taihei-family-set-kuchikomi/"
              className="block bg-card border border-rule overflow-hidden transition-colors hover:border-accent-light group"
            >
              <div className="p-6 flex flex-col justify-center">
                <span className="inline-block border border-accent/40 text-accent text-[11px] font-bold tracking-[0.08em] px-2.5 py-0.5 mb-3 w-fit">
                  口コミ・評判
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  タイヘイファミリーセットの口コミ・評判は？まずいって本当？
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  1880年創業の老舗による宅配健康食です。医師監修の制限食と定期購入の送料無料の条件を、口コミとあわせて解説します。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["タイヘイ", "口コミ", "制限食", "送料無料"].map((tag) => (
                    <span key={tag} className="bg-cream text-warm-gray text-[11px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-band border-y border-rule py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="rule-mark font-display text-xl md:text-[1.65rem] font-bold tracking-[0.06em] mb-3 text-center">
            カテゴリから探す
          </h2>
          <p className="text-warm-gray text-sm text-center mb-8">
            目的に応じて記事をお選びいただけます
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-card overflow-hidden border border-rule hover:border-accent-light transition-colors group"
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
        <h2 className="rule-mark font-display text-xl md:text-[1.65rem] font-bold tracking-[0.06em] mb-3 text-center">
          宅食びよりの使い方
        </h2>
        <p className="text-warm-gray text-sm text-center mb-10">
          3つのステップで宅食サービスを比較・検討いただけます
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "比較記事を読む", desc: "主要サービスを料金・味・栄養で比較し、各社の違いを一覧で掲載しています。" },
            { step: "02", title: "目的で絞り込む", desc: "ダイエット・一人暮らし・高齢者向けなど、目的別に適したサービスを紹介しています。" },
            { step: "03", title: "お試しで確認する", desc: "初回お試しセットのあるサービスでは、味と量をご確認のうえで定期購入をご検討いただけます。" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="font-display text-[2rem] leading-none text-accent mb-3 tracking-[0.08em] after:block after:w-6 after:h-[2px] after:bg-persimmon after:mx-auto after:mt-3">
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
        <h2 className="rule-mark font-display text-xl md:text-[1.65rem] font-bold tracking-[0.06em] mb-3 text-center">
          目的別で探す
        </h2>
        <p className="text-warm-gray text-sm text-center mb-8">
          目的に応じた宅食サービスの選び方を紹介しています
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {[
            {
              title: "ダイエット目的",
              desc: "全メニュー糖質30g以下のnoshなど、低糖質メニューを継続しやすいサービスを紹介しています。",
              image: "/images/subhero/topic-diet-m.webp",
                            href: "/articles/diet-osusume/",
            },
            {
              title: "一人暮らし向け",
              desc: "1食あたりの価格とアプリで完結する注文のしやすさを中心に、一人暮らし向けのサービスを紹介しています。",
              image: "/images/subhero/topic-hitorigurashi-m.webp",
                            href: "/articles/hitorigurashi-osusume/",
            },
            {
              title: "高齢者向け",
              desc: "やわらか食・塩分制限・たんぱく質調整など、ウェルネスダイニングなどの専門コースを紹介しています。",
              image: "/images/subhero/topic-koureisha-a-m.webp",
                            href: "/articles/koureisha-osusume/",
            },
            {
              title: "産後・授乳中",
              desc: "栄養バランスと手軽さを重視した、産後・授乳中の食事に役立つサービスを紹介しています。",
              image: "/images/subhero/topic-sango-m.webp",
                            href: "/articles/sango-osusume/",
            },
            {
              title: "糖質制限",
              desc: "糖質10g〜30g以下の専門コースを、ロカボからケトジェニックまでの目的別に紹介しています。",
              image: "/images/subhero/topic-toushitsu-m.webp",
                            href: "/articles/toushitsu-seigen-osusume/",
            },
            {
              title: "グルメ・味重視",
              desc: "料理人監修のメニューを提供する三ツ星ファームなど、味を重視する方向けのサービスを紹介しています。",
              image: "/images/subhero/topic-articles-m.webp",
                            href: "/articles/nosh-vs-mitsuboshi-vs-wellness/#purpose",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-card border border-rule hover:border-accent-light transition-colors group block"
            >
              <div className="aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover object-right" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-warm-gray text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-band border-t border-rule py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="rule-mark font-display text-xl md:text-[1.65rem] font-bold tracking-[0.06em] mb-4">
            主要3社の比較
          </h2>
          <p className="text-warm-gray mb-8 text-sm md:text-base leading-relaxed">
            nosh・三ツ星ファーム・ウェルネスダイニングの違いを
            <br className="md:hidden" />
            7項目で比較しています。
          </p>
          <Link
            href="/articles/nosh-vs-mitsuboshi-vs-wellness/"
            className="btn-line btn-line--solid"
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
