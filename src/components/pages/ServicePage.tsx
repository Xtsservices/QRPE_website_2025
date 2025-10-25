import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle, Zap, Shield, Cloud, Brain, Lock, CreditCard, FileText, ShoppingCart } from 'lucide-react';

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  benefits: string[];
  features: { title: string; description: string }[];
  useCases: string[];
}

const serviceData: Record<string, ServiceData> = {
  'cloud-services': {
    title: 'Cloud Services',
    subtitle: 'Scale Your Business with Cloud',
    description: 'Migrate, modernize, and manage your infrastructure with our comprehensive cloud services. From strategy to implementation, we help you leverage the full potential of cloud computing.',
    icon: Cloud,
    benefits: [
      'Reduced infrastructure costs',
      'Scalable and flexible resources',
      'Enhanced security and compliance',
      'Improved disaster recovery',
      'Anywhere accessibility',
      'Faster time to market'
    ],
    features: [
      {
        title: 'Cloud Migration',
        description: 'Seamlessly migrate your applications and data to cloud platforms with minimal downtime and risk.'
      },
      {
        title: 'Cloud Architecture',
        description: 'Design and implement scalable, secure, and cost-effective cloud architectures tailored to your needs.'
      },
      {
        title: 'Cloud Management',
        description: '24/7 monitoring, optimization, and support for your cloud infrastructure to ensure peak performance.'
      }
    ],
    useCases: [
      'Enterprise application hosting',
      'Data backup and disaster recovery',
      'Development and testing environments',
      'Big data analytics and processing'
    ]
  },
  'consulting': {
    title: 'Consulting Services',
    subtitle: 'Strategic Technology Consulting',
    description: 'Transform your business with expert guidance. Our consultants help you navigate digital transformation, optimize processes, and achieve strategic objectives.',
    icon: Zap,
    benefits: [
      'Expert strategic guidance',
      'Industry best practices',
      'Risk mitigation strategies',
      'ROI optimization',
      'Innovation enablement',
      'Change management support'
    ],
    features: [
      {
        title: 'Digital Transformation',
        description: 'Develop and execute comprehensive digital transformation strategies aligned with your business goals.'
      },
      {
        title: 'Process Optimization',
        description: 'Identify inefficiencies and implement automation solutions to streamline operations.'
      },
      {
        title: 'Technology Roadmap',
        description: 'Create actionable technology roadmaps that drive innovation and competitive advantage.'
      }
    ],
    useCases: [
      'Business process re-engineering',
      'Technology stack modernization',
      'Digital strategy development',
      'Organizational transformation'
    ]
  },
  'data-ai': {
    title: 'Data & AI Solutions',
    subtitle: 'Unlock Insights with AI',
    description: 'Harness the power of data and artificial intelligence to drive intelligent decision-making. From analytics to machine learning, we turn data into actionable insights.',
    icon: Brain,
    benefits: [
      'Data-driven decision making',
      'Predictive analytics capabilities',
      'Automated processes',
      'Enhanced customer insights',
      'Competitive advantage',
      'Operational efficiency'
    ],
    features: [
      {
        title: 'AI & Machine Learning',
        description: 'Build intelligent systems that learn, adapt, and improve over time with custom ML models.'
      },
      {
        title: 'Data Analytics',
        description: 'Transform raw data into meaningful insights with advanced analytics and visualization tools.'
      },
      {
        title: 'Big Data Processing',
        description: 'Process and analyze massive datasets in real-time with scalable big data solutions.'
      }
    ],
    useCases: [
      'Customer behavior prediction',
      'Fraud detection and prevention',
      'Recommendation engines',
      'Demand forecasting'
    ]
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    subtitle: 'Protect Your Digital Assets',
    description: 'Secure your business with comprehensive cybersecurity solutions. From threat detection to compliance, we safeguard your data, systems, and reputation.',
    icon: Lock,
    benefits: [
      'Advanced threat protection',
      'Regulatory compliance',
      'Data breach prevention',
      'Security risk reduction',
      '24/7 monitoring and response',
      'Business continuity assurance'
    ],
    features: [
      {
        title: 'Threat Detection',
        description: 'Identify and neutralize threats in real-time with AI-powered security monitoring and response.'
      },
      {
        title: 'Security Assessment',
        description: 'Comprehensive security audits and vulnerability assessments to identify and fix weaknesses.'
      },
      {
        title: 'Compliance Management',
        description: 'Ensure compliance with industry regulations and security standards like ISO, PCI-DSS, and GDPR.'
      }
    ],
    useCases: [
      'Network security implementation',
      'Endpoint protection',
      'Security incident response',
      'Compliance auditing'
    ]
  },
  'upi-payments': {
    title: 'UPI Payment Solutions',
    subtitle: 'Seamless Digital Payments',
    description: 'Enable fast, secure, and convenient UPI payment processing. Accept payments instantly with our robust UPI integration solutions.',
    icon: CreditCard,
    benefits: [
      'Instant payment processing',
      'Zero transaction fees',
      'High success rates',
      'Secure authentication',
      'Real-time settlement',
      '24/7 availability'
    ],
    features: [
      {
        title: 'UPI Integration',
        description: 'Seamlessly integrate UPI payments into your app or website with our easy-to-use APIs.'
      },
      {
        title: 'Payment Gateway',
        description: 'Accept UPI payments along with cards, wallets, and net banking through a unified gateway.'
      },
      {
        title: 'QR Code Payments',
        description: 'Generate dynamic and static QR codes for quick and contactless payment acceptance.'
      }
    ],
    useCases: [
      'E-commerce payments',
      'Bill payments',
      'Peer-to-peer transfers',
      'In-store payments'
    ]
  },
  'payment-gateway': {
    title: 'Payment Gateway Services',
    subtitle: 'Complete Payment Solutions',
    description: 'Accept payments seamlessly with our comprehensive payment gateway. Support multiple payment methods and ensure secure transactions.',
    icon: CreditCard,
    benefits: [
      'Multiple payment methods',
      'Multi-currency support',
      'PCI DSS compliance',
      'Fraud prevention',
      'Easy integration',
      'Detailed reporting'
    ],
    features: [
      {
        title: 'Multi-Payment Support',
        description: 'Accept credit cards, debit cards, UPI, wallets, net banking, and international payments.'
      },
      {
        title: 'Secure Processing',
        description: 'Bank-grade encryption and tokenization to protect sensitive payment information.'
      },
      {
        title: 'Smart Routing',
        description: 'Intelligent payment routing to maximize success rates and minimize transaction costs.'
      }
    ],
    useCases: [
      'Online marketplaces',
      'Subscription services',
      'B2B payments',
      'International transactions'
    ]
  },
  'billing-applications': {
    title: 'Billing Applications (ERP)',
    subtitle: 'Automated Billing & Invoicing',
    description: 'Streamline your billing operations with comprehensive ERP solutions. Automate invoicing, manage subscriptions, and improve cash flow.',
    icon: FileText,
    benefits: [
      'Automated invoice generation',
      'Recurring billing management',
      'Multi-currency support',
      'Tax compliance',
      'Payment reminders',
      'Financial reporting'
    ],
    features: [
      {
        title: 'Invoice Automation',
        description: 'Automatically generate, send, and track invoices with customizable templates and workflows.'
      },
      {
        title: 'Subscription Management',
        description: 'Handle recurring billing, upgrades, downgrades, and cancellations seamlessly.'
      },
      {
        title: 'Payment Reconciliation',
        description: 'Automatically match payments to invoices and maintain accurate financial records.'
      }
    ],
    useCases: [
      'SaaS subscription billing',
      'Utility billing',
      'Professional services invoicing',
      'Retail invoicing'
    ]
  },
  'pos-invoicing': {
    title: 'POS & Invoicing Solutions',
    subtitle: 'Modern Point of Sale',
    description: 'Transform your retail operations with cloud-based POS systems. Manage sales, inventory, and customers from anywhere.',
    icon: ShoppingCart,
    benefits: [
      'Real-time inventory tracking',
      'Multi-location support',
      'Customer management',
      'Sales analytics',
      'Offline mode',
      'Hardware integration'
    ],
    features: [
      {
        title: 'Cloud POS',
        description: 'Access your POS system from anywhere with cloud-based architecture and real-time sync.'
      },
      {
        title: 'Inventory Management',
        description: 'Track stock levels, set reorder points, and manage suppliers in real-time.'
      },
      {
        title: 'Customer Insights',
        description: 'Build customer profiles, track purchase history, and create targeted promotions.'
      }
    ],
    useCases: [
      'Retail stores',
      'Restaurants and cafes',
      'Service businesses',
      'Multi-location chains'
    ]
  },
  'digital-invoicing': {
    title: 'Digital Invoicing & SMS Pay',
    subtitle: 'Smart Invoicing Solutions',
    description: 'Streamline your billing process with digital invoicing and SMS-based payment solutions. Send invoices instantly and get paid faster.',
    icon: FileText,
    benefits: [
      'Instant invoice delivery',
      'SMS payment links',
      'Automated reminders',
      'Multi-channel delivery',
      'Real-time tracking',
      'Digital signatures'
    ],
    features: [
      {
        title: 'SMS Payment Links',
        description: 'Send payment links via SMS for instant, convenient customer payments from any mobile device.'
      },
      {
        title: 'Digital Invoices',
        description: 'Create professional digital invoices with customizable templates and automatic numbering.'
      },
      {
        title: 'Payment Tracking',
        description: 'Track invoice status, payment confirmations, and outstanding balances in real-time.'
      }
    ],
    useCases: [
      'Field service businesses',
      'Healthcare providers',
      'Professional services',
      'Utility companies'
    ]
  },
  'analytics-reporting': {
    title: 'Advanced Analytics & Reporting',
    subtitle: 'Data-Driven Insights',
    description: 'Transform data into actionable insights with advanced analytics and reporting tools. Make informed decisions with real-time dashboards and comprehensive reports.',
    icon: Brain,
    benefits: [
      'Real-time dashboards',
      'Predictive analytics',
      'Custom reports',
      'Data visualization',
      'Automated insights',
      'Export capabilities'
    ],
    features: [
      {
        title: 'Real-Time Dashboards',
        description: 'Monitor key metrics and KPIs with interactive, real-time dashboards and visualizations.'
      },
      {
        title: 'Custom Reports',
        description: 'Create customized reports tailored to your business needs with flexible filters and scheduling.'
      },
      {
        title: 'Predictive Analytics',
        description: 'Leverage AI and machine learning to forecast trends and identify opportunities.'
      }
    ],
    useCases: [
      'Sales performance tracking',
      'Financial reporting',
      'Customer behavior analysis',
      'Operational efficiency monitoring'
    ]
  }
};

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const data = service ? serviceData[service] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] pt-32 pb-20 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-white text-[#0d3054]">
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] pt-32 pb-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-[#0270ca]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
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
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0270ca] to-[#0d3054] flex items-center justify-center">
              <Icon className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20" ref={ref}>
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#0270ca]" />
              Key Benefits
            </h2>
            <div className="space-y-4">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#0270ca] flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0270ca]/20 to-[#0d3054]/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl text-white mb-6">Common Use Cases</h2>
            <div className="space-y-3">
              {data.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all"
                >
                  <ArrowRight className="w-5 h-5 text-[#0270ca] flex-shrink-0 mt-1" />
                  <span className="text-white/90">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-4xl text-white text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-[#0270ca]/50 transition-all group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-2xl text-white mb-3 group-hover:text-[#0270ca] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Ready to Get Started with {data.title}?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team to learn how we can help transform your business with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[#0d3054] hover:bg-white/90 px-8 py-6 text-lg group"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
