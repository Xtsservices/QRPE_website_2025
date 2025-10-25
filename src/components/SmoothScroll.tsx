import { useEffect, useRef, ReactNode } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0d3054] via-[#0270ca] to-[#0d3054] origin-left z-[100]"
        style={{ scaleX }}
      />
      {children}
    </>
  );
};

export default SmoothScroll;
