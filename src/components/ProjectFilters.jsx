import React from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaTimes } from 'react-icons/fa';

/**
 * Composant de filtrage pour les projets
 * @param {Object} props
 * @param {Array} props.allTechnologies - Liste de toutes les technologies disponibles
 * @param {Array} props.allStatuses - Liste de tous les statuts disponibles
 * @param {Array} props.selectedTechs - Technologies actuellement sélectionnées
 * @param {string} props.selectedStatus - Statut actuellement sélectionné
 * @param {Function} props.onTechToggle - Callback pour toggle une technologie
 * @param {Function} props.onStatusChange - Callback pour changer le statut
 * @param {Function} props.onReset - Callback pour réinitialiser les filtres
 * @param {number} props.totalProjects - Nombre total de projets
 * @param {number} props.filteredCount - Nombre de projets filtrés
 */
const ProjectFilters = ({
    allTechnologies,
    allStatuses,
    selectedTechs,
    selectedStatus,
    onTechToggle,
    onStatusChange,
    onReset,
    totalProjects,
    filteredCount
}) => {
    const hasActiveFilters = selectedTechs.length > 0 || selectedStatus !== 'all';

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
        >
            <div className="glass rounded-2xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <FaFilter className="text-primary-500 text-xl" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Filtrer les projets
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            ({filteredCount} / {totalProjects})
                        </span>
                    </div>
                    {hasActiveFilters && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onReset}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            <FaTimes />
                            Réinitialiser
                        </motion.button>
                    )}
                </div>

                {/* Status Filter */}
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Statut
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {allStatuses.map((status) => (
                            <motion.button
                                key={status.value}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onStatusChange(status.value)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedStatus === status.value
                                        ? 'bg-gradient-primary text-white shadow-lg shadow-primary-500/30'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {status.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Technology Filter */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {allTechnologies.map((tech) => {
                            const isSelected = selectedTechs.includes(tech);
                            return (
                                <motion.button
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onTechToggle(tech)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border-2 ${isSelected
                                            ? 'bg-primary-500/20 text-primary-600 dark:text-primary-400 border-primary-500/50'
                                            : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-primary-500/30'
                                        }`}
                                >
                                    {tech}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectFilters;
