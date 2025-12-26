import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { RevealOnScroll } from '../ui';
import { Button } from '../ui';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sengiku completely redefined our digital presence. Their engineering approach and attention to performance boosted our conversion rate significantly.",
      author: "Julian Ortega",
      role: "CTO at Finlytics",
      image: "https://framerusercontent.com/images/UKNBT47BxbtxXCLRDY5cWmNUeYQ.jpg?width=320"
    },
    {
      quote: "Super smooth experience—launched our SaaS in no time! The code quality is incredible and the app feels premium out of the box.",
      author: "Daniel K",
      role: "Founder at StartupX",
      image: "https://framerusercontent.com/images/AEQsxb2QlSXIvQcf0rFoLl3DcQc.png?width=320"
    },
    {
      quote: "Exactly what I needed to kickstart my project. Sengiku's team understands modern web stacks like no one else.",
      author: "Leo M.",
      role: "Product Manager",
      image: "https://framerusercontent.com/images/EfXMIMfdWjgI3EibNMgVqMZNCE0.png?width=468"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-32 px-4 bg-gray-50 overflow-hidden relative">
      {/* Subtle transition gradient from top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Static Text */}
        <RevealOnScroll direction="right">
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">We're loved.<br/><span className="text-gray-400">For our code quality.</span></h2>
            <RevealOnScroll delay={100} direction="fade">
              <p className="text-gray-500 text-lg mb-8 max-w-md">
                See what our partners have to say about their experience working with Sengiku to build their digital products.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={200} direction="fade">
              <Button variant="outline" className="rounded-full">View All Reviews</Button>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
        
        {/* Right Side: Carousel */}
        <RevealOnScroll delay={200} direction="left">
          <div className="relative h-[400px] w-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={index}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 transition-all duration-700 ease-in-out transform
                    ${isActive ? 'opacity-100 scale-100 z-20 rotate-0' : 'opacity-0 scale-95 z-10 rotate-3'}
                  `}
                >
                   <div className="flex gap-1 text-yellow-400 mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                   </div>
                   <p className="text-xl font-medium text-gray-800 mb-8 leading-relaxed">"{testimonial.quote}"</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                         <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-primary">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                   </div>
                </div>
              );
            })}
            
            {/* Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
