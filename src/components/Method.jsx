import { motion } from "framer-motion";
import { method } from "../data.js";

export default function Method() {
  return (
    <section id="method" className="relative bg-fyn-ice py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-4 text-fyn-steel"
        >
          03 · Method of Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title max-w-3xl text-4xl sm:text-6xl"
        >
          Four steps from <span className="bg-fyn-yellow px-2">need</span> to growth
        </motion.h2>

        <div className="relative mt-16">
          {/* connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="absolute left-0 right-0 top-[38px] hidden h-[4px] bg-fyn-ink lg:block"
          />
          <div className="grid gap-10 lg:grid-cols-4">
            {method.map((m, i) => (
              <motion.div
                key={m.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div
                  className="font-display relative z-10 grid h-[76px] w-[76px] -skew-x-6 place-items-center border-[3px] border-fyn-ink bg-fyn-yellow text-3xl shadow-[5px_5px_0_0_#111]"
                >
                  {m.step}
                </div>
                <h3 className="font-display mt-6 text-3xl">{m.title}</h3>
                <p className="mt-3 text-base font-medium text-fyn-steel">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
