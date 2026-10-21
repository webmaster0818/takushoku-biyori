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
# 基準値の公表がある社は基準値、メニューごとの値だけの社（nosh・FIT FOOD HOME）は主菜の中央50%（確認日は FOOTNOTE_P）
SERVICES = [
    {"name": "nosh（ナッシュ）", "kcal": "260-400", "carb": "30以下", "protein": "14-20", "salt": "2.5以下", "price_per_meal": "612-719", "url": "https://nosh.jp/"},
    {"name": "三ツ星ファーム", "kcal": "350以下", "carb": "25以下", "protein": "15以上", "salt": "−", "price_per_meal": "711-927", "url": "https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443"},
    {"name": "ウェルネスダイニング", "kcal": "240-330", "carb": "14-24（平均）", "protein": "9-13（平均）", "salt": "2.0-2.5以下", "price_per_meal": "752-1,165", "url": "https://t.felmat.net/fmcl?ak=W3533K.1.T697112.B1357443"},
    {"name": "まごころケア食", "kcal": "300以下（たんぱく調整食は300以上）", "carb": "15以下（糖質制限食のみ）", "protein": "10以下（たんぱく調整食のみ）", "salt": "2.0-2.5以下", "price_per_meal": "394-426", "url": "https://magokoro-care-shoku.com/"},
    {"name": "ワタミの宅食", "kcal": "250-500", "carb": "20-35以下", "protein": "15-20以上", "salt": "1.5-4.0以下", "price_per_meal": "470-790", "url": "https://www.watami-takushoku.co.jp/"},
    {"name": "食宅便", "kcal": "245-310", "carb": "10-50", "protein": "9-24", "salt": "2.0未満（ケア系）", "price_per_meal": "690-740", "url": "https://shokutakubin.com/"},
    {"name": "Muscle Deli", "kcal": "350-750", "carb": "15-75以下", "protein": "20-50以上", "salt": "2.5以下", "price_per_meal": "1,109-1,557", "url": "https://muscledeli.jp/"},
    {"name": "ヨシケイ", "kcal": "400以下（バランスミールのみ）", "carb": "−", "protein": "−", "salt": "−", "price_per_meal": "430-920", "url": "https://yoshikei-dvlp.co.jp/"},
    {"name": "コープデリ", "kcal": "229-496", "carb": "−", "protein": "−", "salt": "1.2-3.8", "price_per_meal": "464-842", "url": "https://www.coopdeli.jp/"},
    {"name": "パルシステム", "kcal": "300-500", "carb": "30-50", "protein": "15-25", "salt": "2.5以下", "price_per_meal": "580-720", "url": "https://www.pal-system.co.jp/"},
    {"name": "ナッシュclub（割引）", "kcal": "260-400", "carb": "30以下", "protein": "14-20", "salt": "2.5以下", "price_per_meal": "492〜（最高ランク）", "url": "https://nosh.jp/"},
    {"name": "つるかめキッチン", "kcal": "240-300", "carb": "15以下", "protein": "13", "salt": "2.0-2.5以下", "price_per_meal": "663-787", "url": "https://tsurukame-kitchen.com/"},
    {"name": "FIT FOOD HOME", "kcal": "310-420", "carb": "16-27", "protein": "18-28", "salt": "1.4-2.1", "price_per_meal": "1,188-1,308", "url": "https://store.tavenal.com/"},
    {"name": "GOFOOD", "note": "（2025年6月30日にサービス終了）", "kcal": "200-400", "carb": "10-20", "protein": "20-40", "salt": "2.5以下", "price_per_meal": "サービス終了", "url": "https://gofood.jp/"},
]

# 表の前置き・注記・脚注（記事側の現行文面と同一。2026-10-21 に19記事と照合）
PREAMBLE_P = '''          <p className="text-warm-gray text-sm mb-4">
            主要宅食サービスのカロリー・糖質・タンパク質・塩分・価格を公式公開データから集約しています。1食あたりの栄養基準を公式に明記している社はその基準値（「以下」「以上」・コース別の場合は範囲）、メニューごとの値だけを公開している社（nosh・FIT FOOD HOME）は公式メニュー一覧の主菜の中央50%（四分位）の範囲を記載しています。
            最新情報は各公式サイトでご確認ください。
            <Link href="/methodology/" className="text-accent hover:underline">評価方法・データ源</Link>をご参照ください。
          </p>
'''

NOTE_P = '''          <p className="text-xs text-warm-gray mb-3">※ヨシケイ・コープデリの行は2026年10月16日に公式サイトで再確認した値です（表の下の注記にある両社の栄養値の記述より新しい情報です）。ヨシケイの1食はヨシケイ東京の冷凍弁当（シンプルミール3食1,290円＝430円・ベジミール2食1,490円＝745円）と、2025年9月のコース刷新後のミールキット等（2人用5日分の通常価格目安6,830〜9,200円÷10食＝約683〜920円）の範囲です。kcalの基準はバランスミール（1食400kcal以下）のみ公表されており、糖質・タンパク質・塩分は1食あたりの公表がないため「−」としています。コープデリは夕食宅配（舞菜）6コースの税込価格（舞菜ミニ弁当464円〜舞菜御膳・エネルギー塩分調整食842円）で、2食以上の同時注文で1食24円（税抜）引きになるのは舞菜弁当・舞菜おかず・舞菜しっかりおかず・舞菜御膳の4コースのみです。kcal・塩分は公式の献立表サンプル（2026年3月の1週間）の範囲で、糖質・タンパク質は公表がないため「−」としています。</p>
'''

FOOTNOTE_P = '''          <p className="text-xs text-warm-gray mt-2">※表の値は、以下の日付に各社の公式サイトで再確認したものです（再確認できなかった値は、後述のとおり2026年5月時点の公開データのままです）。1食価格のMuscle Deli・FIT FOOD HOME・つるかめキッチンは2026年10月14日に再確認しました（Muscle Deliは4プランの単品価格（税込）÷食数（LEAN 15食〜GAIN 5食）、FIT FOOD HOMEは1人前の単品価格（税込1,188円・角煮など一部1,308円。10個まとめ割は1,129円〜）、つるかめキッチンは定期コースの税込価格÷食数（送料無料・バランス栄養御膳21食663円〜たんぱく＆塩分制限7食787円））。栄養値は2026年10月14日に再確認しました（noshは公式基準「糖質30g・塩分2.5g以下」と公式メニュー一覧の主菜88品、まごころケア食は全6コースの基準（健康バランス300kcal以下・カロリー調整240kcal±10%ほか。たんぱく調整食のみ300kcal以上）、ワタミの宅食は各商品の基準（熱量250〜500kcal基準・糖質は手鞠20g/おかず30g/ダブル35g以下・食塩相当量1.5〜4.0g以下）、Muscle Deliは4プランの基準（LOW CARB〜GAIN）、つるかめキッチンは5コースの基準（糖質15g以下は糖質制限気づかい御膳）、FIT FOOD HOMEは公式ストアの主菜19品（複数人前のパックを除く））。2026年10月15日には、ウェルネスダイニングの糖質・たんぱく質（各コースの公式公表の平均値の範囲。基準があるのは糖質＆カロリー制限の糖質15g以下、たんぱく＆塩分調整のたんぱく質10g以下、脂質制限の糖質27g以下・たんぱく質9g以上。厳選栄養バランスは糖質の公表なし）と塩分（6コースの基準：2.0〜2.5g以下）、まごころケア食の塩分（6コースの基準。健康バランス・カロリー調整は2.5g以下、ほかは2.0g以下）を再確認しました。2026年10月16日に公式サイト（6コースの商品ページの栄養表示）で再確認したところ、まごころケア食は1食あたりの平均値を公表しておらず、コース別の基準のみを公表しています。糖質の基準があるのは糖質制限食（15g以下）、たんぱく質の基準があるのはたんぱく調整食（10g以下）のみで、ほかのコースは公表がないため、この2つのみをコース名付きで記載しています（以前の「30-40」「15-20」は公式で確認できない値のため削除しました）。食宅便の塩分の基準はケア系（塩分&カロリーケア・たんぱくケア）の2.0g未満のみで、おまかせコースには基準がありません（10月15日掲載の7品で1.5〜2.4g）。食宅便の糖質（公式の基準は低糖質セレクトの糖質10g以下のみ）、Muscle Deliの塩分、つるかめキッチンのたんぱく質、パルシステム・GOFOODの栄養値は公式で確認できず、5月時点の値のままです。2026年10月19日には、食宅便のkcal・たんぱく質を公式の定期便メニュー一覧（6コース・39品の栄養成分。kcalの基準を公表しているコースはなく、たんぱく質の基準はたんぱくケアの10.2g程度のみ）の最小〜最大に、ワタミの宅食のたんぱく質を各商品の公表値（まごころおかず15g基準・ワタミdeおいしい健康16.2g以上・まごころダブル20g以上。まごころ御膳・まごころ手鞠・まごころ小箱は公表なし）に更新しました。ワタミの宅食の1食価格は2026年10月13日に再確認しました（冷蔵7商品の5日間コースで宅配料込み470〜790円）。食宅便とまごころケア食の1食価格は2026年10月12日に再確認しました（食宅便は7食セット690〜740円、まごころケア食はお得便394〜426円、いずれも送料別）。三ツ星ファームの行は2026年10月9日に再確認し、kcal・糖質・タンパク質を三ツ星基準に、価格を通常の定期便の1食単価に更新しました。塩分は公式に基準の記載が見当たらないため「−」としています。nosh・ナッシュclub・ウェルネスダイニングの価格は2026年10月10日に再確認しました。noshは公式表記の1食単価、ウェルネスダイニングは全6コース・7〜21食の税込価格÷食数で算出し、kcal・塩分は各コースの公式基準に更新しています。2026年10月21日には、noshの1食価格（6食719円〜12食612円）、ナッシュclubの最安価格（税込492円）、公式メニュー一覧の主菜85品のkcal・タンパク質（中央50%：259〜396kcal・13.6〜19.3g）を再確認し、表の値と一致しています。最新情報は各公式サイトでご確認ください。</p>
'''


def build_comparison_table_jsx() -> str:
    rows = "\n".join([
        f'<tr><td className="border-b border-warm-border px-3 py-2 font-medium text-sm whitespace-nowrap">'
        f'<a href="{s["url"]}" target="_blank" rel="noopener noreferrer nofollow" '
        f'className="text-accent hover:underline">{s["name"]}</a>{s.get("note", "")}</td>'
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
{PREAMBLE_P}{NOTE_P}          <div className="overflow-x-auto">
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
{FOOTNOTE_P}        </section>
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
