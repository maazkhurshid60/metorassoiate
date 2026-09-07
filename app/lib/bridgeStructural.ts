/* Bridge & structural compensation bands.
 *
 * Pulled out of app/bridge-structural-recruiter/page.tsx so the salary guide
 * can read the same array the discipline page renders. The other five
 * disciplines already keep their bands in lib/ for exactly this reason; this
 * was the last one still defined inside a page, and duplicating it would have
 * meant two sets of numbers drifting apart the first time one was updated.
 */

export const BRIDGE_SALARIES = [
  { role: "Structural Drafter / Revit-BIM Modeler", range: "$58,000 – $85,000" },
  { role: "Structural Engineer (EIT)", range: "$72,000 – $98,000" },
  { role: "Bridge Inspection Team Leader (NBIS)", range: "$85,000 – $120,000" },
  { role: "Load Rating Engineer (PE)", range: "$105,000 – $145,000" },
  { role: "Licensed Bridge PE (Mid-Level)", range: "$110,000 – $158,000" },
  { role: "Seismic / Structural Analysis Engineer (PE)", range: "$120,000 – $165,000" },
  { role: "Senior Bridge Project Manager", range: "$150,000 – $200,000+" },
  { role: "Director of Structural Engineering", range: "$185,000 – $260,000+" },
];
