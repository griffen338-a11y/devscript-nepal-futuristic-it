"use client";

import { useEffect, useState } from 'react';
import { ArrowRight, Code2, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'Building the Future of IT';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 px-4">
      {/* Enhanced gradient orbs with glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#1565c0] rounded-full blur-[100px] md:blur-[150px] opacity-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#ffc107] rounded-full blur-[100px] md:blur-[150px] opacity-10 animate-pulse-glow delay-300" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-6 md:space-y-8 max-w-5xl mx-auto">
          {/* Floating icons with neon glow */}
          <div className="flex justify-center gap-4 md:gap-8 mb-6 md:mb-8">
            <div className="modern-card p-3 md:p-4 rounded-xl animate-float shadow-lg hover-lift opacity-0 animate-scaleIn">
              <Code2 className="w-6 h-6 md:w-8 md:h-8 text-[#1565c0] animate-neonGlow" />
            </div>
            <div className="modern-card p-3 md:p-4 rounded-xl animate-float delay-200 shadow-lg hover-lift opacity-0 animate-scaleIn delay-200">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#ffc107] animate-neonGlow" />
            </div>
            <div className="modern-card p-3 md:p-4 rounded-xl animate-float delay-400 shadow-lg hover-lift opacity-0 animate-scaleIn delay-400">
              <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#c62828] animate-neonGlow" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold inter leading-tight opacity-0 animate-fadeInUp delay-200">
            <span className="holographic-text">
              DevScript Nepal
            </span>
          </h1>

          <div className="h-12 md:h-16 flex items-center justify-center opacity-0 animate-fadeInUp delay-400">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold inter text-[#ffc107] neon-text">
              {text}
              <span className="inline-block w-0.5 md:w-1 h-6 md:h-8 bg-[#ffc107] ml-1 animate-pulse" />
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto poppins leading-relaxed opacity-0 animate-fadeInUp delay-600 px-4">
            Empowering businesses with cutting-edge technology solutions. 
            We craft innovative software that transforms ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 md:mt-8 opacity-0 animate-fadeInUp delay-700 px-4">
            <Link
              href="/services"
              className="group px-6 md:px-8 py-3 md:py-4 gradient-gold rounded-xl text-[#0a0e1a] font-semibold hover:shadow-xl hover:shadow-[#ffc107]/30 transition-all duration-300 flex items-center gap-2 hover:scale-105 w-full sm:w-auto justify-center"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="px-6 md:px-8 py-3 md:py-4 gradient-border rounded-xl font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
            >
              View Portfolio
            </Link>
          </div>

          {/* Stats with enhanced animations */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 mt-12 md:mt-16 max-w-3xl mx-auto px-2">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="modern-card p-4 md:p-6 rounded-xl hover-lift gradient-border cursor-pointer opacity-0 animate-scaleIn"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffc107] inter neon-text">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-2 poppins">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fadeInUp delay-1000 hidden md:block">
        <div className="w-6 h-10 border-2 border-[#1565c0] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#1565c0] rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}