"use client";

import { useEffect, useRef } from "react";
import {
  BoxGeometry,
  CanvasTexture,
  Color,
  EdgesGeometry,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  SRGBColorSpace,
  Scene,
  WebGLRenderer,
} from "three";
import { modules as MODULES } from "@/content/site";

// The one 3D moment: the module slabs start apart and settle into a single stack, then follow the pointer.
// Loaded lazily by HeroFigure only on capable desktop devices. Renders on demand and pauses when hidden.

const SIZE = 1.5;
const THICK = 0.24;
const GAP_START = 0.55;
const GAP_END = 0.2;
const ASSEMBLE_MS = 1600;

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function labelTexture(name: string, model: string, fg: string, bg: string, muted: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 164;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const mono = getComputedStyle(document.body).getPropertyValue("--font-geist-mono") || "ui-monospace";
  ctx.font = `500 64px ${mono}, ui-monospace, monospace`;
  ctx.textBaseline = "middle";
  ctx.fillStyle = fg;
  ctx.fillText(name, 52, 86);
  const w = ctx.measureText(name).width;
  ctx.font = `400 64px ${mono}, ui-monospace, monospace`;
  ctx.fillStyle = muted;
  ctx.fillText(model, 52 + w + 40, 86);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

const ease = (t: number) => 1 - Math.pow(1 - t, 4);

export default function HeroScene({ onReady }: { onReady: () => void }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = SRGBColorSpace;
    el.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("aria-hidden", "true");

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
    camera.position.set(6, 5.2, 6);
    camera.lookAt(0, 1.2, 0);

    // Unlit, flat faces: the same three tones as the SVG drawing (lid, front, side), like a printed diagram.
    const stack = new Group();
    scene.add(stack);

    const geometry = new BoxGeometry(SIZE, THICK, SIZE);
    const edges = new EdgesGeometry(geometry);
    const disposables: { dispose: () => void }[] = [geometry, edges];

    type Slab = { mesh: Mesh; line: LineSegments; materials: MeshBasicMaterial[]; i: number };
    const slabs: Slab[] = [];
    const lineMaterial = new LineBasicMaterial();
    disposables.push(lineMaterial);

    function build() {
      const ink = cssVar("--ink");
      const paper = cssVar("--paper");
      const raised = cssVar("--raised");
      const sunken = cssVar("--sunken");
      const signal = cssVar("--signal");
      const onSignal = cssVar("--on-signal");
      const muted = cssVar("--muted");
      lineMaterial.color = new Color(ink);

      for (const slab of slabs) {
        stack.remove(slab.mesh, slab.line);
        slab.materials.forEach((m) => {
          m.map?.dispose();
          m.dispose();
        });
      }
      slabs.length = 0;

      MODULES.forEach((m, i) => {
        const top = i === MODULES.length - 1;
        const front = new MeshBasicMaterial({ map: labelTexture(m.name, m.model, top ? onSignal : ink, top ? signal : raised, top ? onSignal : muted) });
        const side = new MeshBasicMaterial({ color: new Color(sunken) });
        const lid = new MeshBasicMaterial({ color: new Color(top ? ink : paper) });
        // BoxGeometry face order: +x, -x, +y, -y, +z, -z
        const materials = [side, side, lid, side, front, side];
        const mesh = new Mesh(geometry, materials);
        const line = new LineSegments(edges, lineMaterial);
        stack.add(mesh, line);
        slabs.push({ mesh, line, materials: [front, side, lid], i });
      });
    }
    build();

    function resize() {
      const { width, height } = el!.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      const aspect = width / height;
      const view = 2.15;
      camera.left = -view * aspect;
      camera.right = view * aspect;
      camera.top = view;
      camera.bottom = -view;
      camera.updateProjectionMatrix();
      request();
    }

    let pointerX = 0;
    let pointerY = 0;
    let rotY = 0;
    let rotX = 0;
    const start = performance.now();
    let frame = 0;
    let visible = true;
    let readySent = false;

    function render(now: number) {
      frame = 0;
      const t = Math.min(1, (now - start) / ASSEMBLE_MS);
      const gap = GAP_START + (GAP_END - GAP_START) * ease(t);
      for (const { mesh, line, i } of slabs) {
        // Each slab settles a little later than the one below it.
        const local = ease(Math.min(1, Math.max(0, (now - start - i * 90) / ASSEMBLE_MS)));
        const y = i * (THICK + gap) + (1 - local) * 0.1 * i;
        mesh.position.y = line.position.y = y;
        mesh.rotation.y = line.rotation.y = (1 - local) * 0.35 * (i % 2 ? 1 : -1);
      }
      rotY += (pointerX * 0.45 - rotY) * 0.08;
      rotX += (pointerY * 0.12 - rotX) * 0.08;
      stack.rotation.set(rotX, rotY, 0);
      renderer.render(scene, camera);
      if (!readySent) {
        readySent = true;
        onReady();
      }
      const settling = t < 1 || Math.abs(pointerX * 0.45 - rotY) > 0.001 || Math.abs(pointerY * 0.12 - rotX) > 0.001;
      if (settling) request();
    }

    function request() {
      if (!frame && visible && !document.hidden) frame = requestAnimationFrame(render);
    }

    function onPointer(e: PointerEvent) {
      pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      pointerY = (e.clientY / window.innerHeight) * 2 - 1;
      request();
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      request();
    });
    observer.observe(el);
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    const onVisibility = () => request();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onPointer, { passive: true });

    // Rebuild colours when the theme changes (system or the palette's override).
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const retheme = () => {
      build();
      request();
    };
    media.addEventListener("change", retheme);
    const themeObserver = new MutationObserver(retheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    resize();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      ro.disconnect();
      themeObserver.disconnect();
      media.removeEventListener("change", retheme);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
      slabs.forEach((s) => s.materials.forEach((m) => { m.map?.dispose(); m.dispose(); }));
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [onReady]);

  return <div ref={host} className="absolute inset-0 [&>canvas]:h-full [&>canvas]:w-full" />;
}
