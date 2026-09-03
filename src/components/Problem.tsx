import { SectionTag, Reveal, Corners } from './ui';

const STATS = [
  { value: '3 sec', label: 'Time your audience takes to decide whether to trust you, or scroll past.' },
  { value: '100+', label: 'Premium designs shipped across industries, from startups to Fortune 500.' },
  { value: '1', label: 'Partner. Logo, website, social, print, video, you don’t need 5 vendors.' },
];

export default function Problem() {
  return (
    <section id="problem" className="relative bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="THE PROBLEM" index={1} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                Right now, your competitor is{' '}
                <span className="text-blue">stealing your customers.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted sm:text-lg">
                Not because they're better. Not because they're cheaper. But because when someone
                searches for what you offer, your competitor's website, social media, and branding
                makes them <em className="font-semibold not-italic text-ink">look</em> more
                trustworthy.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="relative mt-8 inline-block rounded-lg border border-line bg-white px-5 py-4">
                <Corners />
                <p className="font-mono text-sm leading-relaxed text-ink">
                  <span className="text-blue">&gt;</span> You lose the customer before they even
                  call you.
                  <br />
                  <span className="text-blue">&gt;</span> That's the real cost of bad branding.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col divide-y divide-line border-y border-line">
            {STATS.map((s, i) => (
              <Reveal key={s.value} delay={0.08 * i}>
                <div className="flex items-baseline gap-6 py-6">
                  <span className="w-32 shrink-0 whitespace-nowrap font-heading text-4xl font-semibold tracking-tight text-blue sm:text-5xl">
                    {s.value}
                  </span>
                  <p className="font-body text-sm leading-relaxed text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
