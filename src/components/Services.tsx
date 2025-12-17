import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { BarChart3, Cloud, Layout, Palette, PieChart, Settings, type LucideIcon } from 'lucide-react';

interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
}

const services: Service[] = [
    {
        title: 'E-Commerce Strategy',
        description: 'Data-driven strategies to maximize your online potential and market reach.',
        icon: PieChart,
    },
    {
        title: 'Platform Development',
        description: 'Custom Shopify, Magento, and WooCommerce solutions tailored to your brand.',
        icon: Cloud,
    },
    {
        title: 'Digital Marketing',
        description: 'SEO, PPC, and social media campaigns that drive traffic and conversions.',
        icon: BarChart3,
    },
    {
        title: 'UX/UI Design',
        description: 'Intuitive and engaging designs that enhance user experience and retention.',
        icon: Palette,
    },
    {
        title: 'Data Analytics',
        description: 'In-depth insights to optimize performance and decision-making.',
        icon: Layout,
    },
    {
        title: 'Support & Maintenance',
        description: 'Ongoing support to ensure your store runs smoothly 24/7.',
        icon: Settings,
    },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={onMouseMove}
            className="glass-card group overflow-hidden"
        >
            {/* SpotLight Effect - Subtle for light mode */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={style}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50" />
            </motion.div>

            <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md border border-white/20">
                    <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 font-primary">{service.title}</h3>
                <p className="text-slate-700 font-secondary leading-relaxed">{service.description}</p>
            </div>

            {/* Animated Border Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};


const Services: React.FC = () => {
    return (
        <section id="services" className="relative py-24 bg-transparent overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-primary tracking-tight"
                    >
                        End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">E-Commerce Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto font-secondary"
                    >
                        We provide comprehensive solutions to build, grow, and manage your online business with cutting-edge technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;