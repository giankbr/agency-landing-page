import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '../ui';
import { Button } from '../ui';

export const Projects = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Here's what<br/><span className="text-gray-400">momentum looks like.</span></h2>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <RevealOnScroll>
            <div className="group cursor-pointer">
              <div className="rounded-[32px] overflow-hidden mb-6 relative shadow-md">
                <img src="https://framerusercontent.com/images/MAVstedJYqQvsrJ7l1kxjR498.jpg?scale-down-to=1024" alt="Atlas" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-primary transition-colors">Atlas Technologies</h3>
                  <div className="flex gap-2 mt-2">
                     <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">SaaS Platform</span>
                     <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">React</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Project 2 */}
          <RevealOnScroll delay={200} className="md:mt-20">
            <div className="group cursor-pointer">
              <div className="rounded-[32px] overflow-hidden mb-6 relative shadow-md">
                <img src="https://framerusercontent.com/images/1KCYDj61X5Ycm5Vp5kluuhMho.png?scale-down-to=1024" alt="Finlytics" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-primary transition-colors">Finlytics</h3>
                  <div className="flex gap-2 mt-2">
                     <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">Mobile App</span>
                     <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">React Native</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
          
           {/* Project 3 */}
           <RevealOnScroll>
            <div className="group cursor-pointer">
              <div className="rounded-[32px] overflow-hidden mb-6 relative shadow-md">
                <img src="https://framerusercontent.com/images/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png?scale-down-to=1024" alt="Orbital" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-primary transition-colors">Orbital Bank</h3>
                  <div className="flex gap-2 mt-2">
                     <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">Fintech</span>
                     <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">Next.js</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
            </div>
           </RevealOnScroll>

           {/* Project 4 */}
           <RevealOnScroll delay={200} className="md:mt-20">
            <div className="group cursor-pointer">
              <div className="rounded-[32px] overflow-hidden mb-6 relative shadow-md">
                <img src="https://framerusercontent.com/images/TwCiV5MUt16Q38ftZYKlEhNhbJI.png?scale-down-to=1024" alt="Echo" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-primary transition-colors">Echo Analytics</h3>
                  <div className="flex gap-2 mt-2">
                     <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">Dashboard</span>
                     <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">Vue.js</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
            </div>
           </RevealOnScroll>
        </div>

        <div className="mt-20 flex justify-center">
          <RevealOnScroll delay={300}>
            <Link to="/case-studies"><Button>View All Projects</Button></Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

