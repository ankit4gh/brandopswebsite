import { Link } from 'react-router-dom';
import { Corners } from '../components/ui';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink text-white">
      <div className="bg-dots-dark absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(27,42,74,0.55),transparent)]"
      />
      <div className="relative mx-auto max-w-xl px-5 text-center">
        <div className="relative inline-block rounded-lg border border-line-dark bg-ink-2 px-6 py-4 font-mono text-sm text-white/90">
          <Corners dark />
          <span className="text-sky">$</span> brandops find --page
          <span className="ml-2 text-red-400">ERR 404: NOT_FOUND</span>
        </div>
        <h1 className="mt-8 font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
          This page lost its <span className="text-sky">positioning.</span>
        </h1>
        <p className="mt-4 font-body text-base text-muted-dark">
          The page you're looking for doesn't exist, but your brand's next chapter might.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-blue px-6 py-3 font-heading text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#12203c]"
        >
          Back to home
          <span aria-hidden className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </main>
  );
}
