#!/usr/bin/env python3
"""配下ページの見出し帯（パンくず＋h1＋カテゴリ・更新日）を <div className="subhead"> で包み、テーマ写真を割り当てる（2026-10-21）。冪等。

  python3 scripts/add-subhero-images-202610.py          … 包む＋写真の CSS 変数を付ける、data/subhero-map.json を書き出す
  python3 scripts/add-subhero-images-202610.py --check  … 書き換えずに件数だけ表示

- 帯の範囲: パンくず（<Breadcrumbs /> または <nav aria-label="パンくずリスト"> / author・editorial・methodology の <nav className="text-xs…">）から、
  直後の <header>…</header>、または <h1>…</h1>（＋直後の「最終更新」の <p>）まで。
- 包むタグ: <div className="subhead" style={{ ["--subhero" as string]: "url(/images/subhero/<key>.webp)", ["--subhero-m" as string]: "url(/images/subhero/<key>-m.webp)" }}>
  … </div>{/* /subhead */}。文言・リンク・見出し・metadata・JSON-LD には触れない。帯と写真の描画は app/globals.css（「配下ページの見出し帯」「見出し帯のテーマ写真」）。
- 画像は scripts/gen-subhero-images-202610.py。🚨 当サイトは実食していないので、写真はテーマの情景だけ（特定サービスの商品・容器に見えるものは使わない）。
- ⚠️ 記事を新規作成したら、このスクリプトを再実行する（新しい slug は TOPIC に足す。足さないと「割り当てなし」と表示され、写真なしの帯になる）。
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "app"
IMG = ROOT / "public" / "images" / "subhero"

TOPIC = {
    # 冷凍弁当のサービス（口コミ・お試し）
    "nosh-reviews": "reitou-a", "nosh-coupon": "otameshi", "nosh-ryoukin-souryou": "ryokin",
    "mitsuboshi-farm-reviews": "reitou-b", "mitsuboshi-coupon": "otameshi",
    "watami-direct-kuchikomi": "reitou-c", "watami-direct-otameshi": "otameshi",
    "goodeli-kuchikomi": "reitou-b", "fitfoodhome-kuchikomi": "reitou-b", "lifemeal-kuchikomi": "reitou-c",
    "yushoku-net-kuchikomi": "reitou-a", "nichirei-foods-direct-kuchikomi": "reitou-a", "nichirei-otameshi": "otameshi",
    "shokutakubin-reviews": "reitou-c", "green-spoon-kuchikomi": "eiyou", "wanmairu-reviews": "atatame",
    "delipicks-otameshi": "kou-tanpaku",
    # 高齢者・制限食
    "magokoro-care-reviews": "koureisha-a", "takuhai-cook123-kuchikomi": "koureisha-a",
    "watami-reviews": "koureisha-b", "taihei-family-set-kuchikomi": "koureisha-b",
    "wellness-dining-reviews": "seigen", "tsurukame-reviews": "seigen", "medimeal-kuchikomi": "seigen",
    "mealtime-kuchikomi": "seigen",
    # 高たんぱく・糖質・ダイエット
    "muscle-deli-reviews": "kou-tanpaku", "kinnikushokudo-deli-kuchikomi": "kou-tanpaku",
    "gofood-kuchikomi": "toushitsu", "rizap-supportmeal-reviews": "toushitsu", "dietician-kuchikomi": "diet",
    # ミールキット・生協・冷蔵おかず・産後
    "yoshikei-reviews": "mealkit", "coopdeli-kuchikomi": "coop", "ouchi-coop-kuchikomi": "coop",
    "coopdeli-vs-palsystem": "coop", "tsukurioki-jp-kuchikomi": "tsukurioki",
    "chef-mutenka-tsukurioki-kuchikomi": "tsukurioki", "mamano-kyushoku-reviews": "sango",
    # 幼児食・離乳食・ベビーおやつ（2026-10-23）
    "mogumo-kuchikomi": "sango", "tedemogu-kuchikomi": "sango", "mogumoguimo-kuchikomi": "sango",
    "mogumogu-oyatsubin-kuchikomi": "sango",
    # 目的別・ランキング
    "diet-osusume": "diet", "koureisha-osusume": "koureisha-a", "sango-osusume": "sango",
    "hitorigurashi-osusume": "hitorigurashi", "toushitsu-seigen-osusume": "toushitsu", "kou-tanpaku-ranking": "kou-tanpaku",
    "kyoudoki-yushoku-takuhai": "kyoudoki", "otameshi-set-osusume": "otameshi",
    # 料金・送料・受け取り
    "1shoku-200yen-dai": "ryokin", "souryou-yasui-ranking": "souryou", "takushoku-ryokin-hakusho": "ryokin",
    "okihai-taiou-takuhai-bento": "okihai", "reitouko-chiisai-takuhai-bento": "reitouko",
    # 使い方・比較
    "reitou-bento-atatame-kata": "atatame", "reitou-bento-eiyou-baransu": "eiyou", "reitou-bento-mazui": "mazui",
    "mealkit-vs-reitou-bento": "mealkit", "super-vs-takuhai-reitou-bento": "super", "takuhai-vs-conveni": "compare",
    "nosh-vs-mitsuboshi-vs-wellness": "compare", "nosh-vs-watami": "compare", "oisix-vs-nosh": "compare",
    "yoshikei-vs-watami": "compare",
}
PAGES = {
    "articles": "articles", "author": "editorial", "editorial": "editorial", "methodology": "editorial",
    "content-policy": "editorial", "privacy-policy": "editorial", "terms-of-service": "editorial",
}

OPEN_RX = re.compile(r'^([ \t]*)<div className="subhead"[^\n]*>\n', re.M)
CLOSE = "</div>{/* /subhead */}"
START_RX = re.compile(r'^([ \t]*)(<Breadcrumbs\s*/>|<nav aria-label="パンくずリスト"|<nav className="text-xs)', re.M)


def style(key):
    if not key:
        return ""
    return (f' style={{{{ ["--subhero" as string]: "url(/images/subhero/topic-{key}.webp)", '
            f'["--subhero-m" as string]: "url(/images/subhero/topic-{key}-m.webp)" }}}}')


def skip_ws_comments(s, i):
    while True:
        m = re.match(r"\s*(\{/\*.*?\*/\}\s*)?", s[i:], re.S)
        j = i + m.end()
        if j == i:
            return i
        i = j


def end_of_tag(s, i, tag):
    """s[i] から始まる <tag …> の対応する </tag> の直後（同名タグの入れ子を数える）"""
    depth, k = 0, i
    rx = re.compile(rf"<{tag}\b|</{tag}>")
    for m in rx.finditer(s, i):
        if m.group(0).startswith("</"):
            depth -= 1
            if depth == 0:
                return m.end()
        else:
            depth += 1
    raise ValueError(tag)


def band_range(s):
    body = re.search(r"^export default function", s, re.M)
    m = START_RX.search(s, body.end() if body else 0)
    if not m:
        return None
    start = m.start()
    indent = m.group(1)
    if m.group(2).startswith("<Breadcrumbs"):
        i = m.end()
    else:
        i = end_of_tag(s, m.start(2), "nav")
    j = skip_ws_comments(s, i)
    if s.startswith("<header", j):
        end = end_of_tag(s, j, "header")
    elif s.startswith("<h1", j):
        end = end_of_tag(s, j, "h1")
        k = skip_ws_comments(s, end)
        if s.startswith("<p", k) and re.match(r"<p[^>]*>[^<]*(最終更新|更新)", s[k:k + 400]):
            end = end_of_tag(s, k, "p")
    else:
        return None
    # 行末まで
    nl = s.find("\n", end)
    return start, (nl + 1 if nl != -1 else end), indent


def apply(s, key):
    om = OPEN_RX.search(s)
    if om:  # 既に包んである → style だけ付け直す
        line = f'{om.group(1)}<div className="subhead"{style(key)}>\n'
        return s[:om.start()] + line + s[om.end():], True
    r = band_range(s)
    if not r:
        return s, False
    a, b, ind = r
    return s[:a] + f'{ind}<div className="subhead"{style(key)}>\n' + s[a:b] + f"{ind}{CLOSE}\n" + s[b:], True


def main():
    check = "--check" in sys.argv
    files = {f"articles/{p.parent.name}": (p, TOPIC.get(p.parent.name)) for p in sorted((APP / "articles").glob("*/page.tsx"))}
    for d, k in PAGES.items():
        files[d] = (APP / d / "page.tsx", k)
    applied, no_band, no_key, missing = {}, [], [], []
    for name, (f, key) in files.items():
        if key and not (IMG / f"topic-{key}.webp").exists():
            missing.append((name, key)); key = None
        if key is None and name.startswith("articles/") and name.split("/")[1] not in TOPIC:
            no_key.append(name)
        src = f.read_text()
        new, ok = apply(src, key)
        if not ok:
            no_band.append(name); continue
        if key:
            applied[name] = f"topic-{key}"
        if new != src and not check:
            f.write_text(new)
    if not check:
        (ROOT / "data" / "subhero-map.json").write_text(json.dumps(applied, ensure_ascii=False, indent=1, sort_keys=True) + "\n")
    print(f"pages {len(files)} / 帯あり {len(files) - len(no_band)} / 写真あり {len(applied)} / 帯なし {no_band} / "
          f"割り当てなし {no_key} / 画像ファイル未作成 {missing}")
    print("使っている画像", len(set(applied.values())), "枚")


if __name__ == "__main__":
    main()
