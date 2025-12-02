import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlindConnection from "@/components/BlindConnection";
import Comparison from "@/components/Comparison";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import FeatureSection from "@/components/FeatureSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Metal App - Real Connections. No Pictures. No Pressure.",
  description: "The Metal App is a blind-connection platform built on one simple belief: real relationships should start with personality, values, and conversations — not appearances.",
  openGraph: {
    title: "The Metal App - Real Connections. No Pictures. No Pressure.",
    description: "Connect based on who you are, not what you look like. The Metal App is a blind-connection platform focusing on personality, values, and meaningful conversations.",
    images: ["/images/logo/logo.png"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "The Metal App",
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "15000"
    },
    "description": "The Metal App is a blind-connection platform built on one simple belief: real relationships should start with personality, values, and conversations — not appearances.",
    "url": "https://themetalapp.com",
    "logo": "https://themetalapp.com/images/logo/logo.png",
    "screenshot": "https://themetalapp.com/images/screenshots/blindflod.png",
    "featureList": [
      "Anonymous Communities",
      "Swipe Through Profiles",
      "Share Your Thoughts",
      "Earn & Send Sparks",
      "Blind Connections",
      "Un-Melt When Ready"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Triple3JSolutions Inc.",
      "url": "https://themetalapp.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-dark">
        <Header />
        <Hero />
        <BlindConnection />
        <Comparison />
        <Stats />
        <Features />
        <FeatureSection />
        <Testimonials />
        <FAQ />
        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}

