import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://themetalapp.com"),
  title: {
    default: "The Metal App - Real Connections. No Pictures. No Pressure.",
    template: "%s | The Metal App",
  },
  description: "The Metal App is a blind-connection platform built on one simple belief: real relationships should start with personality, values, and conversations — not appearances. Connect based on who you are, not what you look like.",
  keywords: [
    "dating app",
    "blind dating",
    "anonymous dating",
    "personality first",
    "metal app",
    "blind connections",
    "no pictures dating",
    "anonymous chat",
    "personality based dating",
    "values based connections",
    "meaningful relationships",
    "real connections",
  ],
  authors: [{ name: "Triple3JSolutions Inc." }],
  creator: "Triple3JSolutions Inc.",
  publisher: "Triple3JSolutions Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://themetalapp.com",
    siteName: "The Metal App",
    title: "The Metal App - Real Connections. No Pictures. No Pressure.",
    description: "Connect based on who you are, not what you look like. The Metal App is a blind-connection platform focusing on personality, values, and meaningful conversations.",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "The Metal App - Real Connections. No Pictures. No Pressure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Metal App - Real Connections. No Pictures. No Pressure.",
    description: "Connect based on who you are, not what you look like. The Metal App is a blind-connection platform focusing on personality, values, and meaningful conversations.",
    images: ["/images/logo/logo.png"],
    creator: "@themetalapp",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#D9197B" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://themetalapp.com",
  },
  category: "dating",
  classification: "Social Networking",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#290F0F",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

