import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "The Office", path: "/office" },
    { name: "Scheduling", path: "/schedule" },
    { name: "Contact", path: "/contact" },   
    { name: "The Joho Leadership", path: "/leadership" },  
  ];

  const isHomePage = location.pathname === "/";
  const isLeadershipPage = location.pathname === "/leadership";

  const textColor = isLeadershipPage ? "text-[#2B4D6C]" : "text-white";
  const menuBtnColor = (isHomePage || isLeadershipPage) ? "text-[#2B4D6C]" : "text-white";

  const isActive = (path) => location.pathname === path;

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 md:py-8">
      <div className="container mx-auto px-6 flex justify-end items-center">
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className={`flex space-x-8 ${textColor} text-base font-semibold tracking-wide transition-colors duration-300`}>
            {navLinks.map((link) => (
              <li key={link.name} className="relative cursor-pointer group">
                <Link to={link.path} className="pb-1">
                  {link.name}
                  <span className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 
                    ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'} 
                    ${isLeadershipPage ? 'bg-red-600' : 'bg-white'}`} 
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`${isOpen ? "text-white" : menuBtnColor} text-4xl focus:outline-none z-[100] relative`}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Drawer - Added 'invisible' logic to prevent horizontal scroll */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#2B4D6C] z-[90] 
        transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl overflow-y-auto
        ${isOpen ? "translate-x-0 visible" : "translate-x-full invisible"}`}>
        
        <div className="flex flex-col items-start pt-32 px-10 space-y-10">
          <h4 className="text-blue-300 text-[10px] uppercase tracking-[0.4em] font-bold opacity-50">Navigation</h4>
          
          <div className="flex flex-col space-y-8 w-full">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold uppercase tracking-widest block transition-all relative z-[110]
                  ${isActive(link.path) 
                    ? 'text-red-400 border-l-4 border-red-400 pl-4' 
                    : 'text-white hover:text-red-300 pl-0'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-10 border-t border-white/10 w-full">
            <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
              © 2026 The Republic of Kenya<br/>Executive Office
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;