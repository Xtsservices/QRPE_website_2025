import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Briefcase, FileText, Lock, Building2, BookOpen, Leaf } from 'lucide-react';

interface PageContent {
  title: string;
  subtitle: string;
  icon: any;
  sections: { heading: string; content: string }[];
}

const pageData: Record<string, PageContent> = {
  '/careers': {
    title: 'Careers at QRPE',
    subtitle: 'Join Our Team of Innovators',
    icon: Briefcase,
    sections: [
      {
        heading: 'Why Work With Us',
        content: 'At QRPE, we believe in creating an environment where innovation thrives. Join a team of passionate professionals working on cutting-edge technology projects. We offer competitive compensation, growth opportunities, and a culture that values creativity, collaboration, and continuous learning.'
      },
      {
        heading: 'Our Culture',
        content: 'We foster a culture of innovation, respect, and teamwork. Our employees are our greatest asset, and we invest in their growth through training programs, mentorship, and challenging projects. Work-life balance is important to us, and we provide flexible working arrangements to help you perform at your best.'
      },
      {
        heading: 'Open Positions',
        content: 'We are always looking for talented individuals to join our team. Current openings include software engineers, data scientists, UX designers, cloud architects, and business analysts. If you are passionate about technology and want to make an impact, we would love to hear from you.'
      },
      {
        heading: 'How to Apply',
        content: 'Send your resume and cover letter to careers@qrpe.in. Please mention the position you are applying for in the subject line. We review all applications carefully and will reach out if your profile matches our requirements. Join us in shaping the future of technology!'
      }
    ]
  },
  '/blog': {
    title: 'QRPE Blog',
    subtitle: 'Insights, Trends & Technology',
    icon: BookOpen,
    sections: [
      {
        heading: 'Latest Insights',
        content: 'Stay updated with the latest trends in technology, digital transformation, and business innovation. Our blog features expert insights, case studies, industry analysis, and best practices from our team of technology consultants and engineers.'
      },
      {
        heading: 'Technology Trends',
        content: 'Explore articles on cloud computing, artificial intelligence, cybersecurity, payment technologies, and enterprise solutions. We share our expertise and real-world experiences to help you navigate the evolving technology landscape.'
      },
      {
        heading: 'Case Studies',
        content: 'Learn how we have helped businesses across industries achieve their digital transformation goals. Our case studies showcase successful implementations, challenges overcome, and measurable business outcomes.'
      },
      {
        heading: 'Subscribe',
        content: 'Subscribe to our newsletter to receive the latest blog posts, whitepapers, and industry updates directly in your inbox. Stay informed about emerging technologies and how they can benefit your business.'
      }
    ]
  },
  '/case-studies': {
    title: 'Case Studies',
    subtitle: 'Success Stories from Our Clients',
    icon: FileText,
    sections: [
      {
        heading: 'Client Success Stories',
        content: 'Discover how QRPE has helped organizations transform their operations, improve efficiency, and drive growth through innovative technology solutions. Our case studies demonstrate real-world impact across various industries and use cases.'
      },
      {
        heading: 'Banking Transformation',
        content: 'We helped a leading bank modernize their core banking system, implementing digital banking platforms that improved customer experience by 85%. The solution included mobile banking, payment gateway integration, and advanced analytics.'
      },
      {
        heading: 'Payment Solutions Success',
        content: 'Implemented comprehensive UPI and digital payment solutions for an enterprise, resulting in 60% faster transaction processing and 95% customer satisfaction. The project included payment gateway integration, digital invoicing, and real-time analytics.'
      },
      {
        heading: 'Retail Innovation',
        content: 'Deployed cloud-based POS and inventory management systems for a retail chain with 100+ locations. The solution enabled real-time inventory tracking, improved customer insights, and increased sales by 40%.'
      }
    ]
  },
  '/sustainability': {
    title: 'Sustainability',
    subtitle: 'Our Commitment to a Better Future',
    icon: Leaf,
    sections: [
      {
        heading: 'Environmental Responsibility',
        content: 'At QRPE, we are committed to reducing our environmental impact. We leverage cloud computing to minimize physical infrastructure, promote remote work to reduce carbon emissions, and implement paperless operations wherever possible.'
      },
      {
        heading: 'Green Technology',
        content: 'We help our clients adopt sustainable technology practices. Our cloud solutions reduce energy consumption, our optimization services minimize waste, and our digital transformation initiatives eliminate paper-based processes.'
      },
      {
        heading: 'Social Impact',
        content: 'We believe in giving back to the community. Through technology education programs, skill development initiatives, and partnerships with non-profits, we work to bridge the digital divide and create opportunities for underprivileged communities.'
      },
      {
        heading: 'Sustainable Growth',
        content: 'Our approach to growth balances business success with environmental and social responsibility. We measure our impact beyond financial metrics, tracking our contribution to sustainability goals and community development.'
      }
    ]
  },
  '/terms': {
    title: 'Terms of Use',
    subtitle: 'Website Terms and Conditions',
    icon: FileText,
    sections: [
      {
        heading: 'Acceptance of Terms',
        content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this website.'
      },
      {
        heading: 'Use License',
        content: 'Permission is granted to temporarily access the materials on QRPE\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, use the materials for any commercial purpose, or attempt to reverse engineer any software contained on the website.'
      },
      {
        heading: 'Disclaimer',
        content: 'The materials on QRPE\'s website are provided on an "as is" basis. QRPE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
      },
      {
        heading: 'Limitations',
        content: 'In no event shall QRPE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on QRPE\'s website, even if QRPE or an authorized representative has been notified orally or in writing of the possibility of such damage.'
      },
      {
        heading: 'Revisions',
        content: 'The materials appearing on QRPE\'s website could include technical, typographical, or photographic errors. QRPE does not warrant that any of the materials on its website are accurate, complete, or current. QRPE may make changes to the materials contained on its website at any time without notice.'
      }
    ]
  },
  '/privacy': {
    title: 'Privacy Policy',
    subtitle: 'How We Protect Your Information',
    icon: Lock,
    sections: [
      {
        heading: 'Information Collection',
        content: 'We collect information from you when you visit our website, fill out a form, or subscribe to our newsletter. The information collected may include your name, email address, phone number, company name, and other details you voluntarily provide.'
      },
      {
        heading: 'How We Use Your Information',
        content: 'The information we collect is used to personalize your experience, improve our website, improve customer service, process transactions, send periodic emails, and follow up with you after correspondence. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.'
      },
      {
        heading: 'Data Protection',
        content: 'We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential.'
      },
      {
        heading: 'Cookies',
        content: 'We use cookies to understand and save your preferences for future visits, keep track of advertisements, and compile aggregate data about site traffic and interaction. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.'
      },
      {
        heading: 'Your Rights',
        content: 'You have the right to access, update, or delete your personal information at any time. You can also opt-out of receiving communications from us. If you have any questions about our privacy practices, please contact us at privacy@qrpe.in.'
      },
      {
        heading: 'Updates to Privacy Policy',
        content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.'
      }
    ]
  }
};

const GenericPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  const location = useLocation();

  const data = pageData[location.pathname];

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] pt-32 pb-20 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl mb-4">Page Not Found</h1>
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="text-5xl md:text-6xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.title}
          </motion.h1>
          <motion.p
            className="text-xl text-[#0270ca]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {data.subtitle}
          </motion.p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8 mb-20" ref={ref}>
          {data.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-[#0270ca]/50 transition-all"
            >
              <h2 className="text-2xl text-white mb-4">{section.heading}</h2>
              <p className="text-white/80 text-lg leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {!location.pathname.includes('/terms') && !location.pathname.includes('/privacy') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Contact us today!
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
        )}
      </div>
    </div>
  );
};

export default GenericPage;
