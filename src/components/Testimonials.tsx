import { TESTIMONIALS } from '../lib/data';
import { SectionTag, Reveal } from './ui';

export default function Testimonials({
  index = 7,
  total = 9,
}: {
  index?: number;
  total?: number;
}) {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink text-white">
      <div className="bg-dots-dark absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute left-[-180px] bottom-[-160px] h-[440px] w-[440px] rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.55),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="TESTIMONIALS" index={index} total={total} dark />

        <Reveal>
          <h2 className="mt-12 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Used by the best teams.{' '}
            <span className="text-muted-dark">Trusted by global leaders.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.05 * i} className="h-full">
              <figure className="flex h-full flex-col rounded-xl border border-line-dark bg-ink-2/70 p-6 backdrop-blur transition-colors hover:border-sky/30">
                <span aria-hidden className="font-heading text-3xl leading-none text-gold">
                  “
                </span>
                <blockquote className="mt-2 font-body text-sm leading-relaxed text-white/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto pt-6">
                  <div className="h-px w-8 bg-gold" />
                  <p className="mt-3 font-heading text-sm font-semibold">{t.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] tracking-wider text-muted-dark">
                    {t.role.toUpperCase()}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
