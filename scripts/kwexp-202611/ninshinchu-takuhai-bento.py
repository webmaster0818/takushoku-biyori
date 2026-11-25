# 妊娠中 宅配弁当（kwexp 2026-11-25 20時「妊娠中 宅配弁当」）
# 一次情報: 厚生労働省「日本人の食事摂取基準（2025年版）」の策定ポイント（https://www.mhlw.go.jp/content/10904750/001734207.pdf）の
#   エネルギー・たんぱく質・葉酸・ナトリウムの表（妊婦の付加量・目標量）を 2026-11-25 に確認。
# 各社の栄養値は、kwexp で公式ページから書き出した tsv（取得日はファイル名）を再集計した（当サイト集計）。
# 個別サービスの「妊婦向け」などの表示は扱わない（ママの休食の公式ストアは 11/25 も 429 のため確認していない）
import csv
import statistics as st
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月25日"
HERE = Path(__file__).resolve().parent
DRI = "https://www.mhlw.go.jp/content/10904750/001734207.pdf"


def rd(name):
    return list(csv.DictReader((l for l in open(HERE / name, encoding="utf-8") if not l.startswith("#")), delimiter="\t"))


# (サービス, 対象, 取得日, 公式URL, [(たんぱく質g, 食塩相当量g)], 記事)
SERVICES = [
    ("nosh（ナッシュ）", "販売中のおかず", "11月18日", "https://nosh.jp/menu",
     [(float(r["protein"]), float(r["salt"])) for r in rd("nosh-menu-20261118.tsv") if r["kind"] == "おかず" and not r["not_on_sale"]], "/articles/nosh-reviews/"),
    ("三ツ星ファーム", "三ツ星基準のメニュー", "11月17日", "https://mitsuboshifarm.jp/menus",
     [(float(r["protein"]), float(r["salt"])) for r in rd("mitsuboshi-menu-20261117.tsv") if r["can_purchase"] == "1" and "三ツ星基準" in r["categories"]], "/articles/mitsuboshi-farm-reviews/"),
    ("ミールズ（Meals）", "主菜と副菜のお弁当", "11月25日", "https://meals.delishkitchen.tv/menus",
     [(float(r["protein"]), float(r["salt"])) for r in rd("meals-menu-20261125.tsv") if r["per100g"] == "False" and r["salt"] and float(r["protein"]) >= 15], "/articles/meals-kuchikomi/"),
    ("ライフミール", "全メニュー（ご飯付きを含む）", "11月17日", "https://l-meal.com/products/list",
     [(float(r["protein"]), float(r["salt"])) for r in rd("lifemeal-menu-20261117.tsv")], "/articles/lifemeal-menu/"),
    ("ワタミの宅食ダイレクト", "三菜・五菜・満足ディッシュ", "11月18日", "https://www.watami-takushoku-direct.jp/shop/sets/2?menu_view=true",
     [(float(r["protein"]), float(r["salt"])) for r in rd("watami-direct-menu-20261118.tsv") if r["category"] != "その他"], "/articles/watami-direct-menu/"),
    ("マッスルデリ", "全メニュー", "11月16日", "https://muscledeli.jp/shop/product_categories/md-lowfat",
     [(float(r["protein"]), float(r["salt"])) for r in rd("muscle-deli-menu-20261116.tsv")], "/articles/muscle-deli-menu/"),
    ("DELIPICKS（デリピックス）", "主菜の料理（汁物などを除く）", "11月14日", "https://deli-picks.com/collection/",
     [(float(r["たんぱく質g"]), float(r["食塩相当量g"])) for r in rd("delipicks-menu-20261114.tsv") if r["群"] != "その他(分類外)"], "/articles/delipicks-menu/"),
]

# 1日の値（18〜49歳女性・身体活動レベル「ふつう」）と妊婦の付加量。1食＝1日の3分の1として当サイトが割った目安
SALT_DAY = 6.5
SALT_MEAL = 2.1  # 6.5÷3＝2.17 を 0.1g単位で切り捨て
PRO_BASE = 50
PRO_LATE = 50 + 25
PRO_MEAL_BASE = 17  # 50÷3＝16.7
PRO_MEAL_LATE = 25  # 75÷3


def stats(v):
    n = len(v)
    return dict(
        n=n,
        salt=sum(1 for pr, s in v if s <= SALT_MEAL),
        pro17=sum(1 for pr, s in v if pr >= PRO_MEAL_BASE),
        pro25=sum(1 for pr, s in v if pr >= PRO_MEAL_LATE),
        both=sum(1 for pr, s in v if pr >= PRO_MEAL_LATE and s <= SALT_MEAL),
        mp=st.median(pr for pr, s in v),
        ms=st.median(s for pr, s in v),
    )


ST = [(s[0], s[1], s[2], s[3], stats(s[4]), s[5]) for s in SERVICES]
N_TOTAL = sum(x[4]["n"] for x in ST)
assert N_TOTAL == 791, N_TOTAL


def pct(k, d):
    return f"{d[k]}品（{round(d[k] * 100 / d['n'])}%）"


ROWS = [[name, f"{d['n']}品", f"{d['mp']:.1f}g", f"{d['ms']:.1f}g", pct("salt", d), pct("pro17", d), pct("pro25", d), pct("both", d)] for name, _, _, _, d, _ in ST]
BEST_SALT = max(ST, key=lambda x: x[4]["salt"] / x[4]["n"])
BEST_PRO = max(ST, key=lambda x: x[4]["pro25"] / x[4]["n"])

ARTICLE = {
    "slug": "ninshinchu-takuhai-bento",
    "component": "NinshinchuTakuhaiBentoPage",
    "name": "妊娠中の宅配弁当",
    "published": "2026-11-25",
    "title": f"妊娠中の宅配弁当の選び方｜食事摂取基準2025の塩分・たんぱく質で7社{N_TOTAL}メニューを集計【2026年11月】",
    "description": f"妊娠中に宅配弁当を使うときの目安を、厚生労働省「日本人の食事摂取基準（2025年版）」の妊婦の値から1食あたりに換算し、冷凍宅配弁当7社・{N_TOTAL}メニューの塩分とたんぱく質を当サイトで集計しました。",
    "keywords": "妊娠中 宅配弁当, 妊婦 宅配弁当, 妊娠中 冷凍弁当, 妊婦 宅食, 妊娠中 宅食 おすすめ, 妊娠後期 たんぱく質",
    "cat": "目的別ガイド・ランキング",
    "cat_id": "mokuteki",
    "crumb": "妊娠中の宅配弁当",
    "official_url": None,
    "ad_note": "※本記事のリンクはすべて各社の公式サイトと公的機関の資料で、アフィリエイト広告ではありません。",
    "toc": [
        ("answer", "妊娠中の宅配弁当で確かめたいこと"),
        ("standard", "食事摂取基準2025の妊婦の値"),
        ("per-meal", "1食あたりの目安（当サイトの換算）"),
        ("data", f"7社{N_TOTAL}メニューの塩分・たんぱく質"),
        ("howto", "選び方と使い方の注意"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            妊娠中は、つわりや体調の変化で料理がつらい時期があります。宅配弁当は温めるだけで食べられる一方、メニューによって塩分やたんぱく質の量に差があります。
          </p>
          <p className="mb-3">
            この記事では、厚生労働省「日本人の食事摂取基準（2025年版）」の妊婦の値を確認し、1食あたりの目安に換算しました。そのうえで、当サイトが各社の公式ページから書き出した冷凍宅配弁当7社・{N_TOTAL}メニューの栄養成分を、その目安で集計しています。
          </p>
          <p>体重や血圧、血糖などの状態で必要な量は変わります。医師・助産師・管理栄養士から指導を受けている場合は、その指示を優先してください。</p>''',
    "summary_title": "妊娠中の宅配弁当（要点）",
    "summary_box": f"食事摂取基準2025では、妊婦の食塩相当量の目標量は1日6.5g未満（妊娠前と同じ）、たんぱく質の推奨量は妊娠後期に1日25gの付加があり、18〜49歳では75gです。1食を1日の3分の1とすると、塩分{SALT_MEAL}g以下・たんぱく質{PRO_MEAL_LATE}g以上（後期）が目安になります。7社{N_TOTAL}メニューを集計すると、塩分{SALT_MEAL}g以下の割合はサービスで大きく異なり、後期のたんぱく質の目安を1食で満たすメニューは少数でした。",
    "point_labels": ("◎ 集計でわかったこと", "△ 注意したい点"),
    "good_points": [
        f"塩分{SALT_MEAL}g以下が多いのは{BEST_SALT[0]}（{round(BEST_SALT[4]['salt'] * 100 / BEST_SALT[4]['n'])}%）",
        f"たんぱく質{PRO_MEAL_LATE}g以上が多いのは{BEST_PRO[0]}（{round(BEST_PRO[4]['pro25'] * 100 / BEST_PRO[4]['n'])}%）",
        "栄養成分は各社の公式ページで確認できる",
    ],
    "caution_points": [
        "塩分とたんぱく質を両方満たすメニューは少ない",
        "おかずのみの弁当はご飯の分を別に考える",
        "必要量は個人差が大きい（指導を優先）",
    ],
    "body_before_reviews": "\n".join([
        h2("answer", "妊娠中の宅配弁当で確かめたいこと"),
        ul([
            f"塩分（食塩相当量）：妊婦の目標量は1日{SALT_DAY}g未満。1食あたり{SALT_MEAL}g以下が目安",
            f"たんぱく質：妊娠中期は1日5g、後期は25gの付加。後期は1食あたり{PRO_MEAL_LATE}g以上が目安",
            "エネルギー：妊娠初期50kcal・中期250kcal・後期450kcalの付加。弁当だけでなく1日の合計で考える",
            "葉酸：妊娠中期・後期は1日240µgの付加。妊娠を計画している女性と妊娠初期は、サプリメント等から1日400µgが望まれる",
        ]),
        src(f"※出典: 厚生労働省「{a(DRI, '日本人の食事摂取基準（2025年版）の策定ポイント')}」のエネルギー・たんぱく質・葉酸・ナトリウムの表（{CHK}確認）。1食あたりの目安は当サイトの換算です。"),
        p("宅配弁当のメニューには栄養成分が表示されているため、塩分とたんぱく質は注文前に確かめられます。エネルギーと葉酸は、弁当以外の食事と合わせて1日で調整する項目です。"),

        h2("standard", "食事摂取基準2025の妊婦の値"),
        table(
            ["項目", "妊娠前（18〜49歳女性）", "妊娠初期", "妊娠中期", "妊娠後期"],
            [
                ["エネルギー（身体活動レベル ふつう）", "18〜29歳 1,950kcal／30〜49歳 2,050kcal", "+50kcal", "+250kcal", "+450kcal"],
                ["たんぱく質（推奨量）", "50g", "+0g", "+5g", "+25g"],
                ["葉酸（推奨量）", "240µg", "+0µg", "+240µg", "+240µg"],
                ["食塩相当量（目標量）", "6.5g未満", "6.5g未満", "6.5g未満", "6.5g未満"],
            ],
        ),
        src(f"※出典: 厚生労働省「{a(DRI, '日本人の食事摂取基準（2025年版）の策定ポイント')}」（2025年2月）の各表（{CHK}確認）。資料は、妊婦個々の体格や妊娠中の体重増加量、胎児の発育状況の評価を行うことが必要としています。"),
        p("塩分の目標量は妊娠前と変わらず、たんぱく質は妊娠後期に大きく増えます。妊娠を計画している女性・妊娠の可能性がある女性・妊娠初期の女性は、通常の食品以外から葉酸を1日400µg摂ることが望まれるとされています。"),

        h2("per-meal", "1食あたりの目安（当サイトの換算）"),
        table(
            ["項目", "1日の値", "1食あたりの目安（1日÷3）"],
            [
                ["食塩相当量", f"{SALT_DAY}g未満", f"{SALT_MEAL}g以下"],
                ["たんぱく質（妊娠前・初期）", f"{PRO_BASE}g", f"{PRO_MEAL_BASE}g以上"],
                ["たんぱく質（妊娠後期）", f"{PRO_LATE}g", f"{PRO_MEAL_LATE}g以上"],
            ],
        ),
        src(f"※18〜49歳女性の推奨量・目標量を3食で等分した当サイトの目安です（{SALT_DAY}÷3＝2.17gは0.1g単位で切り捨て、50÷3＝16.7gは切り上げ）。間食を含めた配分は人によって異なります。"),

        h2("data", f"7社{N_TOTAL}メニューの塩分・たんぱく質"),
        p("当サイトがこれまでに各社の公式メニュー一覧・商品ページから書き出した栄養成分を、上の目安で数え直しました。"),
        table(
            ["サービス", "対象", f"たんぱく質の中央値", "塩分の中央値", f"塩分{SALT_MEAL}g以下", f"たんぱく質{PRO_MEAL_BASE}g以上", f"たんぱく質{PRO_MEAL_LATE}g以上", f"両方（{PRO_MEAL_LATE}g以上・{SALT_MEAL}g以下）"],
            [[r[0], f"{st_[1]}（{r[1]}）"] + r[2:] for r, st_ in zip(ROWS, ST)],
        ),
        src("※出典: " + "・".join(f"{a(u, name)}（2026年{day}取得）" for name, _, day, u, _, _ in ST) + "。メニュー数・中央値・割合は当サイト集計です。ライフミールはご飯付きセットを含み、ほかは主におかずのみの値です。メニューは入れ替わるため、現在の内容は各社の公式サイトでご確認ください。"),
        ul([
            f"塩分{SALT_MEAL}g以下の割合は、{BEST_SALT[0]}が{round(BEST_SALT[4]['salt'] * 100 / BEST_SALT[4]['n'])}%でもっとも高く、ワタミの宅食ダイレクトも7割前後でした",
            f"たんぱく質{PRO_MEAL_LATE}g以上は{BEST_PRO[0]}が{round(BEST_PRO[4]['pro25'] * 100 / BEST_PRO[4]['n'])}%と突出していますが、塩分の中央値は{BEST_PRO[4]['ms']:.1f}gで目安を超えています",
            f"塩分とたんぱく質（後期）の両方を1食で満たすメニューは、{N_TOTAL}品中{sum(x[4]['both'] for x in ST)}品でした",
        ]),
        p(f"1食で両方を満たすメニューは少ないため、塩分の少ない弁当を選び、たんぱく質は牛乳・卵・豆腐などを足して補う、あるいはたんぱく質の多い弁当を選んで他の食事の塩分を控える、という組み合わせが現実的です。各社のメニューは{a('/articles/nosh-osusume-menu/', 'ナッシュ')}・{a('/articles/lifemeal-menu/', 'ライフミール')}・{a('/articles/muscle-deli-menu/', 'マッスルデリ')}のメニュー記事で詳しく集計しています。"),

        h2("howto", "選び方と使い方の注意"),
        h3("選ぶとき"),
        ul([
            "メニューごとの栄養成分（食塩相当量・たんぱく質）が公式サイトで確認できるサービスを選ぶ",
            "おかずのみの弁当は、ご飯の量でエネルギーを調整する",
            "定期便は、スキップや食数の変更ができるかを確認しておく（体調で食べられない週がある）",
        ]),
        h3("食べるとき"),
        ul([
            "冷凍弁当は表示どおりに電子レンジで加熱する（中心まで温まらないときは追加で加熱する）",
            "賞味期限と冷凍庫の容量に合わせて食数を選ぶ",
            "医師から塩分やエネルギーの制限を指示されている場合は、その値に合うメニューだけを選ぶ",
        ]),
        p(f"出産後の食事の準備は{a('/articles/sango-osusume/', '産後におすすめの宅配弁当')}、冷凍弁当の加熱は{a('/articles/reitou-bento-atatame-kata/', '冷凍弁当の温め方')}、減塩を重視する場合は{a('/articles/genenshoku-takuhai/', '減塩食の宅配')}も参考にしてください。"),
    ]),
    "faq": [
        ("妊娠中に宅配弁当を食べても大丈夫ですか？", "食事摂取基準は食品の種類ではなく、栄養素の量の目安を示しています。宅配弁当は塩分やたんぱく質の量がメニューによって差があるため、栄養成分を確認して選び、医師・助産師から指導を受けている場合はその指示を優先してください。"),
        ("妊娠中の塩分は1食何gまでが目安ですか？", f"食事摂取基準2025の妊婦の食塩相当量の目標量は1日{SALT_DAY}g未満です。3食で等分すると1食{SALT_MEAL}g以下が目安になります（当サイトの換算）。"),
        ("妊娠後期のたんぱく質はどのくらい必要ですか？", f"18〜49歳女性の推奨量50gに、妊娠後期は25gが付加され、1日{PRO_LATE}gです。1食あたりでは{PRO_MEAL_LATE}g以上が目安です。"),
        ("葉酸は宅配弁当で摂れますか？", "宅配弁当の多くは葉酸の量を表示していません。食事摂取基準では、妊娠を計画している女性と妊娠初期の女性は、通常の食品以外の食品（サプリメント等）から1日400µgの葉酸を摂ることが望まれるとされています。"),
        ("どのサービスがおすすめですか？", f"当サイトの集計では、塩分の少ないメニューの割合は{BEST_SALT[0]}、たんぱく質の多いメニューの割合は{BEST_PRO[0]}が高い結果でした。重視する項目で選び、足りない分は他の食事で補ってください。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p(f"妊娠中の宅配弁当は、食事摂取基準2025の値から、1食あたり塩分{SALT_MEAL}g以下・たんぱく質{PRO_MEAL_BASE}g以上（後期は{PRO_MEAL_LATE}g以上）を目安に選ぶと比べやすくなります。7社{N_TOTAL}メニューを集計すると、両方を満たすメニューは少なく、弁当と他の食事を組み合わせて1日で調整するのが現実的です。"),
        p("栄養成分は各社の公式サイトで最新の値をご確認ください。体調や検査の結果で必要な量が変わるため、医師・助産師・管理栄養士の指導を優先してください。"),
    ]),
    "related": [
        ("/articles/sango-osusume/", "産後におすすめの宅配弁当"),
        ("/articles/mamano-kyushoku-reviews/", "ママの休食の口コミ・評判"),
        ("/articles/genenshoku-takuhai/", "減塩食の宅配"),
        ("/articles/kou-tanpaku-ranking/", "高たんぱくの宅配弁当"),
        ("/articles/reitou-bento-eiyou-baransu/", "冷凍弁当の栄養バランス"),
        ("/articles/takushoku-ryokin-hakusho/", "宅食料金白書"),
    ],
}
