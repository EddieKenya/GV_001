import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added for navigation

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 2000);
  };

  const socials = [
    { name: 'X', url: 'https://x.com/HassanAliJoho' },
    { name: 'Instagram', url: 'https://www.instagram.com/joho_001/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/h-e-hassan-ali-joho-53580182/' }
  ];

  if (status === 'success') {
    return (
      <main className="min-h-screen bg-[#2B4D6C] flex items-center justify-center text-white p-6 animate-fadeInFast">
        <div className="text-center max-w-xl">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-4xl font-playfair font-bold mb-4 uppercase tracking-tight">Message Dispatched</h2>
          <p className="text-blue-100 italic mb-12 leading-relaxed">
            Your communication has been securely transmitted. The Secretariat will review your correspondence and respond via official channels.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setStatus('idle')} 
              className="w-full md:w-auto border border-white/30 px-8 py-4 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-white hover:text-[#2B4D6C] transition-all"
            >
              Return to Form
            </button>
            
            <Link 
              to="/" 
              className="w-full md:w-auto bg-red-600 px-8 py-4 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl"
            >
              Exit to Homepage
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 font-lora">
      <section className="bg-[#2B4D6C] py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h4 className="font-bold uppercase tracking-[0.4em] text-xs mb-4 text-blue-200">The Executive Office</h4>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 italic uppercase">Direct Engagement</h1>
          <p className="max-w-2xl mx-auto text-xl opacity-90 italic">
            "My door is always open to ideas that advance our nation's mineral wealth and 
            maritime potential. Let us build this future together."
          </p>
          <p className="mt-4 font-bold uppercase tracking-widest text-sm">— Hon. Ali Hassan Joho, EGH</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-20 items-start">
          <div className="bg-white">
            <h2 className="text-3xl font-playfair font-bold text-[#2B4D6C] mb-8 uppercase tracking-tighter italic">Message the Cabinet Secretary</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b-2 border-slate-200 focus-within:border-[#2B4D6C] transition-all">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Your Full Name</label>
                  <input required type="text" className="w-full py-3 bg-transparent outline-none text-lg" placeholder="John Doe" />
                </div>
                <div className="border-b-2 border-slate-200 focus-within:border-[#2B4D6C] transition-all">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                  <input required type="email" className="w-full py-3 bg-transparent outline-none text-lg" placeholder="john@example.com" />
                </div>
              </div>

              <div className="border-b-2 border-slate-200 focus-within:border-[#2B4D6C] transition-all">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Topic of Discussion</label>
                <select className="w-full py-3 bg-transparent outline-none text-lg appearance-none">
                  <option>Strategic Partnership Idea</option>
                  <option>Community Advocacy</option>
                  <option>International Investment</option>
                  <option>Policy Recommendation</option>
                  <option>Personal Greeting</option>
                </select>
              </div>

              <div className="border-b-2 border-slate-200 focus-within:border-[#2B4D6C] transition-all">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Your Message to the CS</label>
                <textarea required rows="5" className="w-full py-3 bg-transparent outline-none text-lg resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button disabled={status === 'sending'} className="w-full md:w-auto bg-[#2B4D6C] text-white px-16 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-red-600 transition-all shadow-2xl disabled:opacity-50">
                {status === 'sending' ? 'Transmitting...' : 'Deliver Message to the Office'}
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#2B4D6C] mb-8 uppercase tracking-tighter">The Secretariat</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                To ensure efficiency and prompt attention to national matters, the Cabinet 
                Secretary is supported by a dedicated executive staff. For urgent 
                administrative matters, please contact the relevant desks below:
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center shrink-0 font-playfair font-bold text-[#2B4D6C]">01</div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-xs text-red-600 mb-1">Executive Assistant</h3>
                  <p className="text-lg font-bold">Scheduling & Personal Appearances</p>
                  <p className="text-slate-500">scheduling@hassanjoho.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center shrink-0 font-playfair font-bold text-[#2B4D6C]">02</div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-xs text-red-600 mb-1">Communications Director</h3>
                  <p className="text-lg font-bold">Press, Media & Public Statements</p>
                  <p className="text-slate-500">press@hassanjoho.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center shrink-0 font-playfair font-bold text-[#2B4D6C]">03</div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-xs text-red-600 mb-1">Advisory Team</h3>
                  <p className="text-lg font-bold">Policy & Investment Proposals</p>
                  <p className="text-slate-500">advisor@hassanjoho.com</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-100">
              <h3 className="font-bold uppercase tracking-widest text-[10px] text-slate-400 mb-4">Direct Social Channels</h3>
              <div className="flex gap-8">
                {socials.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[#2B4D6C] font-bold hover:text-red-600 transition-colors uppercase text-xs tracking-widest">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;