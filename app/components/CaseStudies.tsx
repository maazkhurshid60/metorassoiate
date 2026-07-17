import { IconArrow } from "./Icons";

const CASES = [
  {
    tag: "Transportation · Engineering",
    challenge: "Sr. Engineer",
    body: "Fifteen pre-screened resumes led to five technical phone screens and four in-person interviews. Role filled in four weeks.",
    metric: "4 wks",
    metricLabel: "Time to fill",
  },
  {
    tag: "Executive · Finance",
    challenge: "GM with a finance background",
    body: "Forty phone screens, six interviews scheduled. The client hired the General Manager — plus a second candidate from the same slate.",
    metric: "2 hires",
    metricLabel: "One search",
  },
  {
    tag: "Leadership · Product",
    challenge: "High-impact software leader",
    body: "One Metro candidate secured a full-time leadership role and went on to drive decisions shaping the company's product direction.",
    metric: "Retained",
    metricLabel: "Long-term",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-paper border-t border-navy-950/10 py-24 sm:py-28"
    >
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} 05 — Field Results</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Real searches, real outcomes
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 border border-navy-950/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:border-amber-500 hover:text-amber-500"
          >
            Start your search
            <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <article
              key={c.challenge}
              className="group flex flex-col bg-white p-8 transition-colors hover:bg-mist"
            >
              <div className="flex items-center justify-between">
                <span className="mono-label border border-amber-500/50 bg-amber-500/10 px-2.5 py-1 text-[9px] text-navy-950">
                  {c.tag}
                </span>
                <span className="mono-label text-2xl font-bold text-navy-950/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold leading-snug text-navy-950">
                {c.challenge}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-500">{c.body}</p>
              <div className="mt-7 flex items-end justify-between border-t border-navy-950/10 pt-5">
                <div>
                  <p className="display text-3xl text-amber-500">{c.metric}</p>
                  <p className="mono-label mt-1 text-[9px] text-slate-500">
                    {c.metricLabel}
                  </p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center border border-navy-950/12 text-navy-950 transition-colors group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-navy-950">
                  <IconArrow className="h-4.5 w-4.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
