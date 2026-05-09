import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/contexts/Providers";
import Chrome from "@/components/Chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://civos.psyverse.fun"),
  title: "civos · Civilization OS Ecosystem · 文明操作系统生态",
  description:
    "A unified specification for ten interlocking civilization-scale systems: civilization, ideas, materials, protocol, clans, perception, physics, decisions, cycles, life. Bilingual.",
  keywords: ["civilization OS","civos","systems thinking","memetics","material civilization","decision OS","cycle engine","reality kernel","sensory OS","life OS","psy protocol","文明操作系统","系统思维"],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    title: "civos · Civilization OS Ecosystem",
    description: "Ten interlocking civilization-scale systems, one shared ontology, one specification.",
    url: "https://civos.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: { card: "summary_large_image", title: "civos · 文明操作系统生态", description: "Ten systems. One spec. Bilingual." },
  robots: { index: true, follow: true },
  other: { "theme-color": "#3a6e62" },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f6f7f7" }, { media: "(prefers-color-scheme: dark)", color: "#06070b" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("civos.theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var dark=t?t==="dark":d;if(dark)document.documentElement.classList.add("dark");var l=localStorage.getItem("civos.lang");if(l==="zh"||l==="en")document.documentElement.lang=l==="zh"?"zh-CN":"en";}catch(e){}})();`,
          }}
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <Chrome>{children}</Chrome>
        </Providers>
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
