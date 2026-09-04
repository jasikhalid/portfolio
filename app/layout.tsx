import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammed Jasi — Odoo Developer",
  description: "Odoo developer building ERP systems, business automation, and full-stack web apps.",
  metadataBase: new URL("https://jasikhalid.github.io"),
  openGraph: { title: "Muhammed Jasi — Odoo Developer", description: "ERP systems, business automation modules, and web apps companies run on.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
