import { SERVICES, CONTACT } from '../lib/data';
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
    desc: 'Competitor audits, customer insight, and category codes — mapped before a single pixel moves.',
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
    desc: 'Development, production, and systemization — templates and guidelines so the brand scales without us.',
    chips: ['Development', 'Templates', 'Guidelines'],
  },
  {
    num: '05',
    name: 'Launch & Grow',
    desc: 'Rollout support, launch assets, and optional retainers to keep momentum compounding after day one.',
    chips: ['Rollout', 'Launch kit', 'Retainers'],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        crumb="SERVICES"
        title={
          <>
            One partner. <span className="text-blue">Every capability.</span>
          </>
        }
        intro="Logo, website, social, print, video — you don't need five vendors. Six focused service lines, each with a transparent starting price and a clear scope. Choose your starting point."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href={CONTACT.bookHref}>Book a Free Brand Diagnostic</PrimaryButton>
          <GhostButton href="/work">See the results first</GhostButton>
        </div>
      </PageHero>

      {/* catalog */}
      <section className="relative bg-paper pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTag label="FULL CATALOG" index={1} total={2} />

          <div className="mt-12 space-y-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={0.04 * i}>
                <div className="group relative grid gap-6 rounded-xl border border-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-[0_24px_50px_-28px_rgba(27,42,74,0.3)] sm:p-9 md:grid-cols-[240px_1fr_auto] md:items-start md:gap-10">
                  <Corners />
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-blue">
                      {s.num} · {s.tag}
                    </span>
                    <h2 className="mt-3 font-heading text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      {s.name}
                    </h2>
                    <p className="mt-2 inline-block rounded-full border border-line bg-frost px-3 py-1 font-mono text-[11px] text-blue-deep">
                      {s.price}
                    </p>
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
                    <span aria-hidden className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
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
          <SectionTag label="A COLLABORATIVE APPROACH" index={2} total={2} dark />

          <Reveal>
            <h2 className="mt-12 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The process. <span className="text-muted-dark">Five steps, zero surprises.</span>
            </h2>
          </Reveal>

          <div className="mt-12 space-y-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.num} delay={0.05 * i}>
                <div className="relative grid gap-4 rounded-xl border border-line-dark bg-ink-2/70 p-6 backdrop-blur transition-colors hover:border-sky/30 sm:p-8 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-10">
                  <div>
                    <span className="font-heading text-4xl font-semibold tracking-tight text-sky/90 sm:text-5xl">
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
                  Not sure which starting point fits?
                </p>
                <p className="mt-2 font-body text-sm text-muted-dark">
                  The free diagnostic tells you exactly where your brand leaks trust — and which service fixes it.
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
