import React, { useState } from 'react';
import { 
  Terminal, Code2, Cpu, Sparkles, CheckCircle2, ArrowRight,
  MessageSquare, Headset, Bug, Search
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Developers() {
  return (
    <div className="mt-[-25px] md:mt-0 pt-20 md:pt-20 bg-background text-on-background font-body-md selection:bg-surface-tint selection:text-on-primary-fixed">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-[10px] md:py-[20px] px-[1%] md:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface-tint/5 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] md:font-label-caps text-surface-tint uppercase tracking-widest mb-2 md:mb-[10px] block"
          >Developer Portal</motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:font-h1 md:text-h1 text-on-surface mb-2 md:mb-[10px] uppercase tracking-tight font-bold"
          >SEO Engineer Stack</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[12px] md:font-body-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-2 md:mb-[10px] leading-relaxed"
          >
            Scale search intelligence with robust APIs and SDKs designed for high-performance teams.
          </motion.p>
          
          {/* Documentation Search */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-xl mx-auto relative scale-90 md:scale-100"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 md:w-5 md:h-5 pointer-events-none" />
            <input 
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-md md:rounded-lg py-2 md:py-4 pl-10 md:pl-12 pr-4 text-xs md:text-base text-on-surface focus:outline-none focus:border-surface-tint transition-all" 
              placeholder="Search docs, endpoints..." 
              type="text"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* SDK Grid (Bento) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="px-[1%] md:px-8 pb-[10px] md:pb-[20px]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-[10px]">
            {/* Node.js */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-2 md:p-[10px] rounded-lg md:rounded-xl glow-cyan transition-all group cursor-pointer flex flex-col justify-between min-h-[140px] md:min-h-0 border border-outline-variant/30"
            >
              <div>
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-2 md:mb-[10px] group-hover:bg-green-500/20 transition-colors">
                  <Terminal className="w-4 h-4 md:w-6 md:h-6 text-green-400" />
                </div>
                <h3 className="text-xs md:font-h3 md:text-h3 text-on-surface mb-1">Node.js</h3>
                <p className="text-[9px] md:font-body-sm md:text-body-sm text-on-surface-variant mb-2 md:mb-[10px] leading-tight">Seamless backend integration.</p>
              </div>
              <code className="text-[8px] md:font-code md:text-code text-surface-tint bg-surface-container-high p-1 md:p-2 rounded block text-center">npm i @rf/sdk</code>
            </motion.div>

            {/* Python */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-2 md:p-[10px] rounded-lg md:rounded-xl glow-cyan transition-all group cursor-pointer flex flex-col justify-between min-h-[140px] md:min-h-0 border border-outline-variant/30"
            >
              <div>
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2 md:mb-[10px] group-hover:bg-blue-500/20 transition-colors">
                  <Code2 className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
                </div>
                <h3 className="text-xs md:font-h3 md:text-h3 text-on-surface mb-1">Python</h3>
                <p className="text-[9px] md:font-body-sm md:text-body-sm text-on-surface-variant mb-2 md:mb-[10px] leading-tight">For data scientists.</p>
              </div>
              <code className="text-[8px] md:font-code md:text-code text-surface-tint bg-surface-container-high p-1 md:p-2 rounded block text-center">pip install rf</code>
            </motion.div>

            {/* Go */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-2 md:p-[10px] rounded-lg md:rounded-xl glow-cyan transition-all group cursor-pointer flex flex-col justify-between min-h-[140px] md:min-h-0 border border-outline-variant/30"
            >
              <div>
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-2 md:mb-[10px] group-hover:bg-cyan-500/20 transition-colors">
                  <Cpu className="w-4 h-4 md:w-6 md:h-6 text-cyan-400" />
                </div>
                <h3 className="text-xs md:font-h3 md:text-h3 text-on-surface mb-1">Go</h3>
                <p className="text-[9px] md:font-body-sm md:text-body-sm text-on-surface-variant mb-2 md:mb-[10px] leading-tight">High-concurrency logic.</p>
              </div>
              <code className="text-[8px] md:font-code md:text-code text-surface-tint bg-surface-container-high p-1 md:p-2 rounded block text-center">go get rf/sdk</code>
            </motion.div>

            {/* Ruby */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-2 md:p-[10px] rounded-lg md:rounded-xl glow-cyan transition-all group cursor-pointer flex flex-col justify-between min-h-[140px] md:min-h-0 border border-outline-variant/30"
            >
              <div>
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-2 md:mb-[10px] group-hover:bg-red-500/20 transition-colors">
                  <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-red-400" />
                </div>
                <h3 className="text-xs md:font-h3 md:text-h3 text-on-surface mb-1">Ruby</h3>
                <p className="text-[9px] md:font-body-sm md:text-body-sm text-on-surface-variant mb-2 md:mb-[10px] leading-tight">Enterprise rails apps.</p>
              </div>
              <code className="text-[8px] md:font-code md:text-code text-surface-tint bg-surface-container-high p-1 md:p-2 rounded block text-center">gem install rf</code>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Split-Pane Code Preview */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="px-[1%] md:px-8 py-[10px] md:py-[20px] bg-surface-container-lowest border-y border-outline-variant/10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-[10px] md:p-12 items-center">
          <div>
            <h2 className="text-lg md:font-h2 md:text-h2 text-on-surface mb-2 md:mb-[10px] uppercase tracking-tight font-bold">Serp Intelligence</h2>
            <p className="text-[12px] md:font-body-lg md:text-body-lg text-on-surface-variant mb-2 md:mb-[10px] leading-relaxed">
              Our REST API provides structured JSON responses for global results. Query with millisecond latency.
            </p>
            <ul className="space-y-2 md:space-y-[10px] mb-2 lg:mb-0">
              <li className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-surface-tint shrink-0" />
                <span className="text-[11px] md:text-on-surface">99.99% Uptime SLA</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-surface-tint shrink-0" />
                <span className="text-[11px] md:text-on-surface">Automatic retry logic</span>
              </li>
            </ul>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-outline-variant/30 overflow-hidden shadow-2xl rounded-lg md:rounded-xl"
          >
            <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-outline-variant/10 bg-surface-container">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-[8px] md:font-label-caps md:text-[10px] text-on-surface-variant">GET /v1/rankings</span>
            </div>
            <div className="p-2 md:p-[10px] font-code text-[10px] md:text-code leading-relaxed overflow-x-auto min-h-[140px]">
              <div className="mb-2 whitespace-nowrap">
                <span className="text-secondary">curl</span> <span className="text-on-surface">-X</span> <span className="text-surface-tint">GET</span> <span className="text-on-surface">"https://api.rf.com/v1"</span> \
              </div>
              <div className="ml-4 space-y-0.5 whitespace-nowrap">
                <div><span className="text-on-surface">-H</span> <span className="text-surface-tint">"Auth: Bearer KEY"</span> \</div>
                <div><span className="text-on-surface">-d</span> <span className="text-surface-tint">"keyword=seo"</span></div>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 whitespace-nowrap">
                <span className="text-on-surface-variant italic text-[9px]">// Response</span>
                <div className="text-on-surface mt-1">
                  {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-secondary">"rank"</span>: <span className="text-surface-tint">3</span>,<br/>
                  &nbsp;&nbsp;<span className="text-secondary">"lat"</span>: <span className="text-surface-tint">142</span><br/>
                  {'}'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* API Reference Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="px-[1%] md:px-8 py-[10px] md:py-[20px]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-2 md:mb-[10px] gap-2">
            <div>
              <span className="text-[10px] md:font-label-caps text-surface-tint uppercase tracking-widest mb-1 block">Endpoints</span>
              <h2 className="text-lg md:font-h2 md:text-h2 text-on-surface uppercase tracking-tight">API Reference</h2>
            </div>
            <a className="text-[10px] md:text-base text-surface-tint flex items-center gap-1.5 hover:underline font-medium hover:opacity-80 transition-colors" href="#">
              Full documentation <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-[10px]">
            {/* Auth */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-2 md:p-[10px] rounded-lg md:rounded-xl border-l-2 border-l-secondary relative overflow-hidden group border border-outline-variant/30"
            >
              <h4 className="text-xs md:font-h3 md:text-h3 text-on-surface mb-3 md:mb-4 relative z-10 uppercase tracking-widest">Auth</h4>
              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between p-2 bg-on-surface/5 rounded border border-outline-variant/10">
                  <span className="text-[9px] md:font-code md:text-code text-secondary font-bold">POST</span>
                  <span className="text-[9px] md:text-body-sm text-on-surface-variant font-code">/token</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-on-surface/5 rounded border border-outline-variant/10">
                  <span className="text-[9px] md:font-code md:text-code text-secondary font-bold">GET</span>
                  <span className="text-[9px] md:text-body-sm text-on-surface-variant font-code">/me</span>
                </div>
              </div>
            </motion.div>
            
            {/* Rank Tracking */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-2 md:p-[10px] rounded-lg md:rounded-xl border-l-2 border-l-surface-tint relative overflow-hidden group border border-outline-variant/30"
            >
              <h4 className="text-xs md:font-h3 md:text-h3 text-on-surface mb-3 md:mb-4 relative z-10 uppercase tracking-widest">Rankings</h4>
              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between p-2 bg-on-surface/5 rounded border border-outline-variant/10">
                  <span className="text-[9px] md:font-code md:text-code text-surface-tint font-bold">GET</span>
                  <span className="text-[9px] md:text-body-sm text-on-surface-variant font-code">/rankings</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-on-surface/5 rounded border border-outline-variant/10">
                  <span className="text-[9px] md:font-code md:text-code text-surface-tint font-bold">POST</span>
                  <span className="text-[9px] md:text-body-sm text-on-surface-variant font-code">/bulk</span>
                </div>
              </div>
            </motion.div>
            
            {/* Keywords */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-2 md:p-[10px] rounded-lg md:rounded-xl border-l-2 border-l-primary-container relative overflow-hidden group border border-outline-variant/30"
            >
              <h4 className="text-xs md:font-h3 md:text-h3 text-on-surface mb-3 md:mb-4 relative z-10 uppercase tracking-widest">Keywords</h4>
              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between p-2 bg-on-surface/5 rounded border border-outline-variant/10">
                  <span className="text-[9px] md:font-code md:text-code text-surface-tint font-bold">GET</span>
                  <span className="text-[9px] md:text-body-sm text-on-surface-variant font-code">/suggest</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-on-surface/5 rounded border border-outline-variant/10">
                  <span className="text-[9px] md:font-code md:text-code text-surface-tint font-bold">GET</span>
                  <span className="text-[9px] md:text-body-sm text-on-surface-variant font-code">/metrics</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Support Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="px-[1%] md:px-8 py-[10px] md:py-[20px] mb-[10px]"
      >
        <div className="max-w-4xl mx-auto text-center glass-card p-4 md:p-12 rounded-xl md:rounded-2xl relative overflow-hidden border border-outline-variant/30">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-surface-tint/10 blur-[60px] md:blur-[100px] -mr-16 md:-mr-32 -mt-16 md:-mt-32 rounded-full pointer-events-none"></div>
          <h2 className="text-base md:font-h2 md:text-h2 text-on-surface mb-2 md:mb-[10px] relative z-10 uppercase tracking-tight font-bold">Need technical help?</h2>
          <p className="text-[11px] md:font-body-md md:text-body-md text-on-surface-variant mb-2 md:mb-[10px] relative z-10 leading-relaxed max-w-lg mx-auto">Our team is active in community channels and ready to assist with complex integrations.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-[10px] relative z-10">
            <a className="flex items-center justify-center gap-2 px-4 py-3 bg-surface-variant/20 border border-outline-variant/20 rounded md:rounded-lg hover:bg-surface-variant/30 transition-colors" href="#">
              <MessageSquare className="w-4 h-4 text-secondary" />
              <span className="text-[11px] md:font-medium text-on-surface uppercase tracking-wider">Discord</span>
            </a>
            <a className="flex items-center justify-center gap-2 px-4 py-3 bg-surface-variant/20 border border-outline-variant/20 rounded md:rounded-lg hover:bg-surface-variant/30 transition-colors" href="#">
              <Headset className="w-4 h-4 text-surface-tint" />
              <span className="text-[11px] md:font-medium text-on-surface uppercase tracking-wider">Support</span>
            </a>
            <a className="flex items-center justify-center gap-2 px-4 py-3 bg-surface-variant/20 border border-outline-variant/20 rounded md:rounded-lg hover:bg-surface-variant/30 transition-colors" href="#">
              <Bug className="w-4 h-4 text-surface-tint" />
              <span className="text-[11px] md:font-medium text-on-surface uppercase tracking-wider">GitHub</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
