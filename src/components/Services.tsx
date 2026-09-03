import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { BRANDING_PILLARS, COMMUNICATION_SERVICES, CONTACT } from '../lib/data';
import { SectionTag, Reveal, Corners } from './ui';

export default function Services() {
  const [active, setActive] = useState(0);
  const pillar = BRANDING_PILLARS[active];
  const comm = COMMUNICATION_SERVICES[0];

  return (
    <section id="services" className="relative bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="SERVICE CATALOG" index={2} />

        <Reveal>
          <h2 className="mt-12 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Two categories. <span className="text-muted">Every capability.</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-base text-muted">
            Everything we do lives under two roofs:{' '}
            <span className="font-semibold text-ink">Branding</span> and{' '}
            <span className="font-semibold text-ink">Communication</span>. Eight branding
            pillars, one communication engine.
          </p>
        </Reveal>

        {/* CATEGORY 01 · BRANDING */}
        <Reveal delay={0.08}>
          <p className="mt-12 font-mono text-[11px] tracking-[0.2em] text-blue">
            <span className="text-gold">CATEGORY 01</span> · BRANDING · BRANDOPS BRANDING SERVICES
          </p>
        </Reveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-[380px_1fr]">
          {/* pillar index */}
          <div className="flex flex-col border-t border-line">
            {BRANDING_PILLARS.map((p, i) => (
              <button
                key={p.num}
                onClick={() => setActive(i)}
                className={`group flex items-center justify-between border-b border-line py-3.5 text-left transition-colors ${
                  active === i ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className={`font-mono text-xs ${active === i ? 'text-gold' : 'text-muted/60'}`}>
                    {p.num}
                  </span>
                  <span className="font-heading text-base font-medium tracking-tight sm:text-lg">
                    {p.name}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`font-mono text-sm transition-all ${
                    active === i ? 'translate-x-0 text-gold opacity-100' : '-translate-x-1 opacity-0 group-hover:opacity-40'
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>

          {/* pillar detail */}
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
                <img
                  src={pillar.illustration}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-4 hidden h-36 w-36 object-contain opacity-90 mix-blend-multiply sm:block lg:h-44 lg:w-44"
                />
                <span className="font-mono text-[11px] tracking-[0.2em] text-blue">
                  PILLAR {pillar.num} / 08
                </span>

                <h3 className="mt-4 max-w-[calc(100%-9rem)] font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {pillar.name}
                </h3>
                <p className="mt-3 max-w-xl font-body text-[15px] italic leading-relaxed text-muted">
                  “{pillar.tagline}”
                </p>

                <ul className="mt-6 space-y-1.5 font-mono text-[12px] leading-relaxed text-ink sm:text-[13px]">
                  {pillar.items.map((item, i) => (
                    <li key={item.name} className="flex gap-2">
                      <span aria-hidden className="shrink-0 text-gold">
                        {i === pillar.items.length - 1 ? '└──' : '├──'}
                      </span>
                      <span>
                        {item.name}
                        <span className="text-muted"> ({item.desc})</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
                  <a
                    href={CONTACT.bookHref}
                    className="group inline-flex items-center gap-2 font-heading text-sm font-semibold text-blue"
                  >
                    Start with pillar {pillar.num}
                    <span aria-hidden className="font-mono text-gold transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <Link
                    to="/services"
                    className="font-mono text-[11px] tracking-[0.15em] text-muted transition-colors hover:text-blue"
                  >
                    ALL 8 PILLARS ↗
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <div aria-hidden className="bg-dots pointer-events-none absolute -right-8 -top-8 h-40 w-40 opacity-60" />
          </div>
        </div>

        {/* CATEGORY 02 · COMMUNICATION */}
        <Reveal delay={0.1}>
          <p className="mt-14 font-mono text-[11px] tracking-[0.2em] text-blue">
            <span className="text-gold">CATEGORY 02</span> · COMMUNICATION
          </p>
          <div className="relative mt-6 grid gap-6 overflow-hidden rounded-xl border border-line bg-white p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
            <Corners />
            <img
              src={comm.illustration}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-4 hidden h-36 w-36 rotate-6 object-contain opacity-20 mix-blend-multiply md:block"
            />
            <div>
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-ink">
                {comm.name}
              </h3>
              <p className="mt-2 max-w-2xl font-body text-[15px] italic text-muted">“{comm.tagline}”</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {comm.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-mist px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-line bg-white px-5 py-3 font-heading text-sm font-semibold text-blue transition-all hover:-translate-y-0.5 hover:border-blue/40 hover:bg-frost md:self-center"
            >
              Explore communication
              <span aria-hidden className="font-mono text-gold">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
