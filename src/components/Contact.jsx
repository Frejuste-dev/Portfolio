import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactInfo = ({ icon, title, value, href }) => (
    <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl hover:border-neon-cyan/50 hover:bg-gray-800/50 transition-all group"
        whileHover={{ x: 5 }}
    >
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-shadow">
            {icon}
        </div>
        <div>
            <h4 className="text-sm text-gray-400">{title}</h4>
            <p className="text-white font-medium group-hover:text-neon-cyan transition-colors">{value}</p>
        </div>
    </motion.a>
);

const Contact = ({ contact, profile }) => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace with your actual EmailJS service ID, template ID, and public key
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

        // Simulation for now
        setTimeout(() => {
            setStatus('success');
            form.current.reset();
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding relative">
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="ESTABLISH_UPLINK"
                    subtitle="Démarrons une collaboration ou échangeons sur vos projets"
                />

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Coordonnées <span className="text-neon-purple">.dat</span>
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {contact.availability}
                        </p>

                        <div className="space-y-4 mb-8">
                            <ContactInfo
                                icon={<FaEnvelope />}
                                title="Email"
                                value={profile.email}
                                href={`mailto:${profile.email}`}
                            />
                            <ContactInfo
                                icon={<FaPhone />}
                                title="Téléphone"
                                value={profile.phone[0]}
                                href={`tel:${profile.phone[0].replace(/\s/g, '')}`}
                            />
                            <ContactInfo
                                icon={<FaMapMarkerAlt />}
                                title="Localisation"
                                value="Abidjan, Côte d'Ivoire"
                                href="#"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue"></div>

                        <h3 className="text-2xl font-bold text-white mb-6">
                            Envoyer un message
                        </h3>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="user_name" className="text-sm text-neon-cyan">Nom</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="user_email" className="text-sm text-neon-cyan">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm text-neon-cyan">Sujet</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                    placeholder="Sujet du message"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-neon-cyan">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all resize-none"
                                    placeholder="Votre message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-gray-900 font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'sending' ? (
                                    'Transmission...'
                                ) : status === 'success' ? (
                                    'Message Transmis !'
                                ) : (
                                    <>
                                        <span>INITIATE_TRANSMISSION</span>
                                        <FaPaperPlane />
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
