"use client";

import { ContactForm } from "@/components";
import SignalWave from "@/components/SignalWave";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-xl flex flex-col items-center text-center"
      >
        {/* Eyebrow / station identifier */}
        <motion.div
          variants={item}
          className="flex items-center gap-2 font-mono text-[11px] tracking-widest2 text-fg-muted uppercase mb-10"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Portfolio — Status: In Development
        </motion.div>

        {/* Name + role */}
        <motion.h1
          variants={item}
          className="font-display font-700 text-4xl sm:text-5xl text-fg tracking-tight"
        >
          RASEL RANA
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 font-body text-base sm:text-lg text-fg-muted"
        >
          Electrical &amp; Electronic Engineer
        </motion.p>

        <motion.p
          variants={item}
          className="mt-1 font-mono text-xs tracking-wide text-fg-muted/80"
        >
          Bangladesh Telecommunications Company Limited
        </motion.p>

        {/* Signature element */}
        <motion.div variants={item} className="w-full mt-14 mb-10">
          <SignalWave />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="max-w-md font-body text-sm sm:text-[15px] leading-relaxed text-fg-muted"
        >
          I&apos;m Rasel Rana, Manager (Technical) at Bangladesh
          Telecommunication Company Limited. With a strong foundation in
          technical operations and management, I&apos;m dedicated to delivering
          reliable, efficient, and forward-thinking solutions within the
          telecommunications sector.
        </motion.p>

        {/* Contact form */}
        <motion.div
          variants={item}
          className="mt-10 w-full flex justify-center"
        >
          <ContactForm />
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={item}
          className="mt-20 font-mono text-[11px] tracking-widest2 text-fg-muted/60 uppercase flex items-center gap-3"
        >
          <span>Dhaka, Bangladesh</span>
          <span className="text-fg-muted/30">/</span>

          <a
            href="mailto:contact@raselrana.com.bd"
            className="hover:text-accent transition-colors normal-case tracking-normal"
          >
            contact@raselrana.com.bd
          </a>

          {/* Add blog link here */}
          <span className="text-fg-muted/30">/</span>
          <a
            href="https://raselrana.com.bd/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors normal-case tracking-normal"
          >
            Blog
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
