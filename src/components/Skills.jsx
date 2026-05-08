import { skills } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-accent/30" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">02. Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Tech Stack
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.category}
              className={`reveal reveal-delay-${i + 1} group rounded-2xl border border-border bg-card p-6 hover:border-${skill.color === 'accent' ? 'accent' : 'lime'}/40 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className={`font-display font-semibold text-sm ${skill.color === 'accent' ? 'text-accent' : 'text-lime'}`}>
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono text-muted group-hover:text-text group-hover:border-subtle transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding profiles */}
        <div className="reveal mt-12">
          <p className="font-body text-muted text-sm mb-5 text-center">Competitive Programming & Coding Profiles</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org', color: 'text-green-400' },
              { name: 'LeetCode', url: 'https://leetcode.com', color: 'text-orange-400' },
              { name: 'HackerRank', url: 'https://hackerrank.com', color: 'text-emerald-400' },
              { name: 'Unstop', url: 'https://unstop.com', color: 'text-blue-400' },
            ].map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg border border-border bg-card text-sm font-display font-medium ${profile.color} hover:border-current hover:bg-surface transition-all`}
              >
                {profile.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
