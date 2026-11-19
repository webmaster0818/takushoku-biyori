# ワタミの宅食ダイレクト メニュー（kwexp 2026-11-18「ワタミの宅食ダイレクト メニュー」）
# 公式 watami-takushoku-direct.jp の定期「選べるセット」のメニュー画面（/shop/sets/2?menu_view=true＝いつでも三菜、
# /shop/sets/3?menu_view=true＝いつでも五菜）に載っている全メニューの栄養成分を watami-direct-menu-20261118.tsv に書き出して当サイトが集計。
# 料金は /shop/pages/prices、公式の人気ランキングはトピックス（topic261106「【10月】選べるセットランキングトップ5」）を 2026-11-18 に確認
import csv
import statistics as st
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月18日"
TSV = Path(__file__).resolve().parent / "watami-direct-menu-20261118.tsv"
R = list(csv.DictReader(TSV.open(encoding="utf-8"), delimiter="\t"))
F = lambda x, k: float(x[k])  # noqa: E731
CATS = ("三菜", "五菜", "満足ディッシュ")
Q = {c: [x for x in R if x["category"] == c] for c in CATS}
OTHER = [x for x in R if x["category"] == "その他"]
N3, N5, NM = (len(Q[c]) for c in CATS)

MENU3 = "https://www.watami-takushoku-direct.jp/shop/sets/2?menu_view=true"
MENU5 = "https://www.watami-takushoku-direct.jp/shop/sets/3?menu_view=true"
PRICES = "https://www.watami-takushoku-direct.jp/shop/pages/prices"
RANK = "https://www.watami-takushoku-direct.jp/shop/information/topic261106"
TOP = "https://www.watami-takushoku-direct.jp/"


def fmt(v):
    return f"{v:g}"


def med(q, k):
    return fmt(round(st.median([F(x, k) for x in q]), 1))


def rng(q, k):
    v = [F(x, k) for x in q]
    return f"{fmt(min(v))}〜{fmt(max(v))}"


def cnt(q, cond):
    return sum(1 for x in q if cond(x))


cat_rows = []
for c in CATS:
    q = Q[c]
    cat_rows.append([c, f"{len(q)}品", f"{rng(q, 'kcal')}kcal（中央値{med(q, 'kcal')}）", f"{rng(q, 'protein')}g（中央値{med(q, 'protein')}）", f"{rng(q, 'salt')}g（中央値{med(q, 'salt')}）", f"{cnt(q, lambda x: x['new'])}品"])

# 三菜と五菜で主菜名が同じメニューの差（五菜−三菜）
S3 = {x["dish"]: x for x in Q["三菜"]}
S5 = {x["dish"]: x for x in Q["五菜"]}
BOTH = [d for d in S3 if d in S5]
DK = [F(S5[d], "kcal") - F(S3[d], "kcal") for d in BOTH]
DS = [F(S5[d], "salt") - F(S3[d], "salt") for d in BOTH]
DP = [F(S5[d], "protein") - F(S3[d], "protein") for d in BOTH]

# 公式「【10月】選べるセットランキングトップ5」
RANKING = [
    ("第1位", "佐瀬さんたちのピーマン肉詰め"),
    ("第2位", "手仕込みヒレカツ"),
    ("第3位", "銀鮭の塩焼き〜ワタミファームの大根おろし添え〜"),
    ("第4位", "肉じゃが（群馬県産こんにゃくいもを使ったしらたき使用）"),
    ("第5位", "霧島黒豚の手ごねハンバーグ"),
]
rank_rows = []
for lab, d in RANKING:
    x3, x5 = S3.get(d), S5.get(d)
    assert x3 and x5, d
    rank_rows.append([lab, d, f"{x3['kcal']}kcal・塩分{x3['salt']}g", f"{x5['kcal']}kcal・塩分{x5['salt']}g"])


def pick(q, key, n, reverse=False):
    return sorted(q, key=lambda x: (F(x, key) * (-1 if reverse else 1), x["dish"]))[:n]


hp5 = pick(Q["五菜"] + Q["満足ディッシュ"], "protein", 8, reverse=True)
hp_rows = [[x["dish"], x["category"], f"{x['protein']}g", f"{x['kcal']}kcal", f"{x['salt']}g"] for x in hp5]
ls3 = pick([x for x in Q["三菜"] if F(x, "kcal") >= 200], "salt", 8)
ls_rows = [[x["dish"], f"{x['salt']}g", f"{x['kcal']}kcal", f"{x['protein']}g"] for x in ls3]
SALT3_OVER = [x for x in Q["五菜"] if F(x, "salt") >= 3.0]
NEW = [x["dish"] for x in R if x["new"] and x["category"] in CATS]
MANZOKU_OK = cnt(Q["満足ディッシュ"], lambda x: F(x, "kcal") <= 450 and F(x, "salt") <= 2.5)


def full_table(c):
    q = Q[c]
    return table(["メニュー（主菜名）", "エネルギー", "たんぱく質", "脂質", "炭水化物", "食塩相当量"],
                 [[x["dish"] + ("（new）" if x["new"] else ""), f"{x['kcal']}kcal", f"{x['protein']}g", f"{x['fat']}g", f"{x['carb']}g", f"{x['salt']}g"] for x in q])


ARTICLE = {
    "slug": "watami-direct-menu",
    "component": "WatamiDirectMenuPage",
    "name": "ワタミの宅食ダイレクト",
    "published": "2026-11-18",
    "title": f"ワタミの宅食ダイレクトのメニュー一覧｜いつでも三菜{N3}品・五菜{N5}品・満足ディッシュ{NM}品の栄養成分と人気ランキング【2026年11月】",
    "description": f"ワタミの宅食ダイレクトの定期「選べるセット」で選べるメニューを、公式のメニュー画面から一覧にしました（{CHK}時点・いつでも三菜{N3}品・いつでも五菜{N5}品・満足ディッシュ{NM}品）。シリーズ別のカロリー・塩分、同じ主菜の三菜と五菜の違い、公式の10月ランキング上位5品を集計しています。",
    "keywords": "ワタミの宅食ダイレクト メニュー, ワタミの宅食ダイレクト メニュー一覧, ワタミの宅食ダイレクト 人気メニュー, ワタミの宅食ダイレクト 選べるセット, いつでも三菜 メニュー, いつでも五菜 メニュー, 満足ディッシュ",
    "cat": "選び方・使い方・サービス紹介",
    "cat_id": "guide",
    "crumb": "ワタミの宅食ダイレクトのメニュー",
    "official_url": TOP,
    "cta": "ワタミの宅食ダイレクト 公式サイトを見る",
    "summary_title": "ワタミの宅食ダイレクトのメニューの要点",
    "point_labels": ("◎ 集計でわかったこと", "△ 注意したい点"),
    "toc": [
        ("series", "シリーズ別の品数と栄養成分の範囲"),
        ("ranking", "公式の人気ランキング（10月）上位5品"),
        ("diff", "同じ主菜でも三菜と五菜で違う：カロリー・塩分の差"),
        ("purpose", "目的別に選ぶ（当サイト集計）"),
        ("other", "スープ・鍋・カレー・アイスなど"),
        ("price", "選べるセットの料金"),
        ("list3", f"いつでも三菜 {N3}品の一覧"),
        ("list5", f"いつでも五菜 {N5}品の一覧"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            ワタミの宅食ダイレクトは、ワタミの冷凍惣菜を全国に宅配するサービスです。主菜1品＋副菜2品の「いつでも三菜」、主菜1品＋副菜4品の「いつでも五菜」、量を増やした「満足ディッシュ」などのシリーズがあり、定期の「選べるセット」ではメニューを自分で選べます。
          </p>
          <p className="mb-3">
            この記事では、{CHK}に公式の「選べるセット」のメニュー画面に掲載されている全メニューの栄養成分（エネルギー・たんぱく質・脂質・炭水化物・塩分）を取得し、シリーズごとに当サイトで集計しました。公式の人気ランキングもあわせて確認しています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>''',
    "summary_box": f"{CHK}時点の選べるセットのメニューは、いつでも三菜{N3}品・いつでも五菜{N5}品・満足ディッシュ{NM}品でした。三菜と五菜は{len(BOTH)}品で主菜名が同じで、同じ主菜でも五菜のほうがエネルギーは中央値で{fmt(st.median(DK))}kcal、塩分は{fmt(round(st.median(DS), 1))}g多くなっています（副菜が2品多いため）。公式の10月の選べるセットランキングは、1位 佐瀬さんたちのピーマン肉詰め、2位 手仕込みヒレカツ、3位 銀鮭の塩焼きでした。",
    "good_points": [
        "全メニューの栄養成分が公式のメニュー画面に掲載されている",
        f"三菜は塩分の中央値{med(Q['三菜'], 'salt')}g・エネルギー中央値{med(Q['三菜'], 'kcal')}kcal",
        f"満足ディッシュ{NM}品はすべて450kcal以下・塩分2.5g以下",
    ],
    "caution_points": [
        f"五菜には塩分3g以上のメニューが{len(SALT3_OVER)}品ある",
        "鍋・スープカレーなどは塩分が3〜4g台",
        "選べるセットはセットあたりの熱量・塩分の基準がない（公式の注記）",
    ],
    "body_before_reviews": "\n".join([
        h2("series", "シリーズ別の品数と栄養成分の範囲"),
        table(["シリーズ", "品数", "エネルギー", "たんぱく質", "食塩相当量", "newの表示"], cat_rows),
        src(f"※出典: {a(MENU3, 'ワタミの宅食ダイレクト 選べるセット（いつでも三菜）')}・{a(MENU5, '同（いつでも五菜）')}のメニュー画面（{CHK}取得）を当サイトが集計。満足ディッシュは五菜の選べるセットの画面に掲載されているメニューです。栄養成分値は公式の注記どおり「献立作成時の計算値」で、目安の数値です。"),
        p(f"いつでも三菜は主菜1品＋副菜2品、いつでも五菜は主菜1品＋副菜4品です。満足ディッシュは公式の説明で「全体量200g以上＆主菜サイズUP、450kcal以下・食塩相当量2.5g以下」とされ、掲載値でも{NM}品中{MANZOKU_OK}品がこの条件を満たしていました。公式は、おまかせセットについて「熱量の基準値は1セット平均で±50kcalの範囲」とする一方、定期購入「選べるセット」は「セットあたりの熱量と食塩相当量の基準はありません」と注記しています。"),

        h2("ranking", "公式の人気ランキング（10月）上位5品"),
        p("公式サイトのトピックスでは、選べるセットで多く選ばれたメニューのランキングが毎月公開されています。2026年11月6日掲載の「【10月】選べるセットランキングトップ5」の上位5品と、三菜・五菜それぞれの栄養成分は次のとおりです。"),
        table(["順位（公式）", "メニュー（主菜名）", "いつでも三菜", "いつでも五菜"], rank_rows),
        src(f"※出典: {a(RANK, 'ワタミの宅食ダイレクト「【10月】選べるセットランキングトップ5」（2026年11月6日）')}・選べるセットのメニュー画面（{CHK}取得）。ランキングの集計方法（件数など）は公開されていません。"),
        p(f"上位5品はいずれも三菜・五菜の両方で選べます。料金や味の評判は{a('/articles/watami-direct-kuchikomi/', 'ワタミの宅食ダイレクトの口コミ・評判')}で整理しています。"),

        h2("diff", "同じ主菜でも三菜と五菜で違う：カロリー・塩分の差"),
        p(f"三菜と五菜の両方にある主菜は{len(BOTH)}品でした。同じ主菜名どうしで比べると、五菜はすべてのメニューで三菜よりエネルギーと塩分が多くなっていました（当サイト集計）。"),
        table(
            ["項目（五菜−三菜）", "中央値", "範囲"],
            [
                ["エネルギー", f"＋{fmt(st.median(DK))}kcal", f"＋{fmt(min(DK))}〜＋{fmt(max(DK))}kcal"],
                ["食塩相当量", f"＋{fmt(round(st.median(DS), 1))}g", f"＋{fmt(round(min(DS), 1))}〜＋{fmt(round(max(DS), 1))}g"],
                ["たんぱく質", f"＋{fmt(round(st.median(DP), 1))}g", f"{fmt(round(min(DP), 1))}〜＋{fmt(round(max(DP), 1))}g"],
            ],
        ),
        src(f"※選べるセットのメニュー画面の掲載値（{CHK}取得）で、主菜名が同じ{len(BOTH)}品を当サイトが比較。"),
        p("副菜が2品多い分、五菜は量と品目数が増えますが、塩分も増えます。塩分を抑えたい場合は三菜、1食でおかずの品数を増やしたい場合は五菜、と目的で選び分けるのが合理的です。"),

        h2("purpose", "目的別に選ぶ（当サイト集計）"),
        h3("たんぱく質が多いメニュー（五菜・満足ディッシュから8品）"),
        table(["メニュー（主菜名）", "シリーズ", "たんぱく質", "エネルギー", "食塩相当量"], hp_rows),
        h3("塩分が少ないメニュー（三菜・200kcal以上から8品）"),
        table(["メニュー（主菜名）", "食塩相当量", "エネルギー", "たんぱく質"], ls_rows),
        src(f"※選べるセットのメニュー画面の掲載値（{CHK}取得）を当サイトが並べ替え。"),
        p(f"五菜で塩分3.0g以上のメニューは{len(SALT3_OVER)}品（" + "、".join(x["dish"] for x in SALT3_OVER) + "）でした。"),

        h2("other", "スープ・鍋・カレー・アイスなど"),
        p(f"選べるセットの画面には、三菜・五菜・満足ディッシュのほかに、スープ・鍋・カレー・アイスなど{len(OTHER)}品も並んでいます。"),
        table(["メニュー", "エネルギー", "たんぱく質", "食塩相当量"], [[x["name"], f"{x['kcal']}kcal", f"{x['protein']}g", f"{x['salt']}g"] for x in OTHER]),
        src(f"※出典: 選べるセットのメニュー画面（{CHK}取得）"),
        p("鍋やスープカレーは塩分が3〜4g台と、ほかのメニューより多めです。汁物を毎食足す場合は、主菜側の塩分と合わせて確認してください。"),

        h2("price", "選べるセットの料金"),
        table(
            ["シリーズ", "定期・選べるセット（税込）", "都度・選べるセット（税込）"],
            [
                ["いつでも三菜", "10食4,744円・20食9,488円（1食475円）", "10食5,190円（1食519円）"],
                ["いつでも五菜", "10食5,753円・20食11,506円（1食576円）", "10食6,230円（1食623円）"],
            ],
        ),
        src(f"※出典: {a(PRICES, 'ワタミの宅食ダイレクトの料金・値段一覧')}（{CHK}確認）。送料は本州・四国・九州990円、北海道1,320円、沖縄2,420円。メニューを選べない「おまかせセット」は選べるセットより安く、継続割・お試し割もあります。"),
        p(f"おまかせセット・継続割・お試し割を含む料金と定期の条件は{a('/articles/watami-direct-kuchikomi/', 'ワタミの宅食ダイレクトの口コミ・評判')}、お試しの内容は{a('/articles/watami-direct-otameshi/', 'ワタミの宅食ダイレクトのお試しセット')}で確認できます。"),

        h2("list3", f"いつでも三菜 {N3}品の一覧"),
        p("公式のメニュー画面の並び順です。「new」は公式のメニュー画面で新メニューの表示があるものです。"),
        full_table("三菜"),
        src(f"※出典: {a(MENU3, '選べるセット（いつでも三菜）のメニュー画面')}（{CHK}取得）"),

        h2("list5", f"いつでも五菜 {N5}品の一覧"),
        full_table("五菜"),
        src(f"※出典: {a(MENU5, '選べるセット（いつでも五菜）のメニュー画面')}（{CHK}取得）。メニューは毎月入れ替わるため、注文の前に公式のメニュー画面でご確認ください。"),
        f'        <OfficialButton>ワタミの宅食ダイレクト 公式サイトを見る</OfficialButton>',
    ]),
    "faq": [
        ("ワタミの宅食ダイレクトのメニューは何種類ありますか？", f"{CHK}時点の定期「選べるセット」のメニュー画面では、いつでも三菜{N3}品・いつでも五菜{N5}品・満足ディッシュ{NM}品で、ほかにスープ・鍋・カレー・アイスなど{len(OTHER)}品がありました。"),
        ("人気のメニューは？", "公式の「【10月】選べるセットランキングトップ5」（2026年11月6日掲載）では、1位 佐瀬さんたちのピーマン肉詰め、2位 手仕込みヒレカツ、3位 銀鮭の塩焼き、4位 肉じゃが、5位 霧島黒豚の手ごねハンバーグでした。"),
        ("三菜と五菜はどう違いますか？", f"三菜は主菜1品＋副菜2品、五菜は主菜1品＋副菜4品です。主菜名が同じ{len(BOTH)}品で比べると、五菜はエネルギーが中央値で{fmt(st.median(DK))}kcal、塩分が{fmt(round(st.median(DS), 1))}g多くなっていました（当サイト集計）。"),
        ("満足ディッシュとは？", f"公式の説明では「全体量200g以上＆主菜サイズUP、450kcal以下・食塩相当量2.5g以下」のシリーズです。{CHK}時点で{NM}品あり、掲載値はすべてこの条件内でした。"),
        ("メニューは自分で選べますか？", "定期・都度とも「選べるセット」なら10食（定期は20食も）を自分で選べます。メニューを選べない「おまかせセット」もあります。定期の選べるセットは2回目以降のメニュー変更をマイページから行えます。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p(f"ワタミの宅食ダイレクトの選べるセットでは、{CHK}時点で三菜{N3}品・五菜{N5}品・満足ディッシュ{NM}品から選べ、全メニューの栄養成分が公式のメニュー画面で確認できます。同じ主菜でも五菜は三菜よりカロリーと塩分が多いため、塩分を控えるなら三菜、品数を増やしたいなら五菜、量を重視するなら満足ディッシュ、と選び分けると目的に合わせやすくなります。迷ったら公式の月間ランキングの上位から試すのも一つの方法です。"),
        p("メニュー・栄養成分・料金は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。"),
    ]),
    "related": [
        ("/articles/watami-direct-kaiyaku/", "ワタミの宅食ダイレクトの解約方法"),
        ("/articles/watami-direct-kuchikomi/", "ワタミの宅食ダイレクトの口コミ・評判"),
        ("/articles/watami-direct-otameshi/", "ワタミの宅食ダイレクトのお試しセット"),
        ("/articles/watami-reviews/", "ワタミの宅食の口コミ・評判"),
        ("/articles/nosh-vs-watami/", "nosh（ナッシュ）とワタミの宅食の比較"),
    ],
}
