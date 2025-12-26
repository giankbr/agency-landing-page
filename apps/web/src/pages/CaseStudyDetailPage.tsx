import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, CheckCircle, TrendingUp, Zap, Shield, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '../components/ui';
import { Button } from '../components/ui';
import { getCaseStudyById } from '../data/caseStudies';

export const CaseStudyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : null;

  if (!caseStudy) {
    return (
      <div className="pt-40 text-center min-h-[50vh]">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-gray-500 mb-6">The case study you're looking for doesn't exist.</p>
        <Link to="/case-studies">
          <Button>Back to Case Studies</Button>
        </Link>
      </div>
    );
  }

  const totalDuration = caseStudy.process.reduce((acc, phase) => {
    const weeks = parseInt(phase.duration);
    return acc + (isNaN(weeks) ? 0 : weeks);
  }, 0);

  return (
    <div className="pt-32 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <Link 
              to="/case-studies"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to Case Studies</span>
            </Link>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <RevealOnScroll direction="right">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {caseStudy.overview}
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="left">
              <div className="rounded-[32px] overflow-hidden shadow-xl">
                <img 
                  src={caseStudy.heroImage} 
                  alt={caseStudy.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Quick Stats */}
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.results.slice(0, 4).map((result, index) => (
                <div key={index} className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                  <div className="text-3xl font-display font-bold text-primary mb-2">{result.value}</div>
                  <div className="text-sm font-medium text-gray-600 mb-1">{result.metric}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{result.description}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Challenge Section */}
        <section className="mb-32 relative">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/30 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10">
          <RevealOnScroll>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <Zap className="text-red-600" size={20} />
                </div>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl">{caseStudy.challenge.title}</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                {caseStudy.challenge.description}
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-3">
            {caseStudy.challenge.points.map((point, index) => (
              <RevealOnScroll key={index} delay={index * 100 + 100} direction="right">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-32 relative">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/30 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10">
          <RevealOnScroll>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl">{caseStudy.solution.title}</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
                {caseStudy.solution.description}
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-8">
              <h3 className="font-display font-bold text-xl mb-6">Our Approach</h3>
              <div className="space-y-4">
                {caseStudy.solution.approach.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-green-600" size={14} />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
              <h3 className="font-display font-bold text-xl mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.solution.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mb-32 relative">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/30 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Our Process</h2>
              <p className="text-gray-600 text-lg">A transparent look at how we delivered this project</p>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            {caseStudy.process.map((phase, index) => (
              <RevealOnScroll key={index} delay={index * 100} direction="up">
                <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl mb-1">{phase.phase}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock size={16} />
                          <span>{phase.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-3">Deliverables:</div>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, dIndex) => (
                        <div key={dIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={500} direction="fade">
            <div className="mt-12 text-center bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-3">
                <Clock size={20} />
                <span className="font-medium">Total Project Duration</span>
              </div>
              <div className="font-display font-bold text-4xl text-primary">{totalDuration} weeks</div>
            </div>
          </RevealOnScroll>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-32 relative">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/30 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10">
          <RevealOnScroll>
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <TrendingUp className="text-primary" size={20} />
                </div>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl">Results & Impact</h2>
              </div>
              <RevealOnScroll delay={100}>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">
                  The numbers speak for themselves. Here's the measurable impact we delivered:
                </p>
              </RevealOnScroll>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <RevealOnScroll key={index} delay={index * 100 + 200} direction="up">
                    <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100">
                      <div className="text-4xl font-display font-bold text-primary mb-2">{result.value}</div>
                      <div className="text-lg font-medium text-gray-800 mb-2">{result.metric}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{result.description}</div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          </div>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className="mb-32 relative">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/30 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
            <RevealOnScroll>
              <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center">
                    <Shield className="text-yellow-600" size={20} />
                  </div>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl">Client Testimonial</h2>
                </div>
                <RevealOnScroll delay={100}>
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                      <img 
                        src={caseStudy.testimonial.image} 
                        alt={caseStudy.testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-primary">{caseStudy.testimonial.author}</div>
                      <div className="text-sm text-gray-500">{caseStudy.testimonial.role}</div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </RevealOnScroll>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <RevealOnScroll delay={300}>
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 md:p-12 text-center mb-20">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
              Ready to start your project?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help bring your vision to life with the same level of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="group">
                  Start a Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline">View More Case Studies</Button>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};
