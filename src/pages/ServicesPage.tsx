import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { BRANDING_PILLARS, COMMUNICATION_SERVICES, CONTACT } from '../lib/data';
import { PageHero, Reveal, Corners, SectionTag, PrimaryButton, GhostButton } from '../components/ui';
import Cta from '../components/Cta';

const PROCESS = [
  {
    num: '01',
    name: 'Strategy',
    desc: 'We define direction, structure, and positioning to support every design decision.',
    chips: ['Brand strategy', 'Messaging', 'Roadmap'],
  },
  {
    num: '02',
    name: 'Research',
    desc: 'Competitor audits, customer insight, and category codes, mapped before a single pixel moves.',
    chips: ['Competitor audit', 'Customer insight', 'Category mapping'],
  },
  {
    num: '03',
    name: 'Design',
    desc: 'Identity, website, and asset design in structured sprints, with review checkpoints at every stage.',
    chips: ['Identity', 'Web & social', 'Print & video'],
  },
  {
    num: '04',
    name: 'Build',
    desc: 'Development, production, and systemization: templates and guidelines so the brand scales without us.',
    chips: ['Development', 'Templates', 'Guidelines'],
  },
  {
    num: '05',
    name: 'Launch & Grow',
    desc: 'Rollout support, launch assets, and optional retainers to keep momentum compounding after day one.',
    chips: ['Rollout', 'Launch kit', 'Retainers'],
  },
];

function PillarCard({
  pillar,
  open,
  onToggle,
}: {
  pillar: (typeof BRANDING_PILLARS)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group relative rounded-xl border bg-white transition-all ${
        open ? 'border-blue/40 shadow-[0_24px_50px_-28px_rgba(27,42,74,0.3)]' : 'border-line hover:border-blue/30'
      }`}
    >
      <Corners />
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-7">
        <div className="flex items-center gap-5 sm:gap-7">
          <img
            src={pillar.illustration}
            alt=""
            aria-hidden
            className="hidden h-20 w-20 shrink-0 object-contain mix-blend-multiply sm:block sm:h-24 sm:w-24"
          />
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-blue">
              <span className="text-gold">PILLAR {pillar.num}</span> / 08
            </span>
            <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {pillar.name}
            </h3>
            <p className="mt-1.5 font-body text-sm italic text-muted">“{pillar.tagline}”</p>
          </div>
        </div>
        <Plus
          size={18}
          className={`shrink-0 text-gold transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-6 pb-6 pt-5 sm:px-7 sm:pb-7">
              <ul className="space-y-2 font-mono text-[12px] leading-relaxed text-ink sm:text-[13px]">
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
              <a
                href={CONTACT.bookHref}
                className="group/cta mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-blue"
              >
                Start with pillar {pillar.num}
                <span aria-hidden className="font-mono text-gold transition-transform group-hover/cta:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main>
      <PageHero
        crumb="SERVICES"
        title={
          <>
            Two categories. <span className="text-blue">Every capability.</span>
          </>
        }
        intro="Everything we do lives under two roofs: Branding and Communication. Eight branding pillars that build the brand from research to governance, and a communication engine that makes it show up, in market, in the room, on every channel."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href={CONTACT.bookHref}>Book a Free Brand Diagnostic</PrimaryButton>
          <GhostButton href="/work">See the results first</GhostButton>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#branding"
            className="rounded-full border border-line bg-white/80 px-4 py-1.5 font-mono text-[11px] tracking-[0.15em] text-blue transition-colors hover:border-gold"
          >
            <span className="text-gold">01</span> · BRANDING
          </a>
          <a
            href="#communication"
            className="rounded-full border border-line bg-white/80 px-4 py-1.5 font-mono text-[11px] tracking-[0.15em] text-blue transition-colors hover:border-gold"
          >
            <span className="text-gold">02</span> · COMMUNICATION
          </a>
        </div>
      </PageHero>

      {/* CATEGORY 01 · BRANDING */}
      <section id="branding" className="relative bg-paper pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTag label="CATEGORY 01 · BRANDING" index={1} total={2} />

          <Reveal>
            <h2 className="mt-10 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Brandops Branding Services.
            </h2>
            <p className="mt-4 max-w-2xl font-body text-base text-muted">
              Eight pillars, one system. From understanding your market to protecting your brand
              long term, each pillar is a complete engagement on its own, and they compound when
              stacked.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {BRANDING_PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={0.03 * i}>
                <PillarCard
                  pillar={p}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 02 · COMMUNICATION */}
      <section id="communication" className="relative bg-mist pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
          <SectionTag label="CATEGORY 02 · COMMUNICATION" index={2} total={2} />

          <Reveal>
            <h2 className="mt-10 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Communication.
            </h2>
            <p className="mt-4 max-w-2xl font-body text-base text-muted">
              The brand is the thinking. Communication is how it shows up: events, corporate
              campaigns, and the assets that carry your brand into the room.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {COMMUNICATION_SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={0.04 * i}>
                <div className="group relative grid gap-6 rounded-xl border border-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-[0_24px_50px_-28px_rgba(27,42,74,0.3)] sm:p-9 md:grid-cols-[260px_1fr_auto] md:items-start md:gap-10">
                  <Corners />
                  <div>
                    <img
                      src={s.illustration}
                      alt=""
                      aria-hidden
                      className="mb-4 hidden h-24 w-24 object-contain mix-blend-multiply sm:block"
                    />
                    <span className="font-mono text-[11px] tracking-[0.2em] text-blue">
                      <span className="text-gold">SERVICE {s.num}</span>
                    </span>
                    <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      {s.name}
                    </h3>
                    <p className="mt-2 font-body text-sm italic text-muted">“{s.tagline}”</p>
                  </div>

                  <div>
                    <p className="font-body text-[15px] leading-relaxed text-muted">{s.desc}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-line bg-mist px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={CONTACT.bookHref}
                    className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-line bg-white px-4 py-2.5 font-heading text-sm font-semibold text-blue transition-all hover:border-blue/40 hover:bg-frost md:self-center"
                  >
                    Start here
                    <span aria-hidden className="font-mono text-gold transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-dots-dark absolute inset-0" aria-hidden />
        <div
          aria-hidden
          className="absolute right-[-200px] top-[-160px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.55),transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionTag label="A COLLABORATIVE APPROACH" index={1} total={1} dark />

          <Reveal>
            <h2 className="mt-12 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The process. <span className="text-muted-dark">Five steps, zero surprises.</span>
            </h2>
          </Reveal>

          <div className="mt-12 space-y-4">
            {PROCESS.map((p) => (
              <Reveal key={p.num} delay={0.04}>
                <div className="relative grid gap-4 rounded-xl border border-line-dark bg-ink-2/70 p-6 backdrop-blur transition-colors hover:border-sky/30 sm:p-8 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-10">
                  <div>
                    <span className="font-heading text-4xl font-semibold tracking-tight text-gold-soft sm:text-5xl">
                      {p.num}
                    </span>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-dark">
                      STEP {p.num} /05
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-xl font-body text-[15px] leading-relaxed text-muted-dark">
                      {p.desc}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2 md:max-w-[200px] md:justify-end">
                    {p.chips.map((c) => (
                      <li
                        key={c}
                        className="rounded-md border border-line-dark bg-ink-3/70 px-3 py-1.5 font-mono text-[10px] tracking-wide text-muted-dark"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-line-dark bg-gradient-to-r from-blue-deep/60 to-ink-2 p-7 sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  Not sure which pillar fits?
                </p>
                <p className="mt-2 font-body text-sm text-muted-dark">
                  The free diagnostic tells you exactly where your brand leaks trust, and which pillar fixes it.
                </p>
              </div>
              <PrimaryButton href={CONTACT.bookHref} className="shrink-0">
                Book the diagnostic
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </main>
  );
}
