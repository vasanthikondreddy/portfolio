import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg tracking-tight group">
          <span className="text-accent">Vasanthi</span>
          &nbsp;&nbsp;
          <span className="text-text">Kondreddy</span>
          {/* <span className="ml-1 text-xs font-mono text-muted group-hover:text-accent transition-colors">
            .dev
          </span> */}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm font-body text-muted hover:text-text transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-display font-medium hover:bg-accent/20 transition-all"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-sm font-body text-muted hover:text-text hover:bg-card rounded-lg transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-border">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-3 text-sm font-display font-medium text-accent"
              >
                <Download size={14} /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
