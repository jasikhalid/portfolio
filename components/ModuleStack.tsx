import { modules as MODULES } from "@/content/site";

// An exploded isometric drawing of the modules Jasi works across, stacked into one system.
// Pure SVG computed at build time: zero client JS, themed by CSS variables. It is the 3D scene's fallback
// on phones, low-power devices and reduced motion, and the first paint everywhere.


const W = 150; // slab width (x)
const D = 150; // slab depth (y)
const T = 24; // slab thickness
const G = 20; // gap between slabs
const C = Math.cos(Math.PI / 6);
const S = 0.5;
const OX = D * C + 12; // shifts the drawing so it starts at x = 12
const TOP = MODULES.length * (T + G) + 12;

const p = (x: number, y: number, z: number) => `${(OX + (x - y) * C).toFixed(1)},${(TOP + (x + y) * S - z).toFixed(1)}`;

function faces(z: number) {
  const t = z + T;
  return {
    top: [p(0, 0, t), p(W, 0, t), p(W, D, t), p(0, D, t)].join(" "),
    left: [p(0, D, t), p(W, D, t), p(W, D, z), p(0, D, z)].join(" "),
    right: [p(W, 0, t), p(W, D, t), p(W, D, z), p(W, 0, z)].join(" "),
  };
}

// CSS variables only resolve in style, not in SVG presentation attributes.
const edge = { stroke: "var(--ink)", strokeWidth: 1, strokeLinejoin: "round" } as const;

export const VIEW = { w: Math.ceil(OX + W * C + 12), h: Math.ceil(TOP + (W + D) * S + 12) };

export default function ModuleStack({ className = "" }: { className?: string }) {
  // Bottom slab first so upper slabs paint over it.
  const slabs = MODULES.map((m, i) => ({ ...m, i, z: i * (T + G) }));
  const [lx, ly] = p(0, D, 0).split(",").map(Number); // left-face origin for labels
  return (
    <svg viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} className={className} role="img" aria-labelledby="stack-title">
      <title id="stack-title">Five modules drawn as stacked slabs: Fleet, Sales, Stock, Manufacturing and Accounting</title>
      {slabs.map(({ name, model, i, z }) => {
        const f = faces(z);
        const top = i === slabs.length - 1;
        return (
          <g key={name} className="slab" style={{ "--d": `${120 + (slabs.length - 1 - i) * 90}ms` } as React.CSSProperties}>
            <polygon points={f.right} style={{ fill: "var(--sunken)", ...edge }} />
            <polygon points={f.left} style={{ fill: top ? "var(--signal)" : "var(--raised)", ...edge }} />
            <polygon points={f.top} style={{ fill: top ? "var(--ink)" : "var(--paper)", ...edge }} />
            {/* Label lies on the left face: x runs along the slab, y is vertical. */}
            <g transform={`matrix(${C} ${S} 0 1 ${lx + 8 * C} ${ly + 8 * S - z - T / 2 + 3.5})`}>
              <text fontSize="9.5" className="font-mono" style={{ fill: top ? "var(--on-signal)" : "var(--ink)" }}>
                <tspan fontWeight="500">{name}</tspan>
                <tspan dx="6" style={{ fill: top ? "var(--on-signal)" : "var(--muted)" }}>{model}</tspan>
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}
