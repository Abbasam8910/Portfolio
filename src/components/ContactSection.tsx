'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Globe, Plane } from 'lucide-react';
import TerminalHeader from './TerminalHeader';

export default function ContactSection() {
    return (
        <section id="contact" className="relative bg-gradient-to-b from-[#0a0a0a] via-blue-950/8 to-[#0a0a0a] py-24 md:py-32 px-4 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <TerminalHeader command="ping">Let's Build Something Together</TerminalHeader>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 mt-4">
                        I'm currently open to full-time opportunities in:
                    </p>

                    {/* Role Tags */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16">
                        <span className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full font-medium">
                            Computer Vision Engineering
                        </span>
                        <span className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded-full font-medium">
                            ML Engineering (NLP, GenAI)
                        </span>
                        <span className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-green-500/10 text-green-300 border border-green-500/30 rounded-full font-medium">
                            MLOps / ML Infrastructure
                        </span>
                    </div>
                </motion.div>

                {/* Contact Options */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                >
                    {/* Email Card */}
                    <a
                        href="mailto:abbasam8910@gmail.com"
                        className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform">
                            <Mail className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Send Email</h3>
                        <p className="text-gray-400 text-sm mb-3">Quick response within 24 hours</p>
                        <p className="text-cyan-400 font-medium">abbasam8910@gmail.com</p>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href="https://linkedin.com/in/abbasam8910"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform">
                            <Linkedin className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Connect on LinkedIn</h3>
                        <p className="text-gray-400 text-sm mb-3">Professional networking</p>
                        <p className="text-cyan-400 font-medium">linkedin.com/in/abbasam8910</p>
                    </a>
                </motion.div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-gray-500 text-sm">or</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center gap-4 mb-16"
                >
                    <a
                        href="https://github.com/Abbasam8910"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
                    </a>
                    <a
                        href="mailto:abbasam8910@gmail.com"
                        className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all"
                    >
                        <Mail className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
                    </a>
                </motion.div>

                {/* Location & Preferences */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-3"
                >
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                        <MapPin className="w-5 h-5" />
                        <span>Based in India</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                        <Globe className="w-5 h-5" />
                        <span>Open to remote opportunities worldwide</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                        <Plane className="w-5 h-5" />
                        <span>Willing to relocate for the right role</span>
                    </div>
                </motion.div>

                {/* Availability Status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-300 font-medium">Currently available (accepting interviews)</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
