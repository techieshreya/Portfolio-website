"use client";

import React from "react";
import { motion } from "framer-motion";

const techItems = [
    { icon: "code", label: "C++" },
    { icon: "language", label: "JS/TS" },
    { icon: "terminal", label: "Python" },
    { icon: "web", label: "Next.js" },
    { icon: "psychology", label: "GenAI" },
    { icon: "database", label: "PostgreSQL" },
    { icon: "deployed_code", label: "Docker" },
    { icon: "monitoring", label: "Power BI" },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" as const },
    },
};

export default function TechStack() {
    return (
        <motion.div
            className="grid grid-cols-4 md:grid-cols-8 gap-6 w-full items-center py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {techItems.map((item) => (
                <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex flex-col items-center gap-2 group cursor-default"
                >
                    <span
                        className="material-symbols-outlined text-slate-600 group-hover:text-safety-orange transition-colors duration-200"
                        style={{ fontSize: 36 }}
                    >
                        {item.icon}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                        {item.label}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
}
