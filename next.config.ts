import type { NextConfig } from "next";
import { CITIES } from "./app/lib/cities";

// 301 redirects for legacy URLs indexed by Google on the previous site, so
// visitors and crawlers never land on a 404. Precise old→new city mappings
// (best for SEO) come first; broad catch-alls send anything else to the
// relevant hub page.
async function redirects() {
  // Old city URLs used two prefixes: "1seo-civil-engineering-recruiter-<slug>"
  // and "civil-engineering-recruiter-<slug>". Map the ones that match a real
  // city straight to that city page.
  const cityRedirects = CITIES.flatMap((c) => [
    {
      source: `/1seo-civil-engineering-recruiter-${c.slug}`,
      destination: `/civil-engineering-recruiter/${c.slug}`,
      permanent: true,
    },
    {
      source: `/civil-engineering-recruiter-${c.slug}`,
      destination: `/civil-engineering-recruiter/${c.slug}`,
      permanent: true,
    },
  ]);

  return [
    // Legacy standalone pages
    { source: "/contact-us-2", destination: "/contact", permanent: true },
    { source: "/contact-us", destination: "/contact", permanent: true },
    { source: "/privacy-policy-2", destination: "/privacy", permanent: true },
    { source: "/privacy-policy", destination: "/privacy", permanent: true },
    { source: "/terms-2", destination: "/terms", permanent: true },
    { source: "/about-us", destination: "/about", permanent: true },

    // Precise old→new city mappings (must precede the catch-alls below)
    ...cityRedirects,

    // Catch-all: any remaining old civil URL (states, topic hubs, unknown
    // cities) → the civil hub page, so nobody hits a 404.
    {
      source: "/1seo-civil-engineering-recruiter-:slug",
      destination: "/civil-engineering-recruiter",
      permanent: true,
    },
    {
      source: "/civil-engineering-recruiter-:slug",
      destination: "/civil-engineering-recruiter",
      permanent: true,
    },
  ];
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "metroassoc.com",
      },
    ],
  },
  redirects,
};

export default nextConfig;
