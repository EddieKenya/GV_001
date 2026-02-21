import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Scheduling = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRequest = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mimicking the executive dispatch delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2500);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 animate-fadeInFast">
        <div className="bg-white p-12 shadow-2xl max-w-2xl w-full border-t-8 border-[#2B4D6C] text-center">
          <img src="/arms.png" alt="Logo" className="w-16 h-16 mx-auto mb-6 opacity-20" />
          <h2 className="text-3xl font-playfair font-bold text-[#2B4D6C] mb-4 uppercase tracking-tighter">Request Logged</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Your scheduling request has been successfully submitted to the **Protocol Department**. 
            The **Office of the CS** will review your invitation and reach out to you via official channels 
            within 5-7 business days.
          </p>
          
          <div className="flex flex-col gap-4 items-center">
            <Link 
              to="/" 
              className="w-full bg-[#2B4D6C] text-white py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-red-600 transition-all shadow-lg"
            >
              Return to Website
            </Link>
            
            <button 
              onClick={() => setIsSubmitted(false)} 
              className="text-[#2B4D6C] font-bold uppercase text-[10px] tracking-[0.3em] hover:text-red-600 transition-colors pt-2 border-b border-transparent hover:border-red-600 transition-all"
            >
              File Another Request
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 font-lora">
      <section className="bg-[#2B4D6C] py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h4 className="font-bold uppercase tracking-[0.3em] text-xs mb-4 text-blue-200">The Republic of Kenya</h4>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 italic uppercase">Scheduling Request</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-80 italic">Please complete the official form below to request a meeting, speaking engagement, or official appearance with the Cabinet Secretary.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <form onSubmit={handleRequest} className="space-y-12">
            <div>
              <h2 className="text-2xl font-playfair font-bold text-[#2B4D6C] border-b-2 border-slate-100 pb-4 mb-8 uppercase tracking-tight">1. Invitation Details</h2>
              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Nature of Request</label>
                  <select required className="w-full border-2 border-slate-200 p-4 focus:border-[#2B4D6C] outline-none bg-white">
                    <option>Official Meeting / Consultation</option>
                    <option>Speaking Engagement</option>
                    <option>Site Visit / Inspection</option>
                    <option>Diplomatic / International Delegation</option>
                    <option>Media Interview</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Name of Host Organization</label>
                  <input required type="text" placeholder="e.g. Kenya Chamber of Mines" className="w-full border-2 border-slate-200 p-4 outline-none focus:border-[#2B4D6C]" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-playfair font-bold text-[#2B4D6C] border-b-2 border-slate-100 pb-4 mb-8 uppercase tracking-tight">2. Event Logistics</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Proposed Date</label>
                  <input required type="date" className="w-full border-2 border-slate-200 p-4 outline-none focus:border-[#2B4D6C]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Location / Venue</label>
                  <input required type="text" placeholder="City or Full Address" className="w-full border-2 border-slate-200 p-4 outline-none focus:border-[#2B4D6C]" />
                </div>
              </div>
              <div className="mt-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Brief Description of the Event / Meeting Goal</label>
                <textarea required rows="4" className="w-full border-2 border-slate-200 p-4 outline-none focus:border-[#2B4D6C]" placeholder="How does this align with the Ministry's strategic pillars?"></textarea>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-playfair font-bold text-[#2B4D6C] border-b-2 border-slate-100 pb-4 mb-8 uppercase tracking-tight">3. Point of Contact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Contact Person Name</label>
                  <input required type="text" className="w-full border-2 border-slate-200 p-4 outline-none focus:border-[#2B4D6C]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Official Email Address</label>
                  <input required type="email" className="w-full border-2 border-slate-200 p-4 outline-none focus:border-[#2B4D6C]" />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 border border-slate-200">
              <h3 className="font-bold text-sm uppercase mb-4 tracking-widest text-[#2B4D6C]">Formal Invitation (Optional)</h3>
              <p className="text-sm text-slate-500 mb-6">If you have a formal letter from your organization, please upload it as a PDF.</p>
              <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-6 file:bg-[#2B4D6C] file:text-white file:border-0 file:text-xs file:font-bold file:uppercase hover:file:bg-red-600 transition-all cursor-pointer" />
            </div>

            <button 
              disabled={isSubmitting} 
              type="submit" 
              className="w-full bg-[#2B4D6C] text-white py-6 font-bold uppercase tracking-[0.3em] text-sm hover:bg-red-600 transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing Protocol...' : 'Submit Official Request'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Scheduling;