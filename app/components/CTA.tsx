import { IconArrow, IconPhone, IconMail, IconCheck } from "./Icons";

const POINTS = [
  "No fee unless the candidate is hired",
  "Pre-screened, reference-checked slates",
  "Dedicated recruiter on every search",
];

export default function CTA() {
  return (
    <section id="contact" className="relative border-t border-navy-950/10 bg-amber-500 py-24 sm:py-28">
      <div className="container-x">
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="mono-label text-navy-900/70">{"//"} Let&apos;s build your team</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl lg:text-[3.4rem]">
              Ready to place your next great hire?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-navy-900 text-pretty">
              Tell us about the role. We&apos;ll deliver a vetted shortlist —
              fast, and fully backed by our 90-day guarantee.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium text-navy-950">
                  <span className="inline-flex h-5 w-5 items-center justify-center bg-navy-950/10 text-navy-950">
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
              className="group inline-flex items-center justify-between gap-2 bg-navy-950 px-7 py-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-900"
            >
              <span className="flex items-center gap-3">
                <IconMail className="h-5 w-5" />
                Request Talent
              </span>
              <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+12392555921"
              className="group inline-flex items-center justify-between gap-2 border border-navy-950/40 px-7 py-5 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
            >
              <span className="flex items-center gap-3">
                <IconPhone className="h-5 w-5" />
                +1 239-255-5921
              </span>
              <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mono-label mt-1 text-center text-[9px] text-navy-900/60">
              Typical response within one business day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
