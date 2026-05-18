"use client";

import { useState } from "react";

export function LanguageEnrollmentForm() {
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
      level: String(fd.get("level") || ""),
    };
    const res = await fetch("/api/language-enrollment", {
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
  }

  return (
    <form className="flex flex-col gap-stack-md" onSubmit={onSubmit}>
      <div>
        <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="jl-name">
          Full Name
        </label>
        <input
          required
          id="jl-name"
          name="name"
          placeholder="John Doe"
          type="text"
          className="w-full rounded-[8px] border border-[#4A4A68]/15 bg-surface-container-lowest px-4 py-3 font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all outline-none"
        />
      </div>
      <div>
        <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="jl-email">
          Email Address
        </label>
        <input
          required
          id="jl-email"
          name="email"
          placeholder="john@example.com"
          type="email"
          className="w-full rounded-[8px] border border-[#4A4A68]/15 bg-surface-container-lowest px-4 py-3 font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all outline-none"
        />
      </div>
      <div>
        <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="jl-phone">
          Phone Number
        </label>
        <input
          required
          id="jl-phone"
          name="phone"
          placeholder="+977 9800000000"
          type="tel"
          className="w-full rounded-[8px] border border-[#4A4A68]/15 bg-surface-container-lowest px-4 py-3 font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all outline-none"
        />
      </div>
      <div>
        <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="jl-level">
          Level of Interest
        </label>
        <select
          required
          id="jl-level"
          name="level"
          defaultValue=""
          className="w-full rounded-[8px] border border-[#4A4A68]/15 bg-surface-container-lowest px-4 py-3 font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all outline-none text-on-background"
        >
          <option value="" disabled>
            Select a level
          </option>
          <option value="n5">N5 (Beginner)</option>
          <option value="n4">N4 (Pre-Intermediate)</option>
          <option value="n3">N3 (Intermediate)</option>
          <option value="n2">N2 (Advanced)</option>
        </select>
      </div>
      <button
        disabled={status === "loading"}
        className="w-full bg-primary-container text-white font-label-md text-label-md py-3 px-4 rounded-lg hover:bg-on-primary-fixed-variant transition-colors hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mt-2 shadow-sm disabled:opacity-60"
        type="submit"
      >
        {status === "loading" ? "Submitting…" : "Submit Registration"}
      </button>
      {status === "success" && <p className="text-sm text-secondary">Thank you — we will contact you shortly.</p>}
      {status === "error" && error && <p className="text-sm text-error">{error}</p>}
    </form>
  );
}
