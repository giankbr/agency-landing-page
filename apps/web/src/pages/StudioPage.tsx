import { RevealOnScroll } from '../components/ui';
import { Logos, Testimonials } from '../components/sections';

export const StudioPage = () => (
  <div className="pt-32 min-h-screen">
     <div className="max-w-6xl mx-auto px-4 mb-20 text-center">
      <RevealOnScroll>
        <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
           <span className="text-xs font-medium text-gray-600">About Sengiku</span>
        </div>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-6 text-primary">The Studio</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We are a collective of senior engineers, designers, and strategists passionate about building the future of the web.
        </p>
      </RevealOnScroll>
    </div>
    
    <div className="py-12 bg-white mb-20">
      <Logos />
    </div>

    <div className="py-32 px-4 relative">
       {/* Subtle transition gradient from top */}
       <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 via-transparent to-transparent pointer-events-none"></div>
       <div className="max-w-4xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <h3 className="font-display font-extrabold text-3xl mb-6">Our Philosophy</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We believe that great software is born at the intersection of design and engineering. We don't just write code; we craft experiences that drive growth.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our team is fully remote, globally distributed, and united by a passion for excellence. We value transparency, speed, and results.
                  </p>
               </div>
               <div className="relative">
                  <div className="aspect-square rounded-[32px] overflow-hidden bg-gray-100 rotate-3 shadow-xl">
                      <img src="https://framerusercontent.com/images/30H4QgT6gjZSasw0DBCbxLWLY.jpg" alt="Studio" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
          </RevealOnScroll>
       </div>
    </div>
    
    <Testimonials />
  </div>
);

