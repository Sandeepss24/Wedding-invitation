import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Navigation, Shirt } from "lucide-react";

export default function EventsSection({ weddingData }) {
  const { events } = weddingData;

  return (
    <section
      id="events"
      style={{
        padding: "6rem 1.5rem",
        position: "relative",
      }}
    >
      <div className="container-custom">
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill" style={{ marginBottom: "0.8rem" }}>
              Celebration Itinerary
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif-display)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                color: "var(--color-charcoal)",
                marginTop: "0.5rem",
                marginBottom: "0.8rem",
              }}
            >
              The Wedding Functions
            </h2>
            <div className="ornament-line">
              <Sparkles size={16} color="var(--color-gold)" />
            </div>
            <p
              style={{
                fontFamily: "var(--font-serif-classic)",
                fontStyle: "italic",
                fontSize: "1.2rem",
                color: "var(--color-muted)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              We look forward to celebrating three blessed days of joy, gratitude, and sacred union.
            </p>
          </motion.div>
        </div>

        {/* Event Cards Grid */}
        <div
          className="events-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "2rem",
          }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="paper-card event-card"
              style={{
                borderRadius: "26px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "#FFFDFB",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg), 0 0 25px rgba(197, 160, 89, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
            >
              {/* Event Image */}
              <div
                style={{
                  position: "relative",
                  height: "270px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={event.image}
                  alt={event.name}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: event.objectPosition || "center 12%",
                    transition: "transform 0.7s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    background: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(6px)",
                    color: "var(--color-burgundy)",
                    fontFamily: "var(--font-modern)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.85rem",
                    borderRadius: "20px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  {event.badge}
                </span>
              </div>

              {/* Event Details Content */}
              <div
                style={{
                  padding: "1.8rem 1.6rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {event.arabicName && (
                    <div
                      style={{
                        fontFamily: "var(--font-arabic)",
                        fontSize: "1.25rem",
                        color: "var(--color-gold)",
                        direction: "rtl",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {event.arabicName}
                    </div>
                  )}

                  <h3
                    style={{
                      fontFamily: "var(--font-serif-display)",
                      fontSize: "1.55rem",
                      color: "var(--color-charcoal)",
                      marginBottom: "0.8rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {event.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.6,
                      marginBottom: "1.4rem",
                    }}
                  >
                    {event.description}
                  </p>

                  {/* Metadata List */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.65rem",
                      marginBottom: "1.6rem",
                      borderTop: "1px dashed rgba(197, 160, 89, 0.3)",
                      paddingTop: "1.2rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <Calendar size={15} color="var(--color-burgundy)" />
                      <span style={{ fontFamily: "var(--font-modern)", fontSize: "0.88rem", fontWeight: 500, color: "var(--color-charcoal)" }}>
                        {event.date}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <Clock size={15} color="var(--color-burgundy)" />
                      <span style={{ fontFamily: "var(--font-modern)", fontSize: "0.88rem", color: "var(--color-muted)" }}>
                        {event.time}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <MapPin size={15} color="var(--color-burgundy)" style={{ marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-modern)", fontSize: "0.88rem", color: "var(--color-charcoal)" }}>
                        <strong>{event.venueName}</strong>, {event.address}
                      </span>
                    </div>

                    {event.dressCode && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          marginTop: "0.3rem",
                          background: "rgba(247, 221, 212, 0.35)",
                          padding: "0.55rem 0.8rem",
                          borderRadius: "10px",
                        }}
                      >
                        <Shirt size={15} color="var(--color-burgundy)" style={{ marginTop: "2px", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-modern)", fontSize: "0.82rem", color: "var(--color-burgundy)" }}>
                          <strong>Dress Code:</strong> {event.dressCode}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Get Directions CTA */}
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "0.75rem",
                    fontSize: "0.85rem",
                  }}
                >
                  <Navigation size={15} />
                  <span>Get Directions</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
