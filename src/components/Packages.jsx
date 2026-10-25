import { motion } from "framer-motion";
import { packages, waLink } from "../data.js";

export default function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden bg-fyn-yellow py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-4"
        >
          02 · Packages we offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title max-w-3xl text-4xl sm:text-6xl"
        >
          Pick the plan that fits your shop
        </motion.h2>
        <p className="mt-6 max-w-xl text-lg font-medium">
          Simple monthly plans. Start small, upgrade whenever you are ready. Prices are per month.
        </p>

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col border-[3px] border-fyn-ink p-8 ${
                p.popular ? "chrome-panel shadow-pop md:-mt-4 md:mb-4" : "bg-fyn-yellow shadow-[6px_6px_0_0_#111]"
              }`}
            >
              {p.popular && (
                <span className="eyebrow absolute -top-4 right-5 bg-fyn-ink px-3 py-1 text-[10px] text-fyn-yellow">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-4xl">{p.name}</h3>
              <p className="mt-1 text-sm font-medium opacity-80">{p.tag}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-2xl">₹</span>
                <span className="font-display text-6xl leading-none">{p.price}</span>
                <span className="text-sm font-semibold">/mo</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 font-medium">
                    <span className="mt-[7px] h-3 w-3 shrink-0 rotate-45 bg-fyn-ink" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className={`btn-pop eyebrow mt-9 block px-6 py-4 text-center ${
                  p.popular ? "bg-fyn-ink text-fyn-yellow" : "border-[3px] border-fyn-ink bg-fyn-yellow"
                }`}
              >
                Start with {p.name}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-sm font-medium opacity-80">
          Need something different? We build custom plans for shops of every size. Sample pricing shown.
        </p>
      </div>
    </section>
  );
}
