import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import About from './components/About';
import Office from './components/Office';
import Scheduling from './components/Schedule';
import Contact from './components/Contact';
import Leadership from './components/Leadership';

// --- SCROLL TO TOP LOGIC ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
// ---------------------------

function App() {
  return (
    <Router>
      {/* This ensures the page resets to top on every navigation */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-slate-50 font-sans antialiased flex flex-col">
        {/* The Header stays fixed at the top */}
        <Header />
        
        {/* Main Content Area - Grow to push footer down */}
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
        
        {/* The Footer appears at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;