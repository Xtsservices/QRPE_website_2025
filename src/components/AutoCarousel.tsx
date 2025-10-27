import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import qrpeLogo from '../assets/b335b1bafda0c649f13790c66bebdb614f6dcc33.jpg';

interface Slide {
  title: string;
  description: string;
  cta: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: 'Seamless Payment Processing',
    description: 'UPI, Payment Gateway, and Digital Invoicing Solutions',
    cta: 'Explore Payment Solutions',
    image: 'payment dashboard',
  },
  {
    title: 'Cloud-Native Transformation',
    description: 'Scalable cloud solutions with AI-powered analytics',
    cta: 'Discover Cloud Services',
    image: 'cloud infrastructure',
  },
  {
    title: 'Advanced Security Solutions',
    description: 'Protect your business with enterprise-grade security',
    cta: 'Learn About Security',
    image: 'security dashboard',
  },
  {
    title: 'Industry-Specific Expertise',
    description: 'Tailored solutions for Banking, Insurance, Automotive and more',
    cta: 'View Industries',
    image: 'technology office',
  },
  {
    title: 'Proven Track Record',
    description: '50+ successful projects, 99.99% uptime',
    cta: 'Read Case Studies',
    image: 'business analytics',
  },
];

const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      // In a real app, these would be actual images
      // For now, we'll use placeholder colors
      setImageUrls(slides.map(() => ''));
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0d3054] to-[#0270ca] relative overflow-hidden">
      {/* Background decorative circles */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#0270ca]/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="relative overflow-hidden rounded-2xl bg-[#0d3054]/70 backdrop-blur-sm shadow-2xl border border-[#0270ca]/30"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Content */}
          <div className="relative h-[500px] md:h-[600px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image Side */}
                  <div className="relative bg-gradient-to-br from-[#0d3054] to-[#0270ca] flex items-center justify-center">
                    <motion.div
                      className="opacity-30"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.3 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <img 
                        src={qrpeLogo} 
                        alt="QRPE" 
                        className="w-64 h-64 rounded-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-[#0d3054]/90 backdrop-blur-md">
                    <motion.h2
                      className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {slides[currentIndex].title}
                    </motion.h2>
                    <motion.p
                      className="text-lg md:text-xl text-gray-300 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {slides[currentIndex].description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <Button
                        className="bg-white text-[#0d3054] hover:bg-white/90 hover:shadow-lg"
                        size="lg"
                      >
                        {slides[currentIndex].cta}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0270ca] rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white hover:text-[#0d3054]" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0270ca] rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white hover:text-[#0d3054]" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white'
                      : 'bg-white/40 group-hover:bg-white/60'
                  }`}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: isPaused ? '0%' : '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoCarousel;
