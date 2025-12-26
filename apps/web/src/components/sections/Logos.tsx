import { RevealOnScroll } from '../ui';
import { Marquee } from '../ui/Marquee';

const logos = [
  'Acme Corp',
  'Quantum',
  'APEX',
  'Celestial',
  'Finite',
  'Nexus',
  'Vortex',
  'Apex Labs',
];

export const Logos = () => {
  return (
    <section className="py-12 border-y border-gray-200 bg-white/50">
      <div className="container mx-auto px-4">
        <RevealOnScroll delay={200}>
          <p className="text-sm text-gray-500 mb-8 font-medium uppercase tracking-wider text-center">
            Powering digital experiences for industry leaders
          </p>
          
          <div className="relative">
            <Marquee direction="left" speed={30} pauseOnHover={true}>
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className="font-display font-bold text-xl text-gray-400 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 whitespace-nowrap px-4"
                >
                  {logo}
                </div>
              ))}
            </Marquee>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
