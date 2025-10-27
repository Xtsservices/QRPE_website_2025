import { motion } from 'motion/react';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import qrpeLogo from '../assets/b335b1bafda0c649f13790c66bebdb614f6dcc33.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Industries',
      links: [
        { label: 'Automotive', href: '/industries/automotive' },
        { label: 'Banking', href: '/industries/banking' },
        { label: 'Insurance', href: '/industries/insurance' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Public Sector', href: '/industries/public-sector' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Cloud', href: '/services/cloud-services' },
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Data & AI', href: '/services/data-ai' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'UPI Payment', href: '/services/upi-payments' },
        { label: 'Payment Gateway', href: '/services/payment-gateway' },
        { label: 'Billing Applications', href: '/services/billing-applications' },
        { label: 'POS Solutions', href: '/services/pos-invoicing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blogs', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Sustainability', href: '/sustainability' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Use', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#0d3054] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={qrpeLogo} 
                alt="QRPE - No 'Q' For Pay" 
                className="h-16 w-16 rounded-full object-cover mb-6"
              />
              <div className="space-y-3 text-gray-300">
                <p>
                  QRPE Solutions Pvt Ltd<br />
                  Plot.no.29 NPL,<br />
                  Sri Sai Nagar colony, Meerpet<br />
                  Hyderabad, Rangareddy,<br />
                  Telangana 500097
                </p>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+919392392143" className="hover:text-[#0270ca] transition-colors block">
                      +91 93923 92143
                    </a>
                    <a href="tel:+919166616143" className="hover:text-[#0270ca] transition-colors block">
                      +91 91666 16143
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:Info@qrpe.in" className="hover:text-[#0270ca] transition-colors">
                    Info@qrpe.in
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>
                      <motion.div
                        className="text-gray-300 hover:text-[#0270ca] transition-colors inline-block relative group"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0270ca] group-hover:w-full transition-all duration-300" />
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 text-sm text-center flex items-center justify-center gap-1">
  <span className="text-xl font-semibold leading-none">©</span>
  {currentYear} QRPE Solutions Pvt Ltd. All rights reserved.
</p>



            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0270ca] transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
