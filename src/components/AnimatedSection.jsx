import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Composant wrapper pour ajouter des animations de scroll reveal
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu à animer
 * @param {string} props.variant - Type d'animation ('fadeUp', 'fadeIn', 'slideLeft', 'slideRight', 'scale')
 * @param {number} props.delay - Délai avant l'animation (en secondes)
 * @param {number} props.duration - Durée de l'animation (en secondes)
 * @param {string} props.className - Classes CSS additionnelles
 */
const AnimatedSection = ({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.6,
    className = ''
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        slideLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        slideRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        stagger: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1] // Easing personnalisé pour une animation fluide
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
