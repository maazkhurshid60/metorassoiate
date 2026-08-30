import { SITE_URL } from "../lib/site";

// A small, separate sitemap for a batch of pages we're actively trying to
// get Google to (re)crawl — distinct from the main sitemap.xml, which stays
// unchanged and covers the whole site. Swap this list for the next batch
// once Search Console shows these as indexed; don't add <priority> or
// <changefreq> (Google ignores both), and don't stamp a <lastmod> unless we
// actually know the page changed on that date.
//
// Batch 1 — candidates suggested against the site's live vertical/city
// pages. Before swapping in Batch 2, cross-check Search Console's
// "Crawled – currently not indexed" / "Discovered – currently not indexed"
// lists and prioritize those over any page already showing as Indexed.
const BATCH: string[] = [
  "/mep-engineering-recruiter/las-vegas-nv",
  "/mep-engineering-recruiter/los-angeles-ca",
  "/civil-engineering-recruiter/austin-tx",
  "/civil-engineering-recruiter/phoenix-az",
  "/water-wastewater-recruiter/columbus-oh",
  "/mep-engineering-recruiter/miami-fl",
  "/water-wastewater-recruiter/miami-fl",
  "/cei-inspection-recruiter/miami-fl",
  "/mep-engineering-recruiter/orlando-fl",
  "/civil-engineering-recruiter/orlando-fl",
  "/water-wastewater-recruiter/orlando-fl",
  "/cei-inspection-recruiter/orlando-fl",
  "/mep-engineering-recruiter/jacksonville-fl",
  "/water-wastewater-recruiter/jacksonville-fl",
  "/cei-inspection-recruiter/washington-dc",
];

export async function GET() {
  const urls = BATCH.map((path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
