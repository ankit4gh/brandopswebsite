import { COMPARISON_ROWS } from '../lib/data';
import { SectionTag, Reveal, Mark } from './ui';

const DIFFS = [
  {
    num: '01',
    title: 'We start with WHO you are',
    desc: "We don't apply templates. We decode your identity and build your brand from the inside out.",
  },
  {
    num: '02',
    title: 'Everything under one roof',
    desc: "Logo. Website. Social media. Print. Video. You don't need 5 vendors. You need one partner.",
  },
  {
    num: '03',
    title: 'We speak your language',
    desc: 'No design jargon. We talk results: more inquiries, higher pricing power, better conversions.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="WHY BRANDOPS" index={6} />

        <Reveal>
          <h2 className="mt-12 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            How we're different. <span className="text-muted">By design.</span>
          </h2>
        </Reveal>

        {/* differentiators */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {DIFFS.map((d, i) => (
            <Reveal key={d.num} delay={0.06 * i} className="h-full">
              <div className="flex h-full flex-col bg-white p-7 transition-colors hover:bg-mist">
                <span className="font-mono text-[11px] tracking-[0.2em] text-blue">{d.num}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-ink">
                  {d.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* legacy vs brandops framing */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-line bg-white/60 p-7">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted">
                LEGACY · A TEMPLATE SHOP
              </span>
              <p className="mt-3 font-heading text-lg font-medium text-muted">
                Applies trends. Ships logos. Every brand ends up looking the same.
              </p>
              <ul className="mt-5 space-y-2 font-mono text-xs text-muted">
                <li>&#10005; Design first, strategy never</li>
                <li>&#10005; Five vendors, five versions of your brand</li>
                <li>&#10005; Deliverables, not outcomes</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-xl border border-blue/30 bg-gradient-to-br from-mist to-frost p-7 shadow-[0_20px_50px_-24px_rgba(27,42,74,0.35)]">
              <span className="font-mono text-[11px] tracking-[0.2em] text-blue">BRANDOPS</span>
              <p className="mt-3 font-heading text-lg font-medium text-ink">
                Decodes who you are. Builds a system that compounds across every touchpoint.
              </p>
              <ul className="mt-5 space-y-2 font-mono text-xs text-blue-deep">
                <li>✓ Positioning before pixels</li>
                <li>✓ One partner: identity → web → social → video</li>
                <li>✓ One metric: does it convert?</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* comparison table */}
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-x-auto rounded-xl border border-line bg-white">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-6 py-4 font-mono text-[11px] font-medium tracking-[0.18em] text-muted">
                    FEATURE
                  </th>
                  <th className="bg-frost px-6 py-4">
                    <span className="flex items-center gap-2 font-heading text-sm font-semibold text-ink">
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-blue font-heading text-[11px] font-bold text-white">
                        B
                      </span>
                      BrandOps
                    </span>
                  </th>
                  <th className="px-6 py-4 font-heading text-sm font-medium text-muted">
                    Typical agency
                  </th>
                  <th className="px-6 py-4 font-heading text-sm font-medium text-muted">
                    Freelancer
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-line last:border-0">
                    <td className="px-6 py-3.5 font-body text-sm font-medium text-ink">
                      {row.feature}
                    </td>
                    <td className="bg-frost px-6 py-3.5">
                      <Mark v={row.brandops} hero />
                    </td>
                    <td className="px-6 py-3.5">
                      <Mark v={row.agency} />
                    </td>
                    <td className="px-6 py-3.5">
                      <Mark v={row.freelancer} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
