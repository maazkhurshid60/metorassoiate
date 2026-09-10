import Link from "next/link";
import { otherHubPrograms, type HubSegment } from "../lib/markets";

/**
 * What the other four disciplines are seeing in this city.
 *
 * Every hub's data file already held five checked, city-specific programme
 * entries per city — 25 per metro across the five files — and each page
 * rendered only its own five, while padding itself out with hub boilerplate
 * that read the same on all fifty city pages. This puts the other twenty to
 * work.
 *
 * It is the inverse of the blocks that were removed: written per city rather
 * than per hub, and different on each of the five pages for a given city,
 * because each one shows the *other* four disciplines. It also earns its
 * place for a reader — an MEP engineer weighing up Boston learns what else
 * is being built there, and gets a route into the discipline that owns it.
 */
export default function CityWiderMarket({
  hub,
  city,
}: {
  hub: HubSegment;
  city: { slug: string; city: string };
}) {
  const others = otherHubPrograms(hub, city.slug);
  if (others.length === 0) return null;

  return (
    <section className="relative border-t border-navy-950/10 bg-paper py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="mono-label text-amber-500">{"//"} The wider {city.city} market</span>
          <h2 className="display mt-5 text-3xl text-navy-950 sm:text-4xl">
            What else is being built in {city.city}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate text-pretty">
            Our other practices are working the same metro. The programs below are
            what they are staffing in {city.city} right now, useful context if your
            project sits across more than one discipline, which most of them do.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2">
          {others.map((h) => (
            <div key={h.segment} className="flex flex-col bg-white p-7">
              <Link
                href={h.href}
                className="mono-label text-[10px] text-brand-500 transition-colors hover:text-amber-500"
              >
                {h.label} in {city.city} &rarr;
              </Link>
              <ul className="mt-4 space-y-2.5">
                {h.programs.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-7 text-navy-950">
                    <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 bg-amber-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
