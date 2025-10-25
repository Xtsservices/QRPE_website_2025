import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { Target, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge technology solutions.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our clients success is our success. We build lasting partnerships.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We believe in continuous learning and growth for our team and clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] pt-32 pb-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-[#0270ca]/20 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="text-[#0270ca]">QRPE</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transforming businesses through innovative technology solutions and digital transformation expertise.
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl text-white mb-4">Our Mission</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation. We are committed to delivering exceptional value through cutting-edge payment solutions, enterprise services, and strategic consulting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0270ca]/20 to-[#0d3054]/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl text-white mb-4">Our Vision</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              To be the leading technology partner for businesses seeking digital excellence. We envision a future where technology seamlessly integrates with business processes, enabling organizations to innovate, scale, and thrive in the digital economy.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-4xl text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-[#0270ca]/50 transition-all text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0270ca] to-[#0d3054] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-white mb-3">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { value: '500+', label: 'Clients Served' },
            { value: '1000+', label: 'Projects Completed' },
            { value: '50+', label: 'Team Members' },
            { value: '99%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl text-[#0270ca] mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust QRPE for their digital transformation journey.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-white text-[#0d3054] hover:bg-white/90 px-8 py-6 text-lg group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
