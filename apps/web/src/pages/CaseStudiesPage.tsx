import { RevealOnScroll } from '../components/ui';
import { Projects } from '../components/sections';

export const CaseStudiesPage = () => (
  <div className="pt-32 min-h-screen">
    <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
      <RevealOnScroll>
        <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
           <span className="text-xs font-medium text-gray-600">Selected Work 2023-2025</span>
        </div>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-6 text-primary">Our Case Studies</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Deep dives into how we've helped ambitious brands scale through engineering excellence and strategic design.
        </p>
      </RevealOnScroll>
    </div>
    <Projects />
  </div>
);

