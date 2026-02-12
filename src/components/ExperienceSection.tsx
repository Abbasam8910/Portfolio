'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
    title: string;
    company: string;
    location: string;
    type: string;
    startDate: string;
    endDate: string;
    current: boolean;
    achievements: string[];
    technologies: string[];
}

const experiences: Experience[] = [
    {
        title: "AI/ML Engineer",
        company: "Intellijohn Labs Pvt Ltd",
        location: "Kochi, India",
        type: "Full-time",
        startDate: "Apr 2024",
        endDate: "Present",
        current: true,
        achievements: [
            "Led development of IntelliVision, an AI-powered workplace safety monitoring system using YOLOv8",
            "Improved model accuracy through data-centric optimization (1k → 6k images, 65% → 88% recall)",
            "Designed real-time alerting system with Twilio and WhatsApp API integration",
            "Built NLP-based inventory reconciliation system achieving 90% accuracy (BERT fuzzy matching)",
            "Developed hybrid CV + VLM workflow for GIS asset digitization, reducing manual surveys by 60%"
        ],
        technologies: ["PyTorch", "YOLOv8", "BERT", "OpenCV", "FastAPI", "Docker", "AWS"]
    },
    {
        title: "AI Automation Engineer",
        company: "ForSyntax",
        location: "Remote",
        type: "Freelance",
        startDate: "Dec 2024",
        endDate: "Mar 2025",
        current: false,
        achievements: [
            "Built fault-tolerant automation engine processing 500+ daily events with 99.9% reliability",
            "Automated parent-teacher communication system, saving 1,000+ hours annually",
            "Optimized data validation using O(1) lookups (234ms latency), reducing support tickets by 70%",
            "Integrated multi-channel messaging (Email, SMS, WhatsApp) with n8n workflows"
        ],
        technologies: ["n8n", "Node.js", "Twilio", "WhatsApp API", "PostgreSQL", "Redis"]
    }
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 pb-12 last:pb-0"
        >
            {/* Timeline line */}
            {index < experiences.length - 1 && (
                <div className="absolute left-[11px] top-6 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent" />
            )}

            {/* Timeline dot */}
            <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border-2 ${exp.current
                ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50'
                : 'bg-white/10 border-white/20'
                }`}>
                {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-75" />
                )}
            </div>

            {/* Content Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group">
                {/* Header */}
                <div className="mb-4">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {exp.title}
                            </h3>
                            <p className="text-lg text-cyan-400 font-semibold mt-1">{exp.company}</p>
                        </div>

                        {exp.current && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                                Current Role
                            </span>
                        )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-3">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.type}</span>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                    <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span className="leading-relaxed">{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}
                <div>
                    <p className="text-sm text-gray-400 mb-2 font-semibold">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-full border border-cyan-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-12 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full opacity-60"
                style={{
                    background: 'radial-gradient(circle at top left, rgba(30, 58, 138, 0.15) 0%, transparent 60%)'
                }}
            />

            <div className="relative max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Work Experience
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl">
                        Building production AI systems across Computer Vision, NLP, and Automation
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={`${exp.company}-${exp.startDate}`} exp={exp} index={index} />
                    ))}
                </div>

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">2+</div>
                        <div className="text-sm text-gray-400">Years in ML</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">6+</div>
                        <div className="text-sm text-gray-400">Models Deployed</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">3</div>
                        <div className="text-sm text-gray-400">Companies</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">100%</div>
                        <div className="text-sm text-gray-400">Production Focus</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
