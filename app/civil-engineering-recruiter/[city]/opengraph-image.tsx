import { ImageResponse } from "next/og";
import { CITIES, getCity } from "../../lib/cities";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Civil Engineering Recruiter — Metro Associates";

// Pre-render one OG image per city (matches the page's static params).
export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCity(city);
  const place = c ? `${c.city}, ${c.abbr}` : "United States";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a1220 0%, #0f1d33 60%, #12223d 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, background: "#f59e0b" }} />
          <div style={{ color: "#f59e0b", fontSize: 26, letterSpacing: 4, fontWeight: 700 }}>
            METRO ASSOCIATES
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#93a4bd", fontSize: 34, fontWeight: 600, marginBottom: 8 }}>
            Civil Engineering Recruiter
          </div>
          <div style={{ color: "#ffffff", fontSize: 92, fontWeight: 800, lineHeight: 1.02 }}>
            {place}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ color: "#f59e0b", fontSize: 30, fontWeight: 700 }}>
            Licensed PEs, placed fast
          </div>
          <div style={{ color: "#5f7392", fontSize: 26 }}>· metroassoc.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
