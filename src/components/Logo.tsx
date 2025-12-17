import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* 'A' Shape - Dark Blue */}
                <path
                    d="M10 90 L40 10 L70 90"
                    stroke="#10367d"
                    strokeWidth="12"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                <path
                    d="M25 55 H55"
                    stroke="#10367d"
                    strokeWidth="10"
                />

                {/* 'E' Shape - Orange - Interlocking/Adjacent */}
                <path
                    d="M75 90 V35 H105"
                    stroke="#f07e21"
                    strokeWidth="12"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                <path
                    d="M75 62 H100"
                    stroke="#f07e21"
                    strokeWidth="10"
                />
                <path
                    d="M75 90 H105"
                    stroke="#f07e21"
                    strokeWidth="12"
                />
            </svg>
        </div>
    );
};

export default Logo;