// Data for the programmatic "Water & Wastewater Engineering Recruiter — {City}" pages.
// Parallel to lib/cities.ts (civil) and lib/mep.ts (MEP), but focused on
// treatment plants, distribution/collection systems, and utility capital
// programs — NOT buildings or highways. Each city carries unique copy
// (marketNote + local work) so pages are not thin/duplicate content;
// shared content is reused across all.
//
// Same 50 metros as lib/cities.ts and lib/mep.ts, so every civil/MEP city
// page has a water/wastewater counterpart at the same slug.

export interface WaterCity {
  slug: string;
  city: string;
  state: string;
  abbr: string;
  region: string;
  authority: string; // local water/wastewater regulatory or utility authority referenced in copy
  marketNote: string; // unique subhead / intro sentence for this metro
  localPrograms: string[]; // city/state-specific water/wastewater-heavy project types
}

export const WATER_CITIES: WaterCity[] = [
  {
    slug: "new-york-ny",
    city: "New York",
    state: "New York",
    abbr: "NY",
    region: "the Northeast",
    authority: "NYC DEP",
    marketNote:
      "New York's water system spans a 19-reservoir Catskill/Delaware watershed and 14 in-city treatment plants, and DEP's Long Term Control Plan for combined sewer overflows keeps design and construction demand for wastewater engineers elevated for the next decade.",
    localPrograms: [
      "Newtown Creek WWTP upgrade & digester program",
      "CSO Long Term Control Plan tunnel & storage projects",
      "Catskill/Delaware watershed filtration avoidance program",
      "Lead service line inventory & replacement",
      "Hunts Point & Coney Island plant resiliency upgrades",
    ],
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    authority: "LA Sanitation & Environment (LASAN)",
    marketNote:
      "Following the 2021 Hyperion plant failure, Los Angeles committed to Operation NEXT — full water recycling of the Hyperion plant's effluent by the mid-2030s — driving one of the largest potable-reuse engineering programs in the nation.",
    localPrograms: [
      "Operation NEXT potable reuse & advanced treatment",
      "Hyperion Water Reclamation Plant modernization",
      "Groundwater replenishment & spreading grounds expansion",
      "Stormwater capture & LA River greenway projects",
      "Lead service line & aging pipe replacement",
    ],
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    authority: "Metropolitan Water Reclamation District of Greater Chicago (MWRD)",
    marketNote:
      "Chicago's Deep Tunnel and Reservoir Plan (TARP), anchored by the massive McCook Reservoir, remains one of the largest stormwater-capture civil works programs ever built, and MWRD continues to hire process and conveyance engineers to operate and expand it.",
    localPrograms: [
      "TARP Deep Tunnel & McCook Reservoir operations",
      "Stickney Water Reclamation Plant process upgrades",
      "Combined sewer overflow reduction program",
      "Lead service line replacement (Chicago's lead pipe legacy)",
      "Calumet & North Side plant nutrient removal upgrades",
    ],
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "Texas",
    abbr: "TX",
    region: "the Gulf Coast",
    authority: "Houston Public Works",
    marketNote:
      "Houston is mid-stream on a multibillion-dollar EPA consent decree to rehabilitate its sanitary sewer system after decades of overflows, creating sustained demand for collection-system and CEI engineers across the city's 6,700+ miles of sewer lines.",
    localPrograms: [
      "EPA sanitary sewer overflow consent decree program",
      "69th Street & Sims Bayou WWTP upgrades",
      "Trenchless sewer rehabilitation (CIPP) citywide",
      "Harvey-driven stormwater & flood resiliency design",
      "Lead service line inventory & replacement",
    ],
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    abbr: "AZ",
    region: "the Southwest",
    authority: "City of Phoenix Water Services Department",
    marketNote:
      "With Colorado River shortages forcing Arizona's first-ever water cutbacks, Phoenix is fast-tracking direct and indirect potable reuse projects around its 91st Avenue treatment plant to secure a drought-resilient supply.",
    localPrograms: [
      "91st Avenue WWTP advanced purification & reuse",
      "Colorado River shortage contingency & supply planning",
      "Groundwater recharge & aquifer storage projects",
      "New River / Agua Fria pipeline extensions",
      "SCADA modernization for citywide water system",
    ],
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    authority: "Philadelphia Water Department (PWD)",
    marketNote:
      "Philadelphia's Green City, Clean Waters program, a 25-year EPA-approved green-infrastructure alternative to a traditional CSO consent decree, has made PWD a national model — and a steady source of stormwater and green-infrastructure design work.",
    localPrograms: [
      "Green City, Clean Waters green stormwater infrastructure",
      "Northeast & Southwest WPCP upgrades",
      "Combined sewer overflow reduction design",
      "Lead service line replacement program",
      "Delaware River intake & source-water protection",
    ],
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    abbr: "TX",
    region: "North Texas",
    authority: "Dallas Water Utilities",
    marketNote:
      "Dallas Water Utilities serves nearly two dozen wholesale customers across the Metroplex from a multi-reservoir system, and rapid North Texas growth is driving a wave of new transmission-main and treatment-plant-expansion work.",
    localPrograms: [
      "Elm Fork & East Side WTP capacity expansion",
      "Trinity River wastewater interceptor upgrades",
      "Wholesale transmission main extensions (Metroplex growth)",
      "Lead service line inventory & replacement",
      "Central Wastewater Treatment Plant nutrient upgrades",
    ],
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    region: "the Southeast",
    authority: "Atlanta Department of Watershed Management",
    marketNote:
      "Atlanta has spent more than two decades and over $2 billion under a federal consent decree rebuilding its sewer system, and the department's capital program remains one of the busiest wastewater engineering markets in the Southeast.",
    localPrograms: [
      "Federal consent decree sewer rehabilitation program",
      "RM Clayton & Utoy Creek WRC upgrades",
      "Combined sewer overflow tunnel maintenance",
      "Lead service line replacement",
      "Chattahoochee River intake resiliency upgrades",
    ],
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    authority: "Miami-Dade Water and Sewer Department (WASD)",
    marketNote:
      "Under a federal consent decree and Florida's ocean-outfall legislation, Miami-Dade WASD is spending billions to eliminate ocean discharges and harden its three regional plants against sea-level rise and storm surge.",
    localPrograms: [
      "Ocean outfall elimination & reuse conversion",
      "Central District WWTP resiliency & upgrade program",
      "Consent decree collection-system rehabilitation",
      "Saltwater intrusion & wellfield protection",
      "Lead service line inventory & replacement",
    ],
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    authority: "King County Wastewater Treatment Division / Seattle Public Utilities",
    marketNote:
      "The newly completed Ship Canal Water Quality Project — a 2.7-mile deep storage tunnel — anchors Seattle's ongoing combined sewer overflow control program alongside King County's regional plant upgrades.",
    localPrograms: [
      "Ship Canal Water Quality Project tunnel operations",
      "West Point Treatment Plant upgrades",
      "Combined sewer overflow control program",
      "Cedar & Tolt watershed source protection",
      "Lead service line replacement",
    ],
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "Colorado",
    abbr: "CO",
    region: "the Mountain West",
    authority: "Denver Water / Metro Wastewater Reclamation District",
    marketNote:
      "Denver Water's Lead Reduction Program, a nationally watched initiative replacing tens of thousands of lead service lines at no cost to residents, has made the metro one of the most active lead-line engineering markets in the country.",
    localPrograms: [
      "Lead Reduction Program service line replacement",
      "Robert W. Hite Treatment Facility upgrades",
      "Gross Reservoir expansion conveyance projects",
      "Front Range transmission main extensions",
      "Stormwater & South Platte River resiliency design",
    ],
  },
  {
    slug: "boston-ma",
    city: "Boston",
    state: "Massachusetts",
    abbr: "MA",
    region: "New England",
    authority: "Massachusetts Water Resources Authority (MWRA)",
    marketNote:
      "Three decades after the Boston Harbor cleanup made Deer Island one of the largest treatment plants in the country, MWRA's aging-infrastructure and PFAS-monitoring programs are driving the next generation of capital work across greater Boston.",
    localPrograms: [
      "Deer Island Treatment Plant infrastructure renewal",
      "Quabbin/Wachusett aqueduct rehabilitation",
      "PFAS monitoring & emerging-contaminant compliance",
      "Combined sewer overflow reduction program",
      "Lead service line replacement",
    ],
  },
  {
    slug: "minneapolis-mn",
    city: "Minneapolis",
    state: "Minnesota",
    abbr: "MN",
    region: "the Upper Midwest",
    authority: "Metropolitan Council Environmental Services (MCES)",
    marketNote:
      "Metropolitan Council Environmental Services operates one of the upper Midwest's largest treatment systems out of the Metro Plant in St. Paul, and Twin Cities utilities are ramping up PFAS treatment ahead of new EPA drinking-water limits.",
    localPrograms: [
      "Metro Plant (St. Paul) process upgrades",
      "PFAS treatment & emerging-contaminant compliance",
      "Mississippi River intake resiliency projects",
      "Lead service line replacement (statewide mandate)",
      "Interceptor sewer rehabilitation program",
    ],
  },
  {
    slug: "detroit-mi",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    region: "the Great Lakes",
    authority: "Great Lakes Water Authority (GLWA)",
    marketNote:
      "Great Lakes Water Authority operates the nation's largest single-site wastewater treatment plant and continues a decades-long regional CSO control program across its 79-community service area.",
    localPrograms: [
      "Detroit WWTP (largest single-site plant) upgrades",
      "Regional combined sewer overflow control program",
      "Lead service line replacement (post-Flint statewide mandate)",
      "Regional water main rehabilitation & looping",
      "Southwest & Northeast interceptor capacity projects",
    ],
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    abbr: "NC",
    region: "the Carolinas",
    authority: "Charlotte Water",
    marketNote:
      "As one of the fastest-growing metros in the country, Charlotte Water is racing to expand treatment capacity along the Catawba River basin to keep pace with record residential and commercial growth.",
    localPrograms: [
      "Catawba River basin treatment capacity expansion",
      "Mallard Creek & McDowell Creek WWTP upgrades",
      "New sewer interceptor extensions (growth corridors)",
      "Lead service line inventory & replacement",
      "Stormwater management & creek restoration projects",
    ],
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    abbr: "TN",
    region: "the Tennessee Valley",
    authority: "Metro Water Services (Nashville)",
    marketNote:
      "Nashville is in the midst of relocating its aging Central Wastewater Treatment Plant off the Cumberland riverfront, one of the largest treatment-plant capital projects underway in the Southeast.",
    localPrograms: [
      "Central WWTP relocation & riverfront redevelopment",
      "Sanitary sewer overflow consent decree program",
      "Cumberland River intake & source-water protection",
      "Lead service line replacement",
      "Booster pump station upgrades (growth-driven)",
    ],
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    abbr: "OR",
    region: "the Pacific Northwest",
    authority: "Portland Bureau of Environmental Services (BES)",
    marketNote:
      "Portland is constructing its first-ever filtration plant for the historically unfiltered Bull Run water supply, a response to new state turbidity requirements, alongside continued operation of the Big Pipe CSO tunnels.",
    localPrograms: [
      "Bull Run filtration plant construction (first-ever)",
      "Big Pipe CSO tunnel system operations",
      "Columbia Boulevard WWTP upgrades",
      "Lead service line replacement",
      "Stormwater management & Willamette River resiliency",
    ],
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    abbr: "NV",
    region: "the Southwest",
    authority: "Southern Nevada Water Authority (SNWA)",
    marketNote:
      "With Lake Mead at historically low levels, Southern Nevada Water Authority runs one of the most aggressive water-recycling and conservation programs in the country, returning nearly all indoor water use back to Lake Mead for credit.",
    localPrograms: [
      "Lake Mead low-lake-level pumping station operations",
      "Water reuse & return-flow credit system expansion",
      "Clark County Water Reclamation District upgrades",
      "Turf-conversion & conservation infrastructure",
      "Desert climate pipeline & valve rehabilitation",
    ],
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    abbr: "OH",
    region: "the Midwest",
    authority: "Columbus Division of Sewerage and Drainage",
    marketNote:
      "Columbus is nearing completion of its Wet Weather Management Plan, a multi-decade, multibillion-dollar consent-decree program of tunnels and plant upgrades to eliminate combined sewer overflows citywide.",
    localPrograms: [
      "Wet Weather Management Plan (Project 2027) CSO tunnels",
      "Jackson Pike & Southerly WWTP upgrades",
      "Lead service line replacement",
      "New growth-corridor water main extensions (Intel campus)",
      "Stormwater management & Scioto River resiliency",
    ],
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    abbr: "UT",
    region: "the Mountain West",
    authority: "Salt Lake City Department of Public Utilities",
    marketNote:
      "As the Great Salt Lake hits record-low levels, Utah's water managers are under mounting pressure to accelerate conservation and reuse infrastructure across the Wasatch Front to reduce diversions from its tributaries.",
    localPrograms: [
      "Great Salt Lake tributary conservation program",
      "Water reclamation facility secondary-effluent reuse",
      "Wasatch Front canyon pipeline rehabilitation",
      "Lead service line inventory & replacement",
      "Central Valley Water Reclamation Facility upgrades",
    ],
  },
  {
    slug: "kansas-city-mo",
    city: "Kansas City",
    state: "Missouri",
    abbr: "MO",
    region: "the Heartland",
    authority: "KC Water",
    marketNote:
      "KC Water's Overflow Control Program, known locally as the Smart Sewer Program, is a 25-year, $2.5 billion federal consent decree effort that remains one of the largest wastewater capital programs in the Midwest.",
    localPrograms: [
      "Smart Sewer Program (federal consent decree)",
      "Blue River & Birmingham WWTP upgrades",
      "Green infrastructure & stormwater retrofits",
      "Lead service line replacement",
      "Missouri River intake resiliency projects",
    ],
  },
  {
    slug: "indianapolis-in",
    city: "Indianapolis",
    state: "Indiana",
    abbr: "IN",
    region: "the Midwest",
    authority: "Citizens Energy Group",
    marketNote:
      "Citizens Energy Group's DigIndy tunnel system, a 28-mile network of deep rock tunnels, anchors one of the Midwest's largest active CSO consent-decree programs as Indianapolis works toward full completion.",
    localPrograms: [
      "DigIndy deep rock tunnel system completion",
      "Belmont & Southport Advanced WWTP upgrades",
      "Lead service line replacement",
      "White River intake & source-water protection",
      "Combined sewer separation projects",
    ],
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "Wisconsin",
    abbr: "WI",
    region: "the Great Lakes",
    authority: "Milwaukee Metropolitan Sewerage District (MMSD)",
    marketNote:
      "MMSD's 28.5-mile Deep Tunnel system, one of the largest wastewater storage tunnels on the Great Lakes, continues to anchor a regional capital program now expanding to address PFAS and nutrient limits on Lake Michigan discharges.",
    localPrograms: [
      "Deep Tunnel storage system operations & expansion",
      "Jones Island & South Shore WWTP upgrades",
      "PFAS & nutrient-removal compliance projects",
      "Lead service line replacement (Milwaukee's lead pipe legacy)",
      "Green infrastructure stormwater program",
    ],
  },
  {
    slug: "richmond-va",
    city: "Richmond",
    state: "Virginia",
    abbr: "VA",
    region: "the Mid-Atlantic",
    authority: "Richmond Department of Public Utilities (DPU)",
    marketNote:
      "Richmond is midway through a multi-decade CSO control program centered on a new deep-rock storage tunnel beneath downtown, one of the largest wastewater capital projects in Virginia's history.",
    localPrograms: [
      "Downtown CSO storage tunnel construction",
      "Shockoe Retention Basin & pump station upgrades",
      "James River intake & source-water protection",
      "Lead service line replacement",
      "Water treatment plant capacity upgrades",
    ],
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "Maryland",
    abbr: "MD",
    region: "the Mid-Atlantic",
    authority: "Baltimore City Department of Public Works (DPW)",
    marketNote:
      "After Back River Wastewater Treatment Plant fell into a widely reported state of disrepair and drew emergency state intervention, Baltimore DPW is now mid-program on a major rebuild of both regional treatment plants.",
    localPrograms: [
      "Back River WWTP emergency rebuild & upgrades",
      "Patapsco WWTP enhanced nutrient removal",
      "Lead service line replacement (pre-1945 housing stock)",
      "Combined sewer overflow consent decree program",
      "Water main rehabilitation (aging cast-iron system)",
    ],
  },
  {
    slug: "new-orleans-la",
    city: "New Orleans",
    state: "Louisiana",
    abbr: "LA",
    region: "the Gulf Coast",
    authority: "Sewerage & Water Board of New Orleans (SWBNO)",
    marketNote:
      "Operating a water and drainage system largely below sea level, the Sewerage & Water Board of New Orleans runs one of the most demanding pump-station and resiliency engineering programs in the country under a longstanding federal consent decree.",
    localPrograms: [
      "Federal consent decree sewer rehabilitation program",
      "Below-sea-level drainage pump station upgrades",
      "Hurricane & storm-surge resiliency design",
      "Aging cast-iron water main replacement",
      "East Bank & West Bank WWTP upgrades",
    ],
  },
  {
    slug: "louisville-ky",
    city: "Louisville",
    state: "Kentucky",
    abbr: "KY",
    region: "the Ohio Valley",
    authority: "Louisville Metropolitan Sewer District (MSD)",
    marketNote:
      "Louisville MSD's Project WIN, a federal consent decree program addressing combined sewer overflows along the Ohio River, has driven more than a decade of steady tunnel and plant-upgrade work.",
    localPrograms: [
      "Project WIN combined sewer overflow tunnels",
      "Morris Forman WWTP upgrades",
      "Ohio River intake & source-water protection",
      "Lead service line replacement",
      "Flood pump station rehabilitation",
    ],
  },
  {
    slug: "oklahoma-city-ok",
    city: "Oklahoma City",
    state: "Oklahoma",
    abbr: "OK",
    region: "the South Central US",
    authority: "Oklahoma City Utilities Department",
    marketNote:
      "Oklahoma City's Utilities Department is investing heavily in new transmission capacity from its Lake Hefner and Lake Draper reservoirs to keep pace with the metro's rapid suburban growth.",
    localPrograms: [
      "Lake Hefner & Lake Draper WTP capacity expansion",
      "North Canadian River WWTP upgrades",
      "New growth-corridor transmission main extensions",
      "Lead service line inventory & replacement",
      "Stormwater & flood control drainage design",
    ],
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "South Carolina",
    abbr: "SC",
    region: "the Lowcountry",
    authority: "Charleston Water System",
    marketNote:
      "As one of the most flood-vulnerable historic downtowns on the Atlantic coast, Charleston Water System is investing heavily in sea-level-rise-resilient pump stations and storm-hardened treatment infrastructure.",
    localPrograms: [
      "Sea-level rise & coastal resiliency pump stations",
      "Plum Island WWTP upgrades",
      "Historic downtown combined sewer rehabilitation",
      "Hurricane-hardened lift station design",
      "Lead service line replacement",
    ],
  },
  {
    slug: "newark-nj",
    city: "Newark",
    state: "New Jersey",
    abbr: "NJ",
    region: "the Northeast",
    authority: "Newark Department of Water and Sewer Utilities",
    marketNote:
      "After a widely publicized lead-in-water crisis, Newark completed one of the fastest full lead service line replacement programs in U.S. history — a model now referenced nationally as EPA's new Lead and Copper Rule Improvements take effect.",
    localPrograms: [
      "Lead service line replacement program (post-crisis model)",
      "Pequannock watershed treatment upgrades",
      "Passaic Valley Sewerage Commission interceptor capacity",
      "Combined sewer overflow reduction program",
      "Port Newark-Elizabeth industrial water infrastructure",
    ],
  },
  {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "California",
    abbr: "CA",
    region: "the Bay Area",
    authority: "San Francisco Public Utilities Commission (SFPUC)",
    marketNote:
      "SFPUC's $8+ billion Sewer System Improvement Program, the largest infrastructure investment in the city's history, is rebuilding the Southeast Treatment Plant's digesters and hardening the system against sea-level rise and seismic risk.",
    localPrograms: [
      "Sewer System Improvement Program (SSIP) digester rebuild",
      "Southeast Treatment Plant modernization",
      "Seismic resiliency upgrades (Hetch Hetchy pipeline)",
      "Lead service line replacement",
      "Combined sewer overflow reduction projects",
    ],
  },
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "California",
    abbr: "CA",
    region: "Southern California",
    authority: "City of San Diego Public Utilities Department",
    marketNote:
      "Pure Water San Diego, a multi-phase potable reuse program designed to supply nearly half the city's water locally by 2035, is one of the largest advanced water treatment build-outs on the West Coast.",
    localPrograms: [
      "Pure Water San Diego advanced purification facilities",
      "Point Loma WWTP outfall reduction & upgrades",
      "North City & South Bay water reclamation expansion",
      "Lead service line inventory & replacement",
      "Cross-border Tijuana River pollution mitigation",
    ],
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "Texas",
    abbr: "TX",
    region: "South Texas",
    authority: "San Antonio Water System (SAWS)",
    marketNote:
      "SAWS manages one of the largest recycled-water distribution networks in the country alongside the Vista Ridge pipeline, a 142-mile regional supply project built to diversify San Antonio away from sole reliance on the Edwards Aquifer.",
    localPrograms: [
      "Vista Ridge regional pipeline operations & expansion",
      "Edwards Aquifer protection & wellhead management",
      "Recycled water ('purple pipe') network expansion",
      "Dos Rios & Leon Creek WRC upgrades",
      "Lead service line replacement",
    ],
  },
  {
    slug: "austin-tx",
    city: "Austin",
    state: "Texas",
    abbr: "TX",
    region: "Central Texas",
    authority: "Austin Water",
    marketNote:
      "Austin Water's Water Forward plan, a 100-year integrated resource strategy adopted after the 2018 Highland Lakes drought scare, is driving new investment in reuse, aquifer storage, and treatment capacity to keep pace with the city's growth.",
    localPrograms: [
      "Water Forward 100-year plan implementation projects",
      "Walnut Creek & South Austin WWTP upgrades",
      "Aquifer storage & recovery expansion",
      "New growth-corridor transmission main extensions",
      "Lead service line inventory & replacement",
    ],
  },
  {
    slug: "jacksonville-fl",
    city: "Jacksonville",
    state: "Florida",
    abbr: "FL",
    region: "North Florida",
    authority: "JEA",
    marketNote:
      "JEA's septic-to-sewer conversion program, one of the largest in the Southeast, is targeting thousands of aging septic systems near the St. Johns River to address longstanding water-quality and environmental-justice concerns.",
    localPrograms: [
      "Septic-to-sewer conversion program (St. Johns River basin)",
      "Buckman & District WWTP upgrades",
      "Lead service line replacement",
      "Coastal resiliency & storm-hardened lift stations",
      "JAXPORT industrial water infrastructure",
    ],
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    abbr: "FL",
    region: "Central Florida",
    authority: "Orlando Utilities Commission (OUC)",
    marketNote:
      "Central Florida's stressed Floridan Aquifer has pushed Orlando toward one of the most extensive reclaimed-water irrigation networks in the country, alongside new alternative water supply projects to meet theme-park-district demand growth.",
    localPrograms: [
      "Reclaimed water irrigation network expansion",
      "Floridan Aquifer alternative water supply projects",
      "Iron Bridge & Conserv II WRF upgrades",
      "Lead service line inventory & replacement",
      "Theme-park district utility infrastructure",
    ],
  },
  {
    slug: "pittsburgh-pa",
    city: "Pittsburgh",
    state: "Pennsylvania",
    abbr: "PA",
    region: "Western Pennsylvania",
    authority: "Pittsburgh Water and Sewer Authority (PWSA) / ALCOSAN",
    marketNote:
      "PWSA has run one of the nation's most aggressive lead service line replacement programs since 2016, while regional utility ALCOSAN advances its billion-dollar Clean Water Plan to control combined sewer overflows across greater Pittsburgh.",
    localPrograms: [
      "Lead service line replacement program (PWSA)",
      "ALCOSAN Clean Water Plan CSO tunnels",
      "Aging cast-iron water main rehabilitation",
      "Allegheny River intake resiliency upgrades",
      "Combined sewer overflow reduction projects",
    ],
  },
  {
    slug: "cincinnati-oh",
    city: "Cincinnati",
    state: "Ohio",
    abbr: "OH",
    region: "the Ohio Valley",
    authority: "Metropolitan Sewer District of Greater Cincinnati (MSD)",
    marketNote:
      "MSD's Project Groundwork, centered on the Lick Run daylighting and green-infrastructure corridor, is a federal consent decree program that has reshaped how the region manages combined sewer overflows.",
    localPrograms: [
      "Project Groundwork green infrastructure (Lick Run)",
      "Mill Creek & Muddy Creek WWTP upgrades",
      "Combined sewer overflow consent decree program",
      "Lead service line replacement",
      "Ohio River intake & source-water protection",
    ],
  },
  {
    slug: "cleveland-oh",
    city: "Cleveland",
    state: "Ohio",
    abbr: "OH",
    region: "Northeast Ohio",
    authority: "Northeast Ohio Regional Sewer District (NEORSD)",
    marketNote:
      "NEORSD's Project Clean Lake, a $3 billion federal consent decree program of deep tunnels and green infrastructure, is one of the largest Great Lakes water-quality investments underway to keep combined sewage out of Lake Erie.",
    localPrograms: [
      "Project Clean Lake deep tunnel construction",
      "Easterly & Southerly WWTP upgrades",
      "Lake Erie nutrient & algal-bloom mitigation",
      "Lead service line replacement",
      "Green infrastructure stormwater program",
    ],
  },
  {
    slug: "st-louis-mo",
    city: "St. Louis",
    state: "Missouri",
    abbr: "MO",
    region: "the Gateway region",
    authority: "Metropolitan St. Louis Sewer District (MSD)",
    marketNote:
      "MSD's Project Clear is a 23-year, $6+ billion federal consent decree program — among the largest in the country — rebuilding combined and sanitary sewers across the St. Louis region.",
    localPrograms: [
      "Project Clear consent decree tunnel & sewer program",
      "Bissell Point & Lemay WWTP upgrades",
      "Combined sewer overflow reduction projects",
      "Lead service line replacement",
      "Mississippi River intake resiliency upgrades",
    ],
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "North Carolina",
    abbr: "NC",
    region: "the Research Triangle",
    authority: "City of Raleigh Public Utilities (Raleigh Water)",
    marketNote:
      "Falls Lake's nutrient-management rules and explosive growth across the Research Triangle are pushing Raleigh Water to expand treatment capacity and tighten nutrient removal at its Neuse River plant simultaneously.",
    localPrograms: [
      "Neuse River Resource Recovery Facility nutrient upgrades",
      "Falls Lake watershed nutrient-management compliance",
      "New growth-corridor water main extensions",
      "Lead service line inventory & replacement",
      "Reclaimed water distribution expansion",
    ],
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "District of Columbia",
    abbr: "DC",
    region: "the National Capital region",
    authority: "DC Water",
    marketNote:
      "DC Water's Clean Rivers Project, a $2.7 billion tunnel program feeding into Blue Plains — the world's largest advanced wastewater treatment plant — anchors one of the most technically demanding water-infrastructure markets in the country.",
    localPrograms: [
      "DC Clean Rivers Project deep tunnel system",
      "Blue Plains Advanced Wastewater Treatment Plant upgrades",
      "Lead service line replacement (LeadFreeDC program)",
      "Anacostia & Potomac River resiliency projects",
      "Combined sewer overflow reduction program",
    ],
  },
  {
    slug: "hartford-ct",
    city: "Hartford",
    state: "Connecticut",
    abbr: "CT",
    region: "New England",
    authority: "Metropolitan District Commission (MDC)",
    marketNote:
      "MDC's Clean Water Project, a multi-decade deep-rock tunnel program under a state consent order, continues to drive combined sewer overflow reduction work across the greater Hartford region.",
    localPrograms: [
      "Clean Water Project deep tunnel program",
      "Hartford WPCF nutrient removal upgrades",
      "Connecticut River intake & source-water protection",
      "Lead service line replacement",
      "Combined sewer overflow reduction projects",
    ],
  },
  {
    slug: "albuquerque-nm",
    city: "Albuquerque",
    state: "New Mexico",
    abbr: "NM",
    region: "the Southwest",
    authority: "Albuquerque Bernalillo County Water Utility Authority (ABCWUA)",
    marketNote:
      "Since shifting its primary supply from a depleting aquifer to the San Juan-Chama surface-water project, ABCWUA has focused capital spending on drought resilience and aquifer-recharge infrastructure across the Rio Grande basin.",
    localPrograms: [
      "San Juan-Chama surface water treatment upgrades",
      "Rio Grande aquifer recharge & storage projects",
      "Southside Water Reclamation Plant upgrades",
      "Lead service line inventory & replacement",
      "Drought contingency & reuse infrastructure",
    ],
  },
  {
    slug: "birmingham-al",
    city: "Birmingham",
    state: "Alabama",
    abbr: "AL",
    region: "the Deep South",
    authority: "Jefferson County Environmental Services / Birmingham Water Works Board",
    marketNote:
      "Jefferson County continues rebuilding its sewer system under a long-running federal consent decree that followed the county's landmark municipal bankruptcy, keeping collection-system rehabilitation work steady across greater Birmingham.",
    localPrograms: [
      "Jefferson County consent decree sewer rehabilitation",
      "Cahaba River & Valley Creek WWTP upgrades",
      "Lead service line replacement",
      "Aging cast-iron water main rehabilitation",
      "Trenchless sewer rehabilitation (CIPP) program",
    ],
  },
  {
    slug: "memphis-tn",
    city: "Memphis",
    state: "Tennessee",
    abbr: "TN",
    region: "the Mid-South",
    authority: "Memphis Light, Gas and Water (MLGW)",
    marketNote:
      "Memphis draws drinking water from the pristine Memphis Sand Aquifer, one of the largest and cleanest groundwater sources in the country, even as the utility works under a federal consent decree to eliminate sanitary sewer overflows citywide.",
    localPrograms: [
      "Memphis Sand Aquifer wellfield protection",
      "Federal consent decree sewer overflow elimination",
      "T.E. Maxson WWTP upgrades",
      "Lead service line inventory & replacement",
      "Stormwater & Wolf River drainage improvements",
    ],
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "Nebraska",
    abbr: "NE",
    region: "the Great Plains",
    authority: "City of Omaha Public Works / Metropolitan Utilities District (MUD)",
    marketNote:
      "Omaha is deep into a $2 billion, multi-decade federal consent decree to control combined sewer overflows into the Missouri River, one of the largest per-capita CSO programs in the country.",
    localPrograms: [
      "CSO consent decree tunnel & separation program",
      "Missouri River intake resiliency upgrades",
      "Papillion Creek WRF upgrades",
      "Lead service line replacement",
      "Missouri River WTP capacity expansion",
    ],
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    abbr: "ID",
    region: "the Intermountain West",
    authority: "City of Boise Public Works",
    marketNote:
      "Boise's newly rebuilt Lander Street Water Renewal Facility has become a testbed for indirect potable reuse concepts as the fast-growing Treasure Valley looks for new supply options beyond the Boise River.",
    localPrograms: [
      "Lander Street Water Renewal Facility upgrades",
      "Boise River water quality & reuse feasibility",
      "New growth-corridor transmission main extensions",
      "Lead service line inventory & replacement",
      "Groundwater recharge & aquifer storage projects",
    ],
  },
  {
    slug: "providence-ri",
    city: "Providence",
    state: "Rhode Island",
    abbr: "RI",
    region: "New England",
    authority: "Narragansett Bay Commission (NBC)",
    marketNote:
      "The Narragansett Bay Commission's three-phase CSO tunnel program has dramatically cut sewage overflows into the bay over the past two decades, and Phase III completion keeps tunnel and pump-station work steady across greater Providence.",
    localPrograms: [
      "CSO tunnel program Phase III completion",
      "Bucklin Point & Field's Point WWTP upgrades",
      "Narragansett Bay water quality monitoring infrastructure",
      "Lead service line replacement",
      "Scituate Reservoir watershed protection",
    ],
  },
  {
    slug: "buffalo-ny",
    city: "Buffalo",
    state: "New York",
    abbr: "NY",
    region: "Western New York",
    authority: "Buffalo Sewer Authority",
    marketNote:
      "Buffalo Sewer Authority's Rain Check green-infrastructure program, developed under a state consent order, is retrofitting the city's aging combined sewer system while Great Lakes water-quality rules push new nutrient-control investment.",
    localPrograms: [
      "Rain Check green infrastructure retrofit program",
      "Bird Island WWTP upgrades",
      "Combined sewer overflow reduction projects",
      "Lead service line replacement (aging housing stock)",
      "Niagara River & Lake Erie intake protection",
    ],
  },
];

export function getWaterCity(slug: string): WaterCity | undefined {
  return WATER_CITIES.find((c) => c.slug === slug);
}

// ── Shared content reused on every water/wastewater city page ────────────────

export const WATER_EXPERTISE = [
  "Water & Wastewater Treatment Plant Design",
  "Water Distribution & Collection Systems",
  "Stormwater Management & Drainage Design",
  "Hydraulic & Hydrologic Modeling",
  "Water/Wastewater Process Engineering",
  "Utility Infrastructure Rehabilitation",
  "Environmental Compliance & Permitting (NPDES)",
  "Construction Engineering & Inspection (CEI)",
];

export const WATER_SKILLS = [
  "AutoCAD Civil 3D",
  "Bentley WaterGEMS",
  "Bentley SewerGEMS",
  "Bentley HAMMER (surge analysis)",
  "EPANET",
  "HEC-RAS / HEC-HMS",
  "InfoWorks ICM",
  "BioWin (process modeling)",
  "ArcGIS / utility GIS",
  "Cityworks / Lucity (asset management)",
  "Bluebeam Revu",
  "Professional Engineer (PE) license",
  "Grade IV Water/Wastewater Operator certification",
  "NPDES permitting fluency",
  "SCADA & instrumentation (Ignition, Wonderware)",
  "Pump station design",
  "Membrane & UV treatment systems",
  "Trenchless rehabilitation (CIPP) methods",
  "Confined space / collection system safety (OSHA)",
  "State DEP/DEQ regulatory fluency",
];

export const WATER_ROLES = [
  "Water/Wastewater Project Engineer (PE)",
  "Senior Process Engineer",
  "Water Resources Engineer",
  "Utility / Pipeline Design Engineer",
  "Water/Wastewater Plant Operations Manager",
  "Environmental Compliance Engineer",
  "Construction Engineer & Inspector (CEI)",
  "SCADA / Controls Engineer",
  "Water Resources Project Manager",
  "Director of Water/Wastewater Engineering",
];

export const WATER_SALARIES = [
  { role: "Water/Wastewater Engineer (EIT)", range: "$68,000 – $92,000" },
  { role: "Licensed PE (Mid-Level)", range: "$100,000 – $145,000" },
  { role: "Senior Project Manager", range: "$140,000 – $185,000+" },
  { role: "Director of Water/Wastewater Engineering", range: "$175,000 – $245,000+" },
];

export const WATER_WHY = [
  { title: "National Talent Pipeline", body: "Access to a vast database of 50,000+ pre-vetted engineering professionals." },
  { title: "Multi-State Licensing Expertise", body: "We understand NCEES comity and the complexities of multi-state PE licensure." },
  { title: "Passive Candidate Acquisition", body: "Our recruiters reach high-performers who are not actively on job boards." },
  { title: "Scalable Staffing Solutions", body: "From a single PE to an entire treatment-plant design team for a multi-year program." },
  { title: "Regulatory & Codes Fluency", body: "Fluency in Clean Water Act / NPDES permitting, state DEP/DEQ requirements, and SRF-funded project compliance." },
];
