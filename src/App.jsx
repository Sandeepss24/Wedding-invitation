import React, { useState, useEffect } from "react";
import { weddingData } from "./data/weddingData";
import GiftBoxOpening from "./components/GiftBoxOpening";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurStorySection from "./components/OurStorySection";
import CountdownSection from "./components/CountdownSection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import InvitationCardSection from "./components/InvitationCardSection";
import RSVPSection from "./components/RSVPSection";
import ThankYouSection from "./components/ThankYouSection";
import AudioPlayer from "./components/AudioPlayer";

export default function App() {
  // Check session storage to see if already opened in this tab session
  const [hasOpenedGift, setHasOpenedGift] = useState(() => {
    return sessionStorage.getItem("wedding_gift_opened") === "true";
  });

  const [soundEnabled, setSoundEnabled] = useState(false);

  // Handle gift box completion
  const handleOpenComplete = () => {
    setHasOpenedGift(true);
    sessionStorage.setItem("wedding_gift_opened", "true");
  };

  // Replay option for visitors to re-experience the gift unwrapping
  const handleReplayGiftBox = () => {
    sessionStorage.removeItem("wedding_gift_opened");
    setHasOpenedGift(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="wedding-app-root">
      {!hasOpenedGift ? (
        <GiftBoxOpening
          weddingData={weddingData}
          onOpenComplete={handleOpenComplete}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />
      ) : (
        <div className="main-invitation-content" style={{ animation: "fadeIn 1s ease" }}>
          {/* Floating Navigation */}
          <Navbar
            weddingData={weddingData}
            onReplayGiftBox={handleReplayGiftBox}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
          />

          {/* Main Website Sections */}
          <main>
            {/* Section 1: Hero — The Wedding Announcement */}
            <HeroSection weddingData={weddingData} />

            {/* Section 2: Our Story Timeline */}
            <OurStorySection weddingData={weddingData} />

            {/* Section 3: Live Wedding Countdown */}
            <CountdownSection weddingData={weddingData} />

            {/* Section 4: Wedding Events Itinerary */}
            {/* <EventsSection weddingData={weddingData} /> */}

            {/* Section 5: Editorial Couple Gallery */}
            {/* <GallerySection weddingData={weddingData} /> */}

            {/* Section 6: Digital Royal Invitation Card */}
            <InvitationCardSection weddingData={weddingData} />

            {/* Section 7: Interactive RSVP Form */}
            <RSVPSection weddingData={weddingData} />

            {/* Section 8: Romantic Closing & Footer */}
            <ThankYouSection weddingData={weddingData} onReplayGiftBox={handleReplayGiftBox} />
          </main>

          {/* Floating Ambient Music Control */}
          <AudioPlayer
            weddingData={weddingData}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
