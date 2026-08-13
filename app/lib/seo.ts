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

/** Deterministically picks one of several variants for a given seed (e.g. a
 *  city slug). Same seed always yields the same variant — stable across
 *  builds/requests — but different cities land on different phrasing instead
 *  of every page in a vertical sharing byte-identical boilerplate paragraphs,
 *  which is what triggers Google's duplicate/thin-content filters at scale. */
export function pickVariant<T>(seed: string, variants: readonly T[]): T {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return variants[Math.abs(hash) % variants.length];
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
  const placeAnswer = pickVariant(`${c.city}:civil:1`, [
    `Yes. Metro Associates is a specialized civil engineering recruiter serving ${c.city} and ${c.region}. We place licensed Professional Engineers (PEs), project managers, and technical specialists on transportation, bridge, water, and construction programs across the metro.`,
    `Yes — ${c.city} is one of the metros we actively recruit for. We source licensed PEs, project managers, and technical specialists across ${c.region} for transportation, bridge, water, and construction work.`,
    `Yes. We run an active civil engineering search practice in ${c.city} and throughout ${c.region}, placing PEs, project managers, and technical specialists into transportation, bridge, water, and construction programs.`,
    `Yes. Metro Associates recruits civil engineering talent for ${c.city} and the wider ${c.region} market — licensed PEs, project managers, and technical specialists working on transportation, bridge, water, and construction programs.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:civil:2`, [
    `We fill roles including Civil Project Manager (PE), Senior Transportation Engineer, Structural/Bridge Engineer, Water Resources Engineer, Traffic/ITS Engineer, Geotechnical Engineer, and Construction Manager — from a single hire to a full project team.`,
    `Common searches in ${c.city} include Civil Project Manager (PE), Senior Transportation Engineer, Structural/Bridge Engineer, Water Resources Engineer, Traffic/ITS Engineer, and Geotechnical Engineer — whether it's one hire or a full project team.`,
    `Our ${c.city} placements span Civil Project Manager (PE), Senior Transportation Engineer, Structural/Bridge Engineer, Water Resources Engineer, Traffic/ITS Engineer, Geotechnical Engineer, and Construction Manager roles.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:civil:3`, [
    `Because we maintain a national pipeline of pre-vetted engineers, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — and every placement is backed by our guarantee.`,
    `Our national pipeline of pre-vetted engineers means a shortlist of qualified ${c.abbr} candidates is usually days away, not weeks — and every placement carries our guarantee.`,
    `Most ${c.city} searches move fast: our pre-vetted national pipeline typically produces a qualified shortlist within days, backed by our placement guarantee.`,
  ]);
  const dotAnswer = pickVariant(`${c.city}:civil:4`, [
    `Yes. We understand NCEES comity and multi-state PE licensure, and we recruit specifically for ${c.dot}, federal agencies, and publicly funded capital programs throughout ${c.state}.`,
    `Yes — NCEES comity and multi-state PE licensure are part of how we screen. We recruit specifically for ${c.dot}, federal agencies, and publicly funded capital programs across ${c.state}.`,
    `Yes. Candidates are screened against ${c.dot}'s and ${c.state}'s licensure requirements, with fluency in NCEES comity for engineers holding PE licenses in multiple states.`,
  ]);
  return [
    { q: `Do you place civil engineers in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What civil engineering roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    { q: `How quickly can you fill a civil engineering position in ${c.city}?`, a: speedAnswer },
    { q: `Do you recruit licensed PEs for ${c.dot} and public infrastructure projects?`, a: dotAnswer },
  ];
}

export function mepFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  const placeAnswer = pickVariant(`${c.city}:mep:1`, [
    `Yes. Metro Associates is a specialized MEP engineering recruiter serving ${c.city} and ${c.region}, placing licensed mechanical, electrical, and plumbing PEs, project managers, and commissioning specialists on complex building projects.`,
    `Yes — we run an active MEP search practice in ${c.city} and across ${c.region}, sourcing licensed mechanical, electrical, and plumbing PEs, project managers, and commissioning specialists.`,
    `Yes. We recruit MEP engineering talent for ${c.city} and the broader ${c.region} market, from licensed mechanical/electrical/plumbing PEs to commissioning specialists on complex building projects.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:mep:2`, [
    `We fill MEP Project Manager (PE), Senior Mechanical/HVAC Engineer, Electrical Engineer, Plumbing & Fire Protection Engineer, Building Automation/Controls Engineer, Energy & Sustainability Engineer, and Commissioning Agent roles.`,
    `Common ${c.city} searches include MEP Project Manager (PE), Senior Mechanical/HVAC Engineer, Electrical Engineer, Plumbing & Fire Protection Engineer, Building Automation/Controls Engineer, and Commissioning Agent.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:mep:3`, [
    `With a national pipeline of pre-vetted MEP professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — every placement backed by our guarantee.`,
    `Our pre-vetted national MEP pipeline usually means a qualified ${c.abbr} shortlist within days, not weeks — every placement backed by our guarantee.`,
  ]);
  const authorityAnswer = pickVariant(`${c.city}:mep:4`, [
    `Yes. We recruit MEP talent for high-rise, healthcare, life-science, data center, and mission-critical facilities — engineers fluent in ASHRAE, NEC, and NFPA standards and reviewed under ${c.authority}.`,
    `Yes. Candidates for high-rise, healthcare, life-science, data center, and mission-critical work are screened for ASHRAE, NEC, and NFPA fluency, matched against ${c.authority}'s code requirements.`,
  ]);
  return [
    { q: `Do you place MEP engineers in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What MEP roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    { q: `How quickly can you fill an MEP position in ${c.city}?`, a: speedAnswer },
    { q: `Do you recruit for data center, healthcare, and mission-critical MEP work?`, a: authorityAnswer },
  ];
}

export function waterFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  const placeAnswer = pickVariant(`${c.city}:water:1`, [
    `Yes. Metro Associates is a specialized water and wastewater engineering recruiter serving ${c.city} and ${c.region}, placing licensed PEs, process engineers, and construction inspection specialists on treatment, distribution, and collection-system programs.`,
    `Yes — we actively recruit water and wastewater engineers for ${c.city} and ${c.region}, from licensed PEs to process engineers and construction inspection specialists.`,
    `Yes. Our water and wastewater search practice covers ${c.city} and ${c.region}, placing PEs, process engineers, and inspection specialists on treatment, distribution, and collection-system work.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:water:2`, [
    `We fill Water/Wastewater Project Engineer (PE), Senior Process Engineer, Water Resources Engineer, Utility/Pipeline Design Engineer, SCADA/Controls Engineer, and Director of Water/Wastewater Engineering roles.`,
    `Typical ${c.city} searches include Water/Wastewater Project Engineer (PE), Senior Process Engineer, Water Resources Engineer, Utility/Pipeline Design Engineer, and SCADA/Controls Engineer.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:water:3`, [
    `With a national pipeline of pre-vetted water and wastewater professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — every placement backed by our guarantee.`,
    `Our pre-vetted national pipeline usually puts a qualified ${c.abbr} shortlist in front of you within days — every placement backed by our guarantee.`,
  ]);
  const authorityAnswer = pickVariant(`${c.city}:water:4`, [
    `Yes. We recruit engineers fluent in NPDES permitting, SCADA and instrumentation, and utility infrastructure rehabilitation, reviewed under ${c.authority} and ${c.state}'s regulatory requirements.`,
    `Yes. Candidates are screened for NPDES permitting, SCADA/instrumentation, and utility rehabilitation experience, matched against ${c.authority} and ${c.state}'s regulatory requirements.`,
  ]);
  return [
    { q: `Do you place water and wastewater engineers in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What water/wastewater roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    { q: `How quickly can you fill a water/wastewater position in ${c.city}?`, a: speedAnswer },
    { q: `Do you recruit for NPDES permitting and utility compliance work?`, a: authorityAnswer },
  ];
}

export function ceiFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  const placeAnswer = pickVariant(`${c.city}:cei:1`, [
    `Yes. Metro Associates is a specialized CEI (Construction Engineering & Inspection) recruiter serving ${c.city} and ${c.region}, placing certified inspectors, resident engineers, and QA/QC specialists on materials testing, bridge, and roadway inspection programs.`,
    `Yes — our CEI search practice covers ${c.city} and ${c.region}, placing certified inspectors, resident engineers, and QA/QC specialists on materials testing, bridge, and roadway inspection work.`,
    `Yes. We recruit CEI talent for ${c.city} and the wider ${c.region} market: certified inspectors, resident engineers, and QA/QC specialists on materials testing, bridge, and roadway programs.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:cei:2`, [
    `We fill CEI Inspector, Senior Construction Inspector, Resident Engineer, Materials Testing Technician/QA Manager, Bridge Inspector, and CEI Project Manager roles.`,
    `Common ${c.city} searches include CEI Inspector, Senior Construction Inspector, Resident Engineer, Materials Testing Technician/QA Manager, and Bridge Inspector.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:cei:3`, [
    `With a national pipeline of pre-vetted, certification-verified inspection professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — every placement backed by our guarantee.`,
    `Our pre-vetted, certification-verified national pipeline usually means a qualified ${c.abbr} shortlist within days — every placement backed by our guarantee.`,
  ]);
  const authorityAnswer = pickVariant(`${c.city}:cei:4`, [
    `Yes. Every candidate's NICET, ACI materials-testing, and NBIS bridge-inspection credentials are confirmed before they reach you, matched against ${c.authority}'s construction and inspection standards.`,
    `Yes. NICET, ACI materials-testing, and NBIS bridge-inspection credentials are verified before any candidate reaches you, matched to ${c.authority}'s inspection standards.`,
  ]);
  return [
    { q: `Do you place CEI and construction inspectors in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What CEI roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    { q: `How quickly can you fill a CEI position in ${c.city}?`, a: speedAnswer },
    { q: `Do you verify NICET, ACI, and bridge-inspection certifications?`, a: authorityAnswer },
  ];
}

export function municipalFaqs(c: {
  city: string; state: string; abbr: string; region: string; authority: string;
}): FaqItem[] {
  const placeAnswer = pickVariant(`${c.city}:municipal:1`, [
    `Yes. Metro Associates is a specialized municipal engineering recruiter serving ${c.city} and ${c.region}, placing licensed PEs, city engineers, and public works leaders for cities, towns, and the consultants who serve them.`,
    `Yes — we run an active municipal engineering search practice in ${c.city} and ${c.region}, placing licensed PEs, city engineers, and public works leaders.`,
    `Yes. We recruit municipal engineering talent for ${c.city} and the wider ${c.region} market, for cities, towns, and the consulting firms that serve them.`,
  ]);
  const rolesAnswer = pickVariant(`${c.city}:municipal:2`, [
    `We fill Municipal Engineer (PE), City/Town Engineer, Public Works Director, Site/Civil Development Engineer, Capital Projects Engineer, and Director of Public Works/Engineering roles.`,
    `Common ${c.city} searches include Municipal Engineer (PE), City/Town Engineer, Public Works Director, Site/Civil Development Engineer, and Capital Projects Engineer.`,
  ]);
  const speedAnswer = pickVariant(`${c.city}:municipal:3`, [
    `With a national pipeline of pre-vetted municipal engineering professionals, we typically deliver a shortlist of qualified ${c.abbr} candidates within days — every placement backed by our guarantee.`,
    `Our pre-vetted national pipeline usually means a qualified ${c.abbr} shortlist within days — every placement backed by our guarantee.`,
  ]);
  const authorityAnswer = pickVariant(`${c.city}:municipal:4`, [
    `Yes. We're fluent in public bidding and procurement processes, capital improvement plan (CIP) cycles, and grant-compliant hiring timelines (SRF, CDBG, ARPA) as administered by ${c.authority}.`,
    `Yes. Public bidding and procurement, capital improvement plan (CIP) cycles, and grant-compliant timelines (SRF, CDBG, ARPA) under ${c.authority} are part of how we plan every search.`,
  ]);
  return [
    { q: `Do you place municipal engineers in ${c.city}, ${c.abbr}?`, a: placeAnswer },
    { q: `What municipal engineering roles do you recruit for in ${c.city}?`, a: rolesAnswer },
    { q: `How quickly can you fill a municipal engineering position in ${c.city}?`, a: speedAnswer },
    { q: `Do you understand municipal procurement and grant-funded hiring timelines?`, a: authorityAnswer },
  ];
}
