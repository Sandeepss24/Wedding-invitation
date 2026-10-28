import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function LightboxModal({ images, activeIndex, onClose, onPrev, onNext }) {
  const currentImage = images[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onPrev, onNext]);

  if (!currentImage) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        backgroundColor: "rgba(30, 20, 24, 0.94)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeIn 0.3s ease",
      }}
      onClick={onClose}
    >
      {/* Top Bar with counter & close */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "2rem",
          right: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#FFF",
          zIndex: 20,
        }}
      >
        <div style={{ fontFamily: "var(--font-modern)", fontSize: "0.9rem", letterSpacing: "0.1em", opacity: 0.8 }}>
          {activeIndex + 1} / {images.length}
        </div>

        <button
          type="button"
          onClick={onClose}
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#FFF",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          aria-label="Close image lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 15,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.image}
          alt={currentImage.title}
          style={{
            maxWidth: "100%",
            maxHeight: "75vh",
            objectFit: "contain",
            borderRadius: "16px",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(197, 160, 89, 0.2)",
            border: "1px solid rgba(197, 160, 89, 0.3)",
          }}
        />

        {/* Caption */}
        <div
          style={{
            marginTop: "1.2rem",
            textAlign: "center",
            color: "#FFF",
            maxWidth: "600px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif-display)",
              fontSize: "1.35rem",
              fontWeight: 500,
              color: "var(--color-champagne)",
              marginBottom: "0.3rem",
            }}
          >
            {currentImage.title}
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.92rem",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            {currentImage.caption}
          </div>
        </div>
      </div>

      {/* Prev / Next Nav Buttons */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        style={{
          position: "absolute",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "#FFF",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
          zIndex: 25,
        }}
        aria-label="Previous photograph"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "#FFF",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
          zIndex: 25,
        }}
        aria-label="Next photograph"
      >
        <ChevronRight size={24} />
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 600px) {
          button[aria-label="Previous photograph"] {
            left: 0.5rem !important;
          }
          button[aria-label="Next photograph"] {
            right: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
