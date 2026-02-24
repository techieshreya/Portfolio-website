"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/data/tech-stack";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" as const },
    },
};

export default function TechStack() {
    return (
        <div className="w-full">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-start py-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {techStack.map((category) => (
                    <motion.div
                        key={category.title}
                        variants={itemVariants}
                        className="flex flex-col gap-4 group cursor-default"
                    >
                        <div className="flex items-center gap-3 border-b border-slate-700 pb-2 mb-2 group-hover:border-safety-orange/50 transition-colors duration-300">
                            <span
                                className="material-symbols-outlined text-safety-orange transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                                style={{ fontSize: 24 }}
                            >
                                {category.icon}
                            </span>
                            <h3 className="font-mono text-sm font-bold text-electric-blue uppercase tracking-wider group-hover:text-glow transition-all duration-300">
                                {category.title}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="bg-slate-800/50 border border-slate-700 text-slate-300 px-2.5 py-1 text-xs font-mono rounded hover:border-safety-orange hover:text-white hover:bg-slate-700/80 hover:shadow-[0_0_12px_rgba(255,87,34,0.2)] transition-all duration-300 cursor-default hover:scale-105"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
