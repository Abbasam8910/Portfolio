'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TerminalHeader from './TerminalHeader';

interface Skill {
    name: string;
    proficiency: number;
    years?: number;
    context: string;
    projects: string[];
    icon: string;
    category: 'ml' | 'genai' | 'infra' | 'tools';
}

const skills: Skill[] = [
    // ML & AI
    { name: 'PyTorch', proficiency: 8, years: 2, context: 'Production models, custom training loops', projects: ['IntelliVision', 'Shiksha V1', 'Inventory Recon'], icon: '🔥', category: 'ml' },
    { name: 'YOLOv8', proficiency: 10, years: 1.5, context: 'Edge deployment, custom training', projects: ['IntelliVision', 'GIS Digitization'], icon: '👁️', category: 'ml' },
    { name: 'OpenCV', proficiency: 8, years: 2, context: 'Image preprocessing, video pipelines', projects: ['IntelliVision', 'GIS Digitization'], icon: '📷', category: 'ml' },
    { name: 'Scikit-learn', proficiency: 8, years: 2, context: 'Classical ML, preprocessing', projects: ['Inventory Recon', 'Data Analysis'], icon: '📊', category: 'ml' },

    // GenAI & LLMs
    { name: 'Small Language Models', proficiency: 9, years: 1, context: 'Qwen, Llama, on-device inference', projects: ['Shiksha V1'], icon: '🤖', category: 'genai' },
    { name: 'Hugging Face', proficiency: 9, years: 2, context: 'BERT, transformers, fine-tuning', projects: ['Shiksha V1', 'Inventory Recon'], icon: '🤗', category: 'genai' },
    { name: 'Quantization (GGUF/QLoRA)', proficiency: 9, years: 1, context: '4-bit models, edge deployment', projects: ['Shiksha V1'], icon: '⚡', category: 'genai' },
    { name: 'RAG Pipelines', proficiency: 7, context: 'Vector DBs, retrieval optimization', projects: ['Experimental'], icon: '🔍', category: 'genai' },

    // Infrastructure & MLOps
    { name: 'Docker', proficiency: 8, years: 2, context: 'Containerization, multi-stage builds', projects: ['All Projects'], icon: '🐳', category: 'infra' },
    { name: 'FastAPI', proficiency: 9, years: 2, context: 'Production APIs, async endpoints', projects: ['IntelliVision', 'Inventory Recon'], icon: '⚡', category: 'infra' },
    { name: 'AWS (EC2, S3)', proficiency: 7, years: 1.5, context: 'Model deployment, storage', projects: ['IntelliVision', 'Automation'], icon: '☁️', category: 'infra' },
    { name: 'CI/CD', proficiency: 8, years: 1, context: 'GitHub Actions, automated testing', projects: ['Multiple'], icon: '🔄', category: 'infra' },

    // Programming & Tools
    { name: 'Python', proficiency: 9, years: 3, context: 'Primary language for ML & APIs', projects: ['All Projects'], icon: '🐍', category: 'tools' },
    { name: 'Git', proficiency: 8, years: 3, context: 'Version control, collaboration', projects: ['All Projects'], icon: '📦', category: 'tools' },
    { name: 'SQL', proficiency: 7, years: 2, context: 'PostgreSQL, data pipelines', projects: ['Inventory Recon', 'Automation'], icon: '🗃️', category: 'tools' },
    { name: 'n8n', proficiency: 8, years: 1, context: 'Workflow orchestration', projects: ['Automation Engine'], icon: '🔗', category: 'tools' },
];

const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'ml', label: 'ML & AI' },
    { id: 'genai', label: 'GenAI & LLMs' },
    { id: 'infra', label: 'Infrastructure' },
    { id: 'tools', label: 'Tools & Languages' }
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
        >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-glow">
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                </div>

                {/* Proficiency Bar */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Proficiency</span>
                        <span className="text-sm text-cyan-400 font-bold">{skill.proficiency}/10</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency * 10}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                        />
                    </div>
                </div>

                {/* Years of Experience */}
                {skill.years && (
                    <p className="text-sm text-gray-400 mb-3">
                        <span className="text-cyan-400 font-semibold">{skill.years}+</span> years experience
                    </p>
                )}

                {/* Context (always visible) */}
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    {skill.context}
                </p>

                {/* Hover Details */}
                {isHovered && skill.projects.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="border-t border-white/10 pt-3 mt-3"
                    >
                        <p className="text-xs text-gray-400 mb-2">Used in:</p>
                        <div className="flex flex-wrap gap-1">
                            {skill.projects.map((project) => (
                                <span key={project} className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
                                    {project}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Production Badge */}
                {skill.proficiency >= 8 && (
                    <div className="absolute top-3 right-3">
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                            Production
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default function SkillsMatrix() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-12 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 opacity-40"
                style={{
                    background: 'radial-gradient(circle at bottom center, rgba(30, 58, 138, 0.1) 0%, transparent 50%)'
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <TerminalHeader command="tree">Technical Toolkit</TerminalHeader>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 mt-4">
                        Technologies I use to build production AI systems
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 text-sm">
                        Always learning and exploring new technologies • Currently experimenting with Multi-modal LLMs
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
