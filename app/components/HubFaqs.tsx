import { HUB_FAQS, type HubSegment } from "../lib/hubFaqs";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "../lib/seo";

/**
 * The FAQ block for a discipline hub.
 *
 * The six hub pages carried no FAQs at all, while the 250 city pages beneath
 * them carried roughly 1,150 question entities between them — the depth was
 * on the leaves and none of it on the branch a searcher actually lands on.
 *
 * The schema is emitted knowing Google stopped showing FAQ rich results on
 * 7 May 2026. It stays because Bingbot, PerplexityBot and the retrieval
 * crawlers behind AI answers still read it, and that is what this content is
 * for — see the note at the top of lib/hubFaqs.ts. Google's own guidance is
 * that unused structured data causes no harm in Search.
 *
 * Rendered as <details> rather than a JS accordion so every answer is in the
 * DOM and in the markup whether or not it has been clicked, which is what a
 * crawler reads.
 */
export default function HubFaqs({
  hub,
  heading,
}: {
  hub: HubSegment;
  /** e.g. "Civil engineering recruiting — common questions". */
  heading: string;
}) {
  const faqs = HUB_FAQS[hub];
  if (!faqs?.length) return null;

  return (
    <section className="relative border-t border-navy-950/10 bg-paper py-20 sm:py-24">
      <JsonLd data={faqSchema(faqs)} />
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="mono-label text-amber-500">{"//"} FAQ</span>
          <h2 className="display mt-5 text-3xl text-navy-950 sm:text-4xl">{heading}</h2>
        </div>

        <div className="mt-10 divide-y divide-navy-950/10 border-t border-navy-950/10">
          {faqs.map((f) => (
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
      </div>
    </section>
  );
}
