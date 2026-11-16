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

// Reveal-once: marks .reveal / .reveal-rule elements with data-shown the first time they enter the viewport, with a
// short stagger (data-rd) for elements that enter together. Content is only hidden once html[data-rv] is set, so
// nothing is hidden if this script never runs. A MutationObserver picks up elements added by client-side navigation.
const revealScript = `(function(){if(!("IntersectionObserver" in window))return;document.documentElement.setAttribute("data-rv","");var sel=".reveal:not([data-shown]),.reveal-rule:not([data-shown])";var io=new IntersectionObserver(function(es){var n=0;es.forEach(function(e){if(!e.isIntersecting)return;e.target.setAttribute("data-rd",Math.min(n++,5));e.target.setAttribute("data-shown","");io.unobserve(e.target)})},{rootMargin:"0px 0px -6% 0px"});function scan(r){if(r.nodeType!==1)return;if(r.matches(sel))io.observe(r);r.querySelectorAll(sel).forEach(function(el){io.observe(el)})}function start(){scan(document.body);new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(scan)})}).observe(document.body,{childList:true,subtree:true})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",start):start()})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body id="top" className="font-sans text-base">
        <div aria-hidden="true" className="scroll-progress" />
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
