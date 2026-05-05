import React from 'react';
import { Bolt, Microscope, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-20 md:pt-20 bg-background text-on-background font-body-md selection:bg-surface-tint/30">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] md:h-[600px] lg:h-[819px] flex items-center justify-center overflow-hidden px-[1%] md:px-8"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,219,233,0.1),transparent_70%)]"></div>
          <img 
            className="w-full h-full object-cover opacity-20 mix-blend-screen" 
            alt="Deep space neural network" 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80" 
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] md:font-label-caps text-surface-tint mb-1 md:mb-[10px] block tracking-[0.2em] uppercase"
          >The Architecture of Visibility</motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:font-h1 text-on-surface mb-2 md:mb-[10px] lg:text-7xl uppercase tracking-tight font-bold"
          >
            Intelligence <br className="md:hidden" /> Behind <span className="text-surface-tint">Search</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[12px] md:font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            RankFlow is a precision instrument built for elite SEO strategists. We translate complexity into dominance.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-[10px] md:py-[20px] px-[1%] md:px-8 max-w-screen-xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[10px] items-center">
          <div className="glass-card p-2 md:p-[10px] rounded-xl border-l-4 border-l-surface-tint">
            <h2 className="text-xl md:font-h2 text-on-surface mb-2 md:mb-[10px] uppercase tracking-tight">Our Mission</h2>
            <p className="text-[13px] md:font-body-lg text-on-surface mb-2 md:mb-[10px] leading-relaxed">
              To architect the future of organic growth through hyper-accurate data and predictive intelligence. We empower elite strategists with the clarity needed to conquer the digital landscape.
            </p>
            <div className="flex gap-6 md:gap-8">
              <div className="flex flex-col">
                <span className="text-surface-tint text-3xl md:font-h1 leading-none font-bold">99.9%</span>
                <span className="text-[9px] md:font-label-caps text-on-surface-variant mt-2 uppercase tracking-widest">Accuracy</span>
              </div>
              <div className="w-[1px] h-10 md:h-12 bg-on-surface/10"></div>
              <div className="flex flex-col">
                <span className="text-surface-tint text-3xl md:font-h1 leading-none font-bold">2.4M</span>
                <span className="text-[9px] md:font-label-caps text-on-surface-variant mt-2 uppercase tracking-widest">Daily Ops</span>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group hidden md:block"
          >
            <div className="absolute -inset-4 bg-surface-tint/10 rounded-2xl blur-2xl group-hover:bg-surface-tint/20 transition-all"></div>
            <div className="relative aspect-video glass-card rounded-xl overflow-hidden">
              <img 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-700" 
                alt="Server room" 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80" 
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-[10px] md:py-[20px] px-[1%] md:px-8 bg-surface-container-lowest"
      >
        <div className="text-center mb-2 md:mb-[10px]">
          <h2 className="text-lg md:font-h2 text-on-surface uppercase tracking-tighter font-bold">Evolution</h2>
        </div>
        <div className="max-w-4xl mx-auto relative px-4">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-surface-tint to-transparent opacity-30"></div>
          
          {/* Timeline Item 1 */}
          <div className="relative flex md:grid md:grid-cols-2 gap-2 md:gap-[10px] pl-10 md:pl-0 md:p-8 mb-2 md:mb-[10px] items-center">
            <div className="md:text-right md:pr-8">
              <h3 className="text-base md:font-h3 text-on-surface font-bold">2020</h3>
              <p className="text-[11px] md:font-body-sm text-on-surface-variant leading-snug">Inception of Core Flow Engine in Zurich.</p>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-surface-tint glow-cyan border-2 md:border-4 border-background z-10"></div>
            <div className="hidden md:block pl-8"></div>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="relative flex md:grid md:grid-cols-2 gap-2 md:gap-[10px] pl-10 md:pl-0 md:p-8 mb-2 md:mb-[10px] items-center">
            <div className="hidden md:block pr-8"></div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-surface-tint glow-cyan border-2 md:border-4 border-background z-10"></div>
            <div className="md:text-left md:pl-8">
              <h3 className="text-base md:font-h3 text-on-surface font-bold">2022</h3>
              <p className="text-[11px] md:font-body-sm text-on-surface-variant leading-snug">Series A. Expansion across 40+ markets.</p>
            </div>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="relative flex md:grid md:grid-cols-2 gap-2 md:gap-[10px] pl-10 md:pl-0 md:p-8 items-center">
            <div className="md:text-right md:pr-8">
              <h3 className="text-base md:font-h3 text-on-surface font-bold">2024</h3>
              <p className="text-[11px] md:font-body-sm text-on-surface-variant leading-snug">V3 Release with predictive forecasting.</p>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-surface-tint glow-cyan border-2 md:border-4 border-background z-10"></div>
            <div className="hidden md:block pl-8"></div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-[10px] md:py-[20px] px-[1%] md:px-8 max-w-screen-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-[10px]">
          <div className="glass-card p-2 md:p-[10px] border-t-2 border-t-surface-tint">
            <div className="mb-2 md:mb-[10px]"><Bolt className="text-surface-tint w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="text-sm md:font-h3 text-on-surface mb-2 md:mb-[10px] uppercase tracking-widest font-bold">Speed</h3>
            <p className="text-[11px] md:font-body-md text-on-surface-variant leading-relaxed">Zero-latency data processing. Real-time SERP updates for competitive advantage.</p>
          </div>
          <div className="glass-card p-2 md:p-[10px] border-t-2 border-t-secondary">
            <div className="mb-2 md:mb-[10px]"><Microscope className="text-secondary w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="text-sm md:font-h3 text-on-surface mb-2 md:mb-[10px] uppercase tracking-widest font-bold">Accuracy</h3>
            <p className="text-[11px] md:font-body-md text-on-surface-variant leading-relaxed">Verifiable truth. We ensure your data is clean, relevant, and actionable.</p>
          </div>
          <div className="glass-card p-2 md:p-[10px] border-t-2 border-t-outline-variant/30">
            <div className="mb-2 md:mb-[10px]"><Eye className="text-on-surface w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="text-sm md:font-h3 text-on-surface mb-2 md:mb-[10px] uppercase tracking-widest font-bold">Visibility</h3>
            <p className="text-[11px] md:font-body-md text-on-surface-variant leading-relaxed">No black boxes. Open methodology for the strategists who rely on us.</p>
          </div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-[10px] md:py-[20px] px-[1%] md:px-8 bg-surface-dim"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-2 md:mb-[10px] gap-2 md:gap-6">
            <div>
              <span className="text-[10px] md:font-label-caps text-surface-tint uppercase mb-1 block tracking-widest">The Strategists</span>
              <h2 className="text-lg md:font-h2 text-on-surface uppercase tracking-tight font-bold">Leadership</h2>
            </div>
            <a className="text-[10px] md:text-body-sm md:font-label-caps text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1 uppercase" href="#">
              Careers <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-[10px]">
            {/* Team Card 1 */}
            <div className="glass-card group overflow-hidden">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                  alt="Marcus Thorne" 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-3 md:p-6">
                <h4 className="text-xs md:font-h3 text-on-surface md:text-lg">Marcus Thorne</h4>
                <span className="text-[8px] md:font-label-caps text-surface-tint uppercase block mt-0.5 md:mt-1">Chief Architect</span>
              </div>
            </div>
            {/* Team Card 2 */}
            <div className="glass-card group overflow-hidden">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                  alt="Elena Vance" 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-3 md:p-6">
                <h4 className="text-xs md:font-h3 text-on-surface md:text-lg">Elena Vance</h4>
                <span className="text-[8px] md:font-label-caps text-surface-tint uppercase block mt-0.5 md:mt-1">Data Science</span>
              </div>
            </div>
            {/* Team Card 3 */}
            <div className="glass-card group overflow-hidden">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                  alt="Julian Kross" 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-3 md:p-6">
                <h4 className="text-xs md:font-h3 text-on-surface md:text-lg">Julian Kross</h4>
                <span className="text-[8px] md:font-label-caps text-surface-tint uppercase block mt-0.5 md:mt-1">Algorithms</span>
              </div>
            </div>
            {/* Team Card 4 */}
            <div className="glass-card group overflow-hidden">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                  alt="Sarah Jenkins" 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-3 md:p-6">
                <h4 className="text-xs md:font-h3 text-on-surface md:text-lg">Sarah Jenkins</h4>
                <span className="text-[8px] md:font-label-caps text-surface-tint uppercase block mt-0.5 md:mt-1">Operations</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-[10px] md:py-[20px] px-[1%] md:px-8 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-surface-tint/5 -skew-y-3 translate-y-12"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-xl md:font-h2 text-on-surface mb-2 md:mb-[10px] uppercase font-bold tracking-tight">Ready to join the elite?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/get-started" className="bg-primary-container text-on-primary text-[11px] md:font-label-caps px-6 md:px-8 py-3 md:py-4 rounded md:rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all cursor-pointer uppercase font-bold inline-block">Get Started</Link>
            <Link to="/contact" className="glass-card text-on-surface text-[11px] md:font-label-caps px-6 md:px-8 py-3 md:py-4 rounded md:rounded-lg hover:bg-surface-variant/20 transition-all cursor-pointer uppercase font-bold inline-block">Contact Sales</Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
