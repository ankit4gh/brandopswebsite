import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SERVICES, CONTACT } from '../lib/data';
import { SectionTag, Reveal } from './ui';

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="SERVICE CATALOG" index={2} />

        <Reveal>
          <h2 className="mt-12 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            All the legos to build the perfect brand{' '}
            <span className="text-muted">for your business.</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-base text-muted">
            Focused services for positioning, designing, launching, and growing your brand. Choose
            your starting point.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[380px_1fr]">
          {/* index list */}
          <div className="flex flex-col border-t border-line">
            {SERVICES.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className={`group flex items-center justify-between border-b border-line py-4 text-left transition-colors ${
                  active === i ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className={`font-mono text-xs ${active === i ? 'text-blue' : 'text-muted/60'}`}>
                    {s.num}
                  </span>
                  <span className="font-heading text-lg font-medium tracking-tight">{s.name}</span>
                </span>
                <span
                  aria-hidden
                  className={`font-mono text-sm transition-all ${
                    active === i ? 'translate-x-0 text-blue opacity-100' : '-translate-x-1 opacity-0 group-hover:opacity-40'
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>

          {/* detail panel */}
          <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-line bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col p-7 sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-blue">
                    {SERVICES[active].num} · {SERVICES[active].tag}
                  </span>
                  <span className="rounded-full border border-line bg-frost px-3 py-1 font-mono text-[11px] text-blue-deep">
                    {SERVICES[active].price}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {SERVICES[active].name}
                </h3>
                <p className="mt-4 max-w-xl font-body text-[15px] leading-relaxed text-muted">
                  {SERVICES[active].desc}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {SERVICES[active].items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-mist px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    href={CONTACT.bookHref}
                    className="group inline-flex items-center gap-2 font-heading text-sm font-semibold text-blue"
                  >
                    Start with {SERVICES[active].tag.toLowerCase()}
                    <span aria-hidden className="font-mono transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* decorative dots */}
            <div aria-hidden className="bg-dots pointer-events-none absolute -right-8 -top-8 h-40 w-40 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
