import type { Metadata, Viewport } from "next";
import { BIZ_UDPGothic, Zen_Old_Mincho } from "next/font/google";
import Link from "next/link";
import { LogoWordmark } from "@/components/Logo";
import "./globals.css";

/* デザイン「食卓」（2026-10-21）: 本文＝BIZ UDPGothic（UD書体・数字が読みやすい）、見出し＝Zen Old Mincho */
const bizUD = BIZ_UDPGothic({
  variable: "--font-biz-ud",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: true,
});

const SITE_NAME = "宅食びより";
const SITE_URL = "https://takushoku-biyori.com";
const SITE_DESCRIPTION =
  "宅食びよりは、宅配弁当・栄養食の比較ガイドサイトです。nosh・三ツ星ファーム・ウェルネスダイニングなどの主要サービスを、公式情報にもとづく料金・送料・栄養成分と出典付きの口コミで比較しています。";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 宅配弁当・栄養食の比較ガイド`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | 宅配弁当・栄養食の比較ガイド`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | 宅配弁当・栄養食の比較ガイド`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f8f6f1]/95 backdrop-blur border-b border-rule">
      <nav className="max-w-5xl mx-auto px-4 h-[68px] flex items-center justify-between">
        <Link href="/" aria-label={SITE_NAME} className="flex items-center">
          <LogoWordmark name={SITE_NAME} />
        </Link>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 text-[13.5px] tracking-[0.06em] text-foreground/85">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              ホーム
            </Link>
          </li>
          <li>
            <Link href="/articles/" className="hover:text-accent transition-colors">
              記事一覧
            </Link>
          </li>
          <li>
            <Link
              href="/articles/#hikaku"
              className="hover:text-accent transition-colors"
            >
              比較記事
            </Link>
          </li>
          <li>
            <Link
              href="/articles/#kuchikomi"
              className="hover:text-accent transition-colors"
            >
              口コミ・評判
            </Link>
          </li>
        </ul>
        {/* Mobile hamburger */}
        <details className="md:hidden relative group">
          <summary className="flex items-center justify-center w-10 h-10 text-accent">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="メニューを開く"
            >
              <path strokeLinecap="round" strokeWidth={1.6} d="M4 9h16M4 15h16" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-52 bg-[#fffefb] border border-rule py-2 z-50">
            <Link
              href="/"
              className="block px-4 py-2 text-sm hover:bg-cream transition-colors"
            >
              ホーム
            </Link>
            <Link
              href="/articles/"
              className="block px-4 py-2 text-sm hover:bg-cream transition-colors"
            >
              記事一覧
            </Link>
            <Link
              href="/articles/#hikaku"
              className="block px-4 py-2 text-sm hover:bg-cream transition-colors"
            >
              比較記事
            </Link>
            <Link
              href="/articles/#kuchikomi"
              className="block px-4 py-2 text-sm hover:bg-cream transition-colors"
            >
              口コミ・評判
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-accent-dark text-white/90 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="mb-4">
              <LogoWordmark name={SITE_NAME} light />
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              宅配弁当・栄養食の比較情報を掲載しています。
              <br />
              ご利用前に、各社の公式サイトにて最新情報をご確認ください。
            </p>
          </div>
          <div>
            <p className="font-bold text-sm mb-3">カテゴリ</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/articles/" className="hover:text-white transition-colors">
                  記事一覧
                </Link>
              </li>
              <li>
                <Link href="/articles/#hikaku" className="hover:text-white transition-colors">
                  宅食比較
                </Link>
              </li>
              <li>
                <Link href="/articles/#kuchikomi" className="hover:text-white transition-colors">
                  口コミ・評判
                </Link>
              </li>
              <li>
                <Link href="/articles/#mokuteki" className="hover:text-white transition-colors">
                  目的別ガイド
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm mb-3">サイト情報</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/terms-of-service/"
                  className="hover:text-white transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy/"
                  className="hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/content-policy/"
                  className="hover:text-white transition-colors"
                >
                  記事制作ポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-xs text-white/50">
          <p>&copy; 2026 {SITE_NAME} All rights reserved.</p>
          <p className="mt-1">
            ※本サイトはプロモーション(PR)を含みます。
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${bizUD.variable} ${zenOldMincho.variable} h-full antialiased`}
    >
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">{
        <>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </>
      }</body>
    </html>
  );
}
