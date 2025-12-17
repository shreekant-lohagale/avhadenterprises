import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, Send } from 'lucide-react';


interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

const FloatingInput: React.FC<{
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    textarea?: boolean;
}> = ({ label, name, type = "text", value, onChange, required, textarea }) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value.length > 0;

    const labelVariants = {
        default: { top: textarea ? "1.5rem" : "50%", y: "-50%", scale: 1, color: "#64748b" }, // slate-500
        float: { top: "0px", y: "-50%", scale: 0.85, color: "#272A46" }, // brand-primary (Midnight)
    };

    return (
        <div className="relative pt-4 mb-4">
            <motion.label
                initial="default"
                animate={isFocused || hasValue ? "float" : "default"}
                variants={labelVariants}
                transition={{ duration: 0.2 }}
                className="absolute left-0 pointer-events-none origin-left font-secondary"
            >
                {label}
            </motion.label>
            {textarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    rows={4}
                    className="w-full bg-transparent border-b border-slate-300 py-2 text-slate-900 focus:outline-none focus:border-brand-primary transition-colors resize-none font-secondary"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    className="w-full bg-transparent border-b border-slate-300 py-2 text-slate-900 focus:outline-none focus:border-brand-primary transition-colors font-secondary"
                />
            )}
        </div>
    );
};

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-slate-950 to-slate-950 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 font-primary leading-tight"
                        >
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Scale Your Brand?</span>
                        </motion.h2>
                        <p className="text-lg text-slate-600 font-secondary leading-relaxed">
                            Let's discuss how we can transform your digital presence. Whether you need a new platform, better marketing, or deep analytics we are here to help.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="glass-card flex items-center space-x-4 p-6">
                                <div className="w-12 h-12 rounded-full bg-white/80 border border-white/20 flex items-center justify-center text-brand-primary shadow-md">
                                    <Send className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold font-primary">Email Us</h4>
                                    <p className="text-slate-700 font-secondary">hello@avhadenterprises.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="glass-card h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12 border-green-200 shadow-xl"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                        className="w-20 h-20 bg-brand-success rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-success/30"
                                    >
                                        <Check className="w-10 h-10 text-white" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-brand-text-primary mb-2 font-primary">Message Sent!</h3>
                                    <p className="text-brand-text-secondary font-secondary">We'll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    viewport={{ once: true }}
                                    onSubmit={handleSubmit}
                                    className="glass-card md:p-10"
                                >
                                    <div className="grid md:grid-cols-2 gap-x-6">
                                        <FloatingInput label="Name" name="name" value={formData.name} onChange={handleChange} required />
                                        <FloatingInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-x-6">
                                        <FloatingInput label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                                        <FloatingInput label="Company" name="company" value={formData.company} onChange={handleChange} />
                                    </div>
                                    <FloatingInput label="Message" name="message" value={formData.message} onChange={handleChange} textarea required />

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full mt-6 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-primary/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {status === 'submitting' ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;