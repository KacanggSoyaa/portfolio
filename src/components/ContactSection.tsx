import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';
import { whatsappUrl } from '../utils/contact';
import { Mail, MessageCircle, Send, CheckCircle2, Copy, Check, Clock, ShieldCheck } from 'lucide-react';

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

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiryUrl = whatsappUrl(
    `Hi Danis! My name is ${formData.name || 'there'}. I would like to inquire about ${formData.service}. Details: ${formData.message || 'Looking for a project consultation.'}`
  );

  const mailtoInquiryUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.service} (${formData.name})`
  )}&body=${encodeURIComponent(
    `Hi Danis,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Start Your Project or Request a Free Consultation
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Have a project in mind, need a speed audit, or looking for an experienced developer? Drop a message below or chat directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 shadow-lg">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Direct Channels
              </h3>

              {/* WhatsApp Quick Chat */}
              <a
                href={whatsappUrl('Hi Danis, I saw your portfolio and would like to discuss a project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-700/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-800/60 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">WhatsApp Chat</div>
                    <div className="text-[11px] text-emerald-400">{personalInfo.whatsapp}</div>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all">
                  Chat &rarr;
                </span>
              </a>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
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
                        <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-xs text-slate-200 block hover:text-cyan-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Guarantees */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Response time: <strong>Within 2–4 hours</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free discovery review &amp; fixed estimates</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-around text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                GitHub Profile &rarr;
              </a>
              <span className="text-slate-700">&bull;</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                LinkedIn Profile &rarr;
              </a>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div role="status" className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-5 shadow-xl">
                <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-700/60 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Inquiry Details Prepared!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Choose your preferred channel below to send this directly for immediate review:
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs py-2.5 px-5 rounded-xl transition-all"
                  >
                    <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                  </a>

                  <a
                    href={mailtoInquiryUrl}
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs py-2.5 px-5 rounded-xl border border-slate-700 transition-all"
                  >
                    <Mail className="w-4 h-4" /> Open in Email App
                  </a>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-slate-400 hover:text-white underline block mx-auto"
                >
                  Edit message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 mb-1.5">Service Needed</label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option>High-Converting Landing Pages</option>
                      <option>Custom Web Applications</option>
                      <option>Website Redesign &amp; Speed Optimization</option>
                      <option>IT Setup &amp; Cloud Deployment</option>
                      <option>General Consultation / Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-semibold text-slate-300 mb-1.5">Estimated Budget</label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option>&lt; $200 (Small Task / Fix)</option>
                      <option>$200 - $500 (Landing Page)</option>
                      <option>$500 - $1,500 (Web Application)</option>
                      <option>$1,500+ (Custom Enterprise Project)</option>
                      <option>Flexible / To be discussed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">Project Brief &amp; Goals</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Briefly describe your project, timeline, or current website challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-cyan-500/20 transition-all"
                >
                  <Send className="w-4 h-4" /> Submit Inquiry &amp; Request Free Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
