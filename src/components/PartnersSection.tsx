import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const partners = [
  { name: 'Worldtek', color: '#0d3054' },
  { name: 'QRPE', color: '#0270ca' },
  { name: 'Msgbe', color: '#0d3054' },
  { name: 'Selfscan', color: '#0270ca' },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] text-gray-400 mb-2">PARTNERS</h2>
          <h3 className="text-3xl md:text-4xl text-white">Our Brands</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-32 flex items-center justify-center hover:bg-white/10 hover:border-[#0270ca]/50 hover:shadow-2xl hover:shadow-[#0270ca]/20 transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0d3054] to-[#0270ca] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                />

                <motion.div
                  className="text-2xl text-white transition-colors duration-300 relative z-10"
                  whileHover={{ color: '#0270ca' }}
                >
                  {partner.name}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
