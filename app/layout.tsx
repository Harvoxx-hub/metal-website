import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "The Metal App - Real Connections. No Pictures. No Pressure.",
  description: "The Metal App is a blind-connection platform built on one simple belief: real relationships should start with personality, values, and conversations — not appearances.",
  keywords: ["dating app", "blind dating", "anonymous dating", "personality first", "metal app"],
  openGraph: {
    title: "The Metal App - Real Connections. No Pictures. No Pressure.",
    description: "Connect based on who you are, not what you look like.",
    type: "website",
    url: "https://themetalapp.com",
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

