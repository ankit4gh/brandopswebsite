const CLIENTS = [
  { src: '/logos/clients/client-01.png', name: 'Colgate-Palmolive' },
  { src: '/logos/clients/client-02.png', name: 'Google' },
  { src: '/logos/clients/client-03.png', name: 'Accenture' },
  { src: '/logos/clients/client-04.png', name: 'Reliance Retail' },
  { src: '/logos/clients/client-05.png', name: 'Standard Chartered' },
  { src: '/logos/clients/client-06.png', name: 'Marsh' },
  { src: '/logos/clients/client-07.png', name: 'Girnar' },
  { src: '/logos/clients/client-08.png', name: 'Fortran Steel' },
  { src: '/logos/clients/client-09.png', name: 'Ferrite Structural Steels' },
  { src: '/logos/clients/client-10.png', name: 'GrowthAide' },
  { src: '/logos/clients/client-11.png', name: 'Pepperfry' },
  { src: '/logos/clients/client-12.png', name: 'Yaksha × Rahasya' },
  { src: '/logos/clients/client-13.png', name: 'Target Publications' },
  { src: '/logos/clients/client-14.png', name: 'CraftGully' },
  { src: '/logos/clients/client-15.png', name: 'Ashoka Buildcon' },
  { src: '/logos/clients/client-16.png', name: 'The Capital Tree' },
  { src: '/logos/clients/client-17.png', name: 'Vardhaman Group' },
  { src: '/logos/clients/client-18.png', name: 'Nupur Jain Consulting Law Firm' },
  { src: '/logos/clients/client-19.png', name: 'Government of Maharashtra' },
];

const MEMBERS = [
  { src: '/logos/members/member-01.png', name: 'Association of Designers of India (ADI)' },
  { src: '/logos/members/member-02.png', name: 'BNI Grandiose' },
  { src: '/logos/members/member-03.png', name: 'Young Designers India' },
];

function LogoCard({ src, name }: { src: string; name: string }) {
  return (
    <div
      className="flex h-16 w-44 shrink-0 items-center justify-center rounded-lg border border-line bg-white px-4 transition-all hover:-translate-y-0.5 hover:border-blue/30"
      title={name}
    >
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="max-h-11 w-auto max-w-full object-contain opacity-90 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

export default function Clients() {
  const half = Math.ceil(CLIENTS.length / 2);
  const rowA = CLIENTS.slice(0, half);
  const rowB = CLIENTS.slice(half);

  return (
    <section id="clients" className="relative border-b border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <p className="text-center font-mono text-[11px] tracking-[0.2em] text-blue">
          <span aria-hidden className="text-gold">〉</span> TRUSTED BY GLOBAL LEADERS
        </p>

        {/* row A — scrolls left */}
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-mist to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-mist to-transparent sm:w-24" />
          <div className="animate-marquee flex w-max gap-4">
            {[...rowA, ...rowA].map((c, i) => (
              <LogoCard key={`${c.src}-${i}`} src={c.src} name={c.name} />
            ))}
          </div>
        </div>

        {/* row B — scrolls right */}
        <div className="relative mt-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-mist to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-mist to-transparent sm:w-24" />
          <div className="animate-marquee flex w-max gap-4 [animation-direction:reverse]">
            {[...rowB, ...rowB].map((c, i) => (
              <LogoCard key={`${c.src}-${i}`} src={c.src} name={c.name} />
            ))}
          </div>
        </div>

        {/* members */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <p className="font-mono text-[11px] tracking-[0.2em] text-blue">
            <span aria-hidden className="text-gold">〉</span> PROUD MEMBER
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {MEMBERS.map((m) => (
              <LogoCard key={m.src} src={m.src} name={m.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
