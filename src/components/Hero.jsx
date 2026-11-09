import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import DotGrid from "./DotGrid.jsx";
import { waLink } from "../data.js";

const letters = ["F", "Y", "N"];

function GrowthChart() {
  const clientResults = [
    { label: "Durva", views: "2.14M", detail: "463K best reel · 7 reels over 100K", package: "Scale" },
    { label: "Sir Loom", views: "187K", detail: "178K before store opening", package: "Scale" },
    { label: "Konkani", views: "301K", detail: "57.6K best reel", package: "Grow" },
    { label: "Baldman", views: "245K", detail: "104K best reel", package: "Grow" },
  ];

  return (
    <div className="mx-auto mt-10 w-full max-w-4xl overflow-hidden rounded-[24px] border-2 border-fyn-ink bg-fyn-ink p-4 text-left shadow-[0_14px_32px_rgba(17,17,17,0.2)] sm:rounded-[28px] sm:border-[3px] sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow text-[10px] text-fyn-yellow">Proof of growth</p>
          <h3 className="mt-2 font-display text-2xl text-fyn-yellow sm:text-4xl">
            2.87M reel views
          </h3>
        </div>
        <div className="w-fit rounded-full border-[2px] border-fyn-yellow bg-fyn-yellow px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-fyn-ink">
          73 reels · 4 brands
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {clientResults.map((client) => (
          <article
            key={client.label}
            className="min-w-0 rounded-2xl border border-fyn-yellow/80 bg-[#18181b] p-4 sm:rounded-[20px] sm:border-2 sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-sm font-semibold text-fyn-ice">{client.label}</h4>
              <span className="shrink-0 font-display text-xl text-fyn-yellow">{client.views}</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-fyn-ice/70">{client.detail}</p>
            <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-fyn-ice/60">
                Package
              </span>
              <span className="rounded-full bg-fyn-yellow px-3 py-1 text-xs font-bold text-fyn-ink">
                {client.package}
              </span>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-fyn-ice/70">
        Total views include all reels on these accounts; some may predate FYN.
      </p>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 14 });
  const sy = useSpring(my, { stiffness: 80, damping: 14 });
  const rotY = useTransform(sx, [-1, 1], [-14, 14]);
  const rotX = useTransform(sy, [-1, 1], [10, -10]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-fyn-yellow"
    >
      <DotGrid />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,210,26,0.85)_0%,rgba(255,210,26,0)_60%)]" />

      <div className="relative z-10 px-5 pt-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="eyebrow mb-6"
        >
          Your growth partner, from content to customers.
        </motion.p>

        {/* 3D chrome logo */}
        <div style={{ perspective: 1000 }} className="mb-2">
          <motion.div
            style={{ rotateY: rotY, rotateX: rotX, transformStyle: "preserve-3d" }}
            className="inline-flex -skew-x-6 select-none gap-1 sm:gap-3"
          >
            {letters.map((l, i) => (
              <motion.span
                key={l}
                initial={{ rotateX: -110, y: -140, opacity: 0, scale: 0.6 }}
                animate={{ rotateX: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 11,
                  delay: 0.35 + i * 0.18,
                }}
                whileHover={{ y: -14, rotateZ: i === 1 ? 0 : i === 0 ? -4 : 4 }}
                className="chrome-text chrome-shine font-display inline-block text-[28vw] leading-[0.9] sm:text-[20vw] md:text-[220px]"
              >
                {l}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* tagline like the logo: lines + wide letterspacing */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mx-auto mb-10 flex max-w-xl items-center justify-center gap-2 sm:gap-4 -rotate-3"
        >
          <span className="h-[3px] w-6 bg-fyn-ink sm:w-20" />
          <span className="font-wide text-[10px] font-extrabold uppercase tracking-[0.14em] [font-stretch:125%] sm:text-lg sm:tracking-[0.3em]">
            Find Your Need
          </span>
          <span className="h-[3px] w-6 bg-fyn-ink sm:w-20" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="section-title mx-auto max-w-3xl text-4xl sm:text-6xl"
        >
          Grow <span className="bg-fyn-ink px-3 text-fyn-yellow">with FYN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mx-auto mt-6 max-w-xl text-lg font-medium"
        >
          FYN helps local businesses grow with content, strategy and on-ground business
          support that turns attention into footfall, orders and repeat sales.
        </motion.p>

        <a
          href="#partners"
          className="eyebrow mt-6 inline-flex items-center gap-2 text-[10px] text-fyn-ink/75"
        >
          Scroll to see our work
          <span aria-hidden="true" className="text-base leading-none">↓</span>
        </a>

        <GrowthChart />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="btn-pop eyebrow w-full max-w-[260px] bg-fyn-ink px-8 py-5 text-fyn-yellow sm:w-auto"
          >
            Chat on WhatsApp
          </a>
          {/* <a
            href="#packages"
            className="btn-pop eyebrow w-full max-w-[260px] border-[3px] border-fyn-ink bg-fyn-yellow px-8 py-[17px] sm:w-auto"
          >
            See packages
          </a> */}
        </motion.div>
      </div>

    </section>
  );
}
