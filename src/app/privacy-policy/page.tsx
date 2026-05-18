import Link from "next/link";
import { routes } from "@/lib/site";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background px-gutter py-section-padding-mobile md:py-section-padding">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline-md text-headline-md text-on-background mb-4">Privacy Policy</h1>
        <p className="font-body-md text-body-md text-secondary mb-6">
          This is a starter privacy policy for the Sumida International marketing site. Replace with counsel-reviewed text before production launch.
        </p>
        <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md text-on-surface-variant">
          <li>We collect information you submit through forms (name, email, phone, message) to respond to inquiries.</li>
          <li>Data is stored in our application database for operational follow-up and may be exported for backups.</li>
          <li>We do not sell personal information. Contact us to request deletion where applicable.</li>
        </ul>
        <p className="mt-8 font-body-md text-body-md">
          Questions?{" "}
          <Link className="text-primary underline" href={routes.contact}>
            Contact us
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
