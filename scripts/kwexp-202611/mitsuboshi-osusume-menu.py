# 三ツ星ファーム おすすめメニュー（kwexp 2026-11-17「三ツ星ファーム おすすめメニュー」）
# 公式 mitsuboshifarm.jp のメニュー一覧（/menus）が読み込むメニューデータ（定期便メニュー159品・栄養成分・カテゴリ・購入可否）と
# 並べ替え「人気順」の順位データ（/data/ranking.json）、一覧の注記「三ツ星基準とは…」を 2026-11-17 に取得。
# 集計は mitsuboshi-menu-20261117.tsv（取得したデータを書き出したもの）から当サイトが計算
import csv
import statistics as st
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月17日"
TSV = Path(__file__).resolve().parent / "mitsuboshi-menu-20261117.tsv"
R = list(csv.DictReader(TSV.open(encoding="utf-8"), delimiter="\t"))
for _x in R:
    _x["name"] = " ".join(_x["name"].replace("\u3000", " ").split())
P = [x for x in R if x["can_purchase"] == "1"]
OTHER_KIND = {"スイーツ", "ドリンク", "パン", "ミールキット"}
M = [x for x in P if not (set(x["categories"].split("|")) & OTHER_KIND)]
N_ALL, N_P, N_M = len(R), len(P), len(M)
STD = [x for x in M if "三ツ星基準" in x["categories"].split("|")]
F = lambda x, k: float(x[k])  # noqa: E731
RANKED = sorted([x for x in M if x["rank"]], key=lambda x: int(x["rank"]))

MENUS = "https://mitsuboshifarm.jp/menus"
TOP = "https://mitsuboshifarm.jp/"
# 提携済み（既存の mitsuboshi-farm-reviews と同じ計測リンクを転記。開いていない）
AFF = "https://t.felmat.net/fmcl?ak=M5863L.1.M98647P.B1357443"


def fmt(v):
    return f"{v:g}"


def med(q, k):
    v = [F(x, k) for x in q if x[k]]
    return fmt(round(st.median(v), 1))


def rng(q, k, unit):
    v = [F(x, k) for x in q if x[k]]
    return f"{fmt(min(v))}〜{fmt(max(v))}{unit}（中央値 {fmt(round(st.median(v), 1))}{unit}）"


def cnt(q, cond):
    return sum(1 for x in q if cond(x))


def std_mark(x):
    return "○" if "三ツ星基準" in x["categories"].split("|") else "−"


def odd(x):
    # 公式の掲載値で糖質が炭水化物を上回っているもの（誤記の可能性）
    return bool(x["sugar"] and x["carb"] and F(x, "sugar") > F(x, "carb"))


def g(x, k, unit):
    if not x[k]:
        return "記載なし"
    return f"{fmt(F(x, k))}{unit}" + ("※" if k == "sugar" and odd(x) else "")


# 公式「人気順」上位（購入できるおかずのみ。ミールキット・スイーツ・パン・ドリンクを除く）
TOP_N = 15
top_rows = [[x["rank"] + "位", x["name"], g(x, "kcal", "kcal"), g(x, "protein", "g"), g(x, "sugar", "g"), g(x, "salt", "g"), std_mark(x)]
            for i, x in enumerate(RANKED[:TOP_N])]
TOP_STD = cnt(RANKED[:TOP_N], lambda x: std_mark(x) == "○")
TOP_PROT = [F(x, "protein") for x in RANKED[:TOP_N]]


def pick(q, key, n, reverse=False):
    q = [x for x in q if x[key]]
    return sorted(q, key=lambda x: (F(x, key) * (-1 if reverse else 1), int(x["rank"] or 9999)))[:n]


hp = pick(M, "protein", 8, reverse=True)
hp_rows = [[x["name"], g(x, "protein", "g"), g(x, "kcal", "kcal"), g(x, "salt", "g"), x["rank"] + "位" if x["rank"] else "−"] for x in hp]
ls = pick([x for x in M if F(x, "kcal") >= 200], "sugar", 8)
ls_rows = [[x["name"], g(x, "sugar", "g"), g(x, "protein", "g"), g(x, "kcal", "kcal"), x["rank"] + "位" if x["rank"] else "−"] for x in ls]
lowsalt = pick([x for x in M if F(x, "kcal") >= 200 and F(x, "protein") >= 15], "salt", 8)
lowsalt_rows = [[x["name"], g(x, "salt", "g"), g(x, "protein", "g"), g(x, "kcal", "kcal"), x["rank"] + "位" if x["rank"] else "−"] for x in lowsalt]
big = sorted([x for x in M if F(x, "kcal") >= 400], key=lambda x: -F(x, "kcal"))
big_rows = [[x["name"], g(x, "kcal", "kcal"), g(x, "sugar", "g"), g(x, "salt", "g")] for x in big]

SALT2 = cnt(M, lambda x: F(x, "salt") <= 2.0)
SALT3 = cnt(M, lambda x: F(x, "salt") > 3.0)
NO_SUGAR = cnt(M, lambda x: not x["sugar"])
PROT20 = cnt(M, lambda x: F(x, "protein") >= 20)
PREMIUM = [(x["name"], x["premium_fee"]) for x in P if x["premium_fee"] != "0"]
NEW = [x["name"] for x in M if x["is_new"] == "1"]

cats = ["お肉系", "魚介系", "洋食系", "和食系", "中華系", "エスニック", "韓国料理", "パスタ", "スープ系", "野菜", "その他"]
cat_rows = []
for c in cats:
    q = [x for x in M if c in x["categories"].split("|")]
    if not q:
        continue
    best = min(q, key=lambda x: int(x["rank"] or 9999))
    cat_rows.append([c, f"{len(q)}品", f"{cnt(q, lambda x: std_mark(x) == '○')}品", best["name"]])
assert sum(1 for _ in cat_rows) >= 8


def full_table(q):
    q = sorted(q, key=lambda x: int(x["rank"] or 9999))
    return table(
        ["人気順", "メニュー名", "エネルギー", "たんぱく質", "糖質", "食塩相当量", "三ツ星基準"],
        [[x["rank"] + "位" if x["rank"] else "−", x["name"], g(x, "kcal", "kcal"), g(x, "protein", "g"), g(x, "sugar", "g"), g(x, "salt", "g"), std_mark(x)] for x in q],
    )


ARTICLE = {
    "slug": "mitsuboshi-osusume-menu",
    "component": "MitsuboshiOsusumeMenuPage",
    "name": "三ツ星ファーム",
    "published": "2026-11-17",
    "title": f"三ツ星ファームのおすすめメニュー｜公式の人気順と目的別（高たんぱく・低糖質・減塩）を全{N_M}品の栄養成分で集計【2026年11月】",
    "description": f"三ツ星ファームのメニュー一覧（{CHK}時点で注文できるおかず{N_M}品）を、公式の並べ替え「人気順」と栄養成分の掲載値で整理しました。人気順の上位{TOP_N}品、たんぱく質の多いメニュー、糖質・塩分の少ないメニュー、三ツ星基準を満たすメニューの数を当サイトで集計しています。",
    "keywords": "三ツ星ファーム おすすめメニュー, 三ツ星ファーム 人気メニュー, 三ツ星ファーム メニュー, 三ツ星ファーム ランキング, 三ツ星ファーム 高たんぱく, 三ツ星ファーム 低糖質, 三ツ星基準",
    "cat": "選び方・使い方・サービス紹介",
    "cat_id": "guide",
    "crumb": "三ツ星ファームのおすすめメニュー",
    "official_url": AFF,
    "affiliate": True,
    "ad_note": "※PR・本記事はアフィリエイト広告を含みます。メニュー・栄養成分・人気順は公式サイトの掲載にもとづいています。",
    "cta": "三ツ星ファーム 公式サイトを見る",
    "summary_title": "三ツ星ファームのおすすめメニューの要点",
    "point_labels": ("◎ 集計でわかったこと", "△ 注意したい点"),
    "toc": [
        ("ranking", f"公式の「人気順」上位{TOP_N}品"),
        ("standard", "三ツ星基準を満たすメニュー"),
        ("purpose", "目的別のおすすめ（当サイト集計）"),
        ("category", "ジャンル別の品数と人気順の最上位"),
        ("big", "量が多いメニュー（400kcal以上）"),
        ("notes", "追加料金・新メニュー・数値の注意"),
        ("list", f"注文できるおかず{N_M}品の一覧"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            三ツ星ファームは、料理人が監修した冷凍のおかずを定期便で届ける宅配食です。メニューは毎回自分で選べるため、「どれを頼めばよいか」で迷う方も多いサービスです。
          </p>
          <p className="mb-3">
            この記事では、{CHK}に公式のメニュー一覧ページが読み込むメニューデータを取得し、<strong>注文できるおかず{N_M}品</strong>について、公式の並べ替え「人気順」の順位と、各メニューの栄養成分（エネルギー・たんぱく質・糖質・食塩相当量など）を当サイトで集計しました。「おすすめ」は当サイトの好みではなく、<strong>公式の人気順と、公式の掲載値から計算できる条件</strong>だけで選んでいます。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>''',
    "summary_box": f"公式の人気順で上位に並ぶのは、チーズのデミグラスハンバーグ・豚の生姜焼き・チキン南蛮などの定番のおかずです。上位{TOP_N}品のうち{TOP_STD}品が「三ツ星基準」（350kcal以下・糖質25g以下・たんぱく質15g以上）を満たしています。注文できるおかず{N_M}品全体では{len(STD)}品が三ツ星基準を満たし、たんぱく質20g以上は{PROT20}品、食塩相当量2.0g以下は{SALT2}品でした（{CHK}・当サイト集計）。",
    "good_points": [
        f"人気順の上位{TOP_N}品中{TOP_STD}品が三ツ星基準を満たす",
        "全メニューの栄養成分が公式に掲載されている",
        "高たんぱく・低糖質・減塩の条件で選び分けられる",
    ],
    "caution_points": [
        f"食塩相当量3g超のメニューが{SALT3}品ある",
        f"糖質の記載がないメニューが{NO_SUGAR}品ある",
        "人気順の算出方法は公式に記載がない",
    ],
    "body_before_reviews": "\n".join([
        h2("ranking", f"公式の「人気順」上位{TOP_N}品"),
        p("公式のメニュー一覧には「人気順」「新着順」「カロリー順」「タンパク質順」などの並べ替えがあります。人気順の順位データから、現在注文できるおかずだけを上から並べると次のとおりです（ミールキット・スイーツ・パン・ドリンクは除いています）。"),
        table(["公式の人気順", "メニュー名", "エネルギー", "たんぱく質", "糖質", "食塩相当量", "三ツ星基準"], top_rows),
        src(f"※出典: {a(MENUS, '三ツ星ファーム メニュー一覧（並べ替え「人気順」）')}（{CHK}取得）。順位は公式の人気順のままで、品切れ等で注文できないメニューとおかず以外の商品を除いたため欠番があります。公式は人気順の算出方法（期間・件数）を公開していません。"),
        p(f"上位{TOP_N}品のたんぱく質は{fmt(min(TOP_PROT))}〜{fmt(max(TOP_PROT))}gで、ハンバーグ・生姜焼き・チキン南蛮・酢豚といった定番のおかずが中心です。初めて頼む場合の目安になりますが、人気順は味の評価を直接示すものではありません。味の評判は{a('/articles/mitsuboshi-farm-reviews/', '三ツ星ファームの口コミ・評判')}で、出典付きで整理しています。"),

        h2("standard", "三ツ星基準を満たすメニュー"),
        p("公式のメニュー一覧には「三ツ星基準」という分類があり、一覧の注記で「350kcal以下/糖質25g以下/タンパク質15g以上の3つすべてを満たしている商品です」と説明されています。"),
        table(
            ["項目", "結果（当サイト集計）"],
            [
                ["注文できるおかず", f"{N_M}品"],
                ["三ツ星基準の分類がついているメニュー", f"{len(STD)}品"],
                ["そのうち掲載値で3条件を満たすもの", f"{cnt(STD, lambda x: F(x, 'kcal') <= 350 and F(x, 'sugar') <= 25 and F(x, 'protein') >= 15)}品"],
                ["三ツ星基準以外（パスタ・丼・メガ盛り・副菜など）", f"{N_M - len(STD)}品"],
            ],
        ),
        src(f"※出典: {a(MENUS, '三ツ星ファーム メニュー一覧')}の注記「三ツ星基準とは…」と各メニューの栄養成分（{CHK}取得）。当サイトが掲載値で3条件を照合しました。"),
        p(f"三ツ星基準の分類がついたメニューは、掲載値でもすべて3つの条件を満たしていました。カロリーや糖質を抑えたい方は、一覧で「三ツ星基準」に絞り込んでから選ぶと、条件に合わないメニューを避けられます。糖質を基準に宅配食を比べたい場合は{a('/articles/toushitsu-seigen-osusume/', '糖質制限向けの宅配弁当の比較')}も参考になります。"),

        h2("purpose", "目的別のおすすめ（当サイト集計）"),
        h3("たんぱく質が多いメニュー（多い順に8品）"),
        table(["メニュー名", "たんぱく質", "エネルギー", "食塩相当量", "人気順"], hp_rows),
        h3("糖質が少ないメニュー（200kcal以上から少ない順に8品）"),
        table(["メニュー名", "糖質", "たんぱく質", "エネルギー", "人気順"], ls_rows),
        h3("塩分が少ないメニュー（200kcal以上・たんぱく質15g以上から少ない順に8品）"),
        table(["メニュー名", "食塩相当量", "たんぱく質", "エネルギー", "人気順"], lowsalt_rows),
        src(f"※{a(MENUS, '三ツ星ファーム メニュー一覧')}の掲載値（{CHK}取得）を当サイトが並べ替え。同じ値のときは人気順の上位を先にしています。人気順の「−」は順位データに含まれていないメニューです。"),
        p(f"注文できるおかず全体の中央値は、たんぱく質{med(M, 'protein')}g・糖質{med(M, 'sugar')}g・食塩相当量{med(M, 'salt')}gでした。糖質と塩分の表は、副菜や丼の具のような小さいメニューが並ばないように、200kcal以上（塩分はたんぱく質15g以上も）に絞っています。"),

        h2("category", "ジャンル別の品数と人気順の最上位"),
        table(["ジャンル（公式の分類）", "品数", "うち三ツ星基準", "人気順の最上位"], cat_rows),
        src(f"※{a(MENUS, '三ツ星ファーム メニュー一覧')}の分類（{CHK}取得）を当サイトが集計。1つのメニューが複数の分類に入るため、品数の合計は{N_M}品を超えます。"),

        h2("big", "量が多いメニュー（400kcal以上）"),
        p(f"三ツ星ファームは低カロリーのおかずが中心ですが、パスタ・丼・「メガ盛り」など、1食で400kcalを超えるメニューも{len(big)}品あります。ご飯を用意せずに1食を済ませたい日や、量が欲しい方向けの選択肢です。"),
        table(["メニュー名", "エネルギー", "糖質", "食塩相当量"], big_rows),
        src(f"※{a(MENUS, '三ツ星ファーム メニュー一覧')}の掲載値（{CHK}取得）。「記載なし」は公式に糖質の掲載がないメニューです。"),

        h2("notes", "追加料金・新メニュー・数値の注意"),
        ul([
            "追加料金のあるメニュー: " + "、".join(f"{n}（＋{int(fee):,}円・税込）" for n, fee in PREMIUM),
            f"新メニューの表示があるもの（{len(NEW)}品）: " + "、".join(n for n in NEW),
            f"糖質・食物繊維の掲載がないメニューが{NO_SUGAR}品あります（パスタ・カレー・ピッツァ・鍋キット・おつまみ系など）。公式の掲載はエネルギー・たんぱく質・脂質・炭水化物・食塩相当量のみです",
            f"{CHK}時点で品切れ等により注文できないメニューが{N_ALL - N_P}品ありました（表には含めていません）",
        ]),
        src(f"※出典: {a(MENUS, '三ツ星ファーム メニュー一覧')}（{CHK}取得）"),
        p(f"料金・送料・解約の締切は{a('/articles/mitsuboshi-farm-reviews/', '三ツ星ファームの口コミ・評判')}、初回の割引は{a('/articles/mitsuboshi-coupon/', '三ツ星ファームのクーポン・キャンペーン')}で確認できます。"),

        h2("list", f"注文できるおかず{N_M}品の一覧"),
        p("公式の人気順に並べています。"),
        full_table(M),
        src(f"※出典: {a(MENUS, '三ツ星ファーム メニュー一覧')}（{CHK}取得）。メニューは入れ替わるため、注文の前に公式の一覧でご確認ください。糖質に「※」を付けたメニュー（" + "、".join(x["name"] for x in M if odd(x)) + "）は、公式の掲載値で糖質が炭水化物を上回っており、誤記の可能性があります。"),
        f'        <OfficialButton>三ツ星ファーム 公式サイトを見る</OfficialButton>',
    ]),
    "faq": [
        ("三ツ星ファームで人気のメニューは？", f"{CHK}時点の公式メニュー一覧の「人気順」では、{RANKED[0]['name']}、{RANKED[1]['name']}、{RANKED[2]['name']}が上位でした（注文できるおかずのみ）。"),
        ("三ツ星基準とは何ですか？", "公式のメニュー一覧の注記で「350kcal以下/糖質25g以下/タンパク質15g以上の3つすべてを満たしている商品」と説明されている分類です。"),
        ("メニューは何種類ありますか？", f"{CHK}に取得したデータでは、定期便のメニューが{N_ALL}品あり、注文できるものは{N_P}品でした。そのうちミールキット・スイーツ・パン・ドリンクを除くおかずは{N_M}品です。"),
        ("たんぱく質が多いメニューは？", f"{hp[0]['name']}（{g(hp[0], 'protein', 'g')}）が最も多く、たんぱく質20g以上のメニューは{PROT20}品でした（当サイト集計）。"),
        ("塩分が気になる場合はどう選べばよいですか？", f"注文できるおかず{N_M}品の食塩相当量の中央値は{med(M, 'salt')}gで、2.0g以下が{SALT2}品、3gを超えるものが{SALT3}品ありました。記事内の「塩分が少ないメニュー」の表を参考にし、各メニューの掲載値で確認してください。"),
        ("追加料金がかかるメニューはありますか？", "あります。" + "、".join(f"{n}は＋{int(fee):,}円（税込）" for n, fee in PREMIUM) + f"でした（{CHK}確認）。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p(f"三ツ星ファームの公式の人気順では、ハンバーグ・生姜焼き・チキン南蛮などの定番のおかずが上位に並び、上位{TOP_N}品の多くが三ツ星基準を満たしていました。カロリーや糖質を抑えたいなら「三ツ星基準」、量が欲しいならパスタ・丼・メガ盛り、塩分を控えたいなら掲載値の食塩相当量を見て選ぶと、目的に合わせて選びやすくなります。"),
        p("メニュー・栄養成分・人気順は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。"),
    ]),
    "related": [
        ("/articles/mitsuboshi-farm-reviews/", "三ツ星ファームの口コミ・評判"),
        ("/articles/mitsuboshi-coupon/", "三ツ星ファームのクーポン・キャンペーン"),
        ("/articles/nosh-vs-mitsuboshi-vs-wellness/", "nosh・三ツ星ファーム・ウェルネスダイニングの3社比較"),
        ("/articles/toushitsu-seigen-osusume/", "糖質制限向けの宅配弁当の比較"),
    ],
}
