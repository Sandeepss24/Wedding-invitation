import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, MapPin, Calendar } from "lucide-react";

export default function OurStorySection({ weddingData }) {
  const { storyMilestones, couple } = weddingData;

  return (
    <section
      id="story"
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
              Our Journey
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
              How Forever Began
            </h2>
            <div className="ornament-line">
              <Heart size={16} color="var(--color-burgundy)" fill="var(--color-burgundy)" opacity={0.6} />
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
              "Every love story is beautiful, but ours is our absolute favorite."
            </p>
          </motion.div>
        </div>

        {/* Editorial Story Timeline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5rem",
            position: "relative",
          }}
        >
          {storyMilestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="story-grid-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                  gap: "2.5rem",
                  alignItems: "center",
                }}
              >
                {/* Photo Side */}
                <div
                  className={`story-photo-col ${isEven ? "order-1" : "order-2"}`}
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "26px",
                      overflow: "hidden",
                      boxShadow: "var(--shadow-lg)",
                      border: "1px solid rgba(197, 160, 89, 0.3)",
                      background: "#FFFDF9",
                      padding: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "clamp(340px, 46vw, 420px)",
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: milestone.objectPosition || "center 12%",
                          transition: "transform 0.8s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "14px",
                          left: "14px",
                          background: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(6px)",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "20px",
                          fontFamily: "var(--font-modern)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          color: "var(--color-burgundy)",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        }}
                      >
                        {milestone.tag}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div
                  className={`story-text-col ${isEven ? "order-2" : "order-1"}`}
                  style={{
                    padding: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.8rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-serif-classic)",
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "var(--color-gold)",
                      }}
                    >
                      {milestone.year}
                    </span>
                    <span
                      style={{
                        height: "1px",
                        width: "30px",
                        backgroundColor: "var(--color-gold)",
                        opacity: 0.5,
                      }}
                    />
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontFamily: "var(--font-modern)",
                        fontSize: "0.82rem",
                        color: "var(--color-muted)",
                      }}
                    >
                      <Calendar size={13} />
                      {milestone.date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif-display)",
                      fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                      color: "var(--color-charcoal)",
                      marginBottom: "0.8rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {milestone.title}
                  </h3>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--color-burgundy)",
                      fontFamily: "var(--font-modern)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      marginBottom: "1.2rem",
                    }}
                  >
                    <MapPin size={14} />
                    <span>{milestone.location}</span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.05rem",
                      color: "#4A4642",
                      lineHeight: 1.75,
                    }}
                  >
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Romantic Pullquote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="paper-card"
          style={{
            marginTop: "6rem",
            padding: "3.5rem 2.5rem",
            borderRadius: "28px",
            textAlign: "center",
            maxWidth: "780px",
            margin: "6rem auto 0",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-arabic)",
              fontSize: "clamp(1.4rem, 2.8vw, 1.9rem)",
              color: "var(--color-emerald)",
              direction: "rtl",
              marginBottom: "1.2rem",
              lineHeight: 1.6,
            }}
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </div>
          <blockquote
            style={{
              fontFamily: "var(--font-serif-classic)",
              fontStyle: "italic",
              fontSize: "clamp(1.2rem, 2.6vw, 1.6rem)",
              color: "var(--color-charcoal)",
              lineHeight: 1.6,
              marginBottom: "1.2rem",
            }}
          >
            "{couple.quote}"
          </blockquote>
          <cite
            style={{
              fontFamily: "var(--font-modern)",
              fontSize: "0.88rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-burgundy)",
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            — {couple.quoteAuthor}
          </cite>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-photo-col {
            order: 1 !important;
          }
          .story-text-col {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
