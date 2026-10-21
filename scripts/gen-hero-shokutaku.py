#!/usr/bin/env python3
"""TOP ファーストビュー（デザイン「食卓」＝白磁×松葉色×柿）の額装写真を Nano Banana Pro で作る（2026-10-21）。
  python3 scripts/gen-hero-shokutaku.py [name]   → design-proposals/{name}.png（既にあれば skip）
  python3 scripts/gen-hero-shokutaku.py --convert <name>  → public/images/hero-shokutaku.webp（1600px）と -m.webp（960px・被写体寄り）
⚠️ 文字・ロゴ・人物・手なし。宅配サービスの商品・容器・パッケージは描かない（当サイトは実食していない）＝家庭の食卓の情景だけ。
⚠️ 額の中で object-contain 表示するため 4:3、左右の端に重要物を置かない構図。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import nb_image  # noqa: E402

ROOT = nb_image.ROOT
PROMPT = (
    "Photorealistic editorial food photograph for a calm Japanese home cooking magazine, landscape 4:3, shot from a slightly raised angle "
    "with a 50mm lens, natural perspective. A quiet weekday dinner table for one at home: a bowl of white rice, a lacquered wooden bowl of miso soup "
    "with tofu and wakame, grilled salted fish on a long plain ceramic plate, a small bowl of simmered root vegetables, a small dish of pickles, "
    "plain wooden chopsticks on a simple chopstick rest, on a light oak table with a natural linen runner. "
    "All dishes are home-style and served in plain handmade ceramic and wooden tableware. "
    "Soft natural daylight from a window on the upper left, gentle soft shadows, warm but fresh colour grade: porcelain white, light oak, "
    "linen beige, fresh green of vegetables, a touch of persimmon orange. Appetising, clean, calm and trustworthy. "
    "Composition: the table setting sits in the centre of the frame with generous calm space on the left and right edges; nothing important touches any edge. "
    "Absolutely no text, no letters, no numbers, no logos, no labels, no packaging, no plastic containers, no delivery boxes, no bento trays, "
    "no watermark, no people, no hands, no faces. Not a 3D render, no CGI look."
)


def convert(name):
    from PIL import Image
    im = Image.open(nb_image.DP / f"{name}.png").convert("RGB")
    w, h = im.size
    im.resize((1600, round(1600 * h / w)), Image.LANCZOS).save(ROOT / "public/images/hero-shokutaku.webp", "WEBP", quality=80, method=6)
    # スマホ: 被写体寄り（中央 80%）を同じ 4:3 で切り出し
    cw, ch = round(w * 0.8), round(h * 0.8)
    l, t = (w - cw) // 2, round((h - ch) * 0.55)
    im.crop((l, t, l + cw, t + ch)).resize((960, 720), Image.LANCZOS).save(ROOT / "public/images/hero-shokutaku-m.webp", "WEBP", quality=78, method=6)
    print("converted", name)


if __name__ == "__main__":
    if "--convert" in sys.argv:
        convert(sys.argv[-1]); sys.exit()
    name = sys.argv[1] if len(sys.argv) > 1 else "hero-shokutaku-1"
    out = nb_image.DP / f"{name}.png"
    if out.exists():
        print("skip", name); sys.exit()
    nb_image.gen(out, PROMPT, "4:3")
