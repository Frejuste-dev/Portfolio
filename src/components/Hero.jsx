import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact, FaPython, FaNodeJs, FaJs, FaDatabase } from 'react-icons/fa';
import GlitchText from './GlitchText';

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
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"
                ></motion.div>
                <motion.div
                    style={{ y: y2, animationDelay: '2s' }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"
                ></motion.div>
            </div>

            <div className="container-custom grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-neon-cyan mb-4 tracking-wider">
                        SYSTEM.INIT(USER)
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-white">
                        <GlitchText text={profile.firstName} /> <span className="text-gradient">{profile.lastName}</span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                        {profile.jobTitle}
                    </h3>
                    <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed border-l-2 border-neon-purple pl-4">
                        {profile.tagline}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#contact"
                            className="px-8 py-4 bg-gray-900 text-neon-cyan border border-neon-cyan rounded-none font-bold text-lg relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 bg-neon-cyan/10 transform -skew-x-12 group-hover:skew-x-12 transition-transform duration-500"></span>
                            <span className="relative">INITIALIZE_CONTACT</span>
                        </motion.a>
                        <motion.a
                            href={about?.resumeUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-none font-bold text-lg hover:bg-white/5 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            DOWNLOAD_DATA.PDF
                        </motion.a>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-neon-purple transition-colors transform hover:scale-110">
                            <FaGithub />
                        </a>
                        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-neon-blue transition-colors transform hover:scale-110">
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
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur-3xl opacity-20 animate-pulse"></div>

                        {/* Holographic Circle Container */}
                        <div className="relative w-full h-full rounded-full border-2 border-neon-cyan/30 shadow-[0_0_30px_rgba(0,243,255,0.2)] overflow-hidden bg-gray-900/50 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20 animate-spin-slow"></div>
                            <img
                                src={profile.photoUrl || "https://via.placeholder.com/400"}
                                alt={`${profile.firstName} ${profile.lastName}`}
                                className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                            />
                        </div>

                        {/* Floating Tech Icons with Neon Glow */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 w-16 h-16 bg-gray-900 border border-neon-cyan/50 rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.3)] flex items-center justify-center text-3xl text-[#61DAFB]"
                        >
                            <FaReact />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900 border border-neon-blue/50 rounded-lg shadow-[0_0_15px_rgba(0,102,255,0.3)] flex items-center justify-center text-3xl text-[#3776AB]"
                        >
                            <FaPython />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -top-4 -left-4 w-14 h-14 bg-gray-900 border border-neon-green/50 rounded-lg shadow-[0_0_15px_rgba(10,255,0,0.3)] flex items-center justify-center text-3xl text-[#68A063]"
                        >
                            <FaNodeJs />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute -bottom-4 -right-4 w-14 h-14 bg-gray-900 border border-yellow-400/50 rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.3)] flex items-center justify-center text-2xl text-[#F7DF1E]"
                        >
                            <FaJs />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-neon-cyan tracking-[0.2em]">SCROLL</span>
                <div className="w-px h-12 bg-gradient-to-b from-neon-cyan to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
