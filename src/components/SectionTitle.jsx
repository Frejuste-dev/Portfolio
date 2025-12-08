import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-display mb-4 relative inline-block group"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
                    {title}
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>

                {/* Decorative elements */}
                <span className="absolute -top-4 -right-6 text-neon-cyan opacity-50 text-sm font-mono tracking-widest animate-pulse">0101</span>
                <span className="absolute -bottom-4 -left-6 text-neon-purple opacity-50 text-sm font-mono tracking-widest animate-pulse" style={{ animationDelay: '1s' }}>1010</span>
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionTitle;
