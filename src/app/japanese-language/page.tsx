"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LanguageEnrollmentForm } from "@/components/LanguageEnrollmentForm";
import { routes } from "@/lib/site";
import { fadeUp, smoothEase } from "@/lib/motion";

export default function JapaneseLanguagePage() {
  return (
    <main className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <section className="relative w-full py-section-padding-mobile md:py-section-padding px-gutter flex items-center justify-center overflow-hidden min-h-[614px]">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Classroom background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzmq_6aEivArbUBzDvKo0UkMt4xU47UrVY8FF6kqGX7bO98UrpOL_lFmDGH-GmDEisDRo2H1utgyP9v3QVRR68JAANa5JGh0jsBDqwhd6A1TtVpsHZasOyWt4J4FkiAWJ5XLZJEeu7GYS42ng7UwW90ssORGn9DlBzzgR8gkdU9hzJ3Mj2iq4FlhPS99mMVgFvhZK0DFltcbJnnK58IJuha1fUpOtRCHY-oBhd6RvQVOP25Pw9V4_n0c-EhGdSUOKmuH__nO8CbQIr"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-background" />
        </div>
        <motion.div {...fadeUp} className="relative z-10 max-w-3xl mx-auto text-center flex flex-col gap-stack-lg items-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-label-sm text-label-sm shadow-sm">
            Admissions Open for Next Intake
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background">
            Japanese Language Classes
          </h1>
          <p className="font-body-lg text-body-lg text-secondary">N5 to N2 in Kathmandu</p>
          <div className="flex gap-stack-sm flex-wrap justify-center">
            <Link
              href="#register"
              className="bg-primary-container text-white font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-on-primary-fixed-variant hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              Enroll Now
            </Link>
            <Link
              href="#schedule"
              className="bg-transparent border-2 border-on-secondary-fixed text-on-secondary-fixed font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-surface-container transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding px-gutter max-w-max-container mx-auto">
        <div className="text-center mb-section-padding-mobile md:mb-section-padding flex flex-col gap-stack-sm">
          <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-background">Our Course Levels</h2>
          <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
            Comprehensive language training tailored for academic and professional success in Japan, structured according to the JLPT standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-lg">
          {[
            { level: "N5", badge: "Beginner", badgeClass: "bg-[#E8F5E9] text-[#2E7D32]", body: "Master basic Japanese. Learn Hiragana, Katakana, and essential Kanji. Focus on everyday conversations and fundamental grammar rules to start your journey." },
            { level: "N4", badge: "Pre-Intermediate", badgeClass: "bg-[#FFF8E1] text-[#FF8F00]", body: "Expand your vocabulary and grasp more complex grammar structures. Ideal for navigating daily life situations and understanding simple written materials." },
            { level: "N3", badge: "Intermediate", badgeClass: "bg-[#FFF8E1] text-[#FF8F00]", body: "Bridge the gap between basic and advanced. Focus on reading comprehension, listening to natural speed conversations, and expressing nuanced opinions." },
            { level: "N2", badge: "Advanced", badgeClass: "bg-[#FFEBEE] text-[#C62828]", body: "Achieve fluency for academic and professional environments. Comprehend complex articles, abstract concepts, and fast-paced spoken Japanese confidently." },
          ].map((c, i) => (
            <motion.div
              key={c.level}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: smoothEase }}
              className="bg-surface-container-lowest rounded-[16px] shadow-card hover:shadow-card-hover transition-all duration-300 p-8 flex flex-col gap-stack-md border border-surface-container"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-headline-sm text-headline-sm text-on-background">{c.level}</h3>
                <span className={`inline-block px-3 py-1 rounded-full font-label-sm text-label-sm ${c.badgeClass}`}>{c.badge}</span>
              </div>
              <p className="font-body-md text-body-md text-secondary flex-grow">{c.body}</p>
              <Link
                href="#register"
                className="w-full text-center bg-primary-container text-white font-label-md text-label-md py-2 px-4 rounded-lg hover:bg-on-primary-fixed-variant hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mt-auto"
              >
                Enroll in {c.level}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="schedule" className="bg-surface-container-low py-section-padding-mobile md:py-section-padding px-gutter scroll-mt-28">
        <motion.div {...fadeUp} className="max-w-max-container mx-auto">
          <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-background text-center mb-stack-lg">
            Class Schedule (Sample)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
            {[
              { day: "Sun / Tue / Thu", time: "Morning (8:00 – 10:00)", note: "N5 & N4 cohorts" },
              { day: "Mon / Wed / Fri", time: "Day (12:00 – 2:00)", note: "N3 cohort" },
              { day: "Sat", time: "Intensive (10:00 – 2:00)", note: "N2 prep + mock exams" },
            ].map((s) => (
              <div key={s.day} className="bg-surface-container-lowest rounded-xl border border-surface-container p-6 shadow-card">
                <p className="font-label-md text-primary mb-2">{s.day}</p>
                <p className="font-headline-sm text-on-background mb-2">{s.time}</p>
                <p className="font-body-md text-secondary text-sm">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-secondary text-sm mt-6">
            Final batches and holiday breaks are confirmed at enrollment.{" "}
            <Link className="text-primary underline" href={routes.contact}>
              Ask admissions
            </Link>
            .
          </p>
        </motion.div>
      </section>

      <section className="bg-surface-container py-section-padding-mobile md:py-section-padding px-gutter">
        <motion.div {...fadeUp} className="max-w-max-container mx-auto">
          <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-background text-center mb-section-padding-mobile md:mb-section-padding">
            Why Learn with Sumida
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            {[
              { icon: "school", title: "Native & Expert Instructors", body: "Learn from experienced educators who bring authentic cultural insights and rigorous academic standards to every lesson." },
              { icon: "menu_book", title: "Comprehensive Study Materials", body: "Access top-tier resources, including mock JLPT exams, interactive vocabulary guides, and extensive reading exercises." },
              { icon: "support_agent", title: "Dedicated Student Support", body: "Receive personalized guidance for university applications, visa processes, and navigating daily life in Japan after your studies." },
            ].map((f) => (
              <div key={f.title} className="flex flex-col gap-stack-md items-center text-center">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-card text-primary-container">
                  <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                </div>
                <h3 className="font-headline-sm text-[20px] font-semibold text-on-background">{f.title}</h3>
                <p className="font-body-md text-body-md text-secondary">{f.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="register" className="py-section-padding-mobile md:py-section-padding px-gutter max-w-max-container mx-auto scroll-mt-28">
        <motion.div {...fadeUp} className="bg-surface-container-lowest rounded-[16px] shadow-card p-8 md:p-12 lg:p-16 border border-surface-container flex flex-col lg:flex-row gap-stack-lg items-center">
          <div className="flex-1 flex flex-col gap-stack-md">
            <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-background">Start Your Journey Today</h2>
            <p className="font-body-md text-body-md text-secondary">
              Register your interest for our upcoming Japanese language classes. Our admissions team will contact you shortly to finalize your enrollment and answer any questions.
            </p>
            <div className="mt-4 hidden lg:block rounded-lg overflow-hidden h-64 relative">
              <Image
                alt="Students studying"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAstSVWWTN4zJCqNpRYAWfcWJDfW_8UwgMMnDPbXZT07f7cA2aruWYfN4OzfyeLCvs7nUAwvAQpHCzD1nOvVnyhKyOUgw6Ejv-NrIsIsnSGcXQ06ZcGTa78pg_KTtDUjKqPeamuM1P8mCYDge22ViuyQQ0wqnlpPK73EXupwa1ElKEeb9Z0BhHzeuFZcOHg4iV436Sc30mrOjseqjpVr2y3YpQv01cwcHrEf7ShMWZrjmARBJc1klYtNo_HMwDzP1D7CUhUwNsxKzUQ"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <LanguageEnrollmentForm />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
