/**
 * サービス紹介の見出し直下に置く、公式サイトのファーストビューのキャプチャ（2026-10-21・gold / gakki と同じ部品）。
 * 画像は public/images/services/{id}.webp（1280×800・2026-10-21 に公式ドメインのトップを撮影。ASP の計測リンクは開いていない）。
 * リンクは付けない（記事のリンク構成を変えないため）。挿入は scripts/add-service-captures-202610.py（冪等）。
 * ⚠️ 撮り直したら CAPTURED_ON を更新。撮れていないサービス（メンテナンス中・ドメイン失効など）はここに載せない。
 */
export const SERVICE_CAPTURES = {
  nosh: { name: "nosh（ナッシュ）", domain: "nosh.jp" },
  mitsuboshi: { name: "三ツ星ファーム", domain: "mitsuboshifarm.jp" },
  wellness: { name: "ウェルネスダイニング", domain: "www.wellness-dining.com" },
  yoshikei: { name: "ヨシケイ", domain: "yoshikei-dvlp.co.jp" },
  watami: { name: "ワタミの宅食", domain: "www.watami-takushoku.co.jp" },
  "watami-direct": { name: "ワタミの宅食ダイレクト", domain: "www.watami-takushoku-direct.jp" },
  muscledeli: { name: "マッスルデリ", domain: "muscledeli.jp" },
  gofood: { name: "GOFOOD（ゴーフード）", domain: "gofood.jp" },
  goodeli: { name: "goodeli（グーデリ）", domain: "goodeli.jp" },
  tsurukame: { name: "Dr.つるかめキッチン", domain: "tsurukame-kitchen.com" },
  shokutakubin: { name: "食宅便", domain: "shokutakubin.com" },
  coopdeli: { name: "コープデリ 夕食宅配", domain: "daily.coopdeli.jp" },
  palsystem: { name: "パルシステム", domain: "www.pal-system.co.jp" },
  maici: { name: "おうちコープ 夕食宅配マイシィ", domain: "www.maici.coop" },
  yushoku: { name: "夕食ネット", domain: "www.you-shoku.net" },
  greenspoon: { name: "GREEN SPOON", domain: "green-spoon.jp" },
  lifemeal: { name: "ライフミール", domain: "l-meal.com" },
  medimeal: { name: "メディミール", domain: "medimeal.net" },
  nichirei: { name: "ニチレイフーズダイレクト", domain: "wellness.nichirei.co.jp" },
  wanmairu: { name: "わんまいる", domain: "www.onemile.jp" },
  taihei: { name: "タイヘイ ファミリーセット", domain: "www.familyset.jp" },
  tsukurioki: { name: "ツクリオ（旧つくりおき.jp）", domain: "www.tsukurioki.jp" },
  kinnikushokudo: { name: "筋肉食堂DELI", domain: "deli.kinnikushokudo.jp" },
  delipicks: { name: "DELIPICKS", domain: "deli-picks.com" },
  rizap: { name: "RIZAP サポートミール", domain: "shop.rizap.jp" },
  cook123: { name: "宅配クック123", domain: "takuhaicook123.jp" },
  oisix: { name: "オイシックス", domain: "www.oisix.com" },
} as const;

export type ServiceCaptureId = keyof typeof SERVICE_CAPTURES;

/** 撮影日（撮り直したらここを更新） */
const CAPTURED_ON = "2026年10月21日";

export default function ServiceCapture({
  id,
  className = "my-6 max-w-2xl",
}: {
  id: ServiceCaptureId;
  className?: string;
}) {
  const c = SERVICE_CAPTURES[id];
  return (
    <figure className={`service-capture not-prose ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/services/${id}.webp`}
        alt={`${c.name} 公式サイトのトップページ`}
        width={1280}
        height={800}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto"
      />
      <figcaption className="mt-1.5 text-[11px] leading-relaxed text-warm-gray">
        画像：{c.name} 公式サイト（{c.domain}）{CAPTURED_ON}時点
      </figcaption>
    </figure>
  );
}
