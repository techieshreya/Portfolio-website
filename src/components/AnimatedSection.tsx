"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

/**
 * Wraps content in a scroll-triggered fade-in-up animation.
 * Uses Framer Motion's whileInView for viewport-based triggering.
 */
export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
}: AnimatedSectionProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
