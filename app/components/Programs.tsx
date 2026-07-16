import {
  IconBridge,
  IconCompass,
  IconLayers,
  IconClipboard,
  IconShield,
  IconGauge,
  IconUsers,
} from "./Icons";

const PROGRAMS = [
  { icon: IconBridge, title: "Bridge inspections & load ratings" },
  { icon: IconCompass, title: "Highway expansions & roadway rehabilitations" },
  { icon: IconLayers, title: "Transit corridor & rail infrastructure" },
  { icon: IconClipboard, title: "Multi-agency capital improvement programs" },
  { icon: IconShield, title: "Federally funded transportation initiatives" },
  { icon: IconGauge, title: "Emergency response & asset management" },
];

export default function Programs() {
  return (
    <section className="relative border-t border-navy-950/10 blueprint-light py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* What sets us apart */}
          <div>
            <span className="mono-label text-amber-500">{"//"} 03 — Programs &amp; Approach</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              What sets Metro{" "}
              <span className="text-brand-500">apart</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate text-pretty">
              Practical expertise. Our recruiters include former engineers and
              military-trained talent acquisition specialists who bring firsthand
              knowledge of infrastructure operations and regulatory environments.
            </p>
            <p className="mt-4 leading-8 text-slate-500 text-pretty">
              We understand the real pace of transportation programs — from
              design-bid-build and design-build delivery to emergency response
              projects and long-term asset management. The result: agencies stay
              on schedule, manage budgets responsibly, and deliver projects the
              public can rely on.
            </p>

            {/* Diversity / veterans panel */}
            <div className="mt-8 border-l-2 border-amber-500 bg-amber-500/10 p-6">
              <div className="flex items-center gap-2">
                <IconUsers className="h-5 w-5 text-amber-500" />
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy-950">
                  Diversity, Veterans &amp; Workforce Excellence
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate">
                We&apos;re committed to diversity, inclusion, and workforce
                resilience — actively recruiting from varied backgrounds,
                including veterans with engineering and leadership experience, to
                help agencies build teams that reflect the communities they serve.
              </p>
            </div>
          </div>

          {/* Infrastructure programs supported */}
          <div>
            <p className="mono-label text-amber-500">Infrastructure programs we support</p>
            <div className="reveal-children mt-6 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2">
              {PROGRAMS.map(({ icon: Icon, title }, i) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 bg-white p-6 transition-colors hover:bg-mist"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-navy-950/12 text-brand-500 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <span className="mono-label text-[9px] text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-[15px] font-semibold leading-6 text-navy-950">
                      {title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-500">
              Our placements strengthen oversight, improve quality assurance, and
              reinforce safety compliance across every major infrastructure
              initiative we support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
