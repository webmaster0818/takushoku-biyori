# ご飯付き 冷凍弁当（kwexp 2026-11-17「ご飯付き 冷凍弁当」）
# 各社公式を 2026-11-17 に確認:
#   まごころケア食 ご飯付きセット（magokoro-care-shoku.com/products/detail/84・89・91、FAQ）
#   ニチレイフーズダイレクト きくばり まめなごはん（wellness.nichirei.co.jp/shop/c/c1014/・g/gc2609003/・g/g1302200/・送料 pages/guide02.aspx）
#   ママの休食（mamakyu.com）／ライフミール ご飯付きセット（l-meal.com・lifemeal-menu-20261117.tsv）
#   DELIPICKS（deli-picks.com・/trial/）／ワタミの宅食ダイレクト・食宅便 FAQ・ウェルネスダイニング・Dr.つるかめキッチン FAQ（おかずのみの確認）
#   三ツ星ファーム（mitsuboshi-menu-20261117.tsv）・nosh（nosh-menu-20261117.tsv）・マッスルデリ（muscle-deli-menu-20261116.tsv）はメニュー名で数えた
import csv
import re
import statistics as st
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月17日"
HERE = Path(__file__).resolve().parent


def load(name):
    return list(csv.DictReader((HERE / name).open(encoding="utf-8"), delimiter="\t"))


LM = [x for x in load("lifemeal-menu-20261117.tsv") if x["standard"] == "ご飯付きセット"]
LM_ALL = [x for x in load("lifemeal-menu-20261117.tsv") if "ワッフル" not in x["name"]]
LM30 = [x for x in LM_ALL if x["standard"] == "糖質30g基準"]
RICE = re.compile("丼|ライス|炒飯|チャーハン|(?<!朝)ごはん|(?<!朝)ご飯|ピラフ|リゾット|ビビンバ|カオマンガイ|飯|ドリア|玄米")
MF = [x for x in load("mitsuboshi-menu-20261117.tsv") if x["can_purchase"] == "1" and "丼の具" not in x["categories"]]
MF_RICE = [x for x in MF if RICE.search(x["name"])]
NS = [x for x in load("nosh-menu-20261117.tsv") if "販売休止" not in x["category"]]
NS_RICE = [x for x in NS if RICE.search(x["name"])]
MD = [x for x in load("muscle-deli-menu-20261116.tsv")]
MD_RICE = [x for x in MD if RICE.search(x["name"])]
F = lambda x, k: float(x[k])  # noqa: E731


def nm(x):
    return " ".join(x["name"].replace("　", " ").split())


def fmt(v):
    return f"{v:g}"


def rng(q, k, unit):
    v = [F(x, k) for x in q if x[k]]
    return f"{fmt(min(v))}〜{fmt(max(v))}{unit}（中央値 {fmt(round(st.median(v), 1))}{unit}）"


def yen(n):
    return f"{round(n):,}円"


MAGO = "https://magokoro-care-shoku.com/products/detail/84"
MAGO_OTOKU = "https://magokoro-care-shoku.com/products/detail/89"
MAGO_FAQ = "https://magokoro-care-shoku.com/faq.html"
NICHI = "https://wellness.nichirei.co.jp/shop/c/c1014/"
NICHI_SET = "https://wellness.nichirei.co.jp/shop/g/gc2609003/"
NICHI_ITEM = "https://wellness.nichirei.co.jp/shop/g/g1302200/"
NICHI_SHIP = "https://wellness.nichirei.co.jp/shop/pages/guide02.aspx"
MAMA = "https://mamakyu.com/"
LMEAL = "https://l-meal.com/products/list"
LMEAL_FAQ = "https://l-meal.com/faq"
LMEAL_PLAN = "https://l-meal.com/shopping/plan"
DELI = "https://deli-picks.com/"
DELI_TRIAL = "https://deli-picks.com/trial/"
MF_MENUS = "https://mitsuboshifarm.jp/menus"
NOSH_MENU = "https://nosh.jp/menu"
MD_MENU = "https://muscledeli.jp/shop/product_categories/md-lowfat"
SHOKUTAKU_FAQ = "https://shokutakubin.com/shop/pages/faq.aspx"
WELL = "https://www.wellness-dining.com/kikubari/"
TSURU_FAQ = "https://tsurukame-kitchen.com/faq/"
WATAMI = "https://www.watami-takushoku-direct.jp/shop/product_categories/3dishes"
WATAMI_ALA = "https://www.watami-takushoku-direct.jp/shop/product_categories/alacarte"

# 送料込みの1食（当サイト計算・本州の通常地域）
MAGO14 = (6552 + 980) / 14
NICHI12 = 9900 / 12
MAMA4 = (4703 + round(780 * 1.1)) / 4
LM20 = (9800 + 1230) / 20
LM10 = (5100 + 1230) / 10

ARTICLE = {
    "slug": "gohan-tsuki-reitou-bento",
    "component": "GohanTsukiReitouBentoPage",
    "name": "ご飯付きの冷凍弁当",
    "published": "2026-11-17",
    "title": "ご飯付きの冷凍弁当がある宅配食｜全食ご飯付きの4社と、ご飯を追加できる・一部だけのサービスを公式で確認【2026年11月】",
    "description": f"冷凍の宅配弁当で、ご飯（主食）まで付いて届くサービスを各社の公式サイトで確認しました。全食ご飯付きはまごころケア食・ニチレイフーズダイレクト・ママの休食・ライフミールの4社。料金・送料込みの1食あたり、ご飯付きにすると変わる糖質と送料、おかずのみのサービスも整理しています（{CHK}確認）。",
    "keywords": "ご飯付き 冷凍弁当, ご飯付き 宅配弁当, 冷凍弁当 ご飯付き 宅配, ごはん付き 冷凍弁当, 主食付き 冷凍弁当, ご飯付き 宅食",
    "cat": "目的別ガイド・ランキング",
    "cat_id": "mokuteki",
    "crumb": "ご飯付きの冷凍弁当",
    "official_url": None,
    "ad_note": "※本記事のリンクはすべて各社の公式サイトで、アフィリエイト広告ではありません。",
    "summary_title": "ご飯付きの冷凍弁当の要点",
    "point_labels": ("◎ 全食ご飯付きで届く", "△ ご飯は追加・一部のみ／おかずのみ"),
    "toc": [
        ("full", "全食ご飯付きで届く4社"),
        ("price", "送料込みの1食あたり（当サイト計算）"),
        ("partial", "ご飯を追加できる・一部のメニューだけご飯入りのサービス"),
        ("okazu", "おかずのみ（ご飯は付かない）のサービス"),
        ("points", "ご飯付きを選ぶときに確かめたいこと"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            冷凍の宅配弁当の多くは「おかずのみ」で、ご飯は自分で用意する前提です。炊飯の手間を省きたい方や、1食をまるごと任せたい方にとっては、<strong>ご飯まで付いて届くかどうか</strong>が選ぶときの大きな分かれ目になります。
          </p>
          <p className="mb-3">
            この記事では、{CHK}に各社の公式サイトで、ご飯（主食）付きの冷凍弁当があるかを確認しました。全食にご飯が付くサービス、ご飯を追加できるサービス、メニューの一部だけご飯入りのサービス、おかずのみのサービスに分けて整理し、送料込みの1食あたりは当サイトで計算しています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>''',
    "summary_box": f"全食にご飯が付いて届くのは、まごころケア食「ご飯付きセット」、ニチレイフーズダイレクト「きくばり まめなごはん」、ママの休食、ライフミール「ご飯付きセット」の4社でした。送料込みの1食あたりは、まごころケア食（お得便14食）が約{yen(MAGO14)}、ライフミール（20食）が約{yen(LM20)}です（当サイト計算）。DELIPICKSはご飯を追加でき、三ツ星ファーム・nosh・マッスルデリはメニューの一部が丼・炒飯などのご飯もの、ワタミの宅食ダイレクト・食宅便・ウェルネスダイニング・Dr.つるかめキッチンはおかずのみです（{CHK}確認）。",
    "good_points": [
        "まごころケア食（ご飯付きセット）",
        "ニチレイ（きくばり まめなごはん）",
        "ママの休食",
        "ライフミール（ご飯付きセット）",
    ],
    "caution_points": [
        "DELIPICKS：ご飯を追加（別料金）",
        "三ツ星ファーム・nosh・マッスルデリ：一部のみ",
        "ワタミ・食宅便・ウェルネス・つるかめ：おかずのみ",
    ],
    "body_before_reviews": "\n".join([
        h2("full", "全食ご飯付きで届く4社"),
        table(
            ["サービス", "公式の説明（抜粋）", "料金の例（税込）", "送料（税込）"],
            [
                ["まごころケア食「ご飯付きセット」", "「主菜1品・副菜2品・麦ご飯がついた、食べごたえのある構成」", "定期（お得便）7食3,556円・10食4,881円・14食6,552円／都度10食6,670円", "980円（沖縄県・離島1,480円）"],
                ["ニチレイフーズダイレクト「きくばり まめなごはん」", "「ごはん付きのタンパク質が摂れるメニュー」（主食・主菜・副菜のワンプレート）", "単品970円／10食セット9,700円／3回定期12食9,900円", "本州・四国は7,500円以上で無料（5,000円未満は1,000円）。定期購入は全地域無料"],
                ["ママの休食", "「1食の内容は、メイン1品、サイド3～4品、国産ごはんです」", "4食定期便 初回3,920円・2回目以降4,703円", "780〜1,500円（地域別・消費税別）"],
                ["ライフミール「ご飯付きセット」", "「主菜・副菜に加え、麦ごはんをセットにしたメニュー」", "定期10食5,100円・20食9,800円（ご飯付き以外と同額）", "ご飯付きを含むと1,230円（沖縄県1,730円）"],
            ],
        ),
        src(f"※出典: {a(MAGO, 'まごころケア食 ご飯付きセット')}・{a(MAGO_OTOKU, 'お得便')}・{a(MAGO_FAQ, 'よくある質問')}／{a(NICHI, 'ニチレイフーズダイレクト きくばり まめなごはん')}・{a(NICHI_SET, '10食セット')}・{a(NICHI_SHIP, '送料')}／{a(MAMA, 'ママの休食')}／{a(LMEAL, 'ライフミール メニュー一覧')}・{a(LMEAL_PLAN, '料金プラン')}・{a(LMEAL_FAQ, 'よくある質問')}（{CHK}確認）"),
        ul([
            "まごころケア食のご飯付きセットはメニューを選べないおまかせです。容器は縦17.8cm×横19.8cm×高さ3.5cmで、電子レンジ600Wで5分30秒と案内されています。ご飯の量（g）とカロリーは商品ページに記載がありません",
            "ニチレイの「きくばり まめなごはん」は、味付きのご飯と主菜・副菜のワンプレートです。例として「えびカツとチキンライス」は1食255gで426kcal・たんぱく質20.4g・食塩相当量2.5gと表示されています",
            "ママの休食は妊娠中・産後の方向けで、定期便のみ（毎週・2週に1回・月に1回）です。公式は「定期便の回数の縛りや制限はありません」としています",
            f"ライフミールのご飯付きセットは{len(LM)}品から選べ、掲載値はエネルギー{rng(LM, 'kcal', 'kcal')}・食塩相当量{rng(LM, 'salt', 'g')}でした（当サイト集計）。ご飯付きセットを1つでも選ぶと、送料が250円上がります",
        ]),
        src(f"※出典: {a(MAGO_FAQ, 'まごころケア食 よくある質問')}・{a(NICHI_ITEM, 'ニチレイ えびカツとチキンライス')}・{a(MAMA, 'ママの休食')}・{a(LMEAL, 'ライフミール メニュー一覧')}（{CHK}確認）"),

        h2("price", "送料込みの1食あたり（当サイト計算）"),
        table(
            ["サービス・プラン", "計算", "送料込みの1食あたり"],
            [
                ["まごころケア食 お得便14食", "（6,552円＋980円）÷14食", f"約{yen(MAGO14)}"],
                ["ライフミール 20食（ご飯付きを含む）", "（9,800円＋1,230円）÷20食", f"約{yen(LM20)}"],
                ["ライフミール 10食（ご飯付きを含む）", "（5,100円＋1,230円）÷10食", f"約{yen(LM10)}"],
                ["ニチレイ 3回定期12食", "9,900円÷12食（定期は送料無料）", f"約{yen(NICHI12)}"],
                ["ママの休食 4食（2回目以降・関東）", "（4,703円＋送料780円の税込858円）÷4食", f"約{yen(MAMA4)}"],
            ],
        ),
        src("※各社公式の料金・送料（2026年11月17日確認）から当サイトが計算。本州の通常地域の場合で、初回限定価格・キャンペーンは含めていません。ママの休食の送料は公式表記が消費税別のため10%を加えています。"),
        p("同じ「ご飯付き」でも、1食の料金は500円台から1,000円台まで開きがあります。まごころケア食とライフミールは同じ株式会社シルバーライフの運営で、価格帯が近いサービスです。ニチレイはたんぱく質20g以上をうたうメニュー、ママの休食は妊娠中・産後向けと、対象がはっきりしたサービスです。"),

        h2("partial", "ご飯を追加できる・一部のメニューだけご飯入りのサービス"),
        table(
            ["サービス", "ご飯の扱い", "確認できたこと"],
            [
                ["DELIPICKS", "ご飯を追加できる（別料金）", "「お好みでご飯つきに。」ご飯は定価313円、お弁当は定価994円（まとめ買いで最大20%OFF）。お試しセットはおかず5食＋雑穀ごはんとブロッコリー1食で3,218円"],
                ["三ツ星ファーム", "一部のメニューがご飯もの", f"注文できるメニュー{len(MF)}品のうち、メニュー名にご飯・丼などが入るものは{len(MF_RICE)}品"],
                ["nosh（ナッシュ）", "一部のメニューがご飯もの", f"メニュー{len(NS)}品のうち、メニュー名にご飯ものが入るものは{len(NS_RICE)}品（" + "・".join(nm(x) for x in NS_RICE) + "）"],
                ["マッスルデリ", "一部のメニューがご飯もの", f"メニュー{len(MD)}品のうち、メニュー名に丼・炒飯・ライスなどが入るものは{len(MD_RICE)}品"],
            ],
        ),
        src(f"※出典: {a(DELI, 'DELIPICKS 公式')}・{a(DELI_TRIAL, 'お試しセット')}（{CHK}確認）。三ツ星ファーム・nosh・マッスルデリは各社の公式メニュー一覧（{a(MF_MENUS, '三ツ星ファーム')}・{a(NOSH_MENU, 'nosh')} は{CHK}、{a(MD_MENU, 'マッスルデリ')}は2026年11月16日に取得）のメニュー名から、丼・ライス・炒飯・ごはん・リゾットなどを含むものを当サイトが数えた目安です。DELIPICKSの定期便の配送手数料は、公式ヘルプが表示できず確認できていません。"),
        h3(f"三ツ星ファームのご飯もののメニュー（{len(MF_RICE)}品）"),
        table(["メニュー名", "エネルギー", "糖質", "食塩相当量"], [[nm(x), f"{x['kcal']}kcal", ((x["sugar"] + "g") + ("※" if x["carb"] and float(x["sugar"]) > float(x["carb"]) else "")) if x["sugar"] else "記載なし", f"{x['salt']}g"] for x in MF_RICE]),
        src(f"※{a(MF_MENUS, '三ツ星ファーム メニュー一覧')}の掲載値（{CHK}取得）。糖質の「※」は、公式の掲載値で糖質（69g）が炭水化物（41.1g）を上回っており、誤記の可能性があるものです。メニューの詳しい集計は{a('/articles/mitsuboshi-osusume-menu/', '三ツ星ファームのおすすめメニュー')}にまとめています。"),

        h2("okazu", "おかずのみ（ご飯は付かない）のサービス"),
        table(
            ["サービス", "公式の案内（抜粋）", "ご飯の用意"],
            [
                ["ワタミの宅食ダイレクト", "「ごはんとお味噌汁を準備すれば、簡単に「一汁三菜」の食卓を実現できます。」", "アラカルトで「ごはん」を単品販売（160円）"],
                ["食宅便", "「基本ご飯はつきませんが、ご一緒にパックの冷凍白飯やフリーズドライのみそ汁を付けることができます。」", "冷凍白飯を一緒に注文できる"],
                ["ウェルネスダイニング（気配り宅配食）", "「おかずのみのお届けですので、お客様でご用意いただくご飯とともにお召し上がりください。」", "常温のご飯を別に販売"],
                ["Dr.つるかめキッチン", "「ご飯はつきません。おかずのみでお届けとなります。」", "自分で用意"],
            ],
        ),
        src(f"※出典: {a(WATAMI, 'ワタミの宅食ダイレクト いつでも三菜')}・{a(WATAMI_ALA, 'アラカルト')}・{a(SHOKUTAKU_FAQ, '食宅便 よくあるご質問')}・{a(WELL, 'ウェルネスダイニング 気配り宅配食')}・{a(TSURU_FAQ, 'Dr.つるかめキッチン よくあるご質問')}（{CHK}確認）"),
        p("おかずのみのサービスでも、食宅便のように冷凍の白飯を同時に注文できるものがあります。ご飯の量や種類（白米・雑穀米など）を自分で決めたい方は、おかずのみのサービスとパックご飯を組み合わせる方法もあります。"),

        h2("points", "ご飯付きを選ぶときに確かめたいこと"),
        ul([
            f"<strong>糖質とカロリーが増える</strong>：ライフミールの掲載値では、ご飯付きセットの糖質が{rng(LM, 'sugar', 'g')}、ご飯の付かない糖質30g基準は{rng(LM30, 'sugar', 'g')}でした（当サイト集計）。糖質を控えている方は、ご飯付きにするかを分けて考える必要があります",
            "<strong>送料が変わることがある</strong>：ライフミールはご飯付きセットを1つでも選ぶと送料が250円上がります",
            "<strong>メニューを選べるか</strong>：まごころケア食のご飯付きセットはおまかせ、ライフミールは選択式です",
            "<strong>冷凍庫の容量</strong>：ご飯付きは容器に高さが出ます。まごころケア食は1食あたり高さ3.5cmの容器と案内されています",
            "<strong>ご飯の量が書かれていないことが多い</strong>：今回確認した公式ページでは、ご飯の重さ（g）の記載は見つかりませんでした。量を重視する方は、1食の内容量やカロリーで比べてください",
        ]),
        p(f"各社の口コミは{a('/articles/magokoro-care-reviews/', 'まごころケア食の口コミ・評判')}・{a('/articles/nichirei-foods-direct-kuchikomi/', 'ニチレイフーズダイレクトの口コミ・評判')}・{a('/articles/mamano-kyushoku-reviews/', 'ママの休食の口コミ・評判')}、ライフミールのメニュー全品は{a('/articles/lifemeal-menu/', 'ライフミールのメニュー一覧')}で確認できます。"),
    ]),
    "faq": [
        ("ご飯付きの冷凍弁当を届けてくれる宅配食は？", "全食にご飯が付くのは、まごころケア食「ご飯付きセット」、ニチレイフーズダイレクト「きくばり まめなごはん」、ママの休食、ライフミール「ご飯付きセット」でした（2026年11月17日確認）。"),
        ("ご飯付きで一番安いのは？", f"今回確認した中では、まごころケア食のお得便14食が送料込みで1食約{yen(MAGO14)}、ライフミールの20食（ご飯付きを含む）が約{yen(LM20)}でした（当サイト計算・初回限定価格を除く）。"),
        ("noshや三ツ星ファームにご飯は付きますか？", f"基本はおかずのみですが、メニューの一部に炒飯・丼・リゾットなどのご飯ものがあります（三ツ星ファーム{len(MF_RICE)}品・nosh {len(NS_RICE)}品・メニュー名で数えた当サイト集計）。"),
        ("ワタミの宅食ダイレクトや食宅便はご飯付きですか？", "どちらもおかずのみです。ワタミの宅食ダイレクトはご飯を単品で販売しており、食宅便は冷凍白飯を一緒に注文できます。"),
        ("ご飯の量はどのくらいですか？", "今回確認した公式ページには、ご飯の重さの記載がありませんでした。ニチレイは1食の内容量（例：255g）、ライフミールは1食のエネルギー・糖質を掲載しています。"),
        ("糖質制限中でもご飯付きを選んでよいですか？", f"ご飯付きは糖質が多くなります。ライフミールの例では、ご飯付きセットの糖質中央値が{fmt(round(st.median(F(x, 'sugar') for x in LM), 1))}gでした。糖質を控えている場合は、医師・管理栄養士の指示に合わせて選んでください。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p("冷凍の宅配弁当でご飯まで届くのは、まごころケア食・ニチレイフーズダイレクト・ママの休食・ライフミールの4社でした。料金を抑えたいならまごころケア食やライフミール、たんぱく質を重視するならニチレイ、妊娠中・産後ならママの休食と、目的で選び分けられます。ご飯付きは糖質が増え、送料が変わるサービスもあるため、料金表と栄養成分をあわせて確認してください。"),
        p("料金・送料・メニューは変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。"),
    ]),
    "related": [
        ("/articles/lifemeal-menu/", "ライフミールのメニュー一覧"),
        ("/articles/magokoro-care-reviews/", "まごころケア食の口コミ・評判"),
        ("/articles/nichirei-foods-direct-kuchikomi/", "ニチレイフーズダイレクトの口コミ・評判"),
        ("/articles/takushoku-ryokin-hakusho/", "宅食料金白書｜各社の料金・送料・1食単価"),
    ],
}
