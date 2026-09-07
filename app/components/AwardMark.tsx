/* The visual mark for an award organisation.
 *
 * Two states, and which one shows is a licensing question rather than a
 * design one:
 *
 *   logo set   — the organisation's own file, served from /public/awards.
 *                Only ever added once we hold permission (see the README in
 *                that folder), because these are registered marks and most
 *                of them are licensed to members or to winners.
 *   no logo    — a typographic tile: the acronym set in the site's own
 *                display face inside a bracketed frame. It is our artwork,
 *                so it carries no licence and can't imply endorsement, and
 *                at a glance a wall of them still reads as a logo wall.
 *
 * Dropping a file into /public/awards and adding one `logo:` line in
 * lib/awards.ts is the whole swap — nothing here needs touching.
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
    size === "lg" ? "h-16 px-5" : size === "sm" ? "h-9 px-2.5" : "h-12 px-3.5";
  const type =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-lg";

  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={`${org} logo`}
        className={`${box} w-auto shrink-0 object-contain px-0`}
        loading="lazy"
      />
    );
  }

  return (
    <span
      aria-hidden
      className={`${box} inline-flex shrink-0 items-center justify-center border border-l-2 border-navy-950/15 border-l-amber-500 bg-white`}
    >
      <span className={`display ${type} leading-none tracking-tight text-navy-950`}>
        {abbr}
      </span>
    </span>
  );
}
