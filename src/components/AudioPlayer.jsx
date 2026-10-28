import React, { useState } from "react";
import { Volume2, VolumeX, Music, Disc } from "lucide-react";
import { audioService } from "../utils/audioService";

export default function AudioPlayer({ weddingData, soundEnabled, setSoundEnabled }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    audioService.toggleAmbientMusic(nextState);
  };

  return (
    <aside
      aria-label="Audio controls"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 90,
      }}
    >
      <div
        className="glass-panel"
        style={{
          borderRadius: "40px",
          padding: isExpanded ? "0.6rem 1.2rem 0.6rem 0.6rem" : "0.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          boxShadow: "0 8px 25px rgba(109, 27, 46, 0.12)",
          border: "1px solid rgba(197, 160, 89, 0.35)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Toggle Play / Pause Button */}
        <button
          type="button"
          onClick={handleToggle}
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: soundEnabled
              ? "linear-gradient(135deg, var(--color-burgundy-light) 0%, var(--color-burgundy) 100%)"
              : "rgba(255, 255, 255, 0.9)",
            color: soundEnabled ? "#FFF" : "var(--color-burgundy)",
            border: "1px solid rgba(197, 160, 89, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: soundEnabled ? "0 4px 12px rgba(109, 27, 46, 0.3)" : "none",
            transition: "all 0.3s ease",
          }}
          aria-label={soundEnabled ? "Mute romantic music" : "Play romantic music"}
          title={soundEnabled ? "Mute romantic music" : "Play romantic music"}
        >
          {soundEnabled ? (
            <Disc size={20} className="music-disc-spin" />
          ) : (
            <VolumeX size={18} />
          )}
        </button>

        {/* Track Info (revealed on hover or expanded) */}
        {isExpanded && (
          <div style={{ display: "flex", flexDirection: "column", minWidth: "160px" }}>
            <div
              style={{
                fontFamily: "var(--font-modern)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--color-burgundy)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "200px",
              }}
            >
              {weddingData.music.title}
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.68rem",
                color: "var(--color-muted)",
              }}
            >
              {soundEnabled ? "Playing romantic ambient harp" : "Sound muted"}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .music-disc-spin {
          animation: spinSlow 5s linear infinite;
        }
      `}</style>
    </aside>
  );
}
