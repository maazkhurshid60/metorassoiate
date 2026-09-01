"use client";

import { useState } from "react";

/** Click-to-load YouTube embed. A real <iframe src="youtube.com/embed/...">
 *  pulls in YouTube's player JS on first paint even before anyone plays it,
 *  which is a major hit to Lighthouse performance (LCP/TBT). This renders
 *  just a static thumbnail + play button until clicked, and only then
 *  mounts the actual iframe (with autoplay, since the click already
 *  expressed intent to watch). */
export default function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={title}
        className="block"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block h-full w-full cursor-pointer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- a static YouTube
          thumbnail URL isn't a local/remote asset next/image needs to optimize */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors duration-200 group-hover:bg-black/45">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-200 group-hover:scale-110 sm:h-20 sm:w-20">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-navy-950 sm:h-8 sm:w-8">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
