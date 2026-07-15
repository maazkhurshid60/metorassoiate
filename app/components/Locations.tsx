import { IconPin, IconArrow } from "./Icons";
import UsMap from "./UsMap";

const OFFICES = [
  { city: "Orlando", state: "FL", full: "Orlando, Florida", coord: "28.5°N", hq: true },
  { city: "Boston", state: "MA", full: "Boston, Massachusetts", coord: "42.4°N" },
  { city: "Washington", state: "DC", full: "Washington, D.C.", coord: "38.9°N" },
  { city: "Atlanta", state: "GA", full: "Atlanta, Georgia", coord: "33.7°N" },
  { city: "Dallas", state: "TX", full: "Dallas, Texas", coord: "32.8°N" },
  { city: "Los Angeles", state: "CA", full: "Los Angeles, California", coord: "34.1°N" },
  { city: "New York", state: "NY", full: "New York City, New York", coord: "40.7°N" },
  { city: "Hartford", state: "CT", full: "Hartford, Connecticut", coord: "41.8°N" },
];

const mapsUrl = (place: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Metro Associates " + place
  )}`;

export default function Locations() {
  return (
    <section id="locations" className="relative overflow-hidden border-t border-white/10 bg-navy-950 py-24 sm:py-28">
      {/* U.S. coverage map background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <UsMap className="h-full w-full max-w-6xl opacity-80 [mask-image:radial-gradient(ellipse_80%_75%_at_50%_50%,#000_55%,transparent_92%)]" />
      </div>

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} 08 — Coverage · United States</span>
            <h2 className="display mt-5 text-4xl text-white sm:text-5xl">
              Local expertise, coast to coast
            </h2>
          </div>
          <p className="max-w-md text-ink-300 text-pretty">
            Recruiters who understand regional DOT requirements, labor markets,
            and infrastructure programs in nine U.S. hubs.
          </p>
        </div>

        <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {OFFICES.map((o) => (
            <a
              key={o.city}
              href={mapsUrl(o.full)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between bg-navy-900/70 p-6 backdrop-blur-sm transition-colors hover:bg-navy-850/90"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-white/12 text-brand-400 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                  <IconPin className="h-5 w-5" />
                </span>
                {o.hq ? (
                  <span className="mono-label bg-amber-500 px-2 py-0.5 text-[9px] text-navy-950">
                    HQ
                  </span>
                ) : (
                  <span className="mono-label text-[9px] text-ink-500">{o.coord}</span>
                )}
              </div>
              <div className="mt-8">
                <p className="text-lg font-bold text-white">{o.city}</p>
                <p className="mono-label mt-1 text-[9px] text-ink-400">
                  {o.state} · United States
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-amber-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Directions <IconArrow className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={mapsUrl("offices United States")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
          >
            View All Offices
            <IconArrow className="h-4.5 w-4.5 text-amber-500 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="mono-label text-ink-500">9 locations · nationwide coverage</span>
        </div>
      </div>
    </section>
  );
}
