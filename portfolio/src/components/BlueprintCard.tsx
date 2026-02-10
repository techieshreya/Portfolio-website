"use client";

import React from "react";
import { motion } from "framer-motion";

type Variant = "white" | "slate" | "orange";
type PinStyle = "red" | "chrome";
type Rotation =
    | "rotate-1-cw"
    | "rotate-2-cw"
    | "rotate-3-cw"
    | "rotate-1-ccw"
    | "rotate-2-ccw"
    | "rotate-3-ccw"
    | "none";

interface PinConfig {
    style?: PinStyle;
    position?: string;
}

interface BlueprintCardProps {
    variant?: Variant;
    rotation?: Rotation;
    pins?: PinConfig[];
    borderAccent?: string;
    className?: string;
    children: React.ReactNode;
    /** Stagger delay for the card entrance (seconds) */
    animDelay?: number;
}

const variantStyles: Record<Variant, string> = {
    white: "paper-card bg-white text-slate-900",
    slate: "paper-slate border border-slate-600",
    orange: "paper-orange border border-orange-800",
};

export default function BlueprintCard({
    variant = "white",
    rotation = "none",
    pins = [],
    borderAccent = "",
    className = "",
    children,
    animDelay = 0,
}: BlueprintCardProps) {
    const rotationClass = rotation === "none" ? "" : rotation;

    return (
        <motion.div
            className={`relative ${variantStyles[variant]} ${rotationClass} ${borderAccent} ${className}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: animDelay, ease: "easeOut" }}
        >
            {/* Animated pins — drop in with a slight bounce */}
            {pins.map((pin, i) => (
                <motion.div
                    key={i}
                    className={`pin ${pin.style === "chrome" ? "pin-chrome" : ""} ${pin.position ?? ""}`}
                    initial={{ y: -40, opacity: 0, scale: 0.6 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        delay: animDelay + 0.15 + i * 0.08,
                    }}
                />
            ))}
            {children}
        </motion.div>
    );
}
