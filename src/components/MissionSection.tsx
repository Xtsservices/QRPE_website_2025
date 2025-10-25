import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0d3054]/20 to-[#0270ca]/20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-[#0270ca]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.h2
              className="text-sm tracking-[0.3em] text-gray-400 mb-4 inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              OUR MISSION
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0d3054] to-[#0270ca]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
          </div>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            As a trusted technology innovator, QRPE uses information technology to create new paradigms and values, which help contribute to a{' '}
            <motion.span
              className="text-[#0270ca] inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              more affluent
            </motion.span>{' '}
            and{' '}
            <motion.span
              className="text-[#0270ca] inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              harmonious society
            </motion.span>
            .
          </motion.p>

          {/* Floating decorative elements */}
          <div className="mt-12 flex justify-center gap-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-[#0d3054] to-[#0270ca]"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 1.2 + i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
