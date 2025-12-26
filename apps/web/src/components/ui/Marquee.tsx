import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee = ({ 
  children, 
  direction = 'left', 
  speed = 50,
  pauseOnHover = true,
  className = '' 
}: MarqueeProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/50 via-white/20 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/50 via-white/20 to-transparent z-10 pointer-events-none"></div>
      
      <div 
        className={`flex ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} ${pauseOnHover ? '[&:hover]:[animation-play-state:paused]' : ''}`}
        style={{ 
          animationDuration: `${speed}s`,
        }}
      >
        <div className="flex shrink-0 gap-16">
          {children}
        </div>
        <div className="flex shrink-0 gap-16" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};
