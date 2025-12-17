import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface NavLink {
    name: string;
    path: string;
    type: 'route' | 'scroll';
    targetId?: string;
}

const navLinks: NavLink[] = [
    { name: 'Home', path: '/', type: 'route' },
    { name: 'Services', path: '/services', type: 'route' },
    { name: 'About', path: '/about', type: 'route' },
    // Keeping Home sections accessible
    { name: 'Specialties', path: '/', type: 'scroll', targetId: 'specialties' },
    { name: 'Client Stories', path: '/', type: 'scroll', targetId: 'testimonials' }, // Renamed for clarity
    { name: 'Contact', path: '/', type: 'scroll', targetId: 'contact' },
];

// Magnetic Link Component handled with customized events or standard Links
const NavbarItem: React.FC<{ link: NavLink; onClick?: () => void }> = ({ link, onClick }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const middleX = clientX - (rect.left + rect.width / 2);
            const middleY = clientY - (rect.top + rect.height / 2);
            setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) onClick();

        if (link.type === 'scroll' && link.targetId) {
            e.preventDefault();

            if (location.pathname !== '/') {
                // If not on home, navigate to home then scroll
                navigate('/', { state: { scrollTo: link.targetId } });
            } else {
                // If on home, just scroll
                const element = document.getElementById(link.targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        // If type is 'route', let the Link handle it normally, just make sure to scroll top if needed (Layout handles ScrollToTop)
    };

    const { x, y } = position;
    const isActive = location.pathname === link.path && link.type === 'route';

    // Wrapper content based on type
    const Content = (
        <span className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-brand-primary group">
            <span className={`relative z-10 ${isActive ? 'text-brand-primary' : 'text-slate-600'}`}>{link.name}</span>
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${isActive ? 'scale-x-100' : ''}`} />
        </span>
    );

    return (
        <motion.div
            ref={ref}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {link.type === 'route' ? (
                <Link to={link.path} onClick={handleClick}>
                    {Content}
                </Link>
            ) : (
                <a href={`/#${link.targetId}`} onClick={handleClick}>
                    {Content}
                </a>
            )}
        </motion.div>
    );
};


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    // Check for scroll state from navigation
    useEffect(() => {
        if (location.state && (location.state as any).scrollTo) {
            const targetId = (location.state as any).scrollTo;
            // Slight delay to allow page mount
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                // Clear state to prevent scrolling on refresh? react-router state clears on refresh usually.
                window.history.replaceState({}, document.title);
            }, 100);
        }
    }, [location]);

    // Smooth morph of background
    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.65)"]
    );
    const backdropBlur = useTransform(
        scrollY,
        [0, 50],
        ["blur(0px)", "blur(12px)"]
    );
    const borderBottom = useTransform(
        scrollY,
        [0, 50],
        ["1px solid rgba(0, 0, 0, 0)", "1px solid rgba(0, 0, 0, 0.05)"]
    );

    // Always show background on non-home pages if desired, or keep dynamic. 
    // Let's keep it dynamic but maybe start darker if page is short. 
    // Actually standard behavior is fine.

    return (
        <motion.nav
            style={{
                backgroundColor,
                backdropFilter: backdropBlur,
                borderBottom,
                paddingTop: '1rem',
                paddingBottom: '1rem'
            }}
            className="fixed w-full z-50 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center"
                        >
                            <Logo className="w-10 h-10 mr-3 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-2xl font-bold font-primary tracking-wider text-slate-900">
                                AVHAD ENTERPRISES
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.5 }}
                            >
                                <NavbarItem link={link} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-900 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-200"
            >
                <div className="py-4 px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <div key={link.name} onClick={() => setIsOpen(false)}>
                            {link.type === 'route' ? (
                                <Link
                                    to={link.path}
                                    className="text-slate-600 hover:text-brand-primary font-medium block text-lg py-2 border-b border-slate-100"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <NavbarItem link={link} onClick={() => setIsOpen(false)} /> // Reusing NavbarItem logic for click handling might behave odd with layout, simplify for mobile
                            )}
                        </div>
                    ))}
                    {/* Simplified mobile handling for hash links since NavbarItem is styled for desktop */}
                    {navLinks.filter(l => l.type === 'scroll').map(link => (
                        <div key={link.name + '-mobile'} className="md:hidden">
                            {/* Rendering handled above, but ensuring click logic works */}
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;