# マッスルデリ メニュー（kwexp 2026-11-16「マッスルデリ メニュー」）
# 公式 muscledeli.jp のメニュー一覧（/shop/product_categories/md-lowfat・md-lowcarb）・各プランの商品ページ（page-md-lean/maintain/gain/low-carb-base）・
# よくあるご質問（/shop/pages/faq）・新メニューのお知らせ（MDnewmenu_info20261001）を 2026-11-16 に確認
# メニューの集計は muscle-deli-menu-20261116.tsv（メニュー一覧ページの生HTMLに載っている全品の栄養成分を書き出したもの）から当サイトが計算
import csv
import statistics as st
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月16日"
TSV = Path(__file__).resolve().parent / "muscle-deli-menu-20261116.tsv"
R = list(csv.DictReader(TSV.open(encoding="utf-8"), delimiter="\t"))
LF = [x for x in R if x["category"] == "LOW FAT"]
LC = [x for x in R if x["category"] == "LOW CARB"]
N_LF, N_LC = len(LF), len(LC)
F = lambda x, k: float(x[k])  # noqa: E731

LOWFAT = "https://muscledeli.jp/shop/product_categories/md-lowfat"
LOWCARB = "https://muscledeli.jp/shop/product_categories/md-lowcarb"
FAQ = "https://muscledeli.jp/shop/pages/faq"
NEWS = "https://muscledeli.jp/shop/information/MDnewmenu_info20261001"
PLAN = "https://muscledeli.jp/shop/products/page-md-lean-base"


def fmt(v):
    return f"{v:g}"


def rng(q, k, unit):
    v = [F(x, k) for x in q]
    return f"{fmt(min(v))}〜{fmt(max(v))}{unit}（中央値 {fmt(round(st.median(v), 1))}{unit}）"


def cnt(q, cond):
    return sum(1 for x in q if cond(x))


summary_rows = [
    ["品数", f"{N_LF}品", f"{N_LC}品"],
    ["エネルギー", rng(LF, "kcal", "kcal"), rng(LC, "kcal", "kcal")],
    ["たんぱく質", rng(LF, "protein", "g"), rng(LC, "protein", "g")],
    ["脂質", rng(LF, "fat", "g"), rng(LC, "fat", "g")],
    ["糖質", rng(LF, "sugar", "g"), rng(LC, "sugar", "g")],
    ["食物繊維", rng(LF, "fiber", "g"), rng(LC, "fiber", "g")],
    ["食塩相当量", rng(LF, "salt", "g"), rng(LC, "salt", "g")],
]
P30_LF = cnt(LF, lambda x: F(x, "protein") >= 30)
SALT3_LF = cnt(LF, lambda x: F(x, "salt") > 3)
SALT25_LF = cnt(LF, lambda x: F(x, "salt") <= 2.5)
SALT2_ALL = cnt(R, lambda x: F(x, "salt") <= 2.0)

salt_bins = [(0, 2.0, "2.0g以下"), (2.0, 2.5, "2.1〜2.5g"), (2.5, 3.0, "2.6〜3.0g"), (3.0, 4.0, "3.1〜4.0g"), (4.0, 99, "4.1g以上")]
salt_rows = [[lab, f"{cnt(LF, lambda x, lo=lo, hi=hi: lo < F(x, 'salt') <= hi or (lo == 0 and F(x, 'salt') <= hi))}品",
              f"{cnt(LC, lambda x, lo=lo, hi=hi: lo < F(x, 'salt') <= hi or (lo == 0 and F(x, 'salt') <= hi))}品"] for lo, hi, lab in salt_bins]
assert sum(int(r[1][:-1]) for r in salt_rows) == N_LF and sum(int(r[2][:-1]) for r in salt_rows) == N_LC

low_salt = sorted(R, key=lambda x: (F(x, "salt"), -F(x, "protein")))[:8]
low_salt_rows = [[x["name"], x["category"], f"{fmt(F(x, 'salt'))}g", f"{fmt(F(x, 'protein'))}g", f"{fmt(F(x, 'kcal'))}kcal"] for x in low_salt]
high_fiber = sorted(R, key=lambda x: -F(x, "fiber"))[:6]
high_fiber_rows = [[x["name"], x["category"], f"{fmt(F(x, 'fiber'))}g", f"{fmt(F(x, 'sugar'))}g", f"{fmt(F(x, 'kcal'))}kcal"] for x in high_fiber]
NEW = [x["name"] for x in R if x["new"] == "1"]
PREM = [x["name"] for x in R if x["premium"] == "1"]


def mark(x):
    tags = []
    if x["new"] == "1":
        tags.append("新")
    if x["premium"] == "1":
        tags.append("Premium")
    return f"{x['name']}（{'・'.join(tags)}）" if tags else x["name"]


def full_table(q):
    q = sorted(q, key=lambda x: (-F(x, "protein"), F(x, "kcal")))
    return table(
        ["メニュー名", "エネルギー", "たんぱく質", "脂質", "糖質", "食物繊維", "食塩相当量"],
        [[mark(x), f"{fmt(F(x, 'kcal'))}kcal", f"{fmt(F(x, 'protein'))}g", f"{fmt(F(x, 'fat'))}g", f"{fmt(F(x, 'sugar'))}g", f"{fmt(F(x, 'fiber'))}g", f"{fmt(F(x, 'salt'))}g"] for x in q],
    )


ARTICLE = {
    "slug": "muscle-deli-menu",
    "component": "MuscleDeliMenuPage",
    "name": "マッスルデリ",
    "published": "2026-11-16",
    "title": f"マッスルデリ（Muscle Deli）のメニュー一覧｜低脂質{N_LF}品・低糖質{N_LC}品の栄養成分を公式の掲載値で集計【2026年11月】",
    "description": f"マッスルデリ（Muscle Deli）の公式メニュー一覧に掲載されている全{N_LF + N_LC}品（LOW FAT {N_LF}品・LOW CARB {N_LC}品）の栄養成分を集計しました。たんぱく質・糖質・食塩相当量の幅と中央値、塩分の少ないメニュー、新メニューとPremiumメニューの条件を整理しています。",
    "keywords": "マッスルデリ メニュー, Muscle Deli メニュー, マッスルデリ メニュー一覧, マッスルデリ 栄養成分, マッスルデリ 低糖質 メニュー, マッスルデリ 新メニュー, マッスルデリ Premium",
    "cat": "選び方・使い方・サービス紹介",
    "cat_id": "guide",
    "crumb": "マッスルデリのメニュー一覧",
    "official_url": "https://muscledeli.jp/",
    "cta": "マッスルデリ 公式サイトを見る",
    "summary_title": "マッスルデリのメニューの要点",
    "point_labels": ("◎ 集計でわかったこと", "△ 注意したい点"),
    "toc": [
        ("plans", "プランとメニューの関係"),
        ("summary-data", "全メニューの栄養成分の幅（当サイト集計）"),
        ("salt", "食塩相当量の分布と塩分の少ないメニュー"),
        ("new", "新メニューとPremiumメニュー"),
        ("choose", "メニューの選び方：おまかせとお好き"),
        ("list-lowfat", f"LOW FAT（低脂質）{N_LF}品の一覧"),
        ("list-lowcarb", f"LOW CARB（低糖質）{N_LC}品の一覧"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            マッスルデリ（Muscle Deli・運営：株式会社YOUR MEAL）は、目的別のプランに合わせた高たんぱくな冷凍弁当を届ける定期便です。メニューは、LEAN・MAINTAIN・GAINの3プランで届く<strong>LOW FAT（低脂質）</strong>と、LOW CARBプランで届く<strong>LOW CARB（低糖質）</strong>に分かれています。
          </p>
          <p className="mb-3">
            この記事では、{CHK}に公式のメニュー一覧ページに掲載されていた<strong>全{N_LF + N_LC}品の栄養成分</strong>（エネルギー・たんぱく質・脂質・糖質・食物繊維・食塩相当量）を書き出し、当サイトで幅・中央値・分布を集計しました。メニュー名と数値は公式の掲載値のままで、並べ替えと集計だけを行っています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>''',
    "summary_box": f"公式のメニュー一覧には、LOW FAT {N_LF}品とLOW CARB {N_LC}品が掲載されていました（{CHK}確認）。LOW FAT一覧の表示値（LEANプラン選択時）は、{N_LF}品すべてがたんぱく質30g以上・エネルギー{rng(LF, 'kcal', 'kcal')}です。一方で食塩相当量は{rng(LF, 'salt', 'g')}と幅があり、3gを超えるメニューが{SALT3_LF}品あります。LOW CARBは糖質{rng(LC, 'sugar', 'g')}で、たんぱく質は30g未満です。",
    "good_points": [
        f"LOW FATは{N_LF}品すべてたんぱく質30g以上",
        "全品の栄養成分が公式一覧に掲載されている",
        "お好きなメニューコースなら自分で選べる",
    ],
    "caution_points": [
        f"食塩相当量3g超がLOW FATに{SALT3_LF}品",
        "Premiumメニューは定期5回目以降",
        "一覧の表示値はLEANプランのもの",
    ],
    "body_before_reviews": "\n".join([
        h2("plans", "プランとメニューの関係"),
        table(
            ["プラン", "公式の説明", "エネルギーの目安（公式）", "届くメニュー"],
            [
                ["LEAN", "女性ダイエット用", "350〜450kcal", "LOW FAT"],
                ["MAINTAIN", "男性ダイエット用", "450〜550kcal", "LOW FAT"],
                ["GAIN", "増量用", "550〜750kcal", "LOW FAT"],
                ["LOW CARB", "低糖質ダイエット用", "350kcal以上", "LOW CARB"],
            ],
        ),
        src(f"※出典: {a(PLAN, 'マッスルデリ 各プランの商品ページ')}・{a(LOWFAT, 'メニュー一覧（LOW FAT）')}・{a(LOWCARB, 'メニュー一覧（LOW CARB）')}（{CHK}確認）"),
        p("LOW FATの同じメニューでも、プランによって量と栄養成分が変わります。公式のメニュー一覧はプランを切り替えて表示する作りで、ページを開いた時点ではLEANが選択されています。<strong>この記事のLOW FATの数値は、その初期表示（LEANプラン）の掲載値</strong>です。MAINTAIN・GAINではエネルギー・たんぱく質とも多くなるため、一覧でプランを切り替えるか、届いた商品のラベルで確認してください。"),

        h2("summary-data", "全メニューの栄養成分の幅（当サイト集計）"),
        table(["項目", f"LOW FAT（{N_LF}品・LEAN表示）", f"LOW CARB（{N_LC}品）"], summary_rows),
        src(f"※公式の{a(LOWFAT, 'メニュー一覧（LOW FAT）')}・{a(LOWCARB, 'メニュー一覧（LOW CARB）')}に掲載されている各メニューの栄養成分（{CHK}確認）を当サイトが集計。中央値は小数第1位まで。"),
        ul([
            f"LOW FATは<strong>{N_LF}品すべてがたんぱく質30g以上</strong>（最大は{fmt(max(F(x, 'protein') for x in LF))}g）。脂質は最大{fmt(max(F(x, 'fat') for x in LF))}gに抑えられています",
            f"LOW FATの糖質は中央値{fmt(round(st.median([F(x, 'sugar') for x in LF]), 1))}gで、ご飯や麺を含むセットが中心です",
            f"LOW CARBは糖質の中央値が{fmt(round(st.median([F(x, 'sugar') for x in LC]), 1))}gと低い代わりに、脂質の中央値が{fmt(round(st.median([F(x, 'fat') for x in LC]), 1))}gとLOW FATより多くなっています",
            f"食物繊維はLOW CARBのほうが多く、最大{fmt(max(F(x, 'fiber') for x in LC))}gのメニューがあります",
        ]),

        h2("salt", "食塩相当量の分布と塩分の少ないメニュー"),
        p("たんぱく質や脂質がそろっている一方で、食塩相当量はメニューによって差が大きい項目です。"),
        table(["食塩相当量（1食）", f"LOW FAT（{N_LF}品）", f"LOW CARB（{N_LC}品）"], salt_rows),
        src(f"※公式メニュー一覧の掲載値（{CHK}確認）を当サイトが集計"),
        p(f"LOW FATで食塩相当量が2.5g以下のメニューは{SALT25_LF}品、3gを超えるメニューは{SALT3_LF}品でした。全{N_LF + N_LC}品のうち2.0g以下は{SALT2_ALL}品です。塩分を控えたい場合は、次のメニューが目安になります。"),
        h3("食塩相当量が少ないメニュー（全品から少ない順に8品）"),
        table(["メニュー名", "分類", "食塩相当量", "たんぱく質", "エネルギー"], low_salt_rows),
        h3("食物繊維が多いメニュー（全品から多い順に6品）"),
        table(["メニュー名", "分類", "食物繊維", "糖質", "エネルギー"], high_fiber_rows),
        src(f"※公式メニュー一覧の掲載値（{CHK}確認）を当サイトが並べ替え。LOW FATはLEANプランの値です。"),

        h2("new", "新メニューとPremiumメニュー"),
        table(
            ["区分", "メニュー", "条件"],
            [
                ["新メニュー（一覧に「新メニュー」の表示）", "、".join(NEW), "おまかせメニューコースは発売日から2週間、新メニューが届くメニューの一つになる（2026年10月1日のお知らせの例）"],
                ["Premium", "、".join(PREM), "全プランで、定期5回目の注文以降から注文できる。おまかせメニューも5回目以降はランダムで届く"],
            ],
        ),
        src(f"※出典: {a(LOWFAT, 'メニュー一覧')}・{a(FAQ, 'よくあるご質問「Premium menuの購入条件について」')}・{a(NEWS, '新メニュー「ふんわりお好み焼きと鶏の辛みそだれセット」のお知らせ')}（{CHK}確認）。Premiumの条件は、スキップ・停止ではリセットされません。"),

        h2("choose", "メニューの選び方：おまかせとお好き"),
        table(
            ["項目", "おまかせメニューコース", "お好きなメニューコース"],
            [
                ["メニューの決め方", "マッスルデリが毎回おすすめを選ぶ", "自分で選ぶ（お届け予定日の5日前までマイページで変更可）"],
                ["苦手なメニュー", "マイページの「苦手メニュー」で3個まで除外", "メニュー選択画面で削除"],
                ["品切れのとき", "代替メニュー機能の対象外", "「代替メニュー」で最大5個まで登録できる（未登録の場合は選択中のメニューからランダム）"],
                ["アレルギー登録", "購入時に登録でき、登録が適用される", "適用されない（各商品の原材料を確認して選ぶ）"],
            ],
        ),
        src(f"※出典: {a(FAQ, 'マッスルデリ よくあるご質問（苦手メニューについて・代替メニューについて・アレルギー食材の登録）')}・{a(PLAN, '商品ページの注意事項')}（{CHK}確認）。コースの切り替えはお問い合わせからお届け予定日の8日前までに申請します。"),
        p(f"塩分や糖質など、上の集計で気になる数値があるなら、お好きなメニューコースで選ぶほうが確実です。アレルギーは28品目の表示に対応していますが、公式FAQは完全対応ではないとしています。料金や口コミは{a('/articles/muscle-deli-reviews/', 'マッスルデリの口コミ・評判')}、定期の解約条件は{a('/articles/muscle-deli-kaiyaku/', 'マッスルデリの解約方法')}で確認できます。"),

        h2("list-lowfat", f"LOW FAT（低脂質）{N_LF}品の一覧"),
        p("たんぱく質の多い順に並べています。数値はLEANプランの掲載値です。"),
        full_table(LF),
        src(f"※出典: {a(LOWFAT, 'マッスルデリ メニュー一覧（LOW FAT）')}（{CHK}確認・LEANプラン選択時の表示値）。メニューは入れ替わるため、注文の前に公式の一覧でご確認ください。"),

        h2("list-lowcarb", f"LOW CARB（低糖質）{N_LC}品の一覧"),
        full_table(LC),
        src(f"※出典: {a(LOWCARB, 'マッスルデリ メニュー一覧（LOW CARB）')}（{CHK}確認）"),
        f'        <OfficialButton>マッスルデリ 公式サイトを見る</OfficialButton>',
    ]),
    "faq": [
        ("マッスルデリのメニューは何種類ありますか？", f"2026年11月16日に公式のメニュー一覧を確認したところ、LOW FAT（LEAN・MAINTAIN・GAINプラン）が{N_LF}品、LOW CARB（LOW CARBプラン）が{N_LC}品掲載されていました。"),
        ("どのメニューもたんぱく質30g以上ですか？", f"LOW FATはLEANプランの表示値で{N_LF}品すべてが30g以上でした。LOW CARBは{rng(LC, 'protein', 'g')}で、30g以上のメニューはありませんでした（当サイト集計）。"),
        ("塩分の少ないメニューはありますか？", f"全{N_LF + N_LC}品のうち、食塩相当量2.0g以下は{SALT2_ALL}品でした。一方、LOW FATには3gを超えるメニューも{SALT3_LF}品あります。記事内の「食塩相当量が少ないメニュー」の表を参考にしてください。"),
        ("Premiumメニューはいつから頼めますか？", "全プランで、定期5回目の注文以降から注文できます。スキップや停止をしても条件はリセットされません。"),
        ("メニューを自分で選べますか？", "お好きなメニューコースなら選べます。お届け予定日の5日前までにマイページで変更します。おまかせメニューコースでも、苦手なメニューを3個まで除外できます。"),
        ("MAINTAINやGAINの栄養成分はどこで確認できますか？", "公式のメニュー一覧でプランを切り替えると確認できます。この記事のLOW FATの数値は、一覧を開いたときに選ばれているLEANプランの値です。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p(f"マッスルデリの公式メニュー一覧には、LOW FAT {N_LF}品とLOW CARB {N_LC}品が掲載されていました。LOW FATはすべてたんぱく質30g以上で、脂質も抑えられています。差が出るのは食塩相当量で、3gを超えるメニューもあるため、塩分を気にする場合はお好きなメニューコースで選ぶのが確実です。数値はプランやメニューの入れ替えで変わるため、注文前に公式の一覧で確認してください。"),
        p("メニュー・栄養成分は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。"),
    ]),
    "related": [
        ("/articles/muscle-deli-reviews/", "マッスルデリの口コミ・評判"),
        ("/articles/muscle-deli-kaiyaku/", "マッスルデリの解約方法"),
        ("/articles/kou-tanpaku-ranking/", "高たんぱくの宅配弁当ランキング"),
        ("/articles/delipicks-menu/", "デリピックスのメニュー一覧"),
    ],
}
