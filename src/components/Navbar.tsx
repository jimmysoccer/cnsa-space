import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: '首页', path: '/' },
    { name: '任务', path: '/tasks' },
    { name: '团队', path: '/team' },
    { name: '技术', path: '/technology' },
    { name: '联系我们', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space-dark/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo and brand name */}
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/' className='flex items-center'>
              <Rocket className='h-8 w-8 text-space-accent animate-pulse-glow' />
              <span className='ml-2 text-xl font-orbitron font-bold text-space-light'>
                天行者
              </span>
            </Link>
          </div>

          {/* Desktop navigation links */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-4'>
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md font-orbitron text-sm transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-space-accent font-semibold'
                      : 'text-space-light hover:text-space-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-space-light hover:text-space-accent focus:outline-none'
            >
              {isOpen ? (
                <X className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-space-dark/90 backdrop-blur-md'>
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-md font-orbitron text-base transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-space-accent font-semibold'
                  : 'text-space-light hover:text-space-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
