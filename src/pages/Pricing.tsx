import React, { useState } from 'react';
import { 
  CheckCircle2, Plus, Minus, Shield, Zap,
  ArrowUpRight, Check, X, Smartphone, Search, LayoutDashboard, Database
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const plans = [
    {
      name: "Starter",
      price: billingCycle === 'yearly' ? '0' : '0',
      desc: "For small hobby projects and early-stage experimental sites.",
      features: ["5 Reports/Mo", "Basic Analysis", "Mobile Support"],
      notFeatures: ["Data Export", "API Access"],
      cta: "Start Free Trial",
      visual: (
        <div className="relative h-16 md:h-20 w-full bg-surface-tint/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,var(--surface-tint),transparent)]"></div>
          <div className="relative flex items-end gap-1 px-4 translate-y-2">
            <motion.div initial={{ height: 6 }} whileInView={{ height: 12 }} transition={{ delay: 0.2 }} className="w-4 md:w-6 bg-surface-tint/20 rounded-t-sm" />
            <motion.div initial={{ height: 10 }} whileInView={{ height: 20 }} transition={{ delay: 0.3 }} className="w-4 md:w-6 bg-surface-tint/40 rounded-t-sm" />
            <motion.div initial={{ height: 6 }} whileInView={{ height: 30 }} transition={{ delay: 0.4 }} className="w-4 md:w-6 bg-surface-tint rounded-t-sm shadow-lg shadow-surface-tint/30 relative">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <Check className="w-2 h-2 text-white" />
               </div>
            </motion.div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-surface-tint/20 absolute -right-6 top-0 flex items-center justify-center text-surface-tint opacity-40">
               <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Pro",
      price: billingCycle === 'yearly' ? '29' : '39',
      desc: "The standard for growing platforms and scaling businesses.",
      features: ["Unlimited Reports", "Priority Support", "Real-time SEO", "Data Export"],
      notFeatures: ["API Access"],
      cta: "Start Free Trial",
      popular: true,
      visual: (
        <div className="relative h-16 md:h-20 w-full bg-surface-tint/10 flex items-center justify-center overflow-hidden">
          <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-surface-tint rounded-full text-[6px] md:text-[8px] font-black text-white shadow-lg">Most Popular</div>
          <div className="relative w-24 md:w-32 h-8 md:h-10 glass-card border-white/20 p-1 rounded flex flex-col gap-1 translate-y-1">
             <div className="h-1 w-1/2 bg-white/20 rounded"></div>
             <div className="h-2 w-full bg-surface-tint/20 rounded relative overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
             </div>
          </div>
        </div>
      )
    },
    {
      name: "Enterprise",
      price: billingCycle === 'yearly' ? '89' : '99',
      desc: "Dedicated power for full-scale organizations and high-traffic sites.",
      features: ["Everything in Pro", "API Access", "Custom Dashboards", "Priority Response"],
      notFeatures: [],
      cta: "Contact Sales",
      visual: (
        <div className="relative h-16 md:h-20 w-full bg-surface-tint/5 flex items-center justify-center overflow-hidden">
          <div className="relative flex items-center gap-2 md:gap-3">
             <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-surface-tint/20 border border-surface-tint/30 flex items-center justify-center shadow-inner">
                <LayoutDashboard className="w-3 h-3 md:w-5 md:h-5 text-surface-tint" />
             </div>
             <div className="space-y-0.5">
                <div className="h-1 w-8 md:w-12 bg-white/20 rounded"></div>
             </div>
             <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-surface-tint flex items-center justify-center border-2 border-background shadow-lg">
                <Plus className="w-2 h-2 text-white" />
             </div>
          </div>
        </div>
      )
    }
  ];

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: "Can I switch plans mid-cycle?",
      answer: "Yes, upgrades are processed immediately and prorated. Downgrades take effect at the end of the current billing cycle."
    },
    {
      question: "Do you offer custom data ingestion?",
      answer: "Enterprise customers receive dedicated support for custom data pipelines, supporting custom CSV uploads and specialized API imports tailored to your exact schemas."
    },
    {
      question: "Is there an API rate limit for Enterprise?",
      answer: "Enterprise plans feature custom rate limits designed around your specific infrastructure needs, often scaling into thousands of requests per minute."
    }
  ];

  return (
    <div className="pt-20 md:pt-20 bg-background text-on-background font-body-md min-h-screen selection:bg-surface-tint selection:text-on-primary-fixed overflow-x-hidden">
      <main className="pt-[10px] md:pt-[20px] pb-[10px] md:pb-[20px] px-[1%] md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2 md:mb-[10px] space-y-2"
        >
          <h1 className="text-3xl md:text-6xl font-black text-on-surface tracking-tighter">Choose Your Plan</h1>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-xs md:text-sm font-bold ${billingCycle === 'monthly' ? 'text-on-surface' : 'text-on-surface-variant opacity-60'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
              className="w-10 h-5 md:w-14 md:h-7 rounded-full bg-surface-container-high relative transition-colors cursor-pointer p-0.5 border border-outline-variant/30"
            >
              <div className={`w-3.5 h-3.5 md:w-5 md:h-5 bg-surface-tint rounded-full transition-all duration-300 ${billingCycle === 'yearly' ? 'translate-x-5 md:translate-x-7' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs md:text-sm font-bold ${billingCycle === 'yearly' ? 'text-on-surface' : 'text-on-surface-variant opacity-60'}`}>Yearly</span>
              <span className="px-1.5 py-0.5 rounded-full bg-surface-tint/10 text-surface-tint text-[8px] md:text-[10px] font-black uppercase">Save 20%</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-[10px] mb-2 md:mb-[20px] max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative glass-card flex flex-col rounded-2xl md:rounded-[2rem] border transition-all hover:translate-y-[-4px] overflow-hidden ${plan.popular ? 'border-surface-tint ring-1 ring-surface-tint/20 bg-surface-tint/[0.02] md:scale-105 z-10 shadow-2xl' : 'border-outline-variant/20 hover:border-surface-tint/30'}`}
            >
              {plan.visual}
              
              <div className="p-2 md:p-[10px] flex flex-col flex-1 text-left">
                <div className="mb-2 md:mb-[10px]">
                  <h3 className="text-xl md:text-3xl font-black text-on-surface mb-1 tracking-tight">{plan.name}</h3>
                  <p className="text-[10px] md:text-sm text-on-surface-variant leading-relaxed opacity-70 min-h-[1.5rem] md:min-h-[2.5rem]">{plan.desc}</p>
                </div>

                <div className="mb-2 md:mb-[10px] flex items-baseline gap-1">
                  <span className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">${plan.price}</span>
                  <span className="text-[10px] md:text-sm text-on-surface-variant font-bold opacity-40">/Billed {billingCycle === 'yearly' ? 'Yearly' : 'Monthly'}</span>
                </div>

                <div className="space-y-2 md:space-y-[10px] mb-2 md:mb-[10px] flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3 text-left">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-surface-tint/30 flex items-center justify-center text-surface-tint shrink-0 bg-surface-tint/5">
                        <Check className="w-2.5 md:w-3" />
                      </div>
                      <span className="text-[11px] md:text-base text-on-surface font-medium">{feature}</span>
                    </div>
                  ))}
                  {plan.notFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3 text-left opacity-20">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-on-surface/30 flex items-center justify-center shrink-0">
                        <X className="w-2.5 md:w-3" />
                      </div>
                      <span className="text-[11px] md:text-base text-on-surface font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 md:py-4 rounded-xl font-black text-[11px] md:text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95 uppercase tracking-wider ${plan.popular ? 'bg-surface-tint text-white hover:opacity-90' : 'bg-surface-tint/10 text-surface-tint border border-surface-tint/20 hover:bg-surface-tint/20'}`}>
                  {plan.cta} <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Feature Comparison Table */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-[10px] md:mb-[20px] px-0 md:px-4 max-w-4xl mx-auto"
        >
          <h2 className="text-base md:font-h2 text-on-surface mb-2 md:mb-[10px] text-center uppercase tracking-tight">Feature Matrix</h2>
          <div className="overflow-x-auto glass-card rounded-lg md:rounded-xl border border-outline-variant/30 mx-1 md:mx-0">
            <table className="w-full text-left border-collapse min-w-[400px] md:min-w-[700px]">
              <thead>
                <tr className="bg-surface-variant/20">
                  <th className="p-2 md:p-6 text-[8px] md:font-label-caps text-on-surface-variant border-b border-outline-variant/20 uppercase">Feature</th>
                  <th className="p-2 md:p-6 text-[8px] md:font-label-caps text-on-surface-variant border-b border-outline-variant/20 uppercase">Std</th>
                  <th className="p-2 md:p-6 text-[8px] md:font-label-caps text-secondary border-b border-outline-variant/20 uppercase">Elite</th>
                  <th className="p-2 md:p-6 text-[8px] md:font-label-caps text-on-surface-variant border-b border-outline-variant/20 uppercase">Ent</th>
                </tr>
              </thead>
              <tbody className="text-[10px] md:text-body-sm">
                <tr className="hover:bg-surface-variant/10 transition-colors">
                  <td className="p-2 md:p-6 text-on-surface border-b border-outline-variant/10 font-medium">Keywords</td>
                  <td className="p-2 md:p-6 text-on-surface-variant border-b border-outline-variant/10">10k</td>
                  <td className="p-2 md:p-6 text-on-surface border-b border-outline-variant/10">50k</td>
                  <td className="p-2 md:p-6 text-on-surface border-b border-outline-variant/10">∞</td>
                </tr>
                <tr className="hover:bg-surface-variant/10 transition-colors">
                  <td className="p-2 md:p-6 text-on-surface border-b border-outline-variant/10 font-medium">Frequency</td>
                  <td className="p-2 md:p-6 text-on-surface-variant border-b border-outline-variant/10">Weekly</td>
                  <td className="p-2 md:p-6 text-on-surface border-b border-outline-variant/10">Daily</td>
                  <td className="p-2 md:p-6 text-on-surface border-b border-outline-variant/10">RT</td>
                </tr>
                <tr className="hover:bg-surface-variant/10 transition-colors">
                  <td className="p-2 md:p-6 text-on-surface font-medium">History</td>
                  <td className="p-2 md:p-6 text-on-surface-variant">6M</td>
                  <td className="p-2 md:p-6 text-on-surface">2Y</td>
                  <td className="p-2 md:p-6 text-on-surface">∞</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-1 md:px-4"
        >
          <h2 className="text-base md:font-h2 text-on-surface mb-2 md:mb-[10px] text-center uppercase tracking-tight">Intel Support</h2>
          <div className="space-y-2 md:space-y-[10px]">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card p-0.5 md:p-1 rounded-lg border border-outline-variant/30 transition-colors">
                <button 
                  className="w-full p-2.5 md:p-4 flex justify-between items-center text-left cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h4 className="text-[11px] md:font-h3 font-body-lg text-on-surface m-0 tracking-tight">
                    {faq.question}
                  </h4>
                  {openFaq === index ? (
                    <Minus className={`w-3.5 h-3.5 shrink-0 transition-colors ${openFaq === index ? 'text-surface-tint' : 'text-on-surface-variant'}`} />
                  ) : (
                    <Plus className={`w-3.5 h-3.5 shrink-0 transition-colors ${openFaq === index ? 'text-surface-tint' : 'text-on-surface-variant'}`} />
                  )}
                </button>
                <div 
                  className={`px-2.5 md:px-4 overflow-hidden outline-none transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 pb-3 md:pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[10px] md:text-body-sm text-on-surface-variant m-0 leading-relaxed opacity-70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
