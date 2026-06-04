"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav, routes } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="bg-surface-container-lowest top-0 sticky w-full border-b border-outline-variant/30 shadow-sm z-50">
      <nav className="flex justify-between items-center w-full px-gutter max-w-max-container mx-auto h-20 gap-4">
        <Link href={routes.home} className="flex items-center gap-2 shrink-0">
          <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">temple_buddhist</span>
          <span className="font-headline-sm text-lg md:text-xl font-semibold text-primary leading-tight whitespace-nowrap">
            Sumida International
          </span>
        </Link>
        <ul className="hidden xl:flex gap-4 2xl:gap-8 items-center font-label-md text-label-md">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    active
                      ? "text-primary border-b-2 border-primary pb-1 duration-300 ease-in-out whitespace-nowrap"
                      : "text-on-surface hover:text-primary transition-colors duration-300 ease-in-out whitespace-nowrap"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden xl:block shrink-0">
          <Link
            href={`${routes.contact}?intent=consultation`}
            className="bg-primary-container text-on-primary font-label-md text-label-md py-2.5 px-6 rounded-lg hover:bg-primary transition-colors whitespace-nowrap"
          >
            Free Consultation
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          className="xl:hidden p-2 text-on-surface hover:text-primary transition-colors ml-auto"
          onClick={() => setOpen(true)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-sm xl:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="absolute right-0 top-0 h-full w-[min(100%,380px)] bg-surface-container-lowest border-l border-outline-variant/30 shadow-xl flex flex-col"
            >
              <div className="flex justify-between items-center px-gutter h-20 border-b border-outline-variant/30">
                <span className="font-headline-sm text-headline-sm text-primary">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="p-2 text-on-surface hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <span className="material-symbols-outlined text-3xl">close</span>
                </button>
              </div>
              <div className="flex flex-col px-gutter py-8 gap-4 overflow-y-auto">
                {mainNav.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        href={item.href}
                        className={`block font-headline-sm text-headline-sm ${active ? "text-primary" : "text-on-surface hover:text-primary"
                          }`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <Link
                  href={`${routes.contact}?intent=consultation`}
                  className="mt-4 inline-block text-center bg-primary-container text-on-primary font-label-md text-label-md py-3 px-8 rounded-lg hover:bg-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
