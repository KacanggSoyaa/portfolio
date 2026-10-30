import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolio';
import { buildInquiryLinks, whatsappUrl } from '../../utils/contact';
import { copyText } from '../../utils/clipboard';
import { Mail, MessageCircle, Send, CheckCircle2, Copy, Check, Clock, ShieldCheck } from 'lucide-react';
import { playClick } from '../../utils/sound';

export const ContactApp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'High-Converting Landing Pages',
    budget: '$200 - $500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    playClick();
    if (!(await copyText(personalInfo.email))) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    playClick();
    setSubmitted(true);
  };

  const inquiryLinks = buildInquiryLinks(formData);

  return (
    <div className="flex flex-col h-full bg-slate-950/95 text-slate-100 font-sans select-text overflow-y-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for select projects
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white">Let's Build Something Exceptional</h1>
          <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto">
            Have a project in mind, need a quick consultation, or want a custom quote? Fill out the brief below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                Direct Contact Channels
              </h3>

              {/* WhatsApp Quick Chat */}
              <a
                href={whatsappUrl('Hi Danis! I saw your portfolio and would like to discuss a freelance project.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-900/60 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">WhatsApp Chat</div>
                    <div className="text-[11px] text-emerald-400">Instant Messaging</div>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Chat &rarr;
                </span>
              </a>

              {/* Email Copy Card */}
              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
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
                <div className="font-mono text-xs text-slate-200 select-all bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  {personalInfo.email}
                </div>
              </div>

              {/* Guarantee highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Average response time: <strong>&lt; 4 hours</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No obligation, 100% free consultation</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex justify-around text-xs">
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
                LinkedIn &rarr;
              </a>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div
                role="status"
                className="p-8 rounded-2xl bg-slate-900/80 border border-cyan-800/60 text-center space-y-4 shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-950 border border-cyan-500/50 flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">Inquiry Details Prepared</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Choose a channel below to send your inquiry about <em>{formData.service}</em> directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={inquiryLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs py-2.5 px-5 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                  </a>
                  <a
                    href={inquiryLinks.email}
                    onClick={playClick}
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs py-2.5 px-5 rounded-lg border border-slate-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Open in Email App
                  </a>
                </div>
                <button
                  onClick={() => {
                    playClick();
                    setSubmitted(false);
                  }}
                  className="mt-2 text-xs text-slate-400 hover:text-white underline"
                >
                  Edit message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 shadow-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      maxLength={80}
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option>High-Converting Landing Pages</option>
                      <option>Custom Web Applications</option>
                      <option>Website Redesign & Speed Optimization</option>
                      <option>IT Setup & Cloud Deployment</option>
                      <option>General Freelance / Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option>&lt; $200 (Small Task / Redesign)</option>
                      <option>$200 - $500 (Landing Page)</option>
                      <option>$500 - $1,500 (Custom Web App)</option>
                      <option>$1,500+ (Comprehensive Project)</option>
                      <option>Flexible / Need Advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Project Details & Goals</label>
                  <textarea
                    required
                    maxLength={2000}
                    rows={4}
                    placeholder="Briefly describe what you want to achieve, any deadline, or reference websites..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-3.5 h-3.5" /> Send Project Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
