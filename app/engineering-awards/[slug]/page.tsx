import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderBackdrop } from "../../components/HeaderBackdrop";
import AwardMark from "../../components/AwardMark";
import { AWARD_PROGRAMS, awardBySlug, type AwardProgram } from "../../lib/awards";
import { SITE_URL } from "../../lib/site";

/* One page per award program.
 *
 * The keyword research is what shaped these, so it is worth recording:
 * the head term for every one of these programs is owned outright by the
 * body that runs it. "ACEC Engineering Excellence Awards" returns acec.org
 * plus its state organizations for the whole first page; "ASHRAE Technology
 * Awards" returns ASHRAE's own application PDFs and chapter sites. A
 * recruiting firm is not going to outrank the awarding body for the name of
 * its own award, and building fourteen pages that try would be fourteen
 * pages of nothing.
 *
 * So these target what nobody owns: the entry route spelled out in one
 * place, and what the award actually tells you when it turns up on a CV.
 * That second part is the reason this sits on a recruiter's site at all,
 * and it is the part an AI answer can cite, which is the traffic these are
 * really for. Every page states plainly that Metro does not enter and is
 * not eligible — the same disclosure the hub sections carry.
 */

const DISCIPLINE_LABELS: Record<string, string> = {
  "civil-engineering-recruiter": "Civil",
  "bridge-structural-recruiter": "Bridge & Structural",
  "cei-inspection-recruiter": "CEI & Inspection",
  "mep-engineering-recruiter": "MEP",
  "municipal-engineering-recruiter": "Municipal",
  "water-wastewater-recruiter": "Water & Wastewater",
};

export function generateStaticParams() {
  return AWARD_PROGRAMS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = awardBySlug(slug);
  if (!a) return {};

  /* Not "<Award name>" on its own — that is the awarding body's term and we
     lose it. The qualifier is the part we can actually rank for. */
  const title = `${a.name} (${a.abbr}) — who enters, and what it signals`;
  return {
    title: title.length > 60 ? `${a.abbr} ${a.name} — what it signals in hiring` : title,
    description: `How the ${a.org} ${a.name} works — who enters, the route from local to national, and what it tells you about an engineer's experience. From Metro Associates' engineering recruiters.`,
    alternates: { canonical: `${SITE_URL}/engineering-awards/${a.slug}` },
  };
}

function Related({ current }: { current: AwardProgram }) {
  /* Programs that touch at least one of the same disciplines. Keeps each
     page connected to the others rather than leaving fourteen dead ends,
     which is half of why an isolated page never gets indexed. */
  const mine = current.disciplines === "all" ? null : current.disciplines;
  const related = AWARD_PROGRAMS.filter((a) => {
    if (a.slug === current.slug) return false;
    if (!mine || a.disciplines === "all") return true;
    return a.disciplines.some((d) => mine.includes(d));
  }).slice(0, 6);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-navy-950/10 bg-paper py-16 sm:py-20">
      <div className="container-x">
        <h2 className="display text-2xl text-navy-950 sm:text-3xl">
          Other programs the same firms enter
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((a) => (
            <Link
              key={a.slug}
              href={`/engineering-awards/${a.slug}`}
              className="group flex flex-col gap-3 border border-navy-950/10 bg-white p-5 transition-colors hover:border-amber-500 hover:bg-mist"
            >
              <AwardMark abbr={a.abbr} org={a.org} logo={a.logo} onDark={a.onDark} size="sm" />
              <span className="text-[15px] font-bold leading-snug text-navy-950">{a.name}</span>
              <span className="mono-label text-[9px] text-brand-500/80">{a.org}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function AwardDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = awardBySlug(slug);
  if (!a) notFound();

  const disciplineList =
    a.disciplines === "all"
      ? Object.values(DISCIPLINE_LABELS)
      : a.disciplines.map((d) => DISCIPLINE_LABELS[d]);

  const hubs =
    a.disciplines === "all"
      ? (Object.keys(DISCIPLINE_LABELS) as string[])
      : (a.disciplines as string[]);

  return (
    <>
      <HeaderBackdrop />

      <main>
        {/* Hero — dark, matching the awards index. The body is navy, so a
            light section further down has to paint its own ground. */}
        <section className="relative overflow-hidden bg-navy-950 pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: "url(/blueprints.jpeg)" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950" aria-hidden />

          <div className="container-x relative">
            <nav aria-label="Breadcrumb" className="mono-label text-[10px] text-white/45">
              <Link href="/engineering-awards" className="hover:text-amber-400">
                Engineering awards
              </Link>
              <span className="px-2 text-white/25">/</span>
              <span className="text-white/70">{a.org}</span>
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AwardMark abbr={a.abbr} org={a.org} logo={a.logo} onDark={a.onDark} size="lg" />
              <span className="mono-label text-[11px] text-amber-400">{a.org}</span>
            </div>

            <h1 className="display mt-6 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl">
              {a.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 text-pretty">{a.what}</p>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
              <div>
                <dt className="mono-label text-[10px] text-white/40">Reach</dt>
                <dd className="mt-1 text-sm text-white/85">{a.reach}</dd>
              </div>
              <div>
                <dt className="mono-label text-[10px] text-white/40">Run by</dt>
                <dd className="mt-1 text-sm text-white/85">{a.org}</dd>
              </div>
              <div>
                <dt className="mono-label text-[10px] text-white/40">Disciplines</dt>
                <dd className="mt-1 text-sm text-white/85">{disciplineList.join(" · ")}</dd>
              </div>
            </dl>

            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label mt-8 inline-flex items-center gap-2 border border-amber-500/50 px-5 py-3 text-[11px] text-amber-400 transition-colors hover:bg-amber-500 hover:text-navy-950"
            >
              Official rules at {a.org} &rarr;
            </a>
          </div>
        </section>

        {/* Who enters + the route */}
        <section className="border-t border-navy-950/10 bg-paper py-16 sm:py-20">
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="mono-label text-amber-500">{"//"} 01</span>
              <h2 className="display mt-4 text-2xl text-navy-950 sm:text-3xl">Who enters</h2>
              <p className="mt-5 text-[17px] leading-8 text-slate text-pretty">{a.whoEnters}</p>

              <h3 className="display mt-10 text-xl text-navy-950">Categories include</h3>
              <p className="mt-2 text-sm text-slate-500">
                A sample, not the full list — these programs restructure their categories
                between years. {a.org} publishes the current one.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {a.categories.map((c) => (
                  <li
                    key={c}
                    className="border border-navy-950/10 bg-white px-3 py-1.5 text-[13px] text-navy-950"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="mono-label text-amber-500">{"//"} 02</span>
              <h2 className="display mt-4 text-2xl text-navy-950 sm:text-3xl">
                The route, start to finish
              </h2>
              <ol className="mt-8 space-y-px overflow-hidden border border-navy-950/10 bg-navy-950/10">
                {a.route.map((step, i) => (
                  <li key={step} className="flex gap-4 bg-white p-5">
                    <span className="mono-label shrink-0 text-[11px] text-amber-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-7 text-navy-950">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* The hiring read — the reason this is on a recruiter's site */}
        <section className="border-t border-navy-950/10 blueprint-light py-16 sm:py-20">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="mono-label text-amber-500">{"//"} 03</span>
              <h2 className="display mt-4 text-2xl text-navy-950 sm:text-3xl">
                What it signals when you&rsquo;re hiring
              </h2>
              <p className="mt-3 text-sm text-slate-500">
                Metro Associates&rsquo; own read, not {a.org}&rsquo;s.
              </p>
              <p className="mt-6 border-l-2 border-amber-500 bg-white p-6 text-[17px] leading-8 text-navy-950 text-pretty">
                {a.hiringSignal}
              </p>
            </div>

            <div className="mt-12">
              <h3 className="mono-label text-[11px] text-slate-500">
                Roles whose work ends up in an entry like this
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {a.roles.map((r) => (
                  <li
                    key={r}
                    className="border border-navy-950/10 bg-white px-3 py-1.5 text-[13px] text-navy-950"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {hubs.map((h) => (
                <Link
                  key={h}
                  href={`/${h}`}
                  className="mono-label border border-navy-950/15 bg-white px-4 py-2.5 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
                >
                  {DISCIPLINE_LABELS[h]} recruiting &rarr;
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Related current={a} />

        {/* Disclosure — the same one the hub sections carry, because this
            page shows a trademark and names a program we have no part in. */}
        <section className="border-t border-navy-950/10 bg-navy-950 py-16 sm:py-20">
          <div className="container-x">
            <h2 className="display max-w-2xl text-2xl text-white sm:text-3xl">
              We staff the firms that enter. We don&rsquo;t enter.
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/70 text-pretty">
              Metro Associates is a recruiting firm, and a recruiting firm is not eligible for an
              engineering award. We are not affiliated with, endorsed by, or a winner of the{" "}
              {a.name}. The {a.org} name and mark belong to {a.org}, shown here to identify the
              program it runs. What we do is place the engineers whose work goes into entries
              like it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="mono-label bg-amber-500 px-6 py-3.5 text-[11px] text-navy-950 transition-colors hover:bg-amber-400"
              >
                Talk to a recruiter &rarr;
              </Link>
              <Link
                href="/engineering-awards"
                className="mono-label border border-white/25 px-6 py-3.5 text-[11px] text-white transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                All award programs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${a.name} — who enters and what it signals`,
            about: {
              "@type": "Thing",
              name: a.name,
              sameAs: a.url,
            },
            /* The organisation that RUNS the award, so the graph does not
               read as though Metro awards or won it. */
            mentions: { "@type": "Organization", name: a.org, url: a.url },
            publisher: { "@type": "Organization", name: "Metro Associates" },
            url: `${SITE_URL}/engineering-awards/${a.slug}`,
          }),
        }}
      />
    </>
  );
}
