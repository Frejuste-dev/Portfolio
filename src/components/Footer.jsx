import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = ({ profile }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 border-t border-white/10 py-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-neon-cyan/5 blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-display text-white mb-2">
                            {profile.firstName} <span className="text-neon-cyan">{profile.lastName}</span>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Architecting the future, one line of code at a time.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-neon-cyan transition-colors text-xl transform hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={profile.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-neon-blue transition-colors text-xl transform hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        {/* Add more social links if available */}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>
                        &copy; {currentYear} {profile.firstName} {profile.lastName}. All rights reserved.
                    </p>
                    <p className="flex items-center gap-2">
                        Designed & Built with <FaHeart className="text-neon-purple animate-pulse" /> and React Three Fiber
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
