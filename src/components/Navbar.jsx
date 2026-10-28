import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Gift, Menu, X, Heart } from "lucide-react";
import { audioService } from "../utils/audioService";

export default function Navbar({ weddingData, onReplayGiftBox, soundEnabled, setSoundEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "Countdown", href: "#countdown" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Invitation", href: "#invitation" },
    { label: "RSVP", href: "#rsvp" },
  ];

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    audioService.toggleAmbientMusic(nextState);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    audioService.playSparkle();
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        padding: scrolled ? "0.75rem 1.5rem" : "1.25rem 2rem",
        backgroundColor: scrolled ? "rgba(253, 251, 247, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 4px 20px rgba(109, 27, 46, 0.06)" : "none",
        borderBottom: scrolled ? "1px solid rgba(197, 160, 89, 0.2)" : "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Monogram Brand */}
        <a
          href="#hero"
          onClick={handleNavClick}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            color: "var(--color-charcoal)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif-classic)",
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "var(--color-burgundy)",
            }}
          >
            {weddingData.couple.monogram}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              backgroundColor: "var(--color-gold)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "1.4rem",
              color: "var(--color-burgundy)",
            }}
          >
            wedding
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.8rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              style={{
                fontFamily: "var(--font-modern)",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-charcoal)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-burgundy)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-charcoal)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Sound & Replay Gift */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Replay Gift Box */}
          <button
            type="button"
            onClick={onReplayGiftBox}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 0.9rem",
              borderRadius: "30px",
              fontSize: "0.8rem",
              fontFamily: "var(--font-modern)",
              fontWeight: 500,
              border: "1px solid rgba(197, 160, 89, 0.4)",
              background: "rgba(255, 255, 255, 0.8)",
              color: "var(--color-burgundy)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            title="Replay 3D gift box unwrap experience"
            aria-label="Replay gift box animation"
          >
            <Gift size={15} />
            <span className="hide-on-mobile">Unwrap Again</span>
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              background: soundEnabled ? "var(--color-burgundy)" : "rgba(255, 255, 255, 0.8)",
              color: soundEnabled ? "#FFF" : "var(--color-burgundy)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            title={soundEnabled ? "Mute romantic music" : "Play romantic music"}
            aria-label="Toggle background music"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgba(197, 160, 89, 0.3)",
              background: "rgba(255, 255, 255, 0.8)",
              color: "var(--color-charcoal)",
              cursor: "pointer",
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "rgba(253, 251, 247, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(197, 160, 89, 0.3)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            boxShadow: "0 10px 25px rgba(109, 27, 46, 0.1)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              style={{
                fontFamily: "var(--font-serif-classic)",
                fontSize: "1.2rem",
                color: "var(--color-charcoal)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>{link.label}</span>
              <Heart size={14} color="var(--color-gold)" />
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
