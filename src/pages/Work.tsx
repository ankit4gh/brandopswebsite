import { Link } from 'react-router-dom';
import { useCaseStudies } from '../lib/content';
import { PageHero, Reveal, Corners, SectionTag } from '../components/ui';
import Cta from '../components/Cta';

export default function Work() {
  const studies = useCaseStudies();

  return (
    <main>
      <PageHero
        crumb="CASE STUDIES"
        title={
          <>
            Work that moved the numbers,{' '}
            <span className="text-blue">not just the pixels.</span>
          </>
        }
        intro="Every engagement runs on the PRISM Method — and every case study below reports the same way: the challenge, the build, and the results. No mood boards without metrics."
      >
        <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-muted">
          {studies ? studies.length : '…'} CASE STUDIES · 4 INDUSTRIES · ONE METHOD
        </p>
      </PageHero>

      <section className="relative bg-paper pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTag label="THE ARCHIVE" index={1} total={1} />

          {!studies ? (
            <p className="mt-16 text-center font-mono text-xs tracking-[0.2em] text-muted">
              <span className="text-gold">〉</span> LOADING
              <span className="animate-blink text-blue"> ▌</span>
            </p>
          ) : (
            <div className="mt-12 space-y-8">
              {studies.map((cs, i) => (
                <Reveal key={cs.slug} delay={0.05 * i}>
                  <Link
                    to={`/work/${cs.slug}`}
                    className="group relative grid overflow-hidden rounded-xl border border-line bg-white transition-all hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_28px_60px_-28px_rgba(27,42,74,0.4)] md:grid-cols-[1.1fr_1fr]"
                  >
                    <Corners />
                    <div className="relative h-64 overflow-hidden md:h-auto md:min-h-[320px]">
                      <img
                        src={cs.image}
                        alt={cs.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                      <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-ink/60 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-white backdrop-blur">
                        <span className="text-gold-soft">{cs.num}</span> · {cs.tag}
                      </span>
                      <span className="absolute bottom-5 left-5 font-mono text-[11px] tracking-[0.15em] text-white/90">
                        {cs.year} · {cs.timeline.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex flex-col p-7 sm:p-9">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-blue">
                        {cs.industry.toUpperCase()}
                      </span>
                      <h2 className="mt-3 font-heading text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
                        {cs.title}
                      </h2>
                      <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                        {cs.summary}
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {cs.cardStats.slice(0, 2).map((r) => (
                          <div key={r.label} className="rounded-lg border border-line bg-mist p-3.5">
                            <p className="font-heading text-2xl font-semibold tracking-tight text-blue">
                              {r.value}
                            </p>
                            <p className="mt-1 font-body text-[11px] leading-snug text-muted">
                              {r.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-6">
                        <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-blue">
                          Read the case study
                          <span aria-hidden className="font-mono text-gold transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Cta />
    </main>
  );
}
