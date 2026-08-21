import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Trash2, 
  ArrowLeft, 
  Smartphone, 
  Layers, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function DataDeletion() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('privacy@chatylink.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="overflow-x-hidden w-full relative z-10 pt-[80px] md:pt-[120px] pb-16 md:pb-24 px-[10px] md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary hover:underline mb-6 md:mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-10 rounded-2xl md:rounded-3xl border border-outline-variant/40 shadow-xl mb-8 relative overflow-hidden"
          style={{ backgroundColor: 'var(--surface)' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Chatylink logo" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-xl shadow-sm border border-outline-variant/30 p-1 bg-surface" />
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 tracking-widest uppercase">
                <Trash2 className="w-3.5 h-3.5" />
                <span>Data Privacy & Control</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-black text-on-surface tracking-tight">
                Chatylink - User Data Deletion Instructions
              </h1>
            </div>
          </div>

          <p className="text-xs md:text-base text-on-surface-variant leading-relaxed">
            Chatylink values your control over your data. In compliance with <strong>Meta Platform Policies</strong>, users can request the deletion of their personal data and connected channel credentials at any time.
          </p>
        </motion.div>

        {/* 3 Methods Grid */}
        <div className="space-y-6 text-on-surface">
          {/* Method 1 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md relative overflow-hidden" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Method 1</span>
                  <h2 className="text-base md:text-xl font-bold text-on-surface">
                    Delete Connected Channels via the Chatylink App
                  </h2>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-green-500/15 text-green-500 border border-green-500/30">
                Instant Execution
              </span>
            </div>

            <ol className="space-y-2.5 text-xs md:text-sm text-on-surface-variant mb-5">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</span>
                <span>Open the <strong>Chatylink Mobile App</strong> or Web Dashboard.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</span>
                <span>Go to <strong>Settings</strong> &rarr; <strong>Channels / Bots</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</span>
                <span>Select the Facebook Page, Instagram Account, or WhatsApp channel you wish to remove.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">4</span>
                <span>Tap <strong>Remove Channel</strong>.</span>
              </li>
            </ol>

            <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-2.5 text-xs text-green-600 dark:text-green-400 font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span><strong>Result:</strong> All access tokens for that channel are immediately revoked and permanently deleted from our servers.</span>
            </div>
          </section>

          {/* Method 2 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md relative overflow-hidden" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-black">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400">Method 2</span>
                  <h2 className="text-base md:text-xl font-bold text-on-surface">
                    Disconnect via Meta (Facebook / Instagram)
                  </h2>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30">
                Webhook Auto-Purge
              </span>
            </div>

            <ol className="space-y-2.5 text-xs md:text-sm text-on-surface-variant mb-5">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</span>
                <span>Log into your Facebook account and go to <strong>Settings & Privacy</strong> &rarr; <strong>Settings</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</span>
                <span>Navigate to <strong>Business Integrations</strong> (or <strong>Apps and Websites</strong>).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</span>
                <span>Find <strong>Chatylink</strong> in the list.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">4</span>
                <span>Click <strong>Remove</strong>.</span>
              </li>
            </ol>

            <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-2.5 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span><strong>Result:</strong> Facebook notifies our webhook callback, and our system automatically purges your stored tokens and deactivates the channel.</span>
            </div>
          </section>

          {/* Method 3 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md relative overflow-hidden" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-black">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400">Method 3</span>
                  <h2 className="text-base md:text-xl font-bold text-on-surface">
                    Request Full Account & Data Erasure
                  </h2>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500/15 text-purple-400 border border-purple-500/30 flex items-center gap-1">
                <Clock className="w-3 h-3" /> 48h SLA
              </span>
            </div>

            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
              If you wish to permanently delete your Chatylink user account, business data, and all associated chat logs:
            </p>

            <div className="p-4 rounded-xl bg-surface-container-low/80 border border-outline-variant/30 space-y-3 mb-5 text-xs md:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-on-surface">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>Send an email to: <code className="bg-surface px-2 py-0.5 rounded font-mono font-bold text-primary">privacy@chatylink.com</code></span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/30 text-xs font-semibold hover:bg-surface-container transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy Email'}
                </button>
              </div>

              <div className="text-on-surface-variant">
                <strong>Subject:</strong> <code className="bg-surface px-2 py-0.5 rounded font-mono text-on-surface">Account Data Deletion Request</code>
              </div>

              <div className="text-on-surface-variant">
                <strong>Requirements:</strong> Include your registered Chatylink account email address.
              </div>

              <div className="pt-2 border-t border-outline-variant/20 flex items-center gap-2 text-primary font-medium text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Our team will process your request and permanently delete all records within <strong>48 hours</strong>.</span>
              </div>
            </div>

            <a
              href="mailto:privacy@chatylink.com?subject=Account%20Data%20Deletion%20Request"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-xs md:text-sm hover:brightness-110 shadow-md transition-all active:scale-95"
            >
              <Mail className="w-4 h-4" /> Open Email Client
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
