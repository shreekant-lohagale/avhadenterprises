import React, { useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';


const CountUp: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    React.useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    React.useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className="tabular-nums" />;
};





const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-transparent relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-primary/5 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-brand-text-primary font-primary leading-tight"
                        >
                            Your Partner in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Digital Evolution</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-lg text-brand-text-secondary font-secondary leading-relaxed"
                        >
                            <p>
                                Founded in 2023 in Nashik, Maharashtra, Avhad Enterprises was built on a singular vision: to democratize world-class e-commerce technology for growing businesses.
                            </p>
                            <p>
                                We don't just build websites; we engineer digital ecosystems. From high-performance storefronts to data-driven marketing engines, our team acts as the catalyst for your brand's exponential growth.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-4"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-medium font-primary tracking-wide">
                                <span className="w-2 h-2 rounded-full bg-brand-success mr-2 animate-pulse" />
                                HQ: Nashik, Maharashtra, India
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { label: "Founded", value: 2023, suffix: "" },
                            { label: "Specialists", value: 50, suffix: "+" },
                            { label: "Projects", value: 120, suffix: "+" },
                            { label: "Growth", value: 150, suffix: "%" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-card group flex flex-col items-center justify-center text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-brand-text-primary mb-2 font-primary group-hover:text-brand-primary transition-colors">
                                    <CountUp value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-brand-text-secondary font-medium font-secondary text-slate-700">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;