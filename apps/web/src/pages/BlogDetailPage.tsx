import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { RevealOnScroll } from '../components/ui';
import { getBlogPostById } from '../data/blogPosts';

export const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : null;

  if (!post) {
    return (
      <div className="pt-40 text-center min-h-[50vh]">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-gray-500 mb-6">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-accent hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="pt-32 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative mb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-12 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to Blog</span>
            </Link>
          </RevealOnScroll>

          <div className="mb-16">
            <RevealOnScroll delay={100}>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white border border-gray-200 text-primary text-sm font-semibold px-4 py-2 rounded-full">
                  {post.category}
                </span>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-tight">
                {post.title}
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-4xl">
                {post.excerpt}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="flex flex-wrap items-center gap-8 text-gray-500 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <User size={18} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Author</div>
                    <span className="font-semibold text-gray-700">{post.author}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Calendar size={18} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Published</div>
                    <span className="font-semibold text-gray-700">{formatDate(post.date)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Clock size={18} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Read time</div>
                    <span className="font-semibold text-gray-700">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={500}>
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <RevealOnScroll>
          <article className="prose prose-lg prose-gray max-w-none">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-[1.8]">
                This is a placeholder for the blog post content. In a real application, this would contain the full article content, including paragraphs, headings, code blocks, images, and other rich media elements.
              </p>
              
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary mt-16 mb-6 pt-8 border-t border-gray-200">
                Introduction
              </h2>
              
              <p className="text-lg text-gray-700 leading-[1.8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="text-lg text-gray-700 leading-[1.8]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary mt-16 mb-6 pt-8 border-t border-gray-200">
                Key Points
              </h2>
              
              <ul className="space-y-4 text-lg text-gray-700 leading-[1.8] list-none pl-0">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>First important point about the topic with more detailed explanation that provides valuable insights to the readers.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Second key insight or technique that provides value to readers and helps them understand the concept better.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Third valuable piece of information that enhances understanding and provides practical guidance for implementation.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Fourth practical tip or recommendation for implementation that readers can apply in their own projects.</span>
                </li>
              </ul>
              
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary mt-16 mb-6 pt-8 border-t border-gray-200">
                Conclusion
              </h2>
              
              <p className="text-lg text-gray-700 leading-[1.8]">
                In conclusion, this blog post has covered the essential aspects of the topic. We've explored various approaches and best practices that can help you implement these concepts in your own projects.
              </p>
              
              <p className="text-lg text-gray-700 leading-[1.8]">
                Remember to experiment, iterate, and always keep learning. The web development landscape is constantly evolving, and staying up-to-date with the latest trends and techniques is crucial for success.
              </p>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </div>
  );
};

