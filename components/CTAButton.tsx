"use client";

import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

interface CTAButtonProps {
  variant?: "header" | "primary" | "secondary";
  store?: "appstore" | "googleplay" | "both";
  className?: string;
}

const APP_STORE_URL = "https://apps.apple.com/ng/app/metal-blind-connect/id6499093482";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.bwh.metal_app";

export default function CTAButton({
  variant = "primary",
  store = "both",
  className = "",
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 hover:scale-105";

  const variantStyles = {
    header: "bg-primary-gradient text-white px-4 py-2 text-sm",
    primary: "bg-primary-gradient text-white px-6 py-3 text-base shadow-lg hover:shadow-primary-glow",
    secondary: "bg-dark-secondary border border-primary text-white px-6 py-3 text-base hover:bg-primary hover:text-white",
  };

  if (store === "both") {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${variantStyles[variant]} w-full sm:w-auto`}
        >
          <FaApple className="w-5 h-5 mr-2" />
          Download on the App Store
        </Link>
        <Link
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${variantStyles[variant]} w-full sm:w-auto`}
        >
          <FaGooglePlay className="w-5 h-5 mr-2" />
          Get it on Google Play
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={store === "appstore" ? APP_STORE_URL : GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {store === "appstore" ? (
        <>
          <FaApple className="w-5 h-5 mr-2" />
          Download App
        </>
      ) : (
        <>
          <FaGooglePlay className="w-5 h-5 mr-2" />
          Get it on Google Play
        </>
      )}
    </Link>
  );
}
