import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Partners from "./components/Partners.jsx";
import Packages from "./components/Packages.jsx";
import Method from "./components/Method.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import { waLink } from "./data.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        {/* <Packages /> */}
        <Method />
        <About />
      </main>
      <Footer />

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with FYN on WhatsApp"
        className="btn-pop fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border-[3px] border-fyn-ink bg-fyn-yellow"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.3.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z" />
        </svg>
      </a>
    </>
  );
}
