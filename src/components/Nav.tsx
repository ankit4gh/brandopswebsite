import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CONTACT } from '../lib/data';

const PAGES = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue font-heading text-lg font-bold text-white">
        B
      </span>
      <span className="font-heading text-lg font-semibold tracking-tight text-ink">
        brandops
      </span>
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {PAGES.map((p) => (
            <NavLink
              key={p.to}
              to={p.to}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition-colors ${
                  isActive ? 'text-blue' : 'text-muted hover:text-ink'
                }`
              }
            >
              {p.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="font-mono text-xs text-muted transition-colors hover:text-blue"
          >
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.bookHref}
            className="rounded-lg bg-blue px-4 py-2 font-heading text-sm font-semibold text-white transition-colors hover:bg-[#12203c]"
          >
            Book Free Diagnostic
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {PAGES.map((p) => (
              <NavLink
                key={p.to}
                to={p.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 font-heading text-base font-medium hover:bg-frost ${
                    isActive ? 'text-blue' : 'text-ink'
                  }`
                }
              >
                {p.label}
              </NavLink>
            ))}
            <a
              href={CONTACT.bookHref}
              className="mt-3 rounded-lg bg-blue px-4 py-3 text-center font-heading text-sm font-semibold text-white"
            >
              Book Free Diagnostic →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
