import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  axes: ["SOFT", "opsz"],
  style: ["normal", "italic"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Educator & Teacher Trainer`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    title: `${site.name} · Educator & Teacher Trainer`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
    images: [{ url: "/smriti-vasistha.webp", width: 520, height: 553, alt: site.name }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f7f2ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
