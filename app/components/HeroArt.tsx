const PATH = "M30 372 C100 372 118 296 178 282 C246 266 262 204 322 170 C378 138 404 92 436 44";

type Anchor = "start" | "middle" | "end";
const nodes: {
  x: number;
  y: number;
  label: string;
  status: string;
  dates?: string;
  lx: number;
  ly: number;
  anchor: Anchor;
}[] = [
  { x: 30, y: 372, label: "Porto-Novo", status: "Étudiant", dates: "2019 – 2023", lx: 18, ly: 408, anchor: "start" },
  { x: 178, y: 282, label: "EILCO", status: "Étudiant ingénieur", dates: "2023 – 2026", lx: 196, ly: 316, anchor: "start" },
  { x: 322, y: 170, label: "AG2R", status: "Alternance", dates: "2024 – 2026", lx: 340, ly: 204, anchor: "start" },
  { x: 436, y: 44, label: "CDI", status: "à la recherche", lx: 412, ly: 50, anchor: "end" },
];

export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 470 470"
      className="h-auto w-full"
      role="img"
      aria-label="Courbe ascendante : étudiant à Porto-Novo de 2019 à 2023, étudiant ingénieur à l'EILCO de 2023 à 2026, alternance chez AG2R de 2024 à 2026, puis un CDI recherché"
    >
      <path className="hero-area" d={`${PATH} L436 452 L30 452 Z`} fill="#f3c9a8" opacity="0.7" />
      <path className="hero-line" d={PATH} pathLength={1} fill="none" stroke="#1f3a5f" strokeWidth="4" strokeLinecap="round" />
      {nodes.map((n, i) => {
        const last = i === nodes.length - 1;
        return (
          <g key={n.label} className="hero-node" style={{ animationDelay: `${0.3 + i * 0.65}s` }}>
            <circle cx={n.x} cy={n.y} r={last ? 13 : 9} fill={i >= 2 ? "#e0603a" : "#f7efe6"} stroke="#1f3a5f" strokeWidth="3.5" />
            <text
              x={n.lx}
              y={n.ly}
              textAnchor={n.anchor}
              fontFamily="var(--font-serif), Georgia, serif"
              fontSize="22"
              fontStyle={last ? "italic" : "normal"}
              fontWeight={last ? 700 : 500}
              fill={last ? "#b5421f" : "#1f3a5f"}
            >
              {n.label}
            </text>
            <text
              x={n.lx}
              y={n.ly + 19}
              textAnchor={n.anchor}
              fontFamily="var(--font-body), sans-serif"
              fontSize="14"
              fontWeight={500}
              fill={n.status === "Alternance" || last ? "#b5421f" : "#1f3a5f"}
            >
              {n.status}
            </text>
            {n.dates && (
              <text
                x={n.lx}
                y={n.ly + 36}
                textAnchor={n.anchor}
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
