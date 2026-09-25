import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Block, CaseStudy, GalleryImage } from '../lib/content';
import { Reveal, Corners, SectionTag } from './ui';

/* ── shared shell ───────────────────────────────────────── */
const THEME_BG: Record<string, string> = {
  light: 'bg-paper',
  tint: 'bg-mist',
  dark: 'bg-ink text-white',
};

function Shell({
  theme = 'light',
  children,
  wide = false,
}: {
  theme?: 'light' | 'tint' | 'dark';
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={`relative ${THEME_BG[theme]}`}>
      {theme === 'dark' && <div className="bg-dots-dark absolute inset-0" aria-hidden />}
      <div className={`relative mx-auto ${wide ? 'max-w-6xl' : 'max-w-5xl'} px-5 py-12 sm:px-8 sm:py-16`}>
        {children}
      </div>
    </section>
  );
}

function Kicker({ text, dark = false }: { text?: string; dark?: boolean }) {
  if (!text) return null;
  return (
    <p className={`font-mono text-[11px] tracking-[0.2em] ${dark ? 'text-sky' : 'text-blue'}`}>
      <span aria-hidden className="text-gold">〉</span> {text.toUpperCase()}
    </p>
  );
}

function Title({ text, dark = false }: { text?: string; dark?: boolean }) {
  if (!text) return null;
  return (
    <h2
      className={`mt-4 max-w-3xl font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-4xl ${
        dark ? 'text-white' : 'text-ink'
      }`}
    >
      {text}
    </h2>
  );
}

/* ── lightbox gallery ─────────────────────────────────────── */
function Lightbox({
  images,
  index,
  onClose,
  onNav,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNav: (i: number) => void;
}) {
  const prev = useCallback(
    () => onNav((index - 1 + images.length) % images.length),
    [index, images.length, onNav]
  );
  const next = useCallback(() => onNav((index + 1) % images.length), [index, images.length, onNav]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  const img = images[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-line-dark bg-ink-2 text-white transition-colors hover:border-gold hover:text-gold"
      >
        <X size={18} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-line-dark bg-ink-2/90 text-white transition-colors hover:border-gold hover:text-gold sm:left-6"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-line-dark bg-ink-2/90 text-white transition-colors hover:border-gold hover:text-gold sm:right-6"
      >
        <ChevronRight size={20} />
      </button>

      <motion.figure
        key={index}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="max-h-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt || ''}
          className="max-h-[76vh] w-auto rounded-lg border border-line-dark object-contain"
        />
        <figcaption className="mt-4 flex items-center justify-between gap-4">
          <span className="font-body text-sm text-muted-dark">{img.caption || img.alt}</span>
          <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-gold">
            {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

export function Gallery({
  kicker,
  title,
  intro,
  columns = 2,
  images,
}: {
  kicker?: string;
  title?: string;
  intro?: string;
  columns?: 2 | 3;
  images: GalleryImage[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Shell theme="tint" wide>
      <Reveal>
        <Kicker text={kicker || 'GALLERY'} />
        <Title text={title} />
        {intro && <p className="mt-3 max-w-2xl font-body text-[15px] leading-relaxed text-muted">{intro}</p>}
      </Reveal>

      <div className={`mt-8 grid gap-4 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}>
        {images.map((img, i) => (
          <Reveal key={img.src + i} delay={0.04 * i}>
            <button
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-xl border border-line bg-white text-left transition-all hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_24px_50px_-24px_rgba(27,42,74,0.35)]"
            >
              <Corners />
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt || ''}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-[0.2em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  FIG. {String(i + 1).padStart(2, '0')} · CLICK TO EXPAND
                </span>
              </div>
              {(img.caption || img.alt) && (
                <p className="flex items-center justify-between gap-3 px-4 py-3 font-body text-xs text-muted">
                  <span>{img.caption || img.alt}</span>
                  <span aria-hidden className="font-mono text-gold">↗</span>
                </p>
              )}
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <Lightbox images={images} index={open} onClose={() => setOpen(null)} onNav={setOpen} />
        )}
      </AnimatePresence>
    </Shell>
  );
}

/* ── block renderer ───────────────────────────────────────── */
export function BlockRenderer({ block, study }: { block: Block; study: CaseStudy }) {
  switch (block.type) {
    case 'overview': {
      const rows = [
        { label: 'CLIENT', value: study.client },
        { label: 'STUDIO', value: study.studio },
        { label: 'TIMELINE', value: `${study.year} · ${study.timeline}` },
        { label: 'DISCIPLINES', value: study.disciplines.join(' · ') },
      ];
      return (
        <Shell wide>
          <Reveal>
            <SectionTag label="PROJECT OVERVIEW" index={1} total={1} />
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {rows.map((r, i) => (
              <Reveal key={r.label} delay={0.04 * i} className="h-full">
                <div className="h-full bg-white p-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-blue">{r.label}</p>
                  <p className="mt-2 font-heading text-sm font-medium leading-relaxed text-ink">
                    {r.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      );
    }

    case 'text': {
      const dark = block.theme === 'dark';
      return (
        <Shell theme={block.theme || 'light'}>
          <Reveal>
            <Kicker text={block.kicker} dark={dark} />
            <Title text={block.title} dark={dark} />
          </Reveal>
          {block.paragraphs && (
            <div className="mt-5 max-w-3xl space-y-4">
              {block.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <p
                    className={`font-body text-[15px] leading-relaxed sm:text-base ${
                      dark ? 'text-muted-dark' : 'text-muted'
                    }`}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          )}
        </Shell>
      );
    }

    case 'list': {
      const dark = block.theme === 'dark';
      return (
        <Shell theme={block.theme || 'tint'}>
          <Reveal>
            <Kicker text={block.kicker} dark={dark} />
            <Title text={block.title} dark={dark} />
            {block.intro && (
              <p className={`mt-4 max-w-3xl font-body text-[15px] leading-relaxed ${dark ? 'text-muted-dark' : 'text-muted'}`}>
                {block.intro}
              </p>
            )}
          </Reveal>
          <ul className="mt-6 max-w-3xl space-y-3">
            {block.items.map((item, i) => (
              <Reveal key={i} delay={0.03 * i}>
                <li
                  className={`flex items-start gap-3 rounded-lg border p-4 font-body text-sm leading-relaxed ${
                    dark
                      ? 'border-line-dark bg-ink-2/70 text-white/85'
                      : 'border-line bg-white text-ink'
                  }`}
                >
                  <span aria-hidden className="mt-0.5 font-mono text-xs text-gold">◆</span>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
          {block.outro && (
            <Reveal delay={0.1}>
              <p className={`mt-6 max-w-3xl font-body text-[15px] leading-relaxed ${dark ? 'text-muted-dark' : 'text-muted'}`}>
                {block.outro}
              </p>
            </Reveal>
          )}
        </Shell>
      );
    }

    case 'highlight':
      return (
        <Shell theme="light">
          <Reveal>
            <div className="relative rounded-xl border border-gold/40 bg-gold/[0.07] p-7 sm:p-10">
              <span aria-hidden className="absolute left-0 top-6 bottom-6 w-1 rounded-r bg-gold" />
              <p className="font-mono text-[11px] tracking-[0.2em] text-gold">
                {(block.label || 'THE CHALLENGE IN ONE LINE').toUpperCase()}
              </p>
              <p className="mt-4 max-w-3xl font-heading text-xl font-semibold leading-relaxed tracking-tight text-ink sm:text-3xl">
                {block.text}
              </p>
            </div>
          </Reveal>
        </Shell>
      );

    case 'image':
      return (
        <Shell wide>
          <Reveal>
            <figure className="relative">
              <div className="relative overflow-hidden rounded-xl border border-line">
                <Corners />
                <img src={block.src} alt={block.alt || ''} loading="lazy" className="w-full object-cover" />
              </div>
              {block.caption && (
                <figcaption className="mt-3 font-mono text-[11px] tracking-wide text-muted">
                  <span className="text-gold">◆</span> {block.caption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        </Shell>
      );

    case 'gallery':
      return (
        <Gallery
          kicker={block.kicker}
          title={block.title}
          intro={block.intro}
          columns={block.columns}
          images={block.images}
        />
      );

    case 'pillars': {
      const dark = block.theme === 'dark';
      return (
        <Shell theme={block.theme || 'light'} wide>
          <Reveal>
            <Kicker text={block.kicker} dark={dark} />
            <Title text={block.title} dark={dark} />
            {block.intro && (
              <p className={`mt-4 max-w-2xl font-body text-[15px] leading-relaxed ${dark ? 'text-muted-dark' : 'text-muted'}`}>
                {block.intro}
              </p>
            )}
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {block.items.map((p, i) => (
              <Reveal key={p.title} delay={0.04 * i} className="h-full">
                <div className="flex h-full flex-col bg-white p-6 transition-colors hover:bg-mist sm:p-7">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      );
    }

    case 'steps':
      return (
        <section className="relative overflow-hidden bg-ink text-white">
          <div className="bg-dots-dark absolute inset-0" aria-hidden />
          <div
            aria-hidden
            className="absolute right-[-200px] top-[-160px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.6),transparent)]"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <Reveal>
              <Kicker text={block.kicker || 'THE BUILD'} dark />
              <Title text={block.title} dark />
            </Reveal>
            <div className="mt-10 space-y-4">
              {block.items.map((step, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <div className="relative grid gap-4 rounded-xl border border-line-dark bg-ink-2/70 p-6 backdrop-blur transition-colors hover:border-sky/30 sm:p-8 md:grid-cols-[220px_1fr] md:gap-10">
                    <div>
                      <span className="font-mono text-[11px] tracking-[0.2em] text-sky">
                        {String(i + 1).padStart(2, '0')}
                        {step.phase ? ` / ${step.phase.toUpperCase()}` : ''}
                      </span>
                      <div className="mt-4 hidden h-px w-16 bg-gold md:block" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 max-w-2xl font-body text-[15px] leading-relaxed text-muted-dark">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );

    case 'system':
      return (
        <Shell wide>
          <Reveal>
            <Kicker text={block.kicker || 'VISUAL IDENTITY & BRAND SYSTEM'} />
            <Title text={block.title} />
            {block.intro && (
              <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-muted">{block.intro}</p>
            )}
          </Reveal>
          <div className="mt-8 border-t border-line">
            {block.items.map((item, i) => (
              <Reveal key={item.name} delay={0.03 * i}>
                <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[220px_1fr] sm:gap-10">
                  <h3 className="font-heading text-base font-semibold tracking-tight text-ink">
                    <span className="mr-2 font-mono text-[11px] text-gold">{String(i + 1).padStart(2, '0')}</span>
                    {item.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      );

    case 'stats':
      return (
        <Shell wide>
          <Reveal>
            <Kicker text={block.kicker || 'OUTCOME'} />
            <Title text={block.title} />
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {block.items.map((r, i) => (
              <Reveal key={r.label} delay={0.04 * i} className="h-full">
                <div className="flex h-full flex-col bg-white p-6 transition-colors hover:bg-mist">
                  <p className="font-heading text-4xl font-semibold tracking-tight text-blue sm:text-5xl">
                    {r.value}
                  </p>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      );

    case 'quote':
      return (
        <Shell theme="tint">
          <Reveal>
            <figure className="rounded-xl border border-blue/25 bg-gradient-to-br from-white to-frost p-8 shadow-[0_20px_50px_-24px_rgba(27,42,74,0.35)] sm:p-10">
              <span aria-hidden className="font-heading text-4xl leading-none text-gold">“</span>
              <blockquote className="mt-2 max-w-3xl font-heading text-xl font-medium leading-relaxed tracking-tight text-ink sm:text-2xl">
                {block.text}
              </blockquote>
              <figcaption className="mt-6">
                <div className="h-px w-8 bg-gold" />
                <p className="mt-3 font-heading text-sm font-semibold text-ink">{block.name}</p>
                {block.role && (
                  <p className="mt-0.5 font-mono text-[10px] tracking-wider text-muted">
                    {block.role.toUpperCase()}
                  </p>
                )}
              </figcaption>
            </figure>
          </Reveal>
        </Shell>
      );

    case 'chips':
      return (
        <Shell wide>
          <Reveal>
            <div className="relative rounded-xl border border-line bg-white p-7 sm:p-8">
              <Corners />
              <Kicker text={block.kicker || 'SHIPPED'} />
              {block.title && (
                <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{block.title}</h3>
              )}
              <ul className="mt-4 flex flex-wrap gap-2">
                {block.items.map((d) => (
                  <li
                    key={d}
                    className="rounded-md border border-line bg-mist px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Shell>
      );

    case 'credits':
      return (
        <Shell>
          <Reveal>
            <Kicker text="CREDITS" />
          </Reveal>
          <div className="mt-6 border-t border-line">
            {block.rows.map((r, i) => (
              <Reveal key={r.label} delay={0.03 * i}>
                <div className="grid gap-1 border-b border-line py-4 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-blue">
                    {r.label.toUpperCase()}
                  </span>
                  <p className="font-body text-sm text-muted">{r.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      );

    default:
      return null;
  }
}
