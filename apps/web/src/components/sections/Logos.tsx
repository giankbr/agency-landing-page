import { RevealOnScroll } from '../ui';

export const Logos = () => {
  return (
    <section className="py-12 border-y border-gray-200 bg-white/50">
      <div className="container mx-auto px-4 text-center">
        <RevealOnScroll delay={200}>
          <p className="text-sm text-gray-500 mb-8 font-medium uppercase tracking-wider">Powering digital experiences for industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="font-display font-bold text-xl">Acme Corp</div>
             <div className="font-display font-bold text-xl">Quantum</div>
             <div className="font-display font-bold text-xl">APEX</div>
             <div className="font-display font-bold text-xl">Celestial</div>
             <div className="font-display font-bold text-xl">Finite</div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

