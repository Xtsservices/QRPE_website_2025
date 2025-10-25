import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled past 100vh
      if (window.scrollY > window.innerHeight) {
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
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#0270ca] to-[#0d3054] rounded-full flex items-center justify-center shadow-lg shadow-[#0270ca]/30 hover:shadow-xl hover:shadow-[#0270ca]/50 transition-all group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.div>
          
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#0270ca]"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
