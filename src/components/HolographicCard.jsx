import React from 'react';
import { motion } from 'framer-motion';

const HolographicCard = ({ children, className = "" }) => {
    return (
        <motion.div
            className={`relative group ${className}`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {/* Holographic Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue rounded-xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>

            {/* Card Content */}
            <div className="relative h-full bg-gray-900 rounded-xl p-1 overflow-hidden">
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-10"></div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10 pointer-events-none z-0"></div>

                <div className="relative z-10 h-full bg-gray-900/90 backdrop-blur-sm rounded-lg overflow-hidden">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default HolographicCard;
