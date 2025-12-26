import { RevealOnScroll } from '../ui';

export const Stats = () => {
  const stats = [
    { value: '500+', label: 'Successful projects deployed', desc: 'We build high-impact websites and apps that scale.' },
    { value: '240%', label: 'Average traffic increase', desc: 'Performance-first engineering that ranks and converts.' },
    { value: '$100M+', label: 'Client funding raised', desc: 'Through strategic MVP development and product iteration.' }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
           <RevealOnScroll>
             <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Sengiku makes it scalable,<br/><span className="text-gray-400">and delivers results.</span></h2>
           </RevealOnScroll>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <RevealOnScroll key={i} delay={i * 100} className="h-full">
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full group">
                <div className="font-display font-bold text-5xl mb-4 text-primary group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
                <div className="font-display font-bold text-xl mb-4 text-gray-800">{stat.label}</div>
                <p className="text-gray-500 leading-relaxed">{stat.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

