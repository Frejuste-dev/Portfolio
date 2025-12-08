import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import TechBadge from './TechBadge';

const ExperienceCard = ({ exp, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative pl-8 pb-12 border-l-2 border-gray-800 last:border-0 last:pb-0 group"
    >
        {/* Timeline Node */}
        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-neon-blue group-hover:bg-neon-blue group-hover:shadow-[0_0_10px_rgba(0,102,255,0.5)] transition-all"></div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:border-neon-blue/50 transition-all relative overflow-hidden group-hover:transform group-hover:translate-x-2 duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                            {exp.position}
                        </h3>
                        <h4 className="text-lg text-neon-cyan font-medium">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-neon-blue" />
                            <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-neon-blue" />
                            <span>{exp.location}</span>
                        </div>
                    </div>
                </div>

                <ul className="space-y-2 mb-6">
                    {exp.descriptionPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-blue flex-shrink-0"></span>
                            <span className="leading-relaxed">{point}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                        <TechBadge key={i} tech={tech} />
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const Experience = ({ experiences }) => {
    return (
        <section id="experience" className="section-padding relative">
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="EXPERIENCE_LOG"
                    subtitle="Mon parcours professionnel et mes missions"
                />

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.id} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
