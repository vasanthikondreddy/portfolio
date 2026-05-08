import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const TypewriterWords = () => {
  return (
    <span className="shimmer-text font-display font-bold">
      Full Stack Developer &amp; ML Engineer
    </span>
  );
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern"
        style={{ backgroundSize: '40px 40px' }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-lime/5 blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono mb-8"
          style={{ animation: 'fadeUp 0.6s ease forwards', opacity: 0 }}
        >
          <Sparkles size={12} />
          GATE-Qualified · B.Tech CSE · CGPA 9.0
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl sm:text-7xl font-extrabold text-text mb-4 tracking-tight leading-none"
          style={{ animation: 'fadeUp 0.6s ease 0.15s forwards', opacity: 0 }}
        >
          Vasanthi
          <br />
          <span className="text-accent">Kondreddy</span>
        </h1>

        {/* Tagline */}
        <div
          className="text-lg sm:text-xl mb-6"
          style={{ animation: 'fadeUp 0.6s ease 0.3s forwards', opacity: 0 }}
        >
          <TypewriterWords />
        </div>

        {/* Subtitle */}
        <p
          className="font-body text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          style={{ animation: 'fadeUp 0.6s ease 0.45s forwards', opacity: 0 }}
        >
          Building scalable MERN applications and intelligent ML systems.
          Passionate about AI, data, and real-world impact.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          style={{ animation: 'fadeUp 0.6s ease 0.6s forwards', opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-bg font-display font-semibold text-sm hover:bg-accent-dim transition-all hover:scale-105 shadow-lg shadow-accent/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-text font-display font-medium text-sm hover:border-accent/50 hover:text-accent transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-5"
          style={{ animation: 'fadeUp 0.6s ease 0.75s forwards', opacity: 0 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-text text-sm font-body transition-colors group"
          >
            <Github size={18} className="group-hover:text-accent transition-colors" />
            GitHub
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-text text-sm font-body transition-colors group"
          >
            <Linkedin size={18} className="group-hover:text-accent transition-colors" />
            LinkedIn
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-muted hover:text-text text-sm font-body transition-colors group"
          >
            <Mail size={18} className="group-hover:text-accent transition-colors" />
            Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeIn 1s ease 1.2s forwards', opacity: 0 }}
      >
        <span className="text-xs font-mono text-subtle">scroll</span>
        <ArrowDown size={16} className="text-subtle animate-bounce" />
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t border-border/40 bg-surface/30 backdrop-blur-sm"
        style={{ animation: 'fadeIn 0.8s ease 1s forwards', opacity: 0 }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-3 flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-0">
          {[
            { label: 'CGPA', value: '9.0 / 10' },
            { label: 'Internships', value: '2 Completed' },
            { label: 'Projects', value: '4+ Built' },
            { label: 'Status', value: 'Open to Work' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-accent text-sm">{stat.value}</div>
              <div className="font-body text-muted text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
