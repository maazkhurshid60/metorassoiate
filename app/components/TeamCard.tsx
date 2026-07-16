import Image from "next/image";
import type { Member } from "../lib/team";

const LINKEDIN_PATH =
  "M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM21 21h-3.38v-6.5c0-1.55-.55-2.6-1.94-2.6-1.06 0-1.69.71-1.97 1.4-.1.25-.13.6-.13.94V21H10.2s.05-11.5 0-12.5h3.38v1.77c.45-.69 1.25-1.68 3.05-1.68 2.23 0 3.9 1.46 3.9 4.6V21Z";

const initials = (name: string) =>
  name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function TeamCard({ m, index }: { m: Member; index: number }) {
  return (
    <article className="group">
      <div className="corners relative overflow-hidden border border-white/12 bg-navy-900 transition-colors duration-500 group-hover:border-amber-500/50">
        <div className="relative aspect-4/5 overflow-hidden">
          {m.photo ? (
            <Image
              src={m.photo}
              alt={m.name}
              fill
              sizes="(max-width: 768px) 50vw, 22vw"
              className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] ${
                m.objectPos ?? "object-center"
              }`}
            />
          ) : (
            // Designed monogram medallion for members without a photo.
            <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
              <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />
              <div className="pointer-events-none absolute left-1/2 top-[40%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/12 blur-2xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-amber-500/40 bg-gradient-to-br from-navy-800 to-navy-950 shadow-[0_0_45px_-8px_rgba(245,165,36,0.45)] transition-transform duration-500 group-hover:scale-105">
                <span className="display text-3xl text-amber-400">{initials(m.name)}</span>
              </div>
            </div>
          )}
          {/* minimal bottom fade — only enough to keep the name readable */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/5 to-transparent" />
        </div>

        <span className="mono-label absolute left-4 top-4 text-[9px] text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>

        <a
          href={m.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${m.name} on LinkedIn`}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-navy-950/60 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-amber-500 hover:bg-amber-500 hover:text-navy-950"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
            <path d={LINKEDIN_PATH} />
          </svg>
        </a>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-lg font-bold leading-tight text-white">{m.name}</h3>
          <p className="mono-label mt-1.5 text-[9px] text-amber-400">{m.role}</p>
          <span className="mt-3 block h-0.5 w-7 origin-left bg-amber-500 transition-all duration-500 group-hover:w-12" />
        </div>
      </div>
    </article>
  );
}
