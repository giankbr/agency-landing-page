import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, RevealOnScroll } from '../ui';

export const Hero = () => {
  return (
    <section className="pt-40 pb-32 px-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <RevealOnScroll>
          <div className="bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 flex items-center gap-2 shadow-sm w-fit mx-auto">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-600">Accepting new clients for Q2</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[80px] leading-[1.1] text-primary mb-8 tracking-tight">
            Custom Web Development <br /> For Ambitious Brands
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            We architect scalable, high-performance web solutions for startups and enterprises using cutting-edge technology to drive growth and user engagement.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link to="/contact">
              <Button className="w-full sm:w-auto">
                Start A Project <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="secondary" className="w-full sm:w-auto">
                View Our Work
              </Button>
            </Link>
          </div>
        </RevealOnScroll>
      </div>

      {/* Floating Images (Decorative) */}
      <div className="absolute top-1/2 -right-20 md:right-10 w-48 md:w-64 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-6 hidden lg:block opacity-80 pointer-events-none transition-transform hover:scale-105 duration-500">
        <RevealOnScroll delay={800} className="w-full h-full">
          <img src="https://framerusercontent.com/images/IEkAyD8FxrKesSO05azGbu6cOU.jpg?scale-down-to=512" alt="Hero 1" className="w-full h-full object-cover" />
        </RevealOnScroll>
      </div>
      <div className="absolute top-1/3 -left-20 md:left-10 w-48 md:w-64 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl -rotate-6 hidden lg:block opacity-80 pointer-events-none transition-transform hover:scale-105 duration-500">
        <RevealOnScroll delay={1000} className="w-full h-full">
          <img src="https://framerusercontent.com/images/fTIxNsAqL5kAuPvnKO17blaBlqc.jpg?scale-down-to=512" alt="Hero 2" className="w-full h-full object-cover" />
        </RevealOnScroll>
      </div>
    </section>
  );
};
