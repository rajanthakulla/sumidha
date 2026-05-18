import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sumida International Education Consultancy",
    template: "%s | Sumida International",
  },
  description:
    "Nepal–Japan focused education consultancy: admissions, visa support, and Japanese language training in Kathmandu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${plusJakarta.variable} ${notoSerif.variable} bg-background text-on-background font-body-md text-body-md antialiased selection:bg-primary-container selection:text-white min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
