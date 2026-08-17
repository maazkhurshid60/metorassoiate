import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrow, IconCheck, IconGlobe, IconShield, IconTarget, IconLayers,
  IconClipboard, IconBolt,
} from "../../components/Icons";
import { CAREERS_URL, APPLY_URL, SITE_URL } from "../../lib/site";
import {
  WATER_CITIES, getWaterCity, WATER_EXPERTISE, WATER_SKILLS, WATER_ROLES, WATER_SALARIES, WATER_WHY,
} from "../../lib/waterWastewater";
import { HeaderBackdrop } from "../../components/HeaderBackdrop";
import { JsonLd } from "../../components/JsonLd";
import { serviceSchema, breadcrumbSchema, faqSchema, waterFaqs, pickVariant } from "../../lib/seo";

// Pre-render the fixed set of Water & Wastewater city pages; unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return WATER_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const c = getWaterCity(slug);
  if (!c) return {};
  const title = `Water & Wastewater Engineering Recruiter — ${c.city}, ${c.abbr} | Metro Associates`;
  const description = `Metro Associates is a specialized water and wastewater engineering recruiter serving ${c.city}, ${c.state}. We place licensed PEs, process engineers, and construction inspection specialists across ${c.region}.`;
  const path = `/water-wastewater-recruiter/${c.slug}`;
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

export default async function WaterCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const c = getWaterCity(slug);
  if (!c) notFound();

  const path = `/water-wastewater-recruiter/${c.slug}`;
  const faqs = waterFaqs(c);
  const flagshipProgram = c.localPrograms[0];

  const introPara1 = pickVariant(`${c.slug}:water:intro1`, [
    `Metro Associates is a leading water and wastewater engineering recruiter providing specialized staffing solutions across ${c.city} and ${c.region}. We help firms and utilities hire licensed Professional Engineers (PE), process engineers, and construction inspection specialists across treatment, distribution, and collection-system disciplines — for projects reviewed under ${c.authority} and beyond.`,
    `Metro Associates runs a dedicated water and wastewater search practice across ${c.city} and ${c.region}, connecting firms and utilities with licensed Professional Engineers (PE), process engineers, and construction inspection specialists reviewed under ${c.authority}.`,
    `We're a specialized water and wastewater engineering recruiter for ${c.city} and ${c.region} — placing licensed Professional Engineers (PE), process engineers, and inspection specialists across treatment, distribution, and collection-system work.`,
  ]);
  const introPara2 = pickVariant(`${c.slug}:water:intro2`, [
    `From treatment plant upgrades to collection-system rehabilitation and stormwater compliance, we match vetted talent to the regulatory, operational, and performance demands of complex water infrastructure programs.`,
    `Whether it's a treatment plant upgrade, collection-system rehab, or stormwater compliance work, we match vetted talent to what each program actually demands — regulatory, operational, and technical.`,
    flagshipProgram
      ? `Locally, that has included work like ${flagshipProgram.toLowerCase()} — we match vetted talent to the regulatory, operational, and performance demands of that kind of water infrastructure program.`
      : `From treatment plant upgrades to collection-system rehabilitation and stormwater compliance, we match vetted talent to the regulatory, operational, and performance demands of complex water infrastructure programs.`,
  ]);
  const skillsIntro = pickVariant(`${c.slug}:water:skillsIntro`, [
    `Every candidate we put forward is screened against the same bar: the modeling software, licensure, and code fluency the role actually demands.`,
    `We screen every candidate against one bar — the modeling software, licensure, and code fluency the role actually calls for, not a generic checklist.`,
    `Every submission is held to the same standard: real fluency in the modeling software, licensure, and codes the role demands.`,
  ]);
  const trendsIntro = pickVariant(`${c.slug}:water:trendsIntro`, [
    `In 2026, the ${c.region} market is defined by aging-infrastructure replacement, PFAS and emerging-contaminant compliance, and federally funded resiliency programs. Demand for licensed process engineers and inspection specialists who can deliver permit-compliant, resilient systems is at an all-time high.`,
    `Heading into 2026, ${c.city}'s market is shaped by aging-infrastructure replacement, PFAS and emerging-contaminant compliance, and federally funded resiliency work. Licensed process engineers and inspection specialists who can deliver permit-compliant, resilient systems remain in short supply.`,
  ]);

  const schemas = [
    serviceSchema({
      serviceName: `Water & Wastewater Engineering Recruiter — ${c.city}, ${c.abbr}`,
      description: `Specialized water and wastewater engineering staffing and executive search in ${c.city}, ${c.state}. We place licensed PEs, process engineers, and construction inspection specialists.`,
      path,
      areaCity: c.city,
      areaState: c.state,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Water & Wastewater Engineering Recruiter", path: "/water-wastewater-recruiter" },
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
              <span className="mono-label text-amber-400">{"//"} Water &amp; Wastewater Engineering Recruiting — {c.abbr}</span>
            </div>
            <h1 className="display mt-6 text-[10.5vw] leading-[0.95] text-white sm:text-5xl lg:text-[4.4rem]">
              Water &amp; Wastewater Recruiter
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
              <span className="mono-label text-amber-500">{"//"} {c.city} Water &amp; Wastewater Recruiting</span>
              <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
                Specialized staffing for {c.city} <span className="text-brand-500">water infrastructure</span>
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
                  {WATER_EXPERTISE.map((e) => (
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
              Water &amp; wastewater roles we place in {c.city}
            </h2>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {WATER_ROLES.map((r, i) => (
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
              Water &amp; wastewater skills &amp; software we recruit for in {c.city}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate text-pretty">
              {skillsIntro}
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {WATER_SKILLS.map((s) => (
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
                2026 {c.city} water &amp; wastewater hiring
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                {trendsIntro}
              </p>
            </div>
            <div className="border border-navy-950/10 bg-white p-8 sm:p-10">
              <p className="mono-label text-slate-500">Representative 2026 compensation</p>
              <div className="mt-6 flex flex-col divide-y divide-navy-950/10">
                {WATER_SALARIES.map((s) => (
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

      {/* Local water/wastewater-heavy programs */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} Projects we support</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Supporting {c.city} water &amp; wastewater programs
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {c.localPrograms.map((p) => (
              <div key={p} className="flex items-start gap-3 border border-navy-950/10 bg-white p-5 text-[15px] font-medium text-navy-950">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-navy-950/12 text-brand-500">
                  <IconBolt className="h-4.5 w-4.5" />
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
              Water &amp; wastewater recruiting in {c.city} — FAQ
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
            {WATER_WHY.map((w, i) => {
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
                Hiring water &amp; wastewater engineers in {c.city}?
              </h3>
              <p className="mt-2 text-ink-300">
                Tell us about the role — we&apos;ll deliver a vetted shortlist of
                licensed {c.abbr} water and wastewater talent, backed by our placement guarantee.
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
          {WATER_CITIES.length > 1 && (
            <div className="mt-14">
              <p className="mono-label text-slate-500">Other markets we serve</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {WATER_CITIES.filter((x) => x.slug !== c.slug).map((x) => (
                  <Link
                    key={x.slug}
                    href={`/water-wastewater-recruiter/${x.slug}`}
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
