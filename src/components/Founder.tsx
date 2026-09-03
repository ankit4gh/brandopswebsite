import { SectionTag, Reveal, Corners } from './ui';
import { CONTACT } from '../lib/data';

const FOUNDERS = [
  {
    name: 'Ankit Shah',
    title: 'FOUNDER · BRAND STRATEGIST',
    photo: '/founders/ankit-shah.jpg',
  },
  {
    name: 'Deepali Shah',
    title: 'FOUNDER · BRAND STRATEGIST',
    photo: '/founders/deepali-shah.jpg',
  },
];

export default function Founder() {
  return (
    <section id="founder" className="relative bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="MEET THE FOUNDERS" index={8} />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* founder photo cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={0.06 * i} className="h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-ink text-white">
                  <Corners dark />
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                  </div>
                  <div className="relative -mt-12 p-4 sm:p-5">
                    <h3 className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
                      {f.name}
                    </h3>
                    <p className="mt-1 font-mono text-[9px] tracking-[0.15em] text-gold-soft sm:text-[10px]">
                      {f.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal delay={0.08}>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                World-class branding,{' '}
                <span className="text-blue">without the agency markup.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted sm:text-lg">
                After building brands for Fortune 500 companies, Ankit and Deepali realized small
                businesses and professionals deserved the same strategic approach, without the
                agency markup. TheBrandOps was born to make world-class branding accessible to
                businesses across India.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 space-y-1.5 font-mono text-[11px] text-muted">
                <p><span className="text-gold">&gt;</span> ex–Fortune 500 brand builders</p>
                <p><span className="text-gold">&gt;</span> Brandon Hall Excellence Awards</p>
                <p><span className="text-gold">&gt;</span> based in Navi Mumbai, India</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT.bookHref}
                  className="group inline-flex items-center gap-2 font-heading text-sm font-semibold text-blue"
                >
                  Talk to the founders
                  <span aria-hidden className="font-mono text-gold transition-transform group-hover:translate-x-1">→</span>
                </a>
                <span className="font-mono text-xs text-muted">·</span>
                <a href={CONTACT.phoneHref} className="font-mono text-xs text-muted hover:text-blue">
                  {CONTACT.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
