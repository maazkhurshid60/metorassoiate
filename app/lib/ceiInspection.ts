// Data for the programmatic "CEI & Construction Inspection Recruiter — {City}"
// pages. Parallel to lib/cities.ts (civil) and lib/mep.ts (MEP), but focused on
// Construction Engineering & Inspection: materials testing, bridge/roadway
// inspection, resident engineering, and DOT construction oversight — NOT
// design engineering. Each city carries unique copy (marketNote + local work)
// so pages are not thin/duplicate content; shared content is reused across all.
//
// Same 50 metros as lib/cities.ts and lib/mep.ts, so every civil/MEP city page
// has a CEI counterpart at the same slug.

export interface CeiCity {
  slug: string;
  city: string;
  state: string;
  abbr: string;
  region: string;
  authority: string; // local DOT district / turnpike / transit-construction authority referenced in copy
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
  licensure?: string; // city/state-specific CEI-heavy project types
}

export const CEI_CITIES: CeiCity[] = [
  {
    slug: "new-york-ny",
    city: "New York",
    state: "New York",
    abbr: "NY",
    region: "the Northeast",
    authority: "NYSDOT Region 11 / Port Authority of NY & NJ",
    marketNote:
      "The Gateway Program's Hudson River rail tunnel and the ongoing Second Avenue Subway extension have made New York the largest CEI staffing market in the country, with resident engineers needed on multi-decade transit and bridge programs.",
    localPrograms: [
      "Gateway Program tunnel construction inspection",
      "Second Avenue Subway resident engineering",
      "JFK & LaGuardia airfield inspection",
      "BQE corridor rehabilitation oversight",
      "NYC DEP water main inspection",
    ],
    agencies: [
      "NYSDOT Region 11",
      "MTA Construction & Development",
      "Port Authority of NY & NJ",
      "NYC Department of Transportation",
      "NYC Department of Design & Construction",
    ],
    marketDetail: [
      "Inspection in New York is almost entirely inspection of work being built into something that has to keep operating. Bridges carry traffic through their own rehabilitation, stations stay open while they are rebuilt, and roadway work happens at night in short windows with the street returned by morning. That puts the emphasis on inspectors who can judge acceptance quickly and document it properly in the time available.",
      "The owner mix is unusually wide for one metro. A state district, a transit authority, a bi-state port authority and two city agencies all run their own inspection programmes with their own documentation expectations, so an inspector's value here is partly a matter of which owners' systems they already know.",
    ],
    hiringFocus: [
      {
        role: "NBIS-qualified bridge inspection team leaders",
        why: "A very large inventory of complex crossings runs on a mandated inspection cycle, and team leader qualification takes years to accumulate.",
      },
      {
        role: "Resident engineers for night and staged work",
        why: "Work carried out in short closures needs someone who can make acceptance decisions without pausing the operation.",
      },
      {
        role: "Office engineers & documentation specialists",
        why: "Each owner keeps its own records regime, and claims exposure on projects this size makes documentation a senior function.",
      },
      {
        role: "Transit and rail construction inspectors",
        why: "Building inside a running system requires familiarity with track access, protection and testing that highway experience does not provide.",
      },
    ],
    licensure: "New York qualifies inspectors through NYSDOT's own approved training and certification arrangements, with NICET levels commonly used alongside them and NBIS qualification required for bridge inspection team leaders. Transit and port authority work adds owner-specific safety and access certification on top. An inspector arriving from another state should expect to re-qualify here rather than transfer, which is the normal position across CEI.",
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    authority: "Caltrans District 7 / LA Metro",
    marketNote:
      "With the 2028 Olympics driving an unprecedented buildout of rail and highway capacity, Los Angeles CEI teams are staffing the Purple Line Extension and I-405 corridor at a pace few U.S. metros can match.",
    localPrograms: [
      "Purple Line Extension tunnel inspection",
      "I-405 Sepulveda Pass materials testing",
      "Olympic venue infrastructure inspection",
      "LAX Automated People Mover oversight",
      "Metro K Line resident engineering",
    ],
    agencies: [
      "Caltrans District 7",
      "LA Metro",
      "Los Angeles World Airports",
      "Los Angeles County Public Works",
      "LA Bureau of Engineering",
    ],
    marketDetail: [
      "Transit and aviation dominate the large-project inspection market here. Rail extensions and a major airport redevelopment programme have run for years, and both need inspection staff comfortable with systems work, phased handover and testing rather than with highway construction alone.",
      "California adds a compliance dimension that surprises people moving in. Prevailing wage and labour compliance monitoring on public work is enforced seriously and is often carried by the CEI team, so inspection staffing here routinely includes people whose function is contract and labour compliance rather than materials or workmanship.",
    ],
    hiringFocus: [
      {
        role: "Transit & rail construction inspectors",
        why: "Sustained rail expansion needs inspectors who understand systems installation and testing, which highway experience does not cover.",
      },
      {
        role: "Structures representatives",
        why: "Seismic detailing makes structural inspection more exacting here than in low-seismicity states.",
      },
      {
        role: "Labour compliance & contract specialists",
        why: "State prevailing wage enforcement puts compliance monitoring inside the CEI scope rather than outside it.",
      },
      {
        role: "Airport construction inspectors",
        why: "Working airside carries security, badging and operational constraints that take time to qualify for.",
      },
    ],
    licensure: "California runs inspector qualification largely through Caltrans requirements and owner-specific programmes, with ACI field testing certification standard for concrete work. Public projects are also subject to Department of Industrial Relations registration and prevailing wage rules, which the inspection team is frequently responsible for monitoring, so an inspector here needs contract literacy alongside technical qualification.",
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    abbr: "IL",
    region: "the Midwest",
    authority: "IDOT District 1 / Illinois Tollway",
    marketNote:
      "Illinois Tollway's Move Illinois capital program and the CTA Red Line Extension keep Chicago's CEI bench working across simultaneous multi-billion-dollar corridors, from the Jane Byrne Interchange to O'Hare's airfield.",
    localPrograms: [
      "Jane Byrne Interchange closeout inspection",
      "CTA Red Line Extension oversight",
      "Illinois Tollway pavement materials testing",
      "O'Hare airfield concrete inspection",
      "Circle Interchange bridge inspection",
    ],
    agencies: [
      "IDOT District 1",
      "Illinois Tollway",
      "Chicago Department of Transportation",
      "Chicago Transit Authority",
      "Cook County Department of Transportation & Highways",
    ],
    marketDetail: [
      "The tollway is what makes this market distinct. It runs a long-horizon capital programme of rebuilding and widening its own system, which gives the region a steady supply of large, repeatable highway inspection work alongside whatever the state district and the city are doing.",
      "The rest is rebuilding in place. Transit line reconstruction, viaduct and bridge work over a dense rail network, and street projects that also carry water main and service line replacement all mean inspectors here are usually verifying several trades in one trench rather than one.",
    ],
    hiringFocus: [
      {
        role: "Resident engineers & documentation staff",
        why: "Owner documentation regimes here are detailed and quantity-driven, which makes records a specialist competence rather than a clerical one.",
      },
      {
        role: "Materials inspectors & technicians",
        why: "Continuous large-scale paving and structural concrete keeps qualified materials testing in constant demand.",
      },
      {
        role: "Bridge & viaduct inspectors",
        why: "Structures crossing an extensive freight and transit rail network need inspection under access constraints set by the railroads.",
      },
      {
        role: "Utility and roadway coordination inspectors",
        why: "Street projects combine paving, water main and service replacement, so inspection spans trades that are usually separate.",
      },
    ],
    licensure: "Illinois qualifies inspection and materials staff through IDOT's own certification and documentation programmes, which the tollway and local agencies generally align with, and NBIS qualification governs bridge inspection. Illinois also issues a Structural Engineer licence separate from the PE, which matters when inspection work rises to structural review rather than verification.",
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "Texas",
    abbr: "TX",
    region: "the Gulf Coast",
    authority: "TxDOT Houston District",
    marketNote:
      "TxDOT's $9 billion I-45 North Houston Highway Improvement Project is one of the largest active freeway reconstructions in the nation, anchoring a CEI market that also spans the Grand Parkway's outer loop.",
    localPrograms: [
      "I-45 NHHIP resident engineering",
      "Grand Parkway segment materials testing",
      "Port of Houston channel inspection",
      "METRO BOOST corridor construction oversight",
      "Harris County bridge inspection",
    ],
    agencies: [
      "TxDOT Houston District",
      "Harris County Toll Road Authority",
      "Harris County Engineering Department",
      "METRO Houston",
      "Port Houston",
    ],
    marketDetail: [
      "Houston generates inspection work at a scale few metros match, because the freeway reconstruction programme here involves rebuilding urban corridors wholesale rather than resurfacing them. Projects of that size run for years and staff inspection teams accordingly, with distinct roles for earthwork, drainage, structures and materials.",
      "Drainage is inspected as carefully as pavement. Because the region is flat and floods, detention volumes, storm sewer grades and outfall construction carry consequences that a drier metro would treat as routine, and inspectors are expected to understand why a grade matters here rather than simply to check it.",
    ],
    hiringFocus: [
      {
        role: "Resident engineers for corridor reconstruction",
        why: "Multi-year urban freeway projects need leadership that can hold a large inspection team together across several construction seasons.",
      },
      {
        role: "Drainage & earthwork inspectors",
        why: "Flat terrain and flood risk make conveyance and detention construction consequential rather than routine.",
      },
      {
        role: "Materials technicians",
        why: "Sustained concrete and asphalt volume keeps qualified testing staff in permanent demand.",
      },
      {
        role: "Toll and managed lane inspectors",
        why: "A separate toll authority programme runs alongside the state's, with its own standards and delivery arrangements.",
      },
    ],
    licensure: "Texas qualifies inspection and materials personnel through TxDOT's own certification programmes, and engineering firms must hold state registration in addition to their engineers holding individual licences. An inspector moving here from another state will need to sit the Texas qualifications regardless of what they held before, which is the ordinary position in CEI and worth planning around.",
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    abbr: "AZ",
    region: "the Southwest",
    authority: "ADOT",
    marketNote:
      "ADOT's South Mountain Freeway and the ongoing I-10 Broadway Curve widening have turned metro Phoenix into a hotbed for desert-climate materials testing and DOT resident engineering.",
    localPrograms: [
      "I-10 Broadway Curve resident engineering",
      "Loop 202 South Mountain inspection",
      "Sky Harbor airfield materials testing",
      "Valley Metro rail construction oversight",
      "Salt River Project utility inspection",
    ],
    agencies: [
      "Arizona Department of Transportation",
      "Maricopa County Department of Transportation",
      "City of Phoenix Street Transportation",
      "Valley Metro",
      "Phoenix Sky Harbor",
    ],
    marketDetail: [
      "The valley's freeway system has been built out steadily rather than in bursts, which gives inspection work here an even rhythm: widening, interchange reconstruction and new segments proceed across a metro that shares standards between its many cities. Light rail extension adds a systems dimension to what is otherwise a highway market.",
      "Heat governs construction practice. Concrete placement timing, curing, asphalt temperature windows and night work are all decided by a thermal environment most inspectors have not worked in, and getting acceptance decisions right under those conditions is a locally learned judgement.",
    ],
    hiringFocus: [
      {
        role: "Materials inspectors & technicians",
        why: "Temperature-sensitive placement and curing make materials judgement more consequential here than in temperate states.",
      },
      {
        role: "Highway & interchange inspectors",
        why: "Continuous freeway construction across the valley keeps roadway inspection demand steady rather than cyclical.",
      },
      {
        role: "Light rail construction inspectors",
        why: "Transit extension brings systems, trackwork and testing scope that highway inspectors do not usually cover.",
      },
      {
        role: "Night work resident engineers",
        why: "Heat pushes much of the year's placement into night shifts, which is a different supervisory job from day work.",
      },
    ],
    licensure: "Arizona uses the Western Alliance for Quality Transportation Construction qualification programme for materials testing, which is shared across a number of western states, so a technician qualified under it in Colorado, Washington or Idaho is in a considerably better position here than one arriving from a state that runs its own scheme. ADOT adds its own project-specific requirements on top, and engineers register through the Board of Technical Registration.",
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    authority: "PennDOT District 6-0 / PA Turnpike Commission",
    marketNote:
      "PennDOT's I-95 reconstruction through Center City and the PA Turnpike's continuous widening program give Philadelphia CEI firms some of the most complex urban bridge-inspection scopes on the East Coast.",
    localPrograms: [
      "I-95 Girard Ave interchange inspection",
      "PA Turnpike widening materials testing",
      "SEPTA Roosevelt Blvd extension oversight",
      "Delaware River bridge inspection",
      "Philadelphia water main utility inspection",
    ],
    agencies: [
      "PennDOT District 6",
      "Pennsylvania Turnpike Commission",
      "Delaware River Port Authority",
      "SEPTA",
      "Philadelphia Streets Department",
    ],
    marketDetail: [
      "This is a bridge inspection market before it is anything else. The region carries a large inventory of ageing structures, including major river crossings under a separate port authority, and both the state district and the turnpike run continuous replacement and preservation programmes rather than occasional projects.",
      "Alongside that, long-running interstate reconstruction through the city has kept large staged highway projects in delivery for years. Work is sequenced around traffic that cannot be diverted far, which puts the same premium on staging judgement that inspectors find in New York.",
    ],
    hiringFocus: [
      {
        role: "NBIS-qualified bridge inspectors",
        why: "A large and old structure inventory runs on a mandated cycle, and team leader qualification cannot be acquired quickly.",
      },
      {
        role: "Structural construction inspectors",
        why: "Continuous bridge replacement means inspection of structural work is a steady speciality rather than an occasional need.",
      },
      {
        role: "Resident engineers for staged highway work",
        why: "Reconstruction under live interstate traffic makes sequencing and acceptance timing a leadership skill.",
      },
      {
        role: "Materials certification technicians",
        why: "Regional certification requirements for asphalt and concrete testing are specific and take time to obtain.",
      },
    ],
    licensure: "Pennsylvania runs materials technician certification through the state's own pavement technology programme for asphalt and concrete, and consultants must hold PennDOT prequalification in the relevant categories before they can be assigned to state work. Bridge inspection team leaders need NBIS qualification. Both the certification and the prequalification are state-specific, so neither transfers in from elsewhere.",
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    abbr: "TX",
    region: "North Texas",
    authority: "TxDOT Dallas District",
    marketNote:
      "TxDOT's I-30 Horseshoe Project and the DART Silver Line have made the Dallas–Fort Worth metroplex one of the busiest CEI markets in Texas, with resident engineers rotating between simultaneous freeway rebuilds.",
    localPrograms: [
      "I-30 Horseshoe resident engineering",
      "DART Silver Line construction inspection",
      "I-35E Southern Gateway materials testing",
      "DFW Airport terminal expansion inspection",
      "North Texas Tollway utility inspection",
    ],
    agencies: [
      "TxDOT Dallas District",
      "TxDOT Fort Worth District",
      "North Texas Tollway Authority",
      "DART",
      "DFW International Airport",
    ],
    marketDetail: [
      "North Texas delivers a large share of its highway programme through design-build and similar arrangements, and that changes the inspection job fundamentally. When the contractor controls design and schedule, the owner's inspection team is verifying against a quality management system rather than directing the work, which requires a different temperament and a different documentary discipline.",
      "The regional toll authority and the airport both run their own substantial capital programmes on top of the state's, so the market supports inspection careers that never touch a conventional state highway contract.",
    ],
    hiringFocus: [
      {
        role: "Design-build owner verification inspectors",
        why: "Alternative delivery makes the inspector an auditor of the contractor's quality system rather than a director of the work.",
      },
      {
        role: "Managed lane & interchange inspectors",
        why: "Complex interchanges rebuilt under traffic are the region's signature project type.",
      },
      {
        role: "Materials technicians",
        why: "Sustained construction volume across state, toll and airport programmes keeps testing staff in demand.",
      },
      {
        role: "Airport construction inspectors",
        why: "Airside work carries badging and operational restrictions that limit who can be deployed.",
      },
    ],
    licensure: "Texas qualifies inspection and materials staff through TxDOT's certification programmes and registers engineering firms as well as individual engineers. On design-build projects the owner's verification role often requires familiarity with quality management auditing in addition to the technical qualifications, which is a distinct skill that firms here ask about directly.",
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    region: "the Southeast",
    authority: "GDOT District 7 / State Road and Tollway Authority",
    marketNote:
      "GDOT's Transform 285/400 interchange rebuild and the ongoing Atlanta BeltLine construction keep the region's CEI firms staffed across both interstate megaprojects and urban trail-corridor inspection.",
    localPrograms: [
      "Transform 285/400 interchange inspection",
      "Atlanta BeltLine trail construction oversight",
      "I-20 West corridor materials testing",
      "Hartsfield-Jackson apron inspection",
      "MARTA rail extension resident engineering",
    ],
    agencies: [
      "Georgia Department of Transportation",
      "State Road & Tollway Authority",
      "MARTA",
      "Atlanta Department of Transportation",
      "Hartsfield-Jackson Atlanta International Airport",
    ],
    marketDetail: [
      "Interchange reconstruction is the defining local project type. The metro's freeway junctions are being rebuilt in place under traffic, which produces long projects with heavy structural content and inspection teams that stay together for years.",
      "The airport programme runs parallel to all of it. One of the world's busiest airports carries a continuous capital programme, and airside inspection there is a separate career track with its own access requirements rather than an extension of highway work.",
    ],
    hiringFocus: [
      {
        role: "Structural & bridge construction inspectors",
        why: "Interchange reconstruction is structure-heavy, so structural inspection experience is what these projects consume.",
      },
      {
        role: "Resident engineers for long-duration projects",
        why: "Multi-year interchange work needs leadership continuity that shorter contracts never require.",
      },
      {
        role: "Airport construction inspectors",
        why: "Continuous airside work at a major hub is its own qualification path and staffing pool.",
      },
      {
        role: "Materials technicians",
        why: "State certification is required before a technician can accept materials, and it takes time to obtain.",
      },
    ],
    licensure: "Georgia qualifies inspection and materials personnel through GDOT's own certification programme, with ACI certification standard for concrete field testing and NBIS qualification for bridge inspection. Consultants work under state prequalification categories, so which categories a firm holds often determines what a candidate can be assigned to regardless of their own qualifications.",
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "Florida",
    abbr: "FL",
    region: "South Florida",
    authority: "FDOT District 6",
    marketNote:
      "FDOT's SR 836/I-395 Signature Bridge and the PortMiami tunnel program have made South Florida a proving ground for marine-environment bridge inspection and hurricane-resilient materials testing.",
    localPrograms: [
      "SR 836 Signature Bridge inspection",
      "PortMiami tunnel resident engineering",
      "I-95 express lane materials testing",
      "Miami-Dade seawall inspection",
      "Brightline corridor construction oversight",
    ],
    agencies: [
      "FDOT District 6",
      "Miami-Dade Department of Transportation & Public Works",
      "Miami-Dade Expressway Authority",
      "Miami-Dade Aviation Department",
      "Florida's Turnpike Enterprise",
    ],
    marketDetail: [
      "South Florida builds over and near water, and that shapes inspection here more than anything else. Causeways, bridges and marine structures put inspectors on and around water routinely, and the corrosive coastal environment makes concrete cover, reinforcement protection and coating acceptance decisions that carry long service-life consequences.",
      "The other feature is the qualification regime. Florida runs an unusually structured technician qualification programme, and FDOT work is closed to inspectors who do not hold the right qualifications under it, which makes this a market with a clear, documented entry requirement rather than an informal one.",
    ],
    hiringFocus: [
      {
        role: "Bridge & marine structure inspectors",
        why: "Causeway and over-water construction is routine here and requires access and safety competence that inland work does not.",
      },
      {
        role: "CTQP-qualified materials technicians",
        why: "State work is gated on holding the correct qualifications, so qualified technicians are the binding constraint on staffing a project.",
      },
      {
        role: "Resident engineers for coastal projects",
        why: "Durability decisions in a corrosive environment carry consequences long after the project closes.",
      },
      {
        role: "Airport construction inspectors",
        why: "A major international airport runs a continuous programme with its own airside access requirements.",
      },
    ],
    licensure: "Florida qualifies construction inspection and materials personnel through the Construction Training Qualification Program, and FDOT projects require the specific CTQP qualifications for the task being inspected. Consultants must also hold FDOT prequalification in the relevant work types. This is one of the more formalised regimes in the country, so an inspector arriving from another state should expect qualification to be a scheduled exercise rather than a formality.",
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    authority: "WSDOT",
    marketNote:
      "WSDOT's SR 520 floating bridge program and Sound Transit's Link light rail expansion have built one of the deepest CEI benches in the Pacific Northwest, with inspectors rotating between marine and tunnel-boring scopes.",
    localPrograms: [
      "Sound Transit Link extension inspection",
      "SR 520 floating bridge oversight",
      "SR 99 tunnel materials testing",
      "Sea-Tac airfield resident engineering",
      "Seattle seawall & utility inspection",
    ],
    agencies: [
      "Washington State Department of Transportation",
      "Sound Transit",
      "Seattle Department of Transportation",
      "Port of Seattle",
      "King County Road Services",
    ],
    marketDetail: [
      "Transit expansion is the largest sustained inspection programme in this region, and it is systems work as much as civil work: guideway, stations, trackwork and testing, delivered in sequence over many years. That has built a local inspection workforce whose experience is not primarily in highways.",
      "The state also carries a court-ordered fish passage programme, replacing culverts that block salmon migration across the highway network. It is an unusual body of work, structurally modest but hydraulically exacting and environmentally sensitive, and it generates inspection demand of a kind no other state produces at this scale.",
    ],
    hiringFocus: [
      {
        role: "Transit & guideway construction inspectors",
        why: "Long-running rail expansion needs systems-literate inspection staff rather than highway generalists.",
      },
      {
        role: "Fish passage & culvert replacement inspectors",
        why: "A court-ordered programme unique to this state creates steady demand for hydraulically and environmentally aware inspection.",
      },
      {
        role: "Structural inspectors for retained cuts and walls",
        why: "Steep terrain puts earth retention into ordinary projects, which raises the structural content of inspection.",
      },
      {
        role: "Materials technicians",
        why: "Regional qualification is required before acceptance testing, and holders are in continuous demand.",
      },
    ],
    licensure: "Washington uses the Western Alliance for Quality Transportation Construction qualification programme for materials testing, shared with several other western states, so a technician qualified in Arizona, Colorado or Idaho transfers here far more easily than one arriving from a state with its own scheme. WSDOT adds project-specific requirements, and environmental permitting conditions on in-water work impose timing constraints inspectors are expected to understand.",
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "Colorado",
    abbr: "CO",
    region: "the Mountain West",
    authority: "CDOT Region 1",
    marketNote:
      "CDOT's Central 70 project, which lowered and covered a stretch of I-70 through Elyria-Swansea, remains the region's signature CEI program, alongside RTD's continued rail-corridor expansion.",
    localPrograms: [
      "I-70 Central cover-park inspection",
      "RTD rail corridor resident engineering",
      "I-25 Central materials testing",
      "DIA apron expansion inspection",
      "C-470 express lane oversight",
    ],
    agencies: [
      "Colorado Department of Transportation",
      "E-470 Public Highway Authority",
      "Regional Transportation District",
      "Denver Department of Transportation & Infrastructure",
      "Denver International Airport",
    ],
    marketDetail: [
      "Denver's signature inspection work has been urban interstate reconstruction, including lowering and covering a stretch of highway through established neighbourhoods, which is a project type that combines deep excavation, structures and intense community constraint in one contract.",
      "Around it sits a broad and steady market: a separate toll authority, a regional transit district, the city's own programme and one of the largest airports in the country by land area, each letting work under its own arrangements. Altitude and a compressed construction season shape scheduling more than most inspectors expect.",
    ],
    hiringFocus: [
      {
        role: "Resident engineers for urban reconstruction",
        why: "Deep, long-duration highway projects in occupied neighbourhoods demand leadership that can manage constraint as well as construction.",
      },
      {
        role: "Structural construction inspectors",
        why: "Covered highway sections and interchange work carry heavy structural content.",
      },
      {
        role: "Materials technicians",
        why: "A short season concentrates placement into part of the year, which concentrates testing demand with it.",
      },
      {
        role: "Airport construction inspectors",
        why: "A very large airport runs a continuous capital programme with airside access requirements of its own.",
      },
    ],
    licensure: "Colorado uses the Western Alliance for Quality Transportation Construction programme for materials qualification alongside CDOT's own requirements, which means technicians moving between Colorado, Washington, Arizona and Idaho carry a usable credential with them. Engineers license through the state board with comity for equivalent licences.",
  },
  {
    slug: "boston-ma",
    city: "Boston",
    state: "Massachusetts",
    abbr: "MA",
    region: "New England",
    authority: "MassDOT Highway Division / MBTA",
    marketNote:
      "MassDOT's Allston Multimodal Project, realigning I-90 along the Charles River, is one of the most complex active CEI programs in New England, running alongside a backlog of MBTA bridge rehabilitation work.",
    localPrograms: [
      "Allston Multimodal I-90 inspection",
      "MBTA bridge rehabilitation oversight",
      "Cape Cod bridges replacement inspection",
      "Logan Airport taxiway materials testing",
      "Boston utility & drainage inspection",
    ],
    agencies: [
      "MassDOT Highway Division",
      "Massachusetts Bay Transportation Authority",
      "Massport",
      "Boston Public Works Department",
      "Massachusetts Department of Conservation & Recreation",
    ],
    marketDetail: [
      "New England's inspection market runs on bridge preservation and accelerated construction. The state built a reputation for replacing structures in very short closures, which puts unusual weight on inspection readiness: when a bridge is being replaced over a weekend, acceptance decisions cannot wait until Monday.",
      "The transit authority's track and infrastructure programme runs alongside it, and both operate on a network old enough that existing condition is frequently different from the record. Inspectors here spend a real share of their time documenting what was actually found.",
    ],
    hiringFocus: [
      {
        role: "NBIS-qualified bridge inspectors",
        why: "An old and dense structure inventory runs a continuous mandated inspection cycle.",
      },
      {
        role: "Accelerated bridge construction inspectors",
        why: "Replacement inside a weekend closure compresses every acceptance decision, which is a different discipline from conventional staging.",
      },
      {
        role: "Transit infrastructure inspectors",
        why: "Track and structure renewal on an old network requires working inside an operating railway.",
      },
      {
        role: "NETTCP-certified materials technicians",
        why: "The regional certification programme is required for acceptance testing and does not transfer in from outside New England.",
      },
    ],
    licensure: "Massachusetts and its neighbours use the New England Transportation Technician Certification Program for materials qualification, which is regional rather than national: a technician certified under it can work across several New England states, but one arriving from outside the region will need to obtain it. MassDOT prequalification applies to consultants, and bridge inspection team leaders require NBIS qualification.",
  },
  {
    slug: "minneapolis-mn",
    city: "Minneapolis",
    state: "Minnesota",
    abbr: "MN",
    region: "the Upper Midwest",
    authority: "MnDOT Metro District",
    marketNote:
      "MnDOT's continued I-94 corridor reconstruction and the Metro Transit Blue Line extension keep Twin Cities CEI teams staffed year-round, working within one of the tightest freeze-thaw materials-testing windows in the country.",
    localPrograms: [
      "I-94 corridor resident engineering",
      "METRO Blue Line extension inspection",
      "MSP airport pavement materials testing",
      "Mississippi River bridge inspection",
      "St. Paul utility & sewer inspection",
    ],
    agencies: [
      "MnDOT Metro District",
      "Hennepin County Transportation",
      "Metro Transit",
      "Metropolitan Airports Commission",
      "Minneapolis Public Works",
    ],
    marketDetail: [
      "Bridge inspection carries particular institutional weight in Minnesota, and the state's inspection and load rating practice reflects that history directly. The programme is well resourced and closely documented, which makes this a good market in which to build structural inspection credentials.",
      "The construction season is the other governing fact. A short window concentrates placement, testing and inspection into part of the year, so staffing here is seasonal in a way southern markets are not, and firms plan around inspectors who can be fully deployed in summer and redeployed to office and rating work in winter.",
    ],
    hiringFocus: [
      {
        role: "NBIS-qualified bridge inspectors",
        why: "State inspection and load rating practice is demanding and generates continuous structural work.",
      },
      {
        role: "Load rating engineers",
        why: "Rating is treated as a standing engineering function here rather than an occasional exercise.",
      },
      {
        role: "Materials technicians",
        why: "A compressed season concentrates acceptance testing into a few months, which sharpens demand for certified staff.",
      },
      {
        role: "Transit construction inspectors",
        why: "Light rail extension adds systems and trackwork scope beyond conventional highway inspection.",
      },
    ],
    licensure: "Minnesota qualifies inspection and materials personnel through MnDOT's technical certification programme, which is state-run and does not transfer from elsewhere, and bridge inspection team leaders require NBIS qualification. Engineers license through the state board with comity for equivalent licences. Winter work is genuinely different here, and firms ask how a candidate expects to be deployed outside the construction season.",
  },
  {
    slug: "detroit-mi",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    region: "the Great Lakes",
    authority: "MDOT Metro Region",
    marketNote:
      "The Gordie Howe International Bridge, now nearing completion as one of the largest bridge projects in North America, anchors a Detroit CEI market that also covers MDOT's ongoing I-375 boulevard conversion.",
    localPrograms: [
      "Gordie Howe International Bridge inspection",
      "I-375 boulevard conversion oversight",
      "I-94 modernization materials testing",
      "Detroit Metro airfield resident engineering",
      "Detroit water main utility inspection",
    ],
    agencies: [
      "MDOT Metro Region",
      "Wayne County Department of Public Services",
      "Road Commission for Oakland County",
      "Michigan Department of Transportation Bridge Operations",
      "Detroit Department of Public Works",
    ],
    marketDetail: [
      "Southeast Michigan is rebuilding its interstate system through the urban core, and a new international crossing to Canada has run alongside it. Between them they have kept large, structure-heavy inspection assignments available in one metro for years, which is not the normal condition of a mature highway market.",
      "Freeze and thaw is the technical constant. Pavement and structure deterioration here is driven by cycling and de-icing chemistry, so inspection judgement about concrete cover, joint detailing and drainage has consequences that show up within a few winters rather than a few decades.",
    ],
    hiringFocus: [
      {
        role: "Structural construction inspectors",
        why: "Interstate modernisation and major crossing work are structure-dominated, which is what these projects consume.",
      },
      {
        role: "NBIS-qualified bridge inspectors",
        why: "A large, weather-stressed structure inventory runs a continuous mandated inspection cycle.",
      },
      {
        role: "Materials technicians",
        why: "State certification is required for acceptance testing, and durability in this climate makes it consequential.",
      },
      {
        role: "Resident engineers for corridor projects",
        why: "Long urban reconstruction contracts need leadership continuity across several seasons.",
      },
    ],
    licensure: "Michigan qualifies inspection and materials personnel through MDOT's certification arrangements, with industry-run concrete and aggregate technician programmes recognised alongside them, and NBIS qualification for bridge inspection team leaders. Engineers license through the Department of Licensing and Regulatory Affairs with comity for equivalent licences.",
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    abbr: "NC",
    region: "the Carolinas",
    authority: "NCDOT Division 10",
    marketNote:
      "NCDOT's I-77 Express Lanes extension and CATS's Silver Line light rail program have made Charlotte one of the fastest-growing CEI markets in the Carolinas.",
    localPrograms: [
      "I-77 Express Lanes resident engineering",
      "CATS Silver Line construction inspection",
      "I-485 outer loop materials testing",
      "Charlotte Douglas taxiway inspection",
      "Mecklenburg County bridge inspection",
    ],
    agencies: [
      "NCDOT Division 10",
      "North Carolina Turnpike Authority",
      "Charlotte Area Transit System",
      "Charlotte Douglas International Airport",
      "Charlotte Department of Transportation",
    ],
    marketDetail: [
      "This is a growth market, and the inspection work reflects it: widening, new interchanges, express lanes and the roadway infrastructure that goes with development at the edge of a metro that keeps expanding. Projects tend to be numerous rather than singular, which suits inspectors who can move between assignments.",
      "Alongside the state programme, the transit system's rail extensions and a large airport capital programme give the region two other owners letting substantial work, each with its own access and documentation expectations.",
    ],
    hiringFocus: [
      {
        role: "Roadway & widening inspectors",
        why: "Growth-driven capacity work is the region's steady project type rather than an occasional programme.",
      },
      {
        role: "Materials technicians",
        why: "State certification is required before acceptance testing and is a gating requirement on staffing.",
      },
      {
        role: "Transit construction inspectors",
        why: "Rail extension brings systems and trackwork scope that highway experience does not cover.",
      },
      {
        role: "Erosion & sediment control inspectors",
        why: "Basin water quality rules make sediment control a genuine compliance obligation on every site here.",
      },
    ],
    licensure: "North Carolina qualifies inspection and materials personnel through NCDOT's own certification programmes, which are state-specific, and requires engineering firms to hold a certificate of authorisation in addition to individual PE licensure. Erosion and sediment control certification is a practical requirement on most sites given the state's water quality rules.",
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    abbr: "TN",
    region: "the Tennessee Valley",
    authority: "TDOT Region 3",
    marketNote:
      "TDOT's I-24 SMART corridor upgrades and a fast-expanding WeGo transit build-out have Nashville CEI firms staffing resident-engineering assignments across a booming Music City construction pipeline.",
    localPrograms: [
      "I-24 SMART corridor inspection",
      "I-440 resurfacing resident engineering",
      "WeGo transit corridor oversight",
      "Nashville International taxiway materials testing",
      "Cumberland River bridge inspection",
    ],
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    abbr: "OR",
    region: "the Pacific Northwest",
    authority: "ODOT Region 1",
    marketNote:
      "ODOT's I-5 Rose Quarter Improvement Project and the binational Interstate Bridge Replacement program give Portland CEI teams two of the most closely watched megaprojects in the Pacific Northwest.",
    localPrograms: [
      "I-5 Rose Quarter resident engineering",
      "Interstate Bridge Replacement inspection",
      "TriMet rail extension oversight",
      "PDX airport terminal materials testing",
      "Portland seismic culvert inspection",
    ],
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    abbr: "NV",
    region: "the Southwest",
    authority: "NDOT District 1",
    marketNote:
      "NDOT's Project Neon interchange work and the Brightline West high-speed rail construction staging out of Las Vegas have created a surge in resident-engineering demand across the valley.",
    localPrograms: [
      "Project Neon interchange inspection",
      "Brightline West resident engineering",
      "I-15 express lane materials testing",
      "Harry Reid apron inspection",
      "Las Vegas Convention Center loop oversight",
    ],
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    abbr: "OH",
    region: "the Midwest",
    authority: "ODOT District 6",
    marketNote:
      "ODOT's I-70/71 Columbus Crossroads rebuild, combined with the infrastructure feeding Intel's new chip campus in nearby Licking County, has central Ohio's CEI firms stretched across highway and heavy-industrial inspection scopes at once.",
    localPrograms: [
      "I-70/71 Crossroads resident engineering",
      "Intel campus site utility inspection",
      "Rickenbacker logistics corridor materials testing",
      "John Glenn airport apron inspection",
      "Columbus bridge & culvert inspection",
    ],
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    abbr: "UT",
    region: "the Mountain West",
    authority: "UDOT Region 2",
    marketNote:
      "UDOT's ongoing I-15 reconstruction through the Salt Lake Valley and the Utah Transit Authority's TRAX expansion keep Wasatch Front CEI teams busy across simultaneous freeway and light-rail programs.",
    localPrograms: [
      "I-15 corridor resident engineering",
      "TRAX rail extension inspection",
      "Salt Lake City International materials testing",
      "Mountain View Corridor bridge inspection",
      "UTA FrontRunner utility inspection",
    ],
  },
  {
    slug: "kansas-city-mo",
    city: "Kansas City",
    state: "Missouri",
    abbr: "MO",
    region: "the Heartland",
    authority: "MoDOT Kansas City District",
    marketNote:
      "MoDOT's replacement of the Buck O'Neil Bridge over the Missouri River and the broader I-70 Improvement Program have made Kansas City a hub for two-state DOT resident-engineering work.",
    localPrograms: [
      "Buck O'Neil Bridge resident engineering",
      "I-70 Improvement Program inspection",
      "KCI Airport apron materials testing",
      "Missouri River bridge inspection",
      "Kansas City streetcar extension oversight",
    ],
  },
  {
    slug: "indianapolis-in",
    city: "Indianapolis",
    state: "Indiana",
    abbr: "IN",
    region: "the Midwest",
    authority: "INDOT Greenfield District",
    marketNote:
      "INDOT's I-65/I-70 North Split reconstruction, one of the largest interchange rebuilds in state history, anchors an Indianapolis CEI market also staffing Eli Lilly's expanding LEAP innovation district.",
    localPrograms: [
      "I-65/I-70 North Split inspection",
      "LEAP innovation district utility inspection",
      "I-69 Finish Line materials testing",
      "Indianapolis International apron oversight",
      "White River bridge inspection",
    ],
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "Wisconsin",
    abbr: "WI",
    region: "the Great Lakes",
    authority: "WisDOT Southeast Region",
    marketNote:
      "WisDOT's I-94 East-West Corridor reconstruction through downtown Milwaukee is one of the largest active freeway rebuilds in the Midwest, running alongside continued Zoo Interchange-area ramp work.",
    localPrograms: [
      "I-94 East-West Corridor inspection",
      "Zoo Interchange ramp resident engineering",
      "Hoan Bridge materials testing",
      "Mitchell International taxiway inspection",
      "Milwaukee harbor utility inspection",
    ],
  },
  {
    slug: "richmond-va",
    city: "Richmond",
    state: "Virginia",
    abbr: "VA",
    region: "the Mid-Atlantic",
    authority: "VDOT Richmond District",
    marketNote:
      "VDOT's I-95/I-64 downtown interchange work and continued I-64 widening toward Hampton Roads keep Richmond CEI firms staffed on some of Virginia's highest-volume interstate corridors.",
    localPrograms: [
      "I-95/I-64 interchange resident engineering",
      "I-64 widening materials testing",
      "James River bridge inspection",
      "Richmond International apron inspection",
      "GRTC Pulse corridor utility inspection",
    ],
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "Maryland",
    abbr: "MD",
    region: "the Mid-Atlantic",
    authority: "MDTA / MDOT SHA District 4",
    marketNote:
      "The rebuild of the Francis Scott Key Bridge following its 2024 collapse has made Baltimore the site of one of the most closely watched bridge-reconstruction CEI programs in U.S. history.",
    localPrograms: [
      "Key Bridge reconstruction resident engineering",
      "I-695 Beltway materials testing",
      "Port of Baltimore channel inspection",
      "BWI airfield apron inspection",
      "Baltimore harbor tunnel utility inspection",
    ],
  },
  {
    slug: "new-orleans-la",
    city: "New Orleans",
    state: "Louisiana",
    abbr: "LA",
    region: "the Gulf Coast",
    authority: "LADOTD District 02",
    marketNote:
      "LADOTD's continued levee and floodwall upgrades alongside the Crescent City Connection's ongoing rehabilitation give New Orleans CEI teams a distinct mix of flood-protection and bridge-inspection scopes not found elsewhere on the Gulf Coast.",
    localPrograms: [
      "Crescent City Connection bridge inspection",
      "Hurricane levee & floodwall inspection",
      "I-10 Twin Span materials testing",
      "Louis Armstrong apron resident engineering",
      "Port of New Orleans utility inspection",
    ],
  },
  {
    slug: "louisville-ky",
    city: "Louisville",
    state: "Kentucky",
    abbr: "KY",
    region: "the Ohio Valley",
    authority: "KYTC District 5",
    marketNote:
      "The Kennedy Interchange, Louisville's notorious 'Spaghetti Junction' where I-64, I-65, and I-71 converge, remains a focal point for KYTC resident engineering, alongside continued UPS Worldport expansion inspection.",
    localPrograms: [
      "Kennedy Interchange resident engineering",
      "UPS Worldport site utility inspection",
      "Ohio River bridges materials testing",
      "Louisville Muhammad Ali apron inspection",
      "I-65 Ohio River corridor inspection",
    ],
  },
  {
    slug: "oklahoma-city-ok",
    city: "Oklahoma City",
    state: "Oklahoma",
    abbr: "OK",
    region: "the South Central US",
    authority: "ODOT Division 4",
    marketNote:
      "ODOT's I-35/I-40 Crosstown reconfiguration and continued I-44 widening through the metro have made Oklahoma City a steady CEI market anchored by DOT resident-engineering assignments rather than a single signature megaproject.",
    localPrograms: [
      "I-35/I-40 Crosstown resident engineering",
      "I-44 widening materials testing",
      "Will Rogers apron inspection",
      "North Canadian River bridge inspection",
      "OKC streetcar corridor utility inspection",
    ],
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "South Carolina",
    abbr: "SC",
    region: "the Lowcountry",
    authority: "SCDOT District 6",
    marketNote:
      "SCDOT's I-526 Lowcountry Corridor extension and the continued deepening of Charleston Harbor, now the deepest port on the East Coast, have made marine and highway CEI work equally in demand here.",
    localPrograms: [
      "I-526 Lowcountry Corridor inspection",
      "Charleston Harbor deepening materials testing",
      "Ravenel Bridge inspection",
      "Boeing campus utility inspection",
      "Charleston International apron resident engineering",
    ],
  },
  {
    slug: "newark-nj",
    city: "Newark",
    state: "New Jersey",
    abbr: "NJ",
    region: "the Northeast",
    authority: "NJDOT / Port Authority of NY & NJ",
    marketNote:
      "The Newark Liberty International Airport terminal overhaul and continued New Jersey Turnpike widening through the Newark Bay corridor keep this market's CEI demand tied tightly to Port Authority capital programs.",
    localPrograms: [
      "Newark Liberty terminal apron inspection",
      "NJ Turnpike widening materials testing",
      "Newark Bay bridge inspection",
      "Port Newark-Elizabeth utility inspection",
      "NJ Transit rail corridor oversight",
    ],
  },
  {
    slug: "san-francisco-ca",
    city: "San Francisco",
    state: "California",
    abbr: "CA",
    region: "the Bay Area",
    authority: "Caltrans District 4 / SFMTA",
    marketNote:
      "The Central Subway extension into Chinatown and ongoing seismic retrofit work on Bay Area bridges keep San Francisco CEI teams working some of the most technically demanding tunnel and structural-inspection scopes in the country.",
    localPrograms: [
      "Central Subway extension inspection",
      "Bay Bridge seismic retrofit oversight",
      "BART extension resident engineering",
      "SFO runway safety area materials testing",
      "San Francisco seawall inspection",
    ],
  },
  {
    slug: "san-diego-ca",
    city: "San Diego",
    state: "California",
    abbr: "CA",
    region: "Southern California",
    authority: "Caltrans District 11 / SANDAG",
    marketNote:
      "SANDAG's Mid-Coast Trolley extension and Caltrans's I-5 North Coast Corridor widening give San Diego CEI firms a steady pipeline of rail and coastal-highway inspection work along Southern California's border region.",
    localPrograms: [
      "Mid-Coast Trolley extension inspection",
      "I-5 North Coast Corridor materials testing",
      "San Diego International apron inspection",
      "Coronado Bridge inspection",
      "San Diego border infrastructure utility inspection",
    ],
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "Texas",
    abbr: "TX",
    region: "South Texas",
    authority: "TxDOT San Antonio District",
    marketNote:
      "TxDOT's I-35 NEX Central reconstruction through downtown San Antonio anchors a CEI market shaped by both military-installation infrastructure and a steadily expanding VIA rapid-transit network.",
    localPrograms: [
      "I-35 NEX Central resident engineering",
      "VIA rapid transit corridor inspection",
      "Joint Base San Antonio utility inspection",
      "San Antonio International apron materials testing",
      "US 281 corridor bridge inspection",
    ],
  },
  {
    slug: "austin-tx",
    city: "Austin",
    state: "Texas",
    abbr: "TX",
    region: "Central Texas",
    authority: "TxDOT Austin District",
    marketNote:
      "TxDOT's I-35 Capital Express Central project, which will cap and widen the freeway through downtown Austin, is among the largest active CEI programs in Central Texas, alongside the infrastructure supporting Tesla's and Samsung's expansions.",
    localPrograms: [
      "I-35 Capital Express Central inspection",
      "Samsung fab site utility inspection",
      "Austin-Bergstrom apron materials testing",
      "MoPac corridor resident engineering",
      "Colorado River bridge inspection",
    ],
  },
  {
    slug: "jacksonville-fl",
    city: "Jacksonville",
    state: "Florida",
    abbr: "FL",
    region: "North Florida",
    authority: "FDOT District 2",
    marketNote:
      "FDOT's I-95/I-295 interchange overhaul and the ongoing deepening of the St. Johns River shipping channel give Jacksonville CEI firms a mix of interstate and JAXPORT marine-infrastructure inspection work.",
    localPrograms: [
      "I-95/I-295 interchange resident engineering",
      "JAXPORT channel deepening inspection",
      "St. Johns River bridge inspection",
      "Jacksonville International apron materials testing",
      "Jacksonville utility & drainage inspection",
    ],
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    abbr: "FL",
    region: "Central Florida",
    authority: "FDOT District 5",
    marketNote:
      "FDOT's I-4 Ultimate corridor overhaul reshaped Central Florida's interstate spine, and its momentum continues to drive resident-engineering demand alongside the theme-park district's constant expansion and utility work.",
    localPrograms: [
      "I-4 Ultimate corridor resident engineering",
      "SunRail extension inspection",
      "Orlando International (MCO) apron materials testing",
      "International Drive utility inspection",
      "Central Florida GreeneWay bridge inspection",
    ],
  },
  {
    slug: "pittsburgh-pa",
    city: "Pittsburgh",
    state: "Pennsylvania",
    abbr: "PA",
    region: "Western Pennsylvania",
    authority: "PennDOT District 11-0",
    marketNote:
      "The emergency replacement of the Fern Hollow Bridge after its 2022 collapse put a national spotlight on Pittsburgh's bridge-inspection market, which remains one of the most bridge-dense CEI programs in the country given the region's topography.",
    localPrograms: [
      "Fern Hollow Bridge replacement inspection",
      "I-579 Cap urban reconnection oversight",
      "Pittsburgh bridge inventory inspection",
      "Pittsburgh International apron materials testing",
      "Monongahela River bridge inspection",
    ],
  },
  {
    slug: "cincinnati-oh",
    city: "Cincinnati",
    state: "Ohio",
    abbr: "OH",
    region: "the Ohio Valley",
    authority: "ODOT District 8 / OKI Regional Council",
    marketNote:
      "The $3.6 billion Brent Spence Bridge Corridor project, twinning the interstate bridge that carries I-71/I-75 across the Ohio River, is the defining CEI program in Cincinnati and one of the largest in the Ohio Valley.",
    localPrograms: [
      "Brent Spence Bridge Corridor inspection",
      "I-75 thru-the-valley materials testing",
      "CVG airport apron resident engineering",
      "Ohio River bridge inspection",
      "Cincinnati utility & sewer inspection",
    ],
  },
  {
    slug: "cleveland-oh",
    city: "Cleveland",
    state: "Ohio",
    abbr: "OH",
    region: "Northeast Ohio",
    authority: "ODOT District 12",
    marketNote:
      "ODOT's Opportunity Corridor boulevard connecting I-490 to University Circle and continued Innerbelt Bridge-area rehabilitation keep Cleveland's CEI firms staffed on both new-alignment and legacy-structure inspection work.",
    localPrograms: [
      "Opportunity Corridor resident engineering",
      "Innerbelt Bridge rehabilitation inspection",
      "Cleveland Hopkins apron materials testing",
      "Cuyahoga River bridge inspection",
      "Cleveland water main utility inspection",
    ],
  },
  {
    slug: "st-louis-mo",
    city: "St. Louis",
    state: "Missouri",
    abbr: "MO",
    region: "the Gateway region",
    authority: "MoDOT St. Louis District",
    marketNote:
      "MoDOT's I-270 North corridor overhaul and the bistate coordination required for Mississippi River bridge maintenance make St. Louis a market where resident engineers routinely work across the Missouri-Illinois line.",
    localPrograms: [
      "I-270 North corridor resident engineering",
      "Mississippi River bridge inspection",
      "I-64 corridor materials testing",
      "St. Louis Lambert apron inspection",
      "MetroLink extension utility inspection",
    ],
  },
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "North Carolina",
    abbr: "NC",
    region: "the Research Triangle",
    authority: "NCDOT Division 5",
    marketNote:
      "NCDOT's Complete 540 toll road, closing the outer loop around Raleigh, is the region's largest active CEI program and dovetails with steady Research Triangle Park life-science-campus utility work.",
    localPrograms: [
      "Complete 540 toll road inspection",
      "RTP campus utility inspection",
      "I-40 corridor materials testing",
      "RDU airport apron resident engineering",
      "Raleigh bridge & culvert inspection",
    ],
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "District of Columbia",
    abbr: "DC",
    region: "the National Capital region",
    authority: "DDOT / VDOT / MDOT SHA",
    marketNote:
      "The 11th Street Bridge Park redevelopment and continued I-395 Express Lanes extension keep the National Capital region's CEI teams moving between DDOT, VDOT, and Maryland's Purple Line light-rail resident-engineering assignments.",
    localPrograms: [
      "11th Street Bridge Park inspection",
      "I-395 Express Lanes resident engineering",
      "Purple Line light rail inspection",
      "Reagan National apron materials testing",
      "DC water & sewer utility inspection",
    ],
  },
  {
    slug: "hartford-ct",
    city: "Hartford",
    state: "Connecticut",
    abbr: "CT",
    region: "New England",
    authority: "ConnDOT District 1",
    marketNote:
      "ConnDOT's I-84 Hartford viaduct replacement, one of the largest highway reconstructions in state history, anchors a Hartford CEI market otherwise built around steady insurance-corridor infrastructure maintenance.",
    localPrograms: [
      "I-84 viaduct replacement inspection",
      "Charter Oak Bridge materials testing",
      "Bradley International apron resident engineering",
      "Connecticut River bridge inspection",
      "Hartford utility & drainage inspection",
    ],
  },
  {
    slug: "albuquerque-nm",
    city: "Albuquerque",
    state: "New Mexico",
    abbr: "NM",
    region: "the Southwest",
    authority: "NMDOT District 3",
    marketNote:
      "NMDOT's continued Paseo del Norte and I-25 corridor upgrades, alongside infrastructure work tied to Sandia National Laboratories and Kirtland Air Force Base, define Albuquerque's federal-facility-heavy CEI market.",
    localPrograms: [
      "I-25/Paseo del Norte resident engineering",
      "Kirtland AFB utility inspection",
      "Rio Grande bridge inspection",
      "Albuquerque Sunport apron materials testing",
      "Big I interchange bridge inspection",
    ],
  },
  {
    slug: "birmingham-al",
    city: "Birmingham",
    state: "Alabama",
    abbr: "AL",
    region: "the Deep South",
    authority: "ALDOT Region 3",
    marketNote:
      "ALDOT's continued I-59/I-20 downtown corridor maintenance and steady UAB Medicine campus expansion give Birmingham CEI firms a mix of interstate and institutional-utility inspection work.",
    localPrograms: [
      "I-59/I-20 downtown corridor inspection",
      "UAB campus utility inspection",
      "Birmingham-Shuttlesworth apron materials testing",
      "Cahaba River bridge inspection",
      "Birmingham resurfacing resident engineering",
    ],
  },
  {
    slug: "memphis-tn",
    city: "Memphis",
    state: "Tennessee",
    abbr: "TN",
    region: "the Mid-South",
    authority: "TDOT Region 4",
    marketNote:
      "TDOT's I-55 Mississippi River bridge rehabilitation and the massive site infrastructure for the Memphis Regional Megasite give this market both legacy-bridge and greenfield-industrial CEI work.",
    localPrograms: [
      "I-55 Mississippi River bridge inspection",
      "Memphis Regional Megasite utility inspection",
      "I-40/I-240 interchange materials testing",
      "Memphis International apron resident engineering",
      "FedEx World Hub site inspection",
    ],
  },
  {
    slug: "omaha-ne",
    city: "Omaha",
    state: "Nebraska",
    abbr: "NE",
    region: "the Great Plains",
    authority: "NDOT District 1 (Nebraska)",
    marketNote:
      "NDOT's continued I-80 widening through the metro and the ongoing Missouri River bridge program give Omaha CEI teams a steady, if less headline-grabbing, freeway-corridor workload across the Nebraska-Iowa line.",
    localPrograms: [
      "I-80 corridor widening inspection",
      "Missouri River bridge resident engineering",
      "Eppley Airfield apron materials testing",
      "Omaha streetcar corridor utility inspection",
      "Platte River bridge inspection",
    ],
  },
  {
    slug: "boise-id",
    city: "Boise",
    state: "Idaho",
    abbr: "ID",
    region: "the Intermountain West",
    authority: "ITD District 3",
    marketNote:
      "ITD's I-84 widening and the site infrastructure supporting Micron's multibillion-dollar chip-fab expansion have made Boise one of the fastest-growing CEI markets in the Intermountain West.",
    localPrograms: [
      "I-84 corridor widening inspection",
      "Micron fab site utility inspection",
      "Boise Airport apron materials testing",
      "Boise River bridge inspection",
      "Treasure Valley resident engineering",
    ],
  },
  {
    slug: "providence-ri",
    city: "Providence",
    state: "Rhode Island",
    abbr: "RI",
    region: "New England",
    authority: "RIDOT",
    marketNote:
      "The emergency closure and replacement of the westbound Washington Bridge on I-195 turned Providence into the site of one of the most closely watched bridge-inspection controversies in recent U.S. history, reshaping RIDOT's CEI priorities statewide.",
    localPrograms: [
      "Washington Bridge replacement inspection",
      "I-195 relocation corridor materials testing",
      "T.F. Green apron resident engineering",
      "Providence River bridge inspection",
      "RIDOT statewide bridge inventory inspection",
    ],
  },
  {
    slug: "buffalo-ny",
    city: "Buffalo",
    state: "New York",
    abbr: "NY",
    region: "Western New York",
    authority: "NYSDOT Region 5",
    marketNote:
      "NYSDOT's Kensington Expressway restoration, capping a stretch of the highway to reconnect the historic Humboldt Parkway, and the removal of the Route 5 Skyway are reshaping Buffalo's CEI market around urban-highway reconstruction.",
    localPrograms: [
      "Kensington Expressway restoration inspection",
      "Route 5 Skyway removal oversight",
      "Buffalo Niagara apron materials testing",
      "Peace Bridge inspection",
      "Buffalo utility & sewer inspection",
    ],
  },
];

export function getCeiCity(slug: string): CeiCity | undefined {
  return CEI_CITIES.find((c) => c.slug === slug);
}

// ── Shared content reused on every CEI city page ──────────────────────────────

export const CEI_EXPERTISE = [
  "Construction Engineering & Inspection (CEI)",
  "Materials Testing & QA/QC",
  "Bridge & Roadway Inspection",
  "Construction Contract Administration",
  "Resident Engineering & Field Oversight",
  "Utility & Underground Inspection",
  "Environmental & Erosion Control Compliance",
  "State DOT Construction Standards Compliance",
];

export const CEI_SKILLS = [
  "ACI Concrete Field Testing Certification",
  "NICET Certification (Construction Materials Testing)",
  "State DOT / NETTCP CEI Certifications",
  "Nuclear Density Gauge Certification",
  "AASHTO / State DOT Inspection Manuals",
  "Bridge Inspection (NBIS) Certification",
  "AWS Certified Welding Inspector (CWI)",
  "ICC Certified Building Inspector",
  "OSHA 30-Hour",
  "Erosion & Sediment Control Certification (CESSWI)",
  "Bluebeam Revu (as-built markups)",
  "Procore / e-Builder (construction management)",
  "Primavera P6 / MS Project (schedule review)",
  "Professional Engineer (PE) license",
  "Resident Engineer certification",
  "Traffic Control Technician (TCT) certification",
  "Materials testing (soils, asphalt, concrete)",
  "Punch-list & closeout documentation",
  "Construction contract administration (DOT specs)",
  "QA/QC documentation & reporting systems",
];

export const CEI_ROLES = [
  "CEI Inspector",
  "Senior Construction Inspector",
  "Resident Engineer",
  "Materials Testing Technician / QA Manager",
  "Construction Contract Administrator",
  "Bridge Inspector",
  "CEI Project Manager",
  "Field Office Engineer",
  "Utility Inspector",
  "Director of Construction Engineering & Inspection",
];

export const CEI_SALARIES = [
  { role: "Inspector Aide / Field Technician", range: "$42,000 – $58,000" },
  { role: "CEI Inspector (Entry)", range: "$55,000 – $75,000" },
  { role: "Materials Technician (ACI / NICET)", range: "$60,000 – $85,000" },
  { role: "Bridge Inspector (NBIS Team Leader)", range: "$80,000 – $115,000" },
  { role: "Senior Inspector / Resident Engineer", range: "$85,000 – $120,000" },
  { role: "CEI Office Engineer / Contract Administrator", range: "$95,000 – $130,000" },
  { role: "CEI Project Manager", range: "$115,000 – $155,000+" },
  { role: "Director of CEI Services", range: "$150,000 – $210,000+" },
];

export const CEI_WHY = [
  { title: "National Talent Pipeline", body: "Access to a vast database of 50,000+ pre-vetted engineering professionals." },
  { title: "Certification-Verified Talent", body: "NICET, ACI, DOT, and bridge-inspection credentials confirmed before a candidate reaches you." },
  { title: "Passive Candidate Acquisition", body: "Our recruiters reach high-performers who are not actively on job boards." },
  { title: "Scalable Staffing Solutions", body: "From a single inspector to an entire CEI field team for a multi-year DOT program." },
  { title: "Codes & Standards Fluency", body: "Fluency in AASHTO, NBIS bridge-inspection standards, and state DOT construction specifications." },
];
