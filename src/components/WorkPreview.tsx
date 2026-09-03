import { Link } from 'react-router-dom';
import { useCaseStudies } from '../lib/content';
import { SectionTag, Reveal, Corners } from './ui';

export default function WorkPreview() {
  const studies = useCaseStudies();

  return (
    <section id="work" className="relative bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="SELECTED WORK" index={4} />

        <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Proof, not promises.{' '}
              <span className="text-muted">Case studies with receipts.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 font-heading text-sm font-semibold text-blue"
            >
              All case studies
              <span aria-hidden className="font-mono text-gold transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </Reveal>
        </div>

        {studies && (
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {studies.map((cs, i) => (
              <Reveal key={cs.slug} delay={0.06 * i} className="h-full">
                <Link
                  to={`/work/${cs.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_24px_50px_-24px_rgba(27,42,74,0.35)]"
                >
                  <Corners />
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-ink/60 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-white backdrop-blur">
                      <span className="text-gold-soft">{cs.num}</span> · {cs.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-ink">
                      {cs.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-muted">
                      {cs.summary}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <span className="rounded-md bg-frost px-3 py-1.5 font-mono text-[11px] text-blue-deep">
                        {cs.cardStats[0].value} · {cs.cardStats[0].label}
                      </span>
                      <span
                        aria-hidden
                        className="font-mono text-sm text-gold transition-transform group-hover:translate-x-1"
                      >
                        →
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
  );
}
