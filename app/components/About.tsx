import { IconArrow, IconCheck } from "./Icons";
import { CAREERS_URL } from "../lib/site";
import CountUp from "./CountUp";

const METRICS = [
  { value: 1598, suffix: "+", v: "Candidates placed", d: "Matched with precision and professionalism.", live: false },
  { value: 45, suffix: "+", v: "Years of experience", d: "Entry-level roles to C-suite executives.", live: false },
  { value: 157, suffix: "K+", v: "Résumés on file", d: "A deep, vetted national talent network.", live: false },
  { value: 248, suffix: "+", v: "Open jobs", d: "Active roles across the U.S. right now.", live: true },
];

const ROLES = [
  "Transportation Engineers",
  "Bridge & Structural Designers",
  "Roadway & Traffic Engineers",
  "CEI Inspectors",
  "Resident Engineers",
  "Construction Managers",
  "Project Controls Specialists",
  "Environmental Coordinators",
  "Executive Program Leaders",
];

const STANDARDS = [
  "DOT specifications",
  "FHWA standards",
  "AASHTO guidelines",
  "NETTCP certified",
  "QA/QC protocols",
  "Safety compliance",
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="mono-label text-amber-500">{"//"} 01 — About Us</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              DOT-focused staffing &amp;{" "}
              <span className="text-brand-500">executive search</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate text-pretty">
              Metro Associates is a nationally recognized engineering recruiting
              firm specializing in DOT staffing and executive search. We support
              state Departments of Transportation, municipal public works
              agencies, engineering consultancies, and federally funded
              infrastructure programs across the United States.
            </p>
            <p className="mt-4 leading-8 text-slate-500 text-pretty">
              With more than four decades of combined experience, our recruiters
              — including former engineers and military-trained talent
              specialists — deliver transportation professionals who understand
              the operational, regulatory, and performance demands of publicly
              funded capital projects.
            </p>

            <div className="mt-7">
              <p className="mono-label text-slate-500">Every candidate vetted for</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {STANDARDS.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 border border-navy-950/12 bg-white px-3 py-1.5 text-xs text-slate"
                  >
                    <IconCheck className="h-3.5 w-3.5 text-amber-500" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Roles we place — kept dark navy for deliberate contrast */}
          <div className="border border-navy-950/10 bg-navy-950 p-8">
            <p className="mono-label text-amber-500">Transportation roles we place</p>
            <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {ROLES.map((r, i) => (
                <li key={r} className="flex items-center gap-3 text-[15px] text-ink-100">
                  <span className="mono-label text-[10px] text-ink-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 shrink-0 bg-amber-500" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big metric grid — light credibility band */}
        <div className="reveal-children mt-16 grid grid-cols-2 gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div
              key={m.v}
              className="group relative overflow-hidden bg-white p-5 transition-colors hover:bg-mist sm:p-7"
            >
              {/* animated top accent */}
              <span className="absolute inset-x-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-amber-500 to-brand-500 transition-transform duration-500 group-hover:scale-x-100" />

              {m.live && (
                <span className="absolute right-5 top-6 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-500" />
                  <span className="mono-label text-[8px] text-emerald-600">LIVE</span>
                </span>
              )}

              <CountUp
                value={m.value}
                suffix={m.suffix}
                className="display text-3xl text-navy-950 sm:text-4xl lg:text-5xl"
              />
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-brand-500">
                {m.v}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{m.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-navy-950"
          >
            <span className="border-b-2 border-amber-500 pb-1">Explore our services</span>
            <IconArrow className="h-4.5 w-4.5 text-amber-500 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={CAREERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate hover:text-navy-950"
          >
            <span className="border-b-2 border-navy-950/20 pb-1 group-hover:border-amber-500">
              Explore open jobs
            </span>
            <IconArrow className="h-4.5 w-4.5 text-amber-500 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
