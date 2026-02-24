"use client";

import React from "react";
import BlueprintCard from "./BlueprintCard";
import { profile } from "@/data/profile";

export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto px-6 mb-32 relative z-10">
            <BlueprintCard
                rotation="rotate-1-ccw"
                pins={[
                    { style: "chrome", position: "top-4 left-4" },
                    { style: "chrome", position: "top-4 right-4" },
                    { style: "chrome", position: "bottom-4 left-4" },
                    { style: "chrome", position: "bottom-4 right-4" },
                ]}
                className="p-10 md:p-16 flex flex-col items-center text-center bg-slate-950 border-2 border-slate-700 shadow-2xl relative overflow-hidden group"
                animDelay={0.2}
            >
                {/* Background gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-safety-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Uplink Visual with orbital rings */}
                <div className="mb-8 relative">
                    {/* Outer orbital ring */}
                    <div className="absolute -inset-6 rounded-full border border-dashed border-electric-blue/20 animate-spin-slow" />
                    {/* Inner orbital ring */}
                    <div className="absolute -inset-3 rounded-full border border-dashed border-safety-orange/20 animate-spin-reverse" />
                    {/* Orbital dot 1 */}
                    <div className="absolute -inset-6">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-electric-blue shadow-[0_0_8px_rgba(0,229,255,0.6)] animate-spin-slow" />
                    </div>
                    {/* Orbital dot 2 */}
                    <div className="absolute -inset-3">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-safety-orange shadow-[0_0_8px_rgba(255,87,34,0.6)] animate-spin-reverse" />
                    </div>

                    <div className="w-20 h-20 rounded-full border-4 border-slate-700 flex items-center justify-center bg-slate-800 relative z-10 group-hover:border-electric-blue/50 transition-colors duration-500">
                        <span className="material-symbols-outlined text-4xl text-neon-green animate-pulse">
                            satellite_alt
                        </span>
                    </div>
                    <div className="absolute inset-0 bg-neon-green/20 rounded-full blur-xl animate-pulse"></div>
                    {/* Connection lines */}
                    <div className="absolute top-1/2 left-full w-24 h-0.5 bg-gradient-to-r from-slate-700 to-transparent"></div>
                    <div className="absolute top-1/2 right-full w-24 h-0.5 bg-gradient-to-l from-slate-700 to-transparent"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-glow relative z-10">
                    Initialize Uplink
                </h2>
                <p className="font-mono text-slate-400 mb-10 max-w-lg leading-relaxed relative z-10">
                    Ready to deploy high-performance AI solutions? Establish a secure connection to discuss your mission objectives.
                </p>

                {/* Gradient CTA button */}
                <a
                    href={profile.socials.email}
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 font-bold text-lg uppercase tracking-wider rounded-sm overflow-hidden transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_40px_rgba(255,87,34,0.3)] z-10"
                >
                    {/* Animated gradient background */}
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-safety-orange via-orange-500 to-electric-blue bg-[length:200%_100%] transition-all duration-500"
                        style={{ animation: "gradient-shift 4s ease infinite" }}
                    />
                    <span className="relative z-10 text-white flex items-center gap-3">
                        <span className="material-symbols-outlined group-hover/btn:animate-bounce">
                            mail
                        </span>
                        Transmission: Send Email
                    </span>
                </a>

                <div className="mt-12 flex items-center gap-8 relative z-10">
                    <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group/social">
                        <div className="w-12 h-12 bg-slate-800 border border-slate-600 flex items-center justify-center rounded hover:border-electric-blue hover:text-electric-blue hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 text-slate-400 hover:scale-110">
                            <span className="material-symbols-outlined text-2xl">
                                add_link
                            </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase group-hover/social:text-electric-blue transition-colors">LinkedIn</span>
                    </a>
                    <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group/social">
                        <div className="w-12 h-12 bg-slate-800 border border-slate-600 flex items-center justify-center rounded hover:border-electric-blue hover:text-electric-blue hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 text-slate-400 hover:scale-110">
                            <span className="material-symbols-outlined text-2xl">
                                code
                            </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase group-hover/social:text-electric-blue transition-colors">GitHub</span>
                    </a>
                </div>
            </BlueprintCard>
        </div>
    );
}
