import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white text-slate-700 py-10 border-t border-slate-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <p className="text-sm">© {new Date().getFullYear()} The Office of Ali Hassan Joho. All Rights Reserved.</p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="https://www.youtube.com/@hassanjoho_001" target="_blank" rel="noreferrer" 
             className="text-xl text-slate-500 hover:text-red-600 transition-colors">
            <FaYoutube />
          </a>
          <a href="https://x.com/HassanAliJoho" target="_blank" rel="noreferrer" 
             className="text-xl text-slate-500 hover:text-black transition-colors">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/joho_001/" target="_blank" rel="noreferrer" 
             className="text-xl text-slate-500 hover:text-pink-600 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/alihassanjoho" target="_blank" rel="noreferrer" 
             className="text-xl text-slate-500 hover:text-blue-700 transition-colors">
            <FaFacebookF />
          </a>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline underline-offset-4">Privacy Policy</a>
          <a href="#" className="hover:underline underline-offset-4">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;