import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface IndustryData {
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  solutions: { title: string; description: string }[];
  stats: { label: string; value: string }[];
}

const industryData: Record<string, IndustryData> = {
  automotive: {
    title: 'Automotive Industry',
    subtitle: 'Driving Digital Transformation in Automotive',
    description: 'Transform your automotive business with cutting-edge digital solutions. From operations to customer experience, we provide comprehensive technology services tailored for the automotive industry.',
    keyFeatures: [
      'Connected Vehicle Solutions',
      'Digital Showroom Experiences',
      'Supply Chain Optimization',
      'Dealer Management Systems',
      'Customer Experience Platforms',
      'Predictive Maintenance Solutions'
    ],
    solutions: [
      {
        title: 'Digital Operations',
        description: 'Streamline your automotive operations with advanced digital tools for inventory, workflow, and quality management.'
      },
      {
        title: 'Connected Mobility',
        description: 'Enable connected car experiences with telematics, in-vehicle infotainment, and over-the-air updates.'
      },
      {
        title: 'After-Sales Excellence',
        description: 'Enhance customer satisfaction with digital service booking, parts management, and warranty processing.'
      }
    ],
    stats: [
      { label: 'Efficiency Increase', value: '45%' },
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Client Satisfaction', value: '95%' }
    ]
  },
  banking: {
    title: 'Banking & Financial Services',
    subtitle: 'Innovative Solutions for Modern Banking',
    description: 'Empower your banking operations with advanced digital solutions. From core banking systems to mobile banking, we deliver secure, scalable, and customer-centric financial technology.',
    keyFeatures: [
      'Core Banking Modernization',
      'Digital Banking Platforms',
      'Payment Gateway Integration',
      'Risk & Compliance Management',
      'Open Banking APIs',
      'Fraud Detection & Prevention'
    ],
    solutions: [
      {
        title: 'Digital Banking',
        description: 'Build next-generation digital banking experiences with mobile-first design, AI-powered insights, and seamless omnichannel integration.'
      },
      {
        title: 'Payment Solutions',
        description: 'Implement secure, fast, and reliable payment processing with UPI, cards, wallets, and international payment support.'
      },
      {
        title: 'RegTech & Compliance',
        description: 'Automate compliance workflows, KYC processes, and regulatory reporting to reduce risk and operational costs.'
      }
    ],
    stats: [
      { label: 'Transaction Speed', value: '99.9%' },
      { label: 'Security Rating', value: 'AAA' },
      { label: 'Customer Growth', value: '85%' }
    ]
  },
  insurance: {
    title: 'Insurance Industry',
    subtitle: 'Digital Insurance Solutions',
    description: 'Transform insurance operations with intelligent automation and data-driven insights. Streamline underwriting, claims processing, and customer engagement.',
    keyFeatures: [
      'Policy Administration Systems',
      'Claims Management Automation',
      'Underwriting AI Solutions',
      'Customer Self-Service Portals',
      'Risk Assessment Analytics',
      'Regulatory Compliance Tools'
    ],
    solutions: [
      {
        title: 'Intelligent Underwriting',
        description: 'Leverage AI and machine learning to accelerate underwriting decisions with improved accuracy and risk assessment.'
      },
      {
        title: 'Claims Processing',
        description: 'Automate claims workflows with intelligent document processing, fraud detection, and fast settlement.'
      },
      {
        title: 'Customer Engagement',
        description: 'Deliver personalized insurance experiences through digital channels, chatbots, and mobile applications.'
      }
    ],
    stats: [
      { label: 'Claims Processing Time', value: '-60%' },
      { label: 'Fraud Detection', value: '92%' },
      { label: 'Customer Retention', value: '88%' }
    ]
  },
  manufacturing: {
    title: 'Manufacturing Industry',
    subtitle: 'Digital Manufacturing Solutions',
    description: 'Transform your manufacturing operations with advanced digital solutions. Optimize workflows, supply chain, and asset management with intelligent automation and data-driven insights.',
    keyFeatures: [
      'Digital Workflow Solutions',
      'Inventory Management',
      'Supply Chain Visibility',
      'Quality Management Systems',
      'Production Planning & Scheduling',
      'Resource Optimization'
    ],
    solutions: [
      {
        title: 'Digital Operations',
        description: 'Modernize your operations with digital tools, real-time analytics, and automated workflows for maximum efficiency.'
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Gain end-to-end visibility and control over your supply chain with intelligent planning and execution tools.'
      },
      {
        title: 'Asset Management',
        description: 'Optimize asset utilization with tracking, monitoring, and lifecycle management solutions.'
      }
    ],
    stats: [
      { label: 'Operational Efficiency', value: '+45%' },
      { label: 'Cost Savings', value: '35%' },
      { label: 'Quality Improvement', value: '40%' }
    ]
  },
  'public-sector': {
    title: 'Public Sector',
    subtitle: 'Digital Government Solutions',
    description: 'Enable efficient public services with modern technology. Deliver citizen-centric solutions that improve accessibility, transparency, and operational efficiency.',
    keyFeatures: [
      'E-Governance Platforms',
      'Citizen Service Portals',
      'Smart City Solutions',
      'Public Safety Systems',
      'Healthcare Management',
      'Education Technology'
    ],
    solutions: [
      {
        title: 'Digital Citizen Services',
        description: 'Provide seamless online services for citizens with integrated platforms for licenses, permits, and public records.'
      },
      {
        title: 'Smart Infrastructure',
        description: 'Implement IoT-enabled solutions for traffic management, waste management, and public utilities optimization.'
      },
      {
        title: 'Data-Driven Governance',
        description: 'Leverage analytics and AI to improve decision-making, resource allocation, and policy implementation.'
      }
    ],
    stats: [
      { label: 'Service Delivery Time', value: '-55%' },
      { label: 'Citizen Satisfaction', value: '91%' },
      { label: 'Cost Savings', value: '35%' }
    ]
  }
};

const IndustryPage = () => {
  const { industry } = useParams<{ industry: string }>();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const data = industry ? industryData[industry] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] pt-32 pb-20 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl mb-4">Industry Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-white text-[#0d3054]">
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] pt-32 pb-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-[#0270ca]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
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
            {data.title}
          </motion.h1>
          <motion.p
            className="text-2xl text-[#0270ca] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {data.subtitle}
          </motion.p>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {data.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl text-[#0270ca] mb-2">{stat.value}</div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20" ref={ref}>
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-[#0270ca]" />
              <h2 className="text-3xl text-white">Key Features</h2>
            </div>
            <div className="space-y-4">
              {data.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#0270ca] flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {data.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-[#0270ca]/20 to-[#0d3054]/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-[#0270ca]/50 transition-all group"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl text-white mb-3 group-hover:text-[#0270ca] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/80">{solution.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Ready to Transform Your {data.title}?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can drive innovation and growth in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[#0d3054] hover:bg-white/90 px-8 py-6 text-lg group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryPage;
