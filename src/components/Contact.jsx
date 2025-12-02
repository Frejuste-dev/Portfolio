import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';

const Contact = ({ profile, contact, interests }) => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        
        emailjs.sendForm('service_u0p7pv9', 'template_ma8ksr5', form.current, '2Cj3-jQg58UuiFGVg')
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus({ type: 'success', message: 'Message envoyé avec succès ! Je vous répondrai bientôt.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus({ type: 'error', message: 'Une erreur est survenue lors de l\'envoi du message.' });
            });

    };

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    title="Contact"
                    subtitle="N'hésitez pas à me contacter pour discuter de vos projets"
                />

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="glass p-8 rounded-2xl h-full">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informations de Contact</h3>

                            <div className="space-y-6">
                                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors group">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform text-white">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <p className="font-medium">{profile.email}</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl text-white">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                                        <p className="font-medium">{profile.phone}</p>
                                    </div>
                                </div>

                                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors group">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform text-white">
                                        <FaGithub />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                                        <p className="font-medium">@Frejuste-dev</p>
                                    </div>
                                </a>

                                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors group">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform text-white">
                                        <FaLinkedin />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                                        <p className="font-medium">keiprince</p>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    <span className="text-green-500">●</span> {contact.availability}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Temps de réponse: {contact.responseTime}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form ref={form} onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envoyer un message</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sujet</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                    placeholder="Sujet du message"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                                    placeholder="Votre message..."
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-500/20 text-green-600 dark:text-green-400' : 'bg-red-500/20 text-red-600 dark:text-red-400'}`}>
                                    <span>{status.message}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-gradient-primary rounded-xl text-white font-bold text-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        <FaPaperPlane /> <span>Envoyer le message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
