export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  studyInJapan: "/study-in-japan",
  japaneseLanguage: "/japanese-language",
  contact: "/contact",
  faq: "/faq",
  testimonials: "/testimonials",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
} as const;

export type RouteKey = keyof typeof routes;

/** Primary navigation — includes FAQ so every stitch destination is one click away. */
export const mainNav = [
  { href: routes.home, label: "Home" },
  { href: routes.about, label: "About" },
  { href: routes.services, label: "Services" },
  { href: routes.studyInJapan, label: "Study in Japan" },
  { href: routes.japaneseLanguage, label: "Japanese Language" },
  { href: routes.faq, label: "FAQ" },
  { href: routes.contact, label: "Contact" },
] as const;
