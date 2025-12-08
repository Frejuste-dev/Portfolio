import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaReact, FaPython, FaNodeJs, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiFlask, SiVuedotjs, SiTypescript } from 'react-icons/si';

const SkillCard = ({ skill, index }) => {
    // Function to render icon based on skill name (simplified mapping)
    const getIcon = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('react')) return <FaReact />;
        if (lowerName.includes('python')) return <FaPython />;
        if (lowerName.includes('node')) return <FaNodeJs />;
        if (lowerName.includes('js') || lowerName.includes('script')) return <SiTypescript />;
        if (lowerName.includes('vue')) return <SiVuedotjs />;
        if (lowerName.includes('tailwind')) return <SiTailwindcss />;
        if (lowerName.includes('sql') || lowerName.includes('data')) return <FaDatabase />;
        if (lowerName.includes('mongo')) return <SiMongodb />;
        if (lowerName.includes('flask')) return <SiFlask />;
        if (lowerName.includes('docker')) return <FaDocker />;
        if (lowerName.includes('git')) return <FaGitAlt />;
        return <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-white/5 p-4 rounded-xl hover:border-neon-cyan/50 transition-colors group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="text-3xl text-gray-400 group-hover:text-neon-cyan transition-colors">
                    {getIcon(skill.name)}
                </div>
                <div className="flex-grow">
                    <h4 className="font-bold text-white group-hover:text-neon-cyan transition-colors">{skill.name}</h4>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2">
                        <motion.div
                            className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "80%" }} // Simplified level
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        ></motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = ({ skills }) => {
    return (
        <section id="skills" className="section-padding relative">
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="SKILL_MATRIX"
                    subtitle="Compétences techniques et outils maîtrisés"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-neon-purple mb-6 border-b border-neon-purple/30 pb-2 inline-block">Frontend</h3>
                        <div className="space-y-3">
                            {skills.frontend.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-neon-blue mb-6 border-b border-neon-blue/30 pb-2 inline-block">Backend</h3>
                        <div className="space-y-3">
                            {skills.backend.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-neon-green mb-6 border-b border-neon-green/30 pb-2 inline-block">Data & AI</h3>
                        <div className="space-y-3">
                            {skills.dataScienceAI.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-yellow-400 mb-6 border-b border-yellow-400/30 pb-2 inline-block">DevOps & Tools</h3>
                        <div className="space-y-3">
                            {skills.devOpsTools.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
