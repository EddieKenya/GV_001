// components/LoadingScreen.jsx
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#2B4D6C] flex flex-col items-center justify-center">
      <img src="/arms.png" alt="Logo" className="w-24 h-24 mb-6 animate-pulse" />
      <div className="w-48 h-1 bg-white/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-red-600 animate-loading-bar"></div>
      </div>
      <p className="mt-4 font-playfair italic text-white/70 tracking-widest uppercase text-xs">
        Official Portal Loading...
      </p>
    </div>
  );
};

export default LoadingScreen;