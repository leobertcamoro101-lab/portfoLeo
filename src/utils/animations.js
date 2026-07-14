// ── Reusable animation variants ───────────────────────────────────────────────

// Fade up — for hero text, headings
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

// Fade in — for simple elements
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

// Pop in — for cards, badges
export const popIn = {
  hidden:  { opacity: 0, scale: 0.92, y: 16 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } // spring
  },
};

// Slide in from left — for profile hero
export const slideLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

// Slide in from right — for avatar
export const slideRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

// Container — staggers children
export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  },
};

// Page transition
export const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0, y: -16,
    transition: { duration: 0.3, ease: "easeIn" }
  },
};