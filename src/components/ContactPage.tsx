import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Business District', 'Tech Hub, Mumbai 400001', 'India'],
      color: '#0270ca'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 22 1234 5678', '+91 98765 43210', 'Mon-Fri, 9AM-6PM IST'],
      color: '#0d3054'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@qrpe.com', 'support@qrpe.com', 'sales@qrpe.com'],
      color: '#0270ca'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] pt-32 pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#0270ca]/20 rounded-full blur-3xl"
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
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
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
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in <span className="text-[#0270ca]">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Have a question or ready to transform your business? We're here to help.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={ref}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
          >
            <h2 className="text-3xl text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/90 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0270ca] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/90 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0270ca] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white/90 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0270ca] transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-white/90 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0270ca] transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/90 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0270ca] transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-[#0d3054] hover:bg-white/90 py-6 text-lg group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0270ca] to-[#0d3054]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-[#0d3054] border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl text-white mb-6">Contact Information</h2>
              <p className="text-white/80 mb-8">
                Reach out to us through any of the following channels. Our team is ready to assist you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#0270ca] to-[#0d3054] flex items-center justify-center"
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/70 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-[#0270ca] to-[#0d3054] rounded-2xl p-8 border border-white/20 shadow-2xl"
            >
              <h3 className="text-2xl text-white mb-4">Why Choose QRPE?</h3>
              <div className="space-y-3">
                {[
                  'Industry-leading payment solutions',
                  '24/7 dedicated customer support',
                  'Cutting-edge technology stack',
                  'Proven track record of success',
                  'Scalable enterprise solutions'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already benefiting from our innovative payment solutions and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-[#0d3054] hover:bg-white/90 px-8 py-6 text-lg">
                  Schedule a Demo
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0d3054] px-8 py-6 text-lg"
                >
                  Download Brochure
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
