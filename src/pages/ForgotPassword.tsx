import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, ShieldCheck, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ForgotPassword() {
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
            <div className="mb-[10px]">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-surface-tint rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-5 h-5 border-2 border-on-primary rounded-sm rotate-45"></div>
                </div>
                <span className="font-h3 text-on-surface text-2xl tracking-tighter uppercase font-black">RankFlow</span>
              </Link>
            </div>
            
            <div className="space-y-[10px]">
              <div className="glass-card p-6 border-l-4 border-l-surface-tint">
                <ShieldCheck className="w-8 h-8 text-surface-tint mb-2 md:mb-[10px]" />
                <h3 className="font-h3 text-on-surface mb-2">Protocol Recovery</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Lost access to your command center? Initiate the recovery sequence to regain encryption keys.
                </p>
              </div>
              
              <div className="pl-6 space-y-[10px]">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-surface-tint mt-2"></div>
                  <p className="text-on-surface-variant text-sm">Secure identity verification via encrypted link.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-outline mt-2"></div>
                  <p className="text-on-surface-variant text-sm">Automated session termination on all devices.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side: Recover Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-surface/80"
          >
            <div className="max-w-md mx-auto w-full">
              <div className="mb-2 md:mb-[10px] text-center md:text-left">
                <h2 className="text-xl md:font-h2 text-on-surface mb-2 md:text-3xl uppercase tracking-tight font-bold">Recover Access</h2>
                <p className="text-[12px] md:font-body-md text-on-surface-variant">Enter your identity email to receive a recovery dispatch.</p>
              </div>
              
              <form className="space-y-2 md:space-y-[10px]" onSubmit={handleSubmit}>
                <div className="space-y-[10px]">
                  <label className="text-[10px] md:font-label-caps text-on-surface-variant uppercase tracking-widest">Registered Identity</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-on-surface-variant" />
                    <input required disabled={isSubmitting} className="w-full bg-surface-container-high border border-outline-variant/30 rounded md:rounded-lg pl-10 md:pl-12 pr-4 py-2.5 md:py-3 text-on-surface focus:outline-none focus:border-surface-tint focus:ring-1 focus:ring-surface-tint transition-all placeholder:text-on-surface-variant/50 text-[12px] md:font-body-sm disabled:opacity-50" placeholder="email@agency.tld" type="email" />
                  </div>
                </div>
                
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-on-surface text-surface text-[11px] md:font-label-caps py-3 md:py-4 rounded md:rounded-lg uppercase tracking-widest font-black transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 cursor-pointer mt-2 md:mt-[10px] disabled:opacity-70 disabled:cursor-not-allowed" 
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Dispatch'
                  )}
                </button>
              </form>
              
              <div className="mt-2 md:mt-[10px] pt-[10px] md:pt-[10px] border-t border-outline-variant/20 text-center">
                <Link to="/login" className="text-[11px] md:text-sm text-on-surface-variant hover:text-on-surface transition-colors inline-flex items-center gap-2">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to Security Portal
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
