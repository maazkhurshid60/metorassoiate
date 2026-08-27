import type { Metadata } from "next";
import Script from "next/script";
import { HeaderBackdrop } from "../components/HeaderBackdrop";

export const metadata: Metadata = {
  title: "Videos — Metro Associates | DOT & Infrastructure Staffing",
  description: "Watch our latest job openings and hiring updates from Metro Associates.",
};

/* TikTok job-ad clips (@patricknovick225) — add new video IDs here as
   Patrick shares more. embed.js (loaded once, below) finds every
   .tiktok-embed blockquote on the page and renders the player into it. */
const VIDEO_IDS = [
  "7678660383099407647",
  "7678658540050943263",
  "7678040762646318367",
];

export default function VideosPage() {
  return (
    <main>
      <Script async src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-20 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-blink bg-amber-500" />
            <span className="mono-label text-amber-400">{"//"} On TikTok</span>
          </div>
          <h1 className="display mt-5 text-4xl text-white sm:text-5xl">
            Job Openings, <span className="text-brand-500">On Video</span>
          </h1>

          <div className="mt-14 grid grid-cols-1 gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
            {VIDEO_IDS.map((id) => (
              <blockquote
                key={id}
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@patricknovick225/video/${id}`}
                data-video-id={id}
                style={{ maxWidth: 325, minWidth: 260, width: "100%" }}
              >
                <section />
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
