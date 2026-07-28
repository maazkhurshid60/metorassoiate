"use client";

import Link from "next/link";
import { IconArrow } from "./components/Icons";

const POPULAR = [
  { label: "Home", href: "/" },
  { label: "Civil Engineering Recruiter", href: "/civil-engineering-recruiter" },
  { label: "Why Us", href: "/why-us" },
  { label: "Meet Our Team", href: "/meet-our-team" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center overflow-hidden blueprint-shade pt-32 pb-24">
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="container-x relative">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-blink bg-amber-500" />
            <span className="mono-label text-amber-400">{"//"} Error 404 — Page not found</span>
          </div>

          <h1 className="display mt-6 text-[26vw] leading-[0.9] text-white sm:text-[11rem]">
            404
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-8 text-ink-300 text-pretty">
            The page you&apos;re looking for doesn&apos;t exist, may have moved, or
            the link is broken. Let&apos;s get you back on track.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="group inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
            >
              <IconArrow className="h-4.5 w-4.5 rotate-180 transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
            >
              Back to Home
              <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14">
            <p className="mono-label text-ink-300/70">Popular pages</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {POPULAR.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="border border-white/20 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-amber-500 hover:text-amber-400"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
