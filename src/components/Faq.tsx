import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FAQS, CONTACT } from '../lib/data';
import { SectionTag, Reveal } from './ui';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag label="GOT QUESTIONS" index={9} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                We've got answers.
              </h2>
              <p className="mt-4 font-body text-base text-muted">
                Still have questions? Let's talk — quick 15-minute call, pick a time that works
                for you.
              </p>
              <a
                href={CONTACT.bookHref}
                className="group mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-blue"
              >
                Let's talk
                <span aria-hidden className="font-mono transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Reveal>
          </div>

          <div className="border-t border-line">
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-line">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-blue">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-heading text-base font-medium tracking-tight text-ink sm:text-lg">
                      {f.q}
                    </span>
                  </span>
                  <Plus
                    size={16}
                    className={`shrink-0 text-blue transition-transform duration-300 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-10 pr-8 font-body text-sm leading-relaxed text-muted">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
