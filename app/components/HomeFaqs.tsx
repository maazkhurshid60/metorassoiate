import Link from "next/link";
import { GENERAL_FAQS, FAQ_GROUPS, FAQ_TOTAL } from "../lib/hubFaqs";

/**
 * The homepage FAQ block.
 *
 * Uses GENERAL_FAQS rather than any discipline's six, on purpose: someone on
 * the homepage is asking what this firm covers, where it operates and who
 * pays the fee — not how PE comity works. Reusing a hub's answers here would
 * put identical text on two pages while serving neither reader properly.
 *
 * Six answers, then a route into every other group. Each topic links to the
 * section of /faq that answers it — so a visitor whose question is about
 * licensure or CEI certifications reaches those answers from the homepage
 * rather than having to guess which discipline page holds them.
 */

/* The groups on /faq, with the count each one answers. Read from the same
   data the FAQ page renders, so a question added anywhere shows up here
   without this list being touched. */
const GROUPS = FAQ_GROUPS.filter((g) => g.id !== "working-with-metro-associates");

export default function HomeFaqs() {
  return (
    <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="mono-label text-amber-500">{"//"} 09 / Questions</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              The things people ask us first
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate text-pretty">
              What we cover, where we work, and who pays. The discipline-specific
              questions (licensure, pay bands, certifications) are answered in
              full on our FAQ.
            </p>
            <Link
              href="/faq"
              className="mono-label mt-8 inline-flex items-center gap-2 border border-navy-950/20 px-5 py-3 text-[11px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
            >
              {`All ${FAQ_TOTAL} questions →`}
            </Link>

            {/* A route straight to the answers for each discipline, rather
                than one undifferentiated link to the whole page. */}
            <div className="mt-8 border-t border-navy-950/10 pt-6">
              <p className="mono-label text-[10px] text-slate-500">Answered in detail</p>
              <ul className="mt-3 space-y-1.5">
                {GROUPS.map((g) => (
                  <li key={g.id}>
                    <Link
                      href={`/faq/${g.id}`}
                      className="group/link flex items-baseline justify-between gap-3 py-1 text-[15px] text-navy-950 transition-colors hover:text-amber-600"
                    >
                      <span className="font-semibold">{g.title}</span>
                      <span className="mono-label text-[9px] text-slate-500 transition-colors group-hover/link:text-amber-600">
                        {`${g.faqs.length} questions →`}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="divide-y divide-navy-950/10 border-t border-navy-950/10">
            {GENERAL_FAQS.map((f) => (
              <li key={f.q}>
                <Link
                  href="/faq/working-with-metro-associates"
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <span className="text-[17px] font-bold leading-snug text-navy-950 group-hover:text-amber-600">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className="mono-label shrink-0 text-[9px] text-slate-500 transition-colors group-hover:text-amber-600"
                  >
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
