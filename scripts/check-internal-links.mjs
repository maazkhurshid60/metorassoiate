/* Every URL in the sitemap must be reachable by following links from the
 * homepage — and not from too far away.
 *
 *   npm run build && npx next start -p 3000 &
 *   node scripts/check-internal-links.mjs http://localhost:3000
 *
 * Exits non-zero if any sitemap URL is unreachable, or if anything sits
 * deeper than MAX_DEPTH clicks from "/".
 *
 * Why this is a checked invariant rather than a one-off audit:
 *
 * Search Console reported 163 URLs in "Discovered - currently not indexed",
 * every one with Last crawled "N/A" — Google had the URL from the sitemap and
 * had never fetched it. Among them were the /mep-engineering-recruiter,
 * /cei-inspection-recruiter, /water-wastewater-recruiter and
 * /bridge-structural-recruiter hubs themselves.
 *
 * The cause was depth, not absence. Crawling the live site found all 280
 * sitemap URLs reachable, but 250 of them sat three clicks from the homepage
 * behind hubs that nothing in the site chrome linked to: the homepage had
 * seventeen internal links and not one went to a discipline, and the footer's
 * "Services" column printed six names all pointing at "/#services". Only nine
 * pages were one click from the homepage.
 *
 * A sitemap tells Google a URL exists. Internal links tell it the URL is worth
 * spending crawl budget on. This asserts the second, because it is the half
 * that silently rots when a section is added and nothing links to it.
 */

const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const MAX_DEPTH = 2;

const SITEMAPS = ["/sitemap.xml", "/sitemap-awards.xml", "/sitemap-priority.xml"];

async function text(path) {
  try {
    const res = await fetch(BASE + path);
    return res.ok ? await res.text() : "";
  } catch {
    return "";
  }
}

const norm = (p) => (p.replace(/\/+$/, "") || "/");

/* Collect the declared URL set from every sitemap the site publishes. */
const sitemap = new Set();
for (const sm of SITEMAPS) {
  const xml = await text(sm);
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    sitemap.add(norm(m[1].replace(/^https?:\/\/[^/]+/, "")) || "/");
  }
}
if (sitemap.size === 0) {
  console.error(`No sitemap URLs found at ${BASE} — is the server running?`);
  process.exit(2);
}

/* Breadth-first over internal links, the way a crawler would. */
const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const path = queue.shift();
  const html = await text(path);
  const seen = new Set();
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = norm(m[1]);
    if (seen.has(href) || href.startsWith("/api/")) continue;
    seen.add(href);
    if (!sitemap.has(href)) continue; // only judge pages we actually declare
    if (!depth.has(href)) {
      depth.set(href, depth.get(path) + 1);
      queue.push(href);
    }
  }
}

const byDepth = new Map();
for (const d of depth.values()) byDepth.set(d, (byDepth.get(d) ?? 0) + 1);

console.log(`\n  ${BASE}\n`);
console.log("  clicks from the homepage:");
for (const d of [...byDepth.keys()].sort((a, b) => a - b)) {
  console.log(`    ${d}  ${String(byDepth.get(d)).padStart(4)} pages`);
}

const unreachable = [...sitemap].filter((u) => !depth.has(u)).sort();
const tooDeep = [...depth].filter(([u, d]) => d > MAX_DEPTH && sitemap.has(u)).sort();

console.log(`\n  sitemap URLs           ${sitemap.size}`);
console.log(`  reachable by link      ${sitemap.size - unreachable.length}`);
console.log(`  unreachable            ${unreachable.length}`);
console.log(`  deeper than ${MAX_DEPTH} clicks  ${tooDeep.length}`);

for (const u of unreachable.slice(0, 20)) console.log(`    UNREACHABLE  ${u}`);
if (unreachable.length > 20) console.log(`    ... and ${unreachable.length - 20} more`);
for (const [u, d] of tooDeep.slice(0, 20)) console.log(`    ${d} clicks  ${u}`);
if (tooDeep.length > 20) console.log(`    ... and ${tooDeep.length - 20} more`);

const bad = unreachable.length + tooDeep.length;
console.log(bad === 0 ? "\n  OK — every sitemap URL is linked, none deeper than 2 clicks.\n" : `\n  ${bad} problem(s).\n`);
process.exitCode = bad === 0 ? 0 : 1;
