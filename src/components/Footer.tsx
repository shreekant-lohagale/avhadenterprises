import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-background text-brand-text-secondary py-16 border-t border-brand-text-primary/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-lg" />
                            <span className="text-2xl font-bold text-brand-text-primary font-primary tracking-tight">Avhad<span className="text-brand-text-secondary">Enterprises</span></span>
                        </div>
                        <p className="text-slate-400 max-w-sm leading-relaxed font-secondary">
                            Your Partner in Digital Evolution. We transform businesses with cutting-edge technology and data-driven strategies.
                        </p>
                        <div className="flex space-x-4">
                            {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -3, color: '#fff' }}
                                    className="w-10 h-10 rounded-full bg-brand-text-primary/5 flex items-center justify-center hover:bg-brand-primary/20 transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-brand-text-primary font-bold mb-6 font-primary">Services</h4>
                        <ul className="space-y-4 text-sm font-secondary">
                            {["E-Commerce Development", "Digital Marketing", "SEO Strategy", "UI/UX Design"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-brand-primary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-brand-text-primary font-bold mb-6 font-primary">Contact</h4>
                        <ul className="space-y-4 text-sm font-secondary">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-brand-primary" />
                                <span>Nashik, Maharashtra<br />India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-brand-primary" />
                                <a href="mailto:hello@avhadenterprises.com" className="hover:text-brand-primary transition-colors">hello@avhadenterprises.com</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-brand-primary" />
                                <a href="tel:+911234567890" className="hover:text-brand-primary transition-colors">+91 123 456 7890</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-secondary">
                    <p>&copy; {new Date().getFullYear()} Avhad Enterprises. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;