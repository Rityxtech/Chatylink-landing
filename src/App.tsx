import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from './lib/ThemeContext';
import { WaitlistProvider } from './lib/WaitlistContext';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataDeletion from './pages/DataDeletion';
import TermsOfService from './pages/TermsOfService';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function AnimatedBackground() {
  return (
    <>
      {/* Desktop: Fixed animated background with waves and blobs */}
      <div className="hidden md:block fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0, background: 'var(--background)' }}>
        <div className="absolute top-0 left-0 w-[200%] flex opacity-[0.06]" style={{ animation: 'waveScroll 20s linear infinite' }}>
          <svg viewBox="0 0 1440 320" className="w-[50%] h-auto" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--secondary-container)' }}>
            <path d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
          <svg viewBox="0 0 1440 320" className="w-[50%] h-auto" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--secondary-container)' }}>
            <path d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-[200%] flex opacity-[0.03]" style={{ animation: 'waveScroll 35s linear infinite reverse' }}>
          <svg viewBox="0 0 1440 320" className="w-[50%] h-auto" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--surface-tint)' }}>
            <path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
          <svg viewBox="0 0 1440 320" className="w-[50%] h-auto" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--surface-tint)' }}>
            <path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
        </div>
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[80px]" style={{ background: 'var(--secondary-container)', opacity: 0.06, animation: 'blobFloat 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] rounded-full blur-[100px]" style={{ background: 'var(--surface-tint)', opacity: 0.05, animation: 'blobFloat 8s ease-in-out infinite', animationDelay: '-2s' }} />
        <style>{`
          @keyframes waveScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes blobFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        `}</style>
      </div>
    </>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ReactLenis root options={{
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
      wheelMultiplier: 1.2,
    }}>
      <AnimatedBackground />
      <div className="font-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-fixed relative mobile-content-bg" style={{ zIndex: 1 }}>
        {/* Mobile: Animated particle background */}
        <div className="mobile-background md:hidden">
          {Array.from({ length: 20 }).map((_, i) => <span key={i} />)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 1 }}>
          <TopNavBar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/data-deletion" element={<DataDeletion />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
          <ChatWidget />
        </div>
      </div>
    </ReactLenis>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <WaitlistProvider>
          <AppContent />
        </WaitlistProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
