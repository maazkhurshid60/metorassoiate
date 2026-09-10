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

  /* Deep-market fields — the difference between a page about a city and a
     template with the city's name substituted in.
     
     Every city page shares roughly 700 words of framing; before these
     existed, only ~380 words differed between one metro and the next, which
     is the profile Google files under "Crawled - currently not indexed".
     These four carry the part that is genuinely about the place: who lets
     the work, what the engineering actually consists of there, what firms
     are short of, and what it takes to be allowed to sign or bid.

     All optional. A city without them renders exactly as before, so the set
     can be filled in market by market instead of all fifty at once. Written
     to stay true: named public owners and durable program characteristics,
     no dates, no dollar figures, no claims about who is hiring this quarter. */

  /** Public owners that actually let the work in this metro. */
  agencies?: string[];
  /** Two paragraphs on what the engineering here consists of. */
  marketDetail?: string[];
  /** What firms are short of, and the local reason why. */
  hiringFocus?: { role: string; why: string }[];
  /** Licensure and prequalification as they bite in this state. */
  licensure?: string;
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
    agencies: [
      "NYSDOT Region 11",
      "NYC DOT",
      "MTA Construction & Development",
      "Port Authority of NY & NJ",
      "NYC DEP",
      "NYC DDC",
    ],
    marketDetail: [
      "New York is a rehabilitation market before it is a greenfield one. Engineers here spend their careers on assets that already exist, East River crossings, elevated highway structures, a water and sewer network a century old in places, and a subway that has to keep carrying passengers while it is rebuilt around them. That shapes who gets hired: staging, maintenance of traffic and constructability judgement are worth as much as design throughput, because almost nothing is built on an empty site.",
      "The second driver is water. Combined-sewer overflow obligations, shoreline protection along the coast, and the upstate supply system keep hydraulic and resiliency engineers in demand on a cycle of their own, independent of whatever the highway program is doing in a given year.",
    ],
    hiringFocus: [
      { role: "Bridge rehabilitation & inspection engineers", why: "The metro's river crossings and elevated structures run a continuous inspection and repair cycle, so NBIS-qualified team leaders rarely reach the open market." },
      { role: "Construction-phase and resident engineers", why: "Work is built under live traffic and around running transit, which puts a premium on engineers who can sequence staging rather than only design the end state." },
      { role: "Drainage & coastal resiliency engineers", why: "Combined-sewer programs and shoreline protection have made hydraulics a standing line item here rather than a project-by-project need." },
      { role: "Transit and rail structural engineers", why: "Station reconstruction and tunnel work need people comfortable assessing existing conditions and designing phased interventions into them." },
    ],
    licensure:
      "New York licenses engineers through the State Education Department's Office of the Professions, and most out-of-state PEs transfer by comity on an NCEES record rather than by re-examination. The gate that bites harder in practice is agency prequalification: NYSDOT, the MTA and the city agencies each run their own approved-consultant arrangements, so which agencies a candidate has actually worked under often matters more to a hiring manager than the license itself.",
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
    agencies: [
      "Caltrans District 7",
      "LA Metro",
      "LADOT",
      "LA Bureau of Engineering",
      "LADWP",
      "LA County Public Works",
      "Los Angeles World Airports",
    ],
    marketDetail: [
      "Seismic design is the constant in Southern California. Retrofit and performance-based assessment run underneath almost everything structural here, and an engineer who has only designed for gravity and wind elsewhere has real ground to make up. It is also why the retrofit backlog on bridges and older buildings keeps structural demand steady even when new build slows.",
      "Water is the other half of the market. Recycled water, groundwater replenishment and supply resiliency are long-horizon programs driven by allocation limits rather than by growth, so water-resources engineers here work on treatment and conveyance schemes that outlast several transport funding cycles.",
    ],
    hiringFocus: [
      { role: "Seismic retrofit & bridge structural engineers", why: "The regional retrofit backlog is measured in decades, and performance-based seismic assessment is scarcer than general structural design." },
      { role: "Water resources & recycled-water engineers", why: "Replenishment and reuse programs are driven by supply limits, so this demand does not track the construction cycle." },
      { role: "Traffic & ITS engineers", why: "Freeway and arterial operations work continues between capital programs, and corridor management is a permanent function here." },
      { role: "Construction managers for work under traffic", why: "Freeway rehabilitation across the basin is staged around closures, which is a scheduling discipline as much as an engineering one." },
    ],
    licensure:
      "California is one of the few states where a civil PE from elsewhere cannot simply transfer in: the state adds its own Seismic Principles and Engineering Surveying examinations on top of the national PE, and comity applicants still have to sit them. It is worth planning around when recruiting out of state, an otherwise ideal candidate may be months away from being able to seal drawings. Consultant work additionally runs through Caltrans and county prequalification.",
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
    agencies: [
      "IDOT District 1",
      "Chicago DOT",
      "Illinois Tollway",
      "CTA",
      "Metra",
      "Metropolitan Water Reclamation District",
    ],
    marketDetail: [
      "Chicago's civil work is dominated by an ageing expressway and bridge inventory that has to be rebuilt in place, and by the density of freight rail crossing the region. The largest rail hub in the country. Grade separation, structure clearance and railroad coordination come up here in a way they simply do not in most metros, and engineers who have negotiated with the railroads carry a premium.",
      "Underneath that sits the deep-tunnel stormwater system and a combined-sewer network serving a flat, heavily paved basin. Hydraulic engineers work at a scale of conveyance few regions match, and urban flooding keeps the work on the books regardless of what the transport program is doing.",
    ],
    hiringFocus: [
      { role: "Structural engineers holding an Illinois SE", why: "Illinois issues a Structural Engineer license separate from the PE, so structural leads on many projects need the SE specifically, a licensing detail that catches out-of-state hires." },
      { role: "Rail & grade-separation engineers", why: "Freight density makes railroad coordination a routine part of roadway projects here, and the experience does not transfer from most other markets." },
      { role: "Hydraulic & stormwater engineers", why: "A flat basin, combined sewers and the deep-tunnel system keep conveyance design continuously in demand." },
      { role: "Construction inspection staff fluent in IDOT documentation", why: "State-funded work carries documentation standards inspectors are expected to know before they arrive on site." },
    ],
    licensure:
      "Illinois is the licensing outlier engineers most often trip over: the state issues a Structural Engineer (SE) license distinct from the PE, and structural work of consequence calls for the SE rather than a PE alone. Recruiting a structural lead from a state where the PE covers structural practice means budgeting for that gap. Consultant selection on state work runs through IDOT prequalification by work type.",
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
    agencies: [
      "TxDOT Houston District",
      "Harris County Flood Control District",
      "City of Houston Public Works",
      "METRO",
      "Port Houston",
    ],
    marketDetail: [
      "Drainage is the Houston market. The metro sits flat, drains slowly and floods on a schedule the region plans around, so detention design, channel conveyance and hydrologic and hydraulic modeling are core competencies rather than a specialism bolted onto roadway work. Engineers who can build and defend an H&H model in a review meeting are the ones firms compete for.",
      "The second engine is industrial. The ship-channel petrochemical corridor and port infrastructure generate civil and structural work with a different rhythm from public transport programs, owner-driven, schedule-led, and largely indifferent to the state highway funding cycle.",
    ],
    hiringFocus: [
      { role: "Hydrologic & hydraulic modeling engineers", why: "Flood-control work is model-led, and defending a hydraulic model is the scarcest skill in the metro." },
      { role: "Drainage & detention designers", why: "Regional detention and channel improvement programs run continuously rather than in bursts." },
      { role: "Roadway designers fluent in TxDOT standards", why: "District work is standards-heavy, and engineers who already know them start producing months sooner." },
      { role: "Construction inspection staff", why: "Sustained highway and drainage construction keeps field inspection demand ahead of supply across the district." },
    ],
    licensure:
      "Texas licenses engineers through TBPELS, and firms offering engineering services need their own registration, not only the individuals. On state work, TxDOT precertification by work category decides who can be on a team at all, so a candidate's precertification history is a practical hiring signal alongside the license.",
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
    agencies: [
      "ADOT",
      "Maricopa County DOT",
      "City of Phoenix Street Transportation",
      "Phoenix Water Services",
      "Valley Metro",
      "Sky Harbor",
    ],
    marketDetail: [
      "Phoenix is one of the few large metros where a civil engineer still spends most of their time on greenfield work. Master-planned community infrastructure, freeway loops and arterial extensions into open desert mean site civil, grading and utility design at volumes older metros no longer generate, and the pace of subdivision work sets the tempo of the local market.",
      "Water is the constraint that shapes everything else. Assured water supply rules mean a development's engineering has to answer a supply question before it answers a drainage one, which gives water-resources engineers a gatekeeping role here that they do not have in wetter states.",
    ],
    hiringFocus: [
      { role: "Land development & site civil engineers", why: "Sustained greenfield growth keeps grading, paving and utility design in demand at a volume most metros no longer see." },
      { role: "Water resources engineers", why: "Assured water supply requirements put a supply assessment at the front of the development process rather than the end." },
      { role: "Roadway & freeway designers", why: "The loop and arterial programs are long-running and standards-driven." },
      { role: "Utility coordination specialists", why: "Rapid greenfield build-out makes wet and dry utility coordination a schedule bottleneck rather than a detail." },
    ],
    licensure:
      "Arizona registers engineers through the Board of Technical Registration, with comity available on an NCEES record. What distinguishes this market is water: assured water supply rules make groundwater and supply credentials genuinely valuable rather than a nice-to-have, and ADOT prequalification governs access to state highway work.",
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
    agencies: [
      "PennDOT District 6",
      "DVRPC",
      "SEPTA",
      "Philadelphia Water Department",
      "Philadelphia Streets Department",
      "PhilaPort",
    ],
    marketDetail: [
      "Philadelphia is a bridge market. The regional inventory is old, dense and heavily used, and corridor reconstruction along I-95 has kept structural design, staging and inspection teams occupied for years at a stretch. Engineers here are used to rebuilding structures over live traffic and active rail, which is a different discipline from designing a new crossing on open ground.",
      "The distinctive civil work is stormwater. The city's green stormwater infrastructure program is among the most developed in the country, and it has created a local specialism (fitting bioretention, permeable surfaces and inlet modifications into constrained streets) that transfers well and is hard to hire in from elsewhere.",
    ],
    hiringFocus: [
      { role: "Bridge design & inspection engineers", why: "An old, dense structure inventory means rehabilitation and inspection continue regardless of the new-build program." },
      { role: "Green stormwater infrastructure designers", why: "The city's program has made retrofit stormwater design a genuine local specialism with few experienced practitioners." },
      { role: "Construction inspection staff fluent in PennDOT documentation", why: "State-funded work carries documentation requirements inspectors are expected to know on day one." },
      { role: "Rail & transit structural engineers", why: "Transit rebuilding needs structural assessment of assets that have to stay in service throughout." },
    ],
    licensure:
      "Pennsylvania registration transfers by comity for most PEs, but the practical gate for consultant work is PennDOT's ECMS prequalification, firms and staff are qualified by work code, so a candidate's ECMS history tells a hiring manager immediately which project types they can be billed against.",
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
    agencies: [
      "TxDOT Dallas District",
      "North Texas Tollway Authority",
      "DART",
      "NCTCOG",
      "DFW Airport",
      "City of Dallas Public Works",
    ],
    marketDetail: [
      "North Texas is a managed-lane and tollway market, and it delivers much of its work through design-build and comprehensive development agreements. That changes what firms need: engineers who can produce at pursuit pace, price risk and work alongside a contractor from the start, rather than hand a finished set over the wall. Pursuit experience is a real differentiator on a CV here.",
      "Underneath the corridor programs, suburban growth keeps land development and municipal engineering busy across the collar counties, giving the metro two distinct hiring markets that rarely compete for the same people.",
    ],
    hiringFocus: [
      { role: "Roadway & managed-lane designers", why: "Corridor and tollway programs are the region's defining work and run on multi-year schedules." },
      { role: "Design-build pursuit engineers", why: "Alternative delivery is standard here, and engineers who have worked inside a pursuit team are scarce relative to demand." },
      { role: "Land development engineers", why: "Collar-county growth sustains a second market largely independent of the highway program." },
      { role: "Construction inspection and materials staff", why: "Sustained construction volume keeps field roles open across several districts at once." },
    ],
    licensure:
      "Texas licenses through TBPELS and requires firm registration alongside individual licensure. TxDOT precertification decides team eligibility on state work, and because so much North Texas work is alternatively delivered, contractors weigh design-build experience nearly as heavily as the license itself.",
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
    agencies: [
      "GDOT",
      "State Road & Tollway Authority",
      "MARTA",
      "Atlanta DOT",
      "DeKalb County Watershed Management",
      "Hartsfield-Jackson",
    ],
    marketDetail: [
      "Atlanta's highway work is concentrated in managed lanes and interchange reconstruction on the interstates converging on the city, which means large, long-duration corridor projects and the staging discipline that goes with rebuilding roads that cannot be closed.",
      "The quieter but steadier market is sewer. Consent-decree-driven capacity and rehabilitation programs across the metro counties have kept collection-system engineers working for years, and that work is obligation-led rather than growth-led. It continues through downturns.",
    ],
    hiringFocus: [
      { role: "Managed lane & interchange designers", why: "The region's mobility program is built around complex interchanges rebuilt under traffic." },
      { role: "Sewer rehabilitation & capacity engineers", why: "Consent-decree obligations fund this work on a schedule that does not follow the economy." },
      { role: "Water resources & watershed engineers", why: "Watershed improvement programs across the metro counties run alongside the sewer work." },
      { role: "Construction inspection staff", why: "Long corridor projects need inspection teams sustained across multi-year schedules." },
    ],
    licensure:
      "Georgia licenses engineers through its state board, with comity on an NCEES record. Access to state work runs through GDOT prequalification by work class, so a candidate's prequalified areas are a fair proxy for the project types they can lead once they arrive.",
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
    agencies: [
      "FDOT District 6",
      "Miami-Dade Transportation & Public Works",
      "Miami-Dade Water & Sewer",
      "South Florida Water Management District",
      "PortMiami",
      "City of Miami Public Works",
    ],
    marketDetail: [
      "South Florida engineering is shaped by water arriving from three directions at once: rainfall on flat, porous ground, tide pushing back up the outfalls, and a groundwater table close enough to the surface to limit what can be buried. Drainage design here is a tidal problem, not just a rainfall one, and engineers who have only sized systems for gravity discharge inland find the assumptions do not hold.",
      "The saltwater environment then governs everything structural. Corrosion protection, concrete cover and materials selection are first-order design decisions on bridges and marine structures, and durability detailing is a specialism the market pays for rather than a box to tick.",
    ],
    hiringFocus: [
      { role: "Stormwater & resiliency engineers", why: "Tidal influence and a high water table make drainage design a specialist problem rather than a routine calculation." },
      { role: "Coastal & marine structural engineers", why: "Bridges and port structures in saltwater need durability detailing that few inland engineers have practised." },
      { role: "CEI inspectors with FDOT qualifications", why: "State construction work requires program-specific qualification, so qualified inspectors are hired straight off other projects." },
      { role: "Water & wastewater capacity engineers", why: "Treatment and conveyance upgrades run on regulatory timelines independent of the transport program." },
    ],
    licensure:
      "Florida licenses engineers through FBPE, with comity available on an NCEES record. Two Florida-specific credentials matter more day to day: FDOT's construction training qualifications gate who can hold materials and inspection roles on state work, and threshold-building projects require a licensed special inspector. Both are worth checking on a CV before an interview rather than after an offer.",
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
    agencies: [
      "WSDOT",
      "Sound Transit",
      "Seattle DOT",
      "King County",
      "Port of Seattle",
      "Seattle Public Utilities",
    ],
    marketDetail: [
      "Geotechnics drives the Puget Sound market. Soft soils, liquefaction risk, steep slopes and deep foundations sit under nearly every structural decision, and seismic demand is high enough that retrofit and resilient design are routine rather than exceptional. Engineers who can read a geotechnical report and design to it are worth more here than their years suggest.",
      "The distinctive civil program is fish passage. Replacing culverts that block salmon migration has created sustained hydraulic and structural work across the state, with a design vocabulary (stream simulation, channel-spanning structures) that barely exists in other markets and is therefore hard to hire in.",
    ],
    hiringFocus: [
      { role: "Geotechnical & seismic engineers", why: "Soft soils and high seismic demand make geotechnical judgement a constraint on nearly every project." },
      { role: "Fish-passage & hydraulic designers", why: "The culvert replacement program is long-running and uses design methods rarely practised elsewhere." },
      { role: "Structural engineers holding a Washington SE", why: "Washington issues a Structural Engineer license separate from the PE for significant structures." },
      { role: "Marine & waterfront engineers", why: "Ferry terminals, port structures and shoreline work are a permanent feature of this market." },
    ],
    licensure:
      "Washington is one of the few states with a separate Structural Engineer (SE) license alongside the PE, which matters when hiring structural leads from states where the PE covers that work. Comity is available on an NCEES record for the PE itself, and consultant access to state highway work runs through WSDOT's agreements and rosters.",
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
    agencies: [
      "CDOT",
      "RTD",
      "Denver Public Works",
      "Denver Water",
      "Mile High Flood District",
      "Denver International Airport",
    ],
    marketDetail: [
      "Front Range work splits between fast urban growth and mountain corridor engineering, and the two ask for different engineers. Mountain highway work brings geohazards, avalanche paths, rockfall mitigation and construction seasons short enough to dictate the design, none of which shows up on a flat-metro CV.",
      "Water is the long game. Storage, supply resiliency and drought planning are structural features of engineering in a headwaters state, and the regional flood district gives urban drainage a formal, well-defined framework that engineers here work inside from their first year.",
    ],
    hiringFocus: [
      { role: "Highway designers with mountain corridor experience", why: "Geohazards and short construction seasons make mountain work a distinct discipline from urban roadway design." },
      { role: "Water resources & supply engineers", why: "Storage and drought resiliency are permanent programs in a headwaters state." },
      { role: "Drainage engineers fluent in the regional flood criteria", why: "Urban drainage here is designed to a well-defined regional framework that takes time to learn." },
      { role: "Construction inspection staff", why: "Compressed construction seasons concentrate demand for field staff into a short window each year." },
    ],
    licensure:
      "Colorado licenses engineers through its state board with comity on an NCEES record, and access to state highway work runs through CDOT prequalification. Practical experience with mountain corridor design and the regional drainage criteria tends to weigh more with hiring managers here than any additional credential.",
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
    agencies: [
      "MassDOT",
      "MBTA",
      "MWRA",
      "Boston Water & Sewer Commission",
      "Massport",
      "Boston Public Works",
    ],
    marketDetail: [
      "Boston builds in a dense, historic city on ground that was largely made by filling tidal flats. Deep excavation next to buildings founded on timber piles, groundwater levels that have to be maintained rather than simply drawn down, and constrained sites make geotechnical and support-of-excavation expertise unusually valuable here.",
      "The bridge program has pushed accelerated construction hard: prefabricated elements, weekend closures, slide-in replacements. Engineers who have designed for that kind of delivery, where the schedule constrains the detailing, are a distinct group from those who have only done conventional staged construction.",
    ],
    hiringFocus: [
      { role: "Bridge engineers with accelerated construction experience", why: "Weekend and prefabricated replacements are standard here, and they constrain design in ways conventional staging does not." },
      { role: "Geotechnical & support-of-excavation engineers", why: "Building on filled ground beside pile-founded historic structures makes this the region's binding technical constraint." },
      { role: "Transit structural engineers", why: "Transit rebuilding requires structural work on assets that must stay in service." },
      { role: "Coastal resiliency engineers", why: "Harbour-edge adaptation is now a standing program rather than a study." },
    ],
    licensure:
      "Massachusetts registers engineers through its state board with comity on an NCEES record. Consultant access to state work runs through MassDOT prequalification, and for bridge roles specifically, hiring managers look for experience with accelerated construction and night or weekend staging as much as for the license.",
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
    agencies: [
      "MnDOT Metro District",
      "Metro Transit",
      "Metropolitan Council",
      "Minneapolis Public Works",
      "local watershed districts",
    ],
    marketDetail: [
      "The Twin Cities take bridge inspection and load rating more seriously than almost any other market in the country, and that culture shows up in hiring: inspection credentials and rating experience carry weight here that they do not always carry elsewhere, and the work is funded steadily rather than in bursts.",
      "Cold is the other design constraint. Frost depth, freeze-thaw durability and a short construction season shape pavement, foundation and drainage design, and the watershed district structure gives clean-water work a formal local framework that engineers are expected to know.",
    ],
    hiringFocus: [
      { role: "Bridge inspection & load rating engineers", why: "Inspection and rating are funded continuously here, and qualified team leaders are held onto." },
      { role: "Hydraulic & watershed engineers", why: "Watershed districts run their own programs, which keeps clean-water design in demand year-round." },
      { role: "Transit corridor designers", why: "Light rail and bus rapid transit corridors are long-duration programs across the metro." },
      { role: "Municipal roadway engineers", why: "City and county reconstruction work continues on a steady annual cycle regardless of state programs." },
    ],
    licensure:
      "Minnesota licenses engineers through its state board with comity on an NCEES record. MnDOT prequalifies consultants by work type, and in this market NBIS bridge inspection credentials and load rating experience are among the most portable things a candidate can hold.",
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
    agencies: [
      "MDOT Metro Region",
      "Great Lakes Water Authority",
      "Detroit Public Works",
      "Wayne County",
      "Regional Transit Authority",
    ],
    marketDetail: [
      "Southeast Michigan is a reconstruction market. The freeway network is being rebuilt corridor by corridor rather than extended, which puts the emphasis on staging, utility relocation and maintaining access to neighbourhoods and industry through multi-year projects.",
      "Water is regional and ageing. The Great Lakes Water Authority system serves a large share of the state's population through infrastructure that needs rehabilitation rather than expansion, and combined sewers in the older cores make capacity and separation work a continuing program.",
    ],
    hiringFocus: [
      { role: "Roadway & freeway reconstruction engineers", why: "Corridor rebuilds under traffic are the defining project type in the region." },
      { role: "Water & sewer rehabilitation engineers", why: "A large, ageing regional system generates renewal work independent of growth." },
      { role: "Structural engineers for bridge rehabilitation", why: "Freeway reconstruction carries a heavy structures component across the corridors." },
      { role: "Construction inspection staff", why: "Multi-year reconstruction projects need inspection teams sustained across full seasons." },
    ],
    licensure:
      "Michigan licenses engineers through the state's licensing department with comity on an NCEES record, and MDOT prequalification governs consultant access to state work. Experience with staged reconstruction under traffic tends to be the practical differentiator between candidates who otherwise look alike on paper.",
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
    agencies: [
      "NCDOT Division 10",
      "Charlotte Area Transit System",
      "Charlotte Water",
      "Charlotte DOT",
      "Mecklenburg County Storm Water Services",
      "Charlotte Douglas International",
    ],
    marketDetail: [
      "Charlotte is a growth market, and growth engineering is its own discipline: subdivision and site civil work, arterial widening ahead of demand, and utility extension into land that had none. The volume is steady enough that land development experience is the most reliably transferable thing on a CV here.",
      "The counterweight is stormwater. The county's storm water services program gives drainage and stream restoration work a formal structure and a continuing budget, so the discipline does not rise and fall with the development cycle the way it does in less organised markets.",
    ],
    hiringFocus: [
      { role: "Land development & site civil engineers", why: "Sustained regional growth keeps subdivision and site design the largest single source of civil work." },
      { role: "Roadway & managed lane designers", why: "Corridor widening and managed lane projects run on long state schedules." },
      { role: "Stormwater & stream restoration engineers", why: "The county program funds this work continuously rather than project by project." },
      { role: "Utility relocation coordinators", why: "Rapid growth makes relocation a critical-path activity on most corridor projects." },
    ],
    licensure:
      "North Carolina licenses engineers through its state board with comity on an NCEES record, and firms providing engineering services also need a license to practice. NCDOT prequalification governs state work, and in this market land development and site civil experience is often weighed as heavily as public-sector project history.",
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
  {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "California",
    abbr: "CA",
    region: "the Bay Area",
    dot: "Caltrans",
    marketNote:
      "Across the Bay Area, we place civil, structural, and seismic engineers on the bridge, transit, and water-reliability programs that keep one of the country's most complex regions moving.",
    localPrograms: [
      "Caltrans District 4 highway & bridge programs",
      "BART core-capacity and transit expansion",
      "Seismic retrofit of bridges and structures",
      "Regional water and seismic reliability programs",
      "SFO airport modernization",
    ],
  },
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "California",
    abbr: "CA",
    region: "Southern California",
    dot: "Caltrans",
    marketNote:
      "In the San Diego region, we connect firms with PEs and project leads driving the freeway, transit, and water-recycling programs shaping Southern California's southern gateway.",
    localPrograms: [
      "Caltrans District 11 freeway & interchange work",
      "MTS trolley and transit expansion",
      "Pure Water San Diego recycling program",
      "Coastal rail realignment and bluff stabilization",
      "San Diego International Airport redevelopment",
    ],
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "Texas",
    abbr: "TX",
    region: "South Texas",
    dot: "TxDOT",
    marketNote:
      "Throughout San Antonio and South Texas, we staff the transportation, drainage, and water teams behind the highway, flood-control, and aquifer programs central to the region's growth.",
    localPrograms: [
      "TxDOT San Antonio District highway programs",
      "VIA Metropolitan Transit rapid corridors",
      "San Antonio River and flood-control tunnels",
      "Edwards Aquifer water-resource projects",
      "San Antonio International Airport expansion",
    ],
  },
  {
    slug: "austin-tx",
    city: "Austin",
    state: "Texas",
    abbr: "TX",
    region: "Central Texas",
    dot: "TxDOT",
    marketNote:
      "In fast-growing Central Texas, we help firms scale civil and transportation teams for the highway, transit, and water programs keeping pace with the Austin metro's expansion.",
    localPrograms: [
      "TxDOT I-35 Capital Express highway program",
      "Project Connect light-rail and transit",
      "Colorado River and watershed management",
      "Regional water and utility infrastructure",
      "Austin-Bergstrom airport expansion",
    ],
  },
  {
    slug: "jacksonville-fl",
    city: "Jacksonville",
    state: "Florida",
    abbr: "FL",
    region: "North Florida",
    dot: "FDOT",
    marketNote:
      "Across Jacksonville and North Florida, we recruit the bridge, drainage, and transportation engineers supporting the highway, resiliency, and port programs of the region's largest city.",
    localPrograms: [
      "FDOT District 2 highway and bridge programs",
      "JTA transit and Ultimate Urban Circulator",
      "St. Johns River crossings and resiliency",
      "Coastal and stormwater drainage upgrades",
      "JAXPORT and marine infrastructure",
    ],
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    abbr: "FL",
    region: "Central Florida",
    dot: "FDOT",
    marketNote:
      "In our home market of Central Florida, we place civil and transportation engineers on the interstate, toll, and transit programs driving one of the nation's fastest-growing metros.",
    localPrograms: [
      "FDOT I-4 Ultimate & Beyond corridor program",
      "SunRail commuter-rail expansion",
      "Central Florida Expressway (CFX) toll programs",
      "Water and reclaimed-water capital projects",
      "Orlando International Airport (MCO) expansion",
    ],
  },
  {
    slug: "pittsburgh-pa",
    city: "Pittsburgh",
    state: "Pennsylvania",
    abbr: "PA",
    region: "Western Pennsylvania",
    dot: "PennDOT",
    marketNote:
      "In Pittsburgh and Western Pennsylvania, we recruit the bridge, structural, and water engineers rebuilding a historic three-rivers infrastructure network.",
    localPrograms: [
      "PennDOT District 11 bridge and roadway programs",
      "Pittsburgh Regional Transit busway and rail work",
      "Three-rivers bridge rehabilitation and replacement",
      "ALCOSAN combined-sewer water-quality program",
      "Pittsburgh International Airport modernization",
    ],
  },
  {
    slug: "cincinnati-oh",
    city: "Cincinnati",
    state: "Ohio",
    abbr: "OH",
    region: "the Ohio Valley",
    dot: "Ohio DOT",
    marketNote:
      "Across greater Cincinnati and the Ohio Valley, we connect firms with civil and transportation talent for the bridge, transit, and river-corridor programs modernizing the region.",
    localPrograms: [
      "Ohio DOT & Brent Spence Bridge corridor program",
      "Metro / SORTA transit and bus-rapid-transit",
      "Ohio River crossings and floodwall systems",
      "MSD combined-sewer and water-quality upgrades",
      "CVG airport capital projects",
    ],
  },
  {
    slug: "cleveland-oh",
    city: "Cleveland",
    state: "Ohio",
    abbr: "OH",
    region: "Northeast Ohio",
    dot: "Ohio DOT",
    marketNote:
      "In Cleveland and Northeast Ohio, we staff the transportation, structural, and water teams behind the freeway, transit, and lakefront programs rebuilding regional infrastructure.",
    localPrograms: [
      "Ohio DOT freeway and bridge programs",
      "GCRTA rail and transit modernization",
      "Cuyahoga River and lakefront infrastructure",
      "Project Clean Lake stormwater program",
      "Cleveland Hopkins airport improvements",
    ],
  },
  {
    slug: "st-louis-mo",
    city: "St. Louis",
    state: "Missouri",
    abbr: "MO",
    region: "the Gateway region",
    dot: "MoDOT",
    marketNote:
      "Throughout the St. Louis metro, we place civil and transportation engineers on the bridge, levee, and transit programs serving a two-state Mississippi River market.",
    localPrograms: [
      "MoDOT & IDOT Mississippi River bridge programs",
      "MetroLink light-rail expansion",
      "Levee, floodwall, and river-corridor systems",
      "MSD combined-sewer and stormwater program",
      "St. Louis Lambert airport modernization",
    ],
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "North Carolina",
    abbr: "NC",
    region: "the Research Triangle",
    dot: "NCDOT",
    marketNote:
      "Across the Research Triangle, we place PEs and project leads on the highway, transit, and water programs driving one of the Southeast's fastest-growing regions.",
    localPrograms: [
      "NCDOT highway and interchange programs",
      "GoTriangle commuter-rail and BRT corridors",
      "Neuse River basin and stormwater work",
      "Regional water and utility expansion",
      "RDU airport capital improvements",
    ],
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "District of Columbia",
    abbr: "DC",
    region: "the National Capital region",
    dot: "DDOT",
    marketNote:
      "In the National Capital region, we recruit the bridge, transit, and water engineers supporting one of the country's most heavily used federal and municipal infrastructure networks.",
    localPrograms: [
      "DDOT roadway and bridge programs",
      "WMATA Metrorail and transit capital work",
      "Federal facility and security infrastructure",
      "Anacostia River and Clean Rivers tunnel program",
      "Reagan National & Dulles airport projects",
    ],
  },
  {
    slug: "hartford-ct",
    city: "Hartford",
    state: "Connecticut",
    abbr: "CT",
    region: "New England",
    dot: "CTDOT",
    marketNote:
      "Across central Connecticut and New England, we place civil, structural, and water engineers on the highway, transit, and flood-control programs modernizing the region.",
    localPrograms: [
      "CTDOT highway and bridge programs",
      "CTfastrak BRT and Hartford Line rail",
      "Connecticut River and flood-control systems",
      "Clean Water Fund and utility upgrades",
      "Bradley International Airport improvements",
    ],
  },
  {
    slug: "albuquerque-nm",
    city: "Albuquerque",
    state: "New Mexico",
    abbr: "NM",
    region: "the Southwest",
    dot: "NMDOT",
    marketNote:
      "In Albuquerque and across New Mexico, we help firms scale civil and transportation teams for the highway, transit, and water-resource programs serving the high-desert Southwest.",
    localPrograms: [
      "NMDOT highway and interchange programs",
      "ABQ RIDE and Rail Runner transit corridors",
      "Rio Grande water-resource and drainage work",
      "AMAFCA arroyo flood-control systems",
      "Albuquerque International Sunport projects",
    ],
  },
  {
    slug: "birmingham-al",
    city: "Birmingham",
    state: "Alabama",
    abbr: "AL",
    region: "the Deep South",
    dot: "ALDOT",
    marketNote:
      "Throughout the Birmingham metro and the Deep South, we recruit the bridge, highway, and water engineers supporting the region's interstate and utility infrastructure programs.",
    localPrograms: [
      "ALDOT highway and I-59/20 bridge programs",
      "BJCTA transit and mobility projects",
      "Cahaba and Black Warrior watershed work",
      "Regional water and sewer upgrades",
      "Birmingham-Shuttlesworth airport improvements",
    ],
  },
  {
    slug: "memphis-tn",
    city: "Memphis",
    state: "Tennessee",
    abbr: "TN",
    region: "the Mid-South",
    dot: "TDOT",
    marketNote:
      "In Memphis and the Mid-South, we place civil, drainage, and transportation engineers on the highway, levee, and logistics-infrastructure programs central to a major river and freight hub.",
    localPrograms: [
      "TDOT highway and I-55 Mississippi River bridge work",
      "MATA transit and mobility improvements",
      "Wolf River and Mississippi levee systems",
      "Stormwater and drainage capital program",
      "Memphis International Airport modernization",
    ],
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "Nebraska",
    abbr: "NE",
    region: "the Great Plains",
    dot: "NDOT",
    marketNote:
      "Across the Omaha metro and the Great Plains, we staff the transportation, structural, and water teams behind the highway, transit, and river-corridor programs serving the region.",
    localPrograms: [
      "NDOT highway and interchange programs",
      "ORBT bus-rapid-transit and mobility",
      "Missouri River crossings and levee systems",
      "Combined-sewer overflow (CSO) program",
      "Eppley Airfield capital projects",
    ],
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    abbr: "ID",
    region: "the Intermountain West",
    dot: "ITD",
    marketNote:
      "In the fast-growing Boise metro and the Intermountain West, we place civil and transportation engineers on the highway, transit, and water programs keeping pace with the region's expansion.",
    localPrograms: [
      "ITD highway and interchange programs",
      "Valley Regional Transit corridors",
      "Boise River and flood-management work",
      "Regional water and utility infrastructure",
      "Boise Airport expansion projects",
    ],
  },
  {
    slug: "providence-ri",
    city: "Providence",
    state: "Rhode Island",
    abbr: "RI",
    region: "New England",
    dot: "RIDOT",
    marketNote:
      "Across Providence and Rhode Island, we recruit the bridge, coastal, and water engineers delivering one of New England's most ambitious statewide bridge-repair programs.",
    localPrograms: [
      "RIDOT RhodeWorks bridge and highway program",
      "RIPTA transit and multimodal projects",
      "Providence River and coastal resiliency",
      "Narragansett Bay water-quality program",
      "T.F. Green airport improvements",
    ],
  },
  {
    slug: "buffalo-ny",
    city: "Buffalo",
    state: "New York",
    abbr: "NY",
    region: "Western New York",
    dot: "NYSDOT",
    marketNote:
      "In Buffalo and Western New York, we place civil, structural, and water engineers on the highway, transit, and waterfront programs revitalizing the region's infrastructure.",
    localPrograms: [
      "NYSDOT Buffalo region highway and bridge programs",
      "NFTA Metro Rail extension and transit",
      "Lake Erie and Niagara River infrastructure",
      "Buffalo Sewer combined-sewer program",
      "Buffalo Niagara International Airport projects",
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

// Tool, certification, and code-fluency skills we screen for — distinct from
// EXPERTISE (discipline areas) and ROLES (job titles). Shared across every
// civil city page rather than varying by market, matching the same call made
// for the MEP pages (see MEP_SKILLS in lib/mep.ts).
export const SKILLS = [
  "AutoCAD Civil 3D",
  "Bentley MicroStation / OpenRoads Designer",
  "Bentley InRoads",
  "ArcGIS / geospatial analysis",
  "HEC-RAS hydrology & hydraulics modeling",
  "HEC-HMS",
  "Bentley SewerGEMS / WaterGEMS",
  "Synchro / SimTraffic",
  "PTV Vissim traffic simulation",
  "STAAD.Pro / RISA structural analysis",
  "Pavement design software (e.g. MicroPaver)",
  "Professional Engineer (PE) license",
  "Professional Traffic Operations Engineer (PTOE)",
  "Certified Floodplain Manager (CFM)",
  "OSHA 30-Hour certification",
  "NICET certification (construction inspection)",
  "AASHTO design standards fluency",
  "FHWA / State DOT design manual fluency",
  "Erosion & sediment control (SWPPP) design",
  "Construction engineering & inspection (CEI)",
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
  { role: "Civil Designer / CAD Technician", range: "$55,000 – $78,000" },
  { role: "Civil Engineer (EIT)", range: "$70,000 – $95,000" },
  { role: "Project Engineer (Pre-PE)", range: "$82,000 – $108,000" },
  { role: "Traffic & ITS Engineer (PE)", range: "$100,000 – $140,000" },
  { role: "Licensed PE (Mid-Level)", range: "$105,000 – $150,000" },
  { role: "Geotechnical Engineer (PE)", range: "$108,000 – $152,000" },
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
