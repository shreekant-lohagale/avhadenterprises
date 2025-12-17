import React from 'react';
import { motion } from 'framer-motion';


const specialties = [
  "Snapchat Ads", "Google Ads", "Facebook Ads", "Instagram Marketing",
  "LinkedIn Growth", "Twitter Strategy", "TikTok Ads", "YouTube SEO",
  "Shopify Development", "WooCommerce", "Magento", "React & Next.js",
  "Tailwind CSS", "UI/UX Design", "Branding", "CRO", "Email Marketing"
];

const Marquee: React.FC<{ items: string[]; direction?: 'left' | 'right'; speed?: number }> = ({ items, direction = 'left', speed = 20 }) => {
  return (
    <div className="relative flex overflow-hidden py-4 group">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-8"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default text-sm sm:text-base font-secondary tracking-wide"
          >
            {item}
          </div>
        ))}
      </motion.div>

      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
    </div>
  );
};

const Specialties: React.FC = () => {
  return (
    <section id="specialties" className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Background tech grip */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-uppercase mb-4 block font-secondary">Technologies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-primary">
            Built with Modern Stack
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-secondary">
            From full-stack development to high-performance marketing, we master the tools that drive digital growth.
          </p>
        </div>

        <div className="space-y-8">
          <Marquee items={specialties.slice(0, 9)} direction="left" speed={30} />
          <Marquee items={specialties.slice(8)} direction="right" speed={35} />
        </div>
      </div>
    </section>
  );
};

export default Specialties;
