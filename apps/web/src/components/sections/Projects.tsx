import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '../ui';
import { Button } from '../ui';

const projects = [
  {
    id: 'atlas-technologies',
    title: 'Atlas Technologies',
    image: 'https://framerusercontent.com/images/MAVstedJYqQvsrJ7l1kxjR498.jpg?scale-down-to=1024',
    tags: ['SaaS Platform', 'React'],
    offset: false,
  },
  {
    id: 'finlytics',
    title: 'Finlytics',
    image: 'https://framerusercontent.com/images/1KCYDj61X5Ycm5Vp5kluuhMho.png?scale-down-to=1024',
    tags: ['Mobile App', 'React Native'],
    offset: true,
  },
  {
    id: 'orbital-bank',
    title: 'Orbital Bank',
    image: 'https://framerusercontent.com/images/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png?scale-down-to=1024',
    tags: ['Fintech', 'Next.js'],
    offset: false,
  },
  {
    id: 'echo-analytics',
    title: 'Echo Analytics',
    image: 'https://framerusercontent.com/images/TwCiV5MUt16Q38ftZYKlEhNhbJI.png?scale-down-to=1024',
    tags: ['Dashboard', 'Vue.js'],
    offset: true,
  },
];

export const Projects = () => {
  return (
    <section className="py-32 px-4 bg-background relative">
      {/* Subtle transition gradient from top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Here's what<br/><span className="text-gray-400">momentum looks like.</span></h2>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index % 2 === 0 ? 0 : 200} className={project.offset ? 'md:mt-20' : ''}>
              <Link to={`/case-studies/${project.id}`} className="group cursor-pointer block">
                <div className="rounded-[32px] overflow-hidden mb-6 relative shadow-md">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 mt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight size={18} className="-rotate-45" />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <RevealOnScroll delay={300}>
            <Link to="/case-studies">
              <Button>View All Projects</Button>
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
