/**
 * ロゴ「弁当箱と日の出」（2026-10-21 デザイン刷新・案B）。
 * 上から見た弁当箱（仕切りで大きい区画1つ＋小さい区画2つ）＝宅食、上の区画に昇る柿色の半円＝びより（よく晴れた日）。
 * 等長の3本線（メニューアイコン）に見えないよう、縦の仕切りを入れて「箱」に見せている。
 * favicon（app/icon.svg・app/favicon.ico・app/apple-icon.png）も同じ図形（scripts/make-favicon-202610.py）。
 * ワードマーク「宅食びより」は Zen Old Mincho、下に小さく TAKUSHOKU BIYORI。
 */
export const LOGO_GREEN = "#24493d";
export const LOGO_PERSIMMON = "#b84d27";

export function LogoMark({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x="4.2" y="5.2" width="31.6" height="29.6" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.2 21.2H35.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18.6 21.2V34.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21.4 21.2a5.6 5.6 0 0 1 11.2 0Z" fill={LOGO_PERSIMMON} />
    </svg>
  );
}

export function LogoWordmark({ name, light = false }: { name: string; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className={light ? "text-[#f8f6f1]" : "text-[#24493d]"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.3rem] tracking-[0.1em] ${light ? "text-[#f8f6f1]" : "text-foreground"}`}
        >
          {name}
        </span>
        <span className={`mt-1.5 text-[0.54rem] tracking-[0.3em] ${light ? "text-[#f8f6f1]/70" : "text-accent"}`}>
          TAKUSHOKU BIYORI
        </span>
      </span>
    </span>
  );
}
