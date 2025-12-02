import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaVuejs, FaJs, FaHtml5, FaBootstrap, FaPython,
    FaNodeJs, FaPhp, FaDatabase, FaDocker, FaGitAlt
} from 'react-icons/fa';
import {
    SiTailwindcss, SiExpress, SiNestjs, SiFlask, SiFastapi,
    SiPandas, SiNumpy, SiMysql, SiPostgresql, SiMongodb
} from 'react-icons/si';
import SectionTitle from './SectionTitle';

const Skills = ({ skills }) => {
    const iconMap = {
        react: <FaReact />,
        vue: <FaVuejs />,
        javascript: <FaJs />,
        html5: <FaHtml5 />,
        tailwind: <SiTailwindcss />,
        bootstrap: <FaBootstrap />,
        python: <FaPython />,
        nodejs: <FaNodeJs />,
        express: <SiExpress />,
        nestjs: <SiNestjs />,
        flask: <SiFlask />,
        fastapi: <SiFastapi />,
        php: <FaPhp />,
        pandas: <SiPandas />,
        numpy: <SiNumpy />,
        mysql: <SiMysql />,
        postgresql: <SiPostgresql />,
        mongodb: <SiMongodb />,
        database: <FaDatabase />,
        git: <FaGitAlt />,
        docker: <FaDocker />,
    };

    const categories = [
        { key: 'frontend', title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
        { key: 'backend', title: 'Backend', color: 'from-green-500 to-emerald-500' },
        { key: 'dataScienceAI', title: 'Data Science & AI', color: 'from-purple-500 to-pink-500' },
        { key: 'databases', title: 'Bases de Données', color: 'from-orange-500 to-red-500' },
        { key: 'devOpsTools', title: 'DevOps & Outils', color: 'from-yellow-500 to-amber-500' },
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    title="Compétences"
                    subtitle="Technologies et outils que je maîtrise"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.key}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="glass glass-hover p-6 rounded-2xl"
                        >
                            <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {skills[category.key]?.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className={`text-2xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                            {iconMap[skill.icon] || <FaDatabase />}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-gray-600 dark:text-gray-300 font-medium">{skill.name}</span>
                                                <span className="text-xs text-gray-500">{skill.level}</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '75%' }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                    className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
