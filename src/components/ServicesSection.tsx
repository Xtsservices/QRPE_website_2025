import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cloud, Brain, CreditCard, FileText, Globe, Users, Shield, Monitor, Receipt, BarChart3, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Service {
  title: string;
  description: string;
  icon: any;
  link: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'Cloud Services',
    description: 'Scalable cloud solutions to optimize infrastructure, security, and business continuity.',
    icon: Cloud,
    link: '/services/cloud-services',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxMzQ2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Data & AI',
    description: 'Unlock business potential with data-driven insights and AI-powered automation.',
    icon: Brain,
    link: '/services/data-ai',
    image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW58ZW58MXx8fHwxNzYxMzYyNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'UPI Payments',
    description: 'Seamless, secure, and instant UPI payment solutions for businesses and consumers.',
    icon: CreditCard,
    link: '/services/upi-payments',
    image: 'https://images.unsplash.com/photo-1571867424488-4565932edb41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50fGVufDF8fHx8MTc2MTM2MDQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Digital Invoicing & SMS Pay',
    description: 'Automated invoicing and secure SMS payment solutions for faster transactions.',
    icon: FileText,
    link: '/services/digital-invoicing',
    image: 'https://images.unsplash.com/photo-1735825764478-674bb8df9d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW52b2ljZXxlbnwxfHx8fDE3NjEzNzg4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Payment Gateway',
    description: 'Reliable and secure payment processing for e-commerce and online businesses.',
    icon: Globe,
    link: '/services/payment-gateway',
    image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwZ2F0ZXdheXxlbnwxfHx8fDE3NjEzNzg4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Consulting',
    description: 'Expert guidance on digital transformation, IT strategy, and business growth.',
    icon: Users,
    link: '/services/consulting',
    image: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmd8ZW58MXx8fHwxNzYxMzI0OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect data, networks, and digital assets from threats.',
    icon: Shield,
    link: '/services/cybersecurity',
    image: 'https://images.unsplash.com/photo-1724219616919-aab943e7b00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwc2hpZWxkfGVufDF8fHx8MTc2MTM3ODg1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'POS & Invoicing Solutions',
    description: 'Integrated point-of-sale and invoicing solutions for seamless business operations.',
    icon: Monitor,
    link: '/services/pos-invoicing',
    image: 'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2ludCUyMG9mJTIwc2FsZXxlbnwxfHx8fDE3NjEzNzg4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Comprehensive Billing Applications',
    description: 'Custom billing applications with automation and real-time tracking for businesses.',
    icon: Receipt,
    link: '/services/billing-applications',
    image: 'https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaW5nJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzYxMzc4ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Advanced Analytics & Reporting',
    description: 'Powerful analytics and reporting tools for data-driven decision-making.',
    icon: BarChart3,
    link: '/services/analytics-reporting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTI3OTUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#0270ca]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0d3054]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] text-gray-400 mb-2">OUR SERVICES</h2>
          <h3 className="text-3xl md:text-5xl text-white">Comprehensive Solutions</h3>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={service.link}
                  className="block h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-[#0270ca]/50 hover:shadow-2xl hover:shadow-[#0270ca]/20 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0d3054] to-[#0270ca]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl text-white mb-3 group-hover:text-[#0270ca] transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#0270ca] group-hover:gap-2 transition-all duration-300">
                      <span className="text-sm">read more</span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
