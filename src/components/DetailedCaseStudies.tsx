'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Github, ExternalLink } from 'lucide-react';
import TerminalHeader from './TerminalHeader';
import StatusIndicator from './StatusIndicator';

interface CaseStudy {
    id: string;
    title: string;
    tagline: string;
    context: string;
    featured: boolean;

    hook: string;

    problem: {
        description: string;
        painPoints: string[];
    };

    solution: {
        approach: string;
        techStack: string[];
        keyFeatures: string[];
    };

    impact: {
        business: { metric: string; value: string; context: string }[];
        technical: { metric: string; value: string }[];
    };

    tags: { label: string; color: string }[];
    links?: {
        github?: string;
        demo?: string;
    };
}

const caseStudies: CaseStudy[] = [
    {
        id: 'intellivision',
        title: 'IntelliVision',
        tagline: 'AI-Powered Workplace Safety Monitoring',
        context: 'Intellijohn Labs • Apr 2025 - Present',
        featured: true,

        hook: 'Transformed standard CCTV cameras into intelligent safety monitoring systems',

        problem: {
            description: 'Manufacturing facilities required 24/7 safety compliance monitoring across 50+ camera feeds',
            painPoints: [
                'Manual monitoring inconsistent due to human fatigue',
                'High labor costs ($200K annually for dedicated staff)',
                'Reactive violation detection (after incidents occur)',
                'No quantifiable safety metrics for compliance reporting'
            ]
        },

        solution: {
            approach: 'Architected an edge AI system that upgrades existing CCTV infrastructure with real-time computer vision capabilities',
            techStack: ['YOLOv8 Nano', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker', 'Raspberry Pi 4', 'Twilio/WhatsApp API'],
            keyFeatures: [
                'Real-time PPE detection (helmets, vests, gloves)',
                'Multi-person tracking with occlusion handling',
                'Instant violation alerts (< 200ms latency)',
                'Historical analytics dashboard',
                'Zone-based monitoring rules'
            ]
        },

        impact: {
            business: [
                { metric: 'Safety Incidents', value: '85% reduction', context: 'in first 3 months' },
                { metric: 'Cost Savings', value: '$120K/year', context: 'eliminated 2 FTE positions' },
                { metric: 'Deployment Scale', value: '15 facilities', context: '10M+ frames daily' }
            ],
            technical: [
                { metric: 'Inference Speed', value: '30 FPS' },
                { metric: 'Alert Latency', value: '<200ms' },
                { metric: 'Model Precision', value: '92%' },
                { metric: 'System Uptime', value: '99.7%' }
            ]
        },

        tags: [
            { label: 'Computer Vision', color: 'cyan' },
            { label: 'Edge AI', color: 'purple' },
            { label: 'Production', color: 'green' }
        ]
    },

    {
        id: 'shiksha-v1',
        title: 'Shiksha V1',
        tagline: 'Offline AI Tutor for Low-Connectivity Regions',
        context: 'M.Tech Thesis • CUSAT',
        featured: true,

        hook: 'Democratized AI education with a privacy-first, offline tutor running on mobile devices',

        problem: {
            description: 'Students in rural India lack access to quality education due to poor internet connectivity',
            painPoints: [
                '450M+ students with limited/no internet access',
                'Existing AI tutors require cloud APIs (costly + privacy concerns)',
                'Mobile devices have limited RAM (2-4GB typical)',
                'Need NCERT curriculum alignment for relevance'
            ]
        },

        solution: {
            approach: 'Fine-tuned a Small Language Model with aggressive quantization for on-device inference',
            techStack: ['Qwen2.5-1.5B', 'QLoRA', 'GGUF', 'Hugging Face', 'Android NDK', 'llama.cpp'],
            keyFeatures: [
                'Fully offline operation (no API calls)',
                'NCERT-aligned curriculum (15k+ samples)',
                'Subject-specific tutoring (Math, Science, Social)',
                'Conversational interface with context memory',
                'Runs on 2GB RAM devices'
            ]
        },

        impact: {
            business: [
                { metric: 'Target Users', value: '500+ students', context: 'in pilot deployment' },
                { metric: 'Cost per Student', value: '$0/month', context: 'vs. $10-50 for cloud tutors' },
                { metric: 'Accessibility', value: '100% offline', context: 'zero internet requirement' }
            ],
            technical: [
                { metric: 'Model Size', value: '~900MB' },
                { metric: 'RAM Usage', value: '1.2GB' },
                { metric: 'Inference Speed', value: '10 tokens/sec' },
                { metric: 'BERTScore', value: '0.86' }
            ]
        },

        tags: [
            { label: 'Small LM', color: 'cyan' },
            { label: 'Edge AI', color: 'purple' },
            { label: 'Social Impact', color: 'green' }
        ],

        links: {
            github: 'https://github.com/Abbasam8910/shiksha-v1'
        }
    },

    {
        id: 'inventory',
        title: 'Inventory Reconciliation',
        tagline: 'NLP-Powered Fuzzy Matching for Pharma',
        context: 'Intellijohn Labs • Production System',
        featured: true,

        hook: 'Eliminated 1,000+ hours of manual data entry using intelligent fuzzy matching',

        problem: {
            description: 'Pharmaceutical distributors received inconsistent product names across vendors',
            painPoints: [
                'Same drug with 50+ name variations',
                'Manual reconciliation took 200+ hours/month',
                '15-20% error rate in manual matching',
                'Delayed inventory reports (compliance risk)'
            ]
        },

        solution: {
            approach: 'Built a BERT-based semantic matching system with custom preprocessing pipeline',
            techStack: ['BERT', 'Scikit-learn', 'Pandas', 'FastAPI', 'PostgreSQL', 'Docker'],
            keyFeatures: [
                'Fuzzy matching with semantic understanding',
                'Handles abbreviations, typos, variations',
                'Confidence scoring for manual review',
                'Batch processing (1000s of SKUs)',
                'Integration with existing ERP'
            ]
        },

        impact: {
            business: [
                { metric: 'Time Saved', value: '1,000+ hrs/year', context: 'automated matching' },
                { metric: 'Accuracy', value: '90%', context: 'vs. 82% manual' },
                { metric: 'Processing Speed', value: '5K SKUs/min', context: 'vs. 20/hr manual' }
            ],
            technical: [
                { metric: 'Matching Accuracy', value: '90%' },
                { metric: 'False Positive Rate', value: '<5%' },
                { metric: 'Latency', value: '<50ms per SKU' }
            ]
        },

        tags: [
            { label: 'NLP', color: 'cyan' },
            { label: 'BERT', color: 'purple' },
            { label: 'Production API', color: 'green' }
        ]
    },

    {
        id: 'automation',
        title: 'Automation Engine',
        tagline: 'Fault-Tolerant Workflow Orchestration',
        context: 'ForSyntax (Freelance) • Dec 2024 - Mar 2025',
        featured: false,

        hook: 'Built a reliable automation system processing 500+ daily events with 99.9% uptime',

        problem: {
            description: 'Educational institution struggled with manual parent-teacher communication',
            painPoints: [
                'Manual email/SMS sending (200+ messages daily)',
                'Fragile spreadsheet-based tracking',
                'Frequent human errors (missed notifications)',
                '20+ hours/week spent on admin tasks'
            ]
        },

        solution: {
            approach: 'Architected event-driven automation engine with n8n workflows and custom error handling',
            techStack: ['n8n', 'Node.js', 'Twilio SendGrid', 'WhatsApp API', 'Webhooks', 'PostgreSQL', 'Redis'],
            keyFeatures: [
                'Event-driven architecture (webhook triggers)',
                'Fault-tolerant retry logic',
                'Multi-channel delivery (email, SMS, WhatsApp)',
                'Template management system',
                'Real-time delivery tracking'
            ]
        },

        impact: {
            business: [
                { metric: 'Time Saved', value: '1,000+ hrs/year', context: 'automated communication' },
                { metric: 'Support Tickets', value: '70% reduction', context: 'fewer errors' },
                { metric: 'Scalability', value: '5x growth', context: 'no new staff' }
            ],
            technical: [
                { metric: 'System Uptime', value: '99.9%' },
                { metric: 'Events Processed', value: '500+ daily' },
                { metric: 'Avg Latency', value: '234ms' }
            ]
        },

        tags: [
            { label: 'Automation', color: 'cyan' },
            { label: 'n8n', color: 'purple' },
            { label: '99.9% Uptime', color: 'green' }
        ]
    }
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
    const [expanded, setExpanded] = useState(false);

    const colorClasses = {
        cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        green: 'bg-green-500/10 text-green-400 border-green-500/20'
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
        >
            {/* Header */}
            <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {study.title}
                            </h3>
                            <StatusIndicator status="deployed" />
                        </div>
                        <p className="text-base sm:text-lg text-gray-400 mb-3">{study.tagline}</p>
                        <p className="text-sm text-gray-500 font-mono">{study.context}</p>
                    </div>

                    {study.links && (
                        <div className="flex gap-3">
                            {study.links.github && (
                                <a href={study.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {study.links.demo && (
                                <a href={study.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                        <span key={tag.label} className={`px-3 py-1 text-xs font-medium rounded-full border ${colorClasses[tag.color as keyof typeof colorClasses]}`}>
                            {tag.label}
                        </span>
                    ))}
                </div>

                {/* Hook */}
                <p className="text-base sm:text-lg md:text-xl text-white mb-8 leading-relaxed">
                    {study.hook}
                </p>

                {/* Problem */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl sm:text-2xl">⚠️</span>
                        <h4 className="text-base sm:text-lg font-bold text-white">The Problem</h4>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 mb-4">{study.problem.description}</p>
                    <ul className="space-y-2">
                        {study.problem.painPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400">
                                <span className="text-red-400 mt-1">•</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Solution */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl sm:text-2xl">💡</span>
                        <h4 className="text-base sm:text-lg font-bold text-white">The Solution</h4>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 mb-4">{study.solution.approach}</p>
                    <div className="flex flex-wrap gap-2">
                        {study.solution.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full border border-cyan-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Impact */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl sm:text-2xl">📊</span>
                        <h4 className="text-base sm:text-lg font-bold text-white">The Impact</h4>
                    </div>

                    {/* Business Metrics */}
                    <div className="mb-4">
                        <p className="text-sm text-gray-400 mb-3 font-semibold">Business Results:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {study.impact.business.map((item) => (
                                <div key={item.metric} className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                                    <div className="text-green-400 font-bold text-lg">{item.value}</div>
                                    <div className="text-white text-sm">{item.metric}</div>
                                    <div className="text-gray-500 text-xs">{item.context}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Metrics */}
                    <div>
                        <p className="text-sm text-gray-400 mb-3 font-semibold">Technical Achievements:</p>
                        <div className="flex flex-wrap gap-2">
                            {study.impact.technical.map((item) => (
                                <span key={item.metric} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20">
                                    {item.metric}: {item.value}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Expandable Technical Details */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
                >
                    <span className="text-sm">Technical Deep Dive</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                </button>

                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-white/10"
                    >
                        <h5 className="text-white font-semibold mb-3">Key Features:</h5>
                        <ul className="space-y-2">
                            {study.solution.keyFeatures.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-400">
                                    <span className="text-blue-400 mt-1">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.article>
    );
}

export default function DetailedCaseStudies() {
    return (
        <section id="projects" className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-12 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 opacity-50"
                style={{
                    background: 'radial-gradient(circle at center right, rgba(30, 58, 138, 0.12) 0%, transparent 55%)'
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <TerminalHeader command="cd">Case Studies</TerminalHeader>
                    <p className="text-xl text-gray-400 max-w-2xl mt-4">
                        Production ML systems with measurable business impact
                    </p>
                </motion.div>

                {/* Case Studies */}
                <div className="space-y-8">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
