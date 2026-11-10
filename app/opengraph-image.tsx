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
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f5f5f7", color: "#0b0f19" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#00736e", fontWeight: 600 }}>{`${site.role} · ${site.employer.name}`}</div>
          <div style={{ fontSize: 96, marginTop: 12, letterSpacing: -4, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 34, marginTop: 20, maxWidth: 900, lineHeight: 1.3 }}>Custom Odoo modules and ERPNext / Frappe apps: data models, dashboards, reports, workflows and access rules.</div>
        </div>
        <div style={{ display: "flex" }}>
          {stages.map((stage, i) => {
            const fill = i === last ? "#00736e" : "#ffffff";
            return (
              <div key={stage.id} style={{ display: "flex", flexGrow: stage.label.length, height: 88 }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: 1, padding: "0 20px", background: fill }}>
                  <div style={{ fontSize: 22, whiteSpace: "nowrap", color: i === last ? "#ffffff" : "#0b0f19" }}>{stage.label}</div>
                  <div style={{ fontSize: 19, color: i === last ? "#e3f4f2" : "#5b6472" }}>{stage.period}</div>
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
