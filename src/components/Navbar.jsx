import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav, waLink } from "../data.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-fyn-yellow/90 shadow-[0_3px_0_0_#111] backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" aria-label="FYN — Find Your Need" className="shrink-0 leading-none">
          <img
            src="/fyn-logo-sticker.png"
            alt="FYN — Find Your Need"
            className="h-12 w-auto max-w-[150px] object-contain sm:h-14 sm:max-w-[170px]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="eyebrow relative after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-fyn-ink after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="btn-pop eyebrow rounded-none bg-fyn-ink px-5 py-3 text-fyn-yellow"
          >
            Talk to us
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span className={`h-[3px] w-7 bg-fyn-ink transition ${open ? "translate-y-[9px] rotate-45" : ""}`} />
          <span className={`h-[3px] w-7 bg-fyn-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-[3px] w-7 bg-fyn-ink transition ${open ? "-translate-y-[9px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t-[3px] border-fyn-ink bg-fyn-yellow px-5 pb-5 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-display block border-b-2 border-fyn-ink/20 py-4 text-2xl"
            >
              {n.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="btn-pop eyebrow mt-5 block bg-fyn-ink px-5 py-4 text-center text-fyn-yellow"
          >
            Talk to us on WhatsApp
          </a>
        </div>
      )}
    </motion.header>
  );
}
