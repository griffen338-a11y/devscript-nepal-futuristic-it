"use client";

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 50;
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance;
      buttonRef.current.style.transform = `translate(${x * strength * 0.3}px, ${y * strength * 0.3}px) scale(1.05)`;
    }
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0, 0) scale(1)';
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3 md:py-4 shadow-lg backdrop-blur-xl' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with gradient animation */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 gradient-nepal rounded-xl flex items-center justify-center shadow-lg animate-gradientShift group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg md:text-xl inter">DS</span>
            </div>
            <span className="text-base md:text-xl font-bold inter text-white hidden sm:block group-hover:text-[#ffc107] transition-colors duration-300">
              DevScript Nepal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  pathname === item.href ? 'text-[#ffc107]' : 'text-gray-300 hover:text-[#ffc107]'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#1565c0] via-[#ffc107] to-[#c62828] transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              ref={buttonRef}
              href="/contact"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="magnetic-btn px-4 lg:px-6 py-2 lg:py-2.5 gradient-gold rounded-lg text-[#0a0e1a] text-sm font-semibold hover:shadow-lg hover:shadow-[#ffc107]/30 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#ffc107] hover:text-[#1565c0] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with glassmorphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-xl p-4 space-y-3 shadow-xl animate-fadeInUp">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-colors duration-300 py-2 px-3 rounded-lg ${
                  pathname === item.href 
                    ? 'text-[#ffc107] bg-[#ffc107]/10' 
                    : 'text-gray-300 hover:text-[#ffc107] hover:bg-[#ffc107]/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-2.5 gradient-gold rounded-lg text-[#0a0e1a] font-semibold text-center hover:shadow-lg hover:shadow-[#ffc107]/30 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}