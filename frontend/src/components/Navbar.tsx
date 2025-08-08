'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'About',
    href: '/about',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Leadership', href: '/leadership' },
      { label: 'Partners', href: '/partners' },
    ]
  },
  { 
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Focus Areas', href: '/services/focus-areas' },
    ]
  },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Reset navigation state when pathname changes
    setIsNavigating(false);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleNavigation = (href: string) => {
    if (href !== pathname) {
      setIsNavigating(true);
      router.push(href);
    }
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-700 font-medium">Loading...</p>
      </div>
    </div>
  );

  return (
    <>
      {isNavigating && <LoadingSpinner />}
      <nav className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-200/20' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
        }
      `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Image
                src="/logo.jpg"
                alt="Grant Consortium Africa Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-gray-900 font-heading font-bold text-xl group-hover:text-primary transition-colors duration-300">
                Grant Consortium Africa
              </span>
            </div>
            <div className="block sm:hidden">
              <span className="text-gray-900 font-heading font-bold text-lg group-hover:text-primary transition-colors duration-300">
                GCA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium hover:scale-105 flex items-center space-x-1 py-2"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown */}
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl backdrop-blur-sm animate-slide-up">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <button
                            key={dropdownItem.label}
                            onClick={() => {
                              setOpenDropdown(null);
                              handleNavigation(dropdownItem.href);
                            }}
                            className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium hover:scale-105 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavigation('/contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 px-4 py-2 rounded text-sm"
            >
              🚀 Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary transition-colors duration-200 p-2"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-slide-up">
            <div className="pt-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-primary py-1 transition-colors duration-200"
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-primary transition-colors duration-300 ease-in-out hover:underline underline-offset-4 decoration-2 decoration-primary py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/20">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavigation('/contact');
                  }}
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded font-medium transition-colors text-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
