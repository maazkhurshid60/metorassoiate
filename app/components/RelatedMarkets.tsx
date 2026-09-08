import Link from "next/link";
import {
  nearbyMarkets,
  siblingDisciplines,
  type HubSegment,
  type MarketLink,
} from "../lib/markets";

/**
 * The block that closes every city page: nearby markets in the same
 * discipline, and the same market in the other disciplines.
 *
 * Replaces a list of all 49 sibling cities that was byte-identical on all
 * fifty pages of a hub — see app/lib/markets.ts for the measurement. Both
 * lists here vary with the city, so the block stops reading as boilerplate,
 * and the second one is new: nothing previously linked Boston MEP to Boston
 * Civil, though they are the same market and often the same client.
 */
export default function RelatedMarkets<T extends MarketLink>({
  hub,
  hubLabel,
  all,
  current,
}: {
  hub: HubSegment;
  /** Lower-case discipline name for the heading, e.g. "MEP engineering". */
  hubLabel: string;
  all: T[];
  current: T;
}) {
  const { division, markets } = nearbyMarkets(all, current);
  const siblings = siblingDisciplines(hub, current.slug);

  return (
    <div className="mt-14 grid gap-10 border-t border-navy-950/10 pt-10 lg:grid-cols-2">
      <div>
        <p className="mono-label text-slate-500">
          {hubLabel} recruiting across {division}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {markets.map((x) => (
            <Link
              key={x.slug}
              href={`/${hub}/${x.slug}`}
              className="border border-navy-950/12 bg-white px-3 py-1.5 text-xs font-medium text-navy-950 transition-colors hover:border-amber-500 hover:text-amber-600"
            >
              {x.city}, {x.abbr}
            </Link>
          ))}
          <Link
            href={`/${hub}`}
            className="border border-navy-950/12 bg-navy-950 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-amber-500 hover:text-navy-950"
          >
            All markets &rarr;
          </Link>
        </div>
      </div>

      <div>
        <p className="mono-label text-slate-500">
          Other engineering disciplines in {current.city}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {siblings.map((s) => (
            <Link
              key={s.segment}
              href={s.href}
              className="border border-navy-950/12 bg-white px-3 py-1.5 text-xs font-medium text-navy-950 transition-colors hover:border-amber-500 hover:text-amber-600"
            >
              {s.label} in {current.city}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
