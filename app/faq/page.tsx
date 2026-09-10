import type { Metadata } from "next";
import Link from "next/link";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import { JsonLd } from "../components/JsonLd";
import { faqSchema, fitTitle, fitDescription } from "../lib/seo";
import { GENERAL_FAQS, SALARY_FAQS, HUB_FAQS } from "../lib/hubFaqs";

/* Every question the site answers, in one place.
 *
 * WHAT IS ANSWERED HERE, AND WHAT IS NOT
 *
 * The general and discipline questions are answered in full, which means each
 * of those answers exists in exactly two places — here, and on the one hub it
 * belongs to. That is a deliberate, bounded trade: ordinary site
 * architecture, and a different thing entirely from the 50-way repetition
 * that put this site's city pages into "Discovered - currently not indexed".
 * It is worth accepting because the point of this content is being quoted by
 * an assistant, and one page holding forty-two answers is a stronger citation
 * target than seven pages holding six each.
 *
 * The pay questions are the exception, and they are the reason to measure
 * rather than assume. Printing those eight answers here as well took the
 * overlap between this page and the salary guide to 52.8% of the smaller
 * page's phrases — the highest anywhere on the site, and against a page that
 * already ranks. So the pay section lists its questions and links out. Those
 * answers are arithmetic on the salary table they sit beneath; they belong
 * next to it, not here.
 *
 * The hub blocks stay because they answer someone already reading about that
 * discipline, in context, which this page cannot do.
 */

type Section = {
  id: string;
  title: string;
  faqs: typeof GENERAL_FAQS;
  href: string | null;
  /** Link out instead of reprinting the answers — see the note below. */
  linkOnly?: true;
};

const SECTIONS: Section[] = [
  { id: "general", title: "Working with Metro Associates", faqs: GENERAL_FAQS, href: null },
  {
    id: "civil",
    title: "Civil engineering",
    faqs: HUB_FAQS["civil-engineering-recruiter"],
    href: "/civil-engineering-recruiter",
  },
  {
    id: "mep",
    title: "MEP engineering",
    faqs: HUB_FAQS["mep-engineering-recruiter"],
    href: "/mep-engineering-recruiter",
  },
  {
    id: "bridge",
    title: "Bridge & structural",
    faqs: HUB_FAQS["bridge-structural-recruiter"],
    href: "/bridge-structural-recruiter",
  },
  {
    id: "water",
    title: "Water & wastewater",
    faqs: HUB_FAQS["water-wastewater-recruiter"],
    href: "/water-wastewater-recruiter",
  },
  {
    id: "cei",
    title: "CEI & inspection",
    faqs: HUB_FAQS["cei-inspection-recruiter"],
    href: "/cei-inspection-recruiter",
  },
  {
    id: "municipal",
    title: "Municipal engineering",
    faqs: HUB_FAQS["municipal-engineering-recruiter"],
    href: "/municipal-engineering-recruiter",
  },
  /* Questions only, and a link. Measured: printing these eight answers here
     as well pushed the overlap between this page and the salary guide to
     52.8% of the smaller page's phrases — by some way the highest on the
     site, and against a page that actually ranks. The pay answers are
     arithmetic on the table they sit under, so the salary guide is where
     they belong; this page points at them instead. */
  {
    id: "pay",
    title: "Engineering pay",
    faqs: SALARY_FAQS,
    href: "/index_themall_awards",
    linkOnly: true,
  },
];

/* The schema covers what this page actually answers. The pay questions are
   marked up on the salary guide, where their answers live. */
const ANSWERED_HERE = SECTIONS.filter((s) => !s.linkOnly).flatMap((s) => s.faqs);
const ALL = SECTIONS.flatMap((s) => s.faqs);

export const metadata: Metadata = {
  title: fitTitle("Engineering Recruiting FAQ"),
  description: fitDescription([
    "Answers on PE licensure and comity, engineering salary bands, CEI, MEP code authorities and structural licensing.",
    `${ALL.length} questions.`,
  ]),
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <HeaderBackdrop />
      <JsonLd data={faqSchema(ANSWERED_HERE)} />

      <main>
        <section className="relative overflow-hidden bg-navy-950 pb-14 pt-28 sm:pb-16 sm:pt-36">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: "url(/blueprints.jpeg)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950"
            aria-hidden
          />
          <div className="container-x relative">
            <span className="mono-label text-amber-400">{"//"} FAQ</span>
            <h1 className="display mt-5 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl">
              Engineering recruiting, answered
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 text-pretty">
              {ALL.length} questions on licensure, pay, disciplines and how a search
              actually runs — the ones we are asked most often by engineers and by the
              firms hiring them.
            </p>

            <nav aria-label="Jump to a section" className="mt-10 flex flex-wrap gap-2">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="mono-label border border-white/20 px-3.5 py-2 text-[10px] text-white/80 transition-colors hover:border-amber-500 hover:text-amber-400"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {SECTIONS.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 border-t border-navy-950/10 py-16 sm:py-20 ${
              i % 2 === 0 ? "bg-paper" : "blueprint-light"
            }`}
          >
            <div className="container-x">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="mono-label text-amber-500">
                    {"//"} {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="display mt-3 text-3xl text-navy-950 sm:text-4xl">{s.title}</h2>
                </div>
                {s.href && (
                  <Link
                    href={s.href}
                    className="mono-label text-[10px] text-brand-500 transition-colors hover:text-amber-500"
                  >
                    {s.title} recruiting &rarr;
                  </Link>
                )}
              </div>

              {s.linkOnly ? (
                <div className="mt-8">
                  <ul className="divide-y divide-navy-950/10 border-t border-navy-950/10">
                    {s.faqs.map((f) => (
                      <li key={f.q} className="py-4">
                        <Link
                          href={`${s.href}#faq`}
                          className="text-[17px] font-bold leading-snug text-navy-950 transition-colors hover:text-amber-600"
                        >
                          {f.q}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[15px] leading-7 text-slate-500">
                    These are answered against the published salary bands themselves, on
                    the{" "}
                    <Link href="/index_themall_awards" className="font-semibold text-brand-500 underline underline-offset-2 hover:text-amber-600">
                      engineering salary guide
                    </Link>
                    .
                  </p>
                </div>
              ) : (
              <div className="mt-8 divide-y divide-navy-950/10 border-t border-navy-950/10">
                {s.faqs.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <h3 className="text-[17px] font-bold leading-snug text-navy-950">{f.q}</h3>
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-amber-500 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-500 text-pretty">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
              )}
            </div>
          </section>
        ))}

        <section className="border-t border-navy-950/10 bg-navy-950 py-16 sm:py-20">
          <div className="container-x">
            <h2 className="display max-w-2xl text-2xl text-white sm:text-3xl">
              Not the question you came with?
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/70 text-pretty">
              Most searches start with a conversation rather than a job description.
              Tell us the discipline, the state the seal has to be valid in, and what
              the team is short of.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="mono-label bg-amber-500 px-6 py-3.5 text-[11px] text-navy-950 transition-colors hover:bg-amber-400"
              >
                Talk to a recruiter &rarr;
              </Link>
              <Link
                href="/index_themall_awards"
                className="mono-label border border-white/25 px-6 py-3.5 text-[11px] text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                Salary guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
