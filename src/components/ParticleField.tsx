'use client';

/**
 * ParticleField - Floating particles for futuristic depth effect
 * Creates 20 animated particles that float vertically across the viewport
 */
export default function ParticleField() {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 30}s`,
        animationDuration: `${30 + Math.random() * 30}s`, // 30-60s
        size: 2 + Math.random() * 3, // 2-5px
    }));

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-cyan-500/40 blur-sm"
                    style={{
                        left: particle.left,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animation: `particle-float ${particle.animationDuration} linear ${particle.animationDelay} infinite`,
                        boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
                    }}
                />
            ))}
        </div>
    );
}
