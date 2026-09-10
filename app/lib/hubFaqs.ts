import type { FaqItem } from "./seo";

/* Hub-level FAQs — six per discipline, thirty-six in total.
 *
 * WHY THESE, AND WHY ONLY THIRTY-SIX
 *
 * A hundred questions were proposed. Clustered by overlap they collapsed to
 * 43 distinct answers: sixteen of them were the single question "who is the
 * best civil engineering recruiter" asked sixteen ways, and seven more were
 * one DOT question with the agency's name swapped. Every proposed answer
 * also ended with the same telephone sentence, which is the byte-identical
 * block pattern that already cost this site its city pages' indexing.
 *
 * WHAT THEY DELIBERATELY AVOID
 *
 * "Who is the best recruiter?" — dropped, all of them. A recruiting firm's
 * own site asserting it is the best is not evidence, and the assistants this
 * content is aimed at treat it as exactly that. Those questions cannot be
 * answered credibly from this domain, so publishing sixteen attempts is
 * sixteen chances to be discounted.
 *
 * WHAT THEY ARE FOR
 *
 * Google stopped showing FAQ rich results on 7 May 2026 and removed the
 * reporting in June, so none of this produces a dropdown in Google any more.
 * The markup is still read by Bingbot, PerplexityBot and the retrieval
 * crawlers behind AI answers — which is the actual goal here, and the thing
 * the client was asking about when an assistant ranked competitors above us.
 *
 * The rule every answer follows: it must contain something checkable. An
 * assistant quotes a page that states how PE comity actually works, or what
 * a licensed PE actually earns. It does not quote "we understand technical
 * disciplines and geographic markets". Where a figure appears it is the same
 * figure the salary tables on this site publish, so the page cannot
 * contradict itself.
 *
 * No answer carries a phone number. One call to action per page, at the
 * bottom, where it already is.
 */

export type HubSegment =
  | "civil-engineering-recruiter"
  | "mep-engineering-recruiter"
  | "bridge-structural-recruiter"
  | "water-wastewater-recruiter"
  | "cei-inspection-recruiter"
  | "municipal-engineering-recruiter";

export const HUB_FAQS: Record<HubSegment, FaqItem[]> = {
  "civil-engineering-recruiter": [
    {
      q: "What does a civil engineer earn in the United States?",
      a: "It tracks licensure more than years served. Our published bands run from $70,000–$95,000 for a civil engineer with an EIT, to $105,000–$150,000 once the PE is in hand at mid-level, to $140,000–$190,000+ for a senior project manager and $175,000–$250,000+ at regional director. Metro area moves these figures more than any other single factor.",
    },
    {
      q: "Do you need a PE licence to be a civil project manager?",
      a: "Usually, because the role signs and seals drawings and takes professional responsibility for them. The common route is the FE exam, roughly four years of progressive experience under a licensed PE, then the PE exam. Project engineer and designer roles below that line are open to EITs, and most firms treat them as the run-up to licensure rather than a separate track.",
    },
    {
      q: "How does a PE licence transfer between states?",
      a: "It does not transfer automatically — there is no national licence. Every state board licenses independently and grants what is called comity licensure to engineers already licensed elsewhere, on its own terms. An NCEES Record holds your exams, education and references in one place and is what most boards want to see. Budget weeks, not days, and check the destination board before accepting a role that needs a seal.",
    },
    {
      q: "What is the difference between consulting-side and DOT-side civil work?",
      a: "Consulting firms design and deliver; the state DOT owns the asset, sets the standards and reviews the work. Engineers move between the two, but the day-to-day differs sharply — consulting runs on billable utilisation and multiple concurrent clients, agency work on programme delivery and public accountability. A candidate who has only done one often needs a run-up to the other.",
    },
    {
      q: "Which civil engineering roles are hardest to fill?",
      a: "In our experience the bottleneck is rarely graduates — it is the five-to-fifteen-year band holding a PE plus a specific agency's project history. Water resources, geotechnical and traffic/ITS are consistently thinner than general site design, because each needs experience that cannot be picked up quickly on the job.",
    },
    {
      q: "What project awards do civil engineering firms compete for?",
      a: "The main routes are ACEC's Engineering Excellence Awards, which national entries must reach through one of 51 state and metropolitan organisations, ENR's regional Best Projects, ASCE's Outstanding Civil Engineering Achievement, and AASHTO's America's Transportation Awards for state DOT projects. We list the entry route for each on our engineering awards pages.",
    },
  ],

  "mep-engineering-recruiter": [
    {
      q: "What does an MEP engineer earn in the United States?",
      a: "Our published bands run from $70,000–$95,000 for a mechanical or electrical engineer with an EIT, to $105,000–$155,000 for a licensed MEP PE at mid-level, $125,000–$175,000 for a data centre electrical PE, and $180,000–$260,000 for a director of MEP engineering. Mission-critical and healthcare work pays above commercial for the same seniority.",
    },
    {
      q: "Which licences and certifications matter most for MEP engineers?",
      a: "The PE is the one that gates sign-and-seal authority. Beyond it, the credentials employers actually ask for are LEED AP, ASHRAE's BEMP and CEM for energy work, and NICET certification on the fire protection side. Which of those matters depends far more on the project type than on the job title.",
    },
    {
      q: "What is the difference between an MEP designer and an MEP engineer?",
      a: "A designer models and documents the system — typically in Revit — while the engineer performs the load calculations, selects equipment, and carries the code responsibility for the result. The pay gap between them is real: our bands start designers at $60,000–$88,000 against $70,000–$95,000 for an engineer at EIT level, widening sharply once the PE arrives.",
    },
    {
      q: "Why do MEP job specs name a local code authority?",
      a: "Because the review body sets what the drawings must show and how long approval takes, and that varies by city rather than by state. Work in New York is reviewed by NYC DOB, Los Angeles by LADBS, Chicago by Chicago DOB. An engineer who has been through a given authority's review is materially faster on the next project there, which is why the specs ask.",
    },
    {
      q: "What is commissioning, and why is it recruited separately?",
      a: "Commissioning verifies that installed systems actually perform as designed, after construction and often into occupancy. It is a distinct discipline from design — the skill is testing, measurement and fault-finding rather than modelling — so it is recruited as its own role, usually as a commissioning engineer or CxA.",
    },
    {
      q: "What awards recognise MEP engineering work?",
      a: "ASHRAE's Technology Awards are the notable one, because entry requires measured performance from a building in successful operation for at least a year rather than a design-stage energy model. Alongside them: the IES Illumination Awards for lighting design, NECA's Project Excellence Awards on the electrical construction side, and Consulting-Specifying Engineer's MEP Giants ranking and 40 Under 40.",
    },
  ],

  "bridge-structural-recruiter": [
    {
      q: "Do structural engineers need a PE or an SE licence?",
      a: "A PE covers most structural practice. A separate SE licence exists, and a handful of states require it for particular structures — significant buildings, or bridges above a threshold — so the answer genuinely depends on where the work is and what is being designed. Junior roles are commonly open to EITs; senior positions that seal drawings are not.",
    },
    {
      q: "What is the difference between bridge design and bridge inspection?",
      a: "Design produces the structure; inspection assesses one already carrying traffic, on a cycle set by federal requirements, and feeds load ratings and rehabilitation decisions. They draw on the same structural knowledge but are separate careers in practice, and a designer does not slot into an inspection team without training.",
    },
    {
      q: "What does a bridge engineer earn?",
      a: "Compensation follows licensure and span complexity. A bridge designer with an EIT sits near the civil EIT band of $70,000–$95,000; a licensed bridge PE in the middle of their career is comparable to the $105,000–$150,000 mid-level PE band, with senior project managers running to $140,000–$190,000+. Movable and long-span experience commands a premium because the pool is small.",
    },
    {
      q: "Why is steel bridge experience recruited so specifically?",
      a: "Because steel, concrete and movable spans are genuinely different design problems, and the national pool for each is small. It is one of the few specialisms where a named project is a better filter than a job title — which is why the AISC/NSBA Prize Bridge Awards, running since 1928, are a useful shorthand for who has actually done the work.",
    },
    {
      q: "What software do structural and bridge employers ask for?",
      a: "Analysis packages rather than drafting tools are what separate candidates: employers name the specific software their models are built in, and migrating between them costs real time. Expect the job spec to be explicit, and expect it to matter more for bridge work than for buildings.",
    },
    {
      q: "Can a building structural engineer move into bridge work?",
      a: "It happens, but it is a move rather than a sideways step. Bridge work runs on AASHTO design specifications and a public-agency delivery model, where building structures run on the IBC and a private-client one. Firms hiring across that line generally expect to invest in the transition, and say so.",
    },
  ],

  "water-wastewater-recruiter": [
    {
      q: "What does a water or wastewater engineer earn?",
      a: "Process engineers and treatment designers track the civil PE bands closely — roughly $70,000–$95,000 at EIT, $105,000–$150,000 for a mid-level licensed PE, and $140,000–$190,000+ for senior project managers running plant programmes. Plant process experience carries a premium over collection and distribution work at the same seniority, because it is harder to acquire.",
    },
    {
      q: "What is the difference between a water engineer and a plant operator?",
      a: "The engineer designs the facility and holds a PE; the operator runs it day to day and holds a state operator certification, graded by class, which is a separate credential with its own examinations and renewal. Both appear in the same job market and the terms get used loosely, but they are not interchangeable roles.",
    },
    {
      q: "Which utility owns the work in a given metro?",
      a: "It varies more than people expect, and it determines who lets the contracts. New York's is NYC DEP, Los Angeles's is LA Sanitation & Environment, Chicago's is the Metropolitan Water Reclamation District of Greater Chicago, Houston's is Houston Public Works. Our city pages name the authority for each of the fifty metros we recruit in.",
    },
    {
      q: "What does PFAS work mean for water engineering hiring?",
      a: "Emerging-contaminant compliance has become its own strand of work — monitoring, treatment selection and permitting — and it draws on process chemistry knowledge that plant design alone does not build. It is a good example of demand appearing faster than the talent pool, which is why it shows up in job specs by name.",
    },
    {
      q: "What is the difference between collection systems and treatment work?",
      a: "Collection and distribution is pipe network engineering — hydraulic modelling, pump stations, rehabilitation of buried assets. Treatment is process engineering inside a plant. Firms recruit them separately, and a strong candidate in one is not automatically a candidate in the other.",
    },
    {
      q: "What recognition exists for water and wastewater projects?",
      a: "The Water Environment Federation runs more than thirty award categories through its member associations, covering collection systems, treatment innovation, plant operations and its Utility of the Future Today designation. Entry is through the state or regional member association before national recognition.",
    },
  ],

  "cei-inspection-recruiter": [
    {
      q: "What does CEI stand for, and what does the work involve?",
      a: "Construction Engineering and Inspection — the owner's side of a construction project. CEI staff verify that what gets built matches the approved plans and specifications, document quantities and pay applications, and keep the record that supports payment and claims. It is field work with a heavy documentation burden, distinct from design.",
    },
    {
      q: "What certifications do construction inspectors need?",
      a: "NICET certification is the common baseline, graded by level, and most state DOTs run their own qualification programmes for specific inspection types — concrete, asphalt, earthwork, structures. Those are agency-specific, which is why a spec asks for a particular state's certification rather than inspection experience in general.",
    },
    {
      q: "What is the difference between an inspector and a resident engineer?",
      a: "The inspector observes and documents specific work. The resident engineer runs the site for the owner — managing the inspection team, holding the contractual relationship with the contractor, and making the calls that get escalated. It is a step up in responsibility rather than a different specialism, and it usually expects a PE.",
    },
    {
      q: "Why do CEI roles name a specific DOT district?",
      a: "Because prequalification and procedure sit at district level, not just state level. TxDOT's Houston District, Caltrans District 7, IDOT District 1 and the Illinois Tollway each run their own processes. An inspector who already holds a district's qualifications can start immediately; one who does not has a wait.",
    },
    {
      q: "Is CEI work permanent or project-based?",
      a: "Both, and the distinction shapes the market. Consulting firms hold CEI contracts that run for the length of a construction programme, so hiring follows contract awards. That makes CEI hiring more responsive to letting schedules than design hiring, and it is why timing matters more in this discipline than most.",
    },
    {
      q: "Can inspectors move into construction management?",
      a: "It is the usual path. Field documentation and specification knowledge are exactly what a construction manager needs, and the step normally goes inspector, senior inspector, resident engineer, construction manager. What tends to gate it is the reporting, scheduling and contract administration side rather than the technical side.",
    },
  ],

  "municipal-engineering-recruiter": [
    {
      q: "What does a municipal engineer do?",
      a: "Municipal engineering is the public agency's own engineering function — streets, utilities, stormwater, water and sewer, plan review and the capital improvement programme. The work spans several disciplines shallowly rather than one deeply, and much of it is managing consultants rather than producing drawings.",
    },
    {
      q: "What does a city engineer earn compared with consulting?",
      a: "Public salaries are usually published, banded and slower-moving than consulting, and often lower at the same level of technical responsibility. What sits on the other side is pension, stability and defined hours. Engineers move both ways across that line throughout a career, and the trade is rarely purely financial.",
    },
    {
      q: "Do municipal engineering roles require a PE?",
      a: "City engineer and senior municipal positions generally do, because the role signs off on public infrastructure. Below that, plan review, inspection and capital programme roles are frequently open to EITs, and a public agency is often a better place to accumulate the varied experience licensure requires than a specialist consultancy.",
    },
    {
      q: "Who owns municipal engineering work in a given city?",
      a: "The department name varies and it matters when applying — New York's is the Department of Design and Construction, Los Angeles's is the Bureau of Engineering, Houston's is Public Works. Our city pages name the responsible body for each of the fifty metros we cover.",
    },
    {
      q: "What does public works experience actually signal to an employer?",
      a: "That the engineer can work inside a public agency's constraints — procurement rules, council timelines, public meetings and funding cycles — rather than around them. Consulting firms bidding municipal work value it precisely because it is hard to teach and it determines whether a project stays on schedule.",
    },
    {
      q: "What awards recognise municipal and public works projects?",
      a: "APWA's Public Works Project of the Year is the notable one, and unusually it recognises the owning agency, the consulting engineer and the contractor together. Entry runs through an APWA chapter before national judging, and a project must be substantially complete and in use within the two calendar years before nomination.",
    },
  ],
};
