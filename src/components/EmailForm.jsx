"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");

    // ---------------------------------------------------------------
    // NOTE FOR LAUNCH: this currently just logs the email locally.
    // Vercel's free tier has no built-in database, so before you
    // collect real signups, wire this up to one of:
    //   - Formspree / Getform (drop-in form backend, no server code)
    //   - Resend + a Next.js Route Handler (src/app/api/subscribe/route.js)
    //   - A Google Sheet via a service like SheetMonkey
    // Replace the block below with a fetch() call to whichever you pick.
    // ---------------------------------------------------------------
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.log("New signup:", email);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full max-w-sm">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm text-accent tracking-wide"
          >
            You&apos;re on the list — talk soon.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="flex-1 bg-transparent border border-line rounded-sm px-4 py-3 text-sm font-body text-fg placeholder:text-fg-muted focus:border-accent transition-colors"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="shrink-0 border border-accent text-accent rounded-sm px-5 py-3 text-sm font-mono tracking-wide hover:bg-accent hover:text-bg transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "Sending…" : "Notify me"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === "error" && (
        <p className="mt-2 text-xs font-mono text-red-400">
          Something went wrong — try again in a moment.
        </p>
      )}
    </div>
  );
}
