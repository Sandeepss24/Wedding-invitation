import React, { useMemo } from "react";

/**
 * Romantic Rose Petals Dropping Ambient Animation
 * Luxury Burgundy & Velvet Rose Petals falling smoothly with 3D fluttering.
 * 100% GPU-accelerated, zero CPU load, non-intrusive pointer-events: none.
 */
export default function RosePetals({ count = 20 }) {
  // Deterministic petal configs with staggered negative delays so petals are already mid-flight on first render
  const petals = useMemo(() => {
    const items = [];
    const positions = [
      4, 9, 14, 21, 27, 33, 40, 47, 53, 59, 65, 71, 78, 84, 89, 95, 17, 38, 62, 82, 11, 74
    ];

    for (let i = 0; i < count; i++) {
      const left = positions[i % positions.length] + ((i * 7) % 5) - 2;
      const size = 18 + ((i * 5) % 14); // 18px to 32px
      const duration = 9 + ((i * 3) % 7); // 9s to 15s
      const delay = -1 * ((i * 2.8) % 12); // Negative delays so petals are immediately falling on load
      const swayDuration = 3 + ((i * 1.5) % 3); // 3s to 5.5s
      const swayDistance = 25 + ((i * 8) % 35); // 25px to 60px
      const swayDir = i % 2 === 0 ? "A" : "B";
      const rotateDuration = 6 + ((i * 2.5) % 6); // 6s to 11s
      const shape = i % 3;
      const opacity = 0.72 + ((i * 3) % 25) / 100; // 0.72 to 0.95
      const blur = i % 4 === 0 ? "0.8px" : undefined; // Depth of field for background petals

      items.push({
        id: i,
        left,
        size,
        duration,
        delay,
        swayDuration,
        swayDistance,
        swayDir,
        rotateDuration,
        shape,
        opacity,
        blur,
      });
    }
    return items;
  }, [count]);

  return (
    <div
      className="rose-petals-container"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 3,
        perspective: "800px",
      }}
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal-wrapper"
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: "-45px",
            width: `${p.size}px`,
            height: `${p.size * 1.15}px`,
            opacity: p.opacity,
            filter: p.blur ? `blur(${p.blur})` : undefined,
            willChange: "transform, top",
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite, petalSway${p.swayDir} ${p.swayDuration}s ease-in-out infinite alternate`,
          }}
        >
          <div
            className="petal-tumble"
            style={{
              width: "100%",
              height: "100%",
              animation: `petalTumble ${p.rotateDuration}s ease-in-out ${p.delay}s infinite`,
              transformStyle: "preserve-3d",
            }}
          >
            {p.shape === 0 && (
              <svg viewBox="0 0 32 36" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id={`grad-0-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#962A3B" />
                    <stop offset="50%" stopColor="#701F2B" />
                    <stop offset="100%" stopColor="#451119" />
                  </linearGradient>
                </defs>
                <path
                  d="M16 2 C24 3 30 10 29 22 C28 30 20 34 16 35 C12 34 4 30 3 22 C2 10 8 3 16 2 Z"
                  fill={`url(#grad-0-${p.id})`}
                />
                <path
                  d="M16 5 C17 14 16 25 16 33"
                  stroke="rgba(255, 230, 235, 0.22)"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                />
              </svg>
            )}

            {p.shape === 1 && (
              <svg viewBox="0 0 32 36" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id={`grad-1-${p.id}`} x1="10%" y1="0%" x2="90%" y2="100%">
                    <stop offset="0%" stopColor="#A43346" />
                    <stop offset="55%" stopColor="#78212E" />
                    <stop offset="100%" stopColor="#4A121A" />
                  </linearGradient>
                </defs>
                <path
                  d="M14 2 C23 1 31 8 30 20 C29 29 21 34 15 35 C8 34 2 28 2 19 C2 9 6 3 14 2 Z"
                  fill={`url(#grad-1-${p.id})`}
                />
                <path
                  d="M14 5 C16 15 15 26 15 33"
                  stroke="rgba(255, 215, 220, 0.2)"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                />
              </svg>
            )}

            {p.shape === 2 && (
              <svg viewBox="0 0 32 36" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id={`grad-2-${p.id}`} x1="0%" y1="10%" x2="100%" y2="90%">
                    <stop offset="0%" stopColor="#8A2434" />
                    <stop offset="65%" stopColor="#661A26" />
                    <stop offset="100%" stopColor="#3E0E15" />
                  </linearGradient>
                </defs>
                <path
                  d="M17 2 C26 4 31 12 29 23 C27 31 19 35 15 35 C10 35 3 29 3 20 C3 11 9 3 17 2 Z"
                  fill={`url(#grad-2-${p.id})`}
                />
                <path
                  d="M17 6 C17 15 15 25 15 32"
                  stroke="rgba(245, 220, 225, 0.25)"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes petalFall {
          0% {
            top: -50px;
            opacity: 0;
          }
          10% {
            opacity: 0.95;
          }
          88% {
            opacity: 0.9;
          }
          100% {
            top: 106%;
            opacity: 0;
          }
        }

        @keyframes petalSwayA {
          0% {
            transform: translateX(-28px);
          }
          100% {
            transform: translateX(36px);
          }
        }

        @keyframes petalSwayB {
          0% {
            transform: translateX(32px);
          }
          100% {
            transform: translateX(-30px);
          }
        }

        @keyframes petalTumble {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          33% {
            transform: rotateX(120deg) rotateY(60deg) rotateZ(85deg);
          }
          66% {
            transform: rotateX(240deg) rotateY(150deg) rotateZ(210deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(210deg) rotateZ(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rose-petals-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

