import { useEffect, useState } from "react";
import { navLinks, profile } from "../data.js";

export default function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = "";
      sections.forEach((s) => {
        if (s.offsetTop <= y) current = s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={go}>
          <span className="brand-name">
            {profile.firstName} <em>{profile.lastName}</em>
          </span>
          <span className="brand-role mono">FULL-STACK DEVELOPER</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : ""} onClick={go}>
              {l.label}
            </a>
          ))}
          <a href={profile.resume} download className="nav-resume-mobile" onClick={go}>
            Download resume
          </a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme" title="Toggle theme">
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <a href="#contact" className="btn btn-light nav-cta">
            Let's talk
          </a>
          <button className="icon-btn menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
