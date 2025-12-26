export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications: Best Practices',
    excerpt: 'Learn how to structure your React applications for scale, from component organization to state management strategies.',
    author: 'Sengiku Team',
    date: '2024-01-15',
    category: 'Development',
    readTime: '8 min read',
    image: 'https://framerusercontent.com/images/MAVstedJYqQvsrJ7l1kxjR498.jpg?scale-down-to=1024',
    tags: ['React', 'Best Practices', 'Architecture'],
  },
  {
    id: 'performance-optimization-nextjs',
    title: 'Performance Optimization in Next.js 14',
    excerpt: 'Deep dive into Next.js 14 performance features and how to leverage them for faster, more efficient applications.',
    author: 'Sengiku Team',
    date: '2024-01-10',
    category: 'Development',
    readTime: '6 min read',
    image: 'https://framerusercontent.com/images/1KCYDj61X5Ycm5Vp5kluuhMho.png?scale-down-to=1024',
    tags: ['Next.js', 'Performance', 'Web Vitals'],
  },
  {
    id: 'design-systems-modern-web',
    title: 'Design Systems for Modern Web Applications',
    excerpt: 'How to build and maintain design systems that scale with your team and product requirements.',
    author: 'Sengiku Team',
    date: '2024-01-05',
    category: 'Design',
    readTime: '10 min read',
    image: 'https://framerusercontent.com/images/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png?scale-down-to=1024',
    tags: ['Design', 'UI/UX', 'Systems'],
  },
  {
    id: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for Enterprise Apps',
    excerpt: 'Explore advanced TypeScript patterns and techniques that help build type-safe, maintainable enterprise applications.',
    author: 'Sengiku Team',
    date: '2023-12-28',
    category: 'Development',
    readTime: '12 min read',
    image: 'https://framerusercontent.com/images/TwCiV5MUt16Q38ftZYKlEhNhbJI.png?scale-down-to=1024',
    tags: ['TypeScript', 'Enterprise', 'Patterns'],
  },
  {
    id: 'api-design-best-practices',
    title: 'RESTful API Design: Best Practices and Patterns',
    excerpt: 'Learn how to design RESTful APIs that are intuitive, scalable, and developer-friendly.',
    author: 'Sengiku Team',
    date: '2023-12-20',
    category: 'Development',
    readTime: '9 min read',
    image: 'https://framerusercontent.com/images/IEkAyD8FxrKesSO05azGbu6cOU.jpg?scale-down-to=512',
    tags: ['API', 'Backend', 'REST'],
  },
  {
    id: 'modern-css-techniques',
    title: 'Modern CSS Techniques for 2024',
    excerpt: 'Discover the latest CSS features and techniques that can improve your development workflow and user experience.',
    author: 'Sengiku Team',
    date: '2023-12-15',
    category: 'Development',
    readTime: '7 min read',
    image: 'https://framerusercontent.com/images/fTIxNsAqL5kAuPvnKO17blaBlqc.jpg?scale-down-to=512',
    tags: ['CSS', 'Frontend', 'Styling'],
  },
];

export const getBlogPostById = (id: string): BlogPost | undefined =>
  blogPosts.find((post) => post.id === id);

