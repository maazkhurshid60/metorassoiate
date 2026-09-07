import type { Metadata } from "next";
import Link from "next/link";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import { SALARIES } from "../lib/cities";
import { CEI_SALARIES } from "../lib/ceiInspection";
import { MEP_SALARIES } from "../lib/mep";
import { MUNICIPAL_SALARIES } from "../lib/municipalEngineering";
import { WATER_SALARIES } from "../lib/waterWastewater";
import { SITE_URL } from "../lib/site";
import { ORG } from "../lib/seo";

/* Every role we place, and what it pays — the whole set on one page.
 *
 * These bands already existed, one discipline at a time, buried in the
 * middle of five recruiter pages. Nobody comparing a civil PE against an MEP
 * PE could see both without opening two pages and scrolling, and the
 * question people actually arrive with — "what does this work pay in the
 * US?" — had no single URL to land on.
 *
 * The numbers are not restated here. Each table reads the same exported
 * array its discipline page uses, so a band updated once is updated
 * everywhere and this page can never quietly drift out of step with the
 * page a visitor came from.
 *
 * The URL is the client's, kept verbatim rather than tidied into
 * /salary-guide.
 */

const GROUPS = [
  {
    slug: "civil-engineering-recruiter",
    discipline: "Civil Engineering",
    blurb: "Design, roadway and site civil roles across public infrastructure programmes.",
    salaries: SALARIES,
  },
  {
    slug: "cei-inspection-recruiter",
    discipline: "CEI & Construction Inspection",
    blurb: "Field inspection and resident engineering on state DOT and municipal work.",
    salaries: CEI_SALARIES,
  },
  {
    slug: "mep-engineering-recruiter",
    discipline: "MEP Engineering",
    blurb: "Mechanical, electrical and plumbing design for buildings and data centres.",
    salaries: MEP_SALARIES,
  },
  {
    slug: "municipal-engineering-recruiter",
    discipline: "Municipal Engineering",
    blurb: "City engineering and public works, from EIT through department head.",
    salaries: MUNICIPAL_SALARIES,
  },
  {
    slug: "water-wastewater-recruiter",
    discipline: "Water & Wastewater",
    blurb: "Treatment, collection and conveyance engineering for utilities and consultants.",
    salaries: WATER_SALARIES,
  },
];

const TOTAL_ROLES = GROUPS.reduce((n, g) => n + g.salaries.length, 0);

export const metadata: Metadata = {
  title: `Engineering Salary Guide — ${TOTAL_ROLES} Roles & US Pay Ranges | Metro Associates`,
  description: `What engineering and infrastructure roles pay across the United States — ${TOTAL_ROLES} titles spanning civil, CEI inspection, MEP, municipal and water/wastewater, with ranges by seniority.`,
  keywords: [
    "engineering salary guide",
    "civil engineer salary",
    "CEI inspector salary",
    "MEP engineer salary",
    "municipal engineer salary",
    "water wastewater engineer salary",
    "engineering recruiter salary ranges",
  ],
  alternates: { canonical: `${SITE_URL}/index_themall_awards` },
  openGraph: {
    title: "Engineering Salary Guide — US Pay Ranges by Role",
    description: `${TOTAL_ROLES} engineering and infrastructure titles with US compensation ranges by seniority.`,
    url: `${SITE_URL}/index_themall_awards`,
    type: "website",
  },
};

export default function SalaryGuidePage() {
  return (
    <>
      <HeaderBackdrop />

      <main>
        <section className="relative py-24 sm:py-28">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="mono-label text-amber-500">{"//"} Compensation</span>
              <h1 className="display mt-5 text-4xl text-navy-950 sm:text-5xl lg:text-6xl">
                What this work pays in the United States
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate text-pretty">
                {TOTAL_ROLES} titles across the five disciplines we recruit for, with the
                ranges we see firms actually paying — from entry-level EIT through
                director. Bands reflect base salary on permanent, direct-hire roles and
                move with market, licensure and location.
              </p>
            </div>
          </div>
        </section>

        {GROUPS.map((group, i) => (
          <section
            key={group.slug}
            className={`relative border-t border-navy-950/10 py-20 sm:py-24 ${
              i % 2 === 0 ? "bg-paper" : ""
            }`}
          >
            <div className="container-x">
              <div className="max-w-2xl">
                <span className="mono-label text-amber-500">
                  {"//"} {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display mt-4 text-3xl text-navy-950 sm:text-4xl">
                  {group.discipline}
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate text-pretty">{group.blurb}</p>
              </div>

              <div className="corners mt-10 divide-y divide-navy-950/10 border border-navy-950/10 bg-white px-6">
                {group.salaries.map((s) => (
                  <div key={s.role} className="flex items-center justify-between gap-4 py-4">
                    <span className="text-[15px] font-medium text-navy-950">{s.role}</span>
                    <span className="display text-lg text-amber-500 sm:text-xl">{s.range}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/${group.slug}`}
                className="mono-label mt-6 inline-flex items-center gap-2 text-amber-500 transition-opacity hover:opacity-80"
              >
                {group.discipline} recruiting
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </section>
        ))}

        <section className="relative border-t border-navy-950/10 py-20 sm:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <h2 className="display text-3xl text-navy-950 sm:text-4xl">
                Hiring for one of these, or moving for one?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate text-pretty">
                We place these roles nationwide, and we know what a given market is
                paying this quarter rather than what a survey said last year.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="corners bg-navy-950 px-7 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Talk to a recruiter
                </Link>
                <Link
                  href="/why-us"
                  className="corners border border-navy-950/15 px-7 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:border-navy-950/40"
                >
                  Why Metro
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Each band as an OccupationalSalary entry. This is the page's whole
          substance, so leaving it unstructured would waste the one thing
          Google can read precisely — and it's what makes the page eligible
          to answer a "what does X pay" query directly. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Engineering Salary Guide — US Pay Ranges by Role",
            url: `${SITE_URL}/index_themall_awards`,
            provider: { "@id": ORG["@id"] },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: TOTAL_ROLES,
              itemListElement: GROUPS.flatMap((g, gi) =>
                g.salaries.map((s, si) => ({
                  "@type": "ListItem",
                  position: gi * 10 + si + 1,
                  item: {
                    "@type": "Occupation",
                    name: s.role,
                    occupationalCategory: g.discipline,
                    estimatedSalary: {
                      "@type": "MonetaryAmountDistribution",
                      name: s.range,
                      currency: "USD",
                      duration: "P1Y",
                    },
                    occupationLocation: { "@type": "Country", name: "United States" },
                  },
                })),
              ),
            },
          }),
        }}
      />
    </>
  );
}
