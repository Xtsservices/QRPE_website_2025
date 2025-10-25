import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#0270ca] rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#0270ca]/50 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 bg-[#0270ca]/20 rounded-full pointer-events-none z-[9998] blur-xl"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
      />
    </>
  );
};

export default CustomCursor;
