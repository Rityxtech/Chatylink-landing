import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';
import { useWaitlist } from '../lib/WaitlistContext';

export default function TopNavBar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openWaitlist } = useWaitlist();

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[10px] md:px-8 h-14 md:h-20 max-w-full mx-auto backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_0_20px_rgba(59,130,246,0.05)] font-space-grotesk tracking-tight" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="flex items-center gap-12 w-full max-w-screen-2xl mx-auto justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2.5 text-xl md:text-2xl font-bold tracking-tighter text-on-surface uppercase group">
            <img 
              src="/logo.png" 
              alt="Chatylink logo" 
              className="w-8 h-8 md:w-9 md:h-9 object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform" 
            />
            <span>Chatylink</span>
          </Link>
          <div className="hidden lg:flex gap-8">
            <Link className={`transition-colors ${location.pathname === '/' ? 'text-surface-tint border-b-2 border-surface-tint pb-1' : 'text-on-surface-variant hover:text-on-surface'}`} to="/">Features</Link>
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
          <button onClick={openWaitlist} className="px-5 py-2 bg-primary-container text-on-primary font-bold rounded hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all active:scale-95 cursor-pointer text-sm block">Get Started</button>
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

      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full border-b border-outline-variant/30 lg:hidden flex flex-col p-[10px] shadow-xl" style={{ backgroundColor: 'var(--surface)' }}>
          <nav className="flex flex-col gap-2 mb-[10px]">
            <Link onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${location.pathname === '/' ? 'text-surface-tint' : 'text-on-surface-variant'}`} to="/">Features</Link>
          </nav>
          <div className="flex flex-col gap-2">
            <button onClick={() => { setMobileMenuOpen(false); openWaitlist(); }} className="w-full text-center px-5 py-3 bg-primary-container text-on-primary font-bold rounded cursor-pointer">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
