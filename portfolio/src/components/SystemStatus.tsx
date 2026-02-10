"use client";

import React from "react";
import { motion } from "framer-motion";

interface SystemStatusProps {
    isOnline?: boolean;
}

export default function SystemStatus({ isOnline = true }: SystemStatusProps) {
    return (
        <motion.div
            className="relative w-max mb-8 rotate-2-ccw"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
            {/* Tape */}
            <div className="tape-strip -top-3 left-1/2 -translate-x-1/2 rotate-3 bg-white/30" />

            <div className="bg-slate-800 px-6 py-3 shadow-sharp border border-slate-600">
                <div className="flex items-center gap-3">
                    <span
                        className={`w-2 h-2 rounded-full ${isOnline
                                ? "bg-neon-green animate-pulse shadow-[0_0_10px_#39FF14]"
                                : "bg-red-500"
                            }`}
                    />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-electric-blue">
                        System Status: {isOnline ? "Online & Hirable" : "Offline"}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
