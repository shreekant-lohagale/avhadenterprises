import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    initial: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'Founder',
        company: 'Urban Styles',
        content: "Avhad Enterprises transformed our local clothing store into a national brand. Our online sales increased by 200% within the first 6 months.",
        initial: 'R',
    },
    {
        id: 2,
        name: 'Sarah Williams',
        role: 'Marketing Director',
        company: 'TechFlow Solutions',
        content: "Their SEO strategy is top-notch. We're now ranking on the first page for all our major keywords. Highly recommended for serious growth.",
        initial: 'S',
    },
    {
        id: 3,
        name: 'Amit Patel',
        role: 'CEO',
        company: 'FreshMart India',
        content: "The custom e-commerce platform they built is incredibly fast and user-friendly. Our customer retention rate has never been higher.",
        initial: 'A',
    },
    {
        id: 4,
        name: 'Priya Sharma',
        role: 'CTO',
        company: 'EduTech Pro',
        content: "Outstanding technical expertise. They solved complex integration challenges that other agencies gave up on. A true technology partner.",
        initial: 'P',
    },
];

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-6 font-primary">
                        Client Success Stories
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-secondary">
                        See how we've helped businesses achieve their digital goals through innovation and strategy.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Carousel Container */}
                    <div className="overflow-hidden h-[400px] flex items-center justify-center relative">
                        {testimonials.map((testimonial, index) => {
                            // Calculate position relative to active index
                            const offset = index - activeIndex;
                            // Handle wrap-around for endless feeling (simplified for 4 items: just basic carousel)
                            // A simple stack/fade transition is cleaner and less buggy than a wrap-around drag for this specific request "Spotlight"

                            const isActive = index === activeIndex;

                            return (
                                <motion.div
                                    key={testimonial.id}
                                    initial={false}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        x: isActive ? 0 : offset > 0 ? 100 : -100,
                                        scale: isActive ? 1 : 0.8,
                                        zIndex: isActive ? 10 : 0,
                                        display: isActive ? 'block' : 'none' // Simple visibility toggle for crossfade feel
                                    }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute w-full max-w-2xl"
                                >
                                    <div className="glass-card mx-auto relative md:p-12">
                                        <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-600/40" />

                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-1 mb-6 shadow-lg shadow-blue-500/20">
                                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl font-bold text-blue-600 font-primary">
                                                    {testimonial.initial}
                                                </div>
                                            </div>

                                            <div className="mb-6">
                                                <div className="flex justify-center mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                                    ))}
                                                </div>
                                                <p className="text-slate-700 italic font-secondary text-lg">"{testimonial.content}"</p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 font-primary">{testimonial.name}</h4>
                                                <p className="text-blue-500 text-sm font-medium">{testimonial.role}, {testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div className="flex gap-2 items-center">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-brand-primary' : 'bg-brand-primary/20 hover:bg-brand-primary/40'
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;