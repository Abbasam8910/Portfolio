'use client';

/**
 * GridOverlay - Subtle grid background for tech aesthetic
 * Creates a Matrix-style grid overlay across the entire viewport
 */
export default function GridOverlay() {
    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
            }}
        />
    );
}
