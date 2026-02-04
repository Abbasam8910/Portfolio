'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProcessStep {
    number: number;
    title: string;
    description: string;
    points: string[];
    example: {
        project: string;
        story: string;
    };
}

const steps: ProcessStep[] = [
    {
        number: 1,
        title: 'Define',
        description: 'I start by understanding the business problem, not jumping to ML solutions',
        points: [
            'Interview stakeholders',
            'Observe current manual process',
            'Define quantifiable success metrics',
            'Determine if ML is the right solution'
        ],
        example: {
            project: 'IntelliVision',
            story: 'Before writing code, I shadowed safety officers for 2 days to understand their workflow. This revealed that the real problem wasn\'t detection accuracy—it was alert fatigue. We optimized for fewer false positives.'
        }
    },
    {
        number: 2,
        title: 'Build',
        description: 'Models are only as good as their data. I invest heavily in data quality',
        points: [
            'Dataset curation and cleaning',
            'Annotation quality (tight bounding boxes)',
            'Augmentation based on real-world failures',
            'Continuous data collection from production'
        ],
        example: {
            project: 'IntelliVision',
            story: 'Initial 1k images gave 65% recall. Scaled to 6k with tighter labels and hard negative mining → 88% recall. Data-centric approach made the difference.'
        }
    },
    {
        number: 3,
        title: 'Deploy',
        description: 'Research code ≠ Production code. I build for reliability and maintainability',
        points: [
            'Error handling, retries, fallbacks',
            'Observability (logging, metrics, alerts)',
            'Containerization and load testing',
            'Documentation and CI/CD pipelines'
        ],
        example: {
            project: 'Automation Engine',
            story: 'Built retry logic with exponential backoff, dead letter queues, and real-time alerting → 99.9% uptime. Production engineering is about handling failures gracefully.'
        }
    }
];

function StepCard({ step, index, isExpanded, onClick }: {
    step: ProcessStep;
    index: number;
    isExpanded: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
        >
            <div
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 cursor-pointer hover:bg-white/10 transition-all duration-300 ${isExpanded ? 'ring-2 ring-blue-500/50' : ''
                    }`}
                onClick={onClick}
            >
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-400">{step.number}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2 mb-4">
                    {step.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">✓</span>
                            <span className="text-gray-400 text-sm">{point}</span>
                        </div>
                    ))}
                </div>

                {/* Expand Indicator */}
                <div className="text-sm text-gray-500 font-medium">
                    {isExpanded ? '▼ Hide example' : '▶ Show real example'}
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-6 border-t border-white/10"
                    >
                        <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                            <p className="text-sm text-blue-400 font-semibold mb-2">
                                Example: {step.example.project}
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed italic">
                                "{step.example.story}"
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Arrow Connector (except last) */}
            {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                    <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                        <path d="M0 20 L50 20 M50 20 L40 10 M50 20 L40 30" stroke="#3b82f6" strokeWidth="2" />
                    </svg>
                </div>
            )}
        </motion.div>
    );
}

export default function ProcessSection() {
    const [expandedStep, setExpandedStep] = useState<number | null>(null);

    return (
        <section className="relative bg-gradient-to-b from-[#0a0a0a] via-blue-950/5 to-[#0a0a0a] py-24 md:py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My Approach
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        How I take ML projects from problem definition to production deployment
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
                    {steps.map((step, index) => (
                        <StepCard
                            key={step.number}
                            step={step}
                            index={index}
                            isExpanded={expandedStep === step.number}
                            onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-6">
                        Want to see this approach in action?
                    </p>
                    <a
                        href="#projects"
                        className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors"
                    >
                        View Case Studies
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
