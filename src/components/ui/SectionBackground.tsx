import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionBackgroundProps {
    type?: 'image' | 'video';
    src: string;
    opacity?: number;
    className?: string;
    parallaxStrengh?: number;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({
    type = 'image',
    src,
    opacity = 0.2, // Default subtle opacity
    className,
    parallaxStrengh = 100
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-parallaxStrengh, parallaxStrengh]);

    return (
        <div ref={ref} className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none select-none h-full w-full", className)}>
            {/* Parallax Container */}
            <motion.div
                style={{ y }}
                className="absolute -inset-[20%] w-[140%] h-[140%]"
            >
                {type === 'video' ? (
                    <video
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img
                        src={src}
                        alt="Background"
                        className="w-full h-full object-cover blur-[2px] scale-110"
                    />
                )}

                {/* Overlay Gradient to blend with content */}
                <div
                    className="absolute inset-0 bg-slate-950 mix-blend-multiply"
                    style={{ opacity: 1 - opacity }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
            </motion.div>
        </div>
    );
};

export default SectionBackground;
