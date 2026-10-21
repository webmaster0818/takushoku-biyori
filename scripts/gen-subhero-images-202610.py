#!/usr/bin/env python3
"""配下ページの見出し帯（ファーストビュー）用テーマ画像を Nano Banana Pro で作る（2026-10-21・デザイン「食卓」）。
gold / gakki の同名スクリプトと同じ構成。トーンは TOP の hero-shokutaku.webp（白磁・明るいオーク・リネン・窓の自然光）。

  python3 scripts/gen-subhero-images-202610.py <key ...|all> [--force]
    → design-proposals/subhero-raw/<key>.png（元画像・リポ外）
    → public/images/subhero/<key>.webp（PC 1400px）と <key>-m.webp（スマホ用に右側を切り出し 780px）
  python3 scripts/gen-subhero-images-202610.py --convert-only [key ...]
  python3 scripts/gen-subhero-images-202610.py --list

🚨 当サイトは実食していない。**特定サービスの商品・弁当・容器・パッケージに見える写真は作らない**（実物写真と誤認させるため）。
   テーマ単位の情景だけ＝家庭の食卓、無地の容器が並ぶ冷凍庫、玄関先の無地の段ボール、電子レンジ、高齢の方の食卓（人物なし）など。
   料理は家庭料理として陶器・ガラスの器に盛ったものだけ。プラスチックの弁当トレー・仕切り容器・袋・ラベルは描かない。
⚠️ 文字・ロゴ・人物・顔・手なし。被写体は右側、左 50% は無地の明るい面（帯の文字側へ溶かすため）。21:9。
⚠️ 呼び出し回数は scripts/nb_image.py の共通ログ（上限 60＝案出し・TOP 写真と合算）。
ページへの割り当ては scripts/add-subhero-images-202610.py（data/subhero-map.json）。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import nb_image  # noqa: E402

ROOT = nb_image.ROOT
RAW = nb_image.DP / "subhero-raw"
OUT = ROOT / "public" / "images" / "subhero"

STYLE = (
    "Photorealistic editorial lifestyle photograph for a calm Japanese home-cooking and household magazine, full-frame camera, 50mm lens at f/2.8, "
    "natural perspective, real materials with subtle real-world texture, gentle film grain. Soft natural daylight from a window, gentle soft shadows, "
    "fresh and warm colour grade: porcelain white, light oak, linen beige, soft sage green, with a small touch of persimmon orange. Light and airy, never dark. "
    "Ultra-wide 21:9 composition: the main subject is compact and sits in the RIGHT 40% of the frame, vertically centred, with calm space above and below it. "
    "The LEFT 50% of the frame is a calm, plain, very light surface or wall gently out of focus, with nothing in it. "
    "No people, no faces, no hands, no human figures. "
    "Any food is home-style cooking served in plain handmade ceramic, glass or wooden tableware. Absolutely no plastic meal trays, no compartment bento containers, "
    "no packaged products, no bags, no labels, no stickers. "
    "Absolutely no text, letters, numbers, logos, brand names or printing anywhere; boxes, papers, cards and screens are completely blank and unbranded. "
    "One continuous seamless background without hard vertical splits. Not a 3D render, no CGI look, no floating objects, no surreal elements, no collage."
)

TOPIC = {
    # 冷凍弁当（サービス紹介の汎用）
    "reitou-a": "an open kitchen freezer drawer neatly filled with stacked plain white rectangular food storage containers with frosted lids, contents not visible, cold soft light, no labels",
    "reitou-b": "a light oak dining table with a single home-style dinner served on plain ceramic plates (grilled chicken with vegetables, a small salad), a glass of water and a folded linen napkin, quiet weekday evening light",
    "reitou-c": "a small home kitchen counter with a minimalist white microwave oven with a completely smooth blank front panel (no buttons, no dials, no display, no labels) with its door open and a plain ceramic bowl inside, a linen towel beside it, morning light",
    "atatame": "a minimalist white microwave oven with a completely smooth blank front panel (no buttons, no dials, no display, no labels) on a light kitchen counter with a covered plain ceramic dish beside it, and a small pot of water gently steaming on a stove in the background, soft steam, calm morning light",
    # 目的別
    "diet": "a light healthy lunch on a light oak table: a large ceramic plate of colourful vegetables, a small portion of grilled fish, a small bowl of brown rice, a glass of water, airy daylight",
    "toushitsu": "a low-carb home dinner on ceramic plates: grilled chicken, steamed broccoli, a green salad and a small bowl of tofu, beside a small plain kitchen scale without any display numbers",
    "kou-tanpaku": "a high-protein home meal on a plain ceramic plate: sliced grilled chicken breast, boiled eggs and broccoli, beside a folded plain grey sports towel and a plain unbranded stainless water bottle on a light table",
    "koureisha-a": "a calm Japanese dining setting for an elderly person on a low wooden table near a shoji screen: small ceramic bowls of soft simmered vegetables, rice porridge and miso soup on a wooden tray, a pair of reading glasses and a teacup beside it",
    "koureisha-b": "a bright dining table by a window with a plain wooden tray holding soft home-style dishes in small ceramic bowls, a teapot and a small vase of seasonal flowers, gentle and caring atmosphere",
    "seigen": "a careful home-cooking scene: small ceramic bowls of lightly seasoned vegetables and fish, a set of plain stainless measuring spoons and a small blank notebook on a light table, a calm nutritional-care mood",
    "sango": "a warm bowl of soup and a small plate of rice and vegetables on a kitchen table beside a folded soft white baby blanket and a tiny knitted cap, gentle morning light, a calm postpartum home mood",
    "hitorigurashi": "a small single-person apartment table by a window with one simple dinner set (a ceramic bowl of rice, a plate of stir-fried vegetables and meat, a cup of tea), a closed plain laptop at the edge, cosy evening light",
    "kyoudoki": "a family dining table set for a weekday dinner after work: three plain ceramic plates of home-style dishes, a small child's plain cup, chopsticks, warm evening kitchen light in the background",
    # 料金・送料・受け取り
    "ryokin": "a calm flat lay on a light oak desk: a plain grey pocket calculator with blank buttons and a blank display, a few Japanese yen coins, a blank notebook and a pencil, beside a small ceramic bowl",
    "souryou": "a plain unprinted kraft cardboard box opened on a light table, with a plain white insulated liner and a few ice packs inside, nothing branded",
    "okihai": "a plain unprinted kraft cardboard box resting on a stone step in front of a light wooden front door of a Japanese house, soft daylight, quiet residential mood",
    "reitouko": "the small freezer compartment of a compact refrigerator, neatly organised with a few thin plain white flat storage containers standing upright like files, no labels",
    # 方式
    "mealkit": "a home kitchen counter with a wooden cutting board, neatly pre-cut fresh vegetables in small glass bowls, a frying pan on the stove, ready to cook",
    "tsukurioki": "an open refrigerator shelf with several clear glass storage containers of home-made side dishes (simmered vegetables, braised meat, salads), tidy and fresh",
    "coop": "a plain white styrofoam insulated delivery box with its lid off on a porch bench, with fresh vegetables and a few plain wrapped items inside, morning light, no printing",
    # 記事の型
    "compare": "three plain ceramic plates side by side on a light oak table, each with a different simple home-style dish, viewed from slightly above, a comparing mood",
    "otameshi": "a small wooden tray with several tiny ceramic tasting dishes (mame-zara) each holding a small bite of a different home-style side dish, a first-taste mood",
    "mazui": "a home-style dinner plate on a table with small seasoning cruets (unlabelled glass soy sauce bottle, sesame seeds in a small dish, a halved yuzu), improving the taste mood",
    "eiyou": "an overhead flat lay of a balanced Japanese home meal (rice, soup, fish, vegetables, tofu) in ceramic bowls surrounded by a few raw ingredients (carrot, spinach, eggs)",
    "super": "a plain woven shopping basket with fresh vegetables and a carton of eggs (no printing) on a kitchen counter next to a plain ceramic plate, everyday shopping mood",
    # 記事以外
    "editorial": "a tidy light oak desk with a blank open notebook, a pencil, a closed plain laptop and a cup of green tea, soft daylight, careful research mood",
    "articles": "a calm overhead view of a light oak dining table with several home-style dishes in ceramic bowls and plates arranged loosely, linen runner, morning light",
}


def prompts():
    return {f"topic-{k}": f"Subject: {s}. " + STYLE for k, s in TOPIC.items()}


M_CROP = {}
M_CROP_DEFAULT = (0.36, 0.0, 1.0, 1.0)


def convert(name):
    from PIL import Image
    im = Image.open(RAW / f"{name}.png").convert("RGB")
    w, h = im.size
    OUT.mkdir(parents=True, exist_ok=True)
    im.resize((1400, round(1400 * h / w)), Image.LANCZOS).save(OUT / f"{name}.webp", "WEBP", quality=74, method=6)
    l, t, r, b = M_CROP.get(name, M_CROP_DEFAULT)
    m = im.crop((round(w * l), round(h * t), round(w * r), round(h * b)))
    m.resize((780, round(780 * m.size[1] / m.size[0])), Image.LANCZOS).save(OUT / f"{name}-m.webp", "WEBP", quality=72, method=6)


if __name__ == "__main__":
    from concurrent.futures import ThreadPoolExecutor
    RAW.mkdir(parents=True, exist_ok=True)
    P = prompts()
    if "--list" in sys.argv:
        for k, v in P.items():
            print(k, "|", v[:110])
        print(len(P), "keys"); sys.exit()
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    sel = []
    for a in args or ["all"]:
        if a == "all":
            sel += list(P)
        elif a in P:
            sel.append(a)
        else:
            sys.exit(f"unknown key {a}")
    if "--convert-only" in sys.argv:
        for k in sel:
            if (RAW / f"{k}.png").exists():
                convert(k)
        sys.exit()
    force = "--force" in sys.argv
    todo = [k for k in sel if force or not (RAW / f"{k}.png").exists()]

    def job(k):
        if nb_image.gen(RAW / f"{k}.png", P[k], "21:9"):
            convert(k)
    with ThreadPoolExecutor(5) as ex:
        list(ex.map(job, todo))
    print("total calls", nb_image.calls())
