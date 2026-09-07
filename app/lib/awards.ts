/* The award programs our clients' projects compete in.
 *
 * Metro does not enter these — a recruiting firm can't win an engineering
 * award. What this list is for: the firms we staff do enter them, and the
 * language of the industry ("ACEC Engineering Excellence", "ASHRAE
 * Technology Award", "ENR Best Projects") is how hiring managers and
 * candidates describe the work they want to be part of. Naming the programs
 * on the discipline hubs puts that vocabulary on the page, in context,
 * pointed at the official source.
 *
 * Rules this file follows, and should keep following:
 *   1. No claim that Metro or any named client won anything. If the client
 *      gives us verified wins, those belong here as facts with a year — a
 *      real win beats a list of programs every time.
 *   2. No award logos or winner badges. ENR, ACEC and others license those
 *      to actual winners; using one uninvited is both a trademark problem
 *      and a false impression.
 *   3. Every URL is the organisation's own award page, checked before it
 *      was added. Several of these hosts return 403 to scripted requests
 *      (Cloudflare) — that is bot filtering, not a dead link.
 */

export type Discipline =
  | "civil-engineering-recruiter"
  | "bridge-structural-recruiter"
  | "cei-inspection-recruiter"
  | "mep-engineering-recruiter"
  | "municipal-engineering-recruiter"
  | "water-wastewater-recruiter";

export type AwardProgram = {
  name: string;
  org: string;
  url: string;
  /** One line: what the program actually recognises. */
  what: string;
  /** How far it reaches — the state-level routes are the ones most firms win. */
  reach: string;
  /** "all" = every discipline we recruit for. */
  disciplines: Discipline[] | "all";
};

export const AWARD_PROGRAMS: AwardProgram[] = [
  {
    name: "Engineering Excellence Awards",
    org: "ACEC",
    url: "https://www.acec.org/awards/engineering-excellence-awards/",
    what: "The engineering profession's flagship project competition, judged on innovation, complexity and social value. Categories include Building/Technology Systems, Energy, Water and Transportation.",
    reach: "State → national",
    disciplines: "all",
  },
  {
    name: "ACEC state & metro member organizations",
    org: "ACEC",
    url: "https://www.acec.org/member-center/get-involved/mo-state-sites/",
    what: "National entries must come up through one of 51 state and metropolitan organizations, so every state runs its own Engineering Excellence competition first.",
    reach: "All 50 states + DC",
    disciplines: "all",
  },
  {
    name: "Best Projects & Best of the Best",
    org: "ENR",
    url: "https://www.enr.com/bestprojects/",
    what: "Regional project awards across every state, DC and Puerto Rico — including Specialty Construction, Energy/Industrial, Health Care and Excellence in Sustainability. Regional winners advance to the national round.",
    reach: "Regional → national",
    disciplines: "all",
  },
  {
    name: "Outstanding Civil Engineering Achievement (OCEA)",
    org: "ASCE",
    url: "https://www.asce.org/career-growth/awards-and-honors/outstanding-civil-engineering-achievement-award",
    what: "Running since 1960, ASCE's top project honour for civil engineering skill and contribution to society.",
    reach: "National",
    disciplines: ["civil-engineering-recruiter", "bridge-structural-recruiter"],
  },
  {
    name: "America's Transportation Awards",
    org: "AASHTO",
    url: "https://americastransportationawards.org/",
    what: "State DOT projects judged on quality of life, operations excellence, innovation and safety — regional rounds feed a national Top 12.",
    reach: "Regional → national",
    disciplines: [
      "civil-engineering-recruiter",
      "bridge-structural-recruiter",
      "cei-inspection-recruiter",
    ],
  },
  {
    name: "Prize Bridge Awards",
    org: "AISC / NSBA",
    url: "https://www.aisc.org/bridges/awards/prize-bridge-awards/",
    what: "The steel industry's highest design honour for bridges, awarded since 1928.",
    reach: "National",
    disciplines: ["bridge-structural-recruiter", "civil-engineering-recruiter"],
  },
  {
    name: "Public Works Project of the Year",
    org: "APWA",
    url: "https://www.apwa.org/award/public-works-project-of-the-year-award/",
    what: "Recognises the agency, the consulting engineer and the contractor together, in four cost divisions and five categories.",
    reach: "Chapter → national",
    disciplines: [
      "municipal-engineering-recruiter",
      "civil-engineering-recruiter",
      "cei-inspection-recruiter",
    ],
  },
  {
    name: "Technology Awards",
    org: "ASHRAE",
    url: "https://www.ashrae.org/membership/honors-and-awards/technology-awards-program",
    what: "HVAC and building-systems performance in real, occupied buildings — commercial, health care, education, industrial and residential categories.",
    reach: "Chapter → region → society",
    disciplines: ["mep-engineering-recruiter"],
  },
  {
    name: "Illumination Awards",
    org: "IES",
    url: "https://ia.ies.org/",
    what: "Lighting design and controls — interior, outdoor, energy & environmental, and control innovation.",
    reach: "Section → international",
    disciplines: ["mep-engineering-recruiter"],
  },
  {
    name: "Project Excellence Awards",
    org: "NECA",
    url: "https://www.necanet.org/about-neca/membership/awards-recognition",
    what: "Electrical construction across 13 categories, from design-build and health care to substations and EV infrastructure.",
    reach: "National",
    disciplines: ["mep-engineering-recruiter"],
  },
  {
    name: "MEP Giants",
    org: "Consulting-Specifying Engineer",
    url: "https://www.csemag.com/events-and-awards/mep-giants/",
    what: "The annual ranking of North America's 100 largest MEP and fire-protection engineering firms.",
    reach: "North America",
    disciplines: ["mep-engineering-recruiter"],
  },
  {
    name: "40 Under 40",
    org: "Consulting-Specifying Engineer",
    url: "https://www.csemag.com/events-and-awards/40-under-40/",
    what: "Individual recognition for mechanical, electrical, commissioning, fire/life-safety and energy engineers under 40 — worth knowing about when you're hiring one.",
    reach: "National",
    disciplines: ["mep-engineering-recruiter"],
  },
  {
    name: "WEF awards & utility recognition",
    org: "Water Environment Federation",
    url: "https://www.wef.org/membership--community/awards-recognition/service-awards/",
    what: "More than 30 categories across collection systems, treatment innovation, plant operations and Utility of the Future Today.",
    reach: "Member association → national",
    disciplines: ["water-wastewater-recruiter", "municipal-engineering-recruiter"],
  },
  {
    name: "Local Leadership Awards",
    org: "USGBC",
    url: "https://www.usgbc.org/local-engagements/awards",
    what: "LEED and high-performance building work, recognised at project and individual level.",
    reach: "State & regional",
    disciplines: [
      "mep-engineering-recruiter",
      "municipal-engineering-recruiter",
      "water-wastewater-recruiter",
    ],
  },
];

/** Programs relevant to one discipline hub, cross-discipline ones first. */
export function awardsFor(discipline: Discipline): AwardProgram[] {
  return AWARD_PROGRAMS.filter(
    (a) => a.disciplines === "all" || a.disciplines.includes(discipline),
  );
}

/* The state-by-state route, spelled out.
 *
 * This is the practical answer to "is there an award my firm can actually
 * win?" — ACEC requires national entries to come through a state or metro
 * organization, so all 51 of these run their own competition. Written out
 * rather than left as "check the directory" because the state-name form is
 * how people search for it. */
export const ACEC_STATES: string[] = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

/** The 51st is a metro organization rather than a state. */
export const ACEC_METRO = "Metropolitan Washington";

/** ENR's regional editions — the second nationwide route, by region. */
export const ENR_REGIONS: string[] = [
  "California", "Northwest", "Southwest", "Intermountain", "Colorado/Wyoming",
  "Midwest", "Texas & Louisiana", "Southeast", "MidAtlantic",
  "New York/New Jersey", "New England",
];
