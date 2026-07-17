import Image from "next/image";

export const LOGO_FULL = "/logo.webp";

type LogoProps = {
  className?: string;
};

/** Metro Associates official transparent logo lockup. */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={LOGO_FULL}
        alt="Metro Associates — Your Prominent Placement Company"
        width={220}
        height={62}
        className="h-11 w-auto sm:h-12"
        priority
      />
    </span>
  );
}
