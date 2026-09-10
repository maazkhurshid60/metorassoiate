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
  licensure?: string; // city/state-specific water/wastewater-heavy project types
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
    agencies: [
      "NYC Department of Environmental Protection",
      "NYC Department of Design & Construction",
      "Nassau County Department of Public Works",
      "Westchester County Environmental Facilities",
      "Suffolk County Water Authority",
      "NY State Environmental Facilities Corporation",
    ],
    marketDetail: [
      "New York runs one of the few large unfiltered surface supplies in the country. The Catskill and Delaware watersheds are protected rather than filtered, under a determination the city has to keep earning, so a good deal of the water-side engineering here is watershed and conveyance work rather than treatment plant work. The Delaware Aqueduct bypass is the clearest example: a supply repair carried out at tunnel scale, which is not a project type most metros generate at all.",
      "The wastewater side is a combined system with fourteen in-city treatment plants and a long-term control plan for overflows, which keeps hydraulic modelling, storage tunnels and green infrastructure running as a continuous programme. Plant work is dominated by upgrade and resiliency rather than new build, and since Sandy a share of it is specifically about keeping process trains running through a flood.",
    ],
    hiringFocus: [
      {
        role: "Collection system & CSO modellers",
        why: "Long-term control plan work is argued in models before it is built, so engineers who can defend an InfoWorks or SWMM result to a regulator are the constraint rather than designers.",
      },
      {
        role: "Treatment process engineers for plant upgrades",
        why: "Fourteen plants in continuous rehabilitation means process work is almost always retrofit into a live train, which is a different skill from designing a plant on a clear site.",
      },
      {
        role: "Tunnel & deep structure engineers",
        why: "Both the supply repairs and the overflow storage are tunnel projects, and the pool of engineers who have worked at that scale is small nationally.",
      },
      {
        role: "Coastal resiliency & plant hardening engineers",
        why: "Waterfront treatment plants have to stay in service through a surge event, which pulls in engineers comfortable with both process and flood protection.",
      },
    ],
    licensure: "New York licenses engineers through the State Education Department's Office of the Professions, and most out-of-state PEs transfer on an NCEES record rather than by re-examination. Treatment operators are certified separately, by the Department of Health on the water side and the Department of Environmental Conservation on the wastewater side, which matters when a role spans design and operations support. As with the civil market here, agency prequalification with DEP and DDC often carries more weight with a hiring manager than the licence itself.",
  },
  {
    slug: "los-angeles-ca",
    city: "Los Angeles",
    state: "California",
    abbr: "CA",
    region: "the Pacific West",
    authority: "LA Sanitation & Environment (LASAN)",
    marketNote:
      "Following the 2021 Hyperion plant failure, Los Angeles committed to Operation NEXT, full water recycling of the Hyperion plant's effluent by the mid-2030s, driving one of the largest potable-reuse engineering programs in the nation.",
    localPrograms: [
      "Operation NEXT potable reuse & advanced treatment",
      "Hyperion Water Reclamation Plant modernization",
      "Groundwater replenishment & spreading grounds expansion",
      "Stormwater capture & LA River greenway projects",
      "Lead service line & aging pipe replacement",
    ],
    agencies: [
      "LA Department of Water & Power",
      "LA Sanitation & Environment",
      "Los Angeles County Sanitation Districts",
      "Metropolitan Water District of Southern California",
      "West Basin Municipal Water District",
    ],
    marketDetail: [
      "Reuse is the defining engineering problem in this basin. Imported supply from the Colorado River and the State Water Project is the part of the portfolio nobody can rely on, so the response has been to treat wastewater as a supply: Operation NEXT at Hyperion and Pure Water Southern California between Metropolitan and the county districts are both, in engineering terms, very large advanced treatment programmes attached to existing plants.",
      "That pushes the skill profile toward membranes and advanced oxidation rather than conventional secondary treatment, and toward the regulatory work that goes with them. Potable reuse in California is permitted against detailed state criteria, so the engineer who can carry a treatment train through Division of Drinking Water review is doing something distinct from process design.",
    ],
    hiringFocus: [
      {
        role: "Potable reuse & advanced treatment engineers",
        why: "Every major supply programme in the basin is a reuse programme, and the design experience it needs was rare before these projects created demand for it.",
      },
      {
        role: "Membrane and AWT process specialists",
        why: "Microfiltration, reverse osmosis and UV advanced oxidation are the core of these trains, and the operating knowledge behind them is still concentrated in a handful of careers.",
      },
      {
        role: "Large-diameter conveyance engineers",
        why: "Purified water has to be moved from the plant to where it recharges or is used, which makes pipeline design a programme-critical path rather than a supporting discipline.",
      },
      {
        role: "Regulatory & permitting engineers",
        why: "Reuse approval is a documentation exercise as much as a design one, and firms are short of engineers who have actually taken a project through it.",
      },
    ],
    licensure: "California does not grant civil PE licensure by simple comity. The Board for Professional Engineers, Land Surveyors and Geologists requires a state application, and civil applicants sit California-specific examinations in seismic principles and engineering surveying that no other state uses, so an out-of-state PE should expect the transfer to take real time. Treatment and distribution operators are certified by the State Water Resources Control Board on a separate grade structure.",
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
    agencies: [
      "Metropolitan Water Reclamation District of Greater Chicago",
      "Chicago Department of Water Management",
      "DuPage County Public Works",
      "Lake County Public Works",
      "Illinois Environmental Protection Agency",
    ],
    marketDetail: [
      "The Tunnel and Reservoir Plan shapes the wastewater market here more than any treatment plant does. A hundred-odd miles of deep tunnel feeding reservoirs at McCook and Thornton is a system whose engineering questions are hydraulic and geotechnical rather than biological, and the reclamation district's plants at the end of it operate at a scale few others do.",
      "On the drinking water side the defining programme is lead service line replacement. Illinois requires full replacement on a statutory schedule and Chicago holds the largest inventory of any city in the country, which turns what looks like a construction problem into a sustained engineering one: inventory verification, material determination, service-side design and coordination across the street grid.",
    ],
    hiringFocus: [
      {
        role: "Lead service line programme engineers",
        why: "A replacement programme of this size runs for decades and needs engineers who can manage inventory, verification and design at street-by-street scale rather than project by project.",
      },
      {
        role: "Tunnel & hydraulic engineers",
        why: "The deep tunnel system keeps generating conveyance and control questions, and that experience does not transfer readily from ordinary collection system work.",
      },
      {
        role: "Nutrient recovery process engineers",
        why: "Phosphorus recovery at reclamation district scale is unusual enough that the operating experience sits with a small number of people.",
      },
      {
        role: "Collection system modellers",
        why: "Separating what the tunnels can take from what the local sewers deliver is a modelling problem the region runs continuously.",
      },
    ],
    licensure: "Illinois licenses through the Department of Financial and Professional Regulation, and it is one of the states that issues a Structural Engineer licence entirely separate from the PE, which matters for the structural side of plant and tunnel work. Water and wastewater operators are certified by the Illinois EPA. Lead service line work also carries its own reporting obligations under state law, so programme experience is often asked for by name.",
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
    agencies: [
      "Houston Public Works",
      "Harris County Flood Control District",
      "Gulf Coast Water Authority",
      "San Jacinto River Authority",
      "North Harris County Regional Water Authority",
      "Texas Commission on Environmental Quality",
    ],
    marketDetail: [
      "Houston is converting off groundwater, and that single fact drives most of the water engineering here. Subsidence district limits on pumping mean the region has to take surface water instead, which is why the Northeast Water Purification Plant expansion is one of the largest treatment projects in the country and why large-diameter transmission work is close to permanent.",
      "The wastewater side is a consent decree market. A federal agreement covering sanitary sewer overflows commits the city to sustained assessment and rehabilitation of a very large collection system across flat, wet, and in places subsiding ground, so condition assessment, rehabilitation design and capacity work outweigh new plant construction.",
    ],
    hiringFocus: [
      {
        role: "Surface water treatment process engineers",
        why: "The conversion from groundwater created demand for treatment design at a scale the local market had not previously needed.",
      },
      {
        role: "Large-diameter transmission engineers",
        why: "Moving treated surface water across the region is the physical form the conversion takes, and pipeline design at that diameter is its own specialism.",
      },
      {
        role: "Collection system rehabilitation engineers",
        why: "Consent decree obligations are met through assessment and rehabilitation programmes, which need engineers who work in condition data as much as in drawings.",
      },
      {
        role: "Instrumentation & SCADA engineers",
        why: "Decree reporting depends on measured performance, so monitoring and controls are part of the compliance case rather than an afterthought.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, which grants comity to NCEES records, and requires the firm itself to hold registration before it can offer engineering services, so a candidate's previous employer's registration status is sometimes part of the conversation. Water and wastewater operators are licensed separately by the TCEQ on a graded structure.",
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
    agencies: [
      "City of Phoenix Water Services",
      "Salt River Project",
      "Central Arizona Project",
      "City of Scottsdale Water",
      "Arizona Department of Environmental Quality",
    ],
    marketDetail: [
      "Phoenix engineers water against an allocation rather than against demand. Colorado River shortage conditions reduce what the Central Arizona Project can deliver, so the engineering response is storage, recovery and reuse: recharging water underground when it is available and recovering it when it is not, which makes aquifer storage a core competency rather than a specialism.",
      "The second strand is advanced purification. Scottsdale has operated purification to drinking water standards for years and the wider region is moving the same way, so treatment work here tends toward the membrane and advanced oxidation end. Reclaimed water is also a power-sector input in this region, which gives the reuse question an industrial dimension most metros do not have.",
    ],
    hiringFocus: [
      {
        role: "Advanced water purification engineers",
        why: "Purification to potable standards is where the region's supply strategy is heading, and the design pool with genuine experience of it is small.",
      },
      {
        role: "Recharge & recovery engineers",
        why: "Underground storage is how this region banks water, and designing and permitting it is unlike surface storage work.",
      },
      {
        role: "Distribution system modellers",
        why: "Blending sources of very different quality across a large distribution network is a water quality problem before it is a hydraulic one.",
      },
      {
        role: "Water resources planners",
        why: "Allocation-driven planning means supply strategy and engineering design are decided together rather than in sequence.",
      },
    ],
    licensure: "Arizona registers engineers through the Board of Technical Registration, which accepts comity applications from PEs licensed elsewhere. Operators are certified by ADEQ. The credential that carries unusual weight in this market is not a licence at all: familiarity with Arizona's assured water supply and recharge permitting regime, because a design that cannot be permitted under it is not a design this state can use.",
  },
  {
    slug: "philadelphia-pa",
    city: "Philadelphia",
    state: "Pennsylvania",
    abbr: "PA",
    region: "the Mid-Atlantic",
    authority: "Philadelphia Water Department (PWD)",
    marketNote:
      "Philadelphia's Green City, Clean Waters program, a 25-year EPA-approved green-infrastructure alternative to a traditional CSO consent decree, has made PWD a national model, and a steady source of stormwater and green-infrastructure design work.",
    localPrograms: [
      "Green City, Clean Waters green stormwater infrastructure",
      "Northeast & Southwest WPCP upgrades",
      "Combined sewer overflow reduction design",
      "Lead service line replacement program",
      "Delaware River intake & source-water protection",
    ],
    agencies: [
      "Philadelphia Water Department",
      "Aqua Pennsylvania",
      "Bucks County Water & Sewer Authority",
      "DELCORA",
      "Pennsylvania Department of Environmental Protection",
    ],
    marketDetail: [
      "Green City, Clean Waters made Philadelphia the reference case for meeting a combined sewer obligation with green infrastructure rather than with tunnels. That decision has a hiring consequence that has lasted: the city needs engineers who can design bioretention, permeable paving and inlet modifications into constrained streets and then demonstrate the runoff reduction, which is a different discipline from sizing storage.",
      "The supply side is river-sourced, drawing on the Delaware and the Schuylkill, and that puts source water quality at the centre of the treatment question. Salt line movement in the estuary and emerging contaminant monitoring both push work toward engineers who can connect what happens in the watershed to what the plant has to remove.",
    ],
    hiringFocus: [
      {
        role: "Green stormwater infrastructure designers",
        why: "The city's programme is the largest of its kind, and the design vocabulary it uses barely exists in metros that chose storage instead.",
      },
      {
        role: "Combined sewer modellers",
        why: "Green infrastructure has to be shown to work in a model before it is credited against the obligation, which makes modelling the evidence base for the whole programme.",
      },
      {
        role: "Source water & emerging contaminant engineers",
        why: "River supply means treatment design has to answer to what the watershed sends downstream, including contaminants now being regulated for the first time.",
      },
      {
        role: "Treatment process engineers",
        why: "Plant renewal runs alongside the stormwater programme and competes for the same limited pool of process people.",
      },
    ],
    licensure: "Pennsylvania licenses through the State Registration Board for Professional Engineers, Land Surveyors and Geologists, with comity for holders of an NCEES record. Water and wastewater operators are certified by PA DEP. For consultants the practical gate is often the city's own qualification process, since the stormwater programme is delivered through long-running frameworks rather than one-off procurements.",
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
    agencies: [
      "Dallas Water Utilities",
      "North Texas Municipal Water District",
      "Trinity River Authority",
      "Tarrant Regional Water District",
      "Upper Trinity Regional Water District",
    ],
    marketDetail: [
      "North Texas is one of the few places in the country still building major raw water supply. Bois d'Arc Lake is the first substantial new reservoir the state has completed in decades, and the Integrated Pipeline Project moves water across the region at a diameter that most utilities never design for, so reservoir, intake and transmission work is genuinely available here in a way it is not elsewhere.",
      "The regional wholesale structure is the other defining feature. Districts supply member cities rather than customers directly, which means the engineering is dominated by large conveyance, pump stations and system-wide planning, and the client is usually a district with its own standards rather than a municipality.",
    ],
    hiringFocus: [
      {
        role: "Large-diameter pipeline engineers",
        why: "Regional transmission at this scale is a continuous programme here, and design experience at that diameter is scarce nationally.",
      },
      {
        role: "Reservoir & dam engineers",
        why: "New raw water storage is rare in the United States, so the number of engineers who have delivered any is correspondingly small.",
      },
      {
        role: "Treatment plant process engineers",
        why: "New supply has to be treated, and plant expansion follows reservoir delivery on a predictable lag.",
      },
      {
        role: "Regional system planners",
        why: "Wholesale districts plan supply across many member cities at once, which is a modelling and forecasting role rather than a design one.",
      },
    ],
    licensure: "Texas licenses through the Board of Professional Engineers and Land Surveyors, with comity for NCEES record holders, and requires the engineering firm itself to be registered. Operators are licensed by the TCEQ. Because so much work here is let by regional districts rather than cities, prior experience under a specific district's design standards is often what a hiring manager is actually screening for.",
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
    agencies: [
      "City of Atlanta Department of Watershed Management",
      "DeKalb County Watershed Management",
      "Gwinnett County Department of Water Resources",
      "Cobb County Water System",
      "Georgia Environmental Protection Division",
    ],
    marketDetail: [
      "Atlanta's water engineering has been shaped by federal consent decrees for a generation. Meeting them produced deep rock tunnels and a raw water storage quarry that gave the city a supply buffer it never had, and it turned sewer assessment and rehabilitation into permanent programmes rather than projects, in the city and in DeKalb County alongside it.",
      "Growth is the second driver, and it pulls in a different direction. The northern counties run some of the larger and more technically advanced systems in the southeast, so the metro supports both heavy rehabilitation work in the older core and capacity expansion further out, which is unusual in one labour market.",
    ],
    hiringFocus: [
      {
        role: "Sewer rehabilitation & condition assessment engineers",
        why: "Decree compliance is delivered through assessment and rehabilitation programmes that have run long enough to be a career rather than a project.",
      },
      {
        role: "Tunnel & pump station engineers",
        why: "The storage and conveyance solutions chosen here were deep structures, and that experience is held by relatively few engineers.",
      },
      {
        role: "Programme managers for consent decree delivery",
        why: "Reporting to a federal decree is a discipline of its own, and firms are short of people who have done it under one.",
      },
      {
        role: "Treatment process engineers",
        why: "Rehabilitation in the core and expansion in the collar counties compete for the same process people.",
      },
    ],
    licensure: "Georgia licenses through the Board of Professional Engineers and Land Surveyors, with comity available to PEs licensed elsewhere. Operators are certified by the state EPD. Because much of the region's work is let under decree-driven programmes, the question a hiring manager usually asks first is which owner's programme a candidate has worked inside, not which state issued the licence.",
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
    agencies: [
      "Miami-Dade Water & Sewer Department",
      "South Florida Water Management District",
      "Broward County Water & Wastewater Services",
      "Florida Department of Environmental Protection",
    ],
    marketDetail: [
      "South Florida is engineering its way off ocean outfalls. State law requires the region's utilities to stop discharging treated effluent to the ocean and to reuse a substantial share of it instead, which converts what would elsewhere be an incremental upgrade programme into a wholesale rebuild of how the region handles wastewater.",
      "Underneath that sits geology. The Biscayne Aquifer is shallow, permeable and vulnerable to saltwater intrusion, and the water table is close enough to the surface that sea level rise shows up as a drainage and infiltration problem before it shows up as flooding. Deep injection wells, force main renewal and pump station resiliency are consequences of that setting rather than choices.",
    ],
    hiringFocus: [
      {
        role: "Reuse & advanced treatment engineers",
        why: "Outfall elimination has to be met largely through reuse, which makes advanced treatment design the critical path for the whole region.",
      },
      {
        role: "Force main & pump station rehabilitation engineers",
        why: "A low, flat, corrosive setting puts pressurised collection infrastructure under conditions that shorten its life and keep renewal continuous.",
      },
      {
        role: "Resiliency engineers for coastal utilities",
        why: "Groundwater rise affects infiltration and pump station operation, so resiliency here is an everyday design input rather than a special study.",
      },
      {
        role: "Injection well & subsurface disposal engineers",
        why: "Deep injection is part of how this region disposes of what it cannot reuse, and the design and permitting experience is regionally specific.",
      },
    ],
    licensure: "Florida licenses through the Board of Professional Engineers, which offers endorsement to engineers already licensed elsewhere on an equivalent basis. Operators are certified by FDEP. The regionally specific credential is familiarity with the water management district's permitting regime, since drainage and water use consents run through it rather than through the municipality.",
  },
  {
    slug: "seattle-wa",
    city: "Seattle",
    state: "Washington",
    abbr: "WA",
    region: "the Pacific Northwest",
    authority: "King County Wastewater Treatment Division / Seattle Public Utilities",
    marketNote:
      "The newly completed Ship Canal Water Quality Project, a 2.7-mile deep storage tunnel, anchors Seattle's ongoing combined sewer overflow control program alongside King County's regional plant upgrades.",
    localPrograms: [
      "Ship Canal Water Quality Project tunnel operations",
      "West Point Treatment Plant upgrades",
      "Combined sewer overflow control program",
      "Cedar & Tolt watershed source protection",
      "Lead service line replacement",
    ],
    agencies: [
      "Seattle Public Utilities",
      "King County Wastewater Treatment Division",
      "Cascade Water Alliance",
      "Washington State Department of Ecology",
      "Washington State Department of Health",
    ],
    marketDetail: [
      "Combined sewer control is the region's defining wastewater programme, and Seattle has chosen storage at tunnel scale to deliver it. That gives the market a steady supply of deep conveyance and hydraulic work, alongside the treatment and pumping needed to empty storage back into the system after a storm.",
      "The constraint that makes this market distinctive is ecological. Salmon recovery obligations run through everything: outfall siting, water quality limits, fish passage at supply infrastructure and the timing of in-water work. Engineers here are expected to design to those constraints from the outset rather than to treat permitting as a downstream step.",
    ],
    hiringFocus: [
      {
        role: "Conveyance & storage tunnel engineers",
        why: "Overflow control here is being delivered as deep storage, and that experience does not transfer readily from surface collection work.",
      },
      {
        role: "Hydraulic modellers",
        why: "Sizing storage against a permit obligation is a modelling exercise the region runs continuously as the programme proceeds.",
      },
      {
        role: "Treatment process engineers",
        why: "Regional plants are in an upgrade cycle at the same time as the storage programme, competing for the same people.",
      },
      {
        role: "Permitting-literate water resources engineers",
        why: "Endangered species and water quality obligations shape design here, so engineers who can carry a scheme through that review are valued above pure designers.",
      },
    ],
    licensure: "Washington registers engineers through the Board of Registration for Professional Engineers and Land Surveyors, with comity for equivalent out-of-state licences. Water system operators are certified by the Department of Health and wastewater operators by Ecology, which is a split worth knowing when a role touches both. Familiarity with the state's environmental review process is frequently listed alongside the licence itself.",
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
    agencies: [
      "Denver Water",
      "Metro Water Recovery",
      "Aurora Water",
      "Northern Water",
      "Colorado Department of Public Health & Environment",
    ],
    marketDetail: [
      "Denver Water's lead reduction programme is the most distinctive engineering work in this metro. The utility was allowed to accelerate physical replacement of lead service lines in place of the chemical treatment normally required, which means the compliance case rests on a construction and engineering programme rather than on a treatment change, and it has run at scale ever since.",
      "The rest of the market divides between supply and nutrients. Storage expansion on the supply side reflects a front range that keeps growing against a fixed snowpack, while state nutrient rules have pushed the regional wastewater authority through a long sequence of process upgrades, and Aurora's indirect potable reuse system gives the metro a reuse track as well.",
    ],
    hiringFocus: [
      {
        role: "Lead service line programme engineers",
        why: "Replacing service lines as a compliance strategy is unusual, and the engineers who have run one at city scale are correspondingly rare.",
      },
      {
        role: "Nutrient removal process engineers",
        why: "State nutrient limits have driven successive plant upgrades, and biological nutrient removal experience is the specific thing firms ask for.",
      },
      {
        role: "Dam & reservoir engineers",
        why: "Storage expansion on the front range is a dam engineering problem, and there are few active projects nationally to learn it on.",
      },
      {
        role: "Reuse & water quality engineers",
        why: "Indirect potable reuse in the metro means supply planning and treatment design are decided together.",
      },
    ],
    licensure: "Colorado licenses through the State Board of Licensure for Architects, Professional Engineers and Professional Land Surveyors, with comity for equivalent licences. Operators are certified by CDPHE. Water rights are the local complication: a design that assumes water is available has to be reconciled with a prior appropriation system, so engineers who understand how that constrains a scheme are treated as more useful than those who do not.",
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
    agencies: [
      "Massachusetts Water Resources Authority",
      "Boston Water & Sewer Commission",
      "Massachusetts Department of Environmental Protection",
      "Massachusetts Clean Water Trust",
    ],
    marketDetail: [
      "The regional authority runs one of the largest wastewater treatment plants in the country at Deer Island, built under a federal court order to clean up the harbour, and supplies drinking water to dozens of communities from a protected, largely unfiltered system. That combination gives engineers here exposure to both ends of the business at a scale very few metros can offer.",
      "Most current work is renewal rather than construction. The plant is now old enough that asset renewal is the dominant programme, the distribution and collection systems are among the oldest in the country, and combined sewer control continues alongside both, which favours engineers comfortable working inside existing infrastructure.",
    ],
    hiringFocus: [
      {
        role: "Plant process & asset renewal engineers",
        why: "Renewing a plant of this scale while it stays in service is a different problem from designing one, and the people who have done it are few.",
      },
      {
        role: "Deep rock tunnel engineers",
        why: "The region's supply and outfall infrastructure is tunnelled, and maintaining and extending it needs experience that is scarce nationally.",
      },
      {
        role: "Combined sewer & hydraulic engineers",
        why: "Overflow control in an old combined system is a continuing obligation rather than a finished programme.",
      },
      {
        role: "Corrosion control & lead engineers",
        why: "Old distribution systems make water chemistry a public health question, and that expertise sits with a small group.",
      },
    ],
    licensure: "Massachusetts licenses through the Board of Registration of Professional Engineers and Land Surveyors, with comity for equivalent out-of-state licences. Operators are certified by MassDEP. Much of the region's work is procured by the regional authority under its own qualification arrangements, so which of its programmes a candidate has worked on is usually the first thing a hiring manager checks.",
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
    agencies: [
      "Metropolitan Council Environmental Services",
      "Minneapolis Public Works",
      "Saint Paul Regional Water Services",
      "Minnesota Pollution Control Agency",
      "Minnesota Department of Health",
    ],
    marketDetail: [
      "Wastewater in this metro is regional. The Metropolitan Council owns the interceptor network and the treatment plants that serve both cities and the suburbs around them, so the work is dominated by large interceptor rehabilitation and plant renewal rather than by municipal-scale collection design.",
      "Two things make the technical problem local. The first is cold: process design, buried depth and construction seasons all answer to a climate that freezes hard, and a plant designed for a temperate state does not simply transfer. The second is contamination, particularly the perfluorinated compounds found in parts of the east metro, which has made treatment for emerging contaminants a live design question rather than a future one.",
    ],
    hiringFocus: [
      {
        role: "Interceptor rehabilitation engineers",
        why: "A regional network of large-diameter interceptors generates continuous condition assessment and rehabilitation work of a kind smaller systems never see.",
      },
      {
        role: "Emerging contaminant treatment engineers",
        why: "Perfluorinated compound treatment moved from research to delivery here earlier than in most of the country.",
      },
      {
        role: "Nutrient removal process engineers",
        why: "Discharge limits into the Mississippi keep nutrient process work continuous at the regional plants.",
      },
      {
        role: "Cold climate design engineers",
        why: "Frost depth and winter construction constrain design decisions that would be routine in a warmer state.",
      },
    ],
    licensure: "Minnesota licenses through the Board of Architecture, Engineering, Land Surveying, Landscape Architecture, Geoscience and Interior Design, with comity for equivalent licences. Water operators are certified by the Department of Health and wastewater operators by the Pollution Control Agency. Regional council procurement runs through its own consultant arrangements, so prior work under those is often the practical qualification.",
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
    agencies: [
      "Great Lakes Water Authority",
      "Detroit Water & Sewerage Department",
      "Oakland County Water Resources Commissioner",
      "Macomb County Public Works",
      "Michigan Department of Environment, Great Lakes & Energy",
    ],
    marketDetail: [
      "The regional authority operates one of the largest single-site wastewater treatment facilities in the country and supplies drinking water across a service area covering much of south east Michigan, while the city department runs the local network inside Detroit. That split, created when the regional system was formed, means engineers here work either on very large regional assets or on dense local infrastructure, and the two are quite different jobs.",
      "Lead service lines are the other defining programme. Michigan adopted the strictest replacement rule in the country after Flint, requiring full replacement on a fixed annual schedule regardless of who owns which part of the service, which has turned replacement into a sustained, engineered programme across every community in the region rather than a reactive one.",
    ],
    hiringFocus: [
      {
        role: "Lead service line replacement engineers",
        why: "State rules impose an annual replacement rate on every water system, which makes this permanent programme work rather than a project.",
      },
      {
        role: "Collection system & basement backup engineers",
        why: "Combined sewers and surcharge-driven basement flooding make hydraulic capacity a public-facing issue the region works on continuously.",
      },
      {
        role: "Large plant process engineers",
        why: "Very few facilities operate at the scale of the regional plant, so the operating and design experience is held by a small group.",
      },
      {
        role: "Asset management engineers for aging mains",
        why: "A large regional transmission network past its design life makes condition assessment and prioritisation a discipline in its own right.",
      },
    ],
    licensure: "Michigan licenses through the Department of Licensing and Regulatory Affairs, with comity for equivalent out-of-state licences. Operators are certified by EGLE. The state's lead and copper rule is stricter than the federal one, so engineers coming from elsewhere should expect the compliance framework here to demand more than the one they trained under.",
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
    agencies: [
      "Charlotte Water",
      "Union County Public Works",
      "Catawba River Water Supply Project",
      "North Carolina Department of Environmental Quality",
    ],
    marketDetail: [
      "Charlotte's water engineering is growth engineering. The utility serves one of the faster-growing metros in the country, which means treatment capacity expansion, new transmission and collection system extension run continuously, and the planning question is less about renewal than about staying ahead of where the region is building.",
      "Supply comes from the Catawba, a river shared across a state line and managed under a federal licence, so allocation is a regional negotiation as much as a hydraulic question. Stream buffer and water quality rules in the basin also mean stream restoration and stormwater design sit closer to the core of the work here than they do in many metros.",
    ],
    hiringFocus: [
      {
        role: "Treatment capacity expansion engineers",
        why: "Sustained growth keeps plant expansion on a rolling programme, which is a different rhythm from the renewal work that dominates older metros.",
      },
      {
        role: "Large transmission main engineers",
        why: "Serving new growth means moving water further, and transmission design is the constraint on how fast the system can extend.",
      },
      {
        role: "Collection system growth modellers",
        why: "Sizing sewers for development that has not been built yet is a forecasting problem as much as a hydraulic one.",
      },
      {
        role: "Stream restoration & stormwater engineers",
        why: "Basin water quality rules make restoration and buffer design a routine part of the utility's programme.",
      },
    ],
    licensure: "North Carolina licenses through the Board of Examiners for Engineers and Surveyors, with comity for equivalent licences, and it also licenses the firm: a company needs its own certificate of authorisation before it can offer engineering services in the state, which occasionally surprises engineers moving in from elsewhere. Operators are certified by NC DEQ.",
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
      "After a widely publicized lead-in-water crisis, Newark completed one of the fastest full lead service line replacement programs in U.S. history, a model now referenced nationally as EPA's new Lead and Copper Rule Improvements take effect.",
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
      "MSD's Project Clear is a 23-year, $6+ billion federal consent decree program, among the largest in the country, rebuilding combined and sanitary sewers across the St. Louis region.",
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
      "DC Water's Clean Rivers Project, a $2.7 billion tunnel program feeding into Blue Plains (the world's largest advanced wastewater treatment plant), anchors one of the most technically demanding water-infrastructure markets in the country.",
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
  { role: "Process Designer / CAD Technician", range: "$58,000 – $80,000" },
  { role: "Water/Wastewater Engineer (EIT)", range: "$68,000 – $92,000" },
  { role: "Treatment Process Engineer", range: "$90,000 – $130,000" },
  { role: "Plant Operations & Maintenance Manager", range: "$95,000 – $135,000" },
  { role: "Licensed PE (Mid-Level)", range: "$100,000 – $145,000" },
  { role: "Collection & Conveyance Engineer (PE)", range: "$105,000 – $145,000" },
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
