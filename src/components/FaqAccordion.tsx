"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";

export type Faq = { id: string; question: string; answer: string; sortOrder: number };

export function FaqAccordion({ items }: { items: Faq[] }) {
  const sorted = [...items].sort((a, b) => a.sortOrder - b.sortOrder);
  const [openId, setOpenId] = useState<string>(sorted[0]?.id ?? "");

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-stack-sm">
      {sorted.map((item) => {
        const open = openId === item.id;
        return (
          <motion.div
            key={item.id}
            layout
            className={`rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.07)] overflow-hidden border ${
              open ? "border-l-4 border-l-primary-container bg-[#F8F6F2]" : "border-transparent hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] bg-surface-container-lowest"
            }`}
          >
            <button
              type="button"
              className="w-full text-left px-8 py-6 flex justify-between items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded-xl"
              onClick={() => setOpenId(open ? "" : item.id)}
              aria-expanded={open}
            >
              <span
                className={`font-headline-sm text-headline-sm pr-4 transition-colors ${
                  open ? "text-on-background" : "text-on-background group-hover:text-primary"
                }`}
              >
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                className={`material-symbols-outlined shrink-0 ${open ? "text-primary-container" : "text-secondary group-hover:text-primary"}`}
              >
                expand_more
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: smoothEase }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-secondary font-body-md text-body-md pr-16">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
