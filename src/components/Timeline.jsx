import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const TimelineItem = ({ data, index, isLeft }) => {
    return (
        <div className={`flex items-center justify-between w-full mb-8 ${isLeft ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12"></div>

            <div className="z-20 flex items-center order-1 bg-gray-900 shadow-xl w-10 h-10 rounded-full border-2 border-neon-cyan justify-center relative">
                <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-neon-cyan/20 rounded-full animate-ping opacity-75"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`order-1 w-5/12 px-6 py-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-neon-cyan/50 transition-colors group relative overflow-hidden ${isLeft ? 'text-right' : 'text-left'}`}
            >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-cyan to-transparent opacity-50"></div>

                <span className="text-neon-cyan font-bold text-sm tracking-wider mb-1 block">{data.date || data.period}</span>
                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-neon-cyan transition-colors">{data.title || data.position}</h3>
                <h4 className="text-gray-400 font-medium text-sm mb-2">{data.issuer || data.company}</h4>
                {data.description && <p className="text-gray-500 text-sm">{data.description}</p>}
            </motion.div>
        </div>
    );
};

const Timeline = ({ experiences, education }) => {
    // Combine and sort by date (simplified for now, just alternating)
    const timelineData = [
        ...experiences.map(e => ({ ...e, type: 'work' })),
        ...education.map(e => ({ ...e, type: 'education' }))
    ].sort((a, b) => 0.5 - Math.random()); // Random shuffle for demo, ideally sort by date

    return (
        <section id="timeline" className="section-padding relative">
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="CHRONO_LOG"
                    subtitle="Parcours académique et professionnel"
                />

                <div className="relative wrap overflow-hidden p-4 h-full">
                    {/* Vertical Line */}
                    <div className="absolute border-opacity-20 border-neon-cyan h-full border-2 left-1/2 transform -translate-x-1/2" style={{ boxShadow: '0 0 15px rgba(0,243,255,0.2)' }}></div>

                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            data={item}
                            index={index}
                            isLeft={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
