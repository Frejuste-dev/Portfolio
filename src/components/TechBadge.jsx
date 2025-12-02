import React from 'react';

const TechBadge = ({ name, icon }) => {
    return (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-gray-300 hover:border-primary-500/40 hover:text-white transition-all duration-300">
            {icon && <span>{icon}</span>}
            {name}
        </span>
    );
};

export default TechBadge;
