import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import DotGrid from "./DotGrid.jsx";
import { aboutStats, aboutPoints, waLink } from "../data.js";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const sanitizedValue = value.replace(/,/g, "");
  const match = sanitizedValue.match(/^([\d.]+)([A-Za-z+\-]*)$/);
  const isNumeric = Boolean(match);
  const target = isNumeric ? Number.parseFloat(match[1]) : 0;
  const suffix = isNumeric ? match[2] : "";
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / 1400);
      const eased = target * (1 - Math.pow(1 - p, 3));
      setN(Number.isInteger(target) ? Math.round(eased) : eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, target]);

  if (!isNumeric) {
    return <span ref={ref}>{value}</span>;
  }

  const displayValue = Number.isInteger(target) ? Math.round(n) : n.toFixed(1).replace(/\.0$/, "");

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-fyn-yellow py-24">
      <DotGrid gap={52} base={4} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            04 · About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl sm:text-6xl"
          >
            Find your need. <br />
            We handle the rest.
          </motion.h2>
          <p className="mt-6 max-w-lg text-lg font-medium">
            FYN is a student-run growth company in Pune helping local businesses and public
            figures turn attention into footfall, orders and repeat sales through content,
            strategy and on-ground support.
          </p>
          <ul className="mt-8 space-y-3">
            {aboutPoints.map((a) => (
              <li key={a} className="flex gap-3 font-semibold">
                <span className="mt-[7px] h-3 w-3 shrink-0 rotate-45 bg-fyn-ink" />
                {a}
              </li>
            ))}
          </ul>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="btn-pop eyebrow mt-10 inline-block bg-fyn-ink px-8 py-5 text-fyn-yellow"
          >
            Grow with FYN
          </a>
        </div>

        <div className="grid gap-5">
          {aboutStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="chrome-panel flex items-center justify-between border-[3px] border-fyn-ink px-6 py-5 shadow-pop sm:px-8 sm:py-6"
            >
              <span className="font-display text-6xl leading-none sm:text-7xl">
                <Counter value={s.value} />
              </span>
              <span className="eyebrow max-w-[9rem] text-right text-[11px]">{s.label}</span>
            </motion.div>
          ))}
          <p className="text-xs font-medium opacity-70">Real Instagram proof, updated from the latest FYN review.</p>
        </div>
      </div>
    </section>
  );
}
