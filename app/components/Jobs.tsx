import { IconArrow, IconPin } from "./Icons";
import { CAREERS_URL, APPLY_URL } from "../lib/site";

const JOBS = [
  {
    role: "Construction Management — VDOT",
    loc: "Fredericksburg, Virginia",
    type: "Direct Hire",
    featured: true,
  },
  {
    role: "Senior Engineer (PE) — CTDOT / RIDOT",
    loc: "North Haven, Connecticut",
    type: "Direct Hire",
    featured: true,
  },
  {
    role: "Bridge & Structural Designer",
    loc: "Atlanta, Georgia",
    type: "Direct Hire",
    featured: false,
  },
  {
    role: "CEI Inspector",
    loc: "Dallas, Texas",
    type: "Contract",
    featured: false,
  },
  {
    role: "Resident Engineer",
    loc: "Los Angeles, California",
    type: "Direct Hire",
    featured: false,
  },
];

export default function Jobs() {
  return (
    <section
      id="jobs"
      className="relative overflow-hidden blueprint-light border-t border-navy-950/10 py-24 sm:py-28"
    >
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} 07 — Open Roles</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Careers in engineering &amp; infrastructure
            </h2>
          </div>
          <p className="max-w-md text-slate text-pretty">
            Advance your career with a recruiting partner that understands
            engineering. We place licensed PEs, CEI inspectors, project managers,
            and senior infrastructure leaders — working confidentially to protect
            your interests at every step.
          </p>
        </div>

        <div className="mt-14 border border-navy-950/10 bg-white">
          {/* header row */}
          <div className="mono-label hidden grid-cols-[1fr_200px_130px_120px] items-center gap-4 bg-navy-950/5 px-6 py-3 text-slate-500 lg:grid">
            <span>Job Title &amp; Location</span>
            <span>Job Type</span>
            <span>Status</span>
            <span className="text-right">Action</span>
          </div>

          {JOBS.map((j) => (
            <a
              key={j.role}
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 items-center gap-2 border-t border-navy-950/10 bg-white px-6 py-5 transition-colors hover:bg-mist lg:grid-cols-[1fr_200px_130px_120px] lg:gap-4"
            >
              <span>
                <span className="block text-lg font-bold text-navy-950 group-hover:text-brand-500">
                  {j.role}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                  <IconPin className="h-4 w-4 text-slate-500" />
                  {j.loc}
                </span>
              </span>
              <span className="mono-label w-fit border border-navy-950/15 px-2.5 py-1 text-[9px] text-slate">
                {j.type}
              </span>
              <span>
                {j.featured ? (
                  <span className="mono-label bg-amber-500 px-2.5 py-1 text-[9px] text-navy-950">
                    Featured
                  </span>
                ) : (
                  <span className="mono-label text-[9px] text-slate-500">Open</span>
                )}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-navy-950 lg:justify-end">
                Apply
                <IconArrow className="h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={CAREERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
          >
            Explore All 248+ Jobs
            <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-navy-950/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:border-amber-500 hover:text-amber-500"
          >
            Submit a General Application
          </a>
        </div>
      </div>
    </section>
  );
}
