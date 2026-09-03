import { useState } from 'react';
import { CONTACT } from '../lib/data';
import { Reveal, Corners, PrimaryButton, GhostButton } from './ui';

export default function Cta() {
  const [copied, setCopied] = useState(false);
  const cmd = 'npx brandops book --15min';

  const copy = () => {
    navigator.clipboard?.writeText(cmd).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid-lines absolute inset-0 opacity-60" aria-hidden />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.6),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-line-dark bg-ink-2/80 px-4 py-1.5 font-mono text-[11px] tracking-[0.15em] text-sky">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-gold" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            AVAILABLE FOR PROJECTS
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-8 max-w-3xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Let's build something <span className="text-gold-soft">great.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base text-muted-dark sm:text-lg">
            Ready to start your next project? A quick 15-minute call, pick a time that works for
            you, and leave with an honest read on your brand either way.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href={CONTACT.bookHref}>Book a free call</PrimaryButton>
            <GhostButton href={`mailto:${CONTACT.email}`} dark>
              {CONTACT.email}
            </GhostButton>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <button
              onClick={copy}
              className="group relative flex items-center gap-3 rounded-lg border border-line-dark bg-ink-2 px-5 py-3 font-mono text-[13px] text-white/90 transition-transform hover:-translate-y-0.5"
              title="Copy"
            >
              <Corners dark />
              <span className="text-sky">$</span>
              <span>{cmd}</span>
              <span className="ml-2 rounded border border-line-dark px-2 py-0.5 text-[10px] tracking-wider text-muted-dark group-hover:text-sky">
                {copied ? 'COPIED ✓' : 'COPY'}
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
