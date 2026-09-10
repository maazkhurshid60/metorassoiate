/* The visual mark for an award organization.
 *
 * Two states, and which one shows is a licensing question rather than a
 * design one:
 *
 *   logo set   — the organization's own file, served from /public/awards.
 *   no logo    — a typographic tile: the acronym set in the site's own
 *                display face. Our artwork, so no license and no possible
 *                implication of endorsement.
 *
 * Both states share the same chrome — white ground, hairline border, amber
 * edge — and the same fixed box. That matters more than it sounds: these
 * logos range from a 500x33 ribbon (AASHTO) to a 54x54 square (USGBC), and
 * matching them on height alone would make one nine times wider than
 * another. Every mark is fitted inside the same rectangle with
 * object-contain, so the wall lines up whatever it is holding, and an
 * organization whose file we don't have yet doesn't leave a hole in it.
 */
export default function AwardMark({
  abbr,
  org,
  logo,
  onDark,
  size = "md",
}: {
  abbr: string;
  org: string;
  logo?: string;
  /** The file is a reverse (white) variant — see the note below. */
  onDark?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "lg" ? "h-16 w-40" : size === "sm" ? "h-9 w-24" : "h-12 w-32";
  const type =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-lg";

  /* Some organizations publish only the reverse cut of their mark, which is
     white and vanishes on the white tile — AASHTO's file is 73 paths all
     fill="white"; AISC's averages RGB(246,246,246) across its opaque pixels.
     Both rendered as empty boxes on the awards wall. The fix is the tile,
     not the file: recolouring someone's trademark to suit our background is
     exactly what nominative use does not allow, whereas putting the reverse
     mark on a dark ground shows it the way it was drawn to be shown. */
  const ground = onDark && logo ? "bg-navy-950" : "bg-white";

  return (
    <span
      className={`${box} ${ground} inline-flex shrink-0 items-center justify-center border border-l-2 border-navy-950/15 border-l-amber-500 px-2.5 py-1.5`}
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
