"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { routes } from "@/lib/site";
import { fadeUp } from "@/lib/motion";

const stories = [
  {
    quote:
      "The team at Sumida made the complex COE application feel completely manageable. Their attention to detail meant my visa was approved without a single issue.",
    name: "Rohan Shrestha",
    school: "Tokyo International University",
    initial: "R",
  },
  {
    quote:
      "I almost gave up on studying in Japan due to the language barrier in the paperwork. Sumida translation and application support were absolute lifesavers.",
    name: "Smriti Thapa",
    school: "Osaka Language Academy",
    initial: "S",
  },
  {
    quote:
      "Finding a consultancy that solely focuses on Japan made all the difference. Their deep connections with universities helped me secure a great scholarship.",
    name: "Aayush Gurung",
    school: "Kyoto University",
    initial: "A",
  },
  {
    quote:
      "From shortlisting schools to mock interviews, the process felt structured and calm. I always knew what the next step was.",
    name: "Nisha Karki",
    school: "Waseda University",
    initial: "N",
  },
  {
    quote:
      "The language class pacing matched my JLPT goal perfectly. I moved from N4 to N2 with clear milestones each month.",
    name: "Pratik Joshi",
    school: "Kyoto Language School",
    initial: "P",
  },
  {
    quote:
      "Even after landing in Japan, Sumida checked in and helped me navigate city hall registration confidently.",
    name: "Anisha Rai",
    school: "Nagoya University",
    initial: "A",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-surface-container-low py-section-padding-mobile md:py-section-padding">
      <div className="px-gutter max-w-max-container mx-auto">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-stack-lg md:mb-16">
          <h1 className="font-headline-md text-headline-md text-on-surface mb-4">Student Success Stories</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Hear from our students who have successfully navigated their admissions and are now thriving in Japan.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((t) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-md border border-surface-container flex flex-col"
            >
              <span className="material-symbols-outlined fill text-primary-fixed-dim text-4xl mb-4">format_quote</span>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4 pt-6 border-t border-surface-container-highest">
                <div className="w-12 h-12 bg-surface-variant rounded-full flex items-center justify-center font-headline-sm text-primary">
                  {t.initial}
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">{t.name}</p>
                  <p className="font-label-sm text-label-sm text-secondary">{t.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={`${routes.contact}?intent=consultation`}
            className="inline-flex bg-primary-container text-on-primary font-label-md text-label-md py-3 px-8 rounded-lg hover:bg-primary transition-colors shadow-md"
          >
            Talk to a counselor
          </Link>
        </div>
      </div>
    </main>
  );
}
