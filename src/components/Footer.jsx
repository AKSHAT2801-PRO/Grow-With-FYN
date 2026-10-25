import { waLink, nav } from "../data.js";

export default function Footer() {
  return (
    <footer className="bg-fyn-ink py-14 text-fyn-ice">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-5 md:flex-row md:items-center">
        <div>
          <p className="font-display text-6xl leading-none">
            <span className="chrome-text chrome-shine inline-block -skew-x-6">FYN</span>
          </p>
          <p className="eyebrow mt-3 text-fyn-yellow">Find your need</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="eyebrow hover:text-fyn-yellow">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="eyebrow bg-fyn-yellow px-6 py-4 text-fyn-ink transition hover:bg-white"
        >
          Message us on WhatsApp
        </a>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-fyn-chrome/60">
        © {new Date().getFullYear()} FYN. Grow with FYN.
      </p>
    </footer>
  );
}
