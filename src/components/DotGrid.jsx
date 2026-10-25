import { useEffect, useRef } from "react";

/**
 * Interactive dot grid, inspired by the square dots on the FYN logo background.
 * Dots grow and darken near the cursor, ripple on click and drift in a slow wave.
 */
export default function DotGrid({
  gap = 46,
  base = 5,
  color = "120, 80, 0",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0,
      h = 0,
      raf = 0;
    const mouse = { x: -9999, y: -9999 };
    const ripples = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    const onClick = (e) => {
      const r = canvas.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: 0 });
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h);
      const cols = Math.ceil(w / gap) + 1;
      const rows = Math.ceil(h / gap) + 1;
      const offX = (w - (cols - 1) * gap) / 2;
      const offY = (h - (rows - 1) * gap) / 2;

      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].t += 1;
        if (ripples[i].t > 70) ripples.splice(i, 1);
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offX + c * gap;
          const y = offY + r * gap;

          // idle wave
          const wave = reduced
            ? 0
            : (Math.sin(time * 0.0012 + c * 0.45 + r * 0.3) + 1) * 0.5;

          // cursor proximity
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const near = Math.max(0, 1 - dist / 170);

          // click ripples
          let rip = 0;
          for (const p of ripples) {
            const rd = Math.hypot(x - p.x, y - p.y);
            const front = p.t * 9;
            const d = Math.abs(rd - front);
            if (d < 50) rip = Math.max(rip, (1 - d / 50) * (1 - p.t / 70));
          }

          const k = Math.min(1, near * near + rip + wave * 0.15);
          const size = base + k * 13;
          const alpha = 0.28 + k * 0.62;

          ctx.fillStyle = `rgba(${color}, ${alpha})`;
          // lift toward cursor slightly
          const px = x - (dx / (dist || 1)) * near * 6;
          const py = y - (dy / (dist || 1)) * near * 6;
          const rot = k * 0.8;
          ctx.save();
          ctx.translate(px, py);
          ctx.rotate(rot);
          ctx.fillRect(-size / 2, -size / 2, size, size);
          ctx.restore();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onClick);
    canvas.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [gap, base, color]);

  return <canvas ref={ref} className={`absolute inset-0 h-full w-full ${className}`} />;
}
