import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from './lib/ThemeContext';
import Home from './pages/Home';
import Developers from './pages/Developers';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ForgotPassword from './pages/ForgotPassword';

function AppContent() {
  const location = useLocation();
  const hideLayout = ['/login', '/get-started', '/forgot-password'].includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ReactLenis root>
      <div className="font-body-md text-on-surface bg-background antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-fixed">
        {!hideLayout && <TopNavBar />}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
        {!hideLayout && <Footer />}
        {!hideLayout && <ChatWidget />}
      </div>
    </ReactLenis>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
