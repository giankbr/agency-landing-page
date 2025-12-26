import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '../ui';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 animate-fade-in-down">
      <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center justify-between gap-8 shadow-sm max-w-5xl w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <svg viewBox="0 0 29.383 18.806" className="h-6 w-auto group-hover:scale-105 transition-transform">
            <g>
              <path d="M 18.696 0 L 7.808 18.772 L 0 18.772 L 10.887 0 Z M 29.07 0 L 18.696 18.772 L 10.887 18.772 L 21.775 0 Z" fill="#09090B"/>
              <path d="M 25.992 12.054 C 27.865 12.054 29.383 13.565 29.383 15.43 C 29.383 17.294 27.865 18.806 25.992 18.806 C 24.119 18.806 22.6 17.294 22.6 15.43 C 22.6 13.565 24.119 12.054 25.992 12.054 Z" fill="#E1443A"/>
            </g>
          </svg>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">sengiku.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-primary flex items-center gap-1 transition-colors">Home</Link>
          <Link to="/case-studies" className="hover:text-primary flex items-center gap-1 transition-colors">Case Studies <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-full">New</span></Link>
          <Link to="/process" className="hover:text-primary transition-colors">Process</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
           <Link to="/contact" className="bg-primary text-white rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl">
             Start Project <ArrowRight size={16} />
           </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl p-6 shadow-xl flex flex-col gap-4 md:hidden border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 p-2 hover:bg-gray-50 rounded-lg">Home</Link>
          <Link to="/case-studies" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 p-2 hover:bg-gray-50 rounded-lg">Case Studies</Link>
          <Link to="/process" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 p-2 hover:bg-gray-50 rounded-lg">Process</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 p-2 hover:bg-gray-50 rounded-lg">Blog</Link>
          <div className="h-px bg-gray-100 my-2"></div>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full"><Button className="w-full">Start Project</Button></Link>
        </div>
      )}
    </nav>
  );
};

