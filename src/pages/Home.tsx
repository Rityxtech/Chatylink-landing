import React, { useState } from 'react';
import { 
  Zap, Database, LineChart, Shield, Webhook, Gauge, 
  CheckCircle2, MonitorPlay, Star, ChevronLeft, ChevronRight,
  Search, FileText, Activity, Link2, ArrowUpRight, Bell,
  LayoutDashboard, Clock, Sparkles, Smartphone, Target, Cpu, TrendingUp,
  ChevronDown, Check, X, Plus, ExternalLink, Globe, Chrome,
  Slack, Instagram, Facebook, Linkedin, Twitter, Mail, Youtube, MessageSquare
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <HeroSection />
      <AnalysisSolutionSection />
      <HowItWorksSection />
      <SEOIntelligenceSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <DeveloperSection />
      <NewsletterSection />
    </main>
  );
}

function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative pt-[25px] md:pt-[20px] pb-0 px-[1%] md:px-12 max-w-[1440px] mx-auto overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-[400px] bg-gradient-to-b from-surface-tint/10 via-surface-tint/5 to-transparent blur-[100px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-2 md:space-y-[10px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2 md:space-y-[10px]"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 glass-card rounded-full mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-surface-tint animate-pulse"></span>
            <span className="text-[9px] font-label-caps text-surface-tint uppercase tracking-[0.2em]">RankFlow Protocol v4.0</span>
          </div>
          <h1 className="font-h1 text-on-surface leading-[1.1] tracking-tight text-xl md:text-5xl lg:text-6xl font-black mt-0 mb-0 md:mt-0 md:mb-0">
            Master SEO with <span className="text-surface-tint">RankFlow</span>
          </h1>
          <p className="text-[12px] md:font-body-md text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            RankFlow combines cutting-edge technology with user-friendly features, making it the perfect companion for businesses & individuals looking to optimize Next.js sites.
          </p>
        </motion.div>

        {/* Search Bar Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto flex flex-col md:flex-row gap-0 rounded-lg md:rounded-xl overflow-hidden shadow-xl border border-outline-variant/30 bg-surface-container"
        >
          <input 
            type="text" 
            placeholder="Enter Your Website Url" 
            className="flex-1 px-4 py-2.5 md:py-3.5 bg-transparent text-on-surface outline-none placeholder:text-on-surface-variant/40 text-sm"
          />
          <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 md:py-3.5 font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 cursor-pointer whitespace-nowrap">
            Boost My Rankings <Zap className="w-4 h-4 fill-current" />
          </button>
        </motion.div>

        {/* Mobile-Only Compact Score Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden glass-card p-2 rounded-xl border border-outline-variant/30 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-on-surface-variant/10" />
                <motion.circle 
                  initial={{ strokeDasharray: "0 1000" }}
                  whileInView={{ strokeDasharray: "135 1000" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" className="text-secondary-container" />
              </svg>
              <span className="absolute text-[12px] font-black text-on-surface">92</span>
            </div>
            <div className="text-left">
              <span className="text-[7px] font-label-caps text-on-surface-variant uppercase block">Overall Score</span>
              <span className="text-[10px] font-bold text-on-surface">Performance: A+</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-secondary font-bold text-[8px] bg-secondary/10 px-2 py-1 rounded-full">
            <LineChart className="w-3 h-3" /> +4.2%
          </div>
        </motion.div>

        {/* Metric Cards Stack */}
        <div className="grid md:grid-cols-2 gap-2 md:gap-[10px] max-w-5xl mx-auto items-start text-center">
          {/* Core Web Vitals Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-2 md:p-[10px] rounded-2xl border border-outline-variant/30 shadow-lg text-left h-full"
          >
            <div className="flex items-center justify-between mb-2 md:mb-6">
              <h3 className="font-h3 text-on-surface text-base md:text-lg">Core Web Vitals</h3>
              <div className="flex gap-2 text-[8px] md:text-[9px] font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-sm bg-red-400"></span> LCP</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-sm bg-green-400"></span> FID</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 md:gap-2">
              <CircularGauge value={81} label="LCP Score" color="rgba(248, 113, 113, 1)" />
              <CircularGauge value={22} label="FID Score" color="rgba(74, 222, 128, 1)" />
              <CircularGauge value={62} label="CLS Score" color="rgba(167, 139, 250, 1)" />
            </div>
          </motion.div>

          {/* Traffic Flow Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-2 md:p-[10px] rounded-2xl border border-outline-variant/30 shadow-lg text-left h-full flex flex-col"
          >
            <div className="flex items-center justify-between mb-1 md:mb-[10px]">
              <h3 className="font-h3 text-on-surface text-base md:text-lg">Traffic Flow</h3>
              <button className="text-[8px] font-label-caps text-surface-tint border border-surface-tint/30 px-1.5 py-0.5 rounded flex items-center gap-1 hover:bg-surface-tint/10 transition-colors">
                <Database className="w-2.5 h-2.5" /> Save
              </button>
            </div>
            <p className="text-on-surface-variant text-[9px] mb-1.5 md:mb-[10px]">Impressions over 7 days</p>
            
            <div className="flex-1 min-h-[90px] md:min-h-[120px] relative">
              <TrafficChart />
            </div>

            <div className="mt-2 flex justify-between text-[7px] md:text-[8px] font-label-caps text-on-surface-variant/50">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <div className="flex flex-col items-center space-y-2 md:space-y-[10px] overflow-hidden">
          <span className="text-[8px] md:text-[10px] font-label-caps text-on-surface-variant uppercase tracking-[0.3em] text-center">
            Trusted by modern developers
          </span>
          <div className="flex flex-row flex-nowrap justify-center items-center gap-3 sm:gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 w-full px-2">
            <span className="text-[10px] sm:text-sm md:text-xl font-black tracking-tighter text-on-surface italic whitespace-nowrap">NEXT.JS</span>
            <span className="text-[10px] sm:text-sm md:text-xl font-black tracking-tighter text-on-surface italic whitespace-nowrap">VERCEL</span>
            <span className="text-[10px] sm:text-sm md:text-xl font-black tracking-tighter text-on-surface italic whitespace-nowrap">STRIPE</span>
            <span className="text-[10px] sm:text-sm md:text-xl font-black tracking-tighter text-on-surface italic whitespace-nowrap">SUPABASE</span>
          </div>
        </div>

        {/* Browser Mockup Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-[10px] md:pt-[10px]"
        >
          <div className="bg-surface-container rounded-t-xl md:rounded-t-2xl border border-outline-variant/30 overflow-hidden shadow-xl">
            {/* Browser Header */}
            <div className="px-3 py-2 md:py-3 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-high/50">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/30"></div>
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/30"></div>
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/30"></div>
              </div>
              <div className="bg-background/40 px-3 md:px-8 py-1 rounded-full text-[8px] md:text-[10px] text-on-surface-variant font-medium">
                https://rankflow.io/analysis/demo-report
              </div>
              <div className="w-10"></div>
            </div>
            
            {/* Browser Content */}
            <div className="p-2 md:p-[10px] text-left bg-surface-container-lowest">
              <div className="grid md:grid-cols-12 gap-2 md:gap-[10px] items-start">
                {/* Score Section */}
                <div className="md:col-span-4 space-y-2 md:space-y-[10px]">
                  <div className="glass-card p-2 md:p-[10px] rounded-xl md:rounded-2xl border border-outline-variant/20 flex flex-col items-center text-center">
                    <span className="text-[7.5px] font-label-caps text-on-surface-variant uppercase mb-1.5 md:mb-[10px]">Overall SEO Score</span>
                    <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
                       <svg className="w-full h-full -rotate-90">
                         <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="5" fill="transparent" className="text-on-surface-variant/10" />
                         <motion.circle 
                          initial={{ strokeDasharray: "0 1000" }}
                          whileInView={{ strokeDasharray: "260 1000" }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.5 }}
                          cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="5" fill="transparent" strokeLinecap="round" className="text-secondary-container" />
                       </svg>
                       <span className="absolute text-2xl md:text-4xl font-black text-on-surface">92</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-secondary font-bold text-[9px] md:text-[10px]">
                       <LineChart className="w-2.5 h-2.5" /> +4.2% since last scan
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div className="bg-surface-container-high p-2 md:p-3 rounded-lg border border-outline-variant/20">
                      <span className="text-[7.5px] md:text-[8px] font-label-caps text-on-surface-variant block mb-1">PERFORMANCE</span>
                      <span className="text-lg md:text-xl font-bold text-on-surface">A+</span>
                    </div>
                    <div className="bg-surface-container-high p-2 md:p-3 rounded-lg border border-outline-variant/20">
                      <span className="text-[7.5px] md:text-[8px] font-label-caps text-on-surface-variant block mb-1">LCP</span>
                      <span className="text-lg md:text-xl font-bold text-on-surface">0.8s</span>
                    </div>
                  </div>
                </div>

                {/* Table Section */}
                <div className="md:col-span-8 flex flex-col gap-3 md:gap-4">
                  <div className="overflow-hidden border border-outline-variant/20 rounded-xl">
                    <table className="w-full text-[10px] md:text-sm">
                      <thead className="bg-surface-container text-[7.5px] md:text-[8px] font-label-caps text-on-surface-variant">
                        <tr>
                          <th className="px-3 py-2 md:px-4 md:py-3 text-left">Critical Issues</th>
                          <th className="px-4 py-2 md:px-6 md:py-3 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/10">
                        <tr>
                          <td className="px-3 py-2 md:px-4 md:py-3 text-on-surface">Missing alt text on images</td>
                          <td className="px-4 py-2 md:px-6 md:py-3 text-right"><span className="px-1 py-0.5 bg-red-500/10 text-red-400 text-[7.5px] md:text-[8px] font-black uppercase rounded">Critical</span></td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 md:px-4 md:py-3 text-on-surface">Unoptimized LCP element</td>
                          <td className="px-4 py-2 md:px-6 md:py-3 text-right"><span className="px-1 py-0.5 bg-yellow-500/10 text-yellow-400 text-[7.5px] md:text-[8px] font-black uppercase rounded">Warning</span></td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 md:px-4 md:py-3 text-on-surface">Duplicate Meta Description</td>
                          <td className="px-4 py-2 md:px-6 md:py-3 text-right"><span className="px-1 py-0.5 bg-red-500/10 text-red-400 text-[7.5px] md:text-[8px] font-black uppercase rounded">Critical</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-surface-container p-3 md:p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
                    <p className="text-on-surface-variant text-[10px] md:text-[11px] max-w-[200px] md:max-w-[240px] text-center sm:text-left">
                      Experience RankFlow analytics with your own data.
                    </p>
                    <button className="bg-secondary-container text-on-secondary-container px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-bold text-[9px] md:text-[10px] hover:opacity-90 transition-all cursor-pointer">
                      Try Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function CircularGauge({ value, label, color }: { value: number, label: string, color: string }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1 md:gap-2">
      <div className="relative w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle 
            cx="50%" cy="50%" r={radius} 
            stroke="currentColor" strokeWidth="4" 
            fill="transparent" className="text-on-surface-variant/10" 
          />
          <motion.circle 
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            cx="50%" cy="50%" r={radius} 
            stroke={color} strokeWidth="4" 
            fill="transparent" strokeLinecap="round" 
            strokeDasharray={circumference}
          />
        </svg>
        <span className="absolute text-[10px] md:text-lg font-bold text-on-surface">{value}%</span>
      </div>
      <span className="text-[6.5px] md:text-[9px] font-label-caps text-on-surface-variant text-center opacity-60 leading-tight">
        {label}
      </span>
    </div>
  );
}

function TrafficChart() {
  return (
    <div className="w-full h-full pt-10">
      <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--surface-tint)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--surface-tint)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M 0,80 C 40,85 60,60 100,70 C 140,80 160,50 200,45 C 240,40 260,75 300,70 C 340,65 360,40 400,50"
          fill="none"
          stroke="var(--surface-tint)"
          strokeOpacity="0.2"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <motion.path 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          d="M 0,80 C 40,85 60,60 100,70 C 140,80 160,50 200,45 C 240,40 260,75 300,70 C 340,65 360,40 400,50 L 400,100 L 0,100 Z"
          fill="url(#chartGradient)"
        />

        <motion.path 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M 0,80 C 40,85 60,60 100,70 C 140,80 160,50 200,45 C 240,40 260,75 300,70 C 340,65 360,40 400,50"
          fill="none"
          stroke="var(--surface-tint)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <circle cx="280" cy="72" r="4" fill="var(--surface)" stroke="var(--surface-tint)" strokeWidth="2" />
          <rect x="250" y="20" width="80" height="25" rx="4" fill="var(--surface-container-high)" className="shadow-lg" />
          <text x="290" y="32" textAnchor="middle" fontSize="8" fill="var(--on-surface)" fontWeight="bold">456 Impressions</text>
          <text x="290" y="40" textAnchor="middle" fontSize="6" fill="var(--on-surface-variant)">Oct 18th, 2026</text>
        </motion.g>
      </svg>
    </div>
  );
}

function AnalysisSolutionSection() {
  const [activeTab, setActiveTab] = useState('audit');
  const [hasUnread, setHasUnread] = useState(true);
  const [showAutoMessage, setShowAutoMessage] = useState(false);

  const contentMap: Record<string, {
    title: string;
    description: string;
    features: string[];
    mockupTitle: string;
    stats: { label: string; value: string }[];
    tableHeader: string;
    tableRows: { label: string; status: string; statusColor: string }[];
    icon: any;
    color: string;
    badge: string;
  }> = {
    audit: {
      title: "Elevate Rankings with RankFlow's Precision SEO Audit",
      description: "Our Googlebot-grade crawler dissects page elements in 3 seconds — surfacing issues before they cost traffic.",
      features: [
        "Meta tags & Open Graph validation",
        "Broken link & redirect detection",
        "Schema markup & structured data",
        "Alt-text & image optimization"
      ],
      mockupTitle: "Audit Overview",
      stats: [
        { label: 'Score', value: '92' },
        { label: 'Issues', value: '7' },
        { label: 'Pages', value: '312' },
      ],
      tableHeader: "Critical Issues",
      tableRows: [
        { label: "Missing alt text on images", status: "Critical", statusColor: "text-red-400" },
        { label: "Duplicate meta descriptions", status: "Critical", statusColor: "text-red-400" },
      ],
      icon: Search,
      color: "text-surface-tint",
      badge: "Live Scan Engine"
    },
    content: {
      title: "Semantic Content Optimization & Topic Intelligence",
      description: "Analyze topic authority and content gaps using our NLP engine to rank for entire high-intent clusters.",
      features: [
        "Keyword density & LSI mapping",
        "Readability & sentiment analysis",
        "Topic gap identification",
        "Heading structure validation"
      ],
      mockupTitle: "Content Intelligence",
      stats: [
        { label: 'Relevancy', value: '88%' },
        { label: 'Gaps', value: '12' },
        { label: 'Grade', value: 'A-' },
      ],
      tableHeader: "Content Opportunities",
      tableRows: [
        { label: "Add LSI: 'SEO Strategy'", status: "High", statusColor: "text-surface-tint" },
        { label: "Optimize H2 Headings", status: "Medium", statusColor: "text-yellow-400" },
      ],
      icon: FileText,
      color: "text-secondary",
      badge: "NLP Processor"
    },
    keywords: {
      title: "Hyper-Local Keyword Tracking & Intent Mapping",
      description: "Monitor thousands of parameters across global regions with millisecond accuracy and intent classification.",
      features: [
        "Global & Local ranking data",
        "Search intent categorization",
        "Historical position trends",
        "SERP feature tracking (Snippets)"
      ],
      mockupTitle: "Keyword Analyzer",
      stats: [
        { label: 'Volume', value: '12k' },
        { label: 'Difficulty', value: '45' },
        { label: 'CPC', value: '$2.4' },
      ],
      tableHeader: "Target Keywords",
      tableRows: [
        { label: "Best SEO tools 2026", status: "Rank #2", statusColor: "text-green-400" },
        { label: "Next.js SEO guide", status: "Rank #5", statusColor: "text-green-400" },
      ],
      icon: Target,
      color: "text-surface-tint",
      badge: "Intent Engine"
    },
    performance: {
      title: "Core Web Vitals & Real User Monitoring",
      description: "Field data insights combined with synthetic testing to ensure your site stays in Google's 'Good' range.",
      features: [
        "LCP / FID / CLS tracking",
        "Time to Interactive (TTI)",
        "Network request breakdown",
        "Mobile performance scoring"
      ],
      mockupTitle: "Performance Vitals",
      stats: [
        { label: 'LCP', value: '0.8s' },
        { label: 'Speed', value: '98' },
        { label: 'Requests', value: '24' },
      ],
      tableHeader: "Speed Bottlenecks",
      tableRows: [
        { label: "Unoptimized Hero Image", status: "Fix", statusColor: "text-yellow-400" },
        { label: "Render-blocking script", status: "Critical", statusColor: "text-red-400" },
      ],
      icon: Activity,
      color: "text-green-400",
      badge: "Edge Monitor"
    },
    backlinks: {
      title: "Authority Profile & Referral Intelligence",
      description: "Real-time auditing of your referral network to protect against spam and identify high-value opportunities.",
      features: [
        "Domain Authority tracking",
        "Toxic link & spam detection",
        "Lost/New link notifications",
        "Competitor link comparison"
      ],
      mockupTitle: "Link Intelligence",
      stats: [
        { label: 'Domains', value: '842' },
        { label: 'Trust', value: '67' },
        { label: 'Spam', value: '2%' },
      ],
      tableHeader: "Recent Backlinks",
      tableRows: [
        { label: "techcrunch.com", status: "Follow", statusColor: "text-green-400" },
        { label: "github.com/nextjs", status: "Follow", statusColor: "text-green-400" },
      ],
      icon: Link2,
      color: "text-pink-400",
      badge: "Auth Monitor"
    }
  };

  const tabs = [
    { id: 'audit', label: 'SEO Audit', icon: Search, color: 'text-surface-tint' },
    { id: 'content', label: 'Content', icon: FileText, color: 'text-secondary' },
    { id: 'keywords', label: 'Keywords', icon: Target, color: 'text-surface-tint' },
    { id: 'performance', label: 'Performance', icon: Activity, color: 'text-green-400' },
    { id: 'backlinks', label: 'Backlinks', icon: Link2, color: 'text-pink-400' },
  ];

  const currentContent = contentMap[activeTab];

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-0 px-[1%] md:px-12 max-w-[1200px] mx-auto mt-[10px] md:mt-[20px]"
    >
      <div className="text-center space-y-2 md:space-y-[10px] mb-2 md:mb-[10px]">
        <span className="text-[8px] md:text-[10px] font-label-caps text-surface-tint uppercase tracking-[0.3em]">
          Full-Spectrum Analytics
        </span>
        <h2 className="text-xl md:text-3xl font-bold text-on-surface tracking-tight">
          Your Complete SEO & Analysis Solution
        </h2>
        <p className="text-[10px] md:text-xs text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Everything you need to dominate search rankings — from on-page audits to backlink intelligence — unified in one powerful dashboard.
        </p>
      </div>

      {/* Tabs / Selection Bar */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-[10px] mb-2 md:mb-[10px]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-xl border transition-all duration-300 min-w-[70px] md:min-w-[110px] cursor-pointer ${
                isActive 
                  ? 'bg-surface-tint/10 border-surface-tint shadow-lg ring-1 ring-surface-tint/50' 
                  : 'bg-surface-container/30 border-outline-variant/20 hover:border-outline-variant/50'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${isActive ? 'bg-surface-tint/20' : 'bg-surface-container'}`}>
                <Icon className={`w-3.5 h-3.5 md:w-5 md:h-5 ${tab.color}`} />
              </div>
              <span className={`text-[8px] md:text-[10px] font-bold ${isActive ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content Area - Card */}
      <div className="glass-card rounded-xl md:rounded-2xl border border-outline-variant/30 overflow-hidden bg-surface-container/20 p-3 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-2 md:gap-[40px] items-center"
          >
            <div className="space-y-2 md:space-y-[10px]">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-tint/10 rounded-full border border-surface-tint/20">
                <span className="w-1 h-1 rounded-full bg-surface-tint"></span>
                <span className="text-[8px] font-label-caps text-surface-tint uppercase tracking-wider">{currentContent.badge}</span>
              </div>
              
              <div className="space-y-2 md:space-y-[10px]">
                <h3 className="text-base md:text-2xl font-bold text-on-surface leading-tight">
                  {currentContent.title}
                </h3>
                <p className="text-[10px] md:text-xs text-on-surface-variant leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              <div className="space-y-2 md:space-y-[10px]">
                {currentContent.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-2.5 h-2.5 md:w-3 md:h-3 ${currentContent.color}`} />
                    <span className="text-[9px] md:text-[11px] text-on-surface-variant">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-surface-tint text-on-primary-container px-4 py-2 rounded-lg font-bold text-[10px] md:text-xs flex items-center gap-1.5 hover:opacity-90 transition-all active:scale-95 cursor-pointer w-fit mt-2">
                Launch {tabs.find(t => t.id === activeTab)?.label} <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>

            {/* Visual Mockup - Right Side */}
            <div className="relative">
              <div className="bg-surface-container rounded-lg border border-outline-variant/30 overflow-hidden shadow-xl">
                <div className="px-2 py-1 md:py-2 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-high/50">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-red-500/30"></div>
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-yellow-500/30"></div>
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500/30"></div>
                  </div>
                  <div className="bg-background/40 px-4 py-0.5 rounded-full text-[7px] md:text-[8px] text-on-surface-variant font-medium">
                    rankflow.io/analytics/{activeTab}
                  </div>
                  <div 
                    className="relative cursor-pointer group"
                    onClick={() => {
                      setHasUnread(false);
                      setShowAutoMessage(prev => !prev);
                    }}
                  >
                    {hasUnread && (
                      <>
                        <motion.div
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          className="absolute -top-1.5 -right-1.5 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full blur-[2px]"
                        ></motion.div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1.5 -right-1.5 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-surface-container-high flex items-center justify-center z-10 shadow-lg"
                        >
                          <span className="text-[6px] md:text-[8px] text-white font-black leading-none">1</span>
                        </motion.div>
                      </>
                    )}
                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-surface-tint/10 flex items-center justify-center group-hover:bg-surface-tint/20 transition-colors">
                      <Bell className="w-3 h-3 md:w-4 md:h-4 text-surface-tint" />
                    </div>

                    {/* Automatic Message Popup */}
                    <AnimatePresence>
                      {showAutoMessage && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, y: 10, x: -100 }}
                          animate={{ opacity: 1, scale: 1, y: 0, x: -100 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10, x: -100 }}
                          className="absolute bottom-full mb-2 right-0 w-48 bg-surface-container-high border border-outline-variant/30 rounded-xl p-3 shadow-2xl z-50 pointer-events-auto"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-surface-tint flex items-center justify-center shrink-0">
                              <Sparkles className="w-3 h-3 text-white" />
                            </div>
                            <div className="text-left">
                              <span className="text-[10px] font-bold text-on-surface block mb-0.5">RankFlow Assistant</span>
                              <p className="text-[9px] text-on-surface-variant leading-tight">
                                Your next rank update is scheduled in 4 hours. We've detected 3 new optimization paths!
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <div className="p-3 md:p-6 bg-surface-container-lowest">
                  <div className="flex items-center justify-between mb-3 text-[10px] md:text-xs">
                    <span className="font-bold text-on-surface">{currentContent.mockupTitle}</span>
                    <span className={`text-[6px] md:text-[7px] font-black uppercase px-1 py-0.5 ${currentContent.color.replace('text-', 'bg-').replace('tint', 'tint/20').replace('secondary', 'secondary/20').replace('green-400', 'green-400/20').replace('pink-400', 'pink-400/20')} ${currentContent.color} rounded`}>Live</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1 md:gap-3 mb-3 md:mb-4">
                    {currentContent.stats.map((stat, i) => (
                      <div key={i} className="bg-surface-container-high p-1.5 md:p-2.5 rounded-lg border border-outline-variant/10">
                        <span className="text-[6px] md:text-[7px] text-on-surface-variant block mb-0.5 uppercase font-bold">{stat.label}</span>
                        <span className="text-sm md:text-lg font-black text-on-surface">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border border-outline-variant/10 rounded-lg overflow-hidden">
                    <table className="w-full text-[7px] md:text-[9px]">
                      <thead className="bg-surface-container text-on-surface-variant">
                        <tr>
                          <th className="px-2 py-1 md:py-2 text-left">{currentContent.tableHeader}</th>
                          <th className="px-2 py-1 md:py-2 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/5">
                        {currentContent.tableRows.map((row, i) => (
                          <tr key={i}>
                            <td className="px-2 py-1 md:py-2">{row.label}</td>
                            <td className="px-2 py-1 md:py-2 text-right"><span className={`${row.statusColor} font-bold uppercase text-[6px] md:text-[7px]`}>{row.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function FeaturesSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="py-0 px-[1%] md:px-12 max-w-[1440px] mx-auto mt-[10px] md:mt-[20px]"
    >
      <div className="mb-2 md:mb-[20px]">
        <h2 className="text-lg md:font-h2 text-on-surface mb-1 uppercase tracking-tight">Core Infrastructure</h2>
        <p className="text-on-surface-variant text-[12px] md:font-body-md">Precision-engineered modules for maximum extraction.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-[10px]">
        <div className="col-span-2 glass-card p-3 md:p-8 rounded-xl glow-cyan group relative overflow-hidden flex flex-col justify-between min-h-[160px] md:min-h-[320px]">
          <div className="relative z-10">
            <Database className="w-6 h-6 md:w-10 md:h-10 text-surface-tint mb-2 md:mb-6" strokeWidth={1.5} />
            <h3 className="text-sm md:font-h3 text-on-surface mb-1">Neural Extraction</h3>
            <p className="text-on-surface-variant text-[10px] md:font-body-md mb-2 md:mb-6 max-w-[200px] md:max-w-sm">Advanced ML models to predict search intent shifts before they happen.</p>
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>

        <div className="col-span-2 md:col-span-1 lg:col-span-2 glass-card p-3 md:p-8 rounded-xl glow-cyan">
          <LineChart className="w-6 h-6 md:w-10 md:h-10 text-secondary mb-2 md:mb-6" strokeWidth={1.5} />
          <h3 className="text-sm md:font-h3 text-on-surface mb-1">SERP Tracking</h3>
          <p className="text-on-surface-variant text-[10px] md:font-body-md">Hyper-local tracking with millisecond latency. Instant ranking notifications.</p>
          <div className="mt-3 md:mt-8 space-y-1.5 md:space-y-3">
            <div className="flex justify-between items-center p-2 bg-surface-variant/20 rounded border border-outline-variant/10">
              <span className="text-[9px] md:font-code text-on-surface-variant">"seo services"</span>
              <span className="text-surface-tint text-[10px] md:text-base font-bold">#1</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-surface-variant/20 rounded border border-outline-variant/10">
              <span className="text-[9px] md:font-code text-on-surface-variant">"saas marketing"</span>
              <span className="text-surface-tint text-[10px] md:text-base font-bold">#2</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 glass-card p-3 md:p-8 rounded-xl glow-cyan">
          <Shield className="w-5 h-5 md:w-10 md:h-10 text-surface-tint mb-2 md:mb-6" strokeWidth={1.5} />
          <h3 className="text-[11px] md:font-h3 text-on-surface mb-1 uppercase tracking-wider">Anti-Link Rot</h3>
          <p className="text-on-surface-variant text-[9px] md:font-body-sm leading-tight">Automated backlink monitoring system.</p>
        </div>

        <div className="col-span-1 glass-card p-3 md:p-8 rounded-xl glow-cyan">
          <Webhook className="w-5 h-5 md:w-10 md:h-10 text-surface-tint mb-2 md:mb-6" strokeWidth={1.5} />
          <h3 className="text-[11px] md:font-h3 text-on-surface mb-1 uppercase tracking-wider">Global API</h3>
          <p className="text-on-surface-variant text-[9px] md:font-body-sm leading-tight">Endpoints for enterprise-grade data piping.</p>
        </div>
      </div>
    </motion.section>
  );
}

function HowItWorksSection() {
  const steps = [
    { 
      id: '01', 
      title: 'Deploy Crawler', 
      desc: 'Connect your GSC or crawl directly from our global edge nodes.',
      icon: Database 
    },
    { 
      id: '02', 
      title: 'Analyze Data', 
      desc: 'Our neural engine identifies ranking gaps and performance bottlenecks.',
      icon: LineChart 
    },
    { 
      id: '03', 
      title: 'Dominate SERP', 
      desc: 'Execute automated fixes and watch your organic traffic scale.',
      icon: Zap 
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-0 px-[1%] md:px-12 max-w-[1200px] mx-auto relative mt-[10px] md:mt-[20px]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent hidden md:block"></div>
      
      <div className="text-center mb-2 md:mb-[10px] relative z-10">
        <h2 className="text-xl md:text-3xl font-black text-on-surface tracking-tighter uppercase">Propulsion Manual</h2>
        <p className="text-[10px] md:text-sm text-on-surface-variant opacity-60">From integration to market dominance in three phases.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-2 md:gap-[20px] relative z-10">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="flex md:flex-col items-center md:text-center gap-2 md:gap-[10px] group"
          >
            <div className="relative">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full glass-card border border-surface-tint/20 flex items-center justify-center text-surface-tint text-sm md:text-xl font-black shadow-[0_0_20px_rgba(0,240,255,0.1)] group-hover:bg-surface-tint group-hover:text-white transition-all duration-500">
                {step.id}
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-4 bg-outline-variant/20 md:hidden"></div>
              )}
            </div>
            
            <div className="flex-1 space-y-2 md:space-y-[10px]">
              <h3 className="text-[12px] md:text-lg font-bold text-on-surface tracking-tight uppercase">{step.title}</h3>
              <p className="text-[10px] md:text-sm text-on-surface-variant leading-relaxed opacity-70">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function SEOIntelligenceSection() {
  const [activeTab, setActiveTab] = useState('analytics');
  const [hasUnread, setHasUnread] = useState(true);
  const [showAutoMessage, setShowAutoMessage] = useState(false);

  const contentMap: Record<string, {
    badge: string;
    title: string;
    description: string;
    stats: { label: string; value: string; change?: string; status?: string; color?: string }[];
    mockupUrl: string;
    mockupHeader: string;
    mainTitle: string;
    mainDesc: string;
    microStats: { label: string; value: string }[];
    bulletPoints: { text: string; icon: any }[];
  }> = {
    analytics: {
      badge: "Real-time Intelligence",
      title: "Your entire SEO operation in one live dashboard",
      description: "Track keyword rankings, monitor Core Web Vitals, and watch organic traffic trends update in real time without waiting for weekly reports.",
      stats: [
        { label: 'Traffic', value: '3.4k', change: '+12%', color: 'text-surface-tint' },
        { label: 'Visibility', value: '78%', change: '+5%', color: 'text-secondary' },
        { label: 'Vitals', value: '94', status: 'OK', color: 'text-green-400' },
        { label: 'Issues', value: '12', status: 'Fix', color: 'text-red-400' },
      ],
      mockupUrl: "app.rankflow.io/dashboard",
      mockupHeader: "SEO Dashboard: keyword performance",
      mainTitle: "Visibility Trend",
      mainDesc: "Real-time performance across 500 keywords",
      microStats: [
        { label: 'Traffic Lift', value: '32%' },
        { label: 'Avg. Score', value: '94' },
        { label: 'Faster LCP', value: '2.4s' },
      ],
      bulletPoints: [
        { text: "Live keyword position tracking updated every 24 hours", icon: CheckCircle2 },
        { text: "Core Web Vitals timeline LCP, CLS & INP in one view", icon: Activity },
        { text: "Competitor benchmarking see exactly where rivals outrank you", icon: Target },
      ]
    },
    audit: {
      badge: "Compliance & Health",
      title: "Automated Core Web Vitals & Compliance Auditor",
      description: "Deploy our headless crawler across your entire Next.js application to identify performance regressions and accessibility gaps instantly.",
      stats: [
        { label: 'SEO Score', value: '100', status: 'Pass', color: 'text-green-400' },
        { label: 'Vitals', value: '98', status: 'Great', color: 'text-green-400' },
        { label: 'Access', value: '89', status: 'Warn', color: 'text-yellow-400' },
        { label: 'Crit', value: '0', status: 'Clear', color: 'text-green-400' },
      ],
      mockupUrl: "app.rankflow.io/audit/results",
      mockupHeader: "Issue Auditor: page health scan",
      mainTitle: "Regression Analysis",
      mainDesc: "Daily technical audit of 1,200 production routes",
      microStats: [
        { label: 'Pages Scanned', value: '1.2k' },
        { label: 'Fixed Errors', value: '84' },
        { label: 'Health Index', value: '98%' },
      ],
      bulletPoints: [
        { text: "Automated crawling of dynamic Next.js routes and layouts", icon: Search },
        { text: "Deep-dive accessibility analysis with WCAG compliance score", icon: Shield },
        { text: "Performance budget alerts if PRs exceed LCP thresholds", icon: Gauge },
      ]
    }
  };

  const current = contentMap[activeTab];

  return (
    <motion.section 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-0 px-4 md:px-12 max-w-[1200px] mx-auto text-center mt-[10px] md:mt-[20px]"
    >
      <div className="space-y-2 md:space-y-[10px] mb-2 md:mb-[10px]">
        <span className="text-[8px] md:text-[10px] font-label-caps text-surface-tint uppercase tracking-[0.3em]">
          The Solution
        </span>
        <h2 className="text-xl md:text-3xl font-bold text-on-surface tracking-tight">
          Meet RankFlow — Your <br className="md:hidden" />
          <span className="text-surface-tint">SEO Intelligence Engine</span>
        </h2>
        <p className="text-[10px] md:text-xs text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          One platform to crawl, diagnose, and dominate. Built for Next.js teams who treat SEO as an engineering discipline.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-2 md:mb-[10px]">
        <button 
          onClick={() => setActiveTab('analytics')}
          className={`px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg font-bold text-[9px] md:text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'analytics' ? 'bg-surface-tint/10 text-surface-tint border border-surface-tint/30' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <LayoutDashboard className="w-3 h-3 md:w-4 md:h-4" /> Analytics Dashboard
        </button>
        <button 
          onClick={() => setActiveTab('audit')}
          className={`px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg font-bold text-[9px] md:text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'audit' ? 'bg-surface-tint/10 text-surface-tint border border-surface-tint/30' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <Cpu className="w-3 h-3 md:w-4 md:h-4" /> Issue Auditor
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={activeTab}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           transition={{ duration: 0.3 }}
        >
          {/* Main Dashboard Mockup */}
          <div className="glass-card rounded-lg md:rounded-3xl border border-outline-variant/30 overflow-hidden bg-surface-container/20 p-1 md:p-4 shadow-2xl mb-2 md:mb-[10px]">
            <div className="bg-surface-container rounded-md md:rounded-2xl border border-outline-variant/30 overflow-hidden">
              <div className="px-1.5 py-0.5 md:py-2 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-high/50">
                <div className="flex gap-1 md:gap-1.5">
                  <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-red-500/30"></div>
                  <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-yellow-500/30"></div>
                  <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500/30"></div>
                </div>
                <div className="bg-background/40 px-2 md:px-6 py-0.5 rounded-full text-[5px] md:text-[8px] text-on-surface-variant font-medium">
                  {current.mockupUrl}
                </div>
                <div className="w-4 md:w-10"></div>
              </div>
              
              <div className="p-1.5 md:p-6 bg-[#0a0a0f] text-left">
                {/* Dashboard Header */}
                <div className="flex items-center gap-1.5 md:gap-4 mb-2 md:mb-8 border-b border-white/5 pb-1 md:pb-2">
                    <div 
                      className="w-4 h-4 md:w-8 md:h-8 bg-surface-tint rounded flex items-center justify-center relative cursor-pointer"
                      onClick={() => {
                        setHasUnread(false);
                        setShowAutoMessage(prev => !prev);
                      }}
                    >
                      <Zap className="w-2.5 h-2.5 md:w-4 md:h-4 text-white" />
                      {/* Unread Message Badge */}
                      {hasUnread && (
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center"
                        >
                          <span className="text-[4px] md:text-[6px] text-white font-bold leading-none">1</span>
                        </motion.span>
                      )}

                      {/* Automatic Message Popup */}
                      <AnimatePresence>
                        {showAutoMessage && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 10, x: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, x: 20 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10, x: 20 }}
                            className="absolute top-full mt-2 left-0 w-48 bg-[#1a1a25] border border-white/10 rounded-xl p-3 shadow-2xl z-50 pointer-events-auto"
                          >
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 rounded-full bg-surface-tint flex items-center justify-center shrink-0">
                                <Sparkles className="w-3 h-3 text-white" />
                              </div>
                              <div className="text-left">
                                <span className="text-[10px] font-bold text-white block mb-0.5">System Message</span>
                                <p className="text-[9px] text-white/60 leading-tight">
                                  Analytics sync complete. Your dashboard has been updated with the latest SERP data.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <h4 className="text-white text-[7px] md:text-sm font-bold truncate">{current.mockupHeader}</h4>
                    <div className="ml-auto flex items-center gap-1 md:gap-2">
                      <div className="bg-white/5 px-1 md:px-2 py-0.5 md:py-1 rounded text-[5px] md:text-[9px] text-white/60">Oct 23</div>
                      <div className="bg-white/10 px-1 md:px-2 py-0.5 md:py-1 rounded text-[5px] md:text-[9px] text-white flex items-center gap-0.5 md:gap-1 cursor-pointer hover:bg-white/20 transition-colors">
                        <motion.div
                          animate={{ y: [0, -2, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <ArrowUpRight className="w-2 h-2 md:w-3 md:h-3" />
                        </motion.div>
                        Export
                      </div>
                    </div>
                </div>

                {/* Metric Grid */}
                <div className="grid grid-cols-4 gap-1 md:gap-4 mb-3 md:mb-8">
                  {current.stats.map((m, i) => (
                    <div key={i} className="bg-white/5 p-1 md:p-4 rounded-md md:rounded-xl border border-white/10">
                      <span className="text-[5px] md:text-[9px] text-white/50 block mb-0.5 md:mb-1 uppercase font-bold truncate">{m.label}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[9px] md:text-2xl font-black text-white">{m.value}</span>
                        {m.change && <span className={`text-[4px] md:text-[9px] font-bold ${m.color}`}>{m.change}</span>}
                        {m.status && <span className={`text-[4px] md:text-[7px] px-0.5 md:px-1 py-0.5 rounded ${m.color === 'text-green-400' ? 'bg-green-400/10' : (m.color === 'text-yellow-400' ? 'bg-yellow-400/10' : 'bg-red-400/10')} ${m.color}`}>{m.status}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Mockup Area */}
                <div className="bg-white/5 rounded-lg md:rounded-xl border border-white/10 p-1.5 md:p-5 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-2 md:mb-6 relative z-10">
                      <div className="space-y-0.5">
                        <span className="text-[6px] md:text-[10px] text-white font-bold block">{current.mainTitle}</span>
                        <span className="text-[4px] md:text-[8px] text-white/40 hidden md:block">{current.mainDesc}</span>
                      </div>
                      <div className="flex gap-1 md:gap-4">
                        <span className="flex items-center gap-0.5 text-[5px] md:text-[7px] text-white/60"><span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${activeTab === 'analytics' ? 'bg-surface-tint' : 'bg-green-400'}`}></span> Current</span>
                      </div>
                    </div>
                    
                    <div className="h-12 md:h-48 relative">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between opacity-5">
                          {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-white"></div>)}
                      </div>
                      
                      <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="dashboardChartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={activeTab === 'analytics' ? "var(--surface-tint)" : "rgba(74, 222, 128, 1)"} stopOpacity="0.3" />
                              <stop offset="100%" stopColor={activeTab === 'analytics' ? "var(--surface-tint)" : "rgba(74, 222, 128, 1)"} stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            d={activeTab === 'analytics' 
                                ? "M0,110 C50,105 80,70 120,75 C160,80 200,40 240,45 C280,50 320,15 360,20 C380,22 400,10 400,10"
                                : "M0,110 L40,100 L80,105 L120,60 L160,70 L200,30 L240,40 L280,15 L320,25 L360,5 L400,12"
                            } 
                            fill="none" 
                            stroke={activeTab === 'analytics' ? "var(--surface-tint)" : "rgba(74, 222, 128, 1)"} 
                            strokeWidth="3" 
                            strokeLinecap="round"
                          />
                          <path 
                            d={activeTab === 'analytics'
                                ? "M0,110 C50,105 80,70 120,75 C160,80 200,40 240,45 C280,50 320,15 360,20 C380,22 400,10 400,10 L400,120 L0,120 Z"
                                : "M0,110 L40,100 L80,105 L120,60 L160,70 L200,30 L240,40 L280,15 L320,25 L360,5 L400,12 L400,120 L0,120 Z"
                            } 
                            fill="url(#dashboardChartGrad)" 
                          />
                      </svg>
                    </div>
                    <div className="flex justify-between mt-1 md:mt-3 text-[4px] md:text-[6px] text-white/20 font-mono">
                      <span>SEP 01</span>
                      <span>OCT 31</span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-text Section */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-6 text-left space-y-4 md:space-y-6">
              <div className="space-y-2">
                <span className="text-[8px] md:text-[10px] font-label-caps text-surface-tint uppercase tracking-widest">{current.badge}</span>
                <h3 className="text-lg md:text-3xl font-bold text-on-surface leading-tight">
                  {current.title}
                </h3>
                <p className="text-[10px] md:text-sm text-on-surface-variant leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {current.microStats.map((stat, i) => (
                  <div key={i} className="bg-surface-container p-2 md:p-4 rounded-xl border border-outline-variant/10">
                    <span className="text-[12px] md:text-2xl font-black text-on-surface block">{stat.value}</span>
                    <span className="text-[6px] md:text-[8px] text-on-surface-variant uppercase font-bold">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {current.bulletPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[9px] md:text-xs text-on-surface-variant">
                    <div className="mt-0.5"><item.icon className="w-3 h-3 text-surface-tint" /></div>
                    <p><strong>{item.text.split(' ')[0]} {item.text.split(' ')[1]} {item.text.split(' ')[2]}</strong> {item.text.split(' ').slice(3).join(' ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-2 gap-2 md:gap-4">
              {[
                { title: 'Real-time Audit', desc: 'Continuous scanning for SEO regressions as you push code.', icon: Clock },
                { title: 'Performance Scoring', desc: 'Proprietary Core Web Vitals engine correlated with CrUX data.', icon: Activity },
                { title: 'Keyword Tracking', desc: 'Historical rank storage to visualise SERP positions over time.', icon: TrendingUp },
                { title: 'AI Optimisation', desc: 'LLM-powered rewrites of title tags to maximise CTR automatically.', icon: Sparkles },
                { title: 'Next.js Reports', desc: 'Deep-dives into Image optimisation, Metadata API, and App Router.', icon: LayoutDashboard },
                { title: 'Mobile-first Insights', desc: 'Simulated mobile Chromium audits for seamless responsive performance.', icon: Smartphone },
              ].map((feature, idx) => (
                <div key={idx} className="glass-card p-3 md:p-6 rounded-xl md:rounded-2xl border border-outline-variant/20 text-left space-y-2 hover:border-surface-tint/30 transition-all group">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-surface-tint/10 flex items-center justify-center text-surface-tint group-hover:bg-surface-tint transition-colors group-hover:text-white">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h4 className="text-[10px] md:text-sm font-bold text-on-surface">{feature.title}</h4>
                  <p className="text-[8px] md:text-[11px] text-on-surface-variant leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}



function TestimonialsSection() {
  const testimonials = [
    {
      name: "S. Jenkins",
      role: "VP Growth",
      text: "Predictive extraction alone generated a 40% lift in enterprise traffic.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format"
    },
    {
      name: "D. Chen",
      role: "SEO Lead",
      text: "Webhooks allow our engineering team to react instantly to volatility.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format"
    },
    {
      name: "E. Rodriguez",
      role: "Founder",
      text: "Anti-link rot monitoring is a lifesaver. Gorgeous UI.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&auto=format"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-0 px-[1%] md:px-12 max-w-[1440px] mx-auto border-t border-outline-variant/30 relative mt-[10px] md:mt-[20px] pt-[10px] md:pt-[20px]"
    >
      <div className="absolute left-1/2 -top-[100px] -translate-x-1/2 w-[400px] h-[200px] bg-primary-container/5 blur-[80px] rounded-full pointer-events-none"></div>
      
      <div className="text-center mb-2 md:mb-[20px] relative z-10">
        <h2 className="text-lg md:font-h2 text-on-surface mb-1 uppercase tracking-tight">Verified Intel</h2>
        <p className="text-on-surface-variant text-[10px] md:font-body-md">Trusted by high-performance engineering teams.</p>
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="glass-card p-4 md:p-16 rounded-xl md:rounded-3xl border border-outline-variant/30 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-gradient-to-b from-primary-container to-secondary"></div>
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-center text-center md:text-left">
            <img 
              src={testimonials[currentIndex].avatar} 
              alt={testimonials[currentIndex].name}
              className="w-10 h-10 md:w-24 md:h-24 rounded-full object-cover border-2 border-outline-variant/30 grayscale group-hover:grayscale-0 transition-all"
            />
            <div className="flex-1">
              <div className="flex gap-0.5 mb-2 justify-center md:justify-start">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-[12px] md:font-body-lg text-on-surface mb-2 md:mb-6 leading-tight italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <div className="text-xs md:font-h3 text-on-surface">{testimonials[currentIndex].name}</div>
                <div className="text-on-surface-variant text-[8px] md:font-label-caps mt-0.5">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4 md:mt-12 justify-center">
            <button onClick={handlePrev} className="w-7 h-7 md:w-10 md:h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5 self-center">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full transition-all cursor-pointer ${currentIndex === idx ? 'bg-surface-tint w-4 md:w-6' : 'bg-on-surface-variant/20 hover:bg-on-surface-variant/40'}`}
                />
              ))}
            </div>
            <button onClick={handleNext} className="w-7 h-7 md:w-10 md:h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const plans = [
    {
      name: "Starter",
      desc: "Launch your SEO journey with powerful audits and instant insights for single projects.",
      price: billingCycle === 'yearly' ? '23' : '29',
      features: ["1 Project", "1 User", "10K crawls/month"],
      notFeatures: ["Data Export", "API Access"],
      cta: "Start Free Trial",
      visual: (
        <div className="relative h-16 md:h-20 w-full bg-surface-tint/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,var(--surface-tint),transparent)]"></div>
          <div className="relative flex items-end gap-1 px-4 translate-y-2">
            <motion.div initial={{ height: 6 }} whileInView={{ height: 12 }} transition={{ delay: 0.2 }} className="w-4 md:w-6 bg-surface-tint/20 rounded-t-sm" />
            <motion.div initial={{ height: 10 }} whileInView={{ height: 20 }} transition={{ delay: 0.3 }} className="w-4 md:w-6 bg-surface-tint/40 rounded-t-sm" />
            <motion.div initial={{ height: 6 }} whileInView={{ height: 30 }} transition={{ delay: 0.4 }} className="w-4 md:w-6 bg-surface-tint rounded-t-sm shadow-lg shadow-surface-tint/30 relative">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="w-2 h-2 text-white" />
               </div>
            </motion.div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-surface-tint/20 absolute -right-6 top-0 flex items-center justify-center text-surface-tint opacity-40">
               <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Business",
      desc: "Scale your SEO operation with unlimited audits, team collaboration, and deep analytics.",
      price: billingCycle === 'yearly' ? '63' : '79',
      features: ["Unlimited Projects", "Unlimited Users", "100K crawls/month", "Data Export"],
      notFeatures: ["API Access"],
      cta: "Start Free Trial",
      popular: true,
      visual: (
        <div className="relative h-16 md:h-20 w-full bg-surface-tint/10 flex items-center justify-center overflow-hidden">
          <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-surface-tint rounded-full text-[6px] md:text-[8px] font-black text-white shadow-lg">Most Popular</div>
          <div className="relative w-24 md:w-32 h-8 md:h-10 glass-card border-white/20 p-1 rounded flex flex-col gap-1 translate-y-1">
             <div className="h-1 w-1/2 bg-white/20 rounded"></div>
             <div className="h-2 w-full bg-surface-tint/20 rounded relative overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
             </div>
          </div>
        </div>
      )
    },
    {
      name: "Elite / Enterprise",
      desc: "Full-power access with API integration, custom crawl limits, and a dedicated manager.",
      price: billingCycle === 'yearly' ? '199' : '249',
      features: ["Unlimited Projects", "Unlimited Users", "Unlimited crawls", "Full API Access"],
      notFeatures: [],
      cta: "Contact Sales",
      visual: (
        <div className="relative h-16 md:h-20 w-full bg-surface-tint/5 flex items-center justify-center overflow-hidden">
          <div className="relative flex items-center gap-2 md:gap-3">
             <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-surface-tint/20 border border-surface-tint/30 flex items-center justify-center shadow-inner">
                <LayoutDashboard className="w-3 h-3 md:w-5 md:h-5 text-surface-tint" />
             </div>
             <div className="space-y-0.5">
                <div className="h-1 w-8 md:w-12 bg-white/20 rounded"></div>
             </div>
             <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-surface-tint flex items-center justify-center border-2 border-background shadow-lg">
                <Plus className="w-2 h-2 text-white" />
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-0 px-[1%] md:px-12 max-w-[1200px] mx-auto text-center mt-[10px] md:mt-[20px]"
    >
      <div className="space-y-2 mb-2 md:mb-[10px]">
        <span className="text-[9px] md:text-xs font-bold text-surface-tint uppercase tracking-[0.2em]">Plans & Pricing</span>
        <h2 className="text-xl md:text-5xl font-black text-on-surface tracking-tighter">Compare The Plans</h2>
        
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className={`text-[9px] md:text-sm font-bold ${billingCycle === 'monthly' ? 'text-on-surface' : 'text-on-surface-variant opacity-60'}`}>Monthly</span>
          <button 
            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
            className="w-10 h-5 md:w-14 md:h-7 rounded-full bg-surface-container-high relative transition-colors cursor-pointer p-0.5 border border-outline-variant/30"
          >
            <div className={`w-3.5 h-3.5 md:w-5 md:h-5 bg-surface-tint rounded-full transition-all duration-300 ${billingCycle === 'yearly' ? 'translate-x-5 md:translate-x-7' : 'translate-x-0'}`} />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-[9px] md:text-sm font-bold ${billingCycle === 'yearly' ? 'text-on-surface' : 'text-on-surface-variant opacity-60'}`}>Yearly</span>
            <span className="px-1.5 py-0.5 rounded-full bg-surface-tint/10 text-surface-tint text-[7px] md:text-[10px] font-black uppercase">Save 20%</span>
          </div>
        </div>
        <p className="text-[7px] md:text-xs text-on-surface-variant pt-2 opacity-50">Save up to 32% with yearly billing.</p>
      </div>

      {/* Horizontal Swipe/Slide UI for Mobile, Grid for Desktop */}
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 md:gap-6 pb-6 md:pb-0 px-4 -mx-4 md:mx-0 md:px-0 no-scrollbar overflow-y-hidden">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`snap-center shrink-0 w-[280px] md:w-auto relative glass-card flex flex-col rounded-2xl md:rounded-[2rem] border transition-all hover:translate-y-[-4px] overflow-hidden ${plan.popular ? 'border-surface-tint ring-1 ring-surface-tint/20 bg-surface-tint/[0.02]' : 'border-outline-variant/20 hover:border-surface-tint/30'}`}
          >
            {plan.visual}
            
            <div className="p-3 md:p-6 flex flex-col flex-1 text-left">
              <div className="mb-2 md:mb-4">
                <h3 className="text-base md:text-2xl font-black text-on-surface mb-0.5 tracking-tight">{plan.name}</h3>
                <p className="text-[9px] md:text-xs text-on-surface-variant leading-relaxed opacity-70 min-h-[1.5rem]">{plan.desc}</p>
              </div>

              <div className="mb-3 md:mb-5 flex items-baseline gap-1">
                <span className="text-2xl md:text-4xl font-black text-on-surface tracking-tighter">${plan.price}</span>
                <span className="text-[9px] md:text-xs text-on-surface-variant font-bold opacity-40">/Billed {billingCycle === 'yearly' ? 'Yearly' : 'Monthly'}</span>
              </div>

              <div className="space-y-1.5 md:space-y-3 mb-4 md:mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 text-left">
                    <div className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full border border-surface-tint/30 flex items-center justify-center text-surface-tint shrink-0 bg-surface-tint/5">
                      <Check className="w-2 md:w-3" />
                    </div>
                    <span className="text-[10px] md:text-sm text-on-surface font-medium">{feature}</span>
                  </div>
                ))}
                {plan.notFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 text-left opacity-20">
                    <div className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full border border-on-surface/30 flex items-center justify-center shrink-0">
                      <X className="w-2 md:w-3" />
                    </div>
                    <span className="text-[10px] md:text-sm text-on-surface font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-2 md:py-3 rounded-xl font-black text-[10px] md:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95 uppercase tracking-wider ${plan.popular ? 'bg-surface-tint text-white hover:opacity-90' : 'bg-surface-tint/10 text-surface-tint border border-surface-tint/20 hover:bg-surface-tint/20'}`}>
                {plan.cta} <ArrowUpRight className="w-3.5 h-3.5 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function FAQSection() {
  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'technical', name: 'Technical SEO' },
    { id: 'billing', name: 'Billing & Plans' },
    { id: 'nextjs', name: 'Next.js Support' },
  ];

  const faqs = [
    {
      category: 'general',
      q: "Does RankFlow support Next.js 14 and App Router?",
      a: "Yes, RankFlow is built specifically for modern React architectures. We fully support App Router, Metadata API, and dynamic Sitemap generation tracking out of the box."
    },
    {
      category: 'general',
      q: "What is RankFlow Protocol?",
      a: "RankFlow Protocol is our proprietary crawling engine designed to simulate high-frequency user interactions while maintaining low overhead on your server."
    },
    {
      category: 'technical',
      q: "How accurate is the performance data?",
      a: "Our data is direct from Chrome User Experience (CrUX) reports and real-time Chrome-simulated audits. We correlate these metrics with proprietary SEO logic to give you 99.9% accurate health scores."
    },
    {
      category: 'technical',
      q: "Does it support international SEO?",
      a: "Yes, you can specify target regions and languages. Our crawler will simulate regional access (Hreflang validation, local SERP tracking) from edge locations globally."
    },
    {
      category: 'billing',
      q: "Can I cancel my Pro subscription at any time?",
      a: "Absolutely. We offer a transparent month-to-month or yearly plan with no lock-in. You can cancel, upgrade, or downgrade your plan instantly from your dashboard settings."
    },
    {
      category: 'billing',
      q: "Do you offer enterprise custom pricing?",
      a: "For platforms with over 1M monthly crawls, we provide custom quotes with dedicated infrastructure. Reach out to our sales team for Elite tier access."
    },
    {
      category: 'nextjs',
      q: "How do I integrate with Next.js Metadata API?",
      a: "RankFlow automatically detects Metadata objects in your server components. We validate your Title, Description, and OpenGraph tags directly from the rendered HTML."
    }
  ];

  const [activeCategory, setActiveCategory] = useState('general');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <motion.section 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-0 px-[1%] md:px-12 max-w-[1200px] mx-auto relative group mt-[10px] md:mt-[20px]"
    >
      {/* Background Blobs for specific styling */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-surface-tint/[0.03] blur-[80px] md:blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-secondary/[0.03] blur-[80px] md:blur-[120px] rounded-full -z-10"></div>

      <div className="text-center space-y-2 md:space-y-[10px] mb-2 md:mb-[10px]">
        <h2 className="text-xl md:text-4xl font-black text-on-surface tracking-tighter">Frequently Asked Questions</h2>
        <p className="text-[9px] md:text-sm text-on-surface-variant max-w-lg mx-auto opacity-70 leading-relaxed">
          Our platform is built to help you work smarter, not harder. It adapts to your needs and supports your goals. Make the most of every feature.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-[20px] items-start">
        {/* Categories Sidebar */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col gap-1 md:gap-[10px] overflow-x-auto no-scrollbar pb-2 lg:pb-0 scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIdx(0);
              }}
              className={`flex items-center justify-between w-full min-w-[140px] px-3 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl border transition-all cursor-pointer whitespace-nowrap group/btn ${
                activeCategory === cat.id 
                ? 'bg-white text-on-surface border-surface-tint/10 shadow-sm' 
                : 'glass-card border-transparent text-on-surface-variant opacity-50 hover:opacity-100 hover:bg-white/40'
              }`}
            >
              <span className="text-[10px] md:text-sm font-bold">{cat.name}</span>
              <ChevronRight className={`w-3 h-3 md:w-4 md:h-4 transition-transform group-hover/btn:translate-x-0.5 ${activeCategory === cat.id ? 'text-surface-tint' : 'opacity-30'}`} />
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="lg:col-span-8 space-y-1.5 md:space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass-card border md:rounded-2xl overflow-hidden transition-all text-left ${openIdx === idx ? 'bg-white border-surface-tint/10 shadow-sm rounded-xl' : 'border-outline-variant/5 hover:border-outline-variant/20 rounded-lg md:rounded-xl'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-4 py-3 md:px-8 md:py-6 flex items-center justify-between gap-4 text-[10px] md:text-lg font-bold text-on-surface hover:bg-surface-tint/[0.02] transition-colors cursor-pointer focus:outline-none"
              >
                <span className="flex-1 tracking-tight">{faq.q}</span>
                <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center shrink-0">
                  {openIdx === idx ? (
                    <X className="w-3.5 h-3.5 md:w-5 md:h-5 text-on-surface-variant opacity-60" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 md:w-5 md:h-5 text-on-surface-variant opacity-30" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="px-4 pb-4 md:px-8 md:pb-8 text-[9px] md:text-sm text-on-surface-variant leading-relaxed pt-1 opacity-70 border-t border-outline-variant/10 mt-[-1px] mx-4 md:mx-8">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 opacity-30 italic text-[10px] md:text-sm">No questions in this category yet.</div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

function DeveloperSection() {
  const [activeTab, setActiveTab] = useState<'rest' | 'sdk'>('sdk');

  return (
    <motion.section 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-0 px-[1%] md:px-12 max-w-[1440px] mx-auto mt-[10px] md:mt-[20px]"
    >
      <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-lg md:font-h2 text-on-surface mb-2 uppercase tracking-tight">Built for <span className="text-secondary">Engineers</span></h2>
          <p className="text-on-surface-variant text-[12px] md:font-body-lg mb-2 md:mb-[10px] max-w-xl mx-auto md:mx-0 leading-snug">
            Integrate our robust REST API or TypeScript SDK into your existing automated workflows.
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            <div className="space-y-1 glass-card p-3 rounded-lg">
              <div className="text-sm md:font-h3 text-on-surface">99.99%</div>
              <div className="text-on-surface-variant text-[8px] md:font-label-caps uppercase tracking-widest">UPTIME</div>
            </div>
            <div className="space-y-1 glass-card p-3 rounded-lg">
              <div className="text-sm md:font-h3 text-on-surface">&lt;50ms</div>
              <div className="text-on-surface-variant text-[8px] md:font-label-caps uppercase tracking-widest">LATENCY</div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 glass-card rounded-xl overflow-hidden border border-outline-variant/30 shadow-2xl">
          <div className="bg-surface-container-high px-3 py-1.5 border-b border-outline-variant/30 flex items-center gap-1.5">
            <button 
              onClick={() => setActiveTab('sdk')}
              className={`px-2 py-0.5 rounded font-code text-[10px] md:text-xs cursor-pointer transition-colors ${activeTab === 'sdk' ? 'bg-on-surface/10 text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              rankflow.js
            </button>
            <button 
              onClick={() => setActiveTab('rest')}
              className={`px-2 py-0.5 rounded font-code text-[10px] md:text-xs cursor-pointer transition-colors ${activeTab === 'rest' ? 'bg-on-surface/10 text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              api.sh
            </button>
          </div>
          <div className="p-3 md:p-6 bg-surface-container-highest font-code text-[10px] md:text-sm leading-relaxed overflow-x-auto min-h-[160px] md:min-h-[300px]">
            <pre className="text-on-surface-variant">
              {activeTab === 'sdk' ? (
                <>
                  <span className="text-secondary">import</span> {'{'} RF {'}'} <span className="text-secondary">from</span> <span className="text-surface-tint">'@rf/sdk'</span>{';\n'}
                  <span className="text-secondary">const</span> rf = <span className="text-secondary">new</span> <span className="text-surface-tint">RF</span>({'{'}{'\n'}
                  {'  '}apiKey: process.env.KEY,{'\n'}
                  {'  '}env: <span className="text-surface-tint">'prod'</span>{'\n'}
                  {'}'});{'\n'}
                  <span className="text-secondary">const</span> res = <span className="text-secondary">await</span> rf.<span className="text-surface-tint">analyze</span>({'{'}{'\n'}
                  {'  '}domain: <span className="text-surface-tint">'ent.tech'</span>,{'\n'}
                  {'  '}geo: <span className="text-surface-tint">'us'</span>{'\n'}
                  {'}'});
                </>
              ) : (
                <>
                  <span className="text-surface-tint">curl</span> -X POST https://api.rf.com/v4/v \{'\n'}
                  {'  '}-H <span className="text-secondary">"Auth: Bearer $KEY"</span> \{'\n'}
                  {'  '}-d <span className="text-secondary">'{'{'}</span>{'\n'}
                  <span className="text-secondary">    "domain": "ent.tech",</span>{'\n'}
                  <span className="text-secondary">    "geo": "us"</span>{'\n'}
                  <span className="text-secondary">  {'}'}'</span>
                </>
              )}
            </pre>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function NewsletterSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-0 px-[1%] md:px-12 max-w-[1440px] mx-auto mt-[10px] md:mt-[20px] pb-[10px] md:pb-[20px]"
    >
      <div className="glass-card rounded-2xl md:rounded-[2rem] p-4 md:p-20 border border-outline-variant/30 relative overflow-hidden text-center bg-gradient-to-b from-transparent to-primary-container/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-2 md:space-y-8">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-surface-variant/50 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto border border-outline-variant/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] mb-2 md:mb-6">
            <Zap className="w-5 h-5 md:w-8 md:h-8 text-surface-tint" />
          </div>
          <h2 className="text-lg md:font-h1 text-on-surface leading-tight tracking-tighter uppercase font-bold">
            Protocol Subscription
          </h2>
          <p className="text-on-surface-variant text-[11px] md:font-body-lg">
            Join 4,000+ technical SEOs getting weekly signal. No fluff.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mt-3 md:mt-8 relative" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Work email..." 
              className="flex-1 bg-surface-container-high border border-outline-variant/30 rounded px-3 py-2 text-[12px] text-on-surface focus:outline-none focus:border-surface-tint/50 transition-colors placeholder:text-on-surface-variant/50"
              required
            />
            <button 
              type="submit" 
              className="px-4 py-2 bg-on-surface text-surface text-xs font-bold rounded hover:opacity-90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
            >
              Join
            </button>
          </form>
          <div className="text-on-surface-variant/60 text-[8px] uppercase tracking-widest mt-2 md:mt-4">Zero spam.</div>
        </div>
      </div>
    </motion.section>
  );
}
