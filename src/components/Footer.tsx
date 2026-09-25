import { Link } from 'react-router-dom';
import { CONTACT } from '../lib/data';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/work' },
  { label: 'About us', to: '/about' },
  { label: 'Contact us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue font-heading text-lg font-bold text-white">
                B
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight">brandops</span>
            </Link>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-muted-dark">
              Brand Strategy & Identity Design studio. Designs with purpose. Brands with impact.
              We make your business the obvious choice.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.15em] text-muted-dark">
              STRATEGY · IDENTITY · WEB · SOCIAL · PRINT · VIDEO
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.2em] text-sky">QUICK LINKS</h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-sm text-muted-dark transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.2em] text-sky">GET IN TOUCH</h4>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-muted-dark">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="leading-relaxed">{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-6 sm:flex-row">
          <p className="font-mono text-[11px] tracking-wider text-muted-dark">
            © 2026 THE BRANDOPS. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[11px] tracking-wider text-muted-dark">
            MADE IN NAVI MUMBAI <span className="text-gold">◆</span> SHIPPED WORLDWIDE
          </p>
        </div>
      </div>
    </footer>
  );
}
