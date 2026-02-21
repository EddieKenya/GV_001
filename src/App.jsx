import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import About from './components/About';
import Office from './components/Office';
import Scheduling from './components/Schedule';
import Contact from './components/Contact';
import Leadership from './components/Leadership';

// --- LOADING COMPONENT ---
const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] bg-[#2B4D6C] flex flex-col items-center justify-center">
    {/* Coat of Arms / Logo */}
    <img src="/arms.png" alt="Republic of Kenya" className="w-24 h-24 mb-6 animate-pulse select-none pointer-events-none" />
    
    {/* Animated Progress Bar Container */}
    <div className="w-48 h-1 bg-white/20 overflow-hidden relative rounded-full">
      <div className="absolute inset-0 bg-red-600 animate-loading-bar"></div>
    </div>
    
    <p className="mt-4 font-playfair italic text-white/70 tracking-widest uppercase text-[10px]">
      Official Portal Loading...
    </p>
  </div>
);

// --- SCROLL TO TOP LOGIC ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // List every critical image path here
    const criticalImages = [
      '/arms.png',
      '/johoruto.png',
      '/kanzu.png',
      '/johowork.png',
      '/quarry.png',
      '/fisherman.png',
      '/Maritimenew.png'
    ];

    const cacheImages = async (srcArray) => {
      const promises = srcArray.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve anyway to avoid getting stuck if an image is missing
        });
      });

      await Promise.all(promises);
      // Small timeout to ensure the "Fade In" feels smooth
      setTimeout(() => setIsLoading(false), 1000);
    };

    cacheImages(criticalImages);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Show Loading Screen until images are ready */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="min-h-screen bg-slate-50 font-sans antialiased flex flex-col animate-fadeIn">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/office" element={<Office />} />
              <Route path="/schedule" element={<Scheduling/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/leadership" element={<Leadership/>} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;