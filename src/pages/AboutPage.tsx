import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield, Users, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';


const AboutPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);


    // Timeline Data
    const timeline = [
        { year: '2023', title: 'The Beginning', description: 'Founded in Nashik with a vision to revolutionize local e-commerce.' },
        { year: '2024', title: 'Rapid Expansion', description: 'Expanded team to 50+ specialists and delivered 100+ projects.' },
        { year: '2025', title: 'Global Reach', description: 'Establishing partnerships across borders and launching proprietary tech tools.' },
    ];

    // Values Data
    const values = [
        { icon: Shield, title: 'Integrity', desc: 'Transparent communication and honest partnerships.' },
        { icon: Users, title: 'Collaboration', desc: 'We work with you, not just for you.' },
        { icon: Zap, title: 'Innovation', desc: 'Always staying ahead of the technology curve.' },
        { icon: Target, title: 'Results', desc: 'Data-driven strategies that deliver measurable ROI.' },
    ];

    return (
        <div ref={containerRef} className="bg-transparent min-h-screen text-slate-300 overflow-hidden font-secondary">

            {/* HER0 SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
                />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-orange text-sm font-medium mb-6"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-brand-text-primary mb-6 font-primary leading-tight"
                    >
                        Building the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Commerce</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-brand-text-secondary max-w-2xl mx-auto font-secondary"
                    >
                        Driven by innovation, grounded in results.
                    </motion.p>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="py-24 px-4 bg-brand-surface">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary font-primary mb-4">Our Philosophy</h2>
                        <p className="text-brand-text-secondary max-w-xl mx-auto">The core principles that guide every decision we make.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card group"
                            >
                                <div className="w-12 h-12 bg-white/80 border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                                    <item.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-primary">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section className="py-24 px-4 relative">
                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent" />

                    <div className="space-y-24">
                        {timeline.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 flex items-center justify-center bg-gradient-to-b from-brand-background to-brand-surface relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />
                <div className="text-center px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text-primary font-primary mb-8">Ready to see what we can do?</h2>
                    <Link to="/services">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center px-8 py-4 bg-brand-primary text-white font-bold rounded-full text-lg shadow-lg hover:shadow-brand-primary/30 transition-all"
                        >
                            Explore Our Services
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </div>
            </section>

        </div>
    );
};

const TimelineItem: React.FC<{ item: any; index: number }> = ({ item, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
            {/* Spacer */}
            <div className="flex-1 hidden md:block" />

            {/* Dot */}
            <div className="absolute left-[14px] md:left-1/2 w-3 h-3 bg-brand-primary rounded-full border-4 border-white z-10 -translate-x-1/2 md:translate-x-[-50%] shadow-sm" />

            {/* Content */}
            <motion.div
                className="flex-1 w-full pl-12 md:pl-0 md:px-12"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className={`text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-6xl font-bold text-brand-text-primary/5 font-primary absolute -mt-8 select-none">{item.year}</span>
                    <div className="relative z-10 pt-4">
                        <h3 className="text-2xl font-bold text-brand-text-primary font-primary mb-2">{item.title}</h3>
                        <p className="text-brand-text-secondary">{item.description}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutPage;
