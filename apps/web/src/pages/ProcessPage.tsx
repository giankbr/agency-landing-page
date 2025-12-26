import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../components/ui';
import { Button } from '../components/ui';
import { Process, Stats } from '../components/sections';

export const ProcessPage = () => (
  <div className="pt-32 min-h-screen bg-white">
     <div className="max-w-6xl mx-auto px-4 mb-20 text-center">
      <RevealOnScroll>
        <div className="inline-block bg-gray-100 rounded-full px-4 py-1.5 mb-6">
           <span className="text-xs font-medium text-gray-600">The Methodology</span>
        </div>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-6 text-primary">How We Work</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          A transparent, agile process designed to ship high-quality products fast without compromising on engineering rigor.
        </p>
      </RevealOnScroll>
    </div>
    <Process />
    <div className="bg-background border-t border-gray-100">
      <Stats />
    </div>
    <div className="py-32 px-4 text-center relative">
        {/* Subtle transition gradient from top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10">
        <h2 className="font-display font-extrabold text-3xl mb-8">Ready to start your journey?</h2>
        <Link to="/contact"><Button>Book a Consultation</Button></Link>
        </div>
    </div>
  </div>
);

