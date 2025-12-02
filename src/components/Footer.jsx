import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = ({ profile }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="container-custom px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                        © {currentYear} {profile.firstName} {profile.lastName}.
                        <span className="flex items-center gap-1">
                            Fait avec <FaHeart className="text-red-500" /> et React
                        </span>
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors text-xl"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={profile.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors text-xl"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
