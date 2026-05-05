import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="pt-20 md:pt-20 bg-background text-on-background font-body-md min-h-screen selection:bg-surface-tint selection:text-on-primary-fixed">
      <main className="pt-[10px] md:pt-[20px] pb-[10px] md:pb-[20px] px-[1%] md:px-8 max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-[10px] md:mb-[20px]"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-[10px]">
            <span className="flex h-2 w-2 rounded-full bg-surface-tint animate-pulse"></span>
            <span className="text-[10px] md:font-label-caps text-surface-tint uppercase tracking-widest">All Systems Operational</span>
          </div>
          <h1 className="text-3xl md:font-h1 text-on-surface mb-2 md:mb-[10px] uppercase tracking-tight font-bold">Human <span className="text-surface-tint">Support</span></h1>
          <p className="text-[12px] md:font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Our engineering team is standing by for API integrations, data modeling, or scaling questions.
          </p>
        </motion.section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-[10px]">
          {/* Left Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 glass-card p-2 md:p-[10px] rounded-xl border border-outline-variant/30"
          >
            <h2 className="text-lg md:font-h3 text-on-surface mb-2 md:mb-[10px] uppercase tracking-widest font-bold">Send Transmission</h2>
            <form className="space-y-2 md:space-y-[10px]" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[10px]">
                <div className="space-y-1.5">
                  <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Identity</label>
                  <input required disabled={isSubmitting} className="w-full bg-surface-container-high border border-outline-variant/30 focus:border-surface-tint focus:ring-1 focus:ring-surface-tint text-on-surface px-4 py-2.5 md:py-3 rounded md:rounded-lg text-[12px] md:font-body-sm transition-all outline-none placeholder:text-on-surface-variant/50 disabled:opacity-50" placeholder="Full Name" type="text" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Encryption</label>
                  <input required disabled={isSubmitting} className="w-full bg-surface-container-high border border-outline-variant/30 focus:border-surface-tint focus:ring-1 focus:ring-surface-tint text-on-surface px-4 py-2.5 md:py-3 rounded md:rounded-lg text-[12px] md:font-body-sm transition-all outline-none placeholder:text-on-surface-variant/50 disabled:opacity-50" placeholder="Email Address" type="email" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Subject</label>
                <div className="relative">
                  <select disabled={isSubmitting} className="w-full bg-surface-container-high border border-outline-variant/30 focus:border-surface-tint focus:ring-1 focus:ring-surface-tint text-on-surface px-4 py-2.5 md:py-3 rounded md:rounded-lg text-[12px] md:font-body-sm transition-all outline-none appearance-none cursor-pointer disabled:opacity-50">
                    <option>Technical API Support</option>
                    <option>Enterprise Licensing</option>
                    <option>Strategic Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Payload</label>
                <textarea required disabled={isSubmitting} className="w-full bg-surface-container-high border border-outline-variant/30 focus:border-surface-tint focus:ring-1 focus:ring-surface-tint text-on-surface px-4 py-2.5 md:py-3 rounded md:rounded-lg text-[12px] md:font-body-sm transition-all outline-none resize-none placeholder:text-on-surface-variant/50 disabled:opacity-50" placeholder="Technical challenge detail..." rows={4}></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full bg-on-surface text-surface py-3 md:py-4 text-[11px] md:font-label-caps font-black tracking-widest uppercase hover:opacity-90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded md:rounded-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Execute Dispatch'
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Support Details */}
          <div className="md:col-span-5 flex flex-col gap-2 md:gap-[10px]">
            {/* Documentation Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-2 md:p-[10px] rounded-xl border border-outline-variant/30 group cursor-pointer lg:hover:bg-surface-variant/20 transition-all"
            >
              <div className="flex justify-between items-start mb-[10px]">
                <div className="p-2 md:p-3 bg-surface-tint/10 rounded-lg">
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-surface-tint" />
                </div>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-on-surface-variant group-hover:text-on-surface transition-colors" />
              </div>
              <h3 className="text-xs md:font-label-caps text-on-surface mb-2 uppercase tracking-widest font-bold">Documentation</h3>
              <p className="text-[11px] md:font-body-sm text-on-surface-variant leading-relaxed">Comprehensive API reference and integration guides for elite strategists.</p>
            </motion.div>

            {/* Contact Channels Grid */}
            <div className="grid grid-cols-2 gap-2 md:gap-[10px]">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card p-2 md:p-[10px] rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group cursor-pointer lg:hover:bg-surface-variant/20 transition-all"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-on-surface-variant mb-2 md:mb-3 group-hover:text-surface-tint transition-colors" />
                <span className="text-[9px] md:font-label-caps text-on-surface uppercase tracking-widest">Email</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card p-2 md:p-[10px] rounded-xl border border-outline-variant/30 flex flex-col items-center text-center group cursor-pointer lg:hover:bg-surface-variant/20 transition-all"
              >
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-on-surface-variant mb-2 md:mb-3 group-hover:text-surface-tint transition-colors" />
                <span className="text-[9px] md:font-label-caps text-on-surface uppercase tracking-widest">Discord</span>
              </motion.div>
            </div>

            {/* Social/Twitter Card */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="glass-card p-4 md:p-6 rounded-xl border border-outline-variant/30 group lg:cursor-pointer lg:hover:bg-surface-variant/20 transition-all"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border border-outline-variant/30 shrink-0">
                  <img className="w-full h-full object-cover" alt="Status Updates" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=150&q=80" />
                </div>
                <div>
                  <h3 className="text-[10px] md:font-label-caps text-on-surface uppercase tracking-widest mb-2 md:mb-[10px]">Status</h3>
                  <p className="text-[11px] md:font-body-sm text-on-surface-variant">@RankFlowStatus</p>
                </div>
              </div>
            </motion.div>

            {/* Visual Accent Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex-grow min-h-[140px] md:min-h-[200px] rounded-xl overflow-hidden border border-outline-variant/30 group"
            >
              <img className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-40" alt="HQ Location" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 md:via-background/50 to-transparent"></div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                <span className="text-[9px] md:font-label-caps text-surface-tint mb-2 block uppercase tracking-widest">HQ</span>
                <p className="text-sm md:font-h3 text-on-surface md:text-xl font-bold uppercase tracking-tight">Zürich, CH</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
