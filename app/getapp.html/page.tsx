"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaApple, FaGooglePlay, FaSpinner } from "react-icons/fa";

const APP_STORE_URL = "https://apps.apple.com/ng/app/metal-blind-connect/id6499093482";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.bwh.metal_app";

export default function GetAppPage() {
  const [device, setDevice] = useState<"ios" | "android" | "unknown" | "detecting">("detecting");
  const router = useRouter();

  useEffect(() => {
    // Detect device type from user agent
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // Check for iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setDevice("ios");
      // Redirect to App Store
      window.location.href = APP_STORE_URL;
      return;
    }
    
    // Check for Android
    if (/android/i.test(userAgent)) {
      setDevice("android");
      // Redirect to Google Play Store
      window.location.href = GOOGLE_PLAY_URL;
      return;
    }
    
    // Unknown device - show options
    setDevice("unknown");
  }, []);

  return (
    <main className="min-h-screen bg-dark pt-20">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          {device === "detecting" && (
            <div className="bg-dark-tertiary rounded-2xl p-8 lg:p-12 border border-dark-border text-center">
              <FaSpinner className="w-16 h-16 mx-auto mb-6 text-primary animate-spin" />
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Redirecting to <span className="metallic-text">App Store</span>
              </h1>
              <p className="text-gray-300">
                Please wait while we redirect you to download The Metal App...
              </p>
            </div>
          )}

          {device === "unknown" && (
            <div className="bg-dark-tertiary rounded-2xl p-8 lg:p-12 border border-dark-border">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                Download <span className="metallic-text">The Metal App</span>
              </h1>
              <p className="text-gray-300 text-center mb-8">
                Choose your platform to download The Metal App:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary-gradient text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-glow"
                >
                  <FaApple className="w-6 h-6 mr-3" />
                  Download on the App Store
                </a>
                
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary-gradient text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-glow"
                >
                  <FaGooglePlay className="w-6 h-6 mr-3" />
                  Get it on Google Play
                </a>
              </div>
            </div>
          )}

          {(device === "ios" || device === "android") && (
            <div className="bg-dark-tertiary rounded-2xl p-8 lg:p-12 border border-dark-border text-center">
              <div className="mb-6">
                {device === "ios" ? (
                  <FaApple className="w-16 h-16 mx-auto text-primary" />
                ) : (
                  <FaGooglePlay className="w-16 h-16 mx-auto text-primary" />
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Redirecting to <span className="metallic-text">App Store</span>
              </h1>
              <p className="text-gray-300 mb-6">
                {device === "ios" 
                  ? "Redirecting you to the App Store to download The Metal App..."
                  : "Redirecting you to Google Play Store to download The Metal App..."
                }
              </p>
              <p className="text-sm text-gray-400">
                If you are not redirected automatically,{" "}
                <a
                  href={device === "ios" ? APP_STORE_URL : GOOGLE_PLAY_URL}
                  className="text-primary hover:text-primary-light underline"
                >
                  click here
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}

