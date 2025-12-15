import React from 'react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';

const ProjectFilters = ({
    categories,
    activeFilter,
    onFilterChange
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
        >
            <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                    <FaFilter className="text-neon-cyan text-xl" />
                    <h3 className="text-xl font-bold text-white">
                        Filtrer les projets
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onFilterChange(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category
                                    ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-lg shadow-neon-cyan/30'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectFilters;
