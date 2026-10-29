import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { Mail, MessageCircle, Send, CheckCircle2, Copy, Check, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClick, playSuccess } from '../utils/sound';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedService || 'High-Converting Landing Pages',
    budget: '$200 - $500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccess();

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#3b82f6', '#10b981'],
    });

    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Danis! I saw your portfolio and would like to discuss a freelance project (${formData.service}).`
  );

  return (
    <section id="contact" className="py-14 md:py-16 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 border border-cyan-800/50 text-cyan-400">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Start Your Project or Request a Free Quote
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Have an idea in mind, need a consultation, or looking for a developer? Send a message below or chat directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                Direct Contact Channels
              </h3>

              {/* WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/60123456789?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="flex items-center justify-between p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/50 hover:bg-emerald-900/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-900/60 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">WhatsApp Chat</div>
                    <div className="text-[11px] text-emerald-400">Fast direct reply</div>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Message &rarr;
                </span>
              </a>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-cyan-400" /> Email Address
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-xs text-slate-200 select-all bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                  {personalInfo.email}
                </div>
              </div>

              {/* Assurances */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Response time: <strong>Within 2–4 hours</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free consultation & project proposal</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex justify-around text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                GitHub Profile &rarr;
              </a>
              <span className="text-slate-700">&bull;</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                LinkedIn Profile &rarr;
              </a>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-cyan-800/60 text-center space-y-4 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/50 flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. I've received your inquiry regarding <em>{formData.service}</em> and will follow up directly at <strong>{formData.email}</strong> within 2-4 hours.
                </p>
                <button
                  onClick={() => {
                    playClick();
                    setSubmitted(false);
                  }}
                  className="mt-4 text-xs text-slate-400 hover:text-white underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4 shadow-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option>High-Converting Landing Pages</option>
                      <option>Custom Web Applications</option>
                      <option>Website Redesign & Speed Optimization</option>
                      <option>IT Setup & Cloud Deployment</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option>&lt; $200 (Small Task / Fix)</option>
                      <option>$200 - $500 (Landing Page)</option>
                      <option>$500 - $1,500 (Web Application)</option>
                      <option>$1,500+ (Comprehensive Project)</option>
                      <option>Flexible / Looking for advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Project Scope & Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your business, reference websites, or deadlines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" /> Send Inquiry & Get Free Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
