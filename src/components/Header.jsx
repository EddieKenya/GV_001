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

  // Identifies which pages have light backgrounds at the top
  const isHomePage = location.pathname === "/";
  const isLeadershipPage = location.pathname === "/leadership";

  // Text color logic for Desktop: Only dark on Leadership as you requested
  const textColor = isLeadershipPage ? "text-[#2B4D6C]" : "text-white";

  // Mobile Menu Icon logic: Needs to be dark on Home AND Leadership to be visible
  const menuBtnColor = (isHomePage || isLeadershipPage) ? "text-[#2B4D6C]" : "text-white";

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 md:py-8">
      <div className="container mx-auto px-6 flex justify-end items-center">
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className={`flex space-x-8 ${textColor} text-base font-semibold tracking-wide transition-colors duration-300`}>
            {navLinks.map((link) => (
              <li key={link.name} className="hover:underline underline-offset-4 cursor-pointer transition-all">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className={`${isOpen ? "text-white" : menuBtnColor} text-4xl focus:outline-none z-50 relative transition-colors duration-300`}
          >
            {/* The icon now switches to black on Homepage so it's visible against the white mobile hero */}
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#2B4D6C] z-40 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-[#F3F3F3] text-2xl font-bold uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;