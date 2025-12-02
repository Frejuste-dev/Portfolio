import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Certifications = ({ certifications }) => {
    return (
        <section id="certifications" className="section-padding bg-gray-100 dark:bg-gray-900/50">
            <div className="container-custom">
                <SectionTitle
                    title="Certifications & Formations"
                    subtitle="Mes diplômes et certifications professionnelles"
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass glass-hover p-6 rounded-2xl"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg shrink-0">
                                    {cert.badgeUrl ? (
                                        <img src={cert.badgeUrl} alt={cert.issuer} className="w-full h-full object-contain" />
                                    ) : (
                                        <FaAward className="text-4xl text-primary-400" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-1">{cert.issuer}</p>
                                    <p className="text-sm text-gray-500 mb-4">{cert.date}</p>

                                    <div className="flex flex-wrap gap-3">
                                        {cert.credentialUrl && (
                                            <a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                                            >
                                                <FaExternalLinkAlt />
                                                Voir le certificat
                                            </a>
                                        )}
                                        {cert.link && (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                                            >
                                                <FaDownload />
                                                Télécharger PDF
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
