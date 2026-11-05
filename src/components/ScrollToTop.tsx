import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down past 500px (roughly past Hero section)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-[#0c0c0c]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-xl hover:border-sky-500/30 dark:hover:border-sky-450/30 hover:text-sky-500 dark:hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-200 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 animate-pulse-subtle" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
