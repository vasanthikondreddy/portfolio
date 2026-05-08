import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">04. Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-lime/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={exp.role} className={`reveal reveal-delay-${i + 1} relative sm:pl-20`}>
                {/* Timeline dot */}
                <div
                  className={`hidden sm:flex absolute left-4 sm:left-4 top-5 w-8 h-8 rounded-full border-2 ${exp.color === 'accent' ? 'border-accent bg-accent/10' : 'border-lime bg-lime/10'} items-center justify-center`}
                >
                  <Briefcase size={14} className={exp.color === 'accent' ? 'text-accent' : 'text-lime'} />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-border bg-card p-6 hover:border-accent/20 transition-all">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-display font-bold text-text text-lg">{exp.role}</h3>
                      <p className={`font-body font-medium text-sm mt-1 ${exp.color === 'accent' ? 'text-accent' : 'text-lime'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="font-mono text-xs text-muted bg-surface border border-border px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="font-mono text-xs text-subtle">{exp.type}</span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-3">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2
                          size={15}
                          className={`mt-0.5 flex-shrink-0 ${exp.color === 'accent' ? 'text-accent' : 'text-lime'}`}
                        />
                        <p className="font-body text-muted text-sm leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
