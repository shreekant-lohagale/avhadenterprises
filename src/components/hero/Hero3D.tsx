import React from 'react';
import { SplineScene } from "../ui/spline"


const Hero3D = () => {
    return (
        <div className="fixed inset-0 z-[-1] w-full h-screen overflow-hidden">


            {/* 3D Scene - Full Screen Background */}
            <div className="absolute inset-0">
                <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
            </div>

            {/* Overlay for text readability - Lighter for Frost Theme */}
            <div className="absolute inset-0 bg-brand-background/30 pointer-events-none" />
        </div>
    )
}

export default Hero3D
