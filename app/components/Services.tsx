import {
  IconUsers,
  IconTarget,
  IconGlobe,
  IconSpark,
  IconLayers,
  IconBolt,
} from "./Icons";

const SERVICES = [
  {
    icon: IconUsers,
    title: "Experienced Team",
    body: "Rely on the expertise of our experienced team of recruitment professionals who place the best talent.",
  },
  {
    icon: IconTarget,
    title: "Top Talent",
    body: "We specialize in getting top talent from your competitors — senior technical and intelligence recruiter professionals.",
  },
  {
    icon: IconGlobe,
    title: "Diversity & Inclusion",
    body: "Elevating the importance of diversity and inclusion in the workplace. There is absolutely no fee unless the candidate is hired.",
  },
  {
    icon: IconSpark,
    title: "Innovation",
    body: "Priority attention whenever you need us — with diversity and inclusion behind every innovation we bring.",
  },
  {
    icon: IconLayers,
    title: "Valuable Extension",
    body: "We are a valuable extension of your team, created by joining diverse and inclusive team resources.",
  },
  {
    icon: IconBolt,
    title: "Responsive Service",
    body: "Quick, responsive service. Harness the differences of your people with the ones that will excel.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden blueprint border-t border-white/10 py-24 sm:py-28"
    >
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} 02 — Capabilities</span>
            <h2 className="display mt-5 text-4xl text-white sm:text-5xl">
              Quality services, engineered
            </h2>
          </div>
          <p className="max-w-md text-ink-300 text-pretty">
            From highway design to DOT compliance, we deliver dependable talent
            that supports safety, regulatory standards, and the delivery of state
            and federally funded programs.
          </p>
        </div>

        <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body }, i) => (
            <article
              key={title}
              className="group relative flex flex-col bg-navy-900 p-8 transition-colors duration-300 hover:bg-navy-850"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-white/12 text-brand-400 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="mono-label text-2xl font-bold text-white/10 transition-colors group-hover:text-amber-500/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
              <p className="mt-2.5 text-[15px] leading-7 text-ink-400">{body}</p>
              <span className="mt-6 h-0.5 w-8 bg-amber-500 transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
