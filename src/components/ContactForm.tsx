"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent");

  const defaultMessage = useMemo(() => {
    if (intent === "consultation") return "I would like to book a free consultation.";
    if (intent === "apply") return "I would like guidance to apply for the next intake.";
    if (intent === "journey") return "I would like to start my study-in-Japan journey.";
    return "";
  }, [intent]);

  const [message, setMessage] = useState(defaultMessage);

  useEffect(() => {
    setMessage(defaultMessage);
  }, [defaultMessage]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      setStatus("error");
      setError(data.error || "Something went wrong.");
      return;
    }
    setStatus("success");
    e.currentTarget.reset();
    setMessage("");
  }

  return (
    <form className="flex flex-col gap-stack-md" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
        <div className="flex flex-col gap-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="c-name">
            Full Name
          </label>
          <input
            required
            id="c-name"
            name="name"
            placeholder="John Doe"
            type="text"
            className="rounded-lg border border-[#4A4A68]/15 bg-transparent px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="c-email">
            Email Address
          </label>
          <input
            required
            id="c-email"
            name="email"
            placeholder="john@example.com"
            type="email"
            className="rounded-lg border border-[#4A4A68]/15 bg-transparent px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="c-phone">
          Phone Number
        </label>
        <input
          id="c-phone"
          name="phone"
          placeholder="+977 9800000000"
          type="tel"
          className="rounded-lg border border-[#4A4A68]/15 bg-transparent px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="c-message">
          Your Message
        </label>
        <textarea
          required
          id="c-message"
          name="message"
          placeholder="How can we help you?"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-[#4A4A68]/15 bg-transparent px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all outline-none resize-none"
        />
      </div>
      <button
        disabled={status === "loading"}
        type="submit"
        className="mt-4 bg-primary-container text-white font-label-md text-label-md font-semibold px-6 py-4 rounded-lg hover:bg-on-primary-fixed transition-colors duration-300 w-full md:w-auto self-start flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <span>{status === "loading" ? "Sending…" : "Send Message"}</span>
        <span className="material-symbols-outlined text-[20px]">send</span>
      </button>
      {status === "success" && <p className="text-sm text-secondary">Message received. Our team will reply shortly.</p>}
      {status === "error" && error && <p className="text-sm text-error">{error}</p>}
    </form>
  );
}
