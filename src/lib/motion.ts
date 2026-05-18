import type { Transition } from "framer-motion";

export const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const smoothTransition: Transition = {
  duration: 0.55,
  ease: smoothEase,
};

// Use `initial: false` to avoid framer-motion rendering inline "hidden" styles
// during server-side render which can leave content invisible if hydration
// doesn't run immediately. The `whileInView` prop will still animate on the
// client when the element enters the viewport.
export const fadeUp = {
  initial: false,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: smoothTransition,
};
