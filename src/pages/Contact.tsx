import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT } from '../lib/data';
import { PageHero, Reveal, Corners, SectionTag } from '../components/ui';

const INFO = [
  { icon: Phone, label: 'PHONE', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: 'EMAIL', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: 'STUDIO', value: 'Sector 29, Vashi, Navi Mumbai, 400703, India', href: undefined },
  { icon: Clock, label: 'RESPONSE TIME', value: 'Within one business day', href: undefined },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', service: 'Branding: Brand Strategy', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Interested in: ${form.service}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Project inquiry, ${form.business || form.name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main>
      <PageHero
        crumb="CONTACT US"
        title={
          <>
            Let's build something <span className="text-blue">great.</span>
          </>
        }
        intro="Ready to start your next project? A quick 15-minute call, pick a time that works for you, and leave with an honest read on your brand either way."
      >
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-1.5 font-mono text-[11px] tracking-[0.15em] text-blue-deep backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-gold" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          AVAILABLE FOR PROJECTS
        </p>
      </PageHero>

      <section className="relative bg-paper pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTag label="GET IN TOUCH" index={1} total={1} />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
            {/* info column */}
            <div>
              <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line">
                {INFO.map((item, i) => (
                  <Reveal key={item.label} delay={0.04 * i}>
                    <div className="flex items-start gap-4 bg-white p-5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-frost text-blue">
                        <item.icon size={16} />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.2em] text-blue">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block font-heading text-sm font-medium text-ink hover:text-blue"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-heading text-sm font-medium text-ink">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* quick call block */}
              <Reveal delay={0.15}>
                <div className="relative mt-6 rounded-xl border border-line-dark bg-ink p-7 text-white">
                  <Corners dark />
                  <div className="bg-dots-dark absolute inset-0 rounded-xl" aria-hidden />
                  <div className="relative">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-sky">QUICK 15-MINUTE CALL</p>
                    <p className="mt-3 font-heading text-xl font-semibold tracking-tight">
                      Pick a time that works for you.
                    </p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-dark">
                      We'll audit how your brand looks against your competitors, you keep the
                      findings either way.
                    </p>
                    <a
                      href={CONTACT.bookHref}
                      className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-blue px-5 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-[#12203c]"
                    >
                      Book a free call
                      <span aria-hidden className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* form column */}
            <Reveal delay={0.08}>
              <form
                onSubmit={onSubmit}
                className="relative rounded-xl border border-line bg-white p-7 sm:p-9"
              >
                <Corners />
                <p className="font-mono text-[11px] tracking-[0.2em] text-blue">PROJECT BRIEF</p>
                <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-ink">
                  Tell us about your project.
                </h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-muted">YOUR NAME *</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-line bg-mist px-4 py-3 font-body text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-blue focus:bg-white"
                      placeholder="Ankit Shah"
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-muted">BUSINESS / BRAND</span>
                    <input
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-line bg-mist px-4 py-3 font-body text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-blue focus:bg-white"
                      placeholder="Acme Realty"
                    />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted">INTERESTED IN</span>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-line bg-mist px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-blue focus:bg-white"
                  >
                    {[
                      'Branding: Research & Discovery',
                      'Branding: Brand Strategy',
                      'Branding: Verbal Identity',
                      'Branding: Visual Identity',
                      'Branding: Experience & Environment',
                      'Branding: Campaign & Content Systems',
                      'Branding: Marketing Systems & GTM',
                      'Branding: Brand Governance',
                      'Communication: Event & Corporate Campaign',
                      'Not sure yet, diagnose me',
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>

                <label className="mt-5 block">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted">THE PROJECT *</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none rounded-lg border border-line bg-mist px-4 py-3 font-body text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-blue focus:bg-white"
                    placeholder="What are you building, and what should your brand make people feel?"
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue px-6 py-3.5 font-heading text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(27,42,74,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#12203c] sm:w-auto"
                >
                  Send the brief
                  <span aria-hidden className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
                </button>

                {sent && (
                  <p className="mt-4 font-mono text-[11px] tracking-wide text-gold">
                    ✓ YOUR EMAIL CLIENT SHOULD OPEN WITH THE BRIEF PRE-FILLED. SEND IT, WE REPLY WITHIN A BUSINESS DAY.
                  </p>
                )}

                <p className="mt-5 font-mono text-[10px] leading-relaxed tracking-wide text-muted">
                  SUBMITTING OPENS YOUR EMAIL CLIENT, NOTHING IS STORED ON THIS SITE.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
