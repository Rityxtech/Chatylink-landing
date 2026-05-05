import React, { useState } from 'react';
import { BarChart, Shield, GitMerge, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function GetStarted() {
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-xl md:rounded-2xl glass-card border border-outline-variant/30 shadow-2xl relative z-10 min-h-[500px] md:min-h-[700px]"
        >
          
          {/* Left Side: Value Prop (Desktop Only) */}
          <div className="hidden md:flex flex-col justify-center p-12 lg:p-16 bg-surface-container-lowest/40 border-r border-outline-variant/10">
            <div className="space-y-[10px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-surface-tint font-label-caps uppercase tracking-[0.2em] mb-2 md:mb-[10px] block text-[10px]">Operational Superiority</span>
                <h1 className="font-h1 text-on-surface mb-2 md:mb-[10px] leading-tight text-5xl">Master the <span className="text-surface-tint">SERP</span> Battlefield.</h1>
                <p className="font-body-lg text-on-surface-variant max-w-md">Access institutional-grade SEO intelligence designed for elite practitioners and high-growth agencies.</p>
              </motion.div>
              
              <div className="space-y-[10px]">
                {[
                  { icon: BarChart, title: "Real-time Serp Intelligence", desc: "Instant parsing of search landscape fluctuations with sub-millisecond latency." },
                  { icon: Shield, title: "Elite Data Accuracy", desc: "Verified multi-node validation ensuring 99.9% data integrity across all global locales." },
                  { icon: GitMerge, title: "Protocol Automation", desc: "Automated workflows that execute optimization triggers based on algorithmic shifts." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-variant/20 border border-outline-variant/30 flex items-center justify-center text-surface-tint shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-h3 text-on-surface text-lg mb-1">{item.title}</h3>
                      <p className="font-body-sm text-on-surface-variant text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-[10px] border-t border-outline-variant/20"
              >
                <div className="flex -space-x-3 mb-4">
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="User 1" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" />
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="User 2" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" />
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="User 3" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" />
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-[10px] font-bold text-surface-tint z-10">+2k</div>
                </div>
                <p className="text-body-sm text-on-surface-variant/60 italic text-sm">"The definitive edge for modern strategists."</p>
              </motion.div>
            </div>
          </div>
          
          {/* Right Side: Form */}
          <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-surface/80">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-md mx-auto w-full"
            >
              <div className="mb-2 md:mb-[10px] text-center md:text-left">
                <h2 className="text-xl md:font-h2 text-on-surface mb-2 md:text-3xl uppercase tracking-tight font-bold">Join the Elite</h2>
                <p className="text-[12px] md:font-body-md text-on-surface-variant">Initiate your command center access.</p>
              </div>
              
              <form className="space-y-2 md:space-y-[10px]" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                  <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Full Name</label>
                  <input required disabled={isSubmitting} className="w-full bg-surface-container-high border border-outline-variant/30 rounded md:rounded-lg px-4 py-2.5 md:py-3 text-on-surface focus:outline-none focus:border-surface-tint focus:ring-1 focus:ring-surface-tint transition-all placeholder:text-on-surface-variant/50 text-[12px] md:font-body-sm disabled:opacity-50" placeholder="John Wick" type="text" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Work Email</label>
                  <input required disabled={isSubmitting} className="w-full bg-surface-container-high border border-outline-variant/30 rounded md:rounded-lg px-4 py-2.5 md:py-3 text-on-surface focus:outline-none focus:border-surface-tint focus:ring-1 focus:ring-surface-tint transition-all placeholder:text-on-surface-variant/50 text-[12px] md:font-body-sm disabled:opacity-50" placeholder="commander@agency.io" type="email" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Password</label>
                  <div className="relative">
                    <input 
                      required
                      disabled={isSubmitting}
                      className="w-full bg-surface-container-high border border-outline-variant/30 rounded md:rounded-lg px-4 py-2.5 md:py-3 text-on-surface focus:outline-none focus:border-surface-tint focus:ring-1 focus:ring-surface-tint transition-all placeholder:text-on-surface-variant/50 pr-10 text-[12px] md:font-body-sm disabled:opacity-50" 
                      placeholder="••••••••" 
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
                
                <div className="flex items-center gap-3 py-1 md:py-[10px]">
                  <input required disabled={isSubmitting} className="w-4 h-4 rounded appearance-none border border-outline-variant/30 bg-surface-container checked:bg-surface-tint checked:border-surface-tint focus:outline-none focus:ring-1 focus:ring-surface-tint focus:ring-offset-1 focus:ring-offset-background cursor-pointer relative checked:after:content-[''] checked:after:absolute checked:after:left-[5px] checked:after:top-[2px] checked:after:w-[4px] checked:after:h-[8px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-on-primary checked:after:rotate-45 disabled:opacity-50" id="terms" type="checkbox" />
                  <label className="text-[11px] md:font-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="terms">
                    I acknowledge <a className="text-surface-tint hover:opacity-80 transition-colors" href="#">Protocols</a> and terms.
                  </label>
                </div>
                
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-on-surface text-surface text-[11px] md:font-label-caps py-3 md:py-4 rounded md:rounded-lg uppercase tracking-widest font-black transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2" 
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                      Launching...
                    </>
                  ) : (
                    'Launch Protocol'
                  )}
                </button>
              </form>
              
              <div className="mt-2 pt-[10px] border-t border-outline-variant/20 text-center">
                <p className="text-[12px] md:font-body-md text-on-surface-variant">
                  Have an account? 
                  <Link className="text-surface-tint font-semibold hover:opacity-80 ml-1.5 transition-colors inline-block" to="/login">Login</Link>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
