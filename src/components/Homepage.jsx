import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Homepage = () => {
  // Common protection classes: 
  // - select-none: prevents text/image selection
  // - pointer-events-none: makes the element "invisible" to mouse clicks/drags
  const imageProtection = "select-none pointer-events-none user-select-none";

  return (
    <main className="min-h-screen bg-white md:bg-[#2B4D6C] overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center">
        
        {/* TOP HALF (MOBILE): White Background with Blue Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-16 py-20 md:py-0 relative z-10">
          <img 
            src="/arms.png" 
            alt="Official Logo" 
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            className={`w-24 h-24 md:w-[144px] md:h-[144px] mb-6 object-contain ${imageProtection}`} 
          />
          {/* Text color is blue on mobile, white on desktop */}
          <p className="font-lora text-sm md:text-lg mb-2 text-[#2B4D6C] md:text-[#F3F3F3] tracking-widest uppercase">
            Welcome to the Office of
          </p>
          <h1 className="font-playfair text-4xl md:text-7xl font-bold uppercase text-[#2B4D6C] md:text-[#F3F3F3] leading-tight mb-8">
            CABINET SECRETARY <br /> FOR MINING
          </h1>
          
          {/* Linked to /leadership as requested */}
          <Link 
            to="/leadership" 
            className="bg-[#2B4D6C] md:bg-white text-white md:text-[#2B4D6C] px-8 py-3 md:px-10 md:py-4 font-bold text-base md:text-lg hover:opacity-90 transition-all rounded-full md:rounded-none inline-block"
          >
            Joho's Leadership
          </Link>
        </div>

        {/* BOTTOM HALF (MOBILE): Blue Background with Profile Image */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-full bg-[#2B4D6C] md:bg-transparent md:absolute md:right-0 bottom-0 flex items-end justify-center md:justify-end relative">
          <img 
            src="/profile.png" 
            alt="Cabinet Secretary for Mining" 
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            className={`h-full w-auto object-contain md:object-cover object-bottom md:object-left-top ${imageProtection}`} 
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-white text-slate-800 relative z-20">
          <div className="container mx-auto px-6 md:px-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-12 md:w-20 bg-red-600"></div>
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[#2B4D6C]">Sector Highlights</h2>
              </div>
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl font-lora text-slate-600">
                Strategic initiatives advancing Kenya's mineral wealth and blue economy resources under official state leadership.
              </p>
          </div>
      </section>
    </main>
  );
};

export default Homepage;