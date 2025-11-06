"use client";

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Parallax effect on scroll (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return; // Skip on mobile
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
        
        if (scrollProgress > 0 && scrollProgress < 1) {
          const translateY = (1 - scrollProgress) * 20;
          card.style.transform = `translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with real-time inventory management and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      title: 'Healthcare App',
      category: 'Mobile Development',
      description: 'Patient management system with appointment scheduling and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      link: '#',
      github: '#',
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Application',
      description: 'Real-time analytics dashboard for tracking financial metrics and KPIs.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Next.js', 'PostgreSQL', 'Chart.js'],
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Platform',
      category: 'Full Stack',
      description: 'Community-driven social network with real-time messaging and content sharing.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      tags: ['React', 'Express', 'WebSocket'],
      link: '#',
      github: '#',
    },
    {
      title: 'AI Chatbot',
      category: 'Machine Learning',
      description: 'Intelligent customer service chatbot powered by natural language processing.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      tags: ['Python', 'TensorFlow', 'FastAPI'],
      link: '#',
      github: '#',
    },
    {
      title: 'Logistics Tracker',
      category: 'IoT & Web',
      description: 'Real-time package tracking system with GPS integration and delivery optimization.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold inter mb-4">
            Our <span className="holographic-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 gradient-nepal mx-auto mb-6 rounded-full animate-gradientShift" />
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto poppins px-4">
            Showcasing our recent projects and innovative solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="hover-lift gradient-border rounded-2xl overflow-hidden cursor-pointer h-full">
                {/* Image container with reveal effect */}
                <div className="relative h-40 sm:h-48 overflow-hidden bg-[#1a237e]/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay with glassmorphism */}
                  <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      className="w-10 h-10 md:w-12 md:h-12 modern-card rounded-full flex items-center justify-center hover:border-[#1565c0] transition-all hover:scale-110 animate-pulse-glow"
                    >
                      <ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-[#1565c0]" />
                    </a>
                    <a
                      href={project.github}
                      className="w-10 h-10 md:w-12 md:h-12 modern-card rounded-full flex items-center justify-center hover:border-[#ffc107] transition-all hover:scale-110 animate-pulse-glow delay-100"
                    >
                      <Github className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107]" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 glass-effect">
                  <div className="text-xs sm:text-sm text-[#ffc107] font-semibold mb-2 inter neon-text">
                    {project.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold inter mb-2 group-hover:text-[#1565c0] transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 poppins mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 text-xs rounded-full modern-card border border-[#1565c0]/30 text-gray-300 hover:border-[#1565c0] hover:text-[#1565c0] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="/contact"
            className="inline-block px-6 md:px-8 py-3 md:py-4 gradient-border rounded-xl font-semibold hover:scale-110 transition-all duration-300 text-sm sm:text-base"
          >
            Have a Project in Mind?
          </a>
        </div>
      </div>
    </section>
  );
}