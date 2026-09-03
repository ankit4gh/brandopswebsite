import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PRISM, CONTACT } from '../lib/data';
import { SectionTag, Reveal, Corners, PrimaryButton } from './ui';

export default function Method() {
  const [active, setActive] = useState(0);
  const step = PRISM[active];

  return (
    <section id="method" className="relative overflow-hidden bg-ink text-white">
      <div className="bg-dots-dark absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute right-[-200px] top-[-160px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.55),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="OUR METHODOLOGY" index={5} dark />

        <Reveal>
          <h2 className="mt-12 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            The PRISM Method.{' '}
            <span className="text-muted-dark">Five primitives, one brand.</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-base text-muted-dark">
            Position, research, design, systemize, then a fifth step that makes the previous four
            worth the effort.
          </p>
        </Reveal>

        {/* letter tabs */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-5 gap-2 sm:gap-3">
            {PRISM.map((p, i) => (
              <button
                key={p.letter}
                onClick={() => setActive(i)}
                className={`group relative rounded-lg border py-4 transition-all sm:py-6 ${
                  active === i
                    ? 'border-gold/60 bg-blue/25 shadow-[0_0_30px_-8px_rgba(201,150,43,0.45)]'
                    : 'border-line-dark bg-ink-2/60 hover:border-sky/40'
                }`}
              >
                <span
                  className={`block text-center font-heading text-2xl font-bold sm:text-4xl ${
                    active === i ? 'text-gold-soft' : 'text-muted-dark group-hover:text-white'
                  }`}
                >
                  {p.letter}
                </span>
                <span className="mt-1 hidden text-center font-mono text-[10px] tracking-[0.15em] text-muted-dark sm:block">
                  {p.name.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* active step detail */}
        <div className="relative mt-6 rounded-xl border border-line-dark bg-ink-2/80 p-7 backdrop-blur sm:p-10">
          <Corners dark />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-12"
            >
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] text-sky">
                  {step.num} / {step.name.toUpperCase()}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                  {step.tagline}
                </h3>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <p className="font-body text-[15px] leading-relaxed text-muted-dark">{step.desc}</p>
                <div className="font-mono text-xs text-muted-dark">
                  <span className="text-sky">$</span> prism run --step={step.name.toLowerCase()}{' '}
                  <span aria-hidden className="animate-blink text-sky">▌</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* progress rail */}
          <div className="mt-8 flex items-center gap-2">
            {PRISM.map((_, i) => (
              <span
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= active ? 'bg-gold' : 'bg-line-dark'
                }`}
              />
            ))}
            <span className="ml-3 font-mono text-[11px] text-muted-dark">
              {step.num} /05
            </span>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-line-dark bg-gradient-to-r from-blue-deep/60 to-ink-2 p-7 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                Your audience decides in 3 seconds whether to trust you, or scroll past.
              </p>
              <p className="mt-2 font-body text-sm text-muted-dark">
                PRISM builds brands for professionals, coaches, and thought leaders who want to stand out.
              </p>
            </div>
            <PrimaryButton href={CONTACT.bookHref} className="shrink-0">
              Book PRISM Discovery Call
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
