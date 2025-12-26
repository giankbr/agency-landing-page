import { Link } from 'react-router-dom';
import { Layout as LayoutIcon, Code, TrendingUp, Users, Clock } from 'lucide-react';
import { RevealOnScroll } from '../ui';
import { Button } from '../ui';

export const BentoGrid = () => {
  return (
    <section className="py-32 px-4 bg-background relative">
      {/* Subtle transition gradient from top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">From idea to scale.<br/><span className="text-gray-400">We code your vision.</span></h2>
              <p className="text-gray-500 max-w-lg">Full-stack development solutions tailored to your technical requirements.</p>
            </div>
            <Link to="/contact"><Button>Start A Project</Button></Link>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Item 1 */}
          <RevealOnScroll className="md:col-span-1 h-full">
            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors">
                   <LayoutIcon className="text-gray-700" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">Frontend Development</h3>
                <p className="text-gray-500">Pixel-perfect React & Next.js applications with smooth animations.</p>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display font-bold text-3xl">$3,500</span>
                <span className="text-gray-400">starting at</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Item 2 - Large Center */}
          <RevealOnScroll delay={100} className="md:col-span-1 h-full">
            <div className="bg-primary text-white rounded-[32px] p-8 border border-gray-800 shadow-xl flex flex-col justify-between relative overflow-hidden h-full hover:scale-[1.02] transition-all duration-300 group">
               <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                   <Code className="text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">Full Stack Custom</h3>
                <p className="text-gray-400">Complex web apps requiring backend, database, and API integration.</p>
               </div>
               <div className="relative z-10 mt-8">
                 <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold mb-4">LIMITED AVAILABILITY</div>
                 <div className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-3xl">$12,000+</span>
                  <span className="text-gray-400">starts at</span>
                </div>
               </div>
               {/* Abstract Pattern */}
               <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle cx="150" cy="150" r="100" fill="white" />
                  </svg>
               </div>
            </div>
          </RevealOnScroll>

          {/* Item 3 */}
          <RevealOnScroll delay={200} className="md:col-span-1 h-full">
            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors">
                   <TrendingUp className="text-gray-700" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">Headless CMS</h3>
                <p className="text-gray-500">Sanity or Contentful integration for easy content management.</p>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display font-bold text-3xl">$5,000</span>
                <span className="text-gray-400">one time</span>
              </div>
            </div>
          </RevealOnScroll>
          
           {/* Item 4 - Wide Bottom */}
           <div className="md:col-span-3">
             <RevealOnScroll delay={300}>
               <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8 hover:shadow-md transition-all duration-300">
                 <div className="flex-1">
                    <div className="flex gap-4 mb-6">
                       <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1 rounded-full text-sm"><Users size={16}/> Senior Engineers</div>
                       <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1 rounded-full text-sm"><Clock size={16}/> Agile Sprints</div>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2">Dedicated Dev Team</h3>
                    <p className="text-gray-500">Hire a full squad of developers to accelerate your roadmap.</p>
                 </div>
                 <div className="flex-none">
                    <Button variant="outline" className="rounded-full">View Team Plans</Button>
                 </div>
               </div>
             </RevealOnScroll>
           </div>
        </div>
      </div>
    </section>
  );
};

