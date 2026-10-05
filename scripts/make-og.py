#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""OG画像（public/og-image.png・1200x630）を作る。全ページ共通。

⚠️ 画像に数字・件数（掲載社数、料金、年月など）を入れない。本文を更新しても
   画像だけ古い数字で残り、公開前チェックでも検出できないため。

  python3 scripts/make-og.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
BG = (250, 248, 245)        # --background
CREAM = (245, 240, 232)     # --cream
BORDER = (232, 226, 216)    # --warm-border
INK = (45, 42, 38)          # --foreground
GRAY = (138, 132, 120)      # --warm-gray
ACCENT = (74, 124, 89)      # --accent
ACCENT_DARK = (58, 97, 71)  # --accent-dark

JP_BOLD = "/System/Library/Fonts/ヒラギノ丸ゴ ProN W4.ttc"
JP = "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc"
JP_W6 = "/System/Library/Fonts/ヒラギノ角ゴシック W6.ttc"


def main() -> None:
    S = 2
    im = Image.new("RGB", (W * S, H * S), BG)
    d = ImageDraw.Draw(im)

    # 左の帯と下の帯（サイトのアクセント色）
    d.rectangle([0, 0, 28 * S, H * S], fill=ACCENT)
    d.rectangle([28 * S, (H - 96) * S, W * S, H * S], fill=CREAM)
    d.line([(28 * S, (H - 96) * S), (W * S, (H - 96) * S)], fill=BORDER, width=2 * S)

    # 右上の円（お皿のモチーフ。写真・他社ロゴは使わない）
    cx, cy = 1010, 200
    for r, col in ((170, CREAM), (128, BG), (124, BORDER), (120, BG)):
        d.ellipse([(cx - r) * S, (cy - r) * S, (cx + r) * S, (cy + r) * S], fill=col)

    def put(xy, s, font, size, fill):
        d.text((xy[0] * S, xy[1] * S), s, font=ImageFont.truetype(font, size * S), fill=fill)

    put((96, 120), "宅配弁当・栄養食の比較ガイド", JP_W6, 34, ACCENT)
    put((92, 188), "宅食びより", JP_BOLD, 132, INK)
    put((96, 372), "料金・送料は各社の公式サイトで一次確認", JP, 38, INK)
    put((96, 432), "口コミは出典付きで紹介", JP, 38, INK)
    put((96, 564), "takushoku-biyori.com", JP_W6, 30, ACCENT_DARK)

    out = ROOT / "public" / "og-image.png"
    im.resize((W, H), Image.LANCZOS).save(out, optimize=True)
    print(f"書き出し → {out}")


if __name__ == "__main__":
    main()
