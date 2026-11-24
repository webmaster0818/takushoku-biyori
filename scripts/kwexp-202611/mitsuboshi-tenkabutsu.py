# 三ツ星ファームの添加物（kwexp 2026-11-25「三ツ星ファーム 添加物」）
# 公式 mitsuboshifarm.jp のメニュー一覧（/menus）が読み込む公開データ（mitsuboshi-web-api…workers.dev/api/regular_menus・159品）の
# 各メニューの【原材料】を 2026-11-25 に取得し mitsuboshi-ingredients-20261125.tsv に書き出した。
# 比較用に食宅便のコースページ（/shop/c/c30/・/shop/c/c31/）の原材料69品＝ shokutakubin-ingredients-20261125.tsv。集計は当サイト
import csv
import re
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月25日"
HERE = Path(__file__).resolve().parent
ALL = list(csv.DictReader(open(HERE / "mitsuboshi-ingredients-20261125.tsv", encoding="utf-8"), delimiter="\t"))
MF = [r for r in ALL if r["can_purchase"] == "1" and r["has_ingredients"] == "1"]
N_ALL, N = len(ALL), len(MF)
STD = [r for r in MF if "三ツ星基準" in r["categories"]]
NO_ADD = [r for r in MF if not r["additives_part"]]

SB = []
for r in csv.DictReader(open(HERE / "shokutakubin-ingredients-20261125.tsv", encoding="utf-8"), delimiter="\t"):
    parts = re.split(r"[／/]", r["ingredients"], maxsplit=1)
    SB.append(parts[1] if len(parts) > 1 else "")
NS = len(SB)

PATS = [
    ("調味料（アミノ酸等）", r"調味料[（(]アミノ酸"),
    ("加工でん粉", r"加工[でデ澱]ん?[粉ぷプ]|加工でんぷん|加工澱粉|加工デンプン|酢酸デンプン"),
    ("増粘剤（増粘多糖類・糊料）", r"増粘|糊料"),
    ("着色料", r"着色料"),
    ("香料", r"香料"),
    ("pH調整剤", r"[pｐ][HＨ]調整剤"),
    ("リン酸塩", r"リン酸塩|ポリリン酸"),
    ("発色剤（亜硝酸Na）", r"発色剤|亜硝酸"),
    ("酸化防止剤", r"酸化防止剤"),
    ("乳化剤", r"乳化剤"),
    ("甘味料", r"甘味料"),
    ("保存料", r"保存料"),
]


def cnt(parts, pat):
    return sum(1 for x in parts if re.search(pat, x))


def pct(n, d):
    return f"{n}品（{round(n * 100 / d)}%）"


MF_PARTS = [r["additives_part"] for r in MF]
STD_PARTS = [r["additives_part"] for r in STD]
C = {k: cnt(MF_PARTS, pt) for k, pt in PATS}
CS = {k: cnt(STD_PARTS, pt) for k, pt in PATS}
CB = {k: cnt(SB, pt) for k, pt in PATS}


def names_with(pat):
    out = []
    for r in MF:
        m = re.search(r"(" + pat + r")[（(][^）)]*[）)]?", r["additives_part"])
        if m:
            out.append(f"{r['name']}（{m.group(0)}）")
    return out


PRES = names_with("保存料")
SWEET = names_with("甘味料")
KIT = [r["name"] for r in NO_ADD if "ミールキット" in r["categories"]]

MENUS = "https://mitsuboshifarm.jp/menus"
API = "https://mitsuboshi-web-api.mitsuboshifarm.workers.dev/api/regular_menus"
SB30 = "http://shokutakubin.com/shop/c/c30/"
SB31 = "http://shokutakubin.com/shop/c/c31/"
CAA = "https://www.caa.go.jp/policies/policy/food_labeling/food_labeling_act/assets/food_labeling_cms201_220330_25.pdf"

ARTICLE = {
    "slug": "mitsuboshi-tenkabutsu",
    "component": "MitsuboshiTenkabutsuPage",
    "name": "三ツ星ファームの添加物",
    "published": "2026-11-25",
    "title": f"三ツ星ファームの添加物は？全{N}メニューの原材料表示を集計｜保存料{C['保存料']}品・甘味料{C['甘味料']}品【2026年11月】",
    "description": f"三ツ星ファームは無添加をうたっているのか、公式のメニューデータに載る原材料表示{N}品を当サイトで集計しました。調味料（アミノ酸等）{C['調味料（アミノ酸等）']}品・着色料{C['着色料']}品・保存料{C['保存料']}品など、添加物ごとの品数と食宅便との比較を掲載（2026年11月25日確認）。",
    "keywords": "三ツ星ファーム 添加物, 三ツ星ファーム 保存料, 三ツ星ファーム 無添加, 三ツ星ファーム 原材料, 三ツ星ファーム 化学調味料",
    "cat": "口コミ・評判",
    "cat_id": "kuchikomi",
    "crumb": "三ツ星ファームの添加物",
    "official_url": None,
    "ad_note": "※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。",
    "toc": [
        ("answer", "三ツ星ファームの添加物の結論"),
        ("count", f"添加物ごとの品数（{N}品の集計）"),
        ("compare", "食宅便との比較"),
        ("list", "保存料・甘味料が表示されているメニュー"),
        ("howto", "原材料表示の読み方"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            三ツ星ファームは「無添加」や「保存料不使用」をうたうサービスではありません。{CHK}に公式サイトのトップとメニュー一覧のプログラムに含まれる表記を検索しましたが、無添加・保存料不使用の記載は見当たりませんでした。
          </p>
          <p className="mb-3">
            そこで、公式のメニュー一覧が読み込むメニューデータ（全{N_ALL}品）から、注文できて原材料が載っている<strong>{N}品の【原材料】表示</strong>を当サイトで集計し、どの添加物が何品に使われているかを数えました。
          </p>
          <p>添加物の安全性や良し悪しを判断するものではありません。原材料表示の事実を並べています。</p>''',
    "summary_title": "三ツ星ファームの添加物（要点）",
    "summary_box": f"集計した{N}品のうち、調味料（アミノ酸等）は{pct(C['調味料（アミノ酸等）'], N)}、着色料は{pct(C['着色料'], N)}、保存料は{pct(C['保存料'], N)}、甘味料は{pct(C['甘味料'], N)}に表示がありました。添加物の欄が分かれていないメニューは{len(NO_ADD)}品で、多くはミールキット・焼きいもなど素材に近い商品です。同じ冷凍弁当の食宅便（{NS}品）も、調味料（アミノ酸等）{CB['調味料（アミノ酸等）']}品・加工でん粉{CB['加工でん粉']}品と、使われ方は近い傾向でした。",
    "point_labels": ("◎ 集計でわかったこと", "△ 注意したい点"),
    "good_points": [
        f"保存料の表示は{C['保存料']}品（{N}品中）",
        "全メニューの原材料を公式サイトで公開",
        "素材に近いミールキット等は添加物の欄なし",
    ],
    "caution_points": [
        "「無添加」をうたうサービスではない",
        f"調味料（アミノ酸等）は{N}品中{C['調味料（アミノ酸等）']}品",
        "原材料は仕入れで変わる（届いた商品の表示が優先）",
    ],
    "body_before_reviews": "\n".join([
        h2("answer", "三ツ星ファームの添加物の結論"),
        table(
            ["確認したこと", "結果（2026年11月25日）"],
            [
                ["公式の「無添加」「保存料不使用」の表記", "トップ・メニュー一覧に見当たらず"],
                ["原材料を公開しているか", f"メニューデータの各商品に【原材料】を掲載（{N_ALL}品中{N_ALL - sum(1 for r in ALL if r['has_ingredients'] == '0')}品）"],
                ["添加物を使っているメニュー", f"{N}品中{N - len(NO_ADD)}品（添加物の欄があるもの）"],
                ["保存料", f"{C['保存料']}品"],
                ["甘味料", f"{C['甘味料']}品"],
                ["三ツ星基準のメニュー", f"{len(STD)}品中 調味料（アミノ酸等）{CS['調味料（アミノ酸等）']}品・着色料{CS['着色料']}品・保存料{CS['保存料']}品"],
            ],
        ),
        src(f"※出典: 公式 {a(MENUS, 'メニュー一覧')}が読み込む公開データ（{a(API, 'regular_menus')}）の各メニューの【原材料】（{CHK}取得）。原材料表示の「／」（または「/」）より後ろを添加物の欄として、当サイトが品名で数えました。注文できない商品と原材料の記載がない商品（菓子・ドリンクのセット等）は除いています。"),
        p(f"結論として、三ツ星ファームのお弁当の大半には、調味料（アミノ酸等）・加工でん粉・増粘剤などの一般的な食品添加物が表示されています。一方、保存料が表示されているのは{C['保存料']}品だけでした。料金やメニューは{a('/articles/mitsuboshi-farm-reviews/', '三ツ星ファームの口コミ・評判')}・{a('/articles/mitsuboshi-osusume-menu/', '三ツ星ファームのおすすめメニュー')}で解説しています。"),

        h2("count", f"添加物ごとの品数（{N}品の集計）"),
        table(
            ["添加物（表示名）", f"全メニュー（{N}品）", f"うち三ツ星基準（{len(STD)}品）"],
            [[k, pct(C[k], N), pct(CS[k], len(STD))] for k, _ in PATS],
        ),
        src("※1品に複数の添加物が表示されるため、合計は品数を超えます。「三ツ星基準」は公式のメニュー一覧のカテゴリ名で、糖質・たんぱく質などの栄養の基準です（添加物の基準ではありません）。集計は当サイト。"),
        ul([
            f"もっとも多いのは調味料（アミノ酸等）と加工でん粉で、どちらも8割以上のメニューに表示がありました",
            f"発色剤（亜硝酸Na）は{C['発色剤（亜硝酸Na）']}品",
            f"添加物の欄がないのは{len(NO_ADD)}品で、うちミールキット{len(KIT)}品（{'・'.join(KIT)}）は肉と野菜のみの原材料でした",
        ]),

        h2("compare", "食宅便との比較"),
        p(f"冷凍弁当で同じように原材料を公開している食宅便の「塩分&カロリーケア」「たんぱくケア」（{NS}品）を、同じ方法で数えました。"),
        table(
            ["添加物（表示名）", f"三ツ星ファーム（{N}品）", f"食宅便（{NS}品）"],
            [[k, pct(C[k], N), pct(CB[k], NS)] for k, _ in PATS if k in ("調味料（アミノ酸等）", "加工でん粉", "着色料", "香料", "発色剤（亜硝酸Na）", "甘味料", "保存料")],
        ),
        src(f"※出典: {a(SB30, '食宅便 塩分&カロリーケア')}・{a(SB31, 'たんぱくケア')}のコースページに掲載の原材料（{CHK}取得）。集計は当サイト。"),
        p(f"調味料（アミノ酸等）・加工でん粉が大半のメニューに表示されている点は、2社で共通していました。保存料は両社とも少数です。添加物をできるだけ避けたい方は、不使用の範囲を公式に示しているサービスを{a('/articles/mutenka-takuhai-bento/', '無添加の宅配弁当・冷凍宅食5社')}で比べられます。"),

        h2("list", "保存料・甘味料が表示されているメニュー"),
        h3(f"保存料（{len(PRES)}品）"),
        ul(PRES),
        h3(f"甘味料（{len(SWEET)}品）"),
        ul(SWEET),
        src("※かっこ内は原材料表示の記載のまま。メニューの入れ替えや仕入れで変わることがあります。"),

        h2("howto", "原材料表示の読み方"),
        ul([
            "食品表示基準では、原材料と添加物を「／」などで区切るか、別の欄に分けて、それぞれ重量の多い順に表示します",
            "「調味料（アミノ酸等）」は、うま味調味料などの添加物を一括名で表示したものです",
            "三ツ星ファームの各メニューには「原材料の仕入れ状況により栄養成分表示の数値は変動いたします。お手元に届いた商品に記載されている内容をご確認ください」との注記があります",
            f"「無添加」「不使用」の表示については、消費者庁が{a(CAA, '食品添加物の不使用表示に関するガイドライン')}を定めています",
        ]),
    ]),
    "faq": [
        ("三ツ星ファームは無添加ですか？", f"無添加をうたうサービスではありません。公式のメニューデータで原材料を確認できた{N}品のうち、{N - len(NO_ADD)}品に添加物の欄がありました（{CHK}・当サイト集計）。"),
        ("三ツ星ファームに保存料は入っていますか？", f"保存料の表示があったのは{N}品中{C['保存料']}品で、ポリリジンやソルビン酸でした。メニュー名は本文の一覧に載せています。"),
        ("化学調味料は使われていますか？", f"「化学調味料」は食品表示で使われる名称ではありません。うま味調味料などは「調味料（アミノ酸等）」と表示され、{N}品中{C['調味料（アミノ酸等）']}品にありました。"),
        ("人工甘味料は入っていますか？", f"甘味料の表示は{C['甘味料']}品で、スクラロース・ステビア・カンゾウなどでした。"),
        ("原材料はどこで確認できますか？", "公式サイトのメニュー一覧で各メニューを開くと、原材料・アレルゲン・栄養成分が表示されます。届いた商品のパッケージの表示が最終的な情報です。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p(f"三ツ星ファームは無添加をうたっておらず、原材料表示を集計すると、大半のメニューに調味料（アミノ酸等）・加工でん粉などが使われていました。保存料は{N}品中{C['保存料']}品、甘味料は{C['甘味料']}品と少数です。同じ冷凍弁当の食宅便と比べても、添加物の使われ方は近い傾向でした。"),
        p("気になる添加物がある場合は、注文前に公式サイトの各メニューの原材料表示を確認し、届いた商品のパッケージの表示もご確認ください。"),
    ]),
    "related": [
        ("/articles/mitsuboshi-farm-reviews/", "三ツ星ファームの口コミ・評判"),
        ("/articles/mitsuboshi-osusume-menu/", "三ツ星ファームのおすすめメニュー"),
        ("/articles/mitsuboshi-coupon/", "三ツ星ファームのクーポン"),
        ("/articles/mutenka-takuhai-bento/", "無添加の宅配弁当・冷凍宅食5社"),
        ("/articles/reitou-bento-eiyou-baransu/", "冷凍弁当の栄養バランス・添加物の見方"),
        ("/articles/nosh-vs-mitsuboshi-vs-wellness/", "nosh・三ツ星ファーム・ウェルネスダイニングを比較"),
    ],
}
