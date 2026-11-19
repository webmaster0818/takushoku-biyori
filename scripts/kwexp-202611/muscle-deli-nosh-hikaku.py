# マッスルデリ ナッシュ 比較（kwexp 2026-11-17「マッスルデリ ナッシュ 比較」）
# nosh: 公式 nosh.jp の /plan・/lifestyle・/club・/shipping（2026年07月27日改訂版の送料表）・/use/system・/tradelaw・/nutritional-value・/menu を 2026-11-17 に確認。
#   メニューは /menu の生HTMLに載っている100品の栄養成分を nosh-menu-20261117.tsv に書き出したもの
# マッスルデリ: 公式 muscledeli.jp の各プランの商品ページ（page-md-lean/maintain/gain/low-carb-base）・よくあるご質問（/shop/pages/faq）・お知らせ一覧を 2026-11-17 に確認。
#   価格は商品ページの税抜の値に、公式サイトの計算（税込＝税抜×1.08 を四捨五入）を当てたもの（11/15 の muscle-deli-kaiyaku の公式の例 MAINTAIN 5食 5,821円と一致）。
#   メニューは 11/16 に公式メニュー一覧から書き出した muscle-deli-menu-20261116.tsv（LOW FAT は LEAN プラン選択時の表示値）
import csv
import re
import statistics as st
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月17日"
CHK_MD_MENU = "2026年11月16日"
HERE = Path(__file__).resolve().parent
NOSH_ALL = list(csv.DictReader((HERE / "nosh-menu-20261117.tsv").open(encoding="utf-8"), delimiter="\t"))
# 主菜のおかずだけ（デザート・パン・朝食・販売休止の表示があるものを除く）
NOSH = [x for x in NOSH_ALL if not any(k in x["category"] for k in ("デザート", "パン", "朝食", "販売休止"))]
MD = list(csv.DictReader((HERE / "muscle-deli-menu-20261116.tsv").open(encoding="utf-8"), delimiter="\t"))
LF = [x for x in MD if x["category"] == "LOW FAT"]
LC = [x for x in MD if x["category"] == "LOW CARB"]
F = lambda x, k: float(x[k])  # noqa: E731
# メニュー名に主食（ご飯・麺・パスタ等）が入っているもの（当サイトがメニュー名で数えた目安）
STAPLE = re.compile("丼|炒飯|チャーハン|ライス|オムライス|ピラフ|リゾット|ご飯|ごはん|飯|麺|ラーメン|ちゃんぽん|そば|うどん|パスタ|ボロネーゼ|ナポリタン|カルボナーラ|お好み焼き|ビビンバ|カオマンガイ|ドリア|グラタン|ピザ|ピッツァ")
LF_STAPLE = sum(1 for x in LF if STAPLE.search(x["name"]))
NOSH_STAPLE = sum(1 for x in NOSH if STAPLE.search(x["name"]))

N_PLAN = "https://nosh.jp/plan"
N_LIFE = "https://nosh.jp/lifestyle"
N_CLUB = "https://nosh.jp/club"
N_SHIP = "https://nosh.jp/shipping"
N_SYS = "https://nosh.jp/use/system"
N_LAW = "https://nosh.jp/tradelaw"
N_NUT = "https://nosh.jp/nutritional-value"
N_MENU = "https://nosh.jp/menu"
M_LEAN = "https://muscledeli.jp/shop/products/page-md-lean-base"
M_MAIN = "https://muscledeli.jp/shop/products/page-md-maintain-base"
M_GAIN = "https://muscledeli.jp/shop/products/page-md-gain-base"
M_LC = "https://muscledeli.jp/shop/products/page-md-low-carb-base"
M_FAQ = "https://muscledeli.jp/shop/pages/faq"
M_LOWFAT = "https://muscledeli.jp/shop/product_categories/md-lowfat"
M_LOWCARB = "https://muscledeli.jp/shop/product_categories/md-lowcarb"


def fmt(v):
    return f"{v:g}"


def med(q, k):
    return fmt(round(st.median(F(x, k) for x in q), 1))


def rng(q, k, unit):
    v = [F(x, k) for x in q]
    return f"{fmt(min(v))}〜{fmt(max(v))}{unit}（中央値 {med(q, k)}{unit}）"


def cnt(q, cond):
    return sum(1 for x in q if cond(x))


def yen(n):
    return f"{round(n):,}円"


# 料金（税込）
NOSH_PLANS = [(6, 4318), (8, 5157), (10, 6206), (12, 7344), (20, 12240)]
NOSH_PER_MEAL = {6: "719円", 8: "644円", 10: "620円", 12: "612円", 20: "612円（当サイト計算）"}  # 公式の1食単価（税込）。20食は公式に記載なし
NOSH_SHIP_KANTO = {False: 1166, True: 1386}  # 4〜12食 / 20食
MD_PRICE = {  # 定期（通常）2回目以降の1回分（税込）
    "LEAN": {5: 5216, 10: 10206, 15: 14969},
    "MAINTAIN": {5: 5821, 10: 11394, 15: 16740},
    "GAIN": {5: 6998, 10: 13770, 15: 20304},
    "LOW CARB": {5: 5508, 10: 10800, 15: 15854},
}
MD_SHIP = {5: 1200, 10: 1420, 15: 1420}

nosh_rows = [[f"{n}食" + ("（2回目以降）" if n == 20 else ""), yen(t), NOSH_PER_MEAL[n], yen((t + NOSH_SHIP_KANTO[n == 20]) / n)] for n, t in NOSH_PLANS]
md_rows = []
for plan, d in MD_PRICE.items():
    for n, t in d.items():
        md_rows.append([f"{plan} {n}食", yen(t), yen(t / n), yen((t + MD_SHIP[n]) / n)])

NOSH_MIN_SHIP = min((t + NOSH_SHIP_KANTO[n == 20]) / n for n, t in NOSH_PLANS)
MD_LEAN15_SHIP = (MD_PRICE["LEAN"][15] + MD_SHIP[15]) / 15

nut_rows = [
    ["対象", f"主菜のおかず{len(NOSH)}品", f"LOW FAT {len(LF)}品（LEAN表示）", f"LOW CARB {len(LC)}品"],
    ["エネルギー", rng(NOSH, "kcal", "kcal"), rng(LF, "kcal", "kcal"), rng(LC, "kcal", "kcal")],
    ["たんぱく質", rng(NOSH, "protein", "g"), rng(LF, "protein", "g"), rng(LC, "protein", "g")],
    ["たんぱく質30g以上", f"{cnt(NOSH, lambda x: F(x, 'protein') >= 30)}品", f"{cnt(LF, lambda x: F(x, 'protein') >= 30)}品", f"{cnt(LC, lambda x: F(x, 'protein') >= 30)}品"],
    ["たんぱく質20g以上", f"{cnt(NOSH, lambda x: F(x, 'protein') >= 20)}品", f"{cnt(LF, lambda x: F(x, 'protein') >= 20)}品", f"{cnt(LC, lambda x: F(x, 'protein') >= 20)}品"],
    ["脂質", rng(NOSH, "fat", "g"), rng(LF, "fat", "g"), rng(LC, "fat", "g")],
    ["糖質", rng(NOSH, "sugar", "g"), rng(LF, "sugar", "g"), rng(LC, "sugar", "g")],
    ["食塩相当量", rng(NOSH, "salt", "g"), rng(LF, "salt", "g"), rng(LC, "salt", "g")],
    ["食塩相当量2.5g以下", f"{cnt(NOSH, lambda x: F(x, 'salt') <= 2.5)}品", f"{cnt(LF, lambda x: F(x, 'salt') <= 2.5)}品", f"{cnt(LC, lambda x: F(x, 'salt') <= 2.5)}品"],
]
NOSH_P30 = cnt(NOSH, lambda x: F(x, "protein") >= 30)
NOSH_HP = sorted(NOSH, key=lambda x: -F(x, "protein"))[:6]
nosh_hp_rows = [[x["name"], f"{fmt(F(x, 'protein'))}g", f"{fmt(F(x, 'kcal'))}kcal", f"{fmt(F(x, 'sugar'))}g", f"{fmt(F(x, 'salt'))}g", ("追加料金 " + x["category"].split("+")[1]) if "+" in x["category"] else "なし"] for x in NOSH_HP]

ARTICLE = {
    "slug": "muscle-deli-nosh-hikaku",
    "component": "MuscleDeliNoshHikakuPage",
    "name": "マッスルデリとnosh",
    "published": "2026-11-17",
    "title": "マッスルデリとnosh（ナッシュ）を比較｜たんぱく質・糖質・塩分を全メニューで集計、送料込み1食の料金も公式で確認【2026年11月】",
    "description": f"マッスルデリとnosh（ナッシュ）を、公式のメニュー一覧に載っている全メニューの栄養成分（nosh {len(NOSH)}品・マッスルデリ {len(MD)}品）と、公式の料金・送料で比較しました。たんぱく質30g以上のメニュー数、糖質・塩分の幅、送料込みの1食あたりを当サイトで計算しています。",
    "keywords": "マッスルデリ ナッシュ 比較, マッスルデリ nosh 比較, マッスルデリ ナッシュ どっち, nosh マッスルデリ 違い, 高たんぱく 宅配弁当 比較",
    "cat": "比較・料金データ",
    "cat_id": "hikaku",
    "crumb": "マッスルデリとnoshの比較",
    "official_url": None,
    "ad_note": "※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。",
    "summary_title": "マッスルデリとnoshの比較の要点",
    "point_labels": ("◎ マッスルデリが合う人", "◎ noshが合う人"),
    "toc": [
        ("overview", "サービスの違い（早見表）"),
        ("nutrition", "全メニューの栄養成分の比較（当サイト集計）"),
        ("price", "料金と送料込みの1食あたり"),
        ("rules", "メニューの選び方・配送・締切"),
        ("which", "どちらを選ぶか：目的別の目安"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            マッスルデリ（運営：株式会社YOUR MEAL）とnosh（ナッシュ・運営：ナッシュ株式会社）は、どちらも冷凍の宅配弁当を定期便で届けるサービスです。同じ「体づくり・ダイエット向け」として比べられることが多いものの、<strong>マッスルデリはたんぱく質量を、noshは糖質と塩分の上限を</strong>軸に設計されており、1食の中身と料金の考え方が大きく違います。
          </p>
          <p className="mb-3">
            この記事では、両社の公式メニュー一覧に掲載されている<strong>全メニューの栄養成分</strong>（nosh {len(NOSH_ALL)}品は{CHK}、マッスルデリ {len(MD)}品は{CHK_MD_MENU}に取得）を当サイトで集計し、{CHK}に公式サイトで確認した料金・送料と合わせて比較しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>''',
    "summary_box": f"たんぱく質を重視するならマッスルデリです。LOW FAT（LEAN・MAINTAIN・GAINプラン）の{len(LF)}品はすべてたんぱく質30g以上で、noshの主菜のおかず{len(NOSH)}品のうち30g以上は{NOSH_P30}品でした。一方、料金はnoshが低く、関東の送料込みで1食{yen(NOSH_MIN_SHIP)}〜（20食）、マッスルデリはLEAN 15食でも{yen(MD_LEAN15_SHIP)}です。noshは全メニューが糖質30g以下・塩分2.5g以下で、マッスルデリのLOW FATは丼・麺・パスタなど主食の入ったメニューも多く、糖質の中央値は{med(LF, "sugar")}gでした（当サイト集計）。",
    "good_points": [
        "毎食たんぱく質30g以上をそろえたい",
        "丼・麺など主食の入ったメニューも選びたい",
        "プラン（体重管理・増量）で量を決めたい",
    ],
    "caution_points": [
        "1食あたりの料金を抑えたい",
        "糖質・塩分の上限が全メニューでそろっている方がよい",
        "約100種類から毎回メニューを選びたい",
    ],
    "body_before_reviews": "\n".join([
        h2("overview", "サービスの違い（早見表）"),
        table(
            ["項目", "マッスルデリ", "nosh（ナッシュ）"],
            [
                ["設計の軸", "プラン別のたんぱく質・カロリー・糖質・脂質の目標", "全メニュー糖質30g以下・塩分2.5g以下"],
                ["1食の中身", f"LOW FAT {len(LF)}品中{LF_STAPLE}品は丼・麺・パスタなど主食が入ったメニュー", f"おかずが中心（炒飯・パスタ・グラタンなどは{NOSH_STAPLE}品）"],
                ["プラン", "LEAN・MAINTAIN・GAIN・LOW CARB", "食数で選ぶ（6・8・10・12食、2回目以降は20食も可）"],
                ["1回の食数", "5・10・15食", "6・8・10・12・20食"],
                ["メニュー数（公式の表記）", "「50種類以上」（LEAN・MAINTAIN・GAIN）", "「約100種類」（ページにより約90種類）"],
                ["配送の間隔", "1週間・2週間", "1週間・2週間・3週間"],
                ["変更・解約の締切", "お届け予定日の5日前", "お届け日の4日前（北海道・東北・九州〈福岡除く〉・沖縄などは5日前）"],
                ["続けるほどの割引", "定期は初回25%OFF・2回目以降10%OFF。継続割プラン（6・12・24回）は最大20%OFF", "nosh club：累計購入数に応じて1食最安492円（税込）"],
            ],
        ),
        src(f"※出典: マッスルデリ {a(M_LEAN, 'LEAN')}・{a(M_MAIN, 'MAINTAIN')}・{a(M_GAIN, 'GAIN')}・{a(M_LC, 'LOW CARB')}の商品ページ、{a(M_FAQ, 'よくあるご質問')}／nosh {a(N_PLAN, '料金プラン')}・{a(N_SYS, 'ご利用について')}・{a(N_LAW, '特定商取引法に基づく表記')}・{a(N_NUT, '栄養価')}・{a(N_CLUB, 'nosh club')}（{CHK}確認）"),
        p(f"名前の似た「筋肉食堂DELI」は、マッスルデリとは別のサービスです。筋肉食堂DELIの現状は{a('/articles/kinnikushokudo-deli-kuchikomi/', '筋肉食堂DELIの口コミ・評判')}で確認できます。"),

        h2("nutrition", "全メニューの栄養成分の比較（当サイト集計）"),
        table(["項目", "nosh", "マッスルデリ LOW FAT", "マッスルデリ LOW CARB"], nut_rows),
        src(f"※主食の入ったメニューの数は、当サイトがメニュー名（丼・炒飯・麺・パスタ・グラタン等）で数えた目安です。nosh：{a(N_MENU, '公式メニュー一覧')}の掲載値（{CHK}取得・全{len(NOSH_ALL)}品からデザート・パン・朝食・販売休止の表示があるものを除いた{len(NOSH)}品）。マッスルデリ：{a(M_LOWFAT, 'メニュー一覧（LOW FAT）')}・{a(M_LOWCARB, 'メニュー一覧（LOW CARB）')}の掲載値（{CHK_MD_MENU}取得・LOW FATはLEANプラン選択時の表示値）。当サイトが集計し、中央値は小数第1位まで。"),
        ul([
            f"<strong>たんぱく質</strong>：マッスルデリのLOW FATは{len(LF)}品すべてが30g以上（LEANの表示値。MAINTAIN・GAINはさらに多い）。noshの中央値は{med(NOSH, 'protein')}gで、30g以上は{NOSH_P30}品です",
            f"<strong>糖質</strong>：noshは全品が公式基準の30g以下（掲載値の最大{fmt(max(F(x, 'sugar') for x in NOSH))}g）。マッスルデリのLOW FATは丼・麺・パスタなど主食の入ったメニューも多く中央値{med(LF, 'sugar')}gで、30gを超えるメニューが{cnt(LF, lambda x: F(x, 'sugar') > 30)}品あります",
            f"<strong>食塩相当量</strong>：noshは全品2.5g以下（公式基準）。マッスルデリは2.5g以下がLOW FATで{cnt(LF, lambda x: F(x, 'salt') <= 2.5)}品・LOW CARBで{cnt(LC, lambda x: F(x, 'salt') <= 2.5)}品にとどまり、最大{fmt(max(F(x, 'salt') for x in MD))}gのメニューもあります",
            f"<strong>脂質</strong>：マッスルデリのLOW FATは最大{fmt(max(F(x, 'fat') for x in LF))}g。noshは中央値{med(NOSH, 'fat')}gで、メニューによる幅が大きくなっています",
        ]),
        h3("noshでたんぱく質が多いメニュー（多い順に6品）"),
        table(["メニュー名", "たんぱく質", "エネルギー", "糖質", "食塩相当量", "追加料金"], nosh_hp_rows),
        src(f"※{a(N_MENU, 'nosh 公式メニュー一覧')}の掲載値（{CHK}取得）。追加料金は一覧の表示（ボリューム・プレミアム）です。"),
        p("noshにも高たんぱくのメニューはありますが、公式に「高たんぱく」の分類はなく、一覧の並べ替え（たんぱく質）で探す形です。毎食30g以上をそろえたい場合は、メニュー選びに手間がかかります。"),

        h2("price", "料金と送料込みの1食あたり"),
        h3("nosh（通常価格・税込）"),
        table(["プラン", "1回の料金", "1食あたり", "送料込み1食（関東）"], nosh_rows),
        src(f"※出典: {a(N_PLAN, 'nosh 料金プラン')}・{a(N_LIFE, 'nosh ライフスタイル別プラン')}・{a(N_SHIP, '全国送料一覧表（2026年07月27日改訂版）')}（{CHK}確認）。送料は関東で4〜12食1,166円・20食1,386円（関西は1,023円・1,243円、北海道は1,713円・1,992円）。送料込みは当サイト計算。初回は1,500円OFF、nosh clubのランクが上がると1食の料金が下がります。"),
        h3("マッスルデリ（定期・2回目以降・税込）"),
        table(["プラン・食数", "1回の料金", "1食あたり", "送料込み1食"], md_rows),
        src(f"※出典: マッスルデリ {a(M_LEAN, 'LEAN')}・{a(M_MAIN, 'MAINTAIN')}・{a(M_GAIN, 'GAIN')}・{a(M_LC, 'LOW CARB')}の商品ページ（{CHK}確認）。商品ページの税抜価格に、公式サイトの計算方法（×1.08を四捨五入）を当てた税込額です。送料は5食1,200円・10食と15食1,420円（北海道・沖縄は1,530円〜）（{a(M_FAQ, 'よくあるご質問')}）。初回は25%OFF。送料込みは当サイト計算。"),
        p(f"送料込みの1食あたりは、noshが{yen(min((t + NOSH_SHIP_KANTO[n == 20]) / n for n, t in NOSH_PLANS))}〜{yen(max((t + NOSH_SHIP_KANTO[n == 20]) / n for n, t in NOSH_PLANS))}（関東）、マッスルデリが{yen(min(r for r in [(t + MD_SHIP[n]) / n for d in MD_PRICE.values() for n, t in d.items()]))}〜{yen(max(r for r in [(t + MD_SHIP[n]) / n for d in MD_PRICE.values() for n, t in d.items()]))}でした。マッスルデリはたんぱく質の量が多く、主食の入ったメニューもある分、1食の料金はnoshより高くなります。noshのおかずだけのメニューでは、ご飯を別に用意する手間や費用も含めて比べると判断しやすくなります。"),

        h2("rules", "メニューの選び方・配送・締切"),
        table(
            ["項目", "マッスルデリ", "nosh"],
            [
                ["メニューの決め方", "おまかせメニューコース／お好きなメニューコース", "毎回好きなメニューに変更できる"],
                ["苦手なメニュー", "おまかせは「苦手メニュー」を3個まで除外", "自分で選ぶため外せる"],
                ["スキップ", "1回分スキップ可（次回の配送が終わるまで再スキップ不可）", "マイページでスキップ可"],
                ["解約", "通常定期は縛りなし。継続割プランは回数未満の解約で違約金（直近1回分の商品代金）", "購入回数や期間の制約、解約金なし"],
                ["締切", "お届け予定日の5日前", "お届け日の4日前（一部地域は5日前）"],
            ],
        ),
        src(f"※出典: {a(M_FAQ, 'マッスルデリ よくあるご質問')}・{a(M_LEAN, '商品ページ')}／{a(N_SYS, 'nosh ご利用について')}・{a(N_PLAN, '料金プラン')}・{a(N_LAW, '特定商取引法に基づく表記')}（{CHK}確認）"),
        p(f"解約の細かな条件は{a('/articles/muscle-deli-kaiyaku/', 'マッスルデリの解約方法')}、noshの料金と送料の仕組みは{a('/articles/nosh-ryoukin-souryou/', 'noshの料金・送料')}で詳しく確認できます。"),

        h2("which", "どちらを選ぶか：目的別の目安"),
        table(
            ["目的", "目安", "理由（上の集計・公式の情報から）"],
            [
                ["毎食たんぱく質30g以上をとりたい", "マッスルデリ（LOW FAT）", f"LOW FAT {len(LF)}品すべてが30g以上。noshは{len(NOSH)}品中{NOSH_P30}品"],
                ["増量・筋肉量を増やしたい", "マッスルデリ（GAIN）", "GAINはたんぱく質50g以上・550〜750kcalの目標（公式）"],
                ["糖質を抑えたい", "nosh／マッスルデリ（LOW CARB）", f"noshは全品糖質30g以下。LOW CARBは糖質15g以下の目標で、掲載値は{rng(LC, 'sugar', 'g')}"],
                ["塩分を控えたい", "nosh", f"noshは全品2.5g以下。マッスルデリは2.5g超が{cnt(MD, lambda x: F(x, 'salt') > 2.5)}品"],
                ["1食の料金を抑えたい", "nosh", f"送料込み1食{yen(NOSH_MIN_SHIP)}〜（関東）。マッスルデリは{yen(MD_LEAN15_SHIP)}〜"],
                ["主食まで含めて1食を済ませたい", "マッスルデリ（LOW FAT）", f"丼・麺・パスタなど主食の入ったメニューが{LF_STAPLE}品。noshは{NOSH_STAPLE}品"],
            ],
        ),
        src("※目安は当サイトが上の集計と公式の情報から整理したもので、どちらかを推奨するものではありません。"),
        p(f"たんぱく質を重視する宅配食をほかにも比べたい場合は{a('/articles/kou-tanpaku-ranking/', '高たんぱくの宅配弁当の比較')}、メニュー全品の数値は{a('/articles/muscle-deli-menu/', 'マッスルデリのメニュー一覧')}にまとめています。"),
    ]),
    "faq": [
        ("マッスルデリとnoshはどちらがたんぱく質が多いですか？", f"マッスルデリです。LOW FAT（LEANプランの表示値）は{len(LF)}品すべてが30g以上でした。noshの主菜のおかず{len(NOSH)}品の中央値は{med(NOSH, 'protein')}gで、30g以上は{NOSH_P30}品でした（当サイト集計）。"),
        ("どちらが安いですか？", f"noshです。関東の送料込みで、noshは1食{yen(NOSH_MIN_SHIP)}〜、マッスルデリはLEAN 15食で{yen(MD_LEAN15_SHIP)}でした（定期・2回目以降の通常価格・当サイト計算）。"),
        ("糖質が少ないのはどちらですか？", f"noshは全メニューが糖質30g以下です。マッスルデリはLOW CARBプランなら糖質{rng(LC, 'sugar', 'g')}で、LOW FATはご飯などを含むため中央値{med(LF, 'sugar')}gでした。"),
        ("ご飯は付いていますか？", f"公式にすべてのメニューに主食が付くという記載はありません。メニュー名で数えると、マッスルデリのLOW FATは{len(LF)}品中{LF_STAPLE}品が丼・麺・パスタなど主食の入ったメニューで、noshはおかずが中心（炒飯・パスタ・グラタンなどは{len(NOSH)}品中{NOSH_STAPLE}品）でした。"),
        ("解約しやすいのはどちらですか？", "noshは購入回数や期間の制約、解約金がありません。マッスルデリも通常の定期は縛りなしですが、継続割プラン（6・12・24回）は回数に満たない解約で違約金がかかります。締切はnoshがお届け日の4〜5日前、マッスルデリが5日前です。"),
        ("マッスルデリと筋肉食堂DELIは同じですか？", "別のサービスです。この記事で比較しているのはマッスルデリ（Muscle Deli）です。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p("マッスルデリは、プランごとのたんぱく質量を軸にしたセットで、毎食30g以上のたんぱく質をそろえたい方に向いています。noshは全メニューが糖質30g以下・塩分2.5g以下のおかずで、1食の料金を抑えながら糖質・塩分を管理したい方に向いています。何を優先するか（たんぱく質・料金・糖質と塩分）で選ぶのが確実です。"),
        p("料金・送料・メニューは変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。"),
    ]),
    "related": [
        ("/articles/nosh-niteru-takushoku/", "ナッシュに似てる宅食（nosh の基準で6社を集計）"),
        ("/articles/muscle-deli-menu/", "マッスルデリのメニュー一覧"),
        ("/articles/muscle-deli-reviews/", "マッスルデリの口コミ・評判"),
        ("/articles/nosh-reviews/", "noshの口コミ・評判"),
        ("/articles/nosh-osusume-menu/", "ナッシュのおすすめメニュー"),
        ("/articles/kou-tanpaku-ranking/", "高たんぱくの宅配弁当の比較"),
    ],
}
