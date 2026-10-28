import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Share2, Printer, Download, Maximize2, MapPin, Phone, Calendar, X, Eye } from "lucide-react";

export default function InvitationCardSection({ weddingData }) {
  const { invitationCard, couple, venue } = weddingData;
  const [viewMode, setViewMode] = useState("card"); // 'card' (official printed image) | 'digital' (typographic)
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${couple.namesCombined} Wedding Invitation`,
          text: `In the name of Allah, you are cordially invited to celebrate the marriage of ${couple.namesCombined}!`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share canceled", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Wedding invitation link copied to clipboard!");
    }
  };

  return (
    <section
      id="invitation"
      style={{
        padding: "5rem 1.2rem",
        position: "relative",
      }}
    >
      <div className="container-custom" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "2.8rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill" style={{ marginBottom: "0.8rem" }}>
              Formal Invitation
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                color: "var(--color-charcoal)",
                marginTop: "0.5rem",
                marginBottom: "0.8rem",
              }}
            >
              The Royal Invitation
            </h2>
            <div className="ornament-line">
              <Sparkles size={16} color="var(--color-gold)" />
            </div>
            <p
              style={{
                fontFamily: "var(--font-serif-classic)",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "var(--color-muted)",
                maxWidth: "600px",
                margin: "0 auto",
                padding: "0 0.5rem",
              }}
            >
              The traditional printed keepsake for the marriage of {couple.namesCombined}.
            </p>
          </motion.div>

          {/* Toggle between Official Card Image & Digital Layout */}
          <div
            style={{
              display: "inline-flex",
              background: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              borderRadius: "40px",
              padding: "4px",
              marginTop: "1.8rem",
              boxShadow: "0 4px 15px rgba(112, 31, 43, 0.06)",
            }}
          >
            <button
              type="button"
              onClick={() => setViewMode("card")}
              style={{
                padding: "0.45rem 1.2rem",
                borderRadius: "30px",
                fontFamily: "var(--font-modern)",
                fontSize: "0.82rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: viewMode === "card" ? "var(--color-burgundy)" : "transparent",
                color: viewMode === "card" ? "#FFF" : "var(--color-charcoal)",
              }}
            >
              Official Printed Card
            </button>
            <button
              type="button"
              onClick={() => setViewMode("digital")}
              style={{
                padding: "0.45rem 1.2rem",
                borderRadius: "30px",
                fontFamily: "var(--font-modern)",
                fontSize: "0.82rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: viewMode === "digital" ? "var(--color-burgundy)" : "transparent",
                color: viewMode === "digital" ? "#FFF" : "var(--color-charcoal)",
              }}
            >
              Digital Keepsake
            </button>
          </div>
        </div>

        {/* View Mode 1: Authentic Official Invitation Card Image */}
        {viewMode === "card" && (
          <motion.div
            key="official-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "580px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 25px 60px -15px rgba(112, 31, 43, 0.22), 0 0 30px rgba(197, 160, 89, 0.25)",
              border: "2px solid rgba(197, 160, 89, 0.45)",
              background: "#FFFDF9",
              padding: "10px",
            }}
          >
            {/* Click to Zoom Banner on Card */}
            <div
              style={{
                position: "relative",
                borderRadius: "18px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => setIsZoomOpen(true)}
              title="Click to view full size"
            >
              <img
                src={invitationCard.cardImage || "/images/invitation-card.jpg"}
                alt={`${couple.namesCombined} Wedding Invitation Card`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "16px",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />

              {/* Floating Tap to Zoom Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  background: "rgba(112, 31, 43, 0.9)",
                  backdropFilter: "blur(6px)",
                  color: "#FFF",
                  padding: "0.45rem 0.95rem",
                  borderRadius: "25px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontFamily: "var(--font-modern)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
                  border: "1px solid rgba(197, 160, 89, 0.4)",
                }}
              >
                <Maximize2 size={13} color="var(--color-gold-light)" />
                <span>Tap to Zoom</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* View Mode 2: Digital Royal Stationery Card */}
        {viewMode === "digital" && (
          <motion.div
            key="digital-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="print-invitation-card"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "680px",
              backgroundColor: "#FFFDF9",
              borderRadius: "24px",
              padding: "clamp(2.5rem, 5vw, 4.5rem) clamp(1.4rem, 4vw, 3.5rem)",
              boxShadow: "0 25px 60px -15px rgba(112, 31, 43, 0.18), 0 0 30px rgba(197, 160, 89, 0.18)",
              border: "1px solid rgba(197, 160, 89, 0.35)",
              textAlign: "center",
            }}
          >
            {/* Double Gold Inset Border */}
            <div
              style={{
                position: "absolute",
                inset: "12px",
                border: "1px solid rgba(197, 160, 89, 0.45)",
                borderRadius: "18px",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "17px",
                border: "1px dashed rgba(197, 160, 89, 0.25)",
                borderRadius: "14px",
                pointerEvents: "none",
              }}
            />

            {/* 3D Wax Seal Stamp Emblem */}
            <div
              style={{
                position: "absolute",
                top: "-26px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, #912E3B 0%, #701F2B 70%, #4A121A 100%)",
                boxShadow: "0 6px 18px rgba(112, 31, 43, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.35)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif-classic)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#E8CA85",
                  letterSpacing: "0.05em",
                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                {couple.bride.initial}&amp;{couple.groom.initial}
              </span>
            </div>

            {/* Card Content */}
            <div style={{ position: "relative", zIndex: 5 }}>
              {/* Bismillah on Formal Card */}
              <div style={{ marginBottom: "1.2rem", marginTop: "0.5rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-arabic)",
                    fontSize: "clamp(1.8rem, 3.8vw, 2.4rem)",
                    color: "var(--color-burgundy)",
                    direction: "rtl",
                    lineHeight: 1.3,
                  }}
                >
                  {invitationCard.bismillahArabic}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-serif-classic)",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "var(--color-muted)",
                    letterSpacing: "0.03em",
                    marginTop: "0.2rem",
                  }}
                >
                  {invitationCard.bismillahEnglish}
                </p>
              </div>

              {/* Bride's Parents & Family */}
              <div
                style={{
                  fontFamily: "var(--font-serif-classic)",
                  fontSize: "1.08rem",
                  color: "#4A4642",
                  lineHeight: 1.5,
                  marginBottom: "1.3rem",
                }}
              >
                <div style={{ fontWeight: 600, color: "var(--color-charcoal)", fontSize: "1.15rem" }}>
                  {invitationCard.parentsBride}
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--color-muted)", marginTop: "0.15rem" }}>
                  {invitationCard.parentsBrideHouse}
                </div>
              </div>

              {/* Invitation Plea */}
              <p
                style={{
                  fontFamily: "var(--font-serif-classic)",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "var(--color-muted)",
                  maxWidth: "500px",
                  margin: "0 auto 1.4rem",
                  lineHeight: 1.6,
                }}
              >
                {invitationCard.invitationPlea}
              </p>

              {/* Couple Names */}
              <div style={{ margin: "1.4rem 0" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif-display)",
                    fontSize: "clamp(2rem, 5.5vw, 3.2rem)",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                    lineHeight: 1.15,
                    marginBottom: "0.4rem",
                  }}
                >
                  <span className="text-gold-gradient">{invitationCard.brideName}</span>
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.8rem",
                    margin: "0.3rem 0",
                  }}
                >
                  <Heart size={16} color="var(--color-gold)" fill="var(--color-gold)" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif-display)",
                    fontSize: "clamp(2rem, 5.5vw, 3.2rem)",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                    lineHeight: 1.15,
                  }}
                >
                  <span className="text-gold-gradient">{invitationCard.groomName}</span>
                </h3>
              </div>

              {/* Groom's Parents */}
              <div
                style={{
                  fontFamily: "var(--font-serif-classic)",
                  fontSize: "1.02rem",
                  color: "#4A4642",
                  lineHeight: 1.5,
                  marginTop: "1.2rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ fontWeight: 600, color: "var(--color-charcoal)", fontSize: "1.1rem" }}>
                  S/o {invitationCard.parentsGroom}
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--color-muted)", marginTop: "0.15rem" }}>
                  {invitationCard.parentsGroomHouse}
                </div>
              </div>

              {/* Insha Allah Badge */}
              <div style={{ margin: "1.2rem auto" }}>
                <span
                  style={{
                    fontFamily: "var(--font-modern)",
                    fontSize: "0.82rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-burgundy)",
                    fontWeight: 600,
                    padding: "0.25rem 0.85rem",
                    background: "rgba(248, 240, 227, 0.85)",
                    borderRadius: "20px",
                    border: "1px solid rgba(197, 160, 89, 0.3)",
                  }}
                >
                  {invitationCard.inshaAllah}
                </span>
              </div>

              {/* Nikkah Date & Venue Details Box */}
              <div
                style={{
                  margin: "1.4rem auto",
                  padding: "1.2rem 1.4rem",
                  background: "linear-gradient(135deg, rgba(248, 240, 227, 0.75) 0%, rgba(245, 232, 211, 0.35) 100%)",
                  borderRadius: "18px",
                  border: "1px solid rgba(197, 160, 89, 0.4)",
                  maxWidth: "520px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-modern)",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--color-burgundy)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {invitationCard.nikkahTime}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif-display)",
                    fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)",
                    fontWeight: 600,
                    color: "var(--color-charcoal)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {invitationCard.ceremonyDate}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-modern)",
                    fontSize: "0.82rem",
                    color: "var(--color-muted)",
                    marginTop: "0.2rem",
                  }}
                >
                  {invitationCard.hijriDate}
                </div>

                <div
                  style={{
                    marginTop: "0.8rem",
                    paddingTop: "0.8rem",
                    borderTop: "1px dashed rgba(197, 160, 89, 0.4)",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-serif-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-burgundy)" }}>
                    {invitationCard.venueName}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>
                    {invitationCard.venueAddress}
                  </div>
                </div>
              </div>

              {/* Sharing the Happiness */}
              <div style={{ marginTop: "1.4rem" }}>
                <p style={{ fontFamily: "var(--font-serif-classic)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-muted)" }}>
                  Sharing the happiness:
                </p>
                <div style={{ fontFamily: "var(--font-script)", fontSize: "1.8rem", color: "var(--color-burgundy)", marginTop: "0.1rem" }}>
                  {invitationCard.sharingHappiness}
                </div>
                <div style={{ fontFamily: "var(--font-modern)", fontSize: "0.82rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>
                  Ph: {invitationCard.contactPhoneFormatted || invitationCard.contactPhone}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Buttons for Card */}
        <div
          style={{
            display: "flex",
            gap: "0.8rem",
            marginTop: "2.2rem",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            maxWidth: "680px",
          }}
        >
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${invitationCard.contactPhone}`}
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.75rem 1.4rem" }}
          >
            <Phone size={15} />
            <span>Call: {invitationCard.contactPhone}</span>
          </a>

          {/* Direct Maps Navigation */}
          <a
            href={invitationCard.locationMapsUrl || venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: "0.85rem", padding: "0.75rem 1.3rem" }}
          >
            <MapPin size={15} />
            <span>Open in Maps</span>
          </a>

          {/* Download Original Card */}
          <a
            href={invitationCard.cardImage || "/images/invitation-card.jpg"}
            download="Nishad_Jumeena_Wedding_Invitation.jpg"
            className="btn-secondary"
            style={{ fontSize: "0.85rem", padding: "0.75rem 1.3rem" }}
          >
            <Download size={15} />
            <span>Download Card</span>
          </a>

          {/* Share */}
          <button
            type="button"
            onClick={handleShare}
            className="btn-secondary"
            style={{ fontSize: "0.85rem", padding: "0.75rem 1.3rem" }}
          >
            <Share2 size={15} />
            <span>Share</span>
          </button>

          {/* Print */}
          <button
            type="button"
            onClick={handlePrint}
            className="btn-secondary"
            style={{ fontSize: "0.85rem", padding: "0.75rem 1.3rem" }}
          >
            <Printer size={15} />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Full Size Card Lightbox Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10000,
              backgroundColor: "rgba(40, 12, 18, 0.95)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
            onClick={() => setIsZoomOpen(false)}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                color: "#FFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 20,
              }}
              aria-label="Close card view"
            >
              <X size={22} />
            </button>

            {/* Modal Image container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              style={{
                maxWidth: "92vw",
                maxHeight: "85vh",
                overflow: "auto",
                borderRadius: "16px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={invitationCard.cardImage || "/images/invitation-card.jpg"}
                alt="Full Wedding Invitation Card"
                style={{
                  width: "100%",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "14px",
                }}
              />
            </motion.div>

            <div style={{ marginTop: "1rem", color: "#FFF", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-serif-classic)", fontStyle: "italic", fontSize: "1.05rem" }}>
                Mohammed Nishad &amp; Jumeena • Sunday, November 22, 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
