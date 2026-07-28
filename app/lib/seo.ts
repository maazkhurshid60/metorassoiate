import { SITE_URL, PHONE, EMAIL } from "./site";

// Central structured-data (JSON-LD) helpers. Only verifiable facts are emitted
// — no fabricated addresses, ratings, or reviews (which risk Google penalties).

const LINKEDIN = "https://www.linkedin.com/in/patricknovick/";

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
  sameAs: [LINKEDIN],
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
