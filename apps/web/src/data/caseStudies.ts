export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  heroImage: string;
  overview: string;
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
    techStack: string[];
  };
  process: {
    phase: string;
    duration: string;
    description: string;
    deliverables: string[];
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  images?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'atlas-technologies',
    title: 'Atlas Technologies',
    client: 'Atlas Technologies',
    category: 'SaaS Platform',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    heroImage: 'https://framerusercontent.com/images/MAVstedJYqQvsrJ7l1kxjR498.jpg?scale-down-to=1024',
    overview: 'Atlas Technologies needed a modern, scalable SaaS platform to manage their enterprise workflow solutions. We built a comprehensive platform that handles complex data processing, real-time collaboration, and advanced analytics.',
    challenge: {
      title: 'The Challenge',
      description: 'Atlas was struggling with legacy systems that couldn\'t scale with their growing user base. They needed a platform that could handle millions of data points while maintaining sub-second response times.',
      points: [
        'Legacy system couldn\'t handle more than 10,000 concurrent users',
        'Data processing took hours instead of minutes',
        'Poor user experience leading to high churn rate',
        'No real-time collaboration features',
        'Difficult to add new features due to monolithic architecture'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We architected a modern microservices-based platform with a focus on performance, scalability, and developer experience. The solution leverages cutting-edge technologies to deliver a seamless user experience.',
      approach: [
        'Designed microservices architecture for independent scaling',
        'Implemented real-time data synchronization using WebSockets',
        'Built custom caching layer reducing API response time by 85%',
        'Created intuitive dashboard with advanced filtering and analytics',
        'Established CI/CD pipeline for rapid feature deployment'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GraphQL']
    },
    process: [
      {
        phase: 'Discovery & Planning',
        duration: '2 weeks',
        description: 'We conducted extensive user research and technical analysis to understand the core requirements and pain points.',
        deliverables: ['Technical architecture document', 'User journey maps', 'API specifications', 'Database schema design']
      },
      {
        phase: 'Development Sprint 1',
        duration: '3 weeks',
        description: 'Built core authentication, user management, and basic dashboard functionality.',
        deliverables: ['User authentication system', 'Role-based access control', 'Dashboard UI components', 'API endpoints']
      },
      {
        phase: 'Development Sprint 2',
        duration: '3 weeks',
        description: 'Implemented data processing engine and real-time collaboration features.',
        deliverables: ['Data processing pipeline', 'WebSocket integration', 'Real-time updates', 'Notification system']
      },
      {
        phase: 'Development Sprint 3',
        duration: '2 weeks',
        description: 'Added advanced analytics, reporting, and optimization features.',
        deliverables: ['Analytics dashboard', 'Custom reports', 'Performance optimizations', 'Mobile responsive design']
      },
      {
        phase: 'Testing & Launch',
        duration: '2 weeks',
        description: 'Comprehensive testing, bug fixes, and production deployment.',
        deliverables: ['QA testing report', 'Performance benchmarks', 'Production deployment', 'Documentation']
      }
    ],
    results: [
      {
        metric: 'Performance Improvement',
        value: '85%',
        description: 'Reduced API response time from 2.5s to 0.4s average'
      },
      {
        metric: 'User Growth',
        value: '340%',
        description: 'Increased active users from 8K to 35K in 6 months'
      },
      {
        metric: 'Uptime',
        value: '99.9%',
        description: 'Achieved 99.9% uptime with zero critical incidents'
      },
      {
        metric: 'Development Speed',
        value: '3x',
        description: 'New features deployed 3x faster with microservices architecture'
      }
    ],
    testimonial: {
      quote: 'Sengiku completely transformed our platform. The performance improvements alone have been game-changing. Our users love the new experience, and our engineering team can now ship features at unprecedented speed.',
      author: 'Sarah Chen',
      role: 'CTO at Atlas Technologies',
      image: 'https://framerusercontent.com/images/UKNBT47BxbtxXCLRDY5cWmNUeYQ.jpg?width=320'
    }
  },
  {
    id: 'finlytics',
    title: 'Finlytics',
    client: 'Finlytics',
    category: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Stripe', 'TypeScript'],
    heroImage: 'https://framerusercontent.com/images/1KCYDj61X5Ycm5Vp5kluuhMho.png?scale-down-to=1024',
    overview: 'Finlytics needed a mobile-first financial analytics app that could help users track investments, analyze market trends, and make informed financial decisions on the go.',
    challenge: {
      title: 'The Challenge',
      description: 'Building a financial app that handles sensitive data, real-time market updates, and complex calculations while maintaining a smooth user experience on both iOS and Android.',
      points: [
        'Real-time market data synchronization across devices',
        'Complex financial calculations with high accuracy requirements',
        'Secure handling of sensitive financial information',
        'Offline functionality for critical features',
        'Cross-platform consistency between iOS and Android'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We built a React Native app with a robust backend infrastructure, implementing real-time data streaming, offline-first architecture, and bank-level security.',
      approach: [
        'Implemented real-time market data streaming using WebSockets',
        'Built offline-first architecture with local data caching',
        'Integrated secure payment processing with Stripe',
        'Created intuitive charts and visualization components',
        'Implemented push notifications for market alerts'
      ],
      techStack: ['React Native', 'TypeScript', 'Firebase', 'Stripe', 'Redux', 'Recharts', 'React Native Paper']
    },
    process: [
      {
        phase: 'Research & Design',
        duration: '2 weeks',
        description: 'User interviews, competitive analysis, and mobile-first design system creation.',
        deliverables: ['User personas', 'Mobile UI/UX designs', 'App architecture', 'Security requirements']
      },
      {
        phase: 'Core Development',
        duration: '4 weeks',
        description: 'Built authentication, portfolio tracking, and basic market data features.',
        deliverables: ['User authentication', 'Portfolio management', 'Market data integration', 'Core UI components']
      },
      {
        phase: 'Advanced Features',
        duration: '3 weeks',
        description: 'Added analytics, charts, notifications, and payment integration.',
        deliverables: ['Analytics dashboard', 'Interactive charts', 'Push notifications', 'Payment processing']
      },
      {
        phase: 'Testing & Optimization',
        duration: '2 weeks',
        description: 'Comprehensive testing, performance optimization, and App Store preparation.',
        deliverables: ['QA testing', 'Performance optimization', 'App Store assets', 'Beta testing']
      }
    ],
    results: [
      {
        metric: 'App Store Rating',
        value: '4.8/5',
        description: 'Consistently high ratings from 15K+ users'
      },
      {
        metric: 'User Retention',
        value: '78%',
        description: '78% monthly active user retention rate'
      },
      {
        metric: 'Load Time',
        value: '1.2s',
        description: 'Average app load time under 1.2 seconds'
      },
      {
        metric: 'Crash Rate',
        value: '0.1%',
        description: 'Less than 0.1% crash rate across all devices'
      }
    ],
    testimonial: {
      quote: 'The team at Sengiku delivered beyond our expectations. The app performs flawlessly, and our users consistently praise the smooth experience. Launching on both platforms simultaneously was seamless.',
      author: 'Julian Ortega',
      role: 'CTO at Finlytics',
      image: 'https://framerusercontent.com/images/UKNBT47BxbtxXCLRDY5cWmNUeYQ.jpg?width=320'
    }
  },
  {
    id: 'orbital-bank',
    title: 'Orbital Bank',
    client: 'Orbital Bank',
    category: 'Fintech',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    heroImage: 'https://framerusercontent.com/images/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png?scale-down-to=1024',
    overview: 'Orbital Bank needed a modern digital banking platform that could compete with established players while maintaining the highest security standards and regulatory compliance.',
    challenge: {
      title: 'The Challenge',
      description: 'Building a secure, compliant banking platform that handles sensitive financial transactions while providing a modern, user-friendly experience.',
      points: [
        'Strict regulatory compliance requirements (PCI DSS, GDPR)',
        'Real-time transaction processing with zero downtime',
        'Multi-factor authentication and fraud detection',
        'Complex account management and reporting',
        'Integration with multiple banking APIs'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We built a secure, scalable Next.js platform with server-side rendering for performance, implementing bank-grade security and seamless third-party integrations.',
      approach: [
        'Implemented PCI DSS compliant payment processing',
        'Built real-time transaction monitoring and fraud detection',
        'Created comprehensive admin dashboard for account management',
        'Integrated with multiple banking APIs and payment gateways',
        'Implemented advanced security features including 2FA and biometric auth'
      ],
      techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS', 'Redis', 'Tailwind CSS']
    },
    process: [
      {
        phase: 'Security & Compliance',
        duration: '3 weeks',
        description: 'Security audit, compliance planning, and architecture design with security-first approach.',
        deliverables: ['Security architecture', 'Compliance checklist', 'Risk assessment', 'API security design']
      },
      {
        phase: 'Core Banking Features',
        duration: '5 weeks',
        description: 'Built account management, transactions, and payment processing with rigorous testing.',
        deliverables: ['Account management', 'Transaction processing', 'Payment gateway integration', 'Security features']
      },
      {
        phase: 'Advanced Features',
        duration: '3 weeks',
        description: 'Added analytics, reporting, admin dashboard, and mobile optimization.',
        deliverables: ['Analytics dashboard', 'Reporting system', 'Admin panel', 'Mobile optimization']
      },
      {
        phase: 'Security Testing & Launch',
        duration: '2 weeks',
        description: 'Penetration testing, security audits, and production deployment.',
        deliverables: ['Security audit report', 'Penetration testing', 'Production deployment', 'Compliance certification']
      }
    ],
    results: [
      {
        metric: 'Security Score',
        value: 'A+',
        description: 'Achieved A+ security rating from independent audit'
      },
      {
        metric: 'Transaction Volume',
        value: '$50M+',
        description: 'Processed over $50M in transactions in first quarter'
      },
      {
        metric: 'Uptime',
        value: '99.99%',
        description: '99.99% uptime with zero security incidents'
      },
      {
        metric: 'User Satisfaction',
        value: '94%',
        description: '94% of users rate the platform as excellent'
      }
    ],
    testimonial: {
      quote: 'Working with Sengiku was exceptional. They understood the critical importance of security in banking and delivered a platform that not only meets but exceeds regulatory requirements. Our customers love the experience.',
      author: 'Michael Park',
      role: 'Head of Digital Banking at Orbital',
      image: 'https://framerusercontent.com/images/AEQsxb2QlSXIvQcf0rFoLl3DcQc.png?width=320'
    }
  },
  {
    id: 'echo-analytics',
    title: 'Echo Analytics',
    client: 'Echo Analytics',
    category: 'Dashboard',
    tags: ['Vue.js', 'TypeScript', 'D3.js', 'Python'],
    heroImage: 'https://framerusercontent.com/images/TwCiV5MUt16Q38ftZYKlEhNhbJI.png?scale-down-to=1024',
    overview: 'Echo Analytics needed a powerful data visualization dashboard that could handle complex datasets and provide real-time insights for enterprise clients.',
    challenge: {
      title: 'The Challenge',
      description: 'Creating a dashboard that could visualize millions of data points in real-time while maintaining smooth performance and providing intuitive user experience.',
      points: [
        'Handling datasets with millions of rows',
        'Real-time data updates without performance degradation',
        'Complex custom visualizations and charts',
        'Multi-user collaboration and sharing',
        'Export functionality for reports and presentations'
      ]
    },
    solution: {
      title: 'Our Solution',
      description: 'We built a Vue.js dashboard with custom D3.js visualizations, implementing data virtualization and intelligent caching for optimal performance.',
      approach: [
        'Implemented data virtualization for handling large datasets',
        'Built custom D3.js visualizations for complex data representation',
        'Created real-time data streaming with WebSocket integration',
        'Developed collaborative features with live updates',
        'Built comprehensive export system for multiple formats'
      ],
      techStack: ['Vue.js', 'TypeScript', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets']
    },
    process: [
      {
        phase: 'Data Architecture',
        duration: '2 weeks',
        description: 'Designed data models, API structure, and visualization requirements.',
        deliverables: ['Data architecture', 'API design', 'Visualization specs', 'Performance requirements']
      },
      {
        phase: 'Core Dashboard',
        duration: '4 weeks',
        description: 'Built core dashboard, data fetching, and basic visualizations.',
        deliverables: ['Dashboard layout', 'Data integration', 'Basic charts', 'User interface']
      },
      {
        phase: 'Advanced Visualizations',
        duration: '3 weeks',
        description: 'Implemented custom visualizations, real-time updates, and collaboration features.',
        deliverables: ['Custom charts', 'Real-time updates', 'Collaboration features', 'Export functionality']
      },
      {
        phase: 'Optimization & Launch',
        duration: '2 weeks',
        description: 'Performance optimization, testing, and production deployment.',
        deliverables: ['Performance optimization', 'Testing suite', 'Documentation', 'Production deployment']
      }
    ],
    results: [
      {
        metric: 'Data Processing',
        value: '10M+',
        description: 'Can visualize datasets with 10M+ rows smoothly'
      },
      {
        metric: 'Load Time',
        value: '0.8s',
        description: 'Average dashboard load time under 0.8 seconds'
      },
      {
        metric: 'User Adoption',
        value: '92%',
        description: '92% of enterprise clients actively using the platform'
      },
      {
        metric: 'Performance',
        value: '60 FPS',
        description: 'Maintains 60 FPS even with complex visualizations'
      }
    ],
    testimonial: {
      quote: 'Echo Analytics has become essential to our workflow. The ability to visualize and analyze massive datasets in real-time has transformed how we make decisions. The performance is incredible.',
      author: 'Leo M.',
      role: 'Product Manager at Echo Analytics',
      image: 'https://framerusercontent.com/images/EfXMIMfdWjgI3EibNMgVqMZNCE0.png?width=468'
    }
  }
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.id === id);
};

