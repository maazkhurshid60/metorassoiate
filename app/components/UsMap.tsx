/**
 * Blueprint-style U.S. coverage map behind the Locations grid:
 * a continental-U.S. silhouette with the office cities plotted as nodes and
 * dashed routes fanning out from the Orlando HQ. Inline SVG (no network),
 * aria-hidden, sits low-opacity behind content.
 */

type Node = { id: string; x: number; y: number; hq?: boolean };

// Positions on the same 1000 x 560 canvas as the silhouette below.
const NODES: Node[] = [
  { id: "LA", x: 150, y: 352 },
  { id: "DAL", x: 470, y: 402 },
  { id: "ATL", x: 690, y: 372 },
  { id: "ORL", x: 772, y: 452, hq: true },
  { id: "DC", x: 828, y: 286 },
  { id: "NYC", x: 856, y: 246 },
  { id: "BOS", x: 878, y: 210 },
  { id: "HAR", x: 866, y: 228 },
];

const byId = (id: string) => NODES.find((n) => n.id === id)!;
const HQ = byId("ORL");

const ROUTES: [string, string][] = [
  ["ORL", "LA"],
  ["ORL", "DAL"],
  ["ORL", "ATL"],
  ["ORL", "DC"],
  ["ORL", "NYC"],
  ["LA", "DAL"],
  ["DAL", "ATL"],
  ["DC", "NYC"],
  ["NYC", "BOS"],
];

// Simplified continental-U.S. outline (recognizable silhouette).
const US_PATH =
  "M120,150 L250,140 350,135 430,150 500,178 560,150 640,135 720,150 800,140 850,136 872,158 882,188 876,216 860,246 846,276 836,306 826,340 816,376 806,406 800,432 812,462 800,492 776,476 766,446 742,420 682,416 600,420 560,410 500,420 476,452 440,436 400,446 350,436 290,438 220,446 160,436 130,406 110,360 100,310 110,256 120,202 Z";

export default function UsMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 560"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="usFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b8bf5" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#1a2f52" stopOpacity="0.20" />
        </linearGradient>
      </defs>

      {/* faint graticule */}
      <g stroke="rgba(130,175,240,0.07)" strokeWidth="1">
        {[120, 240, 360, 480].map((y) => (
          <line key={`h${y}`} x1="40" y1={y} x2="960" y2={y} />
        ))}
        {[180, 360, 540, 720, 900].map((x) => (
          <line key={`v${x}`} x1={x} y1="60" x2={x} y2="520" />
        ))}
      </g>

      {/* U.S. landmass silhouette */}
      <path
        d={US_PATH}
        fill="url(#usFill)"
        stroke="rgba(130,175,240,0.28)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* routes */}
      <g>
        {ROUTES.map(([a, b], i) => {
          const p = byId(a);
          const q = byId(b);
          return (
            <line
              key={i}
              x1={p.x}
              y1={p.y}
              x2={q.x}
              y2={q.y}
              stroke="rgba(245,165,36,0.32)"
              strokeWidth="1.2"
              strokeDasharray="2 6"
            />
          );
        })}
      </g>

      {/* HQ coverage rings */}
      <circle cx={HQ.x} cy={HQ.y} r="30" stroke="rgba(245,165,36,0.30)" strokeWidth="1.2" />
      <circle cx={HQ.x} cy={HQ.y} r="18" stroke="rgba(245,165,36,0.5)" strokeWidth="1.2">
        <animate attributeName="r" values="18;42;18" dur="4s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* nodes */}
      {NODES.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.hq ? 12 : 9}
            fill={n.hq ? "rgba(245,165,36,0.18)" : "rgba(91,139,245,0.18)"}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.hq ? 7 : 5}
            fill={n.hq ? "#f5a524" : "#5b8bf5"}
          />
        </g>
      ))}
    </svg>
  );
}
