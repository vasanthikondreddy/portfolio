import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <a href="#" className="font-display font-bold text-lg">
              <span className="text-accent">V</span>
              <span className="text-text">K</span>
              <span className="text-xs font-mono text-muted ml-1">.dev</span>
            </a>
            <p className="font-body text-xs text-muted mt-1">Full Stack · ML · Data Science</p>
          </div>

          {/* Nav */}
          <ul className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs font-body text-muted hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted hover:text-accent hover:border-accent/40 transition-all">
              <Github size={14} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted hover:text-accent hover:border-accent/40 transition-all">
              <Linkedin size={14} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted hover:text-accent hover:border-accent/40 transition-all">
              <Mail size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 text-center">
          <p className="font-body text-xs text-subtle flex items-center justify-center gap-1.5">
            Built with <Heart size={10} className="text-accent fill-accent" /> by Vasanthi Kondreddy · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
