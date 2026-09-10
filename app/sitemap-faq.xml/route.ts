import { SITE_URL } from "../lib/site";
import { FAQ_GROUPS } from "../lib/hubFaqs";

/* The FAQ cluster as its own sitemap, for submitting separately in Search
 * Console.
 *
 * These URLs are all in sitemap.xml already. The reason to submit them again
 * on their own: Search Console reports coverage per submitted sitemap, so
 * nine new URLs inside a 289-URL sitemap tell you nothing about how those
 * nine did. Submitted separately, the indexed/submitted ratio is a direct
 * answer to the only question worth asking about a new cluster — did Google
 * think it was worth indexing. A URL appearing in more than one sitemap is
 * fine; Google reports per sitemap.
 *
 * That matters more here than usual. This cluster replaced a per-question
 * version that measured 67-80% duplicate, and the grouped pages measure
 * 29.8%. If the reasoning was right these should index; if they sit in
 * "Crawled - currently not indexed" instead, the answer is depth per page,
 * not more pages — and this sitemap is how that gets seen early rather than
 * being averaged away.
 *
 * Generated from FAQ_GROUPS, so adding a group cannot leave this behind. No
 * <lastmod>: these are new, so there is no previous version whose change date
 * would mean anything. No <priority> or <changefreq> — Google ignores both.
 */
export async function GET() {
  const paths = ["/faq", ...FAQ_GROUPS.map((g) => `/faq/${g.id}`)];

  const urls = paths
    .map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n  </url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
