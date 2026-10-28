import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Heart, Sparkles, ExternalLink } from "lucide-react";

export default function CountdownSection({ weddingData }) {
  const { schedule, venue, couple } = weddingData;
  const targetDate = new Date(schedule.countdownTarget).getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isCelebration, setIsCelebration] = useState(false);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isOver: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (updated.isOver) {
        setIsCelebration(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [schedule.countdownTarget]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      style={{
        padding: "6rem 1.5rem",
        position: "relative",
        background: "linear-gradient(180deg, rgba(253, 251, 247, 0) 0%, rgba(247, 221, 212, 0.25) 50%, rgba(253, 251, 247, 0) 100%)",
      }}
    >
      <div className="container-custom" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="tag-pill" style={{ marginBottom: "0.8rem" }}>
            The Countdown
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              color: "var(--color-charcoal)",
              marginBottom: "0.8rem",
            }}
          >
            Counting Down To Our Forever
          </h2>
          <div className="ornament-line">
            <Sparkles size={16} color="var(--color-gold)" />
          </div>
          <p
            style={{
              fontFamily: "var(--font-serif-classic)",
              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              fontStyle: "italic",
              color: "var(--color-muted)",
              marginBottom: "2.8rem",
              padding: "0 0.5rem",
            }}
          >
            Celebrations commence {schedule.mainMarriageDate} • {venue.name}
          </p>
        </motion.div>

        {/* Live Countdown Cards or Celebration State */}
        {isCelebration ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="paper-card"
            style={{
              padding: "3rem 1.5rem",
              borderRadius: "28px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <Sparkles size={36} color="var(--color-gold)" style={{ margin: "0 auto 1rem" }} />
            <h3 style={{ fontFamily: "var(--font-serif-display)", fontSize: "2rem", color: "var(--color-burgundy)", marginBottom: "0.5rem" }}>
              Today Is The Day!
            </h3>
            <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-charcoal)", fontSize: "1.1rem" }}>
              {couple.namesCombined} are tying the knot! Alhamdulillah!
            </p>
          </motion.div>
        ) : (
          <div className="countdown-cards-container">
            {units.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="paper-card countdown-unit-card"
                style={{
                  minWidth: "125px",
                  padding: "1.5rem 1.1rem",
                  borderRadius: "22px",
                  background: "#FFFDFB",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 10px 25px rgba(112, 31, 43, 0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif-display)",
                    fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                    fontWeight: 600,
                    color: "var(--color-burgundy)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-modern)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-muted)",
                  }}
                >
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <style>{`
          .countdown-cards-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: clamp(1rem, 2.5vw, 2.5rem);
            margin-bottom: 3.5rem;
          }
          @media (max-width: 540px) {
            .countdown-cards-container {
              display: grid !important;
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 0.85rem !important;
              max-width: 320px;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 2.5rem !important;
            }
            .countdown-unit-card {
              min-width: 0 !important;
              padding: 1.2rem 0.6rem !important;
            }
          }
        `}</style>

        {/* Action Button: Add to Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href={venue.googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              boxShadow: "0 4px 14px rgba(112, 31, 43, 0.06)",
            }}
          >
            <Calendar size={16} />
            <span>Add To Google Calendar</span>
            <ExternalLink size={14} opacity={0.6} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
