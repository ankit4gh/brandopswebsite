import { Link } from 'react-router-dom';
import { CONTACT, PRISM } from '../lib/data';
import { PageHero, Reveal, Corners, SectionTag, PrimaryButton, GhostButton } from '../components/ui';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Strategy before pixels',
    desc: "Design without positioning is decoration. Every engagement starts with who you are and where you win, the visuals follow.",
  },
  {
    num: '02',
    title: 'One partner, every capability',
    desc: "Logo, website, social, print, video, built as one system by one team. No version drift across five vendors.",
  },
  {
    num: '03',
    title: 'Results, not jargon',
    desc: 'We report in the language of business: inquiries, pricing power, conversions. If it doesn\u2019t move a number, it doesn\u2019t ship.',
  },
  {
    num: '04',
    title: 'Fortune 500 craft, honest pricing',
    desc: 'The same strategic rigor used inside global companies, with transparent starting prices instead of agency markups.',
  },
];

const FOUNDERS = [
  {
    name: 'Ankit Shah',
    role: 'Founder',
    title: 'FOUNDER · BRAND STRATEGIST',
    photo: '/founders/ankit-shah.jpg',
    facts: ['ex–Fortune 500 brand builder', 'Brandon Hall Excellence Awards', 'based in Navi Mumbai, India'],
  },
  {
    name: 'Deepali Shah',
    role: 'Founder',
    title: 'FOUNDER · BRAND STRATEGIST',
    photo: '/founders/deepali-shah.jpg',
    facts: ['ex–Fortune 500 brand builder', 'Brandon Hall Excellence Awards', 'based in Navi Mumbai, India'],
  },
];

const MILESTONES = [
  { year: 'FORTUNE 500', text: 'Built global brand systems for learning & development inside Fortune 500 companies, across 40+ countries.' },
  { year: '4× AWARDS', text: 'Programs carrying those brand systems won multiple Brandon Hall Excellence Awards.' },
  { year: 'THE REALIZATION', text: 'Small businesses and professionals deserved the same strategic approach, without the agency markup.' },
  { year: 'THEBRANDOPS', text: 'A studio in Navi Mumbai making world-class branding accessible to businesses across India, powered by the PRISM Method.' },
];

export default function About() {
  return (
    <main>
      <PageHero
        crumb="ABOUT US"
        title={
          <>
            Designs with purpose.{' '}
            <span className="text-blue">Brands with impact.</span>
          </>
        }
        intro="TheBrandOps is a Brand Strategy & Identity Design studio in Navi Mumbai. We help businesses build clear, premium brands that drive growth through strategy, design, and execution, identities, websites, and marketing systems that scale."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href={CONTACT.bookHref}>Talk to us</PrimaryButton>
          <GhostButton href="/work">See the work</GhostButton>
        </div>
      </PageHero>

      {/* founder story */}
      <section className="relative bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionTag label="THE STORY" index={1} total={4} />

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* founders */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {FOUNDERS.map((f, i) => (
                <Reveal key={f.name} delay={0.06 * i} className="h-full">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-ink text-white">
                    <Corners dark />
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={f.photo}
                        alt={`${f.name}, ${f.role}`}
                        className="h-full w-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    </div>
                    <div className="relative -mt-14 p-5">
                      <h3 className="font-heading text-xl font-semibold tracking-tight">{f.name}</h3>
                      <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-gold-soft">
                        {f.title}
                      </p>
                      <div className="mt-4 space-y-1.5 border-t border-line-dark pt-4 font-mono text-[10px] text-muted-dark">
                        {f.facts.map((fact) => (
                          <p key={fact}>
                            <span className="text-sky">&gt;</span> {fact}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div>
              <Reveal>
                <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                  World-class branding,{' '}
                  <span className="text-blue">without the agency markup.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted sm:text-lg">
                  After building brands for Fortune 500 companies, Ankit and Deepali realized
                  small businesses and professionals deserved the same strategic approach, without
                  the agency markup. TheBrandOps was born to make world-class branding accessible
                  to businesses across India.
                </p>
              </Reveal>

              {/* milestones */}
              <div className="mt-10 border-t border-line">
                {MILESTONES.map((m, i) => (
                  <Reveal key={m.year} delay={0.05 * i}>
                    <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[160px_1fr] sm:gap-8">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-blue">
                        {m.year}
                      </span>
                      <p className="font-body text-sm leading-relaxed text-muted">{m.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* principles */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionTag label="OPERATING PRINCIPLES" index={2} total={4} />

          <Reveal>
            <h2 className="mt-12 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              How we work. <span className="text-muted">Non-negotiable.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.num} delay={0.05 * i} className="h-full">
                <div className="flex h-full flex-col bg-white p-7 transition-colors hover:bg-mist sm:p-8">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-blue">{p.num}</span>
                  <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRISM summary */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-dots-dark absolute inset-0" aria-hidden />
        <div
          aria-hidden
          className="absolute left-[-180px] bottom-[-160px] h-[440px] w-[440px] rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.55),transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionTag label="THE ENGINE" index={3} total={4} dark />

          <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Every project runs on{' '}
                <span className="text-sky">the PRISM Method.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <Link
                to="/#method"
                className="group inline-flex items-center gap-2 font-heading text-sm font-semibold text-sky"
              >
                Explore the method
                <span aria-hidden className="font-mono transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-5">
            {PRISM.map((p, i) => (
              <Reveal key={p.letter} delay={0.05 * i} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-line-dark bg-ink-2/70 p-5 backdrop-blur transition-colors hover:border-sky/30">
                  <span className="font-heading text-3xl font-bold text-sky">{p.letter}</span>
                  <h3 className="mt-3 font-heading text-sm font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1.5 font-body text-xs leading-relaxed text-muted-dark">
                    {p.tagline}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials index={4} total={4} />
      <Cta />
    </main>
  );
}
