import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';
import qrpeLogo from 'figma:asset/b335b1bafda0c649f13790c66bebdb614f6dcc33.png';

interface DropdownItem {
  title: string;
  description: string;
  href: string;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industriesDropdown: DropdownSection[] = [
    {
      title: 'Manufacturing & Technology',
      items: [
        { title: 'Automotive', description: 'Digital solutions for automotive manufacturers and suppliers', href: '/industries/automotive' },
        { title: 'Manufacturing', description: 'Smart factory and Industry 4.0 solutions', href: '/industries/manufacturing' },
        { title: 'Banking', description: 'Digital transformation for banking and capital markets', href: '/industries/banking' },
        { title: 'Insurance', description: 'Innovation in insurance and risk management', href: '/industries/insurance' },
      ]
    }
  ];

  const servicesDropdown: DropdownSection[] = [
    {
      title: 'Digital & Cloud',
      items: [
        { title: 'Cloud Services', description: 'Cloud transformation and optimization', href: '/services/cloud-services' },
        { title: 'Data & AI', description: 'AI and analytics solutions', href: '/services/data-ai' },
      ]
    },
    {
      title: 'Enterprise Solutions',
      items: [
        { title: 'Consulting', description: 'Strategic business and technology consulting', href: '/services/consulting' },
        { title: 'Cybersecurity', description: 'Comprehensive security solutions', href: '/services/cybersecurity' },
      ]
    },
    {
      title: 'Payment Solutions',
      items: [
        { title: 'UPI Payment Solutions', description: 'Streamlined UPI payment solutions', href: '/services/upi-payments' },
        { title: 'Digital Invoicing & SMS Pay', description: 'Digital invoicing and SMS-based payment solutions', href: '/services/digital-invoicing' },
        { title: 'Payment Gateway Services', description: 'Payment gateway for businesses of any size', href: '/services/payment-gateway' },
        { title: 'Comprehensive Billing Applications (ERP)', description: 'Automated billing and invoicing systems', href: '/services/billing-applications' },
        { title: 'POS & Invoicing Solutions', description: 'Modern point-of-sale systems', href: '/services/pos-invoicing' },
        { title: 'Advanced Analytics & Reporting', description: 'Data-driven business insights', href: '/services/analytics-reporting' },
      ]
    }
  ];

  const insightsDropdown: DropdownSection[] = [
    {
      title: 'Thought Leadership',
      items: [
        { title: 'Blog', description: 'Latest insights and thought leadership', href: '/blog' },
        { title: 'Case Studies', description: 'Client success stories and implementations', href: '/case-studies' },
      ]
    }
  ];

  const aboutDropdown: DropdownSection[] = [
    {
      title: 'Company',
      items: [
        { title: 'About Us', description: 'Our mission, values, and leadership', href: '/about' },
        { title: 'Sustainability', description: 'Our commitment to sustainability', href: '/sustainability' },
        { title: 'Careers', description: 'Join our growing team', href: '/careers' },
      ]
    }
  ];

  const MegaDropdown = ({ sections }: { sections: DropdownSection[] }) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 top-full mt-2 w-screen max-w-4xl bg-[#0d3054]/95 backdrop-blur-lg rounded-lg shadow-2xl shadow-[#0270ca]/20 border border-white/10 overflow-hidden z-50"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-sm text-gray-400 mb-4">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <Link
                  key={itemIdx}
                  to={item.href}
                  onClick={() => setActiveDropdown(null)}
                >
                  <motion.div
                    className="block group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-white group-hover:text-[#0270ca] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{item.description}</div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0d3054]/90 backdrop-blur-lg shadow-lg shadow-[#0270ca]/10' : 'bg-[#0d3054]/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={qrpeLogo} 
                  alt="QRPE - No 'Q' For Pay" 
                  className="h-12 w-12 rounded-full object-cover"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { label: 'Industries', dropdown: industriesDropdown },
                { label: 'Services', dropdown: servicesDropdown },
                { label: 'Insights', dropdown: insightsDropdown },
                { label: 'About', dropdown: aboutDropdown },
              ].map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                >
                  <button className="flex items-center space-x-1 text-gray-300 hover:text-[#0270ca] transition-colors">
                    <span>{item.label}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.label && <MegaDropdown sections={item.dropdown} />}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[#0d3054] hover:bg-white/90 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-20 right-0 bottom-0 w-full bg-[#0d3054]/95 backdrop-blur-lg border-l border-white/10 z-40 lg:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-6">
              <Link to="/industries" className="block text-lg text-white hover:text-[#0270ca] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
              <Link to="/services" className="block text-lg text-white hover:text-[#0270ca] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/insights" className="block text-lg text-white hover:text-[#0270ca] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link>
              <Link to="/about" className="block text-lg text-white hover:text-[#0270ca] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Button 
                onClick={() => {
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-white text-[#0d3054] hover:bg-white/90"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
