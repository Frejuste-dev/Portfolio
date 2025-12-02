import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import TechBadge from './TechBadge';

const Experience = ({ experiences }) => {
    return (
        <section id="experience" className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    title="Expérience Professionnelle"
                    subtitle="Mon parcours et mes réalisations"
                />

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 pb-12 border-l-2 border-primary-500/30 last:pb-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-primary"></div>

                            {/* Content Card */}
                            <div className="glass glass-hover p-6 rounded-2xl">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {exp.position}
                                        </h3>
                                        <div className="flex items-center gap-2 text-primary-400 font-semibold mb-2">
                                            <FaBriefcase />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-2 mb-1">
                                            <FaCalendar />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaMapMarkerAlt />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <ul className="space-y-2 mb-4">
                                    {exp.descriptionPoints.map((point, idx) => (
                                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                            <span className="text-primary-500 dark:text-primary-400 mt-1">▹</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <TechBadge key={tech} name={tech} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
