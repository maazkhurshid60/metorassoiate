import Link from "next/link";
import { faqGroup, type FaqGroupId } from "../lib/hubFaqs";

/**
 * The questions a page's group answers, as links — not the answers.
 *
 * This used to render the answers inline, with FAQPage schema, on each of the
 * six hubs. Once every group got its own page under /faq/, keeping the
 * answers here as well would have made a ~700-word group page roughly 85%
 * duplicate against the hub carrying the same six.
 *
 * So the rule is: an answer lives on exactly one page, its group page. This
 * shows what is answered and sends the reader there. No FAQPage schema here
 * either — marking up questions whose answers are on another URL describes a
 * page that does not exist.
 *
 * What is lost is a reader getting the answer without a click. What is gained
 * is the answer being somewhere that can actually rank for it, rather than
 * repeated across pages that then suppress each other.
 */
export default function HubFaqs({
  group,
  heading,
}: {
  group: FaqGroupId;
  /** e.g. "Civil engineering recruiting — common questions". */
  heading: string;
}) {
  const g = faqGroup(group);
  if (!g?.faqs.length) return null;

  return (
    <section className="relative border-t border-navy-950/10 bg-paper py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="mono-label text-amber-500">{"//"} FAQ</span>
          <h2 className="display mt-5 text-3xl text-navy-950 sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-[17px] leading-8 text-slate text-pretty">{g.blurb}</p>
        </div>

        <ul className="mt-9 divide-y divide-navy-950/10 border-t border-navy-950/10">
          {g.faqs.map((f) => (
            <li key={f.q}>
              <Link
                href={`/faq/${g.id}`}
                className="group flex items-baseline justify-between gap-6 py-4"
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

        <Link
          href={`/faq/${g.id}`}
          className="mono-label mt-8 inline-flex border border-navy-950/20 px-5 py-3 text-[10px] text-navy-950 transition-colors hover:border-amber-500 hover:bg-amber-500"
        >
          {`Read the answers →`}
        </Link>
      </div>
    </section>
  );
}
