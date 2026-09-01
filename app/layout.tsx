import type { Metadata } from "next";
import { Barlow_Condensed, Noto_Sans_JP } from "next/font/google";

import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Animal Corporation",
  description: "デザインとテクノロジーで、より良い体験と未来を作る。",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${barlowCondensed.variable} ${notoSansJP.variable}`}
    >
      <body className="bg-background text-foreground flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <BackToTop />
      </body>
    </html>
  );
}
