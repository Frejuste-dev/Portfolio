import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                <span className="text-gradient">{title}</span>
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionTitle;
