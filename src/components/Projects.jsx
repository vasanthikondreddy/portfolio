import { Github, ExternalLink, Zap, Brain, Code2, BarChart2 } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

const categoryIcons = {
  'Full Stack': <Code2 size={14} />,
  'Machine Learning': <Brain size={14} />,
  'AI / ML': <Zap size={14} />,
  // 'Data Science': <BarChart2 size={14} />,
};

const categoryColors = {
  'Full Stack': 'text-accent border-accent/30 bg-accent/10',
  'Machine Learning': 'text-lime border-lime/30 bg-lime/10',
  'AI / ML': 'text-purple-400 border-purple-400/30 bg-purple-400/10',
  // 'Data Science': 'text-orange-400 border-orange-400/30 bg-orange-400/10',
};

function ProjectCard({ project, index, featured }) {
  return (
    <div
      className={`reveal reveal-delay-${index + 1} group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/30 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/5`}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono">
            <Zap size={10} fill="currentColor" /> Featured
          </span>
        </div>
      )}

      <div className="relative z-10 p-6">
        {/* Category badge */}
        <div className="mb-4">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-display font-medium ${categoryColors[project.category]}`}>
            {categoryIcons[project.category]}
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-text text-lg mb-3 leading-tight group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2 text-xs font-body text-muted">
              <span className="mt-0.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded bg-surface border border-border text-xs font-mono text-subtle"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-border/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-body text-muted hover:text-text transition-colors"
          >
            <Github size={14} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-body text-accent hover:text-accent-dim transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">03. Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Things I've Built
          </h2>
          <p className="font-body text-muted text-sm mt-3 max-w-md">
            Real-world applications spanning full-stack development, machine learning, and AI.
          </p>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} featured />
          ))}
        </div>

        {/* Others */}
        <div className="grid sm:grid-cols-2 gap-5">
          {others.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i + featured.length} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
