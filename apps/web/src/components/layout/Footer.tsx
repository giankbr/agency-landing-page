import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Dribbble, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from '../ui';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Process', to: '/process' },
      { label: 'Blog', to: '/blog' },
    ],
    company: [
      { label: 'About', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'Careers', to: '#', badge: 'Hiring' },
      { label: 'Blog', to: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-800' },
    { icon: Dribbble, label: 'Dribbble', href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-20 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="md:col-span-4 lg:col-span-5">
              <RevealOnScroll>
                <Link to="/" className="inline-block mb-6 group">
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 29.383 18.806" className="h-8 w-auto group-hover:scale-105 transition-transform">
                      <g>
                        <path d="M 18.696 0 L 7.808 18.772 L 0 18.772 L 10.887 0 Z M 29.07 0 L 18.696 18.772 L 10.887 18.772 L 21.775 0 Z" fill="#09090B"/>
                        <path d="M 25.992 12.054 C 27.865 12.054 29.383 13.565 29.383 15.43 C 29.383 17.294 27.865 18.806 25.992 18.806 C 24.119 18.806 22.6 17.294 22.6 15.43 C 22.6 13.565 24.119 12.054 25.992 12.054 Z" fill="#E1443A"/>
                      </g>
                    </svg>
                    <span className="font-display font-bold text-2xl tracking-tight">sengiku.</span>
                  </div>
                </Link>
                
                <RevealOnScroll delay={100}>
                  <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
                    We architect scalable, high-performance web solutions for ambitious brands using cutting-edge technology.
                  </p>
                </RevealOnScroll>
                
                {/* Social Links */}
                <RevealOnScroll delay={200}>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className={`w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-sm ${social.color}`}
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </RevealOnScroll>
              </RevealOnScroll>
            </div>

            {/* Links Grid */}
            <div className="md:col-span-8 lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Product Links */}
                <RevealOnScroll delay={100} direction="right">
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
                      Product
                    </h4>
                    <ul className="space-y-3">
                      {footerLinks.product.map((link, index) => (
                        <li key={index}>
                          <Link
                            to={link.to}
                            className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                          >
                            {link.label}
                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>

                {/* Company Links */}
                <RevealOnScroll delay={200} direction="right">
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
                      Company
                    </h4>
                    <ul className="space-y-3">
                      {footerLinks.company.map((link, index) => (
                        <li key={index}>
                          <Link
                            to={link.to}
                            className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                          >
                            {link.label}
                            {link.badge && (
                              <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
                                {link.badge}
                              </span>
                            )}
                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>

                {/* Legal Links */}
                <RevealOnScroll delay={300} direction="right">
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
                      Legal
                    </h4>
                    <ul className="space-y-3">
                      {footerLinks.legal.map((link, index) => (
                        <li key={index}>
                          <Link
                            to={link.to}
                            className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                          >
                            {link.label}
                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <RevealOnScroll delay={400} direction="fade">
          <div className="py-6 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>© {currentYear} Sengiku Studio.</span>
                <span className="hidden sm:inline">All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
};
