import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca]">
        {/* Animated circles */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0270ca]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              transform: "translateZ(40px)",
              textShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            Learn how we can{" "}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                scale: 1.1,
                color: "#0270ca",
                textShadow: "0 0 30px rgba(2, 112, 202, 0.8)",
              }}
              style={{ transform: "translateZ(60px)" }}
            >
              transform
            </motion.span>{" "}
            your Business
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              transform: "translateZ(30px)",
              textShadow: "0 5px 20px rgba(0,0,0,0.5)",
            }}
          >
            Ready to accelerate your digital transformation
            journey?
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                z: 50,
                boxShadow:
                  "0 20px 50px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(40px)",
              }}
            >
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-white text-[#0d3054] hover:bg-white/90 px-10 py-7 text-lg group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                z: 50,
                boxShadow: "0 20px 50px rgba(2, 112, 202, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(40px)",
              }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="border-2 border-white text-white hover:bg-white hover:text-[#0d3054] px-10 py-7 text-lg backdrop-blur-sm bg-white/10"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;