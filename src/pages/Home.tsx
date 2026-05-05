import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, FileText, Target, Activity, Link2,
  CheckCircle2, ArrowUpRight, Database, LineChart, Zap, Shield, Webhook,
  Check, X, TrendingUp, Bell, Sparkles, Code, Terminal, Server, FastForward, CheckCircle,
  Timer, Gauge, Brain, FileCode, Smartphone
} from 'lucide-react';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full relative z-10 pt-[80px] md:pt-[120px]">
      <HeroSection />
      <TrustedBySection />
      <SolutionSection />
      <ProblemSection />
      <MeetRankflowSection />
      <DeveloperSection />
      <PricingSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative px-[1%] md:px-12 max-w-[1440px] mx-auto overflow-visible py-5">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Center Text Block */}
        <div className="text-center w-full relative mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-h1 text-on-surface leading-[1.1] tracking-tight text-3xl md:text-5xl lg:text-6xl font-black max-w-4xl mx-auto mb-4">
              <span className="md:hidden">Elevate Rankings with RankFlow</span>
              <span className="hidden md:inline">Elevate Your Rankings with RankFlow<br />The Ultimate SEO Solution</span>
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              RankFlow combines cutting-edge technology with user-friendly features, making it the perfect companion for businesses & individuals looking to optimize Next.js sites.
            </p>

            <div className="max-w-xl mx-auto relative z-20">
              <form className="flex flex-col sm:flex-row gap-2 p-1.5 glass-card rounded-lg" onSubmit={e => e.preventDefault()}>
                <input
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-4 py-3 text-on-surface placeholder:text-on-surface-variant font-medium outline-none"
                  placeholder="Enter Your Website Url" required type="url"
                />
                <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded text-sm font-bold transition-all hover:brightness-110 flex justify-center items-center gap-2">
                  Boost My Rankings <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side: Animated SEO UI Scanner */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex absolute top-4 -right-8 xl:-right-16 z-30 w-72 flex-col gap-4">
            {/* SEO Score Card */}
            <div className="glass-card shadow-2xl rounded-xl p-5 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 cursor-default">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/60 shadow-[0_0_12px_3px_rgba(0,240,255,0.5)] animate-[scanLine_3s_ease-in-out_infinite] z-20"></div>
              <div className="flex justify-between items-center mb-5 relative z-10">
                <h3 className="font-bold text-sm text-on-surface flex items-center gap-2">
                  <Database className="w-4 h-4 text-primary animate-pulse" /> Live SEO Scan
                </h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">ACTIVE</span>
              </div>

              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-primary/5 border-[4px] border-primary/20">
                  <div className="absolute w-16 h-16 rounded-full border-[4px] border-transparent border-t-primary animate-spin"></div>
                  <span className="text-lg font-black text-on-surface">98</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-secondary">Global Health Score</p>
                  <p className="text-[11px] text-emerald-400 font-bold flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" /> +14% this week
                  </p>
                </div>
              </div>

              {/* Live Keywords */}
              <div className="space-y-2 relative z-10">
                {['next.js framework seo', 'react server components', 'vercel hosting metrics'].map((kw, i) => (
                  <div key={i} className="flex justify-between items-center bg-surface-container/50 p-2.5 rounded-lg border border-outline-variant/30">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${i < 2 ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`}></span>
                      <span className="text-[11px] font-bold text-on-surface">{kw}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] font-black text-primary">#{[1, 2, 4][i]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Layout/Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto z-20">
          {/* Core Web Vitals */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="glass-card shadow-2xl rounded-xl p-6 relative hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-sm text-on-surface">Core Web Vitals</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[10px] uppercase font-bold text-on-surface-variant">
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-rose-400"></div> LCP</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-400"></div> FID</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-primary"></div> CLS</span>
              </div>
            </div>
            <div className="flex justify-around items-center pt-2">
              <RadialChart value={81} label="LCP Score" color="rgba(251, 113, 133, 1)" />
              <RadialChart value={22} label="FID Score" color="rgba(52, 211, 153, 1)" />
              <RadialChart value={62} label="CLS Score" color="var(--primary)" />
            </div>
          </motion.div>

          {/* Traffic Flow Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="glass-card shadow-2xl rounded-xl p-6 relative flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-sm text-on-surface">Traffic Flow</h3>
                <p className="text-[10px] text-on-surface-variant mt-1">Impressions over 7 days</p>
              </div>
              <button className="flex items-center gap-2 border border-primary/30 text-primary px-3 py-1.5 rounded-full text-xs font-bold hover:bg-primary/10 transition-colors">
                Save Report
              </button>
            </div>
            <div className="w-full h-24 relative mt-auto">
              <TrafficChartSVG />
            </div>
            <div className="flex justify-between w-full text-[8px] font-black text-on-surface-variant mt-3 px-1">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @keyframes scanLine { 0%,100% { transform:translateY(0); opacity:0; } 10% { opacity:1; } 50% { transform:translateY(180px); opacity:1; } 90% { opacity:0; } }
      `}</style>
    </section>
  );
}

function TrafficChartSVG() {
  return (
    <svg viewBox="0 0 400 100" className="w-full h-full preserve-aspect-ratio-none">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary-container)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--primary-container)" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d="M0,80 C40,50 60,90 100,50 C140,10 180,60 220,40 C260,20 300,70 340,30 C380,-10 400,40 400,40 L400,100 L0,100 Z" fill="url(#chartGradient)"></path>
      <path d="M0,80 C40,50 60,90 100,50 C140,10 180,60 220,40 C260,20 300,70 340,30 C380,-10 400,40 400,40" fill="none" stroke="var(--primary-container)" strokeWidth="3"></path>
      <circle cx="100" cy="50" r="4" fill="var(--surface)" stroke="var(--primary-container)" strokeWidth="2"></circle>
      <circle cx="220" cy="40" r="4" fill="var(--surface)" stroke="var(--primary-container)" strokeWidth="2"></circle>
      <circle cx="340" cy="30" r="4" fill="var(--surface)" stroke="var(--primary-container)" strokeWidth="2"></circle>
    </svg>
  );
}

function RadialChart({ value, label, color }: { value: number, label: string, color: string }) {
  const radius = 26;
  const circ = 2 * Math.PI * radius;
  const strokeDashoffset = circ - (value / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle cx="50%" cy="50%" r={radius} fill="none" stroke="currentColor" strokeWidth="4" className="text-on-surface-variant/20" />
          <circle cx="50%" cy="50%" r={radius} fill="none" stroke={color} strokeWidth="4" strokeDasharray={circ} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
        </svg>
        <span className="absolute text-xs font-black text-on-surface">{value}%</span>
      </div>
      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{label}</span>
    </div>
  );
}

function TrustedBySection() {
  return (
    <section className="px-6 relative py-8 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-6">
          Trusted by modern developers building fast web apps
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-black text-xl italic text-on-surface">NEXT.JS</span>
          <span className="font-black text-xl italic text-on-surface">VERCEL</span>
          <span className="font-black text-xl italic text-on-surface">STRIPE</span>
          <span className="font-black text-xl italic text-on-surface">SUPABASE</span>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const [activeTab, setActiveTab] = useState('seo');
  const tabs = [
    { id: 'seo', label: 'SEO Audit', icon: Search, color: 'text-[#7C3AED]', bg: 'bg-[#7C3AED]/10' },
    { id: 'content', label: 'Content', icon: FileText, color: 'text-[#00b3ad]', bg: 'bg-[#00b3ad]/10' },
    { id: 'keywords', label: 'Keywords', icon: Target, color: 'text-[#d97706]', bg: 'bg-[#d97706]/10' },
    { id: 'performance', label: 'Performance', icon: Activity, color: 'text-[#059669]', bg: 'bg-[#059669]/10' },
    { id: 'backlinks', label: 'Backlinks', icon: Link2, color: 'text-[#dc2626]', bg: 'bg-[#dc2626]/10' },
  ];

  return (
    <section className="px-4 md:px-6 relative py-16 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-label-caps text-primary uppercase tracking-[0.2em] mb-3 block">Full-Spectrum Analytics</span>
          <h2 className="font-h2 text-on-surface mb-4">Your Complete SEO & Analysis Solution</h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">Everything you need to dominate search rankings — from on-page audits to backlink intelligence — unified in one powerful dashboard.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map(t => {
            const isActive = activeTab === t.id;
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl border-2 transition-all min-w-[100px] md:min-w-[120px] ${isActive ? 'border-primary bg-primary/10' : 'border-transparent hover:bg-surface-container'}`}>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${t.bg}`}>
                  <Icon className={`w-6 h-6 ${t.color}`} />
                </div>
                <span className="text-xs font-bold text-on-surface">{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="glass-card p-6 md:p-12 rounded-3xl border border-outline-variant/30 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center shadow-2xl">
          <div className="flex-1 max-w-lg">
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mb-5 border border-primary/30">
              <Search className="w-4 h-4" /> Live Scan Engine
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-on-surface mb-3 leading-snug">Elevate Rankings with RankFlow's Precision SEO Audit</h3>
            <p className="text-on-surface-variant font-body-sm mb-5 leading-relaxed">
              Our Googlebot-grade crawler dissects every page element in under 3 seconds — surfacing critical issues before they cost you traffic.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Meta tags & Open Graph validation",
                "Broken link & redirect chain detection",
                "Schema markup & structured data audit",
                "Alt-text coverage & image optimization"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold text-on-surface">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Check className="w-3.5 h-3.5" /></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all flex items-center gap-2">
              Run SEO Audit <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Browser Mockup Area */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-surface-container border border-outline-variant/30 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-surface-container-high border-b border-outline-variant/30 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <div className="flex-1 bg-surface-container-highest rounded text-[10px] font-mono text-on-surface-variant px-3 py-1.5 text-center truncate">
                  rankflow.io/analysis/demo
                </div>
              </div>
              <div className="p-4 md:p-6 bg-surface">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold text-on-surface">Analytical Overview</p>
                  <span className="text-[9px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">LIVE</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[{ l: 'SEO Score', v: '92' }, { l: 'Issues', v: '7' }, { l: 'Pages', v: '312' }].map((s, i) => (
                    <div key={i} className="glass-card rounded-lg p-3">
                      <p className="text-[10px] text-on-surface-variant mb-1">{s.l}</p>
                      <p className="text-xl font-black text-on-surface">{s.v}</p>
                    </div>
                  ))}
                </div>
                <div className="glass-card rounded-xl overflow-hidden border border-outline-variant/30">
                  <div className="px-4 py-3 bg-surface-container-low border-b border-outline-variant/20 flex justify-between items-center">
                    <p className="text-xs font-bold text-on-surface">Critical Issues</p>
                    <p className="text-[10px] text-on-surface-variant">3 found</p>
                  </div>
                  <div className="divide-y divide-outline-variant/10">
                    {[
                      { text: "Missing alt text on images", badge: "CRITICAL", color: "text-red-400 bg-red-400/10" },
                      { text: "Duplicate meta descriptions", badge: "CRITICAL", color: "text-red-400 bg-red-400/10" },
                      { text: "Slow LCP element detected", badge: "WARN", color: "text-yellow-400 bg-yellow-400/10" }
                    ].map((row, i) => (
                      <div key={i} className="px-4 py-3 flex items-center justify-between">
                        <span className="text-xs text-on-surface">{row.text}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${row.color}`}>{row.badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      title: "Slow Load Times Kill Your Rankings",
      desc: "A single second of extra load time cuts conversion rates by up to 20% and tanks your Core Web Vitals score — pushing you off page one silently.",
      points: ["LCP & render-blocking resource detection", "Image optimization & lazy-load audit", "JavaScript bundle & third-party script analysis"],
      btn: "Fix My Speed",
      color: "var(--primary)"
    },
    {
      title: "Broken Meta Structure Costs Clicks",
      desc: "Search engines skip pages with missing, duplicate, or malformed tags — meaning your content never ranks where it should.",
      points: ["Title tag & meta description audit", "Open Graph & Twitter Card validation", "Canonical tag & duplicate content detection"],
      btn: "Audit My Meta",
      color: "var(--primary-container)"
    },
    {
      title: "Flying Blind Without Real Data",
      desc: "Without continuous monitoring, you won't know when rankings drop, crawl errors appear, or a Google update penalises your pages.",
      points: ["Real-time ranking position monitoring", "Crawl error & 404 alerting system", "Google algorithm update impact tracker"],
      btn: "Start Monitoring",
      color: "var(--secondary-container)"
    }
  ];

  return (
    <section className="px-4 md:px-6 relative py-16 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-label-caps text-primary uppercase tracking-[0.2em] mb-3 block">The Challenge</span>
          <h2 className="font-h2 text-on-surface mb-4">Boost Rankings: Fixing the Problems<br className="hidden sm:block" /> Most Websites Don't Know They Have</h2>
        </div>

        <div className="space-y-8">
          {problems.map((p, i) => (
            <div key={i} className="glass-card shadow-lg rounded-2xl overflow-hidden border border-outline-variant/30 group hover:-translate-y-1 transition-transform relative">
              <div className="absolute top-4 right-4 w-12 h-12 opacity-20 pointer-events-none">
                <svg viewBox="0 0 52 52" fill="none"><path d="M4 48 C4 48 4 4 48 4" stroke={p.color} strokeWidth="6" strokeLinecap="round" /><path d="M18 48 C18 48 18 18 48 18" stroke={p.color} strokeWidth="4" strokeLinecap="round" /></svg>
              </div>
              <div className="flex flex-col lg:flex-row gap-0">
                <div className="lg:w-[45%] p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-black text-on-surface mb-4">{p.title}</h3>
                  <p className="text-on-surface-variant font-body-sm mb-6 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm font-semibold text-on-surface">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `color-mix(in srgb, ${p.color} 20%, transparent)` }}>
                          <Check className="w-3.5 h-3.5" style={{ color: p.color }} />
                        </div>
                        <span className="mt-0.5">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="self-start text-on-primary font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all flex items-center gap-2" style={{ backgroundColor: p.color, color: 'var(--surface-container-lowest)' }}>
                    {p.btn} <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="lg:w-[55%] bg-surface-container-low border-t lg:border-t-0 lg:border-l border-outline-variant/30 p-6 md:p-10 flex items-center justify-center min-h-[300px]">
                  <div className="glass-card p-6 rounded-2xl border border-outline-variant/30 w-full max-w-md shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-5" style={{ backgroundImage: `linear-gradient(to bottom right, ${p.color}, transparent)` }}></div>
                    <div className="relative z-10 space-y-4">
                      {/* Fake lines to represent the abstract UI mockup */}
                      <div className="h-4 w-32 rounded bg-outline-variant/40 mb-6"></div>
                      <div className="space-y-3">
                        {[1, 2, 3].map(bar => (
                          <div key={bar} className="flex items-center gap-4">
                            <div className="h-8 flex-1 rounded bg-surface-container border border-outline-variant/20 overflow-hidden">
                              <div className="h-full bg-gradient-to-r" style={{ width: `${Math.random() * 60 + 30}%`, backgroundImage: `linear-gradient(to right, ${p.color}, transparent)` }}></div>
                            </div>
                            <div className="w-12 h-8 rounded bg-surface-container border border-outline-variant/20 flex items-center justify-center text-xs font-mono text-on-surface">{(Math.random() * 100).toFixed(0)}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function MeetRankflowSection() {
  const feats = [
    { i: Timer, t: "Real-time Audit", d: "Continuous scanning for SEO regressions as you push code." },
    { i: Gauge, t: "Performance Scoring", d: "Proprietary Core Web Vitals engine correlated with real CrUX data." },
    { i: TrendingUp, t: "Keyword Tracking", d: "Historical rank storage to visualise how optimisation shifts SERP." },
    { i: Brain, t: "AI Optimisation", d: "LLM-powered rewrites of meta tags to maximise CTR automatically." },
    { i: FileCode, t: "Next.js Reports", d: "Deep insights into App Router, metadata, and generateSitemaps." },
    { i: Smartphone, t: "Mobile insights", d: "Simulated mobile Chromium audits for flawless scaling." }
  ];

  return (
    <section className="px-4 md:px-6 relative py-16 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-label-caps text-primary uppercase tracking-[0.2em] mb-3 block">The Solution</span>
          <h2 className="font-h2 text-on-surface mb-4">Meet RankFlow &mdash; Your<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">SEO Intelligence Engine</span></h2>
          <p className="text-on-surface-variant font-body-md max-w-xl mx-auto">One platform to crawl, diagnose, and dominate. Built for Next.js teams who treat SEO as an engineering discipline.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feats.map((f, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border border-outline-variant/30 hover:-translate-y-2 transition-transform group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.i className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-on-surface text-lg mb-3">{f.t}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeveloperSection() {
  return (
    <section className="px-4 md:px-6 py-20 relative z-20 bg-surface-container-lowest border-y border-outline-variant/30 mt-16 overflow-hidden">
      {/* Ambient Grid */}
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-[0.03]"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Built for Engineering Teams</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-on-surface">
            Built for Developers,<br />
            <span className="text-on-surface-variant">by Developers</span>
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed mb-10 max-w-lg">
            Every feature is designed with the engineering workflow in mind — from local dev to CI/CD to production.
          </p>

          <div className="space-y-4">
            {[
              { icon: Zap, title: "Next.js Native", desc: "Deep integration with the Vercel ecosystem and App router." },
              { icon: Webhook, title: "API-First Design", desc: "Automate your SEO audits by integrating our API into CI/CD." },
              { icon: FastForward, title: "Sub-3s Scans", desc: "Lightning fast crawlers that won't hold up your deployment." }
            ].map((f, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl flex gap-4 items-start border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-on-surface text-base mb-1">{f.title}</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Window */}
        <div className="flex-1 w-full max-w-xl">
          <div className="rounded-2xl border border-outline-variant/30 bg-[#0d0d0f] shadow-2xl overflow-hidden p-2">
            <div className="bg-[#151518] border border-white/5 rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <p className="text-blue-400 mb-2">curl <span className="text-on-surface-variant">-X POST</span> https://api.rankflow.io/v1/audit \</p>
              <p className="text-on-surface-variant pl-4 mb-2">-H <span className="text-emerald-400">"Authorization: Bearer $API_KEY"</span> \</p>
              <p className="text-on-surface-variant pl-4 mb-6">-d <span className="text-emerald-400">'{"{"}"url": "https://mysite.com"{"}"}'</span></p>

              <p className="text-slate-500 mb-2">// Response</p>
              <p className="text-on-surface-variant">{"{"}</p>
              <p className="text-on-surface-variant pl-4">"score": <span className="text-orange-400">92</span>,</p>
              <p className="text-on-surface-variant pl-4">"errors": <span className="text-orange-400">0</span>,</p>
              <p className="text-on-surface-variant pl-4">"warnings": <span className="text-orange-400">2</span></p>
              <p className="text-on-surface-variant">{"}"}</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pattern-grid { background-size: 40px 40px; background-image: linear-gradient(to right, var(--outline-variant) 1px, transparent 1px), linear-gradient(to bottom, var(--outline-variant) 1px, transparent 1px); }
      `}</style>
    </section>
  );
}

function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly');

  const plans = [
    {
      name: "Starter", desc: "Launch your SEO journey with powerful audits.",
      priceMz: "29", priceYz: "23",
      feats: ["1 Project", "1 User", "10K crawls/month"],
      xfeats: ["Data Export", "API Access"],
      featured: false
    },
    {
      name: "Business", desc: "Scale your SEO operation with deep analytics.",
      priceMz: "79", priceYz: "63",
      feats: ["Unlimited Projects", "Unlimited Users", "100K crawls/month", "Data Export"],
      xfeats: ["API Access"],
      featured: true
    },
    {
      name: "Enterprise", desc: "For teams who need absolute API control.",
      priceMz: "199", priceYz: "159",
      feats: ["Everything in Business", "Unlimited crawls", "Full API Access", "Dedicated Account Manager"],
      xfeats: [],
      featured: false
    }
  ];

  return (
    <section className="px-4 md:px-6 relative py-20 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-label-caps text-primary uppercase tracking-[0.2em] mb-3 block">Plans & Pricing</span>
          <h2 className="font-h2 text-on-surface mb-6">Compare The Plans</h2>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-sm font-bold ${billing === 'monthly' ? 'text-on-surface' : 'text-on-surface-variant'}`}>Monthly</span>
            <button
              className="w-12 h-6 rounded-full bg-primary relative transition-colors"
              onClick={() => setBilling(b => b === 'monthly' ? 'yearly' : 'monthly')}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow ${billing === 'yearly' ? 'left-7' : 'left-1'}`}></span>
            </button>
            <span className={`text-sm font-bold ${billing === 'yearly' ? 'text-on-surface' : 'text-on-surface-variant'}`}>
              Yearly <span className="ml-2 text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`glass-card p-8 rounded-3xl border flex flex-col relative ${p.featured ? 'border-primary ring-1 ring-primary/50 shadow-[0_0_40px_rgba(0,240,255,0.15)] bg-surface-container-high' : 'border-outline-variant/30 hover:border-outline-variant'}`}>
              {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>}
              <h3 className="text-2xl font-black text-on-surface mb-2">{p.name}</h3>
              <p className="text-on-surface-variant text-sm mb-6 min-h-[40px]">{p.desc}</p>

              <div className="mb-8">
                <span className="text-4xl font-black text-on-surface">${billing === 'monthly' ? p.priceMz : p.priceYz}</span>
                <span className="text-on-surface-variant text-sm ml-1">/mo</span>
                {billing === 'yearly' && <p className="text-xs text-primary mt-1 font-medium">Billed annually</p>}
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {p.feats.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-on-surface font-medium">{f}</span>
                  </div>
                ))}
                {p.xfeats.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 opacity-50">
                    <X className="w-5 h-5 text-on-surface-variant shrink-0" />
                    <span className="text-sm text-on-surface-variant font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${p.featured ? 'bg-primary text-on-primary hover:brightness-110' : 'bg-surface-container-highest text-on-surface hover:bg-surface-variant'}`}>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
