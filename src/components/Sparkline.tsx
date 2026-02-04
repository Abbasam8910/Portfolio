'use client';

import { motion } from 'framer-motion';

/**
 * Sparkline - Mini line chart for showing metric trends
 * Pure CSS/SVG implementation, no external libraries
 */
interface SparklineProps {
    data: number[];
    color?: string;
    height?: number;
    width?: number;
}

export default function Sparkline({
    data,
    color = '#00d9ff',
    height = 40,
    width = 80
}: SparklineProps) {
    if (data.length < 2) return null;

    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    // Generate SVG path
    const points = data.map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return `${x},${y}`;
    });

    const path = `M ${points.join(' L ')}`;

    return (
        <svg
            width={width}
            height={height}
            className="inline-block"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
        >
            {/* Area fill */}
            <motion.path
                d={`${path} L ${width},${height} L 0,${height} Z`}
                fill={`url(#gradient-${color})`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
            />

            {/* Line */}
            <motion.path
                d={path}
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Gradient definition */}
            <defs>
                <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}
