import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ darkMode, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Expérience', href: '#experience' },
        { name: 'Projets', href: '#projects' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <nav className="container-custom px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold font-display">
                    <span className="text-gradient">PFK</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </li>
                </ul>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#contact"
                        className="px-6 py-2.5 bg-gradient-primary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
                    >
                        Me Contacter
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-yellow-400"
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-2xl text-gray-800 dark:text-white"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass mt-4"
                >
                    <ul className="flex flex-col gap-4 p-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium block"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-center px-6 py-2.5 bg-gradient-primary rounded-full text-white font-semibold"
                            >
                                Me Contacter
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
