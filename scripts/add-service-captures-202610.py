#!/usr/bin/env python3
"""公式サイトのキャプチャ（components/ServiceCapture・ServiceCaptureGrid）を記事に入れる（2026-10-21 デザイン刷新）。冪等。
  python3 scripts/add-service-captures-202610.py [--dry]

- 1社を扱う記事（口コミ・クーポン・お試し・料金）: 本文の最初の h2（「〇〇とは」等の紹介見出し）の直後に <ServiceCapture id=… />
- 比較記事（COMPARE）: 最初の h2 の直後に、比べているサービスの <ServiceCaptureGrid ids=[…] />
- ランキング記事（<RankingCard name=… /> を使う5本）: 各カードの直後に、そのサービスの <ServiceCapture />
- 上記以外（目的別・使い方ガイド・白書など）: 本文で名前の出る回数が多いサービス上位4社（2回以上。1回ずつでも4社以上を一覧で扱う記事はその4社・キャプチャのあるもの）を、
  末尾の信頼性ブロック（eeat-links-202607）の直前に <ServiceCaptureGrid ids=[…] label="この記事で取り上げている主なサービスの公式サイト" />
- 挿入した行には {/* svc-cap-202610 */} を付ける。再実行時はその行を消してから入れ直す（キャプチャを撮り足したら再実行するだけでよい）。
- 画像（public/images/services/{id}.webp）が無いサービスは入れない（components/ServiceCapture.tsx の SERVICE_CAPTURES にも無い）。
文言・リンクは触らない（キャプチャはリンクなし・キャプション「画像：〇〇 公式サイト（domain）2026年10月21日時点」）。
⚠️ 記事を新規作成・作り直したら、このスクリプトを再実行する（新しい記事の 1社対応は SINGLE に足す）。
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ART = ROOT / "app" / "articles"
IMG = ROOT / "public" / "images" / "services"
DRY = "--dry" in sys.argv
MARK = "{/* svc-cap-202610 */}"
LABEL = "この記事で取り上げている主なサービスの公式サイト"

SINGLE = {
    "nosh-reviews": "nosh", "nosh-coupon": "nosh", "nosh-ryoukin-souryou": "nosh",
    "mitsuboshi-farm-reviews": "mitsuboshi", "mitsuboshi-coupon": "mitsuboshi",
    "wellness-dining-reviews": "wellness", "yoshikei-reviews": "yoshikei", "magokoro-care-reviews": "magokoro",
    "watami-reviews": "watami", "watami-direct-kuchikomi": "watami-direct", "watami-direct-otameshi": "watami-direct",
    "muscle-deli-reviews": "muscledeli", "gofood-kuchikomi": "gofood", "goodeli-kuchikomi": "goodeli",
    "tsurukame-reviews": "tsurukame", "shokutakubin-reviews": "shokutakubin", "coopdeli-kuchikomi": "coopdeli",
    "ouchi-coop-kuchikomi": "maici", "yushoku-net-kuchikomi": "yushoku", "green-spoon-kuchikomi": "greenspoon",
    "fitfoodhome-kuchikomi": "fitfoodhome", "chef-mutenka-tsukurioki-kuchikomi": "chef-mutenka",
    "lifemeal-kuchikomi": "lifemeal", "medimeal-kuchikomi": "medimeal", "nichirei-foods-direct-kuchikomi": "nichirei",
    "nichirei-otameshi": "nichirei", "wanmairu-reviews": "wanmairu", "taihei-family-set-kuchikomi": "taihei",
    "tsukurioki-jp-kuchikomi": "tsukurioki", "kinnikushokudo-deli-kuchikomi": "kinnikushokudo",
    "delipicks-otameshi": "delipicks", "rizap-supportmeal-reviews": "rizap", "mamano-kyushoku-reviews": "mamano",
    "mealtime-kuchikomi": "mealtime", "takuhai-cook123-kuchikomi": "cook123",
    # dietician-kuchikomi: 販売終了・公式ドメインが名前解決できない → キャプチャなし
}
COMPARE = {
    "nosh-vs-mitsuboshi-vs-wellness": ["nosh", "mitsuboshi", "wellness"],
    "nosh-vs-watami": ["nosh", "watami"],
    "oisix-vs-nosh": ["oisix", "nosh"],
    "yoshikei-vs-watami": ["yoshikei", "watami"],
    "coopdeli-vs-palsystem": ["coopdeli", "palsystem"],
}
CARD_NAME = [("nosh", "nosh"), ("三ツ星", "mitsuboshi"), ("食宅便", "shokutakubin"), ("ウェルネス", "wellness"),
             ("筋肉食堂", "kinnikushokudo"), ("まごころ", "magokoro"), ("Dr.つるかめ", "tsurukame"), ("わんまいる", "wanmairu"),
             ("ヨシケイ", "yoshikei")]
ALIASES = {
    "nosh": ["nosh", "ナッシュ"], "mitsuboshi": ["三ツ星ファーム"], "wellness": ["ウェルネスダイニング"],
    "yoshikei": ["ヨシケイ"], "magokoro": ["まごころケア食"], "watami-direct": ["ワタミの宅食ダイレクト"],
    "watami": ["ワタミの宅食"], "muscledeli": ["マッスルデリ", "Muscle Deli"], "tsurukame": ["つるかめ"],
    "shokutakubin": ["食宅便"], "coopdeli": ["コープデリ"], "palsystem": ["パルシステム"], "maici": ["マイシィ"],
    "yushoku": ["夕食ネット"], "greenspoon": ["GREEN SPOON", "グリーンスプーン"], "lifemeal": ["ライフミール"],
    "medimeal": ["メディミール"], "nichirei": ["ニチレイ"], "wanmairu": ["わんまいる"], "taihei": ["タイヘイ"],
    "tsukurioki": ["ツクリオ", "つくりおき.jp"], "kinnikushokudo": ["筋肉食堂DELI"], "delipicks": ["DELIPICKS"],
    "rizap": ["サポートミール"], "cook123": ["宅配クック"], "oisix": ["オイシックス", "Oisix"], "gofood": ["GOFOOD"],
}
H2_END = re.compile(r"</(SectionHeading|h2)>[^\n]*\n")
CARD_RE = re.compile(r"(\n([ \t]*)<RankingCard\b.*?\n[ \t]*/>\n)", re.S)


def has(i):
    return (IMG / f"{i}.webp").exists()


def body_start(s):
    m = re.search(r"^export default function", s, re.M)
    return m.end() if m else 0


def strip(s):
    s = re.sub(r"[^\n]*" + re.escape(MARK) + r"[^\n]*\n", "", s)
    if not re.search(r"<ServiceCapture\b(?!Grid)", s):
        s = s.replace('import ServiceCapture from "@/components/ServiceCapture";\n', "")
    if "<ServiceCaptureGrid" not in s:
        s = s.replace('import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";\n', "")
    return s


def add_import(s, line):
    if line in s:
        return s
    imports = list(re.finditer(r"^import .*;\n", s, re.M))
    pos = imports[-1].end() if imports else 0
    return s[:pos] + line + "\n" + s[pos:]


def after_first_h2(s, line):
    m = H2_END.search(s, body_start(s))
    if not m:
        return s, False
    indent = re.match(r"[ \t]*", s[s.rfind("\n", 0, m.start()) + 1:]).group(0)
    return s[:m.end()] + f"{indent}{line}{MARK}\n" + s[m.end():], True


def mentions(s):
    body = s[body_start(s):]
    cnt = {}
    for k, als in ALIASES.items():
        n = sum(body.count(a) for a in als)
        if k == "watami":
            n -= body.count("ワタミの宅食ダイレクト")
        cnt[k] = n
    return cnt


stats = {"single": 0, "compare": 0, "cards": 0, "mention": 0, "none": []}
used = {}
for p in sorted(ART.glob("*/page.tsx")):
    slug = p.parent.name
    orig = p.read_text()
    s = strip(orig)
    done = False
    if slug in SINGLE and has(SINGLE[slug]):
        s, done = after_first_h2(s, f'<ServiceCapture id="{SINGLE[slug]}" />')
        if done:
            stats["single"] += 1; used[slug] = [SINGLE[slug]]
    elif slug in COMPARE:
        ids = [i for i in COMPARE[slug] if has(i)]
        if ids:
            s, done = after_first_h2(s, "<ServiceCaptureGrid ids={" + str(ids).replace("'", '"') + "} />")
            if done:
                stats["compare"] += 1; used[slug] = ids
    elif "<RankingCard" in s[body_start(s):]:
        ids_here = []

        def rep(m):
            card = m.group(1)
            nm = re.search(r'name="([^"]+)"', card)
            sid = next((v for k, v in CARD_NAME if nm and nm.group(1).startswith(k)), None)
            if not sid or not has(sid):
                return card
            ids_here.append(sid)
            return card + f'{m.group(2)}<ServiceCapture id="{sid}" className="-mt-2 mb-8 max-w-xl" />{MARK}\n'
        head, tail = s[:body_start(s)], s[body_start(s):]
        s = head + CARD_RE.sub(rep, tail)
        if ids_here:
            stats["cards"] += 1; used[slug] = ids_here; done = True
    elif slug not in SINGLE:
        cnt = mentions(s)
        order = [k for k, n in sorted(cnt.items(), key=lambda x: -x[1]) if has(k)]
        ids = [k for k in order if cnt[k] >= 2][:4]
        if len(ids) < 2 and sum(1 for k in order if cnt[k] >= 1) >= 4:  # 名前は1回ずつだが4社以上を一覧で扱う記事（置き配対応一覧など）
            ids = [k for k in order if cnt[k] >= 1][:4]
        if len(ids) >= 2:
            line = "<ServiceCaptureGrid ids={" + str(ids).replace("'", '"') + f'}} label="{LABEL}" />'
            m = re.search(r"^([ \t]*)\{/\* eeat-links-202607 \*/\}", s, re.M) or list(re.finditer(r"^([ \t]*)</article>", s, re.M))[-1]
            ind = "        "
            s = s[:m.start()] + f"{ind}{line}{MARK}\n" + s[m.start():]
            stats["mention"] += 1; used[slug] = ids; done = True
    if not done:
        stats["none"].append(slug)
    if "<ServiceCaptureGrid" in s:
        s = add_import(s, 'import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";')
    if "<ServiceCapture " in s:
        s = add_import(s, 'import ServiceCapture from "@/components/ServiceCapture";')
    if s != orig and not DRY:
        p.write_text(s)
print({k: v for k, v in stats.items()})
for k, v in used.items():
    print(f"  {k}: {v}")
