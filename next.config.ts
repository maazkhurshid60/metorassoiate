import type { NextConfig } from "next";
import { CITIES } from "./app/lib/cities";

// 301 redirects for legacy URLs indexed by Google on the previous site, so
// visitors and crawlers never land on a 404. Precise old->new city mappings
// (best for SEO) come first; broad catch-alls send anything else to the
// relevant hub page.
async function redirects() {
  // Old city URLs used the prefixes "1seo-civil-engineering-recruiter-<slug>"
  // and "civil-engineering-recruiter-<slug>". Map the ones whose slug matches a
  // real city straight to that city page.
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
    // NOTE: www<->apex canonicalization is handled at the Vercel domain level,
    // NOT here. A host-based redirect in this config conflicts with Vercel's
    // domain redirect and causes an infinite loop (ERR_TOO_MANY_REDIRECTS).

    // Legacy standalone pages
    { source: "/contact-us-2", destination: "/contact", permanent: true },
    { source: "/contact-us", destination: "/contact", permanent: true },
    { source: "/privacy-policy-2", destination: "/privacy", permanent: true },
    { source: "/privacy-policy", destination: "/privacy", permanent: true },
    { source: "/terms-2", destination: "/terms", permanent: true },
    { source: "/about-us", destination: "/about", permanent: true },

    // Explicit aliases: old slugs that don't match our city slug format but
    // clearly map to a specific city page.
    {
      source: "/1seo-civil-engineering-recruiter-new-york",
      destination: "/civil-engineering-recruiter/new-york-ny",
      permanent: true,
    },
    {
      source: "/1seo-civil-engineering-recruiter-new-york-city",
      destination: "/civil-engineering-recruiter/new-york-ny",
      permanent: true,
    },
    {
      source: "/new-jersey-civil-engineering-recruiter",
      destination: "/civil-engineering-recruiter/newark-nj",
      permanent: true,
    },
    {
      source: "/civil-engineering-recruiter-indiana",
      destination: "/civil-engineering-recruiter/indianapolis-in",
      permanent: true,
    },

    // Precise old->new city mappings generated from the city list.
    ...cityRedirects,

    // Catch-alls: any remaining old civil URL (states, topic hubs, cities we
    // don't have a page for) -> the civil hub, so nobody hits a 404.
    // Covers "civil-engineering-recruiter-<x>" and "1seo-...-<x>" ...
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
    // ... and the "state-first" pattern, e.g. "/north-dakota-civil-engineering-recruiter".
    {
      source: "/:state-civil-engineering-recruiter",
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
