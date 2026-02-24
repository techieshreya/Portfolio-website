"use client";

import React from "react";
import { motion } from "framer-motion";
import BlueprintCard from "./BlueprintCard";
import { services } from "@/data/services";

export default function Services() {
    return (
        <div className="max-w-7xl mx-auto px-6 mb-32">
            <div className="relative flex justify-center mb-16">
                <span className="bg-blueprint-dark px-10 py-3 text-xl font-bold uppercase tracking-widest font-mono text-electric-blue border border-electric-blue/30 shadow-lg rotate-1 text-glow">
                    Service Packages
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <BlueprintCard
                        key={service.title}
                        rotation={index % 2 === 0 ? "rotate-1-cw" : "rotate-1-ccw"}
                        className="p-8 flex flex-col h-full bg-slate-900/50 backdrop-blur-sm border-slate-700 group/service"
                        animDelay={index * 0.15}
                    >
                        {/* Hover gradient glow overlay */}
                        <div className="absolute inset-0 rounded-sm opacity-0 group-hover/service:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-safety-orange/5 via-transparent to-electric-blue/5" />

                        <div className="mb-6 flex justify-between items-start relative z-10">
                            <div className="p-3 bg-slate-800/80 rounded border border-slate-600 shadow-sm group-hover/service:border-safety-orange/50 group-hover/service:shadow-[0_0_15px_rgba(255,87,34,0.15)] transition-all duration-300">
                                <span className="material-symbols-outlined text-3xl text-safety-orange group-hover/service:scale-110 group-hover/service:animate-pulse transition-transform duration-300 inline-block">
                                    {service.icon}
                                </span>
                            </div>
                            <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded bg-slate-900">
                                B2B
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight relative z-10">
                            {service.title}
                        </h3>
                        <p className="font-mono text-xs text-electric-blue mb-4 uppercase tracking-wide relative z-10">
                            Target: {service.target}
                        </p>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-slate-700 pl-4 group-hover/service:border-l-safety-orange/60 transition-colors duration-300 relative z-10">
                            {service.description}
                        </p>

                        <div className="mb-6 relative z-10">
                            <div className="flex flex-wrap gap-2">
                                {service.technologies.map(tech => (
                                    <span key={tech} className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 hover:border-electric-blue/50 hover:text-slate-300 transition-all duration-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-dashed border-slate-700 relative z-10">
                            <p className="text-xs font-bold text-neon-green font-mono group-hover/service:text-glow transition-all duration-300">
                                {service.outcome}
                            </p>
                        </div>
                    </BlueprintCard>
                ))}
            </div>
        </div>
    );
}
