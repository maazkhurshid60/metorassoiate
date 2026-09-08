import { SITE_URL } from "../lib/site";

// A small, separate sitemap for a batch of pages we're actively trying to
// get Google to (re)crawl — distinct from the main sitemap.xml, which stays
// unchanged and covers the whole site. Submitting it separately in Search
// Console is the point: coverage is reported per sitemap, so this batch's
// indexed/submitted ratio can be read on its own instead of being lost in
// 266 URLs. Swap the list for the next batch once these show as indexed.
//
// Don't add <priority> or <changefreq> — Google ignores both. <lastmod> IS
// used, but only while it stays honest, so it appears here only on pages
// whose content actually changed, dated to the commit that changed them.
//
// Batch 2. Batch 1 was fifteen city pages picked before we had any signal
// about which ones were struggling; these are pages that materially changed
// or did not exist when Google last looked, which is the case where asking
// for a recrawl is worth anything. Before Batch 3, cross-check Search
// Console's "Crawled – currently not indexed" and "Discovered – currently
// not indexed" lists and take from those rather than from anything already
// showing as Indexed.
type Entry = { path: string; lastmod?: string };

const BATCH: Entry[] = [
  // New pages Google has not indexed yet.
  { path: "/engineering-awards", lastmod: "2026-09-08" },
  { path: "/videos" },

  // Rewritten: the salary guide's bands went from four rows to eight per
  // discipline, and it gained a sixth discipline.
  { path: "/index_themall_awards", lastmod: "2026-09-07" },

  // The fifteen metros that gained real local content — agencies, market
  // detail, hardest-to-fill roles, licensure and local FAQs. These went from
  // ~1,080 words at 72% phrasing shared with each other to ~1,450 at 54%,
  // which is the whole reason to ask for a recrawl: the page Google has
  // cached is not the page that is there now.
  { path: "/civil-engineering-recruiter/new-york-ny", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/los-angeles-ca", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/chicago-il", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/houston-tx", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/phoenix-az", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/philadelphia-pa", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/dallas-tx", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/atlanta-ga", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/miami-fl", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/seattle-wa", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/denver-co", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/boston-ma", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/minneapolis-mn", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/detroit-mi", lastmod: "2026-09-08" },
  { path: "/civil-engineering-recruiter/charlotte-nc", lastmod: "2026-09-08" },
];

export async function GET() {
  const urls = BATCH.map(({ path, lastmod }) =>
    `  <url>\n    <loc>${SITE_URL}${path}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}\n  </url>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
