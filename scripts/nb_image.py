#!/usr/bin/env python3
"""Nano Banana Pro（gemini-3-pro-image-preview）呼び出しの共通部品（2026-10-21 デザイン刷新）。
gold / gakki の gen-design-proposals.py と同じ API・同じキーの読み方（~/.openclaw/workspace/secrets/shiroari-expert-keys.env）。キーは表示しない。
- 1回の API 呼び出し＝1枚の課金（約20円）。全スクリプト共通で design-proposals/_calls.log に1行ずつ記録し、CAP 回で止める。
- design-proposals/ はリポに入れない（.gitignore）。
"""
import base64, json, os, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DP = ROOT / "design-proposals"
LOG = DP / "_calls.log"
MODEL = "gemini-3-pro-image-preview"
CAP = 60  # 2026-10-21 デザイン刷新の上限（案出し＋TOP写真＋テーマ写真の合計）


def key():
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"]
    for l in (Path.home() / ".openclaw/workspace/secrets/shiroari-expert-keys.env").read_text().splitlines():
        if l.startswith("GEMINI_API_KEY="):
            return l.split("=", 1)[1].strip().strip('"')


def calls():
    return len(LOG.read_text().splitlines()) if LOG.exists() else 0


def gen(out: Path, prompt: str, aspect: str = "16:9", size: str = "2K") -> bool:
    """1枚生成して out（png）に保存。既存の out は .prev<時刻>.png に退避。"""
    DP.mkdir(exist_ok=True)
    if calls() >= CAP:
        print(f"CAP {CAP} reached — skip {out.name}", flush=True)
        return False
    with LOG.open("a") as f:
        f.write(f"{time.strftime('%H:%M:%S')} {out.stem}\n")
    body = json.dumps({"contents": [{"parts": [{"text": prompt}]}],
                       "generationConfig": {"responseModalities": ["IMAGE"],
                                            "imageConfig": {"aspectRatio": aspect, "imageSize": size}}}).encode()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"
    req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json", "x-goog-api-key": key()})
    try:
        with urllib.request.urlopen(req, timeout=300) as r:
            d = json.loads(r.read())
    except Exception as e:  # 再送はしない（課金されうる）
        print("ERR", out.name, type(e).__name__, str(e)[:200], flush=True)
        return False
    for part in d.get("candidates", [{}])[0].get("content", {}).get("parts", []):
        if "inlineData" in part:
            out.parent.mkdir(parents=True, exist_ok=True)
            if out.exists():
                out.rename(out.with_name(f"{out.stem}.prev{int(time.time())}.png"))
            out.write_bytes(base64.b64decode(part["inlineData"]["data"]))
            print("ok", out.name, f"(calls={calls()})", flush=True)
            return True
    print("no image", out.name, json.dumps(d)[:300], flush=True)
    return False


if __name__ == "__main__":
    print("calls so far:", calls(), "/", CAP)
