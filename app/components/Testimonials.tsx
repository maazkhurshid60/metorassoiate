import { IconStar } from "./Icons";

const TESTIMONIALS = [
  {
    name: "A. Howard",
    role: "Engineering Manager",
    quote:
      "Metro Associates were a very quick and responsive service. They are one of the best providers, if not the best. We would highly recommend them to anyone.",
  },
  {
    name: "N. Marshall",
    role: "Designer",
    quote:
      "Access a network of hundreds of national and global affiliates to meet your needs. Their specialized experience in hiring for multiple positions is remarkable. With this team, you can reach new heights, accomplish your goals, and turn your dreams into reality.",
  },
  {
    name: "E. Romero",
    role: "Architect",
    quote:
      "Take your recruitment skills to the next level with Metro Associates. Their expert team can help you cultivate a successful workforce that aligns with your goals and values. Let them help you achieve greatness today!",
  },
  {
    name: "A. Smith",
    role: "Technical Manager",
    quote:
      "Metro Associates placed exceptional candidates with remarkable satisfaction records, including the help of the former engineers and military recruiters they have on staff. Their candidate selection process is dedicated and successful.",
  },
];

const initials = (name: string) =>
  name.replace(/\./g, "").split(" ").map((w) => w[0]).join("");

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden blueprint-light border-t border-navy-950/10 py-24 sm:py-28"
    >
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mono-label text-amber-500">{"//"} 09 — Client Feedback</span>
          <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
            Trusted by hiring leaders
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col bg-white p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="mono-label text-[9px] text-slate-500">★ VERIFIED</span>
              </div>
              <blockquote className="mt-5 flex-1 text-lg leading-8 text-slate text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-navy-950/10 pt-5">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-amber-500/50 bg-amber-500/10 text-sm font-bold text-navy-950">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy-950">{t.name}</span>
                  <span className="mono-label block text-[9px] text-slate-500">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
