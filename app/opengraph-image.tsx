import { ImageResponse } from "next/og";
import { site, stages } from "@/content/site";

export const alt = `${site.name}, ${site.role} at ${site.employer.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same statusbar as the hero, with SVG arrows (Satori has no clip-path).
export default function OpengraphImage() {
  const last = stages.length - 1;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f4f6f7", color: "#14213d" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#56606b" }}>{`${site.role} · ${site.employer.name}`}</div>
          <div style={{ fontSize: 84, marginTop: 16, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 34, marginTop: 20, maxWidth: 900, lineHeight: 1.3 }}>Odoo modules: ORM, OWL, QWeb reports, security rules and wizards.</div>
        </div>
        <div style={{ display: "flex" }}>
          {stages.map((stage, i) => {
            const fill = i === last ? "#c8932e" : "#e2e7ea";
            return (
              <div key={stage.id} style={{ display: "flex", flexGrow: stage.label.length, height: 88 }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: 1, padding: "0 20px", background: fill }}>
                  <div style={{ fontSize: 22, whiteSpace: "nowrap" }}>{stage.label}</div>
                  <div style={{ fontSize: 19, color: i === last ? "#14213d" : "#56606b" }}>{stage.period}</div>
                </div>
                {i < last && (
                  <svg width="26" height="88" viewBox="0 0 26 88">
                    <path d="M0 0 L20 44 L0 88 Z" fill={fill} />
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
