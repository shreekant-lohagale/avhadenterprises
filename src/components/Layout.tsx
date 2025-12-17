import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC = () => {
    return (
        <div className="text-sm antialiased min-h-screen flex flex-col relative text-slate-200">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
