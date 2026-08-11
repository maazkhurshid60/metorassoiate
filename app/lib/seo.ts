import { SITE_URL, PHONE, EMAIL } from "./site";

// Central structured-data (JSON-LD) helpers. Only verifiable facts are emitted
// — no fabricated addresses, ratings, or reviews (which risk Google penalties).

const LINKEDIN = "https://www.linkedin.com/company/94152534/";
const FACEBOOK = "https://www.facebook.com/MetropoAssociatesLLC/";

// Organization identity reused as the `provider` on every Service schema.
export const ORG = {
  "@type": "EmploymentAgency",
  "@id": `${SITE_URL}/#organization`,
  name: "Metro Associates",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.webp`,
  image: `${SITE_URL}/interchange-sunset.jpg`,
  telephone: PHONE,
  email: EMAIL,
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: [LINKEDIN, FACEBOOK],
  description:
    "National staffing and executive search firm for civil, transportation (DOT), and MEP engineering — placing licensed PEs, inspectors, and construction leaders, backed by a placement guarantee.",
};

export function organizationSchema() {
  return { "@context": "https://schema.org", ...ORG };
}

// Per-location professional service (drives local/rich results for "<discipline>
// recruiter <city>" queries).
export function serviceSchema(opts: {
  serviceName: string;
  description: string;
  path: string;
  areaCity: string;
  areaState: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}${opts.path}#service`,
    name: opts.serviceName,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: opts.areaCity },
      { "@type": "State", name: opts.areaState },
    ],
    serviceType: opts.serviceName,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export interface FaqItem { q: string; a: string }

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// ── City-specific FAQ copy (also rendered visibly on the page) ───────────────

export function civilFaqs(c: {
  city: string; state: string; abbr: string; region: string; dot: string;
}): FaqItem[] {
  return [
    {
      q: `Do you place civil engineers in ${c.city}, ${c.abbr}?`,
      a: `Yes. Metro Associates is a specialized civil engineering recruiter serving ${c.city} and ${c.region}. We place licensed Professional Engineers (PEs), project managers, and technical specialists on transportation, bridge, water, and construction programs across the metro.`,
    },
    {
      q: `What civil engineering roles do you recruit for in ${c.city}?`,
      a: `We fill roles including Civil Project Manager (PE), Senior Transportation Engineer, Structural/Bridge Engineer, Water Resources Engineer, Traffic/ITS Engineer, Geotechnical Engineer, and Construction Manager — from a single hire to a full project team.`,
    },
    {
      q: `How quickly can you fill a civil engineering position in ${c.city}?`,
      a: `Because we maintain a national pipeline of pre-vetted engineers, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — and every placement is backed by our guarantee.`,
    },
    {
      q: `Do you recruit licensed PEs for ${c.dot} and public infrastructure projects?`,
      a: `Yes. We understand NCEES comity and multi-state PE licensure, and we recruit specifically for ${c.dot}, federal agencies, and publicly funded capital programs throughout ${c.state}.`,
    },
  ];
}

export function mepFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  return [
    {
      q: `Do you place MEP engineers in ${c.city}, ${c.abbr}?`,
      a: `Yes. Metro Associates is a specialized MEP engineering recruiter serving ${c.city} and ${c.region}, placing licensed mechanical, electrical, and plumbing PEs, project managers, and commissioning specialists on complex building projects.`,
    },
    {
      q: `What MEP roles do you recruit for in ${c.city}?`,
      a: `We fill MEP Project Manager (PE), Senior Mechanical/HVAC Engineer, Electrical Engineer, Plumbing & Fire Protection Engineer, Building Automation/Controls Engineer, Energy & Sustainability Engineer, and Commissioning Agent roles.`,
    },
    {
      q: `How quickly can you fill an MEP position in ${c.city}?`,
      a: `With a national pipeline of pre-vetted MEP professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — every placement backed by our guarantee.`,
    },
    {
      q: `Do you recruit for data center, healthcare, and mission-critical MEP work?`,
      a: `Yes. We recruit MEP talent for high-rise, healthcare, life-science, data center, and mission-critical facilities — engineers fluent in ASHRAE, NEC, and NFPA standards and reviewed under ${c.authority}.`,
    },
  ];
}

export function waterFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  return [
    {
      q: `Do you place water and wastewater engineers in ${c.city}, ${c.abbr}?`,
      a: `Yes. Metro Associates is a specialized water and wastewater engineering recruiter serving ${c.city} and ${c.region}, placing licensed PEs, process engineers, and construction inspection specialists on treatment, distribution, and collection-system programs.`,
    },
    {
      q: `What water/wastewater roles do you recruit for in ${c.city}?`,
      a: `We fill Water/Wastewater Project Engineer (PE), Senior Process Engineer, Water Resources Engineer, Utility/Pipeline Design Engineer, SCADA/Controls Engineer, and Director of Water/Wastewater Engineering roles.`,
    },
    {
      q: `How quickly can you fill a water/wastewater position in ${c.city}?`,
      a: `With a national pipeline of pre-vetted water and wastewater professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — every placement backed by our guarantee.`,
    },
    {
      q: `Do you recruit for NPDES permitting and utility compliance work?`,
      a: `Yes. We recruit engineers fluent in NPDES permitting, SCADA and instrumentation, and utility infrastructure rehabilitation, reviewed under ${c.authority} and ${c.state}'s regulatory requirements.`,
    },
  ];
}

export function ceiFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  return [
    {
      q: `Do you place CEI and construction inspectors in ${c.city}, ${c.abbr}?`,
      a: `Yes. Metro Associates is a specialized CEI (Construction Engineering & Inspection) recruiter serving ${c.city} and ${c.region}, placing certified inspectors, resident engineers, and QA/QC specialists on materials testing, bridge, and roadway inspection programs.`,
    },
    {
      q: `What CEI roles do you recruit for in ${c.city}?`,
      a: `We fill CEI Inspector, Senior Construction Inspector, Resident Engineer, Materials Testing Technician/QA Manager, Bridge Inspector, and CEI Project Manager roles.`,
    },
    {
      q: `How quickly can you fill a CEI position in ${c.city}?`,
      a: `With a national pipeline of pre-vetted, certification-verified inspection professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — every placement backed by our guarantee.`,
    },
    {
      q: `Do you verify NICET, ACI, and bridge-inspection certifications?`,
      a: `Yes. Every candidate's NICET, ACI materials-testing, and NBIS bridge-inspection credentials are confirmed before they reach you, matched against ${c.authority}'s construction and inspection standards.`,
    },
  ];
}

export function municipalFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  return [
    {
      q: `Do you place municipal engineers in ${c.city}, ${c.abbr}?`,
      a: `Yes. Metro Associates is a specialized municipal engineering recruiter serving ${c.city} and ${c.region}, placing licensed PEs, city engineers, and public works leaders for cities, towns, and the consultants who serve them.`,
    },
    {
      q: `What municipal engineering roles do you recruit for in ${c.city}?`,
      a: `We fill Municipal Engineer (PE), City/Town Engineer, Public Works Director, Site/Civil Development Engineer, Capital Projects Engineer, and Director of Public Works/Engineering roles.`,
    },
    {
      q: `How quickly can you fill a municipal engineering position in ${c.city}?`,
      a: `With a national pipeline of pre-vetted municipal engineering professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — every placement backed by our guarantee.`,
    },
    {
      q: `Do you understand municipal procurement and grant-funded hiring timelines?`,
      a: `Yes. We're fluent in public bidding and procurement processes, capital improvement plan (CIP) cycles, and grant-compliant hiring timelines (SRF, CDBG, ARPA) as administered by ${c.authority}.`,
    },
  ];
}
