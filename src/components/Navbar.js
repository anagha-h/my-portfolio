import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Navbar links are defined at module scope so their identity is stable
// and won't trigger the react-hooks/exhaustive-deps warning when used
// inside useEffect below.
const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#volunteering', label: 'Volunteering' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#about');

  // Use the module-level LINKS so the reference is stable for hooks
  const links = LINKS;

  useEffect(() => {
    // IntersectionObserver to highlight the nav item for the section in view
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // section is considered active when 60% visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          setActive(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each section that matches our links
    const observed = [];
    links.forEach((l) => {
      const selector = l.href;
      try {
        const el = document.querySelector(selector);
        if (el) {
          observer.observe(el);
          observed.push(el);
        }
      } catch (e) {
        // ignore malformed selectors
      }
    });

    return () => {
      observed.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []); // run once on mount

  function handleNavClick(e, href) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(href);
    setOpen(false);
  }

  return (
    <nav className="backdrop-blur bg-black/70 text-white fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-400 flex items-center justify-center text-black font-bold">AH</div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold">Anagha H.</div>
              <div className="text-xs text-teal-200">Data & ML</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 items-center">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`transition inline-block px-2 py-1 rounded ${active === l.href ? 'text-teal-300 underline underline-offset-4' : 'hover:text-teal-300'}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hidden md:inline-block bg-teal-400 text-black px-4 py-1 rounded-lg font-medium hover:bg-teal-300 transition">Get in touch</a>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded hover:bg-white/10 transition">
              {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden border-t border-white/5`}>
        <ul className="flex flex-col gap-2 p-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`block px-3 py-2 rounded ${active === l.href ? 'bg-white/5 text-teal-300' : 'hover:bg-white/5 hover:text-teal-300'}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
