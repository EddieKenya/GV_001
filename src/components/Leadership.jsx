import React from 'react';

const Leadership = () => {
  // Global protection constants
  const imageProtection = "select-none pointer-events-none user-select-none";
  const disableRightClick = (e) => e.preventDefault();

  return (
    /* overflow-x-hidden prevents the "dragging out" or horizontal scrolling on mobile */
    <main className="min-h-screen bg-white text-slate-900 font-lora overflow-x-hidden">
      
      {/* EXECUTIVE HERO SECTION */}
      <section className="relative bg-[#F3F3F3] py-20 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-full">
            <h4 className="font-bold uppercase tracking-[0.3em] text-xs mb-4 text-[#2B4D6C]">The Administration</h4>
            <h1 className="text-4xl md:text-7xl font-playfair font-bold text-[#2B4D6C] mb-6 uppercase leading-tight break-words">
              A Legacy of <br /> Transformation
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic border-l-4 border-red-600 pl-6">
              "To lead is to serve. Our focus remains on the tangible progress of our people, 
              from the depths of our mines to the horizons of our blue economy."
            </p>
          </div>
          <div className="relative w-full overflow-hidden">
            <img 
              src="/kanzu.png" 
              alt="CS Ali Hassan Joho in official attire" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`w-full h-auto object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 ${imageProtection}`}
            />
          </div>
        </div>
      </section>

      {/* PILLAR 1: POLITICAL LEADERSHIP */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-playfair font-bold text-[#2B4D6C] mb-6 uppercase">The Coastal Kingpin</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Widely regarded as the undisputed leader of Coastal politics, Ali Hassan Joho has 
              wielded significant influence in uniting the region. During his tenure as 
              Mombasa Governor, he consolidated the coastal voting bloc into a formidable 
              pillar of national discourse.
            </p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden">
            <img 
              src="/mombasa.png" 
              alt="Political Leadership in Mombasa" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`w-full h-64 md:h-80 object-cover shadow-lg rounded-sm ${imageProtection}`} 
            />
          </div>
        </div>
      </section>

      {/* PILLAR 2: CABINET ROLE */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-playfair font-bold text-[#2B4D6C] mb-6 uppercase">Cabinet Secretary Mandate</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              As of 2024, he leads the Ministry of Mining, Blue Economy, and Maritime Affairs. 
              His leadership is aimed at transforming these sectors to increase local community 
              benefits and ensure the sustainable management of Kenya’s natural resources.
            </p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden">
            <img 
              src="/mining.png" 
              alt="Ministry of Mining Initiatives" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`w-full h-64 md:h-80 object-cover shadow-lg rounded-sm ${imageProtection}`} 
            />
          </div>
        </div>
      </section>

      {/* PILLAR 3: PRAGMATIC APPROACH */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-playfair font-bold text-[#2B4D6C] mb-6 uppercase">Pragmatism Over Ideology</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Described as a flexible leader who prioritizes outcomes, CS Joho navigates the 
              complexities between the opposition and government with a focus on regional 
              benefits. His approach is defined by results rather than strict political dogma.
            </p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden">
            <img 
              src="/leadership.png" 
              alt="Diplomatic and Pragmatic Leadership" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`w-full h-64 md:h-80 object-cover shadow-lg rounded-sm ${imageProtection}`} 
            />
          </div>
        </div>
      </section>

      {/* PILLAR 4: VISIONARY DEVELOPMENT */}
      <section className="py-20 md:py-24 bg-[#2B4D6C] text-white">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-playfair font-bold mb-6 uppercase italic">Development-Focused Vision</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              His vision is anchored in infrastructure. From the Mombasa-Malindi and 
              Lunga Lunga highways to enhancing healthcare systems and boosting the 
              blue economy, his focus remains on building the backbone of a modern Kenya.
            </p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden">
            <img 
              src="/unveiling.png" 
              alt="Unveiling Major Projects" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`w-full h-64 md:h-80 object-cover border-4 border-white/20 ${imageProtection}`} 
            />
          </div>
        </div>
      </section>

      {/* PILLAR 5: BACKGROUND */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-playfair font-bold text-[#2B4D6C] mb-6 uppercase tracking-tighter">Public Service Background</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              A career built on the ground: Served as Kisauni MP, Assistant Minister for Transport, 
              and two historic terms as Mombasa Governor. He has built a lasting reputation 
              for being a charismatic and hands-on leader.
            </p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden">
            <img 
              src="/county.png" 
              alt="Legacy of County Governance" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`w-full h-64 md:h-80 object-cover shadow-lg rounded-sm ${imageProtection}`} 
            />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Leadership;