"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { routes } from "@/lib/site";
import { fadeUp, smoothEase } from "@/lib/motion";

export default function HomePage() {
  return (
    <main className="bg-surface text-on-surface">
      <section className="px-gutter py-section-padding-mobile md:py-section-padding max-w-max-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center">
          <motion.div {...fadeUp} className="md:col-span-7 flex flex-col gap-stack-lg items-start">
            <span className="bg-surface-container-high text-primary font-label-sm text-label-sm py-2 px-4 rounded-full inline-block">
              Nepal&apos;s #1 Japan Study Consultancy
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
              Your Gateway to Studying in Japan
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Expert guidance, seamless admissions, and complete visa support. Join hundreds of successful students who
              have realized their dream of studying in Japan with academic warmth and professional precision.
            </p>
            <div className="flex flex-wrap gap-stack-md pt-4">
              <Link
                href={`${routes.contact}?intent=journey`}
                className="bg-primary-container text-on-primary font-label-md text-label-md py-3 px-8 rounded-lg hover:bg-primary transition-colors shadow-md"
              >
                Start Your Journey
              </Link>
              <Link
                href={routes.services}
                className="bg-transparent text-on-background border-[1.5px] border-on-background font-label-md text-label-md py-3 px-8 rounded-lg hover:bg-surface-container transition-colors"
              >
                Explore Services
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-secondary-fixed-dim w-full max-w-md">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-secondary text-sm">person</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-secondary text-sm">person</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-container border-2 border-surface flex items-center justify-center text-on-primary font-label-sm text-label-sm">
                  500+
                </div>
              </div>
              <span className="font-label-md text-label-md text-secondary">Trusted by students worldwide</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: smoothEase }}
            className="md:col-span-5 relative mt-8 md:mt-0"
          >
            <div className="absolute inset-0 bg-primary-fixed-dim rounded-full blur-3xl opacity-30 -z-10 translate-x-4 translate-y-4" />
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-surface-container">
              <Image
                alt="Student smiling on campus"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRphmYoECJ54iplfHDChgFmvtM9B5eBlrYEuSvr3Di02nzX5Fh9qqgC7RTSCoUj72j3RF8mWItd0sxu22C1s01yBGF0SgmFIZIXJzTa-FS-EHqeLe0VPuHkvfawxq2Zdm1KeCTSAE3GQb0AFtv6Vj9NypsTeICnUkxZdHYwbgjdzgNPPwiOdhi8UglBf8l2gkNTrl0ha8MuGe_I4R6pVHBiCbeQmwcYZk8QrT6j68EIMRvd7cRtuUo0lPb6AZoxgVKQiDL8ndki-UO"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-surface-container flex items-start gap-4 max-w-[240px]">
              <div className="bg-primary-container text-on-primary p-2 rounded-lg flex-shrink-0">
                <span className="material-symbols-outlined fill">calendar_month</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface mb-1">Upcoming Intakes</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">April & October Sessions Open Now</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-padding-mobile md:py-section-padding">
        <div className="px-gutter max-w-max-container mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-stack-lg md:mb-16">
            <span className="bg-primary-fixed text-primary font-label-sm text-label-sm py-1 px-3 rounded-full inline-block mb-4">
              What We Offer
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Complete Support, Every Step of the Way</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            {[
              {
                icon: "forum",
                title: "Expert Consultation",
                body: "Personalized counseling to help you select the right course, university, and city in Japan based on your academic background and career goals.",
              },
              {
                icon: "description",
                title: "Application Assistance",
                body: "Meticulous preparation of all required documents, translation services, and seamless submission to your chosen educational institutions.",
              },
              {
                icon: "flight_takeoff",
                title: "Visa Support",
                body: "Comprehensive guidance through the Certificate of Eligibility (COE) and final visa application process, ensuring high success rates.",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                {...fadeUp}
                className="bg-surface-container-lowest rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-surface-container flex flex-col items-start group"
              >
                <div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-3xl">
                    {c.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{c.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding">
        <div className="px-gutter max-w-max-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              {...fadeUp}
              className="relative rounded-2xl overflow-hidden shadow-lg aspect-square lg:aspect-auto lg:h-[600px] bg-surface-container order-2 lg:order-1"
            >
              <Image
                alt="Office in Kathmandu"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADgFeTW7yt9rxj0xhQhP5aqXNkjuU3V_uBy8zJdrDffcLm8sLb8kGIUdU19NTkQDdX-10W_PcRULVM2x04vwNfhn2m1dquPCs_AvGMM5O3pNuYJPp4-mV2ZE3OlYob9LczGX5vj0CEqyknO6sdBF8znt8AfsOnQySMJyiMUUAnvBOlfCepNu3gzMD7TIlaN0psenI7r_A4JbqdIN98JhH_xpS_pr9rqURQnxJD7c8C2NyLWzQW8pRv6sGlPYRQUm-_uWaijsPsbxFS"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div {...fadeUp} className="flex flex-col gap-8 order-1 lg:order-2">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Why Choose Sumida?</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  We are dedicated to turning your aspirations of studying in Japan into a reality through specialized,
                  localized, and continuous support.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: "verified",
                    title: "Japan Specialists Only",
                    body: "We focus exclusively on Japan, giving you unmatched depth of expertise and up-to-date knowledge on immigration policies and universities.",
                  },
                  {
                    icon: "location_on",
                    title: "New Baneshwor, Kathmandu",
                    body: "Conveniently located in the heart of the education hub, making it easy for you to drop by for a consultation or document processing.",
                  },
                  {
                    icon: "support_agent",
                    title: "End-to-End Support",
                    body: "From your initial consultation to post-arrival support in Japan, we are with you every step of your entire journey.",
                  },
                ].map((x) => (
                  <div key={x.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary">{x.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-xl text-on-surface mb-2">{x.title}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{x.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-16">
        <div className="px-gutter max-w-max-container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x md:divide-outline-variant">
            {[
              ["500+", "Students Guided"],
              ["100%", "Japan Exclusive"],
              ["3", "Intake Seasons"],
              ["pin", "New Baneshwor Hub"],
            ].map(([a, b]) => (
              <motion.div key={b} {...fadeUp} className="flex flex-col items-center text-center px-4">
                {a === "pin" ? (
                  <span className="material-symbols-outlined text-primary text-5xl mb-2">pin_drop</span>
                ) : (
                  <span className="font-display-lg text-display-lg text-primary mb-2">{a}</span>
                )}
                <span className="font-label-md text-label-md text-on-surface-variant">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding">
        <div className="px-gutter max-w-max-container mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-stack-lg md:mb-16">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Intake Calendar</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Plan your journey with our three main academic intake windows for Japanese institutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "April Intake",
                tagClass: "bg-primary-container text-on-primary",
                title: "Spring Semester",
                body: "The main intake for Japanese universities and vocational schools. Ideal for direct degree program enrollments and long-term language studies.",
              },
              {
                tag: "July Intake",
                tagClass: "bg-surface-variant text-on-surface",
                title: "Summer Session",
                body: "Primarily focused on Japanese language schools. A great option for students looking to immerse themselves in a shorter, intensive language program.",
              },
              {
                tag: "October Intake",
                tagClass: "bg-primary-container text-on-primary",
                title: "Fall Semester",
                body: "The second largest intake for degree programs and graduate schools. Offers a robust selection of English-taught programs across major universities.",
              },
            ].map((x) => (
              <motion.div
                key={x.title}
                {...fadeUp}
                className="bg-surface-container-lowest border border-surface-container p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${x.tagClass} w-fit px-4 py-2 rounded-lg font-label-md text-label-md mb-6`}>{x.tag}</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{x.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{x.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-padding-mobile md:py-section-padding">
        <div className="px-gutter max-w-max-container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-stack-lg md:mb-16">
            <motion.div {...fadeUp}>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Student Success Stories</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Hear from our students who have successfully navigated their admissions and are now thriving in Japan.
              </p>
            </motion.div>
            <Link
              href={routes.testimonials}
              className="hidden md:inline-flex bg-transparent text-primary border-[1.5px] border-primary font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors whitespace-nowrap"
            >
              View All Stories
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The team at Sumida made the complex COE application feel completely manageable. Their attention to detail meant my visa was approved without a single issue.",
                name: "Rohan Shrestha",
                school: "Tokyo International University",
                initial: "R",
              },
              {
                quote:
                  "I almost gave up on studying in Japan due to the language barrier in the paperwork. Sumida's translation and application support were absolute lifesavers.",
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
            ].map((t) => (
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
          <Link
            href={routes.testimonials}
            className="mt-8 md:hidden inline-flex w-full justify-center bg-transparent text-primary border-[1.5px] border-primary font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors"
          >
            View All Stories
          </Link>
        </div>
      </section>

      <section className="bg-on-secondary-fixed text-white py-20">
        <motion.div
          {...fadeUp}
          className="px-gutter max-w-max-container mx-auto text-center flex flex-col items-center"
        >
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
            Ready to begin your journey?
          </h2>
          <p className="font-body-lg text-body-lg text-secondary-fixed-dim max-w-2xl mb-10">
            Connect with our expert counselors today and take the first step towards your academic future in Japan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href={`${routes.contact}?intent=consultation`}
              className="bg-primary-container text-on-primary font-label-md text-label-md py-4 px-10 rounded-lg hover:bg-primary transition-colors text-center"
            >
              Book Consultation
            </Link>
            <Link
              href={routes.contact}
              className="bg-transparent text-white border-[1.5px] border-white font-label-md text-label-md py-4 px-10 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
