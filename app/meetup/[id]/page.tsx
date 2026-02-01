import type { Metadata } from "next";
import OpenInAppPage from "@/components/OpenInAppPage";

export const metadata: Metadata = {
  title: "View on Metal",
  description: "Open this meetup in the Metal app.",
  openGraph: {
    title: "View on Metal",
    description: "Open this meetup in the Metal app.",
    siteName: "The Metal App",
    url: "https://themetalapp.com",
    images: ["/images/logo/logo.png"],
  },
  robots: { index: false, follow: true },
};

export default function MeetupOpenInAppPage() {
  return <OpenInAppPage />;
}
