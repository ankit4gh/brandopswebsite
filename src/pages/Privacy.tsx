import { CONTACT } from '../lib/data';
import { PageHero, Reveal, SectionTag } from '../components/ui';

const SECTIONS = [
  {
    num: '01',
    title: 'Who we are',
    body: `TheBrandOps ("we", "us") is a Brand Strategy & Identity Design studio operated from Sector 29, Vashi, Navi Mumbai — 400703, India. This policy explains what information we collect through thebrandops.com and how we use it.`,
  },
  {
    num: '02',
    title: 'Information we collect',
    body: `We collect only the information you choose to share with us: your name, business name, email address, phone number, and project details — typically when you email us, call us, or use the contact form on this site (which opens your own email client; nothing is stored on our servers). We do not collect payment information through this website.`,
  },
  {
    num: '03',
    title: 'How we use your information',
    body: `We use the information you share to respond to inquiries, prepare proposals, deliver projects, and — only if you ask us to — keep you informed about our work. We never sell, rent, or trade your personal information to third parties.`,
  },
  {
    num: '04',
    title: 'Cookies & analytics',
    body: `This website may use privacy-respecting analytics to understand aggregate traffic (pages visited, approximate region, device type). No personal profile is built, and no data is shared with advertisers.`,
  },
  {
    num: '05',
    title: 'Data retention & security',
    body: `Project correspondence is retained for as long as needed to serve you and meet legal obligations, then deleted. We apply reasonable technical and organizational safeguards to protect any information you share with us.`,
  },
  {
    num: '06',
    title: 'Your rights',
    body: `You may request a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it at any time. Write to us and we will respond within a reasonable period.`,
  },
  {
    num: '07',
    title: 'Contact',
    body: `Questions about this policy? Email ${CONTACT.email} or call ${CONTACT.phone}. Postal address: ${CONTACT.address}.`,
  },
];

export default function Privacy() {
  return (
    <main>
      <PageHero
        crumb="PRIVACY POLICY"
        title={
          <>
            Your data. <span className="text-blue">Your boundary.</span>
          </>
        }
        intro="We build brands, not data profiles. Here's exactly what we collect, why, and what we'll never do with it."
      >
        <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-muted">
          LAST UPDATED · JANUARY 2026
        </p>
      </PageHero>

      <section className="relative bg-paper pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionTag label="THE POLICY" index={1} total={1} />

          <div className="mt-12 space-y-4">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.num} delay={0.03 * i}>
                <article className="rounded-xl border border-line bg-white p-7 sm:p-8">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-blue">{s.num}</p>
                  <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
