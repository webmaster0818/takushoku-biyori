# わんまいる メニュー（kwexp 2026-11-17「わんまいる メニュー」）
# 公式 www.onemile.jp の献立ページ（/fs/kenko-dinner-menu・/fs/bishoku-bento-menu）・メニュー紹介（/fs/menu）・よくある質問（/fs/q_a）・
# 商品ページ（/product/370・371・3360・1706・1707・3363）・申込フォーム（/product-buy-form/teiki・tray-type）を 2026-11-17 に確認
# 献立の集計は wanmairu-menu-20261117.tsv（献立ページに載っている5週分×2商品＝50食の kcal・糖質・塩分を書き出したもの。carb 列は糖質）から当サイトが計算
import csv
import statistics as st
from collections import OrderedDict
from pathlib import Path

from kwexp_util import table, src, p, h2, h3, a, ul

CHK = "2026年11月17日"
TSV = Path(__file__).resolve().parent / "wanmairu-menu-20261117.tsv"
R = list(csv.DictReader(TSV.open(encoding="utf-8"), delimiter="\t"))
KD = [x for x in R if x["set_or_week"].startswith("健幸ディナー")]
BB = [x for x in R if x["set_or_week"].startswith("美食弁当")]
assert len(KD) == 25 and len(BB) == 25
F = lambda x, k: float(x[k])  # noqa: E731

KD_MENU = "https://www.onemile.jp/fs/kenko-dinner-menu"
BB_MENU = "https://www.onemile.jp/fs/bishoku-bento-menu"
MENU = "https://www.onemile.jp/fs/menu"
QA = "https://www.onemile.jp/fs/q_a"
P370 = "https://www.onemile.jp/product/370"
P371 = "https://www.onemile.jp/product/371"
P3360 = "https://www.onemile.jp/product/3360"
P1706 = "https://www.onemile.jp/product/1706"
P1707 = "https://www.onemile.jp/product/1707"
P3363 = "https://www.onemile.jp/product/3363"
TEIKI = "https://www.onemile.jp/product-buy-form/teiki"
TRAY = "https://www.onemile.jp/product-buy-form/tray-type"


def fmt(v):
    return f"{v:g}"


def weeks(q):
    w = OrderedDict()
    for x in q:
        w.setdefault(x["set_or_week"].split(" ", 1)[1], []).append(x)
    return w


def week_label(s):
    return s.replace("(土)", "").replace("(金)", "").replace("−", "〜")


def avg(q, k):
    return round(st.mean(F(x, k) for x in q), 1)


def rng(q, k, unit):
    v = [F(x, k) for x in q]
    return f"{fmt(min(v))}〜{fmt(max(v))}{unit}（中央値 {fmt(round(st.median(v), 1))}{unit}）"


def week_avg_rows(q):
    return [[week_label(w), f"{fmt(avg(v, 'kcal'))}kcal", f"{fmt(avg(v, 'carb'))}g", f"{fmt(avg(v, 'salt'))}g"] for w, v in weeks(q).items()]


def meal_name(x):
    return x["meal_name"].split(" ", 1)[1]


def side_dishes(x):
    return "・".join(d.replace("副菜 ", "") for d in x["dishes"].split(" / ") if d.startswith("副菜"))


def week_tables(q, url, label):
    out = []
    for w, v in weeks(q).items():
        out.append(h3(f"{label}：{week_label(w)}のお届け"))
        out.append(table(
            ["", "セット（主菜）", "副菜", "エネルギー", "糖質", "塩分"],
            [[f"{i + 1}食目", meal_name(x), side_dishes(x), f"{fmt(F(x, 'kcal'))}kcal", f"{fmt(F(x, 'carb'))}g", f"{fmt(F(x, 'salt'))}g"] for i, x in enumerate(v)],
        ))
    out.append(src(f"※出典: {a(url, f'わんまいる {label}の献立')}（{CHK}確認）。お届けの週は土曜〜金曜（北海道・東北・九州〈福岡除く〉は日曜〜土曜）。物価高・品不足の影響でメニューが変わる場合があると公式に記載があります。"))
    return out


KD_WEEKS = len(weeks(KD))
KD_OVER_SALT = [x for x in KD if F(x, "salt") >= 3.5]
KD_MAX_SALT = max(KD, key=lambda x: F(x, "salt"))
KD_ALL_OK = all(avg(v, "carb") <= 30 and avg(v, "salt") < 3.5 and avg(v, "kcal") <= 400 for v in weeks(KD).values())
BB_ALL_OK = all(avg(v, "carb") <= 30 and avg(v, "salt") < 2.5 and avg(v, "kcal") <= 300 for v in weeks(BB).values())
assert KD_ALL_OK and BB_ALL_OK

ARTICLE = {
    "slug": "wanmairu-menu",
    "component": "WanmairuMenuPage",
    "name": "わんまいる",
    "published": "2026-11-17",
    "title": "わんまいるのメニュー｜健幸ディナーと美食弁当の5週分50食の献立・カロリー・糖質・塩分を公式で確認【2026年11月】",
    "description": f"わんまいるの公式献立ページに掲載されている、健幸ディナー（湯せん・流水解凍）と美食弁当（レンジ）の5週分・計50食のメニューを一覧にしました。週ごとの平均カロリー・糖質・塩分を当サイトで計算し、公式の栄養基準と照らし合わせています。メニューは選べず週替わりです（{CHK}確認）。",
    "keywords": "わんまいる メニュー, わんまいる 献立, わんまいる 健幸ディナー メニュー, わんまいる 美食弁当 メニュー, わんまいる 今週のメニュー, わんまいる カロリー",
    "cat": "選び方・使い方・サービス紹介",
    "cat_id": "guide",
    "crumb": "わんまいるのメニュー",
    "official_url": "https://www.onemile.jp/",
    "cta": "わんまいる 公式サイトを見る",
    "summary_title": "わんまいるのメニューの要点",
    "point_labels": ("◎ 確認できたこと", "△ 注意したい点"),
    "toc": [
        ("lineup", "2つの商品と料金"),
        ("rule", "メニューの決まり方：週替わり・選択不可"),
        ("nutrition", "週ごとの平均と公式の栄養基準（当サイト計算）"),
        ("kenko", "健幸ディナーの献立（5週分）"),
        ("bishoku", "美食弁当の献立（5週分）"),
        ("notes", "アレルゲン・賞味期限・調理方法"),
        ("faq", "よくある質問（FAQ）"),
        ("summary", "まとめ"),
    ],
    "lead": f'''          <p className="mb-3">
            わんまいるは、国産食材を使った冷凍のおかずを届ける宅配食です。商品は、湯せん・流水解凍で温める袋入りの<strong>健幸ディナー</strong>と、電子レンジで温めるトレー入りの<strong>美食弁当</strong>の2つで、どちらも「主菜1品＋副菜2品」を1食として、5食分が週替わりのメニューで届きます。
          </p>
          <p className="mb-3">
            この記事では、{CHK}に公式の献立ページに掲載されていた<strong>2商品×5週分＝50食のメニュー</strong>と、各食のエネルギー・糖質・塩分を書き出しました。週ごとの平均は当サイトが計算し、公式が示す栄養基準と照らし合わせています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>''',
    "summary_box": f"わんまいるのメニューは週替わりで、自分で選ぶことはできません（公式FAQ）。公式の献立ページには{week_label(next(iter(weeks(KD))))}から5週分が掲載されており、健幸ディナーは1食{rng(KD, 'kcal', 'kcal')}、美食弁当は{rng(BB, 'kcal', 'kcal')}でした。週ごとの5食平均は、2商品とも全5週で公式の栄養基準（健幸ディナー＝糖質30g以下・塩分3.5g未満・400kcal以下）の範囲内でした（当サイト計算）。",
    "good_points": [
        "5週先までの献立とカロリー・糖質・塩分が公開されている",
        "週ごとの平均は全週で公式の栄養基準の範囲内",
        "8週間は同じメニューが届かない（公式）",
    ],
    "caution_points": [
        "メニューは選べない（1週間に1種類）",
        "たんぱく質・脂質は献立ページに掲載なし",
        f"1食で塩分3.5g以上の日もある（{len(KD_OVER_SALT)}食）",
    ],
    "body_before_reviews": "\n".join([
        h2("lineup", "2つの商品と料金"),
        table(
            ["商品", "形態・温め方", "1回のお届け", "定期（税込）", "都度購入（税込）"],
            [
                ["健幸ディナー", "袋入り・湯せん または 流水解凍", "主菜1品＋副菜2品×5食（計15袋）", "1週間分 6,280円／2週間分 12,560円", "5食 6,780円"],
                ["美食弁当", "トレー入り・電子レンジ", "1トレー（主菜1品＋副菜2品）×5種類", "1週間分 6,280円／2週間分 12,560円", "5食 6,780円"],
            ],
        ),
        src(f"※出典: わんまいる 商品ページ（{a(P370, '健幸ディナー 定期1週間分')}・{a(P371, '定期2週間分')}・{a(P3360, '都度購入')}・{a(P1706, '美食弁当 定期1週間分')}・{a(P1707, '定期2週間分')}・{a(P3363, '都度購入')}）（{CHK}確認）"),
        p(f"送料は商品ページとよくある質問で「本州・四国・九州は送料1,080円（税込）」「北海道・沖縄県は特別配送料金：2,645円（税込）」と案内されています。定期1週間分の場合、送料を含めた1食あたりは（6,280円＋1,080円）÷5食＝<strong>1,472円</strong>です（当サイト計算）。なお、申込フォーム内のご利用ガイドには送料935円（北海道・沖縄2,500円）の記載が残っており、公式内で表記が食い違っています。ここでは商品ページとFAQの1,080円で計算しました。"),
        src(f"※出典: {a(P370, 'わんまいる 商品ページ')}・{a(QA, 'よくある質問')}・{a(TEIKI, '定期申込フォームのご利用ガイド')}（{CHK}確認）"),

        h2("rule", "メニューの決まり方：週替わり・選択不可"),
        table(
            ["項目", "公式の案内"],
            [
                ["メニューの選択", "選べない（「1週間に1種類のみのご用意となります」）"],
                ["入れ替わり", "週替わり。「8週間、同じメニューは一切ありません」"],
                ["定番の料理", "人気の惣菜（さばの味噌煮・ハンバーグ・麻婆豆腐など）は年間定番として毎月1回登場"],
                ["メニューの種類", "健幸ディナーは「主菜だけで数十種類、副菜も入れると100種類以上」"],
                ["食事制限への対応", "糖尿病・腎臓病に対応した料理はない"],
                ["お届けの週", "土曜〜金曜（北海道・東北・九州〈福岡除く〉は日曜〜土曜）"],
            ],
        ),
        src(f"※出典: {a(QA, 'わんまいる よくある質問「メニューは選べるのですか。」')}・{a(KD_MENU, '健幸ディナーの献立')}・{a(MENU, 'メニュー紹介')}（{CHK}確認）"),
        p("苦手な料理だけを外す仕組みは公式に案内がありません。気になる料理がある週は、献立を見てからスキップ（休止）するのが現実的な方法です。休止や再開は回数・期間の制限がなく、次回お届けの6日前までに連絡します（公式FAQ）。"),

        h2("nutrition", "週ごとの平均と公式の栄養基準（当サイト計算）"),
        p("公式は、健幸ディナーを「5食平均 糖質30g以下、塩分3.5g未満、400kcal以下」、美食弁当を「1か月分の1食平均 たんぱく質15g以上、糖質30g以下、塩分2.5g未満、300kcal以下、脂質20g以下、炭水化物30g以下」と案内しています。献立ページに掲載されている値で、週ごとの5食平均を計算しました。"),
        h3("健幸ディナー（基準：糖質30g以下・塩分3.5g未満・400kcal以下）"),
        table(["お届けの週", "平均エネルギー", "平均糖質", "平均塩分"], week_avg_rows(KD)),
        h3("美食弁当（基準：糖質30g以下・塩分2.5g未満・300kcal以下）"),
        table(["お届けの週", "平均エネルギー", "平均糖質", "平均塩分"], week_avg_rows(BB)),
        src(f"※{a(KD_MENU, '健幸ディナーの献立')}・{a(BB_MENU, '美食弁当の献立')}の各食の掲載値（{CHK}確認）を当サイトが平均（小数第1位）。基準の出典は{a(QA, 'よくある質問')}・{a(TRAY, '美食弁当の申込フォーム')}。美食弁当の基準は「1か月分の平均」のため、週ごとの平均は参考値です。"),
        p(f"2商品とも、掲載されている5週すべてで週平均が公式の基準の範囲内でした。ただし基準は平均なので、1食ごとには幅があります。健幸ディナーで塩分が最も多いのは{meal_name(KD_MAX_SALT)}の{fmt(F(KD_MAX_SALT, 'salt'))}gで、3.5g以上の食事は25食中{len(KD_OVER_SALT)}食でした。塩分を控えている方は、献立ページで各食の値を確認しておくと安心です。たんぱく質と脂質は献立ページに掲載がなく、確認できたのはエネルギー・糖質・塩分の3項目です。"),

        h2("kenko", "健幸ディナーの献立（5週分）"),
        p("袋入りで、料理ごとに湯せん・流水解凍を使い分けます。各食は「主菜1品＋副菜2品」です。"),
        *week_tables(KD, KD_MENU, "健幸ディナー"),

        h2("bishoku", "美食弁当の献立（5週分）"),
        p("トレー入りで、電子レンジで温めます。公式は「食材・調味料に至るまで食品添加物無添加」としています。"),
        *week_tables(BB, BB_MENU, "美食弁当"),

        h2("notes", "アレルゲン・賞味期限・調理方法"),
        ul([
            "アレルゲン：献立ページに週ごとの含有品目が掲載されています（例：11月14日〜20日の健幸ディナーは「卵・乳成分・小麦・いか・ごま・牛肉・さば・大豆・鶏肉・豚肉・りんごを含みます」）。商品ページには料理ごとの原材料も掲載されています",
            "賞味期限：日数の記載はなく、「賞味期限から30日以上前の商品をお届けしています」と案内されています。解凍後の再冷凍はできません",
            "健幸ディナーの温め方：「そのまま湯せん、又は、流水解凍」。料理ごとに方法が異なります。袋のサイズは縦25cm×横20cm×厚み1.5cm",
            "美食弁当の温め方：電子レンジ（時間はトレーによって異なる）。1トレーのサイズは縦15cm×横20cm×厚み3.5cm",
            "国産食材：国産食材100%としつつ、調味料やハム・チーズなどの原料の一部に海外のものが含まれる場合があると案内されています",
        ]),
        src(f"※出典: {a(KD_MENU, '健幸ディナーの献立')}・{a(QA, 'よくある質問')}・{a(P370, '商品ページ')}・{a(P1706, '美食弁当 商品ページ')}・{a(TEIKI, '定期申込フォーム')}（{CHK}確認）"),
        p(f"味や量の評判は{a('/articles/wanmairu-reviews/', 'わんまいるの口コミ・評判')}で、出典付きで整理しています。"),
        f'        <OfficialButton>わんまいる 公式サイトを見る</OfficialButton>',
    ]),
    "faq": [
        ("わんまいるのメニューは選べますか？", "選べません。公式FAQは「1週間に1種類のみのご用意となります」と案内しています。メニューは週替わりで、8週間は同じメニューが届かない組み立てです。"),
        ("今週・来週のメニューはどこで確認できますか？", f"公式サイトの献立ページ（健幸ディナー・美食弁当それぞれ）に、今週を含む5週分が掲載されています。{CHK}時点では11月14日〜12月18日のお届け分でした。"),
        ("健幸ディナーと美食弁当の違いは？", "健幸ディナーは袋入りで湯せん・流水解凍、美食弁当はトレー入りで電子レンジで温めます。料金は同じで、定期1週間分（5食）6,280円・都度購入6,780円（税込・送料別）です。"),
        ("1食のカロリーはどのくらいですか？", f"{CHK}に確認した5週分では、健幸ディナーが{rng(KD, 'kcal', 'kcal')}、美食弁当が{rng(BB, 'kcal', 'kcal')}でした（当サイト集計）。"),
        ("塩分は多いですか？", f"健幸ディナーは1食{rng(KD, 'salt', 'g')}、美食弁当は{rng(BB, 'salt', 'g')}でした。週ごとの平均は2商品とも公式の基準（健幸ディナー3.5g未満・美食弁当2.5g未満）の範囲内です。"),
        ("たんぱく質の量はわかりますか？", "献立ページにはたんぱく質・脂質の掲載がありません。公式は健幸ディナーを「5食平均 たんぱく質20g以上」、美食弁当を「1か月分の1食平均 たんぱく質15g以上」と案内しています。"),
    ],
    "summary": "\n".join([
        h2("summary", "まとめ"),
        p("わんまいるのメニューは週替わりで選べませんが、公式の献立ページで5週先までの料理とエネルギー・糖質・塩分を確認できます。掲載されていた50食では、週ごとの平均はどの週も公式の栄養基準の範囲内でした。1食ごとの塩分には幅があるため、気になる方は献立を見て、合わない週はスキップする使い方ができます。"),
        p("メニュー・料金・送料は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。"),
    ]),
    "related": [
        ("/articles/wanmairu-reviews/", "わんまいるの口コミ・評判"),
        ("/articles/mutenka-takuhai-bento/", "無添加の宅配弁当の比較"),
        ("/articles/takushoku-ryokin-hakusho/", "宅食料金白書｜各社の料金・送料・1食単価"),
        ("/articles/koureisha-osusume/", "高齢者向けの宅配弁当の選び方"),
    ],
}
