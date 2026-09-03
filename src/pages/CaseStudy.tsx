import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCaseStudies } from '../lib/content';
import { CONTACT } from '../lib/data';
import { Reveal, Corners, SectionTag, PrimaryButton } from '../components/ui';
import { BlockRenderer } from '../components/blocks';

function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-paper pt-28">
      <p className="font-mono text-xs tracking-[0.2em] text-muted">
        <span className="text-gold">〉</span> LOADING CASE STUDY
        <span className="animate-blink text-blue"> ▌</span>
      </p>
    </main>
  );
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const studies = useCaseStudies();

  if (!studies) return <Loading />;

  const cs = studies.find((s) => s.slug === slug);
  if (!cs) return <Navigate to="/work" replace />;

  const idx = studies.findIndex((s) => s.slug === cs.slug);
  const next = studies[(idx + 1) % studies.length];

  return (
    <main>
      {/* hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div className="bg-dots absolute inset-0" aria-hidden />
        <div
          aria-hidden
          className="absolute left-1/2 top-[-240px] h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.13),transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8">
          <motion.nav
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-muted"
          >
            <Link to="/work" className="text-blue hover:underline">
              CASE STUDIES
            </Link>
            <span aria-hidden className="text-gold">/</span>
            <span>{cs.tag}</span>
            <span aria-hidden className="text-gold">/</span>
            <span>{cs.num}</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-6xl"
          >
            {cs.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted sm:text-lg"
          >
            {cs.summary}
          </motion.p>

          {/* hero image */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="relative mt-10"
          >
            <div className="relative overflow-hidden rounded-xl border border-line">
              <Corners />
              <img
                src={cs.image}
                alt={cs.imageAlt}
                className="h-[300px] w-full object-cover sm:h-[440px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
              <span className="absolute bottom-4 left-5 font-mono text-[10px] tracking-[0.2em] text-white/90">
                <span className="text-gold-soft">FIG. {cs.num}</span> · {cs.tag}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* editable content blocks — defined in /public/content/case-studies.json */}
      {cs.sections.map((block, i) => (
        <BlockRenderer key={i} block={block} study={cs} />
      ))}

      {/* next case + CTA */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-grid-lines absolute inset-0 opacity-60" aria-hidden />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[480px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.6),transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionTag label="KEEP READING" index={1} total={1} dark />

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <Link to={`/work/${next.slug}`} className="group block">
                <p className="font-mono text-[11px] tracking-[0.2em] text-gold-soft">
                  NEXT CASE STUDY · {next.num}
                </p>
                <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-sky sm:text-4xl">
                  {next.title}
                </h2>
                <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-sky">
                  Read it
                  <span aria-hidden className="font-mono transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-line-dark bg-ink-2/80 p-7 backdrop-blur sm:p-8">
                <p className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  Want results like these?
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-dark">
                  Book a free 15-minute brand diagnostic — we'll audit how your brand looks against
                  your competitors, and you keep the findings either way.
                </p>
                <div className="mt-6">
                  <PrimaryButton href={CONTACT.bookHref}>Book a Free Brand Diagnostic</PrimaryButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
