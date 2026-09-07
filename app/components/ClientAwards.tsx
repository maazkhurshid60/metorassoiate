import Link from "next/link";
import { IconArrow } from "./Icons";
import AwardMark from "./AwardMark";
import { awardsFor, type Discipline } from "../lib/awards";

/* Near the bottom of every discipline hub: the award programs the firms we
 * staff actually compete in.
 *
 * Why it's here at all — someone searching "ACEC Engineering Excellence" or
 * "ASHRAE Technology Award" is describing the calibre of work they want to
 * hire for or be hired into, and until now the site had none of that
 * vocabulary anywhere on it. Naming the programs, in context, linked to the
 * body that runs each one, is the honest way to be part of that conversation.
 *
 * What it deliberately does NOT do: claim Metro won anything, name a client,
 * or show an award badge. Metro is a recruiter — it isn't eligible for any of
 * these — and winner marks are licensed to winners. The heading says whose
 * awards these are, and the standfirst says it again in plain words, because
 * a list of awards under a company's name reads as that company's trophy
 * cabinet unless you're explicit.
 */
export default function ClientAwards({
  discipline,
  tone = "light",
}: {
  discipline: Discipline;
  tone?: "paper" | "light";
}) {
  const programs = awardsFor(discipline);

  return (
    <section
      className={`relative border-t border-navy-950/10 py-24 sm:py-28 ${
        tone === "paper" ? "bg-paper" : "blueprint-light"
      }`}
    >
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="mono-label text-amber-500">{"//"} Award-winning clients</span>
          <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
            The awards our clients&rsquo; <span className="text-brand-500">work wins</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate text-pretty">
            We recruit for firms whose projects are entered — and recognised — in
            the programs below. Metro doesn&rsquo;t enter them; a recruiting firm
            isn&rsquo;t eligible. We place the engineers who deliver the work that
            does, which is why we track what these juries reward.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {programs.map((a) => (
            <a
              key={`${a.org}-${a.name}`}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 border border-navy-950/10 bg-white p-6 transition-colors hover:border-amber-500 hover:bg-mist"
            >
              <span className="flex items-center gap-3">
                <AwardMark abbr={a.abbr} org={a.org} logo={a.logo} size="sm" />
                <span className="mono-label text-[10px] text-slate-500">{a.org}</span>
              </span>
              <span className="flex items-start justify-between gap-4">
                <span className="text-[17px] font-bold leading-snug text-navy-950">{a.name}</span>
                <IconArrow className="mt-1 h-4 w-4 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-sm leading-relaxed text-slate-500">{a.what}</span>
              <span className="mono-label mt-auto text-[9px] text-brand-500/80">{a.reach}</span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Every US state and Washington, DC runs its own Engineering Excellence
          competition.{" "}
          <Link
            href="/engineering-awards"
            className="font-bold text-brand-500 underline-offset-4 hover:text-amber-500 hover:underline"
          >
            See the state-by-state list
          </Link>
          .
        </p>

        <p className="mt-3 max-w-3xl text-xs leading-relaxed text-slate-500">
          Each logo is the trademark of the organisation that runs the program, shown to identify it. Metro Associates is not affiliated with, endorsed by, or a winner of any of them — our clients are the entrants.
        </p>
      </div>
    </section>
  );
}
