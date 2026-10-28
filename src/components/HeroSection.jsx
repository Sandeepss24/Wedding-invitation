import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronDown, Sparkles, Heart } from "lucide-react";

export default function HeroSection({ weddingData }) {
  const { couple, schedule, venue } = weddingData;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7rem 1.5rem 4rem",
        overflow: "hidden",
      }}
    >
      {/* Soft Background Accents */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(247, 221, 212, 0.45) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 232, 211, 0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating Sparkles & Petals */}
      <div className="sparkle-particle" style={{ top: "15%", left: "10%" }}>
        <Sparkles size={16} color="var(--color-gold)" />
      </div>
      <div className="sparkle-particle" style={{ top: "25%", right: "12%", animationDelay: "1.5s" }}>
        <Heart size={14} color="#E8A598" fill="#E8A598" opacity={0.7} />
      </div>

      <div
        className="container-custom"
        style={{
          width: "100%",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Sacred Bismillah Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ marginBottom: "0.8rem" }}
        >
          <div className="bismillah-calligraphy-gold">
            {weddingData.bismillah?.arabic || "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"}
          </div>
          <div
            style={{
              fontFamily: "var(--font-serif-classic)",
              fontStyle: "italic",
              fontSize: "0.98rem",
              color: "var(--color-muted)",
              letterSpacing: "0.04em",
              marginBottom: "1.2rem",
            }}
          >
            In the name of Allah, the Most Gracious, the Most Merciful
          </div>
        </motion.div>

        {/* Subtle Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: "1.2rem" }}
        >
          <span
            className="tag-pill"
            style={{
              padding: "0.5rem 1.4rem",
              fontSize: "0.82rem",
              letterSpacing: "0.22em",
              borderRadius: "30px",
              background: "rgba(255, 255, 255, 0.92)",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              boxShadow: "0 4px 15px rgba(13, 68, 51, 0.06)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Sparkles size={13} color="var(--color-gold)" />
            {couple.announcementHeading}
            <Sparkles size={13} color="var(--color-gold)" />
          </span>
        </motion.div>

        {/* Couple Names Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-serif-display)",
            fontSize: "clamp(2.3rem, 6.5vw, 5.5rem)",
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "var(--color-charcoal)",
            marginBottom: "0.8rem",
            padding: "0 0.5rem",
          }}
        >
          <span className="text-gold-gradient">{couple.groom.shortName || couple.groom.name}</span>
          <span style={{ fontFamily: "var(--font-script)", fontSize: "0.9em", color: "var(--color-emerald)", margin: "0 0.35rem" }}>
            &amp;
          </span>
          <span className="text-gold-gradient">{couple.bride.name}</span>
        </motion.h1>

        {/* Romantic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: "var(--font-serif-classic)",
            fontStyle: "italic",
            fontSize: "clamp(1.05rem, 2.2vw, 1.45rem)",
            color: "var(--color-muted)",
            maxWidth: "680px",
            margin: "0 auto 1.5rem",
            lineHeight: 1.5,
            padding: "0 0.5rem",
          }}
        >
          "{couple.subtitle}"
        </motion.p>

        {/* Blessed Dua Box */}
        {couple.duaArabic && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{
              background: "rgba(233, 244, 238, 0.75)",
              border: "1px solid rgba(197, 160, 89, 0.35)",
              borderRadius: "18px",
              padding: "0.85rem 1.2rem",
              maxWidth: "620px",
              margin: "0 auto 2.2rem",
              boxShadow: "0 4px 15px rgba(13, 68, 51, 0.05)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-arabic)",
                fontSize: "clamp(1.15rem, 3.2vw, 1.35rem)",
                color: "var(--color-emerald)",
                direction: "rtl",
                marginBottom: "0.25rem",
              }}
            >
              {couple.duaArabic}
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif-classic)",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                lineHeight: 1.4,
              }}
            >
              "{couple.duaTranslation}"
            </div>
          </motion.div>
        )}

        {/* Editorial Photo Frame with Arch & Gold Trim */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "880px",
            borderRadius: "32px 32px 24px 24px",
            overflow: "hidden",
            boxShadow: "0 25px 60px -15px rgba(13, 68, 51, 0.22), 0 0 30px rgba(197, 160, 89, 0.2)",
            border: "1px solid rgba(197, 160, 89, 0.35)",
            background: "#FFFDF9",
            padding: "8px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(380px, 60vw, 560px)",
              borderRadius: "26px 26px 18px 18px",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/wedding-2.jpg"
              alt={`${couple.namesCombined} Wedding Walk`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 22%",
                transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            {/* Subtle Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(13, 68, 51, 0.85) 0%, rgba(13, 68, 51, 0.2) 45%, transparent 75%)",
                pointerEvents: "none",
              }}
            />

            {/* Bottom Hero Ribbon Bar */}
            <div
              className="hero-bottom-ribbon"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.2rem 1.6rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.8rem",
                color: "#FFF",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", textAlign: "left" }}>
                <Calendar size={18} color="var(--color-gold-light)" />
                <div>
                  <div style={{ fontFamily: "var(--font-modern)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.85 }}>
                    Marriage Date
                  </div>
                  <div style={{ fontFamily: "var(--font-serif-classic)", fontSize: "1.05rem", fontWeight: 600 }}>
                    {schedule.weddingDateDisplay}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", textAlign: "left" }}>
                <MapPin size={18} color="var(--color-gold-light)" />
                <div>
                  <div style={{ fontFamily: "var(--font-modern)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.85 }}>
                    Venue
                  </div>
                  <div style={{ fontFamily: "var(--font-serif-classic)", fontSize: "1.05rem", fontWeight: 600 }}>
                    {venue.name}
                  </div>
                </div>
              </div>

              <a
                href="#rsvp"
                className="btn-gold"
                style={{
                  fontSize: "0.82rem",
                  padding: "0.6rem 1.3rem",
                  textDecoration: "none",
                }}
              >
                RSVP Now
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.3rem",
            color: "var(--color-muted)",
            textDecoration: "none",
            fontFamily: "var(--font-modern)",
            fontSize: "0.78rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          <span>Scroll To Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} color="var(--color-burgundy)" />
          </motion.div>
        </motion.a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-bottom-ribbon {
            padding: 1rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            background: rgba(7, 41, 31, 0.75);
            backdrop-filter: blur(8px);
          }
          .hero-bottom-ribbon .btn-gold {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
