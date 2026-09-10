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
  licensure?: string; // city/state-specific MEP-heavy project types
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
    agencies: [
      "NYC Department of Buildings",
      "NYC Health + Hospitals",
      "Dormitory Authority of the State of New York",
      "MTA Construction & Development",
      "Port Authority of NY & NJ",
    ],
    marketDetail: [
      "New York's carbon cap on large buildings is the single largest driver of MEP work in the city. Existing buildings have to meet declining emissions limits or pay, which has turned decarbonisation retrofit into a standing commercial market rather than a sustainability exercise: heating plant replacement, electrification, submetering and the energy modelling needed to prove compliance.",
      "The building stock makes that harder than it sounds. Much of the city is served by steam, floor-to-floor heights leave little room for new distribution, and work has to be staged around occupied tenancies. Engineers who can fit a modern system into a pre-war building without a shutdown are doing the thing this market actually needs.",
    ],
    hiringFocus: [
      {
        role: "Decarbonisation & electrification engineers",
        why: "Emissions limits apply to existing buildings, so retrofit design is a compliance requirement with a deadline rather than an option.",
      },
      {
        role: "Energy modellers",
        why: "Compliance is demonstrated through modelling, which makes the modeller part of the legal case rather than a design support role.",
      },
      {
        role: "High-rise mechanical engineers",
        why: "Tall-building distribution, riser design and pressure zoning are specialised and the local stock demands them constantly.",
      },
      {
        role: "Healthcare & life science MEP engineers",
        why: "Hospital and laboratory systems carry redundancy and air change requirements that ordinary commercial work never involves.",
      },
    ],
    licensure: "New York licenses through the State Education Department's Office of the Professions, with transfer for most out-of-state PEs on an NCEES record. What governs day to day is the Department of Buildings: filing requires a licensed professional to take responsibility for the design, and familiarity with the filing process and the department's expectations is treated by employers as a qualification in its own right, separate from the licence.",
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    authority: "LADBS",
    marketNote:
      "Across the LA basin, we place mechanical, electrical, and plumbing engineers on the studio, hospital, and high-rise projects driving one of the country's largest MEP markets, plus a Title 24 code that keeps electrification front and center.",
    localPrograms: [
      "Title 24 electrification & decarbonization retrofits",
      "Studio, soundstage, and entertainment-campus MEP",
      "Hospital and life-science facility infrastructure",
      "High-rise residential and mixed-use MEP systems",
      "LAX modernization mechanical & electrical scopes",
    ],
    agencies: [
      "LA Department of Building & Safety",
      "California Department of Health Care Access & Information",
      "Los Angeles Unified School District",
      "Los Angeles World Airports",
      "Los Angeles County Public Works",
    ],
    marketDetail: [
      "California's energy code sets the terms for MEP design here, and it has been pushing electrification and stringent efficiency requirements for years, so an engineer working in this state is designing to a standard well ahead of the national model codes. That experience is portable outward but the reverse is not: engineers arriving from lighter-code states usually have ground to make up.",
      "The other defining feature is who reviews healthcare work. Hospital construction in California is reviewed by a dedicated state authority rather than the local building department, on its own timescale and to its own standards, which makes healthcare MEP a specialism with a distinct career path in this market.",
    ],
    hiringFocus: [
      {
        role: "Healthcare MEP engineers",
        why: "State-level hospital plan review is a separate regime, and engineers who have carried projects through it are valued accordingly.",
      },
      {
        role: "Title 24 compliance & energy engineers",
        why: "The state energy code is demanding enough that compliance is a design discipline rather than a checkbox.",
      },
      {
        role: "Studio & entertainment facility engineers",
        why: "Soundstages and production facilities have acoustic, power and cooling requirements that do not appear in ordinary commercial work.",
      },
      {
        role: "Mission-critical power & cooling engineers",
        why: "Data centre and broadcast infrastructure need redundancy design that general building engineers rarely practise.",
      },
    ],
    licensure: "California does not grant PE licensure by simple comity: the state board requires its own application process. Mechanical and electrical engineers are licensed as such by title, and fire protection engineering is a separate licensed discipline here, which matters when a project needs sealed life-safety design. Healthcare work is additionally gated by the state's hospital plan review authority rather than by the city.",
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
    agencies: [
      "Chicago Department of Buildings",
      "Chicago Public Schools",
      "Cook County Department of Capital Planning",
      "University of Chicago & Northwestern facilities",
      "Illinois Capital Development Board",
    ],
    marketDetail: [
      "Chicago's high-rise stock is old enough that most mechanical work here is replacement inside an occupied building, and the city's energy code has tightened to the point where a like-for-like replacement often no longer complies. That combination puts a premium on engineers who can design a compliant system into a building that was not built for one.",
      "Outside the core, the suburban corridor has become one of the country's larger concentrations of data centre capacity, which gives the region a second and quite separate MEP market built on redundancy, cooling and electrical distribution at scale rather than on tenant comfort.",
    ],
    hiringFocus: [
      {
        role: "High-rise retrofit mechanical engineers",
        why: "Replacing plant in an occupied tower to a tightened energy code is the region's most common and most constrained problem.",
      },
      {
        role: "Mission-critical electrical engineers",
        why: "The suburban data centre cluster needs distribution and redundancy design that ordinary commercial work does not develop.",
      },
      {
        role: "Energy code compliance engineers",
        why: "A stricter local code than the state model means compliance decisions are made locally and have to be argued locally.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Large academic medical centres run continuous capital programmes with their own systems standards.",
      },
    ],
    licensure: "Illinois licenses professional engineers through the Department of Financial and Professional Regulation and separately licenses structural engineers, which occasionally matters for equipment support design. Chicago operates its own building and energy code rather than adopting the state model unchanged, so design experience elsewhere in Illinois is not the same as experience inside the city, and employers here distinguish between the two.",
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
    agencies: [
      "Houston Permitting Center",
      "Texas Medical Center institutions",
      "Harris County Engineering Department",
      "Houston Independent School District",
      "Port Houston",
    ],
    marketDetail: [
      "Healthcare is the anchor of MEP work in Houston. The medical district here is one of the largest concentrations of hospitals and research institutions anywhere, and it runs a continuous capital programme, so hospital mechanical and electrical design is a mainstream career in this city rather than a niche.",
      "Climate sets the technical problem. High humidity for much of the year makes latent load and dehumidification, not sensible cooling, the thing that decides whether a system works, and getting that wrong produces mould and pressurisation problems rather than merely discomfort. Engineers who have designed in dry-climate markets frequently have to relearn this.",
    ],
    hiringFocus: [
      {
        role: "Healthcare MEP engineers",
        why: "A very large medical district generates sustained demand for hospital systems design with its own codes and redundancy requirements.",
      },
      {
        role: "Humidity control & dehumidification specialists",
        why: "Latent load governs system selection in this climate, and mistakes show up as building damage rather than as complaints.",
      },
      {
        role: "Mission-critical & industrial MEP engineers",
        why: "Data centres and process-adjacent facilities need power and cooling design at industrial scale.",
      },
      {
        role: "Commissioning engineers",
        why: "Systems this complex are only proven at handover, and measured performance is what owners here increasingly ask for.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders, and requires the engineering firm to be registered as well as the individual. Texas does not adopt a statewide energy code as aggressive as California's or New York's, so the binding constraints here are more often the owner's own standards, particularly in healthcare, than the municipal code.",
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
    agencies: [
      "Phoenix Development Services",
      "Maricopa County Planning & Development",
      "Arizona State University facilities",
      "Banner Health & regional health systems",
      "City of Chandler & Mesa development services",
    ],
    marketDetail: [
      "Semiconductor manufacturing has changed this market. Large fabrication facilities and their supply chains need process utilities, ultra-pure water, specialty exhaust, cleanroom air handling and electrical capacity on an industrial scale, and that work needs engineers whose experience is closer to process plant design than to commercial buildings.",
      "For everything else, heat is the design driver. Peak cooling loads, equipment derating, condenser performance and the consequences of a cooling failure are all more severe here than in temperate markets, which makes redundancy and equipment selection judgement locally specific.",
    ],
    hiringFocus: [
      {
        role: "Semiconductor & cleanroom MEP engineers",
        why: "Fabrication facilities need process utility design that very few building engineers have done.",
      },
      {
        role: "Mission-critical cooling engineers",
        why: "Extreme ambient conditions make data centre and critical facility cooling design harder here than almost anywhere else.",
      },
      {
        role: "Central plant engineers",
        why: "Campus and institutional cooling at this scale is a plant design problem rather than a building one.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous expansion with their own systems standards.",
      },
    ],
    licensure: "Arizona registers engineers through the Board of Technical Registration, which accepts comity applications from PEs licensed elsewhere. The credential that most affects employability here is not the licence but the building type: fabrication and mission-critical experience commands a different market from commercial work, and firms recruit for the two separately.",
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
    agencies: [
      "Philadelphia Department of Licenses & Inspections",
      "University of Pennsylvania & Drexel facilities",
      "Children's Hospital of Philadelphia & regional health systems",
      "Pennsylvania Department of General Services",
      "SEPTA",
    ],
    marketDetail: [
      "Laboratory and life science work is the distinctive strand here. The city's cell and gene therapy cluster has driven conversion of older commercial and industrial buildings into research and manufacturing space, which is a demanding MEP problem: high air change rates, containment, redundancy and vibration control fitted into structures never designed for any of it.",
      "The institutional base is the other half of the market. Large universities and health systems run their own continuous capital programmes with in-house standards, so a significant share of local MEP careers is spent working repeatedly for the same handful of owners.",
    ],
    hiringFocus: [
      {
        role: "Laboratory & life science MEP engineers",
        why: "Containment, air change and redundancy requirements make lab design a distinct discipline from commercial work.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run rolling capital programmes with their own systems standards.",
      },
      {
        role: "Adaptive reuse mechanical engineers",
        why: "Converting older buildings to research use means fitting demanding systems into structures with no allowance for them.",
      },
      {
        role: "Commissioning engineers",
        why: "Laboratory and healthcare systems have to be proven to perform, not merely installed.",
      },
    ],
    licensure: "Pennsylvania licenses through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, with comity for NCEES record holders. Philadelphia administers its own licensing and inspections process, and for laboratory and healthcare work the more demanding review is often the owner's own standards rather than the municipal one, so institutional experience is what employers screen for.",
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
    agencies: [
      "Dallas Development Services",
      "Texas Department of Licensing & Regulation",
      "Dallas Independent School District",
      "Regional health systems across North Texas",
      "DFW International Airport",
    ],
    marketDetail: [
      "North Texas is one of the largest data centre markets in the country, and that shapes the local MEP profession more than any other single factor. Mission-critical work here is not an occasional project type but a career: electrical distribution, redundancy topology, cooling at density and the commissioning regime that goes with proving all of it.",
      "Alongside that, sustained corporate relocation has kept large office, campus and mixed-use development in continuous delivery, which supports a broad conventional building services market underneath the critical facilities work.",
    ],
    hiringFocus: [
      {
        role: "Mission-critical electrical engineers",
        why: "Data centre distribution and redundancy design is the region's signature MEP speciality and demand for it is deep.",
      },
      {
        role: "Critical facility cooling engineers",
        why: "High-density cooling is a distinct design problem from comfort cooling and needs separate experience.",
      },
      {
        role: "Commissioning & Cx authorities",
        why: "Critical facilities are only accepted once proven under load, which makes commissioning a first-class role here.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems expand continuously and design to their own standards.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders and registration required for the firm as well. Accessibility review for most public buildings runs through the state licensing department rather than the city, which is a step engineers arriving from other states routinely overlook.",
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
    agencies: [
      "Atlanta Office of Buildings",
      "Georgia Department of Community Affairs",
      "Emory Healthcare & regional health systems",
      "Georgia Institute of Technology facilities",
      "Hartsfield-Jackson Atlanta International Airport",
    ],
    marketDetail: [
      "Two building types define this market and neither is conventional office work. The region has become a significant data centre location, bringing mission-critical electrical and cooling design with it, and the state's film industry has produced purpose-built studio campuses whose power, acoustic and ventilation requirements are unlike anything in commercial practice.",
      "Underneath both, the climate makes humidity control the recurring technical issue. Long, humid shoulder seasons mean dehumidification and building pressurisation decide whether a building performs, particularly in the institutional and healthcare work that forms the market's steady base.",
    ],
    hiringFocus: [
      {
        role: "Mission-critical MEP engineers",
        why: "Data centre growth in the region has created sustained demand for redundancy and cooling design at density.",
      },
      {
        role: "Studio & production facility engineers",
        why: "Purpose-built film facilities have acoustic, power and ventilation requirements that ordinary commercial work does not develop.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous capital programmes to their own systems standards.",
      },
      {
        role: "Humidity control specialists",
        why: "Latent load and pressurisation govern building performance in this climate more than sensible cooling does.",
      },
    ],
    licensure: "Georgia licenses through the Board of Professional Engineers and Land Surveyors, with comity for engineers licensed elsewhere, and the state adopts its energy and mechanical codes with Georgia-specific amendments that local officials apply closely. For institutional and healthcare work the owner's standards are usually the more demanding review.",
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
    agencies: [
      "Miami-Dade Regulatory & Economic Resources",
      "City of Miami Building Department",
      "Jackson Health System & regional hospitals",
      "Miami-Dade County Public Schools",
      "Miami-Dade Aviation Department",
    ],
    marketDetail: [
      "South Florida runs the most demanding wind provisions in the country. The high velocity hurricane zone covering this county and its neighbour imposes design and product approval requirements that apply nowhere else, and they reach into MEP directly: rooftop equipment restraint, louvre and intake protection, generator and fuel system resilience, and the approval status of the products specified.",
      "Humidity is the second constant. Continuous latent load makes dehumidification and pressurisation the design questions that decide whether a building stays free of mould, and in high-rise residential, which dominates development here, those decisions are made at a scale that makes errors expensive.",
    ],
    hiringFocus: [
      {
        role: "High-rise residential MEP engineers",
        why: "Residential towers dominate development here and their distribution, ventilation and pressurisation problems are specific to that form.",
      },
      {
        role: "Hurricane-resilience MEP engineers",
        why: "Equipment restraint, protection and product approval under the high velocity zone are requirements unique to this region.",
      },
      {
        role: "Dehumidification specialists",
        why: "Latent load is continuous here, and controlling it is what keeps buildings serviceable.",
      },
      {
        role: "Emergency power engineers",
        why: "Residential and healthcare buildings carry standby power obligations that a storm season tests in practice.",
      },
    ],
    licensure: "Florida licenses through the Board of Professional Engineers, with licensure by endorsement for engineers already licensed elsewhere. The distinctive local requirement is product approval: components used in the high velocity hurricane zone need county or state approval, so specification here is constrained in a way it is nowhere else, and engineers unfamiliar with that regime find their designs rejected rather than merely questioned.",
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
    agencies: [
      "Seattle Department of Construction & Inspections",
      "University of Washington & Fred Hutch facilities",
      "Seattle Children's & regional health systems",
      "Port of Seattle",
      "Sound Transit",
    ],
    marketDetail: [
      "Seattle's energy code is among the most demanding in the country and has moved decisively against fossil fuel heating in new buildings, which makes heat pump design, thermal storage and electrical capacity planning the ordinary content of MEP work here rather than an advanced option.",
      "The building types that dominate are laboratory and healthcare. A large research and biotech cluster needs containment, air change and redundancy design, and doing that inside an aggressive energy code is genuinely harder than doing either alone, which is why lab-plus-code experience is the profile firms here compete for.",
    ],
    hiringFocus: [
      {
        role: "Electrification & heat pump engineers",
        why: "Local code has effectively made electrified heating the default, so this is mainstream design work rather than a speciality.",
      },
      {
        role: "Laboratory MEP engineers",
        why: "The research cluster needs containment and air change design that ordinary commercial work does not develop.",
      },
      {
        role: "Energy modellers",
        why: "Compliance with a stringent code is demonstrated by modelling, which makes the modeller central to approval.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous capital programmes with their own standards.",
      },
    ],
    licensure: "Washington registers engineers through the Board of Registration for Professional Engineers and Land Surveyors, with comity for equivalent licences. Seattle enforces its own energy code, stricter than the state's, so experience elsewhere in Washington is not equivalent to experience inside the city and employers here make that distinction explicitly.",
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
    agencies: [
      "Denver Community Planning & Development",
      "UCHealth & regional health systems",
      "University of Colorado facilities",
      "Denver International Airport",
      "Colorado State Buildings Program",
    ],
    marketDetail: [
      "Denver has adopted a building performance standard that requires existing commercial buildings to reach energy targets over time, which has turned retrofit and electrification into a compliance-driven market here in the same way carbon caps have in New York, and it is the main source of MEP work in the existing stock.",
      "Altitude is the technical detail engineers arriving from sea level most often get wrong. Reduced air density changes fan and compressor performance, combustion, ventilation rates and equipment capacity, so catalogue selections have to be corrected rather than taken at face value, and reviewers here expect to see that the correction was made.",
    ],
    hiringFocus: [
      {
        role: "Building performance & retrofit engineers",
        why: "Energy targets on existing buildings make retrofit design a scheduled obligation for owners rather than a discretionary project.",
      },
      {
        role: "Altitude-experienced mechanical engineers",
        why: "Equipment derating at this elevation changes selection and sizing, and it is a routine source of error for engineers new to the market.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous expansion to their own systems standards.",
      },
      {
        role: "Mission-critical engineers",
        why: "Data centre and critical facility work in the region needs redundancy design that general practice does not develop.",
      },
    ],
    licensure: "Colorado licenses through the State Board of Licensure for Architects, Professional Engineers and Professional Land Surveyors, with comity for equivalent licences. Denver enforces its own energy and performance requirements beyond the state code, so an engineer's experience is assessed by which jurisdiction they have filed in, not merely by which state licensed them.",
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
    agencies: [
      "Boston Inspectional Services Department",
      "Mass General Brigham & regional health systems",
      "Harvard & MIT facilities",
      "Massachusetts Division of Capital Asset Management",
      "Massport",
    ],
    marketDetail: [
      "This region holds the largest concentration of laboratory space in the country, and laboratory MEP is its defining technical discipline. High air change rates, fume hood containment, redundancy, vibration criteria and the energy consequences of moving that much air make lab design a specialism that engineers build entire careers inside.",
      "The state's stretch and specialised energy codes push new buildings toward very low emissions, which collides directly with laboratory ventilation demands. Reconciling those two is the hardest routine problem in this market and the reason experienced lab engineers here are difficult to replace.",
    ],
    hiringFocus: [
      {
        role: "Laboratory MEP engineers",
        why: "The region's research cluster is the largest in the country and lab systems are a discipline of their own.",
      },
      {
        role: "Energy code & decarbonisation engineers",
        why: "Stretch code requirements apply on top of the base code, and reconciling them with lab loads is the local design challenge.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Major academic medical centres run continuous capital programmes with demanding systems standards.",
      },
      {
        role: "Commissioning engineers",
        why: "Laboratory and healthcare systems are accepted on measured performance rather than on installation alone.",
      },
    ],
    licensure: "Massachusetts licenses through the Board of Registration of Professional Engineers and Land Surveyors, with comity for equivalent licences. Municipalities may adopt the state's stretch or specialised energy code, so which code applies depends on the town as well as the state, and an engineer's familiarity with the adopting jurisdiction matters as much as the licence.",
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
    agencies: [
      "Minneapolis Community Planning & Economic Development",
      "Minnesota Department of Labor & Industry",
      "Regional health systems across the Twin Cities",
      "University of Minnesota facilities",
      "Metropolitan Airports Commission",
    ],
    marketDetail: [
      "Heating design carries more weight here than cooling, which inverts the priorities of most American MEP markets. Design temperatures well below zero make heating capacity, freeze protection, glycol systems, ventilation preheat and building envelope interaction the questions that decide whether a system works, and getting them wrong causes damage rather than discomfort.",
      "Healthcare is the market's institutional anchor, with large systems running continuous capital programmes, while the connected skyway network downtown creates pressurisation and infiltration conditions between buildings that engineers elsewhere never encounter.",
    ],
    hiringFocus: [
      {
        role: "Cold climate mechanical engineers",
        why: "Heating capacity, freeze protection and preheat design govern system performance here in a way cooling-led markets never require.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Large regional health systems run rolling capital programmes to their own standards.",
      },
      {
        role: "Central plant & district energy engineers",
        why: "Campus and downtown heating is delivered at plant scale rather than building by building.",
      },
      {
        role: "Commissioning engineers",
        why: "Systems that must work through a severe winter are proven in commissioning rather than assumed.",
      },
    ],
    licensure: "Minnesota licenses through the Board of Architecture, Engineering, Land Surveying, Landscape Architecture, Geoscience and Interior Design, with comity for equivalent licences. The state administers its building and energy code centrally through the Department of Labor and Industry rather than leaving it to each municipality, which makes code experience more portable within Minnesota than it is in states where every city amends.",
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
    agencies: [
      "Detroit Buildings, Safety Engineering & Environmental Department",
      "Michigan Department of Licensing & Regulatory Affairs",
      "Henry Ford Health & regional health systems",
      "Automotive and battery manufacturers across south east Michigan",
      "Wayne State University facilities",
    ],
    marketDetail: [
      "Industrial work anchors MEP practice in south east Michigan. Automotive plants and, increasingly, battery and electrified powertrain facilities need process utilities, compressed air, exhaust, high-capacity electrical distribution and ventilation designed for manufacturing rather than occupancy, which is a different profession from commercial building services.",
      "The second strand is adaptive reuse. A large stock of substantial older buildings being brought back into service means fitting modern systems into structures with no provision for them, under a cold-climate heating requirement that leaves little margin for a compromised design.",
    ],
    hiringFocus: [
      {
        role: "Industrial & manufacturing MEP engineers",
        why: "Plant utilities and process ventilation are a distinct discipline that the region's manufacturing base demands continuously.",
      },
      {
        role: "High-capacity electrical engineers",
        why: "Battery and electrified manufacturing facilities need distribution design at a scale commercial work never reaches.",
      },
      {
        role: "Adaptive reuse mechanical engineers",
        why: "Older buildings returning to service need systems fitted where none were designed for, in a demanding climate.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Regional health systems run continuous capital programmes with their own systems standards.",
      },
    ],
    licensure: "Michigan licenses through the Department of Licensing and Regulatory Affairs, with comity for equivalent out-of-state licences. Industrial work is often governed by the owner's engineering standards and by process safety requirements rather than by the building code alone, so manufacturing experience is assessed separately from commercial credentials by employers here.",
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
    agencies: [
      "Charlotte-Mecklenburg Code Enforcement",
      "North Carolina Department of Insurance, Engineering Division",
      "Atrium Health & Novant Health facilities",
      "Financial sector corporate campuses",
      "Charlotte Douglas International Airport",
    ],
    marketDetail: [
      "Charlotte's MEP market rests on two owner types. The banking sector's presence has produced large corporate campuses and, with them, the trading floors, operations centres and standby power arrangements that financial infrastructure requires, while the state's data centre growth has brought mission-critical work into the region alongside it.",
      "Healthcare is the steady third. Two large hospital systems run continuous capital programmes across the metro, which supports a reliable base of institutional MEP work underneath the more cyclical corporate and critical facility markets.",
    ],
    hiringFocus: [
      {
        role: "Mission-critical electrical engineers",
        why: "Financial operations centres and data centres both need redundancy and standby design that general practice does not develop.",
      },
      {
        role: "Healthcare MEP engineers",
        why: "Two large hospital systems expand continuously to their own systems standards.",
      },
      {
        role: "Corporate campus mechanical engineers",
        why: "Large single-owner campuses are designed and operated to standards that persist across many projects.",
      },
      {
        role: "Commissioning engineers",
        why: "Critical and healthcare facilities are accepted on demonstrated performance rather than on installation.",
      },
    ],
    licensure: "North Carolina licenses through the Board of Examiners for Engineers and Surveyors, with comity for equivalent licences, and requires the firm to hold its own certificate of authorisation before offering engineering services. The state reviews building plans centrally through the Department of Insurance for many project types, which is an approval route engineers arriving from other states do not expect.",
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

// Tool, certification, and code-fluency skills we screen for — distinct from
// MEP_EXPERTISE (discipline areas) and MEP_ROLES (job titles). Shared across
// every MEP city page rather than varying by market: what changes city to
// city is the *work* (see localPrograms), not which CAD package or code a
// licensed MEP engineer is expected to know.
export const MEP_SKILLS = [
  "Autodesk Revit MEP",
  "AutoCAD MEP",
  "Navisworks (BIM coordination & clash detection)",
  "Trane TRACE 700 / TRACE 3D Plus",
  "Carrier HAP (Hourly Analysis Program)",
  "eQUEST / EnergyPlus energy modeling",
  "ETAP / SKM power systems analysis",
  "AGi32 lighting design",
  "Bluebeam Revu",
  "Autodesk Construction Cloud / BIM 360",
  "Building automation (Niagara, Siemens, JCI Metasys)",
  "Professional Engineer (PE) license",
  "LEED AP / LEED Green Associate",
  "ASHRAE certification (BEMP / CEM)",
  "NICET certification (fire protection)",
  "HVAC load calculations & system design",
  "Electrical power distribution & short-circuit studies",
  "Fire protection system design (NFPA 13 / 14)",
  "Commissioning (Cx) per ASHRAE Guideline 0 / 1",
  "Code compliance: NEC, IMC, IPC, ASHRAE 90.1",
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
  { role: "MEP Designer / Revit Modeler", range: "$60,000 – $88,000" },
  { role: "Mechanical / Electrical Engineer (EIT)", range: "$70,000 – $95,000" },
  { role: "Commissioning (Cx) Engineer", range: "$85,000 – $125,000" },
  { role: "Fire Protection Engineer (PE)", range: "$100,000 – $145,000" },
  { role: "Licensed MEP PE (Mid-Level)", range: "$105,000 – $155,000" },
  { role: "Data Center Electrical Engineer (PE)", range: "$125,000 – $175,000" },
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
