// Tells IndexNow (Bing, and other participating engines) about every URL in
// our sitemaps, instead of waiting for a crawl. Run after each deploy:
//   npm run indexnow
//
// Fetches the live sitemaps (not local files) so it always reflects exactly
// what's actually published, and reads the key from public/<key>.txt so
// there's a single source of truth for it.

import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SITE_URL = "https://www.metroassoc.com";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const keyFile = readdirSync(publicDir).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("No IndexNow key file found in public/ (expected <32-hex-chars>.txt)");
  process.exit(1);
}
const key = readFileSync(path.join(publicDir, keyFile), "utf8").trim();

async function fetchLocs(sitemapPath) {
  const res = await fetch(`${SITE_URL}${sitemapPath}`);
  if (!res.ok) {
    console.warn(`Skipping ${sitemapPath}: ${res.status}`);
    return [];
  }
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urls = [...new Set([...(await fetchLocs("/sitemap.xml")), ...(await fetchLocs("/sitemap-priority.xml"))])];

if (urls.length === 0) {
  console.error("No URLs found in either sitemap — aborting.");
  process.exit(1);
}

console.log(`Submitting ${urls.length} URLs to IndexNow...`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "www.metroassoc.com",
    key,
    keyLocation: `${SITE_URL}/${keyFile}`,
    urlList: urls,
  }),
});

// IndexNow returns 200 (or 202) on success; no response body is expected.
console.log(`IndexNow response: ${res.status} ${res.statusText}`);
if (!res.ok) {
  const body = await res.text().catch(() => "");
  console.error(body);
  process.exit(1);
}
