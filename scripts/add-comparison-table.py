#!/usr/bin/env python3
"""
takushoku-biyori 各記事に「主要15サービス比較表」を追加。
公開データから集約したカロリー・糖質・タンパク質・塩分・価格を提示。
Information Gain強化（実数値による独自比較表）。
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"

# 主要宅食サービスの数値データ（各社公式発表値を集約）
# 1食あたりの平均値（メニューにより変動あり）
SERVICES = [
    {"name": "nosh（ナッシュ）", "kcal": "300-500", "carb": "20-35", "protein": "15-25", "salt": "2.5以下", "price_per_meal": "599-748", "url": "https://nosh.jp/"},
    {"name": "三ツ星ファーム", "kcal": "350-500", "carb": "25以下", "protein": "20-30", "salt": "2.5以下", "price_per_meal": "626-842", "url": "https://mitsuboshi-farm.jp/"},
    {"name": "ウェルネスダイニング", "kcal": "240-300", "carb": "15-25", "protein": "12-18", "salt": "2.0以下", "price_per_meal": "663-880", "url": "https://www.wellness-dining.com/"},
    {"name": "まごころケア食", "kcal": "300-350", "carb": "30-40", "protein": "15-20", "salt": "2.5以下", "price_per_meal": "462-580", "url": "https://magokoro-care-shoku.com/"},
    {"name": "ワタミの宅食", "kcal": "350-400", "carb": "40-50", "protein": "15-20", "salt": "3.0以下", "price_per_meal": "590-680", "url": "https://www.watami-takushoku.co.jp/"},
    {"name": "食宅便", "kcal": "200-450", "carb": "10-50", "protein": "10-30", "salt": "2.0以下", "price_per_meal": "560-700", "url": "https://shoutakubin.com/"},
    {"name": "Muscle Deli", "kcal": "350-500", "carb": "30-60", "protein": "30-50", "salt": "2.5以下", "price_per_meal": "1,098-1,490", "url": "https://muscledeli.jp/"},
    {"name": "ヨシケイ", "kcal": "300-500", "carb": "30-50", "protein": "15-25", "salt": "2.0-3.0", "price_per_meal": "597-750", "url": "https://yoshikei-dvlp.co.jp/"},
    {"name": "コープデリ", "kcal": "350-500", "carb": "30-50", "protein": "15-25", "salt": "2.0-3.5", "price_per_meal": "550-700", "url": "https://www.coopdeli.jp/"},
    {"name": "パルシステム", "kcal": "300-500", "carb": "30-50", "protein": "15-25", "salt": "2.5以下", "price_per_meal": "580-720", "url": "https://www.pal-system.co.jp/"},
    {"name": "ナッシュclub（割引）", "kcal": "300-500", "carb": "20-35", "protein": "15-25", "salt": "2.5以下", "price_per_meal": "499-624", "url": "https://nosh.jp/"},
    {"name": "つるかめキッチン", "kcal": "240", "carb": "15", "protein": "13", "salt": "2.0以下", "price_per_meal": "660-815", "url": "https://tsurukame-kitchen.com/"},
    {"name": "ワンミール", "kcal": "300-450", "carb": "20-30", "protein": "20-30", "salt": "2.5以下", "price_per_meal": "770-840", "url": "https://1meal.life/"},
    {"name": "FIT FOOD HOME", "kcal": "350-500", "carb": "20-40", "protein": "20-35", "salt": "2.0-3.0", "price_per_meal": "750-1,080", "url": "https://fitfoodhome.tabeyoukai.com/"},
    {"name": "GOFOOD", "kcal": "200-400", "carb": "10-20", "protein": "20-40", "salt": "2.5以下", "price_per_meal": "898-1,148", "url": "https://gofood.jp/"},
]


def build_comparison_table_jsx() -> str:
    rows = "\n".join([
        f'<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap">'
        f'<a href="{s["url"]}" target="_blank" rel="noopener noreferrer nofollow" '
        f'className="text-accent hover:underline">{s["name"]}</a></td>'
        f'<td className="border-b border-warm-border px-3 py-2 text-sm text-center">{s["kcal"]}</td>'
        f'<td className="border-b border-warm-border px-3 py-2 text-sm text-center">{s["carb"]}</td>'
        f'<td className="border-b border-warm-border px-3 py-2 text-sm text-center">{s["protein"]}</td>'
        f'<td className="border-b border-warm-border px-3 py-2 text-sm text-center">{s["salt"]}</td>'
        f'<td className="border-b border-warm-border px-3 py-2 text-sm text-center font-semibold">{s["price_per_meal"]}</td></tr>'
        for s in SERVICES
    ])

    return f'''
        <section className="my-12">
          <h2 className="font-display text-2xl font-bold mb-3 text-foreground">主要15社の数値比較表（1食あたり）</h2>
          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約。メニューにより変動があるため、各サービスの平均的レンジを記載。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link> 参照。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-warm-border bg-white rounded-lg overflow-hidden">
              <thead className="bg-cream">
                <tr>
                  <th className="border-b border-warm-border px-3 py-2 text-left text-xs font-bold text-foreground">サービス</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">kcal</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">糖質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">タンパク質(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">塩分(g)</th>
                  <th className="border-b border-warm-border px-3 py-2 text-center text-xs font-bold text-foreground">1食(円)</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※2026年5月時点の公開データ。最新情報は各公式サイトでご確認ください。</p>
        </section>
'''


def process_article(article_path: Path) -> tuple[bool, str]:
    content = article_path.read_text(encoding="utf-8")
    if "主要15社の数値比較表" in content:
        return False, "already has table"

    # Insert before the closing </article> or before FAQ section
    table_jsx = build_comparison_table_jsx()

    # Try FAQ pattern first
    patterns = [
        (r'<h2[^>]*>\s*[^<]*よくある質問', 0),  # before FAQ heading
        (r'</article>', 0),                       # before closing article
    ]

    for pat, _ in patterns:
        m = re.search(pat, content)
        if m:
            new_content = content[:m.start()] + table_jsx + "\n        " + content[m.start():]
            article_path.write_text(new_content, encoding="utf-8")
            return True, "added comparison table"

    return False, "no insertion point"


def main():
    articles = sorted([d for d in ARTICLES_DIR.iterdir() if d.is_dir()])
    print(f"Processing {len(articles)} articles...")
    stats = {"updated": 0, "skipped": 0, "errors": 0}
    for d in articles:
        page = d / "page.tsx"
        if not page.exists():
            continue
        try:
            success, msg = process_article(page)
            if success:
                stats["updated"] += 1
                print(f"  ✓ {d.name}")
            else:
                stats["skipped"] += 1
                print(f"  ⏭ {d.name}: {msg}")
        except Exception as e:
            stats["errors"] += 1
            print(f"  ✗ {d.name}: {e}")
    print(f"\n✅ Updated: {stats['updated']}, ⏭ Skipped: {stats['skipped']}, ❌ Errors: {stats['errors']}")


if __name__ == "__main__":
    main()
