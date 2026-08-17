import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrow, IconCheck, IconGlobe, IconShield, IconTarget, IconLayers,
  IconClipboard,
} from "../../components/Icons";
import { CAREERS_URL, APPLY_URL, SITE_URL } from "../../lib/site";
import {
  CEI_CITIES, getCeiCity, CEI_EXPERTISE, CEI_SKILLS, CEI_ROLES, CEI_SALARIES, CEI_WHY,
} from "../../lib/ceiInspection";
import { HeaderBackdrop } from "../../components/HeaderBackdrop";
import { JsonLd } from "../../components/JsonLd";
import { serviceSchema, breadcrumbSchema, faqSchema, ceiFaqs, pickVariant } from "../../lib/seo";

// Pre-render the fixed set of CEI & Inspection city pages; unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CEI_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const c = getCeiCity(slug);
  if (!c) return {};
  const title = `CEI & Construction Inspection Recruiter — ${c.city}, ${c.abbr} | Metro Associates`;
  const description = `Metro Associates is a specialized CEI (Construction Engineering & Inspection) recruiter serving ${c.city}, ${c.state}. We place certified inspectors, resident engineers, and QA/QC specialists across ${c.region}.`;
  const path = `/cei-inspection-recruiter/${c.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "Metro Associates",
      type: "website",
    },
  };
}

const WHY_ICONS = [IconGlobe, IconShield, IconTarget, IconLayers, IconClipboard];

export default async function CeiCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const c = getCeiCity(slug);
  if (!c) notFound();

  const path = `/cei-inspection-recruiter/${c.slug}`;
  const faqs = ceiFaqs(c);
  const flagshipProgram = c.localPrograms[0];

  const introPara1 = pickVariant(`${c.slug}:cei:intro1`, [
    `Metro Associates is a leading CEI recruiter providing specialized staffing solutions across ${c.city} and ${c.region}. We help firms hire certified inspectors, resident engineers, and QA/QC specialists across materials testing, bridge inspection, and contract administration — for projects reviewed under ${c.authority} and beyond.`,
    `Metro Associates runs a dedicated CEI search practice across ${c.city} and ${c.region}, connecting firms with certified inspectors, resident engineers, and QA/QC specialists reviewed under ${c.authority}.`,
    `We're a specialized CEI recruiter for ${c.city} and ${c.region} — placing certified inspectors, resident engineers, and QA/QC specialists across materials testing, bridge inspection, and contract administration.`,
  ]);
  const introPara2 = pickVariant(`${c.slug}:cei:intro2`, [
    `From highway megaprojects to bridge replacement and transit construction, we match certification-verified talent to the field, safety, and documentation demands of complex construction programs.`,
    `Whether it's a highway megaproject, a bridge replacement, or transit construction, we match certification-verified talent to what each program's field, safety, and documentation demands actually are.`,
    flagshipProgram
      ? `Locally, that has included work like ${flagshipProgram.toLowerCase()} — we match certification-verified talent to the field, safety, and documentation demands of that kind of construction program.`
      : `From highway megaprojects to bridge replacement and transit construction, we match certification-verified talent to the field, safety, and documentation demands of complex construction programs.`,
  ]);
  const skillsIntro = pickVariant(`${c.slug}:cei:skillsIntro`, [
    `Every candidate we put forward is screened against the same bar: the certifications, licensure, and code fluency the role actually demands.`,
    `We screen every candidate against one bar — the certifications, licensure, and code fluency the role actually calls for, not a generic checklist.`,
    `Every submission is held to the same standard: real, verified certifications, licensure, and code fluency for the role.`,
  ]);
  const trendsIntro = pickVariant(`${c.slug}:cei:trendsIntro`, [
    `In 2026, the ${c.region} market is defined by federally funded highway and bridge programs and a shortage of certification-verified field staff. Demand for NICET- and NBIS-certified inspectors who can deliver on schedule-critical DOT programs is at an all-time high.`,
    `Heading into 2026, ${c.city}'s market is shaped by federally funded highway and bridge programs and a shortage of certification-verified field staff. NICET- and NBIS-certified inspectors who can deliver on schedule-critical DOT programs remain in short supply.`,
  ]);

  const schemas = [
    serviceSchema({
      serviceName: `CEI & Construction Inspection Recruiter — ${c.city}, ${c.abbr}`,
      description: `Specialized CEI staffing and executive search in ${c.city}, ${c.state}. We place certified inspectors, resident engineers, and QA/QC specialists.`,
      path,
      areaCity: c.city,
      areaState: c.state,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "CEI & Inspection Recruiter", path: "/cei-inspection-recruiter" },
      { name: `${c.city}, ${c.abbr}`, path },
    ]),
    faqSchema(faqs),
  ];

  return (
    <main>
      <JsonLd data={schemas} />
      {/* Hero */}
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-blink bg-amber-500" />
              <span className="mono-label text-amber-400">{"//"} CEI &amp; Construction Inspection Recruiting — {c.abbr}</span>
            </div>
            <h1 className="display mt-6 text-[10.5vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.4rem]">
              CEI &amp; Inspection Recruiter
              <br />
              <span className="text-brand-400">{c.city}, {c.abbr}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
              {c.marketNote}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
              >
                Request Talent
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={CAREERS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Search Jobs
              </a>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Submit Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Expertise */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="mono-label text-amber-500">{"//"} {c.city} CEI &amp; Inspection Recruiting</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                Specialized staffing for {c.city} <span className="text-brand-500">field inspection</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                {introPara1}
              </p>
              <p className="mt-4 leading-8 text-slate-500 text-pretty">
                {introPara2}
              </p>
            </div>

            {/* Expertise panel */}
            <div className="relative overflow-hidden border border-brand-500/25 bg-mist p-8">
              <div className="blueprint-light absolute inset-0 opacity-70" />
              <div className="relative">
                <p className="mono-label text-brand-600">Recruiting expertise</p>
                <ul className="mt-6 grid gap-x-6 gap-y-4">
                  {CEI_EXPERTISE.map((e) => (
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

      {/* Roles */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Roles we place</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              CEI roles we place in {c.city}
            </h2>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {CEI_ROLES.map((r, i) => (
              <div key={r} className="flex items-center gap-3 border-b border-navy-950/10 pb-4 text-[15px] font-medium text-navy-950">
                <span className="mono-label text-[10px] text-brand-500/70">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-1.5 w-1.5 shrink-0 bg-amber-500" />
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Skills we screen for</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              CEI skills &amp; certifications we recruit for in {c.city}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate text-pretty">
              {skillsIntro}
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {CEI_SKILLS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 border border-navy-950/12 bg-white px-4 py-2.5 text-sm font-medium text-navy-950"
              >
                <IconCheck className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 hiring trends + salaries */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <span className="mono-label text-amber-500">{"//"} 2026 hiring trends</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                2026 {c.city} CEI &amp; inspection hiring
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                {trendsIntro}
              </p>
            </div>
            <div className="border border-navy-950/10 bg-white p-8 sm:p-10">
              <p className="mono-label text-slate-500">Representative 2026 compensation</p>
              <div className="mt-6 flex flex-col divide-y divide-navy-950/10">
                {CEI_SALARIES.map((s) => (
                  <div key={s.role} className="flex items-center justify-between gap-4 py-4">
                    <span className="text-[15px] font-medium text-navy-950">{s.role}</span>
                    <span className="display text-lg text-amber-500 sm:text-xl">{s.range}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-6 text-slate-500">
                Ranges vary by firm, licensure, and project mix; figures are directional
                for the {c.city} metro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local CEI-heavy programs */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Projects we support</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Supporting {c.city} construction inspection programs
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {c.localPrograms.map((p) => (
              <div key={p} className="flex items-start gap-3 border border-navy-950/10 bg-white p-5 text-[15px] font-medium text-navy-950">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-navy-950/12 text-brand-500">
                  <IconClipboard className="h-4.5 w-4.5" />
                </span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — feeds the FAQ rich result and adds long-tail keyword coverage */}
      <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} FAQ</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              CEI &amp; inspection recruiting in {c.city} — FAQ
            </h2>
          </div>
          <div className="mt-12 divide-y divide-navy-950/10 border-t border-navy-950/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-lg font-bold text-navy-950">{f.q}</h3>
                <p className="mt-2 leading-7 text-slate-500 text-pretty">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Why partner with us</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Why {c.city} firms partner with Metro Associates
            </h2>
          </div>
          <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
            {CEI_WHY.map((w, i) => {
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

          {/* CTA band */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Hiring CEI or inspection staff in {c.city}?
              </h3>
              <p className="mt-2 text-ink-300">
                Tell us about the role — we&apos;ll deliver a vetted shortlist of
                certified {c.abbr} CEI talent, backed by our placement guarantee.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
              >
                Request Talent
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Apply to Jobs
              </a>
            </div>
          </div>

          {/* Other markets — internal links for SEO/crawlability */}
          {CEI_CITIES.length > 1 && (
            <div className="mt-14">
              <p className="mono-label text-slate-500">Other markets we serve</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CEI_CITIES.filter((x) => x.slug !== c.slug).map((x) => (
                  <Link
                    key={x.slug}
                    href={`/cei-inspection-recruiter/${x.slug}`}
                    className="border border-navy-950/12 bg-white px-3 py-1.5 text-xs font-medium text-navy-950 transition-colors hover:border-amber-500 hover:text-amber-600"
                  >
                    {x.city}, {x.abbr}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
