import Link from "next/link";
import { IconArrow } from "./Icons";
import { TEAM } from "../lib/team";
import TeamCard from "./TeamCard";

export default function Team() {
  const preview = TEAM.slice(0, 5);

  return (
    <section id="team" className="relative border-t border-white/10 bg-navy-950 py-24 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} 06 — Meet Our Team</span>
            <h2 className="display mt-5 text-4xl text-white sm:text-5xl">
              The recruiters behind the results
            </h2>
          </div>
          <p className="max-w-md text-ink-300 text-pretty">
            Specialists who understand engineering, transportation, and the
            regulatory landscape — because they&apos;ve lived it.
          </p>
        </div>

        <div className="reveal-children mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {preview.map((m, i) => (
            <TeamCard key={m.name} m={m} index={i} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/meet-our-team"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white"
          >
            <span className="border-b-2 border-amber-500 pb-1">
              Meet the full team ({TEAM.length})
            </span>
            <IconArrow className="h-4.5 w-4.5 text-amber-500 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
