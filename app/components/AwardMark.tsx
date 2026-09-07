/* The visual mark for an award organisation.
 *
 * Two states, and which one shows is a licensing question rather than a
 * design one:
 *
 *   logo set   — the organisation's own file, served from /public/awards.
 *   no logo    — a typographic tile: the acronym set in the site's own
 *                display face. Our artwork, so no licence and no possible
 *                implication of endorsement.
 *
 * Both states share the same chrome — white ground, hairline border, amber
 * edge — and the same fixed box. That matters more than it sounds: these
 * logos range from a 500x33 ribbon (AASHTO) to a 54x54 square (USGBC), and
 * matching them on height alone would make one nine times wider than
 * another. Every mark is fitted inside the same rectangle with
 * object-contain, so the wall lines up whatever it is holding, and an
 * organisation whose file we don't have yet doesn't leave a hole in it.
 */
export default function AwardMark({
  abbr,
  org,
  logo,
  size = "md",
}: {
  abbr: string;
  org: string;
  logo?: string;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "lg" ? "h-16 w-40" : size === "sm" ? "h-9 w-24" : "h-12 w-32";
  const type =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-lg";

  return (
    <span
      className={`${box} inline-flex shrink-0 items-center justify-center border border-l-2 border-navy-950/15 border-l-amber-500 bg-white px-2.5 py-1.5`}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={`${org} logo`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      ) : (
        <span aria-hidden className={`display ${type} leading-none tracking-tight text-navy-950`}>
          {abbr}
        </span>
      )}
    </span>
  );
}
