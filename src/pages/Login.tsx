import React, { useState } from 'react';
import { BarChart, Shield, GitMerge, Eye, EyeOff, Mail, Lock, Zap, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col selection:bg-surface-tint selection:text-on-primary-fixed">
      <main className="flex-grow flex items-center justify-center py-[10px] md:py-[20px] px-[1%] md:px-12 relative overflow-hidden flex-1">
        {/* Abstract background elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-xl md:rounded-2xl glass-card border border-outline-variant/30 shadow-2xl relative z-10 min-h-[500px] md:min-h-[700px]"
        >
          
          {/* Left Side: Value Prop (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex flex-col justify-center p-12 lg:p-16 bg-surface-container-lowest/40 border-r border-outline-variant/10"
          >
            <div className="space-y-[10px]">
              <div>
                <span className="text-surface-tint font-label-caps uppercase tracking-[0.2em] mb-2 md:mb-[10px] block text-[10px]">Operational Superiority</span>
                <h1 className="font-h1 text-on-surface mb-2 md:mb-[10px] leading-tight text-5xl">Master the <span className="text-surface-tint">SERP</span> Battlefield.</h1>
                <p className="font-body-lg text-on-surface-variant max-w-md">Access institutional-grade SEO intelligence designed for elite practitioners and high-growth agencies.</p>
              </div>
              
              <div className="space-y-[10px]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-variant/20 border border-outline-variant/30 flex items-center justify-center text-surface-tint shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                    <BarChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-h3 text-on-surface text-lg mb-1">Real-time Serp Intelligence</h3>
                    <p className="font-body-sm text-on-surface-variant text-sm">Instant parsing of search landscape fluctuations with sub-millisecond latency.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-variant/20 border border-outline-variant/30 flex items-center justify-center text-surface-tint shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-h3 text-on-surface text-lg mb-1">Elite Data Accuracy</h3>
                    <p className="font-body-sm text-on-surface-variant text-sm">Verified multi-node validation ensuring 99.9% data integrity across all global locales.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-variant/20 border border-outline-variant/30 flex items-center justify-center text-surface-tint shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                    <GitMerge className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-h3 text-on-surface text-lg mb-1">Protocol Automation</h3>
                    <p className="font-body-sm text-on-surface-variant text-sm">Automated workflows that execute optimization triggers based on algorithmic shifts.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-outline-variant/20">
                <div className="flex -space-x-3 mb-4">
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="User 1" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" />
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="User 2" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" />
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="User 3" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" />
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-[10px] font-bold text-surface-tint z-10">+2k</div>
                </div>
                <p className="text-body-sm text-on-surface-variant/60 italic text-sm">"The definitive edge for modern strategists."</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side: Login Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-surface/80"
          >
            <div className="max-w-md mx-auto w-full">
              <div className="mb-2 md:mb-[10px] text-center md:text-left">
                <h2 className="text-xl md:font-h2 text-on-surface mb-2 md:text-3xl uppercase tracking-tight font-bold">Welcome Back</h2>
                <p className="text-[12px] md:font-body-md text-on-surface-variant">Secure access to your SEO command center.</p>
              </div>
              
              <form className="space-y-2 md:space-y-[10px]" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                  <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Identity</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-on-surface-variant" />
                    <input disabled={isSubmitting} required className="w-full bg-surface-container-high border border-outline-variant/30 rounded md:rounded-lg pl-10 md:pl-12 pr-4 py-2.5 md:py-3 text-on-surface focus:outline-none focus:border-surface-tint focus:ring-1 focus:ring-surface-tint transition-all placeholder:text-on-surface-variant/50 text-[12px] md:font-body-sm disabled:opacity-50" placeholder="email@agency.tld" type="email" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Encryption</label>
                    <Link className="text-[9px] md:font-label-caps text-surface-tint hover:opacity-80 transition-colors uppercase" to="/forgot-password">Forgot?</Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-on-surface-variant" />
                    <input 
                      disabled={isSubmitting}
                      required
                      className="w-full bg-surface-container-high border border-outline-variant/30 rounded md:rounded-lg pl-10 md:pl-12 pr-10 py-2.5 md:py-3 text-on-surface focus:outline-none focus:border-surface-tint focus:ring-1 focus:ring-surface-tint transition-all placeholder:text-on-surface-variant/50 text-[12px] md:font-body-sm disabled:opacity-50" 
                      placeholder="••••••••••••" 
                      type={showPassword ? 'text' : 'password'} 
                    />
                    <button 
                      disabled={isSubmitting}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer p-1 disabled:opacity-50" 
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />}
                    </button>
                  </div>
                </div>
                
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-on-surface text-surface text-[11px] md:font-label-caps py-3 md:py-4 rounded md:rounded-lg uppercase tracking-widest font-black transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-70 disabled:cursor-not-allowed" 
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                      Initializing...
                    </>
                  ) : (
                    <>
                      Initialize Access
                      <Zap className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                    </>
                  )}
                </button>
              </form>
              
              <div className="relative my-2 md:my-[10px]">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant/30"></div></div>
                <div className="relative flex justify-center text-[10px] uppercase">
                  <span className="bg-surface px-4 text-on-surface-variant font-label-caps tracking-widest">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 md:gap-[10px]">
                <button className="glass-card hover:bg-surface-variant/20 transition-all py-2.5 md:py-3 rounded md:rounded-lg flex items-center justify-center gap-2 md:gap-3 font-label-caps text-on-surface border border-outline-variant/30 cursor-pointer text-[10px] md:text-xs uppercase tracking-widest">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button className="glass-card hover:bg-surface-variant/20 transition-all py-2.5 md:py-3 rounded md:rounded-lg flex items-center justify-center gap-2 md:gap-3 font-label-caps text-on-surface border border-outline-variant/30 cursor-pointer text-[10px] md:text-xs uppercase tracking-widest">
                  <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </button>
              </div>
              
              <div className="mt-2 md:mt-[10px] pt-[10px] md:pt-[10px] border-t border-outline-variant/20 text-center">
                <p className="text-[12px] md:font-body-md text-on-surface-variant">
                  No account? 
                  <Link className="text-surface-tint font-semibold hover:opacity-80 ml-1.5 transition-colors inline-block" to="/get-started">Create one</Link>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* System Status Badge */}
      <div className="fixed bottom-8 right-8 hidden md:block z-50">
        <div className="glass-card px-4 py-2 rounded-full flex items-center gap-3 border border-outline-variant/30">
          <span className="w-2 h-2 rounded-full bg-surface-tint shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse"></span>
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">Network Secure</span>
        </div>
      </div>
    </div>
  );
}
