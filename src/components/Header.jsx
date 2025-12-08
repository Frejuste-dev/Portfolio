import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ profile, darkMode, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}
        >
            <div className="container-custom flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold font-display flex items-center gap-2 group">
                    <span className="text-neon-cyan group-hover:animate-pulse">&lt;</span>
                    <span className="text-white group-hover:text-neon-purple transition-colors">
                        {profile.firstName}
                    </span>
                    <span className="text-neon-cyan group-hover:animate-pulse">/&gt;</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-all relative group ${activeSection === link.href.substring(1)
                                ? 'text-neon-cyan'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-neon-cyan transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full shadow-[0_0_10px_rgba(0,243,255,0.5)]' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </a>
                    ))}

                    {/* Theme Toggle - Hidden/Disabled for Cyberpunk Theme */}
                    {/* <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button> */}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="container-custom py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-lg font-medium py-2 border-b border-white/5 ${activeSection === link.href.substring(1)
                                        ? 'text-neon-cyan pl-4 border-l-2 border-l-neon-cyan'
                                        : 'text-gray-400'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
