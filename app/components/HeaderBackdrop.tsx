import Image from "next/image";

/**
 * Faded blueprint texture behind a page header/hero section — matches the
 * backdrop used on the home About/Programs sections. Drop it as the first
 * child of a `relative isolate overflow-hidden` header section.
 */
export function HeaderBackdrop({ opacity = 0.18 }: { opacity?: number }) {
  return (
    <Image
      src="/fx-gs.webp"
      alt=""
      fill
      sizes="100vw"
      aria-hidden
      className="pointer-events-none -z-10 object-cover"
      style={{ opacity }}
    />
  );
}
