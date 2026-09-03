import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT, MARQUEE_ITEMS } from '../lib/data';
import { PrimaryButton, GhostButton, Corners } from './ui';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.12 * i, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const cmd = 'npx brandops diagnose --free';

  const copy = () => {
    navigator.clipboard?.writeText(cmd).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* atmosphere */}
      <div className="bg-dots absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute left-1/2 top-[-220px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.14),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        {/* announcement pill */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="flex justify-center">
          <a
            href="#method"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/80 py-1.5 pl-1.5 pr-4 text-xs backdrop-blur transition-colors hover:border-blue/40"
          >
            <span className="rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-white">
              NEW
            </span>
            <span className="font-body font-medium text-muted group-hover:text-ink">
              The PRISM Method is now standard on every project
            </span>
            <span aria-hidden className="font-mono text-blue transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>

        {/* headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mx-auto mt-8 max-w-4xl text-center font-heading text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          The brand engine that makes you{' '}
          <span className="relative whitespace-nowrap text-blue">
            the obvious choice
            <svg
              aria-hidden
              viewBox="0 0 300 12"
              className="absolute -bottom-1 left-0 w-full"
              preserveAspectRatio="none"
            >
              <path d="M2 9 Q 150 -2 298 8" fill="none" stroke="#C9962B" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          .
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-6 max-w-2xl text-center font-body text-base leading-relaxed text-muted sm:text-lg"
        >
          Strategic branding that makes customers choose you over your competitor — not because
          you're cheaper, but because you <em className="font-semibold not-italic text-ink">look</em>{' '}
          like the best. Identity, websites, and marketing systems. One partner, built in.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <PrimaryButton href={CONTACT.bookHref}>Book a Free Brand Diagnostic</PrimaryButton>
          <GhostButton href="#services">View services</GhostButton>
        </motion.div>

        {/* terminal snippet */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-10 flex justify-center">
          <button
            onClick={copy}
            className="group relative flex items-center gap-3 rounded-lg border border-line bg-ink px-5 py-3 font-mono text-[13px] text-white/90 shadow-[0_16px_40px_-16px_rgba(11,16,21,0.5)] transition-transform hover:-translate-y-0.5"
            title="Copy"
          >
            <Corners dark />
            <span className="text-sky">$</span>
            <span>{cmd}</span>
            <span aria-hidden className="animate-blink text-sky">▌</span>
            <span className="ml-2 rounded border border-line-dark px-2 py-0.5 text-[10px] tracking-wider text-muted-dark group-hover:text-sky">
              {copied ? 'COPIED ✓' : 'COPY'}
            </span>
          </button>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-4 text-center font-mono text-[11px] tracking-[0.16em] text-muted"
        >
          100+ PREMIUM DESIGNS · FORTUNE 500 EXPERIENCE · ONE PARTNER
        </motion.p>
      </div>

      {/* marquee */}
      <div className="relative border-y border-line bg-white/60 py-4 backdrop-blur">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-8 pr-8 font-mono text-xs tracking-[0.2em] text-muted">
                {item}
                <span aria-hidden className="text-gold">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
