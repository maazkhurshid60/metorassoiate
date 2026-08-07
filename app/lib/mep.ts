// Data for the programmatic "MEP Engineering Recruiter — {City}" pages.
// Parallel to lib/cities.ts (civil), but MEP-specific: Mechanical, Electrical &
// Plumbing engineering for buildings, data centers, healthcare, and industry —
// NOT highways/bridges. Each city carries unique copy (marketNote + local work)
// so pages are not thin/duplicate content; shared content is reused across all.
//
// Same 50 metros as lib/cities.ts, so every civil city page has an MEP
// counterpart at the same slug.

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
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    authority: "LADBS",
    marketNote:
      "Across the LA basin, we place mechanical, electrical, and plumbing engineers on the studio, hospital, and high-rise projects driving one of the country's largest MEP markets — plus a Title 24 code that keeps electrification front and center.",
    localPrograms: [
      "Title 24 electrification & decarbonization retrofits",
      "Studio, soundstage, and entertainment-campus MEP",
      "Hospital and life-science facility infrastructure",
      "High-rise residential and mixed-use MEP systems",
      "LAX modernization mechanical & electrical scopes",
    ],
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    authority: "Chicago DOB",
    marketNote:
      "In Chicagoland, we staff the mechanical, electrical, and controls engineers behind the region's hospital systems, data-center corridor, and high-rise commercial towers.",
    localPrograms: [
      "Elk Grove / Chicagoland data-center build-outs",
      "Hospital and academic-medical-center MEP",
      "High-rise commercial and mixed-use systems",
      "Building Energy Rating Ordinance compliance",
      "O'Hare terminal MEP and airfield electrical",
    ],
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "Texas",
    abbr: "TX",
    region: "the Gulf Coast",
    authority: "City of Houston Permitting Center",
    marketNote:
      "Home to the Texas Medical Center, the largest medical complex in the world, Houston runs one of the country's most demanding healthcare and energy-facility MEP markets.",
    localPrograms: [
      "Texas Medical Center hospital & research MEP",
      "Petrochemical and energy-facility power systems",
      "High-rise commercial and mixed-use MEP",
      "Data center design-build",
      "Port of Houston industrial infrastructure",
    ],
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    abbr: "AZ",
    region: "the Southwest",
    authority: "City of Phoenix Planning & Development",
    marketNote:
      "With TSMC and Intel investing tens of billions in the Valley, Phoenix has become a national hub for semiconductor and hyperscale data-center MEP work.",
    localPrograms: [
      "Semiconductor fab mechanical & electrical (TSMC, Intel)",
      "Hyperscale data-center power & cooling",
      "Hospital and life-science facility infrastructure",
      "High-rise and master-planned commercial MEP",
      "Sky Harbor airport terminal systems",
    ],
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    authority: "Philadelphia L&I",
    marketNote:
      "Anchored by Penn, CHOP, and a dense academic-medical corridor, Philadelphia recruits MEP engineers for some of the most complex hospital and life-science builds in the Mid-Atlantic.",
    localPrograms: [
      "Academic medical center & hospital MEP",
      "Life-science and lab-space build-outs",
      "Higher-education campus infrastructure",
      "High-rise commercial and mixed-use systems",
      "Building energy-benchmarking compliance retrofits",
    ],
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    abbr: "TX",
    region: "North Texas",
    authority: "City of Dallas Development Services",
    marketNote:
      "Across the Dallas–Fort Worth metroplex, we place MEP engineers on the corporate-campus, data-center, and hospital projects fueling one of the nation's fastest-growing commercial markets.",
    localPrograms: [
      "Corporate headquarters campus MEP",
      "Data-center design-build (DFW corridor)",
      "Hospital and healthcare-system infrastructure",
      "High-rise commercial and mixed-use systems",
      "DFW Airport terminal mechanical & electrical",
    ],
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    region: "the Southeast",
    authority: "City of Atlanta Office of Buildings",
    marketNote:
      "In metro Atlanta, we recruit MEP talent for the film/studio, data-center, and hospital-system projects behind the Southeast's busiest production and logistics hub.",
    localPrograms: [
      "Film & television studio campus MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "High-rise commercial and mixed-use systems",
      "Hartsfield-Jackson airport terminal MEP",
    ],
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    authority: "Miami-Dade RER",
    marketNote:
      "Across South Florida, we place mechanical, electrical, and plumbing engineers on the high-rise residential, hospitality, and hospital projects reshaping the Miami skyline.",
    localPrograms: [
      "High-rise residential and hospitality MEP",
      "Hurricane-resilient backup power & critical systems",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "PortMiami and marine-terminal electrical",
    ],
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    authority: "Seattle DCI",
    marketNote:
      "In the Puget Sound region, we recruit MEP engineers for the tech-campus, life-science, and high-rise projects built to one of the country's strictest energy codes.",
    localPrograms: [
      "Tech-campus mechanical & electrical (Amazon, Microsoft)",
      "Life-science and lab-space build-outs",
      "Seattle Energy Code compliance & electrification",
      "High-rise commercial and mixed-use systems",
      "Sea-Tac airport terminal MEP",
    ],
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "Colorado",
    abbr: "CO",
    region: "the Mountain West",
    authority: "Denver CPD",
    marketNote:
      "Across the Front Range, we place MEP engineers on the hospital, higher-education, and data-center projects supporting metro Denver's rapid commercial growth.",
    localPrograms: [
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus MEP",
      "Data-center design-build",
      "High-rise commercial and mixed-use systems",
      "Denver International Airport terminal MEP",
    ],
  },
  {
    slug: "boston-ma",
    city: "Boston",
    state: "Massachusetts",
    abbr: "MA",
    region: "New England",
    authority: "Boston ISD",
    marketNote:
      "Home to the Kendall Square biotech cluster and a world-class hospital network, Boston is one of the country's most demanding markets for life-science and healthcare MEP.",
    localPrograms: [
      "Kendall Square life-science and lab-space MEP",
      "Academic medical center & hospital infrastructure",
      "Higher-education campus systems",
      "High-rise commercial and mixed-use MEP",
      "Building emissions reduction (BERDO-style) retrofits",
    ],
  },
  {
    slug: "minneapolis-mn",
    city: "Minneapolis",
    state: "Minnesota",
    abbr: "MN",
    region: "the Upper Midwest",
    authority: "Minneapolis Regulatory Services",
    marketNote:
      "In the Twin Cities, we staff the mechanical, electrical, and controls engineers behind the region's healthcare-system, data-center, and high-rise commercial projects.",
    localPrograms: [
      "Healthcare-system and hospital infrastructure",
      "Data-center design-build",
      "High-rise commercial and mixed-use systems",
      "Higher-education campus MEP",
      "MSP airport terminal mechanical & electrical",
    ],
  },
  {
    slug: "detroit-mi",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    region: "the Great Lakes",
    authority: "Detroit BSEED",
    marketNote:
      "Across metro Detroit, we recruit MEP engineers for the automotive-plant, hospital, and higher-education projects central to the region's manufacturing and healthcare base.",
    localPrograms: [
      "Automotive plant mechanical & electrical systems",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus MEP",
      "Data-center design-build",
      "Detroit Metro airport terminal systems",
    ],
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    abbr: "NC",
    region: "the Carolinas",
    authority: "Charlotte-Mecklenburg Code Enforcement",
    marketNote:
      "In Charlotte, we place MEP engineers on the banking-campus, data-center, and hospital projects driving one of the Southeast's fastest-growing commercial markets.",
    localPrograms: [
      "Corporate & banking headquarters campus MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "High-rise commercial and mixed-use systems",
      "Charlotte Douglas airport terminal MEP",
    ],
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    abbr: "TN",
    region: "the Tennessee Valley",
    authority: "Metro Nashville Codes Department",
    marketNote:
      "Home to HCA Healthcare and a booming hospitality sector, Nashville recruits MEP engineers for healthcare-HQ, hospital, and high-rise hospitality projects at a fast pace.",
    localPrograms: [
      "Healthcare headquarters & hospital-system MEP",
      "Hospitality and high-rise mixed-use systems",
      "Data-center design-build",
      "Higher-education campus infrastructure",
      "Nashville International airport terminal MEP",
    ],
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    abbr: "OR",
    region: "the Pacific Northwest",
    authority: "Portland BDS",
    marketNote:
      "In the Portland metro's Silicon Forest, we place MEP engineers on the semiconductor, healthcare, and decarbonization-driven retrofit projects central to the region.",
    localPrograms: [
      "Semiconductor fab mechanical & electrical (Hillsboro)",
      "Hospital and healthcare-system infrastructure",
      "Building electrification & decarbonization retrofits",
      "High-rise commercial and mixed-use systems",
      "Data-center design-build",
    ],
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    abbr: "NV",
    region: "the Southwest",
    authority: "Clark County Building Department",
    marketNote:
      "In the Las Vegas valley, we recruit MEP engineers for the resort-casino, arena, and hospitality projects behind one of the most mechanically complex building markets in the country.",
    localPrograms: [
      "Resort-casino and hospitality MEP",
      "Arena and large-venue mechanical & electrical",
      "Data-center design-build",
      "High-rise residential and mixed-use systems",
      "Harry Reid airport terminal MEP",
    ],
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    abbr: "OH",
    region: "the Midwest",
    authority: "Columbus Building & Zoning Services",
    marketNote:
      "With Intel's multibillion-dollar chip campus underway, central Ohio has become one of the fastest-growing semiconductor and data-center MEP markets in the country.",
    localPrograms: [
      "Intel semiconductor mega-fab mechanical & electrical",
      "Hyperscale data-center power & cooling",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus MEP",
      "High-rise commercial and mixed-use systems",
    ],
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    abbr: "UT",
    region: "the Mountain West",
    authority: "SLC Building Services",
    marketNote:
      "Along the Wasatch Front's Silicon Slopes, we place MEP engineers on the tech-campus, healthcare, and data-center projects supporting the region's rapid growth.",
    localPrograms: [
      "Silicon Slopes tech-campus MEP",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "Higher-education campus systems",
      "Salt Lake City International airport terminal MEP",
    ],
  },
  {
    slug: "kansas-city-mo",
    city: "Kansas City",
    state: "Missouri",
    abbr: "MO",
    region: "the Heartland",
    authority: "KCMO Codes Administration",
    marketNote:
      "Across the Kansas City metro, we recruit MEP engineers for the data-center, hospital, and animal-health-corridor projects powering the region's two-state commercial base.",
    localPrograms: [
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Animal-health & life-science facility MEP",
      "Higher-education campus systems",
      "KCI airport terminal mechanical & electrical",
    ],
  },
  {
    slug: "indianapolis-in",
    city: "Indianapolis",
    state: "Indiana",
    abbr: "IN",
    region: "the Midwest",
    authority: "Indianapolis DBNS",
    marketNote:
      "Home to Eli Lilly's expanding manufacturing base, Indianapolis recruits MEP engineers for life-science, hospital, and data-center projects at a rapidly growing pace.",
    localPrograms: [
      "Life-science and pharmaceutical-manufacturing MEP",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "High-rise commercial and mixed-use systems",
      "Indianapolis International airport terminal MEP",
    ],
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "Wisconsin",
    abbr: "WI",
    region: "the Great Lakes",
    authority: "Milwaukee DNS",
    marketNote:
      "Across metro Milwaukee, we place MEP engineers on the industrial-manufacturing, hospital, and higher-education projects central to the region's economy.",
    localPrograms: [
      "Industrial and manufacturing-facility MEP",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Data-center design-build",
      "Mitchell International airport terminal MEP",
    ],
  },
  {
    slug: "richmond-va",
    city: "Richmond",
    state: "Virginia",
    abbr: "VA",
    region: "the Mid-Atlantic",
    authority: "Richmond PDR",
    marketNote:
      "Just south of the country's largest data-center market, Richmond has become an overflow hub for hyperscale and enterprise data-center MEP work.",
    localPrograms: [
      "Hyperscale and enterprise data-center MEP",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "High-rise commercial and mixed-use systems",
      "Richmond International airport terminal MEP",
    ],
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "Maryland",
    abbr: "MD",
    region: "the Mid-Atlantic",
    authority: "Baltimore DHCD Permits",
    marketNote:
      "Home to Johns Hopkins, Baltimore recruits MEP engineers for some of the most complex academic-medical and life-science infrastructure in the country.",
    localPrograms: [
      "Johns Hopkins & academic medical center MEP",
      "Life-science and lab-space build-outs",
      "Port and industrial-facility electrical",
      "Higher-education campus systems",
      "Data-center design-build",
    ],
  },
  {
    slug: "new-orleans-la",
    city: "New Orleans",
    state: "Louisiana",
    abbr: "LA",
    region: "the Gulf Coast",
    authority: "NOLA One Stop Permits",
    marketNote:
      "Along the Louisiana Gulf Coast, we place MEP engineers on the hospitality, hospital, and critical-power projects built to withstand the region's hurricane-driven resiliency demands.",
    localPrograms: [
      "Hospitality and high-rise mixed-use MEP",
      "Hurricane-resilient backup power & critical systems",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Louis Armstrong airport terminal MEP",
    ],
  },
  {
    slug: "louisville-ky",
    city: "Louisville",
    state: "Kentucky",
    abbr: "KY",
    region: "the Ohio Valley",
    authority: "Louisville Metro Codes & Regulations",
    marketNote:
      "Home to UPS Worldport, one of the largest automated logistics facilities in the world, Louisville recruits MEP engineers for major logistics, healthcare, and manufacturing projects.",
    localPrograms: [
      "UPS Worldport & logistics-facility MEP",
      "Hospital and healthcare-system infrastructure",
      "Manufacturing-facility mechanical & electrical",
      "Data-center design-build",
      "Louisville airport terminal systems",
    ],
  },
  {
    slug: "oklahoma-city-ok",
    city: "Oklahoma City",
    state: "Oklahoma",
    abbr: "OK",
    region: "the South Central US",
    authority: "OKC Development Services",
    marketNote:
      "In central Oklahoma, we recruit MEP engineers for the healthcare, energy-sector, and data-center projects supporting Oklahoma City's growing commercial base.",
    localPrograms: [
      "Hospital and healthcare-system infrastructure",
      "Energy-sector facility mechanical & electrical",
      "Data-center design-build",
      "Higher-education campus systems",
      "Will Rogers airport terminal MEP",
    ],
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "South Carolina",
    abbr: "SC",
    region: "the Lowcountry",
    authority: "Charleston County Building Services",
    marketNote:
      "Home to Boeing's South Carolina campus, Charleston recruits MEP engineers for aerospace-manufacturing, hospitality, and hospital projects across a fast-growing coastal market.",
    localPrograms: [
      "Boeing & aerospace-manufacturing facility MEP",
      "Hospitality and high-rise mixed-use systems",
      "Hospital and healthcare-system infrastructure",
      "Port and industrial-facility electrical",
      "Higher-education campus systems",
    ],
  },
  {
    slug: "newark-nj",
    city: "Newark",
    state: "New Jersey",
    abbr: "NJ",
    region: "the Northeast",
    authority: "Newark UCC Division",
    marketNote:
      "In northern New Jersey, we recruit MEP engineers for the data-center, port-industrial, and hospital projects serving the greater New York–Newark corridor.",
    localPrograms: [
      "Data-center design-build (northern NJ corridor)",
      "Port and industrial-facility electrical",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Newark Liberty airport terminal MEP",
    ],
  },
  {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "California",
    abbr: "CA",
    region: "the Bay Area",
    authority: "SF DBI",
    marketNote:
      "Across the Bay Area, we place MEP engineers on the tech-headquarters, life-science, and high-rise projects at the center of one of the country's most demanding, code-heavy building markets.",
    localPrograms: [
      "Tech-headquarters campus mechanical & electrical",
      "Life-science and lab-space build-outs (UCSF)",
      "High-rise commercial and mixed-use systems",
      "Building performance & decarbonization retrofits",
      "SFO airport terminal MEP",
    ],
  },
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "California",
    abbr: "CA",
    region: "Southern California",
    authority: "San Diego DSD",
    marketNote:
      "Home to one of the largest biotech clusters in the country, San Diego recruits MEP engineers for life-science, hospital, and high-rise projects across Southern California's southern gateway.",
    localPrograms: [
      "Biotech and life-science lab-space MEP",
      "Hospital and healthcare-system infrastructure",
      "High-rise residential and mixed-use systems",
      "Higher-education campus systems",
      "San Diego International Airport terminal MEP",
    ],
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "Texas",
    abbr: "TX",
    region: "South Texas",
    authority: "San Antonio DSD",
    marketNote:
      "Home to a major military medical and cybersecurity presence, San Antonio recruits MEP engineers for healthcare, military-facility, and data-center projects across South Texas.",
    localPrograms: [
      "Military and federal-facility MEP",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "Higher-education campus systems",
      "San Antonio International Airport terminal MEP",
    ],
  },
  {
    slug: "austin-tx",
    city: "Austin",
    state: "Texas",
    abbr: "TX",
    region: "Central Texas",
    authority: "Austin DSD",
    marketNote:
      "With Tesla, Samsung, and Apple all expanding in Central Texas, Austin has become one of the fastest-growing semiconductor and tech-campus MEP markets in the country.",
    localPrograms: [
      "Semiconductor fab mechanical & electrical (Samsung)",
      "Tech-campus and corporate headquarters MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Austin-Bergstrom airport terminal MEP",
    ],
  },
  {
    slug: "jacksonville-fl",
    city: "Jacksonville",
    state: "Florida",
    abbr: "FL",
    region: "North Florida",
    authority: "Jacksonville Building Inspection Division",
    marketNote:
      "Home to Mayo Clinic Jacksonville, we recruit MEP engineers for healthcare, port-industrial, and hospitality projects across North Florida's largest city.",
    localPrograms: [
      "Mayo Clinic & academic medical center MEP",
      "Port and industrial-facility electrical",
      "Hospitality and high-rise mixed-use systems",
      "Data-center design-build",
      "JAXPORT and marine-terminal infrastructure",
    ],
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    abbr: "FL",
    region: "Central Florida",
    authority: "Orlando Permitting Services",
    marketNote:
      "In our home market of Central Florida, we place MEP engineers on the theme-park, hospitality, and hospital projects behind one of the most mechanically complex entertainment markets in the world.",
    localPrograms: [
      "Theme-park and entertainment-campus MEP",
      "Hospitality and high-rise mixed-use systems",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "Orlando International Airport (MCO) terminal MEP",
    ],
  },
  {
    slug: "pittsburgh-pa",
    city: "Pittsburgh",
    state: "Pennsylvania",
    abbr: "PA",
    region: "Western Pennsylvania",
    authority: "Pittsburgh PLI",
    marketNote:
      "Home to UPMC and a strong university research base, Pittsburgh recruits MEP engineers for hospital, life-science, and higher-education projects across Western Pennsylvania.",
    localPrograms: [
      "UPMC & academic medical center MEP",
      "Life-science and research-lab build-outs (CMU, Pitt)",
      "Higher-education campus systems",
      "Data-center design-build",
      "Pittsburgh International Airport terminal MEP",
    ],
  },
  {
    slug: "cincinnati-oh",
    city: "Cincinnati",
    state: "Ohio",
    abbr: "OH",
    region: "the Ohio Valley",
    authority: "Cincinnati Buildings & Inspections",
    marketNote:
      "Home to Procter & Gamble and Cincinnati Children's, we recruit MEP engineers for consumer-goods, healthcare, and higher-education projects across greater Cincinnati.",
    localPrograms: [
      "Consumer-goods headquarters & manufacturing MEP",
      "Cincinnati Children's & hospital-system infrastructure",
      "Higher-education campus systems",
      "Data-center design-build",
      "CVG airport terminal mechanical & electrical",
    ],
  },
  {
    slug: "cleveland-oh",
    city: "Cleveland",
    state: "Ohio",
    abbr: "OH",
    region: "Northeast Ohio",
    authority: "Cleveland Building & Housing Department",
    marketNote:
      "Home to the Cleveland Clinic, one of the world's leading academic medical centers, Cleveland recruits MEP engineers for hospital, manufacturing, and higher-education projects.",
    localPrograms: [
      "Cleveland Clinic & academic medical center MEP",
      "Manufacturing-facility mechanical & electrical",
      "Higher-education campus systems",
      "Data-center design-build",
      "Cleveland Hopkins airport terminal MEP",
    ],
  },
  {
    slug: "st-louis-mo",
    city: "St. Louis",
    state: "Missouri",
    abbr: "MO",
    region: "the Gateway region",
    authority: "St. Louis Building Division",
    marketNote:
      "Anchored by BJC Healthcare, Washington University Medicine, and the Cortex innovation district, St. Louis recruits MEP engineers for healthcare and life-science projects across a two-state market.",
    localPrograms: [
      "BJC / Washington University Medicine MEP",
      "Cortex life-science and lab-space build-outs",
      "Manufacturing-facility mechanical & electrical",
      "Higher-education campus systems",
      "St. Louis Lambert airport terminal MEP",
    ],
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "North Carolina",
    abbr: "NC",
    region: "the Research Triangle",
    authority: "Raleigh Development Services",
    marketNote:
      "At the center of Research Triangle Park, one of the country's largest life-science and biotech hubs, Raleigh recruits MEP engineers for lab, data-center, and hospital projects at scale.",
    localPrograms: [
      "Research Triangle Park life-science & lab MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "RDU airport terminal mechanical & electrical",
    ],
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "District of Columbia",
    abbr: "DC",
    region: "the National Capital region",
    authority: "DC DOB",
    marketNote:
      "In the National Capital region, we recruit MEP engineers for the federal-facility, hospital, and data-center projects supporting one of the country's most security-driven infrastructure markets.",
    localPrograms: [
      "Federal facility mechanical, electrical & security systems",
      "Hospital and healthcare-system infrastructure",
      "Data-center design-build",
      "Higher-education campus systems",
      "Reagan National & Dulles airport terminal MEP",
    ],
  },
  {
    slug: "hartford-ct",
    city: "Hartford",
    state: "Connecticut",
    abbr: "CT",
    region: "New England",
    authority: "Hartford Development Services",
    marketNote:
      "Home to a dense concentration of insurance-industry headquarters, Hartford recruits MEP engineers for corporate-campus, hospital, and higher-education projects across central Connecticut.",
    localPrograms: [
      "Insurance headquarters campus MEP",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Data-center design-build",
      "Bradley International Airport terminal MEP",
    ],
  },
  {
    slug: "albuquerque-nm",
    city: "Albuquerque",
    state: "New Mexico",
    abbr: "NM",
    region: "the Southwest",
    authority: "Albuquerque Planning Department",
    marketNote:
      "Home to Sandia National Laboratories and Kirtland Air Force Base, Albuquerque recruits MEP engineers for federal-lab, healthcare, and higher-education projects across New Mexico.",
    localPrograms: [
      "National laboratory & federal-facility MEP",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Data-center design-build",
      "Albuquerque International Sunport terminal MEP",
    ],
  },
  {
    slug: "birmingham-al",
    city: "Birmingham",
    state: "Alabama",
    abbr: "AL",
    region: "the Deep South",
    authority: "Birmingham Planning, Engineering & Permits",
    marketNote:
      "Home to UAB Medicine, a major academic medical center, Birmingham recruits MEP engineers for hospital, higher-education, and manufacturing projects across the Deep South.",
    localPrograms: [
      "UAB Medicine & academic medical center MEP",
      "Higher-education campus systems",
      "Manufacturing-facility mechanical & electrical",
      "Data-center design-build",
      "Birmingham-Shuttlesworth airport terminal MEP",
    ],
  },
  {
    slug: "memphis-tn",
    city: "Memphis",
    state: "Tennessee",
    abbr: "TN",
    region: "the Mid-South",
    authority: "Memphis Construction Code Enforcement",
    marketNote:
      "Home to the FedEx World Hub and St. Jude Children's Research Hospital, Memphis recruits MEP engineers for major logistics and healthcare projects across the Mid-South.",
    localPrograms: [
      "FedEx World Hub & logistics-facility MEP",
      "St. Jude & academic medical center infrastructure",
      "Manufacturing-facility mechanical & electrical",
      "Data-center design-build",
      "Memphis International Airport terminal MEP",
    ],
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "Nebraska",
    abbr: "NE",
    region: "the Great Plains",
    authority: "Omaha Planning Department",
    marketNote:
      "Home to several Fortune 500 insurance and finance headquarters, Omaha recruits MEP engineers for corporate-campus, data-center, and hospital projects across the Great Plains.",
    localPrograms: [
      "Corporate & finance headquarters campus MEP",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Eppley Airfield terminal mechanical & electrical",
    ],
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    abbr: "ID",
    region: "the Intermountain West",
    authority: "Boise Planning & Development Services",
    marketNote:
      "Home to Micron's global headquarters, Boise has become a fast-growing semiconductor and data-center MEP market in the Intermountain West.",
    localPrograms: [
      "Micron semiconductor fab mechanical & electrical",
      "Data-center design-build",
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems",
      "Boise Airport terminal MEP",
    ],
  },
  {
    slug: "providence-ri",
    city: "Providence",
    state: "Rhode Island",
    abbr: "RI",
    region: "New England",
    authority: "Providence Inspection & Standards",
    marketNote:
      "Home to Brown University and a growing life-science sector, Providence recruits MEP engineers for hospital, higher-education, and lab-space projects across Rhode Island.",
    localPrograms: [
      "Hospital and healthcare-system infrastructure",
      "Higher-education campus systems (Brown, RISD)",
      "Life-science and lab-space build-outs",
      "Data-center design-build",
      "T.F. Green airport terminal MEP",
    ],
  },
  {
    slug: "buffalo-ny",
    city: "Buffalo",
    state: "New York",
    abbr: "NY",
    region: "Western New York",
    authority: "Buffalo Permit & Inspection Services",
    marketNote:
      "Anchored by the Buffalo Niagara Medical Campus, we place MEP engineers on the hospital, higher-education, and manufacturing projects revitalizing Western New York.",
    localPrograms: [
      "Buffalo Niagara Medical Campus MEP",
      "Higher-education campus systems",
      "Manufacturing-facility mechanical & electrical",
      "Data-center design-build",
      "Buffalo Niagara International Airport terminal MEP",
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
