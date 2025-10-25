import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';

export const ParallaxMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#0270ca] to-[#0d3054] relative overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Parallax Background Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0d3054]/40 to-[#0270ca]/40"
        style={{ y: y1 }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* 3D Floating Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-[#0270ca]/30 rounded-full blur-3xl"
        style={{ y: y2 }}
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

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#0d3054]/40 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* 3D Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#0270ca]/20"
        style={{ 
          y: y2,
          rotateX: useTransform(scrollYProgress, [0, 1], [0, 360]),
          rotateY: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ 
            transformStyle: 'preserve-3d',
            scale,
            opacity,
          }}
        >
          <div className="mb-8">
            <motion.h2
              className="text-sm tracking-[0.3em] text-gray-400 mb-4 inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ transform: 'translateZ(40px)' }}
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
            style={{ 
              transform: 'translateZ(60px)',
              textShadow: '0 10px 30px rgba(0,0,0,0.5)',
            }}
          >
            As a trusted technology innovator, QRPE uses information technology to create new paradigms and values, which help contribute to a{' '}
            <motion.span
              className="text-[#0270ca] inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(2, 112, 202, 0.8)' }}
              style={{ transform: 'translateZ(80px)' }}
            >
              more affluent
            </motion.span>{' '}
            and{' '}
            <motion.span
              className="text-[#0270ca] inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(2, 112, 202, 0.8)' }}
              style={{ transform: 'translateZ(80px)' }}
            >
              harmonious society
            </motion.span>
            .
          </motion.p>

          {/* Floating decorative elements in 3D */}
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
                whileHover={{ 
                  scale: 2,
                  boxShadow: '0 0 20px rgba(2, 112, 202, 0.8)',
                }}
                style={{ transform: `translateZ(${50 + i * 20}px)` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const ParallaxPartners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const partners = [
    { name: 'QRPE', color: '#0270ca' },
    { name: 'Selfscan', color: '#0d3054' },
    { name: 'chefpay', color: '#0270ca' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] relative overflow-hidden" style={{ perspective: '1500px' }}>
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(45deg) scale(2)',
          transformOrigin: 'center top',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.h2 
            className="text-sm tracking-[0.3em] text-gray-400 mb-2"
            style={{ transform: 'translateZ(30px)' }}
          >
            PARTNERS
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl text-white"
            style={{ transform: 'translateZ(50px)' }}
          >
            Our Brands
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ 
                transformStyle: 'preserve-3d',
                y,
              }}
              className="group"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  z: 50,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-[#0d3054]/70 backdrop-blur-sm border border-[#0270ca]/30 rounded-xl p-8 h-32 flex items-center justify-center hover:bg-[#0d3054]/90 hover:border-[#0270ca]/70 hover:shadow-2xl hover:shadow-[#0270ca]/40 transition-all duration-300 relative overflow-hidden">
                  {/* 3D Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0d3054] to-[#0270ca] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ transform: 'translateZ(-10px)' }}
                  />

                  <motion.div
                    className="text-2xl text-white transition-colors duration-300 relative z-10"
                    whileHover={{ color: '#0270ca', scale: 1.1 }}
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    {partner.name}
                  </motion.div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'linear',
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
