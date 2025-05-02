import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { NavBarItems } from '@/constants/navConstants';
import { webLogoSrc } from '@/assets/images/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
              <img
                src={webLogoSrc}
                alt='Logo'
                className='h-8 w-8 rounded-full object-cover'
              />
              <span className='ml-2 text-xl font-orbitron font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text'>
                问天阁
              </span>
            </Link>
          </div>

          {/* Desktop navigation links */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-4'>
              {NavBarItems.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md font-orbitron text-sm transition-all duration-300 ${
                    location.pathname === link.path ||
                    (link.path === '/missions' &&
                      location.pathname.startsWith('/missions/'))
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
          {NavBarItems.map((link) => (
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
