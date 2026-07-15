import Link from "next/link";
import Logo from "./Logo";
import { IconPhone, IconMail, IconPin } from "./Icons";
import { CAREERS_URL, APPLY_URL } from "../lib/site";

const NAV = [
  { label: "About", href: "/#about", external: false },
  { label: "Why Us", href: "/why-us", external: false },
  { label: "Meet Our Team", href: "/meet-our-team", external: false },
  { label: "Apply Jobs", href: APPLY_URL, external: true },
  { label: "View All Jobs", href: CAREERS_URL, external: true },
];

const SERVICES = [
  "Highway Design",
  "Bridge Engineering",
  "Transportation Planning",
  "Construction Inspection",
  "DOT Compliance",
  "Executive Search",
];

const LOCATIONS = [
  "Orlando, FL",
  "Boston, MA",
  "Washington, DC",
  "Atlanta, GA",
  "Dallas, TX",
  "Los Angeles, CA",
  "New York, NY",
  "Hartford, CT",
];

const SOCIALS = [
  { label: "LinkedIn", d: "M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM21 21h-3.38v-6.5c0-1.55-.55-2.6-1.94-2.6-1.06 0-1.69.71-1.97 1.4-.1.25-.13.6-.13.94V21H10.2s.05-11.5 0-12.5h3.38v1.77c.45-.69 1.25-1.68 3.05-1.68 2.23 0 3.9 1.46 3.9 4.6V21Z" },
  { label: "X", d: "M17.5 3h3l-6.6 7.5L21.7 21h-5.9l-4.2-5.5L6.6 21H3.6l7-8L2.9 3h6l3.8 5 4.8-5Zm-1 16h1.65L7.6 4.7H5.8L16.5 19Z" },
  { label: "Facebook", d: "M13.5 21v-8h2.6l.4-3h-3V8.1c0-.87.24-1.46 1.5-1.46H17V4a20 20 0 0 0-2.3-.12c-2.3 0-3.87 1.4-3.87 3.98V10H8.2v3h2.63v8h2.67Z" },
  { label: "Instagram", d: "M12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm0 5.6a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm3.8 13A3.8 3.8 0 0 1 16 19.8H8A3.8 3.8 0 0 1 4.2 16V8A3.8 3.8 0 0 1 8 4.2h8A3.8 3.8 0 0 1 19.8 8v8Zm-3.6-8.9a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      {/* safety hatch strip */}
      <div className="hatch h-1.5 w-full opacity-70" />

      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-7 text-ink-400">
              A national staffing and executive search firm focused on
              Departments of Transportation and public infrastructure — placing
              engineers, inspectors, and construction leaders nationwide for 45+
              years.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/12 text-ink-300 transition-colors hover:border-amber-500 hover:bg-amber-500 hover:text-navy-950"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mono-label text-ink-500">Navigate</h3>
            <ul className="mt-5 space-y-2.5">
              {NAV.map((l) =>
                l.external ? (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-300 transition-colors hover:text-amber-400"
                    >
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-300 transition-colors hover:text-amber-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-ink-500">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-sm text-ink-300 transition-colors hover:text-amber-400">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-ink-500">Get in Touch</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a href="tel:+12392555921" className="flex items-start gap-3 text-sm text-ink-300 transition-colors hover:text-amber-400">
                  <IconPhone className="mt-0.5 h-4.5 w-4.5 text-amber-500" />
                  +1 239-255-5921
                </a>
              </li>
              <li>
                <a href="mailto:info@metroassoc.com" className="flex items-start gap-3 text-sm text-ink-300 transition-colors hover:text-amber-400">
                  <IconMail className="mt-0.5 h-4.5 w-4.5 text-amber-500" />
                  info@metroassoc.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-300">
                <IconPin className="mt-0.5 h-4.5 w-4.5 text-amber-500" />
                HQ — Orlando, Florida
              </li>
            </ul>
            <p className="mono-label mt-6 text-[9px] leading-5 text-ink-500">
              Offices: {LOCATIONS.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-ink-500 sm:flex-row">
          <p className="mono-label text-[10px]">
            © {new Date().getFullYear()} Metro Associates — All Rights Reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="mono-label text-[10px] transition-colors hover:text-amber-400">Privacy Policy</a>
            <a href="#" className="mono-label text-[10px] transition-colors hover:text-amber-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
