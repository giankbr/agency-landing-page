import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { RevealOnScroll } from '../components/ui';
import { blogPosts } from '../data/blogPosts';

export const BlogPage = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="pt-32 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 mb-20 text-center">
        <RevealOnScroll>
          <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-xs font-medium text-gray-600">Latest Articles</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-6 text-primary">Blog</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on web development, design, and building products that scale.
          </p>
        </RevealOnScroll>
      </div>

      <div className="max-w-6xl mx-auto px-4 mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 100}>
              <Link to={`/blog/${post.id}`}>
              <article className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white text-primary text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="font-display font-extrabold text-2xl mb-4 text-primary group-hover:text-primary/80 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-300" />
                      <span className="text-gray-500">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-300" />
                      <span className="text-gray-500">{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-300" />
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

