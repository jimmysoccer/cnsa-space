import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 md:right-8 bottom-1/3 z-50 p-3 rounded-full bg-yellow-400 text-black font-bold shadow-2xl border border-black hover:bg-yellow-500 transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label='Scroll to top'
    >
      <ChevronUp className='h-5 w-5' />
    </button>
  );
};

export default ScrollToTopButton;
