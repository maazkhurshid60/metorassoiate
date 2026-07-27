// City landing-page data for the programmatic "Civil Engineering Recruiter — {City}"
// pages. Each city carries genuinely city-specific copy (market note + local
// programs) so the pages are not thin/duplicate content. Shared content (roles,
// salaries, expertise) lives below and is reused across every city.

export interface City {
  slug: string;
  city: string;
  state: string;
  abbr: string;
  region: string;
  dot: string; // state DOT shorthand referenced in the copy
  marketNote: string; // unique subhead / intro sentence for this metro
  localPrograms: string[]; // city/state-specific infrastructure programs
}

export const CITIES: City[] = [
  {
    slug: "new-york-ny",
    city: "New York",
    state: "New York",
    abbr: "NY",
    region: "the Northeast",
    dot: "NYSDOT",
    marketNote:
      "From the five boroughs to the Hudson Valley, we place licensed civil and transportation engineers on the bridge, transit, and resiliency programs reshaping the New York metro.",
    localPrograms: [
      "NYSDOT & NYCDOT bridge and roadway programs",
      "MTA transit capital and station modernization",
      "Gateway Program & Hudson River tunnel works",
      "Coastal storm-risk and resiliency infrastructure",
      "JFK & LaGuardia airport redevelopment",
    ],
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    dot: "Caltrans",
    marketNote:
      "Across the LA basin and Southern California, we connect firms with PEs and project leads driving freeway, transit, and water-supply programs at metro scale.",
    localPrograms: [
      "Caltrans District 7 highway & interchange projects",
      "LA Metro rail and transit expansion",
      "Water recycling & groundwater replenishment",
      "Seismic retrofit and bridge rehabilitation",
      "LAX modernization and automated people-mover works",
    ],
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    dot: "IDOT",
    marketNote:
      "In Chicagoland and across the Midwest, we staff the transportation, structural, and water teams behind the region's expressway, transit, and waterway programs.",
    localPrograms: [
      "IDOT & CDOT expressway and bridge programs",
      "CTA & Metra transit modernization",
      "Deep Tunnel (TARP) and stormwater systems",
      "Freight rail and intermodal infrastructure",
      "O'Hare terminal and airfield expansion",
    ],
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "Texas",
    abbr: "TX",
    region: "the Gulf Coast",
    dot: "TxDOT",
    marketNote:
      "Along the Gulf Coast, we place civil, drainage, and construction professionals on the flood-control, highway, and energy-infrastructure programs central to greater Houston.",
    localPrograms: [
      "TxDOT Houston District highway & interchange work",
      "Harris County flood-control and drainage",
      "Coastal spine and storm-surge protection",
      "Port of Houston and industrial infrastructure",
      "METRO transit and regional mobility projects",
    ],
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    abbr: "AZ",
    region: "the Southwest",
    dot: "ADOT",
    marketNote:
      "In the fast-growing Phoenix metro, we help firms scale civil and transportation teams for the freeway, water, and development programs keeping pace with the Valley's expansion.",
    localPrograms: [
      "ADOT & Maricopa freeway and loop programs",
      "Valley Metro light-rail extensions",
      "Water resources and long-term supply planning",
      "Master-planned community infrastructure",
      "Sky Harbor airport capital projects",
    ],
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    dot: "PennDOT",
    marketNote:
      "Across the Philadelphia region and the Mid-Atlantic, we recruit the bridge, transit, and water engineers supporting one of the nation's oldest and busiest infrastructure networks.",
    localPrograms: [
      "PennDOT District 6 bridge & roadway programs",
      "SEPTA transit rebuilding and modernization",
      "Combined-sewer overflow and water-quality work",
      "I-95 reconstruction and corridor projects",
      "Regional rail and freight upgrades",
    ],
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    abbr: "TX",
    region: "North Texas",
    dot: "TxDOT",
    marketNote:
      "Throughout the Dallas–Fort Worth metroplex, we place PEs and project managers on the tollway, transit, and mobility programs powering North Texas growth.",
    localPrograms: [
      "TxDOT Dallas & NTTA tollway programs",
      "DART light-rail and Silver Line transit",
      "Trinity River corridor and flood management",
      "Regional managed-lane and mobility projects",
      "DFW Airport capital improvements",
    ],
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    region: "the Southeast",
    dot: "GDOT",
    marketNote:
      "In metro Atlanta and across the Southeast, we connect firms with civil and transportation talent for the interstate, transit, and water programs driving the region's rapid growth.",
    localPrograms: [
      "GDOT interstate and interchange programs (Major Mobility)",
      "MARTA transit expansion",
      "Combined-sewer and watershed improvements",
      "Managed lanes and regional mobility",
      "Hartsfield-Jackson airport modernization",
    ],
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    dot: "FDOT",
    marketNote:
      "Across South Florida, we recruit the drainage, coastal, and transportation engineers tackling the resiliency, highway, and transit programs unique to the Miami region.",
    localPrograms: [
      "FDOT District 6 highway and bridge programs",
      "Sea-level-rise and stormwater resiliency",
      "SMART Plan transit corridors",
      "PortMiami and marine infrastructure",
      "Water and wastewater capital upgrades",
    ],
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    dot: "WSDOT",
    marketNote:
      "In the Puget Sound region and across the Pacific Northwest, we place civil, structural, and geotechnical engineers on the transit, bridge, and seismic programs defining Seattle's infrastructure.",
    localPrograms: [
      "WSDOT highway, ferry, and bridge programs",
      "Sound Transit light-rail expansion",
      "Seismic retrofit and resilient structures",
      "Fish-passage and environmental restoration",
      "Sea-Tac airport modernization",
    ],
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "Colorado",
    abbr: "CO",
    region: "the Mountain West",
    dot: "CDOT",
    marketNote:
      "Across the Front Range and the Mountain West, we place civil and transportation engineers on the highway, transit, and water programs supporting metro Denver's rapid growth.",
    localPrograms: [
      "CDOT I-70 and Front Range highway programs",
      "RTD transit and FasTracks corridors",
      "Water storage and supply resiliency",
      "Denver International Airport expansion",
      "Flood control and urban stormwater projects",
    ],
  },
  {
    slug: "boston-ma",
    city: "Boston",
    state: "Massachusetts",
    abbr: "MA",
    region: "New England",
    dot: "MassDOT",
    marketNote:
      "Throughout Greater Boston and New England, we recruit the bridge, transit, and coastal engineers modernizing one of the country's oldest and most complex infrastructure networks.",
    localPrograms: [
      "MassDOT bridge and Accelerated Bridge programs",
      "MBTA transit modernization and Green Line works",
      "Coastal resiliency and sea-level adaptation",
      "Allston I-90 multimodal project",
      "Water and sewer (MWRA) capital upgrades",
    ],
  },
  {
    slug: "minneapolis-mn",
    city: "Minneapolis",
    state: "Minnesota",
    abbr: "MN",
    region: "the Upper Midwest",
    dot: "MnDOT",
    marketNote:
      "In the Twin Cities and across the Upper Midwest, we staff the transportation, structural, and water teams behind the region's bridge, transit, and river-corridor programs.",
    localPrograms: [
      "MnDOT highway and bridge programs",
      "Metro Transit light-rail and BRT lines",
      "Mississippi River corridor and lock infrastructure",
      "Stormwater and clean-water initiatives",
      "MSP airport capital projects",
    ],
  },
  {
    slug: "detroit-mi",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    region: "the Great Lakes",
    dot: "MDOT",
    marketNote:
      "Across metro Detroit and the Great Lakes region, we connect firms with civil and transportation talent for the freeway, bridge, and water programs rebuilding regional infrastructure.",
    localPrograms: [
      "MDOT freeway reconstruction (I-75 / I-94) programs",
      "Gordie Howe International Bridge corridor",
      "Great Lakes water and drainage systems",
      "Regional transit and mobility projects",
      "Detroit Metro airport improvements",
    ],
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    abbr: "NC",
    region: "the Carolinas",
    dot: "NCDOT",
    marketNote:
      "In Charlotte and across the Carolinas, we place PEs and project leads on the highway, transit, and development programs driving one of the Southeast's fastest-growing metros.",
    localPrograms: [
      "NCDOT highway and interchange programs",
      "CATS LYNX light-rail expansion",
      "Stormwater and greenway infrastructure",
      "Regional managed-lane projects",
      "Charlotte Douglas airport expansion",
    ],
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    abbr: "TN",
    region: "the Tennessee Valley",
    dot: "TDOT",
    marketNote:
      "Throughout Middle Tennessee, we recruit the transportation, structural, and water engineers supporting Nashville's booming highway, transit, and infrastructure programs.",
    localPrograms: [
      "TDOT highway and bridge programs",
      "Choose How You Move transit initiatives",
      "Cumberland River and flood management",
      "Roadway and mobility improvements",
      "Nashville International airport expansion",
    ],
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    abbr: "OR",
    region: "the Pacific Northwest",
    dot: "ODOT",
    marketNote:
      "In the Portland metro and across the Pacific Northwest, we place civil, structural, and seismic engineers on the bridge, transit, and resiliency programs shaping the region.",
    localPrograms: [
      "ODOT bridge and highway programs",
      "TriMet MAX light-rail projects",
      "Seismic retrofit and resilient structures",
      "Willamette River crossings and corridors",
      "Water and stormwater capital upgrades",
    ],
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    abbr: "NV",
    region: "the Southwest",
    dot: "NDOT",
    marketNote:
      "In the Las Vegas valley, we help firms scale civil and transportation teams for the freeway, water, and development programs keeping pace with Southern Nevada's growth.",
    localPrograms: [
      "NDOT & RTC freeway and interchange programs (Project Neon)",
      "RTC transit and mobility corridors",
      "Water resources and Colorado River supply",
      "Flood-control and desert stormwater systems",
      "Harry Reid airport capital projects",
    ],
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    abbr: "OH",
    region: "the Midwest",
    dot: "Ohio DOT",
    marketNote:
      "Across central Ohio, we staff the transportation, structural, and water teams behind Columbus's fast-expanding highway, transit, and infrastructure programs.",
    localPrograms: [
      "Ohio DOT highway and interchange programs",
      "COTA transit and LinkUS corridors",
      "Water and sewer (Blueprint Columbus) upgrades",
      "Regional roadway and mobility projects",
      "Rickenbacker & John Glenn airport infrastructure",
    ],
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    abbr: "UT",
    region: "the Mountain West",
    dot: "UDOT",
    marketNote:
      "Along the Wasatch Front, we place civil and transportation engineers on the highway, transit, and water programs supporting the Salt Lake City region's rapid expansion.",
    localPrograms: [
      "UDOT highway and interchange programs",
      "UTA TRAX and FrontRunner transit",
      "Great Salt Lake and water-resources planning",
      "Seismic and resilient-structure programs",
      "Salt Lake City International airport rebuild",
    ],
  },
  {
    slug: "kansas-city-mo",
    city: "Kansas City",
    state: "Missouri",
    abbr: "MO",
    region: "the Heartland",
    dot: "MoDOT",
    marketNote:
      "Across the Kansas City metro and the Heartland, we place civil and transportation engineers on the highway, bridge, and transit programs connecting the region's two-state market.",
    localPrograms: [
      "MoDOT highway and bridge programs",
      "KC Streetcar and RideKC transit expansion",
      "Missouri River crossings and levee systems",
      "Regional stormwater and water-quality work",
      "KCI airport terminal and airfield projects",
    ],
  },
  {
    slug: "indianapolis-in",
    city: "Indianapolis",
    state: "Indiana",
    abbr: "IN",
    region: "the Midwest",
    dot: "INDOT",
    marketNote:
      "In central Indiana, we recruit the transportation, structural, and water engineers supporting Indianapolis's interstate, transit, and infrastructure programs.",
    localPrograms: [
      "INDOT interstate and interchange programs",
      "IndyGo bus-rapid-transit corridors",
      "White River corridor and flood management",
      "DigIndy stormwater tunnel system",
      "Indianapolis International airport projects",
    ],
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "Wisconsin",
    abbr: "WI",
    region: "the Great Lakes",
    dot: "WisDOT",
    marketNote:
      "Across metro Milwaukee and the Great Lakes region, we connect firms with civil and transportation talent for the freeway, bridge, and water programs modernizing regional infrastructure.",
    localPrograms: [
      "WisDOT freeway and bridge reconstruction (I-94) programs",
      "MCTS and regional transit projects",
      "Lake Michigan water and harbor infrastructure",
      "Deep-tunnel and stormwater systems",
      "Mitchell International airport improvements",
    ],
  },
  {
    slug: "richmond-va",
    city: "Richmond",
    state: "Virginia",
    abbr: "VA",
    region: "the Mid-Atlantic",
    dot: "VDOT",
    marketNote:
      "Throughout the Richmond region and the Mid-Atlantic, we place PEs and project leads on the highway, bridge, and transit programs serving one of the East Coast's key corridors.",
    localPrograms: [
      "VDOT highway and interchange programs",
      "I-64 and I-95 corridor improvements",
      "GRTC Pulse bus-rapid-transit",
      "James River crossings and stormwater work",
      "Richmond International airport projects",
    ],
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "Maryland",
    abbr: "MD",
    region: "the Mid-Atlantic",
    dot: "MDOT SHA",
    marketNote:
      "In the Baltimore region, we recruit the bridge, transit, and water engineers rebuilding a historic port-city infrastructure network across the Mid-Atlantic.",
    localPrograms: [
      "MDOT SHA highway and bridge programs",
      "Key Bridge replacement and harbor crossings",
      "MTA transit and regional corridors",
      "Port of Baltimore and marine infrastructure",
      "Water and wastewater capital upgrades",
    ],
  },
  {
    slug: "new-orleans-la",
    city: "New Orleans",
    state: "Louisiana",
    abbr: "LA",
    region: "the Gulf Coast",
    dot: "LADOTD",
    marketNote:
      "Along the Louisiana Gulf Coast, we place civil, drainage, and coastal engineers on the flood-protection, highway, and resiliency programs central to greater New Orleans.",
    localPrograms: [
      "LADOTD highway and bridge programs",
      "Hurricane and storm-surge protection systems",
      "Coastal restoration and levee infrastructure",
      "Drainage and pump-station modernization",
      "Louis Armstrong airport and port projects",
    ],
  },
  {
    slug: "louisville-ky",
    city: "Louisville",
    state: "Kentucky",
    abbr: "KY",
    region: "the Ohio Valley",
    dot: "KYTC",
    marketNote:
      "Across the Louisville metro and the Ohio Valley, we staff the transportation, structural, and water teams behind the region's bridge, highway, and river-corridor programs.",
    localPrograms: [
      "KYTC highway and bridge programs",
      "Ohio River crossings and corridor projects",
      "TARC transit and mobility improvements",
      "Stormwater and combined-sewer (MSD) work",
      "Louisville airport and logistics infrastructure",
    ],
  },
  {
    slug: "oklahoma-city-ok",
    city: "Oklahoma City",
    state: "Oklahoma",
    abbr: "OK",
    region: "the South Central US",
    dot: "Oklahoma DOT",
    marketNote:
      "In central Oklahoma, we recruit the highway, structural, and water engineers supporting Oklahoma City's fast-growing transportation and infrastructure programs.",
    localPrograms: [
      "Oklahoma DOT highway and bridge programs",
      "MAPS and regional mobility projects",
      "Streetcar and transit corridors",
      "Stormwater and floodplain management",
      "Will Rogers airport capital projects",
    ],
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "South Carolina",
    abbr: "SC",
    region: "the Lowcountry",
    dot: "SCDOT",
    marketNote:
      "Across the Charleston region and the South Carolina Lowcountry, we place civil, coastal, and transportation engineers on the highway, bridge, and resiliency programs shaping a fast-growing coastal market.",
    localPrograms: [
      "SCDOT highway and bridge programs",
      "Lowcountry Rapid Transit corridor",
      "Coastal flooding and drainage resiliency",
      "Port of Charleston and harbor deepening",
      "Regional roadway and mobility projects",
    ],
  },
  {
    slug: "newark-nj",
    city: "Newark",
    state: "New Jersey",
    abbr: "NJ",
    region: "the Northeast",
    dot: "NJDOT",
    marketNote:
      "In northern New Jersey and the greater New York–Newark corridor, we recruit the bridge, transit, and civil engineers modernizing one of the nation's densest infrastructure networks.",
    localPrograms: [
      "NJDOT highway and bridge programs",
      "NJ TRANSIT rail and Portal Bridge works",
      "Gateway Program regional rail investments",
      "Port and industrial corridor infrastructure",
      "Newark Liberty airport redevelopment",
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

// ── Shared content reused on every city page (and the national hub) ──────────

export const EXPERTISE = [
  "Transportation & Highway Engineering (AASHTO Standards)",
  "Bridge & Structural Engineering",
  "Water, Wastewater & Environmental Engineering",
  "Aviation & Airport Infrastructure (FAA Regulations)",
  "Federal & Defense Infrastructure (USACE / NAVFAC)",
  "Energy & Renewable Infrastructure",
  "Construction Engineering & Inspection (CEI)",
];

export const ROLES = [
  "Civil Project Manager (PE)",
  "Senior Transportation Engineer",
  "Structural / Bridge Engineer",
  "Water Resources & Drainage Engineer",
  "Traffic & ITS Engineer",
  "Geotechnical Engineer",
  "Construction Manager & Resident Engineer",
  "VP of Infrastructure / Office Lead",
  "BIM & VDC Specialists",
];

export const SALARIES = [
  { role: "Civil Engineer (EIT)", range: "$70,000 – $95,000" },
  { role: "Licensed PE (Mid-Level)", range: "$105,000 – $150,000" },
  { role: "Senior Project Manager", range: "$140,000 – $190,000+" },
  { role: "Regional Director", range: "$175,000 – $250,000+" },
];

export const WHY = [
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
    body: "From a single PE to an entire project team for a multi-year contract.",
  },
  {
    title: "Federal & State Compliance",
    body: "Fluency in hiring requirements for FHWA, FAA, and major State DOT projects.",
  },
];
