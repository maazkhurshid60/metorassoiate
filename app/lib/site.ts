/** Canonical production origin — no trailing slash. Used for metadataBase, sitemap, robots, and canonical URLs. */
export const SITE_URL = "https://metroassoc.com";

/** External careers portal (Top Echelon). CAREERS_URL browses all jobs; APPLY_URL is the application form. */
export const CAREERS_URL =
  "https://careers.topechelon.com/portals/3a7f6fd3-7cf7-447c-a20f-2354eb2031df";
export const APPLY_URL =
  "https://careers.topechelon.com/portals/3a7f6fd3-7cf7-447c-a20f-2354eb2031df/apply";

export const PHONE = "+1 312-500-1878";
export const PHONE_HREF = "tel:+13125001878";
export const EMAIL = "patrick@metroassoc.com";

/** GeeTest v4 CAPTCHA ID (public — safe to ship to the browser). Unlike
 *  Turnstile, GeeTest has no published test ID, so this is empty until set.
 *  Get it from https://console.geetest.com (Products > CAPTCHA v4), and set
 *  the matching GEETEST_CAPTCHA_KEY (secret) env var on the server — see
 *  app/api/contact/route.ts. */
export const GEETEST_CAPTCHA_ID = process.env.NEXT_PUBLIC_GEETEST_CAPTCHA_ID ?? "";

/** Base URL of the JobFolder recruiter platform (a separate app), used only
 *  to pull the recruiters its admin has approved to appear on our "Meet Our
 *  Team" page — see app/lib/jobfolderTeam.ts. Empty until set, in which case
 *  the team page just shows the static roster with none added. */
export const JOBFOLDER_API_URL = process.env.JOBFOLDER_API_URL ?? "";
