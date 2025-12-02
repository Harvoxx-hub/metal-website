import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MeetupContent from "./MeetupContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meetup - Safe Group Dates | The Metal App",
  description: "Go on dates in a safe group setting. Meetup allows you to connect with others in groups of 10 or less, providing safety and comfort while still allowing one-on-one conversations.",
};

export default function MeetupPage() {
  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      <MeetupContent />
      <Footer />
    </main>
  );
}
