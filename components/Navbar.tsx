import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Tech', href: '#tech' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
              <Bot className="h-6 w-6 text-primary-400" />
            </div>
            <span className="font-bold text-xl tracking-tight">Automate</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/923149525452"
                className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary-500/20 flex items-center gap-1"
              >
                Book Strategy Call <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/923149525452"
              className="w-full mt-4 bg-primary-600 text-white px-5 py-3 rounded-lg text-base font-medium flex justify-center items-center"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;