import React, { useState, useEffect, useRef } from 'react';

export interface RevealOnScrollProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  duration?: number;
}

export const RevealOnScroll = ({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up',
  duration = 1000
}: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransformClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    }

    switch (direction) {
      case 'down':
        return 'opacity-0 translate-y-[-50px]';
      case 'left':
        return 'opacity-0 translate-x-[-50px]';
      case 'right':
        return 'opacity-0 translate-x-[50px]';
      case 'fade':
        return 'opacity-0';
      case 'scale':
        return 'opacity-0 scale-95';
      case 'up':
      default:
        return 'opacity-0 translate-y-[50px]';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out transform ${getTransformClasses()} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};
