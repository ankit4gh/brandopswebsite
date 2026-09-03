import { useEffect, useState } from 'react';

/* ───────────────────────────────────────────────────────
   EDITABLE CASE STUDY CONTENT SYSTEM
   ───────────────────────────────────────────────────────
   All case studies live in ONE editable file:

       public/content/case-studies.json

   • To add pictures: drop image files into  public/uploads/  (or
     public/work/<project>/) and reference them as "/uploads/photo.jpg".
   • To edit content: change text in the JSON, no code changes needed.
   • To customize sections per project: reorder / add / remove blocks in
     a study's "sections" array. Every block type below is optional and
     repeatable, so each case study can have its own structure.
   ─────────────────────────────────────────────────────── */

export type BlockTheme = 'light' | 'tint' | 'dark';

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

export type Block =
  /* project overview grid (client / studio / timeline / disciplines) */
  | { type: 'overview' }
  /* narrative copy: kicker label + heading + paragraphs */
  | { type: 'text'; kicker?: string; title?: string; paragraphs?: string[]; theme?: BlockTheme }
  /* bulleted section with optional intro/outro copy */
  | { type: 'list'; kicker?: string; title?: string; intro?: string; items: string[]; outro?: string; theme?: BlockTheme }
  /* gold highlight callout, e.g. "The challenge in one line" */
  | { type: 'highlight'; label?: string; text: string }
  /* single full-width image */
  | { type: 'image'; src: string; alt?: string; caption?: string }
  /* picture gallery with lightbox, add as many images as you like */
  | { type: 'gallery'; kicker?: string; title?: string; intro?: string; columns?: 2 | 3; images: GalleryImage[] }
  /* card grid, e.g. communication pillars */
  | { type: 'pillars'; kicker?: string; title?: string; intro?: string; items: { title: string; desc: string }[]; theme?: BlockTheme }
  /* numbered process steps (renders on dark) */
  | { type: 'steps'; kicker?: string; title?: string; items: { phase?: string; title: string; desc: string }[] }
  /* visual identity / brand system rows */
  | { type: 'system'; kicker?: string; title?: string; intro?: string; items: { name: string; desc: string }[] }
  /* big result numbers */
  | { type: 'stats'; kicker?: string; title?: string; items: { value: string; label: string }[] }
  /* client quote */
  | { type: 'quote'; text: string; name: string; role?: string }
  /* tag chips, e.g. deliverables shipped */
  | { type: 'chips'; kicker?: string; title?: string; items: string[] }
  /* credits table */
  | { type: 'credits'; rows: { label: string; value: string }[] };

export interface CaseStudy {
  slug: string;
  num: string;
  tag: string;
  industry: string;
  title: string;
  summary: string;
  client: string;
  studio: string;
  year: string;
  timeline: string;
  disciplines: string[];
  image: string;
  imageAlt: string;
  cardStats: { value: string; label: string }[];
  sections: Block[];
}

interface Manifest {
  studies: CaseStudy[];
}

let cache: CaseStudy[] | null = null;
let inflight: Promise<CaseStudy[]> | null = null;

export function loadCaseStudies(): Promise<CaseStudy[]> {
  if (cache) return Promise.resolve(cache);
  if (!inflight) {
    inflight = fetch('/content/case-studies.json')
      .then((r) => r.json())
      .then((d: Manifest) => {
        cache = d.studies;
        return cache;
      });
  }
  return inflight;
}

export function useCaseStudies(): CaseStudy[] | null {
  const [studies, setStudies] = useState<CaseStudy[] | null>(cache);
  useEffect(() => {
    let alive = true;
    if (!cache) {
      loadCaseStudies().then((s) => {
        if (alive) setStudies(s);
      });
    }
    return () => {
      alive = false;
    };
  }, []);
  return studies;
}
