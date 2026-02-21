import React from 'react';

const Office = () => {
  // Global protection constants
  const imageProtection = "select-none pointer-events-none user-select-none";
  const disableRightClick = (e) => e.preventDefault();

  return (
    <main className="min-h-screen bg-white text-slate-900 font-lora">
      {/* SECTION 1: CONSTITUTIONAL MANDATE */}
      <section className="relative bg-[#2B4D6C] py-24 text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h4 className="font-bold uppercase tracking-[0.4em] text-xs mb-4 text-blue-200">Official Mandate</h4>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8 uppercase leading-tight">
            The Office of the <br /> Cabinet Secretary
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-white opacity-90 leading-relaxed italic">
            "Tasked under the Executive Order of the Republic of Kenya to lead the sustainable 
            management of mineral wealth and the strategic expansion of the Blue Economy for national prosperity."
          </p>
        </div>
      </section>

      {/* SECTION 2: MINING & LAND RESOURCES (QUARRY) */}
      <section className="py-24 border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-playfair font-bold text-[#2B4D6C] mb-6 uppercase tracking-tighter">
              Mineral Wealth & <br /> Land Resources
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              The primary objective of this office is to transition Kenya from a raw mineral exporter 
              to a value-addition powerhouse. By providing regulatory oversight to sites like 
              industrial quarries, we ensure environmental compliance while maximizing the 
              revenue returned to local communities.
            </p>
            <div className="bg-slate-50 border-l-4 border-red-600 p-6">
              <p className="font-bold text-[#2B4D6C] uppercase text-sm mb-2">Strategic Goal:</p>
              <p className="italic text-slate-600">Decentralizing testing laboratories to mining zones to reduce costs for artisanal miners.</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/quarry.png" 
              alt="Industrial Quarry Operations" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`rounded-sm shadow-2xl w-full h-[500px] object-cover ${imageProtection}`}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: BLUE ECONOMY (FISHERMAN) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-playfair font-bold text-[#2B4D6C] mb-6 uppercase tracking-tighter">
              Sustainable <br /> Blue Economy
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Under CS Joho's leadership, the office is modernizing the fishing sector. By 
              providing advanced gear and building cold-chain infrastructure, we are ensuring 
              that the Kenyan fisherman can advance further into the ocean, capturing 
              higher-value markets and securing our food supply.
            </p>
            <ul className="space-y-4 font-bold text-[#2B4D6C] uppercase text-sm">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-red-600"></span> Deep Sea Capacity Building
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-red-600"></span> Maritime Safety & Security
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/fisherman.png" 
              alt="Fisherman advancing to the ocean" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`rounded-sm shadow-2xl w-full h-[600px] object-cover ${imageProtection}`}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: MARITIME GOVERNANCE (MARITIMENEW) */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="/Maritimenew.png" 
              alt="Maritime Policy Infrastructure" 
              draggable="false"
              onContextMenu={disableRightClick}
              className={`w-full h-auto drop-shadow-xl ${imageProtection}`}
            />
          </div>
          <div>
            <h2 className="text-4xl font-playfair font-bold text-[#2B4D6C] mb-6 uppercase">
              Maritime Affairs <br /> & Global Logistics
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The office is constitutionally obligated to protect Kenya's maritime corridors. 
              Our design for the future involves the full automation of port services and 
              the expansion of the maritime labor force to meet international standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-t-2 border-slate-200 pt-4">
                <p className="text-3xl font-bold text-red-600 font-playfair italic">01</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Port Modernization</p>
              </div>
              <div className="border-t-2 border-slate-200 pt-4">
                <p className="text-3xl font-bold text-red-600 font-playfair italic">02</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">EEZ Surveillance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Office;