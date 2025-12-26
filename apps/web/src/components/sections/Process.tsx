import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../ui';
import { Button } from '../ui';

export const Process = () => {
  const steps = [
    { num: '01', title: 'Discovery & Architecture', desc: 'We map out your technical requirements and design the system architecture.' },
    { num: '02', title: 'Development Sprints', desc: 'Agile development cycles with regular updates and staging deployments.' },
    { num: '03', title: 'QA & Testing', desc: 'Rigorous testing across devices, browsers, and performance metrics.' },
    { num: '04', title: 'Deployment & Scale', desc: 'Smooth launch with CI/CD pipelines and post-launch monitoring.' }
  ];

  return (
    <section className="py-32 px-4 bg-white relative">
      {/* Subtle transition gradient from top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        <div className="md:w-1/3 md:sticky md:top-32 h-fit">
          <RevealOnScroll>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">Proven engineering process.<br/><span className="text-gray-400">That ships code.</span></h2>
            <p className="text-gray-500 mb-8">We treat your product with the engineering rigor it deserves, ensuring security, speed, and scalability.</p>
            <Link to="/contact"><Button>Start Project</Button></Link>
          </RevealOnScroll>
        </div>
        <div className="md:w-2/3 flex flex-col gap-8">
          {steps.map((step, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="flex gap-6 p-6 md:p-8 rounded-[32px] border border-gray-100 bg-background hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default">
                <div className="flex-none w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center font-display font-bold text-gray-400 group-hover:text-primary group-hover:border-primary transition-all bg-white shadow-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

