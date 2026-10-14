import type { Content } from "../content";

const PATH = "M30 372 C100 372 118 296 178 282 C246 266 262 204 322 170 C378 138 404 92 436 44";

type Anchor = "start" | "middle" | "end";
const layout: { x: number; y: number; lx: number; ly: number; anchor: Anchor }[] = [
  { x: 30, y: 372, lx: 18, ly: 408, anchor: "start" },
  { x: 178, y: 282, lx: 196, ly: 316, anchor: "start" },
  { x: 322, y: 170, lx: 340, ly: 204, anchor: "start" },
  { x: 436, y: 44, lx: 412, ly: 50, anchor: "end" },
];

export default function HeroArt({ art }: { art: Content["art"] }) {
  return (
    <svg viewBox="0 0 470 470" className="h-auto w-full" role="img" aria-label={art.aria}>
      <path className="hero-area" d={`${PATH} L436 452 L30 452 Z`} fill="#f3c9a8" opacity="0.7" />
      <path className="hero-line" d={PATH} pathLength={1} fill="none" stroke="#1f3a5f" strokeWidth="4" strokeLinecap="round" />
      {art.nodes.map((n, i) => {
        const p = layout[i];
        const last = i === art.nodes.length - 1;
        return (
          <g key={n.label} className="hero-node" style={{ animationDelay: `${0.3 + i * 0.65}s` }}>
            <circle cx={p.x} cy={p.y} r={last ? 13 : 9} fill={i >= 2 ? "#e0603a" : "#f7efe6"} stroke="#1f3a5f" strokeWidth="3.5" />
            <text
              x={p.lx}
              y={p.ly}
              textAnchor={p.anchor}
              fontFamily="var(--font-serif), Georgia, serif"
              fontSize="22"
              fontStyle={last ? "italic" : "normal"}
              fontWeight={last ? 700 : 500}
              fill={last ? "#b5421f" : "#1f3a5f"}
            >
              {n.label}
            </text>
            <text
              x={p.lx}
              y={p.ly + 19}
              textAnchor={p.anchor}
              fontFamily="var(--font-body), sans-serif"
              fontSize="14"
              fontWeight={500}
              fill={i >= 2 ? "#b5421f" : "#1f3a5f"}
            >
              {n.status}
            </text>
            {n.dates && (
              <text
                x={p.lx}
                y={p.ly + 36}
                textAnchor={p.anchor}
                fontFamily="var(--font-body), sans-serif"
                fontSize="14"
                fill="#1f3a5f"
                opacity="0.75"
              >
                {n.dates}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
