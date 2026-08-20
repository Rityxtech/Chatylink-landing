import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  ArrowLeft, 
  Mail, 
  Globe, 
  Server, 
  Bot, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  Trash2,
  Cpu
} from 'lucide-react';

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-4 h-4" />
            <span>Legal & Privacy Compliance</span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-on-surface tracking-tight mb-4">
            Chatylink Privacy Policy
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
            At <strong>Chatylink</strong> ("we", "our", or "us"), operated under <strong>Rityxtech</strong>, we are committed to protecting the privacy and security of business owners and their end customers. This Privacy Policy explains how Chatylink collects, uses, stores, and handles data when you integrate our multi-channel AI customer support application with platforms such as Meta (Facebook Messenger, Instagram Direct Messages, WhatsApp Business), Telegram, and Website Chat Widgets.
          </div>
        </motion.div>

        {/* Key Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8">
          <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low/60 flex items-start gap-3">
            <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">TLS 1.3 & Encrypted</h4>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">All data in transit and tokens at rest are encrypted.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low/60 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">No Data Selling</h4>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">We never sell, rent, or trade your data to third parties.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low/60 flex items-start gap-3">
            <Trash2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">Full Deletion Control</h4>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">Self-serve channel disconnects & 48h data erasure.</p>
            </div>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-on-surface">
          {/* Section 1 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">1</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">Information We Collect</h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
              We collect information to provide, train, and improve our AI customer messaging services:
            </p>

            <div className="space-y-4 text-xs md:text-sm leading-relaxed">
              <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20">
                <h3 className="font-bold text-on-surface mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  A. Account Information
                </h3>
                <p className="text-on-surface-variant">
                  Business Name, Owner Email Address, Phone Number, Profile Photo, and Billing details.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20">
                <h3 className="font-bold text-on-surface mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  B. Connected Social & Messaging Platform Data (Meta, Telegram, Web)
                </h3>
                <p className="text-on-surface-variant mb-2">
                  When you connect a Facebook Page, Instagram Business Account, WhatsApp Business Account, or Telegram Bot:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
                  <li><strong>Platform Access Tokens & Credentials:</strong> Page Access Tokens, User Access Tokens, WhatsApp Phone Number IDs, and Bot Tokens required to send and receive messages on your behalf.</li>
                  <li><strong>Account Identifiers:</strong> Page IDs, Instagram Account IDs, WhatsApp Business IDs, Username handles, and Page Names.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20">
                <h3 className="font-bold text-on-surface mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  C. Conversation & Customer Messaging Data
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
                  <li>Incoming and outgoing customer message contents (text, images, media attachments, audio voice notes, timestamps).</li>
                  <li>End-customer contact profiles (names, phone numbers, handles, platform user IDs provided by Meta/Telegram).</li>
                  <li>Orders, bookings, catalog inquiries, and invoice details generated during chat conversations.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20">
                <h3 className="font-bold text-on-surface mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  D. Technical & Usage Data
                </h3>
                <p className="text-on-surface-variant">
                  IP addresses, browser/device types, crash logs, and API performance metrics.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">2</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">How We Use Your Information</h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
              Chatylink processes data strictly for the following purposes:
            </p>

            <ol className="space-y-3 text-xs md:text-sm text-on-surface-variant leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</div>
                <div>
                  <strong className="text-on-surface">Automated AI Response Generation:</strong> Utilizing advanced AI models (such as Google Gemini) to process incoming customer inquiries and generate natural context-aware customer service responses according to your trained persona and business rules.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</div>
                <div>
                  <strong className="text-on-surface">Unified Live Chat Inbox:</strong> Displaying conversation histories in the Chatylink dashboard so human business owners and agents can take over conversations seamlessly.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</div>
                <div>
                  <strong className="text-on-surface">Order & Booking Management:</strong> Processing transaction inquiries, generating digital invoices, and updating order status.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">4</div>
                <div>
                  <strong className="text-on-surface">Analytics & Performance Tracking:</strong> Aggregating response speed, customer satisfaction, and message volume metrics for business insights.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">5</div>
                <div>
                  <strong className="text-on-surface">System Maintenance & Security:</strong> Preventing spam, fraud, and unauthorized API usage.
                </div>
              </li>
            </ol>
          </section>

          {/* Section 3 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">3</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">Data Sub-Processors & Integrations</h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
              We share data only with trusted third-party infrastructure providers necessary to operate Chatylink:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20">
                <div className="flex items-center gap-2 font-bold text-on-surface mb-1">
                  <Layers className="w-4 h-4 text-blue-500" />
                  Meta Platforms, Inc. (Graph API)
                </div>
                <p className="text-on-surface-variant text-xs">
                  Transmission of Facebook Messenger, Instagram Direct, and WhatsApp Business messages.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20">
                <div className="flex items-center gap-2 font-bold text-on-surface mb-1">
                  <Server className="w-4 h-4 text-amber-500" />
                  Google Cloud Platform & Firebase
                </div>
                <p className="text-on-surface-variant text-xs">
                  Secure database storage (Cloud Firestore), user authentication, and cloud function execution.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20">
                <div className="flex items-center gap-2 font-bold text-on-surface mb-1">
                  <Cpu className="w-4 h-4 text-purple-500" />
                  Google AI (Gemini API)
                </div>
                <p className="text-on-surface-variant text-xs">
                  Processing text prompts to generate automated customer service replies (data is not used to train global public models).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20">
                <div className="flex items-center gap-2 font-bold text-on-surface mb-1">
                  <Globe className="w-4 h-4 text-orange-500" />
                  Cloudflare R2
                </div>
                <p className="text-on-surface-variant text-xs">
                  Encrypted cloud storage for user-uploaded chat media attachments.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">4</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">Data Security & Storage</h2>
            </div>
            <ul className="space-y-3 text-xs md:text-sm text-on-surface-variant leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>All data in transit is encrypted using <strong>HTTPS / TLS 1.3</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>All access tokens and credentials stored in our database are protected using industry-standard encryption and Firebase Security Rules.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>We do <strong>NOT</strong> sell, rent, or trade personal data or customer conversation content to third-party advertisers.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">5</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">Data Retention & Deletion</h2>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-on-surface-variant leading-relaxed">
              <p>
                We retain conversation logs and access tokens for as long as your Chatylink account remains active.
              </p>
              <p>
                Business owners can delete connected channels or erase conversation logs directly from the Chatylink app at any time.
              </p>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span>
                  To request complete account erasure and data deletion, visit our instructions page or contact support:
                </span>
                <Link 
                  to="/data-deletion" 
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-bold text-xs hover:brightness-110 shrink-0 shadow-sm"
                >
                  Data Deletion Instructions <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-md" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-sm flex items-center justify-center">6</span>
              <h2 className="text-lg md:text-xl font-bold text-on-surface">Contact Us</h2>
            </div>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
              If you have questions regarding this Privacy Policy or your data, contact us at:
            </p>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm">
              <a 
                href="mailto:privacy@chatylink.com" 
                className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary transition-colors text-on-surface"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span><strong>Email:</strong> privacy@chatylink.com</span>
              </a>
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
