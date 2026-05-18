"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { routes } from "@/lib/site";
import { fadeUp } from "@/lib/motion";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
      <span className="font-body-md text-body-md text-on-surface-variant">{children}</span>
    </li>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-background text-on-background antialiased font-body-md">
      <section className="relative w-full bg-surface-container-low py-section-padding-mobile md:py-section-padding border-b border-surface-dim">
        <motion.div {...fadeUp} className="max-w-max-container mx-auto px-gutter text-center">
          <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full mb-stack-lg shadow-sm">
            Comprehensive Japan Study Support
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-stack-md">Our Services</h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            We provide end-to-end guidance to ensure your journey to studying in Japan is seamless, structured, and successful.
          </p>
        </motion.div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding bg-background">
        <div className="max-w-max-container mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg mb-stack-lg">
            <motion.div
              {...fadeUp}
              className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300 border border-surface-dim"
            >
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-stack-lg">
                <span className="material-symbols-outlined text-3xl text-primary">forum</span>
              </div>
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-on-background mb-stack-sm">Personalized Consultation</h3>
              <p className="font-body-md text-body-md text-secondary mb-stack-lg">
                One-on-one sessions to understand your academic goals, career aspirations, and personal preferences to find the perfect institution in Japan.
              </p>
              <div className="bg-surface-container-low rounded-lg p-6">
                <h4 className="font-label-md text-label-md text-on-surface mb-stack-sm uppercase tracking-wider text-xs">What&apos;s Included</h4>
                <ul className="space-y-3">
                  <CheckItem>Academic background assessment</CheckItem>
                  <CheckItem>University & language school matching</CheckItem>
                  <CheckItem>Customized timeline creation</CheckItem>
                </ul>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300 border border-surface-dim"
            >
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-stack-lg">
                <span className="material-symbols-outlined text-3xl text-primary">edit_document</span>
              </div>
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-on-background mb-stack-sm">Application Assistance</h3>
              <p className="font-body-md text-body-md text-secondary mb-stack-lg">
                Meticulous support in preparing, reviewing, and submitting your application documents to ensure they meet stringent Japanese standards.
              </p>
              <div className="bg-surface-container-low rounded-lg p-6">
                <h4 className="font-label-md text-label-md text-on-surface mb-stack-sm uppercase tracking-wider text-xs">What&apos;s Included</h4>
                <ul className="space-y-3">
                  <CheckItem>Document translation & formatting</CheckItem>
                  <CheckItem>Statement of Purpose writing guidance</CheckItem>
                  <CheckItem>Direct liaison with institutions</CheckItem>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            {[
              {
                icon: "flight_takeoff",
                title: "Visa Support",
                body: "Expert navigation of the complex Certificate of Eligibility (COE) and student visa application processes.",
                items: ["COE application preparation", "Financial documentation review", "Embassy interview prep"],
              },
              {
                icon: "map",
                title: "Pre-departure Orientation",
                body: "Comprehensive briefings to prepare you for daily life, culture, and administrative tasks upon arriving in Japan.",
                items: ["Cultural etiquette training", "Accommodation securing", "Packing & travel checklists"],
              },
              {
                icon: "support_agent",
                title: "Ongoing Support",
                body: "Our commitment does not end when you board the plane. We offer continued assistance as you settle into your new life.",
                items: ["City office registration help", "Bank account setup guidance", "Part-time job search advice"],
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300 border border-surface-dim flex flex-col"
              >
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-stack-lg">
                  <span className="material-symbols-outlined text-3xl text-primary">{card.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-stack-sm">{card.title}</h3>
                <p className="font-body-md text-body-md text-secondary mb-stack-lg flex-grow">{card.body}</p>
                <div className="bg-surface-container-low rounded-lg p-6 mt-auto">
                  <h4 className="font-label-md text-label-md text-on-surface mb-stack-sm uppercase tracking-wider text-xs">What&apos;s Included</h4>
                  <ul className="space-y-3">
                    {card.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                        <span className="font-body-md text-body-md text-on-surface-variant text-sm">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-stack-lg flex flex-wrap justify-center gap-4">
            <Link
              href={`${routes.contact}?intent=consultation`}
              className="bg-primary-container text-on-primary font-label-md text-label-md py-3 px-8 rounded-lg hover:bg-primary transition-colors shadow-md"
            >
              Book a Consultation
            </Link>
            <Link href={routes.studyInJapan} className="border-[1.5px] border-on-background font-label-md text-label-md py-3 px-8 rounded-lg hover:bg-surface-container transition-colors">
              Study in Japan Overview
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
