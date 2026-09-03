import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ── mono section label:  〉 LABEL  [ n /9] ───────────────── */
export function SectionTag({
  label,
  index,
  total = 9,
  dark = false,
}: {
  label: string;
  index: number;
  total?: number;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between border-y py-3 font-mono text-[11px] tracking-[0.18em] sm:text-xs ${
        dark ? 'border-line-dark text-sky/80' : 'border-line text-blue'
      }`}
    >
      <span className="flex items-center gap-3">
        <span aria-hidden className="text-gold">〉</span>
        {label}
      </span>
      <span className={dark ? 'text-muted-dark' : 'text-muted'}>
        [ {index} /{total} ]
      </span>
    </div>
  );
}

/* ── plus-sign corner marks on bordered boxes ─────────────── */
export function Corners({ dark = false }: { dark?: boolean }) {
  const c = dark ? 'text-sky/50' : 'text-blue/60';
  const base = `pointer-events-none absolute font-mono text-xs leading-none select-none z-10 ${c}`;
  return (
    <>
      <span aria-hidden className={`${base} -top-[7px] -left-[5px]`}>+</span>
      <span aria-hidden className={`${base} -top-[7px] -right-[5px]`}>+</span>
      <span aria-hidden className={`${base} -bottom-[7px] -left-[5px]`}>+</span>
      <span aria-hidden className={`${base} -bottom-[7px] -right-[5px]`}>+</span>
    </>
  );
}

/* ── scroll reveal wrapper ────────────────────────────────── */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/* ── smart anchor: router Link for internal paths, <a> otherwise ─ */
function Smart({
  href,
  className,
  children,
  title,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  title?: string;
}) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} title={title}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} title={title}>
      {children}
    </a>
  );
}

/* ── buttons ──────────────────────────────────────────────── */
export function PrimaryButton({
  children,
  href,
  className = '',
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Smart
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg bg-blue px-6 py-3 font-heading text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(27,42,74,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#12203c] hover:shadow-[0_12px_28px_-8px_rgba(27,42,74,0.7)] ${className}`}
    >
      {children}
      <span aria-hidden className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
    </Smart>
  );
}

export function GhostButton({
  children,
  href,
  dark = false,
  className = '',
}: {
  children: ReactNode;
  href: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Smart
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-heading text-sm font-semibold transition-all hover:-translate-y-0.5 ${
        dark
          ? 'border-line-dark bg-ink-3/60 text-white hover:border-sky/50 hover:bg-ink-3'
          : 'border-line bg-white/70 text-ink hover:border-blue/40 hover:bg-white'
      } ${className}`}
    >
      {children}
    </Smart>
  );
}

/* ── page hero used across inner pages ────────────────────── */
export function PageHero({
  crumb,
  title,
  intro,
  children,
}: {
  crumb: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="bg-dots absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute left-1/2 top-[-240px] h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.13),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.2em] text-blue"
        >
          <span aria-hidden>〉</span> {crumb}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-6xl"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted sm:text-lg"
          >
            {intro}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ── check / partial / cross cells for comparison table ───── */
export function Mark({ v, hero = false }: { v: 'yes' | 'partial' | 'no'; hero?: boolean }) {
  if (v === 'yes')
    return (
      <span
        className={`inline-flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10px] ${
          hero ? 'bg-blue text-white' : 'bg-frost text-blue'
        }`}
      >
        ✓
      </span>
    );
  if (v === 'partial')
    return <span className="font-mono text-[11px] tracking-wide text-muted">partial</span>;
  return <span className="font-mono text-sm text-muted/50">—</span>;
}
