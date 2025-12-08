import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaMusic, FaFutbol, FaBrain, FaChartLine, FaCogs } from 'react-icons/fa';

const StatCard = ({ label, value, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-gray-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-center hover:border-neon-purple/50 transition-colors group"
    >
        <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors font-display">{value}</h3>
        <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
);

const InterestCard = ({ interest, index }) => {
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'music': return <FaMusic />;
            case 'football': return <FaFutbol />;
            case 'ai': return <FaBrain />;
            case 'data': return <FaChartLine />;
            case 'automation': return <FaCogs />;
            default: return <FaCogs />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/60 transition-colors border border-transparent hover:border-neon-cyan/30"
        >
            <div className="text-3xl text-neon-cyan mb-3">
                {getIcon(interest.icon)}
            </div>
            <h4 className="font-bold text-white mb-1">{interest.name}</h4>
            <p className="text-xs text-center text-gray-400">{interest.description}</p>
        </motion.div>
    );
};

const About = ({ about, stats, interests }) => {
    return (
        <section id="about" className="section-padding relative">
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="ABOUT_ME"
                    subtitle="Découvrez qui je suis et ce qui me passionne"
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-6 border-l-4 border-neon-cyan pl-4">
                                {about.paragraph1}
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {about.paragraph2}
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                {about.paragraph3}
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        <StatCard label="Années d'Expérience" value={stats.yearsOfExperience} index={0} />
                        <StatCard label="Projets Complétés" value={stats.projectsCompleted} index={1} />
                        <StatCard label="En Production" value={stats.projectsInProduction} index={2} />
                        <StatCard label="Technologies" value={stats.technologiesMastered} index={3} />
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        <span className="text-neon-purple">#</span> Centres d'Intérêt
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {interests.map((interest, index) => (
                            <InterestCard key={index} interest={interest} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
