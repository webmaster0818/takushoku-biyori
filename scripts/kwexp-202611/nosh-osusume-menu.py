# ナッシュ おすすめメニュー（kwexp 2026-11-18「ナッシュ おすすめメニュー」）
# 公式 nosh.jp のメニュー一覧（/menu）の生HTMLに載っている100品（各メニューの栄養成分・食材の分類・「人気No.」の表示・追加料金・販売休止の表示）を
# nosh-menu-20261118.tsv に書き出し、当サイトが集計。食材の分類は一覧の絞り込みボタン（牛肉=1・豚肉=4・鶏肉=3・魚=2・その他=5）の対応で名前を付けた。
# 料金は /plan、栄養の基準は /nutritional-value を 2026-11-18 に確認
import csv
import statistics as st
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月18日"
TSV = Path(__file__).resolve().parent / "nosh-menu-20261118.tsv"
R = list(csv.DictReader(TSV.open(encoding="utf-8"), delimiter="\t"))
N_ALL = len(R)
M = [x for x in R if x["kind"] == "おかず" and not x["not_on_sale"]]
N_M = len(M)
STOP = [x["name"] for x in R if x["not_on_sale"]]
KIND = {k: sum(1 for x in R if x["kind"] == k) for k in ("おかず", "デザート", "朝食", "パン")}
F = lambda x, k: float(x[k])  # noqa: E731
RANKED = sorted([x for x in M if x["rank"]], key=lambda x: int(x["rank"]))
TOP_N = len(RANKED)
assert TOP_N == 20

MENU = "https://nosh.jp/menu"
PLAN = "https://nosh.jp/plan"
NUT = "https://nosh.jp/nutritional-value"


def fmt(v):
    return f"{v:g}"


def med(q, k):
    return fmt(round(st.median([F(x, k) for x in q]), 1))


def cnt(q, cond):
    return sum(1 for x in q if cond(x))


def extra(x):
    if x["extra_price"] == "0":
        return "−"
    label = "プレミアム" if x["premium"] else ("ボリューム" if x["volume"] else "")
    return f"＋{int(x['extra_price']):,}円（{label}）"


def g(x, k, unit):
    return f"{fmt(F(x, k))}{unit}"


def rk(x):
    return f"No.{x['rank']}" if x["rank"] else "−"


top_rows = [[f"No.{x['rank']}", x["name"], x["ingredient"], g(x, "kcal", "kcal"), g(x, "protein", "g"), g(x, "sugar", "g"), g(x, "salt", "g")] for x in RANKED]
TOP_PROT = [F(x, "protein") for x in RANKED]
TOP_ING = {k: cnt(RANKED, lambda x, k=k: x["ingredient"] == k) for k in ("牛肉", "豚肉", "鶏肉", "魚", "その他")}
TOP_HAMBURG = cnt(RANKED, lambda x: "ハンバーグ" in x["name"])


def pick(q, key, n, reverse=False):
    return sorted(q, key=lambda x: (F(x, key) * (-1 if reverse else 1), int(x["rank"] or 9999)))[:n]


hp = pick(M, "protein", 8, reverse=True)
hp_rows = [[x["name"], g(x, "protein", "g"), g(x, "kcal", "kcal"), g(x, "salt", "g"), extra(x), rk(x)] for x in hp]
ls = pick([x for x in M if F(x, "kcal") >= 250], "sugar", 8)
ls_rows = [[x["name"], g(x, "sugar", "g"), g(x, "protein", "g"), g(x, "kcal", "kcal"), extra(x), rk(x)] for x in ls]
lowsalt = pick([x for x in M if F(x, "kcal") >= 250 and F(x, "protein") >= 15], "salt", 8)
lowsalt_rows = [[x["name"], g(x, "salt", "g"), g(x, "protein", "g"), g(x, "kcal", "kcal"), extra(x), rk(x)] for x in lowsalt]
lowkcal = pick([x for x in M if F(x, "protein") >= 15], "kcal", 8)
lowkcal_rows = [[x["name"], g(x, "kcal", "kcal"), g(x, "protein", "g"), g(x, "sugar", "g"), extra(x), rk(x)] for x in lowkcal]

SUGAR_OK = cnt(M, lambda x: F(x, "sugar") <= 30)
SALT_OK = cnt(M, lambda x: F(x, "salt") <= 2.5)
SALT2 = cnt(M, lambda x: F(x, "salt") <= 2.0)
PROT20 = cnt(M, lambda x: F(x, "protein") >= 20)
EXTRA = [x for x in M if x["extra_price"] != "0"]
PREM = [x for x in EXTRA if x["premium"]]
VOL = [x for x in EXTRA if x["volume"]]

FISH = cnt(M, lambda x: x["ingredient"] == "魚")
FISH_PREM = cnt(PREM, lambda x: x["ingredient"] == "魚")
FISH_RANKED = cnt(RANKED, lambda x: x["ingredient"] == "魚")
ing_rows = []
for k in ("鶏肉", "牛肉", "豚肉", "魚", "その他"):
    q = [x for x in M if x["ingredient"] == k]
    ranked = [x for x in q if x["rank"]]
    best = min(ranked, key=lambda x: int(x["rank"])) if ranked else None
    ing_rows.append([k, f"{len(q)}品", f"{len(ranked)}品", f"{best['name']}（No.{best['rank']}）" if best else "−", f"{med(q, 'protein')}g"])

PLANS = [(6, 4318, 719), (8, 5157, 644), (10, 6206, 620), (12, 7344, 612)]
plan_rows = [[f"{n}食プラン", f"{t:,}円", f"{u}円"] for n, t, u in PLANS]


def full_table(q):
    q = sorted(q, key=lambda x: int(x["rank"] or 9999))
    return table(
        ["人気", "メニュー名", "食材", "エネルギー", "たんぱく質", "糖質", "食塩相当量", "追加料金"],
        [[rk(x), x["name"], x["ingredient"], g(x, "kcal", "kcal"), g(x, "protein", "g"), g(x, "sugar", "g"), g(x, "salt", "g"), extra(x)] for x in q],
    )


ARTICLE = {
    "slug": "nosh-osusume-menu",
    "component": "NoshOsusumeMenuPage",
    "name": "nosh（ナッシュ）",
    "published": "2026-11-18",
    "title": f"ナッシュ（nosh）のおすすめメニュー｜公式の人気No.1〜20と目的別（高たんぱく・低糖質・減塩）を{N_M}品の栄養成分で集計【2026年11月】",
    "description": f"nosh（ナッシュ）の公式メニュー一覧（{CHK}時点で注文できるおかず{N_M}品）を、一覧に表示される「人気No.」と栄養成分の掲載値で整理しました。人気No.1〜20の全品、たんぱく質の多いメニュー、糖質・塩分・カロリーの少ないメニュー、追加料金のあるメニューを当サイトで集計しています。",
    "keywords": "ナッシュ おすすめメニュー, nosh おすすめメニュー, ナッシュ 人気メニュー, ナッシュ メニュー ランキング, ナッシュ 高たんぱく, ナッシュ 低糖質, ナッシュ メニュー",
    "cat": "選び方・使い方・サービス紹介",
    "cat_id": "guide",
    "crumb": "ナッシュのおすすめメニュー",
    "official_url": "https://nosh.jp/",
    "cta": "nosh 公式サイトを見る",
    "summary_title": "ナッシュのおすすめメニューの要点",
    "point_labels": ("◎ 集計でわかったこと", "△ 注意したい点"),
    "toc": [
        ("ranking", f"公式の「人気No.」1〜{TOP_N}"),
        ("standard", "全品「糖質30g・塩分2.5g以下」の基準と実際の値"),
        ("purpose", "目的別のおすすめ（当サイト集計）"),
        ("ingredient", "食材別の品数と人気の最上位"),
        ("extra", "追加料金のあるメニュー（プレミアム・ボリューム）"),
        ("price", "料金：1食612円〜（12食プラン）"),
        ("list", f"注文できるおかず{N_M}品の一覧"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            nosh（ナッシュ）は、冷凍のおかずを好きな組み合わせで定期配送する宅配食です。メニューを自分で選ぶ仕組みのため、初めての注文では「どれを選べばよいか」で迷いやすいサービスです。
          </p>
          <p className="mb-3">
            この記事では、{CHK}に公式のメニュー一覧ページを取得し、<strong>注文できるおかず{N_M}品</strong>について、一覧に表示される「人気No.」と、各メニューの栄養成分（エネルギー・たんぱく質・糖質・食塩相当量など）を当サイトで集計しました。「おすすめ」は当サイトの好みではなく、<strong>公式の人気表示と、公式の掲載値から計算できる条件</strong>だけで選んでいます。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>''',
    "summary_box": f"公式のメニュー一覧で人気No.1〜3として表示されているのは、{RANKED[0]['name']}・{RANKED[1]['name']}・{RANKED[2]['name']}です。人気No.1〜{TOP_N}のうち{TOP_HAMBURG}品がハンバーグ系でした。注文できるおかず{N_M}品はすべて公式基準の「糖質30g以下・塩分2.5g以下」に収まっており、たんぱく質20g以上は{PROT20}品、食塩相当量2.0g以下は{SALT2}品でした（{CHK}・当サイト集計）。",
    "good_points": [
        f"おかず{N_M}品すべてが糖質30g・塩分2.5g以下",
        "全メニューの栄養成分が一覧に掲載されている",
        "高たんぱく・低糖質・減塩の条件で選び分けられる",
    ],
    "caution_points": [
        f"追加料金のあるメニューが{len(EXTRA)}品ある",
        f"食塩相当量の中央値は{med(M, 'salt')}gで、基準の上限に近い",
        "人気No.の算出方法は公式に記載がない",
    ],
    "body_before_reviews": "\n".join([
        h2("ranking", f"公式の「人気No.」1〜{TOP_N}"),
        p(f"公式のメニュー一覧では、一部のメニューの写真に「人気No.1」〜「人気No.{TOP_N}」の表示が付いています。{CHK}時点の表示をそのまま並べると次のとおりです。"),
        table(["人気", "メニュー名", "食材", "エネルギー", "たんぱく質", "糖質", "食塩相当量"], top_rows),
        src(f"※出典: {a(MENU, 'nosh メニュー一覧')}（{CHK}取得）。食材は一覧の絞り込み（牛肉・豚肉・鶏肉・魚・その他）の分類です。公式は人気No.の算出方法（期間・件数）を公開していません。"),
        p(f"人気No.1〜{TOP_N}のうち{TOP_HAMBURG}品がハンバーグ系で、食材別では牛肉{TOP_ING['牛肉']}品・鶏肉{TOP_ING['鶏肉']}品・豚肉{TOP_ING['豚肉']}品・魚{TOP_ING['魚']}品・その他{TOP_ING['その他']}品でした。たんぱく質は{fmt(min(TOP_PROT))}〜{fmt(max(TOP_PROT))}gと幅があり、人気上位でも栄養の性格はメニューごとに違います。人気No.は味の評価を直接示すものではないため、味の評判は{a('/articles/nosh-reviews/', 'nosh（ナッシュ）の口コミ・評判')}もあわせて確認してください。"),

        h2("standard", "全品「糖質30g・塩分2.5g以下」の基準と実際の値"),
        p("nosh は公式サイトで、全てのメニューを「糖質30g以下」「塩分2.5g以下」で生産していると説明しています。一覧の掲載値で照合した結果は次のとおりです。"),
        table(
            ["項目", "結果（当サイト集計）"],
            [
                ["注文できるおかず", f"{N_M}品"],
                ["糖質30g以下", f"{SUGAR_OK}品（最大{fmt(max(F(x, 'sugar') for x in M))}g）"],
                ["食塩相当量2.5g以下", f"{SALT_OK}品（最大{fmt(max(F(x, 'salt') for x in M))}g）"],
                ["糖質の中央値", f"{med(M, 'sugar')}g"],
                ["食塩相当量の中央値", f"{med(M, 'salt')}g"],
                ["食塩相当量2.0g以下", f"{SALT2}品"],
            ],
        ),
        src(f"※出典: {a(NUT, 'nosh 糖質30g・塩分2.5g以下へのこだわり')}・{a(MENU, 'nosh メニュー一覧')}（{CHK}確認）。当サイトが掲載値で照合しました。"),
        p(f"基準はすべてのメニューで守られていましたが、食塩相当量は中央値が{med(M, 'salt')}gで、多くのメニューが上限の2.5gに近い値です。塩分を控えたい方は、下の「塩分が少ないメニュー」の表のように、2.0g前後のメニューを意識して選ぶと差が出ます。"),

        h2("purpose", "目的別のおすすめ（当サイト集計）"),
        h3("たんぱく質が多いメニュー（多い順に8品）"),
        table(["メニュー名", "たんぱく質", "エネルギー", "食塩相当量", "追加料金", "人気"], hp_rows),
        h3("糖質が少ないメニュー（250kcal以上から少ない順に8品）"),
        table(["メニュー名", "糖質", "たんぱく質", "エネルギー", "追加料金", "人気"], ls_rows),
        h3("塩分が少ないメニュー（250kcal以上・たんぱく質15g以上から少ない順に8品）"),
        table(["メニュー名", "食塩相当量", "たんぱく質", "エネルギー", "追加料金", "人気"], lowsalt_rows),
        h3("カロリーが低いメニュー（たんぱく質15g以上から低い順に8品）"),
        table(["メニュー名", "エネルギー", "たんぱく質", "糖質", "追加料金", "人気"], lowkcal_rows),
        src(f"※{a(MENU, 'nosh メニュー一覧')}の掲載値（{CHK}取得）を当サイトが並べ替え。同じ値のときは人気No.の上位を先にしています。「人気」の「−」は人気No.の表示がないメニューです。"),
        p(f"注文できるおかず全体の中央値は、エネルギー{med(M, 'kcal')}kcal・たんぱく質{med(M, 'protein')}g・糖質{med(M, 'sugar')}g・食塩相当量{med(M, 'salt')}gでした。糖質と塩分の表は、副菜のような小さいメニューが並ばないよう250kcal以上（塩分はたんぱく質15g以上も）に絞っています。高たんぱくのメニューには追加料金のある「ボリューム」系も含まれるため、料金も合わせて確認してください。"),

        h2("ingredient", "食材別の品数と人気の最上位"),
        table(["食材（公式の分類）", "品数", "うち人気No.表示", "人気の最上位", "たんぱく質の中央値"], ing_rows),
        src(f"※{a(MENU, 'nosh メニュー一覧')}の絞り込みの分類（{CHK}取得）を当サイトが集計。"),
        p(f"品数がいちばん多いのは鶏肉で、たんぱく質の中央値も高めです。魚は{FISH}品のうち{FISH_PREM}品が追加料金のある「プレミアム」で、人気No.の表示があるのは{FISH_RANKED}品でした。牛肉が苦手な方は「食材フィルタ」で除外してから選ぶと効率的です。"),

        h2("extra", "追加料金のあるメニュー（プレミアム・ボリューム）"),
        p(f"{CHK}時点で、注文できるおかず{N_M}品のうち{len(EXTRA)}品に追加料金があります。プレミアム{len(PREM)}品（＋250円・＋500円）と、量を増やしたボリューム{len(VOL)}品（＋130円・＋350円）です。"),
        table(
            ["メニュー名", "区分", "追加料金", "エネルギー", "たんぱく質"],
            [[x["name"], "プレミアム" if x["premium"] else "ボリューム", f"＋{int(x['extra_price']):,}円", g(x, "kcal", "kcal"), g(x, "protein", "g")] for x in sorted(EXTRA, key=lambda x: (not x["premium"], -int(x["extra_price"])))],
        ),
        src(f"※出典: {a(MENU, 'nosh メニュー一覧')}（{CHK}取得）の追加料金の表示。期間限定の表示があるメニューも含みます。"),
        ul([
            f"人気No.1〜{TOP_N}には追加料金のあるメニューは含まれていません（{CHK}時点）",
            f"一覧には、おかずのほかにデザート{KIND['デザート']}品・朝食{KIND['朝食']}品・パン{KIND['パン']}品も並んでいます（この記事の集計からは除外）",
            f"販売休止の表示があるメニュー（{'、'.join(STOP)}）は集計から除いています",
        ]),

        h2("price", "料金：1食612円〜（12食プラン）"),
        table(["プラン（1回のお届け）", "料金（税込）", "1食あたり（公式）"], plan_rows),
        src(f"※出典: {a(PLAN, 'nosh プラン（食数）選択')}（{CHK}確認）。送料は別途かかり、地域と食数で異なります。nosh club会員は累計購入数に応じて1食最安492円（税込）になります。"),
        p(f"追加料金のあるメニューを選んだ場合は、上の1食あたりの料金に追加料金が加わります。送料・初回割引・nosh clubの仕組みは{a('/articles/nosh-ryoukin-souryou/', 'nosh（ナッシュ）の料金・送料の仕組み')}と{a('/articles/nosh-coupon/', 'nosh（ナッシュ）のクーポン・割引')}で整理しています。"),

        h2("list", f"注文できるおかず{N_M}品の一覧"),
        p("人気No.の表示があるメニューを先に、その後は公式の一覧の並び順で並べています。"),
        full_table(M),
        src(f"※出典: {a(MENU, 'nosh メニュー一覧')}（{CHK}取得）。メニューは入れ替わるため、注文の前に公式の一覧でご確認ください。"),
        f'        <OfficialButton>nosh 公式サイトを見る</OfficialButton>',
    ]),
    "faq": [
        ("ナッシュで人気のメニューは？", f"{CHK}時点の公式メニュー一覧では、{RANKED[0]['name']}が人気No.1、{RANKED[1]['name']}がNo.2、{RANKED[2]['name']}がNo.3と表示されていました。"),
        ("ナッシュのメニューは何種類ありますか？", f"{CHK}に取得した公式のメニュー一覧には{N_ALL}品が掲載され、そのうち販売休止の表示がなく注文できるおかずは{N_M}品でした（ほかにデザート{KIND['デザート']}品・朝食{KIND['朝食']}品・パン{KIND['パン']}品）。"),
        ("たんぱく質が多いメニューは？", f"{hp[0]['name']}（{g(hp[0], 'protein', 'g')}）が最も多く、たんぱく質20g以上のメニューは{PROT20}品でした（当サイト集計）。"),
        ("塩分が少ないメニューはどう選べばよいですか？", f"全メニューが塩分2.5g以下ですが、中央値は{med(M, 'salt')}gで上限に近い値です。2.0g以下のメニューは{SALT2}品あり、記事内の「塩分が少ないメニュー」の表から選ぶと差が出ます。"),
        ("追加料金がかかるメニューはありますか？", f"あります。{CHK}時点でプレミアム{len(PREM)}品（＋250円・＋500円）とボリューム{len(VOL)}品（＋130円・＋350円）の計{len(EXTRA)}品です。人気No.1〜{TOP_N}には追加料金のあるメニューは含まれていませんでした。"),
        ("1食あたりの料金はいくらですか？", "6食プラン719円・8食プラン644円・10食プラン620円・12食プラン612円（税込・送料別）です。nosh club会員は累計購入数に応じて1食最安492円（税込）になります。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p(f"nosh の公式の人気No.では、ハンバーグ系を中心とした定番のおかずが上位に並び、人気No.1〜{TOP_N}はすべて追加料金なしで選べました。おかず{N_M}品はすべて糖質30g・塩分2.5g以下に収まっているため、基準を気にせず選べる一方、塩分は上限に近いメニューが多めです。量やたんぱく質を重視するなら鶏肉やボリューム系、塩分を控えたいなら食塩相当量2.0g前後のメニュー、と目的に合わせて選ぶと失敗が減ります。"),
        p("メニュー・栄養成分・人気の表示・料金は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。"),
    ]),
    "related": [
        ("/articles/nosh-niteru-takushoku/", "ナッシュに似てる宅食（nosh の基準で6社を集計）"),
        ("/articles/nosh-reviews/", "nosh（ナッシュ）の口コミ・評判"),
        ("/articles/nosh-ryoukin-souryou/", "nosh（ナッシュ）の料金・送料の仕組み"),
        ("/articles/nosh-shiharai-houhou/", "nosh（ナッシュ）の支払い方法"),
        ("/articles/muscle-deli-nosh-hikaku/", "マッスルデリとナッシュの比較"),
        ("/articles/mitsuboshi-osusume-menu/", "三ツ星ファームのおすすめメニュー"),
    ],
}
