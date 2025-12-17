import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LineChart, Globe, Smartphone, CheckCircle } from 'lucide-react';


const ServicesPage: React.FC = () => {
    const services = [
        {
            icon: Globe,
            title: "Web Development",
            description: "High-performance websites built with React, Next.js, and modern frameworks. We focus on speed, accessibility, and conversion-optimized design.",
            features: ["Custom React/Next.js Apps", "Headless CMS Integration", "Progressive Web Apps (PWA)"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: LineChart,
            title: "Digital Marketing",
            description: "Data-driven strategies to scale your brand. From SEO dominance to high-ROI paid advertising campaigns.",
            features: ["SEO & Content Strategy", "Google & Social Ads", "Analytics & Reporting"],
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Smartphone,
            title: "App Development",
            description: "Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.",
            features: ["React Native Development", "iOS & Android Native", "App Store Optimization"],
            color: "from-orange-500 to-red-500"
        }
    ];

    const process = [
        { step: "01", title: "Discovery", desc: "Understanding your goals and market." },
        { step: "02", title: "Strategy", desc: "Planning the roadmap to success." },
        { step: "03", title: "Build", desc: "Agile development with regular updates." },
        { step: "04", title: "Launch", desc: "Deploying and optimizing for growth." },
    ];

    return (
        <div className="bg-transparent min-h-screen text-brand-text-primary font-secondary overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold font-primary mb-8 text-brand-text-primary"
                    >
                        TRANSFORM<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">YOUR VISION</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl text-brand-text-secondary max-w-2xl border-l-2 border-brand-primary pl-6"
                    >
                        We offer a comprehensive suite of digital services designed to accelerate your growth and establish market dominance.
                    </motion.p>
                </div>
            </section>

            {/* SERVICES BREAKDOWN */}
            <section className="py-20 px-4 space-y-32">
                {services.map((service, index) => (
                    <div key={service.title} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-8 shadow-lg shadow-blue-500/20`}>
                                <service.icon className="w-full h-full text-white" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-primary mb-6 text-slate-900">{service.title}</h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-lg text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`glass-card h-[400px] group overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-9xl font-bold text-brand-text-primary/5 font-primary select-none group-hover:scale-110 transition-transform duration-700">
                                    0{index + 1}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </section>

            {/* OUR PROCESS */}
            <section className="py-32 px-4 bg-brand-surface border-y border-brand-primary/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-primary mb-4 text-brand-text-primary">Our Process</h2>
                        <p className="text-brand-text-secondary">A proven framework for consistent success.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="text-6xl font-bold text-brand-text-primary/10 font-primary mb-4">{step.step}</div>
                                <h3 className="text-xl font-bold text-brand-text-primary mb-2">{step.title}</h3>
                                <p className="text-brand-text-secondary text-sm">{step.desc}</p>
                                {i !== 3 && (
                                    <div className="hidden md:block absolute top-12 right-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent translate-x-1/2" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-gradient-to-b from-brand-background to-brand-surface text-center px-4 relative">
                <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold font-primary mb-8 leading-tight text-brand-text-primary">
                        Ready to Scale Your<br />Digital Presence?
                    </h2>
                    <p className="text-xl text-brand-text-secondary mb-10">
                        Let's build something extraordinary together.
                    </p>
                    <Link to="/" state={{ scrollTo: 'contact' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-brand-primary/30 transition-shadow"
                        >
                            Start Your Project
                        </motion.button>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default ServicesPage;
