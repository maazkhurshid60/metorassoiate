import type { Metadata } from "next";
import Link from "next/link";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import { JsonLd } from "../components/JsonLd";
import { breadcrumbSchema, faqSlugs, fitTitle, fitDescription } from "../lib/seo";
import { FAQ_GROUPS, FAQ_TOTAL } from "../lib/hubFaqs";

/* The index of every question the site answers.
 *
 * WHY THIS PAGE STOPPED CARRYING THE ANSWERS
 *
 * It used to print all fifty in an accordion. Once each question got its own
 * page under /faq/, keeping them here as well would have put every answer in
 * three places — its own page, this index, and the hub it belongs to. Two is
 * a defensible trade for context; three is the pattern that put this site's
 * city pages into "Discovered - currently not indexed".
 *
 * So this is a directory: every question, grouped, each linking to the page
 * that answers it. That is also what makes it useful — fifty collapsed
 * accordion rows are harder to scan than fifty links, and every row here is
 * now a real internal link into a page that needs them.
 *
 * No FAQPage schema, deliberately: this page no longer contains answers, and
 * marking up questions whose answers live elsewhere would be describing a
 * page that does not exist.
 */

export const metadata: Metadata = {
  title: fitTitle("Engineering Recruiting FAQ"),
  description: fitDescription([
    "Answers on PE licensure and comity, engineering salary bands, CEI certifications, MEP code authorities and structural licensing.",
    `${FAQ_TOTAL} questions.`,
  ]),
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  /* Anchors for every question, so this index links to the answer rather
     than to the top of the page holding it. Same derivation the group pages
     use, so the two cannot drift apart. */
  const slugs = Object.fromEntries(
    FAQ_GROUPS.map((g) => [g.id, faqSlugs(g.faqs)]),
  ) as Record<string, string[]>;

  return (
    <>
      <HeaderBackdrop />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />

      <main>
        <section className="relative overflow-hidden bg-navy-950 pb-14 pt-28 sm:pb-16 sm:pt-36">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: "url(/blueprints.jpeg)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-linear-to-b from-navy-950/70 via-navy-950/85 to-navy-950"
            aria-hidden
          />
          <div className="container-x relative">
            <span className="mono-label text-amber-400">{"//"} FAQ</span>
            <h1 className="display mt-5 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl">
              Engineering recruiting, answered
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 text-pretty">
              {`${FAQ_TOTAL} questions on licensure, pay, disciplines and how a search actually
              runs, the ones we are asked most often by engineers and by the firms
              hiring them. Each has its own page.`}
            </p>

            <nav aria-label="Jump to a section" className="mt-10 flex flex-wrap gap-2">
              {FAQ_GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="mono-label border border-white/20 px-3.5 py-2 text-[10px] text-white/80 transition-colors hover:border-amber-500 hover:text-amber-400"
                >
                  {g.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {FAQ_GROUPS.map((g, i) => (
          <section
            key={g.id}
            id={g.id}
            className={`scroll-mt-24 border-t border-navy-950/10 py-14 sm:py-16 ${
              i % 2 === 0 ? "bg-paper" : "blueprint-light"
            }`}
          >
            <div className="container-x">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="mono-label text-amber-500">
                    {`// ${String(i + 1).padStart(2, "0")}`}
                  </span>
                  <h2 className="display mt-3 text-3xl text-navy-950 sm:text-4xl">{g.title}</h2>
                </div>
                {g.href && (
                  <Link
                    href={g.href}
                    className="mono-label text-[10px] text-brand-500 transition-colors hover:text-amber-500"
                  >
                    {`${g.title} recruiting →`}
                  </Link>
                )}
              </div>

              <ul className="mt-8 divide-y divide-navy-950/10 border-t border-navy-950/10">
                {g.faqs.map((f, j) => (
                  <li key={f.q}>
                    <Link
                      href={`/faq/${g.id}#${slugs[g.id][j]}`}
                      className="group flex items-baseline justify-between gap-6 py-4 transition-colors"
                    >
                      <span className="text-[17px] font-semibold leading-snug text-navy-950 group-hover:text-amber-600">
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
