import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronDown, Sparkles, Heart } from "lucide-react";
import RosePetals from "./RosePetals";

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
        padding: "5rem 1.5rem 4rem",
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

      {/* Ambient Falling Rose Petals Animation */}
      <RosePetals count={22} />

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
        {/* Full-view Hero Invitation Intro on Mobile */}
        <div
          className="hero-intro-view"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Sacred Bismillah Calligraphy in Gold */}
          <motion.div
            className="hero-bismillah-wrapper"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ marginBottom: "0.6rem" }}
          >
            <div className="bismillah-calligraphy-gold hero-bismillah-text">
              {weddingData.bismillah?.arabic || "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"}
            </div>
          </motion.div>

          {/* Subtitle Tagline: — NIKAH INVITATION — */}
          <motion.div
            className="hero-subtitle-wrapper"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ marginBottom: "1.2rem" }}
          >
            <div
              className="hero-subtitle-tag"
              style={{
                fontFamily: "var(--font-modern)",
                fontSize: "clamp(0.78rem, 1.8vw, 0.88rem)",
                fontWeight: 600,
                letterSpacing: "0.28em",
                color: "var(--color-burgundy)",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.65rem",
              }}
            >
              <span style={{ color: "var(--color-gold)", opacity: 0.85 }}>—</span>
              <span>{couple.announcementHeading || "NIKAH INVITATION"}</span>
              <span style={{ color: "var(--color-gold)", opacity: 0.85 }}>—</span>
            </div>
          </motion.div>

          {/* Grand Couple Names Headline */}
          <motion.h1
            className="hero-names-title"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{
              fontFamily: "var(--font-serif-display)",
              fontSize: "clamp(2.8rem, 7.5vw, 5.8rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "var(--color-charcoal)",
              marginBottom: "1.4rem",
              padding: "0 0.5rem",
            }}
          >
            <span>{couple.bride.name || couple.bride.shortName}</span>
            <span
              style={{
                fontFamily: "var(--font-serif-classic)",
                fontStyle: "italic",
                fontSize: "0.85em",
                color: "var(--color-gold)",
                margin: "0 0.45rem",
                fontWeight: 400,
                display: "inline-block",
              }}
            >
              &amp;
            </span>
            <span>{couple.groom.shortName || couple.groom.name}</span>
          </motion.h1>

          {/* English Bismillah */}
          <motion.p
            className="hero-bismillah-trans"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{
              fontFamily: "var(--font-serif-classic)",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2.3vw, 1.35rem)",
              color: "var(--color-charcoal)",
              opacity: 0.9,
              marginBottom: "1.1rem",
              letterSpacing: "0.01em",
            }}
          >
            {weddingData.bismillah?.english || "In the name of Allah, the Most Gracious, the Most Merciful"}
          </motion.p>

          {/* Delicate Golden Divider Dash */}
          <motion.div
            className="hero-divider-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            <span
              className="hero-divider-dash"
              style={{
                fontFamily: "var(--font-serif-classic)",
                fontSize: "1.6rem",
                lineHeight: 1,
                color: "var(--color-gold)",
                opacity: 0.75,
              }}
            >
              —
            </span>
          </motion.div>

          {/* Main Invitation Plea & Closing Paragraphs */}
          <motion.div
            className="hero-invitation-box"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{
              maxWidth: "700px",
              margin: "0 auto 2.8rem",
              padding: "0 1rem",
            }}
          >
            <p
              className="hero-invitation-plea"
              style={{
                fontFamily: "var(--font-serif-classic)",
                fontStyle: "italic",
                fontSize: "clamp(1.22rem, 2.6vw, 1.58rem)",
                color: "var(--color-charcoal)",
                lineHeight: 1.65,
                marginBottom: "1.1rem",
              }}
            >
              With the blessings of Almighty Allah and of our beloved families,{" "}
              <span style={{ fontWeight: 600, color: "var(--color-charcoal)" }}>
                {couple.bride.name || couple.bride.shortName}
              </span>{" "}
              <span
                style={{
                  fontFamily: "var(--font-serif-classic)",
                  fontStyle: "italic",
                  color: "var(--color-gold)",
                  margin: "0 0.15rem",
                }}
              >
                &amp;
              </span>{" "}
              <span style={{ fontWeight: 600, color: "var(--color-charcoal)" }}>
                {couple.groom.shortName || couple.groom.name}
              </span>{" "}
              invite you to the Nikah that joins them in marriage.
            </p>

            <p
              className="hero-invitation-closing"
              style={{
                fontFamily: "var(--font-serif-classic)",
                fontStyle: "italic",
                fontSize: "clamp(1.12rem, 2.4vw, 1.4rem)",
                color: "var(--color-charcoal)",
                opacity: 0.88,
                lineHeight: 1.55,
              }}
            >
              {couple.invitationClosing || "Your presence and your du'a would make our day complete."}
            </p>

            {/* Scroll Down Button */}
            <motion.a
              href="#hero-photo"
              className="hero-scroll-btn"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("hero-photo");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.25rem",
                color: "var(--color-muted)",
                textDecoration: "none",
                fontFamily: "var(--font-modern)",
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                marginTop: "1.6rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-burgundy)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              aria-label="Scroll down to wedding celebration details"
            >
              <span>Scroll To Explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={19} color="var(--color-burgundy)" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>

        {/* Editorial Photo Frame with Arch & Gold Trim */}
        <motion.div
          id="hero-photo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "880px",
            borderRadius: "32px 32px 24px 24px",
            overflow: "hidden",
            boxShadow: "0 25px 60px -15px rgba(112, 31, 43, 0.22), 0 0 30px rgba(197, 160, 89, 0.2)",
            border: "1px solid rgba(197, 160, 89, 0.35)",
            background: "#FFFDF9",
            padding: "8px",
            scrollMarginTop: "5rem",
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
                background: "linear-gradient(to top, rgba(112, 31, 43, 0.88) 0%, rgba(112, 31, 43, 0.22) 45%, transparent 75%)",
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
      </div>

      <style>{`
        @media (max-width: 640px) {
          #hero {
            display: block !important;
            padding-top: 4.4rem !important;
            padding-bottom: 2.2rem !important;
            padding-left: 1.2rem !important;
            padding-right: 1.2rem !important;
            min-height: auto !important;
          }
          .hero-intro-view {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            min-height: auto !important;
            padding-bottom: 1.2rem !important;
            padding-top: 5rem !important;
          }
          .hero-bismillah-wrapper {
            margin-bottom: 0.65rem !important;
          }
          .hero-bismillah-text {
            font-size: clamp(2.15rem, 5.8vw, 2.75rem) !important;
            line-height: 1.35 !important;
            margin-bottom: 0 !important;
          }
          .hero-subtitle-wrapper {
            margin-bottom: 0.95rem !important;
          }
          .hero-subtitle-tag {
            font-size: 0.74rem !important;
            letter-spacing: 0.25em !important;
            gap: 0.5rem !important;
          }
          .hero-names-title {
            font-size: clamp(2.35rem, 7.6vw, 3.1rem) !important;
            line-height: 1.12 !important;
            margin-bottom: 0.95rem !important;
            padding: 0 0.5rem !important;
          }
          .hero-bismillah-trans {
            font-size: 1.05rem !important;
            line-height: 1.45 !important;
            margin-bottom: 0.8rem !important;
            padding: 0 0.5rem !important;
          }
          .hero-divider-wrapper {
            margin-bottom: 0.95rem !important;
          }
          .hero-divider-dash {
            font-size: 1.4rem !important;
          }
          .hero-invitation-box {
            margin: 0 auto 1.4rem !important;
            padding: 0 0.5rem !important;
          }
          .hero-invitation-plea {
            font-size: 1.14rem !important;
            line-height: 1.58 !important;
            margin-bottom: 0.85rem !important;
          }
          .hero-invitation-closing {
            font-size: 1.05rem !important;
            line-height: 1.5 !important;
            margin-bottom: 0 !important;
          }
          .hero-scroll-btn {
            margin-top: 1.4rem !important;
            font-size: 0.74rem !important;
            letter-spacing: 0.18em !important;
            gap: 0.25rem !important;
          }
          .hero-scroll-btn svg {
            width: 19px !important;
            height: 19px !important;
          }
          .hero-bottom-ribbon {
            padding: 1rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            background: rgba(74, 18, 26, 0.85);
            backdrop-filter: blur(8px);
          }
          .hero-bottom-ribbon .btn-gold {
            width: 100%;
            justify-content: center;
          }
        }

        /* Responsive scaling for compact mobile screens */
        @media (max-width: 640px) and (max-height: 720px) {
          #hero {
            padding-top: 3.8rem !important;
          }
          .hero-bismillah-text {
            font-size: 2rem !important;
          }
          .hero-subtitle-wrapper {
            margin-bottom: 0.75rem !important;
          }
          .hero-names-title {
            font-size: 2.2rem !important;
            margin-bottom: 0.75rem !important;
          }
          .hero-bismillah-trans {
            font-size: 0.98rem !important;
            margin-bottom: 0.65rem !important;
          }
          .hero-divider-wrapper {
            margin-bottom: 0.75rem !important;
          }
          .hero-invitation-plea {
            font-size: 1.06rem !important;
            line-height: 1.5 !important;
            margin-bottom: 0.7rem !important;
          }
          .hero-invitation-closing {
            font-size: 0.98rem !important;
            line-height: 1.42 !important;
          }
          .hero-scroll-btn {
            margin-top: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
