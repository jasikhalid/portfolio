import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const grotesk = Bricolage_Grotesque({ subsets: ["latin"], weight: ["700", "800"], display: "swap", variable: "--font-grotesk" });

const title = `${site.name}, Odoo Developer in Kerala`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.url }],
  openGraph: { type: "profile", url: "/", siteName: site.name, title, description: site.description, locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body id="top" className="font-sans text-base">
        <a href="#main" className="sr-only z-50 rounded-full bg-ink px-5 py-3 text-canvas font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-2">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
