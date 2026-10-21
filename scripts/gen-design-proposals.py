#!/usr/bin/env python3
"""宅食びより（takushoku-biyori.com）のデザイン案を Nano Banana Pro で作る（2026-10-21 MediaXAI「デザイン改修・他サイトでやった通り」）。
gold（kin-kaitori-biyori）/ gakki と同じ進め方＝FV3案＋ロゴ3案。
  python3 scripts/gen-design-proposals.py [logo|fv|all] [name,...]   → design-proposals/（リポには入れない）
⚠️ 既に画像がある案は skip（作り直しは該当PNGを消してから）。呼び出し回数は scripts/nb_image.py の共通ログで上限管理。
⚠️ FV の文言は TOP（app/page.tsx）に現にある文言だけ（h1「公式情報にもとづく 宅配弁当の比較」・バッジ3つ・ボタン）。新しい主張は足さない。
⚠️ 当サイトは実食していない → 写真に特定サービスの商品・容器・パッケージ・ロゴを描かせない。家庭の食卓・器・素材の情景だけ。人物の顔なし。
"""
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import nb_image  # noqa: E402

OUT = nb_image.DP

LOGO = ("Minimal refined brand mark for a Japanese home-delivered meal (takushoku) comparison guide website. "
        "Flat vector line art, single consistent stroke weight, geometric, calm, friendly but trustworthy, generous negative space, "
        "centered on pure white, crisp vector-like edges, no gradients, no shadows, no 3D, no text, no letters, no numbers, "
        "no existing brand logos. Colors: deep pine green #24493d lines with at most one small accent in persimmon orange #c4572e. Concept: ")
LOGOS = {
    "logo-a-bowl-steam": "a simple rice bowl (chawan) seen from the side drawn as a single arc with a foot ring, with three short wavy steam lines rising, the middle steam line in persimmon",
    "logo-b-bento-sun": "a square bento box seen from above divided into three compartments by thin lines (one wide, two small), with a small half circle sun rising in the top right compartment in persimmon, meaning a fine day (biyori)",
    "logo-c-table-sun": "a low horizontal line like a dining table top with a small round dish on it, and a half circle sun rising behind the dish in persimmon",
}

FV_BASE = (
    "Website first-view hero design mockup, 16:9 desktop screen, for a Japanese comparison guide of home-delivered meals (frozen bento, meal delivery). "
    "Clean, appetising, calm and trustworthy editorial design like a quality food magazine or a cookbook, generous whitespace, thin 1px hairline borders, "
    "small corner radius at most 4px, restrained palette, no emoji, no glossy icons, no 3D illustrations, no purple, no neon, no sale banners, no starbursts. "
    "Elegant Japanese Mincho serif for the headline, clear Japanese UD gothic sans for UI text. "
    "Photorealistic food photography of a home dining table: home-style Japanese dishes served in plain handmade ceramic bowls and plates, "
    "absolutely no product packaging, no plastic delivery trays, no brand logos, no labels, no text on any object, no people, no faces, no hands. "
    "Photo composition: the subject sits in the centre-right with empty margins at both edges; nothing important touches the image edges. "
    "All Japanese text rendered cleanly and legibly exactly as given, and no other text: small header logo text 「宅食びより」 and nav 「ホーム」「記事一覧」「比較記事」「口コミ・評判」, "
    "small eyebrow 「宅配弁当・栄養食の比較ガイド」, headline in two lines 「公式情報にもとづく」「宅配弁当の比較」, "
    "one button 「主要3社の比較を見る」, and a row of three small labels 「公式サイトで一次確認」「出典付きの口コミのみ」「確認日を明記」. ")
FVS = {
    "fv-1-shokutaku": FV_BASE + "Palette: warm porcelain white #f8f6f1 paper background, deep pine green #24493d for text and the button, persimmon #c4572e used sparingly for thin rules and small labels. "
        "Layout: text block left-aligned in the left 45%; on the right a framed photo panel with a hairline border and paper margins on all sides: "
        "a calm morning dining table seen from slightly above, a bowl of rice, miso soup, grilled fish, a small dish of vegetables, linen napkin, soft window daylight; "
        "the three labels as a thin bordered strip under the button.",
    "fv-2-linen-terracotta": FV_BASE + "Palette: oatmeal linen #f1ece3 background, deep olive #4f5a35 text, terracotta #b5532f accent. "
        "Layout: a full-width photo in the upper area (a wooden kitchen counter with seasonal vegetables, a pot and ceramic bowls in soft daylight), "
        "and a white text card with hairline border overlapping the bottom-left of the photo holding the headline, button and labels.",
    "fv-3-clean-teal": FV_BASE + "Palette: pure white background, deep teal #0f4c5c text, citrus yellow #e3a92b accent dots. "
        "Layout: centered composition; eyebrow, headline and button centered on top; below, a wide overhead flat-lay photo of a home table set for one person "
        "(rice, soup, main dish and two side dishes in ceramic ware on a light oak table); labels as a centered row.",
}

if __name__ == "__main__":
    w = sys.argv[1] if len(sys.argv) > 1 else "all"
    only = set(sys.argv[2].split(",")) if len(sys.argv) > 2 else None
    jobs = []
    if w in ("logo", "all"):
        jobs += [(n, LOGO + c, "1:1") for n, c in LOGOS.items()]
    if w in ("fv", "all"):
        jobs += [(n, p, "16:9") for n, p in FVS.items()]
    if only:
        jobs = [j for j in jobs if j[0] in only]
    jobs = [j for j in jobs if not (OUT / f"{j[0]}.png").exists()]
    with ThreadPoolExecutor(6) as ex:
        list(ex.map(lambda j: nb_image.gen(OUT / f"{j[0]}.png", j[1], j[2]), jobs))
    print("total calls", nb_image.calls())
