import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LinkupContent from "./LinkupContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linkup - Safe Group Dates | The Metal App",
  description: "Go on dates in a safe group setting. Linkup allows you to connect with others in groups of 10 or less, providing safety and comfort while still allowing one-on-one conversations.",
};

export default function LinkupPage() {
  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      <LinkupContent />
      <Footer />
    </main>
  );
}
