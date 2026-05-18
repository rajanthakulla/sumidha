import Link from "next/link";
import { routes } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-on-secondary-fixed text-primary-fixed py-section-padding mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg w-full px-gutter max-w-max-container mx-auto">
        <div className="flex flex-col gap-4">
          <Link href={routes.home} className="font-display-lg text-headline-sm text-primary-fixed hover:opacity-90">
            Sumida International
          </Link>
          <p className="font-body-md text-body-md text-tertiary-fixed-dim">
            Your trusted partner for academic success in Japan. We bridge the gap between your ambitions and global
            opportunities.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-primary-fixed font-bold">Quick Links</h4>
          <ul className="flex flex-col gap-2 font-body-md text-body-md">
            <li>
              <Link className="text-tertiary-fixed-dim hover:text-white transition-all" href={routes.home}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-tertiary-fixed-dim hover:text-white transition-all" href={routes.about}>
                About
              </Link>
            </li>
            <li>
              <Link className="text-tertiary-fixed-dim hover:text-white transition-all" href={routes.services}>
                Services
              </Link>
            </li>
            <li>
              <Link className="text-tertiary-fixed-dim hover:text-white transition-all" href={routes.studyInJapan}>
                Study in Japan
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-primary-fixed font-bold">Resources</h4>
          <ul className="flex flex-col gap-2 font-body-md text-body-md">
            <li>
              <Link className="text-tertiary-fixed-dim hover:text-white transition-all" href={routes.japaneseLanguage}>
                Japanese Language
              </Link>
            </li>
            <li>
              <Link className="text-tertiary-fixed-dim hover:text-white transition-all" href={routes.faq}>
                FAQ
              </Link>
            </li>
            <li>
              <Link className="text-tertiary-fixed-dim hover:text-white transition-all" href={routes.testimonials}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="text-tertiary-fixed-dim hover:text-white transition-all" href={routes.contact}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-primary-fixed font-bold">Contact Us</h4>
          <div className="flex flex-col gap-2 font-body-md text-body-md text-tertiary-fixed-dim">
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm fill">location_on</span> New Baneshwor, Kathmandu
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">call</span> +977 1-2345678
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span> info@sumida.edu.np
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-gutter max-w-max-container mx-auto mt-stack-lg pt-stack-sm border-t border-on-secondary-fixed-variant">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-body-md text-body-md text-tertiary-fixed-dim">
            © {new Date().getFullYear()} Sumida International Education Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href={routes.privacy} className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-white">
              Privacy Policy
            </Link>
            <Link href={routes.terms} className="font-body-md text-body-md text-tertiary-fixed-dim hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
