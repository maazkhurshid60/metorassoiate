import Link from "next/link";
import { GENERAL_FAQS } from "../lib/hubFaqs";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "../lib/seo";

/**
 * The homepage FAQ block.
 *
 * Uses GENERAL_FAQS rather than any discipline's six, on purpose: someone on
 * the homepage is asking what this firm covers, where it operates and who
 * pays the fee — not how PE comity works. Reusing a hub's answers here would
 * put identical text on two pages while serving neither reader properly.
 *
 * Six answers, then a link to /faq for the other forty-four. That link is
 * also the only route into /faq from the homepage, which is what keeps the
 * page inside the two-click depth the internal-link checker enforces.
 */
export default function HomeFaqs() {
  return (
    <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
      <JsonLd data={faqSchema(GENERAL_FAQS)} />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="mono-label text-amber-500">{"//"} 09 — Questions</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              The things people ask us first
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate text-pretty">
              What we cover, where we work, and who pays. The discipline-specific
              questions — licensure, pay bands, certifications — are answered in
              full on our FAQ.
            </p>
            <Link
              href="/faq"
              className="mono-label mt-8 inline-flex items-center gap-2 border border-navy-950/20 px-5 py-3 text-[11px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
            >
              All 50 questions &rarr;
            </Link>
          </div>

          <div className="divide-y divide-navy-950/10 border-t border-navy-950/10">
            {GENERAL_FAQS.map((f) => (
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
                <p className="mt-3 text-[15px] leading-7 text-slate-500 text-pretty">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
