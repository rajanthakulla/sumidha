import { prisma } from "@/lib/prisma";
import { FaqAccordion } from "@/components/FaqAccordion";

export const dynamic = "force-dynamic";

export default async function FaqPage() {
  const items = await prisma.faqItem.findMany();

  return (
    <main className="bg-background text-on-background font-body-md antialiased">
      <section className="py-section-padding-mobile md:py-section-padding px-gutter max-w-max-container mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-stack-md">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background">
            Frequently Asked Questions
          </h1>
          <p className="font-body-lg text-body-lg text-secondary">
            Find answers to the most common questions about studying in Japan, the application process, language requirements, and living abroad.
          </p>
        </div>
      </section>
      <section className="pb-section-padding-mobile md:pb-section-padding px-gutter max-w-max-container mx-auto">
        {items.length === 0 ? (
          <p className="text-center text-secondary">
            No FAQs found yet. Run{" "}
            <code className="font-mono text-sm bg-surface-container px-2 py-1 rounded">npx prisma db seed</code> to load questions.
          </p>
        ) : (
          <FaqAccordion items={items} />
        )}
      </section>
    </main>
  );
}
