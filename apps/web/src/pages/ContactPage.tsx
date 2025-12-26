import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { RevealOnScroll } from '../components/ui';
import { Button } from '../components/ui';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@sengiku.studio',
      href: 'mailto:hello@sengiku.studio',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote • Global',
      href: '#',
    },
  ];

  return (
    <div className="pt-32 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealOnScroll>
            <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="text-xs font-medium text-gray-600">Get in Touch</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 text-primary">
              Let's build something{' '}
              <span className="relative inline-block">
                <span className="relative z-10">amazing</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -rotate-1"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <RevealOnScroll>
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm sticky top-32">
                <h2 className="font-display font-bold text-2xl mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Prefer to reach out directly? Use the contact methods below.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                          <Icon size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-400 mb-1">{info.label}</div>
                          <div className="text-gray-800 font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span>Typically responds within 24 hours</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <RevealOnScroll delay={200}>
              <div className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        >
                          <option value="">Select project type</option>
                          <option value="frontend">Frontend Development</option>
                          <option value="fullstack">Full Stack Custom</option>
                          <option value="cms">Headless CMS</option>
                          <option value="team">Dedicated Dev Team</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* FAQ Section */}
        <RevealOnScroll delay={300}>
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm mb-20">
            <h2 className="font-display font-bold text-3xl mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold text-lg mb-2">How long does a project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary based on scope and complexity. Most projects range from 4-12 weeks. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2">What's your development process?</h3>
                <p className="text-gray-600">
                  We follow an agile methodology with regular sprints, updates, and staging deployments. You'll have full visibility into the development process.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2">Do you provide ongoing support?</h3>
                <p className="text-gray-600">
                  Yes! We offer maintenance and support packages to ensure your project continues to perform optimally after launch.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2">Can you work with our existing team?</h3>
                <p className="text-gray-600">
                  Absolutely. We're experienced in collaborating with in-house teams and can integrate seamlessly into your workflow.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

