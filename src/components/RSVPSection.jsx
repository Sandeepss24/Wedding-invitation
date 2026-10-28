import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, CheckCircle2, X, Calendar, MapPin } from "lucide-react";
import { fireRSVPConfetti } from "../utils/confetti";
import { audioService } from "../utils/audioService";

export default function RSVPSection({ weddingData }) {
  const { couple, schedule, venue } = weddingData;

  // Active wishing popup: null | 'attending' | 'declining'
  const [activeWish, setActiveWish] = useState(null);
  // Persist selected choice in UI
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoice = (choice) => {
    try {
      if (audioService && typeof audioService.playSparkle === "function") {
        audioService.playSparkle();
      }
    } catch (e) {
      console.warn("Audio trigger error:", e);
    }

    setSelectedChoice(choice);
    setActiveWish(choice);

    if (choice === "attending") {
      fireRSVPConfetti();
    }
  };

  const handleCloseWish = () => {
    setActiveWish(null);
  };

  return (
    <section
      id="rsvp"
      style={{
        padding: "6rem 1.5rem",
        position: "relative",
        background: "radial-gradient(at 50% 0%, rgba(248, 240, 227, 0.75) 0px, transparent 65%), var(--color-ivory)",
      }}
    >
      <div className="container-custom" style={{ maxWidth: "680px" }}>
        {/* Section Heading — Standardized to Royal Islamic Wedding Theme */}
        <div style={{ textAlign: "center", marginBottom: "2.8rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="tag-pill"
              style={{
                marginBottom: "0.8rem",
                display: "inline-block",
                padding: "0.35rem 1.1rem",
                borderRadius: "30px",
                border: "1px solid rgba(112, 31, 43, 0.18)",
                background: "rgba(248, 240, 227, 0.75)",
                color: "var(--color-burgundy)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Be Our Guest
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif-display)",
                fontSize: "clamp(2.3rem, 5vw, 3.6rem)",
                color: "var(--color-charcoal)",
                marginTop: "0.4rem",
                marginBottom: "0.7rem",
                letterSpacing: "-0.01em",
              }}
            >
              RSVP For The Celebration
            </h2>
            <div className="ornament-line">
              <Sparkles size={16} color="var(--color-gold)" />
            </div>
            <p
              style={{
                fontFamily: "var(--font-serif-classic)",
                fontStyle: "italic",
                fontSize: "1.18rem",
                color: "var(--color-muted)",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: 1.5,
              }}
            >
              Please let us know if you will be celebrating with us by November 22, 2026.
            </p>
          </motion.div>
        </div>

        {/* Clean Standardized RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="paper-card"
          style={{
            borderRadius: "28px",
            padding: "clamp(2.4rem, 5vw, 3.4rem)",
            background: "#FFFFFF",
            boxShadow: "0 12px 35px -8px rgba(112, 31, 43, 0.07), 0 4px 16px rgba(197, 160, 89, 0.06)",
            border: "1px solid rgba(197, 160, 89, 0.28)",
          }}
        >
          {/* Centered Uppercase Label */}
          <div style={{ textAlign: "center", marginBottom: "1.6rem" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-modern)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
              }}
            >
              Will You Attend?
            </span>
          </div>

          {/* Two Prominent Action Buttons */}
          <div
            className="rsvp-buttons-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.2rem",
            }}
          >
            {/* Button 1: Joyfully Accepts */}
            <button
              type="button"
              onClick={() => handleChoice("attending")}
              className={`rsvp-button-card attending ${selectedChoice === "attending" ? "active" : ""}`}
              style={{
                borderColor: selectedChoice === "attending" ? "var(--color-burgundy)" : undefined,
                background: selectedChoice === "attending" ? "rgba(248, 240, 227, 0.6)" : undefined,
              }}
              aria-label="Joyfully Accepts"
            >
              <Heart size={26} fill="var(--color-burgundy)" color="var(--color-burgundy)" />
              <span
                style={{
                  fontFamily: "var(--font-serif-classic)",
                  fontSize: "1.32rem",
                  fontWeight: 600,
                  color: "var(--color-charcoal)",
                  letterSpacing: "0.01em",
                }}
              >
                Joyfully Accepts
              </span>
            </button>

            {/* Button 2: Regretfully Declines */}
            <button
              type="button"
              onClick={() => handleChoice("declining")}
              className={`rsvp-button-card declining ${selectedChoice === "declining" ? "active" : ""}`}
              style={{
                borderColor: selectedChoice === "declining" ? "var(--color-gold)" : undefined,
                background: selectedChoice === "declining" ? "rgba(253, 251, 247, 0.75)" : undefined,
              }}
              aria-label="Regretfully Declines"
            >
              <Sparkles size={26} color="var(--color-muted)" />
              <span
                style={{
                  fontFamily: "var(--font-serif-classic)",
                  fontSize: "1.32rem",
                  fontWeight: 600,
                  color: "var(--color-muted)",
                  letterSpacing: "0.01em",
                }}
              >
                Regretfully Declines
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* ====================================================================
          POPUP MODAL: WISHING THE GUEST HAPPILY
          ==================================================================== */}
      <AnimatePresence>
        {activeWish && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(13, 30, 24, 0.65)",
              backdropFilter: "blur(6px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
            onClick={handleCloseWish}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#FFFDFB",
                borderRadius: "28px",
                maxWidth: "500px",
                width: "100%",
                padding: "clamp(2rem, 5vw, 2.8rem)",
                boxShadow: "0 25px 60px -15px rgba(74, 18, 26, 0.35)",
                border: "1px solid rgba(197, 160, 89, 0.38)",
                position: "relative",
                textAlign: "center",
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseWish}
                style={{
                  position: "absolute",
                  top: "1.1rem",
                  right: "1.1rem",
                  background: "rgba(0,0,0,0.05)",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--color-charcoal)",
                  transition: "background 0.2s ease",
                }}
              >
                <X size={18} />
              </button>

              {activeWish === "attending" ? (
                /* Joyful Attending Wish */
                <div>
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "50%",
                      background: "rgba(248, 240, 227, 0.9)",
                      border: "2px solid var(--color-burgundy)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.2rem",
                      color: "var(--color-burgundy)",
                      boxShadow: "0 8px 20px rgba(112, 31, 43, 0.15)",
                    }}
                  >
                    <Heart size={32} fill="var(--color-burgundy)" color="var(--color-burgundy)" />
                  </div>

                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-burgundy)",
                      background: "rgba(248, 240, 227, 0.85)",
                      padding: "0.3rem 0.9rem",
                      borderRadius: "20px",
                      display: "inline-block",
                      marginBottom: "0.6rem",
                    }}
                  >
                    ✨ Joyfully Welcoming You
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif-display)",
                      fontSize: "clamp(1.7rem, 4vw, 2.1rem)",
                      color: "var(--color-burgundy-dark)",
                      marginBottom: "0.8rem",
                      lineHeight: 1.2,
                    }}
                  >
                    Alhamdulillah! We Can't Wait To See You!
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-serif-classic)",
                      fontSize: "1.15rem",
                      fontStyle: "italic",
                      color: "var(--color-charcoal)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    "Your presence fills our hearts with immense happiness. May Allah shower you and your loved ones with peace, Barakah, and eternal joy!"
                  </p>

                  {/* Wedding Schedule Badge */}
                  <div
                    style={{
                      background: "#FAF7F2",
                      border: "1px dashed rgba(197, 160, 89, 0.35)",
                      borderRadius: "16px",
                      padding: "1rem 1.2rem",
                      marginBottom: "1.8rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      fontSize: "0.9rem",
                      color: "var(--color-charcoal)",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Calendar size={16} color="var(--color-gold)" />
                      <span>{schedule?.weddingDateDisplay || "November 20 – 22, 2026"}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <MapPin size={16} color="var(--color-gold)" />
                      <span>{venue?.name || "Nettoor Mahallu Auditorium, Ernakulam"}</span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-script)",
                      fontSize: "1.6rem",
                      color: "var(--color-gold-dark)",
                      margin: "0 0 1.5rem",
                    }}
                  >
                    With love, {couple.namesCombined}
                  </p>

                  <button
                    type="button"
                    onClick={handleCloseWish}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      padding: "0.9rem",
                      fontSize: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    Thank You So Much! 🤍
                  </button>
                </div>
              ) : (
                /* Gentle Declining Wish */
                <div>
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "50%",
                      background: "rgba(253, 251, 247, 0.85)",
                      border: "2px solid var(--color-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.2rem",
                      color: "var(--color-gold)",
                      boxShadow: "0 8px 20px rgba(197, 160, 89, 0.15)",
                    }}
                  >
                    <Sparkles size={30} color="var(--color-gold)" />
                  </div>

                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-gold-dark)",
                      background: "rgba(230, 202, 133, 0.2)",
                      padding: "0.3rem 0.9rem",
                      borderRadius: "20px",
                      display: "inline-block",
                      marginBottom: "0.6rem",
                    }}
                  >
                    🤍 Sincere Prayers & Duas
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif-display)",
                      fontSize: "clamp(1.7rem, 4vw, 2.1rem)",
                      color: "var(--color-charcoal)",
                      marginBottom: "0.8rem",
                      lineHeight: 1.2,
                    }}
                  >
                    You Will Be Truly Missed
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-serif-classic)",
                      fontSize: "1.15rem",
                      fontStyle: "italic",
                      color: "var(--color-charcoal)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    "Even though you cannot be with us in person, your thoughtful prayers, warm blessings, and love mean the world to Mohammed Nishad & Jumeena. You will always be in our hearts and prayers!"
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-script)",
                      fontSize: "1.6rem",
                      color: "var(--color-gold-dark)",
                      margin: "0 0 1.5rem",
                    }}
                  >
                    With warmest gratitude & love
                  </p>

                  <button
                    type="button"
                    onClick={handleCloseWish}
                    className="btn-secondary"
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      fontSize: "0.95rem",
                      justifyContent: "center",
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
