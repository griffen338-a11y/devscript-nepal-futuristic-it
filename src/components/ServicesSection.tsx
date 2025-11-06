"use client";

import { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';

export default function ServicesSection() {
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

  // 3D tilt effect on mouse move (desktop only)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (window.innerWidth < 768) return; // Skip on mobile
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.setProperty('--rotate-x', `${-rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  const services = [
    {
      icon: <Code className="w-10 h-10 md:w-12 md:h-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance.',
      color: 'text-[#1565c0]',
    },
    {
      icon: <Smartphone className="w-10 h-10 md:w-12 md:h-12" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
      color: 'text-[#ffc107]',
    },
    {
      icon: <Globe className="w-10 h-10 md:w-12 md:h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with user experience at the forefront of every decision.',
      color: 'text-[#1565c0]',
    },
    {
      icon: <Database className="w-10 h-10 md:w-12 md:h-12" />,
      title: 'Database Solutions',
      description: 'Scalable database architecture and optimization for efficient data management and retrieval.',
      color: 'text-[#c62828]',
    },
    {
      icon: <Cloud className="w-10 h-10 md:w-12 md:h-12" />,
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud Platform.',
      color: 'text-[#1565c0]',
    },
    {
      icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your applications and data from cyber threats.',
      color: 'text-[#ffc107]',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e1a] to-transparent opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold inter mb-4">
            Our <span className="holographic-text">Services</span>
          </h2>
          <div className="w-24 h-1 gradient-nepal mx-auto mb-6 rounded-full animate-gradientShift" />
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto poppins px-4">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-3d gradient-border rounded-2xl p-6 md:p-8 h-full cursor-pointer">
                <div className="relative z-10">
                  {/* Icon with neon glow */}
                  <div className={`mb-4 md:mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300 animate-neonGlow`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold inter mb-3 md:mb-4 group-hover:text-[#ffc107] transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 poppins leading-relaxed mb-4 md:mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center text-[#1565c0] font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm">
                    <span className="mr-2">Learn More</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-base sm:text-lg text-gray-300 mb-6 poppins px-4">
            Don't see what you're looking for? We offer custom solutions too.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 md:px-8 py-3 md:py-4 gradient-gold rounded-xl text-[#0a0e1a] font-semibold hover:shadow-xl hover:shadow-[#ffc107]/30 transition-all duration-300 hover:scale-110 text-sm sm:text-base"
          >
            Get Custom Solution
          </a>
        </div>
      </div>
    </section>
  );
}