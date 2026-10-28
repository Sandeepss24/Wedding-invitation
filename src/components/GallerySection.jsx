import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Maximize2, Heart } from "lucide-react";
import LightboxModal from "./LightboxModal";

export default function GallerySection({ weddingData }) {
  const { gallery } = weddingData;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Single tab display as requested: no more tabs, only one tab
  const activeTab = "All Moments";

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      style={{
        padding: "5rem 1.2rem",
        position: "relative",
      }}
    >
      <div className="container-custom">
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill" style={{ marginBottom: "0.8rem" }}>
              Memories &amp; Moments
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
              Captured In Time
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
              A glimpse into the heartfelt smiles, laughter, and timeless celebrations of Nishad &amp; Jumeena.
            </p>
          </motion.div>

          {/* Single Clean Tab (No multiple clutter tabs) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1.8rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-modern)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                padding: "0.5rem 1.4rem",
                borderRadius: "30px",
                border: "1px solid var(--color-gold)",
                background: "linear-gradient(135deg, rgba(13, 68, 51, 0.08) 0%, rgba(197, 160, 89, 0.15) 100%)",
                color: "var(--color-emerald)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 2px 10px rgba(13, 68, 51, 0.05)",
              }}
            >
              <Heart size={14} color="var(--color-gold)" fill="var(--color-gold)" />
              <span>{activeTab} ({gallery.length})</span>
            </div>
          </div>
        </div>

        {/* Responsive Mobile-First Gallery Grid */}
        <div className="gallery-masonry-grid">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="gallery-card"
              onClick={() => handleOpenLightbox(index)}
              style={{
                borderRadius: "22px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "var(--shadow-md)",
                border: "1px solid rgba(197, 160, 89, 0.25)",
                background: "#FFFDF9",
                position: "relative",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: item.aspect === "square" ? "1/1" : "3/4" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: item.objectPosition || "center 12%",
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                {/* Hover overlay with title & icon */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(13, 68, 51, 0.88) 0%, rgba(13, 68, 51, 0.2) 60%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.2rem",
                    transition: "opacity 0.35s ease",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-modern)",
                          fontSize: "0.72rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--color-champagne)",
                        }}
                      >
                        {item.category}
                      </span>
                      <h4
                        style={{
                          fontFamily: "var(--font-serif-display)",
                          fontSize: "1.15rem",
                          color: "#FFF",
                          marginTop: "0.2rem",
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.25)",
                        backdropFilter: "blur(6px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFF",
                      }}
                    >
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={gallery}
          activeIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <style>{`
        .gallery-masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .gallery-overlay {
          opacity: 0;
        }

        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }

        /* On mobile touch devices, overlay has subtle visibility so title is clear */
        @media (max-width: 768px) {
          .gallery-masonry-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.1rem;
          }
          .gallery-overlay {
            opacity: 1 !important;
            background: linear-gradient(to top, rgba(13, 68, 51, 0.85) 0%, transparent 60%) !important;
          }
        }
      `}</style>
    </section>
  );
}
