import React from 'react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "CS Joho Revokes All Mining Licenses in Major Sector Cleanup",
      excerpt: "In a bold move to streamline the industry, the Cabinet Secretary has suspended licenses to weed out illegal operators and speculators.",
      image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=800",
      link: "https://www.standardmedia.co.ke/national/article/2001501458/cs-joho-revokes-all-mining-licenses",
      date: "February 2026",
      category: "Mining Reform"
    },
    {
      id: 2,
      title: "Blue Economy: Kenya Secures Sh2B for Coastal Development",
      excerpt: "CS Joho announces a massive investment aimed at empowering local fishermen and improving maritime infrastructure along the coast.",
      image: "https://images.unsplash.com/photo-1520444433342-c3610f494bc2?auto=format&fit=crop&q=80&w=800",
      link: "https://www.nation.africa/kenya/business/joho-secures-funding-for-blue-economy-projects-4521342",
      date: "January 2026",
      category: "Maritime Affairs"
    },
    {
      id: 3,
      title: "Kenya to Host International Mining & Mineral Summit",
      excerpt: "Under Joho's leadership, Kenya prepares to welcome global investors to showcase the nation's untapped mineral potential.",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80&w=800",
      link: "https://www.the-star.co.ke/news/2026-02-15-joho-to-host-major-mineral-summit/",
      date: "February 2026",
      category: "Global Investment"
    },
    {
      id: 4,
      title: "Artisanal Miners to be Formalized into Cooperatives",
      excerpt: "A new directive ensures small-scale miners receive government support and access to better markets through structured groups.",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
      link: "https://www.citizen.digital/news/joho-pledges-to-formalize-artisanal-mining-sector-n335678",
      date: "December 2025",
      category: "Social Impact"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="border-b-4 border-[#2B4D6C] pb-8 mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#2B4D6C] uppercase italic">
            Press Room
          </h1>
          <p className="font-lora text-lg text-slate-600 mt-4">
            Official updates and media coverage from the Ministry of Mining, Blue Economy and Maritime Affairs.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {newsArticles.map((article) => (
            <a 
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden border border-slate-200"
            >
              {/* Image Thumbnail */}
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-red-600 font-bold uppercase text-xs tracking-widest block mb-2">
                    {article.category}
                  </span>
                  <h2 className="font-playfair text-2xl font-bold text-[#2B4D6C] leading-tight group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-lora text-slate-600 mt-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="mt-6 flex justify-between items-center border-t pt-4">
                  <span className="text-xs font-bold text-slate-400 uppercase">{article.date}</span>
                  <span className="text-[#2B4D6C] font-bold text-xs uppercase group-hover:underline">Read Full Article ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Media Contact Footer */}
        <div className="mt-20 bg-[#2B4D6C] p-10 text-center text-white">
          <h3 className="font-playfair text-2xl mb-4 italic">Media Inquiries</h3>
          <p className="font-lora opacity-80 max-w-2xl mx-auto">
            For official statements, interview requests, or high-resolution media assets, 
            please contact the Ministry's Communications Department.
          </p>
          <button className="mt-8 border-2 border-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#2B4D6C] transition-all">
            Contact Press Office
          </button>
        </div>

      </div>
    </main>
  );
};

export default News;