"use client";

import Image from "next/image";
import { HiLightningBolt } from "react-icons/hi";

interface PhoneMockupProps {
  screenContent?: "avatar-selection" | "chat" | "profile" | "unmelt";
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  rotated?: boolean;
}

export default function PhoneMockup({ 
  screenContent, 
  imageSrc, 
  imageAlt = "Metal App Screenshot",
  className = "",
  rotated = false
}: PhoneMockupProps) {
  const renderScreenContent = () => {
    // If image is provided, use it
    if (imageSrc) {
      return (
        <div className="relative w-full h-full bg-black">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`object-cover ${rotated ? 'transform rotate-12' : ''}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      );
    }

    // Otherwise, use the default screen content
    switch (screenContent) {
      case "avatar-selection":
        return (
          <div className="bg-dark-secondary h-full flex flex-col items-center justify-center p-6">
            <h3 className="text-white text-lg font-semibold mb-6">Choose Your Metal</h3>
            <div className="space-y-4 w-full">
              <div className="bg-primary-gradient rounded-full w-24 h-24 mx-auto flex items-center justify-center text-white font-bold text-2xl">
                Gold
              </div>
              <div className="bg-silver-gradient rounded-full w-24 h-24 mx-auto flex items-center justify-center text-dark font-bold text-2xl">
                Silver
              </div>
              <div className="bg-gradient-to-br from-bronze to-bronze-dark rounded-full w-24 h-24 mx-auto flex items-center justify-center text-white font-bold text-2xl">
                Bronze
              </div>
            </div>
          </div>
        );
      case "chat":
        return (
          <div className="bg-dark-secondary h-full flex flex-col p-4">
            <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-dark-border">
              <div className="w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold">
                G
              </div>
              <div>
                <div className="text-white font-semibold">Gold User</div>
                <div className="text-gray-400 text-xs">Online</div>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="bg-dark-tertiary rounded-lg p-3 max-w-[80%]">
                <p className="text-white text-sm">Hey! I love your interests in hiking and philosophy</p>
              </div>
              <div className="bg-primary-gradient rounded-lg p-3 max-w-[80%] ml-auto">
                <p className="text-white text-sm font-semibold">Thanks! What got you into philosophy?</p>
              </div>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="bg-dark-secondary h-full flex flex-col items-center p-6">
            <div className="w-32 h-32 bg-silver-gradient rounded-full mb-4 flex items-center justify-center text-dark font-bold text-4xl">
              S
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Silver User</h3>
            <div className="text-gray-400 text-sm mb-6">Looking for: Friends & Travel Buddies</div>
            <div className="w-full space-y-3">
              <div className="bg-dark-tertiary rounded-lg p-3">
                <div className="text-gray-400 text-xs mb-1">Interests</div>
                <div className="text-white text-sm">Travel, Photography, Coffee</div>
              </div>
              <div className="bg-dark-tertiary rounded-lg p-3">
                <div className="text-gray-400 text-xs mb-1">Values</div>
                <div className="text-white text-sm">Authenticity, Adventure, Growth</div>
              </div>
            </div>
          </div>
        );
      case "unmelt":
        return (
          <div className="bg-dark-secondary h-full flex flex-col items-center justify-center p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-primary-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                <HiLightningBolt className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Ready to Un-Melt?</h3>
              <p className="text-gray-400 text-sm">Both parties must agree to reveal</p>
            </div>
            <button className="bg-primary-gradient text-white px-6 py-3 rounded-lg font-semibold w-full">
              Un-Melt Now
            </button>
          </div>
        );
      default:
        return (
          <div className="bg-dark-secondary h-full flex items-center justify-center">
            <div className="text-gray-400">No content</div>
          </div>
        );
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* iPhone Frame */}
      <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
        
        {/* Screen */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden relative" style={{ aspectRatio: "9/19.5" }}>
          {renderScreenContent()}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  );
}
