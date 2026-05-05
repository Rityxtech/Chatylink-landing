import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/30 py-4 md:py-10 px-[1%] md:px-12 w-full mt-auto">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="col-span-2 lg:col-span-1 space-y-2 md:space-y-4">
          <div className="flex items-center justify-between lg:block">
            <div className="text-lg md:text-2xl font-black text-on-surface tracking-tighter uppercase font-space-grotesk">RankFlow</div>
            <div className="flex gap-2 lg:mt-4">
              <a href="#" className="w-7 h-7 md:w-10 md:h-10 glass-card rounded-full flex items-center justify-center text-on-surface-variant hover:text-surface-tint transition-all">
                <Twitter className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a href="#" className="w-7 h-7 md:w-10 md:h-10 glass-card rounded-full flex items-center justify-center text-on-surface-variant hover:text-surface-tint transition-all">
                <Github className="w-3 h-3 md:w-4 md:h-4" />
              </a>
              <a href="#" className="w-7 h-7 md:w-10 md:h-10 glass-card rounded-full flex items-center justify-center text-on-surface-variant hover:text-surface-tint transition-all">
                <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>
          </div>
          <p className="text-on-surface-variant font-body-sm leading-relaxed max-w-sm text-[10px] md:text-sm hidden md:block">
            Elite intelligence for technical SEO strategists.
          </p>
        </div>
        
        <div className="space-y-2">
          <h5 className="text-on-surface font-label-caps uppercase tracking-widest text-[9px] md:text-xs font-bold">Product</h5>
          <nav className="flex flex-col gap-1 md:gap-3">
            <Link className="text-on-surface-variant hover:text-surface-tint transition-colors font-space-grotesk text-[10px] md:text-sm uppercase tracking-widest" to="#">API Docs</Link>
            <Link className="text-on-surface-variant hover:text-surface-tint transition-colors font-space-grotesk text-[10px] md:text-sm uppercase tracking-widest" to="/developers">Devs</Link>
            <Link className="text-on-surface-variant hover:text-surface-tint transition-colors font-space-grotesk text-[10px] md:text-sm uppercase tracking-widest" to="/pricing">Pricing</Link>
          </nav>
        </div>
        
        <div className="space-y-2">
          <h5 className="text-on-surface font-label-caps uppercase tracking-widest text-[9px] md:text-xs font-bold">Company</h5>
          <nav className="flex flex-col gap-1 md:gap-3">
            <Link className="text-on-surface-variant hover:text-surface-tint transition-colors font-space-grotesk text-[10px] md:text-sm uppercase tracking-widest" to="/about">About</Link>
            <Link className="text-on-surface-variant hover:text-surface-tint transition-colors font-space-grotesk text-[10px] md:text-sm uppercase tracking-widest" to="/contact">Contact</Link>
            <Link className="text-on-surface-variant hover:text-surface-tint transition-colors font-space-grotesk text-[10px] md:text-sm uppercase tracking-widest" to="#">Legal</Link>
          </nav>
        </div>
        
        <div className="col-span-2 lg:col-span-1 space-y-2">
          <h5 className="text-on-surface font-label-caps uppercase tracking-widest text-[9px] md:text-xs font-bold">Stay Updated</h5>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 bg-surface-container-high border border-outline-variant/30 rounded px-3 py-1.5 text-[10px] text-on-surface focus:outline-none focus:border-surface-tint transition-colors placeholder:text-on-surface-variant/50"
              required
            />
            <button 
              type="submit" 
              className="bg-primary-container text-on-primary px-3 py-1.5 rounded font-bold hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center shrink-0"
              aria-label="Subscribe"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          <p className="text-on-surface-variant/60 text-[8px] uppercase tracking-widest hidden md:block">Signal only. No fluff.</p>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto mt-4 pt-4 border-t border-outline-variant/30 flex justify-center md:justify-between items-center">
        <p className="font-space-grotesk text-[8px] md:text-xs uppercase tracking-[0.2em] text-on-surface-variant/60">
          © {new Date().getFullYear()} RankFlow. Security Protocol Active.
        </p>
      </div>
    </footer>
  );
}
