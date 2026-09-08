import { SITE_URL } from "../lib/site";
import { AWARD_PROGRAMS } from "../lib/awards";

/* The awards cluster as its own sitemap, for submitting separately in
 * Search Console.
 *
 * Why separate rather than relying on sitemap.xml, which already lists all
 * of these: Search Console reports coverage per submitted sitemap. Fifteen
 * new URLs inside a 280-URL sitemap tell you nothing about how those fifteen
 * did. Submitted on their own, the indexed/submitted ratio is the answer to
 * the only question worth asking about a new page cluster — did Google think
 * it was worth indexing.
 *
 * Generated from AWARD_PROGRAMS rather than hand-listed, so adding a program
 * cannot leave this behind. No <lastmod>: these pages are new, so there is no
 * previous version whose change date would mean anything. No <priority> or
 * <changefreq> — Google ignores both.
 */
export async function GET() {
  const paths = [
    "/engineering-awards",
    ...AWARD_PROGRAMS.map((a) => `/engineering-awards/${a.slug}`),
  ];

  const urls = paths.map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n  </url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
