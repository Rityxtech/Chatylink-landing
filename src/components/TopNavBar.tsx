import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

export default function TopNavBar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[1%] md:px-8 h-14 md:h-20 max-w-full mx-auto bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_0_20px_rgba(0,240,255,0.05)] font-space-grotesk tracking-tight">
      <div className="flex items-center gap-12 w-full max-w-screen-2xl mx-auto justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-on-surface uppercase">RankFlow</Link>
          <div className="hidden lg:flex gap-8">
            <Link className={`transition-colors ${location.pathname === '/' ? 'text-surface-tint border-b-2 border-surface-tint pb-1' : 'text-on-surface-variant hover:text-on-surface'}`} to="/">Features</Link>
            <Link className={`transition-colors ${location.pathname === '/pricing' ? 'text-surface-tint border-b-2 border-surface-tint pb-1' : 'text-on-surface-variant hover:text-on-surface'}`} to="/pricing">Pricing</Link>
            <Link className={`transition-colors ${location.pathname === '/developers' ? 'text-surface-tint border-b-2 border-surface-tint pb-1' : 'text-on-surface-variant hover:text-on-surface'}`} to="/developers">Developers</Link>
            <Link className={`transition-colors ${location.pathname === '/about' ? 'text-surface-tint border-b-2 border-surface-tint pb-1' : 'text-on-surface-variant hover:text-on-surface'}`} to="/about">About</Link>
            <Link className={`transition-colors ${location.pathname === '/contact' ? 'text-surface-tint border-b-2 border-surface-tint pb-1' : 'text-on-surface-variant hover:text-on-surface'}`} to="/contact">Contact</Link>
            <Link className={`transition-colors ${location.pathname === '/ai-radar' ? 'text-surface-tint border-b-2 border-surface-tint pb-1' : 'text-on-surface-variant hover:text-on-surface'}`} to="/ai-radar">AI Radar</Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-on-surface-variant hover:text-on-surface transition-colors rounded-full hover:bg-surface-variant/50 cursor-pointer mr-2"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/login" className="px-5 py-2 text-on-surface-variant hover:text-on-surface transition-colors font-medium cursor-pointer">Login</Link>
          <Link to="/get-started" className="px-5 py-2 bg-primary-container text-on-primary font-bold rounded hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all active:scale-95 cursor-pointer text-sm block">Get Started</Link>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-on-surface-variant hover:text-on-surface transition-colors rounded-full cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-on-surface cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 md:top-20 left-0 w-full bg-surface border-b border-outline-variant/30 lg:hidden flex flex-col p-2 shadow-xl">
          <nav className="flex flex-col gap-2 mb-[10px]">
            <Link onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${location.pathname === '/' ? 'text-surface-tint' : 'text-on-surface-variant'}`} to="/">Features</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${location.pathname === '/pricing' ? 'text-surface-tint' : 'text-on-surface-variant'}`} to="/pricing">Pricing</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${location.pathname === '/developers' ? 'text-surface-tint' : 'text-on-surface-variant'}`} to="/developers">Developers</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${location.pathname === '/about' ? 'text-surface-tint' : 'text-on-surface-variant'}`} to="/about">About</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${location.pathname === '/contact' ? 'text-surface-tint' : 'text-on-surface-variant'}`} to="/contact">Contact</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${location.pathname === '/ai-radar' ? 'text-surface-tint' : 'text-on-surface-variant'}`} to="/ai-radar">AI Radar</Link>
          </nav>
          <div className="flex flex-col gap-2">
            <Link onClick={() => setMobileMenuOpen(false)} to="/login" className="w-full text-center px-5 py-3 border border-outline-variant/30 text-on-surface rounded font-medium cursor-pointer">Login</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/get-started" className="w-full text-center px-5 py-3 bg-primary-container text-on-primary font-bold rounded cursor-pointer">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}

