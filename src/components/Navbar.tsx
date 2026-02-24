"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            className={`sticky top-0 z-50 w-full px-6 transition-all duration-500 ${scrolled
                    ? "py-3 backdrop-blur-xl bg-white/80 shadow-lg border-b border-slate-200/50"
                    : "py-6"
                }`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className={`px-6 py-4 flex justify-between items-center rounded-sm transition-all duration-500 ${scrolled
                            ? "bg-transparent shadow-none border-none"
                            : "paper-card rotate-1-ccw bg-white text-slate-900 border-b-4 border-slate-300"
                        }`}
                >
                    {/* Chrome pins — only visible when not scrolled */}
                    {!scrolled && (
                        <>
                            <motion.div
                                className="pin pin-chrome left-4 top-3"
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.3 }}
                            />
                            <motion.div
                                className="pin pin-chrome right-4 top-3"
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.4 }}
                            />
                        </>
                    )}

                    {/* Logo */}
                    <div className="flex items-center gap-4 mt-2">
                        <div className="w-10 h-10 bg-blueprint-dark text-electric-blue flex items-center justify-center font-bold text-lg rounded-sm shadow-sm border border-slate-600">
                            &lt;/&gt;
                        </div>
                        <span className="font-bold text-2xl tracking-tighter uppercase font-mono text-slate-800">
                            DEV_<span className="text-safety-orange">ENGINEER</span>
                        </span>
                    </div>

                    {/* Desktop navigation links */}
                    <div className="hidden md:flex gap-8 items-center font-bold text-sm uppercase tracking-wider font-mono text-slate-600">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                className="relative hover:text-safety-orange transition-colors group py-1"
                                href={link.href}
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-safety-orange transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA + Mobile toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#contact"
                            className="relative bg-safety-orange text-white px-5 py-2 font-bold uppercase shadow-sharp hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-sm rounded-sm tracking-wide border border-orange-700 overflow-hidden group"
                        >
                            <span className="relative z-10">Contact Me</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden flex flex-col gap-1.5 p-2 group"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                            <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile menu drawer */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            className="md:hidden mt-2 rounded-sm overflow-hidden border border-slate-200 shadow-lg bg-white/95 backdrop-blur-lg"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="flex flex-col py-4">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        className="px-6 py-3 font-bold text-sm uppercase tracking-wider font-mono text-slate-700 hover:text-safety-orange hover:bg-slate-50 transition-all"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <span className="text-safety-orange mr-2">&gt;</span>
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
