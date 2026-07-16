import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "../components/Icons";
import { TEAM } from "../lib/team";
import TeamCard from "../components/TeamCard";

export const metadata: Metadata = {
  title: "Meet Our Team — Metro Associates | DOT & Infrastructure Recruiters",
  description:
    "Meet the Metro Associates recruiting team — specialists in engineering, transportation, and DOT staffing. Connect with our recruiters on LinkedIn.",
};

export default function MeetOurTeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden blueprint pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-blink bg-amber-500" />
            <span className="mono-label text-amber-400">{"//"} Meet Our Team</span>
          </div>
          <h1 className="display mt-6 max-w-4xl text-[12vw] leading-[0.92] text-white sm:text-6xl lg:text-[5rem]">
            The people behind{" "}
            <span className="text-brand-400">every placement</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
            Our recruiters include former engineers and military-trained talent
            specialists who understand engineering, transportation, and the
            regulatory landscape — because they&apos;ve lived it.
          </p>
        </div>
      </section>

      {/* Roster */}
      <section className="relative border-t border-white/10 bg-navy-950 py-20 sm:py-24">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-5">
            <span className="mono-label text-amber-500">{"//"} The Roster</span>
            <span className="mono-label text-[10px] text-ink-500">
              {String(TEAM.length).padStart(2, "0")} specialists
            </span>
          </div>

          <div className="reveal-children grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {TEAM.map((m, i) => (
              <TeamCard key={m.name} m={m} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-white/10 bg-navy-900 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold text-white">Work with our team</h2>
              <p className="mt-2 text-ink-300">
                Tell us about the role — we&apos;ll put the right specialist on
                your search.
              </p>
            </div>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
            >
              Request Talent
              <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
