import React from 'react';
import { SquareTerminal } from 'lucide-react';

export const Navbar = () => {
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-secondary-bg border border-divider shadow-2xl relative overflow-hidden">
      
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

      <div className="flex items-center gap-3 cursor-pointer group z-10">
        <SquareTerminal className="w-7 h-7 text-[#38bdf8] group-hover:text-blue-400 transition-colors" strokeWidth={2.5} />
        <span className="text-white font-bold text-xl tracking-tight">Sumit Pati</span>
      </div>

      <div className="hidden md:flex items-center gap-8 z-10">
        {navLinks.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex items-center z-10">
        <button className="bg-[#38bdf8] hover:bg-[#0284c7] text-[#0f172a] hover:text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/20">
          Resume
        </button>
      </div>
    </nav>
  );
};
