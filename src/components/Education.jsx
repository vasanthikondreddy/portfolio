import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">05. Education</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Academic Background
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`reveal reveal-delay-${i + 1} group relative rounded-2xl border border-border bg-card p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                <GraduationCap size={18} className="text-accent" />
              </div>

              {/* Degree */}
              <h3 className="font-display font-bold text-text text-base leading-tight mb-2">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="font-body text-muted text-sm mb-4 leading-relaxed">
                {edu.institution}
              </p>

              {/* Period */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-subtle">{edu.period}</span>
                <div className="flex items-center gap-1">
                  <Award size={12} className="text-lime" />
                  <span className="font-display font-bold text-lime text-sm">{edu.cgpa}</span>
                </div>
              </div>

              {/* Note */}
              {edu.note && (
                <div className="mt-3 pt-3 border-t border-border/50">
                  <span className="font-mono text-xs text-accent">{edu.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <div className="reveal mt-10 rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display font-semibold text-text text-sm mb-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Data Structures & Algorithms',
              'Probability & Statistics',
              'Linear Algebra',
              'Database Management Systems',
              'Object-Oriented Programming',
              'Machine Learning (Foundations)',
            ].map((course) => (
              <span
                key={course}
                className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-muted hover:border-accent/30 hover:text-text transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
