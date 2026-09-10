import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderBackdrop } from "../../components/HeaderBackdrop";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbSchema, faqSchema, faqSlugs, pickTitle, fitDescription } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";
import { FAQ_GROUPS, faqGroup, FAQ_TOTAL } from "../../lib/hubFaqs";

/* One page per group of questions.
 *
 * This is the canonical home for these answers — the discipline hubs, the
 * homepage and the salary guide list their questions and link here rather
 * than reprinting them. See the note in lib/hubFaqs.ts for why: an earlier
 * attempt gave every question its own page, and measured 67.5% duplicate
 * against its siblings and 80.2% against its own hub, which is the band the
 * city pages Google refuses to index sit in.
 *
 * Answers are in the markup unconditionally, inside <details> rather than a
 * JS accordion, because what a crawler reads is the DOM it is served.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return FAQ_GROUPS.map((g) => ({ group: g.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string }>;
}): Promise<Metadata> {
  const { group } = await params;
  const g = faqGroup(group);
  if (!g) return {};
  return {
    title: pickTitle([
      `${g.title} recruiting, FAQ | Metro Associates`,
      `${g.title}, recruiting FAQ`,
      `${g.title} FAQ`,
    ]),
    description: fitDescription([g.blurb, `${g.faqs.length} questions answered.`]),
    alternates: { canonical: `/faq/${g.id}` },
  };
}

export default async function FaqGroupPage({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group } = await params;
  const g = faqGroup(group);
  if (!g) notFound();

  const others = FAQ_GROUPS.filter((x) => x.id !== g.id);
  const slugs = faqSlugs(g.faqs);
  const pageUrl = `${SITE_URL}/faq/${g.id}`;

  return (
    <>
      <HeaderBackdrop />
      <JsonLd
        data={[
          faqSchema(g.faqs, pageUrl),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
            { name: g.title, path: `/faq/${g.id}` },
          ]),
        ]}
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
            <nav aria-label="Breadcrumb" className="mono-label text-[10px] text-white/45">
              <Link href="/faq" className="hover:text-amber-400">
                FAQ
              </Link>
              <span className="px-2 text-white/25">/</span>
              <span className="text-white/70">{g.title}</span>
            </nav>

            <h1 className="display mt-6 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl">
              {`${g.title}, questions`}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 text-pretty">{g.blurb}</p>

            {g.href && (
              <Link
                href={g.href}
                className="mono-label mt-8 inline-flex items-center gap-2 border border-amber-500/50 px-5 py-3 text-[11px] text-amber-400 transition-colors hover:bg-amber-500 hover:text-navy-950"
              >
                {`${g.title} recruiting →`}
              </Link>
            )}
          </div>
        </section>

        {/* Glossary layout.

            The index is the point of it. Every question is a numbered entry
            with its own anchor, so a question can be linked to directly
            rather than by sending someone to the top of a page holding eight
            answers and asking them to scan. That matters twice over here:
            the /faq index links straight to the answer instead of the page,
            and the schema gives each question the same anchor as its @id, so
            a retrieval crawler citing one of these lands the reader on it.

            Not a <dl>, despite being a glossary. The HTML spec forbids
            heading content inside <dt>, and these questions are worth more as
            real <h2>s than the definition-list element is worth: heading
            structure is how both search engines and the retrieval crawlers
            this content targets segment a page, and how a screen reader user
            skips between entries. The glossary is in the index, the anchors
            and the layout rather than in the tag name. */}
        <section className="border-t border-navy-950/10 bg-paper py-16 sm:py-20">
          <div className="container-x">
            <nav
              aria-label="Questions on this page"
              className="border border-navy-950/10 bg-white p-6 sm:p-8"
            >
              <p className="mono-label text-slate-500">
                {`On this page, ${g.faqs.length} questions`}
              </p>
              <ol className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {g.faqs.map((f, i) => (
                  <li key={f.q} className="flex items-start gap-3">
                    <span className="mono-label mt-[3px] shrink-0 text-[10px] text-brand-500/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${slugs[i]}`}
                      className="text-[15px] font-medium leading-7 text-navy-950 underline-offset-4 transition-colors hover:text-amber-600 hover:underline"
                    >
                      {f.q}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-14 divide-y divide-navy-950/10 border-t border-navy-950/10">
              {g.faqs.map((f, i) => (
                <article key={f.q} className="group py-8">
                  <div className="flex items-start gap-3">
                    <span className="mono-label mt-[7px] shrink-0 text-[10px] text-brand-500/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2
                      id={slugs[i]}
                      className="scroll-mt-28 text-xl font-bold leading-snug text-navy-950"
                    >
                      {f.q}
                      <a
                        href={`#${slugs[i]}`}
                        aria-label={`Permalink to: ${f.q}`}
                        className="ml-2 align-middle text-amber-500 opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100"
                      >
                        #
                      </a>
                    </h2>
                  </div>
                  <p className="mt-3 max-w-3xl pl-8 text-[16px] leading-8 text-slate-500 text-pretty">
                    {f.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-navy-950/10 blueprint-light py-16 sm:py-20">
          <div className="container-x">
            <h2 className="display text-2xl text-navy-950 sm:text-3xl">Other questions</h2>
            <div className="mt-8 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.id}
                  href={`/faq/${o.id}`}
                  className="group flex flex-col bg-white p-6 transition-colors hover:bg-mist"
                >
                  <span className="text-[17px] font-bold leading-snug text-navy-950 group-hover:text-amber-600">
                    {o.title}
                  </span>
                  <span className="mono-label mt-2 text-[9px] text-slate-500">
                    {`${o.faqs.length} questions →`}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/faq"
              className="mono-label mt-8 inline-flex border border-navy-950/20 px-5 py-3 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
            >
              {`All ${FAQ_TOTAL} questions →`}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
