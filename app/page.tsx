import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import FeatureSection from "@/components/FeatureSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <Comparison />
      <Stats />
      <Features />
      <FeatureSection />
      <Testimonials />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  );
}

