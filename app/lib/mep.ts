// Data for the programmatic "MEP Engineering Recruiter — {City}" pages.
// Parallel to lib/cities.ts (civil), but MEP-specific: Mechanical, Electrical &
// Plumbing engineering for buildings, data centers, healthcare, and industry —
// NOT highways/bridges. Each city carries unique copy (marketNote + local work)
// so pages are not thin/duplicate content; shared content is reused across all.
//
// NOTE: seeded with New York only for review. After sign-off, add the remaining
// metros here (same shape) and every page renders automatically.

export interface MepCity {
  slug: string;
  city: string;
  state: string;
  abbr: string;
  region: string;
  authority: string; // local code / permitting authority referenced in copy
  marketNote: string; // unique subhead / intro sentence for this metro
  localPrograms: string[]; // city/state-specific MEP-heavy project types
}

export const MEP_CITIES: MepCity[] = [
  {
    slug: "new-york-ny",
    city: "New York",
    state: "New York",
    abbr: "NY",
    region: "the Northeast",
    authority: "NYC DOB",
    marketNote:
      "From Midtown high-rises to the outer-borough life-science boom, we place licensed mechanical, electrical, and plumbing engineers on the building systems and decarbonization programs reshaping the New York metro.",
    localPrograms: [
      "Local Law 97 building decarbonization & retrofits",
      "High-rise commercial and mixed-use MEP systems",
      "Hospital & life-science facility infrastructure",
      "Data center and mission-critical power & cooling",
      "Airport terminal MEP (JFK & LaGuardia redevelopment)",
    ],
  },
];

export function getMepCity(slug: string): MepCity | undefined {
  return MEP_CITIES.find((c) => c.slug === slug);
}

// ── Shared content reused on every MEP city page ─────────────────────────────

export const MEP_EXPERTISE = [
  "Mechanical & HVAC Systems Engineering (ASHRAE Standards)",
  "Electrical Power & Distribution Design (NEC / IEEE)",
  "Plumbing & Fire Protection Engineering (NFPA)",
  "Building Automation & Controls (BAS / BMS)",
  "Energy Modeling & Sustainability (LEED / ASHRAE 90.1)",
  "Data Center & Mission-Critical MEP",
  "Building Commissioning (Cx) & Retro-Commissioning",
];

export const MEP_ROLES = [
  "MEP Project Manager (PE)",
  "Senior Mechanical / HVAC Engineer",
  "Electrical Engineer (Power & Lighting)",
  "Plumbing & Fire Protection Engineer",
  "Building Automation / Controls Engineer",
  "Energy & Sustainability Engineer",
  "Commissioning Engineer / Agent (CxA)",
  "MEP BIM / Revit Coordinator",
  "Director of MEP / Engineering Lead",
];

export const MEP_SALARIES = [
  { role: "Mechanical / Electrical Engineer (EIT)", range: "$70,000 – $95,000" },
  { role: "Licensed MEP PE (Mid-Level)", range: "$105,000 – $155,000" },
  { role: "Senior MEP Project Manager", range: "$145,000 – $195,000+" },
  { role: "Director of MEP Engineering", range: "$180,000 – $260,000+" },
];

export const MEP_WHY = [
  {
    title: "National Talent Pipeline",
    body: "Access to a vast database of 50,000+ pre-vetted engineering professionals.",
  },
  {
    title: "Multi-State Licensing Expertise",
    body: "We understand NCEES comity and the complexities of multi-state PE licensure.",
  },
  {
    title: "Passive Candidate Acquisition",
    body: "Our recruiters reach high-performers who are not actively on job boards.",
  },
  {
    title: "Scalable Staffing Solutions",
    body: "From a single PE to an entire MEP team for a multi-year project.",
  },
  {
    title: "Codes & Standards Fluency",
    body: "Fluency in ASHRAE, NEC, NFPA, and IECC requirements for complex building projects.",
  },
];
