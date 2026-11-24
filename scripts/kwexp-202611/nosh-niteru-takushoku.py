# ナッシュ 似てる（kwexp 2026-11-19「ナッシュ 似てる」）
# nosh の基準「全メニュー糖質30g以下・塩分2.5g以下」（公式 /nutritional-value・2026-11-19 確認）を、
# 当サイトが kwexp で公式メニュー一覧から書き出した各社の全メニューの栄養成分（このフォルダの *-menu-*.tsv・取得日は各ファイル名）に当てはめて集計。
# 糖質を掲載している5社（nosh・三ツ星ファーム・マッスルデリ・ライフミール・わんまいる＝tsv の carb 列は糖質）と、炭水化物のみ掲載の2社（DELIPICKS・ワタミの宅食ダイレクト）を分けて扱う
import csv
from pathlib import Path

from kwexp_util import table, src, p, h2, a, ul

CHK = "2026年11月19日"
HERE = Path(__file__).resolve().parent
NUT = "https://nosh.jp/nutritional-value"
NOSH_MENU = "https://nosh.jp/menu"
MITSU_MENU = "https://mitsuboshifarm.jp/menus"
MD_LC = "https://muscledeli.jp/shop/product_categories/md-lowcarb"
MD_LF = "https://muscledeli.jp/shop/product_categories/md-lowfat"
LM_LIST = "https://l-meal.com/products/list"
DP_LIST = "https://deli-picks.com/collection/"
WD_MENU3 = "https://www.watami-takushoku-direct.jp/shop/sets/2?menu_view=true"
WD_MENU5 = "https://www.watami-takushoku-direct.jp/shop/sets/3?menu_view=true"
WM_MENU = "https://www.onemile.jp/fs/kenko-dinner-menu"


def load(name):
    return list(csv.DictReader((HERE / name).open(encoding="utf-8"), delimiter="\t"))


def fl(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return None


def stat(rows, c, s="salt"):
    rs = [x for x in rows if fl(x[c]) is not None and fl(x[s]) is not None]
    c30 = sum(1 for x in rs if fl(x[c]) <= 30)
    s25 = sum(1 for x in rs if fl(x[s]) <= 2.5)
    both = sum(1 for x in rs if fl(x[c]) <= 30 and fl(x[s]) <= 2.5)
    return {"n": len(rows), "m": len(rs), "c30": c30, "s25": s25, "both": both}


def pct(k, n):
    return f"{k}品（{round(k * 100 / n)}%）" if n else "−"


NOSH = [x for x in load("nosh-menu-20261118.tsv") if x["kind"] == "おかず" and not x["not_on_sale"]]
MITSU = [x for x in load("mitsuboshi-menu-20261117.tsv")
         if x["can_purchase"] == "1" and not set(x["categories"].split("|")) & {"ドリンク", "スイーツ", "パン", "ミールキット"}]
MITSU_STD = [x for x in MITSU if "三ツ星基準" in x["categories"].split("|")]
MD = load("muscle-deli-menu-20261116.tsv")
MD_LCR = [x for x in MD if x["category"] == "LOW CARB"]
MD_LFR = [x for x in MD if x["category"] == "LOW FAT"]
LM = load("lifemeal-menu-20261117.tsv")
LM_S = [x for x in LM if x["standard"] in ("糖質30g基準", "糖質15g基準")]
LM_R = [x for x in LM if x["standard"] == "ご飯付きセット"]
DP = load("delipicks-menu-20261114.tsv")
WD = load("watami-direct-menu-20261118.tsv")
WD3 = [x for x in WD if x["category"] == "三菜"]
WD5 = [x for x in WD if x["category"] == "五菜"]
WM = load("wanmairu-menu-20261117.tsv")

S = {
    "nosh": stat(NOSH, "sugar"),
    "mitsu": stat(MITSU, "sugar"),
    "mitsu_std": stat(MITSU_STD, "sugar"),
    "md_lc": stat(MD_LCR, "sugar"),
    "md_lf": stat(MD_LFR, "sugar"),
    "lm_s": stat(LM_S, "sugar"),
    "lm_r": stat(LM_R, "sugar"),
    "dp": stat(DP, "炭水化物g", "食塩相当量g"),
    "wd3": stat(WD3, "carb"),
    "wd5": stat(WD5, "carb"),
    "wm": stat(WM, "carb"),  # わんまいるの tsv の carb 列は糖質
}


def row(label, key, date):
    s = S[key]
    return [label, f"{s['m']}品", pct(s["c30"], s["m"]), pct(s["s25"], s["m"]), pct(s["both"], s["m"]), date]


SUGAR_ROWS = [
    row("nosh（おかず）", "nosh", "11月18日"),
    row("三ツ星ファーム（お弁当・丼の具・スープ等）", "mitsu", "11月17日"),
    row("　うち「三ツ星基準」の分類", "mitsu_std", "11月17日"),
    row("ライフミール（糖質30g基準・15g基準）", "lm_s", "11月17日"),
    row("　ライフミール（ご飯付きセット）", "lm_r", "11月17日"),
    row("マッスルデリ（LOW CARB）", "md_lc", "11月16日"),
    row("マッスルデリ（LOW FAT）", "md_lf", "11月16日"),
    row("わんまいる（健幸ディナー・美食弁当の5週分）", "wm", "11月17日"),
]
CARB_ROWS = [
    row("ワタミの宅食ダイレクト（いつでも三菜）", "wd3", "11月18日"),
    row("ワタミの宅食ダイレクト（いつでも五菜）", "wd5", "11月18日"),
    row("DELIPICKS（掲載メニュー）", "dp", "11月14日"),
]
MITSU_NOSUGAR = S["mitsu"]["n"] - S["mitsu"]["m"]
LM_ALL = round((S["lm_s"]["both"]) * 100 / S["lm_s"]["m"])
MITSU_PCT = round(S["mitsu"]["both"] * 100 / S["mitsu"]["m"])
WD3_PCT = round(S["wd3"]["both"] * 100 / S["wd3"]["m"])

ARTICLE = {
    "slug": "nosh-niteru-takushoku",
    "component": "NoshNiteruTakushokuPage",
    "name": "nosh（ナッシュ）",
    "published": "2026-11-19",
    "title": "ナッシュに似てる宅食はどこ？nosh の「糖質30g・塩分2.5g以下」を6社のメニューに当てはめて集計【2026年11月】",
    "description": "nosh（ナッシュ）に似た宅食を探す方向けに、nosh の公式基準「全メニュー糖質30g以下・塩分2.5g以下」を、三ツ星ファーム・ライフミール・マッスルデリなど6社の公式メニュー一覧の栄養成分に当てはめ、基準を満たすメニューの割合を当サイトで集計しました。",
    "keywords": "ナッシュ 似てる, nosh 似てる, ナッシュ みたいな宅食, ナッシュ 似たサービス, ナッシュ 代わり, ナッシュ 他社, nosh 比較",
    "cat": "比較・料金データ",
    "cat_id": "hikaku",
    "crumb": "ナッシュに似てる宅食",
    "official_url": None,
    "ad_note": "※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。",
    "summary_title": "ナッシュに似てる宅食の要点",
    "point_labels": ("◎ 集計で分かったこと", "△ 注意したい点"),
    "toc": [
        ("rule", "nosh の基準：全メニュー糖質30g・塩分2.5g以下"),
        ("sugar", "糖質を掲載している5社の集計"),
        ("carb", "炭水化物で掲載している2社の集計（参考）"),
        ("closest", "基準で見て nosh に近いのは：ライフミール・三ツ星ファーム"),
        ("diff", "似ていない点：設計の軸が違うサービス"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            nosh（ナッシュ）に似た宅食を探すとき、多くの人が気にするのは「冷凍でレンジ調理」「メニューを選べる」に加えて、<strong>糖質と塩分が抑えられているか</strong>です。nosh は公式サイトで、全てのメニューを「糖質30g以下」「塩分2.5g以下」で生産していると説明しています。
          </p>
          <p className="mb-3">
            そこでこの記事では、nosh の基準を物差しにして、当サイトが各社の公式メニュー一覧から書き出した全メニューの栄養成分（2026年11月14日〜18日取得）に当てはめ、<strong>基準を満たすメニューが何割あるか</strong>を、nosh と他社6社で集計しました。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>''',
    "summary_box": f"nosh の基準（糖質30g以下・塩分2.5g以下）を満たすメニューの割合は、ライフミールの糖質30g基準・15g基準のお弁当で{LM_ALL}%、三ツ星ファームのお弁当類で{MITSU_PCT}%（糖質を掲載している品のうち）でした。マッスルデリは低脂質・高たんぱくを軸にしており、LOW FATで基準を満たすのは{S['md_lf']['both']}品でした。ワタミの宅食ダイレクトとDELIPICKSは糖質を掲載していないため、炭水化物30g以下で数えた参考値を示しています。",
    "good_points": [
        f"ライフミールの糖質基準のお弁当は{LM_ALL}%が nosh の基準を満たす",
        f"三ツ星ファームは糖質掲載品の{MITSU_PCT}%が基準内",
        f"ワタミの宅食ダイレクト三菜は炭水化物で数えても{WD3_PCT}%が基準内",
    ],
    "caution_points": [
        "マッスルデリは塩分2.5g超のメニューが多い",
        "糖質を掲載していない会社は炭水化物での参考値",
        "メニューは毎週〜毎月入れ替わる",
    ],
    "body_before_reviews": "\n".join([
        h2("rule", "nosh の基準：全メニュー糖質30g・塩分2.5g以下"),
        p(f"nosh の公式ページ「糖質30g・塩分2.5g以下へのこだわり」には「全てのメニューが糖質30g以下で生産されています」「全てのメニューが塩分2.5g以下で生産されています」とあります（{CHK}確認）。当サイトが11月18日に公式メニュー一覧から書き出したおかず{S['nosh']['m']}品でも、全品が両方の基準を満たしていました。"),
        src(f"※出典: {a(NUT, 'nosh 糖質30g・塩分2.5g以下へのこだわり')}（{CHK}確認）・{a(NOSH_MENU, 'nosh メニュー一覧')}（2026年11月18日取得）"),
        p(f"同じ物差しで他社のメニューを数えれば、「どこまで nosh に近い食事になるか」を数字で比べられます。メニューの詳しい内容は{a('/articles/nosh-osusume-menu/', 'nosh のおすすめメニュー')}で整理しています。"),

        h2("sugar", "糖質を掲載している5社の集計"),
        table(["サービス（対象）", "集計した品数", "糖質30g以下", "塩分2.5g以下", "両方を満たす", "取得日"], SUGAR_ROWS),
        src(f"※出典: {a(NOSH_MENU, 'nosh メニュー一覧')}・{a(MITSU_MENU, '三ツ星ファーム メニュー一覧')}・{a(LM_LIST, 'ライフミール 商品一覧')}・{a(MD_LC, 'マッスルデリ LOW CARB')}・{a(MD_LF, 'LOW FAT')}・{a(WM_MENU, 'わんまいる 献立ページ')}の各メニューの栄養成分（取得日は表のとおり・2026年）を当サイトが集計。三ツ星ファームは注文できる品のうちドリンク・スイーツ・パン・ミールキットを除いた{S['mitsu']['n']}品のうち、糖質の掲載がある{S['mitsu']['m']}品で数えています（{MITSU_NOSUGAR}品は糖質の掲載なし）。nosh はデザート・パン・朝食・販売休止を除いたおかずです。"),
        ul([
            f"ライフミールは「糖質30g基準」「糖質15g基準」という規格名のとおり、該当{S['lm_s']['m']}品のうち{S['lm_s']['both']}品が両方を満たしていました。ご飯付きセットは糖質30g以下が{S['lm_r']['c30']}品で、主食込みの別の使い方です",
            f"三ツ星ファームは独自の「三ツ星基準」（350kcal以下・糖質25g以下・たんぱく質15g以上）を持ち、その分類の{S['mitsu_std']['m']}品では{S['mitsu_std']['both']}品が nosh の基準も満たしていました。分類外にはパスタ・丼の具など糖質の多い品もあります",
            f"マッスルデリは LOW CARB の{S['md_lc']['m']}品すべてが糖質30g以下ですが、塩分2.5g以下は{S['md_lc']['s25']}品でした。LOW FAT は主食を含むメニューが多く、糖質30g以下は{S['md_lf']['c30']}品です",
        ]),

        h2("carb", "炭水化物で掲載している2社の集計（参考）"),
        p("次の2社は公式の一覧に糖質ではなく炭水化物を掲載しています。炭水化物は糖質に食物繊維を加えた値で、糖質より必ず大きくなります。そのため「炭水化物30g以下」で数えた品数は、糖質30g以下の品数より少なく出る（厳しめの）参考値です。"),
        table(["サービス（対象）", "集計した品数", "炭水化物30g以下", "塩分2.5g以下", "両方を満たす", "取得日"], CARB_ROWS),
        src(f"※出典: {a(WD_MENU3, 'ワタミの宅食ダイレクト いつでも三菜')}・{a(WD_MENU5, 'いつでも五菜')}のメニュー画面・{a(DP_LIST, 'DELIPICKS 公式メニュー一覧')}の栄養成分（取得日は表のとおり・2026年）を当サイトが集計。"),
        p(f"ワタミの宅食ダイレクトのいつでも三菜は、炭水化物で数えても{S['wd3']['both']}品が基準内でした。いつでも三菜はおかずのみのセットで、主食は付きません。DELIPICKS はパスタ・ご飯ものやグラタンなど主食を含むメニューがあり、両方を満たすのは{S['dp']['both']}品でした。"),

        h2("closest", "基準で見て nosh に近いのは：ライフミール・三ツ星ファーム"),
        table(
            ["サービス", "nosh と似ている点（集計から）", "違う点"],
            [
                ["ライフミール", f"糖質30g・15g基準の{S['lm_s']['m']}品が全品 nosh の基準内", "規格（糖質30g・15g・ご飯付き）を選んで注文する"],
                ["三ツ星ファーム", f"糖質掲載品の{MITSU_PCT}%が基準内。独自の「三ツ星基準」はさらに厳しい糖質25g以下", "パスタ・丼の具など基準外の品も同じ一覧に並ぶ"],
                ["ワタミの宅食ダイレクト", f"三菜は炭水化物で数えても{WD3_PCT}%が基準内", "糖質の掲載がない。五菜は塩分2.5g超の品が増える"],
            ],
        ),
        src("※当サイトの集計にもとづく比較です。料金・送料・定期の条件は各社で異なるため、下の関連記事や各社の公式サイトで確認してください。"),
        p(f"料金と送料込みの1食あたりは{a('/articles/takushoku-ryokin-hakusho/', '宅食料金白書')}、nosh と三ツ星ファーム・ウェルネスダイニングの比較は{a('/articles/nosh-vs-mitsuboshi-vs-wellness/', '3社比較')}で整理しています。メニューごとの値は{a('/articles/lifemeal-menu/', 'ライフミールのメニュー')}・{a('/articles/mitsuboshi-osusume-menu/', '三ツ星ファームのおすすめメニュー')}・{a('/articles/watami-direct-menu/', 'ワタミの宅食ダイレクトのメニュー')}にあります。"),

        h2("diff", "似ていない点：設計の軸が違うサービス"),
        ul([
            f"マッスルデリは糖質・塩分ではなく、たんぱく質量と脂質を軸に設計されています。LOW FAT で nosh の基準を両方満たすのは{S['md_lf']['both']}品でした（{a('/articles/muscle-deli-nosh-hikaku/', 'マッスルデリと nosh の比較')}）",
            f"わんまいるはメニューが週替わりで決まり、自分で選ぶことはできません（公式FAQ）。基準を満たすのは{S['wm']['both']}食／{S['wm']['m']}食でした",
            "nosh の基準は「上限」です。たとえば塩分は2.5g以下でも、上限に近い値のメニューが多くあります。塩分を控えたい方は、どのサービスでも個々のメニューの値を見て選ぶ必要があります",
        ]),
    ]),
    "faq": [
        ("ナッシュに一番似ている宅食はどこですか？", f"nosh の基準（糖質30g以下・塩分2.5g以下）で数えると、ライフミールの糖質30g基準・15g基準のお弁当が{LM_ALL}%、三ツ星ファームが{MITSU_PCT}%（糖質掲載品のうち）で、基準の面では最も近い結果でした（当サイト集計・2026年11月）。"),
        ("nosh の基準とは何ですか？", "nosh は公式サイトで、全てのメニューを糖質30g以下・塩分2.5g以下で生産していると説明しています。2026年11月18日に当サイトが確認したおかずは全品が基準内でした。"),
        ("マッスルデリは nosh に似ていますか？", f"冷凍の宅配弁当という点は同じですが、マッスルデリはたんぱく質を軸にした設計です。LOW CARB は全品が糖質30g以下ですが、塩分2.5g以下は{S['md_lc']['s25']}品／{S['md_lc']['m']}品でした。"),
        ("糖質が書かれていない会社はどう比べればいいですか？", "炭水化物は糖質に食物繊維を加えた値なので、炭水化物が30g以下なら糖質も30g以下です。この記事では炭水化物30g以下で数えた参考値を示しています。"),
        ("集計はいつのデータですか？", "各社の公式メニュー一覧を2026年11月14日〜18日に当サイトが取得したデータです。メニューは入れ替わるため、注文前に公式サイトで確認してください。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p(f"nosh に似た宅食を「糖質30g以下・塩分2.5g以下」という nosh 自身の基準で比べると、ライフミールの糖質基準のお弁当（{LM_ALL}%）と三ツ星ファーム（{MITSU_PCT}%）が最も近い結果でした。ワタミの宅食ダイレクトのいつでも三菜も、炭水化物で数えて{WD3_PCT}%が基準内です。マッスルデリやわんまいるは設計の軸が異なり、基準を満たすメニューは一部です。味や料金も含めて選ぶ場合は、各社の口コミ・料金の記事もあわせて確認してください。"),
        p("メニュー・栄養成分は変わることがあります。ご利用前に、各社の公式サイトで最新の情報をご確認ください。"),
    ]),
    "related": [
        ("/articles/nosh-reviews/", "nosh（ナッシュ）の口コミ・評判"),
        ("/articles/nosh-vs-mitsuboshi-vs-wellness/", "nosh・三ツ星ファーム・ウェルネスダイニング 3社比較"),
        ("/articles/muscle-deli-nosh-hikaku/", "マッスルデリと nosh の比較"),
        ("/articles/toushitsu-seigen-osusume/", "糖質制限におすすめの宅配弁当"),
        ("/articles/meals-kuchikomi/", "ミールズ（Meals）の口コミ・評判"),
    ],
}
