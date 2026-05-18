import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.faqItem.deleteMany();

  const faqs = [
    {
      question:
        "When are the main intake seasons for Japanese universities and language schools?",
      answer:
        "The primary intake seasons in Japan are typically in April and October. April is the start of the traditional academic year in Japan. However, some universities and language schools also offer additional intakes in July and January depending on the specific program. It's crucial to begin the application process at least 6-8 months prior to your target intake season.",
      sortOrder: 0,
    },
    {
      question: "What documents are typically required for a student visa application?",
      answer:
        "You will generally need a valid passport, Certificate of Eligibility (COE) issued by your school in Japan, proof of financial capacity, academic transcripts, admission letter, and completed visa application forms. Our team reviews every document set before submission.",
      sortOrder: 1,
    },
    {
      question: "How long does the student visa application process usually take?",
      answer:
        "COE processing often takes 1-3 months after your school submits to immigration. Embassy visa issuance is typically 5-10 working days once documents are complete. Timelines vary by intake and case complexity.",
      sortOrder: 2,
    },
    {
      question: "Do I need to pass the JLPT (Japanese Language Proficiency Test) before applying?",
      answer:
        "Requirements depend on your program. Many language schools accept beginners, while degree programs may require N2 or higher. We assess your goals and map the right pathway and timeline.",
      sortOrder: 3,
    },
    {
      question: "Can international students work part-time in Japan while studying?",
      answer:
        "Yes, with a student visa you can apply for permission to engage in part-time work (up to 28 hours per week during term, more during breaks). We guide you through the process during pre-departure orientation.",
      sortOrder: 4,
    },
    {
      question: "What is the estimated cost of living for a student in Tokyo vs. other cities?",
      answer:
        "Tokyo tends to be higher; a reasonable monthly budget including rent often ranges higher than regional cities. We help you plan housing, transport, and lifestyle costs based on your destination.",
      sortOrder: 5,
    },
    {
      question: "Does Sumida International help with finding accommodation?",
      answer:
        "Yes. We support dormitory applications, share-house introductions, and checklists for securing housing after arrival, aligned with your school’s recommendations.",
      sortOrder: 6,
    },
    {
      question: "Are there scholarships available for international students?",
      answer:
        "Many institutions and external organizations offer scholarships. We help identify eligible programs and strengthen your application materials where applicable.",
      sortOrder: 7,
    },
  ];

  for (const f of faqs) {
    await prisma.faqItem.create({ data: f });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
