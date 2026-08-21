import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Sparkles, CheckCircle2, ArrowUpRight, ChefHat } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleClose = () => {
    setStatus('idle');
    setEmail('');
    setErrorMsg('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-outline-variant shadow-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="p-6 md:p-8"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 p-1.5 shadow-md border border-outline-variant/30" style={{ backgroundColor: 'var(--surface-container-low)' }}>
                    <img 
                      src="/logo.png" 
                      alt="Chatylink" 
                      className="w-full h-full object-contain rounded-xl" 
                    />
                  </div>

                  <h2 className="text-xl md:text-2xl font-black text-on-surface mb-2 leading-tight">
                    We're Still Cooking! 👨‍🍳
                  </h2>
                  <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">
                    Chatylink isn't quite ready yet, but we're working hard to bring it to you. Join the waitlist and be the first to know when we launch.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="relative mb-3">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="you@company.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-transparent"
                        style={{
                          borderColor: status === 'error' ? '#ef4444' : 'var(--outline-variant)',
                          color: 'var(--on-surface)',
                        }}
                        autoFocus
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-xs text-red-500 mb-3 font-medium">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3 rounded-xl font-bold text-sm transition-all bg-primary text-on-primary hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full"
                          />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Waitlist <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-[11px] text-on-surface-variant mt-4 text-center">
                    No spam, just launch updates. Unsubscribe anytime.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6 md:p-8 text-center"
                >
                  {/* Success animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: 'rgba(34,197,94,0.10)', border: '2px solid rgba(34,197,94,0.30)' }}
                  >
                    <CheckCircle2 className="w-9 h-9" style={{ color: '#22c55e' }} />
                  </motion.div>

                  <h2 className="text-xl md:text-2xl font-black text-on-surface mb-2 leading-tight">
                    You're on the List! 🎉
                  </h2>
                  <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">
                    Thanks for joining the waitlist! We'll send an email to{' '}
                    <span className="font-bold text-on-surface">{email}</span> as soon as Chatylink is ready to launch.
                  </p>

                  <div className="rounded-xl p-4 mb-5 border border-outline-variant/30" style={{ backgroundColor: 'var(--surface-container-low)' }}>
                    <div className="flex items-center gap-2 justify-center">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <p className="text-xs font-bold text-on-surface">You're early — that's a good thing!</p>
                    </div>
                    <p className="text-[11px] text-on-surface-variant mt-1.5">
                      Early waitlist members get exclusive beta access and a special launch discount.
                    </p>
                  </div>

                  <button
                    onClick={handleClose}
                    className="w-full py-3 rounded-xl font-bold text-sm transition-all bg-primary text-on-primary hover:brightness-110 active:scale-[0.98]"
                  >
                    Got it, thanks!
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
