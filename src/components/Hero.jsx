import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact, FaPython, FaNodeJs, FaJs, FaDatabase } from 'react-icons/fa';

const Hero = ({ profile, about }) => {
    const { scrollY } = useScroll();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Parallax effect for background blobs
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    // Mouse move effect for subtle interactivity
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
            {/* Animated Background with Parallax */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"
                ></motion.div>
                <motion.div
                    style={{ y: y2, animationDelay: '2s' }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float"
                ></motion.div>
            </div>

            <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary-500 mb-4">
                        Bonjour, je suis
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-gray-900 dark:text-white">
                        {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                        {profile.jobTitle}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                        {profile.tagline}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#contact"
                            className="px-8 py-4 bg-gradient-primary rounded-full text-white font-bold text-lg shadow-lg shadow-primary-500/20"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
                                y: -2
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            Me contacter
                        </motion.a>
                        <motion.a
                            href={about?.resumeUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg"
                            whileHover={{
                                scale: 1.05,
                                borderColor: "rgb(99, 102, 241)",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                                y: -2
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            Télécharger CV
                        </motion.a>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110">
                            <FaGithub />
                        </a>
                        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-[#0077b5] transition-colors transform hover:scale-110">
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-80 h-80 mx-auto">
                        <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden">
                            <img
                                src={profile.photoUrl || "https://via.placeholder.com/400"}
                                alt={`${profile.firstName} ${profile.lastName}`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Tech Icons */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center text-3xl text-[#61DAFB]"
                        >
                            <FaReact />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center text-3xl text-[#3776AB]"
                        >
                            <FaPython />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -top-4 -left-4 w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center text-3xl text-[#68A063]"
                        >
                            <FaNodeJs />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute -bottom-4 -right-4 w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center text-2xl text-[#F7DF1E]"
                        >
                            <FaJs />
                        </motion.div>
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/2 -right-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center text-xl text-gray-600 dark:text-gray-300"
                        >
                            <FaDatabase />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-gradient-primary rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
