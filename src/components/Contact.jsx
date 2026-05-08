import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-accent/30" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">06. Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-2">
            Let's Connect
          </h2>
          <p className="font-body text-muted text-sm mt-3 max-w-md">
            Open to internships, collaborations, and full-time opportunities. Let's build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8 reveal reveal-delay-1">
            {/* Contact items */}
            <div className="space-y-5">
              {[
                { icon: <Mail size={16} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={16} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={16} />, label: 'Location', value: personalInfo.location, href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-body text-sm text-text hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-text">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-accent/40 hover:text-accent text-muted text-sm font-body transition-all"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-accent/40 hover:text-accent text-muted text-sm font-body transition-all"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>

            {/* Availability badge */}
            <div className="rounded-xl border border-lime/20 bg-lime/5 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="font-display font-semibold text-lime text-sm">Available for Opportunities</span>
              </div>
              <p className="font-body text-muted text-xs leading-relaxed">
                Currently seeking internships and full-time roles in full-stack development, ML engineering, or data science.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl border border-lime/30 bg-lime/5">
                <CheckCircle size={48} className="text-lime mb-4" />
                <h3 className="font-display font-bold text-text text-xl mb-2">Message Sent!</h3>
                <p className="font-body text-muted text-sm">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-body text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs text-muted mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-body text-text placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs text-muted mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-body text-text placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-xs text-muted mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Collaboration / ..."
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-body text-text placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-muted mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm font-body text-text placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-bg font-display font-semibold text-sm hover:bg-accent-dim transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
