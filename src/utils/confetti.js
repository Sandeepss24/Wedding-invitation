import confetti from "canvas-confetti";

export const fireGiftBoxConfetti = () => {
  // Burgundy, cream, and golden sparkles confetti
  const colors = ["#701F2B", "#912E3B", "#F8F0E3", "#D4AF37", "#FFFFFF", "#ECC880"];

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
  const colors = ["#701F2B", "#912E3B", "#F8F0E3", "#D4AF37", "#ECC880", "#FFFFFF"];

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
