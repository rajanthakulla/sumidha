"use client";

import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { routes } from "@/lib/site";

export default function ContactPage() {
  return (
    <main className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col">
      <section className="relative bg-surface-container-low py-section-padding-mobile md:py-section-padding px-gutter flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(171, 53, 0, 0.4) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-max-container mx-auto w-full relative z-10 flex flex-col items-center gap-stack-md">
          <nav className="font-label-sm text-label-sm text-secondary flex items-center gap-2 mb-4">
            <Link className="hover:text-primary transition-colors" href={routes.home}>
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-primary">Contact Us</span>
          </nav>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Contact Us</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">
            We are here to guide you on your journey to study in Japan. Reach out with any questions, and our academic advisors will be in touch shortly.
          </p>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding px-gutter w-full">
        <div className="max-w-max-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Send us a Message</h2>
            <Suspense fallback={<p className="text-secondary text-sm">Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="lg:col-span-5 bg-surface-container rounded-xl p-8 flex flex-col gap-stack-lg sticky top-28"
          >
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Contact Information</h3>
              <p className="font-body-md text-body-md text-secondary">Our team is available to assist you Monday through Friday, 9:00 AM to 6:00 PM.</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary fill">location_on</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface mb-1">Our Office</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    New Baneshwor Chowk
                    <br />
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary fill">call</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface mb-1">Phone</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">+977 1-2345678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary fill">mail</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface mb-1">Email</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">info@sumida.edu.np</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">chat</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface mb-1">Skype</h4>
                  <a className="font-body-md text-body-md text-primary-container hover:text-primary transition-colors" href="skype:sumida.consultancy?chat">
                    sumida.consultancy
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-6 border-t border-secondary-fixed-dim">
              <h4 className="font-label-sm text-label-sm text-on-surface-variant mb-4 uppercase tracking-wider">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  aria-label="Website"
                  className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-[0_2px_16px_rgba(0,0,0,0.07)] flex items-center justify-center text-secondary hover:text-primary transition-all"
                  href="https://sumida.edu.np"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">language</span>
                </a>
                <a
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-[0_2px_16px_rgba(0,0,0,0.07)] flex items-center justify-center text-secondary hover:text-primary transition-all"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">share</span>
                </a>
                <Link
                  aria-label="FAQ"
                  className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-[0_2px_16px_rgba(0,0,0,0.07)] flex items-center justify-center text-secondary hover:text-primary transition-all"
                  href={routes.faq}
                >
                  <span className="material-symbols-outlined">forum</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full h-[400px] md:h-[500px] bg-surface-container-high relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-secondary-fixed-dim bg-surface-container">
          <Image
            alt="Map view"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABRdkQE_-Yk6D5o1K76toiEltVakf3LGFHAvupRG_sQmw7AYWam3UaOWZc6C9_V1T1AZhCUXO3F1qEO3-MC8HUQHOy6es7dch6ReyAsnbg4yEXDwmq65rEgF6TbgqN0SvBtL49bYrXnQPRXaaYRgMHMiEodEF2W4jf49YNV6pBOOwkYtkWS128N5-LQyN4tn21wtmOtiFs3h4x-gjAWiS2BXtvMekoIaF6E1LtPRWIXczIgh38N9LOzQtFuA-LOq9t22hXi9pE8s9D"
            fill
            className="object-cover opacity-50 grayscale"
            sizes="100vw"
          />
          <div className="absolute w-12 h-12 bg-primary-container rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <span className="material-symbols-outlined text-white fill">location_on</span>
          </div>
        </div>
      </section>
    </main>
  );
}
