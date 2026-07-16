import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "./Icons";
import { TEAM } from "../lib/team";
import TeamCard from "./TeamCard";

const LINKEDIN_PATH =
  "M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM21 21h-3.38v-6.5c0-1.55-.55-2.6-1.94-2.6-1.06 0-1.69.71-1.97 1.4-.1.25-.13.6-.13.94V21H10.2s.05-11.5 0-12.5h3.38v1.77c.45-.69 1.25-1.68 3.05-1.68 2.23 0 3.9 1.46 3.9 4.6V21Z";

export default function Team() {
  const lead = TEAM[0];
  const rest = TEAM.slice(1, 5);

  return (
    <section
      id="team"
      className="relative overflow-hidden border-t border-white/10 blueprint py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-brand-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="container-x relative">
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

        {/* Lead spotlight */}
        <div className="corners relative mt-14 grid overflow-hidden border border-white/12 bg-navy-900 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[340px] lg:min-h-[440px]">
            {lead.photo && (
              <Image
                src={lead.photo}
                alt={lead.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy-900/20 lg:to-navy-900" />
            <span className="mono-label absolute left-5 top-5 text-[10px] text-white/70">
              01 — Lead
            </span>
          </div>

          <div className="flex flex-col justify-center gap-4 p-8 sm:p-10 lg:p-12">
            <span className="mono-label text-amber-500">Managing Partner</span>
            <h3 className="display text-3xl text-white sm:text-4xl lg:text-5xl">
              {lead.name}
            </h3>
            <p className="max-w-xl text-[15px] leading-8 text-ink-300 text-pretty sm:text-base">
              With more than four decades of combined experience, Patrick leads
              Metro Associates&apos; engineering recruiting and executive search
              practice — pairing state DOTs, municipalities, and infrastructure
              firms with vetted talent that delivers on publicly funded programs.
            </p>
            <a
              href={lead.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex w-fit items-center gap-2.5 border border-white/20 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-amber-500 hover:text-amber-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d={LINKEDIN_PATH} />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Supporting recruiters */}
        <div className="reveal-children mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {rest.map((m, i) => (
            <TeamCard key={m.name} m={m} index={i + 1} />
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
