import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const words = "Transform Your Business".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0270ca] rounded-full opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Drive innovation with cutting-edge solutions. Partner with us to accelerate your digital transformation journey.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-white text-[#0d3054] hover:bg-white/90 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0d3054] px-8 py-6 text-lg"
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
