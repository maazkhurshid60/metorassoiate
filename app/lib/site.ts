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

/** Cloudflare Turnstile site key (public — safe to ship to the browser).
 *  This is Cloudflare's published always-passes test key. Swap it for the
 *  real site key from https://dash.cloudflare.com/?to=/:account/turnstile
 *  once this domain is registered there, and set the matching
 *  TURNSTILE_SECRET_KEY env var on the server (see app/api/contact/route.ts). */
export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA";
