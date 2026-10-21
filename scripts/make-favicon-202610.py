#!/usr/bin/env python3
"""ロゴ（components/Logo.tsx の LogoMark＝弁当箱と日の出）と同じ図形で favicon 一式を作る（2026-10-21）。冪等。
  python3 scripts/make-favicon-202610.py
  → app/icon.svg（ブラウザのタブ）／app/favicon.ico（16・32・48）／app/apple-icon.png（180）
小さいサイズでは線が潰れるので、塗りの松葉色の角丸正方形に白い弁当箱線＋柿色の日を載せた版にする。
"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
GREEN, PERSIMMON, PAPER = "#24493d", "#d8653a", "#f8f6f1"

SVG = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
<rect width="40" height="40" rx="8" fill="{GREEN}"/>
<rect x="7" y="8" width="26" height="24" rx="2.4" fill="none" stroke="{PAPER}" stroke-width="2.4"/>
<path d="M7 21.2H33M18.2 21.2V32" stroke="{PAPER}" stroke-width="2.2"/>
<path d="M21.2 21.2a5 5 0 0 1 10 0Z" fill="{PERSIMMON}"/>
</svg>
"""


def raster(n):
    s = 512 / 40
    im = Image.new("RGBA", (512, 512), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, 511, 511), radius=8 * s, fill=GREEN)
    d.rounded_rectangle((7 * s, 8 * s, 33 * s, 32 * s), radius=2.4 * s, outline=PAPER, width=round(2.4 * s))
    d.line((7 * s, 21.2 * s, 33 * s, 21.2 * s), fill=PAPER, width=round(2.2 * s))
    d.line((18.2 * s, 21.2 * s, 18.2 * s, 32 * s), fill=PAPER, width=round(2.2 * s))
    d.pieslice((21.2 * s, 16.2 * s, 31.2 * s, 26.2 * s), 180, 360, fill=PERSIMMON)
    return im.resize((n, n), Image.LANCZOS)


if __name__ == "__main__":
    (ROOT / "app/icon.svg").write_text(SVG)
    raster(48).save(ROOT / "app/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    raster(180).convert("RGB").save(ROOT / "app/apple-icon.png")
    raster(256).save(ROOT / "public/images/logo-mark-202610.png")
    print("favicon written")
