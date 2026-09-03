import { SectionTag, Reveal, Corners } from './ui';
import { CONTACT } from '../lib/data';

export default function Founder() {
  return (
    <section id="founder" className="relative bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="MEET THE FOUNDER" index={8} />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* monogram card */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm rounded-xl border border-line bg-ink p-8 text-white">
              <Corners dark />
              <div className="bg-dots-dark absolute inset-0 rounded-xl" aria-hidden />
              <div className="relative">
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted-dark">
                  <span>FOUNDER.PROFILE</span>
                  <span className="text-sky">v1.0</span>
                </div>
                <div className="mt-8 flex h-32 w-32 items-center justify-center rounded-xl bg-blue font-heading text-5xl font-bold shadow-[0_0_50px_-10px_rgba(27,42,74,0.8)]">
                  AS
                </div>
                <h3 className="mt-8 font-heading text-2xl font-semibold tracking-tight">
                  Ankit Shah
                </h3>
                <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-sky">
                  FOUNDER · BRAND STRATEGIST
                </p>
                <div className="mt-6 space-y-1.5 border-t border-line-dark pt-5 font-mono text-[11px] text-muted-dark">
                  <p><span className="text-sky">&gt;</span> ex–Fortune 500 brand builder</p>
                  <p><span className="text-sky">&gt;</span> Brandon Hall Excellence Awards</p>
                  <p><span className="text-sky">&gt;</span> based in Navi Mumbai, India</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                World-class branding,{' '}
                <span className="text-blue">without the agency markup.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted sm:text-lg">
                After building brands for Fortune 500 companies, Ankit realized small businesses and
                professionals deserved the same strategic approach — without the agency markup.
                TheBrandOps was born to make world-class branding accessible to businesses across
                India.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT.bookHref}
                  className="group inline-flex items-center gap-2 font-heading text-sm font-semibold text-blue"
                >
                  Talk to Ankit
                  <span aria-hidden className="font-mono transition-transform group-hover:translate-x-1">→</span>
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
