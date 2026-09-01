import type { Metadata } from "next";
import { Barlow_Condensed, Noto_Sans_JP } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";

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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: "Animal Corporation",
    description: t("description"),
    icons: {
      icon: "/favicon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${barlowCondensed.variable} ${notoSansJP.variable}`}
    >
      <body className="bg-background text-foreground flex min-h-screen flex-col transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />

            <BackToTop />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
