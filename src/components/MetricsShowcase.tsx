'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Sparkline from './Sparkline';
import TerminalHeader from './TerminalHeader';

interface Metric {
    value: number;
    suffix: string;
    label: string;
    context: string;
    icon: string;
    trend?: number[]; // Sparkline data
}

const metrics: Metric[] = [
    {
        value: 90,
        suffix: '%',
        label: 'Accuracy Achieved',
        context: 'Inventory reconciliation system',
        icon: '🎯',
        trend: [75, 78, 82, 85, 88, 90]
    },
    {
        value: 1000,
        suffix: '+',
        label: 'Hours Saved',
        context: 'Annually through automation',
        icon: '⚡',
        trend: [200, 400, 650, 800, 920, 1000]
    },
    {
        value: 99.9,
        suffix: '%',
        label: 'System Uptime',
        context: 'Fault-tolerant workflows',
        icon: '🚀',
        trend: [98.5, 99.0, 99.3, 99.5, 99.7, 99.9]
    },
    {
        value: 10,
        suffix: '',
        label: 'Tokens/Sec',
        context: 'Edge SLM on mobile CPU',
        icon: '📱',
        trend: [5, 6, 7, 8, 9, 10]
    },
    {
        value: 6,
        suffix: '',
        label: 'Models in Production',
        context: 'Real-world deployments',
        icon: '🤖',
        trend: [1, 2, 3, 4, 5, 6]
    },
    {
        value: 85,
        suffix: '%',
        label: 'Incident Reduction',
        context: 'Safety monitoring system',
        icon: '🛡️',
        trend: [40, 55, 65, 72, 78, 85]
    }
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = easeOut * value;

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [isInView, value, duration]);

    return (
        <div ref={ref} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            {count.toFixed(value % 1 !== 0 ? 1 : 0)}
            <span className="text-cyan-400">{suffix}</span>
        </div>
    );
}

export default function MetricsShowcase() {
    return (
        <section className="relative bg-[#0a0a0a] py-20 md:py-32 px-4 md:px-12 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-blue-950/8 to-[#0a0a0a]" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <TerminalHeader command="cat">Impact by the Numbers</TerminalHeader>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
                        Production AI systems with measurable business outcomes
                    </p>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-glow">
                                {/* Icon */}
                                <div className="text-4xl mb-4">{metric.icon}</div>

                                {/* Animated Counter */}
                                <AnimatedCounter value={metric.value} suffix={metric.suffix} />

                                {/* Sparkline Trend */}
                                {metric.trend && (
                                    <div className="mt-3 mb-2 flex justify-center">
                                        <Sparkline data={metric.trend} color="#00d9ff" height={30} width={100} />
                                    </div>
                                )}

                                {/* Label */}
                                <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 mb-2">
                                    {metric.label}
                                </h3>

                                {/* Context */}
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                    {metric.context}
                                </p>

                                {/* Hover Effect - Accent Border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-6">
                        Interested in the technical details?
                    </p>
                    <a
                        href="#projects"
                        className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-all shadow-lg shadow-cyan-500/50 hover:shadow-glow"
                    >
                        Explore Case Studies
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
