import { ImageResponse } from "next/og";
import { hero, site, stages } from "@/content/site";

export const alt = `${site.name}, ${site.role} at ${site.employer.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f3f0e8";
const INK = "#15140f";
const MUTED = "#5c574b";
const RULE = "#d8d2c2";
const SIGNAL = "#b3361d";

// The site's record header and headline, drawn as a ledger page. SVG arrows because Satori has no clip-path.
export default function OpengraphImage() {
  const last = stages.length - 1;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "56px 64px", background: PAPER, color: INK }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: MUTED, letterSpacing: 1 }}>
          <div style={{ display: "flex" }}><span style={{ color: SIGNAL }}>000</span>&nbsp;· RECORD / {site.name.toUpperCase()}</div>
          <div style={{ display: "flex" }}>{`${site.role.toUpperCase()} · ${site.employer.name.toUpperCase()}`}</div>
        </div>
        <div style={{ display: "flex", height: 2, background: INK, marginTop: 18 }} />
        <div style={{ display: "flex", flexDirection: "column", marginTop: 48, fontSize: 92, lineHeight: 0.98, letterSpacing: -4, fontWeight: 600 }}>
          {hero.headlineLines.map((line, i) => (
            <div key={line} style={{ display: "flex", color: i === hero.headlineLines.length - 1 ? SIGNAL : INK }}>{line}</div>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: "auto" }}>
          {stages.map((stage, i) => {
            const fill = i === last ? INK : "#e9e5d9";
            return (
              <div key={stage.id} style={{ display: "flex", flexGrow: stage.label.length, height: 76 }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: 1, padding: "0 18px", background: fill, borderTop: i === last ? "none" : `1px solid ${RULE}` }}>
                  <div style={{ fontSize: 20, whiteSpace: "nowrap", color: i === last ? PAPER : INK }}>{stage.label}</div>
                  <div style={{ fontSize: 17, color: i === last ? PAPER : MUTED }}>{stage.period}</div>
                </div>
                {i < last && (
                  <svg width="22" height="76" viewBox="0 0 22 76">
                    <path d="M0 0 L18 38 L0 76 Z" fill={fill} />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      </div>
    ),
    size,
  );
}
