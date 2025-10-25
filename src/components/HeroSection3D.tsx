import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { FloatingShapes, ParticleField, WaveGeometry } from './Scene3D';

const HeroSection3D = () => {
  const words = "Transform Your Business".split(" ");
  const ref = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <FloatingShapes />
            <ParticleField />
            <WaveGeometry />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d3054]/60 via-[#0d3054]/40 to-[#0270ca]/40 z-[1]" />

      {/* 3D Layered Background Effects */}
      <motion.div
        className="absolute inset-0 z-[2]"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(2, 112, 202, 0.15) 0%, transparent 50%)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <motion.div
        className="absolute inset-0 z-[2]"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(13, 48, 84, 0.2) 0%, transparent 50%)',
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 15 }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50, z: -100 }}
                animate={{ opacity: 1, y: 0, z: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                }}
                style={{
                  textShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 50px rgba(2, 112, 202, 0.3)',
                }}
                whileHover={{
                  scale: 1.1,
                  color: '#0270ca',
                  transition: { duration: 0.2 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              textShadow: '0 5px 20px rgba(0,0,0,0.5)',
            }}
          >
            Leading the digital revolution with cutting-edge technology solutions, AI-powered innovations, and seamless payment systems
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                z: 50,
                boxShadow: '0 20px 50px rgba(2, 112, 202, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0270ca] to-[#0d3054] text-white px-10 py-7 text-lg relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: 0, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">Explore Solutions</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.1,
                z: 50,
                boxShadow: '0 20px 50px rgba(255, 255, 255, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-7 text-lg backdrop-blur-sm bg-white/10"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Stats Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { label: 'Projects', value: '50+' },
              { label: 'Uptime', value: '99.99%' },
              { label: 'Industries', value: '5+' },
              { label: 'Clients', value: '100+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                whileHover={{
                  z: 50,
                  rotateY: 5,
                  scale: 1.05,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-[#0d3054]/70 backdrop-blur-md border border-[#0270ca]/30 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0270ca]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection3D;
