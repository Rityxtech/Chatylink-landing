import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare, MessagesSquare, Users, Bot, Workflow, CreditCard, Megaphone,
  CheckCircle2, ArrowUpRight, Database, BarChart3, Zap, Shield, Webhook,
  Check, X, TrendingUp, Bell, Sparkles, Code, Terminal, Server, FastForward, CheckCircle,
  Timer, Gauge, Brain, Smartphone, ChevronDown, Globe, Building2, Send, Plug
} from 'lucide-react';
import { useWaitlist } from '../lib/WaitlistContext';

export default function Home() {
  const { openWaitlist } = useWaitlist();

  return (
    <main className="overflow-x-hidden w-full relative z-10 pt-[80px] md:pt-[120px]">
      <HeroSection onGetStarted={openWaitlist} />
      <TrustedBySection />
      <SolutionSection onGetStarted={openWaitlist} />
      <ProblemSection />
      <MeetRankflowSection />
      <DeveloperSection />
      <PricingSection onGetStarted={openWaitlist} />
    </main>
  );
}

function HeroSection({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative px-[10px] md:px-12 max-w-[1440px] mx-auto overflow-visible -mt-5 md:mt-0 section-hero">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Center Text Block */}
        <div className="text-center w-full relative gap-sub md:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-h1 text-on-surface leading-[1.15] tracking-tight text-3xl md:text-5xl lg:text-6xl font-black max-w-2xl lg:px-4 xl:px-0 mx-auto gap-sub md:mb-4">
              Manage Every <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Conversation</span> with Chatylink
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto gap-sub md:mb-8 text-[13px] md:text-base leading-snug md:leading-relaxed px-2">
              Connect WhatsApp, Telegram, Facebook Messenger, Instagram and Website Chat into one AI-powered inbox. Automate conversations, build smart chatbots, accept payments, and grow your business. All from a single dashboard.
            </p>

            <div className="max-w-xl mx-auto relative z-20 flex flex-row gap-2 sm:gap-3 justify-center mt-1 md:mt-0">
              <button onClick={onGetStarted} className="bg-primary-container text-on-primary-container px-5 py-2.5 md:px-8 md:py-3.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all hover:brightness-110 flex justify-center items-center gap-2 shadow-lg shadow-primary-container/20">
                Start Free <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
              <button className="glass-card text-on-surface px-5 py-2.5 md:px-8 md:py-3.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all hover:bg-surface-container flex justify-center items-center gap-2 border border-outline-variant/30">
                Book a Demo
              </button>
            </div>
          </motion.div>

          {/* Mobile: Small floating stat circles above title */}
          <div className="flex lg:hidden justify-center gap-6 mt-[6px] mb-3">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-center justify-center p-[1px] shadow-lg rounded-full w-12 h-12 transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer rainbow-border">
              <div className="flex flex-col items-center justify-center w-full h-full rounded-full bg-surface-container-lowest">
                <MessageSquare className="w-4 h-4 text-primary" />
                <p className="font-black text-[9px] text-on-surface leading-none mt-0.5">12K+</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center justify-center p-[1px] shadow-lg rounded-full w-12 h-12 transform rotate-6 hover:rotate-0 transition-transform cursor-pointer rainbow-border">
              <div className="flex flex-col items-center justify-center w-full h-full rounded-full bg-surface-container-lowest">
                <Timer className="w-4 h-4 text-blue-400" />
                <p className="font-black text-[9px] text-on-surface leading-none mt-0.5">1.2s</p>
              </div>
            </motion.div>
          </div>

          {/* Left Side: Floating Stats Card - Messages Sent */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex absolute top-4 left-4 flex-col items-start p-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-xl w-56 transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer z-30 rainbow-border">
            <div className="flex flex-col items-start w-full h-full rounded-[10px] bg-surface-container-lowest p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-black text-2xl text-on-surface">12K+</p>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-primary">Messages Today</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-2">
                <span className="text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded shadow-sm flex items-center gap-1">
                  Live <ChevronDown className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Left Side: Floating Stats Card - Response Time */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden xl:flex absolute top-36 left-12 flex-col items-start p-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-xl w-56 transform rotate-2 hover:rotate-0 transition-transform cursor-pointer z-30 rainbow-border">
            <div className="flex flex-col items-start w-full h-full rounded-[10px] bg-surface-container-lowest p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center text-blue-400">
                  <Timer className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-black text-2xl text-on-surface">1.2s</p>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-primary">Avg Response</p>
                  <span className="text-[10px] text-on-surface-variant mt-1 flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded w-max shadow-sm">
                    AI-Powered <ChevronDown className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Live Chat Dashboard */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex absolute top-4 -right-8 xl:-right-16 z-30 w-72 flex-col gap-4">
            {/* Live Inbox Card */}
            <div className="shadow-2xl rounded-xl p-5 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 cursor-default border border-outline-variant" style={{ backgroundColor: 'var(--surface)' }}>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/60 shadow-[0_0_12px_3px_rgba(59,130,246,0.5)] animate-[scanLine_3s_ease-in-out_infinite] z-20"></div>
              <div className="flex justify-between items-center mb-5 relative z-10">
                <h3 className="font-bold text-sm text-on-surface flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary animate-pulse" /> Live Inbox
                </h3>
                <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-bold">ACTIVE</span>
              </div>

              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-primary/5 border-[4px] border-primary/20">
                  <div className="absolute w-16 h-16 rounded-full border-[4px] border-transparent border-t-primary animate-spin"></div>
                  <span className="text-lg font-black text-on-surface">98%</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-secondary">Customer Satisfaction</p>
                  <p className="text-[11px] text-blue-400 font-bold flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" /> +14% this week
                  </p>
                </div>
              </div>

              {/* Live Conversations */}
              <div className="space-y-2 relative z-10">
                {['WhatsApp - Order inquiry', 'Instagram - Support ticket', 'Website - Pricing FAQ'].map((kw, i) => (
                  <div key={i} className="flex justify-between items-center bg-surface-container/50 p-2.5 rounded-lg border border-outline-variant/30">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${i < 2 ? 'bg-blue-400' : 'bg-amber-400'} animate-pulse`}></span>
                      <span className="text-[11px] font-bold text-on-surface">{kw}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] font-black text-primary">{['AI', 'AI', 'Human'][i]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Layout/Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-6 w-full max-w-5xl mx-auto z-20">
          {/* Channel Performance */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="shadow-2xl rounded-xl p-4 md:p-6 relative hover:-translate-y-1 transition-transform mt-[5px] md:mt-0 border border-outline-variant" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-sub md:mb-5">
              <h3 className="font-bold text-sm text-on-surface">Channel Performance</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[10px] uppercase font-bold text-on-surface-variant">
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-rose-400"></div> WhatsApp</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-sky-400"></div> Telegram</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500"></div> Messenger</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-400"></div> Instagram</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-primary"></div> Web</span>
              </div>
            </div>
            <div className="flex justify-around items-center pt-2">
              <RadialChart value={81} label="Response Rate" color="rgba(251, 113, 133, 1)" />
              <RadialChart value={94} label="Resolution" color="rgba(59, 130, 246, 1)" />
              <RadialChart value={72} label="AI Handled" color="var(--primary)" />
            </div>
          </motion.div>

          {/* Conversation Flow Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="shadow-2xl rounded-xl p-4 md:p-6 relative flex flex-col justify-between hover:-translate-y-1 transition-transform border border-outline-variant" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex justify-between items-start gap-sub md:mb-4">
              <div>
                <h3 className="font-bold text-sm text-on-surface">Conversation Volume</h3>
                <p className="text-[10px] text-on-surface-variant mt-1">Messages over 7 days</p>
              </div>
              <button className="flex items-center gap-2 border border-primary/30 text-primary px-3 py-1.5 rounded-full text-xs font-bold hover:bg-primary/10 transition-colors">
                Export
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
          <circle cx="50%" cy="50%" r={radius} fill="none" stroke={color} strokeWidth="4" strokeDasharray={circ} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="animate-spin" style={{ animationDuration: '3s', transformOrigin: 'center', transformBox: 'fill-box' }} />
        </svg>
        <span className="absolute text-xs font-black text-on-surface">{value}%</span>
      </div>
      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{label}</span>
    </div>
  );
}

function TrustedBySection() {
  const channels = [
    { name: "WhatsApp", color: "#25D366", svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
    { name: "Telegram", color: "#0088cc", svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.387 4.025-1.627 4.476-1.635z"/></svg> },
    { name: "Messenger", color: "#006AFF", svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.653V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.193l-3.056-3.25-5.963 3.25L10.732 8l3.131 3.25L19.752 8l-6.561 6.193z"/></svg> },
    { name: "Instagram", color: "#E1306C", svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
    { name: "Website Chat", color: "#3b82f6", svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/><circle cx="12" cy="12" r="1"/></svg> },
  ];

  return (
    <section className="px-[10px] md:px-6 relative overflow-hidden z-20 section-connects">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-[10px] md:text-[11px] font-bold text-on-surface-variant uppercase tracking-widest gap-sub md:mb-6">
          Connects With
        </p>
        {/* Desktop: brand-colored text */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-10 transition-all duration-500">
          {channels.map((ch, i) => (
            <span key={i} className="font-black text-xl italic transition-all duration-300 hover:scale-110 cursor-default" style={{ color: ch.color }}>
              {ch.name}
            </span>
          ))}
        </div>
        {/* Mobile: styled pill badges with brand colors */}
        <div className="flex md:hidden flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 w-full">
            {channels.slice(0, 4).map((ch, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-300 hover:scale-105"
                style={{
                  color: ch.color,
                  borderColor: `${ch.color}40`,
                  backgroundColor: `${ch.color}15`,
                  animation: `fadeInUp 0.4s ease-out ${i * 0.08}s both`
                }}
              >
                <span style={{ color: ch.color }}>{ch.svg}</span>
                {ch.name}
              </span>
            ))}
          </div>
          <span
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-300 hover:scale-105"
            style={{
              color: channels[4].color,
              borderColor: `${channels[4].color}40`,
              backgroundColor: `${channels[4].color}15`,
              animation: `fadeInUp 0.4s ease-out ${4 * 0.08}s both`
            }}
          >
            <span style={{ color: channels[4].color }}>{channels[4].svg}</span>
            {channels[4].name}
          </span>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function SolutionSection({ onGetStarted }: { onGetStarted: () => void }) {
  const steps = [
    { num: '01', icon: Plug, title: 'Connect Your Channels', desc: 'Link WhatsApp, Telegram, Messenger, Instagram, and Website Chat in minutes. No coding required — just authenticate and go live.', color: '#3b82f6', bg: 'rgba(59,130,246,0.10)' },
    { num: '02', icon: Bot, title: 'Configure Your AI', desc: 'Train your AI assistant with your FAQs, products, and business rules. Set up auto-replies and smart handoff to human agents.', color: '#8b5cf6', bg: 'rgba(139,92,246,0.10)' },
    { num: '03', icon: Workflow, title: 'Build Workflows', desc: 'Use the drag-and-drop Flow Builder to create custom conversation paths, triggers, and automated actions for any scenario.', color: '#06b6d4', bg: 'rgba(6,182,212,0.10)' },
    { num: '04', icon: Send, title: 'Launch & Engage', desc: 'Start conversations, send broadcasts, accept payments, and track performance — all from one unified dashboard.', color: '#22c55e', bg: 'rgba(34,197,94,0.10)' },
  ];

  return (
    <section className="px-[10px] md:px-6 relative z-20 section-solution">
      <div className="max-w-7xl mx-auto">
        <div className="text-center gap-sub md:mb-10">
          <span className="text-xs font-label-caps text-primary uppercase tracking-[0.2em] mb-2.5 md:mb-3 block">Simple Process</span>
          <h2 className="font-h2 text-on-surface mb-4">How It Works</h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">Get up and running in minutes. No technical expertise needed — just follow these four simple steps.</p>
        </div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 via-cyan-500/30 to-green-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-5 shadow-lg border border-outline-variant" style={{ backgroundColor: 'var(--surface)', border: `2px solid ${s.color}` }}>
                    <Icon className="w-7 h-7 md:w-9 md:h-9" style={{ color: s.color }} />
                    <span className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black text-white shadow-md" style={{ backgroundColor: s.color }}>{s.num}</span>
                  </div>

                  {/* Content card */}
                  <div className="rounded-2xl p-4 md:p-5 border border-outline-variant shadow-lg hover:shadow-xl transition-all w-full" style={{ backgroundColor: 'var(--surface)' }}>
                    <h3 className="text-sm md:text-base font-black text-on-surface mb-2">{s.title}</h3>
                    <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <button onClick={onGetStarted} className="bg-primary text-on-primary px-6 py-3 md:px-8 md:py-3.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2">
            Get Started Now <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      title: "Scattered Conversations Across Channels",
      desc: "Customers message you on WhatsApp, Instagram, Messenger, and your website, but managing each separately means missed messages, slow responses, and frustrated customers.",
      points: ["Unified inbox for all messaging channels", "No more switching between apps", "Complete conversation history in one place"],
      btn: "Unify My Inbox",
      color: "var(--primary)"
    },
    {
      title: "Slow Response Times Hurt Customer Trust",
      desc: "When customers wait hours for a reply, they take their business elsewhere. Manual responses don't scale as your customer base grows.",
      points: ["AI-powered instant auto-replies", "Smart routing to the right team member", "Typing indicators & read receipts across channels"],
      btn: "Speed Up Responses",
      color: "var(--primary-container)"
    },
    {
      title: "No Visibility Into Customer Data",
      desc: "Without analytics, you can't measure response times, customer satisfaction, or team performance, making it impossible to improve.",
      points: ["Real-time analytics dashboard", "Response time & resolution tracking", "Customer satisfaction scoring & insights"],
      btn: "Get Insights",
      color: "var(--secondary-container)"
    }
  ];

  return (
    <section className="px-[10px] md:px-6 relative z-20 section-challenge">
      <div className="max-w-7xl mx-auto">
        <div className="text-center gap-sub md:mb-16">
          <span className="text-xs font-label-caps text-primary uppercase tracking-[0.2em] mb-2.5 md:mb-3 block">The Challenge</span>
          <h2 className="font-h2 text-on-surface mb-4">Customer Communication<br className="hidden sm:block" /> Problems Every Business Faces</h2>
        </div>

        <div className="space-y-2 md:space-y-8">
          {problems.map((p, i) => (
            <div key={i} className="glass-card shadow-lg rounded-xl md:rounded-2xl overflow-hidden border border-outline-variant/30 group hover:-translate-y-1 transition-transform relative">
              <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 opacity-20 pointer-events-none">
                <svg viewBox="0 0 52 52" fill="none"><path d="M4 48 C4 48 4 4 48 4" stroke={p.color} strokeWidth="6" strokeLinecap="round" /><path d="M18 48 C18 48 18 18 48 18" stroke={p.color} strokeWidth="4" strokeLinecap="round" /></svg>
              </div>
              <div className="flex flex-col lg:flex-row gap-0">
                <div className="lg:w-[45%] p-3 md:p-12 flex flex-col justify-center">
                  <h3 className="text-base md:text-3xl font-black text-on-surface gap-sub md:mb-4">{p.title}</h3>
                  <p className="text-on-surface-variant text-xs md:text-sm font-body-sm gap-sub md:mb-6 leading-snug md:leading-relaxed">{p.desc}</p>
                  <ul className="space-y-1.5 gap-sub md:mb-8 md:space-y-3">
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm font-semibold text-on-surface">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `color-mix(in srgb, ${p.color} 20%, transparent)` }}>
                          <Check className="w-3 h-3 md:w-3.5 md:h-3.5" style={{ color: p.color }} />
                        </div>
                        <span className="mt-0.5">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="self-start text-on-primary font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm hover:brightness-110 transition-all flex items-center gap-2" style={{ backgroundColor: p.color, color: 'var(--surface-container-lowest)' }}>
                    {p.btn} <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </div>
                <div className="lg:w-[55%] bg-surface-container-low border-t lg:border-t-0 lg:border-l border-outline-variant/30 p-2.5 md:p-10 flex items-center justify-center min-h-[120px] md:min-h-[300px]">
                  <div className="glass-card p-3 md:p-6 rounded-xl md:rounded-2xl border border-outline-variant/30 w-full max-w-md shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-5" style={{ backgroundImage: `linear-gradient(to bottom right, ${p.color}, transparent)` }}></div>
                    <div className="relative z-10 space-y-2.5 md:space-y-4">
                      {/* Fake lines to represent the abstract UI mockup */}
                      <div className="h-3 w-24 md:h-4 md:w-32 rounded bg-outline-variant/40 mb-3 md:mb-6"></div>
                      <div className="space-y-2 md:space-y-3">
                        {[1, 2, 3].map(bar => (
                          <div key={bar} className="flex items-center gap-2 md:gap-4">
                            <div className="h-6 md:h-8 flex-1 rounded bg-surface-container border border-outline-variant/20 overflow-hidden">
                              <div className="h-full bg-gradient-to-r" style={{ width: `${Math.random() * 60 + 30}%`, backgroundImage: `linear-gradient(to right, ${p.color}, transparent)` }}></div>
                            </div>
                            <div className="w-9 h-6 md:w-12 md:h-8 rounded bg-surface-container border border-outline-variant/20 flex items-center justify-center text-[9px] md:text-xs font-mono text-on-surface">{(Math.random() * 100).toFixed(0)}</div>
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
    { i: Bot, t: "AI Assistant", d: "AI-powered auto-replies that handle routine questions instantly, 24/7." },
    { i: MessagesSquare, t: "Omnichannel Inbox", d: "WhatsApp, Telegram, Messenger, Instagram & Website Chat in one inbox." },
    { i: Workflow, t: "Visual Flow Builder", d: "Build powerful chatbot workflows with a drag-and-drop builder — no code needed." },
    { i: Megaphone, t: "Broadcast Campaigns", d: "Send targeted messages to thousands of customers across channels at once." },
    { i: CreditCard, t: "Payment Automation", d: "Accept payments directly in conversations via Stripe, Flutterwave & Paystack." },
    { i: BarChart3, t: "Smart Analytics", d: "Track messages, revenue, response time & customer satisfaction in real-time." },
    { i: Users, t: "Team Collaboration", d: "Multiple team members with roles, permissions & shared conversation management." },
    { i: Building2, t: "Multi-Business", d: "Manage multiple business accounts from a single dashboard, perfect for agencies." },
    { i: Smartphone, t: "Mobile Responsive", d: "Full platform access on any device — manage conversations on the go." }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let direction = 1;
    let started = false;

    const animate = () => {
      if (!started) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll > 0) {
          started = true;
        }
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (!pausedRef.current) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 1) {
          direction = -1;
        } else if (container.scrollLeft <= 1) {
          direction = 1;
        }
        container.scrollLeft += direction * 1.5;
      }
      animationId = requestAnimationFrame(animate);
    };

    const startTimer = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 500);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="px-[10px] md:px-6 relative section-pad md:py-16 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center gap-sub md:mb-16 solution-section-top">
          <span className="text-xs font-label-caps text-primary uppercase tracking-[0.2em] mb-2.5 md:mb-3 block">The Solution</span>
          <h2 className="font-h2 text-on-surface mb-4 solution-title-mobile">Meet Chatylink &mdash; Your<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">AI Customer Engagement Platform</span></h2>
          <p className="text-on-surface-variant font-body-md max-w-xl mx-auto">One platform to connect, automate, and grow. Built for businesses who treat customer communication as a competitive advantage.</p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 overflow-x-auto sm:overflow-visible -mx-[10px] px-[10px] sm:mx-0 sm:px-0 pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'none' }}
        >
          {feats.map((f, i) => (
            <div key={i} className="p-5 sm:p-5 md:p-8 rounded-2xl sm:rounded-3xl border border-outline-variant hover:-translate-y-2 transition-transform group shrink-0 w-[72%] sm:w-auto flex flex-col sm:flex-col items-center text-center sm:items-start sm:text-left gap-3 sm:gap-0 min-h-[180px] sm:min-h-0 shadow-md sm:shadow-none" style={{ backgroundColor: 'var(--surface)' }}>
              <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center sm:gap-sub sm:md:mb-6 group-hover:scale-110 transition-transform shrink-0" style={{ backgroundColor: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.20)' }}>
                <f.i className="w-6 h-6 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center w-full">
                <h4 className="font-black text-on-surface text-sm sm:text-lg sm:gap-sub sm:md:mb-3 leading-tight">{f.t}</h4>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none mt-1.5">{f.d}</p>
              </div>
              <div className="w-full flex items-center gap-1.5 mt-auto pt-3 border-t border-outline-variant/15 sm:hidden">
                <span className="text-[10px] font-bold text-primary">Learn more</span>
                <ArrowUpRight className="w-3 h-3 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeveloperSection() {
  return (
    <section className="px-[10px] md:px-6 section-pad md:py-20 relative z-20 bg-surface-container-lowest border-y border-outline-variant/30 mt-3 md:mt-16 overflow-hidden">
      {/* Ambient Grid */}
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-[0.03]"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-3 md:gap-16 relative z-10">
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 py-1 md:px-4 md:py-1.5 gap-sub md:mb-6">
            <Code className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-primary uppercase">Built for Engineering Teams</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-black gap-sub md:mb-6 leading-tight text-on-surface">
            Built for Developers,<br />
            <span className="text-on-surface-variant">by Developers</span>
          </h2>
          <p className="text-on-surface-variant text-xs md:text-base leading-snug md:leading-relaxed gap-sub md:mb-10 max-w-lg">
            Automate conversations, integrate with your stack, and build custom workflows with our developer-friendly API and webhooks.
          </p>

          <div className="space-y-1.5 md:space-y-4">
            {[
              { icon: Zap, title: "Real-time Webhooks", desc: "Get instant notifications for every message, event, and customer action." },
              { icon: Webhook, title: "REST API", desc: "Full programmatic control over conversations, contacts, and campaigns." },
              { icon: FastForward, title: "Quick Start", desc: "Send your first message in under 5 minutes with our SDKs." }
            ].map((f, i) => (
              <div key={i} className="glass-card p-2.5 md:p-4 rounded-xl md:rounded-2xl flex gap-2.5 md:gap-4 items-start border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-on-surface text-xs md:text-base mb-0.5 md:mb-1">{f.title}</h5>
                  <p className="text-[11px] md:text-sm text-on-surface-variant leading-snug md:leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Window */}
        <div className="flex-1 w-full max-w-xl">
          <div className="rounded-xl md:rounded-2xl border border-outline-variant/30 bg-[#0d0d0f] shadow-2xl overflow-hidden p-1.5 md:p-2">
            <div className="bg-[#151518] border border-white/5 rounded-lg md:rounded-xl p-3 md:p-6 font-mono text-[11px] md:text-sm overflow-x-auto">
              <div className="flex gap-2 gap-sub md:mb-6">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80"></div>
              </div>
              <p className="text-blue-400 mb-1.5 md:mb-2">curl <span className="text-on-surface-variant">-X POST</span> https://api.chatylink.com/v1/messages \</p>
              <p className="text-on-surface-variant pl-3 md:pl-4 mb-1.5 md:mb-2">-H <span className="text-blue-400">"Authorization: Bearer $API_KEY"</span> \</p>
              <p className="text-on-surface-variant pl-3 md:pl-4 mb-4 md:mb-6">-d <span className="text-blue-400">'{"{"}"channel": "whatsapp", "to": "+1234567890", "text": "Hello!"{"}"}'</span></p>

              <p className="text-slate-500 mb-1.5 md:mb-2">// Response</p>
              <p className="text-on-surface-variant">{"{"}</p>
              <p className="text-on-surface-variant pl-3 md:pl-4">"status": <span className="text-blue-400">"sent"</span>,</p>
              <p className="text-on-surface-variant pl-3 md:pl-4">"message_id": <span className="text-orange-400">"msg_8x2k9f"</span>,</p>
              <p className="text-on-surface-variant pl-3 md:pl-4">"timestamp": <span className="text-orange-400">1718927400</span></p>
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

function PricingSection({ onGetStarted }: { onGetStarted: () => void }) {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly');

  const plans = [
    {
      name: "Free", desc: "Get started with essential customer engagement tools.",
      priceMz: "0", priceYz: "0",
      feats: ["1 Business Account", "1 Connected Channel", "1 Team Member", "AI Assistant", "Up to 500 Chats/month", "100 Usage Credits/month", "Basic Analytics"],
      xfeats: ["Broadcast Campaigns", "Payment Automation", "API Access"],
      featured: false,
      bg: "var(--surface)",
      border: "rgba(34,197,94,0.30)",
      text: "var(--on-surface)",
      subtext: "var(--on-surface-variant)",
      icon: "#22c55e",
      xicon: "#ef4444"
    },
    {
      name: "Starter", desc: "Scale your customer communication with automation.",
      priceMz: "15", priceYz: "12",
      feats: ["Up to 2 Business Accounts", "Unlimited Channels", "3 Team Members", "AI Assistant", "Unlimited Chats", "2,000 Usage Credits/month", "Broadcast Campaigns", "Payment Automation", "Standard Analytics"],
      xfeats: ["API Access"],
      featured: true,
      bg: "rgba(59,130,246,0.08)",
      border: "rgba(59,130,246,0.25)",
      text: "var(--on-surface)",
      subtext: "var(--on-surface-variant)",
      icon: "#22c55e",
      xicon: "#ef4444"
    },
    {
      name: "Professional", desc: "Advanced features for growing teams and agencies.",
      priceMz: "39", priceYz: "31",
      feats: ["Up to 5 Business Accounts", "Unlimited Channels", "10 Team Members", "AI Assistant", "Unlimited Chats", "20,000 Usage Credits/month", "Broadcast Campaigns", "Payment Automation", "API Access", "Advanced Analytics"],
      xfeats: [],
      featured: false,
      bg: "rgba(168,85,247,0.08)",
      border: "rgba(168,85,247,0.25)",
      text: "var(--on-surface)",
      subtext: "var(--on-surface-variant)",
      icon: "#22c55e",
      xicon: "#ef4444"
    },
    {
      name: "Enterprise", desc: "Full-scale engagement for large organizations.",
      priceMz: "99", priceYz: "79",
      feats: ["Unlimited Business Accounts", "Unlimited Channels", "Unlimited Team Members", "AI Assistant", "Unlimited Chats", "100,000 Usage Credits/month", "Broadcast Campaigns", "Payment Automation", "API Access", "Advanced Analytics", "Priority Support"],
      xfeats: [],
      featured: false,
      bg: "rgba(0,0,0,0.85)",
      border: "rgba(245,158,11,0.25)",
      text: "#ffffff",
      subtext: "rgba(255,255,255,0.65)",
      icon: "#22c55e",
      xicon: "#ef4444"
    }
  ];

  return (
    <section className="px-[10px] md:px-6 relative z-20 section-pricing md:pt-16 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center gap-sub md:mb-8 pricing-section-top">
          <span className="text-xs font-label-caps text-primary uppercase tracking-[0.2em] mb-3 block pricing-label-mobile">Plans & Pricing</span>
          <h2 className="font-h2 text-on-surface md:mb-6 pricing-title-mobile">Compare The Plans</h2>

          <div className="flex items-center justify-center gap-4 gap-sub md:mb-4">
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

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-5 overflow-x-auto snap-x snap-mandatory md:overflow-visible -mx-[10px] px-[10px] md:mx-0 md:px-0 pt-2 md:pt-0 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {plans.map((p, i) => (
            <div key={i} className={`p-3.5 md:p-5 rounded-2xl md:rounded-2xl border flex flex-col relative snap-center shrink-0 w-[78%] md:w-auto transition-all ${p.featured ? 'ring-1 ring-primary/50 shadow-[0_0_40px_rgba(59,130,246,0.15)]' : 'hover:scale-[1.02]'}`} style={{ backgroundColor: p.bg, borderColor: p.border }}>
              {p.featured && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30 bg-primary text-on-primary text-[9px] md:text-[10px] font-bold px-2.5 md:px-3 py-0.5 md:py-1 rounded-full uppercase tracking-wider">Most Popular</div>}
              <h3 className="text-lg md:text-xl font-black gap-sub md:mb-1" style={{ color: p.text }}>{p.name}</h3>
              <p className="text-xs md:text-sm gap-sub md:mb-4 min-h-[32px] md:min-h-[36px] leading-snug" style={{ color: p.subtext }}>{p.desc}</p>

              <div className="gap-sub md:mb-5">
                <span className="text-2xl md:text-3xl font-black" style={{ color: p.text }}>${billing === 'monthly' ? p.priceMz : p.priceYz}</span>
                <span className="text-xs md:text-sm ml-1" style={{ color: p.subtext }}>/mo</span>
                {billing === 'yearly' && <p className="text-[10px] md:text-xs mt-1 font-medium" style={{ color: p.icon }}>Billed annually</p>}
              </div>

              <div className="space-y-1.5 gap-sub md:mb-5 md:space-y-2 flex-1">
                {p.feats.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: p.icon }} />
                    <span className="text-xs md:text-sm font-medium" style={{ color: p.text }}>{f}</span>
                  </div>
                ))}
                {p.xfeats.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 md:gap-3 opacity-60">
                    <X className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: p.xicon }} />
                    <span className="text-xs md:text-sm font-medium" style={{ color: p.subtext }}>{f}</span>
                  </div>
                ))}
              </div>

              <button onClick={onGetStarted} className="w-full py-2.5 md:py-2.5 rounded-lg md:rounded-lg font-bold text-xs md:text-sm transition-all bg-primary text-on-primary hover:brightness-110">
                Start Free
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
