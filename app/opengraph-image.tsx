import { ImageResponse } from "next/og";
import { site, stages } from "@/content/site";

export const alt = `${site.name}, ${site.role} at ${site.employer.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same statusbar as the hero, drawn with plain boxes and triangles (Satori has no clip-path).
export default function OpengraphImage() {
  const last = stages.length - 1;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f4f6f7", color: "#14213d" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#56606b" }}>{`${site.role} · ${site.employer.name}`}</div>
          <div style={{ fontSize: 84, fontWeight: 700, marginTop: 16, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 34, marginTop: 20, maxWidth: 900, lineHeight: 1.3 }}>Odoo modules: ORM, OWL, QWeb reports, security rules and wizards.</div>
        </div>
        <div style={{ display: "flex" }}>
          {stages.map((stage, i) => (
            <div key={stage.id} style={{ display: "flex", flex: 1, height: 84 }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, paddingLeft: i ? 40 : 24, background: i === last ? "#c8932e" : "#e2e7ea" }}>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{stage.label}</div>
                <div style={{ fontSize: 20, color: i === last ? "#14213d" : "#56606b" }}>{stage.period}</div>
              </div>
              {i < last && (
                <div style={{ width: 0, height: 0, borderTop: "42px solid transparent", borderBottom: "42px solid transparent", borderLeft: "20px solid #e2e7ea", marginRight: -20, zIndex: 1 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
