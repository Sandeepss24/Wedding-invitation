import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowUp, Gift, Music } from "lucide-react";
import { audioService } from "../utils/audioService";

export default function ThankYouSection({ weddingData, onReplayGiftBox }) {
  const { couple, schedule } = weddingData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    audioService.playSparkle();
  };

  return (
    <footer
      style={{
        position: "relative",
        padding: "6rem 1.5rem 3rem",
        background: "linear-gradient(180deg, #FDFBF7 0%, #F5ECE1 100%)",
        borderTop: "1px solid rgba(197, 160, 89, 0.25)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(232, 165, 152, 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 10, maxWidth: "680px" }}>
        {/* Monogram Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "1px solid rgba(197, 160, 89, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.8rem",
            background: "#FFF",
            boxShadow: "0 6px 20px rgba(109, 27, 46, 0.08)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif-classic)",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "var(--color-burgundy)",
              letterSpacing: "0.05em",
            }}
          >
            {couple.monogram}
          </span>
        </motion.div>

        {/* Romantic Closing Message */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "var(--font-serif-display)",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            color: "var(--color-charcoal)",
            marginBottom: "0.8rem",
            lineHeight: 1.2,
          }}
        >
          We Can't Wait To Celebrate With You
        </motion.h3>

        <div className="ornament-line">
          <Heart size={16} color="var(--color-burgundy)" fill="var(--color-burgundy)" opacity={0.7} />
        </div>

        <p
          style={{
            fontFamily: "var(--font-serif-classic)",
            fontStyle: "italic",
            fontSize: "1.3rem",
            color: "var(--color-muted)",
            marginBottom: "0.8rem",
          }}
        >
          {couple.namesCombined}
        </p>

        {/* Closing Arabic Dua */}
        <div style={{ margin: "1rem auto 1.5rem" }}>
          <div
            style={{
              fontFamily: "var(--font-arabic)",
              fontSize: "1.35rem",
              color: "var(--color-emerald)",
              direction: "rtl",
              marginBottom: "0.2rem",
            }}
          >
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </div>
          <p
            style={{
              fontFamily: "var(--font-serif-classic)",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "var(--color-muted)",
            }}
          >
            May Allah bless your union with eternal peace, love, and contentment.
          </p>
        </div>

        <p
          style={{
            fontFamily: "var(--font-modern)",
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 600,
            marginBottom: "2.5rem",
          }}
        >
          {schedule.weddingDateDisplay} • {weddingData.venue.name}
        </p>

        {/* Replay Gift Box & Back to Top CTAs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          <button
            type="button"
            onClick={onReplayGiftBox}
            className="btn-secondary"
            style={{ fontSize: "0.85rem" }}
          >
            <Gift size={16} />
            <span>Replay Gift Box Experience</span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ fontSize: "0.85rem" }}
          >
            <ArrowUp size={16} />
            <span>Back To Top</span>
          </button>
        </div>

        {/* Refined Minimal Footer */}
        <div
          style={{
            borderTop: "1px solid rgba(197, 160, 89, 0.2)",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            color: "var(--color-muted)",
            fontSize: "0.82rem",
            fontFamily: "var(--font-modern)",
          }}
        >
          <div className="footer-credits">
            <span className="footer-crafted-text">
              <span>Crafted with Sandeep</span>
              <Heart size={13} color="var(--color-burgundy)" fill="var(--color-burgundy)" />
            </span>
            <span>for {couple.namesCombined}’s Wedding</span>
          </div>
          <div>{couple.hashtag}</div>
        </div>
      </div>
    </footer>
  );
}
