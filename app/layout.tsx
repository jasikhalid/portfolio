import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

// Geist and Geist Mono, self-hosted variable fonts via next/font/local (display: swap, preloaded).

const title = `${site.name}, Odoo & ERPNext Developer in Kerala`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.url }],
  openGraph: { type: "profile", url: "/", siteName: site.name, title, description: site.description, locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4eedf" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0e" },
  ],
};

// Applies a saved theme choice before first paint, so there is no flash. Default is the system setting.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body id="top" className="font-sans text-base">
        <a href="#main" className="sr-only z-50 rounded-sm bg-ink px-5 py-3 font-medium text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-3">
          Skip to content
        </a>
        <Header>
          <CommandPalette />
        </Header>
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
