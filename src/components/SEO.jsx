import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Composant SEO amélioré avec Open Graph, Twitter Cards et Schema.org
 * @param {Object} props
 * @param {string} props.title - Titre de la page
 * @param {string} props.description - Description de la page
 * @param {string} props.keywords - Mots-clés SEO
 * @param {string} props.image - URL de l'image pour les réseaux sociaux
 * @param {string} props.url - URL de la page
 * @param {string} props.type - Type de contenu (website, article, profile)
 * @param {Object} props.author - Informations sur l'auteur
 */
const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    author
}) => {
    const siteTitle = "Prince Frejuste Kei - Développeur Full Stack";
    const defaultDescription = "Développeur Full Stack passionné par l'automatisation et l'innovation. Spécialisé en React, Python, Node.js et développement d'applications d'entreprise. Découvrez mon portfolio et mes projets.";
    const defaultKeywords = "développeur full stack, react, python, node.js, flask, automatisation, data science, portfolio, développeur web, développeur côte d'ivoire, prince kei, frejuste";
    const defaultImage = "/og-image.jpg";
    const siteUrl = "https://votre-portfolio.com"; // À remplacer par l'URL réelle

    const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const pageDescription = description || defaultDescription;
    const pageImage = image || defaultImage;
    const pageUrl = url || siteUrl;
    const pageKeywords = keywords || defaultKeywords;

    // Schema.org structured data for Person
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Prince Frejuste Kei",
        "jobTitle": "Développeur Full Stack",
        "description": pageDescription,
        "url": siteUrl,
        "email": "frejusteprince@gmail.com",
        "telephone": "+225 07 206 360 59",
        "sameAs": [
            "https://github.com/Frejuste-dev",
            "https://linkedin.com/in/keiprince"
        ],
        "knowsAbout": [
            "React",
            "Python",
            "Node.js",
            "Flask",
            "Data Science",
            "Automatisation",
            "Développement Web"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "ESETEC ABIDJAN"
        },
        "worksFor": {
            "@type": "Organization",
            "name": "SIBM"
        }
    };

    // Website schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteTitle,
        "description": defaultDescription,
        "url": siteUrl,
        "author": {
            "@type": "Person",
            "name": "Prince Frejuste Kei"
        }
    };

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="author" content="Prince Frejuste Kei" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="French" />
            <meta name="revisit-after" content="7 days" />

            {/* Canonical URL */}
            <link rel="canonical" href={pageUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="fr_FR" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />
            <meta name="twitter:creator" content="@frejuste" />
            <meta name="twitter:site" content="@frejuste" />

            {/* Additional Meta Tags */}
            <meta name="theme-color" content="#6366f1" />
            <meta name="msapplication-TileColor" content="#6366f1" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
