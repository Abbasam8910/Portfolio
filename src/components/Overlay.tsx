'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';

// Sections data for Abbas A.M.
const sections = [
    {
        id: 1,
        type: 'hero',
        text: "ABBAS A.M.",
        subtext: "AI/ML Engineer | Computer Vision Specialist",
        start: 0,
        end: 0.15
    },
    {
        id: 2,
        type: 'card_left',
        title: "Bridging R&D and Production",
        text: "Specializing in Quantization, Edge AI, and Scalable Data Pipelines.",
        start: 0.25,
        end: 0.45
    },
    {
        id: 3,
        type: 'card_right',
        title: "Powered by Precision",
        text: "PyTorch • YOLOv8 • Qwen/Llama • Docker • n8n",
        start: 0.55,
        end: 0.75
    }
];

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between h-full">
            {sections.map((section) => (
                <Section
                    key={section.id}
                    item={section}
                    progress={scrollYProgress}
                />
            ))}
        </div>
    );
}

type SectionItem = {
    id: number;
    type: string;
    text: string;
    subtext?: string; // Optional for hero
    title?: string; // Optional for cards
    start: number;
    end: number;
};

function Section({ item, progress }: { item: SectionItem, progress: MotionValue<number> }) {
    const opacity = useTransform(
        progress,
        [item.start, (item.start + item.end) / 2, item.end],
        [0, 1, 0]
    );

    const y = useTransform(
        progress,
        [item.start, item.end],
        [50, -50]
    );

    // Layout Logic
    let alignClass = 'items-center';
    if (item.type === 'card_left') alignClass = 'items-start pl-6 md:pl-24';
    if (item.type === 'card_right') alignClass = 'items-end pr-6 md:pr-24';

    return (
        <motion.div
            style={{ opacity, y, display: useTransform(progress, p => (p >= item.start && p <= item.end) ? 'flex' : 'none') }}
            className={`absolute inset-0 flex justify-center flex-col ${alignClass} p-6`}
        >
            {item.type === 'hero' ? (
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-3 md:mb-4 drop-shadow-2xl">
                        {item.text}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-400 font-mono mb-6 md:mb-8 tracking-wide uppercase">
                        {item.subtext}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="pointer-events-auto px-6 py-2.5 md:px-8 md:py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs md:text-sm tracking-widest transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-glow relative overflow-hidden group"
                    >
                        <span className="relative z-10">VIEW RESUME</span>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </motion.button>
                </div>
            ) : (
                <div className={`max-w-xl backdrop-blur-xl bg-black/40 border border-white/10 p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl ${item.type === 'card_right' ? 'text-right' : 'text-left'}`}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                        {item.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                        {item.text}
                    </p>
                </div>
            )}
        </motion.div>
    );
}
