import React from 'react';

const About = () => {
  // Protection logic for all images
  const imageProtection = "select-none pointer-events-none user-select-none";
  const disableRightClick = (e) => e.preventDefault();

  return (
    <main className="min-h-screen bg-white text-slate-900 font-lora">
      {/* SECTION 1: HERO - THE STATE GREETING */}
      <section className="relative bg-[#2B4D6C] py-20">
        <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h4 className="font-bold uppercase tracking-[0.3em] text-sm mb-4 text-blue-200">The Cabinet Secretary</h4>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 italic uppercase">
              Leading the <br /> Resource Frontier
            </h1>
            <p className="text-xl opacity-90 leading-relaxed italic">
              "Our mission is to unlock the dormant wealth of our lands and waters, 
              ensuring every Kenyan benefits from the Blue Economy and our vast mineral resources."
            </p>
          </div>
          <div className="relative">
            <img 
              src="/johoruto.png" 
              alt="CS Joho and President Ruto" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`rounded-lg shadow-2xl border-8 border-white/10 w-full object-cover ${imageProtection}`}
            />
            <div className="absolute -bottom-4 -left-4 bg-red-600 text-white px-6 py-2 font-bold text-xs uppercase tracking-widest">
              Executive Cooperation
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE VISIONARY IN OFFICE */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <img 
              src="/johowork.png" 
              alt="CS Joho in consultations" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700 w-full ${imageProtection}`}
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-4xl font-playfair font-bold text-[#2B4D6C] mb-6">A Legacy of Service</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Before his appointment as Cabinet Secretary for Mining, Blue Economy and Maritime Affairs, 
              Ali Hassan Joho served two historic terms as the first Governor of Mombasa County. 
              His leadership transformed the coastal city into a hub for tourism and infrastructure, 
              laying the groundwork for his current national responsibilities.
            </p>
            <ul className="space-y-4 font-bold text-[#2B4D6C] uppercase text-sm tracking-tight">
              <li className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-600"></span> 
                Former Governor of Mombasa (2013 - 2022)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-600"></span> 
                Former Member of Parliament, Kisauni
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-600"></span> 
                National Deputy Leader of ODM Party
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: MINING & INDUSTRIAL GROWTH */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-playfair font-bold text-[#2B4D6C] mb-8 uppercase tracking-tighter">
              Revitalizing the <br /> Mining Sector
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="font-bold text-xl mb-2">Artisanal Mining Reform</h3>
                <p className="text-slate-600 italic">Formalizing small-scale miners to ensure safety, fair pay, and environmental protection.</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="font-bold text-xl mb-2">Mineral Value Addition</h3>
                <p className="text-slate-600 italic">Pushing for local processing plants so Kenya exports finished products, not raw earth.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img 
               src="/work.png" 
               alt="Mining site inspection" 
               draggable="false"
               onContextMenu={disableRightClick}
               className={`rounded-md w-full h-80 object-cover mt-12 ${imageProtection}`} 
             />
             <img 
               src="/maritime.png" 
               alt="Maritime port tour" 
               draggable="false"
               onContextMenu={disableRightClick}
               className={`rounded-md w-full h-80 object-cover ${imageProtection}`} 
             />
          </div>
        </div>
      </section>

      {/* SECTION 4: THE BLUE ECONOMY PROMISE */}
      <section className="bg-[#2B4D6C] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-10 italic">Securing the Maritime Frontier</h2>
          <p className="text-xl leading-relaxed opacity-80 mb-12">
            Under his stewardship, the Blue Economy has been elevated to a top-tier national priority. 
            From sustainable fisheries to maritime security, CS Joho is ensuring that Kenya's 
            vast coastline becomes a primary engine of economic growth for the Bottom-Up Economic Transformation Agenda (BETA).
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-300">50k+</p>
              <p className="uppercase text-[10px] tracking-widest font-bold mt-2">Maritime Jobs Projected</p>
            </div>
            <div className="text-center border-l border-white/20 pl-8">
              <p className="text-4xl font-bold text-blue-300">2026</p>
              <p className="uppercase text-[10px] tracking-widest font-bold mt-2">Vision Milestone</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;