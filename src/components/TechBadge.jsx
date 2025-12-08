import React from 'react';

const TechBadge = ({ tech }) => {
    return (
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all cursor-default">
            {tech}
        </span>
    );
};

export default TechBadge;
