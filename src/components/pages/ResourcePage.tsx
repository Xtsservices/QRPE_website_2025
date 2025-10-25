import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, BookOpen, Calendar, Clock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ResourceData {
  type: 'WHITEPAPER' | 'BLOG';
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: {
    heading: string;
    body: string;
  }[];
  keyTakeaways: string[];
}

const resourceData: Record<string, ResourceData> = {
  'cloud-native-transformation': {
    type: 'WHITEPAPER',
    title: 'Cloud-Native Platform Transformation',
    subtitle: 'A comprehensive guide to modernizing your infrastructure',
    author: 'QRPE Cloud Team',
    date: 'October 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxMzQ2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        heading: 'The Challenge',
        body: 'QRPE partnered with a fast-growing FinTech startup to modernize their infrastructure by migrating to a cloud-native architecture. The client was facing scalability issues, high operational costs, and slow deployment cycles with their legacy on-premises infrastructure.'
      },
      {
        heading: 'Our Approach',
        body: 'We implemented a comprehensive cloud-native transformation strategy using containerization with Docker and Kubernetes, microservices architecture, and CI/CD pipelines. Our team also integrated advanced monitoring and auto-scaling capabilities to ensure optimal performance.'
      },
      {
        heading: 'Technology Stack',
        body: 'The solution leveraged AWS cloud services, Kubernetes for orchestration, Docker for containerization, Terraform for infrastructure as code, and Jenkins for CI/CD automation. We also implemented comprehensive logging and monitoring using ELK stack and Prometheus.'
      },
      {
        heading: 'Results',
        body: 'The transformation resulted in 60% reduction in infrastructure costs, 10x faster deployment cycles, 99.99% uptime achieved, and improved scalability to handle 5x traffic spikes. The client can now deploy new features in hours instead of weeks.'
      }
    ],
    keyTakeaways: [
      'Cloud-native architecture enables rapid scaling and deployment',
      'Containerization reduces infrastructure costs significantly',
      'Microservices improve system resilience and maintainability',
      'Automated CI/CD pipelines accelerate time-to-market',
      'Infrastructure as Code ensures consistency and reliability'
    ]
  },
  'ai-threat-detection': {
    type: 'WHITEPAPER',
    title: 'AI-Powered Threat Detection & Response',
    subtitle: 'Enhancing cybersecurity with artificial intelligence',
    author: 'QRPE Security Team',
    date: 'September 28, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYxMjg3ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        heading: 'The Security Challenge',
        body: 'QRPE helped a leading enterprise enhance its cybersecurity posture by implementing AI-driven threat detection and response systems. The organization was experiencing an increasing number of sophisticated cyber threats that traditional security measures couldn\'t detect in time.'
      },
      {
        heading: 'AI-Driven Solution',
        body: 'We deployed machine learning models trained on millions of threat patterns to identify anomalies and potential security breaches in real-time. The system uses behavioral analysis, pattern recognition, and predictive analytics to stay ahead of emerging threats.'
      },
      {
        heading: 'Implementation',
        body: 'Our team integrated AI-powered Security Information and Event Management (SIEM) systems, deployed automated incident response workflows, and implemented continuous threat intelligence feeds. The solution includes real-time alerting and automated containment protocols.'
      },
      {
        heading: 'Impact',
        body: 'The AI-powered security system reduced threat detection time from hours to seconds, achieved 95% reduction in false positives, prevented 99.8% of attempted intrusions, and enabled automated response to common threats. The security team can now focus on strategic initiatives instead of manual monitoring.'
      }
    ],
    keyTakeaways: [
      'AI dramatically improves threat detection speed and accuracy',
      'Machine learning reduces false positives significantly',
      'Automated response systems contain threats faster',
      'Behavioral analysis identifies zero-day vulnerabilities',
      'Continuous learning improves security over time'
    ]
  },
  'cloud-roi-optimization': {
    type: 'BLOG',
    title: 'Maximizing Cloud ROI Through Optimization',
    subtitle: 'Strategies to reduce costs and improve cloud efficiency',
    author: 'Rajesh Kumar',
    date: 'October 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTI3OTUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        heading: 'Understanding Cloud Costs',
        body: 'Organizations invest in cloud computing to enhance agility, scalability, and efficiency, but without proper cost management, cloud expenses can spiral out of control. Understanding your cloud spending patterns is the first step toward optimization.'
      },
      {
        heading: 'Right-Sizing Resources',
        body: 'One of the biggest cost drains is over-provisioned resources. Regularly analyze your usage patterns and right-size your instances. Use auto-scaling to match resources with actual demand, and shut down non-production environments when not in use.'
      },
      {
        heading: 'Reserved Instances and Savings Plans',
        body: 'For predictable workloads, reserved instances and savings plans can reduce costs by up to 75%. Analyze your steady-state usage and commit to reserved capacity where it makes sense. Mix reserved, spot, and on-demand instances for optimal pricing.'
      },
      {
        heading: 'Monitoring and Governance',
        body: 'Implement comprehensive cost monitoring tools and establish governance policies. Set up alerts for unusual spending, tag resources for cost allocation, and regularly review and eliminate unused resources. Create a culture of cost awareness across teams.'
      }
    ],
    keyTakeaways: [
      'Regular cost analysis prevents budget overruns',
      'Right-sizing can reduce costs by 30-40%',
      'Reserved instances offer significant savings for predictable workloads',
      'Automated policies prevent resource waste',
      'Cost awareness should be embedded in development culture'
    ]
  },
  'cyber-threats-defense': {
    type: 'BLOG',
    title: 'Emerging Cyber Threats and Defense Strategies',
    subtitle: 'Staying ahead of evolving cybersecurity challenges',
    author: 'Priya Sharma',
    date: 'October 5, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1724219616919-aab943e7b00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwc2hpZWxkfGVufDF8fHx8MTc2MTM3ODg1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        heading: 'The Evolving Threat Landscape',
        body: 'Cybersecurity threats are evolving at an unprecedented pace. From sophisticated ransomware to AI-powered attacks, organizations face challenges that require adaptive and intelligent defense strategies. Understanding these emerging threats is crucial for effective protection.'
      },
      {
        heading: 'Ransomware 2.0',
        body: 'Modern ransomware attacks involve double and triple extortion, threatening to release sensitive data even after ransom payment. Organizations must implement multi-layered backup strategies, network segmentation, and zero-trust architectures to defend against these attacks.'
      },
      {
        heading: 'Social Engineering and Phishing',
        body: 'Attackers are using AI to create highly convincing phishing emails and deepfake videos. Employee training and awareness programs are critical, combined with advanced email filtering, multi-factor authentication, and behavioral analysis tools to detect suspicious activities.'
      },
      {
        heading: 'Zero-Trust Security Model',
        body: 'The traditional perimeter-based security is no longer sufficient. Implementing a zero-trust architecture where every access request is verified, regardless of origin, is essential. This includes micro-segmentation, continuous authentication, and least-privilege access controls.'
      }
    ],
    keyTakeaways: [
      'Cyber threats are becoming more sophisticated with AI',
      'Zero-trust architecture is essential for modern security',
      'Employee training is a critical defense layer',
      'Multi-layered backups protect against ransomware',
      'Continuous monitoring and adaptation are necessary'
    ]
  },
  'digital-payment-solutions': {
    type: 'BLOG',
    title: 'Digital Payment Solutions for Modern Businesses',
    subtitle: 'Streamlining transactions in the digital age',
    author: 'Amit Patel',
    date: 'September 20, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudHxlbnwxfHx8fDE3NjEzNDYxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        heading: 'The Digital Payment Revolution',
        body: 'Businesses are rapidly adopting digital payment solutions to streamline operations and enhance customer experience. From UPI to digital invoicing and payment gateways, modern payment technologies are transforming how transactions are conducted.'
      },
      {
        heading: 'UPI: The Game Changer',
        body: 'Unified Payments Interface (UPI) has revolutionized digital payments with instant, 24/7 transfers. Businesses integrating UPI can offer customers a seamless payment experience with minimal transaction fees, real-time settlements, and enhanced security features.'
      },
      {
        heading: 'Digital Invoicing and Automation',
        body: 'Automated digital invoicing reduces manual errors, speeds up payment collection, and improves cash flow. Integrated with payment gateways, businesses can send invoices via email or SMS with embedded payment links, making it easy for customers to pay instantly.'
      },
      {
        heading: 'Payment Gateway Integration',
        body: 'A robust payment gateway supports multiple payment methods including cards, wallets, net banking, and UPI. Businesses need solutions that offer high success rates, PCI DSS compliance, fraud detection, and seamless checkout experiences to maximize conversions.'
      }
    ],
    keyTakeaways: [
      'UPI offers instant, low-cost payment solutions',
      'Digital invoicing improves cash flow and reduces errors',
      'Multi-channel payment options increase conversion rates',
      'Security and compliance are non-negotiable',
      'Integration with existing systems is crucial for success'
    ]
  }
};

const ResourcePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const resource = slug ? resourceData[slug] : null;

  if (!resource) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Resource Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-[#0270ca] hover:bg-[#0270ca]/80">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(2, 112, 202, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(13, 48, 84, 0.2) 0%, transparent 50%)`,
          }} />
        </div>

        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-[#0270ca]/20 rounded-full blur-3xl"
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-block px-4 py-2 bg-[#0270ca]/20 backdrop-blur-sm rounded-full border border-[#0270ca]/30 mb-6">
              <span className="text-[#0270ca]">{resource.type}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {resource.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {resource.subtitle}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{resource.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{resource.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{resource.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-[#0270ca]/30 shadow-2xl"
          >
            <ImageWithFallback
              src={resource.image}
              alt={resource.title}
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={ref} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0d3054]/40 backdrop-blur-sm rounded-2xl border border-[#0270ca]/20 p-8 md:p-12">
            {resource.content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-8 last:mb-0"
              >
                <h2 className="text-2xl md:text-3xl text-white mb-4 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#0270ca]" />
                  {section.heading}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-gradient-to-br from-[#0270ca]/10 to-[#0d3054]/30 backdrop-blur-sm rounded-2xl border border-[#0270ca]/30 p-8"
          >
            <h2 className="text-2xl md:text-3xl text-white mb-6">Key Takeaways</h2>
            <ul className="space-y-3">
              {resource.keyTakeaways.map((takeaway, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <ArrowRight className="w-5 h-5 text-[#0270ca] flex-shrink-0 mt-1" />
                  <span className="text-lg">{takeaway}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl text-white mb-4">Ready to transform your business?</h3>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-[#0270ca] hover:bg-[#0270ca]/80 text-white px-8 py-6 text-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcePage;
