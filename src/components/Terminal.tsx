"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bootLines = [
    { prefix: "> [INFO]", text: "Loading core modules...", color: "text-slate-400" },
    { prefix: "> [OK]", text: "Kubernetes cluster ready", color: "text-neon-green" },
    { prefix: "> [OK]", text: "AI Agents initialized (gpt-4-turbo)", color: "text-neon-green" },
    { prefix: "> [OK]", text: "Backend microservices active", color: "text-neon-green" },
    { prefix: "> [INFO]", text: "Fetching latest contribution graph...", color: "text-slate-400" },
];

const profileData = {
    name: "Shreya Gupta",
    subtitle: "B.Tech CSE • SRE/DevOps & AI",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhr4fo_sW1x1MpgsMbr_wVZFbzU-l9W9V62Vvcey6s-Z_mz1gzIuvU4hUS9zhVsOcXEOIVxfJyn_xE3Nd_uMI4ESOhDJgtoN8OhOGdNuzN3rp__VvE4RIfUdGCEh5U6nt8jItjKxnAtUARkx4oNVWTjKYZQiTIcDo_K6mKgJEdrv_aWCYSnC364w6KdvRzSeTKL824iJsbzAHMnURxYu9s4SZH6LfUhxNu4FySV_txlVcA1jEWV_rkl7cdzOc6Dv63Cp1pSDx_ToaP",
};

export default function Terminal() {
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleLines((prev) => {
                if (prev >= bootLines.length) {
                    clearInterval(timer);
                    return prev;
                }
                return prev + 1;
            });
        }, 400);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative z-10 glass-terminal h-full min-h-[500px] flex flex-col font-mono rotate-2-cw group">
            {/* CRT Scanline overlay */}
            <div className="scanline-overlay rounded-lg" />

            {/* Title bar */}
            <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-700 rounded-t-lg relative z-20">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_6px_rgba(234,179,8,0.5)]" />
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="text-slate-400 font-bold text-xs uppercase tracking-wider">
                    root@shreya-dev:~
                </div>
                <div className="text-slate-500 text-xs">zsh</div>
            </div>

            {/* Terminal body */}
            <div className="p-6 overflow-y-auto flex-1 text-sm md:text-base leading-relaxed font-mono text-neon-green/90 bg-slate-950/80 rounded-b-lg relative z-20">
                {/* Init command */}
                <div className="mb-6">
                    <div className="flex gap-2 text-electric-blue">
                        <span className="font-bold">➜</span>
                        <span>~</span>
                        <span className="text-white">./init_portfolio.sh --verbose</span>
                    </div>

                    {/* Boot lines with typing animation */}
                    <div className="pl-4 mt-3 space-y-2 text-slate-400 font-light text-xs md:text-sm">
                        {bootLines.map((line, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={
                                    i < visibleLines
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: -10 }
                                }
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-electric-blue/60">{line.prefix}</span>{" "}
                                <span className={line.color}>{line.text}</span>
                            </motion.p>
                        ))}
                    </div>
                </div>

                {/* Whoami */}
                {visibleLines >= bootLines.length && (
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <div className="flex gap-2 text-electric-blue">
                            <span className="font-bold">➜</span>
                            <span>~</span>
                            <span className="text-white">whoami</span>
                        </div>
                        <div className="pl-4 mt-4 p-4 border border-slate-700 bg-slate-900/50 rounded backdrop-blur-sm hover:border-electric-blue/50 transition-colors duration-300">
                            <div className="flex items-center gap-4">
                                <img
                                    alt="Avatar"
                                    className="w-14 h-14 rounded border-2 border-slate-600 grayscale hover:grayscale-0 transition-all duration-500 object-cover hover:border-electric-blue hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                                    src={profileData.avatar}
                                />
                                <div>
                                    <p className="font-bold text-lg text-white">
                                        {profileData.name}
                                    </p>
                                    <p className="text-amber-code text-xs">
                                        {profileData.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Blinking cursor — smooth blink */}
                <div className="flex gap-2 text-electric-blue">
                    <span className="font-bold">➜</span>
                    <span>~</span>
                    <span
                        className="w-2.5 h-5 bg-neon-green block animate-blink shadow-[0_0_8px_rgba(57,255,20,0.6)]"
                    />
                </div>
            </div>
        </div>
    );
}
