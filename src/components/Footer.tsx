"use client";

import { Heart, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0e1a] border-t border-[#1565c0]/20 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 md:space-x-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 gradient-nepal rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg md:text-xl inter">DS</span>
              </div>
              <span className="text-base md:text-xl font-bold inter text-white">
                DevScript Nepal
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 poppins leading-relaxed mb-4 max-w-md">
              Empowering businesses with cutting-edge technology solutions. 
              Based in Nepal, serving globally.
            </p>
            <div className="flex gap-3 md:gap-4">
              {['LinkedIn', 'Twitter', 'GitHub', 'Facebook'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg modern-card flex items-center justify-center hover:border-[#1565c0] transition-all duration-300 text-xs hover:scale-110"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-bold inter mb-3 md:mb-4 text-[#ffc107]">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#1565c0] transition-colors poppins"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-bold inter mb-3 md:mb-4 text-[#1565c0]">Services</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Services', 'Consulting'].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#ffc107] transition-colors poppins"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-[#1565c0]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-400 poppins">
            © {new Date().getFullYear()} DevScript Nepal Pvt. Ltd. Made with{' '}
            <Heart className="inline w-3 h-3 sm:w-4 sm:h-4 text-[#c62828] fill-[#c62828]" /> in Nepal
          </p>
          <div className="flex gap-4 md:gap-6 text-xs sm:text-sm text-gray-400 poppins">
            <a href="#" className="hover:text-[#ffc107] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ffc107] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 gradient-nepal rounded-xl flex items-center justify-center hover:shadow-xl hover:shadow-[#ffc107]/30 transition-all duration-300 group z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}