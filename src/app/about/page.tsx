"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { routes } from "@/lib/site";
import { fadeUp } from "@/lib/motion";

export default function AboutPage() {
  return (
    <main className="bg-background text-on-surface font-body-md">
      <section className="bg-surface-container-lowest py-section-padding-mobile md:py-section-padding px-gutter w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-max-container mx-auto relative z-10 flex flex-col items-center text-center gap-stack-md">
          <nav aria-label="Breadcrumb" className="flex items-center gap-stack-sm text-tertiary font-label-sm text-label-sm uppercase tracking-wider mb-stack-sm">
            <Link className="hover:text-primary transition-colors" href={routes.home}>
              Home
            </Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-surface font-semibold">About Us</span>
          </nav>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background max-w-3xl">
            About <span className="text-primary">Sumida International</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-stack-sm">
            Guiding students with academic warmth and rigorous authority towards a brighter future in Japan.
          </p>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding px-gutter w-full bg-surface-container-low">
        <div className="max-w-max-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-section-padding items-center">
          <motion.div {...fadeUp} className="flex flex-col gap-stack-lg order-2 lg:order-1">
            <div className="inline-flex items-center gap-stack-sm w-fit px-4 py-2 bg-surface-container rounded-full text-primary font-label-sm text-label-sm uppercase tracking-widest">
              <span className="material-symbols-outlined text-lg">flag</span>
              Our Mission
            </div>
            <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-background">
              Empowering global transitions through dedicated guidance.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Our mission is to bridge the gap between ambitious students and the rigorous academic opportunities in Japan.
              We provide supportive, human-centric guidance tailored to each student&apos;s unique journey, ensuring a
              frictionless transition into a new culture and educational system.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="relative order-1 lg:order-2 w-full aspect-[4/3] rounded-card overflow-hidden shadow-ambient group">
            <Image
              alt="Sumida International Office"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaC8USw2VXHf4XqZ7Pf7GD2pxMWwQs8bN3NQQtWKVTiH3_Qc2GpcMb3NV9t5OZul9nxy7E9eGenKg5H5DwPQXjDrgcX_u6qQMqouJNNPoORsSYsXaDo0LqWVQisfzlTjNvIobp3hHpmB8sbdijh55m6Zdm5P2nOO00MSo7zuUzsdM-ucC6qKy2mkzAVw-emzbJ6Sgh3QUaSzSghms8FW2iIAz24haFLRvq4MXrYju9NCN0W5I_c8A0uHwS-hh7UYSK-0SNoh_SH6wI"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-white/70 border border-white/20 rounded-lg shadow-sm">
              <p className="font-label-md text-label-md text-on-surface flex items-center gap-stack-sm">
                <span className="material-symbols-outlined text-primary fill">verified</span>
                Trusted by thousands of families
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding px-gutter w-full bg-surface-container-lowest">
        <div className="max-w-max-container mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-stack-sm w-fit px-4 py-2 bg-surface-container rounded-full text-primary font-label-sm text-label-sm uppercase tracking-widest mb-stack-lg shadow-sm">
            <span className="material-symbols-outlined text-lg">history_edu</span>
            Our Story
          </div>
          <motion.div
            {...fadeUp}
            className="max-w-4xl bg-surface-container-low p-stack-lg md:p-section-padding-mobile rounded-card shadow-ambient text-left relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #181934 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <span className="material-symbols-outlined text-6xl text-primary-fixed-dim absolute top-8 left-8 opacity-20">
              format_quote
            </span>
            <div className="relative z-10 mx-auto space-y-4">
              <p className="font-body-lg text-body-lg text-on-background font-medium">
                Sumida International Education Consultancy was born out of a profound commitment to Nepali students who
                dare to dream beyond borders. We saw immense potential in our youth, yet recognized the formidable
                barriers they faced when aspiring to study in Japan.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Starting from a humble office in New Baneshwor, our vision was clear: to create an institution that
                didn&apos;t just process applications, but nurtured ambitions. We understood that studying abroad
                isn&apos;t merely an academic pursuit; it&apos;s a life-altering transition.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Over the years, we have meticulously built bridges with esteemed Japanese institutions, ensuring our
                students receive the finest opportunities. We pride ourselves on our &apos;academic warmth&apos;—a
                philosophy where rigorous standards meet empathetic guidance.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Today, Sumida stands as a premier, exclusive gateway to Japan. Our legacy is written in the success
                stories of hundreds of Nepali students who are now thriving global citizens.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding px-gutter w-full bg-surface-container-low">
        <div className="max-w-max-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] rounded-card overflow-hidden shadow-ambient relative z-10">
                <Image
                  alt="Founder of Sumida International"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwfjJd2sKmDXNxBv5lau_l_RRstNCopJffhclSUKw8Hp2bY0e_TacRwtQyxDk7t-_W2J-FUX1-IK9U4dLQCCdjq8fk7iLt0pj9f466ttqq9Wpkd5jRZRB6pGBQwj62eiZQMtDGoy-m41kiUk1xk2sw8yO76NOoPT96tXrALfVNBY8dc9VviXVpPRRjcUuUt1J7C92BRUBzrfxsWezCMiRpwKbY3rE8AS5xeEZTVpJMB2TpoMBdurWXdPcmkXZFeymngE_omvy-_lhG"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl z-0" />
            </div>
            <motion.div {...fadeUp} className="lg:col-span-7 flex flex-col gap-stack-md pl-0 lg:pl-stack-lg relative z-10">
              <div className="inline-flex items-center gap-stack-sm w-fit px-4 py-2 bg-surface-container-lowest rounded-full text-primary font-label-sm text-label-sm uppercase tracking-widest shadow-sm">
                <span className="material-symbols-outlined text-lg">person</span>
                Leadership
              </div>
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-background">
                A Message From Our Founder
              </h2>
              <div className="relative mt-stack-sm">
                <span className="material-symbols-outlined text-5xl text-primary/20 absolute -top-4 -left-6 z-0">
                  format_quote
                </span>
                <p className="font-body-lg text-body-lg text-on-surface-variant relative z-10 italic">
                  &ldquo;When we started Sumida International, our goal was simple yet profound: to empower Nepali
                  students with world-class education in Japan. We believe that true guidance goes beyond paperwork; it
                  requires genuine care, ethical integrity, and a deep understanding of both cultures.&rdquo;
                </p>
              </div>
              <div className="mt-stack-sm border-l-4 border-primary pl-4">
                <p className="font-label-md text-label-md text-on-background font-bold">Rajan Shrestha</p>
                <p className="font-body-md text-body-md text-secondary">Founder & Managing Director</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding px-gutter w-full bg-surface-container-lowest">
        <div className="max-w-max-container mx-auto">
          <div className="text-center mb-stack-lg flex flex-col items-center">
            <div className="inline-flex items-center gap-stack-sm w-fit px-4 py-2 bg-surface-container rounded-full text-primary font-label-sm text-label-sm uppercase tracking-widest mb-stack-sm shadow-sm">
              <span className="material-symbols-outlined text-lg">diamond</span>
              Our Philosophy
            </div>
            <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-background">Our Core Values</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-stack-sm">
              The fundamental principles that guide our interactions, shape our decisions, and drive our commitment to
              student success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md">
            {[
              { icon: "workspace_premium", title: "Excellence", body: "Maintaining the highest standards in our counseling, language instruction, and university placements." },
              { icon: "verified_user", title: "Integrity", body: "Operating with absolute transparency and honesty, ensuring students and families have accurate expectations." },
              { icon: "escalator_warning", title: "Student-First", body: "Placing the individual needs, aspirations, and well-being of our students at the heart of everything we do." },
              { icon: "language", title: "Cultural Expertise", body: "Fostering deep intercultural understanding to prepare students for meaningful immersion in Japanese society." },
            ].map((v) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                className="bg-surface-container-low p-stack-md rounded-card border border-surface-variant hover:border-primary-fixed hover:shadow-ambient transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary-container text-white flex items-center justify-center mb-stack-md shadow-sm">
                  <span className="material-symbols-outlined text-2xl">{v.icon}</span>
                </div>
                <h3 className="font-headline-sm text-[20px] text-on-background mb-stack-sm">{v.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding-mobile md:py-section-padding px-gutter w-full bg-surface-container">
        <div className="max-w-max-container mx-auto">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-background">By the Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md">
            <motion.div
              {...fadeUp}
              className="bg-surface-container-lowest p-stack-lg rounded-card shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col items-center text-center group border border-transparent hover:border-primary-fixed"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-stack-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 className="font-display-lg text-headline-md md:text-display-lg text-on-background mb-stack-sm">500+</h3>
              <p className="font-label-md text-label-md text-secondary uppercase tracking-wider">Students Guided</p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="bg-surface-container-lowest p-stack-lg rounded-card shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col items-center text-center group border border-transparent hover:border-primary-fixed"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-stack-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">public</span>
              </div>
              <h3 className="font-display-lg text-headline-md md:text-display-lg text-on-background mb-stack-sm">100%</h3>
              <p className="font-label-md text-label-md text-secondary uppercase tracking-wider">Japan Exclusive</p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="bg-surface-container-lowest p-stack-lg rounded-card shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col items-center text-center group border border-transparent hover:border-primary-fixed lg:col-span-2"
            >
              <div className="flex flex-col md:flex-row items-center gap-stack-lg w-full justify-center h-full">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform shrink-0">
                  <span className="material-symbols-outlined text-4xl">location_on</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-headline-md text-headline-sm md:text-headline-md text-on-background mb-stack-sm">New Baneshwor</h3>
                  <p className="font-label-md text-label-md text-secondary uppercase tracking-wider">Prime Location Hub</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="bg-primary p-stack-lg rounded-card shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col items-center text-center group border border-transparent hover:border-primary-fixed lg:col-span-4 text-white"
            >
              <div className="flex flex-col md:flex-row items-center justify-between w-full px-stack-lg">
                <div className="flex items-center gap-stack-md mb-stack-md md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-white">calendar_month</span>
                  </div>
                  <h3 className="font-headline-md text-headline-sm md:text-headline-md text-white">3 Intake Seasons</h3>
                </div>
                <p className="font-body-lg text-body-lg text-primary-fixed max-w-xl text-center md:text-right">
                  Flexible enrollment options throughout the year to align perfectly with your preparation schedule.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-section-padding px-gutter w-full bg-on-background relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background to-transparent opacity-80" />
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center gap-stack-lg">
          <h2 className="font-display-lg text-headline-md md:text-display-lg text-white">Ready to begin your journey?</h2>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-xl">
            Connect with our expert counselors today and take the first step towards your academic future in Japan.
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md mt-stack-sm">
            <Link
              href={`${routes.contact}?intent=consultation`}
              className="bg-primary text-white font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-primary-container hover:shadow-ambient transition-all min-w-[200px] text-center"
            >
              Book Consultation
            </Link>
            <Link
              href={routes.contact}
              className="bg-transparent border-[1.5px] border-white text-white font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-white hover:text-on-background transition-all min-w-[200px] text-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
