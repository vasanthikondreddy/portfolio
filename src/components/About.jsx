import { MapPin, Mail, Phone, Star } from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="reveal mb-16">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">01. About</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <div className="reveal reveal-delay-1">
              <p className="font-body text-muted text-base leading-relaxed">
  I'm a <span className="text-text font-medium">Full Stack Developer</span> and{' '}
  <span className="text-accent font-medium">AI/ML enthusiast</span> passionate about
  building intelligent applications using modern web technologies, deep learning,
  and cloud infrastructure.
</p>

<p className="font-body text-muted text-base leading-relaxed">
  I've worked on real-world projects including AI-powered healthcare systems,
  predictive machine learning models, and scalable MERN stack applications
  through internships at <span className="text-lime font-medium">SURE Trust</span> and{' '}
  <span className="text-lime font-medium">Infosys Springboard</span>.
</p>

<p className="font-body text-muted text-base leading-relaxed">
  Currently, I'm focused on expanding my expertise in{' '}
  <span className="text-accent">Artificial Intelligence</span>,{' '}
  <span className="text-accent">Deep Learning</span>,{' '}
  <span className="text-accent">Computer Vision</span>, and{' '}
  <span className="text-accent">Generative AI</span> while continuing to build
  impactful software products.
</p>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="font-body text-muted text-base leading-relaxed">
                I've completed internships at <span className="text-lime font-medium">SURE Trust</span> and{' '}
                <span className="text-lime font-medium">Infosys Springboard</span>, where I worked on
                real-world projects including a volunteer logistics platform deployed on AWS and an
                earthquake alert prediction system with Random Forest models.
              </p>
            </div>
            <div className="reveal reveal-delay-3">
              <p className="font-body text-muted text-base leading-relaxed">
                I enjoy problem-solving at the intersection of <span className="text-accent">web development</span>,{' '}
                <span className="text-accent">machine learning</span>, and{' '}
                <span className="text-accent">cloud infrastructure</span> — continuously expanding my
                skills through practical experience.
              </p>
            </div>

            {/* Contact details */}
            <div className="reveal reveal-delay-4 flex flex-wrap gap-4 pt-2">
              {[
                { icon: <MapPin size={14} />, text: personalInfo.location },
                { icon: <Mail size={14} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={14} />, text: personalInfo.phone },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href || '#'}
                  className="flex items-center gap-2 text-sm font-body text-muted hover:text-accent transition-colors"
                >
                  <span className="text-accent">{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Certifications card */}
          <div className="lg:col-span-2 reveal reveal-delay-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold text-text text-sm mb-5 flex items-center gap-2">
                <Star size={14} className="text-lime" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex flex-col">
                    <span className="font-body text-sm text-text font-medium">{cert.name}</span>
                    <span className="font-body text-xs text-muted">{cert.issuer}</span>
                    <span className="mt-1 h-px bg-border/50" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
