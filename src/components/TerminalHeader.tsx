'use client';

import { ReactNode } from 'react';

/**
 * TerminalHeader - CLI-style section header
 * Creates a terminal/command-line aesthetic for section titles
 */
interface TerminalHeaderProps {
    children: ReactNode;
    command?: string;
}

export default function TerminalHeader({ children, command = 'ls' }: TerminalHeaderProps) {
    return (
        <div className="font-mono text-sm mb-8">
            {/* Terminal prompt */}
            <div className="flex items-center gap-2 text-gray-500 mb-2 overflow-x-auto">
                <span className="text-cyan-400">→</span>
                <span className="text-gray-400">{command}</span>
                <span className="text-cyan-500">/portfolio/{String(children).toLowerCase().replace(/\s+/g, '-')}</span>
            </div>

            {/* Actual heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {children}
            </h2>

            {/* Terminal cursor */}
            <div className="flex items-center gap-2 mt-2 text-cyan-400">
                <span className="animate-pulse">▊</span>
                <span className="text-xs text-gray-500">Ready</span>
            </div>
        </div>
    );
}
