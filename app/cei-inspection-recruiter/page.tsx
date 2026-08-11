import type { Metadata } from "next";
import Link from "next/link";
import {
  IconArrow, IconCheck, IconGlobe, IconShield, IconTarget, IconLayers,
  IconClipboard, IconStar,
} from "../components/Icons";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import { CAREERS_URL, APPLY_URL, SITE_URL } from "../lib/site";

/* DEMO PAGE — a single static page, not a per-city buildout like
   civil-engineering-recruiter/ or mep-engineering-recruiter/, and no hero
   photo (none of the site's stock images fit this discipline without being
   misleading, so this uses the same photo-free blueprint hero as the [city]
   sub-pages instead of forcing a mismatched image). If this direction is
   approved, the next step is the same treatment civil/MEP got: a
   lib/ceiInspection.ts city-data file + a [city]/page.tsx, a hero photo, and
   this file becomes the national hub with a "Cities directory" section. */

const TICKER = [
  "Materials Testing",
  "Bridge Inspection",
  "QA / QC",
  "Resident Engineering",
  "DOT Compliance",
  "Contract Administration",
  "NICET Certified",
  "Field Oversight",
];

export const metadata: Metadata = {
  title: "CEI & Construction Inspection Recruiter — United States | Metro Associates",
  description:
    "Metro Associates is a national CEI (Construction Engineering & Inspection) recruiter providing specialized staffing for materials testing, bridge and roadway inspection, resident engineering, and construction contract administration across all 50 states. We place certified inspectors, resident engineers, and QA/QC specialists.",
  alternates: { canonical: "/cei-inspection-recruiter" },
  openGraph: {
    title: "CEI & Construction Inspection Recruiter — United States | Metro Associates",
    description:
      "National staffing for materials testing, bridge and roadway inspection, resident engineering, and construction contract administration across all 50 states.",
    url: `${SITE_URL}/cei-inspection-recruiter`,
    siteName: "Metro Associates",
    type: "website",
  },
};

const EXPERTISE = [
  "Construction Engineering & Inspection (CEI)",
  "Materials Testing & QA/QC",
  "Bridge & Roadway Inspection",
  "Construction Contract Administration",
  "Resident Engineering & Field Oversight",
  "Utility & Underground Inspection",
  "Environmental & Erosion Control Compliance",
  "State DOT Construction Standards Compliance",
];

// What clients actually ask us to screen for, beyond licensure — the
// specific certifications and methods a candidate needs to be productive
// day one on a DOT or municipal inspection team.
const SKILLS = [
  "ACI Concrete Field Testing Certification",
  "NICET Certification (Construction Materials Testing)",
  "State DOT / NETTCP CEI Certifications",
  "Nuclear Density Gauge Certification",
  "AASHTO / State DOT Inspection Manuals",
  "Bridge Inspection (NBIS) Certification",
  "OSHA 30-Hour",
  "Erosion & Sediment Control Certification (CESSWI)",
  "Bluebeam Revu (as-built markups)",
  "Primavera P6 / MS Project (schedule review)",
  "Professional Engineer (PE) license",
  "Resident Engineer certification",
  "Traffic Control Technician (TCT) certification",
  "Materials testing (soils, asphalt, concrete)",
  "Punch-list & closeout documentation",
  "Construction contract administration (DOT specs)",
];

const ROLES = [
  "CEI Inspector",
  "Senior Construction Inspector",
  "Resident Engineer",
  "Materials Testing Technician / QA Manager",
  "Construction Contract Administrator",
  "Bridge Inspector",
  "CEI Project Manager",
  "Field Office Engineer",
  "Utility Inspector",
  "Director of Construction Engineering & Inspection",
];

const SALARIES = [
  { role: "CEI Inspector (Entry)", range: "$55,000 – $75,000" },
  { role: "Senior Inspector / Resident Engineer", range: "$85,000 – $120,000" },
  { role: "CEI Project Manager", range: "$115,000 – $155,000+" },
  { role: "Director of CEI Services", range: "$150,000 – $210,000+" },
];

const WHY = [
  {
    title: "National Talent Pipeline",
    body: "Access to a vast database of 50,000+ pre-vetted engineering professionals.",
  },
  {
    title: "Certification-Verified Talent",
    body: "NICET, ACI, DOT, and bridge-inspection credentials confirmed before a candidate reaches you.",
  },
  {
    title: "Passive Candidate Acquisition",
    body: "Our recruiters reach high-performers who are not actively on job boards.",
  },
  {
    title: "Scalable Staffing Solutions",
    body: "From a single inspector to an entire CEI field team for a multi-year DOT program.",
  },
  {
    title: "Codes & Standards Fluency",
    body: "Fluency in AASHTO, NBIS bridge-inspection standards, and state DOT construction specifications.",
  },
];

const WHY_ICONS = [IconGlobe, IconShield, IconTarget, IconLayers, IconClipboard];

export default function CeiInspectionRecruiterPage() {
  return (
    <main>
      {/* Hero — no stock photo fits this discipline without being misleading,
          so this reuses the photo-free blueprint hero the [city] sub-pages
          use rather than the photo-hero treatment civil/MEP/bridge get. */}
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-blink bg-amber-500" />
              <span className="mono-label text-amber-400">{"//"} National Engineering Staffing</span>
            </div>
            <h1 className="display mt-6 text-[10.5vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.4rem]">
              CEI &amp; Construction
              <br />
              <span className="text-brand-400">Inspection Recruiter</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
              Premier national staffing for materials testing, bridge and
              roadway inspection, resident engineering, and construction
              contract administration across all 50 states. We help firms
              hire certified inspectors, resident engineers, and QA/QC
              specialists.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
              >
                Request Talent
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={CAREERS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400">
                Search Jobs
              </a>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400">
                Submit Resume
              </a>
            </div>
          </div>
        </div>

        {/* Floating credibility badge */}
        <div className="pointer-events-none absolute bottom-28 right-6 z-10 hidden border border-white/15 bg-navy-950/70 px-5 py-4 backdrop-blur-sm lg:block">
          <div className="flex gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-3.5 w-3.5" />
            ))}
          </div>
          <p className="mt-2 text-3xl font-extrabold text-white">
            2&ndash;4<span className="text-lg text-amber-500"> wks</span>
          </p>
          <p className="mono-label mt-1 text-[9px] text-ink-400">Avg. time-to-fill</p>
        </div>

        {/* Specialty ticker */}
        <div className="relative mt-14 border-y border-white/10 bg-navy-950/85 py-4 backdrop-blur-sm">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-8 pr-8">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="mono-label text-ink-300">{t}</span>
                  <span className="text-amber-500">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="mono-label text-amber-500">{"//"} National expertise</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                National CEI &amp; inspection <span className="text-brand-500">recruiting</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                Metro Associates provides specialized staffing on a national
                scale, supporting firms working with state DOTs, municipal
                agencies, and construction managers on materials testing,
                bridge and roadway inspection, and contract administration
                coast to coast.
              </p>
            </div>
            <div className="relative overflow-hidden border border-brand-500/25 bg-mist p-8">
              <div className="blueprint-light absolute inset-0 opacity-70" />
              <div className="relative">
                <p className="mono-label text-brand-600">Recruiting expertise</p>
                <ul className="mt-6 grid gap-x-6 gap-y-4">
                  {EXPERTISE.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-[15px] font-medium text-navy-950">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-amber-500/20 text-amber-500">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & certifications */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} What we screen for</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Skills &amp; certifications we recruit for
            </h2>
            <p className="mt-5 text-slate text-pretty">
              Beyond licensure, every candidate is evaluated against the
              specific certifications and methods your team actually works in.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 border border-navy-950/10 bg-white px-4 py-2 text-sm font-medium text-navy-950"
              >
                <IconCheck className="h-3.5 w-3.5 text-amber-500" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Roles + salaries */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <span className="mono-label text-amber-500">{"//"} Roles we place nationwide</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">Roles we place</h2>
              <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {ROLES.map((r, i) => (
                  <div key={r} className="flex items-center gap-3 border-b border-navy-950/10 pb-4 text-[15px] font-medium text-navy-950">
                    <span className="mono-label text-[10px] text-brand-500/70">{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-1.5 w-1.5 shrink-0 bg-amber-500" />
                    {r}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-navy-950/10 bg-white p-8 sm:p-10">
              <p className="mono-label text-slate-500">2026 national compensation trends</p>
              <div className="mt-6 flex flex-col divide-y divide-navy-950/10">
                {SALARIES.map((s) => (
                  <div key={s.role} className="flex items-center justify-between gap-4 py-4">
                    <span className="text-[15px] font-medium text-navy-950">{s.role}</span>
                    <span className="display text-lg text-amber-500 sm:text-xl">{s.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why + CTA */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Why partner with us</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Why firms partner with Metro Associates
            </h2>
          </div>
          <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <article key={w.title} className="group flex flex-col bg-white p-8 transition-colors hover:bg-mist">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-navy-950/12 text-brand-500 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-navy-950">{w.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-7 text-slate-500">{w.body}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white">Partner with a national CEI &amp; inspection recruiter</h3>
              <p className="mt-2 text-ink-300">
                Looking to scale your field team or explore new opportunities across the U.S.?
                Tell us what you need.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400">
                Request Talent
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400">
                Apply to Jobs
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
