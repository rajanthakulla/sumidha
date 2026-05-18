import Link from "next/link";
import { routes } from "@/lib/site";

export default function TermsOfServicePage() {
  return (
    <main className="bg-background px-gutter py-section-padding-mobile md:py-section-padding">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline-md text-headline-md text-on-background mb-4">Terms of Service</h1>
        <p className="font-body-md text-body-md text-secondary mb-6">
          These terms summarize acceptable use of this website. Replace with counsel-reviewed terms before production launch.
        </p>
        <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md text-on-surface-variant">
          <li>Information on this site is for general guidance and may change without notice.</li>
          <li>Admissions and visa outcomes depend on third-party institutions and government authorities.</li>
          <li>By submitting forms, you agree we may contact you about related services.</li>
        </ul>
        <p className="mt-8 font-body-md text-body-md">
          Admissions questions?{" "}
          <Link className="text-primary underline" href={routes.contact}>
            Reach out
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
