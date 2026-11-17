# ライフミール メニュー（kwexp 2026-11-17「ライフミール メニュー」）
# 公式 l-meal.com（販売業者 株式会社シルバーライフ）のメニュー一覧（/products/list）・各メニューの詳細ページ（/products/detail/{id}・121品）・
# 特長（/feature）・よくある質問（/faq）・料金プラン（/shopping/plan）・特定商取引法に基づく表記（/help/tradelaw）・お知らせ（/news/35・40）を 2026-11-17 に確認
# 集計は lifemeal-menu-20261117.tsv（121品の詳細ページの「お弁当１個あたりの栄養価」を書き出したもの）から当サイトが計算
import csv
import statistics as st
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月17日"
TSV = Path(__file__).resolve().parent / "lifemeal-menu-20261117.tsv"
R = list(csv.DictReader(TSV.open(encoding="utf-8"), delimiter="\t"))
for _x in R:
    _x["name"] = " ".join(_x["name"].replace("　", " ").split()).replace(" （", "（")
SWEETS = [x for x in R if "ワッフル" in x["name"]]
M = [x for x in R if x not in SWEETS]
S30 = [x for x in M if x["standard"] == "糖質30g基準"]
S15 = [x for x in M if x["standard"] == "糖質15g基準"]
RICE = [x for x in M if x["standard"] == "ご飯付きセット"]
assert len(R) == 121 and len(SWEETS) == 2
F = lambda x, k: float(x[k])  # noqa: E731

TOP = "https://l-meal.com/"
LIST = "https://l-meal.com/products/list"
FEATURE = "https://l-meal.com/feature"
FAQ = "https://l-meal.com/faq"
PLAN = "https://l-meal.com/shopping/plan"
LAW = "https://l-meal.com/help/tradelaw"
NEWS40 = "https://l-meal.com/news/40"

NEW = ["糖15)タラの白醤油焼き弁当", "タンドリーチキン弁当（ごはん付き）", "チーズタッカルビ弁当（ごはん付き）", "麻婆豆腐弁当（ごはん付き）",
       "豚と野菜の塩麹炒め弁当（ごはん付き）", "青椒肉絲弁当（ごはん付き）", "ボルシチ風弁当（ごはん付き）", "ハンバーグデミグラスソース弁当（ごはん付き）",
       "真あじのしそ巻き天ぷら弁当（ごはん付き）"]


def fmt(v):
    return f"{v:g}"


def med(q, k):
    return fmt(round(st.median(F(x, k) for x in q), 1))


def rng(q, k, unit):
    v = [F(x, k) for x in q]
    return f"{fmt(min(v))}〜{fmt(max(v))}{unit}（中央値 {med(q, k)}{unit}）"


def cnt(q, cond):
    return sum(1 for x in q if cond(x))


std_rows = [
    ["品数", f"{len(S30)}品", f"{len(S15)}品", f"{len(RICE)}品"],
    ["エネルギー", rng(S30, "kcal", "kcal"), rng(S15, "kcal", "kcal"), rng(RICE, "kcal", "kcal")],
    ["たんぱく質", rng(S30, "protein", "g"), rng(S15, "protein", "g"), rng(RICE, "protein", "g")],
    ["脂質", rng(S30, "fat", "g"), rng(S15, "fat", "g"), rng(RICE, "fat", "g")],
    ["糖質", rng(S30, "sugar", "g"), rng(S15, "sugar", "g"), rng(RICE, "sugar", "g")],
    ["食塩相当量", rng(S30, "salt", "g"), rng(S15, "salt", "g"), rng(RICE, "salt", "g")],
]

ING = ["鶏肉", "豚肉", "牛肉", "魚介", "その他"]
ing_rows = [[i, f"{cnt(S30, lambda x, i=i: x['ingredient'] == i)}品", f"{cnt(S15, lambda x, i=i: x['ingredient'] == i)}品", f"{cnt(RICE, lambda x, i=i: x['ingredient'] == i)}品"] for i in ING]
assert sum(int(r[1][:-1]) for r in ing_rows) == len(S30)


def pick(q, key, n, reverse=False):
    return sorted(q, key=lambda x: F(x, key) * (-1 if reverse else 1))[:n]


hp_rows = [[x["name"], x["standard"], f"{fmt(F(x, 'protein'))}g", f"{fmt(F(x, 'kcal'))}kcal", f"{fmt(F(x, 'salt'))}g"] for x in pick(M, "protein", 8, True)]
ls_rows = [[x["name"], x["standard"], f"{fmt(F(x, 'salt'))}g", f"{fmt(F(x, 'protein'))}g", f"{fmt(F(x, 'kcal'))}kcal"] for x in pick([x for x in M if F(x, "kcal") >= 200], "salt", 8)]
P15 = cnt(M, lambda x: F(x, "protein") >= 15)


def full_table(q):
    q = sorted(q, key=lambda x: (ING.index(x["ingredient"]), -F(x, "protein")))
    return table(
        ["メニュー名", "食材", "エネルギー", "たんぱく質", "脂質", "糖質", "食塩相当量"],
        [[x["name"], x["ingredient"], f"{fmt(F(x, 'kcal'))}kcal", f"{fmt(F(x, 'protein'))}g", f"{fmt(F(x, 'fat'))}g", f"{fmt(F(x, 'sugar'))}g", f"{fmt(F(x, 'salt'))}g"] for x in q],
    )


ARTICLE = {
    "slug": "lifemeal-menu",
    "component": "LifemealMenuPage",
    "name": "ライフミール",
    "published": "2026-11-17",
    "title": f"ライフミールのメニュー一覧｜糖質30g・糖質15g・ご飯付きの全{len(M)}品の栄養成分を公式の掲載値で集計【2026年11月】",
    "description": f"ライフミール（LifeMeal）の公式メニュー一覧に掲載されているお弁当{len(M)}品（糖質30g基準{len(S30)}品・糖質15g基準{len(S15)}品・ご飯付きセット{len(RICE)}品）の栄養成分を集計しました。規格ごとのカロリー・たんぱく質・糖質・塩分の幅、たんぱく質の多いメニュー、料金と送料を整理しています（{CHK}確認）。",
    "keywords": "ライフミール メニュー, ライフミール メニュー一覧, ライフミール 糖質15g, ライフミール ご飯付き, ライフミール 栄養成分, LifeMeal メニュー",
    "cat": "選び方・使い方・サービス紹介",
    "cat_id": "guide",
    "crumb": "ライフミールのメニュー一覧",
    "official_url": TOP,
    "ad_note": "※本記事のリンクは公式サイトで、アフィリエイト広告ではありません。",
    "cta": "ライフミール 公式サイトを見る",
    "summary_title": "ライフミールのメニューの要点",
    "point_labels": ("◎ 集計でわかったこと", "△ 注意したい点"),
    "toc": [
        ("standards", "3つの規格と栄養成分の幅（当サイト集計）"),
        ("ingredients", "食材別の品数"),
        ("purpose", "目的別に見るメニュー"),
        ("new", "新メニューとリニューアル"),
        ("price", "料金・送料とメニューの選び方"),
        ("list-30", f"糖質30g基準{len(S30)}品の一覧"),
        ("list-15", f"糖質15g基準{len(S15)}品の一覧"),
        ("list-rice", f"ご飯付きセット{len(RICE)}品の一覧"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            ライフミール（LifeMeal）は、高齢者向けの配食サービスを運営する株式会社シルバーライフが販売する冷凍弁当の定期便です。メニューは<strong>「糖質30g基準」「糖質15g基準」</strong>の2つの規格と、麦ごはんをセットにした<strong>「ご飯付きセット」</strong>に分かれており、毎回好きなメニューを選べます。
          </p>
          <p className="mb-3">
            この記事では、{CHK}に公式のメニュー一覧と各メニューの詳細ページを確認し、掲載されていたお弁当{len(M)}品（ほかにスイーツ{len(SWEETS)}品）の栄養成分を書き出して、規格ごとの幅と中央値を当サイトで集計しました。メニュー名と数値は公式の掲載値のままです。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>''',
    "summary_box": f"公式のメニュー一覧には、お弁当が{len(M)}品（糖質30g基準{len(S30)}品・糖質15g基準{len(S15)}品・ご飯付きセット{len(RICE)}品）掲載されていました（{CHK}確認）。公式の案内どおり、全品の食塩相当量は2.5g以下でした。糖質15g基準は{rng(S15, 'kcal', 'kcal')}と量が控えめで、ご飯付きセットは{rng(RICE, 'kcal', 'kcal')}・糖質{rng(RICE, 'sugar', 'g')}です。たんぱく質は最大{fmt(max(F(x, 'protein') for x in M))}gで、15g以上のメニューは{P15}品でした（当サイト集計）。",
    "good_points": [
        "全品の食塩相当量が2.5g以下",
        "糖質の規格を2つから選べる",
        "ご飯付きセットで主食まで届く",
    ],
    "caution_points": [
        f"たんぱく質は中央値{med(M, 'protein')}gと多くない",
        "ご飯付きセットは送料が250円上がる",
        "初回分は解約・キャンセルできない",
    ],
    "body_before_reviews": "\n".join([
        h2("standards", "3つの規格と栄養成分の幅（当サイト集計）"),
        p("公式は、糖質30g基準を「糖質をコントロールしつつ栄養のバランスを重視したい方向け」、糖質15g基準を「より厳密に糖質を管理したい方向け」と説明しています。ご飯付きセットは「主菜・副菜に加え、麦ごはんをセットにしたメニュー」です。"),
        table(["項目", "糖質30g基準", "糖質15g基準", "ご飯付きセット"], std_rows),
        src(f"※{a(LIST, 'ライフミール メニュー一覧')}と各メニューの詳細ページの「お弁当１個あたりの栄養価」（{CHK}確認）を当サイトが集計。糖質30g基準はスイーツ（ベルギーワッフル{len(SWEETS)}品）を除いています。規格の説明は{a(FAQ, 'よくある質問')}・{a(FEATURE, '特長')}。"),
        ul([
            f"公式の「全メニュー食塩相当量を2.5g以下に調整」のとおり、掲載値の最大は{fmt(max(F(x, 'salt') for x in M))}gでした",
            f"公式トップの「430kcal以下のメニュー（ご飯付きセットは対象外）」のとおり、ご飯付き以外の最大は{fmt(max(F(x, 'kcal') for x in S30 + S15))}kcalでした",
            f"糖質15g基準は糖質が{fmt(max(F(x, 'sugar') for x in S15))}g以下にそろい、エネルギーも{fmt(min(F(x, 'kcal') for x in S15))}〜{fmt(max(F(x, 'kcal') for x in S15))}kcalと幅が小さい規格です",
            f"ご飯付きセットの糖質は中央値{med(RICE, 'sugar')}gで、麦ごはんの分だけ他の規格より大きくなります",
        ]),

        h2("ingredients", "食材別の品数"),
        table(["主な食材（公式の分類）", "糖質30g基準", "糖質15g基準", "ご飯付きセット"], ing_rows),
        src(f"※{a(LIST, 'メニュー一覧')}の食材の絞り込み（牛肉・豚肉・鶏肉・魚介・その他）にもとづく当サイト集計（{CHK}確認）"),
        p("糖質15g基準は魚介のメニューが多く、糖質30g基準は鶏肉、ご飯付きセットは豚肉のメニューが多い構成でした。メニュー選択の画面では食材フィルタで苦手な食材を外して選べます（公式FAQ）。"),

        h2("purpose", "目的別に見るメニュー"),
        h3("たんぱく質が多いメニュー（多い順に8品）"),
        table(["メニュー名", "規格", "たんぱく質", "エネルギー", "食塩相当量"], hp_rows),
        h3("塩分が少ないメニュー（200kcal以上から少ない順に8品）"),
        table(["メニュー名", "規格", "食塩相当量", "たんぱく質", "エネルギー"], ls_rows),
        src(f"※{a(LIST, 'ライフミール メニュー一覧')}・各メニューの詳細ページの掲載値（{CHK}確認）を当サイトが並べ替え"),
        p(f"ライフミールはたんぱく質を多くとる設計のサービスではなく、全{len(M)}品の中央値は{med(M, 'protein')}gでした。たんぱく質を重視する場合は、上の表のメニューを選ぶか、{a('/articles/kou-tanpaku-ranking/', '高たんぱくの宅配弁当の比較')}も参考にしてください。"),

        h2("new", "新メニューとリニューアル"),
        p(f"{CHK}時点のメニュー一覧では、次の{len(NEW)}品などに「NEW」の表示がありました。ご飯付きセットに新しいメニューが多く追加されています。"),
        ul(NEW),
        src(f"※出典: {a(LIST, 'ライフミール メニュー一覧')}（{CHK}確認）。このほか「RENEWAL」表示のメニューも多数あります。公式のお知らせでは「2026年8月31日製造分（2027年6月27日賞味期限分）より、献立変更など一部変更」と案内されています（{a(NEWS40, '商品リニューアルに伴う規格変更のご案内')}）。"),

        h2("price", "料金・送料とメニューの選び方"),
        table(
            ["プラン（定期購入）", "1回の料金（税込）", "1食あたり"],
            [
                ["7食", "3,640円", "520円"],
                ["10食", "5,100円", "510円"],
                ["10食（初回限定）", "1,900円", "190円"],
                ["20食", "9,800円", "490円"],
                ["8回まとめ買い 10食", "34,188円", "427円"],
                ["8回まとめ買い 20食", "63,200円", "395円"],
            ],
        ),
        src(f"※出典: {a(PLAN, 'ライフミール 料金プラン')}（{CHK}確認）。送料は1回980円（沖縄県1,480円）、ご飯付きセットを1つでも選んだ場合は250円増しの1,230円（沖縄県1,730円）（{a(LAW, '特定商取引法に基づく表記')}・{a(FAQ, 'よくある質問')}）。"),
        ul([
            "メニューは、人気メニューのおまかせが選ばれた状態から自由に変更できます。変更はお届け日の5日前まで",
            "料理の一部を抜く対応は行っていません。食材フィルタで対象の食材を含むメニューを選択肢から外せます",
            "おすすめメニュー機能では、ご飯付きセットは自動で選ばれません",
            "配送の間隔は1〜4週間に1回。購入の回数・期間の制約はなく、初回分を除いて解約できます",
        ]),
        src(f"※出典: {a(TOP, 'ライフミール 公式トップ')}・{a(FAQ, 'よくある質問')}（{CHK}確認）"),
        p(f"10食プランを送料込みで計算すると、ご飯付きセットを含まない場合は（5,100円＋980円）÷10食＝608円、含む場合は（5,100円＋1,230円）÷10食＝633円です（当サイト計算・沖縄県を除く）。口コミや味の評判は{a('/articles/lifemeal-kuchikomi/', 'ライフミールの口コミ・評判')}で整理しています。"),

        h2("list-30", f"糖質30g基準{len(S30)}品の一覧"),
        p("食材ごとに、たんぱく質の多い順に並べています。"),
        full_table(S30),
        h2("list-15", f"糖質15g基準{len(S15)}品の一覧"),
        full_table(S15),
        h2("list-rice", f"ご飯付きセット{len(RICE)}品の一覧"),
        full_table(RICE),
        src(f"※出典: {a(LIST, 'ライフミール メニュー一覧')}・各メニューの詳細ページ（{CHK}確認）。メニューは入れ替わるため、注文の前に公式の一覧でご確認ください。"),
        f'        <OfficialButton>ライフミール 公式サイトを見る</OfficialButton>',
    ]),
    "faq": [
        ("ライフミールのメニューは何種類ありますか？", f"{CHK}に公式のメニュー一覧を確認したところ、お弁当が{len(M)}品（糖質30g基準{len(S30)}品・糖質15g基準{len(S15)}品・ご飯付きセット{len(RICE)}品）と、スイーツが{len(SWEETS)}品掲載されていました。"),
        ("糖質30g基準と糖質15g基準の違いは？", f"公式は、30g基準を栄養バランス重視、15g基準をより厳密に糖質を管理したい方向けとしています。掲載値では、30g基準の糖質が{rng(S30, 'sugar', 'g')}、15g基準が{rng(S15, 'sugar', 'g')}でした。"),
        ("ご飯付きのメニューはありますか？", f"あります。麦ごはんをセットにした「ご飯付きセット」が{len(RICE)}品で、エネルギーは{rng(RICE, 'kcal', 'kcal')}でした。ご飯付きセットを1つでも選ぶと送料が250円増えます。"),
        ("塩分はどのくらいですか？", f"公式は全メニューの食塩相当量を2.5g以下に調整しているとしており、掲載値でも全品2.5g以下（中央値{med(M, 'salt')}g）でした。"),
        ("メニューは自分で選べますか？", "選べます。人気メニューのおまかせが選ばれた状態から、お届け日の5日前まで自由に変更できます。苦手な食材は食材フィルタで選択肢から外せます。"),
        ("たんぱく質が多いメニューはありますか？", f"最も多いのは{pick(M, 'protein', 1, True)[0]['name']}（{fmt(max(F(x, 'protein') for x in M))}g）で、15g以上のメニューは{P15}品でした（当サイト集計）。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p(f"ライフミールの公式メニュー一覧には、糖質30g基準・糖質15g基準・ご飯付きセットの3つで計{len(M)}品のお弁当が掲載されていました。全品の食塩相当量は2.5g以下で、糖質を厳しく抑えたいなら15g基準、主食まで任せたいならご飯付きセットというように、規格で選び分けられます。たんぱく質は多めではないため、重視する場合はメニューごとの値を確認して選んでください。"),
        p("メニュー・栄養成分・料金は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。"),
    ]),
    "related": [
        ("/articles/lifemeal-kuchikomi/", "ライフミールの口コミ・評判"),
        ("/articles/gohan-tsuki-reitou-bento/", "ご飯付きの冷凍弁当がある宅配食"),
        ("/articles/toushitsu-seigen-osusume/", "糖質制限向けの宅配弁当の比較"),
        ("/articles/1shoku-200yen-dai/", "1食200円台から始められる宅配弁当"),
        ("/articles/takushoku-ryokin-hakusho/", "宅食料金白書｜各社の料金・送料・1食単価"),
    ],
}
