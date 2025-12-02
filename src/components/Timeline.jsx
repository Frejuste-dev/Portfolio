import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import TechBadge from './TechBadge';

/**
 * Composant Timeline interactive pour afficher le parcours professionnel
 * @param {Object} props
 * @param {Array} props.experiences - Liste des expériences professionnelles
 * @param {Array} props.certifications - Liste des certifications
 */
const Timeline = ({ experiences, certifications }) => {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Combine experiences and certifications into timeline items
    const timelineItems = [
        ...experiences.map(exp => ({ ...exp, type: 'experience' })),
        ...certifications.map(cert => ({ ...cert, type: 'certification' }))
    ].sort((a, b) => {
        // Sort by date (most recent first)
        // This is a simple sort, you might want to improve it with actual date parsing
        return b.id - a.id;
    });

    return (
        <section id="timeline" className="section-padding bg-white dark:bg-gray-950">
            <div className="container-custom">
                <SectionTitle
                    title="Parcours Professionnel"
                    subtitle="Mon évolution et mes accomplissements"
                />

                <div className="relative">
                    {/* Timeline vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"></div>

                    <div className="space-y-12">
                        {timelineItems.map((item, index) => {
                            const isExpanded = expandedItems[`${item.type}-${item.id}`];
                            const isExperience = item.type === 'experience';
                            const isLeft = index % 2 === 0;

                            return (
                                <TimelineItem
                                    key={`${item.type}-${item.id}`}
                                    item={item}
                                    isExperience={isExperience}
                                    isLeft={isLeft}
                                    isExpanded={isExpanded}
                                    onToggle={() => toggleExpand(`${item.type}-${item.id}`)}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

/**
 * Individual timeline item component
 */
const TimelineItem = ({ item, isExperience, isLeft, isExpanded, onToggle, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: isLeft ? -50 : 50,
            y: 20
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
        >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${isExperience
                            ? 'bg-gradient-primary text-white'
                            : 'bg-gradient-to-br from-accent-500 to-primary-500 text-white'
                        }`}
                >
                    {isExperience ? <FaBriefcase className="text-2xl" /> : <FaGraduationCap className="text-2xl" />}
                </motion.div>
            </div>

            {/* Content card */}
            <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                    whileHover={{ y: -5 }}
                    className="glass glass-hover rounded-2xl p-6 cursor-pointer"
                    onClick={onToggle}
                >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {isExperience ? item.position : item.title}
                            </h3>
                            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                                {isExperience ? item.company : item.issuer}
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <span className="flex items-center gap-1">
                                    <FaCalendar className="text-primary-500" />
                                    {isExperience ? item.period : item.date}
                                </span>
                                {isExperience && item.location && (
                                    <span className="flex items-center gap-1">
                                        <FaMapMarkerAlt className="text-primary-500" />
                                        {item.location}
                                    </span>
                                )}
                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isExpanded ? <FaChevronUp className="text-primary-500" /> : <FaChevronDown className="text-primary-500" />}
                        </motion.div>
                    </div>

                    {/* Expandable content */}
                    <motion.div
                        initial={false}
                        animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        {isExperience ? (
                            <>
                                {/* Experience description */}
                                {item.descriptionPoints && (
                                    <ul className="space-y-2 mb-4">
                                        {item.descriptionPoints.map((point, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                                <span className="text-primary-500 mt-1">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {/* Technologies */}
                                {item.technologies && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {item.technologies.map((tech) => (
                                            <TechBadge key={tech} name={tech} />
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                {/* Certification details */}
                                {item.credentialUrl && (
                                    <a
                                        href={item.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:underline mt-2"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Voir la certification →
                                    </a>
                                )}
                            </>
                        )}
                    </motion.div>

                    {/* Expand hint */}
                    {!isExpanded && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                            Cliquez pour voir les détails
                        </p>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Timeline;
