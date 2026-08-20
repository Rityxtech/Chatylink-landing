import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  FileText, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  Mail, 
  Globe 
} from 'lucide-react';

export default function TermsOfService() {
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2.5 text-xs font-bold text-primary tracking-widest uppercase mb-3">
            <FileText className="w-4 h-4" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-on-surface tracking-tight mb-4">
            Chatylink Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-on-surface-variant font-mono">
            <span className="bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/30">
              <strong>Effective Date:</strong> January 1, 2026
            </span>
            <span className="bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/30">
              <strong>Last Updated:</strong> August 20, 2026
            </span>
          </div>

          <div className="mt-6 pt-6 border-t border-outline-variant/30 text-xs md:text-sm text-on-surface-variant leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of <strong>Chatylink</strong> ("Service"), operated under <strong>Rityxtech</strong>. By registering for, integrating, or using our services, you agree to be bound by these Terms and our <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>.
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-6 text-on-surface">
          {/* Section 1 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">1</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">Acceptable Use & Platform Compliance</h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-3">
              You agree to comply with all applicable laws, regulations, and third-party platform terms (including Meta Platform Terms, WhatsApp Business Policy, Telegram Terms of Service, and Instagram Platform Terms).
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-on-surface-variant">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>You shall not use Chatylink to distribute unsolicited commercial messages (spam), engage in harassment, or transmit malicious code.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>You are solely responsible for obtaining necessary customer consents before sending automated or broadcast communications.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">2</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">Account Responsibilities & Security</h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-3">
              You are responsible for maintaining the confidentiality of your account credentials and connected API keys/tokens.
            </p>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Any activity occurring under your registered account is your responsibility. Promptly notify us of any unauthorized account access at <code className="text-primary font-mono">support@chatylink.com</code>.
            </p>
          </section>

          {/* Section 3 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">3</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">AI Usage & Third-Party Service Dependencies</h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-3">
              Chatylink provides AI-assisted responses powered by Large Language Models (including Google Gemini API). While we optimize prompt instructions and safety guidelines:
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-on-surface-variant">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>You acknowledge that AI responses are generated automatically and should be monitored according to your business criteria.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Service availability depends partly on third-party platform uptime (Meta APIs, Telegram, cloud hosting).</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">4</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">Subscription, Billing & Termination</h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-3">
              Subscriptions are billed in advance on a recurring monthly or annual basis. You may cancel your subscription at any time via your dashboard.
            </p>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Upon account termination, your channel tokens are revoked, and you may request complete data erasure in accordance with our <Link to="/data-deletion" className="text-primary underline">Data Deletion Policy</Link>.
            </p>
          </section>

          {/* Section 5 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">5</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">Contact & Support</h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
              For any questions regarding these Terms of Service, please reach out to us:
            </p>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm">
              <a 
                href="mailto:support@chatylink.com" 
                className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary transition-colors text-on-surface"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span><strong>Support:</strong> support@chatylink.com</span>
              </a>
              <a 
                href="https://chatylink.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary transition-colors text-on-surface"
              >
                <Globe className="w-4 h-4 text-primary" />
                <span><strong>Website:</strong> https://chatylink.com</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
