import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About = ({ about, stats }) => {
    const statsData = [
        { label: "Années d'expérience", value: stats.yearsOfExperience },
        { label: 'Projets complétés', value: stats.projectsCompleted },
        { label: 'En production', value: stats.projectsInProduction },
        { label: 'Technologies', value: stats.technologiesMastered },
    ];

    return (
        <section id="about" className="section-padding bg-gray-100 dark:bg-gray-900/50">
            <div className="container-custom">
                <SectionTitle
                    title="À Propos"
                    subtitle="Découvrez mon parcours et ma passion pour le développement"
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            {about.paragraph1}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            {about.paragraph2}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            {about.paragraph3}
                        </p>

                        <a
                            href={about.resumeUrl}
                            download
                            className="inline-block mt-6 px-6 py-3 bg-gradient-primary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
                        >
                            Télécharger mon CV
                        </a>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass glass-hover p-6 rounded-2xl text-center"
                            >
                                <div className="text-4xl font-bold text-gradient mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 dark:text-gray-400 text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
