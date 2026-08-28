"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * SignalWave — the page's signature element.
 * A hand-drawn oscilloscope-style trace that draws itself in on load,
 * then carries a traveling pulse dot to suggest a live signal on the line.
 * Directly references the subject: transmission, carrier waves, telecom.
 */
export default function SignalWave() {
  const prefersReducedMotion = useReducedMotion();

  const path =
    "M0,50 C40,15 80,85 120,50 C160,15 200,85 240,50 C280,15 320,85 360,50 " +
    "C400,15 440,85 480,50 C520,15 560,85 600,50 C640,15 680,85 720,50 " +
    "C760,15 800,85 800,50";

  const dotX = [0, 120, 240, 360, 480, 600, 720, 800];
  const dotY = [50, 50, 50, 50, 50, 50, 50, 50];
  // approximate peak/trough offsets so the dot visibly rides the wave
  const dotYOffsets = [0, -22, 22, -22, 22, -22, 22, 0];
  const dotCy = dotY.map((y, i) => y + dotYOffsets[i]);

  return (
    <div className="relative w-full h-[72px] sm:h-24">
      <svg
        viewBox="0 0 800 100"
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* faint baseline for reference, like a scope grid */}
        <line
          x1="0"
          y1="50"
          x2="800"
          y2="50"
          stroke="#1E293B"
          strokeWidth="1"
        />

        <motion.path
          d={path}
          fill="none"
          stroke="#F4A93B"
          strokeWidth="1.75"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {!prefersReducedMotion && (
          <motion.circle
            r="4"
            fill="#F4A93B"
            initial={{ opacity: 0 }}
            animate={{
              cx: dotX,
              cy: dotCy,
              opacity: [0, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 3.2,
              ease: "linear",
              delay: 1.6,
              repeat: Infinity,
              repeatDelay: 0.6,
            }}
            style={{ filter: "drop-shadow(0 0 4px #F4A93B)" }}
          />
        )}
      </svg>
    </div>
  );
}
