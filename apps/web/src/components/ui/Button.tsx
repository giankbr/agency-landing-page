import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'text';
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95';
  const variants = {
    primary: 'bg-primary text-white hover:bg-neutral-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-primary border border-gray-200 hover:bg-gray-50',
    accent: 'bg-accent text-white hover:bg-red-600 shadow-lg shadow-red-500/20',
    text: 'text-gray-600 hover:text-primary p-0',
    outline: 'border border-gray-200 bg-transparent text-primary hover:bg-gray-50'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

