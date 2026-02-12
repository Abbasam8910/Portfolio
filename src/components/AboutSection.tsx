'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        About Me
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Photo & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        {/* Profile Photo Placeholder */}
                        <div className="relative mb-6">
                            <div className="w-full aspect-square max-w-[220px] sm:max-w-sm mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-4">
                            <a href="https://github.com/Abbasam8910" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all">
                                <Github className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
                            </a>
                            <a href="https://linkedin.com/in/abbasam8910" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all">
                                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
                            </a>
                            <a href="mailto:abbasam8910@gmail.com"
                                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all">
                                <Mail className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Story & Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Personal Story */}
                        <div className="prose prose-invert max-w-none">
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                I&apos;m an AI/ML Engineer who believes the best models are the ones that <span className="text-blue-400 font-semibold">actually ship and create measurable impact</span>.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                My journey into AI started during my undergrad when I built a gesture recognition system for sign language translation. Watching it help someone communicate for the first time showed me the transformative power of accessible AI—and I&apos;ve been hooked ever since.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                Today, I specialize in taking ML research from paper to production. Whether it&apos;s deploying computer vision models on edge devices or fine-tuning SLMs for mobile, I focus on building systems that are <span className="text-green-400 font-semibold">reliable, scalable, and solve real business problems</span>.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                Currently, I&apos;m an AI/ML Engineer at Intellijohn Labs, architecting CV solutions for workplace safety. I&apos;m also completing my M.Tech in Data Science &amp; AI at CUSAT, focusing on edge-optimized models for low-resource environments.
                            </p>
                        </div>

                        {/* Currently Section */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span>📍</span> Currently
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-gray-400 text-sm">Work</p>
                                    <p className="text-white font-medium">AI/ML Engineer at Intellijohn Labs</p>
                                    <p className="text-gray-500 text-sm">Kochi, India</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Education</p>
                                    <p className="text-white font-medium">M.Tech in Data Science & AI</p>
                                    <p className="text-gray-500 text-sm">CUSAT • Expected Mar 2026</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Exploring</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20">Multi-modal LLMs</span>
                                        <span className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded-full border border-purple-500/20">Reinforcement Learning</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h4 className="text-white font-bold mb-2">M.Tech in Computer Science</h4>
                                <p className="text-gray-400 text-sm mb-1">Data Science & AI</p>
                                <p className="text-gray-500 text-sm">Cochin University (CUSAT)</p>
                                <p className="text-blue-400 text-sm mt-2">Expected: March 2026</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h4 className="text-white font-bold mb-2">B.Tech in Computer Science</h4>
                                <p className="text-gray-400 text-sm mb-1">and Engineering</p>
                                <p className="text-gray-500 text-sm">APJ Abdul Kalam Tech. University</p>
                                <p className="text-green-400 text-sm mt-2">Graduated: May 2023</p>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                            <div className="flex flex-wrap gap-3">
                                <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
                                    <p className="text-blue-300 font-medium text-sm">Agentic AI</p>
                                    <p className="text-gray-500 text-xs">CSRBOX • 2024</p>
                                </div>
                                <div className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
                                    <p className="text-green-300 font-medium text-sm">Data Analytics with Python</p>
                                    <p className="text-gray-500 text-xs">NPTEL • 2023</p>
                                </div>
                            </div>
                        </div>

                        {/* Resume CTA */}
                        <div className="pt-6">
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Download Full Resume
                            </a>
                        </div>

                        {/* Availability Status */}
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                                <p className="text-green-300 font-medium">
                                    Currently available for full-time opportunities
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
