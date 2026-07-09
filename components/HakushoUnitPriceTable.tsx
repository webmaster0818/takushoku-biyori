import Link from "next/link";
import hakusho from "@/data/ryokin-hakusho-2026-07.json";

/**
 * 宅食料金白書（data/ryokin-hakusho-2026-07.json）から「送料込みの実質単価」を
 * 機械計算して表示する共通テーブル。目的別おすすめ記事に注入して一次データで差別化する。
 * 実質単価 = min（(プラン料金 + 代表送料) ÷ 食数)。データ欠損ブランドは表示しない（推測しない）。
 */

type Plan = { plan_name?: string; meals?: number | null; price_jpy?: number | null; note?: string };
type Brand = {
  slug: string;
  name: string;
  plans?: Plan[];
  shipping?: { representative_jpy?: number | null; note?: string } | null;
  first_discount?: string | null;
};

// ブランドslug → サイト内の口コミ・評判記事（内部導線。存在するもののみ）
const ARTICLE_MAP: Record<string, string> = {
  nosh: "/articles/nosh-reviews/",
  "mitsuboshi-farm": "/articles/mitsuboshi-farm-reviews/",
  "wellness-dining": "/articles/wellness-dining-reviews/",
  shokutakubin: "/articles/shokutakubin-reviews/",
  "magokoro-care-shoku": "/articles/magokoro-care-reviews/",
  "kinnikushokudo-deli": "/articles/kinnikushokudo-deli-kuchikomi/",
  "tsurukame-kitchen": "/articles/tsurukame-reviews/",
  yoshikei: "/articles/yoshikei-reviews/",
  "watami-takushoku": "/articles/watami-reviews/",
  "watami-direct": "/articles/watami-direct-kuchikomi/",
  coopdeli: "/articles/coopdeli-kuchikomi/",
  "ouchi-coop": "/articles/ouchi-coop-kuchikomi/",
  medimeal: "/articles/medimeal-kuchikomi/",
  "fit-food-home": "/articles/fitfoodhome-kuchikomi/",
  lifemeal: "/articles/lifemeal-kuchikomi/",
  "tsukurioki-jp": "/articles/tsukurioki-jp-kuchikomi/",
  "green-spoon": "/articles/green-spoon-kuchikomi/",
};

function bestUnitPrice(b: Brand): { unit: number; planName: string } | null {
  const ship = b.shipping?.representative_jpy ?? null;
  let best: { unit: number; planName: string } | null = null;
  for (const p of b.plans ?? []) {
    if (!p.meals || p.price_jpy == null) continue;
    const unit = (p.price_jpy + (ship ?? 0)) / p.meals;
    if (!best || unit < best.unit) best = { unit, planName: p.plan_name ?? "" };
  }
  return best;
}

export function HakushoUnitPriceTable({ slugs, headingId }: { slugs: string[]; headingId?: string }) {
  const brands = (hakusho as { brands: Brand[] }).brands;
  const collectedAt = (hakusho as { collected_at?: string }).collected_at ?? "2026-07-04";

  const rows = slugs
    .map((slug) => {
      const b = brands.find((x) => x.slug === slug);
      if (!b) return null;
      const best = bestUnitPrice(b);
      if (!best) return null; // 単価が機械計算できないブランドは載せない（推測禁止）
      return { b, best };
    })
    .filter((x): x is { b: Brand; best: { unit: number; planName: string } } => x !== null)
    .sort((a, z) => a.best.unit - z.best.unit);

  if (rows.length === 0) return null;

  return (
    <section className="my-12">
      <h2 id={headingId ?? "jisshitsu-tanka"} className="font-display text-2xl font-bold mb-3 text-foreground scroll-mt-20">
        送料込みの「実質単価」で比べる（当サイト白書データ）
      </h2>
      <p className="text-warm-gray text-sm mb-4">
        表示価格が安く見えても、送料を足すと逆転することがあります。下表は当サイトの
        <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:underline">宅食料金白書</Link>
        （{collectedAt}に各社公式サイトから直接確認）をもとに、<strong>実質単価＝（プラン料金＋代表送料）÷食数</strong>
        を機械計算した最安値です。安い順＝おすすめ順ではありません。
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-warm-border bg-white rounded-lg overflow-hidden">
          <thead className="bg-cream">
            <tr>
              <th className="border-b border-warm-border px-3 py-2 text-left text-xs font-bold text-foreground">サービス</th>
              <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">実質単価（送料込・最安）</th>
              <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">代表送料</th>
              <th className="border-b border-warm-border px-3 py-2 text-left text-xs font-bold text-foreground">初回割引</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ b, best }) => {
              const article = ARTICLE_MAP[b.slug];
              const ship = b.shipping?.representative_jpy;
              return (
                <tr key={b.slug}>
                  <td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap">
                    {article ? (
                      <Link href={article} className="text-accent hover:underline">{b.name}</Link>
                    ) : (
                      b.name
                    )}
                  </td>
                  <td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">
                    約{Math.round(best.unit).toLocaleString()}円<span className="text-xs text-warm-gray font-normal">／食（{best.planName}）</span>
                  </td>
                  <td className="border-b border-warm-border px-3 py-2 text-sm text-center">
                    {ship == null ? "−" : ship === 0 ? "無料" : `${ship.toLocaleString()}円`}
                  </td>
                  <td className="border-b border-warm-border px-3 py-2 text-xs text-warm-gray">{b.first_discount ?? "−"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-warm-gray mt-2">
        ※{collectedAt}時点・税込。送料は地域・プランで変動するため代表値で計算しています。価格改定があるため、最新は各公式サイトでご確認ください。全{" "}
        {(hakusho as { brands: Brand[] }).brands.length}社の詳細は
        <Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:underline">宅食料金白書</Link>
        へ。サービス名のリンクは当サイトの口コミ検証記事です。
      </p>
    </section>
  );
}
