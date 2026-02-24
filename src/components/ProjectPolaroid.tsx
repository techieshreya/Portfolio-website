"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface ProjectData {
    title: string;
    tagline: string;
    category: string;
    categoryPosition?: "left" | "right";
    categoryBg?: string;
    tags: string[];
    link: { label: string; href: string; icon: string };
    visual: React.ReactNode;
}

interface ProjectPolaroidProps {
    project: ProjectData;
    rotation?: string;
    animDelay?: number;
}

export default function ProjectPolaroid({
    project,
    rotation = "rotate-1-cw",
    animDelay = 0,
}: ProjectPolaroidProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            className={`group polaroid-frame bg-white ${rotation} hover:!rotate-0 transition-all duration-300 relative`}
            style={{ perspective: 800, rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: animDelay, ease: "easeOut" }}
        >
            {/* Tape strip */}
            <div className="tape-strip -top-4 left-1/2 -translate-x-1/2 rotate-2 bg-slate-200/50" />

            {/* Image area */}
            <div className="h-72 relative overflow-hidden flex items-center justify-center border border-slate-200 mb-6 bg-slate-50">
                {/* Dot pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                        backgroundSize: "20px 20px",
                    }}
                />

                {/* Gradient overlay that shifts on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/0 via-transparent to-safety-orange/0 group-hover:from-electric-blue/10 group-hover:to-safety-orange/10 transition-all duration-500 pointer-events-none z-10" />

                {/* Blueprint wireframe overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    {/* Grid lines */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(0,229,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.15) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                        }}
                    />
                    {/* Corner brackets */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-electric-blue/60" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-electric-blue/60" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-electric-blue/60" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-electric-blue/60" />
                    {/* Center crosshair */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-electric-blue/40" />
                        <div className="absolute left-1/2 top-0 h-full w-px bg-electric-blue/40" />
                    </div>
                </div>

                {/* Project visual */}
                {project.visual}

                {/* Category badge */}
                <div
                    className={`absolute top-4 ${project.categoryPosition === "right" ? "right-4" : "left-4"} ${project.categoryBg ?? "bg-slate-900 text-white"} px-4 py-1 font-mono font-bold text-xs uppercase shadow-md ${project.categoryPosition === "right" ? "rotate-2" : "-rotate-2"}`}
                >
                    {project.category}
                </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-2">
                <h3 className="text-3xl font-bold mb-3 uppercase font-sans text-slate-900 tracking-tight">
                    {project.title}
                </h3>
                <p className="text-slate-600 mb-6 font-medium text-base leading-relaxed italic border-l-4 border-slate-200 pl-4 group-hover:border-l-safety-orange transition-colors duration-300">
                    &ldquo;{project.tagline}&rdquo;
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-slate-100 text-slate-700 border border-slate-300 px-3 py-1 text-xs font-mono font-bold rounded-sm hover:bg-slate-200 hover:border-safety-orange/50 transition-all duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Link */}
                <a
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase text-safety-orange hover:text-orange-700 hover:underline decoration-2 transition-all duration-200 group/link"
                    href={project.link.href}
                >
                    {project.link.label}{" "}
                    <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform duration-200">
                        {project.link.icon}
                    </span>
                </a>
            </div>
        </motion.div>
    );
}
