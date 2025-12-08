import React from 'react';

const GlitchText = ({ text, className = "" }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-cyan opacity-0 group-hover:opacity-70 animate-glitch" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-2px)' }}>{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-purple opacity-0 group-hover:opacity-70 animate-glitch" style={{ clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)', transform: 'translate(2px)', animationDelay: '0.1s' }}>{text}</span>
        </div>
    );
};

export default GlitchText;
