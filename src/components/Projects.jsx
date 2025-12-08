import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import ProjectFilters from './ProjectFilters';
import TechBadge from './TechBadge';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import HolographicCard from './HolographicCard';

const Projects = ({ projects }) => {
    const [filter, setFilter] = useState('Tous');
    const [visibleProjects, setVisibleProjects] = useState(6);

    const categories = ['Tous', ...new Set(projects.flatMap(p => p.techStack))].slice(0, 8); // Limit categories

    const filteredProjects = filter === 'Tous'
        ? projects
        : projects.filter(p => p.techStack.includes(filter));

    const loadMore = () => {
        setVisibleProjects(prev => prev + 3);
    };

    return (
        <section id="projects" className="section-padding relative">
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="PROJECTS.LOG"
                    subtitle="Exploration de mes créations numériques et solutions techniques"
                />

                <ProjectFilters
                    categories={categories}
                    activeFilter={filter}
                    onFilterChange={setFilter}
                />

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.slice(0, visibleProjects).map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <HolographicCard className="h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden group">
                                        <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <img
                                            src={project.imageUrl || "https://via.placeholder.com/600x400"}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

                                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                                            <div className="flex gap-3">
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:text-neon-cyan hover:shadow-[0_0_10px_rgba(0,243,255,0.5)] transition-all"
                                                        title="Code Source"
                                                    >
                                                        <FaGithub />
                                                    </a>
                                                )}
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:text-neon-purple hover:shadow-[0_0_10px_rgba(188,19,254,0.5)] transition-all"
                                                        title="Voir le site"
                                                    >
                                                        <FaExternalLinkAlt />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4 text-sm line-clamp-3 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.techStack.slice(0, 4).map((tech, index) => (
                                                <TechBadge key={index} tech={tech} />
                                            ))}
                                            {project.techStack.length > 4 && (
                                                <span className="text-xs text-gray-500 self-center">
                                                    +{project.techStack.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </HolographicCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {visibleProjects < filteredProjects.length && (
                    <div className="mt-12 text-center">
                        <motion.button
                            onClick={loadMore}
                            className="px-8 py-3 bg-transparent border border-neon-purple text-neon-purple font-medium rounded-none hover:bg-neon-purple/10 transition-colors relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">LOAD_MORE_DATA()</span>
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
