import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import TechBadge from './TechBadge';
import ProjectFilters from './ProjectFilters';

const Projects = ({ projects }) => {
    const [selectedTechs, setSelectedTechs] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('all');

    const statusColors = {
        'En production': 'bg-green-500/20 text-green-400 border-green-500/30',
        'Open source': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        'En développement': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
        'Déployé': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    };

    // Extract all unique technologies and statuses
    const allTechnologies = useMemo(() => {
        const techSet = new Set();
        projects.forEach(project => {
            project.techStack.forEach(tech => techSet.add(tech));
        });
        return Array.from(techSet).sort();
    }, [projects]);

    const allStatuses = [
        { value: 'all', label: 'Tous' },
        { value: 'En production', label: 'En production' },
        { value: 'Open source', label: 'Open source' },
        { value: 'En développement', label: 'En développement' },
        { value: 'Déployé', label: 'Déployé' },
    ];

    // Filter projects based on selected filters
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            // Filter by status
            const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;

            // Filter by technologies (AND logic - project must have all selected techs)
            const techMatch = selectedTechs.length === 0 ||
                selectedTechs.every(tech => project.techStack.includes(tech));

            return statusMatch && techMatch;
        });
    }, [projects, selectedStatus, selectedTechs]);

    const handleTechToggle = (tech) => {
        setSelectedTechs(prev =>
            prev.includes(tech)
                ? prev.filter(t => t !== tech)
                : [...prev, tech]
        );
    };

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    const handleReset = () => {
        setSelectedTechs([]);
        setSelectedStatus('all');
    };

    return (
        <section id="projects" className="section-padding bg-gray-100 dark:bg-gray-900/50">
            <div className="container-custom">
                <SectionTitle
                    title="Projets"
                    subtitle="Découvrez mes réalisations et contributions"
                />

                <ProjectFilters
                    allTechnologies={allTechnologies}
                    allStatuses={allStatuses}
                    selectedTechs={selectedTechs}
                    selectedStatus={selectedStatus}
                    onTechToggle={handleTechToggle}
                    onStatusChange={handleStatusChange}
                    onReset={handleReset}
                    totalProjects={projects.length}
                    filteredCount={filteredProjects.length}
                />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedStatus}-${selectedTechs.join(',')}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.length === 0 ? (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-500 dark:text-gray-400 text-lg">
                                    Aucun projet ne correspond aux filtres sélectionnés.
                                </p>
                            </div>
                        ) : (
                            filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="glass glass-hover rounded-2xl overflow-hidden group"
                                >
                                    {/* Project Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                                        {project.imageUrl && (
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent"></div>

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[project.status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gradient transition-all">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Highlights */}
                                        {project.highlights && (
                                            <ul className="mb-4 space-y-1">
                                                {project.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                                                        <FaCheckCircle className="text-primary-400 mt-0.5 flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.slice(0, 4).map((tech) => (
                                                <TechBadge key={tech} name={tech} />
                                            ))}
                                            {project.techStack.length > 4 && (
                                                <span className="text-xs text-gray-500">+{project.techStack.length - 4}</span>
                                            )}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3">
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                                                >
                                                    <FaGithub /> Code
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                                                >
                                                    <FaExternalLinkAlt /> Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
