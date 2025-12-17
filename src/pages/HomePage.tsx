import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Specialties from '../components/Specialties';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Hero3D from '../components/hero/Hero3D';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero3D />
            <Hero />
            <section id="services">
                <Services />
            </section>
            <section id="specialties">
                <Specialties />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    );
};

export default HomePage;
