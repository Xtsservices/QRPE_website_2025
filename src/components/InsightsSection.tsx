import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InsightCard {
  type: 'WHITEPAPER' | 'BLOG';
  title: string;
  excerpt: string;
  cta: string;
  link: string;
  image: string;
}

const insights: InsightCard[] = [
  {
    type: 'WHITEPAPER',
    title: 'Cloud-Native Platform Transformation',
    excerpt: 'QRPE partnered with a fast-growing FinTech startup to modernize their infrastructure by migrating to a cloud-native architecture...',
    cta: 'Read more',
    link: '/resources/cloud-native-transformation',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxMzQ2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    type: 'WHITEPAPER',
    title: 'AI-Powered Threat Detection & Response',
    excerpt: 'QRPE helped a leading enterprise enhance its cybersecurity posture by implementing AI-driven threat detection...',
    cta: 'Read more',
    link: '/resources/ai-threat-detection',
    image: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYxMjg3ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    type: 'BLOG',
    title: 'Maximizing Cloud ROI Through Optimization',
    excerpt: 'Organizations invest in cloud computing to enhance agility, scalability, and efficiency, but without proper cost management...',
    cta: 'Read more',
    link: '/blog/cloud-roi-optimization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTI3OTUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    type: 'BLOG',
    title: 'Emerging Cyber Threats and Defense Strategies',
    excerpt: 'Cybersecurity threats are evolving, requiring adaptive strategies...',
    cta: 'Read more',
    link: '/blog/cyber-threats-defense',
    image: 'https://images.unsplash.com/photo-1724219616919-aab943e7b00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwc2hpZWxkfGVufDF8fHx8MTc2MTM3ODg1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    type: 'BLOG',
    title: 'Digital Payment Solutions for Modern Businesses',
    excerpt: 'Explore how businesses are leveraging UPI, digital invoicing, and payment gateways to streamline operations and enhance customer experience...',
    cta: 'Read more',
    link: '/blog/digital-payment-solutions',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudHxlbnwxfHx8fDE3NjEzNDYxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const InsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getBadgeVariant = (type: InsightCard['type']) => {
    switch (type) {
      case 'CASE-STUDY':
        return 'default';
      case 'WHITEPAPER':
        return 'secondary';
      case 'BLOG':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(2, 112, 202, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(13, 48, 84, 0.2) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] text-gray-400 mb-2">INSIGHTS</h2>
          <h3 className="text-3xl md:text-5xl text-white mb-4">Resources & Insights</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our latest guides, playbooks, and reports to help drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.link}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={insight.link}
                className="block h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 hover:shadow-2xl hover:shadow-[#0270ca]/20 transition-all duration-300 border border-white/10 hover:border-[#0270ca]/50"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#0d3054] to-[#0270ca]">
                  <ImageWithFallback
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge
                        variant={getBadgeVariant(insight.type)}
                        className="bg-white/90 backdrop-blur-sm text-[#0d3054] border-0"
                      >
                        {insight.type}
                      </Badge>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl text-white mb-3 leading-tight group-hover:text-[#0270ca] transition-colors duration-300">
                    {insight.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center text-[#0270ca] group-hover:gap-2 transition-all duration-300">
                    <span className="text-sm">{insight.cta}</span>
                    <motion.div
                      initial={{ x: 0 }}
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
