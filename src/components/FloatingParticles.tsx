"use client";

import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
    color: string;
}

const COLORS = [
    "rgba(0, 229, 255, 0.4)",   // electric-blue
    "rgba(255, 87, 34, 0.3)",   // safety-orange
    "rgba(57, 255, 20, 0.25)",  // neon-green
    "rgba(255, 191, 0, 0.2)",   // amber
];

export default function FloatingParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const generated: Particle[] = Array.from({ length: 18 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 10 + 8,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.4 + 0.1,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        }));
        setParticles(generated);
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                        opacity: p.opacity,
                        animation: `float-slow ${p.duration}s ease-in-out ${p.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}
