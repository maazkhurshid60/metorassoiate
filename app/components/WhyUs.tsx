import Image from "next/image";
import { IconLayers, IconClipboard, IconGauge } from "./Icons";

/* This block used to be three guarantee cards — a free replacement
   guarantee, a money-back guarantee, and performance monitoring, under the
   line "to make your decision risk-free, every placement is backed by our:".
   Removed from the homepage at the client's request.

   Replaced rather than deleted, because the section is half the page and a
   hole would show. What went in is what the site can actually demonstrate:
   six discipline practices you can click into, licensure handling the FAQs
   now explain in detail, and staying in contact after a start date — which
   is a service, not a promise about an outcome. Nothing here claims a
   result. */
const DIFFERENTIATORS = [
  {
    icon: IconLayers,
    title: "Six disciplines, not one general desk",
    body: "Civil, MEP, bridge and structural, water and wastewater, CEI and municipal each have their own practice — so the person calling you knows the difference between a load rating and a load calculation.",
  },
  {
    icon: IconClipboard,
    title: "Licensure handled before offer stage",
    body: "A PE licence does not transfer automatically between states. We work comity and NCEES Records into the search from the start, rather than discovering a six-week gap once someone has accepted.",
  },
  {
    icon: IconGauge,
    title: "We stay in contact after the start date",
    body: "The placement is not the end of the relationship. We check in with both sides through the first months, because the problems worth knowing about rarely surface in week one.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative border-t border-white/10 section-dark py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left: headline + image */}
          <div>
            <span className="mono-label text-amber-500">{"//"} 04 — Why Metro</span>
            <h2 className="display mt-5 text-4xl text-white sm:text-5xl">
              Faster hiring, because{" "}
              <span className="text-amber-500">engineering</span> is all we do
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ink-300 text-pretty">
              We&apos;ve reduced sourcing and hiring time by up to{" "}
              <span className="font-semibold text-white">40%</span> — without
              compromising on candidate quality. Our team-based approach speeds up
              screening and reference checks while every placement is closely
              monitored for performance.
            </p>

            <div className="corners relative mt-9 overflow-hidden border border-white/12">
              <span className="mono-label absolute left-4 top-4 z-10 text-[9px] text-white/70">
                FIG. 3 — U.S. INFRASTRUCTURE
              </span>
              <div className="relative h-64">
                <Image
                  src="/bridge-dusk.jpeg"
                  alt="Bridge construction at dusk with a tower crane — infrastructure Metro Associates staffs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right: what we can actually show */}
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-7 text-ink-400">
              Every engineer we place comes with a proven track record and
              references from peers and supervisors we have actually spoken to.
              What that rests on:
            </p>
            {DIFFERENTIATORS.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="group flex gap-5 border border-white/10 bg-navy-900 p-6 transition-colors hover:border-amber-500/40 hover:bg-navy-850"
              >
                <div className="flex flex-col items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-white/12 text-amber-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mono-label text-[9px] text-ink-500">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-ink-400">{body}</p>
                </div>
              </div>
            ))}
            <div className="mt-2 flex items-center gap-4 border-l-2 border-amber-500 bg-amber-500/5 px-5 py-4">
              <p className="text-sm font-semibold text-amber-300">
                That&apos;s the Metro difference: a specialist desk for your
                discipline, and engineers who have actually been vetted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
