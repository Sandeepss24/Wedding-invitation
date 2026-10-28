import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Sparkles, Heart } from "lucide-react";
import { audioService } from "../utils/audioService";
import { fireGiftBoxConfetti } from "../utils/confetti";
import "./GiftBoxOpening.css";

export default function GiftBoxOpening({ weddingData, onOpenComplete, soundEnabled, setSoundEnabled }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Toggle sound with Web Audio activation
  const handleToggleSound = (e) => {
    e.stopPropagation();
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      audioService.init();
      audioService.playSparkle();
    }
  };

  const handleUnwrap = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play unwrap chime / ribbon sound
    audioService.init();
    audioService.playUnwrapSound();

    // Trigger golden sparkles & confetti burst
    setTimeout(() => {
      fireGiftBoxConfetti();
    }, 280);

    // If sound is enabled or turned on, start romantic ambient theme gently
    if (soundEnabled) {
      setTimeout(() => {
        audioService.startAmbientMusic();
      }, 1200);
    }

    // Begin fade out transition
    setTimeout(() => {
      setIsFadingOut(true);
    }, 1800);

    // Complete reveal into main website
    setTimeout(() => {
      onOpenComplete();
    }, 2500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleUnwrap();
    }
  };

  return (
    <div className={`gift-box-scene ${isFadingOut ? "scene-fade-out" : ""}`}>
      <div className="gift-scene-texture" />

      {/* Floating Ambient Sparkles */}
      <div className="sparkle-particle" style={{ top: "18%", left: "15%", animationDelay: "0s" }}>
        <Sparkles size={18} color="#D4AF37" />
      </div>
      <div className="sparkle-particle" style={{ top: "30%", right: "16%", animationDelay: "1.2s" }}>
        <Sparkles size={22} color="#C5A059" />
      </div>
      <div className="sparkle-particle" style={{ bottom: "25%", left: "18%", animationDelay: "2.1s" }}>
        <Heart size={16} color="#E8A598" fill="#E8A598" opacity={0.6} />
      </div>
      <div className="sparkle-particle" style={{ bottom: "35%", right: "20%", animationDelay: "0.8s" }}>
        <Sparkles size={16} color="#ECC880" />
      </div>

      {/* Top Bar */}
      <header className="gift-scene-header">
        <div className="gift-monogram-badge">
          {weddingData.couple.monogram}
        </div>
        <button
          type="button"
          onClick={handleToggleSound}
          className={`gift-sound-toggle ${soundEnabled ? "active" : ""}`}
          aria-label={soundEnabled ? "Mute music" : "Enable romantic music"}
          title={soundEnabled ? "Mute sound" : "Enable sound"}
        >
          {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>{soundEnabled ? "Sound ON" : "Sound OFF"}</span>
        </button>
      </header>

      {/* Top Announcement */}
      <div className="gift-text-top">
        <span className="gift-subhead">
          <Sparkles size={14} color="var(--color-gold)" />
          An Auspicious Invitation For You
          <Sparkles size={14} color="var(--color-gold)" />
        </span>
        <h1 className="gift-couple-names">{weddingData.couple.namesCombined}</h1>
      </div>

      {/* 3D Interactive Gift Box */}
      <div
        className="gift-box-viewport"
        onClick={handleUnwrap}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Tap to unwrap wedding invitation gift box"
      >
        <div className="box-ambient-glow" />
        <div className="box-ambient-shadow" />

        <div className={`gift-box-3d ${isOpening ? "is-opening" : ""}`}>
          {/* Inner Light Beam that shines out when opened */}
          <div className="inner-light-beam" />

          {/* Box Base (5 outer faces + 1 inner glowing face) */}
          <div className="box-base">
            <div className="box-face front" />
            <div className="box-face back" />
            <div className="box-face right" />
            <div className="box-face left" />
            <div className="box-face bottom" />
            <div className="box-face top-inside" />
          </div>

          {/* 3D Box Lid Assembly */}
          <div className="box-lid-assembly">
            <div className="lid-face-top">
              <div className="lid-ribbon-v" />
              <div className="lid-ribbon-h" />

              {/* Decorative Satin Bow & Jewel */}
              <div className="box-bow-container">
                <div className="bow-loop-left" />
                <div className="bow-loop-right" />
                <div className="bow-center-brooch">
                  {weddingData.couple.bride.initial}&amp;{weddingData.couple.groom.initial}
                </div>
              </div>
            </div>

            {/* Lid Rim Overhangs */}
            <div className="lid-rim front" />
            <div className="lid-rim back" />
            <div className="lid-rim left" />
            <div className="lid-rim right" />
          </div>
        </div>
      </div>

      {/* Bottom Hint and CTA */}
      <div className="gift-text-bottom">
        <p className="gift-hint-tag">Tap to reveal the blessed wedding invitation of Jumeena &amp; Nishad.</p>
        <button
          type="button"
          onClick={handleUnwrap}
          className="gift-unwrap-cta"
          disabled={isOpening}
          aria-label="Tap to unwrap"
        >
          <span>TAP TO UNWRAP</span>
          <Sparkles size={16} />
        </button>
      </div>
    </div>
  );
}
