import Image from "next/image";
import { IconShield, IconRefresh, IconGauge } from "./Icons";

const GUARANTEES = [
  {
    icon: IconShield,
    title: "90-Day Free Replacement",
    body: "If it's not the right fit, we replace the candidate at no additional cost — no questions asked.",
  },
  {
    icon: IconRefresh,
    title: "Money-Back Guarantee",
    body: "A full refund option if we can't deliver the right talent. Your decision stays risk-free.",
  },
  {
    icon: IconGauge,
    title: "Performance Monitoring",
    body: "We stay engaged after placement, tracking performance to ensure long-term success.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative border-t border-white/10 bg-navy-950 py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left: headline + image */}
          <div>
            <span className="mono-label text-amber-500">{"//"} 04 — Why Metro</span>
            <h2 className="display mt-5 text-4xl text-white sm:text-5xl">
              Faster hiring, backed by a{" "}
              <span className="text-amber-500">90-day</span> guarantee
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
                  src="https://metroassoc.com/wp-content/uploads/2023/04/building.webp"
                  alt="City skyline representing the infrastructure Metro Associates staffs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right: guarantees */}
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-7 text-ink-400">
              Every engineer we place comes with a proven track record and strong
              endorsements from peers and supervisors. And to make your decision
              risk-free, every placement is backed by our:
            </p>
            {GUARANTEES.map(({ icon: Icon, title, body }, i) => (
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
                That&apos;s the Metro difference: faster hiring, vetted talent,
                and zero risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
