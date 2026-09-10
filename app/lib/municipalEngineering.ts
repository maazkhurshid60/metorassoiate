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
  localPrograms: string[];

  /* Deep-market fields, the same four civil carries and for the same reason:
     without them a city page is roughly 700 words of shared framing with the
     name swapped, which is the profile Google files under "Crawled, currently
     not indexed". These carry the part that is genuinely about the place.

     All optional, so the set can be filled in market by market rather than all
     fifty at once. Written to stay true: named public owners and durable
     characteristics of the work, no dates, no dollar figures, and no claims
     about who is hiring this quarter. */

  /** Who owns or lets the work in this metro. */
  agencies?: string[];
  /** Two paragraphs on what the engineering here consists of. */
  marketDetail?: string[];
  /** What firms are short of, and the local reason why. */
  hiringFocus?: { role: string; why: string }[];
  /** Licensure and prequalification as they bite in this state. */
  licensure?: string; // city/county-specific municipal engineering project types
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
    agencies: [
      "NYC Department of Design & Construction",
      "NYC Department of Transportation",
      "NYC Department of Environmental Protection",
      "NYC Parks",
      "NYC Economic Development Corporation",
    ],
    marketDetail: [
      "New York separates who owns the asset from who builds it. A large share of the city's capital work is designed and delivered by the Department of Design and Construction on behalf of the agency that will own it, which means a municipal engineer here is usually working to another agency's standards through a delivery organisation with its own. Knowing how that hand-off works is a practical skill and it is not one that transfers from a city where public works does everything itself.",
      "The engineering itself is dominated by the right of way. Street reconstruction in this city means sequencing work around water mains, sewers, gas, steam, private utility ducts and a subway beneath some of it, on streets that cannot be closed. Utility coordination is not a supporting task here; it is most of the design problem.",
    ],
    hiringFocus: [
      {
        role: "Street reconstruction engineers",
        why: "Rebuilding a street in a dense, fully occupied right of way is a coordination problem before it is a pavement one, and few markets train engineers to that level of congestion.",
      },
      {
        role: "Utility coordination engineers",
        why: "Multiple private and public utilities occupy the same trench, and resolving that before construction is what keeps a capital programme on schedule.",
      },
      {
        role: "Pedestrian accessibility engineers",
        why: "Ramp and crossing upgrades run continuously across a very large intersection inventory, and the detailing is standard-driven rather than discretionary.",
      },
      {
        role: "Drainage engineers for combined systems",
        why: "Street projects are also stormwater projects here, so the roadway engineer has to answer to the sewer obligation as well.",
      },
    ],
    licensure: "New York licenses engineers through the State Education Department's Office of the Professions, with transfer for most out-of-state PEs on an NCEES record. The gate that matters more in practice is agency prequalification: the design and construction, transportation and environmental protection departments each maintain their own consultant arrangements, so which of them a candidate has actually worked under is the first thing a hiring manager here checks.",
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
    agencies: [
      "LA Bureau of Engineering",
      "LA Bureau of Street Services",
      "Los Angeles County Public Works",
      "LA Sanitation & Environment",
      "LA Department of Transportation",
    ],
    marketDetail: [
      "Los Angeles splits municipal engineering across bureaus rather than concentrating it in one department, so design, street maintenance, sanitation and transportation each hold part of what a single public works department would own elsewhere. For an engineer that means the employer and the standards depend on which bureau's programme the work sits in.",
      "Two obligations shape the workload. Pedestrian accessibility repair runs as a court-supervised programme across an enormous sidewalk inventory, which makes ADA design a sustained speciality rather than a checklist item. Alongside it, the regional municipal stormwater permit makes every street and public site a potential place to capture runoff, which is why so much roadway work here carries a water quality component.",
    ],
    hiringFocus: [
      {
        role: "Pedestrian accessibility engineers",
        why: "A sidewalk repair obligation of this size runs for decades, and the design work is continuous rather than project-driven.",
      },
      {
        role: "Stormwater capture & MS4 compliance engineers",
        why: "The regional permit turns public land into treatment opportunity, so runoff capture design is attached to work that would otherwise be pure roadway.",
      },
      {
        role: "Street & pavement rehabilitation engineers",
        why: "An arterial network of this size keeps resurfacing and reconstruction on a permanent cycle.",
      },
      {
        role: "Seismic retrofit engineers for municipal assets",
        why: "Bridges, buildings and buried infrastructure all carry retrofit obligations that a lower-seismicity market never generates.",
      },
    ],
    licensure: "California does not grant civil PE licensure by simple comity: the state board requires its own application, and civil applicants sit California-specific seismic principles and engineering surveying examinations, so an engineer moving here should plan for that. Public agency work also runs through bureau-specific consultant lists, and for street and sidewalk programmes those lists matter as much as the licence.",
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    authority: "Chicago Department of Water Management",
    marketNote:
      "Chicago is in the middle of replacing roughly 400,000 lead service lines, the largest municipal lead-line replacement program in the nation, alongside CDOT's ongoing protected-bikeway build-out.",
    localPrograms: [
      "Citywide lead service line replacement program",
      "CDOT protected bike lane & complete streets",
      "Deep Tunnel-adjacent stormwater capital work",
      "Subdivision & site development plan review",
      "Chicago Park District field house renovations",
    ],
    agencies: [
      "Chicago Department of Transportation",
      "Chicago Department of Water Management",
      "Cook County Department of Transportation & Highways",
      "Chicago Department of Assets, Information & Services",
      "Illinois Department of Transportation, District 1",
    ],
    marketDetail: [
      "Municipal work in Chicago is increasingly one combined job. Because the city is replacing lead service lines on a statutory schedule, and because opening a street is expensive, service replacement is coordinated with resurfacing, water main renewal and sewer work in the same block, which makes the municipal engineer a programme coordinator as much as a designer.",
      "Above ground, the distinctive work is the street grid itself: protected bikeway build-out, viaduct clearances under an extensive rail network, and an alley system large enough that permeable alley design became a recognised local speciality. The regular grid makes projects repeatable, which shifts the value from bespoke design toward delivering standard details reliably at volume.",
    ],
    hiringFocus: [
      {
        role: "Coordinated street & utility programme engineers",
        why: "Lead service replacement, water main renewal and resurfacing are packaged into single street projects, so engineers who can plan across all three are the constraint.",
      },
      {
        role: "Bikeway & complete streets designers",
        why: "Protected facility build-out is continuous and the geometric detailing is specific to this city's standards.",
      },
      {
        role: "Viaduct & structure clearance engineers",
        why: "A dense freight and transit rail network crosses the street grid constantly, and clearance and drainage under those structures is recurring work.",
      },
      {
        role: "Permeable pavement & green alley designers",
        why: "The alley network gave the city a stormwater tool few others have at scale, and the design vocabulary is local.",
      },
    ],
    licensure: "Illinois licenses through the Department of Financial and Professional Regulation and is one of the states that issues a Structural Engineer licence entirely separately from the PE, which matters for viaduct and bridge work. City and county programmes run through their own consultant prequalification, and for federally funded work the state transportation department's prequalification applies on top.",
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
    agencies: [
      "Houston Public Works",
      "Harris County Engineering Department",
      "Harris County Flood Control District",
      "Texas Department of Transportation, Houston District",
      "Municipal utility districts across the region",
    ],
    marketDetail: [
      "Drainage is the municipal engineering problem in Houston, and it is attached to every street. The region is flat, drains slowly and floods on a schedule it plans around, so a roadway project here is expected to improve conveyance or provide detention rather than simply replace pavement, and a dedicated drainage and streets funding stream keeps that work continuous.",
      "The second feature is institutional. Much of the developed area outside the city is served by municipal utility districts, each an independent public body with its own engineer, so the regional market contains a large number of small public clients alongside the city and the county. That produces a different career shape from a metro where one department lets nearly everything.",
    ],
    hiringFocus: [
      {
        role: "Drainage & detention design engineers",
        why: "Street projects carry a conveyance obligation here, so hydraulics is core roadway work rather than a separate discipline.",
      },
      {
        role: "Hydrologic & hydraulic modellers",
        why: "Design decisions are argued and approved through models, and defending one in review is the skill firms actually hire for.",
      },
      {
        role: "Municipal utility district engineers",
        why: "A large number of independent districts each need engineering support, which is a distinctive and durable source of demand in this region.",
      },
      {
        role: "Subsidence-aware infrastructure engineers",
        why: "Ground movement changes drainage grades over time, so design has to account for a datum that does not stay still.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders, and it registers firms as well as individuals, so a consultancy needs its own registration before it can offer services. For district work the practical credential is experience as a district engineer, which is a defined role here rather than an informal one.",
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
    agencies: [
      "Phoenix Street Transportation Department",
      "Phoenix Water Services",
      "Maricopa County Department of Transportation",
      "City of Mesa Engineering",
      "City of Scottsdale Capital Projects",
    ],
    marketDetail: [
      "The Phoenix metro is built on a regular arterial grid across many adjacent cities, which makes municipal engineering here unusually programmatic: the same intersection, drainage and pavement problems recur across jurisdictions that share standards but let work separately. An engineer's experience transfers easily between cities in this valley in a way it does not in most regions.",
      "Heat is the distinctive design input. Pavement selection, surface treatments, shade at crossings and material durability are all evaluated against a thermal environment that few other American markets design for, and cool pavement and heat mitigation work have moved from pilot to routine programme here.",
    ],
    hiringFocus: [
      {
        role: "Pavement & materials engineers",
        why: "Extreme surface temperatures change how pavements are specified and how long they last, which makes materials judgement locally specific.",
      },
      {
        role: "Arterial & intersection design engineers",
        why: "A valley-wide grid of major arterials keeps capacity and safety work continuous across many jurisdictions.",
      },
      {
        role: "Stormwater & flood control engineers",
        why: "Desert drainage is a problem of rare, intense events and washes rather than continuous flow, which is a different design case from a temperate metro.",
      },
      {
        role: "Heat mitigation & shade infrastructure engineers",
        why: "Cool surfacing and shaded pedestrian infrastructure have become funded programmes here rather than experiments.",
      },
    ],
    licensure: "Arizona registers engineers through the Board of Technical Registration, which accepts comity applications from PEs licensed elsewhere. Because the valley's cities share design standards to a considerable degree, prior work for any one of them is generally recognised by the others, which makes this an easier market to move within than most once a candidate is established.",
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    authority: "Philadelphia Water Department / Streets Department",
    marketNote:
      "Philadelphia's Green City, Clean Waters program, a 25-year, multi-billion-dollar green stormwater infrastructure plan to control combined sewer overflows, remains one of the largest municipal environmental infrastructure commitments in the country.",
    localPrograms: [
      "Green City, Clean Waters stormwater program",
      "Combined sewer overflow capital upgrades",
      "Vision Zero complete-streets implementation",
      "Site plan review for TOD & infill corridors",
      "Fairmount Park & rec-center renovation program",
    ],
    agencies: [
      "Philadelphia Streets Department",
      "Philadelphia Water Department",
      "PennDOT District 6",
      "Delaware Valley Regional Planning Commission",
      "SEPTA",
    ],
    marketDetail: [
      "Philadelphia's municipal engineering is shaped by the fact that its combined sewer obligation is being met above ground. Green infrastructure in the public right of way means street and sidewalk projects routinely carry stormwater function, so the roadway engineer has to design a tree trench or a permeable surface that also works as a street and can be maintained as one.",
      "The city's age is the other constraint. A street network laid out long before the utilities beneath it, a substantial inventory of city-owned bridges, and narrow rights of way in the older districts all mean reconstruction here is a fitting exercise, not a clean-sheet one.",
    ],
    hiringFocus: [
      {
        role: "Green stormwater infrastructure designers",
        why: "Runoff control is delivered in the right of way here, so this is roadway work with a water obligation attached rather than a separate speciality.",
      },
      {
        role: "Municipal bridge engineers",
        why: "The city owns a sizeable bridge inventory of its own, distinct from the state system, and it carries a continuous inspection and repair cycle.",
      },
      {
        role: "Street reconstruction engineers",
        why: "Narrow historic rights of way and buried utilities of unknown vintage make reconstruction a constrained design problem.",
      },
      {
        role: "Traffic & complete streets engineers",
        why: "Safety-driven redesign of arterial corridors is a sustained programme across the city.",
      },
    ],
    licensure: "Pennsylvania licenses through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, with comity for NCEES record holders. Work with federal-aid funding runs through PennDOT's prequalification in addition to the city's own, so candidates with both are meaningfully easier to place.",
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
    agencies: [
      "Dallas Public Works",
      "Dallas Water Utilities",
      "North Central Texas Council of Governments",
      "Texas Department of Transportation, Dallas District",
      "Collin and Denton county municipalities",
    ],
    marketDetail: [
      "North Texas runs two municipal markets at once. Inside Dallas the work is renewal: bond-funded street reconstruction, alley rehabilitation and utility replacement in an established grid. In the collar cities to the north it is expansion, where growth means new thoroughfares, land development review and infrastructure sized for population that has not arrived yet.",
      "Those two demand different engineers, and firms here often staff for both. The renewal side rewards utility coordination and construction phasing judgement; the growth side rewards speed on subdivision review, thoroughfare design and the traffic analysis that goes with approving development.",
    ],
    hiringFocus: [
      {
        role: "Street reconstruction & rehabilitation engineers",
        why: "Bond-funded renewal inside the city is a continuous programme with its own standards and phasing constraints.",
      },
      {
        role: "Land development review engineers",
        why: "Fast-growing collar cities need public-side engineers who can review and approve private development at volume.",
      },
      {
        role: "Thoroughfare & traffic engineers",
        why: "Growth areas are still building their arterial networks, which is design work that established metros no longer generate.",
      },
      {
        role: "Utility coordination engineers",
        why: "Street renewal is constrained by what is buried beneath it, and resolving that early is what keeps projects on programme.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders and registration required for the firm as well as the individual. In the growth cities, city engineer and development review roles are frequently the public-sector entry point, and experience on either side of the review counter is valued by the other.",
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
    agencies: [
      "Atlanta Department of Transportation",
      "Atlanta Department of Watershed Management",
      "Fulton County Public Works",
      "DeKalb County Public Works",
      "Georgia Department of Transportation",
    ],
    marketDetail: [
      "Atlanta's municipal programme is organised around corridors rather than around a grid. Complete street conversions, trail and greenway corridors and the ring of former rail alignment being converted around the city all treat a route as a single project with transport, drainage, structures and public realm inside it, which suits engineers who can work across disciplines rather than deep in one.",
      "Underneath that, the city's sewer obligations mean roadway projects frequently carry stormwater and sewer scope. Topography matters here too: the terrain is steeper than most southeastern metros, so grading and drainage design carry more weight in what would otherwise be routine street work.",
    ],
    hiringFocus: [
      {
        role: "Complete streets & corridor designers",
        why: "Corridor-scale projects combine roadway, drainage and public realm in one design, which is a broader brief than standard street work.",
      },
      {
        role: "Trail & greenway engineers",
        why: "Converted rail alignments and greenways are a sustained local project type with their own structural and drainage problems.",
      },
      {
        role: "Drainage engineers for hilly terrain",
        why: "Steeper topography makes grading and conveyance a real constraint rather than a formality.",
      },
      {
        role: "Traffic safety engineers",
        why: "Arterial safety redesign is a continuing programme across the city and the counties around it.",
      },
    ],
    licensure: "Georgia licenses through the Board of Professional Engineers and Land Surveyors, with comity for engineers licensed elsewhere. Federally funded corridor work runs through the state transportation department's prequalification categories, and because so much municipal work here is delivered that way, those categories often decide which firms can staff a project at all.",
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    authority: "City of Miami Office of Capital Improvements",
    marketNote:
      "The Miami Forever Bond is funding a wave of sea-level-rise resiliency work: stormwater pump stations, seawalls, and drainage upgrades, as the city adapts its municipal infrastructure to South Florida's flooding risk.",
    localPrograms: [
      "Miami Forever Bond resiliency capital program",
      "Stormwater pump station & seawall projects",
      "Site plan review for high-density development",
      "Complete streets & multimodal corridor projects",
      "Waterfront park & municipal facility upgrades",
    ],
    agencies: [
      "Miami-Dade Transportation & Public Works",
      "City of Miami Capital Improvements",
      "Miami Beach Public Works",
      "South Florida Water Management District",
      "Florida Department of Transportation, District 6",
    ],
    marketDetail: [
      "This is the American market where sea level rise is already a construction programme rather than a planning horizon. Roads are being raised, stormwater pump stations installed behind them and drainage systems converted from gravity to pumped operation, most visibly in Miami Beach, because a tidal cycle now pushes water back up through outfalls that used to drain freely.",
      "That changes the ordinary municipal job. Setting a road grade becomes a question about neighbouring private property, groundwater and future tide levels; a drainage design becomes a pumping and power-supply design. Engineers here are expected to reason about a datum that is moving, which is not something most municipal training covers.",
    ],
    hiringFocus: [
      {
        role: "Road raising & resiliency engineers",
        why: "Raising streets against tidal flooding is a project type that barely exists elsewhere in the country and has to be learned locally.",
      },
      {
        role: "Stormwater pump station engineers",
        why: "Converting gravity drainage to pumped systems makes pump station design a core municipal skill here rather than a specialist one.",
      },
      {
        role: "Coastal drainage & tidal backflow engineers",
        why: "Outfalls that admit tide as readily as they discharge runoff require control measures that inland design never considers.",
      },
      {
        role: "Utility relocation engineers",
        why: "Raising a road moves everything buried beneath it, which makes relocation design part of nearly every project.",
      },
    ],
    licensure: "Florida licenses through the Board of Professional Engineers, with licensure by endorsement for engineers already licensed elsewhere on an equivalent basis. Drainage and water use consents run through the regional water management district rather than the municipality, so familiarity with that permitting route is a practical requirement for anyone leading design here.",
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    authority: "Seattle Department of Transportation (SDOT)",
    marketNote:
      "Seattle is executing the voter-approved Move Seattle levy while Seattle Public Utilities works through the massive Ship Canal combined sewer overflow tunnel, two of the largest municipal capital projects in the Pacific Northwest.",
    localPrograms: [
      "Move Seattle levy bridge & street program",
      "Ship Canal combined sewer overflow tunnel",
      "Land use & site development review",
      "Vision Zero complete streets projects",
      "Community center & branch library upgrades",
    ],
    agencies: [
      "Seattle Department of Transportation",
      "Seattle Public Utilities",
      "King County Road Services",
      "Sound Transit",
      "Washington State Department of Transportation",
    ],
    marketDetail: [
      "Seattle's municipal engineering is a topography problem. Steep grades, unstable slopes and a waterfront edge mean retaining structures, slope stabilisation and drainage design appear in ordinary street projects, and geotechnical judgement carries further here than it does in a flat city.",
      "The city also owns a substantial bridge and structure inventory whose condition is publicly tracked, which keeps assessment and replacement work continuous. Alongside that, green stormwater infrastructure in the right of way is standard practice rather than an option, because the same street project is usually also part of the drainage obligation.",
    ],
    hiringFocus: [
      {
        role: "Retaining wall & slope stabilisation engineers",
        why: "Steep terrain puts structural earth retention into routine street projects, which is unusual in municipal work.",
      },
      {
        role: "Municipal bridge & structure engineers",
        why: "The city's own bridge inventory carries a continuing inspection, repair and replacement programme distinct from the state system.",
      },
      {
        role: "Green stormwater infrastructure designers",
        why: "Runoff control in the right of way is the default approach here, so roadway engineers are expected to design it.",
      },
      {
        role: "Multimodal corridor designers",
        why: "Transit, bicycle and pedestrian priority are designed into arterial projects from the start rather than added later.",
      },
    ],
    licensure: "Washington registers engineers through the Board of Registration for Professional Engineers and Land Surveyors, with comity for equivalent licences. The state's environmental review process applies to municipal projects as well as large ones, so engineers who can carry a scheme through that review are consistently more employable here than those who have only designed to a standard.",
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
    agencies: [
      "Denver Department of Transportation & Infrastructure",
      "Denver Water",
      "Mile High Flood District",
      "Colorado Department of Transportation",
      "Adams and Arapahoe county public works",
    ],
    marketDetail: [
      "Denver consolidated transport and infrastructure into a single department, which means street, drainage, bridge and public realm work is programmed together rather than negotiated between separate bureaus. For an engineer that makes the municipal job broader here than in cities where each asset class has its own department.",
      "The distinctive technical work is drainage. A regional flood district sets criteria across the metro, and major outfall projects have reshaped whole neighbourhoods to move water that the original street grid was never designed to carry. Sidewalk condition has also become a city-funded programme rather than an adjacent-owner obligation, which turned a maintenance backlog into engineered work.",
    ],
    hiringFocus: [
      {
        role: "Storm drainage & outfall engineers",
        why: "Regional criteria and major outfall schemes make drainage a leading discipline here rather than a supporting one.",
      },
      {
        role: "Sidewalk & accessibility programme engineers",
        why: "Moving sidewalk repair onto the city's books converted a backlog into a continuous design and delivery programme.",
      },
      {
        role: "Multimodal & Vision Zero designers",
        why: "Arterial safety redesign is funded as a standing programme across the city.",
      },
      {
        role: "Municipal bridge engineers",
        why: "City-owned structures over rail, water and highway need their own inspection and rehabilitation cycle.",
      },
    ],
    licensure: "Colorado licenses through the State Board of Licensure for Architects, Professional Engineers and Professional Land Surveyors, with comity for equivalent licences. Drainage design across the metro follows the regional flood district's criteria manual rather than each city's own, so familiarity with that document is effectively a local qualification.",
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
    agencies: [
      "Boston Public Works Department",
      "Boston Transportation Department",
      "Boston Water & Sewer Commission",
      "Massachusetts Department of Transportation",
      "Massachusetts Bay Transportation Authority",
    ],
    marketDetail: [
      "Boston's street network predates almost everything buried under it, and that is the defining condition of municipal engineering here. Rights of way are narrow and irregular, utility records for the oldest districts are incomplete, and a large share of the ground is filled land, so reconstruction involves discovering the existing condition as much as designing the new one.",
      "Climate adaptation now sits on top of that. A low-lying waterfront with a significant tidal range has made shoreline protection, elevated street sections and drainage backflow prevention part of the city's ordinary capital work rather than a separate resiliency programme.",
    ],
    hiringFocus: [
      {
        role: "Street reconstruction engineers",
        why: "Narrow historic rights of way over filled ground make reconstruction a constrained and investigative design problem.",
      },
      {
        role: "Coastal resiliency & shoreline engineers",
        why: "Waterfront protection has become part of the standing capital programme rather than a set of special projects.",
      },
      {
        role: "Utility coordination engineers",
        why: "Incomplete records for very old infrastructure make locating and sequencing utilities the main project risk.",
      },
      {
        role: "Geotechnical-aware municipal engineers",
        why: "Filled land and high groundwater affect foundations, trenching and settlement in ways a rock-founded city never deals with.",
      },
    ],
    licensure: "Massachusetts licenses through the Board of Registration of Professional Engineers and Land Surveyors, with comity for equivalent out-of-state licences. Federally funded municipal work runs through the state transportation department's prequalification, and because so many city projects are delivered with that funding, the two qualifications are usually sought together.",
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
    agencies: [
      "Minneapolis Public Works",
      "Hennepin County Transportation",
      "Metropolitan Council",
      "Minnesota Department of Transportation",
      "Minneapolis Park & Recreation Board",
    ],
    marketDetail: [
      "Minneapolis rebuilds streets as whole-corridor projects, replacing pavement, water main, sewer and sidewalk in one pass on a planned cycle rather than patching each separately. That structure makes the municipal engineer a coordinator across utilities from the start, and it means design work here comes in complete, repeatable packages.",
      "Climate sets the engineering parameters. Frost depth governs how deep everything is buried, freeze and thaw governs how pavements are built and how long they last, and a short construction season compresses delivery into part of the year, which shapes phasing and contract structure as much as it shapes design.",
    ],
    hiringFocus: [
      {
        role: "Full-reconstruction corridor engineers",
        why: "Rebuilding pavement and all buried utilities in one project needs engineers who can hold several disciplines at once.",
      },
      {
        role: "Cold climate pavement & materials engineers",
        why: "Freeze and thaw cycling drives specification and service life in ways warmer markets never model.",
      },
      {
        role: "Protected bikeway designers",
        why: "The city builds separated facilities as standard, and the winter maintenance requirement changes the geometry.",
      },
      {
        role: "Stormwater treatment engineers",
        why: "Lake and river water quality rules mean street projects carry treatment obligations rather than just conveyance.",
      },
    ],
    licensure: "Minnesota licenses through the Board of Architecture, Engineering, Land Surveying, Landscape Architecture, Geoscience and Interior Design, with comity for equivalent licences. Watershed districts have real regulatory authority over stormwater here in addition to the city and the state, so a design has to satisfy a body that is easy to overlook if a candidate has not worked in the state before.",
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
    agencies: [
      "Detroit Department of Public Works",
      "Detroit Water & Sewerage Department",
      "Wayne County Department of Public Services",
      "Michigan Department of Transportation",
      "Great Lakes Water Authority",
    ],
    marketDetail: [
      "Detroit is engineering a street and utility network built for a much larger population than it now serves, and that is a genuinely unusual municipal problem. Decisions about which infrastructure to renew, which to reduce and how to serve areas with scattered occupancy are engineering questions here rather than hypotheticals, and they have no equivalent in a growing city.",
      "The obligations that do not scale down are the ones driving current work. Lead service line replacement runs to a state rule stricter than the federal one and applies regardless of how many houses remain on a block, while combined sewers and basement flooding keep collection capacity a live public issue across the city.",
    ],
    hiringFocus: [
      {
        role: "Lead service line replacement engineers",
        why: "State rules impose an annual replacement rate on every system, which makes this permanent programme work rather than a project.",
      },
      {
        role: "Collection system & surcharge engineers",
        why: "Combined sewers and basement backup make hydraulic capacity a continuing public commitment.",
      },
      {
        role: "Asset renewal & prioritisation engineers",
        why: "Deciding what to renew across an oversized network is a data and prioritisation discipline in its own right.",
      },
      {
        role: "Street lighting & public realm engineers",
        why: "Rebuilding city-wide lighting and streetscape has been a distinct, sustained municipal programme here.",
      },
    ],
    licensure: "Michigan licenses through the Department of Licensing and Regulatory Affairs, with comity for equivalent out-of-state licences. The state's lead and copper rule is stricter than the federal standard, so an engineer arriving from elsewhere should expect the compliance framework to require more than the one they trained under, and programme experience under it is asked for by name.",
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
    agencies: [
      "Charlotte Department of Transportation",
      "Charlotte Water",
      "Mecklenburg County Storm Water Services",
      "North Carolina Department of Transportation",
      "Town engineering departments across Mecklenburg County",
    ],
    marketDetail: [
      "Charlotte's municipal work is driven by growth, and the review counter is where much of it happens. Development volume means public-side engineers spend a large share of their time assessing private infrastructure that the city will eventually own, which makes review and standards judgement a career track here rather than a junior duty.",
      "Stormwater is the other defining strand. The county runs a well-established surface water programme with post-construction controls, stream buffers and a substantial restoration workload, so street and site projects carry water quality obligations and stream work is a recognised local speciality.",
    ],
    hiringFocus: [
      {
        role: "Land development review engineers",
        why: "Sustained growth means the public side needs engineers who can review private infrastructure to adoption standard at volume.",
      },
      {
        role: "Stormwater & post-construction control engineers",
        why: "County water quality rules attach treatment obligations to nearly every project.",
      },
      {
        role: "Stream restoration engineers",
        why: "Buffer and restoration requirements have made natural channel design a routine part of the local programme.",
      },
      {
        role: "Thoroughfare & corridor designers",
        why: "A metro still building out its arterial network generates design work that mature cities no longer produce.",
      },
    ],
    licensure: "North Carolina licenses through the Board of Examiners for Engineers and Surveyors, with comity for equivalent licences, and it licenses firms as well: a company needs its own certificate of authorisation before offering engineering services in the state. State transportation department prequalification applies to federally funded municipal work on top of the city's own arrangements.",
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
      "MAPS 4, Oklahoma City's voter-approved sales-tax capital program, is funding streets, sidewalks, parks, and public facilities citywide, one of the most sweeping municipal capital plans in the South Central US.",
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
      "The Sewer System Improvement Program is a multi-decade, multi-billion-dollar rebuild of San Francisco's combined sewer and stormwater infrastructure, one of the largest municipal capital programs on the West Coast.",
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
      "MSD's Lick Run watershed project turned a piped urban creek into daylighted green infrastructure, a nationally recognized model for controlling combined sewer overflow that continues to expand across the city.",
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
  { role: "Engineering Technician / Public Works Inspector", range: "$52,000 – $72,000" },
  { role: "Municipal Engineer (EIT)", range: "$65,000 – $88,000" },
  { role: "Stormwater / MS4 Program Engineer", range: "$85,000 – $120,000" },
  { role: "Assistant City Engineer", range: "$95,000 – $132,000" },
  { role: "Licensed PE / City Engineer (Mid-Level)", range: "$98,000 – $140,000" },
  { role: "Capital Improvement Program Manager", range: "$110,000 – $150,000" },
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
