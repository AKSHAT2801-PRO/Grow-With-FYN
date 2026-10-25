import { motion } from "framer-motion";
import { partners, works } from "../data.js";

export default function Partners() {
  const loop = [...partners, ...partners];

  return (
    <section id="partners" className="relative bg-fyn-ink py-24 text-fyn-ice">
      <div className="dots-ink pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-4 text-fyn-yellow"
        >
          01 · Our Partners and Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title max-w-3xl text-4xl text-fyn-yellow sm:text-6xl"
        >
          Shops we grow, stories we tell
        </motion.h2>
        <p className="mt-6 max-w-xl text-lg text-fyn-chrome">
          From restaurants to salons, these are the local businesses FYN helped grow with content,
          visibility and repeat customer attention.
        </p>
      </div>

      {/* partner marquee */}
      <div className="relative mt-14 overflow-hidden border-y-[3px] border-fyn-yellow py-6">
        <div className="animate-marquee flex w-max gap-6">
          {loop.map((p, i) => (
            <div
              key={i}
              className="chrome-panel font-display whitespace-nowrap px-8 py-4 text-xl text-fyn-ink shadow-chrome"
              style={{ clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)" }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* work cards */}
      <div className="relative mx-auto mt-16 grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        {works.map((w, i) => (
          <motion.article
            key={w.shop}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -8, rotate: -0.6 }}
            className="group border-[3px] border-fyn-yellow bg-fyn-ink p-7 transition-colors hover:bg-fyn-yellow hover:text-fyn-ink"
          >
            <p className="eyebrow text-[10px] text-fyn-yellow group-hover:text-fyn-ink">{w.type}</p>
            <h3 className="font-display mt-2 text-2xl">{w.shop}</h3>
            <p className="chrome-text font-display mt-6 text-7xl leading-none group-hover:[-webkit-text-stroke:2px_#111]">
              {w.result}
            </p>
            <p className="mt-2 font-semibold">{w.label}</p>
            <p className="mt-5 border-t-2 border-current/30 pt-4 text-sm opacity-80">{w.work}</p>
            <a
              href={w.watchLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center text-sm font-semibold underline underline-offset-4"
            >
              Watch reel
            </a>
          </motion.article>
        ))}
      </div>
      <p className="relative mx-auto mt-6 max-w-6xl px-5 text-xs text-fyn-chrome/60">
        Real reel numbers from the latest Instagram review, updated for the live site.
      </p>
    </section>
  );
}
