import { IconArrow, IconPhone, IconMail, IconCheck } from "./Icons";

const POINTS = [
  "No fee unless the candidate is hired",
  "Pre-screened, reference-checked slates",
  "Dedicated recruiter on every search",
];

export default function CTA() {
  return (
    <section id="contact" className="relative border-t border-white/10 bg-navy-950 py-24 sm:py-28">
      <div className="container-x">
        <div className="corners relative overflow-hidden blueprint border border-white/12 px-8 py-14 sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-amber-500/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="mono-label text-amber-500">{"//"} Let&apos;s build your team</span>
              <h2 className="display mt-5 text-4xl text-white sm:text-5xl lg:text-[3.4rem]">
                Ready to place your next great hire?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-300 text-pretty">
                Tell us about the role. We&apos;ll deliver a vetted shortlist —
                fast, and fully backed by our 90-day guarantee.
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-ink-100">
                    <span className="inline-flex h-5 w-5 items-center justify-center bg-amber-500/15 text-amber-500">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@metroassoc.com?subject=Talent%20Request"
                className="group inline-flex items-center justify-between gap-2 bg-amber-500 px-7 py-5 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
              >
                <span className="flex items-center gap-3">
                  <IconMail className="h-5 w-5" />
                  Request Talent
                </span>
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+12392555921"
                className="group inline-flex items-center justify-between gap-2 border border-white/20 px-7 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                <span className="flex items-center gap-3">
                  <IconPhone className="h-5 w-5 text-amber-500" />
                  +1 239-255-5921
                </span>
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mono-label mt-1 text-center text-[9px] text-ink-500">
                Typical response within one business day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
