import confetti from "canvas-confetti";

export const fireGiftBoxConfetti = () => {
  // Golden sparkles, champagne flakes, and warm blush confetti
  const colors = ["#D4AF37", "#F7E7CE", "#E8A598", "#8B263E", "#FFFFFF", "#F3C68F"];

  // Center upward explosion
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    colors,
    ticks: 250,
    gravity: 0.7,
    scalar: 1.2,
    shapes: ["circle", "square"],
  });

  // Second delayed burst of delicate sparkles
  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 70,
      origin: { x: 0.35, y: 0.55 },
      colors,
      ticks: 220,
      gravity: 0.8,
      scalar: 0.9,
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 70,
      origin: { x: 0.65, y: 0.55 },
      colors,
      ticks: 220,
      gravity: 0.8,
      scalar: 0.9,
    });
  }, 250);
};

export const fireRSVPConfetti = () => {
  const colors = ["#8B263E", "#D4AF37", "#F7E7CE", "#E8A598", "#C5A059"];

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.7 },
    colors,
  });

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });
  }, 200);
};
