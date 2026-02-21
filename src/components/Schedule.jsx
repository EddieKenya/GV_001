import React from 'react';

const Scheduling = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-lora">
      {/* HERO SECTION: OFFICIAL REQUEST HEADING */}
      <section className="bg-[#2B4D6C] py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h4 className="font-bold uppercase tracking-[0.3em] text-xs mb-4 text-blue-200">The Republic of Kenya</h4>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 italic uppercase">
            Scheduling Request
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-80 italic">
            Please complete the official form below to request a meeting, speaking engagement, 
            or official appearance with the Cabinet Secretary for Mining, Blue Economy and Maritime Affairs.
          </p>
        </div>
      </section>

      {/* FORM SECTION: THE EXECUTIVE REQUEST */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <form className="space-y-12">
            
            {/* STEP 1: GENERAL INFORMATION */}
            <div>
              <h2 className="text-2xl font-playfair font-bold text-[#2B4D6C] border-b-2 border-slate-100 pb-4 mb-8 uppercase tracking-tight">
                1. Invitation Details
              </h2>
              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Nature of Request</label>
                  <select className="w-full border-2 border-slate-200 p-4 rounded-none focus:border-[#2B4D6C] outline-none transition-all">
                    <option>Official Meeting / Consultation</option>
                    <option>Speaking Engagement</option>
                    <option>Site Visit / Inspection</option>
                    <option>Diplomatic / International Delegation</option>
                    <option>Media Interview</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Name of Host Organization</label>
                  <input type="text" placeholder="e.g. Kenya Chamber of Mines" className="w-full border-2 border-slate-200 p-4 rounded-none focus:border-[#2B4D6C] outline-none transition-all" />
                </div>
              </div>
            </div>

            {/* STEP 2: LOGISTICS */}
            <div>
              <h2 className="text-2xl font-playfair font-bold text-[#2B4D6C] border-b-2 border-slate-100 pb-4 mb-8 uppercase tracking-tight">
                2. Event Logistics
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Proposed Date</label>
                  <input type="date" className="w-full border-2 border-slate-200 p-4 rounded-none focus:border-[#2B4D6C] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Location / Venue</label>
                  <input type="text" placeholder="City or Full Address" className="w-full border-2 border-slate-200 p-4 rounded-none focus:border-[#2B4D6C] outline-none transition-all" />
                </div>
              </div>
              <div className="mt-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Brief Description of the Event / Meeting Goal</label>
                <textarea rows="4" className="w-full border-2 border-slate-200 p-4 rounded-none focus:border-[#2B4D6C] outline-none transition-all" placeholder="How does this align with the Ministry's strategic pillars?"></textarea>
              </div>
            </div>

            {/* STEP 3: CONTACT INFORMATION */}
            <div>
              <h2 className="text-2xl font-playfair font-bold text-[#2B4D6C] border-b-2 border-slate-100 pb-4 mb-8 uppercase tracking-tight">
                3. Point of Contact
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Contact Person Name</label>
                  <input type="text" className="w-full border-2 border-slate-200 p-4 rounded-none focus:border-[#2B4D6C] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Official Email Address</label>
                  <input type="email" className="w-full border-2 border-slate-200 p-4 rounded-none focus:border-[#2B4D6C] outline-none transition-all" />
                </div>
              </div>
            </div>

            {/* ATTACHMENTS & SUBMIT */}
            <div className="bg-slate-50 p-10 border border-slate-200">
              <h3 className="font-bold text-sm uppercase mb-4 tracking-widest text-[#2B4D6C]">Formal Invitation (Optional)</h3>
              <p className="text-sm text-slate-500 mb-6">If you have a formal letter from your organization, please upload it as a PDF.</p>
              <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-6 file:rounded-none file:border-0 file:text-xs file:font-bold file:uppercase file:bg-[#2B4D6C] file:text-white hover:file:bg-red-600 transition-all cursor-pointer" />
            </div>

            <button type="submit" className="w-full bg-[#2B4D6C] text-white py-6 font-bold uppercase tracking-[0.3em] text-sm hover:bg-red-600 transition-all shadow-xl">
              Submit Official Request
            </button>

            <p className="text-center text-xs text-slate-400 mt-8 italic">
              Note: All requests are subject to security clearance and the Cabinet Secretary's national schedule. 
              The Office of the CS will contact you within 5-7 business days.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Scheduling;