"use client";

import { useEffect, useRef, useState } from 'react';
import { Sparkles, Target, Users, Award } from 'lucide-react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to deliver solutions that exceed expectations.',
    },
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Goal-Oriented',
      description: 'Every project is meticulously planned and executed to meet your business objectives.',
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you every step of the way.',
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Quality Assured',
      description: 'We maintain the highest standards in code quality, security, and performance.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold inter mb-4">
            About <span className="holographic-text">DevScript Nepal</span>
          </h2>
          <div className="w-24 h-1 gradient-nepal mx-auto mb-6 rounded-full animate-gradientShift" />
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto poppins px-4">
            A leading IT startup based in Nepal, dedicated to transforming businesses through 
            innovative technology solutions and exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          {/* Left side - Story with glass effect */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-effect rounded-2xl p-6 md:p-8 h-full flex flex-col justify-center shadow-lg hover-lift gradient-border">
              <h3 className="text-2xl sm:text-3xl font-bold inter mb-4 md:mb-6 text-[#ffc107] neon-text">Our Story</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 md:mb-4 poppins leading-relaxed">
                Founded with a vision to revolutionize the IT landscape in Nepal, DevScript Nepal 
                has grown into a trusted partner for businesses seeking digital transformation.
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-3 md:mb-4 poppins leading-relaxed">
                Our team of expert developers, designers, and strategists work together to create 
                solutions that are not just functional, but extraordinary.
              </p>
              <p className="text-sm sm:text-base text-gray-300 poppins leading-relaxed">
                We believe in the power of technology to create positive change, and we're 
                committed to delivering excellence in every project we undertake.
              </p>
            </div>
          </div>

          {/* Right side - Features grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="modern-card p-4 md:p-6 rounded-xl hover-lift gradient-border group cursor-pointer"
                style={{ 
                  animationDelay: `${400 + index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? 'scaleIn 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="text-[#1565c0] mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 animate-neonGlow">
                  {feature.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold inter mb-2 group-hover:text-[#ffc107] transition-all duration-300">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 poppins">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission with enhanced effects */}
        <div className={`grid md:grid-cols-2 gap-6 md:gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-2xl p-6 md:p-8 hover-lift gradient-border">
            <h3 className="text-xl sm:text-2xl font-bold inter mb-3 md:mb-4 text-[#1565c0] neon-text">Our Vision</h3>
            <p className="text-sm sm:text-base text-gray-300 poppins leading-relaxed">
              To be the leading technology partner in Nepal, recognized globally for our 
              innovative solutions and commitment to excellence in software development.
            </p>
          </div>
          <div className="glass-effect rounded-2xl p-6 md:p-8 hover-lift gradient-border">
            <h3 className="text-xl sm:text-2xl font-bold inter mb-3 md:mb-4 text-[#c62828] neon-text">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-300 poppins leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation while fostering a culture of continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}