import { INDUSTRIES } from '../lib/data';
import { SectionTag, Reveal, Corners } from './ui';

export default function Industries() {
  return (
    <section id="industries" className="relative bg-frost">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="INDUSTRIES WE SERVE" index={3} />

        <Reveal>
          <h2 className="mt-12 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Built for <span className="text-blue">your industry.</span>
          </h2>
          <p className="mt-4 max-w-xl font-body text-base text-muted">
            No generic playbooks. Deep, category-specific systems for the markets where looking
            like the best decides who wins.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.num} delay={0.08 * i} className="h-full">
              <div className="group relative flex h-full flex-col rounded-xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_20px_40px_-20px_rgba(27,42,74,0.25)]">
                <Corners />
                <span className="font-mono text-[11px] tracking-[0.2em] text-blue">
                  {ind.num} · {ind.tag}
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-ink">
                  {ind.name}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted">{ind.desc}</p>
                <div className="mt-auto pt-6">
                  <span className="inline-block rounded-md bg-mist px-3 py-1.5 font-mono text-[11px] text-blue-deep">
                    {ind.stat}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
