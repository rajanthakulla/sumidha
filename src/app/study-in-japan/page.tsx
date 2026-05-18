"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { routes } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function StudyInJapanPage() {
  return (
    <main className="bg-background text-on-background font-body-md text-body-md">
      <section className="relative pt-section-padding-mobile pb-section-padding-mobile md:pt-section-padding md:pb-section-padding bg-surface-container-low overflow-hidden min-h-[716px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Study in Japan background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABugq9i8MZGF6nNqOLGqrVDjwO5ms4BijyGMQGaxqYSlmtfuI6hqhnhtT1UTMWPxGiUNhv5I96ysSTCZqRSMixweKyVvC6XJCjOvZagdf_JXd0CeciRPAKpCCwHxeAL0rrS6_Y-6Vk6OSuuPodqQmS0hppECKQoGbAM4-k-q3Q2qyzw0bmlBizKQosa-Vwp2kI0XTfzB-9OJ6PK7RhqdMWEV1IBkBVI8pw34WLIt7yA5k0Fb8smwR8P2xhJx6GFzQYwCTMRHV_iUVw"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 px-gutter max-w-max-container mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="space-y-stack-md"
          >
            <span className="inline-block bg-primary-container/10 text-primary-container font-label-sm text-label-sm px-4 py-2 rounded-full border border-primary-container/20">
              Admissions Open for Next Intake
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Study in Japan 🇯🇵</h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl">
              Unlock world-class education, immerse yourself in a rich culture, and build a global career. Begin your journey to academic excellence in the Land of the Rising Sun.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href={`${routes.contact}?intent=apply`}
                className="bg-primary-container text-white px-8 py-4 rounded-lg font-label-md text-label-md font-semibold hover:bg-primary transition-colors duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.07)] inline-flex items-center gap-2"
              >
                Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <a
                href="/api/brochure"
                className="bg-transparent text-on-surface px-8 py-4 rounded-lg font-label-md text-label-md font-semibold border-2 border-on-secondary-fixed hover:bg-surface-container transition-colors duration-300 inline-flex items-center gap-2"
              >
                Download Brochure <span className="material-symbols-outlined text-sm">download</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-primary-fixed/20 rounded-xl blur-2xl z-0" />
            <div className="relative z-10 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] border-4 border-surface overflow-hidden h-[500px]">
              <Image
                alt="Students in Tokyo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgJzg9qyGGgYw3o__ra5tQ_cnX_WxpG4QRxpMGvyVuftjQ4PcLnHF3Gyj7jUvL7CH3cMXDJGJhLzRfmObguflpdBJEAtcxh4b3KH_w0uUj-L2P8cZVnBKBenqZSEuyWPi2u_Y3NxCbO89rl-LrW5YkehvZehPHKvbMyU9coofF1ElX2JWvmOcYAVFKsZZfKMZBZP1dlJtLVaZ3vTtL7j1OeFz_k648YOEPpVQVtk0vlkS8yp4WKhgR7L0fArNUdNu8GQ1eZXsIjy3T"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding bg-background">
        <div className="px-gutter max-w-max-container mx-auto">
          <div className="text-center mb-stack-lg space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">Why Choose Japan?</h2>
            <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
              Discover the unique advantages that make Japan a top destination for international students worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            {[
              {
                icon: "school",
                title: "Affordable Education",
                body: "Compared to other top destinations, Japan offers high-quality education with competitive tuition fees and numerous scholarship opportunities.",
              },
              {
                icon: "security",
                title: "Safe & Welcoming",
                body: "Consistently ranked as one of the safest countries globally, Japan provides a secure, clean, and highly supportive environment for students.",
              },
              {
                icon: "work",
                title: "Career Opportunities",
                body: "With an aging population and a push for globalization, Japanese companies are actively seeking international talent, offering excellent post-study work prospects.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease }}
                className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300 border border-surface-container flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined fill text-2xl">{c.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{c.title}</h3>
                <p className="font-body-md text-body-md text-secondary">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding bg-surface-container-low">
        <div className="px-gutter max-w-max-container mx-auto">
          <div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">Intake Calendar</h2>
              <p className="font-body-md text-body-md text-secondary max-w-xl">
                Plan your journey. Japanese institutions typically offer multiple intakes throughout the year.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            {[
              {
                accent: "border-primary-container",
                blob: "bg-primary-fixed",
                label: "Main Intake",
                color: "text-primary-container",
                month: "April",
                lines: ["Largest intake for universities.", "Application deadline: Oct/Nov previous year."],
              },
              {
                accent: "border-secondary",
                blob: "bg-secondary-container",
                label: "Secondary Intake",
                color: "text-secondary",
                month: "July",
                lines: ["Primarily for Language Schools.", "Application deadline: Feb/Mar."],
              },
              {
                accent: "border-primary",
                blob: "bg-primary-fixed-dim",
                label: "Fall Intake",
                color: "text-primary",
                month: "October",
                lines: ["Second largest for degree programs.", "Application deadline: Apr/May."],
              },
            ].map((b, i) => (
              <motion.div
                key={b.month}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease }}
                className={`bg-surface-container-lowest p-6 rounded-xl border-l-4 ${b.accent} shadow-[0_2px_16px_rgba(0,0,0,0.07)] relative overflow-hidden`}
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 ${b.blob} rounded-full opacity-50 z-0`} />
                <div className="relative z-10">
                  <div className={`flex items-center gap-2 ${b.color} mb-2`}>
                    <span className="material-symbols-outlined text-xl">calendar_month</span>
                    <span className="font-label-md text-label-md uppercase tracking-wider">{b.label}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{b.month}</h3>
                  <ul className="space-y-2 font-body-md text-body-md text-secondary">
                    {b.lines.map((l) => (
                      <li key={l} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-sm mt-1 text-outline">check_circle</span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding bg-background">
        <div className="px-gutter max-w-max-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-headline-md text-headline-md text-on-surface">Language Requirements (JLPT)</h2>
              <p className="font-body-md text-body-md text-secondary">
                Understanding Japanese is crucial for your success. The Japanese-Language Proficiency Test (JLPT) is the standard measure. Most academic programs require a specific level.
              </p>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
                <Image
                  alt="Student studying Japanese"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB73VDxE8I-_1259NDUTE1RrMtRPzkv2uiORSToc1yG7ZRIbKuFt4N-uv0wSxGE-ZoDtJ8G97n7ueeJRBdEHFj4wQH3zTuBCA1LhR7I281j4Npz79AHkWRlq5VOMNfFf8Lsba2yxV74YY8Zt5E2iy3HXS48iLuFp94DBwY6dqzw1-wwAuBSELXnUHUwCwXVUkRkCpEvkMb4pXz1sMeioFC0u_kycTlIrPUsZ06Y4FEfhbu_iPuX84vbZ7wkAfsJB9LimC1dm3HkALnX"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.07)] border border-surface-container overflow-hidden">
                <div className="grid grid-cols-1 divide-y divide-surface-container">
                  {[
                    { code: "N5", tone: "bg-[#E8F5E9] text-[#2E7D32]", title: "Beginner Level", body: "Basic understanding of everyday Japanese. Minimum requirement for entry into many language schools." },
                    { code: "N4", tone: "bg-[#FFF8E1] text-[#F57F17]", title: "Pre-Intermediate", body: "Ability to understand basic Japanese used in daily life. Preferred for vocational training prep." },
                    { code: "N3", tone: "bg-[#FFF3E0] text-[#EF6C00]", title: "Intermediate", body: "Can understand everyday situations to a certain degree. Often required for part-time work." },
                    { code: "N2", tone: "bg-[#FFEBEE] text-[#C62828]", title: "Pre-Advanced", body: "Required level for entry into most Japanese Universities and full-time employment." },
                  ].map((row) => (
                    <div key={row.code} className="p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-surface-container-low transition-colors">
                      <div className={`w-16 h-16 shrink-0 ${row.tone} rounded-lg flex items-center justify-center font-display-lg text-headline-sm font-bold`}>{row.code}</div>
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface mb-1">{row.title}</h4>
                        <p className="font-body-md text-body-md text-secondary text-sm">{row.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding bg-surface-container-low">
        <div className="px-gutter max-w-max-container mx-auto">
          <div className="text-center mb-stack-lg space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">Your Journey to Japan</h2>
            <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">A step-by-step guide to our streamlined application process.</p>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-surface-variant z-0" />
            <div className="space-y-8 relative z-10">
              {[
                { n: 1, t: "Profile Assessment", d: "Free consultation to evaluate your academic background, language skills, and career goals to select the right institution.", strong: false },
                { n: 2, t: "Document Preparation", d: "We assist in gathering, translating, and formatting all necessary documents, including academic transcripts and financial proofs.", strong: false },
                { n: 3, t: "School Application", d: "Submission of your application to the chosen school and preparing you for any required entrance interviews.", strong: false },
                { n: 4, t: "COE & Visa Processing", d: "Applying for the Certificate of Eligibility (COE) on your behalf, followed by guidance on securing your student visa.", strong: false },
                { n: 5, t: "Pre-Departure & Arrival", d: "Comprehensive briefing on Japanese culture and daily life, plus assistance with accommodation and airport pickup.", strong: true },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease }}
                  className="flex flex-col md:flex-row gap-6"
                >
                  <div
                    className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center font-display-lg text-headline-sm font-bold shadow-[0_2px_16px_rgba(0,0,0,0.07)] border-4 border-surface-container-low z-10 ${s.n === 1 ? "bg-primary-container text-white" : "bg-surface-container-highest text-on-surface"
                      }`}
                  >
                    {s.n}
                  </div>
                  <div
                    className={`bg-surface-container-lowest p-6 rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.07)] flex-1 ${s.strong ? "border-l-4 border-primary" : ""
                      }`}
                  >
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{s.t}</h3>
                    <p className="font-body-md text-body-md text-secondary">{s.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-stack-lg text-center">
            <Link href={routes.japaneseLanguage} className="inline-flex items-center gap-2 text-primary font-label-md hover:underline">
              Prepare for JLPT with our classes <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
