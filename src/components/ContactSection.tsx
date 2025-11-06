"use client";

import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Email',
      content: 'info@devscriptnepal.com',
      link: 'mailto:info@devscriptnepal.com',
    },
    {
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Phone',
      content: '+977 9876543210',
      link: 'tel:+9779876543210',
    },
    {
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Location',
      content: 'Kathmandu, Nepal',
      link: '#',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-[#0a0e1a]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold inter mb-4">
            Get In <span className="text-[#ffc107]">Touch</span>
          </h2>
          <div className="w-24 h-1 gradient-nepal mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto poppins px-4">
            Let's discuss how we can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="modern-card rounded-2xl p-6 md:p-8 h-full shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold inter mb-4 md:mb-6 text-[#ffc107]">
                Contact Information
              </h3>
              <p className="text-sm sm:text-base text-gray-300 poppins mb-6 md:mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400 poppins">{info.title}</div>
                      <div className="text-sm sm:text-base md:text-lg font-semibold group-hover:text-[#ffc107] transition-colors break-words">
                        {info.content}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social proof */}
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#1565c0]/20">
                <p className="text-gray-400 poppins text-xs sm:text-sm mb-4">Follow us on social media</p>
                <div className="flex gap-3 md:gap-4">
                  {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-9 h-9 md:w-10 md:h-10 rounded-lg modern-card flex items-center justify-center hover:border-[#1565c0] transition-all duration-300 text-xs sm:text-sm"
                    >
                      {platform[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="modern-card rounded-2xl p-6 md:p-8 space-y-4 md:space-y-6 shadow-lg">
              {showSuccess && (
                <div className="p-3 md:p-4 gradient-gold rounded-lg text-[#0a0e1a] font-semibold text-center text-sm sm:text-base">
                  Thank you! We'll get back to you soon.
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2 poppins text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl modern-card border border-[#1565c0]/30 focus:border-[#1565c0] focus:outline-none focus:ring-2 focus:ring-[#1565c0]/50 transition-all duration-300 bg-transparent text-white text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2 poppins text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl modern-card border border-[#1565c0]/30 focus:border-[#1565c0] focus:outline-none focus:ring-2 focus:ring-[#1565c0]/50 transition-all duration-300 bg-transparent text-white text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold mb-2 poppins text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl modern-card border border-[#1565c0]/30 focus:border-[#1565c0] focus:outline-none focus:ring-2 focus:ring-[#1565c0]/50 transition-all duration-300 bg-transparent text-white text-sm sm:text-base"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-2 poppins text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl modern-card border border-[#1565c0]/30 focus:border-[#1565c0] focus:outline-none focus:ring-2 focus:ring-[#1565c0]/50 transition-all duration-300 bg-transparent text-white resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 md:px-8 py-3 md:py-4 gradient-gold rounded-xl text-[#0a0e1a] font-semibold hover:shadow-xl hover:shadow-[#ffc107]/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group text-sm sm:text-base"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}