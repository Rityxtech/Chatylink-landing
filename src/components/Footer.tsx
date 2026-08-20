import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto" style={{ backgroundColor: '#000000' }}>
      {/* Desktop Layout */}
      <div className="hidden md:block px-6 py-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-start gap-8">
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-on-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight uppercase" style={{ color: '#ffffff' }}>Chatylink</span>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              AI-powered customer engagement across every channel. One inbox, one dashboard, unlimited conversations.
            </p>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#ffffff' }}>Product</h4>
              <Link to="/" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Features</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Pricing</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>API Docs</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Integrations</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#ffffff' }}>Company</h4>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>About</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Careers</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#ffffff' }}>Resources</h4>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Help Center</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Community</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Tutorials</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Status</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#ffffff' }}>Legal</h4>
              <Link to="/privacy" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Privacy Policy</Link>
              <Link to="/data-deletion" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Data Deletion</Link>
              <Link to="/terms" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Terms of Service</Link>
              <Link to="#" className="text-base hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Security</Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#ffffff' }}>Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:privacy@chatylink.com" className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>&copy; {new Date().getFullYear()} Chatylink. All rights reserved.</p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Built for businesses who care.</p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-[10px] py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-on-primary" />
            </div>
            <span className="text-lg font-bold tracking-tight uppercase" style={{ color: '#ffffff' }}>Chatylink</span>
          </div>
          <div className="flex gap-2">
            <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-x-3 gap-y-2">
          <Link to="/" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Features</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>About</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Help Center</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Pricing</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Community</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>API Docs</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Careers</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Tutorials</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Integrations</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link>
          <Link to="#" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Status</Link>
          <Link to="/privacy" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Privacy</Link>
          <Link to="/data-deletion" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Deletion</Link>
          <Link to="/terms" className="text-sm hover:text-primary transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>Terms</Link>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>&copy; {new Date().getFullYear()} Chatylink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
