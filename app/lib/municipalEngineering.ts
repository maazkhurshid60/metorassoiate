// Data for the programmatic "Municipal Engineering Recruiter — {City}" pages.
// Parallel to lib/cities.ts (civil) and lib/mep.ts (MEP), but focused on
// public-sector work: city/county public works, capital improvement planning,
// site/civil development review, and municipal utilities — NOT state DOT
// highway work or private land-development engineering. Each city carries
// unique copy (marketNote + local work) so pages are not thin/duplicate
// content; shared content is reused across all.
//
// Same 50 metros as lib/cities.ts and lib/mep.ts, so every civil city page
// has a Municipal Engineering counterpart at the same slug.

export interface MunicipalCity {
  slug: string;
  city: string;
  state: string;
  abbr: string;
  region: string;
  authority: string; // local DPW / city engineering / permitting authority referenced in copy
  marketNote: string; // unique subhead / intro sentence for this metro
  localPrograms: string[]; // city/county-specific municipal engineering project types
}

export const MUNICIPAL_CITIES: MunicipalCity[] = [
  {
    slug: "new-york-ny",
    city: "New York",
    state: "New York",
    abbr: "NY",
    region: "the Northeast",
    authority: "New York City Department of Design and Construction (DDC)",
    marketNote:
      "As steward of one of the largest municipal capital portfolios in the country, DDC and DEP are rebuilding water mains, wastewater plants, and streets across all five boroughs under a multi-year capital plan that runs into the billions.",
    localPrograms: [
      "DDC citywide street & water main reconstruction",
      "DEP wastewater treatment plant capital upgrades",
      "Vision Zero pedestrian safety & complete streets",
      "Five-borough site plan & development review",
      "Five-borough library & playground renovations",
    ],
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    authority: "City of Los Angeles Bureau of Engineering (BOE)",
    marketNote:
      "With Measure HLA mandating hundreds of miles of new bus and bike infrastructure and the 2028 Olympics driving a citywide capital push, LA's Bureau of Engineering is staffing one of the busiest municipal project pipelines in the country.",
    localPrograms: [
      "Measure HLA complete-streets implementation",
      "2028 Olympics venue-corridor infrastructure program",
      "LA Sanitation sewer system rehabilitation",
      "Site plan review for infill & TOD development",
      "LA Recreation & Parks capital bond projects",
    ],
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    authority: "Chicago Department of Water Management",
    marketNote:
      "Chicago is in the middle of replacing roughly 400,000 lead service lines — the largest municipal lead-line replacement program in the nation — alongside CDOT's ongoing protected-bikeway build-out.",
    localPrograms: [
      "Citywide lead service line replacement program",
      "CDOT protected bike lane & complete streets",
      "Deep Tunnel-adjacent stormwater capital work",
      "Subdivision & site development plan review",
      "Chicago Park District field house renovations",
    ],
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "Texas",
    abbr: "TX",
    region: "the Gulf Coast",
    authority: "City of Houston Public Works",
    marketNote:
      "Still working through a multi-billion-dollar bond program passed after Hurricane Harvey, Houston Public Works is funding flood-mitigation, drainage, and street rebuilding projects across nearly every part of the city.",
    localPrograms: [
      "Complete Communities street & drainage bond program",
      "Harvey-driven flood mitigation & detention basins",
      "Water/wastewater capital improvement program",
      "Plat & site plan review for rapid annexation growth",
      "Houston Parks Board trail & greenspace program",
    ],
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    abbr: "AZ",
    region: "the Southwest",
    authority: "City of Phoenix Engineering & Water Services Department",
    marketNote:
      "As one of the fastest-growing large cities in the country, Phoenix is extending water, sewer, and street infrastructure into newly annexed territory while investing heavily in water-reuse systems to manage a drought-constrained supply.",
    localPrograms: [
      "Water reuse & drought-resiliency infrastructure",
      "Annexation-driven utility extension program",
      "Street & complete-streets bond program",
      "Subdivision plat & site plan review",
      "Desert park & municipal pool capital projects",
    ],
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    authority: "Philadelphia Water Department / Streets Department",
    marketNote:
      "Philadelphia's Green City, Clean Waters program — a 25-year, multi-billion-dollar green stormwater infrastructure plan to control combined sewer overflows — remains one of the largest municipal environmental infrastructure commitments in the country.",
    localPrograms: [
      "Green City, Clean Waters stormwater program",
      "Combined sewer overflow capital upgrades",
      "Vision Zero complete-streets implementation",
      "Site plan review for TOD & infill corridors",
      "Fairmount Park & rec-center renovation program",
    ],
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    abbr: "TX",
    region: "North Texas",
    authority: "City of Dallas Department of Public Works",
    marketNote:
      "Dallas voters approved a major bond package funding street reconstruction, flood control, and park improvements, and the city's Development Services team is processing a heavy load of plat and site-plan applications tied to metroplex growth.",
    localPrograms: [
      "Bond-funded street reconstruction program",
      "Plat & site plan review for metroplex growth",
      "Dallas Water Utilities main replacement program",
      "Complete streets & sidewalk gap closure",
      "Park & municipal facility bond projects",
    ],
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    region: "the Southeast",
    authority: "City of Atlanta Department of Watershed Management",
    marketNote:
      "Atlanta remains under a federal consent decree to overhaul its aging combined sewer system, one of the largest ongoing capital commitments in the Southeast, running alongside the Renew Atlanta infrastructure bond.",
    localPrograms: [
      "Consent-decree sewer system rehabilitation program",
      "Renew Atlanta bond infrastructure projects",
      "BeltLine-adjacent complete streets corridors",
      "Land disturbance & site development review",
      "Recreation center renovations across the city",
    ],
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    authority: "City of Miami Office of Capital Improvements",
    marketNote:
      "The Miami Forever Bond is funding a wave of sea-level-rise resiliency work — stormwater pump stations, seawalls, and drainage upgrades — as the city adapts its municipal infrastructure to South Florida's flooding risk.",
    localPrograms: [
      "Miami Forever Bond resiliency capital program",
      "Stormwater pump station & seawall projects",
      "Site plan review for high-density development",
      "Complete streets & multimodal corridor projects",
      "Waterfront park & municipal facility upgrades",
    ],
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    authority: "Seattle Department of Transportation (SDOT)",
    marketNote:
      "Seattle is executing the voter-approved Move Seattle levy while Seattle Public Utilities works through the massive Ship Canal combined sewer overflow tunnel — two of the largest municipal capital projects in the Pacific Northwest.",
    localPrograms: [
      "Move Seattle levy bridge & street program",
      "Ship Canal combined sewer overflow tunnel",
      "Land use & site development review",
      "Vision Zero complete streets projects",
      "Community center & branch library upgrades",
    ],
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "Colorado",
    abbr: "CO",
    region: "the Mountain West",
    authority: "Denver Department of Transportation & Infrastructure (DOTI)",
    marketNote:
      "The voter-approved Elevate Denver bond is funding street, bridge, and facility upgrades citywide, even as DOTI's development review teams manage one of the heaviest infill-permitting workloads in the Mountain West.",
    localPrograms: [
      "Elevate Denver bond infrastructure program",
      "Vision Zero pedestrian-safety complete streets program",
      "Site development review for infill growth",
      "Denver Water main coordination projects",
      "Parks & Recreation facility renovation program",
    ],
  },
  {
    slug: "boston-ma",
    city: "Boston",
    state: "Massachusetts",
    abbr: "MA",
    region: "New England",
    authority: "City of Boston Public Works Department",
    marketNote:
      "Climate Ready Boston is driving a wave of coastal-resiliency and flood-adaptation capital planning, layered on top of the city's ongoing complete-streets and water/sewer rehabilitation commitments.",
    localPrograms: [
      "Climate Ready Boston resiliency planning",
      "Complete streets & Vision Zero implementation",
      "Boston Water and Sewer main rehabilitation",
      "Site plan review for dense infill development",
      "Branch library & municipal building upgrades",
    ],
  },
  {
    slug: "minneapolis-mn",
    city: "Minneapolis",
    state: "Minnesota",
    abbr: "MN",
    region: "the Upper Midwest",
    authority: "City of Minneapolis Public Works Department",
    marketNote:
      "Minneapolis 2040's zoning reforms have pushed site-plan review volume to record levels, while the city's Municipal State Aid street program and lake-protection stormwater rules keep engineering demand steady year-round.",
    localPrograms: [
      "Minneapolis 2040 zoning-driven site plan review",
      "Municipal State Aid street reconstruction program",
      "Chain-of-lakes stormwater protection program",
      "Complete streets & protected bikeway projects",
      "Neighborhood rec-center renovation program",
    ],
  },
  {
    slug: "detroit-mi",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    region: "the Great Lakes",
    authority: "City of Detroit Water and Sewerage Department",
    marketNote:
      "Detroit's green stormwater infrastructure retrofit program is tackling a legacy combined sewer system while the city repurposes thousands of vacant parcels into new development, keeping site-review demand high.",
    localPrograms: [
      "Green stormwater infrastructure retrofit program",
      "Vacant-lot & neighborhood site development review",
      "Water main & lead service line replacement",
      "Neighborhood street reconstruction program",
      "Recreation center & park revitalization projects",
    ],
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    abbr: "NC",
    region: "the Carolinas",
    authority: "City of Charlotte Engineering & Property Management Department",
    marketNote:
      "Charlotte's Strategic Mobility Plan bond is funding a decade of street and multimodal projects, while rapid annexation across the metro keeps the city's subdivision and site-plan review teams at capacity.",
    localPrograms: [
      "Strategic Mobility Plan bond infrastructure program",
      "Annexation-driven subdivision & site plan review",
      "Charlotte Water main extension program",
      "Complete streets & sidewalk connectivity program",
      "Greenway & municipal facility capital projects",
    ],
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    abbr: "TN",
    region: "the Tennessee Valley",
    authority: "Metro Nashville Department of Public Works",
    marketNote:
      "Nashville's voter-approved Choose How You Move transportation program is funding sidewalks, signals, and transit corridors as Metro struggles to keep infrastructure pace with one of the country's fastest-growing populations.",
    localPrograms: [
      "Choose How You Move transportation program",
      "Rapid-growth subdivision & site plan review",
      "Metro Water Services main replacement program",
      "Sidewalk gap-closure & neighborhood complete streets",
      "Metro Parks greenway capital projects",
    ],
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    abbr: "OR",
    region: "the Pacific Northwest",
    authority: "Portland Bureau of Transportation (PBOT)",
    marketNote:
      "Portland's Fixing Our Streets paving levy funds a backlog of pavement work, while the Bureau of Environmental Services maintains the city's landmark green-stormwater infrastructure built to relieve the Big Pipe combined sewer system.",
    localPrograms: [
      "Fixing Our Streets paving levy program",
      "Green stormwater infrastructure maintenance",
      "Land division & site development review",
      "Vision Zero complete streets corridor projects",
      "Community center capital renovation program",
    ],
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    abbr: "NV",
    region: "the Southwest",
    authority: "City of Las Vegas Department of Public Works",
    marketNote:
      "As master-planned communities keep expanding into the valley, Las Vegas Public Works and the regional flood control district are running parallel capital programs for drainage, streets, and utility extension.",
    localPrograms: [
      "Regional flood control district drainage projects",
      "Master-planned community site plan review",
      "Street & complete-streets capital program",
      "Municipal water/wastewater capital improvements",
      "Municipal pool & park capital projects",
    ],
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    abbr: "OH",
    region: "the Midwest",
    authority: "City of Columbus Department of Public Service",
    marketNote:
      "Intel's mega-fab campus east of Columbus has triggered a wave of annexation and utility-extension work, while the city's Blueprint Columbus program separates aging combined sewers across older neighborhoods.",
    localPrograms: [
      "Intel-corridor utility extension & annexation work",
      "Blueprint Columbus sewer separation program",
      "Site plan & subdivision review for rapid growth",
      "Complete streets & sidewalk program",
      "Columbus Recreation & Parks capital projects",
    ],
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    abbr: "UT",
    region: "the Mountain West",
    authority: "Salt Lake City Engineering Division",
    marketNote:
      "The city's Funding Our Future sales-tax initiative is rebuilding streets and replacing aging water pipe citywide, even as Silicon Slopes growth along the Wasatch Front drives steady site-plan review demand.",
    localPrograms: [
      "Funding Our Future streets bond program",
      "Water pipe replacement capital program",
      "Site plan review for Silicon Slopes growth",
      "Complete streets & bikeway network expansion",
      "Community center & rec-facility upgrades",
    ],
  },
  {
    slug: "kansas-city-mo",
    city: "Kansas City",
    state: "Missouri",
    abbr: "MO",
    region: "the Heartland",
    authority: "City of Kansas City Public Works Department",
    marketNote:
      "Kansas City's Smart Sewer program, built under a federal consent decree, is one of the largest combined sewer overflow control programs in the Midwest, running for another two decades of capital work.",
    localPrograms: [
      "Smart Sewer consent-decree overflow program",
      "Street preservation capital improvement program",
      "Site plan & plat review for two-state growth",
      "Complete streets & sidewalk gap program",
      "KC Parks & Recreation facility projects",
    ],
  },
  {
    slug: "indianapolis-in",
    city: "Indianapolis",
    state: "Indiana",
    abbr: "IN",
    region: "the Midwest",
    authority: "City of Indianapolis Department of Public Works",
    marketNote:
      "DigIndy, the city's 28-mile deep-tunnel system for combined sewer overflow control, is one of the largest public works projects in Indianapolis history, alongside a steady thoroughfare-plan street rebuilding program.",
    localPrograms: [
      "DigIndy deep tunnel overflow control program",
      "Thoroughfare plan street reconstruction program",
      "Site development review for Lilly-corridor growth",
      "Complete streets & sidewalk expansion program",
      "Municipal facility ADA upgrade program",
    ],
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "Wisconsin",
    abbr: "WI",
    region: "the Great Lakes",
    authority: "City of Milwaukee Department of Public Works",
    marketNote:
      "Milwaukee's aging combined sewer network and freeway-adjacent street corridors drive a steady rehabilitation cycle, layered on top of industrial-site redevelopment along the Menomonee Valley.",
    localPrograms: [
      "Combined sewer system rehabilitation program",
      "Complete streets reconstruction program",
      "Menomonee Valley industrial site plan review",
      "Milwaukee Water Works main replacement program",
      "Regional parks facility coordination projects",
    ],
  },
  {
    slug: "richmond-va",
    city: "Richmond",
    state: "Virginia",
    abbr: "VA",
    region: "the Mid-Atlantic",
    authority: "City of Richmond Department of Public Utilities",
    marketNote:
      "Richmond is executing a long-term combined sewer overflow control plan while data-center growth just south of the city pushes utility-extension and site-plan demand across Chesterfield-adjacent corridors.",
    localPrograms: [
      "Combined sewer overflow long-term control plan",
      "Data-center-corridor utility extension projects",
      "Site plan & subdivision review for utility-district growth",
      "Complete streets & sidewalk program",
      "Recreation center & library renovation program",
    ],
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "Maryland",
    abbr: "MD",
    region: "the Mid-Atlantic",
    authority: "City of Baltimore Department of Public Works",
    marketNote:
      "Baltimore is midway through a consent-decree-driven overhaul of its sewer system, one of the largest capital commitments in city history, while aging water mains across older neighborhoods keep replacement crews busy.",
    localPrograms: [
      "Federal consent-decree sewer rehabilitation program",
      "Water main replacement capital program",
      "Site plan review for waterfront redevelopment",
      "Complete streets & sidewalk program",
      "Playground & neighborhood park renovation program",
    ],
  },
  {
    slug: "new-orleans-la",
    city: "New Orleans",
    state: "Louisiana",
    abbr: "LA",
    region: "the Gulf Coast",
    authority: "City of New Orleans Department of Public Works",
    marketNote:
      "Below sea level and prone to subsidence, New Orleans runs an unusually heavy drainage and pump-station capital program through the Sewerage & Water Board, paired with constant street and catch-basin reconstruction.",
    localPrograms: [
      "Sewerage & Water Board pump station upgrades",
      "Subsidence-driven street & catch basin repair",
      "Site plan & subdivision review for redevelopment parcels",
      "Resiliency-corridor complete streets projects",
      "NORD park & playground renovation program",
    ],
  },
  {
    slug: "louisville-ky",
    city: "Louisville",
    state: "Kentucky",
    abbr: "KY",
    region: "the Ohio Valley",
    authority: "Louisville Metro Public Works & Assets Department",
    marketNote:
      "Louisville MSD's federal consent decree for sewer overflow control remains one of the region's largest capital programs, running alongside Metro's Move Louisville complete-streets initiative.",
    localPrograms: [
      "MSD consent-decree sewer overflow program",
      "Move Louisville complete streets implementation",
      "Site plan & subdivision review for logistics growth",
      "Street resurfacing capital program",
      "Louisville Metro Parks facility renovations",
    ],
  },
  {
    slug: "oklahoma-city-ok",
    city: "Oklahoma City",
    state: "Oklahoma",
    abbr: "OK",
    region: "the South Central US",
    authority: "City of Oklahoma City Public Works Department",
    marketNote:
      "MAPS 4, Oklahoma City's voter-approved sales-tax capital program, is funding streets, sidewalks, parks, and public facilities citywide — one of the most sweeping municipal capital plans in the South Central US.",
    localPrograms: [
      "MAPS 4 capital infrastructure program",
      "Street & sidewalk reconstruction program",
      "Utilities Department water/wastewater capital work",
      "Site plan & plat review for suburban growth",
      "MAPS 4-funded library & senior-center projects",
    ],
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "South Carolina",
    abbr: "SC",
    region: "the Lowcountry",
    authority: "City of Charleston Department of Public Service",
    marketNote:
      "The Church Creek drainage basin program is Charleston's response to chronic tidal flooding, and it runs alongside sea-level-rise seawall work and careful infrastructure retrofits within the historic peninsula district.",
    localPrograms: [
      "Church Creek drainage basin flood mitigation program",
      "Sea-level-rise seawall & resiliency capital work",
      "Historic-district infrastructure retrofit review",
      "Site plan review for coastal growth corridor",
      "Waterfront park & marina facility upgrades",
    ],
  },
  {
    slug: "newark-nj",
    city: "Newark",
    state: "New Jersey",
    abbr: "NJ",
    region: "the Northeast",
    authority: "City of Newark Department of Water and Sewer Utilities",
    marketNote:
      "Newark's rapid, nationally cited lead service line replacement program swapped out tens of thousands of lines in just a few years, and the city continues to coordinate heavy port-adjacent utility work.",
    localPrograms: [
      "Rapid citywide lead line replacement program",
      "Port-adjacent infrastructure & utility coordination",
      "Site plan review for transit-oriented redevelopment",
      "Complete streets & sidewalk improvement program",
      "Recreation center capital renovation program",
    ],
  },
  {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "California",
    abbr: "CA",
    region: "the Bay Area",
    authority: "San Francisco Public Works",
    marketNote:
      "The Sewer System Improvement Program is a multi-decade, multi-billion-dollar rebuild of San Francisco's combined sewer and stormwater infrastructure — one of the largest municipal capital programs on the West Coast.",
    localPrograms: [
      "Sewer System Improvement Program capital projects",
      "Vision Zero complete streets implementation",
      "Site plan review for dense urban infill",
      "Street resurfacing & paving capital program",
      "SF Rec & Park facility renovation program",
    ],
  },
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "California",
    abbr: "CA",
    region: "Southern California",
    authority: "City of San Diego Engineering & Capital Projects Department",
    marketNote:
      "San Diego's Pure Water program is building a major potable-reuse system to diversify the city's water supply, while a large deferred-maintenance backlog keeps street-repair crews and engineers busy citywide.",
    localPrograms: [
      "Pure Water potable reuse infrastructure program",
      "Street repair & resurfacing backlog program",
      "Site plan review for coastal infill development",
      "Complete streets & mobility corridor projects",
      "Library & park facility capital projects",
    ],
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "Texas",
    abbr: "TX",
    region: "South Texas",
    authority: "City of San Antonio Public Works Department",
    marketNote:
      "A recent voter-approved bond is funding street and drainage improvements across San Antonio, while SAWS extends water and sewer trunk lines to keep pace with growth along the city's northern and southern edges.",
    localPrograms: [
      "Bond-funded street & drainage program",
      "SAWS utility main extension coordination",
      "Site plan & plat review for growth corridors",
      "Complete streets & sidewalk program",
      "Library & recreation bond-funded projects",
    ],
  },
  {
    slug: "austin-tx",
    city: "Austin",
    state: "Texas",
    abbr: "TX",
    region: "Central Texas",
    authority: "City of Austin Public Works Department",
    marketNote:
      "Austin's voter-approved mobility bond is funding major corridor construction citywide, and the Development Services Department is processing a record volume of site-plan and subdivision applications tied to tech-driven growth.",
    localPrograms: [
      "Mobility bond corridor construction program",
      "Site plan & subdivision review for tech-driven growth",
      "Austin Water main extension & capacity upgrades",
      "Complete streets & urban trail program",
      "Austin Parks & Recreation facility capital program",
    ],
  },
  {
    slug: "jacksonville-fl",
    city: "Jacksonville",
    state: "Florida",
    abbr: "FL",
    region: "North Florida",
    authority: "City of Jacksonville Public Works Department",
    marketNote:
      "Jacksonville's septic-to-sewer conversion program is tackling water-quality issues left by decades of unincorporated development, even as the city's broad geographic footprint keeps annexation-driven growth steady.",
    localPrograms: [
      "Septic-to-sewer conversion capital program",
      "Site plan review for annexation-driven growth",
      "Street resurfacing & drainage capital program",
      "Complete streets & sidewalk build-out program",
      "Community center & aquatic facility upgrades",
    ],
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    abbr: "FL",
    region: "Central Florida",
    authority: "City of Orlando Public Works Department",
    marketNote:
      "Orlando's lake-heavy topography drives an unusually active stormwater resiliency program, while tourism-corridor growth and steady residential development keep the city's site-plan review teams at full capacity.",
    localPrograms: [
      "Lake-basin stormwater resiliency program",
      "Tourism-corridor infrastructure capital projects",
      "Site plan review for rapid residential growth",
      "Complete streets & sidewalk investment program",
      "Recreation & aquatic facility capital projects",
    ],
  },
  {
    slug: "pittsburgh-pa",
    city: "Pittsburgh",
    state: "Pennsylvania",
    abbr: "PA",
    region: "Western Pennsylvania",
    authority: "City of Pittsburgh Department of Mobility and Infrastructure (DOMI)",
    marketNote:
      "Pittsburgh's hillside terrain and hundreds of aging bridges and retaining walls drive a steady landslide-mitigation and structural capital program, while PWSA works through its own lead service line replacement effort.",
    localPrograms: [
      "PWSA lead service line replacement program",
      "Hillside stormwater & landslide mitigation projects",
      "Bridge & retaining wall capital program",
      "Complete streets & paving program",
      "Neighborhood park & rec-facility upgrades",
    ],
  },
  {
    slug: "cincinnati-oh",
    city: "Cincinnati",
    state: "Ohio",
    abbr: "OH",
    region: "the Ohio Valley",
    authority: "City of Cincinnati Department of Transportation and Engineering (DOTE)",
    marketNote:
      "MSD's Lick Run watershed project turned a piped urban creek into daylighted green infrastructure — a nationally recognized model for controlling combined sewer overflow that continues to expand across the city.",
    localPrograms: [
      "Greater Cincinnati MSD consent-decree overflow program",
      "Lick Run watershed green-infrastructure project",
      "Street reconstruction & paving capital program",
      "Site plan & subdivision review for urban infill",
      "Park & recreation center renovation program",
    ],
  },
  {
    slug: "cleveland-oh",
    city: "Cleveland",
    state: "Ohio",
    abbr: "OH",
    region: "Northeast Ohio",
    authority: "City of Cleveland Department of Public Works",
    marketNote:
      "Cleveland's Complete and Green Streets policy is reshaping corridor design citywide, while Cleveland Water works through an aging distribution network that serves much of Northeast Ohio beyond the city limits.",
    localPrograms: [
      "Complete and Green Streets implementation",
      "Cleveland Water main replacement program",
      "Site plan review for lakefront redevelopment",
      "Bridge & culvert rehabilitation program",
      "Cleveland lakefront park & marina upgrades",
    ],
  },
  {
    slug: "st-louis-mo",
    city: "St. Louis",
    state: "Missouri",
    abbr: "MO",
    region: "the Gateway region",
    authority: "City of St. Louis Street Department",
    marketNote:
      "MSD's Project Clear consent-decree program is a multi-billion-dollar, multi-decade capital effort to eliminate sewer overflows across the metro, running alongside redevelopment-driven site-plan review near the Cortex innovation district.",
    localPrograms: [
      "Project Clear consent-decree sewer program",
      "Street & sidewalk capital reconstruction program",
      "Cortex-district site plan review",
      "Complete streets & bikeway expansion",
      "Recreation facility renovation & ADA upgrades",
    ],
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "North Carolina",
    abbr: "NC",
    region: "the Research Triangle",
    authority: "City of Raleigh Engineering Services Department",
    marketNote:
      "As one of the fastest-growing cities in the Research Triangle, Raleigh's Engineering Services team is managing a record backlog of subdivision and site-plan applications alongside a steadily expanding public-utilities capacity program.",
    localPrograms: [
      "Research Triangle growth-driven site plan review",
      "Public utilities capacity expansion program",
      "Sidewalk gap-closure & complete streets program",
      "Stormwater capital improvement program",
      "Greenway & park capital improvement program",
    ],
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "District of Columbia",
    abbr: "DC",
    region: "the National Capital region",
    authority: "District Department of Transportation (DDOT)",
    marketNote:
      "DC Water's Clean Rivers Project, a tunnel-based combined sewer overflow control system, is one of the largest environmental infrastructure programs in the country and runs for another decade alongside DDOT's streetscape work.",
    localPrograms: [
      "DC Clean Rivers combined sewer tunnel program",
      "Vision Zero complete streets & signal upgrades",
      "Site plan review for federal-adjacent development",
      "Streetscape & sidewalk capital program",
      "Recreation & municipal facility capital program",
    ],
  },
  {
    slug: "hartford-ct",
    city: "Hartford",
    state: "Connecticut",
    abbr: "CT",
    region: "New England",
    authority: "City of Hartford Department of Public Works",
    marketNote:
      "The Metropolitan District Commission's regional sewer separation program is replacing decades-old combined infrastructure beneath Hartford, even as the city pushes a downtown-revitalization streetscape effort.",
    localPrograms: [
      "MDC sewer separation capital program",
      "Downtown Hartford streetscape & revitalization program",
      "Street & sidewalk reconstruction program",
      "Water main replacement coordination",
      "Municipal building & park renovation program",
    ],
  },
  {
    slug: "albuquerque-nm",
    city: "Albuquerque",
    state: "New Mexico",
    abbr: "NM",
    region: "the Southwest",
    authority: "City of Albuquerque Municipal Development Department",
    marketNote:
      "Albuquerque's arroyo-fed flash-flood risk keeps the city's flood-control capital program unusually active, while aging water and sewer mains across the older core continue a steady replacement cycle.",
    localPrograms: [
      "Arroyo flood-control capital improvement program",
      "Water/sewer main replacement program",
      "Site plan & subdivision review for desert-edge growth",
      "Complete streets & multimodal corridor upgrades",
      "Community center & senior-center upgrades",
    ],
  },
  {
    slug: "birmingham-al",
    city: "Birmingham",
    state: "Alabama",
    abbr: "AL",
    region: "the Deep South",
    authority: "City of Birmingham Department of Transportation",
    marketNote:
      "A downtown revitalization push is driving new streetscape and public-realm investment in Birmingham, layered on top of a citywide street resurfacing program and Birmingham Water Works' main-replacement schedule.",
    localPrograms: [
      "Downtown revitalization streetscape program",
      "Street resurfacing capital improvement program",
      "Site plan review for redevelopment corridors",
      "Birmingham Water Works main replacement coordination",
      "Streetscape-adjacent park & facility upgrades",
    ],
  },
  {
    slug: "memphis-tn",
    city: "Memphis",
    state: "Tennessee",
    abbr: "TN",
    region: "the Mid-South",
    authority: "City of Memphis Division of Public Works",
    marketNote:
      "Accelerate Memphis, the city's aggressive paving initiative, is repairing thousands of lane-miles of deteriorated streets while Memphis works through a federally mandated sanitary sewer overflow consent decree.",
    localPrograms: [
      "Accelerate Memphis paving capital program",
      "Sanitary sewer overflow consent-decree program",
      "Site plan & subdivision review for warehouse-corridor growth",
      "Complete streets & sidewalk repair program",
      "Memphis park & recreation facility renovations",
    ],
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "Nebraska",
    abbr: "NE",
    region: "the Great Plains",
    authority: "City of Omaha Public Works Department",
    marketNote:
      "Omaha is under a federal mandate to eliminate combined sewer overflows into the Missouri River, one of the largest capital undertakings in the city's history, running alongside a steady suburban-growth subdivision workload.",
    localPrograms: [
      "Combined sewer overflow federal-mandate program",
      "Street & arterial capital improvement program",
      "Site plan & subdivision review for suburban growth",
      "Complete streets & trail connectivity program",
      "Riverfront park & recreation facility upgrades",
    ],
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    abbr: "ID",
    region: "the Intermountain West",
    authority: "City of Boise Public Works Department",
    marketNote:
      "Rapid in-migration has pushed Boise's subdivision and site-plan review workload to record levels, while the city expands its water-renewal and reuse infrastructure to keep pace with growth in a water-limited region.",
    localPrograms: [
      "Water renewal & reuse infrastructure expansion",
      "Rapid-growth subdivision & site plan review",
      "Street & sidewalk capital improvement program",
      "Complete streets & multimodal trail projects",
      "Greenbelt & municipal facility capital projects",
    ],
  },
  {
    slug: "providence-ri",
    city: "Providence",
    state: "Rhode Island",
    abbr: "RI",
    region: "New England",
    authority: "City of Providence Department of Public Works",
    marketNote:
      "The Narragansett Bay Commission's combined sewer overflow abatement program is one of the largest environmental infrastructure efforts in Rhode Island, running alongside Providence's downtown and waterfront streetscape revitalization.",
    localPrograms: [
      "Narragansett Bay Commission CSO abatement program",
      "Downtown streetscape revitalization program",
      "Site plan review for downtown & waterfront redevelopment",
      "Street resurfacing & sidewalk reconstruction program",
      "Narragansett waterfront recreation facility projects",
    ],
  },
  {
    slug: "buffalo-ny",
    city: "Buffalo",
    state: "New York",
    abbr: "NY",
    region: "Western New York",
    authority: "City of Buffalo Department of Public Works",
    marketNote:
      "Buffalo's Rain Check green-infrastructure program is a nationally cited model for reducing combined sewer overflow, and it runs alongside a broader waterfront and downtown revitalization capital push.",
    localPrograms: [
      "Rain Check green stormwater infrastructure program",
      "Waterfront revitalization capital projects",
      "Buffalo street reconstruction & paving program",
      "Site plan review for infill redevelopment",
      "Waterfront & downtown facility renovation projects",
    ],
  },
];

export function getMunicipalCity(slug: string): MunicipalCity | undefined {
  return MUNICIPAL_CITIES.find((c) => c.slug === slug);
}

// ── Shared content reused on every Municipal Engineering city page ──────────

export const MUNICIPAL_EXPERTISE = [
  "Municipal Infrastructure Design (roads, water, sewer)",
  "Site / Civil Development Engineering",
  "Public Works & Capital Improvement Planning",
  "Municipal Utility Engineering",
  "Parks, Facilities & Municipal Buildings",
  "Land Development & Subdivision Review",
  "Municipal Stormwater & Drainage Compliance",
  "Grant-Funded Infrastructure Programs (SRF, ARPA, CDBG)",
];

export const MUNICIPAL_SKILLS = [
  "AutoCAD Civil 3D",
  "Bentley OpenRoads / MicroStation",
  "ArcGIS / municipal GIS systems",
  "Municipal permitting software (Accela, eBuilder, Tyler Technologies)",
  "Cityworks / Lucity (asset management)",
  "HEC-RAS / stormwater modeling",
  "Bluebeam Revu",
  "Professional Engineer (PE) license",
  "APWA Certified Public Infrastructure Inspector (CPII)",
  "Municipal code & zoning fluency",
  "Grant/funding compliance (SRF, CDBG, ARPA)",
  "Public bidding & procurement processes",
  "Capital improvement plan (CIP) development",
  "MS4 stormwater permit compliance",
  "ADA / PROWAG right-of-way accessibility compliance",
  "MUTCD traffic engineering standards",
  "OSHA 10/30-Hour",
  "Utility coordination & easement research",
  "Public infrastructure asset lifecycle management",
  "Council / board presentation & public engagement",
];

export const MUNICIPAL_ROLES = [
  "Municipal Engineer (PE)",
  "City / Town Engineer",
  "Public Works Director",
  "Site / Civil Development Engineer",
  "Capital Projects Engineer",
  "Municipal Utilities Engineer",
  "Land Development Review Engineer",
  "Assistant City Engineer",
  "Municipal Project Manager",
  "Director of Public Works / Engineering",
];

export const MUNICIPAL_SALARIES = [
  { role: "Municipal Engineer (EIT)", range: "$65,000 – $88,000" },
  { role: "Licensed PE / City Engineer (Mid-Level)", range: "$98,000 – $140,000" },
  { role: "Public Works Director", range: "$135,000 – $175,000+" },
  { role: "Director of Engineering (Municipality)", range: "$160,000 – $210,000+" },
];

export const MUNICIPAL_WHY = [
  { title: "National Talent Pipeline", body: "Access to a vast database of 50,000+ pre-vetted engineering professionals." },
  { title: "Multi-State Licensing Expertise", body: "We understand NCEES comity and the complexities of multi-state PE licensure." },
  { title: "Passive Candidate Acquisition", body: "Our recruiters reach high-performers who are not actively on job boards." },
  { title: "Scalable Staffing Solutions", body: "From a single city engineer to an entire public works department build-out." },
  { title: "Public-Sector Process Fluency", body: "Fluency in municipal procurement, capital-plan funding cycles, and grant-compliant hiring timelines." },
];
